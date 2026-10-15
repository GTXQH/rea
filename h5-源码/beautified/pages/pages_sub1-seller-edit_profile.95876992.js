(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-seller-edit_profile"],
  {
    "0187": function (t, e, i) {
      var a = i("f988");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("2a4faa05", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0edc": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = {
          uvForm: i("0de9").default,
          uvFormItem: i("05af").default,
          uvTextarea: i("3e65").default,
          uvIcon: i("1a07").default,
        },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "content" },
            [
              0 === t.audit_status
                ? i(
                    "v-uni-view",
                    { staticClass: "audit_tips audit_pending" },
                    [
                      i("v-uni-text", [
                        t._v(
                          "资料审核中，审核通过后才会展示给用户，当前主页仍显示旧资料",
                        ),
                      ]),
                    ],
                    1,
                  )
                : t._e(),
              2 === t.audit_status
                ? i(
                    "v-uni-view",
                    { staticClass: "audit_tips audit_reject" },
                    [
                      i("v-uni-view", { staticClass: "audit_reject_title" }, [
                        t._v("审核未通过"),
                      ]),
                      t.audit_reject_reason
                        ? i(
                            "v-uni-view",
                            { staticClass: "audit_reject_reason" },
                            [t._v("原因：" + t._s(t.audit_reject_reason))],
                          )
                        : t._e(),
                      i("v-uni-view", { staticClass: "audit_reject_sub" }, [
                        t._v("请修改后重新提交"),
                      ]),
                    ],
                    1,
                  )
                : t._e(),
              i(
                "uv-form",
                {
                  ref: "form",
                  attrs: { labelPosition: "left", model: t.form },
                },
                [
                  i(
                    "uv-form-item",
                    {
                      staticClass: "remarks_box",
                      attrs: { label: "简介", prop: "intro" },
                    },
                    [
                      i("uv-textarea", {
                        attrs: {
                          placeholder: "请输入简介",
                          maxlength: 100,
                          count: !0,
                        },
                        model: {
                          value: t.intro,
                          callback: function (e) {
                            t.intro = e;
                          },
                          expression: "intro",
                        },
                      }),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "section" },
                [
                  i("v-uni-view", { staticClass: "section_title" }, [
                    t._v("语音介绍"),
                  ]),
                  t.voice_url
                    ? i(
                        "v-uni-view",
                        { staticClass: "voice_wrap" },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "voice_bar",
                              class: { playing: t.isPlaying },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.playVoice.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "voice_play" },
                                [
                                  i("uv-icon", {
                                    attrs: {
                                      name: t.isPlaying
                                        ? "pause"
                                        : "play-right-fill",
                                      color: "#fff",
                                      size: "14",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "wave_progress",
                                  class: { playing: t.isPlaying },
                                },
                                [
                                  i("v-uni-view", {
                                    staticClass: "wave_inner",
                                    style: { width: t.voiceProgress + "%" },
                                  }),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "wave_lines" },
                                    t._l(4, function (t, e) {
                                      return i("v-uni-view", {
                                        key: e,
                                        staticClass: "wl",
                                      });
                                    }),
                                    1,
                                  ),
                                ],
                                1,
                              ),
                              i("v-uni-view", { staticClass: "duration" }, [
                                t._v(t._s(t.getRemainTime())),
                              ]),
                            ],
                            1,
                          ),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "voice_del",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.removeVoice.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              i("uv-icon", {
                                attrs: {
                                  name: "trash",
                                  color: "#999",
                                  size: "18",
                                },
                              }),
                              i("v-uni-text", { staticClass: "del_text" }, [
                                t._v("删除"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : i(
                        "v-uni-view",
                        {
                          staticClass: "voice_add",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.uploadVoice.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("uv-icon", {
                            attrs: { name: "plus", color: "#999", size: "18" },
                          }),
                          i("v-uni-text", { staticClass: "add_text" }, [
                            t._v("上传语音介绍"),
                          ]),
                        ],
                        1,
                      ),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "section" },
                [
                  i("v-uni-view", { staticClass: "section_title" }, [
                    t._v("相册（" + t._s(t.album.length) + "/9）"),
                  ]),
                  i(
                    "v-uni-view",
                    { staticClass: "album_grid" },
                    [
                      t._l(t.album, function (e, a) {
                        return i(
                          "v-uni-view",
                          { key: a, staticClass: "album_item" },
                          [
                            i("v-uni-image", {
                              staticClass: "album_img",
                              attrs: { src: e.url, mode: "aspectFill" },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.previewImage(a);
                                },
                              },
                            }),
                            i(
                              "v-uni-view",
                              {
                                staticClass: "album_del",
                                on: {
                                  click: function (e) {
                                    e.stopPropagation(),
                                      (arguments[0] = e = t.$handleEvent(e)),
                                      t.removeImage(a);
                                  },
                                },
                              },
                              [
                                i("uv-icon", {
                                  attrs: {
                                    name: "close",
                                    color: "#fff",
                                    size: "12",
                                  },
                                }),
                              ],
                              1,
                            ),
                          ],
                          1,
                        );
                      }),
                      t.album.length < 9
                        ? i(
                            "v-uni-view",
                            {
                              staticClass: "album_add",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.chooseImage.apply(void 0, arguments);
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "add_inner" },
                                [
                                  i("uv-icon", {
                                    attrs: {
                                      name: "plus",
                                      color: "#bbb",
                                      size: "28",
                                    },
                                  }),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                    ],
                    2,
                  ),
                ],
                1,
              ),
              i("v-uni-view", { staticClass: "bottom_placeholder" }),
              i(
                "v-uni-view",
                {
                  staticClass: "save_btn",
                  on: {
                    click: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.save.apply(void 0, arguments);
                    },
                  },
                },
                [t._v("保存")],
              ),
            ],
            1,
          );
        },
        o = [];
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
    "33ae": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("0edc"),
        n = i("b615");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("5e7c");
      var r = i("828b"),
        u = Object(r["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "9eb3a98c",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = u.exports;
    },
    "3e65": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("31a6"),
        n = i("96f8");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("b24f");
      var r = i("828b"),
        u = Object(r["a"])(
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
      e["default"] = u.exports;
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
    "56da": function (t, e, i) {
      "use strict";
      i("6a54");
      var a = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("64aa");
      var n,
        o,
        r = a(i("9b1b")),
        u = {
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
            null === (n = uni.$uv) ||
              void 0 === n ||
              null === (o = n.props) ||
              void 0 === o
              ? void 0
              : o.textarea,
          ),
        };
      e.default = u;
    },
    "5e7c": function (t, e, i) {
      "use strict";
      var a = i("0187"),
        n = i.n(a);
      n.a;
    },
    "64d8": function (t, e, i) {
      var a = i("4bc9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("52a068ac", a, !0, { sourceMap: !1, shadowMode: !1 });
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
        o = a(i("9463")),
        r = a(i("56da")),
        u = {
          name: "uv-textarea",
          mixins: [n.default, o.default, r.default],
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
                o = this.formatter || this.innerFormatter,
                r = o(n);
              (this.innerValue = n),
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
      e.default = u;
    },
    "7c49": function (t, e, i) {
      "use strict";
      i("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("fd3c"),
        i("bf0f"),
        i("aa9c"),
        i("dd2b");
      var a = i("e74a"),
        n = i("15b8"),
        o = {
          data: function () {
            return {
              intro: "",
              voice_url: "",
              voice_duration: 0,
              album: [],
              up_config: {},
              base_url: n.baseUrl,
              innerAudioContext: null,
              isPlaying: !1,
              voiceProgress: 0,
              voiceRemain: 0,
              audit_status: -1,
              audit_reject_reason: "",
            };
          },
          computed: {
            form: function () {
              return { intro: this.intro };
            },
          },
          onLoad: function () {
            this.getEditProfile();
          },
          onUnload: function () {
            this.innerAudioContext &&
              (this.innerAudioContext.destroy(),
              (this.innerAudioContext = null));
          },
          methods: {
            getEditProfile: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, a.send)("/wechat/Seller/getEditProfile", {}, !1).then(
                  function (e) {
                    uni.hideLoading();
                    var i = e.status,
                      a = e.msg,
                      n = e.data;
                    if (1 != i) return uni.$uv.toast(a);
                    (t.intro = n.intro || ""),
                      (t.voice_url = n.voice_url || ""),
                      (t.voice_duration = n.voice_duration || 0),
                      (t.album = (n.album || []).map(function (t) {
                        return { url: t.image, id: t.id };
                      })),
                      (t.up_config = n.up_config || {}),
                      (t.audit_status =
                        void 0 !== n.audit_status ? n.audit_status : -1),
                      (t.audit_reject_reason = n.audit_reject_reason || "");
                  },
                );
            },
            chooseImage: function () {
              var t = this;
              if (this.album.length >= 9)
                return uni.$uv.toast("最多上传9张图片");
              uni.chooseImage({
                count: 9 - this.album.length,
                success: function (e) {
                  var i = e.tempFilePaths;
                  (function e(a) {
                    a >= i.length ||
                      t.album.length >= 9 ||
                      t.uploadImage(i[a]).then(function () {
                        e(a + 1);
                      });
                  })(0);
                },
              });
            },
            uploadImage: function (t) {
              var e = this;
              return new Promise(function (i) {
                (0, n.uploadCompressImgs)(t)
                  .then(function (t) {
                    (0, a.send)(
                      "/wechat/Files/uploadBase64",
                      { label: "album", file: t },
                      !1,
                    )
                      .then(function (t) {
                        var a = t.msg,
                          n = t.data;
                        if (1 != t.code)
                          return uni.$uv.toast(a || "上传失败"), i();
                        e.album.push({ url: n.fullurl }), i();
                      })
                      .catch(function () {
                        i();
                      });
                  })
                  .catch(function () {
                    uni.$uv.toast("图片处理失败"), i();
                  });
              });
            },
            doUploadImage: function (t, e) {
              var i = this;
              uni.uploadFile({
                url: n.baseUrl + "/wechat/Files/uploadGoods",
                filePath: t,
                name: "file",
                success: function (t) {
                  if (200 != t.statusCode)
                    return uni.$uv.toast("上传失败"), e();
                  var a = JSON.parse(t.data),
                    n = a.msg,
                    o = a.data;
                  if (1 != a.code && 1 != a.status)
                    return uni.$uv.toast(n || "上传失败"), e();
                  i.album.push({ url: o.fullurl }), e();
                },
                fail: function () {
                  uni.$uv.toast("上传失败"), e();
                },
              });
            },
            removeImage: function (t) {
              this.album.splice(t, 1);
            },
            previewImage: function (t) {
              var e = this.album.map(function (t) {
                return t.url;
              });
              uni.previewImage({ current: e[t], urls: e });
            },
            playVoice: function () {
              var t = this;
              this.voice_url &&
                (this.isPlaying
                  ? this.stopVoice()
                  : (this.innerAudioContext && this.innerAudioContext.destroy(),
                    (this.innerAudioContext = uni.createInnerAudioContext()),
                    (this.innerAudioContext.src = this.voice_url),
                    (this.isPlaying = !0),
                    (this.voiceProgress = 0),
                    (this.voiceRemain = this.voice_duration || 0),
                    this.innerAudioContext.onTimeUpdate(function () {
                      t.innerAudioContext &&
                        t.voice_duration > 0 &&
                        ((t.voiceProgress =
                          (t.innerAudioContext.currentTime / t.voice_duration) *
                          100),
                        t.voiceProgress > 100 && (t.voiceProgress = 100),
                        (t.voiceRemain = Math.max(
                          0,
                          Math.ceil(
                            t.voice_duration - t.innerAudioContext.currentTime,
                          ),
                        )));
                    }),
                    this.innerAudioContext.onEnded(function () {
                      (t.isPlaying = !1),
                        (t.voiceProgress = 0),
                        (t.voiceRemain = t.voice_duration || 0);
                    }),
                    this.innerAudioContext.onError(function () {
                      (t.isPlaying = !1),
                        (t.voiceProgress = 0),
                        (t.voiceRemain = t.voice_duration || 0);
                    }),
                    this.innerAudioContext.play()));
            },
            stopVoice: function () {
              this.innerAudioContext &&
                (this.innerAudioContext.stop(),
                this.innerAudioContext.destroy(),
                (this.innerAudioContext = null)),
                (this.isPlaying = !1),
                (this.voiceProgress = 0),
                (this.voiceRemain = this.voice_duration || 0);
            },
            getRemainTime: function () {
              return (
                (this.isPlaying ? this.voiceRemain : this.voice_duration) + "s"
              );
            },
            removeVoice: function () {
              this.stopVoice(),
                (this.voice_url = ""),
                (this.voice_duration = 0);
            },
            uploadVoice: function () {
              var t = this;
              uni.chooseFile({
                count: 1,
                extension: [".mp3", ".wav", ".m4a", ".aac", ".amr"],
                success: function (e) {
                  var i = e.tempFilePaths[0];
                  t.doUploadVoice(i);
                },
                fail: function () {},
              });
            },
            doUploadVoice: function (t, e) {
              var i = this;
              uni.showLoading({ title: "上传中..", mask: !0 }),
                (0, n.uploadFile)("/wechat/Files/uploadAudio", t, function (t) {
                  uni.showLoading({ title: "上传中 " + t + "%", mask: !0 });
                })
                  .then(function (a) {
                    uni.hideLoading();
                    var n = a.msg,
                      o = a.data;
                    if (1 != a.code && 1 != a.status)
                      return uni.$uv.toast(n || "上传失败");
                    (i.voice_url = o.fullurl || o.url || ""),
                      o.duration && o.duration > 0
                        ? (i.voice_duration = o.duration)
                        : e && e > 0
                          ? (i.voice_duration = e)
                          : i.getVoiceDuration(t);
                  })
                  .catch(function () {
                    uni.hideLoading(), uni.$uv.toast("上传失败");
                  });
            },
            getVoiceDuration: function (t) {
              var e = this;
              try {
                var i = new Audio();
                (i.src = t),
                  (i.onloadedmetadata = function () {
                    i.duration &&
                      !isNaN(i.duration) &&
                      (e.voice_duration = Math.round(i.duration));
                  });
              } catch (a) {}
            },
            save: function () {
              var t = this;
              uni.showLoading({ title: "保存中.." }),
                (0, a.send)(
                  "/wechat/Seller/saveEditProfile",
                  {
                    intro: this.intro,
                    voice_url: this.voice_url,
                    voice_duration: this.voice_duration,
                    album: this.album.map(function (t) {
                      return { url: t.url };
                    }),
                  },
                  !1,
                ).then(function (e) {
                  uni.hideLoading();
                  var i = e.status,
                    a = e.msg;
                  if (1 != i) return uni.$uv.toast(a);
                  (t.audit_status = 0),
                    (t.audit_reject_reason = ""),
                    uni.$uv.toast(a || "提交成功, 请等待审核"),
                    setTimeout(function () {
                      uni.navigateBack({ delta: 1 });
                    }, 1500);
                });
            },
          },
        };
      e.default = o;
    },
    "96f8": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6c27"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    b24f: function (t, e, i) {
      "use strict";
      var a = i("64d8"),
        n = i.n(a);
      n.a;
    },
    b615: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7c49"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    f988: function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-9eb3a98c]{padding:2.7% %?30?%}.audit_tips[data-v-9eb3a98c]{border-radius:%?12?%;padding:%?20?% %?24?%;margin-bottom:%?20?%;font-size:13px;line-height:1.6}.audit_pending[data-v-9eb3a98c]{background:#fff8e1;color:#b8860b}.audit_reject[data-v-9eb3a98c]{background:#fdecec;color:#d9534f}.audit_reject .audit_reject_title[data-v-9eb3a98c]{font-weight:700;margin-bottom:%?6?%}.audit_reject .audit_reject_reason[data-v-9eb3a98c]{margin-bottom:%?6?%}.audit_reject .audit_reject_sub[data-v-9eb3a98c]{font-size:12px;opacity:.8}[data-v-9eb3a98c] .uv-form-item__body__left{align-items:flex-start!important;margin-top:%?18?%!important}[data-v-9eb3a98c] .uv-form-item__body__left__content__label span{white-space:nowrap!important}[data-v-9eb3a98c] .uv-form-item{margin:%?30?% auto}[data-v-9eb3a98c] .uv-form-item.remarks_box .uv-form-item__body__left{align-items:flex-start!important}[data-v-9eb3a98c] .uv-form-item__body{padding:%?0?%!important}[data-v-9eb3a98c] .uv-form-item__body__left{width:auto!important;margin-right:%?24?%!important;position:relative;font-weight:700;width:%?145?%!important;white-space:nowrap}[data-v-9eb3a98c] .uv-form-item__body__left__content{padding:0!important}[data-v-9eb3a98c] .uv-form-item__body__left__content__label{display:inline-block!important;position:relative!important;z-index:10!important;flex:0!important}[data-v-9eb3a98c] .uv-form-item__body__left__content__label::before{z-index:-1!important;display:block!important;content:""!important;width:72%!important;height:%?20?%!important;border-radius:%?20?%!important;background:#ffe610!important;position:absolute!important;left:50%!important;bottom:%?6?%!important;-webkit-transform:translate(-50%)!important;transform:translate(-50%)!important}[data-v-9eb3a98c] .uv-form-item__body__right__message{margin-left:%?170?%!important;margin-top:%?4?%!important}.section[data-v-9eb3a98c]{margin:%?40?% auto}.section_title[data-v-9eb3a98c]{font-weight:700;font-size:15px;margin-bottom:%?24?%;position:relative;display:inline-block;padding-bottom:%?6?%}.section_title[data-v-9eb3a98c]::before{content:"";position:absolute;left:50%;bottom:0;-webkit-transform:translate(-50%);transform:translate(-50%);width:72%;height:%?20?%;border-radius:%?20?%;background:#ffe610;z-index:-1}.voice_wrap[data-v-9eb3a98c]{display:flex;align-items:center;justify-content:space-between;background:#f8f8f8;border-radius:%?16?%;padding:%?24?%}.voice_bar[data-v-9eb3a98c]{display:flex;align-items:center;width:%?300?%;height:%?56?%;padding:0 %?12?%;box-sizing:border-box;background:#f0f0f0;border-radius:%?12?%}.voice_play[data-v-9eb3a98c]{width:%?44?%;height:%?44?%;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;background:#ffe610}.wave_progress[data-v-9eb3a98c]{flex:1;position:relative;height:%?40?%;margin:0 %?12?%;overflow:hidden;border-radius:%?8?%;background:#ddd}.wave_progress .wave_inner[data-v-9eb3a98c]{position:absolute;left:0;top:0;height:100%;border-radius:%?8?%;transition:width .1s linear;background:#ffe610;overflow:hidden}.wave_progress .wave_lines[data-v-9eb3a98c]{position:absolute;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:space-around;z-index:2}.wave_progress .wave_lines .wl[data-v-9eb3a98c]{width:%?4?%;height:50%;border-radius:%?4?%;background:#999}.wave_progress.playing .wave_lines .wl[data-v-9eb3a98c]{background:#fff}.wave_progress.playing .wl[data-v-9eb3a98c]:nth-child(1){-webkit-animation:wv1-data-v-9eb3a98c .8s ease-in-out infinite;animation:wv1-data-v-9eb3a98c .8s ease-in-out infinite}.wave_progress.playing .wl[data-v-9eb3a98c]:nth-child(2){-webkit-animation:wv2-data-v-9eb3a98c .8s ease-in-out infinite;animation:wv2-data-v-9eb3a98c .8s ease-in-out infinite}.wave_progress.playing .wl[data-v-9eb3a98c]:nth-child(3){-webkit-animation:wv3-data-v-9eb3a98c .8s ease-in-out infinite;animation:wv3-data-v-9eb3a98c .8s ease-in-out infinite}.wave_progress.playing .wl[data-v-9eb3a98c]:nth-child(4){-webkit-animation:wv4-data-v-9eb3a98c .8s ease-in-out infinite;animation:wv4-data-v-9eb3a98c .8s ease-in-out infinite}.duration[data-v-9eb3a98c]{font-size:13px;color:#999;white-space:nowrap;min-width:%?36?%;text-align:right}.voice_del[data-v-9eb3a98c]{display:flex;align-items:center;padding:%?10?% %?20?%}.voice_del .del_text[data-v-9eb3a98c]{font-size:12px;color:#999;margin-left:%?6?%}.voice_add[data-v-9eb3a98c]{display:flex;align-items:center;justify-content:center;height:%?100?%;background:#f8f8f8;border-radius:%?16?%}.voice_add .add_text[data-v-9eb3a98c]{font-size:14px;color:#999;margin-left:%?10?%}.album_grid[data-v-9eb3a98c]{display:flex;flex-wrap:wrap}.album_item[data-v-9eb3a98c],\r\n.album_add[data-v-9eb3a98c]{width:31%;padding-bottom:31%;position:relative;margin:0 3.5% %?20?% 0;height:0}.album_item[data-v-9eb3a98c]:nth-child(3n),\r\n.album_add[data-v-9eb3a98c]:nth-child(3n){margin-right:0}.album_img[data-v-9eb3a98c]{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:%?12?%}.album_del[data-v-9eb3a98c]{position:absolute;right:%?-10?%;top:%?-10?%;width:%?36?%;height:%?36?%;border-radius:%?36?%;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;z-index:2}.album_add[data-v-9eb3a98c]{border:%?2?% dashed #ddd;border-radius:%?12?%;box-sizing:border-box}.album_add .add_inner[data-v-9eb3a98c]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center}.bottom_placeholder[data-v-9eb3a98c]{height:%?140?%}.save_btn[data-v-9eb3a98c]{position:fixed;left:%?30?%;right:%?30?%;bottom:%?30?%;background:#ffe610;height:%?90?%;line-height:%?90?%;border-radius:%?90?%;font-size:15px;font-weight:700;text-align:center}@-webkit-keyframes wv1-data-v-9eb3a98c{0%, 100%{height:40%}50%{height:90%}}@keyframes wv1-data-v-9eb3a98c{0%, 100%{height:40%}50%{height:90%}}@-webkit-keyframes wv2-data-v-9eb3a98c{0%, 100%{height:60%}50%{height:30%}}@keyframes wv2-data-v-9eb3a98c{0%, 100%{height:60%}50%{height:30%}}@-webkit-keyframes wv3-data-v-9eb3a98c{0%, 100%{height:30%}50%{height:80%}}@keyframes wv3-data-v-9eb3a98c{0%, 100%{height:30%}50%{height:80%}}@-webkit-keyframes wv4-data-v-9eb3a98c{0%, 100%{height:70%}50%{height:40%}}@keyframes wv4-data-v-9eb3a98c{0%, 100%{height:70%}50%{height:40%}}',
          "",
        ]),
        (t.exports = e);
    },
  },
]);
//# sourceMappingURL=pages_sub1-seller-edit_profile.95876992.js.map
