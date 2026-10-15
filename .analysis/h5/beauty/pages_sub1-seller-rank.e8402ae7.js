(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-seller-rank"],
  {
    "05c2": function (t, e, a) {
      "use strict";
      a("6a54");
      var n = a("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("473f"),
        a("bf0f"),
        a("f7a5"),
        a("5c47"),
        a("0506"),
        a("c223"),
        a("18f7"),
        a("de6c"),
        a("fd3c");
      var i = n(a("5de6")),
        r = n(a("9b1b")),
        s = n(a("2634")),
        o = n(a("2fdc")),
        l = n(a("4d8f0")),
        c = n(a("9463")),
        u = n(a("b92c")),
        d = n(a("7689")),
        _ = {
          name: "uv-tabs",
          emits: ["click", "change"],
          mixins: [l.default, c.default, d.default],
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
                var a = this;
                t !== this.innerCurrent &&
                  ((this.innerCurrent = t),
                  this.$nextTick(function () {
                    a.resize();
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
                var a = {},
                  n =
                    e == t.innerCurrent
                      ? t.$uv.addStyle(t.activeStyle)
                      : t.$uv.addStyle(t.inactiveStyle);
                return (
                  t.list[e].disabled && (a.color = "#c8c9cc"),
                  t.$uv.deepMerge(n, a)
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
                var a = this.list.slice(0, this.innerCurrent).reduce(function (
                    t,
                    e,
                  ) {
                    return t + e.rect.width;
                  }, 0),
                  n = this.$uv.getPx(this.lineWidth);
                this.$uv.test.number(this.lineWidth) &&
                  this.$uv.unit &&
                  (n = this.$uv.getPx(
                    "".concat(this.lineWidth).concat(this.$uv.unit),
                  )),
                  (this.lineOffsetLeft = a + (e.rect.width - n) / 2),
                  this.firstTime &&
                    setTimeout(function () {
                      t.firstTime = !1;
                    }, 20);
              }
            },
            animation: function (t) {},
            clickHandler: function (t, e) {
              var a = this;
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
                    a.resize();
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
                a = this.$uv.sys().windowWidth,
                n =
                  e -
                  (this.tabsRect.width - t.rect.width) / 2 -
                  (a - this.tabsRect.right) / 2 +
                  this.tabsRect.left / 2;
              (n = Math.min(n, this.scrollViewWidth - this.tabsRect.width)),
                (this.scrollLeft = Math.max(0, n));
            },
            resize: function () {
              var t = this;
              0 !== this.list.length &&
                Promise.all([this.getTabsRect(), this.getAllItemRect()]).then(
                  function (e) {
                    var a = (0, i.default)(e, 2),
                      n = a[0],
                      r = a[1],
                      s = void 0 === r ? [] : r;
                    (t.tabsRect = n),
                      (t.scrollViewWidth = 0),
                      s.map(function (e, a) {
                        (t.scrollViewWidth += e.width), (t.list[a].rect = e);
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
                var a = t.list.map(function (e, a) {
                  return t.queryRect(
                    "uv-tabs__wrapper__nav__item-".concat(a),
                    !0,
                  );
                });
                Promise.all(a).then(function (t) {
                  return e(t);
                });
              });
            },
            queryRect: function (t, e) {
              var a = this;
              return new Promise(function (e) {
                a.$uvGetRect(".".concat(t)).then(function (t) {
                  e(t);
                });
              });
            },
          },
        };
      e.default = _;
    },
    "1f16": function (t, e, a) {
      var n = a("c86c");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-38be8144]{background:#f8f8f8}body.?%PAGE?%[data-v-38be8144]{background:#f8f8f8}.content[data-v-38be8144]{padding:%?0?% %?30?%}.type_tabs_box[data-v-38be8144] .uv-tabs{width:60%;margin:0 auto!important;border-radius:%?100?%;border:%?4?% solid #000}.type_tabs_box[data-v-38be8144] .uv-tabs__wrapper__nav__item{flex:1!important;height:36px!important;padding:0!important}.type_tabs_box[data-v-38be8144] .uv-tabs__wrapper__nav__item__text{font-size:14px!important;width:100%!important;height:36px!important;line-height:36px!important;text-align:center!important}.type_tabs_box[data-v-38be8144] .uv-tabs__wrapper__nav__line{display:none!important}.rank_tips[data-v-38be8144]{margin:%?-18?% auto %?20?%;text-align:center;font-size:%?22?%;line-height:1.6;color:#999}.rank_tips .rank_source[data-v-38be8144]{margin-left:%?10?%;color:#bbb}[data-v-38be8144] .uv-tabs{margin:%?16?% auto %?36?%}[data-v-38be8144] .uv-tabs__wrapper__nav__item{flex:1!important}[data-v-38be8144] .uv-tabs__wrapper__nav__item__text{font-size:14px!important}.game_tabs_box[data-v-38be8144] .uv-tabs__wrapper__nav__item{flex:none!important}.top_box[data-v-38be8144]{justify-content:center;align-items:center;position:relative;height:%?300?%;background:#fff;border-radius:%?30?%;box-shadow:0 %?4?% %?8?% #ddd}.top_box .col[data-v-38be8144]{top:%?60?%;height:%?224?%;position:absolute;width:calc((100% - %?80?%) / 3);text-align:center}.top_box .col .head[data-v-38be8144]{width:%?120?%;height:%?120?%;border-radius:100%;margin:%?0?% auto %?16?%;box-sizing:border-box;padding:%?4?%;background:#feac19}.top_box .col .nickname[data-v-38be8144]{font-size:13.6px;color:#feac19}.top_box .col .num[data-v-38be8144]{font-size:12.6px;margin-top:%?4?%;color:#feac19}.top_box .col.frt[data-v-38be8144]{z-index:10;top:%?34?%}.top_box .col.scd[data-v-38be8144]{z-index:9;left:%?20?%}.top_box .col.scd .head[data-v-38be8144]{background:#8293a2}.top_box .col.scd .nickname[data-v-38be8144],\r\n.top_box .col.scd .num[data-v-38be8144]{color:#8293a2}.top_box .col.tid[data-v-38be8144]{z-index:8;right:%?20?%}.top_box .col.tid .head[data-v-38be8144]{background:#d57f3f}.top_box .col.tid .nickname[data-v-38be8144],\r\n.top_box .col.tid .num[data-v-38be8144]{color:#d57f3f}.list[data-v-38be8144]{background:#fff;border-radius:%?30?%;box-shadow:0 %?4?% %?8?% #ddd;margin:%?35?% auto;padding:%?0?% %?20?%;overflow-x:hidden;overflow-y:scroll}.list .col[data-v-38be8144]{margin:%?38?% auto}.list .col .pm[data-v-38be8144]{width:%?80?%;color:#666;text-align:center;white-space:nowrap}.list .col .user_msg[data-v-38be8144]{width:calc(100% - %?100?%)}.list .col .user_msg .user[data-v-38be8144]{width:calc(100% - %?170?%);justify-content:flex-start}.list .col .user_msg .user .head[data-v-38be8144]{width:%?86?%;height:%?86?%;border-radius:100%;margin-right:%?18?%}.list .col .user_msg .user .nickname[data-v-38be8144]{width:calc(100% - %?105?%)}.list .col .user_msg .num[data-v-38be8144]{max-width:%?170?%}.no_more[data-v-38be8144]{margin:%?38?% auto}',
          "",
        ]),
        (t.exports = e);
    },
    "28f5": function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return n;
        });
      var n = { uvBadge: a("0261").default },
        i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticClass: "uv-tabs", style: [t.$uv.addStyle(t.customStyle)] },
            [
              a(
                "v-uni-view",
                { staticClass: "uv-tabs__wrapper" },
                [
                  t._t("left"),
                  a(
                    "v-uni-view",
                    { staticClass: "uv-tabs__wrapper__scroll-view-wrapper" },
                    [
                      a(
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
                          a(
                            "v-uni-view",
                            {
                              ref: "uv-tabs__wrapper__nav",
                              staticClass: "uv-tabs__wrapper__nav",
                              style: { flex: t.scrollable ? "" : 1 },
                            },
                            [
                              t._l(t.list, function (e, n) {
                                return a(
                                  "v-uni-view",
                                  {
                                    key: n,
                                    ref: "uv-tabs__wrapper__nav__item-" + n,
                                    refInFor: !0,
                                    staticClass: "uv-tabs__wrapper__nav__item",
                                    class: [
                                      "uv-tabs__wrapper__nav__item-" + n,
                                      e.disabled &&
                                        "uv-tabs__wrapper__nav__item--disabled",
                                    ],
                                    style: [
                                      { flex: t.scrollable ? "" : 1 },
                                      t.$uv.addStyle(t.itemStyle),
                                    ],
                                    on: {
                                      click: function (a) {
                                        (arguments[0] = a = t.$handleEvent(a)),
                                          t.clickHandler(e, n);
                                      },
                                    },
                                  },
                                  [
                                    a(
                                      "v-uni-text",
                                      {
                                        staticClass:
                                          "uv-tabs__wrapper__nav__item__text",
                                        class: [
                                          e.disabled &&
                                            "uv-tabs__wrapper__nav__item__text--disabled",
                                        ],
                                        style: [t.textStyle(n)],
                                      },
                                      [t._v(t._s(e[t.keyName]))],
                                    ),
                                    a("uv-badge", {
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
                              a("v-uni-view", {
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
    "2b48": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("28f5"),
        i = a("39c1");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      a("45c0");
      var s = a("828b"),
        o = Object(s["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "6f5b1fc6",
          null,
          !1,
          n["a"],
          void 0,
        );
      e["default"] = o.exports;
    },
    "2dbd": function (t, e, a) {
      "use strict";
      var n = a("d0a6"),
        i = a.n(n);
      i.a;
    },
    3105: function (t, e, a) {
      var n = a("c86c");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6f5b1fc6], uni-scroll-view[data-v-6f5b1fc6], uni-swiper-item[data-v-6f5b1fc6]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-tabs__wrapper[data-v-6f5b1fc6]{display:flex;flex-direction:row;align-items:center}.uv-tabs__wrapper__scroll-view-wrapper[data-v-6f5b1fc6]{flex:1;overflow:auto hidden}.uv-tabs__wrapper__scroll-view[data-v-6f5b1fc6]{display:flex;flex-direction:row;flex:1}.uv-tabs__wrapper__nav[data-v-6f5b1fc6]{display:flex;flex-direction:row;position:relative}.uv-tabs__wrapper__nav__item[data-v-6f5b1fc6]{padding:0 11px;display:flex;flex-direction:row;align-items:center;justify-content:center}.uv-tabs__wrapper__nav__item--disabled[data-v-6f5b1fc6]{cursor:not-allowed}.uv-tabs__wrapper__nav__item__text[data-v-6f5b1fc6]{font-size:15px;color:#606266}.uv-tabs__wrapper__nav__item__text--disabled[data-v-6f5b1fc6]{color:#c8c9cc!important}.uv-tabs__wrapper__nav__line[data-v-6f5b1fc6]{height:3px;background:#3c9cff;width:30px;position:absolute;bottom:2px;border-radius:100px;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;transition-duration:.3s}',
          "",
        ]),
        (t.exports = e);
    },
    "39c1": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("05c2"),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = i.a;
    },
    "45c0": function (t, e, a) {
      "use strict";
      var n = a("62a9"),
        i = a.n(n);
      i.a;
    },
    "552a": function (t, e, a) {
      "use strict";
      a("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("5c47"),
        a("64aa"),
        a("c223");
      var n = a("e74a"),
        i = a("4fbd"),
        r = {
          data: function () {
            return {
              game_tabs: [],
              type_tabs: [
                { name: "流水榜", type: 1 },
                { name: "接单榜", type: 2 },
              ],
              rank_tabs: [
                { name: "日榜", type: 1 },
                { name: "周榜", type: 2 },
                { name: "月榜", type: 3 },
              ],
              cat1_id: 0,
              type: 1,
              rank: 1,
              boxHeight: 0,
              screenHeight: 0,
              listHeight: 0,
              page: 1,
              no_more: 0,
              status: "loading",
              no_data_icon: "",
              no1: null,
              no2: null,
              no3: null,
              list: [],
              rank_show_game: 0,
              rank_total_num: 0,
              rank_seller_num: 0,
              max_page: 1,
              cache_source: "",
              rank_tips: "注：排行榜数据每隔3分钟刷新",
            };
          },
          onLoad: function () {
            this.getRankInfo();
          },
          onShow: function () {},
          mounted: function () {
            this.updateScreenWidth(),
              window.addEventListener("resize", this.updateScreenWidth);
          },
          beforeDestroy: function () {
            window.removeEventListener("resize", this.updateScreenWidth);
          },
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  t.resetData(),
                  t.getRankInfo(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          onReachBottom: function (t) {
            this.loadMoreFun();
          },
          methods: {
            updateScreenWidth: function () {
              this.screenHeight = window.innerHeight;
            },
            getHeight: function () {
              var t = this;
              this.$nextTick(function () {
                var e = uni.createSelectorQuery().in(t);
                e.select("#boxHeight")
                  .boundingClientRect(function (e) {
                    t.boxHeight = e.height;
                    var a = i.cal.jian(t.screenHeight, t.boxHeight, 0);
                    (a = i.cal.jian(a, 84, 0)), (t.listHeight = a);
                  })
                  .exec();
              });
            },
            changeTypeTabs: function (t) {
              (this.type = t.type), this.resetData(), this.getRankInfo();
            },
            changeRankTabs: function (t) {
              (this.rank = t.type), this.resetData(), this.getRankInfo();
            },
            changeCat1: function (t) {
              (this.cat1_id = t.id), this.resetData(), this.getRankInfo();
            },
            resetData: function () {
              (this.page = 1),
                (this.list = []),
                (this.no1 = null),
                (this.no2 = null),
                (this.no3 = null),
                (this.no_more = 0),
                (this.status = "loading"),
                (this.rank_total_num = 0),
                (this.rank_seller_num = 0),
                (this.max_page = 1),
                (this.cache_source = "");
            },
            getRankInfo: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, n.send)(
                  "/wechat/Seller/getRankInfo",
                  {
                    cat1_id: this.cat1_id,
                    type: this.type,
                    page: this.page,
                    rank: this.rank,
                  },
                  !1,
                ).then(function (e) {
                  uni.hideLoading();
                  var a = e.status,
                    n = e.msg,
                    i = e.data;
                  if (1 != a) return uni.$uv.toast(n);
                  (t.game_tabs = Array.isArray(i.cat1) ? i.cat1 : []),
                    (t.rank_show_game = Number(i.rank_show_game || 0)),
                    (t.rank_seller_num = Number(i.rank_seller_num || 0)),
                    (t.rank_total_num = Number(i.rank_total_num || 0)),
                    (t.cache_source =
                      i.cache_source && String(i.cache_source)
                        ? String(i.cache_source)
                        : "");
                  var r = t.rank_seller_num > 0 ? t.rank_seller_num : 10,
                    s = Math.max(0, r - 3),
                    o = Math.max(10, s > 0 ? s : 10);
                  (t.max_page = s <= 0 ? 1 : Math.max(1, Math.ceil(s / o))),
                    t.page > t.max_page && (t.page = t.max_page);
                  var l = Array.isArray(i.list) ? i.list : [];
                  t.page > 1
                    ? (t.list = t.list.concat(l))
                    : ((t.no1 = i.no1 || null),
                      (t.no2 = i.no2 || null),
                      (t.no3 = i.no3 || null),
                      (t.list = l)),
                    1 == i.no_more || t.page >= t.max_page
                      ? ((t.status = "nomore"), (t.no_more = 1))
                      : (t.no_more = 0),
                    t.getHeight();
                });
            },
            jump: function (t) {
              uni.navigateTo({ url: t });
            },
            loadMoreFun: function () {
              0 == this.no_more &&
                this.page < this.max_page &&
                (this.page++, this.getRankInfo()),
                console.log("到底了");
            },
          },
        };
      e.default = r;
    },
    "62a9": function (t, e, a) {
      var n = a("3105");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var i = a("967d").default;
      i("0bdeecc7", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6e90": function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("552a"),
        i = a.n(n);
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return n[t];
            });
          })(r);
      e["default"] = i.a;
    },
    7689: function (t, e, a) {
      "use strict";
      a("6a54");
      var n = a("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        a("64aa");
      var i,
        r,
        s = n(a("9b1b")),
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
            null === (i = uni.$uv) ||
              void 0 === i ||
              null === (r = i.props) ||
              void 0 === r
              ? void 0
              : r.tabs,
          ),
        };
      e.default = o;
    },
    b71d: function (t, e, a) {
      "use strict";
      a.r(e);
      var n = a("df8b"),
        i = a("6e90");
      for (var r in i)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            a.d(e, t, function () {
              return i[t];
            });
          })(r);
      a("2dbd");
      var s = a("828b"),
        o = Object(s["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "38be8144",
          null,
          !1,
          n["a"],
          void 0,
        );
      e["default"] = o.exports;
    },
    d0a6: function (t, e, a) {
      var n = a("1f16");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var i = a("967d").default;
      i("79960c34", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    df8b: function (t, e, a) {
      "use strict";
      a.d(e, "b", function () {
        return i;
      }),
        a.d(e, "c", function () {
          return r;
        }),
        a.d(e, "a", function () {
          return n;
        });
      var n = { uvTabs: a("2b48").default, uvEmpty: a("caef").default },
        i = function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "v-uni-view",
            { staticClass: "content" },
            [
              a(
                "v-uni-view",
                {
                  ref: "boxHeight",
                  staticClass: "boxHeight",
                  attrs: { id: "boxHeight" },
                },
                [
                  1 == t.rank_show_game
                    ? a(
                        "v-uni-view",
                        { class: { game_tabs_box: t.game_tabs.length > 4 } },
                        [
                          a("uv-tabs", {
                            attrs: {
                              list: t.game_tabs,
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
                                  t.changeCat1.apply(void 0, arguments);
                              },
                            },
                          }),
                        ],
                        1,
                      )
                    : t._e(),
                  a(
                    "v-uni-view",
                    { staticClass: "type_tabs_box" },
                    [
                      a("uv-tabs", {
                        staticClass: "type_tabs",
                        attrs: {
                          list: t.type_tabs,
                          activeStyle: {
                            color: "#000",
                            fontWeight: "bold",
                            background: "#ffe610",
                          },
                        },
                        on: {
                          change: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.changeTypeTabs.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "rank_tabs_box" },
                    [
                      a("uv-tabs", {
                        attrs: {
                          list: t.rank_tabs,
                          lineColor: "#000",
                          activeStyle: {
                            color: "#000",
                            fontWeight: "bold",
                            transform: "scale(1.02)",
                          },
                        },
                        on: {
                          change: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.changeRankTabs.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1,
                  ),
                  a(
                    "v-uni-view",
                    { staticClass: "rank_tips" },
                    [
                      t._v(t._s(t.rank_tips)),
                      t.cache_source
                        ? a("v-uni-text", { staticClass: "rank_source" }, [
                            t._v(
                              "（" +
                                t._s(
                                  "redis" === t.cache_source
                                    ? "缓存数据"
                                    : "实时数据",
                                ) +
                                "）",
                            ),
                          ])
                        : t._e(),
                    ],
                    1,
                  ),
                  t.no1 || t.no2 || t.no3
                    ? a(
                        "v-uni-view",
                        { staticClass: "top_box flex_box" },
                        [
                          t.no1
                            ? a(
                                "v-uni-view",
                                { staticClass: "col frt" },
                                [
                                  a("img", {
                                    staticClass: "head",
                                    attrs: {
                                      src:
                                        t.no1 && t.no1.seller
                                          ? t.no1.seller.avatar
                                          : "",
                                    },
                                  }),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "nickname uv-line-1" },
                                    [
                                      t._v(
                                        t._s(
                                          t.no1 && t.no1.seller
                                            ? t.no1.seller.nickname
                                            : "",
                                        ),
                                      ),
                                    ],
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "num uv-line-1" },
                                    [
                                      t._v(
                                        t._s(t.no1 ? t.no1.total_money : ""),
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.no2
                            ? a(
                                "v-uni-view",
                                { staticClass: "col scd" },
                                [
                                  a("img", {
                                    staticClass: "head",
                                    attrs: {
                                      src:
                                        t.no2 && t.no2.seller
                                          ? t.no2.seller.avatar
                                          : "",
                                    },
                                  }),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "nickname uv-line-1" },
                                    [
                                      t._v(
                                        t._s(
                                          t.no2 && t.no2.seller
                                            ? t.no2.seller.nickname
                                            : "",
                                        ),
                                      ),
                                    ],
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "num uv-line-1" },
                                    [
                                      t._v(
                                        t._s(t.no2 ? t.no2.total_money : ""),
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.no3
                            ? a(
                                "v-uni-view",
                                { staticClass: "col tid" },
                                [
                                  a("img", {
                                    staticClass: "head",
                                    attrs: {
                                      src:
                                        t.no3 && t.no3.seller
                                          ? t.no3.seller.avatar
                                          : "",
                                    },
                                  }),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "nickname uv-line-1" },
                                    [
                                      t._v(
                                        t._s(
                                          t.no3 && t.no3.seller
                                            ? t.no3.seller.nickname
                                            : "",
                                        ),
                                      ),
                                    ],
                                  ),
                                  a(
                                    "v-uni-view",
                                    { staticClass: "num uv-line-1" },
                                    [
                                      t._v(
                                        t._s(t.no3 ? t.no3.total_money : ""),
                                      ),
                                    ],
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                        ],
                        1,
                      )
                    : t._e(),
                ],
                1,
              ),
              t.rank_total_num > 0
                ? a(
                    "v-uni-view",
                    { staticClass: "list" },
                    [
                      t._l(t.list, function (e, n) {
                        return a(
                          "v-uni-view",
                          {
                            key: n,
                            staticClass: "col flex_box",
                            attrs: { index: n },
                          },
                          [
                            a("v-uni-view", { staticClass: "pm" }, [
                              t._v(t._s(n + 4)),
                            ]),
                            a(
                              "v-uni-view",
                              { staticClass: "user_msg flex_box" },
                              [
                                a(
                                  "v-uni-view",
                                  { staticClass: "user flex_box" },
                                  [
                                    a("img", {
                                      staticClass: "head",
                                      attrs: {
                                        src:
                                          e && e.seller ? e.seller.avatar : "",
                                      },
                                    }),
                                    a(
                                      "v-uni-view",
                                      { staticClass: "nickname uv-line-1" },
                                      [
                                        t._v(
                                          t._s(
                                            e && e.seller
                                              ? e.seller.nickname
                                              : "",
                                          ),
                                        ),
                                      ],
                                    ),
                                  ],
                                  1,
                                ),
                                a(
                                  "v-uni-view",
                                  { staticClass: "num uv-line-1" },
                                  [t._v(t._s(e ? e.total_money : ""))],
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        );
                      }),
                      1 == t.no_more || 0 === t.list.length
                        ? a("v-uni-view", { staticClass: "no_more" }, [
                            t._v("没有更多了"),
                          ])
                        : t._e(),
                    ],
                    2,
                  )
                : a("uv-empty", {
                    attrs: {
                      mode: "list",
                      text: "暂无数据",
                      icon: t.no_data_icon,
                    },
                  }),
            ],
            1,
          );
        },
        r = [];
    },
  },
]);
//# sourceMappingURL=pages_sub1-seller-rank.e8402ae7.js.map
