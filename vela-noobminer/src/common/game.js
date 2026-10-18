// src/common/game.js
// 移植版核心玩法：世界生成、挖掘、背包、合成、商人、任务、天赋、存档。
//
// 数据来源标注：
//   ✅ 原包直取：方块硬度/耐久/材质(blocksettings)、买卖清单(trader)、任务(quests)、天赋(perks)、
//                方块/工具/掉落名称(en.xml, ru.xml)、图集帧表(data.json)
//   ✍️ 重写：合成配方与商店价格（costitem.json 列语义未能可靠还原，见 data/craft.js）
//   ❓ 未还原：任务奖励第二字段含义（默认按金币处理）

import {
  TILE, Assets, frame, frameCount, computeLayout, createLoop,
  rect, text, bar, inRect
} from './engine.js';
import { NAMES, UI, UI_ZH } from './data/lang.js';
import { BLOCKS } from './data/blocks.js';
import { TRADER } from './data/trader.js';
import { QUESTS } from './data/quests.js';
import { PERKS } from './data/perks.js';
import { CRAFT, PRICES } from './data/craft.js';

const WORLD_W = 240;
const WORLD_H = 96;
const AIR = 0;

const DIRT = 16, DIRT_GRASS = 17, STONE = 59, COBBLE = 61, DARKSTONE = 60;
const OAK = 18, LEAVES = 19, COAL = 1, IRON = 3, GOLD = 62, DIAMOND = 2, EMERALD = 4;

/** 挖掘掉落：方块 id → 物品键。未列出者掉落自身。 */
const DROPS = {
  1: 'obj:2', 67: 'obj:2', 65: 'obj:2',   // 煤矿石 / 含煤泥土 → 煤
  3: 'obj:3',                              // 铁矿石 → 铁
  62: 'obj:4',                             // 金矿石 → 金
  2: 'obj:5',                              // 钻石矿 → 钻石
  4: 'obj:12',                             // 绿宝石矿 → 绿宝石
  19: 'obj:17'                             // 树叶 → 小麦种子
};

/** 挖掘所需的镐等级（0=徒手） */
const BLOCK_TIER = {
  1: 1, 67: 1, 65: 1, 3: 2, 62: 3, 2: 3, 4: 4, 24: 4, 85: 2, 84: 3
};

/** 镐等级：物品 id → 等级 */
const PICK_LEVEL = { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 };
const DIG_SPEED = [0.6, 1.0, 1.5, 2.0, 2.6, 3.4];

const DEFAULT_HARDNESS = 64;
const GRAVITY = 0.5;
const MOVE_SPEED = 1.35;
const JUMP_V = -6.2;
const REACH_TILES = 3.2;

function makeRng(seed) {
  let s = (seed >>> 0) || 1;
  return function () {
    s = (Math.imul ? Math.imul(s, 1664525) : s * 1664525) + 1013904223;
    s = s >>> 0;
    return s / 4294967296;
  };
}

function keyOf(k) { return k; }
function splitKey(k) { const a = String(k).split(':'); return { kind: a[0], id: parseInt(a[1], 10) }; }

export class Game {
  constructor(ctx, assets, layout, env) {
    this.ctx = ctx;
    this.assets = assets;
    this.L = layout;
    this.env = env;              // { storage, prompt, vibrator, audio, lang, exit }
    this.lang = (env && env.lang) || 'zh';
    this.tiles = null;
    this.mode = 'play';          // play | menu | panel
    this.panel = null;           // inv | craft | shop | quests | perks | settings
    this.panelScroll = 0;
    this.msg = '';
    this.msgT = 0;
    this.dig = { x: -1, y: -1, t: 0 };
    this.keys = { left: false, right: false, jump: false, digDown: false };
    this.frame_i = 0;
    this.touch = { target: null, startY: 0, moved: 0 };
    this.paused = false;
  }

  /* ---------------- 名称 ---------------- */

  name(kind, id) {
    if (this.lang === 'zh') {
      const zh = ZH_NAMES[kind];
      if (zh && zh[id]) return zh[id];
    }
    const g = NAMES[this.lang === 'ru' ? 'ru' : 'en'];
    const arr = g && g[kind];
    const v = arr ? arr[id] : null;
    return v && v !== 'NaN' && v !== 'Nan' ? v : (this.t('empty'));
  }

  t(k) {
    if (this.lang === 'zh' && UI_ZH[k]) return UI_ZH[k];
    const g = UI[this.lang === 'ru' ? 'ru' : 'en'];
    if (g && g[k]) return g[k];
    return UI_ZH[k] || k;
  }

  /* ---------------- 世界 ---------------- */

