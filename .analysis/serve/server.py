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

IMG = "https://trae-api-cn.mchost.guru/api/ide/v1/tool_text_to_image?prompt=%s&image_size=%s"


def img(prompt, size="square"):
    from urllib.parse import quote

    return IMG % (quote(prompt), size)


GOODS = [
    {"id": i + 1, "name": n, "goods_name": n, "thumb": img(p), "price": pr,
     "unit": "小时", "star": 5, "sales": s, "label": "", "tags": []}
    for i, (n, p, pr, s) in enumerate([
        ("王者荣耀 上分陪玩", "esports mobile game companion service cover, MOBA warrior, neon glow, game card art", "20.00", 328),
        ("和平精英 四排带飞", "battle royale shooter game companion service cover, tactical soldier, dynamic action, game card art", "25.00", 256),
        ("原神 深渊代打", "anime open world fantasy game companion service cover, elemental mage, vibrant colors, game card art", "30.00", 189),
        ("英雄联盟手游 上分", "esports mobile MOBA companion service cover, league of legends style hero, blue glow, game card art", "22.00", 143),
        ("蛋仔派对 陪玩", "cute casual party game companion service cover, pastel colors, playful cartoon style", "15.00", 512),
        ("云顶之弈 上分", "auto chess strategy game companion service cover, chess pieces, purple neon, game card art", "18.00", 97),
    ])
]

ICATS = [
    {"id": 1, "name": "王者荣耀", "thumb": img("MOBA game category icon, warrior helmet, red gold, minimal flat icon")},
    {"id": 2, "name": "和平精英", "thumb": img("shooter game category icon, crosshair and helmet, green military, minimal flat icon")},
    {"id": 3, "name": "原神", "thumb": img("anime fantasy game category icon, magic crystal, teal glow, minimal flat icon")},
    {"id": 4, "name": "英雄联盟", "thumb": img("esports MOBA category icon, sword and shield, blue gold, minimal flat icon")},
    {"id": 5, "name": "蛋仔派对", "thumb": img("casual party game category icon, cute egg character, pastel pink, minimal flat icon")},
    {"id": 6, "name": "更多分类", "thumb": img("more category icon, three dots grid, gray gradient, minimal flat icon")},
]

# 真实 tabBar 路由来自编译产物 pages.json：首页/分类/达人/客服/我的
NAV_ICONS = [
    img("simple flat mobile app tab icon, home symbol, line style, white on transparent background"),
    img("simple flat mobile app tab icon, category grid symbol, line style, white on transparent background"),
    img("simple flat mobile app tab icon, star badge symbol, line style, white on transparent background"),
    img("simple flat mobile app tab icon, headset service symbol, line style, white on transparent background"),
    img("simple flat mobile app tab icon, user person symbol, line style, white on transparent background"),
]
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
    {"id": 1, "image": img("esports game companion platform banner, wide hero illustration, neon city night, gamers silhouettes", "landscape_16_9"), "url": ""},
    {"id": 2, "image": img("game boosting service banner, wide illustration, trophy and star rating, purple gradient", "landscape_16_9"), "url": ""},
]

DANMU = [
    {"avatar": img("cartoon gamer boy avatar, neon blue, round icon"), "nickname": "玩家**86", "text": "刚刚下单了 王者荣耀 上分陪玩"},
    {"avatar": img("cartoon gamer girl avatar, pink purple, round icon"), "nickname": "小***哦", "text": "刚刚下单了 和平精英 四排带飞"},
    {"avatar": img("cartoon fox gamer avatar, orange, round icon"), "nickname": "大***哥", "text": "刚刚下单了 原神 深渊代打"},
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

GOODS_INFO = dict(GOODS[0], content="<p>本地演示数据：包含 1 小时代练陪玩服务。</p>", comments=[], spec=[])

DEMO_AVATAR = img("cartoon gamer avatar, hooded player with neon visor, round icon")
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
