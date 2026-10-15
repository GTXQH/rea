(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-chat-test"],
  {
    "1c90": function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("f419"),
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
    "1d41": function (t, e, i) {
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
            { staticClass: "container" },
            [
              i(
                "v-uni-view",
                {
                  staticClass: "paste-zone",
                  attrs: { tabindex: "0" },
                  on: {
                    paste: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.handlePaste.apply(void 0, arguments);
                    },
                    click: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)),
                        t.focusPasteZone.apply(void 0, arguments);
                    },
                  },
                },
                [
                  i("v-uni-text", { staticClass: "paste-tip" }, [
                    t._v("点击此处，然后按 Ctrl+V 粘贴图片2"),
                  ]),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "preview-container" },
                t._l(t.imgList, function (e, n) {
                  return i(
                    "v-uni-view",
                    { key: n, staticClass: "preview-item" },
                    [
                      i("v-uni-image", {
                        staticClass: "preview-img",
                        attrs: { src: e.url, mode: "aspectFill" },
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)),
                              t.previewImage(n);
                          },
                        },
                      }),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "delete-btn",
                          on: {
                            click: function (e) {
                              e.stopPropagation(),
                                (arguments[0] = e = t.$handleEvent(e)),
                                t.removeImage(n);
                            },
                          },
                        },
                        [t._v("×")],
                      ),
                    ],
                    1,
                  );
                }),
                1,
              ),
              t.imgList.length > 0
                ? i(
                    "v-uni-button",
                    {
                      staticClass: "upload-btn",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.uploadImages.apply(void 0, arguments);
                        },
                      },
                    },
                    [t._v("上传图片")],
                  )
                : t._e(),
            ],
            1,
          );
        },
        a = [];
    },
    "1dcd": function (t, e, i) {
      var n = i("6ab3");
      n.__esModule && (n = n.default),
        "string" === typeof n && (n = [[t.i, n, ""]]),
        n.locals && (t.exports = n.locals);
      var a = i("967d").default;
      a("279b1f06", n, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6ab3": function (t, e, i) {
      var n = i("c86c");
      (e = n(!1)),
        e.push([
          t.i,
          ".container[data-v-f84a7906]{padding:%?20?%}.paste-zone[data-v-f84a7906]{padding:%?40?%;border:%?2?% dashed #ccc;border-radius:%?12?%;text-align:center;color:#888;height:200px;background-color:#f9f9f9;margin-bottom:%?30?%;outline:none}.paste-tip[data-v-f84a7906]{font-size:%?28?%}.preview-container[data-v-f84a7906]{display:flex;flex-wrap:wrap;gap:%?20?%}.preview-item[data-v-f84a7906]{position:relative;width:%?220?%;height:%?220?%}.preview-img[data-v-f84a7906]{width:100%;height:100%;border-radius:%?8?%}.delete-btn[data-v-f84a7906]{position:absolute;top:%?-12?%;right:%?-12?%;width:%?40?%;height:%?40?%;background-color:#ff4d4f;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:%?24?%;cursor:pointer}.upload-btn[data-v-f84a7906]{margin-top:%?40?%;background-color:#007aff;color:#fff}",
          "",
        ]),
        (t.exports = e);
    },
    c851: function (t, e, i) {
      "use strict";
      i.r(e);
      var n = i("1d41"),
        a = i("1c90");
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      i("ddae");
      var r = i("828b"),
        s = Object(r["a"])(
          a["default"],
          n["b"],
          n["c"],
          !1,
          null,
          "f84a7906",
          null,
          !1,
          n["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    ddae: function (t, e, i) {
      "use strict";
      var n = i("1dcd"),
        a = i.n(n);
      a.a;
    },
    f419: function (t, e, i) {
      "use strict";
      i("6a54");
      var n = i("f5bd").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0);
      var a = n(i("2634")),
        o = n(i("2fdc"));
      i("5ef2"),
        i("bf0f"),
        i("18f7"),
        i("de6c"),
        i("dc89"),
        i("2425"),
        i("aa9c"),
        i("8f71"),
        i("dd2b"),
        i("fd3c"),
        i("2797");
      var r = i("e74a"),
        s = n(i("2609")),
        u = {
          data: function () {
            return { imgList: [], blobUrls: [] };
          },
          onLoad: function (t) {
            this.getMobileChatInfo();
          },
          methods: {
            getMobileChatInfo: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, r.send)(
                  "/wechat/Chat/getMobileChatInfo",
                  { id: 1 },
                  !1,
                ).then(function (e) {
                  uni.hideLoading();
                  var i = e.status,
                    n = e.msg,
                    a = e.data;
                  if (1 != i) return uni.$uv.toast(n);
                  t.initUpload(a.up_config);
                });
            },
            initUpload: function (t) {
              this.uploader = new s.default({
                domain: t.domain,
                tokenUrl: t.token_url,
                quality: 0.6,
                prefix: t.prefix,
              });
            },
            focusPasteZone: function () {
              var t;
              null === (t = this.$refs.pasteZone) || void 0 === t || t.focus();
            },
            handlePaste: function () {
              var t = this;
              document.addEventListener("paste", function (e) {
                var i = (e.clipboardData && e.clipboardData.items) || [],
                  n = null;
                i[0] &&
                  -1 !== i[0].type.indexOf("image") &&
                  ((n = i[0].getAsFile()), n && t.addImage(n));
              });
            },
            addImage: function (t) {
              if (t.size > 10485760)
                uni.showToast({ title: "图片大小不能超过 10MB", icon: "none" });
              else {
                (this.blobUrls = []), (this.imgList = []);
                var e = URL.createObjectURL(t);
                this.blobUrls.push(e), this.imgList.push({ url: e, file: t });
              }
            },
            removeImage: function (t) {
              var e = this.imgList[t];
              e &&
                (URL.revokeObjectURL(e.url),
                (this.blobUrls = this.blobUrls.filter(function (t) {
                  return t !== e.url;
                })),
                this.imgList.splice(t, 1));
            },
            previewImage: function (t) {
              uni.previewImage({
                current: t,
                urls: this.imgList.map(function (t) {
                  return t.url;
                }),
              });
            },
            uploadImages: function () {
              var t = this;
              return (0, o.default)(
                (0, a.default)().mark(function e() {
                  var i, n;
                  return (0, a.default)().wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (0 !== t.imgList.length) {
                              e.next = 3;
                              break;
                            }
                            return (
                              uni.showToast({
                                title: "请先粘贴图片",
                                icon: "none",
                              }),
                              e.abrupt("return")
                            );
                          case 3:
                            return (
                              uni.showLoading({ title: "上传中..." }),
                              (e.prev = 4),
                              (i = t.imgList.map(function (e) {
                                return t.uploader.uploadDirect(e.file);
                              })),
                              (e.next = 8),
                              Promise.all(i)
                            );
                          case 8:
                            (n = e.sent),
                              console.log("上传结果:", n),
                              uni.hideLoading(),
                              uni.showToast({
                                title: "成功上传".concat(n.length, "张图片！"),
                              }),
                              (t.imgList = []),
                              (e.next = 20);
                            break;
                          case 15:
                            (e.prev = 15),
                              (e.t0 = e["catch"](4)),
                              uni.hideLoading(),
                              uni.showToast({
                                title: "上传失败",
                                icon: "error",
                              }),
                              console.error("上传错误:", e.t0);
                          case 20:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[4, 15]],
                  );
                }),
              )();
            },
          },
          beforeUnmount: function () {
            this.blobUrls.forEach(function (t) {
              return URL.revokeObjectURL(t);
            });
          },
        };
      e.default = u;
    },
  },
]);
//# sourceMappingURL=pages_sub1-chat-test.0ff32db8.js.map
