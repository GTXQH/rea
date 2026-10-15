(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "pages-agent-cash_score~pages-pay-raffle~pages-pay-submit~pages-user-apply~pages-user-certification~p~2f537e91",
  ],
  {
    "05af": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("10db"),
        i = r("966a");
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return i[e];
            });
          })(a);
      r("f133");
      var u = r("828b"),
        o = Object(u["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "b7a0f236",
          null,
          !1,
          n["a"],
          void 0,
        );
      t["default"] = o.exports;
    },
    "0de9": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("9f89"),
        i = r("0eb9");
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return i[e];
            });
          })(a);
      var u = r("828b"),
        o = Object(u["a"])(
          i["default"],
          n["b"],
          n["c"],
          !1,
          null,
          null,
          null,
          !1,
          n["a"],
          void 0,
        );
      t["default"] = o.exports;
    },
    "0eb9": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("88ac"),
        i = r.n(n);
      for (var a in n)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return n[e];
            });
          })(a);
      t["default"] = i.a;
    },
    "10db": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return i;
      }),
        r.d(t, "c", function () {
          return a;
        }),
        r.d(t, "a", function () {
          return n;
        });
      var n = {
          uvIcon: r("1a07").default,
          uvTransition: r("7fd8").default,
          uvLine: r("73b2").default,
        },
        i = function () {
          var e = this,
            t = e.$createElement,
            r = e._self._c || t;
          return r(
            "v-uni-view",
            { staticClass: "uv-form-item" },
            [
              r(
                "v-uni-view",
                {
                  staticClass: "uv-form-item__body",
                  style: [
                    e.$uv.addStyle(e.customStyle),
                    {
                      flexDirection:
                        "left" ===
                        (e.labelPosition || e.parentData.labelPosition)
                          ? "row"
                          : "column",
                    },
                  ],
                  on: {
                    click: function (t) {
                      (arguments[0] = t = e.$handleEvent(t)),
                        e.clickHandler.apply(void 0, arguments);
                    },
                  },
                },
                [
                  e._t("label", [
                    e.required || e.leftIcon || e.label
                      ? r(
                          "v-uni-view",
                          {
                            staticClass: "uv-form-item__body__left",
                            style: {
                              width: e.$uv.addUnit(
                                e.labelWidth || e.parentData.labelWidth,
                              ),
                              marginBottom:
                                "left" === e.parentData.labelPosition
                                  ? 0
                                  : "5px",
                            },
                          },
                          [
                            r(
                              "v-uni-view",
                              {
                                staticClass:
                                  "uv-form-item__body__left__content",
                              },
                              [
                                e.required
                                  ? r(
                                      "v-uni-text",
                                      {
                                        staticClass:
                                          "uv-form-item__body__left__content__required",
                                      },
                                      [e._v("*")],
                                    )
                                  : e._e(),
                                e.leftIcon
                                  ? r(
                                      "v-uni-view",
                                      {
                                        staticClass:
                                          "uv-form-item__body__left__content__icon",
                                      },
                                      [
                                        r("uv-icon", {
                                          attrs: {
                                            name: e.leftIcon,
                                            "custom-style": e.leftIconStyle,
                                          },
                                        }),
                                      ],
                                      1,
                                    )
                                  : e._e(),
                                r(
                                  "v-uni-text",
                                  {
                                    staticClass:
                                      "uv-form-item__body__left__content__label",
                                    style: [
                                      e.parentData.labelStyle,
                                      {
                                        justifyContent:
                                          "left" === e.parentData.labelAlign
                                            ? "flex-start"
                                            : "center" ===
                                                e.parentData.labelAlign
                                              ? "center"
                                              : "flex-end",
                                      },
                                    ],
                                  },
                                  [e._v(e._s(e.label))],
                                ),
                              ],
                              1,
                            ),
                          ],
                          1,
                        )
                      : e._e(),
                  ]),
                  r(
                    "v-uni-view",
                    { staticClass: "uv-form-item__body__right" },
                    [
                      r(
                        "v-uni-view",
                        { staticClass: "uv-form-item__body__right__content" },
                        [
                          r(
                            "v-uni-view",
                            {
                              staticClass:
                                "uv-form-item__body__right__content__slot",
                            },
                            [e._t("default")],
                            2,
                          ),
                          r(
                            "v-uni-view",
                            { staticClass: "item__body__right__content__icon" },
                            [e._t("right")],
                            2,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                2,
              ),
              e._t("error", [
                e.message && "message" === e.parentData.errorType
                  ? r(
                      "uv-transition",
                      { attrs: { show: !0, duration: 100, mode: "fade" } },
                      [
                        r(
                          "v-uni-text",
                          {
                            staticClass: "uv-form-item__body__right__message",
                            style: {
                              marginLeft: e.$uv.addUnit(
                                "top" === e.parentData.labelPosition
                                  ? 0
                                  : e.labelWidth || e.parentData.labelWidth,
                              ),
                            },
                          },
                          [e._v(e._s(e.message))],
                        ),
                      ],
                      1,
                    )
                  : e._e(),
              ]),
              e.borderBottom
                ? r("uv-line", {
                    attrs: {
                      color:
                        e.message && "border-bottom" === e.parentData.errorType
                          ? "#f56c6c"
                          : "#d6d7d9",
                    },
                  })
                : e._e(),
            ],
            2,
          );
        },
        a = [];
    },
    "235d": function (e, t, r) {
      "use strict";
      (function (e) {
        r("6a54");
        var n = r("f5bd").default;
        Object.defineProperty(t, "__esModule", { value: !0 }),
          (t.default = void 0);
        var i = n(r("9b1b")),
          a = n(r("fcf3"));
        r("bf0f"),
          r("2797"),
          r("aa9c"),
          r("f7a5"),
          r("5c47"),
          r("a1c1"),
          r("64aa"),
          r("d4b5"),
          r("dc8a"),
          r("5ef2"),
          r("0506"),
          r("23f4"),
          r("7d2f"),
          r("9c4e"),
          r("ab80"),
          r("2c10"),
          r("7a76"),
          r("c9b5"),
          r("c223"),
          r("de6c"),
          r("fd3c"),
          r("dd2b");
        var u = /%[sdj%]/g,
          o = function () {};
        function s(e) {
          if (!e || !e.length) return null;
          var t = {};
          return (
            e.forEach(function (e) {
              var r = e.field;
              (t[r] = t[r] || []), t[r].push(e);
            }),
            t
          );
        }
        function l() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
            t[r] = arguments[r];
          var n = 1,
            i = t[0],
            a = t.length;
          if ("function" === typeof i) return i.apply(null, t.slice(1));
          if ("string" === typeof i) {
            for (
              var o = String(i).replace(u, function (e) {
                  if ("%%" === e) return "%";
                  if (n >= a) return e;
                  switch (e) {
                    case "%s":
                      return String(t[n++]);
                    case "%d":
                      return Number(t[n++]);
                    case "%j":
                      try {
                        return JSON.stringify(t[n++]);
                      } catch (r) {
                        return "[Circular]";
                      }
                      break;
                    default:
                      return e;
                  }
                }),
                s = t[n];
              n < a;
              s = t[++n]
            )
              o += " ".concat(s);
            return o;
          }
          return i;
        }
        function f(e, t) {
          return (
            void 0 === e ||
            null === e ||
            !("array" !== t || !Array.isArray(e) || e.length) ||
            !(
              !(function (e) {
                return (
                  "string" === e ||
                  "url" === e ||
                  "hex" === e ||
                  "email" === e ||
                  "pattern" === e
                );
              })(t) ||
              "string" !== typeof e ||
              e
            )
          );
        }
        function d(e, t, r) {
          var n = 0,
            i = e.length;
          (function a(u) {
            if (u && u.length) r(u);
            else {
              var o = n;
              (n += 1), o < i ? t(e[o], a) : r([]);
            }
          })([]);
        }
        function c(e, t, r, n) {
          if (t.first) {
            var i = new Promise(function (t, i) {
              var a = (function (e) {
                var t = [];
                return (
                  Object.keys(e).forEach(function (r) {
                    t.push.apply(t, e[r]);
                  }),
                  t
                );
              })(e);
              d(a, r, function (e) {
                return n(e), e.length ? i({ errors: e, fields: s(e) }) : t();
              });
            });
            return (
              i.catch(function (e) {
                return e;
              }),
              i
            );
          }
          var a = t.firstFields || [];
          !0 === a && (a = Object.keys(e));
          var u = Object.keys(e),
            o = u.length,
            l = 0,
            f = [],
            c = new Promise(function (t, i) {
              var c = function (e) {
                if ((f.push.apply(f, e), l++, l === o))
                  return n(f), f.length ? i({ errors: f, fields: s(f) }) : t();
              };
              u.length || (n(f), t()),
                u.forEach(function (t) {
                  var n = e[t];
                  -1 !== a.indexOf(t)
                    ? d(n, r, c)
                    : (function (e, t, r) {
                        var n = [],
                          i = 0,
                          a = e.length;
                        function u(e) {
                          n.push.apply(n, e), i++, i === a && r(n);
                        }
                        e.forEach(function (e) {
                          t(e, u);
                        });
                      })(n, r, c);
                });
            });
          return (
            c.catch(function (e) {
              return e;
            }),
            c
          );
        }
        function p(e) {
          return function (t) {
            return t && t.message
              ? ((t.field = t.field || e.fullField), t)
              : {
                  message: "function" === typeof t ? t() : t,
                  field: t.field || e.fullField,
                };
          };
        }
        function v(e, t) {
          if (t)
            for (var r in t)
              if (t.hasOwnProperty(r)) {
                var n = t[r];
                "object" === (0, a.default)(n) &&
                "object" === (0, a.default)(e[r])
                  ? (e[r] = (0, i.default)((0, i.default)({}, e[r]), n))
                  : (e[r] = n);
              }
          return e;
        }
        function h(e, t, r, n, i, a) {
          !e.required ||
            (r.hasOwnProperty(e.field) && !f(t, a || e.type)) ||
            n.push(l(i.messages.required, e.fullField));
        }
        "undefined" !== typeof e &&
          Object({
            NODE_ENV: "production",
            VUE_APP_DARK_MODE: "false",
            VUE_APP_INDEX_CSS_HASH: "cc298949",
            VUE_APP_INDEX_DARK_CSS_HASH: "aeec55f8",
            VUE_APP_NAME: "游趣网络科技",
            VUE_APP_PLATFORM: "h5",
            BASE_URL: "/h5/",
          });
        var m = {
            email:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            url: new RegExp(
              "^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",
              "i",
            ),
            hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
          },
          g = {
            integer: function (e) {
              return /^(-)?\d+$/.test(e);
            },
            float: function (e) {
              return /^(-)?\d+(\.\d+)?$/.test(e);
            },
            array: function (e) {
              return Array.isArray(e);
            },
            regexp: function (e) {
              if (e instanceof RegExp) return !0;
              try {
                return !!new RegExp(e);
              } catch (t) {
                return !1;
              }
            },
            date: function (e) {
              return (
                "function" === typeof e.getTime &&
                "function" === typeof e.getMonth &&
                "function" === typeof e.getYear
              );
            },
            number: function (e) {
              return !isNaN(e) && "number" === typeof +e;
            },
            object: function (e) {
              return "object" === (0, a.default)(e) && !g.array(e);
            },
            method: function (e) {
              return "function" === typeof e;
            },
            email: function (e) {
              return (
                "string" === typeof e && !!e.match(m.email) && e.length < 255
              );
            },
            url: function (e) {
              return "string" === typeof e && !!e.match(m.url);
            },
            hex: function (e) {
              return "string" === typeof e && !!e.match(m.hex);
            },
          };
        var y = {
          required: h,
          whitespace: function (e, t, r, n, i) {
            (/^\s+$/.test(t) || "" === t) &&
              n.push(l(i.messages.whitespace, e.fullField));
          },
          type: function (e, t, r, n, i) {
            if (e.required && void 0 === t) h(e, t, r, n, i);
            else {
              var u = e.type;
              [
                "integer",
                "float",
                "array",
                "regexp",
                "object",
                "method",
                "email",
                "number",
                "date",
                "url",
                "hex",
              ].indexOf(u) > -1
                ? g[u](t) || n.push(l(i.messages.types[u], e.fullField, e.type))
                : u &&
                  (0, a.default)(t) !== e.type &&
                  n.push(l(i.messages.types[u], e.fullField, e.type));
            }
          },
          range: function (e, t, r, n, i) {
            var a = "number" === typeof e.len,
              u = "number" === typeof e.min,
              o = "number" === typeof e.max,
              s = t,
              f = null,
              d = "number" === typeof t,
              c = "string" === typeof t,
              p = Array.isArray(t);
            if (
              (d ? (f = "number") : c ? (f = "string") : p && (f = "array"), !f)
            )
              return !1;
            p && (s = t.length),
              c &&
                (s = t.replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, "_").length),
              a
                ? s !== e.len &&
                  n.push(l(i.messages[f].len, e.fullField, e.len))
                : u && !o && s < e.min
                  ? n.push(l(i.messages[f].min, e.fullField, e.min))
                  : o && !u && s > e.max
                    ? n.push(l(i.messages[f].max, e.fullField, e.max))
                    : u &&
                      o &&
                      (s < e.min || s > e.max) &&
                      n.push(l(i.messages[f].range, e.fullField, e.min, e.max));
          },
          enum: function (e, t, r, n, i) {
            (e["enum"] = Array.isArray(e["enum"]) ? e["enum"] : []),
              -1 === e["enum"].indexOf(t) &&
                n.push(
                  l(i.messages["enum"], e.fullField, e["enum"].join(", ")),
                );
          },
          pattern: function (e, t, r, n, i) {
            if (e.pattern)
              if (e.pattern instanceof RegExp)
                (e.pattern.lastIndex = 0),
                  e.pattern.test(t) ||
                    n.push(
                      l(i.messages.pattern.mismatch, e.fullField, t, e.pattern),
                    );
              else if ("string" === typeof e.pattern) {
                var a = new RegExp(e.pattern);
                a.test(t) ||
                  n.push(
                    l(i.messages.pattern.mismatch, e.fullField, t, e.pattern),
                  );
              }
          },
        };
        function b(e, t, r, n, i) {
          var a = e.type,
            u = [],
            o = e.required || (!e.required && n.hasOwnProperty(e.field));
          if (o) {
            if (f(t, a) && !e.required) return r();
            y.required(e, t, n, u, i, a), f(t, a) || y.type(e, t, n, u, i);
          }
          r(u);
        }
        var _ = {
          string: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t, "string") && !e.required) return r();
              y.required(e, t, n, a, i, "string"),
                f(t, "string") ||
                  (y.type(e, t, n, a, i),
                  y.range(e, t, n, a, i),
                  y.pattern(e, t, n, a, i),
                  !0 === e.whitespace && y.whitespace(e, t, n, a, i));
            }
            r(a);
          },
          method: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i), void 0 !== t && y.type(e, t, n, a, i);
            }
            r(a);
          },
          number: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (("" === t && (t = void 0), f(t) && !e.required)) return r();
              y.required(e, t, n, a, i),
                void 0 !== t && (y.type(e, t, n, a, i), y.range(e, t, n, a, i));
            }
            r(a);
          },
          boolean: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i), void 0 !== t && y.type(e, t, n, a, i);
            }
            r(a);
          },
          regexp: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i), f(t) || y.type(e, t, n, a, i);
            }
            r(a);
          },
          integer: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i),
                void 0 !== t && (y.type(e, t, n, a, i), y.range(e, t, n, a, i));
            }
            r(a);
          },
          float: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i),
                void 0 !== t && (y.type(e, t, n, a, i), y.range(e, t, n, a, i));
            }
            r(a);
          },
          array: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t, "array") && !e.required) return r();
              y.required(e, t, n, a, i, "array"),
                f(t, "array") ||
                  (y.type(e, t, n, a, i), y.range(e, t, n, a, i));
            }
            r(a);
          },
          object: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i), void 0 !== t && y.type(e, t, n, a, i);
            }
            r(a);
          },
          enum: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i),
                void 0 !== t && y["enum"](e, t, n, a, i);
            }
            r(a);
          },
          pattern: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t, "string") && !e.required) return r();
              y.required(e, t, n, a, i),
                f(t, "string") || y.pattern(e, t, n, a, i);
            }
            r(a);
          },
          date: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              var o;
              if ((y.required(e, t, n, a, i), !f(t)))
                (o = "number" === typeof t ? new Date(t) : t),
                  y.type(e, o, n, a, i),
                  o && y.range(e, o.getTime(), n, a, i);
            }
            r(a);
          },
          url: b,
          hex: b,
          email: b,
          required: function (e, t, r, n, i) {
            var u = [],
              o = Array.isArray(t) ? "array" : (0, a.default)(t);
            y.required(e, t, n, u, i, o), r(u);
          },
          any: function (e, t, r, n, i) {
            var a = [],
              u = e.required || (!e.required && n.hasOwnProperty(e.field));
            if (u) {
              if (f(t) && !e.required) return r();
              y.required(e, t, n, a, i);
            }
            r(a);
          },
        };
        function w() {
          return {
            default: "Validation error on field %s",
            required: "%s is required",
            enum: "%s must be one of %s",
            whitespace: "%s cannot be empty",
            date: {
              format: "%s date %s is invalid for format %s",
              parse: "%s date could not be parsed, %s is invalid ",
              invalid: "%s date %s is invalid",
            },
            types: {
              string: "%s is not a %s",
              method: "%s is not a %s (function)",
              array: "%s is not an %s",
              object: "%s is not an %s",
              number: "%s is not a %s",
              date: "%s is not a %s",
              boolean: "%s is not a %s",
              integer: "%s is not an %s",
              float: "%s is not a %s",
              regexp: "%s is not a valid %s",
              email: "%s is not a valid %s",
              url: "%s is not a valid %s",
              hex: "%s is not a valid %s",
            },
            string: {
              len: "%s must be exactly %s characters",
              min: "%s must be at least %s characters",
              max: "%s cannot be longer than %s characters",
              range: "%s must be between %s and %s characters",
            },
            number: {
              len: "%s must equal %s",
              min: "%s cannot be less than %s",
              max: "%s cannot be greater than %s",
              range: "%s must be between %s and %s",
            },
            array: {
              len: "%s must be exactly %s in length",
              min: "%s cannot be less than %s in length",
              max: "%s cannot be greater than %s in length",
              range: "%s must be between %s and %s in length",
            },
            pattern: { mismatch: "%s value %s does not match pattern %s" },
            clone: function () {
              var e = JSON.parse(JSON.stringify(this));
              return (e.clone = this.clone), e;
            },
          };
        }
        var x = w();
        function q(e) {
          (this.rules = null), (this._messages = x), this.define(e);
        }
        (q.prototype = {
          messages: function (e) {
            return e && (this._messages = v(w(), e)), this._messages;
          },
          define: function (e) {
            if (!e) throw new Error("Cannot configure a schema with no rules");
            if ("object" !== (0, a.default)(e) || Array.isArray(e))
              throw new Error("Rules must be an object");
            var t, r;
            for (t in ((this.rules = {}), e))
              e.hasOwnProperty(t) &&
                ((r = e[t]), (this.rules[t] = Array.isArray(r) ? r : [r]));
          },
          validate: function (e, t, r) {
            var n = this;
            void 0 === t && (t = {}), void 0 === r && (r = function () {});
            var u,
              o,
              f = e,
              d = t,
              h = r;
            if (
              ("function" === typeof d && ((h = d), (d = {})),
              !this.rules || 0 === Object.keys(this.rules).length)
            )
              return h && h(), Promise.resolve();
            if (d.messages) {
              var m = this.messages();
              m === x && (m = w()), v(m, d.messages), (d.messages = m);
            } else d.messages = this.messages();
            var g = {},
              y = d.keys || Object.keys(this.rules);
            y.forEach(function (t) {
              (u = n.rules[t]),
                (o = f[t]),
                u.forEach(function (r) {
                  var a = r;
                  "function" === typeof a.transform &&
                    (f === e && (f = (0, i.default)({}, f)),
                    (o = f[t] = a.transform(o))),
                    (a =
                      "function" === typeof a
                        ? { validator: a }
                        : (0, i.default)({}, a)),
                    (a.validator = n.getValidationMethod(a)),
                    (a.field = t),
                    (a.fullField = a.fullField || t),
                    (a.type = n.getType(a)),
                    a.validator &&
                      ((g[t] = g[t] || []),
                      g[t].push({ rule: a, value: o, source: f, field: t }));
                });
            });
            var b = {};
            return c(
              g,
              d,
              function (e, t) {
                var r,
                  n = e.rule,
                  u =
                    ("object" === n.type || "array" === n.type) &&
                    ("object" === (0, a.default)(n.fields) ||
                      "object" === (0, a.default)(n.defaultField));
                function o(e, t) {
                  return (0, i.default)(
                    (0, i.default)({}, t),
                    {},
                    { fullField: "".concat(n.fullField, ".").concat(e) },
                  );
                }
                function s(r) {
                  void 0 === r && (r = []);
                  var a = r;
                  if (
                    (Array.isArray(a) || (a = [a]),
                    !d.suppressWarning &&
                      a.length &&
                      q.warning("async-validator:", a),
                    a.length && n.message && (a = [].concat(n.message)),
                    (a = a.map(p(n))),
                    d.first && a.length)
                  )
                    return (b[n.field] = 1), t(a);
                  if (u) {
                    if (n.required && !e.value)
                      return (
                        (a = n.message
                          ? [].concat(n.message).map(p(n))
                          : d.error
                            ? [d.error(n, l(d.messages.required, n.field))]
                            : []),
                        t(a)
                      );
                    var s = {};
                    if (n.defaultField)
                      for (var f in e.value)
                        e.value.hasOwnProperty(f) && (s[f] = n.defaultField);
                    for (var c in ((s = (0, i.default)(
                      (0, i.default)({}, s),
                      e.rule.fields,
                    )),
                    s))
                      if (s.hasOwnProperty(c)) {
                        var v = Array.isArray(s[c]) ? s[c] : [s[c]];
                        s[c] = v.map(o.bind(null, c));
                      }
                    var h = new q(s);
                    h.messages(d.messages),
                      e.rule.options &&
                        ((e.rule.options.messages = d.messages),
                        (e.rule.options.error = d.error)),
                      h.validate(e.value, e.rule.options || d, function (e) {
                        var r = [];
                        a && a.length && r.push.apply(r, a),
                          e && e.length && r.push.apply(r, e),
                          t(r.length ? r : null);
                      });
                  } else t(a);
                }
                (u = u && (n.required || (!n.required && e.value))),
                  (n.field = e.field),
                  n.asyncValidator
                    ? (r = n.asyncValidator(n, e.value, s, e.source, d))
                    : n.validator &&
                      ((r = n.validator(n, e.value, s, e.source, d)),
                      !0 === r
                        ? s()
                        : !1 === r
                          ? s(n.message || "".concat(n.field, " fails"))
                          : r instanceof Array
                            ? s(r)
                            : r instanceof Error && s(r.message)),
                  r &&
                    r.then &&
                    r.then(
                      function () {
                        return s();
                      },
                      function (e) {
                        return s(e);
                      },
                    );
              },
              function (e) {
                (function (e) {
                  var t,
                    r = [],
                    n = {};
                  function i(e) {
                    var t;
                    Array.isArray(e)
                      ? (r = (t = r).concat.apply(t, e))
                      : r.push(e);
                  }
                  for (t = 0; t < e.length; t++) i(e[t]);
                  r.length ? (n = s(r)) : ((r = null), (n = null)), h(r, n);
                })(e);
              },
            );
          },
          getType: function (e) {
            if (
              (void 0 === e.type &&
                e.pattern instanceof RegExp &&
                (e.type = "pattern"),
              "function" !== typeof e.validator &&
                e.type &&
                !_.hasOwnProperty(e.type))
            )
              throw new Error(l("Unknown rule type %s", e.type));
            return e.type || "string";
          },
          getValidationMethod: function (e) {
            if ("function" === typeof e.validator) return e.validator;
            var t = Object.keys(e),
              r = t.indexOf("message");
            return (
              -1 !== r && t.splice(r, 1),
              1 === t.length && "required" === t[0]
                ? _.required
                : _[this.getType(e)] || !1
            );
          },
        }),
          (q.register = function (e, t) {
            if ("function" !== typeof t)
              throw new Error(
                "Cannot register a validator by type, validator is not a function",
              );
            _[e] = t;
          }),
          (q.warning = o),
          (q.messages = x);
        var P = q;
        t.default = P;
      }).call(this, r("28d0"));
    },
    "28d0": function (e, t, r) {
      (t.nextTick = function (e) {
        var t = Array.prototype.slice.call(arguments);
        t.shift(),
          setTimeout(function () {
            e.apply(null, t);
          }, 0);
      }),
        (t.platform = t.arch = t.execPath = t.title = "browser"),
        (t.pid = 1),
        (t.browser = !0),
        (t.env = {}),
        (t.argv = []),
        (t.binding = function (e) {
          throw new Error("No such module. (Possibly not yet loaded)");
        }),
        (function () {
          var e,
            n = "/";
          (t.cwd = function () {
            return n;
          }),
            (t.chdir = function (t) {
              e || (e = r("a3fc")), (n = e.resolve(t, n));
            });
        })(),
        (t.exit =
          t.kill =
          t.umask =
          t.dlopen =
          t.uptime =
          t.memoryUsage =
          t.uvCounters =
            function () {}),
        (t.features = {});
    },
    "433b": function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("64aa");
      var i,
        a,
        u = n(r("9b1b")),
        o = {
          props: (0, u.default)(
            {
              model: {
                type: Object,
                default: function () {
                  return {};
                },
              },
              rules: {
                type: [Object, Function, Array],
                default: function () {
                  return {};
                },
              },
              errorType: { type: String, default: "message" },
              borderBottom: { type: Boolean, default: !0 },
              labelPosition: { type: String, default: "left" },
              labelWidth: { type: [String, Number], default: 45 },
              labelAlign: { type: String, default: "left" },
              labelStyle: {
                type: Object,
                default: function () {
                  return {};
                },
              },
            },
            null === (i = uni.$uv) ||
              void 0 === i ||
              null === (a = i.props) ||
              void 0 === a
              ? void 0
              : a.form,
          ),
        };
      t.default = o;
    },
    "74fa": function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("64aa");
      var i,
        a,
        u = n(r("9b1b")),
        o = {
          props: (0, u.default)(
            {
              label: { type: String, default: "" },
              prop: { type: String, default: "" },
              borderBottom: { type: [Boolean], default: !1 },
              labelPosition: { type: String, default: "" },
              labelWidth: { type: [String, Number], default: "" },
              rightIcon: { type: String, default: "" },
              leftIcon: { type: String, default: "" },
              required: { type: Boolean, default: !1 },
              leftIconStyle: { type: [String, Object], default: "" },
            },
            null === (i = uni.$uv) ||
              void 0 === i ||
              null === (a = i.props) ||
              void 0 === a
              ? void 0
              : a.formItem,
          ),
        };
      t.default = o;
    },
    "88ac": function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(r("2634")),
        a = n(r("b7c7")),
        u = n(r("39d8")),
        o = n(r("2fdc"));
      r("fd3c"),
        r("dc8a"),
        r("c223"),
        r("4626"),
        r("5ac7"),
        r("5c47"),
        r("0506"),
        r("aa9c"),
        r("bf0f");
      var s = n(r("4d8f0")),
        l = n(r("9463")),
        f = n(r("433b")),
        d = n(r("235d"));
      d.default.warning = function () {};
      var c = {
        name: "uv-form",
        mixins: [s.default, l.default, f.default],
        provide: function () {
          return { uForm: this };
        },
        data: function () {
          return { formRules: {}, validator: {}, originalModel: null };
        },
        watch: {
          rules: {
            immediate: !0,
            handler: function (e) {
              this.setRules(e);
            },
          },
          propsChange: function (e) {
            var t;
            null !== (t = this.children) &&
              void 0 !== t &&
              t.length &&
              this.children.map(function (e) {
                "function" == typeof e.updateParentData && e.updateParentData();
              });
          },
          model: {
            immediate: !0,
            handler: function (e) {
              this.originalModel ||
                (this.originalModel = this.$uv.deepClone(e));
            },
          },
        },
        computed: {
          propsChange: function () {
            return [
              this.errorType,
              this.borderBottom,
              this.labelPosition,
              this.labelWidth,
              this.labelAlign,
              this.labelStyle,
            ];
          },
        },
        created: function () {
          this.children = [];
        },
        methods: {
          setRules: function (e) {
            0 !== Object.keys(e).length &&
              ((this.formRules = e), (this.validator = new d.default(e)));
          },
          resetFields: function () {
            this.resetModel();
          },
          resetModel: function (e) {
            var t = this;
            this.children.map(function (e) {
              var r = null === e || void 0 === e ? void 0 : e.prop,
                n = t.$uv.getProperty(t.originalModel, r);
              t.$uv.setProperty(t.model, r, n);
            });
          },
          clearValidate: function (e) {
            (e = [].concat(e)),
              this.children.map(function (t) {
                (void 0 === e[0] || e.includes(t.prop)) && (t.message = null);
              });
          },
          validateField: function (e, t) {
            var r = arguments,
              n = this;
            return (0, o.default)(
              (0, i.default)().mark(function o() {
                var s;
                return (0, i.default)().wrap(function (i) {
                  while (1)
                    switch ((i.prev = i.next)) {
                      case 0:
                        (s = r.length > 2 && void 0 !== r[2] ? r[2] : null),
                          n.$nextTick(function () {
                            var r = [];
                            (e = [].concat(e)),
                              n.children.map(function (t) {
                                var i = [];
                                if (e.includes(t.prop)) {
                                  var o = n.$uv.getProperty(n.model, t.prop),
                                    l = t.prop.split("."),
                                    f = l[l.length - 1],
                                    c = n.formRules[t.prop];
                                  if (!c) return;
                                  for (
                                    var p = [].concat(c), v = 0;
                                    v < p.length;
                                    v++
                                  ) {
                                    var h = p[v],
                                      m = [].concat(
                                        null === h || void 0 === h
                                          ? void 0
                                          : h.trigger,
                                      );
                                    if (!s || m.includes(s)) {
                                      var g = new d.default(
                                        (0, u.default)({}, f, h),
                                      );
                                      g.validate(
                                        (0, u.default)({}, f, o),
                                        function (e, u) {
                                          n.$uv.test.array(e) &&
                                            (r.push.apply(r, (0, a.default)(e)),
                                            i.push.apply(i, (0, a.default)(e))),
                                            n.$nextTick(function () {
                                              var e, r;
                                              t.message =
                                                null !== (e = i[0]) &&
                                                void 0 !== e &&
                                                e.message
                                                  ? null === (r = i[0]) ||
                                                    void 0 === r
                                                    ? void 0
                                                    : r.message
                                                  : null;
                                            });
                                        },
                                      );
                                    }
                                  }
                                }
                              }),
                              "function" === typeof t && t(r);
                          });
                      case 2:
                      case "end":
                        return i.stop();
                    }
                }, o);
              }),
            )();
          },
          validate: function (e) {
            var t = this;
            return new Promise(function (e, r) {
              t.$nextTick(function () {
                var n = t.children.map(function (e) {
                  return e.prop;
                });
                t.validateField(n, function (n) {
                  n.length
                    ? ("toast" === t.errorType && t.$uv.toast(n[0].message),
                      r(n))
                    : e(!0);
                });
              });
            });
          },
        },
      };
      t.default = c;
    },
    "88c1": function (e, t, r) {
      var n = r("c86c");
      (t = n(!1)),
        t.push([
          e.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-b7a0f236], uni-scroll-view[data-v-b7a0f236], uni-swiper-item[data-v-b7a0f236]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.uv-form-item[data-v-b7a0f236]{display:flex;flex-direction:column;font-size:14px;color:#303133}.uv-form-item__body[data-v-b7a0f236]{display:flex;flex-direction:row;padding:10px 0}.uv-form-item__body__left[data-v-b7a0f236]{display:flex;flex-direction:row;align-items:center}.uv-form-item__body__left__content[data-v-b7a0f236]{position:relative;display:flex;flex-direction:row;align-items:center;padding-right:%?10?%;flex:1}.uv-form-item__body__left__content__icon[data-v-b7a0f236]{margin-right:%?8?%}.uv-form-item__body__left__content__required[data-v-b7a0f236]{position:absolute;left:-9px;color:#f56c6c;line-height:20px;font-size:20px;top:3px}.uv-form-item__body__left__content__label[data-v-b7a0f236]{display:flex;flex-direction:row;align-items:center;flex:1;color:#303133;font-size:15px}.uv-form-item__body__right[data-v-b7a0f236]{flex:1}.uv-form-item__body__right__content[data-v-b7a0f236]{display:flex;flex-direction:row;align-items:center;flex:1}.uv-form-item__body__right__content__slot[data-v-b7a0f236]{flex:1;display:flex;flex-direction:row;align-items:center}.uv-form-item__body__right__content__icon[data-v-b7a0f236]{margin-left:%?10?%;color:#c0c4cc;font-size:%?30?%}.uv-form-item__body__right__message__box[data-v-b7a0f236]{height:16px;line-height:16px}.uv-form-item__body__right__message[data-v-b7a0f236]{margin-top:-6px;line-height:24px;font-size:12px;color:#f56c6c}',
          "",
        ]),
        (e.exports = t);
    },
    "88c2": function (e, t, r) {
      var n = r("88c1");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[e.i, n, ""]]),
        n.locals && (e.exports = n.locals);
      var i = r("967d").default;
      i("5d86a4d9", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "966a": function (e, t, r) {
      "use strict";
      r.r(t);
      var n = r("ed69"),
        i = r.n(n);
      for (var a in n)
        ["default"].indexOf(a) < 0 &&
          (function (e) {
            r.d(t, e, function () {
              return n[e];
            });
          })(a);
      t["default"] = i.a;
    },
    "9f89": function (e, t, r) {
      "use strict";
      r.d(t, "b", function () {
        return n;
      }),
        r.d(t, "c", function () {
          return i;
        }),
        r.d(t, "a", function () {});
      var n = function () {
          var e = this.$createElement,
            t = this._self._c || e;
          return t(
            "v-uni-view",
            { staticClass: "uv-form" },
            [this._t("default")],
            2,
          );
        },
        i = [];
    },
    a3fc: function (e, t, r) {
      (function (e) {
        function r(e, t) {
          for (var r = 0, n = e.length - 1; n >= 0; n--) {
            var i = e[n];
            "." === i
              ? e.splice(n, 1)
              : ".." === i
                ? (e.splice(n, 1), r++)
                : r && (e.splice(n, 1), r--);
          }
          if (t) for (; r--; r) e.unshift("..");
          return e;
        }
        function n(e, t) {
          if (e.filter) return e.filter(t);
          for (var r = [], n = 0; n < e.length; n++)
            t(e[n], n, e) && r.push(e[n]);
          return r;
        }
        (t.resolve = function () {
          for (
            var t = "", i = !1, a = arguments.length - 1;
            a >= -1 && !i;
            a--
          ) {
            var u = a >= 0 ? arguments[a] : e.cwd();
            if ("string" !== typeof u)
              throw new TypeError("Arguments to path.resolve must be strings");
            u && ((t = u + "/" + t), (i = "/" === u.charAt(0)));
          }
          return (
            (t = r(
              n(t.split("/"), function (e) {
                return !!e;
              }),
              !i,
            ).join("/")),
            (i ? "/" : "") + t || "."
          );
        }),
          (t.normalize = function (e) {
            var a = t.isAbsolute(e),
              u = "/" === i(e, -1);
            return (
              (e = r(
                n(e.split("/"), function (e) {
                  return !!e;
                }),
                !a,
              ).join("/")),
              e || a || (e = "."),
              e && u && (e += "/"),
              (a ? "/" : "") + e
            );
          }),
          (t.isAbsolute = function (e) {
            return "/" === e.charAt(0);
          }),
          (t.join = function () {
            var e = Array.prototype.slice.call(arguments, 0);
            return t.normalize(
              n(e, function (e, t) {
                if ("string" !== typeof e)
                  throw new TypeError("Arguments to path.join must be strings");
                return e;
              }).join("/"),
            );
          }),
          (t.relative = function (e, r) {
            function n(e) {
              for (var t = 0; t < e.length; t++) if ("" !== e[t]) break;
              for (var r = e.length - 1; r >= 0; r--) if ("" !== e[r]) break;
              return t > r ? [] : e.slice(t, r - t + 1);
            }
            (e = t.resolve(e).substr(1)), (r = t.resolve(r).substr(1));
            for (
              var i = n(e.split("/")),
                a = n(r.split("/")),
                u = Math.min(i.length, a.length),
                o = u,
                s = 0;
              s < u;
              s++
            )
              if (i[s] !== a[s]) {
                o = s;
                break;
              }
            var l = [];
            for (s = o; s < i.length; s++) l.push("..");
            return (l = l.concat(a.slice(o))), l.join("/");
          }),
          (t.sep = "/"),
          (t.delimiter = ":"),
          (t.dirname = function (e) {
            if (("string" !== typeof e && (e += ""), 0 === e.length))
              return ".";
            for (
              var t = e.charCodeAt(0),
                r = 47 === t,
                n = -1,
                i = !0,
                a = e.length - 1;
              a >= 1;
              --a
            )
              if (((t = e.charCodeAt(a)), 47 === t)) {
                if (!i) {
                  n = a;
                  break;
                }
              } else i = !1;
            return -1 === n
              ? r
                ? "/"
                : "."
              : r && 1 === n
                ? "/"
                : e.slice(0, n);
          }),
          (t.basename = function (e, t) {
            var r = (function (e) {
              "string" !== typeof e && (e += "");
              var t,
                r = 0,
                n = -1,
                i = !0;
              for (t = e.length - 1; t >= 0; --t)
                if (47 === e.charCodeAt(t)) {
                  if (!i) {
                    r = t + 1;
                    break;
                  }
                } else -1 === n && ((i = !1), (n = t + 1));
              return -1 === n ? "" : e.slice(r, n);
            })(e);
            return (
              t &&
                r.substr(-1 * t.length) === t &&
                (r = r.substr(0, r.length - t.length)),
              r
            );
          }),
          (t.extname = function (e) {
            "string" !== typeof e && (e += "");
            for (
              var t = -1, r = 0, n = -1, i = !0, a = 0, u = e.length - 1;
              u >= 0;
              --u
            ) {
              var o = e.charCodeAt(u);
              if (47 !== o)
                -1 === n && ((i = !1), (n = u + 1)),
                  46 === o
                    ? -1 === t
                      ? (t = u)
                      : 1 !== a && (a = 1)
                    : -1 !== t && (a = -1);
              else if (!i) {
                r = u + 1;
                break;
              }
            }
            return -1 === t ||
              -1 === n ||
              0 === a ||
              (1 === a && t === n - 1 && t === r + 1)
              ? ""
              : e.slice(t, n);
          });
        var i =
          "b" === "ab".substr(-1)
            ? function (e, t, r) {
                return e.substr(t, r);
              }
            : function (e, t, r) {
                return t < 0 && (t = e.length + t), e.substr(t, r);
              };
      }).call(this, r("28d0"));
    },
    ed69: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var i = n(r("4d8f0")),
        a = n(r("9463")),
        u = n(r("74fa")),
        o = {
          name: "uv-form-item",
          emits: ["click"],
          mixins: [i.default, a.default, u.default],
          data: function () {
            return {
              message: "",
              parentData: {
                labelPosition: "left",
                labelAlign: "left",
                labelStyle: {},
                labelWidth: 45,
                errorType: "message",
              },
            };
          },
          created: function () {
            this.init();
          },
          methods: {
            init: function () {
              this.updateParentData(),
                this.parent ||
                  this.$uv.error("uv-form-item需要结合uv-form组件使用");
            },
            updateParentData: function () {
              this.getParentData("uv-form");
            },
            clearValidate: function () {
              this.message = null;
            },
            resetField: function () {
              var e = this.$uv.getProperty(
                this.parent.originalModel,
                this.prop,
              );
              this.$uv.setProperty(this.parent.model, this.prop, e),
                (this.message = null);
            },
            clickHandler: function () {
              this.$emit("click");
            },
          },
        };
      t.default = o;
    },
    f133: function (e, t, r) {
      "use strict";
      var n = r("88c2"),
        i = r.n(n);
      i.a;
    },
  },
]);
//# sourceMappingURL=pages-agent-cash_score~pages-pay-raffle~pages-pay-submit~pages-user-apply~pages-user-certification~p~2f537e91.6fe07194.js.map
