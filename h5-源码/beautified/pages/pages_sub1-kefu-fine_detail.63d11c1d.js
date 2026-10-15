(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-kefu-fine_detail"],
  {
    "4ff5": function (t, i, a) {
      "use strict";
      var n = a("c5f5"),
        e = a.n(n);
      e.a;
    },
    "98edf": function (t, i, a) {
      var n = a("c86c");
      (i = n(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-0141a098]{padding:%?30?%;background:#f5f5f5;min-height:100vh}.info_box[data-v-0141a098]{background:#fff;border-radius:%?20?%;padding:%?30?%;margin-bottom:%?30?%}.info_box .title[data-v-0141a098]{font-size:18px;font-weight:700;margin-bottom:%?20?%}.info_box .meta[data-v-0141a098]{display:flex;gap:%?30?%;margin-bottom:%?20?%}.info_box .meta .item[data-v-0141a098]{font-size:13px;color:#999}.info_box .reason[data-v-0141a098]{background:#f7f8fa;border-radius:%?10?%;padding:%?20?%;margin-bottom:%?20?%}.info_box .reason .label[data-v-0141a098]{font-size:13px;color:#999;margin-bottom:%?10?%}.info_box .reason .text[data-v-0141a098]{font-size:15px;color:#333;line-height:1.6}.info_box .stats[data-v-0141a098]{display:flex;justify-content:space-around}.info_box .stats .stat[data-v-0141a098]{text-align:center}.info_box .stats .stat .num[data-v-0141a098]{font-size:24px;font-weight:700;color:#333}.info_box .stats .stat .num.paid[data-v-0141a098]{color:#6dff26}.info_box .stats .stat .num.unpaid[data-v-0141a098]{color:#fd6400}.info_box .stats .stat .label[data-v-0141a098]{font-size:12px;color:#999;margin-top:%?5?%}.list_title[data-v-0141a098]{font-size:15px;font-weight:700;margin-bottom:%?20?%}.list[data-v-0141a098]{background:#fff;border-radius:%?20?%;padding:0 %?30?%}.list .item[data-v-0141a098]{display:flex;align-items:center;padding:%?25?% 0;border-bottom:%?2?% solid #f5f5f5}.list .item[data-v-0141a098]:last-child{border-bottom:none}.list .item .avatar[data-v-0141a098]{width:%?80?%;height:%?80?%;border-radius:50%;margin-right:%?20?%}.list .item .info[data-v-0141a098]{flex:1}.list .item .info .nickname[data-v-0141a098]{font-size:15px;font-weight:700;margin-bottom:%?5?%}.list .item .info .time[data-v-0141a098]{font-size:12px;color:#999}.list .item .right[data-v-0141a098]{text-align:right}.list .item .right .amount[data-v-0141a098]{font-size:16px;font-weight:700;color:#fd2c28}.list .item .right .status[data-v-0141a098]{font-size:12px;margin-top:%?5?%}.list .item .right .status.paid[data-v-0141a098]{color:#6dff26}.list .item .right .status.unpaid[data-v-0141a098]{color:#fd6400}.actions[data-v-0141a098]{position:fixed;bottom:0;left:0;right:0;display:flex;padding:%?20?% %?30?%;padding-bottom:calc(%?20?% + env(safe-area-inset-bottom));background:#fff;border-top:%?2?% solid #eee;gap:%?20?%}.actions .action_btn[data-v-0141a098]{flex:1;height:%?88?%;display:flex;align-items:center;justify-content:center;border-radius:%?44?%;font-size:16px;font-weight:700}.actions .action_btn.edit[data-v-0141a098]{background:#ffe610;color:#000}.actions .action_btn.del[data-v-0141a098]{background:#eee;color:#666}',
          "",
        ]),
        (t.exports = i);
    },
    a8ab: function (t, i, a) {
      "use strict";
      a("6a54"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0);
      var n = a("e74a"),
        e = {
          data: function () {
            return { detail: null, id: null };
          },
          onLoad: function (t) {
            (this.id = t.id), this.getDetail();
          },
          methods: {
            getDetail: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, n.send)(
                  "/wechat/KefuFine/getFineDetail",
                  { id: this.id },
                  !1,
                ).then(function (i) {
                  uni.hideLoading();
                  var a = i.status,
                    n = i.msg,
                    e = i.data;
                  1 == a ? (t.detail = e) : uni.$uv.toast(n);
                });
            },
            goEdit: function () {
              uni.navigateTo({
                url: "/pages_sub1/kefu/fine_edit?id=" + this.id,
              });
            },
            confirmDel: function () {
              var t = this;
              uni.showModal({
                title: "确认删除",
                content: "确定要删除这条罚款记录吗？",
                success: function (i) {
                  i.confirm && t.delFine();
                },
              });
            },
            delFine: function () {
              uni.showLoading({ title: "删除中.." }),
                (0, n.send)(
                  "/wechat/KefuFine/delFine",
                  { id: this.id },
                  !1,
                ).then(function (t) {
                  uni.hideLoading();
                  var i = t.status,
                    a = t.msg;
                  1 == i
                    ? (uni.showToast({ title: "删除成功", icon: "success" }),
                      setTimeout(function () {
                        uni.navigateBack();
                      }, 1500))
                    : uni.$uv.toast(a);
                });
            },
          },
        };
      i.default = e;
    },
    adbc: function (t, i, a) {
      "use strict";
      a.d(i, "b", function () {
        return n;
      }),
        a.d(i, "c", function () {
          return e;
        }),
        a.d(i, "a", function () {});
      var n = function () {
          var t = this,
            i = t.$createElement,
            a = t._self._c || i;
          return a(
            "v-uni-view",
            { staticClass: "content" },
            [
              t.detail
                ? a(
                    "v-uni-view",
                    { staticClass: "info_box" },
                    [
                      a("v-uni-view", { staticClass: "title" }, [
                        t._v(t._s(t.detail.title)),
                      ]),
                      a(
                        "v-uni-view",
                        { staticClass: "meta" },
                        [
                          a("v-uni-view", { staticClass: "item" }, [
                            t._v("创建时间：" + t._s(t.detail.create_time)),
                          ]),
                          a("v-uni-view", { staticClass: "item" }, [
                            t._v("创建人：" + t._s(t.detail.create_name)),
                          ]),
                        ],
                        1,
                      ),
                      t.detail.reason
                        ? a(
                            "v-uni-view",
                            { staticClass: "reason" },
                            [
                              a("v-uni-view", { staticClass: "label" }, [
                                t._v("罚款原因"),
                              ]),
                              a("v-uni-view", { staticClass: "text" }, [
                                t._v(t._s(t.detail.reason)),
                              ]),
                            ],
                            1,
                          )
                        : t._e(),
                      a(
                        "v-uni-view",
                        { staticClass: "stats" },
                        [
                          a(
                            "v-uni-view",
                            { staticClass: "stat" },
                            [
                              a("v-uni-view", { staticClass: "num" }, [
                                t._v(t._s(t.detail.user_count)),
                              ]),
                              a("v-uni-view", { staticClass: "label" }, [
                                t._v("涉及打手"),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "stat" },
                            [
                              a("v-uni-view", { staticClass: "num paid" }, [
                                t._v(t._s(t.detail.paid_count)),
                              ]),
                              a("v-uni-view", { staticClass: "label" }, [
                                t._v("已缴纳"),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "stat" },
                            [
                              a("v-uni-view", { staticClass: "num unpaid" }, [
                                t._v(t._s(t.detail.unpaid_count)),
                              ]),
                              a("v-uni-view", { staticClass: "label" }, [
                                t._v("未缴纳"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : t._e(),
              a("v-uni-view", { staticClass: "list_title" }, [
                t._v("打手列表"),
              ]),
              t.detail && t.detail.seller_users
                ? a(
                    "v-uni-view",
                    { staticClass: "list" },
                    t._l(t.detail.seller_users, function (i, n) {
                      return a(
                        "v-uni-view",
                        { key: n, staticClass: "item" },
                        [
                          a("v-uni-image", {
                            staticClass: "avatar",
                            attrs: { src: i.avatar },
                          }),
                          a(
                            "v-uni-view",
                            { staticClass: "info" },
                            [
                              a("v-uni-view", { staticClass: "nickname" }, [
                                t._v(t._s(i.nickname)),
                              ]),
                              a("v-uni-view", { staticClass: "time" }, [
                                t._v("罚款时间：" + t._s(i.fine_time)),
                              ]),
                            ],
                            1,
                          ),
                          a(
                            "v-uni-view",
                            { staticClass: "right" },
                            [
                              a("v-uni-view", { staticClass: "amount" }, [
                                t._v("￥" + t._s(i.amount)),
                              ]),
                              a(
                                "v-uni-view",
                                {
                                  class: {
                                    status: !0,
                                    paid: 1 == i.status,
                                    unpaid: 0 == i.status,
                                  },
                                },
                                [
                                  t._v(
                                    " " +
                                      t._s(
                                        1 == i.status ? "已缴纳" : "未缴纳",
                                      ) +
                                      " ",
                                  ),
                                ],
                              ),
                            ],
                            1,
                          ),
                        ],
                        1,
                      );
                    }),
                    1,
                  )
                : t._e(),
              t.detail && t.detail.unpaid_count > 0
                ? a(
                    "v-uni-view",
                    { staticClass: "actions" },
                    [
                      a(
                        "v-uni-view",
                        {
                          staticClass: "action_btn edit",
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)),
                                t.goEdit.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("编辑")],
                      ),
                      a(
                        "v-uni-view",
                        {
                          staticClass: "action_btn del",
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)),
                                t.confirmDel.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("删除")],
                      ),
                    ],
                    1,
                  )
                : t._e(),
            ],
            1,
          );
        },
        e = [];
    },
    c5f5: function (t, i, a) {
      var n = a("98edf");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var e = a("967d").default;
      e("1fbf091f", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    cc53: function (t, i, a) {
      "use strict";
      a.r(i);
      var n = a("a8ab"),
        e = a.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(i, t, function () {
              return n[t];
            });
          })(s);
      i["default"] = e.a;
    },
    f846: function (t, i, a) {
      "use strict";
      a.r(i);
      var n = a("adbc"),
        e = a("cc53");
      for (var s in e)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            a.d(i, t, function () {
              return e[t];
            });
          })(s);
      a("4ff5");
      var o = a("828b"),
        d = Object(o["a"])(
          e["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "0141a098",
          null,
          !1,
          n["a"],
          void 0,
        );
      i["default"] = d.exports;
    },
  },
]);
//# sourceMappingURL=pages_sub1-kefu-fine_detail.63d11c1d.js.map
