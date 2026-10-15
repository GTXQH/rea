(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  [
    "pages-user-apply~pages-user-certification~pages-user-huifu~pages-user-index~pages-user-level~pages-u~6bd29fe7",
  ],
  {
    "0f65": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("fd3c"),
        r("dc8a"),
        r("4626"),
        r("5ac7"),
        r("15d1"),
        r("d5c6"),
        r("5a56"),
        r("f074"),
        r("4db2"),
        r("c976"),
        r("4d8f"),
        r("7b97"),
        r("668a"),
        r("c5b7"),
        r("8ff5"),
        r("2378"),
        r("641a"),
        r("64e0"),
        r("cce3"),
        r("efba"),
        r("d009"),
        r("bd7d"),
        r("7edd"),
        r("d798"),
        r("f547"),
        r("5e54"),
        r("b60a"),
        r("8c18"),
        r("12973"),
        r("f991"),
        r("198e"),
        r("8557"),
        r("63b1"),
        r("1954"),
        r("1cf1");
      var n = r("4a32"),
        o = r("2343"),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        a = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        u = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        s = {
          PNG: "image/png",
          JPEG: "image/jpeg",
          WEBP: "image/webp",
          BMP: "image/bmp",
        },
        c = Math.log(2),
        l = Object.keys(s).map(function (e) {
          return s[e];
        }),
        f = s.JPEG;
      var h = (function () {
          function e(e, t) {
            (this.file = e),
              (this.config = t),
              (this.config = i(
                { quality: 0.92, noCompressIfLarger: !1 },
                this.config,
              ));
          }
          return (
            (e.prototype.process = function () {
              return a(this, void 0, void 0, function () {
                var e, t, r, o, i, a;
                return u(this, function (u) {
                  switch (u.label) {
                    case 0:
                      if (
                        ((this.outputType = this.file.type),
                        (e = {}),
                        !(function (e) {
                          return l.includes(e);
                        })(this.file.type))
                      )
                        throw new n.QiniuError(
                          n.QiniuErrorName.UnsupportedFileType,
                          "unsupported file type: " + this.file.type,
                        );
                      return [4, this.getOriginImage()];
                    case 1:
                      return (t = u.sent()), [4, this.getCanvas(t)];
                    case 2:
                      return (
                        (r = u.sent()),
                        (o = 1),
                        this.config.maxWidth &&
                          (o = Math.min(1, this.config.maxWidth / r.width)),
                        this.config.maxHeight &&
                          (o = Math.min(
                            1,
                            o,
                            this.config.maxHeight / r.height,
                          )),
                        (e.width = r.width),
                        (e.height = r.height),
                        [4, this.doScale(r, o)]
                      );
                    case 3:
                      return (
                        (i = u.sent()),
                        (a = this.toBlob(i)),
                        a.size > this.file.size &&
                        this.config.noCompressIfLarger
                          ? [
                              2,
                              {
                                dist: this.file,
                                width: e.width,
                                height: e.height,
                              },
                            ]
                          : [2, { dist: a, width: i.width, height: i.height }]
                      );
                  }
                });
              });
            }),
            (e.prototype.clear = function (e, t, r) {
              this.outputType === f
                ? ((e.fillStyle = "#fff"), e.fillRect(0, 0, t, r))
                : e.clearRect(0, 0, t, r);
            }),
            (e.prototype.getOriginImage = function () {
              var e = this;
              return new Promise(function (t, r) {
                var n = (0, o.createObjectURL)(e.file),
                  i = new Image();
                (i.onload = function () {
                  t(i);
                }),
                  (i.onerror = function () {
                    r("image load error");
                  }),
                  (i.src = n);
              });
            }),
            (e.prototype.getCanvas = function (e) {
              var t = this;
              return new Promise(function (r, o) {
                var i = document.createElement("canvas"),
                  a = i.getContext("2d");
                if (a) {
                  var u = e.width,
                    s = e.height;
                  (i.height = s),
                    (i.width = u),
                    t.clear(a, u, s),
                    a.drawImage(e, 0, 0),
                    r(i);
                } else
                  o(
                    new n.QiniuError(
                      n.QiniuErrorName.GetCanvasContextFailed,
                      "context is null",
                    ),
                  );
              });
            }),
            (e.prototype.doScale = function (e, t) {
              return a(this, void 0, void 0, function () {
                var r, o, i, a, s, l, f, h, p, d, b, y, v, g, m, w;
                return u(this, function (u) {
                  if (1 === t) return [2, e];
                  if (
                    ((r = e.getContext("2d")),
                    (o = Math.min(4, Math.ceil(1 / t / c))),
                    (i = Math.pow(t, 1 / o)),
                    (a = document.createElement("canvas")),
                    (s = a.getContext("2d")),
                    (l = e.width),
                    (f = e.height),
                    (h = l),
                    (p = f),
                    (a.width = l),
                    (a.height = f),
                    !s || !r)
                  )
                    throw new n.QiniuError(
                      n.QiniuErrorName.GetCanvasContextFailed,
                      "mctx or sctx can't be null",
                    );
                  for (y = 0; y < o; y++)
                    (v = (l * i) | 0),
                      (g = (f * i) | 0),
                      y === o - 1 && ((v = h * t), (g = p * t)),
                      y % 2 === 0 ? ((d = e), (b = s)) : ((d = a), (b = r)),
                      this.clear(b, l, f),
                      b.drawImage(d, 0, 0, l, f, 0, 0, v, g),
                      (l = v),
                      (f = g);
                  return (
                    (m = d === e ? a : e),
                    (w = b.getImageData(0, 0, l, f)),
                    (m.width = l),
                    (m.height = f),
                    b.putImageData(w, 0, 0),
                    [2, m]
                  );
                });
              });
            }),
            (e.prototype.toBlob = function (e) {
              var t = e.toDataURL(this.outputType, this.config.quality),
                r = atob(t.split(",")[1])
                  .split("")
                  .map(function (e) {
                    return e.charCodeAt(0);
                  }),
                n = new Blob([new Uint8Array(r)], { type: this.outputType });
              return n;
            }),
            e
          );
        })(),
        p = function (e, t) {
          return new h(e, t).process();
        };
      t.default = p;
    },
    "114ea": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.urlSafeBase64Decode = function (e) {
          return (
            (e = e.replace(/_/g, "/").replace(/-/g, "+")),
            (function (e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                u,
                s,
                c,
                l =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                f = 0,
                h = 0,
                p = [];
              if (!e) return e;
              e += "";
              do {
                (o = l.indexOf(e.charAt(f++))),
                  (i = l.indexOf(e.charAt(f++))),
                  (a = l.indexOf(e.charAt(f++))),
                  (u = l.indexOf(e.charAt(f++))),
                  (s = (o << 18) | (i << 12) | (a << 6) | u),
                  (t = (s >> 16) & 255),
                  (r = (s >> 8) & 255),
                  (n = 255 & s),
                  (p[h++] =
                    64 === a
                      ? String.fromCharCode(t)
                      : 64 === u
                        ? String.fromCharCode(t, r)
                        : String.fromCharCode(t, r, n));
              } while (f < e.length);
              return (
                (c = p.join("")),
                (function (e) {
                  var t = [],
                    r = 0,
                    n = 0,
                    o = 0;
                  e += "";
                  while (r < e.length) {
                    (n = 255 & e.charCodeAt(r)),
                      (o = 0),
                      n <= 191
                        ? ((n &= 127), (o = 1))
                        : n <= 223
                          ? ((n &= 31), (o = 2))
                          : n <= 239
                            ? ((n &= 15), (o = 3))
                            : ((n &= 7), (o = 4));
                    for (var i = 1; i < o; ++i)
                      n = (n << 6) | (63 & e.charCodeAt(i + r));
                    4 === o
                      ? ((n -= 65536),
                        t.push(String.fromCharCode(55296 | ((n >> 10) & 1023))),
                        t.push(String.fromCharCode(56320 | (1023 & n))))
                      : t.push(String.fromCharCode(n)),
                      (r += o);
                  }
                  return t.join("");
                })(c)
              );
            })(e)
          );
        }),
        (t.urlSafeBase64Encode = function (e) {
          return (
            (e = (function (e) {
              var t,
                r,
                n,
                o,
                i,
                a,
                u,
                s,
                c =
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                l = 0,
                f = 0,
                h = "",
                p = [];
              if (!e) return e;
              e = (function (e) {
                if (null === e || "undefined" === typeof e) return "";
                var t,
                  r,
                  n,
                  o = e + "",
                  i = "";
                (t = r = 0), (n = o.length);
                for (var a = 0; a < n; a++) {
                  var u = o.charCodeAt(a),
                    s = null;
                  if (u < 128) r++;
                  else if (u > 127 && u < 2048)
                    s = String.fromCharCode((u >> 6) | 192, (63 & u) | 128);
                  else if (((63488 & u) ^ 55296) > 0)
                    s = String.fromCharCode(
                      (u >> 12) | 224,
                      ((u >> 6) & 63) | 128,
                      (63 & u) | 128,
                    );
                  else {
                    if (((64512 & u) ^ 55296) > 0)
                      throw new RangeError("Unmatched trail surrogate at " + a);
                    var c = o.charCodeAt(++a);
                    if (((64512 & c) ^ 56320) > 0)
                      throw new RangeError(
                        "Unmatched lead surrogate at " + (a - 1),
                      );
                    (u = ((1023 & u) << 10) + (1023 & c) + 65536),
                      (s = String.fromCharCode(
                        (u >> 18) | 240,
                        ((u >> 12) & 63) | 128,
                        ((u >> 6) & 63) | 128,
                        (63 & u) | 128,
                      ));
                  }
                  null !== s &&
                    (r > t && (i += o.slice(t, r)), (i += s), (t = r = a + 1));
                }
                r > t && (i += o.slice(t, n));
                return i;
              })(e + "");
              do {
                (t = e.charCodeAt(l++)),
                  (r = e.charCodeAt(l++)),
                  (n = e.charCodeAt(l++)),
                  (s = (t << 16) | (r << 8) | n),
                  (o = (s >> 18) & 63),
                  (i = (s >> 12) & 63),
                  (a = (s >> 6) & 63),
                  (u = 63 & s),
                  (p[f++] =
                    c.charAt(o) + c.charAt(i) + c.charAt(a) + c.charAt(u));
              } while (l < e.length);
              switch (((h = p.join("")), e.length % 3)) {
                case 1:
                  h = h.slice(0, -2) + "==";
                  break;
                case 2:
                  h = h.slice(0, -1) + "=";
                  break;
              }
              return h;
            })(e)),
            e.replace(/\//g, "_").replace(/\+/g, "-")
          );
        }),
        r("7a76"),
        r("c9b5"),
        r("f7a5"),
        r("aa9c"),
        r("5c47"),
        r("a1c1");
    },
    1851: function (e, t, r) {
      "use strict";
      var n = r("8bdb"),
        o = r("84d6"),
        i = r("1cb5");
      n({ target: "Array", proto: !0 }, { fill: o }), i("fill");
    },
    "1ad2": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.exif = function (e, t) {
          var r = o(e, t) + "?exif";
          return (0, n.request)(r, { method: "GET" });
        }),
        (t.imageInfo = function (e, t) {
          var r = o(e, t) + "?imageInfo";
          return (0, n.request)(r, { method: "GET" });
        }),
        (t.imageMogr2 = a),
        (t.imageView2 = i),
        (t.pipeline = function (e, t, r) {
          var n,
            s = "[object Array]" === Object.prototype.toString.call(e),
            c = !1,
            l = "";
          if (s) {
            for (var f = 0, h = e.length; f < h; f++) {
              if (((n = e[f]), !n.fop)) throw "fop can't be empty in pipeline";
              switch (n.fop) {
                case "watermark":
                  l += u(n) + "|";
                  break;
                case "imageView2":
                  l += i(n) + "|";
                  break;
                case "imageMogr2":
                  l += a(n) + "|";
                  break;
                default:
                  c = !0;
                  break;
              }
              if (c) throw "fop is wrong in pipeline";
            }
            if (t && r) {
              l = o(t, r) + "?" + l;
              var p = l.length;
              "|" === l.slice(p - 1) && (l = l.slice(0, p - 1));
            }
            return l;
          }
          throw "pipeline's first param should be array";
        }),
        (t.watermark = u),
        r("f7a5"),
        r("5c47"),
        r("0506"),
        r("1851"),
        r("bf0f");
      var n = r("f243");
      function o(e, t) {
        return (
          (e = encodeURIComponent(e)),
          "/" !== t.slice(t.length - 1) && (t += "/"),
          t + e
        );
      }
      function i(e, t, r) {
        if (!/^\d$/.test(String(e.mode)))
          throw "mode should be number in imageView2";
        var n = e.mode,
          i = e.w,
          a = e.h,
          u = e.q,
          s = e.format;
        if (!i && !a) throw "param w and h is empty in imageView2";
        var c = "imageView2/" + encodeURIComponent(n);
        return (
          (c += i ? "/w/" + encodeURIComponent(i) : ""),
          (c += a ? "/h/" + encodeURIComponent(a) : ""),
          (c += u ? "/q/" + encodeURIComponent(u) : ""),
          (c += s ? "/format/" + encodeURIComponent(s) : ""),
          t && r && (c = o(t, r) + "?" + c),
          c
        );
      }
      function a(e, t, r) {
        var n = e["auto-orient"],
          i = e.thumbnail,
          a = e.strip,
          u = e.gravity,
          s = e.crop,
          c = e.quality,
          l = e.rotate,
          f = e.format,
          h = e.blur,
          p = "imageMogr2";
        return (
          (p += n ? "/auto-orient" : ""),
          (p += i ? "/thumbnail/" + encodeURIComponent(i) : ""),
          (p += a ? "/strip" : ""),
          (p += u ? "/gravity/" + encodeURIComponent(u) : ""),
          (p += c ? "/quality/" + encodeURIComponent(c) : ""),
          (p += s ? "/crop/" + encodeURIComponent(s) : ""),
          (p += l ? "/rotate/" + encodeURIComponent(l) : ""),
          (p += f ? "/format/" + encodeURIComponent(f) : ""),
          (p += h ? "/blur/" + encodeURIComponent(h) : ""),
          t && r && (p = o(t, r) + "?" + p),
          p
        );
      }
      function u(e, t, r) {
        var i = e.mode;
        if (!i) throw "mode can't be empty in watermark";
        var a = "watermark/" + i;
        if (1 !== i && 2 !== i) throw "mode is wrong";
        if (1 === i) {
          var u = e.image;
          if (!u) throw "image can't be empty in watermark";
          a += u ? "/image/" + (0, n.urlSafeBase64Encode)(u) : "";
        }
        if (2 === i) {
          var s = e.text,
            c = e.font,
            l = e.fontsize,
            f = e.fill;
          if (!s) throw "text can't be empty in watermark";
          (a += s ? "/text/" + (0, n.urlSafeBase64Encode)(s) : ""),
            (a += c ? "/font/" + (0, n.urlSafeBase64Encode)(c) : ""),
            (a += l ? "/fontsize/" + l : ""),
            (a += f ? "/fill/" + (0, n.urlSafeBase64Encode)(f) : "");
        }
        var h = e.dissolve,
          p = e.gravity,
          d = e.dx,
          b = e.dy;
        return (
          (a += h ? "/dissolve/" + encodeURIComponent(h) : ""),
          (a += p ? "/gravity/" + encodeURIComponent(p) : ""),
          (a += d ? "/dx/" + encodeURIComponent(d) : ""),
          (a += b ? "/dy/" + encodeURIComponent(b) : ""),
          t && r && (a = o(t, r) + "?" + a),
          a
        );
      }
    },
    "20f3": function (e, t, r) {
      "use strict";
      var n = r("8bdb"),
        o = r("5145");
      n(
        { target: "Array", proto: !0, forced: o !== [].lastIndexOf },
        { lastIndexOf: o },
      );
    },
    "22a4": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("01a2"),
        r("e39c"),
        r("bf0f"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("aa9c"),
        r("c223"),
        r("4626");
      var n = r("2719"),
        o = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            i = r.call(e),
            a = [];
          try {
            while ((void 0 === t || t-- > 0) && !(n = i.next()).done)
              a.push(n.value);
          } catch (u) {
            o = { error: u };
          } finally {
            try {
              n && !n.done && (r = i["return"]) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        i = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(o(arguments[t]));
          return e;
        },
        a = (function () {
          function e(t, r, n, o) {
            void 0 === r && (r = !0),
              void 0 === n && (n = "OFF"),
              void 0 === o && (o = "UPLOAD"),
              (this.token = t),
              (this.disableReport = r),
              (this.level = n),
              (this.prefix = o),
              (this.id = ++e.id);
          }
          return (
            (e.prototype.getPrintPrefix = function (e) {
              return (
                "Qiniu-JS-SDK [" + e + "][" + this.prefix + "#" + this.id + "]:"
              );
            }),
            (e.prototype.report = function (e, t) {
              if (!this.disableReport)
                try {
                  (0, n.reportV3)(this.token, e, t);
                } catch (r) {
                  this.warn(r);
                }
            }),
            (e.prototype.info = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = ["INFO"];
              r.includes(this.level) &&
                console.log.apply(console, i([this.getPrintPrefix("INFO")], e));
            }),
            (e.prototype.warn = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = ["INFO", "WARN"];
              r.includes(this.level) &&
                console.warn.apply(
                  console,
                  i([this.getPrintPrefix("WARN")], e),
                );
            }),
            (e.prototype.error = function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              var r = ["INFO", "WARN", "ERROR"];
              r.includes(this.level) &&
                console.error.apply(
                  console,
                  i([this.getPrintPrefix("ERROR")], e),
                );
            }),
            (e.id = 0),
            e
          );
        })(),
        u = a;
      t.default = u;
    },
    2343: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.MB = void 0),
        (t.computeMd5 = function (e) {
          return s(this, void 0, void 0, function () {
            var t, r;
            return c(this, function (n) {
              switch (n.label) {
                case 0:
                  return [4, d(e)];
                case 1:
                  return (
                    (t = n.sent()),
                    (r = new o.default.ArrayBuffer()),
                    r.append(t),
                    [2, r.end()]
                  );
              }
            });
          });
        }),
        (t.createLocalKey = function (e, t, r) {
          var n = null == t ? "_" : "_key_" + t + "_";
          return "qiniu_js_sdk_upload_file_name_" + e + n + "size_" + r;
        }),
        (t.createObjectURL = function (e) {
          var t = window.URL || window.webkitURL || window.mozURL;
          return t.createObjectURL(e);
        }),
        (t.createXHR = p),
        (t.getAuthHeaders = h),
        (t.getChunks = function (e, t) {
          var r = t * l;
          if (r > e.size) r = e.size;
          else while (e.size > 1e4 * r) r *= 2;
          for (var n = [], o = Math.ceil(e.size / r), i = 0; i < o; i++) {
            var a = e.slice(r * i, i === o - 1 ? e.size : r * (i + 1));
            n.push(a);
          }
          return n;
        }),
        (t.getDomainFromUrl = function (e) {
          if (e && e.match) {
            var t = e.match(/^https?:\/\/([^:^/]*)/);
            return t ? t[1] : "";
          }
          return "";
        }),
        (t.getHeadersForChunkUpload = function (e) {
          var t = h(e);
          return u({ "content-type": "application/octet-stream" }, t);
        }),
        (t.getHeadersForMkFile = function (e) {
          var t = h(e);
          return u({ "content-type": "application/json" }, t);
        }),
        (t.getLocalFileInfo = function (e, t) {
          var r = null;
          try {
            r = localStorage.getItem(e);
          } catch (o) {
            t.warn(
              new i.QiniuError(
                i.QiniuErrorName.ReadCacheFailed,
                "getLocalFileInfo failed. key: " + e,
              ),
            );
          }
          if (null == r) return null;
          var n = null;
          try {
            n = JSON.parse(r);
          } catch (a) {
            f(e, t),
              t.warn(
                new i.QiniuError(
                  i.QiniuErrorName.InvalidCacheData,
                  "getLocalFileInfo failed to parse. key: " + e,
                ),
              );
          }
          return n;
        }),
        (t.getPortFromUrl = function (e) {
          if (e && e.match) {
            var t = e.match(/(^https?)/);
            if (!t) return "";
            var r = t[1];
            return (
              (t = e.match(/^https?:\/\/([^:^/]*):(\d*)/)),
              t ? t[2] : "http" === r ? "80" : "443"
            );
          }
          return "";
        }),
        (t.getPutPolicy = function (e) {
          if (!e)
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "invalid token.",
            );
          var t = e.split(":");
          if (1 === t.length)
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "invalid token segments.",
            );
          var r = t.length > 3 ? t[1] : t[0];
          if (!r)
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "missing assess key field.",
            );
          var n = null;
          try {
            n = JSON.parse((0, a.urlSafeBase64Decode)(t[t.length - 1]));
          } catch (u) {
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "token parse failed.",
            );
          }
          if (null == n)
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "putPolicy is null.",
            );
          if (null == n.scope)
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "scope field is null.",
            );
          var o = n.scope.split(":")[0];
          if (!o)
            throw new i.QiniuError(
              i.QiniuErrorName.InvalidToken,
              "resolve bucketName failed.",
            );
          return { assessKey: r, bucketName: o, scope: n.scope };
        }),
        (t.isCustomVarsValid = function (e) {
          return Object.keys(e).every(function (e) {
            return 0 === e.indexOf("x:");
          });
        }),
        (t.isMetaDataValid = function (e) {
          return Object.keys(e).every(function (e) {
            return 0 === e.indexOf("x-qn-meta-");
          });
        }),
        (t.readAsArrayBuffer = d),
        (t.removeLocalFileInfo = f),
        (t.request = function (e, t) {
          return new Promise(function (r, n) {
            var o = p();
            if ((o.open(t.method, e), t.onCreate && t.onCreate(o), t.headers)) {
              var a = t.headers;
              Object.keys(a).forEach(function (e) {
                o.setRequestHeader(e, a[e]);
              });
            }
            o.upload.addEventListener("progress", function (e) {
              e.lengthComputable &&
                t.onProgress &&
                t.onProgress({ loaded: e.loaded, total: e.total });
            }),
              (o.onreadystatechange = function () {
                var e = o.responseText;
                if (4 === o.readyState) {
                  var t = o.getResponseHeader("x-reqId") || "";
                  if (0 !== o.status)
                    if (200 === o.status)
                      try {
                        r({ data: JSON.parse(e), reqId: t });
                      } catch (s) {
                        n(s);
                      }
                    else {
                      var a = "xhr request failed, code: " + o.status;
                      e && (a += " response: " + e);
                      var u = void 0;
                      try {
                        u = JSON.parse(e);
                      } catch (c) {}
                      n(new i.QiniuRequestError(o.status, t, a, u));
                    }
                  else n(new i.QiniuNetworkError("network error.", t));
                }
              }),
              o.send(t.body);
          });
        }),
        (t.setLocalFileInfo = function (e, t, r) {
          try {
            localStorage.setItem(e, JSON.stringify(t));
          } catch (n) {
            r.warn(
              new i.QiniuError(
                i.QiniuErrorName.WriteCacheFailed,
                "setLocalFileInfo failed: " + e,
              ),
            );
          }
        }),
        (t.sum = function (e) {
          return e.reduce(function (e, t) {
            return e + t;
          }, 0);
        }),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("f7a5"),
        r("dc8a"),
        r("5ef2"),
        r("473f"),
        r("d4b5"),
        r("2797"),
        r("5c47"),
        r("2c10"),
        r("dc89"),
        r("2425");
      var o = n(r("8f6e")),
        i = r("4a32"),
        a = r("114ea"),
        u = function () {
          return (
            (u =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            u.apply(this, arguments)
          );
        },
        s = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        c = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        l = Math.pow(1024, 2);
      function f(e, t) {
        try {
          localStorage.removeItem(e);
        } catch (r) {
          t.warn(
            new i.QiniuError(
              i.QiniuErrorName.RemoveCacheFailed,
              "removeLocalFileInfo failed. key: " + e,
            ),
          );
        }
      }
      function h(e) {
        var t = "UpToken " + e;
        return { Authorization: t };
      }
      function p() {
        if (window.XMLHttpRequest) return new XMLHttpRequest();
        if (window.ActiveXObject)
          return new window.ActiveXObject("Microsoft.XMLHTTP");
        throw new i.QiniuError(
          i.QiniuErrorName.NotAvailableXMLHttpRequest,
          "the current environment does not support.",
        );
      }
      function d(e) {
        return new Promise(function (t, r) {
          var n = new FileReader();
          (n.onload = function (e) {
            if (e.target) {
              var n = e.target.result;
              t(n);
            } else
              r(
                new i.QiniuError(
                  i.QiniuErrorName.InvalidProgressEventTarget,
                  "progress event target is undefined",
                ),
              );
          }),
            (n.onerror = function () {
              r(
                new i.QiniuError(
                  i.QiniuErrorName.FileReaderReadFailed,
                  "fileReader read failed",
                ),
              );
            }),
            n.readAsArrayBuffer(e);
        });
      }
      t.MB = l;
    },
    2609: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("3639").default,
        o = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("7a76"),
        r("c9b5"),
        r("bf0f"),
        r("fd3c"),
        r("93278"),
        r("20f3"),
        r("5c47"),
        r("2c10"),
        r("c223"),
        r("ab80");
      var i = o(r("9004")),
        a = o(r("2634")),
        u = o(r("2fdc")),
        s = o(r("9b1b")),
        c = o(r("80b1")),
        l = o(r("efe5")),
        f = n(r("d46c")),
        h = (function () {
          function e() {
            var t =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            if (
              ((0, c.default)(this, e),
              (this.defaults = {
                domain: "",
                tokenUrl: "",
                quality: 0.6,
                maxWidth: 1024,
                maxHeight: 1024,
                useCdnDomain: !0,
                prefix: "images/",
                maxCount: 9,
                chunkSize: 4,
                parallel: 3,
                region: "z2",
                uploadDomains: {
                  z0: "https://upload.qiniup.com",
                  z1: "https://upload-z1.qiniup.com",
                  z2: "https://up-z2.qiniup.com",
                  na0: "https://upload-na0.qiniup.com",
                  as0: "https://upload-as0.qiniup.com",
                },
              }),
              (this.options = (0, s.default)(
                (0, s.default)({}, this.defaults),
                t,
              )),
              !this.options.domain || !this.options.tokenUrl)
            )
              throw new Error("domain and tokenUrl are required");
          }
          return (
            (0, l.default)(e, [
              {
                key: "isH5",
                get: function () {
                  return !0;
                },
              },
              {
                key: "isWeapp",
                get: function () {
                  return !1;
                },
              },
              {
                key: "chooseAndUpload",
                value: function () {
                  var e =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {};
                  return this.chooseAndUploadMultiple(
                    (0, s.default)((0, s.default)({}, e), {}, { maxCount: 1 }),
                  ).then(function (e) {
                    return e[0];
                  });
                },
              },
              {
                key: "chooseAndUploadMultiple",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e() {
                      var t,
                        r,
                        n = this,
                        o = arguments;
                      return (0, a.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    o.length > 0 && void 0 !== o[0]
                                      ? o[0]
                                      : {}),
                                  (r = (0, s.default)(
                                    (0, s.default)({}, this.options),
                                    t,
                                  )),
                                  e.abrupt(
                                    "return",
                                    new Promise(function (e, t) {
                                      var o = {
                                          count: r.maxCount,
                                          sizeType: ["original", "compressed"],
                                          sourceType: ["album", "camera"],
                                        },
                                        i =
                                          n.isH5 || n.isWeapp
                                            ? uni.chooseImage
                                            : null;
                                      if (!i)
                                        return t(
                                          new Error("Unsupported platform"),
                                        );
                                      i(
                                        (0, s.default)(
                                          (0, s.default)({}, o),
                                          {},
                                          {
                                            success: (function () {
                                              var o = (0, u.default)(
                                                (0, a.default)().mark(
                                                  function o(i) {
                                                    var u, s, c;
                                                    return (0,
                                                    a.default)().wrap(
                                                      function (o) {
                                                        while (1)
                                                          switch (
                                                            (o.prev = o.next)
                                                          ) {
                                                            case 0:
                                                              return (
                                                                (o.prev = 0),
                                                                (u =
                                                                  i.tempFiles ||
                                                                  i.tempFilePaths.map(
                                                                    function (
                                                                      e,
                                                                    ) {
                                                                      return {
                                                                        path: e,
                                                                      };
                                                                    },
                                                                  )),
                                                                (s = u.map(
                                                                  function (e) {
                                                                    return n.uploadFile(
                                                                      e,
                                                                      r,
                                                                    );
                                                                  },
                                                                )),
                                                                (o.next = 5),
                                                                n.limitConcurrent(
                                                                  s,
                                                                  r.parallel,
                                                                )
                                                              );
                                                            case 5:
                                                              (c = o.sent),
                                                                e(c),
                                                                (o.next = 12);
                                                              break;
                                                            case 9:
                                                              (o.prev = 9),
                                                                (o.t0 =
                                                                  o["catch"](
                                                                    0,
                                                                  )),
                                                                t(o.t0);
                                                            case 12:
                                                            case "end":
                                                              return o.stop();
                                                          }
                                                      },
                                                      o,
                                                      null,
                                                      [[0, 9]],
                                                    );
                                                  },
                                                ),
                                              );
                                              return function (e) {
                                                return o.apply(this, arguments);
                                              };
                                            })(),
                                            fail: t,
                                          },
                                        ),
                                      );
                                    }),
                                  )
                                );
                              case 3:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "compressImage",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t, n) {
                      var o;
                      return (0, a.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.isWeapp) {
                                  e.next = 5;
                                  break;
                                }
                                if (!t.path.endsWith(".gif")) {
                                  e.next = 4;
                                  break;
                                }
                                return (
                                  console.log("检测到GIF，跳过压缩"),
                                  e.abrupt("return", t)
                                );
                              case 4:
                                return e.abrupt(
                                  "return",
                                  new Promise(function (e, r) {
                                    uni.compressImage({
                                      src: t.path,
                                      quality: 100 * n.quality,
                                      success: function (t) {
                                        return e({ path: t.tempFilePath });
                                      },
                                      fail: function (r) {
                                        console.error("压缩失败:", r), e(t);
                                      },
                                    });
                                  }),
                                );
                              case 5:
                                if (!this.isH5) {
                                  e.next = 17;
                                  break;
                                }
                                return (
                                  (e.prev = 6),
                                  (e.next = 9),
                                  Promise.resolve().then(function () {
                                    return (0, i.default)(r("faa1"));
                                  })
                                );
                              case 9:
                                return (
                                  (o = e.sent),
                                  e.abrupt(
                                    "return",
                                    new Promise(function (e, r) {
                                      if ("image/gif" === t.type) return e(t);
                                      new o.default(t, {
                                        quality: n.quality,
                                        maxWidth: n.maxWidth,
                                        maxHeight: n.maxHeight,
                                        success: e,
                                        error: function (r) {
                                          console.error("压缩失败:", r), e(t);
                                        },
                                      });
                                    }),
                                  )
                                );
                              case 13:
                                return (
                                  (e.prev = 13),
                                  (e.t0 = e["catch"](6)),
                                  console.warn(
                                    "compressorjs加载失败，使用原文件",
                                  ),
                                  e.abrupt("return", t)
                                );
                              case 17:
                                return e.abrupt("return", t);
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 13]],
                      );
                    }),
                  );
                  return function (t, r) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getFileExt",
                value: function (e) {
                  var t = e.path || e,
                    r = t.lastIndexOf(".");
                  return r > 0 ? t.substr(r) : "";
                },
              },
              {
                key: "uploadFile",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t, r, n) {
                      var o, i, u, c, l, f, h, p, d, b;
                      return (0, a.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((o = (0, s.default)(
                                    (0, s.default)({}, this.options),
                                    r,
                                  )),
                                  (e.prev = 1),
                                  (i = r && r.skipCompress),
                                  !i)
                                ) {
                                  e.next = 35;
                                  break;
                                }
                                if (!this.isWeapp) {
                                  e.next = 8;
                                  break;
                                }
                                (u = { path: t.path || t }), (e.next = 33);
                                break;
                              case 8:
                                if (!this.isH5) {
                                  e.next = 32;
                                  break;
                                }
                                if (!(t instanceof Blob)) {
                                  e.next = 13;
                                  break;
                                }
                                (u = t), (e.next = 30);
                                break;
                              case 13:
                                if ("string" !== typeof t) {
                                  e.next = 20;
                                  break;
                                }
                                return (
                                  (e.next = 16),
                                  fetch(t).then(function (e) {
                                    return e.blob();
                                  })
                                );
                              case 16:
                                (c = e.sent),
                                  (u = new File([c], "video.mp4", {
                                    type: c.type || "video/mp4",
                                  })),
                                  (e.next = 30);
                                break;
                              case 20:
                                if (!t || !t.path) {
                                  e.next = 29;
                                  break;
                                }
                                return (
                                  (e.next = 23),
                                  fetch(t.path).then(function (e) {
                                    return e.blob();
                                  })
                                );
                              case 23:
                                (l = e.sent),
                                  (f = (t.path.match(/\.(\w+)(\?|$)/) || [
                                    ,
                                    "mp4",
                                  ])[1]),
                                  (h =
                                    "mp4" === f
                                      ? "video/mp4"
                                      : "webm" === f
                                        ? "video/webm"
                                        : "application/octet-stream"),
                                  (u = new File(
                                    [l],
                                    "video_".concat(Date.now(), ".").concat(f),
                                    { type: h },
                                  )),
                                  (e.next = 30);
                                break;
                              case 29:
                                throw new Error("无效的视频文件");
                              case 30:
                                e.next = 33;
                                break;
                              case 32:
                                throw new Error("Unsupported platform");
                              case 33:
                                e.next = 43;
                                break;
                              case 35:
                                if (!this.isWeapp) {
                                  e.next = 39;
                                  break;
                                }
                                (e.t0 = { path: t.path }), (e.next = 42);
                                break;
                              case 39:
                                return (e.next = 41), this.compressImage(t, o);
                              case 41:
                                e.t0 = e.sent;
                              case 42:
                                u = e.t0;
                              case 43:
                                return (
                                  (e.next = 45), this.getUploadToken(o.tokenUrl)
                                );
                              case 45:
                                if (
                                  ((p = e.sent),
                                  (d = this.getFileExt(u.path || u.name)),
                                  (b = ""
                                    .concat(o.prefix, "/")
                                    .concat(
                                      Math.random().toString(36).substr(2),
                                      "_",
                                    )
                                    .concat(Date.now())
                                    .concat(d)),
                                  !this.isWeapp)
                                ) {
                                  e.next = 50;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.uploadInWeapp(u.path, b, p, o, n),
                                );
                              case 50:
                                if (!this.isH5) {
                                  e.next = 52;
                                  break;
                                }
                                return e.abrupt(
                                  "return",
                                  this.uploadInH5(u, b, p, o, n),
                                );
                              case 52:
                                throw new Error("Unsupported platform");
                              case 55:
                                throw (
                                  ((e.prev = 55), (e.t1 = e["catch"](1)), e.t1)
                                );
                              case 58:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 55]],
                      );
                    }),
                  );
                  return function (t, r, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getUploadDomain",
                value: function () {
                  return (
                    this.options.uploadDomains[this.options.region] ||
                    this.options.uploadDomains.z2
                  );
                },
              },
              {
                key: "uploadInWeapp",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t, r, n, o, i) {
                      var u = this;
                      return (0, a.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt(
                                "return",
                                new Promise(function (e, a) {
                                  var c = uni.uploadFile({
                                    url: u.getUploadDomain(),
                                    filePath: t,
                                    name: "file",
                                    formData: { token: n, key: r },
                                    success: function (t) {
                                      if (200 === t.statusCode)
                                        try {
                                          var r = JSON.parse(t.data);
                                          e(
                                            (0, s.default)(
                                              (0, s.default)({}, r),
                                              {},
                                              {
                                                url: ""
                                                  .concat(o.domain, "/")
                                                  .concat(r.key),
                                              },
                                            ),
                                          );
                                        } catch (n) {
                                          a(new Error("解析响应失败"));
                                        }
                                      else
                                        a(
                                          new Error(
                                            "上传失败: ".concat(t.statusCode),
                                          ),
                                        );
                                    },
                                    fail: a,
                                  });
                                  c.onProgressUpdate(function (e) {
                                    i && i(e.progress);
                                  });
                                }),
                              );
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t, r, n, o, i) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "uploadInH5",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t, r, n, o, i) {
                      var u, c;
                      return (0, a.default)().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (u = {
                                  useCdnDomain: o.useCdnDomain,
                                  chunkSize: o.chunkSize,
                                  region: f.region.z2,
                                }),
                                (c = {
                                  fname: t.name || "file",
                                  params: {},
                                  mimeType: t.type || null,
                                }),
                                e.abrupt(
                                  "return",
                                  new Promise(function (e, a) {
                                    var l = f.upload(t, r, n, c, u);
                                    l.subscribe({
                                      next: function (e) {
                                        i &&
                                          e &&
                                          e.total &&
                                          i(Math.round(e.total.percent));
                                      },
                                      error: a,
                                      complete: function (t) {
                                        e(
                                          (0, s.default)(
                                            (0, s.default)({}, t),
                                            {},
                                            {
                                              url: ""
                                                .concat(o.domain, "/")
                                                .concat(t.key),
                                            },
                                          ),
                                        );
                                      },
                                    });
                                  }),
                                )
                              );
                            case 3:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  );
                  return function (t, r, n, o, i) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getUploadToken",
                value: function (e) {
                  return new Promise(function (t, r) {
                    uni.request({
                      url: e,
                      success: function (e) {
                        var n;
                        null !== (n = e.data) && void 0 !== n && n.data
                          ? t(e.data.data)
                          : r(new Error("获取上传凭证失败"));
                      },
                      fail: r,
                    });
                  });
                },
              },
              {
                key: "limitConcurrent",
                value: function (e, t) {
                  return new Promise(function (r) {
                    var n = [],
                      o = 0;
                    function i() {
                      if (o >= e.length) return r(n);
                      var t = o,
                        a = e[o];
                      o++,
                        a
                          .then(function (e) {
                            n[t] = { success: !0, data: e };
                          })
                          .catch(function (e) {
                            n[t] = { success: !1, error: e.message };
                          })
                          .finally(function () {
                            setTimeout(i, 0);
                          });
                    }
                    for (var a = 0; a < Math.min(t, e.length); a++) i();
                  });
                },
              },
              {
                key: "uploadWechatAvatar",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t) {
                      var r,
                        n,
                        o,
                        i,
                        u,
                        c,
                        l = arguments;
                      return (0, a.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r =
                                    l.length > 1 && void 0 !== l[1]
                                      ? l[1]
                                      : {}),
                                  t && t.avatarUrl)
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw this.handleError(
                                  new Error("无效的微信头像对象"),
                                  "uploadWechatAvatar",
                                );
                              case 3:
                                return (
                                  (n = (0, s.default)(
                                    (0, s.default)({}, this.options),
                                    r,
                                  )),
                                  (e.prev = 4),
                                  (o = t.avatarUrl),
                                  (e.next = 8),
                                  this.getUploadToken(n.tokenUrl)
                                );
                              case 8:
                                return (
                                  (i = e.sent),
                                  (u = this.getFileExt(o)),
                                  (c = ""
                                    .concat(n.prefix, "/avatar_")
                                    .concat(Date.now())
                                    .concat(u)),
                                  e.abrupt(
                                    "return",
                                    this.uploadInWeapp(o, c, i, n),
                                  )
                                );
                              case 14:
                                throw (
                                  ((e.prev = 14),
                                  (e.t0 = e["catch"](4)),
                                  this.handleError(e.t0, "uploadWechatAvatar"))
                                );
                              case 17:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[4, 14]],
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "uploadDirect",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t) {
                      var r,
                        n,
                        o,
                        i,
                        u = arguments;
                      return (0, a.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r =
                                    u.length > 1 && void 0 !== u[1]
                                      ? u[1]
                                      : {}),
                                  (e.prev = 1),
                                  (n = (0, s.default)(
                                    (0, s.default)({}, this.options),
                                    r,
                                  )),
                                  (o = "string" === typeof t ? { path: t } : t),
                                  (e.next = 6),
                                  this.uploadFile(o, n)
                                );
                              case 6:
                                return (
                                  (i = e.sent),
                                  e.abrupt("return", { success: !0, data: i })
                                );
                              case 10:
                                return (
                                  (e.prev = 10),
                                  (e.t0 = e["catch"](1)),
                                  e.abrupt("return", {
                                    success: !1,
                                    error: e.t0.message || "上传失败",
                                  })
                                );
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[1, 10]],
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "uploadBatch",
                value: (function () {
                  var e = (0, u.default)(
                    (0, a.default)().mark(function e(t) {
                      var r,
                        n,
                        o,
                        i = this,
                        u = arguments;
                      return (0, a.default)().wrap(
                        function (e) {
                          while (1)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((r =
                                    u.length > 1 && void 0 !== u[1]
                                      ? u[1]
                                      : {}),
                                  Array.isArray(t))
                                ) {
                                  e.next = 3;
                                  break;
                                }
                                throw new Error("files 参数必须是数组");
                              case 3:
                                return (
                                  (n = (0, s.default)(
                                    (0, s.default)({}, this.options),
                                    r,
                                  )),
                                  (o = t.map(function (e) {
                                    return i.uploadDirect(e, n);
                                  })),
                                  e.abrupt(
                                    "return",
                                    this.limitConcurrent(o, n.parallel),
                                  )
                                );
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                      );
                    }),
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        p = h;
      t.default = p;
    },
    2719: function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.reportV3 = function e(t, r, o) {
          void 0 === o && (o = 3);
          var i = (0, n.createXHR)();
          i.open("POST", "https://uplog.qbox.me/log/3"),
            i.setRequestHeader(
              "Content-type",
              "application/x-www-form-urlencoded",
            ),
            i.setRequestHeader(
              "Authorization",
              (0, n.getAuthHeaders)(t).Authorization,
            ),
            (i.onreadystatechange = function () {
              4 === i.readyState && 200 !== i.status && o > 0 && e(t, r, o - 1);
            });
          var a = [
            r.code || "",
            r.reqId || "",
            r.host || "",
            r.remoteIp || "",
            r.port || "",
            r.duration || "",
            r.time || "",
            r.bytesSent || "",
            r.upType || "",
            r.size || "",
          ].join(",");
          i.send(a);
        });
      var n = r("f243");
    },
    4085: function (e, t, r) {
      "use strict";
      var n = r("8bdb"),
        o = r("85c1");
      n({ global: !0, forced: o.globalThis !== o }, { globalThis: o });
    },
    "44e9": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CRC32 = void 0),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("4db2"),
        r("c976"),
        r("4d8f"),
        r("7b97"),
        r("668a"),
        r("c5b7"),
        r("8ff5"),
        r("2378"),
        r("641a"),
        r("64e0"),
        r("cce3"),
        r("efba"),
        r("d009"),
        r("bd7d"),
        r("7edd"),
        r("d798"),
        r("f547"),
        r("5e54"),
        r("b60a"),
        r("8c18"),
        r("12973"),
        r("f991"),
        r("198e"),
        r("8557"),
        r("63b1"),
        r("1954"),
        r("1cf1"),
        r("f7a5");
      var n = r("2343"),
        o = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        i = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        a = (function () {
          function e() {
            (this.crc = -1), (this.table = this.makeTable());
          }
          return (
            (e.prototype.makeTable = function () {
              for (var e = new Array(), t = 0; t < 256; t++) {
                for (var r = t, n = 0; n < 8; n++)
                  1 & r ? (r = (r >>> 1) ^ 3988292384) : (r >>>= 1);
                e[t] = r;
              }
              return e;
            }),
            (e.prototype.append = function (e) {
              for (var t = this.crc, r = 0; r < e.byteLength; r++)
                t = (t >>> 8) ^ this.table[255 & (t ^ e[r])];
              this.crc = t;
            }),
            (e.prototype.compute = function () {
              return (-1 ^ this.crc) >>> 0;
            }),
            (e.prototype.readAsUint8Array = function (e) {
              return o(this, void 0, void 0, function () {
                var t;
                return i(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return "function" !== typeof e.arrayBuffer
                        ? [3, 2]
                        : ((t = Uint8Array.bind), [4, e.arrayBuffer()]);
                    case 1:
                      return [
                        2,
                        new (t.apply(Uint8Array, [void 0, r.sent()]))(),
                      ];
                    case 2:
                      return [
                        2,
                        new Promise(function (t, r) {
                          var n = new FileReader();
                          (n.onload = function () {
                            null != n.result && "string" !== typeof n.result
                              ? t(new Uint8Array(n.result))
                              : r();
                          }),
                            n.readAsArrayBuffer(e);
                        }),
                      ];
                  }
                });
              });
            }),
            (e.prototype.file = function (e) {
              return o(this, void 0, void 0, function () {
                var t, r, o, a, u, s;
                return i(this, function (i) {
                  switch (i.label) {
                    case 0:
                      return e.size <= n.MB
                        ? ((t = this.append), [4, this.readAsUint8Array(e)])
                        : [3, 2];
                    case 1:
                      return t.apply(this, [i.sent()]), [2, this.compute()];
                    case 2:
                      (r = Math.ceil(e.size / n.MB)), (o = 0), (i.label = 3);
                    case 3:
                      return o < r
                        ? ((a = o * n.MB),
                          (u = o === r - 1 ? e.size : a + n.MB),
                          [4, this.readAsUint8Array(e.slice(a, u))])
                        : [3, 6];
                    case 4:
                      (s = i.sent()),
                        this.append(new Uint8Array(s)),
                        (i.label = 5);
                    case 5:
                      return o++, [3, 3];
                    case 6:
                      return [2, this.compute()];
                  }
                });
              });
            }),
            (e.file = function (t) {
              var r = new e();
              return r.file(t);
            }),
            e
          );
        })();
      t.CRC32 = a;
    },
    "45a4": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.HostPool = t.Host = void 0),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("c223"),
        r("c1a3"),
        r("fd3c"),
        r("8f71"),
        r("4100"),
        r("f7a5");
      var n = r("fa9f"),
        o = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        i = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        a = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            i = r.call(e),
            a = [];
          try {
            while ((void 0 === t || t-- > 0) && !(n = i.next()).done)
              a.push(n.value);
          } catch (u) {
            o = { error: u };
          } finally {
            try {
              n && !n.done && (r = i["return"]) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        u = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(a(arguments[t]));
          return e;
        },
        s = new Map(),
        c = (function () {
          function e(e, t) {
            (this.host = e), (this.protocol = t);
          }
          return (
            (e.prototype.isFrozen = function () {
              var e = new Date().getTime(),
                t = s.get(this.host);
              return null != t && t >= e;
            }),
            (e.prototype.freeze = function (e) {
              void 0 === e && (e = 20);
              var t = new Date().getTime() + 1e3 * e;
              s.set(this.host, t);
            }),
            (e.prototype.unfreeze = function () {
              s["delete"](this.host);
            }),
            (e.prototype.getUrl = function () {
              return this.protocol + "://" + this.host;
            }),
            (e.prototype.getUnfreezeTime = function () {
              return s.get(this.host);
            }),
            e
          );
        })();
      t.Host = c;
      var l = (function () {
        function e(e) {
          void 0 === e && (e = []),
            (this.initHosts = e),
            (this.cachedHostsMap = new Map());
        }
        return (
          (e.prototype.register = function (e, t, r, n) {
            this.cachedHostsMap.set(
              e + "@" + t,
              r.map(function (e) {
                return new c(e, n);
              }),
            );
          }),
          (e.prototype.refresh = function (e, t, r) {
            var a, s, c, l;
            return o(this, void 0, void 0, function () {
              var o, f, h;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return (
                      (o = this.cachedHostsMap.get(e + "@" + t) || []),
                      o.length > 0
                        ? [2]
                        : this.initHosts.length > 0
                          ? (this.register(e, t, this.initHosts, r), [2])
                          : [4, (0, n.getUpHosts)(e, t, r)]
                    );
                  case 1:
                    return (
                      (f = i.sent()),
                      null != (null === f || void 0 === f ? void 0 : f.data) &&
                        ((h = u(
                          (null ===
                            (s =
                              null === (a = f.data.up) || void 0 === a
                                ? void 0
                                : a.acc) || void 0 === s
                            ? void 0
                            : s.main) || [],
                          (null ===
                            (l =
                              null === (c = f.data.up) || void 0 === c
                                ? void 0
                                : c.acc) || void 0 === l
                            ? void 0
                            : l.backup) || [],
                        )),
                        this.register(e, t, h, r)),
                      [2]
                    );
                }
              });
            });
          }),
          (e.prototype.getUp = function (e, t, r) {
            return o(this, void 0, void 0, function () {
              var n, o, a;
              return i(this, function (i) {
                switch (i.label) {
                  case 0:
                    return [4, this.refresh(e, t, r)];
                  case 1:
                    return (
                      i.sent(),
                      (n = this.cachedHostsMap.get(e + "@" + t) || []),
                      0 === n.length
                        ? [2, null]
                        : ((o = n.filter(function (e) {
                            return !e.isFrozen();
                          })),
                          o.length > 0
                            ? [2, o[0]]
                            : ((a = n.slice().sort(function (e, t) {
                                return (
                                  (e.getUnfreezeTime() || 0) -
                                  (t.getUnfreezeTime() || 0)
                                );
                              })),
                              [2, a[0]]))
                    );
                }
              });
            });
          }),
          e
        );
      })();
      t.HostPool = l;
    },
    "4a32": function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.QiniuRequestError =
          t.QiniuNetworkError =
          t.QiniuErrorName =
          t.QiniuError =
            void 0),
        r("8a8d"),
        r("7a76"),
        r("c9b5");
      var n,
        o = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })();
      (t.QiniuErrorName = n),
        (function (e) {
          (e["InvalidFile"] = "InvalidFile"),
            (e["InvalidToken"] = "InvalidToken"),
            (e["InvalidMetadata"] = "InvalidMetadata"),
            (e["InvalidChunkSize"] = "InvalidChunkSize"),
            (e["InvalidCustomVars"] = "InvalidCustomVars"),
            (e["NotAvailableUploadHost"] = "NotAvailableUploadHost"),
            (e["ReadCacheFailed"] = "ReadCacheFailed"),
            (e["InvalidCacheData"] = "InvalidCacheData"),
            (e["WriteCacheFailed"] = "WriteCacheFailed"),
            (e["RemoveCacheFailed"] = "RemoveCacheFailed"),
            (e["GetCanvasContextFailed"] = "GetCanvasContextFailed"),
            (e["UnsupportedFileType"] = "UnsupportedFileType"),
            (e["FileReaderReadFailed"] = "FileReaderReadFailed"),
            (e["NotAvailableXMLHttpRequest"] = "NotAvailableXMLHttpRequest"),
            (e["InvalidProgressEventTarget"] = "InvalidProgressEventTarget"),
            (e["RequestError"] = "RequestError");
        })(n || (t.QiniuErrorName = n = {}));
      var i = (function () {
        return function (e, t) {
          (this.name = e), (this.message = t), (this.stack = new Error().stack);
        };
      })();
      t.QiniuError = i;
      var a = (function (e) {
        function t(t, r, o, i) {
          var a = e.call(this, n.RequestError, o) || this;
          return (
            (a.code = t),
            (a.reqId = r),
            (a.isRequestError = !0),
            (a.data = i),
            a
          );
        }
        return o(t, e), t;
      })(i);
      t.QiniuRequestError = a;
      var u = (function (e) {
        function t(t, r) {
          return void 0 === r && (r = ""), e.call(this, 0, r, t) || this;
        }
        return o(t, e), t;
      })(a);
      t.QiniuNetworkError = u;
    },
    "4fea": function (e, t, r) {
      "use strict";
      var n;
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.regionUphostMap = t.region = void 0);
      var o = {
        z0: "z0",
        z1: "z1",
        z2: "z2",
        na0: "na0",
        as0: "as0",
        cnEast2: "cn-east-2",
      };
      t.region = o;
      var i =
        ((n = {}),
        (n[o.z0] = {
          srcUphost: ["up.qiniup.com"],
          cdnUphost: ["upload.qiniup.com"],
        }),
        (n[o.z1] = {
          srcUphost: ["up-z1.qiniup.com"],
          cdnUphost: ["upload-z1.qiniup.com"],
        }),
        (n[o.z2] = {
          srcUphost: ["up-z2.qiniup.com"],
          cdnUphost: ["upload-z2.qiniup.com"],
        }),
        (n[o.na0] = {
          srcUphost: ["up-na0.qiniup.com"],
          cdnUphost: ["upload-na0.qiniup.com"],
        }),
        (n[o.as0] = {
          srcUphost: ["up-as0.qiniup.com"],
          cdnUphost: ["upload-as0.qiniup.com"],
        }),
        (n[o.cnEast2] = {
          srcUphost: ["up-cn-east-2.qiniup.com"],
          cdnUphost: ["upload-cn-east-2.qiniup.com"],
        }),
        n);
      t.regionUphostMap = i;
    },
    "6deb": function (e, t, r) {
      "use strict";
      r("6a54"), r("bf0f"), r("2797"), r("dc8a");
      var n = r("f5bd").default,
        o = r("3639").default;
      Object.defineProperty(t, "__esModule", { value: !0 });
      var i = { createUploadManager: !0 };
      (t.createUploadManager = h),
        (t.default = function (e, t, r, n, o) {
          var i = new s.default(
              r,
              null === o || void 0 === o ? void 0 : o.disableStatisticsReport,
              null === o || void 0 === o ? void 0 : o.debugLogLevel,
              e.name,
            ),
            a = {
              file: e,
              key: t,
              token: r,
              putExtra: n,
              config: (0, c.normalizeUploadConfig)(o, i),
            },
            u = new l.HostPool(a.config.uphost);
          return new c.Observable(function (e) {
            var t = h(
              a,
              {
                onData: function (t) {
                  return e.next(t);
                },
                onError: function (t) {
                  return e.error(t);
                },
                onComplete: function (t) {
                  return e.complete(t);
                },
              },
              u,
              i,
            );
            return t.putFile(), t.stop.bind(t);
          });
        });
      var a = o(r("f004"));
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(i, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var u = n(r("e859")),
        s = n(r("22a4")),
        c = r("f243"),
        l = r("45a4"),
        f = r("71aa");
      function h(e, t, r, n) {
        return e.config && e.config.forceDirect
          ? (n.info("ues forceDirect mode."), new u.default(e, t, r, n))
          : e.file.size > 4 * c.MB
            ? (n.info("file size over 4M, use Resume."),
              new a.default(e, t, r, n))
            : (n.info("file size less or equal than 4M, use Direct."),
              new u.default(e, t, r, n));
      }
      Object.keys(f).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(i, e) ||
            (e in t && t[e] === f[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return f[e];
              },
            }));
      });
    },
    "71aa": function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("3639").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default =
          t.RETRY_CODE_LIST =
          t.FREEZE_CODE_LIST =
          t.DEFAULT_CHUNK_SIZE =
            void 0),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("c223"),
        r("4626"),
        r("5ac7"),
        r("2797");
      var o = r("4a32"),
        i = n(r("f243")),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        u = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        s = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        c = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            i = r.call(e),
            a = [];
          try {
            while ((void 0 === t || t-- > 0) && !(n = i.next()).done)
              a.push(n.value);
          } catch (u) {
            o = { error: u };
          } finally {
            try {
              n && !n.done && (r = i["return"]) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        l = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(c(arguments[t]));
          return e;
        };
      t.DEFAULT_CHUNK_SIZE = 4;
      var f = [0, 502, 503, 504, 599];
      t.FREEZE_CODE_LIST = f;
      var h = l(f, [406]);
      t.RETRY_CODE_LIST = h;
      var p = Math.pow(1024, 3),
        d = (function () {
          function e(e, t, r, n) {
            (this.hostPool = r),
              (this.logger = n),
              (this.aborted = !1),
              (this.retryCount = 0),
              (this.xhrList = []),
              (this.config = e.config),
              n.info("config inited.", this.config),
              (this.putExtra = a({ fname: "" }, e.putExtra)),
              n.info("putExtra inited.", this.putExtra),
              (this.key = e.key),
              (this.file = e.file),
              (this.token = e.token),
              (this.onData = t.onData),
              (this.onError = t.onError),
              (this.onComplete = t.onComplete);
            try {
              var o = i.getPutPolicy(this.token);
              (this.bucketName = o.bucketName), (this.assessKey = o.assessKey);
            } catch (u) {
              n.error("get putPolicy from token failed.", u), this.onError(u);
            }
          }
          return (
            (e.prototype.checkAndUpdateUploadHost = function () {
              return u(this, void 0, void 0, function () {
                var e;
                return s(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return (
                        this.logger.info("get available upload host."),
                        [
                          4,
                          this.hostPool.getUp(
                            this.assessKey,
                            this.bucketName,
                            this.config.upprotocol,
                          ),
                        ]
                      );
                    case 1:
                      if (((e = t.sent()), null == e))
                        throw new o.QiniuError(
                          o.QiniuErrorName.NotAvailableUploadHost,
                          "no available upload host.",
                        );
                      return (
                        null != this.uploadHost &&
                        this.uploadHost.host !== e.host
                          ? this.logger.warn(
                              "host switches from " +
                                this.uploadHost.host +
                                " to " +
                                e.host +
                                ".",
                            )
                          : this.logger.info("use host " + e.host + "."),
                        (this.uploadHost = e),
                        [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.checkAndUnfreezeHost = function () {
              this.logger.info("check unfreeze host."),
                null != this.uploadHost &&
                  this.uploadHost.isFrozen() &&
                  (this.logger.warn(
                    this.uploadHost.host + " will be unfrozen.",
                  ),
                  this.uploadHost.unfreeze());
            }),
            (e.prototype.checkAndFreezeHost = function (e) {
              this.logger.info("check freeze host."),
                e instanceof o.QiniuRequestError &&
                  null != this.uploadHost &&
                  f.includes(e.code) &&
                  (this.logger.warn(
                    this.uploadHost.host + " will be temporarily frozen.",
                  ),
                  this.uploadHost.freeze());
            }),
            (e.prototype.handleError = function (e) {
              this.logger.error(e.message), this.onError(e);
            }),
            (e.prototype.putFile = function () {
              return u(this, void 0, void 0, function () {
                var e, t, r, n;
                return s(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (
                        ((this.aborted = !1),
                        this.putExtra.fname ||
                          (this.logger.info("use file.name as fname."),
                          (this.putExtra.fname = this.file.name)),
                        this.file.size > 1e4 * p)
                      )
                        return (
                          this.handleError(
                            new o.QiniuError(
                              o.QiniuErrorName.InvalidFile,
                              "file size exceed maximum value 10000G",
                            ),
                          ),
                          [2]
                        );
                      if (
                        this.putExtra.customVars &&
                        !i.isCustomVarsValid(this.putExtra.customVars)
                      )
                        return (
                          this.handleError(
                            new o.QiniuError(
                              o.QiniuErrorName.InvalidCustomVars,
                              "customVars key should start width x:",
                            ),
                          ),
                          [2]
                        );
                      if (
                        this.putExtra.metadata &&
                        !i.isMetaDataValid(this.putExtra.metadata)
                      )
                        return (
                          this.handleError(
                            new o.QiniuError(
                              o.QiniuErrorName.InvalidMetadata,
                              "metadata key should start with x-qn-meta-",
                            ),
                          ),
                          [2]
                        );
                      a.label = 1;
                    case 1:
                      return (
                        a.trys.push([1, 4, , 5]),
                        (this.uploadAt = new Date().getTime()),
                        [4, this.checkAndUpdateUploadHost()]
                      );
                    case 2:
                      return a.sent(), [4, this.run()];
                    case 3:
                      return (
                        (e = a.sent()),
                        this.onComplete(e.data),
                        this.checkAndUnfreezeHost(),
                        this.sendLog(e.reqId, 200),
                        [2]
                      );
                    case 4:
                      return (
                        (t = a.sent()),
                        this.aborted
                          ? (this.logger.warn("upload is aborted."),
                            this.sendLog("", -2),
                            [2])
                          : (this.clear(),
                            this.logger.error(t),
                            t instanceof o.QiniuRequestError &&
                            (this.sendLog(t.reqId, t.code),
                            this.checkAndFreezeHost(t),
                            (r = ++this.retryCount <= this.config.retryCount),
                            (n = h.includes(t.code)),
                            n && r)
                              ? (this.logger.warn(
                                  "error auto retry: " +
                                    this.retryCount +
                                    "/" +
                                    this.config.retryCount +
                                    ".",
                                ),
                                this.putFile(),
                                [2])
                              : (this.onError(t), [3, 5]))
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.clear = function () {
              this.xhrList.forEach(function (e) {
                (e.onreadystatechange = null), e.abort();
              }),
                (this.xhrList = []),
                this.logger.info("cleanup uploading xhr.");
            }),
            (e.prototype.stop = function () {
              this.logger.info("aborted."), this.clear(), (this.aborted = !0);
            }),
            (e.prototype.addXhr = function (e) {
              this.xhrList.push(e);
            }),
            (e.prototype.sendLog = function (e, t) {
              var r, n;
              this.logger.report({
                code: t,
                reqId: e,
                remoteIp: "",
                upType: "jssdk-h5",
                size: this.file.size,
                time: Math.floor(this.uploadAt / 1e3),
                port: i.getPortFromUrl(
                  null === (r = this.uploadHost) || void 0 === r
                    ? void 0
                    : r.getUrl(),
                ),
                host: i.getDomainFromUrl(
                  null === (n = this.uploadHost) || void 0 === n
                    ? void 0
                    : n.getUrl(),
                ),
                bytesSent: this.progress ? this.progress.total.loaded : 0,
                duration: Math.floor(
                  (new Date().getTime() - this.uploadAt) / 1e3,
                ),
              });
            }),
            (e.prototype.getProgressInfoItem = function (e, t, r) {
              return a(
                { size: t, loaded: e, percent: (e / t) * 100 },
                null == r ? {} : { fromCache: r },
              );
            }),
            e
          );
        })(),
        b = d;
      t.default = b;
    },
    "8f6e": function (e, t, r) {
      var n,
        o,
        i = r("bdbb").default;
      r("5c47"),
        r("2c10"),
        r("c9b5"),
        r("bf0f"),
        r("ab80"),
        r("e966"),
        r("4db2"),
        r("c976"),
        r("4d8f"),
        r("7b97"),
        r("668a"),
        r("c5b7"),
        r("8ff5"),
        r("2378"),
        r("641a"),
        r("64e0"),
        r("cce3"),
        r("efba"),
        r("d009"),
        r("bd7d"),
        r("7edd"),
        r("d798"),
        r("f547"),
        r("5e54"),
        r("b60a"),
        r("8c18"),
        r("12973"),
        r("f991"),
        r("198e"),
        r("8557"),
        r("63b1"),
        r("1954"),
        r("1cf1"),
        r("80e3"),
        r("0506"),
        r("aa9c"),
        r("f7a5"),
        (function (a) {
          "object" === i(t)
            ? (e.exports = a())
            : ((n = a),
              (o = "function" === typeof n ? n.call(t, r, t, e) : n),
              void 0 === o || (e.exports = o));
        })(function (e) {
          "use strict";
          var t = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
          ];
          function r(e, t) {
            var r = e[0],
              n = e[1],
              o = e[2],
              i = e[3];
            (r += (((n & o) | (~n & i)) + t[0] - 680876936) | 0),
              (r = (((r << 7) | (r >>> 25)) + n) | 0),
              (i += (((r & n) | (~r & o)) + t[1] - 389564586) | 0),
              (i = (((i << 12) | (i >>> 20)) + r) | 0),
              (o += (((i & r) | (~i & n)) + t[2] + 606105819) | 0),
              (o = (((o << 17) | (o >>> 15)) + i) | 0),
              (n += (((o & i) | (~o & r)) + t[3] - 1044525330) | 0),
              (n = (((n << 22) | (n >>> 10)) + o) | 0),
              (r += (((n & o) | (~n & i)) + t[4] - 176418897) | 0),
              (r = (((r << 7) | (r >>> 25)) + n) | 0),
              (i += (((r & n) | (~r & o)) + t[5] + 1200080426) | 0),
              (i = (((i << 12) | (i >>> 20)) + r) | 0),
              (o += (((i & r) | (~i & n)) + t[6] - 1473231341) | 0),
              (o = (((o << 17) | (o >>> 15)) + i) | 0),
              (n += (((o & i) | (~o & r)) + t[7] - 45705983) | 0),
              (n = (((n << 22) | (n >>> 10)) + o) | 0),
              (r += (((n & o) | (~n & i)) + t[8] + 1770035416) | 0),
              (r = (((r << 7) | (r >>> 25)) + n) | 0),
              (i += (((r & n) | (~r & o)) + t[9] - 1958414417) | 0),
              (i = (((i << 12) | (i >>> 20)) + r) | 0),
              (o += (((i & r) | (~i & n)) + t[10] - 42063) | 0),
              (o = (((o << 17) | (o >>> 15)) + i) | 0),
              (n += (((o & i) | (~o & r)) + t[11] - 1990404162) | 0),
              (n = (((n << 22) | (n >>> 10)) + o) | 0),
              (r += (((n & o) | (~n & i)) + t[12] + 1804603682) | 0),
              (r = (((r << 7) | (r >>> 25)) + n) | 0),
              (i += (((r & n) | (~r & o)) + t[13] - 40341101) | 0),
              (i = (((i << 12) | (i >>> 20)) + r) | 0),
              (o += (((i & r) | (~i & n)) + t[14] - 1502002290) | 0),
              (o = (((o << 17) | (o >>> 15)) + i) | 0),
              (n += (((o & i) | (~o & r)) + t[15] + 1236535329) | 0),
              (n = (((n << 22) | (n >>> 10)) + o) | 0),
              (r += (((n & i) | (o & ~i)) + t[1] - 165796510) | 0),
              (r = (((r << 5) | (r >>> 27)) + n) | 0),
              (i += (((r & o) | (n & ~o)) + t[6] - 1069501632) | 0),
              (i = (((i << 9) | (i >>> 23)) + r) | 0),
              (o += (((i & n) | (r & ~n)) + t[11] + 643717713) | 0),
              (o = (((o << 14) | (o >>> 18)) + i) | 0),
              (n += (((o & r) | (i & ~r)) + t[0] - 373897302) | 0),
              (n = (((n << 20) | (n >>> 12)) + o) | 0),
              (r += (((n & i) | (o & ~i)) + t[5] - 701558691) | 0),
              (r = (((r << 5) | (r >>> 27)) + n) | 0),
              (i += (((r & o) | (n & ~o)) + t[10] + 38016083) | 0),
              (i = (((i << 9) | (i >>> 23)) + r) | 0),
              (o += (((i & n) | (r & ~n)) + t[15] - 660478335) | 0),
              (o = (((o << 14) | (o >>> 18)) + i) | 0),
              (n += (((o & r) | (i & ~r)) + t[4] - 405537848) | 0),
              (n = (((n << 20) | (n >>> 12)) + o) | 0),
              (r += (((n & i) | (o & ~i)) + t[9] + 568446438) | 0),
              (r = (((r << 5) | (r >>> 27)) + n) | 0),
              (i += (((r & o) | (n & ~o)) + t[14] - 1019803690) | 0),
              (i = (((i << 9) | (i >>> 23)) + r) | 0),
              (o += (((i & n) | (r & ~n)) + t[3] - 187363961) | 0),
              (o = (((o << 14) | (o >>> 18)) + i) | 0),
              (n += (((o & r) | (i & ~r)) + t[8] + 1163531501) | 0),
              (n = (((n << 20) | (n >>> 12)) + o) | 0),
              (r += (((n & i) | (o & ~i)) + t[13] - 1444681467) | 0),
              (r = (((r << 5) | (r >>> 27)) + n) | 0),
              (i += (((r & o) | (n & ~o)) + t[2] - 51403784) | 0),
              (i = (((i << 9) | (i >>> 23)) + r) | 0),
              (o += (((i & n) | (r & ~n)) + t[7] + 1735328473) | 0),
              (o = (((o << 14) | (o >>> 18)) + i) | 0),
              (n += (((o & r) | (i & ~r)) + t[12] - 1926607734) | 0),
              (n = (((n << 20) | (n >>> 12)) + o) | 0),
              (r += ((n ^ o ^ i) + t[5] - 378558) | 0),
              (r = (((r << 4) | (r >>> 28)) + n) | 0),
              (i += ((r ^ n ^ o) + t[8] - 2022574463) | 0),
              (i = (((i << 11) | (i >>> 21)) + r) | 0),
              (o += ((i ^ r ^ n) + t[11] + 1839030562) | 0),
              (o = (((o << 16) | (o >>> 16)) + i) | 0),
              (n += ((o ^ i ^ r) + t[14] - 35309556) | 0),
              (n = (((n << 23) | (n >>> 9)) + o) | 0),
              (r += ((n ^ o ^ i) + t[1] - 1530992060) | 0),
              (r = (((r << 4) | (r >>> 28)) + n) | 0),
              (i += ((r ^ n ^ o) + t[4] + 1272893353) | 0),
              (i = (((i << 11) | (i >>> 21)) + r) | 0),
              (o += ((i ^ r ^ n) + t[7] - 155497632) | 0),
              (o = (((o << 16) | (o >>> 16)) + i) | 0),
              (n += ((o ^ i ^ r) + t[10] - 1094730640) | 0),
              (n = (((n << 23) | (n >>> 9)) + o) | 0),
              (r += ((n ^ o ^ i) + t[13] + 681279174) | 0),
              (r = (((r << 4) | (r >>> 28)) + n) | 0),
              (i += ((r ^ n ^ o) + t[0] - 358537222) | 0),
              (i = (((i << 11) | (i >>> 21)) + r) | 0),
              (o += ((i ^ r ^ n) + t[3] - 722521979) | 0),
              (o = (((o << 16) | (o >>> 16)) + i) | 0),
              (n += ((o ^ i ^ r) + t[6] + 76029189) | 0),
              (n = (((n << 23) | (n >>> 9)) + o) | 0),
              (r += ((n ^ o ^ i) + t[9] - 640364487) | 0),
              (r = (((r << 4) | (r >>> 28)) + n) | 0),
              (i += ((r ^ n ^ o) + t[12] - 421815835) | 0),
              (i = (((i << 11) | (i >>> 21)) + r) | 0),
              (o += ((i ^ r ^ n) + t[15] + 530742520) | 0),
              (o = (((o << 16) | (o >>> 16)) + i) | 0),
              (n += ((o ^ i ^ r) + t[2] - 995338651) | 0),
              (n = (((n << 23) | (n >>> 9)) + o) | 0),
              (r += ((o ^ (n | ~i)) + t[0] - 198630844) | 0),
              (r = (((r << 6) | (r >>> 26)) + n) | 0),
              (i += ((n ^ (r | ~o)) + t[7] + 1126891415) | 0),
              (i = (((i << 10) | (i >>> 22)) + r) | 0),
              (o += ((r ^ (i | ~n)) + t[14] - 1416354905) | 0),
              (o = (((o << 15) | (o >>> 17)) + i) | 0),
              (n += ((i ^ (o | ~r)) + t[5] - 57434055) | 0),
              (n = (((n << 21) | (n >>> 11)) + o) | 0),
              (r += ((o ^ (n | ~i)) + t[12] + 1700485571) | 0),
              (r = (((r << 6) | (r >>> 26)) + n) | 0),
              (i += ((n ^ (r | ~o)) + t[3] - 1894986606) | 0),
              (i = (((i << 10) | (i >>> 22)) + r) | 0),
              (o += ((r ^ (i | ~n)) + t[10] - 1051523) | 0),
              (o = (((o << 15) | (o >>> 17)) + i) | 0),
              (n += ((i ^ (o | ~r)) + t[1] - 2054922799) | 0),
              (n = (((n << 21) | (n >>> 11)) + o) | 0),
              (r += ((o ^ (n | ~i)) + t[8] + 1873313359) | 0),
              (r = (((r << 6) | (r >>> 26)) + n) | 0),
              (i += ((n ^ (r | ~o)) + t[15] - 30611744) | 0),
              (i = (((i << 10) | (i >>> 22)) + r) | 0),
              (o += ((r ^ (i | ~n)) + t[6] - 1560198380) | 0),
              (o = (((o << 15) | (o >>> 17)) + i) | 0),
              (n += ((i ^ (o | ~r)) + t[13] + 1309151649) | 0),
              (n = (((n << 21) | (n >>> 11)) + o) | 0),
              (r += ((o ^ (n | ~i)) + t[4] - 145523070) | 0),
              (r = (((r << 6) | (r >>> 26)) + n) | 0),
              (i += ((n ^ (r | ~o)) + t[11] - 1120210379) | 0),
              (i = (((i << 10) | (i >>> 22)) + r) | 0),
              (o += ((r ^ (i | ~n)) + t[2] + 718787259) | 0),
              (o = (((o << 15) | (o >>> 17)) + i) | 0),
              (n += ((i ^ (o | ~r)) + t[9] - 343485551) | 0),
              (n = (((n << 21) | (n >>> 11)) + o) | 0),
              (e[0] = (r + e[0]) | 0),
              (e[1] = (n + e[1]) | 0),
              (e[2] = (o + e[2]) | 0),
              (e[3] = (i + e[3]) | 0);
          }
          function n(e) {
            var t,
              r = [];
            for (t = 0; t < 64; t += 4)
              r[t >> 2] =
                e.charCodeAt(t) +
                (e.charCodeAt(t + 1) << 8) +
                (e.charCodeAt(t + 2) << 16) +
                (e.charCodeAt(t + 3) << 24);
            return r;
          }
          function o(e) {
            var t,
              r = [];
            for (t = 0; t < 64; t += 4)
              r[t >> 2] =
                e[t] + (e[t + 1] << 8) + (e[t + 2] << 16) + (e[t + 3] << 24);
            return r;
          }
          function i(e) {
            var t,
              o,
              i,
              a,
              u,
              s,
              c = e.length,
              l = [1732584193, -271733879, -1732584194, 271733878];
            for (t = 64; t <= c; t += 64) r(l, n(e.substring(t - 64, t)));
            for (
              e = e.substring(t - 64),
                o = e.length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                t = 0;
              t < o;
              t += 1
            )
              i[t >> 2] |= e.charCodeAt(t) << (t % 4 << 3);
            if (((i[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
              for (r(l, i), t = 0; t < 16; t += 1) i[t] = 0;
            return (
              (a = 8 * c),
              (a = a.toString(16).match(/(.*?)(.{0,8})$/)),
              (u = parseInt(a[2], 16)),
              (s = parseInt(a[1], 16) || 0),
              (i[14] = u),
              (i[15] = s),
              r(l, i),
              l
            );
          }
          function a(e) {
            var r,
              n = "";
            for (r = 0; r < 4; r += 1)
              n += t[(e >> (8 * r + 4)) & 15] + t[(e >> (8 * r)) & 15];
            return n;
          }
          function u(e) {
            var t;
            for (t = 0; t < e.length; t += 1) e[t] = a(e[t]);
            return e.join("");
          }
          function s(e) {
            return (
              /[\u0080-\uFFFF]/.test(e) &&
                (e = unescape(encodeURIComponent(e))),
              e
            );
          }
          function c(e) {
            var t,
              r = [],
              n = e.length;
            for (t = 0; t < n - 1; t += 2) r.push(parseInt(e.substr(t, 2), 16));
            return String.fromCharCode.apply(String, r);
          }
          function l() {
            this.reset();
          }
          return (
            "5d41402abc4b2a76b9719d911017c592" !== u(i("hello")) &&
              function (e, t) {
                var r = (65535 & e) + (65535 & t),
                  n = (e >> 16) + (t >> 16) + (r >> 16);
                return (n << 16) | (65535 & r);
              },
            "undefined" === typeof ArrayBuffer ||
              ArrayBuffer.prototype.slice ||
              (function () {
                function t(e, t) {
                  return (
                    (e = 0 | e || 0),
                    e < 0 ? Math.max(e + t, 0) : Math.min(e, t)
                  );
                }
                ArrayBuffer.prototype.slice = function (r, n) {
                  var o,
                    i,
                    a,
                    u,
                    s = this.byteLength,
                    c = t(r, s),
                    l = s;
                  return (
                    n !== e && (l = t(n, s)),
                    c > l
                      ? new ArrayBuffer(0)
                      : ((o = l - c),
                        (i = new ArrayBuffer(o)),
                        (a = new Uint8Array(i)),
                        (u = new Uint8Array(this, c, o)),
                        a.set(u),
                        i)
                  );
                };
              })(),
            (l.prototype.append = function (e) {
              return this.appendBinary(s(e)), this;
            }),
            (l.prototype.appendBinary = function (e) {
              (this._buff += e), (this._length += e.length);
              var t,
                o = this._buff.length;
              for (t = 64; t <= o; t += 64)
                r(this._hash, n(this._buff.substring(t - 64, t)));
              return (this._buff = this._buff.substring(t - 64)), this;
            }),
            (l.prototype.end = function (e) {
              var t,
                r,
                n = this._buff,
                o = n.length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (t = 0; t < o; t += 1)
                i[t >> 2] |= n.charCodeAt(t) << (t % 4 << 3);
              return (
                this._finish(i, o),
                (r = u(this._hash)),
                e && (r = c(r)),
                this.reset(),
                r
              );
            }),
            (l.prototype.reset = function () {
              return (
                (this._buff = ""),
                (this._length = 0),
                (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
                this
              );
            }),
            (l.prototype.getState = function () {
              return {
                buff: this._buff,
                length: this._length,
                hash: this._hash.slice(),
              };
            }),
            (l.prototype.setState = function (e) {
              return (
                (this._buff = e.buff),
                (this._length = e.length),
                (this._hash = e.hash),
                this
              );
            }),
            (l.prototype.destroy = function () {
              delete this._hash, delete this._buff, delete this._length;
            }),
            (l.prototype._finish = function (e, t) {
              var n,
                o,
                i,
                a = t;
              if (((e[a >> 2] |= 128 << (a % 4 << 3)), a > 55))
                for (r(this._hash, e), a = 0; a < 16; a += 1) e[a] = 0;
              (n = 8 * this._length),
                (n = n.toString(16).match(/(.*?)(.{0,8})$/)),
                (o = parseInt(n[2], 16)),
                (i = parseInt(n[1], 16) || 0),
                (e[14] = o),
                (e[15] = i),
                r(this._hash, e);
            }),
            (l.hash = function (e, t) {
              return l.hashBinary(s(e), t);
            }),
            (l.hashBinary = function (e, t) {
              var r = i(e),
                n = u(r);
              return t ? c(n) : n;
            }),
            (l.ArrayBuffer = function () {
              this.reset();
            }),
            (l.ArrayBuffer.prototype.append = function (e) {
              var t,
                n = (function (e, t, r) {
                  var n = new Uint8Array(e.byteLength + t.byteLength);
                  return (
                    n.set(new Uint8Array(e)),
                    n.set(new Uint8Array(t), e.byteLength),
                    r ? n : n.buffer
                  );
                })(this._buff.buffer, e, !0),
                i = n.length;
              for (this._length += e.byteLength, t = 64; t <= i; t += 64)
                r(this._hash, o(n.subarray(t - 64, t)));
              return (
                (this._buff =
                  t - 64 < i
                    ? new Uint8Array(n.buffer.slice(t - 64))
                    : new Uint8Array(0)),
                this
              );
            }),
            (l.ArrayBuffer.prototype.end = function (e) {
              var t,
                r,
                n = this._buff,
                o = n.length,
                i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
              for (t = 0; t < o; t += 1) i[t >> 2] |= n[t] << (t % 4 << 3);
              return (
                this._finish(i, o),
                (r = u(this._hash)),
                e && (r = c(r)),
                this.reset(),
                r
              );
            }),
            (l.ArrayBuffer.prototype.reset = function () {
              return (
                (this._buff = new Uint8Array(0)),
                (this._length = 0),
                (this._hash = [1732584193, -271733879, -1732584194, 271733878]),
                this
              );
            }),
            (l.ArrayBuffer.prototype.getState = function () {
              var e = l.prototype.getState.call(this);
              return (
                (e.buff = (function (e) {
                  return String.fromCharCode.apply(null, new Uint8Array(e));
                })(e.buff)),
                e
              );
            }),
            (l.ArrayBuffer.prototype.setState = function (e) {
              return (
                (e.buff = (function (e, t) {
                  var r,
                    n = e.length,
                    o = new ArrayBuffer(n),
                    i = new Uint8Array(o);
                  for (r = 0; r < n; r += 1) i[r] = e.charCodeAt(r);
                  return t ? i : o;
                })(e.buff, !0)),
                l.prototype.setState.call(this, e)
              );
            }),
            (l.ArrayBuffer.prototype.destroy = l.prototype.destroy),
            (l.ArrayBuffer.prototype._finish = l.prototype._finish),
            (l.ArrayBuffer.hash = function (e, t) {
              var n = (function (e) {
                  var t,
                    n,
                    i,
                    a,
                    u,
                    s,
                    c = e.length,
                    l = [1732584193, -271733879, -1732584194, 271733878];
                  for (t = 64; t <= c; t += 64) r(l, o(e.subarray(t - 64, t)));
                  for (
                    e = t - 64 < c ? e.subarray(t - 64) : new Uint8Array(0),
                      n = e.length,
                      i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      t = 0;
                    t < n;
                    t += 1
                  )
                    i[t >> 2] |= e[t] << (t % 4 << 3);
                  if (((i[t >> 2] |= 128 << (t % 4 << 3)), t > 55))
                    for (r(l, i), t = 0; t < 16; t += 1) i[t] = 0;
                  return (
                    (a = 8 * c),
                    (a = a.toString(16).match(/(.*?)(.{0,8})$/)),
                    (u = parseInt(a[2], 16)),
                    (s = parseInt(a[1], 16) || 0),
                    (i[14] = u),
                    (i[15] = s),
                    r(l, i),
                    l
                  );
                })(new Uint8Array(e)),
                i = u(n);
              return t ? c(i) : i;
            }),
            l
          );
        });
    },
    9004: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          if (!t && e && e.__esModule) return e;
          if (
            null === e ||
            ("object" !== (0, n.default)(e) && "function" !== typeof e)
          )
            return { default: e };
          var r = o(t);
          if (r && r.has(e)) return r.get(e);
          var i = {},
            a = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var u in e)
            if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) {
              var s = a ? Object.getOwnPropertyDescriptor(e, u) : null;
              s && (s.get || s.set)
                ? Object.defineProperty(i, u, s)
                : (i[u] = e[u]);
            }
          (i["default"] = e), r && r.set(e, i);
          return i;
        }),
        r("bf0f"),
        r("18f7"),
        r("d0af"),
        r("de6c"),
        r("6a54"),
        r("9a2c");
      var n = (function (e) {
        return e && e.__esModule ? e : { default: e };
      })(r("fcf3"));
      function o(e) {
        if ("function" !== typeof WeakMap) return null;
        var t = new WeakMap(),
          r = new WeakMap();
        return (o = function (e) {
          return e ? r : t;
        })(e);
      }
    },
    "90c3": function (e, t, r) {
      "use strict";
      function n(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }
      e.exports = function (e, t, r, i) {
        (t = t || "&"), (r = r || "=");
        var a = {};
        if ("string" !== typeof e || 0 === e.length) return a;
        var u = /\+/g;
        e = e.split(t);
        var s = 1e3;
        i && "number" === typeof i.maxKeys && (s = i.maxKeys);
        var c = e.length;
        s > 0 && c > s && (c = s);
        for (var l = 0; l < c; ++l) {
          var f,
            h,
            p,
            d,
            b = e[l].replace(u, "%20"),
            y = b.indexOf(r);
          y >= 0
            ? ((f = b.substr(0, y)), (h = b.substr(y + 1)))
            : ((f = b), (h = "")),
            (p = decodeURIComponent(f)),
            (d = decodeURIComponent(h)),
            n(a, p)
              ? o(a[p])
                ? a[p].push(d)
                : (a[p] = [a[p], d])
              : (a[p] = d);
        }
        return a;
      };
      var o =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
    },
    93278: function (e, t, r) {
      "use strict";
      var n = r("8bdb"),
        o = r("9f69"),
        i = r("1ded").f,
        a = r("c435"),
        u = r("9e70"),
        s = r("b6a1"),
        c = r("862c"),
        l = r("0931"),
        f = r("a734"),
        h = o("".slice),
        p = Math.min,
        d = l("endsWith"),
        b =
          !f &&
          !d &&
          !!(function () {
            var e = i(String.prototype, "endsWith");
            return e && !e.writable;
          })();
      n(
        { target: "String", proto: !0, forced: !b && !d },
        {
          endsWith: function (e) {
            var t = u(c(this));
            s(e);
            var r = arguments.length > 1 ? arguments[1] : void 0,
              n = t.length,
              o = void 0 === r ? n : p(a(r), n),
              i = u(e);
            return h(t, o - i.length, o) === i;
          },
        },
      );
    },
    c5a6: function (e, t, r) {
      "use strict";
      var n = function (e) {
        switch (typeof e) {
          case "string":
            return e;
          case "boolean":
            return e ? "true" : "false";
          case "number":
            return isFinite(e) ? e : "";
          default:
            return "";
        }
      };
      e.exports = function (e, t, r, u) {
        return (
          (t = t || "&"),
          (r = r || "="),
          null === e && (e = void 0),
          "object" === typeof e
            ? i(a(e), function (a) {
                var u = encodeURIComponent(n(a)) + r;
                return o(e[a])
                  ? i(e[a], function (e) {
                      return u + encodeURIComponent(n(e));
                    }).join(t)
                  : u + encodeURIComponent(n(e[a]));
              }).join(t)
            : u
              ? encodeURIComponent(n(u)) + r + encodeURIComponent(n(e))
              : ""
        );
      };
      var o =
        Array.isArray ||
        function (e) {
          return "[object Array]" === Object.prototype.toString.call(e);
        };
      function i(e, t) {
        if (e.map) return e.map(t);
        for (var r = [], n = 0; n < e.length; n++) r.push(t(e[n], n));
        return r;
      }
      var a =
        Object.keys ||
        function (e) {
          var t = [];
          for (var r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
          return t;
        };
    },
    d46c: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "QiniuError", {
          enumerable: !0,
          get: function () {
            return o.QiniuError;
          },
        }),
        Object.defineProperty(t, "QiniuErrorName", {
          enumerable: !0,
          get: function () {
            return o.QiniuErrorName;
          },
        }),
        Object.defineProperty(t, "QiniuNetworkError", {
          enumerable: !0,
          get: function () {
            return o.QiniuNetworkError;
          },
        }),
        Object.defineProperty(t, "QiniuRequestError", {
          enumerable: !0,
          get: function () {
            return o.QiniuRequestError;
          },
        }),
        Object.defineProperty(t, "compressImage", {
          enumerable: !0,
          get: function () {
            return c.compressImage;
          },
        }),
        Object.defineProperty(t, "deleteUploadedChunks", {
          enumerable: !0,
          get: function () {
            return a.deleteUploadedChunks;
          },
        }),
        Object.defineProperty(t, "exif", {
          enumerable: !0,
          get: function () {
            return i.exif;
          },
        }),
        Object.defineProperty(t, "getHeadersForChunkUpload", {
          enumerable: !0,
          get: function () {
            return c.getHeadersForChunkUpload;
          },
        }),
        Object.defineProperty(t, "getHeadersForMkFile", {
          enumerable: !0,
          get: function () {
            return c.getHeadersForMkFile;
          },
        }),
        Object.defineProperty(t, "getUploadUrl", {
          enumerable: !0,
          get: function () {
            return a.getUploadUrl;
          },
        }),
        Object.defineProperty(t, "imageInfo", {
          enumerable: !0,
          get: function () {
            return i.imageInfo;
          },
        }),
        Object.defineProperty(t, "imageMogr2", {
          enumerable: !0,
          get: function () {
            return i.imageMogr2;
          },
        }),
        Object.defineProperty(t, "pipeline", {
          enumerable: !0,
          get: function () {
            return i.pipeline;
          },
        }),
        Object.defineProperty(t, "region", {
          enumerable: !0,
          get: function () {
            return s.region;
          },
        }),
        Object.defineProperty(t, "upload", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(t, "urlSafeBase64Decode", {
          enumerable: !0,
          get: function () {
            return c.urlSafeBase64Decode;
          },
        }),
        Object.defineProperty(t, "urlSafeBase64Encode", {
          enumerable: !0,
          get: function () {
            return c.urlSafeBase64Encode;
          },
        }),
        Object.defineProperty(t, "watermark", {
          enumerable: !0,
          get: function () {
            return i.watermark;
          },
        });
      var o = r("4a32"),
        i = r("1ad2"),
        a = r("fa9f"),
        u = n(r("6deb")),
        s = r("dc19"),
        c = r("f243");
    },
    d67b: function (e, t, r) {
      "use strict";
      (t.decode = t.parse = r("90c3")), (t.encode = t.stringify = r("c5a6"));
    },
    dc19: function (e, t, r) {
      "use strict";
      r("6a54"),
        r("bf0f"),
        r("2797"),
        r("dc8a"),
        Object.defineProperty(t, "__esModule", { value: !0 });
      var n = r("4fea");
      Object.keys(n).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          ((e in t && t[e] === n[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return n[e];
              },
            }));
      });
    },
    e859: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("8a8d"),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("ab80"),
        r("2797"),
        r("dc8a");
      var o = r("44e9"),
        i = r("fa9f"),
        a = n(r("71aa")),
        u = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        s = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        c = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        },
        l = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            u(t, e),
            (t.prototype.run = function () {
              return s(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  n,
                  a,
                  u = this;
                return c(this, function (s) {
                  switch (s.label) {
                    case 0:
                      return (
                        this.logger.info("start run Direct."),
                        (e = new FormData()),
                        e.append("file", this.file),
                        e.append("token", this.token),
                        null != this.key && e.append("key", this.key),
                        e.append("fname", this.putExtra.fname),
                        this.config.checkByServer
                          ? [4, o.CRC32.file(this.file)]
                          : [3, 2]
                      );
                    case 1:
                      (t = s.sent()),
                        e.append("crc32", t.toString()),
                        (s.label = 2);
                    case 2:
                      return (
                        this.putExtra.customVars &&
                          (this.logger.info("init customVars."),
                          (r = this.putExtra.customVars),
                          Object.keys(r).forEach(function (t) {
                            return e.append(t, r[t].toString());
                          }),
                          this.logger.info("customVars inited.")),
                        this.putExtra.metadata &&
                          (this.logger.info("init metadata."),
                          (n = this.putExtra.metadata),
                          Object.keys(n).forEach(function (t) {
                            return e.append(t, n[t].toString());
                          })),
                        this.logger.info("formData inited."),
                        [
                          4,
                          (0, i.direct)(this.uploadHost.getUrl(), e, {
                            onProgress: function (e) {
                              u.updateDirectProgress(e.loaded, e.total);
                            },
                            onCreate: function (e) {
                              return u.addXhr(e);
                            },
                          }),
                        ]
                      );
                    case 3:
                      return (
                        (a = s.sent()),
                        this.logger.info("Direct progress finish."),
                        this.finishDirectProgress(),
                        [2, a]
                      );
                  }
                });
              });
            }),
            (t.prototype.updateDirectProgress = function (e, t) {
              (this.progress = { total: this.getProgressInfoItem(e, t + 1) }),
                this.onData(this.progress);
            }),
            (t.prototype.finishDirectProgress = function () {
              if (!this.progress)
                return (
                  this.logger.warn("progress is null."),
                  (this.progress = {
                    total: this.getProgressInfoItem(
                      this.file.size,
                      this.file.size,
                    ),
                  }),
                  void this.onData(this.progress)
                );
              var e = this.progress.total;
              (this.progress = {
                total: this.getProgressInfoItem(e.loaded + 1, e.size),
              }),
                this.onData(this.progress);
            }),
            t
          );
        })(a.default),
        f = l;
      t.default = f;
    },
    f004: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default,
        o = r("3639").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0),
        r("8a8d"),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c"),
        r("5c47"),
        r("0506"),
        r("fd3c"),
        r("d4b5");
      var i = r("fa9f"),
        a = r("4a32"),
        u = o(r("f243")),
        s = n(r("71aa")),
        c = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        l = function () {
          return (
            (l =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            l.apply(this, arguments)
          );
        },
        f = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        h = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
      var p = (function (e) {
          function t() {
            return (null !== e && e.apply(this, arguments)) || this;
          }
          return (
            c(t, e),
            (t.prototype.run = function () {
              return f(this, void 0, void 0, function () {
                var e,
                  t,
                  r,
                  n,
                  o,
                  i = this;
                return h(this, function (s) {
                  switch (s.label) {
                    case 0:
                      if (
                        (this.logger.info("start run Resume."),
                        !this.config.chunkSize ||
                          !(function (e) {
                            return /^[1-9]\d*$/.test(String(e));
                          })(this.config.chunkSize))
                      )
                        throw new a.QiniuError(
                          a.QiniuErrorName.InvalidChunkSize,
                          "chunkSize must be a positive integer",
                        );
                      if (this.config.chunkSize > 1024)
                        throw new a.QiniuError(
                          a.QiniuErrorName.InvalidChunkSize,
                          "chunkSize maximum value is 1024",
                        );
                      return [4, this.initBeforeUploadChunks()];
                    case 1:
                      s.sent(),
                        (e = new u.Pool(function (t) {
                          return f(i, void 0, void 0, function () {
                            return h(this, function (r) {
                              switch (r.label) {
                                case 0:
                                  if (this.aborted)
                                    throw (
                                      (e.abort(), new Error("pool is aborted"))
                                    );
                                  return [4, this.uploadChunk(t)];
                                case 1:
                                  return r.sent(), [2];
                              }
                            });
                          });
                        }, this.config.concurrentRequestLimit)),
                        (t = null),
                        (r = this.getLocalKey()),
                        (n = this.chunks.map(function (t, r) {
                          return e.enqueue({ chunk: t, index: r });
                        })),
                        (s.label = 2);
                    case 2:
                      return s.trys.push([2, 5, , 6]), [4, Promise.all(n)];
                    case 3:
                      return s.sent(), [4, this.mkFileReq()];
                    case 4:
                      return (t = s.sent()), [3, 6];
                    case 5:
                      throw (
                        ((o = s.sent()),
                        o instanceof a.QiniuRequestError &&
                          (612 === o.code || 400 === o.code) &&
                          u.removeLocalFileInfo(r, this.logger),
                        o)
                      );
                    case 6:
                      return u.removeLocalFileInfo(r, this.logger), [2, t];
                  }
                });
              });
            }),
            (t.prototype.uploadChunk = function (e) {
              return f(this, void 0, void 0, function () {
                var t,
                  r,
                  n,
                  o,
                  a,
                  s,
                  c,
                  l,
                  f,
                  p = this;
                return h(this, function (h) {
                  switch (h.label) {
                    case 0:
                      return (
                        (t = e.index),
                        (r = e.chunk),
                        (n = this.cachedUploadedList[t]),
                        this.logger.info("upload part " + t + ", cache:", n),
                        (o = this.config.checkByMD5),
                        (a = function () {
                          (p.usedCacheList[t] = !0),
                            p.updateChunkProgress(r.size, t),
                            (p.uploadedList[t] = n),
                            p.updateLocalCache();
                        }),
                        n && !o ? (a(), [2]) : [4, u.computeMd5(r)]
                      );
                    case 1:
                      return (
                        (s = h.sent()),
                        this.logger.info("computed part md5.", s),
                        n && s === n.md5
                          ? (a(), [2])
                          : ((this.usedCacheList[t] = !1),
                            (c = function (e) {
                              p.updateChunkProgress(e.loaded, t);
                            }),
                            (l = {
                              body: r,
                              md5: this.config.checkByServer ? s : void 0,
                              onProgress: c,
                              onCreate: function (e) {
                                return p.addXhr(e);
                              },
                            }),
                            this.logger.info("part " + t + " start uploading."),
                            [
                              4,
                              (0, i.uploadChunk)(
                                this.token,
                                this.key,
                                e.index + 1,
                                this.getUploadInfo(),
                                l,
                              ),
                            ])
                      );
                    case 2:
                      return (
                        (f = h.sent()),
                        this.logger.info("part " + t + " upload completed."),
                        c({ loaded: r.size, total: r.size }),
                        (this.uploadedList[t] = {
                          etag: f.data.etag,
                          md5: f.data.md5,
                          size: r.size,
                        }),
                        this.updateLocalCache(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.mkFileReq = function () {
              return f(this, void 0, void 0, function () {
                var e,
                  t,
                  r = this;
                return h(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (e = l(
                          l(
                            l(
                              {
                                parts: this.uploadedList.map(function (e, t) {
                                  return { etag: e.etag, partNumber: t + 1 };
                                }),
                                fname: this.putExtra.fname,
                              },
                              this.putExtra.mimeType && {
                                mimeType: this.putExtra.mimeType,
                              },
                            ),
                            this.putExtra.customVars && {
                              customVars: this.putExtra.customVars,
                            },
                          ),
                          this.putExtra.metadata && {
                            metadata: this.putExtra.metadata,
                          },
                        )),
                        this.logger.info(
                          "parts upload completed, make file.",
                          e,
                        ),
                        [
                          4,
                          (0, i.uploadComplete)(
                            this.token,
                            this.key,
                            this.getUploadInfo(),
                            {
                              onCreate: function (e) {
                                return r.addXhr(e);
                              },
                              body: JSON.stringify(e),
                            },
                          ),
                        ]
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        this.logger.info("finish Resume Progress."),
                        this.updateMkFileProgress(1),
                        [2, t]
                      );
                  }
                });
              });
            }),
            (t.prototype.initBeforeUploadChunks = function () {
              return f(this, void 0, void 0, function () {
                var e, t, r;
                return h(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (this.uploadedList = []),
                        (this.usedCacheList = []),
                        (e = u.getLocalFileInfo(
                          this.getLocalKey(),
                          this.logger,
                        )),
                        e
                          ? [3, 2]
                          : (this.logger.info("init upload parts from api."),
                            [
                              4,
                              (0, i.initUploadParts)(
                                this.token,
                                this.bucketName,
                                this.key,
                                this.uploadHost.getUrl(),
                              ),
                            ])
                      );
                    case 1:
                      return (
                        (t = n.sent()),
                        this.logger.info(
                          "initd upload parts of id: " + t.data.uploadId + ".",
                        ),
                        (this.uploadId = t.data.uploadId),
                        (this.cachedUploadedList = []),
                        [3, 3]
                      );
                    case 2:
                      (r = [
                        "resume upload parts from local cache,",
                        "total " + e.data.length + " part,",
                        "id is " + e.id + ".",
                      ]),
                        this.logger.info(r.join(" ")),
                        (this.cachedUploadedList = e.data),
                        (this.uploadId = e.id),
                        (n.label = 3);
                    case 3:
                      return (
                        (this.chunks = u.getChunks(
                          this.file,
                          this.config.chunkSize,
                        )),
                        (this.loaded = {
                          mkFileProgress: 0,
                          chunks: this.chunks.map(function (e) {
                            return 0;
                          }),
                        }),
                        this.notifyResumeProgress(),
                        [2]
                      );
                  }
                });
              });
            }),
            (t.prototype.getUploadInfo = function () {
              return { id: this.uploadId, url: this.uploadHost.getUrl() };
            }),
            (t.prototype.getLocalKey = function () {
              return u.createLocalKey(this.file.name, this.key, this.file.size);
            }),
            (t.prototype.updateLocalCache = function () {
              u.setLocalFileInfo(
                this.getLocalKey(),
                { id: this.uploadId, data: this.uploadedList },
                this.logger,
              );
            }),
            (t.prototype.updateChunkProgress = function (e, t) {
              (this.loaded.chunks[t] = e), this.notifyResumeProgress();
            }),
            (t.prototype.updateMkFileProgress = function (e) {
              (this.loaded.mkFileProgress = e), this.notifyResumeProgress();
            }),
            (t.prototype.notifyResumeProgress = function () {
              var e = this;
              (this.progress = {
                total: this.getProgressInfoItem(
                  u.sum(this.loaded.chunks) + this.loaded.mkFileProgress,
                  this.file.size + 1,
                ),
                chunks: this.chunks.map(function (t, r) {
                  var n = e.usedCacheList[r];
                  return e.getProgressInfoItem(e.loaded.chunks[r], t.size, n);
                }),
                uploadInfo: {
                  id: this.uploadId,
                  url: this.uploadHost.getUrl(),
                },
              }),
                this.onData(this.progress);
            }),
            t
          );
        })(s.default),
        d = p;
      t.default = d;
    },
    f243: function (e, t, r) {
      "use strict";
      r("6a54"), r("bf0f"), r("2797"), r("dc8a");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 });
      var o = { compressImage: !0 };
      Object.defineProperty(t, "compressImage", {
        enumerable: !0,
        get: function () {
          return l.default;
        },
      });
      var i = r("f3aa");
      Object.keys(i).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === i[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return i[e];
              },
            }));
      });
      var a = r("fe09");
      Object.keys(a).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === a[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return a[e];
              },
            }));
      });
      var u = r("114ea");
      Object.keys(u).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === u[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return u[e];
              },
            }));
      });
      var s = r("2343");
      Object.keys(s).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === s[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return s[e];
              },
            }));
      });
      var c = r("ff2f");
      Object.keys(c).forEach(function (e) {
        "default" !== e &&
          "__esModule" !== e &&
          (Object.prototype.hasOwnProperty.call(o, e) ||
            (e in t && t[e] === c[e]) ||
            Object.defineProperty(t, e, {
              enumerable: !0,
              get: function () {
                return c[e];
              },
            }));
      });
      var l = n(r("0f65"));
    },
    f3aa: function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Pool = void 0),
        r("bf0f"),
        r("aa9c"),
        r("8f71"),
        r("2797"),
        r("f7a5");
      var n = (function () {
        function e(e, t) {
          (this.runTask = e),
            (this.limit = t),
            (this.aborted = !1),
            (this.queue = []),
            (this.processing = []);
        }
        return (
          (e.prototype.enqueue = function (e) {
            var t = this;
            return new Promise(function (r, n) {
              t.queue.push({ task: e, resolve: r, reject: n }), t.check();
            });
          }),
          (e.prototype.run = function (e) {
            var t = this;
            (this.queue = this.queue.filter(function (t) {
              return t !== e;
            })),
              this.processing.push(e),
              this.runTask(e.task).then(
                function () {
                  (t.processing = t.processing.filter(function (t) {
                    return t !== e;
                  })),
                    e.resolve(),
                    t.check();
                },
                function (t) {
                  return e.reject(t);
                },
              );
          }),
          (e.prototype.check = function () {
            var e = this;
            if (!this.aborted) {
              var t = this.processing.length,
                r = this.limit - t;
              this.queue.slice(0, r).forEach(function (t) {
                e.run(t);
              });
            }
          }),
          (e.prototype.abort = function () {
            (this.queue = []), (this.aborted = !0);
          }),
          e
        );
      })();
      t.Pool = n;
    },
    fa9f: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("3639").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.deleteUploadedChunks = function (e, t, r) {
          var n = i.getPutPolicy(e).bucketName,
            o = l(n, t, r);
          return i.request(o, {
            method: "DELETE",
            headers: i.getAuthHeaders(e),
          });
        }),
        (t.direct = function (e, t, r) {
          return i.request(e, a({ method: "POST", body: t }, r));
        }),
        (t.getUpHosts = c),
        (t.getUploadUrl = function (e, t) {
          return u(this, void 0, void 0, function () {
            var r, n, o, a, u;
            return s(this, function (s) {
              switch (s.label) {
                case 0:
                  return (
                    (r = (0, i.normalizeUploadConfig)(e)),
                    (n = r.upprotocol),
                    r.uphost.length > 0
                      ? [2, n + "://" + r.uphost[0]]
                      : ((o = i.getPutPolicy(t)),
                        [4, c(o.assessKey, o.bucketName, n)])
                  );
                case 1:
                  return (
                    (a = s.sent()),
                    (u = a.data.up.acc.main),
                    [2, n + "://" + u[0]]
                  );
              }
            });
          });
        }),
        (t.initUploadParts = function (e, t, r, n) {
          var o =
            n +
            "/buckets/" +
            t +
            "/objects/" +
            (null != r ? i.urlSafeBase64Encode(r) : "~") +
            "/uploads";
          return i.request(o, { method: "POST", headers: i.getAuthHeaders(e) });
        }),
        (t.uploadChunk = function (e, t, r, n, o) {
          var u = i.getPutPolicy(e).bucketName,
            s = l(u, t, n) + "/" + r,
            c = i.getHeadersForChunkUpload(e);
          o.md5 && (c["Content-MD5"] = o.md5);
          return i.request(s, a(a({}, o), { method: "PUT", headers: c }));
        }),
        (t.uploadComplete = function (e, t, r, n) {
          var o = i.getPutPolicy(e).bucketName,
            u = l(o, t, r);
          return i.request(
            u,
            a(a({}, n), { method: "POST", headers: i.getHeadersForMkFile(e) }),
          );
        }),
        r("bf0f"),
        r("01a2"),
        r("e39c"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("7a76"),
        r("c9b5"),
        r("aa9c");
      var o = r("d67b"),
        i = n(r("f243")),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        u = function (e, t, r, n) {
          return new (r || (r = Promise))(function (o, i) {
            function a(e) {
              try {
                s(n.next(e));
              } catch (t) {
                i(t);
              }
            }
            function u(e) {
              try {
                s(n["throw"](e));
              } catch (t) {
                i(t);
              }
            }
            function s(e) {
              e.done
                ? o(e.value)
                : (function (e) {
                    return e instanceof r
                      ? e
                      : new r(function (t) {
                          t(e);
                        });
                  })(e.value).then(a, u);
            }
            s((n = n.apply(e, t || [])).next());
          });
        },
        s = function (e, t) {
          var r,
            n,
            o,
            i,
            a = {
              label: 0,
              sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1];
              },
              trys: [],
              ops: [],
            };
          return (
            (i = { next: u(0), throw: u(1), return: u(2) }),
            "function" === typeof Symbol &&
              (i[Symbol.iterator] = function () {
                return this;
              }),
            i
          );
          function u(i) {
            return function (u) {
              return (function (i) {
                if (r) throw new TypeError("Generator is already executing.");
                while (a)
                  try {
                    if (
                      ((r = 1),
                      n &&
                        (o =
                          2 & i[0]
                            ? n["return"]
                            : i[0]
                              ? n["throw"] ||
                                ((o = n["return"]) && o.call(n), 0)
                              : n.next) &&
                        !(o = o.call(n, i[1])).done)
                    )
                      return o;
                    switch (((n = 0), o && (i = [2 & i[0], o.value]), i[0])) {
                      case 0:
                      case 1:
                        o = i;
                        break;
                      case 4:
                        return a.label++, { value: i[1], done: !1 };
                      case 5:
                        a.label++, (n = i[1]), (i = [0]);
                        continue;
                      case 7:
                        (i = a.ops.pop()), a.trys.pop();
                        continue;
                      default:
                        if (
                          ((o = a.trys),
                          !(o = o.length > 0 && o[o.length - 1]) &&
                            (6 === i[0] || 2 === i[0]))
                        ) {
                          a = 0;
                          continue;
                        }
                        if (
                          3 === i[0] &&
                          (!o || (i[1] > o[0] && i[1] < o[3]))
                        ) {
                          a.label = i[1];
                          break;
                        }
                        if (6 === i[0] && a.label < o[1]) {
                          (a.label = o[1]), (o = i);
                          break;
                        }
                        if (o && a.label < o[2]) {
                          (a.label = o[2]), a.ops.push(i);
                          break;
                        }
                        o[2] && a.ops.pop(), a.trys.pop();
                        continue;
                    }
                    i = t.call(e, a);
                  } catch (u) {
                    (i = [6, u]), (n = 0);
                  } finally {
                    r = o = 0;
                  }
                if (5 & i[0]) throw i[1];
                return { value: i[0] ? i[1] : void 0, done: !0 };
              })([i, u]);
            };
          }
        };
      function c(e, t, r) {
        return u(this, void 0, void 0, function () {
          var n, a;
          return s(this, function (u) {
            return (
              (n = (0, o.stringify)({ ak: e, bucket: t })),
              (a = r + "://api.qiniu.com/v2/query?" + n),
              [2, i.request(a, { method: "GET" })]
            );
          });
        });
      }
      function l(e, t, r) {
        var n = r.url,
          o = r.id;
        return (
          n +
          "/buckets/" +
          e +
          "/objects/" +
          (null != t ? i.urlSafeBase64Encode(t) : "~") +
          "/uploads/" +
          o
        );
      }
    },
    faa1: function (e, t, r) {
      var n,
        o,
        i = r("bdbb").default;
      r("4085"),
        r("dc8a"),
        r("01a2"),
        r("8f71"),
        r("bf0f"),
        r("9a2c"),
        r("aa9c"),
        r("2797"),
        r("a644"),
        r("a03a"),
        r("6a54"),
        r("7a76"),
        r("c9b5"),
        r("9e15"),
        r("884b"),
        r("e39c"),
        r("64aa"),
        r("4db2"),
        r("c976"),
        r("4d8f"),
        r("7b97"),
        r("668a"),
        r("c5b7"),
        r("8ff5"),
        r("2378"),
        r("641a"),
        r("64e0"),
        r("cce3"),
        r("efba"),
        r("d009"),
        r("bd7d"),
        r("7edd"),
        r("d798"),
        r("f547"),
        r("5e54"),
        r("b60a"),
        r("8c18"),
        r("12973"),
        r("f991"),
        r("198e"),
        r("8557"),
        r("63b1"),
        r("1954"),
        r("1cf1"),
        r("15d1"),
        r("d5c6"),
        r("5a56"),
        r("f074"),
        r("80e3"),
        r("5c47"),
        r("2c10"),
        r("f7a5"),
        r("08eb"),
        r("18f7"),
        r("0506"),
        r("c223"),
        r("473f"),
        r("5ef2"),
        r("a1c1"),
        /*!
         * Compressor.js v1.2.1
         * https://fengyuanchen.github.io/compressorjs
         *
         * Copyright 2018-present Chen Fengyuan
         * Released under the MIT license
         *
         * Date: 2023-02-28T14:09:41.732Z
         */
        (function (a, u) {
          "object" === i(t) && "undefined" !== typeof e
            ? (e.exports = u())
            : ((n = u),
              (o = "function" === typeof n ? n.call(t, r, t, e) : n),
              void 0 === o || (e.exports = o));
        })(0, function () {
          "use strict";
          function e(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              t &&
                (n = n.filter(function (t) {
                  return Object.getOwnPropertyDescriptor(e, t).enumerable;
                })),
                r.push.apply(r, n);
            }
            return r;
          }
          function t(t) {
            for (var r = 1; r < arguments.length; r++) {
              var o = null != arguments[r] ? arguments[r] : {};
              r % 2
                ? e(Object(o), !0).forEach(function (e) {
                    n(t, e, o[e]);
                  })
                : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      t,
                      Object.getOwnPropertyDescriptors(o),
                    )
                  : e(Object(o)).forEach(function (e) {
                      Object.defineProperty(
                        t,
                        e,
                        Object.getOwnPropertyDescriptor(o, e),
                      );
                    });
            }
            return t;
          }
          function r(e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, a(n.key), n);
            }
          }
          function n(e, t, r) {
            return (
              (t = a(t)),
              t in e
                ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (e[t] = r),
              e
            );
          }
          function o() {
            return (
              (o = Object.assign
                ? Object.assign.bind()
                : function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                      var r = arguments[t];
                      for (var n in r)
                        Object.prototype.hasOwnProperty.call(r, n) &&
                          (e[n] = r[n]);
                    }
                    return e;
                  }),
              o.apply(this, arguments)
            );
          }
          function a(e) {
            var t = (function (e, t) {
              if ("object" !== i(e) || null === e) return e;
              var r = e[Symbol.toPrimitive];
              if (void 0 !== r) {
                var n = r.call(e, t || "default");
                if ("object" !== i(n)) return n;
                throw new TypeError(
                  "@@toPrimitive must return a primitive value.",
                );
              }
              return ("string" === t ? String : Number)(e);
            })(e, "string");
            return "symbol" === i(t) ? t : String(t);
          }
          var u = { exports: {} };
          (function (e) {
            "undefined" !== typeof window &&
              (function (t) {
                var r = t.HTMLCanvasElement && t.HTMLCanvasElement.prototype,
                  n =
                    t.Blob &&
                    (function () {
                      try {
                        return Boolean(new Blob());
                      } catch (e) {
                        return !1;
                      }
                    })(),
                  o =
                    n &&
                    t.Uint8Array &&
                    (function () {
                      try {
                        return 100 === new Blob([new Uint8Array(100)]).size;
                      } catch (e) {
                        return !1;
                      }
                    })(),
                  i =
                    t.BlobBuilder ||
                    t.WebKitBlobBuilder ||
                    t.MozBlobBuilder ||
                    t.MSBlobBuilder,
                  a = /^data:((.*?)(;charset=.*?)?)(;base64)?,/,
                  u =
                    (n || i) &&
                    t.atob &&
                    t.ArrayBuffer &&
                    t.Uint8Array &&
                    function (e) {
                      var t, r, u, s, c, l, f, h, p;
                      if (((t = e.match(a)), !t))
                        throw new Error("invalid data URI");
                      for (
                        r = t[2]
                          ? t[1]
                          : "text/plain" + (t[3] || ";charset=US-ASCII"),
                          u = !!t[4],
                          s = e.slice(t[0].length),
                          c = u ? atob(s) : decodeURIComponent(s),
                          l = new ArrayBuffer(c.length),
                          f = new Uint8Array(l),
                          h = 0;
                        h < c.length;
                        h += 1
                      )
                        f[h] = c.charCodeAt(h);
                      return n
                        ? new Blob([o ? f : l], { type: r })
                        : ((p = new i()), p.append(l), p.getBlob(r));
                    };
                t.HTMLCanvasElement &&
                  !r.toBlob &&
                  (r.mozGetAsFile
                    ? (r.toBlob = function (e, t, n) {
                        var o = this;
                        setTimeout(function () {
                          n && r.toDataURL && u
                            ? e(u(o.toDataURL(t, n)))
                            : e(o.mozGetAsFile("blob", t));
                        });
                      })
                    : r.toDataURL &&
                      u &&
                      (r.msToBlob
                        ? (r.toBlob = function (e, t, n) {
                            var o = this;
                            setTimeout(function () {
                              ((t && "image/png" !== t) || n) &&
                              r.toDataURL &&
                              u
                                ? e(u(o.toDataURL(t, n)))
                                : e(o.msToBlob(t));
                            });
                          })
                        : (r.toBlob = function (e, t, r) {
                            var n = this;
                            setTimeout(function () {
                              e(u(n.toDataURL(t, r)));
                            });
                          }))),
                  e.exports ? (e.exports = u) : (t.dataURLtoBlob = u);
              })(window);
          })(u);
          var s = u.exports,
            c = {
              strict: !0,
              checkOrientation: !0,
              retainExif: !1,
              maxWidth: 1 / 0,
              maxHeight: 1 / 0,
              minWidth: 0,
              minHeight: 0,
              width: void 0,
              height: void 0,
              resize: "none",
              quality: 0.8,
              mimeType: "auto",
              convertTypes: ["image/png"],
              convertSize: 5e6,
              beforeDraw: null,
              drew: null,
              success: null,
              error: null,
            },
            l =
              "undefined" !== typeof window &&
              "undefined" !== typeof window.document,
            f = l ? window : {},
            h = function (e) {
              return e > 0 && e < 1 / 0;
            },
            p = Array.prototype.slice;
          function d(e) {
            return Array.from ? Array.from(e) : p.call(e);
          }
          var b = /^image\/.+$/;
          function y(e) {
            return b.test(e);
          }
          var v = String.fromCharCode;
          var g = f.btoa;
          function m(e, t) {
            var r = [],
              n = new Uint8Array(e);
            while (n.length > 0)
              r.push(v.apply(null, d(n.subarray(0, 8192)))),
                (n = n.subarray(8192));
            return "data:".concat(t, ";base64,").concat(g(r.join("")));
          }
          function w(e) {
            var t,
              r = new DataView(e);
            try {
              var n, o, i;
              if (255 === r.getUint8(0) && 216 === r.getUint8(1)) {
                var a = r.byteLength,
                  u = 2;
                while (u + 1 < a) {
                  if (255 === r.getUint8(u) && 225 === r.getUint8(u + 1)) {
                    o = u;
                    break;
                  }
                  u += 1;
                }
              }
              if (o) {
                var s = o + 4,
                  c = o + 10;
                if (
                  "Exif" ===
                  (function (e, t, r) {
                    var n,
                      o = "";
                    for (r += t, n = t; n < r; n += 1) o += v(e.getUint8(n));
                    return o;
                  })(r, s, 4)
                ) {
                  var l = r.getUint16(c);
                  if (
                    ((n = 18761 === l),
                    (n || 19789 === l) && 42 === r.getUint16(c + 2, n))
                  ) {
                    var f = r.getUint32(c + 4, n);
                    f >= 8 && (i = c + f);
                  }
                }
              }
              if (i) {
                var h,
                  p,
                  d = r.getUint16(i, n);
                for (p = 0; p < d; p += 1)
                  if (((h = i + 12 * p + 2), 274 === r.getUint16(h, n))) {
                    (h += 8), (t = r.getUint16(h, n)), r.setUint16(h, 1, n);
                    break;
                  }
              }
            } catch (b) {
              t = 1;
            }
            return t;
          }
          var k = /\.\d*(?:0|9){12}\d*$/;
          function x(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1e11;
            return k.test(e) ? Math.round(e * t) / t : e;
          }
          function E(e) {
            var t = e.aspectRatio,
              r = e.height,
              n = e.width,
              o =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "none",
              i = h(n),
              a = h(r);
            if (i && a) {
              var u = r * t;
              (("contain" === o || "none" === o) && u > n) ||
              ("cover" === o && u < n)
                ? (r = n / t)
                : (n = r * t);
            } else i ? (r = n / t) : a && (n = r * t);
            return { width: n, height: r };
          }
          var O = f.ArrayBuffer,
            P = f.FileReader,
            U = f.URL || f.webkitURL,
            C = /\.\w+$/,
            j = f.Compressor,
            _ = (function () {
              function e(r, n) {
                (function (e, t) {
                  if (!(e instanceof t))
                    throw new TypeError("Cannot call a class as a function");
                })(this, e),
                  (this.file = r),
                  (this.exif = []),
                  (this.image = new Image()),
                  (this.options = t(t({}, c), n)),
                  (this.aborted = !1),
                  (this.result = null),
                  this.init();
              }
              return (
                (function (e, t, n) {
                  t && r(e.prototype, t),
                    n && r(e, n),
                    Object.defineProperty(e, "prototype", { writable: !1 });
                })(
                  e,
                  [
                    {
                      key: "init",
                      value: function () {
                        var e = this,
                          t = this.file,
                          r = this.options;
                        if (
                          (function (e) {
                            return (
                              "undefined" !== typeof Blob &&
                              (e instanceof Blob ||
                                "[object Blob]" ===
                                  Object.prototype.toString.call(e))
                            );
                          })(t)
                        ) {
                          var n = t.type;
                          if (y(n))
                            if (U && P) {
                              O ||
                                ((r.checkOrientation = !1),
                                (r.retainExif = !1));
                              var i = "image/jpeg" === n,
                                a = i && r.checkOrientation,
                                u = i && r.retainExif;
                              if (!U || a || u) {
                                var s = new P();
                                (this.reader = s),
                                  (s.onload = function (r) {
                                    var i = r.target,
                                      s = i.result,
                                      c = {},
                                      l = 1;
                                    a &&
                                      ((l = w(s)),
                                      l > 1 &&
                                        o(
                                          c,
                                          (function (e) {
                                            var t = 0,
                                              r = 1,
                                              n = 1;
                                            switch (e) {
                                              case 2:
                                                r = -1;
                                                break;
                                              case 3:
                                                t = -180;
                                                break;
                                              case 4:
                                                n = -1;
                                                break;
                                              case 5:
                                                (t = 90), (n = -1);
                                                break;
                                              case 6:
                                                t = 90;
                                                break;
                                              case 7:
                                                (t = 90), (r = -1);
                                                break;
                                              case 8:
                                                t = -90;
                                                break;
                                            }
                                            return {
                                              rotate: t,
                                              scaleX: r,
                                              scaleY: n,
                                            };
                                          })(l),
                                        )),
                                      u &&
                                        (e.exif = (function (e) {
                                          var t = d(new Uint8Array(e)),
                                            r = t.length,
                                            n = [],
                                            o = 0;
                                          while (o + 3 < r) {
                                            var i = t[o],
                                              a = t[o + 1];
                                            if (255 === i && 218 === a) break;
                                            if (255 === i && 216 === a) o += 2;
                                            else {
                                              var u = 256 * t[o + 2] + t[o + 3],
                                                s = o + u + 2,
                                                c = t.slice(o, s);
                                              n.push(c), (o = s);
                                            }
                                          }
                                          return n.reduce(function (e, t) {
                                            return 255 === t[0] && 225 === t[1]
                                              ? e.concat(t)
                                              : e;
                                          }, []);
                                        })(s)),
                                      (c.url =
                                        a || u
                                          ? !U || l > 1
                                            ? m(s, n)
                                            : U.createObjectURL(t)
                                          : s),
                                      e.load(c);
                                  }),
                                  (s.onabort = function () {
                                    e.fail(
                                      new Error(
                                        "Aborted to read the image with FileReader.",
                                      ),
                                    );
                                  }),
                                  (s.onerror = function () {
                                    e.fail(
                                      new Error(
                                        "Failed to read the image with FileReader.",
                                      ),
                                    );
                                  }),
                                  (s.onloadend = function () {
                                    e.reader = null;
                                  }),
                                  a || u
                                    ? s.readAsArrayBuffer(t)
                                    : s.readAsDataURL(t);
                              } else this.load({ url: U.createObjectURL(t) });
                            } else
                              this.fail(
                                new Error(
                                  "The current browser does not support image compression.",
                                ),
                              );
                          else
                            this.fail(
                              new Error(
                                "The first argument must be an image File or Blob object.",
                              ),
                            );
                        } else
                          this.fail(
                            new Error(
                              "The first argument must be a File or Blob object.",
                            ),
                          );
                      },
                    },
                    {
                      key: "load",
                      value: function (e) {
                        var r = this,
                          n = this.file,
                          o = this.image;
                        (o.onload = function () {
                          r.draw(
                            t(
                              t({}, e),
                              {},
                              {
                                naturalWidth: o.naturalWidth,
                                naturalHeight: o.naturalHeight,
                              },
                            ),
                          );
                        }),
                          (o.onabort = function () {
                            r.fail(new Error("Aborted to load the image."));
                          }),
                          (o.onerror = function () {
                            r.fail(new Error("Failed to load the image."));
                          }),
                          f.navigator &&
                            /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(
                              f.navigator.userAgent,
                            ) &&
                            (o.crossOrigin = "anonymous"),
                          (o.alt = n.name),
                          (o.src = e.url);
                      },
                    },
                    {
                      key: "draw",
                      value: function (e) {
                        var t = this,
                          r = e.naturalWidth,
                          n = e.naturalHeight,
                          o = e.rotate,
                          i = void 0 === o ? 0 : o,
                          a = e.scaleX,
                          u = void 0 === a ? 1 : a,
                          c = e.scaleY,
                          l = void 0 === c ? 1 : c,
                          f = this.file,
                          p = this.image,
                          b = this.options,
                          v = document.createElement("canvas"),
                          g = v.getContext("2d"),
                          w = Math.abs(i) % 180 === 90,
                          k =
                            ("contain" === b.resize || "cover" === b.resize) &&
                            h(b.width) &&
                            h(b.height),
                          O = Math.max(b.maxWidth, 0) || 1 / 0,
                          U = Math.max(b.maxHeight, 0) || 1 / 0,
                          C = Math.max(b.minWidth, 0) || 0,
                          j = Math.max(b.minHeight, 0) || 0,
                          _ = r / n,
                          I = b.width,
                          A = b.height;
                        if (w) {
                          var S = [U, O];
                          (O = S[0]), (U = S[1]);
                          var R = [j, C];
                          (C = R[0]), (j = R[1]);
                          var M = [A, I];
                          (I = M[0]), (A = M[1]);
                        }
                        k && (_ = I / A);
                        var F = E(
                          { aspectRatio: _, width: O, height: U },
                          "contain",
                        );
                        (O = F.width), (U = F.height);
                        var z = E(
                          { aspectRatio: _, width: C, height: j },
                          "cover",
                        );
                        if (((C = z.width), (j = z.height), k)) {
                          var T = E(
                            { aspectRatio: _, width: I, height: A },
                            b.resize,
                          );
                          (I = T.width), (A = T.height);
                        } else {
                          var B = E({ aspectRatio: _, width: I, height: A }),
                            L = B.width;
                          I = void 0 === L ? r : L;
                          var H = B.height;
                          A = void 0 === H ? n : H;
                        }
                        (I = Math.floor(x(Math.min(Math.max(I, C), O)))),
                          (A = Math.floor(x(Math.min(Math.max(A, j), U))));
                        var q = -I / 2,
                          D = -A / 2,
                          N = I,
                          Q = A,
                          W = [];
                        if (k) {
                          var V,
                            G,
                            K,
                            X,
                            J = E(
                              { aspectRatio: _, width: r, height: n },
                              { contain: "cover", cover: "contain" }[b.resize],
                            );
                          (K = J.width),
                            (X = J.height),
                            (V = (r - K) / 2),
                            (G = (n - X) / 2),
                            W.push(V, G, K, X);
                        }
                        if ((W.push(q, D, N, Q), w)) {
                          var $ = [A, I];
                          (I = $[0]), (A = $[1]);
                        }
                        (v.width = I),
                          (v.height = A),
                          y(b.mimeType) || (b.mimeType = f.type);
                        var Z = "transparent";
                        f.size > b.convertSize &&
                          b.convertTypes.indexOf(b.mimeType) >= 0 &&
                          (b.mimeType = "image/jpeg");
                        var Y = "image/jpeg" === b.mimeType;
                        if (
                          (Y && (Z = "#fff"),
                          (g.fillStyle = Z),
                          g.fillRect(0, 0, I, A),
                          b.beforeDraw && b.beforeDraw.call(this, g, v),
                          !this.aborted &&
                            (g.save(),
                            g.translate(I / 2, A / 2),
                            g.rotate((i * Math.PI) / 180),
                            g.scale(u, l),
                            g.drawImage.apply(g, [p].concat(W)),
                            g.restore(),
                            b.drew && b.drew.call(this, g, v),
                            !this.aborted))
                        ) {
                          var ee = function (e) {
                            if (!t.aborted) {
                              var o = function (e) {
                                return t.done({
                                  naturalWidth: r,
                                  naturalHeight: n,
                                  result: e,
                                });
                              };
                              if (
                                e &&
                                Y &&
                                b.retainExif &&
                                t.exif &&
                                t.exif.length > 0
                              ) {
                                var i = function (e) {
                                  return o(
                                    s(
                                      m(
                                        (function (e, t) {
                                          var r = d(new Uint8Array(e));
                                          if (255 !== r[2] || 224 !== r[3])
                                            return e;
                                          var n = 256 * r[4] + r[5],
                                            o = [255, 216].concat(
                                              t,
                                              r.slice(4 + n),
                                            );
                                          return new Uint8Array(o);
                                        })(e, t.exif),
                                        b.mimeType,
                                      ),
                                    ),
                                  );
                                };
                                if (e.arrayBuffer)
                                  e.arrayBuffer()
                                    .then(i)
                                    .catch(function () {
                                      t.fail(
                                        new Error(
                                          "Failed to read the compressed image with Blob.arrayBuffer().",
                                        ),
                                      );
                                    });
                                else {
                                  var a = new P();
                                  (t.reader = a),
                                    (a.onload = function (e) {
                                      var t = e.target;
                                      i(t.result);
                                    }),
                                    (a.onabort = function () {
                                      t.fail(
                                        new Error(
                                          "Aborted to read the compressed image with FileReader.",
                                        ),
                                      );
                                    }),
                                    (a.onerror = function () {
                                      t.fail(
                                        new Error(
                                          "Failed to read the compressed image with FileReader.",
                                        ),
                                      );
                                    }),
                                    (a.onloadend = function () {
                                      t.reader = null;
                                    }),
                                    a.readAsArrayBuffer(e);
                                }
                              } else o(e);
                            }
                          };
                          v.toBlob
                            ? v.toBlob(ee, b.mimeType, b.quality)
                            : ee(s(v.toDataURL(b.mimeType, b.quality)));
                        }
                      },
                    },
                    {
                      key: "done",
                      value: function (e) {
                        var t = e.naturalWidth,
                          r = e.naturalHeight,
                          n = e.result,
                          o = this.file,
                          i = this.image,
                          a = this.options;
                        if (
                          (U &&
                            0 === i.src.indexOf("blob:") &&
                            U.revokeObjectURL(i.src),
                          n)
                        )
                          if (
                            a.strict &&
                            !a.retainExif &&
                            n.size > o.size &&
                            a.mimeType === o.type &&
                            !(
                              a.width > t ||
                              a.height > r ||
                              a.minWidth > t ||
                              a.minHeight > r ||
                              a.maxWidth < t ||
                              a.maxHeight < r
                            )
                          )
                            n = o;
                          else {
                            var u = new Date();
                            (n.lastModified = u.getTime()),
                              (n.lastModifiedDate = u),
                              (n.name = o.name),
                              n.name &&
                                n.type !== o.type &&
                                (n.name = n.name.replace(
                                  C,
                                  (function (e) {
                                    var t = y(e) ? e.substr(6) : "";
                                    return (
                                      "jpeg" === t && (t = "jpg"), ".".concat(t)
                                    );
                                  })(n.type),
                                ));
                          }
                        else n = o;
                        (this.result = n), a.success && a.success.call(this, n);
                      },
                    },
                    {
                      key: "fail",
                      value: function (e) {
                        var t = this.options;
                        if (!t.error) throw e;
                        t.error.call(this, e);
                      },
                    },
                    {
                      key: "abort",
                      value: function () {
                        this.aborted ||
                          ((this.aborted = !0),
                          this.reader
                            ? this.reader.abort()
                            : this.image.complete
                              ? this.fail(
                                  new Error(
                                    "The compression process has been aborted.",
                                  ),
                                )
                              : ((this.image.onload = null),
                                this.image.onabort()));
                      },
                    },
                  ],
                  [
                    {
                      key: "noConflict",
                      value: function () {
                        return (window.Compressor = j), e;
                      },
                    },
                    {
                      key: "setDefaults",
                      value: function (e) {
                        o(c, e);
                      },
                    },
                  ],
                ),
                e
              );
            })();
          return _;
        });
    },
    fe09: function (e, t, r) {
      "use strict";
      r("6a54");
      var n = r("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Subscriber = t.Observable = void 0);
      var o = n(r("fcf3"));
      r("8a8d");
      var i = (function () {
          var e = function (t, r) {
            return (
              (e =
                Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array &&
                  function (e, t) {
                    e.__proto__ = t;
                  }) ||
                function (e, t) {
                  for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                }),
              e(t, r)
            );
          };
          return function (t, r) {
            function n() {
              this.constructor = t;
            }
            e(t, r),
              (t.prototype =
                null === r
                  ? Object.create(r)
                  : ((n.prototype = r.prototype), new n()));
          };
        })(),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        u = (function () {
          function e() {
            this.closed = !1;
          }
          return (
            (e.prototype.unsubscribe = function () {
              this.closed ||
                ((this.closed = !0), this._unsubscribe && this._unsubscribe());
            }),
            (e.prototype.add = function (e) {
              this._unsubscribe = e;
            }),
            e
          );
        })(),
        s = (function (e) {
          function t(t, r, n) {
            var i = e.call(this) || this;
            return (
              (i.isStopped = !1),
              t && "object" === (0, o.default)(t)
                ? (i.destination = t)
                : (i.destination = a(
                    a(a({}, t && { next: t }), r && { error: r }),
                    n && { complete: n },
                  )),
              i
            );
          }
          return (
            i(t, e),
            (t.prototype.unsubscribe = function () {
              this.closed ||
                ((this.isStopped = !0), e.prototype.unsubscribe.call(this));
            }),
            (t.prototype.next = function (e) {
              !this.isStopped &&
                this.destination.next &&
                this.destination.next(e);
            }),
            (t.prototype.error = function (e) {
              !this.isStopped &&
                this.destination.error &&
                ((this.isStopped = !0), this.destination.error(e));
            }),
            (t.prototype.complete = function (e) {
              !this.isStopped &&
                this.destination.complete &&
                ((this.isStopped = !0), this.destination.complete(e));
            }),
            t
          );
        })(u);
      t.Subscriber = s;
      var c = (function () {
        function e(e) {
          this._subscribe = e;
        }
        return (
          (e.prototype.subscribe = function (e, t, r) {
            var n = new s(e, t, r);
            return n.add(this._subscribe(n)), n;
          }),
          e
        );
      })();
      t.Observable = c;
    },
    ff2f: function (e, t, r) {
      "use strict";
      r("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.normalizeUploadConfig = function (e, t) {
          var r = i({}, e),
            u = r.upprotocol,
            c = r.uphost,
            l = a(r, ["upprotocol", "uphost"]),
            f = i(
              {
                uphost: [],
                retryCount: 3,
                checkByMD5: !1,
                forceDirect: !1,
                useCdnDomain: !0,
                checkByServer: !0,
                concurrentRequestLimit: 3,
                chunkSize: o.DEFAULT_CHUNK_SIZE,
                upprotocol: "https",
                debugLogLevel: "OFF",
                disableStatisticsReport: !1,
              },
              l,
            );
          u && (f.upprotocol = u.replace(/:$/, ""));
          var h = [];
          t &&
            null != (null === e || void 0 === e ? void 0 : e.uphost) &&
            null != (null === e || void 0 === e ? void 0 : e.region) &&
            t.warn("do not use both the uphost and region config.");
          if (c) Array.isArray(c) ? h.push.apply(h, s(c)) : h.push(c);
          else if (null === f || void 0 === f ? void 0 : f.region) {
            var p =
              n.regionUphostMap[null === f || void 0 === f ? void 0 : f.region];
            f.useCdnDomain
              ? h.push.apply(h, s(p.cdnUphost))
              : h.push.apply(h, s(p.srcUphost));
          }
          return i(i({}, f), { uphost: h.filter(Boolean) });
        }),
        r("5ef2"),
        r("01a2"),
        r("e39c"),
        r("bf0f"),
        r("844d"),
        r("18f7"),
        r("de6c"),
        r("aa9c"),
        r("c223"),
        r("5c47"),
        r("a1c1"),
        r("8f71");
      var n = r("dc19"),
        o = r("6deb"),
        i = function () {
          return (
            (i =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var o in ((t = arguments[r]), t))
                    Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e;
              }),
            i.apply(this, arguments)
          );
        },
        a = function (e, t) {
          var r = {};
          for (var n in e)
            Object.prototype.hasOwnProperty.call(e, n) &&
              t.indexOf(n) < 0 &&
              (r[n] = e[n]);
          if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
            var o = 0;
            for (n = Object.getOwnPropertySymbols(e); o < n.length; o++)
              t.indexOf(n[o]) < 0 &&
                Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
                (r[n[o]] = e[n[o]]);
          }
          return r;
        },
        u = function (e, t) {
          var r = "function" === typeof Symbol && e[Symbol.iterator];
          if (!r) return e;
          var n,
            o,
            i = r.call(e),
            a = [];
          try {
            while ((void 0 === t || t-- > 0) && !(n = i.next()).done)
              a.push(n.value);
          } catch (u) {
            o = { error: u };
          } finally {
            try {
              n && !n.done && (r = i["return"]) && r.call(i);
            } finally {
              if (o) throw o.error;
            }
          }
          return a;
        },
        s = function () {
          for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(u(arguments[t]));
          return e;
        };
    },
  },
]);
//# sourceMappingURL=pages-user-apply~pages-user-certification~pages-user-huifu~pages-user-index~pages-user-level~pages-u~6bd29fe7.c200b5e3.js.map
