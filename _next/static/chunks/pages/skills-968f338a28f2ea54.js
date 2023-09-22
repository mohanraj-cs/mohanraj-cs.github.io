(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [81],
  {
    5087: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/skills",
        function () {
          return e(7997);
        },
      ]);
    },
    8359: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981);
      function a() {
        let n = (0, i._)([
          "\n  display: inline;\n  font-weight: 300;\n  font-style: normal;\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      let l = (0, o.ZP)(s.E.em).withConfig({ componentId: "sc-414ac385-0" })(
        a()
      );
      function c(n) {
        let { children: t, color: e } = n;
        return (0, r.jsx)(l, { style: { color: e }, children: t });
      }
    },
    4559: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(981),
        s = e(508);
      function a() {
        let n = (0, i._)([
          "\n  height: 100%;\n  width: 50%;\n  z-index: ",
          ";\n  pointer-events: none;\n  position: absolute;\n  display: flex;\n  align-items: flex-end;\n  bottom: 0;\n  right: 0;\n  isolation: isolate;\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      let l = (0, s.ZP)(o.E.div).withConfig({ componentId: "sc-21b231e2-0" })(
          a(),
          (n) => n.$zIndex
        ),
        c = {
          hidden: { scale: 0, originY: 1 },
          visible: (n) => ({
            scale: n.scale,
            originY: 1,
            transition: {
              type: "spring",
              stiffness: 50,
              mass: 1.2,
              damping: 11,
              delay: n.delay,
            },
          }),
          selected: (n) => ({ scale: n.scale }),
        },
        d = {
          hidden: { scale: 0, originY: 1 },
          visible: (n) => ({
            scale: n.scale,
            originY: 1,
            transition: {
              type: "spring",
              stiffness: 80,
              mass: 1.1,
              damping: 9.5,
              delay: n.delay,
            },
          }),
          selected: (n) => ({ scale: n.scale, originY: 1 }),
        };
      function u(n) {
        let {
          delay: t = 0,
          layoutId: e = "treeIcon",
          colors: i = { trunk: "#494949", foliage: "#45b6bf" },
          zIndex: s = 1,
          scale: a = 1,
          transition: u = {
            type: "spring",
            stiffness: 40,
            mass: 2,
            damping: 12,
          },
          width: p = "50%",
          height: f = "30%",
          pos: h = { left: "auto", right: "auto", bottom: 0 },
        } = n;
        return (0, r.jsx)(l, {
          layoutId: e,
          transition: u,
          $zIndex: s,
          style: {
            width: p,
            height: f,
            right: h.right,
            bottom: h.bottom,
            left: h.left,
          },
          children: (0, r.jsxs)(o.E.svg, {
            viewBox: "-15 -30 125 192",
            children: [
              (0, r.jsx)(o.E.path, {
                variants: d,
                custom: { delay: t + 0.4, scale: a },
                d: "M95 81.3c0 35.8-21.2 48.3-47.5 48.3S0 117.1 0 81.3 47.5 0 47.5 0s47.6 45.5 47.6 81.3Z",
                fill: i.foliage,
              }),
              (0, r.jsx)(o.E.path, {
                variants: c,
                custom: { delay: t, scale: a },
                fill: i.trunk,
                d: "m45.8 124.2.5-30 20.3-37.1-20.2 32.4.2-13.5 14-26.8-14 23.3.4-24.3 15-21.3-14.9 17.5.2-44.4-1.5 58.8.1-2.4-15.2-23.3 15 27.9-1.4 27.1-.1-.7-17.5-24.5 17.5 27-.2 3.4v.3l-3.6 68.7h4.8l.6-35.5 17.4-26.9-17.4 24.3z",
              }),
            ],
          }),
        });
      }
    },
    4992: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981);
      function a() {
        let n = (0, i._)([
          "\n  width: 100%;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n",
        ]);
        return (
          (a = function () {
            return n;
          }),
          n
        );
      }
      let l = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-3384b74c-0" })(
        a()
      );
      function c(n) {
        let { children: t } = n;
        return (0, r.jsx)(l, { children: t });
      }
    },
    9487: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return z;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        a = e(4960),
        l = e(4213),
        c = e(6523),
        d = e(4368),
        u = e(3305),
        p = e(3093),
        f = e(7294),
        h = e(1664),
        g = e.n(h),
        m = e(9261);
      function x() {
        let n = (0, i._)([
          "\n  min-width: 80px;\n  height: 40px;\n  width: max-content;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  position: relative;\n  cursor: pointer;\n  -webkit-tap-highlight-color: transparent;\n  touch-action: none;\n",
        ]);
        return (
          (x = function () {
            return n;
          }),
          n
        );
      }
      function y() {
        let n = (0, i._)([
          "\n  height: calc(100% + 10px);\n  position: absolute;\n  width: calc(100% + 10px);\n  border-radius: 30px;\n  user-select: none;\n  pointer-events: none;\n",
        ]);
        return (
          (y = function () {
            return n;
          }),
          n
        );
      }
      function w() {
        let n = (0, i._)([
          "\n  -webkit-user-drag: none;\n  -moz-user-drag: none;\n  user-drag: none;\n  user-select: none;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 27px;\n\n  &:focus {\n    outline: none;\n  }\n",
        ]);
        return (
          (w = function () {
            return n;
          }),
          n
        );
      }
      function v() {
        let n = (0, i._)([
          "\n  font-weight: 300;\n  font-size: 1rem;\n  width: max-content;\n  height: min-content;\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        let n = (0, i._)([
          "\n  width: 11px;\n  margin-left: 0px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  position: absolute;\n",
        ]);
        return (
          (_ = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, i._)(["0px 0px 0px 0px ", ", 0px 0px 0x 0px ", ""]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, i._)(["1px 2px 0px 4px ", ", 0px 0px 10px 5px ", ""]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      let j = (0, o.ZP)(s.E.li).withConfig({ componentId: "sc-3e1c7650-0" })(
          x()
        ),
        C = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-3e1c7650-1" })(
          y()
        ),
        I = (0, o.ZP)(s.E.a).withConfig({ componentId: "sc-3e1c7650-2" })(w()),
        Z = (0, o.ZP)(s.E.p).withConfig({ componentId: "sc-3e1c7650-3" })(v()),
        E = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-3e1c7650-4" })(
          _()
        ),
        P = {
          hidden: { opacity: 0, right: 35 },
          hover: {
            opacity: 1,
            right: 17,
            transition: {
              delay: 0.05,
              type: "tween",
              duration: 0.35,
              ease: "easeInOut",
            },
          },
        },
        S = {
          hidden: { x: 0, scale: 1 },
          visible: {
            x: 0,
            scale: 1,
            transition: { type: "tween", duration: 0.2, ease: "easeInOut" },
          },
          hover: {
            x: -9,
            scale: 1.02,
            transition: {
              delay: 0.05,
              type: "tween",
              duration: 0.2,
              ease: "easeInOut",
            },
          },
        };
      function z(n) {
        let {
            transition: t = { type: "spring", stiffness: 30 },
            height: e = 37,
            top: i = !1,
            bottom: s = !1,
            variants: h,
            custom: x = 0,
            bgColor: y,
            hoverColor: w,
            select: v = null,
            selected: _ = !1,
            canHover: z = !0,
            outlineTransition: N = { type: "spring", stiffness: 30 },
            title: H,
            id: T,
          } = n,
          O = (0, f.useContext)(o.Ni),
          Y = (0, a.c)(0),
          M = (0, a.c)(s || i ? 0 : 1),
          [R, A] = (0, f.useState)(!1);
        (0, f.useEffect)(() => {
          if (i) {
            let n = (0, l.j)(M, 0, { duration: 0.215 });
            return n.stop;
          }
          if (s) M.set(0);
          else {
            let n = (0, l.j)(M, 1, { duration: 0.3 });
            return n.stop;
          }
        }, [i, s, M]);
        let B = () => {
            v(H), z && !R && (W(1), A(!0));
          },
          D = () => {
            W(0), A(!1);
          },
          L = (n) => {
            n.preventDefault(), R && (W(0), A(!1));
          },
          W = (n) => {
            (0, l.j)(Y, n, { type: "tween", duration: 0.2, ease: "easeInOut" });
          },
          $ = (0, c.H)(
            [y || O.primary_light, (null == w ? void 0 : w.bg) || O.teal, Y],
            (n) => {
              let [t, e, i] = n;
              return (0, d.v)(i, [0, 1], [t, e]);
            }
          ),
          U = (0, c.H)(
            [O.primary_dark, (null == w ? void 0 : w.bg) || O.teal, Y],
            (n) => {
              let [t, e, i] = n;
              return (0, d.v)(i, [0, 1], [t, e]);
            }
          ),
          V = (0, c.H)(O.primary_dark, (n) => "thin solid " + n),
          X = (0, u.Y)(b(), O.shadow_key, O.shadow_ambient),
          F = (0, u.Y)(k(), O.shadow_key, O.shadow_ambient),
          G = (0, c.H)([X, F, Y], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          J = (0, c.H)(Y, [0, 1], ["0px", "-7px"]),
          K = (0, c.H)(Y, [0, 1], ["1px", "6px"]),
          q = (0, c.H)(
            [O.primary_verydark, w.text || O.primary_dark, Y],
            (n) => {
              let [t, e, i] = n;
              return (0, d.v)(i, [0, 1], [t, e]);
            }
          );
        return (0, r.jsx)(p.A, {
          transition: t,
          children: (0, r.jsxs)(j, {
            $height: e,
            layoutId: "".concat(T, "_bubble"),
            onHoverStart: B,
            onTapStart: B,
            onTap: () => {
              W(0);
            },
            onHoverEnd: D,
            variants: h,
            custom: x,
            onFocus: B,
            onBlur: D,
            style: {
              boxShadow: G,
              zIndex: _ ? 1 : 0,
              opacity: M,
              border: V,
              backgroundColor: $,
            },
            children: [
              (0, r.jsx)(g(), {
                draggable: !1,
                href: "/skills/".concat(T),
                passHref: !0,
                scroll: !1,
                legacyBehavior: !0,
                children: (0, r.jsxs)(I, {
                  draggable: !1,
                  onClick: z ? null : L,
                  onTapStart: L,
                  onDragStart: L,
                  initial: "hidden",
                  animate: R ? "hover" : "visible",
                  children: [
                    (0, r.jsx)(Z, {
                      layoutId: "".concat(T, "_bubbleLinkTitle"),
                      style: { color: q },
                      variants: S,
                      children: H,
                    }),
                    _ &&
                      R &&
                      (0, r.jsx)(E, {
                        variants: P,
                        style: { color: q, rotate: 90 },
                        children: (0, r.jsx)(m.Z, {}),
                      }),
                  ],
                }),
              }),
              _ &&
                (0, r.jsx)(C, {
                  layoutId: "bubbleOutline",
                  style: {
                    outlineColor: U,
                    outlineWidth: K,
                    outlineStyle: "solid",
                    outlineOffset: J,
                    borderRadius: "30px",
                  },
                  transition: N,
                }),
            ],
          }),
        });
      }
    },
    7997: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return U;
          },
          default: function () {
            return V;
          },
        });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        a = e(3093),
        l = e(7294),
        c = e(7492),
        d = e(4960),
        u = e(3589),
        p = e(9487),
        f = e(9261),
        h = e(8391);
      function g() {
        let n = (0, i._)([
          "\n  width: 275px;\n  max-width: 100%;\n  justify-items: center;\n  align-items: center;\n  display: grid;\n  grid-template-rows: repeat(auto-fit, 40px);\n  grid-template-columns: 100%;\n  row-gap: 15px;\n  padding: 0;\n  margin: 0;\n  cursor: grab;\n  grid-auto-rows: 40px;\n  touch-action: none;\n\n  @media (max-width: 555px) {\n    row-gap: 10px;\n  }\n",
        ]);
        return (
          (g = function () {
            return n;
          }),
          n
        );
      }
      function m() {
        let n = (0, i._)([
          "\n  width: 13px;\n  height: 13px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n  margin: 0;\n",
        ]);
        return (
          (m = function () {
            return n;
          }),
          n
        );
      }
      let x = (0, o.ZP)(s.E.ul).withConfig({ componentId: "sc-ea3c25ac-0" })(
          g()
        ),
        y = (0, o.ZP)(s.E.button).withConfig({ componentId: "sc-ea3c25ac-1" })(
          m()
        ),
        w = {
          hidden: (n) => ({
            x: 300,
            y: 0,
            opacity: 0,
            transition: {
              opacity: { duration: 0.3 },
              type: "spring",
              stiffness: 150 + 5 * n,
              mass: 2,
              damping: 20,
            },
          }),
          visible: (n) => ({
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
              opacity: { duration: 0.3 },
              type: "spring",
              stiffness: 150 + 5 * n,
              mass: 2,
              damping: 20,
            },
          }),
        };
      function v(n) {
        let { skills: t } = n,
          e = (0, h.Z)(),
          i =
            e.width > 555
              ? (e.height - 450) / 50 > t.length - 2
                ? t.length - 2
                : (e.height - 450) / 50
              : (e.height - 600) / 50 > t.length - 2
              ? t.length - 2
              : (e.height - 600) / 50 < 3
              ? 3
              : (e.height - 600) / 50,
          s = (0, l.useContext)(o.Ni),
          a = (0, d.c)(0),
          [c, g] = (0, l.useState)(!1),
          [m, v] = (0, l.useState)(0),
          [_, b] = (0, l.useState)(!1),
          k = (n) => {
            c || b(n);
          },
          j = (n) => {
            v((e) =>
              e + n < 0 ? t.length - 1 : e + n > t.length - 1 ? 0 : e + n
            );
          };
        return (0, r.jsx)(u.S, {
          children: (0, r.jsxs)(x, {
            onPanStart: () => g(!0),
            onPan: (n, e) => {
              a.set(a.get() + e.delta.y);
              let i = Math.round(a.get() / 35);
              Math.abs(a.get()) > 35 &&
                (v((n) =>
                  n - i < 0 ? t.length - 1 : n - i > t.length - 1 ? 0 : n - i
                ),
                a.set(0));
            },
            onPanEnd: () => {
              a.set(0), setTimeout(() => g(!1), 75);
            },
            children: [
              (0, r.jsx)(y, {
                onClick: () => j(1),
                layout: !0,
                style: { color: s.primary_dark },
                children: (0, r.jsx)(f.Z, {}),
              }),
              [
                ...t.slice(m, m + i),
                ...t.slice(0, i - t.slice(m, m + i).length),
              ].map((n, t) =>
                (0, r.jsx)(
                  p.Z,
                  {
                    title: n.title,
                    variants: w,
                    custom: t,
                    bgColor: s.primary,
                    id: n.slug,
                    hoverColor: { bg: s.teal, text: s.primary_dark },
                    transition: {
                      type: "spring",
                      stiffness: 200,
                      mass: 0.25,
                      damping: 28,
                    },
                    outlineTransition: {
                      type: "spring",
                      stiffness: 85,
                      mass: 0.25,
                      damping: 10,
                    },
                    select: k,
                    selected: _ === n.title,
                    canHover: !c,
                  },
                  "".concat(n.slug, "_scroller")
                )
              ),
              (0, r.jsx)(y, {
                layout: !0,
                style: { rotate: 180, color: s.primary_dark },
                onClick: () => j(-1),
                children: (0, r.jsx)(f.Z, {}),
              }),
            ],
          }),
        });
      }
      var _ = e(8359),
        b = e(9008),
        k = e.n(b),
        j = e(4559),
        C = e(866),
        I = e(3337),
        Z = e(4992);
      function E() {
        let n = (0, i._)([
          "\n  width: 100%;\n  min-width: 100%;\n  height: max-content;\n  display: grid;\n  flex: 1;\n  grid-template-rows: max-content max-content max-content;\n  grid-template-columns: 72% 1fr;\n  padding: 0 16vw;\n  grid-auto-flow: dense;\n  align-items: start;\n  align-content: center;\n\n  @media (max-width: 555px) {\n    row-gap: 2vh;\n    align-items: start;\n    grid-template-rows: max-content max-content 1fr;\n    grid-template-columns: 100%;\n    padding: 5vh 8vw;\n  }\n",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, i._)([
          "\n  width: 100%;\n  height: 100vh;\n  overflow: hidden;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      function S() {
        let n = (0, i._)([
          "\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  justify-self: center;\n  grid-row: span 3;\n\n  @media (max-width: 555px) {\n    grid-row: span 1;\n    justify-content: center;\n    align-items: flex-start;\n  }\n",
        ]);
        return (
          (S = function () {
            return n;
          }),
          n
        );
      }
      function z() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width: min(100%, 500px);\n  height: 35vh;\n  max-height: 100%;\n  align-items: flex-end;\n  justify-content: space-evenly;\n  justify-self: flex-end;\n  align-self: flex-end;\n  display: flex;\n  position: relative;\n  pointer-events: none;\n  isolation: isolate;\n\n  @media (max-width: 555px) {\n    margin-top: calc(170px - 24%);\n    width: 135%;\n    max-width: 500px;\n    justify-self: center;\n  }\n",
        ]);
        return (
          (z = function () {
            return n;
          }),
          n
        );
      }
      function N() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width: 450px;\n  height: 104px;\n  background-color: black;\n  position: absolute;\n  bottom: -37px;\n  clip-path: ellipse(50% 35% at 50% 50%);\n  z-index: 0;\n\n  @media (max-width: 555px) {\n    height: 104px;\n  }\n",
        ]);
        return (
          (N = function () {
            return n;
          }),
          n
        );
      }
      function H() {
        let n = (0, i._)([
          "\n  width: max-content;\n  font-size: clamp(3.4rem, 15vw, 9rem);\n  font-weight: 200;\n  line-height: clamp(3.4rem, 13vw, 9rem);\n  margin-left: 2vw;\n",
        ]);
        return (
          (H = function () {
            return n;
          }),
          n
        );
      }
      function T() {
        let n = (0, i._)([
          "\n  padding: 0 0 10vh 0;\n  max-width: 610px;\n  font-size: clamp(1rem, 4vw, 1.3525rem);\n  font-weight: 200;\n  line-height: clamp(1rem, 4.5vw, 1.55rem);\n  grid-column: 1;\n  z-index: 1;\n\n  @media (max-width: 555px) {\n    padding: 0;\n  }\n",
        ]);
        return (
          (T = function () {
            return n;
          }),
          n
        );
      }
      let O = (0, o.ZP)(s.E.main).withConfig({ componentId: "sc-86fc4a1d-0" })(
          E()
        ),
        Y = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86fc4a1d-1" })(
          P()
        ),
        M = (0, o.ZP)(s.E.section).withConfig({ componentId: "sc-86fc4a1d-2" })(
          S()
        ),
        R = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86fc4a1d-3" })(
          z()
        ),
        A = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86fc4a1d-4" })(
          N()
        ),
        B = (0, o.ZP)(s.E.h1).withConfig({ componentId: "sc-86fc4a1d-5" })(H()),
        D = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-86fc4a1d-6" })(
          T()
        ),
        L = {
          hidden: { opacity: 0, x: 200 },
          visible: {
            opacity: 1,
            x: 0,
            transition: {
              type: "spring",
              stiffness: 60,
              mass: 1.5,
              damping: 10,
            },
          },
          exit: { opacity: 0, x: 0, transition: { duration: 0.1 } },
        },
        W = {
          hidden: { scale: 0 },
          visible: {
            scale: 1,
            transition: {
              delay: 1.3,
              type: "spring",
              stiffness: 20,
              mass: 1.2,
              damping: 10,
            },
          },
        },
        $ = {
          hidden: { opacity: 1, x: 400 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 30, mass: 1, damping: 8 },
          },
          exit: { opacity: 0, x: 0, transition: { duration: 0.1 } },
        };
      var U = !0;
      function V(n) {
        let { skills: t } = n,
          e = (0, l.useContext)(o.Ni),
          i = [
            {
              name: "Projects",
              href: "/projects",
              color: e.teal,
              onClick: null,
            },
            { name: "Contact", href: "/contact", color: e.teal, onClick: null },
            {
              name: "Resume",
              href: "/Rory_Bourdon_Resume_2021.pdf",
              color: e.teal,
              onClick: null,
            },
          ];
        return (0, r.jsx)(a.A, {
          transition: { type: "spring", stiffness: 30, mass: 2, damping: 14 },
          children: (0, r.jsxs)(Y, {
            style: { backgroundColor: e.primary },
            layoutId: "skillsCard_window",
            transition: { type: "spring", stiffness: 30, mass: 2, damping: 14 },
            initial: "hidden",
            animate: "visible",
            exit: "exit",
            children: [
              (0, r.jsxs)(k(), {
                children: [
                  (0, r.jsx)("title", {
                    children:
                      "Skills - Mohan Raj Chandrasekar | Web Developer & Visual Artist",
                  }),
                  (0, r.jsx)("meta", {
                    name: "description",
                    content:
                      "Skills - Mohan Raj Chandrasekar | Web Developer & Visual Artist",
                  }),
                ],
              }),
              (0, r.jsx)(c.Z, { links: i }),
              (0, r.jsxs)(O, {
                children: [
                  (0, r.jsx)(C.default, { lines: [{ yLoc: 70, slope: -25 }] }),
                  (0, r.jsxs)(Z.Z, {
                    children: [
                      (0, r.jsx)(I.Z, {
                        variants: $,
                        id: "backArrow_skillsPage",
                      }),
                      (0, r.jsx)(B, {
                        layoutId: "skillsCard_label",
                        style: { color: e.primary_verydark },
                        children: "Skills",
                      }),
                    ],
                  }),
                  (0, r.jsxs)(D, {
                    variants: L,
                    style: { color: e.primary_dark },
                    layoutId: "skillDetails",
                    children: [
                      "These are some of the skills I’ve picked up over the years through\n              a combination of formal education, self-directed learning and most\n              importantly, ",
                      (0, r.jsx)(_.Z, {
                        color: e.teal,
                        children: "building things",
                      }),
                      ". I hope this list never stops growing.",
                    ],
                  }),
                  (0, r.jsx)(M, { children: (0, r.jsx)(v, { skills: t }) }),
                  (0, r.jsxs)(R, {
                    layout: !0,
                    initial: "visible",
                    animate: "visible",
                    children: [
                      (0, r.jsx)(j.Z, {
                        colors: {
                          trunk: e.primary_light,
                          foliage: e.primary_verydark,
                        },
                        delay: 1,
                        width: "240px",
                        height: "384px",
                        pos: { left: -10, right: "auto", bottom: 15 },
                        layoutId: "skills_tree_left",
                        transition: {
                          type: "spring",
                          stiffness: 33,
                          mass: 2,
                          damping: 14,
                        },
                        scale: 0.95,
                      }),
                      (0, r.jsx)(j.Z, {
                        colors: { trunk: e.primary_verydark, foliage: e.teal },
                        width: "240px",
                        height: "384px",
                        delay: 1,
                        zIndex: 2,
                        transition: {
                          type: "spring",
                          stiffness: 38,
                          mass: 1.9,
                          damping: 14,
                        },
                        scale: 1.1,
                      }),
                      (0, r.jsx)(j.Z, {
                        colors: {
                          trunk: e.primary_light,
                          foliage: e.primary_dark,
                        },
                        delay: 1,
                        width: "240px",
                        height: "384px",
                        pos: { left: "auto", right: -10, bottom: 15 },
                        layoutId: "skills_tree_right",
                        transition: {
                          type: "spring",
                          stiffness: 43,
                          mass: 1.8,
                          damping: 14,
                        },
                        scale: 0.85,
                      }),
                      (0, r.jsx)(A, {
                        initial: "hidden",
                        animate: "visible",
                        variants: W,
                        style: { backgroundColor: e.primary_slightlydark },
                      }),
                    ],
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
      let a = (n) => !n.isLayoutDirty && n.willUpdate(!1),
        l = (n) => !0 === n,
        c = (n) => l(!0 === n) || "id" === n,
        d = ({ children: n, id: t, inherit: e = !0 }) => {
          let d = (0, i.useContext)(r.p),
            u = (0, i.useContext)(o),
            [p, f] = (0, s.N)(),
            h = (0, i.useRef)(null),
            g = d.id || u;
          null === h.current &&
            (c(e) && g && (t = t ? g + "-" + t : g),
            (h.current = {
              id: t,
              group:
                (l(e) && d.group) ||
                (function () {
                  let n = new Set(),
                    t = new WeakMap(),
                    e = () => n.forEach(a);
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
          let m = (0, i.useMemo)(() => ({ ...h.current, forceRender: p }), [f]);
          return i.createElement(r.p.Provider, { value: m }, n);
        };
    },
    3093: function (n, t, e) {
      "use strict";
      e.d(t, {
        A: function () {
          return a;
        },
      });
      var i = e(7294),
        r = e(6014),
        o = e(1492),
        s = e(6681);
      function a({ children: n, isValidProp: t, ...e }) {
        t && (0, o.K)(t),
          ((e = { ...(0, i.useContext)(r._), ...e }).isStatic = (0, s.h)(
            () => e.isStatic
          ));
        let a = (0, i.useMemo)(
          () => e,
          [JSON.stringify(e.transition), e.transformPagePoint, e.reducedMotion]
        );
        return i.createElement(r._.Provider, { value: a }, n);
      }
    },
    3305: function (n, t, e) {
      "use strict";
      e.d(t, {
        Y: function () {
          return o;
        },
      });
      var i = e(5512),
        r = e(406);
      function o(n, ...t) {
        let e = n.length;
        return (0, i.N)(t.filter(r.i), function () {
          let i = "";
          for (let o = 0; o < e; o++) {
            i += n[o];
            let e = t[o];
            e && (i += (0, r.i)(e) ? e.get() : e);
          }
          return i;
        });
      }
    },
  },
  function (n) {
    n.O(0, [746, 513, 774, 888, 179], function () {
      return n((n.s = 5087));
    }),
      (_N_E = n.O());
  },
]);