  newGame(seed) {
    const rng = makeRng(seed);
    this.seed = seed;
    this.tiles = new Uint8Array(WORLD_W * WORLD_H);
    this.deltas = {};
    const top = new Int16Array(WORLD_W);
    for (let x = 0; x < WORLD_W; x++) {
      const h = 12 + Math.round(Math.sin(x * 0.17) * 2 + (rng() - 0.5) * 3);
      top[x] = Math.max(8, Math.min(18, h));
    }
    for (let x = 0; x < WORLD_W; x++) {
      const g = top[x];
      for (let y = 0; y < WORLD_H; y++) {
        let v = AIR;
        const d = y - g;
        if (d < 0) v = AIR;
        else if (d === 0) v = DIRT_GRASS;
        else if (d <= 3) v = DIRT;
        else if (y > WORLD_H - 3) v = DARKSTONE;
        else v = y > 70 ? DARKSTONE : STONE;

        if (d > 4 && v !== AIR) {
          const r = rng();
          if (y - g > 30 && r < 0.0075) v = EMERALD;
          else if (y - g > 22 && r < 0.0165) v = DIAMOND;
          else if (y - g > 14 && r < 0.032) v = GOLD;
          else if (y - g > 8 && r < 0.058) v = IRON;
          else if (r < 0.10) v = COAL;
        }
        this.tiles[y * WORLD_W + x] = v;
      }
      // 地表植被
      if (x > 3 && x < WORLD_W - 3 && rng() < 0.10) {
        const trunk = 3 + Math.floor(rng() * 2);
        for (let i = 1; i <= trunk; i++) this.setTileRaw(x, top[x] - i, OAK);
        const ly = top[x] - trunk;
        for (let dx = -2; dx <= 2; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            if (dx * dx + dy * dy <= 5 && this.getTileRaw(x + dx, ly + dy) === AIR) {
              this.setTileRaw(x + dx, ly + dy, LEAVES);
            }
          }
        }
      }
    }
    // 洞穴
    for (let c = 0; c < 42; c++) {
      const cx = 4 + Math.floor(rng() * (WORLD_W - 8));
      const cy = 24 + Math.floor(rng() * (WORLD_H - 30));
      const r = 2 + Math.floor(rng() * 3);
      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          if (dx * dx + dy * dy <= r * r + 1) this.setTileRaw(cx + dx, cy + dy, AIR);
        }
      }
    }
    // 玩家
    this.px = 20 * TILE;
    this.py = (top[20] - 4) * TILE;
    this.vx = 0;
    this.vy = 0;
    this.onGround = false;
    this.hp = 100;
    this.maxHp = 100;
    this.coins = 0;
    this.xp = 0;
    this.level = 1;
    this.inv = {};
    this.tools = {};
    this.give('item:1', 1);
    this.dig = { x: -1, y: -1, t: 0 };
    this.initQuests();
    this.camX = this.px - this.L.viewTilesX * TILE / 2;
    this.camY = this.py - this.L.viewTilesY * TILE / 2;
    this.running = true;
  }

  getTileRaw(x, y) {
    if (x < 0 || y < 0 || x >= WORLD_W || y >= WORLD_H) return DARKSTONE;
    return this.tiles[y * WORLD_W + x];
  }
  setTileRaw(x, y, v) {
    if (x < 0 || y < 0 || x >= WORLD_W || y >= WORLD_H) return;
    this.tiles[y * WORLD_W + x] = v;
  }
  getTile(x, y) { return this.getTileRaw(x, y); }
  setTile(x, y, v) {
    this.setTileRaw(x, y, v);
    this.deltas[y * WORLD_W + x] = v;
    if (Object.keys(this.deltas).length > 500) this.trimDeltas();
  }
  trimDeltas() {
    const ks = Object.keys(this.deltas);
    const drop = ks.slice(0, ks.length - 400);
    for (let i = 0; i < drop.length; i++) delete this.deltas[drop[i]];
  }

  /* ---------------- 背包 ---------------- */

  count(k) { return this.inv[k] || 0; }

  give(k, n) {
    this.inv[k] = this.count(k) + (n || 1);
  }

  take(k, n) {
    const c = this.count(k);
    if (c < n) return false;
    if (c === n) delete this.inv[k];
    else this.inv[k] = c - n;
    return true;
  }

  invList() {
    const out = [];
    const ks = Object.keys(this.inv);
    for (let i = 0; i < ks.length; i++) {
      if (this.inv[ks[i]] > 0) out.push({ key: ks[i], n: this.inv[ks[i]] });
    }
    out.sort((a, b) => a.key < b.key ? -1 : 1);
    return out;
  }

  bestPick() {
    let best = 0;
    const ks = Object.keys(this.tools);
    for (let i = 0; i < ks.length; i++) {
      if (ks[i].indexOf('item:') !== 0) continue;
      const lv = PICK_LEVEL[splitKey(ks[i]).id];
      if (lv && lv > best) best = lv;
    }
    return best;
  }

  /* ---------------- 任务 ---------------- */

  initQuests() {
    this.quests = [];
    for (let i = 0; i < QUESTS.length; i++) {
      const r = QUESTS[i];
      const req = parseQuestItems(r);
      if (!req.length) continue;
      this.quests.push({
        idx: i, req: req, reward: parseQuestReward(r),
        client: String(r[9] || ''), timer: parseIntSafe(r[0]), left: parseIntSafe(r[0]) * 60,
        done: false, active: false
      });
    }
    this.activeQuest = null;
    this.questTimer = 0;
  }

  acceptQuest(q) {
    this.activeQuest = q;
    q.active = true;
    q.left = q.timer;
    this.questTimer = 0;
  }

  checkQuests() {
    const q = this.activeQuest;
    if (!q) return;
    let ok = true;
    for (let i = 0; i < q.req.length; i++) {
      if (this.count(q.req[i].key) < q.req[i].n) { ok = false; break; }
    }
    if (ok) {
      for (let i = 0; i < q.req.length; i++) this.take(q.req[i].key, q.req[i].n);
      this.coins += q.reward;
      this.msg = this.t('reward') + ' +' + q.reward;
      this.msgT = 90;
      this.activeQuest = null;
      q.done = true;
      if (this.env.vibrator) this.env.vibrator.vibrate({ mode: 'short' });
    }
  }

  upgradePerk() {
    const need = perkXp(this.level);
    if (need && this.xp >= need) {
      this.xp -= need;
      this.level++;
      this.maxHp = perkHp(this.level);
      if (this.hp > this.maxHp) this.hp = this.maxHp;
      this.msg = this.t('level') + ' ' + this.level;
      this.msgT = 90;
    } else {
      this.msg = this.t('need') + ' ' + need + ' XP';
      this.msgT = 60;
    }
  }

  /* ---------------- 合成 / 商店 ---------------- */

  canCraft(r) {
    for (let i = 0; i < r.in.length; i++) {
      if (this.count(r.in[i][0]) < r.in[i][1]) return false;
    }
    return true;
  }

  doCraft(r) {
    if (!this.canCraft(r)) { this.msg = this.t('need') + ' ' + this.t('empty'); this.msgT = 60; return; }
    if (r.out[0].indexOf('item:') === 0) {
      this.tools[r.out[0]] = (this.tools[r.out[0]] || 0) + r.out[1];
    } else {
      this.give(r.out[0], r.out[1]);
    }
    for (let i = 0; i < r.in.length; i++) this.take(r.in[i][0], r.in[i][1]);
    this.sfx('btn_all');
    this.msg = '+ ' + r.out[1] + ' ' + this.name2(r.out[0]);
    this.msgT = 70;
  }

  name2(k) { const s = splitKey(k); return this.name(s.kind, s.id); }

  tradeList() {
    const out = [];
    for (let i = 0; i < TRADER.length; i++) {
      const r = TRADER[i];
      const kind = String(r[2] || '');
      if (!kind || kind === 'type') continue;      // 末行为表头
      const id = parseIntSafe(r[1]);
      const n = parseIntSafe(r[3]) || 1;
      const lv = parseIntSafe(r[4]);
      const mult = parseIntSafe(r[6]) || 1;
      const action = String(r[0] || 'sell');
      const key = kind + ':' + id;
      const price = (PRICES[key] || 5) * mult;
      out.push({ key: key, n: n, level: lv, price: price, action: action, raw: r });
    }
    return out;
  }

  doTrade(row) {
    if (this.level < row.level) { this.msg = this.t('level') + ' > ' + row.level; this.msgT = 60; return; }
    this.coins += row.price * row.n;
    this.take(row.key, row.n);
    this.sfx('sellitem');
    this.msg = '+' + (row.price * row.n) + ' ' + this.t('coins');
    this.msgT = 70;
  }

  /* ---------------- 更新 ---------------- */

  update(dt) {
    if (!this.tiles) return;
    const c = this.ctx;
    const steps = Math.max(1, Math.min(3, Math.round(dt / 16.7)));
    for (let s = 0; s < steps; s++) this.physics(16.7);
    this.frame_i += 0.12 * steps;
    if (this.msgT > 0) this.msgT--;
    const q = this.activeQuest;
    if (q) {
      q.left -= dt / 1000;
      if (q.left <= 0) {
        q.left = 0;
        this.activeQuest = null;
        this.msg = this.t('timer') + ' 0';
        this.msgT = 90;
      }
    }
    this.clampCamera();
  }

  physics() {
    const p = this;
    // 水平移动
    let dir = 0;
    if (p.keys.left) dir -= 1;
    if (p.keys.right) dir += 1;
    p.vx = dir * MOVE_SPEED;
    p.face = dir < 0 ? -1 : 1;
    p.moveAxis(p.vx, 0);
    // 重力
    p.vy += GRAVITY;
    if (p.vy > 9) p.vy = 9;
    p.moveAxis(0, p.vy);
    // 自动挖正下方
    if (p.keys.digDown) p.autoDig();
  }

  moveAxis(dx, dy) {
    const w = 10, h = 14;
    const nx = this.px + dx;
    const ny = this.py + dy;
    const x0 = Math.floor((nx) / TILE), x1 = Math.floor((nx + w - 1) / TILE);
    const y0 = Math.floor((ny) / TILE), y1 = Math.floor((ny + h - 1) / TILE);
    let blocked = false;
    for (let x = x0; x <= x1; x++) {
      for (let y = y0; y <= y1; y++) {
        if (this.getTile(x, y) !== AIR) blocked = true;
      }
    }
    if (!blocked) { this.px = nx; this.py = ny; if (dy !== 0) this.onGround = false; return; }
    if (dy > 0) { this.onGround = true; this.vy = 0; }
    else if (dy < 0) { this.vy = 0; }
    if (dx !== 0) this.vx = 0;
  }

  jump() {
    if (this.onGround) { this.vy = JUMP_V; this.onGround = false; this.sfx('whoosh'); }
  }

  autoDig() {
    const x = Math.floor((this.px + 5) / TILE);
    const y = Math.floor((this.py + 14) / TILE + 1);
    if (this.dig.x !== x || this.dig.y !== y) { this.dig.x = x; this.dig.y = y; this.dig.t = 0; }
    this.digTick();
  }

  digTick() {
    const x = this.dig.x, y = this.dig.y;
    if (x < 0) return;
    const id = this.getTile(x, y);
    if (id === AIR) { this.dig.x = -1; return; }
    const need = blockHardness(id);
    const tier = this.bestPick();
    if (tier < (BLOCK_TIER[id] || 0)) {
      if (this.dig.t === 0) { this.msg = this.t('need') + ' ' + this.name('item', (BLOCK_TIER[id] || 1)); this.msgT = 50; }
      this.dig.t = 0;
      return;
    }
    this.dig.t += DIG_SPEED[tier];
    if (this.dig.t >= need) {
      this.breakBlock(x, y, id);
      this.dig.t = 0;
      this.dig.x = -1;
    }
  }

  breakBlock(x, y, id) {
    this.setTile(x, y, AIR);
    const dk = DROPS[id] || ('tile:' + id);
    this.give(dk, 1);
    this.xp += 1;
    this.sfx(id === LEAVES || id === OAK ? 'wood1' : 'break');
    if (this.env.vibrator) this.env.vibrator.vibrate({ mode: 'short' });
    this.checkQuests();
  }

  clampCamera() {
    const vw = this.L.viewTilesX * TILE;
    const vh = this.L.viewTilesY * TILE;
    const targetX = this.px + 5 - vw / 2;
    const targetY = this.py + 7 - vh / 2;
    this.camX += (targetX - this.camX) * 0.2;
    this.camY += (targetY - this.camY) * 0.2;
    if (this.camX < 0) this.camX = 0;
    if (this.camY < 0) this.camY = 0;
    if (this.camX > WORLD_W * TILE - vw) this.camX = WORLD_W * TILE - vw;
    if (this.camY > WORLD_H * TILE - vh) this.camY = WORLD_H * TILE - vh;
  }

  depth() { return Math.floor(this.py / TILE); }

  /* ---------------- 音效 ---------------- */

  sfx(name) {
    if (!this.env.audio) return;
    const now = Date.now();
    if (this._sfxT && now - this._sfxT < 60) return;
    this._sfxT = now;
    try {
      this.env.audio.stop && this.env.audio.stop();
      this.env.audio.src = '/assets/audio/' + name + '.mp3';
      this.env.audio.play();
    } catch (e) { /* 设备不支持则忽略 */ }
  }

  /* ---------------- 渲染 ---------------- */

  render() {
    const ctx = this.ctx, L = this.L;
    rect(ctx, 0, 0, L.W, L.H, '#0e0e14');
    if (!this.tiles) return;
    this.renderWorld();
    this.renderPad();
    this.renderHud();
    if (this.mode === 'play' && this.msgT > 0) this.renderToast();
    if (this.mode === 'menu') this.renderSideMenu();
    if (this.mode === 'panel') this.renderPanel();
  }

  renderWorld() {
    const ctx = this.ctx, L = this.L;
    const z = L.zoom;
    const x0 = Math.floor(this.camX / TILE), x1 = Math.ceil((this.camX + L.viewTilesX * TILE) / TILE) + 1;
    const y0 = Math.floor(this.camY / TILE), y1 = Math.ceil((this.camY + L.viewTilesY * TILE) / TILE) + 1;
    const f = frame('itemDrop/tile', 0);
    for (let y = y0; y <= y1; y++) {
      for (let x = x0; x <= x1; x++) {
        const id = this.getTile(x, y);
        if (id === AIR) continue;
        const dx = (x * TILE - this.camX) * z;
        const dy = (y * TILE - this.camY) * z + L.viewTop;
        if (dy + TILE * z < L.viewTop || dy > L.padTop) continue;
        if (f) {
          ctx.save && ctx.save();
          ctx.globalAlpha = y > 30 ? 0.72 : 1;   // 深处压暗，模拟地底光照
          this.assets.draw(ctx, frame('itemDrop/tile', id), dx, dy, TILE * z + 1, TILE * z + 1);
          ctx.globalAlpha = 1;
          ctx.restore && ctx.restore();
        } else {
          rect(ctx, dx, dy, TILE * z + 1, TILE * z + 1, '#8a8f98');
        }
      }
    }
    // 挖掘目标高亮 + 进度
    if (this.dig.x >= 0) {
      const dx = (this.dig.x * TILE - this.camX) * z;
      const dy = (this.dig.y * TILE - this.camY) * z + L.viewTop;
      ctx.strokeStyle = '#ffd257';
      ctx.lineWidth = 1;
      ctx.strokeRect(dx, dy, TILE * z, TILE * z);
      const id = this.getTile(this.dig.x, this.dig.y);
      const need = blockHardness(id);
      bar(ctx, dx, dy - 3, TILE * z, 2, this.dig.t / need, '#ffd257', '#00000066');
    }
    this.renderPlayer();
  }

  renderPlayer() {
    const ctx = this.ctx, L = this.L, z = L.zoom;
    const bx = (this.px - this.camX) * z;
    const by = (this.py - this.camY) * z + L.viewTop;
    const leg = frame('noob_part/first', (this.vx ? Math.floor(this.frame_i) : 1) % Math.max(1, frameCount('noob_part/first')));
    const body = frame('noob_body/first', 0);
    const head = frame('noob_head/Noob', this.vx ? Math.floor(this.frame_i) % 2 : 0);
    ctx.save && ctx.save();
    if (this.face < 0 && ctx.scale) { /* 镜像由 sprite 本身决定，此处不做翻转以免坐标错乱 */ }
    this.assets.draw(ctx, leg, bx + 1 * z, by + 8 * z, 4 * z, 8 * z);
    this.assets.draw(ctx, body, bx + 2 * z, by + 5 * z, 6 * z, 11 * z);
    this.assets.draw(ctx, head, bx + 1 * z, by - 3 * z, 8 * z, 8 * z);
    if (!body) rect(ctx, bx + 2 * z, by + 5 * z, 6 * z, 11 * z, '#e8a06a');
    ctx.restore && ctx.restore();
  }

  renderPad() {
    const ctx = this.ctx, L = this.L;
    const y = L.padTop, h = L.padH;
    rect(ctx, 0, y, L.W, h, '#16161f');
    const bw = L.W / 4;
    const btns = [
      { id: 'left', label: '\u25C0' },
      { id: 'right', label: '\u25B6' },
      { id: 'jump', label: this.t('jump') },
      { id: 'digDown', label: this.t('dig') }
    ];
    for (let i = 0; i < 4; i++) {
      const bx = i * bw;
      const on = this.keys[btns[i].id];
      rect(ctx, bx + 2, y + 2, bw - 4, h - 4, on ? '#3a3a52' : '#23232f');
      text(ctx, btns[i].label, bx + bw / 2, y + h / 2 + 5, on ? '#ffd257' : '#c8c8d8', FONTSIZE(L), 'center');
    }
    this.padRects = [];
    for (let i = 0; i < 4; i++) this.padRects.push({ id: btns[i].id, x: i * bw, y: y, w: bw, h: h });
  }

  renderHud() {
    const ctx = this.ctx, L = this.L;
    const fs = FONTSIZE(L);
    rect(ctx, 0, 0, L.W, L.hudH, '#111119');
    text(ctx, '\u2776 ' + this.coins, 4, fs + 3, '#ffd257', fs);
    text(ctx, '\u25BC ' + this.depth(), 4 + L.W * 0.30, fs + 3, '#9ad2ff', fs);
    text(ctx, 'Lv' + this.level, 4 + L.W * 0.52, fs + 3, '#c8ffc8', fs);
    bar(ctx, 4, L.hudH - 6, L.W * 0.55, 4, this.hp / this.maxHp, '#ff5252', '#3a1a1a');
    const bx = L.W - 34;
    rect(ctx, bx, 3, 30, L.hudH - 6, '#23232f');
    text(ctx, '\u2630', bx + 15, L.hudH / 2 + 4, '#ffffff', fs + 2, 'center');
    this.menuRect = { x: bx, y: 3, w: 30, h: L.hudH - 6 };
    // 任务倒计时
    const q = this.activeQuest;
    if (q) {
      text(ctx, Math.ceil(q.left) + 's', L.W * 0.72, fs + 3, '#ff9a6a', fs);
    }
  }

  renderToast() {
    const ctx = this.ctx, L = this.L;
    const fs = FONTSIZE(L);
    const w = Math.min(L.W - 20, this.msg.length * (fs * 0.62) + 16);
    const x = (L.W - w) / 2;
    const y = L.viewTop + 6;
    rect(ctx, x, y, w, fs + 10, '#000000cc');
    text(ctx, this.msg, L.W / 2, y + fs + 2, '#ffffff', fs, 'center');
  }

  /* ---------------- 面板 ---------------- */

  panelItems() {
    const out = [];
    if (this.panel === 'inv') {
      const l = this.invList();
      if (!l.length) return [{ label: this.t('empty'), info: '', act: null }];
      const tools = Object.keys(this.tools);
      for (let i = 0; i < tools.length; i++) {
        const s = splitKey(tools[i]);
        if (s.kind === 'item') out.push({ label: this.name('item', s.id), info: '\u00D7' + this.tools[tools[i]], key: tools[i], act: null });
      }
      for (let i = 0; i < l.length; i++) {
        const s = splitKey(l[i].key);
        out.push({ label: this.name(s.kind, s.id), info: '\u00D7' + l[i].n, key: l[i].key, act: null });
      }
      return out;
    }
    if (this.panel === 'craft') {
      for (let i = 0; i < CRAFT.length; i++) {
        const r = CRAFT[i];
        const need = [];
        for (let j = 0; j < r.in.length; j++) {
          need.push(r.in[j][1] + this.name2(r.in[j][0]) + '(' + this.count(r.in[j][0]) + ')');
        }
        out.push({
          label: this.name2(r.out[0]) + ' \u00D7' + r.out[1],
          info: need.join(' '),
          ok: this.canCraft(r), act: r
        });
      }
      return out;
    }
    if (this.panel === 'shop') {
      const tl = this.tradeList();
      for (let i = 0; i < tl.length; i++) {
        const r = tl[i];
        out.push({
          label: this.name2(r.key) + ' \u00D7' + r.n,
          info: r.price + ' ' + this.t('coins') + '  Lv' + r.level,
          ok: this.count(r.key) >= r.n && this.level >= r.level, act: r
        });
      }
      return out;
    }
    if (this.panel === 'quests') {
      if (this.activeQuest) {
        const q = this.activeQuest;
        const need = [];
        for (let j = 0; j < q.req.length; j++) need.push(q.req[j].n + this.name2(q.req[j].key) + '(' + this.count(q.req[j].key) + ')');
        out.push({ label: q.client + '  ' + Math.ceil(q.left) + 's', info: need.join(' '), act: null });
        return out;
      }
      for (let i = 0; i < this.quests.length; i++) {
        const q = this.quests[i];
        if (q.done) continue;
        const need = [];
        for (let j = 0; j < q.req.length; j++) need.push(q.req[j].n + this.name2(q.req[j].key));
        out.push({ label: q.client + '  ' + q.timer + 'min', info: need.join(' ') + ' \u2192 ' + q.reward, ok: true, act: q });
      }
      if (!out.length) out.push({ label: this.t('empty'), info: '', act: null });
      return out;
    }
    if (this.panel === 'perks') {
      const need = perkXp(this.level);
      out.push({ label: this.t('level') + ' ' + this.level, info: 'XP ' + this.xp + '/' + (need || '-') + '  HP ' + this.maxHp, ok: need && this.xp >= need, act: 'up' });
      out.push({ label: this.t('upgrade'), info: this.t('level') + ' ' + (this.level + 1) + ' \u2192 HP ' + perkHp(this.level + 1), ok: need && this.xp >= need, act: 'up' });
      return out;
    }
    if (this.panel === 'settings') {
      out.push({ label: this.t('language'), info: this.lang === 'zh' ? '中文' : (this.lang === 'ru' ? 'Русский' : 'English'), act: 'lang' });
      out.push({ label: this.t('save'), info: '', act: 'save' });
      out.push({ label: this.t('reset'), info: '', act: 'reset' });
      out.push({ label: this.t('close'), info: '', act: 'close' });
      return out;
    }
    return out;
  }

  panelTitle() {
    const m = { inv: 'inventory', craft: 'craft', shop: 'shop', quests: 'quests', perks: 'perks', settings: 'close' };
    return this.t(m[this.panel] || 'close');
  }

  renderSideMenu() {
    const ctx = this.ctx, L = this.L, fs = FONTSIZE(L);
    const items = [['inv', 'inventory'], ['craft', 'craft'], ['shop', 'shop'], ['quests', 'quests'], ['perks', 'perks'], ['settings', 'close']];
    const rowH = Math.min(34, (L.H - 30) / items.length);
    const w = L.W * 0.62;
    const x = L.W - w - 6;
    const y = 6;
    rect(ctx, x - 4, y - 4, w + 8, rowH * items.length + 8, '#000000dd');
    this.menuItems = [];
    for (let i = 0; i < items.length; i++) {
      const ry = y + i * rowH;
      rect(ctx, x, ry, w, rowH - 2, '#23232f');
      text(ctx, this.t(items[i][1]), x + 8, ry + rowH / 2 + 4, '#e6e6f0', fs, 'left');
      this.menuItems.push({ panel: items[i][0], x: x, y: ry, w: w, h: rowH - 2 });
    }
  }

  renderPanel() {
    const ctx = this.ctx, L = this.L, fs = FONTSIZE(L);
    rect(ctx, 0, 0, L.W, L.H, '#0b0b12ee');
    rect(ctx, 0, 0, L.W, L.hudH, '#111119');
    text(ctx, this.panelTitle(), 6, L.hudH / 2 + fs * 0.4, '#ffd257', fs + 1);
    text(ctx, '\u2715', L.W - 14, L.hudH / 2 + fs * 0.4, '#ffffff', fs + 1, 'center');
    this.closeRect = { x: L.W - 28, y: 0, w: 28, h: L.hudH };

    const items = this.panelItems();
    const rowH = Math.max(fs + 8, Math.round(L.H * 0.085));
    const maxRows = Math.floor((L.H - L.hudH) / rowH);
    const start = Math.max(0, Math.min(this.panelScroll, Math.max(0, items.length - maxRows)));
    this.rowRects = [];
    for (let i = 0; i < maxRows && start + i < items.length; i++) {
      const it = items[start + i];
      const ry = L.hudH + i * rowH;
      rect(ctx, 4, ry + 1, L.W - 8, rowH - 2, i % 2 ? '#191922' : '#1d1d28');
      text(ctx, it.label, 8, ry + fs + 2, it.ok === false ? '#7a7a88' : '#ffffff', fs);
      if (it.info) text(ctx, it.info, 8, ry + fs * 2 + 4, '#9a9ab0', Math.max(7, fs - 2));
      this.rowRects.push({ it: it, x: 4, y: ry, w: L.W - 8, h: rowH });
    }
    text(ctx, (start + 1) + '-' + Math.min(items.length, start + maxRows) + '/' + items.length,
      L.W / 2, L.H - 4, '#66667a', Math.max(7, fs - 2), 'center');
  }

  /* ---------------- 触摸 ---------------- */

  touchStart(p) {
    if (!p) return;
    if (this.mode === 'panel') {
      if (inRect(p, this.closeRect.x, this.closeRect.y, this.closeRect.w, this.closeRect.h)) { this.mode = 'play'; return; }
      const rows = this.rowRects || [];
      for (let i = 0; i < rows.length; i++) {
        if (inRect(p, rows[i].x, rows[i].y, rows[i].w, rows[i].h)) { this.activate(rows[i].it); return; }
      }
      this.touch.target = 'panelScroll';
      this.touch.startY = p.y;
      this.touch.moved = 0;
      return;
    }
    if (this.mode === 'menu') {
      const mi = this.menuItems || [];
      for (let i = 0; i < mi.length; i++) {
        if (inRect(p, mi[i].x, mi[i].y, mi[i].w, mi[i].h)) { this.openPanel(mi[i].panel); return; }
      }
      this.mode = 'play';
      return;
    }
    if (inRect(p, this.menuRect.x, this.menuRect.y, this.menuRect.w, this.menuRect.h)) { this.mode = 'menu'; return; }
    const pr = this.padRects || [];
    for (let i = 0; i < pr.length; i++) {
      if (inRect(p, pr[i].x, pr[i].y, pr[i].w, pr[i].h)) {
        this.keys[pr[i].id] = true;
        if (pr[i].id === 'jump') this.jump();
        this.touch.target = pr[i].id;
        return;
      }
    }
    // 视口内：指定挖掘目标
    if (p.y >= this.L.viewTop && p.y <= this.L.padTop) {
      const wx = Math.floor((this.camX + p.x / this.L.zoom) / TILE);
      const wy = Math.floor((this.camY + (p.y - this.L.viewTop) / this.L.zoom) / TILE);
      const dx = wx - (this.px + 5) / TILE, dy = wy - (this.py + 7) / TILE;
      if (dx * dx + dy * dy <= REACH_TILES * REACH_TILES) {
        this.dig.x = wx; this.dig.y = wy; this.dig.t = 0;
        this.touch.target = 'dig';
      }
    }
  }

  touchMove(p) {
    if (!p) return;
    if (this.touch.target === 'panelScroll') {
      const dy = p.y - this.touch.startY;
      if (Math.abs(dy) > 12) {
        this.panelScroll -= dy > 0 ? 1 : 0;
        this.panelScroll += dy > 0 ? 0 : 1;
        this.touch.startY = p.y;
      }
    }
  }

  touchEnd() {
    if (this.touch.target && this.touch.target !== 'panelScroll' && this.touch.target !== 'dig') {
      this.keys[this.touch.target] = false;
    }
    this.touch.target = null;
  }

  activate(it) {
    if (!it) return;
    if (this.panel === 'craft' && it.act) { this.doCraft(it.act); return; }
    if (this.panel === 'shop' && it.act) { this.doTrade(it.act); return; }
    if (this.panel === 'quests' && it.act) { this.acceptQuest(it.act); return; }
    if (this.panel === 'perks' && it.act === 'up') { this.upgradePerk(); return; }
    if (this.panel === 'settings' && it.act === 'lang') {
      this.lang = this.lang === 'zh' ? 'en' : (this.lang === 'en' ? 'ru' : 'zh');
      if (this.env.onLangChange) this.env.onLangChange(this.lang);
      return;
    }
    if (this.panel === 'settings' && it.act === 'save') { this.save(); this.msg = this.t('save'); this.msgT = 60; return; }
    if (this.panel === 'settings' && it.act === 'reset') { this.reset(); return; }
    if (this.panel === 'settings' && it.act === 'close') { this.mode = 'play'; return; }
  }

  openPanel(name) {
    if (name === 'settings') { this.panel = 'settings'; this.mode = 'panel'; this.panelScroll = 0; return; }
    this.panel = name; this.mode = 'panel'; this.panelScroll = 0;
  }

  /* ---------------- 存档 ---------------- */

  save() {
    if (!this.env.storage) return;
    const data = {
      seed: this.seed, px: Math.round(this.px), py: Math.round(this.py),
      hp: this.hp, maxHp: this.maxHp, coins: this.coins, xp: this.xp, level: this.level,
      inv: this.inv, tools: this.tools, deltas: this.deltas
    };
    try {
      this.env.storage.set({ key: 'noobminer.save', value: JSON.stringify(data) });
    } catch (e) { }
  }

  applySave(data) {
    this.seed = data.seed || 20251018;
    this.newGame(this.seed);
    this.px = data.px || this.px;
    this.py = data.py || this.py;
    this.hp = data.hp || 100;
    this.maxHp = data.maxHp || 100;
    this.coins = data.coins || 0;
    this.xp = data.xp || 0;
    this.level = data.level || 1;
    this.inv = data.inv || {};
    this.tools = data.tools || {};
    const d = data.deltas || {};
    const ks = Object.keys(d);
    for (let i = 0; i < ks.length; i++) {
      const idx = parseInt(ks[i], 10);
      this.tiles[idx] = d[ks[i]];
    }
    this.deltas = d;
    this.camX = this.px - this.L.viewTilesX * TILE / 2;
    this.camY = this.py - this.L.viewTilesY * TILE / 2;
  }

  load(onNone) {
    if (!this.env.storage) { this.newGame(20251018); return; }
    const self = this;
    this.env.storage.get({
      key: 'noobminer.save',
      success: function (data) {
        let ok = false;
        try {
          const v = typeof data === 'string' ? data : (data && data.value);
          if (data && data.data !== undefined) {
            const d = JSON.parse(typeof data.data === 'string' ? data.data : JSON.stringify(data.data));
            self.applySave(d); ok = true;
          } else if (typeof v === 'string' && v.length > 2) {
            self.applySave(JSON.parse(v)); ok = true;
          }
        } catch (e) { ok = false; }
        if (!ok) { self.newGame(20251018); onNone && onNone(); }
      },
      fail: function () { self.newGame(20251018); onNone && onNone(); }
    });
  }

  reset() {
    if (this.env.storage) { try { this.env.storage.delete({ key: 'noobminer.save' }); } catch (e) { } }
    this.newGame(20251018);
    this.mode = 'play';
    this.msg = this.t('reset');
    this.msgT = 60;
  }
}

