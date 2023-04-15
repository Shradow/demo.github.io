import {
    r as i,
    h as s
} from "./p-faef1b52.js";
import {
    C as e,
    g as t,
    a as o,
    b as r,
    u as a,
    c as n,
    d as l,
    D as c,
    e as d,
    f as h,
    S as p,
    h as f
} from "./p-8dc1f1db.js";
const u = class {
    constructor(s) {
        i(this, s), this.name = void 0, this.url = void 0, this.learnMore = void 0, this.hasBorder = void 0
    }
    render() {
        return s("div", {
            class: "headline",
            style: {
                borderTopLeftRadius: this.hasBorder ? "8px" : "0px",
                borderTopRightRadius: this.hasBorder ? "8px" : "0px"
            }
        }, s("span", null, this.name), s("span", null, s("a", {
            href: this.url,
            "data-ga-event": "click",
            "data-ga-event-category": "Rewards",
            "data-ga-event-action": "Share Widget",
            "data-ga-event-label": "learn-more"
        }, this.learnMore)))
    }
};
u.style = "*.sc-head-line{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-head-line,*.sc-head-line:before,*.sc-head-line:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-head-line:focus{outline:none}.sc-head-line::-webkit-scrollbar{width:0px;background:transparent}input.sc-head-line{font-family:inherit}.svg-icon.sc-head-line{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.headline.sc-head-line{color:#333;background-color:#f38a00;padding:8px 16px;display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:justify;justify-content:space-between;line-height:24px;border-top-left-radius:8px;border-top-right-radius:8px}.headline.sc-head-line>span.sc-head-line:first-child{font-weight:600;font-size:16px}.headline.sc-head-line>span.sc-head-line:last-child{text-align:right}.headline.sc-head-line>span.sc-head-line:last-child a.sc-head-line{color:#333 !important;text-decoration:underline}";
const w = class {
        constructor(s) {
            i(this, s), this.content = void 0
        }
        render() {
            return s("div", {
                innerHTML: this.content
            })
        }
    },
    m = class {
        constructor(s) {
            i(this, s), this.content = void 0, this.isLoggedIn = void 0, this.signInUrl = "", this.isReady = void 0, this.isMobile = void 0
        }
        render() {
            var i, t, o, r, a;
            if (this.isReady) return this.isLoggedIn ? s("div", {
                class: "rewards-link",
                style: {
                    marginTop: this.isMobile ? "15px" : "16px"
                }
            }, s("div", {
                class: "logged-in"
            }, null === (i = this.content) || void 0 === i ? void 0 : i[e.IDS_YOU_ARE_LOGGED_IN])) : s("div", {
                class: "rewards-link",
                style: {
                    marginTop: this.isMobile ? "15px" : "32px"
                }
            }, s("div", {
                class: "not-logged-in"
            }, null === (t = this.content) || void 0 === t ? void 0 : t[e.IDS_YOU_ARE_NOT_LOGGED_IN]), s("div", {
                class: "title"
            }, null === (o = this.content) || void 0 === o ? void 0 : o[e.CANT_EARN_REWARDS_CREDIT]), s("div", {
                class: "sign-in"
            }, null === (r = this.content) || void 0 === r ? void 0 : r[e.IDS_LOGIN_TO_EARN_YOUR_OWN_REWARDS_LINK]), s("div", {
                class: "sign-in-button"
            }, s("a", {
                href: this.signInUrl
            }, null === (a = this.content) || void 0 === a ? void 0 : a[e.IDS_LOG_IN_TO_START_EARNING])))
        }
    };
