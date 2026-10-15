(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-active-order"],
  {
    "05c2": function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("473f"),
        i("bf0f"),
        i("f7a5"),
        i("5c47"),
        i("0506"),
        i("c223"),
        i("18f7"),
        i("de6c"),
        i("fd3c");
      var n = a(i("5de6")),
        r = a(i("9b1b")),
        s = a(i("2634")),
        o = a(i("2fdc")),
        c = a(i("4d8f0")),
        l = a(i("9463")),
        u = a(i("b92c")),
        d = a(i("7689")),
        f = {
          name: "uv-tabs",
          emits: ["click", "change"],
          mixins: [c.default, l.default, d.default],
          data: function () {
            return {
              firstTime: !0,
              scrollLeft: 0,
              scrollViewWidth: 0,
              lineOffsetLeft: 0,
              tabsRect: { left: 0 },
              innerCurrent: 0,
              moving: !1,
            };
          },
          watch: {
            current: {
              immediate: !0,
              handler: function (t, e) {
                var i = this;
                t !== this.innerCurrent &&
                  ((this.innerCurrent = t),
                  this.$nextTick(function () {
                    i.resize();
                  }));
              },
            },
            list: function () {
              var t = this;
              this.$nextTick(function () {
                t.resize();
              });
            },
          },
          computed: {
            textStyle: function () {
              var t = this;
              return function (e) {
                var i = {},
                  a =
                    e == t.innerCurrent
                      ? t.$uv.addStyle(t.activeStyle)
                      : t.$uv.addStyle(t.inactiveStyle);
                return (
                  t.list[e].disabled && (i.color = "#c8c9cc"),
                  t.$uv.deepMerge(a, i)
                );
              };
            },
            propsBadge: function () {
              return u.default;
            },
          },
          mounted: function () {
            var t = this;
            return (0, o.default)(
              (0, s.default)().mark(function e() {
                return (0, s.default)().wrap(function (e) {
                  while (1)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.init();
                      case 1:
                      case "end":
                        return e.stop();
                    }
                }, e);
              }),
            )();
          },
          methods: {
            setLineLeft: function () {
              var t = this,
                e = this.list[this.innerCurrent];
              if (e) {
                var i = this.list.slice(0, this.innerCurrent).reduce(function (
                    t,
                    e,
                  ) {
                    return t + e.rect.width;
                  }, 0),
                  a = this.$uv.getPx(this.lineWidth);
                this.$uv.test.number(this.lineWidth) &&
                  this.$uv.unit &&
                  (a = this.$uv.getPx(
                    "".concat(this.lineWidth).concat(this.$uv.unit),
                  )),
                  (this.lineOffsetLeft = i + (e.rect.width - a) / 2),
                  this.firstTime &&
                    setTimeout(function () {
                      t.firstTime = !1;
                    }, 20);
              }
            },
            animation: function (t) {},
            clickHandler: function (t, e) {
              var i = this;
              this.$emit(
                "click",
                (0, r.default)((0, r.default)({}, t), {}, { index: e }),
              ),
                t.disabled ||
                  (this.innerCurrent != e &&
                    this.$emit(
                      "change",
                      (0, r.default)((0, r.default)({}, t), {}, { index: e }),
                    ),
                  (this.innerCurrent = e),
                  this.$nextTick(function () {
                    i.resize();
                  }));
            },
            init: function () {
              var t = this;
              this.$uv.sleep().then(function () {
                t.resize();
              });
            },
            setScrollLeft: function () {
              var t = this.list[this.innerCurrent],
                e = this.list.slice(0, this.innerCurrent).reduce(function (
                  t,
                  e,
                ) {
                  return t + e.rect.width;
                }, 0),
                i = this.$uv.sys().windowWidth,
                a =
                  e -
                  (this.tabsRect.width - t.rect.width) / 2 -
                  (i - this.tabsRect.right) / 2 +
                  this.tabsRect.left / 2;
              (a = Math.min(a, this.scrollViewWidth - this.tabsRect.width)),
                (this.scrollLeft = Math.max(0, a));
            },
            resize: function () {
              var t = this;
              0 !== this.list.length &&
                Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(
                  function (e) {
                    var i = (0, n.default)(e, 2),
                      a = i[0],
                      r = i[1],
                      s = void 0 === r ? [] : r;
                    (t.tabsRect = a),
                      (t.scrollViewWidth = 0),
                      s.map(function (e, i) {
                        (t.scrollViewWidth += e.width), (t.list[i].rect = e);
                      }),
                      t.setLineLeft(),
                      t.setScrollLeft();
                  },
                );
            },
            getTabsRect: function () {
              var t = this;
              return new Promise(function (e) {
                t.queryRect("uv-tabs__wrapper__scroll-view").then(function (t) {
                  return e(t);
                });
              });
            },
            getAllItemRect: function () {
              var t = this;
              return new Promise(function (e) {
                var i = t.list.map(function (e, i) {
                  return t.queryRect(
                    "uv-tabs__wrapper__nav__item-".concat(i),
                    !0,
                  );
                });
                Promise.all(i).then(function (t) {
                  return e(t);
                });
              });
            },
            queryRect: function (t, e) {
              var i = this;
              return new Promise(function (e) {
                i.$uvGetRect(".".concat(t)).then(function (t) {
                  e(t);
                });
              });
            },
          },
        };
      e.default = f;
    },
    "28f5": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { uvBadge: i("0261").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "uv-tabs", style: [t.$uv.addStyle(t.customStyle)] },
            [
              i(
                "v-uni-view",
                { staticClass: "uv-tabs__wrapper" },
                [
                  t._t("left"),
                  i(
                    "v-uni-view",
                    { staticClass: "uv-tabs__wrapper__scroll-view-wrapper" },
                    [
                      i(
                        "v-uni-scroll-view",
                        {
                          ref: "uv-tabs__wrapper__scroll-view",
                          staticClass: "uv-tabs__wrapper__scroll-view",
                          attrs: {
                            "scroll-x": t.scrollable,
                            "scroll-left": t.scrollLeft,
                            "scroll-with-animation": !0,
                            "show-scrollbar": !1,
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            {
                              ref: "uv-tabs__wrapper__nav",
                              staticClass: "uv-tabs__wrapper__nav",
                              style: { flex: t.scrollable ? "" : 1 },
                            },
                            [
                              t._l(t.list, function (e, a) {
                                return i(
                                  "v-uni-view",
                                  {
                                    key: a,
                                    ref: "uv-tabs__wrapper__nav__item-" + a,
                                    refInFor: !0,
                                    staticClass: "uv-tabs__wrapper__nav__item",
                                    class: [
                                      "uv-tabs__wrapper__nav__item-" + a,
                                      e.disabled &&
                                        "uv-tabs__wrapper__nav__item--disabled",
                                    ],
                                    style: [
                                      { flex: t.scrollable ? "" : 1 },
                                      t.$uv.addStyle(t.itemStyle),
                                    ],
                                    on: {
                                      click: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)),
                                          t.clickHandler(e, a);
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "v-uni-text",
                                      {
                                        staticClass:
                                          "uv-tabs__wrapper__nav__item__text",
                                        class: [
                                          e.disabled &&
                                            "uv-tabs__wrapper__nav__item__text--disabled",
                                        ],
                                        style: [t.textStyle(a)],
                                      },
                                      [t._v(t._s(e[t.keyName]))],
                                    ),
                                    i("uv-badge", {
                                      attrs: {
                                        show: !(
                                          !e.badge ||
                                          !(
                                            e.badge.show ||
                                            e.badge.isDot ||
                                            e.badge.value
                                          )
                                        ),
                                        isDot:
                                          (e.badge && e.badge.isDot) ||
                                          t.propsBadge.isDot,
                                        value:
                                          (e.badge && e.badge.value) ||
                                          t.propsBadge.value,
                                        max:
                                          (e.badge && e.badge.max) ||
                                          t.propsBadge.max,
                                        type:
                                          (e.badge && e.badge.type) ||
                                          t.propsBadge.type,
                                        showZero:
                                          (e.badge && e.badge.showZero) ||
                                          t.propsBadge.showZero,
                                        bgColor:
                                          (e.badge && e.badge.bgColor) ||
                                          t.propsBadge.bgColor,
                                        color:
                                          (e.badge && e.badge.color) ||
                                          t.propsBadge.color,
                                        shape:
                                          (e.badge && e.badge.shape) ||
                                          t.propsBadge.shape,
                                        numberType:
                                          (e.badge && e.badge.numberType) ||
                                          t.propsBadge.numberType,
                                        inverted:
                                          (e.badge && e.badge.inverted) ||
                                          t.propsBadge.inverted,
                                        customStyle: "margin-left: 4px;",
                                      },
                                    }),
                                  ],
                                  1,
                                );
                              }),
                              i("v-uni-view", {
                                ref: "uv-tabs__wrapper__nav__line",
                                staticClass: "uv-tabs__wrapper__nav__line",
                                style: [
                                  {
                                    width: t.$uv.addUnit(t.lineWidth),
                                    transform:
                                      "translate(" + t.lineOffsetLeft + "px)",
                                    transitionDuration:
                                      (t.firstTime ? 0 : t.duration) + "ms",
                                    height: t.firstTime
                                      ? 0
                                      : t.$uv.addUnit(t.lineHeight),
                                    background: t.lineColor,
                                    backgroundSize: t.lineBgSize,
                                  },
                                ],
                              }),
                            ],
                            2,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  t._t("right"),
                ],
                2,
              ),
            ],
            1,
          );
        },
        r = [];
    },
    "2a37": function (t, e, i) {
      "use strict";
      var a = i("fb1a"),
        n = i.n(a);
      n.a;
    },
    "2b48": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("28f5"),
        n = i("39c1");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      i("45c0");
      var s = i("828b"),
        o = Object(s["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "6f5b1fc6",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = o.exports;
    },
    3105: function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6f5b1fc6], uni-scroll-view[data-v-6f5b1fc6], uni-swiper-item[data-v-6f5b1fc6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-tabs__wrapper[data-v-6f5b1fc6]{display:flex;flex-direction:row;align-items:center}.uv-tabs__wrapper__scroll-view-wrapper[data-v-6f5b1fc6]{flex:1;overflow:auto hidden}.uv-tabs__wrapper__scroll-view[data-v-6f5b1fc6]{display:flex;flex-direction:row;flex:1}.uv-tabs__wrapper__nav[data-v-6f5b1fc6]{display:flex;flex-direction:row;position:relative}.uv-tabs__wrapper__nav__item[data-v-6f5b1fc6]{padding:0 11px;display:flex;flex-direction:row;align-items:center;justify-content:center}.uv-tabs__wrapper__nav__item--disabled[data-v-6f5b1fc6]{cursor:not-allowed}.uv-tabs__wrapper__nav__item__text[data-v-6f5b1fc6]{font-size:15px;color:#606266}.uv-tabs__wrapper__nav__item__text--disabled[data-v-6f5b1fc6]{color:#c8c9cc!important}.uv-tabs__wrapper__nav__line[data-v-6f5b1fc6]{height:3px;background:#3c9cff;width:30px;position:absolute;bottom:2px;border-radius:100px;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s}',
          "",
        ]),
        (t.exports = e);
    },
    3752: function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.sticky_tabs_box[data-v-8c3202c0]{z-index:1009;padding-right:%?30?%}.sticky_tabs_box[data-v-8c3202c0] .uv-tabs{width:93%!important}.sticky_tabs_box[data-v-8c3202c0] .uv-tabs__wrapper__nav__item{min-width:20%;padding:0}.sticky_tabs_box .more_btn[data-v-8c3202c0]{justify-content:center}.sticky_tabs_box .more_btn[data-v-8c3202c0] .uv-icon__icon{font-weight:700!important}.more_cat_content[data-v-8c3202c0]{height:100vh}.more_cat_mark[data-v-8c3202c0]{position:fixed;left:0;right:0;top:0;bottom:0;background:rgba(0,0,0,.5);z-index:1002}.more_cat_box[data-v-8c3202c0]{z-index:1008;max-width:480px;margin:0 auto;position:fixed;left:0;right:0;top:%?95?%;background:#fff;display:grid;grid-template-columns:repeat(4,1fr);grid-gap:%?20?%;border-radius:0 0 %?20?% %?20?%;padding:%?40?% %?30?% %?34?%}.more_cat_box .item[data-v-8c3202c0]{background:#eee;text-align:center;height:%?68?%;line-height:%?68?%;border-radius:%?10?%;padding:0 %?10?%}.more_cat_box .item.cur[data-v-8c3202c0]{background:#ffe610;font-weight:700}.order_list[data-v-8c3202c0]{margin-top:%?4?%}.order_list .col[data-v-8c3202c0]{background:#fff;border-radius:%?25?%;box-shadow:0 %?2?% %?8?% #ddd;padding:0 %?30?%;margin:%?30?% %?30?% %?40?%}.order_list .col .top_box[data-v-8c3202c0]{border-bottom:%?2?% solid #ddd}.order_list .col .top_box uni-view[data-v-8c3202c0]{font-size:13px;white-space:nowrap}.order_list .col .top_box .order_num[data-v-8c3202c0]{padding:%?22?% 0;justify-content:flex-start;flex:1}.order_list .col .top_box .order_num .num[data-v-8c3202c0]{font-weight:700}.order_list .col .top_box .order_num .copy_btn[data-v-8c3202c0]{margin-left:%?12?%;color:#2979ff}.order_list .col .top_box .status[data-v-8c3202c0]{font-size:12px;font-weight:700}.order_list .col .msg_box[data-v-8c3202c0]{padding:0 0 %?10?%}.order_list .col .msg_box .goods_msg[data-v-8c3202c0]{margin:%?26?% auto %?24?%;padding-bottom:%?4?%}.order_list .col .msg_box .goods_msg .img[data-v-8c3202c0]{width:%?114?%;height:%?114?%;border-radius:%?10?%;position:relative;top:%?4?%}.order_list .col .msg_box .goods_msg .txt[data-v-8c3202c0]{width:calc(100% - %?138?%)}.order_list .col .msg_box .goods_msg .txt .price_box .price[data-v-8c3202c0]{color:#fd2c28;font-weight:700;font-size:18px}.order_list .col .msg_box .goods_msg .txt .price_box .price .unit[data-v-8c3202c0]{font-size:12.4px}.order_list .col .msg_box .goods_msg .txt .name[data-v-8c3202c0]{font-size:13px;margin:%?6?% auto %?4?%;font-weight:700}.order_list .col .msg_box .goods_msg .txt .intro[data-v-8c3202c0]{font-size:12px;color:#999}.order_list .col .msg_box .tips[data-v-8c3202c0]{margin:%?10?% auto}.order_list .col .msg_box .tips uni-view[data-v-8c3202c0]{font-size:12.6px;color:#999}.order_list .col .msg_box .tips .tit[data-v-8c3202c0]{color:#444}.order_list .col .msg_box .tips .remark[data-v-8c3202c0]{flex:1;text-align:right;margin-left:%?150?%}.order_list .col .msg_box .tips .real_money[data-v-8c3202c0]{color:#fd2c28;font-weight:700;font-size:15px}.order_list .col .msg_box .tips .real_money .unit[data-v-8c3202c0]{font-size:11px}.order_list .col .btn_box[data-v-8c3202c0]{padding:%?20?% 0;border-top:%?2?% solid #ddd;justify-content:flex-end}.order_list .col .btn_box .lianxi_box[data-v-8c3202c0]{display:flex;justify-content:flex-start;align-items:center}.order_list .col .btn_box .lianxi_btn[data-v-8c3202c0],\r\n.order_list .col .btn_box .des[data-v-8c3202c0]{background:#ffe610;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;font-weight:700;margin-left:%?25?%;padding:0 %?24?%;box-sizing:border-box}.order_list .col .btn_box .lianxi_btn[data-v-8c3202c0]:first-child,\r\n.order_list .col .btn_box .des[data-v-8c3202c0]:first-child{margin-left:0}.order_list .col .btn_box .lianxi_btn.cancle[data-v-8c3202c0],\r\n.order_list .col .btn_box .des.cancle[data-v-8c3202c0]{background:#eee;color:#666}',
          "",
        ]),
        (t.exports = e);
    },
    "39c1": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("05c2"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = n.a;
    },
    "45c0": function (t, e, i) {
      "use strict";
      var a = i("62a9"),
        n = i.n(a);
      n.a;
    },
    "62a9": function (t, e, i) {
      var a = i("3105");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("0bdeecc7", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6a97": function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = a(i("b7c7"));
      i("5c47"), i("aa9c"), i("0c26");
      var r = i("e74a"),
        s = i("a5ed5"),
        o = {
          data: function () {
            return {
              tabs: [
                { index: 0, name: "全部", status: -1 },
                { index: 1, name: "未抽奖", status: 1 },
                { index: 2, name: "已抽奖", status: 2 },
              ],
              list: [],
              current: 0,
              status: -1,
              page: 1,
              no_more: 0,
              loadTips: "loading",
              moreCat: !1,
              standHeight: 40,
              order_id: 0,
            };
          },
          onLoad: function (t) {
            (this.current = t.current ? t.current : 0),
              (this.status = this.tabs[this.current].status);
          },
          onShow: function () {
            this.getRaffleOrderList();
          },
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  (t.page = 1),
                  (t.no_more = 0),
                  (t.loadTips = "loading"),
                  t.getRaffleOrderList(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          onReachBottom: function (t) {
            this.loadMoreFun();
          },
          mounted: function () {
            this.getHeight();
          },
          methods: {
            getHeight: function () {
              var t = this;
              this.$nextTick(function () {
                var e = uni.createSelectorQuery().in(t);
                e.select("#standHeight")
                  .boundingClientRect(function (e) {
                    console.log("定位" + e.height), (t.standHeight = e.height);
                  })
                  .exec();
              });
            },
            toggleMoreCat: function () {
              this.tabs.length > 0
                ? (this.moreCat = !this.moreCat)
                : console.log("没有更多分类");
            },
            selectMoreCat: function (t) {
              if (this.current == t.index) return console.log("重复点击"), !1;
              this.changeTabs(t), (this.moreCat = !1);
            },
            getRaffleOrderList: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, r.send)(
                  "/wechat/RaffleOrder/getRaffleOrderList",
                  { label: "order", status: this.status, page: this.page },
                  !1,
                ).then(function (e) {
                  uni.hideLoading();
                  var i,
                    a = e.status,
                    r = e.msg,
                    s = e.data;
                  if (1 != a) return uni.$uv.toast(r);
                  t.page > 1
                    ? (i = t.list).push.apply(i, (0, n.default)(s.list))
                    : (t.list = s.list);
                  1 == s.no_more &&
                    ((t.loadTips = "nomore"), (t.no_more = s.no_more));
                });
            },
            copyOrderNum: function (t) {
              uni.setClipboardData({
                data: t.trim(),
                success: function () {
                  return uni.$uv.toast("复制成功");
                },
                fail: function () {},
              });
            },
            changeTabs: function (t) {
              (this.current = t.index),
                (this.status = t.status),
                (this.page = 1),
                (this.list = []),
                (this.no_more = 0),
                this.getRaffleOrderList();
            },
            loadMoreFun: function () {
              0 == this.no_more && (this.page++, this.getRaffleOrderList()),
                console.log("到底了");
            },
            jump: function (t) {
              uni.navigateTo({ url: t });
            },
            jumpOrder: function (t) {
              this.jump("/pages_sub1/order/info?id=" + t);
            },
            onGoRaffle: function (t) {
              (0, s.goRaffle)(t);
            },
          },
        };
      e.default = o;
    },
    "73ec": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7ed1"),
        n = i("8b08");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      i("2a37");
      var s = i("828b"),
        o = Object(s["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "8c3202c0",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = o.exports;
    },
    7689: function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var n,
        r,
        s = a(i("9b1b")),
        o = {
          props: (0, s.default)(
            {
              duration: { type: Number, default: 300 },
              list: {
                type: Array,
                default: function () {
                  return [];
                },
              },
              lineColor: { type: String, default: "#3c9cff" },
              activeStyle: {
                type: [String, Object],
                default: function () {
                  return { color: "#303133" };
                },
              },
              inactiveStyle: {
                type: [String, Object],
                default: function () {
                  return { color: "#606266" };
                },
              },
              lineWidth: { type: [String, Number], default: 20 },
              lineHeight: { type: [String, Number], default: 3 },
              lineBgSize: { type: String, default: "cover" },
              itemStyle: {
                type: [String, Object],
                default: function () {
                  return { height: "44px" };
                },
              },
              scrollable: { type: Boolean, default: !0 },
              current: { type: [Number, String], default: 0 },
              keyName: { type: String, default: "name" },
            },
            null === (n = uni.$uv) ||
              void 0 === n ||
              null === (r = n.props) ||
              void 0 === r
              ? void 0
              : r.tabs,
          ),
        };
      e.default = o;
    },
    "7ed1": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = {
          uvTabs: i("2b48").default,
          uvEmpty: i("caef").default,
          uvLoadMore: i("bd68").default,
        },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { class: { content: !0, more_cat_content: t.moreCat } },
            [
              t.moreCat
                ? i("v-uni-view", {
                    staticClass: "more_cat_mark",
                    on: {
                      click: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          (t.moreCat = !1);
                      },
                    },
                  })
                : t._e(),
              t.moreCat && t.tabs.length > 0
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "more_cat_box",
                      style: "top:" + t.standHeight + "px;",
                    },
                    t._l(t.tabs, function (e, a) {
                      return i(
                        "v-uni-view",
                        {
                          key: a,
                          class: { item: !0, cur: t.current == a },
                          attrs: { text: e },
                          on: {
                            click: function (i) {
                              (arguments[0] = i = t.$handleEvent(i)),
                                t.selectMoreCat(e);
                            },
                          },
                        },
                        [t._v(t._s(e.name))],
                      );
                    }),
                    1,
                  )
                : t._e(),
              i(
                "v-uni-view",
                {
                  ref: "standHeight",
                  staticClass: "sticky_tabs_box flex_box",
                  attrs: { id: "standHeight" },
                },
                [
                  i("uv-tabs", {
                    attrs: {
                      current: t.current,
                      list: t.tabs,
                      lineColor: "#000",
                      activeStyle: {
                        color: "#000",
                        fontWeight: "bold",
                        transform: "scale(1.02)",
                      },
                      scrollable: !0,
                    },
                    on: {
                      change: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.changeTabs.apply(void 0, arguments);
                      },
                    },
                  }),
                ],
                1,
              ),
              t.list.length > 0
                ? i(
                    "v-uni-view",
                    { staticClass: "order_list" },
                    t._l(t.list, function (e, a) {
                      return i(
                        "v-uni-view",
                        { key: a, staticClass: "col", attrs: { text: e } },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "top_box flex_box" },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "order_num flex_box",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)),
                                        t.copyOrderNum(e.order_no);
                                    },
                                  },
                                },
                                [
                                  i("v-uni-view", {}, [t._v("订单编号：")]),
                                  i("v-uni-view", { staticClass: "num" }, [
                                    t._v(t._s(e.order_no)),
                                  ]),
                                  i("v-uni-view", { staticClass: "copy_btn" }, [
                                    t._v("复制"),
                                  ]),
                                ],
                                1,
                              ),
                              i("v-uni-view", { staticClass: "status" }, [
                                t._v(t._s(e.status_text)),
                              ]),
                            ],
                            1,
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "msg_box" },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "goods_msg flex_box",
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)),
                                        t.jump(
                                          "/pages/active/goods?id=" +
                                            e.raffle_id,
                                        );
                                    },
                                  },
                                },
                                [
                                  e.raffle_thumb
                                    ? i("img", {
                                        staticClass: "img",
                                        attrs: { src: e.raffle_thumb },
                                      })
                                    : i("img", {
                                        staticClass: "img",
                                        attrs: {
                                          src: e.goods ? e.goods.thumb : "",
                                        },
                                      }),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "txt" },
                                    [
                                      i(
                                        "v-uni-view",
                                        { staticClass: "price_box flex_box" },
                                        [
                                          i(
                                            "v-uni-view",
                                            { staticClass: "price" },
                                            [
                                              i(
                                                "v-uni-text",
                                                { staticClass: "unit" },
                                                [t._v("￥")],
                                              ),
                                              i("v-uni-text", [
                                                t._v(t._s(e.price)),
                                              ]),
                                            ],
                                            1,
                                          ),
                                          i(
                                            "v-uni-view",
                                            { staticClass: "num" },
                                            [t._v("x " + t._s(e.num))],
                                          ),
                                        ],
                                        1,
                                      ),
                                      i(
                                        "v-uni-view",
                                        { staticClass: "name uv-line-2" },
                                        [t._v(t._s(e.raffle_name))],
                                      ),
                                      i(
                                        "v-uni-view",
                                        { staticClass: "intro uv-line-2" },
                                        [t._v(t._s(e.raffle_intro))],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "v-uni-view",
                                { staticClass: "tips flex_box" },
                                [
                                  i("v-uni-view", { staticClass: "tit" }, [
                                    t._v("大区"),
                                  ]),
                                  i("v-uni-view", [
                                    t._v(t._s(e.game_area_text)),
                                  ]),
                                ],
                                1,
                              ),
                              e.num_id
                                ? i(
                                    "v-uni-view",
                                    { staticClass: "tips flex_box" },
                                    [
                                      i("v-uni-view", { staticClass: "tit" }, [
                                        t._v("数字编号"),
                                      ]),
                                      i("v-uni-view", [t._v(t._s(e.num_id))]),
                                    ],
                                    1,
                                  )
                                : t._e(),
                              i(
                                "v-uni-view",
                                { staticClass: "tips flex_box" },
                                [
                                  i("v-uni-view", { staticClass: "tit" }, [
                                    t._v("订单备注"),
                                  ]),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "remark uv-line-1" },
                                    [t._v(t._s(e.remark ? e.remark : "无"))],
                                  ),
                                ],
                                1,
                              ),
                              i(
                                "v-uni-view",
                                { staticClass: "tips flex_box" },
                                [
                                  i("v-uni-view", { staticClass: "tit" }, [
                                    t._v("下单时间"),
                                  ]),
                                  i("v-uni-view", [
                                    t._v(t._s(e.time ? e.time : "")),
                                  ]),
                                ],
                                1,
                              ),
                              1 == e.status
                                ? i(
                                    "v-uni-view",
                                    { staticClass: "tips flex_box" },
                                    [
                                      i("v-uni-view", { staticClass: "tit" }, [
                                        t._v("抽奖进度"),
                                      ]),
                                      i("v-uni-view", [
                                        t._v(
                                          t._s(e.drawn_count || 0) +
                                            "/" +
                                            t._s(e.total_count || 1),
                                        ),
                                      ]),
                                    ],
                                    1,
                                  )
                                : t._e(),
                              i(
                                "v-uni-view",
                                { staticClass: "tips flex_box" },
                                [
                                  i("v-uni-view", { staticClass: "tit" }, [
                                    t._v("实际付款"),
                                  ]),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "real_money" },
                                    [
                                      i("v-uni-text", { staticClass: "unit" }, [
                                        t._v("￥"),
                                      ]),
                                      t._v(" " + t._s(e.money) + " "),
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
                            { staticClass: "btn_box flex_box" },
                            [
                              1 == e.status
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass: "des",
                                      on: {
                                        click: function (i) {
                                          (arguments[0] = i =
                                            t.$handleEvent(i)),
                                            t.onGoRaffle(e.raffle_id);
                                        },
                                      },
                                    },
                                    [t._v("去抽奖")],
                                  )
                                : i(
                                    "v-uni-view",
                                    {
                                      staticClass: "des",
                                      on: {
                                        click: function (i) {
                                          (arguments[0] = i =
                                            t.$handleEvent(i)),
                                            t.jumpOrder(e.order_id);
                                        },
                                      },
                                    },
                                    [t._v("查看订单")],
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
                : i("uv-empty", {
                    attrs: {
                      mode: "data",
                      text: "暂无数据",
                      icon: "/static/imgs/no-data.png",
                    },
                  }),
              t.page > 1
                ? i("uv-load-more", { attrs: { status: t.loadTips } })
                : t._e(),
            ],
            1,
          );
        },
        r = [];
    },
    "8b08": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6a97"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = n.a;
    },
    a5ed5: function (t, e, i) {
      "use strict";
      i("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.goRaffle = function (t) {
          return (0, a.send)(
            "/wechat/Raffle/getRaffleStyle",
            { label: "raffle", raffle_id: t },
            !1,
          )
            .then(function (e) {
              1 == e.status && e.data && 2 == e.data.style
                ? uni.navigateTo({
                    url: "/pages_sub1/active/lucky_draw?raffle_id=" + t,
                  })
                : uni.navigateTo({
                    url: "/pages/active/turntable?raffle_id=" + t,
                  });
            })
            .catch(function () {
              uni.navigateTo({ url: "/pages/active/turntable?raffle_id=" + t });
            });
        });
      var a = i("e74a");
    },
    fb1a: function (t, e, i) {
      var a = i("3752");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("2b65cabf", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
//# sourceMappingURL=pages-active-order.73b14612.js.map
