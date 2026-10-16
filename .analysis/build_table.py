#!/usr/bin/env python3
"""Build the definitive opcode table: DWARF enum (names+order) x binary opcode_info (sizes/formats)."""
import struct, json, re

# 1) DWARF enum: OP_* names -> values, in declaration order
dwarf = open("dwarf.txt").read()
# the OPCodeEnum block: starts at DW_AT_name ... : OPCodeEnum, enumerators follow
m = re.search(r"OPCodeEnum", dwarf)
start = m.start()
seg = dwarf[start:start+40000]
pairs = re.findall(r"OP_([a-z_0-9]+)\s*\n\s*<\w+>\s*DW_AT_const_value : (\d+)", seg)
# names with OP_ prefix removed; keep order of appearance
seen = {}
order = []
for name, val in pairs:
    v = int(val)
    if name not in seen:
        seen[name] = v
        order.append(name)
print("enum entries:", len(order), "max value:", max(seen.values()))

# 2) binary opcode_info records
BIN = "toolkit/node_modules/@aiot-toolkit/jsc/lib/jsc/linux_aiotjsc"
data = open(BIN, "rb").read()
BASE = 0xd1ec0
N = 259
FMT = ["none","none_int","none_loc","none_arg","none_var_ref","u8","i8","loc8","const8",
       "label8","u16","i16","label16","npop","npopx","npop_u16","loc","arg","var_ref",
       "u32","i32","const","label","atom","atom_u8","atom_u16","atom_label_u8",
       "atom_label_u16","label_u16"]
table = []
for i in range(N):
    size, pop, push, fmt = struct.unpack_from("<4B", data, BASE + i*4)
    name = order[i] if i < len(order) else f"op{i}"
    table.append(dict(idx=i, name=name, size=size, pop=pop, push=push, fmt=fmt, fmt_name=FMT[fmt] if fmt < len(FMT) else str(fmt)))

# sanity: compare binary sizes with stock quickjs-opcode.h for common names
stock = {}
for nm, s, p, q, f in re.findall(r"^DEF\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)", open("quickjs-2021-03-27/quickjs-opcode.h").read(), re.M):
    stock[nm] = (int(s), int(p), int(q), f)
diffs = 0
for t in table:
    if t["name"] in stock:
        s, p, q, f = stock[t["name"]]
        if (s, p, q) != (t["size"], t["pop"], t["push"]) or f != t["fmt_name"]:
            diffs += 1
            print("DIFF", t["idx"], t["name"], "stock", stock[t["name"]], "binary", (t["size"], t["pop"], t["push"], t["fmt_name"]))
print("total diffs vs stock:", diffs)
json.dump(table, open("opcode_table.json", "w"), indent=1)
print(json.dumps(table[-16:], indent=0))
