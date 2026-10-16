#!/usr/bin/env python3
"""Extract the exact opcode_info table from the aiotjsc ELF binary."""
import struct, sys

BIN = "toolkit/node_modules/@aiot-toolkit/jsc/lib/jsc/linux_aiotjsc"
data = open(BIN, "rb").read()

# --- parse ELF64 section headers ---
e_shoff, = struct.unpack_from("<Q", data, 0x28)
e_shentsize, e_shnum, e_shstrndx = struct.unpack_from("<HHH", data, 0x3A)
sections = []
for i in range(e_shnum):
    off = e_shoff + i * e_shentsize
    name, typ, flags, addr, offset, size, link, info, align, entsize = struct.unpack_from("<IIQQQQIIQQ", data, off)
    sections.append(dict(name=name, typ=typ, addr=addr, offset=offset, size=size, entsize=entsize))
shstr = sections[e_shstrndx]
def secname(s):
    n = data[shstr["offset"]+s["name"]:]
    return n[:n.index(b"\0")].decode()
for s in sections:
    s["nm"] = secname(s)
sec = {s["nm"]: s for s in sections}

# --- relocations: R_X86_64_RELATIVE (type 8) map addr->addend ---
relocs = {}
for nm in (".rela.dyn", ".rela.text", ".rela.rodata"):
    if nm in sec:
        s = sec[nm]
        for off in range(s["offset"], s["offset"]+s["size"], 24):
            r_off, r_info, r_add = struct.unpack_from("<QQq", data, off)
            if (r_info & 0xffffffff) == 8:  # R_X86_64_RELATIVE
                relocs[r_off] = r_add

ro = sec[".rodata"]
# map every vaddr range to file offset across all PROGBITS sections
ranges = [(s["addr"], s["addr"]+s["size"], s["offset"]) for s in sections
          if s["typ"] == 1 and s["size"] > 0 and s["addr"] > 0]
ranges.sort()
def vaddr_to_off(vaddr):
    for a, b, off in ranges:
        if a <= vaddr < b:
            return vaddr - a + off
    return None
def read_vaddr(vaddr, size):
    o = vaddr - ro["addr"] + ro["offset"]
    return data[o:o+size]
def cstr_at(vaddr):
    o = vaddr_to_off(vaddr)
    if o is None: return None
    e = data.index(b"\0", o)
    return data[o:e].decode("latin1")

OPCODE_INFO = 0xd1ec0
N = 259
out = []
for i in range(N):
    base = OPCODE_INFO + i*16
    ptr = struct.unpack_from("<Q", data, base - ro["addr"] + ro["offset"])[0]
    if base in relocs: ptr = relocs[base]
    size, op, fmt = struct.unpack_from("<BBH", data, base+8 - ro["addr"] + ro["offset"])
    name = cstr_at(ptr) if ptr else None
    out.append(dict(idx=i, name=name, ptr=ptr, size=size, op=op, fmt=fmt))

out = [dict(d, name=d["name"]) for d in out]
names = [d["name"] for d in out]

for d in out:
    name = d["name"]
    print(f"{d['idx']:3d} {(name if name else '<unresolved:%x>' % d['ptr']):32s} size={d['size']:3d} fmt={d['fmt']}")

# also save as JSON
import json
json.dump([dict(idx=d["idx"], name=d["name"], size=d["size"], op=d["op"], fmt=d["fmt"]) for d in out], open("opcode_table.json","w"), indent=1)

# diff with stock
stock = open("quickjs-2021-03-27/quickjs-opcode.h").read()
import re
sdefs = re.findall(r"^DEF\(\s*(\w+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\w+)\s*\)", stock, re.M)
print("\n== diff vs stock 2021-03-27 (DEF ops only) ==")
snames = [d[0] for d in sdefs]
print("stock:", len(snames), "binary:", sum(1 for n in names if n))
for i, (a, b) in enumerate(zip(snames, [d["name"] for d in out])):
    if a != b and b:
        print(f"  idx {i}: stock={a} binary={b}")
extra = [ (d["idx"], d["name"]) for d in out[len(snames):] if d["name"] ]
print("extra entries in binary:", extra)
