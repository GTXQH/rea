#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""本地演示服务器：静态托管反编译 H5 产物 + 模拟后端接口 + 模拟 WebSocket 网关。

仅用于本地预览反编译源码效果，所有接口数据均为本地编造的演示数据。
"""
import base64
import hashlib
import json
import os
import struct
import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import unquote

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080

IMG_DIR = os.path.join(ROOT, "imgs")


def _save_svg(name, body):
    """生成 SVG 演示图并写入 imgs/ 目录，返回同源 URL。

    原方案使用在线图片生成接口，实测该接口需鉴权（返回 code:1001），
    导致页面上所有图片加载失败，因此改为本地生成矢量图。
    """
    os.makedirs(IMG_DIR, exist_ok=True)
    os.makedirs(os.path.join(ROOT, "h5", "imgs"), exist_ok=True)
    path = os.path.join(IMG_DIR, name + ".svg")
    if not os.path.exists(path):
        with open(path, "w", encoding="utf-8") as f:
            f.write(body)
    # uni-app tabbar 组件会给图片路径加 /h5 前缀，因此同时写入 h5/imgs/
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


def avatar_img(name, letter, c1, c2):
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


GOODS = [
    {"id": i + 1, "name": n, "goods_name": n, "thumb": cover_img("goods%d" % (i + 1), t, "陪玩 · 上分", c1, c2),
     "price": pr, "unit": "小时", "star": 5, "sales": s, "label": "", "tags": []}
    for i, (n, t, pr, s, c1, c2) in enumerate([
        ("王者荣耀 上分陪玩", "王者荣耀", "20.00", 328, "#ff7a45", "#c0392b"),
        ("和平精英 四排带飞", "和平精英", "25.00", 256, "#2f9e44", "#1b5e20"),
        ("原神 深渊代打", "原神", "30.00", 189, "#13c2c2", "#006064"),
        ("英雄联盟手游 上分", "英雄联盟", "22.00", 143, "#2f54eb", "#1a237e"),
        ("蛋仔派对 陪玩", "蛋仔派对", "15.00", 512, "#eb2f96", "#880e4f"),
        ("云顶之弈 上分", "云顶之弈", "18.00", 97, "#722ed1", "#311b92"),
    ])
]

ICATS = [
    {"id": 1, "name": "王者荣耀", "thumb": icon_img("icat1", "王者", "#ff7a45", "#c0392b")},
    {"id": 2, "name": "和平精英", "thumb": icon_img("icat2", "吃鸡", "#2f9e44", "#1b5e20")},
    {"id": 3, "name": "原神", "thumb": icon_img("icat3", "原神", "#13c2c2", "#006064")},
    {"id": 4, "name": "英雄联盟", "thumb": icon_img("icat4", "LOL", "#2f54eb", "#1a237e")},
    {"id": 5, "name": "蛋仔派对", "thumb": icon_img("icat5", "蛋仔", "#eb2f96", "#880e4f")},
    {"id": 6, "name": "更多分类", "thumb": icon_img("icat6", "更多", "#8c8c8c", "#595959")},
]

# 真实 tabBar 路由来自编译产物 pages.json：首页/分类/达人/客服/我的
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

BANNERS = [
    {"id": 1, "image": banner_img("banner1", "大神在线 · 随心畅玩", "真人陪玩 高分带飞", "#5b8def", "#2b3a8f"),
     "url": ""},
    {"id": 2, "image": banner_img("banner2", "新人专享 · 首单立减", "全场通用 自动到账", "#722ed1", "#311b92"),
     "url": ""},
]

DANMU = [
    {"avatar": avatar_img("dm1", "", "#5b8def", "#2b3a8f"), "nickname": "玩家**86", "text": "刚刚下单了 王者荣耀 上分陪玩"},
    {"avatar": avatar_img("dm2", "", "#eb2f96", "#880e4f"), "nickname": "小***哦", "text": "刚刚下单了 和平精英 四排带飞"},
    {"avatar": avatar_img("dm3", "", "#2f9e44", "#1b5e20"), "nickname": "大***哥", "text": "刚刚下单了 原神 深渊代打"},
]

HOME_INFO = {
    "goods_list": {"list": GOODS, "no_more": 1},
    "banner": BANNERS,
    "banner2": [],
    "raffle": {"status": 0},
    "home_cat": [{"id": 0, "name": "推荐"}, {"id": 1, "name": "王者荣耀"},
                 {"id": 2, "name": "和平精英"}, {"id": 3, "name": "原神"}],
    "rec_cat": {"list": ICATS, "num": len(ICATS)},
    "vip_status": 0,
    "home_goods_tpl": 1,
    "home_cat2_tpl": 1,
    "home_cat2_all_icon": ICATS[5]["thumb"],
    "home_cat2_all_switch": 1,
    "logo": "",
    "home_more": 0,
    "notice_home": "本地演示环境：反编译源码静态部署，接口为本地模拟数据。",
    "bind_mobile_tips": 0,
    "notice": "本地演示环境：反编译源码静态部署，接口为本地模拟数据。",
    "store_close": 0,
    "game_tpl": {"status": 0},
    "home_copy_right": "本地演示 · 反编译源码预览",
    "kefu": None,
    "home_icons": [],
    "notice_status": 0,
    "auth_status": 1,
}

GOODS_INFO = dict(
    GOODS[0],
    title=GOODS[0]["name"], pics=[GOODS[0]["thumb"]], sale_num2=328, is_vip=0,
    child_num=0, limit1=0, intro="", alert_status=0, alert_des="", raffle_id=0,
    buy_tips="<p>本地演示数据：包含 1 小时陪玩服务。</p>",
    vip_status=0, store_close=0, show_login_panel=1,
    kefu={"kefu_weapp_type": 0, "kefu_link": "", "kefu_h5_type": 0},
    seckill_show=None, user={},
)

DEMO_AVATAR = avatar_img("me", "", "#8c8c8c", "#434343")
USER_INFO = {
    "id": 0, "nickname": "", "avatar": DEMO_AVATAR, "avatar_frame": "",
    "seller": 0, "seller_accept": 0, "user_vip": {}, "show_plat_pay_enter": 0,
    "share_code": "",
    "banner": [], "bg_img": "",
    "order": {("status%d" % i): 0 for i in range(8)},
    "raffle": {"status": 0},
    "agent_status": 0, "vip_status": 0,
    "avatar": DEMO_AVATAR, "show_login_panel": 1, "show_surplus_area": 1,
    "kefu": {"kefu_weapp_type": 0, "kefu_link": "", "kefu_h5_type": 0},
    "user_level": {"up_consume": 0, "percent": 0, "icon_list": [], "icon": "", "consume_money": 0},
}

ROUTES = {
    "/wechat/Home/getHomeInfo": HOME_INFO,
    "/wechat/Goods/getGoodsList": {"list": GOODS, "no_more": 1},
    "/wechat/Goods/getSearchList": {"list": GOODS, "no_more": 1},
    "/wechat/Goods/getCatGoodsList": {"list": GOODS, "no_more": 1},
    "/wechat/Goods/getGoodsInfo": GOODS_INFO,
    "/wechat/Goods/getGoodsCommentList": {"list": [], "no_more": 1},
    "/wechat/Wechat/getNavList": {"nav_list": NAV_LIST, "kefu": None, "qrcode": "",
                                  "cat_tpl": 1, "show_daren_nav": 1},
    "/wechat/Wechat/getShareSignPackage": {"appId": "", "timestamp": 0, "nonceStr": "", "signature": ""},
    "/wechat/Wechat/getSignPackage": {"appId": "", "timestamp": 0, "nonceStr": "", "signature": ""},
    "/wechat/Wechat/getSpecConfig": {},
    "/wechat/Wechat/getAudioConfig": {},
    "/wechat/Wechat/getUserSubscribeInfo": {"subscribe": 1, "new_num": 0},
    "/wechat/User/getUserBindMobileStatus": {"bind_mobile": 1},
    "/wechat/User/checkUserLoginStatus": {"is_vip": 0},
    "/wechat/User/getUserCenterInfo": USER_INFO,
    "/wechat/Home/getOrderDanmu": {"switch": 1, "x": 0, "y": 0, "list": DANMU},
    "/wechat/Chat/getChatConfig": {},  # data.ws_url 由处理器动态填充
    "/wechat/ChatClient/bindUser": {},
    "/wechat/ChatClient/bindKefu": {},
    "/wechat/Cat/getCatList": {"list": [{"id": i + 1, "name": c["name"], "thumb": c["thumb"]} for i, c in enumerate(ICATS)]},
    "/wechat/Cat/getCatList2": {"list": []},
    "/wechat/Cat/getCatListByLevel1": {"list": []},
    "/wechat/Daren/getDarenGroupList": {"list": []},
    "/wechat/Daren/getTagList": {"list": []},
    "/index/Index/getTipsInfo": {"tips": "本地演示环境"},
    "/wechat/Article/closeNotice": {},
    "/wechat/Files/uploadBase64": {"url": ""},
}

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
                if b2 & 0x80:  # 客户端帧带掩码
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
                if opcode == 0x8:  # close
                    return
                if opcode == 0x9:  # ping -> pong
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

    # ---- 模拟接口 ----
    def _api(self):
        path = unquote(self.path.split("?")[0])
        length = int(self.headers.get("Content-Length") or 0)
        body = self.rfile.read(length) if length else b""
        try:
            req = json.loads(body.decode("utf-8")) if body else {}
        except Exception:
            req = {}
        data = ROUTES.get(path, {})
        if path == "/wechat/Chat/getChatConfig":
            data = {"ws_url": "ws://%s/ws" % self.headers.get("Host", "127.0.0.1:8080")}
        resp = {"status": 1, "msg": "本地演示数据", "data": data}
        payload = json.dumps(resp, ensure_ascii=False).encode("utf-8")
        self.send_response(200)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)
        sys.stderr.write("[mock] %s <- %s\n" % (path, body[:200].decode("utf-8", "ignore")))

    def do_GET(self):
        if self.path.split("?")[0] == "/ws" or "websocket" in (self.headers.get("Upgrade") or "").lower():
            return self._handle_ws()
        if self.path.startswith("/wechat/") or self.path.startswith("/index/"):
            return self._api()
        if self.path.split("?")[0] == "/favicon.ico":
            self.path = "/files/imgs/youqu.jpg"
        SimpleHTTPRequestHandler.do_GET(self)

    def do_POST(self):
        if self.path.startswith("/wechat/") or self.path.startswith("/index/"):
            return self._api()
        self.send_response(404)
        self.end_headers()


def main():
    handler = partial(Handler, directory=ROOT)
    server = ThreadingHTTPServer(("0.0.0.0", PORT), handler)
    print("serving %s at http://0.0.0.0:%d/h5/  (mock api + ws)" % (ROOT, PORT))
    server.serve_forever()


if __name__ == "__main__":
    main()
