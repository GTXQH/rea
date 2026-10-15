(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-index-daren"],
  {
    "0e55": function (a, t, e) {
      "use strict";
      e.d(t, "b", function () {
        return n;
      }),
        e.d(t, "c", function () {
          return l;
        }),
        e.d(t, "a", function () {
          return i;
        });
      var i = {
          uvLoadingIcon: e("17f5").default,
          uvSearch: e("146d").default,
          uvIcon: e("1a07").default,
          uvEmpty: e("caef").default,
        },
        n = function () {
          var a = this,
            t = a.$createElement,
            e = a._self._c || t;
          return e(
            "v-uni-view",
            { staticClass: "content" },
            [
              a.loading
                ? e(
                    "v-uni-view",
                    { staticClass: "page_loading" },
                    [
                      e(
                        "v-uni-view",
                        { staticClass: "loading_inner" },
                        [
                          e("uv-loading-icon", {
                            attrs: {
                              mode: "circle",
                              color: "#999",
                              size: "28",
                            },
                          }),
                          e("v-uni-text", { staticClass: "loading_text" }, [
                            a._v("加载中..."),
                          ]),
                        ],
                        1,
                      ),
                    ],
                    1,
                  )
                : a._e(),
              e(
                "v-uni-view",
                { staticClass: "search_bar" },
                [
                  e("uv-search", {
                    attrs: {
                      placeholder: "搜索打手昵称",
                      showAction: !1,
                      shape: "round",
                      bgColor: "#fff",
                    },
                    on: {
                      search: function (t) {
                        (arguments[0] = t = a.$handleEvent(t)),
                          a.search.apply(void 0, arguments);
                      },
                      clear: function (t) {
                        (arguments[0] = t = a.$handleEvent(t)),
                          a.search.apply(void 0, arguments);
                      },
                    },
                    model: {
                      value: a.keyword,
                      callback: function (t) {
                        a.keyword = t;
                      },
                      expression: "keyword",
                    },
                  }),
                ],
                1,
              ),
              0 == a.style
                ? e(
                    "v-uni-scroll-view",
                    {
                      staticClass: "tag_tabs",
                      attrs: { "scroll-x": !0, "show-scrollbar": !1 },
                    },
                    [
                      e(
                        "v-uni-view",
                        {
                          staticClass: "tag_item",
                          class: { active: 0 == a.current_tag },
                          on: {
                            click: function (t) {
                              (arguments[0] = t = a.$handleEvent(t)),
                                a.changeTag(0);
                            },
                          },
                        },
                        [a._v("全部")],
                      ),
                      a._l(a.tags, function (t, i) {
                        return e(
                          "v-uni-view",
                          {
                            key: t.id,
                            staticClass: "tag_item",
                            class: { active: a.current_tag == t.id },
                            on: {
                              click: function (e) {
                                (arguments[0] = e = a.$handleEvent(e)),
                                  a.changeTag(t.id);
                              },
                            },
                          },
                          [a._v(a._s(t.name))],
                        );
                      }),
                    ],
                    2,
                  )
                : a._e(),
              1 == a.style
                ? [
                    a.catList.length > 1
                      ? e(
                          "v-uni-scroll-view",
                          {
                            staticClass: "cat_tabs",
                            class: { flex_box: a.catList.length <= 5 },
                            attrs: { "scroll-x": !0, "show-scrollbar": !1 },
                          },
                          [
                            e(
                              "v-uni-view",
                              {
                                staticClass: "cat_tabs_inner",
                                class: { center: a.catList.length <= 5 },
                              },
                              a._l(a.catList, function (t, i) {
                                return e(
                                  "v-uni-view",
                                  {
                                    key: t.id,
                                    staticClass: "cat_item",
                                    class: { active: a.current_cat == t.id },
                                    on: {
                                      click: function (e) {
                                        (arguments[0] = e = a.$handleEvent(e)),
                                          a.changeCat(t.id);
                                      },
                                    },
                                  },
                                  [
                                    t.thumb
                                      ? e("v-uni-image", {
                                          staticClass: "cat_icon",
                                          attrs: {
                                            src: t.thumb,
                                            mode: "aspectFill",
                                          },
                                        })
                                      : e(
                                          "v-uni-view",
                                          { staticClass: "cat_icon default" },
                                          [a._v(a._s(t.name.slice(0, 1)))],
                                        ),
                                    e(
                                      "v-uni-text",
                                      { staticClass: "cat_name" },
                                      [a._v(a._s(t.name))],
                                    ),
                                  ],
                                  1,
                                );
                              }),
                              1,
                            ),
                          ],
                          1,
                        )
                      : a._e(),
                    e(
                      "v-uni-view",
                      { staticClass: "sex_banner_row" },
                      [
                        e(
                          "v-uni-view",
                          {
                            staticClass: "sex_banner",
                            class: { active: 1 == a.current_sex },
                            on: {
                              click: function (t) {
                                (arguments[0] = t = a.$handleEvent(t)),
                                  a.changeSex(1);
                              },
                            },
                          },
                          [
                            1 == a.current_sex && a.banner_male_on
                              ? e("v-uni-image", {
                                  staticClass: "banner_img",
                                  attrs: {
                                    src: a.banner_male_on,
                                    mode: "aspectFill",
                                  },
                                })
                              : a.banner_male
                                ? e("v-uni-image", {
                                    staticClass: "banner_img",
                                    attrs: {
                                      src: a.banner_male,
                                      mode: "aspectFill",
                                    },
                                  })
                                : e(
                                    "v-uni-view",
                                    { staticClass: "banner_placeholder" },
                                    [
                                      e(
                                        "v-uni-text",
                                        { staticClass: "placeholder_text" },
                                        [a._v("男陪专区")],
                                      ),
                                    ],
                                    1,
                                  ),
                            1 == a.current_sex
                              ? e("v-uni-view", { staticClass: "banner_mask" })
                              : a._e(),
                          ],
                          1,
                        ),
                        e(
                          "v-uni-view",
                          {
                            staticClass: "sex_banner",
                            class: { active: 2 == a.current_sex },
                            on: {
                              click: function (t) {
                                (arguments[0] = t = a.$handleEvent(t)),
                                  a.changeSex(2);
                              },
                            },
                          },
                          [
                            2 == a.current_sex && a.banner_female_on
                              ? e("v-uni-image", {
                                  staticClass: "banner_img",
                                  attrs: {
                                    src: a.banner_female_on,
                                    mode: "aspectFill",
                                  },
                                })
                              : a.banner_female
                                ? e("v-uni-image", {
                                    staticClass: "banner_img",
                                    attrs: {
                                      src: a.banner_female,
                                      mode: "aspectFill",
                                    },
                                  })
                                : e(
                                    "v-uni-view",
                                    { staticClass: "banner_placeholder" },
                                    [
                                      e(
                                        "v-uni-text",
                                        { staticClass: "placeholder_text" },
                                        [a._v("女陪专区")],
                                      ),
                                    ],
                                    1,
                                  ),
                            2 == a.current_sex
                              ? e("v-uni-view", { staticClass: "banner_mask" })
                              : a._e(),
                          ],
                          1,
                        ),
                      ],
                      1,
                    ),
                  ]
                : a._e(),
              1 == a.style && a.sellers.length > 0
                ? e(
                    "v-uni-view",
                    { staticClass: "flat_list" },
                    a._l(a.sellers, function (t, i) {
                      return e(
                        "v-uni-view",
                        {
                          key: t.id,
                          staticClass: "flat_card",
                          class: { boy: 1 == t.sex, girl: 2 == t.sex },
                        },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "flat_left" },
                            [
                              e("v-uni-image", {
                                staticClass: "flat_avatar",
                                attrs: { src: t.avatar, mode: "aspectFill" },
                                on: {
                                  click: function (e) {
                                    (arguments[0] = e = a.$handleEvent(e)),
                                      a.jumpSeller(t.id);
                                  },
                                },
                              }),
                              t.voice_url
                                ? e(
                                    "v-uni-view",
                                    {
                                      staticClass: "flat_voice",
                                      class: {
                                        boy: 1 == t.sex,
                                        girl: 2 == t.sex,
                                        playing: a.voicePlayingId == t.id,
                                      },
                                      on: {
                                        click: function (e) {
                                          e.stopPropagation(),
                                            (arguments[0] = e =
                                              a.$handleEvent(e)),
                                            a.playVoice(t);
                                        },
                                      },
                                    },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "voice_play" },
                                        [
                                          e("uv-icon", {
                                            attrs: {
                                              name:
                                                a.voicePlayingId == t.id
                                                  ? "pause"
                                                  : "play-right-fill",
                                              color: "#fff",
                                              size: "12",
                                            },
                                          }),
                                        ],
                                        1,
                                      ),
                                      e(
                                        "v-uni-view",
                                        {
                                          staticClass: "wave_progress",
                                          class: {
                                            playing: a.voicePlayingId == t.id,
                                          },
                                        },
                                        [
                                          e("v-uni-view", {
                                            staticClass: "wave_inner",
                                            style: {
                                              width: a.getProgress(t.id) + "%",
                                            },
                                          }),
                                          e(
                                            "v-uni-view",
                                            { staticClass: "wave_lines" },
                                            a._l(4, function (a, t) {
                                              return e("v-uni-view", {
                                                key: t,
                                                staticClass: "wl",
                                              });
                                            }),
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      e(
                                        "v-uni-text",
                                        { staticClass: "duration" },
                                        [a._v(a._s(a.getRemainTime(t)))],
                                      ),
                                    ],
                                    1,
                                  )
                                : a._e(),
                            ],
                            1,
                          ),
                          e(
                            "v-uni-view",
                            {
                              staticClass: "flat_mid",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = a.$handleEvent(e)),
                                    a.jumpSeller(t.id);
                                },
                              },
                            },
                            [
                              e(
                                "v-uni-view",
                                { staticClass: "flat_top" },
                                [
                                  e(
                                    "v-uni-text",
                                    { staticClass: "flat_nickname" },
                                    [
                                      a._v(
                                        a._s(
                                          t.nickname.length > 10
                                            ? t.nickname.slice(0, 10) + "..."
                                            : t.nickname,
                                        ),
                                      ),
                                    ],
                                  ),
                                  1 == t.sex
                                    ? e(
                                        "v-uni-text",
                                        { staticClass: "flat_sex" },
                                        [a._v("♂")],
                                      )
                                    : 2 == t.sex
                                      ? e(
                                          "v-uni-text",
                                          { staticClass: "flat_sex girl" },
                                          [a._v("♀")],
                                        )
                                      : a._e(),
                                ],
                                1,
                              ),
                              t.intro
                                ? e(
                                    "v-uni-view",
                                    { staticClass: "flat_intro" },
                                    [a._v(a._s(t.intro))],
                                  )
                                : a._e(),
                              t.tags && t.tags.length > 0
                                ? e(
                                    "v-uni-view",
                                    { staticClass: "flat_tags" },
                                    a._l(t.tags, function (t, i) {
                                      return e(
                                        "v-uni-text",
                                        { key: t.id, staticClass: "flat_tag" },
                                        [a._v(a._s(t.name))],
                                      );
                                    }),
                                    1,
                                  )
                                : a._e(),
                            ],
                            1,
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "flat_order_col" },
                            [
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "flat_status",
                                  class: {
                                    rest: 0 == t.online,
                                    busy: 1 == t.online && 1 == t.order_status,
                                    available:
                                      1 == t.online && 0 == t.order_status,
                                  },
                                },
                                [
                                  e("v-uni-text", { staticClass: "dot" }),
                                  e("v-uni-text", [
                                    a._v(
                                      a._s(
                                        0 == t.online
                                          ? "休息中"
                                          : 1 == t.order_status
                                            ? "服务中"
                                            : "可接单",
                                      ),
                                    ),
                                  ]),
                                ],
                                1,
                              ),
                              e(
                                "v-uni-view",
                                {
                                  staticClass: "flat_order_btn",
                                  on: {
                                    click: function (e) {
                                      e.stopPropagation(),
                                        (arguments[0] = e = a.$handleEvent(e)),
                                        a.showOrderPopup(t.id);
                                    },
                                  },
                                },
                                [e("v-uni-text", [a._v("下单")])],
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
                  )
                : a._e(),
              0 == a.style && a.groupList.length > 0
                ? e(
                    "v-uni-view",
                    { staticClass: "group_list" },
                    a._l(a.groupList, function (t, i) {
                      return e(
                        "v-uni-view",
                        { key: i, staticClass: "group_section" },
                        [
                          e(
                            "v-uni-view",
                            { staticClass: "group_header" },
                            [
                              e("v-uni-view", { staticClass: "group_name" }, [
                                a._v(a._s(t.tag_name)),
                              ]),
                            ],
                            1,
                          ),
                          e(
                            "v-uni-view",
                            { staticClass: "group_sellers grid" },
                            a._l(t.sellers, function (t, i) {
                              return e(
                                "v-uni-view",
                                {
                                  key: t.id,
                                  staticClass: "seller_col",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = a.$handleEvent(e)),
                                        a.jumpSeller(t.id);
                                    },
                                  },
                                },
                                [
                                  e(
                                    "v-uni-view",
                                    { staticClass: "card_head" },
                                    [
                                      e(
                                        "v-uni-view",
                                        { staticClass: "head" },
                                        [
                                          e(
                                            "v-uni-view",
                                            { staticClass: "avatar_inner" },
                                            [
                                              e("v-uni-image", {
                                                attrs: {
                                                  src: t.avatar,
                                                  mode: "aspectFill",
                                                },
                                              }),
                                              e(
                                                "v-uni-view",
                                                {
                                                  staticClass: "nickname_mask",
                                                },
                                                [
                                                  e(
                                                    "v-uni-text",
                                                    {
                                                      staticClass:
                                                        "nickname_text uv-line-1",
                                                    },
                                                    [a._v(a._s(t.nickname))],
                                                  ),
                                                ],
                                                1,
                                              ),
                                              e("v-uni-view", {
                                                staticClass: "online_dot",
                                                class: { off: 0 == t.online },
                                              }),
                                            ],
                                            1,
                                          ),
                                        ],
                                        1,
                                      ),
                                      t.voice_url
                                        ? e(
                                            "v-uni-view",
                                            {
                                              staticClass: "voice_bar",
                                              class: {
                                                boy: 1 == t.sex,
                                                girl: 2 == t.sex,
                                                playing:
                                                  a.voicePlayingId == t.id,
                                              },
                                              on: {
                                                click: function (e) {
                                                  e.stopPropagation(),
                                                    (arguments[0] = e =
                                                      a.$handleEvent(e)),
                                                    a.playVoice(t);
                                                },
                                              },
                                            },
                                            [
                                              e(
                                                "v-uni-view",
                                                { staticClass: "voice_play" },
                                                [
                                                  e("uv-icon", {
                                                    attrs: {
                                                      name:
                                                        a.voicePlayingId == t.id
                                                          ? "pause"
                                                          : "play-right-fill",
                                                      color: "#fff",
                                                      size: "11",
                                                    },
                                                  }),
                                                ],
                                                1,
                                              ),
                                              e(
                                                "v-uni-view",
                                                {
                                                  staticClass: "wave_progress",
                                                  class: {
                                                    playing:
                                                      a.voicePlayingId == t.id,
                                                  },
                                                },
                                                [
                                                  e("v-uni-view", {
                                                    staticClass: "wave_inner",
                                                    style: {
                                                      width:
                                                        a.getProgress(t.id) +
                                                        "%",
                                                    },
                                                  }),
                                                  e(
                                                    "v-uni-view",
                                                    {
                                                      staticClass: "wave_lines",
                                                    },
                                                    a._l(4, function (a, t) {
                                                      return e("v-uni-view", {
                                                        key: t,
                                                        staticClass: "wl",
                                                      });
                                                    }),
                                                    1,
                                                  ),
                                                ],
                                                1,
                                              ),
                                              e(
                                                "v-uni-text",
                                                { staticClass: "duration" },
                                                [
                                                  a._v(
                                                    a._s(a.getRemainTime(t)),
                                                  ),
                                                ],
                                              ),
                                            ],
                                            1,
                                          )
                                        : a._e(),
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
                      );
                    }),
                    1,
                  )
                : a._e(),
              (0 == a.style
                ? 0 == a.groupList.length
                : 0 == a.sellers.length) && "nomore" == a.status
                ? e("uv-empty", {
                    attrs: {
                      mode: "data",
                      text: "暂无数据",
                      icon: "/static/imgs/no-data.png",
                    },
                  })
                : a._e(),
              e("tab-bar", { attrs: { selected: a.selected } }),
              a.showBackToTop
                ? e(
                    "v-uni-view",
                    {
                      staticClass: "backto_top flex_box",
                      on: {
                        click: function (t) {
                          (arguments[0] = t = a.$handleEvent(t)),
                            a.scrollToTop.apply(void 0, arguments);
                        },
                      },
                    },
                    [
                      e("uv-icon", {
                        attrs: { name: "arrow-up", color: "#000", size: "16" },
                      }),
                      e("v-uni-view", { staticClass: "dd" }, [a._v("顶部")]),
                    ],
                    1,
                  )
                : a._e(),
            ],
            2,
          );
        },
        l = [];
    },
    3471: function (a, t, e) {
      "use strict";
      e("6a54"),
        Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (a, t) {
          var e =
            ("undefined" !== typeof Symbol && a[Symbol.iterator]) ||
            a["@@iterator"];
          if (!e) {
            if (
              Array.isArray(a) ||
              (e = (0, i.default)(a)) ||
              (t && a && "number" === typeof a.length)
            ) {
              e && (a = e);
              var n = 0,
                l = function () {};
              return {
                s: l,
                n: function () {
                  return n >= a.length
                    ? { done: !0 }
                    : { done: !1, value: a[n++] };
                },
                e: function (a) {
                  throw a;
                },
                f: l,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
            );
          }
          var s,
            o = !0,
            r = !1;
          return {
            s: function () {
              e = e.call(a);
            },
            n: function () {
              var a = e.next();
              return (o = a.done), a;
            },
            e: function (a) {
              (r = !0), (s = a);
            },
            f: function () {
              try {
                o || null == e["return"] || e["return"]();
              } finally {
                if (r) throw s;
              }
            },
          };
        }),
        e("01a2"),
        e("e39c"),
        e("bf0f"),
        e("844d"),
        e("18f7"),
        e("de6c"),
        e("7a76"),
        e("c9b5");
      var i = (function (a) {
        return a && a.__esModule ? a : { default: a };
      })(e("5d6b"));
    },
    "7bd8": function (a, t, e) {
      var i = e("c86c");
      (t = i(!1)),
        t.push([
          a.i,
          '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-b29ff910]{background:#f8f8f8}body.?%PAGE?%[data-v-b29ff910]{background:#f8f8f8}.backto_top[data-v-b29ff910]{z-index:9;position:fixed;right:%?30?%;bottom:14%;flex-direction:column;width:%?104?%;height:%?104?%;border-radius:%?20?%;justify-content:center;background:#ffe610;border:%?4?% solid #000}.backto_top[data-v-b29ff910] .uv-icon span{font-weight:700}.backto_top .dd[data-v-b29ff910]{margin:%?2?% auto %?4?%;font-size:13.4px}.page_loading[data-v-b29ff910]{position:fixed;left:0;top:0;right:0;bottom:0;background:#f8f8f8;display:flex;align-items:center;justify-content:center;z-index:999}.page_loading .loading_inner[data-v-b29ff910]{display:flex;flex-direction:column;align-items:center}.page_loading .loading_text[data-v-b29ff910]{font-size:13px;color:#999;margin-top:%?16?%}.content[data-v-b29ff910]{padding-bottom:%?30?%}\r\n/* 搜索栏 */.search_bar[data-v-b29ff910]{padding:%?20?% %?24?% 0;background:#fff}\r\n/* ==================== 游戏分类横滚（列表式） ==================== */.cat_tabs[data-v-b29ff910]{white-space:nowrap;background:#fff;padding:%?16?% %?16?% %?10?%}.cat_tabs.flex_box .cat_tabs_inner[data-v-b29ff910]{display:flex;width:100%}.cat_tabs .cat_tabs_inner[data-v-b29ff910]{display:inline-flex}.cat_tabs .cat_tabs_inner.center[data-v-b29ff910]{justify-content:center}.cat_tabs .cat_item[data-v-b29ff910]{display:inline-flex;flex-direction:column;align-items:center;justify-content:center;width:%?120?%;padding:%?8?% %?4?%;vertical-align:top;flex-shrink:0}.cat_tabs .cat_item .cat_icon[data-v-b29ff910]{width:%?84?%;height:%?84?%;border-radius:50%;background:#f4f4f4;display:flex;align-items:center;justify-content:center;font-size:14px;color:#666;margin-bottom:%?8?%;overflow:hidden}.cat_tabs .cat_item .cat_icon.default[data-v-b29ff910]{color:#fff;background:#ddd}.cat_tabs .cat_item .cat_name[data-v-b29ff910]{font-size:12px;color:#333;max-width:%?110?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.cat_tabs .cat_item.active .cat_name[data-v-b29ff910]{color:#e69c00;font-weight:700}.cat_tabs .cat_item.active .cat_icon[data-v-b29ff910]{box-shadow:0 0 0 %?4?% #ffe610}\r\n/* 标签 Tabs（宫格式） */.tag_tabs[data-v-b29ff910]{white-space:nowrap;padding:%?20?% %?16?% %?20?%;background:#fff;margin:%?20?% %?24?% 0;border-radius:%?16?%}.tag_tabs .tag_item[data-v-b29ff910]{display:inline-block;padding:0 %?10?%;margin:0 %?6?%;height:%?40?%;line-height:%?40?%;border-radius:%?20?%;font-size:12px;color:#666;background:transparent;position:relative}.tag_tabs .tag_item[data-v-b29ff910]:first-child{margin-left:0}.tag_tabs .tag_item.active[data-v-b29ff910]{color:#000;font-weight:700;background:#ffe610;padding:0 %?24?%}\r\n/* ==================== 男女陪 Banner ==================== */.sex_banner_row[data-v-b29ff910]{display:flex;gap:%?16?%;padding:%?20?% %?24?% 0;background:#fff}.sex_banner_row .sex_banner[data-v-b29ff910]{flex:1;height:%?140?%;border-radius:%?16?%;overflow:hidden;position:relative;background:transparent}.sex_banner_row .sex_banner .banner_img[data-v-b29ff910]{width:100%;height:100%;display:block}.sex_banner_row .sex_banner .banner_placeholder[data-v-b29ff910]{width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:transparent;border:%?2?% dashed #ddd;box-sizing:border-box;border-radius:%?16?%}.sex_banner_row .sex_banner .banner_placeholder .placeholder_text[data-v-b29ff910]{color:#999;font-size:15px;font-weight:700}.sex_banner_row .sex_banner .banner_mask[data-v-b29ff910]{position:absolute;left:0;right:0;top:0;bottom:0;border:%?4?% solid #ffe610;border-radius:%?16?%;pointer-events:none;box-sizing:border-box}\r\n/* ==================== 宫格式 ==================== */.group_list .group_section[data-v-b29ff910]{padding:%?30?% %?24?% %?10?%;margin-top:%?20?%;background:#fff}.group_list .group_section .group_header[data-v-b29ff910]{display:flex;justify-content:space-between;align-items:center;margin-bottom:%?24?%}.group_list .group_section .group_header .group_name[data-v-b29ff910]{font-size:16px;font-weight:700;position:relative;padding-left:%?18?%}.group_list .group_section .group_header .group_name[data-v-b29ff910]::before{content:"";position:absolute;left:0;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:%?6?%;height:%?28?%;background:#ffe610;border-radius:%?3?%}.group_sellers.grid[data-v-b29ff910]{display:grid;grid-template-columns:repeat(3,1fr);grid-gap:%?20?%}.seller_col .card_head[data-v-b29ff910]{border-radius:%?20?%;overflow:hidden;position:relative;background:#fff\r\n  /* 宫格语音条（跟随头像底部） */}.seller_col .card_head .head[data-v-b29ff910]{display:flex;justify-content:center}.seller_col .card_head .head .avatar_inner[data-v-b29ff910]{position:relative;border-radius:%?16?% %?16?% 0 0;overflow:hidden;width:%?200?%;height:%?200?%}.seller_col .card_head .head .avatar_inner uni-image[data-v-b29ff910]{width:100%;height:100%;display:block;object-fit:cover}.seller_col .card_head .head .avatar_inner .nickname_mask[data-v-b29ff910]{position:absolute;left:0;right:0;bottom:0;padding:%?10?% %?8?% %?8?%;background:linear-gradient(180deg,transparent 0,rgba(0,0,0,.7))}.seller_col .card_head .head .avatar_inner .nickname_mask .nickname_text[data-v-b29ff910]{color:#fff;font-size:11px;text-align:center;font-weight:700;display:block}.seller_col .card_head .head .avatar_inner .online_dot[data-v-b29ff910]{position:absolute;right:%?6?%;top:%?6?%;width:%?14?%;height:%?14?%;border-radius:50%;background:#31ff74;z-index:2;border:%?2?% solid #fff}.seller_col .card_head .head .avatar_inner .online_dot.off[data-v-b29ff910]{background:#ccc}.seller_col .card_head .voice_bar[data-v-b29ff910]{margin:0 auto %?6?%;height:%?44?%;border-radius:0 0 %?16?% %?16?%;display:flex;align-items:center;padding:0 %?10?%;box-sizing:border-box;background:#ffe610;width:%?200?%\r\n  /* 小程序版：多条错落竖条波浪动画（撑满） */}.seller_col .card_head .voice_bar.boy[data-v-b29ff910]{background:#479afa}.seller_col .card_head .voice_bar.girl[data-v-b29ff910]{background:#ff7bac}.seller_col .card_head .voice_bar .voice_play[data-v-b29ff910]{width:%?28?%;height:%?28?%;border-radius:50%;background:hsla(0,0%,100%,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0}.seller_col .card_head .voice_bar .wave_progress[data-v-b29ff910]{flex:1;position:relative;height:%?24?%;margin:0 %?6?%;overflow:hidden;border-radius:%?8?%;background:hsla(0,0%,100%,.3)}.seller_col .card_head .voice_bar .wave_progress .wave_inner[data-v-b29ff910]{position:absolute;left:0;top:0;height:100%;border-radius:%?8?%;transition:width .1s linear;background:#d4b400}.seller_col .card_head .voice_bar .wave_progress.playing .wave_lines .wl[data-v-b29ff910]{background:#fff}.seller_col .card_head .voice_bar .wave_progress.playing .wl[data-v-b29ff910]:nth-child(1){-webkit-animation:wv1-data-v-b29ff910 .8s ease-in-out infinite;animation:wv1-data-v-b29ff910 .8s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_progress.playing .wl[data-v-b29ff910]:nth-child(2){-webkit-animation:wv2-data-v-b29ff910 .8s ease-in-out infinite;animation:wv2-data-v-b29ff910 .8s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_progress.playing .wl[data-v-b29ff910]:nth-child(3){-webkit-animation:wv3-data-v-b29ff910 .8s ease-in-out infinite;animation:wv3-data-v-b29ff910 .8s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_progress.playing .wl[data-v-b29ff910]:nth-child(4){-webkit-animation:wv4-data-v-b29ff910 .8s ease-in-out infinite;animation:wv4-data-v-b29ff910 .8s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_progress .wave_lines[data-v-b29ff910]{position:absolute;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:space-around;z-index:2}.seller_col .card_head .voice_bar .wave_progress .wave_lines .wl[data-v-b29ff910]{width:%?3?%;height:50%;border-radius:%?3?%;background:hsla(0,0%,100%,.6)}.seller_col .card_head .voice_bar.boy .wave_inner[data-v-b29ff910]{background:#157ff9}.seller_col .card_head .voice_bar.girl .wave_inner[data-v-b29ff910]{background:#ff488c}.seller_col .card_head .voice_bar .wave_lines.mp[data-v-b29ff910]{flex:1;display:flex;align-items:center;justify-content:space-between;height:%?24?%;margin:0 %?8?%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]{flex:1;margin:0 %?2?%;border-radius:%?2?%;background:hsla(0,0%,100%,.75)}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(1){height:30%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(2){height:60%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(3){height:90%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(4){height:50%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(5){height:100%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(6){height:65%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(7){height:35%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(8){height:75%}.seller_col .card_head .voice_bar .wave_lines.mp .wl[data-v-b29ff910]:nth-child(9){height:45%}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]{background:#fff}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(1){-webkit-animation:wv1-data-v-b29ff910 .7s ease-in-out infinite;animation:wv1-data-v-b29ff910 .7s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(2){-webkit-animation:wv2-data-v-b29ff910 .7s ease-in-out infinite;animation:wv2-data-v-b29ff910 .7s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(3){-webkit-animation:wv3-data-v-b29ff910 .7s ease-in-out infinite;animation:wv3-data-v-b29ff910 .7s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(4){-webkit-animation:wv4-data-v-b29ff910 .7s ease-in-out infinite;animation:wv4-data-v-b29ff910 .7s ease-in-out infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(5){-webkit-animation:wv1-data-v-b29ff910 .7s ease-in-out .05s infinite;animation:wv1-data-v-b29ff910 .7s ease-in-out .05s infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(6){-webkit-animation:wv2-data-v-b29ff910 .7s ease-in-out .1s infinite;animation:wv2-data-v-b29ff910 .7s ease-in-out .1s infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(7){-webkit-animation:wv3-data-v-b29ff910 .7s ease-in-out .15s infinite;animation:wv3-data-v-b29ff910 .7s ease-in-out .15s infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(8){-webkit-animation:wv4-data-v-b29ff910 .7s ease-in-out .2s infinite;animation:wv4-data-v-b29ff910 .7s ease-in-out .2s infinite}.seller_col .card_head .voice_bar .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(9){-webkit-animation:wv1-data-v-b29ff910 .7s ease-in-out .25s infinite;animation:wv1-data-v-b29ff910 .7s ease-in-out .25s infinite}.seller_col .card_head .voice_bar .duration[data-v-b29ff910]{font-size:11px;color:#fff;white-space:nowrap;min-width:%?20?%;text-align:right;text-shadow:0 %?1?% %?2?% rgba(0,0,0,.2)}\r\n/* ==================== 列表式：扁平打手卡片 ==================== */.flat_list[data-v-b29ff910]{padding:%?20?% %?24?% 0;display:flex;flex-direction:column;gap:%?16?%}.flat_card[data-v-b29ff910]{display:flex;align-items:stretch;background:#fff;border-radius:%?20?%;padding:%?16?%;gap:%?14?%;box-shadow:0 %?4?% %?12?% rgba(0,0,0,.03)\r\n  /* 左列：头像 + 语音 */\r\n  /* 中间列 */\r\n  /* 原来的状态样式搬到 flat_mid 里 - 保留但不再从 flat_top 用 margin-left auto，在 flat_order_col 中独立使用 */\r\n  /* 最右列：状态 + 下单按钮（纵向排列，分别靠上靠下） */}.flat_card .flat_left[data-v-b29ff910]{width:%?140?%;flex-shrink:0;display:flex;flex-direction:column;align-items:center\r\n  /* 语音条（一半压在头像底部） */}.flat_card .flat_left .flat_avatar[data-v-b29ff910]{width:%?140?%;height:%?140?%;border-radius:%?16?%;background:#eee;display:block}.flat_card .flat_left .flat_voice[data-v-b29ff910]{width:100%;height:%?42?%;border-radius:%?40?%;display:flex;align-items:center;padding:0 %?10?%;box-sizing:border-box;background:#ffe610;margin-top:%?-21?%;position:relative;z-index:2\r\n  /* 小程序版：多条错落竖条波浪动画（撑满） */}.flat_card .flat_left .flat_voice.boy[data-v-b29ff910]{background:#479afa}.flat_card .flat_left .flat_voice.girl[data-v-b29ff910]{background:#ff7bac}.flat_card .flat_left .flat_voice .voice_play[data-v-b29ff910]{width:%?26?%;height:%?26?%;border-radius:50%;background:hsla(0,0%,100%,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0}.flat_card .flat_left .flat_voice .wave_progress[data-v-b29ff910]{flex:1;position:relative;height:%?24?%;margin:0 %?6?%;overflow:hidden;border-radius:%?8?%;background:hsla(0,0%,100%,.3)}.flat_card .flat_left .flat_voice .wave_progress .wave_inner[data-v-b29ff910]{position:absolute;left:0;top:0;height:100%;border-radius:%?8?%;transition:width .1s linear;background:#d4b400}.flat_card .flat_left .flat_voice .wave_progress.playing .wave_lines .wl[data-v-b29ff910]{background:#fff}.flat_card .flat_left .flat_voice .wave_progress.playing .wl[data-v-b29ff910]:nth-child(1){-webkit-animation:wv1-data-v-b29ff910 .8s ease-in-out infinite;animation:wv1-data-v-b29ff910 .8s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_progress.playing .wl[data-v-b29ff910]:nth-child(2){-webkit-animation:wv2-data-v-b29ff910 .8s ease-in-out infinite;animation:wv2-data-v-b29ff910 .8s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_progress.playing .wl[data-v-b29ff910]:nth-child(3){-webkit-animation:wv3-data-v-b29ff910 .8s ease-in-out infinite;animation:wv3-data-v-b29ff910 .8s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_progress.playing .wl[data-v-b29ff910]:nth-child(4){-webkit-animation:wv4-data-v-b29ff910 .8s ease-in-out infinite;animation:wv4-data-v-b29ff910 .8s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_progress .wave_lines[data-v-b29ff910]{position:absolute;left:0;top:0;right:0;bottom:0;display:flex;align-items:center;justify-content:space-around;z-index:2}.flat_card .flat_left .flat_voice .wave_progress .wave_lines .wl[data-v-b29ff910]{width:%?3?%;height:50%;border-radius:%?3?%;background:hsla(0,0%,100%,.6)}.flat_card .flat_left .flat_voice.boy .wave_inner[data-v-b29ff910]{background:#157ff9}.flat_card .flat_left .flat_voice.girl .wave_inner[data-v-b29ff910]{background:#ff488c}.flat_card .flat_left .flat_voice .wave_lines.mp[data-v-b29ff910]{flex:1;display:flex;align-items:center;justify-content:space-between;height:%?24?%;margin:0 %?6?%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]{flex:1;margin:0 %?2?%;border-radius:%?2?%;background:hsla(0,0%,100%,.75)}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(1){height:30%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(2){height:60%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(3){height:90%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(4){height:50%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(5){height:100%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(6){height:65%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(7){height:35%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(8){height:75%}.flat_card .flat_left .flat_voice .wave_lines.mp .wl[data-v-b29ff910]:nth-child(9){height:45%}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]{background:#fff}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(1){-webkit-animation:wv1-data-v-b29ff910 .7s ease-in-out infinite;animation:wv1-data-v-b29ff910 .7s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(2){-webkit-animation:wv2-data-v-b29ff910 .7s ease-in-out infinite;animation:wv2-data-v-b29ff910 .7s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(3){-webkit-animation:wv3-data-v-b29ff910 .7s ease-in-out infinite;animation:wv3-data-v-b29ff910 .7s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(4){-webkit-animation:wv4-data-v-b29ff910 .7s ease-in-out infinite;animation:wv4-data-v-b29ff910 .7s ease-in-out infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(5){-webkit-animation:wv1-data-v-b29ff910 .7s ease-in-out .05s infinite;animation:wv1-data-v-b29ff910 .7s ease-in-out .05s infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(6){-webkit-animation:wv2-data-v-b29ff910 .7s ease-in-out .1s infinite;animation:wv2-data-v-b29ff910 .7s ease-in-out .1s infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(7){-webkit-animation:wv3-data-v-b29ff910 .7s ease-in-out .15s infinite;animation:wv3-data-v-b29ff910 .7s ease-in-out .15s infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(8){-webkit-animation:wv4-data-v-b29ff910 .7s ease-in-out .2s infinite;animation:wv4-data-v-b29ff910 .7s ease-in-out .2s infinite}.flat_card .flat_left .flat_voice .wave_lines.mp.playing .wl[data-v-b29ff910]:nth-child(9){-webkit-animation:wv1-data-v-b29ff910 .7s ease-in-out .25s infinite;animation:wv1-data-v-b29ff910 .7s ease-in-out .25s infinite}.flat_card .flat_left .flat_voice .duration[data-v-b29ff910]{font-size:10px;color:#fff;white-space:nowrap;min-width:%?18?%;text-align:right}.flat_card .flat_mid[data-v-b29ff910]{flex:1;min-width:0;display:flex;flex-direction:column;justify-content:space-between;padding:%?2?% 0;gap:%?8?%}.flat_card .flat_mid .flat_top[data-v-b29ff910]{display:flex;align-items:center}.flat_card .flat_mid .flat_top .flat_nickname[data-v-b29ff910]{font-size:14px;font-weight:700;color:#333;white-space:nowrap;overflow:hidden}.flat_card .flat_mid .flat_top .flat_sex[data-v-b29ff910]{margin-left:%?6?%;font-size:14px;color:#479afa;font-weight:700}.flat_card .flat_mid .flat_top .flat_sex.girl[data-v-b29ff910]{color:#ff7bac}.flat_card .flat_mid .flat_intro[data-v-b29ff910]{font-size:11px;color:#999;line-height:1.4;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;word-break:break-all}.flat_card .flat_mid .flat_tags[data-v-b29ff910]{display:flex;gap:%?6?%;flex-wrap:wrap;align-items:center}.flat_card .flat_mid .flat_tags .flat_tag[data-v-b29ff910]{padding:%?3?% %?12?%;font-size:10px;font-weight:700;border-radius:%?20?%;white-space:nowrap}.flat_card .flat_status[data-v-b29ff910]{display:flex;align-items:center;font-size:11px;font-weight:700;justify-content:center}.flat_card .flat_status .dot[data-v-b29ff910]{display:inline-block;width:%?12?%;height:%?12?%;border-radius:50%;margin-right:%?5?%}.flat_card .flat_status.rest[data-v-b29ff910]{color:#999}.flat_card .flat_status.rest .dot[data-v-b29ff910]{background:#ccc}.flat_card .flat_status.busy[data-v-b29ff910]{color:#ff7a00}.flat_card .flat_status.busy .dot[data-v-b29ff910]{background:#ff7a00}.flat_card .flat_status.available[data-v-b29ff910]{color:#6dff26}.flat_card .flat_status.available .dot[data-v-b29ff910]{background:#6dff26}.flat_card.boy .flat_mid .flat_tags .flat_tag[data-v-b29ff910]{background:rgba(71,154,250,.15);color:#479afa}.flat_card.girl .flat_mid .flat_tags .flat_tag[data-v-b29ff910]{background:rgba(255,123,172,.15);color:#ff7bac}.flat_card:not(.boy):not(.girl) .flat_mid .flat_tags .flat_tag[data-v-b29ff910]{background:rgba(255,230,16,.2);color:#c5a500}.flat_card .flat_order_col[data-v-b29ff910]{width:%?110?%;flex-shrink:0;display:flex;flex-direction:column;justify-content:space-between;align-items:center;padding:%?4?% 0 %?2?%}.flat_card .flat_order_col .flat_order_btn[data-v-b29ff910]{width:100%;height:%?56?%;background:#ffe610;border:%?4?% solid #000;border-radius:%?36?%;display:flex;align-items:center;justify-content:center}.flat_card .flat_order_col .flat_order_btn uni-text[data-v-b29ff910]{font-size:12px;font-weight:700;color:#000}\r\n/* 语音波浪动画 */@-webkit-keyframes wv1-data-v-b29ff910{0%, 100%{height:40%}50%{height:90%}}@keyframes wv1-data-v-b29ff910{0%, 100%{height:40%}50%{height:90%}}@-webkit-keyframes wv2-data-v-b29ff910{0%, 100%{height:60%}50%{height:30%}}@keyframes wv2-data-v-b29ff910{0%, 100%{height:60%}50%{height:30%}}@-webkit-keyframes wv3-data-v-b29ff910{0%, 100%{height:30%}50%{height:80%}}@keyframes wv3-data-v-b29ff910{0%, 100%{height:30%}50%{height:80%}}@-webkit-keyframes wv4-data-v-b29ff910{0%, 100%{height:70%}50%{height:40%}}@keyframes wv4-data-v-b29ff910{0%, 100%{height:70%}50%{height:40%}}',
          "",
        ]),
        (a.exports = t);
    },
    8951: function (a, t, e) {
      "use strict";
      var i = e("d006"),
        n = e.n(i);
      n.a;
    },
    a5a7: function (a, t, e) {
      "use strict";
      e("6a54");
      var i = e("f5bd").default;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var n = i(e("3471"));
      e("c223");
      var l = e("e74a"),
        s = {
          data: function () {
            return {
              selected: 2,
              tags: [],
              current_tag: 0,
              current_sex: 0,
              current_cat: 0,
              keyword: "",
              groupList: [],
              catList: [],
              sellers: [],
              no_more: 0,
              page: 1,
              loadingMore: !1,
              style: 0,
              banner_male: "",
              banner_female: "",
              banner_male_on: "",
              banner_female_on: "",
              status: "loading",
              innerAudioContext: null,
              voicePlayingId: 0,
              voiceProgress: 0,
              voiceDuration: 0,
              voiceRemainTime: {},
              voiceTimer: null,
              loading: !0,
              showBackToTop: !1,
            };
          },
          onLoad: function () {
            this.getTagList();
          },
          onShow: function () {
            this.getGroupList();
          },
          onHide: function () {
            this.stopVoice();
          },
          onUnload: function () {
            this.stopVoice();
          },
          onPullDownRefresh: function () {
            var a = this;
            uni.showLoading({ title: "刷新中" }),
              setTimeout(function () {
                uni.hideLoading(),
                  a.getTagList(),
                  a.getGroupList(),
                  uni.stopPullDownRefresh();
              }, 300);
          },
          onReachBottom: function () {
            1 == this.style &&
              (this.no_more ||
                this.loadingMore ||
                (this.page++, (this.loadingMore = !0), this.getGroupList(!0)));
          },
          onPageScroll: function (a) {
            this.showBackToTop = a.scrollTop > 600;
          },
          methods: {
            scrollToTop: function () {
              uni.pageScrollTo({
                scrollTop: 0,
                duration: 300,
                behavior: "smooth",
              }),
                (this.showBackToTop = !1);
            },
            getTagList: function () {
              var a = this;
              (0, l.send)("/wechat/Daren/getTagList", {}, !1).then(
                function (t) {
                  1 == t.status && (a.tags = t.data.list);
                },
              );
            },
            getGroupList: function () {
              var a = this,
                t =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              t || (this.page = 1), (this.status = "loading");
              var e = { page: this.page };
              0 != this.current_tag && (e.tag_id = this.current_tag),
                this.keyword && (e.keyword = this.keyword),
                0 != this.current_sex && (e.sex = this.current_sex),
                0 != this.current_cat && (e.cat1_id = this.current_cat),
                (0, l.send)("/wechat/Daren/getDarenGroupList", e, !1).then(
                  function (e) {
                    if (((a.loading = !1), (a.loadingMore = !1), 1 != e.status))
                      return uni.$uv.toast(e.msg);
                    if (
                      ((a.style = e.data.style || 0),
                      (a.banner_male = e.data.banner_male || ""),
                      (a.banner_female = e.data.banner_female || ""),
                      (a.banner_male_on = e.data.banner_male_on || ""),
                      (a.banner_female_on = e.data.banner_female_on || ""),
                      1 == a.style)
                    ) {
                      if (
                        ((a.catList = e.data.cat_list || []),
                        (a.no_more = e.data.no_more || 0),
                        (a.groupList = []),
                        0 == a.current_cat && a.catList.length > 1)
                      )
                        return (
                          (a.current_cat = a.catList[0].id),
                          void a.getGroupList()
                        );
                      (a.sellers = t
                        ? a.sellers.concat(e.data.sellers || [])
                        : e.data.sellers || []),
                        0 == a.sellers.length
                          ? (a.status = "nomore")
                          : (a.status = "ok");
                    } else
                      (a.groupList = e.data.list || []),
                        (a.catList = []),
                        (a.sellers = []),
                        0 == a.groupList.length
                          ? (a.status = "nomore")
                          : (a.status = "ok");
                  },
                );
            },
            changeTag: function (a) {
              (this.current_tag = a), this.getGroupList();
            },
            changeCat: function (a) {
              (this.current_cat = a), this.stopVoice(), this.getGroupList();
            },
            changeSex: function (a) {
              (this.current_sex = this.current_sex == a ? 0 : a),
                this.stopVoice(),
                this.getGroupList();
            },
            search: function () {
              (this.keyword = this.keyword || ""), this.getGroupList();
            },
            playVoice: function (a) {
              var t = this;
              a.voice_url &&
                (this.voicePlayingId != a.id
                  ? (this.stopVoice(),
                    (this.innerAudioContext = uni.createInnerAudioContext()),
                    (this.innerAudioContext.src = a.voice_url),
                    (this.voicePlayingId = a.id),
                    (this.voiceDuration = a.voice_duration || 0),
                    (this.voiceProgress = 0),
                    this.$set(
                      this.voiceRemainTime,
                      a.id,
                      a.voice_duration || 0,
                    ),
                    (this.voiceTimer = setInterval(function () {
                      if (t.innerAudioContext && t.voicePlayingId) {
                        var a = t.voiceDuration;
                        a <= 0 &&
                          t.innerAudioContext.duration > 0 &&
                          ((a = t.innerAudioContext.duration),
                          (t.voiceDuration = a));
                        var e = t.innerAudioContext.currentTime || 0;
                        if (a > 0) {
                          t.voiceProgress = Math.min(100, (e / a) * 100);
                          var i = Math.max(0, Math.ceil(a - e));
                          t.$set(t.voiceRemainTime, t.voicePlayingId, i);
                        }
                      }
                    }, 200)),
                    this.innerAudioContext.onTimeUpdate(function () {
                      if (t.innerAudioContext) {
                        var e = t.voiceDuration;
                        if (
                          (e <= 0 &&
                            t.innerAudioContext.duration > 0 &&
                            ((e = t.innerAudioContext.duration),
                            (t.voiceDuration = e)),
                          e > 0)
                        ) {
                          (t.voiceProgress =
                            (t.innerAudioContext.currentTime / e) * 100),
                            t.voiceProgress > 100 && (t.voiceProgress = 100);
                          var i = Math.max(
                            0,
                            Math.ceil(e - t.innerAudioContext.currentTime),
                          );
                          t.$set(t.voiceRemainTime, a.id, i);
                        }
                      }
                    }),
                    this.innerAudioContext.onEnded(function () {
                      t.clearVoiceTimer(),
                        (t.voicePlayingId = 0),
                        (t.voiceProgress = 0),
                        t.$set(t.voiceRemainTime, a.id, a.voice_duration || 0);
                    }),
                    this.innerAudioContext.onError(function () {
                      t.clearVoiceTimer(),
                        (t.voicePlayingId = 0),
                        (t.voiceProgress = 0),
                        t.$set(t.voiceRemainTime, a.id, a.voice_duration || 0);
                    }),
                    this.innerAudioContext.play())
                  : this.stopVoice());
            },
            clearVoiceTimer: function () {
              this.voiceTimer &&
                (clearInterval(this.voiceTimer), (this.voiceTimer = null));
            },
            stopVoice: function () {
              this.clearVoiceTimer(),
                this.innerAudioContext &&
                  (this.innerAudioContext.stop(),
                  this.innerAudioContext.destroy(),
                  (this.innerAudioContext = null));
              var a = this.voicePlayingId;
              if (a && this.groupList) {
                var t,
                  e = (0, n.default)(this.groupList);
                try {
                  for (e.s(); !(t = e.n()).done; ) {
                    var i,
                      l = t.value,
                      s = (0, n.default)(l.sellers);
                    try {
                      for (s.s(); !(i = s.n()).done; ) {
                        var o = i.value;
                        if (o.id === a) {
                          this.$set(
                            this.voiceRemainTime,
                            a,
                            o.voice_duration || 0,
                          );
                          break;
                        }
                      }
                    } catch (c) {
                      s.e(c);
                    } finally {
                      s.f();
                    }
                  }
                } catch (c) {
                  e.e(c);
                } finally {
                  e.f();
                }
              }
              if (a && this.sellers) {
                var r,
                  f = (0, n.default)(this.sellers);
                try {
                  for (f.s(); !(r = f.n()).done; ) {
                    var d = r.value;
                    if (d.id === a) {
                      this.$set(this.voiceRemainTime, a, d.voice_duration || 0);
                      break;
                    }
                  }
                } catch (c) {
                  f.e(c);
                } finally {
                  f.f();
                }
              }
              (this.voicePlayingId = 0), (this.voiceProgress = 0);
            },
            getProgress: function (a) {
              return this.voicePlayingId == a ? this.voiceProgress : 0;
            },
            getRemainTime: function (a) {
              return this.voicePlayingId == a.id
                ? (void 0 !== this.voiceRemainTime[a.id]
                    ? this.voiceRemainTime[a.id]
                    : a.voice_duration) + "s"
                : a.voice_duration + "s";
            },
            jumpSeller: function (a) {
              uni.navigateTo({ url: "/pages/index/seller?id=" + a });
            },
            showOrderPopup: function (a) {
              uni.navigateTo({
                url: "/pages/index/seller?id=" + a + "&autoOpen=1",
              });
            },
          },
        };
      t.default = s;
    },
    b9e4: function (a, t, e) {
      "use strict";
      e.r(t);
      var i = e("a5a7"),
        n = e.n(i);
      for (var l in i)
        ["default"].indexOf(l) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return i[a];
            });
          })(l);
      t["default"] = n.a;
    },
    d006: function (a, t, e) {
      var i = e("7bd8");
      i.__esModule && (i = i.default),
        "string" === typeof i && (i = [[a.i, i, ""]]),
        i.locals && (a.exports = i.locals);
      var n = e("967d").default;
      n("6597fe46", i, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d5dc: function (a, t, e) {
      "use strict";
      e.r(t);
      var i = e("0e55"),
        n = e("b9e4");
      for (var l in n)
        ["default"].indexOf(l) < 0 &&
          (function (a) {
            e.d(t, a, function () {
              return n[a];
            });
          })(l);
      e("8951");
      var s = e("828b"),
        o = Object(s["a"])(
          n["default"],
          i["b"],
          i["c"],
          !1,
          null,
          "b29ff910",
          null,
          !1,
          i["a"],
          void 0,
        );
      t["default"] = o.exports;
    },
  },
]);
//# sourceMappingURL=pages-index-daren.3cdcc42b.js.map