/* ---------------- 数据辅助 ---------------- */

function FONTSIZE(L) {
  return Math.max(8, Math.min(15, Math.round(L.W / 24)));
}

function blockHardness(id) {
  const v = BLOCKS.hardness[id];
  const n = typeof v === 'number' ? v : parseInt(v, 10);
  if (!n || n <= 0) return DEFAULT_HARDNESS;
  return Math.min(n, 400);
}

function parseIntSafe(v) {
  const n = parseInt(v, 10);
  return isNaN(n) ? 0 : n;
}

/** 任务需求 '10|18_obj' → {n:10, key:'obj:18'} */
function parseQuestItems(r) {
  const out = [];
  for (let c = 1; c <= 3; c++) {
    const s = String(r[c] || '');
    const m = s.match(/^(\d+)\|(\d+)_(\w+)$/);
    if (m) out.push({ n: parseInt(m[1], 10), key: m[3] + ':' + m[2] });
  }
  return out;
}

/** 任务奖励 '250|2' → 250（第二字段含义未还原，暂按金币处理） */
function parseQuestReward(r) {
  const m = String(r[4] || '').match(/^(\d+)\|/);
  return m ? parseInt(m[1], 10) : 0;
}

/** 天赋表：XP 门槛 / 血量上限（按 perks.json 递增序列解读） */
function perkXp(level) {
  const row = PERKS[level];
  if (!row) return 0;
  const v = parseInt(row[3], 10);
  return isNaN(v) ? 0 : v;
}
function perkHp(level) {
  const row = PERKS[level];
  if (!row) return 100;
  const v = parseInt(row[4], 10);
  return isNaN(v) ? 100 : Math.max(20, v);
}

