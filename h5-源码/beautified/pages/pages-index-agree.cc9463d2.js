(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-index-agree"],
  {
    "0737": function (t, a, e) {
      var i = e("b9cc");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[t.i, i, ""]]),
        i.locals && (t.exports = i.locals);
      var n = e("967d").default;
      n("4339fc9a", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "097c": function (t, a, e) {
      "use strict";
      var i = e("0737"),
        n = e.n(i);
      n.a;
    },
    "307f": function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e("c3ea"),
        n = e("429e");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return n[t];
            });
          })(o);
      e("097c");
      var r = e("828b"),
        s = Object(r["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "075e0a74",
          null,
          !1,
          i["a"],
          void 0,
        );
      a["default"] = s.exports;
    },
    "429e": function (t, a, e) {
      "use strict";
      e.r(a);
      var i = e("5f16"),
        n = e.n(i);
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            e.d(a, t, function () {
              return i[t];
            });
          })(o);
      a["default"] = n.a;
    },
    "5f16": function (t, a, e) {
      "use strict";
      e("6a54"),
        Object.defineProperty(a, "__esModule", { value: !0 }),
        (a.default = void 0);
      var i = e("e74a"),
        n = {
          data: function () {
            return { agree: !1, info: [] };
          },
          onLoad: function () {
            this.getWeappInfo();
          },
          onPullDownRefresh: function () {
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          methods: {
            getWeappInfo: function () {
              var t = this;
              (0, i.post)("/wechat/Weapp/getWeappInfo", {}, !1).then(
                function (a) {
                  var e = a.status,
                    i = a.msg,
                    n = a.data;
                  if (1 != e) return uni.$uv.toast(i);
                  t.info = n;
                },
              );
            },
            toggleAgree: function () {
              this.agree = !this.agree;
            },
            jump: function (t) {
              uni.navigateTo({ url: t });
            },
            agreeRule: function () {
              if (!this.agree) return uni.$uv.toast("请先勾选同意协议");
              uni.setStorageSync("weapp_agree", 1),
                uni.reLaunch({ url: "/pages/index/index" });
            },
          },
        };
      a.default = n;
    },
    b9cc: function (t, a, e) {
      var i = e("c86c");
      (a = i(!1)),
        a.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */*[data-v-075e0a74]{margin:0;padding:0;box-sizing:border-box}.container[data-v-075e0a74]{position:relative;display:flex;flex-direction:column;justify-content:center;align-items:center;min-height:100vh;background-color:#f5f7fa;padding:%?120?% %?40?% %?100?%;overflow:hidden}.container .pic_box[data-v-075e0a74]{position:relative;z-index:20;margin-bottom:%?50?%}.container .pic_box .pic[data-v-075e0a74]{width:%?280?%;height:%?280?%;border-radius:%?60?%;border:%?12?% solid #fff;object-fit:cover;box-shadow:0 %?4?% %?15?% rgba(0,0,0,.08)}.container .title[data-v-075e0a74]{font-size:42px;font-weight:700;color:#1f2937;margin-bottom:%?160?%;z-index:20;text-shadow:0 %?3?% %?10?% rgba(0,0,0,.07)}.bg-decor[data-v-075e0a74]{position:absolute;border-radius:50%;background:radial-gradient(circle,rgba(41,121,255,.15) 0,transparent 70%);-webkit-filter:blur(%?60?%);filter:blur(%?60?%);z-index:0;-webkit-animation:float-data-v-075e0a74 8s ease-in-out infinite alternate;animation:float-data-v-075e0a74 8s ease-in-out infinite alternate}.bg-decor-1[data-v-075e0a74]{width:%?600?%;height:%?600?%;top:%?100?%;left:%?-150?%;-webkit-animation-delay:0s;animation-delay:0s}.bg-decor-2[data-v-075e0a74]{width:%?500?%;height:%?500?%;bottom:%?100?%;right:%?-100?%;-webkit-animation-delay:2s;animation-delay:2s}.bg-decor-3[data-v-075e0a74]{width:%?300?%;height:%?300?%;top:60%;left:20%;-webkit-animation-delay:4s;animation-delay:4s}@-webkit-keyframes float-data-v-075e0a74{0%{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}100%{-webkit-transform:translate(%?30?%,%?-30?%) scale(1.05);transform:translate(%?30?%,%?-30?%) scale(1.05)}}@keyframes float-data-v-075e0a74{0%{-webkit-transform:translate(0) scale(1);transform:translate(0) scale(1)}100%{-webkit-transform:translate(%?30?%,%?-30?%) scale(1.05);transform:translate(%?30?%,%?-30?%) scale(1.05)}}.policy-container[data-v-075e0a74]{width:100%;background:hsla(0,0%,100%,.85);border-radius:%?30?%;padding:%?30?% %?25?%;margin-bottom:%?40?%;box-shadow:0 %?10?% %?30?% rgba(0,0,0,.05);-webkit-backdrop-filter:blur(%?10?%);backdrop-filter:blur(%?10?%);z-index:20}.policy-item[data-v-075e0a74]{display:flex;align-items:flex-start;margin-bottom:%?20?%}.policy-item[data-v-075e0a74]:last-child{margin-bottom:0}.policy-text[data-v-075e0a74]{font-size:13px;color:#1f2937;line-height:1.5}.required[data-v-075e0a74]{color:#fd2c28;margin-right:%?4?%}.policy-link[data-v-075e0a74]{color:#2979ff;font-weight:500;text-decoration:underline;text-underline-offset:%?4?%;margin:0 %?6?%;transition:all .2s ease}.policy-link[data-v-075e0a74]:hover{color:#1a68e0;text-decoration:none;text-shadow:0 0 %?10?% rgba(41,121,255,.3)}.agreement-box[data-v-075e0a74]{justify-content:center;margin-bottom:%?30?%;z-index:20}.check-box[data-v-075e0a74]{width:%?46?%;height:%?46?%;border-radius:50%;border:%?2?% solid #e5e7eb;background:#fff;align-items:center;justify-content:center;margin-right:%?14?%;transition:all .3s ease}.check-box.checked[data-v-075e0a74]{background:#2979ff;border-color:#2979ff;box-shadow:0 0 %?15?% rgba(41,121,255,.4)}.agreement-text[data-v-075e0a74]{font-size:13px;color:#1f2937}.btn[data-v-075e0a74]{background:#ffe610;width:100%;height:%?90?%;line-height:%?90?%;border-radius:%?45?%;font-size:16px;font-weight:600;text-align:center;z-index:20;transition:all .3s ease;box-shadow:0 %?10?% %?25?% rgba(255,230,16,.3);color:#333}.btn.disabled[data-v-075e0a74]{background:#ffed66;color:#888;box-shadow:none;cursor:not-allowed;opacity:.7}.btn[data-v-075e0a74]:not(.disabled):hover{-webkit-transform:translateY(%?-3?%);transform:translateY(%?-3?%);box-shadow:0 %?15?% %?30?% rgba(255,230,16,.4)}.btn[data-v-075e0a74]:not(.disabled):active{-webkit-transform:translateY(0);transform:translateY(0);box-shadow:0 %?8?% %?20?% rgba(255,230,16,.3)}@media (max-width:375px){.container .title[data-v-075e0a74]{font-size:36px;margin-bottom:%?120?%}.container .pic_box .pic[data-v-075e0a74]{width:%?240?%;height:%?240?%}.container .policy-text[data-v-075e0a74], .container .agreement-text[data-v-075e0a74]{font-size:12px}.container .check-box[data-v-075e0a74]{width:%?42?%;height:%?42?%}.container uv-icon[v-if="agree"][data-v-075e0a74]{size:20px!important}.container .btn[data-v-075e0a74]{font-size:15px;height:%?84?%;line-height:%?84?%}}',
          "",
        ]),
        (t.exports = a);
    },
    c3ea: function (t, a, e) {
      "use strict";
      e.d(a, "b", function () {
        return n;
      }),
        e.d(a, "c", function () {
          return o;
        }),
        e.d(a, "a", function () {
          return i;
        });
      var i = { uvIcon: e("1a07").default },
        n = function () {
          var t = this,
            a = t.$createElement,
            e = t._self._c || a;
          return e(
            "v-uni-view",
            { staticClass: "container" },
            [
              e("v-uni-view", { staticClass: "bg-decor bg-decor-1" }),
              e("v-uni-view", { staticClass: "bg-decor bg-decor-2" }),
              e("v-uni-view", { staticClass: "bg-decor bg-decor-3" }),
              e("v-uni-view", { staticClass: "pic_box" }, [
                e("img", {
                  staticClass: "pic",
                  attrs: { src: t.info.logo, alt: "logo" },
                }),
              ]),
              e("v-uni-view", { staticClass: "title" }, [
                t._v(t._s(t.info.name)),
              ]),
              e(
                "v-uni-view",
                { staticClass: "policy-container" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "policy-item" },
                    [
                      e("v-uni-view", { staticClass: "policy-text" }, [
                        e("span", { staticClass: "required" }, [t._v("*")]),
                        t._v("请阅读并同意 "),
                        e(
                          "span",
                          {
                            staticClass: "policy-link",
                            on: {
                              click: function (a) {
                                (arguments[0] = a = t.$handleEvent(a)),
                                  t.jump("/pages/user/article?id=3");
                              },
                            },
                          },
                          [t._v("《用户服务协议》")],
                        ),
                        e("span", [t._v("和")]),
                        e(
                          "span",
                          {
                            staticClass: "policy-link",
                            on: {
                              click: function (a) {
                                (arguments[0] = a = t.$handleEvent(a)),
                                  t.jump("/pages/user/article?id=2");
                              },
                            },
                          },
                          [t._v("《隐私政策》")],
                        ),
                        e("span", [t._v("。")]),
                      ]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "policy-item" },
                    [
                      e("v-uni-view", { staticClass: "policy-text" }, [
                        e("span", { staticClass: "required" }, [t._v("*")]),
                        t._v("请承诺您是成年人或在监护人的授权下使用。 "),
                      ]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "policy-item" },
                    [
                      e("v-uni-view", { staticClass: "policy-text" }, [
                        e("span", { staticClass: "required" }, [t._v("*")]),
                        t._v(
                          "本系统面向特定人群使用，您需要授权登录后才能使用。 ",
                        ),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e(
                "v-uni-view",
                {
                  staticClass: "agreement-box flex_box",
                  on: {
                    click: function (a) {
                      (arguments[0] = a = t.$handleEvent(a)),
                        t.toggleAgree.apply(void 0, arguments);
                    },
                  },
                },
                [
                  e(
                    "v-uni-view",
                    {
                      staticClass: "check-box flex_box",
                      class: { checked: t.agree },
                    },
                    [
                      t.agree
                        ? e("uv-icon", {
                            attrs: {
                              name: "checkmark",
                              color: "#fff",
                              size: "22",
                            },
                          })
                        : t._e(),
                    ],
                    1,
                  ),
                  e("v-uni-view", { staticClass: "agreement-text" }, [
                    t._v("已阅读并同意协议政策信息并允许获取我的信息"),
                  ]),
                ],
                1,
              ),
              e(
                "v-uni-view",
                {
                  staticClass: "btn",
                  class: { disabled: !t.agree },
                  attrs: { disabled: !t.agree },
                  on: {
                    click: function (a) {
                      (arguments[0] = a = t.$handleEvent(a)),
                        t.agreeRule.apply(void 0, arguments);
                    },
                  },
                },
                [t._v(" 开始使用 ")],
              ),
            ],
            1,
          );
        },
        o = [];
    },
  },
]);
//# sourceMappingURL=pages-index-agree.cc9463d2.js.map
