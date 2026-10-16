#!/usr/bin/env python3
"""Trace stack depth through function bc@100886 to find where it's lost."""
import sys
sys.path.insert(0, '/workspace/.analysis')
import qjsbc

src, atoms, root, end = qjsbc.parse_file('/workspace/.analysis/rpk/extracted/pages/game/index.jsc')

funcs = []

def walk(f, path=''):
    funcs.append((path, f))
    cp = getattr(f, 'cpool', None) or []
    for i, c in enumerate(cp):
        if isinstance(c, qjsbc.Func):
            walk(c, path + '/cp%d' % i)

if isinstance(root, dict) and root.get('tag') == 'MODULE':
    walk(root['func'], 'mod')
elif isinstance(root, qjsbc.Func):
    walk(root, 'root')

target = None
for path, f in funcs:
    if getattr(f, 'bc_off', None) == 100886:
        target = (path, f)
        break
print('found:', target[0] if target else None)
f = target[1]
atoms_l = atoms if isinstance(atoms, list) else None
lif = __import__('qjslift').Lifter(f, atoms, parent=None)

# Simulate abstract stack depth only (no expression tracking)
depth = 0
hist = []
probes = {}  # pos -> depth for jump targets
i = 0
n = len(lif.ins)
while i < n:
    ins = lif.ins[i]
    nm = ins.name
    start = depth
    # abstract pops/pushes per opcode family
    def pops(k):
        global depth
        depth = max(0, depth - k)
    def pushes(k=1):
        global depth
        depth += k
    if nm.startswith('push_') or nm in ('null','undefined','push_this','push_atom_value',
                                        'push_true','push_false','object','fclosure8','fclosure',
                                        'push_empty_string','regexp','get_import','get_var_undef'):
        pushes(1)
    elif nm in ('push_const8','push_const'):
        c = f.cpool[ins.a]
        pushes(1)
    elif nm in ('get_loc8','get_loc','get_loc0','get_loc1','get_loc2','get_loc3',
                'get_arg0','get_arg1','get_arg2','get_arg3','get_var','get_var_ref',
                'get_field','get_field2','get_loc_check','get_arg_check','get_this'):
        pushes(1)
    elif nm.startswith('get_var') or nm.startswith('get_loc') or nm.startswith('get_arg'):
        pushes(1)
    elif nm in ('put_loc8','put_loc','put_loc0','put_loc1','put_loc2','put_loc3',
                'put_arg0','put_arg1','put_arg2','put_arg3','put_loc_check','put_arg_check',
                'put_var_ref_check','put_var','put_var_ref','put_var_check'):
        pops(1)
    elif nm in ('drop','scope_get_var_free'):
        pops(1)
    elif nm in ('dup','dup1','dup2','dup3'):
        pushes(1)
    elif nm in ('swap','swap2'):
        pass
    elif nm.startswith('if_false') or nm.startswith('if_true'):
        pops(1)
        if ins.target is not None and ins.target >= 0:
            probes.setdefault(lif.ins[ins.target].pos, depth)
    elif nm.startswith('goto'):
        if ins.target is not None and ins.target >= 0:
            probes.setdefault(lif.ins[ins.target].pos, depth)
        # linear flow ends here; next instruction reachable only via another jump
        hist.append((i, ins.pos, nm, start, depth))
        # don't stop; continue tracing linearly anyway (conservative)
        i += 1
        continue
    elif nm in ('add','sub','mul','div','mod','pow','lt','le','gt','ge','eq','ne',
                'logical_not','lnot','bnot','and','or','xor','shl','shr','sar',
                'instanceof','in','typeof','typeof_delete','delete','nullish',
                'add_loc','push_minus_1','push_i8','push_i16','push_i32','push_const8'):
        pops(2 if nm not in ('logical_not','lnot','bnot','typeof','typeof_delete',
                             'delete','push_minus_1','add_loc') else 1)
        pushes(1)
        if nm == 'add_loc':
            pops(1)  # fix double count
    elif nm in ('call0','call1','call2','call3','call_method0','call_method1',
                'call_method2','call_method3','array_from'):
        argc = ins.a or 0
        extra = 2 if nm.startswith('call_method') else 1
        pops(argc + extra)
        pushes(1)
    elif nm == 'call':
        pops(ins.a + 2)
        pushes(1)
    elif nm == 'return':
        pops(1)
    elif nm in ('return_undef',):
        pass
    elif nm == 'define_field':
        pops(1)
    elif nm == 'define_method':
        pops(1)
    elif nm == 'put_field':
        pops(2)
    elif nm == 'get_array_el':
        pops(2); pushes(1)
    elif nm == 'put_array_el':
        pops(3)
    elif nm == 'append':
        pops(2); pushes(1)
    elif nm.startswith('label'):
        pass
    elif nm == 'catch':
        pushes(1)
    elif nm in ('gosub','ret','finally'):
        pass
    else:
        pass  # unknown: assume net 0
    hist.append((i, ins.pos, nm, start, depth))
    if ins.target is not None and ins.target >= 0 and not nm.startswith('if_') and not nm.startswith('goto'):
        pass
    i += 1

# label depth conflicts: same target reached with different depths
idx2pos = {i: h[1] for i, h in enumerate(hist)}
pos2idx = {h[1]: i for i, h in enumerate(hist)}
conflicts = {}
for i, h in enumerate(hist):
    pos, nm, d = h[1], h[2], h[4]
    ins = lif.ins[i]
    if ins.target is not None and ins.target >= 0 and ins.target < len(lif.ins):
        tpos = lif.ins[ins.target].pos
        key = tpos
        val = d
        if key in conflicts and conflicts[key][0] != val:
            print('CONFLICT at target pos=%d: depth %d (from %s@%d) vs %d (from %s@%d)' % (
                tpos, conflicts[key][0], conflicts[key][1], conflicts[key][2], val, nm, pos))
            # show the target instruction and its neighborhood
            ti = pos2idx.get(tpos)
            if ti is not None:
                for j in range(max(0, ti-4), min(len(hist), ti+3)):
                    _, p2, nm2, s2, d2 = hist[j]
                    mark = ' <<<' if j == ti else ''
                    print('   idx=%d pos=%d %-22s %d -> %d%s' % (j, p2, nm2, s2, d2, mark))
            conflicts[key] = (val, nm, pos)  # keep updating to see all
        elif key not in conflicts:
            conflicts[key] = (val, nm, pos)
print('total jump targets checked:', len(conflicts))

# where does depth hit 0 while later code still needs values?
zero_pts = [h for h in hist if h[4] == 0 and h[1] > 500]
print('zero-depth points after pos 500:', [(h[0], h[1], h[2]) for h in zero_pts[:8]])
if zero_pts:
    z = zero_pts[0][0]
    for j in range(max(0, z-14), min(len(hist), z+6)):
        _, p2, nm2, s2, d2 = hist[j]
        mark = ' <<<' if j == z else ''
        print('   idx=%d pos=%d %-22s %d -> %d%s' % (j, p2, nm2, s2, d2, mark))
print('final depth:', hist[-1][4])
