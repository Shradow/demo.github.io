const t = "cms-web-components",
    e = {
        appEnv: "prod"
    };
let n, l, o = !1,
    s = !1,
    c = !1,
    i = !1,
    r = !1;
const a = "undefined" != typeof window ? window : {},
    f = a.document || {
        head: {}
    },
    u = {
        t: 0,
        l: "",
        jmp: t => t(),
        raf: t => requestAnimationFrame(t),
        ael: (t, e, n, l) => t.addEventListener(e, n, l),
        rel: (t, e, n, l) => t.removeEventListener(e, n, l),
        ce: (t, e) => new CustomEvent(t, e)
    },
    d = t => Promise.resolve(t),
    p = (() => {
        try {
            return new CSSStyleSheet, "function" == typeof(new CSSStyleSheet).replaceSync
        } catch (t) {}
        return !1
    })(),
    m = "http://www.w3.org/1999/xlink",
    h = new WeakMap,
    b = t => "sc-" + t.o,
    $ = {},
    y = t => "object" == (t = typeof t) || "function" === t,
    w = (t, e, ...n) => {
        let l = null,
            o = null,
            s = !1,
            c = !1;
        const i = [],
            r = e => {
                for (let n = 0; n < e.length; n++) l = e[n], Array.isArray(l) ? r(l) : null != l && "boolean" != typeof l && ((s = "function" != typeof t && !y(l)) && (l += ""), s && c ? i[i.length - 1].i += l : i.push(s ? g(null, l) : l), c = s)
            };
        if (r(n), e) {
            e.name && (o = e.name); {
                const t = e.className || e.class;
                t && (e.class = "object" != typeof t ? t : Object.keys(t).filter((e => t[e])).join(" "))
            }
        }
        if ("function" == typeof t) return t(null === e ? {} : e, i, j);
        const a = g(t, null);
        return a.u = e, i.length > 0 && (a.p = i), a.m = o, a
    },
    g = (t, e) => ({
        t: 0,
        h: t,
        i: e,
        $: null,
        p: null,
        u: null,
        m: null
    }),
    v = {},
    j = {
        forEach: (t, e) => t.map(k).forEach(e),
        map: (t, e) => t.map(k).map(e).map(O)
    },
    k = t => ({
        vattrs: t.u,
        vchildren: t.p,
        vkey: t.g,
        vname: t.m,
        vtag: t.h,
        vtext: t.i
    }),
    O = t => {
        if ("function" == typeof t.vtag) {
            const e = Object.assign({}, t.vattrs);
            return t.vkey && (e.key = t.vkey), t.vname && (e.name = t.vname), w(t.vtag, e, ...t.vchildren || [])
        }
        const e = g(t.vtag, t.vtext);
        return e.u = t.vattrs, e.p = t.vchildren, e.g = t.vkey, e.m = t.vname, e
    },
    S = (t, e, n, l, o, s) => {
        if (n !== l) {
            let i = ft(t, e),
                r = e.toLowerCase();
            if ("class" === e) {
                const e = t.classList,
                    o = x(n),
                    s = x(l);
                e.remove(...o.filter((t => t && !s.includes(t)))), e.add(...s.filter((t => t && !o.includes(t))))
            } else if ("style" === e) {
                for (const e in n) l && null != l[e] || (e.includes("-") ? t.style.removeProperty(e) : t.style[e] = "");
                for (const e in l) n && l[e] === n[e] || (e.includes("-") ? t.style.setProperty(e, l[e]) : t.style[e] = l[e])
            } else if (i || "o" !== e[0] || "n" !== e[1]) {
                const a = y(l);
                if ((i || a && null !== l) && !o) try {
                    if (t.tagName.includes("-")) t[e] = l;
                    else {
                        const o = null == l ? "" : l;
                        "list" === e ? i = !1 : null != n && t[e] == o || (t[e] = o)
                    }
                } catch (c) {}
                let f = !1;
                r !== (r = r.replace(/^xlink\:?/, "")) && (e = r, f = !0), null == l || !1 === l ? !1 === l && "" !== t.getAttribute(e) || (f ? t.removeAttributeNS(m, e) : t.removeAttribute(e)) : (!i || 4 & s || o) && !a && (l = !0 === l ? "" : l, f ? t.setAttributeNS(m, e, l) : t.setAttribute(e, l))
            } else e = "-" === e[2] ? e.slice(3) : ft(a, r) ? r.slice(2) : r[2] + e.slice(3), n && u.rel(t, e, n, !1), l && u.ael(t, e, l, !1)
        }
    },
    C = /\s/,
    x = t => t ? t.split(C) : [],
    M = (t, e, n, l) => {
        const o = 11 === e.$.nodeType && e.$.host ? e.$.host : e.$,
            s = t && t.u || $,
            c = e.u || $;
        for (l in s) l in c || S(o, l, s[l], void 0, n, e.t);
        for (l in c) S(o, l, s[l], c[l], n, e.t)
    },
    _ = (t, e, s) => {
        const r = e.p[s];
        let a, u, d, p = 0;
        if (o || (c = !0, "slot" === r.h && (r.t |= r.p ? 2 : 1)), null !== r.i) a = r.$ = f.createTextNode(r.i);
        else if (1 & r.t) a = r.$ = f.createTextNode("");
        else {
            if (i || (i = "svg" === r.h), a = r.$ = f.createElementNS(i ? "http://www.w3.org/2000/svg" : "http://www.w3.org/1999/xhtml", 2 & r.t ? "slot-fb" : r.h), i && "foreignObject" === r.h && (i = !1), M(null, r, i), r.p)
                for (p = 0; p < r.p.length; ++p) u = _(t, r, p), u && a.appendChild(u);
            "svg" === r.h ? i = !1 : "foreignObject" === a.tagName && (i = !0)
        }
        return a["s-hn"] = l, 3 & r.t && (a["s-sr"] = !0, a["s-cr"] = n, a["s-sn"] = r.m || "", d = t && t.p && t.p[s], d && d.h === r.h && t.$ && E(t.$, !1)), a
    },
    E = (t, e) => {
        u.t |= 1;
        const n = t.childNodes;
        for (let o = n.length - 1; o >= 0; o--) {
            const t = n[o];
            t["s-hn"] !== l && t["s-ol"] && (T(t).insertBefore(t, W(t)), t["s-ol"].remove(), t["s-ol"] = void 0, c = !0), e && E(t, e)
        }
        u.t &= -2
    },
    N = (t, e, n, l, o, s) => {
        let c, i = t["s-cr"] && t["s-cr"].parentNode || t;
        for (; o <= s; ++o) l[o] && (c = _(null, n, o), c && (l[o].$ = c, i.insertBefore(c, W(e))))
    },
    R = (t, e, n, l, o) => {
        for (; e <= n; ++e)(l = t[e]) && (s = !0, (o = l.$)["s-ol"] ? o["s-ol"].remove() : E(o, !0), o.remove())
    },
    L = (t, e) => t.h === e.h && ("slot" !== t.h || t.m === e.m),
    W = t => t && t["s-ol"] || t,
    T = t => (t["s-ol"] ? t["s-ol"] : t).parentNode,
    D = (t, e) => {
        const n = e.$ = t.$,
            l = t.p,
            o = e.p,
            s = e.h,
            c = e.i;
        let r;
        null === c ? (i = "svg" === s || "foreignObject" !== s && i, "slot" === s || M(t, e, i), null !== l && null !== o ? ((t, e, n, l) => {
            let o, s = 0,
                c = 0,
                i = e.length - 1,
                r = e[0],
                a = e[i],
                f = l.length - 1,
                u = l[0],
                d = l[f];
            for (; s <= i && c <= f;) null == r ? r = e[++s] : null == a ? a = e[--i] : null == u ? u = l[++c] : null == d ? d = l[--f] : L(r, u) ? (D(r, u), r = e[++s], u = l[++c]) : L(a, d) ? (D(a, d), a = e[--i], d = l[--f]) : L(r, d) ? ("slot" !== r.h && "slot" !== d.h || E(r.$.parentNode, !1), D(r, d), t.insertBefore(r.$, a.$.nextSibling), r = e[++s], d = l[--f]) : L(a, u) ? ("slot" !== r.h && "slot" !== d.h || E(a.$.parentNode, !1), D(a, u), t.insertBefore(a.$, r.$), a = e[--i], u = l[++c]) : (o = _(e && e[c], n, c), u = l[++c], o && T(r.$).insertBefore(o, W(r.$)));
            s > i ? N(t, null == l[f + 1] ? null : l[f + 1].$, n, l, c, f) : c > f && R(e, s, i)
        })(n, l, e, o) : null !== o ? (null !== t.i && (n.textContent = ""), N(n, null, e, o, 0, o.length - 1)) : null !== l && R(l, 0, l.length - 1), i && "svg" === s && (i = !1)) : (r = n["s-cr"]) ? r.parentNode.textContent = c : t.i !== c && (n.data = c)
    },
    P = t => {
        const e = t.childNodes;
        let n, l, o, s, c, i;
        for (l = 0, o = e.length; l < o; l++)
            if (n = e[l], 1 === n.nodeType) {
                if (n["s-sr"])
                    for (c = n["s-sn"], n.hidden = !1, s = 0; s < o; s++)
                        if (i = e[s].nodeType, e[s]["s-hn"] !== n["s-hn"] || "" !== c) {
                            if (1 === i && c === e[s].getAttribute("slot")) {
                                n.hidden = !0;
                                break
                            }
                        } else if (1 === i || 3 === i && "" !== e[s].textContent.trim()) {
                    n.hidden = !0;
                    break
                }
                P(n)
            }
    },
    U = [],
    A = t => {
        let e, n, l, o, c, i, r = 0;
        const a = t.childNodes,
            f = a.length;
        for (; r < f; r++) {
            if (e = a[r], e["s-sr"] && (n = e["s-cr"]) && n.parentNode)
                for (l = n.parentNode.childNodes, o = e["s-sn"], i = l.length - 1; i >= 0; i--) n = l[i], n["s-cn"] || n["s-nr"] || n["s-hn"] === e["s-hn"] || (F(n, o) ? (c = U.find((t => t.v === n)), s = !0, n["s-sn"] = n["s-sn"] || o, c ? c.j = e : U.push({
                    j: e,
                    v: n
                }), n["s-sr"] && U.map((t => {
                    F(t.v, n["s-sn"]) && (c = U.find((t => t.v === n)), c && !t.j && (t.j = c.j))
                }))) : U.some((t => t.v === n)) || U.push({
                    v: n
                }));
            1 === e.nodeType && A(e)
        }
    },
    F = (t, e) => 1 === t.nodeType ? null === t.getAttribute("slot") && "" === e || t.getAttribute("slot") === e : t["s-sn"] === e || "" === e,
    H = t => it(t).k,
    q = (t, e, n) => {
        const l = H(t);
        return {
            emit: t => V(l, e, {
                bubbles: !!(4 & n),
                composed: !!(2 & n),
                cancelable: !!(1 & n),
                detail: t
            })
        }
    },
    V = (t, e, n) => {
        const l = u.ce(e, n);
        return t.dispatchEvent(l), l
    },
    z = (t, e) => {
        e && !t.O && e["s-p"] && e["s-p"].push(new Promise((e => t.O = e)))
    },
    B = (t, e) => {
        if (t.t |= 16, !(4 & t.t)) return z(t, t.S), vt((() => G(t, e)));
        t.t |= 512
    },
    G = (t, e) => {
        const n = t.k,
            l = t.C;
        let o;
        return e ? (Z(n, "componentWillLoad"), o = X(l, "componentWillLoad")) : Z(n, "componentWillUpdate"), Z(n, "componentWillRender"), Y(o, (() => I(t, l, e)))
    },
    I = async (t, e, n) => {
        const l = t.k,
            o = l["s-rc"];
        n && (t => {
            const e = t.M;
            ((t, e) => {
                let n = b(e);
                const l = mt.get(n);
                if (t = 11 === t.nodeType ? t : f, l)
                    if ("string" == typeof l) {
                        let e, o = h.get(t = t.head || t);
                        o || h.set(t, o = new Set), o.has(n) || (e = f.createElement("style"), e.innerHTML = l, t.insertBefore(e, t.querySelector("link")), o && o.add(n))
                    } else t.adoptedStyleSheets.includes(l) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, l])
            })(t.k.getRootNode(), e)
        })(t);
        J(t, e), o && (o.map((t => t())), l["s-rc"] = void 0); {
            const e = l["s-p"],
                n = () => K(t);
            0 === e.length ? n() : (Promise.all(e).then(n), t.t |= 4, e.length = 0)
        }
    },
    J = (t, e) => {
        try {
            e = e.render(), t.t &= -17, t.t |= 2, ((t, e) => {
                const i = t.k,
                    r = t.M,
                    a = t._ || g(null, null),
                    d = (t => t && t.h === v)(e) ? e : w(null, null, e);
                if (l = i.tagName, d.h = null, d.t |= 4, t._ = d, d.$ = a.$ = i, n = i["s-cr"], o = 0 != (1 & r.t), s = !1, D(a, d), u.t |= 1, c) {
                    let t, e, n, l, o, s;
                    A(d.$);
                    let c = 0;
                    for (; c < U.length; c++) t = U[c], e = t.v, e["s-ol"] || (n = f.createTextNode(""), n["s-nr"] = e, e.parentNode.insertBefore(e["s-ol"] = n, e));
                    for (c = 0; c < U.length; c++)
                        if (t = U[c], e = t.v, t.j) {
                            for (l = t.j.parentNode, o = t.j.nextSibling, n = e["s-ol"]; n = n.previousSibling;)
                                if (s = n["s-nr"], s && s["s-sn"] === e["s-sn"] && l === s.parentNode && (s = s.nextSibling, !s || !s["s-nr"])) {
                                    o = s;
                                    break
                                }(!o && l !== e.parentNode || e.nextSibling !== o) && e !== o && (!e["s-hn"] && e["s-ol"] && (e["s-hn"] = e["s-ol"].parentNode.nodeName), l.insertBefore(e, o))
                        } else 1 === e.nodeType && (e.hidden = !0)
                }
                s && P(d.$), u.t &= -2, U.length = 0
            })(t, e)
        } catch (i) {
            ut(i, t.k)
        }
        return null
    },
    K = t => {
        const e = t.k,
            n = t.C,
            l = t.S;
        Z(e, "componentDidRender"), 64 & t.t ? Z(e, "componentDidUpdate") : (t.t |= 64, tt(e), X(n, "componentDidLoad"), Z(e, "componentDidLoad"), t.N(e), l || Q()), t.O && (t.O(), t.O = void 0), 512 & t.t && gt((() => B(t, !1))), t.t &= -517
    },
    Q = () => {
        tt(f.documentElement), gt((() => V(a, "appload", {
            detail: {
                namespace: t
            }
        })))
    },
    X = (t, e, n) => {
        if (t && t[e]) try {
            return t[e](n)
        } catch (l) {
            ut(l)
        }
    },
    Y = (t, e) => t && t.then ? t.then(e) : e(),
    Z = (e, n) => {
        V(e, "stencil_" + n, {
            bubbles: !0,
            composed: !0,
            detail: {
                namespace: t
            }
        })
    },
    tt = t => t.classList.add("hydrated"),
    et = (t, e, n) => {
        if (e.R) {
            t.watchers && (e.L = t.watchers);
            const l = Object.entries(e.R),
                o = t.prototype;
            if (l.map((([t, [l]]) => {
                    (31 & l || 2 & n && 32 & l) && Object.defineProperty(o, t, {
                        get() {
                            return ((t, e) => it(this).W.get(e))(0, t)
                        },
                        set(n) {
                            ((t, e, n, l) => {
                                const o = it(t),
                                    s = o.k,
                                    c = o.W.get(e),
                                    i = o.t,
                                    r = o.C;
                                if (n = ((t, e) => null == t || y(t) ? t : 4 & e ? "false" !== t && ("" === t || !!t) : 2 & e ? parseFloat(t) : 1 & e ? t + "" : t)(n, l.R[e][0]), (!(8 & i) || void 0 === c) && n !== c && (!Number.isNaN(c) || !Number.isNaN(n)) && (o.W.set(e, n), r)) {
                                    if (l.L && 128 & i) {
                                        const t = l.L[e];
                                        t && t.map((t => {
                                            try {
                                                r[t](n, c, e)
                                            } catch (l) {
                                                ut(l, s)
                                            }
                                        }))
                                    }
                                    2 == (18 & i) && B(o, !1)
                                }
                            })(this, t, n, e)
                        },
                        configurable: !0,
                        enumerable: !0
                    })
                })), 1 & n) {
                const e = new Map;
                o.attributeChangedCallback = function(t, n, l) {
                    u.jmp((() => {
                        const n = e.get(t);
                        if (this.hasOwnProperty(n)) l = this[n], delete this[n];
                        else if (o.hasOwnProperty(n) && "number" == typeof this[n] && this[n] == l) return;
                        this[n] = (null !== l || "boolean" != typeof this[n]) && l
                    }))
                }, t.observedAttributes = l.filter((([t, e]) => 15 & e[0])).map((([t, n]) => {
                    const l = n[1] || t;
                    return e.set(l, t), l
                }))
            }
        }
        return t
    },
    nt = t => {
        X(t, "connectedCallback")
    },
    lt = (t, e) => {
        class n extends Array {
            item(t) {
                return this[t]
            }
        }
        if (8 & e.t) {
            const e = t.__lookupGetter__("childNodes");
            Object.defineProperty(t, "children", {
                get() {
                    return this.childNodes.map((t => 1 === t.nodeType))
                }
            }), Object.defineProperty(t, "childElementCount", {
                get: () => t.children.length
            }), Object.defineProperty(t, "childNodes", {
                get() {
                    const t = e.call(this);
                    if (0 == (1 & u.t) && 2 & it(this).t) {
                        const e = new n;
                        for (let n = 0; n < t.length; n++) {
                            const l = t[n]["s-nr"];
                            l && e.push(l)
                        }
                        return e
                    }
                    return n.from(t)
                }
            })
        }
    },
    ot = (t, e = {}) => {
        const n = [],
            l = e.exclude || [],
            o = a.customElements,
            s = f.head,
            c = s.querySelector("meta[charset]"),
            i = f.createElement("style"),
            r = [];
        let d, m = !0;
        Object.assign(u, e), u.l = new URL(e.resourcesUrl || "./", f.baseURI).href, t.map((t => {
            t[1].map((e => {
                const s = {
                    t: e[0],
                    o: e[1],
                    R: e[2],
                    T: e[3]
                };
                s.R = e[2], s.L = {};
                const c = s.o,
                    i = class extends HTMLElement {
                        constructor(t) {
                            super(t), at(t = this, s), lt(t, s)
                        }
                        connectedCallback() {
                            d && (clearTimeout(d), d = null), m ? r.push(this) : u.jmp((() => (t => {
                                if (0 == (1 & u.t)) {
                                    const e = it(t),
                                        n = e.M,
                                        l = () => {};
                                    if (1 & e.t) nt(e.C);
                                    else {
                                        e.t |= 1, 12 & n.t && (t => {
                                            const e = t["s-cr"] = f.createComment("");
                                            e["s-cn"] = !0, t.insertBefore(e, t.firstChild)
                                        })(t); {
                                            let n = t;
                                            for (; n = n.parentNode || n.host;)
                                                if (n["s-p"]) {
                                                    z(e, e.S = n);
                                                    break
                                                }
                                        }
                                        n.R && Object.entries(n.R).map((([e, [n]]) => {
                                            if (31 & n && t.hasOwnProperty(e)) {
                                                const n = t[e];
                                                delete t[e], t[e] = n
                                            }
                                        })), (async (t, e, n, l, o) => {
                                            if (0 == (32 & e.t)) {
                                                {
                                                    if (e.t |= 32, (o = pt(n)).then) {
                                                        const t = () => {};
                                                        o = await o, t()
                                                    }
                                                    o.isProxied || (n.L = o.watchers, et(o, n, 2), o.isProxied = !0);
                                                    const t = () => {};
                                                    e.t |= 8;
                                                    try {
                                                        new o(e)
                                                    } catch (i) {
                                                        ut(i)
                                                    }
                                                    e.t &= -9, e.t |= 128, t(), nt(e.C)
                                                }
                                                if (o.style) {
                                                    let t = o.style;
                                                    const e = b(n);
                                                    if (!mt.has(e)) {
                                                        const l = () => {};
                                                        ((t, e, n) => {
                                                            let l = mt.get(t);
                                                            p && n ? (l = l || new CSSStyleSheet, "string" == typeof l ? l = e : l.replaceSync(e)) : l = e, mt.set(t, l)
                                                        })(e, t, !!(1 & n.t)), l()
                                                    }
                                                }
                                            }
                                            const s = e.S,
                                                c = () => B(e, !0);
                                            s && s["s-rc"] ? s["s-rc"].push(c) : c()
                                        })(0, e, n)
                                    }
                                    l()
                                }
                            })(this)))
                        }
                        disconnectedCallback() {
                            u.jmp((() => (() => {
                                0 == (1 & u.t) && X(it(this).C, "disconnectedCallback")
                            })()))
                        }
                        componentOnReady() {
                            return it(this).D
                        }
                    };
                s.P = t[0], l.includes(c) || o.get(c) || (n.push(c), o.define(c, et(i, s, 1)))
            }))
        })), i.innerHTML = n + "{visibility:hidden}.hydrated{visibility:inherit}", i.setAttribute("data-styles", ""), s.insertBefore(i, c ? c.nextSibling : s.firstChild), m = !1, r.length ? r.map((t => t.connectedCallback())) : u.jmp((() => d = setTimeout(Q, 30)))
    },
    st = (t, e) => e,
    ct = new WeakMap,
    it = t => ct.get(t),
    rt = (t, e) => ct.set(e.C = t, e),
    at = (t, e) => {
        const n = {
            t: 0,
            k: t,
            M: e,
            W: new Map
        };
        return n.D = new Promise((t => n.N = t)), t["s-p"] = [], t["s-rc"] = [], ct.set(t, n)
    },
    ft = (t, e) => e in t,
    ut = (t, e) => (0, console.error)(t, e),
    dt = new Map,
    pt = t => {
        const e = t.o.replace(/-/g, "_"),
            n = t.P,
            l = dt.get(n);
        return l ? l[e] : __sc_import_cms_web_components(`./${n}.entry.js`).then((t => (dt.set(n, t), t[e])), ut)
        /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
    },
    mt = new Map,
    ht = [],
    bt = [],
    $t = (t, e) => n => {
        t.push(n), r || (r = !0, e && 4 & u.t ? gt(wt) : u.raf(wt))
    },
    yt = t => {
        for (let n = 0; n < t.length; n++) try {
            t[n](performance.now())
        } catch (e) {
            ut(e)
        }
        t.length = 0
    },
    wt = () => {
        yt(ht), yt(bt), (r = ht.length > 0) && u.raf(wt)
    },
    gt = t => d().then(t),
    vt = $t(bt, !0);
export {
    e as E, st as F, v as H, t as N, ot as b, q as c, f as d, H as g, w as h, d as p, rt as r, a as w
}