/* ---------------- 中文名称（自译，非原包数据） ----------------
   原包仅有 en / ru 两套名称；这里补一份简中表便于使用，未收录的条目回退英文。 */
const ZH_NAMES = {
  tile: {
    1: '煤矿石', 2: '钻石矿', 3: '铁矿石', 4: '绿宝石矿', 5: '奇异石', 6: '灰砖', 9: '平滑石',
    13: '蜘蛛网', 14: '工作台', 16: '泥土', 17: '草地', 18: '橡木', 19: '树叶', 20: '木桶',
    23: '草', 24: '黑曜石', 26: '深色木板', 27: '木板', 28: '玫瑰', 29: '蒲公英', 30: '沙子',
    31: '砂岩', 32: '箱子', 33: '熔炉', 34: '玻璃', 35: '雪', 36: '冰', 39: '仙人掌',
    41: '楼梯', 44: '岩浆', 45: '白桦', 46: '云杉', 47: '南瓜', 49: '栅栏', 53: '羊毛',
    57: '铁块', 58: '炸药', 59: '石头', 60: '深色石', 61: '圆石', 62: '金矿石', 63: '火把',
    64: '幸运方块', 68: '门', 69: '床', 82: '红砖', 84: '钻石块', 85: '煤炭块'
  },
  item: {
    1: '木镐', 2: '石镐', 3: '铁镐', 4: '钻石镐', 5: '超级镐', 6: '桶', 7: '水桶', 8: '岩浆桶',
    9: '木斧', 10: '石斧', 11: '铁斧', 12: '钻石斧', 13: '木剑', 14: '石剑', 15: '铁剑',
    16: '钻石剑', 18: '钻石靴', 19: '钻石胸甲', 20: '钻石头盔', 23: '铁头盔', 26: '木头盔'
  },
  obj: {
    1: '西瓜片', 2: '煤', 3: '铁', 4: '金', 5: '钻石', 6: '熟鸡肉', 8: '蛋糕', 12: '绿宝石',
    13: '木棍', 14: '生猪排', 15: '熟猪排', 16: '生鸡肉', 17: '小麦种子', 18: '小麦',
    19: '面包', 20: '黏土', 21: '砖', 22: '羽毛', 23: '燧石', 24: '铁矿石', 25: '金矿石',
    26: '骨头', 27: '苹果', 28: '箭', 29: '线'
  }
};
