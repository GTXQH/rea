#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
从原始 Construct 3 导出中提取数据与资源，生成 Vela 快应用可用的模块。
输入: /workspace/.cache/base_apk_jadx/resources/assets/www
输出: /workspace/vela-noobminer/{src/common/data, assets}
"""
import json, os, re, shutil, subprocess

WWW = '/workspace/.cache/base_apk_jadx/resources/assets/www'
ROOT = '/workspace/vela-noobminer'
DATA = os.path.join(ROOT, 'src/common/data')
ASSETS = os.path.join(ROOT, 'src/assets')
IMG = os.path.join(ASSETS, 'images')
AUD = os.path.join(ASSETS, 'audio')

for d in (DATA, IMG, AUD):
    os.makedirs(d, exist_ok=True)


# ---------------- 本地化文案 ----------------
def parse_locale(name):
    s = open(os.path.join(WWW, name), encoding='utf-8').read()
    marks = list(re.finditer(r'^<(\w+)>\s*$', s, re.M))
    groups = {}
    for i, m in enumerate(marks):
        end = marks[i + 1].start() if i + 1 < len(marks) else len(s)
        body = s[m.end():end]
        groups[m.group(1)] = dict(re.findall(r'<([A-Za-z_]\w*)>([^<]*)</\1>', body))
    return groups


def ordered(d):
    ks = sorted((k for k in d if re.fullmatch(r'n\d+', k)), key=lambda k: int(k[1:]))
    return [d[k] for k in ks]


EN = parse_locale('en.xml')
RU = parse_locale('ru.xml')
print('locale groups en:', {k: len(v) for k, v in EN.items()})

NAMES = {}
for tag, loc in (('en', EN), ('ru', RU)):
    NAMES[tag] = {
        'tile': ordered(loc.get('tile', {})),
        'item': ordered(loc.get('item', {})),
        'obj': ordered(loc.get('obj', {})),
    }
UI = {
    'en': EN.get('main', {}),
    'ru': RU.get('main', {}),
}

# 应用外壳中文文案（仅 UI，不覆盖游戏内名称）
UI_ZH = {
    'title': 'Noob Miner', 'subtitle': '逃离监狱',
    'continue': '继续游戏', 'newgame': '新的游戏', 'language': '语言', 'reset': '重置存档',
    'inventory': '背包', 'craft': '合成', 'shop': '商人', 'quests': '任务', 'perks': '天赋',
    'close': '关闭', 'sell': '出售', 'buy': '购买', 'price': '价格', 'reward': '奖励',
    'need': '需要', 'timer': '限时', 'level': '等级', 'upgrade': '升级', 'dig': '挖',
    'left': '左', 'right': '右', 'jump': '跳', 'save': '已保存', 'nosave': '无存档',
    'hp': '生命', 'coins': '金币', 'depth': '深度', 'empty': '空',
}


def js(obj, indent=0):
    return json.dumps(obj, ensure_ascii=False, separators=(',', ':'))


# ---------------- 数据表 ----------------
def c2array(name):
    return json.load(open(os.path.join(WWW, name), encoding='utf-8'))


bs = c2array('blocksettings.json')


def col(arr, c, skip_header=True):
    d = arr['data'][c]
    return [r[0] for r in (d[1:] if skip_header else d)]


BLOCKS = {
    'hardness': col(bs, 0),
    'durability': col(bs, 1),
    'type': col(bs, 2),
}
print('blocks entries:', len(BLOCKS['hardness']))

ci = c2array('costitem.json')
RECIPES = [[ci['data'][c][r][0] for c in range(ci['size'][0])] for r in range(ci['size'][1])]

tr = c2array('trader.json')
TRADER = [[tr['data'][c][r][0] for c in range(tr['size'][0])] for r in range(tr['size'][1])]

aq = c2array('arrayquests.json')
QUESTS = [[aq['data'][c][r][0] for c in range(aq['size'][0])] for r in range(aq['size'][1])]

pk = c2array('perks.json')
PERKS = [[pk['data'][c][r][0] for c in range(pk['size'][0])] for r in range(pk['size'][1])]
print('recipes/trader/quests/perks:', len(RECIPES), len(TRADER), len(QUESTS), len(PERKS))

# ---------------- 图集 ----------------
P = json.load(open(os.path.join(WWW, 'data.json'), encoding='utf-8'))['project']
sheets = []
sid = {}
anims = {}
for ot in P[3]:
    if not isinstance(ot, list) or len(ot) < 8 or not isinstance(ot[7], list):
        continue
    name = ot[0]
    for a in ot[7]:
        if not isinstance(a, list) or len(a) < 8 or not isinstance(a[7], list):
            continue
        frames = []
        for fr in a[7]:
            if not isinstance(fr, list) or len(fr) < 6 or not isinstance(fr[0], str):
                continue
            f = fr[0]
            if f not in sid:
                sid[f] = len(sheets)
                sheets.append(f)
            frames.append([sid[f], fr[2], fr[3], fr[4], fr[5]])
        anims['%s/%s' % (name, a[0])] = frames
print('atlas anims:', len(anims), 'frames:', sum(len(v) for v in anims.values()),
      'sheets:', len(sheets))
print('itemdrop frames:', len(anims.get('itemDrop/tile', [])))

# ---------------- 落地 JS 模块 ----------------
w = lambda n, s: open(os.path.join(DATA, n), 'w', encoding='utf-8').write(s)

w('lang.js', '// 由 tools/build_data.py 从 en.xml / ru.xml 生成\nexport const NAMES=%s;\nexport const UI=%s;\nexport const UI_ZH=%s;\n'
  % (js(NAMES), js(UI), js(UI_ZH)))
w('blocks.js', '// 方块硬度 / 耐久 / 材质（blocksettings.json）\nexport const BLOCKS=%s;\n' % js(BLOCKS))
w('recipes.js', '// 合成配方（costitem.json）：[方块id, 物品id, 产物id]\nexport const RECIPES=%s;\n' % js(RECIPES))
w('trader.js', '// 商人买卖表（trader.json）\nexport const TRADER=%s;\n' % js(TRADER))
w('quests.js', '// 任务表（arrayquests.json）\nexport const QUESTS=%s;\n' % js(QUESTS))
w('perks.js', '// 天赋/升级表（perks.json）\nexport const PERKS=%s;\n' % js(PERKS))
w('atlas.js', '// 图集帧表（data.json）：[sheetIndex,x,y,w,h]\nexport const SHEETS=%s;\nexport const ATLAS=%s;\n'
  % (js(sheets), js(anims)))

# ---------------- 图片资源 ----------------
copied = 0
total = 0
for f in os.listdir(os.path.join(WWW, 'images')):
    src = os.path.join(WWW, 'images', f)
    if os.path.isfile(src):
        dst = os.path.join(IMG, f)
        shutil.copy2(src, dst)
        copied += 1
        total += os.path.getsize(dst)
print('images copied: %d, %.2f MB' % (copied, total / 1048576))

# ---------------- 音频资源 ----------------
SFX = ['btn_all', 'btn_select_lvl', 'buy', 'sellitem', 'break', 'breakstick', 'hit_wood',
       'stone1', 'stone2', 'stone3', 'stone4', 'wood1', 'wood2', 'wood3', 'wood4',
       'gravel1', 'gravel2', 'sand1', 'sand2', 'pop', 'pop2', 'error', 'dooropen',
       'doorclose', 'boom', 'orb', 'ignite', 'plant', 'harvest1', 'harvest3',
       'eat1', 'weak1', 'zombie1', 'skeleton1', 'pig1', 'chicken1', 'waterin',
       'waterout', 'whoosh', 'fallsmall', 'gm_win', 'lose', 'creak_bow', 'bow_shoot']
BGM = 'kevinmacleod'

made = []
for nm in SFX:
    src = os.path.join(WWW, 'media', nm + '.webm')
    if not os.path.exists(src):
        continue
    dst = os.path.join(AUD, nm + '.mp3')
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-ac', '1', '-ar', '24000',
                    '-b:a', '48k', dst], check=True)
    made.append(nm)
src = os.path.join(WWW, 'media', BGM + '.webm')
if os.path.exists(src):
    subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', src, '-ac', '1', '-ar', '24000',
                    '-b:a', '48k', os.path.join(AUD, BGM + '.mp3')], check=True)
aud_total = sum(os.path.getsize(os.path.join(AUD, f)) for f in os.listdir(AUD))
print('audio: %d sfx + bgm, %.2f MB' % (len(made), aud_total / 1048576))

# ---------------- 应用图标（复用原游戏图标） ----------------
icon_dir = os.path.join(ROOT, 'src/common')
os.makedirs(icon_dir, exist_ok=True)
subprocess.run(['ffmpeg', '-v', 'error', '-y', '-i', os.path.join(WWW, 'icons/icon-256.png'),
                '-vf', 'scale=192:192', os.path.join(icon_dir, 'icon.png')], check=True)
print('icon: src/common/icon.png 192x192')

# 清理旧的错误路径产物
stale = os.path.join(ROOT, 'assets')
if os.path.isdir(stale):
    shutil.rmtree(stale)
print('DONE')

