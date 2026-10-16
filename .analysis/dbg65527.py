#!/usr/bin/env python3
"""Debug lift of module default wrapper bc@65527."""
import sys
sys.path.insert(0, '/workspace/.analysis')
import qjsbc, qjslift

src, atoms, root, end = qjsbc.parse_file('/workspace/.analysis/rpk/extracted/pages/game/index.jsc')
mf = root['func']
# module.<eval> = mf itself? mf is bc@65501
print('module func bc_off:', mf.bc_off, 'bclen:', mf.bytecode and len(mf.bytecode))
sub = mf.cpool[0]
print('cp0 bc_off:', sub.bc_off, 'bclen:', len(sub.bytecode))

# show decoded targets
lif = qjslift.Lifter(mf, atoms, parent=None)
for i in lif.ins:
    print(i.pos, i.name, i.fmt, 'a=%r' % (i.a,), 'target=%r' % (i.target,))
print('---- lift module.<eval>:')
body, st = lif.region(0, lif.n, [], 0, break_at_end=False)
print('\n'.join(body))
print('---- lift cp0 (default fn):')
lif2 = qjslift.Lifter(sub, atoms, parent=None)
body2, st2 = lif2.region(0, lif2.n, [], 1, break_at_end=False)
print('\n'.join(body2))
print('leftover stack:', [getattr(e, 's', '?') for e in st2])
