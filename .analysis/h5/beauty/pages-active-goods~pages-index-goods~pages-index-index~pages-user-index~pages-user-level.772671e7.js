(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "pages-active-goods~pages-index-goods~pages-index-index~pages-user-index~pages-user-level",
  ],
  {
    "23da": function (t, e, i) {
      "use strict";
      i("6a54");
      var r = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = r(i("4d8f0")),
        n = r(i("9463")),
        o = r(i("7788")),
        d = {
          name: "uv-swiper-indicator",
          mixins: [a.default, n.default, o.default],
          data: function () {
            return { lineWidth: 22 };
          },
          computed: {
            lineStyle: function () {
              var t = {};
              return (
                (t.width = this.$uv.addUnit(this.lineWidth)),
                (t.transform = "translateX(".concat(
                  this.$uv.addUnit(this.current * this.lineWidth),
                  ")",
                )),
                (t.backgroundColor = this.indicatorActiveColor),
                t
              );
            },
            dotStyle: function () {
              var t = this;
              return function (e) {
                var i = {};
                return (
                  (i.backgroundColor =
                    e === t.current
                      ? t.indicatorActiveColor
                      : t.indicatorInactiveColor),
                  i
                );
              };
            },
          },
        };
      e.default = d;
    },
    2863: function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i("c65e"),
        a = i.n(r);
      for (var n in r)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return r[t];
            });
          })(n);
      e["default"] = a.a;
    },
    "2c21": function (t, e, i) {
      "use strict";
      i("6a54");
      var r = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var a,
        n,
        o = r(i("9b1b")),
        d = {
          props: (0, o.default)(
            {
              list: {
                type: Array,
                default: function () {
                  return [];
                },
              },
              indicator: { type: Boolean, default: !1 },
              indicatorActiveColor: { type: String, default: "#fff" },
              indicatorInactiveColor: {
                type: String,
                default: "rgba(255, 255, 255, 0.35)",
              },
              indicatorStyle: { type: [String, Object], default: "" },
              indicatorMode: { type: String, default: "line" },
              autoplay: { type: Boolean, default: !0 },
              current: { type: [String, Number], default: 0 },
              currentItemId: { type: String, default: "" },
              interval: { type: [String, Number], default: 3e3 },
              duration: { type: [String, Number], default: 300 },
              circular: { type: Boolean, default: !1 },
              vertical: { type: Boolean, default: !1 },
              previousMargin: { type: [String, Number], default: 0 },
              nextMargin: { type: [String, Number], default: 0 },
              acceleration: { type: Boolean, default: !1 },
              displayMultipleItems: { type: Number, default: 1 },
              easingFunction: { type: String, default: "default" },
              keyName: { type: String, default: "url" },
              imgMode: { type: String, default: "aspectFill" },
              height: { type: [String, Number], default: 130 },
              bgColor: { type: String, default: "#f3f4f6" },
              radius: { type: [String, Number], default: 4 },
              loading: { type: Boolean, default: !1 },
              showTitle: { type: Boolean, default: !1 },
              titleStyle: { type: [Object, String], default: "" },
            },
            null === (a = uni.$uv) ||
              void 0 === a ||
              null === (n = a.props) ||
              void 0 === n
              ? void 0
              : n.swiper,
          ),
        };
      e.default = d;
    },
    "2ed9": function (t, e, i) {
      var r = i("c86c");
      (e = r(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-a7076644], uni-scroll-view[data-v-a7076644], uni-swiper-item[data-v-a7076644]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-swiper-indicator__wrapper[data-v-a7076644]{display:flex;flex-direction:row}.uv-swiper-indicator__wrapper--line[data-v-a7076644]{border-radius:100px;height:4px}.uv-swiper-indicator__wrapper--line__bar[data-v-a7076644]{width:22px;height:4px;border-radius:100px;background-color:#fff;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s}.uv-swiper-indicator__wrapper__dot[data-v-a7076644]{width:5px;height:5px;border-radius:100px;margin:0 4px}.uv-swiper-indicator__wrapper__dot--active[data-v-a7076644]{width:12px}',
          "",
        ]),
        (t.exports = e);
    },
    "44b4": function (t, e, i) {
      "use strict";
      var r = i("a5ed"),
        a = i.n(r);
      a.a;
    },
    "546a": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return r;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var r = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "uv-swiper-indicator" },
            [
              "line" === t.indicatorMode
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "uv-swiper-indicator__wrapper",
                      class: [
                        "uv-swiper-indicator__wrapper--" + t.indicatorMode,
                      ],
                      style: {
                        width: t.$uv.addUnit(t.lineWidth * t.length),
                        backgroundColor: t.indicatorInactiveColor,
                      },
                    },
                    [
                      i("v-uni-view", {
                        staticClass: "uv-swiper-indicator__wrapper--line__bar",
                        style: [t.lineStyle],
                      }),
                    ],
                    1,
                  )
                : t._e(),
              "dot" === t.indicatorMode
                ? i(
                    "v-uni-view",
                    { staticClass: "uv-swiper-indicator__wrapper" },
                    t._l(t.length, function (e, r) {
                      return i("v-uni-view", {
                        key: r,
                        staticClass: "uv-swiper-indicator__wrapper__dot",
                        class: [
                          r === t.current &&
                            "uv-swiper-indicator__wrapper__dot--active",
                        ],
                        style: [t.dotStyle(r)],
                      });
                    }),
                    1,
                  )
                : t._e(),
            ],
            1,
          );
        },
        a = [];
    },
    "568f": function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i("546a"),
        a = i("5a1b");
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(n);
      i("44b4");
      var o = i("828b"),
        d = Object(o["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "a7076644",
          null,
          !1,
          r["a"],
          void 0,
        );
      e["default"] = d.exports;
    },
    "5a1b": function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i("23da"),
        a = i.n(r);
      for (var n in r)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return r[t];
            });
          })(n);
      e["default"] = a.a;
    },
    "60c5": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {
          return r;
        });
      var r = {
          uvLoadingIcon: i("17f5").default,
          uvSwiperIndicator: i("568f").default,
        },
        a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticClass: "uv-swiper",
              style: {
                backgroundColor: t.bgColor,
                height: t.$uv.addUnit(t.height),
                borderRadius: t.$uv.addUnit(t.radius),
              },
            },
            [
              t.loading
                ? i(
                    "v-uni-view",
                    { staticClass: "uv-swiper__loading" },
                    [i("uv-loading-icon", { attrs: { mode: "circle" } })],
                    1,
                  )
                : i(
                    "v-uni-swiper",
                    {
                      staticClass: "uv-swiper__wrapper",
                      style: { height: t.$uv.addUnit(t.height), flex: 1 },
                      attrs: {
                        circular: t.circular,
                        vertical: t.vertical,
                        interval: t.interval,
                        duration: t.duration,
                        autoplay: t.autoplay,
                        current: t.current,
                        currentItemId: t.currentItemId,
                        previousMargin: t.$uv.addUnit(t.previousMargin),
                        nextMargin: t.$uv.addUnit(t.nextMargin),
                        acceleration: t.acceleration,
                        displayMultipleItems: t.displayMultipleItems,
                        easingFunction: t.easingFunction,
                      },
                      on: {
                        change: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.change.apply(void 0, arguments);
                        },
                      },
                    },
                    t._l(t.list, function (e, r) {
                      return i(
                        "v-uni-swiper-item",
                        { key: r, staticClass: "uv-swiper__wrapper__item" },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "uv-swiper__wrapper__item__wrapper",
                              style: [t.itemStyle(r)],
                            },
                            [
                              "image" === t.getItemType(e)
                                ? i("v-uni-image", {
                                    staticClass:
                                      "uv-swiper__wrapper__item__wrapper__image",
                                    style: {
                                      height: t.$uv.addUnit(t.height),
                                      borderRadius: t.$uv.addUnit(t.radius),
                                    },
                                    attrs: {
                                      src: t.getSource(e),
                                      mode: t.imgMode,
                                    },
                                    on: {
                                      click: function (e) {
                                        (arguments[0] = e = t.$handleEvent(e)),
                                          t.clickHandler(r);
                                      },
                                    },
                                  })
                                : t._e(),
                              "video" === t.getItemType(e)
                                ? i("v-uni-video", {
                                    staticClass:
                                      "uv-swiper__wrapper__item__wrapper__video",
                                    style: { height: t.$uv.addUnit(t.height) },
                                    attrs: {
                                      id: "video-" + r,
                                      "enable-progress-gesture": !1,
                                      src: t.getSource(e),
                                      poster: t.getPoster(e),
                                      title:
                                        t.showTitle &&
                                        t.$uv.test.object(e) &&
                                        e.title
                                          ? e.title
                                          : "",
                                      controls: !0,
                                    },
                                    on: {
                                      click: function (e) {
                                        (arguments[0] = e = t.$handleEvent(e)),
                                          t.clickHandler(r);
                                      },
                                    },
                                  })
                                : t._e(),
                              t.showTitle && t.$uv.test.object(e) && e.title
                                ? i(
                                    "v-uni-text",
                                    {
                                      staticClass:
                                        "uv-swiper__wrapper__item__wrapper__title uv-line-1",
                                      style: [t.$uv.addStyle(t.titleStyle)],
                                    },
                                    [t._v(t._s(e.title))],
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
                  ),
              i(
                "v-uni-view",
                {
                  staticClass: "uv-swiper__indicator",
                  style: [t.$uv.addStyle(t.indicatorStyle)],
                },
                [
                  t._t("indicator", [
                    t.loading || !t.indicator || t.showTitle
                      ? t._e()
                      : i("uv-swiper-indicator", {
                          attrs: {
                            indicatorActiveColor: t.indicatorActiveColor,
                            indicatorInactiveColor: t.indicatorInactiveColor,
                            length: t.list.length,
                            current: t.currentIndex,
                            indicatorMode: t.indicatorMode,
                          },
                        }),
                  ]),
                ],
                2,
              ),
            ],
            1,
          );
        },
        n = [];
    },
    7788: function (t, e, i) {
      "use strict";
      i("6a54");
      var r = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var a,
        n,
        o = r(i("9b1b")),
        d = {
          props: (0, o.default)(
            {
              length: { type: [String, Number], default: 0 },
              current: { type: [String, Number], default: 0 },
              indicatorActiveColor: { type: String, default: "" },
              indicatorInactiveColor: { type: String, default: "" },
              indicatorMode: { type: String, default: "" },
            },
            null === (a = uni.$uv) ||
              void 0 === a ||
              null === (n = a.props) ||
              void 0 === n
              ? void 0
              : n.swiperIndicator,
          ),
        };
      e.default = d;
    },
    "87b9": function (t, e, i) {
      "use strict";
      var r = i("ecc7"),
        a = i.n(r);
      a.a;
    },
    a5ed: function (t, e, i) {
      var r = i("2ed9");
      r.__esModule && (r = r.default),
        "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var a = i("967d").default;
      a("1f0174c9", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    c65e: function (t, e, i) {
      "use strict";
      i("6a54");
      var r = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = r(i("fcf3"));
      i("5c47"), i("0506");
      var n = r(i("4d8f0")),
        o = r(i("9463")),
        d = r(i("2c21")),
        l = {
          name: "uv-swiper",
          mixins: [n.default, o.default, d.default],
          emits: ["click", "change"],
          data: function () {
            return { currentIndex: 0 };
          },
          watch: {
            current: function (t, e) {
              t !== e && (this.currentIndex = t);
            },
          },
          computed: {
            itemStyle: function () {
              var t = this;
              return function (e) {
                var i = {};
                return (
                  t.nextMargin &&
                    t.previousMargin &&
                    ((i.borderRadius = t.$uv.addUnit(t.radius)),
                    e !== t.currentIndex && (i.transform = "scale(0.92)")),
                  i
                );
              };
            },
          },
          methods: {
            getItemType: function (t) {
              return "string" === typeof t
                ? this.$uv.test.video(this.getSource(t))
                  ? "video"
                  : "image"
                : "object" === (0, a.default)(t) && this.keyName
                  ? t.type
                    ? "image" === t.type
                      ? "image"
                      : "video" === t.type
                        ? "video"
                        : "image"
                    : this.$uv.test.video(this.getSource(t))
                      ? "video"
                      : "image"
                  : void 0;
            },
            getSource: function (t) {
              return "string" === typeof t
                ? t
                : "object" === (0, a.default)(t) && this.keyName
                  ? t[this.keyName]
                  : (this.$uv.error("请按格式传递列表参数"), "");
            },
            change: function (t) {
              var e = t.detail.current;
              this.pauseVideo(this.currentIndex),
                (this.currentIndex = e),
                this.$emit("change", t.detail);
            },
            pauseVideo: function (t) {
              var e = this.getSource(this.list[t]);
              if (this.$uv.test.video(e)) {
                var i = uni.createVideoContext("video-".concat(t), this);
                i.pause();
              }
            },
            getPoster: function (t) {
              return "object" === (0, a.default)(t) && t.poster ? t.poster : "";
            },
            clickHandler: function (t) {
              this.$emit("click", t);
            },
          },
        };
      e.default = l;
    },
    db40: function (t, e, i) {
      "use strict";
      i.r(e);
      var r = i("60c5"),
        a = i("2863");
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(n);
      i("87b9");
      var o = i("828b"),
        d = Object(o["a"])(
          a["default"],
          r["b"],
          r["c"],
          !1,
          null,
          "13662632",
          null,
          !1,
          r["a"],
          void 0,
        );
      e["default"] = d.exports;
    },
    ecc7: function (t, e, i) {
      var r = i("f56a");
      r.__esModule && (r = r.default),
        "string" === typeof r && (r = [[t.i, r, ""]]),
        r.locals && (t.exports = r.locals);
      var a = i("967d").default;
      a("6ffff2fb", r, !0, { sourceMap: !1, shadowMode: !1 });
    },
    f56a: function (t, e, i) {
      var r = i("c86c");
      (e = r(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uv-line-1[data-v-13662632]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.uv-line-2[data-v-13662632]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.uv-line-3[data-v-13662632]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.uv-line-4[data-v-13662632]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.uv-line-5[data-v-13662632]{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}uni-view[data-v-13662632], uni-scroll-view[data-v-13662632], uni-swiper-item[data-v-13662632]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-swiper[data-v-13662632]{display:flex;flex-direction:row;justify-content:center;align-items:center;position:relative;overflow:hidden}.uv-swiper__wrapper[data-v-13662632]{flex:1}.uv-swiper__wrapper__item[data-v-13662632]{flex:1}.uv-swiper__wrapper__item__wrapper[data-v-13662632]{display:flex;flex-direction:row;position:relative;overflow:hidden;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;flex:1}.uv-swiper__wrapper__item__wrapper__image[data-v-13662632]{flex:1}.uv-swiper__wrapper__item__wrapper__video[data-v-13662632]{flex:1}.uv-swiper__wrapper__item__wrapper__title[data-v-13662632]{position:absolute;background-color:rgba(0,0,0,.3);bottom:0;left:0;right:0;font-size:%?28?%;height:%?60?%;line-height:%?60?%;color:#fff;flex:1}.uv-swiper__indicator[data-v-13662632]{position:absolute;bottom:10px}',
          "",
        ]),
        (t.exports = e);
    },
  },
]);
//# sourceMappingURL=pages-active-goods~pages-index-goods~pages-index-index~pages-user-index~pages-user-level.772671e7.js.map
