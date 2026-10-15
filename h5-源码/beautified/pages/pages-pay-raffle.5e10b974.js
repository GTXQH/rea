(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-pay-raffle"],
  {
    "12dc": function (t, e, i) {
      "use strict";
      i("6a54");
      var n = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa"),
        i("e062");
      var a,
        o,
        r = n(i("9b1b")),
        s = {
          props: (0, r.default)(
            {
              value: { type: [String, Number], default: 0 },
              modelValue: { type: [String, Number], default: 0 },
              name: { type: [String, Number], default: "" },
              min: { type: [String, Number], default: 1 },
              max: { type: [String, Number], default: Number.MAX_SAFE_INTEGER },
              step: { type: [String, Number], default: 1 },
              integer: { type: Boolean, default: !1 },
              disabled: { type: Boolean, default: !1 },
              disabledInput: { type: Boolean, default: !1 },
              asyncChange: { type: Boolean, default: !1 },
              inputWidth: { type: [String, Number], default: 35 },
              showMinus: { type: Boolean, default: !0 },
              showPlus: { type: Boolean, default: !0 },
              decimalLength: { type: [String, Number, null], default: null },
              longPress: { type: Boolean, default: !0 },
              color: { type: String, default: "#323233" },
              buttonSize: { type: [String, Number], default: 30 },
              bgColor: { type: String, default: "#EBECEE" },
              cursorSpacing: { type: [String, Number], default: 100 },
              disablePlus: { type: Boolean, default: !1 },
              disableMinus: { type: Boolean, default: !1 },
              iconStyle: { type: [Object, String], default: "" },
            },
            null === (a = uni.$uv) ||
              void 0 === a ||
              null === (o = a.props) ||
              void 0 === o
              ? void 0
              : o.numberBox,
          ),
        };
      e.default = s;
    },
    "17bc": function (t, e, i) {
      var n = i("b525");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("967d").default;
      a("18b7d627", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "20f3": function (t, e, i) {
      "use strict";
      var n = i("8bdb"),
        a = i("5145");
      n(
        { target: "Array", proto: !0, forced: a !== [].lastIndexOf },
        { lastIndexOf: a },
      );
    },
    "310e": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("d506"),
        a = i("3b88");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("9c2f");
      var r = i("828b"),
        s = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "5bb39674",
          null,
          !1,
          n["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    "31a6": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return a;
        }),
        i.d(e, "a", function () {});
      var n = function () {
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
        a = [];
    },
    3345: function (t, e, i) {
      "use strict";
      var n = i("17bc"),
        a = i.n(n);
      a.a;
    },
    "3b88": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("8f42"),
        a = i.n(n);
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      e["default"] = a.a;
    },
    "3e65": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("31a6"),
        a = i("96f8");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("b24f");
      var r = i("828b"),
        s = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "26fd47e8",
          null,
          !1,
          n["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    "4bc9": function (t, e, i) {
      var n = i("c86c");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uv-border[data-v-26fd47e8]{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.uv-border-bottom[data-v-26fd47e8]{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}uni-view[data-v-26fd47e8], uni-scroll-view[data-v-26fd47e8], uni-swiper-item[data-v-26fd47e8]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-textarea[data-v-26fd47e8]{border-radius:4px;background-color:#fff;position:relative;display:flex;flex-direction:row;flex:1;padding:9px}.uv-textarea--radius[data-v-26fd47e8]{border-radius:4px}.uv-textarea--no-radius[data-v-26fd47e8]{border-radius:0}.uv-textarea--disabled[data-v-26fd47e8]{background-color:#f5f7fa}.uv-textarea__field[data-v-26fd47e8]{flex:1;font-size:15px;color:#606266;width:100%}.uv-textarea__count[data-v-26fd47e8]{position:absolute;right:5px;bottom:2px;font-size:12px;color:#909193;background-color:#fff;padding:1px 4px}',
          "",
        ]),
        (t.exports = e);
    },
    "4bf4": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("dc5e"),
        a = i.n(n);
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      e["default"] = a.a;
    },
    "56da": function (t, e, i) {
      "use strict";
      i("6a54");
      var n = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var a,
        o,
        r = n(i("9b1b")),
        s = {
          props: (0, r.default)(
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
            null === (a = uni.$uv) ||
              void 0 === a ||
              null === (o = a.props) ||
              void 0 === o
              ? void 0
              : o.textarea,
          ),
        };
      e.default = s;
    },
    "5dba": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("6aad"),
        a = i("4bf4");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("3345");
      var r = i("828b"),
        s = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "18b619e9",
          null,
          !1,
          n["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    "64d8": function (t, e, i) {
      var n = i("4bc9");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("967d").default;
      a("52a068ac", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6aad": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return n;
        });
      var n = { uvIcon: i("1a07").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "uv-number-box" },
            [
              t.showMinus && t.$slots.minus
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "uv-number-box__slot",
                      on: {
                        touchstart: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onTouchStart("minus");
                        },
                        touchend: function (e) {
                          e.stopPropagation(),
                            (arguments[0] = e = t.$handleEvent(e)),
                            t.clearTimeout.apply(void 0, arguments);
                        },
                        click: function (e) {
                          e.stopPropagation(),
                            (arguments[0] = e = t.$handleEvent(e)),
                            t.clickHandler("minus");
                        },
                      },
                    },
                    [t._t("minus")],
                    2,
                  )
                : t.showMinus
                  ? i(
                      "v-uni-view",
                      {
                        staticClass: "uv-number-box__minus",
                        class: {
                          "uv-number-box__minus--disabled":
                            t.isDisabled("minus"),
                        },
                        style: [t.buttonStyle("minus")],
                        attrs: {
                          "hover-class": "uv-number-box__minus--hover",
                          "hover-stay-time": "150",
                        },
                        on: {
                          touchstart: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.onTouchStart("minus");
                          },
                          touchend: function (e) {
                            e.stopPropagation(),
                              (arguments[0] = e = t.$handleEvent(e)),
                              t.clearTimeout.apply(void 0, arguments);
                          },
                          click: function (e) {
                            e.stopPropagation(),
                              (arguments[0] = e = t.$handleEvent(e)),
                              t.clickHandler("minus");
                          },
                        },
                      },
                      [
                        i("uv-icon", {
                          attrs: {
                            name: "minus",
                            color: t.isDisabled("minus")
                              ? "#c8c9cc"
                              : "#323233",
                            size: "15",
                            bold: !0,
                            customStyle: t.iconStyle,
                          },
                        }),
                      ],
                      1,
                    )
                  : t._e(),
              t._t("input", [
                i("v-uni-input", {
                  staticClass: "uv-number-box__input",
                  class: {
                    "uv-number-box__input--disabled":
                      t.disabled || t.disabledInput,
                  },
                  style: [t.inputStyle],
                  attrs: {
                    disabled: t.disabledInput || t.disabled,
                    "cursor-spacing": t.getCursorSpacing,
                    type: "number",
                  },
                  on: {
                    blur: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.onBlur.apply(void 0, arguments);
                    },
                    focus: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.onFocus.apply(void 0, arguments);
                    },
                    input: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.onInput.apply(void 0, arguments);
                    },
                  },
                  model: {
                    value: t.currentValue,
                    callback: function (e) {
                      t.currentValue = e;
                    },
                    expression: "currentValue",
                  },
                }),
              ]),
              t.showPlus && t.$slots.plus
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "uv-number-box__slot",
                      on: {
                        touchstart: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.onTouchStart("plus");
                        },
                        touchend: function (e) {
                          e.stopPropagation(),
                            (arguments[0] = e = t.$handleEvent(e)),
                            t.clearTimeout.apply(void 0, arguments);
                        },
                        click: function (e) {
                          e.stopPropagation(),
                            (arguments[0] = e = t.$handleEvent(e)),
                            t.clickHandler("plus");
                        },
                      },
                    },
                    [t._t("plus")],
                    2,
                  )
                : t.showPlus
                  ? i(
                      "v-uni-view",
                      {
                        staticClass: "uv-number-box__plus",
                        class: {
                          "uv-number-box__minus--disabled":
                            t.isDisabled("plus"),
                        },
                        style: [t.buttonStyle("plus")],
                        attrs: {
                          "hover-class": "uv-number-box__plus--hover",
                          "hover-stay-time": "150",
                        },
                        on: {
                          touchstart: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.onTouchStart("plus");
                          },
                          touchend: function (e) {
                            e.stopPropagation(),
                              (arguments[0] = e = t.$handleEvent(e)),
                              t.clearTimeout.apply(void 0, arguments);
                          },
                          click: function (e) {
                            e.stopPropagation(),
                              (arguments[0] = e = t.$handleEvent(e)),
                              t.clickHandler("plus");
                          },
                        },
                      },
                      [
                        i("uv-icon", {
                          attrs: {
                            name: "plus",
                            color: t.isDisabled("plus") ? "#c8c9cc" : "#323233",
                            size: "15",
                            bold: !0,
                            customStyle: t.iconStyle,
                          },
                        }),
                      ],
                      1,
                    )
                  : t._e(),
            ],
            2,
          );
        },
        o = [];
    },
    "6c27": function (t, e, i) {
      "use strict";
      i("6a54");
      var n = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("c223"),
        i("aa9c");
      var a = n(i("4d8f0")),
        o = n(i("9463")),
        r = n(i("56da")),
        s = {
          name: "uv-textarea",
          mixins: [a.default, o.default, r.default],
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
                n = i.value,
                a = void 0 === n ? "" : n,
                o = this.formatter || this.innerFormatter,
                r = o(a);
              (this.innerValue = a),
                this.$nextTick(function () {
                  (e.innerValue = r), e.valueChange();
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
    7200: function (t, e, i) {
      "use strict";
      var n = i("8bdb"),
        a = i("f221");
      n({ target: "Number", stat: !0 }, { isInteger: a });
    },
    "8f42": function (t, e, i) {
      "use strict";
      i("6a54");
      var n = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = n(i("39d8"));
      i("5c47"), i("0506"), i("7200"), i("64aa");
      var o,
        r = i("e74a"),
        s = i("a5ed5"),
        u = i("4fbd"),
        l = {
          data: function () {
            return {
              id: 0,
              info: [],
              price: 0,
              is_fixed_num: !1,
              form: {
                id: 0,
                num_id: "",
                game_area: 0,
                workerType: 1,
                seller_id: 0,
                remark: "",
                num: 1,
                invite: "",
                mobile: "",
              },
              area_list: [],
              worker_list: [{ label: "随机分配", name: 1 }],
              rules: {
                num_id: {
                  type: "string",
                  required: !0,
                  message: "请输入游戏数字编号",
                  trigger: ["blur", "change"],
                },
                game_area: {
                  type: "integer",
                  required: !1,
                  message: "请选择游戏区服",
                  trigger: ["blur", "change"],
                },
                workerType: {
                  type: "integer",
                  required: !1,
                  message: "请选择接单打手",
                  trigger: ["blur", "change"],
                },
                num: {
                  type: "integer",
                  required: !1,
                  message: "请选择商品数量",
                  trigger: ["blur", "change"],
                },
                mobile: [
                  {
                    required: !0,
                    message: "请输入手机号",
                    trigger: ["blur", "change"],
                  },
                  {
                    validator: function (t, e, i) {
                      return /^1[3-9]\d{9}$/.test(e);
                    },
                    message: "请输入正确的手机号",
                    trigger: ["blur"],
                  },
                ],
              },
              closeGamequfu: 0,
              content: "<p>下单后打手会在10分钟之内加您好友,请您上号等待.</p>",
              shuziShow: !1,
              wenziShow: !1,
              num_ids: [],
              text_ids: [],
              keyword: "",
              workerList: [],
              page: 1,
              no_more: 0,
              status: "loading",
              worker: [],
              total_money: 0,
              cat1: [],
              user: { mobile_type: 0 },
              area_price: 0,
              show_text_id: 0,
              input_mobile: 0,
              palte: "h5",
              kefu: [],
              store_close: [],
              child_alert: 0,
            };
          },
          onLoad: function (t) {
            (this.id = t.id),
              (this.form.id = t.id),
              Number.isInteger(Number(t.seller_id)) &&
                t.seller_id > 0 &&
                ((this.form.workerType = 2),
                (this.form.seller_id = t.seller_id)),
              Number.isInteger(Number(t.draw_num)) &&
                t.draw_num > 0 &&
                ((this.form.num = Number(t.draw_num)),
                (this.is_fixed_num = !0)),
              this.getSubmitInfo();
          },
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  t.resetList(),
                  t.getSubmitInfo(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          mounted: function () {},
          methods:
            ((o = {
              getSubmitInfo: function () {
                var t = this,
                  e = this;
                uni.showLoading({ title: "加载中.." }),
                  (0, r.send)(
                    "/wechat/Raffle/getSubmitInfo",
                    { id: this.id, seller_id: this.form.seller_id },
                    !1,
                  ).then(function (i) {
                    uni.hideLoading();
                    var n = i.status,
                      a = i.msg,
                      o = i.data;
                    1 == n
                      ? ((t.info = o.goods),
                        (t.price = t.info.price),
                        (t.content = o.buy_tips),
                        (t.num_ids = o.num_ids),
                        (t.text_ids = o.text_ids),
                        (t.form.num_id = t.num_ids[0]),
                        (t.input_mobile = o.input_mobile),
                        (t.show_text_id = o.show_text_id),
                        1 == t.show_text_id && (t.form.text_id = t.text_ids[0]),
                        (t.worker = o.seller),
                        (t.cat1 = o.cat1),
                        (t.user = o.user),
                        (t.area_list = o.area_list),
                        (t.form.mobile = t.user.mobile),
                        (t.weapp_tpl = o.weapp_tpl),
                        (t.kefu = o.kefu),
                        (t.store_close = o.store_close),
                        (t.child_alert = o.child_alert),
                        o.order_num > 0 &&
                          uni.showModal({
                            title: "温馨提示",
                            content:
                              "您有一个抽奖机会还未使用, 点击确定去抽取吧 !",
                            showCancel: !1,
                            success: function (t) {
                              t.confirm && (0, s.goRaffle)(e.info.id);
                            },
                          }),
                        t.selectRegion())
                      : uni.showModal({
                          title: "温馨提示",
                          content: a,
                          showCancel: !1,
                          confirmText: "确认",
                          success: function (t) {
                            t.confirm && uni.navigateBack({ delta: 1 });
                          },
                        });
                  });
              },
              close: function () {
                this.$refs.worker_pop.close(),
                  (this.shuziShow = !1),
                  (this.wenziShow = !1);
              },
              changeWorkerId: function (t) {
                console.log(t),
                  (this.form.seller_id = t.id),
                  (this.worker = t),
                  this.close();
              },
              searchFun: function () {
                this.resetList(), uni.$uv.throttle(this.getWorkerList, 1500);
              },
              resetList: function () {
                (this.workerList = []),
                  (this.page = 1),
                  (this.no_more = 0),
                  (this.status = "loading");
              },
              selectRegion: function (t) {
                (this.shuziShow = !1), (this.wenziShow = !1);
              },
              selectWorker: function (t) {
                (this.shuziShow = !1), (this.wenziShow = !1);
              },
              closeGamequfuFun: function () {
                this.closeGamequfu = 1;
              },
              submit: function () {
                var t = this;
                if (
                  "mp-weixin" != this.palte ||
                  1 != this.kefu.order_kefu_send_link
                ) {
                  if (0 == this.form.game_area)
                    return uni.$uv.toast("请选择区服");
                  this.$refs.form
                    .validate()
                    .then(function (e) {
                      (0, r.send)(
                        "/wechat/Raffle/getGoodsInfo",
                        { id: t.id },
                        !1,
                      ).then(function (e) {
                        var i = e.status,
                          n = e.msg,
                          a = e.data;
                        return 1 != i
                          ? uni.$uv.toast(n)
                          : 1 == a.sold
                            ? uni.$uv.toast("手慢了, 当前商品已售出")
                            : void (1 == t.child_alert
                                ? uni.showModal({
                                    title: "温馨提示",
                                    content:
                                      "本订单需年满18周岁方可购买，继续支付即代表您符合年龄要求 !",
                                    confirmText: "我已成年",
                                    cancelText: "取消",
                                    confirmColor: "#FF3B30",
                                    success: function (e) {
                                      e.confirm && t.subOrderInfo();
                                    },
                                  })
                                : t.subOrderInfo());
                      });
                    })
                    .catch(function (t) {});
                }
              },
              subOrderInfo: function () {
                this.subscribeMessage(),
                  uni.setStorageSync("goodsSubmit", this.form),
                  uni.navigateTo({
                    url: "/pages/pay/index?type=6&id=" + this.id,
                  });
              },
              jump: function (t) {
                uni.navigateTo({ url: t });
              },
              selectHistory1: function (t) {
                var e = this;
                (this.form.num_id = t),
                  this.$nextTick(function () {
                    e.$refs.form.validate();
                  }),
                  (this.shuziShow = !1);
              },
              selectHistory2: function (t) {
                var e = this;
                (this.form.text_id = t),
                  this.$nextTick(function () {
                    e.$refs.form.validate();
                  }),
                  (this.wenziShow = !1);
              },
              loadMore: function (t) {
                0 == this.no_more && (this.page++, this.getWorkerList()),
                  console.log("到底了");
              },
              changeNum: function (t) {
                (this.form.num = t.value), this.upTotalMoney();
              },
              upTotalMoney: function () {
                this.total_money = u.cal.cheng(
                  this.info.price,
                  this.form.num,
                  2,
                );
              },
              openGameNum: function () {
                this.$refs.gameShow.open();
              },
              closeGameNum: function () {
                this.$refs.gameShow.close();
              },
            }),
            (0, a.default)(o, "selectRegion", function () {
              (this.shuziShow = !1),
                (this.wenziShow = !1),
                null != this.info.area_price &&
                  ((this.area_price =
                    this.info.area_price[this.form.game_area]),
                  this.area_price || (this.area_price = 0),
                  (this.info.price = u.cal.jia(
                    this.price,
                    this.area_price,
                    2,
                  ))),
                0 != this.info.rise_price &&
                  (null == this.info.area_price &&
                    (this.info.price = this.price),
                  (this.info.price = u.cal.jia(
                    this.info.price,
                    this.info.rise_price,
                    2,
                  ))),
                this.upTotalMoney();
            }),
            (0, a.default)(o, "subscribeMessage", function () {
              if ("mp-weixin" != this.palte) return !0;
              uni.requestSubscribeMessage({
                tmplIds: this.weapp_tpl,
                success: function (t) {
                  console.log("订阅成功", t), t["TEMPLATE_ID_1"];
                },
                fail: function (t) {
                  console.error("订阅失败", t);
                },
              });
            }),
            o),
        };
      e.default = l;
    },
    "96f8": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("6c27"),
        a = i.n(n);
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      e["default"] = a.a;
    },
    "9c2f": function (t, e, i) {
      "use strict";
      var n = i("bc5b"),
        a = i.n(n);
      a.a;
    },
    a5ed5: function (t, e, i) {
      "use strict";
      i("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.goRaffle = function (t) {
          return (0, n.send)(
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
      var n = i("e74a");
    },
    b1ad: function (t, e, i) {
      var n = i("c86c");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.fixed_num[data-v-5bb39674]{display:inline-flex;align-items:center;justify-content:center;height:%?72?%;padding:0 %?24?%;background:#f8f8f8;border-radius:%?8?%;font-size:16px;color:#333;font-weight:700;background:linear-gradient(135deg,#fff8e8,#fff5e0);border:%?2?% solid #ffe16a;box-shadow:0 %?2?% %?8?% rgba(255,225,106,.3)}.zd_seller_box[data-v-5bb39674]{justify-content:flex-start}.zd_seller_box .head[data-v-5bb39674]{width:%?64?%;height:%?64?%;border-radius:100%;margin-right:%?18?%}.game-con[data-v-5bb39674]{display:flex;justify-content:flex-end;padding-right:%?20?%}.game-con .game-id[data-v-5bb39674]{font-size:12px;color:#2979ff}[data-v-5bb39674] .uv-form-item{margin:%?35?% %?30?%}[data-v-5bb39674] .uv-form-item__body{padding:%?0?%!important}[data-v-5bb39674] .uv-form-item__body__left{width:auto!important;margin-right:%?24?%!important;position:relative;font-weight:700;width:%?145?%!important;white-space:nowrap}[data-v-5bb39674] .uv-form-item__body__left__content{padding:0!important}[data-v-5bb39674] .uv-form-item__body__left__content__label{display:inline-block;position:relative;z-index:10;flex:0!important}[data-v-5bb39674] .uv-form-item__body__left__content__label::before{z-index:-1;display:block;content:"";width:72%;height:%?20?%;border-radius:%?20?%;background:#ffe610;position:absolute;left:50%;bottom:%?6?%;-webkit-transform:translate(-50%);transform:translate(-50%)}[data-v-5bb39674] .uv-form-item__body__right__message{margin-left:%?170?%!important;margin-top:%?4?%!important}[data-v-5bb39674] .uv-form-item .uv-radio-label--left{margin:%?8?% 0 %?3?% 0;margin-right:%?34?%;padding-bottom:%?5?%}[data-v-5bb39674] .uv-form-item__body__left{align-items:flex-start!important;margin-top:%?18?%!important}[data-v-5bb39674] .uv-form-item__body__left__content__label span{white-space:nowrap!important}.rem_form_item[data-v-5bb39674]{margin:%?-20?% auto}.rem_form_item[data-v-5bb39674] .uv-form-item__body__left{align-items:flex-start!important;margin-top:%?18?%!important}.rem_form_item[data-v-5bb39674] .uv-form-item__body__right__content__slot{display:block;background:#f8f8f8;border-radius:%?8?%}.rem_form_item .rem_list[data-v-5bb39674]{max-height:%?190?%;overflow-y:scroll;padding:%?4?% 0}.rem_form_item .rem_list .item[data-v-5bb39674]{height:%?60?%;line-height:%?60?%;padding:0 %?20?%}[data-v-5bb39674] .uv-textarea__count{bottom:%?2?%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:10!important}.content[data-v-5bb39674]{padding-bottom:%?140?%}.msg_box[data-v-5bb39674]{padding:0 %?30?%}.msg_box .goods_msg[data-v-5bb39674]{margin:%?35?% auto %?5?%}.msg_box .goods_msg .img[data-v-5bb39674]{width:%?120?%;height:%?120?%;border-radius:%?10?%}.msg_box .goods_msg .txt[data-v-5bb39674]{width:calc(100% - %?145?%)}.msg_box .goods_msg .txt .name[data-v-5bb39674]{font-size:16px}.msg_box .goods_msg .txt .price_box[data-v-5bb39674]{margin-top:%?14?%}.msg_box .goods_msg .txt .price_box .price[data-v-5bb39674]{color:#fd2c28;font-weight:700;font-size:17px}.msg_box .goods_msg .txt .price_box .price .unit[data-v-5bb39674]{font-size:12px}.msg_box .goods_msg .txt .price_box .num[data-v-5bb39674]{font-size:15px}.msg_box .goods_msg .zhangjia_box[data-v-5bb39674]{border-top:%?2?% solid #eee;margin-top:%?30?%;padding-top:%?25?%}.msg_box .goods_msg .zhangjia_box .zhangjia[data-v-5bb39674]{width:%?120?%;text-align:center}.msg_box .goods_msg .zhangjia_box .zhangjia uni-view[data-v-5bb39674]{color:#999;font-size:12.4px;white-space:nowrap}.msg_box .goods_msg .zhangjia_box .zhangjia .price[data-v-5bb39674]{color:#fd2c28;font-size:14.4px;margin-top:%?2?%}.msg_box .goods_msg .zhangjia_box .tit[data-v-5bb39674]{width:calc(100% - %?145?%)}.tip_box[data-v-5bb39674]{margin-top:%?20?%;background:rgba(0,0,0,.045);border-radius:%?8?%;padding:%?12?% %?12?% %?12?% %?14?%;box-sizing:border-box;align-items:flex-start}.tip_box .tips[data-v-5bb39674]{width:calc(100% - %?45?%)}.tip_box .tips .tit[data-v-5bb39674]{width:calc(100% - %?50?%);font-size:12.4px;color:#666}.rich_box[data-v-5bb39674]{margin:%?35?% %?30?%}.rich_box .tit[data-v-5bb39674]{font-weight:700;margin-bottom:%?30?%;font-size:14.4px}.cash_box[data-v-5bb39674]{background:#fff;position:fixed;left:0;right:0;bottom:0;max-width:480px;width:100%;margin:0 auto;box-shadow:0 0 %?10?% #ddd;padding:%?20?% %?30?%;z-index:999}.cash_box .total_box uni-view[data-v-5bb39674],\r\n.cash_box .total_box uni-text[data-v-5bb39674]{white-space:nowrap}.cash_box .total_box .tit[data-v-5bb39674]{font-size:12.4px;color:#666}.cash_box .total_box .price[data-v-5bb39674]{color:#fd2c28;font-weight:700;font-size:17px}.cash_box .total_box .price .unit[data-v-5bb39674]{font-size:12px}.cash_box .btn_box[data-v-5bb39674]{position:relative;width:50%;background:#ffe610;height:%?90?%;line-height:%?90?%;border-radius:%?90?%;font-size:15px;text-align:center;font-weight:700;overflow:hidden}.cash_box .btn_box.cancle[data-v-5bb39674]{background:#eee;color:#666}[data-v-5bb39674] .uv-popup__content{max-width:480px;width:100%}.worker_pop[data-v-5bb39674]{padding:%?0?% %?30?%;background:#fff;position:relative}.worker_pop .title_box .title[data-v-5bb39674]{height:%?90?%;line-height:%?90?%;font-weight:700;text-align:center;border-bottom:%?2?% solid #eee;margin-bottom:%?32?%}.worker_pop .title_box[data-v-5bb39674] .uv-icon{position:absolute;top:%?20?%;right:%?20?%}.worker_pop .new_search_box[data-v-5bb39674] .uv-input{background:#fff!important;padding:%?4?%!important;padding-left:%?18?%!important}.worker_pop .new_search_box[data-v-5bb39674] .uv-input.uv-border{border:%?4?% solid #000!important}.worker_pop .new_search_box[data-v-5bb39674] .uv-input .uv-input__content__clear{margin-right:%?8?%!important}.worker_pop .new_search_box[data-v-5bb39674] .uv-input .btn{width:%?88?%!important;height:%?56?%!important;border-radius:%?56?%!important;background:#000!important;justify-content:center!important}.worker_pop .new_search_box[data-v-5bb39674] .uv-input .btn .uv-icon__icon{font-weight:700!important}.worker_pop .list[data-v-5bb39674]{margin:%?20?% auto %?25?%;height:%?800?%;overflow-x:hidden;overflow-y:scroll}.worker_pop .list .col[data-v-5bb39674]{padding:%?20?% %?10?%}.worker_pop .list .col .head_box[data-v-5bb39674]{width:calc(100% - %?120?%);justify-content:flex-start}.worker_pop .list .col .head_box .head[data-v-5bb39674]{width:%?94?%;height:%?94?%;border-radius:100%;margin:0;margin-right:%?20?%}.worker_pop .list .col .head_box .nickname[data-v-5bb39674]{text-overflow:ellipsis;white-space:nowrap;color:#444!important}.worker_pop .list .col .check[data-v-5bb39674]{width:%?42?%;height:%?42?%;border-radius:%?42?%;border:%?2?% solid #bbb;align-items:center;justify-content:center}.worker_pop .list .col .check[data-v-5bb39674] .uv-icon__icon span{font-weight:700}.gameShow[data-v-5bb39674]{background:#fff;border-radius:%?30?%;padding:%?0?% %?46?% %?30?%;text-align:center;margin:0 %?30?%}.gameShow .tit[data-v-5bb39674]{font-weight:700;padding:%?40?% 0;font-size:17px}.gameShow .prompt[data-v-5bb39674]{margin:%?6?% auto;line-height:1.5;color:#999}.gameShow .red[data-v-5bb39674]{color:#fd2c28}.gameShow .btn[data-v-5bb39674]{background:#ffe610;width:40%;font-size:13px;font-weight:700;height:%?60?%;line-height:%?60?%;border-radius:%?60?%;margin:%?62?% auto %?5?%}',
          "",
        ]),
        (t.exports = e);
    },
    b24f: function (t, e, i) {
      "use strict";
      var n = i("64d8"),
        a = i.n(n);
      a.a;
    },
    b525: function (t, e, i) {
      var n = i("c86c");
      (e = n(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-18b619e9], uni-scroll-view[data-v-18b619e9], uni-swiper-item[data-v-18b619e9]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-number-box[data-v-18b619e9]{display:flex;flex-direction:row;align-items:center}.uv-number-box__slot[data-v-18b619e9]{touch-action:none}.uv-number-box__plus[data-v-18b619e9], .uv-number-box__minus[data-v-18b619e9]{width:35px;display:flex;flex-direction:row;justify-content:center;align-items:center;touch-action:none}.uv-number-box__plus--hover[data-v-18b619e9], .uv-number-box__minus--hover[data-v-18b619e9]{background-color:#e6e6e6!important}.uv-number-box__plus--disabled[data-v-18b619e9], .uv-number-box__minus--disabled[data-v-18b619e9]{color:#c8c9cc;background-color:#f7f8fa}.uv-number-box__plus[data-v-18b619e9]{border-top-right-radius:4px;border-bottom-right-radius:4px}.uv-number-box__minus[data-v-18b619e9]{border-top-left-radius:4px;border-bottom-left-radius:4px}.uv-number-box__input[data-v-18b619e9]{position:relative;text-align:center;font-size:15px;padding:0;margin:0 2px;display:flex;flex-direction:row;align-items:center;justify-content:center}.uv-number-box__input--disabled[data-v-18b619e9]{color:#c8c9cc;background-color:#f2f3f5}',
          "",
        ]),
        (t.exports = e);
    },
    bc5b: function (t, e, i) {
      var n = i("b1ad");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("967d").default;
      a("0c5e933a", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d506: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return n;
        });
      var n = {
          uvForm: i("0de9").default,
          uvFormItem: i("05af").default,
          uvTextarea: i("3e65").default,
          uvRadioGroup: i("af45").default,
          uvRadio: i("636d").default,
          uvNumberBox: i("5dba").default,
          uvParse: i("c96a").default,
          uvPopup: i("ce8a").default,
        },
        a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "content" },
            [
              i(
                "v-uni-view",
                { staticClass: "msg_box" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "goods_msg" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "flex_box" },
                        [
                          t.info.thumb
                            ? i("img", {
                                staticClass: "img",
                                attrs: { src: t.info.thumb },
                              })
                            : t._e(),
                          i(
                            "v-uni-view",
                            { staticClass: "txt" },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "name uv-line-1" },
                                [t._v(t._s(t.info.title))],
                              ),
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
                                      i("v-uni-text", [t._v(t._s(t.price))]),
                                    ],
                                    1,
                                  ),
                                  i("v-uni-view", { staticClass: "num" }, [
                                    t._v("x " + t._s(t.form.num)),
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
                      0 != t.info.rise_price
                        ? i(
                            "v-uni-view",
                            { staticClass: "zhangjia_box flex_box" },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "zhangjia" },
                                [
                                  i("v-uni-view", [
                                    t._v(
                                      t._s(
                                        t.info.rise_price > 0 ? "涨价" : "优惠",
                                      ),
                                    ),
                                  ]),
                                  i("v-uni-view", { staticClass: "price" }, [
                                    t._v("¥" + t._s(t.info.rise_price)),
                                  ]),
                                ],
                                1,
                              ),
                              i("v-uni-view", { staticClass: "tit" }, [
                                t._v(t._s(t.info.rise_reason)),
                              ]),
                            ],
                            1,
                          )
                        : t._e(),
                      0 != t.area_price
                        ? i(
                            "v-uni-view",
                            { staticClass: "zhangjia_box flex_box" },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "zhangjia" },
                                [
                                  i("v-uni-view", [
                                    t._v(
                                      "区服" +
                                        t._s(
                                          t.area_price > 0 ? "涨价" : "优惠",
                                        ),
                                    ),
                                  ]),
                                  i("v-uni-view", { staticClass: "price" }, [
                                    t._v("¥" + t._s(t.area_price)),
                                  ]),
                                ],
                                1,
                              ),
                              i("v-uni-view", { staticClass: "tit" }, [
                                t._v("区服价格差异"),
                              ]),
                            ],
                            1,
                          )
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i("v-uni-view", { staticClass: "line_box" }),
              i(
                "uv-form",
                {
                  ref: "form",
                  attrs: {
                    labelPosition: "left",
                    model: t.form,
                    rules: t.rules,
                  },
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "game-con",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.openGameNum.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i("v-uni-view", { staticClass: "game-id" }, [
                        t._v("查看游戏编号"),
                      ]),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "rem_form_item" },
                    [
                      i(
                        "uv-form-item",
                        { attrs: { label: "数字编号", prop: "num_id" } },
                        [
                          i("uv-textarea", {
                            attrs: {
                              placeholder: "请输入游戏数字编号",
                              count: !0,
                              height: "40",
                              maxlength: "30",
                              autoHeight: !0,
                              customStyle: "max-height:200px",
                            },
                            on: {
                              focus: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  (t.shuziShow = !0),
                                  (t.wenziShow = !1);
                              },
                            },
                            model: {
                              value: t.form.num_id,
                              callback: function (e) {
                                t.$set(t.form, "num_id", e);
                              },
                              expression: "form.num_id",
                            },
                          }),
                          t.shuziShow && t.num_ids
                            ? i(
                                "v-uni-view",
                                { staticClass: "rem_list" },
                                t._l(t.num_ids, function (e, n) {
                                  return i(
                                    "v-uni-view",
                                    {
                                      key: n,
                                      staticClass: "item",
                                      attrs: { text: e },
                                      on: {
                                        click: function (i) {
                                          (arguments[0] = i =
                                            t.$handleEvent(i)),
                                            t.selectHistory1(e);
                                        },
                                      },
                                    },
                                    [t._v(t._s(e))],
                                  );
                                }),
                                1,
                              )
                            : t._e(),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "rem_form_item" },
                    [
                      1 == t.show_text_id
                        ? i(
                            "uv-form-item",
                            { attrs: { label: "文字ID", prop: "text_id" } },
                            [
                              i("uv-textarea", {
                                attrs: {
                                  placeholder: "请输入文字ID",
                                  count: !0,
                                  height: "20",
                                  maxlength: "30",
                                },
                                on: {
                                  focus: function (e) {
                                    (arguments[0] = e = t.$handleEvent(e)),
                                      (t.wenziShow = !0),
                                      (t.shuziShow = !1);
                                  },
                                },
                                model: {
                                  value: t.form.text_id,
                                  callback: function (e) {
                                    t.$set(t.form, "text_id", e);
                                  },
                                  expression: "form.text_id",
                                },
                              }),
                              t.wenziShow && t.text_ids
                                ? i(
                                    "v-uni-view",
                                    { staticClass: "rem_list" },
                                    t._l(t.text_ids, function (e, n) {
                                      return i(
                                        "v-uni-view",
                                        {
                                          key: n,
                                          staticClass: "item",
                                          attrs: { text: e },
                                          on: {
                                            click: function (i) {
                                              (arguments[0] = i =
                                                t.$handleEvent(i)),
                                                t.selectHistory2(e);
                                            },
                                          },
                                        },
                                        [t._v(t._s(e))],
                                      );
                                    }),
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
                  i(
                    "uv-form-item",
                    { attrs: { label: "游戏区服", prop: "game_area" } },
                    [
                      i(
                        "uv-radio-group",
                        {
                          on: {
                            change: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.selectRegion.apply(void 0, arguments);
                            },
                          },
                          model: {
                            value: t.form.game_area,
                            callback: function (e) {
                              t.$set(t.form, "game_area", e);
                            },
                            expression: "form.game_area",
                          },
                        },
                        t._l(t.area_list, function (t, e) {
                          return i("uv-radio", {
                            key: t.index,
                            attrs: { label: t.name, name: t.index },
                          });
                        }),
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "uv-form-item",
                    { attrs: { label: "接单方式", prop: "workerType" } },
                    [
                      i(
                        "uv-radio-group",
                        {
                          on: {
                            change: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.selectWorker.apply(void 0, arguments);
                            },
                          },
                          model: {
                            value: t.form.workerType,
                            callback: function (e) {
                              t.$set(t.form, "workerType", e);
                            },
                            expression: "form.workerType",
                          },
                        },
                        t._l(t.worker_list, function (t, e) {
                          return i("uv-radio", {
                            key: e,
                            attrs: { label: t.label, name: t.name },
                          });
                        }),
                        1,
                      ),
                    ],
                    1,
                  ),
                  t.form.seller_id
                    ? i(
                        "uv-form-item",
                        {
                          staticStyle: {
                            "margin-top": "55rpx",
                            "margin-bottom": "25rpx",
                          },
                          attrs: { label: "指定打手" },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "zd_seller_box flex_box" },
                            [
                              i("img", {
                                staticClass: "head",
                                attrs: { src: t.worker.avatar },
                              }),
                              i("v-uni-view", { staticClass: "nickname" }, [
                                t._v(t._s(t.worker.nickname)),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : t._e(),
                  t.form.seller_id
                    ? i(
                        "v-uni-view",
                        {
                          staticStyle: {
                            color: "red",
                            "text-align": "center",
                            "font-weight": "bold",
                          },
                          attrs: { label: "" },
                        },
                        [
                          t._v(
                            "（如5分钟该打手未接单, 则自动匹配随机打手, 为您服务!）",
                          ),
                        ],
                      )
                    : t._e(),
                  i(
                    "v-uni-view",
                    { staticClass: "rem_form_item" },
                    [
                      i(
                        "uv-form-item",
                        { attrs: { label: "下单备注", prop: "remark" } },
                        [
                          i("uv-textarea", {
                            staticStyle: { "padding-right": "18px" },
                            attrs: {
                              placeholder: "请填写下单备注(选填)",
                              count: !0,
                              maxlength: "58",
                            },
                            model: {
                              value: t.form.remark,
                              callback: function (e) {
                                t.$set(t.form, "remark", e);
                              },
                              expression: "form.remark",
                            },
                          }),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  "h5" == t.palte
                    ? i(
                        "v-uni-view",
                        { staticClass: "rem_form_item" },
                        [
                          1 == t.input_mobile && 0 == t.user.mobile_type
                            ? i(
                                "uv-form-item",
                                { attrs: { label: "手机号", prop: "mobile" } },
                                [
                                  i("uv-textarea", {
                                    staticStyle: { "padding-right": "18px" },
                                    attrs: {
                                      placeholder: "请填写手机号",
                                      count: !0,
                                      maxlength: "11",
                                      height: "20",
                                    },
                                    model: {
                                      value: t.form.mobile,
                                      callback: function (e) {
                                        t.$set(t.form, "mobile", e);
                                      },
                                      expression: "form.mobile",
                                    },
                                  }),
                                ],
                                1,
                              )
                            : t._e(),
                        ],
                        1,
                      )
                    : t._e(),
                  i(
                    "v-uni-view",
                    { staticClass: "rem_form_item" },
                    [
                      1 == t.user.show_inivite
                        ? i(
                            "uv-form-item",
                            { attrs: { label: "邀请码", prop: "inivite" } },
                            [
                              i("uv-textarea", {
                                staticStyle: { "padding-right": "18px" },
                                attrs: {
                                  placeholder: "请填写邀请码(选填)",
                                  count: !0,
                                  autoHeight: !0,
                                  maxlength: "10",
                                },
                                model: {
                                  value: t.form.invite,
                                  callback: function (e) {
                                    t.$set(t.form, "invite", e);
                                  },
                                  expression: "form.invite",
                                },
                              }),
                            ],
                            1,
                          )
                        : t._e(),
                    ],
                    1,
                  ),
                  i(
                    "uv-form-item",
                    { attrs: { label: "抽奖次数", prop: "num" } },
                    [
                      t.is_fixed_num
                        ? i("v-uni-view", { staticClass: "fixed_num" }, [
                            t._v(t._s(t.form.num) + "次"),
                          ])
                        : i("uv-number-box", {
                            attrs: { max: 99, integer: !0, buttonSize: "26" },
                            on: {
                              change: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)),
                                  t.changeNum.apply(void 0, arguments);
                              },
                            },
                            model: {
                              value: t.form.num,
                              callback: function (e) {
                                t.$set(t.form, "num", e);
                              },
                              expression: "form.num",
                            },
                          }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i("v-uni-view", { staticClass: "line_box" }),
              i(
                "v-uni-view",
                { staticClass: "rich_box" },
                [
                  i("v-uni-view", { staticClass: "tit" }, [t._v("下单说明")]),
                  i("uv-parse", { attrs: { content: t.content } }),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "cash_box flex_box" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "total_box flex_box" },
                    [
                      i("v-uni-view", { staticClass: "tit" }, [t._v("合计:")]),
                      i(
                        "v-uni-view",
                        { staticClass: "price" },
                        [
                          i("v-uni-text", { staticClass: "unit" }, [
                            t._v("￥"),
                          ]),
                          i("v-uni-text", [t._v(t._s(t.total_money))]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  0 == t.store_close.online
                    ? i(
                        "v-uni-view",
                        {
                          staticClass: "btn_box",
                          staticStyle: { "background-color": "#dadada" },
                        },
                        [t._v("商家已打烊")],
                      )
                    : i(
                        "v-uni-view",
                        {
                          staticClass: "btn_box",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.submit.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          t._v(
                            t._s(
                              "mp-weixin" == t.palte &&
                                1 == t.kefu.order_kefu_send_link
                                ? "联系客服下单"
                                : "立即支付",
                            ) + " ",
                          ),
                        ],
                      ),
                ],
                1,
              ),
              i(
                "uv-popup",
                { ref: "gameShow", attrs: { mode: "center", bgColor: "none" } },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "gameShow" },
                    [
                      i("v-uni-view", { staticClass: "tit" }, [
                        t._v("如何查看" + t._s(t.cat1.name) + "游戏编号?"),
                      ]),
                      i("uv-parse", {
                        attrs: { content: t.cat1.look_game_num },
                      }),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "btn",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.closeGameNum.apply(void 0, arguments);
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
    dc5e: function (t, e, i) {
      "use strict";
      i("6a54");
      var n = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = n(i("9b1b"));
      i("8f71"),
        i("bf0f"),
        i("5c47"),
        i("a1c1"),
        i("5ef2"),
        i("c223"),
        i("f7a5"),
        i("c9b5"),
        i("ab80");
      var o = n(i("4d8f0")),
        r = n(i("9463")),
        s = n(i("12dc")),
        u = {
          name: "uv-number-box",
          mixins: [o.default, r.default, s.default],
          data: function () {
            return { currentValue: "", longPressTimer: null };
          },
          watch: {
            watchChange: function (t) {
              this.check();
            },
            value: function (t) {
              t !== this.currentValue &&
                (this.currentValue = this.format(this.value));
            },
            modelValue: function (t) {
              t !== this.currentValue &&
                (this.currentValue = this.format(this.modelValue));
            },
          },
          computed: {
            getCursorSpacing: function () {
              return this.$uv.getPx(this.cursorSpacing);
            },
            buttonStyle: function () {
              var t = this;
              return function (e) {
                var i = {
                  backgroundColor: t.bgColor,
                  height: t.$uv.addUnit(t.buttonSize),
                  color: t.color,
                };
                return t.isDisabled(e) && (i.backgroundColor = "#f7f8fa"), i;
              };
            },
            inputStyle: function () {
              this.disabled || this.disabledInput;
              var t = {
                color: this.color,
                backgroundColor: this.bgColor,
                height: this.$uv.addUnit(this.buttonSize),
                width: this.$uv.addUnit(this.inputWidth),
              };
              return t;
            },
            watchChange: function () {
              return [this.integer, this.decimalLength, this.min, this.max];
            },
            isDisabled: function () {
              var t = this;
              return function (e) {
                return "plus" === e
                  ? t.disabled || t.disablePlus || t.currentValue >= t.max
                  : t.disabled || t.disableMinus || t.currentValue <= t.min;
              };
            },
          },
          created: function () {
            this.init();
          },
          methods: {
            init: function () {
              var t = this.value || this.modelValue;
              this.currentValue = this.format(t);
            },
            format: function (t) {
              return (
                (t = this.filter(t)),
                (t = "" === t ? 0 : +t),
                (t = Math.max(Math.min(this.max, t), this.min)),
                null !== this.decimalLength &&
                  (t = t.toFixed(this.decimalLength)),
                t
              );
            },
            filter: function (t) {
              return (
                (t = String(t).replace(/[^0-9.-]/g, "")),
                this.integer && -1 !== t.indexOf(".") && (t = t.split(".")[0]),
                t
              );
            },
            check: function () {
              var t = this.format(this.currentValue);
              t !== this.currentValue && (this.currentValue = t);
            },
            onFocus: function (t) {
              this.$emit(
                "focus",
                (0, a.default)(
                  (0, a.default)({}, t.detail),
                  {},
                  { name: this.name },
                ),
              );
            },
            onBlur: function (t) {
              this.format(t.detail.value);
              this.$emit(
                "blur",
                (0, a.default)(
                  (0, a.default)({}, t.detail),
                  {},
                  { name: this.name },
                ),
              );
            },
            onInput: function (t) {
              var e = t.detail || {},
                i = e.value,
                n = void 0 === i ? "" : i;
              if ("" !== n) {
                var a = this.filter(n);
                if (null !== this.decimalLength && -1 !== a.indexOf(".")) {
                  var o = a.split(".");
                  a = ""
                    .concat(o[0], ".")
                    .concat(o[1].slice(0, this.decimalLength));
                }
                (a = this.format(a)), this.emitChange(a);
              }
            },
            emitChange: function (t) {
              var e = this;
              this.asyncChange ||
                this.$nextTick(function () {
                  e.$emit("input", t),
                    e.$emit("update:modelValue", t),
                    (e.currentValue = t),
                    e.$forceUpdate();
                }),
                this.$emit("change", { value: t, name: this.name });
            },
            onChange: function () {
              var t = this.type;
              if (this.isDisabled(t)) return this.$emit("overlimit", t);
              var e = "minus" === t ? -this.step : +this.step,
                i = this.format(this.add(+this.currentValue, e));
              this.emitChange(i), this.$emit(t);
            },
            add: function (t, e) {
              var i = Math.pow(10, 10);
              return Math.round((t + e) * i) / i;
            },
            clickHandler: function (t) {
              (this.type = t), this.onChange();
            },
            longPressStep: function () {
              var t = this;
              this.clearTimeout(),
                (this.longPressTimer = setTimeout(function () {
                  t.onChange(), t.longPressStep();
                }, 250));
            },
            onTouchStart: function (t) {
              var e = this;
              this.longPress &&
                (this.clearTimeout(),
                (this.type = t),
                (this.longPressTimer = setTimeout(function () {
                  e.onChange(), e.longPressStep();
                }, 600)));
            },
            onTouchEnd: function () {
              this.longPress && this.clearTimeout();
            },
            clearTimeout: (function (t) {
              function e() {
                return t.apply(this, arguments);
              }
              return (
                (e.toString = function () {
                  return t.toString();
                }),
                e
              );
            })(function () {
              clearTimeout(this.longPressTimer), (this.longPressTimer = null);
            }),
          },
        };
      e.default = u;
    },
  },
]);
//# sourceMappingURL=pages-pay-raffle.5e10b974.js.map
