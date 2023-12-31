(this["webpackJsonpflone-react"] = this["webpackJsonpflone-react"] || []).push([
  [52],
  {
    1215: function (e, a, t) {
      "use strict";
      t.r(a);
      var l = t(196),
        n = t(197),
        r = t(198),
        c = t(199),
        s = t(0),
        o = t.n(s),
        i = t(200),
        m = (t(615), t(789)),
        u = t(790),
        d = t(819),
        f = t(18),
        E = t(609),
        b = t(78),
        p = t.n(b),
        v = t(611),
        g = t(608),
        N = ["bsPrefix", "fluid", "as", "className"],
        h = s.forwardRef(function (e, a) {
          var t = e.bsPrefix,
            l = e.fluid,
            n = e.as,
            r = void 0 === n ? "div" : n,
            c = e.className,
            s = Object(E.a)(e, N),
            o = Object(v.c)(t, "container"),
            i = "string" === typeof l ? "-".concat(l) : "-fluid";
          return Object(g.jsx)(
            r,
            Object(f.a)(
              Object(f.a)({ ref: a }, s),
              {},
              { className: p()(c, l ? "".concat(o).concat(i) : o) }
            )
          );
        });
      (h.displayName = "Container"), (h.defaultProps = { fluid: !1 });
      var y = h,
        O = t(606),
        x = t(620),
        k = t(59),
        w = (function (e) {
          Object(r.a)(t, e);
          var a = Object(c.a)(t);
          function t(e) {
            var n;
            return (
              Object(l.a)(this, t),
              ((n = a.call(this, e)).state = { BlogViewData: [] }),
              n
            );
          }
          return (
            Object(n.a)(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this,
                    a = this.props.match.params.id;
                  console.log(a),
                    k.a
                      .get("/user/blog_by_category/".concat(a))
                      .then(function (a) {
                        console.log(a.data.data),
                          e.setState({ BlogViewData: a.data.data });
                      })
                      .catch(function (e) {
                        console.log(e);
                      });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.state.BlogViewData;
                  return o.a.createElement(
                    i.a,
                    { headerTop: "visible" },
                    o.a.createElement(
                      "section",
                      { className: "pt-0 pb-0" },
                      o.a.createElement(
                        "div",
                        {
                          className: "",
                          style: {
                            backgroundColor: "#1BE392",
                            width: "100%",
                            padding: "70px 0px",
                            backgroundSize: "cover",
                          },
                        },
                        o.a.createElement(
                          y,
                          null,
                          o.a.createElement(
                            O.a,
                            null,
                            o.a.createElement(
                              x.a,
                              { md: "12" },
                              o.a.createElement(
                                "div",
                                { className: "leftcont text-left" },
                                o.a.createElement("h1", null, "Our Latest Blog")
                              )
                            )
                          )
                        )
                      )
                    ),
                    o.a.createElement(
                      "div",
                      { className: "blog-area pt-100 pb-100" },
                      o.a.createElement(
                        "div",
                        { className: "container" },
                        o.a.createElement(
                          "div",
                          { className: "row flex-row-reverse" },
                          o.a.createElement(
                            "div",
                            { className: "col-lg-9" },
                            o.a.createElement(
                              "div",
                              { className: "ml-20" },
                              o.a.createElement(
                                "div",
                                { className: "row" },
                                e &&
                                  e.map(function (e, a) {
                                    return o.a.createElement(d.a, {
                                      data: e,
                                      key: a,
                                      sliderClass: "swiper-slide rtt",
                                    });
                                  })
                              ),
                              o.a.createElement(u.a, null)
                            )
                          ),
                          o.a.createElement(
                            "div",
                            { className: "col-lg-3" },
                            o.a.createElement(m.a, null)
                          )
                        )
                      )
                    )
                  );
                },
              },
            ]),
            t
          );
        })(o.a.Component);
      a.default = w;
    },
    608: function (e, a, t) {
      "use strict";
      e.exports = t(685);
    },
    609: function (e, a, t) {
      "use strict";
      function l(e, a) {
        if (null == e) return {};
        var t,
          l,
          n = (function (e, a) {
            if (null == e) return {};
            var t,
              l,
              n = {},
              r = Object.keys(e);
            for (l = 0; l < r.length; l++)
              (t = r[l]), a.indexOf(t) >= 0 || (n[t] = e[t]);
            return n;
          })(e, a);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (l = 0; l < r.length; l++)
            (t = r[l]),
              a.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (n[t] = e[t]));
        }
        return n;
      }
      t.d(a, "a", function () {
        return l;
      });
    },
    611: function (e, a, t) {
      "use strict";
      t(18);
      var l = t(0);
      t(608);
      t.d(a, "c", function () {
        return c;
      }),
        t.d(a, "a", function () {
          return s;
        }),
        t.d(a, "b", function () {
          return o;
        }),
        t.d(a, "d", function () {
          return i;
        });
      var n = ["xxl", "xl", "lg", "md", "sm", "xs"],
        r = l.createContext({
          prefixes: {},
          breakpoints: n,
          minBreakpoint: "xs",
        });
      r.Consumer, r.Provider;
      function c(e, a) {
        var t = Object(l.useContext)(r).prefixes;
        return e || t[a] || a;
      }
      function s() {
        return Object(l.useContext)(r).breakpoints;
      }
      function o() {
        return Object(l.useContext)(r).minBreakpoint;
      }
      function i() {
        return "rtl" === Object(l.useContext)(r).dir;
      }
    },
    615: function (e, a, t) {
      "use strict";
      var l = t(0),
        n = t.n(l),
        r = t(2),
        c = t(203);
      a.a = function () {
        return n.a.createElement(
          "div",
          { className: "breadcrumb-area pt-10 pb-10 bg-gray-5" },
          n.a.createElement(
            "div",
            { className: "container" },
            n.a.createElement(
              "div",
              { className: "breadcrumb-content text-center" },
              n.a.createElement(c.Breadcrumbs, {
                separator: n.a.createElement("span", null, "/"),
                item: r.d,
                finalItem: "span",
              })
            )
          )
        );
      };
    },
    620: function (e, a, t) {
      "use strict";
      var l = t(7),
        n = t(15),
        r = t(0),
        c = t.n(r),
        s = t(4),
        o = t.n(s),
        i = t(78),
        m = t.n(i),
        u = t(54),
        d = ["className", "cssModule", "widths", "tag"],
        f = o.a.oneOfType([o.a.number, o.a.string]),
        E = o.a.oneOfType([
          o.a.bool,
          o.a.number,
          o.a.string,
          o.a.shape({
            size: o.a.oneOfType([o.a.bool, o.a.number, o.a.string]),
            order: f,
            offset: f,
          }),
        ]),
        b = {
          tag: u.n,
          xs: E,
          sm: E,
          md: E,
          lg: E,
          xl: E,
          className: o.a.string,
          cssModule: o.a.object,
          widths: o.a.array,
        },
        p = { tag: "div", widths: ["xs", "sm", "md", "lg", "xl"] },
        v = function (e, a, t) {
          return !0 === t || "" === t
            ? e
              ? "col"
              : "col-" + a
            : "auto" === t
            ? e
              ? "col-auto"
              : "col-" + a + "-auto"
            : e
            ? "col-" + t
            : "col-" + a + "-" + t;
        },
        g = function (e) {
          var a = e.className,
            t = e.cssModule,
            r = e.widths,
            s = e.tag,
            o = Object(n.a)(e, d),
            i = [];
          r.forEach(function (a, l) {
            var n = e[a];
            if ((delete o[a], n || "" === n)) {
              var r = !l;
              if (Object(u.h)(n)) {
                var c,
                  s = r ? "-" : "-" + a + "-",
                  d = v(r, a, n.size);
                i.push(
                  Object(u.j)(
                    m()(
                      (((c = {})[d] = n.size || "" === n.size),
                      (c["order" + s + n.order] = n.order || 0 === n.order),
                      (c["offset" + s + n.offset] = n.offset || 0 === n.offset),
                      c)
                    ),
                    t
                  )
                );
              } else {
                var f = v(r, a, n);
                i.push(f);
              }
            }
          }),
            i.length || i.push("col");
          var f = Object(u.j)(m()(a, i), t);
          return c.a.createElement(s, Object(l.a)({}, o, { className: f }));
        };
      (g.propTypes = b), (g.defaultProps = p), (a.a = g);
    },
    685: function (e, a, t) {
      "use strict";
      t(146);
      var l = t(0),
        n = 60103;
      if (((a.Fragment = 60107), "function" === typeof Symbol && Symbol.for)) {
        var r = Symbol.for;
        (n = r("react.element")), (a.Fragment = r("react.fragment"));
      }
      var c =
          l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        s = Object.prototype.hasOwnProperty,
        o = { key: !0, ref: !0, __self: !0, __source: !0 };
      function i(e, a, t) {
        var l,
          r = {},
          i = null,
          m = null;
        for (l in (void 0 !== t && (i = "" + t),
        void 0 !== a.key && (i = "" + a.key),
        void 0 !== a.ref && (m = a.ref),
        a))
          s.call(a, l) && !o.hasOwnProperty(l) && (r[l] = a[l]);
        if (e && e.defaultProps)
          for (l in (a = e.defaultProps)) void 0 === r[l] && (r[l] = a[l]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: m,
          props: r,
          _owner: c.current,
        };
      }
      (a.jsx = i), (a.jsxs = i);
    },
    709: function (e, a) {},
    789: function (e, a, t) {
      "use strict";
      var l = t(0),
        n = t.n(l),
        r = t(2);
      a.a = function () {
        return n.a.createElement(
          "div",
          { className: "sidebar-style" },
          n.a.createElement(
            "div",
            { className: "sidebar-widget mt-35" },
            n.a.createElement(
              "h4",
              { className: "pro-sidebar-title" },
              "Categories"
            ),
            n.a.createElement(
              "div",
              {
                className:
                  "sidebar-widget-list sidebar-widget-list--blog mt-20",
              },
              n.a.createElement(
                "ul",
                null,
                n.a.createElement(
                  "li",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "sidebar-widget-list-left" },
                    n.a.createElement("input", {
                      type: "checkbox",
                      defaultValue: !0,
                    }),
                    " ",
                    n.a.createElement(
                      r.c,
                      { to: "/blog-standard" },
                      "Modern Astrology ",
                      n.a.createElement("span", null, "4"),
                      " "
                    ),
                    n.a.createElement("span", { className: "checkmark" })
                  )
                ),
                n.a.createElement(
                  "li",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "sidebar-widget-list-left" },
                    n.a.createElement("input", {
                      type: "checkbox",
                      defaultValue: !0,
                    }),
                    " ",
                    n.a.createElement(
                      r.c,
                      { to: "/blog-standard" },
                      "Traditional Astrology  ",
                      n.a.createElement("span", null, "4"),
                      " "
                    ),
                    n.a.createElement("span", { className: "checkmark" })
                  )
                ),
                n.a.createElement(
                  "li",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "sidebar-widget-list-left" },
                    n.a.createElement("input", {
                      type: "checkbox",
                      defaultValue: !0,
                    }),
                    " ",
                    n.a.createElement(
                      r.c,
                      { to: "/blog-standard" },
                      "Relationship Astrology ",
                      n.a.createElement("span", null, "4"),
                      " "
                    ),
                    n.a.createElement("span", { className: "checkmark" })
                  )
                ),
                n.a.createElement(
                  "li",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "sidebar-widget-list-left" },
                    n.a.createElement("input", {
                      type: "checkbox",
                      defaultValue: !0,
                    }),
                    " ",
                    n.a.createElement(
                      r.c,
                      { to: "/blog-standard" },
                      "Sidereal Astrology ",
                      n.a.createElement("span", null, "4"),
                      " "
                    ),
                    n.a.createElement("span", { className: "checkmark" })
                  )
                ),
                n.a.createElement(
                  "li",
                  null,
                  n.a.createElement(
                    "div",
                    { className: "sidebar-widget-list-left" },
                    n.a.createElement("input", {
                      type: "checkbox",
                      defaultValue: !0,
                    }),
                    " ",
                    n.a.createElement(
                      r.c,
                      { to: "/blog-standard" },
                      "Horary Astrology",
                      n.a.createElement("span", null, "4"),
                      " "
                    ),
                    n.a.createElement("span", { className: "checkmark" })
                  )
                )
              )
            )
          )
        );
      };
    },
    790: function (e, a, t) {
      "use strict";
      var l = t(0),
        n = t.n(l);
      a.a = function () {
        return n.a.createElement(
          "div",
          { className: "pro-pagination-style text-center mt-20" },
          n.a.createElement(
            "ul",
            null,
            n.a.createElement(
              "li",
              null,
              n.a.createElement(
                "button",
                { className: "prev" },
                n.a.createElement("i", { className: "fa fa-angle-double-left" })
              )
            ),
            n.a.createElement(
              "li",
              null,
              n.a.createElement("button", { className: "active" }, "1")
            ),
            n.a.createElement(
              "li",
              null,
              n.a.createElement("button", null, "2")
            ),
            n.a.createElement(
              "li",
              null,
              n.a.createElement(
                "button",
                { className: "next" },
                n.a.createElement("i", {
                  className: "fa fa-angle-double-right",
                })
              )
            )
          )
        );
      };
    },
    819: function (e, a, t) {
      "use strict";
      var l = t(24),
        n = t(0),
        r = t.n(n),
        c = t(2),
        s = (t(59), t(699)),
        o = t.n(s);
      a.a = function (e) {
        var a = e.data,
          t = Object(n.useState)(a),
          s = Object(l.a)(t, 2),
          i = (s[0], s[1]);
        return (
          Object(n.useEffect)(
            function () {
              i(a);
            },
            [a]
          ),
          r.a.createElement(
            n.Fragment,
            null,
            r.a.createElement(
              "div",
              { className: "col-lg-6 col-md-6 col-sm-12" },
              r.a.createElement(
                "div",
                { className: "blog-wrap-2 mb-30" },
                r.a.createElement(
                  "div",
                  { className: "blog-img-2" },
                  r.a.createElement(
                    c.c,
                    {
                      to:
                        "/blog-details-standard/" +
                        (null === a || void 0 === a ? void 0 : a._id),
                    },
                    r.a.createElement("img", {
                      src: null === a || void 0 === a ? void 0 : a.blogImg,
                      alt: "",
                    })
                  )
                ),
                r.a.createElement(
                  "div",
                  { className: "blog-content-2" },
                  r.a.createElement(
                    "div",
                    { className: "blog-meta-2" },
                    r.a.createElement(
                      "ul",
                      null,
                      r.a.createElement(
                        "li",
                        null,
                        null === a || void 0 === a ? void 0 : a.createdAt
                      ),
                      r.a.createElement(
                        "li",
                        null,
                        r.a.createElement(
                          c.c,
                          { to: "/blog-details-standard" },
                          "4 ",
                          r.a.createElement("i", {
                            className: "fa fa-comments-o",
                          })
                        )
                      )
                    )
                  ),
                  r.a.createElement(
                    "h4",
                    null,
                    r.a.createElement(
                      c.c,
                      {
                        to:
                          "/blog-details-standard" +
                          (null === a || void 0 === a ? void 0 : a._id),
                      },
                      null === a || void 0 === a ? void 0 : a.blog_title
                    )
                  ),
                  r.a.createElement(
                    "p",
                    null,
                    " ",
                    o()(null === a || void 0 === a ? void 0 : a.desc)
                  ),
                  r.a.createElement(
                    "div",
                    { className: "blog-share-comment" },
                    r.a.createElement(
                      "div",
                      { className: "blog-btn-2" },
                      r.a.createElement(
                        c.c,
                        { to: "/blog-details-standard" },
                        "read more"
                      )
                    ),
                    r.a.createElement(
                      "div",
                      { className: "blog-share" },
                      r.a.createElement("span", null, "share :"),
                      r.a.createElement(
                        "div",
                        { className: "share-social" },
                        r.a.createElement(
                          "ul",
                          null,
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "a",
                              { className: "facebook", href: "//facebook.com" },
                              r.a.createElement("i", {
                                className: "fa fa-facebook",
                              })
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "a",
                              { className: "twitter", href: "//twitter.com" },
                              r.a.createElement("i", {
                                className: "fa fa-twitter",
                              })
                            )
                          ),
                          r.a.createElement(
                            "li",
                            null,
                            r.a.createElement(
                              "a",
                              {
                                className: "instagram",
                                href: "//instagram.com",
                              },
                              r.a.createElement("i", {
                                className: "fa fa-instagram",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          )
        );
      };
    },
  },
]);
//# sourceMappingURL=52.01151725.chunk.js.map
