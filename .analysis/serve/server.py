#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""本地应用服务器：静态托管反编译 H5 产物 + SQLite 真后端 + 管理后台。

前端为反编译产物（只读），后端为本文件新实现的业务逻辑：
  - 用户侧：登录（手机号+验证码）、商品浏览、下单、余额支付、订单管理
  - 管理侧：/admin/ 后台（登录、数据看板、商品管理+图片上传、订单管理、用户管理）
数据库为 SQLite（data.db，首次启动自动建表并写入种子数据）。
"""
import base64
import hashlib
import json
import os
import re
import secrets
import socket
import sqlite3
import struct
import sys
import time
from datetime import datetime
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote, parse_qs

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
DB_PATH = os.path.join(ROOT, "data.db")
UPLOAD_DIR = os.path.join(ROOT, "uploads")
IMG_DIR = os.path.join(ROOT, "imgs")

ADMIN_USER = "admin"
ADMIN_PASS = "admin123"
DEMO_SMS_CODE = "123456"  # 本地演示固定验证码

# ---------------------------------------------------------------- SVG 演示图
def _save_svg(name, body):
    os.makedirs(IMG_DIR, exist_ok=True)
    os.makedirs(os.path.join(ROOT, "h5", "imgs"), exist_ok=True)
    with open(os.path.join(IMG_DIR, name + ".svg"), "w", encoding="utf-8") as f:
        f.write(body)
    with open(os.path.join(ROOT, "h5", "imgs", name + ".svg"), "w", encoding="utf-8") as f:
        f.write(body)
    return "/imgs/" + name + ".svg"


def _grad(gid, c1, c2):
    return ('<defs><linearGradient id="%s" x1="0" y1="0" x2="1" y2="1">'
            '<stop offset="0" stop-color="%s"/><stop offset="1" stop-color="%s"/>'
            "</linearGradient></defs>") % (gid, c1, c2)


def cover_img(name, title, sub, c1, c2):
    body = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 400 400">'
        + _grad("g", c1, c2)
        + '<rect width="400" height="400" fill="url(#g)"/>'
        '<circle cx="335" cy="65" r="95" fill="#ffffff" opacity=".10"/>'
        '<circle cx="55" cy="345" r="75" fill="#000000" opacity=".12"/>'
        '<polygon points="200,120 260,155 260,225 200,260 140,225 140,155" fill="none" stroke="#ffffff" stroke-width="6" opacity=".55"/>'
        '<text x="200" y="315" font-size="46" fill="#ffffff" text-anchor="middle" font-family="sans-serif" font-weight="700">'
        + title + "</text>"
        '<text x="200" y="352" font-size="22" fill="#ffffff" opacity=".8" text-anchor="middle" font-family="sans-serif">'
        + sub + "</text></svg>"
    )
    return _save_svg(name, body)


def icon_img(name, text, c1, c2):
    body = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">'
        + _grad("g", c1, c2)
        + '<rect x="8" y="8" width="184" height="184" rx="44" fill="url(#g)"/>'
        '<text x="100" y="118" font-size="56" fill="#ffffff" text-anchor="middle" font-family="sans-serif" font-weight="700">'
        + text + "</text></svg>"
    )
    return _save_svg(name, body)


def banner_img(name, text, sub, c1, c2):
    body = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="750" height="280" viewBox="0 0 750 280">'
        + _grad("g", c1, c2)
        + '<rect width="750" height="280" fill="url(#g)"/>'
        '<circle cx="660" cy="40" r="130" fill="#ffffff" opacity=".10"/>'
        '<circle cx="90" cy="260" r="90" fill="#000000" opacity=".12"/>'
        '<text x="60" y="130" font-size="52" fill="#ffffff" font-family="sans-serif" font-weight="700">'
        + text + "</text>"
        '<text x="60" y="185" font-size="26" fill="#ffffff" opacity=".85" font-family="sans-serif">'
        + sub + "</text></svg>"
    )
    return _save_svg(name, body)


def avatar_img(name, c1="#5b8def", c2="#2b3a8f"):
    body = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160">'
        + _grad("g", c1, c2)
        + '<circle cx="80" cy="80" r="80" fill="url(#g)"/>'
        '<circle cx="80" cy="62" r="28" fill="#ffffff" opacity=".9"/>'
        '<path d="M30 140 Q80 92 130 140 L130 160 L30 160 Z" fill="#ffffff" opacity=".9"/></svg>'
    )
    return _save_svg(name, body)


def tab_img(name, kind, color):
    shapes = {
        "home": '<path d="M20 50 L50 25 L80 50" fill="none" stroke="%s" stroke-width="6"/><rect x="30" y="50" width="40" height="28" rx="4" fill="none" stroke="%s" stroke-width="6"/>' % (color, color),
        "cat": '<g fill="none" stroke="%s" stroke-width="6"><rect x="24" y="24" width="22" height="22" rx="4"/><rect x="54" y="24" width="22" height="22" rx="4"/><rect x="24" y="54" width="22" height="22" rx="4"/><rect x="54" y="54" width="22" height="22" rx="4"/></g>' % color,
        "star": '<polygon points="50,22 60,42 82,45 66,60 70,82 50,71 30,82 34,60 18,45 40,42" fill="none" stroke="%s" stroke-width="6"/>' % color,
        "kefu": '<path d="M25 60 L25 45 Q25 22 50 22 Q75 22 75 45 L75 60" fill="none" stroke="%s" stroke-width="6"/><rect x="20" y="55" width="14" height="22" rx="6" fill="%s"/><rect x="66" y="55" width="14" height="22" rx="6" fill="%s"/>' % (color, color, color),
        "user": '<circle cx="50" cy="38" r="15" fill="none" stroke="%s" stroke-width="6"/><path d="M24 82 Q50 58 76 82" fill="none" stroke="%s" stroke-width="6"/>' % (color, color),
    }
    body = (
        '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">'
        + shapes[kind] + "</svg>"
    )
    return _save_svg(name, body)


# ---------------------------------------------------------------- 数据库
SCHEMA = """
CREATE TABLE IF NOT EXISTS users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  mobile TEXT UNIQUE NOT NULL,
  nickname TEXT DEFAULT '',
  avatar TEXT DEFAULT '',
  balance REAL DEFAULT 50.0,
  created_at TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS tokens(
  token TEXT PRIMARY KEY,
  user_id INTEGER NOT NULL,
  created_at TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS admins(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  token TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS cats(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  icon TEXT DEFAULT '',
  sort INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS goods(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  price REAL NOT NULL DEFAULT 0,
  min_num INTEGER DEFAULT 1,
  cover TEXT DEFAULT '',
  intro TEXT DEFAULT '',
  content TEXT DEFAULT '',
  cat1_id INTEGER DEFAULT 0,
  status INTEGER DEFAULT 1,
  sales INTEGER DEFAULT 0,
  created_at TEXT DEFAULT ''
);
CREATE TABLE IF NOT EXISTS banners(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  image TEXT DEFAULT '',
  url TEXT DEFAULT '',
  sort INTEGER DEFAULT 0
);
CREATE TABLE IF NOT EXISTS orders(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  order_no TEXT UNIQUE NOT NULL,
  user_id INTEGER NOT NULL,
  goods_id INTEGER,
  goods_name TEXT DEFAULT '',
  goods_cover TEXT DEFAULT '',
  goods_price REAL DEFAULT 0,
  num INTEGER DEFAULT 1,
  total REAL DEFAULT 0,
  status INTEGER DEFAULT 0,
  remark TEXT DEFAULT '',
  mobile TEXT DEFAULT '',
  submit TEXT DEFAULT '',
  pay_type INTEGER DEFAULT 3,
  created_at TEXT DEFAULT '',
  paid_at TEXT DEFAULT ''
);
"""


def db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA busy_timeout=5000")
    return conn


def now():
    return datetime.now().strftime("%Y-%m-%d %H:%M:%S")


def seed():
    conn = db()
    conn.executescript(SCHEMA)
    conn.commit()
    cur = conn.cursor()
    if cur.execute("SELECT COUNT(*) FROM cats").fetchone()[0]:
        conn.close()
        return
    cats = [
        ("王者荣耀", icon_img("icat1", "王者", "#ff7a45", "#c0392b"), 1),
        ("和平精英", icon_img("icat2", "吃鸡", "#2f9e44", "#1b5e20"), 2),
        ("原神", icon_img("icat3", "原神", "#13c2c2", "#006064"), 3),
        ("英雄联盟", icon_img("icat4", "LOL", "#2f54eb", "#1a237e"), 4),
        ("蛋仔派对", icon_img("icat5", "蛋仔", "#eb2f96", "#880e4f"), 5),
        ("更多分类", icon_img("icat6", "更多", "#8c8c8c", "#595959"), 6),
    ]
    for name, icon, sort in cats:
        cur.execute("INSERT INTO cats(name,icon,sort) VALUES(?,?,?)", (name, icon, sort))
    goods = [
        ("王者荣耀 上分陪玩", "20.00", 328, "#ff7a45", "#c0392b", "王者荣耀", 1),
        ("和平精英 四排带飞", "25.00", 256, "#2f9e44", "#1b5e20", "和平精英", 2),
        ("原神 深渊代打", "30.00", 189, "#13c2c2", "#006064", "原神", 3),
        ("英雄联盟手游 上分", "22.00", 143, "#2f54eb", "#1a237e", "英雄联盟", 4),
        ("蛋仔派对 陪玩", "15.00", 512, "#eb2f96", "#880e4f", "蛋仔派对", 5),
        ("云顶之弈 上分", "18.00", 97, "#722ed1", "#311b92", "更多分类", 6),
    ]
    for i, (name, price, sales, c1, c2, cat, cat_id) in enumerate(goods):
        cover = cover_img("goods%d" % (i + 1), name.split(" ")[0], "陪玩 · 上分", c1, c2)
        cur.execute(
            "INSERT INTO goods(name,price,min_num,cover,intro,content,cat1_id,status,sales,created_at)"
            " VALUES(?,?,?,?,?,?,?,?,?,?)",
            (name, price, 1, cover, "真人陪玩 · 高分带飞",
             "<p>本地演示数据：%s，包含 1 小时陪玩服务。</p>" % name, cat_id, 1, sales, now()))
    banners = [
        (banner_img("banner1", "大神在线 · 随心畅玩", "真人陪玩 高分带飞", "#5b8def", "#2b3a8f"), 1),
        (banner_img("banner2", "新人专享 · 首单立减", "全场通用 自动到账", "#722ed1", "#311b92"), 2),
    ]
    for img, sort in banners:
        cur.execute("INSERT INTO banners(image,url,sort) VALUES(?,?,?)", (img, "", sort))
    cur.execute("INSERT INTO admins(username,password,token) VALUES(?,?,?)",
                (ADMIN_USER, ADMIN_PASS, ""))
    conn.commit()
    conn.close()
    print("[db] seeded: %d cats, %d goods, %d banners" % (len(cats), len(goods), len(banners)))


def g_row(row):
    return dict(row) if row is not None else None


def goods_dict(row, comment_num=0):
    return {
        "id": row["id"], "name": row["name"], "goods_name": row["name"],
        "thumb": row["cover"], "price": "%.2f" % row["price"], "unit": "小时",
        "star": 5, "sales": row["sales"], "label": "", "tags": [],
        "intro": row["intro"],
    }


STATUS_TEXT = {0: "待付款", 1: "待接单", 2: "服务中", 3: "待结单",
               4: "已完成", 5: "售后中", 6: "已退款", 8: "问题单"}

KEFU_NONE = {"kefu_weapp_type": 0, "kefu_link": "", "kefu_h5_type": 0,
             "kefu_corp_id": ""}

# 静态兜底 mock（未被数据库化实现的接口沿用原演示数据）
DEMO_AVATAR = avatar_img("me", "#8c8c8c", "#434343")
NAV_ICONS = [tab_img("tab-home", "home", "#9b9b9b"), tab_img("tab-cat", "cat", "#9b9b9b"),
             tab_img("tab-star", "star", "#9b9b9b"), tab_img("tab-kefu", "kefu", "#9b9b9b"),
             tab_img("tab-user", "user", "#9b9b9b")]
NAV_LIST = [
    {"id": 1, "name": "首页", "title": "首页", "path": "/pages/index/index",
     "icon": NAV_ICONS[0], "cur_icon": NAV_ICONS[0]},
    {"id": 2, "name": "分类", "title": "分类", "path": "/pages/cat/index",
     "icon": NAV_ICONS[1], "cur_icon": NAV_ICONS[1]},
    {"id": 3, "name": "达人", "title": "达人", "path": "/pages/index/daren",
     "icon": NAV_ICONS[2], "cur_icon": NAV_ICONS[2]},
    {"id": 4, "name": "客服", "title": "客服", "path": "/pages/chat/list",
     "icon": NAV_ICONS[3], "cur_icon": NAV_ICONS[3]},
    {"id": 5, "name": "我的", "title": "我的", "path": "/pages/user/index",
     "icon": NAV_ICONS[4], "cur_icon": NAV_ICONS[4]},
]
DANMU = [
    {"avatar": avatar_img("dm1", "#5b8def", "#2b3a8f"), "nickname": "玩家**86", "text": "刚刚下单了 王者荣耀 上分陪玩"},
    {"avatar": avatar_img("dm2", "#eb2f96", "#880e4f"), "nickname": "小***哦", "text": "刚刚下单了 和平精英 四排带飞"},
    {"avatar": avatar_img("dm3", "#2f9e44", "#1b5e20"), "nickname": "大***哥", "text": "刚刚下单了 原神 深渊代打"},
]


# ---------------------------------------------------------------- 用户侧接口
def user_by_token(conn, token):
    if not token:
        return None
    row = conn.execute(
        "SELECT u.* FROM tokens t JOIN users u ON u.id=t.user_id WHERE t.token=?",
        (token,)).fetchone()
    return g_row(row)


def order_counts(conn, uid):
    counts = {"status%d" % i: 0 for i in range(8)}
    for r in conn.execute(
            "SELECT status, COUNT(*) c FROM orders WHERE user_id=? GROUP BY status", (uid,)):
        if r["status"] in counts:
            counts["status%d" % r["status"]] = r["c"]
        else:
            counts["status%d" % r["status"]] = r["c"]
    return counts


def api_getHomeInfo(conn, req, user=None):
    cat1_id = int(req.get("cat1_id") or 0)
    sort = req.get("sort") or "default"
    q = "SELECT * FROM goods WHERE status=1"
    args = []
    if cat1_id > 0:
        q += " AND cat1_id=?"
        args.append(cat1_id)
    if sort == "sales":
        q += " ORDER BY sales DESC"
    else:
        q += " ORDER BY id ASC"
    rows = conn.execute(q, args).fetchall()
    goods_list = [goods_dict(r) for r in rows]
    cats = conn.execute("SELECT * FROM cats ORDER BY sort ASC").fetchall()
    banners = [dict(r) for r in conn.execute(
        "SELECT * FROM banners ORDER BY sort ASC").fetchall()]
    home_cat = [{"id": 0, "name": "推荐"}] + [
        {"id": c["id"], "name": c["name"]} for c in cats[:5]]
    return {
        "goods_list": {"list": goods_list, "no_more": 1},
        "banner": banners, "banner2": [],
        "raffle": {"status": 0},
        "home_cat": home_cat,
        "rec_cat": {"list": [dict(c) for c in cats], "num": len(cats)},
        "vip_status": 0, "home_goods_tpl": 1, "home_cat2_tpl": 1,
        "home_cat2_all_icon": cats[5]["icon"] if len(cats) > 5 else "",
        "home_cat2_all_switch": 1, "logo": "", "home_more": 0,
        "notice_home": "本地演示环境：数据由本机 SQLite 后端提供，可在 /admin/ 后台管理。",
        "bind_mobile_tips": 0,
        "notice": "本地演示环境：数据由本机 SQLite 后端提供，可在 /admin/ 后台管理。",
        "store_close": {"online": 1}, "game_tpl": {"status": 0},
        "home_copy_right": "本地演示 · 反编译源码预览 · 自建后端",
        "kefu": None, "home_icons": [], "notice_status": 0, "auth_status": 1,
    }


def api_getNavList(conn, req):
    return {"nav_list": NAV_LIST, "kefu": None, "qrcode": "",
            "cat_tpl": 1, "show_daren_nav": 1}


def api_getCatList(conn, req):
    rows = conn.execute("SELECT * FROM cats ORDER BY sort ASC").fetchall()
    return {"list": [{"id": r["id"], "name": r["name"], "thumb": r["icon"]} for r in rows]}


def _goods_query(conn, req, keyword_field="keyword"):
    page = int(req.get("page") or 1)
    kw = (req.get(keyword_field) or "").strip()
    q = "SELECT * FROM goods WHERE status=1"
    args = []
    if kw:
        q += " AND (name LIKE ? OR intro LIKE ?)"
        args += ["%" + kw + "%", "%" + kw + "%"]
    cat_id = int(req.get("cat1_id") or req.get("cat_id") or req.get("id") or 0)
    if cat_id > 0:
        q += " AND cat1_id=?"
        args.append(cat_id)
    q += " ORDER BY sales DESC LIMIT 20 OFFSET ?"
    args.append((page - 1) * 20)
    rows = conn.execute(q, args).fetchall()
    return {"list": [goods_dict(r) for r in rows],
            "no_more": 1 if len(rows) < 20 else 0}


def api_getGoodsList(conn, req):
    return _goods_query(conn, req)


def api_getSearchList(conn, req):
    return _goods_query(conn, req, "keyword")


def api_getCatGoodsList(conn, req):
    return _goods_query(conn, req, "keyword")


def api_getGoodsListInCat(conn, req):
    return _goods_query(conn, req, "keyword")


def api_getGoodsInfo(conn, req, user=None):
    gid = int(req.get("id") or 0)
    row = conn.execute("SELECT * FROM goods WHERE id=?", (gid,)).fetchone()
    if not row:
        return {"status": 0, "msg": "商品不存在", "data": {}}
    d = goods_dict(row)
    d.update({
        "title": row["name"], "pics": [row["cover"]], "sale_num2": row["sales"],
        "is_vip": 0, "child_num": 0, "limit1": 0, "alert_status": 0,
        "alert_des": "", "raffle_id": 0,
        "buy_tips": "<p>%s</p>" % (row["content"] or row["intro"]),
        "vip_status": 0, "store_close": {"online": 1},
        "show_login_panel": 0 if user else 1,
        "kefu": KEFU_NONE, "seckill_show": None, "user": {},
        "min_num": row["min_num"], "content": row["content"],
    })
    return {"status": 1, "msg": "ok", "data": d}


def api_getSubmitInfo(conn, req, user):
    gid = int(req.get("id") or 0)
    row = conn.execute("SELECT * FROM goods WHERE id=?", (gid,)).fetchone()
    if not row:
        return {"status": 0, "msg": "商品不存在", "data": {}}
    cat = conn.execute("SELECT * FROM cats WHERE id=?",
                       (row["cat1_id"],)).fetchone()
    data = {
        "goods": goods_dict(row),
        "buy_tips": "<p>%s</p>" % (row["content"] or row["intro"]),
        "num_ids": [1, 2, 3, 4, 5], "text_ids": [],
        "can_buy_num": 10, "seckill_left_num": -1,
        "input_mobile": 1, "show_text_id": 0, "zhiding_to_rand": 0,
        "seller": None,
        "cat1": {"id": cat["id"], "name": cat["name"]} if cat else {},
        "user": {"mobile": (user or {}).get("mobile", "")},
        "area_list": [{"index": 1, "name": "安卓Q区"},
                      {"index": 2, "name": "苹果Q区"}],
        "weapp_tpl": 0, "kefu": KEFU_NONE,
        "child_alert": 0, "promotions": [], "service_list": [],
    }
    return {"status": 1, "msg": "ok", "data": data}


def api_getPayInfo(conn, req, user):
    gid = int(req.get("id") or 0)
    row = conn.execute("SELECT * FROM goods WHERE id=?", (gid,)).fetchone()
    if not row:
        return {"status": 0, "msg": "商品不存在", "data": {}}
    return {"status": 1, "msg": "ok", "data": {
        "show_alipay": 0,
        "payType": [
            {"id": 1, "name": "微信支付", "icon": "weixin-fill",
             "color": "#09bb07", "status": 0},
            {"id": 3, "name": "余额支付", "icon": "rmb-circle-fill",
             "color": "#ff9800", "status": 1},
        ],
        "pay_type": 3, "order_black": "",
        "price": "%.2f" % row["price"], "pay_deadline": "10分钟",
        "money": "%.2f" % ((user or {}).get("balance", 0)),
        "pay_debug": 1,
    }}


def api_pay(conn, req, user):
    if not user:
        return {"status": 40001, "msg": "请先登录", "data": {}}
    gid = int(req.get("id") or 0)
    pay_type = int(req.get("pay_type") or 3)
    submit = req.get("submit") or {}
    if pay_type != 3:
        return {"status": 0, "msg": "本地演示环境仅支持余额支付", "data": {}}
    row = conn.execute("SELECT * FROM goods WHERE id=?", (gid,)).fetchone()
    if not row or not row["status"]:
        return {"status": 0, "msg": "商品不存在或已下架", "data": {}}
    try:
        num = max(int(submit.get("num") or 1), row["min_num"] or 1)
    except Exception:
        num = 1
    total = round(row["price"] * num, 2)
    if user["balance"] < total:
        return {"status": 40020, "msg": "余额不足，请先充值", "data": {}}
    order_no = time.strftime("D%Y%m%d%H%M%S") + ("%04d" % secrets.randbelow(10000))
    conn.execute(
        "INSERT INTO orders(order_no,user_id,goods_id,goods_name,goods_cover,goods_price,"
        "num,total,status,remark,mobile,submit,pay_type,created_at,paid_at)"
        " VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
        (order_no, user["id"], gid, row["name"], row["cover"], row["price"], num,
         total, 1, str(submit.get("remark") or ""), str(submit.get("mobile") or ""),
         json.dumps(submit, ensure_ascii=False), pay_type, now(), now()))
    conn.execute("UPDATE users SET balance=balance-? WHERE id=?",
                 (total, user["id"]))
    conn.execute("UPDATE goods SET sales=sales+? WHERE id=?", (num, gid))
    conn.commit()
    return {"status": 1, "msg": "支付成功", "data": {
        "order_no": order_no, "jump": "/pages_sub1/order/index?current=0"}}


def api_getOrderList(conn, req, user):
    if not user:
        return {"status": 40001, "msg": "请先登录", "data": {}}
    status = int(req.get("status") if req.get("status") not in (None, "") else -1)
    q = "SELECT * FROM orders WHERE user_id=?"
    args = [user["id"]]
    if status >= 0:
        q += " AND status=?"
        args.append(status)
    q += " ORDER BY id DESC"
    rows = conn.execute(q, args).fetchall()
    lst = []
    for r in rows:
        lst.append({
            "id": r["id"], "order_no": r["order_no"], "num": r["num"],
            "price": "%.2f" % r["total"], "time": r["created_at"],
            "remark": r["remark"], "status": r["status"],
            "status_text": STATUS_TEXT.get(r["status"], "未知"),
            "goods_thumb": r["goods_cover"], "goods_name": r["goods_name"],
            "goods_intro": "x%d · 单价 ￥%.2f" % (r["num"], r["goods_price"]),
            "game_area_text": "", "num_id": 0, "raffle_order": 0,
            "goods": {"id": r["goods_id"], "name": r["goods_name"],
                      "thumb": r["goods_cover"], "price": "%.2f" % r["goods_price"]},
        })
    return {"status": 1, "msg": "ok",
            "data": {"list": lst, "no_more": 1, "kefu": KEFU_NONE}}


def api_getOrderInfo(conn, req, user):
    if not user:
        return {"status": 40001, "msg": "请先登录", "data": {}}
    key = req.get("order_no") or req.get("id") or ""
    r = conn.execute(
        "SELECT * FROM orders WHERE user_id=? AND (order_no=? OR id=?)",
        (user["id"], str(key), str(key))).fetchone()
    if not r:
        return {"status": 0, "msg": "订单不存在", "data": {}}
    return {"status": 1, "msg": "ok", "data": {
        "id": r["id"], "order_no": r["order_no"], "num": r["num"],
        "price": "%.2f" % r["total"], "status": r["status"],
        "status_text": STATUS_TEXT.get(r["status"], "未知"),
        "remark": r["remark"], "time": r["created_at"], "paid_at": r["paid_at"],
        "goods_thumb": r["goods_cover"], "goods_name": r["goods_name"],
        "goods": {"id": r["goods_id"], "name": r["goods_name"],
                  "thumb": r["goods_cover"], "price": "%.2f" % r["goods_price"]},
        "user": {"nickname": user["nickname"], "mobile": user["mobile"]},
        "kefu": KEFU_NONE,
    }}


def api_userCancleOrder(conn, req, user):
    if not user:
        return {"status": 40001, "msg": "请先登录", "data": {}}
    oid = req.get("id") or req.get("order_no") or ""
    r = conn.execute("SELECT * FROM orders WHERE user_id=? AND (order_no=? OR id=?)",
                     (user["id"], str(oid), str(oid))).fetchone()
    if not r:
        return {"status": 0, "msg": "订单不存在", "data": {}}
    if r["status"] != 0:
        return {"status": 0, "msg": "当前状态不可取消", "data": {}}
    conn.execute("UPDATE orders SET status=6 WHERE id=?", (r["id"],))
    conn.execute("UPDATE users SET balance=balance+? WHERE id=?",
                 (r["total"], user["id"]))
    conn.commit()
    return {"status": 1, "msg": "已取消并退款", "data": {}}


def api_sendCode(conn, req):
    mobile = str(req.get("mobile") or "")
    if not re.match(r"^1\d{10}$", mobile):
        return {"status": 0, "msg": "请输入正确的手机号", "data": {}}
    return {"status": 1, "msg": "验证码已发送（本地演示固定：%s）" % DEMO_SMS_CODE, "data": {}}


def api_loginUser(conn, req):
    mobile = str(req.get("mobile") or "")
    code = str(req.get("msgCode") or req.get("code") or "")
    if not re.match(r"^1\d{10}$", mobile):
        return {"status": 0, "msg": "请输入正确的手机号", "data": {}}
    if code != DEMO_SMS_CODE:
        return {"status": 0, "msg": "验证码错误（本地演示固定：%s）" % DEMO_SMS_CODE, "data": {}}
    row = conn.execute("SELECT * FROM users WHERE mobile=?", (mobile,)).fetchone()
    if row:
        uid = row["id"]
    else:
        cur = conn.execute(
            "INSERT INTO users(mobile,nickname,avatar,balance,created_at) VALUES(?,?,?,?,?)",
            (mobile, "用户" + mobile[-4:], DEMO_AVATAR, 50.0, now()))
        uid = cur.lastrowid
        conn.commit()
    token = secrets.token_hex(16)
    conn.execute("INSERT INTO tokens(token,user_id,created_at) VALUES(?,?,?)",
                 (token, uid, now()))
    # 前端在 localhost 环境下所有请求固定携带调试 token，绑定到当前登录用户
    conn.execute("INSERT OR REPLACE INTO tokens(token,user_id,created_at) VALUES(?,?,?)",
                 ("Hns8jk2njsk", uid, now()))
    conn.commit()
    return {"status": 1, "msg": "登录成功", "data": {"token": token}}


def api_getLoginInfo(conn, req, user):
    # 前端登录页在已有 token 时会调用此接口并跳转 returnDomainUrl，
    # 本地演示环境中 back_url 为空会导致前端异常，因此统一返回未登录
    return {"status": 0, "msg": "演示环境：请使用手机号验证码登录", "data": {}}


def api_getCaptchaCode(conn, req):
    svg = ('<svg xmlns="http://www.w3.org/2000/svg" width="100" height="40">'
           '<rect width="100" height="40" fill="#f5f5f5"/>'
           '<text x="50" y="27" font-size="20" text-anchor="middle" fill="#333"'
           ' font-family="sans-serif">123456</text></svg>')
    b64 = base64.b64encode(svg.encode()).decode()
    return {"status": 1, "msg": "ok", "data": "data:image/svg+xml;base64," + b64}


def api_getUserCenterInfo(conn, req, user):
    if not user:
        return {"status": 1, "msg": "ok", "data": {
            "id": 0, "nickname": "", "avatar": DEMO_AVATAR, "avatar_frame": "",
            "money": "0.00",
            "seller": 0, "seller_accept": 0, "user_vip": {},
            "show_plat_pay_enter": 0, "share_code": "", "banner": [], "bg_img": "",
            "order": {"status%d" % i: 0 for i in range(8)},
            "raffle": {"status": 0}, "agent_status": 0, "vip_status": 0,
            "show_login_panel": 1, "show_surplus_area": 1, "kefu": KEFU_NONE,
            "user_level": {"up_consume": 0, "percent": 0, "icon_list": [],
                           "icon": "", "consume_money": 0},
        }}
    return {"status": 1, "msg": "ok", "data": {
        "id": user["id"], "nickname": user["nickname"], "avatar": user["avatar"],
        "avatar_frame": "", "mobile": user["mobile"],
        "balance": "%.2f" % user["balance"],
        "surplus": "%.2f" % user["balance"],
        "money": "%.2f" % user["balance"],
        "seller": 0, "seller_accept": 0, "user_vip": {},
        "show_plat_pay_enter": 0, "share_code": "", "banner": [], "bg_img": "",
        "order": order_counts(conn, user["id"]),
        "raffle": {"status": 0}, "agent_status": 0, "vip_status": 0,
        "show_login_panel": 0, "show_surplus_area": 1, "kefu": KEFU_NONE,
        "user_level": {"up_consume": 0, "percent": 0, "icon_list": [],
                       "icon": "", "consume_money": 0},
    }}


USER_API = {
    "getHomeInfo": api_getHomeInfo,
    "getNavList": lambda conn, req, u: api_getNavList(conn, req),
    "getCatList": lambda conn, req, u: api_getCatList(conn, req),
    "getGoodsList": lambda conn, req, u: api_getGoodsList(conn, req),
    "getSearchList": lambda conn, req, u: api_getSearchList(conn, req),
    "getCatGoodsList": lambda conn, req, u: api_getCatGoodsList(conn, req),
    "getGoodsListInCat": lambda conn, req, u: api_getGoodsListInCat(conn, req),
    "getGoodsInfo": api_getGoodsInfo,
    "getSubmitInfo": api_getSubmitInfo,
    "getPayInfo": api_getPayInfo,
    "pay": api_pay,
    "getOrderList": api_getOrderList,
    "getOrderInfo": api_getOrderInfo,
    "userCancleOrder": api_userCancleOrder,
    "sendCode": lambda conn, req, u: api_sendCode(conn, req),
    "loginUser": lambda conn, req, u: api_loginUser(conn, req),
    "getLoginInfo": api_getLoginInfo,
    "getCaptchaCode": lambda conn, req, u: api_getCaptchaCode(conn, req),
    "getUserCenterInfo": api_getUserCenterInfo,
    "checkUserLoginStatus": lambda conn, req, u: {"status": 1, "msg": "ok",
                                                  "data": {"is_vip": 0}},
}

STATIC_API = {
    "/wechat/Goods/getGoodsCommentList": {"list": [], "no_more": 1},
    "/wechat/Wechat/getShareSignPackage": {"appId": "", "timestamp": 0, "nonceStr": "", "signature": ""},
    "/wechat/Wechat/getSignPackage": {"appId": "", "timestamp": 0, "nonceStr": "", "signature": ""},
    "/wechat/Wechat/getSpecConfig": {},
    "/wechat/Wechat/getAudioConfig": {},
    "/wechat/Wechat/getConfigInfo": {"appid": "demo", "scope": "snsapi_userinfo"},
    "/wechat/Wechat/getUserSubscribeInfo": {"subscribe": 1, "new_num": 0},
    "/wechat/User/getUserBindMobileStatus": {"bind_mobile": 1},
    "/wechat/Home/getOrderDanmu": {"switch": 1, "x": 0, "y": 0, "list": DANMU},
    "/wechat/Chat/getChatConfig": {},  # ws_url 动态填充
    "/wechat/ChatClient/bindUser": {},
    "/wechat/ChatClient/bindKefu": {},
    "/wechat/Cat/getCatList2": {"list": []},
    "/wechat/Cat/getCatListByLevel1": {"list": []},
    "/wechat/Daren/getDarenGroupList": {"list": []},
    "/wechat/Daren/getTagList": {"list": []},
    "/wechat/Seller/getWorkerList": {"list": [], "no_more": 1},
    "/index/Index/getTipsInfo": {"tips": "本地演示环境"},
    "/wechat/Article/closeNotice": {},
    "/wechat/Files/uploadBase64": {"url": ""},
}


# ---------------------------------------------------------------- 管理后台接口
def admin_check(handler):
    import http.cookies
    raw = handler.headers.get("Cookie") or ""
    try:
        c = http.cookies.SimpleCookie(raw)
        tok = c.get("admin_token").value if "admin_token" in c else ""
    except Exception:
        tok = ""
    if not tok:
        return None
    conn = db()
    row = conn.execute("SELECT * FROM admins WHERE token=?", (tok,)).fetchone()
    conn.close()
    return g_row(row)


def admin_api(handler, path, body):
    conn = None
    try:
        req = body if isinstance(body, dict) else {}
        if path == "/admin/api/login":
            conn = db()
            u = req.get("username") or ""
            p = req.get("password") or ""
            row = conn.execute("SELECT * FROM admins WHERE username=? AND password=?",
                               (u, p)).fetchone()
            if not row:
                return {"status": 0, "msg": "用户名或密码错误"}
            tok = secrets.token_hex(16)
            conn.execute("UPDATE admins SET token=? WHERE id=?", (tok, row["id"]))
            conn.commit()
            handler.send_response(200)
            handler.send_header("Content-Type", "application/json; charset=utf-8")
            handler.send_header("Set-Cookie",
                                "admin_token=%s; Path=/; HttpOnly; SameSite=Lax" % tok)
            payload = json.dumps({"status": 1, "msg": "ok"}).encode()
            handler.send_header("Content-Length", str(len(payload)))
            handler.end_headers()
            handler.wfile.write(payload)
            return None
        me = admin_check(handler)
        if not me:
            return {"status": 401, "msg": "请先登录后台"}
        conn = db()
        cur = conn.cursor()
        if path == "/admin/api/stats":
            users = cur.execute("SELECT COUNT(*) FROM users").fetchone()[0]
            goods = cur.execute("SELECT COUNT(*) FROM goods").fetchone()[0]
            orders = cur.execute("SELECT COUNT(*) FROM orders").fetchone()[0]
            revenue = cur.execute(
                "SELECT IFNULL(SUM(total),0) FROM orders WHERE status>=1").fetchone()[0]
            pending = cur.execute(
                "SELECT COUNT(*) FROM orders WHERE status=1").fetchone()[0]
            recent = [dict(r) for r in cur.execute(
                "SELECT o.*, u.mobile FROM orders o LEFT JOIN users u ON u.id=o.user_id"
                " ORDER BY o.id DESC LIMIT 8").fetchall()]
            return {"status": 1, "msg": "ok", "data": {
                "users": users, "goods": goods, "orders": orders,
                "revenue": "%.2f" % revenue, "pending": pending, "recent": recent,
            }}
        if path == "/admin/api/goods":
            if req.get("action") == "del":
                cur.execute("DELETE FROM goods WHERE id=?", (int(req.get("id") or 0),))
                conn.commit()
                return {"status": 1, "msg": "已删除"}
            if req.get("action") == "save":
                gid = int(req.get("id") or 0)
                vals = (
                    req.get("name") or "未命名商品",
                    float(req.get("price") or 0),
                    int(req.get("min_num") or 1),
                    req.get("cover") or "",
                    req.get("intro") or "",
                    req.get("content") or "",
                    int(req.get("cat1_id") or 1),
                    1 if str(req.get("status", "1")) == "1" else 0,
                    int(req.get("sales") or 0),
                )
                if gid:
                    cur.execute(
                        "UPDATE goods SET name=?,price=?,min_num=?,cover=?,intro=?,"
                        "content=?,cat1_id=?,status=?,sales=? WHERE id=?",
                        vals + (gid,))
                else:
                    cur.execute(
                        "INSERT INTO goods(name,price,min_num,cover,intro,content,"
                        "cat1_id,status,sales,created_at) VALUES(?,?,?,?,?,?,?,?,?,?)",
                        vals + (now(),))
                conn.commit()
                return {"status": 1, "msg": "已保存"}
            rows = cur.execute(
                "SELECT g.*, c.name cat_name FROM goods g"
                " LEFT JOIN cats c ON c.id=g.cat1_id ORDER BY g.id DESC").fetchall()
            cats = [dict(r) for r in cur.execute(
                "SELECT * FROM cats ORDER BY sort").fetchall()]
            return {"status": 1, "msg": "ok",
                    "data": {"list": [dict(r) for r in rows], "cats": cats}}
        if path == "/admin/api/orders":
            if req.get("action") == "status":
                cur.execute("UPDATE orders SET status=? WHERE id=?",
                            (int(req.get("status") or 0), int(req.get("id") or 0)))
                conn.commit()
                return {"status": 1, "msg": "已更新"}
            rows = cur.execute(
                "SELECT o.*, u.mobile, u.nickname FROM orders o"
                " LEFT JOIN users u ON u.id=o.user_id ORDER BY o.id DESC").fetchall()
            return {"status": 1, "msg": "ok",
                    "data": {"list": [dict(r) for r in rows],
                             "status_text": STATUS_TEXT}}
        if path == "/admin/api/users":
            rows = cur.execute(
                "SELECT u.*, COUNT(o.id) order_count, IFNULL(SUM(o.total),0) sum_total"
                " FROM users u LEFT JOIN orders o ON o.user_id=u.id"
                " GROUP BY u.id ORDER BY u.id DESC").fetchall()
            return {"status": 1, "msg": "ok",
                    "data": {"list": [dict(r) for r in rows]}}
        if path == "/admin/api/recharge":
            uid = int(req.get("user_id") or 0)
            amount = float(req.get("amount") or 0)
            cur.execute("UPDATE users SET balance=balance+? WHERE id=?", (amount, uid))
            conn.commit()
            return {"status": 1, "msg": "已充值 %.2f" % amount}
        if path == "/admin/api/upload":
            dataurl = str(req.get("data") or "")
            m = re.match(r"^data:image/(\w+);base64,(.*)$", dataurl, re.S)
            if not m:
                return {"status": 0, "msg": "仅支持图片文件"}
            ext = "jpg" if m.group(1) in ("jpeg",) else m.group(1)
            os.makedirs(UPLOAD_DIR, exist_ok=True)
            fname = "up_%d_%s.%s" % (int(time.time()), secrets.token_hex(4), ext)
            with open(os.path.join(UPLOAD_DIR, fname), "wb") as f:
                f.write(base64.b64decode(m.group(2)))
            return {"status": 1, "msg": "ok", "data": {"url": "/uploads/" + fname}}
        if path == "/admin/api/logout":
            cur.execute("UPDATE admins SET token='' WHERE id=?", (me["id"],))
            conn.commit()
            return {"status": 1, "msg": "ok"}
        return {"status": 0, "msg": "未知管理接口"}
    finally:
        if conn:
            conn.close()


# ---------------------------------------------------------------- HTTP 基础
WS_GUID = "258EAFA5-E914-47DA-95CA-C5AB0DC85B11"


def ws_encode(obj):
    data = json.dumps(obj, ensure_ascii=False).encode("utf-8")
    n = len(data)
    if n < 126:
        head = struct.pack("!BB", 0x81, n)
    elif n < 65536:
        head = struct.pack("!BBH", 0x81, 126, n)
    else:
        head = struct.pack("!BBQ", 0x81, 127, n)
    return head + data


class Handler(SimpleHTTPRequestHandler):
    def log_message(self, fmt, *args):
        sys.stderr.write("%s - %s\n" % (self.address_string(), fmt % args))

    def end_headers(self):
        # 本地演示环境禁用缓存，保证前端改动即时生效
        self.send_header("Cache-Control", "no-cache, no-store, must-revalidate")
        SimpleHTTPRequestHandler.end_headers(self)

    def _json(self, obj, cookie=None):
        payload = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        if cookie:
            self.send_header("Set-Cookie", cookie)
        self.end_headers()
        self.wfile.write(payload)

    # ---- WebSocket 网关 ----
    def _handle_ws(self):
        key = self.headers.get("Sec-WebSocket-Key", "")
        accept = base64.b64encode(hashlib.sha1((key + WS_GUID).encode()).digest()).decode()
        self.wfile.write((
            "HTTP/1.1 101 Switching Protocols\r\n"
            "Upgrade: websocket\r\nConnection: Upgrade\r\n"
            "Sec-WebSocket-Accept: %s\r\n\r\n" % accept
        ).encode())
        self.wfile.flush()
        self.wfile.write(ws_encode({"label": "init", "client_id": "local-%d" % id(self)}))
        self.wfile.flush()
        buf = b""
        while True:
            chunk = self.connection.recv(4096)
            if not chunk:
                return
            buf += chunk
            while True:
                if len(buf) < 2:
                    break
                b1, b2 = buf[0], buf[1]
                opcode = b1 & 0x0F
                ln = b2 & 0x7F
                off = 2
                if ln == 126:
                    if len(buf) < 4:
                        break
                    ln = struct.unpack("!H", buf[2:4])[0]
                    off = 4
                elif ln == 127:
                    if len(buf) < 10:
                        break
                    ln = struct.unpack("!Q", buf[2:10])[0]
                    off = 10
                if b2 & 0x80:
                    if len(buf) < off + 4 + ln:
                        break
                    mask = buf[off:off + 4]
                    payload = bytes(c ^ mask[i % 4] for i, c in enumerate(buf[off + 4:off + 4 + ln]))
                    off += 4 + ln
                else:
                    if len(buf) < off + ln:
                        break
                    payload = buf[off:off + ln]
                    off += ln
                buf = buf[off:]
                if opcode == 0x8:
                    return
                if opcode == 0x9:
                    self.wfile.write(struct.pack("!BB", 0x8A, 0) + payload if payload else struct.pack("!BB", 0x8A, 0))
                    self.wfile.flush()
                    continue
                if opcode == 0x1:
                    try:
                        msg = json.loads(payload.decode("utf-8"))
                    except Exception:
                        continue
                    reply = {"label": "pong"} if msg.get("label") == "ping" else {"label": "echo", "msg": msg}
                    self.wfile.write(ws_encode(reply))
                    self.wfile.flush()

    # ---- 用户侧 API ----
    def _api(self):
        path = unquote(self.path.split("?")[0])
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else b""
        try:
            req = json.loads(body.decode("utf-8")) if body else {}
        except Exception:
            req = parse_qs(body.decode("utf-8"))
            req = {k: v[0] for k, v in req.items()}
        token = str(req.get("token") or "")
        resp = self._dispatch(path, req, token)
        if resp is None:
            return
        self._json(resp)
        sys.stderr.write("[api] %s <- %s\n" % (path, body[:160].decode("utf-8", "ignore")))

    def _dispatch(self, path, req, token):
        conn = db()
        try:
            if path in ("/wechat/Chat/getChatConfig",):
                host = self.headers.get("Host", "127.0.0.1:%d" % PORT)
                return {"status": 1, "msg": "ok",
                        "data": {"ws_url": "ws://%s/ws" % host}}
            if path.startswith("/wechat/") and path.count("/") == 3:
                _, _, ctrl, action = path.split("/")
                if ctrl == "user" and action == "login":
                    return {"status": 0, "msg": "本地演示环境请使用手机号验证码登录", "data": {}}
                fn = USER_API.get(action) if ctrl in ("User", "Home", "Goods", "Pay",
                                                      "Order", "Wechat", "Cat", "MsgCode") else None
                if fn:
                    try:
                        user = user_by_token(conn, token)
                        out = fn(conn, req, user)
                        if isinstance(out, dict) and "status" not in out:
                            out = {"status": 1, "msg": "ok", "data": out}
                        return out
                    except Exception as exc:
                        sys.stderr.write("[api-error] %s: %r\n" % (path, exc))
                        return {"status": 0, "msg": "本地接口异常：%s" % exc, "data": {}}
            if path in STATIC_API:
                return {"status": 1, "msg": "ok", "data": STATIC_API[path]}
            if path.startswith("/wechat/") or path.startswith("/index/"):
                return {"status": 1, "msg": "ok", "data": {}}
            return None
        finally:
            conn.close()

    def do_GET(self):
        if self.path.split("?")[0] == "/ws" or "websocket" in (self.headers.get("Upgrade") or "").lower():
            return self._handle_ws()
        if self.path.startswith("/wechat/") or self.path.startswith("/index/"):
            return self._api()
        p = self.path.split("?")[0]
        if p == "/":
            self.send_response(302)
            self.send_header("Location", "/h5/")
            self.end_headers()
            return
        if p.startswith("/admin/api/"):
            length = int(self.headers.get("Content-Length") or 0)
            body = self.rfile.read(length) if length else b""
            try:
                req = json.loads(body.decode()) if body else {}
            except Exception:
                req = {}
            try:
                out = admin_api(self, p, req)
            except Exception as exc:
                out = {"status": 0, "msg": "后台接口异常：%s" % exc}
            if out is not None:
                return self._json(out)
            return
        if p == "/favicon.ico":
            self.path = "/files/imgs/youqu.jpg"
        if p.startswith("/uploads/"):
            self.path = p
        SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        p = self.path.split("?")[0]
        if p.startswith("/admin/api/"):
            length = int(self.headers.get("Content-Length") or 0)
            body = self.rfile.read(length) if length else b""
            try:
                req = json.loads(body.decode()) if body else {}
            except Exception:
                req = {}
            try:
                out = admin_api(self, p, req)
            except Exception as exc:
                out = {"status": 0, "msg": "后台接口异常：%s" % exc}
            if out is not None:
                return self._json(out)
            return
        if self.path.startswith("/wechat/") or self.path.startswith("/index/"):
            return self._api()
        self.send_response(404)
        self.end_headers()


def main():
    seed()
    handler = partial(Handler, directory=ROOT)

    class DualStackServer(ThreadingHTTPServer):
        address_family = socket.AF_INET6

        def server_bind(self):
            # 双栈监听：同一端口同时接受 IPv4 与 IPv6（localhost 可能解析为 ::1）
            try:
                self.socket.setsockopt(socket.IPPROTO_IPV6, socket.IPV6_V6ONLY, 0)
            except OSError:
                pass
            super().server_bind()

    server = DualStackServer(("::", PORT), handler)
    print("serving %s at http://127.0.0.1:%d/h5/  (api + admin/ + ws)" % (ROOT, PORT))
    server.serve_forever()


if __name__ == "__main__":
    main()
