(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-active-turntable"],
  {
    "0621": function (i, t, e) {
      var n = e("9e12");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[i.i, n, ""]]),
        n.locals && (i.exports = n.locals);
      var a = e("967d").default;
      a("76cf0c9e", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1c8c": function (i, t, e) {
      "use strict";
      e.r(t);
      var n = e("51ea"),
        a = e("b56d");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (i) {
            e.d(t, i, function () {
              return a[i];
            });
          })(o);
      e("3408");
      var r = e("828b"),
        s = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "46e4e730",
          null,
          !1,
          n["a"],
          void 0,
        );
      t["default"] = s.exports;
    },
    "20f3": function (i, t, e) {
      "use strict";
      var n = e("8bdb"),
        a = e("5145");
      n(
        { target: "Array", proto: !0, forced: a !== [].lastIndexOf },
        { lastIndexOf: a },
      );
    },
    3408: function (i, t, e) {
      "use strict";
      var n = e("0621"),
        a = e.n(n);
      a.a;
    },
    "51ea": function (i, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return a;
      }),
        e.d(t, "c", function () {
          return o;
        }),
        e.d(t, "a", function () {
          return n;
        });
      var n = { uvPopup: e("ce8a").default, uvParse: e("c96a").default },
        a = function () {
          var i = this,
            t = i.$createElement,
            e = i._self._c || t;
          return e(
            "v-uni-view",
            { staticClass: "content" },
            [
              e(
                "v-uni-view",
                {
                  staticClass: "choujiang_box",
                  style: {
                    backgroundImage:
                      "url(" +
                      i.base_url +
                      "/files/imgs/active/turntable_bg.jpg)",
                  },
                },
                [
                  e("v-uni-view", { staticClass: "header_side_actions" }, [
                    e("img", {
                      staticClass: "side_action",
                      attrs: {
                        src: i.base_url + "/files/imgs/active/jinnang.png",
                      },
                      on: {
                        click: function (t) {
                          (arguments[0] = t = i.$handleEvent(t)),
                            i.jinNangFun.apply(void 0, arguments);
                        },
                      },
                    }),
                    e("img", {
                      staticClass: "side_action",
                      attrs: {
                        src: i.base_url + "/files/imgs/active/dingdan.png",
                        alt: "",
                      },
                      on: {
                        click: function (t) {
                          (arguments[0] = t = i.$handleEvent(t)),
                            i.jump("/pages_sub1/order/index");
                        },
                      },
                    }),
                  ]),
                  i.remain_count > 0
                    ? e(
                        "v-uni-view",
                        { staticClass: "top_remain_count" },
                        [
                          e("v-uni-text", { staticClass: "remain_label" }, [
                            i._v("剩余抽奖次数："),
                          ]),
                          e("v-uni-text", { staticClass: "remain_value" }, [
                            i._v(i._s(i.remain_count) + "次"),
                          ]),
                        ],
                        1,
                      )
                    : i._e(),
                  e(
                    "v-uni-view",
                    { staticClass: "pic_box" },
                    [
                      e("img", {
                        staticClass: "dizuo",
                        attrs: {
                          src: i.base_url + "/files/imgs/active/dizuo2.png",
                        },
                      }),
                      e(
                        "v-uni-view",
                        {
                          ref: "rotate",
                          staticClass: "turn_box",
                          style: "transform: rotate(" + i.angle + "deg);",
                        },
                        [
                          e("img", {
                            staticClass: "zhuanpan",
                            attrs: {
                              src:
                                i.base_url + "/files/imgs/active/zhuanpan2.png",
                            },
                          }),
                          e(
                            "v-uni-view",
                            { staticClass: "prize_box" },
                            i._l(i.list, function (t, n) {
                              return e(
                                "v-uni-view",
                                { key: t.id, staticClass: "neirong" },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "prize" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "jiangpin" },
                                        [i._v(i._s(t.title))],
                                      ),
                                      e("img", {
                                        staticClass: "goods",
                                        attrs: { src: t.thumb, alt: "" },
                                      }),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              );
                            }),
                            1,
                          ),
                        ],
                        1,
                      ),
                      e("img", {
                        staticClass: "zhizhen",
                        attrs: {
                          src: i.base_url + "/files/imgs/active/zhizhen.png",
                        },
                      }),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "button_box" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "prizedraw_box" },
                        [
                          i.remain_count > 0 || 1 == i.order_type
                            ? e(
                                "v-uni-view",
                                { staticClass: "choujiang_btn_box" },
                                [
                                  e(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "choujiang_btn_row choujiang_btn_row_single",
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        {
                                          staticClass:
                                            "choujiang_btn choujiang_btn_single",
                                          class: {
                                            disabled:
                                              i.isRotate ||
                                              (i.remain_count > 0 &&
                                                i.remain_count < 1),
                                          },
                                          on: {
                                            click: function (t) {
                                              (arguments[0] = t =
                                                i.$handleEvent(t)),
                                                i.subData(1);
                                            },
                                          },
                                        },
                                        [
                                          e("v-uni-image", {
                                            staticClass:
                                              "btn_img btn_img_single",
                                            attrs: {
                                              src:
                                                i.base_url +
                                                "/files/imgs/active/chojing1.png",
                                              mode: "widthFix",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                  e(
                                    "v-uni-view",
                                    {
                                      staticClass:
                                        "choujiang_btn_row choujiang_btn_row_multi",
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        {
                                          staticClass: "choujiang_btn",
                                          class: {
                                            disabled:
                                              i.isRotate ||
                                              (i.remain_count > 0 &&
                                                i.remain_count < 3),
                                          },
                                          on: {
                                            click: function (t) {
                                              (arguments[0] = t =
                                                i.$handleEvent(t)),
                                                i.subData(3);
                                            },
                                          },
                                        },
                                        [
                                          e("v-uni-image", {
                                            staticClass: "btn_img",
                                            attrs: {
                                              src:
                                                i.base_url +
                                                "/files/imgs/active/chojing3.png",
                                              mode: "widthFix",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                      e(
                                        "v-uni-view",
                                        {
                                          staticClass: "choujiang_btn",
                                          class: {
                                            disabled:
                                              i.isRotate ||
                                              (i.remain_count > 0 &&
                                                i.remain_count < 9),
                                          },
                                          on: {
                                            click: function (t) {
                                              (arguments[0] = t =
                                                i.$handleEvent(t)),
                                                i.subData(9);
                                            },
                                          },
                                        },
                                        [
                                          e("v-uni-image", {
                                            staticClass: "btn_img",
                                            attrs: {
                                              src:
                                                i.base_url +
                                                "/files/imgs/active/chojing9.png",
                                              mode: "widthFix",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : e(
                                "v-uni-view",
                                { staticClass: "yichoujiang" },
                                [
                                  e("v-uni-image", {
                                    staticClass: "yichoujiang_img",
                                    attrs: {
                                      src:
                                        i.base_url +
                                        "/files/imgs/active/yiyongjin.png",
                                      mode: "widthFix",
                                    },
                                  }),
                                ],
                                1,
                              ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e(
                "uv-popup",
                {
                  ref: "rulesPopup",
                  attrs: {
                    mode: "center",
                    bgColor: "none",
                    overlayOpacity: "0.65",
                    closeable: !0,
                  },
                },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "rules_box" },
                    [
                      e("v-uni-view", { staticClass: "title" }, [
                        i._v(i._s(i.rule.rule_title)),
                      ]),
                      e(
                        "v-uni-view",
                        { staticClass: "neirong" },
                        [
                          e("uv-parse", {
                            attrs: { content: i.rule.rule_des },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e(
                "uv-popup",
                {
                  ref: "jiangpinPopup",
                  attrs: {
                    mode: "center",
                    bgColor: "none",
                    overlayOpacity: "0.65",
                    "close-on-click-overlay": !1,
                  },
                },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "jiangpin_pop" },
                    [
                      e("img", {
                        staticClass: "zhuangshitu",
                        attrs: {
                          src: i.base_url + "/files/imgs/active/turn_gift.png",
                        },
                      }),
                      e(
                        "v-uni-view",
                        { staticClass: "zhongjiang_box" },
                        [
                          e("v-uni-view", { staticClass: "title" }, [
                            i._v("恭喜您抽中"),
                          ]),
                          i.prizes_list.length > 0
                            ? e(
                                "v-uni-view",
                                {
                                  staticClass: "prizes_grid",
                                  class: {
                                    "single-prize": 1 === i.prizes_list.length,
                                  },
                                },
                                i._l(i.prizes_list, function (t, n) {
                                  return e(
                                    "v-uni-view",
                                    {
                                      key: n,
                                      staticClass: "prize_item",
                                      class: {
                                        "large-prize":
                                          1 === i.prizes_list.length,
                                      },
                                    },
                                    [
                                      e("img", {
                                        staticClass: "pic",
                                        attrs: { src: t.thumb },
                                      }),
                                      e(
                                        "v-uni-view",
                                        { staticClass: "name uv-line-2" },
                                        [i._v(i._s(t.title))],
                                      ),
                                    ],
                                    1,
                                  );
                                }),
                                1,
                              )
                            : i._e(),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "btn",
                              on: {
                                click: function (t) {
                                  (arguments[0] = t = i.$handleEvent(t)),
                                    i.confirm.apply(void 0, arguments);
                                },
                              },
                            },
                            [i._v("开心收下")],
                          ),
                        ],
                        1,
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
    "9e12": function (i, t, e) {
      var n = e("c86c");
      (t = n(!1)),
        t.push([
          i.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.choujiang_box[data-v-46e4e730]{height:100vh;overflow:hidden;position:relative;background-size:100% 100%;background-position:50%;background-repeat:no-repeat}.choujiang_box .header_side_actions[data-v-46e4e730]{position:absolute;top:%?245?%;right:%?26?%;display:flex;flex-direction:column;align-items:center;gap:%?18?%;z-index:12}.choujiang_box .header_side_actions .side_action[data-v-46e4e730]{width:50px;height:50px}.choujiang_box .top_remain_count[data-v-46e4e730]{position:absolute;top:200px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);display:flex;align-items:center;justify-content:center;width:200px;height:40px;padding:0 16px;background:rgba(58,28,48,.28);border:2px solid hsla(0,0%,100%,.18);border-radius:999px;box-shadow:0 6px 18px rgba(58,28,48,.12);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);z-index:11}.choujiang_box .top_remain_count .remain_label[data-v-46e4e730]{color:hsla(0,0%,100%,.95);font-size:14px;font-weight:700;line-height:1}.choujiang_box .top_remain_count .remain_value[data-v-46e4e730]{margin-left:8px;color:#ffe16a;font-size:20px;font-weight:700;line-height:1;text-shadow:0 2px 8px rgba(255,215,104,.25)}.choujiang_box .pic_box[data-v-46e4e730]{display:flex;align-items:center;justify-content:center;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:23.8%;width:%?680?%;height:%?776?%}.choujiang_box .pic_box > img[data-v-46e4e730]{position:absolute;height:auto}.choujiang_box .pic_box .dizuo[data-v-46e4e730]{width:%?680?%;height:%?776?%}.choujiang_box .pic_box .zhizhen[data-v-46e4e730]{width:%?190?%;height:%?224?%;top:%?204?%;z-index:10}.choujiang_box .pic_box .turn_box[data-v-46e4e730]{z-index:9;position:absolute;top:%?32?%;display:flex;justify-content:center;align-items:center;width:%?615?%;height:%?615?%;border-radius:50%;transition:-webkit-transform 4.5s ease-in-out;transition:transform 4.5s ease-in-out;transition:transform 4.5s ease-in-out,-webkit-transform 4.5s ease-in-out}.choujiang_box .pic_box .turn_box .zhuanpan[data-v-46e4e730]{position:absolute}.choujiang_box .pic_box .turn_box .prize_box[data-v-46e4e730]{position:absolute;width:%?615?%;height:%?615?%;border-radius:50%}.choujiang_box .pic_box .turn_box .prize_box .neirong[data-v-46e4e730]{width:%?550?%;height:%?550?%;position:absolute;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%);bottom:5%;-webkit-transform-origin:0 100%;transform-origin:0 100%}.choujiang_box .pic_box .turn_box .prize_box .neirong .prize[data-v-46e4e730]{width:100%;height:100%;display:flex;flex-direction:column;align-items:center}.choujiang_box .pic_box .turn_box .prize_box .neirong .prize .jiangpin[data-v-46e4e730]{font-size:13px;color:#d65535;margin-bottom:%?20?%;white-space:normal;overflow:hidden;word-break:break-all;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;width:%?160?%;text-align:center;line-height:1.25;min-height:%?64?%}.choujiang_box .pic_box .turn_box .prize_box .neirong .prize .goods[data-v-46e4e730]{width:%?80?%;height:%?80?%;border-radius:%?8?%}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(1) .prize[data-v-46e4e730]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(2) .prize[data-v-46e4e730]{-webkit-transform:rotate(45deg);transform:rotate(45deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(3) .prize[data-v-46e4e730]{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(4) .prize[data-v-46e4e730]{-webkit-transform:rotate(135deg);transform:rotate(135deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(5) .prize[data-v-46e4e730]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(6) .prize[data-v-46e4e730]{-webkit-transform:rotate(225deg);transform:rotate(225deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(7) .prize[data-v-46e4e730]{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.choujiang_box .pic_box .turn_box .prize_box .neirong:nth-child(8) .prize[data-v-46e4e730]{-webkit-transform:rotate(315deg);transform:rotate(315deg)}.choujiang_box .button_box[data-v-46e4e730]{position:absolute;display:flex;justify-content:center;align-items:center;bottom:7.5%;width:%?1050?%;left:50%;-webkit-transform:translate(-50%);transform:translate(-50%)}.choujiang_box .button_box .prizedraw_box .yichoujiang[data-v-46e4e730]{text-align:center;display:flex;justify-content:center;align-items:center;width:%?1050?%}.choujiang_box .button_box .prizedraw_box .yichoujiang .yichoujiang_img[data-v-46e4e730]{width:%?390?%;height:auto;display:block}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box[data-v-46e4e730]{display:flex;flex-direction:column;align-items:center;row-gap:%?16?%;width:%?1050?%}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn_row[data-v-46e4e730]{display:flex;justify-content:center;align-items:center;width:100%}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn_row_single[data-v-46e4e730]{justify-content:center}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn_row_multi[data-v-46e4e730]{-webkit-column-gap:%?12?%;column-gap:%?12?%}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn[data-v-46e4e730]{display:flex;align-items:center;justify-content:center;width:%?400?%}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn.choujiang_btn_single[data-v-46e4e730]{width:%?390?%}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn .btn_img[data-v-46e4e730]{width:%?400?%;height:auto;display:block}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn .btn_img.btn_img_single[data-v-46e4e730]{width:%?390?%}.choujiang_box .button_box .prizedraw_box .choujiang_btn_box .choujiang_btn.disabled[data-v-46e4e730]{-webkit-filter:grayscale(100%);filter:grayscale(100%);opacity:.75}.rules_box[data-v-46e4e730]{background:#fff;border-radius:%?30?%;padding:%?0?% %?30?% %?30?%}.rules_box .title[data-v-46e4e730]{border-bottom:%?2?% solid #eee;margin-bottom:%?30?%;font-weight:700;padding:%?30?% 0;font-size:15px;text-align:center}.rules_box .neirong[data-v-46e4e730]{max-height:%?740?%;min-height:%?350?%;overflow-y:scroll}.jiangpin_pop .zhuangshitu[data-v-46e4e730]{width:%?480?%;height:%?131?%;margin:0 auto %?-22?%;position:relative;z-index:9}.jiangpin_pop .zhongjiang_box[data-v-46e4e730]{position:relative;z-index:10;background-image:linear-gradient(180deg,#fff,#feeabf);background-repeat:no-repeat;margin:%?20?% auto;width:%?580?%;min-height:%?550?%;border-radius:%?50?%;box-shadow:0 0 0 %?10?% hsla(0,0%,100%,.6);text-align:center}.jiangpin_pop .zhongjiang_box .title[data-v-46e4e730]{font-size:25px;font-weight:700;color:#ff5703;margin:%?40?% 0 %?42?%}.jiangpin_pop .zhongjiang_box .prizes_grid[data-v-46e4e730]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?16?%;padding:0 %?20?%;max-height:%?600?%;overflow-y:auto;justify-items:center}.jiangpin_pop .zhongjiang_box .prize_item[data-v-46e4e730]{display:flex;flex-direction:column;align-items:center;background:#fff;border-radius:%?16?%;padding:%?16?% 0;border:%?2?% solid gold}.jiangpin_pop .zhongjiang_box .prize_item .pic[data-v-46e4e730]{width:%?100?%;height:%?100?%;border-radius:%?8?%;margin-bottom:%?8?%}.jiangpin_pop .zhongjiang_box .prize_item .name[data-v-46e4e730]{color:#fd7c00;font-size:14px;width:%?180?%;text-align:center}.jiangpin_pop .zhongjiang_box .prize_item.large-prize[data-v-46e4e730]{padding:%?30?%;border-width:%?4?%}.jiangpin_pop .zhongjiang_box .prize_item.large-prize .pic[data-v-46e4e730]{width:%?200?%;height:%?200?%;margin-bottom:%?16?%}.jiangpin_pop .zhongjiang_box .prize_item.large-prize .name[data-v-46e4e730]{font-size:18px;width:%?300?%;font-weight:700}.jiangpin_pop .zhongjiang_box .single-prize[data-v-46e4e730]{grid-template-columns:1fr;justify-items:center;padding:%?20?% 0}.jiangpin_pop .zhongjiang_box .pic[data-v-46e4e730]{width:%?155?%;height:%?155?%;border-radius:%?10?%;margin:0 auto %?18?%}.jiangpin_pop .zhongjiang_box .name[data-v-46e4e730]{color:#fd7c00;font-size:17px}.jiangpin_pop .zhongjiang_box .btn[data-v-46e4e730]{margin:%?30?% auto %?20?%;background-color:#ff6a00;border-radius:%?50?%;width:55%;height:%?90?%;border:%?6?% solid #ffb887;color:#fff;font-size:20px;text-align:center;line-height:%?74?%}',
          "",
        ]),
        (i.exports = t);
    },
    a8ac: function (i, t, e) {
      "use strict";
      e("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        e("bf0f"),
        e("2797"),
        e("aa9c");
      var n = e("e74a"),
        a = e("15b8"),
        o = {
          data: function () {
            return {
              rule: [],
              list: [],
              info: [],
              chain: !0,
              tabs: [],
              select_tab: 1,
              selected: 1,
              current: 0,
              choujiang: 0,
              isRotate: !1,
              remain_count: 0,
              total_count: 0,
              drawn_count: 0,
              angle: 0,
              num: 3,
              goods: [],
              raffle_id: 0,
              base_url: a.baseUrl,
              prizes_list: [],
              draw_times: 1,
              current_draw: 0,
              isSubmittingDraw: !1,
              order_type: 0,
            };
          },
          onPullDownRefresh: function () {
            var i = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  i.getRaffleOrder(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          onLoad: function (i) {
            console.log(a.baseUrl),
              (this.raffle_id = i.raffle_id),
              this.getRaffleOrder();
          },
          onShow: function () {},
          methods: {
            jinNangFun: function () {
              this.$refs.rulesPopup.open();
            },
            rotate: function () {
              var i = this;
              if (!this.isRotate) {
                (this.isRotate = !0), this.playLocalAudio();
                var t = this.list.length,
                  e = 360 / t,
                  n = (360 - this.num * e) % 360,
                  a = (this.angle || 0) % 360,
                  o = n - a;
                o <= 0 && (o += 360),
                  (this.angle = (this.angle || 0) + (1800 + o)),
                  setTimeout(function () {
                    (i.isRotate = !1),
                      (i.choujiang = 1),
                      setTimeout(function () {
                        i.$refs.jiangpinPopup.open();
                      }, 550);
                  }, 4500);
              }
            },
            chouJiangFun: function () {
              (this.choujiang = !this.choujiang), this.rotate();
            },
            getRaffleOrder: function () {
              var i = this;
              uni.showLoading({ title: "加载中.." }),
                (0, n.send)(
                  "/wechat/RaffleOrder/getRaffleOrder",
                  { label: "order", raffle_id: this.raffle_id },
                  !1,
                ).then(function (t) {
                  uni.hideLoading();
                  var e = t.status,
                    n = t.msg,
                    a = t.data;
                  return 4011 == e
                    ? ((i.choujiang = 1), uni.$uv.toast(n))
                    : 1 != e
                      ? uni.$uv.toast(n)
                      : ((i.list = a.list),
                        (i.info = a.info),
                        (i.rule = a.rule),
                        a.rule && 2 == a.rule.style
                          ? uni.redirectTo({
                              url:
                                "/pages_sub1/active/lucky_draw?raffle_id=" +
                                i.raffle_id,
                            })
                          : (void 0 !== a.total_count &&
                              ((i.total_count = a.total_count),
                              (i.drawn_count = a.drawn_count),
                              (i.remain_count = a.total_count - a.drawn_count)),
                            void (
                              void 0 !== a.order_type &&
                              (i.order_type = a.order_type)
                            )));
                });
            },
            subData: function () {
              var i = this,
                t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : 1;
              if (!this.isRotate && !this.isSubmittingDraw) {
                if (0 == this.remain_count)
                  return 1 == this.order_type
                    ? void uni.navigateTo({
                        url:
                          "/pages/pay/raffle?id=" +
                          this.raffle_id +
                          "&draw_num=" +
                          t,
                      })
                    : (this.getRaffleOrder(),
                      uni.$uv.toast("剩余抽奖次数不足"));
                if (this.remain_count < t)
                  return uni.$uv.toast("剩余抽奖次数不足");
                (this.isSubmittingDraw = !0),
                  (this.draw_times = t),
                  (this.current_draw = 0),
                  (this.prizes_list = []),
                  (0, n.send)(
                    "/wechat/RaffleOrder/addRaffleOrder",
                    { label: "order", raffle_id: this.raffle_id, times: t },
                    !1,
                  )
                    .then(function (e) {
                      i.isSubmittingDraw = !1;
                      var n = e.status,
                        a = e.msg,
                        o = e.data;
                      if (1 != n) return uni.$uv.toast(a);
                      (i.goods = o.goods),
                        o.prizes &&
                        o.prizes.length > 0 &&
                        void 0 !== o.prizes[0].num
                          ? (i.num = o.prizes[0].num)
                          : (i.num = o.num),
                        o.prizes &&
                          o.prizes.length > 0 &&
                          o.prizes.forEach(function (t) {
                            i.prizes_list.push(t.goods);
                          }),
                        (i.remain_count -= t),
                        i.rotate();
                    })
                    .catch(function () {
                      i.isSubmittingDraw = !1;
                    });
              }
            },
            confirm: function () {
              this.remain_count > 0
                ? (this.$refs.jiangpinPopup.close(), (this.choujiang = 0))
                : uni.redirectTo({ url: "/pages_sub1/order/index" });
            },
            jump: function (i) {
              uni.navigateTo({ url: i });
            },
            playLocalAudio: function () {
              var i = uni.createInnerAudioContext();
              (i.src = this.base_url + "/files/sound/sound1.mp3"),
                (i.playbackRate = 0.85),
                i.play(),
                i.onError(function (i) {
                  console.error("音频播放失败：", i);
                });
            },
          },
        };
      t.default = o;
    },
    b56d: function (i, t, e) {
      "use strict";
      e.r(t);
      var n = e("a8ac"),
        a = e.n(n);
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (i) {
            e.d(t, i, function () {
              return n[i];
            });
          })(o);
      t["default"] = a.a;
    },
  },
]);
//# sourceMappingURL=pages-active-turntable.34d86a7c.js.map