m.style = "*{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}*:focus{outline:none}::-webkit-scrollbar{width:0px;background:transparent}input{font-family:inherit}.svg-icon{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.rewards-link{text-align:center;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;-ms-flex-pack:center;justify-content:center;margin-bottom:16px}.rewards-link .not-logged-in{color:#D32F2F;font-weight:600;font-size:12px;line-height:18px;margin-bottom:8px}.rewards-link .title{font-weight:600;font-size:14px;line-height:20px;color:#333}.rewards-link .sign-in{color:#666;line-height:24px}.rewards-link .sign-in-button{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:100%;margin-top:16px}.rewards-link .sign-in-button a{padding:6px 16px;width:200px;background:#458500;border-radius:8px;text-decoration:none;color:#fff}.rewards-link .sign-in-button a:hover,.rewards-link .sign-in-button a:visited,.rewards-link .sign-in-button a:active{color:#fff}.rewards-link .logged-in{font-weight:700;font-size:12px;line-height:18px;text-align:center;color:#458500}";
const b = class {
    constructor(s) {
        i(this, s), this.description = void 0, this.noThanks = void 0, this.signMeUp = void 0, this.hasSubscribedMail = void 0, this.signMeUpSuccess = void 0, this.signMeUpError = void 0, this.shouldReRender = void 0, this.calculateShareWidgetPosition = void 0, this.isShowRewardsOffers = !1, this.subscribeStatus = "NONE", this.contentRef = void 0
    }
    handleClickNoThanks() {
        if ("PENDING" === this.subscribeStatus) return;
        let i = new Date;
        i.setDate(i.getDate() + 60), window.localStorage.setItem("rcc", `false,${i.getTime()}`), this.isShowRewardsOffers = !1, "function" == typeof this.calculateShareWidgetPosition && setTimeout((() => {
            this.calculateShareWidgetPosition()
        }), 0)
    }
    showAnimation() {
        this.contentRef.style.height = this.contentRef.scrollHeight + "px", setTimeout((() => {
            this.contentRef.style.height = "0px", this.contentRef.style.opacity = "0"
        }), 1), setTimeout((() => {
            this.isShowRewardsOffers = !1, this.contentRef.style.height = "auto", this.contentRef.style.opacity = "1"
        }), 150), "function" == typeof this.calculateShareWidgetPosition && setTimeout((() => {
            this.calculateShareWidgetPosition()
        }), 200)
    }
    hideRewardsOffersAfterAction() {
        window.localStorage.setItem("rcc", "false"), window.shareWidgetContent.hasSubscribedMail = !0, setTimeout((() => {
            this.showAnimation()
        }), 1500)
    }
    handleSubscribeRewardsMail() {
        if ("PENDING" === this.subscribeStatus) return;
        this.subscribeStatus = "PENDING";
        const {
            envBaseAddress: i
        } = t(location.host);
        this.rewardsWebServiceBaseAddress = i, fetch(`${this.rewardsWebServiceBaseAddress}gw/api/mail-subscription`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            },
            credentials: "include"
        }).then((i => {
            if (i.ok) return i.json();
            throw Error(i.statusText)
        })).then((i => {
            i ? (this.subscribeStatus = "SUCCESS", this.hideRewardsOffersAfterAction()) : this.subscribeStatus = "ERROR"
        })).catch((() => {
            this.subscribeStatus = "ERROR"
        }))
    }
    isLocalStorageAvailable() {
        return void 0 !== window.localStorage
    }
    init() {
        if (!this.hasSubscribedMail)
            if (this.isLocalStorageAvailable())
                if (window.localStorage.getItem("rcc")) {
                    const i = window.localStorage.rcc.split(",");
                    "false" === i[0] && (!i[1] || parseInt(i[1]) < (new Date).getTime()) && (this.isShowRewardsOffers = !0)
                } else this.isShowRewardsOffers = !0;
        else this.hasSubscribedMail = !0
    }
    listenShouldReInit(i) {
        i && (this.subscribeStatus = "NONE", this.isShowRewardsOffers = !1, this.init())
    }
    componentWillLoad() {
        this.subscribeStatus = "NONE", this.isShowRewardsOffers = !1, this.init()
    }
    render() {
        const i = "NONE" === this.subscribeStatus || "PENDING" === this.subscribeStatus,
            e = "SUCCESS" === this.subscribeStatus;
        return s("div", {
            class: "rewards_offers_content",
            style: {
                display: this.isShowRewardsOffers ? "flex" : "none"
            },
            ref: i => this.contentRef = i
        }, s("div", {
            class: "description"
        }, this.description), s("div", {
            class: "footer",
            style: {
                display: i ? "flex" : "none"
            }
        }, s("div", {
            "data-ga-event": "click",
            "data-ga-event-category": "Rewards",
            "data-ga-event-action": "Share Widget",
            "data-ga-event-label": "no-thanks",
            class: "no_thanks rewards-share-button",
            onClick: this.handleClickNoThanks.bind(this)
        }, this.noThanks), s("div", {
            "data-ga-event": "click",
            "data-ga-event-category": "Rewards",
            "data-ga-event-action": "Share Widget",
            "data-ga-event-label": "sign-me-up",
            class: "sign_me_up rewards-share-button",
            onClick: this.handleSubscribeRewardsMail.bind(this)
        }, this.signMeUp)), s("div", {
            class: "message-wrapper",
            style: {
                display: i ? "none" : "flex"
            }
        }, s("div", {
            class: "message-icon"
        }, s("svg", {
            width: "24",
            height: "24",
            fill: "none",
            viewBox: "0 0 24 24"
        }, s("path", e ? {
            fill: "#458500",
            "fill-rule": "evenodd",
            d: "M10.293 15.707l-3-3c-.39-.39-.39-1.024 0-1.414.39-.39 1.024-.39 1.414 0l1.94 1.94c.195.195.511.195.707 0l4.939-4.94c.39-.39 1.024-.39 1.414 0 .39.39.39 1.024 0 1.414l-6 6c-.195.195-.451.293-.707.293-.256 0-.512-.098-.707-.293zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.581 8-8 0-4.418-3.582-8-8-8s-8 3.582-8 8c0 4.419 3.582 8 8 8z",
            "clip-rule": "evenodd"
        } : {
            fill: "#BD3C37",
            "fill-rule": "evenodd",
            d: "M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8 0 4.419-3.582 8-8 8s-8-3.581-8-8c0-4.418 3.582-8 8-8zm0 10c.552 0 1-.448 1-1V7c0-.552-.448-1-1-1s-1 .448-1 1v6c0 .552.448 1 1 1zm0 2c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1z",
            "clip-rule": "evenodd"
        }))), s("div", {
            class: "message " + (e ? "success" : "error")
        }, e ? this.signMeUpSuccess : this.signMeUpError)))
    }
    static get watchers() {
        return {
            shouldReRender: ["listenShouldReInit"]
        }
    }
};
b.style = "*.sc-rewards-offers{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-rewards-offers,*.sc-rewards-offers:before,*.sc-rewards-offers:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-rewards-offers:focus{outline:none}.sc-rewards-offers::-webkit-scrollbar{width:0px;background:transparent}input.sc-rewards-offers{font-family:inherit}.svg-icon.sc-rewards-offers{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.rewards_offers_content.sc-rewards-offers{font-size:14px;line-height:1.5;width:100%;background:#fff9e7;padding:16px;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap;overflow:hidden;height:auto;opacity:1;-webkit-transition:height 150ms ease-in-out, opacity 100ms ease-in-out;transition:height 150ms ease-in-out, opacity 100ms ease-in-out}.rewards_offers_content.sc-rewards-offers .description.sc-rewards-offers{color:#333333;word-break:break-word;font-weight:500}.rewards_offers_content.sc-rewards-offers .footer.sc-rewards-offers{display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-top:16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.rewards_offers_content.sc-rewards-offers .no_thanks.sc-rewards-offers{color:#666666;cursor:pointer;margin:0 16px;text-decoration:underline}.rewards_offers_content.sc-rewards-offers .sign_me_up.sc-rewards-offers{padding:4px 8px;background-color:#ffffff;border-radius:8px;border:solid 1px #cccccc;cursor:pointer}.rewards_offers_content.sc-rewards-offers .message-wrapper.sc-rewards-offers{font-weight:500;display:-ms-flexbox;display:flex;-ms-flex-flow:row wrap;flex-flow:row wrap;margin-top:16px;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}.rewards_offers_content.sc-rewards-offers .message-wrapper.sc-rewards-offers .success.sc-rewards-offers{color:#2c7500}.rewards_offers_content.sc-rewards-offers .message-wrapper.sc-rewards-offers .error.sc-rewards-offers{color:#80201e}.rewards_offers_content.sc-rewards-offers .message-wrapper.sc-rewards-offers .message-icon.sc-rewards-offers{margin-right:4px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;width:24px}.rewards_offers_content.sc-rewards-offers .message-wrapper.sc-rewards-offers .message.sc-rewards-offers{max-width:calc(100% - 28px);word-break:break-word}";
var g = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
    k = /\n/g,
    x = /^\s*/,
    v = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
    y = /^:\s*/,
    C = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
    S = /^[;\s]*/,
    F = /^\s+|\s+$/g,
    _ = "";

