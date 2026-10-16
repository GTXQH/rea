#!/usr/bin/env python3
"""QuickJS (Vela/aiotjsc) bytecode -> readable JavaScript lifter.

Built on qjsbc.py's parser.  Strategy:
  * per-function symbolic stack lifting into expressions
  * structured control flow reconstruction (if/else, while, do-while,
    for(;;), for-of/for-in, try/catch/finally, labeled-block fallback)
  * short-circuit (&&/||) and ternary shapes recovered as operators
  * object literals rebuilt as expressions (open-object markers)
  * cpool constants: primitives inline, arrays/objects hoisted as named
    consts (preserves identity sharing), functions rendered in place
"""
import json, os, re, struct, sys
import qjsbc
from qjsbc import Func

IDENT_RE = re.compile(r'^[A-Za-z_$][A-Za-z0-9_$]*$')
RESERVED = set('''break case catch class const continue debugger default delete do else export
extends finally for function if import in instanceof new return super switch this throw try
typeof var void while with yield let static enum await implements package protected interface
private public null true false undefined arguments'''.split())

def ident(s):
    return bool(IDENT_RE.match(s)) and s not in RESERVED

def varname(s):
    """Sanitize a variable name recovered from atoms."""
    if s is None or s == '<null>':
        return None
    if ident(s):
        return s
    return '_%s' % re.sub(r'[^A-Za-z0-9_$]', '_', s)

def qstr(s):
    out = ['"']
    for ch in s:
        if ch == '"': out.append('\\"')
        elif ch == '\\': out.append('\\\\')
        elif ch == '\n': out.append('\\n')
        elif ch == '\r': out.append('\\r')
        elif ch == '\t': out.append('\\t')
        elif ord(ch) < 0x20: out.append('\\x%02x' % ord(ch))
        else: out.append(ch)
    out.append('"')
    return ''.join(out)

def fnum(v):
    if isinstance(v, float):
        if v != v: return 'NaN'
        if v == float('inf'): return 'Infinity'
        if v == float('-inf'): return '-Infinity'
        if v == int(v) and abs(v) < 1e15: return '%d.0' % int(v)
        return repr(v)
    return str(v)

def _simple(s):
    return bool(re.match(r'^[A-Za-z_$][A-Za-z0-9_$]*(\.[A-Za-z_$][A-Za-z0-9_$]*)*$', s or '')) \
        or bool(re.match(r'^-?\d+(\.\d+)?$', s or ''))

def paren_if(s):
    if s is None: return '?'
    if _simple(s): return s
    if s.startswith('(') and s.endswith(')'): return s
    return '(%s)' % s

def member(obj, name):
    if name and ident(name):
        return '%s.%s' % (obj, name)
    return '%s[%s]' % (obj, qstr(name or ''))

# ---------------------------------------------------------------- instruction decode

class Ins:
    __slots__ = ('pos','idx','name','fmt','size','a','b','target')

def decode_with_map(f, atoms):
    bc = f.bytecode
    ins = []
    pos2idx = {}
    pos = 0
    while pos < len(bc):
        o = qjsbc.op_at(bc[pos])
        size = o['size'] if o else 1
        pos2idx[pos] = len(ins)
        ins.append(None)
        pos += size
    pos = 0
    k = 0
    while pos < len(bc):
        o = qjsbc.op_at(bc[pos])
        i = Ins()
        i.pos = pos; i.idx = k; i.a = None; i.b = None; i.target = None
        if o is None:
            i.name = '??%02x' % bc[pos]; i.fmt = 'none'; i.size = 1
        else:
            i.name, i.fmt, i.size = o['name'], o['fmt_name'], o['size']
            _decode_ops(i, bc, pos, atoms)
        ins[k] = i
        pos += i.size
        k += 1
    for i in ins:
        if i.target is not None:
            t = pos2idx.get(i.target)
            if t is None and i.target == len(bc):
                t = -1  # jump to function end = early exit
            i.target = t
    return ins

def _decode_ops(i, bc, pos, atoms):
    from qjsbc import s8, s16, bc_atom_u32
    fmt = i.fmt
    if fmt in ('none','none_int','none_loc','none_arg','none_var_ref'):
        pass
    elif fmt == 'u8': i.a = bc[pos+1]
    elif fmt == 'i8': i.a = s8(bc[pos+1])
    elif fmt == 'loc8': i.a = bc[pos+1]
    elif fmt == 'const8': i.a = bc[pos+1]
    elif fmt == 'u16': i.a = struct.unpack_from('<H', bc, pos+1)[0]
    elif fmt == 'i16': i.a = s16(struct.unpack_from('<H', bc, pos+1)[0])
    elif fmt == 'i32': i.a = struct.unpack_from('<i', bc, pos+1)[0]
    elif fmt == 'u32': i.a = struct.unpack_from('<I', bc, pos+1)[0]
    elif fmt == 'const': i.a = struct.unpack_from('<I', bc, pos+1)[0]
    elif fmt == 'loc': i.a = struct.unpack_from('<H', bc, pos+1)[0]
    elif fmt == 'arg': i.a = struct.unpack_from('<H', bc, pos+1)[0]
    elif fmt == 'var_ref': i.a = struct.unpack_from('<H', bc, pos+1)[0]
    elif fmt == 'npop': i.a = struct.unpack_from('<H', bc, pos+1)[0]
    elif fmt == 'npopx': i.a = bc[pos+1] if i.size > 1 else None
    elif fmt == 'npop_u16':
        i.a = struct.unpack_from('<H', bc, pos+1)[0]
        i.b = struct.unpack_from('<H', bc, pos+3)[0]
    elif fmt == 'label':
        d = struct.unpack_from('<I', bc, pos+1)[0]
        if d >= 0x80000000: d -= 0x100000000
        i.target = pos + 1 + d
    elif fmt == 'label8':
        i.target = pos + 1 + s8(bc[pos+1])
    elif fmt == 'label16':
        i.target = pos + 1 + s16(struct.unpack_from('<H', bc, pos+1)[0])
    elif fmt == 'label_u16':
        d = struct.unpack_from('<I', bc, pos+1)[0]
        if d >= 0x80000000: d -= 0x100000000
        i.target = pos + 1 + d
        i.a = struct.unpack_from('<H', bc, pos+5)[0]
    elif fmt == 'atom':
        i.a = bc_atom_u32(struct.unpack_from('<I', bc, pos+1)[0], atoms)
    elif fmt == 'atom_u8':
        i.a = bc_atom_u32(struct.unpack_from('<I', bc, pos+1)[0], atoms)
        i.b = bc[pos+5]
    elif fmt == 'atom_u16':
        i.a = bc_atom_u32(struct.unpack_from('<I', bc, pos+1)[0], atoms)
        i.b = struct.unpack_from('<H', bc, pos+5)[0]
    elif fmt == 'atom_label_u8':
        i.a = bc_atom_u32(struct.unpack_from('<I', bc, pos+1)[0], atoms)
        d = struct.unpack_from('<I', bc, pos+5)[0]
        if d >= 0x80000000: d -= 0x100000000
        i.target = pos + 5 + d
        i.b = bc[pos+9]
    elif fmt == 'atom_label_u16':
        i.a = bc_atom_u32(struct.unpack_from('<I', bc, pos+1)[0], atoms)
        d = struct.unpack_from('<I', bc, pos+5)[0]
        if d >= 0x80000000: d -= 0x100000000
        i.target = pos + 5 + d
        i.b = struct.unpack_from('<H', bc, pos+9)[0]

