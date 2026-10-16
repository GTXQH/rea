#!/usr/bin/env python3
"""Final opcode table for the AIOT (Vela) QuickJS fork, derived from binary opcode_info[259]
   + structural mapping to stock 2021-03-27 quickjs-opcode.h.
   Segments: [0..177]=stock regular DEFs, [178..192]=temp ops, [193..258]=short ops."""
import struct, json, re

BIN = "toolkit/node_modules/@aiot-toolkit/jsc/lib/jsc/linux_aiotjsc"
data = open(BIN, "rb").read()
BASE = 0xd1ec0
N = 259
recs = []
for i in range(N):
    size, pop, push, fmt = struct.unpack_from("<4B", data, BASE + i*4)
    recs.append((size, pop, push, fmt))

FMT = ["none","none_int","none_loc","none_arg","none_var_ref","u8","i8","loc8","const8",
       "label8","u16","i16","label16","npop","npopx","npop_u16","loc","arg","var_ref",
       "u32","i32","const","label","atom","atom_u8","atom_u16","atom_label_u8",
       "atom_label_u16","label_u16"]

ops_src = open("quickjs-2021-03-27/quickjs-opcode.h").read()
defs = re.findall(r"^DEF\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)", ops_src, re.M)
temps = re.findall(r"^def\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)", ops_src, re.M)

# stock short ops = the DEFs after the temp block (order preserved)
# identify: the last 66 DEFs correspond to shorts (verified structurally)
short_names = [d[0] for d in defs[-66:]]
regular = [d for d in defs[:-66] if d[0] not in ("mul_pow10", "math_mod")]
print("stock regular:", len(regular), "temps:", len(temps), "shorts:", len(short_names))

names = []
names += [d[0] for d in regular]                # 0..177 (mul_pow10/math_mod removed)
names += [t[0] for t in temps]                   # 178..192 (15)
names += short_names                             # 193..258 (66)
assert len(names) == 259, len(names)

table = []
for i, (size, pop, push, fmt) in enumerate(recs):
    table.append(dict(idx=i, name=names[i], size=size, pop=pop, push=push, fmt=fmt,
                      fmt_name=FMT[fmt] if fmt < len(FMT) else str(fmt)))

# verify every regular entry matches its stock record exactly
bad = 0
for i in range(178):
    nm, s, p, q, f = regular[i]
    if (int(s), int(p), int(q), f) != (recs[i][0], recs[i][1], recs[i][2], FMT[recs[i][3]]):
        print("MISMATCH", i, nm, recs[i]); bad += 1
for j, t in enumerate(temps):
    i = 178 + j
    nm, s, p, q, f = t
    if (int(s), int(p), int(q), f) != (recs[i][0], recs[i][1], recs[i][2], FMT[recs[i][3]]):
        print("MISMATCH temp", i, nm, recs[i]); bad += 1
for j, d in enumerate(defs[-66:]):
    i = 193 + j
    nm, s, p, q, f = d
    if (int(s), int(p), int(q), f) != (recs[i][0], recs[i][1], recs[i][2], FMT[recs[i][3]]):
        print("MISMATCH short", i, nm, recs[i], (s, p, q, f)); bad += 1
print("mismatches:", bad)
json.dump(table, open("opcode_table_final.json", "w"), indent=0)
print("names 0-3:", [t["name"] for t in table[:4]], "178:", table[178]["name"], "193:", table[193]["name"], "258:", table[258]["name"])
