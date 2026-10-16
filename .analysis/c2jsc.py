#!/usr/bin/env python3
"""Extract raw bytecode from aiotjsc C-array output (*.jsc C source)."""
import re, sys

src = open(sys.argv[1]).read()
m = re.search(r'const uint8_t \w+\[[^\]]*\] = \{(.*?)\};', src, re.S)
vals = [int(x, 16) for x in re.findall(r'0x([0-9a-fA-F]{2})', m.group(1))]
sys.stdout.buffer.write(bytes(vals))
