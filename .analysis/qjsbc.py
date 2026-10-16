#!/usr/bin/env python3
"""QuickJS (AIOT/Vela fork of 2021-03-27) .jsc bytecode parser + disassembler.

Container: [BC_VERSION u8][leb atom_count][atom strings][object graph]
Object tags and layouts follow quickjs.c 2021-03-27 (BC_TAG_*), with the fork's
opcode table (opcode_table_final.json) extracted from aiotjsc.
"""
import json, struct, sys, os

TAGS = {1:"NULL",2:"UNDEFINED",3:"BOOL_FALSE",4:"BOOL_TRUE",5:"INT32",6:"FLOAT64",
        7:"STRING",8:"OBJECT",9:"ARRAY",10:"BIG_INT",11:"BIG_FLOAT",12:"BIG_DECIMAL",
        13:"TEMPLATE_OBJECT",14:"FUNCTION_BYTECODE",15:"MODULE",16:"TYPED_ARRAY",
        17:"ARRAY_BUFFER",18:"SHARED_ARRAY_BUFFER",19:"DATE",20:"OBJECT_VALUE",
        21:"OBJECT_REFERENCE"}

OPS = json.load(open(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                                  "opcode_table_final.json")))

# Vela runtime predefined atoms (from aiotjsc DWARF; JS_ATOM_END = 212).
# Serialized atom references with value v: v&1 -> tagged int atom (v>>1);
# else idx = v>>1: idx < FIRST_ATOM -> predefined atom, else file atom table
# entry idx - FIRST_ATOM.  Bytecode atom u32s use the same index space
# without the low bit.
def _load_predef():
    d = {0: "<null>"}
    p = os.path.join(os.path.dirname(os.path.abspath(__file__)), "vela_predef_atoms.txt")
    for line in open(p):
        v, s = line.rstrip("\n").split("\t")
        d[int(v)] = s
    return d

PREDEF = _load_predef()
FIRST_ATOM = 212

class R:
    def __init__(self, buf, pos=0):
        self.b = buf; self.p = pos
    def u8(self):
        v = self.b[self.p]; self.p += 1; return v
    def u16(self):
        v = struct.unpack_from("<H", self.b, self.p)[0]; self.p += 2; return v
    def u32(self):
        v = struct.unpack_from("<I", self.b, self.p)[0]; self.p += 4; return v
    def i32(self):
        v = struct.unpack_from("<i", self.b, self.p)[0]; self.p += 4; return v
    def f64(self):
        v = struct.unpack_from("<d", self.b, self.p)[0]; self.p += 8; return v
    def leb(self):
        v = 0; sh = 0
        while True:
            x = self.u8()
            v |= (x & 0x7f) << sh
            if not (x & 0x80): return v
            sh += 7
    def sleb(self):
        v = 0; sh = 0
        while True:
            x = self.u8()
            v |= (x & 0x7f) << sh
            sh += 7
            if not (x & 0x80):
                if x & 0x40 and sh < 64: v -= (1 << sh)
                return v
    def jstr(self):
        n = self.leb()
        wide = n & 1; n >>= 1
        if wide:
            s = "".join(chr(struct.unpack_from("<H", self.b, self.p + 2*i)[0]) for i in range(n))
            self.p += 2*n
        else:
            s = self.b[self.p:self.p+n].decode("utf-8", "replace")
            self.p += n
        return s
    def buf(self, n):
        v = self.b[self.p:self.p+n]; self.p += n; return v

class Func:
    __slots__ = ("name","flags","js_mode","func_kind","arg_count","var_count",
                 "defined_arg_count","stack_size","closure_var_count","cpool_count",
                 "byte_code_len","local_count","vardefs","closure_vars","bc_off",
                 "bytecode","has_debug","filename","line_num","pc2line","cpool","depth","parent")

def atom_name(idx, atoms):
    """Resolve a serialized atom index (v>>1 space)."""
    if idx == 0:
        return "<null>"
    if idx < FIRST_ATOM:
        return PREDEF.get(idx, f"<predef{idx}>")
    i = idx - FIRST_ATOM
    return atoms[i] if i < len(atoms) else f"@{idx}?"

def read_atom(r, atoms):
    """bc_get_atom: leb v; v&1 = tagged int atom (v>>1); else string atom v>>1."""
    v = r.leb()
    if v & 1:
        return str(v >> 1)
    return atom_name(v >> 1, atoms)

def bc_atom_u32(v, atoms):
    """Atom operand inside serialized bytecode: bc_atom_to_idx stores the
    raw JSAtom value -- predefined/file atoms as plain index, tagged int
    atoms with JS_ATOM_TAG_INT (bit 31) set."""
    if v & 0x80000000:
        return str(v & 0x7fffffff)
    return atom_name(v, atoms)

