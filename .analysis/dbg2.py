#!/usr/bin/env python3
"""Instrument the real Lifter on bc@100886: log stack depth after each emit_simple."""
import sys
sys.path.insert(0, '/workspace/.analysis')
import qjsbc, qjslift

src, atoms, root, end = qjsbc.parse_file('/workspace/.analysis/rpk/extracted/pages/game/index.jsc')

funcs = []
def walk(f, path=''):
    funcs.append((path, f))
    for i, c in enumerate(getattr(f, 'cpool', None) or []):
        if isinstance(c, qjsbc.Func):
            walk(c, path + '/cp%d' % i)
walk(root['func'], 'mod')

target = next((p, f) for p, f in funcs if getattr(f, 'bc_off', None) == 100886)
path, f = target
print('path:', path)

orig = qjslift.Lifter.emit_simple
events = []

def traced(self, i, stack, out, ind):
    before = list(stack) if isinstance(stack, list) else None
    r = orig(self, i, stack, out, ind)
    after = list(stack) if isinstance(stack, list) else None
    ins = self.ins[i]
    events.append((i, ins.pos, ins.name,
                   [getattr(e, 's', '?')[:20] if getattr(e, 's', None) else ('OBJ' if getattr(e,'is_obj',False) else '?') for e in before],
                   [getattr(e, 's', '?')[:20] if getattr(e, 's', None) else ('OBJ' if getattr(e,'is_obj',False) else '?') for e in after]))
    return r

qjslift.Lifter.emit_simple = traced
try:
    lif = qjslift.Lifter(f, atoms, parent=None)
    body, st = lif.region(0, lif.n, [], 1, break_at_end=False)
    print('OK final stack:', st)
except Exception as ex:
    print('FAIL:', ex)
qjslift.Lifter.emit_simple = orig

# dump events around idx 430-482 to find where the item object vanished
for e2 in events:
    if 425 <= e2[0] <= 482:
        print('   idx=%d pos=%d %-20s %d -> %d | before=%s' % (e2[0], e2[1], e2[2], len(e2[3]), len(e2[4]), e2[3]))
