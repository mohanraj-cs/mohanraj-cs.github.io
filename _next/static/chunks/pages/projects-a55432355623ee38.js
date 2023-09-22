(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [327],
  {
    5039: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/projects",
        function () {
          return e(3145);
        },
      ]);
    },
    4992: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return a;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981);
      function l() {
        let n = (0, i._)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n",
        ]);
        return (
          (l = function () {
            return n;
          }),
          n
        );
      }
      let c = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-3384b74c-0" })(
        l()
      );
      function a(n) {
        let { children: t } = n;
        return (0, r.jsx)(c, { children: t });
      }
    },
    688: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return y;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        l = e(4960),
        c = e(3589),
        a = e(7294),
        d = e(9261),
        u = e(1478),
        p = e(8391);
      function f() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width: 100%;\n  height: max-content;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin: 0;\n  padding: 20px 0;\n  justify-self: center;\n  user-select: none;\n\n  @media (max-width: 555px) {\n    padding: 0;\n  }\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      function h() {
        let n = (0, i._)([
          "\n  width: max-content;\n  height: max-content;\n  align-content: center;\n  justify-items: center;\n  justify-content: center;\n  display: grid;\n  grid-template-rows: 245px;\n  grid-template-columns: 340px 340px 340px;\n  column-gap: 55px;\n  padding: 0 40px;\n  margin: 0;\n  cursor: grab;\n  grid-auto-rows: 320px;\n  user-select: none;\n",
        ]);
        return (
          (h = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, i._)([
          "\n  width: 13px;\n  height: 13px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      let g = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-2f93b45d-0" })(
          f()
        ),
        x = (0, o.ZP)(s.E.ul).withConfig({ componentId: "sc-2f93b45d-1" })(h()),
        w = (0, o.ZP)(s.E.button).withConfig({ componentId: "sc-2f93b45d-2" })(
          m()
        );
      function y(n) {
        let { projects: t, bgColor: e, primaryColor: i } = n,
          s = (0, a.useContext)(o.Ni),
          [f, h] = (0, a.useState)(!0),
          [m, y] = (0, a.useState)(!1),
          [v, j] = (0, a.useState)(0),
          _ = (0, l.c)(0),
          [C, P] = (0, a.useState)(!1),
          b = (0, p.Z)();
        (0, a.useEffect)(() => {
          setTimeout(() => h(!1), 1e3);
        }, []),
          (0, a.useEffect)(() => {
            let n = _.on("change", (n) => {
              Math.abs(n) >= 245 &&
                (j((e) =>
                  e + Math.sign(-1 * n) > t.length - 1
                    ? 0
                    : e + Math.sign(-1 * n) < 0
                    ? t.length - 1
                    : e + Math.sign(-1 * n)
                ),
                _.set(-150 * Math.sign(n)));
            });
            return () => n();
          }, [_, t.length]);
        let E = () => {
            j((n) => (n + 1 > t.length - 1 ? 0 : n + 1));
          },
          Z = () => {
            j((n) => (n - 1 < 0 ? t.length - 1 : n - 1));
          };
        return (0, r.jsx)(c.S, {
          children: (0, r.jsxs)(g, {
            children: [
              b.width > 555 &&
                (0, r.jsx)(w, {
                  onClick: Z,
                  layout: !0,
                  style: { rotate: 270, color: s.primary_dark },
                  children: (0, r.jsx)(d.Z, {}),
                }),
              (0, r.jsx)(x, {
                onPanStart: () => {
                  P(!0), _.set(0);
                },
                onPan: (n, t) => {
                  _.set(_.get() + t.delta.x);
                },
                onPanEnd: (n, t) => {
                  t.velocity.x < -500 ? E() : t.velocity.x > 500 && Z(),
                    _.set(0),
                    P(!1);
                },
                style: {
                  cursor: C ? "grabbing" : "grab",
                  gridTemplateColumns: "repeat(".concat(
                    Math.min(3, t.length),
                    ", 340px)"
                  ),
                },
                children: [
                  ...t.slice(v, v + Math.min(3, t.length)),
                  ...t.slice(
                    0,
                    Math.min(3, t.length) -
                      t.slice(v, v + Math.min(3, t.length)).length
                  ),
                ].map((n, t) =>
                  (0, r.jsx)(
                    u.Z,
                    {
                      id: n.slug,
                      project: n,
                      bgColor: e,
                      primaryColor: i,
                      outline: m === n.slug || (b.width < 555 && 1 === t),
                      active: !C,
                      intro: f,
                      onHover: y,
                      defaultBGColor: s.primary,
                      delay: 0.7 + 0.25 * t,
                      scrollerPos: t,
                    },
                    n.slug
                  )
                ),
              }),
              b.width > 555 &&
                (0, r.jsx)(w, {
                  layout: !0,
                  style: { rotate: 90, color: s.primary_dark },
                  onClick: E,
                  children: (0, r.jsx)(d.Z, {}),
                }),
            ],
          }),
        });
      }
    },
    3145: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return A;
          },
          default: function () {
            return B;
          },
        });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        l = e(3093),
        c = e(7294),
        a = e(7492),
        d = e(9008),
        u = e.n(d),
        p = e(3337),
        f = e(688),
        h = e(1339),
        m = e(866),
        g = e(4992);
      function x() {
        let n = (0, i._)([
          "\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  max-height: 100%;\n  display: grid;\n  flex: 1;\n  grid-template-rows: max-content max-content;\n  grid-template-columns: 60% 40%;\n  padding: 0 12vw;\n  align-content: space-evenly;\n  justify-content: center;\n  grid-auto-flow: dense;\n\n  @media (max-width: 555px) {\n    row-gap: 2vh;\n    align-items: center;\n    grid-template-rows: max-content minmax(10vh, 1fr) 1fr;\n    grid-template-columns: 100%;\n    padding: 1vh 6vw;\n  }\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, i._)([
          "\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  overflow: hidden;\n  flex-direction: column;\n  position: relative;\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, i._)([
          "\n  width: max-content;\n  font-size: clamp(3.4rem, 15vw, 9rem);\n  font-weight: 200;\n  line-height: 1.2;\n  margin: 0 0 10px 10px;\n  z-index: 1;\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width: 700px;\n  font-size: clamp(1rem, 4vw, 1.3525rem);\n  font-weight: 200;\n  line-height: clamp(1rem, 4.5vw, 1.55rem);\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width 800px;\n  font-size: clamp(1rem, 4vw, 1.3525rem);\n  font-weight: 200;\n  line-height: clamp(1rem, 4.5vw, 1.55rem);\n  grid-column: 1;\n  display: flex;\n",
        ]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        let n = (0, i._)([
          "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n",
        ]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function C() {
        let n = (0, i._)([
          "\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  pointer-events: none;\n  position: relative;\n  z-index: 2;\n\n  @media (max-width: 555px) {\n    grid-row: 3;\n  }\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, i._)([
          "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  grid-column: span 2;\n\n  @media (max-width: 555px) {\n    grid-column: span 1;\n  }\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      let b = (0, o.ZP)(s.E.main).withConfig({ componentId: "sc-86d7077f-0" })(
          x()
        ),
        E = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86d7077f-1" })(
          w()
        ),
        Z = (0, o.ZP)(s.E.h1).withConfig({ componentId: "sc-86d7077f-2" })(y()),
        k = (0, o.ZP)(s.E.p).withConfig({ componentId: "sc-86d7077f-3" })(v()),
        I = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86d7077f-4" })(
          j()
        ),
        S = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86d7077f-5" })(
          _()
        ),
        M = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86d7077f-6" })(
          C()
        ),
        N = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86d7077f-7" })(
          P()
        ),
        z = {
          hidden: { opacity: 0, x: "70%" },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.25,
              type: "spring",
              stiffness: 30,
              mass: 1,
              damping: 8,
            },
          },
          exit: { opacity: 0, x: 0, transition: { duration: 0.1 } },
        },
        R = {
          hidden: { opacity: 1, x: 400 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 30, mass: 1, damping: 8 },
          },
          exit: { opacity: 0, x: 0, transition: { duration: 0.1 } },
        };
      var A = !0;
      function B(n) {
        let { projects: t } = n,
          e = (0, c.useContext)(o.Ni),
          i = [
            { name: "Skills", href: "/skills", color: e.orange, onClick: null },
            {
              name: "Contact",
              href: "/contact",
              color: e.orange,
              onClick: null,
            },
            {
              name: "Resume",
              href: "/Rory_Bourdon_Resume_2021.pdf",
              color: e.orange,
              onClick: null,
            },
          ];
        return (0, r.jsx)(l.A, {
          transition: { type: "spring", stiffness: 30, mass: 2, damping: 11 },
          children: (0, r.jsxs)(E, {
            style: { backgroundColor: e.primary },
            layoutId: "projectCard_window",
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            children: [
              (0, r.jsxs)(u(), {
                children: [
                  (0, r.jsx)("title", {
                    children:
                      "Projects - Mohan Raj Chandrasekar | Web Developer & Visual Artist",
                  }),
                  (0, r.jsx)("meta", {
                    name: "description",
                    content:
                      "Projects - Mohan Raj Chandrasekar | Web Developer & Visual Artist",
                  }),
                ],
              }),
              (0, r.jsx)(a.Z, { links: i }),
              (0, r.jsxs)(b, {
                children: [
                  (0, r.jsx)(m.default, {
                    lines: [{ slope: -25, yLoc: 65 }],
                    circles: [{ cx: "88%", cy: "8%", r: 0.18 }],
                    slope: -25,
                    yLoc: 65,
                  }),
                  (0, r.jsxs)(S, {
                    children: [
                      (0, r.jsxs)(g.Z, {
                        children: [
                          (0, r.jsx)(p.Z, { id: "projectsPage", variants: R }),
                          (0, r.jsx)(Z, {
                            layoutId: "projectCard_label",
                            style: { color: e.primary_verydark },
                            transition: {
                              type: "spring",
                              stiffness: 50,
                              mass: 2,
                              damping: 14,
                            },
                            children: "Projects",
                          }),
                        ],
                      }),
                      (0, r.jsx)(I, {
                        children: (0, r.jsx)(k, {
                          variants: z,
                          style: { color: e.primary_dark },
                          children:
                            "You can swipe through various projects I have worked on below. I am always building something new or improving on existing projects.",
                        }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(M, {
                    children: (0, r.jsx)(h.Z, { scale: 1, collapsed: !1 }),
                  }),
                  (0, r.jsx)(N, {
                    children: (0, r.jsx)(f.Z, {
                      projects: t,
                      primaryColor: e.primary_verydark,
                      bgColor: e.orange,
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
    },
    1163: function (n, t, e) {
      n.exports = e(6885);
    },
    3589: function (n, t, e) {
      "use strict";
      e.d(t, {
        S: function () {
          return d;
        },
      });
      var i = e(7294),
        r = e(5364);
      let o = (0, i.createContext)(null);
      var s = e(6337);
      let l = (n) => !n.isLayoutDirty && n.willUpdate(!1),
        c = (n) => !0 === n,
        a = (n) => c(!0 === n) || "id" === n,
        d = ({ children: n, id: t, inherit: e = !0 }) => {
          let d = (0, i.useContext)(r.p),
            u = (0, i.useContext)(o),
            [p, f] = (0, s.N)(),
            h = (0, i.useRef)(null),
            m = d.id || u;
          null === h.current &&
            (a(e) && m && (t = t ? m + "-" + t : m),
            (h.current = {
              id: t,
              group:
                (c(e) && d.group) ||
                (function () {
                  let n = new Set(),
                    t = new WeakMap(),
                    e = () => n.forEach(l);
                  return {
                    add: (i) => {
                      n.add(i), t.set(i, i.addEventListener("willUpdate", e));
                    },
                    remove: (i) => {
                      n.delete(i);
                      let r = t.get(i);
                      r && (r(), t.delete(i)), e();
                    },
                    dirty: e,
                  };
                })(),
            }));
          let g = (0, i.useMemo)(() => ({ ...h.current, forceRender: p }), [f]);
          return i.createElement(r.p.Provider, { value: g }, n);
        };
    },
    3093: function (n, t, e) {
      "use strict";
      e.d(t, {
        A: function () {
          return l;
        },
      });
      var i = e(7294),
        r = e(6014),
        o = e(1492),
        s = e(6681);
      function l({ children: n, isValidProp: t, ...e }) {
        t && (0, o.K)(t),
          ((e = { ...(0, i.useContext)(r._), ...e }).isStatic = (0, s.h)(
            () => e.isStatic
          ));
        let l = (0, i.useMemo)(
          () => e,
          [JSON.stringify(e.transition), e.transformPagePoint, e.reducedMotion]
        );
        return i.createElement(r._.Provider, { value: l }, n);
      }
    },
  },
  function (n) {
    n.O(0, [746, 513, 490, 774, 888, 179], function () {
      return n((n.s = 5039));
    }),
      (_N_E = n.O());
  },
]);
