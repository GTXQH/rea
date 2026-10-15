(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-user-fine_list"],
  {
    "0d7a": function (t, i, n) {
      "use strict";
      n("6a54"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
        n("c223");
      var a = n("e74a"),
        s = {
          data: function () {
            return {
              list: [],
              page: 1,
              status: "loadmore",
              currentTab: 1,
              isLoading: !1,
              sumAmount: 0,
              isFirstLoad: !0,
            };
          },
          onLoad: function () {
            this.getFineList();
          },
          onShow: function () {
            this.isFirstLoad ? (this.isFirstLoad = !1) : this.resetAndReload();
          },
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  (t.page = 1),
                  (t.list = []),
                  t.getFineList(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          onReachBottom: function () {
            "loading" == this.status ||
              "nomore" == this.status ||
              this.isLoading ||
              (this.page++, (this.status = "loading"), this.getFineList());
          },
          methods: {
            resetAndReload: function () {
              this.isLoading ||
                ((this.page = 1),
                (this.list = []),
                (this.status = "loadmore"),
                (this.sumAmount = 0),
                this.getFineList());
            },
            switchTab: function (t) {
              this.currentTab === t ||
                this.isLoading ||
                ((this.currentTab = t), this.resetAndReload());
            },
            getFineList: function () {
              var t = this;
              this.isLoading ||
                ((this.isLoading = !0),
                uni.showLoading({ title: "加载中.." }),
                (0, a.send)(
                  "/wechat/UserBzj/getFineList",
                  { page: this.page, type: this.currentTab },
                  !1,
                )
                  .then(function (i) {
                    (t.isLoading = !1), uni.hideLoading();
                    var n = i.status,
                      a = i.msg,
                      s = i.data;
                    if (1 != n) return uni.$uv.toast(a);
                    s.list.length > 0 &&
                      (1 === t.page
                        ? (t.list = s.list)
                        : (t.list = t.list.concat(s.list))),
                      (t.sumAmount = s.sum_amount || 0),
                      1 == s.no_more
                        ? (t.status = "nomore")
                        : (t.status = "loadmore");
                  })
                  .catch(function () {
                    (t.isLoading = !1), uni.hideLoading();
                  }));
            },
            showReason: function (t) {
              uni.showModal({
                title: "罚款原因",
                content: t.reason || "暂无原因",
                showCancel: !1,
                confirmText: "关闭",
              });
            },
            goPay: function (t) {
              uni.navigateTo({ url: "/pages/pay/index?type=7&id=" + t.id });
            },
          },
        };
      i.default = s;
    },
    "388e": function (t, i, n) {
      var a = n("5b9c");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var s = n("967d").default;
      s("35fb6f1e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5b9c": function (t, i, n) {
      var a = n("c86c");
      (i = a(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-7156ed40]{padding:0 %?30?% %?155?%}.sum_box[data-v-7156ed40]{background:#fff;border-radius:%?15?%;padding:%?25?% %?30?%;margin-bottom:%?20?%;display:flex;justify-content:space-between;align-items:center;box-shadow:0 %?2?% %?10?% rgba(0,0,0,.05)}.sum_box .sum_label[data-v-7156ed40]{font-size:14px;color:#666}.sum_box .sum_amount[data-v-7156ed40]{font-size:20px;color:#fd2c28;font-weight:700}.tab_box[data-v-7156ed40]{display:flex;background:#f7f8fa;border-radius:%?20?%;margin:%?30?% 0;padding:%?10?%}.tab_box .tab[data-v-7156ed40]{flex:1;text-align:center;padding:%?20?%;border-radius:%?15?%;font-size:14px;color:#666;transition:all .3s}.tab_box .tab.cur[data-v-7156ed40]{background:#fff;color:#000;font-weight:700;box-shadow:0 %?2?% %?8?% rgba(0,0,0,.1)}.list .col[data-v-7156ed40]{display:flex;justify-content:space-between;align-items:flex-start;padding:%?30?% 0;border-bottom:%?2?% solid #eee}.list .col .info[data-v-7156ed40]{width:calc(100% - %?180?%)}.list .col .info .title[data-v-7156ed40]{font-weight:700;font-size:15px;margin-bottom:%?10?%}.list .col .info .time[data-v-7156ed40], .list .col .info .pay_time[data-v-7156ed40]{font-size:12px;color:#999;margin-bottom:%?5?%}.list .col .info .reason[data-v-7156ed40]{font-size:12px;color:#2979ff;margin-top:%?10?%}.list .col .right[data-v-7156ed40]{width:%?170?%;text-align:right}.list .col .right .amount[data-v-7156ed40]{font-size:18px;color:#fd2c28;font-weight:700}.list .col .right .status[data-v-7156ed40]{font-size:12px;margin-top:%?8?%}.list .col .right .status.paid[data-v-7156ed40]{color:#6dff26}.list .col .right .status.unpaid[data-v-7156ed40]{color:#fd6400}.list .col .right .pay_btn[data-v-7156ed40]{background:#ffe610;border-radius:%?20?%;padding:%?10?% %?20?%;font-size:12px;font-weight:700;margin-top:%?15?%;display:inline-block}',
          "",
        ]),
        (t.exports = i);
    },
    "5ced": function (t, i, n) {
      "use strict";
      n.d(i, "b", function () {
        return s;
      }),
        n.d(i, "c", function () {
          return e;
        }),
        n.d(i, "a", function () {
          return a;
        });
      var a = { uvEmpty: n("caef").default, uvLoadMore: n("bd68").default },
        s = function () {
          var t = this,
            i = t.$createElement,
            n = t._self._c || i;
          return n(
            "v-uni-view",
            { staticClass: "content" },
            [
              n(
                "v-uni-view",
                { staticClass: "tab_box" },
                [
                  n(
                    "v-uni-view",
                    {
                      class: { tab: !0, cur: 0 == t.currentTab },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)),
                            t.switchTab(0);
                        },
                      },
                    },
                    [t._v("全部")],
                  ),
                  n(
                    "v-uni-view",
                    {
                      class: { tab: !0, cur: 1 == t.currentTab },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)),
                            t.switchTab(1);
                        },
                      },
                    },
                    [t._v("未缴费")],
                  ),
                  n(
                    "v-uni-view",
                    {
                      class: { tab: !0, cur: 2 == t.currentTab },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)),
                            t.switchTab(2);
                        },
                      },
                    },
                    [t._v("已缴费")],
                  ),
                ],
                1,
              ),
              1 == t.currentTab && t.sumAmount > 0
                ? n(
                    "v-uni-view",
                    { staticClass: "sum_box" },
                    [
                      n("v-uni-view", { staticClass: "sum_label" }, [
                        t._v("未缴费总额"),
                      ]),
                      n("v-uni-view", { staticClass: "sum_amount" }, [
                        t._v("￥" + t._s(t.sumAmount)),
                      ]),
                    ],
                    1,
                  )
                : t._e(),
              t.list.length > 0
                ? n(
                    "v-uni-view",
                    { staticClass: "list", attrs: { id: "list" } },
                    t._l(t.list, function (i, a) {
                      return n(
                        "v-uni-view",
                        { key: a, staticClass: "col", attrs: { text: i } },
                        [
                          n(
                            "v-uni-view",
                            { staticClass: "info" },
                            [
                              n("v-uni-view", { staticClass: "title" }, [
                                t._v(t._s(i.title)),
                              ]),
                              n("v-uni-view", { staticClass: "time" }, [
                                t._v("罚款时间：" + t._s(i.fine_time)),
                              ]),
                              i.pay_time
                                ? n("v-uni-view", { staticClass: "pay_time" }, [
                                    t._v("交款时间：" + t._s(i.pay_time)),
                                  ])
                                : t._e(),
                              n(
                                "v-uni-view",
                                {
                                  staticClass: "reason",
                                  on: {
                                    click: function (n) {
                                      (arguments[0] = n = t.$handleEvent(n)),
                                        t.showReason(i);
                                    },
                                  },
                                },
                                [t._v("罚款原因：点击查看")],
                              ),
                            ],
                            1,
                          ),
                          n(
                            "v-uni-view",
                            { staticClass: "right" },
                            [
                              n("v-uni-view", { staticClass: "amount" }, [
                                t._v("￥" + t._s(i.amount)),
                              ]),
                              n(
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
                              0 == i.status
                                ? n(
                                    "v-uni-view",
                                    {
                                      staticClass: "pay_btn",
                                      on: {
                                        click: function (n) {
                                          (arguments[0] = n =
                                            t.$handleEvent(n)),
                                            t.goPay(i);
                                        },
                                      },
                                    },
                                    [t._v("交费")],
                                  )
                                : t._e(),
                            ],
                            1,
                          ),
                        ],
                        1,
                      );
                    }),
                    1,
                  )
                : n("uv-empty", {
                    attrs: {
                      mode: "data",
                      text: "暂无罚款记录",
                      icon: "/static/imgs/no-data.png",
                    },
                  }),
              t.page > 1
                ? n("uv-load-more", { attrs: { status: t.status } })
                : t._e(),
            ],
            1,
          );
        },
        e = [];
    },
    b6df: function (t, i, n) {
      "use strict";
      n.r(i);
      var a = n("5ced"),
        s = n("ba83");
      for (var e in s)
        ["default"].indexOf(e) < 0 &&
          (function (t) {
            n.d(i, t, function () {
              return s[t];
            });
          })(e);
      n("c90f");
      var o = n("828b"),
        u = Object(o["a"])(
          s["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "7156ed40",
          null,
          !1,
          a["a"],
          void 0,
        );
      i["default"] = u.exports;
    },
    ba83: function (t, i, n) {
      "use strict";
      n.r(i);
      var a = n("0d7a"),
        s = n.n(a);
      for (var e in a)
        ["default"].indexOf(e) < 0 &&
          (function (t) {
            n.d(i, t, function () {
              return a[t];
            });
          })(e);
      i["default"] = s.a;
    },
    c90f: function (t, i, n) {
      "use strict";
      var a = n("388e"),
        s = n.n(a);
      s.a;
    },
  },
]);
//# sourceMappingURL=pages-user-fine_list.541d2578.js.map