def parse_function(r, atoms, depth, parent):
    f = Func()
    f.depth = depth; f.parent = parent
    v16 = r.u16()
    f.flags = v16
    f.has_debug = bool(v16 & (1 << 10))
    f.func_kind = (v16 >> 4) & 3
    f.js_mode = r.u8()
    f.name = read_atom(r, atoms)
    f.arg_count = r.leb(); f.var_count = r.leb()
    f.defined_arg_count = r.leb(); f.stack_size = r.leb()
    f.closure_var_count = r.leb(); f.cpool_count = r.leb()
    f.byte_code_len = r.leb(); f.local_count = r.leb()
    f.vardefs = []
    for _ in range(f.local_count):
        vn = read_atom(r, atoms); sl = r.leb(); sn = r.leb(); fl = r.u8()
        f.vardefs.append((vn, sl, sn, fl))
    f.closure_vars = []
    for _ in range(f.closure_var_count):
        vn = read_atom(r, atoms); vidx = r.leb(); fl = r.u8()
        f.closure_vars.append((vn, vidx, fl))
    f.bc_off = r.p
    f.bytecode = r.buf(f.byte_code_len)
    f.filename = None; f.line_num = None; f.pc2line = None
    if f.has_debug:
        f.filename = read_atom(r, atoms)
        f.line_num = r.leb()
        pcl = r.leb(); f.pc2line = r.buf(pcl) if pcl else b""
    f.cpool = [parse_object(r, atoms, depth+1, f) for _ in range(f.cpool_count)]
    return f

def parse_object(r, atoms, depth=0, parent=None):
    tag = r.u8()
    if tag == 14:  # FUNCTION_BYTECODE
        return parse_function(r, atoms, depth, parent)
    if tag in (1,2,3,4):  # NULL/UNDEF/BOOLs
        return {"tag": TAGS[tag]}
    if tag == 5:  return {"tag":"INT32","v": r.sleb()}
    if tag == 6:  return {"tag":"FLOAT64","v": r.f64()}
    if tag == 7:  # STRING (keep raw bytes; needed e.g. for regexp bytecode flag byte)
        n = r.leb()
        wide = n & 1; n >>= 1
        if wide:
            raw = r.buf(2*n)
            s = "".join(chr(struct.unpack_from("<H", raw, 2*i)[0]) for i in range(n))
        else:
            raw = r.buf(n)
            s = raw.decode("utf-8", "replace")
        return {"tag":"STRING","v":s,"raw":raw}
    if tag == 8:  # OBJECT
        n = r.leb(); props = []
        for _ in range(n):
            pn = read_atom(r, atoms)
            props.append((pn, parse_object(r, atoms, depth+1, parent)))
        return {"tag":"OBJECT","props":props}
    if tag in (9, 13):  # ARRAY / TEMPLATE_OBJECT
        n = r.leb(); vals = [parse_object(r, atoms, depth+1, parent) for _ in range(n)]
        if tag == 13:
            raw = parse_object(r, atoms, depth+1, parent)  # 'raw' or undefined
            return {"tag":"TEMPLATE_OBJECT","vals":vals,"raw":raw}
        return {"tag":"ARRAY","vals":vals}
    if tag == 15:  # MODULE
        mname = read_atom(r, atoms)
        m = {"tag":"MODULE","name":mname,"req":[],"exports":[],"star_exports":[],"imports":[]}
        for _ in range(r.leb()):
            m["req"].append(read_atom(r, atoms))
        for _ in range(r.leb()):
            et = r.u8()
            if et == 0:  # LOCAL
                vi = r.leb(); en = read_atom(r, atoms)
                m["exports"].append(("local", vi, en))
            else:
                rmi = r.leb(); ln = read_atom(r, atoms); en = read_atom(r, atoms)
                m["exports"].append(("indirect", rmi, ln, en))
        for _ in range(r.leb()):
            m["star_exports"].append(r.leb())
        for _ in range(r.leb()):
            vi = r.leb(); inm = read_atom(r, atoms); rmi = r.leb()
            m["imports"].append((vi, inm, rmi))
        m["func"] = parse_object(r, atoms, depth+1, parent)
        return m
    if tag == 16:  # TYPED_ARRAY
        at = r.u8(); ln = r.leb(); off = r.leb()
        return {"tag":"TYPED_ARRAY","at":at,"len":ln,"off":off,"buf":parse_object(r, atoms, depth+1, parent)}
    if tag == 17:  # ARRAY_BUFFER
        ln = r.leb(); return {"tag":"ARRAY_BUFFER","len":ln,"data":r.buf(ln)}
    if tag == 18:  # SHARED_ARRAY_BUFFER
        ln = r.leb(); r.buf(8)  # data ptr, unused
        return {"tag":"SHARED_ARRAY_BUFFER","len":ln}
    if tag == 19:  # DATE
        return {"tag":"DATE","v": parse_object(r, atoms, depth+1, parent)}
    if tag == 20:  # OBJECT_VALUE
        return {"tag":"OBJECT_VALUE","inner": parse_object(r, atoms, depth+1, parent)}
    if tag == 21:  # OBJECT_REFERENCE
        idx = r.leb()
        return {"tag":"OBJECT_REFERENCE","idx":idx}
    raise ValueError(f"unknown tag {tag} at {r.p-1}")

