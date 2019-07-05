/*! Zepto 1.1.6 (generated with Zepto Builder) - zepto ajax form ie assets deferred fx_methods fx selector touch event callbacks - zeptojs.com/license */
var Zepto = function() {
    function t(t) {
        return null == t ? String(t) : V[Y.call(t)] || "object"
    }

    function e(e) {
        return "function" == t(e)
    }

    function n(t) {
        return null != t && t == t.window
    }

    function i(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function r(e) {
        return "object" == t(e)
    }

    function o(t) {
        return r(t) && !n(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function s(t) {
        return "number" == typeof t.length
    }

    function a(t) {
        return O.call(t, function(t) {
            return null != t
        })
    }

    function u(t) {
        return t.length > 0 ? j.fn.concat.apply([], t) : t
    }

    function c(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function l(t) {
        return t in L ? L[t] : L[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function f(t, e) {
        return "number" != typeof e || Z[c(t)] ? e : e + "px"
    }

    function h(t) {
        var e, n;
        return k[t] || (e = D.createElement(t), D.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), k[t] = n), k[t]
    }

    function p(t) {
        return "children" in t ? M.call(t.children) : j.map(t.childNodes, function(t) {
            return 1 == t.nodeType ? t : void 0
        })
    }

    function d(t, e) {
        var n, i = t ? t.length : 0;
        for (n = 0; i > n; n++) this[n] = t[n];
        this.length = i, this.selector = e || ""
    }

    function m(t, e, n) {
        for (T in e) n && (o(e[T]) || K(e[T])) ? (o(e[T]) && !o(t[T]) && (t[T] = {}), K(e[T]) && !K(t[T]) && (t[T] = []), m(t[T], e[T], n)) : e[T] !== E && (t[T] = e[T])
    }

    function g(t, e) {
        return null == e ? j(t) : j(t).filter(e)
    }

    function v(t, n, i, r) {
        return e(n) ? n.call(t, i, r) : n
    }

    function y(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function w(t, e) {
        var n = t.className || "",
            i = n && n.baseVal !== E;
        return e === E ? i ? n.baseVal : n : void(i ? n.baseVal = e : t.className = e)
    }

    function x(t) {
        try {
            return t ? "true" == t || ("false" == t ? !1 : "null" == t ? null : +t + "" == t ? +t : /^[\[\{]/.test(t) ? j.parseJSON(t) : t) : t
        } catch (e) {
            return t
        }
    }

    function b(t, e) {
        e(t);
        for (var n = 0, i = t.childNodes.length; i > n; n++) b(t.childNodes[n], e)
    }

    var E, T, j, C, S, N, A = [],
        P = A.concat,
        O = A.filter,
        M = A.slice,
        D = window.document,
        k = {},
        L = {},
        Z = {
            "column-count": 1,
            columns: 1,
            "font-weight": 1,
            "line-height": 1,
            opacity: 1,
            "z-index": 1,
            zoom: 1
        },
        $ = /^\s*<(\w+|!)[^>]*>/,
        F = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        R = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        q = /^(?:body|html)$/i,
        z = /([A-Z])/g,
        I = ["val", "css", "html", "text", "data", "width", "height", "offset"],
        _ = ["after", "prepend", "before", "append"],
        W = D.createElement("table"),
        H = D.createElement("tr"),
        U = {
            tr: D.createElement("tbody"),
            tbody: W,
            thead: W,
            tfoot: W,
            td: H,
            th: H,
            "*": D.createElement("div")
        },
        X = /complete|loaded|interactive/,
        B = /^[\w-]*$/,
        V = {},
        Y = V.toString,
        G = {},
        J = D.createElement("div"),
        Q = {
            tabindex: "tabIndex",
            readonly: "readOnly",
            "for": "htmlFor",
            "class": "className",
            maxlength: "maxLength",
            cellspacing: "cellSpacing",
            cellpadding: "cellPadding",
            rowspan: "rowSpan",
            colspan: "colSpan",
            usemap: "useMap",
            frameborder: "frameBorder",
            contenteditable: "contentEditable"
        },
        K = Array.isArray || function(t) {
            return t instanceof Array
        };
    return G.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var i, r = t.parentNode,
            o = !r;
        return o && (r = J).appendChild(t), i = ~G.qsa(r, e).indexOf(t), o && J.removeChild(t), i
    }, S = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, N = function(t) {
        return O.call(t, function(e, n) {
            return t.indexOf(e) == n
        })
    }, G.fragment = function(t, e, n) {
        var i, r, s;
        return F.test(t) && (i = j(D.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(R, "<$1></$2>")), e === E && (e = $.test(t) && RegExp.$1), e in U || (e = "*"), s = U[e], s.innerHTML = "" + t, i = j.each(M.call(s.childNodes), function() {
            s.removeChild(this)
        })), o(n) && (r = j(i), j.each(n, function(t, e) {
            I.indexOf(t) > -1 ? r[t](e) : r.attr(t, e)
        })), i
    }, G.Z = function(t, e) {
        return new d(t, e)
    }, G.isZ = function(t) {
        return t instanceof G.Z
    }, G.init = function(t, n) {
        var i;
        if (!t) return G.Z();
        if ("string" == typeof t)
            if (t = t.trim(), "<" == t[0] && $.test(t)) i = G.fragment(t, RegExp.$1, n), t = null;
            else {
                if (n !== E) return j(n).find(t);
                i = G.qsa(D, t)
            }
        else {
            if (e(t)) return j(D).ready(t);
            if (G.isZ(t)) return t;
            if (K(t)) i = a(t);
            else if (r(t)) i = [t], t = null;
            else if ($.test(t)) i = G.fragment(t.trim(), RegExp.$1, n), t = null;
            else {
                if (n !== E) return j(n).find(t);
                i = G.qsa(D, t)
            }
        }
        return G.Z(i, t)
    }, j = function(t, e) {
        return G.init(t, e)
    }, j.extend = function(t) {
        var e, n = M.call(arguments, 1);
        return "boolean" == typeof t && (e = t, t = n.shift()), n.forEach(function(n) {
            m(t, n, e)
        }), t
    }, G.qsa = function(t, e) {
        var n, i = "#" == e[0],
            r = !i && "." == e[0],
            o = i || r ? e.slice(1) : e,
            s = B.test(o);
        return t.getElementById && s && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : M.call(s && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, j.contains = D.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    } : function(t, e) {
        for (; e && (e = e.parentNode);)
            if (e === t) return !0;
        return !1
    }, j.type = t, j.isFunction = e, j.isWindow = n, j.isArray = K, j.isPlainObject = o, j.isEmptyObject = function(t) {
        var e;
        for (e in t) return !1;
        return !0
    }, j.inArray = function(t, e, n) {
        return A.indexOf.call(e, t, n)
    }, j.camelCase = S, j.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, j.uuid = 0, j.support = {}, j.expr = {}, j.noop = function() {}, j.map = function(t, e) {
        var n, i, r, o = [];
        if (s(t))
            for (i = 0; i < t.length; i++) n = e(t[i], i), null != n && o.push(n);
        else
            for (r in t) n = e(t[r], r), null != n && o.push(n);
        return u(o)
    }, j.each = function(t, e) {
        var n, i;
        if (s(t)) {
            for (n = 0; n < t.length; n++)
                if (e.call(t[n], n, t[n]) === !1) return t
        } else
            for (i in t)
                if (e.call(t[i], i, t[i]) === !1) return t;
        return t
    }, j.grep = function(t, e) {
        return O.call(t, e)
    }, window.JSON && (j.parseJSON = JSON.parse), j.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        V["[object " + e + "]"] = e.toLowerCase()
    }), j.fn = {
        constructor: G.Z,
        length: 0,
        forEach: A.forEach,
        reduce: A.reduce,
        push: A.push,
        sort: A.sort,
        splice: A.splice,
        indexOf: A.indexOf,
        concat: function() {
            var t, e, n = [];
            for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = G.isZ(e) ? e.toArray() : e;
            return P.apply(G.isZ(this) ? this.toArray() : this, n)
        },
        map: function(t) {
            return j(j.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return j(M.apply(this, arguments))
        },
        ready: function(t) {
            return X.test(D.readyState) && D.body ? t(j) : D.addEventListener("DOMContentLoaded", function() {
                t(j)
            }, !1), this
        },
        get: function(t) {
            return t === E ? M.call(this) : this[t >= 0 ? t : t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(t) {
            return A.every.call(this, function(e, n) {
                return t.call(e, n, e) !== !1
            }), this
        },
        filter: function(t) {
            return e(t) ? this.not(this.not(t)) : j(O.call(this, function(e) {
                return G.matches(e, t)
            }))
        },
        add: function(t, e) {
            return j(N(this.concat(j(t, e))))
        },
        is: function(t) {
            return this.length > 0 && G.matches(this[0], t)
        },
        not: function(t) {
            var n = [];
            if (e(t) && t.call !== E) this.each(function(e) {
                t.call(this, e) || n.push(this)
            });
            else {
                var i = "string" == typeof t ? this.filter(t) : s(t) && e(t.item) ? M.call(t) : j(t);
                this.forEach(function(t) {
                    i.indexOf(t) < 0 && n.push(t)
                })
            }
            return j(n)
        },
        has: function(t) {
            return this.filter(function() {
                return r(t) ? j.contains(this, t) : j(this).find(t).size()
            })
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !r(t) ? t : j(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !r(t) ? t : j(t)
        },
        find: function(t) {
            var e, n = this;
            return e = t ? "object" == typeof t ? j(t).filter(function() {
                var t = this;
                return A.some.call(n, function(e) {
                    return j.contains(e, t)
                })
            }) : 1 == this.length ? j(G.qsa(this[0], t)) : this.map(function() {
                return G.qsa(this, t)
            }) : j()
        },
        closest: function(t, e) {
            var n = this[0],
                r = !1;
            for ("object" == typeof t && (r = j(t)); n && !(r ? r.indexOf(n) >= 0 : G.matches(n, t));) n = n !== e && !i(n) && n.parentNode;
            return j(n)
        },
        parents: function(t) {
            for (var e = [], n = this; n.length > 0;) n = j.map(n, function(t) {
                return (t = t.parentNode) && !i(t) && e.indexOf(t) < 0 ? (e.push(t), t) : void 0
            });
            return g(e, t)
        },
        parent: function(t) {
            return g(N(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return g(this.map(function() {
                return p(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return this.contentDocument || M.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return g(this.map(function(t, e) {
                return O.call(p(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(t) {
            return j.map(this, function(e) {
                return e[t]
            })
        },
        show: function() {
            return this.each(function() {
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = h(this.nodeName))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(t) {
            var n = e(t);
            if (this[0] && !n) var i = j(t).get(0),
                r = i.parentNode || this.length > 1;
            return this.each(function(e) {
                j(this).wrapAll(n ? t.call(this, e) : r ? i.cloneNode(!0) : i)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                j(this[0]).before(t = j(t));
                for (var e;
                    (e = t.children()).length;) t = e.first();
                j(t).append(this)
            }
            return this
        },
        wrapInner: function(t) {
            var n = e(t);
            return this.each(function(e) {
                var i = j(this),
                    r = i.contents(),
                    o = n ? t.call(this, e) : t;
                r.length ? r.wrapAll(o) : i.append(o)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                j(this).replaceWith(j(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(t) {
            return this.each(function() {
                var e = j(this);
                (t === E ? "none" == e.css("display") : t) ? e.show(): e.hide()
            })
        },
        prev: function(t) {
            return j(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return j(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = this.innerHTML;
                j(this).empty().append(v(this, t, e, n))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(t) {
            return 0 in arguments ? this.each(function(e) {
                var n = v(this, t, e, this.textContent);
                this.textContent = null == n ? "" : "" + n
            }) : 0 in this ? this.pluck("textContent").join("") : null
        },
        attr: function(t, e) {
            var n;
            return "string" != typeof t || 1 in arguments ? this.each(function(n) {
                if (1 === this.nodeType)
                    if (r(t))
                        for (T in t) y(this, T, t[T]);
                    else y(this, t, v(this, e, n, this.getAttribute(t)))
            }) : this.length && 1 === this[0].nodeType ? !(n = this[0].getAttribute(t)) && t in this[0] ? this[0][t] : n : E
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    y(this, t)
                }, this)
            })
        },
        prop: function(t, e) {
            return t = Q[t] || t, 1 in arguments ? this.each(function(n) {
                this[t] = v(this, e, n, this[t])
            }) : this[0] && this[0][t]
        },
        data: function(t, e) {
            var n = "data-" + t.replace(z, "-$1").toLowerCase(),
                i = 1 in arguments ? this.attr(n, e) : this.attr(n);
            return null !== i ? x(i) : E
        },
        val: function(t) {
            return 0 in arguments ? this.each(function(e) {
                this.value = v(this, t, e, this.value)
            }) : this[0] && (this[0].multiple ? j(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(t) {
            if (t) return this.each(function(e) {
                var n = j(this),
                    i = v(this, t, e, n.offset()),
                    r = n.offsetParent().offset(),
                    o = {
                        top: i.top - r.top,
                        left: i.left - r.left
                    };
                "static" == n.css("position") && (o.position = "relative"), n.css(o)
            });
            if (!this.length) return null;
            if (!j.contains(D.documentElement, this[0])) return { top: 0, left: 0 };
            var e = this[0].getBoundingClientRect();
            return {
                left: e.left + window.pageXOffset,
                top: e.top + window.pageYOffset,
                width: Math.round(e.width),
                height: Math.round(e.height)
            }
        },
        css: function(e, n) {
            if (arguments.length < 2) {
                var i, r = this[0];
                if (!r) return;
                if (i = getComputedStyle(r, ""), "string" == typeof e) return r.style[S(e)] || i.getPropertyValue(e);
                if (K(e)) {
                    var o = {};
                    return j.each(e, function(t, e) {
                        o[e] = r.style[S(e)] || i.getPropertyValue(e)
                    }), o
                }
            }
            var s = "";
            if ("string" == t(e)) n || 0 === n ? s = c(e) + ":" + f(e, n) : this.each(function() {
                this.style.removeProperty(c(e))
            });
            else
                for (T in e) e[T] || 0 === e[T] ? s += c(T) + ":" + f(T, e[T]) + ";" : this.each(function() {
                    this.style.removeProperty(c(T))
                });
            return this.each(function() {
                this.style.cssText += ";" + s
            })
        },
        index: function(t) {
            return t ? this.indexOf(j(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return t ? A.some.call(this, function(t) {
                return this.test(w(t))
            }, l(t)) : !1
        },
        addClass: function(t) {
            return t ? this.each(function(e) {
                if ("className" in this) {
                    C = [];
                    var n = w(this),
                        i = v(this, t, e, n);
                    i.split(/\s+/g).forEach(function(t) {
                        j(this).hasClass(t) || C.push(t)
                    }, this), C.length && w(this, n + (n ? " " : "") + C.join(" "))
                }
            }) : this
        },
        removeClass: function(t) {
            return this.each(function(e) {
                if ("className" in this) {
                    if (t === E) return w(this, "");
                    C = w(this), v(this, t, e, C).split(/\s+/g).forEach(function(t) {
                        C = C.replace(l(t), " ")
                    }), w(this, C.trim())
                }
            })
        },
        toggleClass: function(t, e) {
            return t ? this.each(function(n) {
                var i = j(this),
                    r = v(this, t, n, w(this));
                r.split(/\s+/g).forEach(function(t) {
                    (e === E ? !i.hasClass(t) : e) ? i.addClass(t): i.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === E ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                    this.scrollTop = t
                } : function() {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === E ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                    this.scrollLeft = t
                } : function() {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                    e = this.offsetParent(),
                    n = this.offset(),
                    i = q.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return n.top -= parseFloat(j(t).css("margin-top")) || 0, n.left -= parseFloat(j(t).css("margin-left")) || 0, i.top += parseFloat(j(e[0]).css("border-top-width")) || 0, i.left += parseFloat(j(e[0]).css("border-left-width")) || 0, {
                    top: n.top - i.top,
                    left: n.left - i.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || D.body; t && !q.test(t.nodeName) && "static" == j(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    }, j.fn.detach = j.fn.remove, ["width", "height"].forEach(function(t) {
        var e = t.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        j.fn[t] = function(r) {
            var o, s = this[0];
            return r === E ? n(s) ? s["inner" + e] : i(s) ? s.documentElement["scroll" + e] : (o = this.offset()) && o[t] : this.each(function(e) {
                s = j(this), s.css(t, v(this, r, e, s[t]()))
            })
        }
    }), _.forEach(function(e, n) {
        var i = n % 2;
        j.fn[e] = function() {
            var e, r, o = j.map(arguments, function(n) {
                    return e = t(n), "object" == e || "array" == e || null == n ? n : G.fragment(n)
                }),
                s = this.length > 1;
            return o.length < 1 ? this : this.each(function(t, e) {
                r = i ? e : e.parentNode, e = 0 == n ? e.nextSibling : 1 == n ? e.firstChild : 2 == n ? e : null;
                var a = j.contains(D.documentElement, r);
                o.forEach(function(t) {
                    if (s) t = t.cloneNode(!0);
                    else if (!r) return j(t).remove();
                    r.insertBefore(t, e), a && b(t, function(t) {
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || window.eval.call(window, t.innerHTML)
                    })
                })
            })
        }, j.fn[i ? e + "To" : "insert" + (n ? "Before" : "After")] = function(t) {
            return j(t)[e](this), this
        }
    }), G.Z.prototype = d.prototype = j.fn, G.uniq = N, G.deserializeValue = x, j.zepto = G, j
}();
window.Zepto = Zepto, void 0 === window.$ && (window.$ = Zepto),
    function(t) {
        function e(e, n, i) {
            var r = t.Event(n);
            return t(e).trigger(r, i), !r.isDefaultPrevented()
        }

        function n(t, n, i, r) {
            return t.global ? e(n || y, i, r) : void 0
        }

        function i(e) {
            e.global && 0 === t.active++ && n(e, null, "ajaxStart")
        }

        function r(e) {
            e.global && !--t.active && n(e, null, "ajaxStop")
        }

        function o(t, e) {
            var i = e.context;
            return e.beforeSend.call(i, t, e) === !1 || n(e, i, "ajaxBeforeSend", [t, e]) === !1 ? !1 : void n(e, i, "ajaxSend", [t, e])
        }

        function s(t, e, i, r) {
            var o = i.context,
                s = "success";
            i.success.call(o, t, s, e), r && r.resolveWith(o, [t, s, e]), n(i, o, "ajaxSuccess", [e, i, t]), u(s, e, i)
        }

        function a(t, e, i, r, o) {
            var s = r.context;
            r.error.call(s, i, e, t), o && o.rejectWith(s, [i, e, t]), n(r, s, "ajaxError", [i, r, t || e]), u(e, i, r)
        }

        function u(t, e, i) {
            var o = i.context;
            i.complete.call(o, e, t), n(i, o, "ajaxComplete", [e, i]), r(i)
        }

        function c() {}

        function l(t) {
            return t && (t = t.split(";", 2)[0]), t && (t == T ? "html" : t == E ? "json" : x.test(t) ? "script" : b.test(t) && "xml") || "text"
        }

        function f(t, e) {
            return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
        }

        function h(e) {
            e.processData && e.data && "string" != t.type(e.data) && (e.data = t.param(e.data, e.traditional)), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = f(e.url, e.data), e.data = void 0)
        }

        function p(e, n, i, r) {
            return t.isFunction(n) && (r = i, i = n, n = void 0), t.isFunction(i) || (r = i, i = void 0), {
                url: e,
                data: n,
                success: i,
                dataType: r
            }
        }

        function d(e, n, i, r) {
            var o, s = t.isArray(n),
                a = t.isPlainObject(n);
            t.each(n, function(n, u) {
                o = t.type(u), r && (n = i ? r : r + "[" + (a || "object" == o || "array" == o ? n : "") + "]"), !r && s ? e.add(u.name, u.value) : "array" == o || !i && "object" == o ? d(e, u, i, n) : e.add(n, u)
            })
        }

        var m, g, v = 0,
            y = window.document,
            w = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
            x = /^(?:text|application)\/javascript/i,
            b = /^(?:text|application)\/xml/i,
            E = "application/json",
            T = "text/html",
            j = /^\s*$/,
            C = y.createElement("a");
        C.href = window.location.href, t.active = 0, t.ajaxJSONP = function(e, n) {
            if (!("type" in e)) return t.ajax(e);
            var i, r, u = e.jsonpCallback,
                c = (t.isFunction(u) ? u() : u) || "jsonp" + ++v,
                l = y.createElement("script"),
                f = window[c],
                h = function(e) {
                    t(l).triggerHandler("error", e || "abort")
                },
                p = { abort: h };
            return n && n.promise(p), t(l).on("load error", function(o, u) {
                clearTimeout(r), t(l).off().remove(), "error" != o.type && i ? s(i[0], p, e, n) : a(null, u || "error", p, e, n), window[c] = f, i && t.isFunction(f) && f(i[0]), f = i = void 0
            }), o(p, e) === !1 ? (h("abort"), p) : (window[c] = function() {
                i = arguments
            }, l.src = e.url.replace(/\?(.+)=\?/, "?$1=" + c), y.head.appendChild(l), e.timeout > 0 && (r = setTimeout(function() {
                h("timeout")
            }, e.timeout)), p)
        }, t.ajaxSettings = {
            type: "GET",
            beforeSend: c,
            success: c,
            error: c,
            complete: c,
            context: null,
            global: !0,
            xhr: function() {
                return new window.XMLHttpRequest
            },
            accepts: {
                script: "text/javascript, application/javascript, application/x-javascript",
                json: E,
                xml: "application/xml, text/xml",
                html: T,
                text: "text/plain"
            },
            crossDomain: !1,
            timeout: 0,
            processData: !0,
            cache: !0
        }, t.ajax = function(e) {
            var n, r, u = t.extend({}, e || {}),
                p = t.Deferred && t.Deferred();
            for (m in t.ajaxSettings) void 0 === u[m] && (u[m] = t.ajaxSettings[m]);
            i(u), u.crossDomain || (n = y.createElement("a"), n.href = u.url, n.href = n.href, u.crossDomain = C.protocol + "//" + C.host != n.protocol + "//" + n.host), u.url || (u.url = window.location.toString()), (r = u.url.indexOf("#")) > -1 && (u.url = u.url.slice(0, r)), h(u);
            var d = u.dataType,
                v = /\?.+=\?/.test(u.url);
            if (v && (d = "jsonp"), u.cache !== !1 && (e && e.cache === !0 || "script" != d && "jsonp" != d) || (u.url = f(u.url, "_=" + Date.now())), "jsonp" == d) return v || (u.url = f(u.url, u.jsonp ? u.jsonp + "=?" : u.jsonp === !1 ? "" : "callback=?")), t.ajaxJSONP(u, p);
            var w, x = u.accepts[d],
                b = {},
                E = function(t, e) {
                    b[t.toLowerCase()] = [t, e]
                },
                T = /^([\w-]+:)\/\//.test(u.url) ? RegExp.$1 : window.location.protocol,
                S = u.xhr(),
                N = S.setRequestHeader;
            if (p && p.promise(S), u.crossDomain || E("X-Requested-With", "XMLHttpRequest"), E("Accept", x || "*/*"), (x = u.mimeType || x) && (x.indexOf(",") > -1 && (x = x.split(",", 2)[0]), S.overrideMimeType && S.overrideMimeType(x)), (u.contentType || u.contentType !== !1 && u.data && "GET" != u.type.toUpperCase()) && E("Content-Type", u.contentType || "application/x-www-form-urlencoded"), u.headers)
                for (g in u.headers) E(g, u.headers[g]);
            if (S.setRequestHeader = E, S.onreadystatechange = function() {
                    if (4 == S.readyState) {
                        S.onreadystatechange = c, clearTimeout(w);
                        var e, n = !1;
                        if (S.status >= 200 && S.status < 300 || 304 == S.status || 0 == S.status && "file:" == T) {
                            if (d = d || l(u.mimeType || S.getResponseHeader("content-type")), "arraybuffer" == S.responseType || "blob" == S.responseType) e = S.response;
                            else {
                                e = S.responseText;
                                try {
                                    "script" == d ? (1, eval)(e) : "xml" == d ? e = S.responseXML : "json" == d && (e = j.test(e) ? null : t.parseJSON(e))
                                } catch (i) {
                                    n = i
                                }
                                if (n) return a(n, "parsererror", S, u, p)
                            }
                            s(e, S, u, p)
                        } else a(S.statusText || null, S.status ? "error" : "abort", S, u, p)
                    }
                }, o(S, u) === !1) return S.abort(), a(null, "abort", S, u, p), S;
            if (u.xhrFields)
                for (g in u.xhrFields) S[g] = u.xhrFields[g];
            var A = "async" in u ? u.async : !0;
            S.open(u.type, u.url, A, u.username, u.password);
            for (g in b) N.apply(S, b[g]);
            return u.timeout > 0 && (w = setTimeout(function() {
                S.onreadystatechange = c, S.abort(), a(null, "timeout", S, u, p)
            }, u.timeout)), S.send(u.data ? u.data : null), S
        }, t.get = function() {
            return t.ajax(p.apply(null, arguments))
        }, t.post = function() {
            var e = p.apply(null, arguments);
            return e.type = "POST", t.ajax(e)
        }, t.getJSON = function() {
            var e = p.apply(null, arguments);
            return e.dataType = "json", t.ajax(e)
        }, t.fn.load = function(e, n, i) {
            if (!this.length) return this;
            var r, o = this,
                s = e.split(/\s/),
                a = p(e, n, i),
                u = a.success;
            return s.length > 1 && (a.url = s[0], r = s[1]), a.success = function(e) {
                o.html(r ? t("<div>").html(e.replace(w, "")).find(r) : e), u && u.apply(o, arguments)
            }, t.ajax(a), this
        };
        var S = encodeURIComponent;
        t.param = function(e, n) {
            var i = [];
            return i.add = function(e, n) {
                t.isFunction(n) && (n = n()), null == n && (n = ""), this.push(S(e) + "=" + S(n))
            }, d(i, e, n), i.join("&").replace(/%20/g, "+")
        }
    }(Zepto),
    function(t) {
        var e, n = [];
        t.fn.remove = function() {
            return this.each(function() {
                this.parentNode && ("IMG" === this.tagName && (n.push(this), this.src = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=", e && clearTimeout(e), e = setTimeout(function() {
                    n = []
                }, 6e4)), this.parentNode.removeChild(this))
            })
        }
    }(Zepto),
    function(t) {
        t.Callbacks = function(e) {
            e = t.extend({}, e);
            var n, i, r, o, s, a, u = [],
                c = !e.once && [],
                l = function(t) {
                    for (n = e.memory && t, i = !0, a = o || 0, o = 0, s = u.length, r = !0; u && s > a; ++a)
                        if (u[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                            n = !1;
                            break
                        }
                    r = !1, u && (c ? c.length && l(c.shift()) : n ? u.length = 0 : f.disable())
                },
                f = {
                    add: function() {
                        if (u) {
                            var i = u.length,
                                a = function(n) {
                                    t.each(n, function(t, n) {
                                        "function" == typeof n ? e.unique && f.has(n) || u.push(n) : n && n.length && "string" != typeof n && a(n)
                                    })
                                };
                            a(arguments), r ? s = u.length : n && (o = i, l(n))
                        }
                        return this
                    },
                    remove: function() {
                        return u && t.each(arguments, function(e, n) {
                            for (var i;
                                (i = t.inArray(n, u, i)) > -1;) u.splice(i, 1), r && (s >= i && --s, a >= i && --a)
                        }), this
                    },
                    has: function(e) {
                        return !(!u || !(e ? t.inArray(e, u) > -1 : u.length))
                    },
                    empty: function() {
                        return s = u.length = 0, this
                    },
                    disable: function() {
                        return u = c = n = void 0, this
                    },
                    disabled: function() {
                        return !u
                    },
                    lock: function() {
                        return c = void 0, n || f.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !u || i && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], r ? c.push(e) : l(e)), this
                    },
                    fire: function() {
                        return f.fireWith(this, arguments)
                    },
                    fired: function() {
                        return !!i
                    }
                };
            return f
        }
    }(Zepto),
    function(t) {
        function e(n) {
            var i = [
                    ["resolve", "done", t.Callbacks({
                        once: 1,
                        memory: 1
                    }), "resolved"],
                    ["reject", "fail", t.Callbacks({
                        once: 1,
                        memory: 1
                    }), "rejected"],
                    ["notify", "CreditLimit", t.Callbacks({ memory: 1 })]
                ],
                r = "pending",
                o = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments), this
                    },
                    then: function() {
                        var n = arguments;
                        return e(function(e) {
                            t.each(i, function(i, r) {
                                var a = t.isFunction(n[i]) && n[i];
                                s[r[1]](function() {
                                    var n = a && a.apply(this, arguments);
                                    if (n && t.isFunction(n.promise)) n.promise().done(e.resolve).fail(e.reject).progress(e.notify);
                                    else {
                                        var i = this === o ? e.promise() : this,
                                            s = a ? [n] : arguments;
                                        e[r[0] + "With"](i, s)
                                    }
                                })
                            }), n = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? t.extend(e, o) : o
                    }
                },
                s = {};
            return t.each(i, function(t, e) {
                var n = e[2],
                    a = e[3];
                o[e[1]] = n.add, a && n.add(function() {
                    r = a
                }, i[1 ^ t][2].disable, i[2][2].lock), s[e[0]] = function() {
                    return s[e[0] + "With"](this === s ? o : this, arguments), this
                }, s[e[0] + "With"] = n.fireWith
            }), o.promise(s), n && n.call(s, s), s
        }

        var n = Array.prototype.slice;
        t.when = function(i) {
            var r, o, s, a = n.call(arguments),
                u = a.length,
                c = 0,
                l = 1 !== u || i && t.isFunction(i.promise) ? u : 0,
                f = 1 === l ? i : e(),
                h = function(t, e, i) {
                    return function(o) {
                        e[t] = this, i[t] = arguments.length > 1 ? n.call(arguments) : o, i === r ? f.notifyWith(e, i) : --l || f.resolveWith(e, i)
                    }
                };
            if (u > 1)
                for (r = new Array(u), o = new Array(u), s = new Array(u); u > c; ++c) a[c] && t.isFunction(a[c].promise) ? a[c].promise().done(h(c, s, a)).fail(f.reject).progress(h(c, o, r)) : --l;
            return l || f.resolveWith(s, a), f.promise()
        }, t.Deferred = e
    }(Zepto),
    function(t) {
        function e(t) {
            return t._zid || (t._zid = h++)
        }

        function n(t, n, o, s) {
            if (n = i(n), n.ns) var a = r(n.ns);
            return (g[e(t)] || []).filter(function(t) {
                return t && (!n.e || t.e == n.e) && (!n.ns || a.test(t.ns)) && (!o || e(t.fn) === e(o)) && (!s || t.sel == s)
            })
        }

        function i(t) {
            var e = ("" + t).split(".");
            return { e: e[0], ns: e.slice(1).sort().join(" ") }
        }

        function r(t) {
            return new RegExp("(?:^| )" + t.replace(" ", " .* ?") + "(?: |$)")
        }

        function o(t, e) {
            return t.del && !y && t.e in w || !!e
        }

        function s(t) {
            return x[t] || y && w[t] || t
        }

        function a(n, r, a, u, l, h, p) {
            var d = e(n),
                m = g[d] || (g[d] = []);
            r.split(/\s/).forEach(function(e) {
                if ("ready" == e) return t(document).ready(a);
                var r = i(e);
                r.fn = a, r.sel = l, r.e in x && (a = function(e) {
                    var n = e.relatedTarget;
                    return !n || n !== this && !t.contains(this, n) ? r.fn.apply(this, arguments) : void 0
                }), r.del = h;
                var d = h || a;
                r.proxy = function(t) {
                    if (t = c(t), !t.isImmediatePropagationStopped()) {
                        t.data = u;
                        var e = d.apply(n, t._args == f ? [t] : [t].concat(t._args));
                        return e === !1 && (t.preventDefault(), t.stopPropagation()), e
                    }
                }, r.i = m.length, m.push(r), "addEventListener" in n && n.addEventListener(s(r.e), r.proxy, o(r, p))
            })
        }

        function u(t, i, r, a, u) {
            var c = e(t);
            (i || "").split(/\s/).forEach(function(e) {
                n(t, e, r, a).forEach(function(e) {
                    delete g[c][e.i], "removeEventListener" in t && t.removeEventListener(s(e.e), e.proxy, o(e, u))
                })
            })
        }

        function c(e, n) {
            return (n || !e.isDefaultPrevented) && (n || (n = e), t.each(j, function(t, i) {
                var r = n[t];
                e[t] = function() {
                    return this[i] = b, r && r.apply(n, arguments)
                }, e[i] = E
            }), (n.defaultPrevented !== f ? n.defaultPrevented : "returnValue" in n ? n.returnValue === !1 : n.getPreventDefault && n.getPreventDefault()) && (e.isDefaultPrevented = b)), e
        }

        function l(t) {
            var e, n = { originalEvent: t };
            for (e in t) T.test(e) || t[e] === f || (n[e] = t[e]);
            return c(n, t)
        }

        var f, h = 1,
            p = Array.prototype.slice,
            d = t.isFunction,
            m = function(t) {
                return "string" == typeof t
            },
            g = {},
            v = {},
            y = "onfocusin" in window,
            w = {
                focus: "focusin",
                blur: "focusout"
            },
            x = { mouseenter: "mouseover", mouseleave: "mouseout" };
        v.click = v.mousedown = v.mouseup = v.mousemove = "MouseEvents", t.event = {
            add: a,
            remove: u
        }, t.proxy = function(n, i) {
            var r = 2 in arguments && p.call(arguments, 2);
            if (d(n)) {
                var o = function() {
                    return n.apply(i, r ? r.concat(p.call(arguments)) : arguments)
                };
                return o._zid = e(n), o
            }
            if (m(i)) return r ? (r.unshift(n[i], n), t.proxy.apply(null, r)) : t.proxy(n[i], n);
            throw new TypeError("expected function")
        }, t.fn.bind = function(t, e, n) {
            return this.on(t, e, n)
        }, t.fn.unbind = function(t, e) {
            return this.off(t, e)
        }, t.fn.one = function(t, e, n, i) {
            return this.on(t, e, n, i, 1)
        };
        var b = function() {
                return !0
            },
            E = function() {
                return !1
            },
            T = /^([A-Z]|returnValue$|layer[XY]$)/,
            j = {
                preventDefault: "isDefaultPrevented",
                stopImmediatePropagation: "isImmediatePropagationStopped",
                stopPropagation: "isPropagationStopped"
            };
        t.fn.delegate = function(t, e, n) {
            return this.on(e, t, n)
        }, t.fn.undelegate = function(t, e, n) {
            return this.off(e, t, n)
        }, t.fn.live = function(e, n) {
            return t(document.body).delegate(this.selector, e, n), this
        }, t.fn.die = function(e, n) {
            return t(document.body).undelegate(this.selector, e, n), this
        }, t.fn.on = function(e, n, i, r, o) {
            var s, c, h = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                h.on(t, n, i, e, o)
            }), h) : (m(n) || d(r) || r === !1 || (r = i, i = n, n = f), (r === f || i === !1) && (r = i, i = f), r === !1 && (r = E), h.each(function(f, h) {
                o && (s = function(t) {
                    return u(h, t.type, r), r.apply(this, arguments)
                }), n && (c = function(e) {
                    var i, o = t(e.target).closest(n, h).get(0);
                    return o && o !== h ? (i = t.extend(l(e), {
                        currentTarget: o,
                        liveFired: h
                    }), (s || r).apply(o, [i].concat(p.call(arguments, 1)))) : void 0
                }), a(h, e, r, i, n, c || s)
            }))
        }, t.fn.off = function(e, n, i) {
            var r = this;
            return e && !m(e) ? (t.each(e, function(t, e) {
                r.off(t, n, e)
            }), r) : (m(n) || d(i) || i === !1 || (i = n, n = f), i === !1 && (i = E), r.each(function() {
                u(this, e, i, n)
            }))
        }, t.fn.trigger = function(e, n) {
            return e = m(e) || t.isPlainObject(e) ? t.Event(e) : c(e), e._args = n, this.each(function() {
                e.type in w && "function" == typeof this[e.type] ? this[e.type]() : "dispatchEvent" in this ? this.dispatchEvent(e) : t(this).triggerHandler(e, n)
            })
        }, t.fn.triggerHandler = function(e, i) {
            var r, o;
            return this.each(function(s, a) {
                r = l(m(e) ? t.Event(e) : e), r._args = i, r.target = a, t.each(n(a, e.type || e), function(t, e) {
                    return o = e.proxy(r), r.isImmediatePropagationStopped() ? !1 : void 0
                })
            }), o
        }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
            t.fn[e] = function(t) {
                return 0 in arguments ? this.bind(e, t) : this.trigger(e)
            }
        }), t.Event = function(t, e) {
            m(t) || (e = t, t = e.type);
            var n = document.createEvent(v[t] || "Events"),
                i = !0;
            if (e)
                for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
            return n.initEvent(t, i, !0), c(n)
        }
    }(Zepto),
    function(t) {
        t.fn.serializeArray = function() {
            var e, n, i = [],
                r = function(t) {
                    return t.forEach ? t.forEach(r) : void i.push({ name: e, value: t })
                };
            return this[0] && t.each(this[0].elements, function(i, o) {
                n = o.type, e = o.name, e && "fieldset" != o.nodeName.toLowerCase() && !o.disabled && "submit" != n && "reset" != n && "button" != n && "file" != n && ("radio" != n && "checkbox" != n || o.checked) && r(t(o).val())
            }), i
        }, t.fn.serialize = function() {
            var t = [];
            return this.serializeArray().forEach(function(e) {
                t.push(encodeURIComponent(e.name) + "=" + encodeURIComponent(e.value))
            }), t.join("&")
        }, t.fn.submit = function(e) {
            if (0 in arguments) this.bind("submit", e);
            else if (this.length) {
                var n = t.Event("submit");
                this.eq(0).trigger(n), n.isDefaultPrevented() || this.get(0).submit()
            }
            return this
        }
    }(Zepto),
    function(t, e) {
        function n(t) {
            return t.replace(/([a-z])([A-Z])/, "$1-$2").toLowerCase()
        }

        function i(t) {
            return r ? r + t : t.toLowerCase()
        }

        var r, o, s, a, u, c, l, f, h, p, d = "",
            m = {
                Webkit: "webkit",
                Moz: "",
                O: "o"
            },
            g = document.createElement("div"),
            v = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i,
            y = {};
        t.each(m, function(t, n) {
            return g.style[t + "TransitionProperty"] !== e ? (d = "-" + t.toLowerCase() + "-", r = n, !1) : void 0
        }), o = d + "transform", y[s = d + "transition-property"] = y[a = d + "transition-duration"] = y[c = d + "transition-delay"] = y[u = d + "transition-timing-function"] = y[l = d + "animation-name"] = y[f = d + "animation-duration"] = y[p = d + "animation-delay"] = y[h = d + "animation-timing-function"] = "", t.fx = {
            off: r === e && g.style.transitionProperty === e,
            speeds: { _default: 400, fast: 200, slow: 600 },
            cssPrefix: d,
            transitionEnd: i("TransitionEnd"),
            animationEnd: i("AnimationEnd")
        }, t.fn.animate = function(n, i, r, o, s) {
            return t.isFunction(i) && (o = i, r = e, i = e), t.isFunction(r) && (o = r, r = e), t.isPlainObject(i) && (r = i.easing, o = i.complete, s = i.delay, i = i.duration), i && (i = ("number" == typeof i ? i : t.fx.speeds[i] || t.fx.speeds._default) / 1e3), s && (s = parseFloat(s) / 1e3), this.anim(n, i, r, o, s)
        }, t.fn.anim = function(i, r, d, m, g) {
            var w, x, b, E = {},
                T = "",
                j = this,
                C = t.fx.transitionEnd,
                S = !1;
            if (r === e && (r = t.fx.speeds._default / 1e3), g === e && (g = 0), t.fx.off && (r = 0), "string" == typeof i) E[l] = i, E[f] = r + "s", E[p] = g + "s", E[h] = d || "linear", C = t.fx.animationEnd;
            else {
                x = [];
                for (w in i) v.test(w) ? T += w + "(" + i[w] + ") " : (E[w] = i[w], x.push(n(w)));
                T && (E[o] = T, x.push(o)), r > 0 && "object" == typeof i && (E[s] = x.join(", "), E[a] = r + "s", E[c] = g + "s", E[u] = d || "linear")
            }
            return b = function(e) {
                if ("undefined" != typeof e) {
                    if (e.target !== e.currentTarget) return;
                    t(e.target).unbind(C, b)
                } else t(this).unbind(C, b);
                S = !0, t(this).css(y), m && m.call(this)
            }, r > 0 && (this.bind(C, b), setTimeout(function() {
                S || b.call(j)
            }, 1e3 * (r + g) + 25)), this.size() && this.get(0).clientLeft, this.css(E), 0 >= r && setTimeout(function() {
                j.each(function() {
                    b.call(this)
                })
            }, 0), this
        }, g = null
    }(Zepto),
    function(t, e) {
        function n(n, i, r, o, s) {
            "function" != typeof i || s || (s = i, i = e);
            var a = { opacity: r };
            return o && (a.scale = o, n.css(t.fx.cssPrefix + "transform-origin", "0 0")), n.animate(a, i, null, s)
        }

        function i(e, i, r, o) {
            return n(e, i, 0, r, function() {
                s.call(t(this)), o && o.call(this)
            })
        }

        var r = window.document,
            o = (r.documentElement, t.fn.show),
            s = t.fn.hide,
            a = t.fn.toggle;
        t.fn.show = function(t, i) {
            return o.call(this), t === e ? t = 0 : this.css("opacity", 0), n(this, t, 1, "1,1", i)
        }, t.fn.hide = function(t, n) {
            return t === e ? s.call(this) : i(this, t, "0,0", n)
        }, t.fn.toggle = function(n, i) {
            return n === e || "boolean" == typeof n ? a.call(this, n) : this.each(function() {
                var e = t(this);
                e["none" == e.css("display") ? "show" : "hide"](n, i)
            })
        }, t.fn.fadeTo = function(t, e, i) {
            return n(this, t, e, null, i)
        }, t.fn.fadeIn = function(t, e) {
            var n = this.css("opacity");
            return n > 0 ? this.css("opacity", 0) : n = 1, o.call(this).fadeTo(t, n, e)
        }, t.fn.fadeOut = function(t, e) {
            return i(this, t, null, e)
        }, t.fn.fadeToggle = function(e, n) {
            return this.each(function() {
                var i = t(this);
                i[0 == i.css("opacity") || "none" == i.css("display") ? "fadeIn" : "fadeOut"](e, n)
            })
        }
    }(Zepto),
    function() {
        try {
            getComputedStyle(void 0)
        } catch (t) {
            var e = getComputedStyle;
            window.getComputedStyle = function(t) {
                try {
                    return e(t)
                } catch (n) {
                    return null
                }
            }
        }
    }(),
    function(t) {
        function e(e) {
            return e = t(e), !(!e.width() && !e.height()) && "none" !== e.css("display")
        }

        function n(t, e) {
            t = t.replace(/=#\]/g, '="#"]');
            var n, i, r = a.exec(t);
            if (r && r[2] in s && (n = s[r[2]], i = r[3], t = r[1], i)) {
                var o = Number(i);
                i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
            }
            return e(t, n, i)
        }

        var i = t.zepto,
            r = i.qsa,
            o = i.matches,
            s = t.expr[":"] = {
                visible: function() {
                    return e(this) ? this : void 0
                },
                hidden: function() {
                    return e(this) ? void 0 : this
                },
                selected: function() {
                    return this.selected ? this : void 0
                },
                checked: function() {
                    return this.checked ? this : void 0
                },
                parent: function() {
                    return this.parentNode
                },
                first: function(t) {
                    return 0 === t ? this : void 0
                },
                last: function(t, e) {
                    return t === e.length - 1 ? this : void 0
                },
                eq: function(t, e, n) {
                    return t === n ? this : void 0
                },
                contains: function(e, n, i) {
                    return t(this).text().indexOf(i) > -1 ? this : void 0
                },
                has: function(t, e, n) {
                    return i.qsa(this, n).length ? this : void 0
                }
            },
            a = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
            u = /^\s*>/,
            c = "Zepto" + +new Date;
        i.qsa = function(e, o) {
            return n(o, function(n, s, a) {
                try {
                    var l;
                    !n && s ? n = "*" : u.test(n) && (l = t(e).addClass(c), n = "." + c + " " + n);
                    var f = r(e, n)
                } catch (h) {
                    throw console.error("error performing selector: %o", o), h
                } finally {
                    l && l.removeClass(c)
                }
                return s ? i.uniq(t.map(f, function(t, e) {
                    return s.call(t, e, f, a)
                })) : f
            })
        }, i.matches = function(t, e) {
            return n(e, function(e, n, i) {
                return (!e || o(t, e)) && (!n || n.call(t, null, i) === t)
            })
        }
    }(Zepto),
    function(t) {
        function e(t, e, n, i) {
            return Math.abs(t - e) >= Math.abs(n - i) ? t - e > 0 ? "Left" : "Right" : n - i > 0 ? "Up" : "Down"
        }

        function n() {
            l = null, h.last && (h.el.trigger("longTap"), h = {})
        }

        function i() {
            l && clearTimeout(l), l = null
        }

        function r() {
            a && clearTimeout(a), u && clearTimeout(u), c && clearTimeout(c), l && clearTimeout(l), a = u = c = l = null, h = {}
        }

        function o(t) {
            return ("touch" == t.pointerType || t.pointerType == t.MSPOINTER_TYPE_TOUCH) && t.isPrimary
        }

        function s(t, e) {
            return t.type == "pointer" + e || t.type.toLowerCase() == "mspointer" + e
        }

        var a, u, c, l, f, h = {},
            p = 750;
        t(document).ready(function() {
            var d, m, g, v, y = 0,
                w = 0;
            "MSGesture" in window && (f = new MSGesture, f.target = document.body), t(document).bind("MSGestureEnd", function(t) {
                var e = t.velocityX > 1 ? "Right" : t.velocityX < -1 ? "Left" : t.velocityY > 1 ? "Down" : t.velocityY < -1 ? "Up" : null;
                e && (h.el.trigger("swipe"), h.el.trigger("swipe" + e))
            }).on("touchstart MSPointerDown pointerdown", function(e) {
                (!(v = s(e, "down")) || o(e)) && (g = v ? e : e.touches[0], e.touches && 1 === e.touches.length && h.x2 && (h.x2 = void 0, h.y2 = void 0), d = Date.now(), m = d - (h.last || d), h.el = t("tagName" in g.target ? g.target : g.target.parentNode), a && clearTimeout(a), h.x1 = g.pageX, h.y1 = g.pageY, m > 0 && 250 >= m && (h.isDoubleTap = !0), h.last = d, l = setTimeout(n, p), f && v && f.addPointer(e.pointerId))
            }).on("touchmove MSPointerMove pointermove", function(t) {
                (!(v = s(t, "move")) || o(t)) && (g = v ? t : t.touches[0], i(), h.x2 = g.pageX, h.y2 = g.pageY, y += Math.abs(h.x1 - h.x2), w += Math.abs(h.y1 - h.y2))
            }).on("touchend MSPointerUp", function(n) { //pointerup
                (!(v = s(n, "up")) || o(n)) && (i(), h.x2 && Math.abs(h.x1 - h.x2) > 30 || h.y2 && Math.abs(h.y1 - h.y2) > 30 ? c = setTimeout(function() {
                    h.el.trigger("swipe"), h.el && h.el.trigger("swipe" + e(h.x1, h.x2, h.y1, h.y2)), h = {}
                }, 0) : "last" in h && (30 > y && 30 > w ? u = setTimeout(function() {
                    var e = t.Event("tap");
                    e.cancelTouch = r, h.el && h.el.trigger(e), h.isDoubleTap ? (h.el && h.el.trigger("doubleTap"), h = {}) : a = setTimeout(function() {
                        a = null, h.el && h.el.trigger("singleTap"), h = {}
                    }, 250)
                }, 0) : h = {}), y = w = 0)
            }).on("touchcancel MSPointerCancel pointercancel", r), t(window).on("scroll", r)
        }), ["swipe", "swipeLeft", "swipeRight", "swipeUp", "swipeDown", "doubleTap", "tap", "singleTap", "longTap"].forEach(function(e) {
            t.fn[e] = function(t) {
                return this.on(e, t)
            }
        })
    }(Zepto);

// module.exports = $;