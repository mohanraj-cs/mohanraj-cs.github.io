(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [117],
  {
    3215: function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/skills/[skill]",
        function () {
          return e(4856);
        },
      ]);
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
    1478: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return A;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        a = e(4960),
        l = e(6523),
        c = e(4213),
        d = e(4368),
        u = e(7294);
      function p() {
        let n = (0, i._)([
          "\n  height: 20px;\n  width: max-content;\n  padding: 0 8px;\n  font-weight: 200;\n  font-size: 0.75rem;\n  border-radius: 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  user-select: none;\n  cursor: pointer;\n",
        ]);
        return (
          (p = function () {
            return n;
          }),
          n
        );
      }
      let g = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-e385afd-0" })(
          p()
        ),
        h = {
          hidden: (n) => ({ x: n.x, opacity: 0 }),
          visible: (n) => ({
            x: 0,
            opacity: 1,
            transition: { type: "spring", delay: n.delay, duration: 0.9 },
          }),
        };
      function f(n) {
        let {
            children: t,
            layoutId: e = "skillChip",
            bgColor: i,
            textColor: s,
            outline: p,
            custom: f,
          } = n,
          m = (0, u.useContext)(o.Ni),
          x = (0, a.c)(0),
          y = (0, l.H)([i, m.primary, s, x], (n) => {
            let [t, e, i, r] = n;
            return (0, d.v)(r, [0, 1], [t, (0, d.v)(r, [0, 1], [e, i])]);
          }),
          w = (0, l.H)([s, m.primary_verydark, i, x], (n) => {
            let [t, e, i, r] = n;
            return (0, d.v)(r, [0, 1], [t, (0, d.v)(r, [0, 1], [e, i])]);
          }),
          v = (n) => {
            (0, c.j)(x, n, { type: "tween", ease: "easeInOut" });
          };
        return (0, r.jsx)(
          g,
          {
            variants: h,
            layoutId: e,
            onHoverStart: () => v(1),
            onHoverEnd: () => v(0),
            style: {
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: p,
              backgroundColor: y,
              color: w,
            },
            transition: {
              type: "spring",
              stiffness: 50,
              mass: 0.25,
              damping: 7,
            },
            custom: f,
            children: t,
          },
          e
        );
      }
      f.defaultProps = { transition: { type: "spring", stiffness: 30 } };
      var m = e(1664),
        x = e.n(m),
        y = e(9261);
      function w() {
        let n = (0, i._)([
          "\n  -webkit-user-drag: none;\n  -moz-user-drag: none;\n  user-drag: none;\n  user-select: none;\n  font-size: 0.85rem;\n  font-weight: 300;\n  user-select: none;\n  padding: 8px 0 0 0;\n  width: 160px;\n  height: max-content;\n  z-index: 4;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 20px;\n  align-self: end;\n\n  &:focus {\n    outline: none;\n  }\n",
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
          "\n  width: 28px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0 8px;\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      let b = (0, o.ZP)(s.E.a).withConfig({ componentId: "sc-26e427d0-0" })(
          w()
        ),
        j = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-26e427d0-1" })(
          v()
        );
      function _(n) {
        let { href: t, linkColor: e } = n,
          i = (0, u.useContext)(o.Ni),
          s = (0, a.c)(0),
          p = (0, l.H)(s, [0, 1], [1, 1.1]),
          g = (0, l.H)(s, [0, 1], [90, 270]),
          h = (0, l.H)([e, i.primary_light, i.primary_verydark, s], (n) => {
            let [t, e, i, r] = n;
            return (0, d.v)(r, [0, 1], [t, (0, d.v)(r, [0, 1], [e, i])]);
          }),
          f = (n) => {
            (0, c.j)(s, n, { type: "tween", ease: "easeInOut" });
          };
        return (0, r.jsx)(x(), {
          href: t,
          passHref: !0,
          legacyBehavior: !0,
          children: (0, r.jsxs)(b, {
            onHoverStart: () => f(1),
            onHoverEnd: () => f(0),
            onFocus: () => f(1),
            onBlur: () => f(0),
            variants: {
              hidden: { opacity: 0, x: -130 },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  type: "spring",
                  duration: 1.1,
                  delayChildren: 0.1,
                },
              },
            },
            style: { color: h, scale: p },
            children: [
              "View Details",
              (0, r.jsx)(j, {
                style: { rotate: g, scale: p },
                variants: {
                  hidden: { opacity: 0, x: -100 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", duration: 1 },
                  },
                },
                children: (0, r.jsx)(y.Z, {}),
              }),
            ],
          }),
        });
      }
      function C() {
        let n = (0, i._)([
          "\n  width: 100%;\n  position: relative;\n  padding: 25px 30px;\n  display: grid;\n  grid-template-columns: 100%;\n  grid-template-rows: auto auto auto 1fr;\n  align-items: start;\n  justify-items: center;\n  align-content: center;\n  border-radius: 20px;\n  -webkit-user-drag: none;\n  -moz-user-drag: none;\n  user-drag: none;\n  user-select: none;\n\n  &:focus {\n    outline: none;\n  }\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, i._)([
          "\n  width: 100%;\n  font-size: 1.1rem;\n  font-weight: 400;\n  user-select: none;\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        let n = (0, i._)([
          "\n  width: 100%;\n  font-size: 0.9rem;\n  font-weight: 200;\n  user-select: none;\n  line-height: 1.25;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, i._)([
          "\n  display: flex;\n  flex-wrap: wrap;\n  width: 100%;\n  padding: 10px 0 10px 0;\n",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        let n = (0, i._)([
          "\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  border-radius: 20px;\n  user-select: none;\n  left: 0;\n  top: 0;\n  z-index: -1;\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      let P = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-c090e3a7-0" })(
          C()
        ),
        H = (0, o.ZP)(s.E.p).withConfig({ componentId: "sc-c090e3a7-1" })(k()),
        S = (0, o.ZP)(s.E.p).withConfig({ componentId: "sc-c090e3a7-2" })(I()),
        z = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-c090e3a7-3" })(
          E()
        ),
        N = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-c090e3a7-4" })(
          Z()
        ),
        M = { visible: { staggerChildren: 0.2 } },
        O = {
          hidden: (n) => ({ x: 200 * n.dir }),
          visible: (n) => ({
            x: 0,
            transition: {
              delayChildren: n.delay,
              staggerChildren: 0.15,
              type: "spring",
              stiffness: 50,
              mass: 0.25,
              damping: 10,
            },
          }),
          panning: { x: 0, transition: { staggerChildren: 0.15 } },
        },
        B = {
          hidden: (n) => ({ x: 190 * n, opacity: 0 }),
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 50,
              mass: 0.25,
              damping: 10,
            },
          },
          panning: {
            x: [0, 120, 0],
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 50,
              mass: 0.25,
              damping: 10,
            },
          },
        },
        R = {
          hidden: (n) => ({ x: 300 * n, opacity: 0 }),
          visible: {
            x: 0,
            opacity: 1,
            transition: {
              type: "spring",
              stiffness: 50,
              mass: 0.25,
              damping: 10,
            },
          },
          panning: {
            x: [0, 120, 0],
            opacity: 0,
            transition: {
              type: "spring",
              stiffness: 50,
              mass: 0.25,
              damping: 10,
            },
          },
        },
        T = {
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 0.3 } },
        };
      function A(n) {
        let {
            project: t,
            outline: e = !1,
            bgColor: i = "hsla(0,0,0,1)",
            primaryColor: s = "hsla(255,0,100,1)",
            onHover: p,
            delay: g = 0,
            id: h,
            active: m,
            intro: x = !1,
            defaultBGColor: y,
            scrollerPos: w = 1,
            drag: v = !0,
          } = n,
          b = (0, u.useContext)(o.Ni),
          j = (0, a.c)(0),
          C = (0, l.H)(j, [0, 1], [1, 1.02]),
          k = () => {
            p && p(t.slug),
              m &&
                (0, c.j)(j, 1, {
                  type: "tween",
                  duration: 0.25,
                  ease: "easeInOut",
                });
          },
          I = () => {
            j.stop(),
              (0, c.j)(j, 0, {
                type: "tween",
                duration: 0.25,
                ease: "easeInOut",
              });
          };
        (0, u.useEffect)(() => {
          m ||
            (j.stop(),
            (0, c.j)(j, 0, {
              type: "tween",
              duration: 0.25,
              ease: "easeInOut",
            }));
        }, [m, j]);
        let E = (0, l.H)(j, [0, 1], ["0px", "-2px"]),
          Z = (0, l.H)(j, [0, 1], ["1px", "8px"]),
          A = (0, l.H)([b.primary_verydark, i, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          D = (0, l.H)([y, i, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          L = (0, l.H)([j, b.shadow_key, b.shadow_ambient], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(
              t,
              [0, 1],
              [
                "0px 0px 0px 0px  " + e + ", 0px 0px 0x 0px " + i,
                "2px 3px 0px 8px  " + e + ", 0px 0px 25px 8px " + i,
              ]
            );
          }),
          V = (0, l.H)([b.primary_verydark, s, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          W = (0, l.H)([b.primary_verydark, s, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          F = (0, l.H)([b.primary_verydark, i, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          G = (0, l.H)([b.primary_light, s, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          }),
          X = (0, l.H)([b.primary_slightlydark, s, j], (n) => {
            let [t, e, i] = n;
            return (0, d.v)(i, [0, 1], [t, e]);
          });
        return (0, r.jsxs)(P, {
          tabIndex: 0,
          onHoverStart: k,
          onHoverEnd: I,
          onFocus: k,
          onBlur: I,
          style: {
            zIndex: e ? 1 : 0,
            boxShadow: L,
            scale: C,
            backgroundColor: D,
          },
          layoutId: "".concat(h, "_summary"),
          drag: !!v && "x",
          dragSnapToOrigin: !0,
          dragMomentum: !1,
          dragElastic: !0,
          custom: { dir: 0 === w ? (x ? 1 : -1) : 1, delay: x ? g : 0 },
          variants: O,
          initial: "hidden",
          animate: "visible",
          transition: { type: "spring", stiffness: 40, mass: 0.25, damping: 7 },
          children: [
            e &&
              (0, r.jsx)(N, {
                layoutId: "projectOutline",
                variants: T,
                style: {
                  outlineOffset: E,
                  outlineWidth: Z,
                  outlineColor: A,
                  outlineStyle: "solid",
                },
                transition: {
                  type: "spring",
                  stiffness: 30,
                  mass: 0.1,
                  damping: 3,
                },
              }),
            (0, r.jsx)(H, {
              layoutId: "".concat(h, "_title"),
              variants: R,
              style: { color: W },
              custom: 0 === w ? (x ? 1 : -1) : 1,
              transition: {
                type: "spring",
                stiffness: 40,
                mass: 0.25,
                damping: 7,
              },
              children: t.title,
            }),
            (0, r.jsx)(S, {
              layoutId: "".concat(h, "_description"),
              variants: B,
              style: { color: W },
              custom: 0 === w ? (x ? 1 : -1) : 1,
              transition: {
                type: "spring",
                stiffness: 40,
                mass: 0.25,
                damping: 7,
              },
              children: t.shortDescription,
            }),
            (0, r.jsx)(z, {
              layout: !0,
              variants: M,
              transition: {
                type: "spring",
                stiffness: 40,
                mass: 0.25,
                damping: 7,
              },
              children:
                t.skills &&
                t.skills.map((n, t) =>
                  (0, r.jsx)(
                    f,
                    {
                      layoutId: "".concat(n.slug, "_chip_").concat(h),
                      custom: {
                        x: 0 === w ? (x ? 120 : -120) : 120,
                        delay: x ? g + 0.35 + 0.1 * t : 0.35 + 0.1 * t,
                      },
                      bgColor: G,
                      textColor: F,
                      outline: X,
                      children: n.title,
                    },
                    n.slug
                  )
                ),
            }),
            e &&
              m &&
              (0, r.jsx)(_, {
                href: "/projects/".concat(encodeURIComponent(t.slug)),
                linkColor: V,
              }),
          ],
        });
      }
    },
    688: function (n, t, e) {
      "use strict";
      e.d(t, {
        Z: function () {
          return w;
        },
      });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        a = e(4960),
        l = e(3589),
        c = e(7294),
        d = e(9261),
        u = e(1478),
        p = e(8391);
      function g() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width: 100%;\n  height: max-content;\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  margin: 0;\n  padding: 20px 0;\n  justify-self: center;\n  user-select: none;\n\n  @media (max-width: 555px) {\n    padding: 0;\n  }\n",
        ]);
        return (
          (g = function () {
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
      function f() {
        let n = (0, i._)([
          "\n  width: 13px;\n  height: 13px;\n  cursor: pointer;\n  background: none;\n  border: none;\n  outline: none;\n  padding: 0;\n",
        ]);
        return (
          (f = function () {
            return n;
          }),
          n
        );
      }
      let m = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-2f93b45d-0" })(
          g()
        ),
        x = (0, o.ZP)(s.E.ul).withConfig({ componentId: "sc-2f93b45d-1" })(h()),
        y = (0, o.ZP)(s.E.button).withConfig({ componentId: "sc-2f93b45d-2" })(
          f()
        );
      function w(n) {
        let { projects: t, bgColor: e, primaryColor: i } = n,
          s = (0, c.useContext)(o.Ni),
          [g, h] = (0, c.useState)(!0),
          [f, w] = (0, c.useState)(!1),
          [v, b] = (0, c.useState)(0),
          j = (0, a.c)(0),
          [_, C] = (0, c.useState)(!1),
          k = (0, p.Z)();
        (0, c.useEffect)(() => {
          setTimeout(() => h(!1), 1e3);
        }, []),
          (0, c.useEffect)(() => {
            let n = j.on("change", (n) => {
              Math.abs(n) >= 245 &&
                (b((e) =>
                  e + Math.sign(-1 * n) > t.length - 1
                    ? 0
                    : e + Math.sign(-1 * n) < 0
                    ? t.length - 1
                    : e + Math.sign(-1 * n)
                ),
                j.set(-150 * Math.sign(n)));
            });
            return () => n();
          }, [j, t.length]);
        let I = () => {
            b((n) => (n + 1 > t.length - 1 ? 0 : n + 1));
          },
          E = () => {
            b((n) => (n - 1 < 0 ? t.length - 1 : n - 1));
          };
        return (0, r.jsx)(l.S, {
          children: (0, r.jsxs)(m, {
            children: [
              k.width > 555 &&
                (0, r.jsx)(y, {
                  onClick: E,
                  layout: !0,
                  style: { rotate: 270, color: s.primary_dark },
                  children: (0, r.jsx)(d.Z, {}),
                }),
              (0, r.jsx)(x, {
                onPanStart: () => {
                  C(!0), j.set(0);
                },
                onPan: (n, t) => {
                  j.set(j.get() + t.delta.x);
                },
                onPanEnd: (n, t) => {
                  t.velocity.x < -500 ? I() : t.velocity.x > 500 && E(),
                    j.set(0),
                    C(!1);
                },
                style: {
                  cursor: _ ? "grabbing" : "grab",
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
                      outline: f === n.slug || (k.width < 555 && 1 === t),
                      active: !_,
                      intro: g,
                      onHover: w,
                      defaultBGColor: s.primary,
                      delay: 0.7 + 0.25 * t,
                      scrollerPos: t,
                    },
                    n.slug
                  )
                ),
              }),
              k.width > 555 &&
                (0, r.jsx)(y, {
                  layout: !0,
                  style: { rotate: 90, color: s.primary_dark },
                  onClick: I,
                  children: (0, r.jsx)(d.Z, {}),
                }),
            ],
          }),
        });
      }
    },
    4856: function (n, t, e) {
      "use strict";
      e.r(t),
        e.d(t, {
          __N_SSG: function () {
            return W;
          },
          default: function () {
            return F;
          },
        });
      var i = e(2729),
        r = e(5893),
        o = e(508),
        s = e(981),
        a = e(4960),
        l = e(4213),
        c = e(3093),
        d = e(7294),
        u = e(7492),
        p = e(9008),
        g = e.n(p),
        h = e(5675),
        f = e.n(h),
        m = e(3337),
        x = e(688),
        y = e(866),
        w = e(4992);
      function v() {
        let n = (0, i._)([
          "\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  display: grid;\n  flex: 1;\n  grid-template-rows: max-content max-content;\n  grid-template-columns: 100%;\n  padding: 0 11vw;\n  align-content: space-evenly;\n  grid-auto-flow: dense;\n  overflow: hidden;\n\n  @media (max-width: 555px) {\n    row-gap: 10px;\n    align-items: start;\n    grid-template-rows: max-content max-content;\n    grid-template-columns: 100%;\n    padding: 0 8vw;\n  }\n",
        ]);
        return (
          (v = function () {
            return n;
          }),
          n
        );
      }
      function b() {
        let n = (0, i._)([
          "\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  position: relative;\n",
        ]);
        return (
          (b = function () {
            return n;
          }),
          n
        );
      }
      function j() {
        let n = (0, i._)(["\n  width: 100%;\n  height: 100%;\n"]);
        return (
          (j = function () {
            return n;
          }),
          n
        );
      }
      function _() {
        let n = (0, i._)([
          "\n  min-width: 130px;\n  width: 130px;\n  min-height: 130px;\n  height: 130px;\n  margin-right: 2.5vw;\n  border-radius: 20px;\n  overflow: hidden;\n  position: relative;\n",
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
          "\n  width: max-content;\n  font-size: clamp(3.4rem, 15vw, 9rem);\n  font-weight: 200;\n  line-height: 1.2;\n  margin: 0 0 20px 30px;\n",
        ]);
        return (
          (C = function () {
            return n;
          }),
          n
        );
      }
      function k() {
        let n = (0, i._)([
          "\n  width: 100%;\n  font-size: clamp(1rem, 4vw, 1.3525rem);\n  font-weight: 200;\n  line-height: clamp(1rem, 4.5vw, 1.55rem);\n  z-index: 1;\n",
        ]);
        return (
          (k = function () {
            return n;
          }),
          n
        );
      }
      function I() {
        let n = (0, i._)([
          "\n  width: 100%;\n  max-width 800px;\n  font-size: clamp(1rem, 4vw, 1.3525rem);\n  font-weight: 200;\n  line-height: clamp(1rem, 4.5vw, 1.55rem);\n  grid-column: 1;\n  display: flex;\n",
        ]);
        return (
          (I = function () {
            return n;
          }),
          n
        );
      }
      function E() {
        let n = (0, i._)([
          "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n",
        ]);
        return (
          (E = function () {
            return n;
          }),
          n
        );
      }
      function Z() {
        let n = (0, i._)([
          "\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n",
        ]);
        return (
          (Z = function () {
            return n;
          }),
          n
        );
      }
      function P() {
        let n = (0, i._)([
          "\n  width: 100%;\n  padding-bottom: 3vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n",
        ]);
        return (
          (P = function () {
            return n;
          }),
          n
        );
      }
      let H = (0, o.ZP)(s.E.main).withConfig({ componentId: "sc-abdb96e-0" })(
          v()
        ),
        S = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-abdb96e-1" })(b()),
        z = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-abdb96e-2" })(j()),
        N = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-abdb96e-3" })(_()),
        M = (0, o.ZP)(s.E.h1).withConfig({ componentId: "sc-abdb96e-4" })(C()),
        O = (0, o.ZP)(s.E.p).withConfig({ componentId: "sc-abdb96e-5" })(k()),
        B = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-abdb96e-6" })(I()),
        R = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-abdb96e-7" })(E()),
        T = (0, o.ZP)(s.E.div).withConfig({ componentId: "sc-abdb96e-8" })(Z()),
        A = (0, o.ZP)(s.E.p).withConfig({ componentId: "sc-abdb96e-9" })(P()),
        D = {
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
          exit: { opacity: 0, x: 0, transition: { duration: 0.2 } },
        },
        L = {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { type: "tween", delay: 1.5, duration: 0.3 },
          },
        },
        V = {
          hidden: { opacity: 1, x: 600 },
          visible: {
            opacity: 1,
            x: 0,
            transition: { type: "spring", stiffness: 30, mass: 1, damping: 8 },
          },
          exit: { opacity: 0, x: 0, transition: { duration: 0.2 } },
        };
      var W = !0;
      function F(n) {
        var t;
        let { skill: i } = n,
          s = (0, d.useContext)(o.Ni),
          p = e(2085),
          h = p.rgb.hsl(
            i.secondaryColor.rgba.r,
            i.secondaryColor.rgba.g,
            i.secondaryColor.rgba.b
          ),
          v = p.rgb.hsl(
            i.primaryColor.rgba.r,
            i.primaryColor.rgba.g,
            i.primaryColor.rgba.b
          ),
          b = (0, a.c)(
            "hsla(".concat(v[0], ",").concat(v[1], "%,").concat(v[2], "%,1)")
          ),
          j = (0, a.c)(
            "hsla(".concat(h[0], ",").concat(h[1], "%,").concat(h[2], "%,1)")
          ),
          _ = (0, a.c)("hsla(0,0%,0%,0)");
        return (
          (0, d.useEffect)(() => {
            (0, l.j)(_, b.get(), {
              type: "tween",
              duration: 1,
              ease: "easeInOut",
            });
          }, [b, _]),
          (0, r.jsx)(c.A, {
            transition: { type: "spring", stiffness: 30, mass: 2, damping: 11 },
            children: (0, r.jsxs)(S, {
              style: { backgroundColor: s.primary },
              initial: "hidden",
              animate: "visible",
              exit: "exit",
              children: [
                (0, r.jsxs)(g(), {
                  children: [
                    (0, r.jsx)("title", {
                      children: "".concat(
                        i.title,
                        " - Skills - Mohan Raj Chandrasekar | Web Developer & Visual Artist"
                      ),
                    }),
                    (0, r.jsx)("meta", {
                      name: "description",
                      content: "".concat(
                        i.title,
                        " - Skills - Mohan Raj Chandrasekar | Web Developer & Visual Artist"
                      ),
                    }),
                  ],
                }),
                (0, r.jsx)(u.Z, {
                  links: [
                    {
                      name: "Projects",
                      href: "/projects",
                      color: j,
                      onClick: null,
                    },
                    {
                      name: "Contact",
                      href: "/contact",
                      color: j,
                      onClick: null,
                    },
                    {
                      name: "Resume",
                      href: "/Rory_Bourdon_Resume_2021.pdf",
                      color: j,
                      onClick: null,
                    },
                  ],
                }),
                (0, r.jsx)(y.default, {
                  lines: [{ slope: 32, yLoc: -2 }],
                  circles: [{ cx: "90%", cy: "11%", r: 0.15 }],
                }),
                (0, r.jsxs)(H, {
                  children: [
                    (0, r.jsxs)(R, {
                      children: [
                        (0, r.jsxs)(w.Z, {
                          children: [
                            (0, r.jsx)(m.Z, {
                              id: "backArrow_skillPage",
                              variants: V,
                            }),
                            (0, r.jsx)(M, {
                              layoutId: "".concat(i.slug, "_bubbleLinkTitle"),
                              style: { color: s.primary_verydark },
                              transition: {
                                type: "spring",
                                stiffness: 50,
                                mass: 2,
                                damping: 14,
                              },
                              children: i.title,
                            }),
                          ],
                        }),
                        (0, r.jsxs)(B, {
                          children: [
                            (0, r.jsx)(N, {
                              layoutId: "".concat(i.slug, "_bubble"),
                              style: {
                                backgroundColor: _,
                                borderRadius: "20px",
                              },
                              children:
                                (null == i
                                  ? void 0
                                  : null === (t = i.image) || void 0 === t
                                  ? void 0
                                  : t.url) &&
                                (0, r.jsx)(z, {
                                  variants: L,
                                  children: (0, r.jsx)(f(), {
                                    width: 130,
                                    height: 130,
                                    priority: !0,
                                    alt: "".concat(i.title, " Logo"),
                                    src: i.image.url,
                                  }),
                                }),
                            }),
                            (0, r.jsx)(O, {
                              variants: D,
                              style: { color: s.primary_dark },
                              children: i.description,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, r.jsxs)(T, {
                      children: [
                        (0, r.jsxs)(A, {
                          variants: D,
                          children: ["Projects built with ", i.title],
                        }),
                        (0, r.jsx)(x.Z, {
                          projects: i.projects,
                          primaryColor: b,
                          bgColor: j,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
    },
  },
  function (n) {
    n.O(0, [746, 838, 513, 774, 888, 179], function () {
      return n((n.s = 3215));
    }),
      (_N_E = n.O());
  },
]);
