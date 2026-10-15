(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-order-audit_detail"],
  {
    "0d66": function (t, i, e) {
      "use strict";
      e.r(i);
      var s = e("29e7"),
        a = e("a427");
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(n);
      e("702f");
      var o = e("828b"),
        r = Object(o["a"])(
          a["default"],
          s["b"],
          s["c"],
          !1,
          null,
          "3d951f7f",
          null,
          !1,
          s["a"],
          void 0,
        );
      i["default"] = r.exports;
    },
    "29e7": function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return a;
      }),
        e.d(i, "c", function () {
          return n;
        }),
        e.d(i, "a", function () {
          return s;
        });
      var s = {
          uvPopup: e("ce8a").default,
          uvForm: e("0de9").default,
          uvFormItem: e("05af").default,
          uvInput: e("f723").default,
          uvUpload: e("7447").default,
        },
        a = function () {
          var t = this,
            i = t.$createElement,
            e = t._self._c || i;
          return e(
            "v-uni-view",
            { staticClass: "content" },
            [
              e(
                "v-uni-view",
                { staticClass: "status_box" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "status flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [
                        t._v(t._s(t.info.audit_status_text)),
                      ]),
                    ],
                    1,
                  ),
                  e("v-uni-view", { staticClass: "intro" }, [
                    t._v(t._s(t.auditStatusTips)),
                  ]),
                  t.info.service_imgs_list &&
                  t.info.service_imgs_list.length > 0
                    ? e(
                        "v-uni-view",
                        { staticClass: "seller_msg_box flex_box" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "txt" },
                            [
                              e("v-uni-view", { staticClass: "nickname" }, [
                                t._v("服务证明"),
                              ]),
                              e("v-uni-view", { staticClass: "tips" }, [
                                t._v(
                                  "证明文字：" +
                                    t._s(
                                      t.info.service_txt
                                        ? t.info.service_txt
                                        : "无",
                                    ),
                                ),
                              ]),
                              e(
                                "v-uni-view",
                                { staticClass: "img_box" },
                                t._l(t.info.service_imgs_list, function (i, s) {
                                  return e("img", {
                                    key: s,
                                    attrs: { src: i },
                                    on: {
                                      click: function (e) {
                                        (arguments[0] = e = t.$handleEvent(e)),
                                          t.previewImage(
                                            i,
                                            t.info.service_imgs_list,
                                          );
                                      },
                                    },
                                  });
                                }),
                                0,
                              ),
                              t.info.service_time
                                ? e("v-uni-view", { staticClass: "tips" }, [
                                    t._v(
                                      "完成时间：" + t._s(t.info.service_time),
                                    ),
                                  ])
                                : t._e(),
                            ],
                            1,
                          ),
                        ],
                        1,
                      )
                    : t._e(),
                ],
                1,
              ),
              2 == t.info.audit_status || 3 == t.info.audit_status
                ? e(
                    "v-uni-view",
                    { staticClass: "reject_box" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "reject_head flex_box" },
                        [
                          e("v-uni-view", { staticClass: "reject_tit" }, [
                            t._v("驳回信息"),
                          ]),
                          t.info.audit_reject_type_text
                            ? e("v-uni-view", { staticClass: "reject_tag" }, [
                                t._v(t._s(t.info.audit_reject_type_text)),
                              ])
                            : t._e(),
                        ],
                        1,
                      ),
                      e(
                        "v-uni-view",
                        { staticClass: "reject_item" },
                        [
                          e("v-uni-view", { staticClass: "label" }, [
                            t._v("驳回原因"),
                          ]),
                          e("v-uni-view", { staticClass: "value" }, [
                            t._v(
                              t._s(
                                t.info.audit_reject_reason
                                  ? t.info.audit_reject_reason
                                  : "无",
                              ),
                            ),
                          ]),
                        ],
                        1,
                      ),
                      t.info.audit_reject_type_text
                        ? e(
                            "v-uni-view",
                            { staticClass: "reject_item" },
                            [
                              e("v-uni-view", { staticClass: "label" }, [
                                t._v("驳回类型"),
                              ]),
                              e(
                                "v-uni-view",
                                { staticClass: "value type_value" },
                                [t._v(t._s(t.info.audit_reject_type_text))],
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                    ],
                    1,
                  )
                : t._e(),
              e(
                "v-uni-view",
                { staticClass: "top_box flex_box" },
                [
                  e(
                    "v-uni-view",
                    {
                      staticClass: "order_num flex_box",
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)),
                            t.copyOrderNum(t.info.order_no);
                        },
                      },
                    },
                    [
                      e("v-uni-view", {}, [t._v("订单编号：")]),
                      e("v-uni-view", { staticClass: "num" }, [
                        t._v(t._s(t.info.order_no)),
                      ]),
                      e("v-uni-view", { staticClass: "copy_btn" }, [
                        t._v("复制"),
                      ]),
                    ],
                    1,
                  ),
                  e("v-uni-view", { staticClass: "status" }, [
                    t._v(t._s(t.info.status_text)),
                  ]),
                ],
                1,
              ),
              e(
                "v-uni-view",
                { staticClass: "msg_box" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "goods_msg flex_box" },
                    [
                      t.info.goods_thumb
                        ? e("img", {
                            staticClass: "img",
                            attrs: { src: t.info.goods_thumb },
                          })
                        : e("img", {
                            staticClass: "img",
                            attrs: {
                              src: t.info.goods_info
                                ? t.info.goods_info.thumb
                                : "",
                            },
                          }),
                      e(
                        "v-uni-view",
                        { staticClass: "txt" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "price_box flex_box" },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "price" },
                                [
                                  e("v-uni-text", { staticClass: "unit" }, [
                                    t._v("￥"),
                                  ]),
                                  e("v-uni-text", [t._v(t._s(t.info.price))]),
                                ],
                                1,
                              ),
                              e("v-uni-view", { staticClass: "num" }, [
                                t._v("x " + t._s(t.info.num)),
                              ]),
                            ],
                            1,
                          ),
                          e("v-uni-view", { staticClass: "name uv-line-2" }, [
                            t._v(t._s(t.info.goods_name)),
                          ]),
                          e("v-uni-view", { staticClass: "intro uv-line-2" }, [
                            t._v(t._s(t.info.goods_intro)),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "tips flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [t._v("大区")]),
                      e("v-uni-view", [t._v(t._s(t.info.game_area_text))]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "tips flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [t._v("服务费")]),
                      e("v-uni-view", [t._v("¥" + t._s(t.info.service_fee))]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "tips flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [
                        t._v("订单备注"),
                      ]),
                      e("v-uni-view", { staticClass: "remark uv-line-3" }, [
                        t._v(t._s(t.info.remark ? t.info.remark : "无")),
                      ]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "tips flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [
                        t._v("下单时间"),
                      ]),
                      e("v-uni-view", [
                        t._v(t._s(t.info.add_time ? t.info.add_time : "-")),
                      ]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "tips flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [
                        t._v("付款时间"),
                      ]),
                      e("v-uni-view", [
                        t._v(t._s(t.info.pay_time ? t.info.pay_time : "-")),
                      ]),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "tips flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [
                        t._v("完成时间"),
                      ]),
                      e("v-uni-view", [
                        t._v(
                          t._s(t.info.service_time ? t.info.service_time : "-"),
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
                { staticClass: "cash_box flex_box" },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "total_box flex_box" },
                    [
                      e("v-uni-view", { staticClass: "tit" }, [t._v("到手:")]),
                      e(
                        "v-uni-view",
                        { staticClass: "price" },
                        [
                          e("v-uni-text", { staticClass: "unit" }, [
                            t._v("￥"),
                          ]),
                          e("v-uni-text", [t._v(t._s(t.info.seller_money))]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  e(
                    "v-uni-view",
                    { staticClass: "btn_box flex_box" },
                    [
                      2 == t.info.audit_status
                        ? e(
                            "v-uni-view",
                            {
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)),
                                    t.openResubmit.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("重新提交证明")],
                          )
                        : t._e(),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              e(
                "uv-popup",
                {
                  ref: "popResubmit",
                  attrs: {
                    mode: "center",
                    bgColor: "none",
                    closeOnClickOverlay: !1,
                  },
                },
                [
                  e(
                    "v-uni-view",
                    { staticClass: "ysShow" },
                    [
                      e("v-uni-view", { staticClass: "title" }, [
                        t._v("重新提交服务证明"),
                      ]),
                      e(
                        "v-uni-view",
                        { staticClass: "con_box" },
                        [
                          e(
                            "uv-form",
                            {
                              ref: "form1",
                              attrs: {
                                labelPosition: "left",
                                model: t.form,
                                rules: t.rules,
                              },
                            },
                            [
                              e(
                                "uv-form-item",
                                { attrs: { prop: "service_txt" } },
                                [
                                  e("uv-input", {
                                    attrs: {
                                      placeholder: "请输入证明文字",
                                      maxlength: "50",
                                    },
                                    model: {
                                      value: t.form.service_txt,
                                      callback: function (i) {
                                        t.$set(t.form, "service_txt", i);
                                      },
                                      expression: "form.service_txt",
                                    },
                                  }),
                                ],
                                1,
                              ),
                              e(
                                "uv-form-item",
                                { attrs: { prop: "pics" } },
                                [
                                  e("uv-upload", {
                                    attrs: {
                                      fileList: t.form.pics,
                                      name: "4",
                                      maxCount: 3,
                                      multiple: !0,
                                      previewFullImage: !0,
                                      uploadText: "点击上传",
                                      accept: "image",
                                    },
                                    on: {
                                      afterRead: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)),
                                          t.selectPic.apply(void 0, arguments);
                                      },
                                      delete: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)),
                                          t.deletePic.apply(void 0, arguments);
                                      },
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
                      e(
                        "v-uni-view",
                        { staticClass: "btn_box flex_box" },
                        [
                          e(
                            "v-uni-view",
                            {
                              staticClass: "cancle",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)),
                                    t.closeResubmit.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("取消")],
                          ),
                          e(
                            "v-uni-view",
                            {
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)),
                                    t.resubmitFun.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("确认")],
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
        n = [];
    },
    "3add": function (t, i, e) {
      "use strict";
      e("6a54");
      var s = e("f5bd").default;
      Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0);
      var a = s(e("9b1b")),
        n = s(e("2634")),
        o = s(e("2fdc"));
      e("0c26"),
        e("8f71"),
        e("bf0f"),
        e("dd2b"),
        e("c223"),
        e("aa9c"),
        e("7a76"),
        e("c9b5");
      var r = e("e74a"),
        u = s(e("2609")),
        f = e("15b8"),
        d = {
          data: function () {
            return {
              id: 0,
              info: {},
              form: { service_txt: "", pics: [] },
              rules: {
                service_txt: {
                  type: "string",
                  required: !0,
                  message: "请输入证明文字",
                  trigger: ["blur", "change"],
                },
                pics: {
                  type: "array",
                  required: !0,
                  message: "请上传证明图片",
                  trigger: ["blur", "change"],
                },
              },
              palte: "h5",
            };
          },
          computed: {
            auditStatusTips: function () {
              return this.info.audit_status || 0 === this.info.audit_status
                ? 0 == this.info.audit_status
                  ? "审核中，请耐心等待平台审核"
                  : 1 == this.info.audit_status
                    ? 1 == this.info.settle_status
                      ? "审核已通过，已结算资金到您的账户中"
                      : "审核已通过，等待系统或用户确认"
                    : 2 == this.info.audit_status
                      ? "审核被驳回，请补充证明材料后重新提交"
                      : 3 == this.info.audit_status
                        ? "订单经审核有问题，现已拒绝不予结算，有问题联系客服"
                        : ""
                : "";
            },
          },
          onLoad: function (t) {
            var i = this;
            (this.id = t.id),
              "resubmit" == t.action &&
                this.getDetail(function () {
                  2 == i.info.audit_status && i.openResubmit();
                });
          },
          onShow: function () {
            this.getDetail();
          },
          onPullDownRefresh: function () {
            var t = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  t.getDetail(),
                  uni.showToast({ title: "刷新成功", duration: 1e3 }),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          methods: {
            getDetail: function (t) {
              var i = this;
              uni.showLoading({ title: "加载中.." }),
                (0, r.send)(
                  "/wechat/Order/getSellerAuditDetail",
                  { id: this.id },
                  !1,
                ).then(function (e) {
                  uni.hideLoading();
                  var s = e.status,
                    a = e.msg,
                    n = e.data;
                  if (1 != s) return uni.$uv.toast(a);
                  (i.info = n),
                    n.up_config && i.initUpload(n.up_config),
                    "function" === typeof t && t();
                });
            },
            copyOrderNum: function (t) {
              uni.setClipboardData({
                data: t.trim(),
                success: function () {
                  return uni.$uv.toast("复制成功");
                },
                fail: function () {},
              });
            },
            jump: function (t) {
              uni.navigateTo({ url: t });
            },
            previewImage: function (t, i) {
              uni.previewImage({ current: t, urls: i });
            },
            openResubmit: function () {
              (this.form.service_txt = ""),
                (this.form.pics = []),
                this.$refs.popResubmit.open();
            },
            closeResubmit: function () {
              (this.form.pics = []),
                (this.form.service_txt = ""),
                this.$refs.popResubmit.close();
            },
            resubmitFun: function () {
              if (this.form.service_txt && this.form.service_txt.trim())
                if (this.form.pics && 0 !== this.form.pics.length) {
                  var t = this.form.pics.filter(function (t) {
                    return "uploading" === t.status;
                  });
                  if (t.length > 0) uni.$uv.toast("图片正在上传中，请稍候");
                  else {
                    var i = this.form.pics.filter(function (t) {
                      return !t.url;
                    });
                    i.length > 0
                      ? uni.$uv.toast("图片上传失败，请重新选择")
                      : this.resubmit();
                  }
                } else uni.$uv.toast("请上传证明图片");
              else uni.$uv.toast("请输入证明文字");
            },
            resubmit: function () {
              var t = this;
              uni.showLoading({ title: "提交中.." }),
                (0, r.send)(
                  "/wechat/Order/auditResubmit",
                  {
                    id: this.id,
                    pics: this.form.pics,
                    service_txt: this.form.service_txt,
                  },
                  !1,
                )
                  .then(function (i) {
                    uni.hideLoading();
                    var e = i.status,
                      s = i.msg;
                    i.data;
                    if (1 != e) return uni.$uv.toast(s);
                    uni.$uv.toast(s),
                      t.closeResubmit(),
                      setTimeout(function () {
                        t.getDetail();
                      }, 1500);
                  })
                  .catch(function (t) {
                    uni.hideLoading(), uni.$uv.toast("提交失败，请重试");
                  });
            },
            upImg: function (t, i) {
              var e = this;
              return (0, o.default)(
                (0, n.default)().mark(function s() {
                  var a;
                  return (0, n.default)().wrap(function (s) {
                    while (1)
                      switch ((s.prev = s.next)) {
                        case 0:
                          return (s.next = 2), (0, f.uploadCompressImgs)(t);
                        case 2:
                          (a = s.sent),
                            (0, r.send)(
                              "/wechat/Files/uploadBase64",
                              { label: "order", file: a },
                              !1,
                            )
                              .then(function (t) {
                                var s = t.status,
                                  a = t.code,
                                  n = t.msg,
                                  o = t.data,
                                  r = 1 == s || 1 == a;
                                if (!r) return uni.$uv.toast(n || "上传失败");
                                var u = o.fullurl || o.url || "";
                                if (!u)
                                  return uni.$uv.toast(
                                    "上传失败：未获取到图片地址",
                                  );
                                var f = e.form.pics[i];
                                e.form.pics.splice(
                                  i,
                                  1,
                                  Object.assign(f, {
                                    status: "success",
                                    message: "",
                                    url: u,
                                  }),
                                );
                              })
                              .catch(function (t) {
                                uni.$uv.toast("上传失败，请重试");
                              });
                        case 4:
                        case "end":
                          return s.stop();
                      }
                  }, s);
                }),
              )();
            },
            initUpload: function (t) {
              "mp-weixin" == this.palte &&
                t &&
                (this.uploader = new u.default({
                  domain: t.domain,
                  tokenUrl: t.token_url,
                  quality: 0.6,
                  prefix: t.prefix,
                }));
            },
            selectPic: function (t) {
              for (
                var i = [].concat(t.file), e = this.form.pics.length, s = 0;
                s < i.length;
                s++
              ) {
                var n = (0, a.default)(
                  (0, a.default)({}, i[s]),
                  {},
                  { status: "uploading", message: "上传中" },
                );
                this.form.pics.push(n);
                var o = e + s,
                  r = i[s].url;
                "h5" == this.palte && this.upImg(r, o),
                  "mp-weixin" == this.palte && this.selectWeappPic(r, o);
              }
            },
            selectWeappPic: function (t, i) {
              var e = this;
              return (0, o.default)(
                (0, n.default)().mark(function s() {
                  var a, o;
                  return (0, n.default)().wrap(
                    function (s) {
                      while (1)
                        switch ((s.prev = s.next)) {
                          case 0:
                            if (
                              ((s.prev = 0),
                              e.uploader &&
                                "function" ===
                                  typeof e.uploader.uploadWechatAvatar)
                            ) {
                              s.next = 3;
                              break;
                            }
                            throw new Error("上传组件未就绪");
                          case 3:
                            return (
                              (s.next = 5),
                              e.uploader.uploadWechatAvatar({ avatarUrl: t })
                            );
                          case 5:
                            (a = s.sent),
                              (o = e.form.pics[i]),
                              e.form.pics.splice(
                                i,
                                1,
                                Object.assign(o, {
                                  status: "success",
                                  message: "",
                                  url: a.url,
                                }),
                              ),
                              (s.next = 13);
                            break;
                          case 10:
                            (s.prev = 10),
                              (s.t0 = s["catch"](0)),
                              uni.showToast({
                                title:
                                  "发送失败: " + (s.t0.message || "未知错误"),
                                icon: "none",
                              });
                          case 13:
                          case "end":
                            return s.stop();
                        }
                    },
                    s,
                    null,
                    [[0, 10]],
                  );
                }),
              )();
            },
            deletePic: function (t) {
              this.form.pics.splice(t.index, 1);
            },
          },
        };
      i.default = d;
    },
    "702f": function (t, i, e) {
      "use strict";
      var s = e("f221e"),
        a = e.n(s);
      a.a;
    },
    "9fb0": function (t, i, e) {
      var s = e("c86c");
      (i = s(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-3d951f7f]{min-height:100vh;padding:0 %?0?% %?130?%}.status_box[data-v-3d951f7f]{padding:%?20?% %?30?% %?30?%;border-bottom:%?14?% solid #f8f8f8}.status_box .status[data-v-3d951f7f]{justify-content:flex-start}.status_box .status .tit[data-v-3d951f7f]{font-weight:700;font-size:16px}.status_box .intro[data-v-3d951f7f]{color:#999;margin-top:%?10?%}.seller_msg_box[data-v-3d951f7f]{margin:%?30?% auto 0;align-items:flex-start}.seller_msg_box .txt[data-v-3d951f7f]{width:100%}.seller_msg_box .txt .nickname[data-v-3d951f7f]{height:%?72?%;line-height:%?72?%;font-size:15px;font-weight:700}.seller_msg_box .txt .img_box[data-v-3d951f7f]{margin:%?4?% auto %?20?%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?30?%}.seller_msg_box .txt .img_box img[data-v-3d951f7f]{border-radius:%?15?%;width:%?162?%;height:%?162?%}.seller_msg_box .txt .tips[data-v-3d951f7f]{color:#999;margin:%?6?% auto;font-size:13px}.reject_box[data-v-3d951f7f]{margin:%?24?% %?30?% 0;padding:%?24?%;border-radius:%?20?%;background:linear-gradient(180deg,#fff7f1,#fff);box-shadow:0 %?6?% %?18?% rgba(253,100,0,.08);border:%?2?% solid rgba(253,100,0,.12)}.reject_box .reject_head[data-v-3d951f7f]{justify-content:space-between;align-items:center;margin-bottom:%?18?%}.reject_box .reject_tit[data-v-3d951f7f]{font-size:15px;font-weight:700;color:#222}.reject_box .reject_tag[data-v-3d951f7f]{padding:%?8?% %?18?%;border-radius:%?999?%;background:rgba(253,100,0,.12);color:#fd6400;font-size:12px;font-weight:700}.reject_box .reject_item[data-v-3d951f7f]{background:#fff;border-radius:%?16?%;padding:%?18?% %?20?%}.reject_box .reject_item + .reject_item[data-v-3d951f7f]{margin-top:%?16?%}.reject_box .reject_item .label[data-v-3d951f7f]{font-size:12px;color:#999;margin-bottom:%?10?%}.reject_box .reject_item .value[data-v-3d951f7f]{font-size:13px;color:#333;line-height:1.7;word-break:break-all}.reject_box .reject_item .type_value[data-v-3d951f7f]{color:#fd6400;font-weight:700}.top_box[data-v-3d951f7f]{padding:%?30?% 0;margin:0 %?30?%;border-bottom:%?2?% solid #eee}.top_box uni-view[data-v-3d951f7f]{font-size:13px;white-space:nowrap}.top_box .order_num[data-v-3d951f7f]{justify-content:flex-start;flex:1}.top_box .order_num .num[data-v-3d951f7f]{font-weight:700}.top_box .order_num .copy_btn[data-v-3d951f7f]{margin-left:%?12?%;color:#2979ff}.top_box .status[data-v-3d951f7f]{font-size:12px;font-weight:700}.msg_box[data-v-3d951f7f]{padding:0 %?30?%}.msg_box .goods_msg[data-v-3d951f7f]{margin:%?35?% auto %?45?%;padding-bottom:%?4?%}.msg_box .goods_msg .img[data-v-3d951f7f]{width:%?120?%;height:%?120?%;border-radius:%?10?%;position:relative;top:%?4?%}.msg_box .goods_msg .txt[data-v-3d951f7f]{width:calc(100% - %?145?%)}.msg_box .goods_msg .txt .price_box .price[data-v-3d951f7f]{color:#fd2c28;font-weight:700;font-size:18px}.msg_box .goods_msg .txt .price_box .price .unit[data-v-3d951f7f]{font-size:13px}.msg_box .goods_msg .txt .name[data-v-3d951f7f]{margin:%?6?% auto %?2?%;font-weight:700}.msg_box .goods_msg .txt .intro[data-v-3d951f7f]{font-size:13px;color:#999}.msg_box .tips[data-v-3d951f7f]{margin:%?28?% auto}.msg_box .tips uni-view[data-v-3d951f7f]{color:#999;font-size:14.4px}.msg_box .tips .tit[data-v-3d951f7f]{color:#444}.msg_box .tips .remark[data-v-3d951f7f]{flex:1;text-align:right;margin-left:%?150?%}.cash_box[data-v-3d951f7f]{background:#fff;position:fixed;left:0;right:0;bottom:0;max-width:480px;width:100%;margin:0 auto;box-shadow:0 0 %?10?% #ddd;padding:%?25?%;z-index:99}.cash_box .total_box[data-v-3d951f7f]{justify-content:flex-start}.cash_box .total_box .tit[data-v-3d951f7f]{font-size:12.4px;color:#666}.cash_box .total_box .price[data-v-3d951f7f]{color:#fd2c28;font-weight:700;font-size:17px}.cash_box .total_box .price .unit[data-v-3d951f7f]{font-size:12px}.cash_box .btn_box[data-v-3d951f7f]{justify-content:flex-end}.cash_box .btn_box uni-view[data-v-3d951f7f]{background:#ffe610;height:%?66?%;line-height:%?66?%;border-radius:%?66?%;font-weight:700;margin-left:%?25?%;padding:0 %?24?%;box-sizing:border-box}.cash_box .btn_box uni-view[data-v-3d951f7f]:first-child{margin-left:0}.ysShow[data-v-3d951f7f]{background:#fff;border-radius:%?30?%;padding:%?0?% %?46?% %?30?%;text-align:center}.ysShow .title[data-v-3d951f7f]{font-weight:700;padding:%?40?% 0;font-size:17px;margin-bottom:%?-25?%}.ysShow .con_box[data-v-3d951f7f] .uv-form-item{margin:%?40?% 0}.ysShow .con_box[data-v-3d951f7f] .uv-form-item__body{padding:%?0?%!important}.ysShow .con_box[data-v-3d951f7f] .uv-form-item__body .uv-upload__button{margin-bottom:0;margin-right:0}.ysShow .con_box[data-v-3d951f7f] .uv-form-item__body__right__message{margin:%?12?% 0 0!important;font-size:12.4px}.ysShow .btn_box[data-v-3d951f7f]{margin:%?25?% auto %?15?%}.ysShow .btn_box uni-view[data-v-3d951f7f]{background:#ffe610;width:42%;font-size:16px;font-weight:700;height:%?80?%;line-height:%?80?%;border-radius:%?80?%}.ysShow .btn_box uni-view.cancle[data-v-3d951f7f]{background:#eee;color:#999}',
          "",
        ]),
        (t.exports = i);
    },
    a427: function (t, i, e) {
      "use strict";
      e.r(i);
      var s = e("3add"),
        a = e.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return s[t];
            });
          })(n);
      i["default"] = a.a;
    },
    f221e: function (t, i, e) {
      var s = e("9fb0");
      s.__esModule && (s = s.default),
        "string" === typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      var a = e("967d").default;
      a("36e70095", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
//# sourceMappingURL=pages_sub1-order-audit_detail.6445d290.js.map
