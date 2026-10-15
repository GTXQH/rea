(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-chat-notice"],
  {
    1926: function (t, n, e) {
      var a = e("c86c");
      (n = a(!1)),
        n.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-81e29e2a]{background-color:#f2f2f2}body.?%PAGE?%[data-v-81e29e2a]{background-color:#f2f2f2}.time[data-v-81e29e2a]{text-align:center;color:#999;font-size:12px;margin:%?30?% auto;width:calc(100% - %?60?%)}.text_box[data-v-81e29e2a]{padding:%?30?%;background:#fff;border-radius:%?25?%;margin:%?30?% auto;width:calc(100% - %?60?%)}.text_box .title[data-v-81e29e2a]{font-size:15px;margin-bottom:%?20?%;font-weight:700;display:flex;align-items:center;justify-content:flex-start}.text_box[data-v-81e29e2a] .uv-badge{margin-left:%?15?%!important;width:%?60?%!important;display:inline-block!important}.text_box[data-v-81e29e2a] .u-content{color:#888}.text_box[data-v-81e29e2a] .u-content uni-rich-text{font-size:13.6px;line-height:1.4}',
          "",
        ]),
        (t.exports = n);
    },
    "20f3": function (t, n, e) {
      "use strict";
      var a = e("8bdb"),
        o = e("5145");
      a(
        { target: "Array", proto: !0, forced: o !== [].lastIndexOf },
        { lastIndexOf: o },
      );
    },
    "3b8c": function (t, n, e) {
      "use strict";
      e("6a54");
      var a = e("f5bd").default;
      Object.defineProperty(n, "__esModule", { value: !0 }),
        (n.default = void 0),
        e("aa9c"),
        e("bf0f"),
        e("2797");
      var o = a(e("b7c7")),
        i = e("e74a"),
        r = {
          data: function () {
            return {
              content: "",
              no_data_icon: uni.getStorageSync("no_data_icon"),
              list: [],
              page: 1,
              no_more: 0,
              status: "loading",
            };
          },
          onLoad: function () {
            this.getNoticeList();
          },
          onReachBottom: function (t) {
            this.loadMoreFun();
          },
          methods: {
            getNoticeList: function () {
              var t = this;
              (0, i.send)(
                "/wechat/Notice/getNoticeList",
                { page: this.page },
                !1,
                1,
              ).then(function (n) {
                var e,
                  a = n.status,
                  i = n.msg,
                  r = n.data;
                if (1 != a) return uni.$u.toast(i);
                t.page > 1
                  ? (e = t.list).push.apply(e, (0, o.default)(r.list))
                  : (t.list = r.list);
                1 == r.no_more &&
                  ((t.status = "nomore"), (t.no_more = r.no_more));
              });
            },
            loadMoreFun: function () {
              0 == this.no_more && (this.page++, this.getNoticeList()),
                console.log("到底了");
            },
            lookNotice: function (t) {
              var n = this;
              if (1 == t.look_status) return 1;
              (0, i.send)(
                "/wechat/NoticeLog/lookNotice",
                { id: t.id },
                !1,
                1,
              ).then(function (e) {
                var a = e.status,
                  o = e.msg;
                e.data;
                if (1 != a) return uni.$u.toast(o);
                n.list.forEach(function (n) {
                  n.id == t.id && (n.look_status = 1);
                });
              });
            },
          },
        };
      n.default = r;
    },
    "476e": function (t, n, e) {
      "use strict";
      e.r(n);
      var a = e("f223"),
        o = e("606d");
      for (var i in o)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return o[t];
            });
          })(i);
      e("4af3");
      var r = e("828b"),
        s = Object(r["a"])(
          o["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "81e29e2a",
          null,
          !1,
          a["a"],
          void 0,
        );
      n["default"] = s.exports;
    },
    "4af3": function (t, n, e) {
      "use strict";
      var a = e("fb47"),
        o = e.n(a);
      o.a;
    },
    "606d": function (t, n, e) {
      "use strict";
      e.r(n);
      var a = e("3b8c"),
        o = e.n(a);
      for (var i in a)
        ["default"].indexOf(i) < 0 &&
          (function (t) {
            e.d(n, t, function () {
              return a[t];
            });
          })(i);
      n["default"] = o.a;
    },
    f223: function (t, n, e) {
      "use strict";
      e.d(n, "b", function () {
        return o;
      }),
        e.d(n, "c", function () {
          return i;
        }),
        e.d(n, "a", function () {
          return a;
        });
      var a = {
          uvBadge: e("0261").default,
          uvParse: e("c96a").default,
          uvEmpty: e("caef").default,
          uvLoadMore: e("bd68").default,
        },
        o = function () {
          var t = this,
            n = t.$createElement,
            e = t._self._c || n;
          return e(
            "v-uni-view",
            { staticClass: "content" },
            [
              t.list.length > 0
                ? [
                    t._l(t.list, function (n, a) {
                      return [
                        e(
                          "v-uni-view",
                          { key: a + "_0", staticClass: "time" },
                          [t._v(t._s(n.time))],
                        ),
                        e(
                          "v-uni-view",
                          {
                            key: a + "_1",
                            staticClass: "text_box",
                            on: {
                              click: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.lookNotice(n);
                              },
                            },
                          },
                          [
                            e(
                              "v-uni-view",
                              { staticClass: "title" },
                              [
                                t._v(" " + t._s(n.title) + " "),
                                0 == n.look_status
                                  ? e("uv-badge", { attrs: { value: "new" } })
                                  : t._e(),
                              ],
                              1,
                            ),
                            e(
                              "v-uni-view",
                              { staticClass: "u-content" },
                              [
                                e("uv-parse", {
                                  attrs: { content: n.des },
                                  on: {
                                    imgtap: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.lookNotice(n);
                                    },
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        ),
                      ];
                    }),
                  ]
                : e("uv-empty", {
                    attrs: {
                      mode: "list",
                      text: "暂无通知信息",
                      icon: t.no_data_icon,
                    },
                  }),
              t.list.length > 0
                ? e("uv-load-more", { attrs: { status: t.status } })
                : t._e(),
            ],
            2,
          );
        },
        i = [];
    },
    fb47: function (t, n, e) {
      var a = e("1926");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var o = e("967d").default;
      o("73bc0fda", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
//# sourceMappingURL=pages_sub1-chat-notice.a8b44b61.js.map
