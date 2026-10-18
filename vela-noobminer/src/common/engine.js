// src/common/engine.js
// Xiaomi Vela 快应用 2D 引擎：图集资源、屏幕布局、触摸输入、主循环。
// 说明：canvas 绘制缓冲为物理像素（见 canvas.destWidth 默认 = width*屏幕像素密度），
// 因此这里统一把绘图坐标换算到「逻辑像素」，布局与触摸坐标同属一套坐标系。

import { SHEETS, ATLAS } from './data/atlas.js';

export const TILE = 16;

/** 图集图片的绝对资源路径（应用资源根为 src/） */
export function sheetUri(i) {
  return '/assets/images/' + String(SHEETS[i]).replace(/^images\//, '');
}

/** 取某动画的第 idx 帧 [sheet,x,y,w,h]，越界则取末帧 */
export function frame(key, idx) {
  const a = ATLAS[key];
  if (!a || !a.length) return null;
  const i = Math.max(0, Math.min(idx | 0, a.length - 1));
  return a[i];
}

export function frameCount(key) {
  const a = ATLAS[key];
  return a ? a.length : 0;
}

/** 图集资源管理器：按需加载图片，记录加载进度 */
export class Assets {
  constructor() {
    this.images = {};
    this.total = 0;
    this.loaded = 0;
    this.failed = [];
  }

  loadAll(onProgress, onDone) {
    this.total = SHEETS.length;
    for (let i = 0; i < SHEETS.length; i++) {
      const img = new Image();
      img.onload = () => { this.loaded++; onProgress && onProgress(this.loaded, this.total); };
      img.onerror = () => { this.failed.push(SHEETS[i]); this.loaded++; onProgress && onProgress(this.loaded, this.total); };
      this.images[i] = img;
      img.src = sheetUri(i);
    }
    // 供调用方轮询 or 直接等 onProgress 结束
    onDone && onDone();
  }

  ready() { return this.loaded >= this.total; }

  /** 绘制一帧；dw/dh 省略时按原始像素尺寸绘制 */
  draw(ctx, fr, dx, dy, dw, dh) {
    if (!fr) return;
    const img = this.images[fr[0]];
    if (!img || !img.width || !img.height) return;
    if (dw === undefined) ctx.drawImage(img, fr[1], fr[2], fr[3], fr[4], dx, dy, fr[3], fr[4]);
    else ctx.drawImage(img, fr[1], fr[2], fr[3], fr[4], dx, dy, dw, dh);
  }
}

/** 屏幕布局：顶部状态条 + 中部游戏视口 + 底部操作区 */
export function computeLayout(W, H, viewTilesW) {
  const hudH = Math.max(20, Math.round(H * 0.11));
  const padH = Math.max(56, Math.round(H * 0.30));
  const viewH = Math.max(80, H - hudH - padH);
  const viewW = W;
  const zoom = viewW / (viewTilesW * TILE);
  return {
    W, H, hudH, padH, viewW, viewH, zoom,
    viewTop: hudH, padTop: hudH + viewH,
    viewTilesX: viewW / (TILE * zoom),
    viewTilesY: viewH / (TILE * zoom)
  };
}

/** 触摸事件 → 逻辑坐标（相对 canvas 画布左上角） */
export function touchPoint(e, L) {
  let t = null;
  if (e && e.touches && e.touches.length) t = e.touches[0];
  else if (e && e.changedTouches && e.changedTouches.length) t = e.changedTouches[0];
  else if (e && e.detail && e.detail.touches && e.detail.touches.length) t = e.detail.touches[0];
  else if (e && e.clientX !== undefined) t = e;
  if (!t) return null;
  const x = t.clientX !== undefined ? t.clientX : (t.x || 0);
  const y = t.clientY !== undefined ? t.clientY : (t.y || 0);
  return { x, y };
}

/** 定时器主循环（Vela 不保证提供 requestAnimationFrame） */
export function createLoop(step, intervalMs) {
  const ms = intervalMs || 33;
  let h = null;
  let last = 0;
  return {
    start() {
      if (h) return;
      last = Date.now();
      h = setInterval(() => {
        const now = Date.now();
        let dt = now - last;
        last = now;
        if (dt > 120) dt = 120;
        step(dt);
      }, ms);
    },
    stop() { if (h) { clearInterval(h); h = null; } }
  };
}

/* ---------------- 简易绘图工具 ---------------- */

export function rect(ctx, x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, w, h);
}

export function stroke(ctx, x, y, w, h, color, lw) {
  ctx.strokeStyle = color;
  ctx.lineWidth = lw || 1;
  ctx.strokeRect(x, y, w, h);
}

export function text(ctx, str, x, y, color, size, align) {
  ctx.fillStyle = color;
  ctx.font = (size || 10) + 'px sans-serif';
  ctx.textAlign = align || 'left';
  ctx.fillText(String(str), x, y);
  ctx.textAlign = 'left';
}

export function bar(ctx, x, y, w, h, ratio, fg, bg) {
  rect(ctx, x, y, w, h, bg || '#00000055');
  rect(ctx, x, y, Math.max(0, Math.min(1, ratio)) * w, h, fg);
}

export function inRect(p, x, y, w, h) {
  return p && p.x >= x && p.x <= x + w && p.y >= y && p.y <= y + h;
}
