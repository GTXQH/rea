(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages_sub1-active-lucky_draw"],
  {
    "0e99": function (t, e, i) {
      "use strict";
      i("6a54"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("fd3c"),
        i("f7a5"),
        i("5ef2"),
        i("bf0f"),
        i("2797"),
        i("22b6"),
        i("08eb"),
        i("18f7");
      var a = i("e74a"),
        n = i("15b8"),
        r = {
          data: function () {
            return {
              base_url: n.baseUrl,
              raffle_id: 0,
              remainCount: 0,
              isDrawing: !1,
              rule: {},
              isSubmittingDraw: !1,
              selectedTimes: 1,
              skipAnimation: !1,
              mascotTipShow: !1,
              mascotTip: "",
              mascotTimer: null,
              pendingDrawCount: 0,
              activeGridIndex: -1,
              confetti: !1,
              animationTimer: null,
              routeCursor: 0,
              prizes_list: [],
              order_type: 0,
              gridMap: [
                { gridIndex: 0, col: 1, row: 1 },
                { gridIndex: 1, col: 2, row: 1 },
                { gridIndex: 2, col: 3, row: 1 },
                { gridIndex: 3, col: 1, row: 2 },
                { gridIndex: 5, col: 3, row: 2 },
                { gridIndex: 6, col: 1, row: 3 },
                { gridIndex: 7, col: 2, row: 3 },
                { gridIndex: 8, col: 3, row: 3 },
              ],
              prizes: [],
              news: [],
            };
          },
          onLoad: function (t) {
            if (((this.raffle_id = t.raffle_id || 0), !this.raffle_id))
              return (this.prizes = []), void (this.news = []);
            this.getRaffleNews();
          },
          onShow: function () {
            this.raffle_id && this.getRaffleOrder();
          },
          beforeDestroy: function () {
            this.clearAnimationTimer(),
              this.destroySounds(),
              this.mascotTimer && clearTimeout(this.mascotTimer);
          },
          methods: {
            getRaffleOrder: function () {
              var t = this;
              uni.showLoading({ title: "加载中.." }),
                (0, a.send)(
                  "/wechat/RaffleOrder/getRaffleOrder",
                  { label: "order", raffle_id: this.raffle_id },
                  !1,
                )
                  .then(function (e) {
                    uni.hideLoading();
                    var i = e.status,
                      a = e.msg,
                      n = e.data;
                    if (1 != i)
                      return (
                        (t.prizes = []),
                        4011 == i &&
                          n &&
                          n.list &&
                          n.list.length > 0 &&
                          (t.prizes = t.formatPrizes(n.list)),
                        uni.$uv.toast(a)
                      );
                    (t.rule = n.rule),
                      void 0 !== n.order_type && (t.order_type = n.order_type),
                      (t.prizes =
                        n.list && n.list.length > 0
                          ? t.formatPrizes(n.list)
                          : []),
                      void 0 !== n.total_count &&
                        (t.remainCount = n.total_count - n.drawn_count);
                  })
                  .catch(function () {
                    uni.hideLoading(), (t.prizes = []);
                  });
            },
            formatPrizes: function (t) {
              var e = this;
              return t.map(function (t, i) {
                var a = e.gridMap[i] || e.gridMap[0];
                return {
                  id: t.id,
                  title: t.title,
                  subtitle: "",
                  img: t.thumb,
                  gridIndex: a.gridIndex,
                  col: a.col,
                  row: a.row,
                };
              });
            },
            getRaffleNews: function () {
              var t = this;
              (0, a.send)(
                "/wechat/RaffleOrder/getRaffleNews",
                { label: "order", raffle_id: this.raffle_id },
                !1,
              ).then(function (e) {
                var i = e.status,
                  a = e.data;
                1 == i &&
                  a.list &&
                  a.list.length > 0 &&
                  (t.news = a.list.map(function (t, e) {
                    return {
                      id: e + 1,
                      name: t.name,
                      prize: t.prize,
                      thumb: t.thumb,
                      avatar: (e % 3) + 1,
                      avatarText: (t.name || "客").slice(0, 1),
                    };
                  }));
              });
            },
            goBack: function () {
              uni.navigateBack({ delta: 1 });
            },
            openRules: function () {
              this.isDrawing || this.$refs.rulesPopup.open();
            },
            goOrders: function () {
              uni.navigateTo({ url: "/pages/active/order?current=1" });
            },
            selectTimes: function (t) {
              this.isDrawing ||
                this.isSubmittingDraw ||
                (this.remainCount < t &&
                  (1 != this.order_type || 0 != this.remainCount)) ||
                (this.selectedTimes === t
                  ? this.startDraw(t)
                  : (this.selectedTimes = t));
            },
            startDraw: function (t) {
              var e = this;
              if (!this.isDrawing && !this.isSubmittingDraw) {
                if (!this.raffle_id)
                  return uni.showToast({
                    title: "暂无数据, 请从正确的抽奖方式发起抽奖",
                    icon: "none",
                  });
                if (0 == this.remainCount)
                  return 1 == this.order_type
                    ? uni.navigateTo({
                        url:
                          "/pages/pay/raffle?id=" +
                          this.raffle_id +
                          "&draw_num=" +
                          t,
                      })
                    : (this.getRaffleOrder(),
                      uni.showToast({
                        title: "剩余抽奖次数不足",
                        icon: "none",
                      }));
                if (this.remainCount < t)
                  return uni.showToast({
                    title: "剩余抽奖次数不足",
                    icon: "none",
                  });
                (this.isSubmittingDraw = !0),
                  (0, a.send)(
                    "/wechat/RaffleOrder/addRaffleOrder",
                    { label: "order", raffle_id: this.raffle_id, times: t },
                    !1,
                  )
                    .then(function (i) {
                      e.isSubmittingDraw = !1;
                      var a = i.status,
                        n = i.msg,
                        r = i.data;
                      if (1 != a) return uni.$uv.toast(n);
                      var o = (r.prizes || []).map(function (t) {
                        var i = t.goods || {},
                          a = e.gridMap[t.num] || e.gridMap[0];
                        return {
                          gridIndex: a.gridIndex,
                          img: i.thumb,
                          title: i.title,
                          subtitle: "",
                        };
                      });
                      if (0 === o.length)
                        return uni.$uv.toast("抽奖结果异常, 请稍后重试");
                      (e.pendingDrawCount = t), e.playLottery(o, t);
                    })
                    .catch(function () {
                      e.isSubmittingDraw = !1;
                    });
              }
            },
            playLottery: function (t, e) {
              var i = this;
              if (
                ((this.isDrawing = !0),
                (this.prizes_list = t.map(function (t) {
                  return { thumb: t.img, title: t.title + (t.subtitle || "") };
                })),
                this.skipAnimation)
              )
                return (
                  this.stopSound("lottery-tick.m4a"),
                  (this.activeGridIndex = t[t.length - 1].gridIndex),
                  (this.remainCount -= this.pendingDrawCount),
                  (this.pendingDrawCount = 0),
                  void this.settleAfterDraw(e)
                );
              var a = [0, 1, 2, 5, 8, 7, 6, 3],
                n = 1 == e ? 5e3 : 1100,
                r = function (t) {
                  return t < 0.65
                    ? 60
                    : 60 + 480 * Math.pow((t - 0.65) / 0.35, 2);
                },
                o = 0;
              (function s() {
                i.playSound("lottery-tick.m4a", !0);
                for (
                  var d = a.indexOf(t[o].gridIndex),
                    l =
                      24 +
                      ((d - (i.routeCursor % a.length) + a.length) % a.length),
                    c = 0,
                    f = 1;
                  f <= l;
                  f++
                )
                  c += r(f / l);
                var u = n / c,
                  g = 0;
                (function n() {
                  (i.routeCursor = (i.routeCursor + 1) % a.length),
                    (i.activeGridIndex = a[i.routeCursor]),
                    (g += 1);
                  var d = g / l;
                  if (
                    (d >= 0.65 &&
                      i.soundPool &&
                      i.soundPool["lottery-tick.m4a"] &&
                      (i.soundPool["lottery-tick.m4a"].volume = Math.max(
                        0.15,
                        1 - ((d - 0.65) / 0.35) * 0.85,
                      )),
                    g >= l)
                  )
                    return (
                      i.stopSound("lottery-tick.m4a"),
                      (i.activeGridIndex = t[o].gridIndex),
                      i.pendingDrawCount > 0 &&
                        (i.pendingDrawCount--, i.remainCount--),
                      (o += 1),
                      o >= t.length
                        ? void i.settleAfterDraw(e)
                        : (i.playSound(
                            1 == e
                              ? "lottery-win-single.mp3"
                              : "lottery-win-multi.mp3",
                          ),
                          void (i.animationTimer = setTimeout(s, 620)))
                    );
                  i.animationTimer = setTimeout(n, r(g / l) * u);
                })();
              })();
            },
            settleAfterDraw: function (t) {
              var e = this;
              (this.isDrawing = !1),
                (this.confetti = !0),
                this.playSound(
                  1 == t ? "lottery-win-single.mp3" : "lottery-win-multi.mp3",
                ),
                1 != this.order_type &&
                  this.selectedTimes > 1 &&
                  this.remainCount < this.selectedTimes &&
                  (this.selectedTimes = 1),
                (this.animationTimer = setTimeout(function () {
                  e.$refs.jiangpinPopup.open();
                }, 360));
            },
            playSound: function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              if (
                (this.soundPool || (this.soundPool = {}), !this.soundPool[t])
              ) {
                var i = uni.createInnerAudioContext();
                (i.src = this.base_url + "/files/sound/" + t),
                  i.onError(function (t) {
                    console.error("音频播放失败：", t);
                  }),
                  (this.soundPool[t] = i);
              }
              var a = this.soundPool[t];
              (a.loop = e), (a.volume = 1), a.stop(), a.seek(0), a.play();
            },
            stopSound: function (t) {
              this.soundPool && this.soundPool[t] && this.soundPool[t].stop();
            },
            destroySounds: function () {
              this.soundPool &&
                (Object.values(this.soundPool).forEach(function (t) {
                  return t.destroy();
                }),
                (this.soundPool = null));
            },
            confirm: function () {
              (this.confetti = !1),
                this.$refs.jiangpinPopup.close(),
                this.remainCount <= 0 &&
                  uni.redirectTo({ url: "/pages_sub1/order/index" });
            },
            clearAnimationTimer: function () {
              this.animationTimer && clearTimeout(this.animationTimer),
                (this.animationTimer = null);
            },
            touchMascot: function () {
              var t = this,
                e = [
                  "摸我干嘛呀～是不是想把我打包带走？",
                  "嘿嘿，被你摸到了，要不要把我抱回家？",
                  "摸我一下，可是要对我负责的哦～",
                  "哼！别乱碰我，我才不稀罕你呢！",
                  "喂喂，谁准你摸我啦？…… 不过你要是喜欢我也不是不行。",
                  "我可不是随便让人摸的吉祥物，除非你特别特别喜欢我。",
                  "哇啊！吓我一跳！你…… 你是不是喜欢我呀？",
                  "哎哟，突然摸我，害我心跳都漏拍了，你说怎么办？",
                  "你这么摸我，小心我把你当吉祥物带回去哦！",
                  "手感还不错吧？那就…… 做我的人咯？",
                  "喜欢我？直说嘛！",
                  "摸都摸了，还不承认喜欢我？",
                  "我是游趣网络科技系统诞生的吉祥物！",
                ];
              (this.mascotTip = e[Math.floor(Math.random() * e.length)]),
                (this.mascotTipShow = !0),
                this.mascotTimer && clearTimeout(this.mascotTimer),
                (this.mascotTimer = setTimeout(function () {
                  t.mascotTipShow = !1;
                }, 2200));
            },
          },
          computed: {
            confettiList: function () {
              return Array.from({ length: 18 }, function (t, e) {
                var i = e + 1;
                return {
                  left: ((37 * i) % 100) + "%",
                  animationDelay: (i % 6) * 0.08 + "s",
                  animationDuration: 0.9 + (i % 5) * 0.12 + "s",
                  background: ["#ffd91c", "#ff6a38", "#fff"][i % 3],
                  transform: "rotate(" + 23 * i + "deg)",
                };
              });
            },
          },
        };
      e.default = r;
    },
    "11fd": function (t, e, i) {
      var a = i("c86c");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* ==================== 页面基础 ==================== */uni-page-body[data-v-8afec258]{background:#fff8e8}body.?%PAGE?%[data-v-8afec258]{background:#fff8e8}.lucky-page[data-v-8afec258]{position:relative;width:%?900?%;max-width:100%;margin:0 auto;min-height:100vh;padding:1px %?16?% calc(%?34?% + env(safe-area-inset-bottom));background:#fff8e8;overflow:hidden;color:#171717}\r\n/* ==================== 背景图层 ==================== */.visual-layers[data-v-8afec258]{position:absolute;inset:0;z-index:0;pointer-events:none;overflow:hidden}.gold-background[data-v-8afec258]{position:absolute;top:0;left:0;width:100%;height:%?340?%;background:linear-gradient(115deg,hsla(0,0%,100%,.24),transparent 30%),radial-gradient(circle at 50% 5%,#fff29a 0,#ffe55b 45%,#ffd63e 100%)}.lower-background[data-v-8afec258]{position:absolute;top:%?620?%;left:0;width:100%;height:calc(100% - %?620?%)}.dark-background[data-v-8afec258]{position:absolute;top:%?170?%;left:0;width:100%;height:%?740?%;border-radius:0 0 50% 50%/0 0 %?110?% %?110?%}.header-copy[data-v-8afec258]{position:absolute;top:calc(%?6?% + env(safe-area-inset-top));left:0;width:100%;height:auto;z-index:3}\r\n/* ==================== 顶部栏 ==================== */.topbar[data-v-8afec258], .lottery-shell[data-v-8afec258], .count-zone[data-v-8afec258], .draw-actions[data-v-8afec258], .news-card[data-v-8afec258]{position:relative;z-index:5}.topbar[data-v-8afec258]{display:flex;justify-content:space-between;align-items:center;margin-top:calc(%?20?% + env(safe-area-inset-top))}.top-links[data-v-8afec258]{display:flex;gap:%?16?%}.top-action[data-v-8afec258]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:%?96?%;height:%?96?%;border-radius:%?24?%;background:hsla(0,0%,100%,.9);box-shadow:0 %?10?% %?24?% rgba(106,73,0,.12);font-size:%?20?%;font-weight:700}.back-action[data-v-8afec258]{width:%?76?%;height:%?76?%;border-radius:%?22?%}.back-arrow[data-v-8afec258]{height:%?62?%;line-height:%?54?%;font-size:%?70?%;font-family:serif;font-weight:300}.action-icon[data-v-8afec258]{height:%?44?%;line-height:%?40?%;margin-bottom:%?4?%;font-size:%?39?%;font-weight:900}.question-icon[data-v-8afec258]{width:%?37?%;height:%?37?%;margin-bottom:%?7?%;border:%?4?% solid #171717;border-radius:50%;font-size:%?26?%;line-height:%?32?%;text-align:center}\r\n/* ==================== 九宫格抽奖区 ==================== */.lottery-shell[data-v-8afec258]{width:%?700?%;margin:%?134?% auto 0;padding:%?24?%;border-radius:%?46?%;background:linear-gradient(135deg,#ffe763,#b76508 24%,#ffde4d 47%,#b25f09 73%,#ffdc43);box-shadow:0 %?12?% %?30?% rgba(109,57,0,.45),inset 0 0 0 %?6?% #fff0a4;overflow:visible}.lottery-grid[data-v-8afec258]{display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:repeat(3,%?224?%);gap:%?9?%;padding:%?6?%;background:#c97b18;border-radius:%?30?%}.prize-card[data-v-8afec258]{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:%?10?% %?5?%;border:%?4?% solid #fff;border-radius:%?23?%;background:radial-gradient(circle at 50% 25%,#fff 0,#fffdf7 52%,#f5eee4 100%);box-shadow:inset 0 %?-7?% %?12?% rgba(162,104,33,.09);transition:box-shadow .08s,border-color .08s,-webkit-transform .08s;transition:transform .08s,box-shadow .08s,border-color .08s;transition:transform .08s,box-shadow .08s,border-color .08s,-webkit-transform .08s}.prize-card.active[data-v-8afec258]{border-color:#fff673;-webkit-transform:scale(1.06);transform:scale(1.06);box-shadow:0 0 0 %?7?% #ffe226,0 0 %?34?% %?10?% #fff7a8,inset 0 0 %?34?% rgba(255,224,37,.6);-webkit-animation:prize-blink-data-v-8afec258 .5s ease-in-out infinite alternate;animation:prize-blink-data-v-8afec258 .5s ease-in-out infinite alternate}@-webkit-keyframes prize-blink-data-v-8afec258{from{box-shadow:0 0 0 %?7?% #ffe226,0 0 %?20?% %?4?% rgba(255,247,168,.5),inset 0 0 %?20?% rgba(255,224,37,.35)}to{box-shadow:0 0 0 %?9?% #fff673,0 0 %?44?% %?14?% #fff7a8,inset 0 0 %?44?% rgba(255,190,20,.75)}}@keyframes prize-blink-data-v-8afec258{from{box-shadow:0 0 0 %?7?% #ffe226,0 0 %?20?% %?4?% rgba(255,247,168,.5),inset 0 0 %?20?% rgba(255,224,37,.35)}to{box-shadow:0 0 0 %?9?% #fff673,0 0 %?44?% %?14?% #fff7a8,inset 0 0 %?44?% rgba(255,190,20,.75)}}.prize-image[data-v-8afec258]{width:%?118?%;height:%?118?%;margin-bottom:%?6?%;flex-shrink:0}.prize-title[data-v-8afec258]{width:100%;text-align:center;font-size:%?24?%;line-height:1.1;font-weight:950}.prize-subtitle[data-v-8afec258]{width:100%;text-align:center;font-size:%?18?%;line-height:1.2;font-weight:700}.draw-center[data-v-8afec258]{grid-column:2;grid-row:2;display:flex;flex-direction:column;align-items:center;justify-content:center;border:%?5?% solid #fff;border-radius:%?25?%;background:linear-gradient(135deg,#ffd932,#ff893b);overflow:visible}.draw-center.spinning[data-v-8afec258]{-webkit-animation:centerPulse-data-v-8afec258 .45s ease-in-out infinite alternate;animation:centerPulse-data-v-8afec258 .45s ease-in-out infinite alternate}.draw-main-wrap[data-v-8afec258]{display:flex;flex-direction:column;align-items:center}.draw-main[data-v-8afec258]{color:#fff;font-size:%?38?%;line-height:1.05;font-weight:950}.draw-en[data-v-8afec258]{margin-top:%?10?%;color:hsla(0,0%,100%,.82);font-size:%?16?%;letter-spacing:%?2?%}\r\n/* ==================== 边框灯泡 ==================== */.bulbs[data-v-8afec258]{position:absolute;display:flex;justify-content:space-around;z-index:4;pointer-events:none;overflow:visible}.bulbs uni-text[data-v-8afec258]{display:block;width:%?24?%;height:%?8?%;border-radius:%?9?%;background:#fff;box-shadow:0 0 %?14?% #fff;-webkit-animation:bulb-data-v-8afec258 1s steps(2) infinite;animation:bulb-data-v-8afec258 1s steps(2) infinite}.bulbs uni-text[data-v-8afec258]:nth-child(even){-webkit-animation-delay:.5s;animation-delay:.5s}.bulbs-top[data-v-8afec258], .bulbs-bottom[data-v-8afec258]{left:%?64?%;right:%?64?%}.bulbs-top[data-v-8afec258]{top:%?9?%}.bulbs-bottom[data-v-8afec258]{bottom:%?9?%}.bulbs-left[data-v-8afec258], .bulbs-right[data-v-8afec258]{top:%?70?%;bottom:%?70?%;flex-direction:column}.bulbs-left[data-v-8afec258]{left:%?10?%}.bulbs-right[data-v-8afec258]{right:%?10?%}.bulbs-left uni-text[data-v-8afec258], .bulbs-right uni-text[data-v-8afec258]{width:%?8?%;height:%?24?%}\r\n/* ==================== 剩余次数区 ==================== */.count-zone[data-v-8afec258]{height:%?76?%;margin-top:%?40?%;overflow:visible}.count-row[data-v-8afec258]{position:relative;z-index:3;display:flex;align-items:center;justify-content:center;width:%?350?%;height:%?66?%;margin:0 auto;border-radius:%?40?%;background:hsla(0,0%,100%,.95);box-shadow:0 %?8?% %?25?% rgba(104,70,9,.1);font-size:%?23?%}.count-number[data-v-8afec258]{display:inline-flex;align-items:center;justify-content:center;min-width:%?78?%;height:%?56?%;margin:0 %?12?%;border-radius:%?30?%;background:linear-gradient(135deg,#ffe95d,#ffc72c);font-size:%?38?%;font-weight:950}.mascot-layer[data-v-8afec258], .luck-copy-layer[data-v-8afec258]{position:absolute;z-index:2;height:auto;pointer-events:none}.mascot-layer[data-v-8afec258]{top:%?-55?%;left:%?2?%;width:%?150?%;pointer-events:auto}.mascot-bubble[data-v-8afec258]{position:absolute;z-index:7;top:%?-132?%;left:%?16?%;max-width:%?360?%;padding:%?14?% %?20?%;border-radius:%?18?%;background:hsla(0,0%,100%,.98);box-shadow:0 %?8?% %?22?% rgba(104,70,9,.16);color:#7a5a2a;font-size:%?22?%;line-height:1.5}.mascot-bubble[data-v-8afec258]:after{content:"";position:absolute;left:%?34?%;bottom:%?-14?%;border:%?9?% solid transparent;border-top-color:hsla(0,0%,100%,.98)}.luck-copy-layer[data-v-8afec258]{bottom:%?-34?%;right:%?-52?%;width:%?210?%;-webkit-transform:rotate(-14deg);transform:rotate(-14deg);z-index:6}\r\n/* ==================== 抽奖按钮区 ==================== */.draw-actions[data-v-8afec258]{display:flex;gap:%?18?%;margin:%?36?% %?8?% %?12?%;overflow:visible}.draw-tip[data-v-8afec258]{position:relative;z-index:5;margin-top:%?2?%;text-align:center}.draw-tip uni-text[data-v-8afec258]{color:#b09468;font-size:%?21?%}.skip-row[data-v-8afec258]{position:absolute;z-index:6;top:%?10?%;right:%?6?%;display:flex;align-items:center;gap:%?10?%;padding:0 %?22?%;height:%?56?%;border-radius:%?34?%;background:hsla(0,0%,100%,.95);box-shadow:0 %?8?% %?25?% rgba(104,70,9,.1);box-sizing:border-box}.skip-box[data-v-8afec258]{display:flex;align-items:center;justify-content:center;width:%?32?%;height:%?32?%;border:%?3?% solid #d9c194;border-radius:%?8?%;background:#fffdf6;box-sizing:border-box}.skip-box.checked[data-v-8afec258]{background:linear-gradient(135deg,#ffe95d,#ffc72c);border-color:#ffc72c}.skip-check[data-v-8afec258]{color:#4a3208;font-size:%?22?%;font-weight:950;line-height:1}.skip-label[data-v-8afec258]{color:#8a6a3a;font-size:%?24?%;font-weight:700}.draw-button[data-v-8afec258]{position:relative;display:flex;flex:1;flex-direction:column;align-items:center;justify-content:center;height:%?122?%;border-radius:%?34?%;overflow:visible;transition:-webkit-transform .12s,-webkit-filter .12s;transition:transform .12s,filter .12s;transition:transform .12s,filter .12s,-webkit-transform .12s,-webkit-filter .12s;border:%?3?% solid transparent;box-shadow:inset 0 %?8?% %?14?% hsla(0,0%,100%,.5),inset 0 %?-8?% %?14?% rgba(0,0,0,.08),0 %?10?% %?22?% rgba(0,0,0,.12)}.draw-button[data-v-8afec258]:active{-webkit-transform:scale(.96);transform:scale(.96);-webkit-filter:brightness(.95);filter:brightness(.95)}.draw-button.one[data-v-8afec258]{background:linear-gradient(180deg,#fff36b,#ffdf3a 48%,#ffc212);border-color:#ffee9b;box-shadow:inset 0 %?8?% %?14?% hsla(0,0%,100%,.6),inset 0 %?-8?% %?14?% rgba(219,141,0,.3),0 %?10?% %?22?% rgba(255,166,0,.35);color:#4a3208}.draw-button.three[data-v-8afec258]{background:linear-gradient(180deg,#ffb057,#ff7443 52%,#f9512f);border-color:#ffc9a1;box-shadow:inset 0 %?8?% %?14?% hsla(0,0%,100%,.4),inset 0 %?-8?% %?14?% rgba(180,40,10,.28),0 %?10?% %?22?% rgba(249,81,47,.35);color:#fff}.draw-button.nine[data-v-8afec258]{background:linear-gradient(180deg,#4d4d4d,#262626 55%,#121212);border-color:#6b6b6b;box-shadow:inset 0 %?8?% %?14?% hsla(0,0%,100%,.16),inset 0 %?-8?% %?14?% rgba(0,0,0,.45),0 %?10?% %?22?% rgba(0,0,0,.3);color:#fff}.draw-button.disabled[data-v-8afec258]{-webkit-filter:grayscale(.75);filter:grayscale(.75);opacity:.74}.draw-button.selected[data-v-8afec258]{-webkit-transform:translateY(%?-6?%);transform:translateY(%?-6?%);border-color:#fff;box-shadow:inset 0 %?8?% %?14?% hsla(0,0%,100%,.5),inset 0 %?-8?% %?14?% rgba(0,0,0,.08),0 0 0 %?5?% #ffe226,0 %?12?% %?24?% rgba(0,0,0,.18)}.draw-button.selected[data-v-8afec258]:before{content:"已选中";position:absolute;top:%?-22?%;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);padding:%?4?% %?20?%;border:%?3?% solid #fff;border-radius:%?24?%;background:linear-gradient(180deg,#ff7a3c,#ff5c2e);color:#fff;font-size:%?20?%;font-weight:950;line-height:1.4;white-space:nowrap}.button-title[data-v-8afec258]{font-size:%?38?%;line-height:1.2;font-weight:950;letter-spacing:%?2?%}.hot-badge[data-v-8afec258]{position:absolute;top:%?-18?%;right:%?-8?%;padding:%?8?% %?16?%;border:%?2?% solid hsla(0,0%,100%,.75);border-radius:%?20?%;background:linear-gradient(180deg,#ff6a5b,#fa2c3e);color:#fff;font-size:%?19?%;font-weight:800;box-shadow:0 %?6?% %?14?% rgba(164,0,13,.35)}\r\n/* ==================== 中奖动态 ==================== */.news-card[data-v-8afec258]{padding:%?24?% %?17?% %?20?%;border-radius:%?34?%;background:hsla(0,0%,100%,.86);box-shadow:0 %?9?% %?28?% rgba(114,76,8,.09)}.news-header[data-v-8afec258]{display:flex;align-items:center;justify-content:space-between;padding:0 %?9?% %?17?%}.news-title[data-v-8afec258]{display:flex;align-items:center;font-size:%?32?%;font-weight:950}.news-title[data-v-8afec258]:after{content:"";position:absolute;width:%?140?%;height:%?15?%;margin:%?27?% 0 0 %?75?%;border-radius:%?10?%;background:#ffe646;z-index:-1}.trophy[data-v-8afec258]{display:inline-flex;align-items:center;justify-content:center;width:%?52?%;height:%?52?%;margin-right:%?12?%;border-radius:50%;background:linear-gradient(135deg,#fff073,#ffc42e);color:#403109;font-size:%?27?%}.news-swiper[data-v-8afec258]{height:%?480?%}.news-item[data-v-8afec258]{display:flex;align-items:center;height:%?86?%;margin-bottom:%?10?%;padding:0 %?18?%;border-radius:%?25?%;background:rgba(251,247,238,.88);box-sizing:border-box}.avatar[data-v-8afec258]{display:flex;align-items:center;justify-content:center;width:%?58?%;height:%?58?%;flex-shrink:0;border:%?4?% solid #fff;border-radius:50%;color:#fff;font-weight:900;box-shadow:0 %?3?% %?10?% rgba(0,0,0,.15)}.avatar-img[data-v-8afec258]{display:block}.avatar-1[data-v-8afec258]{background:linear-gradient(145deg,#323d51,#b9c8e2)}.avatar-2[data-v-8afec258]{background:linear-gradient(145deg,#603e50,#e3aabc)}.avatar-3[data-v-8afec258]{background:linear-gradient(145deg,#151515,#c58e54)}.news-copy[data-v-8afec258]{flex:1;margin-left:%?16?%;white-space:nowrap;font-size:%?23?%;font-weight:750}.news-prize[data-v-8afec258]{color:#f05234;font-size:%?27?%;font-weight:950}\r\n/* ==================== 弹窗 ==================== */.rules_box[data-v-8afec258]{background:#fff;border-radius:%?30?%;padding:%?0?% %?30?% %?30?%}.rules_box .title[data-v-8afec258]{border-bottom:%?2?% solid #eee;margin-bottom:%?30?%;font-weight:700;padding:%?30?% 0;font-size:15px;text-align:center}.rules_box .neirong[data-v-8afec258]{max-height:%?740?%;min-height:%?350?%;overflow-y:scroll}.jiangpin_pop .zhuangshitu[data-v-8afec258]{width:%?480?%;height:%?131?%;margin:0 auto %?-22?%;position:relative;z-index:9}.jiangpin_pop .zhongjiang_box[data-v-8afec258]{position:relative;z-index:10;background-image:linear-gradient(180deg,#fff,#feeabf);background-repeat:no-repeat;margin:%?20?% auto;width:%?580?%;min-height:%?550?%;border-radius:%?50?%;box-shadow:0 0 0 %?10?% hsla(0,0%,100%,.6);text-align:center}.jiangpin_pop .zhongjiang_box .title[data-v-8afec258]{font-size:25px;font-weight:700;color:#ff5703;margin:%?40?% 0 %?42?%}.jiangpin_pop .zhongjiang_box .prizes_grid[data-v-8afec258]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?16?%;padding:0 %?20?%;max-height:%?600?%;overflow-y:auto;justify-items:center}.jiangpin_pop .zhongjiang_box .prize_item[data-v-8afec258]{display:flex;flex-direction:column;align-items:center;background:#fff;border-radius:%?16?%;padding:%?16?% 0;border:%?2?% solid gold}.jiangpin_pop .zhongjiang_box .prize_item .pic[data-v-8afec258]{width:%?100?%;height:%?100?%;border-radius:%?8?%;margin-bottom:%?8?%}.jiangpin_pop .zhongjiang_box .prize_item .name[data-v-8afec258]{color:#fd7c00;font-size:14px;width:%?180?%;text-align:center}.jiangpin_pop .zhongjiang_box .prize_item.large-prize[data-v-8afec258]{padding:%?30?%;border-width:%?4?%}.jiangpin_pop .zhongjiang_box .prize_item.large-prize .pic[data-v-8afec258]{width:%?200?%;height:%?200?%;margin-bottom:%?16?%}.jiangpin_pop .zhongjiang_box .prize_item.large-prize .name[data-v-8afec258]{font-size:18px;width:%?300?%;font-weight:700}.jiangpin_pop .zhongjiang_box .single-prize[data-v-8afec258]{grid-template-columns:1fr;justify-items:center;padding:%?20?% 0}.jiangpin_pop .zhongjiang_box .pic[data-v-8afec258]{width:%?155?%;height:%?155?%;border-radius:%?10?%;margin:0 auto %?18?%}.jiangpin_pop .zhongjiang_box .name[data-v-8afec258]{color:#fd7c00;font-size:17px}.jiangpin_pop .zhongjiang_box .btn[data-v-8afec258]{margin:%?30?% auto %?20?%;background-color:#ff6a00;border-radius:%?50?%;width:55%;height:%?90?%;border:%?6?% solid #ffb887;color:#fff;font-size:20px;text-align:center;line-height:%?78?%}\r\n/* ==================== 彩带动画层 ==================== */.confetti-layer[data-v-8afec258]{position:fixed;inset:0;z-index:1006;pointer-events:none;overflow:hidden}.confetti-layer uni-text[data-v-8afec258]{position:absolute;top:%?-35?%;width:%?13?%;height:%?28?%;border-radius:%?3?%;-webkit-animation:confettiFall-data-v-8afec258 1.1s ease-in forwards;animation:confettiFall-data-v-8afec258 1.1s ease-in forwards}\r\n/* ==================== 动画 ==================== */@-webkit-keyframes bulb-data-v-8afec258{50%{opacity:.38;box-shadow:none}}@keyframes bulb-data-v-8afec258{50%{opacity:.38;box-shadow:none}}@-webkit-keyframes centerPulse-data-v-8afec258{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(.96);transform:scale(.96)}}@keyframes centerPulse-data-v-8afec258{from{-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:scale(.96);transform:scale(.96)}}@-webkit-keyframes confettiFall-data-v-8afec258{to{top:105vh;-webkit-transform:translateX(%?70?%) rotate(620deg);transform:translateX(%?70?%) rotate(620deg)}}@keyframes confettiFall-data-v-8afec258{to{top:105vh;-webkit-transform:translateX(%?70?%) rotate(620deg);transform:translateX(%?70?%) rotate(620deg)}}\r\n/* ==================== 底部免责声明提示条 ==================== */.disclaimer[data-v-8afec258]{position:relative;z-index:5;display:flex;align-items:center;margin:%?24?% %?28?% %?24?%;padding:%?16?% %?24?%;border-radius:%?18?%;background:#fff7df;box-sizing:border-box}.d-icon[data-v-8afec258]{flex-shrink:0;display:flex;align-items:center;justify-content:center;width:%?30?%;height:%?30?%;margin:0 %?12?% 0 0;border-radius:50%;background:#6b6256;color:#fff7df;font-size:%?20?%;font-weight:900}.d-text[data-v-8afec258]{flex:1;color:#6b6256;font-size:%?23?%;line-height:1.5}.d-strong[data-v-8afec258]{font-weight:800}\r\n/* ==================== 小屏适配 ==================== */@media screen and (max-width:360px){.lottery-shell[data-v-8afec258]{width:%?606?%}.lottery-grid[data-v-8afec258]{grid-template-rows:repeat(3,%?186?%)}.news-copy[data-v-8afec258]{font-size:%?21?%}}\r\n/* ==================== 微信小程序适配 ==================== */',
          "",
        ]),
        (t.exports = e);
    },
    "1c54": function (t, e, i) {
      "use strict";
      var a = i("f5fc"),
        n = i.n(a);
      n.a;
    },
    "200a": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("5934"),
        n = i("43a8");
      for (var r in n)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(r);
      i("1c54");
      var o = i("828b"),
        s = Object(o["a"])(
          n["default"],
          a["b"],
          a["c"],
          !1,
          null,
          "8afec258",
          null,
          !1,
          a["a"],
          void 0,
        );
      e["default"] = s.exports;
    },
    "20f3": function (t, e, i) {
      "use strict";
      var a = i("8bdb"),
        n = i("5145");
      a(
        { target: "Array", proto: !0, forced: n !== [].lastIndexOf },
        { lastIndexOf: n },
      );
    },
    "43a8": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("0e99"),
        n = i.n(a);
      for (var r in a)
        ["default"].indexOf(r) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(r);
      e["default"] = n.a;
    },
    5934: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return r;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { uvPopup: i("ce8a").default, uvParse: i("c96a").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "content lucky-page" },
            [
              i(
                "v-uni-view",
                { staticClass: "visual-layers" },
                [
                  i("v-uni-view", { staticClass: "gold-background" }),
                  i("v-uni-image", {
                    staticClass: "lower-background",
                    attrs: {
                      src: t.base_url + "/files/imgs/lucky-draw/cream-bg.png",
                      mode: "aspectFill",
                    },
                  }),
                  i("v-uni-image", {
                    staticClass: "dark-background",
                    attrs: {
                      src: t.base_url + "/files/imgs/lucky-draw/dark-bg.png",
                      mode: "aspectFill",
                    },
                  }),
                  i("v-uni-image", {
                    staticClass: "header-copy",
                    attrs: {
                      src: t.base_url + "/files/imgs/lucky-draw/header.png",
                      mode: "widthFix",
                    },
                  }),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "topbar" },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "top-action back-action",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.goBack.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      i("v-uni-text", { staticClass: "back-arrow" }, [
                        t._v("‹"),
                      ]),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "top-links" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "top-action",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.goOrders.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-text", { staticClass: "action-icon" }, [
                            t._v("▤"),
                          ]),
                          i("v-uni-text", [t._v("抽奖订单")]),
                        ],
                        1,
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "top-action",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.openRules.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          i("v-uni-text", { staticClass: "question-icon" }, [
                            t._v("?"),
                          ]),
                          i("v-uni-text", [t._v("抽奖规则")]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "lottery-shell" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "bulbs bulbs-top" },
                    t._l(6, function (t) {
                      return i("v-uni-text", { key: "t" + t });
                    }),
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "bulbs bulbs-bottom" },
                    t._l(6, function (t) {
                      return i("v-uni-text", { key: "b" + t });
                    }),
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "bulbs bulbs-left" },
                    t._l(5, function (t) {
                      return i("v-uni-text", { key: "l" + t });
                    }),
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "bulbs bulbs-right" },
                    t._l(5, function (t) {
                      return i("v-uni-text", { key: "r" + t });
                    }),
                    1,
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "lottery-grid" },
                    [
                      t._l(t.prizes, function (e) {
                        return i(
                          "v-uni-view",
                          {
                            key: e.id,
                            staticClass: "prize-card",
                            class: {
                              active: t.activeGridIndex === e.gridIndex,
                            },
                            style: { gridColumn: e.col, gridRow: e.row },
                          },
                          [
                            i("v-uni-image", {
                              staticClass: "prize-image",
                              attrs: { src: e.img, mode: "aspectFit" },
                            }),
                            i("v-uni-text", { staticClass: "prize-title" }, [
                              t._v(t._s(e.title)),
                            ]),
                            e.subtitle
                              ? i(
                                  "v-uni-text",
                                  { staticClass: "prize-subtitle" },
                                  [t._v(t._s(e.subtitle))],
                                )
                              : t._e(),
                          ],
                          1,
                        );
                      }),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "draw-center",
                          class: { spinning: t.isDrawing },
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)),
                                t.startDraw(t.selectedTimes);
                            },
                          },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "draw-main-wrap" },
                            [
                              i("v-uni-text", { staticClass: "draw-main" }, [
                                t._v("立即"),
                              ]),
                              i("v-uni-text", { staticClass: "draw-main" }, [
                                t._v("抽奖"),
                              ]),
                            ],
                            1,
                          ),
                          i("v-uni-text", { staticClass: "draw-en" }, [
                            t._v("GOOD LUCK"),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    2,
                  ),
                  i("v-uni-image", {
                    staticClass: "luck-copy-layer",
                    attrs: {
                      src: t.base_url + "/files/imgs/lucky-draw/slogan.png",
                      mode: "widthFix",
                    },
                  }),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "count-zone" },
                [
                  i("v-uni-image", {
                    staticClass: "mascot-layer",
                    attrs: {
                      src: t.base_url + "/files/imgs/lucky-draw/mascot.png",
                      mode: "widthFix",
                    },
                    on: {
                      click: function (e) {
                        (arguments[0] = e = t.$handleEvent(e)),
                          t.touchMascot.apply(void 0, arguments);
                      },
                    },
                  }),
                  t.mascotTipShow
                    ? i("v-uni-view", { staticClass: "mascot-bubble" }, [
                        t._v(t._s(t.mascotTip)),
                      ])
                    : t._e(),
                  t.remainCount > 0
                    ? i(
                        "v-uni-view",
                        { staticClass: "count-row" },
                        [
                          i("v-uni-text", [t._v("剩余抽奖次数：")]),
                          i("v-uni-text", { staticClass: "count-number" }, [
                            t._v(t._s(t.remainCount)),
                          ]),
                          i("v-uni-text", [t._v("次")]),
                        ],
                        1,
                      )
                    : 1 == t.order_type
                      ? i(
                          "v-uni-view",
                          { staticClass: "count-row" },
                          [i("v-uni-text", [t._v("请选择次数点抽奖去购买")])],
                          1,
                        )
                      : i(
                          "v-uni-view",
                          { staticClass: "count-row" },
                          [i("v-uni-text", [t._v("本次抽奖已抽完")])],
                          1,
                        ),
                  i(
                    "v-uni-view",
                    {
                      staticClass: "skip-row",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            (t.skipAnimation = !t.skipAnimation);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "skip-box",
                          class: { checked: t.skipAnimation },
                        },
                        [
                          t.skipAnimation
                            ? i("v-uni-text", { staticClass: "skip-check" }, [
                                t._v("✓"),
                              ])
                            : t._e(),
                        ],
                        1,
                      ),
                      i("v-uni-text", { staticClass: "skip-label" }, [
                        t._v("跳过动画"),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "draw-actions" },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "draw-button one",
                      class: {
                        selected: 1 === t.selectedTimes,
                        disabled: t.isDrawing,
                      },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.selectTimes(1);
                        },
                      },
                    },
                    [
                      i("v-uni-text", { staticClass: "button-title" }, [
                        t._v("抽一次"),
                      ]),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    {
                      staticClass: "draw-button three",
                      class: {
                        selected: 3 === t.selectedTimes,
                        disabled:
                          t.isDrawing ||
                          (t.remainCount < 3 &&
                            !(1 == t.order_type && 0 == t.remainCount)),
                      },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.selectTimes(3);
                        },
                      },
                    },
                    [
                      i("v-uni-text", { staticClass: "button-title" }, [
                        t._v("抽 3 次"),
                      ]),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-view",
                    {
                      staticClass: "draw-button nine",
                      class: {
                        selected: 9 === t.selectedTimes,
                        disabled:
                          t.isDrawing ||
                          (t.remainCount < 9 &&
                            !(1 == t.order_type && 0 == t.remainCount)),
                      },
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)),
                            t.selectTimes(9);
                        },
                      },
                    },
                    [
                      i("v-uni-text", { staticClass: "hot-badge" }, [
                        t._v("超值"),
                      ]),
                      i("v-uni-text", { staticClass: "button-title" }, [
                        t._v("抽 9 次"),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              t.remainCount > 0
                ? i(
                    "v-uni-view",
                    { staticClass: "draw-tip" },
                    [i("v-uni-text", [t._v("单点选中, 再次点击直接抽奖")])],
                    1,
                  )
                : t._e(),
              i(
                "v-uni-view",
                { staticClass: "news-card" },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "news-header" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "news-title" },
                        [
                          i("v-uni-text", { staticClass: "trophy" }, [
                            t._v("★"),
                          ]),
                          i("v-uni-text", [t._v("中奖动态")]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  ),
                  i(
                    "v-uni-swiper",
                    {
                      staticClass: "news-swiper",
                      attrs: {
                        vertical: !0,
                        circular: t.news.length > 5,
                        autoplay: t.news.length > 5,
                        "disable-touch": t.news.length <= 5,
                        interval: 2600,
                        duration: 500,
                        "display-multiple-items": "5",
                      },
                    },
                    t._l(t.news, function (e) {
                      return i(
                        "v-uni-swiper-item",
                        { key: e.id },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "news-item" },
                            [
                              e.thumb
                                ? i("v-uni-image", {
                                    staticClass: "avatar avatar-img",
                                    attrs: { src: e.thumb, mode: "aspectFill" },
                                  })
                                : i(
                                    "v-uni-view",
                                    {
                                      staticClass: "avatar",
                                      class: "avatar-" + e.avatar,
                                    },
                                    [t._v(t._s(e.avatarText))],
                                  ),
                              i(
                                "v-uni-view",
                                { staticClass: "news-copy" },
                                [
                                  i("v-uni-text", [
                                    t._v("恭喜 " + t._s(e.name) + " 抽中 "),
                                  ]),
                                  i(
                                    "v-uni-text",
                                    { staticClass: "news-prize" },
                                    [t._v(t._s(e.prize))],
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
                    }),
                    1,
                  ),
                ],
                1,
              ),
              i(
                "v-uni-view",
                { staticClass: "disclaimer" },
                [
                  i("v-uni-view", { staticClass: "d-icon" }, [t._v("!")]),
                  i(
                    "v-uni-view",
                    { staticClass: "d-text" },
                    [
                      i("v-uni-text", { staticClass: "d-strong" }, [
                        t._v("免责声明："),
                      ]),
                      i("v-uni-text", [
                        t._v(
                          "本页面抽奖内容仅为平台玩法展示，奖品为平台虚拟道具，请理性参与，未成年人请在监护人陪同下使用。",
                        ),
                      ]),
                    ],
                    1,
                  ),
                ],
                1,
              ),
              t.confetti
                ? i(
                    "v-uni-view",
                    { staticClass: "confetti-layer" },
                    t._l(t.confettiList, function (t, e) {
                      return i("v-uni-text", { key: e, style: t });
                    }),
                    1,
                  )
                : t._e(),
              i(
                "uv-popup",
                {
                  ref: "rulesPopup",
                  attrs: {
                    mode: "center",
                    bgColor: "none",
                    overlayOpacity: "0.65",
                    closeable: !0,
                  },
                },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "rules_box" },
                    [
                      i("v-uni-view", { staticClass: "title" }, [
                        t._v(t._s(t.rule.rule_title)),
                      ]),
                      i(
                        "v-uni-view",
                        { staticClass: "neirong" },
                        [
                          i("uv-parse", {
                            attrs: { content: t.rule.rule_des },
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
              i(
                "uv-popup",
                {
                  ref: "jiangpinPopup",
                  attrs: {
                    mode: "center",
                    bgColor: "none",
                    overlayOpacity: "0.65",
                    "close-on-click-overlay": !1,
                  },
                },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "jiangpin_pop" },
                    [
                      i("img", {
                        staticClass: "zhuangshitu",
                        attrs: {
                          src: t.base_url + "/files/imgs/active/turn_gift.png",
                        },
                      }),
                      i(
                        "v-uni-view",
                        { staticClass: "zhongjiang_box" },
                        [
                          i("v-uni-view", { staticClass: "title" }, [
                            t._v("恭喜您抽中"),
                          ]),
                          t.prizes_list.length > 0
                            ? i(
                                "v-uni-view",
                                {
                                  staticClass: "prizes_grid",
                                  class: {
                                    "single-prize": 1 === t.prizes_list.length,
                                  },
                                },
                                t._l(t.prizes_list, function (e, a) {
                                  return i(
                                    "v-uni-view",
                                    {
                                      key: a,
                                      staticClass: "prize_item",
                                      class: {
                                        "large-prize":
                                          1 === t.prizes_list.length,
                                      },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "pic",
                                        attrs: {
                                          src: e.thumb,
                                          mode: "aspectFill",
                                        },
                                      }),
                                      i(
                                        "v-uni-view",
                                        { staticClass: "name uv-line-2" },
                                        [t._v(t._s(e.title))],
                                      ),
                                    ],
                                    1,
                                  );
                                }),
                                1,
                              )
                            : t._e(),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "btn",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)),
                                    t.confirm.apply(void 0, arguments);
                                },
                              },
                            },
                            [t._v("开心收下")],
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
        r = [];
    },
    f5fc: function (t, e, i) {
      var a = i("11fd");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("967d").default;
      n("69529c32", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
//# sourceMappingURL=pages_sub1-active-lucky_draw.8bf6fd42.js.map
