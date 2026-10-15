(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-cat-index2"],
  {
    "1bc2": function (t, i, e) {
      "use strict";
      var s = e("60b5"),
        o = e.n(s);
      o.a;
    },
    "359d": function (t, i, e) {
      "use strict";
      e("6a54"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.default = void 0),
        e("bd06");
      var s = e("e74a"),
        o = e("a5ed5"),
        a =
          (e("4fbd"),
          {
            data: function () {
              return {
                list: [],
                child_list: [],
                chain: !0,
                tabs: [],
                cat1_id: 0,
                selected: 1,
                current: 0,
                cat2_id: 0,
                goods_list: [],
                goods: [],
                child_goods: [],
                num: 1,
                store_close: [],
                kefu: [],
                palte: "h5",
                goods_show_priced: 0,
                sub_status: 1,
                home_copy_right: 0,
                raffle_order_type: 0,
              };
            },
            computed: {
              height: function () {
                return uni.getSystemInfoSync().windowHeight - uni.upx2px(100);
              },
            },
            onPullDownRefresh: function () {
              var t = this;
              uni.showLoading({ title: "刷新中" }),
                setTimeout(function () {
                  uni.hideLoading(),
                    t.getCatList2(),
                    uni.showToast({ title: "刷新成功", duration: 1e3 }),
                    uni.stopPullDownRefresh();
                }, 300);
            },
            onLoad: function () {
              this.getCatList2();
            },
            methods: {
              getCatList2: function () {
                var t = this;
                uni.showLoading({ title: "加载中.." }),
                  (0, s.send)(
                    "/wechat/Cat/getCatList2",
                    { label: "cat", cat1_id: this.cat1_id },
                    !1,
                  ).then(function (i) {
                    uni.hideLoading();
                    var e = i.status,
                      s = i.msg,
                      o = i.data;
                    if (1 != e) return uni.$uv.toast(s);
                    (t.tabs = o.cat),
                      (t.list = o.list),
                      (t.store_close = o.store_close),
                      (t.kefu = o.kefu),
                      (t.home_copy_right = o.home_copy_right),
                      0 != t.cat1_id &&
                        (t.current = t.getIndexById(t.tabs, t.cat1_id)),
                      0 == o.auth_status && t.showArrears();
                  });
              },
              showArrears: function () {
                var t = this;
                return uni.showModal({
                  title: "温馨提示",
                  content:
                    "您好，目前系统处于欠费状态，暂时无法提交新订单。烦请客户尽快完成系统费用补缴，待系统恢复后即可正常发起下单操作。",
                  showCancel: !1,
                  success: function (i) {
                    i.confirm && t.getCatList2();
                  },
                });
              },
              specsOpen: function (t) {
                var i = this;
                1 == t.is_raffle
                  ? ((this.goods = t),
                    (this.child_goods = ""),
                    (this.child_list = []),
                    (this.goods_list = []),
                    (0, s.send)(
                      "/wechat/Raffle/getChildRaffleList",
                      { id: t.id },
                      !1,
                    ).then(function (t) {
                      var e = t.status,
                        s = (t.msg, t.data);
                      1 == e && s.list && s.list.length > 0
                        ? ((i.goods_list = s.list),
                          (i.raffle_order_type = s.order_type),
                          i.$refs.specsPop.open())
                        : ((i.raffle_order_type = s.order_type || 0), i.sub());
                    }))
                  : ((this.cat2_id = t.cat2_id),
                    (this.goods_list = []),
                    (this.goods = []),
                    (this.child_goods = []),
                    (this.child_list = []),
                    this.getGoodsListInCat());
              },
              getGoodsListInCat: function () {
                var t = this;
                uni.showLoading({ title: "加载中.." }),
                  (0, s.send)(
                    "/wechat/Goods/getGoodsListInCat",
                    { cat2_id: this.cat2_id },
                    !1,
                  ).then(function (i) {
                    uni.hideLoading();
                    var e = i.status,
                      s = i.msg,
                      o = i.data;
                    return 1 != e
                      ? uni.$uv.toast(s)
                      : o.list && 0 != o.list.length
                        ? ((t.goods_list = o.list),
                          (t.goods = t.goods_list[0]),
                          (t.goods_show_priced = o.goods_show_priced),
                          (t.child_goods = []),
                          t.getChildGoodsList(t.goods),
                          void t.$refs.specsPop.open())
                        : uni.$uv.toast("该分类下暂无商品规格");
                  });
              },
              jumpKefu: function () {
                "h5" == this.palte
                  ? 1 == this.kefu.kefu_h5_type || 3 == this.kefu.kefu_h5_type
                    ? (window.location.href = this.kefu.kefu_link)
                    : uni.switchTab({ url: "/pages/chat/list" })
                  : ((1 != this.kefu.kefu_weapp_type &&
                      4 != this.kefu.kefu_weapp_type) ||
                      wx.openCustomerServiceChat({
                        extInfo: { url: this.kefu.kefu_link },
                        corpId: this.kefu.kefu_corp_id,
                        success: function (t) {
                          console.log(t);
                        },
                      }),
                    2 == this.kefu.kefu_weapp_type &&
                      uni.switchTab({ url: "/pages/chat/list" }));
              },
              changeTabs: function (t) {
                (this.cat1_id = t.id),
                  uni.setStorageSync("cat1_id", this.cat1_id),
                  this.getCatList2();
              },
              change: function (t) {},
              getIndexById: function (t, i) {
                return t.findIndex(function (t) {
                  return t.id === i;
                });
              },
              jump: function (t) {
                uni.navigateTo({ url: t });
              },
              sub: function () {
                var t = this,
                  i = this;
                if (0 != this.sub_status)
                  return 1 == this.goods.is_raffle &&
                    this.goods_list.length > 0 &&
                    "" == this.child_goods
                    ? uni.$uv.toast("请选择转盘规格")
                    : 1 != this.goods.is_raffle &&
                        0 != this.goods.raffle_id &&
                        null != this.goods.raffle_id
                      ? uni.$uv.toast("抽奖商品不允许下单")
                      : 1 != this.goods.is_raffle &&
                          this.child_list.length > 0 &&
                          "" == this.child_goods
                        ? uni.$uv.toast("请选择详细规格")
                        : void (0, s.send)(
                            "/wechat/User/checkUserLoginStatus",
                            { label: "" },
                            !1,
                          ).then(function (e) {
                            var s = e.status,
                              a = e.msg,
                              n = e.data;
                            if (1 != s) return uni.$uv.toast(a);
                            if (1 == t.goods.is_vip && 0 == n.user_vip)
                              return uni.showModal({
                                title: "温馨提示",
                                content: "加入会员, 享会员折扣商品哦",
                                confirmColor: "#e64340",
                                confirmText: "点我开通",
                                cancelText: "暂不开通",
                                success: function (t) {
                                  t.confirm && i.jump("/pages/pay/vip");
                                },
                              });
                            if (1 == t.goods.is_raffle) {
                              var c =
                                  "" != t.child_goods
                                    ? t.child_goods.id
                                    : t.goods.id,
                                d =
                                  "" != t.child_goods &&
                                  void 0 !== t.child_goods.order_type
                                    ? t.child_goods.order_type
                                    : t.raffle_order_type;
                              1 == d
                                ? (0, o.goRaffle)(c)
                                : t.jump("/pages/pay/raffle?id=" + c);
                            } else
                              "" == t.child_goods
                                ? t.jump("/pages/pay/submit?id=" + t.goods.id)
                                : t.jump(
                                    "/pages/pay/submit?id=" + t.child_goods.id,
                                  );
                          });
              },
              previewImage: function (t) {
                var i = t;
                uni.previewImage({ current: i, urls: [t] });
              },
              selectGoods: function (t) {
                1 == this.goods.is_raffle
                  ? (this.child_goods = t)
                  : ((this.goods = t),
                    (this.child_goods = []),
                    (this.sub_status = 0),
                    this.getChildGoodsList(t));
              },
              getChildGoodsList: function (t) {
                var i = this;
                (0, s.send)(
                  "/wechat/Goods/getChildGoodsList",
                  { id: t.id },
                  !1,
                ).then(function (t) {
                  uni.hideLoading(), (i.sub_status = 1);
                  var e = t.status,
                    s = (t.msg, t.data);
                  i.child_list = 1 == e ? s : [];
                });
              },
              selectChildGoods: function (t) {
                this.child_goods = t;
              },
            },
          });
      i.default = a;
    },
    "4bd6": function (t, i, e) {
      "use strict";
      e.r(i);
      var s = e("359d"),
        o = e.n(s);
      for (var a in s)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return s[t];
            });
          })(a);
      i["default"] = o.a;
    },
    "60b5": function (t, i, e) {
      var s = e("a386");
      s.__esModule && (s = s.default),
        "string" === typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      var o = e("967d").default;
      o("4218fe63", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "8fbf": function (t, i, e) {
      "use strict";
      e.r(i);
      var s = e("ea03"),
        o = e("4bd6");
      for (var a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return o[t];
            });
          })(a);
      e("1bc2");
      var n = e("828b"),
        c = Object(n["a"])(
          o["default"],
          s["b"],
          s["c"],
          !1,
          null,
          "44929bc2",
          null,
          !1,
          s["a"],
          void 0,
        );
      i["default"] = c.exports;
    },
    a386: function (t, i, e) {
      var s = e("c86c");
      (i = s(!1)),
        i.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-44929bc2] .uv-popup__content{max-width:480px;width:100%}.specsShow[data-v-44929bc2]{background:#fff;border-radius:%?30?% %?30?% 0 0}.specsShow .goods_msg[data-v-44929bc2]{padding:%?32?% %?0?%;margin:%?0?% %?30?%;border-bottom:%?2?% solid #eee}.specsShow .goods_msg .img[data-v-44929bc2]{width:%?110?%;height:%?110?%;border-radius:%?10?%}.specsShow .goods_msg .txt[data-v-44929bc2]{width:calc(100% - %?135?%)}.specsShow .goods_msg .txt .name[data-v-44929bc2]{font-weight:700;font-size:15px}.specsShow .goods_msg .txt .price_box[data-v-44929bc2]{margin-top:%?14?%;justify-content:flex-start}.specsShow .goods_msg .txt .price_box .new_price[data-v-44929bc2]{color:#fd2c28;font-weight:700;font-size:17px}.specsShow .goods_msg .txt .price_box .new_price .unit[data-v-44929bc2]{font-size:12px}.specsShow .goods_msg .txt .price_box .old_price[data-v-44929bc2]{color:#999;margin-left:%?14?%;text-decoration:line-through}.specsShow .reason_box[data-v-44929bc2]{margin:%?32?% %?30?% %?50?%}.specsShow .reason_box .tit[data-v-44929bc2]{font-size:15px;font-weight:700;position:relative;z-index:10;display:inline-block;text-align:center}.specsShow .reason_box .tit[data-v-44929bc2]::before{z-index:-1;display:block;content:"";width:72%;height:%?20?%;border-radius:%?20?%;background:#ffe610;position:absolute;left:50%;bottom:%?6?%;-webkit-transform:translate(-50%);transform:translate(-50%)}.specsShow .reason_box .specs_grid[data-v-44929bc2]{margin:%?28?% auto 0;min-height:%?140?%;overflow-y:scroll}.specsShow .reason_box .specs_grid .col[data-v-44929bc2]{display:inline-block;float:left;margin-bottom:%?24?%;margin-right:%?24?%;padding:0 %?16?%;height:%?54?%;line-height:%?54?%;font-size:12px;text-overflow:ellipsis;white-space:nowrap;background:#eee;border-radius:%?10?%;color:#555;text-align:center;flex:0 0 auto}.specsShow .reason_box .specs_grid .col.cur[data-v-44929bc2]{background:#ffe610;color:#000}.specsShow .daohang_box[data-v-44929bc2]{background:#fff;box-shadow:0 0 %?10?% #ddd;padding:%?20?% %?30?%;position:relative\r\n  /* 覆盖微信按钮默认样式:比如边框 */}.specsShow .daohang_box .kefu_box .picture[data-v-44929bc2]{height:%?40?%;width:%?40?%;margin:0 auto %?2?%}.specsShow .daohang_box .kefu_box .kefu[data-v-44929bc2]{font-size:12px}.specsShow .daohang_box .up_button[data-v-44929bc2]{background-color:initial!important;font-size:12.2px;position:absolute;top:0;bottom:0;left:0;z-index:30!important;width:14vw!important;text-align:center!important;padding:0!important;line-height:%?340?%!important;-webkit-tap-highlight-color:transparent!important\r\n  /* 禁用点击高亮 */}.specsShow .daohang_box uni-button[data-v-44929bc2]::after{border:none!important;box-shadow:none!important;border-radius:0!important;\r\n  /* 如果需要也可重置圆角 */display:none!important}.specsShow .daohang_box .xiadan[data-v-44929bc2]{background:#ffe610;width:calc(100% - %?80?%);height:%?90?%;line-height:%?90?%;border-radius:%?90?%;font-size:15px;font-weight:700;text-align:center}.specsShow .daohang_box .xiadan.cancel[data-v-44929bc2]{background:#dadada}.content[data-v-44929bc2]{height:100vh;overflow:hidden}[data-v-44929bc2] .uv-sticky{top:0!important}[data-v-44929bc2] .uv-tabs{border-bottom:%?2?% solid #ddd}[data-v-44929bc2] .uv-tabs__wrapper__nav__item{min-width:20%;padding:0}[data-v-44929bc2] .uv-vtabs{height:calc(100vh - 95px)!important}[data-v-44929bc2] .uv-vtabs__bar{height:inherit!important}[data-v-44929bc2] .uv-vtabs__bar-item{padding:0!important;height:%?110?%;line-height:%?110?%;text-align:center;border-bottom:%?2?% solid #eee}[data-v-44929bc2] .uv-vtabs__bar-item-active{background:inherit!important}[data-v-44929bc2] .uv-vtabs__bar-item-active .uv-vtabs__bar-item--line{width:72%!important;height:%?20?%;border-radius:%?20?%;background:#ffe610!important;left:50%!important;top:47.4%!important;-webkit-transform:translate(-50%);transform:translate(-50%);z-index:1!important}[data-v-44929bc2] .uv-vtabs__bar-item-active--value{position:relative!important;z-index:2!important;color:#000!important;font-weight:700!important}[data-v-44929bc2] .uv-vtabs__content{height:calc(100vh - 120px)!important;padding:%?25?%!important;overflow:hidden!important}[data-v-44929bc2] .uv-vtabs__content .title{font-weight:700;font-size:15px}[data-v-44929bc2] .uv-vtabs__content .list{margin:%?24?% auto %?12?%}[data-v-44929bc2] .uv-vtabs__content .list .col{margin-bottom:%?17?%}[data-v-44929bc2] .uv-vtabs__content .list .col img{width:%?150?%;height:%?150?%;margin:0;border-radius:%?10?%;background:#f7f8fa}[data-v-44929bc2] .uv-vtabs__content .list .col .txt{width:calc(100% - %?170?%)}[data-v-44929bc2] .uv-vtabs__content .list .col .txt .tit{font-size:13px;font-weight:700;margin:%?2?% auto 0}[data-v-44929bc2] .uv-vtabs__content .list .col .txt .des{font-size:12px;color:#999;margin:%?6?% auto %?4?%}[data-v-44929bc2] .uv-vtabs__content .list .col .txt .cart_box .price_box{max-width:calc(100% - %?60?%)}[data-v-44929bc2] .uv-vtabs__content .list .col .txt .cart_box .price_box .new_price{color:#fd2c28;font-weight:700}[data-v-44929bc2] .uv-vtabs__content .list .col .txt .cart_box .price_box .old_price{text-decoration:line-through;color:#999;font-size:12px;margin-left:%?12?%}',
          "",
        ]),
        (t.exports = i);
    },
    a5ed5: function (t, i, e) {
      "use strict";
      e("6a54"),
        Object.defineProperty(i, "__esModule", { value: !0 }),
        (i.goRaffle = function (t) {
          return (0, s.send)(
            "/wechat/Raffle/getRaffleStyle",
            { label: "raffle", raffle_id: t },
            !1,
          )
            .then(function (i) {
              1 == i.status && i.data && 2 == i.data.style
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
      var s = e("e74a");
    },
    ea03: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return o;
      }),
        e.d(i, "c", function () {
          return a;
        }),
        e.d(i, "a", function () {
          return s;
        });
      var s = {
          uvSticky: e("9d51").default,
          uvTabs: e("2b48").default,
          uvVtabs: e("0c1b").default,
          uvVtabsItem: e("c9ab").default,
          uvIcon: e("1a07").default,
          uvPopup: e("ce8a").default,
        },
        o = function () {
          var t = this,
            i = t.$createElement,
            s = t._self._c || i;
          return s(
            "v-uni-view",
            { staticClass: "content" },
            [
              s(
                "uv-sticky",
                { attrs: { bgColor: "#fff" } },
                [
                  s("uv-tabs", {
                    attrs: {
                      list: t.tabs,
                      current: t.current,
                      lineColor: "#000",
                      activeStyle: {
                        color: "#000",
                        fontWeight: "bold",
                        transform: "scale(1.02)",
                      },
                    },
                    on: {
                      change: function (i) {
                        (arguments[0] = i = t.$handleEvent(i)),
                          t.changeTabs.apply(void 0, arguments);
                      },
                    },
                  }),
                ],
                1,
              ),
              s(
                "uv-vtabs",
                {
                  attrs: {
                    chain: t.chain,
                    list: t.list,
                    height: t.height,
                    hdHeight: "100rpx",
                  },
                  on: {
                    change: function (i) {
                      (arguments[0] = i = t.$handleEvent(i)),
                        t.change.apply(void 0, arguments);
                    },
                  },
                },
                [
                  t._l(t.list, function (i, e) {
                    return [
                      s(
                        "uv-vtabs-item",
                        { key: e, attrs: { index: e } },
                        [
                          s("v-uni-view", { staticClass: "title" }, [
                            t._v(t._s(i.name)),
                          ]),
                          s(
                            "v-uni-view",
                            { staticClass: "list" },
                            t._l(i.goods, function (i, e) {
                              return i
                                ? s(
                                    "v-uni-view",
                                    {
                                      key: e,
                                      staticClass: "col flex_box",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.specsOpen(i);
                                        },
                                      },
                                    },
                                    [
                                      s("img", {
                                        attrs: { src: i ? i.thumb : "" },
                                      }),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "txt" },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "tit to-line-1" },
                                            [t._v(t._s(i ? i.title : ""))],
                                          ),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "des to-line-2" },
                                            [t._v(t._s(i ? i.intro : ""))],
                                          ),
                                          s(
                                            "v-uni-view",
                                            {
                                              staticClass: "cart_box flex_box",
                                            },
                                            [
                                              s(
                                                "v-uni-view",
                                                { staticClass: "price_box" },
                                                [
                                                  s(
                                                    "v-uni-text",
                                                    {
                                                      staticClass: "new_price",
                                                    },
                                                    [
                                                      t._v(
                                                        "￥" +
                                                          t._s(
                                                            i ? i.price : "",
                                                          ),
                                                      ),
                                                    ],
                                                  ),
                                                  i.priced
                                                    ? s(
                                                        "v-uni-text",
                                                        {
                                                          staticClass:
                                                            "old_price",
                                                        },
                                                        [
                                                          t._v(
                                                            "￥" +
                                                              t._s(
                                                                i
                                                                  ? i.priced
                                                                  : "",
                                                              ),
                                                          ),
                                                        ],
                                                      )
                                                    : t._e(),
                                                ],
                                                1,
                                              ),
                                              s("uv-icon", {
                                                attrs: {
                                                  name: "shopping-cart",
                                                  color: "#fd2c28",
                                                  size: "24",
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
                                : t._e();
                            }),
                            1,
                          ),
                        ],
                        1,
                      ),
                    ];
                  }),
                  1 == t.home_copy_right ? s("copy-right") : t._e(),
                ],
                2,
              ),
              s("tab-bar", { attrs: { selected: t.selected } }),
              s(
                "uv-popup",
                {
                  ref: "specsPop",
                  attrs: { mode: "bottom", bgColor: "none", zIndex: "10075" },
                },
                [
                  s(
                    "v-uni-view",
                    { staticClass: "specsShow" },
                    [
                      "" == t.child_goods
                        ? s(
                            "v-uni-view",
                            { staticClass: "goods_msg flex_box" },
                            [
                              s("img", {
                                staticClass: "img",
                                attrs: { src: t.goods.thumb },
                                on: {
                                  click: function (i) {
                                    (arguments[0] = i = t.$handleEvent(i)),
                                      t.previewImage(t.goods.thumb);
                                  },
                                },
                              }),
                              s(
                                "v-uni-view",
                                { staticClass: "txt" },
                                [
                                  s(
                                    "v-uni-view",
                                    { staticClass: "name uv-line-1" },
                                    [t._v(t._s(t.goods.title))],
                                  ),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "price_box flex_box" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "new_price" },
                                        [
                                          s(
                                            "v-uni-text",
                                            { staticClass: "unit" },
                                            [t._v("￥")],
                                          ),
                                          s("v-uni-text", [
                                            t._v(t._s(t.goods.price)),
                                          ]),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "old_price" },
                                        [
                                          1 == t.goods_show_priced
                                            ? [t._v("￥")]
                                            : t._e(),
                                          t._v(
                                            " " + t._s(t.goods.priced) + " ",
                                          ),
                                        ],
                                        2,
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                            ],
                            1,
                          )
                        : s(
                            "v-uni-view",
                            { staticClass: "goods_msg flex_box" },
                            [
                              s("img", {
                                staticClass: "img",
                                attrs: { src: t.child_goods.thumb },
                                on: {
                                  click: function (i) {
                                    (arguments[0] = i = t.$handleEvent(i)),
                                      t.previewImage(t.child_goods.thumb);
                                  },
                                },
                              }),
                              s(
                                "v-uni-view",
                                { staticClass: "txt" },
                                [
                                  s(
                                    "v-uni-view",
                                    { staticClass: "name uv-line-1" },
                                    [t._v(t._s(t.child_goods.title))],
                                  ),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "price_box flex_box" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "new_price" },
                                        [
                                          s(
                                            "v-uni-text",
                                            { staticClass: "unit" },
                                            [t._v("￥")],
                                          ),
                                          s("v-uni-text", [
                                            t._v(t._s(t.child_goods.price)),
                                          ]),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "old_price" },
                                        [
                                          1 == t.goods_show_priced
                                            ? [t._v("￥")]
                                            : t._e(),
                                          t._v(
                                            " " +
                                              t._s(t.child_goods.priced) +
                                              " ",
                                          ),
                                        ],
                                        2,
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
                      s(
                        "v-uni-view",
                        { staticClass: "reason_box" },
                        [
                          s("v-uni-view", { staticClass: "tit" }, [
                            t._v(
                              t._s(
                                1 == t.goods.is_raffle
                                  ? "转盘规格"
                                  : "商品规格",
                              ),
                            ),
                          ]),
                          s(
                            "v-uni-view",
                            { staticClass: "specs_grid" },
                            t._l(t.goods_list, function (i, e) {
                              return s(
                                "v-uni-view",
                                {
                                  key: e,
                                  class: {
                                    col: !0,
                                    cur:
                                      (1 == t.goods.is_raffle
                                        ? t.child_goods.id
                                        : t.goods.id) == i.id,
                                  },
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.selectGoods(i);
                                    },
                                  },
                                },
                                [t._v(t._s(i.title))],
                              );
                            }),
                            1,
                          ),
                        ],
                        1,
                      ),
                      t.child_list.length > 0 && 1 != t.goods.is_raffle
                        ? s(
                            "v-uni-view",
                            { staticClass: "reason_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("详细规格"),
                              ]),
                              s(
                                "v-uni-view",
                                { staticClass: "specs_grid" },
                                t._l(t.child_list, function (i, e) {
                                  return s(
                                    "v-uni-view",
                                    {
                                      key: e,
                                      class: {
                                        col: !0,
                                        cur: t.child_goods.id == i.id,
                                      },
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            t.selectChildGoods(i);
                                        },
                                      },
                                    },
                                    [t._v(t._s(i.title))],
                                  );
                                }),
                                1,
                              ),
                            ],
                            1,
                          )
                        : t._e(),
                      s(
                        "v-uni-view",
                        { staticClass: "daohang_box flex_box" },
                        [
                          s(
                            "v-uni-view",
                            {
                              staticClass: "kefu_box",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)),
                                    t.jumpKefu();
                                },
                              },
                            },
                            [
                              s("img", {
                                staticClass: "picture",
                                attrs: { src: e("fd7e"), alt: "" },
                              }),
                              s("v-uni-view", { staticClass: "kefu" }, [
                                t._v("客服"),
                              ]),
                            ],
                            1,
                          ),
                          "mp-weixin" == t.palte && 3 == t.kefu.kefu_weapp_type
                            ? s("v-uni-button", {
                                staticClass: "up_button",
                                attrs: {
                                  "open-type": "contact",
                                  bindcontact: "handleContact",
                                },
                              })
                            : t._e(),
                          1 == t.store_close.online
                            ? [
                                1 == t.goods.is_raffle
                                  ? [
                                      s(
                                        "v-uni-view",
                                        {
                                          staticClass: "xiadan",
                                          on: {
                                            click: function (i) {
                                              (arguments[0] = i =
                                                t.$handleEvent(i)),
                                                t.sub.apply(void 0, arguments);
                                            },
                                          },
                                        },
                                        [t._v("立即下单")],
                                      ),
                                    ]
                                  : "上架中" == t.goods.status_text
                                    ? [
                                        1 == t.goods.limit1
                                          ? s(
                                              "v-uni-view",
                                              { staticClass: "xiadan cancel" },
                                              [t._v("24小时之内限制下1单")],
                                            )
                                          : 0 != t.goods.raffle_id
                                            ? s(
                                                "v-uni-view",
                                                {
                                                  staticClass: "xiadan cancel",
                                                },
                                                [t._v("当前商品暂不允许下单")],
                                              )
                                            : s(
                                                "v-uni-view",
                                                {
                                                  staticClass: "xiadan",
                                                  on: {
                                                    click: function (i) {
                                                      (arguments[0] = i =
                                                        t.$handleEvent(i)),
                                                        t.sub.apply(
                                                          void 0,
                                                          arguments,
                                                        );
                                                    },
                                                  },
                                                },
                                                [t._v("立即下单")],
                                              ),
                                      ]
                                    : "已售罄" == t.goods.status_text
                                      ? s(
                                          "v-uni-view",
                                          { staticClass: "xiadan cancel" },
                                          [t._v("商品已售罄")],
                                        )
                                      : "" == t.goods
                                        ? s(
                                            "v-uni-view",
                                            { staticClass: "xiadan cancel" },
                                            [t._v("请选择商品规格")],
                                          )
                                        : s(
                                            "v-uni-view",
                                            { staticClass: "xiadan cancel" },
                                            [
                                              t._v(
                                                "商品" +
                                                  t._s(t.goods.status_text),
                                              ),
                                            ],
                                          ),
                              ]
                            : s(
                                "v-uni-view",
                                { staticClass: "xiadan cancel" },
                                [t._v("商家已打烊")],
                              ),
                        ],
                        2,
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
        a = [];
    },
    fd7e: function (t, i) {
      t.exports =
        "data:image/png;base64,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";
    },
  },
]);
//# sourceMappingURL=pages-cat-index2.fde94c40.js.map
