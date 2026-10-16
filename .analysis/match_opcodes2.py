#!/usr/bin/env python3
import struct, json, re

BIN = "toolkit/node_modules/@aiot-toolkit/jsc/lib/jsc/linux_aiotjsc"
data = open(BIN, "rb").read()
BASE = 0xd1ec0
N = 259
recs = []
for i in range(N):
    size, n_pop, n_push, fmt = struct.unpack_from("<4B", data, BASE + i*4)
    recs.append((size, n_pop, n_push, fmt))

# fmt enum from DWARF (authoritative for this binary)
FMT = ["none","none_int","none_loc","none_arg","none_var_ref","u8","i8","loc8","const8",
       "label8","u16","i16","label16","npop","npopx","npop_u16","loc","arg","var_ref",
       "u32","i32","const","label","atom","atom_u8","atom_u16","atom_label_u8",
       "atom_label_u16","label_u16"]

ops_src = open("quickjs-2021-03-27/quickjs-opcode.h").read()
defs = re.findall(r"^DEF\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)", ops_src, re.M)

table = []
nmatch = 0
for i, (size, pop, push, fmt) in enumerate(recs):
    name = None
    if i < len(defs):
        nm, s, p, q, f = defs[i]
        stock_rec = (int(s), int(p), int(q), FMT.index(f) if f in FMT else -1)
        if stock_rec == (size, pop, push, fmt):
            name = nm
            nmatch += 1
        else:
            name = f"?{nm}"
    table.append(dict(idx=i, size=size, pop=pop, push=push, fmt=fmt, fmt_name=FMT[fmt] if fmt < len(FMT) else "?", name=name))
    print(f"{i:3d} size={size:2d} pop={pop} push={push} fmt={fmt:2d} {FMT[fmt]:16s} {name or ''}")
print(f"\nmatched {nmatch}/{len(defs)} stock entries; extras: {N-len(defs)}")
json.dump(table, open("opcode_table.json", "w"), indent=1)
