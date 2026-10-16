#!/usr/bin/env python3
import struct, json, re

dwarf = open("dwarf.txt").read()
m = re.search(r"OPCodeEnum", dwarf)
seg = dwarf[m.start():m.start()+60000]
# enumerator blocks: name line then const_value line (allow interleaved offsets)
blocks = re.findall(r"OP_([A-Za-z_0-9]+)\s*\n\s*<\w+>\s*DW_AT_const_value : (\d+)", seg)
val2name = {}
for name, val in blocks:
    v = int(val)
    if v not in val2name:
        val2name[v] = name  # first declaration wins (DEF before temp def)
print("extracted:", len(blocks), "distinct values:", len(val2name), "max:", max(val2name))
missing = [v for v in range(max(val2name)) if v not in val2name]
print("missing values:", missing)

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
    name = val2name.get(i, f"op{i}")
    table.append(dict(idx=i, name=name, size=size, pop=pop, push=push, fmt=fmt,
                      fmt_name=FMT[fmt] if fmt < len(FMT) else str(fmt)))

stock = {}
for nm, s, p, q, f in re.findall(r"^DEF\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)",
                                 open("quickjs-2021-03-27/quickjs-opcode.h").read(), re.M):
    stock[nm] = (int(s), int(p), int(q), f)
diffs = 0
for t in table:
    nm = t["name"]
    if nm in stock:
        s, p, q, f = stock[nm]
        if (s, p, q) != (t["size"], t["pop"], t["push"]) or f != t["fmt_name"]:
            diffs += 1
            print("DIFF", t["idx"], nm, "stock", stock[nm], "binary", (t["size"], t["pop"], t["push"], t["fmt_name"]))
print("diffs:", diffs)
print("tail:", [(t["idx"], t["name"]) for t in table[-14:]])
json.dump(table, open("opcode_table.json", "w"), indent=1)
