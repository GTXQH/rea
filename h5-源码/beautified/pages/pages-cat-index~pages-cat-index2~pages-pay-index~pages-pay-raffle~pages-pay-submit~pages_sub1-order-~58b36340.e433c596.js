(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "pages-cat-index~pages-cat-index2~pages-pay-index~pages-pay-raffle~pages-pay-submit~pages_sub1-order-~58b36340",
  ],
  {
    "295e": function (n, e, i) {
      "use strict";
      var t = i("6a50");
      t("Uint32", function (n) {
        return function (e, i, t) {
          return n(this, e, i, t);
        };
      });
    },
    "2e7f": function (n, e, i) {
      "use strict";
      var t = Math.log,
        r = Math.LOG10E;
      n.exports =
        Math.log10 ||
        function (n) {
          return t(n) * r;
        };
    },
    "4fbd": function (n, e, i) {
      "use strict";
      i("6a54");
      var t = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.cal = void 0);
      var r = t(i("80b1")),
        s = t(i("efe5")),
        o = i("fdfb"),
        u = (function () {
          function n() {
            (0, r.default)(this, n);
          }
          return (
            (0, s.default)(n, [
              {
                key: "jia",
                value: function (n, e, i) {
                  return new o.Decimal(n)
                    .add(new o.Decimal(e))
                    .toFixed(i, o.Decimal.ROUND_DOWN);
                },
              },
              {
                key: "jian",
                value: function (n, e, i) {
                  return new o.Decimal(n)
                    .sub(new o.Decimal(e))
                    .toFixed(i, o.Decimal.ROUND_DOWN);
                },
              },
              {
                key: "cheng",
                value: function (n, e, i) {
                  return new o.Decimal(n)
                    .mul(new o.Decimal(e))
                    .toFixed(i, o.Decimal.ROUND_DOWN);
                },
              },
              {
                key: "chu",
                value: function (n, e, i) {
                  return new o.Decimal(n)
                    .div(new o.Decimal(e))
                    .toFixed(i, o.Decimal.ROUND_DOWN);
                },
              },
            ]),
            n
          );
        })(),
        c = new u();
      e.cal = c;
    },
    d937: function (n, e, i) {
      "use strict";
      var t = i("8bdb"),
        r = i("bb80"),
        s = i("497b"),
        o = i("83fa"),
        u = i("f298"),
        c = i("2e7f"),
        f = i("af9e"),
        a = RangeError,
        d = String,
        l = isFinite,
        h = Math.abs,
        p = Math.floor,
        g = Math.pow,
        w = Math.round,
        m = r((1).toExponential),
        v = r(u),
        N = r("".slice),
        b =
          "-6.9000e-11" === m(-69e-12, 4) &&
          "1.25e+0" === m(1.255, 2) &&
          "1.235e+4" === m(12345, 3) &&
          "3e+1" === m(25, 0),
        x =
          !b ||
          !(function () {
            return (
              f(function () {
                m(1, 1 / 0);
              }) &&
              f(function () {
                m(1, -1 / 0);
              })
            );
          })() ||
          !(function () {
            return !f(function () {
              m(1 / 0, 1 / 0), m(NaN, 1 / 0);
            });
          })();
      t(
        { target: "Number", proto: !0, forced: x },
        {
          toExponential: function (n) {
            var e = o(this);
            if (void 0 === n) return m(e);
            var i = s(n);
            if (!l(e)) return String(e);
            if (i < 0 || i > 20) throw new a("Incorrect fraction digits");
            if (b) return m(e, i);
            var t = "",
              r = "",
              u = 0,
              f = "",
              x = "";
            if ((e < 0 && ((t = "-"), (e = -e)), 0 === e))
              (u = 0), (r = v("0", i + 1));
            else {
              var E = c(e);
              u = p(E);
              var y = 0,
                D = g(10, u - i);
              (y = w(e / D)),
                2 * e >= (2 * y + 1) * D && (y += 1),
                y >= g(10, i + 1) && ((y /= 10), (u += 1)),
                (r = d(y));
            }
            return (
              0 !== i && (r = N(r, 0, 1) + "." + N(r, 1)),
              0 === u
                ? ((f = "+"), (x = "0"))
                : ((f = u > 0 ? "+" : "-"), (x = d(h(u)))),
              (r += "e" + f + x),
              t + r
            );
          },
        },
      );
    },
    fdfb: function (n, e, i) {
      var t,
        r = i("bdbb").default;
      i("7a76"),
        i("c9b5"),
        i("d937"),
        i("f7a5"),
        i("5ef2"),
        i("bf0f"),
        i("ab80"),
        i("dc69"),
        i("aa9c"),
        i("3efd"),
        i("5c47"),
        i("a1c1"),
        i("af8f"),
        i("0506"),
        i("4db2"),
        i("295e"),
        i("4d8f"),
        i("7b97"),
        i("668a"),
        i("c5b7"),
        i("8ff5"),
        i("2378"),
        i("641a"),
        i("64e0"),
        i("cce3"),
        i("efba"),
        i("d009"),
        i("bd7d"),
        i("7edd"),
        i("d798"),
        i("f547"),
        i("5e54"),
        i("b60a"),
        i("8c18"),
        i("12973"),
        i("f991"),
        i("198e"),
        i("8557"),
        i("63b1"),
        i("1954"),
        i("1cf1"),
        i("01a2"),
        i("e39c"),
        i("844d"),
        i("18f7"),
        i("de6c"),
        i("4e9b"),
        i("114e"),
        i("c240"),
        (function (s) {
          "use strict";
          /*!
           *  decimal.js v10.4.3
           *  An arbitrary-precision Decimal type for JavaScript.
           *  https://github.com/MikeMcl/decimal.js
           *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
           *  MIT Licence
           */ var o,
            u,
            c,
            f = 9e15,
            a = "0123456789abcdef",
            d =
              "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
            l =
              "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
            h = {
              precision: 20,
              rounding: 4,
              modulo: 1,
              toExpNeg: -7,
              toExpPos: 21,
              minE: -f,
              maxE: f,
              crypto: !1,
            },
            p = !0,
            g = "[DecimalError] Invalid argument: ",
            w = "[object Decimal]",
            m = Math.floor,
            v = Math.pow,
            N = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
            b = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
            x = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
            E = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
            y = 1e7,
            D = d.length - 1,
            M = l.length - 1,
            O = { toStringTag: w };
          function q(n) {
            var e,
              i,
              t,
              r = n.length - 1,
              s = "",
              o = n[0];
            if (r > 0) {
              for (s += o, e = 1; e < r; e++)
                (t = n[e] + ""), (i = 7 - t.length), i && (s += L(i)), (s += t);
              (o = n[e]), (t = o + ""), (i = 7 - t.length), i && (s += L(i));
            } else if (0 === o) return "0";
            for (; o % 10 === 0; ) o /= 10;
            return s + o;
          }
          function F(n, e, i) {
            if (n !== ~~n || n < e || n > i) throw Error(g + n);
          }
          function _(n, e, i, t) {
            var r, s, o, u;
            for (s = n[0]; s >= 10; s /= 10) --e;
            return (
              --e < 0
                ? ((e += 7), (r = 0))
                : ((r = Math.ceil((e + 1) / 7)), (e %= 7)),
              (s = v(10, 7 - e)),
              (u = n[r] % s | 0),
              null == t
                ? e < 3
                  ? (0 == e
                      ? (u = (u / 100) | 0)
                      : 1 == e && (u = (u / 10) | 0),
                    (o =
                      (i < 4 && 99999 == u) ||
                      (i > 3 && 49999 == u) ||
                      5e4 == u ||
                      0 == u))
                  : (o =
                      (((i < 4 && u + 1 == s) || (i > 3 && u + 1 == s / 2)) &&
                        ((n[r + 1] / s / 100) | 0) == v(10, e - 2) - 1) ||
                      ((u == s / 2 || 0 == u) &&
                        0 == ((n[r + 1] / s / 100) | 0)))
                : e < 4
                  ? (0 == e
                      ? (u = (u / 1e3) | 0)
                      : 1 == e
                        ? (u = (u / 100) | 0)
                        : 2 == e && (u = (u / 10) | 0),
                    (o =
                      ((t || i < 4) && 9999 == u) ||
                      (!t && i > 3 && 4999 == u)))
                  : (o =
                      (((t || i < 4) && u + 1 == s) ||
                        (!t && i > 3 && u + 1 == s / 2)) &&
                      ((n[r + 1] / s / 1e3) | 0) == v(10, e - 3) - 1),
              o
            );
          }
          function R(n, e, i) {
            for (var t, r, s = [0], o = 0, u = n.length; o < u; ) {
              for (r = s.length; r--; ) s[r] *= e;
              for (s[0] += a.indexOf(n.charAt(o++)), t = 0; t < s.length; t++)
                s[t] > i - 1 &&
                  (void 0 === s[t + 1] && (s[t + 1] = 0),
                  (s[t + 1] += (s[t] / i) | 0),
                  (s[t] %= i));
            }
            return s.reverse();
          }
          (O.absoluteValue = O.abs =
            function () {
              var n = new this.constructor(this);
              return n.s < 0 && (n.s = 1), Z(n);
            }),
            (O.ceil = function () {
              return Z(new this.constructor(this), this.e + 1, 2);
            }),
            (O.clampedTo = O.clamp =
              function (n, e) {
                var i,
                  t = this,
                  r = t.constructor;
                if (((n = new r(n)), (e = new r(e)), !n.s || !e.s))
                  return new r(NaN);
                if (n.gt(e)) throw Error(g + e);
                return (i = t.cmp(n)), i < 0 ? n : t.cmp(e) > 0 ? e : new r(t);
              }),
            (O.comparedTo = O.cmp =
              function (n) {
                var e,
                  i,
                  t,
                  r,
                  s = this,
                  o = s.d,
                  u = (n = new s.constructor(n)).d,
                  c = s.s,
                  f = n.s;
                if (!o || !u)
                  return c && f
                    ? c !== f
                      ? c
                      : o === u
                        ? 0
                        : !o ^ (c < 0)
                          ? 1
                          : -1
                    : NaN;
                if (!o[0] || !u[0]) return o[0] ? c : u[0] ? -f : 0;
                if (c !== f) return c;
                if (s.e !== n.e) return (s.e > n.e) ^ (c < 0) ? 1 : -1;
                for (
                  t = o.length, r = u.length, e = 0, i = t < r ? t : r;
                  e < i;
                  ++e
                )
                  if (o[e] !== u[e]) return (o[e] > u[e]) ^ (c < 0) ? 1 : -1;
                return t === r ? 0 : (t > r) ^ (c < 0) ? 1 : -1;
              }),
            (O.cosine = O.cos =
              function () {
                var n,
                  e,
                  i = this,
                  t = i.constructor;
                return i.d
                  ? i.d[0]
                    ? ((n = t.precision),
                      (e = t.rounding),
                      (t.precision = n + Math.max(i.e, i.sd()) + 7),
                      (t.rounding = 1),
                      (i = (function (n, e) {
                        var i, t, r;
                        if (e.isZero()) return e;
                        (t = e.d.length),
                          t < 32
                            ? ((i = Math.ceil(t / 3)),
                              (r = (1 / G(4, i)).toString()))
                            : ((i = 16), (r = "2.3283064365386962890625e-10"));
                        (n.precision += i), (e = J(n, 1, e.times(r), new n(1)));
                        for (var s = i; s--; ) {
                          var o = e.times(e);
                          e = o.times(o).minus(o).times(8).plus(1);
                        }
                        return (n.precision -= i), e;
                      })(t, z(t, i))),
                      (t.precision = n),
                      (t.rounding = e),
                      Z(2 == c || 3 == c ? i.neg() : i, n, e, !0))
                    : new t(1)
                  : new t(NaN);
              }),
            (O.cubeRoot = O.cbrt =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u,
                  c,
                  f,
                  a = this,
                  d = a.constructor;
                if (!a.isFinite() || a.isZero()) return new d(a);
                for (
                  p = !1,
                    s = a.s * v(a.s * a, 1 / 3),
                    s && Math.abs(s) != 1 / 0
                      ? (t = new d(s.toString()))
                      : ((i = q(a.d)),
                        (n = a.e),
                        (s = (n - i.length + 1) % 3) &&
                          (i += 1 == s || -2 == s ? "0" : "00"),
                        (s = v(i, 1 / 3)),
                        (n = m((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2))),
                        s == 1 / 0
                          ? (i = "5e" + n)
                          : ((i = s.toExponential()),
                            (i = i.slice(0, i.indexOf("e") + 1) + n)),
                        (t = new d(i)),
                        (t.s = a.s)),
                    o = (n = d.precision) + 3;
                  ;

                )
                  if (
                    ((u = t),
                    (c = u.times(u).times(u)),
                    (f = c.plus(a)),
                    (t = A(f.plus(a).times(u), f.plus(c), o + 2, 1)),
                    q(u.d).slice(0, o) === (i = q(t.d)).slice(0, o))
                  ) {
                    if (
                      ((i = i.slice(o - 3, o + 1)),
                      "9999" != i && (r || "4999" != i))
                    ) {
                      (+i && (+i.slice(1) || "5" != i.charAt(0))) ||
                        (Z(t, n + 1, 1), (e = !t.times(t).times(t).eq(a)));
                      break;
                    }
                    if (!r && (Z(u, n + 1, 0), u.times(u).times(u).eq(a))) {
                      t = u;
                      break;
                    }
                    (o += 4), (r = 1);
                  }
                return (p = !0), Z(t, n, d.rounding, e);
              }),
            (O.decimalPlaces = O.dp =
              function () {
                var n,
                  e = this.d,
                  i = NaN;
                if (e) {
                  if (
                    ((n = e.length - 1),
                    (i = 7 * (n - m(this.e / 7))),
                    (n = e[n]),
                    n)
                  )
                    for (; n % 10 == 0; n /= 10) i--;
                  i < 0 && (i = 0);
                }
                return i;
              }),
            (O.dividedBy = O.div =
              function (n) {
                return A(this, new this.constructor(n));
              }),
            (O.dividedToIntegerBy = O.divToInt =
              function (n) {
                var e = this.constructor;
                return Z(A(this, new e(n), 0, 1, 1), e.precision, e.rounding);
              }),
            (O.equals = O.eq =
              function (n) {
                return 0 === this.cmp(n);
              }),
            (O.floor = function () {
              return Z(new this.constructor(this), this.e + 1, 3);
            }),
            (O.greaterThan = O.gt =
              function (n) {
                return this.cmp(n) > 0;
              }),
            (O.greaterThanOrEqualTo = O.gte =
              function (n) {
                var e = this.cmp(n);
                return 1 == e || 0 === e;
              }),
            (O.hyperbolicCosine = O.cosh =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r,
                  s = this,
                  o = s.constructor,
                  u = new o(1);
                if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
                if (s.isZero()) return u;
                (i = o.precision),
                  (t = o.rounding),
                  (o.precision = i + Math.max(s.e, s.sd()) + 4),
                  (o.rounding = 1),
                  (r = s.d.length),
                  r < 32
                    ? ((n = Math.ceil(r / 3)), (e = (1 / G(4, n)).toString()))
                    : ((n = 16), (e = "2.3283064365386962890625e-10")),
                  (s = J(o, 1, s.times(e), new o(1), !0));
                for (var c, f = n, a = new o(8); f--; )
                  (c = s.times(s)), (s = u.minus(c.times(a.minus(c.times(a)))));
                return Z(s, (o.precision = i), (o.rounding = t), !0);
              }),
            (O.hyperbolicSine = O.sinh =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r = this,
                  s = r.constructor;
                if (!r.isFinite() || r.isZero()) return new s(r);
                if (
                  ((e = s.precision),
                  (i = s.rounding),
                  (s.precision = e + Math.max(r.e, r.sd()) + 4),
                  (s.rounding = 1),
                  (t = r.d.length),
                  t < 3)
                )
                  r = J(s, 2, r, r, !0);
                else {
                  (n = 1.4 * Math.sqrt(t)),
                    (n = n > 16 ? 16 : 0 | n),
                    (r = r.times(1 / G(5, n))),
                    (r = J(s, 2, r, r, !0));
                  for (var o, u = new s(5), c = new s(16), f = new s(20); n--; )
                    (o = r.times(r)),
                      (r = r.times(u.plus(o.times(c.times(o).plus(f)))));
                }
                return (s.precision = e), (s.rounding = i), Z(r, e, i, !0);
              }),
            (O.hyperbolicTangent = O.tanh =
              function () {
                var n,
                  e,
                  i = this,
                  t = i.constructor;
                return i.isFinite()
                  ? i.isZero()
                    ? new t(i)
                    : ((n = t.precision),
                      (e = t.rounding),
                      (t.precision = n + 7),
                      (t.rounding = 1),
                      A(
                        i.sinh(),
                        i.cosh(),
                        (t.precision = n),
                        (t.rounding = e),
                      ))
                  : new t(i.s);
              }),
            (O.inverseCosine = O.acos =
              function () {
                var n,
                  e = this,
                  i = e.constructor,
                  t = e.abs().cmp(1),
                  r = i.precision,
                  s = i.rounding;
                return -1 !== t
                  ? 0 === t
                    ? e.isNeg()
                      ? S(i, r, s)
                      : new i(0)
                    : new i(NaN)
                  : e.isZero()
                    ? S(i, r + 4, s).times(0.5)
                    : ((i.precision = r + 6),
                      (i.rounding = 1),
                      (e = e.asin()),
                      (n = S(i, r + 4, s).times(0.5)),
                      (i.precision = r),
                      (i.rounding = s),
                      n.minus(e));
              }),
            (O.inverseHyperbolicCosine = O.acosh =
              function () {
                var n,
                  e,
                  i = this,
                  t = i.constructor;
                return i.lte(1)
                  ? new t(i.eq(1) ? 0 : NaN)
                  : i.isFinite()
                    ? ((n = t.precision),
                      (e = t.rounding),
                      (t.precision = n + Math.max(Math.abs(i.e), i.sd()) + 4),
                      (t.rounding = 1),
                      (p = !1),
                      (i = i.times(i).minus(1).sqrt().plus(i)),
                      (p = !0),
                      (t.precision = n),
                      (t.rounding = e),
                      i.ln())
                    : new t(i);
              }),
            (O.inverseHyperbolicSine = O.asinh =
              function () {
                var n,
                  e,
                  i = this,
                  t = i.constructor;
                return !i.isFinite() || i.isZero()
                  ? new t(i)
                  : ((n = t.precision),
                    (e = t.rounding),
                    (t.precision = n + 2 * Math.max(Math.abs(i.e), i.sd()) + 6),
                    (t.rounding = 1),
                    (p = !1),
                    (i = i.times(i).plus(1).sqrt().plus(i)),
                    (p = !0),
                    (t.precision = n),
                    (t.rounding = e),
                    i.ln());
              }),
            (O.inverseHyperbolicTangent = O.atanh =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r = this,
                  s = r.constructor;
                return r.isFinite()
                  ? r.e >= 0
                    ? new s(r.abs().eq(1) ? r.s / 0 : r.isZero() ? r : NaN)
                    : ((n = s.precision),
                      (e = s.rounding),
                      (t = r.sd()),
                      Math.max(t, n) < 2 * -r.e - 1
                        ? Z(new s(r), n, e, !0)
                        : ((s.precision = i = t - r.e),
                          (r = A(r.plus(1), new s(1).minus(r), i + n, 1)),
                          (s.precision = n + 4),
                          (s.rounding = 1),
                          (r = r.ln()),
                          (s.precision = n),
                          (s.rounding = e),
                          r.times(0.5)))
                  : new s(NaN);
              }),
            (O.inverseSine = O.asin =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r = this,
                  s = r.constructor;
                return r.isZero()
                  ? new s(r)
                  : ((e = r.abs().cmp(1)),
                    (i = s.precision),
                    (t = s.rounding),
                    -1 !== e
                      ? 0 === e
                        ? ((n = S(s, i + 4, t).times(0.5)), (n.s = r.s), n)
                        : new s(NaN)
                      : ((s.precision = i + 6),
                        (s.rounding = 1),
                        (r = r
                          .div(new s(1).minus(r.times(r)).sqrt().plus(1))
                          .atan()),
                        (s.precision = i),
                        (s.rounding = t),
                        r.times(2)));
              }),
            (O.inverseTangent = O.atan =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u,
                  c,
                  f = this,
                  a = f.constructor,
                  d = a.precision,
                  l = a.rounding;
                if (f.isFinite()) {
                  if (f.isZero()) return new a(f);
                  if (f.abs().eq(1) && d + 4 <= M)
                    return (o = S(a, d + 4, l).times(0.25)), (o.s = f.s), o;
                } else {
                  if (!f.s) return new a(NaN);
                  if (d + 4 <= M)
                    return (o = S(a, d + 4, l).times(0.5)), (o.s = f.s), o;
                }
                for (
                  a.precision = u = d + 10,
                    a.rounding = 1,
                    i = Math.min(28, (u / 7 + 2) | 0),
                    n = i;
                  n;
                  --n
                )
                  f = f.div(f.times(f).plus(1).sqrt().plus(1));
                for (
                  p = !1,
                    e = Math.ceil(u / 7),
                    t = 1,
                    c = f.times(f),
                    o = new a(f),
                    r = f;
                  -1 !== n;

                )
                  if (
                    ((r = r.times(c)),
                    (s = o.minus(r.div((t += 2)))),
                    (r = r.times(c)),
                    (o = s.plus(r.div((t += 2)))),
                    void 0 !== o.d[e])
                  )
                    for (n = e; o.d[n] === s.d[n] && n--; );
                return (
                  i && (o = o.times(2 << (i - 1))),
                  (p = !0),
                  Z(o, (a.precision = d), (a.rounding = l), !0)
                );
              }),
            (O.isFinite = function () {
              return !!this.d;
            }),
            (O.isInteger = O.isInt =
              function () {
                return !!this.d && m(this.e / 7) > this.d.length - 2;
              }),
            (O.isNaN = function () {
              return !this.s;
            }),
            (O.isNegative = O.isNeg =
              function () {
                return this.s < 0;
              }),
            (O.isPositive = O.isPos =
              function () {
                return this.s > 0;
              }),
            (O.isZero = function () {
              return !!this.d && 0 === this.d[0];
            }),
            (O.lessThan = O.lt =
              function (n) {
                return this.cmp(n) < 0;
              }),
            (O.lessThanOrEqualTo = O.lte =
              function (n) {
                return this.cmp(n) < 1;
              }),
            (O.logarithm = O.log =
              function (n) {
                var e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u,
                  c,
                  f = this.constructor,
                  a = f.precision,
                  d = f.rounding;
                if (null == n) (n = new f(10)), (e = !0);
                else {
                  if (
                    ((n = new f(n)),
                    (i = n.d),
                    n.s < 0 || !i || !i[0] || n.eq(1))
                  )
                    return new f(NaN);
                  e = n.eq(10);
                }
                if (((i = this.d), this.s < 0 || !i || !i[0] || this.eq(1)))
                  return new f(
                    i && !i[0] ? -1 / 0 : 1 != this.s ? NaN : i ? 0 : 1 / 0,
                  );
                if (e)
                  if (i.length > 1) s = !0;
                  else {
                    for (r = i[0]; r % 10 === 0; ) r /= 10;
                    s = 1 !== r;
                  }
                if (
                  ((p = !1),
                  (u = a + 5),
                  (o = j(this, u)),
                  (t = e ? U(f, u + 10) : j(n, u)),
                  (c = A(o, t, u, 1)),
                  _(c.d, (r = a), d))
                )
                  do {
                    if (
                      ((u += 10),
                      (o = j(this, u)),
                      (t = e ? U(f, u + 10) : j(n, u)),
                      (c = A(o, t, u, 1)),
                      !s)
                    ) {
                      +q(c.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                        (c = Z(c, a + 1, 0));
                      break;
                    }
                  } while (_(c.d, (r += 10), d));
                return (p = !0), Z(c, a, d);
              }),
            (O.minus = O.sub =
              function (n) {
                var e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u,
                  c,
                  f,
                  a,
                  d,
                  l,
                  h = this,
                  g = h.constructor;
                if (((n = new g(n)), !h.d || !n.d))
                  return (
                    h.s && n.s
                      ? h.d
                        ? (n.s = -n.s)
                        : (n = new g(n.d || h.s !== n.s ? h : NaN))
                      : (n = new g(NaN)),
                    n
                  );
                if (h.s != n.s) return (n.s = -n.s), h.plus(n);
                if (
                  ((f = h.d),
                  (l = n.d),
                  (u = g.precision),
                  (c = g.rounding),
                  !f[0] || !l[0])
                ) {
                  if (l[0]) n.s = -n.s;
                  else {
                    if (!f[0]) return new g(3 === c ? -0 : 0);
                    n = new g(h);
                  }
                  return p ? Z(n, u, c) : n;
                }
                if (
                  ((i = m(n.e / 7)),
                  (a = m(h.e / 7)),
                  (f = f.slice()),
                  (s = a - i),
                  s)
                ) {
                  for (
                    d = s < 0,
                      d
                        ? ((e = f), (s = -s), (o = l.length))
                        : ((e = l), (i = a), (o = f.length)),
                      t = Math.max(Math.ceil(u / 7), o) + 2,
                      s > t && ((s = t), (e.length = 1)),
                      e.reverse(),
                      t = s;
                    t--;

                  )
                    e.push(0);
                  e.reverse();
                } else {
                  for (
                    t = f.length, o = l.length, d = t < o, d && (o = t), t = 0;
                    t < o;
                    t++
                  )
                    if (f[t] != l[t]) {
                      d = f[t] < l[t];
                      break;
                    }
                  s = 0;
                }
                for (
                  d && ((e = f), (f = l), (l = e), (n.s = -n.s)),
                    o = f.length,
                    t = l.length - o;
                  t > 0;
                  --t
                )
                  f[o++] = 0;
                for (t = l.length; t > s; ) {
                  if (f[--t] < l[t]) {
                    for (r = t; r && 0 === f[--r]; ) f[r] = y - 1;
                    --f[r], (f[t] += y);
                  }
                  f[t] -= l[t];
                }
                for (; 0 === f[--o]; ) f.pop();
                for (; 0 === f[0]; f.shift()) --i;
                return f[0]
                  ? ((n.d = f), (n.e = P(f, i)), p ? Z(n, u, c) : n)
                  : new g(3 === c ? -0 : 0);
              }),
            (O.modulo = O.mod =
              function (n) {
                var e,
                  i = this,
                  t = i.constructor;
                return (
                  (n = new t(n)),
                  !i.d || !n.s || (n.d && !n.d[0])
                    ? new t(NaN)
                    : !n.d || (i.d && !i.d[0])
                      ? Z(new t(i), t.precision, t.rounding)
                      : ((p = !1),
                        9 == t.modulo
                          ? ((e = A(i, n.abs(), 0, 3, 1)), (e.s *= n.s))
                          : (e = A(i, n, 0, t.modulo, 1)),
                        (e = e.times(n)),
                        (p = !0),
                        i.minus(e))
                );
              }),
            (O.naturalExponential = O.exp =
              function () {
                return B(this);
              }),
            (O.naturalLogarithm = O.ln =
              function () {
                return j(this);
              }),
            (O.negated = O.neg =
              function () {
                var n = new this.constructor(this);
                return (n.s = -n.s), Z(n);
              }),
            (O.plus = O.add =
              function (n) {
                var e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u,
                  c,
                  f,
                  a,
                  d = this,
                  l = d.constructor;
                if (((n = new l(n)), !d.d || !n.d))
                  return (
                    d.s && n.s
                      ? d.d || (n = new l(n.d || d.s === n.s ? d : NaN))
                      : (n = new l(NaN)),
                    n
                  );
                if (d.s != n.s) return (n.s = -n.s), d.minus(n);
                if (
                  ((f = d.d),
                  (a = n.d),
                  (u = l.precision),
                  (c = l.rounding),
                  !f[0] || !a[0])
                )
                  return a[0] || (n = new l(d)), p ? Z(n, u, c) : n;
                if (
                  ((s = m(d.e / 7)),
                  (t = m(n.e / 7)),
                  (f = f.slice()),
                  (r = s - t),
                  r)
                ) {
                  for (
                    r < 0
                      ? ((i = f), (r = -r), (o = a.length))
                      : ((i = a), (t = s), (o = f.length)),
                      s = Math.ceil(u / 7),
                      o = s > o ? s + 1 : o + 1,
                      r > o && ((r = o), (i.length = 1)),
                      i.reverse();
                    r--;

                  )
                    i.push(0);
                  i.reverse();
                }
                for (
                  o = f.length,
                    r = a.length,
                    o - r < 0 && ((r = o), (i = a), (a = f), (f = i)),
                    e = 0;
                  r;

                )
                  (e = ((f[--r] = f[r] + a[r] + e) / y) | 0), (f[r] %= y);
                for (e && (f.unshift(e), ++t), o = f.length; 0 == f[--o]; )
                  f.pop();
                return (n.d = f), (n.e = P(f, t)), p ? Z(n, u, c) : n;
              }),
            (O.precision = O.sd =
              function (n) {
                var e,
                  i = this;
                if (void 0 !== n && n !== !!n && 1 !== n && 0 !== n)
                  throw Error(g + n);
                return (
                  i.d
                    ? ((e = T(i.d)), n && i.e + 1 > e && (e = i.e + 1))
                    : (e = NaN),
                  e
                );
              }),
            (O.round = function () {
              var n = this,
                e = n.constructor;
              return Z(new e(n), n.e + 1, e.rounding);
            }),
            (O.sine = O.sin =
              function () {
                var n,
                  e,
                  i = this,
                  t = i.constructor;
                return i.isFinite()
                  ? i.isZero()
                    ? new t(i)
                    : ((n = t.precision),
                      (e = t.rounding),
                      (t.precision = n + Math.max(i.e, i.sd()) + 7),
                      (t.rounding = 1),
                      (i = (function (n, e) {
                        var i,
                          t = e.d.length;
                        if (t < 3) return e.isZero() ? e : J(n, 2, e, e);
                        (i = 1.4 * Math.sqrt(t)),
                          (i = i > 16 ? 16 : 0 | i),
                          (e = e.times(1 / G(5, i))),
                          (e = J(n, 2, e, e));
                        for (
                          var r, s = new n(5), o = new n(16), u = new n(20);
                          i--;

                        )
                          (r = e.times(e)),
                            (e = e.times(s.plus(r.times(o.times(r).minus(u)))));
                        return e;
                      })(t, z(t, i))),
                      (t.precision = n),
                      (t.rounding = e),
                      Z(c > 2 ? i.neg() : i, n, e, !0))
                  : new t(NaN);
              }),
            (O.squareRoot = O.sqrt =
              function () {
                var n,
                  e,
                  i,
                  t,
                  r,
                  s,
                  o = this,
                  u = o.d,
                  c = o.e,
                  f = o.s,
                  a = o.constructor;
                if (1 !== f || !u || !u[0])
                  return new a(
                    !f || (f < 0 && (!u || u[0])) ? NaN : u ? o : 1 / 0,
                  );
                for (
                  p = !1,
                    f = Math.sqrt(+o),
                    0 == f || f == 1 / 0
                      ? ((e = q(u)),
                        (e.length + c) % 2 == 0 && (e += "0"),
                        (f = Math.sqrt(e)),
                        (c = m((c + 1) / 2) - (c < 0 || c % 2)),
                        f == 1 / 0
                          ? (e = "5e" + c)
                          : ((e = f.toExponential()),
                            (e = e.slice(0, e.indexOf("e") + 1) + c)),
                        (t = new a(e)))
                      : (t = new a(f.toString())),
                    i = (c = a.precision) + 3;
                  ;

                )
                  if (
                    ((s = t),
                    (t = s.plus(A(o, s, i + 2, 1)).times(0.5)),
                    q(s.d).slice(0, i) === (e = q(t.d)).slice(0, i))
                  ) {
                    if (
                      ((e = e.slice(i - 3, i + 1)),
                      "9999" != e && (r || "4999" != e))
                    ) {
                      (+e && (+e.slice(1) || "5" != e.charAt(0))) ||
                        (Z(t, c + 1, 1), (n = !t.times(t).eq(o)));
                      break;
                    }
                    if (!r && (Z(s, c + 1, 0), s.times(s).eq(o))) {
                      t = s;
                      break;
                    }
                    (i += 4), (r = 1);
                  }
                return (p = !0), Z(t, c, a.rounding, n);
              }),
            (O.tangent = O.tan =
              function () {
                var n,
                  e,
                  i = this,
                  t = i.constructor;
                return i.isFinite()
                  ? i.isZero()
                    ? new t(i)
                    : ((n = t.precision),
                      (e = t.rounding),
                      (t.precision = n + 10),
                      (t.rounding = 1),
                      (i = i.sin()),
                      (i.s = 1),
                      (i = A(i, new t(1).minus(i.times(i)).sqrt(), n + 10, 0)),
                      (t.precision = n),
                      (t.rounding = e),
                      Z(2 == c || 4 == c ? i.neg() : i, n, e, !0))
                  : new t(NaN);
              }),
            (O.times = O.mul =
              function (n) {
                var e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u,
                  c,
                  f,
                  a = this,
                  d = a.constructor,
                  l = a.d,
                  h = (n = new d(n)).d;
                if (((n.s *= a.s), !l || !l[0] || !h || !h[0]))
                  return new d(
                    !n.s || (l && !l[0] && !h) || (h && !h[0] && !l)
                      ? NaN
                      : l && h
                        ? 0 * n.s
                        : n.s / 0,
                  );
                for (
                  i = m(a.e / 7) + m(n.e / 7),
                    c = l.length,
                    f = h.length,
                    c < f &&
                      ((s = l), (l = h), (h = s), (o = c), (c = f), (f = o)),
                    s = [],
                    o = c + f,
                    t = o;
                  t--;

                )
                  s.push(0);
                for (t = f; --t >= 0; ) {
                  for (e = 0, r = c + t; r > t; )
                    (u = s[r] + h[t] * l[r - t - 1] + e),
                      (s[r--] = u % y | 0),
                      (e = (u / y) | 0);
                  s[r] = (s[r] + e) % y | 0;
                }
                for (; !s[--o]; ) s.pop();
                return (
                  e ? ++i : s.shift(),
                  (n.d = s),
                  (n.e = P(s, i)),
                  p ? Z(n, d.precision, d.rounding) : n
                );
              }),
            (O.toBinary = function (n, e) {
              return K(this, 2, n, e);
            }),
            (O.toDecimalPlaces = O.toDP =
              function (n, e) {
                var i = this,
                  t = i.constructor;
                return (
                  (i = new t(i)),
                  void 0 === n
                    ? i
                    : (F(n, 0, 1e9),
                      void 0 === e ? (e = t.rounding) : F(e, 0, 8),
                      Z(i, n + i.e + 1, e))
                );
              }),
            (O.toExponential = function (n, e) {
              var i,
                t = this,
                r = t.constructor;
              return (
                void 0 === n
                  ? (i = k(t, !0))
                  : (F(n, 0, 1e9),
                    void 0 === e ? (e = r.rounding) : F(e, 0, 8),
                    (t = Z(new r(t), n + 1, e)),
                    (i = k(t, !0, n + 1))),
                t.isNeg() && !t.isZero() ? "-" + i : i
              );
            }),
            (O.toFixed = function (n, e) {
              var i,
                t,
                r = this,
                s = r.constructor;
              return (
                void 0 === n
                  ? (i = k(r))
                  : (F(n, 0, 1e9),
                    void 0 === e ? (e = s.rounding) : F(e, 0, 8),
                    (t = Z(new s(r), n + r.e + 1, e)),
                    (i = k(t, !1, n + t.e + 1))),
                r.isNeg() && !r.isZero() ? "-" + i : i
              );
            }),
            (O.toFraction = function (n) {
              var e,
                i,
                t,
                r,
                s,
                o,
                u,
                c,
                f,
                a,
                d,
                l,
                h = this,
                w = h.d,
                m = h.constructor;
              if (!w) return new m(h);
              if (
                ((f = i = new m(1)),
                (t = c = new m(0)),
                (e = new m(t)),
                (s = e.e = T(w) - h.e - 1),
                (o = s % 7),
                (e.d[0] = v(10, o < 0 ? 7 + o : o)),
                null == n)
              )
                n = s > 0 ? e : f;
              else {
                if (((u = new m(n)), !u.isInt() || u.lt(f))) throw Error(g + u);
                n = u.gt(e) ? (s > 0 ? e : f) : u;
              }
              for (
                p = !1,
                  u = new m(q(w)),
                  a = m.precision,
                  m.precision = s = 7 * w.length * 2;
                ;

              ) {
                if (
                  ((d = A(u, e, 0, 1, 1)),
                  (r = i.plus(d.times(t))),
                  1 == r.cmp(n))
                )
                  break;
                (i = t),
                  (t = r),
                  (r = f),
                  (f = c.plus(d.times(r))),
                  (c = r),
                  (r = e),
                  (e = u.minus(d.times(r))),
                  (u = r);
              }
              return (
                (r = A(n.minus(i), t, 0, 1, 1)),
                (c = c.plus(r.times(f))),
                (i = i.plus(r.times(t))),
                (c.s = f.s = h.s),
                (l =
                  A(f, t, s, 1)
                    .minus(h)
                    .abs()
                    .cmp(A(c, i, s, 1).minus(h).abs()) < 1
                    ? [f, t]
                    : [c, i]),
                (m.precision = a),
                (p = !0),
                l
              );
            }),
            (O.toHexadecimal = O.toHex =
              function (n, e) {
                return K(this, 16, n, e);
              }),
            (O.toNearest = function (n, e) {
              var i = this,
                t = i.constructor;
              if (((i = new t(i)), null == n)) {
                if (!i.d) return i;
                (n = new t(1)), (e = t.rounding);
              } else {
                if (
                  ((n = new t(n)),
                  void 0 === e ? (e = t.rounding) : F(e, 0, 8),
                  !i.d)
                )
                  return n.s ? i : n;
                if (!n.d) return n.s && (n.s = i.s), n;
              }
              return (
                n.d[0]
                  ? ((p = !1), (i = A(i, n, 0, e, 1).times(n)), (p = !0), Z(i))
                  : ((n.s = i.s), (i = n)),
                i
              );
            }),
            (O.toNumber = function () {
              return +this;
            }),
            (O.toOctal = function (n, e) {
              return K(this, 8, n, e);
            }),
            (O.toPower = O.pow =
              function (n) {
                var e,
                  i,
                  t,
                  r,
                  s,
                  o,
                  u = this,
                  c = u.constructor,
                  f = +(n = new c(n));
                if (!u.d || !n.d || !u.d[0] || !n.d[0]) return new c(v(+u, f));
                if (((u = new c(u)), u.eq(1))) return u;
                if (((t = c.precision), (s = c.rounding), n.eq(1)))
                  return Z(u, t, s);
                if (
                  ((e = m(n.e / 7)),
                  e >= n.d.length - 1 &&
                    (i = f < 0 ? -f : f) <= 9007199254740991)
                )
                  return (
                    (r = I(c, u, i, t)), n.s < 0 ? new c(1).div(r) : Z(r, t, s)
                  );
                if (((o = u.s), o < 0)) {
                  if (e < n.d.length - 1) return new c(NaN);
                  if (
                    (0 == (1 & n.d[e]) && (o = 1),
                    0 == u.e && 1 == u.d[0] && 1 == u.d.length)
                  )
                    return (u.s = o), u;
                }
                return (
                  (i = v(+u, f)),
                  (e =
                    0 != i && isFinite(i)
                      ? new c(i + "").e
                      : m(f * (Math.log("0." + q(u.d)) / Math.LN10 + u.e + 1))),
                  e > c.maxE + 1 || e < c.minE - 1
                    ? new c(e > 0 ? o / 0 : 0)
                    : ((p = !1),
                      (c.rounding = u.s = 1),
                      (i = Math.min(12, (e + "").length)),
                      (r = B(n.times(j(u, t + i)), t)),
                      r.d &&
                        ((r = Z(r, t + 5, 1)),
                        _(r.d, t, s) &&
                          ((e = t + 10),
                          (r = Z(B(n.times(j(u, e + i)), e), e + 5, 1)),
                          +q(r.d).slice(t + 1, t + 15) + 1 == 1e14 &&
                            (r = Z(r, t + 1, 0)))),
                      (r.s = o),
                      (p = !0),
                      (c.rounding = s),
                      Z(r, t, s))
                );
              }),
            (O.toPrecision = function (n, e) {
              var i,
                t = this,
                r = t.constructor;
              return (
                void 0 === n
                  ? (i = k(t, t.e <= r.toExpNeg || t.e >= r.toExpPos))
                  : (F(n, 1, 1e9),
                    void 0 === e ? (e = r.rounding) : F(e, 0, 8),
                    (t = Z(new r(t), n, e)),
                    (i = k(t, n <= t.e || t.e <= r.toExpNeg, n))),
                t.isNeg() && !t.isZero() ? "-" + i : i
              );
            }),
            (O.toSignificantDigits = O.toSD =
              function (n, e) {
                var i = this.constructor;
                return (
                  void 0 === n
                    ? ((n = i.precision), (e = i.rounding))
                    : (F(n, 1, 1e9),
                      void 0 === e ? (e = i.rounding) : F(e, 0, 8)),
                  Z(new i(this), n, e)
                );
              }),
            (O.toString = function () {
              var n = this,
                e = n.constructor,
                i = k(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
              return n.isNeg() && !n.isZero() ? "-" + i : i;
            }),
            (O.truncated = O.trunc =
              function () {
                return Z(new this.constructor(this), this.e + 1, 1);
              }),
            (O.valueOf = O.toJSON =
              function () {
                var n = this,
                  e = n.constructor,
                  i = k(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
                return n.isNeg() ? "-" + i : i;
              });
          var A = (function () {
            function n(n, e, i) {
              var t,
                r = 0,
                s = n.length;
              for (n = n.slice(); s--; )
                (t = n[s] * e + r), (n[s] = t % i | 0), (r = (t / i) | 0);
              return r && n.unshift(r), n;
            }
            function e(n, e, i, t) {
              var r, s;
              if (i != t) s = i > t ? 1 : -1;
              else
                for (r = s = 0; r < i; r++)
                  if (n[r] != e[r]) {
                    s = n[r] > e[r] ? 1 : -1;
                    break;
                  }
              return s;
            }
            function i(n, e, i, t) {
              for (var r = 0; i--; )
                (n[i] -= r),
                  (r = n[i] < e[i] ? 1 : 0),
                  (n[i] = r * t + n[i] - e[i]);
              for (; !n[0] && n.length > 1; ) n.shift();
            }
            return function (t, r, s, o, c, f) {
              var a,
                d,
                l,
                h,
                p,
                g,
                w,
                v,
                N,
                b,
                x,
                E,
                D,
                M,
                O,
                q,
                F,
                _,
                R,
                A,
                k = t.constructor,
                P = t.s == r.s ? 1 : -1,
                U = t.d,
                S = r.d;
              if (!U || !U[0] || !S || !S[0])
                return new k(
                  t.s && r.s && (U ? !S || U[0] != S[0] : S)
                    ? (U && 0 == U[0]) || !S
                      ? 0 * P
                      : P / 0
                    : NaN,
                );
              for (
                f
                  ? ((p = 1), (d = t.e - r.e))
                  : ((f = y), (p = 7), (d = m(t.e / p) - m(r.e / p))),
                  R = S.length,
                  F = U.length,
                  N = new k(P),
                  b = N.d = [],
                  l = 0;
                S[l] == (U[l] || 0);
                l++
              );
              if (
                (S[l] > (U[l] || 0) && d--,
                null == s
                  ? ((M = s = k.precision), (o = k.rounding))
                  : (M = c ? s + (t.e - r.e) + 1 : s),
                M < 0)
              )
                b.push(1), (g = !0);
              else {
                if (((M = (M / p + 2) | 0), (l = 0), 1 == R)) {
                  for (h = 0, S = S[0], M++; (l < F || h) && M--; l++)
                    (O = h * f + (U[l] || 0)),
                      (b[l] = (O / S) | 0),
                      (h = O % S | 0);
                  g = h || l < F;
                } else {
                  for (
                    h = (f / (S[0] + 1)) | 0,
                      h > 1 &&
                        ((S = n(S, h, f)),
                        (U = n(U, h, f)),
                        (R = S.length),
                        (F = U.length)),
                      q = R,
                      x = U.slice(0, R),
                      E = x.length;
                    E < R;

                  )
                    x[E++] = 0;
                  (A = S.slice()),
                    A.unshift(0),
                    (_ = S[0]),
                    S[1] >= f / 2 && ++_;
                  do {
                    (h = 0),
                      (a = e(S, x, R, E)),
                      a < 0
                        ? ((D = x[0]),
                          R != E && (D = D * f + (x[1] || 0)),
                          (h = (D / _) | 0),
                          h > 1
                            ? (h >= f && (h = f - 1),
                              (w = n(S, h, f)),
                              (v = w.length),
                              (E = x.length),
                              (a = e(w, x, v, E)),
                              1 == a && (h--, i(w, R < v ? A : S, v, f)))
                            : (0 == h && (a = h = 1), (w = S.slice())),
                          (v = w.length),
                          v < E && w.unshift(0),
                          i(x, w, E, f),
                          -1 == a &&
                            ((E = x.length),
                            (a = e(S, x, R, E)),
                            a < 1 && (h++, i(x, R < E ? A : S, E, f))),
                          (E = x.length))
                        : 0 === a && (h++, (x = [0])),
                      (b[l++] = h),
                      a && x[0]
                        ? (x[E++] = U[q] || 0)
                        : ((x = [U[q]]), (E = 1));
                  } while ((q++ < F || void 0 !== x[0]) && M--);
                  g = void 0 !== x[0];
                }
                b[0] || b.shift();
              }
              if (1 == p) (N.e = d), (u = g);
              else {
                for (l = 1, h = b[0]; h >= 10; h /= 10) l++;
                (N.e = l + d * p - 1), Z(N, c ? s + N.e + 1 : s, o, g);
              }
              return N;
            };
          })();
          function Z(n, e, i, t) {
            var r,
              s,
              o,
              u,
              c,
              f,
              a,
              d,
              l,
              h = n.constructor;
            n: if (null != e) {
              if (((d = n.d), !d)) return n;
              for (r = 1, u = d[0]; u >= 10; u /= 10) r++;
              if (((s = e - r), s < 0))
                (s += 7),
                  (o = e),
                  (a = d[(l = 0)]),
                  (c = (a / v(10, r - o - 1)) % 10 | 0);
              else if (((l = Math.ceil((s + 1) / 7)), (u = d.length), l >= u)) {
                if (!t) break n;
                for (; u++ <= l; ) d.push(0);
                (a = c = 0), (r = 1), (s %= 7), (o = s - 7 + 1);
              } else {
                for (a = u = d[l], r = 1; u >= 10; u /= 10) r++;
                (s %= 7),
                  (o = s - 7 + r),
                  (c = o < 0 ? 0 : (a / v(10, r - o - 1)) % 10 | 0);
              }
              if (
                ((t =
                  t ||
                  e < 0 ||
                  void 0 !== d[l + 1] ||
                  (o < 0 ? a : a % v(10, r - o - 1))),
                (f =
                  i < 4
                    ? (c || t) && (0 == i || i == (n.s < 0 ? 3 : 2))
                    : c > 5 ||
                      (5 == c &&
                        (4 == i ||
                          t ||
                          (6 == i &&
                            (s > 0
                              ? o > 0
                                ? a / v(10, r - o)
                                : 0
                              : d[l - 1]) %
                              10 &
                              1) ||
                          i == (n.s < 0 ? 8 : 7)))),
                e < 1 || !d[0])
              )
                return (
                  (d.length = 0),
                  f
                    ? ((e -= n.e + 1),
                      (d[0] = v(10, (7 - (e % 7)) % 7)),
                      (n.e = -e || 0))
                    : (d[0] = n.e = 0),
                  n
                );
              if (
                (0 == s
                  ? ((d.length = l), (u = 1), l--)
                  : ((d.length = l + 1),
                    (u = v(10, 7 - s)),
                    (d[l] =
                      o > 0 ? ((a / v(10, r - o)) % v(10, o) | 0) * u : 0)),
                f)
              )
                for (;;) {
                  if (0 == l) {
                    for (s = 1, o = d[0]; o >= 10; o /= 10) s++;
                    for (o = d[0] += u, u = 1; o >= 10; o /= 10) u++;
                    s != u && (n.e++, d[0] == y && (d[0] = 1));
                    break;
                  }
                  if (((d[l] += u), d[l] != y)) break;
                  (d[l--] = 0), (u = 1);
                }
              for (s = d.length; 0 === d[--s]; ) d.pop();
            }
            return (
              p &&
                (n.e > h.maxE
                  ? ((n.d = null), (n.e = NaN))
                  : n.e < h.minE && ((n.e = 0), (n.d = [0]))),
              n
            );
          }
          function k(n, e, i) {
            if (!n.isFinite()) return V(n);
            var t,
              r = n.e,
              s = q(n.d),
              o = s.length;
            return (
              e
                ? (i && (t = i - o) > 0
                    ? (s = s.charAt(0) + "." + s.slice(1) + L(t))
                    : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
                  (s = s + (n.e < 0 ? "e" : "e+") + n.e))
                : r < 0
                  ? ((s = "0." + L(-r - 1) + s),
                    i && (t = i - o) > 0 && (s += L(t)))
                  : r >= o
                    ? ((s += L(r + 1 - o)),
                      i && (t = i - r - 1) > 0 && (s = s + "." + L(t)))
                    : ((t = r + 1) < o &&
                        (s = s.slice(0, t) + "." + s.slice(t)),
                      i &&
                        (t = i - o) > 0 &&
                        (r + 1 === o && (s += "."), (s += L(t)))),
              s
            );
          }
          function P(n, e) {
            var i = n[0];
            for (e *= 7; i >= 10; i /= 10) e++;
            return e;
          }
          function U(n, e, i) {
            if (e > D)
              throw (
                ((p = !0),
                i && (n.precision = i),
                Error("[DecimalError] Precision limit exceeded"))
              );
            return Z(new n(d), e, 1, !0);
          }
          function S(n, e, i) {
            if (e > M) throw Error("[DecimalError] Precision limit exceeded");
            return Z(new n(l), e, i, !0);
          }
          function T(n) {
            var e = n.length - 1,
              i = 7 * e + 1;
            if (((e = n[e]), e)) {
              for (; e % 10 == 0; e /= 10) i--;
              for (e = n[0]; e >= 10; e /= 10) i++;
            }
            return i;
          }
          function L(n) {
            for (var e = ""; n--; ) e += "0";
            return e;
          }
          function I(n, e, i, t) {
            var r,
              s = new n(1),
              o = Math.ceil(t / 7 + 4);
            for (p = !1; ; ) {
              if (
                (i % 2 && ((s = s.times(e)), Q(s.d, o) && (r = !0)),
                (i = m(i / 2)),
                0 === i)
              ) {
                (i = s.d.length - 1), r && 0 === s.d[i] && ++s.d[i];
                break;
              }
              (e = e.times(e)), Q(e.d, o);
            }
            return (p = !0), s;
          }
          function C(n) {
            return 1 & n.d[n.d.length - 1];
          }
          function H(n, e, i) {
            for (var t, r = new n(e[0]), s = 0; ++s < e.length; ) {
              if (((t = new n(e[s])), !t.s)) {
                r = t;
                break;
              }
              r[i](t) && (r = t);
            }
            return r;
          }
          function B(n, e) {
            var i,
              t,
              r,
              s,
              o,
              u,
              c,
              f = 0,
              a = 0,
              d = 0,
              l = n.constructor,
              h = l.rounding,
              g = l.precision;
            if (!n.d || !n.d[0] || n.e > 17)
              return new l(
                n.d
                  ? n.d[0]
                    ? n.s < 0
                      ? 0
                      : 1 / 0
                    : 1
                  : n.s
                    ? n.s < 0
                      ? 0
                      : n
                    : NaN,
              );
            null == e ? ((p = !1), (c = g)) : (c = e), (u = new l(0.03125));
            while (n.e > -2) (n = n.times(u)), (d += 5);
            for (
              t = ((Math.log(v(2, d)) / Math.LN10) * 2 + 5) | 0,
                c += t,
                i = s = o = new l(1),
                l.precision = c;
              ;

            ) {
              if (
                ((s = Z(s.times(n), c, 1)),
                (i = i.times(++a)),
                (u = o.plus(A(s, i, c, 1))),
                q(u.d).slice(0, c) === q(o.d).slice(0, c))
              ) {
                r = d;
                while (r--) o = Z(o.times(o), c, 1);
                if (null != e) return (l.precision = g), o;
                if (!(f < 3 && _(o.d, c - t, h, f)))
                  return Z(o, (l.precision = g), h, (p = !0));
                (l.precision = c += 10), (i = s = u = new l(1)), (a = 0), f++;
              }
              o = u;
            }
          }
          function j(n, e) {
            var i,
              t,
              r,
              s,
              o,
              u,
              c,
              f,
              a,
              d,
              l,
              h = 1,
              g = n,
              w = g.d,
              m = g.constructor,
              v = m.rounding,
              N = m.precision;
            if (g.s < 0 || !w || !w[0] || (!g.e && 1 == w[0] && 1 == w.length))
              return new m(w && !w[0] ? -1 / 0 : 1 != g.s ? NaN : w ? 0 : g);
            if (
              (null == e ? ((p = !1), (a = N)) : (a = e),
              (m.precision = a += 10),
              (i = q(w)),
              (t = i.charAt(0)),
              !(Math.abs((s = g.e)) < 15e14))
            )
              return (
                (f = U(m, a + 2, N).times(s + "")),
                (g = j(new m(t + "." + i.slice(1)), a - 10).plus(f)),
                (m.precision = N),
                null == e ? Z(g, N, v, (p = !0)) : g
              );
            while ((t < 7 && 1 != t) || (1 == t && i.charAt(1) > 3))
              (g = g.times(n)), (i = q(g.d)), (t = i.charAt(0)), h++;
            for (
              s = g.e,
                t > 1
                  ? ((g = new m("0." + i)), s++)
                  : (g = new m(t + "." + i.slice(1))),
                d = g,
                c = o = g = A(g.minus(1), g.plus(1), a, 1),
                l = Z(g.times(g), a, 1),
                r = 3;
              ;

            ) {
              if (
                ((o = Z(o.times(l), a, 1)),
                (f = c.plus(A(o, new m(r), a, 1))),
                q(f.d).slice(0, a) === q(c.d).slice(0, a))
              ) {
                if (
                  ((c = c.times(2)),
                  0 !== s && (c = c.plus(U(m, a + 2, N).times(s + ""))),
                  (c = A(c, new m(h), a, 1)),
                  null != e)
                )
                  return (m.precision = N), c;
                if (!_(c.d, a - 10, v, u))
                  return Z(c, (m.precision = N), v, (p = !0));
                (m.precision = a += 10),
                  (f = o = g = A(d.minus(1), d.plus(1), a, 1)),
                  (l = Z(g.times(g), a, 1)),
                  (r = u = 1);
              }
              (c = f), (r += 2);
            }
          }
          function V(n) {
            return String((n.s * n.s) / 0);
          }
          function W(n, e) {
            var i, t, r;
            for (
              (i = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
                (t = e.search(/e/i)) > 0
                  ? (i < 0 && (i = t),
                    (i += +e.slice(t + 1)),
                    (e = e.substring(0, t)))
                  : i < 0 && (i = e.length),
                t = 0;
              48 === e.charCodeAt(t);
              t++
            );
            for (r = e.length; 48 === e.charCodeAt(r - 1); --r);
            if (((e = e.slice(t, r)), e)) {
              if (
                ((r -= t),
                (n.e = i = i - t - 1),
                (n.d = []),
                (t = (i + 1) % 7),
                i < 0 && (t += 7),
                t < r)
              ) {
                for (t && n.d.push(+e.slice(0, t)), r -= 7; t < r; )
                  n.d.push(+e.slice(t, (t += 7)));
                (e = e.slice(t)), (t = 7 - e.length);
              } else t -= r;
              for (; t--; ) e += "0";
              n.d.push(+e),
                p &&
                  (n.e > n.constructor.maxE
                    ? ((n.d = null), (n.e = NaN))
                    : n.e < n.constructor.minE && ((n.e = 0), (n.d = [0])));
            } else (n.e = 0), (n.d = [0]);
            return n;
          }
          function $(n, e) {
            var i, t, r, s, u, c, f, a, d;
            if (e.indexOf("_") > -1) {
              if (((e = e.replace(/(\d)_(?=\d)/g, "$1")), E.test(e)))
                return W(n, e);
            } else if ("Infinity" === e || "NaN" === e)
              return +e || (n.s = NaN), (n.e = NaN), (n.d = null), n;
            if (b.test(e)) (i = 16), (e = e.toLowerCase());
            else if (N.test(e)) i = 2;
            else {
              if (!x.test(e)) throw Error(g + e);
              i = 8;
            }
            for (
              s = e.search(/p/i),
                s > 0
                  ? ((f = +e.slice(s + 1)), (e = e.substring(2, s)))
                  : (e = e.slice(2)),
                s = e.indexOf("."),
                u = s >= 0,
                t = n.constructor,
                u &&
                  ((e = e.replace(".", "")),
                  (c = e.length),
                  (s = c - s),
                  (r = I(t, new t(i), s, 2 * s))),
                a = R(e, i, y),
                d = a.length - 1,
                s = d;
              0 === a[s];
              --s
            )
              a.pop();
            return s < 0
              ? new t(0 * n.s)
              : ((n.e = P(a, d)),
                (n.d = a),
                (p = !1),
                u && (n = A(n, r, 4 * c)),
                f && (n = n.times(Math.abs(f) < 54 ? v(2, f) : o.pow(2, f))),
                (p = !0),
                n);
          }
          function J(n, e, i, t, r) {
            var s,
              o,
              u,
              c,
              f = n.precision,
              a = Math.ceil(f / 7);
            for (p = !1, c = i.times(i), u = new n(t); ; ) {
              if (
                ((o = A(u.times(c), new n(e++ * e++), f, 1)),
                (u = r ? t.plus(o) : t.minus(o)),
                (t = A(o.times(c), new n(e++ * e++), f, 1)),
                (o = u.plus(t)),
                void 0 !== o.d[a])
              ) {
                for (s = a; o.d[s] === u.d[s] && s--; );
                if (-1 == s) break;
              }
              (s = u), (u = t), (t = o), (o = s);
            }
            return (p = !0), (o.d.length = a + 1), o;
          }
          function G(n, e) {
            var i = n;
            while (--e) i *= n;
            return i;
          }
          function z(n, e) {
            var i,
              t = e.s < 0,
              r = S(n, n.precision, 1),
              s = r.times(0.5);
            if (((e = e.abs()), e.lte(s))) return (c = t ? 4 : 1), e;
            if (((i = e.divToInt(r)), i.isZero())) c = t ? 3 : 2;
            else {
              if (((e = e.minus(i.times(r))), e.lte(s)))
                return (c = C(i) ? (t ? 2 : 3) : t ? 4 : 1), e;
              c = C(i) ? (t ? 1 : 4) : t ? 3 : 2;
            }
            return e.minus(r).abs();
          }
          function K(n, e, i, t) {
            var r,
              s,
              o,
              c,
              f,
              d,
              l,
              h,
              p,
              g = n.constructor,
              w = void 0 !== i;
            if (
              (w
                ? (F(i, 1, 1e9), void 0 === t ? (t = g.rounding) : F(t, 0, 8))
                : ((i = g.precision), (t = g.rounding)),
              n.isFinite())
            ) {
              for (
                l = k(n),
                  o = l.indexOf("."),
                  w
                    ? ((r = 2),
                      16 == e ? (i = 4 * i - 3) : 8 == e && (i = 3 * i - 2))
                    : (r = e),
                  o >= 0 &&
                    ((l = l.replace(".", "")),
                    (p = new g(1)),
                    (p.e = l.length - o),
                    (p.d = R(k(p), 10, r)),
                    (p.e = p.d.length)),
                  h = R(l, 10, r),
                  s = f = h.length;
                0 == h[--f];

              )
                h.pop();
              if (h[0]) {
                if (
                  (o < 0
                    ? s--
                    : ((n = new g(n)),
                      (n.d = h),
                      (n.e = s),
                      (n = A(n, p, i, t, 0, r)),
                      (h = n.d),
                      (s = n.e),
                      (d = u)),
                  (o = h[i]),
                  (c = r / 2),
                  (d = d || void 0 !== h[i + 1]),
                  (d =
                    t < 4
                      ? (void 0 !== o || d) &&
                        (0 === t || t === (n.s < 0 ? 3 : 2))
                      : o > c ||
                        (o === c &&
                          (4 === t ||
                            d ||
                            (6 === t && 1 & h[i - 1]) ||
                            t === (n.s < 0 ? 8 : 7)))),
                  (h.length = i),
                  d)
                )
                  for (; ++h[--i] > r - 1; )
                    (h[i] = 0), i || (++s, h.unshift(1));
                for (f = h.length; !h[f - 1]; --f);
                for (o = 0, l = ""; o < f; o++) l += a.charAt(h[o]);
                if (w) {
                  if (f > 1)
                    if (16 == e || 8 == e) {
                      for (o = 16 == e ? 4 : 3, --f; f % o; f++) l += "0";
                      for (h = R(l, r, e), f = h.length; !h[f - 1]; --f);
                      for (o = 1, l = "1."; o < f; o++) l += a.charAt(h[o]);
                    } else l = l.charAt(0) + "." + l.slice(1);
                  l = l + (s < 0 ? "p" : "p+") + s;
                } else if (s < 0) {
                  for (; ++s; ) l = "0" + l;
                  l = "0." + l;
                } else if (++s > f) for (s -= f; s--; ) l += "0";
                else s < f && (l = l.slice(0, s) + "." + l.slice(s));
              } else l = w ? "0p+0" : "0";
              l = (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") + l;
            } else l = V(n);
            return n.s < 0 ? "-" + l : l;
          }
          function Q(n, e) {
            if (n.length > e) return (n.length = e), !0;
          }
          function X(n) {
            return new this(n).abs();
          }
          function Y(n) {
            return new this(n).acos();
          }
          function nn(n) {
            return new this(n).acosh();
          }
          function en(n, e) {
            return new this(n).plus(e);
          }
          function tn(n) {
            return new this(n).asin();
          }
          function rn(n) {
            return new this(n).asinh();
          }
          function sn(n) {
            return new this(n).atan();
          }
          function on(n) {
            return new this(n).atanh();
          }
          function un(n, e) {
            (n = new this(n)), (e = new this(e));
            var i,
              t = this.precision,
              r = this.rounding,
              s = t + 4;
            return (
              n.s && e.s
                ? n.d || e.d
                  ? !e.d || n.isZero()
                    ? ((i = e.s < 0 ? S(this, t, r) : new this(0)), (i.s = n.s))
                    : !n.d || e.isZero()
                      ? ((i = S(this, s, 1).times(0.5)), (i.s = n.s))
                      : e.s < 0
                        ? ((this.precision = s),
                          (this.rounding = 1),
                          (i = this.atan(A(n, e, s, 1))),
                          (e = S(this, s, 1)),
                          (this.precision = t),
                          (this.rounding = r),
                          (i = n.s < 0 ? i.minus(e) : i.plus(e)))
                        : (i = this.atan(A(n, e, s, 1)))
                  : ((i = S(this, s, 1).times(e.s > 0 ? 0.25 : 0.75)),
                    (i.s = n.s))
                : (i = new this(NaN)),
              i
            );
          }
          function cn(n) {
            return new this(n).cbrt();
          }
          function fn(n) {
            return Z((n = new this(n)), n.e + 1, 2);
          }
          function an(n, e, i) {
            return new this(n).clamp(e, i);
          }
          function dn(n) {
            if (!n || "object" !== r(n))
              throw Error("[DecimalError] Object expected");
            var e,
              i,
              t,
              s = !0 === n.defaults,
              o = [
                "precision",
                1,
                1e9,
                "rounding",
                0,
                8,
                "toExpNeg",
                -f,
                0,
                "toExpPos",
                0,
                f,
                "maxE",
                0,
                f,
                "minE",
                -f,
                0,
                "modulo",
                0,
                9,
              ];
            for (e = 0; e < o.length; e += 3)
              if (((i = o[e]), s && (this[i] = h[i]), void 0 !== (t = n[i]))) {
                if (!(m(t) === t && t >= o[e + 1] && t <= o[e + 2]))
                  throw Error(g + i + ": " + t);
                this[i] = t;
              }
            if (
              ((i = "crypto"), s && (this[i] = h[i]), void 0 !== (t = n[i]))
            ) {
              if (!0 !== t && !1 !== t && 0 !== t && 1 !== t)
                throw Error(g + i + ": " + t);
              if (t) {
                if (
                  "undefined" == typeof crypto ||
                  !crypto ||
                  (!crypto.getRandomValues && !crypto.randomBytes)
                )
                  throw Error("[DecimalError] crypto unavailable");
                this[i] = !0;
              } else this[i] = !1;
            }
            return this;
          }
          function ln(n) {
            return new this(n).cos();
          }
          function hn(n) {
            return new this(n).cosh();
          }
          function pn(n, e) {
            return new this(n).div(e);
          }
          function gn(n) {
            return new this(n).exp();
          }
          function wn(n) {
            return Z((n = new this(n)), n.e + 1, 3);
          }
          function mn() {
            var n,
              e,
              i = new this(0);
            for (p = !1, n = 0; n < arguments.length; )
              if (((e = new this(arguments[n++])), e.d))
                i.d && (i = i.plus(e.times(e)));
              else {
                if (e.s) return (p = !0), new this(1 / 0);
                i = e;
              }
            return (p = !0), i.sqrt();
          }
          function vn(n) {
            return n instanceof o || (n && n.toStringTag === w) || !1;
          }
          function Nn(n) {
            return new this(n).ln();
          }
          function bn(n, e) {
            return new this(n).log(e);
          }
          function xn(n) {
            return new this(n).log(2);
          }
          function En(n) {
            return new this(n).log(10);
          }
          function yn() {
            return H(this, arguments, "lt");
          }
          function Dn() {
            return H(this, arguments, "gt");
          }
          function Mn(n, e) {
            return new this(n).mod(e);
          }
          function On(n, e) {
            return new this(n).mul(e);
          }
          function qn(n, e) {
            return new this(n).pow(e);
          }
          function Fn(n) {
            var e,
              i,
              t,
              r,
              s = 0,
              o = new this(1),
              u = [];
            if (
              (void 0 === n ? (n = this.precision) : F(n, 1, 1e9),
              (t = Math.ceil(n / 7)),
              this.crypto)
            )
              if (crypto.getRandomValues)
                for (e = crypto.getRandomValues(new Uint32Array(t)); s < t; )
                  (r = e[s]),
                    r >= 429e7
                      ? (e[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                      : (u[s++] = r % 1e7);
              else {
                if (!crypto.randomBytes)
                  throw Error("[DecimalError] crypto unavailable");
                for (e = crypto.randomBytes((t *= 4)); s < t; )
                  (r =
                    e[s] +
                    (e[s + 1] << 8) +
                    (e[s + 2] << 16) +
                    ((127 & e[s + 3]) << 24)),
                    r >= 214e7
                      ? crypto.randomBytes(4).copy(e, s)
                      : (u.push(r % 1e7), (s += 4));
                s = t / 4;
              }
            else for (; s < t; ) u[s++] = (1e7 * Math.random()) | 0;
            for (
              t = u[--s],
                n %= 7,
                t && n && ((r = v(10, 7 - n)), (u[s] = ((t / r) | 0) * r));
              0 === u[s];
              s--
            )
              u.pop();
            if (s < 0) (i = 0), (u = [0]);
            else {
              for (i = -1; 0 === u[0]; i -= 7) u.shift();
              for (t = 1, r = u[0]; r >= 10; r /= 10) t++;
              t < 7 && (i -= 7 - t);
            }
            return (o.e = i), (o.d = u), o;
          }
          function _n(n) {
            return Z((n = new this(n)), n.e + 1, this.rounding);
          }
          function Rn(n) {
            return (
              (n = new this(n)), n.d ? (n.d[0] ? n.s : 0 * n.s) : n.s || NaN
            );
          }
          function An(n) {
            return new this(n).sin();
          }
          function Zn(n) {
            return new this(n).sinh();
          }
          function kn(n) {
            return new this(n).sqrt();
          }
          function Pn(n, e) {
            return new this(n).sub(e);
          }
          function Un() {
            var n = 0,
              e = arguments,
              i = new this(e[n]);
            for (p = !1; i.s && ++n < e.length; ) i = i.plus(e[n]);
            return (p = !0), Z(i, this.precision, this.rounding);
          }
          function Sn(n) {
            return new this(n).tan();
          }
          function Tn(n) {
            return new this(n).tanh();
          }
          function Ln(n) {
            return Z((n = new this(n)), n.e + 1, 1);
          }
          (o = (function n(e) {
            var i, t, s;
            function o(n) {
              var e,
                i,
                t,
                s = this;
              if (!(s instanceof o)) return new o(n);
              if (((s.constructor = o), vn(n)))
                return (
                  (s.s = n.s),
                  void (p
                    ? !n.d || n.e > o.maxE
                      ? ((s.e = NaN), (s.d = null))
                      : n.e < o.minE
                        ? ((s.e = 0), (s.d = [0]))
                        : ((s.e = n.e), (s.d = n.d.slice()))
                    : ((s.e = n.e), (s.d = n.d ? n.d.slice() : n.d)))
                );
              if (((t = r(n)), "number" === t)) {
                if (0 === n)
                  return (
                    (s.s = 1 / n < 0 ? -1 : 1), (s.e = 0), void (s.d = [0])
                  );
                if (
                  (n < 0 ? ((n = -n), (s.s = -1)) : (s.s = 1),
                  n === ~~n && n < 1e7)
                ) {
                  for (e = 0, i = n; i >= 10; i /= 10) e++;
                  return void (p
                    ? e > o.maxE
                      ? ((s.e = NaN), (s.d = null))
                      : e < o.minE
                        ? ((s.e = 0), (s.d = [0]))
                        : ((s.e = e), (s.d = [n]))
                    : ((s.e = e), (s.d = [n])));
                }
                return 0 * n !== 0
                  ? (n || (s.s = NaN), (s.e = NaN), void (s.d = null))
                  : W(s, n.toString());
              }
              if ("string" !== t) throw Error(g + n);
              return (
                45 === (i = n.charCodeAt(0))
                  ? ((n = n.slice(1)), (s.s = -1))
                  : (43 === i && (n = n.slice(1)), (s.s = 1)),
                E.test(n) ? W(s, n) : $(s, n)
              );
            }
            if (
              ((o.prototype = O),
              (o.ROUND_UP = 0),
              (o.ROUND_DOWN = 1),
              (o.ROUND_CEIL = 2),
              (o.ROUND_FLOOR = 3),
              (o.ROUND_HALF_UP = 4),
              (o.ROUND_HALF_DOWN = 5),
              (o.ROUND_HALF_EVEN = 6),
              (o.ROUND_HALF_CEIL = 7),
              (o.ROUND_HALF_FLOOR = 8),
              (o.EUCLID = 9),
              (o.config = o.set = dn),
              (o.clone = n),
              (o.isDecimal = vn),
              (o.abs = X),
              (o.acos = Y),
              (o.acosh = nn),
              (o.add = en),
              (o.asin = tn),
              (o.asinh = rn),
              (o.atan = sn),
              (o.atanh = on),
              (o.atan2 = un),
              (o.cbrt = cn),
              (o.ceil = fn),
              (o.clamp = an),
              (o.cos = ln),
              (o.cosh = hn),
              (o.div = pn),
              (o.exp = gn),
              (o.floor = wn),
              (o.hypot = mn),
              (o.ln = Nn),
              (o.log = bn),
              (o.log10 = En),
              (o.log2 = xn),
              (o.max = yn),
              (o.min = Dn),
              (o.mod = Mn),
              (o.mul = On),
              (o.pow = qn),
              (o.random = Fn),
              (o.round = _n),
              (o.sign = Rn),
              (o.sin = An),
              (o.sinh = Zn),
              (o.sqrt = kn),
              (o.sub = Pn),
              (o.sum = Un),
              (o.tan = Sn),
              (o.tanh = Tn),
              (o.trunc = Ln),
              void 0 === e && (e = {}),
              e && !0 !== e.defaults)
            )
              for (
                s = [
                  "precision",
                  "rounding",
                  "toExpNeg",
                  "toExpPos",
                  "maxE",
                  "minE",
                  "modulo",
                  "crypto",
                ],
                  i = 0;
                i < s.length;

              )
                e.hasOwnProperty((t = s[i++])) || (e[t] = this[t]);
            return o.config(e), o;
          })(h)),
            (o.prototype.constructor = o),
            (o["default"] = o.Decimal = o),
            (d = new o(d)),
            (l = new o(l)),
            (t = function () {
              return o;
            }.call(e, i, e, n)),
            void 0 === t || (n.exports = t);
        })();
    },
  },
]);
//# sourceMappingURL=pages-cat-index~pages-cat-index2~pages-pay-index~pages-pay-raffle~pages-pay-submit~pages_sub1-order-~58b36340.e433c596.js.map
