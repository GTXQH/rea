#!/usr/bin/env python3
"""Audit: opcodes present in .jsc files vs handlers in qjslift.emit_simple."""
import sys, re, json, collections
sys.path.insert(0, '/workspace/.analysis')
import qjsbc, qjslift

# extract handled opcode names from emit_simple source
src = open('/workspace/.analysis/qjslift.py').read()
m = re.search(r'def emit_simple\(self.*?(?=\n    def )', src, re.S)
body = m.group(0)
handled = set()
for mm in re.finditer(r"nm == '([a-z0-9_]+)'", body): handled.add(mm.group(1))
for mm in re.finditer(r"nm in \(([^)]*)\)", body):
    for x in re.findall(r"'([a-z0-9_]+)'", mm.group(1)): handled.add(x)
for mm in re.finditer(r"nm\.startswith\('([a-z0-9_]+)'\)", body): handled.add(mm.group(1)+ '*')
# region-level handlers
m2 = re.search(r'def region\(self.*?(?=\n    def )', src, re.S)
for mm in re.finditer(r"nm == '([a-z0-9_]+)'", m2.group(0)): handled.add(mm.group(1))
for mm in re.finditer(r"nm\.startswith\('([a-z0-9_]+)'\)", m2.group(0)): handled.add(mm.group(1)+ '*')

print('handled entries:', len(handled))

def matches(nm, entries):
    if nm in entries: return True
    for e in entries:
        if e.endswith('*') and nm.startswith(e[:-1]): return True
    return False

counts = collections.Counter()
for page in ['game', 'activation', 'license', 'register', 'app']:
    path = '/workspace/.analysis/rpk/extracted/pages/%s/index.jsc' % page
    try:
        srcf, atoms, root, end = qjsbc.parse_file(path)
    except Exception as ex:
        print(page, 'PARSE FAIL', ex); continue
    def walk(f):
        ins = qjslift.decode_with_map(f, atoms)
        for i in ins:
            counts[i.name] += 1
        for c in getattr(f, 'cpool', None) or []:
            if isinstance(c, qjsbc.Func): walk(c)
    if isinstance(root, dict) and root.get('tag') == 'MODULE': walk(root['func'])
    elif isinstance(root, qjsbc.Func): walk(root)

print('\n=== opcodes NOT handled by emit_simple/region ===')
for nm, c in sorted(counts.items(), key=lambda kv: -kv[1]):
    if not matches(nm, handled):
        print('%8d  %s' % (c, nm))