# ---------------------------------------------------------------- expression values

class E:
    """Symbolic stack value."""
    __slots__ = ('s','pure','func','fname','fld_obj','is_obj','props')
    def __init__(self, s=None, pure=False, func=None, fname=None, fld_obj=None):
        self.s = s
        self.pure = pure
        self.func = func
        self.fname = fname
        self.fld_obj = fld_obj
        self.is_obj = False
        self.props = None

    def open_obj(self):
        e = E()
        e.is_obj = True
        e.props = []
        return e

BIN = {'add':'+','sub':'-','mul':'*','mod':'%','div':'/','pow':'**',
       'and':'&','or':'|','xor':'^','shl':'<<','shr':'>>>','sar':'>>',
       'eq':'==','neq':'!=','strict_eq':'===','strict_neq':'!==',
       'lt':'<','lte':'<=','gt':'>','gte':'>='}

class Dead:
    pass
DEAD = Dead()

class LiftFail(Exception):
    pass

# net stack effect table (only ops reachable in Vela-compiled pages)
def net_effect(i):
    nm = i.name
    if nm in ('push_0','push_1','push_2','push_3','push_4','push_5','push_6','push_7',
              'push_i8','push_i16','push_i32','push_empty_string','null','undefined',
              'push_this','push_atom_value','push_const8','push_const','fclosure8','fclosure',
              'object','special_object','push_true','push_false','get_loc0','get_loc1',
              'get_loc2','get_loc3','get_loc8','get_loc','get_loc_check','get_arg0','get_arg1',
              'get_arg2','get_arg3','get_arg','get_var_ref0','get_var_ref1','get_var_ref2',
              'get_var_ref3','get_var_ref','get_var_ref_check','get_var','get_field',
              'get_field2','get_length','dup','insert2','insert3','post_inc','post_dec',
              'set_name','to_propkey','to_propkey2','get_array_el2','get_super'):
        return 1
    if nm in BIN or nm in ('in','instanceof','get_array_el','typeof','lnot','not','neg',
                           'plus','inc','dec','is_undefined','is_undefined_or_null',
                           'delete','regexp','to_object'):
        return -1
    if nm in ('drop','put_loc0','put_loc1','put_loc2','put_loc3','put_loc8','put_loc',
              'put_loc_check','put_arg0','put_arg1','put_arg2','put_arg3','put_arg',
              'put_var_ref0','put_var_ref1','put_var_ref2','put_var_ref3','put_var_ref',
              'put_var_ref_check','put_var','throw','ret','put_field','define_field',
              'define_method','delete_var','nip'):
        return -1
    if nm in ('set_loc0','set_loc1','set_loc2','set_loc3','set_loc8','set_loc',
              'set_arg0','set_var_ref0','set_var_ref1','set_var_ref2','set_var_ref3',
              'set_var_ref','set_loc_uninitialized','add_loc'):
        return 0
    if nm == 'put_array_el': return -3
    if nm == 'define_array_el': return -1
    if nm == 'append': return -1
    if nm == 'iterator_close': return -3
    if nm in ('for_of_next','for_in_next'): return 2
    if nm in ('for_of_start','for_in_start'): return 2
    if nm == 'array_from': return -(i.a or 0) + 1
    if nm in ('call0','call1','call2','call3'):
        argc = int(nm[-1]) if nm[-1].isdigit() else 0
        return -argc
    if nm == 'call': return -(i.a or 0)
    if nm == 'call_method': return -(i.a or 0) - 1
    if nm == 'tail_call': return -(i.a or 0) - 1
    if nm == 'tail_call_method': return -(i.a or 0) - 2
    if nm in ('return_undef','return','catch','gosub','nop'):
        return 0
    if nm in ('return',): return -1
    if nm.startswith(('goto','if_false','if_true')): return 0
    return None

# ---------------------------------------------------------------- lifter

