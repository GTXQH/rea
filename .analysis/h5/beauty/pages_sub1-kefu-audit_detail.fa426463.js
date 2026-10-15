(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-kefu-audit_detail"],
  {
    "0c95": function (t, e, i) {
      "use strict";
      i("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("bf0f"),
        i("bd06"),
        i("8f71"),
        i("0c26");
      var s = i("e74a"),
        a = {
          data: function () {
            return {
              info: null,
              orderId: null,
              pendingList: [],
              pendingIndex: 0,
              pendingCount: 0,
              from: "pending",
              slideZone: null,
              touchStartY: 0,
              touchStartX: 0,
              lastSwitchTime: 0,
              switchThrottle: 2e3,
              user_level: null,
              vip_status: 1,
              showAllPrizes: !1,
              showAllServices: !1,
              rejectForm: { rejectType: 1, preset: -1, custom: "" },
              presetReasons: [],
              loading: !1,
            };
          },
          computed: {
            auditStatusTips: function () {
              return !this.info ||
                (0 !== this.info.audit_status &&
                  1 !== this.info.audit_status &&
                  2 !== this.info.audit_status &&
                  3 !== this.info.audit_status)
                ? ""
                : 0 == this.info.audit_status
                  ? "请审核该订单的服务证明材料"
                  : 1 == this.info.audit_status
                    ? "该订单已审核通过"
                    : 2 == this.info.audit_status
                      ? "该订单已驳回，待打手补充材料"
                      : 3 == this.info.audit_status
                        ? "该订单已直接拒绝"
                        : "";
            },
            canSwipe: function () {
              return "pending" === this.from;
            },
          },
          onLoad: function (t) {
            var e = this;
            (this.orderId = t.id),
              (this.from = t.from || "pending"),
              this.loadAuditConfig(),
              "pending" === this.from
                ? this.loadPendingList().then(function () {
                    e.loadDetail(e.orderId);
                  })
                : this.loadDetail(this.orderId);
          },
          methods: {
            loadAuditConfig: function () {
              var t = this;
              (0, s.send)("/wechat/Kefu/getAuditConfig", {}, !1).then(
                function (e) {
                  1 == e.status &&
                    e.data &&
                    e.data.reject_reasons &&
                    (t.presetReasons = e.data.reject_reasons);
                },
              );
            },
            loadPendingList: function () {
              var t = this;
              return new Promise(function (e) {
                (0, s.send)(
                  "/wechat/Kefu/getAuditList",
                  { tab: "pending", page: 1 },
                  !1,
                )
                  .then(function (i) {
                    if (1 == i.status) {
                      (t.pendingList = i.data.data || i.data.list || []),
                        (t.pendingCount = t.pendingList.length);
                      var s = t.pendingList.findIndex(function (e) {
                        return String(e.id) === String(t.orderId);
                      });
                      t.pendingIndex = s >= 0 ? s : 0;
                    }
                    e();
                  })
                  .catch(function () {
                    (t.pendingList = []), (t.pendingCount = 0), e();
                  });
              });
            },
            loadDetail: function (t) {
              var e = this;
              t &&
                (uni.showLoading({ title: "加载中.." }),
                (0, s.send)("/wechat/Kefu/getAuditDetail", { id: t }, !1)
                  .then(function (i) {
                    uni.hideLoading(),
                      1 == i.status
                        ? ((e.info = i.data),
                          (e.orderId = t),
                          (e.user_level = i.data.user_level || null))
                        : uni.$uv.toast(i.msg || "加载失败");
                  })
                  .catch(function () {
                    uni.hideLoading(), uni.$uv.toast("加载失败");
                  }));
            },
            onTouchStart: function (t) {
              (this.touchStartY = t.touches[0].clientY),
                (this.touchStartX = t.touches[0].clientX);
            },
            onTouchMove: function (t) {
              if (this.canSwipe) {
                var e = t.touches[0].clientY,
                  i = t.touches[0].clientX,
                  s = e - this.touchStartY,
                  a = i - this.touchStartX;
                Math.abs(s) > 80 &&
                  Math.abs(s) > Math.abs(a) &&
                  (s < 0 ? this.switchOrder(1) : this.switchOrder(-1),
                  (this.touchStartY = e),
                  (this.touchStartX = i));
              }
            },
            onTouchEnd: function (t) {
              this.slideZone = null;
            },
            switchOrder: function (t) {
              if (!this.loading) {
                var e = Date.now();
                if (!(e - this.lastSwitchTime < this.switchThrottle)) {
                  var i = this.pendingIndex + t;
                  if (i < 0) uni.$uv.toast("已到顶部");
                  else if (i >= this.pendingList.length)
                    uni.$uv.toast("已滑到底部");
                  else {
                    (this.lastSwitchTime = e), (this.pendingIndex = i);
                    var s = this.pendingList[i];
                    s &&
                      (uni.showLoading({ title: "切换中.." }),
                      this.loadDetail(s.id));
                  }
                }
              }
            },
            onBtnTouchStart: function (t, e) {
              this.slideZone = e;
            },
            onBtnTouchEnd: function () {
              this.slideZone &&
                ("right" === this.slideZone
                  ? this.doPass()
                  : "left" === this.slideZone && this.openReject(),
                (this.slideZone = null));
            },
            doPass: function () {
              var t = this;
              this.loading ||
                (this.info &&
                  uni.showModal({
                    title: "确认通过",
                    content: "确定审核通过该订单吗？",
                    success: function (e) {
                      e.confirm && t.submitPass();
                    },
                  }));
            },
            submitPass: function () {
              var t = this;
              (this.loading = !0),
                uni.showLoading({ title: "审核中.." }),
                (0, s.send)("/wechat/Kefu/auditPass", { id: this.info.id }, !1)
                  .then(function (e) {
                    uni.hideLoading(),
                      (t.loading = !1),
                      1 == e.status
                        ? (uni.$uv.toast("审核通过成功"),
                          t.removeFromPending(t.info.id),
                          t.goNextPending())
                        : uni.$uv.toast(e.msg || "操作失败");
                  })
                  .catch(function () {
                    uni.hideLoading(),
                      (t.loading = !1),
                      uni.$uv.toast("操作失败");
                  });
            },
            removeFromPending: function (t) {
              (this.pendingList = this.pendingList.filter(function (e) {
                return String(e.id) !== String(t);
              })),
                (this.pendingCount = this.pendingList.length),
                this.pendingIndex >= this.pendingList.length &&
                  (this.pendingIndex = this.pendingList.length - 1),
                this.pendingIndex < 0 && (this.pendingIndex = 0);
            },
            goNextPending: function () {
              if (0 === this.pendingList.length)
                return (
                  uni.showToast({
                    title: "已完成所有审核",
                    icon: "success",
                    duration: 1500,
                  }),
                  void setTimeout(function () {
                    uni.navigateBack();
                  }, 1500)
                );
              var t = this.pendingList[this.pendingIndex];
              t && this.loadDetail(t.id);
            },
            openReject: function () {
              (this.rejectForm = { rejectType: 1, preset: -1, custom: "" }),
                this.$refs.rejectPop.open();
            },
            closeReject: function () {
              this.$refs.rejectPop.close();
            },
            selectRejectType: function (t) {
              this.rejectForm.rejectType = t;
            },
            selectPreset: function (t) {
              this.rejectForm.preset === t
                ? (this.rejectForm.preset = -1)
                : ((this.rejectForm.preset = t), (this.rejectForm.custom = ""));
            },
            confirmReject: function () {
              var t = "";
              this.rejectForm.preset >= 0
                ? (t = this.presetReasons[this.rejectForm.preset])
                : this.rejectForm.custom.trim() &&
                  (t = this.rejectForm.custom.trim()),
                t
                  ? this.submitReject(t)
                  : uni.$uv.toast("请选择或输入拒绝原因");
            },
            submitReject: function (t) {
              var e = this;
              (this.loading = !0),
                uni.showLoading({ title: "审核中.." }),
                (0, s.send)(
                  "/wechat/Kefu/auditReject",
                  {
                    id: this.info.id,
                    reject_type: this.rejectForm.rejectType,
                    reject_reason: t,
                  },
                  !1,
                )
                  .then(function (t) {
                    uni.hideLoading(),
                      (e.loading = !1),
                      1 == t.status
                        ? (uni.$uv.toast("驳回成功"),
                          e.closeReject(),
                          e.removeFromPending(e.info.id),
                          e.goNextPending())
                        : uni.$uv.toast(t.msg || "操作失败");
                  })
                  .catch(function () {
                    uni.hideLoading(),
                      (e.loading = !1),
                      uni.$uv.toast("操作失败");
                  });
            },
            previewImage: function (t, e) {
              uni.previewImage({ current: t, urls: e });
            },
            copyOrderNum: function (t) {
              uni.setClipboardData({
                data: String(t),
                success: function () {
                  uni.$uv.toast("复制成功");
                },
              });
            },
            previewGoods: function () {
              this.info &&
                this.info.goods_thumb &&
                uni.previewImage({
                  current: this.info.goods_thumb,
                  urls: [this.info.goods_thumb],
                });
            },
            getStatusClass: function (t) {
              return 0 == t
                ? "status-pending"
                : 1 == t
                  ? "status-passed"
                  : 2 == t
                    ? "status-reject-supplement"
                    : 3 == t
                      ? "status-reject-final"
                      : "";
            },
          },
        };
      e.default = a;
    },
    "0ea7": function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("0c95"),
        a = i.n(s);
      for (var n in s)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return s[t];
            });
          })(n);
      e["default"] = a.a;
    },
    "145e": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3dpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDkuMS1jMDAxIDc5LjE0NjI4OTk3NzcsIDIwMjMvMDYvMjUtMjM6NTc6MTQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NmYxZjUzOTEtODYwOS02NTQ1LWJmMmUtZGI1YTlhNTBhYzY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0Q0VFMDZDMjZDQTExRjE4Q0Y1QjMwMkYyRjU2RTMxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkU0Q0VFMDZCMjZDQTExRjE4Q0Y1QjMwMkYyRjU2RTMxIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyNS4wIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlmNzcxMjA0LTVlNTMtMjc0Ni04NGRmLWExMzY1OTAwMmJiYiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ZjFmNTM5MS04NjA5LTY1NDUtYmYyZS1kYjVhOWE1MGFjNjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4TL8/LAAACn0lEQVR42uycTYhNYRjH33sIaTJDKZONSON7YTEbVhYWJCmUjXwtTFmQlY8RQ2wQEYNJkoaIpSwsiDJlFLJQVqbGiMmYpnxlXL/nGjU0necdjDn33v+v/ptbM/f063nee973PPfm8q+qOkMIz8kT8ojcC9VdL4L4hRyi8gO8/pLcJNfIXcR9k6iBRfWnjZwjpxD2TqJ8egqyQjiMsE6J8nlPdpIz5dSSyR/8TVVfZT0IHeOnS5RPLWlF1iqJ8hlHriLrAMlJlM8uch5ZIyXKZx25iKwREuWzhjSWYhsmQ/A/N5F6iYpjL1W1QqIibmT71qsaifKpIM3IGiVRPvPJwXLd6w2WXrKQfWGLKiodu69qogVHS5TPbLJNrRfHBzKTFmxTRaUzNtihn1ovipWsVQskKu5G9Ggx7gWTYXhPO/ArusO+/7mY98eeG85iYf+qikrHzto3qKLiaC8Iq+76qIpKZzKpU0XF8ZZMo6p6VFHpTCRbVVFxdJOpWZ9rSDJwDZVkhyoqjk+kJssb5iQj1zGG7FPrxbGWPeBciYq7lkMSFcdSqmqRRMVxPIvDHlkUNSeLW5us3B78jo0/2jFMhyoqHRt/PKbWi2M1a9UyiYrjLLImSJTPJHJaouJbcL1ExXESWfMkyseeMtuYdqVE+dj0XvNwTR0XkyhjCTkhUXHUUVX7JSqO3ciql6g4GpC1p9w3xYOhkWxhA92rikpnM7lOdVVIlM9y0oKsGRLlYwO1D5G1cSgG1UpJlGHt10RuIWuKRPksJk+Rtf1fzbeXwqeehz19tkf2V/7mW/XlIOonz8gRchlhnyXK53WwY5sQLiCsXaJ8rA3vkEvkBtK6JcrnC7lPbhc+MUN4jLi8RPm8KdyT2Q9g/PipqNbvAgwAJivLjh1gJNUAAAAASUVORK5CYII=";
    },
    "295b": function (t, e, i) {
      var s = i("c86c"),
        a = i("2ec5"),
        n = i("145e"),
        o = i("3898");
      e = s(!1);
      var r = a(n),
        c = a(o);
      e.push([
        t.i,
        '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-0b637212]{min-height:100vh;background:#f8f8f8;padding-bottom:%?200?%}.audit_detail[data-v-0b637212]{padding:0 0 %?10?%}.status_box[data-v-0b637212]{padding:%?20?% %?30?% %?30?%;border-bottom:%?14?% solid #f8f8f8}.status_box .status[data-v-0b637212]{justify-content:flex-start}.status_box .status .tit[data-v-0b637212]{font-weight:700;font-size:16px}.status_box .status .tit.status-pending[data-v-0b637212]{color:#fd6400}.status_box .status .tit.status-passed[data-v-0b637212]{color:#155724}.status_box .status .tit.status-reject-supplement[data-v-0b637212]{color:#fd2c28}.status_box .status .tit.status-reject-final[data-v-0b637212]{color:#fd2c28}.status_box .intro[data-v-0b637212]{color:#999;margin-top:%?10?%}.status_box .seller_msg_box[data-v-0b637212]{margin:%?30?% auto 0;align-items:flex-start}.status_box .seller_msg_box .head[data-v-0b637212]{width:%?80?%;height:%?80?%;border-radius:100%;margin-right:%?20?%}.status_box .seller_msg_box .txt[data-v-0b637212]{width:calc(100% - %?100?%)}.status_box .seller_msg_box .txt .nickname[data-v-0b637212]{height:%?72?%;line-height:%?72?%;font-size:15px;font-weight:700}.status_box .seller_msg_box .txt .img_box[data-v-0b637212]{margin:%?4?% auto %?20?%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?30?%}.status_box .seller_msg_box .txt .img_box img[data-v-0b637212]{border-radius:%?15?%;width:%?162?%;height:%?162?%}.status_box .seller_msg_box .txt .tips[data-v-0b637212]{color:#666;margin:%?6?% auto;font-size:13px}.status_box .reject_box[data-v-0b637212]{margin-top:%?24?%;padding:%?24?%;border-radius:%?20?%;background:linear-gradient(180deg,#fff7f1,#fff);box-shadow:0 %?6?% %?18?% rgba(253,100,0,.08);border:%?2?% solid rgba(253,100,0,.12)}.status_box .reject_box .reject_head[data-v-0b637212]{justify-content:space-between;align-items:center;margin-bottom:%?18?%}.status_box .reject_box .reject_tit[data-v-0b637212]{font-size:15px;font-weight:700;color:#222;margin:0}.status_box .reject_box .reject_tag[data-v-0b637212]{padding:%?8?% %?18?%;border-radius:%?999?%;background:rgba(253,100,0,.12);color:#fd6400;font-size:12px;font-weight:700}.status_box .reject_box .reject_item[data-v-0b637212]{background:#fff;border-radius:%?16?%;padding:%?18?% %?20?%}.status_box .reject_box .reject_item + .reject_item[data-v-0b637212]{margin-top:%?16?%}.status_box .reject_box .reject_item .label[data-v-0b637212]{font-size:12px;color:#999;margin-bottom:%?10?%}.status_box .reject_box .reject_item .value[data-v-0b637212]{font-size:13px;color:#333;line-height:1.7;word-break:break-all}.status_box .reject_box .reject_item .type_value[data-v-0b637212]{color:#fd6400;font-weight:700}.user_msg_flex[data-v-0b637212]{justify-content:center;border-bottom:%?14?% solid #f8f8f8;padding:12px 4px}.user_msg_flex .head_msg_box[data-v-0b637212]{margin-right:10px;display:flex;flex-direction:column;justify-content:space-between;max-width:calc(100% - 255px)}.user_msg_flex .head_msg_box .head_frame_box[data-v-0b637212]{display:flex;align-items:center;justify-content:center;position:relative;width:80px;height:80px}.user_msg_flex .head_msg_box .head_frame_box .head_frame[data-v-0b637212]{position:absolute;z-index:10;pointer-events:none}.user_msg_flex .head_msg_box .head_frame_box .head[data-v-0b637212]{position:absolute;z-index:9;width:60px;height:60px;border-radius:100%}.user_msg_flex .head_msg_box .id[data-v-0b637212]{color:#555;font-size:12px;text-align:center;margin-top:1px}.user_msg_flex .name_rights[data-v-0b637212]{width:245px}.user_msg_flex .name_rights .name_box[data-v-0b637212]{display:flex;align-items:center;justify-content:flex-start;margin-top:2px}.user_msg_flex .name_rights .name_box .nickname[data-v-0b637212]{font-size:15px;font-weight:700;max-width:calc(100% - 80px);text-overflow:ellipsis;white-space:nowrap}.user_msg_flex .name_rights .name_box .level[data-v-0b637212]{width:47px;height:14px;object-fit:contain;margin:0 6px 0 7px}.user_msg_flex .name_rights .name_box .vip[data-v-0b637212]{width:20px;height:18px;object-fit:contain;-webkit-filter:grayscale(100%);filter:grayscale(100%)}.user_msg_flex .name_rights .name_box.is_vip .nickname[data-v-0b637212]{color:red}.user_msg_flex .name_rights .name_box.is_vip .vip[data-v-0b637212]{-webkit-filter:grayscale(0);filter:grayscale(0)}.user_msg_flex .name_rights .rights_grid[data-v-0b637212]{margin-top:11px;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:4px}.user_msg_flex .name_rights .rights_grid .rights[data-v-0b637212]{width:79px;height:23px;line-height:23px;border-radius:23px;background:#e30000;color:#fff;font-size:11px;text-align:center;white-space:nowrap}.proof_box .block_title[data-v-0b637212]{padding:%?24?% %?30?%}.top_box[data-v-0b637212]{padding:%?30?% 0;margin:0 %?30?%;border-bottom:%?2?% solid #eee}.top_box uni-view[data-v-0b637212]{font-size:13px;white-space:nowrap}.top_box .order_num[data-v-0b637212]{justify-content:flex-start;flex:1}.top_box .order_num .num[data-v-0b637212]{font-weight:700}.top_box .order_num .copy_btn[data-v-0b637212]{margin-left:%?12?%;color:#2979ff}.top_box .status[data-v-0b637212]{font-size:12px;font-weight:700}.top_box .status.status-pending[data-v-0b637212]{color:#fd6400}.top_box .status.status-passed[data-v-0b637212]{color:#155724}.top_box .status.status-reject-supplement[data-v-0b637212]{color:#fd2c28}.top_box .status.status-reject-final[data-v-0b637212]{color:#fff;background:#fd2c28;padding:%?4?% %?12?%;border-radius:%?8?%}\r\n/* 增值服务明细 */.order_service_box[data-v-0b637212]{padding:0 %?30?% %?30?%}.order_service_box .show_more[data-v-0b637212]{text-align:center;color:#ff6a00;font-size:14px;margin-top:%?12?%;padding-top:%?12?%;border-top:%?1?% dashed #eee}.order_service_box .order_service_title[data-v-0b637212]{font-size:15px;color:#333;font-weight:700;margin:%?30?% auto %?10?%}.order_service_box .order_service_item[data-v-0b637212]{padding:%?20?% 0;border-bottom:%?2?% solid #f2f2f2}.order_service_box .order_service_item[data-v-0b637212]:last-child{border-bottom:none}.order_service_box .order_service_item .os_img[data-v-0b637212]{width:%?80?%;height:%?80?%;border-radius:%?8?%;margin-right:%?16?%;flex-shrink:0}.order_service_box .order_service_item .os_info[data-v-0b637212]{flex:1;min-width:0;margin-right:%?16?%}.order_service_box .order_service_item .os_info .os_name[data-v-0b637212]{font-size:13.5px;color:#333}.order_service_box .order_service_item .os_info .os_intro[data-v-0b637212]{font-size:12.4px;color:#999;margin-top:%?6?%}.order_service_box .order_service_item .os_right[data-v-0b637212]{display:flex;flex-direction:column;align-items:flex-end;flex-shrink:0}.order_service_box .order_service_item .os_right .os_num[data-v-0b637212]{font-size:12.4px;color:#999;margin-bottom:%?4?%}.order_service_box .order_service_item .os_right .os_price[data-v-0b637212]{color:#fd2c28;font-weight:700;font-size:14.4px}.line_box[data-v-0b637212]{height:%?14?%;background:#f8f8f8}.msg_box[data-v-0b637212]{padding:0 %?30?%}.msg_box .goods_msg[data-v-0b637212]{margin:%?35?% auto %?25?%;padding-bottom:%?4?%}.msg_box .goods_msg .img[data-v-0b637212]{width:%?120?%;height:%?120?%;border-radius:%?10?%;position:relative;top:%?4?%}.msg_box .goods_msg .txt[data-v-0b637212]{width:calc(100% - %?145?%)}.msg_box .goods_msg .txt .price_box .price[data-v-0b637212]{color:#fd2c28;font-weight:700;font-size:18px}.msg_box .goods_msg .txt .price_box .price .unit[data-v-0b637212]{font-size:13px}.msg_box .goods_msg .txt .name[data-v-0b637212]{margin:%?6?% auto %?2?%;font-weight:700}.msg_box .goods_msg .txt .intro[data-v-0b637212]{font-size:13px;color:#999}.msg_box .tips[data-v-0b637212]{margin:%?18?% auto}.msg_box .tips uni-view[data-v-0b637212]{color:#999;font-size:14.4px}.msg_box .tips .tit[data-v-0b637212]{color:#444}.msg_box .tips .copy_btn[data-v-0b637212]{margin-left:%?14?%;color:#2979ff}.msg_box .tips .remark[data-v-0b637212]{flex:1;text-align:right;margin-left:%?150?%}.block_title[data-v-0b637212]{background:#f8f8f8;padding:%?36?% %?30?%}.reason_box[data-v-0b637212]{padding:%?8?% %?30?%;box-sizing:border-box;align-items:flex-start}.reason_box .tit[data-v-0b637212]{font-size:15px;font-weight:700;position:relative;z-index:10}.reason_box .tit[data-v-0b637212]::before{z-index:-1;display:block;content:"";width:72%;height:%?20?%;border-radius:%?20?%;background:#ffe610;position:absolute;left:50%;bottom:%?6?%;-webkit-transform:translate(-50%);transform:translate(-50%)}.reason_box .txt[data-v-0b637212]{width:calc(100% - %?150?%);color:#666}.img_box[data-v-0b637212]{margin:%?10?% auto %?20?%;padding:0 %?30?%;display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?25?%}.img_box img[data-v-0b637212]{border-radius:%?15?%;width:%?162?%;height:%?162?%}.reject_box[data-v-0b637212]{background:#fff1d4;border-radius:%?10?%;padding:%?16?%;margin:%?20?% %?30?%}.reject_box .reject_tit[data-v-0b637212]{font-size:13px;font-weight:700;color:#fd6400;margin-bottom:%?6?%}.reject_box .reject_txt[data-v-0b637212]{font-size:13px;color:#666}.service_member_card[data-v-0b637212]{position:relative;margin:%?30?% auto}.service_member_card uni-view[data-v-0b637212]{text-align:center;white-space:nowrap}.service_member_card .tip_box[data-v-0b637212]{background:#a387f1;position:absolute;z-index:9;top:7px;right:7px;height:36px;line-height:28px;font-size:12px;color:#fff;border-radius:0 12px 0 0;width:calc(100% - 95px - 11px);padding:0 12px 0 23px}.service_member_card .card_box[data-v-0b637212]{position:relative;z-index:10}.service_member_card .card_box .card_title[data-v-0b637212]{position:relative;z-index:0;border-radius:12px 0 0 0;height:36px;background:#ffe610;justify-content:flex-start;position:relative;overflow:visible;width:95px;padding-top:6px;padding-left:14px}.service_member_card .card_box .card_title img[data-v-0b637212]{width:20px;height:20px;margin-right:7px}.service_member_card .card_box .card_title .title[data-v-0b637212]{font-weight:700;font-size:12.6px}.service_member_card .card_box .card_title[data-v-0b637212]::before{content:"";display:block;height:inherit;width:28px;right:-28px;background:url(' +
          r +
          ");background-position:0 0;background-repeat:no-repeat;background-size:100% 100%;position:absolute;top:0;bottom:0}.service_member_card .card_box .card_main[data-v-0b637212]{position:relative;z-index:1;border-radius:0 12px 12px 12px;background:#ffe610;padding:%?0?% 12px;margin-top:-2px}.service_member_card .card_box .card_main .worker_list .worker[data-v-0b637212]{margin:18px auto}.service_member_card .card_box .card_main .worker_list .worker .worker_msg[data-v-0b637212]{flex:1;justify-content:flex-start}.service_member_card .card_box .card_main .worker_list .worker .worker_msg .head[data-v-0b637212]{width:52px;height:52px;border-radius:100%;margin-right:14px}.service_member_card .card_box .card_main .worker_list .worker .worker_msg .nickname_box[data-v-0b637212]{flex:1}.service_member_card .card_box .card_main .worker_list .worker .worker_msg .nickname_box uni-view[data-v-0b637212]{text-align:left}.service_member_card .card_box .card_main .worker_list .worker .worker_msg .nickname_box .nickname[data-v-0b637212]{font-size:15px;font-weight:700;text-overflow:ellipsis}.service_member_card .card_box .card_main .worker_list .worker .worker_msg .nickname_box .id[data-v-0b637212]{color:#666;margin-top:6px;font-size:13px}.service_member_card.service_member_card_second .tip_box[data-v-0b637212]{background:#231924!important}.service_member_card.service_member_card_second .card_box .card_title[data-v-0b637212],\r\n.service_member_card.service_member_card_second .card_box .card_main[data-v-0b637212]{background:#f8b8ff!important}.service_member_card.service_member_card_second .card_box .card_title[data-v-0b637212]::before{background-image:url(" +
          c +
          ")}.bottom_placeholder[data-v-0b637212]{height:%?40?%}.prize_list_box[data-v-0b637212]{background:#fffbe6;border-radius:%?16?%;padding:%?24?%;margin-bottom:%?24?%;border:%?2?% solid #ffe066}.prize_list_box .prize_list_title[data-v-0b637212]{font-size:16px;font-weight:700;color:#d4a800;margin-bottom:%?16?%}.prize_list_box .prize_list[data-v-0b637212]{display:flex;flex-direction:column;gap:%?12?%}.prize_list_box .prize_item[data-v-0b637212]{background:#fff;border-radius:%?12?%;padding:%?12?%;align-items:center}.prize_list_box .prize_item .prize_img[data-v-0b637212]{width:%?80?%;height:%?80?%;border-radius:%?8?%;margin-right:%?16?%}.prize_list_box .prize_item .prize_txt[data-v-0b637212]{flex:1;display:flex;align-items:center;gap:%?8?%}.prize_list_box .prize_item .prize_txt .prize_label[data-v-0b637212]{background:linear-gradient(135deg,#ff6a00,#ff8c00);color:#fff;font-size:10px;padding:%?2?% %?8?%;border-radius:%?4?%;font-weight:700}.prize_list_box .prize_item .prize_txt .prize_name[data-v-0b637212]{font-size:14px;color:#333}.prize_list_box .prize_item .prize_count[data-v-0b637212]{font-size:14px;color:#999;font-weight:700}.prize_list_box .show_more[data-v-0b637212]{text-align:center;color:#ff6a00;font-size:14px;margin-top:%?12?%;padding-top:%?12?%;border-top:%?1?% dashed #ffe066}.empty_tip[data-v-0b637212]{text-align:center;padding:%?100?% 0;color:#999;font-size:14px}.audit_bar[data-v-0b637212]{position:fixed;left:0;right:0;bottom:0;max-width:480px;width:100%;margin:0 auto;background:#fff;display:flex;align-items:center;justify-content:space-between;padding:%?20?% %?24?% calc(%?20?% + env(safe-area-inset-bottom));box-shadow:0 %?-4?% %?20?% rgba(0,0,0,.08);z-index:999;gap:%?16?%}.audit_bar.disabled_bar[data-v-0b637212]{justify-content:center}.audit_bar.disabled_bar .disabled_text[data-v-0b637212]{font-size:15px;color:#999;font-weight:700}.slide_btn[data-v-0b637212]{flex:1;height:%?100?%;border-radius:%?20?%;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:all .2s ease;position:relative;overflow:hidden}.slide_btn.reject_btn[data-v-0b637212]{background:#fff;border:%?4?% solid #fd2c28;color:#fd2c28}.slide_btn.reject_btn.active[data-v-0b637212]{background:#fd2c28;color:#fff;-webkit-transform:scale(1.02);transform:scale(1.02);box-shadow:0 %?8?% %?30?% rgba(253,44,40,.4)}.slide_btn.pass_btn[data-v-0b637212]{background:#fff;border:%?4?% solid #6dff26;color:#22a447}.slide_btn.pass_btn.active[data-v-0b637212]{background:#6dff26;color:#fff;-webkit-transform:scale(1.02);transform:scale(1.02);box-shadow:0 %?8?% %?30?% rgba(109,255,38,.4)}.slide_btn .slide_text[data-v-0b637212]{display:flex;align-items:center;gap:%?12?%}.slide_btn .slide_text .icon[data-v-0b637212]{font-size:32px;font-weight:700}.slide_btn .slide_text .label[data-v-0b637212]{font-size:18px;font-weight:700}.slide_btn .slide_indicator[data-v-0b637212]{position:absolute;bottom:%?8?%;font-size:10px;opacity:.8}.center_hint[data-v-0b637212]{display:flex;flex-direction:column;align-items:center;justify-content:center;min-width:%?120?%}.center_hint .hint_text[data-v-0b637212]{display:flex;flex-direction:column;align-items:center;gap:%?4?%;font-size:12px;color:#999}.center_hint .hint_text .arrow_up[data-v-0b637212]{color:#fd6400;font-size:16px}.center_hint .hint_text .arrow_down[data-v-0b637212]{color:#2979ff;font-size:16px}.center_hint .order_count[data-v-0b637212]{font-size:16px;font-weight:700;color:#333;margin-top:%?6?%;background:#f5f5f5;padding:%?6?% %?20?%;border-radius:%?20?%}.reject_pop[data-v-0b637212]{background:#fff;border-radius:%?28?%;padding:%?40?% %?36?% %?30?%;width:%?640?%;max-width:90vw;margin:0 auto;text-align:center}.reject_pop .pop_title[data-v-0b637212]{font-size:18px;font-weight:700;color:#333;margin-bottom:%?24?%}.reject_pop .reject_type_list[data-v-0b637212]{display:flex;gap:%?16?%;margin-bottom:%?24?%}.reject_pop .reject_type_list .reject_type_item[data-v-0b637212]{flex:1;background:#f5f5f5;border-radius:%?12?%;padding:%?16?% %?12?%;transition:all .2s;border:%?2?% solid transparent}.reject_pop .reject_type_list .reject_type_item .type_title[data-v-0b637212]{font-size:14px;font-weight:700;color:#333;margin-bottom:%?4?%}.reject_pop .reject_type_list .reject_type_item .type_desc[data-v-0b637212]{font-size:11px;color:#999}.reject_pop .reject_type_list .reject_type_item.active[data-v-0b637212]{background:#fff0f0;border-color:#fd2c28}.reject_pop .reject_type_list .reject_type_item.active .type_title[data-v-0b637212]{color:#fd2c28}.reject_pop .reject_type_list .reject_type_item.active .type_desc[data-v-0b637212]{color:#fd2c28}.reject_pop .pop_sub_title[data-v-0b637212]{font-size:14px;font-weight:700;color:#333;margin-bottom:%?16?%;text-align:left}.reject_pop .preset_list[data-v-0b637212]{display:grid;grid-template-columns:repeat(2,1fr);gap:%?16?%;margin-bottom:%?24?%}.reject_pop .preset_list .preset_item[data-v-0b637212]{background:#f5f5f5;border-radius:%?12?%;padding:%?20?% %?16?%;font-size:13px;color:#666;transition:all .2s}.reject_pop .preset_list .preset_item.active[data-v-0b637212]{background:#fd2c28;color:#fff;font-weight:700}.reject_pop .custom_reason uni-textarea[data-v-0b637212]{width:100%;min-height:%?120?%;background:#f5f5f5;border-radius:%?12?%;padding:%?20?%;font-size:13px;color:#333;box-sizing:border-box}.reject_pop .pop_btns[data-v-0b637212]{display:flex;gap:%?24?%;margin-top:%?24?%}.reject_pop .pop_btns .pop_btn[data-v-0b637212]{flex:1;height:%?80?%;line-height:%?80?%;border-radius:%?80?%;font-size:16px;font-weight:700;text-align:center}.reject_pop .pop_btns .pop_btn.cancel[data-v-0b637212]{background:#eee;color:#666}.reject_pop .pop_btns .pop_btn.confirm[data-v-0b637212]{background:#fd2c28;color:#fff}",
        "",
      ]),
        (t.exports = e);
    },
    3744: function (t, e, i) {
      t.exports = i.p + "static/vip.png";
    },
    "385b": function (t, e, i) {
      t.exports = i.p + "static/service_member_second.png";
    },
    3898: function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAABACAYAAAC9S+EXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGmWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgOS4xLWMwMDEgNzkuMTQ2Mjg5OSwgMjAyMy8wNi8yNS0yMDowMTo1NSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NmYxZjUzOTEtODYwOS02NTQ1LWJmMmUtZGI1YTlhNTBhYzY2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkU0Q0VFMDZDMjZDQTExRjE4Q0Y1QjMwMkYyRjU2RTMxIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjQyNTg5Yjk4LTk2NzUtNzA0Yy04OTM0LWNlNzFlYTM3YWI4MiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgMjUuMCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDI2LTAzLTI3VDE1OjUzOjMxKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNi0wMy0yN1QxNjowOTo1MCswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyNi0wMy0yN1QxNjowOTo1MCswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5Zjc3MTIwNC01ZTUzLTI3NDYtODRkZi1hMTM2NTkwMDJiYmIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NmYxZjUzOTEtODYwOS02NTQ1LWJmMmUtZGI1YTlhNTBhYzY2Ii8+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjMyNmJlNjFjLWRlYTUtZTM0Ni04MTk1LWY5NzYzOWQ5MmIzNSIgc3RFdnQ6d2hlbj0iMjAyNi0wMy0yN1QxNjowMjowMCswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDI1LjAgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0MjU4OWI5OC05Njc1LTcwNGMtODkzNC1jZTcxZWEzN2FiODIiIHN0RXZ0OndoZW49IjIwMjYtMDMtMjdUMTY6MDk6NTArMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCAyNS4wIChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4qaSUyAAADG0lEQVR4nO3cO6gcVRzH8c8m4miIJgiCIohNiOCjsBDBzsIBRURQwUZ8FQZSRNL4SvARtImiGGLUICKiomgp94CFoqCQK6hYCFYGBJEgik2OYK7FMHAv3Jv7mvOY3XzLZef8fnyZ2eXM/mcnp+cWTuFn/IDv8FXT+sU5ljA5PbewsMzrv+IzfIwvm9aZvLXqYyVRizmJt3C0af2ZoVOVrEVUzz84isNN61TCTlWyHlE9f+FJvDFLl+SWDRyzU3dmfRODXcPWqZeNiOq5EfMxuGeoMjWzGVFwMT6KwaEYTIYoVCubFdXzFN6OwXkDrVcdQ4mCB/BuDLYOuGY1DCkK7sOxabwMhxYFj+BAgnWLkkIUPBODuxKtXYRUoia6z6vdidbPTipRsB3vx+D8hBnZSCkKbsALiTOykFoU7IvBTRlykpJD1FYcj0GTISsZOUTBNXgsU1YScomCAzG4MmPeoOQUtQ2HM+YNSk5RcHcMbs6cOQi5RU3w8hj3grlF0d3wG93NvhKi4NDY7l2VErULDxXK3hClRMHBGFxYMH9dlBR1BfYUzF8XJUXB4zG4qHCHNVFa1KXYV7jDmigtCvbH4JLSJVajBlE78ETpEqtRgyjYW/uGuRZRF+DZ0iXORi2i4P4YXFe6xErUJGoLXixdYiVqEgW3x+CW0iWWozZR8GqNG+YaRV2rwq1NjaLguRhcXrrEYmoVtROvFO6whFpFwb0xuKN0iZ6aRcGbtewDaxd1GV4vXYL6RdFdgg+WLjEGUXAkBteXLDAWUdt0Y9o7ShUYiyjYrRtMKzJ1PCZRcBteKxE8NlGwJwbP5w4doyh4Ooa8I9pjFUW3HzyYK2wjz+vVxjHsbVr/pQwZ8xnV8yg+icH2lCHTIAruxLcxuDpVwLSIohuoPRGDh1MMqk2TKLqnJY5jLgZXDbnwtInquRU/xmD/UPPt0/CttxondT/Zf7iZp+pnQVTPT3gJHzStuN6DZ0lUz+84gnea1m9rPWgWRfWcwRd4D582rb/P9uZZFrWYf/E1Psccvm9aS7ycE7U8f+AE5nV/FTX/PxBrxbmDYUOrAAAAAElFTkSuQmCC";
    },
    4849: function (t, e, i) {
      var s = i("295b");
      s.__esModule && (s = s.default),
        "string" === typeof s && (s = [[t.i, s, ""]]),
        s.locals && (t.exports = s.locals);
      var a = i("967d").default;
      a("77e5d092", s, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "808c": function (t, e, i) {
      "use strict";
      i.r(e);
      var s = i("9b9e"),
        a = i("0ea7");
      for (var n in a)
        ["default"].indexOf(n) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(n);
      i("ec72");
      var o = i("828b"),
        r = Object(o["a"])(
          a["default"],
          s["b"],
          s["c"],
          !1,
          null,
          "0b637212",
          null,
          !1,
          s["a"],
          void 0,
        );
      e["default"] = r.exports;
    },
    "9b9e": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {
          return s;
        });
      var s = { uvPopup: i("ce8a").default },
        a = function () {
          var t = this,
            e = t.$createElement,
            s = t._self._c || e;
          return s(
            "v-uni-view",
            {
              staticClass: "content",
              on: {
                touchstart: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.onTouchStart.apply(void 0, arguments);
                },
                touchmove: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.onTouchMove.apply(void 0, arguments);
                },
                touchend: function (e) {
                  (arguments[0] = e = t.$handleEvent(e)),
                    t.onTouchEnd.apply(void 0, arguments);
                },
              },
            },
            [
              t.info
                ? s(
                    "v-uni-view",
                    { staticClass: "audit_detail" },
                    [
                      s(
                        "v-uni-view",
                        { staticClass: "status_box" },
                        [
                          s(
                            "v-uni-view",
                            { staticClass: "status flex_box" },
                            [
                              s(
                                "v-uni-view",
                                {
                                  staticClass: "tit",
                                  class:
                                    0 == t.info.audit_status
                                      ? "status-pending"
                                      : 1 == t.info.audit_status
                                        ? "status-passed"
                                        : 2 == t.info.audit_status
                                          ? "status-reject-supplement"
                                          : 3 == t.info.audit_status
                                            ? "status-reject-final"
                                            : "",
                                },
                                [t._v(t._s(t.info.audit_status_text))],
                              ),
                            ],
                            1,
                          ),
                          s("v-uni-view", { staticClass: "intro" }, [
                            t._v(t._s(t.auditStatusTips)),
                          ]),
                          (t.info.service_imgs_list &&
                            t.info.service_imgs_list.length > 0) ||
                          t.info.service_txt
                            ? s(
                                "v-uni-view",
                                { staticClass: "seller_msg_box flex_box" },
                                [
                                  s("img", {
                                    staticClass: "head",
                                    attrs: {
                                      src: t.info.seller_info
                                        ? t.info.seller_info.avatar
                                        : "",
                                    },
                                  }),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "txt" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "nickname uv-line-1" },
                                        [
                                          t._v(
                                            t._s(
                                              t.info.seller_info
                                                ? t.info.seller_info.nickname
                                                : "",
                                            ),
                                          ),
                                        ],
                                      ),
                                      s("v-uni-view", { staticClass: "tips" }, [
                                        t._v(
                                          "证明文字：" +
                                            t._s(t.info.service_txt || "无"),
                                        ),
                                      ]),
                                      t.info.service_imgs_list &&
                                      t.info.service_imgs_list.length > 0
                                        ? s(
                                            "v-uni-view",
                                            { staticClass: "img_box" },
                                            t._l(
                                              t.info.service_imgs_list,
                                              function (e, i) {
                                                return s("img", {
                                                  key: i,
                                                  attrs: { text: e, src: e },
                                                  on: {
                                                    click: function (i) {
                                                      (arguments[0] = i =
                                                        t.$handleEvent(i)),
                                                        t.previewImage(
                                                          e,
                                                          t.info
                                                            .service_imgs_list,
                                                        );
                                                    },
                                                  },
                                                });
                                              },
                                            ),
                                            0,
                                          )
                                        : t._e(),
                                      t.info.service_time
                                        ? s(
                                            "v-uni-view",
                                            { staticClass: "tips" },
                                            [
                                              t._v(
                                                "打手提交证明时间：" +
                                                  t._s(t.info.service_time),
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          2 == t.info.audit_status || 3 == t.info.audit_status
                            ? s(
                                "v-uni-view",
                                { staticClass: "reject_box" },
                                [
                                  s(
                                    "v-uni-view",
                                    { staticClass: "reject_head flex_box" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "reject_tit" },
                                        [t._v("驳回信息")],
                                      ),
                                      t.info.audit_reject_type_text
                                        ? s(
                                            "v-uni-view",
                                            { staticClass: "reject_tag" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.info.audit_reject_type_text,
                                                ),
                                              ),
                                            ],
                                          )
                                        : t._e(),
                                    ],
                                    1,
                                  ),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "reject_item" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "label" },
                                        [t._v("驳回原因")],
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "value" },
                                        [
                                          t._v(
                                            t._s(
                                              t.info.audit_reject_reason
                                                ? t.info.audit_reject_reason
                                                : "无",
                                            ),
                                          ),
                                        ],
                                      ),
                                    ],
                                    1,
                                  ),
                                  t.info.audit_reject_type_text
                                    ? s(
                                        "v-uni-view",
                                        { staticClass: "reject_item" },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "label" },
                                            [t._v("驳回类型")],
                                          ),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "value type_value" },
                                            [
                                              t._v(
                                                t._s(
                                                  t.info.audit_reject_type_text,
                                                ),
                                              ),
                                            ],
                                          ),
                                        ],
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
                      s(
                        "v-uni-view",
                        { staticClass: "top_box flex_box" },
                        [
                          s(
                            "v-uni-view",
                            {
                              staticClass: "order_num flex_box",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.copyOrderNum(t.info.order_no);
                                },
                              },
                            },
                            [
                              s("v-uni-view", [t._v("订单编号：")]),
                              s("v-uni-view", { staticClass: "num" }, [
                                t._v(t._s(t.info.order_no)),
                              ]),
                              s("v-uni-view", { staticClass: "copy_btn" }, [
                                t._v("复制"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "v-uni-view",
                        { staticClass: "msg_box" },
                        [
                          0 != t.info.raffle_order &&
                          t.info.prizes &&
                          0 != t.info.prizes.length
                            ? s(
                                "v-uni-view",
                                { staticClass: "goods_msg flex_box" },
                                [
                                  t.info.raffle_thumb
                                    ? s("img", {
                                        staticClass: "img",
                                        attrs: { src: t.info.raffle_thumb },
                                      })
                                    : t._e(),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "txt" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "price_box flex_box" },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "price" },
                                            [
                                              s(
                                                "v-uni-text",
                                                { staticClass: "unit" },
                                                [t._v("￥")],
                                              ),
                                              s("v-uni-text", [
                                                t._v(t._s(t.info.price)),
                                              ]),
                                            ],
                                            1,
                                          ),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "num" },
                                            [t._v("x " + t._s(t.info.num))],
                                          ),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "name uv-line-2" },
                                        [t._v(t._s(t.info.raffle_title))],
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "intro uv-line-2" },
                                        [t._v(t._s(t.info.raffle_intro))],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : s(
                                "v-uni-view",
                                {
                                  staticClass: "goods_msg flex_box",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.previewGoods.apply(void 0, arguments);
                                    },
                                  },
                                },
                                [
                                  t.info.goods_thumb
                                    ? s("img", {
                                        staticClass: "img",
                                        attrs: { src: t.info.goods_thumb },
                                      })
                                    : s("img", {
                                        staticClass: "img",
                                        attrs: {
                                          src: t.info.goods_info
                                            ? t.info.goods_info.thumb
                                            : "",
                                        },
                                      }),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "txt" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "price_box flex_box" },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "price" },
                                            [
                                              s(
                                                "v-uni-text",
                                                { staticClass: "unit" },
                                                [t._v("￥")],
                                              ),
                                              s("v-uni-text", [
                                                t._v(t._s(t.info.price)),
                                              ]),
                                            ],
                                            1,
                                          ),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "num" },
                                            [t._v("x " + t._s(t.info.num))],
                                          ),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "name uv-line-2" },
                                        [t._v(t._s(t.info.goods_name))],
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "intro uv-line-2" },
                                        [t._v(t._s(t.info.goods_intro))],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              ),
                          t.info.raffle_order > 0 &&
                          t.info.prizes &&
                          t.info.prizes.length > 0
                            ? s(
                                "v-uni-view",
                                { staticClass: "prize_list_box" },
                                [
                                  s(
                                    "v-uni-view",
                                    { staticClass: "prize_list_title" },
                                    [t._v("抽中奖品")],
                                  ),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "prize_list" },
                                    t._l(
                                      t.showAllPrizes
                                        ? t.info.prizes
                                        : t.info.prizes.slice(0, 3),
                                      function (e, i) {
                                        return s(
                                          "v-uni-view",
                                          {
                                            key: i,
                                            staticClass: "prize_item flex_box",
                                          },
                                          [
                                            s("img", {
                                              staticClass: "prize_img",
                                              attrs: { src: e.goods_thumb },
                                            }),
                                            s(
                                              "v-uni-view",
                                              { staticClass: "prize_txt" },
                                              [
                                                s(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "prize_label",
                                                  },
                                                  [t._v("奖品")],
                                                ),
                                                s(
                                                  "v-uni-view",
                                                  {
                                                    staticClass:
                                                      "prize_name uv-line-1",
                                                  },
                                                  [t._v(t._s(e.goods_title))],
                                                ),
                                              ],
                                              1,
                                            ),
                                            e.count > 1
                                              ? s(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "prize_count",
                                                  },
                                                  [t._v("x" + t._s(e.count))],
                                                )
                                              : t._e(),
                                          ],
                                          1,
                                        );
                                      },
                                    ),
                                    1,
                                  ),
                                  t.info.prizes.length > 3
                                    ? s(
                                        "v-uni-view",
                                        {
                                          staticClass: "show_more",
                                          on: {
                                            click: function (e) {
                                              (arguments[0] = e =
                                                t.$handleEvent(e)),
                                                (t.showAllPrizes =
                                                  !t.showAllPrizes);
                                            },
                                          },
                                        },
                                        [
                                          t._v(
                                            " " +
                                              t._s(
                                                t.showAllPrizes
                                                  ? "收起"
                                                  : "展开全部(" +
                                                      t.info.prizes.length +
                                                      "个)",
                                              ) +
                                              " ",
                                          ),
                                        ],
                                      )
                                    : t._e(),
                                ],
                                1,
                              )
                            : t._e(),
                        ],
                        1,
                      ),
                      t.info.order_service && t.info.order_service.length > 0
                        ? s(
                            "v-uni-view",
                            { staticClass: "order_service_box" },
                            [
                              s(
                                "v-uni-view",
                                { staticClass: "order_service_title" },
                                [t._v("增值服务")],
                              ),
                              t._l(
                                t.showAllServices
                                  ? t.info.order_service
                                  : t.info.order_service.slice(0, 3),
                                function (e) {
                                  return s(
                                    "v-uni-view",
                                    {
                                      key: e.id,
                                      staticClass:
                                        "order_service_item flex_box",
                                    },
                                    [
                                      e.image
                                        ? s("img", {
                                            staticClass: "os_img",
                                            attrs: {
                                              src: e.image,
                                              mode: "aspectFill",
                                            },
                                            on: {
                                              click: function (i) {
                                                (arguments[0] = i =
                                                  t.$handleEvent(i)),
                                                  t.previewImage(
                                                    e.image,
                                                    t.info.order_service
                                                      .filter(function (t) {
                                                        return t.image;
                                                      })
                                                      .map(function (t) {
                                                        return t.image;
                                                      }),
                                                  );
                                              },
                                            },
                                          })
                                        : t._e(),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "os_info" },
                                        [
                                          s(
                                            "v-uni-view",
                                            {
                                              staticClass: "os_name uv-line-1",
                                            },
                                            [t._v(t._s(e.name))],
                                          ),
                                          e.intro
                                            ? s(
                                                "v-uni-view",
                                                {
                                                  staticClass:
                                                    "os_intro uv-line-2",
                                                },
                                                [t._v(t._s(e.intro))],
                                              )
                                            : t._e(),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "os_right" },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "os_num" },
                                            [t._v("x" + t._s(e.num))],
                                          ),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "os_price" },
                                            [t._v("￥" + t._s(e.money))],
                                          ),
                                        ],
                                        1,
                                      ),
                                    ],
                                    1,
                                  );
                                },
                              ),
                              t.info.order_service.length > 3
                                ? s(
                                    "v-uni-view",
                                    {
                                      staticClass: "show_more",
                                      on: {
                                        click: function (e) {
                                          (arguments[0] = e =
                                            t.$handleEvent(e)),
                                            (t.showAllServices =
                                              !t.showAllServices);
                                        },
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.showAllServices
                                              ? "收起"
                                              : "展开全部(" +
                                                  t.info.order_service.length +
                                                  "个)",
                                          ) +
                                          " ",
                                      ),
                                    ],
                                  )
                                : t._e(),
                            ],
                            2,
                          )
                        : t._e(),
                      s("v-uni-view", { staticClass: "line_box" }),
                      s(
                        "v-uni-view",
                        { staticClass: "msg_box" },
                        [
                          t.info.num_id
                            ? s(
                                "v-uni-view",
                                {
                                  staticClass: "tips flex_box",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.copyOrderNum(t.info.num_id);
                                    },
                                  },
                                },
                                [
                                  s("v-uni-view", { staticClass: "tit" }, [
                                    t._v("数字编号"),
                                  ]),
                                  s(
                                    "v-uni-view",
                                    [
                                      t._v(" " + t._s(t.info.num_id) + " "),
                                      s(
                                        "v-uni-text",
                                        { staticClass: "copy_btn" },
                                        [t._v("复制")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.info.text_id
                            ? s(
                                "v-uni-view",
                                {
                                  staticClass: "tips flex_box",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)),
                                        t.copyOrderNum(t.info.text_id);
                                    },
                                  },
                                },
                                [
                                  s("v-uni-view", { staticClass: "tit" }, [
                                    t._v("文字ID"),
                                  ]),
                                  s(
                                    "v-uni-view",
                                    [
                                      t._v(" " + t._s(t.info.text_id) + " "),
                                      s(
                                        "v-uni-text",
                                        { staticClass: "copy_btn" },
                                        [t._v("复制")],
                                      ),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("大区"),
                              ]),
                              s("v-uni-view", [
                                t._v(t._s(t.info.game_area_text || "-")),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("服务费"),
                              ]),
                              s("v-uni-view", [
                                t._v("¥" + t._s(t.info.service_fee)),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("支付方式"),
                              ]),
                              s("v-uni-view", [
                                t._v(t._s(t.info.pay_type_text || "-")),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("订单备注"),
                              ]),
                              s(
                                "v-uni-view",
                                { staticClass: "remark uv-line-3" },
                                [t._v(t._s(t.info.remark || "无"))],
                              ),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("下单时间"),
                              ]),
                              s("v-uni-view", [
                                t._v(t._s(t.info.add_time || "-")),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("付款时间"),
                              ]),
                              s("v-uni-view", [
                                t._v(t._s(t.info.pay_time || "-")),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            { staticClass: "tips flex_box" },
                            [
                              s("v-uni-view", { staticClass: "tit" }, [
                                t._v("完成时间"),
                              ]),
                              s("v-uni-view", [
                                t._v(t._s(t.info.end_time || "-")),
                              ]),
                            ],
                            1,
                          ),
                          t.info.user_info
                            ? s(
                                "v-uni-view",
                                { staticClass: "user_msg_flex flex_box" },
                                [
                                  s(
                                    "v-uni-view",
                                    { staticClass: "head_msg_box" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "head_frame_box" },
                                        [
                                          t.info.user_info.avatar_frame
                                            ? s("img", {
                                                staticClass: "head_frame",
                                                attrs: {
                                                  src: t.info.user_info
                                                    .avatar_frame,
                                                },
                                              })
                                            : t._e(),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "head" },
                                            [
                                              s("img", {
                                                attrs: {
                                                  src: t.info.user_info.avatar,
                                                },
                                              }),
                                            ],
                                          ),
                                        ],
                                        1,
                                      ),
                                      s("v-uni-view", { staticClass: "id" }, [
                                        t._v(
                                          "ID: " +
                                            t._s(t.info.user_info.share_code),
                                        ),
                                      ]),
                                    ],
                                    1,
                                  ),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "name_rights" },
                                    [
                                      s(
                                        "v-uni-view",
                                        {
                                          class: {
                                            name_box: !0,
                                            is_vip:
                                              1 == t.info.user_info.user_vip &&
                                              1 == t.vip_status,
                                          },
                                        },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "nickname" },
                                            [
                                              t._v(
                                                t._s(t.info.user_info.nickname),
                                              ),
                                            ],
                                          ),
                                          t.user_level && t.user_level.icon
                                            ? s("img", {
                                                staticClass: "level",
                                                attrs: {
                                                  src: t.user_level.icon,
                                                },
                                              })
                                            : t._e(),
                                          s("img", {
                                            staticClass: "vip",
                                            attrs: { src: i("3744") },
                                          }),
                                        ],
                                        1,
                                      ),
                                      t.user_level &&
                                      t.user_level.icon_list &&
                                      t.user_level.icon_list.length > 0
                                        ? s(
                                            "v-uni-view",
                                            { staticClass: "rights_grid" },
                                            t._l(
                                              t.user_level.icon_list,
                                              function (e, i) {
                                                return s(
                                                  "v-uni-view",
                                                  {
                                                    key: i,
                                                    staticClass: "rights",
                                                    attrs: { text: e },
                                                  },
                                                  [t._v(t._s(e))],
                                                );
                                              },
                                            ),
                                            1,
                                          )
                                        : t._e(),
                                    ],
                                    1,
                                  ),
                                ],
                                1,
                              )
                            : t._e(),
                          t.info.seller_info
                            ? s(
                                "v-uni-view",
                                {
                                  staticClass:
                                    "service_member_card service_member_card_second",
                                },
                                [
                                  s("v-uni-view", { staticClass: "tip_box" }),
                                  s(
                                    "v-uni-view",
                                    { staticClass: "card_box" },
                                    [
                                      s(
                                        "v-uni-view",
                                        { staticClass: "card_title flex_box" },
                                        [
                                          s("img", {
                                            attrs: { src: i("385b"), alt: "" },
                                          }),
                                          s(
                                            "v-uni-view",
                                            { staticClass: "title" },
                                            [t._v("服务成员")],
                                          ),
                                        ],
                                        1,
                                      ),
                                      s(
                                        "v-uni-view",
                                        { staticClass: "card_main" },
                                        [
                                          s(
                                            "v-uni-view",
                                            { staticClass: "worker_list" },
                                            [
                                              s(
                                                "v-uni-view",
                                                {
                                                  staticClass:
                                                    "worker flex_box",
                                                },
                                                [
                                                  s(
                                                    "v-uni-view",
                                                    {
                                                      staticClass:
                                                        "worker_msg flex_box",
                                                    },
                                                    [
                                                      s("img", {
                                                        staticClass: "head",
                                                        attrs: {
                                                          src: t.info
                                                            .seller_info.avatar,
                                                        },
                                                      }),
                                                      s(
                                                        "v-uni-view",
                                                        {
                                                          staticClass:
                                                            "nickname_box",
                                                        },
                                                        [
                                                          s(
                                                            "v-uni-view",
                                                            {
                                                              staticClass:
                                                                "nickname",
                                                            },
                                                            [
                                                              t._v(
                                                                t._s(
                                                                  t.info
                                                                    .seller_info
                                                                    .nickname,
                                                                ),
                                                              ),
                                                            ],
                                                          ),
                                                          s(
                                                            "v-uni-view",
                                                            {
                                                              staticClass: "id",
                                                            },
                                                            [
                                                              t._v(
                                                                "ID: " +
                                                                  t._s(
                                                                    t.info
                                                                      .seller_info
                                                                      .share_code,
                                                                  ),
                                                              ),
                                                            ],
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
                            : t._e(),
                        ],
                        1,
                      ),
                      s("v-uni-view", { staticClass: "bottom_placeholder" }),
                    ],
                    1,
                  )
                : s("v-uni-view", { staticClass: "empty_tip" }, [
                    t._v("加载中..."),
                  ]),
              t.info && 0 == t.info.audit_status
                ? s(
                    "v-uni-view",
                    { staticClass: "audit_bar" },
                    [
                      s(
                        "v-uni-view",
                        {
                          staticClass: "slide_btn reject_btn",
                          class: { active: "left" === t.slideZone },
                          on: {
                            touchstart: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.onBtnTouchStart(e, "left");
                            },
                            touchend: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.onBtnTouchEnd.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          s(
                            "v-uni-view",
                            { staticClass: "slide_text" },
                            [
                              s("v-uni-text", { staticClass: "icon" }, [
                                t._v("✕"),
                              ]),
                              s("v-uni-text", { staticClass: "label" }, [
                                t._v("拒绝"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s(
                        "v-uni-view",
                        { staticClass: "center_hint" },
                        [
                          (t.pendingCount || 0) > 1 &&
                          t.pendingIndex < t.pendingCount - 1
                            ? s(
                                "v-uni-view",
                                { staticClass: "hint_text" },
                                [
                                  s("v-uni-text", { staticClass: "arrow_up" }, [
                                    t._v("↑"),
                                  ]),
                                  s("v-uni-text", [t._v("下一笔")]),
                                ],
                                1,
                              )
                            : t.pendingIndex > 0
                              ? s(
                                  "v-uni-view",
                                  { staticClass: "hint_text" },
                                  [
                                    s(
                                      "v-uni-text",
                                      { staticClass: "arrow_down" },
                                      [t._v("↓")],
                                    ),
                                    s("v-uni-text", [t._v("上一笔")]),
                                  ],
                                  1,
                                )
                              : t._e(),
                          t.pendingCount > 0
                            ? s("v-uni-view", { staticClass: "order_count" }, [
                                t._v(
                                  t._s(t.pendingIndex + 1) +
                                    " / " +
                                    t._s(t.pendingCount),
                                ),
                              ])
                            : t._e(),
                        ],
                        1,
                      ),
                      s(
                        "v-uni-view",
                        {
                          staticClass: "slide_btn pass_btn",
                          class: { active: "right" === t.slideZone },
                          on: {
                            touchstart: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.onBtnTouchStart(e, "right");
                            },
                            touchend: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.onBtnTouchEnd.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          s(
                            "v-uni-view",
                            { staticClass: "slide_text" },
                            [
                              s("v-uni-text", { staticClass: "icon" }, [
                                t._v("✓"),
                              ]),
                              s("v-uni-text", { staticClass: "label" }, [
                                t._v("通过"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : t.info
                  ? s(
                      "v-uni-view",
                      { staticClass: "audit_bar disabled_bar" },
                      [
                        s("v-uni-view", { staticClass: "disabled_text" }, [
                          t._v("该订单已审核完成"),
                        ]),
                      ],
                      1,
                    )
                  : t._e(),
              s(
                "uv-popup",
                {
                  ref: "rejectPop",
                  attrs: {
                    mode: "center",
                    bgColor: "none",
                    closeOnClickOverlay: !1,
                  },
                },
                [
                  s(
                    "v-uni-view",
                    { staticClass: "reject_pop" },
                    [
                      s("v-uni-view", { staticClass: "pop_title" }, [
                        t._v("选择驳回类型"),
                      ]),
                      s(
                        "v-uni-view",
                        { staticClass: "reject_type_list" },
                        [
                          s(
                            "v-uni-view",
                            {
                              staticClass: "reject_type_item",
                              class: { active: 1 === t.rejectForm.rejectType },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.selectRejectType(1);
                                },
                              },
                            },
                            [
                              s("v-uni-view", { staticClass: "type_title" }, [
                                t._v("驳回(需补充)"),
                              ]),
                              s("v-uni-view", { staticClass: "type_desc" }, [
                                t._v("打手可重新提交证明材料"),
                              ]),
                            ],
                            1,
                          ),
                          s(
                            "v-uni-view",
                            {
                              staticClass: "reject_type_item",
                              class: { active: 2 === t.rejectForm.rejectType },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.selectRejectType(2);
                                },
                              },
                            },
                            [
                              s("v-uni-view", { staticClass: "type_title" }, [
                                t._v("驳回(直接拒绝)"),
                              ]),
                              s("v-uni-view", { staticClass: "type_desc" }, [
                                t._v("订单不可再提交"),
                              ]),
                            ],
                            1,
                          ),
                        ],
                        1,
                      ),
                      s("v-uni-view", { staticClass: "pop_sub_title" }, [
                        t._v("选择拒绝原因"),
                      ]),
                      s(
                        "v-uni-view",
                        { staticClass: "preset_list" },
                        t._l(t.presetReasons, function (e, i) {
                          return s(
                            "v-uni-view",
                            {
                              key: i,
                              staticClass: "preset_item",
                              class: { active: t.rejectForm.preset === i },
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.selectPreset(i);
                                },
                              },
                            },
                            [t._v(" " + t._s(e) + " ")],
                          );
                        }),
                        1,
                      ),
                      s(
                        "v-uni-view",
                        { staticClass: "custom_reason" },
                        [
                          s("v-uni-textarea", {
                            staticClass: "reason_input",
                            attrs: {
                              placeholder: "或输入自定义原因",
                              maxlength: "200",
                            },
                            model: {
                              value: t.rejectForm.custom,
                              callback: function (e) {
                                t.$set(t.rejectForm, "custom", e);
                              },
                              expression: "rejectForm.custom",
                            },
                          }),
                        ],
                        1,
                      ),
                      s(
                        "v-uni-view",
                        { staticClass: "pop_btns" },
                        [
                          s(
                            "v-uni-view",
                            {
                              staticClass: "pop_btn cancel",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.closeReject.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("取消")],
                          ),
                          s(
                            "v-uni-view",
                            {
                              staticClass: "pop_btn confirm",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.confirmReject.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("确认拒绝")],
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
    ec72: function (t, e, i) {
      "use strict";
      var s = i("4849"),
        a = i.n(s);
      a.a;
    },
  },
]);
//# sourceMappingURL=pages_sub1-kefu-audit_detail.fa426463.js.map
