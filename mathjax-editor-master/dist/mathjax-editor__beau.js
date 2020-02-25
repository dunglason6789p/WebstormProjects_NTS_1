!function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.mathJaxEditor = t() : e.mathJaxEditor = t()
}(window, function () {
    return function (e) {
        var t = {};

        function n(r) {
            if (t[r]) return t[r].exports;
            var a = t[r] = {i: r, l: !1, exports: {}};
            return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
        }

        return n.m = e, n.c = t, n.d = function (e, t, r) {
            n.o(e, t) || Object.defineProperty(e, t, {enumerable: !0, get: r})
        }, n.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, n.t = function (e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e) for (var a in e) n.d(r, a, function (t) {
                return e[t]
            }.bind(null, a));
            return r
        }, n.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function (e, t, n) {
        "use strict";

        function r(e) {
            return e.toLowerCase()
        }

        function a(e, t) {
            switch (r(t.tagName)) {
                case"mrow":
                case"math":
                    return t.children.length ? (t.insertBefore(e, t.lastElementChild.nextSibling), !0) : (t.appendChild(e), !0);
                default:
                    return t.parentNode.insertBefore(e, t), !0
            }
        }

        function i(e, t, n) {
            var a = t.parentNode;
            if (t.hasAttribute("editable")) return n || t;
            switch (r(t.tagName)) {
                case"mrow":
                    return i(e, a, t);
                case"math":
                    return t
            }
            var o = t.nextElementSibling || a;
            return a.removeChild(t), o
        }

        function o(e, t) {
            !function e(n) {
                var a = "mrow" === r(n.tagName) || "math" === r(n.tagName);
                if (a || t(n), n.children) for (var i = n.firstElementChild; i;) e(i), i = i.nextElementSibling;
                a && t(n)
            }(e)
        }

        n.r(t);
        var u = 0;

        function l() {
            return "mje-node".concat(u++)
        }

        function c(e) {
            return "newline" === e.getAttribute("linebreak")
        }

        var d = ["mo", "mi", "mn", "mspace"];

        function f(e) {
            o(e, function (e) {
                e.id || (e.id = l())
            });
            var t = e.cloneNode(!0), n = function () {
                var e = MathJax.HTML.Element("mspace");
                return e.setAttribute("width", "thinmathspace"), e
            }, a = function () {
                return MathJax.HTML.Element("mo", {className: "mje-newline"}, ["⏎"])
            };
            return o(t, function (e) {
                var i = r(e.tagName);
                switch (i) {
                    case"mspace":
                        if (!e.id) break;
                        if (!c(e)) break;
                        var o = e.nextElementSibling || t.lastElementChild, u = t.firstChild, l = o === e;
                        o && "mspace" === r(o.tagName) && c(o) && (l = !0), l && e.parentNode.insertBefore(a(), e.nextSibling), u === e && e.parentNode.insertBefore(a(), e);
                        break;
                    case"mrow":
                    case"math":
                        if (!e.children.length) {
                            e.appendChild(MathJax.HTML.Element("mi", {className: "mje-placeholder"}, ["?"]));
                            break
                        }
                        "math" !== i && (e.appendChild(n()), e.insertBefore(n(), e.firstChild));
                        break;
                    default:
                        -1 === d.indexOf(i) && e.parentNode.insertBefore(n(), e.nextSibling)
                }
            }), t.outerHTML
        }

        var s = {
            "*": "⋅",
            "/": "÷",
            "+": "+",
            "-": "-",
            "=": "=",
            "<": "<",
            ">": ">",
            "|": "|",
            "%": "%",
            ",": ",",
            ".": ".",
            $: "$",
            "(": "(",
            ")": ")",
            "[": "[",
            "]": "]",
            "!": "!"
        };

        function m(e) {
            var t, n, a = {}, i = [], u = null, d = null, f = function (e, t) {
                if (e) {
                    if (!a.hasOwnProperty(t)) {
                        var n = e.getBoundingClientRect();
                        n.x = n.left, n.y = n.top, n.y += window.pageYOffset, a[t] = n
                    }
                    return a[t]
                }
            };
            return o(e, function (a) {
                var o = document.getElementById(a.id);
                if (o) {
                    var s, m, h, p, x = a.children.length, M = o.lastElementChild, v = a.parentNode, b = r(a.tagName),
                        w = f(o, a.id), E = {y: w.top, height: w.height, source: a, previous: u};
                    switch (v && "mrow" !== b && (p = !1, h = v.id, v === e && (p = !0, s = function (e) {
                        for (var t = e.parentNode; t;) {
                            if ("mjx-math" == t.className) return !1;
                            if ("mjx-box" == t.className) return t.setAttribute("id", l()), t;
                            t = t.parentNode
                        }
                        return console.warning("mathJaxEditor: could not found a block for this line"), !1
                    }(o)), s ? h = s.id : s = document.getElementById(v.id), m = f(s, h), E.y = m.top, E.height = s.clientHeight, p && (n || (n = m), t && m !== t && (n = t), t = m)), d && (d.next = a), r(b)) {
                        case"mspace":
                            if (!c(a)) break;
                            var g = a.previousElementSibling, y = g && c(g), L = e.firstElementChild === a,
                                J = L ? function () {
                                    var t = document.getElementById(e.id).querySelector(".mjx-block").getBoundingClientRect();
                                    return t.x = t.left, t.y = t.top, t
                                }() : n;
                            E.x = J.x + (L ? 0 : y ? 0 : J.width), E.y = J.y, E.height = J.height;
                            break;
                        case"math":
                            var T = a.lastElementChild, H = T && c(T);
                            t ? (E.x = t.x + (H ? 0 : t.width), E.y = t.y, E.height = t.height) : E.x = (x ? w.width : 0) + w.left;
                            break;
                        case"mrow":
                            E.x = (x ? w.width - M.clientWidth : 0) + w.left;
                            break;
                        default:
                            E.x = w.left
                    }
                    i.push(E), u = a, d = E
                }
            }), i
        }

        function h(e) {
            if (!MathJax) throw new Error("mathJaxEditor: MathJax not found. Ensure that MathJax is loaded before calling mathJaxEditor.");
            var t = {}, n = MathJax.HTML.Element("math"), u = function () {
                var e = MathJax.HTML.Element("div", {className: "mje-wrapper"}),
                    t = MathJax.HTML.Element("div", {className: "mje-container"}),
                    n = MathJax.HTML.Element("div", {className: "mje-cursor hidden"}),
                    r = MathJax.HTML.Element("input", {className: "mje-input"}), a = null, i = !1, o = !1, u = null,
                    l = {click: null, input: null, code: null}, c = function () {
                        i ? (n.classList.remove("hidden"), t.classList.add("focused")) : (n.classList.add("hidden"), t.classList.remove("focused"))
                    }, d = function e() {
                        i && n.classList.toggle("hidden"), u = setTimeout(e, 700)
                    }, f = function () {
                        i && (n.classList.remove("hidden"), clearTimeout(u), u = setTimeout(d, 700))
                    };
                return e.appendChild(t), e.appendChild(n), e.appendChild(r), document.addEventListener("click", function () {
                    if (!o) return i = !1, r.blur(), c()
                }), t.addEventListener("click", function (e) {
                    i = !0, l.click(e.clientX, e.clientY + window.pageYOffset), r.focus(), c()
                }), t.addEventListener("mouseenter", function () {
                    o = !0
                }), t.addEventListener("mouseleave", function () {
                    o = !1
                }), r.addEventListener("blur", function () {
                    return o ? (r.focus(), c()) : (i = !1, c())
                }), r.addEventListener("keypress", function (e) {
                    l.input(String.fromCharCode(e.which))
                }), r.addEventListener("keydown", function (e) {
                    l.code(e.keyCode)
                }), u = setTimeout(d, 700), {
                    events: l, unblink: f, wrapper: function () {
                        return e
                    }, value: function (e) {
                        return f(), new Promise(function (n) {
                            if (a) return a.Text(e, n);
                            t.innerHTML = e;
                            var i = function () {
                                MathJax.Hub.Queue(["Typeset", MathJax.Hub, t, function () {
                                    a = MathJax.Hub.getAllJax(r)[0], n()
                                }])
                            };
                            MathJax.isReady ? i() : MathJax.Hub.Register.StartupHook("End", function () {
                                setTimeout(i, 1e3)
                            })
                        })
                    }, draw: function (e) {
                        e && (n.style.left = "".concat(e.x, "px"), n.style.top = "".concat(e.y, "px"), n.style.height = "".concat(e.height, "px"), r.style.left = "".concat(e.x, "px"), r.style.top = "".concat(e.y, "px"))
                    }
                }
            }(), l = n, c = null, d = null, h = !1, p = [], x = !1, M = function () {
                c = d.find(function (e) {
                    return e.source === l
                }), u.draw(c)
            }, v = function (e, t) {
                return e && (u.unblink(), l = e), t ? u.value(f(t)).then(function () {
                    d = m(t), M()
                }) : M()
            }, b = function (e) {
                if (!h) return !0;
                if (e && p.length && -1 === p.indexOf(e)) return !1;
                for (var t = l; t;) {
                    if (t.hasAttribute("editable")) return !0;
                    t = t.parentNode
                }
                return !1
            };
            if (t.raw = function () {
                return n
            }, t.path = function () {
                return d
            }, t.version = function () {
                return "1.0.2"
            }, t.right = function () {
                v(c.next)
            }, t.left = function () {
                v(c.previous)
            }, t.del = function () {
                b() && v(i(n, l), n)
            }, t.backspace = function () {
                b() && v(function (e, t) {
                    var n = t.parentNode, a = t.previousElementSibling, o = r(t.tagName);
                    switch (o) {
                        case"mrow":
                        case"math":
                            return t.lastElementChild ? i(e, t.lastElementChild, t) : "math" === o ? t : i(e, n, t)
                    }
                    return a || "math" !== r(n.tagName) ? i(e, a || n, t) : t
                }(n, l), n)
            }, t.newline = function () {
                if (x && b() && (l.parentNode === n || l === n)) {
                    var e = MathJax.HTML.Element("mspace");
                    e.setAttribute("linebreak", "newline"), a(e, l), v(null, n)
                }
            }, t.number = function (e) {
                b("mn") && (a(MathJax.HTML.Element("mn", null, [e]), l), v(null, n))
            }, t.identifier = function (e) {
                b("mi") && (a(MathJax.HTML.Element("mi", null, [e]), l), v(null, n))
            }, t.operator = function (e) {
                b("mo") && (a(MathJax.HTML.Element("mo", null, [e]), l), v(null, n))
            }, t.frac = function () {
                if (b("mfrac")) {
                    var e = MathJax.HTML.Element("mfrac"), t = MathJax.HTML.Element("mrow"),
                        r = MathJax.HTML.Element("mrow");
                    e.appendChild(t), e.appendChild(r), a(e, l), v(t, n)
                }
            }, t.sqrt = function () {
                if (b("msqrt")) {
                    var e = MathJax.HTML.Element("msqrt"), t = MathJax.HTML.Element("mrow");
                    e.appendChild(t), a(e, l), v(t, n)
                }
            }, t.root = function () {
                if (b("mroot")) {
                    var e = MathJax.HTML.Element("mroot"), t = MathJax.HTML.Element("mrow"),
                        r = MathJax.HTML.Element("mrow");
                    e.appendChild(t), e.appendChild(r), a(e, l), v(t, n)
                }
            }, t.sup = function () {
                if (b("msup")) {
                    var e = MathJax.HTML.Element("msup"), t = MathJax.HTML.Element("mrow"),
                        r = MathJax.HTML.Element("mrow");
                    e.appendChild(t), e.appendChild(r), a(e, l), v(t, n)
                }
            }, t.sub = function () {
                if (b("msub")) {
                    var e = MathJax.HTML.Element("msub"), t = MathJax.HTML.Element("mrow"),
                        r = MathJax.HTML.Element("mrow");
                    e.appendChild(t), e.appendChild(r), a(e, l), v(t, n)
                }
            }, t.subsup = function () {
                if (b("msubsup")) {
                    var e = MathJax.HTML.Element("msubsup"), t = MathJax.HTML.Element("mrow"),
                        r = MathJax.HTML.Element("mrow"), i = MathJax.HTML.Element("mrow");
                    e.appendChild(t), e.appendChild(r), e.appendChild(i), a(e, l), v(t, n)
                }
            }, t.get = function () {
                var e = n.cloneNode(!0);
                return o(e, function (e) {
                    return e.removeAttribute("id")
                }), e.outerHTML
            }, t.set = function (e) {
                var t = (new DOMParser).parseFromString(e, "text/html");
                (n = t.body.firstElementChild).parentNode.removeChild(n), v(n, n)
            }, t.readonly = function (e) {
                h = e
            }, t.allowedTags = function (e) {
                p = e
            }, t.allowNewline = function (e) {
                x = e
            }, u.events.click = function (e, t) {
                var n = 1 / 0, r = null, a = !0, i = !1, o = void 0;
                try {
                    for (var u, c = (d || [])[Symbol.iterator](); !(a = (u = c.next()).done); a = !0) {
                        var f = u.value, s = f.x, m = f.y, h = m + f.height, p = Math.abs(s - e);
                        m <= t && t <= h && n > p && (n = p, r = f)
                    }
                } catch (e) {
                    i = !0, o = e
                } finally {
                    try {
                        a || null == c.return || c.return()
                    } finally {
                        if (i) throw o
                    }
                }
                r && r.source !== l && v(r.source)
            }, u.events.input = function (e) {
                return e.match(/\d/) ? t.number(e) : e.match(/[a-zA-Z]/) ? t.identifier(e) : s.hasOwnProperty(e) ? t.operator(s[e]) : void 0
            }, u.events.code = function (e) {
                switch (e) {
                    case 8:
                        return t.backspace();
                    case 13:
                        return t.newline();
                    case 37:
                        return t.left();
                    case 39:
                        return t.right();
                    case 46:
                        return t.del()
                }
            }, "string" == typeof e && (e = document.querySelector(e)), !e || !e.parentNode) throw new Error("mathJaxEditor: target element not found.");
            return e.parentNode.replaceChild(u.wrapper(), e), MathJax.Hub.processSectionDelay = 0, v(n, n), t
        }

        n.d(t, "default", function () {
            return h
        })
    }]).default
});