class Lifter:
    def __init__(self, f, atoms, parent=None, name_ctx=None, exports=None):
        self.f = f
        self.atoms = atoms
        self.ins = decode_with_map(f, atoms)
        self.n = len(self.ins)
        self.tmp = 0
        self.hoisted = []
        self.parent = parent
        self.exports = exports or []
        vds = f.vardefs
        self.argn = {}
        for k in range(f.arg_count):
            nm = vds[k][0] if k < len(vds) else '<null>'
            self.argn[k] = varname(nm) or 'a%d' % k
        self.locn = {}
        for k in range(f.var_count):
            j = f.arg_count + k
            nm = vds[j][0] if j < len(vds) else '<null>'
            self.locn[k] = varname(nm) or 't%d' % k
        exps = {}
        for e in self.exports:
            if e[0] == 'local':
                exps[e[1]] = e[2]
        self.refn = {}
        for k, cv in enumerate(f.closure_vars):
            nm, vidx, fl = cv
            r = varname(nm)
            if r is None and k in exps:
                r = varname(exps[k]) or 'g%d' % k
            if r is None and parent is not None:
                if fl & 1:
                    r = parent.locn.get(vidx)
                elif fl & 2:
                    r = parent.argn.get(vidx)
                else:
                    r = parent.refn.get(vidx)
            self.refn[k] = r or 'g%d' % k
        # back edges -> loop headers
        self.backs = {}
        for i in self.ins:
            if i.target is not None and i.target >= 0 and i.target < i.idx and \
               i.name.startswith(('goto','if_false','if_true')):
                self.backs.setdefault(i.target, []).append(i.idx)
        # for-of / for-in loops: header idx -> info
        self.forloops = {}
        for k, i in enumerate(self.ins):
            if i.name in ('for_of_next','for_in_next') and i.a == (0 if i.name == 'for_of_next' else None):
                if k+1 < self.n and self.ins[k+1].name.startswith('if_false') and self.ins[k+1].target is not None:
                    hdr = self.ins[k+1].target
                    g = hdr - 1
                    if g >= 0 and self.ins[g].name.startswith('goto') and self.ins[g].target is not None:
                        e0 = self.ins[g].target
                        if hdr < e0 and self.ins[e0-1].name.startswith('goto') and self.ins[e0-1].target is not None:
                            body = self.ins[e0-1].target
                            s_at = None
                            for m in range(e0, k):
                                nm2 = self.ins[m].name
                                if nm2 in ('for_of_start','for_in_start'):
                                    s_at = m
                            if s_at is not None and body is not None:
                                kind = 'of' if i.name == 'for_of_next' else 'in'
                                want = 'for_of_start' if kind == 'of' else 'for_in_start'
                                if self.ins[s_at].name == want:
                                    self.forloops[hdr] = dict(kind=kind, chunk=(hdr, e0),
                                                              iterable=(e0, s_at), body=(body, k),
                                                              cont=k, end=k+4)
        self.depth = self._depths()

    # ------------- depth propagation (for while-hoisting decisions) -------------

    def _depths(self):
        depth = {0: 0}
        work = [0]
        while work:
            k = work.pop()
            if depth.get(k) is None:
                continue
            d = depth[k]
            while k is not None and k < self.n:
                i = self.ins[k]
                eff = net_effect(i)
                if eff is None:
                    depth[k] = None
                    return depth
                nd = d + eff
                nm = i.name
                if i.target is not None and nm.startswith(('goto','gosub')):
                    t = i.target
                    if nm.startswith('goto') and t < i.idx:
                        break
                    cur = depth.get(t)
                    if cur is None and t not in depth:
                        depth[t] = nd
                        work.append(t)
                    elif cur is not None and cur != nd:
                        depth[t] = None
                    if nm.startswith('goto'):
                        break
                    d = nd; k += 1; continue
                if i.target is not None and nm.startswith(('if_false','if_true')):
                    t = i.target
                    cur = depth.get(t)
                    if cur is None and t not in depth:
                        depth[t] = nd
                        work.append(t)
                    elif cur is not None and cur != nd:
                        depth[t] = None
                    if nm == 'catch':
                        pass
                    d = nd; k += 1; continue
                if nm == 'catch':
                    t = i.target
                    if t is not None:
                        cur = depth.get(t)
                        if cur is None and t not in depth:
                            depth[t] = nd + 1
                            work.append(t)
                        elif cur is not None and cur != nd + 1:
                            depth[t] = None
                    d = nd; k += 1; continue
                if nm in ('return','return_undef','throw','ret') or nm.startswith('tail_call'):
                    break
                d = nd
                k += 1
                if k < self.n:
                    cur = depth.get(k)
                    if cur is None and k not in depth:
                        depth[k] = d
                    elif cur is not None and cur != d:
                        depth[k] = None
                        break
                else:
                    break
        return depth

    # ------------- helpers -------------

    def fresh_tmp(self):
        self.tmp += 1
        return '_v%d' % self.tmp

    def put(self, out, pad, text):
        lines = text.split('\n')
        out.append(pad + lines[0])
        for ln in lines[1:]:
            out.append((pad + ln) if ln else '')

    # ------------- cpool rendering -------------

    def const_src(self, c):
        if isinstance(c, Func):
            return None
        t = c.get('tag')
        if t == 'STRING': return qstr(c['v'])
        if t == 'INT32': return str(c['v'])
        if t == 'FLOAT64': return fnum(c['v'])
        if t == 'NULL': return 'null'
        if t == 'UNDEFINED': return 'undefined'
        if t == 'BOOL_FALSE': return 'false'
        if t == 'BOOL_TRUE': return 'true'
        if t == 'ARRAY':
            if len(c['vals']) <= 8 and all(self._flat(v) for v in c['vals']):
                return '[%s]' % ', '.join(self.const_src(v) for v in c['vals'])
            return '[\n' + ',\n'.join('    ' + self.const_src(v) for v in c['vals']) + '\n  ]'
        if t == 'OBJECT':
            items = []
            for pn, pv in c['props']:
                key = pn if ident(pn) else qstr(pn)
                items.append('    %s: %s' % (key, self.const_src(pv)))
            return '{\n' + ',\n'.join(items) + '\n  }'
        if t == 'TEMPLATE_OBJECT':
            return '`%s`' % ''.join(v['v'] if v.get('tag') == 'STRING' else '' for v in c['vals'])
        if t == 'ARRAY_BUFFER':
            return '/* ArrayBuffer(%d bytes) */' % c['len']
        return '/* %s */' % t

    def _flat(self, c):
        if isinstance(c, Func): return False
        return c.get('tag') in ('STRING','INT32','FLOAT64','NULL','UNDEFINED','BOOL_FALSE','BOOL_TRUE')

    def hoist_const(self, idx, c):
        nm = 'C%d' % idx
        self.hoisted.append((nm, self.const_src(c)))
        return nm

    # ------------- main entry -------------

    def lift_body(self):
        stmts, _ = self.region(0, self.n, [], 0, break_at_end=False)
        return stmts

    def arg_list(self):
        return [self.argn[k] for k in range(self.f.arg_count)]

    # ------------- region lifting -------------

    def region(self, a, b, stack, ind, break_at_end=False, in_finally=False):
        out = []
        i = a
        pad = '  ' * ind
        while i < b:
            if i >= self.n:
                break
            if i in self.forloops:
                i = self.emit_forloop(i, b, stack, out, ind)
                continue
            if i in self.backs and i != a:
                i = self.emit_loop(i, b, stack, out, ind)
                continue
            ins = self.ins[i]
            nm = ins.name
            if nm.startswith('if_false') or nm.startswith('if_true'):
                # short-circuit pattern:  <v>; dup; if_true8/if_false8 -> L; drop; <expr>; L:
                if (ins.target is not None and i > 0 and i + 2 < ins.target <= b
                        and self.ins[i-1].name == 'dup'
                        and self.ins[i+1].name == 'drop'
                        and not isinstance(stack, Dead) and len(stack) >= 1):
                    L = ins.target
                    pre = list(stack)
                    c = self.pop(stack)          # the dup'd condition copy
                    orig = stack[-1] if stack else None
                    base = stack[:-1] if stack else []
                    st2 = list(base)
                    try:
                        stmts, st2 = self.region(i + 2, L, st2, ind, break_at_end=False)
                    except Exception as ex:
                        sys.stderr.write('SHORTCIRC-FAIL in %r bc@%s idx=%d: %s\n' %
                                         (getattr(self.f, 'name', '?'),
                                          getattr(self.f, 'bc_off', '?'), i, ex))
                        stmts = None
                    ok = (stmts is not None and orig is not None
                          and not isinstance(st2, Dead)
                          and len(st2) == len(base) + 1
                          and all(a.s == b2.s for a, b2 in zip(st2[:-1], base)))
                    if not ok and os.environ.get('QJS_DEBUG'):
                        sys.stderr.write('SHORTCIRC-SHAPE idx=%d stmts=%r st2=%r stack=%r\n' %
                                         (i, stmts,
                                          [getattr(e, 's', '?') for e in st2] if not isinstance(st2, Dead) else 'DEAD',
                                          [getattr(e, 's', '?') for e in stack] if not isinstance(stack, Dead) else 'DEAD'))
                    if ok:
                        val = st2[-1]
                        op = '&&' if nm.startswith('if_false') else '||'
                        out.extend(stmts)
                        del stack[:]
                        stack.extend(base)
                        stack.append(E('%s %s %s' % (paren_if(orig.s), op, paren_if(val.s)),
                                       pure=False))
                        i = L
                        continue
                    # pattern did not match: restore and fall back
                    del stack[:]
                    stack.extend(pre)
                if ins.target is not None and ins.target > i:
                    i = self.emit_if(i, b, stack, out, ind)
                    continue
                c = self.pop(stack)
                if ins.target == -1:
                    out.append(pad + 'if (%s) return;' % self._test(nm, c))
                    i += 1
                    continue
                # backward conditional: conditional continue within a loop
                lab = ''
                out.append(pad + 'if (%s) continue%s;' % (self._test(nm, c), lab))
                i += 1
                continue
            if nm.startswith('goto'):
                t = ins.target
                if t is None:
                    i += 1
                    continue
                if t == -1:
                    out.append(pad + 'return;')
                    i += 1
                    continue
                if t <= i:
                    out.append(pad + 'continue;')
                    i += 1
                    continue
                if t == b and not break_at_end:
                    i += 1
                    continue
                if t >= b:
                    out.append(pad + 'break;')
                    i += 1
                    continue
                i = self.emit_forward_block(i, b, stack, out, ind)
                continue
            if nm == 'catch':
                i = self.emit_try(i, b, stack, out, ind)
                continue
            if nm == 'gosub':
                out.append(pad + '/* gosub %s */' % (self.ins[ins.target].pos if ins.target is not None and ins.target < self.n else '?'))
                i += 1
                continue
            if nm == 'ret':
                if not in_finally:
                    out.append(pad + '/* ret */')
                i += 1
                continue
            try:
                i = self.emit_simple(i, stack, out, ind)
            except Exception as ex:
                fn = getattr(self.f, 'name', '?')
                ctx = ' | '.join('%d:%s' % (k, self.ins[k].name)
                                 for k in range(max(0, i-6), min(self.n, i+1)))
                sys.stderr.write('LIFT-ERR in %r bc@%s @ idx=%d pos=%d op=%s: %s | %s | stack=%s\n' %
                                 (fn, getattr(self.f, 'bc_off', '?'), i,
                                  self.ins[i].pos, self.ins[i].name, ex, ctx,
                                  [getattr(e, 's', '?') for e in stack]
                                  if isinstance(stack, list) else 'DEAD'))
                raise
        return out, stack

    def _test(self, nm, c):
        s = paren_if(c.s)
        if nm.startswith('if_true'):
            return s
        return '!(%s)' % c.s if not _simple(c.s) else '!' + s

    def pop(self, stack):
        if isinstance(stack, Dead) or not stack:
            return E('?underflow', pure=True)
        e = stack.pop()
        if e.is_obj:
            e = E(self.render_objlit(e.props), pure=all(p for p in e.props))
        return e

    def finalize(self, e):
        if e.is_obj:
            return self.render_objlit(e.props)
        if e.s is None:
            if isinstance(e.props, tuple) and e.props and e.props[0] == 'fnexpr':
                return self._render_fn(e.props)
            if e.func is not None:
                return self.render_function(e.func, e.fname)
            return '/*fn?*/'
        return e.s

    # ------------- loops -------------

    def emit_loop(self, i, b, stack, out, ind):
        pad = '  ' * ind
        backs = self.backs[i]
        rend = min(max(backs) + 1, b)
        last_back = self.ins[max(backs)]
        # do-while: single conditional back edge terminating the region
        if len(backs) == 1 and last_back.name.startswith('if_') and max(backs) == rend - 1:
            st2 = list(stack) if not isinstance(stack, Dead) else DEAD
            body, st2 = self.region(i, rend - 1, st2, ind + 1, break_at_end=True)
            cond = E('true')
            if isinstance(st2, list) and st2:
                cond = st2.pop()
            c = cond.s
            out.append(pad + 'do {')
            out.extend(body)
            out.append(pad + '} while (%s);' % (c if last_back.name.startswith('if_true') else '!(%s)' % c))
            return rend
        # while-hoist: first forward exit-test before any other jump
        hoisted = None
        if self.depth.get(i) == 0 and not isinstance(stack, Dead) and not stack:
            j = i
            while j < rend:
                ij = self.ins[j]
                if ij.name.startswith(('if_false','if_true','goto')):
                    if ij.name.startswith('goto') and ij.target is not None and ij.target < j:
                        break
                    if ij.name.startswith('if_') and ij.target is not None and ij.target >= rend:
                        ok = all(not (self.ins[m].name.startswith(('if_','goto')))
                                 for m in range(i, j))
                        if ok:
                            hoisted = (j, ij)
                    break
                j += 1
        if hoisted:
            j, test = hoisted
            st2 = list(stack)
            cond_stmts, st2 = self.region(i, j, st2, ind, break_at_end=False)
            out.extend(cond_stmts)
            cond = st2.pop() if st2 else E('?')
            cs = cond.s if test.name.startswith('if_true') else \
                 ('!(%s)' % cond.s if not _simple(cond.s) else '!' + cond.s)
            out.append(pad + 'while (%s) {' % cs)
            st3 = list(st2)
            body, st3 = self.region(j + 1, rend, st3, ind + 1, break_at_end=True)
            out.extend(body)
            out.append(pad + '}')
            return rend
        # generic for(;;); exclude the final unconditional back edge
        end_body = rend
        if self.ins[rend-1].name.startswith('goto') and self.ins[rend-1].target == i:
            end_body = rend - 1
        out.append(pad + 'for (;;) {')
        st2 = list(stack) if not isinstance(stack, Dead) else DEAD
        body, st2 = self.region(i, end_body, st2, ind + 1, break_at_end=True)
        out.extend(body)
        out.append(pad + '}')
        return rend

    def emit_forloop(self, i, b, stack, out, ind):
        pad = '  ' * ind
        fl = self.forloops[i]
        a0, a1 = fl['chunk']
        e0, s_at = fl['iterable']
        b0, b1 = fl['body']
        end = min(fl['end'], b)
        itv = '_it%d' % (self.tmp + 1000)
        self.tmp += 1
        # chunk shape
        simple_var = None
        ci = self.ins[a0]
        if a1 - a0 == 2 and self.ins[a0+1].name.startswith('goto'):
            if ci.name.startswith(('put_loc0','put_loc1','put_loc2','put_loc3','put_loc8','put_loc')):
                simple_var = self.locn.get(ci.a, 't%d' % ci.a)
            elif ci.name.startswith(('put_var_ref0','put_var_ref1','put_var_ref2','put_var_ref3','put_var_ref')):
                simple_var = self.refn.get(ci.a, 'g%d' % ci.a)
        # iterable expression
        st3 = list(stack) if not isinstance(stack, Dead) else DEAD
        iter_stmts, st3 = self.region(e0, s_at, st3, ind, break_at_end=False)
        out.extend(iter_stmts)
        itexpr = self.pop(st3) if isinstance(st3, list) and st3 else E('?iter')
        # body
        st4 = list(stack) if not isinstance(stack, Dead) else DEAD
        body_stmts, st4 = self.region(b0, b1, st4, ind + 1, break_at_end=True)
        kw = fl['kind']
        head = 'for (const %s %s %s)' % (simple_var or itv, kw, self.finalize(itexpr))
        out.append(pad + head + ' {')
        if simple_var is None:
            st2 = [E(itv)]
            chunk_stmts, st2 = self.region(a0, a1, st2, ind + 1, break_at_end=False)
            out.extend(chunk_stmts)
        out.extend(body_stmts)
        out.append(pad + '}')
        return end

    # ------------- if / else -------------

    def emit_if(self, i, b, stack, out, ind):
        pad = '  ' * ind
        ins = self.ins[i]
        t = ins.target
        neg = ins.name.startswith('if_false')
        cond = self.pop(stack)
        # else detection
        has_else = False
        m = None
        if t > i + 1 and t <= b and self.ins[t-1].name.startswith('goto'):
            cand = self.ins[t-1].target
            if cand is not None and t < cand <= b:
                ok = True
                for j in range(t, cand):
                    ij = self.ins[j]
                    if ij.name.startswith(('goto','if_false','if_true','catch','gosub')) and ij.target is not None:
                        if not (t <= ij.target <= cand):
                            ok = False
                            break
                if ok:
                    has_else = True
                    m = cand
        sthen, s_then = self.region(i + 1, (t - 1) if has_else else t,
                                    list(stack) if not isinstance(stack, Dead) else DEAD,
                                    ind + 1, break_at_end=False)
        if has_else:
            selse, s_else = self.region(t, m,
                                        list(stack) if not isinstance(stack, Dead) else DEAD,
                                        ind + 1, break_at_end=False)
        else:
            selse, s_else = [], list(stack) if not isinstance(stack, Dead) else DEAD
        then_dead = isinstance(s_then, Dead)
        else_dead = isinstance(s_else, Dead)
        phi = []
        merged = None
        if then_dead and else_dead:
            merged = DEAD
        elif then_dead:
            merged = s_else
        elif else_dead:
            merged = s_then
        elif len(s_then) == len(s_else):
            merged = []
            for k in range(len(s_then)):
                v1, v2 = s_then[k], s_else[k]
                if v1.s == v2.s:
                    merged.append(v1)
                else:
                    tv = self.fresh_tmp()
                    phi.append((tv, v1, v2))
                    merged.append(E(tv, pure=True))
        else:
            merged = s_then if len(s_then) >= len(s_else) else s_else
        # expression form: exactly one top-slot divergence, no branch statements
        if (merged is not DEAD and not then_dead and not else_dead and len(phi) == 1
                and not sthen and not selse and stack is not DEAD
                and len(s_then) == len(stack) + 1 and len(s_else) == len(stack) + 1
                and len(merged) == len(stack) + 1):
            tv, v1, v2 = phi[0]
            c = cond.s
            if has_else:
                val = E('%s ? %s : %s' % (paren_if(c), v1.s, v2.s), pure=cond.pure and v1.pure and v2.pure)
            else:
                if not _simple(c):
                    tv2 = self.fresh_tmp()
                    self.put(out, pad, 'const %s = %s;' % (tv2, c))
                    c = tv2
                val = E('%s %s %s' % (c, '&&' if neg else '||', v1.s), pure=False)
            if stack is not DEAD:
                del stack[:]
                stack.extend(merged[:-1])
                stack.append(val)
            return m if has_else else t
        # statement form
        cs = cond.s
        if neg:
            cs = '!' + cs if _simple(cs) else '!(%s)' % cs
        # if the join instruction ignores the stack (return_undef/ret), the
        # branch values are dead and phi bookkeeping is unnecessary
        join_i = self.ins[m if has_else else t]
        if phi and join_i.name in ('return_undef', 'ret'):
            del merged[len(stack):]
            phi = []
        if has_else:
            out.append(pad + 'if (%s) {' % cs)
            out.extend(sthen)
            for tv, v1, v2 in phi:
                if not then_dead:
                    self.put(out, pad + '  ', '%s = %s;' % (tv, self.finalize(v1)))
            out.append(pad + '} else {')
            out.extend(selse)
            for tv, v1, v2 in phi:
                if not else_dead:
                    self.put(out, pad + '  ', '%s = %s;' % (tv, self.finalize(v2)))
            out.append(pad + '}')
            if not isinstance(stack, Dead):
                if merged is DEAD:
                    stack.clear()
                else:
                    del stack[:]
                    stack.extend(merged)
            return m
        if sthen or then_dead or phi:
            out.append(pad + 'if (%s) {' % cs)
            out.extend(sthen)
            for tv, v1, v2 in phi:
                if not then_dead:
                    self.put(out, pad + '  ', '%s = %s;' % (tv, self.finalize(v1)))
            if phi:
                out.append(pad + '} else {')
                for tv, v1, v2 in phi:
                    self.put(out, pad + '  ', '%s = %s;' % (tv, self.finalize(v2)))
            out.append(pad + '}')
            if not isinstance(stack, Dead):
                if merged is DEAD:
                    stack.clear()
                else:
                    del stack[:]
                    stack.extend(merged)
        return t

    # ------------- arbitrary forward jump -> labeled block -------------

    def emit_forward_block(self, i, b, stack, out, ind):
        pad = '  ' * ind
        ins = self.ins[i]
        m = ins.target
        lab = '_blk%d' % m
        out.append(pad + '%s: {' % lab)
        st2 = list(stack) if not isinstance(stack, Dead) else DEAD
        body, st2 = self.region(i + 1, m, st2, ind + 1, break_at_end=True)
        out.extend(body)
        out.append(pad + '}')
        return m

    # ------------- try / catch / finally -------------

    def emit_try(self, i, b, stack, out, ind):
        pad = '  ' * ind
        ins = self.ins[i]
        t = ins.target
        if t is None or t <= i or t > self.n:
            out.append(pad + '/* bad catch target */')
            return i + 1
        # try body end: look for [gosub Lf][goto Lend] just before t
        lend = None
        fin = None
        try_end = t
        if t - 1 > i and self.ins[t-1].name.startswith('goto') and self.ins[t-1].target is not None:
            lend = self.ins[t-1].target
            if t - 2 > i and self.ins[t-2].name == 'gosub' and self.ins[t-2].target is not None:
                lf = self.ins[t-2].target
                r = None
                for j in range(lf, self.n):
                    if self.ins[j].name == 'ret':
                        r = j
                        break
                if r is not None:
                    fin = (lf, r)
                    try_end = t - 2
        if lend is None:
            lend = t  # no-catch-fallthrough merge (handled below)
        # try body
        st2 = list(stack) if not isinstance(stack, Dead) else DEAD
        try_stmts, st2 = self.region(i + 1, try_end, st2, ind + 1, break_at_end=False)
        # catch handler [t, h_end)
        h_end = None
        catch_bind = None
        if fin is not None:
            g1 = None
            for j in range(t, lend if lend > t else self.n):
                if self.ins[j].name == 'gosub':
                    g1 = j
                    break
            if g1 is None:
                g1 = t
                h_end = t
            else:
                h_end = g1
        else:
            h_end = t
        catch_stmts = None
        if h_end > t or (fin is not None and h_end >= t):
            bind = self.ins[t]
            cb0 = t
            if bind.name.startswith(('put_loc','put_var_ref','put_arg')):
                if bind.name.startswith('put_loc'):
                    catch_bind = self.locn.get(bind.a, 't%d' % bind.a)
                elif bind.name.startswith('put_var_ref'):
                    catch_bind = self.refn.get(bind.a, 'g%d' % bind.a)
                else:
                    catch_bind = self.argn.get(bind.a, 'a%d' % bind.a)
                cb0 = t + 1
            elif bind.name == 'drop':
                catch_bind = None
                cb0 = t + 1
            if cb0 < h_end:
                st3 = list(stack) if not isinstance(stack, Dead) else DEAD
                catch_stmts, st3 = self.region(cb0, h_end, st3, ind + 1, break_at_end=False)
        fin_stmts = None
        if fin is not None:
            st4 = list(stack) if not isinstance(stack, Dead) else DEAD
            fin_stmts, st4 = self.region(fin[0], fin[1], st4, ind + 1, break_at_end=False, in_finally=True)
        out.append(pad + 'try {')
        out.extend(try_stmts)
        if catch_stmts is not None or (h_end > t):
            out.append(pad + '} catch (%s) {' % (catch_bind or '_e'))
            out.extend(catch_stmts or [])
        if fin_stmts is not None:
            out.append(pad + '} finally {')
            out.extend(fin_stmts)
        out.append(pad + '}')
        return lend if (lend is not None and lend > i) else (fin[1] + 1 if fin else t)

    # ------------- plain ops -------------

    def emit_simple(self, i, stack, out, ind):
        pad = '  ' * ind
        ins = self.ins[i]
        nm = ins.name

        def pop():
            return self.pop(stack)
        def peek(k=1):
            if isinstance(stack, Dead) or len(stack) < k:
                return E('?')
            e = stack[-k]
            if e.is_obj:
                e = E(self.render_objlit(e.props), pure=True)
                stack[-k] = e
            return e
        def push(e):
            if isinstance(stack, Dead):
                return
            stack.append(e)
        def stmt(e):
            if not e.pure:
                self.put(out, pad, '%s;' % self.finalize(e))

        if nm.startswith('push_') and nm[5:].isdigit():
            push(E(str(int(nm[5:])), pure=True)); return i + 1
        if nm in ('push_i8','push_i16','push_i32'):
            push(E(str(ins.a), pure=True)); return i + 1
        if nm == 'push_empty_string': push(E('""', pure=True)); return i + 1
        if nm == 'null': push(E('null', pure=True)); return i + 1
        if nm == 'undefined': push(E('undefined', pure=True)); return i + 1
        if nm == 'push_this': push(E('this', pure=True)); return i + 1
        if nm == 'push_atom_value': push(E(qstr(ins.a), pure=True)); return i + 1
        if nm == 'push_true': push(E('true', pure=True)); return i + 1
        if nm == 'push_false': push(E('false', pure=True)); return i + 1
        if nm in ('push_const8','push_const'):
            c = self.f.cpool[ins.a]
            if isinstance(c, Func):
                push(self.closure_expr(c)); return i + 1
            t = c.get('tag')
            if t in ('STRING','INT32','FLOAT64','NULL','UNDEFINED','BOOL_FALSE','BOOL_TRUE',
                     'TEMPLATE_OBJECT'):
                push(E(self.const_src(c), pure=True)); return i + 1
            push(E(self.hoist_const(ins.a, c), pure=True)); return i + 1
        if nm == 'regexp':
            bstr = pop()
            src = pop()
            flags = ''
            m = re.match(r'^C(\d+)$', bstr.s or '')
            if m and m.group(1).isdigit():
                ci = int(m.group(1))
                c = self.f.cpool[ci] if ci < len(self.f.cpool) else None
                if isinstance(c, dict) and c.get('tag') == 'STRING' and c.get('raw'):
                    fb = c['raw'][0]
                    fl = ''
                    if fb & 1: fl += 'g'
                    if fb & 2: fl += 'i'
                    if fb & 4: fl += 'm'
                    if fb & 8: fl += 's'
                    if fb & 16: fl += 'u'
                    if fb & 32: fl += 'y'
                    flags = fl
            srctext = src.s
            if srctext.startswith('"') and srctext.endswith('"'):
                srctext = srctext[1:-1].replace('\\/', '/')
            push(E('/%s/%s' % (srctext, flags), pure=False)); return i + 1
        if nm in ('fclosure8','fclosure'):
            c = self.f.cpool[ins.a]
            push(self.closure_expr(c)); return i + 1
        if nm == 'object':
            push(E().open_obj()); return i + 1
        if nm == 'array_from':
            argc = ins.a or 0
            args = [pop() for _ in range(argc)][::-1]
            if argc == 0:
                push(E('[]', pure=True)); return i + 1
            items = []
            allpure = True
            for a in args:
                items.append(self.finalize(a))
                allpure = allpure and a.pure
            if sum(len(x) for x in items) < 70 and all('\n' not in x for x in items):
                push(E('[%s]' % ', '.join(items), pure=allpure))
            else:
                push(E('[\n' + ',\n'.join('    ' + x for x in items) + '\n  ]', pure=allpure))
            return i + 1
        if nm == 'define_field':
            v = pop()
            o = stack[-1] if isinstance(stack, list) and stack else E('?')
            if o.is_obj and isinstance(stack, list) and stack:
                stack.pop()
                o.props.append((ins.a, v))
                push(o)
                return i + 1
            if isinstance(stack, list) and stack:
                stack.pop()
            key = member('', ins.a).lstrip('.')
            keyexpr = ('%s' % ins.a) if ident(ins.a) else ('[%s]' % qstr(ins.a))
            self.put(out, pad, '%s%s = %s;' % (self.finalize(o) if False else o.s, keyexpr if not ident(ins.a) else '.' + ins.a, self.finalize(v)))
            push(o)
            return i + 1
        if nm == 'define_method':
            fn = pop()
            o = stack[-1] if isinstance(stack, list) and stack else E('?')
            fl = ins.b or 0
            kind = {0:'', 1:'get ', 2:'set '}.get(fl & 3, '')
            if o.is_obj and isinstance(stack, list) and stack:
                stack.pop()
                o.props.append((ins.a, ('method', fn, kind)))
                push(o)
                return i + 1
            if isinstance(stack, list) and stack:
                stack.pop()
            o2 = pop()
            key = ins.a if ident(ins.a) else qstr(ins.a)
            rendered = self.render_function(fn.func, fn.fname or ins.a, as_method=True,
                                            method_key='%s%s' % (kind, key)) if fn.func else '/* fn */'
            self.put(out, pad, '%s.%s = %s;' % (o2.s, ins.a if ident(ins.a) else '["%s"]' % ins.a, rendered))
            push(o2)
            return i + 1
        if nm == 'set_name':
            v = pop()
            e2 = E(v.s, pure=v.pure, func=v.func, fname=ins.a, fld_obj=v.fld_obj)
            if isinstance(v.props, tuple) and v.props and v.props[0] == 'fnexpr':
                e2.props = ('fnexpr', v.props[1], v.props[2], v.props[3], ins.a)
            push(e2)
            return i + 1
        if nm.startswith('get_loc'):
            idx = self._loc_idx(ins)
            push(E(self.locn.get(idx, 't%d' % idx), pure=True)); return i + 1
        if nm.startswith('put_loc') and nm != 'put_loc_check':
            v = pop()
            idx = self._loc_idx(ins)
            self.put(out, pad, '%s = %s;' % (self.locn.get(idx, 't%d' % idx), self.finalize(v)))
            return i + 1
        if nm == 'put_loc_check':
            v = pop()
            idx = ins.a
            self.put(out, pad, '%s = %s;' % (self.locn.get(idx, 't%d' % idx), self.finalize(v)))
            return i + 1
        if nm.startswith('set_loc') and nm != 'set_loc_uninitialized':
            v = peek(1)
            idx = self._loc_idx(ins)
            self.put(out, pad, '%s = %s;' % (self.locn.get(idx, 't%d' % idx), self.finalize(v)))
            return i + 1
        if nm == 'set_loc_uninitialized':
            out.append(pad + '/* TDZ init %s */' % self.locn.get(ins.a, 't%d' % ins.a))
            return i + 1
        if nm.startswith('get_arg'):
            idx = ins.a if ins.a is not None else int(nm[-1])
            push(E(self.argn.get(idx, 'a%d' % idx), pure=True)); return i + 1
        if nm.startswith('put_arg'):
            v = pop()
            idx = ins.a if ins.a is not None else int(nm[-1])
            self.put(out, pad, '%s = %s;' % (self.argn.get(idx, 'a%d' % idx), self.finalize(v)))
            return i + 1
        if nm.startswith('set_arg'):
            v = peek(1)
            idx = ins.a if ins.a is not None else int(nm[-1])
            self.put(out, pad, '%s = %s;' % (self.argn.get(idx, 'a%d' % idx), self.finalize(v)))
            return i + 1
        if nm.startswith('get_var_ref'):
            idx = ins.a if ins.a is not None else int(nm[-1])
            push(E(self.refn.get(idx, 'g%d' % idx), pure=True)); return i + 1
        if nm.startswith('put_var_ref'):
            v = pop()
            idx = ins.a if ins.a is not None else int(nm[-1])
            self.put(out, pad, '%s = %s;' % (self.refn.get(idx, 'g%d' % idx), self.finalize(v)))
            return i + 1
        if nm.startswith('set_var_ref'):
            v = peek(1)
            idx = ins.a if ins.a is not None else int(nm[-1])
            self.put(out, pad, '%s = %s;' % (self.refn.get(idx, 'g%d' % idx), self.finalize(v)))
            return i + 1
        if nm == 'get_var':
            a = ins.a
            push(E(a if ident(a) else 'globalThis[%s]' % qstr(a), pure=False)); return i + 1
        if nm == 'put_var':
            v = pop()
            a = ins.a
            self.put(out, pad, '%s = %s;' % (a if ident(a) else 'globalThis[%s]' % qstr(a), self.finalize(v)))
            return i + 1
        if nm == 'get_field':
            o = pop()
            push(E(member(self.finalize(o), ins.a), pure=o.pure)); return i + 1
        if nm == 'get_field2':
            o = stack[-1] if isinstance(stack, list) and stack else E('?')
            os_ = o.s
            fe = E(member(os_, ins.a), pure=o.pure)
            fe.fld_obj = os_
            push(fe); return i + 1
        if nm == 'put_field':
            v = pop()
            o = stack[-1] if isinstance(stack, list) and stack else E('?')
            if o.is_obj and isinstance(stack, list) and stack:
                stack.pop()
                o.props.append((ins.a, v))
                push(o)
                return i + 1
            o2 = o
            if isinstance(stack, list) and stack:
                stack.pop()
            self.put(out, pad, '%s = %s;' % (member(o2.s, ins.a), self.finalize(v)))
            return i + 1
        if nm == 'get_array_el':
            k = pop()
            o = pop()
            push(E('%s[%s]' % (paren_if(o.s), k.s), pure=o.pure and k.pure)); return i + 1
        if nm == 'get_array_el2':
            k = pop()
            o = peek(1)
            push(E('%s[%s]' % (paren_if(o.s), k.s), pure=o.pure and k.pure))
            # note: get_array_el2 keeps obj below; approximate by pushing value only
            return i + 1
        if nm == 'put_array_el':
            v = pop()
            k = pop()
            o = pop()
            self.put(out, pad, '%s[%s] = %s;' % (paren_if(o.s), k.s, self.finalize(v)))
            return i + 1
        if nm == 'get_length':
            o = pop()
            push(E('%s.length' % paren_if(o.s), pure=o.pure)); return i + 1
        if nm == 'dup':
            if isinstance(stack, list) and stack:
                stack.append(stack[-1])
            else:
                push(E('?dup'))
            return i + 1
        if nm == 'nip':
            if isinstance(stack, list) and len(stack) >= 2:
                del stack[-2]
            return i + 1
        if nm == 'insert2':
            a = pop()
            if isinstance(stack, list) and stack:
                stack.insert(len(stack) - 1, a)
            push(a)
            return i + 1
        if nm == 'insert3':
            a = pop()
            if isinstance(stack, list) and len(stack) >= 1:
                stack.insert(len(stack) - 1, a)
            push(a)
            return i + 1
        if nm in ('to_propkey','to_propkey2','to_object','nop','close_loc',
                  'iterator_close_return'):
            return i + 1
        if nm == 'push_minus1':
            push(E('-1', pure=True)); return i + 1
        if nm == 'dup2':
            if isinstance(stack, list) and len(stack) >= 2:
                stack.extend([stack[-2], stack[-1]])
            else:
                push(E('?dup2a')); push(E('?dup2b'))
            return i + 1
        if nm == 'perm3':
            # obj a b -> a obj b
            if isinstance(stack, list) and len(stack) >= 3:
                stack[-3], stack[-2], stack[-1] = stack[-2], stack[-1], stack[-3]
            return i + 1
        if nm == 'append':
            # array pos enumobj -> array pos
            pop(); pos = pop(); arr = pop()
            push(arr); push(pos)
            return i + 1
        if nm == 'apply':
            args = pop(); thisv = pop(); fnv = pop()
            push(E('%s.apply(%s, %s)' % (paren_if(fnv.s), thisv.s, args.s), pure=False))
            return i + 1
        if nm == 'drop':
            v = pop()
            stmt(v)
            return i + 1
        if nm == 'typeof':
            v = pop(); push(E('typeof %s' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm == 'lnot':
            v = pop(); push(E('!%s' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm == 'not':
            v = pop(); push(E('~%s' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm == 'neg':
            v = pop(); push(E('-%s' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm == 'plus':
            v = pop(); push(E('+%s' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm == 'is_undefined':
            v = pop(); push(E('%s === undefined' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm == 'is_undefined_or_null':
            v = pop(); push(E('%s == null' % paren_if(v.s), pure=v.pure)); return i + 1
        if nm in BIN:
            b2 = pop(); a2 = pop()
            push(E('%s %s %s' % (paren_if(a2.s), BIN[nm], paren_if(b2.s)),
                   pure=a2.pure and b2.pure)); return i + 1
        if nm == 'in':
            b2 = pop(); a2 = pop()
            push(E('%s in %s' % (paren_if(a2.s), paren_if(b2.s)), pure=False)); return i + 1
        if nm == 'instanceof':
            b2 = pop(); a2 = pop()
            push(E('%s instanceof %s' % (paren_if(a2.s), paren_if(b2.s)), pure=False)); return i + 1
        if nm == 'delete':
            k = pop(); o = pop()
            push(E('delete %s[%s]' % (paren_if(o.s), k.s), pure=False)); return i + 1
        if nm in ('inc','dec','post_inc','post_dec'):
            v = peek(1)
            new = '%s %s 1' % (paren_if(v.s), '+' if 'inc' in nm else '-')
            if isinstance(stack, list) and stack:
                if nm.startswith('post_'):
                    stack[-1] = E(new, pure=v.pure)
                    stack.append(E(v.s, pure=True))
                else:
                    stack[-1] = E(new, pure=v.pure)
            return i + 1
        if nm in ('inc_loc','dec_loc'):
            idx = ins.a
            v = self.locn.get(idx, 't%d' % idx)
            out.append(pad + '%s%s;' % (v, '++' if nm == 'inc_loc' else '--'))
            return i + 1
        if nm == 'add_loc':
            return i + 1
        if nm in ('call0','call1','call2','call3','call'):
            argc = int(nm[-1]) if nm[-1].isdigit() else (ins.a or 0)
            args = [pop() for _ in range(argc)][::-1]
            fv = pop()
            push(E('%s(%s)' % (paren_if(fv.s), ', '.join(self.finalize(a) for a in args)), pure=False))
            return i + 1
        if nm == 'call_method':
            argc = ins.a or 0
            args = [pop() for _ in range(argc)][::-1]
            fv = pop()
            thisv = pop()
            if fv.fld_obj is not None and fv.fld_obj == thisv.s:
                push(E('%s(%s)' % (fv.s, ', '.join(self.finalize(a) for a in args)), pure=False))
            else:
                push(E('%s.call(%s)' % (paren_if(fv.s), ', '.join([thisv.s] + [self.finalize(a) for a in args])), pure=False))
            return i + 1
        if nm in ('tail_call','tail_call_method'):
            argc = ins.a or 0
            if nm == 'tail_call':
                args = [pop() for _ in range(argc)][::-1]
                fv = pop()
                call = '%s(%s)' % (paren_if(fv.s), ', '.join(self.finalize(a) for a in args))
            else:
                args = [pop() for _ in range(argc)][::-1]
                fv = pop()
                thisv = pop()
                if fv.fld_obj is not None and fv.fld_obj == thisv.s:
                    call = '%s(%s)' % (fv.s, ', '.join(self.finalize(a) for a in args))
                else:
                    call = '%s.call(%s)' % (paren_if(fv.s), ', '.join([thisv.s] + [self.finalize(a) for a in args]))
            out.append(pad + 'return %s;' % call)
            return i + 1
        if nm == 'special_object':
            kinds = {0:'arguments',1:'arguments',2:'this',3:'new.target',4:'this',
                     5:'/*var_obj*/',6:'import.meta'}
            push(E(kinds.get(ins.a, '/*special%d*/' % ins.a), pure=True)); return i + 1
        if nm == 'throw':
            v = pop()
            out.append(pad + 'throw %s;' % self.finalize(v)); return i + 1
        if nm == 'return':
            v = pop()
            out.append(pad + 'return %s;' % self.finalize(v)); return i + 1
        if nm == 'return_undef':
            out.append(pad + 'return;'); return i + 1
        if nm == 'iterator_close':
            for _ in range(3):
                pop()
            return i + 1
        if nm in ('for_of_next','for_in_next'):
            for _ in range(3):
                pop()
            push(E('/* iter_rec */', pure=True))
            push(E('/* iter_val */', pure=True))
            push(E('/* iter_done */', pure=True))
            return i + 1
        if nm in ('for_of_start','for_in_start'):
            pop()
            push(E('/* enum_rec */', pure=True))
            push(E('/* enum_rec */', pure=True))
            push(E('/* enum_rec */', pure=True))
            return i + 1
        if nm.startswith('??'):
            out.append(pad + '/* unknown opcode %s */' % nm)
            return i + 1
        # fail loudly: a silently-skipped stack-affecting op corrupts everything after it
        raise LiftFail('unhandled opcode %s' % nm)

    def _loc_idx(self, ins):
        if ins.a is not None:
            return ins.a
        m = re.search(r'(\d+)$', ins.name)
        return int(m.group(1)) if m else 0

    # ------------- closures / functions -------------

    def closure_expr(self, c):
        sub = Lifter(c, self.atoms, parent=self)
        args = sub.arg_list()
        try:
            body, _ = sub.region(0, sub.n, [], 1, break_at_end=False)
        except Exception as ex:
            sys.stderr.write('LIFT-FAIL fn bc@%s: %s\n' % (getattr(c, 'bc_off', '?'), ex))
            body = ['  /* decompile failed: %s */' % ex]
        name = c.name if c.name != '<null>' else None
        e = E(None, func=c, fname=name)
        e.s = None
        e.props = ('fnexpr', sub, args, body, name)  # deferred render
        return e

    def _render_fn(self, deferred, ind=0):
        _, sub, args, body, name = deferred
        pad = '  ' * ind
        lines = []
        for hnm, hsrc in sub.hoisted:
            lines.append('  ' + 'const %s = %s;' % (hnm, hsrc))
        lines.extend(body)
        sig = ', '.join(args)
        header = 'function %s(%s) {' % ('%s' % name if name else '', sig)
        if name:
            header = 'function %s(%s) {' % (name, sig)
        else:
            header = 'function (%s) {' % sig
        return header + '\n' + '\n'.join(lines) + '\n' + pad + '}'

    def render_objlit(self, props):
        """props: list of (key, value) where value is E or ('method', E, kind)."""
        items = []
        short = True
        for key, v in props:
            if isinstance(v, tuple) and v and v[0] == 'method':
                short = False
                break
            if isinstance(v, E) and (v.is_obj or (v.props and isinstance(v.props, tuple))):
                short = False
                break
            if isinstance(v, E) and v.s and '\n' in v.s:
                short = False
                break
        for key, v in props:
            if isinstance(v, tuple) and v and v[0] == 'method':
                _, fe, kind = v
                keytxt = key if ident(key) else ('%s' % qstr(key) if not str(key).isdigit() else key)
                fnsrc = self._render_fn(fe.props, ind=1) if fe.props and fe.props[0] == 'fnexpr' else (fe.s or '/*fn*/')
                header = fnsrc.split('\n')[0]
                bodyrest = fnsrc.split('\n')[1:]
                header = header.replace('function (', '%s%s(' % (kind, keytxt), 1) \
                    if header.startswith('function (') else header
                if header.startswith('function '):
                    header = header[len('function '):]
                    header = '%s%s%s' % (kind, keytxt, header[header.index('('):])
                items.append('  ' + header + '\n' + '\n'.join(bodyrest))
            else:
                vs = self.finalize(v) if isinstance(v, E) else str(v)
                keytxt = key if ident(key) else (key if str(key).isdigit() else qstr(key))
                vs_lines = vs.split('\n')
                if len(vs_lines) == 1:
                    items.append('  %s: %s' % (keytxt, vs))
                else:
                    items.append('  %s: %s' % (keytxt, vs_lines[0]) +
                                 '\n'.join('\n' + ln for ln in vs_lines[1:]))
        if short and sum(len(x) for x in items) < 70:
            return '{%s}' % ', '.join(x.strip() for x in items)
        return '{\n' + ',\n'.join(items) + '\n}'

    def render_function(self, c, name, as_method=False, method_key=None):
        sub = Lifter(c, self.atoms, parent=self)
        args = sub.arg_list()
        try:
            body, _ = sub.region(0, sub.n, [], 1, break_at_end=False)
        except Exception as ex:
            sys.stderr.write('LIFT-FAIL fn bc@%s: %s\n' % (getattr(c, 'bc_off', '?'), ex))
            body = ['  /* decompile failed: %s */' % ex]
        lines = []
        for hnm, hsrc in sub.hoisted:
            lines.append('  const %s = %s;' % (hnm, hsrc))
        lines.extend(body)
        sig = ', '.join(args)
        if as_method:
            header = '%s(%s) {' % (method_key, sig)
        else:
            header = ('function %s(%s) {' % (name, sig)) if name else ('function (%s) {' % sig)
        return header + '\n' + '\n'.join(lines) + '\n  }'

# ---------------------------------------------------------------- file level

def lift_file(path):
    src, atoms, root, end = qjsbc.parse_file(path)
    out = []
    if isinstance(root, dict) and root.get('tag') == 'MODULE':
        mf = root['func']
        exports = root.get('exports', [])
        lif = Lifter(mf, atoms, parent=None, exports=exports)
        body, _ = lif.region(0, lif.n, [], 0, break_at_end=False)
        out.append('// decompiled from %s' % os.path.basename(path))
        out.append('// module %r  exports=%s' % (root['name'], exports))
        for hnm, hsrc in lif.hoisted:
            out.append('const %s = %s;' % (hnm, hsrc))
        out.extend(body)
    elif isinstance(root, Func):
        lif = Lifter(root, atoms)
        body, _ = lif.region(0, lif.n, [], 0, break_at_end=False)
        out.append('// decompiled from %s (script)' % os.path.basename(path))
        for hnm, hsrc in lif.hoisted:
            out.append('const %s = %s;' % (hnm, hsrc))
        out.extend(body)
    return '\n'.join(out) + '\n'

if __name__ == '__main__':
    print(lift_file(sys.argv[1]))