# ---------- disassembly ----------
def s8(v): return v-256 if v>127 else v
def s16(v): return v-65536 if v>32767 else v

def op_at(b):
    """Final-bytecode byte -> opcode_info row.  aiotjsc (2021-03-27,
    CONFIG_BIGNUM off): main opcodes 0..177, short opcodes 178..243.
    The extracted 259-row table holds temps at 178..192, so shift
    short-opcode bytes past them."""
    return OPS[b] if b < 178 else (OPS[b + 15] if b + 15 < len(OPS) else None)

def disasm(f, atoms):
    out = []
    bc = f.bytecode
    pos = 0
    while pos < len(bc):
        o = op_at(bc[pos])
        if o is None:
            out.append((pos, f"??{bc[pos]}", "", "")); pos += 1; continue
        nm, fmt, size = o["name"], o["fmt_name"], o["size"]
        ops_s = ""
        ann = ""
        try:
            if fmt in ("none", "none_int", "none_loc", "none_arg", "none_var_ref"):
                pass
            elif fmt == "u8": ops_s = str(bc[pos+1])
            elif fmt == "i8": ops_s = str(s8(bc[pos+1]))
            elif fmt == "loc8": ops_s = f"loc{bc[pos+1]}"
            elif fmt == "const8":
                ci = bc[pos+1]; ops_s = f"cpool[{ci}]"
            elif fmt == "label8":
                off = s8(bc[pos+1]); tgt = pos + 1 + off
                ops_s = f"-> {tgt} ({off})"
            elif fmt == "label16":
                off = s16(struct.unpack_from("<H", bc, pos+1)[0]); tgt = pos + 1 + off
                ops_s = f"-> {tgt} ({off})"
            elif fmt == "u16": ops_s = str(struct.unpack_from("<H", bc, pos+1)[0])
            elif fmt == "i16": ops_s = str(s16(struct.unpack_from("<H", bc, pos+1)[0]))
            elif fmt == "label":
                d = struct.unpack_from("<I", bc, pos+1)[0]
                if d >= 0x80000000: d -= 0x100000000
                tgt = pos + 1 + d
                ops_s = f"-> {tgt}"
            elif fmt in ("loc","arg","var_ref"):
                ops_s = str(struct.unpack_from("<H", bc, pos+1)[0])
            elif fmt == "npop": ops_s = str(struct.unpack_from("<H", bc, pos+1)[0])
            elif fmt == "npopx":
                ops_s = str(bc[pos+1])
            elif fmt == "npop_u16":
                v = struct.unpack_from("<H", bc, pos+1)[0]
                v2 = struct.unpack_from("<H", bc, pos+3)[0]
                ops_s = f"{v}, {v2}"
            elif fmt == "u32": ops_s = str(struct.unpack_from("<I", bc, pos+1)[0])
            elif fmt == "i32": ops_s = str(struct.unpack_from("<i", bc, pos+1)[0])
            elif fmt == "const":
                ci = struct.unpack_from("<I", bc, pos+1)[0]; ops_s = f"cpool[{ci}]"
            elif fmt == "atom":
                ai = struct.unpack_from("<I", bc, pos+1)[0]
                ops_s = repr(bc_atom_u32(ai, atoms))
            elif fmt == "atom_u8":
                ai = struct.unpack_from("<I", bc, pos+1)[0]
                ops_s = f"{repr(bc_atom_u32(ai, atoms))}, {bc[pos+5]}"
            elif fmt == "atom_u16":
                ai = struct.unpack_from("<I", bc, pos+1)[0]
                ops_s = f"{repr(bc_atom_u32(ai, atoms))}, {struct.unpack_from('<H', bc, pos+5)[0]}"
            elif fmt == "atom_label_u8":
                ai = struct.unpack_from("<I", bc, pos+1)[0]
                d = struct.unpack_from("<I", bc, pos+5)[0]
                if d >= 0x80000000: d -= 0x100000000
                tgt = pos + 5 + d
                ops_s = f"{repr(bc_atom_u32(ai, atoms))}, -> {tgt}, {bc[pos+9]}"
            elif fmt == "atom_label_u16":
                ai = struct.unpack_from("<I", bc, pos+1)[0]
                d = struct.unpack_from("<I", bc, pos+5)[0]
                if d >= 0x80000000: d -= 0x100000000
                tgt = pos + 5 + d
                ops_s = f"{repr(bc_atom_u32(ai, atoms))}, -> {tgt}, {struct.unpack_from('<H', bc, pos+9)[0]}"
            elif fmt == "label_u16":
                d = struct.unpack_from("<I", bc, pos+1)[0]
                if d >= 0x80000000: d -= 0x100000000
                tgt = pos + 1 + d
                ops_s = f"-> {tgt}, {struct.unpack_from('<H', bc, pos+5)[0]}"
        except Exception as e:
            ann = f"ERR {e}"
        out.append((pos, nm, ops_s, ann))
        pos += size
    return out

