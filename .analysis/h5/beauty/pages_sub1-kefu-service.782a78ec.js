(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-kefu-service"],
  {
    "26c4": function (t, e, i) {
      "use strict";
      var a = i("5132"),
        n = i.n(a);
      n.a;
    },
    "31a6": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticClass: "uv-textarea",
              class: t.textareaClass,
              style: [t.textareaStyle],
            },
            [
              i("v-uni-textarea", {
                staticClass: "uv-textarea__field",
                style: [
                  { height: t.autoHeight ? "auto" : t.$uv.addUnit(t.height) },
                  t.$uv.addStyle(t.textStyle),
                ],
                attrs: {
                  value: t.innerValue,
                  placeholder: t.placeholder,
                  "placeholder-style": t.$uv.addStyle(
                    t.placeholderStyle,
                    "string",
                  ),
                  "placeholder-class": t.placeholderClass,
                  disabled: t.disabled,
                  focus: t.focus,
                  autoHeight: t.autoHeight,
                  fixed: t.fixed,
                  cursorSpacing: t.cursorSpacing,
                  cursor: t.cursor,
                  showConfirmBar: t.showConfirmBar,
                  selectionStart: t.selectionStart,
                  selectionEnd: t.selectionEnd,
                  adjustPosition: t.adjustPosition,
                  disableDefaultPadding: t.disableDefaultPadding,
                  holdKeyboard: t.holdKeyboard,
                  maxlength: t.maxlen,
                  confirmType: t.confirmType,
                  ignoreCompositionEvent: t.ignoreCompositionEvent,
                  "confirm-hold": t.confirmHold,
                },
                on: {
                  focus: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.onFocus.apply(void 0, arguments);
                  },
                  blur: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.onBlur.apply(void 0, arguments);
                  },
                  linechange: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.onLinechange.apply(void 0, arguments);
                  },
                  input: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.onInput.apply(void 0, arguments);
                  },
                  confirm: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.onConfirm.apply(void 0, arguments);
                  },
                  keyboardheightchange: function (e) {
                    (arguments[0] = e = t.$handleEvent(e)),
                      t.onKeyboardheightchange.apply(void 0, arguments);
                  },
                },
              }),
              t.count && -1 != t.maxlen
                ? i(
                    "v-uni-text",
                    {
                      staticClass: "uv-textarea__count",
                      style: [
                        {
                          "background-color": t.disabled
                            ? "transparent"
                            : "#fff",
                        },
                        t.$uv.addStyle(t.countStyle),
                      ],
                    },
                    [t._v(t._s(t.getCount) + "/" + t._s(t.maxlen))],
                  )
                : t._e(),
            ],
            1,
          );
        },
        n = [];
    },
    "3a07": function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-c2d489ac], uni-scroll-view[data-v-c2d489ac], uni-swiper-item[data-v-c2d489ac]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-divider[data-v-c2d489ac]{display:flex;flex-direction:row;flex-direction:row;align-items:center;margin:15px 0}.uv-divider__text[data-v-c2d489ac]{margin:0 15px}.uv-divider__dot[data-v-c2d489ac]{font-size:12px;margin:0 12px;color:#c0c4cc}',
          "",
        ]),
        (t.exports = e);
    },
    "3e65": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("31a6"),
        n = i("96f8");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      i("b24f");
      var o = i("828b"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "26fd47e8",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    4589: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("bc7d"),
        n = i("4ab8");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      i("26c4");
      var o = i("828b"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "c2d489ac",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    "4ab8": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6811"),
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
    "4bc9": function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uv-border[data-v-26fd47e8]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.uv-border-bottom[data-v-26fd47e8]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}uni-view[data-v-26fd47e8], uni-scroll-view[data-v-26fd47e8], uni-swiper-item[data-v-26fd47e8]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-textarea[data-v-26fd47e8]{border-radius:4px;background-color:#fff;position:relative;display:flex;flex-direction:row;flex:1;padding:9px}.uv-textarea--radius[data-v-26fd47e8]{border-radius:4px}.uv-textarea--no-radius[data-v-26fd47e8]{border-radius:0}.uv-textarea--disabled[data-v-26fd47e8]{background-color:#f5f7fa}.uv-textarea__field[data-v-26fd47e8]{flex:1;font-size:15px;color:#606266;width:100%}.uv-textarea__count[data-v-26fd47e8]{position:absolute;right:5px;bottom:2px;font-size:12px;color:#909193;background-color:#fff;padding:1px 4px}',
          "",
        ]),
        (t.exports = e);
    },
    5132: function (t, e, i) {
      var a = i("3a07");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("71a84af6", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "56da": function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var n,
        r,
        o = a(i("9b1b")),
        s = {
          props: (0, o.default)(
            {
              value: { type: [String, Number], default: "" },
              modelValue: { type: [String, Number], default: "" },
              placeholder: { type: [String, Number], default: "" },
              placeholderClass: {
                type: String,
                default: "textarea-placeholder",
              },
              placeholderStyle: {
                type: [String, Object],
                default: "color: #c0c4cc",
              },
              height: { type: [String, Number], default: 70 },
              confirmType: { type: String, default: "return" },
              disabled: { type: Boolean, default: !1 },
              count: { type: Boolean, default: !1 },
              focus: { type: Boolean, default: !1 },
              autoHeight: { type: Boolean, default: !1 },
              fixed: { type: Boolean, default: !1 },
              cursorSpacing: { type: Number, default: 0 },
              cursor: { type: [String, Number], default: "" },
              showConfirmBar: { type: Boolean, default: !0 },
              selectionStart: { type: Number, default: -1 },
              selectionEnd: { type: Number, default: -1 },
              adjustPosition: { type: Boolean, default: !0 },
              disableDefaultPadding: { type: Boolean, default: !1 },
              holdKeyboard: { type: Boolean, default: !1 },
              maxlength: { type: [String, Number], default: 140 },
              border: { type: String, default: "surround" },
              formatter: { type: [Function, null], default: null },
              ignoreCompositionEvent: { type: Boolean, default: !0 },
              confirmHold: { type: Boolean, default: !1 },
              textStyle: { type: [Object, String], default: function () {} },
              countStyle: { type: [Object, String], default: function () {} },
            },
            null === (n = uni.$uv) ||
              void 0 === n ||
              null === (r = n.props) ||
              void 0 === r
              ? void 0
              : r.textarea,
          ),
        };
      e.default = s;
    },
    "59a3": function (t, e, i) {
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
          uvDivider: i("4589").default,
          uvRadioGroup: i("af45").default,
          uvRadio: i("636d").default,
          uvTextarea: i("3e65").default,
        },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "content" },
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
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.copyOrderNum(t.order.order_no);
                        },
                      },
                    },
                    [
                      i("v-uni-view", {}, [t._v("订单编号：")]),
                      i("v-uni-view", { staticClass: "num" }, [
                        t._v(t._s(t.order.order_no)),
                      ]),
                      i("v-uni-view", { staticClass: "copy_btn" }, [
                        t._v("复制"),
                      ]),
                    ],
                    1,
                  ),
                  i("v-uni-view", { staticClass: "status" }, [
                    t._v(t._s(t.order.status_text)),
                  ]),
                ],
                1,
              ),
              i(
                "v-uni-view",
                {
                  staticClass: "goods_msg flex_box",
                  on: {
                    click: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.jump("/pages/index/goods?id=" + t.order.goods_id);
                    },
                  },
                },
                [
                  t.order.goods_thumb
                    ? i("img", {
                        staticClass: "img",
                        attrs: { src: t.order.goods_thumb },
                      })
                    : i("img", {
                        staticClass: "img",
                        attrs: {
                          src: t.order.goods ? t.order.goods.thumb : "",
                        },
                      }),
                  i(
                    "v-uni-view",
                    { staticClass: "txt" },
                    [
                      i("v-uni-view", { staticClass: "name uv-line-2" }, [
                        t._v(t._s(t.order.goods_name)),
                      ]),
                      i(
                        "v-uni-view",
                        { staticClass: "price_box flex_box" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "price" },
                            [
                              i("v-uni-text", { staticClass: "unit" }, [
                                t._v("￥"),
                              ]),
                              i("v-uni-text", [t._v(t._s(t.order.money))]),
                            ],
                            1,
                          ),
                          i("v-uni-view", { staticClass: "num" }, [
                            t._v("x " + t._s(t.order.num)),
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
              i("uv-divider", {
                staticClass: "block_title",
                attrs: { text: "打手服务证明", textSize: "13" },
              }),
              i(
                "v-uni-view",
                { staticClass: "reason_box flex_box" },
                [
                  i("v-uni-view", { staticClass: "tit" }, [t._v("证明文字")]),
                  i("v-uni-view", { staticClass: "txt img_box" }, [
                    t._v(" " + t._s(t.order.service_txt) + " "),
                  ]),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "reason_box flex_box" },
                [
                  i("v-uni-view", { staticClass: "tit" }, [t._v("证明图片")]),
                  i(
                    "v-uni-view",
                    { staticClass: "txt img_box" },
                    t._l(t.order.service_imgs, function (e, a) {
                      return i("img", {
                        key: a,
                        attrs: { text: e, src: e },
                        on: {
                          click: function (i) {
                            (arguments[0] = i = t.$handleEvent(i)),
                              t.previewImage(e, t.order.service_imgs);
                          },
                        },
                      });
                    }),
                    0,
                  ),
                ],
                1,
              ),
              i("uv-divider", {
                staticClass: "block_title",
                attrs: { text: "问题单证明", textSize: "13" },
              }),
              i(
                "v-uni-view",
                { staticClass: "reason_box flex_box" },
                [
                  i("v-uni-view", { staticClass: "tit" }, [t._v("描述文字")]),
                  i("v-uni-view", { staticClass: "txt img_box" }, [
                    t._v(" " + t._s(t.order.problem_des) + " "),
                  ]),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "reason_box flex_box" },
                [
                  i("v-uni-view", { staticClass: "tit" }, [t._v("证明图片")]),
                  i(
                    "v-uni-view",
                    { staticClass: "txt img_box" },
                    t._l(t.order.problem_imgs, function (e, a) {
                      return i("img", {
                        key: a,
                        attrs: { text: e, src: e },
                        on: {
                          click: function (i) {
                            (arguments[0] = i = t.$handleEvent(i)),
                              t.previewImage(e, t.order.problem_imgs);
                          },
                        },
                      });
                    }),
                    0,
                  ),
                ],
                1,
              ),
              i("uv-divider", {
                staticClass: "block_title",
                attrs: { text: "买家申请信息", textSize: "13" },
              }),
              i(
                "v-uni-view",
                [
                  i(
                    "v-uni-view",
                    { staticClass: "reason_box flex_box remarks_box" },
                    [
                      i("v-uni-view", { staticClass: "tit" }, [
                        t._v("申请理由"),
                      ]),
                      i("v-uni-view", { staticClass: "txt" }, [
                        t._v(t._s(t.service.des)),
                      ]),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "reason_box flex_box" },
                    [
                      i("v-uni-view", { staticClass: "tit" }, [
                        t._v("上传图片"),
                      ]),
                      i(
                        "v-uni-view",
                        { staticClass: "txt img_box" },
                        t._l(t.service.pics, function (e, a) {
                          return i("img", {
                            key: a,
                            attrs: { text: e, src: e },
                            on: {
                              click: function (i) {
                                (arguments[0] = i = t.$handleEvent(i)),
                                  t.previewImage(e, t.service.pics);
                              },
                            },
                          });
                        }),
                        0,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "reason_box flex_box remarks_box" },
                    [
                      i("v-uni-view", { staticClass: "tit" }, [
                        t._v("申请时间"),
                      ]),
                      i("v-uni-view", { staticClass: "txt" }, [
                        t._v(
                          t._s(t.service.add_time ? t.service.add_time : "-"),
                        ),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              2 == t.status
                ? i(
                    "v-uni-view",
                    [
                      i("uv-divider", {
                        staticClass: "block_title",
                        attrs: { text: "客服审核信息", textSize: "13" },
                      }),
                      i(
                        "v-uni-view",
                        { staticClass: "reason_box flex_box remarks_box" },
                        [
                          i("v-uni-view", { staticClass: "tit" }, [
                            t._v("审核状态"),
                          ]),
                          i("v-uni-view", { staticClass: "txt" }, [
                            t._v(
                              t._s(
                                1 == t.service.kefu_status
                                  ? "已同意"
                                  : "已拒绝",
                              ),
                            ),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "reason_box flex_box remarks_box" },
                        [
                          i("v-uni-view", { staticClass: "tit" }, [
                            t._v("审核理由"),
                          ]),
                          i("v-uni-view", { staticClass: "txt" }, [
                            t._v(t._s(t.service.kefu_des)),
                          ]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "reason_box flex_box remarks_box" },
                        [
                          i("v-uni-view", { staticClass: "tit" }, [
                            t._v("审核时间"),
                          ]),
                          i("v-uni-view", { staticClass: "txt" }, [
                            t._v(t._s(t.service.kefu_time)),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : t._e(),
              0 == t.service.kefu_status && 1 == t.kefu.verify
                ? i(
                    "v-uni-view",
                    [
                      i("uv-divider", {
                        staticClass: "block_title",
                        attrs: { text: "审核信息", textSize: "13" },
                      }),
                      i(
                        "v-uni-view",
                        { staticClass: "reason_box flex_box remarks_box" },
                        [
                          i("v-uni-view", { staticClass: "tit" }, [
                            t._v("审核状态"),
                          ]),
                          i(
                            "v-uni-view",
                            { staticClass: "txt" },
                            [
                              i(
                                "uv-radio-group",
                                {
                                  model: {
                                    value: t.verify_status,
                                    callback: function (e) {
                                      t.verify_status = e;
                                    },
                                    expression: "verify_status",
                                  },
                                },
                                t._l(t.verify_list, function (t, e) {
                                  return i("uv-radio", {
                                    key: e,
                                    staticStyle: { "margin-right": "16px" },
                                    attrs: { label: t.label, name: t.name },
                                  });
                                }),
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
                        { staticClass: "reason_box flex_box remarks_box" },
                        [
                          i("v-uni-view", { staticClass: "tit" }, [
                            t._v("审核理由"),
                          ]),
                          i(
                            "v-uni-view",
                            { staticClass: "txt" },
                            [
                              i("uv-textarea", {
                                staticStyle: { "padding-right": "18px" },
                                attrs: {
                                  placeholder: "请填写平台审核理由",
                                  count: !0,
                                  maxlength: "140",
                                },
                                model: {
                                  value: t.verify_remark,
                                  callback: function (e) {
                                    t.verify_remark = e;
                                  },
                                  expression: "verify_remark",
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
                : t._e(),
              i(
                "v-uni-view",
                { staticClass: "btn_box" },
                [
                  1 == t.status && 1 == t.kefu.verify
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "sub_btn",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.submit.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v("立即审核")],
                      )
                    : t._e(),
                ],
                1,
              ),
            ],
            1,
          );
        },
        r = [];
    },
    "64d8": function (t, e, i) {
      var a = i("4bc9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("52a068ac", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    6811: function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var n = a(i("4d8f0")),
        r = a(i("9463")),
        o = a(i("caf4")),
        s = {
          name: "uv-divider",
          mixins: [n.default, r.default, o.default],
          emits: ["click"],
          computed: {
            textStyle: function () {
              var t = {};
              return (
                (t.fontSize = this.$uv.addUnit(this.textSize)),
                (t.color = this.textColor),
                t
              );
            },
            leftLineStyle: function () {
              var t = {};
              return (
                "left" === this.textPosition
                  ? (t.width = "80rpx")
                  : (t.flex = 1),
                t
              );
            },
            rightLineStyle: function () {
              var t = {};
              return (
                "right" === this.textPosition
                  ? (t.width = "80rpx")
                  : (t.flex = 1),
                t
              );
            },
          },
          methods: {
            click: function () {
              this.$emit("click");
            },
          },
        };
      e.default = s;
    },
    "6a881": function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.block_title[data-v-31f6ee8f]{background:#f8f8f8;padding:%?36?% %?30?%}.content[data-v-31f6ee8f]{padding-bottom:%?155?%}.top_box[data-v-31f6ee8f]{padding:%?30?% 0;margin:0 %?30?%;border-bottom:%?2?% solid #eee}.top_box uni-view[data-v-31f6ee8f]{font-size:13px;white-space:nowrap}.top_box .order_num[data-v-31f6ee8f]{justify-content:flex-start;flex:1}.top_box .order_num .num[data-v-31f6ee8f]{font-weight:700}.top_box .order_num .copy_btn[data-v-31f6ee8f]{margin-left:%?12?%;color:#2979ff}.top_box .status[data-v-31f6ee8f]{font-size:12px;font-weight:700}.goods_msg[data-v-31f6ee8f]{padding:%?35?% %?30?% %?10?%}.goods_msg .img[data-v-31f6ee8f]{width:%?120?%;height:%?120?%;border-radius:%?10?%}.goods_msg .txt[data-v-31f6ee8f]{width:calc(100% - %?145?%)}.goods_msg .txt .name[data-v-31f6ee8f]{font-size:16px}.goods_msg .txt .price_box[data-v-31f6ee8f]{margin-top:%?14?%}.goods_msg .txt .price_box .price[data-v-31f6ee8f]{color:#fd2c28;font-weight:700;font-size:17px}.goods_msg .txt .price_box .price .unit[data-v-31f6ee8f]{font-size:12px}.goods_msg .txt .price_box .num[data-v-31f6ee8f]{font-size:15px}.item[data-v-31f6ee8f]{padding:%?30?%}[data-v-31f6ee8f] .uv-radio{margin-right:16px}[data-v-31f6ee8f] .uv-textarea__field{font-size:14px!important}[data-v-31f6ee8f] .uv-form-item .uni-textarea-textarea{font-size:14px}[data-v-31f6ee8f] .uv-form-item .uni-textarea-placeholder{font-size:14px}[data-v-31f6ee8f] .uv-form-item.remarks_box .uv-form-item__body__left{align-items:flex-start!important}[data-v-31f6ee8f] .uv-form-item__body{padding:%?0?%!important}[data-v-31f6ee8f] .uv-form-item__body__left{width:auto!important;margin-right:%?24?%!important;position:relative;font-weight:700;width:%?145?%!important;white-space:nowrap}[data-v-31f6ee8f] .uv-form-item__body__left__content{padding:0!important}[data-v-31f6ee8f] .uv-form-item__body__left__content__label{display:inline-block;position:relative;z-index:10;flex:0!important}[data-v-31f6ee8f] .uv-form-item__body__left__content__label::before{z-index:-1;display:block;content:"";width:72%;height:%?20?%;border-radius:%?20?%;background:#ffe610;position:absolute;left:50%;bottom:%?6?%;-webkit-transform:translate(-50%);transform:translate(-50%)}[data-v-31f6ee8f] .uv-form-item__body__right__message{margin-left:%?170?%!important;margin-top:%?4?%!important}.btn_box[data-v-31f6ee8f]{position:fixed;max-width:480px;width:100%;margin:0 auto;box-shadow:0 0 %?10?% #ddd;left:0;right:0;bottom:0;background:#fff;z-index:20}.btn_box .sub_btn[data-v-31f6ee8f]{margin:%?20?% %?30?%;background:#ffe610;height:%?90?%;line-height:%?90?%;border-radius:%?90?%;font-size:15px;font-weight:700;text-align:center}.btn_box .sub_btn.dis[data-v-31f6ee8f]{background:#eee;color:#666}.reason_box[data-v-31f6ee8f]{padding:%?30?%}.reason_box.remarks_box[data-v-31f6ee8f]{align-items:flex-start}.reason_box .tit[data-v-31f6ee8f]{font-size:15px;font-weight:700;position:relative;z-index:10}.reason_box .tit[data-v-31f6ee8f]::before{z-index:-1;display:block;content:"";width:72%;height:%?20?%;border-radius:%?20?%;background:#ffe610;position:absolute;left:50%;bottom:%?6?%;-webkit-transform:translate(-50%);transform:translate(-50%)}.reason_box .txt[data-v-31f6ee8f]{width:calc(100% - %?170?%)}.reason_box .txt.img_box[data-v-31f6ee8f]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?25?%}.reason_box .txt.img_box img[data-v-31f6ee8f]{border-radius:%?15?%;width:%?162?%;height:%?162?%}.line_box[data-v-31f6ee8f]{background:#f8f8f8;width:100%;height:%?14?%;margin:%?30?% auto}',
          "",
        ]),
        (t.exports = e);
    },
    "6c27": function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("c223"),
        i("aa9c");
      var n = a(i("4d8f0")),
        r = a(i("9463")),
        o = a(i("56da")),
        s = {
          name: "uv-textarea",
          mixins: [n.default, r.default, o.default],
          data: function () {
            return {
              innerValue: "",
              focused: !1,
              innerFormatter: function (t) {
                return t;
              },
            };
          },
          created: function () {
            this.innerValue = this.value;
          },
          watch: {
            value: function (t) {
              this.innerValue = t;
            },
            modelValue: function (t) {
              this.innerValue = t;
            },
          },
          computed: {
            textareaClass: function () {
              var t = [],
                e = this.border,
                i = this.disabled;
              return (
                "surround" === e &&
                  (t = t.concat(["uv-border", "uv-textarea--radius"])),
                "bottom" === e &&
                  (t = t.concat([
                    "uv-border-bottom",
                    "uv-textarea--no-radius",
                  ])),
                i && t.push("uv-textarea--disabled"),
                t.join(" ")
              );
            },
            textareaStyle: function () {
              return this.$uv.deepMerge(
                {},
                this.$uv.addStyle(this.customStyle),
              );
            },
            maxlen: function () {
              return this.maxlength < 0
                ? this.maxlength < 0
                  ? -1
                  : 140
                : this.maxlength;
            },
            getCount: function () {
              try {
                return this.innerValue.length > this.maxlen
                  ? this.maxlen
                  : this.innerValue.length;
              } catch (t) {
                return 0;
              }
            },
          },
          methods: {
            setFormatter: function (t) {
              this.innerFormatter = t;
            },
            onFocus: function (t) {
              this.$emit("focus", t);
            },
            onBlur: function (t) {
              this.$emit("blur", t), this.$uv.formValidate(this, "blur");
            },
            onLinechange: function (t) {
              this.$emit("linechange", t);
            },
            onInput: function (t) {
              var e = this,
                i = t.detail || {},
                a = i.value,
                n = void 0 === a ? "" : a,
                r = this.formatter || this.innerFormatter,
                o = r(n);
              (this.innerValue = n),
                this.$nextTick(function () {
                  (e.innerValue = o), e.valueChange();
                });
            },
            valueChange: function () {
              var t = this,
                e = this.innerValue;
              this.$nextTick(function () {
                t.$emit("input", e),
                  t.$emit("update:modelValue", e),
                  t.$emit("change", e),
                  t.$uv.formValidate(t, "change");
              });
            },
            onConfirm: function (t) {
              this.$emit("confirm", t);
            },
            onKeyboardheightchange: function (t) {
              this.$emit("keyboardheightchange", t);
            },
          },
        };
      e.default = s;
    },
    "96f8": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6c27"),
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
    aac2: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("59a3"),
        n = i("d152");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      i("fca3");
      var o = i("828b"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "31f6ee8f",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    b24f: function (t, e, i) {
      "use strict";
      var a = i("64d8"),
        n = i.n(a);
      n.a;
    },
    bc7d: function (t, e, i) {
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
      var a = { uvLine: i("73b2").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticClass: "uv-divider",
              style: [t.$uv.addStyle(t.customStyle)],
              on: {
                click: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.click.apply(void 0, arguments);
                },
              },
            },
            [
              i("uv-line", {
                attrs: {
                  color: t.lineColor,
                  customStyle: t.leftLineStyle,
                  hairline: t.hairline,
                  dashed: t.dashed,
                },
              }),
              t.dot
                ? i("v-uni-text", { staticClass: "uv-divider__dot" }, [
                    t._v("●"),
                  ])
                : t.text
                  ? i(
                      "v-uni-text",
                      { staticClass: "uv-divider__text", style: [t.textStyle] },
                      [t._v(t._s(t.text))],
                    )
                  : t._e(),
              i("uv-line", {
                attrs: {
                  color: t.lineColor,
                  customStyle: t.rightLineStyle,
                  hairline: t.hairline,
                  dashed: t.dashed,
                },
              }),
            ],
            1,
          );
        },
        r = [];
    },
    caf4: function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var n,
        r,
        o = a(i("9b1b")),
        s = {
          props: (0, o.default)(
            {
              dashed: { type: Boolean, default: !1 },
              hairline: { type: Boolean, default: !0 },
              dot: { type: Boolean, default: !1 },
              textPosition: { type: String, default: "center" },
              text: { type: [String, Number], default: "" },
              textSize: { type: [String, Number], default: 14 },
              textColor: { type: String, default: "#909399" },
              lineColor: { type: String, default: "#dcdfe6" },
            },
            null === (n = uni.$uv) ||
              void 0 === n ||
              null === (r = n.props) ||
              void 0 === r
              ? void 0
              : r.divider,
          ),
        };
      e.default = s;
    },
    d044: function (t, e, i) {
      "use strict";
      i("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("0c26"),
        i("dd2b");
      var a = i("e74a"),
        n = {
          data: function () {
            return {
              id: 0,
              order: [],
              service: [],
              kefu: [],
              status: 0,
              verify_list: [
                { label: "同意", name: 1 },
                { label: "拒绝", name: 2 },
              ],
              verify_status: 0,
              verify_remark: "",
            };
          },
          onLoad: function (t) {
            (this.id = t.id), this.getKefuServiceInfo();
          },
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  t.getKefuServiceInfo(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          methods: {
            getKefuServiceInfo: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, a.send)(
                  "/wechat/OrderService/getKefuServiceInfo",
                  { id: this.id },
                  !1,
                ).then(function (e) {
                  uni.hideLoading();
                  var i = e.status,
                    a = e.msg,
                    n = e.data;
                  if (1 != i) return uni.$uv.toast(a);
                  (t.order = n.order),
                    (t.service = n.service),
                    (t.status = n.status),
                    (t.kefu = n.kefu);
                });
            },
            copyOrderNum: function (t) {
              uni.setClipboardData({
                data: t.trim(),
                success: function () {
                  uni.$uv.toast("复制成功");
                },
                fail: function () {
                  uni.$uv.toast("复制失败");
                },
              });
            },
            submit: function () {
              console.log(this.form);
              uni.$uv.throttle(this.vertifyService, 1500);
            },
            vertifyService: function () {
              var t = this;
              return 0 == this.verify_status
                ? uni.$uv.toast("请选择同意or拒绝")
                : "" == this.verify_remark
                  ? uni.$uv.toast("请填写平台审核理由")
                  : (uni.showLoading({ title: "加载中.." }),
                    void (0, a.send)(
                      "/wechat/Kefu/vertifyService",
                      {
                        id: this.id,
                        verify_status: this.verify_status,
                        verify_remark: this.verify_remark,
                      },
                      !1,
                    ).then(function (e) {
                      uni.hideLoading();
                      var i = e.status,
                        a = e.msg;
                      e.data;
                      if (1 != i) return uni.$uv.toast(a);
                      uni.$uv.toast(a),
                        setTimeout(function () {
                          t.getKefuServiceInfo();
                        }, 2e3);
                    }));
            },
            deletePic: function (t) {
              console.log(this.form.s_pics),
                console.log(t),
                this.form.s_pics.splice(t.index, 1);
            },
            previewImage: function (t, e) {
              uni.previewImage({ current: t, urls: e });
            },
            jump: function (t) {
              uni.navigateTo({ url: t });
            },
          },
        };
      e.default = n;
    },
    d152: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("d044"),
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
    d9e4: function (t, e, i) {
      var a = i("6a881");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("618f0822", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    fca3: function (t, e, i) {
      "use strict";
      var a = i("d9e4"),
        n = i.n(a);
      n.a;
    },
  },
]);
//# sourceMappingURL=pages_sub1-kefu-service.782a78ec.js.map