function z(i) {
    return i ? i.replace(F, _) : _
}
const U = class {
    constructor(s) {
        i(this, s), this.sbid = void 0, this.sbStyle = void 0, this.iconSize = void 0, this.iconColor = void 0, this.text = void 0, this.textPosition = "left", this.textSize = void 0, this.textColor = void 0, this.textWeight = void 0, this.url = void 0, this.widgetLayer = void 0, this.position = "bottom", this.arrowLeft = void 0, this.content = void 0
    }
    windowLoad() {
        window.hasShareButtonLoaded || (window.hasShareButtonLoaded = !window.hasShareButtonLoaded, Array.from(document.getElementsByTagName("share-button")).forEach((i => {
            let s = i.getAttribute("class");
            if (s) {
                let e = s.split(" ");
                if (-1 === e.indexOf("rewards-share-button")) {
                    e.push("rewards-share-button");
                    let s = e.join(" ");
                    i.setAttribute("class", s)
                }
            } else i.setAttribute("class", "rewards-share-button")
        })))
    }
    updateTopArrowPos() {
        this.$widget.setAttribute("arrow-left", this.arrowLeft)
    }
    showShareWidgetDesktop() {
        const i = this.generateCurrentURL();
        window.shareWidgetContent[o.LONG_URL] !== i && (window.shareWidgetContent[o.LONG_URL] = i), this.$widget.style.display = "block", this.$widget.setAttribute("is-open", !0)
    }
    getCustomerInfo() {
        fetch(`${this.rewardsWebServiceBaseAddress}gw/api/sharewidget`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then((i => i.json())).then((i => {
            i && (this.content = Object.assign(Object.assign({}, this.content), {
                [o.IS_LOGGED_IN]: !0,
                [o.REWARDS_CODE]: i.rewardsCode,
                [o.HAS_SUBSCRIBE_MAIL]: i.hasSubscribedMail
            }), window.shareWidgetContent = Object.assign({}, this.content), this.showShareWidgetDesktop())
        })).catch((() => {
            const i = r();
            this.content = Object.assign(Object.assign({}, this.content), {
                [o.IS_LOGGED_IN]: !1,
                [o.IS_SOFT_LOGGED_IN]: !!i,
                [o.REWARDS_CODE]: i,
                [o.HAS_SUBSCRIBE_MAIL]: !1
            }), window.shareWidgetContent = Object.assign({}, this.content), this.showShareWidgetDesktop()
        }))
    }
    getCMSKey() {
        const i = `${this.rewardsWebServiceBaseAddress}gw/api/cms-entries`,
            s = Object.values(e);
        fetch(i, {
            method: "POST",
            body: JSON.stringify(s),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then((i => i.json())).then((i => {
            (null == i ? void 0 : i.entries) && (this.content = Object.assign(Object.assign(Object.assign({}, this.content), i.entries), {
                [o.LONG_URL]: this.generateCurrentURL(),
                [o.SHORT_URL]: "",
                [o.SHARE_SOCIAL_MEDIA_INFOS]: a(n(), !1, i.entries),
                [o.IS_LOGGED_IN]: "",
                [o.REWARDS_CODE]: "",
                [o.HAS_SUBSCRIBE_MAIL]: !1
            }), window.shareWidgetContent = Object.assign({}, this.content), this.getCustomerInfo())
        }))
    }
    getShortenUrl(i) {
        fetch(`${this.rewardsWebServiceBaseAddress}gw/api/shorten-url`, {
            method: "POST",
            body: JSON.stringify({
                url: this.content[o.LONG_URL]
            }),
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then((i => i.json())).then((s => {
            this.content[o.SHORT_URL] = s[o.SHORT_URL], window.shortenUrls[this.content[o.LONG_URL]] = s[o.SHORT_URL], i && i()
        }))
    }
    generateCurrentURL() {
        let i = this.url;
        return i ? -1 == i.indexOf("rcode") && window.shareWidgetContent && window.shareWidgetContent.rewardsCode && (i += `${i.includes("?")?"&":"?"}rcode=${window.shareWidgetContent.rewardsCode}`) : i = l(location, window.shareWidgetContent ? window.shareWidgetContent.rewardsCode : ""), i
    }
    onUrlChanged() {
        const i = this.generateCurrentURL();
        window.shareWidgetContent[o.LONG_URL] = i, this.content = Object.assign({}, window.shareWidgetContent), this.content[o.SHORT_URL] = window.shortenUrls[i] || "", window.isShortenUrl ? window.shortenUrls[window.shareWidgetContent[o.LONG_URL]] ? (window.isShortenUrl = !0, this.showShareWidgetDesktop()) : (window.isShortenUrl = !1, this.getShortenUrl((() => {
            window.isShortenUrl = !0, this.showShareWidgetDesktop()
        }))) : this.showShareWidgetDesktop()
    }
    getContent() {
        window.shortenUrls = {}, this.getCMSKey()
    }
    handleClick() {
        (window.shareButtonId !== this.sbid || window.shareButtonId === this.sbid && "none" === this.$widget.style.display) && (this.$widget.style.zIndex = this.widgetLayer ? this.widgetLayer : "gh0" == this.sbid ? 9999 : 999, this.$widget.setAttribute("is-open", !1), this.$widget.setAttribute("position", this.position), window.shareButtonId = this.sbid, window.shareWidgetContent ? this.url !== window.shareWidgetContent[o.LONG_URL] ? this.onUrlChanged() : this.showShareWidgetDesktop() : this.getContent())
    }
    componentDidLoad() {
        const {
            envBaseAddress: i
        } = t(location.host);
        this.rewardsWebServiceBaseAddress = i, this.$widget = document.getElementsByTagName("share-widget-desktop")[0]
    }
    render() {
        const i = this.iconSize ? this.iconSize : c.SHARE_BUTTON.ICON_SIZE,
            e = this.iconColor ? this.iconColor : c.SHARE_BUTTON.ICON_COLOR,
            t = this.textSize ? this.textSize : c.SHARE_BUTTON.TEXT_SIZE,
            o = this.textPosition ? this.textPosition : c.SHARE_BUTTON.TEXT_POSITION,
            r = this.textColor ? this.textColor : c.SHARE_BUTTON.TEXT_COLOR,
            a = this.textWeight ? this.textWeight : c.SHARE_BUTTON.TEXT_WEIGHT,
            n = Object.assign({
                cursor: "pointer",
                position: "relative"
            }, function(i, s) {
                var e, t = null;
                if (!i || "string" != typeof i) return t;
                for (var o, r, a = function(i, s) {
                        if ("string" != typeof i) throw new TypeError("First argument must be a string");
                        if (!i) return [];
                        s = s || {};
                        var e = 1,
                            t = 1;

                        function o(i) {
                            var s = i.match(k);
                            s && (e += s.length);
                            var o = i.lastIndexOf("\n");
                            t = ~o ? i.length - o : t + i.length
                        }

                        function r() {
                            var i = {
                                line: e,
                                column: t
                            };
                            return function(s) {
                                return s.position = new a(i), c(), s
                            }
                        }

                        function a(i) {
                            this.start = i, this.end = {
                                line: e,
                                column: t
                            }, this.source = s.source
                        }

                        function n(o) {
                            var r = new Error(s.source + ":" + e + ":" + t + ": " + o);
                            if (r.reason = o, r.filename = s.source, r.line = e, r.column = t, r.source = i, !s.silent) throw r
                        }

                        function l(s) {
                            var e = s.exec(i);
                            if (e) {
                                var t = e[0];
                                return o(t), i = i.slice(t.length), e
                            }
                        }

                        function c() {
                            l(x)
                        }

                        function d(i) {
                            var s;
                            for (i = i || []; s = h();) !1 !== s && i.push(s);
                            return i
                        }

                        function h() {
                            var s = r();
                            if ("/" == i.charAt(0) && "*" == i.charAt(1)) {
                                for (var e = 2; _ != i.charAt(e) && ("*" != i.charAt(e) || "/" != i.charAt(e + 1));) ++e;
                                if (_ === i.charAt((e += 2) - 1)) return n("End of comment missing");
                                var a = i.slice(2, e - 2);
                                return t += 2, o(a), i = i.slice(e), t += 2, s({
                                    type: "comment",
                                    comment: a
                                })
                            }
                        }

                        function p() {
                            var i = r(),
                                s = l(v);
                            if (s) {
                                if (h(), !l(y)) return n("property missing ':'");
                                var e = l(C),
                                    t = i({
                                        type: "declaration",
                                        property: z(s[0].replace(g, _)),
                                        value: e ? z(e[0].replace(g, _)) : _
                                    });
                                return l(S), t
                            }
                        }
                        return a.prototype.content = i, c(),
                            function() {
                                var i, s = [];
                                for (d(s); i = p();) !1 !== i && (s.push(i), d(s));
                                return s
                            }()
                    }(i), n = "function" == typeof s, l = 0, c = a.length; l < c; l++) o = (e = a[l]).property, r = e.value, n ? s(o, r, e) : r && (t || (t = {}), t[o] = r);
                return t
            }(this.sbStyle || ""));
        return s("span", {
            style: n,
            onClick: this.handleClick.bind(this)
        }, !!this.text && "left" === o && s("span", {
            style: {
                color: r,
                fontSize: `${t}px`,
                fontWeight: a,
                maxWidth: `calc(100% - ${parseInt(i+"")+4}px)`
            }
        }, this.text), s("span", {
            style: {
                width: `${i}px`,
                height: `${i}px`,
                color: e
            }
        }, s("share-icon", null)), !!this.text && "right" === o && s("span", {
            style: {
                color: r,
                fontSize: `${t}px`,
                fontWeight: a,
                maxWidth: `calc(100% - ${parseInt(i+"")+4}px)`,
                wordBreak: "break-all"
            }
        }, this.text))
    }
    static get watchers() {
        return {
            arrowLeft: ["updateTopArrowPos"]
        }
    }
};
U.style = "*{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*,*:before,*:after{-webkit-box-sizing:border-box;box-sizing:border-box}*:focus{outline:none}::-webkit-scrollbar{width:0px;background:transparent}input{font-family:inherit}.svg-icon{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}span{display:inline-block;vertical-align:middle}span~span{margin-left:4px}";
const R = class {
        constructor(s) {
            i(this, s)
        }
        render() {
            return s("svg", {
                class: "svg-icon",
                style: {
                    display: "block",
                    width: "100%",
                    height: "100%",
                    strokeWidth: "0",
                    stroke: "currentColor",
                    fill: "currentColor"
                },
                viewBox: "0 0 24 24"
            }, s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M14 6C14 6.20486 14.0206 6.40493 14.0597 6.59825L8.91169 9.68787C8.39262 9.25822 7.72646 9 7 9C5.34315 9 4 10.3431 4 12C4 13.6569 5.34315 15 7 15C7.72569 15 8.39121 14.7423 8.91004 14.3135L14.0596 17.4024C14.0205 17.5955 14 17.7954 14 18C14 19.6569 15.3432 21 17 21C18.6569 21 20 19.6569 20 18C20 16.3431 18.6569 15 17 15C16.2738 15 15.6078 15.2581 15.0888 15.6875L9.94015 12.5992C9.9794 12.4056 10 12.2052 10 12C10 11.7956 9.97955 11.5959 9.94058 11.4029L15.0893 8.31289C15.6082 8.74209 16.274 9 17 9C18.6569 9 20 7.65685 20 6C20 4.34315 18.6569 3 17 3C15.3432 3 14 4.34315 14 6ZM18 6.00009C18 6.55238 17.5523 7.00009 17 7.00009C16.4477 7.00009 16 6.55238 16 6.00009C16 5.44781 16.4477 5.00009 17 5.00009C17.5523 5.00009 18 5.44781 18 6.00009ZM18 18.0001C18 18.5524 17.5523 19.0001 17 19.0001C16.4477 19.0001 16 18.5524 16 18.0001C16 17.4478 16.4477 17.0001 17 17.0001C17.5523 17.0001 18 17.4478 18 18.0001ZM6.99995 13.0001C7.55224 13.0001 7.99995 12.5524 7.99995 12.0001C7.99995 11.4478 7.55224 11.0001 6.99995 11.0001C6.44767 11.0001 5.99995 11.4478 5.99995 12.0001C5.99995 12.5524 6.44767 13.0001 6.99995 13.0001Z"
            }))
        }
    },
    j = class {
        constructor(s) {
            i(this, s), this.url = void 0, this.shareYourRewardsLink = void 0, this.isLoggedIn = void 0, this.hasRewardsCode = !1
        }
        render() {
            return s("div", {
                class: "share-link"
            }, !!this.isLoggedIn && s("span", null, this.shareYourRewardsLink), s("div", null, s("input", {
                type: "text",
                value: this.url,
                readonly: !0,
                class: this.hasRewardsCode ? "fs-mask" : ""
            }), s("a", {
                "data-ga-event": "click",
                "data-ga-event-category": "Rewards",
                "data-ga-event-action": "Share Widget",
                "data-ga-event-label": "copy-share-link",
                class: "icon-copy rewards-share-button",
                onClick: d
            }, s("span", null, s("svg", {
                width: "18",
                height: "20",
                viewBox: "0 0 18 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg"
            }, s("path", {
                d: "M10 0C11.6569 0 13 1.34315 13 3H11C11 2.44772 10.5523 2 10 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44771 14 3 14H4V16H3C1.34315 16 0 14.6569 0 13V3C0 1.34315 1.34315 0 3 0H10Z",
                fill: "#333333"
            }), s("path", {
                d: "M11.5 15.5C10.9477 15.5 10.5 15.0523 10.5 14.5V13H9C8.44771 13 8 12.5523 8 12C8 11.4477 8.44772 11 9 11H10.5V9.5C10.5 8.94771 10.9477 8.5 11.5 8.5C12.0523 8.5 12.5 8.94771 12.5 9.5V11H14C14.5523 11 15 11.4477 15 12C15 12.5523 14.5523 13 14 13H12.5V14.5C12.5 15.0523 12.0523 15.5 11.5 15.5Z",
                fill: "#333333"
            }), s("path", {
                "fill-rule": "evenodd",
                "clip-rule": "evenodd",
                d: "M18 7C18 5.34315 16.6569 4 15 4H8C6.34315 4 5 5.34315 5 7V17C5 18.6569 6.34315 20 8 20H15C16.6569 20 18 18.6569 18 17V7ZM15 6C15.5523 6 16 6.44772 16 7V17C16 17.5523 15.5523 18 15 18H8C7.44771 18 7 17.5523 7 17V7C7 6.44772 7.44772 6 8 6H15Z",
                fill: "#333333"
            }))))))
        }
    };
j.style = "*.sc-share-link{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-share-link,*.sc-share-link:before,*.sc-share-link:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-share-link:focus{outline:none}.sc-share-link::-webkit-scrollbar{width:0px;background:transparent}input.sc-share-link{font-family:inherit}.svg-icon.sc-share-link{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.share-link.sc-share-link{margin:16px 0px;display:-ms-flexbox;display:flex;-ms-flex-flow:column nowrap;flex-flow:column nowrap}.share-link.sc-share-link>span.sc-share-link{margin-bottom:16px;font-weight:700;font-size:14px;line-height:20px;color:#666;text-align:center}.share-link.sc-share-link>div.sc-share-link{position:relative}.share-link.sc-share-link>div.sc-share-link input.sc-share-link{color:#333;font-size:14px;line-height:22px;width:100%;padding:12px 45px 12px 16px;border-radius:8px;border:1px solid #ccc;direction:ltr}.share-link.sc-share-link>div.sc-share-link .icon-copy.sc-share-link{color:#666;cursor:pointer;width:50px;height:48px;right:0px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;position:absolute;top:0px}.share-link.sc-share-link>div.sc-share-link .icon-copy.sc-share-link span.sc-share-link{width:18px;height:20px}";
const T = class {
    constructor(s) {
        i(this, s), this.arrowLeft = void 0, this.position = "bottom", this.isOpen = void 0, this.content = void 0, this.isShortenUrl = void 0, this.isShareWidgetReady = !1, this.arrawLeftPos = void 0, this.contentRef = void 0, this.shouldReRender = void 0
    }
    windowResize() {
        window.shareButtonId && this.isOpen && this.calculatePosition()
    }
    windowScroll() {
        window.shareButtonId && this.isOpen && this.calculatePosition()
    }
    updateIsShortenUrl() {
        window.isShareWidgetOpen !== this.isShortenUrl && (window.isShortenUrl = this.isShortenUrl)
    }
    listenIsOpen(i) {
        this.$widget = document.getElementsByTagName("share-widget-desktop")[0], this.$button = document.querySelectorAll('share-button[sbid="' + window.shareButtonId + '"]')[0], i ? (this.content = window.shareWidgetContent, this.isShareWidgetReady = !1, setTimeout((() => {
            this.shouldReRender = !0, this.calculatePosition()
        }), 100)) : (this.isShareWidgetReady = !1, this.$widget.style.display = "none", this.shouldReRender = !1)
    }
    calculatePosition() {
        if (this.$button && this.$widget) {
            const {
                arrawLeftPos: i,
                shareWidgetLeft: s,
                shareWidgetTop: e
            } = h(this.position, this.$button, this.$widget);
            this.arrawLeftPos = i, this.$widget.style.top = e, this.$widget.style.left = s, this.isShareWidgetReady || setTimeout((() => {
                this.isShareWidgetReady = !0
            }), 100)
        }
    }
    getShortenUrl() {
        const i = {
            url: window.shareWidgetContent[o.LONG_URL]
        };
        fetch(`${this.rewardsWebServiceBaseAddress}gw/api/shorten-url`, {
            method: "POST",
            body: JSON.stringify(i),
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        }).then((i => i.json())).then((i => {
            this.content[o.SHORT_URL] = i[o.SHORT_URL], window.shortenUrls[window.shareWidgetContent[o.LONG_URL]] = i[o.SHORT_URL], this.isShortenUrl = !this.isShortenUrl
        }))
    }
    handleShortenUrl() {
        window.shortenUrls[this.content[o.LONG_URL]] ? this.isShortenUrl = !this.isShortenUrl : this.getShortenUrl()
    }
    componentWillLoad() {
        const {
            envBaseAddress: i,
            checkoutHost: s
        } = t(location.host);
        this.rewardsWebServiceBaseAddress = i, this.checkoutHost = s, this.isShortenUrl = window.isShortenUrl || !1
    }
    componentDidLoad() {
        this.$widget = document.getElementsByTagName("share-widget-desktop")[0], document.addEventListener("click", (i => {
            i.composedPath().includes(this.contentRef) || "SHARE-BUTTON" === i.target.nodeName || this.$widget && this.$widget.setAttribute("is-open", !1)
        }))
    }
    render() {
        var i, t, r, a, n, l, c, d, h, p, f, u, w, m, b, g;
        let k = "";
        this.content && (k = window.isShortenUrl ? window.shortenUrls[this.content[o.LONG_URL]] : this.content[o.LONG_URL]);
        const x = `${this.checkoutHost}/account/login?referrerRedirect=true&returnUrl=${null===location||void 0===location?void 0:location.href}`,
            v = !!(null === (i = this.content) || void 0 === i ? void 0 : i[o.IS_LOGGED_IN]) || !!(null === (t = this.content) || void 0 === t ? void 0 : t[o.IS_SOFT_LOGGED_IN]);
        return s("div", {
            class: "content fs-unmask",
            style: {
                display: this.isOpen ? "inline-block" : "none",
                visibility: this.isShareWidgetReady ? "initial" : "hidden",
                backgroundColor: v ? "#FFFFFF" : "#FFFEF2"
            },
            ref: i => this.contentRef = i
        }, "bottom" === this.position && s("top-arrow", {
            left: this.arrawLeftPos
        }), s("head-line", {
            name: null === (r = this.content) || void 0 === r ? void 0 : r[e.TITLE],
            url: `${this.rewardsWebServiceBaseAddress}info/rewards-program`,
            learnMore: null === (a = this.content) || void 0 === a ? void 0 : a[e.LEARN_MORE],
            hasBorder: !0
        }), s("rewards-offers", {
            description: null === (n = this.content) || void 0 === n ? void 0 : n[e.LATEST_REWARDS_OFFERS],
            noThanks: null === (l = this.content) || void 0 === l ? void 0 : l[e.NO_THANKS],
            signMeUp: null === (c = this.content) || void 0 === c ? void 0 : c[e.IDS_TURN_ON_ALERTS],
            hasSubscribedMail: null === (d = this.content) || void 0 === d ? void 0 : d[o.HAS_SUBSCRIBE_MAIL],
            signMeUpSuccess: null === (h = this.content) || void 0 === h ? void 0 : h[e.DONE],
            signMeUpError: null === (p = this.content) || void 0 === p ? void 0 : p[e.SIGN_MEUP_ERROR],
            style: {
                display: (null === (f = this.content) || void 0 === f ? void 0 : f[o.IS_LOGGED_IN]) ? "inline" : "none"
            },
            calculateShareWidgetPosition: this.calculatePosition.bind(this),
            shouldReRender: this.shouldReRender
        }), s("div", {
            style: {
                padding: "0px 16px"
            }
        }, s("share-link", {
            url: k,
            isLoggedIn: v,
            hasRewardsCode: !!(null === (u = this.content) || void 0 === u ? void 0 : u[o.REWARDS_CODE]),
            shareYourRewardsLink: null === (w = this.content) || void 0 === w ? void 0 : w[e.IDS_SHARE_YOUR_REWARDS_LINK]
        }), s("shorten-url-checkbox", {
            text: null === (m = this.content) || void 0 === m ? void 0 : m[e.SHORTEN_URL],
            isSelected: this.isShortenUrl,
            handleClick: this.handleShortenUrl.bind(this)
        }), s("social-media-list", {
            medias: null === (b = this.content) || void 0 === b ? void 0 : b[o.SHARE_SOCIAL_MEDIA_INFOS],
            isLoggedIn: v,
            url: k,
            device: "desktop"
        }), s("rewards-link-description", {
            content: this.content,
            signInUrl: x,
            isReady: !0,
            isMobile: !1,
            isLoggedIn: v
        })), s("marketing-message", {
            content: null === (g = this.content) || void 0 === g ? void 0 : g[e.MARKET_MESSAGE]
        }))
    }
    static get watchers() {
        return {
            isShortenUrl: ["updateIsShortenUrl"],
            isOpen: ["listenIsOpen"]
        }
    }
};
T.style = "*.sc-share-widget-desktop{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-share-widget-desktop,*.sc-share-widget-desktop:before,*.sc-share-widget-desktop:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-share-widget-desktop:focus{outline:none}.sc-share-widget-desktop::-webkit-scrollbar{width:0px;background:transparent}input.sc-share-widget-desktop{font-family:inherit}.svg-icon.sc-share-widget-desktop{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.content.sc-share-widget-desktop{font-size:14px;line-height:1.5;width:100%;background:#ffffff;width:336px;border-radius:8px;-webkit-box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.15);box-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.15);z-index:2}";
const O = class {
    constructor(s) {
        i(this, s), this.text = void 0, this.handleClick = void 0, this.isSelected = void 0
    }
    render() {
        return s("div", {
            class: "shorten-url"
        }, s("label", {
            class: "shorten-url-content"
        }, s("input", {
            type: "checkbox",
            value: "",
            onClick: this.handleClick,
            "data-ga-event": "click",
            "data-ga-event-category": "Rewards",
            "data-ga-event-action": "Share Widget",
            "data-ga-event-label": "shorten-url",
            class: "rewards-share-button"
        }), s("span", {
            class: "checkmark " + (this.isSelected ? "active" : "")
        }), s("div", {
            class: "space"
        }), s("span", null, this.text)))
    }
};
O.style = '*.sc-shorten-url-checkbox{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-shorten-url-checkbox,*.sc-shorten-url-checkbox:before,*.sc-shorten-url-checkbox:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-shorten-url-checkbox:focus{outline:none}.sc-shorten-url-checkbox::-webkit-scrollbar{width:0px;background:transparent}input.sc-shorten-url-checkbox{font-family:inherit}.svg-icon.sc-shorten-url-checkbox{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.shorten-url.sc-shorten-url-checkbox .shorten-url-content.sc-shorten-url-checkbox{display:-ms-inline-flexbox;display:inline-flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-align:center;align-items:center;position:relative;margin:0px 0px !important;font-weight:normal !important;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.shorten-url.sc-shorten-url-checkbox .shorten-url-content.sc-shorten-url-checkbox>span.sc-shorten-url-checkbox{vertical-align:middle;font-size:14px}.shorten-url.sc-shorten-url-checkbox .shorten-url-content.sc-shorten-url-checkbox input.sc-shorten-url-checkbox{position:absolute;opacity:0;cursor:pointer;height:0;width:0}.shorten-url.sc-shorten-url-checkbox .shorten-url-content.sc-shorten-url-checkbox .checkmark.sc-shorten-url-checkbox:after{position:absolute;left:6px;top:3px;width:6px;height:10px;border:solid white;border-radius:0px;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg)}.shorten-url.sc-shorten-url-checkbox .shorten-url-content.sc-shorten-url-checkbox .active.sc-shorten-url-checkbox{background-color:#458500}.shorten-url.sc-shorten-url-checkbox .shorten-url-content.sc-shorten-url-checkbox .active.sc-shorten-url-checkbox:after{display:block}.shorten-url.sc-shorten-url-checkbox .checkmark.sc-shorten-url-checkbox{display:block;position:relative;height:20px;width:20px;background-color:#fff;border-radius:4px;border:1px solid #cccccc}.shorten-url.sc-shorten-url-checkbox .checkmark.sc-shorten-url-checkbox:after{content:"";position:absolute;display:none}.shorten-url.sc-shorten-url-checkbox .space.sc-shorten-url-checkbox{padding-right:8px}';
const L = ({
        icon: i,
        url: e,
        device: t,
        message: o = ""
    }) => s("div", null, s("div", {
        onClick: () => f[i](e, o, t).handleClick(),
        "data-ga-event": "click",
        "data-ga-event-category": "Ecommerce",
        "data-ga-event-action": "global-share-widget",
        "data-ga-event-label": i,
        class: "social-button rewards-share-button"
    }), s("div", {
        class: `icon icon-${i}-circle`
    }, s("div", {
        innerHTML: p[`${i}-circle`]
    }))),
    M = class {
        constructor(s) {
            i(this, s), this.medias = void 0, this.url = void 0, this.device = void 0, this.isLoggedIn = void 0
        }
        insertWeChatJSSDK() {
            const i = document.getElementsByTagName("head")[0],
                s = document.createElement("script");
            s.type = "text/javascript", s.src = "https://res.wx.qq.com/open/js/jweixin-1.6.0.js", i.appendChild(s)
        }
        insertKakoTalkJSSDK() {
            const i = document.getElementsByTagName("head")[0],
                s = document.createElement("script");
            s.type = "text/javascript", s.id = "kakao-js-sdk", s.src = "https://developers.kakao.com/sdk/js/kakao.story.min.js", i.appendChild(s)
        }
        render() {
            const i = "rtl" == document.dir,
                e = "mobile" === this.device;
            return "desktop" === this.device && Array.isArray(this.medias) && (this.medias = this.medias.filter((i => "fbmessenger" != i.icon))), s("div", {
                class: "social-medias"
            }, s("ul", {
                style: {
                    overflowX: e ? "scroll" : "hidden",
                    whiteSpace: e ? "nowrap" : "normal",
                    paddingTop: e ? "32px" : this.isLoggedIn ? "16px" : "24px"
                }
            }, Array.isArray(this.medias) && this.medias.map(((e, t) => {
                let o;
                return o = i ? {
                    marginRight: 0 != t ? "desktop" === this.device && t % 5 == 0 ? "0" : "16px" : "0"
                } : {
                    marginLeft: 0 != t ? "desktop" === this.device && t % 5 == 0 ? "0" : "16px" : "0"
                }, "desktop" === this.device && t >= 5 && (o.marginTop = "8px"), "wechat" === e.icon ? this.insertWeChatJSSDK() : "kakaotalk" === e.icon && this.insertKakoTalkJSSDK(), s("li", {
                    style: o
                }, s(L, {
                    icon: e.icon,
                    url: this.url,
                    message: e.message,
                    device: this.device
                }))
            }))))
        }
    };
M.style = "*.sc-social-media-list{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-social-media-list,*.sc-social-media-list:before,*.sc-social-media-list:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-social-media-list:focus{outline:none}.sc-social-media-list::-webkit-scrollbar{width:0px;background:transparent}input.sc-social-media-list{font-family:inherit}.svg-icon.sc-social-media-list{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.social-medias.sc-social-media-list ul.sc-social-media-list{margin:0;padding:0;list-style:none;overflow-x:scroll;white-space:nowrap;-ms-overflow-style:-ms-autohiding-scrollbar;text-align:center}.social-medias.sc-social-media-list li.sc-social-media-list{list-style:none;display:inline-block;text-align:center;font-size:14px;vertical-align:top;position:relative}.social-medias.sc-social-media-list li.sc-social-media-list .icon-sms-circle.sc-social-media-list{background:#ffc108}.social-medias.sc-social-media-list li.sc-social-media-list .icon-facebook-circle.sc-social-media-list{background:#3b5998}.social-medias.sc-social-media-list li.sc-social-media-list .icon-twitter-circle.sc-social-media-list{background:#00aced}.social-medias.sc-social-media-list li.sc-social-media-list .icon-pinterest-circle.sc-social-media-list{background:#cb2027}.social-medias.sc-social-media-list li.sc-social-media-list .icon-naver-circle.sc-social-media-list{background:#00d700}.social-medias.sc-social-media-list li.sc-social-media-list .icon-weibo-circle.sc-social-media-list{background:#df162c}.social-medias.sc-social-media-list li.sc-social-media-list .icon-qzone-circle.sc-social-media-list{background:#2488d7}.social-medias.sc-social-media-list li.sc-social-media-list .icon-qq-circle.sc-social-media-list{background:#10b7f5}.social-medias.sc-social-media-list li.sc-social-media-list .icon-douban-circle.sc-social-media-list{background:#0d751a}.social-medias.sc-social-media-list li.sc-social-media-list .icon-vk-circle.sc-social-media-list{background:#4e76a1}.social-medias.sc-social-media-list li.sc-social-media-list .icon-ok-circle.sc-social-media-list{background:#ed7f2c}.social-medias.sc-social-media-list li.sc-social-media-list .icon-email-circle.sc-social-media-list{background:#666666}.social-medias.sc-social-media-list li.sc-social-media-list .icon-messenger-circle.sc-social-media-list,.social-medias.sc-social-media-list li.sc-social-media-list .icon-fbmessenger-circle.sc-social-media-list{background:#2488d7}.social-medias.sc-social-media-list li.sc-social-media-list .icon-wechat-circle.sc-social-media-list{background:#7bb32e}.social-medias.sc-social-media-list li.sc-social-media-list .icon-telegram-circle.sc-social-media-list{background:#0088cc}.social-medias.sc-social-media-list li.sc-social-media-list .icon-line-circle.sc-social-media-list{background:#00b900}.social-medias.sc-social-media-list li.sc-social-media-list .icon-amebablog-circle.sc-social-media-list{background:#2d8c3c}.social-medias.sc-social-media-list li.sc-social-media-list .icon-hatenabookmark-circle.sc-social-media-list{background:#00a4de}.social-medias.sc-social-media-list li.sc-social-media-list .icon-whatsapp-circle.sc-social-media-list{background:#4fce5d}.social-medias.sc-social-media-list li.sc-social-media-list .icon-xiaohongshu-circle.sc-social-media-list{background:#ff2442}.social-medias.sc-social-media-list li.sc-social-media-list .icon-kakaotalk-circle.sc-social-media-list{background:#f9e000}.social-medias.sc-social-media-list li.sc-social-media-list .icon-zhihu-circle.sc-social-media-list{background:#03a9f4}.social-medias.sc-social-media-list li.sc-social-media-list .social-button.sc-social-media-list{position:absolute;width:100%;height:100%;top:0;left:0;z-index:1;cursor:pointer}.social-medias.sc-social-media-list li.sc-social-media-list .icon.sc-social-media-list{position:relative;z-index:0;border-radius:50%;width:40px;height:40px}.social-medias.sc-social-media-list li.sc-social-media-list .icon.sc-social-media-list>div.sc-social-media-list{width:24px;height:24px;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);color:white}.social-medias.sc-social-media-list li.sc-social-media-list .name.sc-social-media-list{color:#333;font-weight:500;position:relative;word-break:break-word;white-space:initial;z-index:0;margin-left:-25%;margin-right:-25%}";
const H = class {
    constructor(s) {
        i(this, s), this.left = void 0
    }
    render() {
        let i = {};
        return this.left && (i = {
            left: `${this.left}px`
        }), s("div", {
            class: "top_arrow_content",
            style: i
        })
    }
};
H.style = "*.sc-top-arrow{font-family:FontUniversalPrimary, FontUniversalSecondary, FontUniversalFallback, sans-serif}*.sc-top-arrow,*.sc-top-arrow:before,*.sc-top-arrow:after{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-top-arrow:focus{outline:none}.sc-top-arrow::-webkit-scrollbar{width:0px;background:transparent}input.sc-top-arrow{font-family:inherit}.svg-icon.sc-top-arrow{display:block;width:100%;height:100%;stroke-width:0;stroke:currentColor;fill:currentColor}.top_arrow_content.sc-top-arrow{display:inline-block;margin:0 auto;width:16px;height:16px;background-color:#f38a00;position:absolute;top:-4px;left:calc(50% - 8px);-webkit-transform:rotate(45deg);transform:rotate(45deg)}";
export {
    u as head_line, w as marketing_message, m as rewards_link_description, b as rewards_offers, U as share_button, R as share_icon, j as share_link, T as share_widget_desktop, O as shorten_url_checkbox, M as social_media_list, H as top_arrow
}