FUNC_KIND = {0:"function",1:"async",2:"generator",3:"async-generator"}

def dump_function(f, atoms, lines, path=""):
    me = f"{path}{f.name}"
    hdr = [f"=== func {me}  kind={FUNC_KIND[f.func_kind]} args={f.arg_count} varargs={f.var_count} "
           f"defargs={f.defined_arg_count} stack={f.stack_size} locals={f.local_count} "
           f"closures={f.closure_var_count} cpool={f.cpool_count} bclen={f.byte_code_len} "
           f"debug={f.has_debug}" + (f" file={f.filename}:{f.line_num}" if f.has_debug else ""),
           f"    bc@{f.bc_off}"]
    if f.vardefs:
        hdr.append("    vars: " + ", ".join(
            f"{n}(sc{sl},nx{sn},fl{fl})" for n, sl, sn, fl in f.vardefs))
    if f.closure_vars:
        hdr.append("    closure_vars: " + ", ".join(f"{n}@{vi}" for n, vi, fl in f.closure_vars))
    lines.extend(hdr)
    for pos, nm, ops, ann in disasm(f, atoms):
        lines.append(f"  {pos:6d}  {nm:24s} {ops}" + (f"   ; {ann}" if ann else ""))
    for i, c in enumerate(f.cpool):
        if isinstance(c, Func):
            lines.append(f"  -- cpool[{i}] = function --")
            dump_function(c, atoms, lines, me + ".cpool[%d]" % i)
        else:
            t = c.get("tag")
            if t == "STRING":
                lines.append(f"  -- cpool[{i}] = string {c['v']!r}")
            elif t == "ARRAY":
                lines.append(f"  -- cpool[{i}] = array[{len(c['vals'])}]")
            elif t == "TEMPLATE_OBJECT":
                lines.append(f"  -- cpool[{i}] = template {c['vals']}")
            elif t == "INT32":
                lines.append(f"  -- cpool[{i}] = int {c['v']}")
            elif t == "FLOAT64":
                lines.append(f"  -- cpool[{i}] = float {c['v']}")
            elif t == "OBJECT":
                lines.append(f"  -- cpool[{i}] = object {{{', '.join(p[0] for p in c['props'])}}}")
            elif t in ("NULL","UNDEFINED","BOOL_FALSE","BOOL_TRUE"):
                lines.append(f"  -- cpool[{i}] = {t}")
            else:
                lines.append(f"  -- cpool[{i}] = {t}")

def parse_file(path):
    b = open(path, "rb").read()
    r = R(b)
    ver = r.u8()
    assert ver == 1, f"bad version {ver}"
    n_atoms = r.leb()
    atoms = [r.jstr() for _ in range(n_atoms)]
    root = parse_object(r, atoms)
    return b, atoms, root, r.p

if __name__ == "__main__":
    src, atoms, root, end = parse_file(sys.argv[1])
    print(f"parsed {len(src)} bytes, consumed {end}, atoms={len(atoms)}", file=sys.stderr)
    lines = []
    if isinstance(root, dict) and root.get("tag") == "MODULE":
        lines.append(f"MODULE {root['name']!r}")
        lines.append(f"  imports: {root['imports']}")
        lines.append(f"  req_modules: {root['req']}")
        lines.append(f"  exports: {root['exports']}")
        lines.append(f"  star_exports: {root['star_exports']}")
        dump_function(root["func"], atoms, lines, "module.")
    elif isinstance(root, Func):
        dump_function(root, atoms, lines)
    print("\n".join(lines))
