(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-agent-index"],
  {
    "106e": function (t, n, a) {
      "use strict";
      a("6a54");
      var i = a("f5bd").default;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        a("bf0f"),
        a("7a76"),
        a("c9b5"),
        a("4626"),
        a("5ac7");
      var e = i(a("2634")),
        o = i(a("2fdc")),
        s = a("e74a"),
        u = {
          data: function () {
            return { user: [], order: [], share_qrcode: "", palte: "h5" };
          },
          onLoad: function (t) {
            this.getAgentInfo();
          },
          onShow: function () {},
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  t.getAgentInfo(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          methods: {
            haiBaoFun: function () {
              this.getSharePoster();
            },
            cloFun: function () {
              this.$refs.rulesPopup.close();
            },
            open: function () {},
            close: function () {
              this.show = !1;
            },
            jump: function (t) {
              uni.navigateTo({ url: t });
            },
            getAgentInfo: function () {
              var t = this;
              (0, s.send)("/wechat/Agent/getAgentInfo", { label: "" }, !1).then(
                function (n) {
                  var a = n.status,
                    i = n.msg,
                    e = n.data;
                  if (1 != a) return uni.$uv.toast(i);
                  (t.user = e.user), (t.order = e.order);
                },
              );
            },
            getSharePoster: function () {
              var t = this;
              uni.showLoading({ title: "正在加载海报..." }),
                (0, s.send)(
                  "/wechat/Agent/getSharePoster",
                  { label: "" },
                  !1,
                ).then(function (n) {
                  uni.hideLoading();
                  var a = n.status,
                    i = n.msg,
                    e = n.data;
                  if (1 != a) return uni.$uv.toast(i);
                  (t.share_qrcode = e.share_qrcode), t.$refs.rulesPopup.open();
                });
            },
            savePoster: function () {
              var t = this;
              return (0, o.default)(
                (0, e.default)().mark(function n() {
                  var a, i;
                  return (0, e.default)().wrap(
                    function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              uni.showLoading({ title: "正在保存海报..." }),
                              (n.prev = 1),
                              (a = t.share_qrcode),
                              (n.next = 5),
                              t.downloadImage(a)
                            );
                          case 5:
                            return (i = n.sent), (n.next = 8), t.saveToAlbum(i);
                          case 8:
                            return (
                              uni.hideLoading(),
                              n.abrupt("return", uni.$uv.toast("保存成功"))
                            );
                          case 12:
                            return (
                              (n.prev = 12),
                              (n.t0 = n["catch"](1)),
                              console.error("保存失败:", n.t0),
                              n.abrupt("return", uni.$uv.toast(n.t0))
                            );
                          case 16:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[1, 12]],
                  );
                }),
              )();
            },
            downloadImage: function (t) {
              return new Promise(function (n, a) {
                uni.downloadFile({
                  url: t,
                  success: function (t) {
                    uni.hideLoading(),
                      200 === t.statusCode
                        ? n(t.tempFilePath)
                        : a(new Error("图片下载失败"));
                  },
                  fail: function (t) {
                    a(new Error("网络请求失败"));
                  },
                });
              });
            },
            saveToAlbum: function (t) {
              var n = this;
              return new Promise(function (a, i) {
                uni.saveImageToPhotosAlbum({
                  filePath: t,
                  success: function () {
                    return a();
                  },
                  fail: function (t) {
                    t.errMsg.includes("auth")
                      ? n.requestAuth()
                      : i(new Error("保存失败"));
                  },
                });
              });
            },
            checkAuth: function () {
              var t = this;
              uni.getSetting({
                success: function (n) {
                  t.hasAuth = n.authSetting["scope.writePhotosAlbum"] || !1;
                },
              });
            },
            requestAuth: function () {
              var t = this;
              uni.hideLoading(),
                uni.authorize({
                  scope: "scope.writePhotosAlbum",
                  success: function () {
                    (t.hasAuth = !0), uni.showToast({ title: "授权成功" });
                  },
                  fail: function () {
                    uni.showModal({
                      title: "提示",
                      content: "需要相册权限才能保存图片，请前往设置开启",
                      success: function (t) {
                        t.confirm && uni.openSetting();
                      },
                    });
                  },
                });
            },
          },
        };
      n.default = u;
    },
    1305: function (t, n, a) {
      "use strict";
      a.d(n, "b", function () {
        return e;
      }),
        a.d(n, "c", function () {
          return o;
        }),
        a.d(n, "a", function () {
          return i;
        });
      var i = { uvPopup: a("ce8a").default },
        e = function () {
          var t = this,
            n = t.$createElement,
            i = t._self._c || n;
          return i(
            "v-uni-view",
            { staticClass: "content" },
            [
              i(
                "v-uni-view",
                { staticClass: "head_box" },
                [
                  i("img", { attrs: { src: t.user.avatar } }),
                  i("v-uni-view", { staticClass: "nickname" }, [
                    t._v(t._s(t.user.nickname)),
                  ]),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "qian_box" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "tx_box" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "tixian_box",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.jump("/pages/agent/score_log");
                            },
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "money_box" },
                            [
                              i("v-uni-text", { staticClass: "unit" }, [
                                t._v("￥"),
                              ]),
                              i("v-uni-text", { staticClass: "money" }, [
                                t._v(t._s(t.user.score)),
                              ]),
                            ],
                            1,
                          ),
                          i("v-uni-view", { staticClass: "tixian" }, [
                            t._v("可提现金额"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "button",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.jump("/pages/agent/cash_score");
                            },
                          },
                        },
                        [t._v("立即提现")],
                      ),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "yaoqing_flex" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "yaoqing_box",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.jump("/pages/agent/child");
                            },
                          },
                        },
                        [
                          i("v-uni-view", { staticClass: "num" }, [
                            t._v(t._s(t.order.share_num)),
                          ]),
                          i("v-uni-view", { staticClass: "yaoqing" }, [
                            t._v("邀请人数"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "yaoqing_box" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "num_box" },
                            [
                              i("v-uni-text", { staticClass: "unit" }, [
                                t._v("￥"),
                              ]),
                              i("v-uni-view", { staticClass: "num" }, [
                                t._v(t._s(t.order.share_money)),
                              ]),
                            ],
                            1,
                          ),
                          i("v-uni-view", { staticClass: "yaoqing" }, [
                            t._v("累计获得佣金"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "yaoqing_box" },
                        [
                          i("v-uni-view", { staticClass: "num" }, [
                            t._v(t._s(t.order.share_order)),
                          ]),
                          i("v-uni-view", { staticClass: "yaoqing" }, [
                            t._v("成交单量"),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "fuwu_box" },
                [
                  i("v-uni-view", { staticClass: "fuwu" }, [t._v("我的服务")]),
                  i(
                    "v-uni-view",
                    { staticClass: "fuwu_grid" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "tuwen_box",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.haiBaoFun.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("img", { attrs: { src: a("d16f"), alt: "" } }),
                          i("v-uni-view", { staticClass: "hanzi" }, [
                            t._v("分享海报"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "tuwen_box",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.jump("/pages/user/article?id=7");
                            },
                          },
                        },
                        [
                          i("img", { attrs: { src: a("dfcb"), alt: "" } }),
                          i("v-uni-view", { staticClass: "hanzi" }, [
                            t._v("合作说明"),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "tuwen_box",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.jump("/pages/agent/child");
                            },
                          },
                        },
                        [
                          i("img", { attrs: { src: a("b307"), alt: "" } }),
                          i("v-uni-view", { staticClass: "hanzi" }, [
                            t._v("邀请列表"),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "uv-popup",
                {
                  ref: "rulesPopup",
                  attrs: {
                    mode: "bottom",
                    overlayOpacity: "0.5",
                    bgColor: "#f2f2f2",
                    round: 15,
                  },
                },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "hb_pup" },
                    [
                      i("img", {
                        staticClass: "haibao_pup",
                        attrs: { src: t.share_qrcode, alt: "" },
                      }),
                      "h5" == t.palte
                        ? i("v-uni-view", { staticClass: "baocun" }, [
                            t._v("长按即可保存"),
                          ])
                        : t._e(),
                      "mp-weixin" == t.palte
                        ? i(
                            "v-uni-view",
                            {
                              staticClass: "btn_save",
                              on: {
                                click: function (n) {
                                  (arguments[0] = n = t.$handleEvent(n)),
                                    t.savePoster.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("保存海报")],
                          )
                        : t._e(),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "btn",
                          on: {
                            click: function (n) {
                              (arguments[0] = n = t.$handleEvent(n)),
                                t.cloFun.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("关闭")],
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
            ],
            1,
          );
        },
        o = [];
    },
    "1bd8": function (t, n, a) {
      "use strict";
      a.r(n);
      var i = a("106e"),
        e = a.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            a.d(n, t, function () {
              return i[t];
            });
          })(o);
      n["default"] = e.a;
    },
    9743: function (t, n, a) {
      "use strict";
      a.r(n);
      var i = a("1305"),
        e = a("1bd8");
      for (var o in e)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            a.d(n, t, function () {
              return e[t];
            });
          })(o);
      a("d138");
      var s = a("828b"),
        u = Object(s["a"])(
          e["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "70a02b4b",
          null,
          !1,
          i["a"],
          void 0,
        );
      n["default"] = u.exports;
    },
    b307: function (t, n, a) {
      t.exports = a.p + "static/yaoqing.png";
    },
    d138: function (t, n, a) {
      "use strict";
      var i = a("f64c"),
        e = a.n(i);
      e.a;
    },
    d16f: function (t, n, a) {
      t.exports = a.p + "static/fenxiang.png";
    },
    dfcb: function (t, n) {
      t.exports =
        "data:image/png;base64,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";
    },
    ee85: function (t, n, a) {
      var i = a("c86c");
      (n = i(!1)),
        n.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-70a02b4b]{height:100vh;background:linear-gradient(180deg,#fae645,#f7f0b2,#fff)}body.?%PAGE?%[data-v-70a02b4b]{background:linear-gradient(180deg,#fae645,#f7f0b2,#fff)}.content[data-v-70a02b4b]{padding:%?30?%}.head_box[data-v-70a02b4b]{display:flex;justify-content:flex-start;align-items:center;margin:%?30?% 0}.head_box img[data-v-70a02b4b]{width:%?100?%;height:%?100?%;border-radius:100%;margin-right:%?20?%}.head_box .nickname[data-v-70a02b4b]{font-size:15.6px}.qian_box[data-v-70a02b4b]{border:%?4?% solid #000;background-color:#fff;border-radius:%?25?%}.qian_box .tx_box[data-v-70a02b4b]{padding:%?50?% %?50?% %?40?% %?50?%;display:flex;justify-content:space-between;align-items:center}.qian_box .tx_box .tixian_box[data-v-70a02b4b]{border-radius:%?10?%}.qian_box .tx_box .tixian_box .tixian[data-v-70a02b4b]{font-size:12px}.qian_box .tx_box .tixian_box .money_box[data-v-70a02b4b]{display:flex;justify-content:flex-start;align-items:center}.qian_box .tx_box .tixian_box .money_box .unit[data-v-70a02b4b]{font-size:18px;font-weight:700;color:#fd2c28;margin-top:%?10?%}.qian_box .tx_box .tixian_box .money_box .money[data-v-70a02b4b]{font-weight:700;font-size:26px;color:#fd2c28}.qian_box .tx_box .button[data-v-70a02b4b]{background-color:#ffe610;border:%?4?% solid #000;width:%?200?%;padding:%?10?%;border-radius:%?50?%;text-align:center;font-weight:700}.qian_box .yaoqing_flex[data-v-70a02b4b]{padding:0 %?50?% %?50?% %?50?%;display:flex;justify-content:space-between;align-items:center}.qian_box .yaoqing_flex .yaoqing_box[data-v-70a02b4b]{border-radius:%?10?%;text-align:center}.qian_box .yaoqing_flex .yaoqing_box .num_box[data-v-70a02b4b]{display:flex;justify-content:center;align-items:center}.qian_box .yaoqing_flex .yaoqing_box .num_box .unit[data-v-70a02b4b]{font-size:15px}.qian_box .yaoqing_flex .yaoqing_box .num_box .num[data-v-70a02b4b]{font-size:15px}.qian_box .yaoqing_flex .yaoqing_box .num[data-v-70a02b4b]{font-size:15px}.qian_box .yaoqing_flex .yaoqing_box .yaoqing[data-v-70a02b4b]{font-size:12px}.fuwu_box[data-v-70a02b4b]{margin-top:%?50?%;border-radius:%?25?%;box-shadow:0 %?2?% %?8?% rgba(0,0,0,.2);padding:%?30?%;background-color:#fff}.fuwu_box .fuwu_grid[data-v-70a02b4b]{margin-top:%?40?%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?20?%}.fuwu_box .fuwu_grid .tuwen_box[data-v-70a02b4b]{display:flex;flex-direction:column;align-items:center}.fuwu_box .fuwu_grid .tuwen_box img[data-v-70a02b4b]{width:%?50?%;height:%?50?%;margin-bottom:%?15?%}.fuwu_box .fuwu_grid .tuwen_box .hanzi[data-v-70a02b4b]{font-size:12px}[data-v-70a02b4b] .uv-popup__content{width:100%}.haibao_pup[data-v-70a02b4b]{margin:%?60?% auto %?20?% auto;width:%?500?%;height:%?800?%}.baocun[data-v-70a02b4b]{text-align:center;font-size:12px;margin-bottom:%?40?%}.btn_save[data-v-70a02b4b]{margin:0 auto;margin-top:%?35?%;margin-bottom:%?15?%;background-color:#ff9800;color:#fff;border:%?4?% solid #000;width:%?610?%;padding:%?12?%;border-radius:%?50?%;text-align:center;font-weight:700}.btn[data-v-70a02b4b]{margin:0 auto;margin-bottom:%?30?%;background-color:#ffe610;border:%?4?% solid #000;width:%?610?%;padding:%?12?%;border-radius:%?50?%;text-align:center;font-weight:700}',
          "",
        ]),
        (t.exports = n);
    },
    f64c: function (t, n, a) {
      var i = a("ee85");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var e = a("967d").default;
      e("0ae64732", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
//# sourceMappingURL=pages-agent-index.d7fc5abc.js.map
