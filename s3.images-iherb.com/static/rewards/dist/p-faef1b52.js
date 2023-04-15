let t, n, e = !1,
    l = !1;
const o = {},
    s = t => "object" == (t = typeof t) || "function" === t;

function c(t) {
    var n, e, l;
    return null !== (l = null === (e = null === (n = t.head) || void 0 === n ? void 0 : n.querySelector('meta[name="csp-nonce"]')) || void 0 === e ? void 0 : e.getAttribute("content")) && void 0 !== l ? l : void 0
}
const r = (t, n, ...e) => {
        let l = null,
            o = !1,
            c = !1;
        const r = [],
            u = n => {
                for (let e = 0; e < n.length; e++) l = n[e], Array.isArray(l) ? u(l) : null != l && "boolean" != typeof l && ((o = "function" != typeof t && !s(l)) && (l += ""), o && c ? r[r.length - 1].t += l : r.push(o ? i(null, l) : l), c = o)
            };
        if (u(e), n) {
            const t = n.className || n.class;
            t && (n.class = "object" != typeof t ? t : Object.keys(t).filter((n => t[n])).join(" "))
        }
        if ("function" == typeof t) return t(null === n ? {} : n, r, a);
        const f = i(t, null);
        return f.l = n, r.length > 0 && (f.o = r), f
    },
    i = (t, n) => ({
        i: 0,
        u: t,
        t: n,
        h: null,
        o: null,
        l: null
    }),
    u = {},
    a = {
        forEach: (t, n) => t.map(f).forEach(n),
        map: (t, n) => t.map(f).map(n).map(d)
    },
    f = t => ({
        vattrs: t.l,
        vchildren: t.o,
        vkey: t.p,
        vname: t.m,
        vtag: t.u,
        vtext: t.t
    }),
    d = t => {
        if ("function" == typeof t.vtag) {
            const n = Object.assign({}, t.vattrs);
            return t.vkey && (n.key = t.vkey), t.vname && (n.name = t.vname), r(t.vtag, n, ...t.vchildren || [])
        }
        const n = i(t.vtag, t.vtext);
        return n.l = t.vattrs, n.o = t.vchildren, n.p = t.vkey, n.m = t.vname, n
    },
    h = new WeakMap,
    p = t => "sc-" + t.$,
    y = (t, n, e, l, o, c) => {
        if (e !== l) {
            let r = G(t, n),
                i = n.toLowerCase();
            if ("class" === n) {
                const n = t.classList,
                    o = $(e),
                    s = $(l);
                n.remove(...o.filter((t => t && !s.includes(t)))), n.add(...s.filter((t => t && !o.includes(t))))
            } else if ("style" === n) {
                for (const n in e) l && null != l[n] || (n.includes("-") ? t.style.removeProperty(n) : t.style[n] = "");
                for (const n in l) e && l[n] === e[n] || (n.includes("-") ? t.style.setProperty(n, l[n]) : t.style[n] = l[n])
            } else if ("ref" === n) l && l(t);
            else if (r || "o" !== n[0] || "n" !== n[1]) {
                const i = s(l);
                if ((r || i && null !== l) && !o) try {
                    if (t.tagName.includes("-")) t[n] = l;
                    else {
                        const o = null == l ? "" : l;
                        "list" === n ? r = !1 : null != e && t[n] == o || (t[n] = o)
                    }
                } catch (t) {}
                null == l || !1 === l ? !1 === l && "" !== t.getAttribute(n) || t.removeAttribute(n) : (!r || 4 & c || o) && !i && t.setAttribute(n, l = !0 === l ? "" : l)
            } else n = "-" === n[2] ? n.slice(3) : G(X, i) ? i.slice(2) : i[2] + n.slice(3), e && Z.rel(t, n, e, !1), l && Z.ael(t, n, l, !1)
        }
    },
    m = /\s/,
    $ = t => t ? t.split(m) : [],
    v = (t, n, e, l) => {
        const s = 11 === n.h.nodeType && n.h.host ? n.h.host : n.h,
            c = t && t.l || o,
            r = n.l || o;
        for (l in c) l in r || y(s, l, c[l], void 0, e, n.i);
        for (l in r) y(s, l, c[l], r[l], e, n.i)
    },
    w = (n, l, o) => {
        const s = l.o[o];
        let c, r, i = 0;
        if (null !== s.t) c = s.h = Y.createTextNode(s.t);
        else {
            if (e || (e = "svg" === s.u), c = s.h = Y.createElementNS(e ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", s.u), e && "foreignObject" === s.u && (e = !1), v(null, s, e), null != t && c["s-si"] !== t && c.classList.add(c["s-si"] = t), s.o)
                for (i = 0; i < s.o.length; ++i) r = w(n, s, i), r && c.appendChild(r);
            "svg" === s.u ? e = !1 : "foreignObject" === c.tagName && (e = !0)
        }
        return c
    },
    b = (t, e, l, o, s, c) => {
        let r, i = t;
        for (i.shadowRoot && i.tagName === n && (i = i.shadowRoot); s <= c; ++s) o[s] && (r = w(null, l, s), r && (o[s].h = r, i.insertBefore(r, e)))
    },
    g = (t, n, e, l, o) => {
        for (; n <= e; ++n)(l = t[n]) && (o = l.h, O(l), o.remove())
    },
    j = (t, n) => t.u === n.u,
    S = (t, n) => {
        const l = n.h = t.h,
            o = t.o,
            s = n.o,
            c = n.u,
            r = n.t;
        null === r ? (e = "svg" === c || "foreignObject" !== c && e, v(t, n, e), null !== o && null !== s ? ((t, n, e, l) => {
            let o, s = 0,
                c = 0,
                r = n.length - 1,
                i = n[0],
                u = n[r],
                a = l.length - 1,
                f = l[0],
                d = l[a];
            for (; s <= r && c <= a;) null == i ? i = n[++s] : null == u ? u = n[--r] : null == f ? f = l[++c] : null == d ? d = l[--a] : j(i, f) ? (S(i, f), i = n[++s], f = l[++c]) : j(u, d) ? (S(u, d), u = n[--r], d = l[--a]) : j(i, d) ? (S(i, d), t.insertBefore(i.h, u.h.nextSibling), i = n[++s], d = l[--a]) : j(u, f) ? (S(u, f), t.insertBefore(u.h, i.h), u = n[--r], f = l[++c]) : (o = w(n && n[c], e, c), f = l[++c], o && i.h.parentNode.insertBefore(o, i.h));
            s > r ? b(t, null == l[a + 1] ? null : l[a + 1].h, e, l, c, a) : c > a && g(n, s, r)
        })(l, o, n, s) : null !== s ? (null !== t.t && (l.textContent = ""), b(l, null, n, s, 0, s.length - 1)) : null !== o && g(o, 0, o.length - 1), e && "svg" === c && (e = !1)) : t.t !== r && (l.data = r)
    },
    O = t => {
        t.l && t.l.ref && t.l.ref(null), t.o && t.o.map(O)
    },
    M = (t, n) => {
        n && !t.v && n["s-p"] && n["s-p"].push(new Promise((n => t.v = n)))
    },
    k = (t, n) => {
        if (t.i |= 16, !(4 & t.i)) return M(t, t.g), it((() => C(t, n)));
        t.i |= 512
    },
    C = (t, n) => {
        const e = t.j;
        let l;
        return n && (t.i |= 256, t.S && (t.S.map((([t, n]) => N(e, t, n))), t.S = null), l = N(e, "componentWillLoad")), T(l, (() => x(t, e, n)))
    },
    x = async (t, n, e) => {
        const l = t.O,
            o = l["s-rc"];
        e && (t => {
            const n = t.M,
                e = t.O,
                l = n.i,
                o = ((t, n) => {
                    var e;
                    let l = p(n);
                    const o = Q.get(l);
                    if (t = 11 === t.nodeType ? t : Y, o)
                        if ("string" == typeof o) {
                            let n, s = h.get(t = t.head || t);
                            if (s || h.set(t, s = new Set), !s.has(l)) {
                                {
                                    n = Y.createElement("style"), n.innerHTML = o;
                                    const l = null !== (e = Z.k) && void 0 !== e ? e : c(Y);
                                    null != l && n.setAttribute("nonce", l), t.insertBefore(n, t.querySelector("link"))
                                }
                                s && s.add(l)
                            }
                        } else t.adoptedStyleSheets.includes(o) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, o]);
                    return l
                })(e.shadowRoot ? e.shadowRoot : e.getRootNode(), n);
            10 & l && (e["s-sc"] = o, e.classList.add(o + "-h"), 2 & l && e.classList.add(o + "-s"))
        })(t);
        E(t, n), o && (o.map((t => t())), l["s-rc"] = void 0); {
            const n = l["s-p"],
                e = () => L(t);
            0 === n.length ? e() : (Promise.all(n).then(e), t.i |= 4, n.length = 0)
        }
    },
    E = (e, l) => {
        try {
            l = l.render(), e.i &= -17, e.i |= 2, ((e, l) => {
                const o = e.O,
                    s = e.M,
                    c = e.C || i(null, null),
                    a = (t => t && t.u === u)(l) ? l : r(null, null, l);
                n = o.tagName, s.L && (a.l = a.l || {}, s.L.map((([t, n]) => a.l[n] = o[t]))), a.u = null, a.i |= 4, e.C = a, a.h = c.h = o.shadowRoot || o, t = o["s-sc"], S(c, a)
            })(e, l)
        } catch (t) {
            I(t, e.O)
        }
        return null
    },
    L = t => {
        const n = t.O,
            e = t.j,
            l = t.g;
        64 & t.i || (t.i |= 64, W(n), N(e, "componentDidLoad"), t.P(n), l || P()), t.v && (t.v(), t.v = void 0), 512 & t.i && rt((() => k(t, !1))), t.i &= -517
    },
    P = () => {
        W(Y.documentElement), rt((() => (t => {
            const n = Z.ce("appload", {
                detail: {
                    namespace: "rewards-ui-component"
                }
            });
            return t.dispatchEvent(n), n
        })(X)))
    },
    N = (t, n, e) => {
        if (t && t[n]) try {
            return t[n](e)
        } catch (t) {
            I(t)
        }
    },
    T = (t, n) => t && t.then ? t.then(n) : n(),
    W = t => t.classList.add("hydrated"),
    A = (t, n, e) => {
        if (n.N) {
            t.watchers && (n.T = t.watchers);
            const l = Object.entries(n.N),
                o = t.prototype;
            if (l.map((([t, [l]]) => {
                    (31 & l || 2 & e && 32 & l) && Object.defineProperty(o, t, {
                        get() {
                            return ((t, n) => _(this).W.get(n))(0, t)
                        },
                        set(e) {
                            ((t, n, e, l) => {
                                const o = _(t),
                                    c = o.O,
                                    r = o.W.get(n),
                                    i = o.i,
                                    u = o.j;
                                if (e = ((t, n) => null == t || s(t) ? t : 4 & n ? "false" !== t && ("" === t || !!t) : 1 & n ? t + "" : t)(e, l.N[n][0]), (!(8 & i) || void 0 === r) && e !== r && (!Number.isNaN(r) || !Number.isNaN(e)) && (o.W.set(n, e), u)) {
                                    if (l.T && 128 & i) {
                                        const t = l.T[n];
                                        t && t.map((t => {
                                            try {
                                                u[t](e, r, n)
                                            } catch (t) {
                                                I(t, c)
                                            }
                                        }))
                                    }
                                    2 == (18 & i) && k(o, !1)
                                }
                            })(this, t, e, n)
                        },
                        configurable: !0,
                        enumerable: !0
                    })
                })), 1 & e) {
                const e = new Map;
                o.attributeChangedCallback = function(t, n, l) {
                    Z.jmp((() => {
                        const n = e.get(t);
                        if (this.hasOwnProperty(n)) l = this[n], delete this[n];
                        else if (o.hasOwnProperty(n) && "number" == typeof this[n] && this[n] == l) return;
                        this[n] = (null !== l || "boolean" != typeof this[n]) && l
                    }))
                }, t.observedAttributes = l.filter((([t, n]) => 15 & n[0])).map((([t, l]) => {
                    const o = l[1] || t;
                    return e.set(o, t), 512 & l[0] && n.L.push([t, o]), o
                }))
            }
        }
        return t
    },
    R = (t, n = {}) => {
        var e;
        const l = [],
            o = n.exclude || [],
            s = X.customElements,
            r = Y.head,
            i = r.querySelector("meta[charset]"),
            u = Y.createElement("style"),
            a = [];
        let f, d = !0;
        Object.assign(Z, n), Z.A = new URL(n.resourcesUrl || "./", Y.baseURI).href, t.map((t => {
            t[1].map((n => {
                const e = {
                    i: n[0],
                    $: n[1],
                    N: n[2],
                    R: n[3]
                };
                e.N = n[2], e.R = n[3], e.L = [], e.T = {};
                const c = e.$,
                    r = class extends HTMLElement {
                        constructor(t) {
                            super(t), B(t = this, e), 1 & e.i && t.attachShadow({
                                mode: "open"
                            })
                        }
                        connectedCallback() {
                            f && (clearTimeout(f), f = null), d ? a.push(this) : Z.jmp((() => (t => {
                                if (0 == (1 & Z.i)) {
                                    const n = _(t),
                                        e = n.M,
                                        l = () => {};
                                    if (1 & n.i) U(t, n, e.R);
                                    else {
                                        n.i |= 1; {
                                            let e = t;
                                            for (; e = e.parentNode || e.host;)
                                                if (e["s-p"]) {
                                                    M(n, n.g = e);
                                                    break
                                                }
                                        }
                                        e.N && Object.entries(e.N).map((([n, [e]]) => {
                                            if (31 & e && t.hasOwnProperty(n)) {
                                                const e = t[n];
                                                delete t[n], t[n] = e
                                            }
                                        })), (async (t, n, e, l, o) => {
                                            if (0 == (32 & n.i)) {
                                                {
                                                    if (n.i |= 32, (o = K(e)).then) {
                                                        const t = () => {};
                                                        o = await o, t()
                                                    }
                                                    o.isProxied || (e.T = o.watchers, A(o, e, 2), o.isProxied = !0);
                                                    const t = () => {};
                                                    n.i |= 8;
                                                    try {
                                                        new o(n)
                                                    } catch (t) {
                                                        I(t)
                                                    }
                                                    n.i &= -9, n.i |= 128, t()
                                                }
                                                if (o.style) {
                                                    let t = o.style;
                                                    const n = p(e);
                                                    if (!Q.has(n)) {
                                                        const l = () => {};
                                                        ((t, n, e) => {
                                                            let l = Q.get(t);
                                                            nt && e ? (l = l || new CSSStyleSheet, "string" == typeof l ? l = n : l.replaceSync(n)) : l = n, Q.set(t, l)
                                                        })(n, t, !!(1 & e.i)), l()
                                                    }
                                                }
                                            }
                                            const s = n.g,
                                                c = () => k(n, !0);
                                            s && s["s-rc"] ? s["s-rc"].push(c) : c()
                                        })(0, n, e)
                                    }
                                    l()
                                }
                            })(this)))
                        }
                        disconnectedCallback() {
                            Z.jmp((() => (() => {
                                if (0 == (1 & Z.i)) {
                                    const t = _(this);
                                    t.U && (t.U.map((t => t())), t.U = void 0)
                                }
                            })()))
                        }
                        componentOnReady() {
                            return _(this).q
                        }
                    };
                e.D = t[0], o.includes(c) || s.get(c) || (l.push(c), s.define(c, A(r, e, 1)))
            }))
        })); {
            u.innerHTML = l + "{visibility:hidden}.hydrated{visibility:inherit}", u.setAttribute("data-styles", "");
            const t = null !== (e = Z.k) && void 0 !== e ? e : c(Y);
            null != t && u.setAttribute("nonce", t), r.insertBefore(u, i ? i.nextSibling : r.firstChild)
        }
        d = !1, a.length ? a.map((t => t.connectedCallback())) : Z.jmp((() => f = setTimeout(P, 30)))
    },
    U = (t, n, e) => {
        e && e.map((([e, l, o]) => {
            const s = D(t, e),
                c = q(n, o),
                r = F(e);
            Z.ael(s, l, c, r), (n.U = n.U || []).push((() => Z.rel(s, l, c, r)))
        }))
    },
    q = (t, n) => e => {
        try {
            256 & t.i ? t.j[n](e) : (t.S = t.S || []).push([n, e])
        } catch (t) {
            I(t)
        }
    },
    D = (t, n) => 8 & n ? X : t,
    F = t => 0 != (2 & t),
    H = t => Z.k = t,
    V = new WeakMap,
    _ = t => V.get(t),
    z = (t, n) => V.set(n.j = t, n),
    B = (t, n) => {
        const e = {
            i: 0,
            O: t,
            M: n,
            W: new Map
        };
        return e.q = new Promise((t => e.P = t)), t["s-p"] = [], t["s-rc"] = [], U(t, e, n.R), V.set(t, e)
    },
    G = (t, n) => n in t,
    I = (t, n) => (0, console.error)(t, n),
    J = new Map,
    K = t => {
        const n = t.$.replace(/-/g, "_"),
            e = t.D,
            l = J.get(e);
        return l ? l[n] : import (`./${e}.entry.js`).then((t => (J.set(e, t), t[n])), I)
        /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    },
    Q = new Map,
    X = "undefined" != typeof window ? window : {},
    Y = X.document || {
        head: {}
    },
    Z = {
        i: 0,
        A: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, n, e, l) => t.addEventListener(n, e, l),
        rel: (t, n, e, l) => t.removeEventListener(n, e, l),
        ce: (t, n) => new CustomEvent(t, n)
    },
    tt = t => Promise.resolve(t),
    nt = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (t) {}
        return !1
    })(),
    et = [],
    lt = [],
    ot = (t, n) => e => {
        t.push(e), l || (l = !0, n && 4 & Z.i ? rt(ct) : Z.raf(ct))
    },
    st = t => {
        for (let n = 0; n < t.length; n++) try {
            t[n](performance.now())
        } catch (t) {
            I(t)
        }
        t.length = 0
    },
    ct = () => {
        st(et), st(lt), (l = et.length > 0) && Z.raf(ct)
    },
    rt = t => tt().then(t),
    it = ot(lt, !0);
export {
    R as b, r as h, tt as p, z as r, H as s
}