(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-kefu-test"],
  {
    "1bd6": function (t, e, n) {
      "use strict";
      var a = n("d615"),
        i = n.n(a);
      i.a;
    },
    "2a43": function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("48cb"),
        i = n("e82a");
      for (var o in i)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(o);
      n("1bd6");
      var c = n("828b"),
        s = Object(c["a"])(
          i["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "1017ed97",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    "48cb": function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return a;
      }),
        n.d(e, "c", function () {
          return i;
        }),
        n.d(e, "a", function () {});
      var a = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            { staticClass: "container" },
            [
              e("v-uni-text", { staticClass: "time-elapsed" }, [
                this._v(this._s(this.timeElapsed)),
              ]),
            ],
            1,
          );
        },
        i = [];
    },
    "88d4": function (t, e, n) {
      "use strict";
      n("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        n("c223");
      var a = {
        data: function () {
          return {
            begin_time: "2025-01-19T08:00:00",
            now_time: new Date().toISOString(),
            timeElapsed: "",
          };
        },
        onLoad: function () {
          this.calculateTimeElapsed(),
            (this.timer = setInterval(this.updateTimeElapsed, 1e3));
        },
        methods: {
          calculateTimeElapsed: function () {
            var t = new Date(this.begin_time),
              e = new Date(this.now_time),
              n = e - t,
              a = Math.floor(n / 36e5),
              i = Math.floor((n % 36e5) / 6e4),
              o = Math.floor((n % 6e4) / 1e3);
            this.timeElapsed = "".concat(a, ":").concat(i, ":").concat(o);
          },
          updateTimeElapsed: function () {
            (this.now_time = new Date().toISOString()),
              this.calculateTimeElapsed();
          },
        },
        onUnload: function () {
          clearInterval(this.timer);
        },
      };
      e.default = a;
    },
    cde5: function (t, e, n) {
      var a = n("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          ".container[data-v-1017ed97]{display:flex;justify-content:center;align-items:center;height:100vh;flex-direction:column}.time-elapsed[data-v-1017ed97]{font-size:24px;font-weight:700}",
          "",
        ]),
        (t.exports = e);
    },
    d615: function (t, e, n) {
      var a = n("cde5");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var i = n("967d").default;
      i("0d63ba30", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e82a: function (t, e, n) {
      "use strict";
      n.r(e);
      var a = n("88d4"),
        i = n.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = i.a;
    },
  },
]);
//# sourceMappingURL=pages_sub1-kefu-test.8549b20c.js.map
