(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    3454: function (t, e, r) {
      "use strict";
      var n, i;
      t.exports =
        (null == (n = r.g.process) ? void 0 : n.env) &&
        "object" == typeof (null == (i = r.g.process) ? void 0 : i.env)
          ? r.g.process
          : r(7663);
    },
    1118: function (t, e, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(93);
        },
      ]);
    },
    93: function (t, e, r) {
      "use strict";
      r.r(e),
        r.d(e, {
          default: function () {
            return P;
          },
        });
      var n = r(2729),
        i = r(5893),
        s = r(7294),
        o = r(4824),
        a = r.n(o),
        l = r(2703),
        u = r(508),
        c = {
          light: {
            name: "light",
            primary_superdark: "hsla(266.67, 5.89%, 18.63%, 1)",
            primary_verydark: "hsla(266.67, 6.89%, 28.63%, 1)",
            primary_dark: "hsla(270, 5.89%, 40.71%, 1)",
            primary_mediumdark: "hsla(270, 4.74%, 55.88%, 1)",
            primary_slightlydark: "hsla(270, 8.74%, 75.88%, 1)",
            primary: "hsla(270, 8.74%, 85.88%, 1)",
            primary_light: "hsla(270, 8.64%, 88.52%, 1)",
            primary_verylight: "hsla(270, 8.64%, 91%, 1)",
            yellow: "hsla(57.71, 43.12%, 60.08%, 1)",
            green: "hsla(77, 55.36%, 55.2%, 1)",
            teal: "hsla(179, 45.6%, 50.37%, 1)",
            orange: "hsl(348, 61.7%, 55.61%, 1)",
            blue: "hsla(209.16, 52.72%, 47.98%, 1)",
            purple: "hsla(298.33, 36.78%, 55.98%, 1)",
            red: "hsla(351.89, 42.07%, 47.02%, 1)",
            shadow_key: "hsla(270, 36%, 10%, .15)",
            shadow_ambient: "hsla(270, 36%, 10%, .1)",
          },
          dark: {
            name: "dark",
            primary_superdark: "hsla(266.67, 5.89%, 18.63%, 1)",
            primary_verydark: "hsla(266.67, 6.89%, 28.63%, 1)",
            primary_dark: "hsla(270, 5.89%, 40.71%, 1)",
            primary_mediumdark: "hsla(270, 4.74%, 55.88%, 1)",
            primary_slightlydark: "hsla(270, 8.74%, 75.88%, 1)",
            primary: "hsla(270, 8.74%, 85.88%, 1)",
            primary_light: "hsla(270, 8.64%, 88.52%, 1)",
            primary_verylight: "hsla(270, 8.64%, 91%, 1)",
            yellow: "hsla(57.71, 43.12%, 60.08%, 1)",
            green: "hsla(77, 55.36%, 55.2%, 1)",
            teal: "hsla(179, 45.6%, 50.37%, 1)",
            orange: "hsl(348, 61.7%, 55.61%, 1)",
            blue: "hsla(209.16, 52.72%, 47.98%, 1)",
            purple: "hsla(298.33, 36.78%, 55.98%, 1)",
            red: "hsla(351.89, 42.07%, 47.02%, 1)",
            shadow_key: "hsla(270, 36%, 10%, .15)",
            shadow_ambient: "hsla(270, 36%, 10%, .1)",
          },
          default: {
            name: "default",
            primary_superdark: "hsla(266.67, 5.89%, 18.63%, 1)",
            primary_verydark: "hsla(266.67, 6.89%, 28.63%, 1)",
            primary_dark: "hsla(270, 5.89%, 40.71%, 1)",
            primary_mediumdark: "hsla(270, 4.74%, 55.88%, 1)",
            primary_slightlydark: "hsla(270, 8.74%, 75.88%, 1)",
            primary: "hsla(270, 8.74%, 85.88%, 1)",
            primary_light: "hsla(270, 8.64%, 88.52%, 1)",
            primary_verylight: "hsla(270, 8.64%, 91%, 1)",
            yellow: "hsla(57.71, 43.12%, 60.08%, 1)",
            green: "hsla(77, 55.36%, 55.2%, 1)",
            teal: "hsla(179, 45.6%, 50.37%, 1)",
            orange: "hsl(348, 61.7%, 55.61%, 1)",
            blue: "hsla(200.16, 60.72%, 45.98%, 1)",
            purple: "hsla(298.33, 36.78%, 55.98%, 1)",
            red: "hsla(351.89, 42.07%, 47.02%, 1)",
            shadow_key: "hsla(270, 36%, 20%, 0.08)",
            shadow_ambient: "hsla(270, 36%, 20%, 0.06)",
          },
        },
        h = r(4960),
        d = r(4213);
      let p = (0, s.createContext)(),
        f = () => {
          var t;
          function e(t, e) {
            document.documentElement.style.setProperty(t, e);
          }
          try {
            t = localStorage.getItem("theme") || "light";
            var r = {
              dark: {
                "--color-name": "dark",
                "--color-primary_superdark": "hsla(266.67, 5.89%, 18.63%, 1)",
                "--color-primary_verydark": "hsla(266.67, 6.89%, 28.63%, 1)",
                "--color-primary_dark": "hsla(270, 5.89%, 40.71%, 1)",
                "--color-primary_mediumdark": "hsla(270, 4.74%, 55.88%, 1)",
                "--color-primary_slightlydark": "hsla(270, 8.74%, 75.88%, 1)",
                "--color-primary": "hsla(270, 8.74%, 85.88%, 1)",
                "--color-primary_light": "hsla(270, 8.64%, 88.52%, 1)",
                "--color-primary_verylight": "hsla(270, 8.64%, 91%, 1)",
                "--color-yellow": "hsla(57.71, 43.12%, 60.08%, 1)",
                "--color-green": "hsla(77, 55.36%, 55.2%, 1)",
                "--color-teal": "hsla(179, 45.6%, 50.37%, 1)",
                "--color-orange": "hsl(348, 61.7%, 55.61%, 1)",
                "--color-blue": "hsla(209.16, 52.72%, 47.98%, 1)",
                "--color-purple": "hsla(298.33, 36.78%, 55.98%, 1)",
                "--color-red": "hsla(351.89, 42.07%, 47.02%, 1)",
                "--color-shadow_key": "hsla(270, 6%, 10%, 0.5)",
                "--color-shadow_ambient": "hsla(270, 6%, 10%, 0.3)",
              },
              light: {
                "--color-name": "light",
                "--color-primary_superdark": "hsla(266.67, 5.89%, 18.63%, 1)",
                "--color-primary_verydark": "hsla(266.67, 6.89%, 28.63%, 1)",
                "--color-primary_dark": "hsla(270, 5.89%, 40.71%, 1)",
                "--color-primary_mediumdark": "hsla(270, 4.74%, 55.88%, 1)",
                "--color-primary_slightlydark": "hsla(270, 8.74%, 75.88%, 1)",
                "--color-primary": "hsla(270, 8.74%, 85.88%, 1)",
                "--color-primary_light": "hsla(270, 8.64%, 88.52%, 1)",
                "--color-primary_verylight": "hsla(270, 8.64%, 91%, 1)",
                "--color-yellow": "hsla(57.71, 43.12%, 60.08%, 1)",
                "--color-green": "hsla(77, 55.36%, 55.2%, 1)",
                "--color-teal": "hsla(179, 45.6%, 50.37%, 1)",
                "--color-orange": "hsl(348, 61.7%, 55.61%, 1)",
                "--color-blue": "hsla(209.16, 52.72%, 47.98%, 1)",
                "--color-purple": "hsla(298.33, 36.78%, 55.98%, 1)",
                "--color-red": "hsla(351.89, 42.07%, 47.02%, 1)",
                "--color-shadow_key": "hsla(270, 6%, 10%, 0.15)",
                "--color-shadow_ambient": "hsla(270, 6%, 10%, 0.1)",
              },
            };
            !(function (t) {
              if ("dark" === t) {
                let n = r.dark;
                for (let t in n) e(t, n[t]);
                localStorage.setItem("theme", t);
              } else {
                let n = r.light;
                for (let t in n) e(t, n[t]);
                localStorage.setItem("theme", t);
              }
            })(t);
          } catch (t) {
            console.log(Error("accessing theme has been denied"));
          }
          return t;
        },
        m = (t) => {
          let { children: e } = t,
            [r, n] = (0, s.useState)(void 0),
            o = (0, h.c)(r ? c[r].name : "var(--color-name)"),
            a = (0, h.c)("var(--color-primary_superdark)"),
            l = (0, h.c)("var(--color-primary_verydark)"),
            m = (0, h.c)("var(--color-primary_dark)"),
            v = (0, h.c)("var(--color-primary_mediumdark)"),
            y = (0, h.c)("var(--color-primary_slightlydark)"),
            g = (0, h.c)("var(--color-primary)"),
            x = (0, h.c)("var(--color-primary_light)"),
            b = (0, h.c)("var(--color-primary_verylight)"),
            w = (0, h.c)("var(--color-yellow)"),
            P = (0, h.c)("var(--color-green)"),
            S = (0, h.c)("var(--color-teal)"),
            A = (0, h.c)("var(--color-orange)"),
            C = (0, h.c)("var(--color-blue)"),
            k = (0, h.c)("var(--color-purple)"),
            T = (0, h.c)("var(--color-red)"),
            E = (0, h.c)("var(--color-shadow_key)"),
            R = (0, h.c)("var(--color-shadow_ambient)"),
            D = (0, s.useCallback)(
              (t) => {
                n(t),
                  localStorage.setItem("theme", t),
                  f(),
                  r ||
                    (o.set(c[t].name),
                    a.set(c[t].primary_superdark),
                    l.set(c[t].primary_verydark),
                    m.set(c[t].primary_dark),
                    v.set(c[t].primary_mediumdark),
                    y.set(c[t].primary_slightlydark),
                    g.set(c[t].primary),
                    x.set(c[t].primary_light),
                    b.set(c[t].primary_verylight),
                    w.set(c[t].yellow),
                    P.set(c[t].green),
                    S.set(c[t].teal),
                    A.set(c[t].orange),
                    C.set(c[t].blue),
                    k.set(c[t].purple),
                    T.set(c[t].red),
                    E.set(c[t].shadow_key),
                    R.set(c[t].shadow_ambient));
              },
              [C, P, r, o, g, y, v, m, x, b, l, a, k, T, R, E, S, A, w]
            );
          return (
            (0, s.useEffect)(() => {
              let t = localStorage.getItem("theme");
              t ? D(t) : D("light");
            }, [D]),
            (0, s.useEffect)(() => {
              r &&
                (o.set(c[r].name),
                (0, d.j)(a, c[r].primary_superdark, { type: "tween" }),
                (0, d.j)(l, c[r].primary_verydark, { type: "tween" }),
                (0, d.j)(m, c[r].primary_dark, { type: "tween" }),
                (0, d.j)(v, c[r].primary_mediumdark, { type: "tween" }),
                (0, d.j)(y, c[r].primary_slightlydark, { type: "tween" }),
                (0, d.j)(g, c[r].primary, { type: "tween" }),
                (0, d.j)(x, c[r].primary_light, { type: "tween" }),
                (0, d.j)(b, c[r].primary_verylight, { type: "tween" }),
                (0, d.j)(w, c[r].yellow, { type: "tween" }),
                (0, d.j)(P, c[r].green, { type: "tween" }),
                (0, d.j)(S, c[r].teal, { type: "tween" }),
                (0, d.j)(A, c[r].orange, { type: "tween" }),
                (0, d.j)(C, c[r].blue, { type: "tween" }),
                (0, d.j)(k, c[r].purple, { type: "tween" }),
                (0, d.j)(T, c[r].red, { type: "tween" }),
                (0, d.j)(E, c[r].shadow_key, { type: "tween" }),
                (0, d.j)(R, c[r].shadow_ambient, { type: "tween" }));
            }, [r, o, b, x, g, y, v, m, l, a, C, P, k, T, R, E, S, A, w]),
            (0, i.jsx)(p.Provider, {
              value: {
                toggleMode: () => {
                  "light" === r ? D("dark") : D("light");
                },
              },
              children: (0, i.jsx)(u.f6, {
                theme: {
                  name: o,
                  primary_superdark: a,
                  primary_verydark: l,
                  primary_dark: m,
                  primary_mediumdark: v,
                  primary_slightlydark: y,
                  primary: g,
                  primary_light: x,
                  primary_verylight: b,
                  yellow: w,
                  teal: S,
                  orange: A,
                  green: P,
                  purple: k,
                  red: T,
                  blue: C,
                  shadow_key: E,
                  shadow_ambient: R,
                },
                children: e,
              }),
            })
          );
        };
      var v = r(981),
        y = function (t) {
          let { children: e, className: r } = t,
            n = (0, s.useContext)(u.Ni);
          return (0, i.jsx)(v.E.div, {
            style: {
              backgroundColor: n.primary_light,
              overflow: "scroll",
              width: "100%",
            },
            className: r,
            children: e,
          });
        },
        g = r(9008),
        x = r.n(g);
      function b() {
        let t = (0, n._)([
          '\nhtml {\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-primary_mediumdark) var(--color-primary);\n\n    &::-webkit-scrollbar {\n      width: 10px;\n    }\n\n    &::-webkit-scrollbar-track {\n      background: var(--color-primary);\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: var(--color-primary_mediumdark);\n    }\n\n    &::-webkit-scrollbar-thumb:hover {\n      background-color: var(--color-primary_dark);\n    }\n    scroll-behavior: smooth;\n  }\n  body {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-size: 1rem;\n    font-weight: 200;\n    font-style: normal;\n    color: hsla(0,0%,28.63%,1);\n    min-height: 100vh;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  *\n  {\n    box-sizing: border-box;\n  }\n    button, input[type="submit"], input[type="reset"] {\n      background: none;\n      color: inherit;\n      border: none;\n      padding: 0;\n      font: inherit;\n      cursor: pointer;\n      outline: inherit;\n    }\n  p {\n    margin: 0;\n    font-size: clamp(1rem, .85vw, 1.3rem);\n    font-weight: 200;\n  }\n  figure {\n    margin: 0;\n  }\n  figcaption {\n    margin: 0;\n  }\n  header {\n    font-size: clamp(3.0rem, 6vw, 5.438rem);\n    line-height: 1;\n  }\n  h1 {\n    margin: 0;\n    font-size: clamp(2.7rem, 11vw, 8.5rem);\n    line-height: 1;\n    font-weight: 200;\n  }\n  h2 {\n    font-size: clamp(1.2rem, 4.5vw, 1.8rem);\n    line-height: clamp(1.2rem, 7vw, 2rem);\n    margin: 0;\n    font-weight: 200;\n  }\n  h3 {\n    margin: 0;\n    font-size: clamp(1.15rem, 1.66vw, 1.425rem);\n    line-height: clamp(1.25rem, 1.66vw, 1.8rem);\n    font-weight: 200;\n  }\n  h4 {\n    font-size: 1rem;\n    margin: 0 0 4px 0;\n    line-height: 1;\n    font-weight: 200;\n  }\n  \n',
        ]);
        return (
          (b = function () {
            return t;
          }),
          t
        );
      }
      let w = (0, u.vJ)(b());
      var P = function (t) {
        let { Component: e, pageProps: r, router: n } = t;
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsxs)(x(), {
              children: [
                (0, i.jsx)("link", {
                  rel: "manifest",
                  href: "/site.webmanifest",
                }),
                (0, i.jsx)("link", {
                  rel: "mask-icon",
                  href: "/safari-pinned-tab.svg",
                  color: "#5bbad5",
                }),
                (0, i.jsx)("meta", {
                  name: "msapplication-TileColor",
                  content: "#00aba9",
                }),
                (0, i.jsx)("meta", { name: "theme-color", content: "#ffffff" }),
                (0, i.jsx)("meta", {
                  name: "author",
                  content: "Mohan Raj Chandrasekar",
                }),
                (0, i.jsx)("meta", { charSet: "utf-8" }),
                (0, i.jsx)("meta", {
                  name: "viewport",
                  content: "initial-scale=1.0, width=device-width",
                }),
              ],
            }),
            (0, i.jsxs)(m, {
              children: [
                (0, i.jsx)(w, {}),
                (0, i.jsx)(y, {
                  className: a().className,
                  children: (0, i.jsx)(l.M, {
                    mode: "wait",
                    onExitComplete: () =>
                      void window.scrollTo({ top: 0, left: 0 }),
                    children: (0, s.createElement)(e, { ...r, key: n.route }),
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    4824: function (t) {
      t.exports = {
        style: {
          fontFamily: "'__Raleway_bcd626', '__Raleway_Fallback_bcd626'",
          fontStyle: "normal",
        },
        className: "__className_bcd626",
      };
    },
    7663: function (t) {
      !(function () {
        var e = {
            229: function (t) {
              var e,
                r,
                n,
                i = (t.exports = {});
              function s() {
                throw Error("setTimeout has not been defined");
              }
              function o() {
                throw Error("clearTimeout has not been defined");
              }
              function a(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === s || !e) && setTimeout)
                  return (e = setTimeout), setTimeout(t, 0);
                try {
                  return e(t, 0);
                } catch (r) {
                  try {
                    return e.call(null, t, 0);
                  } catch (r) {
                    return e.call(this, t, 0);
                  }
                }
              }
              !(function () {
                try {
                  e = "function" == typeof setTimeout ? setTimeout : s;
                } catch (t) {
                  e = s;
                }
                try {
                  r = "function" == typeof clearTimeout ? clearTimeout : o;
                } catch (t) {
                  r = o;
                }
              })();
              var l = [],
                u = !1,
                c = -1;
              function h() {
                u &&
                  n &&
                  ((u = !1),
                  n.length ? (l = n.concat(l)) : (c = -1),
                  l.length && d());
              }
              function d() {
                if (!u) {
                  var t = a(h);
                  u = !0;
                  for (var e = l.length; e; ) {
                    for (n = l, l = []; ++c < e; ) n && n[c].run();
                    (c = -1), (e = l.length);
                  }
                  (n = null),
                    (u = !1),
                    (function (t) {
                      if (r === clearTimeout) return clearTimeout(t);
                      if ((r === o || !r) && clearTimeout)
                        return (r = clearTimeout), clearTimeout(t);
                      try {
                        r(t);
                      } catch (e) {
                        try {
                          return r.call(null, t);
                        } catch (e) {
                          return r.call(this, t);
                        }
                      }
                    })(t);
                }
              }
              function p(t, e) {
                (this.fun = t), (this.array = e);
              }
              function f() {}
              (i.nextTick = function (t) {
                var e = Array(arguments.length - 1);
                if (arguments.length > 1)
                  for (var r = 1; r < arguments.length; r++)
                    e[r - 1] = arguments[r];
                l.push(new p(t, e)), 1 !== l.length || u || a(d);
              }),
                (p.prototype.run = function () {
                  this.fun.apply(null, this.array);
                }),
                (i.title = "browser"),
                (i.browser = !0),
                (i.env = {}),
                (i.argv = []),
                (i.version = ""),
                (i.versions = {}),
                (i.on = f),
                (i.addListener = f),
                (i.once = f),
                (i.off = f),
                (i.removeListener = f),
                (i.removeAllListeners = f),
                (i.emit = f),
                (i.prependListener = f),
                (i.prependOnceListener = f),
                (i.listeners = function (t) {
                  return [];
                }),
                (i.binding = function (t) {
                  throw Error("process.binding is not supported");
                }),
                (i.cwd = function () {
                  return "/";
                }),
                (i.chdir = function (t) {
                  throw Error("process.chdir is not supported");
                }),
                (i.umask = function () {
                  return 0;
                });
            },
          },
          r = {};
        function n(t) {
          var i = r[t];
          if (void 0 !== i) return i.exports;
          var s = (r[t] = { exports: {} }),
            o = !0;
          try {
            e[t](s, s.exports, n), (o = !1);
          } finally {
            o && delete r[t];
          }
          return s.exports;
        }
        n.ab = "//";
        var i = n(229);
        t.exports = i;
      })();
    },
    9008: function (t, e, r) {
      t.exports = r(2636);
    },
    6774: function (t) {
      t.exports = function (t, e, r, n) {
        var i = r ? r.call(n, t, e) : void 0;
        if (void 0 !== i) return !!i;
        if (t === e) return !0;
        if ("object" != typeof t || !t || "object" != typeof e || !e) return !1;
        var s = Object.keys(t),
          o = Object.keys(e);
        if (s.length !== o.length) return !1;
        for (
          var a = Object.prototype.hasOwnProperty.bind(e), l = 0;
          l < s.length;
          l++
        ) {
          var u = s[l];
          if (!a(u)) return !1;
          var c = t[u],
            h = e[u];
          if (
            !1 === (i = r ? r.call(n, c, h, u) : void 0) ||
            (void 0 === i && c !== h)
          )
            return !1;
        }
        return !0;
      };
    },
    508: function (t, e, r) {
      "use strict";
      r.d(e, {
        Ni: function () {
          return ee;
        },
        f6: function () {
          return er;
        },
        vJ: function () {
          return eh;
        },
        ZP: function () {
          return eu;
        },
      });
      var n = function () {
        return (n =
          Object.assign ||
          function (t) {
            for (var e, r = 1, n = arguments.length; r < n; r++)
              for (var i in (e = arguments[r]))
                Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
          }).apply(this, arguments);
      };
      function i(t, e, r) {
        if (r || 2 == arguments.length)
          for (var n, i = 0, s = e.length; i < s; i++)
            (!n && i in e) ||
              (n || (n = Array.prototype.slice.call(e, 0, i)), (n[i] = e[i]));
        return t.concat(n || Array.prototype.slice.call(e));
      }
      "function" == typeof SuppressedError && SuppressedError;
      var s = r(7294),
        o = r(6774),
        a = r.n(o),
        l = "-ms-",
        u = "-moz-",
        c = "-webkit-",
        h = "comm",
        d = "rule",
        p = "decl",
        f = "@keyframes",
        m = Math.abs,
        v = String.fromCharCode,
        y = Object.assign;
      function g(t, e) {
        return (t = e.exec(t)) ? t[0] : t;
      }
      function x(t, e, r) {
        return t.replace(e, r);
      }
      function b(t, e) {
        return t.indexOf(e);
      }
      function w(t, e) {
        return 0 | t.charCodeAt(e);
      }
      function P(t, e, r) {
        return t.slice(e, r);
      }
      function S(t) {
        return t.length;
      }
      function A(t, e) {
        return e.push(t), t;
      }
      function C(t, e) {
        return t.filter(function (t) {
          return !g(t, e);
        });
      }
      var k = 1,
        T = 1,
        E = 0,
        R = 0,
        D = 0,
        V = "";
      function M(t, e, r, n, i, s, o, a) {
        return {
          value: t,
          root: e,
          parent: r,
          type: n,
          props: i,
          children: s,
          line: k,
          column: T,
          length: o,
          return: "",
          siblings: a,
        };
      }
      function j(t, e) {
        return y(
          M("", null, null, "", null, null, 0, t.siblings),
          t,
          { length: -t.length },
          e
        );
      }
      function L(t) {
        for (; t.root; ) t = j(t.root, { children: [t] });
        A(t, t.siblings);
      }
      function O() {
        return (D = R < E ? w(V, R++) : 0), T++, 10 === D && ((T = 1), k++), D;
      }
      function I() {
        return w(V, R);
      }
      function _(t) {
        switch (t) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function F(t) {
        var e, r;
        return ((e = R - 1),
        (r = (function t(e) {
          for (; O(); )
            switch (D) {
              case e:
                return R;
              case 34:
              case 39:
                34 !== e && 39 !== e && t(D);
                break;
              case 40:
                41 === e && t(e);
                break;
              case 92:
                O();
            }
          return R;
        })(91 === t ? t + 2 : 40 === t ? t + 1 : t)),
        P(V, e, r)).trim();
      }
      function $(t, e) {
        for (var r = "", n = 0; n < t.length; n++) r += e(t[n], n, t, e) || "";
        return r;
      }
      function B(t, e, r, n) {
        switch (t.type) {
          case "@layer":
            if (t.children.length) break;
          case "@import":
          case p:
            return (t.return = t.return || t.value);
          case h:
            return "";
          case f:
            return (t.return = t.value + "{" + $(t.children, n) + "}");
          case d:
            if (!S((t.value = t.props.join(",")))) return "";
        }
        return S((r = $(t.children, n)))
          ? (t.return = t.value + "{" + r + "}")
          : "";
      }
      function N(t, e, r, n) {
        if (t.length > -1 && !t.return)
          switch (t.type) {
            case p:
              t.return = (function t(e, r, n) {
                var i;
                switch (
                  ((i = r),
                  45 ^ w(e, 0)
                    ? (((((((i << 2) ^ w(e, 0)) << 2) ^ w(e, 1)) << 2) ^
                        w(e, 2)) <<
                        2) ^
                      w(e, 3)
                    : 0)
                ) {
                  case 5103:
                    return c + "print-" + e + e;
                  case 5737:
                  case 4201:
                  case 3177:
                  case 3433:
                  case 1641:
                  case 4457:
                  case 2921:
                  case 5572:
                  case 6356:
                  case 5844:
                  case 3191:
                  case 6645:
                  case 3005:
                  case 6391:
                  case 5879:
                  case 5623:
                  case 6135:
                  case 4599:
                  case 4855:
                  case 4215:
                  case 6389:
                  case 5109:
                  case 5365:
                  case 5621:
                  case 3829:
                    return c + e + e;
                  case 4789:
                    return u + e + e;
                  case 5349:
                  case 4246:
                  case 4810:
                  case 6968:
                  case 2756:
                    return c + e + u + e + l + e + e;
                  case 5936:
                    switch (w(e, r + 11)) {
                      case 114:
                        return c + e + l + x(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
                      case 108:
                        return (
                          c + e + l + x(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e
                        );
                      case 45:
                        return c + e + l + x(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
                    }
                  case 6828:
                  case 4268:
                  case 2903:
                    return c + e + l + e + e;
                  case 6165:
                    return c + e + l + "flex-" + e + e;
                  case 5187:
                    return (
                      c +
                      e +
                      x(e, /(\w+).+(:[^]+)/, c + "box-$1$2" + l + "flex-$1$2") +
                      e
                    );
                  case 5443:
                    return (
                      c +
                      e +
                      l +
                      "flex-item-" +
                      x(e, /flex-|-self/g, "") +
                      (g(e, /flex-|baseline/)
                        ? ""
                        : l + "grid-row-" + x(e, /flex-|-self/g, "")) +
                      e
                    );
                  case 4675:
                    return (
                      c +
                      e +
                      l +
                      "flex-line-pack" +
                      x(e, /align-content|flex-|-self/g, "") +
                      e
                    );
                  case 5548:
                    return c + e + l + x(e, "shrink", "negative") + e;
                  case 5292:
                    return c + e + l + x(e, "basis", "preferred-size") + e;
                  case 6060:
                    return (
                      c +
                      "box-" +
                      x(e, "-grow", "") +
                      c +
                      e +
                      l +
                      x(e, "grow", "positive") +
                      e
                    );
                  case 4554:
                    return c + x(e, /([^-])(transform)/g, "$1" + c + "$2") + e;
                  case 6187:
                    return (
                      x(
                        x(
                          x(e, /(zoom-|grab)/, c + "$1"),
                          /(image-set)/,
                          c + "$1"
                        ),
                        e,
                        ""
                      ) + e
                    );
                  case 5495:
                  case 3959:
                    return x(e, /(image-set\([^]*)/, c + "$1$`$1");
                  case 4968:
                    return (
                      x(
                        x(
                          e,
                          /(.+:)(flex-)?(.*)/,
                          c + "box-pack:$3" + l + "flex-pack:$3"
                        ),
                        /s.+-b[^;]+/,
                        "justify"
                      ) +
                      c +
                      e +
                      e
                    );
                  case 4200:
                    if (!g(e, /flex-|baseline/))
                      return l + "grid-column-align" + P(e, r) + e;
                    break;
                  case 2592:
                  case 3360:
                    return l + x(e, "template-", "") + e;
                  case 4384:
                  case 3616:
                    if (
                      n &&
                      n.some(function (t, e) {
                        return (r = e), g(t.props, /grid-\w+-end/);
                      })
                    )
                      return ~b(e + (n = n[r].value), "span")
                        ? e
                        : l +
                            x(e, "-start", "") +
                            e +
                            l +
                            "grid-row-span:" +
                            (~b(n, "span")
                              ? g(n, /\d+/)
                              : +g(n, /\d+/) - +g(e, /\d+/)) +
                            ";";
                    return l + x(e, "-start", "") + e;
                  case 4896:
                  case 4128:
                    return n &&
                      n.some(function (t) {
                        return g(t.props, /grid-\w+-start/);
                      })
                      ? e
                      : l + x(x(e, "-end", "-span"), "span ", "") + e;
                  case 4095:
                  case 3583:
                  case 4068:
                  case 2532:
                    return x(e, /(.+)-inline(.+)/, c + "$1$2") + e;
                  case 8116:
                  case 7059:
                  case 5753:
                  case 5535:
                  case 5445:
                  case 5701:
                  case 4933:
                  case 4677:
                  case 5533:
                  case 5789:
                  case 5021:
                  case 4765:
                    if (S(e) - 1 - r > 6)
                      switch (w(e, r + 1)) {
                        case 109:
                          if (45 !== w(e, r + 4)) break;
                        case 102:
                          return (
                            x(
                              e,
                              /(.+:)(.+)-([^]+)/,
                              "$1" +
                                c +
                                "$2-$3$1" +
                                u +
                                (108 == w(e, r + 3) ? "$3" : "$2-$3")
                            ) + e
                          );
                        case 115:
                          return ~b(e, "stretch")
                            ? t(x(e, "stretch", "fill-available"), r, n) + e
                            : e;
                      }
                    break;
                  case 5152:
                  case 5920:
                    return x(
                      e,
                      /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,
                      function (t, r, n, i, s, o, a) {
                        return (
                          l +
                          r +
                          ":" +
                          n +
                          a +
                          (i ? l + r + "-span:" + (s ? o : +o - +n) + a : "") +
                          e
                        );
                      }
                    );
                  case 4949:
                    if (121 === w(e, r + 6)) return x(e, ":", ":" + c) + e;
                    break;
                  case 6444:
                    switch (w(e, 45 === w(e, 14) ? 18 : 11)) {
                      case 120:
                        return (
                          x(
                            e,
                            /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,
                            "$1" +
                              c +
                              (45 === w(e, 14) ? "inline-" : "") +
                              "box$3$1" +
                              c +
                              "$2$3$1" +
                              l +
                              "$2box$3"
                          ) + e
                        );
                      case 100:
                        return x(e, ":", ":" + l) + e;
                    }
                    break;
                  case 5719:
                  case 2647:
                  case 2135:
                  case 3927:
                  case 2391:
                    return x(e, "scroll-", "scroll-snap-") + e;
                }
                return e;
              })(t.value, t.length, r);
              return;
            case f:
              return $([j(t, { value: x(t.value, "@", "@" + c) })], n);
            case d:
              if (t.length)
                return (r = t.props)
                  .map(function (e) {
                    switch (g(e, (n = /(::plac\w+|:read-\w+)/))) {
                      case ":read-only":
                      case ":read-write":
                        L(
                          j(t, { props: [x(e, /:(read-\w+)/, ":" + u + "$1")] })
                        ),
                          L(j(t, { props: [e] })),
                          y(t, { props: C(r, n) });
                        break;
                      case "::placeholder":
                        L(
                          j(t, {
                            props: [x(e, /:(plac\w+)/, ":" + c + "input-$1")],
                          })
                        ),
                          L(
                            j(t, {
                              props: [x(e, /:(plac\w+)/, ":" + u + "$1")],
                            })
                          ),
                          L(
                            j(t, {
                              props: [x(e, /:(plac\w+)/, l + "input-$1")],
                            })
                          ),
                          L(j(t, { props: [e] })),
                          y(t, { props: C(r, n) });
                    }
                    return "";
                  })
                  .join("");
          }
      }
      function W(t, e, r, n, i, s, o, a, l, u, c, h) {
        for (
          var p = i - 1,
            f = 0 === i ? s : [""],
            v = f.length,
            y = 0,
            g = 0,
            b = 0;
          y < n;
          ++y
        )
          for (
            var w = 0, S = P(t, p + 1, (p = m((g = o[y])))), A = t;
            w < v;
            ++w
          )
            (A = (g > 0 ? f[w] + " " + S : x(S, /&\f/g, f[w])).trim()) &&
              (l[b++] = A);
        return M(t, e, r, 0 === i ? d : a, l, u, c, h);
      }
      function z(t, e, r, n, i) {
        return M(t, e, r, p, P(t, 0, n), P(t, n + 1, -1), n, i);
      }
      var U = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        G = r(3454),
        H =
          (void 0 !== G &&
            void 0 !== G.env &&
            (G.env.REACT_APP_SC_ATTR || G.env.SC_ATTR)) ||
          "data-styled",
        Y = "undefined" != typeof window && "HTMLElement" in window,
        X = !!("boolean" == typeof SC_DISABLE_SPEEDY
          ? SC_DISABLE_SPEEDY
          : void 0 !== G &&
            void 0 !== G.env &&
            void 0 !== G.env.REACT_APP_SC_DISABLE_SPEEDY &&
            "" !== G.env.REACT_APP_SC_DISABLE_SPEEDY
          ? "false" !== G.env.REACT_APP_SC_DISABLE_SPEEDY &&
            G.env.REACT_APP_SC_DISABLE_SPEEDY
          : void 0 !== G &&
            void 0 !== G.env &&
            void 0 !== G.env.SC_DISABLE_SPEEDY &&
            "" !== G.env.SC_DISABLE_SPEEDY &&
            "false" !== G.env.SC_DISABLE_SPEEDY &&
            G.env.SC_DISABLE_SPEEDY),
        Z = {},
        q = Object.freeze([]),
        K = Object.freeze({});
      function J(t, e, r) {
        return (
          void 0 === r && (r = K),
          (t.theme !== r.theme && t.theme) || e || r.theme
        );
      }
      var Q = new Set([
          "a",
          "abbr",
          "address",
          "area",
          "article",
          "aside",
          "audio",
          "b",
          "base",
          "bdi",
          "bdo",
          "big",
          "blockquote",
          "body",
          "br",
          "button",
          "canvas",
          "caption",
          "cite",
          "code",
          "col",
          "colgroup",
          "data",
          "datalist",
          "dd",
          "del",
          "details",
          "dfn",
          "dialog",
          "div",
          "dl",
          "dt",
          "em",
          "embed",
          "fieldset",
          "figcaption",
          "figure",
          "footer",
          "form",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "head",
          "header",
          "hgroup",
          "hr",
          "html",
          "i",
          "iframe",
          "img",
          "input",
          "ins",
          "kbd",
          "keygen",
          "label",
          "legend",
          "li",
          "link",
          "main",
          "map",
          "mark",
          "menu",
          "menuitem",
          "meta",
          "meter",
          "nav",
          "noscript",
          "object",
          "ol",
          "optgroup",
          "option",
          "output",
          "p",
          "param",
          "picture",
          "pre",
          "progress",
          "q",
          "rp",
          "rt",
          "ruby",
          "s",
          "samp",
          "script",
          "section",
          "select",
          "small",
          "source",
          "span",
          "strong",
          "style",
          "sub",
          "summary",
          "sup",
          "table",
          "tbody",
          "td",
          "textarea",
          "tfoot",
          "th",
          "thead",
          "time",
          "title",
          "tr",
          "track",
          "u",
          "ul",
          "use",
          "var",
          "video",
          "wbr",
          "circle",
          "clipPath",
          "defs",
          "ellipse",
          "foreignObject",
          "g",
          "image",
          "line",
          "linearGradient",
          "marker",
          "mask",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "radialGradient",
          "rect",
          "stop",
          "svg",
          "text",
          "tspan",
        ]),
        tt = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        te = /(^-|-$)/g;
      function tr(t) {
        return t.replace(tt, "-").replace(te, "");
      }
      var tn = /(a)(d)/gi,
        ti = function (t) {
          return String.fromCharCode(t + (t > 25 ? 39 : 97));
        };
      function ts(t) {
        var e,
          r = "";
        for (e = Math.abs(t); e > 52; e = (e / 52) | 0) r = ti(e % 52) + r;
        return (ti(e % 52) + r).replace(tn, "$1-$2");
      }
      var to,
        ta = function (t, e) {
          for (var r = e.length; r; ) t = (33 * t) ^ e.charCodeAt(--r);
          return t;
        },
        tl = function (t) {
          return ta(5381, t);
        };
      function tu(t) {
        return "string" == typeof t;
      }
      var tc = "function" == typeof Symbol && Symbol.for,
        th = tc ? Symbol.for("react.memo") : 60115,
        td = tc ? Symbol.for("react.forward_ref") : 60112,
        tp = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        tf = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        tm = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        tv =
          (((to = {})[td] = {
            $$typeof: !0,
            render: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
          }),
          (to[th] = tm),
          to);
      function ty(t) {
        return ("type" in t && t.type.$$typeof) === th
          ? tm
          : "$$typeof" in t
          ? tv[t.$$typeof]
          : tp;
      }
      var tg = Object.defineProperty,
        tx = Object.getOwnPropertyNames,
        tb = Object.getOwnPropertySymbols,
        tw = Object.getOwnPropertyDescriptor,
        tP = Object.getPrototypeOf,
        tS = Object.prototype;
      function tA(t) {
        return "function" == typeof t;
      }
      function tC(t) {
        return "object" == typeof t && "styledComponentId" in t;
      }
      function tk(t, e) {
        return t && e ? "".concat(t, " ").concat(e) : t || e || "";
      }
      function tT(t, e) {
        if (0 === t.length) return "";
        for (var r = t[0], n = 1; n < t.length; n++) r += e ? e + t[n] : t[n];
        return r;
      }
      function tE(t) {
        return (
          null !== t &&
          "object" == typeof t &&
          t.constructor.name === Object.name &&
          !("props" in t && t.$$typeof)
        );
      }
      function tR(t, e) {
        Object.defineProperty(t, "toString", { value: e });
      }
      function tD(t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        return Error(
          "An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#"
            .concat(t, " for more information.")
            .concat(e.length > 0 ? " Args: ".concat(e.join(", ")) : "")
        );
      }
      var tV = (function () {
          function t(t) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = t);
          }
          return (
            (t.prototype.indexOfGroup = function (t) {
              for (var e = 0, r = 0; r < t; r++) e += this.groupSizes[r];
              return e;
            }),
            (t.prototype.insertRules = function (t, e) {
              if (t >= this.groupSizes.length) {
                for (var r = this.groupSizes, n = r.length, i = n; t >= i; )
                  if ((i <<= 1) < 0) throw tD(16, "".concat(t));
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(r),
                  (this.length = i);
                for (var s = n; s < i; s++) this.groupSizes[s] = 0;
              }
              for (
                var o = this.indexOfGroup(t + 1), a = ((s = 0), e.length);
                s < a;
                s++
              )
                this.tag.insertRule(o, e[s]) && (this.groupSizes[t]++, o++);
            }),
            (t.prototype.clearGroup = function (t) {
              if (t < this.length) {
                var e = this.groupSizes[t],
                  r = this.indexOfGroup(t),
                  n = r + e;
                this.groupSizes[t] = 0;
                for (var i = r; i < n; i++) this.tag.deleteRule(r);
              }
            }),
            (t.prototype.getGroup = function (t) {
              var e = "";
              if (t >= this.length || 0 === this.groupSizes[t]) return e;
              for (
                var r = this.groupSizes[t],
                  n = this.indexOfGroup(t),
                  i = n + r,
                  s = n;
                s < i;
                s++
              )
                e += "".concat(this.tag.getRule(s)).concat("/*!sc*/\n");
              return e;
            }),
            t
          );
        })(),
        tM = new Map(),
        tj = new Map(),
        tL = 1,
        tO = function (t) {
          if (tM.has(t)) return tM.get(t);
          for (; tj.has(tL); ) tL++;
          var e = tL++;
          return tM.set(t, e), tj.set(e, t), e;
        },
        tI = function (t, e) {
          tM.set(t, e), tj.set(e, t);
        },
        t_ = "style["
          .concat(H, "][")
          .concat("data-styled-version", '="')
          .concat("6.0.6", '"]'),
        tF = new RegExp(
          "^".concat(H, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')
        ),
        t$ = function (t, e, r) {
          for (var n, i = r.split(","), s = 0, o = i.length; s < o; s++)
            (n = i[s]) && t.registerName(e, n);
        },
        tB = function (t, e) {
          for (
            var r,
              n = (null !== (r = e.textContent) && void 0 !== r ? r : "").split(
                "/*!sc*/\n"
              ),
              i = [],
              s = 0,
              o = n.length;
            s < o;
            s++
          ) {
            var a = n[s].trim();
            if (a) {
              var l = a.match(tF);
              if (l) {
                var u = 0 | parseInt(l[1], 10),
                  c = l[2];
                0 !== u &&
                  (tI(c, u), t$(t, c, l[3]), t.getTag().insertRules(u, i)),
                  (i.length = 0);
              } else i.push(a);
            }
          }
        },
        tN = function (t) {
          var e = document.head,
            n = t || e,
            i = document.createElement("style"),
            s = (function (t) {
              for (var e = t.childNodes, r = e.length; r >= 0; r--) {
                var n = e[r];
                if (n && 1 === n.nodeType && n.hasAttribute(H)) return n;
              }
            })(n),
            o = void 0 !== s ? s.nextSibling : null;
          i.setAttribute(H, "active"),
            i.setAttribute("data-styled-version", "6.0.6");
          var a = r.nc;
          return a && i.setAttribute("nonce", a), n.insertBefore(i, o), i;
        },
        tW = (function () {
          function t(t) {
            (this.element = tN(t)),
              this.element.appendChild(document.createTextNode("")),
              (this.sheet = (function (t) {
                if (t.sheet) return t.sheet;
                for (
                  var e = document.styleSheets, r = 0, n = e.length;
                  r < n;
                  r++
                ) {
                  var i = e[r];
                  if (i.ownerNode === t) return i;
                }
                throw tD(17);
              })(this.element)),
              (this.length = 0);
          }
          return (
            (t.prototype.insertRule = function (t, e) {
              try {
                return this.sheet.insertRule(e, t), this.length++, !0;
              } catch (t) {
                return !1;
              }
            }),
            (t.prototype.deleteRule = function (t) {
              this.sheet.deleteRule(t), this.length--;
            }),
            (t.prototype.getRule = function (t) {
              var e = this.sheet.cssRules[t];
              return e && e.cssText ? e.cssText : "";
            }),
            t
          );
        })(),
        tz = (function () {
          function t(t) {
            (this.element = tN(t)),
              (this.nodes = this.element.childNodes),
              (this.length = 0);
          }
          return (
            (t.prototype.insertRule = function (t, e) {
              if (t <= this.length && t >= 0) {
                var r = document.createTextNode(e);
                return (
                  this.element.insertBefore(r, this.nodes[t] || null),
                  this.length++,
                  !0
                );
              }
              return !1;
            }),
            (t.prototype.deleteRule = function (t) {
              this.element.removeChild(this.nodes[t]), this.length--;
            }),
            (t.prototype.getRule = function (t) {
              return t < this.length ? this.nodes[t].textContent : "";
            }),
            t
          );
        })(),
        tU = (function () {
          function t(t) {
            (this.rules = []), (this.length = 0);
          }
          return (
            (t.prototype.insertRule = function (t, e) {
              return (
                t <= this.length &&
                (this.rules.splice(t, 0, e), this.length++, !0)
              );
            }),
            (t.prototype.deleteRule = function (t) {
              this.rules.splice(t, 1), this.length--;
            }),
            (t.prototype.getRule = function (t) {
              return t < this.length ? this.rules[t] : "";
            }),
            t
          );
        })(),
        tG = Y,
        tH = { isServer: !Y, useCSSOMInjection: !X },
        tY = (function () {
          function t(t, e, r) {
            void 0 === t && (t = K), void 0 === e && (e = {});
            var i = this;
            (this.options = n(n({}, tH), t)),
              (this.gs = e),
              (this.names = new Map(r)),
              (this.server = !!t.isServer),
              !this.server &&
                Y &&
                tG &&
                ((tG = !1),
                (function (t) {
                  for (
                    var e = document.querySelectorAll(t_), r = 0, n = e.length;
                    r < n;
                    r++
                  ) {
                    var i = e[r];
                    i &&
                      "active" !== i.getAttribute(H) &&
                      (tB(t, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this)),
              tR(this, function () {
                return (function (t) {
                  for (
                    var e = t.getTag(), r = e.length, n = "", i = 0;
                    i < r;
                    i++
                  )
                    (function (r) {
                      var i = tj.get(r);
                      if (void 0 !== i) {
                        var s = t.names.get(i),
                          o = e.getGroup(r);
                        if (void 0 !== s && 0 !== o.length) {
                          var a = ""
                              .concat(H, ".g")
                              .concat(r, '[id="')
                              .concat(i, '"]'),
                            l = "";
                          void 0 !== s &&
                            s.forEach(function (t) {
                              t.length > 0 && (l += "".concat(t, ","));
                            }),
                            (n += ""
                              .concat(o)
                              .concat(a, '{content:"')
                              .concat(l, '"}')
                              .concat("/*!sc*/\n"));
                        }
                      }
                    })(i);
                  return n;
                })(i);
              });
          }
          return (
            (t.registerId = function (t) {
              return tO(t);
            }),
            (t.prototype.reconstructWithOptions = function (e, r) {
              return (
                void 0 === r && (r = !0),
                new t(
                  n(n({}, this.options), e),
                  this.gs,
                  (r && this.names) || void 0
                )
              );
            }),
            (t.prototype.allocateGSInstance = function (t) {
              return (this.gs[t] = (this.gs[t] || 0) + 1);
            }),
            (t.prototype.getTag = function () {
              var t, e, r, n;
              return (
                this.tag ||
                (this.tag =
                  ((r = (e = this.options).useCSSOMInjection),
                  (n = e.target),
                  (t = e.isServer ? new tU(n) : r ? new tW(n) : new tz(n)),
                  new tV(t)))
              );
            }),
            (t.prototype.hasNameForId = function (t, e) {
              return this.names.has(t) && this.names.get(t).has(e);
            }),
            (t.prototype.registerName = function (t, e) {
              if ((tO(t), this.names.has(t))) this.names.get(t).add(e);
              else {
                var r = new Set();
                r.add(e), this.names.set(t, r);
              }
            }),
            (t.prototype.insertRules = function (t, e, r) {
              this.registerName(t, e), this.getTag().insertRules(tO(t), r);
            }),
            (t.prototype.clearNames = function (t) {
              this.names.has(t) && this.names.get(t).clear();
            }),
            (t.prototype.clearRules = function (t) {
              this.getTag().clearGroup(tO(t)), this.clearNames(t);
            }),
            (t.prototype.clearTag = function () {
              this.tag = void 0;
            }),
            t
          );
        })(),
        tX = /&/g,
        tZ = /^\s*\/\/.*$/gm;
      function tq(t) {
        var e,
          r,
          n,
          i = void 0 === t ? K : t,
          s = i.options,
          o = void 0 === s ? K : s,
          a = i.plugins,
          l = void 0 === a ? q : a,
          u = function (t, n, i) {
            return i === r ||
              (i.startsWith(r) &&
                i.endsWith(r) &&
                i.replaceAll(r, "").length > 0)
              ? ".".concat(e)
              : t;
          },
          c = l.slice();
        c.push(function (t) {
          t.type === d &&
            t.value.includes("&") &&
            (t.props[0] = t.props[0].replace(tX, r).replace(n, u));
        }),
          o.prefix && c.push(N),
          c.push(B);
        var p = function (t, i, s, a) {
          void 0 === i && (i = ""),
            void 0 === s && (s = ""),
            void 0 === a && (a = "&"),
            (e = a),
            (r = i),
            (n = RegExp("\\".concat(r, "\\b"), "g"));
          var l,
            u,
            d,
            p,
            f,
            m = t.replace(tZ, ""),
            y =
              ((f = (function t(e, r, n, i, s, o, a, l, u) {
                for (
                  var c,
                    d = 0,
                    p = 0,
                    f = a,
                    m = 0,
                    y = 0,
                    g = 0,
                    C = 1,
                    E = 1,
                    j = 1,
                    L = 0,
                    $ = "",
                    B = s,
                    N = o,
                    U = i,
                    G = $;
                  E;

                )
                  switch (((g = L), (L = O()))) {
                    case 40:
                      if (108 != g && 58 == w(G, f - 1)) {
                        -1 != b((G += x(F(L), "&", "&\f")), "&\f") && (j = -1);
                        break;
                      }
                    case 34:
                    case 39:
                    case 91:
                      G += F(L);
                      break;
                    case 9:
                    case 10:
                    case 13:
                    case 32:
                      G += (function (t) {
                        for (; (D = I()); )
                          if (D < 33) O();
                          else break;
                        return _(t) > 2 || _(D) > 3 ? "" : " ";
                      })(g);
                      break;
                    case 92:
                      G += (function (t, e) {
                        for (
                          var r;
                          --e &&
                          O() &&
                          !(D < 48) &&
                          !(D > 102) &&
                          (!(D > 57) || !(D < 65)) &&
                          (!(D > 70) || !(D < 97));

                        );
                        return (
                          (r = R + (e < 6 && 32 == I() && 32 == O())),
                          P(V, t, r)
                        );
                      })(R - 1, 7);
                      continue;
                    case 47:
                      switch (I()) {
                        case 42:
                        case 47:
                          A(
                            M(
                              (c = (function (t, e) {
                                for (; O(); )
                                  if (t + D === 57) break;
                                  else if (t + D === 84 && 47 === I()) break;
                                return (
                                  "/*" +
                                  P(V, e, R - 1) +
                                  "*" +
                                  v(47 === t ? t : O())
                                );
                              })(O(), R)),
                              r,
                              n,
                              h,
                              v(D),
                              P(c, 2, -2),
                              0,
                              u
                            ),
                            u
                          );
                          break;
                        default:
                          G += "/";
                      }
                      break;
                    case 123 * C:
                      l[d++] = S(G) * j;
                    case 125 * C:
                    case 59:
                    case 0:
                      switch (L) {
                        case 0:
                        case 125:
                          E = 0;
                        case 59 + p:
                          -1 == j && (G = x(G, /\f/g, "")),
                            y > 0 &&
                              S(G) - f &&
                              A(
                                y > 32
                                  ? z(G + ";", i, n, f - 1, u)
                                  : z(x(G, " ", "") + ";", i, n, f - 2, u),
                                u
                              );
                          break;
                        case 59:
                          G += ";";
                        default:
                          if (
                            (A(
                              (U = W(
                                G,
                                r,
                                n,
                                d,
                                p,
                                s,
                                l,
                                $,
                                (B = []),
                                (N = []),
                                f,
                                o
                              )),
                              o
                            ),
                            123 === L)
                          ) {
                            if (0 === p) t(G, r, U, U, B, o, f, l, N);
                            else
                              switch (99 === m && 110 === w(G, 3) ? 100 : m) {
                                case 100:
                                case 108:
                                case 109:
                                case 115:
                                  t(
                                    e,
                                    U,
                                    U,
                                    i &&
                                      A(
                                        W(
                                          e,
                                          U,
                                          U,
                                          0,
                                          0,
                                          s,
                                          l,
                                          $,
                                          s,
                                          (B = []),
                                          f,
                                          N
                                        ),
                                        N
                                      ),
                                    s,
                                    N,
                                    f,
                                    l,
                                    i ? B : N
                                  );
                                  break;
                                default:
                                  t(G, U, U, U, [""], N, 0, l, N);
                              }
                          }
                      }
                      (d = p = y = 0), (C = j = 1), ($ = G = ""), (f = a);
                      break;
                    case 58:
                      (f = 1 + S(G)), (y = g);
                    default:
                      if (C < 1) {
                        if (123 == L) --C;
                        else if (
                          125 == L &&
                          0 == C++ &&
                          125 ==
                            ((D = R > 0 ? w(V, --R) : 0),
                            T--,
                            10 === D && ((T = 1), k--),
                            D)
                        )
                          continue;
                      }
                      switch (((G += v(L)), L * C)) {
                        case 38:
                          j = p > 0 ? 1 : ((G += "\f"), -1);
                          break;
                        case 44:
                          (l[d++] = (S(G) - 1) * j), (j = 1);
                          break;
                        case 64:
                          45 === I() && (G += F(O())),
                            (m = I()),
                            (p = f =
                              S(
                                ($ = G +=
                                  (function (t) {
                                    for (; !_(I()); ) O();
                                    return P(V, t, R);
                                  })(R))
                              )),
                            L++;
                          break;
                        case 45:
                          45 === g && 2 == S(G) && (C = 0);
                      }
                  }
                return o;
              })(
                "",
                null,
                null,
                null,
                [""],
                ((p = d =
                  s || i
                    ? "".concat(s, " ").concat(i, " { ").concat(m, " }")
                    : m),
                (k = T = 1),
                (E = S((V = p))),
                (R = 0),
                (d = [])),
                0,
                [0],
                d
              )),
              (V = ""),
              f);
          o.namespace &&
            (y = (function t(e, r) {
              return e.map(function (e) {
                return (
                  "rule" === e.type &&
                    ((e.value = "".concat(r, " ").concat(e.value)),
                    (e.value = e.value.replaceAll(",", ",".concat(r, " "))),
                    (e.props = e.props.map(function (t) {
                      return "".concat(r, " ").concat(t);
                    }))),
                  Array.isArray(e.children) &&
                    "@keyframes" !== e.type &&
                    (e.children = t(e.children, r)),
                  e
                );
              });
            })(y, o.namespace));
          var g = [];
          return (
            $(
              y,
              ((u = (l = c.concat(function (t) {
                var e;
                !t.root && (t = t.return) && ((e = t), g.push(e));
              })).length),
              function (t, e, r, n) {
                for (var i = "", s = 0; s < u; s++) i += l[s](t, e, r, n) || "";
                return i;
              })
            ),
            g
          );
        };
        return (
          (p.hash = l.length
            ? l
                .reduce(function (t, e) {
                  return e.name || tD(15), ta(t, e.name);
                }, 5381)
                .toString()
            : ""),
          p
        );
      }
      var tK = new tY(),
        tJ = tq(),
        tQ = s.createContext({
          shouldForwardProp: void 0,
          styleSheet: tK,
          stylis: tJ,
        }),
        t0 = (tQ.Consumer, s.createContext(void 0));
      function t1() {
        return (0, s.useContext)(tQ);
      }
      function t5(t) {
        var e = (0, s.useState)(t.stylisPlugins),
          r = e[0],
          n = e[1],
          i = t1().styleSheet,
          o = (0, s.useMemo)(
            function () {
              var e = i;
              return (
                t.sheet
                  ? (e = t.sheet)
                  : t.target &&
                    (e = e.reconstructWithOptions({ target: t.target }, !1)),
                t.disableCSSOMInjection &&
                  (e = e.reconstructWithOptions({ useCSSOMInjection: !1 })),
                e
              );
            },
            [t.disableCSSOMInjection, t.sheet, t.target, i]
          ),
          l = (0, s.useMemo)(
            function () {
              return tq({
                options: {
                  namespace: t.namespace,
                  prefix: t.enableVendorPrefixes,
                },
                plugins: r,
              });
            },
            [t.enableVendorPrefixes, t.namespace, r]
          );
        return (
          (0, s.useEffect)(
            function () {
              a()(r, t.stylisPlugins) || n(t.stylisPlugins);
            },
            [t.stylisPlugins]
          ),
          s.createElement(
            tQ.Provider,
            {
              value: {
                shouldForwardProp: t.shouldForwardProp,
                styleSheet: o,
                stylis: l,
              },
            },
            s.createElement(t0.Provider, { value: l }, t.children)
          )
        );
      }
      var t2 = (function () {
        function t(t, e) {
          var r = this;
          (this.inject = function (t, e) {
            void 0 === e && (e = tJ);
            var n = r.name + e.hash;
            t.hasNameForId(r.id, n) ||
              t.insertRules(r.id, n, e(r.rules, n, "@keyframes"));
          }),
            (this.name = t),
            (this.id = "sc-keyframes-".concat(t)),
            (this.rules = e),
            tR(this, function () {
              throw tD(12, String(r.name));
            });
        }
        return (
          (t.prototype.getName = function (t) {
            return void 0 === t && (t = tJ), this.name + t.hash;
          }),
          t
        );
      })();
      function t4(t) {
        for (var e = "", r = 0; r < t.length; r++) {
          var n = t[r];
          if (1 === r && "-" === n && "-" === t[0]) return t;
          n >= "A" && n <= "Z" ? (e += "-" + n.toLowerCase()) : (e += n);
        }
        return e.startsWith("ms-") ? "-" + e : e;
      }
      var t6 = function (t) {
          return null == t || !1 === t || "" === t;
        },
        t7 = function (t) {
          var e = [];
          for (var r in t) {
            var n = t[r];
            t.hasOwnProperty(r) &&
              !t6(n) &&
              ((Array.isArray(n) && n.isCss) || tA(n)
                ? e.push("".concat(t4(r), ":"), n, ";")
                : tE(n)
                ? e.push.apply(
                    e,
                    i(i(["".concat(r, " {")], t7(n), !1), ["}"], !1)
                  )
                : e.push(
                    ""
                      .concat(t4(r), ": ")
                      .concat(
                        null == n || "boolean" == typeof n || "" === n
                          ? ""
                          : "number" != typeof n ||
                            0 === n ||
                            r in U ||
                            r.startsWith("--")
                          ? String(n).trim()
                          : "".concat(n, "px"),
                        ";"
                      )
                  ));
          }
          return e;
        };
      function t8(t, e, r, n) {
        return t6(t)
          ? []
          : tC(t)
          ? [".".concat(t.styledComponentId)]
          : tA(t)
          ? !tA(t) || (t.prototype && t.prototype.isReactComponent) || !e
            ? [t]
            : t8(t(e), e, r, n)
          : t instanceof t2
          ? r
            ? (t.inject(r, n), [t.getName(n)])
            : [t]
          : tE(t)
          ? t7(t)
          : Array.isArray(t)
          ? Array.prototype.concat.apply(
              q,
              t.map(function (t) {
                return t8(t, e, r, n);
              })
            )
          : [t.toString()];
      }
      function t3(t) {
        for (var e = 0; e < t.length; e += 1) {
          var r = t[e];
          if (tA(r) && !tC(r)) return !1;
        }
        return !0;
      }
      var t9 = tl("6.0.6"),
        et = (function () {
          function t(t, e, r) {
            (this.rules = t),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && t3(t)),
              (this.componentId = e),
              (this.baseHash = ta(t9, e)),
              (this.baseStyle = r),
              tY.registerId(e);
          }
          return (
            (t.prototype.generateAndInjectStyles = function (t, e, r) {
              var n = this.baseStyle
                ? this.baseStyle.generateAndInjectStyles(t, e, r)
                : "";
              if (this.isStatic && !r.hash) {
                if (
                  this.staticRulesId &&
                  e.hasNameForId(this.componentId, this.staticRulesId)
                )
                  n = tk(n, this.staticRulesId);
                else {
                  var i = tT(t8(this.rules, t, e, r)),
                    s = ts(ta(this.baseHash, i) >>> 0);
                  if (!e.hasNameForId(this.componentId, s)) {
                    var o = r(i, ".".concat(s), void 0, this.componentId);
                    e.insertRules(this.componentId, s, o);
                  }
                  (n = tk(n, s)), (this.staticRulesId = s);
                }
              } else {
                for (
                  var a = ta(this.baseHash, r.hash), l = "", u = 0;
                  u < this.rules.length;
                  u++
                ) {
                  var c = this.rules[u];
                  if ("string" == typeof c) l += c;
                  else if (c) {
                    var h = tT(t8(c, t, e, r));
                    (a = ta(a, h)), (l += h);
                  }
                }
                if (l) {
                  var d = ts(a >>> 0);
                  e.hasNameForId(this.componentId, d) ||
                    e.insertRules(
                      this.componentId,
                      d,
                      r(l, ".".concat(d), void 0, this.componentId)
                    ),
                    (n = tk(n, d));
                }
              }
              return n;
            }),
            t
          );
        })(),
        ee = s.createContext(void 0);
      function er(t) {
        var e = s.useContext(ee),
          r = (0, s.useMemo)(
            function () {
              return (function (t, e) {
                if (!t) throw tD(14);
                if (tA(t)) return t(e);
                if (Array.isArray(t) || "object" != typeof t) throw tD(8);
                return e ? n(n({}, e), t) : t;
              })(t.theme, e);
            },
            [t.theme, e]
          );
        return t.children
          ? s.createElement(ee.Provider, { value: r }, t.children)
          : null;
      }
      ee.Consumer;
      var en = {};
      function ei(t, e, r) {
        var i,
          o,
          a,
          l,
          u = tC(t),
          c = !tu(t),
          h = e.attrs,
          d = void 0 === h ? q : h,
          p = e.componentId,
          f =
            void 0 === p
              ? ((i = e.displayName),
                (o = e.parentComponentId),
                (en[(a = "string" != typeof i ? "sc" : tr(i))] =
                  (en[a] || 0) + 1),
                (l = ""
                  .concat(a, "-")
                  .concat(ts(tl("6.0.6" + a + en[a]) >>> 0))),
                o ? "".concat(o, "-").concat(l) : l)
              : p,
          m =
            (void 0 === e.displayName && (tu(t) || t.displayName || t.name),
            e.displayName && e.componentId
              ? "".concat(tr(e.displayName), "-").concat(e.componentId)
              : e.componentId || f),
          v = u && t.attrs ? t.attrs.concat(d).filter(Boolean) : d,
          y = e.shouldForwardProp;
        if (u && t.shouldForwardProp) {
          var g = t.shouldForwardProp;
          if (e.shouldForwardProp) {
            var x = e.shouldForwardProp;
            y = function (t, e) {
              return g(t, e) && x(t, e);
            };
          } else y = g;
        }
        var b = new et(r, m, u ? t.componentStyle : void 0),
          w = s.forwardRef(function (t, e) {
            return (function (t, e, r) {
              var i,
                o = t.attrs,
                a = t.componentStyle,
                l = t.defaultProps,
                u = t.foldedComponentIds,
                c = t.styledComponentId,
                h = t.target,
                d = s.useContext(ee),
                p = t1(),
                f = t.shouldForwardProp || p.shouldForwardProp,
                m = (function (t, e, r) {
                  for (
                    var i,
                      s = n(n({}, e), { className: void 0, theme: r }),
                      o = 0;
                    o < t.length;
                    o += 1
                  ) {
                    var a = tA((i = t[o])) ? i(s) : i;
                    for (var l in a)
                      s[l] =
                        "className" === l
                          ? tk(s[l], a[l])
                          : "style" === l
                          ? n(n({}, s[l]), a[l])
                          : a[l];
                  }
                  return (
                    e.className && (s.className = tk(s.className, e.className)),
                    s
                  );
                })(o, e, J(e, d, l) || K),
                v = m.as || h,
                y = {};
              for (var g in m)
                void 0 === m[g] ||
                  "$" === g[0] ||
                  "as" === g ||
                  "theme" === g ||
                  ("forwardedAs" === g
                    ? (y.as = m.forwardedAs)
                    : (f && !f(g, v)) || (y[g] = m[g]));
              var x =
                  ((i = t1()),
                  a.generateAndInjectStyles(m, i.styleSheet, i.stylis)),
                b = tk(u, c);
              return (
                x && (b += " " + x),
                m.className && (b += " " + m.className),
                (y[tu(v) && !Q.has(v) ? "class" : "className"] = b),
                (y.ref = r),
                (0, s.createElement)(v, y)
              );
            })(w, t, e);
          });
        return (
          (w.attrs = v),
          (w.componentStyle = b),
          (w.shouldForwardProp = y),
          (w.foldedComponentIds = u
            ? tk(t.foldedComponentIds, t.styledComponentId)
            : ""),
          (w.styledComponentId = m),
          (w.target = u ? t.target : t),
          Object.defineProperty(w, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (e) {
              this._foldedDefaultProps = u
                ? (function (t) {
                    for (var e = [], r = 1; r < arguments.length; r++)
                      e[r - 1] = arguments[r];
                    for (var n = 0; n < e.length; n++)
                      (function t(e, r, n) {
                        if (
                          (void 0 === n && (n = !1),
                          !n && !tE(e) && !Array.isArray(e))
                        )
                          return r;
                        if (Array.isArray(r))
                          for (var i = 0; i < r.length; i++)
                            e[i] = t(e[i], r[i]);
                        else if (tE(r)) for (var i in r) e[i] = t(e[i], r[i]);
                        return e;
                      })(t, e[n], !0);
                    return t;
                  })({}, t.defaultProps, e)
                : e;
            },
          }),
          tR(w, function () {
            return ".".concat(w.styledComponentId);
          }),
          c &&
            (function t(e, r, n) {
              if ("string" != typeof r) {
                if (tS) {
                  var i = tP(r);
                  i && i !== tS && t(e, i, n);
                }
                var s = tx(r);
                tb && (s = s.concat(tb(r)));
                for (var o = ty(e), a = ty(r), l = 0; l < s.length; ++l) {
                  var u = s[l];
                  if (
                    !(u in tf || (n && n[u]) || (a && u in a) || (o && u in o))
                  ) {
                    var c = tw(r, u);
                    try {
                      tg(e, u, c);
                    } catch (t) {}
                  }
                }
              }
              return e;
            })(w, t, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
            }),
          w
        );
      }
      function es(t, e) {
        for (var r = [t[0]], n = 0, i = e.length; n < i; n += 1)
          r.push(e[n], t[n + 1]);
        return r;
      }
      var eo = function (t) {
        return Object.assign(t, { isCss: !0 });
      };
      function ea(t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        return tA(t) || tE(t)
          ? eo(t8(es(q, i([t], e, !0))))
          : 0 === e.length && 1 === t.length && "string" == typeof t[0]
          ? t8(t)
          : eo(t8(es(t, e)));
      }
      var el = function (t) {
          return (function t(e, r, s) {
            if ((void 0 === s && (s = K), !r)) throw tD(1, r);
            var o = function (t) {
              for (var n = [], o = 1; o < arguments.length; o++)
                n[o - 1] = arguments[o];
              return e(r, s, ea.apply(void 0, i([t], n, !1)));
            };
            return (
              (o.attrs = function (i) {
                return t(
                  e,
                  r,
                  n(n({}, s), {
                    attrs: Array.prototype.concat(s.attrs, i).filter(Boolean),
                  })
                );
              }),
              (o.withConfig = function (i) {
                return t(e, r, n(n({}, s), i));
              }),
              o
            );
          })(ei, t);
        },
        eu = el;
      Q.forEach(function (t) {
        eu[t] = el(t);
      });
      var ec = (function () {
        function t(t, e) {
          (this.rules = t),
            (this.componentId = e),
            (this.isStatic = t3(t)),
            tY.registerId(this.componentId + 1);
        }
        return (
          (t.prototype.createStyles = function (t, e, r, n) {
            var i = n(tT(t8(this.rules, e, r, n)), ""),
              s = this.componentId + t;
            r.insertRules(s, s, i);
          }),
          (t.prototype.removeStyles = function (t, e) {
            e.clearRules(this.componentId + t);
          }),
          (t.prototype.renderStyles = function (t, e, r, n) {
            t > 2 && tY.registerId(this.componentId + t),
              this.removeStyles(t, r),
              this.createStyles(t, e, r, n);
          }),
          t
        );
      })();
      function eh(t) {
        for (var e = [], r = 1; r < arguments.length; r++)
          e[r - 1] = arguments[r];
        var o = ea.apply(void 0, i([t], e, !1)),
          a = "sc-global-".concat(ts(tl(JSON.stringify(o)) >>> 0)),
          l = new ec(o, a),
          u = function (t) {
            var e = t1(),
              r = s.useContext(ee),
              n = s.useRef(e.styleSheet.allocateGSInstance(a)).current;
            return (
              e.styleSheet.server && c(n, t, e.styleSheet, r, e.stylis),
              s.useLayoutEffect(
                function () {
                  if (!e.styleSheet.server)
                    return (
                      c(n, t, e.styleSheet, r, e.stylis),
                      function () {
                        return l.removeStyles(n, e.styleSheet);
                      }
                    );
                },
                [n, t, e.styleSheet, r, e.stylis]
              ),
              null
            );
          };
        function c(t, e, r, i, s) {
          if (l.isStatic) l.renderStyles(t, Z, r, s);
          else {
            var o = n(n({}, e), { theme: J(e, i, u.defaultProps) });
            l.renderStyles(t, o, r, s);
          }
        }
        return s.memo(u);
      }
      !(function () {
        function t() {
          var t = this;
          (this._emitSheetCSS = function () {
            var e = t.instance.toString(),
              n = r.nc,
              i = tT(
                [
                  n && 'nonce="'.concat(n, '"'),
                  "".concat(H, '="true"'),
                  "".concat("data-styled-version", '="').concat("6.0.6", '"'),
                ].filter(Boolean),
                " "
              );
            return "<style ".concat(i, ">").concat(e, "</style>");
          }),
            (this.getStyleTags = function () {
              if (t.sealed) throw tD(2);
              return t._emitSheetCSS();
            }),
            (this.getStyleElement = function () {
              if (t.sealed) throw tD(2);
              var e,
                i =
                  (((e = {})[H] = ""),
                  (e["data-styled-version"] = "6.0.6"),
                  (e.dangerouslySetInnerHTML = {
                    __html: t.instance.toString(),
                  }),
                  e),
                o = r.nc;
              return (
                o && (i.nonce = o),
                [s.createElement("style", n({}, i, { key: "sc-0-0" }))]
              );
            }),
            (this.seal = function () {
              t.sealed = !0;
            }),
            (this.instance = new tY({ isServer: !0 })),
            (this.sealed = !1);
        }
        (t.prototype.collectStyles = function (t) {
          if (this.sealed) throw tD(2);
          return s.createElement(t5, { sheet: this.instance }, t);
        }),
          (t.prototype.interleaveWithNodeStream = function (t) {
            throw tD(3);
          });
      })();
    },
    2729: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return (
          e || (e = t.slice(0)),
          Object.freeze(
            Object.defineProperties(t, { raw: { value: Object.freeze(e) } })
          )
        );
      }
      r.d(e, {
        _: function () {
          return n;
        },
      });
    },
    4213: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return O;
        },
      });
      var n,
        i = r(7301),
        s = r(6955),
        o = r(5487),
        a = r(2074),
        l = r(4522);
      let u = (0, l.X)(() => void 0 !== window.ScrollTimeline);
      class c {
        constructor(t) {
          this.animations = t.filter(Boolean);
        }
        then(t, e) {
          return Promise.all(this.animations).then(t).catch(e);
        }
        getAll(t) {
          return this.animations[0][t];
        }
        setAll(t, e) {
          for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = e;
        }
        attachTimeline(t) {
          let e = this.animations.map((e) => {
            if (!u() || !e.attachTimeline)
              return (
                e.pause(),
                (function (t, e) {
                  let r;
                  let n = () => {
                    let { currentTime: n } = e,
                      i = null === n ? 0 : n.value,
                      s = i / 100;
                    r !== s && t(s), (r = s);
                  };
                  return a.Wi.update(n, !0), () => (0, a.Pn)(n);
                })((t) => {
                  e.time = e.duration * t;
                }, t)
              );
            e.attachTimeline(t);
          });
          return () => {
            e.forEach((t, e) => {
              t && t(), this.animations[e].stop();
            });
          };
        }
        get time() {
          return this.getAll("time");
        }
        set time(t) {
          this.setAll("time", t);
        }
        get speed() {
          return this.getAll("speed");
        }
        set speed(t) {
          this.setAll("speed", t);
        }
        get duration() {
          let t = 0;
          for (let e = 0; e < this.animations.length; e++)
            t = Math.max(t, this.animations[e].duration);
          return t;
        }
        runAll(t) {
          this.animations.forEach((e) => e[t]());
        }
        play() {
          this.runAll("play");
        }
        pause() {
          this.runAll("pause");
        }
        stop() {
          this.runAll("stop");
        }
        cancel() {
          this.runAll("cancel");
        }
        complete() {
          this.runAll("complete");
        }
      }
      var h = r(8254),
        d = r(5194),
        p = r(5794),
        f = r(4547),
        m = r(1059),
        v = r(5086),
        y = r(2284),
        g = r(6917),
        x = r(599),
        b = r(6615),
        w = r(3967),
        P = r(406);
      function S(t, e, r, n) {
        var i;
        return "number" == typeof e
          ? e
          : e.startsWith("-") || e.startsWith("+")
          ? Math.max(0, t + parseFloat(e))
          : "<" === e
          ? r
          : null !== (i = n.get(e)) && void 0 !== i
          ? i
          : t;
      }
      let A = (t, e, r) => {
        let n = e - t;
        return ((((r - t) % n) + n) % n) + t;
      };
      var C = r(3338),
        k = r(10),
        T = r(22);
      function E(t, e) {
        return t.at !== e.at
          ? t.at - e.at
          : null === t.value
          ? 1
          : null === e.value
          ? -1
          : 0;
      }
      function R(t, e) {
        return e.has(t) || e.set(t, {}), e.get(t);
      }
      function D(t, e) {
        return e[t] || (e[t] = []), e[t];
      }
      let V = (t) => "number" == typeof t,
        M = (t) => t.every(V);
      function j(t, e, r, n) {
        let a = (0, i.I)(t, n),
          l = a.length;
        (0, o.k)(!!l, "No valid element provided.");
        let u = [];
        for (let t = 0; t < l; t++) {
          let n = a[t];
          s.R.has(n) ||
            (function (t) {
              let e = {
                  presenceContext: null,
                  props: {},
                  visualState: {
                    renderState: {
                      transform: {},
                      transformOrigin: {},
                      style: {},
                      vars: {},
                      attrs: {},
                    },
                    latestValues: {},
                  },
                },
                r = (0, d.v)(t)
                  ? new p.e(e, { enableHardwareAcceleration: !1 })
                  : new f.W(e, { enableHardwareAcceleration: !0 });
              r.mount(t), s.R.set(t, r);
            })(n);
          let i = s.R.get(n),
            o = { ...r };
          "function" == typeof o.delay && (o.delay = o.delay(t, l)),
            u.push(...(0, h.w)(i, { ...e, transition: o }, {}));
        }
        return new c(u);
      }
      let L = (t) => Array.isArray(t) && Array.isArray(t[0]),
        O = function (t, e, r) {
          let s;
          return (
            (s = L(t)
              ? (function (t, e, r) {
                  let n = [],
                    s = (function (
                      t,
                      { defaultTransition: e = {}, ...r } = {},
                      n
                    ) {
                      let s = e.duration || 0.3,
                        o = new Map(),
                        a = new Map(),
                        l = {},
                        u = new Map(),
                        c = 0,
                        h = 0,
                        d = 0;
                      for (let r = 0; r < t.length; r++) {
                        let o = t[r];
                        if ("string" == typeof o) {
                          u.set(o, h);
                          continue;
                        }
                        if (!Array.isArray(o)) {
                          u.set(o.name, S(h, o.at, c, u));
                          continue;
                        }
                        let [p, f, m = {}] = o;
                        void 0 !== m.at && (h = S(h, m.at, c, u));
                        let w = 0,
                          E = (t, r, n, i = 0, o = 0) => {
                            let a = Array.isArray(t) ? t : [t],
                              {
                                delay: l = 0,
                                times: u = (0, x.Y)(a),
                                type: c = "keyframes",
                                ...p
                              } = r,
                              { ease: f = e.ease || "easeOut", duration: m } =
                                r,
                              P = "function" == typeof l ? l(i, o) : l,
                              S = a.length;
                            if (S <= 2 && "spring" === c) {
                              let t = 100;
                              if (2 === S && M(a)) {
                                let e = a[1] - a[0];
                                t = Math.abs(e);
                              }
                              let e = { ...p };
                              void 0 !== m && (e.duration = (0, g.w)(m));
                              let r = (function (t, e = 100) {
                                let r = (0, v.S)({ keyframes: [0, e], ...t }),
                                  n = Math.min((0, y.i)(r), y.E);
                                return {
                                  type: "keyframes",
                                  ease: (t) => r.next(n * t).value / e,
                                  duration: (0, g.X)(n),
                                };
                              })(e, t);
                              (f = r.ease), (m = r.duration);
                            }
                            null != m || (m = s);
                            let E = h + P,
                              R = E + m;
                            1 === u.length && 0 === u[0] && (u[1] = 1);
                            let D = u.length - a.length;
                            D > 0 && (0, b.c)(u, D),
                              1 === a.length && a.unshift(null),
                              (function (t, e, r, n, i, s) {
                                !(function (t, e, r) {
                                  for (let n = 0; n < t.length; n++) {
                                    let i = t[n];
                                    i.at > e &&
                                      i.at < r &&
                                      ((0, k.cl)(t, i), n--);
                                  }
                                })(t, i, s);
                                for (let a = 0; a < e.length; a++) {
                                  var o;
                                  t.push({
                                    value: e[a],
                                    at: (0, T.C)(i, s, n[a]),
                                    easing:
                                      ((o = a),
                                      (0, C.N)(r) ? r[A(0, r.length, o)] : r),
                                  });
                                }
                              })(n, a, f, u, E, R),
                              (w = Math.max(P + m, w)),
                              (d = Math.max(R, d));
                          };
                        if ((0, P.i)(p)) {
                          let t = R(p, a);
                          E(f, m, D("default", t));
                        } else {
                          let t = (0, i.I)(p, n, l),
                            e = t.length;
                          for (let r = 0; r < e; r++) {
                            let n = t[r],
                              i = R(n, a);
                            for (let t in f)
                              E(
                                f[t],
                                m[t] ? { ...m, ...m[t] } : { ...m },
                                D(t, i),
                                r,
                                e
                              );
                          }
                          (c = h), (h += w);
                        }
                      }
                      return (
                        a.forEach((t, n) => {
                          for (let i in t) {
                            let s = t[i];
                            s.sort(E);
                            let a = [],
                              l = [],
                              u = [];
                            for (let t = 0; t < s.length; t++) {
                              let { at: e, value: r, easing: n } = s[t];
                              a.push(r),
                                l.push((0, w.Y)(0, d, e)),
                                u.push(n || "easeOut");
                            }
                            0 !== l[0] &&
                              (l.unshift(0),
                              a.unshift(a[0]),
                              u.unshift("easeInOut")),
                              1 !== l[l.length - 1] &&
                                (l.push(1), a.push(null)),
                              o.has(n) ||
                                o.set(n, { keyframes: {}, transition: {} });
                            let c = o.get(n);
                            (c.keyframes[i] = a),
                              (c.transition[i] = {
                                ...e,
                                duration: d,
                                ease: u,
                                times: l,
                                ...r,
                              });
                          }
                        }),
                        o
                      );
                    })(t, e, r);
                  return (
                    s.forEach(({ keyframes: t, transition: e }, r) => {
                      let i;
                      (i = (0, P.i)(r)
                        ? (0, m.D)(r, t.default, e.default)
                        : j(r, t, e)),
                        n.push(i);
                    }),
                    new c(n)
                  );
                })(t, e, n)
              : "object" != typeof e || Array.isArray(e)
              ? (0, m.D)(t, e, r)
              : j(t, e, r, n)),
            n && n.animations.push(s),
            s
          );
        };
    },
    7159: function (t, e, r) {
      "use strict";
      r.d(e, {
        y: function () {
          return V;
        },
      });
      var n = r(1662);
      let i = (t, e, r) =>
        (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;
      function s(t, e, r, s) {
        if (t === e && r === s) return n.Z;
        let o = (e) =>
          (function (t, e, r, n, s) {
            let o, a;
            let l = 0;
            do (o = i((a = e + (r - e) / 2), n, s) - t) > 0 ? (r = a) : (e = a);
            while (Math.abs(o) > 1e-7 && ++l < 12);
            return a;
          })(e, 0, 1, t, r);
        return (t) => (0 === t || 1 === t ? t : i(o(t), e, s));
      }
      let o = s(0.42, 0, 1, 1),
        a = s(0, 0, 0.58, 1),
        l = s(0.42, 0, 0.58, 1);
      var u = r(3338),
        c = r(5487),
        h = r(7255),
        d = r(415),
        p = r(5129);
      let f = s(0.33, 1.53, 0.69, 0.99),
        m = (0, p.M)(f),
        v = (0, d.o)(m),
        y = {
          linear: n.Z,
          easeIn: o,
          easeInOut: l,
          easeOut: a,
          circIn: h.Z7,
          circInOut: h.X7,
          circOut: h.Bn,
          backIn: m,
          backInOut: v,
          backOut: f,
          anticipate: (t) =>
            (t *= 2) < 1 ? 0.5 * m(t) : 0.5 * (2 - Math.pow(2, -10 * (t - 1))),
        },
        g = (t) => {
          if (Array.isArray(t)) {
            (0, c.k)(
              4 === t.length,
              "Cubic bezier arrays must contain four numerical values."
            );
            let [e, r, n, i] = t;
            return s(e, r, n, i);
          }
          return "string" == typeof t
            ? ((0, c.k)(void 0 !== y[t], `Invalid easing type '${t}'`), y[t])
            : t;
        };
      var x = r(4606),
        b = r(599);
      function w({
        duration: t = 300,
        keyframes: e,
        times: r,
        ease: n = "easeInOut",
      }) {
        let i = (0, u.N)(n) ? n.map(g) : g(n),
          s = { done: !1, value: e[0] },
          o = (r && r.length === e.length ? r : (0, b.Y)(e)).map((e) => e * t),
          a = (0, x.s)(o, e, {
            ease: Array.isArray(i)
              ? i
              : e.map(() => i || l).splice(0, e.length - 1),
          });
        return {
          calculatedDuration: t,
          next: (e) => ((s.value = a(e)), (s.done = e >= t), s),
        };
      }
      var P = r(5086),
        S = r(5753);
      function A({
        keyframes: t,
        velocity: e = 0,
        power: r = 0.8,
        timeConstant: n = 325,
        bounceDamping: i = 10,
        bounceStiffness: s = 500,
        modifyTarget: o,
        min: a,
        max: l,
        restDelta: u = 0.5,
        restSpeed: c,
      }) {
        let h, d;
        let p = t[0],
          f = { done: !1, value: p },
          m = (t) => (void 0 !== a && t < a) || (void 0 !== l && t > l),
          v = (t) =>
            void 0 === a
              ? l
              : void 0 === l
              ? a
              : Math.abs(a - t) < Math.abs(l - t)
              ? a
              : l,
          y = r * e,
          g = p + y,
          x = void 0 === o ? g : o(g);
        x !== g && (y = x - p);
        let b = (t) => -y * Math.exp(-t / n),
          w = (t) => x + b(t),
          A = (t) => {
            let e = b(t),
              r = w(t);
            (f.done = Math.abs(e) <= u), (f.value = f.done ? x : r);
          },
          C = (t) => {
            m(f.value) &&
              ((h = t),
              (d = (0, P.S)({
                keyframes: [f.value, v(f.value)],
                velocity: (0, S.P)(w, t, f.value),
                damping: i,
                stiffness: s,
                restDelta: u,
                restSpeed: c,
              })));
          };
        return (
          C(0),
          {
            calculatedDuration: null,
            next: (t) => {
              let e = !1;
              return (d || void 0 !== h || ((e = !0), A(t), C(t)),
              void 0 !== h && t > h)
                ? d.next(t - h)
                : (e || A(t), f);
            },
          }
        );
      }
      var C = r(2074);
      let k = (t) => {
        let e = ({ timestamp: e }) => t(e);
        return {
          start: () => C.Wi.update(e, !0),
          stop: () => (0, C.Pn)(e),
          now: () =>
            C.frameData.isProcessing
              ? C.frameData.timestamp
              : performance.now(),
        };
      };
      var T = r(4169),
        E = r(6917),
        R = r(2284);
      let D = { decay: A, inertia: A, tween: w, keyframes: w, spring: P.S };
      function V({
        autoplay: t = !0,
        delay: e = 0,
        driver: r = k,
        keyframes: n,
        type: i = "keyframes",
        repeat: s = 0,
        repeatDelay: o = 0,
        repeatType: a = "loop",
        onPlay: l,
        onStop: u,
        onComplete: c,
        onUpdate: h,
        ...d
      }) {
        let p,
          f,
          m,
          v,
          y,
          g = 1,
          b = !1,
          P = () => {
            f = new Promise((t) => {
              p = t;
            });
          };
        P();
        let S = D[i] || w;
        S !== w &&
          "number" != typeof n[0] &&
          ((v = (0, x.s)([0, 100], n, { clamp: !1 })), (n = [0, 100]));
        let A = S({ ...d, keyframes: n });
        "mirror" === a &&
          (y = S({
            ...d,
            keyframes: [...n].reverse(),
            velocity: -(d.velocity || 0),
          }));
        let C = "idle",
          V = null,
          M = null,
          j = null;
        null === A.calculatedDuration &&
          s &&
          (A.calculatedDuration = (0, R.i)(A));
        let { calculatedDuration: L } = A,
          O = 1 / 0,
          I = 1 / 0;
        null !== L && (I = (O = L + o) * (s + 1) - o);
        let _ = 0,
          F = (t) => {
            if (null === M) return;
            g > 0 && (M = Math.min(M, t)),
              g < 0 && (M = Math.min(t - I / g, M)),
              (_ = null !== V ? V : Math.round(t - M) * g);
            let r = _ - e * (g >= 0 ? 1 : -1),
              i = g >= 0 ? r < 0 : r > I;
            (_ = Math.max(r, 0)), "finished" === C && null === V && (_ = I);
            let l = _,
              u = A;
            if (s) {
              let t = _ / O,
                e = Math.floor(t),
                r = t % 1;
              !r && t >= 1 && (r = 1), 1 === r && e--, (e = Math.min(e, s + 1));
              let n = !!(e % 2);
              n &&
                ("reverse" === a
                  ? ((r = 1 - r), o && (r -= o / O))
                  : "mirror" === a && (u = y));
              let i = (0, T.u)(0, 1, r);
              _ > I && (i = "reverse" === a && n ? 1 : 0), (l = i * O);
            }
            let c = i ? { done: !1, value: n[0] } : u.next(l);
            v && (c.value = v(c.value));
            let { done: d } = c;
            i || null === L || (d = g >= 0 ? _ >= I : _ <= 0);
            let p = null === V && ("finished" === C || ("running" === C && d));
            return h && h(c.value), p && N(), c;
          },
          $ = () => {
            m && m.stop(), (m = void 0);
          },
          B = () => {
            (C = "idle"), $(), p(), P(), (M = j = null);
          },
          N = () => {
            (C = "finished"), c && c(), $(), p();
          },
          W = () => {
            if (b) return;
            m || (m = r(F));
            let t = m.now();
            l && l(),
              null !== V ? (M = t - V) : (M && "finished" !== C) || (M = t),
              "finished" === C && P(),
              (j = M),
              (V = null),
              (C = "running"),
              m.start();
          };
        t && W();
        let z = {
          then: (t, e) => f.then(t, e),
          get time() {
            return (0, E.X)(_);
          },
          set time(newTime) {
            (_ = newTime = (0, E.w)(newTime)),
              null === V && m && 0 !== g
                ? (M = m.now() - newTime / g)
                : (V = newTime);
          },
          get duration() {
            let t =
              null === A.calculatedDuration
                ? (0, R.i)(A)
                : A.calculatedDuration;
            return (0, E.X)(t);
          },
          get speed() {
            return g;
          },
          set speed(newSpeed) {
            if (newSpeed === g || !m) return;
            (g = newSpeed), (z.time = (0, E.X)(_));
          },
          get state() {
            return C;
          },
          play: W,
          pause: () => {
            (C = "paused"), (V = _);
          },
          stop: () => {
            (b = !0), "idle" !== C && ((C = "idle"), u && u(), B());
          },
          cancel: () => {
            null !== j && F(j), B();
          },
          complete: () => {
            C = "finished";
          },
          sample: (t) => ((M = 0), F(t)),
        };
        return z;
      }
    },
    5086: function (t, e, r) {
      "use strict";
      r.d(e, {
        S: function () {
          return h;
        },
      });
      var n = r(6917),
        i = r(5753),
        s = r(5487),
        o = r(4169);
      function a(t, e) {
        return t * Math.sqrt(1 - e * e);
      }
      let l = ["duration", "bounce"],
        u = ["stiffness", "damping", "mass"];
      function c(t, e) {
        return e.some((e) => void 0 !== t[e]);
      }
      function h({ keyframes: t, restDelta: e, restSpeed: r, ...h }) {
        let d;
        let p = t[0],
          f = t[t.length - 1],
          m = { done: !1, value: p },
          {
            stiffness: v,
            damping: y,
            mass: g,
            velocity: x,
            duration: b,
            isResolvedFromDuration: w,
          } = (function (t) {
            let e = {
              velocity: 0,
              stiffness: 100,
              damping: 10,
              mass: 1,
              isResolvedFromDuration: !1,
              ...t,
            };
            if (!c(t, u) && c(t, l)) {
              let r = (function ({
                duration: t = 800,
                bounce: e = 0.25,
                velocity: r = 0,
                mass: i = 1,
              }) {
                let l, u;
                (0, s.K)(
                  t <= (0, n.w)(10),
                  "Spring duration must be 10 seconds or less"
                );
                let c = 1 - e;
                (c = (0, o.u)(0.05, 1, c)),
                  (t = (0, o.u)(0.01, 10, (0, n.X)(t))),
                  c < 1
                    ? ((l = (e) => {
                        let n = e * c,
                          i = n * t,
                          s = a(e, c);
                        return 0.001 - ((n - r) / s) * Math.exp(-i);
                      }),
                      (u = (e) => {
                        let n = e * c,
                          i = n * t,
                          s = Math.pow(c, 2) * Math.pow(e, 2) * t,
                          o = a(Math.pow(e, 2), c),
                          u = -l(e) + 0.001 > 0 ? -1 : 1;
                        return (u * ((i * r + r - s) * Math.exp(-i))) / o;
                      }))
                    : ((l = (e) => {
                        let n = Math.exp(-e * t),
                          i = (e - r) * t + 1;
                        return -0.001 + n * i;
                      }),
                      (u = (e) => {
                        let n = Math.exp(-e * t),
                          i = (r - e) * (t * t);
                        return n * i;
                      }));
                let h = 5 / t,
                  d = (function (t, e, r) {
                    let n = r;
                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                    return n;
                  })(l, u, h);
                if (((t = (0, n.w)(t)), isNaN(d)))
                  return { stiffness: 100, damping: 10, duration: t };
                {
                  let e = Math.pow(d, 2) * i;
                  return {
                    stiffness: e,
                    damping: 2 * c * Math.sqrt(i * e),
                    duration: t,
                  };
                }
              })(t);
              (e = {
                ...e,
                ...r,
                velocity: 0,
                mass: 1,
              }).isResolvedFromDuration = !0;
            }
            return e;
          })(h),
          P = x ? -(0, n.X)(x) : 0,
          S = y / (2 * Math.sqrt(v * g)),
          A = f - p,
          C = (0, n.X)(Math.sqrt(v / g)),
          k = 5 > Math.abs(A);
        if ((r || (r = k ? 0.01 : 2), e || (e = k ? 0.005 : 0.5), S < 1)) {
          let t = a(C, S);
          d = (e) => {
            let r = Math.exp(-S * C * e);
            return (
              f -
              r *
                (((P + S * C * A) / t) * Math.sin(t * e) + A * Math.cos(t * e))
            );
          };
        } else if (1 === S)
          d = (t) => f - Math.exp(-C * t) * (A + (P + C * A) * t);
        else {
          let t = C * Math.sqrt(S * S - 1);
          d = (e) => {
            let r = Math.exp(-S * C * e),
              n = Math.min(t * e, 300);
            return (
              f -
              (r * ((P + S * C * A) * Math.sinh(n) + t * A * Math.cosh(n))) / t
            );
          };
        }
        return {
          calculatedDuration: (w && b) || null,
          next: (t) => {
            let n = d(t);
            if (w) m.done = t >= b;
            else {
              let s = P;
              0 !== t && (s = S < 1 ? (0, i.P)(d, t, n) : 0);
              let o = Math.abs(s) <= r,
                a = Math.abs(f - n) <= e;
              m.done = o && a;
            }
            return (m.value = m.done ? f : n), m;
          },
        };
      }
    },
    2284: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return n;
        },
        i: function () {
          return i;
        },
      });
      let n = 2e4;
      function i(t) {
        let e = 0,
          r = t.next(e);
        for (; !r.done && e < n; ) (e += 50), (r = t.next(e));
        return e >= n ? 1 / 0 : e;
      }
    },
    5753: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return i;
        },
      });
      var n = r(3038);
      function i(t, e, r) {
        let i = Math.max(e - 5, 0);
        return (0, n.R)(r - t(i), e - i);
      }
    },
    6719: function (t, e, r) {
      "use strict";
      r.d(e, {
        v: function () {
          return T;
        },
      });
      var n = r(5487),
        i = r(6917);
      let s = { current: !1 },
        o = (t) => Array.isArray(t) && "number" == typeof t[0],
        a = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
        l = {
          linear: "linear",
          ease: "ease",
          easeIn: "ease-in",
          easeOut: "ease-out",
          easeInOut: "ease-in-out",
          circIn: a([0, 0.65, 0.55, 1]),
          circOut: a([0.55, 0, 1, 0.45]),
          backIn: a([0.31, 0.01, 0.66, -0.59]),
          backOut: a([0.33, 1.53, 0.69, 0.99]),
        };
      var u = r(7159),
        c = r(4522),
        h = r(1662),
        d = r(2074);
      let p = (0, c.X)(() =>
          Object.hasOwnProperty.call(Element.prototype, "animate")
        ),
        f = new Set([
          "opacity",
          "clipPath",
          "filter",
          "transform",
          "backgroundColor",
        ]),
        m = (t, e) =>
          "spring" === e.type ||
          "backgroundColor" === t ||
          !(function t(e) {
            return !!(
              !e ||
              ("string" == typeof e && l[e]) ||
              o(e) ||
              (Array.isArray(e) && e.every(t))
            );
          })(e.ease);
      var v = r(4714);
      let y = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
        g = (t) => ({
          type: "spring",
          stiffness: 550,
          damping: 0 === t ? 2 * Math.sqrt(550) : 30,
          restSpeed: 10,
        }),
        x = { type: "keyframes", duration: 0.8 },
        b = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
        w = (t, { keyframes: e }) =>
          e.length > 2
            ? x
            : v.G.has(t)
            ? t.startsWith("scale")
              ? g(e[1])
              : y
            : b;
      var P = r(1550);
      let S = (t, e) =>
        "zIndex" !== t &&
        !!(
          "number" == typeof e ||
          Array.isArray(e) ||
          ("string" == typeof e &&
            (P.P.test(e) || "0" === e) &&
            !e.startsWith("url("))
        );
      var A = r(9135),
        C = r(681),
        k = r(1056);
      let T =
        (t, e, r, c = {}) =>
        (v) => {
          let y = (0, k.e)(c, t) || {},
            g = y.delay || c.delay || 0,
            { elapsed: x = 0 } = c;
          x -= (0, i.w)(g);
          let b = (function (t, e, r, n) {
              let i, s;
              let o = S(e, r);
              i = Array.isArray(r) ? [...r] : [null, r];
              let a = void 0 !== n.from ? n.from : t.get(),
                l = [];
              for (let t = 0; t < i.length; t++) {
                var u;
                null === i[t] && (i[t] = 0 === t ? a : i[t - 1]),
                  ("number" == typeof (u = i[t])
                    ? 0 === u
                    : null !== u
                    ? "none" === u || "0" === u || (0, C.W)(u)
                    : void 0) && l.push(t),
                  "string" == typeof i[t] &&
                    "none" !== i[t] &&
                    "0" !== i[t] &&
                    (s = i[t]);
              }
              if (o && l.length && s)
                for (let t = 0; t < l.length; t++) {
                  let r = l[t];
                  i[r] = (0, A.T)(e, s);
                }
              return i;
            })(e, t, r, y),
            P = b[0],
            T = b[b.length - 1],
            E = S(t, P),
            R = S(t, T);
          (0, n.K)(
            E === R,
            `You are trying to animate ${t} from "${P}" to "${T}". ${P} is not an animatable value - to enable this animation set ${P} to a value animatable to ${T} via the \`style\` property.`
          );
          let D = {
            keyframes: b,
            velocity: e.getVelocity(),
            ease: "easeOut",
            ...y,
            delay: -x,
            onUpdate: (t) => {
              e.set(t), y.onUpdate && y.onUpdate(t);
            },
            onComplete: () => {
              v(), y.onComplete && y.onComplete();
            },
          };
          if (
            ((0, k.r)(y) || (D = { ...D, ...w(t, D) }),
            D.duration && (D.duration = (0, i.w)(D.duration)),
            D.repeatDelay && (D.repeatDelay = (0, i.w)(D.repeatDelay)),
            !E || !R || s.current || !1 === y.type)
          )
            return (function ({
              keyframes: t,
              delay: e,
              onUpdate: r,
              onComplete: n,
            }) {
              let i = () => (
                r && r(t[t.length - 1]),
                n && n(),
                {
                  time: 0,
                  speed: 1,
                  duration: 0,
                  play: h.Z,
                  pause: h.Z,
                  stop: h.Z,
                  then: (t) => (t(), Promise.resolve()),
                  cancel: h.Z,
                  complete: h.Z,
                }
              );
              return e
                ? (0, u.y)({
                    keyframes: [0, 1],
                    duration: 0,
                    delay: e,
                    onComplete: i,
                  })
                : i();
            })(s.current ? { ...D, delay: 0 } : D);
          if (
            e.owner &&
            e.owner.current instanceof HTMLElement &&
            !e.owner.getProps().onUpdate
          ) {
            let r = (function (t, e, { onUpdate: r, onComplete: n, ...s }) {
              let c, v;
              let y =
                p() &&
                f.has(e) &&
                !s.repeatDelay &&
                "mirror" !== s.repeatType &&
                0 !== s.damping &&
                "inertia" !== s.type;
              if (!y) return !1;
              let g = !1,
                x = () => {
                  v = new Promise((t) => {
                    c = t;
                  });
                };
              x();
              let { keyframes: b, duration: w = 300, ease: P, times: S } = s;
              if (m(e, s)) {
                let t = (0, u.y)({ ...s, repeat: 0, delay: 0 }),
                  e = { done: !1, value: b[0] },
                  r = [],
                  n = 0;
                for (; !e.done && n < 2e4; )
                  r.push((e = t.sample(n)).value), (n += 10);
                (S = void 0), (b = r), (w = n - 10), (P = "linear");
              }
              let A = (function (
                  t,
                  e,
                  r,
                  {
                    delay: n = 0,
                    duration: i,
                    repeat: s = 0,
                    repeatType: u = "loop",
                    ease: c,
                    times: h,
                  } = {}
                ) {
                  let d = { [e]: r };
                  h && (d.offset = h);
                  let p = (function t(e) {
                    if (e)
                      return o(e) ? a(e) : Array.isArray(e) ? e.map(t) : l[e];
                  })(c);
                  return (
                    Array.isArray(p) && (d.easing = p),
                    t.animate(d, {
                      delay: n,
                      duration: i,
                      easing: Array.isArray(p) ? "linear" : p,
                      fill: "both",
                      iterations: s + 1,
                      direction: "reverse" === u ? "alternate" : "normal",
                    })
                  );
                })(t.owner.current, e, b, {
                  ...s,
                  duration: w,
                  ease: P,
                  times: S,
                }),
                C = () => A.cancel(),
                k = () => {
                  d.Wi.update(C), c(), x();
                };
              return (
                (A.onfinish = () => {
                  t.set(
                    (function (t, { repeat: e, repeatType: r = "loop" }) {
                      let n =
                        e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                      return t[n];
                    })(b, s)
                  ),
                    n && n(),
                    k();
                }),
                {
                  then: (t, e) => v.then(t, e),
                  attachTimeline: (t) => (
                    (A.timeline = t), (A.onfinish = null), h.Z
                  ),
                  get time() {
                    return (0, i.X)(A.currentTime || 0);
                  },
                  set time(newTime) {
                    A.currentTime = (0, i.w)(newTime);
                  },
                  get speed() {
                    return A.playbackRate;
                  },
                  set speed(newSpeed) {
                    A.playbackRate = newSpeed;
                  },
                  get duration() {
                    return (0, i.X)(w);
                  },
                  play: () => {
                    g || (A.play(), (0, d.Pn)(C));
                  },
                  pause: () => A.pause(),
                  stop: () => {
                    if (((g = !0), "idle" === A.playState)) return;
                    let { currentTime: e } = A;
                    if (e) {
                      let r = (0, u.y)({ ...s, autoplay: !1 });
                      t.setWithVelocity(
                        r.sample(e - 10).value,
                        r.sample(e).value,
                        10
                      );
                    }
                    k();
                  },
                  complete: () => A.finish(),
                  cancel: k,
                }
              );
            })(e, t, D);
            if (r) return r;
          }
          return (0, u.y)(D);
        };
    },
    1059: function (t, e, r) {
      "use strict";
      r.d(e, {
        D: function () {
          return o;
        },
      });
      var n = r(6719),
        i = r(3234),
        s = r(406);
      function o(t, e, r) {
        let o = (0, s.i)(t) ? t : (0, i.B)(t);
        return o.start((0, n.v)("", o, e, r)), o.animation;
      }
    },
    8254: function (t, e, r) {
      "use strict";
      r.d(e, {
        w: function () {
          return c;
        },
      });
      var n = r(4714),
        i = r(3193);
      let s = "data-" + (0, i.D)("framerAppearId");
      var o = r(6719),
        a = r(2490),
        l = r(8172),
        u = r(2074);
      function c(t, e, { delay: r = 0, transitionOverride: i, type: c } = {}) {
        let {
            transition: h = t.getDefaultTransition(),
            transitionEnd: d,
            ...p
          } = t.makeTargetAnimatable(e),
          f = t.getValue("willChange");
        i && (h = i);
        let m = [],
          v = c && t.animationState && t.animationState.getState()[c];
        for (let e in p) {
          let i = t.getValue(e),
            l = p[e];
          if (
            !i ||
            void 0 === l ||
            (v &&
              (function ({ protectedKeys: t, needsAnimating: e }, r) {
                let n = t.hasOwnProperty(r) && !0 !== e[r];
                return (e[r] = !1), n;
              })(v, e))
          )
            continue;
          let c = { delay: r, elapsed: 0, ...h };
          if (window.HandoffAppearAnimations && !i.hasAnimated) {
            let r = t.getProps()[s];
            r && (c.elapsed = window.HandoffAppearAnimations(r, e, i, u.Wi));
          }
          i.start(
            (0, o.v)(
              e,
              i,
              l,
              t.shouldReduceMotion && n.G.has(e) ? { type: !1 } : c
            )
          );
          let d = i.animation;
          (0, a.L)(f) && (f.add(e), d.then(() => f.remove(e))), m.push(d);
        }
        return (
          d &&
            Promise.all(m).then(() => {
              d && (0, l.CD)(t, d);
            }),
          m
        );
      }
    },
    2445: function (t, e, r) {
      "use strict";
      function n(t) {
        return "object" == typeof t && "function" == typeof t.start;
      }
      r.d(e, {
        H: function () {
          return n;
        },
      });
    },
    8488: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t);
    },
    1056: function (t, e, r) {
      "use strict";
      function n({
        when: t,
        delay: e,
        delayChildren: r,
        staggerChildren: n,
        staggerDirection: i,
        repeat: s,
        repeatType: o,
        repeatDelay: a,
        from: l,
        elapsed: u,
        ...c
      }) {
        return !!Object.keys(c).length;
      }
      function i(t, e) {
        return t[e] || t.default || t;
      }
      r.d(e, {
        e: function () {
          return i;
        },
        r: function () {
          return n;
        },
      });
    },
    2703: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return v;
        },
      });
      var n = r(7294),
        i = r(6337),
        s = r(4454),
        o = r(240),
        a = r(6681);
      class l extends n.Component {
        getSnapshotBeforeUpdate(t) {
          let e = this.props.childRef.current;
          if (e && t.isPresent && !this.props.isPresent) {
            let t = this.props.sizeRef.current;
            (t.height = e.offsetHeight || 0),
              (t.width = e.offsetWidth || 0),
              (t.top = e.offsetTop),
              (t.left = e.offsetLeft);
          }
          return null;
        }
        componentDidUpdate() {}
        render() {
          return this.props.children;
        }
      }
      function u({ children: t, isPresent: e }) {
        let r = (0, n.useId)(),
          i = (0, n.useRef)(null),
          s = (0, n.useRef)({ width: 0, height: 0, top: 0, left: 0 });
        return (
          (0, n.useInsertionEffect)(() => {
            let { width: t, height: n, top: o, left: a } = s.current;
            if (e || !i.current || !t || !n) return;
            i.current.dataset.motionPopId = r;
            let l = document.createElement("style");
            return (
              document.head.appendChild(l),
              l.sheet &&
                l.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${t}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${a}px !important;
          }
        `),
              () => {
                document.head.removeChild(l);
              }
            );
          }, [e]),
          n.createElement(
            l,
            { isPresent: e, childRef: i, sizeRef: s },
            n.cloneElement(t, { ref: i })
          )
        );
      }
      let c = ({
        children: t,
        initial: e,
        isPresent: r,
        onExitComplete: i,
        custom: s,
        presenceAffectsLayout: l,
        mode: c,
      }) => {
        let d = (0, a.h)(h),
          p = (0, n.useId)(),
          f = (0, n.useMemo)(
            () => ({
              id: p,
              initial: e,
              isPresent: r,
              custom: s,
              onExitComplete: (t) => {
                for (let e of (d.set(t, !0), d.values())) if (!e) return;
                i && i();
              },
              register: (t) => (d.set(t, !1), () => d.delete(t)),
            }),
            l ? void 0 : [r]
          );
        return (
          (0, n.useMemo)(() => {
            d.forEach((t, e) => d.set(e, !1));
          }, [r]),
          n.useEffect(() => {
            r || d.size || !i || i();
          }, [r]),
          "popLayout" === c && (t = n.createElement(u, { isPresent: r }, t)),
          n.createElement(o.O.Provider, { value: f }, t)
        );
      };
      function h() {
        return new Map();
      }
      var d = r(5364),
        p = r(8868),
        f = r(5487);
      let m = (t) => t.key || "",
        v = ({
          children: t,
          custom: e,
          initial: r = !0,
          onExitComplete: o,
          exitBeforeEnter: a,
          presenceAffectsLayout: l = !0,
          mode: u = "sync",
        }) => {
          var h;
          (0, f.k)(!a, "Replace exitBeforeEnter with mode='wait'");
          let v = (0, n.useContext)(d.p).forceRender || (0, i.N)()[0],
            y = (0, s.t)(),
            g = (function (t) {
              let e = [];
              return (
                n.Children.forEach(t, (t) => {
                  (0, n.isValidElement)(t) && e.push(t);
                }),
                e
              );
            })(t),
            x = g,
            b = (0, n.useRef)(new Map()).current,
            w = (0, n.useRef)(x),
            P = (0, n.useRef)(new Map()).current,
            S = (0, n.useRef)(!0);
          if (
            ((0, p.L)(() => {
              (S.current = !1),
                (function (t, e) {
                  t.forEach((t) => {
                    let r = m(t);
                    e.set(r, t);
                  });
                })(g, P),
                (w.current = x);
            }),
            (h = () => {
              (S.current = !0), P.clear(), b.clear();
            }),
            (0, n.useEffect)(() => () => h(), []),
            S.current)
          )
            return n.createElement(
              n.Fragment,
              null,
              x.map((t) =>
                n.createElement(
                  c,
                  {
                    key: m(t),
                    isPresent: !0,
                    initial: !!r && void 0,
                    presenceAffectsLayout: l,
                    mode: u,
                  },
                  t
                )
              )
            );
          x = [...x];
          let A = w.current.map(m),
            C = g.map(m),
            k = A.length;
          for (let t = 0; t < k; t++) {
            let e = A[t];
            -1 !== C.indexOf(e) || b.has(e) || b.set(e, void 0);
          }
          return (
            "wait" === u && b.size && (x = []),
            b.forEach((t, r) => {
              if (-1 !== C.indexOf(r)) return;
              let i = P.get(r);
              if (!i) return;
              let s = A.indexOf(r),
                a = t;
              a ||
                ((a = n.createElement(
                  c,
                  {
                    key: m(i),
                    isPresent: !1,
                    onExitComplete: () => {
                      P.delete(r), b.delete(r);
                      let t = w.current.findIndex((t) => t.key === r);
                      if ((w.current.splice(t, 1), !b.size)) {
                        if (((w.current = g), !1 === y.current)) return;
                        v(), o && o();
                      }
                    },
                    custom: e,
                    presenceAffectsLayout: l,
                    mode: u,
                  },
                  i
                )),
                b.set(r, a)),
                x.splice(s, 0, a);
            }),
            (x = x.map((t) => {
              let e = t.key;
              return b.has(e)
                ? t
                : n.createElement(
                    c,
                    {
                      key: m(t),
                      isPresent: !0,
                      presenceAffectsLayout: l,
                      mode: u,
                    },
                    t
                  );
            })),
            n.createElement(
              n.Fragment,
              null,
              b.size ? x : x.map((t) => (0, n.cloneElement)(t))
            )
          );
        };
    },
    5947: function (t, e, r) {
      "use strict";
      r.d(e, {
        hO: function () {
          return o;
        },
        oO: function () {
          return s;
        },
      });
      var n = r(7294),
        i = r(240);
      function s() {
        let t = (0, n.useContext)(i.O);
        if (null === t) return [!0, null];
        let { isPresent: e, onExitComplete: r, register: s } = t,
          o = (0, n.useId)();
        return (
          (0, n.useEffect)(() => s(o), []),
          !e && r ? [!1, () => r && r(o)] : [!0]
        );
      }
      function o() {
        var t;
        return null === (t = (0, n.useContext)(i.O)) || t.isPresent;
      }
    },
    5364: function (t, e, r) {
      "use strict";
      r.d(e, {
        p: function () {
          return i;
        },
      });
      var n = r(7294);
      let i = (0, n.createContext)({});
    },
    6014: function (t, e, r) {
      "use strict";
      r.d(e, {
        _: function () {
          return i;
        },
      });
      var n = r(7294);
      let i = (0, n.createContext)({
        transformPagePoint: (t) => t,
        isStatic: !1,
        reducedMotion: "never",
      });
    },
    240: function (t, e, r) {
      "use strict";
      r.d(e, {
        O: function () {
          return i;
        },
      });
      var n = r(7294);
      let i = (0, n.createContext)(null);
    },
    7255: function (t, e, r) {
      "use strict";
      r.d(e, {
        Bn: function () {
          return o;
        },
        X7: function () {
          return a;
        },
        Z7: function () {
          return s;
        },
      });
      var n = r(415),
        i = r(5129);
      let s = (t) => 1 - Math.sin(Math.acos(t)),
        o = (0, i.M)(s),
        a = (0, n.o)(o);
    },
    415: function (t, e, r) {
      "use strict";
      r.d(e, {
        o: function () {
          return n;
        },
      });
      let n = (t) => (e) => e <= 0.5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2;
    },
    5129: function (t, e, r) {
      "use strict";
      r.d(e, {
        M: function () {
          return n;
        },
      });
      let n = (t) => (e) => 1 - t(1 - e);
    },
    3338: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return n;
        },
      });
      let n = (t) => Array.isArray(t) && "number" != typeof t[0];
    },
    2074: function (t, e, r) {
      "use strict";
      r.d(e, {
        Pn: function () {
          return o;
        },
        Wi: function () {
          return s;
        },
        frameData: function () {
          return a;
        },
        S6: function () {
          return l;
        },
      });
      var n = r(1662);
      let i = [
          "prepare",
          "read",
          "update",
          "preRender",
          "render",
          "postRender",
        ],
        {
          schedule: s,
          cancel: o,
          state: a,
          steps: l,
        } = (function (t, e) {
          let r = !1,
            n = !0,
            s = { delta: 0, timestamp: 0, isProcessing: !1 },
            o = i.reduce(
              (t, e) => (
                (t[e] = (function (t) {
                  let e = [],
                    r = [],
                    n = 0,
                    i = !1,
                    s = !1,
                    o = new WeakSet(),
                    a = {
                      schedule: (t, s = !1, a = !1) => {
                        let l = a && i,
                          u = l ? e : r;
                        return (
                          s && o.add(t),
                          -1 === u.indexOf(t) &&
                            (u.push(t), l && i && (n = e.length)),
                          t
                        );
                      },
                      cancel: (t) => {
                        let e = r.indexOf(t);
                        -1 !== e && r.splice(e, 1), o.delete(t);
                      },
                      process: (l) => {
                        if (i) {
                          s = !0;
                          return;
                        }
                        if (
                          ((i = !0),
                          ([e, r] = [r, e]),
                          (r.length = 0),
                          (n = e.length))
                        )
                          for (let r = 0; r < n; r++) {
                            let n = e[r];
                            n(l), o.has(n) && (a.schedule(n), t());
                          }
                        (i = !1), s && ((s = !1), a.process(l));
                      },
                    };
                  return a;
                })(() => (r = !0))),
                t
              ),
              {}
            ),
            a = (t) => o[t].process(s),
            l = (o) => {
              (r = !1),
                (s.delta = n
                  ? 1e3 / 60
                  : Math.max(Math.min(o - s.timestamp, 40), 1)),
                (s.timestamp = o),
                (s.isProcessing = !0),
                i.forEach(a),
                (s.isProcessing = !1),
                r && e && ((n = !1), t(l));
            },
            u = () => {
              (r = !0), (n = !0), s.isProcessing || t(l);
            },
            c = i.reduce((t, e) => {
              let n = o[e];
              return (
                (t[e] = (t, e = !1, i = !1) => (r || u(), n.schedule(t, e, i))),
                t
              );
            }, {});
          return {
            schedule: c,
            cancel: (t) => i.forEach((e) => o[e].cancel(t)),
            state: s,
            steps: o,
          };
        })(
          "undefined" != typeof requestAnimationFrame
            ? requestAnimationFrame
            : n.Z,
          !0
        );
    },
    9442: function (t, e, r) {
      "use strict";
      r.d(e, {
        A: function () {
          return i;
        },
      });
      let n = {
          animation: [
            "animate",
            "variants",
            "whileHover",
            "whileTap",
            "exit",
            "whileInView",
            "whileFocus",
            "whileDrag",
          ],
          exit: ["exit"],
          drag: ["drag", "dragControls"],
          focus: ["whileFocus"],
          hover: ["whileHover", "onHoverStart", "onHoverEnd"],
          tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
          pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
          inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
          layout: ["layout", "layoutId"],
        },
        i = {};
      for (let t in n) i[t] = { isEnabled: (e) => n[t].some((t) => !!e[t]) };
    },
    6816: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return s;
        },
      });
      var n = r(4561),
        i = r(4714);
      function s(t, { layout: e, layoutId: r }) {
        return (
          i.G.has(t) ||
          t.startsWith("origin") ||
          ((e || void 0 !== r) && (!!n.P[t] || "opacity" === t))
        );
      }
    },
    6117: function (t, e, r) {
      "use strict";
      function n({ top: t, left: e, right: r, bottom: n }) {
        return { x: { min: e, max: r }, y: { min: t, max: n } };
      }
      function i({ x: t, y: e }) {
        return { top: e.min, right: t.max, bottom: e.max, left: t.min };
      }
      function s(t, e) {
        if (!e) return t;
        let r = e({ x: t.left, y: t.top }),
          n = e({ x: t.right, y: t.bottom });
        return { top: r.y, left: r.x, bottom: n.y, right: n.x };
      }
      r.d(e, {
        d7: function () {
          return s;
        },
        i8: function () {
          return n;
        },
        z2: function () {
          return i;
        },
      });
    },
    6e3: function (t, e, r) {
      "use strict";
      r.d(e, {
        D2: function () {
          return m;
        },
        YY: function () {
          return u;
        },
        am: function () {
          return h;
        },
        o2: function () {
          return l;
        },
        q2: function () {
          return s;
        },
      });
      var n = r(22),
        i = r(9527);
      function s(t, e, r) {
        return r + e * (t - r);
      }
      function o(t, e, r, n, i) {
        return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e;
      }
      function a(t, e = 0, r = 1, n, i) {
        (t.min = o(t.min, e, r, n, i)), (t.max = o(t.max, e, r, n, i));
      }
      function l(t, { x: e, y: r }) {
        a(t.x, e.translate, e.scale, e.originPoint),
          a(t.y, r.translate, r.scale, r.originPoint);
      }
      function u(t, e, r, n = !1) {
        let s, o;
        let a = r.length;
        if (a) {
          e.x = e.y = 1;
          for (let u = 0; u < a; u++) {
            o = (s = r[u]).projectionDelta;
            let a = s.instance;
            (!a || !a.style || "contents" !== a.style.display) &&
              (n &&
                s.options.layoutScroll &&
                s.scroll &&
                s !== s.root &&
                m(t, { x: -s.scroll.offset.x, y: -s.scroll.offset.y }),
              o && ((e.x *= o.x.scale), (e.y *= o.y.scale), l(t, o)),
              n && (0, i.ud)(s.latestValues) && m(t, s.latestValues));
          }
          (e.x = c(e.x)), (e.y = c(e.y));
        }
      }
      function c(t) {
        return Number.isInteger(t)
          ? t
          : t > 1.0000000000001 || t < 0.999999999999
          ? t
          : 1;
      }
      function h(t, e) {
        (t.min = t.min + e), (t.max = t.max + e);
      }
      function d(t, e, [r, i, s]) {
        let o = void 0 !== e[s] ? e[s] : 0.5,
          l = (0, n.C)(t.min, t.max, o);
        a(t, e[r], e[i], l, e.scale);
      }
      let p = ["x", "scaleX", "originX"],
        f = ["y", "scaleY", "originY"];
      function m(t, e) {
        d(t.x, e, p), d(t.y, e, f);
      }
    },
    1512: function (t, e, r) {
      "use strict";
      r.d(e, {
        dO: function () {
          return o;
        },
        wc: function () {
          return i;
        },
      });
      let n = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
        i = () => ({ x: n(), y: n() }),
        s = () => ({ min: 0, max: 0 }),
        o = () => ({ x: s(), y: s() });
    },
    4561: function (t, e, r) {
      "use strict";
      r.d(e, {
        B: function () {
          return i;
        },
        P: function () {
          return n;
        },
      });
      let n = {};
      function i(t) {
        Object.assign(n, t);
      }
    },
    9527: function (t, e, r) {
      "use strict";
      function n(t) {
        return void 0 === t || 1 === t;
      }
      function i({ scale: t, scaleX: e, scaleY: r }) {
        return !n(t) || !n(e) || !n(r);
      }
      function s(t) {
        return i(t) || o(t) || t.z || t.rotate || t.rotateX || t.rotateY;
      }
      function o(t) {
        var e, r;
        return ((e = t.x) && "0%" !== e) || ((r = t.y) && "0%" !== r);
      }
      r.d(e, {
        D_: function () {
          return o;
        },
        Lj: function () {
          return i;
        },
        ud: function () {
          return s;
        },
      });
    },
    6460: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return s;
        },
        z: function () {
          return o;
        },
      });
      var n = r(6117),
        i = r(6e3);
      function s(t, e) {
        return (0, n.i8)((0, n.d7)(t.getBoundingClientRect(), e));
      }
      function o(t, e, r) {
        let n = s(t, r),
          { scroll: o } = e;
        return o && ((0, i.am)(n.x, o.offset.x), (0, i.am)(n.y, o.offset.y)), n;
      }
    },
    1760: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return H;
        },
      });
      var n = r(8172),
        i = r(5487),
        s = r(7630);
      let o = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
      function a(t, e, r = 1) {
        (0, i.k)(
          r <= 4,
          `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`
        );
        let [n, l] = (function (t) {
          let e = o.exec(t);
          if (!e) return [,];
          let [, r, n] = e;
          return [r, n];
        })(t);
        if (!n) return;
        let u = window.getComputedStyle(e).getPropertyValue(n);
        return u ? u.trim() : (0, s.tm)(l) ? a(l, e, r + 1) : l;
      }
      var l = r(8488),
        u = r(4714),
        c = r(6440),
        h = r(1741),
        d = r(1649),
        p = r(6190);
      let f = new Set([
          "width",
          "height",
          "top",
          "left",
          "right",
          "bottom",
          "x",
          "y",
          "translateX",
          "translateY",
        ]),
        m = (t) => f.has(t),
        v = (t) => Object.keys(t).some(m),
        y = (t) => t === d.Rx || t === p.px,
        g = (t, e) => parseFloat(t.split(", ")[e]),
        x =
          (t, e) =>
          (r, { transform: n }) => {
            if ("none" === n || !n) return 0;
            let i = n.match(/^matrix3d\((.+)\)$/);
            if (i) return g(i[1], e);
            {
              let e = n.match(/^matrix\((.+)\)$/);
              return e ? g(e[1], t) : 0;
            }
          },
        b = new Set(["x", "y", "z"]),
        w = u._.filter((t) => !b.has(t)),
        P = {
          width: ({ x: t }, { paddingLeft: e = "0", paddingRight: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          height: ({ y: t }, { paddingTop: e = "0", paddingBottom: r = "0" }) =>
            t.max - t.min - parseFloat(e) - parseFloat(r),
          top: (t, { top: e }) => parseFloat(e),
          left: (t, { left: e }) => parseFloat(e),
          bottom: ({ y: t }, { top: e }) => parseFloat(e) + (t.max - t.min),
          right: ({ x: t }, { left: e }) => parseFloat(e) + (t.max - t.min),
          x: x(4, 13),
          y: x(5, 14),
        };
      (P.translateX = P.x), (P.translateY = P.y);
      let S = (t, e, r) => {
          let n = e.measureViewportBox(),
            i = e.current,
            s = getComputedStyle(i),
            { display: o } = s,
            a = {};
          "none" === o && e.setStaticValue("display", t.display || "block"),
            r.forEach((t) => {
              a[t] = P[t](n, s);
            }),
            e.render();
          let l = e.measureViewportBox();
          return (
            r.forEach((r) => {
              let n = e.getValue(r);
              n && n.jump(a[r]), (t[r] = P[r](l, s));
            }),
            t
          );
        },
        A = (t, e, r = {}, n = {}) => {
          (e = { ...e }), (n = { ...n });
          let s = Object.keys(e).filter(m),
            o = [],
            a = !1,
            u = [];
          if (
            (s.forEach((s) => {
              let h;
              let d = t.getValue(s);
              if (!t.hasValue(s)) return;
              let f = r[s],
                m = (0, c.C)(f),
                v = e[s];
              if ((0, l.C)(v)) {
                let t = v.length,
                  e = null === v[0] ? 1 : 0;
                (f = v[e]), (m = (0, c.C)(f));
                for (let r = e; r < t && null !== v[r]; r++)
                  h
                    ? (0, i.k)(
                        (0, c.C)(v[r]) === h,
                        "All keyframes must be of the same type"
                      )
                    : ((h = (0, c.C)(v[r])),
                      (0, i.k)(
                        h === m || (y(m) && y(h)),
                        "Keyframes must be of the same dimension as the current value"
                      ));
              } else h = (0, c.C)(v);
              if (m !== h) {
                if (y(m) && y(h)) {
                  let t = d.get();
                  "string" == typeof t && d.set(parseFloat(t)),
                    "string" == typeof v
                      ? (e[s] = parseFloat(v))
                      : Array.isArray(v) &&
                        h === p.px &&
                        (e[s] = v.map(parseFloat));
                } else
                  (null == m ? void 0 : m.transform) &&
                  (null == h ? void 0 : h.transform) &&
                  (0 === f || 0 === v)
                    ? 0 === f
                      ? d.set(h.transform(f))
                      : (e[s] = m.transform(v))
                    : (a ||
                        ((o = (function (t) {
                          let e = [];
                          return (
                            w.forEach((r) => {
                              let n = t.getValue(r);
                              void 0 !== n &&
                                (e.push([r, n.get()]),
                                n.set(r.startsWith("scale") ? 1 : 0));
                            }),
                            e.length && t.render(),
                            e
                          );
                        })(t)),
                        (a = !0)),
                      u.push(s),
                      (n[s] = void 0 !== n[s] ? n[s] : e[s]),
                      d.jump(v));
              }
            }),
            !u.length)
          )
            return { target: e, transitionEnd: n };
          {
            let r = u.indexOf("height") >= 0 ? window.pageYOffset : null,
              i = S(e, t, u);
            return (
              o.length &&
                o.forEach(([e, r]) => {
                  t.getValue(e).set(r);
                }),
              t.render(),
              h.j && null !== r && window.scrollTo({ top: r }),
              { target: i, transitionEnd: n }
            );
          }
        },
        C = (t, e, r, n) => {
          var i, o;
          let l = (function (t, { ...e }, r) {
            let n = t.current;
            if (!(n instanceof Element)) return { target: e, transitionEnd: r };
            for (let i in (r && (r = { ...r }),
            t.values.forEach((t) => {
              let e = t.get();
              if (!(0, s.tm)(e)) return;
              let r = a(e, n);
              r && t.set(r);
            }),
            e)) {
              let t = e[i];
              if (!(0, s.tm)(t)) continue;
              let o = a(t, n);
              o && ((e[i] = o), r || (r = {}), void 0 === r[i] && (r[i] = t));
            }
            return { target: e, transitionEnd: r };
          })(t, e, n);
          return (
            (e = l.target),
            (n = l.transitionEnd),
            (i = e),
            (o = n),
            v(i) ? A(t, i, r, o) : { target: i, transitionEnd: o }
          );
        };
      var k = r(1512),
        T = r(1804);
      let E = { current: null },
        R = { current: !1 };
      var D = r(1560),
        V = r(3234),
        M = r(2490),
        j = r(406),
        L = r(7504),
        O = r(7732),
        I = r(9432),
        _ = r(9442),
        F = r(2963),
        $ = r(6955),
        B = r(2074);
      let N = Object.keys(_.A),
        W = N.length,
        z = [
          "AnimationStart",
          "AnimationComplete",
          "Update",
          "BeforeLayoutMeasure",
          "LayoutMeasure",
          "LayoutAnimationStart",
          "LayoutAnimationComplete",
        ],
        U = F.V.length;
      class G {
        constructor(
          {
            parent: t,
            props: e,
            presenceContext: r,
            reducedMotionConfig: n,
            visualState: i,
          },
          s = {}
        ) {
          (this.current = null),
            (this.children = new Set()),
            (this.isVariantNode = !1),
            (this.isControllingVariants = !1),
            (this.shouldReduceMotion = null),
            (this.values = new Map()),
            (this.features = {}),
            (this.valueSubscriptions = new Map()),
            (this.prevMotionValues = {}),
            (this.events = {}),
            (this.propEventSubscriptions = {}),
            (this.notifyUpdate = () =>
              this.notify("Update", this.latestValues)),
            (this.render = () => {
              this.current &&
                (this.triggerBuild(),
                this.renderInstance(
                  this.current,
                  this.renderState,
                  this.props.style,
                  this.projection
                ));
            }),
            (this.scheduleRender = () => B.Wi.render(this.render, !1, !0));
          let { latestValues: o, renderState: a } = i;
          (this.latestValues = o),
            (this.baseTarget = { ...o }),
            (this.initialValues = e.initial ? { ...o } : {}),
            (this.renderState = a),
            (this.parent = t),
            (this.props = e),
            (this.presenceContext = r),
            (this.depth = t ? t.depth + 1 : 0),
            (this.reducedMotionConfig = n),
            (this.options = s),
            (this.isControllingVariants = (0, L.G)(e)),
            (this.isVariantNode = (0, L.M)(e)),
            this.isVariantNode && (this.variantChildren = new Set()),
            (this.manuallyAnimateOnMount = !!(t && t.current));
          let { willChange: l, ...u } = this.scrapeMotionValuesFromProps(e, {});
          for (let t in u) {
            let e = u[t];
            void 0 !== o[t] &&
              (0, j.i)(e) &&
              (e.set(o[t], !1), (0, M.L)(l) && l.add(t));
          }
        }
        scrapeMotionValuesFromProps(t, e) {
          return {};
        }
        mount(t) {
          (this.current = t),
            $.R.set(t, this),
            this.projection &&
              !this.projection.instance &&
              this.projection.mount(t),
            this.parent &&
              this.isVariantNode &&
              !this.isControllingVariants &&
              (this.removeFromVariantTree = this.parent.addVariantChild(this)),
            this.values.forEach((t, e) => this.bindToMotionValue(e, t)),
            R.current ||
              (function () {
                if (((R.current = !0), h.j)) {
                  if (window.matchMedia) {
                    let t = window.matchMedia("(prefers-reduced-motion)"),
                      e = () => (E.current = t.matches);
                    t.addListener(e), e();
                  } else E.current = !1;
                }
              })(),
            (this.shouldReduceMotion =
              "never" !== this.reducedMotionConfig &&
              ("always" === this.reducedMotionConfig || E.current)),
            this.parent && this.parent.children.add(this),
            this.update(this.props, this.presenceContext);
        }
        unmount() {
          for (let t in ($.R.delete(this.current),
          this.projection && this.projection.unmount(),
          (0, B.Pn)(this.notifyUpdate),
          (0, B.Pn)(this.render),
          this.valueSubscriptions.forEach((t) => t()),
          this.removeFromVariantTree && this.removeFromVariantTree(),
          this.parent && this.parent.children.delete(this),
          this.events))
            this.events[t].clear();
          for (let t in this.features) this.features[t].unmount();
          this.current = null;
        }
        bindToMotionValue(t, e) {
          let r = u.G.has(t),
            n = e.on("change", (e) => {
              (this.latestValues[t] = e),
                this.props.onUpdate && B.Wi.update(this.notifyUpdate, !1, !0),
                r && this.projection && (this.projection.isTransformDirty = !0);
            }),
            i = e.on("renderRequest", this.scheduleRender);
          this.valueSubscriptions.set(t, () => {
            n(), i();
          });
        }
        sortNodePosition(t) {
          return this.current &&
            this.sortInstanceNodePosition &&
            this.type === t.type
            ? this.sortInstanceNodePosition(this.current, t.current)
            : 0;
        }
        loadFeatures({ children: t, ...e }, r, n, i) {
          let s, o;
          for (let t = 0; t < W; t++) {
            let r = N[t],
              {
                isEnabled: n,
                Feature: i,
                ProjectionNode: a,
                MeasureLayout: l,
              } = _.A[r];
            a && (s = a),
              n(e) &&
                (!this.features[r] && i && (this.features[r] = new i(this)),
                l && (o = l));
          }
          if (!this.projection && s) {
            this.projection = new s(
              this.latestValues,
              this.parent && this.parent.projection
            );
            let {
              layoutId: t,
              layout: r,
              drag: n,
              dragConstraints: o,
              layoutScroll: a,
              layoutRoot: l,
            } = e;
            this.projection.setOptions({
              layoutId: t,
              layout: r,
              alwaysMeasureLayout: !!n || (o && (0, T.I)(o)),
              visualElement: this,
              scheduleRender: () => this.scheduleRender(),
              animationType: "string" == typeof r ? r : "both",
              initialPromotionConfig: i,
              layoutScroll: a,
              layoutRoot: l,
            });
          }
          return o;
        }
        updateFeatures() {
          for (let t in this.features) {
            let e = this.features[t];
            e.isMounted ? e.update() : (e.mount(), (e.isMounted = !0));
          }
        }
        triggerBuild() {
          this.build(
            this.renderState,
            this.latestValues,
            this.options,
            this.props
          );
        }
        measureViewportBox() {
          return this.current
            ? this.measureInstanceViewportBox(this.current, this.props)
            : (0, k.dO)();
        }
        getStaticValue(t) {
          return this.latestValues[t];
        }
        setStaticValue(t, e) {
          this.latestValues[t] = e;
        }
        makeTargetAnimatable(t, e = !0) {
          return this.makeTargetAnimatableFromInstance(t, this.props, e);
        }
        update(t, e) {
          (t.transformTemplate || this.props.transformTemplate) &&
            this.scheduleRender(),
            (this.prevProps = this.props),
            (this.props = t),
            (this.prevPresenceContext = this.presenceContext),
            (this.presenceContext = e);
          for (let e = 0; e < z.length; e++) {
            let r = z[e];
            this.propEventSubscriptions[r] &&
              (this.propEventSubscriptions[r](),
              delete this.propEventSubscriptions[r]);
            let n = t["on" + r];
            n && (this.propEventSubscriptions[r] = this.on(r, n));
          }
          (this.prevMotionValues = (function (t, e, r) {
            let { willChange: n } = e;
            for (let i in e) {
              let s = e[i],
                o = r[i];
              if ((0, j.i)(s)) t.addValue(i, s), (0, M.L)(n) && n.add(i);
              else if ((0, j.i)(o))
                t.addValue(i, (0, V.B)(s, { owner: t })),
                  (0, M.L)(n) && n.remove(i);
              else if (o !== s) {
                if (t.hasValue(i)) {
                  let e = t.getValue(i);
                  e.hasAnimated || e.set(s);
                } else {
                  let e = t.getStaticValue(i);
                  t.addValue(i, (0, V.B)(void 0 !== e ? e : s, { owner: t }));
                }
              }
            }
            for (let n in r) void 0 === e[n] && t.removeValue(n);
            return e;
          })(
            this,
            this.scrapeMotionValuesFromProps(t, this.prevProps),
            this.prevMotionValues
          )),
            this.handleChildMotionValue && this.handleChildMotionValue();
        }
        getProps() {
          return this.props;
        }
        getVariant(t) {
          return this.props.variants ? this.props.variants[t] : void 0;
        }
        getDefaultTransition() {
          return this.props.transition;
        }
        getTransformPagePoint() {
          return this.props.transformPagePoint;
        }
        getClosestVariantNode() {
          return this.isVariantNode
            ? this
            : this.parent
            ? this.parent.getClosestVariantNode()
            : void 0;
        }
        getVariantContext(t = !1) {
          if (t) return this.parent ? this.parent.getVariantContext() : void 0;
          if (!this.isControllingVariants) {
            let t = (this.parent && this.parent.getVariantContext()) || {};
            return (
              void 0 !== this.props.initial && (t.initial = this.props.initial),
              t
            );
          }
          let e = {};
          for (let t = 0; t < U; t++) {
            let r = F.V[t],
              n = this.props[r];
            ((0, O.$)(n) || !1 === n) && (e[r] = n);
          }
          return e;
        }
        addVariantChild(t) {
          let e = this.getClosestVariantNode();
          if (e)
            return (
              e.variantChildren && e.variantChildren.add(t),
              () => e.variantChildren.delete(t)
            );
        }
        addValue(t, e) {
          e !== this.values.get(t) &&
            (this.removeValue(t), this.bindToMotionValue(t, e)),
            this.values.set(t, e),
            (this.latestValues[t] = e.get());
        }
        removeValue(t) {
          this.values.delete(t);
          let e = this.valueSubscriptions.get(t);
          e && (e(), this.valueSubscriptions.delete(t)),
            delete this.latestValues[t],
            this.removeValueFromRenderState(t, this.renderState);
        }
        hasValue(t) {
          return this.values.has(t);
        }
        getValue(t, e) {
          if (this.props.values && this.props.values[t])
            return this.props.values[t];
          let r = this.values.get(t);
          return (
            void 0 === r &&
              void 0 !== e &&
              ((r = (0, V.B)(e, { owner: this })), this.addValue(t, r)),
            r
          );
        }
        readValue(t) {
          var e;
          return void 0 === this.latestValues[t] && this.current
            ? null !== (e = this.getBaseTargetFromProps(this.props, t)) &&
              void 0 !== e
              ? e
              : this.readValueFromInstance(this.current, t, this.options)
            : this.latestValues[t];
        }
        setBaseTarget(t, e) {
          this.baseTarget[t] = e;
        }
        getBaseTarget(t) {
          var e;
          let { initial: r } = this.props,
            n =
              "string" == typeof r || "object" == typeof r
                ? null === (e = (0, I.o)(this.props, r)) || void 0 === e
                  ? void 0
                  : e[t]
                : void 0;
          if (r && void 0 !== n) return n;
          let i = this.getBaseTargetFromProps(this.props, t);
          return void 0 === i || (0, j.i)(i)
            ? void 0 !== this.initialValues[t] && void 0 === n
              ? void 0
              : this.baseTarget[t]
            : i;
        }
        on(t, e) {
          return (
            this.events[t] || (this.events[t] = new D.L()),
            this.events[t].add(e)
          );
        }
        notify(t, ...e) {
          this.events[t] && this.events[t].notify(...e);
        }
      }
      class H extends G {
        sortInstanceNodePosition(t, e) {
          return 2 & t.compareDocumentPosition(e) ? 1 : -1;
        }
        getBaseTargetFromProps(t, e) {
          return t.style ? t.style[e] : void 0;
        }
        removeValueFromRenderState(t, { vars: e, style: r }) {
          delete e[t], delete r[t];
        }
        makeTargetAnimatableFromInstance(
          { transition: t, transitionEnd: e, ...r },
          { transformValues: i },
          s
        ) {
          let o = (0, n.P$)(r, t || {}, this);
          if ((i && (e && (e = i(e)), r && (r = i(r)), o && (o = i(o))), s)) {
            (0, n.GJ)(this, r, o);
            let t = C(this, r, o, e);
            (e = t.transitionEnd), (r = t.target);
          }
          return { transition: t, transitionEnd: e, ...r };
        }
      }
    },
    981: function (t, e, r) {
      "use strict";
      r.d(e, {
        E: function () {
          return e8;
        },
      });
      var n = r(7294),
        i = r(6014);
      let s = (0, n.createContext)({});
      var o = r(240),
        a = r(8868);
      let l = (0, n.createContext)({ strict: !1 });
      var u = r(1804),
        c = r(7732),
        h = r(7504);
      function d(t) {
        return Array.isArray(t) ? t.join(" ") : t;
      }
      var p = r(9442),
        f = r(1741),
        m = r(5364);
      let v = (0, n.createContext)({}),
        y = Symbol.for("motionComponentSymbol"),
        g = [
          "animate",
          "circle",
          "defs",
          "desc",
          "ellipse",
          "g",
          "image",
          "line",
          "filter",
          "marker",
          "mask",
          "metadata",
          "path",
          "pattern",
          "polygon",
          "polyline",
          "rect",
          "stop",
          "switch",
          "symbol",
          "svg",
          "text",
          "tspan",
          "use",
          "view",
        ];
      function x(t) {
        if ("string" != typeof t || t.includes("-"));
        else if (g.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
        return !1;
      }
      var b = r(6816),
        w = r(406),
        P = r(8057);
      let S = () => ({
        style: {},
        transform: {},
        transformOrigin: {},
        vars: {},
      });
      function A(t, e, r) {
        for (let n in e) (0, w.i)(e[n]) || (0, b.j)(n, r) || (t[n] = e[n]);
      }
      function C(t, e, r) {
        let i = {},
          s = (function (t, e, r) {
            let i = t.style || {},
              s = {};
            return (
              A(s, i, t),
              Object.assign(
                s,
                (function ({ transformTemplate: t }, e, r) {
                  return (0, n.useMemo)(() => {
                    let n = S();
                    return (
                      (0, P.r)(n, e, { enableHardwareAcceleration: !r }, t),
                      Object.assign({}, n.vars, n.style)
                    );
                  }, [e]);
                })(t, e, r)
              ),
              t.transformValues ? t.transformValues(s) : s
            );
          })(t, e, r);
        return (
          t.drag &&
            !1 !== t.dragListener &&
            ((i.draggable = !1),
            (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
            (s.touchAction =
              !0 === t.drag ? "none" : `pan-${"x" === t.drag ? "y" : "x"}`)),
          void 0 === t.tabIndex &&
            (t.onTap || t.onTapStart || t.whileTap) &&
            (i.tabIndex = 0),
          (i.style = s),
          i
        );
      }
      var k = r(1492),
        T = r(5415);
      let E = () => ({ ...S(), attrs: {} });
      var R = r(9854);
      function D(t, e, r, i) {
        let s = (0, n.useMemo)(() => {
          let r = E();
          return (
            (0, T.i)(
              r,
              e,
              { enableHardwareAcceleration: !1 },
              (0, R.a)(i),
              t.transformTemplate
            ),
            { ...r.attrs, style: { ...r.style } }
          );
        }, [e]);
        if (t.style) {
          let e = {};
          A(e, t.style, t), (s.style = { ...e, ...s.style });
        }
        return s;
      }
      var V = r(8504),
        M = r(6832),
        j = r(2445),
        L = r(9432),
        O = r(6681),
        I = r(8715);
      function _(t) {
        let e = (0, w.i)(t) ? t.get() : t;
        return (0, I.p)(e) ? e.toValue() : e;
      }
      let F = (t) => (e, r) => {
          let i = (0, n.useContext)(s),
            a = (0, n.useContext)(o.O),
            l = () =>
              (function (
                {
                  scrapeMotionValuesFromProps: t,
                  createRenderState: e,
                  onMount: r,
                },
                n,
                i,
                s
              ) {
                let o = {
                  latestValues: (function (t, e, r, n) {
                    let i = {},
                      s = n(t, {});
                    for (let t in s) i[t] = _(s[t]);
                    let { initial: o, animate: a } = t,
                      l = (0, h.G)(t),
                      u = (0, h.M)(t);
                    e &&
                      u &&
                      !l &&
                      !1 !== t.inherit &&
                      (void 0 === o && (o = e.initial),
                      void 0 === a && (a = e.animate));
                    let c = !!r && !1 === r.initial;
                    c = c || !1 === o;
                    let d = c ? a : o;
                    if (d && "boolean" != typeof d && !(0, j.H)(d)) {
                      let e = Array.isArray(d) ? d : [d];
                      e.forEach((e) => {
                        let r = (0, L.o)(t, e);
                        if (!r) return;
                        let { transitionEnd: n, transition: s, ...o } = r;
                        for (let t in o) {
                          let e = o[t];
                          if (Array.isArray(e)) {
                            let t = c ? e.length - 1 : 0;
                            e = e[t];
                          }
                          null !== e && (i[t] = e);
                        }
                        for (let t in n) i[t] = n[t];
                      });
                    }
                    return i;
                  })(n, i, s, t),
                  renderState: e(),
                };
                return r && (o.mount = (t) => r(n, t, o)), o;
              })(t, e, i, a);
          return r ? l() : (0, O.h)(l);
        },
        $ = {
          useVisualState: F({
            scrapeMotionValuesFromProps: M.U,
            createRenderState: E,
            onMount: (t, e, { renderState: r, latestValues: n }) => {
              try {
                r.dimensions =
                  "function" == typeof e.getBBox
                    ? e.getBBox()
                    : e.getBoundingClientRect();
              } catch (t) {
                r.dimensions = { x: 0, y: 0, width: 0, height: 0 };
              }
              (0, T.i)(
                r,
                n,
                { enableHardwareAcceleration: !1 },
                (0, R.a)(e.tagName),
                t.transformTemplate
              ),
                (0, V.K)(e, r);
            },
          }),
        };
      var B = r(189);
      let N = {
        useVisualState: F({
          scrapeMotionValuesFromProps: B.U,
          createRenderState: S,
        }),
      };
      function W(t, e, r, n = { passive: !0 }) {
        return t.addEventListener(e, r, n), () => t.removeEventListener(e, r);
      }
      let z = (t) =>
        "mouse" === t.pointerType
          ? "number" != typeof t.button || t.button <= 0
          : !1 !== t.isPrimary;
      function U(t, e = "page") {
        return { point: { x: t[e + "X"], y: t[e + "Y"] } };
      }
      let G = (t) => (e) => z(e) && t(e, U(e));
      function H(t, e, r, n) {
        return W(t, e, G(r), n);
      }
      var Y = r(3624);
      function X(t) {
        let e = null;
        return () =>
          null === e &&
          ((e = t),
          () => {
            e = null;
          });
      }
      let Z = X("dragHorizontal"),
        q = X("dragVertical");
      function K(t) {
        let e = !1;
        if ("y" === t) e = q();
        else if ("x" === t) e = Z();
        else {
          let t = Z(),
            r = q();
          t && r
            ? (e = () => {
                t(), r();
              })
            : (t && t(), r && r());
        }
        return e;
      }
      function J() {
        let t = K(!0);
        return !t || (t(), !1);
      }
      class Q {
        constructor(t) {
          (this.isMounted = !1), (this.node = t);
        }
        update() {}
      }
      var tt = r(2074);
      function te(t, e) {
        let r = "pointer" + (e ? "enter" : "leave"),
          n = "onHover" + (e ? "Start" : "End");
        return H(
          t.current,
          r,
          (r, i) => {
            if ("touch" === r.type || J()) return;
            let s = t.getProps();
            t.animationState &&
              s.whileHover &&
              t.animationState.setActive("whileHover", e),
              s[n] && tt.Wi.update(() => s[n](r, i));
          },
          { passive: !t.getProps()[n] }
        );
      }
      let tr = (t, e) => !!e && (t === e || tr(t, e.parentElement));
      var tn = r(1662);
      function ti(t, e) {
        if (!e) return;
        let r = new PointerEvent("pointer" + t);
        e(r, U(r));
      }
      let ts = new WeakMap(),
        to = new WeakMap(),
        ta = (t) => {
          let e = ts.get(t.target);
          e && e(t);
        },
        tl = (t) => {
          t.forEach(ta);
        },
        tu = { some: 0, all: 1 };
      var tc = r(8488);
      function th(t, e) {
        if (!Array.isArray(e)) return !1;
        let r = e.length;
        if (r !== t.length) return !1;
        for (let n = 0; n < r; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      var td = r(2248),
        tp = r(2963),
        tf = r(8254);
      function tm(t, e, r = {}) {
        let n = (0, td.x)(t, e, r.custom),
          { transition: i = t.getDefaultTransition() || {} } = n || {};
        r.transitionOverride && (i = r.transitionOverride);
        let s = n
            ? () => Promise.all((0, tf.w)(t, n, r))
            : () => Promise.resolve(),
          o =
            t.variantChildren && t.variantChildren.size
              ? (n = 0) => {
                  let {
                    delayChildren: s = 0,
                    staggerChildren: o,
                    staggerDirection: a,
                  } = i;
                  return (function (t, e, r = 0, n = 0, i = 1, s) {
                    let o = [],
                      a = (t.variantChildren.size - 1) * n,
                      l = 1 === i ? (t = 0) => t * n : (t = 0) => a - t * n;
                    return (
                      Array.from(t.variantChildren)
                        .sort(tv)
                        .forEach((t, n) => {
                          t.notify("AnimationStart", e),
                            o.push(
                              tm(t, e, { ...s, delay: r + l(n) }).then(() =>
                                t.notify("AnimationComplete", e)
                              )
                            );
                        }),
                      Promise.all(o)
                    );
                  })(t, e, s + n, o, a, r);
                }
              : () => Promise.resolve(),
          { when: a } = i;
        if (!a) return Promise.all([s(), o(r.delay)]);
        {
          let [t, e] = "beforeChildren" === a ? [s, o] : [o, s];
          return t().then(() => e());
        }
      }
      function tv(t, e) {
        return t.sortNodePosition(e);
      }
      let ty = [...tp.e].reverse(),
        tg = tp.e.length;
      function tx(t = !1) {
        return {
          isActive: t,
          protectedKeys: {},
          needsAnimating: {},
          prevResolvedValues: {},
        };
      }
      let tb = 0;
      var tw = r(5487),
        tP = r(6917);
      let tS = (t, e) => Math.abs(t - e);
      class tA {
        constructor(t, e, { transformPagePoint: r } = {}) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let t = tT(this.lastMoveEventInfo, this.history),
                e = null !== this.startEvent,
                r =
                  (function (t, e) {
                    let r = tS(t.x, e.x),
                      n = tS(t.y, e.y);
                    return Math.sqrt(r ** 2 + n ** 2);
                  })(t.offset, { x: 0, y: 0 }) >= 3;
              if (!e && !r) return;
              let { point: n } = t,
                { timestamp: i } = tt.frameData;
              this.history.push({ ...n, timestamp: i });
              let { onStart: s, onMove: o } = this.handlers;
              e ||
                (s && s(this.lastMoveEvent, t),
                (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, t);
            }),
            (this.handlePointerMove = (t, e) => {
              (this.lastMoveEvent = t),
                (this.lastMoveEventInfo = tC(e, this.transformPagePoint)),
                tt.Wi.update(this.updatePoint, !0);
            }),
            (this.handlePointerUp = (t, e) => {
              if ((this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo)))
                return;
              let { onEnd: r, onSessionEnd: n } = this.handlers,
                i = tT(
                  "pointercancel" === t.type
                    ? this.lastMoveEventInfo
                    : tC(e, this.transformPagePoint),
                  this.history
                );
              this.startEvent && r && r(t, i), n && n(t, i);
            }),
            !z(t))
          )
            return;
          (this.handlers = e), (this.transformPagePoint = r);
          let n = U(t),
            i = tC(n, this.transformPagePoint),
            { point: s } = i,
            { timestamp: o } = tt.frameData;
          this.history = [{ ...s, timestamp: o }];
          let { onSessionStart: a } = e;
          a && a(t, tT(i, this.history)),
            (this.removeListeners = (0, Y.z)(
              H(window, "pointermove", this.handlePointerMove),
              H(window, "pointerup", this.handlePointerUp),
              H(window, "pointercancel", this.handlePointerUp)
            ));
        }
        updateHandlers(t) {
          this.handlers = t;
        }
        end() {
          this.removeListeners && this.removeListeners(),
            (0, tt.Pn)(this.updatePoint);
        }
      }
      function tC(t, e) {
        return e ? { point: e(t.point) } : t;
      }
      function tk(t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }
      function tT({ point: t }, e) {
        return {
          point: t,
          delta: tk(t, tE(e)),
          offset: tk(t, e[0]),
          velocity: (function (t, e) {
            if (t.length < 2) return { x: 0, y: 0 };
            let r = t.length - 1,
              n = null,
              i = tE(t);
            for (
              ;
              r >= 0 &&
              ((n = t[r]), !(i.timestamp - n.timestamp > (0, tP.w)(0.1)));

            )
              r--;
            if (!n) return { x: 0, y: 0 };
            let s = (0, tP.X)(i.timestamp - n.timestamp);
            if (0 === s) return { x: 0, y: 0 };
            let o = { x: (i.x - n.x) / s, y: (i.y - n.y) / s };
            return o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o;
          })(e, 0),
        };
      }
      function tE(t) {
        return t[t.length - 1];
      }
      var tR = r(3967),
        tD = r(22);
      function tV(t) {
        return t.max - t.min;
      }
      function tM(t, e = 0, r = 0.01) {
        return Math.abs(t - e) <= r;
      }
      function tj(t, e, r, n = 0.5) {
        (t.origin = n),
          (t.originPoint = (0, tD.C)(e.min, e.max, t.origin)),
          (t.scale = tV(r) / tV(e)),
          (tM(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1),
          (t.translate = (0, tD.C)(r.min, r.max, t.origin) - t.originPoint),
          (tM(t.translate) || isNaN(t.translate)) && (t.translate = 0);
      }
      function tL(t, e, r, n) {
        tj(t.x, e.x, r.x, n ? n.originX : void 0),
          tj(t.y, e.y, r.y, n ? n.originY : void 0);
      }
      function tO(t, e, r) {
        (t.min = r.min + e.min), (t.max = t.min + tV(e));
      }
      function tI(t, e, r) {
        (t.min = e.min - r.min), (t.max = t.min + tV(e));
      }
      function t_(t, e, r) {
        tI(t.x, e.x, r.x), tI(t.y, e.y, r.y);
      }
      var tF = r(4169);
      function t$(t, e, r) {
        return {
          min: void 0 !== e ? t.min + e : void 0,
          max: void 0 !== r ? t.max + r - (t.max - t.min) : void 0,
        };
      }
      function tB(t, e) {
        let r = e.min - t.min,
          n = e.max - t.max;
        return (
          e.max - e.min < t.max - t.min && ([r, n] = [n, r]), { min: r, max: n }
        );
      }
      function tN(t, e, r) {
        return { min: tW(t, e), max: tW(t, r) };
      }
      function tW(t, e) {
        return "number" == typeof t ? t : t[e] || 0;
      }
      var tz = r(1512);
      function tU(t) {
        return [t("x"), t("y")];
      }
      var tG = r(6460),
        tH = r(6117),
        tY = r(6190),
        tX = r(6719);
      let tZ = new WeakMap();
      class tq {
        constructor(t) {
          (this.openGlobalLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = (0, tz.dO)()),
            (this.visualElement = t);
        }
        start(t, { snapToCursor: e = !1 } = {}) {
          let { presenceContext: r } = this.visualElement;
          (r && !1 === r.isPresent) ||
            (this.panSession = new tA(
              t,
              {
                onSessionStart: (t) => {
                  this.stopAnimation(),
                    e && this.snapToCursor(U(t, "page").point);
                },
                onStart: (t, e) => {
                  let {
                    drag: r,
                    dragPropagation: n,
                    onDragStart: i,
                  } = this.getProps();
                  if (
                    r &&
                    !n &&
                    (this.openGlobalLock && this.openGlobalLock(),
                    (this.openGlobalLock = K(r)),
                    !this.openGlobalLock)
                  )
                    return;
                  (this.isDragging = !0),
                    (this.currentDirection = null),
                    this.resolveConstraints(),
                    this.visualElement.projection &&
                      ((this.visualElement.projection.isAnimationBlocked = !0),
                      (this.visualElement.projection.target = void 0)),
                    tU((t) => {
                      let e = this.getAxisMotionValue(t).get() || 0;
                      if (tY.aQ.test(e)) {
                        let { projection: r } = this.visualElement;
                        if (r && r.layout) {
                          let n = r.layout.layoutBox[t];
                          if (n) {
                            let t = tV(n);
                            e = t * (parseFloat(e) / 100);
                          }
                        }
                      }
                      this.originPoint[t] = e;
                    }),
                    i && tt.Wi.update(() => i(t, e), !1, !0);
                  let { animationState: s } = this.visualElement;
                  s && s.setActive("whileDrag", !0);
                },
                onMove: (t, e) => {
                  let {
                    dragPropagation: r,
                    dragDirectionLock: n,
                    onDirectionLock: i,
                    onDrag: s,
                  } = this.getProps();
                  if (!r && !this.openGlobalLock) return;
                  let { offset: o } = e;
                  if (n && null === this.currentDirection) {
                    (this.currentDirection = (function (t, e = 10) {
                      let r = null;
                      return (
                        Math.abs(t.y) > e
                          ? (r = "y")
                          : Math.abs(t.x) > e && (r = "x"),
                        r
                      );
                    })(o)),
                      null !== this.currentDirection &&
                        i &&
                        i(this.currentDirection);
                    return;
                  }
                  this.updateAxis("x", e.point, o),
                    this.updateAxis("y", e.point, o),
                    this.visualElement.render(),
                    s && s(t, e);
                },
                onSessionEnd: (t, e) => this.stop(t, e),
              },
              { transformPagePoint: this.visualElement.getTransformPagePoint() }
            ));
        }
        stop(t, e) {
          let r = this.isDragging;
          if ((this.cancel(), !r)) return;
          let { velocity: n } = e;
          this.startAnimation(n);
          let { onDragEnd: i } = this.getProps();
          i && tt.Wi.update(() => i(t, e));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: t, animationState: e } = this.visualElement;
          t && (t.isAnimationBlocked = !1),
            this.panSession && this.panSession.end(),
            (this.panSession = void 0);
          let { dragPropagation: r } = this.getProps();
          !r &&
            this.openGlobalLock &&
            (this.openGlobalLock(), (this.openGlobalLock = null)),
            e && e.setActive("whileDrag", !1);
        }
        updateAxis(t, e, r) {
          let { drag: n } = this.getProps();
          if (!r || !tK(t, n, this.currentDirection)) return;
          let i = this.getAxisMotionValue(t),
            s = this.originPoint[t] + r[t];
          this.constraints &&
            this.constraints[t] &&
            (s = (function (t, { min: e, max: r }, n) {
              return (
                void 0 !== e && t < e
                  ? (t = n ? (0, tD.C)(e, t, n.min) : Math.max(t, e))
                  : void 0 !== r &&
                    t > r &&
                    (t = n ? (0, tD.C)(r, t, n.max) : Math.min(t, r)),
                t
              );
            })(s, this.constraints[t], this.elastic[t])),
            i.set(s);
        }
        resolveConstraints() {
          let { dragConstraints: t, dragElastic: e } = this.getProps(),
            { layout: r } = this.visualElement.projection || {},
            n = this.constraints;
          t && (0, u.I)(t)
            ? this.constraints ||
              (this.constraints = this.resolveRefConstraints())
            : t && r
            ? (this.constraints = (function (
                t,
                { top: e, left: r, bottom: n, right: i }
              ) {
                return { x: t$(t.x, r, i), y: t$(t.y, e, n) };
              })(r.layoutBox, t))
            : (this.constraints = !1),
            (this.elastic = (function (t = 0.35) {
              return (
                !1 === t ? (t = 0) : !0 === t && (t = 0.35),
                { x: tN(t, "left", "right"), y: tN(t, "top", "bottom") }
              );
            })(e)),
            n !== this.constraints &&
              r &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              tU((t) => {
                this.getAxisMotionValue(t) &&
                  (this.constraints[t] = (function (t, e) {
                    let r = {};
                    return (
                      void 0 !== e.min && (r.min = e.min - t.min),
                      void 0 !== e.max && (r.max = e.max - t.min),
                      r
                    );
                  })(r.layoutBox[t], this.constraints[t]));
              });
        }
        resolveRefConstraints() {
          var t;
          let { dragConstraints: e, onMeasureDragConstraints: r } =
            this.getProps();
          if (!e || !(0, u.I)(e)) return !1;
          let n = e.current;
          (0, tw.k)(
            null !== n,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
          );
          let { projection: i } = this.visualElement;
          if (!i || !i.layout) return !1;
          let s = (0, tG.z)(
              n,
              i.root,
              this.visualElement.getTransformPagePoint()
            ),
            o = { x: tB((t = i.layout.layoutBox).x, s.x), y: tB(t.y, s.y) };
          if (r) {
            let t = r((0, tH.z2)(o));
            (this.hasMutatedConstraints = !!t), t && (o = (0, tH.i8)(t));
          }
          return o;
        }
        startAnimation(t) {
          let {
              drag: e,
              dragMomentum: r,
              dragElastic: n,
              dragTransition: i,
              dragSnapToOrigin: s,
              onDragTransitionEnd: o,
            } = this.getProps(),
            a = this.constraints || {},
            l = tU((o) => {
              if (!tK(o, e, this.currentDirection)) return;
              let l = (a && a[o]) || {};
              s && (l = { min: 0, max: 0 });
              let u = {
                type: "inertia",
                velocity: r ? t[o] : 0,
                bounceStiffness: n ? 200 : 1e6,
                bounceDamping: n ? 40 : 1e7,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...i,
                ...l,
              };
              return this.startAxisValueAnimation(o, u);
            });
          return Promise.all(l).then(o);
        }
        startAxisValueAnimation(t, e) {
          let r = this.getAxisMotionValue(t);
          return r.start((0, tX.v)(t, r, 0, e));
        }
        stopAnimation() {
          tU((t) => this.getAxisMotionValue(t).stop());
        }
        getAxisMotionValue(t) {
          let e = "_drag" + t.toUpperCase(),
            r = this.visualElement.getProps(),
            n = r[e];
          return (
            n ||
            this.visualElement.getValue(
              t,
              (r.initial ? r.initial[t] : void 0) || 0
            )
          );
        }
        snapToCursor(t) {
          tU((e) => {
            let { drag: r } = this.getProps();
            if (!tK(e, r, this.currentDirection)) return;
            let { projection: n } = this.visualElement,
              i = this.getAxisMotionValue(e);
            if (n && n.layout) {
              let { min: r, max: s } = n.layout.layoutBox[e];
              i.set(t[e] - (0, tD.C)(r, s, 0.5));
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: t, dragConstraints: e } = this.getProps(),
            { projection: r } = this.visualElement;
          if (!(0, u.I)(e) || !r || !this.constraints) return;
          this.stopAnimation();
          let n = { x: 0, y: 0 };
          tU((t) => {
            let e = this.getAxisMotionValue(t);
            if (e) {
              let r = e.get();
              n[t] = (function (t, e) {
                let r = 0.5,
                  n = tV(t),
                  i = tV(e);
                return (
                  i > n
                    ? (r = (0, tR.Y)(e.min, e.max - n, t.min))
                    : n > i && (r = (0, tR.Y)(t.min, t.max - i, e.min)),
                  (0, tF.u)(0, 1, r)
                );
              })({ min: r, max: r }, this.constraints[t]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          (this.visualElement.current.style.transform = i ? i({}, "") : "none"),
            r.root && r.root.updateScroll(),
            r.updateLayout(),
            this.resolveConstraints(),
            tU((e) => {
              if (!tK(e, t, null)) return;
              let r = this.getAxisMotionValue(e),
                { min: i, max: s } = this.constraints[e];
              r.set((0, tD.C)(i, s, n[e]));
            });
        }
        addListeners() {
          if (!this.visualElement.current) return;
          tZ.set(this.visualElement, this);
          let t = this.visualElement.current,
            e = H(t, "pointerdown", (t) => {
              let { drag: e, dragListener: r = !0 } = this.getProps();
              e && r && this.start(t);
            }),
            r = () => {
              let { dragConstraints: t } = this.getProps();
              (0, u.I)(t) && (this.constraints = this.resolveRefConstraints());
            },
            { projection: n } = this.visualElement,
            i = n.addEventListener("measure", r);
          n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()),
            r();
          let s = W(window, "resize", () =>
              this.scalePositionWithinConstraints()
            ),
            o = n.addEventListener(
              "didUpdate",
              ({ delta: t, hasLayoutChanged: e }) => {
                this.isDragging &&
                  e &&
                  (tU((e) => {
                    let r = this.getAxisMotionValue(e);
                    r &&
                      ((this.originPoint[e] += t[e].translate),
                      r.set(r.get() + t[e].translate));
                  }),
                  this.visualElement.render());
              }
            );
          return () => {
            s(), e(), i(), o && o();
          };
        }
        getProps() {
          let t = this.visualElement.getProps(),
            {
              drag: e = !1,
              dragDirectionLock: r = !1,
              dragPropagation: n = !1,
              dragConstraints: i = !1,
              dragElastic: s = 0.35,
              dragMomentum: o = !0,
            } = t;
          return {
            ...t,
            drag: e,
            dragDirectionLock: r,
            dragPropagation: n,
            dragConstraints: i,
            dragElastic: s,
            dragMomentum: o,
          };
        }
      }
      function tK(t, e, r) {
        return (!0 === e || e === t) && (null === r || r === t);
      }
      let tJ = (t) => (e, r) => {
        t && tt.Wi.update(() => t(e, r));
      };
      var tQ = r(5947);
      let t0 = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 };
      function t1(t, e) {
        return e.max === e.min ? 0 : (t / (e.max - e.min)) * 100;
      }
      let t5 = {
        correct: (t, e) => {
          if (!e.target) return t;
          if ("string" == typeof t) {
            if (!tY.px.test(t)) return t;
            t = parseFloat(t);
          }
          let r = t1(t, e.target.x),
            n = t1(t, e.target.y);
          return `${r}% ${n}%`;
        },
      };
      var t2 = r(1550),
        t4 = r(4561);
      class t6 extends n.Component {
        componentDidMount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
              layoutId: n,
            } = this.props,
            { projection: i } = t;
          (0, t4.B)(t8),
            i &&
              (e.group && e.group.add(i),
              r && r.register && n && r.register(i),
              i.root.didUpdate(),
              i.addEventListener("animationComplete", () => {
                this.safeToRemove();
              }),
              i.setOptions({
                ...i.options,
                onExitComplete: () => this.safeToRemove(),
              })),
            (t0.hasEverUpdated = !0);
        }
        getSnapshotBeforeUpdate(t) {
          let {
              layoutDependency: e,
              visualElement: r,
              drag: n,
              isPresent: i,
            } = this.props,
            s = r.projection;
          return (
            s &&
              ((s.isPresent = i),
              n || t.layoutDependency !== e || void 0 === e
                ? s.willUpdate()
                : this.safeToRemove(),
              t.isPresent === i ||
                (i
                  ? s.promote()
                  : s.relegate() ||
                    tt.Wi.postRender(() => {
                      let t = s.getStack();
                      (t && t.members.length) || this.safeToRemove();
                    }))),
            null
          );
        }
        componentDidUpdate() {
          let { projection: t } = this.props.visualElement;
          t &&
            (t.root.didUpdate(),
            queueMicrotask(() => {
              !t.currentAnimation && t.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let {
              visualElement: t,
              layoutGroup: e,
              switchLayoutGroup: r,
            } = this.props,
            { projection: n } = t;
          n &&
            (n.scheduleCheckAfterUnmount(),
            e && e.group && e.group.remove(n),
            r && r.deregister && r.deregister(n));
        }
        safeToRemove() {
          let { safeToRemove: t } = this.props;
          t && t();
        }
        render() {
          return null;
        }
      }
      function t7(t) {
        let [e, r] = (0, tQ.oO)(),
          i = (0, n.useContext)(m.p);
        return n.createElement(t6, {
          ...t,
          layoutGroup: i,
          switchLayoutGroup: (0, n.useContext)(v),
          isPresent: e,
          safeToRemove: r,
        });
      }
      let t8 = {
        borderRadius: {
          ...t5,
          applyTo: [
            "borderTopLeftRadius",
            "borderTopRightRadius",
            "borderBottomLeftRadius",
            "borderBottomRightRadius",
          ],
        },
        borderTopLeftRadius: t5,
        borderTopRightRadius: t5,
        borderBottomLeftRadius: t5,
        borderBottomRightRadius: t5,
        boxShadow: {
          correct: (t, { treeScale: e, projectionDelta: r }) => {
            let n = t2.P.parse(t);
            if (n.length > 5) return t;
            let i = t2.P.createTransformer(t),
              s = "number" != typeof n[0] ? 1 : 0,
              o = r.x.scale * e.x,
              a = r.y.scale * e.y;
            (n[0 + s] /= o), (n[1 + s] /= a);
            let l = (0, tD.C)(o, a, 0.5);
            return (
              "number" == typeof n[2 + s] && (n[2 + s] /= l),
              "number" == typeof n[3 + s] && (n[3 + s] /= l),
              i(n)
            );
          },
        },
      };
      var t3 = r(1560),
        t9 = r(7255);
      let et = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
        ee = et.length,
        er = (t) => ("string" == typeof t ? parseFloat(t) : t),
        en = (t) => "number" == typeof t || tY.px.test(t);
      function ei(t, e) {
        return void 0 !== t[e] ? t[e] : t.borderRadius;
      }
      let es = ea(0, 0.5, t9.Bn),
        eo = ea(0.5, 0.95, tn.Z);
      function ea(t, e, r) {
        return (n) => (n < t ? 0 : n > e ? 1 : r((0, tR.Y)(t, e, n)));
      }
      function el(t, e) {
        (t.min = e.min), (t.max = e.max);
      }
      function eu(t, e) {
        el(t.x, e.x), el(t.y, e.y);
      }
      var ec = r(6e3);
      function eh(t, e, r, n, i) {
        return (
          (t -= e),
          (t = (0, ec.q2)(t, 1 / r, n)),
          void 0 !== i && (t = (0, ec.q2)(t, 1 / i, n)),
          t
        );
      }
      function ed(t, e, [r, n, i], s, o) {
        !(function (t, e = 0, r = 1, n = 0.5, i, s = t, o = t) {
          if (tY.aQ.test(e)) {
            e = parseFloat(e);
            let t = (0, tD.C)(o.min, o.max, e / 100);
            e = t - o.min;
          }
          if ("number" != typeof e) return;
          let a = (0, tD.C)(s.min, s.max, n);
          t === s && (a -= e),
            (t.min = eh(t.min, e, r, a, i)),
            (t.max = eh(t.max, e, r, a, i));
        })(t, e[r], e[n], e[i], e.scale, s, o);
      }
      let ep = ["x", "scaleX", "originX"],
        ef = ["y", "scaleY", "originY"];
      function em(t, e, r, n) {
        ed(t.x, e, ep, r ? r.x : void 0, n ? n.x : void 0),
          ed(t.y, e, ef, r ? r.y : void 0, n ? n.y : void 0);
      }
      var ev = r(1056);
      function ey(t) {
        return 0 === t.translate && 1 === t.scale;
      }
      function eg(t) {
        return ey(t.x) && ey(t.y);
      }
      function ex(t, e) {
        return (
          Math.round(t.x.min) === Math.round(e.x.min) &&
          Math.round(t.x.max) === Math.round(e.x.max) &&
          Math.round(t.y.min) === Math.round(e.y.min) &&
          Math.round(t.y.max) === Math.round(e.y.max)
        );
      }
      function eb(t) {
        return tV(t.x) / tV(t.y);
      }
      var ew = r(10);
      class eP {
        constructor() {
          this.members = [];
        }
        add(t) {
          (0, ew.y4)(this.members, t), t.scheduleRender();
        }
        remove(t) {
          if (
            ((0, ew.cl)(this.members, t),
            t === this.prevLead && (this.prevLead = void 0),
            t === this.lead)
          ) {
            let t = this.members[this.members.length - 1];
            t && this.promote(t);
          }
        }
        relegate(t) {
          let e;
          let r = this.members.findIndex((e) => t === e);
          if (0 === r) return !1;
          for (let t = r; t >= 0; t--) {
            let r = this.members[t];
            if (!1 !== r.isPresent) {
              e = r;
              break;
            }
          }
          return !!e && (this.promote(e), !0);
        }
        promote(t, e) {
          let r = this.lead;
          if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
            r.instance && r.scheduleRender(),
              t.scheduleRender(),
              (t.resumeFrom = r),
              e && (t.resumeFrom.preserveOpacity = !0),
              r.snapshot &&
                ((t.snapshot = r.snapshot),
                (t.snapshot.latestValues =
                  r.animationValues || r.latestValues)),
              t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            let { crossfade: n } = t.options;
            !1 === n && r.hide();
          }
        }
        exitAnimationComplete() {
          this.members.forEach((t) => {
            let { options: e, resumingFrom: r } = t;
            e.onExitComplete && e.onExitComplete(),
              r && r.options.onExitComplete && r.options.onExitComplete();
          });
        }
        scheduleRender() {
          this.members.forEach((t) => {
            t.instance && t.scheduleRender(!1);
          });
        }
        removeLeadSnapshot() {
          this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
        }
      }
      function eS(t, e, r) {
        let n = "",
          i = t.x.translate / e.x,
          s = t.y.translate / e.y;
        if (
          ((i || s) && (n = `translate3d(${i}px, ${s}px, 0) `),
          (1 !== e.x || 1 !== e.y) && (n += `scale(${1 / e.x}, ${1 / e.y}) `),
          r)
        ) {
          let { rotate: t, rotateX: e, rotateY: i } = r;
          t && (n += `rotate(${t}deg) `),
            e && (n += `rotateX(${e}deg) `),
            i && (n += `rotateY(${i}deg) `);
        }
        let o = t.x.scale * e.x,
          a = t.y.scale * e.y;
        return (1 !== o || 1 !== a) && (n += `scale(${o}, ${a})`), n || "none";
      }
      var eA = r(9527);
      let eC = (t, e) => t.depth - e.depth;
      class ek {
        constructor() {
          (this.children = []), (this.isDirty = !1);
        }
        add(t) {
          (0, ew.y4)(this.children, t), (this.isDirty = !0);
        }
        remove(t) {
          (0, ew.cl)(this.children, t), (this.isDirty = !0);
        }
        forEach(t) {
          this.isDirty && this.children.sort(eC),
            (this.isDirty = !1),
            this.children.forEach(t);
        }
      }
      var eT = r(5194),
        eE = r(1059);
      let eR = ["", "X", "Y", "Z"],
        eD = 0,
        eV = {
          type: "projectionFrame",
          totalNodes: 0,
          resolvedTargetDeltas: 0,
          recalculatedProjection: 0,
        };
      function eM({
        attachResizeListener: t,
        defaultParent: e,
        measureScroll: r,
        checkIsScrollRoot: n,
        resetTransform: i,
      }) {
        return class {
          constructor(t = {}, r = null == e ? void 0 : e()) {
            (this.id = eD++),
              (this.animationId = 0),
              (this.children = new Set()),
              (this.options = {}),
              (this.isTreeAnimating = !1),
              (this.isAnimationBlocked = !1),
              (this.isLayoutDirty = !1),
              (this.isProjectionDirty = !1),
              (this.isSharedProjectionDirty = !1),
              (this.isTransformDirty = !1),
              (this.updateManuallyBlocked = !1),
              (this.updateBlockedByResize = !1),
              (this.isUpdating = !1),
              (this.isSVG = !1),
              (this.needsReset = !1),
              (this.shouldResetTransform = !1),
              (this.treeScale = { x: 1, y: 1 }),
              (this.eventHandlers = new Map()),
              (this.hasTreeAnimated = !1),
              (this.updateScheduled = !1),
              (this.checkUpdateFailed = () => {
                this.isUpdating &&
                  ((this.isUpdating = !1), this.clearAllSnapshots());
              }),
              (this.updateProjection = () => {
                (eV.totalNodes =
                  eV.resolvedTargetDeltas =
                  eV.recalculatedProjection =
                    0),
                  this.nodes.forEach(eO),
                  this.nodes.forEach(eW),
                  this.nodes.forEach(ez),
                  this.nodes.forEach(eI),
                  window.MotionDebug && window.MotionDebug.record(eV);
              }),
              (this.hasProjected = !1),
              (this.isVisible = !0),
              (this.animationProgress = 0),
              (this.sharedNodes = new Map()),
              (this.latestValues = t),
              (this.root = r ? r.root || r : this),
              (this.path = r ? [...r.path, r] : []),
              (this.parent = r),
              (this.depth = r ? r.depth + 1 : 0);
            for (let t = 0; t < this.path.length; t++)
              this.path[t].shouldResetTransform = !0;
            this.root === this && (this.nodes = new ek());
          }
          addEventListener(t, e) {
            return (
              this.eventHandlers.has(t) ||
                this.eventHandlers.set(t, new t3.L()),
              this.eventHandlers.get(t).add(e)
            );
          }
          notifyListeners(t, ...e) {
            let r = this.eventHandlers.get(t);
            r && r.notify(...e);
          }
          hasListeners(t) {
            return this.eventHandlers.has(t);
          }
          mount(e, r = this.root.hasTreeAnimated) {
            if (this.instance) return;
            (this.isSVG = (0, eT.v)(e)), (this.instance = e);
            let { layoutId: n, layout: i, visualElement: s } = this.options;
            if (
              (s && !s.current && s.mount(e),
              this.root.nodes.add(this),
              this.parent && this.parent.children.add(this),
              r && (i || n) && (this.isLayoutDirty = !0),
              t)
            ) {
              let r;
              let n = () => (this.root.updateBlockedByResize = !1);
              t(e, () => {
                (this.root.updateBlockedByResize = !0),
                  r && r(),
                  (r = (function (t, e) {
                    let r = performance.now(),
                      n = ({ timestamp: i }) => {
                        let s = i - r;
                        s >= e && ((0, tt.Pn)(n), t(s - e));
                      };
                    return tt.Wi.read(n, !0), () => (0, tt.Pn)(n);
                  })(n, 250)),
                  t0.hasAnimatedSinceResize &&
                    ((t0.hasAnimatedSinceResize = !1), this.nodes.forEach(eN));
              });
            }
            n && this.root.registerSharedNode(n, this),
              !1 !== this.options.animate &&
                s &&
                (n || i) &&
                this.addEventListener(
                  "didUpdate",
                  ({
                    delta: t,
                    hasLayoutChanged: e,
                    hasRelativeTargetChanged: r,
                    layout: n,
                  }) => {
                    if (this.isTreeAnimationBlocked()) {
                      (this.target = void 0), (this.relativeTarget = void 0);
                      return;
                    }
                    let i =
                        this.options.transition ||
                        s.getDefaultTransition() ||
                        eZ,
                      {
                        onLayoutAnimationStart: o,
                        onLayoutAnimationComplete: a,
                      } = s.getProps(),
                      l = !this.targetLayout || !ex(this.targetLayout, n) || r,
                      u = !e && r;
                    if (
                      this.options.layoutRoot ||
                      (this.resumeFrom && this.resumeFrom.instance) ||
                      u ||
                      (e && (l || !this.currentAnimation))
                    ) {
                      this.resumeFrom &&
                        ((this.resumingFrom = this.resumeFrom),
                        (this.resumingFrom.resumingFrom = void 0)),
                        this.setAnimationOrigin(t, u);
                      let e = {
                        ...(0, ev.e)(i, "layout"),
                        onPlay: o,
                        onComplete: a,
                      };
                      (s.shouldReduceMotion || this.options.layoutRoot) &&
                        ((e.delay = 0), (e.type = !1)),
                        this.startAnimation(e);
                    } else
                      e || eN(this),
                        this.isLead() &&
                          this.options.onExitComplete &&
                          this.options.onExitComplete();
                    this.targetLayout = n;
                  }
                );
          }
          unmount() {
            this.options.layoutId && this.willUpdate(),
              this.root.nodes.remove(this);
            let t = this.getStack();
            t && t.remove(this),
              this.parent && this.parent.children.delete(this),
              (this.instance = void 0),
              (0, tt.Pn)(this.updateProjection);
          }
          blockUpdate() {
            this.updateManuallyBlocked = !0;
          }
          unblockUpdate() {
            this.updateManuallyBlocked = !1;
          }
          isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize;
          }
          isTreeAnimationBlocked() {
            return (
              this.isAnimationBlocked ||
              (this.parent && this.parent.isTreeAnimationBlocked()) ||
              !1
            );
          }
          startUpdate() {
            !this.isUpdateBlocked() &&
              ((this.isUpdating = !0),
              this.nodes && this.nodes.forEach(eU),
              this.animationId++);
          }
          getTransformTemplate() {
            let { visualElement: t } = this.options;
            return t && t.getProps().transformTemplate;
          }
          willUpdate(t = !0) {
            if (
              ((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())
            ) {
              this.options.onExitComplete && this.options.onExitComplete();
              return;
            }
            if (
              (this.root.isUpdating || this.root.startUpdate(),
              this.isLayoutDirty)
            )
              return;
            this.isLayoutDirty = !0;
            for (let t = 0; t < this.path.length; t++) {
              let e = this.path[t];
              (e.shouldResetTransform = !0),
                e.updateScroll("snapshot"),
                e.options.layoutRoot && e.willUpdate(!1);
            }
            let { layoutId: e, layout: r } = this.options;
            if (void 0 === e && !r) return;
            let n = this.getTransformTemplate();
            (this.prevTransformTemplateValue = n
              ? n(this.latestValues, "")
              : void 0),
              this.updateSnapshot(),
              t && this.notifyListeners("willUpdate");
          }
          update() {
            this.updateScheduled = !1;
            let t = this.isUpdateBlocked();
            if (t) {
              this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(eF);
              return;
            }
            this.isUpdating || this.nodes.forEach(e$),
              (this.isUpdating = !1),
              this.nodes.forEach(eB),
              this.nodes.forEach(ej),
              this.nodes.forEach(eL),
              this.clearAllSnapshots();
            let e = performance.now();
            (tt.frameData.delta = (0, tF.u)(
              0,
              1e3 / 60,
              e - tt.frameData.timestamp
            )),
              (tt.frameData.timestamp = e),
              (tt.frameData.isProcessing = !0),
              tt.S6.update.process(tt.frameData),
              tt.S6.preRender.process(tt.frameData),
              tt.S6.render.process(tt.frameData),
              (tt.frameData.isProcessing = !1);
          }
          didUpdate() {
            this.updateScheduled ||
              ((this.updateScheduled = !0),
              queueMicrotask(() => this.update()));
          }
          clearAllSnapshots() {
            this.nodes.forEach(e_), this.sharedNodes.forEach(eG);
          }
          scheduleUpdateProjection() {
            tt.Wi.preRender(this.updateProjection, !1, !0);
          }
          scheduleCheckAfterUnmount() {
            tt.Wi.postRender(() => {
              this.isLayoutDirty
                ? this.root.didUpdate()
                : this.root.checkUpdateFailed();
            });
          }
          updateSnapshot() {
            !this.snapshot && this.instance && (this.snapshot = this.measure());
          }
          updateLayout() {
            if (
              !this.instance ||
              (this.updateScroll(),
              !(this.options.alwaysMeasureLayout && this.isLead()) &&
                !this.isLayoutDirty)
            )
              return;
            if (this.resumeFrom && !this.resumeFrom.instance)
              for (let t = 0; t < this.path.length; t++) {
                let e = this.path[t];
                e.updateScroll();
              }
            let t = this.layout;
            (this.layout = this.measure(!1)),
              (this.layoutCorrected = (0, tz.dO)()),
              (this.isLayoutDirty = !1),
              (this.projectionDelta = void 0),
              this.notifyListeners("measure", this.layout.layoutBox);
            let { visualElement: e } = this.options;
            e &&
              e.notify(
                "LayoutMeasure",
                this.layout.layoutBox,
                t ? t.layoutBox : void 0
              );
          }
          updateScroll(t = "measure") {
            let e = !!(this.options.layoutScroll && this.instance);
            this.scroll &&
              this.scroll.animationId === this.root.animationId &&
              this.scroll.phase === t &&
              (e = !1),
              e &&
                (this.scroll = {
                  animationId: this.root.animationId,
                  phase: t,
                  isRoot: n(this.instance),
                  offset: r(this.instance),
                });
          }
          resetTransform() {
            if (!i) return;
            let t = this.isLayoutDirty || this.shouldResetTransform,
              e = this.projectionDelta && !eg(this.projectionDelta),
              r = this.getTransformTemplate(),
              n = r ? r(this.latestValues, "") : void 0,
              s = n !== this.prevTransformTemplateValue;
            t &&
              (e || (0, eA.ud)(this.latestValues) || s) &&
              (i(this.instance, n),
              (this.shouldResetTransform = !1),
              this.scheduleRender());
          }
          measure(t = !0) {
            var e;
            let r = this.measurePageBox(),
              n = this.removeElementScroll(r);
            return (
              t && (n = this.removeTransform(n)),
              eJ((e = n).x),
              eJ(e.y),
              {
                animationId: this.root.animationId,
                measuredBox: r,
                layoutBox: n,
                latestValues: {},
                source: this.id,
              }
            );
          }
          measurePageBox() {
            let { visualElement: t } = this.options;
            if (!t) return (0, tz.dO)();
            let e = t.measureViewportBox(),
              { scroll: r } = this.root;
            return (
              r && ((0, ec.am)(e.x, r.offset.x), (0, ec.am)(e.y, r.offset.y)), e
            );
          }
          removeElementScroll(t) {
            let e = (0, tz.dO)();
            eu(e, t);
            for (let r = 0; r < this.path.length; r++) {
              let n = this.path[r],
                { scroll: i, options: s } = n;
              if (n !== this.root && i && s.layoutScroll) {
                if (i.isRoot) {
                  eu(e, t);
                  let { scroll: r } = this.root;
                  r &&
                    ((0, ec.am)(e.x, -r.offset.x),
                    (0, ec.am)(e.y, -r.offset.y));
                }
                (0, ec.am)(e.x, i.offset.x), (0, ec.am)(e.y, i.offset.y);
              }
            }
            return e;
          }
          applyTransform(t, e = !1) {
            let r = (0, tz.dO)();
            eu(r, t);
            for (let t = 0; t < this.path.length; t++) {
              let n = this.path[t];
              !e &&
                n.options.layoutScroll &&
                n.scroll &&
                n !== n.root &&
                (0, ec.D2)(r, { x: -n.scroll.offset.x, y: -n.scroll.offset.y }),
                (0, eA.ud)(n.latestValues) && (0, ec.D2)(r, n.latestValues);
            }
            return (
              (0, eA.ud)(this.latestValues) && (0, ec.D2)(r, this.latestValues),
              r
            );
          }
          removeTransform(t) {
            let e = (0, tz.dO)();
            eu(e, t);
            for (let t = 0; t < this.path.length; t++) {
              let r = this.path[t];
              if (!r.instance || !(0, eA.ud)(r.latestValues)) continue;
              (0, eA.Lj)(r.latestValues) && r.updateSnapshot();
              let n = (0, tz.dO)(),
                i = r.measurePageBox();
              eu(n, i),
                em(
                  e,
                  r.latestValues,
                  r.snapshot ? r.snapshot.layoutBox : void 0,
                  n
                );
            }
            return (0, eA.ud)(this.latestValues) && em(e, this.latestValues), e;
          }
          setTargetDelta(t) {
            (this.targetDelta = t),
              this.root.scheduleUpdateProjection(),
              (this.isProjectionDirty = !0);
          }
          setOptions(t) {
            this.options = {
              ...this.options,
              ...t,
              crossfade: void 0 === t.crossfade || t.crossfade,
            };
          }
          clearMeasurements() {
            (this.scroll = void 0),
              (this.layout = void 0),
              (this.snapshot = void 0),
              (this.prevTransformTemplateValue = void 0),
              (this.targetDelta = void 0),
              (this.target = void 0),
              (this.isLayoutDirty = !1);
          }
          forceRelativeParentToResolveTarget() {
            this.relativeParent &&
              this.relativeParent.resolvedRelativeTargetAt !==
                tt.frameData.timestamp &&
              this.relativeParent.resolveTargetDelta(!0);
          }
          resolveTargetDelta(t = !1) {
            var e, r, n, i;
            let s = this.getLead();
            this.isProjectionDirty ||
              (this.isProjectionDirty = s.isProjectionDirty),
              this.isTransformDirty ||
                (this.isTransformDirty = s.isTransformDirty),
              this.isSharedProjectionDirty ||
                (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
            let o = !!this.resumingFrom || this !== s,
              a = !(
                t ||
                (o && this.isSharedProjectionDirty) ||
                this.isProjectionDirty ||
                (null === (e = this.parent) || void 0 === e
                  ? void 0
                  : e.isProjectionDirty) ||
                this.attemptToResolveRelativeTarget
              );
            if (a) return;
            let { layout: l, layoutId: u } = this.options;
            if (this.layout && (l || u)) {
              if (
                ((this.resolvedRelativeTargetAt = tt.frameData.timestamp),
                !this.targetDelta && !this.relativeTarget)
              ) {
                let t = this.getClosestProjectingParent();
                t && t.layout && 1 !== this.animationProgress
                  ? ((this.relativeParent = t),
                    this.forceRelativeParentToResolveTarget(),
                    (this.relativeTarget = (0, tz.dO)()),
                    (this.relativeTargetOrigin = (0, tz.dO)()),
                    t_(
                      this.relativeTargetOrigin,
                      this.layout.layoutBox,
                      t.layout.layoutBox
                    ),
                    eu(this.relativeTarget, this.relativeTargetOrigin))
                  : (this.relativeParent = this.relativeTarget = void 0);
              }
              if (this.relativeTarget || this.targetDelta) {
                if (
                  ((this.target ||
                    ((this.target = (0, tz.dO)()),
                    (this.targetWithTransforms = (0, tz.dO)())),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.relativeParent &&
                    this.relativeParent.target)
                    ? (this.forceRelativeParentToResolveTarget(),
                      (r = this.target),
                      (n = this.relativeTarget),
                      (i = this.relativeParent.target),
                      tO(r.x, n.x, i.x),
                      tO(r.y, n.y, i.y))
                    : this.targetDelta
                    ? (this.resumingFrom
                        ? (this.target = this.applyTransform(
                            this.layout.layoutBox
                          ))
                        : eu(this.target, this.layout.layoutBox),
                      (0, ec.o2)(this.target, this.targetDelta))
                    : eu(this.target, this.layout.layoutBox),
                  this.attemptToResolveRelativeTarget)
                ) {
                  this.attemptToResolveRelativeTarget = !1;
                  let t = this.getClosestProjectingParent();
                  t &&
                  !!t.resumingFrom == !!this.resumingFrom &&
                  !t.options.layoutScroll &&
                  t.target &&
                  1 !== this.animationProgress
                    ? ((this.relativeParent = t),
                      this.forceRelativeParentToResolveTarget(),
                      (this.relativeTarget = (0, tz.dO)()),
                      (this.relativeTargetOrigin = (0, tz.dO)()),
                      t_(this.relativeTargetOrigin, this.target, t.target),
                      eu(this.relativeTarget, this.relativeTargetOrigin))
                    : (this.relativeParent = this.relativeTarget = void 0);
                }
                eV.resolvedTargetDeltas++;
              }
            }
          }
          getClosestProjectingParent() {
            return !this.parent ||
              (0, eA.Lj)(this.parent.latestValues) ||
              (0, eA.D_)(this.parent.latestValues)
              ? void 0
              : this.parent.isProjecting()
              ? this.parent
              : this.parent.getClosestProjectingParent();
          }
          isProjecting() {
            return !!(
              (this.relativeTarget ||
                this.targetDelta ||
                this.options.layoutRoot) &&
              this.layout
            );
          }
          calcProjection() {
            var t;
            let e = this.getLead(),
              r = !!this.resumingFrom || this !== e,
              n = !0;
            if (
              ((this.isProjectionDirty ||
                (null === (t = this.parent) || void 0 === t
                  ? void 0
                  : t.isProjectionDirty)) &&
                (n = !1),
              r &&
                (this.isSharedProjectionDirty || this.isTransformDirty) &&
                (n = !1),
              this.resolvedRelativeTargetAt === tt.frameData.timestamp &&
                (n = !1),
              n)
            )
              return;
            let { layout: i, layoutId: s } = this.options;
            if (
              ((this.isTreeAnimating = !!(
                (this.parent && this.parent.isTreeAnimating) ||
                this.currentAnimation ||
                this.pendingAnimation
              )),
              this.isTreeAnimating ||
                (this.targetDelta = this.relativeTarget = void 0),
              !this.layout || !(i || s))
            )
              return;
            eu(this.layoutCorrected, this.layout.layoutBox);
            let o = this.treeScale.x,
              a = this.treeScale.y;
            (0, ec.YY)(this.layoutCorrected, this.treeScale, this.path, r),
              e.layout &&
                !e.target &&
                (1 !== this.treeScale.x || 1 !== this.treeScale.y) &&
                (e.target = e.layout.layoutBox);
            let { target: l } = e;
            if (!l) {
              this.projectionTransform &&
                ((this.projectionDelta = (0, tz.wc)()),
                (this.projectionTransform = "none"),
                this.scheduleRender());
              return;
            }
            this.projectionDelta ||
              ((this.projectionDelta = (0, tz.wc)()),
              (this.projectionDeltaWithTransform = (0, tz.wc)()));
            let u = this.projectionTransform;
            tL(
              this.projectionDelta,
              this.layoutCorrected,
              l,
              this.latestValues
            ),
              (this.projectionTransform = eS(
                this.projectionDelta,
                this.treeScale
              )),
              (this.projectionTransform !== u ||
                this.treeScale.x !== o ||
                this.treeScale.y !== a) &&
                ((this.hasProjected = !0),
                this.scheduleRender(),
                this.notifyListeners("projectionUpdate", l)),
              eV.recalculatedProjection++;
          }
          hide() {
            this.isVisible = !1;
          }
          show() {
            this.isVisible = !0;
          }
          scheduleRender(t = !0) {
            if (
              (this.options.scheduleRender && this.options.scheduleRender(), t)
            ) {
              let t = this.getStack();
              t && t.scheduleRender();
            }
            this.resumingFrom &&
              !this.resumingFrom.instance &&
              (this.resumingFrom = void 0);
          }
          setAnimationOrigin(t, e = !1) {
            let r;
            let n = this.snapshot,
              i = n ? n.latestValues : {},
              s = { ...this.latestValues },
              o = (0, tz.wc)();
            (this.relativeParent && this.relativeParent.options.layoutRoot) ||
              (this.relativeTarget = this.relativeTargetOrigin = void 0),
              (this.attemptToResolveRelativeTarget = !e);
            let a = (0, tz.dO)(),
              l = n ? n.source : void 0,
              u = this.layout ? this.layout.source : void 0,
              c = l !== u,
              h = this.getStack(),
              d = !h || h.members.length <= 1,
              p = !!(
                c &&
                !d &&
                !0 === this.options.crossfade &&
                !this.path.some(eX)
              );
            (this.animationProgress = 0),
              (this.mixTargetDelta = (e) => {
                let n = e / 1e3;
                if (
                  (eH(o.x, t.x, n),
                  eH(o.y, t.y, n),
                  this.setTargetDelta(o),
                  this.relativeTarget &&
                    this.relativeTargetOrigin &&
                    this.layout &&
                    this.relativeParent &&
                    this.relativeParent.layout)
                ) {
                  var l, u, h, f;
                  t_(
                    a,
                    this.layout.layoutBox,
                    this.relativeParent.layout.layoutBox
                  ),
                    (h = this.relativeTarget),
                    (f = this.relativeTargetOrigin),
                    eY(h.x, f.x, a.x, n),
                    eY(h.y, f.y, a.y, n),
                    r &&
                      ((l = this.relativeTarget),
                      (u = r),
                      l.x.min === u.x.min &&
                        l.x.max === u.x.max &&
                        l.y.min === u.y.min &&
                        l.y.max === u.y.max) &&
                      (this.isProjectionDirty = !1),
                    r || (r = (0, tz.dO)()),
                    eu(r, this.relativeTarget);
                }
                c &&
                  ((this.animationValues = s),
                  (function (t, e, r, n, i, s) {
                    i
                      ? ((t.opacity = (0, tD.C)(
                          0,
                          void 0 !== r.opacity ? r.opacity : 1,
                          es(n)
                        )),
                        (t.opacityExit = (0, tD.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          0,
                          eo(n)
                        )))
                      : s &&
                        (t.opacity = (0, tD.C)(
                          void 0 !== e.opacity ? e.opacity : 1,
                          void 0 !== r.opacity ? r.opacity : 1,
                          n
                        ));
                    for (let i = 0; i < ee; i++) {
                      let s = `border${et[i]}Radius`,
                        o = ei(e, s),
                        a = ei(r, s);
                      if (void 0 === o && void 0 === a) continue;
                      o || (o = 0), a || (a = 0);
                      let l = 0 === o || 0 === a || en(o) === en(a);
                      l
                        ? ((t[s] = Math.max((0, tD.C)(er(o), er(a), n), 0)),
                          (tY.aQ.test(a) || tY.aQ.test(o)) && (t[s] += "%"))
                        : (t[s] = a);
                    }
                    (e.rotate || r.rotate) &&
                      (t.rotate = (0, tD.C)(e.rotate || 0, r.rotate || 0, n));
                  })(s, i, this.latestValues, n, p, d)),
                  this.root.scheduleUpdateProjection(),
                  this.scheduleRender(),
                  (this.animationProgress = n);
              }),
              this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
          }
          startAnimation(t) {
            this.notifyListeners("animationStart"),
              this.currentAnimation && this.currentAnimation.stop(),
              this.resumingFrom &&
                this.resumingFrom.currentAnimation &&
                this.resumingFrom.currentAnimation.stop(),
              this.pendingAnimation &&
                ((0, tt.Pn)(this.pendingAnimation),
                (this.pendingAnimation = void 0)),
              (this.pendingAnimation = tt.Wi.update(() => {
                (t0.hasAnimatedSinceResize = !0),
                  (this.currentAnimation = (0, eE.D)(0, 1e3, {
                    ...t,
                    onUpdate: (e) => {
                      this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e);
                    },
                    onComplete: () => {
                      t.onComplete && t.onComplete(), this.completeAnimation();
                    },
                  })),
                  this.resumingFrom &&
                    (this.resumingFrom.currentAnimation =
                      this.currentAnimation),
                  (this.pendingAnimation = void 0);
              }));
          }
          completeAnimation() {
            this.resumingFrom &&
              ((this.resumingFrom.currentAnimation = void 0),
              (this.resumingFrom.preserveOpacity = void 0));
            let t = this.getStack();
            t && t.exitAnimationComplete(),
              (this.resumingFrom =
                this.currentAnimation =
                this.animationValues =
                  void 0),
              this.notifyListeners("animationComplete");
          }
          finishAnimation() {
            this.currentAnimation &&
              (this.mixTargetDelta && this.mixTargetDelta(1e3),
              this.currentAnimation.stop()),
              this.completeAnimation();
          }
          applyTransformsToTarget() {
            let t = this.getLead(),
              {
                targetWithTransforms: e,
                target: r,
                layout: n,
                latestValues: i,
              } = t;
            if (e && r && n) {
              if (
                this !== t &&
                this.layout &&
                n &&
                eQ(
                  this.options.animationType,
                  this.layout.layoutBox,
                  n.layoutBox
                )
              ) {
                r = this.target || (0, tz.dO)();
                let e = tV(this.layout.layoutBox.x);
                (r.x.min = t.target.x.min), (r.x.max = r.x.min + e);
                let n = tV(this.layout.layoutBox.y);
                (r.y.min = t.target.y.min), (r.y.max = r.y.min + n);
              }
              eu(e, r),
                (0, ec.D2)(e, i),
                tL(
                  this.projectionDeltaWithTransform,
                  this.layoutCorrected,
                  e,
                  i
                );
            }
          }
          registerSharedNode(t, e) {
            this.sharedNodes.has(t) || this.sharedNodes.set(t, new eP());
            let r = this.sharedNodes.get(t);
            r.add(e);
            let n = e.options.initialPromotionConfig;
            e.promote({
              transition: n ? n.transition : void 0,
              preserveFollowOpacity:
                n && n.shouldPreserveFollowOpacity
                  ? n.shouldPreserveFollowOpacity(e)
                  : void 0,
            });
          }
          isLead() {
            let t = this.getStack();
            return !t || t.lead === this;
          }
          getLead() {
            var t;
            let { layoutId: e } = this.options;
            return (
              (e &&
                (null === (t = this.getStack()) || void 0 === t
                  ? void 0
                  : t.lead)) ||
              this
            );
          }
          getPrevLead() {
            var t;
            let { layoutId: e } = this.options;
            return e
              ? null === (t = this.getStack()) || void 0 === t
                ? void 0
                : t.prevLead
              : void 0;
          }
          getStack() {
            let { layoutId: t } = this.options;
            if (t) return this.root.sharedNodes.get(t);
          }
          promote({
            needsReset: t,
            transition: e,
            preserveFollowOpacity: r,
          } = {}) {
            let n = this.getStack();
            n && n.promote(this, r),
              t && ((this.projectionDelta = void 0), (this.needsReset = !0)),
              e && this.setOptions({ transition: e });
          }
          relegate() {
            let t = this.getStack();
            return !!t && t.relegate(this);
          }
          resetRotation() {
            let { visualElement: t } = this.options;
            if (!t) return;
            let e = !1,
              { latestValues: r } = t;
            if (
              ((r.rotate || r.rotateX || r.rotateY || r.rotateZ) && (e = !0),
              !e)
            )
              return;
            let n = {};
            for (let e = 0; e < eR.length; e++) {
              let i = "rotate" + eR[e];
              r[i] && ((n[i] = r[i]), t.setStaticValue(i, 0));
            }
            for (let e in (t.render(), n)) t.setStaticValue(e, n[e]);
            t.scheduleRender();
          }
          getProjectionStyles(t = {}) {
            var e, r;
            let n = {};
            if (!this.instance || this.isSVG) return n;
            if (!this.isVisible) return { visibility: "hidden" };
            n.visibility = "";
            let i = this.getTransformTemplate();
            if (this.needsReset)
              return (
                (this.needsReset = !1),
                (n.opacity = ""),
                (n.pointerEvents = _(t.pointerEvents) || ""),
                (n.transform = i ? i(this.latestValues, "") : "none"),
                n
              );
            let s = this.getLead();
            if (!this.projectionDelta || !this.layout || !s.target) {
              let e = {};
              return (
                this.options.layoutId &&
                  ((e.opacity =
                    void 0 !== this.latestValues.opacity
                      ? this.latestValues.opacity
                      : 1),
                  (e.pointerEvents = _(t.pointerEvents) || "")),
                this.hasProjected &&
                  !(0, eA.ud)(this.latestValues) &&
                  ((e.transform = i ? i({}, "") : "none"),
                  (this.hasProjected = !1)),
                e
              );
            }
            let o = s.animationValues || s.latestValues;
            this.applyTransformsToTarget(),
              (n.transform = eS(
                this.projectionDeltaWithTransform,
                this.treeScale,
                o
              )),
              i && (n.transform = i(o, n.transform));
            let { x: a, y: l } = this.projectionDelta;
            for (let t in ((n.transformOrigin = `${100 * a.origin}% ${
              100 * l.origin
            }% 0`),
            s.animationValues
              ? (n.opacity =
                  s === this
                    ? null !==
                        (r =
                          null !== (e = o.opacity) && void 0 !== e
                            ? e
                            : this.latestValues.opacity) && void 0 !== r
                      ? r
                      : 1
                    : this.preserveOpacity
                    ? this.latestValues.opacity
                    : o.opacityExit)
              : (n.opacity =
                  s === this
                    ? void 0 !== o.opacity
                      ? o.opacity
                      : ""
                    : void 0 !== o.opacityExit
                    ? o.opacityExit
                    : 0),
            t4.P)) {
              if (void 0 === o[t]) continue;
              let { correct: e, applyTo: r } = t4.P[t],
                i = "none" === n.transform ? o[t] : e(o[t], s);
              if (r) {
                let t = r.length;
                for (let e = 0; e < t; e++) n[r[e]] = i;
              } else n[t] = i;
            }
            return (
              this.options.layoutId &&
                (n.pointerEvents =
                  s === this ? _(t.pointerEvents) || "" : "none"),
              n
            );
          }
          clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0;
          }
          resetTree() {
            this.root.nodes.forEach((t) => {
              var e;
              return null === (e = t.currentAnimation) || void 0 === e
                ? void 0
                : e.stop();
            }),
              this.root.nodes.forEach(eF),
              this.root.sharedNodes.clear();
          }
        };
      }
      function ej(t) {
        t.updateLayout();
      }
      function eL(t) {
        var e;
        let r =
          (null === (e = t.resumeFrom) || void 0 === e ? void 0 : e.snapshot) ||
          t.snapshot;
        if (t.isLead() && t.layout && r && t.hasListeners("didUpdate")) {
          let { layoutBox: e, measuredBox: n } = t.layout,
            { animationType: i } = t.options,
            s = r.source !== t.layout.source;
          "size" === i
            ? tU((t) => {
                let n = s ? r.measuredBox[t] : r.layoutBox[t],
                  i = tV(n);
                (n.min = e[t].min), (n.max = n.min + i);
              })
            : eQ(i, r.layoutBox, e) &&
              tU((n) => {
                let i = s ? r.measuredBox[n] : r.layoutBox[n],
                  o = tV(e[n]);
                (i.max = i.min + o),
                  t.relativeTarget &&
                    !t.currentAnimation &&
                    ((t.isProjectionDirty = !0),
                    (t.relativeTarget[n].max = t.relativeTarget[n].min + o));
              });
          let o = (0, tz.wc)();
          tL(o, e, r.layoutBox);
          let a = (0, tz.wc)();
          s
            ? tL(a, t.applyTransform(n, !0), r.measuredBox)
            : tL(a, e, r.layoutBox);
          let l = !eg(o),
            u = !1;
          if (!t.resumeFrom) {
            let n = t.getClosestProjectingParent();
            if (n && !n.resumeFrom) {
              let { snapshot: i, layout: s } = n;
              if (i && s) {
                let o = (0, tz.dO)();
                t_(o, r.layoutBox, i.layoutBox);
                let a = (0, tz.dO)();
                t_(a, e, s.layoutBox),
                  ex(o, a) || (u = !0),
                  n.options.layoutRoot &&
                    ((t.relativeTarget = a),
                    (t.relativeTargetOrigin = o),
                    (t.relativeParent = n));
              }
            }
          }
          t.notifyListeners("didUpdate", {
            layout: e,
            snapshot: r,
            delta: a,
            layoutDelta: o,
            hasLayoutChanged: l,
            hasRelativeTargetChanged: u,
          });
        } else if (t.isLead()) {
          let { onExitComplete: e } = t.options;
          e && e();
        }
        t.options.transition = void 0;
      }
      function eO(t) {
        eV.totalNodes++,
          t.parent &&
            (t.isProjecting() ||
              (t.isProjectionDirty = t.parent.isProjectionDirty),
            t.isSharedProjectionDirty ||
              (t.isSharedProjectionDirty = !!(
                t.isProjectionDirty ||
                t.parent.isProjectionDirty ||
                t.parent.isSharedProjectionDirty
              )),
            t.isTransformDirty ||
              (t.isTransformDirty = t.parent.isTransformDirty));
      }
      function eI(t) {
        t.isProjectionDirty =
          t.isSharedProjectionDirty =
          t.isTransformDirty =
            !1;
      }
      function e_(t) {
        t.clearSnapshot();
      }
      function eF(t) {
        t.clearMeasurements();
      }
      function e$(t) {
        t.isLayoutDirty = !1;
      }
      function eB(t) {
        let { visualElement: e } = t.options;
        e &&
          e.getProps().onBeforeLayoutMeasure &&
          e.notify("BeforeLayoutMeasure"),
          t.resetTransform();
      }
      function eN(t) {
        t.finishAnimation(),
          (t.targetDelta = t.relativeTarget = t.target = void 0),
          (t.isProjectionDirty = !0);
      }
      function eW(t) {
        t.resolveTargetDelta();
      }
      function ez(t) {
        t.calcProjection();
      }
      function eU(t) {
        t.resetRotation();
      }
      function eG(t) {
        t.removeLeadSnapshot();
      }
      function eH(t, e, r) {
        (t.translate = (0, tD.C)(e.translate, 0, r)),
          (t.scale = (0, tD.C)(e.scale, 1, r)),
          (t.origin = e.origin),
          (t.originPoint = e.originPoint);
      }
      function eY(t, e, r, n) {
        (t.min = (0, tD.C)(e.min, r.min, n)),
          (t.max = (0, tD.C)(e.max, r.max, n));
      }
      function eX(t) {
        return t.animationValues && void 0 !== t.animationValues.opacityExit;
      }
      let eZ = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
        eq = (t) =>
          "undefined" != typeof navigator &&
          navigator.userAgent.toLowerCase().includes(t),
        eK = eq("applewebkit/") && !eq("chrome/") ? Math.round : tn.Z;
      function eJ(t) {
        (t.min = eK(t.min)), (t.max = eK(t.max));
      }
      function eQ(t, e, r) {
        return (
          "position" === t ||
          ("preserve-aspect" === t && !tM(eb(e), eb(r), 0.2))
        );
      }
      let e0 = eM({
          attachResizeListener: (t, e) => W(t, "resize", e),
          measureScroll: () => ({
            x: document.documentElement.scrollLeft || document.body.scrollLeft,
            y: document.documentElement.scrollTop || document.body.scrollTop,
          }),
          checkIsScrollRoot: () => !0,
        }),
        e1 = { current: void 0 },
        e5 = eM({
          measureScroll: (t) => ({ x: t.scrollLeft, y: t.scrollTop }),
          defaultParent: () => {
            if (!e1.current) {
              let t = new e0({});
              t.mount(window),
                t.setOptions({ layoutScroll: !0 }),
                (e1.current = t);
            }
            return e1.current;
          },
          resetTransform: (t, e) => {
            t.style.transform = void 0 !== e ? e : "none";
          },
          checkIsScrollRoot: (t) =>
            "fixed" === window.getComputedStyle(t).position,
        });
      var e2 = r(4547),
        e4 = r(5794);
      let e6 = (t, e) =>
          x(t)
            ? new e4.e(e, { enableHardwareAcceleration: !1 })
            : new e2.W(e, { enableHardwareAcceleration: !0 }),
        e7 = {
          animation: {
            Feature: class extends Q {
              constructor(t) {
                super(t),
                  t.animationState ||
                    (t.animationState = (function (t) {
                      let e = (e) =>
                          Promise.all(
                            e.map(({ animation: e, options: r }) =>
                              (function (t, e, r = {}) {
                                let n;
                                if (
                                  (t.notify("AnimationStart", e),
                                  Array.isArray(e))
                                ) {
                                  let i = e.map((e) => tm(t, e, r));
                                  n = Promise.all(i);
                                } else if ("string" == typeof e)
                                  n = tm(t, e, r);
                                else {
                                  let i =
                                    "function" == typeof e
                                      ? (0, td.x)(t, e, r.custom)
                                      : e;
                                  n = Promise.all((0, tf.w)(t, i, r));
                                }
                                return n.then(() =>
                                  t.notify("AnimationComplete", e)
                                );
                              })(t, e, r)
                            )
                          ),
                        r = {
                          animate: tx(!0),
                          whileInView: tx(),
                          whileHover: tx(),
                          whileTap: tx(),
                          whileDrag: tx(),
                          whileFocus: tx(),
                          exit: tx(),
                        },
                        n = !0,
                        i = (e, r) => {
                          let n = (0, td.x)(t, r);
                          if (n) {
                            let { transition: t, transitionEnd: r, ...i } = n;
                            e = { ...e, ...i, ...r };
                          }
                          return e;
                        };
                      function s(s, o) {
                        let a = t.getProps(),
                          l = t.getVariantContext(!0) || {},
                          u = [],
                          h = new Set(),
                          d = {},
                          p = 1 / 0;
                        for (let e = 0; e < tg; e++) {
                          var f;
                          let m = ty[e],
                            v = r[m],
                            y = void 0 !== a[m] ? a[m] : l[m],
                            g = (0, c.$)(y),
                            x = m === o ? v.isActive : null;
                          !1 === x && (p = e);
                          let b = y === l[m] && y !== a[m] && g;
                          if (
                            (b && n && t.manuallyAnimateOnMount && (b = !1),
                            (v.protectedKeys = { ...d }),
                            (!v.isActive && null === x) ||
                              (!y && !v.prevProp) ||
                              (0, j.H)(y) ||
                              "boolean" == typeof y)
                          )
                            continue;
                          let w =
                              ((f = v.prevProp),
                              "string" == typeof y
                                ? y !== f
                                : !!Array.isArray(y) && !th(y, f)),
                            P =
                              w ||
                              (m === o && v.isActive && !b && g) ||
                              (e > p && g),
                            S = Array.isArray(y) ? y : [y],
                            A = S.reduce(i, {});
                          !1 === x && (A = {});
                          let { prevResolvedValues: C = {} } = v,
                            k = { ...C, ...A },
                            T = (t) => {
                              (P = !0), h.delete(t), (v.needsAnimating[t] = !0);
                            };
                          for (let t in k) {
                            let e = A[t],
                              r = C[t];
                            d.hasOwnProperty(t) ||
                              (e !== r
                                ? (0, tc.C)(e) && (0, tc.C)(r)
                                  ? !th(e, r) || w
                                    ? T(t)
                                    : (v.protectedKeys[t] = !0)
                                  : void 0 !== e
                                  ? T(t)
                                  : h.add(t)
                                : void 0 !== e && h.has(t)
                                ? T(t)
                                : (v.protectedKeys[t] = !0));
                          }
                          (v.prevProp = y),
                            (v.prevResolvedValues = A),
                            v.isActive && (d = { ...d, ...A }),
                            n && t.blockInitialAnimation && (P = !1),
                            P &&
                              !b &&
                              u.push(
                                ...S.map((t) => ({
                                  animation: t,
                                  options: { type: m, ...s },
                                }))
                              );
                        }
                        if (h.size) {
                          let e = {};
                          h.forEach((r) => {
                            let n = t.getBaseTarget(r);
                            void 0 !== n && (e[r] = n);
                          }),
                            u.push({ animation: e });
                        }
                        let m = !!u.length;
                        return (
                          n &&
                            !1 === a.initial &&
                            !t.manuallyAnimateOnMount &&
                            (m = !1),
                          (n = !1),
                          m ? e(u) : Promise.resolve()
                        );
                      }
                      return {
                        animateChanges: s,
                        setActive: function (e, n, i) {
                          var o;
                          if (r[e].isActive === n) return Promise.resolve();
                          null === (o = t.variantChildren) ||
                            void 0 === o ||
                            o.forEach((t) => {
                              var r;
                              return null === (r = t.animationState) ||
                                void 0 === r
                                ? void 0
                                : r.setActive(e, n);
                            }),
                            (r[e].isActive = n);
                          let a = s(i, e);
                          for (let t in r) r[t].protectedKeys = {};
                          return a;
                        },
                        setAnimateFunction: function (r) {
                          e = r(t);
                        },
                        getState: () => r,
                      };
                    })(t));
              }
              updateAnimationControlsSubscription() {
                let { animate: t } = this.node.getProps();
                this.unmount(),
                  (0, j.H)(t) && (this.unmount = t.subscribe(this.node));
              }
              mount() {
                this.updateAnimationControlsSubscription();
              }
              update() {
                let { animate: t } = this.node.getProps(),
                  { animate: e } = this.node.prevProps || {};
                t !== e && this.updateAnimationControlsSubscription();
              }
              unmount() {}
            },
          },
          exit: {
            Feature: class extends Q {
              constructor() {
                super(...arguments), (this.id = tb++);
              }
              update() {
                if (!this.node.presenceContext) return;
                let {
                    isPresent: t,
                    onExitComplete: e,
                    custom: r,
                  } = this.node.presenceContext,
                  { isPresent: n } = this.node.prevPresenceContext || {};
                if (!this.node.animationState || t === n) return;
                let i = this.node.animationState.setActive("exit", !t, {
                  custom: null != r ? r : this.node.getProps().custom,
                });
                e && !t && i.then(() => e(this.id));
              }
              mount() {
                let { register: t } = this.node.presenceContext || {};
                t && (this.unmount = t(this.id));
              }
              unmount() {}
            },
          },
          inView: {
            Feature: class extends Q {
              constructor() {
                super(...arguments),
                  (this.hasEnteredView = !1),
                  (this.isInView = !1);
              }
              startObserver() {
                this.unmount();
                let { viewport: t = {} } = this.node.getProps(),
                  { root: e, margin: r, amount: n = "some", once: i } = t,
                  s = {
                    root: e ? e.current : void 0,
                    rootMargin: r,
                    threshold: "number" == typeof n ? n : tu[n],
                  };
                return (function (t, e, r) {
                  let n = (function ({ root: t, ...e }) {
                    let r = t || document;
                    to.has(r) || to.set(r, {});
                    let n = to.get(r),
                      i = JSON.stringify(e);
                    return (
                      n[i] ||
                        (n[i] = new IntersectionObserver(tl, {
                          root: t,
                          ...e,
                        })),
                      n[i]
                    );
                  })(e);
                  return (
                    ts.set(t, r),
                    n.observe(t),
                    () => {
                      ts.delete(t), n.unobserve(t);
                    }
                  );
                })(this.node.current, s, (t) => {
                  let { isIntersecting: e } = t;
                  if (
                    this.isInView === e ||
                    ((this.isInView = e), i && !e && this.hasEnteredView)
                  )
                    return;
                  e && (this.hasEnteredView = !0),
                    this.node.animationState &&
                      this.node.animationState.setActive("whileInView", e);
                  let { onViewportEnter: r, onViewportLeave: n } =
                      this.node.getProps(),
                    s = e ? r : n;
                  s && s(t);
                });
              }
              mount() {
                this.startObserver();
              }
              update() {
                if ("undefined" == typeof IntersectionObserver) return;
                let { props: t, prevProps: e } = this.node,
                  r = ["amount", "margin", "root"].some(
                    (function (
                      { viewport: t = {} },
                      { viewport: e = {} } = {}
                    ) {
                      return (r) => t[r] !== e[r];
                    })(t, e)
                  );
                r && this.startObserver();
              }
              unmount() {}
            },
          },
          tap: {
            Feature: class extends Q {
              constructor() {
                super(...arguments),
                  (this.removeStartListeners = tn.Z),
                  (this.removeEndListeners = tn.Z),
                  (this.removeAccessibleListeners = tn.Z),
                  (this.startPointerPress = (t, e) => {
                    if ((this.removeEndListeners(), this.isPressing)) return;
                    let r = this.node.getProps(),
                      n = H(
                        window,
                        "pointerup",
                        (t, e) => {
                          if (!this.checkPressEnd()) return;
                          let { onTap: r, onTapCancel: n } =
                            this.node.getProps();
                          tt.Wi.update(() => {
                            tr(this.node.current, t.target)
                              ? r && r(t, e)
                              : n && n(t, e);
                          });
                        },
                        { passive: !(r.onTap || r.onPointerUp) }
                      ),
                      i = H(
                        window,
                        "pointercancel",
                        (t, e) => this.cancelPress(t, e),
                        { passive: !(r.onTapCancel || r.onPointerCancel) }
                      );
                    (this.removeEndListeners = (0, Y.z)(n, i)),
                      this.startPress(t, e);
                  }),
                  (this.startAccessiblePress = () => {
                    let t = W(this.node.current, "keydown", (t) => {
                        "Enter" !== t.key ||
                          this.isPressing ||
                          (this.removeEndListeners(),
                          (this.removeEndListeners = W(
                            this.node.current,
                            "keyup",
                            (t) => {
                              "Enter" === t.key &&
                                this.checkPressEnd() &&
                                ti("up", (t, e) => {
                                  let { onTap: r } = this.node.getProps();
                                  r && tt.Wi.update(() => r(t, e));
                                });
                            }
                          )),
                          ti("down", (t, e) => {
                            this.startPress(t, e);
                          }));
                      }),
                      e = W(this.node.current, "blur", () => {
                        this.isPressing &&
                          ti("cancel", (t, e) => this.cancelPress(t, e));
                      });
                    this.removeAccessibleListeners = (0, Y.z)(t, e);
                  });
              }
              startPress(t, e) {
                this.isPressing = !0;
                let { onTapStart: r, whileTap: n } = this.node.getProps();
                n &&
                  this.node.animationState &&
                  this.node.animationState.setActive("whileTap", !0),
                  r && tt.Wi.update(() => r(t, e));
              }
              checkPressEnd() {
                this.removeEndListeners(), (this.isPressing = !1);
                let t = this.node.getProps();
                return (
                  t.whileTap &&
                    this.node.animationState &&
                    this.node.animationState.setActive("whileTap", !1),
                  !J()
                );
              }
              cancelPress(t, e) {
                if (!this.checkPressEnd()) return;
                let { onTapCancel: r } = this.node.getProps();
                r && tt.Wi.update(() => r(t, e));
              }
              mount() {
                let t = this.node.getProps(),
                  e = H(
                    this.node.current,
                    "pointerdown",
                    this.startPointerPress,
                    { passive: !(t.onTapStart || t.onPointerStart) }
                  ),
                  r = W(this.node.current, "focus", this.startAccessiblePress);
                this.removeStartListeners = (0, Y.z)(e, r);
              }
              unmount() {
                this.removeStartListeners(),
                  this.removeEndListeners(),
                  this.removeAccessibleListeners();
              }
            },
          },
          focus: {
            Feature: class extends Q {
              constructor() {
                super(...arguments), (this.isActive = !1);
              }
              onFocus() {
                let t = !1;
                try {
                  t = this.node.current.matches(":focus-visible");
                } catch (e) {
                  t = !0;
                }
                t &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !0),
                  (this.isActive = !0));
              }
              onBlur() {
                this.isActive &&
                  this.node.animationState &&
                  (this.node.animationState.setActive("whileFocus", !1),
                  (this.isActive = !1));
              }
              mount() {
                this.unmount = (0, Y.z)(
                  W(this.node.current, "focus", () => this.onFocus()),
                  W(this.node.current, "blur", () => this.onBlur())
                );
              }
              unmount() {}
            },
          },
          hover: {
            Feature: class extends Q {
              mount() {
                this.unmount = (0, Y.z)(te(this.node, !0), te(this.node, !1));
              }
              unmount() {}
            },
          },
          pan: {
            Feature: class extends Q {
              constructor() {
                super(...arguments), (this.removePointerDownListener = tn.Z);
              }
              onPointerDown(t) {
                this.session = new tA(t, this.createPanHandlers(), {
                  transformPagePoint: this.node.getTransformPagePoint(),
                });
              }
              createPanHandlers() {
                let {
                  onPanSessionStart: t,
                  onPanStart: e,
                  onPan: r,
                  onPanEnd: n,
                } = this.node.getProps();
                return {
                  onSessionStart: tJ(t),
                  onStart: tJ(e),
                  onMove: r,
                  onEnd: (t, e) => {
                    delete this.session, n && tt.Wi.update(() => n(t, e));
                  },
                };
              }
              mount() {
                this.removePointerDownListener = H(
                  this.node.current,
                  "pointerdown",
                  (t) => this.onPointerDown(t)
                );
              }
              update() {
                this.session &&
                  this.session.updateHandlers(this.createPanHandlers());
              }
              unmount() {
                this.removePointerDownListener(),
                  this.session && this.session.end();
              }
            },
          },
          drag: {
            Feature: class extends Q {
              constructor(t) {
                super(t),
                  (this.removeGroupControls = tn.Z),
                  (this.removeListeners = tn.Z),
                  (this.controls = new tq(t));
              }
              mount() {
                let { dragControls: t } = this.node.getProps();
                t && (this.removeGroupControls = t.subscribe(this.controls)),
                  (this.removeListeners = this.controls.addListeners() || tn.Z);
              }
              unmount() {
                this.removeGroupControls(), this.removeListeners();
              }
            },
            ProjectionNode: e5,
            MeasureLayout: t7,
          },
          layout: { ProjectionNode: e5, MeasureLayout: t7 },
        },
        e8 = (function (t) {
          function e(e, r = {}) {
            return (function ({
              preloadedFeatures: t,
              createVisualElement: e,
              useRender: r,
              useVisualState: g,
              Component: x,
            }) {
              t &&
                (function (t) {
                  for (let e in t) p.A[e] = { ...p.A[e], ...t[e] };
                })(t);
              let b = (0, n.forwardRef)(function (p, y) {
                var b;
                let w;
                let P = {
                    ...(0, n.useContext)(i._),
                    ...p,
                    layoutId: (function ({ layoutId: t }) {
                      let e = (0, n.useContext)(m.p).id;
                      return e && void 0 !== t ? e + "-" + t : t;
                    })(p),
                  },
                  { isStatic: S } = P,
                  A = (function (t) {
                    let { initial: e, animate: r } = (function (t, e) {
                      if ((0, h.G)(t)) {
                        let { initial: e, animate: r } = t;
                        return {
                          initial: !1 === e || (0, c.$)(e) ? e : void 0,
                          animate: (0, c.$)(r) ? r : void 0,
                        };
                      }
                      return !1 !== t.inherit ? e : {};
                    })(t, (0, n.useContext)(s));
                    return (0, n.useMemo)(
                      () => ({ initial: e, animate: r }),
                      [d(e), d(r)]
                    );
                  })(p),
                  C = g(p, S);
                if (!S && f.j) {
                  A.visualElement = (function (t, e, r, u) {
                    let { visualElement: c } = (0, n.useContext)(s),
                      h = (0, n.useContext)(l),
                      d = (0, n.useContext)(o.O),
                      p = (0, n.useContext)(i._).reducedMotion,
                      f = (0, n.useRef)();
                    (u = u || h.renderer),
                      !f.current &&
                        u &&
                        (f.current = u(t, {
                          visualState: e,
                          parent: c,
                          props: r,
                          presenceContext: d,
                          blockInitialAnimation: !!d && !1 === d.initial,
                          reducedMotionConfig: p,
                        }));
                    let m = f.current;
                    (0, n.useInsertionEffect)(() => {
                      m && m.update(r, d);
                    }),
                      (0, a.L)(() => {
                        m && m.render();
                      }),
                      (0, n.useEffect)(() => {
                        m && m.updateFeatures();
                      });
                    let v = window.HandoffAppearAnimations ? a.L : n.useEffect;
                    return (
                      v(() => {
                        m &&
                          m.animationState &&
                          m.animationState.animateChanges();
                      }),
                      m
                    );
                  })(x, C, P, e);
                  let r = (0, n.useContext)(v),
                    u = (0, n.useContext)(l).strict;
                  A.visualElement &&
                    (w = A.visualElement.loadFeatures(P, u, t, r));
                }
                return n.createElement(
                  s.Provider,
                  { value: A },
                  w && A.visualElement
                    ? n.createElement(w, {
                        visualElement: A.visualElement,
                        ...P,
                      })
                    : null,
                  r(
                    x,
                    p,
                    ((b = A.visualElement),
                    (0, n.useCallback)(
                      (t) => {
                        t && C.mount && C.mount(t),
                          b && (t ? b.mount(t) : b.unmount()),
                          y &&
                            ("function" == typeof y
                              ? y(t)
                              : (0, u.I)(y) && (y.current = t));
                      },
                      [b]
                    )),
                    C,
                    S,
                    A.visualElement
                  )
                );
              });
              return (b[y] = x), b;
            })(t(e, r));
          }
          if ("undefined" == typeof Proxy) return e;
          let r = new Map();
          return new Proxy(e, {
            get: (t, n) => (r.has(n) || r.set(n, e(n)), r.get(n)),
          });
        })((t, e) =>
          (function (t, { forwardMotionProps: e = !1 }, r, i) {
            let s = x(t) ? $ : N;
            return {
              ...s,
              preloadedFeatures: r,
              useRender: (function (t = !1) {
                return (e, r, i, { latestValues: s }, o) => {
                  let a = x(e) ? D : C,
                    l = a(r, s, o, e),
                    u = (0, k.L)(r, "string" == typeof e, t),
                    c = { ...u, ...l, ref: i },
                    { children: h } = r,
                    d = (0, n.useMemo)(() => ((0, w.i)(h) ? h.get() : h), [h]);
                  return (0, n.createElement)(e, { ...c, children: d });
                };
              })(e),
              createVisualElement: i,
              Component: t,
            };
          })(t, e, e7, e6)
        );
    },
    3193: function (t, e, r) {
      "use strict";
      r.d(e, {
        D: function () {
          return n;
        },
      });
      let n = (t) => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    },
    1492: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return a;
        },
        K: function () {
          return o;
        },
      });
      let n = new Set([
        "animate",
        "exit",
        "variants",
        "initial",
        "style",
        "values",
        "variants",
        "transition",
        "transformTemplate",
        "transformValues",
        "custom",
        "inherit",
        "onLayoutAnimationStart",
        "onLayoutAnimationComplete",
        "onLayoutMeasure",
        "onBeforeLayoutMeasure",
        "onAnimationStart",
        "onAnimationComplete",
        "onUpdate",
        "onDragStart",
        "onDrag",
        "onDragEnd",
        "onMeasureDragConstraints",
        "onDirectionLock",
        "onDragTransitionEnd",
        "_dragX",
        "_dragY",
        "onHoverStart",
        "onHoverEnd",
        "onViewportEnter",
        "onViewportLeave",
        "ignoreStrict",
        "viewport",
      ]);
      function i(t) {
        return (
          t.startsWith("while") ||
          (t.startsWith("drag") && "draggable" !== t) ||
          t.startsWith("layout") ||
          t.startsWith("onTap") ||
          t.startsWith("onPan") ||
          n.has(t)
        );
      }
      let s = (t) => !i(t);
      function o(t) {
        t && (s = (e) => (e.startsWith("on") ? !i(e) : t(e)));
      }
      try {
        o(require("@emotion/is-prop-valid").default);
      } catch (t) {}
      function a(t, e, r) {
        let n = {};
        for (let o in t)
          ("values" !== o || "object" != typeof t.values) &&
            (s(o) ||
              (!0 === r && i(o)) ||
              (!e && !i(o)) ||
              (t.draggable && o.startsWith("onDrag"))) &&
            (n[o] = t[o]);
        return n;
      }
    },
    7630: function (t, e, r) {
      "use strict";
      r.d(e, {
        Xp: function () {
          return o;
        },
        f9: function () {
          return i;
        },
        tm: function () {
          return s;
        },
      });
      let n = (t) => (e) => "string" == typeof e && e.startsWith(t),
        i = n("--"),
        s = n("var(--"),
        o =
          /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g;
    },
    5194: function (t, e, r) {
      "use strict";
      function n(t) {
        return t instanceof SVGElement && "svg" !== t.tagName;
      }
      r.d(e, {
        v: function () {
          return n;
        },
      });
    },
    7301: function (t, e, r) {
      "use strict";
      r.d(e, {
        I: function () {
          return i;
        },
      });
      var n = r(5487);
      function i(t, e, r) {
        var i;
        if ("string" == typeof t) {
          let s = document;
          e &&
            ((0, n.k)(!!e.current, "Scope provided, but no element detected."),
            (s = e.current)),
            r
              ? ((null !== (i = r[t]) && void 0 !== i) ||
                  (r[t] = s.querySelectorAll(t)),
                (t = r[t]))
              : (t = s.querySelectorAll(t));
        } else t instanceof Element && (t = [t]);
        return Array.from(t || []);
      }
    },
    9135: function (t, e, r) {
      "use strict";
      r.d(e, {
        T: function () {
          return o;
        },
      });
      var n = r(1550),
        i = r(7197),
        s = r(2728);
      function o(t, e) {
        let r = (0, s.A)(t);
        return (
          r !== i.h && (r = n.P),
          r.getAnimatableNone ? r.getAnimatableNone(e) : void 0
        );
      }
    },
    2728: function (t, e, r) {
      "use strict";
      r.d(e, {
        A: function () {
          return a;
        },
      });
      var n = r(5385),
        i = r(7197),
        s = r(6173);
      let o = {
          ...s.j,
          color: n.$,
          backgroundColor: n.$,
          outlineColor: n.$,
          fill: n.$,
          stroke: n.$,
          borderColor: n.$,
          borderTopColor: n.$,
          borderRightColor: n.$,
          borderBottomColor: n.$,
          borderLeftColor: n.$,
          filter: i.h,
          WebkitFilter: i.h,
        },
        a = (t) => o[t];
    },
    6440: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return o;
        },
        C: function () {
          return a;
        },
      });
      var n = r(1649),
        i = r(6190),
        s = r(8340);
      let o = [
          n.Rx,
          i.px,
          i.aQ,
          i.RW,
          i.vw,
          i.vh,
          { test: (t) => "auto" === t, parse: (t) => t },
        ],
        a = (t) => o.find((0, s.l)(t));
    },
    6173: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return o;
        },
      });
      var n = r(1649),
        i = r(6190);
      let s = { ...n.Rx, transform: Math.round },
        o = {
          borderWidth: i.px,
          borderTopWidth: i.px,
          borderRightWidth: i.px,
          borderBottomWidth: i.px,
          borderLeftWidth: i.px,
          borderRadius: i.px,
          radius: i.px,
          borderTopLeftRadius: i.px,
          borderTopRightRadius: i.px,
          borderBottomRightRadius: i.px,
          borderBottomLeftRadius: i.px,
          width: i.px,
          maxWidth: i.px,
          height: i.px,
          maxHeight: i.px,
          size: i.px,
          top: i.px,
          right: i.px,
          bottom: i.px,
          left: i.px,
          padding: i.px,
          paddingTop: i.px,
          paddingRight: i.px,
          paddingBottom: i.px,
          paddingLeft: i.px,
          margin: i.px,
          marginTop: i.px,
          marginRight: i.px,
          marginBottom: i.px,
          marginLeft: i.px,
          rotate: i.RW,
          rotateX: i.RW,
          rotateY: i.RW,
          rotateZ: i.RW,
          scale: n.bA,
          scaleX: n.bA,
          scaleY: n.bA,
          scaleZ: n.bA,
          skew: i.RW,
          skewX: i.RW,
          skewY: i.RW,
          distance: i.px,
          translateX: i.px,
          translateY: i.px,
          translateZ: i.px,
          x: i.px,
          y: i.px,
          z: i.px,
          perspective: i.px,
          transformPerspective: i.px,
          opacity: n.Fq,
          originX: i.$C,
          originY: i.$C,
          originZ: i.px,
          zIndex: s,
          fillOpacity: n.Fq,
          strokeOpacity: n.Fq,
          numOctaves: s,
        };
    },
    8340: function (t, e, r) {
      "use strict";
      r.d(e, {
        l: function () {
          return n;
        },
      });
      let n = (t) => (e) => e.test(t);
    },
    4547: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return d;
        },
      });
      var n = r(8057),
        i = r(7630),
        s = r(4714),
        o = r(189),
        a = r(4242),
        l = r(2728),
        u = r(6460),
        c = r(1760),
        h = r(406);
      class d extends c.J {
        readValueFromInstance(t, e) {
          if (s.G.has(e)) {
            let t = (0, l.A)(e);
            return (t && t.default) || 0;
          }
          {
            let r = window.getComputedStyle(t),
              n = ((0, i.f9)(e) ? r.getPropertyValue(e) : r[e]) || 0;
            return "string" == typeof n ? n.trim() : n;
          }
        }
        measureInstanceViewportBox(t, { transformPagePoint: e }) {
          return (0, u.J)(t, e);
        }
        build(t, e, r, i) {
          (0, n.r)(t, e, r, i.transformTemplate);
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, o.U)(t, e);
        }
        handleChildMotionValue() {
          this.childSubscription &&
            (this.childSubscription(), delete this.childSubscription);
          let { children: t } = this.props;
          (0, h.i)(t) &&
            (this.childSubscription = t.on("change", (t) => {
              this.current && (this.current.textContent = `${t}`);
            }));
        }
        renderInstance(t, e, r, n) {
          (0, a.N)(t, e, r, n);
        }
      }
    },
    8057: function (t, e, r) {
      "use strict";
      r.d(e, {
        r: function () {
          return u;
        },
      });
      var n = r(4714);
      let i = {
          x: "translateX",
          y: "translateY",
          z: "translateZ",
          transformPerspective: "perspective",
        },
        s = n._.length;
      var o = r(7630);
      let a = (t, e) => (e && "number" == typeof t ? e.transform(t) : t);
      var l = r(6173);
      function u(t, e, r, u) {
        let { style: c, vars: h, transform: d, transformOrigin: p } = t,
          f = !1,
          m = !1,
          v = !0;
        for (let t in e) {
          let r = e[t];
          if ((0, o.f9)(t)) {
            h[t] = r;
            continue;
          }
          let i = l.j[t],
            s = a(r, i);
          if (n.G.has(t)) {
            if (((f = !0), (d[t] = s), !v)) continue;
            r !== (i.default || 0) && (v = !1);
          } else t.startsWith("origin") ? ((m = !0), (p[t] = s)) : (c[t] = s);
        }
        if (
          (!e.transform &&
            (f || u
              ? (c.transform = (function (
                  t,
                  {
                    enableHardwareAcceleration: e = !0,
                    allowTransformNone: r = !0,
                  },
                  o,
                  a
                ) {
                  let l = "";
                  for (let e = 0; e < s; e++) {
                    let r = n._[e];
                    if (void 0 !== t[r]) {
                      let e = i[r] || r;
                      l += `${e}(${t[r]}) `;
                    }
                  }
                  return (
                    e && !t.z && (l += "translateZ(0)"),
                    (l = l.trim()),
                    a ? (l = a(t, o ? "" : l)) : r && o && (l = "none"),
                    l
                  );
                })(t.transform, r, v, u))
              : c.transform && (c.transform = "none")),
          m)
        ) {
          let { originX: t = "50%", originY: e = "50%", originZ: r = 0 } = p;
          c.transformOrigin = `${t} ${e} ${r}`;
        }
      }
    },
    4242: function (t, e, r) {
      "use strict";
      function n(t, { style: e, vars: r }, n, i) {
        for (let s in (Object.assign(t.style, e, i && i.getProjectionStyles(n)),
        r))
          t.style.setProperty(s, r[s]);
      }
      r.d(e, {
        N: function () {
          return n;
        },
      });
    },
    189: function (t, e, r) {
      "use strict";
      r.d(e, {
        U: function () {
          return s;
        },
      });
      var n = r(6816),
        i = r(406);
      function s(t, e) {
        let { style: r } = t,
          s = {};
        for (let o in r)
          ((0, i.i)(r[o]) ||
            (e.style && (0, i.i)(e.style[o])) ||
            (0, n.j)(o, t)) &&
            (s[o] = r[o]);
        return s;
      }
    },
    4714: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return i;
        },
        _: function () {
          return n;
        },
      });
      let n = [
          "transformPerspective",
          "x",
          "y",
          "z",
          "translateX",
          "translateY",
          "translateZ",
          "scale",
          "scaleX",
          "scaleY",
          "rotate",
          "rotateX",
          "rotateY",
          "rotateZ",
          "skew",
          "skewX",
          "skewY",
        ],
        i = new Set(n);
    },
    6955: function (t, e, r) {
      "use strict";
      r.d(e, {
        R: function () {
          return n;
        },
      });
      let n = new WeakMap();
    },
    5794: function (t, e, r) {
      "use strict";
      r.d(e, {
        e: function () {
          return p;
        },
      });
      var n = r(6832),
        i = r(1760),
        s = r(5415),
        o = r(3193),
        a = r(8440),
        l = r(4714),
        u = r(8504),
        c = r(2728),
        h = r(1512),
        d = r(9854);
      class p extends i.J {
        constructor() {
          super(...arguments), (this.isSVGTag = !1);
        }
        getBaseTargetFromProps(t, e) {
          return t[e];
        }
        readValueFromInstance(t, e) {
          if (l.G.has(e)) {
            let t = (0, c.A)(e);
            return (t && t.default) || 0;
          }
          return (e = a.s.has(e) ? e : (0, o.D)(e)), t.getAttribute(e);
        }
        measureInstanceViewportBox() {
          return (0, h.dO)();
        }
        scrapeMotionValuesFromProps(t, e) {
          return (0, n.U)(t, e);
        }
        build(t, e, r, n) {
          (0, s.i)(t, e, r, this.isSVGTag, n.transformTemplate);
        }
        renderInstance(t, e, r, n) {
          (0, u.K)(t, e, r, n);
        }
        mount(t) {
          (this.isSVGTag = (0, d.a)(t.tagName)), super.mount(t);
        }
      }
    },
    5415: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return l;
        },
      });
      var n = r(8057),
        i = r(6190);
      function s(t, e, r) {
        return "string" == typeof t ? t : i.px.transform(e + r * t);
      }
      let o = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
        a = { offset: "strokeDashoffset", array: "strokeDasharray" };
      function l(
        t,
        {
          attrX: e,
          attrY: r,
          attrScale: l,
          originX: u,
          originY: c,
          pathLength: h,
          pathSpacing: d = 1,
          pathOffset: p = 0,
          ...f
        },
        m,
        v,
        y
      ) {
        if (((0, n.r)(t, f, m, y), v)) {
          t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
          return;
        }
        (t.attrs = t.style), (t.style = {});
        let { attrs: g, style: x, dimensions: b } = t;
        g.transform && (b && (x.transform = g.transform), delete g.transform),
          b &&
            (void 0 !== u || void 0 !== c || x.transform) &&
            (x.transformOrigin = (function (t, e, r) {
              let n = s(e, t.x, t.width),
                i = s(r, t.y, t.height);
              return `${n} ${i}`;
            })(b, void 0 !== u ? u : 0.5, void 0 !== c ? c : 0.5)),
          void 0 !== e && (g.x = e),
          void 0 !== r && (g.y = r),
          void 0 !== l && (g.scale = l),
          void 0 !== h &&
            (function (t, e, r = 1, n = 0, s = !0) {
              t.pathLength = 1;
              let l = s ? o : a;
              t[l.offset] = i.px.transform(-n);
              let u = i.px.transform(e),
                c = i.px.transform(r);
              t[l.array] = `${u} ${c}`;
            })(g, h, d, p, !1);
      }
    },
    8440: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return n;
        },
      });
      let n = new Set([
        "baseFrequency",
        "diffuseConstant",
        "kernelMatrix",
        "kernelUnitLength",
        "keySplines",
        "keyTimes",
        "limitingConeAngle",
        "markerHeight",
        "markerWidth",
        "numOctaves",
        "targetX",
        "targetY",
        "surfaceScale",
        "specularConstant",
        "specularExponent",
        "stdDeviation",
        "tableValues",
        "viewBox",
        "gradientTransform",
        "pathLength",
        "startOffset",
        "textLength",
        "lengthAdjust",
      ]);
    },
    9854: function (t, e, r) {
      "use strict";
      r.d(e, {
        a: function () {
          return n;
        },
      });
      let n = (t) => "string" == typeof t && "svg" === t.toLowerCase();
    },
    8504: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return o;
        },
      });
      var n = r(3193),
        i = r(4242),
        s = r(8440);
      function o(t, e, r, o) {
        for (let r in ((0, i.N)(t, e, void 0, o), e.attrs))
          t.setAttribute(s.s.has(r) ? r : (0, n.D)(r), e.attrs[r]);
      }
    },
    6832: function (t, e, r) {
      "use strict";
      r.d(e, {
        U: function () {
          return o;
        },
      });
      var n = r(406),
        i = r(189),
        s = r(4714);
      function o(t, e) {
        let r = (0, i.U)(t, e);
        for (let i in t)
          if ((0, n.i)(t[i]) || (0, n.i)(e[i])) {
            let e =
              -1 !== s._.indexOf(i)
                ? "attr" + i.charAt(0).toUpperCase() + i.substring(1)
                : i;
            r[e] = t[i];
          }
        return r;
      }
    },
    7504: function (t, e, r) {
      "use strict";
      r.d(e, {
        G: function () {
          return o;
        },
        M: function () {
          return a;
        },
      });
      var n = r(2445),
        i = r(7732),
        s = r(2963);
      function o(t) {
        return (0, n.H)(t.animate) || s.V.some((e) => (0, i.$)(t[e]));
      }
      function a(t) {
        return !!(o(t) || t.variants);
      }
    },
    7732: function (t, e, r) {
      "use strict";
      function n(t) {
        return "string" == typeof t || Array.isArray(t);
      }
      r.d(e, {
        $: function () {
          return n;
        },
      });
    },
    2248: function (t, e, r) {
      "use strict";
      r.d(e, {
        x: function () {
          return i;
        },
      });
      var n = r(9432);
      function i(t, e, r) {
        let i = t.getProps();
        return (0, n.o)(
          i,
          e,
          void 0 !== r ? r : i.custom,
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.get())), e;
          })(t),
          (function (t) {
            let e = {};
            return t.values.forEach((t, r) => (e[r] = t.getVelocity())), e;
          })(t)
        );
      }
    },
    9432: function (t, e, r) {
      "use strict";
      function n(t, e, r, n = {}, i = {}) {
        return (
          "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
          "string" == typeof e && (e = t.variants && t.variants[e]),
          "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, n, i)),
          e
        );
      }
      r.d(e, {
        o: function () {
          return n;
        },
      });
    },
    8172: function (t, e, r) {
      "use strict";
      r.d(e, {
        GJ: function () {
          return v;
        },
        P$: function () {
          return y;
        },
        CD: function () {
          return m;
        },
      });
      let n = (t) => /^\-?\d*\.?\d+$/.test(t);
      var i = r(681),
        s = r(8715),
        o = r(3234),
        a = r(1550),
        l = r(9135),
        u = r(5385),
        c = r(6440),
        h = r(8340);
      let d = [...c.$, u.$, a.P],
        p = (t) => d.find((0, h.l)(t));
      var f = r(2248);
      function m(t, e) {
        let r = (0, f.x)(t, e),
          {
            transitionEnd: n = {},
            transition: i = {},
            ...a
          } = r ? t.makeTargetAnimatable(r, !1) : {};
        for (let e in (a = { ...a, ...n })) {
          let r = (0, s.Y)(a[e]);
          t.hasValue(e) ? t.getValue(e).set(r) : t.addValue(e, (0, o.B)(r));
        }
      }
      function v(t, e, r) {
        var s, u;
        let c = Object.keys(e).filter((e) => !t.hasValue(e)),
          h = c.length;
        if (h)
          for (let d = 0; d < h; d++) {
            let h = c[d],
              f = e[h],
              m = null;
            Array.isArray(f) && (m = f[0]),
              null === m &&
                (m =
                  null !==
                    (u =
                      null !== (s = r[h]) && void 0 !== s
                        ? s
                        : t.readValue(h)) && void 0 !== u
                    ? u
                    : e[h]),
              null != m &&
                ("string" == typeof m && (n(m) || (0, i.W)(m))
                  ? (m = parseFloat(m))
                  : !p(m) && a.P.test(f) && (m = (0, l.T)(h, f)),
                t.addValue(h, (0, o.B)(m, { owner: t })),
                void 0 === r[h] && (r[h] = m),
                null !== m && t.setBaseTarget(h, m));
          }
      }
      function y(t, e, r) {
        let n = {};
        for (let i in t) {
          let t = (function (t, e) {
            if (!e) return;
            let r = e[t] || e.default || e;
            return r.from;
          })(i, e);
          if (void 0 !== t) n[i] = t;
          else {
            let t = r.getValue(i);
            t && (n[i] = t.get());
          }
        }
        return n;
      }
    },
    2963: function (t, e, r) {
      "use strict";
      r.d(e, {
        V: function () {
          return i;
        },
        e: function () {
          return n;
        },
      });
      let n = [
          "animate",
          "whileInView",
          "whileFocus",
          "whileHover",
          "whileTap",
          "whileDrag",
          "exit",
        ],
        i = ["initial", ...n];
    },
    10: function (t, e, r) {
      "use strict";
      function n(t, e) {
        -1 === t.indexOf(e) && t.push(e);
      }
      function i(t, e) {
        let r = t.indexOf(e);
        r > -1 && t.splice(r, 1);
      }
      r.d(e, {
        cl: function () {
          return i;
        },
        y4: function () {
          return n;
        },
      });
    },
    4169: function (t, e, r) {
      "use strict";
      r.d(e, {
        u: function () {
          return n;
        },
      });
      let n = (t, e, r) => Math.min(Math.max(r, t), e);
    },
    5487: function (t, e, r) {
      "use strict";
      r.d(e, {
        K: function () {
          return i;
        },
        k: function () {
          return s;
        },
      });
      var n = r(1662);
      let i = n.Z,
        s = n.Z;
    },
    4606: function (t, e, r) {
      "use strict";
      r.d(e, {
        s: function () {
          return k;
        },
      });
      var n = r(5487),
        i = r(5385),
        s = r(4169),
        o = r(22);
      function a(t, e, r) {
        return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6)
          ? t + (e - t) * 6 * r
          : r < 0.5
          ? e
          : r < 2 / 3
          ? t + (e - t) * (2 / 3 - r) * 6
          : t;
      }
      var l = r(6382),
        u = r(819),
        c = r(3184);
      let h = (t, e, r) => {
          let n = t * t;
          return Math.sqrt(Math.max(0, r * (e * e - n) + n));
        },
        d = [l.$, u.m, c.J],
        p = (t) => d.find((e) => e.test(t));
      function f(t) {
        let e = p(t);
        (0, n.k)(
          !!e,
          `'${t}' is not an animatable color. Use the equivalent color code instead.`
        );
        let r = e.parse(t);
        return (
          e === c.J &&
            (r = (function ({ hue: t, saturation: e, lightness: r, alpha: n }) {
              (t /= 360), (r /= 100);
              let i = 0,
                s = 0,
                o = 0;
              if ((e /= 100)) {
                let n = r < 0.5 ? r * (1 + e) : r + e - r * e,
                  l = 2 * r - n;
                (i = a(l, n, t + 1 / 3)),
                  (s = a(l, n, t)),
                  (o = a(l, n, t - 1 / 3));
              } else i = s = o = r;
              return {
                red: Math.round(255 * i),
                green: Math.round(255 * s),
                blue: Math.round(255 * o),
                alpha: n,
              };
            })(r)),
          r
        );
      }
      let m = (t, e) => {
        let r = f(t),
          n = f(e),
          i = { ...r };
        return (t) => (
          (i.red = h(r.red, n.red, t)),
          (i.green = h(r.green, n.green, t)),
          (i.blue = h(r.blue, n.blue, t)),
          (i.alpha = (0, o.C)(r.alpha, n.alpha, t)),
          u.m.transform(i)
        );
      };
      var v = r(3624),
        y = r(1550);
      let g = (t, e) => (r) => `${r > 0 ? e : t}`;
      function x(t, e) {
        return "number" == typeof t
          ? (r) => (0, o.C)(t, e, r)
          : i.$.test(t)
          ? m(t, e)
          : t.startsWith("var(")
          ? g(t, e)
          : P(t, e);
      }
      let b = (t, e) => {
          let r = [...t],
            n = r.length,
            i = t.map((t, r) => x(t, e[r]));
          return (t) => {
            for (let e = 0; e < n; e++) r[e] = i[e](t);
            return r;
          };
        },
        w = (t, e) => {
          let r = { ...t, ...e },
            n = {};
          for (let i in r)
            void 0 !== t[i] && void 0 !== e[i] && (n[i] = x(t[i], e[i]));
          return (t) => {
            for (let e in n) r[e] = n[e](t);
            return r;
          };
        },
        P = (t, e) => {
          let r = y.P.createTransformer(e),
            i = (0, y.V)(t),
            s = (0, y.V)(e),
            o =
              i.numVars === s.numVars &&
              i.numColors === s.numColors &&
              i.numNumbers >= s.numNumbers;
          return o
            ? (0, v.z)(b(i.values, s.values), r)
            : ((0, n.K)(
                !0,
                `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
              ),
              g(t, e));
        };
      var S = r(3967),
        A = r(1662);
      let C = (t, e) => (r) => (0, o.C)(t, e, r);
      function k(t, e, { clamp: r = !0, ease: o, mixer: a } = {}) {
        let l = t.length;
        if (
          ((0, n.k)(
            l === e.length,
            "Both input and output ranges must be the same length"
          ),
          1 === l)
        )
          return () => e[0];
        t[0] > t[l - 1] && ((t = [...t].reverse()), (e = [...e].reverse()));
        let u = (function (t, e, r) {
            let n = [],
              s =
                r ||
                (function (t) {
                  if ("number" == typeof t);
                  else if ("string" == typeof t) return i.$.test(t) ? m : P;
                  else if (Array.isArray(t)) return b;
                  else if ("object" == typeof t) return w;
                  return C;
                })(t[0]),
              o = t.length - 1;
            for (let r = 0; r < o; r++) {
              let i = s(t[r], t[r + 1]);
              if (e) {
                let t = Array.isArray(e) ? e[r] || A.Z : e;
                i = (0, v.z)(t, i);
              }
              n.push(i);
            }
            return n;
          })(e, o, a),
          c = u.length,
          h = (e) => {
            let r = 0;
            if (c > 1) for (; r < t.length - 2 && !(e < t[r + 1]); r++);
            let n = (0, S.Y)(t[r], t[r + 1], e);
            return u[r](n);
          };
        return r ? (e) => h((0, s.u)(t[0], t[l - 1], e)) : h;
      }
    },
    1741: function (t, e, r) {
      "use strict";
      r.d(e, {
        j: function () {
          return n;
        },
      });
      let n = "undefined" != typeof document;
    },
    1804: function (t, e, r) {
      "use strict";
      function n(t) {
        return (
          "object" == typeof t &&
          Object.prototype.hasOwnProperty.call(t, "current")
        );
      }
      r.d(e, {
        I: function () {
          return n;
        },
      });
    },
    681: function (t, e, r) {
      "use strict";
      r.d(e, {
        W: function () {
          return n;
        },
      });
      let n = (t) => /^0[^.\s]+$/.test(t);
    },
    4522: function (t, e, r) {
      "use strict";
      function n(t) {
        let e;
        return () => (void 0 === e && (e = t()), e);
      }
      r.d(e, {
        X: function () {
          return n;
        },
      });
    },
    22: function (t, e, r) {
      "use strict";
      r.d(e, {
        C: function () {
          return n;
        },
      });
      let n = (t, e, r) => -r * t + r * e + t;
    },
    1662: function (t, e, r) {
      "use strict";
      r.d(e, {
        Z: function () {
          return n;
        },
      });
      let n = (t) => t;
    },
    599: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return i;
        },
      });
      var n = r(6615);
      function i(t) {
        let e = [0];
        return (0, n.c)(e, t.length - 1), e;
      }
    },
    6615: function (t, e, r) {
      "use strict";
      r.d(e, {
        c: function () {
          return s;
        },
      });
      var n = r(22),
        i = r(3967);
      function s(t, e) {
        let r = t[t.length - 1];
        for (let s = 1; s <= e; s++) {
          let o = (0, i.Y)(0, e, s);
          t.push((0, n.C)(r, 1, o));
        }
      }
    },
    3624: function (t, e, r) {
      "use strict";
      r.d(e, {
        z: function () {
          return i;
        },
      });
      let n = (t, e) => (r) => e(t(r)),
        i = (...t) => t.reduce(n);
    },
    3967: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return n;
        },
      });
      let n = (t, e, r) => {
        let n = e - t;
        return 0 === n ? 1 : (r - t) / n;
      };
    },
    8715: function (t, e, r) {
      "use strict";
      r.d(e, {
        Y: function () {
          return s;
        },
        p: function () {
          return i;
        },
      });
      var n = r(8488);
      let i = (t) => !!(t && "object" == typeof t && t.mix && t.toValue),
        s = (t) => ((0, n.C)(t) ? t[t.length - 1] || 0 : t);
    },
    1560: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(10);
      class i {
        constructor() {
          this.subscriptions = [];
        }
        add(t) {
          return (
            (0, n.y4)(this.subscriptions, t),
            () => (0, n.cl)(this.subscriptions, t)
          );
        }
        notify(t, e, r) {
          let n = this.subscriptions.length;
          if (n) {
            if (1 === n) this.subscriptions[0](t, e, r);
            else
              for (let i = 0; i < n; i++) {
                let n = this.subscriptions[i];
                n && n(t, e, r);
              }
          }
        }
        getSize() {
          return this.subscriptions.length;
        }
        clear() {
          this.subscriptions.length = 0;
        }
      }
    },
    6917: function (t, e, r) {
      "use strict";
      r.d(e, {
        X: function () {
          return i;
        },
        w: function () {
          return n;
        },
      });
      let n = (t) => 1e3 * t,
        i = (t) => t / 1e3;
    },
    6681: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return i;
        },
      });
      var n = r(7294);
      function i(t) {
        let e = (0, n.useRef)(null);
        return null === e.current && (e.current = t()), e.current;
      }
    },
    6337: function (t, e, r) {
      "use strict";
      r.d(e, {
        N: function () {
          return o;
        },
      });
      var n = r(7294),
        i = r(4454),
        s = r(2074);
      function o() {
        let t = (0, i.t)(),
          [e, r] = (0, n.useState)(0),
          o = (0, n.useCallback)(() => {
            t.current && r(e + 1);
          }, [e]),
          a = (0, n.useCallback)(() => s.Wi.postRender(o), [o]);
        return [a, e];
      }
    },
    4454: function (t, e, r) {
      "use strict";
      r.d(e, {
        t: function () {
          return s;
        },
      });
      var n = r(7294),
        i = r(8868);
      function s() {
        let t = (0, n.useRef)(!1);
        return (
          (0, i.L)(
            () => (
              (t.current = !0),
              () => {
                t.current = !1;
              }
            ),
            []
          ),
          t
        );
      }
    },
    8868: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return s;
        },
      });
      var n = r(7294),
        i = r(1741);
      let s = i.j ? n.useLayoutEffect : n.useEffect;
    },
    3038: function (t, e, r) {
      "use strict";
      function n(t, e) {
        return e ? t * (1e3 / e) : 0;
      }
      r.d(e, {
        R: function () {
          return n;
        },
      });
    },
    3234: function (t, e, r) {
      "use strict";
      r.d(e, {
        B: function () {
          return l;
        },
      });
      var n = r(1560),
        i = r(3038),
        s = r(2074);
      let o = (t) => !isNaN(parseFloat(t));
      class a {
        constructor(t, e = {}) {
          (this.version = "10.15.0"),
            (this.timeDelta = 0),
            (this.lastUpdated = 0),
            (this.canTrackVelocity = !1),
            (this.events = {}),
            (this.updateAndNotify = (t, e = !0) => {
              (this.prev = this.current), (this.current = t);
              let { delta: r, timestamp: n } = s.frameData;
              this.lastUpdated !== n &&
                ((this.timeDelta = r),
                (this.lastUpdated = n),
                s.Wi.postRender(this.scheduleVelocityCheck)),
                this.prev !== this.current &&
                  this.events.change &&
                  this.events.change.notify(this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()),
                e &&
                  this.events.renderRequest &&
                  this.events.renderRequest.notify(this.current);
            }),
            (this.scheduleVelocityCheck = () =>
              s.Wi.postRender(this.velocityCheck)),
            (this.velocityCheck = ({ timestamp: t }) => {
              t !== this.lastUpdated &&
                ((this.prev = this.current),
                this.events.velocityChange &&
                  this.events.velocityChange.notify(this.getVelocity()));
            }),
            (this.hasAnimated = !1),
            (this.prev = this.current = t),
            (this.canTrackVelocity = o(this.current)),
            (this.owner = e.owner);
        }
        onChange(t) {
          return this.on("change", t);
        }
        on(t, e) {
          this.events[t] || (this.events[t] = new n.L());
          let r = this.events[t].add(e);
          return "change" === t
            ? () => {
                r(),
                  s.Wi.read(() => {
                    this.events.change.getSize() || this.stop();
                  });
              }
            : r;
        }
        clearListeners() {
          for (let t in this.events) this.events[t].clear();
        }
        attach(t, e) {
          (this.passiveEffect = t), (this.stopPassiveEffect = e);
        }
        set(t, e = !0) {
          e && this.passiveEffect
            ? this.passiveEffect(t, this.updateAndNotify)
            : this.updateAndNotify(t, e);
        }
        setWithVelocity(t, e, r) {
          this.set(e), (this.prev = t), (this.timeDelta = r);
        }
        jump(t) {
          this.updateAndNotify(t),
            (this.prev = t),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
        get() {
          return this.current;
        }
        getPrevious() {
          return this.prev;
        }
        getVelocity() {
          return this.canTrackVelocity
            ? (0, i.R)(
                parseFloat(this.current) - parseFloat(this.prev),
                this.timeDelta
              )
            : 0;
        }
        start(t) {
          return (
            this.stop(),
            new Promise((e) => {
              (this.hasAnimated = !0),
                (this.animation = t(e)),
                this.events.animationStart &&
                  this.events.animationStart.notify();
            }).then(() => {
              this.events.animationComplete &&
                this.events.animationComplete.notify(),
                this.clearAnimation();
            })
          );
        }
        stop() {
          this.animation &&
            (this.animation.stop(),
            this.events.animationCancel &&
              this.events.animationCancel.notify()),
            this.clearAnimation();
        }
        isAnimating() {
          return !!this.animation;
        }
        clearAnimation() {
          delete this.animation;
        }
        destroy() {
          this.clearListeners(),
            this.stop(),
            this.stopPassiveEffect && this.stopPassiveEffect();
        }
      }
      function l(t, e) {
        return new a(t, e);
      }
    },
    6382: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return s;
        },
      });
      var n = r(819),
        i = r(8834);
      let s = {
        test: (0, i.i)("#"),
        parse: function (t) {
          let e = "",
            r = "",
            n = "",
            i = "";
          return (
            t.length > 5
              ? ((e = t.substring(1, 3)),
                (r = t.substring(3, 5)),
                (n = t.substring(5, 7)),
                (i = t.substring(7, 9)))
              : ((e = t.substring(1, 2)),
                (r = t.substring(2, 3)),
                (n = t.substring(3, 4)),
                (i = t.substring(4, 5)),
                (e += e),
                (r += r),
                (n += n),
                (i += i)),
            {
              red: parseInt(e, 16),
              green: parseInt(r, 16),
              blue: parseInt(n, 16),
              alpha: i ? parseInt(i, 16) / 255 : 1,
            }
          );
        },
        transform: n.m.transform,
      };
    },
    3184: function (t, e, r) {
      "use strict";
      r.d(e, {
        J: function () {
          return a;
        },
      });
      var n = r(1649),
        i = r(6190),
        s = r(6430),
        o = r(8834);
      let a = {
        test: (0, o.i)("hsl", "hue"),
        parse: (0, o.d)("hue", "saturation", "lightness"),
        transform: ({ hue: t, saturation: e, lightness: r, alpha: o = 1 }) =>
          "hsla(" +
          Math.round(t) +
          ", " +
          i.aQ.transform((0, s.Nw)(e)) +
          ", " +
          i.aQ.transform((0, s.Nw)(r)) +
          ", " +
          (0, s.Nw)(n.Fq.transform(o)) +
          ")",
      };
    },
    5385: function (t, e, r) {
      "use strict";
      r.d(e, {
        $: function () {
          return a;
        },
      });
      var n = r(6430),
        i = r(6382),
        s = r(3184),
        o = r(819);
      let a = {
        test: (t) => o.m.test(t) || i.$.test(t) || s.J.test(t),
        parse: (t) =>
          o.m.test(t)
            ? o.m.parse(t)
            : s.J.test(t)
            ? s.J.parse(t)
            : i.$.parse(t),
        transform: (t) =>
          (0, n.HD)(t)
            ? t
            : t.hasOwnProperty("red")
            ? o.m.transform(t)
            : s.J.transform(t),
      };
    },
    819: function (t, e, r) {
      "use strict";
      r.d(e, {
        m: function () {
          return u;
        },
      });
      var n = r(4169),
        i = r(1649),
        s = r(6430),
        o = r(8834);
      let a = (t) => (0, n.u)(0, 255, t),
        l = { ...i.Rx, transform: (t) => Math.round(a(t)) },
        u = {
          test: (0, o.i)("rgb", "red"),
          parse: (0, o.d)("red", "green", "blue"),
          transform: ({ red: t, green: e, blue: r, alpha: n = 1 }) =>
            "rgba(" +
            l.transform(t) +
            ", " +
            l.transform(e) +
            ", " +
            l.transform(r) +
            ", " +
            (0, s.Nw)(i.Fq.transform(n)) +
            ")",
        };
    },
    8834: function (t, e, r) {
      "use strict";
      r.d(e, {
        d: function () {
          return s;
        },
        i: function () {
          return i;
        },
      });
      var n = r(6430);
      let i = (t, e) => (r) =>
          !!(
            ((0, n.HD)(r) && n.mj.test(r) && r.startsWith(t)) ||
            (e && Object.prototype.hasOwnProperty.call(r, e))
          ),
        s = (t, e, r) => (i) => {
          if (!(0, n.HD)(i)) return i;
          let [s, o, a, l] = i.match(n.KP);
          return {
            [t]: parseFloat(s),
            [e]: parseFloat(o),
            [r]: parseFloat(a),
            alpha: void 0 !== l ? parseFloat(l) : 1,
          };
        };
    },
    7197: function (t, e, r) {
      "use strict";
      r.d(e, {
        h: function () {
          return l;
        },
      });
      var n = r(1550),
        i = r(6430);
      let s = new Set(["brightness", "contrast", "saturate", "opacity"]);
      function o(t) {
        let [e, r] = t.slice(0, -1).split("(");
        if ("drop-shadow" === e) return t;
        let [n] = r.match(i.KP) || [];
        if (!n) return t;
        let o = r.replace(n, ""),
          a = s.has(e) ? 1 : 0;
        return n !== r && (a *= 100), e + "(" + a + o + ")";
      }
      let a = /([a-z-]*)\(.*?\)/g,
        l = {
          ...n.P,
          getAnimatableNone: (t) => {
            let e = t.match(a);
            return e ? e.map(o).join(" ") : t;
          },
        };
    },
    1550: function (t, e, r) {
      "use strict";
      r.d(e, {
        P: function () {
          return v;
        },
        V: function () {
          return d;
        },
      });
      var n = r(7630),
        i = r(1662),
        s = r(5385),
        o = r(1649),
        a = r(6430);
      let l = { regex: n.Xp, countKey: "Vars", token: "${v}", parse: i.Z },
        u = {
          regex: a.dA,
          countKey: "Colors",
          token: "${c}",
          parse: s.$.parse,
        },
        c = {
          regex: a.KP,
          countKey: "Numbers",
          token: "${n}",
          parse: o.Rx.parse,
        };
      function h(t, { regex: e, countKey: r, token: n, parse: i }) {
        let s = t.tokenised.match(e);
        s &&
          ((t["num" + r] = s.length),
          (t.tokenised = t.tokenised.replace(e, n)),
          t.values.push(...s.map(i)));
      }
      function d(t) {
        let e = t.toString(),
          r = {
            value: e,
            tokenised: e,
            values: [],
            numVars: 0,
            numColors: 0,
            numNumbers: 0,
          };
        return r.value.includes("var(--") && h(r, l), h(r, u), h(r, c), r;
      }
      function p(t) {
        return d(t).values;
      }
      function f(t) {
        let { values: e, numColors: r, numVars: n, tokenised: i } = d(t),
          o = e.length;
        return (t) => {
          let e = i;
          for (let i = 0; i < o; i++)
            e =
              i < n
                ? e.replace(l.token, t[i])
                : i < n + r
                ? e.replace(u.token, s.$.transform(t[i]))
                : e.replace(c.token, (0, a.Nw)(t[i]));
          return e;
        };
      }
      let m = (t) => ("number" == typeof t ? 0 : t),
        v = {
          test: function (t) {
            var e, r;
            return (
              isNaN(t) &&
              (0, a.HD)(t) &&
              ((null === (e = t.match(a.KP)) || void 0 === e
                ? void 0
                : e.length) || 0) +
                ((null === (r = t.match(a.dA)) || void 0 === r
                  ? void 0
                  : r.length) || 0) >
                0
            );
          },
          parse: p,
          createTransformer: f,
          getAnimatableNone: function (t) {
            let e = p(t),
              r = f(t);
            return r(e.map(m));
          },
        };
    },
    1649: function (t, e, r) {
      "use strict";
      r.d(e, {
        Fq: function () {
          return s;
        },
        Rx: function () {
          return i;
        },
        bA: function () {
          return o;
        },
      });
      var n = r(4169);
      let i = {
          test: (t) => "number" == typeof t,
          parse: parseFloat,
          transform: (t) => t,
        },
        s = { ...i, transform: (t) => (0, n.u)(0, 1, t) },
        o = { ...i, default: 1 };
    },
    6190: function (t, e, r) {
      "use strict";
      r.d(e, {
        $C: function () {
          return c;
        },
        RW: function () {
          return s;
        },
        aQ: function () {
          return o;
        },
        px: function () {
          return a;
        },
        vh: function () {
          return l;
        },
        vw: function () {
          return u;
        },
      });
      var n = r(6430);
      let i = (t) => ({
          test: (e) =>
            (0, n.HD)(e) && e.endsWith(t) && 1 === e.split(" ").length,
          parse: parseFloat,
          transform: (e) => `${e}${t}`,
        }),
        s = i("deg"),
        o = i("%"),
        a = i("px"),
        l = i("vh"),
        u = i("vw"),
        c = {
          ...o,
          parse: (t) => o.parse(t) / 100,
          transform: (t) => o.transform(100 * t),
        };
    },
    6430: function (t, e, r) {
      "use strict";
      r.d(e, {
        HD: function () {
          return a;
        },
        KP: function () {
          return i;
        },
        Nw: function () {
          return n;
        },
        dA: function () {
          return s;
        },
        mj: function () {
          return o;
        },
      });
      let n = (t) => Math.round(1e5 * t) / 1e5,
        i = /(-)?([\d]*\.?[\d])+/g,
        s =
          /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
        o =
          /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
      function a(t) {
        return "string" == typeof t;
      }
    },
    4960: function (t, e, r) {
      "use strict";
      r.d(e, {
        c: function () {
          return a;
        },
      });
      var n = r(7294),
        i = r(3234),
        s = r(6014),
        o = r(6681);
      function a(t) {
        let e = (0, o.h)(() => (0, i.B)(t)),
          { isStatic: r } = (0, n.useContext)(s._);
        if (r) {
          let [, r] = (0, n.useState)(t);
          (0, n.useEffect)(() => e.on("change", r), []);
        }
        return e;
      }
    },
    2490: function (t, e, r) {
      "use strict";
      r.d(e, {
        L: function () {
          return i;
        },
      });
      var n = r(406);
      function i(t) {
        return !!((0, n.i)(t) && t.add);
      }
    },
    406: function (t, e, r) {
      "use strict";
      r.d(e, {
        i: function () {
          return n;
        },
      });
      let n = (t) => !!(t && t.getVelocity);
    },
  },
  function (t) {
    var e = function (e) {
      return t((t.s = e));
    };
    t.O(0, [774, 179], function () {
      return e(1118), e(6885);
    }),
      (_N_E = t.O());
  },
]);
