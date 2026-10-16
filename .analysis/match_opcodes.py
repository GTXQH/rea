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

# stock fmt enum: first-appearance order in quickjs-opcode.h
ops_src = open("quickjs-2021-03-27/quickjs-opcode.h").read()
fmt_order = []
for m in re.finditer(r"^(?:DEF|def)\(\s*\w+\s*,\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(\w+)\s*\)", ops_src, re.M):
    if m.group(1) not in fmt_order:
        fmt_order.append(m.group(1))
fmt_idx = {f: i for i, f in enumerate(fmt_order)}

defs = re.findall(r"^DEF\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)", ops_src, re.M)
stock = [(int(s), int(p), int(q), fmt_idx[f], name) for name, s, p, q, f in defs]

print("stock fmt enum:", fmt_order)
print(f"{'idx':>4} {'binary size pop push fmt':>28} | match")
table = []
for i, r in enumerate(recs):
    match = ""
    if i < len(stock) and stock[i][:4] == r:
        match = stock[i][4]
    elif i < len(stock):
        match = f"MISMATCH stock={stock[i][4]}{stock[i][:4]}"
    table.append(dict(idx=i, size=r[0], pop=r[1], push=r[2], fmt=r[3], name=match if isinstance(match, str) and not match.startswith("MISMATCH") else None))
    print(f"{i:4d} {r[0]:4d} {r[1]:3d} {r[2]:4d} {r[3]:3d} | {match}")
json.dump(table, open("opcode_table.json", "w"), indent=1)
