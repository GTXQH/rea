#!/usr/bin/env python3
"""Walk a parsed .jsc: dump the function tree and reconstruct cpool
constant data (strings/arrays/objects/numbers) as JSON."""
import json, sys
import qjsbc

def const_to_obj(c, depth=0):
    if isinstance(c, qjsbc.Func):
        return f"<function {c.name} bclen={c.byte_code_len} cpool={c.cpool_count}>"
    t = c.get("tag")
    if t == "STRING": return c["v"]
    if t == "INT32": return c["v"]
    if t == "FLOAT64":
        v = c["v"]
        return int(v) if v == int(v) else v
    if t in ("NULL","UNDEFINED","BOOL_FALSE","BOOL_TRUE"):
        return {"NULL":None,"UNDEFINED":None,"BOOL_FALSE":False,"BOOL_TRUE":True}[t]
    if t == "ARRAY":
        return [const_to_obj(v, depth+1) for v in c["vals"]]
    if t == "OBJECT":
        return {p[0]: const_to_obj(p[1], depth+1) for p in c["props"]}
    if t == "TEMPLATE_OBJECT":
        return {"$template": [const_to_obj(v, depth+1) for v in c["vals"]],
                "$raw": const_to_obj(c["raw"], depth+1)}
    if t == "ARRAY_BUFFER":
        return {"$arraybuf_len": c["len"]}
    if t == "DATE":
        return {"$date": const_to_obj(c["v"], depth+1)}
    if t == "FLOAT64" or t == "INT32":
        return c["v"]
    return f"<{t}>"

def walk(f, path, out):
    entry = {
        "path": path,
        "name": f.name,
        "kind": qjsbc.FUNC_KIND[f.func_kind],
        "args": f.arg_count, "varargs": f.var_count,
        "defargs": f.defined_arg_count, "stack": f.stack_size,
        "locals": f.local_count, "closures": f.closure_var_count,
        "cpool": f.cpool_count, "bclen": f.byte_code_len,
        "var_names": [v[0] for v in f.vardefs],
        "closure_names": [v[0] for v in f.closure_vars],
    }
    consts = []
    for i, c in enumerate(f.cpool):
        if isinstance(c, qjsbc.Func):
            consts.append({"idx": i, "function": True})
        else:
            consts.append({"idx": i, "value": const_to_obj(c)})
    entry["cpool_values"] = consts
    out.append(entry)
    for i, c in enumerate(f.cpool):
        if isinstance(c, qjsbc.Func):
            walk(c, f"{path}.cpool[{i}]", out)

if __name__ == "__main__":
    src, atoms, root, end = qjsbc.parse_file(sys.argv[1])
    tree = []
    if isinstance(root, dict) and root.get("tag") == "MODULE":
        walk(root["func"], "module", tree)
        mod = {"module": root["name"], "req": root["req"],
               "exports": [list(e) for e in root["exports"]],
               "imports": [list(i) for i in root["imports"]],
               "functions": tree}
    else:
        walk(root, "global", tree)
        mod = {"functions": tree}
    json.dump(mod, open(sys.argv[2], "w"), ensure_ascii=False, indent=1)
    print(f"{len(tree)} functions -> {sys.argv[2]}", file=sys.stderr)
