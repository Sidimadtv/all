! function(t, e) {
	"use strict";
	"object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
		if (!t.document) throw new Error("jQuery requires a window with a document");
		return e(t)
	} : e(t)
}("undefined" != typeof window ? window : this, function(T, t) {
	"use strict";
	var e = [],
		S = T.document,
		i = Object.getPrototypeOf,
		s = e.slice,
		g = e.concat,
		l = e.push,
		r = e.indexOf,
		n = {},
		o = n.toString,
		m = n.hasOwnProperty,
		a = m.toString,
		u = a.call(Object),
		y = {},
		v = function(t) {
			return "function" == typeof t && "number" != typeof t.nodeType
		},
		A = function(t) {
			return null != t && t === t.window
		},
		c = {
			type: !0,
			src: !0,
			noModule: !0
		};

	function b(t, e, n) {
		var i, r = (e = e || S).createElement("script");
		if (r.text = t, n)
			for (i in c) n[i] && (r[i] = n[i]);
		e.head.appendChild(r).parentNode.removeChild(r)
	}

	function _(t) {
		return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t
	}
	var d = "3.3.1",
		w = function(t, e) {
			return new w.fn.init(t, e)
		},
		h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

	function f(t) {
		var e = !!t && "length" in t && t.length,
			n = _(t);
		return !v(t) && !A(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
	}
	w.fn = w.prototype = {
		jquery: d,
		constructor: w,
		length: 0,
		toArray: function() {
			return s.call(this)
		},
		get: function(t) {
			return null == t ? s.call(this) : t < 0 ? this[t + this.length] : this[t]
		},
		pushStack: function(t) {
			var e = w.merge(this.constructor(), t);
			return e.prevObject = this, e
		},
		each: function(t) {
			return w.each(this, t)
		},
		map: function(n) {
			return this.pushStack(w.map(this, function(t, e) {
				return n.call(t, e, t)
			}))
		},
		slice: function() {
			return this.pushStack(s.apply(this, arguments))
		},
		first: function() {
			return this.eq(0)
		},
		last: function() {
			return this.eq(-1)
		},
		eq: function(t) {
			var e = this.length,
				n = +t + (t < 0 ? e : 0);
			return this.pushStack(0 <= n && n < e ? [this[n]] : [])
		},
		end: function() {
			return this.prevObject || this.constructor()
		},
		push: l,
		sort: e.sort,
		splice: e.splice
	}, w.extend = w.fn.extend = function() {
		var t, e, n, i, r, o, a = arguments[0] || {},
			s = 1,
			l = arguments.length,
			u = !1;
		for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || v(a) || (a = {}), s === l && (a = this, s--); s < l; s++)
			if (null != (t = arguments[s]))
				for (e in t) n = a[e], a !== (i = t[e]) && (u && i && (w.isPlainObject(i) || (r = Array.isArray(i))) ? (r ? (r = !1, o = n && Array.isArray(n) ? n : []) : o = n && w.isPlainObject(n) ? n : {}, a[e] = w.extend(u, o, i)) : void 0 !== i && (a[e] = i));
		return a
	}, w.extend({
		expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
		isReady: !0,
		error: function(t) {
			throw new Error(t)
		},
		noop: function() {},
		isPlainObject: function(t) {
			var e, n;
			return !(!t || "[object Object]" !== o.call(t)) && (!(e = i(t)) || "function" == typeof(n = m.call(e, "constructor") && e.constructor) && a.call(n) === u)
		},
		isEmptyObject: function(t) {
			var e;
			for (e in t) return !1;
			return !0
		},
		globalEval: function(t) {
			b(t)
		},
		each: function(t, e) {
			var n, i = 0;
			if (f(t))
				for (n = t.length; i < n && !1 !== e.call(t[i], i, t[i]); i++);
			else
				for (i in t)
					if (!1 === e.call(t[i], i, t[i])) break;
			return t
		},
		trim: function(t) {
			return null == t ? "" : (t + "").replace(h, "")
		},
		makeArray: function(t, e) {
			var n = e || [];
			return null != t && (f(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : l.call(n, t)), n
		},
		inArray: function(t, e, n) {
			return null == e ? -1 : r.call(e, t, n)
		},
		merge: function(t, e) {
			for (var n = +e.length, i = 0, r = t.length; i < n; i++) t[r++] = e[i];
			return t.length = r, t
		},
		grep: function(t, e, n) {
			for (var i = [], r = 0, o = t.length, a = !n; r < o; r++) !e(t[r], r) !== a && i.push(t[r]);
			return i
		},
		map: function(t, e, n) {
			var i, r, o = 0,
				a = [];
			if (f(t))
				for (i = t.length; o < i; o++) null != (r = e(t[o], o, n)) && a.push(r);
			else
				for (o in t) null != (r = e(t[o], o, n)) && a.push(r);
			return g.apply([], a)
		},
		guid: 1,
		support: y
	}), "function" == typeof Symbol && (w.fn[Symbol.iterator] = e[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
		n["[object " + e + "]"] = e.toLowerCase()
	});
	var p = function(n) {
		var t, f, b, o, r, p, d, g, _, l, u, E, T, a, S, m, s, c, y, w = "sizzle" + 1 * new Date,
			v = n.document,
			C = 0,
			i = 0,
			h = at(),
			A = at(),
			L = at(),
			k = function(t, e) {
				return t === e && (u = !0), 0
			},
			x = {}.hasOwnProperty,
			e = [],
			R = e.pop,
			O = e.push,
			I = e.push,
			D = e.slice,
			P = function(t, e) {
				for (var n = 0, i = t.length; n < i; n++)
					if (t[n] === e) return n;
				return -1
			},
			M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
			N = "[\\x20\\t\\r\\n\\f]",
			F = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
			B = "\\[" + N + "*(" + F + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + N + "*\\]",
			U = ":(" + F + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + B + ")*)|.*)\\)|)",
			j = new RegExp(N + "+", "g"),
			K = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
			G = new RegExp("^" + N + "*," + N + "*"),
			H = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
			Y = new RegExp("=" + N + "*([^\\]'\"]*?)" + N + "*\\]", "g"),
			V = new RegExp(U),
			z = new RegExp("^" + F + "$"),
			$ = {
				ID: new RegExp("^#(" + F + ")"),
				CLASS: new RegExp("^\\.(" + F + ")"),
				TAG: new RegExp("^(" + F + "|[*])"),
				ATTR: new RegExp("^" + B),
				PSEUDO: new RegExp("^" + U),
				CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
				bool: new RegExp("^(?:" + M + ")$", "i"),
				needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
			},
			W = /^(?:input|select|textarea|button)$/i,
			q = /^h\d$/i,
			X = /^[^{]+\{\s*\[native \w/,
			Q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
			Z = /[+~]/,
			J = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
			tt = function(t, e, n) {
				var i = "0x" + e - 65536;
				return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
			},
			et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
			nt = function(t, e) {
				return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
			},
			it = function() {
				E()
			},
			rt = vt(function(t) {
				return !0 === t.disabled && ("form" in t || "label" in t)
			}, {
				dir: "parentNode",
				next: "legend"
			});
		try {
			I.apply(e = D.call(v.childNodes), v.childNodes), e[v.childNodes.length].nodeType
		} catch (t) {
			I = {
				apply: e.length ? function(t, e) {
					O.apply(t, D.call(e))
				} : function(t, e) {
					for (var n = t.length, i = 0; t[n++] = e[i++];);
					t.length = n - 1
				}
			}
		}

		function ot(t, e, n, i) {
			var r, o, a, s, l, u, c, d = e && e.ownerDocument,
				h = e ? e.nodeType : 9;
			if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h) return n;
			if (!i && ((e ? e.ownerDocument || e : v) !== T && E(e), e = e || T, S)) {
				if (11 !== h && (l = Q.exec(t)))
					if (r = l[1]) {
						if (9 === h) {
							if (!(a = e.getElementById(r))) return n;
							if (a.id === r) return n.push(a), n
						} else if (d && (a = d.getElementById(r)) && y(e, a) && a.id === r) return n.push(a), n
					} else {
						if (l[2]) return I.apply(n, e.getElementsByTagName(t)), n;
						if ((r = l[3]) && f.getElementsByClassName && e.getElementsByClassName) return I.apply(n, e.getElementsByClassName(r)), n
					} if (f.qsa && !L[t + " "] && (!m || !m.test(t))) {
					if (1 !== h) d = e, c = t;
					else if ("object" !== e.nodeName.toLowerCase()) {
						for ((s = e.getAttribute("id")) ? s = s.replace(et, nt) : e.setAttribute("id", s = w), o = (u = p(t)).length; o--;) u[o] = "#" + s + " " + yt(u[o]);
						c = u.join(","), d = Z.test(t) && gt(e.parentNode) || e
					}
					if (c) try {
						return I.apply(n, d.querySelectorAll(c)), n
					} catch (t) {} finally {
						s === w && e.removeAttribute("id")
					}
				}
			}
			return g(t.replace(K, "$1"), e, n, i)
		}

		function at() {
			var i = [];
			return function t(e, n) {
				return i.push(e + " ") > b.cacheLength && delete t[i.shift()], t[e + " "] = n
			}
		}

		function st(t) {
			return t[w] = !0, t
		}

		function lt(t) {
			var e = T.createElement("fieldset");
			try {
				return !!t(e)
			} catch (t) {
				return !1
			} finally {
				e.parentNode && e.parentNode.removeChild(e), e = null
			}
		}

		function ut(t, e) {
			for (var n = t.split("|"), i = n.length; i--;) b.attrHandle[n[i]] = e
		}

		function ct(t, e) {
			var n = e && t,
				i = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
			if (i) return i;
			if (n)
				for (; n = n.nextSibling;)
					if (n === e) return -1;
			return t ? 1 : -1
		}

		function dt(e) {
			return function(t) {
				return "input" === t.nodeName.toLowerCase() && t.type === e
			}
		}

		function ht(n) {
			return function(t) {
				var e = t.nodeName.toLowerCase();
				return ("input" === e || "button" === e) && t.type === n
			}
		}

		function ft(e) {
			return function(t) {
				return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && rt(t) === e : t.disabled === e : "label" in t && t.disabled === e
			}
		}

		function pt(a) {
			return st(function(o) {
				return o = +o, st(function(t, e) {
					for (var n, i = a([], t.length, o), r = i.length; r--;) t[n = i[r]] && (t[n] = !(e[n] = t[n]))
				})
			})
		}

		function gt(t) {
			return t && void 0 !== t.getElementsByTagName && t
		}
		for (t in f = ot.support = {}, r = ot.isXML = function(t) {
				var e = t && (t.ownerDocument || t).documentElement;
				return !!e && "HTML" !== e.nodeName
			}, E = ot.setDocument = function(t) {
				var e, n, i = t ? t.ownerDocument || t : v;
				return i !== T && 9 === i.nodeType && i.documentElement && (a = (T = i).documentElement, S = !r(T), v !== T && (n = T.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", it, !1) : n.attachEvent && n.attachEvent("onunload", it)), f.attributes = lt(function(t) {
					return t.className = "i", !t.getAttribute("className")
				}), f.getElementsByTagName = lt(function(t) {
					return t.appendChild(T.createComment("")), !t.getElementsByTagName("*").length
				}), f.getElementsByClassName = X.test(T.getElementsByClassName), f.getById = lt(function(t) {
					return a.appendChild(t).id = w, !T.getElementsByName || !T.getElementsByName(w).length
				}), f.getById ? (b.filter.ID = function(t) {
					var e = t.replace(J, tt);
					return function(t) {
						return t.getAttribute("id") === e
					}
				}, b.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && S) {
						var n = e.getElementById(t);
						return n ? [n] : []
					}
				}) : (b.filter.ID = function(t) {
					var n = t.replace(J, tt);
					return function(t) {
						var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
						return e && e.value === n
					}
				}, b.find.ID = function(t, e) {
					if (void 0 !== e.getElementById && S) {
						var n, i, r, o = e.getElementById(t);
						if (o) {
							if ((n = o.getAttributeNode("id")) && n.value === t) return [o];
							for (r = e.getElementsByName(t), i = 0; o = r[i++];)
								if ((n = o.getAttributeNode("id")) && n.value === t) return [o]
						}
						return []
					}
				}), b.find.TAG = f.getElementsByTagName ? function(t, e) {
					return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : f.qsa ? e.querySelectorAll(t) : void 0
				} : function(t, e) {
					var n, i = [],
						r = 0,
						o = e.getElementsByTagName(t);
					if ("*" === t) {
						for (; n = o[r++];) 1 === n.nodeType && i.push(n);
						return i
					}
					return o
				}, b.find.CLASS = f.getElementsByClassName && function(t, e) {
					if (void 0 !== e.getElementsByClassName && S) return e.getElementsByClassName(t)
				}, s = [], m = [], (f.qsa = X.test(T.querySelectorAll)) && (lt(function(t) {
					a.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + N + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || m.push("\\[" + N + "*(?:value|" + M + ")"), t.querySelectorAll("[id~=" + w + "-]").length || m.push("~="), t.querySelectorAll(":checked").length || m.push(":checked"), t.querySelectorAll("a#" + w + "+*").length || m.push(".#.+[+~]")
				}), lt(function(t) {
					t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
					var e = T.createElement("input");
					e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && m.push("name" + N + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"), a.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), m.push(",.*:")
				})), (f.matchesSelector = X.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && lt(function(t) {
					f.disconnectedMatch = c.call(t, "*"), c.call(t, "[s!='']:x"), s.push("!=", U)
				}), m = m.length && new RegExp(m.join("|")), s = s.length && new RegExp(s.join("|")), e = X.test(a.compareDocumentPosition), y = e || X.test(a.contains) ? function(t, e) {
					var n = 9 === t.nodeType ? t.documentElement : t,
						i = e && e.parentNode;
					return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
				} : function(t, e) {
					if (e)
						for (; e = e.parentNode;)
							if (e === t) return !0;
					return !1
				}, k = e ? function(t, e) {
					if (t === e) return u = !0, 0;
					var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
					return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !f.sortDetached && e.compareDocumentPosition(t) === n ? t === T || t.ownerDocument === v && y(v, t) ? -1 : e === T || e.ownerDocument === v && y(v, e) ? 1 : l ? P(l, t) - P(l, e) : 0 : 4 & n ? -1 : 1)
				} : function(t, e) {
					if (t === e) return u = !0, 0;
					var n, i = 0,
						r = t.parentNode,
						o = e.parentNode,
						a = [t],
						s = [e];
					if (!r || !o) return t === T ? -1 : e === T ? 1 : r ? -1 : o ? 1 : l ? P(l, t) - P(l, e) : 0;
					if (r === o) return ct(t, e);
					for (n = t; n = n.parentNode;) a.unshift(n);
					for (n = e; n = n.parentNode;) s.unshift(n);
					for (; a[i] === s[i];) i++;
					return i ? ct(a[i], s[i]) : a[i] === v ? -1 : s[i] === v ? 1 : 0
				}), T
			}, ot.matches = function(t, e) {
				return ot(t, null, null, e)
			}, ot.matchesSelector = function(t, e) {
				if ((t.ownerDocument || t) !== T && E(t), e = e.replace(Y, "='$1']"), f.matchesSelector && S && !L[e + " "] && (!s || !s.test(e)) && (!m || !m.test(e))) try {
					var n = c.call(t, e);
					if (n || f.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
				} catch (t) {}
				return 0 < ot(e, T, null, [t]).length
			}, ot.contains = function(t, e) {
				return (t.ownerDocument || t) !== T && E(t), y(t, e)
			}, ot.attr = function(t, e) {
				(t.ownerDocument || t) !== T && E(t);
				var n = b.attrHandle[e.toLowerCase()],
					i = n && x.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !S) : void 0;
				return void 0 !== i ? i : f.attributes || !S ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
			}, ot.escape = function(t) {
				return (t + "").replace(et, nt)
			}, ot.error = function(t) {
				throw new Error("Syntax error, unrecognized expression: " + t)
			}, ot.uniqueSort = function(t) {
				var e, n = [],
					i = 0,
					r = 0;
				if (u = !f.detectDuplicates, l = !f.sortStable && t.slice(0), t.sort(k), u) {
					for (; e = t[r++];) e === t[r] && (i = n.push(r));
					for (; i--;) t.splice(n[i], 1)
				}
				return l = null, t
			}, o = ot.getText = function(t) {
				var e, n = "",
					i = 0,
					r = t.nodeType;
				if (r) {
					if (1 === r || 9 === r || 11 === r) {
						if ("string" == typeof t.textContent) return t.textContent;
						for (t = t.firstChild; t; t = t.nextSibling) n += o(t)
					} else if (3 === r || 4 === r) return t.nodeValue
				} else
					for (; e = t[i++];) n += o(e);
				return n
			}, (b = ot.selectors = {
				cacheLength: 50,
				createPseudo: st,
				match: $,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function(t) {
						return t[1] = t[1].replace(J, tt), t[3] = (t[3] || t[4] || t[5] || "").replace(J, tt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
					},
					CHILD: function(t) {
						return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t
					},
					PSEUDO: function(t) {
						var e, n = !t[6] && t[2];
						return $.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && V.test(n) && (e = p(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
					}
				},
				filter: {
					TAG: function(t) {
						var e = t.replace(J, tt).toLowerCase();
						return "*" === t ? function() {
							return !0
						} : function(t) {
							return t.nodeName && t.nodeName.toLowerCase() === e
						}
					},
					CLASS: function(t) {
						var e = h[t + " "];
						return e || (e = new RegExp("(^|" + N + ")" + t + "(" + N + "|$)")) && h(t, function(t) {
							return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
						})
					},
					ATTR: function(n, i, r) {
						return function(t) {
							var e = ot.attr(t, n);
							return null == e ? "!=" === i : !i || (e += "", "=" === i ? e === r : "!=" === i ? e !== r : "^=" === i ? r && 0 === e.indexOf(r) : "*=" === i ? r && -1 < e.indexOf(r) : "$=" === i ? r && e.slice(-r.length) === r : "~=" === i ? -1 < (" " + e.replace(j, " ") + " ").indexOf(r) : "|=" === i && (e === r || e.slice(0, r.length + 1) === r + "-"))
						}
					},
					CHILD: function(p, t, e, g, m) {
						var y = "nth" !== p.slice(0, 3),
							v = "last" !== p.slice(-4),
							A = "of-type" === t;
						return 1 === g && 0 === m ? function(t) {
							return !!t.parentNode
						} : function(t, e, n) {
							var i, r, o, a, s, l, u = y !== v ? "nextSibling" : "previousSibling",
								c = t.parentNode,
								d = A && t.nodeName.toLowerCase(),
								h = !n && !A,
								f = !1;
							if (c) {
								if (y) {
									for (; u;) {
										for (a = t; a = a[u];)
											if (A ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
										l = u = "only" === p && !l && "nextSibling"
									}
									return !0
								}
								if (l = [v ? c.firstChild : c.lastChild], v && h) {
									for (f = (s = (i = (r = (o = (a = c)[w] || (a[w] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === C && i[1]) && i[2], a = s && c.childNodes[s]; a = ++s && a && a[u] || (f = s = 0) || l.pop();)
										if (1 === a.nodeType && ++f && a === t) {
											r[p] = [C, s, f];
											break
										}
								} else if (h && (f = s = (i = (r = (o = (a = t)[w] || (a[w] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] || [])[0] === C && i[1]), !1 === f)
									for (;
										(a = ++s && a && a[u] || (f = s = 0) || l.pop()) && ((A ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++f || (h && ((r = (o = a[w] || (a[w] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[p] = [C, f]), a !== t)););
								return (f -= m) === g || f % g == 0 && 0 <= f / g
							}
						}
					},
					PSEUDO: function(t, o) {
						var e, a = b.pseudos[t] || b.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t);
						return a[w] ? a(o) : 1 < a.length ? (e = [t, t, "", o], b.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function(t, e) {
							for (var n, i = a(t, o), r = i.length; r--;) t[n = P(t, i[r])] = !(e[n] = i[r])
						}) : function(t) {
							return a(t, 0, e)
						}) : a
					}
				},
				pseudos: {
					not: st(function(t) {
						var i = [],
							r = [],
							s = d(t.replace(K, "$1"));
						return s[w] ? st(function(t, e, n, i) {
							for (var r, o = s(t, null, i, []), a = t.length; a--;)(r = o[a]) && (t[a] = !(e[a] = r))
						}) : function(t, e, n) {
							return i[0] = t, s(i, null, n, r), i[0] = null, !r.pop()
						}
					}),
					has: st(function(e) {
						return function(t) {
							return 0 < ot(e, t).length
						}
					}),
					contains: st(function(e) {
						return e = e.replace(J, tt),
							function(t) {
								return -1 < (t.textContent || t.innerText || o(t)).indexOf(e)
							}
					}),
					lang: st(function(n) {
						return z.test(n || "") || ot.error("unsupported lang: " + n), n = n.replace(J, tt).toLowerCase(),
							function(t) {
								var e;
								do {
									if (e = S ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-")
								} while ((t = t.parentNode) && 1 === t.nodeType);
								return !1
							}
					}),
					target: function(t) {
						var e = n.location && n.location.hash;
						return e && e.slice(1) === t.id
					},
					root: function(t) {
						return t === a
					},
					focus: function(t) {
						return t === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
					},
					enabled: ft(!1),
					disabled: ft(!0),
					checked: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && !!t.checked || "option" === e && !!t.selected
					},
					selected: function(t) {
						return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
					},
					empty: function(t) {
						for (t = t.firstChild; t; t = t.nextSibling)
							if (t.nodeType < 6) return !1;
						return !0
					},
					parent: function(t) {
						return !b.pseudos.empty(t)
					},
					header: function(t) {
						return q.test(t.nodeName)
					},
					input: function(t) {
						return W.test(t.nodeName)
					},
					button: function(t) {
						var e = t.nodeName.toLowerCase();
						return "input" === e && "button" === t.type || "button" === e
					},
					text: function(t) {
						var e;
						return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
					},
					first: pt(function() {
						return [0]
					}),
					last: pt(function(t, e) {
						return [e - 1]
					}),
					eq: pt(function(t, e, n) {
						return [n < 0 ? n + e : n]
					}),
					even: pt(function(t, e) {
						for (var n = 0; n < e; n += 2) t.push(n);
						return t
					}),
					odd: pt(function(t, e) {
						for (var n = 1; n < e; n += 2) t.push(n);
						return t
					}),
					lt: pt(function(t, e, n) {
						for (var i = n < 0 ? n + e : n; 0 <= --i;) t.push(i);
						return t
					}),
					gt: pt(function(t, e, n) {
						for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
						return t
					})
				}
			}).pseudos.nth = b.pseudos.eq, {
				radio: !0,
				checkbox: !0,
				file: !0,
				password: !0,
				image: !0
			}) b.pseudos[t] = dt(t);
		for (t in {
				submit: !0,
				reset: !0
			}) b.pseudos[t] = ht(t);

		function mt() {}

		function yt(t) {
			for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
			return i
		}

		function vt(s, t, e) {
			var l = t.dir,
				u = t.next,
				c = u || l,
				d = e && "parentNode" === c,
				h = i++;
			return t.first ? function(t, e, n) {
				for (; t = t[l];)
					if (1 === t.nodeType || d) return s(t, e, n);
				return !1
			} : function(t, e, n) {
				var i, r, o, a = [C, h];
				if (n) {
					for (; t = t[l];)
						if ((1 === t.nodeType || d) && s(t, e, n)) return !0
				} else
					for (; t = t[l];)
						if (1 === t.nodeType || d)
							if (r = (o = t[w] || (t[w] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[l] || t;
							else {
								if ((i = r[c]) && i[0] === C && i[1] === h) return a[2] = i[2];
								if ((r[c] = a)[2] = s(t, e, n)) return !0
							} return !1
			}
		}

		function At(r) {
			return 1 < r.length ? function(t, e, n) {
				for (var i = r.length; i--;)
					if (!r[i](t, e, n)) return !1;
				return !0
			} : r[0]
		}

		function bt(t, e, n, i, r) {
			for (var o, a = [], s = 0, l = t.length, u = null != e; s < l; s++)(o = t[s]) && (n && !n(o, i, r) || (a.push(o), u && e.push(s)));
			return a
		}

		function _t(f, p, g, m, y, t) {
			return m && !m[w] && (m = _t(m)), y && !y[w] && (y = _t(y, t)), st(function(t, e, n, i) {
				var r, o, a, s = [],
					l = [],
					u = e.length,
					c = t || function(t, e, n) {
						for (var i = 0, r = e.length; i < r; i++) ot(t, e[i], n);
						return n
					}(p || "*", n.nodeType ? [n] : n, []),
					d = !f || !t && p ? c : bt(c, s, f, n, i),
					h = g ? y || (t ? f : u || m) ? [] : e : d;
				if (g && g(d, h, n, i), m)
					for (r = bt(h, l), m(r, [], n, i), o = r.length; o--;)(a = r[o]) && (h[l[o]] = !(d[l[o]] = a));
				if (t) {
					if (y || f) {
						if (y) {
							for (r = [], o = h.length; o--;)(a = h[o]) && r.push(d[o] = a);
							y(null, h = [], r, i)
						}
						for (o = h.length; o--;)(a = h[o]) && -1 < (r = y ? P(t, a) : s[o]) && (t[r] = !(e[r] = a))
					}
				} else h = bt(h === e ? h.splice(u, h.length) : h), y ? y(null, e, h, i) : I.apply(e, h)
			})
		}

		function Et(t) {
			for (var r, e, n, i = t.length, o = b.relative[t[0].type], a = o || b.relative[" "], s = o ? 1 : 0, l = vt(function(t) {
					return t === r
				}, a, !0), u = vt(function(t) {
					return -1 < P(r, t)
				}, a, !0), c = [function(t, e, n) {
					var i = !o && (n || e !== _) || ((r = e).nodeType ? l(t, e, n) : u(t, e, n));
					return r = null, i
				}]; s < i; s++)
				if (e = b.relative[t[s].type]) c = [vt(At(c), e)];
				else {
					if ((e = b.filter[t[s].type].apply(null, t[s].matches))[w]) {
						for (n = ++s; n < i && !b.relative[t[n].type]; n++);
						return _t(1 < s && At(c), 1 < s && yt(t.slice(0, s - 1).concat({
							value: " " === t[s - 2].type ? "*" : ""
						})).replace(K, "$1"), e, s < n && Et(t.slice(s, n)), n < i && Et(t = t.slice(n)), n < i && yt(t))
					}
					c.push(e)
				} return At(c)
		}
		return mt.prototype = b.filters = b.pseudos, b.setFilters = new mt, p = ot.tokenize = function(t, e) {
			var n, i, r, o, a, s, l, u = A[t + " "];
			if (u) return e ? 0 : u.slice(0);
			for (a = t, s = [], l = b.preFilter; a;) {
				for (o in n && !(i = G.exec(a)) || (i && (a = a.slice(i[0].length) || a), s.push(r = [])), n = !1, (i = H.exec(a)) && (n = i.shift(), r.push({
						value: n,
						type: i[0].replace(K, " ")
					}), a = a.slice(n.length)), b.filter) !(i = $[o].exec(a)) || l[o] && !(i = l[o](i)) || (n = i.shift(), r.push({
					value: n,
					type: o,
					matches: i
				}), a = a.slice(n.length));
				if (!n) break
			}
			return e ? a.length : a ? ot.error(t) : A(t, s).slice(0)
		}, d = ot.compile = function(t, e) {
			var n, m, y, v, A, i, r = [],
				o = [],
				a = L[t + " "];
			if (!a) {
				for (e || (e = p(t)), n = e.length; n--;)(a = Et(e[n]))[w] ? r.push(a) : o.push(a);
				(a = L(t, (m = o, v = 0 < (y = r).length, A = 0 < m.length, i = function(t, e, n, i, r) {
					var o, a, s, l = 0,
						u = "0",
						c = t && [],
						d = [],
						h = _,
						f = t || A && b.find.TAG("*", r),
						p = C += null == h ? 1 : Math.random() || .1,
						g = f.length;
					for (r && (_ = e === T || e || r); u !== g && null != (o = f[u]); u++) {
						if (A && o) {
							for (a = 0, e || o.ownerDocument === T || (E(o), n = !S); s = m[a++];)
								if (s(o, e || T, n)) {
									i.push(o);
									break
								} r && (C = p)
						}
						v && ((o = !s && o) && l--, t && c.push(o))
					}
					if (l += u, v && u !== l) {
						for (a = 0; s = y[a++];) s(c, d, e, n);
						if (t) {
							if (0 < l)
								for (; u--;) c[u] || d[u] || (d[u] = R.call(i));
							d = bt(d)
						}
						I.apply(i, d), r && !t && 0 < d.length && 1 < l + y.length && ot.uniqueSort(i)
					}
					return r && (C = p, _ = h), c
				}, v ? st(i) : i))).selector = t
			}
			return a
		}, g = ot.select = function(t, e, n, i) {
			var r, o, a, s, l, u = "function" == typeof t && t,
				c = !i && p(t = u.selector || t);
			if (n = n || [], 1 === c.length) {
				if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === e.nodeType && S && b.relative[o[1].type]) {
					if (!(e = (b.find.ID(a.matches[0].replace(J, tt), e) || [])[0])) return n;
					u && (e = e.parentNode), t = t.slice(o.shift().value.length)
				}
				for (r = $.needsContext.test(t) ? 0 : o.length; r-- && (a = o[r], !b.relative[s = a.type]);)
					if ((l = b.find[s]) && (i = l(a.matches[0].replace(J, tt), Z.test(o[0].type) && gt(e.parentNode) || e))) {
						if (o.splice(r, 1), !(t = i.length && yt(o))) return I.apply(n, i), n;
						break
					}
			}
			return (u || d(t, c))(i, e, !S, n, !e || Z.test(t) && gt(e.parentNode) || e), n
		}, f.sortStable = w.split("").sort(k).join("") === w, f.detectDuplicates = !!u, E(), f.sortDetached = lt(function(t) {
			return 1 & t.compareDocumentPosition(T.createElement("fieldset"))
		}), lt(function(t) {
			return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
		}) || ut("type|href|height|width", function(t, e, n) {
			if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
		}), f.attributes && lt(function(t) {
			return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
		}) || ut("value", function(t, e, n) {
			if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
		}), lt(function(t) {
			return null == t.getAttribute("disabled")
		}) || ut(M, function(t, e, n) {
			var i;
			if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
		}), ot
	}(T);
	w.find = p, w.expr = p.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = p.uniqueSort, w.text = p.getText, w.isXMLDoc = p.isXML, w.contains = p.contains, w.escapeSelector = p.escape;
	var E = function(t, e, n) {
			for (var i = [], r = void 0 !== n;
				(t = t[e]) && 9 !== t.nodeType;)
				if (1 === t.nodeType) {
					if (r && w(t).is(n)) break;
					i.push(t)
				} return i
		},
		C = function(t, e) {
			for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
			return n
		},
		L = w.expr.match.needsContext;

	function k(t, e) {
		return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
	}
	var x = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

	function R(t, n, i) {
		return v(n) ? w.grep(t, function(t, e) {
			return !!n.call(t, e, t) !== i
		}) : n.nodeType ? w.grep(t, function(t) {
			return t === n !== i
		}) : "string" != typeof n ? w.grep(t, function(t) {
			return -1 < r.call(n, t) !== i
		}) : w.filter(n, t, i)
	}
	w.filter = function(t, e, n) {
		var i = e[0];
		return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? w.find.matchesSelector(i, t) ? [i] : [] : w.find.matches(t, w.grep(e, function(t) {
			return 1 === t.nodeType
		}))
	}, w.fn.extend({
		find: function(t) {
			var e, n, i = this.length,
				r = this;
			if ("string" != typeof t) return this.pushStack(w(t).filter(function() {
				for (e = 0; e < i; e++)
					if (w.contains(r[e], this)) return !0
			}));
			for (n = this.pushStack([]), e = 0; e < i; e++) w.find(t, r[e], n);
			return 1 < i ? w.uniqueSort(n) : n
		},
		filter: function(t) {
			return this.pushStack(R(this, t || [], !1))
		},
		not: function(t) {
			return this.pushStack(R(this, t || [], !0))
		},
		is: function(t) {
			return !!R(this, "string" == typeof t && L.test(t) ? w(t) : t || [], !1).length
		}
	});
	var O, I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
	(w.fn.init = function(t, e, n) {
		var i, r;
		if (!t) return this;
		if (n = n || O, "string" == typeof t) {
			if (!(i = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : I.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
			if (i[1]) {
				if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : S, !0)), x.test(i[1]) && w.isPlainObject(e))
					for (i in e) v(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
				return this
			}
			return (r = S.getElementById(i[2])) && (this[0] = r, this.length = 1), this
		}
		return t.nodeType ? (this[0] = t, this.length = 1, this) : v(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this)
	}).prototype = w.fn, O = w(S);
	var D = /^(?:parents|prev(?:Until|All))/,
		P = {
			children: !0,
			contents: !0,
			next: !0,
			prev: !0
		};

	function M(t, e) {
		for (;
			(t = t[e]) && 1 !== t.nodeType;);
		return t
	}
	w.fn.extend({
		has: function(t) {
			var e = w(t, this),
				n = e.length;
			return this.filter(function() {
				for (var t = 0; t < n; t++)
					if (w.contains(this, e[t])) return !0
			})
		},
		closest: function(t, e) {
			var n, i = 0,
				r = this.length,
				o = [],
				a = "string" != typeof t && w(t);
			if (!L.test(t))
				for (; i < r; i++)
					for (n = this[i]; n && n !== e; n = n.parentNode)
						if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) {
							o.push(n);
							break
						} return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
		},
		index: function(t) {
			return t ? "string" == typeof t ? r.call(w(t), this[0]) : r.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
		},
		add: function(t, e) {
			return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e))))
		},
		addBack: function(t) {
			return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
		}
	}), w.each({
		parent: function(t) {
			var e = t.parentNode;
			return e && 11 !== e.nodeType ? e : null
		},
		parents: function(t) {
			return E(t, "parentNode")
		},
		parentsUntil: function(t, e, n) {
			return E(t, "parentNode", n)
		},
		next: function(t) {
			return M(t, "nextSibling")
		},
		prev: function(t) {
			return M(t, "previousSibling")
		},
		nextAll: function(t) {
			return E(t, "nextSibling")
		},
		prevAll: function(t) {
			return E(t, "previousSibling")
		},
		nextUntil: function(t, e, n) {
			return E(t, "nextSibling", n)
		},
		prevUntil: function(t, e, n) {
			return E(t, "previousSibling", n)
		},
		siblings: function(t) {
			return C((t.parentNode || {}).firstChild, t)
		},
		children: function(t) {
			return C(t.firstChild)
		},
		contents: function(t) {
			return k(t, "iframe") ? t.contentDocument : (k(t, "template") && (t = t.content || t), w.merge([], t.childNodes))
		}
	}, function(i, r) {
		w.fn[i] = function(t, e) {
			var n = w.map(this, r, t);
			return "Until" !== i.slice(-5) && (e = t), e && "string" == typeof e && (n = w.filter(e, n)), 1 < this.length && (P[i] || w.uniqueSort(n), D.test(i) && n.reverse()), this.pushStack(n)
		}
	});
	var N = /[^\x20\t\r\n\f]+/g;

	function F(t) {
		return t
	}

	function B(t) {
		throw t
	}

	function U(t, e, n, i) {
		var r;
		try {
			t && v(r = t.promise) ? r.call(t).done(e).fail(n) : t && v(r = t.then) ? r.call(t, e, n) : e.apply(void 0, [t].slice(i))
		} catch (t) {
			n.apply(void 0, [t])
		}
	}
	w.Callbacks = function(i) {
		var t, n;
		i = "string" == typeof i ? (t = i, n = {}, w.each(t.match(N) || [], function(t, e) {
			n[e] = !0
		}), n) : w.extend({}, i);
		var r, e, o, a, s = [],
			l = [],
			u = -1,
			c = function() {
				for (a = a || i.once, o = r = !0; l.length; u = -1)
					for (e = l.shift(); ++u < s.length;) !1 === s[u].apply(e[0], e[1]) && i.stopOnFalse && (u = s.length, e = !1);
				i.memory || (e = !1), r = !1, a && (s = e ? [] : "")
			},
			d = {
				add: function() {
					return s && (e && !r && (u = s.length - 1, l.push(e)), function n(t) {
						w.each(t, function(t, e) {
							v(e) ? i.unique && d.has(e) || s.push(e) : e && e.length && "string" !== _(e) && n(e)
						})
					}(arguments), e && !r && c()), this
				},
				remove: function() {
					return w.each(arguments, function(t, e) {
						for (var n; - 1 < (n = w.inArray(e, s, n));) s.splice(n, 1), n <= u && u--
					}), this
				},
				has: function(t) {
					return t ? -1 < w.inArray(t, s) : 0 < s.length
				},
				empty: function() {
					return s && (s = []), this
				},
				disable: function() {
					return a = l = [], s = e = "", this
				},
				disabled: function() {
					return !s
				},
				lock: function() {
					return a = l = [], e || r || (s = e = ""), this
				},
				locked: function() {
					return !!a
				},
				fireWith: function(t, e) {
					return a || (e = [t, (e = e || []).slice ? e.slice() : e], l.push(e), r || c()), this
				},
				fire: function() {
					return d.fireWith(this, arguments), this
				},
				fired: function() {
					return !!o
				}
			};
		return d
	}, w.extend({
		Deferred: function(t) {
			var o = [
					["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
					["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
					["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
				],
				r = "pending",
				a = {
					state: function() {
						return r
					},
					always: function() {
						return s.done(arguments).fail(arguments), this
					},
					catch: function(t) {
						return a.then(null, t)
					},
					pipe: function() {
						var r = arguments;
						return w.Deferred(function(i) {
							w.each(o, function(t, e) {
								var n = v(r[e[4]]) && r[e[4]];
								s[e[1]](function() {
									var t = n && n.apply(this, arguments);
									t && v(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[e[0] + "With"](this, n ? [t] : arguments)
								})
							}), r = null
						}).promise()
					},
					then: function(e, n, i) {
						var l = 0;

						function u(r, o, a, s) {
							return function() {
								var n = this,
									i = arguments,
									t = function() {
										var t, e;
										if (!(r < l)) {
											if ((t = a.apply(n, i)) === o.promise()) throw new TypeError("Thenable self-resolution");
											e = t && ("object" == typeof t || "function" == typeof t) && t.then, v(e) ? s ? e.call(t, u(l, o, F, s), u(l, o, B, s)) : (l++, e.call(t, u(l, o, F, s), u(l, o, B, s), u(l, o, F, o.notifyWith))) : (a !== F && (n = void 0, i = [t]), (s || o.resolveWith)(n, i))
										}
									},
									e = s ? t : function() {
										try {
											t()
										} catch (t) {
											w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, e.stackTrace), l <= r + 1 && (a !== B && (n = void 0, i = [t]), o.rejectWith(n, i))
										}
									};
								r ? e() : (w.Deferred.getStackHook && (e.stackTrace = w.Deferred.getStackHook()), T.setTimeout(e))
							}
						}
						return w.Deferred(function(t) {
							o[0][3].add(u(0, t, v(i) ? i : F, t.notifyWith)), o[1][3].add(u(0, t, v(e) ? e : F)), o[2][3].add(u(0, t, v(n) ? n : B))
						}).promise()
					},
					promise: function(t) {
						return null != t ? w.extend(t, a) : a
					}
				},
				s = {};
			return w.each(o, function(t, e) {
				var n = e[2],
					i = e[5];
				a[e[1]] = n.add, i && n.add(function() {
					r = i
				}, o[3 - t][2].disable, o[3 - t][3].disable, o[0][2].lock, o[0][3].lock), n.add(e[3].fire), s[e[0]] = function() {
					return s[e[0] + "With"](this === s ? void 0 : this, arguments), this
				}, s[e[0] + "With"] = n.fireWith
			}), a.promise(s), t && t.call(s, s), s
		},
		when: function(t) {
			var n = arguments.length,
				e = n,
				i = Array(e),
				r = s.call(arguments),
				o = w.Deferred(),
				a = function(e) {
					return function(t) {
						i[e] = this, r[e] = 1 < arguments.length ? s.call(arguments) : t, --n || o.resolveWith(i, r)
					}
				};
			if (n <= 1 && (U(t, o.done(a(e)).resolve, o.reject, !n), "pending" === o.state() || v(r[e] && r[e].then))) return o.then();
			for (; e--;) U(r[e], a(e), o.reject);
			return o.promise()
		}
	});
	var j = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
	w.Deferred.exceptionHook = function(t, e) {
		T.console && T.console.warn && t && j.test(t.name) && T.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
	}, w.readyException = function(t) {
		T.setTimeout(function() {
			throw t
		})
	};
	var K = w.Deferred();

	function G() {
		S.removeEventListener("DOMContentLoaded", G), T.removeEventListener("load", G), w.ready()
	}
	w.fn.ready = function(t) {
		return K.then(t).catch(function(t) {
			w.readyException(t)
		}), this
	}, w.extend({
		isReady: !1,
		readyWait: 1,
		ready: function(t) {
			(!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || K.resolveWith(S, [w])
		}
	}), w.ready.then = K.then, "complete" === S.readyState || "loading" !== S.readyState && !S.documentElement.doScroll ? T.setTimeout(w.ready) : (S.addEventListener("DOMContentLoaded", G), T.addEventListener("load", G));
	var H = function(t, e, n, i, r, o, a) {
			var s = 0,
				l = t.length,
				u = null == n;
			if ("object" === _(n))
				for (s in r = !0, n) H(t, e, s, n[s], !0, o, a);
			else if (void 0 !== i && (r = !0, v(i) || (a = !0), u && (a ? (e.call(t, i), e = null) : (u = e, e = function(t, e, n) {
					return u.call(w(t), n)
				})), e))
				for (; s < l; s++) e(t[s], n, a ? i : i.call(t[s], s, e(t[s], n)));
			return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
		},
		Y = /^-ms-/,
		V = /-([a-z])/g;

	function z(t, e) {
		return e.toUpperCase()
	}

	function $(t) {
		return t.replace(Y, "ms-").replace(V, z)
	}
	var W = function(t) {
		return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
	};

	function q() {
		this.expando = w.expando + q.uid++
	}
	q.uid = 1, q.prototype = {
		cache: function(t) {
			var e = t[this.expando];
			return e || (e = {}, W(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
				value: e,
				configurable: !0
			}))), e
		},
		set: function(t, e, n) {
			var i, r = this.cache(t);
			if ("string" == typeof e) r[$(e)] = n;
			else
				for (i in e) r[$(i)] = e[i];
			return r
		},
		get: function(t, e) {
			return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][$(e)]
		},
		access: function(t, e, n) {
			return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
		},
		remove: function(t, e) {
			var n, i = t[this.expando];
			if (void 0 !== i) {
				if (void 0 !== e) {
					n = (e = Array.isArray(e) ? e.map($) : (e = $(e)) in i ? [e] : e.match(N) || []).length;
					for (; n--;) delete i[e[n]]
				}(void 0 === e || w.isEmptyObject(i)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
			}
		},
		hasData: function(t) {
			var e = t[this.expando];
			return void 0 !== e && !w.isEmptyObject(e)
		}
	};
	var X = new q,
		Q = new q,
		Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		J = /[A-Z]/g;

	function tt(t, e, n) {
		var i, r;
		if (void 0 === n && 1 === t.nodeType)
			if (i = "data-" + e.replace(J, "-$&").toLowerCase(), "string" == typeof(n = t.getAttribute(i))) {
				try {
					n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Z.test(r) ? JSON.parse(r) : r)
				} catch (t) {}
				Q.set(t, e, n)
			} else n = void 0;
		return n
	}
	w.extend({
		hasData: function(t) {
			return Q.hasData(t) || X.hasData(t)
		},
		data: function(t, e, n) {
			return Q.access(t, e, n)
		},
		removeData: function(t, e) {
			Q.remove(t, e)
		},
		_data: function(t, e, n) {
			return X.access(t, e, n)
		},
		_removeData: function(t, e) {
			X.remove(t, e)
		}
	}), w.fn.extend({
		data: function(n, t) {
			var e, i, r, o = this[0],
				a = o && o.attributes;
			if (void 0 === n) {
				if (this.length && (r = Q.get(o), 1 === o.nodeType && !X.get(o, "hasDataAttrs"))) {
					for (e = a.length; e--;) a[e] && 0 === (i = a[e].name).indexOf("data-") && (i = $(i.slice(5)), tt(o, i, r[i]));
					X.set(o, "hasDataAttrs", !0)
				}
				return r
			}
			return "object" == typeof n ? this.each(function() {
				Q.set(this, n)
			}) : H(this, function(t) {
				var e;
				if (o && void 0 === t) return void 0 !== (e = Q.get(o, n)) ? e : void 0 !== (e = tt(o, n)) ? e : void 0;
				this.each(function() {
					Q.set(this, n, t)
				})
			}, null, t, 1 < arguments.length, null, !0)
		},
		removeData: function(t) {
			return this.each(function() {
				Q.remove(this, t)
			})
		}
	}), w.extend({
		queue: function(t, e, n) {
			var i;
			if (t) return e = (e || "fx") + "queue", i = X.get(t, e), n && (!i || Array.isArray(n) ? i = X.access(t, e, w.makeArray(n)) : i.push(n)), i || []
		},
		dequeue: function(t, e) {
			e = e || "fx";
			var n = w.queue(t, e),
				i = n.length,
				r = n.shift(),
				o = w._queueHooks(t, e);
			"inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, function() {
				w.dequeue(t, e)
			}, o)), !i && o && o.empty.fire()
		},
		_queueHooks: function(t, e) {
			var n = e + "queueHooks";
			return X.get(t, n) || X.access(t, n, {
				empty: w.Callbacks("once memory").add(function() {
					X.remove(t, [e + "queue", n])
				})
			})
		}
	}), w.fn.extend({
		queue: function(e, n) {
			var t = 2;
			return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? w.queue(this[0], e) : void 0 === n ? this : this.each(function() {
				var t = w.queue(this, e, n);
				w._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e)
			})
		},
		dequeue: function(t) {
			return this.each(function() {
				w.dequeue(this, t)
			})
		},
		clearQueue: function(t) {
			return this.queue(t || "fx", [])
		},
		promise: function(t, e) {
			var n, i = 1,
				r = w.Deferred(),
				o = this,
				a = this.length,
				s = function() {
					--i || r.resolveWith(o, [o])
				};
			for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)(n = X.get(o[a], t + "queueHooks")) && n.empty && (i++, n.empty.add(s));
			return s(), r.promise(e)
		}
	});
	var et = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
		nt = new RegExp("^(?:([+-])=|)(" + et + ")([a-z%]*)$", "i"),
		it = ["Top", "Right", "Bottom", "Left"],
		rt = function(t, e) {
			return "none" === (t = e || t).style.display || "" === t.style.display && w.contains(t.ownerDocument, t) && "none" === w.css(t, "display")
		},
		ot = function(t, e, n, i) {
			var r, o, a = {};
			for (o in e) a[o] = t.style[o], t.style[o] = e[o];
			for (o in r = n.apply(t, i || []), e) t.style[o] = a[o];
			return r
		};

	function at(t, e, n, i) {
		var r, o, a = 20,
			s = i ? function() {
				return i.cur()
			} : function() {
				return w.css(t, e, "")
			},
			l = s(),
			u = n && n[3] || (w.cssNumber[e] ? "" : "px"),
			c = (w.cssNumber[e] || "px" !== u && +l) && nt.exec(w.css(t, e));
		if (c && c[3] !== u) {
			for (l /= 2, u = u || c[3], c = +l || 1; a--;) w.style(t, e, c + u), (1 - o) * (1 - (o = s() / l || .5)) <= 0 && (a = 0), c /= o;
			c *= 2, w.style(t, e, c + u), n = n || []
		}
		return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
	}
	var st = {};

	function lt(t, e) {
		for (var n, i, r, o, a, s, l, u = [], c = 0, d = t.length; c < d; c++)(i = t[c]).style && (n = i.style.display, e ? ("none" === n && (u[c] = X.get(i, "display") || null, u[c] || (i.style.display = "")), "" === i.style.display && rt(i) && (u[c] = (l = a = o = void 0, a = (r = i).ownerDocument, s = r.nodeName, (l = st[s]) || (o = a.body.appendChild(a.createElement(s)), l = w.css(o, "display"), o.parentNode.removeChild(o), "none" === l && (l = "block"), st[s] = l)))) : "none" !== n && (u[c] = "none", X.set(i, "display", n)));
		for (c = 0; c < d; c++) null != u[c] && (t[c].style.display = u[c]);
		return t
	}
	w.fn.extend({
		show: function() {
			return lt(this, !0)
		},
		hide: function() {
			return lt(this)
		},
		toggle: function(t) {
			return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
				rt(this) ? w(this).show() : w(this).hide()
			})
		}
	});
	var ut = /^(?:checkbox|radio)$/i,
		ct = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
		dt = /^$|^module$|\/(?:java|ecma)script/i,
		ht = {
			option: [1, "<select multiple='multiple'>", "</select>"],
			thead: [1, "<table>", "</table>"],
			col: [2, "<table><colgroup>", "</colgroup></table>"],
			tr: [2, "<table><tbody>", "</tbody></table>"],
			td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			_default: [0, "", ""]
		};

	function ft(t, e) {
		var n;
		return n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && k(t, e) ? w.merge([t], n) : n
	}

	function pt(t, e) {
		for (var n = 0, i = t.length; n < i; n++) X.set(t[n], "globalEval", !e || X.get(e[n], "globalEval"))
	}
	ht.optgroup = ht.option, ht.tbody = ht.tfoot = ht.colgroup = ht.caption = ht.thead, ht.th = ht.td;
	var gt, mt, yt = /<|&#?\w+;/;

	function vt(t, e, n, i, r) {
		for (var o, a, s, l, u, c, d = e.createDocumentFragment(), h = [], f = 0, p = t.length; f < p; f++)
			if ((o = t[f]) || 0 === o)
				if ("object" === _(o)) w.merge(h, o.nodeType ? [o] : o);
				else if (yt.test(o)) {
			for (a = a || d.appendChild(e.createElement("div")), s = (ct.exec(o) || ["", ""])[1].toLowerCase(), l = ht[s] || ht._default, a.innerHTML = l[1] + w.htmlPrefilter(o) + l[2], c = l[0]; c--;) a = a.lastChild;
			w.merge(h, a.childNodes), (a = d.firstChild).textContent = ""
		} else h.push(e.createTextNode(o));
		for (d.textContent = "", f = 0; o = h[f++];)
			if (i && -1 < w.inArray(o, i)) r && r.push(o);
			else if (u = w.contains(o.ownerDocument, o), a = ft(d.appendChild(o), "script"), u && pt(a), n)
			for (c = 0; o = a[c++];) dt.test(o.type || "") && n.push(o);
		return d
	}
	gt = S.createDocumentFragment().appendChild(S.createElement("div")), (mt = S.createElement("input")).setAttribute("type", "radio"), mt.setAttribute("checked", "checked"), mt.setAttribute("name", "t"), gt.appendChild(mt), y.checkClone = gt.cloneNode(!0).cloneNode(!0).lastChild.checked, gt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!gt.cloneNode(!0).lastChild.defaultValue;
	var At = S.documentElement,
		bt = /^key/,
		_t = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		Et = /^([^.]*)(?:\.(.+)|)/;

	function Tt() {
		return !0
	}

	function St() {
		return !1
	}

	function wt() {
		try {
			return S.activeElement
		} catch (t) {}
	}

	function Ct(t, e, n, i, r, o) {
		var a, s;
		if ("object" == typeof e) {
			for (s in "string" != typeof n && (i = i || n, n = void 0), e) Ct(t, s, n, i, e[s], o);
			return t
		}
		if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = St;
		else if (!r) return t;
		return 1 === o && (a = r, (r = function(t) {
			return w().off(t), a.apply(this, arguments)
		}).guid = a.guid || (a.guid = w.guid++)), t.each(function() {
			w.event.add(this, e, r, i, n)
		})
	}
	w.event = {
		global: {},
		add: function(e, t, n, i, r) {
			var o, a, s, l, u, c, d, h, f, p, g, m = X.get(e);
			if (m)
				for (n.handler && (n = (o = n).handler, r = o.selector), r && w.find.matchesSelector(At, r), n.guid || (n.guid = w.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function(t) {
						return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0
					}), u = (t = (t || "").match(N) || [""]).length; u--;) f = g = (s = Et.exec(t[u]) || [])[1], p = (s[2] || "").split(".").sort(), f && (d = w.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = w.event.special[f] || {}, c = w.extend({
					type: f,
					origType: g,
					data: i,
					handler: n,
					guid: n.guid,
					selector: r,
					needsContext: r && w.expr.match.needsContext.test(r),
					namespace: p.join(".")
				}, o), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, i, p, a) || e.addEventListener && e.addEventListener(f, a)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, c) : h.push(c), w.event.global[f] = !0)
		},
		remove: function(t, e, n, i, r) {
			var o, a, s, l, u, c, d, h, f, p, g, m = X.hasData(t) && X.get(t);
			if (m && (l = m.events)) {
				for (u = (e = (e || "").match(N) || [""]).length; u--;)
					if (f = g = (s = Et.exec(e[u]) || [])[1], p = (s[2] || "").split(".").sort(), f) {
						for (d = w.event.special[f] || {}, h = l[f = (i ? d.delegateType : d.bindType) || f] || [], s = s[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = h.length; o--;) c = h[o], !r && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1), c.selector && h.delegateCount--, d.remove && d.remove.call(t, c));
						a && !h.length && (d.teardown && !1 !== d.teardown.call(t, p, m.handle) || w.removeEvent(t, f, m.handle), delete l[f])
					} else
						for (f in l) w.event.remove(t, f + e[u], n, i, !0);
				w.isEmptyObject(l) && X.remove(t, "handle events")
			}
		},
		dispatch: function(t) {
			var e, n, i, r, o, a, s = w.event.fix(t),
				l = new Array(arguments.length),
				u = (X.get(this, "events") || {})[s.type] || [],
				c = w.event.special[s.type] || {};
			for (l[0] = s, e = 1; e < arguments.length; e++) l[e] = arguments[e];
			if (s.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, s)) {
				for (a = w.event.handlers.call(this, s, u), e = 0;
					(r = a[e++]) && !s.isPropagationStopped();)
					for (s.currentTarget = r.elem, n = 0;
						(o = r.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (i = ((w.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l)) && !1 === (s.result = i) && (s.preventDefault(), s.stopPropagation()));
				return c.postDispatch && c.postDispatch.call(this, s), s.result
			}
		},
		handlers: function(t, e) {
			var n, i, r, o, a, s = [],
				l = e.delegateCount,
				u = t.target;
			if (l && u.nodeType && !("click" === t.type && 1 <= t.button))
				for (; u !== this; u = u.parentNode || this)
					if (1 === u.nodeType && ("click" !== t.type || !0 !== u.disabled)) {
						for (o = [], a = {}, n = 0; n < l; n++) void 0 === a[r = (i = e[n]).selector + " "] && (a[r] = i.needsContext ? -1 < w(r, this).index(u) : w.find(r, this, null, [u]).length), a[r] && o.push(i);
						o.length && s.push({
							elem: u,
							handlers: o
						})
					} return u = this, l < e.length && s.push({
				elem: u,
				handlers: e.slice(l)
			}), s
		},
		addProp: function(e, t) {
			Object.defineProperty(w.Event.prototype, e, {
				enumerable: !0,
				configurable: !0,
				get: v(t) ? function() {
					if (this.originalEvent) return t(this.originalEvent)
				} : function() {
					if (this.originalEvent) return this.originalEvent[e]
				},
				set: function(t) {
					Object.defineProperty(this, e, {
						enumerable: !0,
						configurable: !0,
						writable: !0,
						value: t
					})
				}
			})
		},
		fix: function(t) {
			return t[w.expando] ? t : new w.Event(t)
		},
		special: {
			load: {
				noBubble: !0
			},
			focus: {
				trigger: function() {
					if (this !== wt() && this.focus) return this.focus(), !1
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if (this === wt() && this.blur) return this.blur(), !1
				},
				delegateType: "focusout"
			},
			click: {
				trigger: function() {
					if ("checkbox" === this.type && this.click && k(this, "input")) return this.click(), !1
				},
				_default: function(t) {
					return k(t.target, "a")
				}
			},
			beforeunload: {
				postDispatch: function(t) {
					void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
				}
			}
		}
	}, w.removeEvent = function(t, e, n) {
		t.removeEventListener && t.removeEventListener(e, n)
	}, w.Event = function(t, e) {
		if (!(this instanceof w.Event)) return new w.Event(t, e);
		t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? Tt : St, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || Date.now(), this[w.expando] = !0
	}, w.Event.prototype = {
		constructor: w.Event,
		isDefaultPrevented: St,
		isPropagationStopped: St,
		isImmediatePropagationStopped: St,
		isSimulated: !1,
		preventDefault: function() {
			var t = this.originalEvent;
			this.isDefaultPrevented = Tt, t && !this.isSimulated && t.preventDefault()
		},
		stopPropagation: function() {
			var t = this.originalEvent;
			this.isPropagationStopped = Tt, t && !this.isSimulated && t.stopPropagation()
		},
		stopImmediatePropagation: function() {
			var t = this.originalEvent;
			this.isImmediatePropagationStopped = Tt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
		}
	}, w.each({
		altKey: !0,
		bubbles: !0,
		cancelable: !0,
		changedTouches: !0,
		ctrlKey: !0,
		detail: !0,
		eventPhase: !0,
		metaKey: !0,
		pageX: !0,
		pageY: !0,
		shiftKey: !0,
		view: !0,
		char: !0,
		charCode: !0,
		key: !0,
		keyCode: !0,
		button: !0,
		buttons: !0,
		clientX: !0,
		clientY: !0,
		offsetX: !0,
		offsetY: !0,
		pointerId: !0,
		pointerType: !0,
		screenX: !0,
		screenY: !0,
		targetTouches: !0,
		toElement: !0,
		touches: !0,
		which: function(t) {
			var e = t.button;
			return null == t.which && bt.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && _t.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
		}
	}, w.event.addProp), w.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function(t, r) {
		w.event.special[t] = {
			delegateType: r,
			bindType: r,
			handle: function(t) {
				var e, n = t.relatedTarget,
					i = t.handleObj;
				return n && (n === this || w.contains(this, n)) || (t.type = i.origType, e = i.handler.apply(this, arguments), t.type = r), e
			}
		}
	}), w.fn.extend({
		on: function(t, e, n, i) {
			return Ct(this, t, e, n, i)
		},
		one: function(t, e, n, i) {
			return Ct(this, t, e, n, i, 1)
		},
		off: function(t, e, n) {
			var i, r;
			if (t && t.preventDefault && t.handleObj) return i = t.handleObj, w(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
			if ("object" == typeof t) {
				for (r in t) this.off(r, e, t[r]);
				return this
			}
			return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = St), this.each(function() {
				w.event.remove(this, t, n, e)
			})
		}
	});
	var Lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
		kt = /<script|<style|<link/i,
		xt = /checked\s*(?:[^=]|=\s*.checked.)/i,
		Rt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function Ot(t, e) {
		return k(t, "table") && k(11 !== e.nodeType ? e : e.firstChild, "tr") && w(t).children("tbody")[0] || t
	}

	function It(t) {
		return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
	}

	function Dt(t) {
		return "true/" === (t.type || "").slice(0, 5) ? t.type = t.type.slice(5) : t.removeAttribute("type"), t
	}

	function Pt(t, e) {
		var n, i, r, o, a, s, l, u;
		if (1 === e.nodeType) {
			if (X.hasData(t) && (o = X.access(t), a = X.set(e, o), u = o.events))
				for (r in delete a.handle, a.events = {}, u)
					for (n = 0, i = u[r].length; n < i; n++) w.event.add(e, r, u[r][n]);
			Q.hasData(t) && (s = Q.access(t), l = w.extend({}, s), Q.set(e, l))
		}
	}

	function Mt(n, i, r, o) {
		i = g.apply([], i);
		var t, e, a, s, l, u, c = 0,
			d = n.length,
			h = d - 1,
			f = i[0],
			p = v(f);
		if (p || 1 < d && "string" == typeof f && !y.checkClone && xt.test(f)) return n.each(function(t) {
			var e = n.eq(t);
			p && (i[0] = f.call(this, t, e.html())), Mt(e, i, r, o)
		});
		if (d && (e = (t = vt(i, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
			for (s = (a = w.map(ft(t, "script"), It)).length; c < d; c++) l = t, c !== h && (l = w.clone(l, !0, !0), s && w.merge(a, ft(l, "script"))), r.call(n[c], l, c);
			if (s)
				for (u = a[a.length - 1].ownerDocument, w.map(a, Dt), c = 0; c < s; c++) l = a[c], dt.test(l.type || "") && !X.access(l, "globalEval") && w.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? w._evalUrl && w._evalUrl(l.src) : b(l.textContent.replace(Rt, ""), u, l))
		}
		return n
	}

	function Nt(t, e, n) {
		for (var i, r = e ? w.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || w.cleanData(ft(i)), i.parentNode && (n && w.contains(i.ownerDocument, i) && pt(ft(i, "script")), i.parentNode.removeChild(i));
		return t
	}
	w.extend({
		htmlPrefilter: function(t) {
			return t.replace(Lt, "<$1></$2>")
		},
		clone: function(t, e, n) {
			var i, r, o, a, s, l, u, c = t.cloneNode(!0),
				d = w.contains(t.ownerDocument, t);
			if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
				for (a = ft(c), i = 0, r = (o = ft(t)).length; i < r; i++) s = o[i], l = a[i], void 0, "input" === (u = l.nodeName.toLowerCase()) && ut.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
			if (e)
				if (n)
					for (o = o || ft(t), a = a || ft(c), i = 0, r = o.length; i < r; i++) Pt(o[i], a[i]);
				else Pt(t, c);
			return 0 < (a = ft(c, "script")).length && pt(a, !d && ft(t, "script")), c
		},
		cleanData: function(t) {
			for (var e, n, i, r = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
				if (W(n)) {
					if (e = n[X.expando]) {
						if (e.events)
							for (i in e.events) r[i] ? w.event.remove(n, i) : w.removeEvent(n, i, e.handle);
						n[X.expando] = void 0
					}
					n[Q.expando] && (n[Q.expando] = void 0)
				}
		}
	}), w.fn.extend({
		detach: function(t) {
			return Nt(this, t, !0)
		},
		remove: function(t) {
			return Nt(this, t)
		},
		text: function(t) {
			return H(this, function(t) {
				return void 0 === t ? w.text(this) : this.empty().each(function() {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
				})
			}, null, t, arguments.length)
		},
		append: function() {
			return Mt(this, arguments, function(t) {
				1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ot(this, t).appendChild(t)
			})
		},
		prepend: function() {
			return Mt(this, arguments, function(t) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var e = Ot(this, t);
					e.insertBefore(t, e.firstChild)
				}
			})
		},
		before: function() {
			return Mt(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this)
			})
		},
		after: function() {
			return Mt(this, arguments, function(t) {
				this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
			})
		},
		empty: function() {
			for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(ft(t, !1)), t.textContent = "");
			return this
		},
		clone: function(t, e) {
			return t = null != t && t, e = null == e ? t : e, this.map(function() {
				return w.clone(this, t, e)
			})
		},
		html: function(t) {
			return H(this, function(t) {
				var e = this[0] || {},
					n = 0,
					i = this.length;
				if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
				if ("string" == typeof t && !kt.test(t) && !ht[(ct.exec(t) || ["", ""])[1].toLowerCase()]) {
					t = w.htmlPrefilter(t);
					try {
						for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(ft(e, !1)), e.innerHTML = t);
						e = 0
					} catch (t) {}
				}
				e && this.empty().append(t)
			}, null, t, arguments.length)
		},
		replaceWith: function() {
			var n = [];
			return Mt(this, arguments, function(t) {
				var e = this.parentNode;
				w.inArray(this, n) < 0 && (w.cleanData(ft(this)), e && e.replaceChild(t, this))
			}, n)
		}
	}), w.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function(t, a) {
		w.fn[t] = function(t) {
			for (var e, n = [], i = w(t), r = i.length - 1, o = 0; o <= r; o++) e = o === r ? this : this.clone(!0), w(i[o])[a](e), l.apply(n, e.get());
			return this.pushStack(n)
		}
	});
	var Ft = new RegExp("^(" + et + ")(?!px)[a-z%]+$", "i"),
		Bt = function(t) {
			var e = t.ownerDocument.defaultView;
			return e && e.opener || (e = T), e.getComputedStyle(t)
		},
		Ut = new RegExp(it.join("|"), "i");

	function jt(t, e, n) {
		var i, r, o, a, s = t.style;
		return (n = n || Bt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || w.contains(t.ownerDocument, t) || (a = w.style(t, e)), !y.pixelBoxStyles() && Ft.test(a) && Ut.test(e) && (i = s.width, r = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = i, s.minWidth = r, s.maxWidth = o)), void 0 !== a ? a + "" : a
	}

	function Kt(t, e) {
		return {
			get: function() {
				if (!t()) return (this.get = e).apply(this, arguments);
				delete this.get
			}
		}
	}! function() {
		function t() {
			if (l) {
				s.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", At.appendChild(s).appendChild(l);
				var t = T.getComputedStyle(l);
				n = "1%" !== t.top, a = 12 === e(t.marginLeft), l.style.right = "60%", o = 36 === e(t.right), i = 36 === e(t.width), l.style.position = "absolute", r = 36 === l.offsetWidth || "absolute", At.removeChild(s), l = null
			}
		}

		function e(t) {
			return Math.round(parseFloat(t))
		}
		var n, i, r, o, a, s = S.createElement("div"),
			l = S.createElement("div");
		l.style && (l.style.backgroundClip = "content-box", l.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === l.style.backgroundClip, w.extend(y, {
			boxSizingReliable: function() {
				return t(), i
			},
			pixelBoxStyles: function() {
				return t(), o
			},
			pixelPosition: function() {
				return t(), n
			},
			reliableMarginLeft: function() {
				return t(), a
			},
			scrollboxSize: function() {
				return t(), r
			}
		}))
	}();
	var Gt = /^(none|table(?!-c[ea]).+)/,
		Ht = /^--/,
		Yt = {
			position: "absolute",
			visibility: "hidden",
			display: "block"
		},
		Vt = {
			letterSpacing: "0",
			fontWeight: "400"
		},
		zt = ["Webkit", "Moz", "ms"],
		$t = S.createElement("div").style;

	function Wt(t) {
		var e = w.cssProps[t];
		return e || (e = w.cssProps[t] = function(t) {
			if (t in $t) return t;
			for (var e = t[0].toUpperCase() + t.slice(1), n = zt.length; n--;)
				if ((t = zt[n] + e) in $t) return t
		}(t) || t), e
	}

	function qt(t, e, n) {
		var i = nt.exec(e);
		return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : e
	}

	function Xt(t, e, n, i, r, o) {
		var a = "width" === e ? 1 : 0,
			s = 0,
			l = 0;
		if (n === (i ? "border" : "content")) return 0;
		for (; a < 4; a += 2) "margin" === n && (l += w.css(t, n + it[a], !0, r)), i ? ("content" === n && (l -= w.css(t, "padding" + it[a], !0, r)), "margin" !== n && (l -= w.css(t, "border" + it[a] + "Width", !0, r))) : (l += w.css(t, "padding" + it[a], !0, r), "padding" !== n ? l += w.css(t, "border" + it[a] + "Width", !0, r) : s += w.css(t, "border" + it[a] + "Width", !0, r));
		return !i && 0 <= o && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - o - l - s - .5))), l
	}

	function Qt(t, e, n) {
		var i = Bt(t),
			r = jt(t, e, i),
			o = "border-box" === w.css(t, "boxSizing", !1, i),
			a = o;
		if (Ft.test(r)) {
			if (!n) return r;
			r = "auto"
		}
		return a = a && (y.boxSizingReliable() || r === t.style[e]), ("auto" === r || !parseFloat(r) && "inline" === w.css(t, "display", !1, i)) && (r = t["offset" + e[0].toUpperCase() + e.slice(1)], a = !0), (r = parseFloat(r) || 0) + Xt(t, e, n || (o ? "border" : "content"), a, i, r) + "px"
	}

	function Zt(t, e, n, i, r) {
		return new Zt.prototype.init(t, e, n, i, r)
	}
	w.extend({
		cssHooks: {
			opacity: {
				get: function(t, e) {
					if (e) {
						var n = jt(t, "opacity");
						return "" === n ? "1" : n
					}
				}
			}
		},
		cssNumber: {
			animationIterationCount: !0,
			columnCount: !0,
			fillOpacity: !0,
			flexGrow: !0,
			flexShrink: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: {},
		style: function(t, e, n, i) {
			if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
				var r, o, a, s = $(e),
					l = Ht.test(e),
					u = t.style;
				if (l || (e = Wt(s)), a = w.cssHooks[e] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (r = a.get(t, !1, i)) ? r : u[e];
				"string" === (o = typeof n) && (r = nt.exec(n)) && r[1] && (n = at(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (w.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, i)) || (l ? u.setProperty(e, n) : u[e] = n))
			}
		},
		css: function(t, e, n, i) {
			var r, o, a, s = $(e);
			return Ht.test(e) || (e = Wt(s)), (a = w.cssHooks[e] || w.cssHooks[s]) && "get" in a && (r = a.get(t, !0, n)), void 0 === r && (r = jt(t, e, i)), "normal" === r && e in Vt && (r = Vt[e]), "" === n || n ? (o = parseFloat(r), !0 === n || isFinite(o) ? o || 0 : r) : r
		}
	}), w.each(["height", "width"], function(t, s) {
		w.cssHooks[s] = {
			get: function(t, e, n) {
				if (e) return !Gt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? Qt(t, s, n) : ot(t, Yt, function() {
					return Qt(t, s, n)
				})
			},
			set: function(t, e, n) {
				var i, r = Bt(t),
					o = "border-box" === w.css(t, "boxSizing", !1, r),
					a = n && Xt(t, s, n, o, r);
				return o && y.scrollboxSize() === r.position && (a -= Math.ceil(t["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - Xt(t, s, "border", !1, r) - .5)), a && (i = nt.exec(e)) && "px" !== (i[3] || "px") && (t.style[s] = e, e = w.css(t, s)), qt(0, e, a)
			}
		}
	}), w.cssHooks.marginLeft = Kt(y.reliableMarginLeft, function(t, e) {
		if (e) return (parseFloat(jt(t, "marginLeft")) || t.getBoundingClientRect().left - ot(t, {
			marginLeft: 0
		}, function() {
			return t.getBoundingClientRect().left
		})) + "px"
	}), w.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function(r, o) {
		w.cssHooks[r + o] = {
			expand: function(t) {
				for (var e = 0, n = {}, i = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[r + it[e] + o] = i[e] || i[e - 2] || i[0];
				return n
			}
		}, "margin" !== r && (w.cssHooks[r + o].set = qt)
	}), w.fn.extend({
		css: function(t, e) {
			return H(this, function(t, e, n) {
				var i, r, o = {},
					a = 0;
				if (Array.isArray(e)) {
					for (i = Bt(t), r = e.length; a < r; a++) o[e[a]] = w.css(t, e[a], !1, i);
					return o
				}
				return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
			}, t, e, 1 < arguments.length)
		}
	}), ((w.Tween = Zt).prototype = {
		constructor: Zt,
		init: function(t, e, n, i, r, o) {
			this.elem = t, this.prop = n, this.easing = r || w.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (w.cssNumber[n] ? "" : "px")
		},
		cur: function() {
			var t = Zt.propHooks[this.prop];
			return t && t.get ? t.get(this) : Zt.propHooks._default.get(this)
		},
		run: function(t) {
			var e, n = Zt.propHooks[this.prop];
			return this.options.duration ? this.pos = e = w.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Zt.propHooks._default.set(this), this
		}
	}).init.prototype = Zt.prototype, (Zt.propHooks = {
		_default: {
			get: function(t) {
				var e;
				return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = w.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
			},
			set: function(t) {
				w.fx.step[t.prop] ? w.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[w.cssProps[t.prop]] && !w.cssHooks[t.prop] ? t.elem[t.prop] = t.now : w.style(t.elem, t.prop, t.now + t.unit)
			}
		}
	}).scrollTop = Zt.propHooks.scrollLeft = {
		set: function(t) {
			t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
		}
	}, w.easing = {
		linear: function(t) {
			return t
		},
		swing: function(t) {
			return .5 - Math.cos(t * Math.PI) / 2
		},
		_default: "swing"
	}, w.fx = Zt.prototype.init, w.fx.step = {};
	var Jt, te, ee, ne, ie = /^(?:toggle|show|hide)$/,
		re = /queueHooks$/;

	function oe() {
		te && (!1 === S.hidden && T.requestAnimationFrame ? T.requestAnimationFrame(oe) : T.setTimeout(oe, w.fx.interval), w.fx.tick())
	}

	function ae() {
		return T.setTimeout(function() {
			Jt = void 0
		}), Jt = Date.now()
	}

	function se(t, e) {
		var n, i = 0,
			r = {
				height: t
			};
		for (e = e ? 1 : 0; i < 4; i += 2 - e) r["margin" + (n = it[i])] = r["padding" + n] = t;
		return e && (r.opacity = r.width = t), r
	}

	function le(t, e, n) {
		for (var i, r = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), o = 0, a = r.length; o < a; o++)
			if (i = r[o].call(n, e, t)) return i
	}

	function ue(o, t, e) {
		var n, a, i = 0,
			r = ue.prefilters.length,
			s = w.Deferred().always(function() {
				delete l.elem
			}),
			l = function() {
				if (a) return !1;
				for (var t = Jt || ae(), e = Math.max(0, u.startTime + u.duration - t), n = 1 - (e / u.duration || 0), i = 0, r = u.tweens.length; i < r; i++) u.tweens[i].run(n);
				return s.notifyWith(o, [u, n, e]), n < 1 && r ? e : (r || s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u]), !1)
			},
			u = s.promise({
				elem: o,
				props: w.extend({}, t),
				opts: w.extend(!0, {
					specialEasing: {},
					easing: w.easing._default
				}, e),
				originalProperties: t,
				originalOptions: e,
				startTime: Jt || ae(),
				duration: e.duration,
				tweens: [],
				createTween: function(t, e) {
					var n = w.Tween(o, u.opts, t, e, u.opts.specialEasing[t] || u.opts.easing);
					return u.tweens.push(n), n
				},
				stop: function(t) {
					var e = 0,
						n = t ? u.tweens.length : 0;
					if (a) return this;
					for (a = !0; e < n; e++) u.tweens[e].run(1);
					return t ? (s.notifyWith(o, [u, 1, 0]), s.resolveWith(o, [u, t])) : s.rejectWith(o, [u, t]), this
				}
			}),
			c = u.props;
		for (! function(t, e) {
				var n, i, r, o, a;
				for (n in t)
					if (r = e[i = $(n)], o = t[n], Array.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (a = w.cssHooks[i]) && "expand" in a)
						for (n in o = a.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
					else e[i] = r
			}(c, u.opts.specialEasing); i < r; i++)
			if (n = ue.prefilters[i].call(u, o, c, u.opts)) return v(n.stop) && (w._queueHooks(u.elem, u.opts.queue).stop = n.stop.bind(n)), n;
		return w.map(c, le, u), v(u.opts.start) && u.opts.start.call(o, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), w.fx.timer(w.extend(l, {
			elem: o,
			anim: u,
			queue: u.opts.queue
		})), u
	}
	w.Animation = w.extend(ue, {
		tweeners: {
			"*": [function(t, e) {
				var n = this.createTween(t, e);
				return at(n.elem, t, nt.exec(e), n), n
			}]
		},
		tweener: function(t, e) {
			v(t) ? (e = t, t = ["*"]) : t = t.match(N);
			for (var n, i = 0, r = t.length; i < r; i++) n = t[i], ue.tweeners[n] = ue.tweeners[n] || [], ue.tweeners[n].unshift(e)
		},
		prefilters: [function(t, e, n) {
			var i, r, o, a, s, l, u, c, d = "width" in e || "height" in e,
				h = this,
				f = {},
				p = t.style,
				g = t.nodeType && rt(t),
				m = X.get(t, "fxshow");
			for (i in n.queue || (null == (a = w._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function() {
					a.unqueued || s()
				}), a.unqueued++, h.always(function() {
					h.always(function() {
						a.unqueued--, w.queue(t, "fx").length || a.empty.fire()
					})
				})), e)
				if (r = e[i], ie.test(r)) {
					if (delete e[i], o = o || "toggle" === r, r === (g ? "hide" : "show")) {
						if ("show" !== r || !m || void 0 === m[i]) continue;
						g = !0
					}
					f[i] = m && m[i] || w.style(t, i)
				} if ((l = !w.isEmptyObject(e)) || !w.isEmptyObject(f))
				for (i in d && 1 === t.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY], null == (u = m && m.display) && (u = X.get(t, "display")), "none" === (c = w.css(t, "display")) && (u ? c = u : (lt([t], !0), u = t.style.display || u, c = w.css(t, "display"), lt([t]))), ("inline" === c || "inline-block" === c && null != u) && "none" === w.css(t, "float") && (l || (h.done(function() {
						p.display = u
					}), null == u && (c = p.display, u = "none" === c ? "" : c)), p.display = "inline-block")), n.overflow && (p.overflow = "hidden", h.always(function() {
						p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
					})), l = !1, f) l || (m ? "hidden" in m && (g = m.hidden) : m = X.access(t, "fxshow", {
					display: u
				}), o && (m.hidden = !g), g && lt([t], !0), h.done(function() {
					for (i in g || lt([t]), X.remove(t, "fxshow"), f) w.style(t, i, f[i])
				})), l = le(g ? m[i] : 0, i, h), i in m || (m[i] = l.start, g && (l.end = l.start, l.start = 0))
		}],
		prefilter: function(t, e) {
			e ? ue.prefilters.unshift(t) : ue.prefilters.push(t)
		}
	}), w.speed = function(t, e, n) {
		var i = t && "object" == typeof t ? w.extend({}, t) : {
			complete: n || !n && e || v(t) && t,
			duration: t,
			easing: n && e || e && !v(e) && e
		};
		return w.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in w.fx.speeds ? i.duration = w.fx.speeds[i.duration] : i.duration = w.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
			v(i.old) && i.old.call(this), i.queue && w.dequeue(this, i.queue)
		}, i
	}, w.fn.extend({
		fadeTo: function(t, e, n, i) {
			return this.filter(rt).css("opacity", 0).show().end().animate({
				opacity: e
			}, t, n, i)
		},
		animate: function(e, t, n, i) {
			var r = w.isEmptyObject(e),
				o = w.speed(t, n, i),
				a = function() {
					var t = ue(this, w.extend({}, e), o);
					(r || X.get(this, "finish")) && t.stop(!0)
				};
			return a.finish = a, r || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
		},
		stop: function(r, t, o) {
			var a = function(t) {
				var e = t.stop;
				delete t.stop, e(o)
			};
			return "string" != typeof r && (o = t, t = r, r = void 0), t && !1 !== r && this.queue(r || "fx", []), this.each(function() {
				var t = !0,
					e = null != r && r + "queueHooks",
					n = w.timers,
					i = X.get(this);
				if (e) i[e] && i[e].stop && a(i[e]);
				else
					for (e in i) i[e] && i[e].stop && re.test(e) && a(i[e]);
				for (e = n.length; e--;) n[e].elem !== this || null != r && n[e].queue !== r || (n[e].anim.stop(o), t = !1, n.splice(e, 1));
				!t && o || w.dequeue(this, r)
			})
		},
		finish: function(a) {
			return !1 !== a && (a = a || "fx"), this.each(function() {
				var t, e = X.get(this),
					n = e[a + "queue"],
					i = e[a + "queueHooks"],
					r = w.timers,
					o = n ? n.length : 0;
				for (e.finish = !0, w.queue(this, a, []), i && i.stop && i.stop.call(this, !0), t = r.length; t--;) r[t].elem === this && r[t].queue === a && (r[t].anim.stop(!0), r.splice(t, 1));
				for (t = 0; t < o; t++) n[t] && n[t].finish && n[t].finish.call(this);
				delete e.finish
			})
		}
	}), w.each(["toggle", "show", "hide"], function(t, i) {
		var r = w.fn[i];
		w.fn[i] = function(t, e, n) {
			return null == t || "boolean" == typeof t ? r.apply(this, arguments) : this.animate(se(i, !0), t, e, n)
		}
	}), w.each({
		slideDown: se("show"),
		slideUp: se("hide"),
		slideToggle: se("toggle"),
		fadeIn: {
			opacity: "show"
		},
		fadeOut: {
			opacity: "hide"
		},
		fadeToggle: {
			opacity: "toggle"
		}
	}, function(t, i) {
		w.fn[t] = function(t, e, n) {
			return this.animate(i, t, e, n)
		}
	}), w.timers = [], w.fx.tick = function() {
		var t, e = 0,
			n = w.timers;
		for (Jt = Date.now(); e < n.length; e++)(t = n[e])() || n[e] !== t || n.splice(e--, 1);
		n.length || w.fx.stop(), Jt = void 0
	}, w.fx.timer = function(t) {
		w.timers.push(t), w.fx.start()
	}, w.fx.interval = 13, w.fx.start = function() {
		te || (te = !0, oe())
	}, w.fx.stop = function() {
		te = null
	}, w.fx.speeds = {
		slow: 600,
		fast: 200,
		_default: 400
	}, w.fn.delay = function(i, t) {
		return i = w.fx && w.fx.speeds[i] || i, t = t || "fx", this.queue(t, function(t, e) {
			var n = T.setTimeout(t, i);
			e.stop = function() {
				T.clearTimeout(n)
			}
		})
	}, ee = S.createElement("input"), ne = S.createElement("select").appendChild(S.createElement("option")), ee.type = "checkbox", y.checkOn = "" !== ee.value, y.optSelected = ne.selected, (ee = S.createElement("input")).value = "t", ee.type = "radio", y.radioValue = "t" === ee.value;
	var ce, de = w.expr.attrHandle;
	w.fn.extend({
		attr: function(t, e) {
			return H(this, w.attr, t, e, 1 < arguments.length)
		},
		removeAttr: function(t) {
			return this.each(function() {
				w.removeAttr(this, t)
			})
		}
	}), w.extend({
		attr: function(t, e, n) {
			var i, r, o = t.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (r = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ce : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = w.find.attr(t, e)) ? void 0 : i)
		},
		attrHooks: {
			type: {
				set: function(t, e) {
					if (!y.radioValue && "radio" === e && k(t, "input")) {
						var n = t.value;
						return t.setAttribute("type", e), n && (t.value = n), e
					}
				}
			}
		},
		removeAttr: function(t, e) {
			var n, i = 0,
				r = e && e.match(N);
			if (r && 1 === t.nodeType)
				for (; n = r[i++];) t.removeAttribute(n)
		}
	}), ce = {
		set: function(t, e, n) {
			return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n
		}
	}, w.each(w.expr.match.bool.source.match(/\w+/g), function(t, e) {
		var a = de[e] || w.find.attr;
		de[e] = function(t, e, n) {
			var i, r, o = e.toLowerCase();
			return n || (r = de[o], de[o] = i, i = null != a(t, e, n) ? o : null, de[o] = r), i
		}
	});
	var he = /^(?:input|select|textarea|button)$/i,
		fe = /^(?:a|area)$/i;

	function pe(t) {
		return (t.match(N) || []).join(" ")
	}

	function ge(t) {
		return t.getAttribute && t.getAttribute("class") || ""
	}

	function me(t) {
		return Array.isArray(t) ? t : "string" == typeof t && t.match(N) || []
	}
	w.fn.extend({
		prop: function(t, e) {
			return H(this, w.prop, t, e, 1 < arguments.length)
		},
		removeProp: function(t) {
			return this.each(function() {
				delete this[w.propFix[t] || t]
			})
		}
	}), w.extend({
		prop: function(t, e, n) {
			var i, r, o = t.nodeType;
			if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, r = w.propHooks[e]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
		},
		propHooks: {
			tabIndex: {
				get: function(t) {
					var e = w.find.attr(t, "tabindex");
					return e ? parseInt(e, 10) : he.test(t.nodeName) || fe.test(t.nodeName) && t.href ? 0 : -1
				}
			}
		},
		propFix: {
			for: "htmlFor",
			class: "className"
		}
	}), y.optSelected || (w.propHooks.selected = {
		get: function(t) {
			var e = t.parentNode;
			return e && e.parentNode && e.parentNode.selectedIndex, null
		},
		set: function(t) {
			var e = t.parentNode;
			e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
		}
	}), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
		w.propFix[this.toLowerCase()] = this
	}), w.fn.extend({
		addClass: function(e) {
			var t, n, i, r, o, a, s, l = 0;
			if (v(e)) return this.each(function(t) {
				w(this).addClass(e.call(this, t, ge(this)))
			});
			if ((t = me(e)).length)
				for (; n = this[l++];)
					if (r = ge(n), i = 1 === n.nodeType && " " + pe(r) + " ") {
						for (a = 0; o = t[a++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
						r !== (s = pe(i)) && n.setAttribute("class", s)
					} return this
		},
		removeClass: function(e) {
			var t, n, i, r, o, a, s, l = 0;
			if (v(e)) return this.each(function(t) {
				w(this).removeClass(e.call(this, t, ge(this)))
			});
			if (!arguments.length) return this.attr("class", "");
			if ((t = me(e)).length)
				for (; n = this[l++];)
					if (r = ge(n), i = 1 === n.nodeType && " " + pe(r) + " ") {
						for (a = 0; o = t[a++];)
							for (; - 1 < i.indexOf(" " + o + " ");) i = i.replace(" " + o + " ", " ");
						r !== (s = pe(i)) && n.setAttribute("class", s)
					} return this
		},
		toggleClass: function(r, e) {
			var o = typeof r,
				a = "string" === o || Array.isArray(r);
			return "boolean" == typeof e && a ? e ? this.addClass(r) : this.removeClass(r) : v(r) ? this.each(function(t) {
				w(this).toggleClass(r.call(this, t, ge(this), e), e)
			}) : this.each(function() {
				var t, e, n, i;
				if (a)
					for (e = 0, n = w(this), i = me(r); t = i[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
				else void 0 !== r && "boolean" !== o || ((t = ge(this)) && X.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === r ? "" : X.get(this, "__className__") || ""))
			})
		},
		hasClass: function(t) {
			var e, n, i = 0;
			for (e = " " + t + " "; n = this[i++];)
				if (1 === n.nodeType && -1 < (" " + pe(ge(n)) + " ").indexOf(e)) return !0;
			return !1
		}
	});
	var ye = /\r/g;
	w.fn.extend({
		val: function(n) {
			var i, t, r, e = this[0];
			return arguments.length ? (r = v(n), this.each(function(t) {
				var e;
				1 === this.nodeType && (null == (e = r ? n.call(this, t, w(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = w.map(e, function(t) {
					return null == t ? "" : t + ""
				})), (i = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in i && void 0 !== i.set(this, e, "value") || (this.value = e))
			})) : e ? (i = w.valHooks[e.type] || w.valHooks[e.nodeName.toLowerCase()]) && "get" in i && void 0 !== (t = i.get(e, "value")) ? t : "string" == typeof(t = e.value) ? t.replace(ye, "") : null == t ? "" : t : void 0
		}
	}), w.extend({
		valHooks: {
			option: {
				get: function(t) {
					var e = w.find.attr(t, "value");
					return null != e ? e : pe(w.text(t))
				}
			},
			select: {
				get: function(t) {
					var e, n, i, r = t.options,
						o = t.selectedIndex,
						a = "select-one" === t.type,
						s = a ? null : [],
						l = a ? o + 1 : r.length;
					for (i = o < 0 ? l : a ? o : 0; i < l; i++)
						if (((n = r[i]).selected || i === o) && !n.disabled && (!n.parentNode.disabled || !k(n.parentNode, "optgroup"))) {
							if (e = w(n).val(), a) return e;
							s.push(e)
						} return s
				},
				set: function(t, e) {
					for (var n, i, r = t.options, o = w.makeArray(e), a = r.length; a--;)((i = r[a]).selected = -1 < w.inArray(w.valHooks.option.get(i), o)) && (n = !0);
					return n || (t.selectedIndex = -1), o
				}
			}
		}
	}), w.each(["radio", "checkbox"], function() {
		w.valHooks[this] = {
			set: function(t, e) {
				if (Array.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e)
			}
		}, y.checkOn || (w.valHooks[this].get = function(t) {
			return null === t.getAttribute("value") ? "on" : t.value
		})
	}), y.focusin = "onfocusin" in T;
	var ve = /^(?:focusinfocus|focusoutblur)$/,
		Ae = function(t) {
			t.stopPropagation()
		};
	w.extend(w.event, {
		trigger: function(t, e, n, i) {
			var r, o, a, s, l, u, c, d, h = [n || S],
				f = m.call(t, "type") ? t.type : t,
				p = m.call(t, "namespace") ? t.namespace.split(".") : [];
			if (o = d = a = n = n || S, 3 !== n.nodeType && 8 !== n.nodeType && !ve.test(f + w.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), l = f.indexOf(":") < 0 && "on" + f, (t = t[w.expando] ? t : new w.Event(f, "object" == typeof t && t)).isTrigger = i ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : w.makeArray(e, [t]), c = w.event.special[f] || {}, i || !c.trigger || !1 !== c.trigger.apply(n, e))) {
				if (!i && !c.noBubble && !A(n)) {
					for (s = c.delegateType || f, ve.test(s + f) || (o = o.parentNode); o; o = o.parentNode) h.push(o), a = o;
					a === (n.ownerDocument || S) && h.push(a.defaultView || a.parentWindow || T)
				}
				for (r = 0;
					(o = h[r++]) && !t.isPropagationStopped();) d = o, t.type = 1 < r ? s : c.bindType || f, (u = (X.get(o, "events") || {})[t.type] && X.get(o, "handle")) && u.apply(o, e), (u = l && o[l]) && u.apply && W(o) && (t.result = u.apply(o, e), !1 === t.result && t.preventDefault());
				return t.type = f, i || t.isDefaultPrevented() || c._default && !1 !== c._default.apply(h.pop(), e) || !W(n) || l && v(n[f]) && !A(n) && ((a = n[l]) && (n[l] = null), w.event.triggered = f, t.isPropagationStopped() && d.addEventListener(f, Ae), n[f](), t.isPropagationStopped() && d.removeEventListener(f, Ae), w.event.triggered = void 0, a && (n[l] = a)), t.result
			}
		},
		simulate: function(t, e, n) {
			var i = w.extend(new w.Event, n, {
				type: t,
				isSimulated: !0
			});
			w.event.trigger(i, null, e)
		}
	}), w.fn.extend({
		trigger: function(t, e) {
			return this.each(function() {
				w.event.trigger(t, e, this)
			})
		},
		triggerHandler: function(t, e) {
			var n = this[0];
			if (n) return w.event.trigger(t, e, n, !0)
		}
	}), y.focusin || w.each({
		focus: "focusin",
		blur: "focusout"
	}, function(n, i) {
		var r = function(t) {
			w.event.simulate(i, t.target, w.event.fix(t))
		};
		w.event.special[i] = {
			setup: function() {
				var t = this.ownerDocument || this,
					e = X.access(t, i);
				e || t.addEventListener(n, r, !0), X.access(t, i, (e || 0) + 1)
			},
			teardown: function() {
				var t = this.ownerDocument || this,
					e = X.access(t, i) - 1;
				e ? X.access(t, i, e) : (t.removeEventListener(n, r, !0), X.remove(t, i))
			}
		}
	});
	var be = T.location,
		_e = Date.now(),
		Ee = /\?/;
	w.parseXML = function(t) {
		var e;
		if (!t || "string" != typeof t) return null;
		try {
			e = (new T.DOMParser).parseFromString(t, "text/xml")
		} catch (t) {
			e = void 0
		}
		return e && !e.getElementsByTagName("parsererror").length || w.error("Invalid XML: " + t), e
	};
	var Te = /\[\]$/,
		Se = /\r?\n/g,
		we = /^(?:submit|button|image|reset|file)$/i,
		Ce = /^(?:input|select|textarea|keygen)/i;

	function Le(n, t, i, r) {
		var e;
		if (Array.isArray(t)) w.each(t, function(t, e) {
			i || Te.test(n) ? r(n, e) : Le(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, i, r)
		});
		else if (i || "object" !== _(t)) r(n, t);
		else
			for (e in t) Le(n + "[" + e + "]", t[e], i, r)
	}
	w.param = function(t, e) {
		var n, i = [],
			r = function(t, e) {
				var n = v(e) ? e() : e;
				i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
			};
		if (Array.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function() {
			r(this.name, this.value)
		});
		else
			for (n in t) Le(n, t[n], e, r);
		return i.join("&")
	}, w.fn.extend({
		serialize: function() {
			return w.param(this.serializeArray())
		},
		serializeArray: function() {
			return this.map(function() {
				var t = w.prop(this, "elements");
				return t ? w.makeArray(t) : this
			}).filter(function() {
				var t = this.type;
				return this.name && !w(this).is(":disabled") && Ce.test(this.nodeName) && !we.test(t) && (this.checked || !ut.test(t))
			}).map(function(t, e) {
				var n = w(this).val();
				return null == n ? null : Array.isArray(n) ? w.map(n, function(t) {
					return {
						name: e.name,
						value: t.replace(Se, "\r\n")
					}
				}) : {
					name: e.name,
					value: n.replace(Se, "\r\n")
				}
			}).get()
		}
	});
	var ke = /%20/g,
		xe = /#.*$/,
		Re = /([?&])_=[^&]*/,
		Oe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
		Ie = /^(?:GET|HEAD)$/,
		De = /^\/\//,
		Pe = {},
		Me = {},
		Ne = "*/".concat("*"),
		Fe = S.createElement("a");

	function Be(o) {
		return function(t, e) {
			"string" != typeof t && (e = t, t = "*");
			var n, i = 0,
				r = t.toLowerCase().match(N) || [];
			if (v(e))
				for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (o[n] = o[n] || []).unshift(e)) : (o[n] = o[n] || []).push(e)
		}
	}

	function Ue(e, r, o, a) {
		var s = {},
			l = e === Me;

		function u(t) {
			var i;
			return s[t] = !0, w.each(e[t] || [], function(t, e) {
				var n = e(r, o, a);
				return "string" != typeof n || l || s[n] ? l ? !(i = n) : void 0 : (r.dataTypes.unshift(n), u(n), !1)
			}), i
		}
		return u(r.dataTypes[0]) || !s["*"] && u("*")
	}

	function je(t, e) {
		var n, i, r = w.ajaxSettings.flatOptions || {};
		for (n in e) void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
		return i && w.extend(!0, t, i), t
	}
	Fe.href = be.href, w.extend({
		active: 0,
		lastModified: {},
		etag: {},
		ajaxSettings: {
			url: be.href,
			type: "GET",
			isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(be.protocol),
			global: !0,
			processData: !0,
			async: !0,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			accepts: {
				"*": Ne,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
			converters: {
				"* text": String,
				"text html": !0,
				"text json": JSON.parse,
				"text xml": w.parseXML
			},
			flatOptions: {
				url: !0,
				context: !0
			}
		},
		ajaxSetup: function(t, e) {
			return e ? je(je(t, w.ajaxSettings), e) : je(w.ajaxSettings, t)
		},
		ajaxPrefilter: Be(Pe),
		ajaxTransport: Be(Me),
		ajax: function(t, e) {
			"object" == typeof t && (e = t, t = void 0), e = e || {};
			var c, d, h, n, f, i, p, g, r, o, m = w.ajaxSetup({}, e),
				y = m.context || m,
				v = m.context && (y.nodeType || y.jquery) ? w(y) : w.event,
				A = w.Deferred(),
				b = w.Callbacks("once memory"),
				_ = m.statusCode || {},
				a = {},
				s = {},
				l = "canceled",
				E = {
					readyState: 0,
					getResponseHeader: function(t) {
						var e;
						if (p) {
							if (!n)
								for (n = {}; e = Oe.exec(h);) n[e[1].toLowerCase()] = e[2];
							e = n[t.toLowerCase()]
						}
						return null == e ? null : e
					},
					getAllResponseHeaders: function() {
						return p ? h : null
					},
					setRequestHeader: function(t, e) {
						return null == p && (t = s[t.toLowerCase()] = s[t.toLowerCase()] || t, a[t] = e), this
					},
					overrideMimeType: function(t) {
						return null == p && (m.mimeType = t), this
					},
					statusCode: function(t) {
						var e;
						if (t)
							if (p) E.always(t[E.status]);
							else
								for (e in t) _[e] = [_[e], t[e]];
						return this
					},
					abort: function(t) {
						var e = t || l;
						return c && c.abort(e), u(0, e), this
					}
				};
			if (A.promise(E), m.url = ((t || m.url || be.href) + "").replace(De, be.protocol + "//"), m.type = e.method || e.type || m.method || m.type, m.dataTypes = (m.dataType || "*").toLowerCase().match(N) || [""], null == m.crossDomain) {
				i = S.createElement("a");
				try {
					i.href = m.url, i.href = i.href, m.crossDomain = Fe.protocol + "//" + Fe.host != i.protocol + "//" + i.host
				} catch (t) {
					m.crossDomain = !0
				}
			}
			if (m.data && m.processData && "string" != typeof m.data && (m.data = w.param(m.data, m.traditional)), Ue(Pe, m, e, E), p) return E;
			for (r in (g = w.event && m.global) && 0 == w.active++ && w.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !Ie.test(m.type), d = m.url.replace(xe, ""), m.hasContent ? m.data && m.processData && 0 === (m.contentType || "").indexOf("application/x-www-form-urlencoded") && (m.data = m.data.replace(ke, "+")) : (o = m.url.slice(d.length), m.data && (m.processData || "string" == typeof m.data) && (d += (Ee.test(d) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (d = d.replace(Re, "$1"), o = (Ee.test(d) ? "&" : "?") + "_=" + _e++ + o), m.url = d + o), m.ifModified && (w.lastModified[d] && E.setRequestHeader("If-Modified-Since", w.lastModified[d]), w.etag[d] && E.setRequestHeader("If-None-Match", w.etag[d])), (m.data && m.hasContent && !1 !== m.contentType || e.contentType) && E.setRequestHeader("Content-Type", m.contentType), E.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + Ne + "; q=0.01" : "") : m.accepts["*"]), m.headers) E.setRequestHeader(r, m.headers[r]);
			if (m.beforeSend && (!1 === m.beforeSend.call(y, E, m) || p)) return E.abort();
			if (l = "abort", b.add(m.complete), E.done(m.success), E.fail(m.error), c = Ue(Me, m, e, E)) {
				if (E.readyState = 1, g && v.trigger("ajaxSend", [E, m]), p) return E;
				m.async && 0 < m.timeout && (f = T.setTimeout(function() {
					E.abort("timeout")
				}, m.timeout));
				try {
					p = !1, c.send(a, u)
				} catch (t) {
					if (p) throw t;
					u(-1, t)
				}
			} else u(-1, "No Transport");

			function u(t, e, n, i) {
				var r, o, a, s, l, u = e;
				p || (p = !0, f && T.clearTimeout(f), c = void 0, h = i || "", E.readyState = 0 < t ? 4 : 0, r = 200 <= t && t < 300 || 304 === t, n && (s = function(t, e, n) {
					for (var i, r, o, a, s = t.contents, l = t.dataTypes;
						"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
					if (i)
						for (r in s)
							if (s[r] && s[r].test(i)) {
								l.unshift(r);
								break
							} if (l[0] in n) o = l[0];
					else {
						for (r in n) {
							if (!l[0] || t.converters[r + " " + l[0]]) {
								o = r;
								break
							}
							a || (a = r)
						}
						o = o || a
					}
					if (o) return o !== l[0] && l.unshift(o), n[o]
				}(m, E, n)), s = function(t, e, n, i) {
					var r, o, a, s, l, u = {},
						c = t.dataTypes.slice();
					if (c[1])
						for (a in t.converters) u[a.toLowerCase()] = t.converters[a];
					for (o = c.shift(); o;)
						if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
							if ("*" === o) o = l;
							else if ("*" !== l && l !== o) {
						if (!(a = u[l + " " + o] || u["* " + o]))
							for (r in u)
								if ((s = r.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
									!0 === a ? a = u[r] : !0 !== u[r] && (o = s[0], c.unshift(s[1]));
									break
								} if (!0 !== a)
							if (a && t.throws) e = a(e);
							else try {
								e = a(e)
							} catch (t) {
								return {
									state: "parsererror",
									error: a ? t : "No conversion from " + l + " to " + o
								}
							}
					}
					return {
						state: "success",
						data: e
					}
				}(m, s, E, r), r ? (m.ifModified && ((l = E.getResponseHeader("Last-Modified")) && (w.lastModified[d] = l), (l = E.getResponseHeader("etag")) && (w.etag[d] = l)), 204 === t || "HEAD" === m.type ? u = "nocontent" : 304 === t ? u = "notmodified" : (u = s.state, o = s.data, r = !(a = s.error))) : (a = u, !t && u || (u = "error", t < 0 && (t = 0))), E.status = t, E.statusText = (e || u) + "", r ? A.resolveWith(y, [o, u, E]) : A.rejectWith(y, [E, u, a]), E.statusCode(_), _ = void 0, g && v.trigger(r ? "ajaxSuccess" : "ajaxError", [E, m, r ? o : a]), b.fireWith(y, [E, u]), g && (v.trigger("ajaxComplete", [E, m]), --w.active || w.event.trigger("ajaxStop")))
			}
			return E
		},
		getJSON: function(t, e, n) {
			return w.get(t, e, n, "json")
		},
		getScript: function(t, e) {
			return w.get(t, void 0, e, "script")
		}
	}), w.each(["get", "post"], function(t, r) {
		w[r] = function(t, e, n, i) {
			return v(e) && (i = i || n, n = e, e = void 0), w.ajax(w.extend({
				url: t,
				type: r,
				dataType: i,
				data: e,
				success: n
			}, w.isPlainObject(t) && t))
		}
	}), w._evalUrl = function(t) {
		return w.ajax({
			url: t,
			type: "GET",
			dataType: "script",
			cache: !0,
			async: !1,
			global: !1,
			throws: !0
		})
	}, w.fn.extend({
		wrapAll: function(t) {
			var e;
			return this[0] && (v(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
				for (var t = this; t.firstElementChild;) t = t.firstElementChild;
				return t
			}).append(this)), this
		},
		wrapInner: function(n) {
			return v(n) ? this.each(function(t) {
				w(this).wrapInner(n.call(this, t))
			}) : this.each(function() {
				var t = w(this),
					e = t.contents();
				e.length ? e.wrapAll(n) : t.append(n)
			})
		},
		wrap: function(e) {
			var n = v(e);
			return this.each(function(t) {
				w(this).wrapAll(n ? e.call(this, t) : e)
			})
		},
		unwrap: function(t) {
			return this.parent(t).not("body").each(function() {
				w(this).replaceWith(this.childNodes)
			}), this
		}
	}), w.expr.pseudos.hidden = function(t) {
		return !w.expr.pseudos.visible(t)
	}, w.expr.pseudos.visible = function(t) {
		return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
	}, w.ajaxSettings.xhr = function() {
		try {
			return new T.XMLHttpRequest
		} catch (t) {}
	};
	var Ke = {
			0: 200,
			1223: 204
		},
		Ge = w.ajaxSettings.xhr();
	y.cors = !!Ge && "withCredentials" in Ge, y.ajax = Ge = !!Ge, w.ajaxTransport(function(r) {
		var o, a;
		if (y.cors || Ge && !r.crossDomain) return {
			send: function(t, e) {
				var n, i = r.xhr();
				if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
					for (n in r.xhrFields) i[n] = r.xhrFields[n];
				for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), t) i.setRequestHeader(n, t[n]);
				o = function(t) {
					return function() {
						o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === t ? i.abort() : "error" === t ? "number" != typeof i.status ? e(0, "error") : e(i.status, i.statusText) : e(Ke[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
							binary: i.response
						} : {
							text: i.responseText
						}, i.getAllResponseHeaders()))
					}
				}, i.onload = o(), a = i.onerror = i.ontimeout = o("error"), void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
					4 === i.readyState && T.setTimeout(function() {
						o && a()
					})
				}, o = o("abort");
				try {
					i.send(r.hasContent && r.data || null)
				} catch (t) {
					if (o) throw t
				}
			},
			abort: function() {
				o && o()
			}
		}
	}), w.ajaxPrefilter(function(t) {
		t.crossDomain && (t.contents.script = !1)
	}), w.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function(t) {
				return w.globalEval(t), t
			}
		}
	}), w.ajaxPrefilter("script", function(t) {
		void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
	}), w.ajaxTransport("script", function(n) {
		var i, r;
		if (n.crossDomain) return {
			send: function(t, e) {
				i = w("<script>").prop({
					charset: n.scriptCharset,
					src: n.url
				}).on("load error", r = function(t) {
					i.remove(), r = null, t && e("error" === t.type ? 404 : 200, t.type)
				}), S.head.appendChild(i[0])
			},
			abort: function() {
				r && r()
			}
		}
	});
	var He, Ye = [],
		Ve = /(=)\?(?=&|$)|\?\?/;
	w.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function() {
			var t = Ye.pop() || w.expando + "_" + _e++;
			return this[t] = !0, t
		}
	}), w.ajaxPrefilter("json jsonp", function(t, e, n) {
		var i, r, o, a = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
		if (a || "jsonp" === t.dataTypes[0]) return i = t.jsonpCallback = v(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, a ? t[a] = t[a].replace(Ve, "$1" + i) : !1 !== t.jsonp && (t.url += (Ee.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function() {
			return o || w.error(i + " was not called"), o[0]
		}, t.dataTypes[0] = "json", r = T[i], T[i] = function() {
			o = arguments
		}, n.always(function() {
			void 0 === r ? w(T).removeProp(i) : T[i] = r, t[i] && (t.jsonpCallback = e.jsonpCallback, Ye.push(i)), o && v(r) && r(o[0]), o = r = void 0
		}), "script"
	}), y.createHTMLDocument = ((He = S.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === He.childNodes.length), w.parseHTML = function(t, e, n) {
		return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((i = (e = S.implementation.createHTMLDocument("")).createElement("base")).href = S.location.href, e.head.appendChild(i)) : e = S), o = !n && [], (r = x.exec(t)) ? [e.createElement(r[1])] : (r = vt([t], e, o), o && o.length && w(o).remove(), w.merge([], r.childNodes)));
		var i, r, o
	}, w.fn.load = function(t, e, n) {
		var i, r, o, a = this,
			s = t.indexOf(" ");
		return -1 < s && (i = pe(t.slice(s)), t = t.slice(0, s)), v(e) ? (n = e, e = void 0) : e && "object" == typeof e && (r = "POST"), 0 < a.length && w.ajax({
			url: t,
			type: r || "GET",
			dataType: "html",
			data: e
		}).done(function(t) {
			o = arguments, a.html(i ? w("<div>").append(w.parseHTML(t)).find(i) : t)
		}).always(n && function(t, e) {
			a.each(function() {
				n.apply(this, o || [t.responseText, e, t])
			})
		}), this
	}, w.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
		w.fn[e] = function(t) {
			return this.on(e, t)
		}
	}), w.expr.pseudos.animated = function(e) {
		return w.grep(w.timers, function(t) {
			return e === t.elem
		}).length
	}, w.offset = {
		setOffset: function(t, e, n) {
			var i, r, o, a, s, l, u = w.css(t, "position"),
				c = w(t),
				d = {};
			"static" === u && (t.style.position = "relative"), s = c.offset(), o = w.css(t, "top"), l = w.css(t, "left"), ("absolute" === u || "fixed" === u) && -1 < (o + l).indexOf("auto") ? (a = (i = c.position()).top, r = i.left) : (a = parseFloat(o) || 0, r = parseFloat(l) || 0), v(e) && (e = e.call(t, n, w.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
		}
	}, w.fn.extend({
		offset: function(e) {
			if (arguments.length) return void 0 === e ? this : this.each(function(t) {
				w.offset.setOffset(this, e, t)
			});
			var t, n, i = this[0];
			return i ? i.getClientRects().length ? (t = i.getBoundingClientRect(), n = i.ownerDocument.defaultView, {
				top: t.top + n.pageYOffset,
				left: t.left + n.pageXOffset
			}) : {
				top: 0,
				left: 0
			} : void 0
		},
		position: function() {
			if (this[0]) {
				var t, e, n, i = this[0],
					r = {
						top: 0,
						left: 0
					};
				if ("fixed" === w.css(i, "position")) e = i.getBoundingClientRect();
				else {
					for (e = this.offset(), n = i.ownerDocument, t = i.offsetParent || n.documentElement; t && (t === n.body || t === n.documentElement) && "static" === w.css(t, "position");) t = t.parentNode;
					t && t !== i && 1 === t.nodeType && ((r = w(t).offset()).top += w.css(t, "borderTopWidth", !0), r.left += w.css(t, "borderLeftWidth", !0))
				}
				return {
					top: e.top - r.top - w.css(i, "marginTop", !0),
					left: e.left - r.left - w.css(i, "marginLeft", !0)
				}
			}
		},
		offsetParent: function() {
			return this.map(function() {
				for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent;
				return t || At
			})
		}
	}), w.each({
		scrollLeft: "pageXOffset",
		scrollTop: "pageYOffset"
	}, function(e, r) {
		var o = "pageYOffset" === r;
		w.fn[e] = function(t) {
			return H(this, function(t, e, n) {
				var i;
				if (A(t) ? i = t : 9 === t.nodeType && (i = t.defaultView), void 0 === n) return i ? i[r] : t[e];
				i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : t[e] = n
			}, e, t, arguments.length)
		}
	}), w.each(["top", "left"], function(t, n) {
		w.cssHooks[n] = Kt(y.pixelPosition, function(t, e) {
			if (e) return e = jt(t, n), Ft.test(e) ? w(t).position()[n] + "px" : e
		})
	}), w.each({
		Height: "height",
		Width: "width"
	}, function(a, s) {
		w.each({
			padding: "inner" + a,
			content: s,
			"": "outer" + a
		}, function(i, o) {
			w.fn[o] = function(t, e) {
				var n = arguments.length && (i || "boolean" != typeof t),
					r = i || (!0 === t || !0 === e ? "margin" : "border");
				return H(this, function(t, e, n) {
					var i;
					return A(t) ? 0 === o.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + a], i["scroll" + a], t.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? w.css(t, e, r) : w.style(t, e, n, r)
				}, s, n ? t : void 0, n)
			}
		})
	}), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(t, n) {
		w.fn[n] = function(t, e) {
			return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n)
		}
	}), w.fn.extend({
		hover: function(t, e) {
			return this.mouseenter(t).mouseleave(e || t)
		}
	}), w.fn.extend({
		bind: function(t, e, n) {
			return this.on(t, null, e, n)
		},
		unbind: function(t, e) {
			return this.off(t, null, e)
		},
		delegate: function(t, e, n, i) {
			return this.on(e, t, n, i)
		},
		undelegate: function(t, e, n) {
			return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
		}
	}), w.proxy = function(t, e) {
		var n, i, r;
		if ("string" == typeof e && (n = t[e], e = t, t = n), v(t)) return i = s.call(arguments, 2), (r = function() {
			return t.apply(e || this, i.concat(s.call(arguments)))
		}).guid = t.guid = t.guid || w.guid++, r
	}, w.holdReady = function(t) {
		t ? w.readyWait++ : w.ready(!0)
	}, w.isArray = Array.isArray, w.parseJSON = JSON.parse, w.nodeName = k, w.isFunction = v, w.isWindow = A, w.camelCase = $, w.type = _, w.now = Date.now, w.isNumeric = function(t) {
		var e = w.type(t);
		return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
	}, "function" == typeof define && define.amd && define("jquery", [], function() {
		return w
	});
	var ze = T.jQuery,
		$e = T.$;
	return w.noConflict = function(t) {
		return T.$ === w && (T.$ = $e), t && T.jQuery === w && (T.jQuery = ze), w
	}, t || (T.jQuery = T.$ = w), w
}),
function(e, n) {
	"function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(t) {
		return n(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = n(e, require("jquery")) : e.jQueryBridget = n(e, e.jQuery)
}(window, function(t, e) {
	"use strict";
	var d = Array.prototype.slice,
		n = t.console,
		h = void 0 === n ? function() {} : function(t) {
			n.error(t)
		};

	function i(u, r, c) {
		(c = c || e || t.jQuery) && (r.prototype.option || (r.prototype.option = function(t) {
			c.isPlainObject(t) && (this.options = c.extend(!0, this.options, t))
		}), c.fn[u] = function(t) {
			if ("string" == typeof t) {
				var e = d.call(arguments, 1);
				return a = e, l = "$()." + u + '("' + (o = t) + '")', (n = this).each(function(t, e) {
					var n = c.data(e, u);
					if (n) {
						var i = n[o];
						if (i && "_" != o.charAt(0)) {
							var r = i.apply(n, a);
							s = void 0 === s ? r : s
						} else h(l + " is not a valid method")
					} else h(u + " not initialized. Cannot call methods, i.e. " + l)
				}), void 0 !== s ? s : n
			}
			var n, o, a, s, l, i;
			return i = t, this.each(function(t, e) {
				var n = c.data(e, u);
				n ? (n.option(i), n._init()) : (n = new r(e, i), c.data(e, u, n))
			}), this
		}, o(c))
	}

	function o(t) {
		!t || t && t.bridget || (t.bridget = i)
	}
	return o(e || t.jQuery), i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var n = this._events = this._events || {},
				i = n[t] = n[t] || [];
			return -1 == i.indexOf(e) && i.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var n = this._onceEvents = this._onceEvents || {};
			return (n[t] = n[t] || {})[e] = !0, this
		}
	}, e.off = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			var i = n.indexOf(e);
			return -1 != i && n.splice(i, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			n = n.slice(0), e = e || [];
			for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
				var o = n[r];
				i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function() {
	"use strict";

	function y(t) {
		var e = parseFloat(t);
		return -1 == t.indexOf("%") && !isNaN(e) && e
	}
	var n = "undefined" == typeof console ? function() {} : function(t) {
			console.error(t)
		},
		v = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
		A = v.length;

	function b(t) {
		var e = getComputedStyle(t);
		return e || n("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
	}
	var _, E = !1;

	function T(t) {
		if (function() {
				if (!E) {
					E = !0;
					var t = document.createElement("div");
					t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
					var e = document.body || document.documentElement;
					e.appendChild(t);
					var n = b(t);
					_ = 200 == Math.round(y(n.width)), T.isBoxSizeOuter = _, e.removeChild(t)
				}
			}(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
			var e = b(t);
			if ("none" == e.display) return function() {
				for (var t = {
						width: 0,
						height: 0,
						innerWidth: 0,
						innerHeight: 0,
						outerWidth: 0,
						outerHeight: 0
					}, e = 0; e < A; e++) t[v[e]] = 0;
				return t
			}();
			var n = {};
			n.width = t.offsetWidth, n.height = t.offsetHeight;
			for (var i = n.isBorderBox = "border-box" == e.boxSizing, r = 0; r < A; r++) {
				var o = v[r],
					a = e[o],
					s = parseFloat(a);
				n[o] = isNaN(s) ? 0 : s
			}
			var l = n.paddingLeft + n.paddingRight,
				u = n.paddingTop + n.paddingBottom,
				c = n.marginLeft + n.marginRight,
				d = n.marginTop + n.marginBottom,
				h = n.borderLeftWidth + n.borderRightWidth,
				f = n.borderTopWidth + n.borderBottomWidth,
				p = i && _,
				g = y(e.width);
			!1 !== g && (n.width = g + (p ? 0 : l + h));
			var m = y(e.height);
			return !1 !== m && (n.height = m + (p ? 0 : u + f)), n.innerWidth = n.width - (l + h), n.innerHeight = n.height - (u + f), n.outerWidth = n.width + c, n.outerHeight = n.height + d, n
		}
	}
	return T
}),
function(t, e) {
	"use strict";
	"function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function() {
	"use strict";
	var n = function() {
		var t = window.Element.prototype;
		if (t.matches) return "matches";
		if (t.matchesSelector) return "matchesSelector";
		for (var e = ["webkit", "moz", "ms", "o"], n = 0; n < e.length; n++) {
			var i = e[n] + "MatchesSelector";
			if (t[i]) return i
		}
	}();
	return function(t, e) {
		return t[n](e)
	}
}),
function(e, n) {
	"function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(t) {
		return n(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = n(e, require("desandro-matches-selector")) : e.fizzyUIUtils = n(e, e.matchesSelector)
}(window, function(u, o) {
	var c = {
			extend: function(t, e) {
				for (var n in e) t[n] = e[n];
				return t
			},
			modulo: function(t, e) {
				return (t % e + e) % e
			}
		},
		e = Array.prototype.slice;
	c.makeArray = function(t) {
		return Array.isArray(t) ? t : null == t ? [] : "object" == typeof t && "number" == typeof t.length ? e.call(t) : [t]
	}, c.removeFrom = function(t, e) {
		var n = t.indexOf(e); - 1 != n && t.splice(n, 1)
	}, c.getParent = function(t, e) {
		for (; t.parentNode && t != document.body;)
			if (t = t.parentNode, o(t, e)) return t
	}, c.getQueryElement = function(t) {
		return "string" == typeof t ? document.querySelector(t) : t
	}, c.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, c.filterFindElements = function(t, i) {
		t = c.makeArray(t);
		var r = [];
		return t.forEach(function(t) {
			if (t instanceof HTMLElement)
				if (i) {
					o(t, i) && r.push(t);
					for (var e = t.querySelectorAll(i), n = 0; n < e.length; n++) r.push(e[n])
				} else r.push(t)
		}), r
	}, c.debounceMethod = function(t, e, i) {
		i = i || 100;
		var r = t.prototype[e],
			o = e + "Timeout";
		t.prototype[e] = function() {
			var t = this[o];
			clearTimeout(t);
			var e = arguments,
				n = this;
			this[o] = setTimeout(function() {
				r.apply(n, e), delete n[o]
			}, i)
		}
	}, c.docReady = function(t) {
		var e = document.readyState;
		"complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
	}, c.toDashed = function(t) {
		return t.replace(/(.)([A-Z])/g, function(t, e, n) {
			return e + "-" + n
		}).toLowerCase()
	};
	var d = u.console;
	return c.htmlInit = function(s, l) {
		c.docReady(function() {
			var t = c.toDashed(l),
				r = "data-" + t,
				e = document.querySelectorAll("[" + r + "]"),
				n = document.querySelectorAll(".js-" + t),
				i = c.makeArray(e).concat(c.makeArray(n)),
				o = r + "-options",
				a = u.jQuery;
			i.forEach(function(e) {
				var t, n = e.getAttribute(r) || e.getAttribute(o);
				try {
					t = n && JSON.parse(n)
				} catch (t) {
					return void(d && d.error("Error parsing " + r + " on " + e.className + ": " + t))
				}
				var i = new s(e, t);
				a && a.data(e, l, i)
			})
		})
	}, c
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function(t, e) {
	"use strict";
	var n = document.documentElement.style,
		i = "string" == typeof n.transition ? "transition" : "WebkitTransition",
		r = "string" == typeof n.transform ? "transform" : "WebkitTransform",
		o = {
			WebkitTransition: "webkitTransitionEnd",
			transition: "transitionend"
		} [i],
		a = {
			transform: r,
			transition: i,
			transitionDuration: i + "Duration",
			transitionProperty: i + "Property",
			transitionDelay: i + "Delay"
		};

	function s(t, e) {
		t && (this.element = t, this.layout = e, this.position = {
			x: 0,
			y: 0
		}, this._create())
	}
	var l = s.prototype = Object.create(t.prototype);
	l.constructor = s, l._create = function() {
		this._transn = {
			ingProperties: {},
			clean: {},
			onEnd: {}
		}, this.css({
			position: "absolute"
		})
	}, l.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, l.getSize = function() {
		this.size = e(this.element)
	}, l.css = function(t) {
		var e = this.element.style;
		for (var n in t) {
			e[a[n] || n] = t[n]
		}
	}, l.getPosition = function() {
		var t = getComputedStyle(this.element),
			e = this.layout._getOption("originLeft"),
			n = this.layout._getOption("originTop"),
			i = t[e ? "left" : "right"],
			r = t[n ? "top" : "bottom"],
			o = parseFloat(i),
			a = parseFloat(r),
			s = this.layout.size; - 1 != i.indexOf("%") && (o = o / 100 * s.width), -1 != r.indexOf("%") && (a = a / 100 * s.height), o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a, o -= e ? s.paddingLeft : s.paddingRight, a -= n ? s.paddingTop : s.paddingBottom, this.position.x = o, this.position.y = a
	}, l.layoutPosition = function() {
		var t = this.layout.size,
			e = {},
			n = this.layout._getOption("originLeft"),
			i = this.layout._getOption("originTop"),
			r = n ? "paddingLeft" : "paddingRight",
			o = n ? "left" : "right",
			a = n ? "right" : "left",
			s = this.position.x + t[r];
		e[o] = this.getXValue(s), e[a] = "";
		var l = i ? "paddingTop" : "paddingBottom",
			u = i ? "top" : "bottom",
			c = i ? "bottom" : "top",
			d = this.position.y + t[l];
		e[u] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
	}, l.getXValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
	}, l.getYValue = function(t) {
		var e = this.layout._getOption("horizontal");
		return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
	}, l._transitionTo = function(t, e) {
		this.getPosition();
		var n = this.position.x,
			i = this.position.y,
			r = t == this.position.x && e == this.position.y;
		if (this.setPosition(t, e), !r || this.isTransitioning) {
			var o = t - n,
				a = e - i,
				s = {};
			s.transform = this.getTranslate(o, a), this.transition({
				to: s,
				onTransitionEnd: {
					transform: this.layoutPosition
				},
				isCleaning: !0
			})
		} else this.layoutPosition()
	}, l.getTranslate = function(t, e) {
		return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
	}, l.goTo = function(t, e) {
		this.setPosition(t, e), this.layoutPosition()
	}, l.moveTo = l._transitionTo, l.setPosition = function(t, e) {
		this.position.x = parseFloat(t), this.position.y = parseFloat(e)
	}, l._nonTransition = function(t) {
		for (var e in this.css(t.to), t.isCleaning && this._removeStyles(t.to), t.onTransitionEnd) t.onTransitionEnd[e].call(this)
	}, l.transition = function(t) {
		if (parseFloat(this.layout.options.transitionDuration)) {
			var e = this._transn;
			for (var n in t.onTransitionEnd) e.onEnd[n] = t.onTransitionEnd[n];
			for (n in t.to) e.ingProperties[n] = !0, t.isCleaning && (e.clean[n] = !0);
			if (t.from) {
				this.css(t.from);
				this.element.offsetHeight;
				null
			}
			this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
		} else this._nonTransition(t)
	};
	var u = "opacity," + r.replace(/([A-Z])/g, function(t) {
		return "-" + t.toLowerCase()
	});
	l.enableTransition = function() {
		if (!this.isTransitioning) {
			var t = this.layout.options.transitionDuration;
			t = "number" == typeof t ? t + "ms" : t, this.css({
				transitionProperty: u,
				transitionDuration: t,
				transitionDelay: this.staggerDelay || 0
			}), this.element.addEventListener(o, this, !1)
		}
	}, l.onwebkitTransitionEnd = function(t) {
		this.ontransitionend(t)
	}, l.onotransitionend = function(t) {
		this.ontransitionend(t)
	};
	var c = {
		"-webkit-transform": "transform"
	};
	l.ontransitionend = function(t) {
		if (t.target === this.element) {
			var e = this._transn,
				n = c[t.propertyName] || t.propertyName;
			if (delete e.ingProperties[n], function(t) {
					for (var e in t) return !1;
					return !0
				}(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) e.onEnd[n].call(this), delete e.onEnd[n];
			this.emitEvent("transitionEnd", [this])
		}
	}, l.disableTransition = function() {
		this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
	}, l._removeStyles = function(t) {
		var e = {};
		for (var n in t) e[n] = "";
		this.css(e)
	};
	var d = {
		transitionProperty: "",
		transitionDuration: "",
		transitionDelay: ""
	};
	return l.removeTransitionStyles = function() {
		this.css(d)
	}, l.stagger = function(t) {
		t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
	}, l.removeElem = function() {
		this.element.parentNode.removeChild(this.element), this.css({
			display: ""
		}), this.emitEvent("remove", [this])
	}, l.remove = function() {
		i && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
			this.removeElem()
		}), this.hide()) : this.removeElem()
	}, l.reveal = function() {
		delete this.isHidden, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {};
		e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
			from: t.hiddenStyle,
			to: t.visibleStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, l.onRevealTransitionEnd = function() {
		this.isHidden || this.emitEvent("reveal")
	}, l.getHideRevealTransitionEndProperty = function(t) {
		var e = this.layout.options[t];
		if (e.opacity) return "opacity";
		for (var n in e) return n
	}, l.hide = function() {
		this.isHidden = !0, this.css({
			display: ""
		});
		var t = this.layout.options,
			e = {};
		e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
			from: t.visibleStyle,
			to: t.hiddenStyle,
			isCleaning: !0,
			onTransitionEnd: e
		})
	}, l.onHideTransitionEnd = function() {
		this.isHidden && (this.css({
			display: "none"
		}), this.emitEvent("hide"))
	}, l.destroy = function() {
		this.css({
			position: "",
			left: "",
			right: "",
			top: "",
			bottom: "",
			transition: "",
			transform: ""
		})
	}, s
}),
function(r, o) {
	"use strict";
	"function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(t, e, n, i) {
		return o(r, t, e, n, i)
	}) : "object" == typeof module && module.exports ? module.exports = o(r, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : r.Outlayer = o(r, r.EvEmitter, r.getSize, r.fizzyUIUtils, r.Outlayer.Item)
}(window, function(t, e, r, o, i) {
	"use strict";
	var a = t.console,
		s = t.jQuery,
		n = function() {},
		l = 0,
		u = {};

	function c(t, e) {
		var n = o.getQueryElement(t);
		if (n) {
			this.element = n, s && (this.$element = s(this.element)), this.options = o.extend({}, this.constructor.defaults), this.option(e);
			var i = ++l;
			this.element.outlayerGUID = i, (u[i] = this)._create(), this._getOption("initLayout") && this.layout()
		} else a && a.error("Bad element for " + this.constructor.namespace + ": " + (n || t))
	}
	c.namespace = "outlayer", c.Item = i, c.defaults = {
		containerStyle: {
			position: "relative"
		},
		initLayout: !0,
		originLeft: !0,
		originTop: !0,
		resize: !0,
		resizeContainer: !0,
		transitionDuration: "0.4s",
		hiddenStyle: {
			opacity: 0,
			transform: "scale(0.001)"
		},
		visibleStyle: {
			opacity: 1,
			transform: "scale(1)"
		}
	};
	var d = c.prototype;

	function h(t) {
		function e() {
			t.apply(this, arguments)
		}
		return (e.prototype = Object.create(t.prototype)).constructor = e
	}
	o.extend(d, e.prototype), d.option = function(t) {
		o.extend(this.options, t)
	}, d._getOption = function(t) {
		var e = this.constructor.compatOptions[t];
		return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
	}, c.compatOptions = {
		initLayout: "isInitLayout",
		horizontal: "isHorizontal",
		layoutInstant: "isLayoutInstant",
		originLeft: "isOriginLeft",
		originTop: "isOriginTop",
		resize: "isResizeBound",
		resizeContainer: "isResizingContainer"
	}, d._create = function() {
		this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), o.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
	}, d.reloadItems = function() {
		this.items = this._itemize(this.element.children)
	}, d._itemize = function(t) {
		for (var e = this._filterFindItemElements(t), n = this.constructor.Item, i = [], r = 0; r < e.length; r++) {
			var o = new n(e[r], this);
			i.push(o)
		}
		return i
	}, d._filterFindItemElements = function(t) {
		return o.filterFindElements(t, this.options.itemSelector)
	}, d.getItemElements = function() {
		return this.items.map(function(t) {
			return t.element
		})
	}, d.layout = function() {
		this._resetLayout(), this._manageStamps();
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		this.layoutItems(this.items, e), this._isLayoutInited = !0
	}, d._init = d.layout, d._resetLayout = function() {
		this.getSize()
	}, d.getSize = function() {
		this.size = r(this.element)
	}, d._getMeasurement = function(t, e) {
		var n, i = this.options[t];
		i ? ("string" == typeof i ? n = this.element.querySelector(i) : i instanceof HTMLElement && (n = i), this[t] = n ? r(n)[e] : i) : this[t] = 0
	}, d.layoutItems = function(t, e) {
		t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
	}, d._getItemsForLayout = function(t) {
		return t.filter(function(t) {
			return !t.isIgnored
		})
	}, d._layoutItems = function(t, n) {
		if (this._emitCompleteOnItems("layout", t), t && t.length) {
			var i = [];
			t.forEach(function(t) {
				var e = this._getItemLayoutPosition(t);
				e.item = t, e.isInstant = n || t.isLayoutInstant, i.push(e)
			}, this), this._processLayoutQueue(i)
		}
	}, d._getItemLayoutPosition = function() {
		return {
			x: 0,
			y: 0
		}
	}, d._processLayoutQueue = function(t) {
		this.updateStagger(), t.forEach(function(t, e) {
			this._positionItem(t.item, t.x, t.y, t.isInstant, e)
		}, this)
	}, d.updateStagger = function() {
		var t = this.options.stagger;
		if (null != t) return this.stagger = function(t) {
			if ("number" == typeof t) return t;
			var e = t.match(/(^\d*\.?\d*)(\w*)/),
				n = e && e[1],
				i = e && e[2];
			if (!n.length) return 0;
			n = parseFloat(n);
			var r = f[i] || 1;
			return n * r
		}(t), this.stagger;
		this.stagger = 0
	}, d._positionItem = function(t, e, n, i, r) {
		i ? t.goTo(e, n) : (t.stagger(r * this.stagger), t.moveTo(e, n))
	}, d._postLayout = function() {
		this.resizeContainer()
	}, d.resizeContainer = function() {
		if (this._getOption("resizeContainer")) {
			var t = this._getContainerSize();
			t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
		}
	}, d._getContainerSize = n, d._setContainerMeasure = function(t, e) {
		if (void 0 !== t) {
			var n = this.size;
			n.isBorderBox && (t += e ? n.paddingLeft + n.paddingRight + n.borderLeftWidth + n.borderRightWidth : n.paddingBottom + n.paddingTop + n.borderTopWidth + n.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
		}
	}, d._emitCompleteOnItems = function(e, t) {
		var n = this;

		function i() {
			n.dispatchEvent(e + "Complete", null, [t])
		}
		var r = t.length;
		if (t && r) {
			var o = 0;
			t.forEach(function(t) {
				t.once(e, a)
			})
		} else i();

		function a() {
			++o == r && i()
		}
	}, d.dispatchEvent = function(t, e, n) {
		var i = e ? [e].concat(n) : n;
		if (this.emitEvent(t, i), s)
			if (this.$element = this.$element || s(this.element), e) {
				var r = s.Event(e);
				r.type = t, this.$element.trigger(r, n)
			} else this.$element.trigger(t, n)
	}, d.ignore = function(t) {
		var e = this.getItem(t);
		e && (e.isIgnored = !0)
	}, d.unignore = function(t) {
		var e = this.getItem(t);
		e && delete e.isIgnored
	}, d.stamp = function(t) {
		(t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
	}, d.unstamp = function(t) {
		(t = this._find(t)) && t.forEach(function(t) {
			o.removeFrom(this.stamps, t), this.unignore(t)
		}, this)
	}, d._find = function(t) {
		if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = o.makeArray(t)
	}, d._manageStamps = function() {
		this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
	}, d._getBoundingRect = function() {
		var t = this.element.getBoundingClientRect(),
			e = this.size;
		this._boundingRect = {
			left: t.left + e.paddingLeft + e.borderLeftWidth,
			top: t.top + e.paddingTop + e.borderTopWidth,
			right: t.right - (e.paddingRight + e.borderRightWidth),
			bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
		}
	}, d._manageStamp = n, d._getElementOffset = function(t) {
		var e = t.getBoundingClientRect(),
			n = this._boundingRect,
			i = r(t);
		return {
			left: e.left - n.left - i.marginLeft,
			top: e.top - n.top - i.marginTop,
			right: n.right - e.right - i.marginRight,
			bottom: n.bottom - e.bottom - i.marginBottom
		}
	}, d.handleEvent = o.handleEvent, d.bindResize = function() {
		t.addEventListener("resize", this), this.isResizeBound = !0
	}, d.unbindResize = function() {
		t.removeEventListener("resize", this), this.isResizeBound = !1
	}, d.onresize = function() {
		this.resize()
	}, o.debounceMethod(c, "onresize", 100), d.resize = function() {
		this.isResizeBound && this.needsResizeLayout() && this.layout()
	}, d.needsResizeLayout = function() {
		var t = r(this.element);
		return this.size && t && t.innerWidth !== this.size.innerWidth
	}, d.addItems = function(t) {
		var e = this._itemize(t);
		return e.length && (this.items = this.items.concat(e)), e
	}, d.appended = function(t) {
		var e = this.addItems(t);
		e.length && (this.layoutItems(e, !0), this.reveal(e))
	}, d.prepended = function(t) {
		var e = this._itemize(t);
		if (e.length) {
			var n = this.items.slice(0);
			this.items = e.concat(n), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(n)
		}
	}, d.reveal = function(t) {
		if (this._emitCompleteOnItems("reveal", t), t && t.length) {
			var n = this.updateStagger();
			t.forEach(function(t, e) {
				t.stagger(e * n), t.reveal()
			})
		}
	}, d.hide = function(t) {
		if (this._emitCompleteOnItems("hide", t), t && t.length) {
			var n = this.updateStagger();
			t.forEach(function(t, e) {
				t.stagger(e * n), t.hide()
			})
		}
	}, d.revealItemElements = function(t) {
		var e = this.getItems(t);
		this.reveal(e)
	}, d.hideItemElements = function(t) {
		var e = this.getItems(t);
		this.hide(e)
	}, d.getItem = function(t) {
		for (var e = 0; e < this.items.length; e++) {
			var n = this.items[e];
			if (n.element == t) return n
		}
	}, d.getItems = function(t) {
		t = o.makeArray(t);
		var n = [];
		return t.forEach(function(t) {
			var e = this.getItem(t);
			e && n.push(e)
		}, this), n
	}, d.remove = function(t) {
		var e = this.getItems(t);
		this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function(t) {
			t.remove(), o.removeFrom(this.items, t)
		}, this)
	}, d.destroy = function() {
		var t = this.element.style;
		t.height = "", t.position = "", t.width = "", this.items.forEach(function(t) {
			t.destroy()
		}), this.unbindResize();
		var e = this.element.outlayerGUID;
		delete u[e], delete this.element.outlayerGUID, s && s.removeData(this.element, this.constructor.namespace)
	}, c.data = function(t) {
		var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
		return e && u[e]
	}, c.create = function(t, e) {
		var n = h(c);
		return n.defaults = o.extend({}, c.defaults), o.extend(n.defaults, e), n.compatOptions = o.extend({}, c.compatOptions), n.namespace = t, n.data = c.data, n.Item = h(i), o.htmlInit(n, t), s && s.bridget && s.bridget(t, n), n
	};
	var f = {
		ms: 1,
		s: 1e3
	};
	return c.Item = i, c
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function(t) {
	"use strict";

	function e() {
		t.Item.apply(this, arguments)
	}
	var n = e.prototype = Object.create(t.Item.prototype),
		i = n._create;
	n._create = function() {
		this.id = this.layout.itemGUID++, i.call(this), this.sortData = {}
	}, n.updateSortData = function() {
		if (!this.isIgnored) {
			this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
			var t = this.layout.options.getSortData,
				e = this.layout._sorters;
			for (var n in t) {
				var i = e[n];
				this.sortData[n] = i(this.element, this)
			}
		}
	};
	var r = n.destroy;
	return n.destroy = function() {
		r.apply(this, arguments), this.css({
			display: ""
		})
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function(e, n) {
	"use strict";

	function i(t) {
		(this.isotope = t) && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
	}
	var r = i.prototype;
	return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function(t) {
		r[t] = function() {
			return n.prototype[t].apply(this.isotope, arguments)
		}
	}), r.needsVerticalResizeLayout = function() {
		var t = e(this.isotope.element);
		return this.isotope.size && t && t.innerHeight != this.isotope.size.innerHeight
	}, r._getMeasurement = function() {
		this.isotope._getMeasurement.apply(this, arguments)
	}, r.getColumnWidth = function() {
		this.getSegmentSize("column", "Width")
	}, r.getRowHeight = function() {
		this.getSegmentSize("row", "Height")
	}, r.getSegmentSize = function(t, e) {
		var n = t + e,
			i = "outer" + e;
		if (this._getMeasurement(n, i), !this[n]) {
			var r = this.getFirstItemSize();
			this[n] = r && r[i] || this.isotope.size["inner" + e]
		}
	}, r.getFirstItemSize = function() {
		var t = this.isotope.filteredItems[0];
		return t && t.element && e(t.element)
	}, r.layout = function() {
		this.isotope.layout.apply(this.isotope, arguments)
	}, r.getSize = function() {
		this.isotope.getSize(), this.size = this.isotope.size
	}, i.modes = {}, i.create = function(t, e) {
		function n() {
			i.apply(this, arguments)
		}
		return (n.prototype = Object.create(r)).constructor = n, e && (n.options = e), i.modes[n.prototype.namespace = t] = n
	}, i
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function(t, u) {
	var e = t.create("masonry");
	e.compatOptions.fitWidth = "isFitWidth";
	var n = e.prototype;
	return n._resetLayout = function() {
		this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
		for (var t = 0; t < this.cols; t++) this.colYs.push(0);
		this.maxY = 0, this.horizontalColIndex = 0
	}, n.measureColumns = function() {
		if (this.getContainerWidth(), !this.columnWidth) {
			var t = this.items[0],
				e = t && t.element;
			this.columnWidth = e && u(e).outerWidth || this.containerWidth
		}
		var n = this.columnWidth += this.gutter,
			i = this.containerWidth + this.gutter,
			r = i / n,
			o = n - i % n;
		r = Math[o && o < 1 ? "round" : "floor"](r), this.cols = Math.max(r, 1)
	}, n.getContainerWidth = function() {
		var t = this._getOption("fitWidth") ? this.element.parentNode : this.element,
			e = u(t);
		this.containerWidth = e && e.innerWidth
	}, n._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth % this.columnWidth,
			n = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
		n = Math.min(n, this.cols);
		for (var i = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](n, t), r = {
				x: this.columnWidth * i.col,
				y: i.y
			}, o = i.y + t.size.outerHeight, a = n + i.col, s = i.col; s < a; s++) this.colYs[s] = o;
		return r
	}, n._getTopColPosition = function(t) {
		var e = this._getTopColGroup(t),
			n = Math.min.apply(Math, e);
		return {
			col: e.indexOf(n),
			y: n
		}
	}, n._getTopColGroup = function(t) {
		if (t < 2) return this.colYs;
		for (var e = [], n = this.cols + 1 - t, i = 0; i < n; i++) e[i] = this._getColGroupY(i, t);
		return e
	}, n._getColGroupY = function(t, e) {
		if (e < 2) return this.colYs[t];
		var n = this.colYs.slice(t, t + e);
		return Math.max.apply(Math, n)
	}, n._getHorizontalColPosition = function(t, e) {
		var n = this.horizontalColIndex % this.cols;
		n = 1 < t && n + t > this.cols ? 0 : n;
		var i = e.size.outerWidth && e.size.outerHeight;
		return this.horizontalColIndex = i ? n + t : this.horizontalColIndex, {
			col: n,
			y: this._getColGroupY(n, t)
		}
	}, n._manageStamp = function(t) {
		var e = u(t),
			n = this._getElementOffset(t),
			i = this._getOption("originLeft") ? n.left : n.right,
			r = i + e.outerWidth,
			o = Math.floor(i / this.columnWidth);
		o = Math.max(0, o);
		var a = Math.floor(r / this.columnWidth);
		a -= r % this.columnWidth ? 0 : 1, a = Math.min(this.cols - 1, a);
		for (var s = (this._getOption("originTop") ? n.top : n.bottom) + e.outerHeight, l = o; l <= a; l++) this.colYs[l] = Math.max(s, this.colYs[l])
	}, n._getContainerSize = function() {
		this.maxY = Math.max.apply(Math, this.colYs);
		var t = {
			height: this.maxY
		};
		return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
	}, n._getContainerFitWidth = function() {
		for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
		return (this.cols - t) * this.columnWidth - this.gutter
	}, n.needsResizeLayout = function() {
		var t = this.containerWidth;
		return this.getContainerWidth(), t != this.containerWidth
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function(t, e) {
	"use strict";
	var n = t.create("masonry"),
		i = n.prototype,
		r = {
			_getElementOffset: !0,
			layout: !0,
			_getMeasurement: !0
		};
	for (var o in e.prototype) r[o] || (i[o] = e.prototype[o]);
	var a = i.measureColumns;
	i.measureColumns = function() {
		this.items = this.isotope.filteredItems, a.call(this)
	};
	var s = i._getOption;
	return i._getOption = function(t) {
		return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : s.apply(this.isotope, arguments)
	}, n
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
	"use strict";
	var e = t.create("fitRows"),
		n = e.prototype;
	return n._resetLayout = function() {
		this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
	}, n._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = t.size.outerWidth + this.gutter,
			n = this.isotope.size.innerWidth + this.gutter;
		0 !== this.x && e + this.x > n && (this.x = 0, this.y = this.maxY);
		var i = {
			x: this.x,
			y: this.y
		};
		return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, i
	}, n._getContainerSize = function() {
		return {
			height: this.maxY
		}
	}, e
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function(t) {
	"use strict";
	var e = t.create("vertical", {
			horizontalAlignment: 0
		}),
		n = e.prototype;
	return n._resetLayout = function() {
		this.y = 0
	}, n._getItemLayoutPosition = function(t) {
		t.getSize();
		var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment,
			n = this.y;
		return this.y += t.size.outerHeight, {
			x: e,
			y: n
		}
	}, n._getContainerSize = function() {
		return {
			height: this.y
		}
	}, e
}),
function(a, s) {
	"function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function(t, e, n, i, r, o) {
		return s(a, t, e, n, i, r, o)
	}) : "object" == typeof module && module.exports ? module.exports = s(a, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : a.Isotope = s(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode)
}(window, function(t, n, e, i, o, r, a) {
	var s = t.jQuery,
		l = String.prototype.trim ? function(t) {
			return t.trim()
		} : function(t) {
			return t.replace(/^\s+|\s+$/g, "")
		},
		u = n.create("isotope", {
			layoutMode: "masonry",
			isJQueryFiltering: !0,
			sortAscending: !0
		});
	u.Item = r, u.LayoutMode = a;
	var c = u.prototype;
	c._create = function() {
		for (var t in this.itemGUID = 0, this._sorters = {}, this._getSorters(), n.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"], a.modes) this._initLayoutMode(t)
	}, c.reloadItems = function() {
		this.itemGUID = 0, n.prototype.reloadItems.call(this)
	}, c._itemize = function() {
		for (var t = n.prototype._itemize.apply(this, arguments), e = 0; e < t.length; e++) {
			t[e].id = this.itemGUID++
		}
		return this._updateItemsSortData(t), t
	}, c._initLayoutMode = function(t) {
		var e = a.modes[t],
			n = this.options[t] || {};
		this.options[t] = e.options ? o.extend(e.options, n) : n, this.modes[t] = new e(this)
	}, c.layout = function() {
		this._isLayoutInited || !this._getOption("initLayout") ? this._layout() : this.arrange()
	}, c._layout = function() {
		var t = this._getIsInstant();
		this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
	}, c.arrange = function(t) {
		this.option(t), this._getIsInstant();
		var e = this._filter(this.items);
		this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
	}, c._init = c.arrange, c._hideReveal = function(t) {
		this.reveal(t.needReveal), this.hide(t.needHide)
	}, c._getIsInstant = function() {
		var t = this._getOption("layoutInstant"),
			e = void 0 !== t ? t : !this._isLayoutInited;
		return this._isInstant = e
	}, c._bindArrangeComplete = function() {
		var t, e, n, i = this;

		function r() {
			t && e && n && i.dispatchEvent("arrangeComplete", null, [i.filteredItems])
		}
		this.once("layoutComplete", function() {
			t = !0, r()
		}), this.once("hideComplete", function() {
			e = !0, r()
		}), this.once("revealComplete", function() {
			n = !0, r()
		})
	}, c._filter = function(t) {
		var e = this.options.filter;
		e = e || "*";
		for (var n = [], i = [], r = [], o = this._getFilterTest(e), a = 0; a < t.length; a++) {
			var s = t[a];
			if (!s.isIgnored) {
				var l = o(s);
				l && n.push(s), l && s.isHidden ? i.push(s) : l || s.isHidden || r.push(s)
			}
		}
		return {
			matches: n,
			needReveal: i,
			needHide: r
		}
	}, c._getFilterTest = function(e) {
		return s && this.options.isJQueryFiltering ? function(t) {
			return s(t.element).is(e)
		} : "function" == typeof e ? function(t) {
			return e(t.element)
		} : function(t) {
			return i(t.element, e)
		}
	}, c.updateSortData = function(t) {
		var e;
		t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
	}, c._getSorters = function() {
		var t = this.options.getSortData;
		for (var e in t) {
			var n = t[e];
			this._sorters[e] = d(n)
		}
	}, c._updateItemsSortData = function(t) {
		for (var e = t && t.length, n = 0; e && n < e; n++) {
			t[n].updateSortData()
		}
	};
	var d = function(t) {
		if ("string" != typeof t) return t;
		var e, n, i = l(t).split(" "),
			r = i[0],
			o = r.match(/^\[(.+)\]$/),
			a = (e = o && o[1], n = r, e ? function(t) {
				return t.getAttribute(e)
			} : function(t) {
				var e = t.querySelector(n);
				return e && e.textContent
			}),
			s = u.sortDataParsers[i[1]];
		return t = s ? function(t) {
			return t && s(a(t))
		} : function(t) {
			return t && a(t)
		}
	};
	u.sortDataParsers = {
		parseInt: function(t) {
			return parseInt(t, 10)
		},
		parseFloat: function(t) {
			return parseFloat(t)
		}
	}, c._sort = function() {
		if (this.options.sortBy) {
			var t = o.makeArray(this.options.sortBy);
			this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
			var l, u, e = (l = this.sortHistory, u = this.options.sortAscending, function(t, e) {
				for (var n = 0; n < l.length; n++) {
					var i = l[n],
						r = t.sortData[i],
						o = e.sortData[i];
					if (o < r || r < o) {
						var a = void 0 !== u[i] ? u[i] : u,
							s = a ? 1 : -1;
						return (o < r ? 1 : -1) * s
					}
				}
				return 0
			});
			this.filteredItems.sort(e)
		}
	}, c._getIsSameSortBy = function(t) {
		for (var e = 0; e < t.length; e++)
			if (t[e] != this.sortHistory[e]) return !1;
		return !0
	}, c._mode = function() {
		var t = this.options.layoutMode,
			e = this.modes[t];
		if (!e) throw new Error("No layout mode: " + t);
		return e.options = this.options[t], e
	}, c._resetLayout = function() {
		n.prototype._resetLayout.call(this), this._mode()._resetLayout()
	}, c._getItemLayoutPosition = function(t) {
		return this._mode()._getItemLayoutPosition(t)
	}, c._manageStamp = function(t) {
		this._mode()._manageStamp(t)
	}, c._getContainerSize = function() {
		return this._mode()._getContainerSize()
	}, c.needsResizeLayout = function() {
		return this._mode().needsResizeLayout()
	}, c.appended = function(t) {
		var e = this.addItems(t);
		if (e.length) {
			var n = this._filterRevealAdded(e);
			this.filteredItems = this.filteredItems.concat(n)
		}
	}, c.prepended = function(t) {
		var e = this._itemize(t);
		if (e.length) {
			this._resetLayout(), this._manageStamps();
			var n = this._filterRevealAdded(e);
			this.layoutItems(this.filteredItems), this.filteredItems = n.concat(this.filteredItems), this.items = e.concat(this.items)
		}
	}, c._filterRevealAdded = function(t) {
		var e = this._filter(t);
		return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
	}, c.insert = function(t) {
		var e = this.addItems(t);
		if (e.length) {
			var n, i, r = e.length;
			for (n = 0; n < r; n++) i = e[n], this.element.appendChild(i.element);
			var o = this._filter(e).matches;
			for (n = 0; n < r; n++) e[n].isLayoutInstant = !0;
			for (this.arrange(), n = 0; n < r; n++) delete e[n].isLayoutInstant;
			this.reveal(o)
		}
	};
	var h = c.remove;
	return c.remove = function(t) {
		t = o.makeArray(t);
		var e = this.getItems(t);
		h.call(this, t);
		for (var n = e && e.length, i = 0; n && i < n; i++) {
			var r = e[i];
			o.removeFrom(this.filteredItems, r)
		}
	}, c.shuffle = function() {
		for (var t = 0; t < this.items.length; t++) {
			this.items[t].sortData.random = Math.random()
		}
		this.options.sortBy = "random", this._sort(), this._layout()
	}, c._noTransition = function(t, e) {
		var n = this.options.transitionDuration;
		this.options.transitionDuration = 0;
		var i = t.apply(this, e);
		return this.options.transitionDuration = n, i
	}, c.getFilteredItemElements = function() {
		return this.filteredItems.map(function(t) {
			return t.element
		})
	}, u
}),
function(t, e) {
	"function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function() {
	function t() {}
	var e = t.prototype;
	return e.on = function(t, e) {
		if (t && e) {
			var n = this._events = this._events || {},
				i = n[t] = n[t] || [];
			return -1 == i.indexOf(e) && i.push(e), this
		}
	}, e.once = function(t, e) {
		if (t && e) {
			this.on(t, e);
			var n = this._onceEvents = this._onceEvents || {};
			return (n[t] = n[t] || {})[e] = !0, this
		}
	}, e.off = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			var i = n.indexOf(e);
			return -1 != i && n.splice(i, 1), this
		}
	}, e.emitEvent = function(t, e) {
		var n = this._events && this._events[t];
		if (n && n.length) {
			n = n.slice(0), e = e || [];
			for (var i = this._onceEvents && this._onceEvents[t], r = 0; r < n.length; r++) {
				var o = n[r];
				i && i[o] && (this.off(t, o), delete i[o]), o.apply(this, e)
			}
			return this
		}
	}, e.allOff = function() {
		delete this._events, delete this._onceEvents
	}, t
}),
function(e, n) {
	"use strict";
	"function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(t) {
		return n(e, t)
	}) : "object" == typeof module && module.exports ? module.exports = n(e, require("ev-emitter")) : e.imagesLoaded = n(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
	var o = e.jQuery,
		a = e.console;

	function s(t, e) {
		for (var n in e) t[n] = e[n];
		return t
	}
	var l = Array.prototype.slice;

	function u(t, e, n) {
		if (!(this instanceof u)) return new u(t, e, n);
		var i, r = t;
		("string" == typeof t && (r = document.querySelectorAll(t)), r) ? (this.elements = (i = r, Array.isArray(i) ? i : "object" == typeof i && "number" == typeof i.length ? l.call(i) : [i]), this.options = s({}, this.options), "function" == typeof e ? n = e : s(this.options, e), n && this.on("always", n), this.getImages(), o && (this.jqDeferred = new o.Deferred), setTimeout(this.check.bind(this))) : a.error("Bad element for imagesLoaded " + (r || t))
	}(u.prototype = Object.create(t.prototype)).options = {}, u.prototype.getImages = function() {
		this.images = [], this.elements.forEach(this.addElementImages, this)
	}, u.prototype.addElementImages = function(t) {
		"IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
		var e = t.nodeType;
		if (e && c[e]) {
			for (var n = t.querySelectorAll("img"), i = 0; i < n.length; i++) {
				var r = n[i];
				this.addImage(r)
			}
			if ("string" == typeof this.options.background) {
				var o = t.querySelectorAll(this.options.background);
				for (i = 0; i < o.length; i++) {
					var a = o[i];
					this.addElementBackgroundImages(a)
				}
			}
		}
	};
	var c = {
		1: !0,
		9: !0,
		11: !0
	};

	function n(t) {
		this.img = t
	}

	function i(t, e) {
		this.url = t, this.element = e, this.img = new Image
	}
	return u.prototype.addElementBackgroundImages = function(t) {
		var e = getComputedStyle(t);
		if (e)
			for (var n = /url\((['"])?(.*?)\1\)/gi, i = n.exec(e.backgroundImage); null !== i;) {
				var r = i && i[2];
				r && this.addBackground(r, t), i = n.exec(e.backgroundImage)
			}
	}, u.prototype.addImage = function(t) {
		var e = new n(t);
		this.images.push(e)
	}, u.prototype.addBackground = function(t, e) {
		var n = new i(t, e);
		this.images.push(n)
	}, u.prototype.check = function() {
		var i = this;

		function e(t, e, n) {
			setTimeout(function() {
				i.progress(t, e, n)
			})
		}
		this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? this.images.forEach(function(t) {
			t.once("progress", e), t.check()
		}) : this.complete()
	}, u.prototype.progress = function(t, e, n) {
		this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && a && a.log("progress: " + n, t, e)
	}, u.prototype.complete = function() {
		var t = this.hasAnyBroken ? "fail" : "done";
		if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
			var e = this.hasAnyBroken ? "reject" : "resolve";
			this.jqDeferred[e](this)
		}
	}, (n.prototype = Object.create(t.prototype)).check = function() {
		this.getIsImageComplete() ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src)
	}, n.prototype.getIsImageComplete = function() {
		return this.img.complete && this.img.naturalWidth
	}, n.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
	}, n.prototype.handleEvent = function(t) {
		var e = "on" + t.type;
		this[e] && this[e](t)
	}, n.prototype.onload = function() {
		this.confirm(!0, "onload"), this.unbindEvents()
	}, n.prototype.onerror = function() {
		this.confirm(!1, "onerror"), this.unbindEvents()
	}, n.prototype.unbindEvents = function() {
		this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, (i.prototype = Object.create(n.prototype)).check = function() {
		this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
	}, i.prototype.unbindEvents = function() {
		this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
	}, i.prototype.confirm = function(t, e) {
		this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
	}, u.makeJQueryPlugin = function(t) {
		(t = t || e.jQuery) && ((o = t).fn.imagesLoaded = function(t, e) {
			return new u(this, t, e).jqDeferred.promise(o(this))
		})
	}, u.makeJQueryPlugin(), u
}),
function(e, n) {
	"function" == typeof define && define.amd ? define(["jquery"], function(t) {
		return n(e, t)
	}) : "object" == typeof exports ? n(e, require("jquery")) : n(e, e.jQuery || e.Zepto)
}(this, function(t, a) {
	"use strict";
	var e, i, n, o = "remodal",
		r = t.REMODAL_GLOBALS && t.REMODAL_GLOBALS.NAMESPACE || o,
		s = a.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(t) {
			return t + "." + r
		}).join(" "),
		l = a.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(t) {
			return t + "." + r
		}).join(" "),
		u = a.extend({
			hashTracking: !0,
			closeOnConfirm: !0,
			closeOnCancel: !0,
			closeOnEscape: !0,
			closeOnOutsideClick: !0,
			modifier: "",
			appendTo: null
		}, t.REMODAL_GLOBALS && t.REMODAL_GLOBALS.DEFAULTS),
		c = {
			CLOSING: "closing",
			CLOSED: "closed",
			OPENING: "opening",
			OPENED: "opened"
		},
		d = "confirmation",
		h = "cancellation",
		f = void 0 !== (e = document.createElement("div").style).animationName || void 0 !== e.WebkitAnimationName || void 0 !== e.MozAnimationName || void 0 !== e.msAnimationName || void 0 !== e.OAnimationName,
		p = /iPad|iPhone|iPod/.test(navigator.platform);

	function g(t) {
		if (f && "none" === t.css("animation-name") && "none" === t.css("-webkit-animation-name") && "none" === t.css("-moz-animation-name") && "none" === t.css("-o-animation-name") && "none" === t.css("-ms-animation-name")) return 0;
		var e, n, i, r, o = t.css("animation-duration") || t.css("-webkit-animation-duration") || t.css("-moz-animation-duration") || t.css("-o-animation-duration") || t.css("-ms-animation-duration") || "0s",
			a = t.css("animation-delay") || t.css("-webkit-animation-delay") || t.css("-moz-animation-delay") || t.css("-o-animation-delay") || t.css("-ms-animation-delay") || "0s",
			s = t.css("animation-iteration-count") || t.css("-webkit-animation-iteration-count") || t.css("-moz-animation-iteration-count") || t.css("-o-animation-iteration-count") || t.css("-ms-animation-iteration-count") || "1";
		for (o = o.split(", "), a = a.split(", "), s = s.split(", "), r = 0, n = o.length, e = Number.NEGATIVE_INFINITY; r < n; r++) e < (i = parseFloat(o[r]) * parseInt(s[r], 10) + parseFloat(a[r])) && (e = i);
		return e
	}

	function m() {
		if (a(document).height() <= a(window).height()) return 0;
		var t, e, n = document.createElement("div"),
			i = document.createElement("div");
		return n.style.visibility = "hidden", n.style.width = "100px", document.body.appendChild(n), t = n.offsetWidth, n.style.overflow = "scroll", i.style.width = "100%", n.appendChild(i), e = i.offsetWidth, n.parentNode.removeChild(n), t - e
	}

	function y() {
		if (!p) {
			var t, e, n = a("html"),
				i = _("is-locked");
			n.hasClass(i) && (e = a(document.body), t = parseInt(e.css("padding-right"), 10) - m(), e.css("padding-right", t + "px"), n.removeClass(i))
		}
	}

	function v(t, e, n, i) {
		var r = _("is", e),
			o = [_("is", c.CLOSING), _("is", c.OPENING), _("is", c.CLOSED), _("is", c.OPENED)].join(" ");
		t.$bg.removeClass(o).addClass(r), t.$overlay.removeClass(o).addClass(r), t.$wrapper.removeClass(o).addClass(r), t.$modal.removeClass(o).addClass(r), t.state = e, !n && t.$modal.trigger({
			type: e,
			reason: i
		}, [{
			reason: i
		}])
	}

	function A(t, e, n) {
		var i = 0,
			r = function(t) {
				t.target === this && i++
			},
			o = function(t) {
				t.target === this && 0 == --i && (a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
					n[e].off(s + " " + l)
				}), e())
			};
		a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
			n[e].on(s, r).on(l, o)
		}), t(), 0 === g(n.$bg) && 0 === g(n.$overlay) && 0 === g(n.$wrapper) && 0 === g(n.$modal) && (a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
			n[e].off(s + " " + l)
		}), e())
	}

	function b(n) {
		n.state !== c.CLOSED && (a.each(["$bg", "$overlay", "$wrapper", "$modal"], function(t, e) {
			n[e].off(s + " " + l)
		}), n.$bg.removeClass(n.settings.modifier), n.$overlay.removeClass(n.settings.modifier).hide(), n.$wrapper.hide(), y(), v(n, c.CLOSED, !0))
	}

	function _() {
		for (var t = r, e = 0; e < arguments.length; ++e) t += "-" + arguments[e];
		return t
	}

	function E() {
		var t, e, n = location.hash.replace("#", "");
		if (n) {
			try {
				e = a("[data-" + o + '-id="' + n + '"]')
			} catch (t) {}
			e && e.length && (t = a[o].lookup[e.data(o)]) && t.settings.hashTracking && t.open()
		} else i && i.state === c.OPENED && i.settings.hashTracking && i.close()
	}

	function T(t, e) {
		var n = a(document.body),
			i = this;
		i.settings = a.extend({}, u, e), i.index = a[o].lookup.push(i) - 1, i.state = c.CLOSED, i.$overlay = a("." + _("overlay")), null !== i.settings.appendTo && i.settings.appendTo.length && (n = a(i.settings.appendTo)), i.$overlay.length || (i.$overlay = a("<div>").addClass(_("overlay") + " " + _("is", c.CLOSED)).hide(), n.append(i.$overlay)), i.$bg = a("." + _("bg")).addClass(_("is", c.CLOSED)), i.$modal = t.addClass(r + " " + _("is-initialized") + " " + i.settings.modifier + " " + _("is", c.CLOSED)).attr("tabindex", "-1"), i.$wrapper = a("<div>").addClass(_("wrapper") + " " + i.settings.modifier + " " + _("is", c.CLOSED)).hide().append(i.$modal), n.append(i.$wrapper), i.$wrapper.on("click." + r, "[data-" + o + '-action="close"]', function(t) {
			t.preventDefault(), i.close()
		}), i.$wrapper.on("click." + r, "[data-" + o + '-action="cancel"]', function(t) {
			t.preventDefault(), i.$modal.trigger(h), i.settings.closeOnCancel && i.close(h)
		}), i.$wrapper.on("click." + r, "[data-" + o + '-action="confirm"]', function(t) {
			t.preventDefault(), i.$modal.trigger(d), i.settings.closeOnConfirm && i.close(d)
		}), i.$wrapper.on("click." + r, function(t) {
			a(t.target).hasClass(_("wrapper")) && i.settings.closeOnOutsideClick && i.close()
		})
	}
	T.prototype.open = function() {
		var t, e = this;
		e.state !== c.OPENING && e.state !== c.CLOSING && ((t = e.$modal.attr("data-" + o + "-id")) && e.settings.hashTracking && (n = a(window).scrollTop(), location.hash = t), i && i !== e && b(i), i = e, function() {
			if (!p) {
				var t, e, n = a("html"),
					i = _("is-locked");
				n.hasClass(i) || (e = a(document.body), t = parseInt(e.css("padding-right"), 10) + m(), e.css("padding-right", t + "px"), n.addClass(i))
			}
		}(), e.$bg.addClass(e.settings.modifier), e.$overlay.addClass(e.settings.modifier).show(), e.$wrapper.show().scrollTop(0), e.$modal.focus(), A(function() {
			v(e, c.OPENING)
		}, function() {
			v(e, c.OPENED)
		}, e))
	}, T.prototype.close = function(t) {
		var e = this;
		e.state !== c.OPENING && e.state !== c.CLOSING && e.state !== c.CLOSED && (e.settings.hashTracking && e.$modal.attr("data-" + o + "-id") === location.hash.substr(1) && (location.hash = "", a(window).scrollTop(n)), A(function() {
			v(e, c.CLOSING, !1, t)
		}, function() {
			e.$bg.removeClass(e.settings.modifier), e.$overlay.removeClass(e.settings.modifier).hide(), e.$wrapper.hide(), y(), v(e, c.CLOSED, !1, t)
		}, e))
	}, T.prototype.getState = function() {
		return this.state
	}, T.prototype.destroy = function() {
		var t = a[o].lookup;
		b(this), this.$wrapper.remove(), delete t[this.index], 0 === a.grep(t, function(t) {
			return !!t
		}).length && (this.$overlay.remove(), this.$bg.removeClass(_("is", c.CLOSING) + " " + _("is", c.OPENING) + " " + _("is", c.CLOSED) + " " + _("is", c.OPENED)))
	}, a[o] = {
		lookup: []
	}, a.fn[o] = function(n) {
		var i, r;
		return this.each(function(t, e) {
			null == (r = a(e)).data(o) ? (i = new T(r, n), r.data(o, i.index), i.settings.hashTracking && r.attr("data-" + o + "-id") === location.hash.substr(1) && i.open()) : i = a[o].lookup[r.data(o)]
		}), i
	}, a(document).ready(function() {
		a(document).on("click", "[data-" + o + "-target]", function(t) {
			t.preventDefault();
			var e = t.currentTarget.getAttribute("data-" + o + "-target"),
				n = a("[data-" + o + '-id="' + e + '"]');
			a[o].lookup[n.data(o)].open()
		}), a(document).find("." + r).each(function(t, e) {
			var n = a(e),
				i = n.data(o + "-options");
			i ? ("string" == typeof i || i instanceof String) && (i = function(t) {
				var e, n, i, r, o = {};
				for (r = 0, n = (e = (t = t.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ",")).split(",")).length; r < n; r++) e[r] = e[r].split(":"), ("string" == typeof(i = e[r][1]) || i instanceof String) && (i = "true" === i || "false" !== i && i), ("string" == typeof i || i instanceof String) && (i = isNaN(i) ? i : +i), o[e[r][0]] = i;
				return o
			}(i)) : i = {}, n[o](i)
		}), a(document).on("keydown." + r, function(t) {
			i && i.settings.closeOnEscape && i.state === c.OPENED && 27 === t.keyCode && i.close()
		}), a(window).on("hashchange." + r, E)
	})
}),
function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Clappr = e() : t.Clappr = e()
}("undefined" != typeof self ? self : this, function() {
	return function(n) {
		var i = {};

		function r(t) {
			if (i[t]) return i[t].exports;
			var e = i[t] = {
				i: t,
				l: !1,
				exports: {}
			};
			return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
		}
		return r.m = n, r.c = i, r.d = function(t, e, n) {
			r.o(t, e) || Object.defineProperty(t, e, {
				configurable: !1,
				enumerable: !0,
				get: n
			})
		}, r.n = function(t) {
			var e = t && t.__esModule ? function() {
				return t.default
			} : function() {
				return t
			};
			return r.d(e, "a", e), e
		}, r.o = function(t, e) {
			return Object.prototype.hasOwnProperty.call(t, e)
		}, r.p = "", r(r.s = 100)
	}([function(t, e, n) {
		"use strict";
		e.__esModule = !0, e.default = function(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i, r = n(39),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = function(t, e) {
			if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
			return !e || "object" !== (void 0 === e ? "undefined" : (0, o.default)(e)) && "function" != typeof e ? t : e
		}
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i = a(n(134)),
			r = a(n(76)),
			o = a(n(39));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = function(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === e ? "undefined" : (0, o.default)(e)));
			t.prototype = (0, r.default)(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (i.default ? (0, i.default)(t, e) : t.__proto__ = e)
		}
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i, r = n(75),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = function() {
			function i(t, e) {
				for (var n = 0; n < e.length; n++) {
					var i = e[n];
					i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, o.default)(t, i.key, i)
				}
			}
			return function(t, e, n) {
				return e && i(t.prototype, e), n && i(t, n), t
			}
		}()
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var d = o(n(53)),
			i = o(n(0)),
			l = o(n(39)),
			h = o(n(29)),
			r = n(5);

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var a = Array.prototype.slice,
			u = /\s+/,
			f = function(t, e, n, i) {
				if (!n) return !0;
				if ("object" === (void 0 === n ? "undefined" : (0, l.default)(n))) {
					for (var r in n) t[e].apply(t, [r, n[r]].concat(i));
					return !1
				}
				if (u.test(n)) {
					for (var o = n.split(u), a = 0, s = o.length; a < s; a++) t[e].apply(t, [o[a]].concat(i));
					return !1
				}
				return !0
			},
			s = function(t, n, i, r) {
				var o = void 0,
					a = -1,
					s = t.length,
					l = n[0],
					u = n[1],
					c = n[2];
				! function e() {
					try {
						switch (n.length) {
							case 0:
								for (; ++a < s;)(o = t[a]).callback.call(o.ctx);
								return;
							case 1:
								for (; ++a < s;)(o = t[a]).callback.call(o.ctx, l);
								return;
							case 2:
								for (; ++a < s;)(o = t[a]).callback.call(o.ctx, l, u);
								return;
							case 3:
								for (; ++a < s;)(o = t[a]).callback.call(o.ctx, l, u, c);
								return;
							default:
								for (; ++a < s;)(o = t[a]).callback.apply(o.ctx, n);
								return
						}
					} catch (t) {
						h.default.error.apply(h.default, [i, "error on event", r, "trigger", "-", t]), e()
					}
				}()
			},
			c = function() {
				function n() {
					(0, i.default)(this, n)
				}
				return n.prototype.on = function(t, e, n) {
					return f(this, "on", t, [e, n]) && e && (this._events || (this._events = {}), (this._events[t] || (this._events[t] = [])).push({
						callback: e,
						context: n,
						ctx: n || this
					})), this
				}, n.prototype.once = function(t, e, n) {
					var i = this,
						r = void 0;
					if (!f(this, "once", t, [e, n]) || !e) return this;
					return r = function() {
						i.off(t, r), e.apply(this, arguments)
					}, this.on(t, r, n)
				}, n.prototype.off = function(t, e, n) {
					var i, r, o = void 0,
						a = void 0,
						s = void 0,
						l = void 0,
						u = void 0,
						c = void 0;
					if (!this._events || !f(this, "off", t, [e, n])) return this;
					if (!t && !e && !n) return this._events = void 0, this;
					for (l = 0, r = (i = t ? [t] : (0, d.default)(this._events)).length; l < r; l++)
						if (t = i[l], s = this._events[t]) {
							if (this._events[t] = o = [], e || n)
								for (u = 0, c = s.length; u < c; u++) a = s[u], (e && e !== a.callback && e !== a.callback._callback || n && n !== a.context) && o.push(a);
							o.length || delete this._events[t]
						} return this
				}, n.prototype.trigger = function(t) {
					var e = this.name || this.constructor.name;
					if (h.default.debug.apply(h.default, [e].concat(Array.prototype.slice.call(arguments))), !this._events) return this;
					var n = a.call(arguments, 1);
					if (!f(this, "trigger", t, n)) return this;
					var i = this._events[t],
						r = this._events.all;
					return i && s(i, n, e, t), r && s(r, arguments, e, t), this
				}, n.prototype.stopListening = function(t, e, n) {
					var i = this._listeningTo;
					if (!i) return this;
					var r = !e && !n;
					for (var o in n || "object" !== (void 0 === e ? "undefined" : (0, l.default)(e)) || (n = this), t && ((i = {})[t._listenId] = t), i)(t = i[o]).off(e, n, this), (r || 0 === (0, d.default)(t._events).length) && delete this._listeningTo[o];
					return this
				}, n.register = function(t) {
					n.Custom || (n.Custom = {});
					var e = "string" == typeof t && t.toUpperCase().trim();
					e && !n.Custom[e] ? n.Custom[e] = e.toLowerCase().split("_").map(function(t, e) {
						return 0 === e ? t : t = t[0].toUpperCase() + t.slice(1)
					}).join("") : h.default.error("Events", "Error when register event: " + t)
				}, n.listAvailableCustomEvents = function() {
					return n.Custom || (n.Custom = {}), (0, d.default)(n.Custom).filter(function(t) {
						return "string" == typeof n.Custom[t]
					})
				}, n
			}();
		e.default = c;
		var p = {
			listenTo: "on",
			listenToOnce: "once"
		};
		(0, d.default)(p).forEach(function(i) {
			c.prototype[i] = function(t, e, n) {
				return (this._listeningTo || (this._listeningTo = {}))[t._listenId || (t._listenId = (0, r.uniqueId)("l"))] = t, n || "object" !== (void 0 === e ? "undefined" : (0, l.default)(e)) || (n = this), t[p[i]](e, n, this), this
			}
		}), c.PLAYER_READY = "ready", c.PLAYER_RESIZE = "resize", c.PLAYER_FULLSCREEN = "fullscreen", c.PLAYER_PLAY = "play", c.PLAYER_PAUSE = "pause", c.PLAYER_STOP = "stop", c.PLAYER_ENDED = "ended", c.PLAYER_SEEK = "seek", c.PLAYER_ERROR = "playererror", c.ERROR = "error", c.PLAYER_TIMEUPDATE = "timeupdate", c.PLAYER_VOLUMEUPDATE = "volumeupdate", c.PLAYER_SUBTITLE_AVAILABLE = "subtitleavailable", c.PLAYBACK_PROGRESS = "playback:progress", c.PLAYBACK_TIMEUPDATE = "playback:timeupdate", c.PLAYBACK_READY = "playback:ready", c.PLAYBACK_BUFFERING = "playback:buffering", c.PLAYBACK_BUFFERFULL = "playback:bufferfull", c.PLAYBACK_SETTINGSUPDATE = "playback:settingsupdate", c.PLAYBACK_LOADEDMETADATA = "playback:loadedmetadata", c.PLAYBACK_HIGHDEFINITIONUPDATE = "playback:highdefinitionupdate", c.PLAYBACK_BITRATE = "playback:bitrate", c.PLAYBACK_LEVELS_AVAILABLE = "playback:levels:available", c.PLAYBACK_LEVEL_SWITCH_START = "playback:levels:switch:start", c.PLAYBACK_LEVEL_SWITCH_END = "playback:levels:switch:end", c.PLAYBACK_PLAYBACKSTATE = "playback:playbackstate", c.PLAYBACK_DVR = "playback:dvr", c.PLAYBACK_MEDIACONTROL_DISABLE = "playback:mediacontrol:disable", c.PLAYBACK_MEDIACONTROL_ENABLE = "playback:mediacontrol:enable", c.PLAYBACK_ENDED = "playback:ended", c.PLAYBACK_PLAY_INTENT = "playback:play:intent", c.PLAYBACK_PLAY = "playback:play", c.PLAYBACK_PAUSE = "playback:pause", c.PLAYBACK_SEEK = "playback:seek", c.PLAYBACK_SEEKED = "playback:seeked", c.PLAYBACK_STOP = "playback:stop", c.PLAYBACK_ERROR = "playback:error", c.PLAYBACK_STATS_ADD = "playback:stats:add", c.PLAYBACK_FRAGMENT_LOADED = "playback:fragment:loaded", c.PLAYBACK_LEVEL_SWITCH = "playback:level:switch", c.PLAYBACK_SUBTITLE_AVAILABLE = "playback:subtitle:available", c.PLAYBACK_SUBTITLE_CHANGED = "playback:subtitle:changed", c.CORE_CONTAINERS_CREATED = "core:containers:created", c.CORE_OPTIONS_CHANGE = "core:options:change", c.CORE_READY = "core:ready", c.CORE_FULLSCREEN = "core:fullscreen", c.CORE_SCREEN_ORIENTATION_CHANGED = "core:screen:orientation:changed", c.CONTAINER_PLAYBACKSTATE = "container:playbackstate", c.CONTAINER_PLAYBACKDVRSTATECHANGED = "container:dvr", c.CONTAINER_BITRATE = "container:bitrate", c.CONTAINER_STATS_REPORT = "container:stats:report", c.CONTAINER_DESTROYED = "container:destroyed", c.CONTAINER_READY = "container:ready", c.CONTAINER_ERROR = "container:error", c.CONTAINER_LOADEDMETADATA = "container:loadedmetadata", c.CONTAINER_SUBTITLE_AVAILABLE = "container:subtitle:available", c.CONTAINER_SUBTITLE_CHANGED = "container:subtitle:changed", c.CONTAINER_TIMEUPDATE = "container:timeupdate", c.CONTAINER_PROGRESS = "container:progress", c.CONTAINER_PLAY = "container:play", c.CONTAINER_STOP = "container:stop", c.CONTAINER_PAUSE = "container:pause", c.CONTAINER_ENDED = "container:ended", c.CONTAINER_CLICK = "container:click", c.CONTAINER_DBLCLICK = "container:dblclick", c.CONTAINER_CONTEXTMENU = "container:contextmenu", c.CONTAINER_MOUSE_ENTER = "container:mouseenter", c.CONTAINER_MOUSE_LEAVE = "container:mouseleave", c.CONTAINER_SEEK = "container:seek", c.CONTAINER_SEEKED = "container:seeked", c.CONTAINER_VOLUME = "container:volume", c.CONTAINER_FULLSCREEN = "container:fullscreen", c.CONTAINER_STATE_BUFFERING = "container:state:buffering", c.CONTAINER_STATE_BUFFERFULL = "container:state:bufferfull", c.CONTAINER_SETTINGSUPDATE = "container:settingsupdate", c.CONTAINER_HIGHDEFINITIONUPDATE = "container:highdefinitionupdate", c.CONTAINER_MEDIACONTROL_SHOW = "container:mediacontrol:show", c.CONTAINER_MEDIACONTROL_HIDE = "container:mediacontrol:hide", c.CONTAINER_MEDIACONTROL_DISABLE = "container:mediacontrol:disable", c.CONTAINER_MEDIACONTROL_ENABLE = "container:mediacontrol:enable", c.CONTAINER_STATS_ADD = "container:stats:add", c.CONTAINER_OPTIONS_CHANGE = "container:options:change", c.MEDIACONTROL_RENDERED = "mediacontrol:rendered", c.MEDIACONTROL_FULLSCREEN = "mediacontrol:fullscreen", c.MEDIACONTROL_SHOW = "mediacontrol:show", c.MEDIACONTROL_HIDE = "mediacontrol:hide", c.MEDIACONTROL_MOUSEMOVE_SEEKBAR = "mediacontrol:mousemove:seekbar", c.MEDIACONTROL_MOUSELEAVE_SEEKBAR = "mediacontrol:mouseleave:seekbar", c.MEDIACONTROL_PLAYING = "mediacontrol:playing", c.MEDIACONTROL_NOTPLAYING = "mediacontrol:notplaying", c.MEDIACONTROL_CONTAINERCHANGED = "mediacontrol:containerchanged", c.MEDIACONTROL_OPTIONS_CHANGE = "mediacontrol:options:change", t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.DomRecycler = e.cancelAnimationFrame = e.requestAnimationFrame = e.QueryString = e.Config = e.Fullscreen = void 0;
		var a = f(n(12)),
			i = f(n(3)),
			s = f(n(0)),
			l = f(n(1)),
			u = f(n(2)),
			r = f(n(75)),
			o = f(n(140));
		e.assign = p, e.extend = g, e.formatTime = m, e.seekStringToSeconds = b, e.uniqueId = E, e.isNumber = T, e.currentScriptUrl = S, e.getBrowserLanguage = L, e.now = k, e.removeArrayItem = x, e.canAutoPlayMedia = R, n(143);
		var c = f(n(14)),
			d = f(n(6)),
			h = f(n(147));

		function f(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}

		function p(t, e) {
			if (e)
				for (var n in e) {
					var i = (0, o.default)(e, n);
					i ? (0, r.default)(t, n, i) : t[n] = e[n]
				}
			return t
		}

		function g(t, a) {
			var e = function(r) {
				function o() {
					(0, s.default)(this, o);
					for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
					var i = (0, l.default)(this, r.call.apply(r, [this].concat(e)));
					return a.initialize && a.initialize.apply(i, e), i
				}
				return (0, u.default)(o, r), o
			}(t);
			return p(e.prototype, a), e
		}

		function m(t, e) {
			if (!isFinite(t)) return "--:--";
			t *= 1e3;
			var n = (t = parseInt(t / 1e3)) % 60,
				i = (t = parseInt(t / 60)) % 60,
				r = (t = parseInt(t / 60)) % 24,
				o = parseInt(t / 24),
				a = "";
			return o && 0 < o && (a += o + ":", r < 1 && (a += "00:")), (r && 0 < r || e) && (a += ("0" + r).slice(-2) + ":"), a += ("0" + i).slice(-2) + ":", (a += ("0" + n).slice(-2)).trim()
		}
		var y = e.Fullscreen = {
				isFullscreen: function() {
					return !!(document.webkitFullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement)
				},
				requestFullscreen: function(t) {
					t.requestFullscreen ? t.requestFullscreen() : t.webkitRequestFullscreen ? t.webkitRequestFullscreen() : t.mozRequestFullScreen ? t.mozRequestFullScreen() : t.msRequestFullscreen ? t.msRequestFullscreen() : t.querySelector && t.querySelector("video") && t.querySelector("video").webkitEnterFullScreen ? t.querySelector("video").webkitEnterFullScreen() : t.webkitEnterFullScreen && t.webkitEnterFullScreen()
				},
				cancelFullscreen: function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document;
					t.exitFullscreen ? t.exitFullscreen() : t.webkitCancelFullScreen ? t.webkitCancelFullScreen() : t.webkitExitFullscreen ? t.webkitExitFullscreen() : t.mozCancelFullScreen ? t.mozCancelFullScreen() : t.msExitFullscreen && t.msExitFullscreen()
				},
				fullscreenEnabled: function() {
					return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
				}
			},
			v = e.Config = function() {
				function t() {
					(0, s.default)(this, t)
				}
				return t._defaultConfig = function() {
					return {
						volume: {
							value: 100,
							parse: parseInt
						}
					}
				}, t._defaultValueFor = function(t) {
					try {
						return this._defaultConfig()[t].parse(this._defaultConfig()[t].value)
					} catch (t) {
						return
					}
				}, t._createKeyspace = function(t) {
					return "clappr." + document.domain + "." + t
				}, t.restore = function(t) {
					return c.default.hasLocalstorage && localStorage[this._createKeyspace(t)] ? this._defaultConfig()[t].parse(localStorage[this._createKeyspace(t)]) : this._defaultValueFor(t)
				}, t.persist = function(t, e) {
					if (c.default.hasLocalstorage) try {
						return localStorage[this._createKeyspace(t)] = e, !0
					} catch (t) {
						return !1
					}
				}, t
			}(),
			A = e.QueryString = function() {
				function t() {
					(0, s.default)(this, t)
				}
				return t.parse = function(t) {
					for (var e = void 0, n = /\+/g, i = /([^&=]+)=?([^&]*)/g, r = function(t) {
							return decodeURIComponent(t.replace(n, " "))
						}, o = {}; e = i.exec(t);) o[r(e[1]).toLowerCase()] = r(e[2]);
					return o
				}, (0, i.default)(t, null, [{
					key: "params",
					get: function() {
						var t = window.location.search.substring(1);
						return t !== this.query && (this._urlParams = this.parse(t), this.query = t), this._urlParams
					}
				}, {
					key: "hashParams",
					get: function() {
						var t = window.location.hash.substring(1);
						return t !== this.hash && (this._hashParams = this.parse(t), this.hash = t), this._hashParams
					}
				}]), t
			}();

		function b() {
			var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "t",
				i = 0,
				e = A.params[t] || A.hashParams[t] || "",
				n = e.match(/[0-9]+[hms]+/g) || [];
			if (0 < n.length) {
				var r = {
					h: 3600,
					m: 60,
					s: 1
				};
				n.forEach(function(t) {
					if (t) {
						var e = t[t.length - 1],
							n = parseInt(t.slice(0, t.length - 1), 10);
						i += n * r[e]
					}
				})
			} else e && (i = parseInt(e, 10));
			return i
		}
		var _ = {};

		function E(t) {
			return _[t] || (_[t] = 0), t + ++_[t]
		}

		function T(t) {
			return 0 <= t - parseFloat(t) + 1
		}

		function S() {
			var t = document.getElementsByTagName("script");
			return t.length ? t[t.length - 1].src : ""
		}
		var w = e.requestAnimationFrame = (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(t) {
				window.setTimeout(t, 1e3 / 60)
			}).bind(window),
			C = e.cancelAnimationFrame = (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout).bind(window);

		function L() {
			return window.navigator && window.navigator.language
		}

		function k() {
			return window.performance && window.performance.now ? performance.now() : Date.now()
		}

		function x(t, e) {
			var n = t.indexOf(e);
			0 <= n && t.splice(n, 1)
		}

		function R(n, t) {
			t = (0, a.default)({
				inline: !1,
				muted: !1,
				timeout: 250,
				type: "video",
				source: h.default.mp4
			}, t);
			var e = document.createElement(t.type);
			e.muted = t.muted, !0 === t.muted && e.setAttribute("muted", "muted"), !0 === t.inline && e.setAttribute("playsinline", "playsinline"), e.src = t.source;
			var i = e.play(),
				r = setTimeout(function() {
					o(!1, new Error("Timeout " + t.timeout + " ms has been reached"))
				}, t.timeout),
				o = function(t) {
					var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
					clearTimeout(r), n(t, e)
				};
			void 0 !== i ? i.then(function() {
				return o(!0)
			}).catch(function(t) {
				return o(!1, t)
			}) : o(!0)
		}
		var O = [],
			I = e.DomRecycler = function() {
				function t() {
					(0, s.default)(this, t)
				}
				return t.configure = function(t) {
					this.options = d.default.extend(this.options, t)
				}, t.create = function(t) {
					return this.options.recycleVideo && "video" === t && 0 < O.length ? O.shift() : (0, d.default)("<" + t + ">")
				}, t.garbage = function(t) {
					this.options.recycleVideo && "VIDEO" === t[0].tagName.toUpperCase() && (t.children().remove(), O.push(t))
				}, t
			}();
		I.options = {
			recycleVideo: !1
		}, e.default = {
			Config: v,
			Fullscreen: y,
			QueryString: A,
			DomRecycler: I,
			extend: g,
			formatTime: m,
			seekStringToSeconds: b,
			uniqueId: E,
			currentScriptUrl: S,
			isNumber: T,
			requestAnimationFrame: w,
			cancelAnimationFrame: C,
			getBrowserLanguage: L,
			now: k,
			removeArrayItem: x,
			canAutoPlayMedia: R,
			Media: h.default
		}
	}, function(P0, Q0) {
		var g9, R0 = function() {
			var l, a, u, i, s, n, r = [],
				o = r.concat,
				c = r.filter,
				d = r.slice,
				h = window.document,
				f = {},
				e = {},
				p = {
					"column-count": 1,
					columns: 1,
					"font-weight": 1,
					"line-height": 1,
					opacity: 1,
					"z-index": 1,
					zoom: 1
				},
				g = /^\s*<(\w+|!)[^>]*>/,
				m = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
				y = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				v = /^(?:body|html)$/i,
				A = /([A-Z])/g,
				b = ["val", "css", "html", "text", "data", "width", "height", "offset"],
				t = h.createElement("table"),
				_ = h.createElement("tr"),
				E = {
					tr: h.createElement("tbody"),
					tbody: t,
					thead: t,
					tfoot: t,
					td: _,
					th: _,
					"*": h.createElement("div")
				},
				T = /complete|loaded|interactive/,
				S = /^[\w-]*$/,
				w = {},
				C = w.toString,
				L = {},
				k = h.createElement("div"),
				x = {
					tabindex: "tabIndex",
					readonly: "readOnly",
					for: "htmlFor",
					class: "className",
					maxlength: "maxLength",
					cellspacing: "cellSpacing",
					cellpadding: "cellPadding",
					rowspan: "rowSpan",
					colspan: "colSpan",
					usemap: "useMap",
					frameborder: "frameBorder",
					contenteditable: "contentEditable"
				},
				R = Array.isArray || function(t) {
					return t instanceof Array
				};

			function O(t) {
				return null == t ? String(t) : w[C.call(t)] || "object"
			}

			function I(t) {
				return "function" == O(t)
			}

			function D(t) {
				return null != t && t == t.window
			}

			function P(t) {
				return null != t && t.nodeType == t.DOCUMENT_NODE
			}

			function M(t) {
				return "object" == O(t)
			}

			function N(t) {
				return M(t) && !D(t) && Object.getPrototypeOf(t) == Object.prototype
			}

			function F(t) {
				var e = !!t && "length" in t && t.length,
					n = u.type(t);
				return "function" != n && !D(t) && ("array" == n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
			}

			function B(t) {
				return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
			}

			function U(t) {
				return t in e ? e[t] : e[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
			}

			function j(t, e) {
				return "number" != typeof e || p[B(t)] ? e : e + "px"
			}

			function K(t) {
				return "children" in t ? d.call(t.children) : u.map(t.childNodes, function(t) {
					if (1 == t.nodeType) return t
				})
			}

			function G(t, e) {
				var n, i = t ? t.length : 0;
				for (n = 0; n < i; n++) this[n] = t[n];
				this.length = i, this.selector = e || ""
			}

			function H(t, e) {
				return null == e ? u(t) : u(t).filter(e)
			}

			function Y(t, e, n, i) {
				return I(e) ? e.call(t, n, i) : e
			}

			function V(t, e, n) {
				null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
			}

			function z(t, e) {
				var n = t.className || "",
					i = n && n.baseVal !== l;
				if (e === l) return i ? n.baseVal : n;
				i ? n.baseVal = e : t.className = e
			}

			function $(e) {
				try {
					return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? u.parseJSON(e) : e) : e
				} catch (t) {
					return e
				}
			}
			return L.matches = function(t, e) {
				if (!e || !t || 1 !== t.nodeType) return !1;
				var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
				if (n) return n.call(t, e);
				var i, r = t.parentNode,
					o = !r;
				return o && (r = k).appendChild(t), i = ~L.qsa(r, e).indexOf(t), o && k.removeChild(t), i
			}, s = function(t) {
				return t.replace(/-+(.)?/g, function(t, e) {
					return e ? e.toUpperCase() : ""
				})
			}, n = function(n) {
				return c.call(n, function(t, e) {
					return n.indexOf(t) == e
				})
			}, L.fragment = function(t, e, n) {
				var i, r, o;
				return m.test(t) && (i = u(h.createElement(RegExp.$1))), i || (t.replace && (t = t.replace(y, "<$1></$2>")), e === l && (e = g.test(t) && RegExp.$1), e in E || (e = "*"), (o = E[e]).innerHTML = "" + t, i = u.each(d.call(o.childNodes), function() {
					o.removeChild(this)
				})), N(n) && (r = u(i), u.each(n, function(t, e) {
					-1 < b.indexOf(t) ? r[t](e) : r.attr(t, e)
				})), i
			}, L.Z = function(t, e) {
				return new G(t, e)
			}, L.isZ = function(t) {
				return t instanceof L.Z
			}, L.init = function(t, e) {
				var n, i;
				if (!t) return L.Z();
				if ("string" == typeof t)
					if ("<" == (t = t.trim())[0] && g.test(t)) n = L.fragment(t, RegExp.$1, e), t = null;
					else {
						if (e !== l) return u(e).find(t);
						n = L.qsa(h, t)
					}
				else {
					if (I(t)) return u(h).ready(t);
					if (L.isZ(t)) return t;
					if (R(t)) i = t, n = c.call(i, function(t) {
						return null != t
					});
					else if (M(t)) n = [t], t = null;
					else if (g.test(t)) n = L.fragment(t.trim(), RegExp.$1, e), t = null;
					else {
						if (e !== l) return u(e).find(t);
						n = L.qsa(h, t)
					}
				}
				return L.Z(n, t)
			}, (u = function(t, e) {
				return L.init(t, e)
			}).extend = function(e) {
				var n, t = d.call(arguments, 1);
				return "boolean" == typeof e && (n = e, e = t.shift()), t.forEach(function(t) {
					! function t(e, n, i) {
						for (a in n) i && (N(n[a]) || R(n[a])) ? (N(n[a]) && !N(e[a]) && (e[a] = {}), R(n[a]) && !R(e[a]) && (e[a] = []), t(e[a], n[a], i)) : n[a] !== l && (e[a] = n[a])
					}(e, t, n)
				}), e
			}, L.qsa = function(t, e) {
				var n, i = "#" == e[0],
					r = !i && "." == e[0],
					o = i || r ? e.slice(1) : e,
					a = S.test(o);
				return t.getElementById && a && i ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : d.call(a && !i && t.getElementsByClassName ? r ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
			}, u.contains = h.documentElement.contains ? function(t, e) {
				return t !== e && t.contains(e)
			} : function(t, e) {
				for (; e && (e = e.parentNode);)
					if (e === t) return !0;
				return !1
			}, u.type = O, u.isFunction = I, u.isWindow = D, u.isArray = R, u.isPlainObject = N, u.isEmptyObject = function(t) {
				var e;
				for (e in t) return !1;
				return !0
			}, u.isNumeric = function(t) {
				var e = Number(t),
					n = typeof t;
				return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
			}, u.inArray = function(t, e, n) {
				return r.indexOf.call(e, t, n)
			}, u.camelCase = s, u.trim = function(t) {
				return null == t ? "" : String.prototype.trim.call(t)
			}, u.uuid = 0, u.support = {}, u.expr = {}, u.noop = function() {}, u.map = function(t, e) {
				var n, i, r, o, a = [];
				if (F(t))
					for (i = 0; i < t.length; i++) null != (n = e(t[i], i)) && a.push(n);
				else
					for (r in t) null != (n = e(t[r], r)) && a.push(n);
				return 0 < (o = a).length ? u.fn.concat.apply([], o) : o
			}, u.each = function(t, e) {
				var n, i;
				if (F(t)) {
					for (n = 0; n < t.length; n++)
						if (!1 === e.call(t[n], n, t[n])) return t
				} else
					for (i in t)
						if (!1 === e.call(t[i], i, t[i])) return t;
				return t
			}, u.grep = function(t, e) {
				return c.call(t, e)
			}, window.JSON && (u.parseJSON = JSON.parse), u.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
				w["[object " + e + "]"] = e.toLowerCase()
			}), u.fn = {
				constructor: L.Z,
				length: 0,
				forEach: r.forEach,
				reduce: r.reduce,
				push: r.push,
				sort: r.sort,
				splice: r.splice,
				indexOf: r.indexOf,
				concat: function() {
					var t, e, n = [];
					for (t = 0; t < arguments.length; t++) e = arguments[t], n[t] = L.isZ(e) ? e.toArray() : e;
					return o.apply(L.isZ(this) ? this.toArray() : this, n)
				},
				map: function(n) {
					return u(u.map(this, function(t, e) {
						return n.call(t, e, t)
					}))
				},
				slice: function() {
					return u(d.apply(this, arguments))
				},
				ready: function(t) {
					return T.test(h.readyState) && h.body ? t(u) : h.addEventListener("DOMContentLoaded", function() {
						t(u)
					}, !1), this
				},
				get: function(t) {
					return t === l ? d.call(this) : this[0 <= t ? t : t + this.length]
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
				each: function(n) {
					return r.every.call(this, function(t, e) {
						return !1 !== n.call(t, e, t)
					}), this
				},
				filter: function(e) {
					return I(e) ? this.not(this.not(e)) : u(c.call(this, function(t) {
						return L.matches(t, e)
					}))
				},
				add: function(t, e) {
					return u(n(this.concat(u(t, e))))
				},
				is: function(t) {
					return 0 < this.length && L.matches(this[0], t)
				},
				not: function(e) {
					var n = [];
					if (I(e) && e.call !== l) this.each(function(t) {
						e.call(this, t) || n.push(this)
					});
					else {
						var i = "string" == typeof e ? this.filter(e) : F(e) && I(e.item) ? d.call(e) : u(e);
						this.forEach(function(t) {
							i.indexOf(t) < 0 && n.push(t)
						})
					}
					return u(n)
				},
				has: function(t) {
					return this.filter(function() {
						return M(t) ? u.contains(this, t) : u(this).find(t).size()
					})
				},
				eq: function(t) {
					return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
				},
				first: function() {
					var t = this[0];
					return t && !M(t) ? t : u(t)
				},
				last: function() {
					var t = this[this.length - 1];
					return t && !M(t) ? t : u(t)
				},
				find: function(t) {
					var n = this;
					return t ? "object" == typeof t ? u(t).filter(function() {
						var e = this;
						return r.some.call(n, function(t) {
							return u.contains(t, e)
						})
					}) : 1 == this.length ? u(L.qsa(this[0], t)) : this.map(function() {
						return L.qsa(this, t)
					}) : u()
				},
				closest: function(n, i) {
					var r = [],
						o = "object" == typeof n && u(n);
					return this.each(function(t, e) {
						for (; e && !(o ? 0 <= o.indexOf(e) : L.matches(e, n));) e = e !== i && !P(e) && e.parentNode;
						e && r.indexOf(e) < 0 && r.push(e)
					}), u(r)
				},
				parents: function(t) {
					for (var e = [], n = this; 0 < n.length;) n = u.map(n, function(t) {
						if ((t = t.parentNode) && !P(t) && e.indexOf(t) < 0) return e.push(t), t
					});
					return H(e, t)
				},
				parent: function(t) {
					return H(n(this.pluck("parentNode")), t)
				},
				children: function(t) {
					return H(this.map(function() {
						return K(this)
					}), t)
				},
				contents: function() {
					return this.map(function() {
						return this.contentDocument || d.call(this.childNodes)
					})
				},
				siblings: function(t) {
					return H(this.map(function(t, e) {
						return c.call(K(e.parentNode), function(t) {
							return t !== e
						})
					}), t)
				},
				empty: function() {
					return this.each(function() {
						this.innerHTML = ""
					})
				},
				pluck: function(e) {
					return u.map(this, function(t) {
						return t[e]
					})
				},
				show: function() {
					return this.each(function() {
						var t, e, n;
						"none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, f[t] || (e = h.createElement(t), h.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), f[t] = n), f[t]))
					})
				},
				replaceWith: function(t) {
					return this.before(t).remove()
				},
				wrap: function(e) {
					var n = I(e);
					if (this[0] && !n) var i = u(e).get(0),
						r = i.parentNode || 1 < this.length;
					return this.each(function(t) {
						u(this).wrapAll(n ? e.call(this, t) : r ? i.cloneNode(!0) : i)
					})
				},
				wrapAll: function(t) {
					if (this[0]) {
						var e;
						for (u(this[0]).before(t = u(t));
							(e = t.children()).length;) t = e.first();
						u(t).append(this)
					}
					return this
				},
				wrapInner: function(r) {
					var o = I(r);
					return this.each(function(t) {
						var e = u(this),
							n = e.contents(),
							i = o ? r.call(this, t) : r;
						n.length ? n.wrapAll(i) : e.append(i)
					})
				},
				unwrap: function() {
					return this.parent().each(function() {
						u(this).replaceWith(u(this).children())
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
				toggle: function(e) {
					return this.each(function() {
						var t = u(this);
						(e === l ? "none" == t.css("display") : e) ? t.show(): t.hide()
					})
				},
				prev: function(t) {
					return u(this.pluck("previousElementSibling")).filter(t || "*")
				},
				next: function(t) {
					return u(this.pluck("nextElementSibling")).filter(t || "*")
				},
				html: function(n) {
					return 0 in arguments ? this.each(function(t) {
						var e = this.innerHTML;
						u(this).empty().append(Y(this, n, t, e))
					}) : 0 in this ? this[0].innerHTML : null
				},
				text: function(n) {
					return 0 in arguments ? this.each(function(t) {
						var e = Y(this, n, t, this.textContent);
						this.textContent = null == e ? "" : "" + e
					}) : 0 in this ? this.pluck("textContent").join("") : null
				},
				attr: function(e, n) {
					var t;
					return "string" != typeof e || 1 in arguments ? this.each(function(t) {
						if (1 === this.nodeType)
							if (M(e))
								for (a in e) V(this, a, e[a]);
							else V(this, e, Y(this, n, t, this.getAttribute(e)))
					}) : 0 in this && 1 == this[0].nodeType && null != (t = this[0].getAttribute(e)) ? t : l
				},
				removeAttr: function(t) {
					return this.each(function() {
						1 === this.nodeType && t.split(" ").forEach(function(t) {
							V(this, t)
						}, this)
					})
				},
				prop: function(e, n) {
					return e = x[e] || e, 1 in arguments ? this.each(function(t) {
						this[e] = Y(this, n, t, this[e])
					}) : this[0] && this[0][e]
				},
				removeProp: function(t) {
					return t = x[t] || t, this.each(function() {
						delete this[t]
					})
				},
				data: function(t, e) {
					var n = "data-" + t.replace(A, "-$1").toLowerCase(),
						i = 1 in arguments ? this.attr(n, e) : this.attr(n);
					return null !== i ? $(i) : l
				},
				val: function(e) {
					return 0 in arguments ? (null == e && (e = ""), this.each(function(t) {
						this.value = Y(this, e, t, this.value)
					})) : this[0] && (this[0].multiple ? u(this[0]).find("option").filter(function() {
						return this.selected
					}).pluck("value") : this[0].value)
				},
				offset: function(o) {
					if (o) return this.each(function(t) {
						var e = u(this),
							n = Y(this, o, t, e.offset()),
							i = e.offsetParent().offset(),
							r = {
								top: n.top - i.top,
								left: n.left - i.left
							};
						"static" == e.css("position") && (r.position = "relative"), e.css(r)
					});
					if (!this.length) return null;
					if (h.documentElement !== this[0] && !u.contains(h.documentElement, this[0])) return {
						top: 0,
						left: 0
					};
					var t = this[0].getBoundingClientRect();
					return {
						left: t.left + window.pageXOffset,
						top: t.top + window.pageYOffset,
						width: Math.round(t.width),
						height: Math.round(t.height)
					}
				},
				css: function(t, e) {
					if (arguments.length < 2) {
						var n = this[0];
						if ("string" == typeof t) {
							if (!n) return;
							return n.style[s(t)] || getComputedStyle(n, "").getPropertyValue(t)
						}
						if (R(t)) {
							if (!n) return;
							var i = {},
								r = getComputedStyle(n, "");
							return u.each(t, function(t, e) {
								i[e] = n.style[s(e)] || r.getPropertyValue(e)
							}), i
						}
					}
					var o = "";
					if ("string" == O(t)) e || 0 === e ? o = B(t) + ":" + j(t, e) : this.each(function() {
						this.style.removeProperty(B(t))
					});
					else
						for (a in t) t[a] || 0 === t[a] ? o += B(a) + ":" + j(a, t[a]) + ";" : this.each(function() {
							this.style.removeProperty(B(a))
						});
					return this.each(function() {
						this.style.cssText += ";" + o
					})
				},
				index: function(t) {
					return t ? this.indexOf(u(t)[0]) : this.parent().children().indexOf(this[0])
				},
				hasClass: function(t) {
					return !!t && r.some.call(this, function(t) {
						return this.test(z(t))
					}, U(t))
				},
				addClass: function(n) {
					return n ? this.each(function(t) {
						if ("className" in this) {
							i = [];
							var e = z(this);
							Y(this, n, t, e).split(/\s+/g).forEach(function(t) {
								u(this).hasClass(t) || i.push(t)
							}, this), i.length && z(this, e + (e ? " " : "") + i.join(" "))
						}
					}) : this
				},
				removeClass: function(e) {
					return this.each(function(t) {
						if ("className" in this) {
							if (e === l) return z(this, "");
							i = z(this), Y(this, e, t, i).split(/\s+/g).forEach(function(t) {
								i = i.replace(U(t), " ")
							}), z(this, i.trim())
						}
					})
				},
				toggleClass: function(n, i) {
					return n ? this.each(function(t) {
						var e = u(this);
						Y(this, n, t, z(this)).split(/\s+/g).forEach(function(t) {
							(i === l ? !e.hasClass(t) : i) ? e.addClass(t): e.removeClass(t)
						})
					}) : this
				},
				scrollTop: function(t) {
					if (this.length) {
						var e = "scrollTop" in this[0];
						return t === l ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
							this.scrollTop = t
						} : function() {
							this.scrollTo(this.scrollX, t)
						})
					}
				},
				scrollLeft: function(t) {
					if (this.length) {
						var e = "scrollLeft" in this[0];
						return t === l ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
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
							i = v.test(e[0].nodeName) ? {
								top: 0,
								left: 0
							} : e.offset();
						return n.top -= parseFloat(u(t).css("margin-top")) || 0, n.left -= parseFloat(u(t).css("margin-left")) || 0, i.top += parseFloat(u(e[0]).css("border-top-width")) || 0, i.left += parseFloat(u(e[0]).css("border-left-width")) || 0, {
							top: n.top - i.top,
							left: n.left - i.left
						}
					}
				},
				offsetParent: function() {
					return this.map(function() {
						for (var t = this.offsetParent || h.body; t && !v.test(t.nodeName) && "static" == u(t).css("position");) t = t.offsetParent;
						return t
					})
				}
			}, u.fn.detach = u.fn.remove, ["width", "height"].forEach(function(i) {
				var r = i.replace(/./, function(t) {
					return t[0].toUpperCase()
				});
				u.fn[i] = function(e) {
					var t, n = this[0];
					return e === l ? D(n) ? n["inner" + r] : P(n) ? n.documentElement["scroll" + r] : (t = this.offset()) && t[i] : this.each(function(t) {
						(n = u(this)).css(i, Y(this, e, t, n[i]()))
					})
				}
			}), ["after", "prepend", "before", "append"].forEach(function(e, a) {
				var s = a % 2;
				u.fn[e] = function() {
					var n, i, r = u.map(arguments, function(t) {
							var e = [];
							return "array" == (n = O(t)) ? (t.forEach(function(t) {
								return t.nodeType !== l ? e.push(t) : u.zepto.isZ(t) ? e = e.concat(t.get()) : void(e = e.concat(L.fragment(t)))
							}), e) : "object" == n || null == t ? t : L.fragment(t)
						}),
						o = 1 < this.length;
					return r.length < 1 ? this : this.each(function(t, e) {
						i = s ? e : e.parentNode, e = 0 == a ? e.nextSibling : 1 == a ? e.firstChild : 2 == a ? e : null;
						var n = u.contains(h.documentElement, i);
						r.forEach(function(t) {
							if (o) t = t.cloneNode(!0);
							else if (!i) return u(t).remove();
							i.insertBefore(t, e), n && function t(e, n) {
								n(e);
								for (var i = 0, r = e.childNodes.length; i < r; i++) t(e.childNodes[i], n)
							}(t, function(t) {
								if (!(null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src)) {
									var e = t.ownerDocument ? t.ownerDocument.defaultView : window;
									e.eval.call(e, t.innerHTML)
								}
							})
						})
					})
				}, u.fn[s ? e + "To" : "insert" + (a ? "Before" : "After")] = function(t) {
					return u(t)[e](this), this
				}
			}), L.Z.prototype = G.prototype = u.fn, L.uniq = n, L.deserializeValue = $, u.zepto = L, u
		}();
		window.Zepto = R0, void 0 === window.$ && (window.$ = R0),
			function(P6) {
				var S6, T6, Q6 = +new Date,
					R6 = window.document,
					U6 = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
					V6 = /^(?:text|application)\/javascript/i,
					W6 = /^(?:text|application)\/xml/i,
					X6 = "application/json",
					Y6 = "text/html",
					Z6 = /^\s*$/,
					$6 = R6.createElement("a");

				function a7(t, e, n, i) {
					if (t.global) return r = e || R6, o = n, a = i, s = P6.Event(o), P6(r).trigger(s, a), !s.isDefaultPrevented();
					var r, o, a, s
				}

				function d7(t, e) {
					var n = e.context;
					if (!1 === e.beforeSend.call(n, t, e) || !1 === a7(e, n, "ajaxBeforeSend", [t, e])) return !1;
					a7(e, n, "ajaxSend", [t, e])
				}

				function e7(t, e, n, i) {
					var r = n.context,
						o = "success";
					n.success.call(r, t, o, e), i && i.resolveWith(r, [t, o, e]), a7(n, r, "ajaxSuccess", [e, n, t]), g7(o, e, n)
				}

				function f7(t, e, n, i, r) {
					var o = i.context;
					i.error.call(o, n, e, t), r && r.rejectWith(o, [n, e, t]), a7(i, o, "ajaxError", [n, i, t || e]), g7(e, n, i)
				}

				function g7(t, e, n) {
					var i, r = n.context;
					n.complete.call(r, e, t), a7(n, r, "ajaxComplete", [e, n]), (i = n).global && !--P6.active && a7(i, null, "ajaxStop")
				}

				function i7() {}

				function k7(t, e) {
					return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
				}

				function m7(t, e, n, i) {
					return P6.isFunction(e) && (i = n, n = e, e = void 0), P6.isFunction(n) || (i = n, n = void 0), {
						url: t,
						data: e,
						success: n,
						dataType: i
					}
				}
				$6.href = window.location.href, P6.active = 0, P6.ajaxJSONP = function(n, i) {
					if (!("type" in n)) return P6.ajax(n);
					var r, o, t = n.jsonpCallback,
						a = (P6.isFunction(t) ? t() : t) || "Zepto" + Q6++,
						s = R6.createElement("script"),
						l = window[a],
						e = function(t) {
							P6(s).triggerHandler("error", t || "abort")
						},
						u = {
							abort: e
						};
					return i && i.promise(u), P6(s).on("load error", function(t, e) {
						clearTimeout(o), P6(s).off().remove(), "error" != t.type && r ? e7(r[0], u, n, i) : f7(null, e || "error", u, n, i), window[a] = l, r && P6.isFunction(l) && l(r[0]), l = r = void 0
					}), !1 === d7(u, n) ? e("abort") : (window[a] = function() {
						r = arguments
					}, s.src = n.url.replace(/\?(.+)=\?/, "?$1=" + a), R6.head.appendChild(s), 0 < n.timeout && (o = setTimeout(function() {
						e("timeout")
					}, n.timeout))), u
				}, P6.ajaxSettings = {
					type: "GET",
					beforeSend: i7,
					success: i7,
					error: i7,
					complete: i7,
					context: null,
					global: !0,
					xhr: function() {
						return new window.XMLHttpRequest
					},
					accepts: {
						script: "text/javascript, application/javascript, application/x-javascript",
						json: X6,
						xml: "application/xml, text/xml",
						html: Y6,
						text: "text/plain"
					},
					crossDomain: !1,
					timeout: 0,
					processData: !0,
					cache: !0,
					dataFilter: i7
				}, P6.ajax = function(l8) {
					var o8, p8, x7, k8, m8 = P6.extend({}, l8 || {}),
						n8 = P6.Deferred && P6.Deferred();
					for (S6 in P6.ajaxSettings) void 0 === m8[S6] && (m8[S6] = P6.ajaxSettings[S6]);
					(x7 = m8).global && 0 == P6.active++ && a7(x7, null, "ajaxStart"), m8.crossDomain || ((o8 = R6.createElement("a")).href = m8.url, o8.href = o8.href, m8.crossDomain = $6.protocol + "//" + $6.host != o8.protocol + "//" + o8.host), m8.url || (m8.url = window.location.toString()), -1 < (p8 = m8.url.indexOf("#")) && (m8.url = m8.url.slice(0, p8)), (k8 = m8).processData && k8.data && "string" != P6.type(k8.data) && (k8.data = P6.param(k8.data, k8.traditional)), !k8.data || k8.type && "GET" != k8.type.toUpperCase() && "jsonp" != k8.dataType || (k8.url = k7(k8.url, k8.data), k8.data = void 0);
					var q8 = m8.dataType,
						r8 = /\?.+=\?/.test(m8.url);
					if (r8 && (q8 = "jsonp"), !1 !== m8.cache && (l8 && !0 === l8.cache || "script" != q8 && "jsonp" != q8) || (m8.url = k7(m8.url, "_=" + Date.now())), "jsonp" == q8) return r8 || (m8.url = k7(m8.url, m8.jsonp ? m8.jsonp + "=?" : !1 === m8.jsonp ? "" : "callback=?")), P6.ajaxJSONP(m8, n8);
					var y8, s8 = m8.accepts[q8],
						t8 = {},
						u8 = function(t, e) {
							t8[t.toLowerCase()] = [t, e]
						},
						v8 = /^([\w-]+:)\/\//.test(m8.url) ? RegExp.$1 : window.location.protocol,
						w8 = m8.xhr(),
						x8 = w8.setRequestHeader;
					if (n8 && n8.promise(w8), m8.crossDomain || u8("X-Requested-With", "XMLHttpRequest"), u8("Accept", s8 || "*/*"), (s8 = m8.mimeType || s8) && (-1 < s8.indexOf(",") && (s8 = s8.split(",", 2)[0]), w8.overrideMimeType && w8.overrideMimeType(s8)), (m8.contentType || !1 !== m8.contentType && m8.data && "GET" != m8.type.toUpperCase()) && u8("Content-Type", m8.contentType || "application/x-www-form-urlencoded"), m8.headers)
						for (T6 in m8.headers) u8(T6, m8.headers[T6]);
					if (w8.setRequestHeader = u8, !(w8.onreadystatechange = function() {
							if (4 == w8.readyState) {
								w8.onreadystatechange = i7, clearTimeout(y8);
								var C8, D8 = !1;
								if (200 <= w8.status && w8.status < 300 || 304 == w8.status || 0 == w8.status && "file:" == v8) {
									if (q8 = q8 || ((h8 = m8.mimeType || w8.getResponseHeader("content-type")) && (h8 = h8.split(";", 2)[0]), h8 && (h8 == Y6 ? "html" : h8 == X6 ? "json" : V6.test(h8) ? "script" : W6.test(h8) && "xml") || "text"), "arraybuffer" == w8.responseType || "blob" == w8.responseType) C8 = w8.response;
									else {
										C8 = w8.responseText;
										try {
											C8 = function(t, e, n) {
												if (n.dataFilter == i7) return t;
												var i = n.context;
												return n.dataFilter.call(i, t, e)
											}(C8, q8, m8), "script" == q8 ? eval(C8) : "xml" == q8 ? C8 = w8.responseXML : "json" == q8 && (C8 = Z6.test(C8) ? null : P6.parseJSON(C8))
										} catch (t) {
											D8 = t
										}
										if (D8) return f7(D8, "parsererror", w8, m8, n8)
									}
									e7(C8, w8, m8, n8)
								} else f7(w8.statusText || null, w8.status ? "error" : "abort", w8, m8, n8)
							}
							var h8
						}) === d7(w8, m8)) return w8.abort(), f7(null, "abort", w8, m8, n8), w8;
					var z8 = !("async" in m8) || m8.async;
					if (w8.open(m8.type, m8.url, z8, m8.username, m8.password), m8.xhrFields)
						for (T6 in m8.xhrFields) w8[T6] = m8.xhrFields[T6];
					for (T6 in t8) x8.apply(w8, t8[T6]);
					return 0 < m8.timeout && (y8 = setTimeout(function() {
						w8.onreadystatechange = i7, w8.abort(), f7(null, "timeout", w8, m8, n8)
					}, m8.timeout)), w8.send(m8.data ? m8.data : null), w8
				}, P6.get = function() {
					return P6.ajax(m7.apply(null, arguments))
				}, P6.post = function() {
					var t = m7.apply(null, arguments);
					return t.type = "POST", P6.ajax(t)
				}, P6.getJSON = function() {
					var t = m7.apply(null, arguments);
					return t.dataType = "json", P6.ajax(t)
				}, P6.fn.load = function(t, e, n) {
					if (!this.length) return this;
					var i, r = this,
						o = t.split(/\s/),
						a = m7(t, e, n),
						s = a.success;
					return 1 < o.length && (a.url = o[0], i = o[1]), a.success = function(t) {
						r.html(i ? P6("<div>").html(t.replace(U6, "")).find(i) : t), s && s.apply(r, arguments)
					}, P6.ajax(a), this
				};
				var n7 = encodeURIComponent;
				P6.param = function(t, e) {
					var n = [];
					return n.add = function(t, e) {
							P6.isFunction(e) && (e = e()), null == e && (e = ""), this.push(n7(t) + "=" + n7(e))
						},
						function n(i, t, r, o) {
							var a, s = P6.isArray(t),
								l = P6.isPlainObject(t);
							P6.each(t, function(t, e) {
								a = P6.type(e), o && (t = r ? o : o + "[" + (l || "object" == a || "array" == a ? t : "") + "]"), !o && s ? i.add(e.name, e.value) : "array" == a || !r && "object" == a ? n(i, e, r, t) : i.add(t, e)
							})
						}(n, t, e), n.join("&").replace(/%20/g, "+")
				}
			}(R0), (g9 = R0).Callbacks = function(i) {
				i = g9.extend({}, i);
				var e, n, r, o, a, s, l = [],
					u = !i.once && [],
					c = function(t) {
						for (e = i.memory && t, n = !0, s = o || 0, o = 0, a = l.length, r = !0; l && s < a; ++s)
							if (!1 === l[s].apply(t[0], t[1]) && i.stopOnFalse) {
								e = !1;
								break
							} r = !1, l && (u ? u.length && c(u.shift()) : e ? l.length = 0 : d.disable())
					},
					d = {
						add: function() {
							if (l) {
								var t = l.length,
									n = function(t) {
										g9.each(t, function(t, e) {
											"function" == typeof e ? i.unique && d.has(e) || l.push(e) : e && e.length && "string" != typeof e && n(e)
										})
									};
								n(arguments), r ? a = l.length : e && (o = t, c(e))
							}
							return this
						},
						remove: function() {
							return l && g9.each(arguments, function(t, e) {
								for (var n; - 1 < (n = g9.inArray(e, l, n));) l.splice(n, 1), r && (n <= a && --a, n <= s && --s)
							}), this
						},
						has: function(t) {
							return !(!l || !(t ? -1 < g9.inArray(t, l) : l.length))
						},
						empty: function() {
							return a = l.length = 0, this
						},
						disable: function() {
							return l = u = e = void 0, this
						},
						disabled: function() {
							return !l
						},
						lock: function() {
							return u = void 0, e || d.disable(), this
						},
						locked: function() {
							return !u
						},
						fireWith: function(t, e) {
							return !l || n && !u || (e = [t, (e = e || []).slice ? e.slice() : e], r ? u.push(e) : c(e)), this
						},
						fire: function() {
							return d.fireWith(this, arguments)
						},
						fired: function() {
							return !!n
						}
					};
				return d
			},
			function(c) {
				var d = Array.prototype.slice;

				function h(t) {
					var r = [
							["resolve", "done", c.Callbacks({
								once: 1,
								memory: 1
							}), "resolved"],
							["reject", "fail", c.Callbacks({
								once: 1,
								memory: 1
							}), "rejected"],
							["notify", "progress", c.Callbacks({
								memory: 1
							})]
						],
						o = "pending",
						a = {
							state: function() {
								return o
							},
							always: function() {
								return s.done(arguments).fail(arguments), this
							},
							then: function() {
								var e = arguments;
								return h(function(o) {
									c.each(r, function(t, i) {
										var r = c.isFunction(e[t]) && e[t];
										s[i[1]](function() {
											var t = r && r.apply(this, arguments);
											if (t && c.isFunction(t.promise)) t.promise().done(o.resolve).fail(o.reject).progress(o.notify);
											else {
												var e = this === a ? o.promise() : this,
													n = r ? [t] : arguments;
												o[i[0] + "With"](e, n)
											}
										})
									}), e = null
								}).promise()
							},
							promise: function(t) {
								return null != t ? c.extend(t, a) : a
							}
						},
						s = {};
					return c.each(r, function(t, e) {
						var n = e[2],
							i = e[3];
						a[e[1]] = n.add, i && n.add(function() {
							o = i
						}, r[1 ^ t][2].disable, r[2][2].lock), s[e[0]] = function() {
							return s[e[0] + "With"](this === s ? a : this, arguments), this
						}, s[e[0] + "With"] = n.fireWith
					}), a.promise(s), t && t.call(s, s), s
				}
				c.when = function(t) {
					var r, e, n, i = d.call(arguments),
						o = i.length,
						a = 0,
						s = 1 !== o || t && c.isFunction(t.promise) ? o : 0,
						l = 1 === s ? t : h(),
						u = function(e, n, i) {
							return function(t) {
								n[e] = this, i[e] = 1 < arguments.length ? d.call(arguments) : t, i === r ? l.notifyWith(n, i) : --s || l.resolveWith(n, i)
							}
						};
					if (1 < o)
						for (r = new Array(o), e = new Array(o), n = new Array(o); a < o; ++a) i[a] && c.isFunction(i[a].promise) ? i[a].promise().done(u(a, n, i)).fail(l.reject).progress(u(a, e, r)) : --s;
					return s || l.resolveWith(n, i), l.promise()
				}, c.Deferred = h
			}(R0),
			function(c) {
				var d, e = 1,
					u = Array.prototype.slice,
					h = c.isFunction,
					f = function(t) {
						return "string" == typeof t
					},
					p = {},
					o = {},
					n = "onfocusin" in window,
					i = {
						focus: "focusin",
						blur: "focusout"
					},
					g = {
						mouseenter: "mouseover",
						mouseleave: "mouseout"
					};

				function m(t) {
					return t._zid || (t._zid = e++)
				}

				function a(t, e, n, i) {
					if ((e = y(e)).ns) var r = (o = e.ns, new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)"));
					var o;
					return (p[m(t)] || []).filter(function(t) {
						return t && (!e.e || t.e == e.e) && (!e.ns || r.test(t.ns)) && (!n || m(t.fn) === m(n)) && (!i || t.sel == i)
					})
				}

				function y(t) {
					var e = ("" + t).split(".");
					return {
						e: e[0],
						ns: e.slice(1).sort().join(" ")
					}
				}

				function v(t, e) {
					return t.del && !n && t.e in i || !!e
				}

				function A(t) {
					return g[t] || n && i[t] || t
				}

				function b(r, t, e, o, a, s, l) {
					var n = m(r),
						u = p[n] || (p[n] = []);
					t.split(/\s/).forEach(function(t) {
						if ("ready" == t) return c(document).ready(e);
						var n = y(t);
						n.fn = e, n.sel = a, n.e in g && (e = function(t) {
							var e = t.relatedTarget;
							if (!e || e !== this && !c.contains(this, e)) return n.fn.apply(this, arguments)
						});
						var i = (n.del = s) || e;
						n.proxy = function(t) {
							if (!(t = T(t)).isImmediatePropagationStopped()) {
								t.data = o;
								var e = i.apply(r, t._args == d ? [t] : [t].concat(t._args));
								return !1 === e && (t.preventDefault(), t.stopPropagation()), e
							}
						}, n.i = u.length, u.push(n), "addEventListener" in r && r.addEventListener(A(n.e), n.proxy, v(n, l))
					})
				}

				function _(e, t, n, i, r) {
					var o = m(e);
					(t || "").split(/\s/).forEach(function(t) {
						a(e, t, n, i).forEach(function(t) {
							delete p[o][t.i], "removeEventListener" in e && e.removeEventListener(A(t.e), t.proxy, v(t, r))
						})
					})
				}
				o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", c.event = {
					add: b,
					remove: _
				}, c.proxy = function(t, e) {
					var n = 2 in arguments && u.call(arguments, 2);
					if (h(t)) {
						var i = function() {
							return t.apply(e, n ? n.concat(u.call(arguments)) : arguments)
						};
						return i._zid = m(t), i
					}
					if (f(e)) return n ? (n.unshift(t[e], t), c.proxy.apply(null, n)) : c.proxy(t[e], t);
					throw new TypeError("expected function")
				}, c.fn.bind = function(t, e, n) {
					return this.on(t, e, n)
				}, c.fn.unbind = function(t, e) {
					return this.off(t, e)
				}, c.fn.one = function(t, e, n, i) {
					return this.on(t, e, n, i, 1)
				};
				var s = function() {
						return !0
					},
					E = function() {
						return !1
					},
					r = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
					t = {
						preventDefault: "isDefaultPrevented",
						stopImmediatePropagation: "isImmediatePropagationStopped",
						stopPropagation: "isPropagationStopped"
					};

				function T(i, r) {
					return !r && i.isDefaultPrevented || (r || (r = i), c.each(t, function(t, e) {
						var n = r[t];
						i[t] = function() {
							return this[e] = s, n && n.apply(r, arguments)
						}, i[e] = E
					}), i.timeStamp || (i.timeStamp = Date.now()), (r.defaultPrevented !== d ? r.defaultPrevented : "returnValue" in r ? !1 === r.returnValue : r.getPreventDefault && r.getPreventDefault()) && (i.isDefaultPrevented = s)), i
				}

				function S(t) {
					var e, n = {
						originalEvent: t
					};
					for (e in t) r.test(e) || t[e] === d || (n[e] = t[e]);
					return T(n, t)
				}
				c.fn.delegate = function(t, e, n) {
					return this.on(e, t, n)
				}, c.fn.undelegate = function(t, e, n) {
					return this.off(e, t, n)
				}, c.fn.live = function(t, e) {
					return c(document.body).delegate(this.selector, t, e), this
				}, c.fn.die = function(t, e) {
					return c(document.body).undelegate(this.selector, t, e), this
				}, c.fn.on = function(e, r, n, o, a) {
					var s, l, i = this;
					return e && !f(e) ? (c.each(e, function(t, e) {
						i.on(t, r, n, e, a)
					}), i) : (f(r) || h(o) || !1 === o || (o = n, n = r, r = d), o !== d && !1 !== n || (o = n, n = d), !1 === o && (o = E), i.each(function(t, i) {
						a && (s = function(t) {
							return _(i, t.type, o), o.apply(this, arguments)
						}), r && (l = function(t) {
							var e, n = c(t.target).closest(r, i).get(0);
							if (n && n !== i) return e = c.extend(S(t), {
								currentTarget: n,
								liveFired: i
							}), (s || o).apply(n, [e].concat(u.call(arguments, 1)))
						}), b(i, e, o, n, r, l || s)
					}))
				}, c.fn.off = function(t, n, e) {
					var i = this;
					return t && !f(t) ? (c.each(t, function(t, e) {
						i.off(t, n, e)
					}), i) : (f(n) || h(e) || !1 === e || (e = n, n = d), !1 === e && (e = E), i.each(function() {
						_(this, t, e, n)
					}))
				}, c.fn.trigger = function(t, e) {
					return (t = f(t) || c.isPlainObject(t) ? c.Event(t) : T(t))._args = e, this.each(function() {
						t.type in i && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : c(this).triggerHandler(t, e)
					})
				}, c.fn.triggerHandler = function(n, i) {
					var r, o;
					return this.each(function(t, e) {
						(r = S(f(n) ? c.Event(n) : n))._args = i, r.target = e, c.each(a(e, n.type || n), function(t, e) {
							if (o = e.proxy(r), r.isImmediatePropagationStopped()) return !1
						})
					}), o
				}, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
					c.fn[e] = function(t) {
						return 0 in arguments ? this.bind(e, t) : this.trigger(e)
					}
				}), c.Event = function(t, e) {
					f(t) || (t = (e = t).type);
					var n = document.createEvent(o[t] || "Events"),
						i = !0;
					if (e)
						for (var r in e) "bubbles" == r ? i = !!e[r] : n[r] = e[r];
					return n.initEvent(t, i, !0), T(n)
				}
			}(R0),
			function() {
				try {
					getComputedStyle(void 0)
				} catch (t) {
					var n = getComputedStyle;
					window.getComputedStyle = function(t, e) {
						try {
							return n(t, e)
						} catch (t) {
							return null
						}
					}
				}
			}(),
			function(s) {
				var l = s.zepto,
					u = l.qsa,
					r = l.matches;

				function t(t) {
					return !(!(t = s(t)).width() && !t.height()) && "none" !== t.css("display")
				}
				var a = s.expr[":"] = {
						visible: function() {
							if (t(this)) return this
						},
						hidden: function() {
							if (!t(this)) return this
						},
						selected: function() {
							if (this.selected) return this
						},
						checked: function() {
							if (this.checked) return this
						},
						parent: function() {
							return this.parentNode
						},
						first: function(t) {
							if (0 === t) return this
						},
						last: function(t, e) {
							if (t === e.length - 1) return this
						},
						eq: function(t, e, n) {
							if (t === n) return this
						},
						contains: function(t, e, n) {
							if (-1 < s(this).text().indexOf(n)) return this
						},
						has: function(t, e, n) {
							if (l.qsa(this, n).length) return this
						}
					},
					c = new RegExp("(.*):(\\w+)(?:\\(([^)]+)\\))?$\\s*"),
					d = /^\s*>/,
					h = "Zepto" + +new Date;

				function e(t, e) {
					t = t.replace(/=#\]/g, '="#"]');
					var n, i, r = c.exec(t);
					if (r && r[2] in a && (n = a[r[2]], i = r[3], t = r[1], i)) {
						var o = Number(i);
						i = isNaN(o) ? i.replace(/^["']|["']$/g, "") : o
					}
					return e(t, n, i)
				}
				l.qsa = function(o, a) {
					return e(a, function(t, n, i) {
						try {
							var e;
							!t && n ? t = "*" : d.test(t) && (e = s(o).addClass(h), t = "." + h + " " + t);
							var r = u(o, t)
						} catch (t) {
							throw console.error("error performing selector: %o", a), t
						} finally {
							e && e.removeClass(h)
						}
						return n ? l.uniq(s.map(r, function(t, e) {
							return n.call(t, e, r, i)
						})) : r
					})
				}, l.matches = function(i, t) {
					return e(t, function(t, e, n) {
						return (!t || r(i, t)) && (!e || e.call(i, null, n) === i)
					})
				}
			}(R0), P0.exports = R0
	}, function(t, e) {
		t.exports = function(n) {
			var a = [];
			return a.toString = function() {
				return this.map(function(t) {
					var e = function(t, e) {
						var n = t[1] || "",
							i = t[3];
						if (!i) return n;
						if (e && "function" == typeof btoa) {
							var r = (a = i, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
								o = i.sources.map(function(t) {
									return "/*# sourceURL=" + i.sourceRoot + t + " */"
								});
							return [n].concat(o).concat([r]).join("\n")
						}
						var a;
						return [n].join("\n")
					}(t, n);
					return t[2] ? "@media " + t[2] + "{" + e + "}" : e
				}).join("")
			}, a.i = function(t, e) {
				"string" == typeof t && (t = [
					[null, t, ""]
				]);
				for (var n = {}, i = 0; i < this.length; i++) {
					var r = this[i][0];
					"number" == typeof r && (n[r] = !0)
				}
				for (i = 0; i < t.length; i++) {
					var o = t[i];
					"number" == typeof o[0] && n[o[0]] || (e && !o[2] ? o[2] = e : e && (o[2] = "(" + o[2] + ") and (" + e + ")"), a.push(o))
				}
			}, a
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			},
			l = /(.)^/,
			u = {
				"'": "'",
				"\\": "\\",
				"\r": "r",
				"\n": "n",
				"\t": "t",
				"\u2028": "u2028",
				"\u2029": "u2029"
			},
			c = /\\|'|\r|\n|\t|\u2028|\u2029/g,
			i = {
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#x27;"
			},
			o = new RegExp("[&<>\"']", "g"),
			d = function(t) {
				return null === t ? "" : ("" + t).replace(o, function(t) {
					return i[t]
				})
			},
			h = 0,
			a = function(o, t) {
				var e, n = new RegExp([(r.escape || l).source, (r.interpolate || l).source, (r.evaluate || l).source].join("|") + "|$", "g"),
					a = 0,
					s = "__p+='";
				o.replace(n, function(t, e, n, i, r) {
					return s += o.slice(a, r).replace(c, function(t) {
						return "\\" + u[t]
					}), e && (s += "'+\n((__t=(" + e + "))==null?'':escapeExpr(__t))+\n'"), n && (s += "'+\n((__t=(" + n + "))==null?'':__t)+\n'"), i && (s += "';\n" + i + "\n__p+='"), a = r + t.length, t
				}), s += "';\n", r.variable || (s = "with(obj||{}){\n" + s + "}\n"), s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n//# sourceURL=/microtemplates/source[" + h++ + "]";
				try {
					e = new Function(r.variable || "obj", "escapeExpr", s)
				} catch (t) {
					throw t.source = s, t
				}
				if (t) return e(t, d);
				var i = function(t) {
					return e.call(this, t, d)
				};
				return i.source = "function(" + (r.variable || "obj") + "){\n" + s + "}", i
			};
		a.settings = r, e.default = a, t.exports = e.default
	}, function(t, e, n) {
		var i, r, o, l = {},
			u = (i = function() {
				return window && document && document.all && !window.atob
			}, function() {
				return void 0 === r && (r = i.apply(this, arguments)), r
			}),
			a = (o = {}, function(t) {
				if ("function" == typeof t) return t();
				if (void 0 === o[t]) {
					var e = function(t) {
						return document.querySelector(t)
					}.call(this, t);
					if (window.HTMLIFrameElement && e instanceof window.HTMLIFrameElement) try {
						e = e.contentDocument.head
					} catch (t) {
						e = null
					}
					o[t] = e
				}
				return o[t]
			}),
			c = null,
			d = 0,
			s = [],
			h = n(158);

		function f(t, e) {
			for (var n = 0; n < t.length; n++) {
				var i = t[n],
					r = l[i.id];
				if (r) {
					r.refs++;
					for (var o = 0; o < r.parts.length; o++) r.parts[o](i.parts[o]);
					for (; o < i.parts.length; o++) r.parts.push(A(i.parts[o], e))
				} else {
					var a = [];
					for (o = 0; o < i.parts.length; o++) a.push(A(i.parts[o], e));
					l[i.id] = {
						id: i.id,
						refs: 1,
						parts: a
					}
				}
			}
		}

		function p(t, e) {
			for (var n = [], i = {}, r = 0; r < t.length; r++) {
				var o = t[r],
					a = e.base ? o[0] + e.base : o[0],
					s = {
						css: o[1],
						media: o[2],
						sourceMap: o[3]
					};
				i[a] ? i[a].parts.push(s) : n.push(i[a] = {
					id: a,
					parts: [s]
				})
			}
			return n
		}

		function g(t, e) {
			var n = a(t.insertInto);
			if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
			var i = s[s.length - 1];
			if ("top" === t.insertAt) i ? i.nextSibling ? n.insertBefore(e, i.nextSibling) : n.appendChild(e) : n.insertBefore(e, n.firstChild), s.push(e);
			else if ("bottom" === t.insertAt) n.appendChild(e);
			else {
				if ("object" != typeof t.insertAt || !t.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
				var r = a(t.insertInto + " " + t.insertAt.before);
				n.insertBefore(e, r)
			}
		}

		function m(t) {
			if (null === t.parentNode) return !1;
			t.parentNode.removeChild(t);
			var e = s.indexOf(t);
			0 <= e && s.splice(e, 1)
		}

		function y(t) {
			var e = document.createElement("style");
			return t.attrs.type = "text/css", v(e, t.attrs), g(t, e), e
		}

		function v(e, n) {
			Object.keys(n).forEach(function(t) {
				e.setAttribute(t, n[t])
			})
		}

		function A(e, t) {
			var n, i, r, o, a, s;
			if (t.transform && e.css) {
				if (!(o = t.transform(e.css))) return function() {};
				e.css = o
			}
			if (t.singleton) {
				var l = d++;
				n = c || (c = y(t)), i = E.bind(null, n, l, !1), r = E.bind(null, n, l, !0)
			} else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (a = t, s = document.createElement("link"), a.attrs.type = "text/css", a.attrs.rel = "stylesheet", v(s, a.attrs), g(a, s), i = function(t, e, n) {
				var i = n.css,
					r = n.sourceMap,
					o = void 0 === e.convertToAbsoluteUrls && r;
				(e.convertToAbsoluteUrls || o) && (i = h(i));
				r && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
				var a = new Blob([i], {
						type: "text/css"
					}),
					s = t.href;
				t.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
			}.bind(null, n = s, t), r = function() {
				m(n), n.href && URL.revokeObjectURL(n.href)
			}) : (n = y(t), i = function(t, e) {
				var n = e.css,
					i = e.media;
				i && t.setAttribute("media", i);
				if (t.styleSheet) t.styleSheet.cssText = n;
				else {
					for (; t.firstChild;) t.removeChild(t.firstChild);
					t.appendChild(document.createTextNode(n))
				}
			}.bind(null, n), r = function() {
				m(n)
			});
			return i(e),
				function(t) {
					if (t) {
						if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
						i(e = t)
					} else r()
				}
		}
		t.exports = function(t, a) {
			if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
			(a = a || {}).attrs = "object" == typeof a.attrs ? a.attrs : {}, a.singleton || "boolean" == typeof a.singleton || (a.singleton = u()), a.insertInto || (a.insertInto = "head"), a.insertAt || (a.insertAt = "bottom");
			var s = p(t, a);
			return f(s, a),
				function(t) {
					for (var e = [], n = 0; n < s.length; n++) {
						var i = s[n];
						(r = l[i.id]).refs--, e.push(r)
					}
					t && f(p(t, a), a);
					for (n = 0; n < e.length; n++) {
						var r;
						if (0 === (r = e[n]).refs) {
							for (var o = 0; o < r.parts.length; o++) r.parts[o]();
							delete l[r.id]
						}
					}
				}
		};
		var b, _ = (b = [], function(t, e) {
			return b[t] = e, b.filter(Boolean).join("\n")
		});

		function E(t, e, n, i) {
			var r = n ? "" : i.css;
			if (t.styleSheet) t.styleSheet.cssText = _(e, r);
			else {
				var o = document.createTextNode(r),
					a = t.childNodes;
				a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o)
			}
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = h(n(12)),
			a = h(n(0)),
			s = h(n(1)),
			l = h(n(3)),
			u = h(n(2)),
			r = n(5),
			o = h(n(23)),
			c = h(n(20)),
			d = h(n(6));

		function h(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var f = function(r) {
			function o(t, e, n) {
				(0, a.default)(this, o);
				var i = (0, s.default)(this, r.call(this, t));
				return i.settings = {}, i._i18n = e, i.playerError = n, i._consented = !1, i
			}
			return (0, u.default)(o, r), (0, l.default)(o, [{
				key: "isAudioOnly",
				get: function() {
					return !1
				}
			}, {
				key: "isAdaptive",
				get: function() {
					return !1
				}
			}, {
				key: "ended",
				get: function() {
					return !1
				}
			}, {
				key: "i18n",
				get: function() {
					return this._i18n
				}
			}, {
				key: "buffering",
				get: function() {
					return !1
				}
			}, {
				key: "consented",
				get: function() {
					return this._consented
				}
			}]), o.prototype.consent = function() {
				this._consented = !0
			}, o.prototype.play = function() {}, o.prototype.pause = function() {}, o.prototype.stop = function() {}, o.prototype.seek = function(t) {}, o.prototype.seekPercentage = function(t) {}, o.prototype.getStartTimeOffset = function() {
				return 0
			}, o.prototype.getDuration = function() {
				return 0
			}, o.prototype.isPlaying = function() {
				return !1
			}, o.prototype.getPlaybackType = function() {
				return o.NO_OP
			}, o.prototype.isHighDefinitionInUse = function() {
				return !1
			}, o.prototype.volume = function(t) {}, o.prototype.configure = function(t) {
				this._options = d.default.extend(this._options, t)
			}, o.prototype.destroy = function() {
				this.remove()
			}, o.prototype.attemptAutoPlay = function() {
				var n = this;
				this.canAutoPlay(function(t, e) {
					t && n.play()
				})
			}, o.prototype.canAutoPlay = function(t) {
				t(!0, null)
			}, (0, l.default)(o, [{
				key: "isReady",
				get: function() {
					return !1
				}
			}, {
				key: "hasClosedCaptionsTracks",
				get: function() {
					return 0 < this.closedCaptionsTracks.length
				}
			}, {
				key: "closedCaptionsTracks",
				get: function() {
					return []
				}
			}, {
				key: "closedCaptionsTrackId",
				get: function() {
					return -1
				},
				set: function(t) {}
			}]), o
		}(o.default);
		e.default = f, (0, i.default)(f.prototype, c.default), f.extend = function(t) {
			return (0, r.extend)(f, t)
		}, f.canPlay = function(t, e) {
			return !1
		}, f.VOD = "vod", f.AOD = "aod", f.LIVE = "live", f.NO_OP = "no_op", f.type = "playback", t.exports = e.default
	}, function(t, e) {
		var n = t.exports = {
			version: "2.4.0"
		};
		"number" == typeof __e && (__e = n)
	}, function(t, e, n) {
		t.exports = {
			default: n(102),
			__esModule: !0
		}
	}, function(t, e, n) {
		var i = n(50)("wks"),
			r = n(36),
			o = n(17).Symbol,
			a = "function" == typeof o;
		(t.exports = function(t) {
			return i[t] || (i[t] = a && o[t] || (a ? o : r)("Symbol." + t))
		}).store = i
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(144),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = i(n(0)),
			o = i(n(1)),
			a = i(n(3)),
			s = i(n(2)),
			l = n(5);

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var u = function(n) {
			function i() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e._options = t, e.uniqueId = (0, l.uniqueId)("o"), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "options",
				get: function() {
					return this._options
				}
			}]), i
		}(i(n(4)).default);
		e.default = u, t.exports = e.default
	}, function(t, e, n) {
		var g = n(17),
			m = n(11),
			y = n(44),
			v = n(25),
			A = "prototype",
			b = function(t, e, n) {
				var i, r, o, a = t & b.F,
					s = t & b.G,
					l = t & b.S,
					u = t & b.P,
					c = t & b.B,
					d = t & b.W,
					h = s ? m : m[e] || (m[e] = {}),
					f = h[A],
					p = s ? g : l ? g[e] : (g[e] || {})[A];
				for (i in s && (n = e), n)(r = !a && p && void 0 !== p[i]) && i in h || (o = r ? p[i] : n[i], h[i] = s && "function" != typeof p[i] ? n[i] : c && r ? y(o, g) : d && p[i] == o ? function(i) {
					var t = function(t, e, n) {
						if (this instanceof i) {
							switch (arguments.length) {
								case 0:
									return new i;
								case 1:
									return new i(t);
								case 2:
									return new i(t, e)
							}
							return new i(t, e, n)
						}
						return i.apply(this, arguments)
					};
					return t[A] = i[A], t
				}(o) : u && "function" == typeof o ? y(Function.call, o) : o, u && ((h.virtual || (h.virtual = {}))[i] = o, t & b.R && f && !f[i] && v(f, i, o)))
			};
		b.F = 1, b.G = 2, b.S = 4, b.P = 8, b.B = 16, b.W = 32, b.U = 64, b.R = 128, t.exports = b
	}, function(t, e) {
		var n = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
		"number" == typeof __g && (__g = n)
	}, function(t, e, n) {
		var i = n(26),
			r = n(65),
			o = n(45),
			a = Object.defineProperty;
		e.f = n(21) ? Object.defineProperty : function(t, e, n) {
			if (i(t), e = o(e, !0), i(n), r) try {
				return a(t, e, n)
			} catch (t) {}
			if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
			return "value" in n && (t[e] = n.value), t
		}
	}, function(t, e, n) {
		var i = n(68),
			r = n(47);
		t.exports = function(t) {
			return i(r(t))
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var u = i(n(12)),
			c = i(n(29)),
			d = i(n(24));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var r = {
			createError: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
						useCodePrefix: !0
					},
					n = this.constructor && this.constructor.type || "",
					i = this.name || n,
					r = this.i18n || this.core && this.core.i18n || this.container && this.container.i18n,
					o = i + ":" + (t && t.code || "unknown"),
					a = {
						description: "",
						level: d.default.Levels.FATAL,
						origin: i,
						scope: n,
						raw: {}
					},
					s = (0, u.default)({}, a, t, {
						code: e.useCodePrefix ? o : t.code
					});
				if (r && s.level == d.default.Levels.FATAL && !s.UI) {
					var l = {
						title: r.t("default_error_title"),
						message: r.t("default_error_message")
					};
					s.UI = l
				}
				return this.playerError ? this.playerError.createError(s) : c.default.warn(i, "PlayerError is not defined. Error: ", s), s
			}
		};
		e.default = r, t.exports = e.default
	}, function(t, e, n) {
		t.exports = !n(27)(function() {
			return 7 != Object.defineProperty({}, "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e) {
		var n = {}.hasOwnProperty;
		t.exports = function(t, e) {
			return n.call(t, e)
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = c(n(0)),
			o = c(n(1)),
			a = c(n(3)),
			s = c(n(2)),
			l = c(n(6)),
			u = n(5),
			i = c(n(15));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var d = /^(\S+)\s*(.*)$/,
			h = function(n) {
				function i(t) {
					(0, r.default)(this, i);
					var e = (0, o.default)(this, n.call(this, t));
					return e.cid = (0, u.uniqueId)("c"), e._ensureElement(), e.delegateEvents(), e
				}
				return (0, s.default)(i, n), (0, a.default)(i, [{
					key: "tagName",
					get: function() {
						return "div"
					}
				}, {
					key: "events",
					get: function() {
						return {}
					}
				}, {
					key: "attributes",
					get: function() {
						return {}
					}
				}]), i.prototype.$ = function(t) {
					return this.$el.find(t)
				}, i.prototype.render = function() {
					return this
				}, i.prototype.remove = function() {
					return this.$el.remove(), this.stopListening(), this.undelegateEvents(), this
				}, i.prototype.setElement = function(t, e) {
					return this.$el && this.undelegateEvents(), this.$el = l.default.zepto.isZ(t) ? t : (0, l.default)(t), this.el = this.$el[0], !1 !== e && this.delegateEvents(), this
				}, i.prototype.delegateEvents = function(t) {
					if (!t && !(t = this.events)) return this;
					for (var e in this.undelegateEvents(), t) {
						var n = t[e];
						if (n && n.constructor !== Function && (n = this[t[e]]), n) {
							var i = e.match(d),
								r = i[1],
								o = i[2];
							r += ".delegateEvents" + this.cid, "" === o ? this.$el.on(r, n.bind(this)) : this.$el.on(r, o, n.bind(this))
						}
					}
					return this
				}, i.prototype.undelegateEvents = function() {
					return this.$el.off(".delegateEvents" + this.cid), this
				}, i.prototype._ensureElement = function() {
					if (this.el) this.setElement(this.el, !1);
					else {
						var t = l.default.extend({}, this.attributes);
						this.id && (t.id = this.id), this.className && (t.class = this.className);
						var e = u.DomRecycler.create(this.tagName).attr(t);
						this.setElement(e, !1)
					}
				}, i
			}(i.default);
		e.default = h, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(79),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		var i = n(18),
			r = n(32);
		t.exports = n(21) ? function(t, e, n) {
			return i.f(t, e, r(1, n))
		} : function(t, e, n) {
			return t[e] = n, t
		}
	}, function(t, e, n) {
		var i = n(31);
		t.exports = function(t) {
			if (!i(t)) throw TypeError(t + " is not an object!");
			return t
		}
	}, function(t, e) {
		t.exports = function(t) {
			try {
				return !!t()
			} catch (t) {
				return !0
			}
		}
	}, function(t, e, n) {
		var i = n(67),
			r = n(51);
		t.exports = Object.keys || function(t) {
			return i(t, r)
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(148),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = r(n(0));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var o = new(r(n(4)).default),
			a = function t() {
				(0, i.default)(this, t)
			};
		(e.default = a).on = function(t, e, n) {
			o.on(t, e, n)
		}, a.once = function(t, e, n) {
			o.once(t, e, n)
		}, a.off = function(t, e, n) {
			o.off(t, e, n)
		}, a.trigger = function(t) {
			for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
			o.trigger.apply(o, [t].concat(n))
		}, a.stopListening = function(t, e, n) {
			o.stopListening(t, e, n)
		}, t.exports = e.default
	}, function(t, e) {
		t.exports = function(t) {
			return "object" == typeof t ? null !== t : "function" == typeof t
		}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				enumerable: !(1 & t),
				configurable: !(2 & t),
				writable: !(4 & t),
				value: e
			}
		}
	}, function(t, e) {
		t.exports = {}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = d(n(12)),
			r = d(n(0)),
			o = d(n(1)),
			a = d(n(3)),
			s = d(n(2)),
			l = n(5),
			u = d(n(23)),
			c = d(n(20));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var h = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t.options));
				return e.core = t, e.enabled = !0, e.bindEvents(), e.render(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "playerError",
				get: function() {
					return this.core.playerError
				}
			}]), i.prototype.bindEvents = function() {}, i.prototype.getExternalInterface = function() {
				return {}
			}, i.prototype.enable = function() {
				this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
			}, i.prototype.disable = function() {
				this.stopListening(), this.$el.hide(), this.enabled = !1
			}, i.prototype.destroy = function() {
				this.remove()
			}, i.prototype.render = function() {
				return this
			}, i
		}(u.default);
		e.default = h, (0, i.default)(h.prototype, c.default), h.extend = function(t) {
			return (0, l.extend)(h, t)
		}, h.type = "core", t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = d(n(12)),
			r = d(n(0)),
			o = d(n(1)),
			a = d(n(3)),
			s = d(n(2)),
			l = n(5),
			u = d(n(15)),
			c = d(n(20));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var h = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t.options));
				return e.core = t, e.enabled = !0, e.bindEvents(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "playerError",
				get: function() {
					return this.core.playerError
				}
			}]), i.prototype.bindEvents = function() {}, i.prototype.enable = function() {
				this.enabled || (this.bindEvents(), this.enabled = !0)
			}, i.prototype.disable = function() {
				this.enabled && (this.stopListening(), this.enabled = !1)
			}, i.prototype.getExternalInterface = function() {
				return {}
			}, i.prototype.destroy = function() {
				this.stopListening()
			}, i
		}(u.default);
		e.default = h, (0, i.default)(h.prototype, c.default), h.extend = function(t) {
			return (0, l.extend)(h, t)
		}, h.type = "core", t.exports = e.default
	}, function(t, e) {
		var n = 0,
			i = Math.random();
		t.exports = function(t) {
			return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + i).toString(36))
		}
	}, function(t, e) {
		e.f = {}.propertyIsEnumerable
	}, function(t, e, n) {
		var i = n(47);
		t.exports = function(t) {
			return Object(i(t))
		}
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i = a(n(110)),
			r = a(n(121)),
			o = "function" == typeof r.default && "symbol" == typeof i.default ? function(t) {
				return typeof t
			} : function(t) {
				return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : typeof t
			};

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = "function" == typeof r.default && "symbol" === o(i.default) ? function(t) {
			return void 0 === t ? "undefined" : o(t)
		} : function(t) {
			return t && "function" == typeof r.default && t.constructor === r.default && t !== r.default.prototype ? "symbol" : void 0 === t ? "undefined" : o(t)
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(0),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		var a = function t() {
			(0, o.default)(this, t), this.options = {}, this.playbackPlugins = [], this.currentSize = {
				width: 0,
				height: 0
			}
		};
		a._players = {}, a.getInstance = function(t) {
			return a._players[t] || (a._players[t] = new a)
		}, e.default = a, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(183),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = d(n(12)),
			r = d(n(0)),
			o = d(n(1)),
			a = d(n(3)),
			s = d(n(2)),
			l = n(5),
			u = d(n(23)),
			c = d(n(20));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var h = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t.options));
				return e.container = t, e.enabled = !0, e.bindEvents(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "playerError",
				get: function() {
					return this.container.playerError
				}
			}]), i.prototype.enable = function() {
				this.enabled || (this.bindEvents(), this.$el.show(), this.enabled = !0)
			}, i.prototype.disable = function() {
				this.stopListening(), this.$el.hide(), this.enabled = !1
			}, i.prototype.bindEvents = function() {}, i.prototype.destroy = function() {
				this.remove()
			}, i
		}(u.default);
		e.default = h, (0, i.default)(h.prototype, c.default), h.extend = function(t) {
			return (0, l.extend)(h, t)
		}, h.type = "container", t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = d(n(12)),
			r = d(n(0)),
			o = d(n(1)),
			a = d(n(3)),
			s = d(n(2)),
			l = d(n(15)),
			u = n(5),
			c = d(n(20));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var h = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t.options));
				return e.container = t, e.enabled = !0, e.bindEvents(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "playerError",
				get: function() {
					return this.container.playerError
				}
			}]), i.prototype.enable = function() {
				this.enabled || (this.bindEvents(), this.enabled = !0)
			}, i.prototype.disable = function() {
				this.enabled && (this.stopListening(), this.enabled = !1)
			}, i.prototype.bindEvents = function() {}, i.prototype.destroy = function() {
				this.stopListening()
			}, i
		}(l.default);
		e.default = h, (0, i.default)(h.prototype, c.default), h.extend = function(t) {
			return (0, u.extend)(h, t)
		}, h.type = "container", t.exports = e.default
	}, function(t, e, n) {
		var o = n(104);
		t.exports = function(i, r, t) {
			if (o(i), void 0 === r) return i;
			switch (t) {
				case 1:
					return function(t) {
						return i.call(r, t)
					};
				case 2:
					return function(t, e) {
						return i.call(r, t, e)
					};
				case 3:
					return function(t, e, n) {
						return i.call(r, t, e, n)
					}
			}
			return function() {
				return i.apply(r, arguments)
			}
		}
	}, function(t, e, n) {
		var r = n(31);
		t.exports = function(t, e) {
			if (!r(t)) return t;
			var n, i;
			if (e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
			if ("function" == typeof(n = t.valueOf) && !r(i = n.call(t))) return i;
			if (!e && "function" == typeof(n = t.toString) && !r(i = n.call(t))) return i;
			throw TypeError("Can't convert object to primitive value")
		}
	}, function(t, e) {
		var n = {}.toString;
		t.exports = function(t) {
			return n.call(t).slice(8, -1)
		}
	}, function(t, e) {
		t.exports = function(t) {
			if (null == t) throw TypeError("Can't call method on  " + t);
			return t
		}
	}, function(t, e) {
		var n = Math.ceil,
			i = Math.floor;
		t.exports = function(t) {
			return isNaN(t = +t) ? 0 : (0 < t ? i : n)(t)
		}
	}, function(t, e, n) {
		var i = n(50)("keys"),
			r = n(36);
		t.exports = function(t) {
			return i[t] || (i[t] = r(t))
		}
	}, function(t, e, n) {
		var i = n(17),
			r = "__core-js_shared__",
			o = i[r] || (i[r] = {});
		t.exports = function(t) {
			return o[t] || (o[t] = {})
		}
	}, function(t, e) {
		t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
	}, function(t, e) {
		e.f = Object.getOwnPropertySymbols
	}, function(t, e, n) {
		t.exports = {
			default: n(108),
			__esModule: !0
		}
	}, function(t, e) {
		t.exports = !0
	}, function(t, e, i) {
		var r = i(26),
			o = i(114),
			a = i(51),
			s = i(49)("IE_PROTO"),
			l = function() {},
			u = "prototype",
			c = function() {
				var t, e = i(66)("iframe"),
					n = a.length;
				for (e.style.display = "none", i(115).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), c = t.F; n--;) delete c[u][a[n]];
				return c()
			};
		t.exports = Object.create || function(t, e) {
			var n;
			return null !== t ? (l[u] = r(t), n = new l, l[u] = null, n[s] = t) : n = c(), void 0 === e ? n : o(n, e)
		}
	}, function(t, e, n) {
		var i = n(18).f,
			r = n(22),
			o = n(13)("toStringTag");
		t.exports = function(t, e, n) {
			t && !r(t = n ? t : t.prototype, o) && i(t, o, {
				configurable: !0,
				value: e
			})
		}
	}, function(t, e, n) {
		e.f = n(13)
	}, function(t, e, n) {
		var i = n(17),
			r = n(11),
			o = n(54),
			a = n(57),
			s = n(18).f;
		t.exports = function(t) {
			var e = r.Symbol || (r.Symbol = o ? {} : i.Symbol || {});
			"_" == t.charAt(0) || t in e || s(e, t, {
				value: a.f(t)
			})
		}
	}, function(t, e, n) {
		var i = n(37),
			r = n(32),
			o = n(19),
			a = n(45),
			s = n(22),
			l = n(65),
			u = Object.getOwnPropertyDescriptor;
		e.f = n(21) ? u : function(t, e) {
			if (t = o(t), e = a(e, !0), l) try {
				return u(t, e)
			} catch (t) {}
			if (s(t, e)) return r(!i.f.call(t, e), t[e])
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(149),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = {
			Kibo: o.default
		}, t.exports = e.default
	}, function(t, e) {
		var n, i, r = t.exports = {};

		function o() {
			throw new Error("setTimeout has not been defined")
		}

		function a() {
			throw new Error("clearTimeout has not been defined")
		}

		function s(e) {
			if (n === setTimeout) return setTimeout(e, 0);
			if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
			try {
				return n(e, 0)
			} catch (t) {
				try {
					return n.call(null, e, 0)
				} catch (t) {
					return n.call(this, e, 0)
				}
			}
		}! function() {
			try {
				n = "function" == typeof setTimeout ? setTimeout : o
			} catch (t) {
				n = o
			}
			try {
				i = "function" == typeof clearTimeout ? clearTimeout : a
			} catch (t) {
				i = a
			}
		}();
		var l, u = [],
			c = !1,
			d = -1;

		function h() {
			c && l && (c = !1, l.length ? u = l.concat(u) : d = -1, u.length && f())
		}

		function f() {
			if (!c) {
				var t = s(h);
				c = !0;
				for (var e = u.length; e;) {
					for (l = u, u = []; ++d < e;) l && l[d].run();
					d = -1, e = u.length
				}
				l = null, c = !1,
					function(e) {
						if (i === clearTimeout) return clearTimeout(e);
						if ((i === a || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
						try {
							i(e)
						} catch (t) {
							try {
								return i.call(null, e)
							} catch (t) {
								return i.call(this, e)
							}
						}
					}(t)
			}
		}

		function p(t, e) {
			this.fun = t, this.array = e
		}

		function g() {}
		r.nextTick = function(t) {
			var e = new Array(arguments.length - 1);
			if (1 < arguments.length)
				for (var n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
			u.push(new p(t, e)), 1 !== u.length || c || s(f)
		}, p.prototype.run = function() {
			this.fun.apply(null, this.array)
		}, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.binding = function(t) {
			throw new Error("process.binding is not supported")
		}, r.cwd = function() {
			return "/"
		}, r.chdir = function(t) {
			throw new Error("process.chdir is not supported")
		}, r.umask = function() {
			return 0
		}
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M1.425.35L14.575 8l-13.15 7.65V.35z"></path></svg>'
	}, function(t, e, n) {
		"use strict";
		e.__esModule = !0;
		var i, r = n(87),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = function(t) {
			if (Array.isArray(t)) {
				for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
				return n
			}
			return (0, o.default)(t)
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.default = n(188), t.exports = e.default
	}, function(t, e, n) {
		t.exports = !n(21) && !n(27)(function() {
			return 7 != Object.defineProperty(n(66)("div"), "a", {
				get: function() {
					return 7
				}
			}).a
		})
	}, function(t, e, n) {
		var i = n(31),
			r = n(17).document,
			o = i(r) && i(r.createElement);
		t.exports = function(t) {
			return o ? r.createElement(t) : {}
		}
	}, function(t, e, n) {
		var a = n(22),
			s = n(19),
			l = n(106)(!1),
			u = n(49)("IE_PROTO");
		t.exports = function(t, e) {
			var n, i = s(t),
				r = 0,
				o = [];
			for (n in i) n != u && a(i, n) && o.push(n);
			for (; e.length > r;) a(i, n = e[r++]) && (~l(o, n) || o.push(n));
			return o
		}
	}, function(t, e, n) {
		var i = n(46);
		t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
			return "String" == i(t) ? t.split("") : Object(t)
		}
	}, function(t, e, n) {
		var i = n(48),
			r = Math.min;
		t.exports = function(t) {
			return 0 < t ? r(i(t), 9007199254740991) : 0
		}
	}, function(t, e, n) {
		var r = n(16),
			o = n(11),
			a = n(27);
		t.exports = function(t, e) {
			var n = (o.Object || {})[t] || Object[t],
				i = {};
			i[t] = e(n), r(r.S + r.F * a(function() {
				n(1)
			}), "Object", i)
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(112)(!0);
		n(72)(String, "String", function(t) {
			this._t = String(t), this._i = 0
		}, function() {
			var t, e = this._t,
				n = this._i;
			return n >= e.length ? {
				value: void 0,
				done: !0
			} : (t = i(e, n), this._i += t.length, {
				value: t,
				done: !1
			})
		})
	}, function(t, e, n) {
		"use strict";
		var A = n(54),
			b = n(16),
			_ = n(73),
			E = n(25),
			T = n(22),
			S = n(33),
			w = n(113),
			C = n(56),
			L = n(116),
			k = n(13)("iterator"),
			x = !([].keys && "next" in [].keys()),
			R = "values",
			O = function() {
				return this
			};
		t.exports = function(t, e, n, i, r, o, a) {
			w(n, e, i);
			var s, l, u, c = function(t) {
					if (!x && t in p) return p[t];
					switch (t) {
						case "keys":
						case R:
							return function() {
								return new n(this, t)
							}
					}
					return function() {
						return new n(this, t)
					}
				},
				d = e + " Iterator",
				h = r == R,
				f = !1,
				p = t.prototype,
				g = p[k] || p["@@iterator"] || r && p[r],
				m = g || c(r),
				y = r ? h ? c("entries") : m : void 0,
				v = "Array" == e && p.entries || g;
			if (v && (u = L(v.call(new t))) !== Object.prototype && (C(u, d, !0), A || T(u, k) || E(u, k, O)), h && g && g.name !== R && (f = !0, m = function() {
					return g.call(this)
				}), A && !a || !x && !f && p[k] || E(p, k, m), S[e] = m, S[d] = O, r)
				if (s = {
						values: h ? m : c(R),
						keys: o ? m : c("keys"),
						entries: y
					}, a)
					for (l in s) l in p || _(p, l, s[l]);
				else b(b.P + b.F * (x || f), e, s);
			return s
		}
	}, function(t, e, n) {
		t.exports = n(25)
	}, function(t, e, n) {
		var i = n(67),
			r = n(51).concat("length", "prototype");
		e.f = Object.getOwnPropertyNames || function(t) {
			return i(t, r)
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(132),
			__esModule: !0
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(138),
			__esModule: !0
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(152),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(155),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(n(0)),
			a = r(n(1)),
			s = r(n(3)),
			l = r(n(2)),
			u = r(n(4)),
			i = r(n(15)),
			c = r(n(29));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var d = function(i) {
			function r() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
					e = arguments[1];
				(0, o.default)(this, r);
				var n = (0, a.default)(this, i.call(this, t));
				return n.core = e, n
			}
			return (0, l.default)(r, i), (0, s.default)(r, [{
				key: "name",
				get: function() {
					return "error"
				}
			}], [{
				key: "Levels",
				get: function() {
					return {
						FATAL: "FATAL",
						WARN: "WARN",
						INFO: "INFO"
					}
				}
			}]), r.prototype.createError = function(t) {
				this.core ? this.core.trigger(u.default.ERROR, t) : c.default.warn(this.name, "Core is not set. Error: ", t)
			}, r
		}(i.default);
		e.default = d, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(159),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		t.exports = {
			default: n(160),
			__esModule: !0
		}
	}, function(t, e) {
		t.exports = function(t) {
			return "string" != typeof t ? t : (/^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), /["'() \t\n]/.test(t) ? '"' + t.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : t)
		}
	}, function(t, e) {
		t.exports = "<%=baseUrl%>/a8c874b93b3d848f39a71260c57e3863.cur"
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 14.76H6.43V1.24H1.71v13.52zm7.86-13.52v13.52h4.716V1.24H9.573z"></path></svg>'
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = o(n(6)),
			r = o(n(8));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var a = {
			getStyleFor: function(t) {
				var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
					baseUrl: ""
				};
				return (0, i.default)('<style class="clappr-style"></style>').html((0, r.default)(t.toString())(e))
			}
		};
		e.default = a, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(174),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		t.exports = {
			default: n(175),
			__esModule: !0
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(187),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(193),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(194),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(197),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(199),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(202),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(206),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(212),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(216),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(222),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(223),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(233),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = j(n(101)),
			r = j(n(5)),
			o = j(n(4)),
			a = j(n(10)),
			s = j(n(43)),
			l = j(n(35)),
			u = j(n(34)),
			c = j(n(42)),
			d = j(n(15)),
			h = j(n(23)),
			f = j(n(14)),
			p = j(n(78)),
			g = j(n(77)),
			m = j(n(24)),
			y = j(n(86)),
			v = j(n(30)),
			A = j(n(80)),
			b = j(n(40)),
			_ = j(n(64)),
			E = j(n(88)),
			T = j(n(90)),
			S = j(n(91)),
			w = j(n(89)),
			C = j(n(41)),
			L = j(n(92)),
			k = j(n(93)),
			x = j(n(97)),
			R = j(n(98)),
			O = j(n(99)),
			I = j(n(29)),
			D = j(n(96)),
			P = j(n(94)),
			M = j(n(95)),
			N = j(n(85)),
			F = j(n(60)),
			B = j(n(8)),
			U = j(n(6));

		function j(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		e.default = {
			Player: i.default,
			Mediator: v.default,
			Events: o.default,
			Browser: f.default,
			PlayerInfo: b.default,
			MediaControl: A.default,
			ContainerPlugin: s.default,
			UIContainerPlugin: c.default,
			CorePlugin: l.default,
			UICorePlugin: u.default,
			Playback: a.default,
			Container: p.default,
			Core: g.default,
			PlayerError: m.default,
			Loader: y.default,
			BaseObject: d.default,
			UIObject: h.default,
			Utils: r.default,
			BaseFlashPlayback: _.default,
			Flash: E.default,
			FlasHLS: T.default,
			HLS: S.default,
			HTML5Audio: w.default,
			HTML5Video: C.default,
			HTMLImg: L.default,
			NoOp: k.default,
			ClickToPausePlugin: x.default,
			DVRControls: R.default,
			Favicon: O.default,
			Log: I.default,
			Poster: D.default,
			SpinnerThreeBouncePlugin: P.default,
			WaterMarkPlugin: M.default,
			Styler: N.default,
			Vendor: F.default,
			version: "0.2.97",
			template: B.default,
			$: U.default
		}, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = v(n(12)),
			o = v(n(53)),
			a = v(n(0)),
			s = v(n(1)),
			l = v(n(3)),
			u = v(n(2)),
			c = n(5),
			r = v(n(15)),
			d = v(n(4)),
			h = v(n(14)),
			f = v(n(150)),
			p = v(n(86)),
			g = v(n(40)),
			m = v(n(20)),
			y = v(n(6));

		function v(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var A = (0, c.currentScriptUrl)().replace(/\/[^/]+$/, ""),
			b = function(i) {
				function r(t) {
					(0, a.default)(this, r);
					var e = (0, s.default)(this, i.call(this, t)),
						n = {
							playerId: (0, c.uniqueId)(""),
							persistConfig: !0,
							width: 640,
							height: 360,
							baseUrl: A,
							allowUserInteraction: h.default.isMobile
						};
					return e._options = y.default.extend(n, t), e.options.sources = e._normalizeSources(t), e.options.chromeless || (e.options.allowUserInteraction = !0), e.options.allowUserInteraction || (e.options.disableKeyboardShortcuts = !0), e._registerOptionEventListeners(e.options.events), e._coreFactory = new f.default(e), e.playerInfo = g.default.getInstance(e.options.playerId), e.playerInfo.currentSize = {
						width: t.width,
						height: t.height
					}, e.playerInfo.options = e.options, e.options.parentId ? e.setParentId(e.options.parentId) : e.options.parent && e.attachTo(e.options.parent), e
				}
				return (0, u.default)(r, i), (0, l.default)(r, [{
					key: "loader",
					set: function(t) {
						this._loader = t
					},
					get: function() {
						return this._loader || (this._loader = new p.default(this.options.plugins || {}, this.options.playerId)), this._loader
					}
				}, {
					key: "ended",
					get: function() {
						return this.core.mediaControl.container.ended
					}
				}, {
					key: "buffering",
					get: function() {
						return this.core.mediaControl.container.buffering
					}
				}, {
					key: "isReady",
					get: function() {
						return !!this._ready
					}
				}, {
					key: "eventsMapping",
					get: function() {
						return {
							onReady: d.default.PLAYER_READY,
							onResize: d.default.PLAYER_RESIZE,
							onPlay: d.default.PLAYER_PLAY,
							onPause: d.default.PLAYER_PAUSE,
							onStop: d.default.PLAYER_STOP,
							onEnded: d.default.PLAYER_ENDED,
							onSeek: d.default.PLAYER_SEEK,
							onError: d.default.PLAYER_ERROR,
							onTimeUpdate: d.default.PLAYER_TIMEUPDATE,
							onVolumeUpdate: d.default.PLAYER_VOLUMEUPDATE,
							onSubtitleAvailable: d.default.PLAYER_SUBTITLE_AVAILABLE
						}
					}
				}]), r.prototype.setParentId = function(t) {
					var e = document.querySelector(t);
					return e && this.attachTo(e), this
				}, r.prototype.attachTo = function(t) {
					return this.options.parentElement = t, this.core = this._coreFactory.create(), this._addEventListeners(), this
				}, r.prototype._addEventListeners = function() {
					return this.core.isReady ? this._onReady() : this.listenToOnce(this.core, d.default.CORE_READY, this._onReady), this.listenTo(this.core.mediaControl, d.default.MEDIACONTROL_CONTAINERCHANGED, this._containerChanged), this.listenTo(this.core, d.default.CORE_FULLSCREEN, this._onFullscreenChange), this
				}, r.prototype._addContainerEventListeners = function() {
					var t = this.core.mediaControl.container;
					return t && (this.listenTo(t, d.default.CONTAINER_PLAY, this._onPlay), this.listenTo(t, d.default.CONTAINER_PAUSE, this._onPause), this.listenTo(t, d.default.CONTAINER_STOP, this._onStop), this.listenTo(t, d.default.CONTAINER_ENDED, this._onEnded), this.listenTo(t, d.default.CONTAINER_SEEK, this._onSeek), this.listenTo(t, d.default.CONTAINER_ERROR, this._onError), this.listenTo(t, d.default.CONTAINER_TIMEUPDATE, this._onTimeUpdate), this.listenTo(t, d.default.CONTAINER_VOLUME, this._onVolumeUpdate), this.listenTo(t, d.default.CONTAINER_SUBTITLE_AVAILABLE, this._onSubtitleAvailable)), this
				}, r.prototype._registerOptionEventListeners = function() {
					var i = this,
						r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
						n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
					return 0 < (0, o.default)(r).length && (0, o.default)(n).forEach(function(t) {
						var e = i.eventsMapping[t];
						e && i.off(e, n[t])
					}), (0, o.default)(r).forEach(function(t) {
						var e = i.eventsMapping[t];
						if (e) {
							var n = r[t];
							(n = "function" == typeof n && n) && i.on(e, n)
						}
					}), this
				}, r.prototype._containerChanged = function() {
					this.stopListening(), this._addEventListeners()
				}, r.prototype._onReady = function() {
					this._ready = !0, this._addContainerEventListeners(), this.trigger(d.default.PLAYER_READY)
				}, r.prototype._onFullscreenChange = function(t) {
					this.trigger(d.default.PLAYER_FULLSCREEN, t)
				}, r.prototype._onVolumeUpdate = function(t) {
					this.trigger(d.default.PLAYER_VOLUMEUPDATE, t)
				}, r.prototype._onSubtitleAvailable = function() {
					this.trigger(d.default.PLAYER_SUBTITLE_AVAILABLE)
				}, r.prototype._onPlay = function() {
					this.trigger(d.default.PLAYER_PLAY)
				}, r.prototype._onPause = function() {
					this.trigger(d.default.PLAYER_PAUSE)
				}, r.prototype._onStop = function() {
					this.trigger(d.default.PLAYER_STOP, this.getCurrentTime())
				}, r.prototype._onEnded = function() {
					this.trigger(d.default.PLAYER_ENDED)
				}, r.prototype._onSeek = function(t) {
					this.trigger(d.default.PLAYER_SEEK, t)
				}, r.prototype._onTimeUpdate = function(t) {
					this.trigger(d.default.PLAYER_TIMEUPDATE, t)
				}, r.prototype._onError = function(t) {
					this.trigger(d.default.PLAYER_ERROR, t)
				}, r.prototype._normalizeSources = function(t) {
					var e = t.sources || (void 0 !== t.source ? [t.source] : []);
					return 0 === e.length ? [{
						source: "",
						mimeType: ""
					}] : e
				}, r.prototype.resize = function(t) {
					return this.core.resize(t), this
				}, r.prototype.load = function(t, e, n) {
					return void 0 !== n && this.configure({
						autoPlay: !!n
					}), this.core.load(t, e), this
				}, r.prototype.destroy = function() {
					return this.stopListening(), this.core.destroy(), this
				}, r.prototype.consent = function() {
					return this.core.getCurrentPlayback().consent(), this
				}, r.prototype.play = function() {
					return this.core.mediaControl.container.play(), this
				}, r.prototype.pause = function() {
					return this.core.mediaControl.container.pause(), this
				}, r.prototype.stop = function() {
					return this.core.mediaControl.container.stop(), this
				}, r.prototype.seek = function(t) {
					return this.core.mediaControl.container.seek(t), this
				}, r.prototype.seekPercentage = function(t) {
					return this.core.mediaControl.container.seekPercentage(t), this
				}, r.prototype.setVolume = function(t) {
					return this.core && this.core.mediaControl && this.core.mediaControl.setVolume(t), this
				}, r.prototype.getVolume = function() {
					return this.core && this.core.mediaControl ? this.core.mediaControl.volume : 0
				}, r.prototype.mute = function() {
					return this._mutedVolume = this.getVolume(), this.setVolume(0), this
				}, r.prototype.unmute = function() {
					return this.setVolume("number" == typeof this._mutedVolume ? this._mutedVolume : 100), this._mutedVolume = null, this
				}, r.prototype.isPlaying = function() {
					return this.core.mediaControl.container.isPlaying()
				}, r.prototype.isDvrEnabled = function() {
					return this.core.mediaControl.container.isDvrEnabled()
				}, r.prototype.isDvrInUse = function() {
					return this.core.mediaControl.container.isDvrInUse()
				}, r.prototype.configure = function() {
					var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
					return this._registerOptionEventListeners(t.events, this.options.events), this.core.configure(t), this
				}, r.prototype.getPlugin = function(e) {
					return this.core.plugins.concat(this.core.mediaControl.container.plugins).filter(function(t) {
						return t.name === e
					})[0]
				}, r.prototype.getCurrentTime = function() {
					return this.core.mediaControl.container.getCurrentTime()
				}, r.prototype.getStartTimeOffset = function() {
					return this.core.mediaControl.container.getStartTimeOffset()
				}, r.prototype.getDuration = function() {
					return this.core.mediaControl.container.getDuration()
				}, r
			}(r.default);
		e.default = b, (0, i.default)(b.prototype, m.default), t.exports = e.default
	}, function(t, e, n) {
		n(103), t.exports = n(11).Object.assign
	}, function(t, e, n) {
		var i = n(16);
		i(i.S + i.F, "Object", {
			assign: n(105)
		})
	}, function(t, e) {
		t.exports = function(t) {
			if ("function" != typeof t) throw TypeError(t + " is not a function!");
			return t
		}
	}, function(t, e, n) {
		"use strict";
		var h = n(28),
			f = n(52),
			p = n(37),
			g = n(38),
			m = n(68),
			r = Object.assign;
		t.exports = !r || n(27)(function() {
			var t = {},
				e = {},
				n = Symbol(),
				i = "abcdefghijklmnopqrst";
			return t[n] = 7, i.split("").forEach(function(t) {
				e[t] = t
			}), 7 != r({}, t)[n] || Object.keys(r({}, e)).join("") != i
		}) ? function(t, e) {
			for (var n = g(t), i = arguments.length, r = 1, o = f.f, a = p.f; r < i;)
				for (var s, l = m(arguments[r++]), u = o ? h(l).concat(o(l)) : h(l), c = u.length, d = 0; d < c;) a.call(l, s = u[d++]) && (n[s] = l[s]);
			return n
		} : r
	}, function(t, e, n) {
		var l = n(19),
			u = n(69),
			c = n(107);
		t.exports = function(s) {
			return function(t, e, n) {
				var i, r = l(t),
					o = u(r.length),
					a = c(n, o);
				if (s && e != e) {
					for (; a < o;)
						if ((i = r[a++]) != i) return !0
				} else
					for (; a < o; a++)
						if ((s || a in r) && r[a] === e) return s || a || 0;
				return !s && -1
			}
		}
	}, function(t, e, n) {
		var i = n(48),
			r = Math.max,
			o = Math.min;
		t.exports = function(t, e) {
			return (t = i(t)) < 0 ? r(t + e, 0) : o(t, e)
		}
	}, function(t, e, n) {
		n(109), t.exports = n(11).Object.keys
	}, function(t, e, n) {
		var i = n(38),
			r = n(28);
		n(70)("keys", function() {
			return function(t) {
				return r(i(t))
			}
		})
	}, function(t, e, n) {
		t.exports = {
			default: n(111),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(71), n(117), t.exports = n(57).f("iterator")
	}, function(t, e, n) {
		var l = n(48),
			u = n(47);
		t.exports = function(s) {
			return function(t, e) {
				var n, i, r = String(u(t)),
					o = l(e),
					a = r.length;
				return o < 0 || a <= o ? s ? "" : void 0 : (n = r.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (i = r.charCodeAt(o + 1)) < 56320 || 57343 < i ? s ? r.charAt(o) : n : s ? r.slice(o, o + 2) : i - 56320 + (n - 55296 << 10) + 65536
			}
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(55),
			r = n(32),
			o = n(56),
			a = {};
		n(25)(a, n(13)("iterator"), function() {
			return this
		}), t.exports = function(t, e, n) {
			t.prototype = i(a, {
				next: r(1, n)
			}), o(t, e + " Iterator")
		}
	}, function(t, e, n) {
		var a = n(18),
			s = n(26),
			l = n(28);
		t.exports = n(21) ? Object.defineProperties : function(t, e) {
			s(t);
			for (var n, i = l(e), r = i.length, o = 0; o < r;) a.f(t, n = i[o++], e[n]);
			return t
		}
	}, function(t, e, n) {
		t.exports = n(17).document && document.documentElement
	}, function(t, e, n) {
		var i = n(22),
			r = n(38),
			o = n(49)("IE_PROTO"),
			a = Object.prototype;
		t.exports = Object.getPrototypeOf || function(t) {
			return t = r(t), i(t, o) ? t[o] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? a : null
		}
	}, function(t, e, n) {
		n(118);
		for (var i = n(17), r = n(25), o = n(33), a = n(13)("toStringTag"), s = ["NodeList", "DOMTokenList", "MediaList", "StyleSheetList", "CSSRuleList"], l = 0; l < 5; l++) {
			var u = s[l],
				c = i[u],
				d = c && c.prototype;
			d && !d[a] && r(d, a, u), o[u] = o.Array
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(119),
			r = n(120),
			o = n(33),
			a = n(19);
		t.exports = n(72)(Array, "Array", function(t, e) {
			this._t = a(t), this._i = 0, this._k = e
		}, function() {
			var t = this._t,
				e = this._k,
				n = this._i++;
			return !t || n >= t.length ? (this._t = void 0, r(1)) : r(0, "keys" == e ? n : "values" == e ? t[n] : [n, t[n]])
		}, "values"), o.Arguments = o.Array, i("keys"), i("values"), i("entries")
	}, function(t, e) {
		t.exports = function() {}
	}, function(t, e) {
		t.exports = function(t, e) {
			return {
				value: e,
				done: !!t
			}
		}
	}, function(t, e, n) {
		t.exports = {
			default: n(122),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(123), n(129), n(130), n(131), t.exports = n(11).Symbol
	}, function(t, e, n) {
		"use strict";
		var i = n(17),
			a = n(22),
			r = n(21),
			o = n(16),
			s = n(73),
			l = n(124).KEY,
			u = n(27),
			c = n(50),
			d = n(56),
			h = n(36),
			f = n(13),
			p = n(57),
			g = n(58),
			m = n(125),
			y = n(126),
			v = n(127),
			A = n(26),
			b = n(19),
			_ = n(45),
			E = n(32),
			T = n(55),
			S = n(128),
			w = n(59),
			C = n(18),
			L = n(28),
			k = w.f,
			x = C.f,
			R = S.f,
			O = i.Symbol,
			I = i.JSON,
			D = I && I.stringify,
			P = "prototype",
			M = f("_hidden"),
			N = f("toPrimitive"),
			F = {}.propertyIsEnumerable,
			B = c("symbol-registry"),
			U = c("symbols"),
			j = c("op-symbols"),
			K = Object[P],
			G = "function" == typeof O,
			H = i.QObject,
			Y = !H || !H[P] || !H[P].findChild,
			V = r && u(function() {
				return 7 != T(x({}, "a", {
					get: function() {
						return x(this, "a", {
							value: 7
						}).a
					}
				})).a
			}) ? function(t, e, n) {
				var i = k(K, e);
				i && delete K[e], x(t, e, n), i && t !== K && x(K, e, i)
			} : x,
			z = function(t) {
				var e = U[t] = T(O[P]);
				return e._k = t, e
			},
			$ = G && "symbol" == typeof O.iterator ? function(t) {
				return "symbol" == typeof t
			} : function(t) {
				return t instanceof O
			},
			W = function(t, e, n) {
				return t === K && W(j, e, n), A(t), e = _(e, !0), A(n), a(U, e) ? (n.enumerable ? (a(t, M) && t[M][e] && (t[M][e] = !1), n = T(n, {
					enumerable: E(0, !1)
				})) : (a(t, M) || x(t, M, E(1, {})), t[M][e] = !0), V(t, e, n)) : x(t, e, n)
			},
			q = function(t, e) {
				A(t);
				for (var n, i = y(e = b(e)), r = 0, o = i.length; r < o;) W(t, n = i[r++], e[n]);
				return t
			},
			X = function(t) {
				var e = F.call(this, t = _(t, !0));
				return !(this === K && a(U, t) && !a(j, t)) && (!(e || !a(this, t) || !a(U, t) || a(this, M) && this[M][t]) || e)
			},
			Q = function(t, e) {
				if (t = b(t), e = _(e, !0), t !== K || !a(U, e) || a(j, e)) {
					var n = k(t, e);
					return !n || !a(U, e) || a(t, M) && t[M][e] || (n.enumerable = !0), n
				}
			},
			Z = function(t) {
				for (var e, n = R(b(t)), i = [], r = 0; n.length > r;) a(U, e = n[r++]) || e == M || e == l || i.push(e);
				return i
			},
			J = function(t) {
				for (var e, n = t === K, i = R(n ? j : b(t)), r = [], o = 0; i.length > o;) !a(U, e = i[o++]) || n && !a(K, e) || r.push(U[e]);
				return r
			};
		G || (s((O = function() {
			if (this instanceof O) throw TypeError("Symbol is not a constructor!");
			var e = h(0 < arguments.length ? arguments[0] : void 0),
				n = function(t) {
					this === K && n.call(j, t), a(this, M) && a(this[M], e) && (this[M][e] = !1), V(this, e, E(1, t))
				};
			return r && Y && V(K, e, {
				configurable: !0,
				set: n
			}), z(e)
		})[P], "toString", function() {
			return this._k
		}), w.f = Q, C.f = W, n(74).f = S.f = Z, n(37).f = X, n(52).f = J, r && !n(54) && s(K, "propertyIsEnumerable", X, !0), p.f = function(t) {
			return z(f(t))
		}), o(o.G + o.W + o.F * !G, {
			Symbol: O
		});
		for (var tt = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), et = 0; tt.length > et;) f(tt[et++]);
		for (tt = L(f.store), et = 0; tt.length > et;) g(tt[et++]);
		o(o.S + o.F * !G, "Symbol", {
			for: function(t) {
				return a(B, t += "") ? B[t] : B[t] = O(t)
			},
			keyFor: function(t) {
				if ($(t)) return m(B, t);
				throw TypeError(t + " is not a symbol!")
			},
			useSetter: function() {
				Y = !0
			},
			useSimple: function() {
				Y = !1
			}
		}), o(o.S + o.F * !G, "Object", {
			create: function(t, e) {
				return void 0 === e ? T(t) : q(T(t), e)
			},
			defineProperty: W,
			defineProperties: q,
			getOwnPropertyDescriptor: Q,
			getOwnPropertyNames: Z,
			getOwnPropertySymbols: J
		}), I && o(o.S + o.F * (!G || u(function() {
			var t = O();
			return "[null]" != D([t]) || "{}" != D({
				a: t
			}) || "{}" != D(Object(t))
		})), "JSON", {
			stringify: function(t) {
				if (void 0 !== t && !$(t)) {
					for (var e, n, i = [t], r = 1; arguments.length > r;) i.push(arguments[r++]);
					return "function" == typeof(e = i[1]) && (n = e), !n && v(e) || (e = function(t, e) {
						if (n && (e = n.call(this, t, e)), !$(e)) return e
					}), i[1] = e, D.apply(I, i)
				}
			}
		}), O[P][N] || n(25)(O[P], N, O[P].valueOf), d(O, "Symbol"), d(Math, "Math", !0), d(i.JSON, "JSON", !0)
	}, function(t, e, n) {
		var i = n(36)("meta"),
			r = n(31),
			o = n(22),
			a = n(18).f,
			s = 0,
			l = Object.isExtensible || function() {
				return !0
			},
			u = !n(27)(function() {
				return l(Object.preventExtensions({}))
			}),
			c = function(t) {
				a(t, i, {
					value: {
						i: "O" + ++s,
						w: {}
					}
				})
			},
			d = t.exports = {
				KEY: i,
				NEED: !1,
				fastKey: function(t, e) {
					if (!r(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
					if (!o(t, i)) {
						if (!l(t)) return "F";
						if (!e) return "E";
						c(t)
					}
					return t[i].i
				},
				getWeak: function(t, e) {
					if (!o(t, i)) {
						if (!l(t)) return !0;
						if (!e) return !1;
						c(t)
					}
					return t[i].w
				},
				onFreeze: function(t) {
					return u && d.NEED && l(t) && !o(t, i) && c(t), t
				}
			}
	}, function(t, e, n) {
		var s = n(28),
			l = n(19);
		t.exports = function(t, e) {
			for (var n, i = l(t), r = s(i), o = r.length, a = 0; a < o;)
				if (i[n = r[a++]] === e) return n
		}
	}, function(t, e, n) {
		var s = n(28),
			l = n(52),
			u = n(37);
		t.exports = function(t) {
			var e = s(t),
				n = l.f;
			if (n)
				for (var i, r = n(t), o = u.f, a = 0; r.length > a;) o.call(t, i = r[a++]) && e.push(i);
			return e
		}
	}, function(t, e, n) {
		var i = n(46);
		t.exports = Array.isArray || function(t) {
			return "Array" == i(t)
		}
	}, function(t, e, n) {
		var i = n(19),
			r = n(74).f,
			o = {}.toString,
			a = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
		t.exports.f = function(t) {
			return a && "[object Window]" == o.call(t) ? function(t) {
				try {
					return r(t)
				} catch (t) {
					return a.slice()
				}
			}(t) : r(i(t))
		}
	}, function(t, e) {}, function(t, e, n) {
		n(58)("asyncIterator")
	}, function(t, e, n) {
		n(58)("observable")
	}, function(t, e, n) {
		n(133);
		var i = n(11).Object;
		t.exports = function(t, e, n) {
			return i.defineProperty(t, e, n)
		}
	}, function(t, e, n) {
		var i = n(16);
		i(i.S + i.F * !n(21), "Object", {
			defineProperty: n(18).f
		})
	}, function(t, e, n) {
		t.exports = {
			default: n(135),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(136), t.exports = n(11).Object.setPrototypeOf
	}, function(t, e, n) {
		var i = n(16);
		i(i.S, "Object", {
			setPrototypeOf: n(137).set
		})
	}, function(t, e, r) {
		var n = r(31),
			i = r(26),
			o = function(t, e) {
				if (i(t), !n(e) && null !== e) throw TypeError(e + ": can't set as prototype!")
			};
		t.exports = {
			set: Object.setPrototypeOf || ("__proto__" in {} ? function(t, n, i) {
				try {
					(i = r(44)(Function.call, r(59).f(Object.prototype, "__proto__").set, 2))(t, []), n = !(t instanceof Array)
				} catch (t) {
					n = !0
				}
				return function(t, e) {
					return o(t, e), n ? t.__proto__ = e : i(t, e), t
				}
			}({}, !1) : void 0),
			check: o
		}
	}, function(t, e, n) {
		n(139);
		var i = n(11).Object;
		t.exports = function(t, e) {
			return i.create(t, e)
		}
	}, function(t, e, n) {
		var i = n(16);
		i(i.S, "Object", {
			create: n(55)
		})
	}, function(t, e, n) {
		t.exports = {
			default: n(141),
			__esModule: !0
		}
	}, function(t, e, n) {
		n(142);
		var i = n(11).Object;
		t.exports = function(t, e) {
			return i.getOwnPropertyDescriptor(t, e)
		}
	}, function(t, e, n) {
		var i = n(19),
			r = n(59).f;
		n(70)("getOwnPropertyDescriptor", function() {
			return function(t, e) {
				return r(i(t), e)
			}
		})
	}, function(t, e, n) {
		"use strict";
		Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
			value: function(t) {
				if (null == this) throw new TypeError('"this" is null or not defined');
				var e = Object(this),
					n = e.length >>> 0;
				if ("function" != typeof t) throw new TypeError("predicate must be a function");
				for (var i = arguments[1], r = 0; r < n;) {
					var o = e[r];
					if (t.call(i, o, r, e)) return o;
					r++
				}
			}
		})
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e.getDevice = e.getViewportSize = e.getOsData = e.getBrowserData = e.getBrowserInfo = void 0;
		var i = r(n(6)),
			o = r(n(145)),
			a = r(n(146));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var s = {},
			l = e.getBrowserInfo = function(t) {
				var e = t.match(/\b(playstation 4|nx|opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [],
					n = void 0;
				if (/trident/i.test(e[1])) return n = /\brv[ :]+(\d+)/g.exec(t) || [], {
					name: "IE",
					version: parseInt(n[1] || "")
				};
				if ("Chrome" === e[1]) {
					if (null != (n = t.match(/\bOPR\/(\d+)/))) return {
						name: "Opera",
						version: parseInt(n[1])
					};
					if (null != (n = t.match(/\bEdge\/(\d+)/))) return {
						name: "Edge",
						version: parseInt(n[1])
					}
				} else /android/i.test(t) && (n = t.match(/version\/(\d+)/i)) && (e.splice(1, 1, "Android WebView"), e.splice(2, 1, n[1]));
				return {
					name: (e = e[2] ? [e[1], e[2]] : [navigator.appName, navigator.appVersion, "-?"])[0],
					version: parseInt(e[1])
				}
			},
			u = e.getBrowserData = function() {
				var t = {},
					e = s.userAgent.toLowerCase();
				for (var n in o.default) {
					var i = new RegExp(o.default[n].identifier.toLowerCase()).exec(e);
					if (null != i && i[1]) {
						if (t.name = o.default[n].name, t.group = o.default[n].group, o.default[n].versionIdentifier) {
							var r = new RegExp(o.default[n].versionIdentifier.toLowerCase()).exec(e);
							null != r && r[1] && c(r[1], t)
						} else c(i[1], t);
						break
					}
				}
				return t
			},
			c = function(t, e) {
				var n = t.split(".", 2);
				e.fullVersion = t, n[0] && (e.majorVersion = parseInt(n[0])), n[1] && (e.minorVersion = parseInt(n[1]))
			},
			d = e.getOsData = function() {
				var t = {},
					e = s.userAgent.toLowerCase();
				for (var n in a.default) {
					var i = new RegExp(a.default[n].identifier.toLowerCase()).exec(e);
					if (null != i) {
						if (t.name = a.default[n].name, t.group = a.default[n].group, a.default[n].version) h(a.default[n].version, a.default[n].versionSeparator ? a.default[n].versionSeparator : ".", t);
						else if (i[1]) h(i[1], a.default[n].versionSeparator ? a.default[n].versionSeparator : ".", t);
						else if (a.default[n].versionIdentifier) {
							var r = new RegExp(a.default[n].versionIdentifier.toLowerCase()).exec(e);
							null != r && r[1] && h(r[1], a.default[n].versionSeparator ? a.default[n].versionSeparator : ".", t)
						}
						break
					}
				}
				return t
			},
			h = function(t, e, n) {
				var i = "[" == e.substr(0, 1) ? new RegExp(e, "g") : e,
					r = t.split(i, 2);
				"." != e && (t = t.replace(new RegExp(e, "g"), ".")), n.fullVersion = t, r && r[0] && (n.majorVersion = parseInt(r[0])), r && r[1] && (n.minorVersion = parseInt(r[1]))
			},
			f = e.getViewportSize = function() {
				var t = {};
				return t.width = (0, i.default)(window).width(), t.height = (0, i.default)(window).height(), t
			},
			p = e.getDevice = function(t) {
				var e = /\((iP(?:hone|ad|od))?(?:[^;]*; ){0,2}([^)]+(?=\)))/.exec(t);
				return e && (e[1] || e[2]) || ""
			},
			g = l(navigator.userAgent);
		s.isEdge = /edge/i.test(navigator.userAgent), s.isChrome = /chrome|CriOS/i.test(navigator.userAgent) && !s.isEdge, s.isSafari = /safari/i.test(navigator.userAgent) && !s.isChrome && !s.isEdge, s.isFirefox = /firefox/i.test(navigator.userAgent), s.isLegacyIE = !!window.ActiveXObject, s.isIE = s.isLegacyIE || /trident.*rv:1\d/i.test(navigator.userAgent), s.isIE11 = /trident.*rv:11/i.test(navigator.userAgent), s.isChromecast = s.isChrome && /CrKey/i.test(navigator.userAgent), s.isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|IEMobile|Mobile Safari|Opera Mini/i.test(navigator.userAgent), s.isiOS = /iPad|iPhone|iPod/i.test(navigator.userAgent), s.isAndroid = /Android/i.test(navigator.userAgent), s.isWindowsPhone = /Windows Phone/i.test(navigator.userAgent), s.isWin8App = /MSAppHost/i.test(navigator.userAgent), s.isWiiU = /WiiU/i.test(navigator.userAgent), s.isPS4 = /PlayStation 4/i.test(navigator.userAgent), s.hasLocalstorage = function() {
			try {
				return localStorage.setItem("clappr", "clappr"), localStorage.removeItem("clappr"), !0
			} catch (t) {
				return !1
			}
		}(), s.hasFlash = function() {
			try {
				return !!new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
			} catch (t) {
				return !(!navigator.mimeTypes || void 0 === navigator.mimeTypes["application/x-shockwave-flash"] || !navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)
			}
		}(), s.name = g.name, s.version = g.version, s.userAgent = navigator.userAgent, s.data = u(), s.os = d(), s.viewport = f(), s.device = p(s.userAgent), void 0 !== window.orientation && function() {
			switch (window.orientation) {
				case -90:
				case 90:
					s.viewport.orientation = "landscape";
					break;
				default:
					s.viewport.orientation = "portrait"
			}
		}(), e.default = s
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		e.default = [{
			name: "Chromium",
			group: "Chrome",
			identifier: "Chromium/([0-9.]*)"
		}, {
			name: "Chrome Mobile",
			group: "Chrome",
			identifier: "Chrome/([0-9.]*) Mobile",
			versionIdentifier: "Chrome/([0-9.]*)"
		}, {
			name: "Chrome",
			group: "Chrome",
			identifier: "Chrome/([0-9.]*)"
		}, {
			name: "Chrome for iOS",
			group: "Chrome",
			identifier: "CriOS/([0-9.]*)"
		}, {
			name: "Android Browser",
			group: "Chrome",
			identifier: "CrMo/([0-9.]*)"
		}, {
			name: "Firefox",
			group: "Firefox",
			identifier: "Firefox/([0-9.]*)"
		}, {
			name: "Opera Mini",
			group: "Opera",
			identifier: "Opera Mini/([0-9.]*)"
		}, {
			name: "Opera",
			group: "Opera",
			identifier: "Opera ([0-9.]*)"
		}, {
			name: "Opera",
			group: "Opera",
			identifier: "Opera/([0-9.]*)",
			versionIdentifier: "Version/([0-9.]*)"
		}, {
			name: "IEMobile",
			group: "Explorer",
			identifier: "IEMobile/([0-9.]*)"
		}, {
			name: "Internet Explorer",
			group: "Explorer",
			identifier: "MSIE ([a-zA-Z0-9.]*)"
		}, {
			name: "Internet Explorer",
			group: "Explorer",
			identifier: "Trident/([0-9.]*)",
			versionIdentifier: "rv:([0-9.]*)"
		}, {
			name: "Spartan",
			group: "Spartan",
			identifier: "Edge/([0-9.]*)",
			versionIdentifier: "Edge/([0-9.]*)"
		}, {
			name: "Safari",
			group: "Safari",
			identifier: "Safari/([0-9.]*)",
			versionIdentifier: "Version/([0-9.]*)"
		}], t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		e.default = [{
			name: "Windows 2000",
			group: "Windows",
			identifier: "Windows NT 5.0",
			version: "5.0"
		}, {
			name: "Windows XP",
			group: "Windows",
			identifier: "Windows NT 5.1",
			version: "5.1"
		}, {
			name: "Windows Vista",
			group: "Windows",
			identifier: "Windows NT 6.0",
			version: "6.0"
		}, {
			name: "Windows 7",
			group: "Windows",
			identifier: "Windows NT 6.1",
			version: "7.0"
		}, {
			name: "Windows 8",
			group: "Windows",
			identifier: "Windows NT 6.2",
			version: "8.0"
		}, {
			name: "Windows 8.1",
			group: "Windows",
			identifier: "Windows NT 6.3",
			version: "8.1"
		}, {
			name: "Windows 10",
			group: "Windows",
			identifier: "Windows NT 10.0",
			version: "10.0"
		}, {
			name: "Windows Phone",
			group: "Windows Phone",
			identifier: "Windows Phone ([0-9.]*)"
		}, {
			name: "Windows Phone",
			group: "Windows Phone",
			identifier: "Windows Phone OS ([0-9.]*)"
		}, {
			name: "Windows",
			group: "Windows",
			identifier: "Windows"
		}, {
			name: "Chrome OS",
			group: "Chrome OS",
			identifier: "CrOS"
		}, {
			name: "Android",
			group: "Android",
			identifier: "Android",
			versionIdentifier: "Android ([a-zA-Z0-9.-]*)"
		}, {
			name: "iPad",
			group: "iOS",
			identifier: "iPad",
			versionIdentifier: "OS ([0-9_]*)",
			versionSeparator: "[_|.]"
		}, {
			name: "iPod",
			group: "iOS",
			identifier: "iPod",
			versionIdentifier: "OS ([0-9_]*)",
			versionSeparator: "[_|.]"
		}, {
			name: "iPhone",
			group: "iOS",
			identifier: "iPhone OS",
			versionIdentifier: "OS ([0-9_]*)",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X High Sierra",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])13([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Sierra",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])12([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X El Capitan",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])11([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Yosemite",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])10([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Mavericks",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])9([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Mountain Lion",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])8([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Lion",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])7([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Snow Leopard",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])6([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Leopard",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])5([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Tiger",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])4([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Panther",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])3([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Jaguar",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])2([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Puma",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])1([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS X Cheetah",
			group: "Mac OS",
			identifier: "Mac OS X (10([_|.])0([0-9_.]*))",
			versionSeparator: "[_|.]"
		}, {
			name: "Mac OS",
			group: "Mac OS",
			identifier: "Mac OS"
		}, {
			name: "Ubuntu",
			group: "Linux",
			identifier: "Ubuntu",
			versionIdentifier: "Ubuntu/([0-9.]*)"
		}, {
			name: "Debian",
			group: "Linux",
			identifier: "Debian"
		}, {
			name: "Gentoo",
			group: "Linux",
			identifier: "Gentoo"
		}, {
			name: "Linux",
			group: "Linux",
			identifier: "Linux"
		}, {
			name: "BlackBerry",
			group: "BlackBerry",
			identifier: "BlackBerry"
		}], t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = e.mp4 = "data:video/mp4;base64,AAAAHGZ0eXBpc29tAAACAGlzb21pc28ybXA0MQAAAAhmcmVlAAAC721kYXQhEAUgpBv/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3pwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcCEQBSCkG//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADengAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAsJtb292AAAAbG12aGQAAAAAAAAAAAAAAAAAAAPoAAAALwABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAB7HRyYWsAAABcdGtoZAAAAAMAAAAAAAAAAAAAAAIAAAAAAAAALwAAAAAAAAAAAAAAAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAAC8AAAAAAAEAAAAAAWRtZGlhAAAAIG1kaGQAAAAAAAAAAAAAAAAAAKxEAAAIAFXEAAAAAAAtaGRscgAAAAAAAAAAc291bgAAAAAAAAAAAAAAAFNvdW5kSGFuZGxlcgAAAAEPbWluZgAAABBzbWhkAAAAAAAAAAAAAAAkZGluZgAAABxkcmVmAAAAAAAAAAEAAAAMdXJsIAAAAAEAAADTc3RibAAAAGdzdHNkAAAAAAAAAAEAAABXbXA0YQAAAAAAAAABAAAAAAAAAAAAAgAQAAAAAKxEAAAAAAAzZXNkcwAAAAADgICAIgACAASAgIAUQBUAAAAAAfQAAAHz+QWAgIACEhAGgICAAQIAAAAYc3R0cwAAAAAAAAABAAAAAgAABAAAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAIAAAABAAAAHHN0c3oAAAAAAAAAAAAAAAIAAAFzAAABdAAAABRzdGNvAAAAAAAAAAEAAAAsAAAAYnVkdGEAAABabWV0YQAAAAAAAAAhaGRscgAAAAAAAAAAbWRpcmFwcGwAAAAAAAAAAAAAAAAtaWxzdAAAACWpdG9vAAAAHWRhdGEAAAABAAAAAExhdmY1Ni40MC4xMDE=";
		e.default = {
			mp4: i
		}
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(0),
			o = (i = r) && i.__esModule ? i : {
				default: i
			},
			a = n(60);
		var s = "font-weight: bold; font-size: 13px;",
			l = "color: #ff8000;" + s,
			u = "color: #ff0000;" + s,
			c = ["color: #0000ff;font-weight: bold; font-size: 13px;", "color: #006600;font-weight: bold; font-size: 13px;", l, u, u],
			d = ["debug", "info", "warn", "error", "disabled"],
			h = function() {
				function i() {
					var t = this,
						e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 1,
						n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 3;
					(0, o.default)(this, i), this.kibo = new a.Kibo, this.kibo.down(["ctrl shift d"], function() {
						return t.onOff()
					}), this.BLACKLIST = ["timeupdate", "playback:timeupdate", "playback:progress", "container:hover", "container:timeupdate", "container:progress"], this.level = e, this.offLevel = n
				}
				return i.prototype.debug = function(t) {
					this.log(t, 0, Array.prototype.slice.call(arguments, 1))
				}, i.prototype.info = function(t) {
					this.log(t, 1, Array.prototype.slice.call(arguments, 1))
				}, i.prototype.warn = function(t) {
					this.log(t, 2, Array.prototype.slice.call(arguments, 1))
				}, i.prototype.error = function(t) {
					this.log(t, 3, Array.prototype.slice.call(arguments, 1))
				}, i.prototype.onOff = function() {
					this.level === this.offLevel ? this.level = this.previousLevel : (this.previousLevel = this.level, this.level = this.offLevel), window.console && window.console.log && window.console.log("%c[Clappr.Log] set log level to " + d[this.level], l)
				}, i.prototype.level = function(t) {
					this.level = t
				}, i.prototype.log = function(t, e, n) {
					if (!(0 <= this.BLACKLIST.indexOf(n[0]) || e < this.level)) {
						n || (n = t, t = null);
						var i = c[e],
							r = "";
						t && (r = "[" + t + "]"), window.console && window.console.log && window.console.log.apply(console, ["%c[" + d[e] + "]" + r, i].concat(n))
					}
				}, i
			}();
		(e.default = h).LEVEL_DEBUG = 0, h.LEVEL_INFO = 1, h.LEVEL_WARN = 2, h.LEVEL_ERROR = 3, h.getInstance = function() {
			return void 0 === this._instance && (this._instance = new this, this._instance.previousLevel = this._instance.level, this._instance.level = this._instance.offLevel), this._instance
		}, h.setLevel = function(t) {
			this.getInstance().level = t
		}, h.debug = function() {
			this.getInstance().debug.apply(this.getInstance(), arguments)
		}, h.info = function() {
			this.getInstance().info.apply(this.getInstance(), arguments)
		}, h.warn = function() {
			this.getInstance().warn.apply(this.getInstance(), arguments)
		}, h.error = function() {
			this.getInstance().error.apply(this.getInstance(), arguments)
		}, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var s = function(t) {
			this.element = t || window.document, this.initialize()
		};
		s.KEY_NAMES_BY_CODE = {
				8: "backspace",
				9: "tab",
				13: "enter",
				16: "shift",
				17: "ctrl",
				18: "alt",
				20: "caps_lock",
				27: "esc",
				32: "space",
				37: "left",
				38: "up",
				39: "right",
				40: "down",
				48: "0",
				49: "1",
				50: "2",
				51: "3",
				52: "4",
				53: "5",
				54: "6",
				55: "7",
				56: "8",
				57: "9",
				65: "a",
				66: "b",
				67: "c",
				68: "d",
				69: "e",
				70: "f",
				71: "g",
				72: "h",
				73: "i",
				74: "j",
				75: "k",
				76: "l",
				77: "m",
				78: "n",
				79: "o",
				80: "p",
				81: "q",
				82: "r",
				83: "s",
				84: "t",
				85: "u",
				86: "v",
				87: "w",
				88: "x",
				89: "y",
				90: "z",
				112: "f1",
				113: "f2",
				114: "f3",
				115: "f4",
				116: "f5",
				117: "f6",
				118: "f7",
				119: "f8",
				120: "f9",
				121: "f10",
				122: "f11",
				123: "f12"
			}, s.KEY_CODES_BY_NAME = {},
			function() {
				for (var t in s.KEY_NAMES_BY_CODE) Object.prototype.hasOwnProperty.call(s.KEY_NAMES_BY_CODE, t) && (s.KEY_CODES_BY_NAME[s.KEY_NAMES_BY_CODE[t]] = +t)
			}(), s.MODIFIERS = ["shift", "ctrl", "alt"], s.registerEvent = document.addEventListener ? function(t, e, n) {
				t.addEventListener(e, n, !1)
			} : document.attachEvent ? function(t, e, n) {
				t.attachEvent("on" + e, n)
			} : void 0, s.unregisterEvent = document.removeEventListener ? function(t, e, n) {
				t.removeEventListener(e, n, !1)
			} : document.detachEvent ? function(t, e, n) {
				t.detachEvent("on" + e, n)
			} : void 0, s.stringContains = function(t, e) {
				return -1 !== t.indexOf(e)
			}, s.neatString = function(t) {
				return t.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " ")
			}, s.capitalize = function(t) {
				return t.toLowerCase().replace(/^./, function(t) {
					return t.toUpperCase()
				})
			}, s.isString = function(t) {
				return s.stringContains(Object.prototype.toString.call(t), "String")
			}, s.arrayIncludes = Array.prototype.indexOf ? function(t, e) {
				return -1 !== t.indexOf(e)
			} : function(t, e) {
				for (var n = 0; n < t.length; n++)
					if (t[n] === e) return !0;
				return !1
			}, s.extractModifiers = function(t) {
				var e, n;
				for (e = [], n = 0; n < s.MODIFIERS.length; n++) s.stringContains(t, s.MODIFIERS[n]) && e.push(s.MODIFIERS[n]);
				return e
			}, s.extractKey = function(t) {
				var e, n;
				for (e = s.neatString(t).split(" "), n = 0; n < e.length; n++)
					if (!s.arrayIncludes(s.MODIFIERS, e[n])) return e[n]
			}, s.modifiersAndKey = function(t) {
				var e, n;
				return s.stringContains(t, "any") ? s.neatString(t).split(" ").slice(0, 2).join(" ") : (e = s.extractModifiers(t), (n = s.extractKey(t)) && !s.arrayIncludes(s.MODIFIERS, n) && e.push(n), e.join(" "))
			}, s.keyName = function(t) {
				return s.KEY_NAMES_BY_CODE[t + ""]
			}, s.keyCode = function(t) {
				return +s.KEY_CODES_BY_NAME[t]
			}, s.prototype.initialize = function() {
				var t, e = this;
				for (this.lastKeyCode = -1, this.lastModifiers = {}, t = 0; t < s.MODIFIERS.length; t++) this.lastModifiers[s.MODIFIERS[t]] = !1;
				this.keysDown = {
					any: []
				}, this.keysUp = {
					any: []
				}, this.downHandler = this.handler("down"), this.upHandler = this.handler("up"), s.registerEvent(this.element, "keydown", this.downHandler), s.registerEvent(this.element, "keyup", this.upHandler), s.registerEvent(window, "unload", function t() {
					s.unregisterEvent(e.element, "keydown", e.downHandler), s.unregisterEvent(e.element, "keyup", e.upHandler), s.unregisterEvent(window, "unload", t)
				})
			}, s.prototype.handler = function(r) {
				var o = this;
				return function(t) {
					var e, n, i;
					for (t = t || window.event, o.lastKeyCode = t.keyCode, e = 0; e < s.MODIFIERS.length; e++) o.lastModifiers[s.MODIFIERS[e]] = t[s.MODIFIERS[e] + "Key"];
					for (s.arrayIncludes(s.MODIFIERS, s.keyName(o.lastKeyCode)) && (o.lastModifiers[s.keyName(o.lastKeyCode)] = !0), n = o["keys" + s.capitalize(r)], e = 0; e < n.any.length; e++) !1 === n.any[e](t) && t.preventDefault && t.preventDefault();
					if (n[i = o.lastModifiersAndKey()])
						for (e = 0; e < n[i].length; e++) !1 === n[i][e](t) && t.preventDefault && t.preventDefault()
				}
			}, s.prototype.registerKeys = function(t, e, n) {
				var i, r, o = this["keys" + s.capitalize(t)];
				for (s.isString(e) && (e = [e]), i = 0; i < e.length; i++) r = e[i], o[r = s.modifiersAndKey(r + "")] ? o[r].push(n) : o[r] = [n];
				return this
			}, s.prototype.unregisterKeys = function(t, e, n) {
				var i, r, o, a = this["keys" + s.capitalize(t)];
				for (s.isString(e) && (e = [e]), i = 0; i < e.length; i++)
					if (o = e[i], o = s.modifiersAndKey(o + ""), null === n) delete a[o];
					else if (a[o])
					for (r = 0; r < a[o].length; r++)
						if (String(a[o][r]) === String(n)) {
							a[o].splice(r, 1);
							break
						} return this
			}, s.prototype.off = function(t) {
				return this.unregisterKeys("down", t, null)
			}, s.prototype.delegate = function(t, e, n) {
				return null !== n || void 0 !== n ? this.registerKeys(t, e, n) : this.unregisterKeys(t, e, n)
			}, s.prototype.down = function(t, e) {
				return this.delegate("down", t, e)
			}, s.prototype.up = function(t, e) {
				return this.delegate("up", t, e)
			}, s.prototype.lastKey = function(t) {
				return t ? this.lastModifiers[t] : s.keyName(this.lastKeyCode)
			}, s.prototype.lastModifiersAndKey = function() {
				var t, e;
				for (t = [], e = 0; e < s.MODIFIERS.length; e++) this.lastKey(s.MODIFIERS[e]) && t.push(s.MODIFIERS[e]);
				return s.arrayIncludes(t, this.lastKey()) || t.push(this.lastKey()), t.join(" ")
			}, e.default = s, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(151),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = u(n(0)),
			o = u(n(1)),
			a = u(n(3)),
			s = u(n(2)),
			i = u(n(15)),
			l = u(n(77));

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var c = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this));
				return e.player = t, e._options = t.options, e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "loader",
				get: function() {
					return this.player.loader
				}
			}]), i.prototype.create = function() {
				return this.options.loader = this.loader, this.core = new l.default(this.options), this.addCorePlugins(), this.core.createContainers(this.options), this.core
			}, i.prototype.addCorePlugins = function() {
				var n = this;
				return this.loader.corePlugins.forEach(function(t) {
					var e = new t(n.core);
					n.core.addPlugin(e), n.setupExternalInterface(e)
				}), this.core
			}, i.prototype.setupExternalInterface = function(t) {
				var e = t.getExternalInterface();
				for (var n in e) this.player[n] = e[n].bind(t)
			}, i
		}(i.default);
		e.default = c, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = _(n(12)),
			r = _(n(0)),
			o = _(n(1)),
			a = _(n(3)),
			s = _(n(2)),
			l = n(5),
			u = _(n(4)),
			c = _(n(23)),
			d = _(n(14)),
			h = _(n(153)),
			f = _(n(80)),
			p = _(n(30)),
			g = _(n(40)),
			m = _(n(24)),
			y = _(n(20)),
			v = _(n(85)),
			A = _(n(6));
		n(170);
		var b = _(n(172));

		function _(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var E = void 0,
			T = function(n) {
				function i(t) {
					(0, r.default)(this, i);
					var e = (0, o.default)(this, n.call(this, t));
					return e.playerError = new m.default(t, e), e.configureDomRecycler(), e.playerInfo = g.default.getInstance(t.playerId), e.firstResize = !0, e.plugins = [], e.containers = [], e.setupMediaControl(null), e._boundFullscreenHandler = function() {
						return e.handleFullscreenChange()
					}, (0, A.default)(document).bind("fullscreenchange", e._boundFullscreenHandler), (0, A.default)(document).bind("MSFullscreenChange", e._boundFullscreenHandler), (0, A.default)(document).bind("mozfullscreenchange", e._boundFullscreenHandler), d.default.isMobile && (0, A.default)(window).bind("resize", function(t) {
						e.handleWindowResize(t)
					}), e
				}
				return (0, s.default)(i, n), (0, a.default)(i, [{
					key: "events",
					get: function() {
						return {
							webkitfullscreenchange: "handleFullscreenChange",
							mousemove: "showMediaControl",
							mouseleave: "hideMediaControl"
						}
					}
				}, {
					key: "attributes",
					get: function() {
						return {
							"data-player": "",
							tabindex: 9999
						}
					}
				}, {
					key: "isReady",
					get: function() {
						return !!this.ready
					}
				}, {
					key: "i18n",
					get: function() {
						return this.getPlugin("strings") || {
							t: function(t) {
								return t
							}
						}
					}
				}]), i.prototype.configureDomRecycler = function() {
					var t = !!(this.options && this.options.playback && this.options.playback.recycleVideo);
					l.DomRecycler.configure({
						recycleVideo: t
					})
				}, i.prototype.createContainers = function(t) {
					var e = this;
					this.defer = A.default.Deferred(), this.defer.promise(this), this.containerFactory = new h.default(t, t.loader, this.i18n, this.playerError), this.containerFactory.createContainers().then(function(t) {
						return e.setupContainers(t)
					}).then(function(t) {
						return e.resolveOnContainersReady(t)
					})
				}, i.prototype.updateSize = function() {
					l.Fullscreen.isFullscreen() ? this.setFullscreen() : this.setPlayerSize()
				}, i.prototype.setFullscreen = function() {
					d.default.isiOS || (this.$el.addClass("fullscreen"), this.$el.removeAttr("style"), this.playerInfo.previousSize = {
						width: this.options.width,
						height: this.options.height
					}, this.playerInfo.currentSize = {
						width: (0, A.default)(window).width(),
						height: (0, A.default)(window).height()
					})
				}, i.prototype.setPlayerSize = function() {
					this.$el.removeClass("fullscreen"), this.playerInfo.currentSize = this.playerInfo.previousSize, this.playerInfo.previousSize = {
						width: (0, A.default)(window).width(),
						height: (0, A.default)(window).height()
					}, this.resize(this.playerInfo.currentSize)
				}, i.prototype.resize = function(t) {
					(0, l.isNumber)(t.height) || (0, l.isNumber)(t.width) ? (this.el.style.height = t.height + "px", this.el.style.width = t.width + "px") : (this.el.style.height = "" + t.height, this.el.style.width = "" + t.width), this.playerInfo.previousSize = {
						width: this.options.width,
						height: this.options.height
					}, this.options.width = t.width, this.options.height = t.height, this.playerInfo.currentSize = t, this.triggerResize(this.playerInfo.currentSize)
				}, i.prototype.enableResizeObserver = function() {
					var t = this;
					this.resizeObserverInterval = setInterval(function() {
						t.playerInfo.computedSize.width === t.el.clientWidth && t.playerInfo.computedSize.height === t.el.clientHeight || (t.playerInfo.computedSize = {
							width: t.el.clientWidth,
							height: t.el.clientHeight
						}, t.triggerResize(t.playerInfo.computedSize))
					}, 500)
				}, i.prototype.triggerResize = function(t) {
					(this.firstResize || this.oldHeight !== t.height || this.oldWidth !== t.width) && (p.default.trigger(this.options.playerId + ":" + u.default.PLAYER_RESIZE, t), this.oldHeight = t.height, this.oldWidth = t.width, this.firstResize = !1)
				}, i.prototype.disableResizeObserver = function() {
					this.resizeObserverInterval && clearInterval(this.resizeObserverInterval)
				}, i.prototype.resolveOnContainersReady = function(t) {
					var e = this;
					A.default.when.apply(A.default, t).done(function() {
						e.defer.resolve(e), e.ready = !0, e.trigger(u.default.CORE_READY)
					})
				}, i.prototype.addPlugin = function(t) {
					this.plugins.push(t)
				}, i.prototype.hasPlugin = function(t) {
					return !!this.getPlugin(t)
				}, i.prototype.getPlugin = function(e) {
					return this.plugins.filter(function(t) {
						return t.name === e
					})[0]
				}, i.prototype.load = function(t, e) {
					var n = this;
					this.options.mimeType = e, t = t && t.constructor === Array ? t : [t], this.options.sources = t, this.containers.forEach(function(t) {
						return t.destroy()
					}), this.mediaControl.container = null, this.containerFactory.options = A.default.extend(this.options, {
						sources: t
					}), this.containerFactory.createContainers().then(function(t) {
						return n.setupContainers(t)
					}).then(function(t) {
						return n.resolveOnContainersReady(t)
					})
				}, i.prototype.destroy = function() {
					this.disableResizeObserver(), this.containers.forEach(function(t) {
						return t.destroy()
					}), this.plugins.forEach(function(t) {
						return t.destroy()
					}), this.$el.remove(), this.mediaControl.destroy(), (0, A.default)(document).unbind("fullscreenchange", this._boundFullscreenHandler), (0, A.default)(document).unbind("MSFullscreenChange", this._boundFullscreenHandler), (0, A.default)(document).unbind("mozfullscreenchange", this._boundFullscreenHandler), this.stopListening()
				}, i.prototype.handleFullscreenChange = function() {
					this.trigger(u.default.CORE_FULLSCREEN, l.Fullscreen.isFullscreen()), this.updateSize(), this.mediaControl.show()
				}, i.prototype.handleWindowResize = function(t) {
					var e = (0, A.default)(window).width() > (0, A.default)(window).height() ? "landscape" : "portrait";
					this._screenOrientation !== e && (this._screenOrientation = e, this.trigger(u.default.CORE_SCREEN_ORIENTATION_CHANGED, {
						event: t,
						orientation: this._screenOrientation
					}))
				}, i.prototype.setMediaControlContainer = function(t) {
					this.mediaControl.setContainer(t), this.mediaControl.render()
				}, i.prototype.disableMediaControl = function() {
					this.mediaControl.disable(), this.$el.removeClass("nocursor")
				}, i.prototype.enableMediaControl = function() {
					this.mediaControl.enable()
				}, i.prototype.removeContainer = function(e) {
					this.stopListening(e), this.containers = this.containers.filter(function(t) {
						return t !== e
					})
				}, i.prototype.setupContainer = function(t) {
					this.listenTo(t, u.default.CONTAINER_DESTROYED, this.removeContainer), this.containers.push(t)
				}, i.prototype.setupContainers = function(t) {
					return t.forEach(this.setupContainer.bind(this)), this.trigger(u.default.CORE_CONTAINERS_CREATED), this.renderContainers(), this.setupMediaControl(this.getCurrentContainer()), this.render(), this.appendToParent(), this.containers
				}, i.prototype.renderContainers = function() {
					var e = this;
					this.containers.forEach(function(t) {
						return e.el.appendChild(t.render().el)
					})
				}, i.prototype.createContainer = function(t, e) {
					var n = this.containerFactory.createContainer(t, e);
					return this.setupContainer(n), this.el.appendChild(n.render().el), n
				}, i.prototype.setupMediaControl = function(t) {
					this.mediaControl ? this.mediaControl.setContainer(t) : (this.mediaControl = this.createMediaControl(A.default.extend({
						container: t,
						focusElement: this.el
					}, this.options)), this.listenTo(this.mediaControl, u.default.MEDIACONTROL_FULLSCREEN, this.toggleFullscreen), this.listenTo(this.mediaControl, u.default.MEDIACONTROL_SHOW, this.onMediaControlShow.bind(this, !0)), this.listenTo(this.mediaControl, u.default.MEDIACONTROL_HIDE, this.onMediaControlShow.bind(this, !1)))
				}, i.prototype.createMediaControl = function(t) {
					return t.mediacontrol && t.mediacontrol.external ? new t.mediacontrol.external(t).render() : new f.default(t).render()
				}, i.prototype.getCurrentContainer = function() {
					return this.mediaControl && this.mediaControl.container ? this.mediaControl.container : this.containers[0]
				}, i.prototype.getCurrentPlayback = function() {
					var t = this.getCurrentContainer();
					return t && t.playback
				}, i.prototype.getPlaybackType = function() {
					var t = this.getCurrentContainer();
					return t && t.getPlaybackType()
				}, i.prototype.toggleFullscreen = function() {
					l.Fullscreen.isFullscreen() ? (l.Fullscreen.cancelFullscreen(), d.default.isiOS || this.$el.removeClass("fullscreen nocursor")) : (l.Fullscreen.requestFullscreen(this.el), d.default.isiOS || this.$el.addClass("fullscreen")), this.mediaControl.show()
				}, i.prototype.showMediaControl = function(t) {
					this.mediaControl.show(t)
				}, i.prototype.hideMediaControl = function() {
					this.mediaControl.hide(this.options.hideMediaControlDelay)
				}, i.prototype.onMediaControlShow = function(t) {
					this.getCurrentContainer().trigger(t ? u.default.CONTAINER_MEDIACONTROL_SHOW : u.default.CONTAINER_MEDIACONTROL_HIDE), t ? this.$el.removeClass("nocursor") : l.Fullscreen.isFullscreen() && this.$el.addClass("nocursor")
				}, i.prototype.configure = function(t) {
					var e = this;
					this._options = A.default.extend(this._options, t), this.configureDomRecycler();
					var n = t.source || t.sources;
					n && this.load(n, t.mimeType || this.options.mimeType), this.trigger(u.default.CORE_OPTIONS_CHANGE), this.containers.forEach(function(t) {
						t.configure(e.options)
					}), this.mediaControl.configure(this.options)
				}, i.prototype.appendToParent = function() {
					!(this.$el.parent() && this.$el.parent().length) && this.$el.appendTo(this.options.parentElement)
				}, i.prototype.render = function() {
					this.$el.append(this.mediaControl.render().el), E || (E = v.default.getStyleFor(b.default, {
						baseUrl: this.options.baseUrl
					})), (0, A.default)("head").append(E), this.options.width = this.options.width || this.$el.width(), this.options.height = this.options.height || this.$el.height();
					var t = {
						width: this.options.width,
						height: this.options.height
					};
					return this.playerInfo.previousSize = this.playerInfo.currentSize = this.playerInfo.computedSize = t, this.updateSize(), this.previousSize = {
						width: this.$el.width(),
						height: this.$el.height()
					}, this.enableResizeObserver(), this
				}, i
			}(c.default);
		e.default = T, (0, i.default)(T.prototype, y.default), t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(154),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var s = a(n(39)),
			l = a(n(0)),
			u = a(n(1)),
			i = a(n(3)),
			r = a(n(2)),
			o = a(n(15)),
			c = a(n(4)),
			d = a(n(78)),
			h = a(n(6));

		function a(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var f = function(o) {
			function a(t, e, n, i) {
				(0, l.default)(this, a);
				var r = (0, u.default)(this, o.call(this, t));
				return r._i18n = n, r.loader = e, r.playerError = i, r
			}
			return (0, r.default)(a, o), (0, i.default)(a, [{
				key: "options",
				get: function() {
					return this._options
				},
				set: function(t) {
					this._options = t
				}
			}]), a.prototype.createContainers = function() {
				var e = this;
				return h.default.Deferred(function(t) {
					t.resolve(e.options.sources.map(function(t) {
						return e.createContainer(t)
					}))
				})
			}, a.prototype.findPlaybackPlugin = function(e, n) {
				return this.loader.playbackPlugins.filter(function(t) {
					return t.canPlay(e, n)
				})[0]
			}, a.prototype.createContainer = function(t) {
				var e = null,
					n = this.options.mimeType;
				"object" === (void 0 === t ? "undefined" : (0, s.default)(t)) ? (e = t.source.toString(), t.mimeType && (n = t.mimeType)) : e = t.toString(), e.match(/^\/\//) && (e = window.location.protocol + e);
				var i = h.default.extend({}, this.options, {
						src: e,
						mimeType: n
					}),
					r = new(this.findPlaybackPlugin(e, n))(i, this._i18n, this.playerError);
				i = h.default.extend({}, i, {
					playback: r
				});
				var o = new d.default(i, this._i18n, this.playerError),
					a = h.default.Deferred();
				return a.promise(o), this.addContainerPlugins(o), this.listenToOnce(o, c.default.CONTAINER_READY, function() {
					return a.resolve(o)
				}), o
			}, a.prototype.addContainerPlugins = function(e) {
				this.loader.containerPlugins.forEach(function(t) {
					e.addPlugin(new t(e))
				})
			}, a
		}(o.default);
		e.default = f, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = h(n(12)),
			a = h(n(0)),
			s = h(n(1)),
			l = h(n(3)),
			u = h(n(2)),
			c = h(n(4)),
			r = h(n(23)),
			o = h(n(20));
		n(156);
		var d = h(n(6));

		function h(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var f = function(r) {
			function o(t, e, n) {
				(0, a.default)(this, o);
				var i = (0, s.default)(this, r.call(this, t));
				return i._i18n = e, i.currentTime = 0, i.volume = 100, i.playback = t.playback, i.playerError = n, i.settings = d.default.extend({}, i.playback.settings), i.isReady = !1, i.mediaControlDisabled = !1, i.plugins = [i.playback], i.bindEvents(), i
			}
			return (0, u.default)(o, r), (0, l.default)(o, [{
				key: "name",
				get: function() {
					return "Container"
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						class: "container",
						"data-container": ""
					}
				}
			}, {
				key: "events",
				get: function() {
					return {
						click: "clicked",
						dblclick: "dblClicked",
						doubleTap: "dblClicked",
						contextmenu: "onContextMenu",
						mouseenter: "mouseEnter",
						mouseleave: "mouseLeave"
					}
				}
			}, {
				key: "ended",
				get: function() {
					return this.playback.ended
				}
			}, {
				key: "buffering",
				get: function() {
					return this.playback.buffering
				}
			}, {
				key: "i18n",
				get: function() {
					return this._i18n
				}
			}, {
				key: "hasClosedCaptionsTracks",
				get: function() {
					return this.playback.hasClosedCaptionsTracks
				}
			}, {
				key: "closedCaptionsTracks",
				get: function() {
					return this.playback.closedCaptionsTracks
				}
			}, {
				key: "closedCaptionsTrackId",
				get: function() {
					return this.playback.closedCaptionsTrackId
				},
				set: function(t) {
					this.playback.closedCaptionsTrackId = t
				}
			}]), o.prototype.bindEvents = function() {
				this.listenTo(this.playback, c.default.PLAYBACK_PROGRESS, this.progress), this.listenTo(this.playback, c.default.PLAYBACK_TIMEUPDATE, this.timeUpdated), this.listenTo(this.playback, c.default.PLAYBACK_READY, this.ready), this.listenTo(this.playback, c.default.PLAYBACK_BUFFERING, this.onBuffering), this.listenTo(this.playback, c.default.PLAYBACK_BUFFERFULL, this.bufferfull), this.listenTo(this.playback, c.default.PLAYBACK_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.playback, c.default.PLAYBACK_LOADEDMETADATA, this.loadedMetadata), this.listenTo(this.playback, c.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.playback, c.default.PLAYBACK_BITRATE, this.updateBitrate), this.listenTo(this.playback, c.default.PLAYBACK_PLAYBACKSTATE, this.playbackStateChanged), this.listenTo(this.playback, c.default.PLAYBACK_DVR, this.playbackDvrStateChanged), this.listenTo(this.playback, c.default.PLAYBACK_MEDIACONTROL_DISABLE, this.disableMediaControl), this.listenTo(this.playback, c.default.PLAYBACK_MEDIACONTROL_ENABLE, this.enableMediaControl), this.listenTo(this.playback, c.default.PLAYBACK_SEEKED, this.onSeeked), this.listenTo(this.playback, c.default.PLAYBACK_ENDED, this.onEnded), this.listenTo(this.playback, c.default.PLAYBACK_PLAY, this.playing), this.listenTo(this.playback, c.default.PLAYBACK_PAUSE, this.paused), this.listenTo(this.playback, c.default.PLAYBACK_STOP, this.stopped), this.listenTo(this.playback, c.default.PLAYBACK_ERROR, this.error), this.listenTo(this.playback, c.default.PLAYBACK_SUBTITLE_AVAILABLE, this.subtitleAvailable), this.listenTo(this.playback, c.default.PLAYBACK_SUBTITLE_CHANGED, this.subtitleChanged)
			}, o.prototype.subtitleAvailable = function() {
				this.trigger(c.default.CONTAINER_SUBTITLE_AVAILABLE)
			}, o.prototype.subtitleChanged = function(t) {
				this.trigger(c.default.CONTAINER_SUBTITLE_CHANGED, t)
			}, o.prototype.playbackStateChanged = function(t) {
				this.trigger(c.default.CONTAINER_PLAYBACKSTATE, t)
			}, o.prototype.playbackDvrStateChanged = function(t) {
				this.settings = this.playback.settings, this.dvrInUse = t, this.trigger(c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, t)
			}, o.prototype.updateBitrate = function(t) {
				this.trigger(c.default.CONTAINER_BITRATE, t)
			}, o.prototype.statsReport = function(t) {
				this.trigger(c.default.CONTAINER_STATS_REPORT, t)
			}, o.prototype.getPlaybackType = function() {
				return this.playback.getPlaybackType()
			}, o.prototype.isDvrEnabled = function() {
				return !!this.playback.dvrEnabled
			}, o.prototype.isDvrInUse = function() {
				return !!this.dvrInUse
			}, o.prototype.destroy = function() {
				this.trigger(c.default.CONTAINER_DESTROYED, this, this.name), this.stopListening(), this.plugins.forEach(function(t) {
					return t.destroy()
				}), this.$el.remove()
			}, o.prototype.setStyle = function(t) {
				this.$el.css(t)
			}, o.prototype.animate = function(t, e) {
				return this.$el.animate(t, e).promise()
			}, o.prototype.ready = function() {
				this.isReady = !0, this.trigger(c.default.CONTAINER_READY, this.name)
			}, o.prototype.isPlaying = function() {
				return this.playback.isPlaying()
			}, o.prototype.getStartTimeOffset = function() {
				return this.playback.getStartTimeOffset()
			}, o.prototype.getCurrentTime = function() {
				return this.currentTime
			}, o.prototype.getDuration = function() {
				return this.playback.getDuration()
			}, o.prototype.error = function(t) {
				this.isReady || this.ready(), this.trigger(c.default.CONTAINER_ERROR, t, this.name)
			}, o.prototype.loadedMetadata = function(t) {
				this.trigger(c.default.CONTAINER_LOADEDMETADATA, t)
			}, o.prototype.timeUpdated = function(t) {
				this.currentTime = t.current, this.trigger(c.default.CONTAINER_TIMEUPDATE, t, this.name)
			}, o.prototype.progress = function() {
				for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				this.trigger.apply(this, [c.default.CONTAINER_PROGRESS].concat(e, [this.name]))
			}, o.prototype.playing = function() {
				this.trigger(c.default.CONTAINER_PLAY, this.name)
			}, o.prototype.paused = function() {
				this.trigger(c.default.CONTAINER_PAUSE, this.name)
			}, o.prototype.play = function() {
				this.playback.play()
			}, o.prototype.stop = function() {
				this.playback.stop(), this.currentTime = 0
			}, o.prototype.pause = function() {
				this.playback.pause()
			}, o.prototype.onEnded = function() {
				this.trigger(c.default.CONTAINER_ENDED, this, this.name), this.currentTime = 0
			}, o.prototype.stopped = function() {
				this.trigger(c.default.CONTAINER_STOP)
			}, o.prototype.clicked = function() {
				this.options.chromeless && !this.options.allowUserInteraction || this.trigger(c.default.CONTAINER_CLICK, this, this.name)
			}, o.prototype.dblClicked = function() {
				this.options.chromeless && !this.options.allowUserInteraction || this.trigger(c.default.CONTAINER_DBLCLICK, this, this.name)
			}, o.prototype.onContextMenu = function(t) {
				this.options.chromeless && !this.options.allowUserInteraction || this.trigger(c.default.CONTAINER_CONTEXTMENU, t, this.name)
			}, o.prototype.seek = function(t) {
				this.trigger(c.default.CONTAINER_SEEK, t, this.name), this.playback.seek(t)
			}, o.prototype.onSeeked = function() {
				this.trigger(c.default.CONTAINER_SEEKED, this.name)
			}, o.prototype.seekPercentage = function(t) {
				var e = this.getDuration();
				if (0 <= t && t <= 100) {
					var n = e * (t / 100);
					this.seek(n)
				}
			}, o.prototype.setVolume = function(t) {
				this.volume = parseInt(t, 10), this.trigger(c.default.CONTAINER_VOLUME, t, this.name), this.playback.volume(t)
			}, o.prototype.fullscreen = function() {
				this.trigger(c.default.CONTAINER_FULLSCREEN, this.name)
			}, o.prototype.onBuffering = function() {
				this.trigger(c.default.CONTAINER_STATE_BUFFERING, this.name)
			}, o.prototype.bufferfull = function() {
				this.trigger(c.default.CONTAINER_STATE_BUFFERFULL, this.name)
			}, o.prototype.addPlugin = function(t) {
				this.plugins.push(t)
			}, o.prototype.hasPlugin = function(t) {
				return !!this.getPlugin(t)
			}, o.prototype.getPlugin = function(e) {
				return this.plugins.filter(function(t) {
					return t.name === e
				})[0]
			}, o.prototype.mouseEnter = function() {
				this.options.chromeless && !this.options.allowUserInteraction || this.trigger(c.default.CONTAINER_MOUSE_ENTER)
			}, o.prototype.mouseLeave = function() {
				this.options.chromeless && !this.options.allowUserInteraction || this.trigger(c.default.CONTAINER_MOUSE_LEAVE)
			}, o.prototype.settingsUpdate = function() {
				this.settings = this.playback.settings, this.trigger(c.default.CONTAINER_SETTINGSUPDATE)
			}, o.prototype.highDefinitionUpdate = function(t) {
				this.trigger(c.default.CONTAINER_HIGHDEFINITIONUPDATE, t)
			}, o.prototype.isHighDefinitionInUse = function() {
				return this.playback.isHighDefinitionInUse()
			}, o.prototype.disableMediaControl = function() {
				this.mediaControlDisabled || (this.mediaControlDisabled = !0, this.trigger(c.default.CONTAINER_MEDIACONTROL_DISABLE))
			}, o.prototype.enableMediaControl = function() {
				this.mediaControlDisabled && (this.mediaControlDisabled = !1, this.trigger(c.default.CONTAINER_MEDIACONTROL_ENABLE))
			}, o.prototype.updateStyle = function() {
				!this.options.chromeless || this.options.allowUserInteraction ? this.$el.removeClass("chromeless") : this.$el.addClass("chromeless")
			}, o.prototype.configure = function(t) {
				this._options = d.default.extend(this._options, t), this.updateStyle(), this.playback.configure(this.options), this.trigger(c.default.CONTAINER_OPTIONS_CHANGE)
			}, o.prototype.render = function() {
				return this.$el.append(this.playback.render().el), this.updateStyle(), this
			}, o
		}(r.default);
		e.default = f, (0, i.default)(f.prototype, o.default), t.exports = e.default
	}, function(t, e, n) {
		var i = n(157);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, ".container[data-container] {\n  position: absolute;\n  background-color: black;\n  height: 100%;\n  width: 100%; }\n  .container[data-container] .chromeless {\n    cursor: default; }\n\n[data-player]:not(.nocursor) .container[data-container]:not(.chromeless).pointer-enabled {\n  cursor: pointer; }\n", ""])
	}, function(t, e) {
		t.exports = function(t) {
			var e = "undefined" != typeof window && window.location;
			if (!e) throw new Error("fixUrls requires window.location");
			if (!t || "string" != typeof t) return t;
			var r = e.protocol + "//" + e.host,
				o = r + e.pathname.replace(/\/[^\/]*$/, "/");
			return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t, e) {
				var n, i = e.trim().replace(/^"(.*)"$/, function(t, e) {
					return e
				}).replace(/^'(.*)'$/, function(t, e) {
					return e
				});
				return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i) ? t : (n = 0 === i.indexOf("//") ? i : 0 === i.indexOf("/") ? r + i : o + i.replace(/^\.\//, ""), "url(" + JSON.stringify(n) + ")")
			})
		}
	}, function(C, L, k) {
		"use strict";
		(function(r) {
			Object.defineProperty(L, "__esModule", {
				value: !0
			});
			var e = i(k(81)),
				o = i(k(0)),
				a = i(k(1)),
				t = i(k(3)),
				s = i(k(2)),
				l = k(5),
				u = k(60),
				c = i(k(4)),
				n = i(k(23)),
				d = i(k(14)),
				h = i(k(30)),
				f = i(k(8)),
				p = i(k(10)),
				g = i(k(6));
			k(161);
			var m = i(k(163)),
				y = i(k(62)),
				v = i(k(84)),
				A = i(k(164)),
				b = i(k(165)),
				_ = i(k(166)),
				E = i(k(167)),
				T = i(k(168)),
				S = i(k(169));

			function i(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			var w = function(n) {
				function i(t) {
					(0, o.default)(this, i);
					var e = (0, a.default)(this, n.call(this, t));
					return e.persistConfig = e.options.persistConfig, e.container = t.container, e.currentPositionValue = null, e.currentDurationValue = null, e.keepVisible = !1, e.fullScreenOnVideoTagSupported = null, e.setInitialVolume(), e.addEventListeners(), e.settings = {
						left: ["play", "stop", "pause"],
						right: ["volume"],
						default: ["position", "seekbar", "duration"]
					}, e.kibo = new u.Kibo(e.options.focusElement), e.bindKeyEvents(), e.container ? g.default.isEmptyObject(e.container.settings) || (e.settings = g.default.extend({}, e.container.settings)) : e.settings = {}, e.userDisabled = !1, (e.container && e.container.mediaControlDisabled || e.options.chromeless) && e.disable(), e.stopDragHandler = function(t) {
						return e.stopDrag(t)
					}, e.updateDragHandler = function(t) {
						return e.updateDrag(t)
					}, (0, g.default)(document).bind("mouseup", e.stopDragHandler), (0, g.default)(document).bind("mousemove", e.updateDragHandler), e
				}
				return (0, s.default)(i, n), (0, t.default)(i, [{
					key: "name",
					get: function() {
						return "MediaControl"
					}
				}, {
					key: "disabled",
					get: function() {
						return this.userDisabled || this.container && this.container.getPlaybackType() === p.default.NO_OP
					}
				}, {
					key: "attributes",
					get: function() {
						return {
							class: "media-control",
							"data-media-control": ""
						}
					}
				}, {
					key: "events",
					get: function() {
						return {
							"click [data-play]": "play",
							"click [data-pause]": "pause",
							"click [data-playpause]": "togglePlayPause",
							"click [data-stop]": "stop",
							"click [data-playstop]": "togglePlayStop",
							"click [data-fullscreen]": "toggleFullscreen",
							"click .bar-container[data-seekbar]": "seek",
							"click .bar-container[data-volume]": "onVolumeClick",
							"click .drawer-icon[data-volume]": "toggleMute",
							"mouseenter .drawer-container[data-volume]": "showVolumeBar",
							"mouseleave .drawer-container[data-volume]": "hideVolumeBar",
							"mousedown .bar-container[data-volume]": "startVolumeDrag",
							"mousemove .bar-container[data-volume]": "mousemoveOnVolumeBar",
							"mousedown .bar-scrubber[data-seekbar]": "startSeekDrag",
							"mousemove .bar-container[data-seekbar]": "mousemoveOnSeekBar",
							"mouseleave .bar-container[data-seekbar]": "mouseleaveOnSeekBar",
							"mouseenter .media-control-layer[data-controls]": "setUserKeepVisible",
							"mouseleave .media-control-layer[data-controls]": "resetUserKeepVisible"
						}
					}
				}, {
					key: "template",
					get: function() {
						return (0, f.default)(m.default)
					}
				}, {
					key: "volume",
					get: function() {
						return this.container && this.container.isReady ? this.container.volume : this.intendedVolume
					}
				}, {
					key: "muted",
					get: function() {
						return 0 === this.volume
					}
				}]), i.prototype.addEventListeners = function() {
					this.container && (h.default.on(this.options.playerId + ":" + c.default.PLAYER_RESIZE, this.playerResize, this), this.listenTo(this.container, c.default.CONTAINER_PLAY, this.changeTogglePlay), this.listenTo(this.container, c.default.CONTAINER_PAUSE, this.changeTogglePlay), this.listenTo(this.container, c.default.CONTAINER_STOP, this.changeTogglePlay), this.listenTo(this.container, c.default.CONTAINER_DBLCLICK, this.toggleFullscreen), this.listenTo(this.container, c.default.CONTAINER_TIMEUPDATE, this.onTimeUpdate), this.listenTo(this.container, c.default.CONTAINER_PROGRESS, this.updateProgressBar), this.listenTo(this.container, c.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate), this.listenTo(this.container, c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.settingsUpdate), this.listenTo(this.container, c.default.CONTAINER_HIGHDEFINITIONUPDATE, this.highDefinitionUpdate), this.listenTo(this.container, c.default.CONTAINER_MEDIACONTROL_DISABLE, this.disable), this.listenTo(this.container, c.default.CONTAINER_MEDIACONTROL_ENABLE, this.enable), this.listenTo(this.container, c.default.CONTAINER_ENDED, this.ended), this.listenTo(this.container, c.default.CONTAINER_VOLUME, this.onVolumeChanged), this.listenTo(this.container, c.default.CONTAINER_OPTIONS_CHANGE, this.setInitialVolume), "video" === this.container.playback.el.nodeName.toLowerCase() && this.listenToOnce(this.container, c.default.CONTAINER_LOADEDMETADATA, this.onLoadedMetadataOnVideoTag))
				}, i.prototype.disable = function() {
					this.userDisabled = !0, this.hide(), this.unbindKeyEvents(), this.$el.hide()
				}, i.prototype.enable = function() {
					this.options.chromeless || (this.userDisabled = !1, this.bindKeyEvents(), this.show())
				}, i.prototype.play = function() {
					this.container.play()
				}, i.prototype.pause = function() {
					this.container.pause()
				}, i.prototype.stop = function() {
					this.container.stop()
				}, i.prototype.setInitialVolume = function() {
					var t = this.persistConfig ? l.Config.restore("volume") : 100,
						e = this.container && this.container.options || this.options;
					this.setVolume(e.mute ? 0 : t, !0)
				}, i.prototype.onVolumeChanged = function() {
					this.updateVolumeUI()
				}, i.prototype.onLoadedMetadataOnVideoTag = function() {
					var t = this.container.playback.el;
					!l.Fullscreen.fullscreenEnabled() && t.webkitSupportsFullscreen && (this.fullScreenOnVideoTagSupported = !0, this.settingsUpdate())
				}, i.prototype.updateVolumeUI = function() {
					if (this.rendered) {
						this.$volumeBarContainer.find(".bar-fill-2").css({});
						var t = this.$volumeBarContainer.width(),
							e = this.$volumeBarBackground.width(),
							n = (t - e) / 2,
							i = e * this.volume / 100 + n;
						this.$volumeBarFill.css({
							width: this.volume + "%"
						}), this.$volumeBarScrubber.css({
							left: i
						}), this.$volumeBarContainer.find(".segmented-bar-element").removeClass("fill");
						var r = Math.ceil(this.volume / 10);
						this.$volumeBarContainer.find(".segmented-bar-element").slice(0, r).addClass("fill"), this.$volumeIcon.html(""), this.$volumeIcon.removeClass("muted"), this.muted ? (this.$volumeIcon.append(_.default), this.$volumeIcon.addClass("muted")) : this.$volumeIcon.append(b.default), this.applyButtonStyle(this.$volumeIcon)
					}
				}, i.prototype.changeTogglePlay = function() {
					this.$playPauseToggle.html(""), this.$playStopToggle.html(""), this.container && this.container.isPlaying() ? (this.$playPauseToggle.append(v.default), this.$playStopToggle.append(A.default), this.trigger(c.default.MEDIACONTROL_PLAYING)) : (this.$playPauseToggle.append(y.default), this.$playStopToggle.append(y.default), this.trigger(c.default.MEDIACONTROL_NOTPLAYING), d.default.isMobile && this.show()), this.applyButtonStyle(this.$playPauseToggle), this.applyButtonStyle(this.$playStopToggle)
				}, i.prototype.mousemoveOnSeekBar = function(t) {
					if (this.settings.seekEnabled) {
						var e = t.pageX - this.$seekBarContainer.offset().left - this.$seekBarHover.width() / 2;
						this.$seekBarHover.css({
							left: e
						})
					}
					this.trigger(c.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, t)
				}, i.prototype.mouseleaveOnSeekBar = function(t) {
					this.trigger(c.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, t)
				}, i.prototype.onVolumeClick = function(t) {
					this.setVolume(this.getVolumeFromUIEvent(t))
				}, i.prototype.mousemoveOnVolumeBar = function(t) {
					this.draggingVolumeBar && this.setVolume(this.getVolumeFromUIEvent(t))
				}, i.prototype.playerResize = function(t) {
					this.$fullscreenToggle.html(""), l.Fullscreen.isFullscreen() ? this.$fullscreenToggle.append(T.default) : this.$fullscreenToggle.append(E.default), this.applyButtonStyle(this.$fullscreenToggle), this.$el.removeClass("w320"), (t.width <= 320 || this.options.hideVolumeBar) && this.$el.addClass("w320")
				}, i.prototype.togglePlayPause = function() {
					return this.container.isPlaying() ? this.container.pause() : this.container.play(), !1
				}, i.prototype.togglePlayStop = function() {
					this.container.isPlaying() ? this.container.stop() : this.container.play()
				}, i.prototype.startSeekDrag = function(t) {
					this.settings.seekEnabled && (this.draggingSeekBar = !0, this.$el.addClass("dragging"), this.$seekBarLoaded.addClass("media-control-notransition"), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition"), t && t.preventDefault())
				}, i.prototype.startVolumeDrag = function(t) {
					this.draggingVolumeBar = !0, this.$el.addClass("dragging"), t && t.preventDefault()
				}, i.prototype.stopDrag = function(t) {
					this.draggingSeekBar && this.seek(t), this.$el.removeClass("dragging"), this.$seekBarLoaded.removeClass("media-control-notransition"), this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition dragging"), this.draggingSeekBar = !1, this.draggingVolumeBar = !1
				}, i.prototype.updateDrag = function(t) {
					if (this.draggingSeekBar) {
						t.preventDefault();
						var e = (t.pageX - this.$seekBarContainer.offset().left) / this.$seekBarContainer.width() * 100;
						e = Math.min(100, Math.max(e, 0)), this.setSeekPercentage(e)
					} else this.draggingVolumeBar && (t.preventDefault(), this.setVolume(this.getVolumeFromUIEvent(t)))
				}, i.prototype.getVolumeFromUIEvent = function(t) {
					return (t.pageX - this.$volumeBarContainer.offset().left) / this.$volumeBarContainer.width() * 100
				}, i.prototype.toggleMute = function() {
					this.setVolume(this.muted ? 100 : 0)
				}, i.prototype.setVolume = function(t) {
					var e = this,
						n = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
					t = Math.min(100, Math.max(t, 0)), this.intendedVolume = t, this.persistConfig && !n && l.Config.persist("volume", t);
					var i = function() {
						e.container.isReady ? e.container.setVolume(t) : e.listenToOnce(e.container, c.default.CONTAINER_READY, function() {
							e.container.setVolume(t)
						})
					};
					this.container ? i() : this.listenToOnce(this, c.default.MEDIACONTROL_CONTAINERCHANGED, function() {
						i()
					})
				}, i.prototype.toggleFullscreen = function() {
					this.trigger(c.default.MEDIACONTROL_FULLSCREEN, this.name), this.container.fullscreen(), this.resetUserKeepVisible()
				}, i.prototype.setContainer = function(t) {
					this.container && (this.stopListening(this.container), this.fullScreenOnVideoTagSupported = null), h.default.off(this.options.playerId + ":" + c.default.PLAYER_RESIZE, this.playerResize, this), this.container = t, this.setVolume(this.intendedVolume, !0), this.changeTogglePlay(), this.addEventListeners(), this.settingsUpdate(), this.container.trigger(c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.container.isDvrInUse()), this.container.mediaControlDisabled && this.disable(), this.trigger(c.default.MEDIACONTROL_CONTAINERCHANGED)
				}, i.prototype.showVolumeBar = function() {
					this.hideVolumeId && clearTimeout(this.hideVolumeId), this.$volumeBarContainer.removeClass("volume-bar-hide")
				}, i.prototype.hideVolumeBar = function() {
					var t = this,
						e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 400;
					this.$volumeBarContainer && (this.draggingVolumeBar ? this.hideVolumeId = setTimeout(function() {
						return t.hideVolumeBar()
					}, e) : (this.hideVolumeId && clearTimeout(this.hideVolumeId), this.hideVolumeId = setTimeout(function() {
						return t.$volumeBarContainer.addClass("volume-bar-hide")
					}, e)))
				}, i.prototype.ended = function() {
					this.changeTogglePlay()
				}, i.prototype.updateProgressBar = function(t) {
					var e = t.start / t.total * 100,
						n = t.current / t.total * 100;
					this.$seekBarLoaded.css({
						left: e + "%",
						width: n - e + "%"
					})
				}, i.prototype.onTimeUpdate = function(t) {
					if (!this.draggingSeekBar) {
						var e = t.current < 0 ? t.total : t.current;
						this.currentPositionValue = e, this.currentDurationValue = t.total, this.renderSeekBar()
					}
				}, i.prototype.renderSeekBar = function() {
					if (null !== this.currentPositionValue && null !== this.currentDurationValue) {
						this.currentSeekBarPercentage = 100, (this.container.getPlaybackType() !== p.default.LIVE || this.container.isDvrInUse()) && (this.currentSeekBarPercentage = this.currentPositionValue / this.currentDurationValue * 100), this.setSeekPercentage(this.currentSeekBarPercentage);
						var t = (0, l.formatTime)(this.currentPositionValue),
							e = (0, l.formatTime)(this.currentDurationValue);
						t !== this.displayedPosition && (this.$position.text(t), this.displayedPosition = t), e !== this.displayedDuration && (this.$duration.text(e), this.displayedDuration = e)
					}
				}, i.prototype.seek = function(t) {
					if (this.settings.seekEnabled) {
						var e = (t.pageX - this.$seekBarContainer.offset().left) / this.$seekBarContainer.width() * 100;
						return e = Math.min(100, Math.max(e, 0)), this.container.seekPercentage(e), this.setSeekPercentage(e), !1
					}
				}, i.prototype.setKeepVisible = function() {
					this.keepVisible = !0
				}, i.prototype.resetKeepVisible = function() {
					this.keepVisible = !1
				}, i.prototype.setUserKeepVisible = function() {
					this.userKeepVisible = !0
				}, i.prototype.resetUserKeepVisible = function() {
					this.userKeepVisible = !1
				}, i.prototype.isVisible = function() {
					return !this.$el.hasClass("media-control-hide")
				}, i.prototype.show = function(t) {
					var e = this;
					if (!this.disabled) {
						(!t || t.clientX !== this.lastMouseX && t.clientY !== this.lastMouseY || navigator.userAgent.match(/firefox/i)) && (clearTimeout(this.hideId), this.$el.show(), this.trigger(c.default.MEDIACONTROL_SHOW, this.name), this.$el.removeClass("media-control-hide"), this.hideId = setTimeout(function() {
							return e.hide()
						}, 2e3), t && (this.lastMouseX = t.clientX, this.lastMouseY = t.clientY))
					}
				}, i.prototype.hide = function() {
					var t = this,
						e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
					if (this.isVisible()) {
						var n = e || 2e3;
						clearTimeout(this.hideId), (this.disabled || !1 !== this.options.hideMediaControl) && (!this.disabled && (e || this.userKeepVisible || this.keepVisible || this.draggingSeekBar || this.draggingVolumeBar) ? this.hideId = setTimeout(function() {
							return t.hide()
						}, n) : (this.trigger(c.default.MEDIACONTROL_HIDE, this.name), this.$el.addClass("media-control-hide"), this.hideVolumeBar(0)))
					}
				}, i.prototype.settingsUpdate = function() {
					var t = this.getSettings();
					!t || this.fullScreenOnVideoTagSupported || l.Fullscreen.fullscreenEnabled() || (t.default && (0, l.removeArrayItem)(t.default, "fullscreen"), t.left && (0, l.removeArrayItem)(t.left, "fullscreen"), t.right && (0, l.removeArrayItem)(t.right, "fullscreen")), (0, e.default)(this.settings) !== (0, e.default)(t) && (this.settings = t, this.render())
				}, i.prototype.getSettings = function() {
					return g.default.extend(!0, {}, this.container.settings)
				}, i.prototype.highDefinitionUpdate = function(t) {
					var e = (this.isHD = t) ? "addClass" : "removeClass";
					this.$hdIndicator[e]("enabled")
				}, i.prototype.createCachedElements = function() {
					var t = this.$el.find(".media-control-layer");
					this.$duration = t.find(".media-control-indicator[data-duration]"), this.$fullscreenToggle = t.find("button.media-control-button[data-fullscreen]"), this.$playPauseToggle = t.find("button.media-control-button[data-playpause]"), this.$playStopToggle = t.find("button.media-control-button[data-playstop]"), this.$position = t.find(".media-control-indicator[data-position]"), this.$seekBarContainer = t.find(".bar-container[data-seekbar]"), this.$seekBarHover = t.find(".bar-hover[data-seekbar]"), this.$seekBarLoaded = t.find(".bar-fill-1[data-seekbar]"), this.$seekBarPosition = t.find(".bar-fill-2[data-seekbar]"), this.$seekBarScrubber = t.find(".bar-scrubber[data-seekbar]"), this.$volumeBarContainer = t.find(".bar-container[data-volume]"), this.$volumeContainer = t.find(".drawer-container[data-volume]"), this.$volumeIcon = t.find(".drawer-icon[data-volume]"), this.$volumeBarBackground = this.$el.find(".bar-background[data-volume]"), this.$volumeBarFill = this.$el.find(".bar-fill-1[data-volume]"), this.$volumeBarScrubber = this.$el.find(".bar-scrubber[data-volume]"), this.$hdIndicator = this.$el.find("button.media-control-button[data-hd-indicator]"), this.resetIndicators(), this.initializeIcons()
				}, i.prototype.resetIndicators = function() {
					this.displayedPosition = this.$position.text(), this.displayedDuration = this.$duration.text()
				}, i.prototype.initializeIcons = function() {
					var t = this.$el.find(".media-control-layer");
					t.find("button.media-control-button[data-play]").append(y.default), t.find("button.media-control-button[data-pause]").append(v.default), t.find("button.media-control-button[data-stop]").append(A.default), this.$playPauseToggle.append(y.default), this.$playStopToggle.append(y.default), this.$volumeIcon.append(b.default), this.$fullscreenToggle.append(E.default), this.$hdIndicator.append(S.default)
				}, i.prototype.setSeekPercentage = function(t) {
					t = Math.max(Math.min(t, 100), 0), this.displayedSeekBarPercentage !== t && (this.displayedSeekBarPercentage = t, this.$seekBarPosition.removeClass("media-control-notransition"), this.$seekBarScrubber.removeClass("media-control-notransition"), this.$seekBarPosition.css({
						width: t + "%"
					}), this.$seekBarScrubber.css({
						left: t + "%"
					}))
				}, i.prototype.seekRelative = function(t) {
					if (this.settings.seekEnabled) {
						var e = this.container.getCurrentTime(),
							n = this.container.getDuration(),
							i = Math.min(Math.max(e + t, 0), n);
						i = Math.min(100 * i / n, 100), this.container.seekPercentage(i)
					}
				}, i.prototype.bindKeyAndShow = function(t, e) {
					var n = this;
					this.kibo.down(t, function() {
						return n.show(), e()
					})
				}, i.prototype.bindKeyEvents = function() {
					var e = this;
					if (!d.default.isMobile && !this.options.disableKeyboardShortcuts) {
						this.unbindKeyEvents(), this.bindKeyAndShow("space", function() {
							return e.togglePlayPause()
						}), this.bindKeyAndShow("left", function() {
							return e.seekRelative(-5)
						}), this.bindKeyAndShow("right", function() {
							return e.seekRelative(5)
						}), this.bindKeyAndShow("shift left", function() {
							return e.seekRelative(-10)
						}), this.bindKeyAndShow("shift right", function() {
							return e.seekRelative(10)
						}), this.bindKeyAndShow("shift ctrl left", function() {
							return e.seekRelative(-15)
						}), this.bindKeyAndShow("shift ctrl right", function() {
							return e.seekRelative(15)
						});
						["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].forEach(function(t) {
							e.bindKeyAndShow(t, function() {
								return e.settings.seekEnabled && e.container.seekPercentage(10 * t)
							})
						})
					}
				}, i.prototype.unbindKeyEvents = function() {
					this.kibo && (this.kibo.off("space"), this.kibo.off("left"), this.kibo.off("right"), this.kibo.off("shift left"), this.kibo.off("shift right"), this.kibo.off("shift ctrl left"), this.kibo.off("shift ctrl right"), this.kibo.off(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]))
				}, i.prototype.parseColors = function() {
					if (this.options.mediacontrol) {
						this.buttonsColor = this.options.mediacontrol.buttons;
						var t = this.options.mediacontrol.seekbar;
						this.$el.find(".bar-fill-2[data-seekbar]").css("background-color", t), this.$el.find(".media-control-icon svg path").css("fill", this.buttonsColor), this.$el.find(".segmented-bar-element[data-volume]").css("boxShadow", "inset 2px 0 0 " + this.buttonsColor)
					}
				}, i.prototype.applyButtonStyle = function(t) {
					this.buttonsColor && t && (0, g.default)(t).find("svg path").css("fill", this.buttonsColor)
				}, i.prototype.destroy = function() {
					this.remove(), (0, g.default)(document).unbind("mouseup", this.stopDragHandler), (0, g.default)(document).unbind("mousemove", this.updateDragHandler), this.unbindKeyEvents(), this.stopListening()
				}, i.prototype.configure = function(t) {
					this._options = g.default.extend(this._options, t), this.trigger(c.default.MEDIACONTROL_OPTIONS_CHANGE)
				}, i.prototype.render = function() {
					var t = this;
					this.$el.html(this.template({
						settings: this.settings
					})), this.createCachedElements(), this.$playPauseToggle.addClass("paused"), this.$playStopToggle.addClass("stopped"), this.changeTogglePlay(), this.hideId = setTimeout(function() {
						return t.hide()
					}, 1e3), this.disabled && this.hide(), d.default.isSafari && d.default.isMobile && (d.default.version < 10 ? this.$volumeContainer.css("display", "none") : this.$volumeBarContainer.css("display", "none")), this.$seekBarPosition.addClass("media-control-notransition"), this.$seekBarScrubber.addClass("media-control-notransition");
					var e = 0;
					return this.displayedSeekBarPercentage && (e = this.displayedSeekBarPercentage), this.displayedSeekBarPercentage = null, this.setSeekPercentage(e), r.nextTick(function() {
						t.settings.seekEnabled || t.$seekBarContainer.addClass("seek-disabled"), t.playerResize({
							width: t.options.width,
							height: t.options.height
						}), t.hideVolumeBar(0)
					}), this.parseColors(), this.highDefinitionUpdate(this.isHD), this.rendered = !0, this.updateVolumeUI(), this.trigger(c.default.MEDIACONTROL_RENDERED), this
				}, i
			}(n.default);
			(L.default = w).extend = function(t) {
				return (0, l.extend)(w, t)
			}, C.exports = L.default
		}).call(L, k(61))
	}, function(t, e, n) {
		var i = n(11),
			r = i.JSON || (i.JSON = {
				stringify: JSON.stringify
			});
		t.exports = function(t) {
			return r.stringify.apply(r, arguments)
		}
	}, function(t, e, n) {
		var i = n(162);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		var i = n(82);
		(t.exports = n(7)(!1)).push([t.i, ".media-control-notransition {\n  transition: none !important; }\n\n.media-control[data-media-control] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  z-index: 9999;\n  pointer-events: none; }\n  .media-control[data-media-control].dragging {\n    pointer-events: auto;\n    cursor: -webkit-grabbing !important;\n    cursor: grabbing !important;\n    cursor: url(" + i(n(83)) + "), move; }\n    .media-control[data-media-control].dragging * {\n      cursor: -webkit-grabbing !important;\n      cursor: grabbing !important;\n      cursor: url(" + i(n(83)) + '), move; }\n  .media-control[data-media-control] .media-control-background[data-background] {\n    position: absolute;\n    height: 40%;\n    width: 100%;\n    bottom: 0;\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9));\n    transition: opacity 0.6s ease-out; }\n  .media-control[data-media-control] .media-control-icon {\n    line-height: 0;\n    letter-spacing: 0;\n    speak: none;\n    color: #fff;\n    opacity: 0.5;\n    vertical-align: middle;\n    text-align: left;\n    transition: all 0.1s ease; }\n  .media-control[data-media-control] .media-control-icon:hover {\n    color: white;\n    opacity: 0.75;\n    text-shadow: rgba(255, 255, 255, 0.8) 0 0 5px; }\n  .media-control[data-media-control].media-control-hide .media-control-background[data-background] {\n    opacity: 0; }\n  .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] {\n    bottom: -50px; }\n    .media-control[data-media-control].media-control-hide .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {\n      opacity: 0; }\n  .media-control[data-media-control] .media-control-layer[data-controls] {\n    position: absolute;\n    bottom: 7px;\n    width: 100%;\n    height: 32px;\n    font-size: 0;\n    vertical-align: middle;\n    pointer-events: auto;\n    transition: bottom 0.4s ease-out; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-left-panel[data-media-control] {\n      position: absolute;\n      top: 0;\n      left: 4px;\n      height: 100%; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-center-panel[data-media-control] {\n      height: 100%;\n      text-align: center;\n      line-height: 32px; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-right-panel[data-media-control] {\n      position: absolute;\n      top: 0;\n      right: 4px;\n      height: 100%; }\n    .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button {\n      background-color: transparent;\n      border: 0;\n      margin: 0 6px;\n      padding: 0;\n      cursor: pointer;\n      display: inline-block;\n      width: 32px;\n      height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg {\n        width: 100%;\n        height: 22px; }\n        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button svg path {\n          fill: white; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button:focus {\n        outline: none; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-play] {\n        float: left;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-pause] {\n        float: left;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-stop] {\n        float: left;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-fullscreen] {\n        float: right;\n        background-color: transparent;\n        border: 0;\n        height: 100%; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator] {\n        background-color: transparent;\n        border: 0;\n        cursor: default;\n        display: none;\n        float: right;\n        height: 100%; }\n        .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled {\n          display: block;\n          opacity: 1.0; }\n          .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-hd-indicator].enabled:hover {\n            opacity: 1.0;\n            text-shadow: none; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playpause] {\n        float: left; }\n      .media-control[data-media-control] .media-control-layer[data-controls] button.media-control-button[data-playstop] {\n        float: left; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position], .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {\n      display: inline-block;\n      font-size: 10px;\n      color: white;\n      cursor: default;\n      line-height: 32px;\n      position: relative; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-position] {\n      margin: 0 6px 0 7px; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration] {\n      color: rgba(255, 255, 255, 0.5);\n      margin-right: 6px; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .media-control-indicator[data-duration]:before {\n        content: "|";\n        margin-right: 7px; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] {\n      position: absolute;\n      top: -20px;\n      left: 0;\n      display: inline-block;\n      vertical-align: middle;\n      width: 100%;\n      height: 25px;\n      cursor: pointer; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] {\n        width: 100%;\n        height: 1px;\n        position: relative;\n        top: 12px;\n        background-color: #666666; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-1[data-seekbar] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          background-color: #c2c2c2;\n          transition: all 0.1s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n          position: absolute;\n          top: 0;\n          left: 0;\n          width: 0;\n          height: 100%;\n          background-color: #005aff;\n          transition: all 0.1s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-hover[data-seekbar] {\n          opacity: 0;\n          position: absolute;\n          top: -3px;\n          width: 5px;\n          height: 7px;\n          background-color: rgba(255, 255, 255, 0.5);\n          transition: opacity 0.1s ease; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar]:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {\n        opacity: 1; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled {\n        cursor: default; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar].seek-disabled:hover .bar-background[data-seekbar] .bar-hover[data-seekbar] {\n          opacity: 0; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] {\n        position: absolute;\n        -webkit-transform: translateX(-50%);\n                transform: translateX(-50%);\n        top: 2px;\n        left: 0;\n        width: 20px;\n        height: 20px;\n        opacity: 1;\n        transition: all 0.1s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-scrubber[data-seekbar] .bar-scrubber-icon[data-seekbar] {\n          position: absolute;\n          left: 6px;\n          top: 6px;\n          width: 8px;\n          height: 8px;\n          border-radius: 10px;\n          box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);\n          background-color: white; }\n    .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] {\n      float: right;\n      display: inline-block;\n      height: 32px;\n      cursor: pointer;\n      margin: 0 6px;\n      box-sizing: border-box; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] {\n        float: left;\n        bottom: 0; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] {\n          background-color: transparent;\n          border: 0;\n          box-sizing: content-box;\n          width: 32px;\n          height: 32px;\n          opacity: 0.5; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume]:hover {\n            opacity: 0.75; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg {\n            height: 24px;\n            position: relative;\n            top: 3px; }\n            .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume] svg path {\n              fill: white; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .drawer-icon-container[data-volume] .drawer-icon[data-volume].muted svg {\n            margin-left: 2px; }\n      .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] {\n        float: left;\n        position: relative;\n        overflow: hidden;\n        top: 6px;\n        width: 42px;\n        height: 18px;\n        padding: 3px 0;\n        transition: width .2s ease-out; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] {\n          height: 1px;\n          position: relative;\n          top: 7px;\n          margin: 0 3px;\n          background-color: #666666; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-1[data-volume] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 100%;\n            background-color: #c2c2c2;\n            transition: all 0.1s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-fill-2[data-volume] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 0;\n            height: 100%;\n            background-color: #005aff;\n            transition: all 0.1s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-background[data-volume] .bar-hover[data-volume] {\n            opacity: 0;\n            position: absolute;\n            top: -3px;\n            width: 5px;\n            height: 7px;\n            background-color: rgba(255, 255, 255, 0.5);\n            transition: opacity 0.1s ease; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] {\n          position: absolute;\n          -webkit-transform: translateX(-50%);\n                  transform: translateX(-50%);\n          top: 0px;\n          left: 0;\n          width: 20px;\n          height: 20px;\n          opacity: 1;\n          transition: all 0.1s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .bar-scrubber[data-volume] .bar-scrubber-icon[data-volume] {\n            position: absolute;\n            left: 6px;\n            top: 6px;\n            width: 8px;\n            height: 8px;\n            border-radius: 10px;\n            box-shadow: 0 0 0 6px rgba(255, 255, 255, 0.2);\n            background-color: white; }\n        .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume] {\n          float: left;\n          width: 4px;\n          padding-left: 2px;\n          height: 12px;\n          opacity: 0.5;\n          box-shadow: inset 2px 0 0 white;\n          transition: -webkit-transform .2s ease-out;\n          transition: transform .2s ease-out;\n          transition: transform .2s ease-out, -webkit-transform .2s ease-out; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume].fill {\n            box-shadow: inset 2px 0 0 #fff;\n            opacity: 1; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:nth-of-type(1) {\n            padding-left: 0; }\n          .media-control[data-media-control] .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume] .segmented-bar-element[data-volume]:hover {\n            -webkit-transform: scaleY(1.5);\n                    transform: scaleY(1.5); }\n  .media-control[data-media-control].w320 .media-control-layer[data-controls] .drawer-container[data-volume] .bar-container[data-volume].volume-bar-hide {\n    width: 0;\n    height: 12px;\n    top: 9px;\n    padding: 0; }\n', ""])
	}, function(t, e) {
		t.exports = '<div class="media-control-background" data-background></div>\n<div class="media-control-layer" data-controls>\n  <%  var renderBar = function(name) { %>\n      <div class="bar-container" data-<%= name %>>\n        <div class="bar-background" data-<%= name %>>\n          <div class="bar-fill-1" data-<%= name %>></div>\n          <div class="bar-fill-2" data-<%= name %>></div>\n          <div class="bar-hover" data-<%= name %>></div>\n        </div>\n        <div class="bar-scrubber" data-<%= name %>>\n          <div class="bar-scrubber-icon" data-<%= name %>></div>\n        </div>\n      </div>\n  <%  }; %>\n  <%  var renderSegmentedBar = function(name, segments) {\n      segments = segments || 10; %>\n    <div class="bar-container" data-<%= name %>>\n    <% for (var i = 0; i < segments; i++) { %>\n      <div class="segmented-bar-element" data-<%= name %>></div>\n    <% } %>\n    </div>\n  <% }; %>\n  <% var renderDrawer = function(name, renderContent) { %>\n      <div class="drawer-container" data-<%= name %>>\n        <div class="drawer-icon-container" data-<%= name %>>\n          <div class="drawer-icon media-control-icon" data-<%= name %>></div>\n          <span class="drawer-text" data-<%= name %>></span>\n        </div>\n        <% renderContent(name); %>\n      </div>\n  <% }; %>\n  <% var renderIndicator = function(name) { %>\n      <div class="media-control-indicator" data-<%= name %>></div>\n  <% }; %>\n  <% var renderButton = function(name) { %>\n    <button type="button" class="media-control-button media-control-icon" data-<%= name %> aria-label="<%= name %>"></button>\n  <% }; %>\n  <%  var templates = {\n        bar: renderBar,\n        segmentedBar: renderSegmentedBar,\n      };\n      var render = function(settingsList) {\n        settingsList.forEach(function(setting) {\n          if(setting === "seekbar") {\n            renderBar(setting);\n          } else if (setting === "volume") {\n            renderDrawer(setting, settings.volumeBarTemplate ? templates[settings.volumeBarTemplate] : function(name) { return renderSegmentedBar(name); });\n          } else if (setting === "duration" || setting === "position") {\n            renderIndicator(setting);\n          } else {\n            renderButton(setting);\n          }\n        });\n      }; %>\n  <% if (settings.default && settings.default.length) { %>\n  <div class="media-control-center-panel" data-media-control>\n    <% render(settings.default); %>\n  </div>\n  <% } %>\n  <% if (settings.left && settings.left.length) { %>\n  <div class="media-control-left-panel" data-media-control>\n    <% render(settings.left); %>\n  </div>\n  <% } %>\n  <% if (settings.right && settings.right.length) { %>\n  <div class="media-control-right-panel" data-media-control>\n    <% render(settings.right); %>\n  </div>\n  <% } %>\n</div>\n'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M1.712 1.24h12.6v13.52h-12.6z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M11.5 11h-.002v1.502L7.798 10H4.5V6h3.297l3.7-2.502V4.5h.003V11zM11 4.49L7.953 6.5H5v3h2.953L11 11.51V4.49z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" fill="#010101" d="M9.75 11.51L6.7 9.5H3.75v-3H6.7L9.75 4.49v.664l.497.498V3.498L6.547 6H3.248v4h3.296l3.7 2.502v-2.154l-.497.5v.662zm3-5.165L12.404 6l-1.655 1.653L9.093 6l-.346.345L10.402 8 8.747 9.654l.346.347 1.655-1.653L12.403 10l.348-.346L11.097 8l1.655-1.655z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M7.156 8L4 11.156V8.5H3V13h4.5v-1H4.844L8 8.844 7.156 8zM8.5 3v1h2.657L8 7.157 8.846 8 12 4.844V7.5h1V3H8.5z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M13.5 3.344l-.844-.844L9.5 5.656V3h-1v4.5H13v-1h-2.656L13.5 3.344zM3 9.5h2.656L2.5 12.656l.844.844L6.5 10.344V13h1V8.5H3v1z"></path></svg>'
	}, function(t, e) {
		t.exports = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="#010101" d="M5.375 7.062H2.637V4.26H.502v7.488h2.135V8.9h2.738v2.848h2.133V4.26H5.375v2.802zm5.97-2.81h-2.84v7.496h2.798c2.65 0 4.195-1.607 4.195-3.77v-.022c0-2.162-1.523-3.704-4.154-3.704zm2.06 3.758c0 1.21-.81 1.896-2.03 1.896h-.83V6.093h.83c1.22 0 2.03.696 2.03 1.896v.02z"></path></svg>'
	}, function(t, e, n) {
		var i = n(171);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, '[data-player] {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  position: relative;\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-style: normal;\n  font-weight: normal;\n  text-align: center;\n  overflow: hidden;\n  font-size: 100%;\n  font-family: "Roboto", "Open Sans", Arial, sans-serif;\n  text-shadow: 0 0 0;\n  box-sizing: border-box; }\n  [data-player] div, [data-player] span, [data-player] applet, [data-player] object, [data-player] iframe,\n  [data-player] h1, [data-player] h2, [data-player] h3, [data-player] h4, [data-player] h5, [data-player] h6, [data-player] p, [data-player] blockquote, [data-player] pre,\n  [data-player] a, [data-player] abbr, [data-player] acronym, [data-player] address, [data-player] big, [data-player] cite, [data-player] code,\n  [data-player] del, [data-player] dfn, [data-player] em, [data-player] img, [data-player] ins, [data-player] kbd, [data-player] q, [data-player] s, [data-player] samp,\n  [data-player] small, [data-player] strike, [data-player] strong, [data-player] sub, [data-player] sup, [data-player] tt, [data-player] var,\n  [data-player] b, [data-player] u, [data-player] i, [data-player] center,\n  [data-player] dl, [data-player] dt, [data-player] dd, [data-player] ol, [data-player] ul, [data-player] li,\n  [data-player] fieldset, [data-player] form, [data-player] label, [data-player] legend,\n  [data-player] table, [data-player] caption, [data-player] tbody, [data-player] tfoot, [data-player] thead, [data-player] tr, [data-player] th, [data-player] td,\n  [data-player] article, [data-player] aside, [data-player] canvas, [data-player] details, [data-player] embed,\n  [data-player] figure, [data-player] figcaption, [data-player] footer, [data-player] header, [data-player] hgroup,\n  [data-player] menu, [data-player] nav, [data-player] output, [data-player] ruby, [data-player] section, [data-player] summary,\n  [data-player] time, [data-player] mark, [data-player] audio, [data-player] video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font: inherit;\n    font-size: 100%;\n    vertical-align: baseline; }\n  [data-player] table {\n    border-collapse: collapse;\n    border-spacing: 0; }\n  [data-player] caption, [data-player] th, [data-player] td {\n    text-align: left;\n    font-weight: normal;\n    vertical-align: middle; }\n  [data-player] q, [data-player] blockquote {\n    quotes: none; }\n    [data-player] q:before, [data-player] q:after, [data-player] blockquote:before, [data-player] blockquote:after {\n      content: "";\n      content: none; }\n  [data-player] a img {\n    border: none; }\n  [data-player]:focus {\n    outline: 0; }\n  [data-player] * {\n    max-width: none;\n    box-sizing: inherit;\n    float: none; }\n  [data-player] div {\n    display: block; }\n  [data-player].fullscreen {\n    width: 100% !important;\n    height: 100% !important;\n    top: 0;\n    left: 0; }\n  [data-player].nocursor {\n    cursor: none; }\n\n.clappr-style {\n  display: none !important; }\n', ""])
	}, function(t, e, n) {
		var i = n(82);
		(t.exports = n(7)(!1)).push([t.i, '@font-face {\n  font-family: "Roboto";\n  font-style: normal;\n  font-weight: 400;\n  src: local("Roboto"), local("Roboto-Regular"), url(' + i(n(173)) + ') format("truetype");\n}\n', ""])
	}, function(t, e) {
		t.exports = "<%=baseUrl%>/38861cba61c66739c1452c3a71e39852.ttf"
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = o(n(76)),
			s = o(n(63)),
			l = o(n(0)),
			u = o(n(1)),
			i = o(n(2)),
			r = o(n(15)),
			c = o(n(40)),
			d = o(n(41)),
			h = o(n(88)),
			f = o(n(89)),
			p = o(n(90)),
			g = o(n(91)),
			m = o(n(92)),
			y = o(n(93)),
			v = o(n(94)),
			A = o(n(210)),
			b = o(n(95)),
			_ = o(n(96)),
			E = o(n(220)),
			T = o(n(97)),
			S = o(n(98)),
			w = o(n(227)),
			C = o(n(99)),
			L = o(n(234)),
			k = o(n(239)),
			x = o(n(240)),
			R = o(n(241)),
			O = o(n(242));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var I = function(r) {
			function o() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
					e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
					n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
				(0, l.default)(this, o);
				var i = (0, u.default)(this, r.call(this));
				return i.playerId = e, i.playbackPlugins = [], n || (i.playbackPlugins = [].concat((0, s.default)(i.playbackPlugins), [g.default])), i.playbackPlugins = [].concat((0, s.default)(i.playbackPlugins), [d.default, f.default]), n || (i.playbackPlugins = [].concat((0, s.default)(i.playbackPlugins), [h.default, p.default])), i.playbackPlugins = [].concat((0, s.default)(i.playbackPlugins), [m.default, y.default]), i.containerPlugins = [v.default, b.default, _.default, A.default, E.default, T.default], i.corePlugins = [S.default, w.default, C.default, L.default, k.default, x.default, R.default, O.default], Array.isArray(t) || i.validateExternalPluginsType(t), i.addExternalPlugins(t), i
			}
			return (0, i.default)(o, r), o.prototype.groupPluginsByType = function(t) {
				return Array.isArray(t) && (t = t.reduce(function(t, e) {
					return t[e.type] || (t[e.type] = []), t[e.type].push(e), t
				}, {})), t
			}, o.prototype.removeDups = function(t) {
				var e = t.reduceRight(function(t, e) {
						return t[e.prototype.name] && delete t[e.prototype.name], t[e.prototype.name] = e, t
					}, (0, a.default)(null)),
					n = [];
				for (var i in e) n.unshift(e[i]);
				return n
			}, o.prototype.addExternalPlugins = function(t) {
				(t = this.groupPluginsByType(t)).playback && (this.playbackPlugins = this.removeDups(t.playback.concat(this.playbackPlugins))), t.container && (this.containerPlugins = this.removeDups(t.container.concat(this.containerPlugins))), t.core && (this.corePlugins = this.removeDups(t.core.concat(this.corePlugins))), c.default.getInstance(this.playerId).playbackPlugins = this.playbackPlugins
			}, o.prototype.validateExternalPluginsType = function(t) {
				["playback", "container", "core"].forEach(function(n) {
					(t[n] || []).forEach(function(t) {
						var e = "external " + t.type + " plugin on " + n + " array";
						if (t.type !== n) throw new ReferenceError(e)
					})
				})
			}, o
		}(r.default);
		e.default = I, t.exports = e.default
	}, function(t, e, n) {
		n(71), n(176), t.exports = n(11).Array.from
	}, function(t, e, n) {
		"use strict";
		var h = n(44),
			i = n(16),
			f = n(38),
			p = n(177),
			g = n(178),
			m = n(69),
			y = n(179),
			v = n(180);
		i(i.S + i.F * !n(182)(function(t) {
			Array.from(t)
		}), "Array", {
			from: function(t) {
				var e, n, i, r, o = f(t),
					a = "function" == typeof this ? this : Array,
					s = arguments.length,
					l = 1 < s ? arguments[1] : void 0,
					u = void 0 !== l,
					c = 0,
					d = v(o);
				if (u && (l = h(l, 2 < s ? arguments[2] : void 0, 2)), null == d || a == Array && g(d))
					for (n = new a(e = m(o.length)); c < e; c++) y(n, c, u ? l(o[c], c) : o[c]);
				else
					for (r = d.call(o), n = new a; !(i = r.next()).done; c++) y(n, c, u ? p(r, l, [i.value, c], !0) : i.value);
				return n.length = c, n
			}
		})
	}, function(t, e, n) {
		var o = n(26);
		t.exports = function(e, t, n, i) {
			try {
				return i ? t(o(n)[0], n[1]) : t(n)
			} catch (t) {
				var r = e.return;
				throw void 0 !== r && o(r.call(e)), t
			}
		}
	}, function(t, e, n) {
		var i = n(33),
			r = n(13)("iterator"),
			o = Array.prototype;
		t.exports = function(t) {
			return void 0 !== t && (i.Array === t || o[r] === t)
		}
	}, function(t, e, n) {
		"use strict";
		var i = n(18),
			r = n(32);
		t.exports = function(t, e, n) {
			e in t ? i.f(t, e, r(0, n)) : t[e] = n
		}
	}, function(t, e, n) {
		var i = n(181),
			r = n(13)("iterator"),
			o = n(33);
		t.exports = n(11).getIteratorMethod = function(t) {
			if (null != t) return t[r] || t["@@iterator"] || o[i(t)]
		}
	}, function(t, e, n) {
		var r = n(46),
			o = n(13)("toStringTag"),
			a = "Arguments" == r(function() {
				return arguments
			}());
		t.exports = function(t) {
			var e, n, i;
			return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof(n = function(t, e) {
				try {
					return t[e]
				} catch (t) {}
			}(e = Object(t), o)) ? n : a ? r(e) : "Object" == (i = r(e)) && "function" == typeof e.callee ? "Arguments" : i
		}
	}, function(t, e, n) {
		var o = n(13)("iterator"),
			a = !1;
		try {
			var i = [7][o]();
			i.return = function() {
				a = !0
			}, Array.from(i, function() {
				throw 2
			})
		} catch (t) {}
		t.exports = function(t, e) {
			if (!e && !a) return !1;
			var n = !1;
			try {
				var i = [7],
					r = i[o]();
				r.next = function() {
					return {
						done: n = !0
					}
				}, i[o] = function() {
					return r
				}, t(i)
			} catch (t) {}
			return n
		}
	}, function(T, S, w) {
		"use strict";
		(function(i) {
			Object.defineProperty(S, "__esModule", {
				value: !0
			});
			var t = s(w(87)),
				u = s(w(0)),
				c = s(w(1)),
				e = s(w(3)),
				n = s(w(2)),
				r = s(w(63)),
				o = s(w(53)),
				a = w(5),
				d = s(w(10)),
				h = s(w(14)),
				f = s(w(24)),
				p = s(w(4)),
				g = s(w(29)),
				m = s(w(6)),
				y = s(w(8)),
				v = s(w(184));

			function s(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			w(185);
			var A = {
				mp4: ["avc1.42E01E", "avc1.58A01E", "avc1.4D401E", "avc1.64001E", "mp4v.20.8", "mp4v.20.240", "mp4a.40.2"].map(function(t) {
					return 'video/mp4; codecs="' + t + ', mp4a.40.2"'
				}),
				ogg: ['video/ogg; codecs="theora, vorbis"', 'video/ogg; codecs="dirac"', 'video/ogg; codecs="theora, speex"'],
				"3gpp": ['video/3gpp; codecs="mp4v.20.8, samr"'],
				webm: ['video/webm; codecs="vp8, vorbis"'],
				mkv: ['video/x-matroska; codecs="theora, vorbis"'],
				m3u8: ["application/x-mpegurl"]
			};
			A.ogv = A.ogg, A["3gp"] = A["3gpp"];
			var b = {
					wav: ["audio/wav"],
					mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
					aac: ['audio/mp4;codecs="mp4a.40.5"'],
					oga: ["audio/ogg"]
				},
				_ = (0, o.default)(b).reduce(function(t, e) {
					return [].concat((0, r.default)(t), (0, r.default)(b[e]))
				}, []),
				E = {
					code: "unknown",
					message: "unknown"
				},
				l = function(s) {
					function l() {
						(0, u.default)(this, l);
						for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
						var i = (0, c.default)(this, s.call.apply(s, [this].concat(e)));
						i._destroyed = !1, i._loadStarted = !1, i._isBuffering = !1, i._playheadMoving = !1, i._playheadMovingTimer = null, i._stopped = !1, i._ccTrackId = -1, i._setupSrc(i.options.src), i.options.playback || (i.options.playback = i.options || {}), i.options.playback.disableContextMenu = i.options.playback.disableContextMenu || i.options.disableVideoTagContextMenu;
						var r = i.options.playback,
							o = r.preload || (h.default.isSafari ? "auto" : i.options.preload),
							a = void 0;
						return i.options.poster && ("string" == typeof i.options.poster ? a = i.options.poster : "string" == typeof i.options.poster.url && (a = i.options.poster.url)), m.default.extend(i.el, {
							muted: i.options.mute,
							defaultMuted: i.options.mute,
							loop: i.options.loop,
							poster: a,
							preload: o || "metadata",
							controls: (r.controls || i.options.useVideoTagDefaultControls) && "controls",
							crossOrigin: r.crossOrigin,
							"x-webkit-playsinline": r.playInline
						}), r.playInline && i.$el.attr({
							playsinline: "playsinline"
						}), r.crossOrigin && i.$el.attr({
							crossorigin: r.crossOrigin
						}), i.settings = {
							default: ["seekbar"]
						}, i.settings.left = ["playpause", "position", "duration"], i.settings.right = ["fullscreen", "volume", "hd-indicator"], r.externalTracks && i._setupExternalTracks(r.externalTracks), i.options.autoPlay && i.attemptAutoPlay(), i
					}
					return (0, n.default)(l, s), (0, e.default)(l, [{
						key: "name",
						get: function() {
							return "html5_video"
						}
					}, {
						key: "tagName",
						get: function() {
							return this.isAudioOnly ? "audio" : "video"
						}
					}, {
						key: "isAudioOnly",
						get: function() {
							var t = this.options.src,
								e = l._mimeTypesForUrl(t, b, this.options.mimeType);
							return this.options.playback && this.options.playback.audioOnly || this.options.audioOnly || 0 <= _.indexOf(e[0])
						}
					}, {
						key: "attributes",
						get: function() {
							return {
								"data-html5-video": ""
							}
						}
					}, {
						key: "events",
						get: function() {
							return {
								canplay: "_onCanPlay",
								canplaythrough: "_handleBufferingEvents",
								durationchange: "_onDurationChange",
								ended: "_onEnded",
								error: "_onError",
								loadeddata: "_onLoadedData",
								loadedmetadata: "_onLoadedMetadata",
								pause: "_onPause",
								playing: "_onPlaying",
								progress: "_onProgress",
								seeking: "_onSeeking",
								seeked: "_onSeeked",
								stalled: "_handleBufferingEvents",
								timeupdate: "_onTimeUpdate",
								waiting: "_onWaiting"
							}
						}
					}, {
						key: "ended",
						get: function() {
							return this.el.ended
						}
					}, {
						key: "buffering",
						get: function() {
							return this._isBuffering
						}
					}]), l.prototype.attemptAutoPlay = function() {
						var n = this;
						this.canAutoPlay(function(t, e) {
							e && g.default.warn(n.name, "autoplay error.", {
								result: t,
								error: e
							}), t && i.nextTick(function() {
								return !n._destroyed && n.play()
							})
						})
					}, l.prototype.canAutoPlay = function(t) {
						h.default.isMobile ? t(this.consented && a.DomRecycler.options.recycleVideo, null) : (0, a.canAutoPlayMedia)(t, {
							timeout: this.options.autoPlayTimeout || 500,
							inline: this.options.playback.playInline || !1,
							muted: this.options.mute || !1
						})
					}, l.prototype._setupExternalTracks = function(t) {
						this._externalTracks = t.map(function(t) {
							return {
								kind: t.kind || "subtitles",
								label: t.label,
								lang: t.lang,
								src: t.src
							}
						})
					}, l.prototype._setupSrc = function(t) {
						this.el.src !== t && (this._ccIsSetup = !1, this.el.src = t, this._src = this.el.src)
					}, l.prototype._onLoadedMetadata = function(t) {
						this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_LOADEDMETADATA, {
							duration: t.target.duration,
							data: t
						}), this._updateSettings();
						var e = void 0 === this._options.autoSeekFromUrl || this._options.autoSeekFromUrl;
						this.getPlaybackType() !== d.default.LIVE && e && this._checkInitialSeek()
					}, l.prototype._onDurationChange = function() {
						this._updateSettings(), this._onTimeUpdate(), this._onProgress()
					}, l.prototype._updateSettings = function() {
						this.getPlaybackType() === d.default.VOD || this.getPlaybackType() === d.default.AOD ? this.settings.left = ["playpause", "position", "duration"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(p.default.PLAYBACK_SETTINGSUPDATE)
					}, l.prototype.isSeekEnabled = function() {
						return isFinite(this.getDuration())
					}, l.prototype.getPlaybackType = function() {
						var t = "audio" === this.tagName ? d.default.AOD : d.default.VOD;
						return 0 <= [0, void 0, 1 / 0].indexOf(this.el.duration) ? d.default.LIVE : t
					}, l.prototype.isHighDefinitionInUse = function() {
						return !1
					}, l.prototype.consent = function() {
						this.isPlaying() || (s.prototype.consent.call(this), this.el.load())
					}, l.prototype.play = function() {
						this.trigger(p.default.PLAYBACK_PLAY_INTENT), this._stopped = !1, this._setupSrc(this._src), this._handleBufferingEvents();
						var t = this.el.play();
						t && t.catch && t.catch(function() {})
					}, l.prototype.pause = function() {
						this.el.pause()
					}, l.prototype.stop = function() {
						this.pause(), this._stopped = !0, this.el.removeAttribute("src"), this._stopPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_STOP)
					}, l.prototype.volume = function(t) {
						0 === t ? (this.$el.attr({
							muted: "true"
						}), this.el.muted = !0) : (this.$el.attr({
							muted: null
						}), this.el.muted = !1, this.el.volume = t / 100)
					}, l.prototype.mute = function() {
						this.el.muted = !0
					}, l.prototype.unmute = function() {
						this.el.muted = !1
					}, l.prototype.isMuted = function() {
						return !!this.el.volume
					}, l.prototype.isPlaying = function() {
						return !this.el.paused && !this.el.ended
					}, l.prototype._startPlayheadMovingChecks = function() {
						null === this._playheadMovingTimer && (this._playheadMovingTimeOnCheck = null, this._determineIfPlayheadMoving(), this._playheadMovingTimer = setInterval(this._determineIfPlayheadMoving.bind(this), 500))
					}, l.prototype._stopPlayheadMovingChecks = function() {
						null !== this._playheadMovingTimer && (clearInterval(this._playheadMovingTimer), this._playheadMovingTimer = null, this._playheadMoving = !1)
					}, l.prototype._determineIfPlayheadMoving = function() {
						var t = this._playheadMovingTimeOnCheck,
							e = this.el.currentTime;
						this._playheadMoving = t !== e, this._playheadMovingTimeOnCheck = e, this._handleBufferingEvents()
					}, l.prototype._onWaiting = function() {
						this._loadStarted = !0, this._handleBufferingEvents()
					}, l.prototype._onLoadedData = function() {
						this._loadStarted = !0, this._handleBufferingEvents()
					}, l.prototype._onCanPlay = function() {
						this._handleBufferingEvents()
					}, l.prototype._onPlaying = function() {
						this._checkForClosedCaptions(), this._startPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_PLAY)
					}, l.prototype._onPause = function() {
						this._stopPlayheadMovingChecks(), this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_PAUSE)
					}, l.prototype._onSeeking = function() {
						this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_SEEK)
					}, l.prototype._onSeeked = function() {
						this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_SEEKED)
					}, l.prototype._onEnded = function() {
						this._handleBufferingEvents(), this.trigger(p.default.PLAYBACK_ENDED, this.name)
					}, l.prototype._handleBufferingEvents = function() {
						var t = !this.el.ended && !this.el.paused,
							e = this._loadStarted && !this.el.ended && !this._stopped && (t && !this._playheadMoving || this.el.readyState < this.el.HAVE_FUTURE_DATA);
						this._isBuffering !== e && ((this._isBuffering = e) ? this.trigger(p.default.PLAYBACK_BUFFERING, this.name) : this.trigger(p.default.PLAYBACK_BUFFERFULL, this.name))
					}, l.prototype._onError = function() {
						var t = this.el.error || E,
							e = t.code,
							n = t.message,
							i = e === E.code,
							r = this.createError({
								code: e,
								description: n,
								raw: this.el.error,
								level: i ? f.default.Levels.WARN : f.default.Levels.FATAL
							});
						i ? g.default.warn(this.name, "HTML5 unknown error: ", r) : this.trigger(p.default.PLAYBACK_ERROR, r)
					}, l.prototype.destroy = function() {
						this._destroyed = !0, this.handleTextTrackChange && this.el.textTracks.removeEventListener("change", this.handleTextTrackChange), s.prototype.destroy.call(this), this.el.removeAttribute("src"), this._src = null, a.DomRecycler.garbage(this.$el)
					}, l.prototype.seek = function(t) {
						this.el.currentTime = t
					}, l.prototype.seekPercentage = function(t) {
						var e = this.el.duration * (t / 100);
						this.seek(e)
					}, l.prototype._checkInitialSeek = function() {
						var t = (0, a.seekStringToSeconds)();
						0 !== t && this.seek(t)
					}, l.prototype.getCurrentTime = function() {
						return this.el.currentTime
					}, l.prototype.getDuration = function() {
						return this.el.duration
					}, l.prototype._onTimeUpdate = function() {
						this.getPlaybackType() === d.default.LIVE ? this.trigger(p.default.PLAYBACK_TIMEUPDATE, {
							current: 1,
							total: 1
						}, this.name) : this.trigger(p.default.PLAYBACK_TIMEUPDATE, {
							current: this.el.currentTime,
							total: this.el.duration
						}, this.name)
					}, l.prototype._onProgress = function() {
						if (this.el.buffered.length) {
							for (var t = [], e = 0, n = 0; n < this.el.buffered.length; n++) t = [].concat((0, r.default)(t), [{
								start: this.el.buffered.start(n),
								end: this.el.buffered.end(n)
							}]), this.el.currentTime >= t[n].start && this.el.currentTime <= t[n].end && (e = n);
							var i = {
								start: t[e].start,
								current: t[e].end,
								total: this.el.duration
							};
							this.trigger(p.default.PLAYBACK_PROGRESS, i, t)
						}
					}, l.prototype._typeFor = function(t) {
						var e = l._mimeTypesForUrl(t, A, this.options.mimeType);
						return 0 === e.length && (e = l._mimeTypesForUrl(t, b, this.options.mimeType)), (e[0] || "").split(";")[0]
					}, l.prototype._ready = function() {
						this._isReadyState || (this._isReadyState = !0, this.trigger(p.default.PLAYBACK_READY, this.name))
					}, l.prototype._checkForClosedCaptions = function() {
						if (this.isHTML5Video && !this._ccIsSetup) {
							if (this.hasClosedCaptionsTracks) {
								this.trigger(p.default.PLAYBACK_SUBTITLE_AVAILABLE);
								var t = this.closedCaptionsTrackId;
								this.closedCaptionsTrackId = t, this.handleTextTrackChange = this._handleTextTrackChange.bind(this), this.el.textTracks.addEventListener("change", this.handleTextTrackChange)
							}
							this._ccIsSetup = !0
						}
					}, l.prototype._handleTextTrackChange = function() {
						var t = this.closedCaptionsTracks.find(function(t) {
							return "showing" === t.track.mode
						}) || {
							id: -1
						};
						this._ccTrackId !== t.id && (this._ccTrackId = t.id, this.trigger(p.default.PLAYBACK_SUBTITLE_CHANGED, {
							id: t.id
						}))
					}, l.prototype.render = function() {
						return this.options.playback.disableContextMenu && this.$el.on("contextmenu", function() {
							return !1
						}), this._externalTracks && 0 < this._externalTracks.length && this.$el.html(this.template({
							tracks: this._externalTracks
						})), this._ready(), this
					}, (0, e.default)(l, [{
						key: "isReady",
						get: function() {
							return this._isReadyState
						}
					}, {
						key: "isHTML5Video",
						get: function() {
							return this.name === l.prototype.name
						}
					}, {
						key: "closedCaptionsTracks",
						get: function() {
							var e = 0;
							return (this.el.textTracks ? (0, t.default)(this.el.textTracks) : []).filter(function(t) {
								return "subtitles" === t.kind || "captions" === t.kind
							}).map(function(t) {
								return {
									id: e++,
									name: t.label,
									track: t
								}
							})
						}
					}, {
						key: "closedCaptionsTrackId",
						get: function() {
							return this._ccTrackId
						},
						set: function(e) {
							if ((0, a.isNumber)(e)) {
								var t = this.closedCaptionsTracks,
									n = void 0;
								if (-1 !== e) {
									if (!(n = t.find(function(t) {
											return t.id === e
										}))) return;
									if ("showing" === n.track.mode) return
								}
								t.filter(function(t) {
									return "hidden" !== t.track.mode
								}).forEach(function(t) {
									return t.track.mode = "hidden"
								}), n && (n.track.mode = "showing"), this._ccTrackId = e, this.trigger(p.default.PLAYBACK_SUBTITLE_CHANGED, {
									id: e
								})
							}
						}
					}, {
						key: "template",
						get: function() {
							return (0, y.default)(v.default)
						}
					}]), l
				}(d.default);
			(S.default = l)._mimeTypesForUrl = function(t, e, n) {
				var i = (t.split("?")[0].match(/.*\.(.*)$/) || [])[1],
					r = n || i && e[i.toLowerCase()] || [];
				return r.constructor === Array ? r : [r]
			}, l._canPlay = function(t, e, n, i) {
				var r = l._mimeTypesForUrl(n, e, i),
					o = document.createElement(t);
				return !!r.filter(function(t) {
					return !!o.canPlayType(t).replace(/no/, "")
				})[0]
			}, l.canPlay = function(t, e) {
				return l._canPlay("audio", b, t, e) || l._canPlay("video", A, t, e)
			}, T.exports = S.default
		}).call(S, w(61))
	}, function(t, e) {
		t.exports = '<% for (var i = 0; i < tracks.length; i++) { %>\n  <track data-html5-video-track="<%= i %>" kind="<%= tracks[i].kind %>" label="<%= tracks[i].label %>" srclang="<%= tracks[i].lang %>" src="<%= tracks[i].src %>" />\n<% }; %>\n'
	}, function(t, e, n) {
		var i = n(186);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, "[data-html5-video] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  display: block; }\n", ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = m(n(0)),
			s = m(n(1)),
			i = m(n(3)),
			l = m(n(2)),
			u = n(5),
			r = m(n(64)),
			o = m(n(14)),
			c = m(n(30)),
			d = m(n(8)),
			h = m(n(6)),
			f = m(n(4)),
			p = m(n(10)),
			g = m(n(192));

		function m(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var y = function(r) {
			function o() {
				(0, a.default)(this, o);
				for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var i = (0, s.default)(this, r.call.apply(r, [this].concat(e)));
				return i._src = i.options.src, i._baseUrl = i.options.baseUrl, i._autoPlay = i.options.autoPlay, i.settings = {
					default: ["seekbar"]
				}, i.settings.left = ["playpause", "position", "duration"], i.settings.right = ["fullscreen", "volume"], i.settings.seekEnabled = !0, i._isReadyState = !1, i._addListeners(), i
			}
			return (0, l.default)(o, r), (0, i.default)(o, [{
				key: "name",
				get: function() {
					return "flash"
				}
			}, {
				key: "swfPath",
				get: function() {
					return (0, d.default)(g.default)({
						baseUrl: this._baseUrl
					})
				}
			}, {
				key: "ended",
				get: function() {
					return "ENDED" === this._currentState
				}
			}, {
				key: "buffering",
				get: function() {
					return !!this._bufferingState && "ENDED" !== this._currentState
				}
			}]), o.prototype._bootstrap = function() {
				var t = this;
				this.el.playerPlay ? (this.el.width = "100%", this.el.height = "100%", "PLAYING" === this._currentState ? this._firstPlay() : (this._currentState = "IDLE", this._autoPlay && this.play()), (0, h.default)('<div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%" />').insertAfter(this.$el), 0 < this.getDuration() ? this._metadataLoaded() : c.default.once(this.uniqueId + ":timeupdate", this._metadataLoaded, this)) : (this._attempts = this._attempts || 0, ++this._attempts <= 60 ? setTimeout(function() {
					return t._bootstrap()
				}, 50) : this.trigger(f.default.PLAYBACK_ERROR, {
					message: "Max number of attempts reached"
				}, this.name))
			}, o.prototype._metadataLoaded = function() {
				this._isReadyState = !0, this.trigger(f.default.PLAYBACK_READY, this.name), this.trigger(f.default.PLAYBACK_SETTINGSUPDATE, this.name)
			}, o.prototype.getPlaybackType = function() {
				return p.default.VOD
			}, o.prototype.isHighDefinitionInUse = function() {
				return !1
			}, o.prototype._updateTime = function() {
				this.trigger(f.default.PLAYBACK_TIMEUPDATE, {
					current: this.el.getPosition(),
					total: this.el.getDuration()
				}, this.name)
			}, o.prototype._addListeners = function() {
				c.default.on(this.uniqueId + ":progress", this._progress, this), c.default.on(this.uniqueId + ":timeupdate", this._updateTime, this), c.default.on(this.uniqueId + ":statechanged", this._checkState, this), c.default.on(this.uniqueId + ":flashready", this._bootstrap, this)
			}, o.prototype.stopListening = function() {
				r.prototype.stopListening.call(this), c.default.off(this.uniqueId + ":progress"), c.default.off(this.uniqueId + ":timeupdate"), c.default.off(this.uniqueId + ":statechanged"), c.default.off(this.uniqueId + ":flashready")
			}, o.prototype._checkState = function() {
				this._isIdle || "PAUSED" === this._currentState || ("PLAYING_BUFFERING" !== this._currentState && "PLAYING_BUFFERING" === this.el.getState() ? (this._bufferingState = !0, this.trigger(f.default.PLAYBACK_BUFFERING, this.name), this._currentState = "PLAYING_BUFFERING") : "PLAYING" === this.el.getState() ? (this._bufferingState = !1, this.trigger(f.default.PLAYBACK_BUFFERFULL, this.name), this._currentState = "PLAYING") : "IDLE" === this.el.getState() ? this._currentState = "IDLE" : "ENDED" === this.el.getState() && (this.trigger(f.default.PLAYBACK_ENDED, this.name), this.trigger(f.default.PLAYBACK_TIMEUPDATE, {
					current: 0,
					total: this.el.getDuration()
				}, this.name), this._currentState = "ENDED", this._isIdle = !0))
			}, o.prototype._progress = function() {
				"IDLE" !== this._currentState && "ENDED" !== this._currentState && this.trigger(f.default.PLAYBACK_PROGRESS, {
					start: 0,
					current: this.el.getBytesLoaded(),
					total: this.el.getBytesTotal()
				})
			}, o.prototype._firstPlay = function() {
				var t = this;
				this.el.playerPlay ? (this._isIdle = !1, this.el.playerPlay(this._src), this.listenToOnce(this, f.default.PLAYBACK_BUFFERFULL, function() {
					return t._checkInitialSeek()
				}), this._currentState = "PLAYING") : this.listenToOnce(this, f.default.PLAYBACK_READY, this._firstPlay)
			}, o.prototype._checkInitialSeek = function() {
				var t = (0, u.seekStringToSeconds)(window.location.href);
				0 !== t && this.seekSeconds(t)
			}, o.prototype.play = function() {
				this.trigger(f.default.PLAYBACK_PLAY_INTENT), "PAUSED" === this._currentState || "PLAYING_BUFFERING" === this._currentState ? (this._currentState = "PLAYING", this.el.playerResume(), this.trigger(f.default.PLAYBACK_PLAY, this.name)) : "PLAYING" !== this._currentState && (this._firstPlay(), this.trigger(f.default.PLAYBACK_PLAY, this.name))
			}, o.prototype.volume = function(t) {
				var e = this;
				this.isReady ? this.el.playerVolume(t) : this.listenToOnce(this, f.default.PLAYBACK_BUFFERFULL, function() {
					return e.volume(t)
				})
			}, o.prototype.pause = function() {
				this._currentState = "PAUSED", this.el.playerPause(), this.trigger(f.default.PLAYBACK_PAUSE, this.name)
			}, o.prototype.stop = function() {
				this.el.playerStop(), this.trigger(f.default.PLAYBACK_STOP), this.trigger(f.default.PLAYBACK_TIMEUPDATE, {
					current: 0,
					total: 0
				}, this.name)
			}, o.prototype.isPlaying = function() {
				return !!(this.isReady && -1 < this._currentState.indexOf("PLAYING"))
			}, o.prototype.getDuration = function() {
				return this.el.getDuration()
			}, o.prototype.seekPercentage = function(t) {
				var e = this;
				if (0 < this.el.getDuration()) {
					var n = this.el.getDuration() * (t / 100);
					this.seek(n)
				} else this.listenToOnce(this, f.default.PLAYBACK_BUFFERFULL, function() {
					return e.seekPercentage(t)
				})
			}, o.prototype.seek = function(t) {
				var e = this;
				this.isReady && this.el.playerSeek ? (this.el.playerSeek(t), this.trigger(f.default.PLAYBACK_TIMEUPDATE, {
					current: t,
					total: this.el.getDuration()
				}, this.name), "PAUSED" === this._currentState && this.el.playerPause()) : this.listenToOnce(this, f.default.PLAYBACK_BUFFERFULL, function() {
					return e.seek(t)
				})
			}, o.prototype.destroy = function() {
				clearInterval(this.bootstrapId), r.prototype.stopListening.call(this), this.$el.remove()
			}, (0, i.default)(o, [{
				key: "isReady",
				get: function() {
					return this._isReadyState
				}
			}]), o
		}(r.default);
		(e.default = y).canPlay = function(t) {
			if (o.default.hasFlash && t && t.constructor === String) {
				var e = t.split("?")[0].match(/.*\.(.*)$/) || [];
				return 1 < e.length && !o.default.isMobile && e[1].toLowerCase().match(/^(mp4|mov|f4v|3gpp|3gp)$/)
			}
			return !1
		}, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = d(n(0)),
			r = d(n(3)),
			o = d(n(1)),
			a = d(n(2)),
			s = d(n(10)),
			l = d(n(8)),
			u = d(n(14)),
			c = d(n(189));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(190);
		var h = function(t) {
			function e() {
				return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
			}
			return (0, a.default)(e, t), e.prototype.setElement = function(t) {
				this.$el = t, this.el = t[0]
			}, e.prototype.render = function() {
				return this.$el.attr("data", this.swfPath), this.$el.html(this.template({
					cid: this.cid,
					swfPath: this.swfPath,
					baseUrl: this.baseUrl,
					playbackId: this.uniqueId,
					wmode: this.wmode,
					callbackName: "window.Clappr.flashlsCallbacks." + this.cid
				})), u.default.isIE && (this.$("embed").remove(), u.default.isLegacyIE && this.$el.attr("classid", "clsid:d27cdb6e-ae6d-11cf-96b8-444553540000")), this.el.id = this.cid, this
			}, (0, r.default)(e, [{
				key: "tagName",
				get: function() {
					return "object"
				}
			}, {
				key: "swfPath",
				get: function() {
					return ""
				}
			}, {
				key: "wmode",
				get: function() {
					return "transparent"
				}
			}, {
				key: "template",
				get: function() {
					return (0, l.default)(c.default)
				}
			}, {
				key: "attributes",
				get: function() {
					var t = "application/x-shockwave-flash";
					return u.default.isLegacyIE && (t = ""), {
						class: "clappr-flash-playback",
						type: t,
						width: "100%",
						height: "100%",
						data: this.swfPath,
						"data-flash-playback": this.name
					}
				}
			}]), e
		}(s.default);
		e.default = h, t.exports = e.default
	}, function(t, e) {
		t.exports = '<param name="movie" value="<%= swfPath %>">\n<param name="quality" value="autohigh">\n<param name="swliveconnect" value="true">\n<param name="allowScriptAccess" value="always">\n<param name="bgcolor" value="#000000">\n<param name="allowFullScreen" value="false">\n<param name="wmode" value="<%= wmode %>">\n<param name="tabindex" value="1">\n<param name="FlashVars" value="playbackId=<%= playbackId %>&callback=<%= callbackName %>">\n<embed\n  name="<%= cid %>"\n  type="application/x-shockwave-flash"\n  disabled="disabled"\n  tabindex="-1"\n  enablecontextmenu="false"\n  allowScriptAccess="always"\n  quality="autohigh"\n  pluginspage="http://www.macromedia.com/go/getflashplayer"\n  wmode="<%= wmode %>"\n  swliveconnect="true"\n  allowfullscreen="false"\n  bgcolor="#000000"\n  FlashVars="playbackId=<%= playbackId %>&callback=<%= callbackName %>"\n  data="<%= swfPath %>"\n  src="<%= swfPath %>"\n  width="100%"\n  height="100%">\n</embed>\n'
	}, function(t, e, n) {
		var i = n(191);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, ".clappr-flash-playback[data-flash-playback] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  pointer-events: none; }\n", ""])
	}, function(t, e) {
		t.exports = "<%=baseUrl%>/4b76590b32dab62bc95c1b7951efae78.swf"
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = c(n(0)),
			r = c(n(3)),
			o = c(n(1)),
			a = c(n(2)),
			s = c(n(4)),
			l = c(n(10)),
			u = c(n(41));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var d = function(t) {
			function e() {
				return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
			}
			return (0, a.default)(e, t), e.prototype.updateSettings = function() {
				this.settings.left = ["playpause", "position", "duration"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(s.default.PLAYBACK_SETTINGSUPDATE)
			}, e.prototype.getPlaybackType = function() {
				return l.default.AOD
			}, (0, r.default)(e, [{
				key: "name",
				get: function() {
					return "html5_audio"
				}
			}, {
				key: "tagName",
				get: function() {
					return "audio"
				}
			}, {
				key: "isAudioOnly",
				get: function() {
					return !0
				}
			}]), e
		}(u.default);
		(e.default = d).canPlay = function(t, e) {
			return u.default._canPlay("audio", {
				wav: ["audio/wav"],
				mp3: ["audio/mp3", 'audio/mpeg;codecs="mp3"'],
				aac: ['audio/mp4;codecs="mp4a.40.5"'],
				oga: ["audio/ogg"]
			}, t, e)
		}, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = y(n(0)),
			s = y(n(1)),
			i = y(n(3)),
			l = y(n(2)),
			r = y(n(64)),
			u = y(n(4)),
			c = y(n(8)),
			d = y(n(10)),
			h = y(n(30)),
			o = y(n(14)),
			f = y(n(24)),
			p = y(n(195)),
			g = y(n(196)),
			m = y(n(6));

		function y(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var v = function(r) {
			function o() {
				(0, a.default)(this, o);
				for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var i = (0, s.default)(this, r.call.apply(r, [this].concat(e)));
				return i._src = i.options.src, i._baseUrl = i.options.baseUrl, i._initHlsParameters(i.options), i.highDefinition = !1, i._autoPlay = i.options.autoPlay, i._loop = i.options.loop, i._defaultSettings = {
					left: ["playstop"],
					default: ["seekbar"],
					right: ["fullscreen", "volume", "hd-indicator"],
					seekEnabled: !1
				}, i.settings = m.default.extend({}, i._defaultSettings), i._playbackType = d.default.LIVE, i._hasEnded = !1, i._addListeners(), i
			}
			return (0, l.default)(o, r), (0, i.default)(o, [{
				key: "name",
				get: function() {
					return "flashls"
				}
			}, {
				key: "swfPath",
				get: function() {
					return (0, c.default)(g.default)({
						baseUrl: this._baseUrl
					})
				}
			}, {
				key: "levels",
				get: function() {
					return this._levels || []
				}
			}, {
				key: "currentLevel",
				get: function() {
					return null === this._currentLevel || void 0 === this._currentLevel ? -1 : this._currentLevel
				},
				set: function(t) {
					this._currentLevel = t, this.trigger(u.default.PLAYBACK_LEVEL_SWITCH_START), this.el.playerSetCurrentLevel(t)
				}
			}, {
				key: "ended",
				get: function() {
					return this._hasEnded
				}
			}, {
				key: "buffering",
				get: function() {
					return !!this._bufferingState && !this._hasEnded
				}
			}]), o.prototype._initHlsParameters = function(t) {
				this._autoStartLoad = void 0 === t.autoStartLoad || t.autoStartLoad, this._capLevelToStage = void 0 !== t.capLevelToStage && t.capLevelToStage, this._maxLevelCappingMode = void 0 === t.maxLevelCappingMode ? "downscale" : t.maxLevelCappingMode, this._minBufferLength = void 0 === t.minBufferLength ? -1 : t.minBufferLength, this._minBufferLengthCapping = void 0 === t.minBufferLengthCapping ? -1 : t.minBufferLengthCapping, this._maxBufferLength = void 0 === t.maxBufferLength ? 120 : t.maxBufferLength, this._maxBackBufferLength = void 0 === t.maxBackBufferLength ? 30 : t.maxBackBufferLength, this._lowBufferLength = void 0 === t.lowBufferLength ? 3 : t.lowBufferLength, this._mediaTimePeriod = void 0 === t.mediaTimePeriod ? 100 : t.mediaTimePeriod, this._fpsDroppedMonitoringPeriod = void 0 === t.fpsDroppedMonitoringPeriod ? 5e3 : t.fpsDroppedMonitoringPeriod, this._fpsDroppedMonitoringThreshold = void 0 === t.fpsDroppedMonitoringThreshold ? .2 : t.fpsDroppedMonitoringThreshold, this._capLevelonFPSDrop = void 0 !== t.capLevelonFPSDrop && t.capLevelonFPSDrop, this._smoothAutoSwitchonFPSDrop = void 0 === t.smoothAutoSwitchonFPSDrop ? this.capLevelonFPSDrop : t.smoothAutoSwitchonFPSDrop, this._switchDownOnLevelError = void 0 === t.switchDownOnLevelError || t.switchDownOnLevelError, this._seekMode = void 0 === t.seekMode ? "ACCURATE" : t.seekMode, this._keyLoadMaxRetry = void 0 === t.keyLoadMaxRetry ? 3 : t.keyLoadMaxRetry, this._keyLoadMaxRetryTimeout = void 0 === t.keyLoadMaxRetryTimeout ? 64e3 : t.keyLoadMaxRetryTimeout, this._fragmentLoadMaxRetry = void 0 === t.fragmentLoadMaxRetry ? 3 : t.fragmentLoadMaxRetry, this._fragmentLoadMaxRetryTimeout = void 0 === t.fragmentLoadMaxRetryTimeout ? 4e3 : t.fragmentLoadMaxRetryTimeout, this._fragmentLoadSkipAfterMaxRetry = void 0 === t.fragmentLoadSkipAfterMaxRetry || t.fragmentLoadSkipAfterMaxRetry, this._maxSkippedFragments = void 0 === t.maxSkippedFragments ? 5 : t.maxSkippedFragments, this._flushLiveURLCache = void 0 !== t.flushLiveURLCache && t.flushLiveURLCache, this._initialLiveManifestSize = void 0 === t.initialLiveManifestSize ? 1 : t.initialLiveManifestSize, this._manifestLoadMaxRetry = void 0 === t.manifestLoadMaxRetry ? 3 : t.manifestLoadMaxRetry, this._manifestLoadMaxRetryTimeout = void 0 === t.manifestLoadMaxRetryTimeout ? 64e3 : t.manifestLoadMaxRetryTimeout, this._manifestRedundantLoadmaxRetry = void 0 === t.manifestRedundantLoadmaxRetry ? 3 : t.manifestRedundantLoadmaxRetry, this._startFromBitrate = void 0 === t.startFromBitrate ? -1 : t.startFromBitrate, this._startFromLevel = void 0 === t.startFromLevel ? -1 : t.startFromLevel, this._autoStartMaxDuration = void 0 === t.autoStartMaxDuration ? -1 : t.autoStartMaxDuration, this._seekFromLevel = void 0 === t.seekFromLevel ? -1 : t.seekFromLevel, this._useHardwareVideoDecoder = void 0 !== t.useHardwareVideoDecoder && t.useHardwareVideoDecoder, this._hlsLogEnabled = void 0 === t.hlsLogEnabled || t.hlsLogEnabled, this._logDebug = void 0 !== t.logDebug && t.logDebug, this._logDebug2 = void 0 !== t.logDebug2 && t.logDebug2, this._logWarn = void 0 === t.logWarn || t.logWarn, this._logError = void 0 === t.logError || t.logError, this._hlsMinimumDvrSize = void 0 === t.hlsMinimumDvrSize ? 60 : t.hlsMinimumDvrSize
			}, o.prototype._addListeners = function() {
				var i = this;
				h.default.on(this.cid + ":flashready", function() {
					return i._bootstrap()
				}), h.default.on(this.cid + ":timeupdate", function(t) {
					return i._updateTime(t)
				}), h.default.on(this.cid + ":playbackstate", function(t) {
					return i._setPlaybackState(t)
				}), h.default.on(this.cid + ":levelchanged", function(t) {
					return i._levelChanged(t)
				}), h.default.on(this.cid + ":error", function(t, e, n) {
					return i._flashPlaybackError(t, e, n)
				}), h.default.on(this.cid + ":fragmentloaded", function(t) {
					return i._onFragmentLoaded(t)
				}), h.default.on(this.cid + ":levelendlist", function(t) {
					return i._onLevelEndlist(t)
				})
			}, o.prototype.stopListening = function() {
				r.prototype.stopListening.call(this), h.default.off(this.cid + ":flashready"), h.default.off(this.cid + ":timeupdate"), h.default.off(this.cid + ":playbackstate"), h.default.off(this.cid + ":levelchanged"), h.default.off(this.cid + ":playbackerror"), h.default.off(this.cid + ":fragmentloaded"), h.default.off(this.cid + ":manifestloaded"), h.default.off(this.cid + ":levelendlist")
			}, o.prototype._bootstrap = function() {
				var t = this;
				if (this.el.playerLoad) this.el.width = "100%", this.el.height = "100%", this._isReadyState = !0, this._srcLoaded = !1, this._currentState = "IDLE", this._setFlashSettings(), this._updatePlaybackType(), (this._autoPlay || this._shouldPlayOnManifestLoaded) && this.play(), this.trigger(u.default.PLAYBACK_READY, this.name);
				else if (this._bootstrapAttempts = this._bootstrapAttempts || 0, ++this._bootstrapAttempts <= 60) setTimeout(function() {
					return t._bootstrap()
				}, 50);
				else {
					var e = this.createError({
						code: "playerLoadFail_maxNumberAttemptsReached",
						description: this.name + " error: Max number of attempts reached",
						level: f.default.Levels.FATAL,
						raw: {}
					});
					this.trigger(u.default.PLAYBACK_ERROR, e)
				}
			}, o.prototype._setFlashSettings = function() {
				this.el.playerSetAutoStartLoad(this._autoStartLoad), this.el.playerSetCapLevelToStage(this._capLevelToStage), this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode), this.el.playerSetMinBufferLength(this._minBufferLength), this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping), this.el.playerSetMaxBufferLength(this._maxBufferLength), this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength), this.el.playerSetLowBufferLength(this._lowBufferLength), this.el.playerSetMediaTimePeriod(this._mediaTimePeriod), this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod), this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold), this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop), this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop), this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError), this.el.playerSetSeekMode(this._seekMode), this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry), this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout), this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry), this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout), this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry), this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments), this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache), this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize), this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry), this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout), this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry), this.el.playerSetStartFromBitrate(this._startFromBitrate), this.el.playerSetStartFromLevel(this._startFromLevel), this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration), this.el.playerSetSeekFromLevel(this._seekFromLevel), this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder), this.el.playerSetLogInfo(this._hlsLogEnabled), this.el.playerSetLogDebug(this._logDebug), this.el.playerSetLogDebug2(this._logDebug2), this.el.playerSetLogWarn(this._logWarn), this.el.playerSetLogError(this._logError)
			}, o.prototype.setAutoStartLoad = function(t) {
				this._autoStartLoad = t, this.el.playerSetAutoStartLoad(this._autoStartLoad)
			}, o.prototype.setCapLevelToStage = function(t) {
				this._capLevelToStage = t, this.el.playerSetCapLevelToStage(this._capLevelToStage)
			}, o.prototype.setMaxLevelCappingMode = function(t) {
				this._maxLevelCappingMode = t, this.el.playerSetMaxLevelCappingMode(this._maxLevelCappingMode)
			}, o.prototype.setSetMinBufferLength = function(t) {
				this._minBufferLength = t, this.el.playerSetMinBufferLength(this._minBufferLength)
			}, o.prototype.setMinBufferLengthCapping = function(t) {
				this._minBufferLengthCapping = t, this.el.playerSetMinBufferLengthCapping(this._minBufferLengthCapping)
			}, o.prototype.setMaxBufferLength = function(t) {
				this._maxBufferLength = t, this.el.playerSetMaxBufferLength(this._maxBufferLength)
			}, o.prototype.setMaxBackBufferLength = function(t) {
				this._maxBackBufferLength = t, this.el.playerSetMaxBackBufferLength(this._maxBackBufferLength)
			}, o.prototype.setLowBufferLength = function(t) {
				this._lowBufferLength = t, this.el.playerSetLowBufferLength(this._lowBufferLength)
			}, o.prototype.setMediaTimePeriod = function(t) {
				this._mediaTimePeriod = t, this.el.playerSetMediaTimePeriod(this._mediaTimePeriod)
			}, o.prototype.setFpsDroppedMonitoringPeriod = function(t) {
				this._fpsDroppedMonitoringPeriod = t, this.el.playerSetFpsDroppedMonitoringPeriod(this._fpsDroppedMonitoringPeriod)
			}, o.prototype.setFpsDroppedMonitoringThreshold = function(t) {
				this._fpsDroppedMonitoringThreshold = t, this.el.playerSetFpsDroppedMonitoringThreshold(this._fpsDroppedMonitoringThreshold)
			}, o.prototype.setCapLevelonFPSDrop = function(t) {
				this._capLevelonFPSDrop = t, this.el.playerSetCapLevelonFPSDrop(this._capLevelonFPSDrop)
			}, o.prototype.setSmoothAutoSwitchonFPSDrop = function(t) {
				this._smoothAutoSwitchonFPSDrop = t, this.el.playerSetSmoothAutoSwitchonFPSDrop(this._smoothAutoSwitchonFPSDrop)
			}, o.prototype.setSwitchDownOnLevelError = function(t) {
				this._switchDownOnLevelError = t, this.el.playerSetSwitchDownOnLevelError(this._switchDownOnLevelError)
			}, o.prototype.setSeekMode = function(t) {
				this._seekMode = t, this.el.playerSetSeekMode(this._seekMode)
			}, o.prototype.setKeyLoadMaxRetry = function(t) {
				this._keyLoadMaxRetry = t, this.el.playerSetKeyLoadMaxRetry(this._keyLoadMaxRetry)
			}, o.prototype.setKeyLoadMaxRetryTimeout = function(t) {
				this._keyLoadMaxRetryTimeout = t, this.el.playerSetKeyLoadMaxRetryTimeout(this._keyLoadMaxRetryTimeout)
			}, o.prototype.setFragmentLoadMaxRetry = function(t) {
				this._fragmentLoadMaxRetry = t, this.el.playerSetFragmentLoadMaxRetry(this._fragmentLoadMaxRetry)
			}, o.prototype.setFragmentLoadMaxRetryTimeout = function(t) {
				this._fragmentLoadMaxRetryTimeout = t, this.el.playerSetFragmentLoadMaxRetryTimeout(this._fragmentLoadMaxRetryTimeout)
			}, o.prototype.setFragmentLoadSkipAfterMaxRetry = function(t) {
				this._fragmentLoadSkipAfterMaxRetry = t, this.el.playerSetFragmentLoadSkipAfterMaxRetry(this._fragmentLoadSkipAfterMaxRetry)
			}, o.prototype.setMaxSkippedFragments = function(t) {
				this._maxSkippedFragments = t, this.el.playerSetMaxSkippedFragments(this._maxSkippedFragments)
			}, o.prototype.setFlushLiveURLCache = function(t) {
				this._flushLiveURLCache = t, this.el.playerSetFlushLiveURLCache(this._flushLiveURLCache)
			}, o.prototype.setInitialLiveManifestSize = function(t) {
				this._initialLiveManifestSize = t, this.el.playerSetInitialLiveManifestSize(this._initialLiveManifestSize)
			}, o.prototype.setManifestLoadMaxRetry = function(t) {
				this._manifestLoadMaxRetry = t, this.el.playerSetManifestLoadMaxRetry(this._manifestLoadMaxRetry)
			}, o.prototype.setManifestLoadMaxRetryTimeout = function(t) {
				this._manifestLoadMaxRetryTimeout = t, this.el.playerSetManifestLoadMaxRetryTimeout(this._manifestLoadMaxRetryTimeout)
			}, o.prototype.setManifestRedundantLoadmaxRetry = function(t) {
				this._manifestRedundantLoadmaxRetry = t, this.el.playerSetManifestRedundantLoadmaxRetry(this._manifestRedundantLoadmaxRetry)
			}, o.prototype.setStartFromBitrate = function(t) {
				this._startFromBitrate = t, this.el.playerSetStartFromBitrate(this._startFromBitrate)
			}, o.prototype.setStartFromLevel = function(t) {
				this._startFromLevel = t, this.el.playerSetStartFromLevel(this._startFromLevel)
			}, o.prototype.setAutoStartMaxDuration = function(t) {
				this._autoStartMaxDuration = t, this.el.playerSetAutoStartMaxDuration(this._autoStartMaxDuration)
			}, o.prototype.setSeekFromLevel = function(t) {
				this._seekFromLevel = t, this.el.playerSetSeekFromLevel(this._seekFromLevel)
			}, o.prototype.setUseHardwareVideoDecoder = function(t) {
				this._useHardwareVideoDecoder = t, this.el.playerSetUseHardwareVideoDecoder(this._useHardwareVideoDecoder)
			}, o.prototype.setSetLogInfo = function(t) {
				this._hlsLogEnabled = t, this.el.playerSetLogInfo(this._hlsLogEnabled)
			}, o.prototype.setLogDebug = function(t) {
				this._logDebug = t, this.el.playerSetLogDebug(this._logDebug)
			}, o.prototype.setLogDebug2 = function(t) {
				this._logDebug2 = t, this.el.playerSetLogDebug2(this._logDebug2)
			}, o.prototype.setLogWarn = function(t) {
				this._logWarn = t, this.el.playerSetLogWarn(this._logWarn)
			}, o.prototype.setLogError = function(t) {
				this._logError = t, this.el.playerSetLogError(this._logError)
			}, o.prototype._levelChanged = function(t) {
				var e = this.el.getLevels()[t];
				e && (this.highDefinition = 720 <= e.height || 2e3 <= e.bitrate / 1e3, this.trigger(u.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition), this._levels && 0 !== this._levels.length || this._fillLevels(), this.trigger(u.default.PLAYBACK_BITRATE, {
					height: e.height,
					width: e.width,
					bandwidth: e.bitrate,
					bitrate: e.bitrate,
					level: t
				}), this.trigger(u.default.PLAYBACK_LEVEL_SWITCH_END))
			}, o.prototype._updateTime = function(t) {
				if ("IDLE" !== this._currentState) {
					var e = this._normalizeDuration(t.duration),
						n = Math.min(Math.max(t.position, 0), e),
						i = this._dvrEnabled,
						r = this._playbackType === d.default.LIVE;
					this._dvrEnabled = r && e > this._hlsMinimumDvrSize, 100 !== e && void 0 !== r && (this._dvrEnabled !== i && (this._updateSettings(), this.trigger(u.default.PLAYBACK_SETTINGSUPDATE, this.name)), r && !this._dvrEnabled && (n = e), this.trigger(u.default.PLAYBACK_TIMEUPDATE, {
						current: n,
						total: e
					}, this.name))
				}
			}, o.prototype.play = function() {
				this.trigger(u.default.PLAYBACK_PLAY_INTENT), "PAUSED" === this._currentState ? this.el.playerResume() : this._srcLoaded || "PLAYING" === this._currentState ? this.el.playerPlay() : this._firstPlay()
			}, o.prototype.getPlaybackType = function() {
				return this._playbackType ? this._playbackType : null
			}, o.prototype.getCurrentTime = function() {
				return this.el.getPosition()
			}, o.prototype.getCurrentLevelIndex = function() {
				return this._currentLevel
			}, o.prototype.getCurrentLevel = function() {
				return this.levels[this.currentLevel]
			}, o.prototype.getCurrentBitrate = function() {
				return this.levels[this.currentLevel].bitrate
			}, o.prototype.setCurrentLevel = function(t) {
				this.currentLevel = t
			}, o.prototype.isHighDefinitionInUse = function() {
				return this.highDefinition
			}, o.prototype.getLevels = function() {
				return this.levels
			}, o.prototype._setPlaybackState = function(t) {
				0 <= ["PLAYING_BUFFERING", "PAUSED_BUFFERING"].indexOf(t) ? (this._bufferingState = !0, this.trigger(u.default.PLAYBACK_BUFFERING, this.name), this._updateCurrentState(t)) : 0 <= ["PLAYING", "PAUSED"].indexOf(t) ? (0 <= ["PLAYING_BUFFERING", "PAUSED_BUFFERING", "IDLE"].indexOf(this._currentState) && (this._bufferingState = !1, this.trigger(u.default.PLAYBACK_BUFFERFULL, this.name)), this._updateCurrentState(t)) : "IDLE" === t && (this._srcLoaded = !1, this._loop && 0 <= ["PLAYING_BUFFERING", "PLAYING"].indexOf(this._currentState) ? (this.play(), this.seek(0)) : (this._updateCurrentState(t), this._hasEnded = !0, this.trigger(u.default.PLAYBACK_TIMEUPDATE, {
					current: 0,
					total: this.getDuration()
				}, this.name), this.trigger(u.default.PLAYBACK_ENDED, this.name)))
			}, o.prototype._updateCurrentState = function(t) {
				"IDLE" !== (this._currentState = t) && (this._hasEnded = !1), this._updatePlaybackType(), "PLAYING" === t ? this.trigger(u.default.PLAYBACK_PLAY, this.name) : "PAUSED" === t && this.trigger(u.default.PLAYBACK_PAUSE, this.name)
			}, o.prototype._updatePlaybackType = function() {
				this._playbackType = this.el.getType(), this._playbackType && (this._playbackType = this._playbackType.toLowerCase(), this._playbackType === d.default.VOD ? this._startReportingProgress() : this._stopReportingProgress()), this.trigger(u.default.PLAYBACK_PLAYBACKSTATE, {
					type: this._playbackType
				})
			}, o.prototype._startReportingProgress = function() {
				this._reportingProgress || (this._reportingProgress = !0)
			}, o.prototype._stopReportingProgress = function() {
				this._reportingProgress = !1
			}, o.prototype._onFragmentLoaded = function(t) {
				if (this.trigger(u.default.PLAYBACK_FRAGMENT_LOADED, t), this._reportingProgress && this.getCurrentTime()) {
					var e = this.getCurrentTime() + this.el.getbufferLength();
					this.trigger(u.default.PLAYBACK_PROGRESS, {
						start: this.getCurrentTime(),
						current: e,
						total: this.el.getDuration()
					})
				}
			}, o.prototype._onLevelEndlist = function() {
				this._updatePlaybackType()
			}, o.prototype._firstPlay = function() {
				var n = this;
				this._shouldPlayOnManifestLoaded = !0, this.el.playerLoad && (h.default.once(this.cid + ":manifestloaded", function(t, e) {
					return n._manifestLoaded(t, e)
				}), this._setFlashSettings(), this.el.playerLoad(this._src), this._srcLoaded = !0)
			}, o.prototype.volume = function(t) {
				var e = this;
				this.isReady ? this.el.playerVolume(t) : this.listenToOnce(this, u.default.PLAYBACK_BUFFERFULL, function() {
					return e.volume(t)
				})
			}, o.prototype.pause = function() {
				(this._playbackType !== d.default.LIVE || this._dvrEnabled) && (this.el.playerPause(), this._playbackType === d.default.LIVE && this._dvrEnabled && this._updateDvr(!0))
			}, o.prototype.stop = function() {
				this._srcLoaded = !1, this.el.playerStop(), this.trigger(u.default.PLAYBACK_STOP), this.trigger(u.default.PLAYBACK_TIMEUPDATE, {
					current: 0,
					total: 0
				}, this.name)
			}, o.prototype.isPlaying = function() {
				return !!this._currentState && !!this._currentState.match(/playing/i)
			}, o.prototype.getDuration = function() {
				return this._normalizeDuration(this.el.getDuration())
			}, o.prototype._normalizeDuration = function(t) {
				return this._playbackType === d.default.LIVE && (t = Math.max(0, t - 10)), t
			}, o.prototype.seekPercentage = function(t) {
				var e = this.el.getDuration(),
					n = 0;
				0 < t && (n = e * t / 100), this.seek(n)
			}, o.prototype.seek = function(t) {
				var e = this.getDuration();
				if (this._playbackType === d.default.LIVE) {
					var n = 3 < e - t;
					this._updateDvr(n)
				}
				this.el.playerSeek(t), this.trigger(u.default.PLAYBACK_TIMEUPDATE, {
					current: t,
					total: e
				}, this.name)
			}, o.prototype._updateDvr = function(t) {
				var e = !!this._dvrInUse;
				this._dvrInUse = t, this._dvrInUse !== e && (this._updateSettings(), this.trigger(u.default.PLAYBACK_DVR, this._dvrInUse), this.trigger(u.default.PLAYBACK_STATS_ADD, {
					dvr: this._dvrInUse
				}))
			}, o.prototype._flashPlaybackError = function(t, e, n) {
				var i = {
						code: t,
						description: n,
						level: f.default.Levels.FATAL,
						raw: {
							code: t,
							url: e,
							message: n
						}
					},
					r = this.createError(i);
				this.trigger(u.default.PLAYBACK_ERROR, r), this.trigger(u.default.PLAYBACK_STOP)
			}, o.prototype._manifestLoaded = function(t, e) {
				this._shouldPlayOnManifestLoaded && (this._shouldPlayOnManifestLoaded = !1, this.el.playerPlay()), this._fillLevels(), this.trigger(u.default.PLAYBACK_LOADEDMETADATA, {
					duration: t,
					data: e
				})
			}, o.prototype._fillLevels = function() {
				var t = this.el.getLevels(),
					e = t.length;
				this._levels = [];
				for (var n = 0; n < e; n++) this._levels.push({
					id: n,
					label: t[n].height + "p",
					level: t[n]
				});
				this.trigger(u.default.PLAYBACK_LEVELS_AVAILABLE, this._levels)
			}, o.prototype.destroy = function() {
				this.stopListening(), this.$el.remove()
			}, o.prototype._updateSettings = function() {
				this.settings = m.default.extend({}, this._defaultSettings), this._playbackType === d.default.VOD || this._dvrInUse ? (this.settings.left = ["playpause", "position", "duration"], this.settings.seekEnabled = !0) : this._dvrEnabled ? (this.settings.left = ["playpause"], this.settings.seekEnabled = !0) : this.settings.seekEnabled = !1
			}, o.prototype._createCallbacks = function() {
				var n = this;
				window.Clappr || (window.Clappr = {}), window.Clappr.flashlsCallbacks || (window.Clappr.flashlsCallbacks = {}), this.flashlsEvents = new p.default(this.cid), window.Clappr.flashlsCallbacks[this.cid] = function(t, e) {
					n.flashlsEvents[t].apply(n.flashlsEvents, e)
				}
			}, o.prototype.render = function() {
				return r.prototype.render.call(this), this._createCallbacks(), this
			}, (0, i.default)(o, [{
				key: "isReady",
				get: function() {
					return this._isReadyState
				}
			}, {
				key: "dvrEnabled",
				get: function() {
					return !!this._dvrEnabled
				}
			}]), o
		}(r.default);
		(e.default = v).canPlay = function(t, e) {
			var n = t.split("?")[0].match(/.*\.(.*)$/) || [];
			return o.default.hasFlash && (1 < n.length && "m3u8" === n[1].toLowerCase() || "application/x-mpegURL" === e || "application/vnd.apple.mpegurl" === e)
		}, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = o(n(0)),
			r = o(n(30));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var a = function() {
			function e(t) {
				(0, i.default)(this, e), this.instanceId = t
			}
			return e.prototype.ready = function() {
				r.default.trigger(this.instanceId + ":flashready")
			}, e.prototype.videoSize = function(t, e) {
				r.default.trigger(this.instanceId + ":videosizechanged", t, e)
			}, e.prototype.complete = function() {
				r.default.trigger(this.instanceId + ":complete")
			}, e.prototype.error = function(t, e, n) {
				r.default.trigger(this.instanceId + ":error", t, e, n)
			}, e.prototype.manifest = function(t, e) {
				r.default.trigger(this.instanceId + ":manifestloaded", t, e)
			}, e.prototype.audioLevelLoaded = function(t) {
				r.default.trigger(this.instanceId + ":audiolevelloaded", t)
			}, e.prototype.levelLoaded = function(t) {
				r.default.trigger(this.instanceId + ":levelloaded", t)
			}, e.prototype.levelEndlist = function(t) {
				r.default.trigger(this.instanceId + ":levelendlist", t)
			}, e.prototype.fragmentLoaded = function(t) {
				r.default.trigger(this.instanceId + ":fragmentloaded", t)
			}, e.prototype.fragmentPlaying = function(t) {
				r.default.trigger(this.instanceId + ":fragmentplaying", t)
			}, e.prototype.position = function(t) {
				r.default.trigger(this.instanceId + ":timeupdate", t)
			}, e.prototype.state = function(t) {
				r.default.trigger(this.instanceId + ":playbackstate", t)
			}, e.prototype.seekState = function(t) {
				r.default.trigger(this.instanceId + ":seekstate", t)
			}, e.prototype.switch = function(t) {
				r.default.trigger(this.instanceId + ":levelchanged", t)
			}, e.prototype.audioTracksListChange = function(t) {
				r.default.trigger(this.instanceId + ":audiotracklistchanged", t)
			}, e.prototype.audioTrackChange = function(t) {
				r.default.trigger(this.instanceId + ":audiotrackchanged", t)
			}, e
		}();
		e.default = a, t.exports = e.default
	}, function(t, e) {
		t.exports = "<%=baseUrl%>/8fa12a459188502b9f0d39b8a67d9e6c.swf"
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = o(n(63)),
			s = o(n(81)),
			l = o(n(0)),
			u = o(n(1)),
			i = o(n(3)),
			c = o(n(2)),
			r = o(n(41)),
			y = o(n(198)),
			d = o(n(4)),
			v = o(n(10)),
			h = n(5),
			f = o(n(29)),
			p = o(n(24));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var g = function(r) {
			function o() {
				(0, l.default)(this, o);
				for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var i = (0, u.default)(this, r.call.apply(r, [this].concat(e)));
				return i.options.playback || (i.options.playback = i.options), i._minDvrSize = void 0 === i.options.hlsMinimumDvrSize ? 60 : i.options.hlsMinimumDvrSize, i._extrapolatedWindowNumSegments = i.options.playback && void 0 !== i.options.playback.extrapolatedWindowNumSegments ? i.options.playback.extrapolatedWindowNumSegments : 2, i._playbackType = v.default.VOD, i._lastTimeUpdate = {
					current: 0,
					total: 0
				}, i._lastDuration = null, i._playableRegionStartTime = 0, i._localStartTimeCorrelation = null, i._localEndTimeCorrelation = null, i._playableRegionDuration = 0, i._programDateTime = 0, i._durationExcludesAfterLiveSyncPoint = !1, i._segmentTargetDuration = null, i._playlistType = null, i._recoverAttemptsRemaining = i.options.hlsRecoverAttempts || 16, i
			}
			return (0, c.default)(o, r), (0, i.default)(o, [{
				key: "name",
				get: function() {
					return "hls"
				}
			}, {
				key: "levels",
				get: function() {
					return this._levels || []
				}
			}, {
				key: "currentLevel",
				get: function() {
					return null === this._currentLevel || void 0 === this._currentLevel ? -1 : this._currentLevel
				},
				set: function(t) {
					this._currentLevel = t, this.trigger(d.default.PLAYBACK_LEVEL_SWITCH_START), this._hls.currentLevel = this._currentLevel
				}
			}, {
				key: "isReady",
				get: function() {
					return this._isReadyState
				}
			}, {
				key: "_startTime",
				get: function() {
					return this._playbackType === v.default.LIVE && "EVENT" !== this._playlistType ? this._extrapolatedStartTime : this._playableRegionStartTime
				}
			}, {
				key: "_now",
				get: function() {
					return (0, h.now)()
				}
			}, {
				key: "_extrapolatedStartTime",
				get: function() {
					if (!this._localStartTimeCorrelation) return this._playableRegionStartTime;
					var t = this._localStartTimeCorrelation,
						e = this._now - t.local,
						n = (t.remote + e) / 1e3;
					return Math.min(n, this._playableRegionStartTime + this._extrapolatedWindowDuration)
				}
			}, {
				key: "_extrapolatedEndTime",
				get: function() {
					var t = this._playableRegionStartTime + this._playableRegionDuration;
					if (!this._localEndTimeCorrelation) return t;
					var e = this._localEndTimeCorrelation,
						n = this._now - e.local,
						i = (e.remote + n) / 1e3;
					return Math.max(t - this._extrapolatedWindowDuration, Math.min(i, t))
				}
			}, {
				key: "_duration",
				get: function() {
					return this._extrapolatedEndTime - this._startTime
				}
			}, {
				key: "_extrapolatedWindowDuration",
				get: function() {
					return null === this._segmentTargetDuration ? 0 : this._extrapolatedWindowNumSegments * this._segmentTargetDuration
				}
			}], [{
				key: "HLSJS",
				get: function() {
					return y.default
				}
			}]), o.prototype._setup = function() {
				var n = this;
				this._ccIsSetup = !1, this._ccTracksUpdated = !1, this._hls = new y.default((0, h.assign)({}, this.options.playback.hlsjsConfig)), this._hls.on(y.default.Events.MEDIA_ATTACHED, function() {
					return n._hls.loadSource(n.options.src)
				}), this._hls.on(y.default.Events.LEVEL_LOADED, function(t, e) {
					return n._updatePlaybackType(t, e)
				}), this._hls.on(y.default.Events.LEVEL_UPDATED, function(t, e) {
					return n._onLevelUpdated(t, e)
				}), this._hls.on(y.default.Events.LEVEL_SWITCHING, function(t, e) {
					return n._onLevelSwitch(t, e)
				}), this._hls.on(y.default.Events.FRAG_LOADED, function(t, e) {
					return n._onFragmentLoaded(t, e)
				}), this._hls.on(y.default.Events.ERROR, function(t, e) {
					return n._onHLSJSError(t, e)
				}), this._hls.on(y.default.Events.SUBTITLE_TRACK_LOADED, function(t, e) {
					return n._onSubtitleLoaded(t, e)
				}), this._hls.on(y.default.Events.SUBTITLE_TRACKS_UPDATED, function() {
					return n._ccTracksUpdated = !0
				}), this._hls.attachMedia(this.el)
			}, o.prototype.render = function() {
				return this._ready(), r.prototype.render.call(this)
			}, o.prototype._ready = function() {
				this._isReadyState = !0, this.trigger(d.default.PLAYBACK_READY, this.name)
			}, o.prototype._recover = function(t, e, n) {
				if (this._recoveredDecodingError)
					if (this._recoveredAudioCodecError) {
						f.default.error("hlsjs: failed to recover", {
							evt: t,
							data: e
						}), n.level = p.default.Levels.FATAL;
						var i = this.createError(n);
						this.trigger(d.default.PLAYBACK_ERROR, i), this.stop()
					} else this._recoveredAudioCodecError = !0, this._hls.swapAudioCodec(), this._hls.recoverMediaError();
				else this._recoveredDecodingError = !0, this._hls.recoverMediaError()
			}, o.prototype._setupSrc = function(t) {}, o.prototype._startTimeUpdateTimer = function() {
				var t = this;
				this._timeUpdateTimer = setInterval(function() {
					t._onDurationChange(), t._onTimeUpdate()
				}, 100)
			}, o.prototype._stopTimeUpdateTimer = function() {
				clearInterval(this._timeUpdateTimer)
			}, o.prototype.getProgramDateTime = function() {
				return this._programDateTime
			}, o.prototype.getDuration = function() {
				return this._duration
			}, o.prototype.getCurrentTime = function() {
				return Math.max(0, this.el.currentTime - this._startTime)
			}, o.prototype.getStartTimeOffset = function() {
				return this._startTime
			}, o.prototype.seekPercentage = function(t) {
				var e = this._duration;
				0 < t && (e = this._duration * (t / 100)), this.seek(e)
			}, o.prototype.seek = function(t) {
				t < 0 && (f.default.warn("Attempt to seek to a negative time. Resetting to live point. Use seekToLivePoint() to seek to the live point."), t = this.getDuration()), this.dvrEnabled && this._updateDvr(t < this.getDuration() - 3), t += this._startTime, r.prototype.seek.call(this, t)
			}, o.prototype.seekToLivePoint = function() {
				this.seek(this.getDuration())
			}, o.prototype._updateDvr = function(t) {
				this.trigger(d.default.PLAYBACK_DVR, t), this.trigger(d.default.PLAYBACK_STATS_ADD, {
					dvr: t
				})
			}, o.prototype._updateSettings = function() {
				this._playbackType === v.default.VOD ? this.settings.left = ["playpause", "position", "duration"] : this.dvrEnabled ? this.settings.left = ["playpause"] : this.settings.left = ["playstop"], this.settings.seekEnabled = this.isSeekEnabled(), this.trigger(d.default.PLAYBACK_SETTINGSUPDATE)
			}, o.prototype._onHLSJSError = function(t, e) {
				var n = {
						code: e.type + "_" + e.details,
						description: this.name + " error: type: " + e.type + ", details: " + e.details,
						raw: e
					},
					i = void 0;
				if (e.response && (n.description += ", response: " + (0, s.default)(e.response)), e.fatal)
					if (0 < this._recoverAttemptsRemaining) switch (this._recoverAttemptsRemaining -= 1, e.type) {
						case y.default.ErrorTypes.NETWORK_ERROR:
							switch (e.details) {
								case y.default.ErrorDetails.MANIFEST_LOAD_ERROR:
								case y.default.ErrorDetails.MANIFEST_LOAD_TIMEOUT:
								case y.default.ErrorDetails.MANIFEST_PARSING_ERROR:
								case y.default.ErrorDetails.LEVEL_LOAD_ERROR:
								case y.default.ErrorDetails.LEVEL_LOAD_TIMEOUT:
									f.default.error("hlsjs: unrecoverable network fatal error.", {
										evt: t,
										data: e
									}), i = this.createError(n), this.trigger(d.default.PLAYBACK_ERROR, i), this.stop();
									break;
								default:
									f.default.warn("hlsjs: trying to recover from network error.", {
										evt: t,
										data: e
									}), n.level = p.default.Levels.WARN, this.createError(n), this._hls.startLoad()
							}
							break;
						case y.default.ErrorTypes.MEDIA_ERROR:
							f.default.warn("hlsjs: trying to recover from media error.", {
								evt: t,
								data: e
							}), n.level = p.default.Levels.WARN, this.createError(n), this._recover(t, e, n);
							break;
						default:
							f.default.error("hlsjs: could not recover from error.", {
								evt: t,
								data: e
							}), i = this.createError(n), this.trigger(d.default.PLAYBACK_ERROR, i), this.stop()
					} else f.default.error("hlsjs: could not recover from error after maximum number of attempts.", {
						evt: t,
						data: e
					}), i = this.createError(n), this.trigger(d.default.PLAYBACK_ERROR, i), this.stop();
					else n.level = p.default.Levels.WARN, this.createError(n), f.default.warn("hlsjs: non-fatal error occurred", {
						evt: t,
						data: e
					})
			}, o.prototype._onTimeUpdate = function() {
				var t = {
					current: this.getCurrentTime(),
					total: this.getDuration(),
					firstFragDateTime: this.getProgramDateTime()
				};
				this._lastTimeUpdate && t.current === this._lastTimeUpdate.current && t.total === this._lastTimeUpdate.total || (this._lastTimeUpdate = t, this.trigger(d.default.PLAYBACK_TIMEUPDATE, t, this.name))
			}, o.prototype._onDurationChange = function() {
				var t = this.getDuration();
				this._lastDuration !== t && (this._lastDuration = t, r.prototype._onDurationChange.call(this))
			}, o.prototype._onProgress = function() {
				if (this.el.buffered.length) {
					for (var t = [], e = 0, n = 0; n < this.el.buffered.length; n++) t = [].concat((0, a.default)(t), [{
						start: Math.max(0, this.el.buffered.start(n) - this._playableRegionStartTime),
						end: Math.max(0, this.el.buffered.end(n) - this._playableRegionStartTime)
					}]), this.el.currentTime >= t[n].start && this.el.currentTime <= t[n].end && (e = n);
					var i = {
						start: t[e].start,
						current: t[e].end,
						total: this.getDuration()
					};
					this.trigger(d.default.PLAYBACK_PROGRESS, i, t)
				}
			}, o.prototype.play = function() {
				this._hls || this._setup(), r.prototype.play.call(this), this._startTimeUpdateTimer()
			}, o.prototype.pause = function() {
				this._hls && (r.prototype.pause.call(this), this.dvrEnabled && this._updateDvr(!0))
			}, o.prototype.stop = function() {
				this._hls && (r.prototype.stop.call(this), this._hls.destroy(), delete this._hls)
			}, o.prototype.destroy = function() {
				this._stopTimeUpdateTimer(), this._hls && (this._hls.destroy(), delete this._hls), r.prototype.destroy.call(this)
			}, o.prototype._updatePlaybackType = function(t, e) {
				this._playbackType = e.details.live ? v.default.LIVE : v.default.VOD, this._onLevelUpdated(t, e), this._ccTracksUpdated && this._playbackType === v.default.LIVE && this.hasClosedCaptionsTracks && this._onSubtitleLoaded()
			}, o.prototype._fillLevels = function() {
				this._levels = this._hls.levels.map(function(t, e) {
					return {
						id: e,
						level: t,
						label: t.bitrate / 1e3 + "Kbps"
					}
				}), this.trigger(d.default.PLAYBACK_LEVELS_AVAILABLE, this._levels)
			}, o.prototype._onLevelUpdated = function(t, e) {
				this._segmentTargetDuration = e.details.targetduration, this._playlistType = e.details.type || null;
				var n = !1,
					i = !1,
					r = e.details.fragments,
					o = this._playableRegionStartTime,
					a = this._playableRegionDuration;
				if (0 !== r.length) {
					if (r[0].rawProgramDateTime && (this._programDateTime = r[0].rawProgramDateTime), this._playableRegionStartTime !== r[0].start && (n = !0, this._playableRegionStartTime = r[0].start), n)
						if (this._localStartTimeCorrelation) {
							var s = this._localStartTimeCorrelation,
								l = this._now - s.local,
								u = (s.remote + l) / 1e3;
							u < r[0].start ? this._localStartTimeCorrelation = {
								local: this._now,
								remote: 1e3 * r[0].start
							} : u > o + this._extrapolatedWindowDuration && (this._localStartTimeCorrelation = {
								local: this._now,
								remote: 1e3 * Math.max(r[0].start, o + this._extrapolatedWindowDuration)
							})
						} else this._localStartTimeCorrelation = {
							local: this._now,
							remote: 1e3 * (r[0].start + this._extrapolatedWindowDuration / 2)
						};
					var c = e.details.totalduration;
					if (this._playbackType === v.default.LIVE) {
						var d = e.details.targetduration * ((this.options.playback.hlsjsConfig || {}).liveSyncDurationCount || y.default.DefaultConfig.liveSyncDurationCount);
						d <= c ? (c -= d, this._durationExcludesAfterLiveSyncPoint = !0) : this._durationExcludesAfterLiveSyncPoint = !1
					}
					c !== this._playableRegionDuration && (i = !0, this._playableRegionDuration = c);
					var h = r[0].start + c,
						f = o + a;
					if (h !== f)
						if (this._localEndTimeCorrelation) {
							var p = this._localEndTimeCorrelation,
								g = this._now - p.local,
								m = (p.remote + g) / 1e3;
							h < m ? this._localEndTimeCorrelation = {
								local: this._now,
								remote: 1e3 * h
							} : m < h - this._extrapolatedWindowDuration ? this._localEndTimeCorrelation = {
								local: this._now,
								remote: 1e3 * (h - this._extrapolatedWindowDuration)
							} : f < m && (this._localEndTimeCorrelation = {
								local: this._now,
								remote: 1e3 * f
							})
						} else this._localEndTimeCorrelation = {
							local: this._now,
							remote: 1e3 * h
						};
					i && this._onDurationChange(), n && this._onProgress()
				}
			}, o.prototype._onFragmentLoaded = function(t, e) {
				this.trigger(d.default.PLAYBACK_FRAGMENT_LOADED, e)
			}, o.prototype._onSubtitleLoaded = function() {
				if (!this._ccIsSetup) {
					this.trigger(d.default.PLAYBACK_SUBTITLE_AVAILABLE);
					var t = this._playbackType === v.default.LIVE ? -1 : this.closedCaptionsTrackId;
					this.closedCaptionsTrackId = t, this._ccIsSetup = !0
				}
			}, o.prototype._onLevelSwitch = function(t, e) {
				this.levels.length || this._fillLevels(), this.trigger(d.default.PLAYBACK_LEVEL_SWITCH_END), this.trigger(d.default.PLAYBACK_LEVEL_SWITCH, e);
				var n = this._hls.levels[e.level];
				n && (this.highDefinition = 720 <= n.height || 2e3 <= n.bitrate / 1e3, this.trigger(d.default.PLAYBACK_HIGHDEFINITIONUPDATE, this.highDefinition), this.trigger(d.default.PLAYBACK_BITRATE, {
					height: n.height,
					width: n.width,
					bandwidth: n.bitrate,
					bitrate: n.bitrate,
					level: e.level
				}))
			}, o.prototype.getPlaybackType = function() {
				return this._playbackType
			}, o.prototype.isSeekEnabled = function() {
				return this._playbackType === v.default.VOD || this.dvrEnabled
			}, (0, i.default)(o, [{
				key: "dvrEnabled",
				get: function() {
					return this._durationExcludesAfterLiveSyncPoint && this._duration >= this._minDvrSize && this.getPlaybackType() === v.default.LIVE
				}
			}]), o
		}(r.default);
		(e.default = g).canPlay = function(t, e) {
			var n = t.split("?")[0].match(/.*\.(.*)$/) || [],
				i = 1 < n.length && "m3u8" === n[1].toLowerCase() || "application/x-mpegURL" === e || "application/vnd.apple.mpegurl" === e;
			return !(!y.default.isSupported() || !i)
		}, t.exports = e.default
	}, function(t, e, n) {
		var i;
		"undefined" != typeof self && self, i = function() {
			return function(n) {
				var i = {};

				function r(t) {
					if (i[t]) return i[t].exports;
					var e = i[t] = {
						i: t,
						l: !1,
						exports: {}
					};
					return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
				}
				return r.m = n, r.c = i, r.d = function(t, e, n) {
					r.o(t, e) || Object.defineProperty(t, e, {
						configurable: !1,
						enumerable: !0,
						get: n
					})
				}, r.n = function(t) {
					var e = t && t.__esModule ? function() {
						return t.default
					} : function() {
						return t
					};
					return r.d(e, "a", e), e
				}, r.o = function(t, e) {
					return Object.prototype.hasOwnProperty.call(t, e)
				}, r.p = "/dist/", r(r.s = 9)
			}([function(t, e, n) {
				"use strict";
				n.d(e, "a", function() {
					return l
				}), n.d(e, "b", function() {
					return u
				});
				var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
					return typeof t
				} : function(t) {
					return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
				};

				function r() {}
				var o = {
						trace: r,
						debug: r,
						log: r,
						warn: r,
						info: r,
						error: r
					},
					s = o;

				function a(e) {
					for (var t = arguments.length, n = Array(1 < t ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
					n.forEach(function(t) {
						var o, a;
						s[t] = e[t] ? e[t].bind(e) : (o = t, (a = self.console[o]) ? function() {
							for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
							var i, r;
							e[0] && (e[0] = (i = o, r = e[0], r = "[" + i + "] > " + r)), a.apply(self.console, e)
						} : r)
					})
				}
				var l = function(t) {
						if (!0 === t || "object" === (void 0 === t ? "undefined" : i(t))) {
							a(t, "debug", "log", "info", "warn", "error");
							try {
								s.log()
							} catch (t) {
								s = o
							}
						} else s = o
					},
					u = o
			}, function(t, e, n) {
				"use strict";
				e.a = {
					MEDIA_ATTACHING: "hlsMediaAttaching",
					MEDIA_ATTACHED: "hlsMediaAttached",
					MEDIA_DETACHING: "hlsMediaDetaching",
					MEDIA_DETACHED: "hlsMediaDetached",
					BUFFER_RESET: "hlsBufferReset",
					BUFFER_CODECS: "hlsBufferCodecs",
					BUFFER_CREATED: "hlsBufferCreated",
					BUFFER_APPENDING: "hlsBufferAppending",
					BUFFER_APPENDED: "hlsBufferAppended",
					BUFFER_EOS: "hlsBufferEos",
					BUFFER_FLUSHING: "hlsBufferFlushing",
					BUFFER_FLUSHED: "hlsBufferFlushed",
					MANIFEST_LOADING: "hlsManifestLoading",
					MANIFEST_LOADED: "hlsManifestLoaded",
					MANIFEST_PARSED: "hlsManifestParsed",
					LEVEL_SWITCHING: "hlsLevelSwitching",
					LEVEL_SWITCHED: "hlsLevelSwitched",
					LEVEL_LOADING: "hlsLevelLoading",
					LEVEL_LOADED: "hlsLevelLoaded",
					LEVEL_UPDATED: "hlsLevelUpdated",
					LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
					AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
					AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
					AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
					AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
					AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
					SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
					SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
					SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
					SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
					SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
					INIT_PTS_FOUND: "hlsInitPtsFound",
					FRAG_LOADING: "hlsFragLoading",
					FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
					FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
					FRAG_LOADED: "hlsFragLoaded",
					FRAG_DECRYPTED: "hlsFragDecrypted",
					FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
					FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
					FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
					FRAG_PARSING_DATA: "hlsFragParsingData",
					FRAG_PARSED: "hlsFragParsed",
					FRAG_BUFFERED: "hlsFragBuffered",
					FRAG_CHANGED: "hlsFragChanged",
					FPS_DROP: "hlsFpsDrop",
					FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
					ERROR: "hlsError",
					DESTROYING: "hlsDestroying",
					KEY_LOADING: "hlsKeyLoading",
					KEY_LOADED: "hlsKeyLoaded",
					STREAM_STATE_TRANSITION: "hlsStreamStateTransition"
				}
			}, function(t, e, n) {
				"use strict";
				n.d(e, "b", function() {
					return i
				}), n.d(e, "a", function() {
					return r
				});
				var i = {
						NETWORK_ERROR: "networkError",
						MEDIA_ERROR: "mediaError",
						KEY_SYSTEM_ERROR: "keySystemError",
						MUX_ERROR: "muxError",
						OTHER_ERROR: "otherError"
					},
					r = {
						KEY_SYSTEM_NO_KEYS: "keySystemNoKeys",
						KEY_SYSTEM_NO_ACCESS: "keySystemNoAccess",
						KEY_SYSTEM_NO_SESSION: "keySystemNoSession",
						KEY_SYSTEM_LICENSE_REQUEST_FAILED: "keySystemLicenseRequestFailed",
						MANIFEST_LOAD_ERROR: "manifestLoadError",
						MANIFEST_LOAD_TIMEOUT: "manifestLoadTimeOut",
						MANIFEST_PARSING_ERROR: "manifestParsingError",
						MANIFEST_INCOMPATIBLE_CODECS_ERROR: "manifestIncompatibleCodecsError",
						LEVEL_LOAD_ERROR: "levelLoadError",
						LEVEL_LOAD_TIMEOUT: "levelLoadTimeOut",
						LEVEL_SWITCH_ERROR: "levelSwitchError",
						AUDIO_TRACK_LOAD_ERROR: "audioTrackLoadError",
						AUDIO_TRACK_LOAD_TIMEOUT: "audioTrackLoadTimeOut",
						FRAG_LOAD_ERROR: "fragLoadError",
						FRAG_LOAD_TIMEOUT: "fragLoadTimeOut",
						FRAG_DECRYPT_ERROR: "fragDecryptError",
						FRAG_PARSING_ERROR: "fragParsingError",
						REMUX_ALLOC_ERROR: "remuxAllocError",
						KEY_LOAD_ERROR: "keyLoadError",
						KEY_LOAD_TIMEOUT: "keyLoadTimeOut",
						BUFFER_ADD_CODEC_ERROR: "bufferAddCodecError",
						BUFFER_APPEND_ERROR: "bufferAppendError",
						BUFFER_APPENDING_ERROR: "bufferAppendingError",
						BUFFER_STALLED_ERROR: "bufferStalledError",
						BUFFER_FULL_ERROR: "bufferFullError",
						BUFFER_SEEK_OVER_HOLE: "bufferSeekOverHole",
						BUFFER_NUDGE_ON_STALL: "bufferNudgeOnStall",
						INTERNAL_EXCEPTION: "internalException"
					}
			}, function(t, e, n) {
				var i, c, r, o, d;
				i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/;?#]*)(.*)$/, r = /(?:\/|^)\.(?=\/)/g, o = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, d = {
					buildAbsoluteURL: function(t, e, n) {
						if (n = n || {}, t = t.trim(), !(e = e.trim())) {
							if (!n.alwaysNormalize) return t;
							var i = d.parseURL(t);
							if (!i) throw new Error("Error trying to parse base URL.");
							return i.path = d.normalizePath(i.path), d.buildURLFromParts(i)
						}
						var r = d.parseURL(e);
						if (!r) throw new Error("Error trying to parse relative URL.");
						if (r.scheme) return n.alwaysNormalize ? (r.path = d.normalizePath(r.path), d.buildURLFromParts(r)) : e;
						var o = d.parseURL(t);
						if (!o) throw new Error("Error trying to parse base URL.");
						if (!o.netLoc && o.path && "/" !== o.path[0]) {
							var a = c.exec(o.path);
							o.netLoc = a[1], o.path = a[2]
						}
						o.netLoc && !o.path && (o.path = "/");
						var s = {
							scheme: o.scheme,
							netLoc: r.netLoc,
							path: null,
							params: r.params,
							query: r.query,
							fragment: r.fragment
						};
						if (!r.netLoc && (s.netLoc = o.netLoc, "/" !== r.path[0]))
							if (r.path) {
								var l = o.path,
									u = l.substring(0, l.lastIndexOf("/") + 1) + r.path;
								s.path = d.normalizePath(u)
							} else s.path = o.path, r.params || (s.params = o.params, r.query || (s.query = o.query));
						return null === s.path && (s.path = n.alwaysNormalize ? d.normalizePath(r.path) : r.path), d.buildURLFromParts(s)
					},
					parseURL: function(t) {
						var e = i.exec(t);
						return e ? {
							scheme: e[1] || "",
							netLoc: e[2] || "",
							path: e[3] || "",
							params: e[4] || "",
							query: e[5] || "",
							fragment: e[6] || ""
						} : null
					},
					normalizePath: function(t) {
						for (t = t.split("").reverse().join("").replace(r, ""); t.length !== (t = t.replace(o, "")).length;);
						return t.split("").reverse().join("")
					},
					buildURLFromParts: function(t) {
						return t.scheme + t.netLoc + t.path + t.params + t.query + t.fragment
					}
				}, t.exports = d
			}, function(t, e, n) {
				"use strict";
				n.d(e, "b", function() {
					return r
				});
				var i = function() {
						function s() {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, s)
						}
						return s.isHeader = function(t, e) {
							return e + 10 <= t.length && 73 === t[e] && 68 === t[e + 1] && 51 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
						}, s.isFooter = function(t, e) {
							return e + 10 <= t.length && 51 === t[e] && 68 === t[e + 1] && 73 === t[e + 2] && t[e + 3] < 255 && t[e + 4] < 255 && t[e + 6] < 128 && t[e + 7] < 128 && t[e + 8] < 128 && t[e + 9] < 128
						}, s.getID3Data = function(t, e) {
							for (var n = e, i = 0; s.isHeader(t, e);) {
								i += 10, i += s._readSize(t, e + 6), s.isFooter(t, e + 10) && (i += 10), e += i
							}
							if (0 < i) return t.subarray(n, n + i)
						}, s._readSize = function(t, e) {
							var n = 0;
							return n = (127 & t[e]) << 21, n |= (127 & t[e + 1]) << 14, n |= (127 & t[e + 2]) << 7, n |= 127 & t[e + 3]
						}, s.getTimeStamp = function(t) {
							for (var e = s.getID3Frames(t), n = 0; n < e.length; n++) {
								var i = e[n];
								if (s.isTimeStampFrame(i)) return s._readTimeStamp(i)
							}
						}, s.isTimeStampFrame = function(t) {
							return t && "PRIV" === t.key && "com.apple.streaming.transportStreamTimestamp" === t.info
						}, s._getFrameData = function(t) {
							var e = String.fromCharCode(t[0], t[1], t[2], t[3]),
								n = s._readSize(t, 4);
							return {
								type: e,
								size: n,
								data: t.subarray(10, 10 + n)
							}
						}, s.getID3Frames = function(t) {
							for (var e = 0, n = []; s.isHeader(t, e);) {
								for (var i = s._readSize(t, e + 6), r = (e += 10) + i; e + 8 < r;) {
									var o = s._getFrameData(t.subarray(e)),
										a = s._decodeFrame(o);
									a && n.push(a), e += o.size + 10
								}
								s.isFooter(t, e) && (e += 10)
							}
							return n
						}, s._decodeFrame = function(t) {
							return "PRIV" === t.type ? s._decodePrivFrame(t) : "T" === t.type[0] ? s._decodeTextFrame(t) : "W" === t.type[0] ? s._decodeURLFrame(t) : void 0
						}, s._readTimeStamp = function(t) {
							if (8 === t.data.byteLength) {
								var e = new Uint8Array(t.data),
									n = 1 & e[3],
									i = (e[4] << 23) + (e[5] << 15) + (e[6] << 7) + e[7];
								return i /= 45, n && (i += 47721858.84), Math.round(i)
							}
						}, s._decodePrivFrame = function(t) {
							if (!(t.size < 2)) {
								var e = s._utf8ArrayToStr(t.data, !0),
									n = new Uint8Array(t.data.subarray(e.length + 1));
								return {
									key: t.type,
									info: e,
									data: n.buffer
								}
							}
						}, s._decodeTextFrame = function(t) {
							if (!(t.size < 2)) {
								if ("TXXX" === t.type) {
									var e = 1,
										n = s._utf8ArrayToStr(t.data.subarray(e));
									e += n.length + 1;
									var i = s._utf8ArrayToStr(t.data.subarray(e));
									return {
										key: t.type,
										info: n,
										data: i
									}
								}
								var r = s._utf8ArrayToStr(t.data.subarray(1));
								return {
									key: t.type,
									data: r
								}
							}
						}, s._decodeURLFrame = function(t) {
							if ("WXXX" === t.type) {
								if (t.size < 2) return;
								var e = 1,
									n = s._utf8ArrayToStr(t.data.subarray(e));
								e += n.length + 1;
								var i = s._utf8ArrayToStr(t.data.subarray(e));
								return {
									key: t.type,
									info: n,
									data: i
								}
							}
							var r = s._utf8ArrayToStr(t.data);
							return {
								key: t.type,
								data: r
							}
						}, s._utf8ArrayToStr = function(t) {
							for (var e = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], n = t.length, i = void 0, r = void 0, o = void 0, a = "", s = 0; s < n;) {
								if (0 === (i = t[s++]) && e) return a;
								if (0 !== i && 3 !== i) switch (i >> 4) {
									case 0:
									case 1:
									case 2:
									case 3:
									case 4:
									case 5:
									case 6:
									case 7:
										a += String.fromCharCode(i);
										break;
									case 12:
									case 13:
										r = t[s++], a += String.fromCharCode((31 & i) << 6 | 63 & r);
										break;
									case 14:
										r = t[s++], o = t[s++], a += String.fromCharCode((15 & i) << 12 | (63 & r) << 6 | (63 & o) << 0)
								}
							}
							return a
						}, s
					}(),
					r = i._utf8ArrayToStr;
				e.a = i
			}, function(t, e, n) {
				"use strict";
				var s = function() {
					function n(t, e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, n), this.subtle = t, this.aesIV = e
					}
					return n.prototype.decrypt = function(t, e) {
						return this.subtle.decrypt({
							name: "AES-CBC",
							iv: this.aesIV
						}, e, t)
					}, n
				}();
				var l = function() {
					function n(t, e) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, n), this.subtle = t, this.key = e
					}
					return n.prototype.expandKey = function() {
						return this.subtle.importKey("raw", this.key, {
							name: "AES-CBC"
						}, !1, ["encrypt", "decrypt"])
					}, n
				}();
				var u = function() {
						function t() {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, t), this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.initTable()
						}
						return t.prototype.uint8ArrayToUint32Array_ = function(t) {
							for (var e = new DataView(t), n = new Uint32Array(4), i = 0; i < 4; i++) n[i] = e.getUint32(4 * i);
							return n
						}, t.prototype.initTable = function() {
							var t = this.sBox,
								e = this.invSBox,
								n = this.subMix,
								i = n[0],
								r = n[1],
								o = n[2],
								a = n[3],
								s = this.invSubMix,
								l = s[0],
								u = s[1],
								c = s[2],
								d = s[3],
								h = new Uint32Array(256),
								f = 0,
								p = 0,
								g = 0;
							for (g = 0; g < 256; g++) h[g] = g < 128 ? g << 1 : g << 1 ^ 283;
							for (g = 0; g < 256; g++) {
								var m = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
								m = m >>> 8 ^ 255 & m ^ 99;
								var y = h[e[t[f] = m] = f],
									v = h[y],
									A = h[v],
									b = 257 * h[m] ^ 16843008 * m;
								i[f] = b << 24 | b >>> 8, r[f] = b << 16 | b >>> 16, o[f] = b << 8 | b >>> 24, a[f] = b, b = 16843009 * A ^ 65537 * v ^ 257 * y ^ 16843008 * f, l[m] = b << 24 | b >>> 8, u[m] = b << 16 | b >>> 16, c[m] = b << 8 | b >>> 24, d[m] = b, f ? (f = y ^ h[h[h[A ^ y]]], p ^= h[h[p]]) : f = p = 1
							}
						}, t.prototype.expandKey = function(t) {
							for (var e = this.uint8ArrayToUint32Array_(t), n = !0, i = 0; i < e.length && n;) n = e[i] === this.key[i], i++;
							if (!n) {
								this.key = e;
								var r = this.keySize = e.length;
								if (4 !== r && 6 !== r && 8 !== r) throw new Error("Invalid aes key size=" + r);
								var o = this.ksRows = 4 * (r + 6 + 1),
									a = void 0,
									s = void 0,
									l = this.keySchedule = new Uint32Array(o),
									u = this.invKeySchedule = new Uint32Array(o),
									c = this.sBox,
									d = this.rcon,
									h = this.invSubMix,
									f = h[0],
									p = h[1],
									g = h[2],
									m = h[3],
									y = void 0,
									v = void 0;
								for (a = 0; a < o; a++) a < r ? y = l[a] = e[a] : (v = y, a % r == 0 ? (v = c[(v = v << 8 | v >>> 24) >>> 24] << 24 | c[v >>> 16 & 255] << 16 | c[v >>> 8 & 255] << 8 | c[255 & v], v ^= d[a / r | 0] << 24) : 6 < r && a % r == 4 && (v = c[v >>> 24] << 24 | c[v >>> 16 & 255] << 16 | c[v >>> 8 & 255] << 8 | c[255 & v]), l[a] = y = (l[a - r] ^ v) >>> 0);
								for (s = 0; s < o; s++) a = o - s, v = 3 & s ? l[a] : l[a - 4], u[s] = s < 4 || a <= 4 ? v : f[c[v >>> 24]] ^ p[c[v >>> 16 & 255]] ^ g[c[v >>> 8 & 255]] ^ m[c[255 & v]], u[s] = u[s] >>> 0
							}
						}, t.prototype.networkToHostOrderSwap = function(t) {
							return t << 24 | (65280 & t) << 8 | (16711680 & t) >> 8 | t >>> 24
						}, t.prototype.decrypt = function(t, e, n, i) {
							for (var r, o, a, s = this.keySize + 6, l = this.invKeySchedule, u = this.invSBox, c = this.invSubMix, d = c[0], h = c[1], f = c[2], p = c[3], g = this.uint8ArrayToUint32Array_(n), m = g[0], y = g[1], v = g[2], A = g[3], b = new Int32Array(t), _ = new Int32Array(b.length), E = void 0, T = void 0, S = void 0, w = void 0, C = void 0, L = void 0, k = void 0, x = void 0, R = void 0, O = void 0, I = void 0, D = void 0, P = void 0, M = void 0, N = this.networkToHostOrderSwap; e < b.length;) {
								for (R = N(b[e]), O = N(b[e + 1]), I = N(b[e + 2]), D = N(b[e + 3]), C = R ^ l[0], L = D ^ l[1], k = I ^ l[2], x = O ^ l[3], P = 4, M = 1; M < s; M++) E = d[C >>> 24] ^ h[L >> 16 & 255] ^ f[k >> 8 & 255] ^ p[255 & x] ^ l[P], T = d[L >>> 24] ^ h[k >> 16 & 255] ^ f[x >> 8 & 255] ^ p[255 & C] ^ l[P + 1], S = d[k >>> 24] ^ h[x >> 16 & 255] ^ f[C >> 8 & 255] ^ p[255 & L] ^ l[P + 2], w = d[x >>> 24] ^ h[C >> 16 & 255] ^ f[L >> 8 & 255] ^ p[255 & k] ^ l[P + 3], C = E, L = T, k = S, x = w, P += 4;
								E = u[C >>> 24] << 24 ^ u[L >> 16 & 255] << 16 ^ u[k >> 8 & 255] << 8 ^ u[255 & x] ^ l[P], T = u[L >>> 24] << 24 ^ u[k >> 16 & 255] << 16 ^ u[x >> 8 & 255] << 8 ^ u[255 & C] ^ l[P + 1], S = u[k >>> 24] << 24 ^ u[x >> 16 & 255] << 16 ^ u[C >> 8 & 255] << 8 ^ u[255 & L] ^ l[P + 2], w = u[x >>> 24] << 24 ^ u[C >> 16 & 255] << 16 ^ u[L >> 8 & 255] << 8 ^ u[255 & k] ^ l[P + 3], P += 3, _[e] = N(E ^ m), _[e + 1] = N(w ^ y), _[e + 2] = N(S ^ v), _[e + 3] = N(T ^ A), m = R, y = O, v = I, A = D, e += 4
							}
							return i ? (r = _.buffer, o = r.byteLength, (a = o && new DataView(r).getUint8(o - 1)) ? r.slice(0, o - a) : r) : _.buffer
						}, t.prototype.destroy = function() {
							this.key = void 0, this.keySize = void 0, this.ksRows = void 0, this.sBox = void 0, this.invSBox = void 0, this.subMix = void 0, this.invSubMix = void 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.rcon = void 0
						}, t
					}(),
					a = n(2),
					c = n(0);
				var i = function() {
					function o(t, e) {
						var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).removePKCS7Padding,
							i = void 0 === n || n;
						if (function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, o), this.logEnabled = !0, this.observer = t, this.config = e, this.removePKCS7Padding = i) try {
							var r = crypto || self.crypto;
							this.subtle = r.subtle || r.webkitSubtle
						} catch (t) {}
						this.disableWebCrypto = !this.subtle
					}
					return o.prototype.isSync = function() {
						return this.disableWebCrypto && this.config.enableSoftwareAES
					}, o.prototype.decrypt = function(e, n, i, r) {
						var o = this;
						if (this.disableWebCrypto && this.config.enableSoftwareAES) {
							this.logEnabled && (c.b.log("JS AES decrypt"), this.logEnabled = !1);
							var t = this.decryptor;
							t || (this.decryptor = t = new u), t.expandKey(n), r(t.decrypt(e, 0, i, this.removePKCS7Padding))
						} else {
							this.logEnabled && (c.b.log("WebCrypto AES decrypt"), this.logEnabled = !1);
							var a = this.subtle;
							this.key !== n && (this.key = n, this.fastAesKey = new l(a, n)), this.fastAesKey.expandKey().then(function(t) {
								new s(a, i).decrypt(e, t).catch(function(t) {
									o.onWebCryptoError(t, e, n, i, r)
								}).then(function(t) {
									r(t)
								})
							}).catch(function(t) {
								o.onWebCryptoError(t, e, n, i, r)
							})
						}
					}, o.prototype.onWebCryptoError = function(t, e, n, i, r) {
						this.config.enableSoftwareAES ? (c.b.log("WebCrypto Error, disable WebCrypto API"), this.disableWebCrypto = !0, this.logEnabled = !0, this.decrypt(e, n, i, r)) : (c.b.error("decrypting error : " + t.message), this.observer.trigger(Event.ERROR, {
							type: a.b.MEDIA_ERROR,
							details: a.a.FRAG_DECRYPT_ERROR,
							fatal: !0,
							reason: t.message
						}))
					}, o.prototype.destroy = function() {
						var t = this.decryptor;
						t && (t.destroy(), this.decryptor = void 0)
					}, o
				}();
				e.a = i
			}, function(t, e) {
				function i() {
					this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
				}

				function l(t) {
					return "function" == typeof t
				}

				function u(t) {
					return "object" == typeof t && null !== t
				}

				function c(t) {
					return void 0 === t
				}((t.exports = i).EventEmitter = i).prototype._events = void 0, i.prototype._maxListeners = void 0, i.defaultMaxListeners = 10, i.prototype.setMaxListeners = function(t) {
					if ("number" != typeof t || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
					return this._maxListeners = t, this
				}, i.prototype.emit = function(t) {
					var e, n, i, r, o, a;
					if (this._events || (this._events = {}), "error" === t && (!this._events.error || u(this._events.error) && !this._events.error.length)) {
						if ((e = arguments[1]) instanceof Error) throw e;
						var s = new Error('Uncaught, unspecified "error" event. (' + e + ")");
						throw s.context = e, s
					}
					if (c(n = this._events[t])) return !1;
					if (l(n)) switch (arguments.length) {
						case 1:
							n.call(this);
							break;
						case 2:
							n.call(this, arguments[1]);
							break;
						case 3:
							n.call(this, arguments[1], arguments[2]);
							break;
						default:
							r = Array.prototype.slice.call(arguments, 1), n.apply(this, r)
					} else if (u(n))
						for (r = Array.prototype.slice.call(arguments, 1), i = (a = n.slice()).length, o = 0; o < i; o++) a[o].apply(this, r);
					return !0
				}, i.prototype.on = i.prototype.addListener = function(t, e) {
					var n;
					if (!l(e)) throw TypeError("listener must be a function");
					return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, l(e.listener) ? e.listener : e), this._events[t] ? u(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e, u(this._events[t]) && !this._events[t].warned && (n = c(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners) && 0 < n && this._events[t].length > n && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), "function" == typeof console.trace && console.trace()), this
				}, i.prototype.once = function(t, e) {
					if (!l(e)) throw TypeError("listener must be a function");
					var n = !1;

					function i() {
						this.removeListener(t, i), n || (n = !0, e.apply(this, arguments))
					}
					return i.listener = e, this.on(t, i), this
				}, i.prototype.removeListener = function(t, e) {
					var n, i, r, o;
					if (!l(e)) throw TypeError("listener must be a function");
					if (!this._events || !this._events[t]) return this;
					if (r = (n = this._events[t]).length, i = -1, n === e || l(n.listener) && n.listener === e) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, e);
					else if (u(n)) {
						for (o = r; 0 < o--;)
							if (n[o] === e || n[o].listener && n[o].listener === e) {
								i = o;
								break
							} if (i < 0) return this;
						1 === n.length ? (n.length = 0, delete this._events[t]) : n.splice(i, 1), this._events.removeListener && this.emit("removeListener", t, e)
					}
					return this
				}, i.prototype.removeAllListeners = function(t) {
					var e, n;
					if (!this._events) return this;
					if (!this._events.removeListener) return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t], this;
					if (0 === arguments.length) {
						for (e in this._events) "removeListener" !== e && this.removeAllListeners(e);
						return this.removeAllListeners("removeListener"), this._events = {}, this
					}
					if (l(n = this._events[t])) this.removeListener(t, n);
					else if (n)
						for (; n.length;) this.removeListener(t, n[n.length - 1]);
					return delete this._events[t], this
				}, i.prototype.listeners = function(t) {
					return this._events && this._events[t] ? l(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
				}, i.prototype.listenerCount = function(t) {
					if (this._events) {
						var e = this._events[t];
						if (l(e)) return 1;
						if (e) return e.length
					}
					return 0
				}, i.listenerCount = function(t, e) {
					return t.listenerCount(e)
				}
			}, function(t, e, n) {
				"use strict";
				var h = n(0),
					l = n(1);
				var s = Math.pow(2, 32) - 1,
					i = function() {
						function g(t, e) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, g), this.observer = t, this.remuxer = e
						}
						return g.prototype.resetTimeStamp = function(t) {
							this.initPTS = t
						}, g.prototype.resetInitSegment = function(t, e, n, i) {
							if (t && t.byteLength) {
								var r = this.initData = g.parseInitSegment(t);
								null == e && (e = "mp4a.40.5"), null == n && (n = "avc1.42e01e");
								var o = {};
								r.audio && r.video ? o.audiovideo = {
									container: "video/mp4",
									codec: e + "," + n,
									initSegment: i ? t : null
								} : (r.audio && (o.audio = {
									container: "audio/mp4",
									codec: e,
									initSegment: i ? t : null
								}), r.video && (o.video = {
									container: "video/mp4",
									codec: n,
									initSegment: i ? t : null
								})), this.observer.trigger(l.a.FRAG_PARSING_INIT_SEGMENT, {
									tracks: o
								})
							} else e && (this.audioCodec = e), n && (this.videoCodec = n)
						}, g.probe = function(t) {
							return 0 < g.findBox({
								data: t,
								start: 0,
								end: Math.min(t.length, 16384)
							}, ["moof"]).length
						}, g.bin2str = function(t) {
							return String.fromCharCode.apply(null, t)
						}, g.readUint16 = function(t, e) {
							t.data && (e += t.start, t = t.data);
							var n = t[e] << 8 | t[e + 1];
							return n < 0 ? 65536 + n : n
						}, g.readUint32 = function(t, e) {
							t.data && (e += t.start, t = t.data);
							var n = t[e] << 24 | t[e + 1] << 16 | t[e + 2] << 8 | t[e + 3];
							return n < 0 ? 4294967296 + n : n
						}, g.writeUint32 = function(t, e, n) {
							t.data && (e += t.start, t = t.data), t[e] = n >> 24, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = 255 & n
						}, g.findBox = function(t, e) {
							var n = [],
								i = void 0,
								r = void 0,
								o = void 0,
								a = void 0,
								s = void 0,
								l = void 0;
							if (t.data ? (s = t.start, o = t.end, t = t.data) : (s = 0, o = t.byteLength), !e.length) return null;
							for (i = s; i < o;) l = 1 < (r = g.readUint32(t, i)) ? i + r : o, g.bin2str(t.subarray(i + 4, i + 8)) === e[0] && (1 === e.length ? n.push({
								data: t,
								start: i + 8,
								end: l
							}) : (a = g.findBox({
								data: t,
								start: i + 8,
								end: l
							}, e.slice(1))).length && (n = n.concat(a))), i = l;
							return n
						}, g.parseSegmentIndex = function(t) {
							var e = g.findBox(t, ["moov"])[0],
								n = e ? e.end : null,
								i = 0,
								r = g.findBox(t, ["sidx"]),
								o = void 0;
							if (!r || !r[0]) return null;
							o = [];
							var a = (r = r[0]).data[0],
								s = g.readUint32(r, i = 0 === a ? 8 : 16);
							i += 4;
							i += 0 === a ? 8 : 16, i += 2;
							var l = r.end + 0,
								u = g.readUint16(r, i);
							i += 2;
							for (var c = 0; c < u; c++) {
								var d = i,
									h = g.readUint32(r, d);
								d += 4;
								var f = 2147483647 & h;
								if (1 === (2147483648 & h) >>> 31) return void console.warn("SIDX has hierarchical references (not supported)");
								var p = g.readUint32(r, d);
								d += 4, o.push({
									referenceSize: f,
									subsegmentDuration: p,
									info: {
										duration: p / s,
										start: l,
										end: l + f - 1
									}
								}), l += f, i = d += 4
							}
							return {
								earliestPresentationTime: 0,
								timescale: s,
								version: a,
								referencesCount: u,
								references: o,
								moovEndOffset: n
							}
						}, g.parseInitSegment = function(t) {
							var d = [];
							return g.findBox(t, ["moov", "trak"]).forEach(function(t) {
								var e = g.findBox(t, ["tkhd"])[0];
								if (e) {
									var n = e.data[e.start],
										i = 0 === n ? 12 : 20,
										r = g.readUint32(e, i),
										o = g.findBox(t, ["mdia", "mdhd"])[0];
									if (o) {
										n = o.data[o.start];
										var a = g.readUint32(o, i = 0 === n ? 12 : 20),
											s = g.findBox(t, ["mdia", "hdlr"])[0];
										if (s) {
											var l = {
												soun: "audio",
												vide: "video"
											} [g.bin2str(s.data.subarray(s.start + 8, s.start + 12))];
											if (l) {
												var u = g.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
												if (u.length) {
													u = u[0];
													var c = g.bin2str(u.data.subarray(u.start + 12, u.start + 16));
													h.b.log("MP4Demuxer:" + l + ":" + c + " found")
												}
												d[r] = {
													timescale: a,
													type: l
												}, d[l] = {
													timescale: a,
													id: r
												}
											}
										}
									}
								}
							}), d
						}, g.getStartDTS = function(r, t) {
							var e, n, i = void 0;
							return i = g.findBox(t, ["moof", "traf"]), e = [].concat.apply([], i.map(function(i) {
								return g.findBox(i, ["tfhd"]).map(function(t) {
									var e, n;
									return e = g.readUint32(t, 4), n = r[e].timescale || 9e4, g.findBox(i, ["tfdt"]).map(function(t) {
										var e, n = void 0;
										return e = t.data[t.start], n = g.readUint32(t, 4), 1 === e && (n *= Math.pow(2, 32), n += g.readUint32(t, 8)), n
									})[0] / n
								})
							})), n = Math.min.apply(null, e), isFinite(n) ? n : 0
						}, g.offsetStartDTS = function(i, t, a) {
							g.findBox(t, ["moof", "traf"]).map(function(n) {
								return g.findBox(n, ["tfhd"]).map(function(t) {
									var e = g.readUint32(t, 4),
										o = i[e].timescale || 9e4;
									g.findBox(n, ["tfdt"]).map(function(t) {
										var e = t.data[t.start],
											n = g.readUint32(t, 4);
										if (0 === e) g.writeUint32(t, 4, n - a * o);
										else {
											n *= Math.pow(2, 32), n += g.readUint32(t, 8), n -= a * o, n = Math.max(n, 0);
											var i = Math.floor(n / (s + 1)),
												r = Math.floor(n % (s + 1));
											g.writeUint32(t, 4, i), g.writeUint32(t, 8, r)
										}
									})
								})
							})
						}, g.prototype.append = function(t, e, n, i) {
							var r = this.initData;
							r || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1), r = this.initData);
							var o, a = this.initPTS;
							if (void 0 === a) {
								var s = g.getStartDTS(r, t);
								this.initPTS = a = s - e, this.observer.trigger(l.a.INIT_PTS_FOUND, {
									initPTS: a
								})
							}
							g.offsetStartDTS(r, t, a), o = g.getStartDTS(r, t), this.remuxer.remux(r.audio, r.video, null, null, o, n, i, t)
						}, g.prototype.destroy = function() {}, g
					}();
				e.a = i
			}, function(t, e, n) {
				"use strict";
				var J = n(1),
					tt = n(2),
					g = n(5),
					et = n(0);

				function r(t, e) {
					return 255 === t[e] && 240 == (246 & t[e + 1])
				}

				function c(t, e) {
					return 1 & t[e + 1] ? 7 : 9
				}

				function d(t, e) {
					return (3 & t[e + 3]) << 11 | t[e + 4] << 3 | (224 & t[e + 5]) >>> 5
				}

				function m(t, e) {
					return !!(e + 1 < t.length && r(t, e))
				}

				function o(t, e) {
					if (e + 1 < t.length && r(t, e)) {
						var n = c(t, e);
						e + 5 < t.length && (n = d(t, e));
						var i = e + n;
						if (i === t.length || i + 1 < t.length && r(t, i)) return !0
					}
					return !1
				}

				function y(t, e, n, i, r) {
					if (!t.samplerate) {
						var o = function(t, e, n, i) {
							var r, o = void 0,
								a = void 0,
								s = void 0,
								l = void 0,
								u = navigator.userAgent.toLowerCase(),
								c = i,
								d = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
							if (o = 1 + ((192 & e[n + 2]) >>> 6), r = (60 & e[n + 2]) >>> 2, !(d.length - 1 < r)) return s = (1 & e[n + 2]) << 2, s |= (192 & e[n + 3]) >>> 6, et.b.log("manifest codec:" + i + ",ADTS data:type:" + o + ",sampleingIndex:" + r + "[" + d[r] + "Hz],channelConfig:" + s), /firefox/i.test(u) ? 6 <= r ? (o = 5, l = new Array(4), a = r - 3) : (o = 2, l = new Array(2), a = r) : -1 !== u.indexOf("android") ? (o = 2, l = new Array(2), a = r) : (o = 5, l = new Array(4), i && (-1 !== i.indexOf("mp4a.40.29") || -1 !== i.indexOf("mp4a.40.5")) || !i && 6 <= r ? a = r - 3 : ((i && -1 !== i.indexOf("mp4a.40.2") && (6 <= r && 1 === s || /vivaldi/i.test(u)) || !i && 1 === s) && (o = 2, l = new Array(2)), a = r)), l[0] = o << 3, l[0] |= (14 & r) >> 1, l[1] |= (1 & r) << 7, l[1] |= s << 3, 5 === o && (l[1] |= (14 & a) >> 1, l[2] = (1 & a) << 7, l[2] |= 8, l[3] = 0), {
								config: l,
								samplerate: d[r],
								channelCount: s,
								codec: "mp4a.40." + o,
								manifestCodec: c
							};
							t.trigger(Event.ERROR, {
								type: tt.b.MEDIA_ERROR,
								details: tt.a.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "invalid ADTS sampling index:" + r
							})
						}(e, n, i, r);
						t.config = o.config, t.samplerate = o.samplerate, t.channelCount = o.channelCount, t.codec = o.codec, t.manifestCodec = o.manifestCodec, et.b.log("parsed codec:" + t.codec + ",rate:" + o.samplerate + ",nb channel:" + o.channelCount)
					}
				}

				function v(t) {
					return 9216e4 / t
				}

				function A(t, e, n, i, r) {
					var o = function(t, e, n, i, r) {
						var o, a = void 0,
							s = t.length;
						if (o = c(t, e), a = d(t, e), 0 < (a -= o) && e + o + a <= s) return {
							headerLength: o,
							frameLength: a,
							stamp: n + i * r
						}
					}(e, n, i, r, v(t.samplerate));
					if (o) {
						var a = o.stamp,
							s = o.headerLength,
							l = o.frameLength,
							u = {
								unit: e.subarray(n + s, n + s + l),
								pts: a,
								dts: a
							};
						return t.samples.push(u), t.len += l, {
							sample: u,
							length: l + s
						}
					}
				}
				var p = n(4);
				var T = function() {
						function i(t, e, n) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i), this.observer = t, this.config = n, this.remuxer = e
						}
						return i.prototype.resetInitSegment = function(t, e, n, i) {
							this._audioTrack = {
								container: "audio/adts",
								type: "audio",
								id: 0,
								sequenceNumber: 0,
								isAAC: !0,
								samples: [],
								len: 0,
								manifestCodec: e,
								duration: i,
								inputTimeScale: 9e4
							}
						}, i.prototype.resetTimeStamp = function() {}, i.probe = function(t) {
							if (!t) return !1;
							for (var e = (p.a.getID3Data(t, 0) || []).length, n = t.length; e < n; e++)
								if (o(t, e)) return et.b.log("ADTS sync word found !"), !0;
							return !1
						}, i.prototype.append = function(t, e, n, i) {
							for (var r = this._audioTrack, o = p.a.getID3Data(t, 0) || [], a = p.a.getTimeStamp(o), s = a ? 90 * a : 9e4 * e, l = 0, u = s, c = t.length, d = o.length, h = [{
									pts: u,
									dts: u,
									data: o
								}]; d < c - 1;)
								if (m(t, d) && d + 5 < c) {
									y(r, this.observer, t, d, r.manifestCodec);
									var f = A(r, t, d, s, l);
									if (!f) {
										et.b.log("Unable to parse AAC frame");
										break
									}
									d += f.length, u = f.sample.pts, l++
								} else p.a.isHeader(t, d) ? (o = p.a.getID3Data(t, d), h.push({
									pts: u,
									dts: u,
									data: o
								}), d += o.length) : d++;
							this.remuxer.remux(r, {
								samples: []
							}, {
								samples: h,
								inputTimeScale: 9e4
							}, {
								samples: []
							}, e, n, i)
						}, i.prototype.destroy = function() {}, i
					}(),
					S = n(7),
					b = {
						BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
						SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
						SamplesCoefficients: [
							[0, 72, 144, 12],
							[0, 0, 0, 0],
							[0, 72, 144, 12],
							[0, 144, 144, 12]
						],
						BytesInSlot: [0, 1, 1, 4],
						appendFrame: function(t, e, n, i, r) {
							if (!(n + 24 > e.length)) {
								var o = this.parseHeader(e, n);
								if (o && n + o.frameLength <= e.length) {
									var a = i + r * (9e4 * o.samplesPerFrame / o.sampleRate),
										s = {
											unit: e.subarray(n, n + o.frameLength),
											pts: a,
											dts: a
										};
									return t.config = [], t.channelCount = o.channelCount, t.samplerate = o.sampleRate, t.samples.push(s), t.len += o.frameLength, {
										sample: s,
										length: o.frameLength
									}
								}
							}
						},
						parseHeader: function(t, e) {
							var n = t[e + 1] >> 3 & 3,
								i = t[e + 1] >> 1 & 3,
								r = t[e + 2] >> 4 & 15,
								o = t[e + 2] >> 2 & 3,
								a = t[e + 2] >> 1 & 1;
							if (1 !== n && 0 !== r && 15 !== r && 3 !== o) {
								var s = 3 === n ? 3 - i : 3 === i ? 3 : 4,
									l = 1e3 * b.BitratesMap[14 * s + r - 1],
									u = 3 === n ? 0 : 2 === n ? 1 : 2,
									c = b.SamplingRateMap[3 * u + o],
									d = t[e + 3] >> 6 == 3 ? 1 : 2,
									h = b.SamplesCoefficients[n][i],
									f = b.BytesInSlot[i],
									p = 8 * h * f;
								return {
									sampleRate: c,
									channelCount: d,
									frameLength: parseInt(h * l / c + a, 10) * f,
									samplesPerFrame: p
								}
							}
						},
						isHeaderPattern: function(t, e) {
							return 255 === t[e] && 224 == (224 & t[e + 1]) && 0 != (6 & t[e + 1])
						},
						isHeader: function(t, e) {
							return !!(e + 1 < t.length && this.isHeaderPattern(t, e))
						},
						probe: function(t, e) {
							if (e + 1 < t.length && this.isHeaderPattern(t, e)) {
								var n = this.parseHeader(t, e),
									i = 4;
								n && n.frameLength && (i = n.frameLength);
								var r = e + i;
								if (r === t.length || r + 1 < t.length && this.isHeaderPattern(t, r)) return !0
							}
							return !1
						}
					},
					_ = b;
				var w = function() {
					function e(t) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.data = t, this.bytesAvailable = t.byteLength, this.word = 0, this.bitsAvailable = 0
					}
					return e.prototype.loadWord = function() {
						var t = this.data,
							e = this.bytesAvailable,
							n = t.byteLength - e,
							i = new Uint8Array(4),
							r = Math.min(4, e);
						if (0 === r) throw new Error("no bytes available");
						i.set(t.subarray(n, n + r)), this.word = new DataView(i.buffer).getUint32(0), this.bitsAvailable = 8 * r, this.bytesAvailable -= r
					}, e.prototype.skipBits = function(t) {
						var e = void 0;
						this.bitsAvailable > t || (t -= this.bitsAvailable, t -= (e = t >> 3) >> 3, this.bytesAvailable -= e, this.loadWord()), this.word <<= t, this.bitsAvailable -= t
					}, e.prototype.readBits = function(t) {
						var e = Math.min(this.bitsAvailable, t),
							n = this.word >>> 32 - e;
						return 32 < t && et.b.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= e, 0 < this.bitsAvailable ? this.word <<= e : 0 < this.bytesAvailable && this.loadWord(), 0 < (e = t - e) && this.bitsAvailable ? n << e | this.readBits(e) : n
					}, e.prototype.skipLZ = function() {
						var t = void 0;
						for (t = 0; t < this.bitsAvailable; ++t)
							if (0 != (this.word & 2147483648 >>> t)) return this.word <<= t, this.bitsAvailable -= t, t;
						return this.loadWord(), t + this.skipLZ()
					}, e.prototype.skipUEG = function() {
						this.skipBits(1 + this.skipLZ())
					}, e.prototype.skipEG = function() {
						this.skipBits(1 + this.skipLZ())
					}, e.prototype.readUEG = function() {
						var t = this.skipLZ();
						return this.readBits(t + 1) - 1
					}, e.prototype.readEG = function() {
						var t = this.readUEG();
						return 1 & t ? 1 + t >>> 1 : -1 * (t >>> 1)
					}, e.prototype.readBoolean = function() {
						return 1 === this.readBits(1)
					}, e.prototype.readUByte = function() {
						return this.readBits(8)
					}, e.prototype.readUShort = function() {
						return this.readBits(16)
					}, e.prototype.readUInt = function() {
						return this.readBits(32)
					}, e.prototype.skipScalingList = function(t) {
						var e = 8,
							n = 8,
							i = void 0;
						for (i = 0; i < t; i++) 0 !== n && (n = (e + this.readEG() + 256) % 256), e = 0 === n ? e : n
					}, e.prototype.readSPS = function() {
						var t, e, n, i, r = 0,
							o = 0,
							a = 0,
							s = 0,
							l = void 0,
							u = void 0,
							c = void 0,
							d = this.readUByte.bind(this),
							h = this.readBits.bind(this),
							f = this.readUEG.bind(this),
							p = this.readBoolean.bind(this),
							g = this.skipBits.bind(this),
							m = this.skipEG.bind(this),
							y = this.skipUEG.bind(this),
							v = this.skipScalingList.bind(this);
						if (d(), t = d(), h(5), g(3), d(), y(), 100 === t || 110 === t || 122 === t || 244 === t || 44 === t || 83 === t || 86 === t || 118 === t || 128 === t) {
							var A = f();
							if (3 === A && g(1), y(), y(), g(1), p())
								for (u = 3 !== A ? 8 : 12, c = 0; c < u; c++) p() && v(c < 6 ? 16 : 64)
						}
						y();
						var b = f();
						if (0 === b) f();
						else if (1 === b)
							for (g(1), m(), m(), l = f(), c = 0; c < l; c++) m();
						y(), g(1), e = f(), n = f(), 0 === (i = h(1)) && g(1), g(1), p() && (r = f(), o = f(), a = f(), s = f());
						var _ = [1, 1];
						if (p() && p()) switch (d()) {
							case 1:
								_ = [1, 1];
								break;
							case 2:
								_ = [12, 11];
								break;
							case 3:
								_ = [10, 11];
								break;
							case 4:
								_ = [16, 11];
								break;
							case 5:
								_ = [40, 33];
								break;
							case 6:
								_ = [24, 11];
								break;
							case 7:
								_ = [20, 11];
								break;
							case 8:
								_ = [32, 11];
								break;
							case 9:
								_ = [80, 33];
								break;
							case 10:
								_ = [18, 11];
								break;
							case 11:
								_ = [15, 11];
								break;
							case 12:
								_ = [64, 33];
								break;
							case 13:
								_ = [160, 99];
								break;
							case 14:
								_ = [4, 3];
								break;
							case 15:
								_ = [3, 2];
								break;
							case 16:
								_ = [2, 1];
								break;
							case 255:
								_ = [d() << 8 | d(), d() << 8 | d()]
						}
						return {
							width: Math.ceil(16 * (e + 1) - 2 * r - 2 * o),
							height: (2 - i) * (n + 1) * 16 - (i ? 2 : 4) * (a + s),
							pixelRatio: _
						}
					}, e.prototype.readSliceType = function() {
						return this.readUByte(), this.readUEG(), this.readUEG()
					}, e
				}();
				var i = function() {
					function r(t, e, n, i) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, r), this.decryptdata = n, this.discardEPB = i, this.decrypter = new g.a(t, e, {
							removePKCS7Padding: !1
						})
					}
					return r.prototype.decryptBuffer = function(t, e) {
						this.decrypter.decrypt(t, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, e)
					}, r.prototype.decryptAacSample = function(e, n, i, r) {
						var o = e[n].unit,
							t = o.subarray(16, o.length - o.length % 16),
							a = t.buffer.slice(t.byteOffset, t.byteOffset + t.length),
							s = this;
						this.decryptBuffer(a, function(t) {
							t = new Uint8Array(t), o.set(t, 16), r || s.decryptAacSamples(e, n + 1, i)
						})
					}, r.prototype.decryptAacSamples = function(t, e, n) {
						for (;; e++) {
							if (e >= t.length) return void n();
							if (!(t[e].unit.length < 32)) {
								var i = this.decrypter.isSync();
								if (this.decryptAacSample(t, e, n, i), !i) return
							}
						}
					}, r.prototype.getAvcEncryptedData = function(t) {
						for (var e = 16 * Math.floor((t.length - 48) / 160) + 16, n = new Int8Array(e), i = 0, r = 32; r <= t.length - 16; r += 160, i += 16) n.set(t.subarray(r, r + 16), i);
						return n
					}, r.prototype.getAvcDecryptedUnit = function(t, e) {
						e = new Uint8Array(e);
						for (var n = 0, i = 32; i <= t.length - 16; i += 160, n += 16) t.set(e.subarray(n, n + 16), i);
						return t
					}, r.prototype.decryptAvcSample = function(e, n, i, r, o, a) {
						var s = this.discardEPB(o.data),
							t = this.getAvcEncryptedData(s),
							l = this;
						this.decryptBuffer(t.buffer, function(t) {
							o.data = l.getAvcDecryptedUnit(s, t), a || l.decryptAvcSamples(e, n, i + 1, r)
						})
					}, r.prototype.decryptAvcSamples = function(t, e, n, i) {
						for (;; e++, n = 0) {
							if (e >= t.length) return void i();
							for (var r = t[e].units; !(n >= r.length); n++) {
								var o = r[n];
								if (!(o.length <= 48 || 1 !== o.type && 5 !== o.type)) {
									var a = this.decrypter.isSync();
									if (this.decryptAvcSample(t, e, n, i, o, a), !a) return
								}
							}
						}
					}, r
				}();
				var a = {
						video: 0,
						audio: 1,
						id3: 2,
						text: 3
					},
					C = function() {
						function O(t, e, n, i) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, O), this.observer = t, this.config = n, this.typeSupported = i, this.remuxer = e, this.sampleAes = null
						}
						return O.prototype.setDecryptData = function(t) {
							null != t && null != t.key && "SAMPLE-AES" === t.method ? this.sampleAes = new i(this.observer, this.config, t, this.discardEPB) : this.sampleAes = null
						}, O.probe = function(t) {
							var e = O._syncOffset(t);
							return !(e < 0) && (e && et.b.warn("MPEG2-TS detected but first sync word found @ offset " + e + ", junk ahead ?"), !0)
						}, O._syncOffset = function(t) {
							for (var e = Math.min(1e3, t.length - 564), n = 0; n < e;) {
								if (71 === t[n] && 71 === t[n + 188] && 71 === t[n + 376]) return n;
								n++
							}
							return -1
						}, O.createTrack = function(t, e) {
							return {
								container: "video" === t || "audio" === t ? "video/mp2t" : void 0,
								type: t,
								id: a[t],
								pid: -1,
								inputTimeScale: 9e4,
								sequenceNumber: 0,
								samples: [],
								len: 0,
								dropped: "video" === t ? 0 : void 0,
								isAAC: "audio" === t || void 0,
								duration: "audio" === t ? e : void 0
							}
						}, O.prototype.resetInitSegment = function(t, e, n, i) {
							this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = O.createTrack("video", i), this._audioTrack = O.createTrack("audio", i), this._id3Track = O.createTrack("id3", i), this._txtTrack = O.createTrack("text", i), this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = e, this.videoCodec = n, this._duration = i
						}, O.prototype.resetTimeStamp = function() {}, O.prototype.append = function(t, e, n, i) {
							var r = void 0,
								o = t.length,
								a = void 0,
								s = void 0,
								l = void 0,
								u = void 0,
								c = !1;
							this.contiguous = n;
							var d = this.pmtParsed,
								h = this._avcTrack,
								f = this._audioTrack,
								p = this._id3Track,
								g = h.pid,
								m = f.pid,
								y = p.pid,
								v = this._pmtId,
								A = h.pesData,
								b = f.pesData,
								_ = p.pesData,
								E = this._parsePAT,
								T = this._parsePMT,
								S = this._parsePES,
								w = this._parseAVCPES.bind(this),
								C = this._parseAACPES.bind(this),
								L = this._parseMPEGPES.bind(this),
								k = this._parseID3PES.bind(this),
								x = O._syncOffset(t);
							for (o -= (o + x) % 188, r = x; r < o; r += 188)
								if (71 === t[r]) {
									if (a = !!(64 & t[r + 1]), s = ((31 & t[r + 1]) << 8) + t[r + 2], 1 < (48 & t[r + 3]) >> 4) {
										if ((l = r + 5 + t[r + 4]) === r + 188) continue
									} else l = r + 4;
									switch (s) {
										case g:
											a && (A && (u = S(A)) && void 0 !== u.pts && w(u, !1), A = {
												data: [],
												size: 0
											}), A && (A.data.push(t.subarray(l, r + 188)), A.size += r + 188 - l);
											break;
										case m:
											a && (b && (u = S(b)) && void 0 !== u.pts && (f.isAAC ? C(u) : L(u)), b = {
												data: [],
												size: 0
											}), b && (b.data.push(t.subarray(l, r + 188)), b.size += r + 188 - l);
											break;
										case y:
											a && (_ && (u = S(_)) && void 0 !== u.pts && k(u), _ = {
												data: [],
												size: 0
											}), _ && (_.data.push(t.subarray(l, r + 188)), _.size += r + 188 - l);
											break;
										case 0:
											a && (l += t[l] + 1), v = this._pmtId = E(t, l);
											break;
										case v:
											a && (l += t[l] + 1);
											var R = T(t, l, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
											0 < (g = R.avc) && (h.pid = g), 0 < (m = R.audio) && (f.pid = m, f.isAAC = R.isAAC), 0 < (y = R.id3) && (p.pid = y), c && !d && (et.b.log("reparse from beginning"), c = !1, r = x - 188), d = this.pmtParsed = !0;
											break;
										case 17:
										case 8191:
											break;
										default:
											c = !0
									}
								} else this.observer.trigger(J.a.ERROR, {
									type: tt.b.MEDIA_ERROR,
									details: tt.a.FRAG_PARSING_ERROR,
									fatal: !1,
									reason: "TS packet did not start with 0x47"
								});
							A && (u = S(A)) && void 0 !== u.pts ? (w(u, !0), h.pesData = null) : h.pesData = A, b && (u = S(b)) && void 0 !== u.pts ? (f.isAAC ? C(u) : L(u), f.pesData = null) : (b && b.size && et.b.log("last AAC PES packet truncated,might overlap between fragments"), f.pesData = b), _ && (u = S(_)) && void 0 !== u.pts ? (k(u), p.pesData = null) : p.pesData = _, null == this.sampleAes ? this.remuxer.remux(f, h, p, this._txtTrack, e, n, i) : this.decryptAndRemux(f, h, p, this._txtTrack, e, n, i)
						}, O.prototype.decryptAndRemux = function(t, e, n, i, r, o, a) {
							if (t.samples && t.isAAC) {
								var s = this;
								this.sampleAes.decryptAacSamples(t.samples, 0, function() {
									s.decryptAndRemuxAvc(t, e, n, i, r, o, a)
								})
							} else this.decryptAndRemuxAvc(t, e, n, i, r, o, a)
						}, O.prototype.decryptAndRemuxAvc = function(t, e, n, i, r, o, a) {
							if (e.samples) {
								var s = this;
								this.sampleAes.decryptAvcSamples(e.samples, 0, 0, function() {
									s.remuxer.remux(t, e, n, i, r, o, a)
								})
							} else this.remuxer.remux(t, e, n, i, r, o, a)
						}, O.prototype.destroy = function() {
							this._initPTS = this._initDTS = void 0, this._duration = 0
						}, O.prototype._parsePAT = function(t, e) {
							return (31 & t[e + 10]) << 8 | t[e + 11]
						}, O.prototype._parsePMT = function(t, e, n, i) {
							var r, o = void 0,
								a = {
									audio: -1,
									avc: -1,
									id3: -1,
									isAAC: !0
								};
							for (r = e + 3 + ((15 & t[e + 1]) << 8 | t[e + 2]) - 4, e += 12 + ((15 & t[e + 10]) << 8 | t[e + 11]); e < r;) {
								switch (o = (31 & t[e + 1]) << 8 | t[e + 2], t[e]) {
									case 207:
										if (!i) {
											et.b.log("unkown stream type:" + t[e]);
											break
										}
										case 15:
											-1 === a.audio && (a.audio = o);
											break;
										case 21:
											-1 === a.id3 && (a.id3 = o);
											break;
										case 219:
											if (!i) {
												et.b.log("unkown stream type:" + t[e]);
												break
											}
											case 27:
												-1 === a.avc && (a.avc = o);
												break;
											case 3:
											case 4:
												n ? -1 === a.audio && (a.audio = o, a.isAAC = !1) : et.b.log("MPEG audio found, not supported in this browser for now");
												break;
											case 36:
												et.b.warn("HEVC stream type found, not supported for now");
												break;
											default:
												et.b.log("unkown stream type:" + t[e])
								}
								e += 5 + ((15 & t[e + 3]) << 8 | t[e + 4])
							}
							return a
						}, O.prototype._parsePES = function(t) {
							var e = 0,
								n = void 0,
								i = void 0,
								r = void 0,
								o = void 0,
								a = void 0,
								s = void 0,
								l = void 0,
								u = void 0,
								c = t.data;
							if (!t || 0 === t.size) return null;
							for (; c[0].length < 19 && 1 < c.length;) {
								var d = new Uint8Array(c[0].length + c[1].length);
								d.set(c[0]), d.set(c[1], c[0].length), c[0] = d, c.splice(1, 1)
							}
							if (1 === ((n = c[0])[0] << 16) + (n[1] << 8) + n[2]) {
								if ((r = (n[4] << 8) + n[5]) && r > t.size - 6) return null;
								192 & (i = n[7]) && (4294967295 < (s = 536870912 * (14 & n[9]) + 4194304 * (255 & n[10]) + 16384 * (254 & n[11]) + 128 * (255 & n[12]) + (254 & n[13]) / 2) && (s -= 8589934592), 64 & i ? (4294967295 < (l = 536870912 * (14 & n[14]) + 4194304 * (255 & n[15]) + 16384 * (254 & n[16]) + 128 * (255 & n[17]) + (254 & n[18]) / 2) && (l -= 8589934592), 54e5 < s - l && (et.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"), s = l)) : l = s), u = (o = n[8]) + 9, t.size -= u, a = new Uint8Array(t.size);
								for (var h = 0, f = c.length; h < f; h++) {
									var p = (n = c[h]).byteLength;
									if (u) {
										if (p < u) {
											u -= p;
											continue
										}
										n = n.subarray(u), p -= u, u = 0
									}
									a.set(n, e), e += p
								}
								return r && (r -= o + 3), {
									data: a,
									pts: s,
									dts: l,
									len: r
								}
							}
							return null
						}, O.prototype.pushAccesUnit = function(t, e) {
							if (t.units.length && t.frame) {
								var n = e.samples,
									i = n.length;
								!this.config.forceKeyFrameOnDiscontinuity || !0 === t.key || e.sps && (i || this.contiguous) ? (t.id = i, n.push(t)) : e.dropped++
							}
							t.debug.length && et.b.log(t.pts + "/" + t.dts + ":" + t.debug)
						}, O.prototype._parseAVCPES = function(p, t) {
							var g = this,
								m = this._avcTrack,
								e = this._parseAVCNALu(p.data),
								y = void 0,
								v = this.avcSample,
								A = void 0,
								b = !1,
								_ = void 0,
								E = this.pushAccesUnit.bind(this),
								T = function(t, e, n, i) {
									return {
										key: t,
										pts: e,
										dts: n,
										units: [],
										debug: i
									}
								};
							p.data = null, v && e.length && !m.audFound && (E(v, m), v = this.avcSample = T(!1, p.pts, p.dts, "")), e.forEach(function(t) {
								switch (t.type) {
									case 1:
										A = !0, v || (v = g.avcSample = T(!0, p.pts, p.dts, "")), v.frame = !0;
										var e = t.data;
										if (b && 4 < e.length) {
											var n = new w(e).readSliceType();
											2 !== n && 4 !== n && 7 !== n && 9 !== n || (v.key = !0)
										}
										break;
									case 5:
										A = !0, v || (v = g.avcSample = T(!0, p.pts, p.dts, "")), v.key = !0, v.frame = !0;
										break;
									case 6:
										A = !0, (y = new w(g.discardEPB(t.data))).readUByte();
										for (var i = 0, r = 0, o = !1, a = 0; !o && 1 < y.bytesAvailable;) {
											for (i = 0; i += a = y.readUByte(), 255 === a;);
											for (r = 0; r += a = y.readUByte(), 255 === a;);
											if (4 === i && 0 !== y.bytesAvailable) {
												if (o = !0, 181 === y.readUByte())
													if (49 === y.readUShort())
														if (1195456820 === y.readUInt())
															if (3 === y.readUByte()) {
																var s = y.readUByte(),
																	l = 31 & s,
																	u = [s, y.readUByte()];
																for (_ = 0; _ < l; _++) u.push(y.readUByte()), u.push(y.readUByte()), u.push(y.readUByte());
																g._insertSampleInOrder(g._txtTrack.samples, {
																	type: 3,
																	pts: p.pts,
																	bytes: u
																})
															}
											} else if (r < y.bytesAvailable)
												for (_ = 0; _ < r; _++) y.readUByte()
										}
										break;
									case 7:
										if (b = A = !0, !m.sps) {
											var c = (y = new w(t.data)).readSPS();
											m.width = c.width, m.height = c.height, m.pixelRatio = c.pixelRatio, m.sps = [t.data], m.duration = g._duration;
											var d = t.data.subarray(1, 4),
												h = "avc1.";
											for (_ = 0; _ < 3; _++) {
												var f = d[_].toString(16);
												f.length < 2 && (f = "0" + f), h += f
											}
											m.codec = h
										}
										break;
									case 8:
										A = !0, m.pps || (m.pps = [t.data]);
										break;
									case 9:
										A = !1, m.audFound = !0, v && E(v, m), v = g.avcSample = T(!1, p.pts, p.dts, "");
										break;
									case 12:
										A = !1;
										break;
									default:
										A = !1, v && (v.debug += "unknown NAL " + t.type + " ")
								}
								v && A && v.units.push(t)
							}), t && v && (E(v, m), this.avcSample = null)
						}, O.prototype._insertSampleInOrder = function(t, e) {
							var n = t.length;
							if (0 < n) {
								if (e.pts >= t[n - 1].pts) t.push(e);
								else
									for (var i = n - 1; 0 <= i; i--)
										if (e.pts < t[i].pts) {
											t.splice(i, 0, e);
											break
										}
							} else t.push(e)
						}, O.prototype._getLastNalUnit = function() {
							var t = this.avcSample,
								e = void 0;
							if (!t || 0 === t.units.length) {
								var n = this._avcTrack.samples;
								t = n[n.length - 1]
							}
							if (t) {
								var i = t.units;
								e = i[i.length - 1]
							}
							return e
						}, O.prototype._parseAVCNALu = function(t) {
							var e = 0,
								n = t.byteLength,
								i = void 0,
								r = void 0,
								o = this._avcTrack,
								a = o.naluState || 0,
								s = a,
								l = [],
								u = void 0,
								c = -1,
								d = void 0;
							for (-1 === a && (d = 31 & t[c = 0], a = 0, e = 1); e < n;)
								if (i = t[e++], a)
									if (1 !== a)
										if (i)
											if (1 === i) {
												if (0 <= c) u = {
													data: t.subarray(c, e - a - 1),
													type: d
												}, l.push(u);
												else {
													var h = this._getLastNalUnit();
													if (h && (s && e <= 4 - s && h.state && (h.data = h.data.subarray(0, h.data.byteLength - s)), 0 < (r = e - a - 1))) {
														var f = new Uint8Array(h.data.byteLength + r);
														f.set(h.data, 0), f.set(t.subarray(0, r), h.data.byteLength), h.data = f
													}
												}
												e < n ? (d = 31 & t[c = e], a = 0) : a = -1
											} else a = 0;
							else a = 3;
							else a = i ? 0 : 2;
							else a = i ? 0 : 1;
							if (0 <= c && 0 <= a && (u = {
									data: t.subarray(c, n),
									type: d,
									state: a
								}, l.push(u)), 0 === l.length) {
								var p = this._getLastNalUnit();
								if (p) {
									var g = new Uint8Array(p.data.byteLength + t.byteLength);
									g.set(p.data, 0), g.set(t, p.data.byteLength), p.data = g
								}
							}
							return o.naluState = a, l
						}, O.prototype.discardEPB = function(t) {
							for (var e, n = t.byteLength, i = [], r = 1, o = void 0; r < n - 2;) 0 === t[r] && 0 === t[r + 1] && 3 === t[r + 2] ? (i.push(r + 2), r += 2) : r++;
							if (0 === i.length) return t;
							e = n - i.length, o = new Uint8Array(e);
							var a = 0;
							for (r = 0; r < e; a++, r++) a === i[0] && (a++, i.shift()), o[r] = t[a];
							return o
						}, O.prototype._parseAACPES = function(t) {
							var e, n, i = this._audioTrack,
								r = t.data,
								o = t.pts,
								a = this.aacOverFlow,
								s = this.aacLastPTS,
								l = void 0,
								u = void 0,
								c = void 0;
							if (a) {
								var d = new Uint8Array(a.byteLength + r.byteLength);
								d.set(a, 0), d.set(r, a.byteLength), r = d
							}
							for (u = 0, n = r.length; u < n - 1 && !m(r, u); u++);
							if (u) {
								var h = void 0,
									f = void 0;
								if (u < n - 1 ? (h = "AAC PES did not start with ADTS header,offset:" + u, f = !1) : (h = "no ADTS header found in AAC PES", f = !0), et.b.warn("parsing error:" + h), this.observer.trigger(J.a.ERROR, {
										type: tt.b.MEDIA_ERROR,
										details: tt.a.FRAG_PARSING_ERROR,
										fatal: f,
										reason: h
									}), f) return
							}
							if (y(i, this.observer, r, u, this.audioCodec), l = 0, e = v(i.samplerate), a && s) {
								var p = s + e;
								1 < Math.abs(p - o) && (et.b.log("AAC: align PTS for overlapping frames by " + Math.round((p - o) / 90)), o = p)
							}
							for (; u < n;)
								if (m(r, u) && u + 5 < n) {
									var g = A(i, r, u, o, l);
									if (!g) break;
									u += g.length, c = g.sample.pts, l++
								} else u++;
							a = u < n ? r.subarray(u, n) : null, this.aacOverFlow = a, this.aacLastPTS = c
						}, O.prototype._parseMPEGPES = function(t) {
							for (var e = t.data, n = e.length, i = 0, r = 0, o = t.pts; r < n;)
								if (_.isHeader(e, r)) {
									var a = _.appendFrame(this._audioTrack, e, r, o, i);
									if (!a) break;
									r += a.length, i++
								} else r++
						}, O.prototype._parseID3PES = function(t) {
							this._id3Track.samples.push(t)
						}, O
					}();
				var L = function() {
					function i(t, e, n) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i), this.observer = t, this.config = n, this.remuxer = e
					}
					return i.prototype.resetInitSegment = function(t, e, n, i) {
						this._audioTrack = {
							container: "audio/mpeg",
							type: "audio",
							id: -1,
							sequenceNumber: 0,
							isAAC: !1,
							samples: [],
							len: 0,
							manifestCodec: e,
							duration: i,
							inputTimeScale: 9e4
						}
					}, i.prototype.resetTimeStamp = function() {}, i.probe = function(t) {
						var e = void 0,
							n = void 0,
							i = p.a.getID3Data(t, 0);
						if (i && void 0 !== p.a.getTimeStamp(i))
							for (e = i.length, n = Math.min(t.length - 1, e + 100); e < n; e++)
								if (_.probe(t, e)) return et.b.log("MPEG Audio sync word found !"), !0;
						return !1
					}, i.prototype.append = function(t, e, n, i) {
						for (var r = p.a.getID3Data(t, 0), o = p.a.getTimeStamp(r), a = o ? 90 * o : 9e4 * e, s = r.length, l = t.length, u = 0, c = 0, d = this._audioTrack, h = [{
								pts: a,
								dts: a,
								data: r
							}]; s < l;)
							if (_.isHeader(t, s)) {
								var f = _.appendFrame(d, t, s, a, u);
								if (!f) break;
								s += f.length, c = f.sample.pts, u++
							} else p.a.isHeader(t, s) ? (r = p.a.getID3Data(t, s), h.push({
								pts: c,
								dts: c,
								data: r
							}), s += r.length) : s++;
						this.remuxer.remux(d, {
							samples: []
						}, {
							samples: h,
							inputTimeScale: 9e4
						}, {
							samples: []
						}, e, n, i)
					}, i.prototype.destroy = function() {}, i
				}();
				var V = function() {
					function t() {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, t)
					}
					return t.getSilentFrame = function(t, e) {
						switch (t) {
							case "mp4a.40.2":
								if (1 === e) return new Uint8Array([0, 200, 0, 128, 35, 128]);
								if (2 === e) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
								if (3 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
								if (4 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
								if (5 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
								if (6 === e) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
								break;
							default:
								if (1 === e) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
								if (2 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
								if (3 === e) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
						}
						return null
					}, t
				}();
				var s = Math.pow(2, 32) - 1,
					nt = function() {
						function h() {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, h)
						}
						return h.init = function() {
							h.types = {
								avc1: [],
								avcC: [],
								btrt: [],
								dinf: [],
								dref: [],
								esds: [],
								ftyp: [],
								hdlr: [],
								mdat: [],
								mdhd: [],
								mdia: [],
								mfhd: [],
								minf: [],
								moof: [],
								moov: [],
								mp4a: [],
								".mp3": [],
								mvex: [],
								mvhd: [],
								pasp: [],
								sdtp: [],
								stbl: [],
								stco: [],
								stsc: [],
								stsd: [],
								stsz: [],
								stts: [],
								tfdt: [],
								tfhd: [],
								traf: [],
								trak: [],
								trun: [],
								trex: [],
								tkhd: [],
								vmhd: [],
								smhd: []
							};
							var t = void 0;
							for (t in h.types) h.types.hasOwnProperty(t) && (h.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
							var e = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
								n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
							h.HDLR_TYPES = {
								video: e,
								audio: n
							};
							var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
								r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
							h.STTS = h.STSC = h.STCO = r, h.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), h.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), h.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), h.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
							var o = new Uint8Array([105, 115, 111, 109]),
								a = new Uint8Array([97, 118, 99, 49]),
								s = new Uint8Array([0, 0, 0, 1]);
							h.FTYP = h.box(h.types.ftyp, o, s, o, a), h.DINF = h.box(h.types.dinf, h.box(h.types.dref, i))
						}, h.box = function(t) {
							for (var e = Array.prototype.slice.call(arguments, 1), n = 8, i = e.length, r = i, o = void 0; i--;) n += e[i].byteLength;
							for ((o = new Uint8Array(n))[0] = n >> 24 & 255, o[1] = n >> 16 & 255, o[2] = n >> 8 & 255, o[3] = 255 & n, o.set(t, 4), i = 0, n = 8; i < r; i++) o.set(e[i], n), n += e[i].byteLength;
							return o
						}, h.hdlr = function(t) {
							return h.box(h.types.hdlr, h.HDLR_TYPES[t])
						}, h.mdat = function(t) {
							return h.box(h.types.mdat, t)
						}, h.mdhd = function(t, e) {
							e *= t;
							var n = Math.floor(e / (s + 1)),
								i = Math.floor(e % (s + 1));
							return h.box(h.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 85, 196, 0, 0]))
						}, h.mdia = function(t) {
							return h.box(h.types.mdia, h.mdhd(t.timescale, t.duration), h.hdlr(t.type), h.minf(t))
						}, h.mfhd = function(t) {
							return h.box(h.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
						}, h.minf = function(t) {
							return "audio" === t.type ? h.box(h.types.minf, h.box(h.types.smhd, h.SMHD), h.DINF, h.stbl(t)) : h.box(h.types.minf, h.box(h.types.vmhd, h.VMHD), h.DINF, h.stbl(t))
						}, h.moof = function(t, e, n) {
							return h.box(h.types.moof, h.mfhd(t), h.traf(n, e))
						}, h.moov = function(t) {
							for (var e = t.length, n = []; e--;) n[e] = h.trak(t[e]);
							return h.box.apply(null, [h.types.moov, h.mvhd(t[0].timescale, t[0].duration)].concat(n).concat(h.mvex(t)))
						}, h.mvex = function(t) {
							for (var e = t.length, n = []; e--;) n[e] = h.trex(t[e]);
							return h.box.apply(null, [h.types.mvex].concat(n))
						}, h.mvhd = function(t, e) {
							e *= t;
							var n = Math.floor(e / (s + 1)),
								i = Math.floor(e % (s + 1)),
								r = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
							return h.box(h.types.mvhd, r)
						}, h.sdtp = function(t) {
							var e = t.samples || [],
								n = new Uint8Array(4 + e.length),
								i = void 0,
								r = void 0;
							for (r = 0; r < e.length; r++) i = e[r].flags, n[r + 4] = i.dependsOn << 4 | i.isDependedOn << 2 | i.hasRedundancy;
							return h.box(h.types.sdtp, n)
						}, h.stbl = function(t) {
							return h.box(h.types.stbl, h.stsd(t), h.box(h.types.stts, h.STTS), h.box(h.types.stsc, h.STSC), h.box(h.types.stsz, h.STSZ), h.box(h.types.stco, h.STCO))
						}, h.avc1 = function(t) {
							var e = [],
								n = [],
								i = void 0,
								r = void 0,
								o = void 0;
							for (i = 0; i < t.sps.length; i++) o = (r = t.sps[i]).byteLength, e.push(o >>> 8 & 255), e.push(255 & o), e = e.concat(Array.prototype.slice.call(r));
							for (i = 0; i < t.pps.length; i++) o = (r = t.pps[i]).byteLength, n.push(o >>> 8 & 255), n.push(255 & o), n = n.concat(Array.prototype.slice.call(r));
							var a = h.box(h.types.avcC, new Uint8Array([1, e[3], e[4], e[5], 255, 224 | t.sps.length].concat(e).concat([t.pps.length]).concat(n))),
								s = t.width,
								l = t.height,
								u = t.pixelRatio[0],
								c = t.pixelRatio[1];
							return h.box(h.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, s >> 8 & 255, 255 & s, l >> 8 & 255, 255 & l, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), a, h.box(h.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), h.box(h.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
						}, h.esds = function(t) {
							var e = t.config.length;
							return new Uint8Array([0, 0, 0, 0, 3, 23 + e, 0, 1, 0, 4, 15 + e, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([e]).concat(t.config).concat([6, 1, 2]))
						}, h.mp4a = function(t) {
							var e = t.samplerate;
							return h.box(h.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, 255 & e, 0, 0]), h.box(h.types.esds, h.esds(t)))
						}, h.mp3 = function(t) {
							var e = t.samplerate;
							return h.box(h.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, e >> 8 & 255, 255 & e, 0, 0]))
						}, h.stsd = function(t) {
							return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? h.box(h.types.stsd, h.STSD, h.mp4a(t)) : h.box(h.types.stsd, h.STSD, h.mp3(t)) : h.box(h.types.stsd, h.STSD, h.avc1(t))
						}, h.tkhd = function(t) {
							var e = t.id,
								n = t.duration * t.timescale,
								i = t.width,
								r = t.height,
								o = Math.floor(n / (s + 1)),
								a = Math.floor(n % (s + 1));
							return h.box(h.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, i >> 8 & 255, 255 & i, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
						}, h.traf = function(t, e) {
							var n = h.sdtp(t),
								i = t.id,
								r = Math.floor(e / (s + 1)),
								o = Math.floor(e % (s + 1));
							return h.box(h.types.traf, h.box(h.types.tfhd, new Uint8Array([0, 0, 0, 0, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i])), h.box(h.types.tfdt, new Uint8Array([1, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), h.trun(t, n.length + 16 + 20 + 8 + 16 + 8 + 8), n)
						}, h.trak = function(t) {
							return t.duration = t.duration || 4294967295, h.box(h.types.trak, h.tkhd(t), h.mdia(t))
						}, h.trex = function(t) {
							var e = t.id;
							return h.box(h.types.trex, new Uint8Array([0, 0, 0, 0, e >> 24, e >> 16 & 255, e >> 8 & 255, 255 & e, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
						}, h.trun = function(t, e) {
							var n = t.samples || [],
								i = n.length,
								r = 12 + 16 * i,
								o = new Uint8Array(r),
								a = void 0,
								s = void 0,
								l = void 0,
								u = void 0,
								c = void 0,
								d = void 0;
							for (e += 8 + r, o.set([0, 0, 15, 1, i >>> 24 & 255, i >>> 16 & 255, i >>> 8 & 255, 255 & i, e >>> 24 & 255, e >>> 16 & 255, e >>> 8 & 255, 255 & e], 0), a = 0; a < i; a++) l = (s = n[a]).duration, u = s.size, c = s.flags, d = s.cts, o.set([l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, c.isLeading << 2 | c.dependsOn, c.isDependedOn << 6 | c.hasRedundancy << 4 | c.paddingValue << 1 | c.isNonSync, 61440 & c.degradPrio, 15 & c.degradPrio, d >>> 24 & 255, d >>> 16 & 255, d >>> 8 & 255, 255 & d], 12 + 16 * a);
							return h.box(h.types.trun, o)
						}, h.initSegment = function(t) {
							h.types || h.init();
							var e = h.moov(t),
								n = void 0;
							return (n = new Uint8Array(h.FTYP.byteLength + e.byteLength)).set(h.FTYP), n.set(e, h.FTYP.byteLength), n
						}, h
					}();
				var k = function() {
					function o(t, e, n, i) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, o), this.observer = t, this.config = e, this.typeSupported = n;
						var r = navigator.userAgent;
						this.isSafari = i && -1 < i.indexOf("Apple") && r && !r.match("CriOS"), this.ISGenerated = !1
					}
					return o.prototype.destroy = function() {}, o.prototype.resetTimeStamp = function(t) {
						this._initPTS = this._initDTS = t
					}, o.prototype.resetInitSegment = function() {
						this.ISGenerated = !1
					}, o.prototype.remux = function(t, e, n, i, r, o, a) {
						if (this.ISGenerated || this.generateIS(t, e, r), this.ISGenerated) {
							var s = t.samples.length,
								l = e.samples.length,
								u = r,
								c = r;
							if (s && l) {
								var d = (t.samples[0].dts - e.samples[0].dts) / e.inputTimeScale;
								u += Math.max(0, d), c += Math.max(0, -d)
							}
							if (s) {
								t.timescale || (et.b.warn("regenerate InitSegment as audio detected"), this.generateIS(t, e, r));
								var h = this.remuxAudio(t, u, o, a);
								if (l) {
									var f = void 0;
									h && (f = h.endPTS - h.startPTS), e.timescale || (et.b.warn("regenerate InitSegment as video detected"), this.generateIS(t, e, r)), this.remuxVideo(e, c, o, f, a)
								}
							} else if (l) {
								var p = this.remuxVideo(e, c, o, 0, a);
								p && t.codec && this.remuxEmptyAudio(t, u, o, p)
							}
						}
						n.samples.length && this.remuxID3(n, r), i.samples.length && this.remuxText(i, r), this.observer.trigger(J.a.FRAG_PARSED)
					}, o.prototype.generateIS = function(t, e, n) {
						var i = this.observer,
							r = t.samples,
							o = e.samples,
							a = this.typeSupported,
							s = "audio/mp4",
							l = {},
							u = {
								tracks: l
							},
							c = void 0 === this._initPTS,
							d = void 0,
							h = void 0;
						if (c && (d = h = 1 / 0), t.config && r.length && (t.timescale = t.samplerate, et.b.log("audio sampling rate : " + t.samplerate), t.isAAC || (a.mpeg ? (s = "audio/mpeg", t.codec = "") : a.mp3 && (t.codec = "mp3")), l.audio = {
								container: s,
								codec: t.codec,
								initSegment: !t.isAAC && a.mpeg ? new Uint8Array : nt.initSegment([t]),
								metadata: {
									channelCount: t.channelCount
								}
							}, c && (d = h = r[0].pts - t.inputTimeScale * n)), e.sps && e.pps && o.length) {
							var f = e.inputTimeScale;
							e.timescale = f, l.video = {
								container: "video/mp4",
								codec: e.codec,
								initSegment: nt.initSegment([e]),
								metadata: {
									width: e.width,
									height: e.height
								}
							}, c && (d = Math.min(d, o[0].pts - f * n), h = Math.min(h, o[0].dts - f * n), this.observer.trigger(J.a.INIT_PTS_FOUND, {
								initPTS: d
							}))
						}
						Object.keys(l).length ? (i.trigger(J.a.FRAG_PARSING_INIT_SEGMENT, u), this.ISGenerated = !0, c && (this._initPTS = d, this._initDTS = h)) : i.trigger(J.a.ERROR, {
							type: tt.b.MEDIA_ERROR,
							details: tt.a.FRAG_PARSING_ERROR,
							fatal: !1,
							reason: "no audio/video samples found"
						})
					}, o.prototype.remuxVideo = function(t, e, n, i, r) {
						var o, a, s, l = 8,
							u = t.timescale,
							c = void 0,
							d = void 0,
							h = void 0,
							f = void 0,
							p = t.samples,
							g = [],
							m = p.length,
							y = this._PTSNormalize,
							v = this._initDTS,
							A = this.nextAvcDts,
							b = this.isSafari;
						if (0 !== m) {
							b && (n |= p.length && A && (r && Math.abs(e - A / u) < .1 || Math.abs(p[0].pts - A - v) < u / 5)), n || (A = e * u), p.forEach(function(t) {
								t.pts = y(t.pts - v, A), t.dts = y(t.dts - v, A)
							}), p.sort(function(t, e) {
								var n = t.dts - e.dts,
									i = t.pts - e.pts;
								return n || i || t.id - e.id
							});
							var _ = p.reduce(function(t, e) {
								return Math.max(Math.min(t, e.pts - e.dts), -18e3)
							}, 0);
							if (_ < 0) {
								et.b.warn("PTS < DTS detected in video samples, shifting DTS by " + Math.round(_ / 90) + " ms to overcome this issue");
								for (var E = 0; E < p.length; E++) p[E].dts += _
							}
							var T = p[0];
							f = Math.max(T.dts, 0), h = Math.max(T.pts, 0);
							var S = Math.round((f - A) / 90);
							n && S && (1 < S ? et.b.log("AVC:" + S + " ms hole between fragments detected,filling it") : S < -1 && et.b.log("AVC:" + -S + " ms overlapping between fragments detected"), f = A, p[0].dts = f, h = Math.max(h - S, A), p[0].pts = h, et.b.log("Video/PTS/DTS adjusted: " + Math.round(h / 90) + "/" + Math.round(f / 90) + ",delta:" + S + " ms")), f, T = p[p.length - 1], s = Math.max(T.dts, 0), a = Math.max(T.pts, 0, s), b && (c = Math.round((s - f) / (p.length - 1)));
							for (var w = 0, C = 0, L = 0; L < m; L++) {
								for (var k = p[L], x = k.units, R = x.length, O = 0, I = 0; I < R; I++) O += x[I].data.length;
								C += O, w += R, k.length = O, k.dts = b ? f + L * c : Math.max(k.dts, f), k.pts = Math.max(k.pts, k.dts)
							}
							var D = C + 4 * w + 8;
							try {
								d = new Uint8Array(D)
							} catch (t) {
								return void this.observer.trigger(J.a.ERROR, {
									type: tt.b.MUX_ERROR,
									details: tt.a.REMUX_ALLOC_ERROR,
									fatal: !1,
									bytes: D,
									reason: "fail allocating video mdat " + D
								})
							}
							var P = new DataView(d.buffer);
							P.setUint32(0, D), d.set(nt.types.mdat, 4);
							for (var M = 0; M < m; M++) {
								for (var N = p[M], F = N.units, B = 0, U = void 0, j = 0, K = F.length; j < K; j++) {
									var G = F[j],
										H = G.data,
										Y = G.data.byteLength;
									P.setUint32(l, Y), l += 4, d.set(H, l), l += Y, B += 4 + Y
								}
								if (b) U = Math.max(0, c * Math.round((N.pts - N.dts) / c));
								else {
									if (M < m - 1) c = p[M + 1].dts - N.dts;
									else {
										var V = this.config,
											z = N.dts - p[0 < M ? M - 1 : M].dts;
										if (V.stretchShortVideoTrack) {
											var $ = V.maxBufferHole,
												W = Math.floor($ * u),
												q = (i ? h + i * u : this.nextAudioPts) - N.pts;
											W < q ? ((c = q - z) < 0 && (c = z), et.b.log("It is approximately " + q / 90 + " ms to the next segment; using duration " + c / 90 + " ms for the last video frame.")) : c = z
										} else c = z
									}
									U = Math.round(N.pts - N.dts)
								}
								g.push({
									size: B,
									duration: c,
									cts: U,
									flags: {
										isLeading: 0,
										isDependedOn: 0,
										hasRedundancy: 0,
										degradPrio: 0,
										dependsOn: N.key ? 2 : 1,
										isNonSync: N.key ? 0 : 1
									}
								})
							}
							this.nextAvcDts = s + c;
							var X = t.dropped;
							if (t.len = 0, t.nbNalu = 0, t.dropped = 0, g.length && -1 < navigator.userAgent.toLowerCase().indexOf("chrome")) {
								var Q = g[0].flags;
								Q.dependsOn = 2, Q.isNonSync = 0
							}
							t.samples = g, o = nt.moof(t.sequenceNumber++, f, t), t.samples = [];
							var Z = {
								data1: o,
								data2: d,
								startPTS: h / u,
								endPTS: (a + c) / u,
								startDTS: f / u,
								endDTS: this.nextAvcDts / u,
								type: "video",
								hasAudio: !1,
								hasVideo: !0,
								nb: g.length,
								dropped: X
							};
							return this.observer.trigger(J.a.FRAG_PARSING_DATA, Z), Z
						}
					}, o.prototype.remuxAudio = function(t, e, n, i) {
						var r = t.inputTimeScale,
							o = t.timescale,
							a = r / o,
							s = (t.isAAC ? 1024 : 1152) * a,
							l = this._PTSNormalize,
							u = this._initDTS,
							c = !t.isAAC && this.typeSupported.mpeg,
							d = void 0,
							h = void 0,
							f = void 0,
							p = void 0,
							g = void 0,
							m = void 0,
							y = void 0,
							v = t.samples,
							A = [],
							b = this.nextAudioPts;
						if (n |= v.length && b && (i && Math.abs(e - b / r) < .1 || Math.abs(v[0].pts - b - u) < 20 * s), v.forEach(function(t) {
								t.pts = t.dts = l(t.pts - u, e * r)
							}), 0 !== (v = v.filter(function(t) {
								return 0 <= t.pts
							})).length) {
							if (n || (b = i ? e * r : v[0].pts), t.isAAC)
								for (var _ = this.config.maxAudioFramesDrift, E = 0, T = b; E < v.length;) {
									var S, w = v[E];
									S = w.pts - T;
									var C = Math.abs(1e3 * S / r);
									if (S <= -_ * s) et.b.warn("Dropping 1 audio frame @ " + (T / r).toFixed(3) + "s due to " + Math.round(C) + " ms overlap."), v.splice(E, 1), t.len -= w.unit.length;
									else if (_ * s <= S && C < 1e4 && T) {
										var L = Math.round(S / s);
										et.b.warn("Injecting " + L + " audio frame @ " + (T / r).toFixed(3) + "s due to " + Math.round(1e3 * S / r) + " ms gap.");
										for (var k = 0; k < L; k++) {
											var x = Math.max(T, 0);
											(f = V.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (et.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."), f = w.unit.subarray()), v.splice(E, 0, {
												unit: f,
												pts: x,
												dts: x
											}), t.len += f.length, T += s, E++
										}
										w.pts = w.dts = T, T += s, E++
									} else Math.abs(S), w.pts = w.dts = T, T += s, E++
								}
							for (var R = 0, O = v.length; R < O; R++) {
								var I = v[R],
									D = I.unit,
									P = I.pts;
								if (void 0 !== y) h.duration = Math.round((P - y) / a);
								else {
									var M = Math.round(1e3 * (P - b) / r),
										N = 0;
									if (n && t.isAAC && M) {
										if (0 < M && M < 1e4) N = Math.round((P - b) / s), et.b.log(M + " ms hole between AAC samples detected,filling it"), 0 < N && ((f = V.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (f = D.subarray()), t.len += N * f.length);
										else if (M < -12) {
											et.b.log("drop overlapping AAC sample, expected/parsed/delta:" + (b / r).toFixed(3) + "s/" + (P / r).toFixed(3) + "s/" + -M + "ms"), t.len -= D.byteLength;
											continue
										}
										P = b
									}
									if (m = P, !(0 < t.len)) return;
									var F = c ? t.len : t.len + 8;
									d = c ? 0 : 8;
									try {
										p = new Uint8Array(F)
									} catch (t) {
										return void this.observer.trigger(J.a.ERROR, {
											type: tt.b.MUX_ERROR,
											details: tt.a.REMUX_ALLOC_ERROR,
											fatal: !1,
											bytes: F,
											reason: "fail allocating audio mdat " + F
										})
									}
									c || (new DataView(p.buffer).setUint32(0, F), p.set(nt.types.mdat, 4));
									for (var B = 0; B < N; B++)(f = V.getSilentFrame(t.manifestCodec || t.codec, t.channelCount)) || (et.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."), f = D.subarray()), p.set(f, d), d += f.byteLength, h = {
										size: f.byteLength,
										cts: 0,
										duration: 1024,
										flags: {
											isLeading: 0,
											isDependedOn: 0,
											hasRedundancy: 0,
											degradPrio: 0,
											dependsOn: 1
										}
									}, A.push(h)
								}
								p.set(D, d);
								var U = D.byteLength;
								d += U, h = {
									size: U,
									cts: 0,
									duration: 0,
									flags: {
										isLeading: 0,
										isDependedOn: 0,
										hasRedundancy: 0,
										degradPrio: 0,
										dependsOn: 1
									}
								}, A.push(h), y = P
							}
							var j = 0,
								K = A.length;
							if (2 <= K && (j = A[K - 2].duration, h.duration = j), K) {
								this.nextAudioPts = b = y + a * j, t.len = 0, t.samples = A, g = c ? new Uint8Array : nt.moof(t.sequenceNumber++, m / a, t), t.samples = [];
								var G = m / r,
									H = b / r,
									Y = {
										data1: g,
										data2: p,
										startPTS: G,
										endPTS: H,
										startDTS: G,
										endDTS: H,
										type: "audio",
										hasAudio: !0,
										hasVideo: !1,
										nb: K
									};
								return this.observer.trigger(J.a.FRAG_PARSING_DATA, Y), Y
							}
							return null
						}
					}, o.prototype.remuxEmptyAudio = function(t, e, n, i) {
						var r = t.inputTimeScale,
							o = r / (t.samplerate ? t.samplerate : r),
							a = this.nextAudioPts,
							s = (void 0 !== a ? a : i.startDTS * r) + this._initDTS,
							l = i.endDTS * r + this._initDTS,
							u = 1024 * o,
							c = Math.ceil((l - s) / u),
							d = V.getSilentFrame(t.manifestCodec || t.codec, t.channelCount);
						if (et.b.warn("remux empty Audio"), d) {
							for (var h = [], f = 0; f < c; f++) {
								var p = s + f * u;
								h.push({
									unit: d,
									pts: p,
									dts: p
								}), t.len += d.length
							}
							t.samples = h, this.remuxAudio(t, e, n)
						} else et.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
					}, o.prototype.remuxID3 = function(t, e) {
						var n = t.samples.length,
							i = void 0,
							r = t.inputTimeScale,
							o = this._initPTS,
							a = this._initDTS;
						if (n) {
							for (var s = 0; s < n; s++)(i = t.samples[s]).pts = (i.pts - o) / r, i.dts = (i.dts - a) / r;
							this.observer.trigger(J.a.FRAG_PARSING_METADATA, {
								samples: t.samples
							})
						}
						t.samples = [], e = e
					}, o.prototype.remuxText = function(t, e) {
						t.samples.sort(function(t, e) {
							return t.pts - e.pts
						});
						var n = t.samples.length,
							i = void 0,
							r = t.inputTimeScale,
							o = this._initPTS;
						if (n) {
							for (var a = 0; a < n; a++)(i = t.samples[a]).pts = (i.pts - o) / r;
							this.observer.trigger(J.a.FRAG_PARSING_USERDATA, {
								samples: t.samples
							})
						}
						t.samples = [], e = e
					}, o.prototype._PTSNormalize = function(t, e) {
						var n = void 0;
						if (void 0 === e) return t;
						for (n = e < t ? -8589934592 : 8589934592; 4294967296 < Math.abs(t - e);) t += n;
						return t
					}, o
				}();
				var x = function() {
					function e(t) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.observer = t
					}
					return e.prototype.destroy = function() {}, e.prototype.resetTimeStamp = function() {}, e.prototype.resetInitSegment = function() {}, e.prototype.remux = function(t, e, n, i, r, o, a, s) {
						var l = this.observer,
							u = "";
						t && (u += "audio"), e && (u += "video"), l.trigger(J.a.FRAG_PARSING_DATA, {
							data1: s,
							startPTS: r,
							startDTS: r,
							type: u,
							hasAudio: !!t,
							hasVideo: !!e,
							nb: 1,
							dropped: 0
						}), l.trigger(J.a.FRAG_PARSED)
					}, e
				}();
				var l = function() {
					function r(t, e, n, i) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, r), this.observer = t, this.typeSupported = e, this.config = n, this.vendor = i
					}
					return r.prototype.destroy = function() {
						var t = this.demuxer;
						t && t.destroy()
					}, r.prototype.push = function(t, n, i, r, o, a, s, l, u, c, d, h) {
						if (0 < t.byteLength && null != n && null != n.key && "AES-128" === n.method) {
							var e = this.decrypter;
							null == e && (e = this.decrypter = new g.a(this.observer, this.config));
							var f = this,
								p = void 0;
							try {
								p = performance.now()
							} catch (t) {
								p = Date.now()
							}
							e.decrypt(t, n.key.buffer, n.iv.buffer, function(t) {
								var e = void 0;
								try {
									e = performance.now()
								} catch (t) {
									e = Date.now()
								}
								f.observer.trigger(J.a.FRAG_DECRYPTED, {
									stats: {
										tstart: p,
										tdecrypt: e
									}
								}), f.pushDecrypted(new Uint8Array(t), n, new Uint8Array(i), r, o, a, s, l, u, c, d, h)
							})
						} else this.pushDecrypted(new Uint8Array(t), n, new Uint8Array(i), r, o, a, s, l, u, c, d, h)
					}, r.prototype.pushDecrypted = function(t, e, n, i, r, o, a, s, l, u, c, d) {
						var h = this.demuxer;
						if (!h || (a || s) && !this.probe(t)) {
							for (var f = this.observer, p = this.typeSupported, g = this.config, m = [{
									demux: C,
									remux: k
								}, {
									demux: S.a,
									remux: x
								}, {
									demux: T,
									remux: k
								}, {
									demux: L,
									remux: k
								}], y = 0, v = m.length; y < v; y++) {
								var A = m[y],
									b = A.demux.probe;
								if (b(t)) {
									var _ = this.remuxer = new A.remux(f, g, p, this.vendor);
									h = new A.demux(f, _, g, p), this.probe = b;
									break
								}
							}
							if (!h) return void f.trigger(J.a.ERROR, {
								type: tt.b.MEDIA_ERROR,
								details: tt.a.FRAG_PARSING_ERROR,
								fatal: !0,
								reason: "no demux matching with content found"
							});
							this.demuxer = h
						}
						var E = this.remuxer;
						(a || s) && (h.resetInitSegment(n, i, r, u), E.resetInitSegment()), a && (h.resetTimeStamp(d), E.resetTimeStamp(d)), "function" == typeof h.setDecryptData && h.setDecryptData(e), h.append(t, o, l, c)
					}, r
				}();
				e.a = l
			}, function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var i = {};
				n.d(i, "newCue", function() {
					return re
				});
				var r = n(3),
					o = n.n(r),
					v = n(2),
					M = n(1),
					N = n(0),
					a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
						return typeof t
					} : function(t) {
						return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
					};
				var s = new Set(["hlsEventGeneric", "hlsHandlerDestroying", "hlsHandlerDestroyed"]),
					l = function() {
						function r(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, r), this.hls = t, this.onEvent = this.onEvent.bind(this);
							for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
							this.handledEvents = n, this.useGenericHandler = !0, this.registerListeners()
						}
						return r.prototype.destroy = function() {
							this.onHandlerDestroying(), this.unregisterListeners(), this.onHandlerDestroyed()
						}, r.prototype.onHandlerDestroying = function() {}, r.prototype.onHandlerDestroyed = function() {}, r.prototype.isEventHandler = function() {
							return "object" === a(this.handledEvents) && this.handledEvents.length && "function" == typeof this.onEvent
						}, r.prototype.registerListeners = function() {
							this.isEventHandler() && this.handledEvents.forEach(function(t) {
								if (s.has(t)) throw new Error("Forbidden event-name: " + t);
								this.hls.on(t, this.onEvent)
							}, this)
						}, r.prototype.unregisterListeners = function() {
							this.isEventHandler() && this.handledEvents.forEach(function(t) {
								this.hls.off(t, this.onEvent)
							}, this)
						}, r.prototype.onEvent = function(t, e) {
							this.onEventGeneric(t, e)
						}, r.prototype.onEventGeneric = function(e, t) {
							try {
								(function(t, e) {
									var n = "on" + t.replace("hls", "");
									if ("function" != typeof this[n]) throw new Error("Event " + t + " has no generic handler in this " + this.constructor.name + " class (tried " + n + ")");
									return this[n].bind(this, e)
								}).call(this, e, t).call()
							} catch (t) {
								N.b.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.hls.trigger(M.a.ERROR, {
									type: v.b.OTHER_ERROR,
									details: v.a.INTERNAL_EXCEPTION,
									fatal: !1,
									event: e,
									err: t
								})
							}
						}, r
					}(),
					u = n(7),
					c = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var w = function() {
						function t() {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, t), this.method = null, this.key = null, this.iv = null, this._uri = null
						}
						return c(t, [{
							key: "uri",
							get: function() {
								return !this._uri && this.reluri && (this._uri = o.a.buildAbsoluteURL(this.baseuri, this.reluri, {
									alwaysNormalize: !0
								})), this._uri
							}
						}]), t
					}(),
					d = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var C = function() {
					function e() {
						var t;
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this._url = null, this._byteRange = null, this._decryptdata = null, this.tagList = [], this._elementaryStreams = ((t = {})[e.ElementaryStreamTypes.AUDIO] = !1, t[e.ElementaryStreamTypes.VIDEO] = !1, t)
					}
					return e.prototype.addElementaryStream = function(t) {
						this._elementaryStreams[t] = !0
					}, e.prototype.hasElementaryStream = function(t) {
						return !0 === this._elementaryStreams[t]
					}, e.prototype.createInitializationVector = function(t) {
						for (var e = new Uint8Array(16), n = 12; n < 16; n++) e[n] = t >> 8 * (15 - n) & 255;
						return e
					}, e.prototype.fragmentDecryptdataFromLevelkey = function(t, e) {
						var n = t;
						return t && t.method && t.uri && !t.iv && ((n = new w).method = t.method, n.baseuri = t.baseuri, n.reluri = t.reluri, n.iv = this.createInitializationVector(e)), n
					}, d(e, [{
						key: "url",
						get: function() {
							return !this._url && this.relurl && (this._url = o.a.buildAbsoluteURL(this.baseurl, this.relurl, {
								alwaysNormalize: !0
							})), this._url
						},
						set: function(t) {
							this._url = t
						}
					}, {
						key: "programDateTime",
						get: function() {
							return !this._programDateTime && this.rawProgramDateTime && (this._programDateTime = new Date(Date.parse(this.rawProgramDateTime))), this._programDateTime
						}
					}, {
						key: "byteRange",
						get: function() {
							if (!this._byteRange && !this.rawByteRange) return [];
							if (this._byteRange) return this._byteRange;
							var t = [];
							if (this.rawByteRange) {
								var e = this.rawByteRange.split("@", 2);
								if (1 === e.length) {
									var n = this.lastByteRangeEndOffset;
									t[0] = n || 0
								} else t[0] = parseInt(e[1]);
								t[1] = parseInt(e[0]) + t[0], this._byteRange = t
							}
							return t
						}
					}, {
						key: "byteRangeStartOffset",
						get: function() {
							return this.byteRange[0]
						}
					}, {
						key: "byteRangeEndOffset",
						get: function() {
							return this.byteRange[1]
						}
					}, {
						key: "decryptdata",
						get: function() {
							return this._decryptdata || (this._decryptdata = this.fragmentDecryptdataFromLevelkey(this.levelkey, this.sn)), this._decryptdata
						}
					}], [{
						key: "ElementaryStreamTypes",
						get: function() {
							return {
								AUDIO: "audio",
								VIDEO: "video"
							}
						}
					}]), e
				}();
				var h = /^(\d+)x(\d+)$/,
					f = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
					L = function() {
						function n(t) {
							for (var e in function(t, e) {
									if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
								}(this, n), "string" == typeof t && (t = n.parseAttrList(t)), t) t.hasOwnProperty(e) && (this[e] = t[e])
						}
						return n.prototype.decimalInteger = function(t) {
							var e = parseInt(this[t], 10);
							return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
						}, n.prototype.hexadecimalInteger = function(t) {
							if (this[t]) {
								var e = (this[t] || "0x").slice(2);
								e = (1 & e.length ? "0" : "") + e;
								for (var n = new Uint8Array(e.length / 2), i = 0; i < e.length / 2; i++) n[i] = parseInt(e.slice(2 * i, 2 * i + 2), 16);
								return n
							}
							return null
						}, n.prototype.hexadecimalIntegerAsNumber = function(t) {
							var e = parseInt(this[t], 16);
							return e > Number.MAX_SAFE_INTEGER ? 1 / 0 : e
						}, n.prototype.decimalFloatingPoint = function(t) {
							return parseFloat(this[t])
						}, n.prototype.enumeratedString = function(t) {
							return this[t]
						}, n.prototype.decimalResolution = function(t) {
							var e = h.exec(this[t]);
							if (null !== e) return {
								width: parseInt(e[1], 10),
								height: parseInt(e[2], 10)
							}
						}, n.parseAttrList = function(t) {
							var e = void 0,
								n = {};
							for (f.lastIndex = 0; null !== (e = f.exec(t));) {
								var i = e[2];
								0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)), n[e[1]] = i
							}
							return n
						}, n
					}(),
					p = {
						audio: {
							a3ds: !0,
							"ac-3": !0,
							"ac-4": !0,
							alac: !0,
							alaw: !0,
							dra1: !0,
							"dts+": !0,
							"dts-": !0,
							dtsc: !0,
							dtse: !0,
							dtsh: !0,
							"ec-3": !0,
							enca: !0,
							g719: !0,
							g726: !0,
							m4ae: !0,
							mha1: !0,
							mha2: !0,
							mhm1: !0,
							mhm2: !0,
							mlpa: !0,
							mp4a: !0,
							"raw ": !0,
							Opus: !0,
							samr: !0,
							sawb: !0,
							sawp: !0,
							sevc: !0,
							sqcp: !0,
							ssmv: !0,
							twos: !0,
							ulaw: !0
						},
						video: {
							avc1: !0,
							avc2: !0,
							avc3: !0,
							avc4: !0,
							avcp: !0,
							drac: !0,
							dvav: !0,
							dvhe: !0,
							encv: !0,
							hev1: !0,
							hvc1: !0,
							mjp2: !0,
							mp4v: !0,
							mvc1: !0,
							mvc2: !0,
							mvc3: !0,
							mvc4: !0,
							resv: !0,
							rv60: !0,
							s263: !0,
							svc1: !0,
							svc2: !0,
							"vc-1": !0,
							vp08: !0,
							vp09: !0
						}
					};

				function g(t, e) {
					return MediaSource.isTypeSupported((e || "video") + '/mp4;codecs="' + t + '"')
				}
				var m = /#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)/g,
					y = /#EXT-X-MEDIA:(.*)/g,
					k = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)(\S+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g"),
					x = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)(.*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/,
					A = function() {
						function c() {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, c)
						}
						return c.findGroup = function(t, e) {
							if (!t) return null;
							for (var n = null, i = 0; i < t.length; i++) {
								var r = t[i];
								r.id === e && (n = r)
							}
							return n
						}, c.convertAVC1ToAVCOTI = function(t) {
							var e = void 0,
								n = t.split(".");
							return 2 < n.length ? (e = n.shift() + ".", e += parseInt(n.shift()).toString(16), e += ("000" + parseInt(n.shift()).toString(16)).substr(-4)) : e = t, e
						}, c.resolve = function(t, e) {
							return o.a.buildAbsoluteURL(e, t, {
								alwaysNormalize: !0
							})
						}, c.parseMasterPlaylist = function(t, e) {
							var n = [],
								i = void 0;

							function r(n, r) {
								["video", "audio"].forEach(function(i) {
									var e = n.filter(function(t) {
										return e = t, !!(n = p[i]) && !0 === n[e.slice(0, 4)];
										var e, n
									});
									if (e.length) {
										var t = e.filter(function(t) {
											return 0 === t.lastIndexOf("avc1", 0) || 0 === t.lastIndexOf("mp4a", 0)
										});
										r[i + "Codec"] = 0 < t.length ? t[0] : e[0], n = n.filter(function(t) {
											return -1 === e.indexOf(t)
										})
									}
								}), r.unknownCodecs = n
							}
							for (m.lastIndex = 0; null != (i = m.exec(t));) {
								var o = {},
									a = o.attrs = new L(i[1]);
								o.url = c.resolve(i[2], e);
								var s = a.decimalResolution("RESOLUTION");
								s && (o.width = s.width, o.height = s.height), o.bitrate = a.decimalInteger("AVERAGE-BANDWIDTH") || a.decimalInteger("BANDWIDTH"), o.name = a.NAME, r([].concat((a.CODECS || "").split(/[ ,]+/)), o), o.videoCodec && -1 !== o.videoCodec.indexOf("avc1") && (o.videoCodec = c.convertAVC1ToAVCOTI(o.videoCodec)), n.push(o)
							}
							return n
						}, c.parseMasterPlaylistMedia = function(t, e, n) {
							var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : [],
								r = void 0,
								o = [],
								a = 0;
							for (y.lastIndex = 0; null !== (r = y.exec(t));) {
								var s = {},
									l = new L(r[1]);
								if (l.TYPE === n) {
									if (s.groupId = l["GROUP-ID"], s.name = l.NAME, s.type = n, s.default = "YES" === l.DEFAULT, s.autoselect = "YES" === l.AUTOSELECT, s.forced = "YES" === l.FORCED, l.URI && (s.url = c.resolve(l.URI, e)), s.lang = l.LANGUAGE, s.name || (s.name = s.lang), i.length) {
										var u = c.findGroup(i, s.groupId);
										s.audioCodec = u ? u.codec : i[0].codec
									}
									s.id = a++, o.push(s)
								}
							}
							return o
						}, c.parseLevelPlaylist = function(t, e, n, i) {
							var r = 0,
								o = 0,
								a = {
									type: null,
									version: null,
									url: e,
									fragments: [],
									live: !0,
									startSN: 0
								},
								s = new w,
								l = 0,
								u = null,
								c = new C,
								d = void 0,
								h = void 0;
							for (k.lastIndex = 0; null !== (d = k.exec(t));) {
								var f = d[1];
								if (f) {
									c.duration = parseFloat(f);
									var p = (" " + d[2]).slice(1);
									c.title = p || null, c.tagList.push(p ? ["INF", f, p] : ["INF", f])
								} else if (d[3]) {
									if (!isNaN(c.duration)) {
										var g = r++;
										c.type = i, c.start = o, c.levelkey = s, c.sn = g, c.level = n, c.cc = l, c.baseurl = e, c.relurl = (" " + d[3]).slice(1), a.programDateTime && (u ? c.rawProgramDateTime ? c.pdt = Date.parse(c.rawProgramDateTime) : c.pdt = u.pdt + 1e3 * u.duration : c.pdt = Date.parse(a.programDateTime), c.endPdt = c.pdt + 1e3 * c.duration), a.fragments.push(c), o += (u = c).duration, c = new C
									}
								} else if (d[4]) {
									if (c.rawByteRange = (" " + d[4]).slice(1), u) {
										var m = u.byteRangeEndOffset;
										m && (c.lastByteRangeEndOffset = m)
									}
								} else if (d[5]) c.rawProgramDateTime = (" " + d[5]).slice(1), c.tagList.push(["PROGRAM-DATE-TIME", c.rawProgramDateTime]), void 0 === a.programDateTime && (a.programDateTime = new Date(new Date(Date.parse(d[5])) - 1e3 * o));
								else {
									for (d = d[0].match(x), h = 1; h < d.length && void 0 === d[h]; h++);
									var y = (" " + d[h + 1]).slice(1),
										v = (" " + d[h + 2]).slice(1);
									switch (d[h]) {
										case "#":
											c.tagList.push(v ? [y, v] : [y]);
											break;
										case "PLAYLIST-TYPE":
											a.type = y.toUpperCase();
											break;
										case "MEDIA-SEQUENCE":
											r = a.startSN = parseInt(y);
											break;
										case "TARGETDURATION":
											a.targetduration = parseFloat(y);
											break;
										case "VERSION":
											a.version = parseInt(y);
											break;
										case "EXTM3U":
											break;
										case "ENDLIST":
											a.live = !1;
											break;
										case "DIS":
											l++, c.tagList.push(["DIS"]);
											break;
										case "DISCONTINUITY-SEQ":
											l = parseInt(y);
											break;
										case "KEY":
											var A = new L(y),
												b = A.enumeratedString("METHOD"),
												_ = A.URI,
												E = A.hexadecimalInteger("IV");
											b && (s = new w, _ && 0 <= ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(b) && (s.method = b, s.baseuri = e, s.reluri = _, s.key = null, s.iv = E));
											break;
										case "START":
											var T = new L(y).decimalFloatingPoint("TIME-OFFSET");
											isNaN(T) || (a.startTimeOffset = T);
											break;
										case "MAP":
											var S = new L(y);
											c.relurl = S.URI, c.rawByteRange = S.BYTERANGE, c.baseurl = e, c.level = n, c.type = i, c.sn = "initSegment", a.initSegment = c, c = new C;
											break;
										default:
											N.b.warn("line parsed but not handled: " + d)
									}
								}
							}
							return (c = u) && !c.relurl && (a.fragments.pop(), o -= c.duration), a.totalduration = o, a.averagetargetduration = o / a.fragments.length, a.endSN = r - 1, a.startCC = a.fragments[0] ? a.fragments[0].cc : 0, a.endCC = l, !a.initSegment && a.fragments.length && a.fragments.every(function(t) {
								return t.relurl.endsWith(".mp4")
							}) && (N.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (c = new C).relurl = a.fragments[0].relurl, c.baseurl = e, c.level = n, c.type = i, c.sn = "initSegment", a.initSegment = c, a.needSidxRanges = !0), a
						}, c
					}(),
					b = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var _ = {
						MANIFEST: "manifest",
						LEVEL: "level",
						AUDIO_TRACK: "audioTrack",
						SUBTITLE_TRACK: "subtitleTrack"
					},
					E = {
						MAIN: "main",
						AUDIO: "audio",
						SUBTITLE: "subtitle"
					},
					T = function(n) {
						function p(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, p);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MANIFEST_LOADING, M.a.LEVEL_LOADING, M.a.AUDIO_TRACK_LOADING, M.a.SUBTITLE_TRACK_LOADING));
							return e.loaders = {}, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(p, n), p.canHaveQualityLevels = function(t) {
							return t !== _.AUDIO_TRACK && t !== _.SUBTITLE_TRACK
						}, p.mapContextToLevelType = function(t) {
							switch (t.type) {
								case _.AUDIO_TRACK:
									return E.AUDIO;
								case _.SUBTITLE_TRACK:
									return E.SUBTITLE;
								default:
									return E.MAIN
							}
						}, p.getResponseUrl = function(t, e) {
							var n = t.url;
							return void 0 !== n && 0 !== n.indexOf("data:") || (n = e.url), n
						}, p.prototype.createInternalLoader = function(t) {
							var e = this.hls.config,
								n = e.pLoader,
								i = e.loader,
								r = new(n || i)(e);
							return t.loader = r, this.loaders[t.type] = r
						}, p.prototype.getInternalLoader = function(t) {
							return this.loaders[t.type]
						}, p.prototype.resetInternalLoader = function(t) {
							this.loaders[t] && delete this.loaders[t]
						}, p.prototype.destroyInternalLoaders = function() {
							for (var t in this.loaders) {
								var e = this.loaders[t];
								e && e.destroy(), this.resetInternalLoader(t)
							}
						}, p.prototype.destroy = function() {
							this.destroyInternalLoaders(), n.prototype.destroy.call(this)
						}, p.prototype.onManifestLoading = function(t) {
							this.load(t.url, {
								type: _.MANIFEST
							})
						}, p.prototype.onLevelLoading = function(t) {
							this.load(t.url, {
								type: _.LEVEL,
								level: t.level,
								id: t.id
							})
						}, p.prototype.onAudioTrackLoading = function(t) {
							this.load(t.url, {
								type: _.AUDIO_TRACK,
								id: t.id
							})
						}, p.prototype.onSubtitleTrackLoading = function(t) {
							this.load(t.url, {
								type: _.SUBTITLE_TRACK,
								id: t.id
							})
						}, p.prototype.load = function(t, e) {
							var n = this.hls.config,
								i = this.getInternalLoader(e);
							if (i) {
								var r = i.context;
								if (r && r.url === t) return N.b.trace("playlist request ongoing"), !1;
								N.b.warn("aborting previous loader for type: " + e.type), i.abort()
							}
							var o = void 0,
								a = void 0,
								s = void 0,
								l = void 0;
							switch (e.type) {
								case _.MANIFEST:
									o = n.manifestLoadingMaxRetry, a = n.manifestLoadingTimeOut, s = n.manifestLoadingRetryDelay, l = n.manifestLoadingMaxRetryTimeout;
									break;
								case _.LEVEL:
									o = 0, a = n.levelLoadingTimeOut;
									break;
								default:
									o = n.levelLoadingMaxRetry, a = n.levelLoadingTimeOut, s = n.levelLoadingRetryDelay, l = n.levelLoadingMaxRetryTimeout, N.b.log("Playlist loader for " + e.type + " " + (e.level || e.id))
							}
							i = this.createInternalLoader(e), e.url = t, e.responseType = e.responseType || "";
							var u, c;
							return u = {
								timeout: a,
								maxRetry: o,
								retryDelay: s,
								maxRetryDelay: l
							}, c = {
								onSuccess: this.loadsuccess.bind(this),
								onError: this.loaderror.bind(this),
								onTimeout: this.loadtimeout.bind(this)
							}, i.load(e, u, c), !0
						}, p.prototype.loadsuccess = function(t, e, n) {
							var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
							if (n.isSidxRequest) return this._handleSidxRequest(t, n), void this._handlePlaylistLoaded(t, e, n, i);
							this.resetInternalLoader(n.type);
							var r = t.data;
							e.tload = performance.now(), 0 === r.indexOf("#EXTM3U") ? 0 < r.indexOf("#EXTINF:") || 0 < r.indexOf("#EXT-X-TARGETDURATION:") ? this._handleTrackOrLevelPlaylist(t, e, n, i) : this._handleMasterPlaylist(t, e, n, i) : this._handleManifestParsingError(t, n, "no EXTM3U delimiter", i)
						}, p.prototype.loaderror = function(t, e) {
							var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
							this._handleNetworkError(e, n)
						}, p.prototype.loadtimeout = function(t, e) {
							var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
							this._handleNetworkError(e, n, !0)
						}, p.prototype._handleMasterPlaylist = function(t, e, n, i) {
							var r = this.hls,
								o = t.data,
								a = p.getResponseUrl(t, n),
								s = A.parseMasterPlaylist(o, a);
							if (s.length) {
								var l = s.map(function(t) {
										return {
											id: t.attrs.AUDIO,
											codec: t.audioCodec
										}
									}),
									u = A.parseMasterPlaylistMedia(o, a, "AUDIO", l),
									c = A.parseMasterPlaylistMedia(o, a, "SUBTITLES");
								if (u.length) {
									var d = !1;
									u.forEach(function(t) {
										t.url || (d = !0)
									}), !1 === d && s[0].audioCodec && !s[0].attrs.AUDIO && (N.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"), u.unshift({
										type: "main",
										name: "main"
									}))
								}
								r.trigger(M.a.MANIFEST_LOADED, {
									levels: s,
									audioTracks: u,
									subtitles: c,
									url: a,
									stats: e,
									networkDetails: i
								})
							} else this._handleManifestParsingError(t, n, "no level found in manifest", i)
						}, p.prototype._handleTrackOrLevelPlaylist = function(t, e, n, i) {
							var r = this.hls,
								o = n.id,
								a = n.level,
								s = n.type,
								l = p.getResponseUrl(t, n),
								u = isNaN(a) ? isNaN(o) ? 0 : o : a,
								c = p.mapContextToLevelType(n),
								d = A.parseLevelPlaylist(t.data, l, u, c);
							if (d.tload = e.tload, s === _.MANIFEST) {
								var h = {
									url: l,
									details: d
								};
								r.trigger(M.a.MANIFEST_LOADED, {
									levels: [h],
									audioTracks: [],
									url: l,
									stats: e,
									networkDetails: i
								})
							}
							if (e.tparsed = performance.now(), d.needSidxRanges) {
								var f = d.initSegment.url;
								this.load(f, {
									isSidxRequest: !0,
									type: s,
									level: a,
									levelDetails: d,
									id: o,
									rangeStart: 0,
									rangeEnd: 2048,
									responseType: "arraybuffer"
								})
							} else n.levelDetails = d, this._handlePlaylistLoaded(t, e, n, i)
						}, p.prototype._handleSidxRequest = function(t, r) {
							var e = u.a.parseSegmentIndex(new Uint8Array(t.data));
							e.references.forEach(function(t, e) {
								var n = t.info,
									i = r.levelDetails.fragments[e];
								0 === i.byteRange.length && (i.rawByteRange = String(1 + n.end - n.start) + "@" + String(n.start))
							}), r.levelDetails.initSegment.rawByteRange = String(e.moovEndOffset) + "@0"
						}, p.prototype._handleManifestParsingError = function(t, e, n, i) {
							this.hls.trigger(M.a.ERROR, {
								type: v.b.NETWORK_ERROR,
								details: v.a.MANIFEST_PARSING_ERROR,
								fatal: !0,
								url: t.url,
								reason: n,
								networkDetails: i
							})
						}, p.prototype._handleNetworkError = function(t, e) {
							var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
								i = void 0,
								r = void 0,
								o = this.getInternalLoader(t);
							switch (t.type) {
								case _.MANIFEST:
									i = n ? v.a.MANIFEST_LOAD_TIMEOUT : v.a.MANIFEST_LOAD_ERROR, r = !0;
									break;
								case _.LEVEL:
									i = n ? v.a.LEVEL_LOAD_TIMEOUT : v.a.LEVEL_LOAD_ERROR, r = !1;
									break;
								case _.AUDIO_TRACK:
									i = n ? v.a.AUDIO_TRACK_LOAD_TIMEOUT : v.a.AUDIO_TRACK_LOAD_ERROR, r = !1;
									break;
								default:
									r = !1
							}
							o && (o.abort(), this.resetInternalLoader(t.type)), this.hls.trigger(M.a.ERROR, {
								type: v.b.NETWORK_ERROR,
								details: i,
								fatal: r,
								url: o.url,
								loader: o,
								context: t,
								networkDetails: e
							})
						}, p.prototype._handlePlaylistLoaded = function(t, e, n, i) {
							var r = n.type,
								o = n.level,
								a = n.id,
								s = n.levelDetails;
							if (s.targetduration)
								if (p.canHaveQualityLevels(n.type)) this.hls.trigger(M.a.LEVEL_LOADED, {
									details: s,
									level: o || 0,
									id: a || 0,
									stats: e,
									networkDetails: i
								});
								else switch (r) {
									case _.AUDIO_TRACK:
										this.hls.trigger(M.a.AUDIO_TRACK_LOADED, {
											details: s,
											id: a,
											stats: e,
											networkDetails: i
										});
										break;
									case _.SUBTITLE_TRACK:
										this.hls.trigger(M.a.SUBTITLE_TRACK_LOADED, {
											details: s,
											id: a,
											stats: e,
											networkDetails: i
										})
								} else this._handleManifestParsingError(t, n, "invalid target duration", i)
						}, b(p, null, [{
							key: "ContextType",
							get: function() {
								return _
							}
						}, {
							key: "LevelType",
							get: function() {
								return E
							}
						}]), p
					}(l);
				var S = function(i) {
					function n(t) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, n);
						var e = function(t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || "object" != typeof e && "function" != typeof e ? t : e
						}(this, i.call(this, t, M.a.FRAG_LOADING));
						return e.loaders = {}, e
					}
					return function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}(n, i), n.prototype.destroy = function() {
						var t = this.loaders;
						for (var e in t) {
							var n = t[e];
							n && n.destroy()
						}
						this.loaders = {}, i.prototype.destroy.call(this)
					}, n.prototype.onFragLoading = function(t) {
						var e = t.frag,
							n = e.type,
							i = this.loaders,
							r = this.hls.config,
							o = r.fLoader,
							a = r.loader;
						e.loaded = 0;
						var s = i[n];
						s && (N.b.warn("abort previous fragment loader for type: " + n), s.abort()), s = i[n] = e.loader = r.fLoader ? new o(r) : new a(r);
						var l, u, c = void 0;
						c = {
							url: e.url,
							frag: e,
							responseType: "arraybuffer",
							progressData: !1
						};
						var d = e.byteRangeStartOffset,
							h = e.byteRangeEndOffset;
						isNaN(d) || isNaN(h) || (c.rangeStart = d, c.rangeEnd = h), l = {
							timeout: r.fragLoadingTimeOut,
							maxRetry: 0,
							retryDelay: 0,
							maxRetryDelay: r.fragLoadingMaxRetryTimeout
						}, u = {
							onSuccess: this.loadsuccess.bind(this),
							onError: this.loaderror.bind(this),
							onTimeout: this.loadtimeout.bind(this),
							onProgress: this.loadprogress.bind(this)
						}, s.load(c, l, u)
					}, n.prototype.loadsuccess = function(t, e, n) {
						var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
							r = t.data,
							o = n.frag;
						o.loader = void 0, this.loaders[o.type] = void 0, this.hls.trigger(M.a.FRAG_LOADED, {
							payload: r,
							frag: o,
							stats: e,
							networkDetails: i
						})
					}, n.prototype.loaderror = function(t, e) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
							i = e.loader;
						i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(M.a.ERROR, {
							type: v.b.NETWORK_ERROR,
							details: v.a.FRAG_LOAD_ERROR,
							fatal: !1,
							frag: e.frag,
							response: t,
							networkDetails: n
						})
					}, n.prototype.loadtimeout = function(t, e) {
						var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null,
							i = e.loader;
						i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(M.a.ERROR, {
							type: v.b.NETWORK_ERROR,
							details: v.a.FRAG_LOAD_TIMEOUT,
							fatal: !1,
							frag: e.frag,
							networkDetails: n
						})
					}, n.prototype.loadprogress = function(t, e, n) {
						var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
							r = e.frag;
						r.loaded = t.loaded, this.hls.trigger(M.a.FRAG_LOAD_PROGRESS, {
							frag: r,
							stats: t,
							networkDetails: i
						})
					}, n
				}(l);
				var R = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.KEY_LOADING));
							return e.loaders = {}, e.decryptkey = null, e.decrypturl = null, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.destroy = function() {
							for (var t in this.loaders) {
								var e = this.loaders[t];
								e && e.destroy()
							}
							this.loaders = {}, l.prototype.destroy.call(this)
						}, i.prototype.onKeyLoading = function(t) {
							var e = t.frag,
								n = e.type,
								i = this.loaders[n],
								r = e.decryptdata,
								o = r.uri;
							if (o !== this.decrypturl || null === this.decryptkey) {
								var a = this.hls.config;
								i && (N.b.warn("abort previous key loader for type:" + n), i.abort()), e.loader = this.loaders[n] = new a.loader(a), this.decrypturl = o, this.decryptkey = null;
								var s, l, u;
								s = {
									url: o,
									frag: e,
									responseType: "arraybuffer"
								}, l = {
									timeout: a.fragLoadingTimeOut,
									maxRetry: a.fragLoadingMaxRetry,
									retryDelay: a.fragLoadingRetryDelay,
									maxRetryDelay: a.fragLoadingMaxRetryTimeout
								}, u = {
									onSuccess: this.loadsuccess.bind(this),
									onError: this.loaderror.bind(this),
									onTimeout: this.loadtimeout.bind(this)
								}, e.loader.load(s, l, u)
							} else this.decryptkey && (r.key = this.decryptkey, this.hls.trigger(M.a.KEY_LOADED, {
								frag: e
							}))
						}, i.prototype.loadsuccess = function(t, e, n) {
							var i = n.frag;
							this.decryptkey = i.decryptdata.key = new Uint8Array(t.data), i.loader = void 0, this.loaders[i.type] = void 0, this.hls.trigger(M.a.KEY_LOADED, {
								frag: i
							})
						}, i.prototype.loaderror = function(t, e) {
							var n = e.frag,
								i = n.loader;
							i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(M.a.ERROR, {
								type: v.b.NETWORK_ERROR,
								details: v.a.KEY_LOAD_ERROR,
								fatal: !1,
								frag: n,
								response: t
							})
						}, i.prototype.loadtimeout = function(t, e) {
							var n = e.frag,
								i = n.loader;
							i && i.abort(), this.loaders[e.type] = void 0, this.hls.trigger(M.a.ERROR, {
								type: v.b.NETWORK_ERROR,
								details: v.a.KEY_LOAD_TIMEOUT,
								fatal: !1,
								frag: n
							})
						}, i
					}(l),
					F = {
						search: function(t, e) {
							for (var n = 0, i = t.length - 1, r = null, o = null; n <= i;) {
								var a = e(o = t[r = (n + i) / 2 | 0]);
								if (0 < a) n = r + 1;
								else {
									if (!(a < 0)) return o;
									i = r - 1
								}
							}
							return null
						}
					},
					B = {
						isBuffered: function(t, e) {
							try {
								if (t)
									for (var n = t.buffered, i = 0; i < n.length; i++)
										if (e >= n.start(i) && e <= n.end(i)) return !0
							} catch (t) {}
							return !1
						},
						bufferInfo: function(t, e, n) {
							try {
								if (t) {
									var i = t.buffered,
										r = [],
										o = void 0;
									for (o = 0; o < i.length; o++) r.push({
										start: i.start(o),
										end: i.end(o)
									});
									return this.bufferedInfo(r, e, n)
								}
							} catch (t) {}
							return {
								len: 0,
								start: e,
								end: e,
								nextStart: void 0
							}
						},
						bufferedInfo: function(t, e, n) {
							var i = [],
								r = void 0,
								o = void 0,
								a = void 0,
								s = void 0,
								l = void 0;
							for (t.sort(function(t, e) {
									var n = t.start - e.start;
									return n || e.end - t.end
								}), l = 0; l < t.length; l++) {
								var u = i.length;
								if (u) {
									var c = i[u - 1].end;
									t[l].start - c < n ? t[l].end > c && (i[u - 1].end = t[l].end) : i.push(t[l])
								} else i.push(t[l])
							}
							for (r = l = 0, o = a = e; l < i.length; l++) {
								var d = i[l].start,
									h = i[l].end;
								if (d <= e + n && e < h) o = d, r = (a = h) - e;
								else if (e + n < d) {
									s = d;
									break
								}
							}
							return {
								len: r,
								start: o,
								end: a,
								nextStart: s
							}
						}
					},
					O = n(8),
					I = n(6),
					D = n.n(I),
					P = n(10),
					U = n.n(P);

				function j() {
					if ("undefined" != typeof window) return window.MediaSource || window.WebKitMediaSource
				}
				var K = j(),
					G = function() {
						function l(n, t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, l), this.hls = n, this.id = t;
							var r = this.observer = new D.a,
								e = n.config;
							r.trigger = function(t) {
								for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
								r.emit.apply(r, [t, t].concat(n))
							}, r.off = function(t) {
								for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
								r.removeListener.apply(r, [t].concat(n))
							};
							var i = function(t, e) {
								(e = e || {}).frag = this.frag, e.id = this.id, n.trigger(t, e)
							}.bind(this);
							r.on(M.a.FRAG_DECRYPTED, i), r.on(M.a.FRAG_PARSING_INIT_SEGMENT, i), r.on(M.a.FRAG_PARSING_DATA, i), r.on(M.a.FRAG_PARSED, i), r.on(M.a.ERROR, i), r.on(M.a.FRAG_PARSING_METADATA, i), r.on(M.a.FRAG_PARSING_USERDATA, i), r.on(M.a.INIT_PTS_FOUND, i);
							var o = {
									mp4: K.isTypeSupported("video/mp4"),
									mpeg: K.isTypeSupported("audio/mpeg"),
									mp3: K.isTypeSupported('audio/mp4; codecs="mp3"')
								},
								a = navigator.vendor;
							if (e.enableWorker && "undefined" != typeof Worker) {
								N.b.log("demuxing in webworker");
								var s = void 0;
								try {
									s = this.w = U()(11), this.onwmsg = this.onWorkerMessage.bind(this), s.addEventListener("message", this.onwmsg), s.onerror = function(t) {
										n.trigger(M.a.ERROR, {
											type: v.b.OTHER_ERROR,
											details: v.a.INTERNAL_EXCEPTION,
											fatal: !0,
											event: "demuxerWorker",
											err: {
												message: t.message + " (" + t.filename + ":" + t.lineno + ")"
											}
										})
									}, s.postMessage({
										cmd: "init",
										typeSupported: o,
										vendor: a,
										id: t,
										config: JSON.stringify(e)
									})
								} catch (t) {
									N.b.error("error while initializing DemuxerWorker, fallback on DemuxerInline"), s && URL.revokeObjectURL(s.objectURL), this.demuxer = new O.a(r, o, e, a), this.w = void 0
								}
							} else this.demuxer = new O.a(r, o, e, a)
						}
						return l.prototype.destroy = function() {
							var t = this.w;
							if (t) t.removeEventListener("message", this.onwmsg), t.terminate(), this.w = null;
							else {
								var e = this.demuxer;
								e && (e.destroy(), this.demuxer = null)
							}
							var n = this.observer;
							n && (n.removeAllListeners(), this.observer = null)
						}, l.prototype.push = function(t, e, n, i, r, o, a, s) {
							var l = this.w,
								u = isNaN(r.startDTS) ? r.start : r.startDTS,
								c = r.decryptdata,
								d = this.frag,
								h = !(d && r.cc === d.cc),
								f = !(d && r.level === d.level),
								p = d && r.sn === d.sn + 1,
								g = !f && p;
							if (h && N.b.log(this.id + ":discontinuity detected"), f && N.b.log(this.id + ":switch detected"), this.frag = r, l) l.postMessage({
								cmd: "demux",
								data: t,
								decryptdata: c,
								initSegment: e,
								audioCodec: n,
								videoCodec: i,
								timeOffset: u,
								discontinuity: h,
								trackSwitch: f,
								contiguous: g,
								duration: o,
								accurateTimeOffset: a,
								defaultInitPTS: s
							}, t instanceof ArrayBuffer ? [t] : []);
							else {
								var m = this.demuxer;
								m && m.push(t, c, e, n, i, u, h, f, g, o, a, s)
							}
						}, l.prototype.onWorkerMessage = function(t) {
							var e = t.data,
								n = this.hls;
							switch (e.event) {
								case "init":
									URL.revokeObjectURL(this.w.objectURL);
									break;
								case M.a.FRAG_PARSING_DATA:
									e.data.data1 = new Uint8Array(e.data1), e.data2 && (e.data.data2 = new Uint8Array(e.data2));
								default:
									e.data = e.data || {}, e.data.frag = this.frag, e.data.id = this.id, n.trigger(e.event, e.data)
							}
						}, l
					}();
				var H = "NOT_LOADED",
					Y = "APPENDING",
					V = "PARTIAL",
					z = "OK",
					$ = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.BUFFER_APPENDED, M.a.FRAG_BUFFERED, M.a.FRAG_LOADED));
							return e.bufferPadding = .2, e.fragments = Object.create(null), e.timeRanges = Object.create(null), e.config = t.config, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.destroy = function() {
							this.fragments = null, this.timeRanges = null, this.config = null, l.prototype.destroy.call(this), n.prototype.destroy.call(this)
						}, i.prototype.getBufferedFrag = function(i, r) {
							var o = this.fragments,
								t = Object.keys(o).filter(function(t) {
									var e = o[t];
									if (e.body.type !== r) return !1;
									if (!e.buffered) return !1;
									var n = e.body;
									return n.startPTS <= i && i <= n.endPTS
								});
							if (0 === t.length) return null;
							var e = t.pop();
							return o[e].body
						}, i.prototype.detectEvictedFragments = function(r, o) {
							var a = this,
								s = void 0,
								l = void 0;
							Object.keys(this.fragments).forEach(function(t) {
								var e = a.fragments[t];
								if (!0 === e.buffered) {
									var n = e.range[r];
									if (n) {
										s = n.time;
										for (var i = 0; i < s.length; i++)
											if (l = s[i], !1 === a.isTimeBuffered(l.startPTS, l.endPTS, o)) {
												a.removeFragment(e.body);
												break
											}
									}
								}
							})
						}, i.prototype.detectPartialFragments = function(n) {
							var i = this,
								t = this.getFragmentKey(n),
								r = this.fragments[t];
							r && (r.buffered = !0, Object.keys(this.timeRanges).forEach(function(t) {
								if (!0 === n.hasElementaryStream(t)) {
									var e = i.timeRanges[t];
									r.range[t] = i.getBufferedTimes(n.startPTS, n.endPTS, e)
								}
							}))
						}, i.prototype.getBufferedTimes = function(t, e, n) {
							for (var i = [], r = void 0, o = void 0, a = !1, s = 0; s < n.length; s++) {
								if (r = n.start(s) - this.bufferPadding, o = n.end(s) + this.bufferPadding, r <= t && e <= o) {
									i.push({
										startPTS: Math.max(t, n.start(s)),
										endPTS: Math.min(e, n.end(s))
									});
									break
								}
								if (t < o && r < e) i.push({
									startPTS: Math.max(t, n.start(s)),
									endPTS: Math.min(e, n.end(s))
								}), a = !0;
								else if (e <= r) break
							}
							return {
								time: i,
								partial: a
							}
						}, i.prototype.getFragmentKey = function(t) {
							return t.type + "_" + t.level + "_" + t.sn
						}, i.prototype.getPartialFragment = function(n) {
							var i = this,
								r = void 0,
								o = void 0,
								a = void 0,
								s = null,
								l = 0;
							return Object.keys(this.fragments).forEach(function(t) {
								var e = i.fragments[t];
								i.isPartial(e) && (o = e.body.startPTS - i.bufferPadding, a = e.body.endPTS + i.bufferPadding, o <= n && n <= a && (r = Math.min(n - o, a - n), l <= r && (s = e.body, l = r)))
							}), s
						}, i.prototype.getState = function(t) {
							var e = this.getFragmentKey(t),
								n = this.fragments[e],
								i = H;
							return void 0 !== n && (i = n.buffered ? !0 === this.isPartial(n) ? V : z : Y), i
						}, i.prototype.isPartial = function(t) {
							return !0 === t.buffered && (void 0 !== t.range.video && !0 === t.range.video.partial || void 0 !== t.range.audio && !0 === t.range.audio.partial)
						}, i.prototype.isTimeBuffered = function(t, e, n) {
							for (var i = void 0, r = void 0, o = 0; o < n.length; o++) {
								if (i = n.start(o) - this.bufferPadding, r = n.end(o) + this.bufferPadding, i <= t && e <= r) return !0;
								if (e <= i) return !1
							}
							return !1
						}, i.prototype.onFragLoaded = function(t) {
							var e = t.frag;
							if (!isNaN(e.sn)) {
								var n = this.getFragmentKey(e),
									i = {
										body: e,
										range: Object.create(null),
										buffered: !1
									};
								this.fragments[n] = i
							}
						}, i.prototype.onBufferAppended = function(t) {
							var n = this;
							this.timeRanges = t.timeRanges, Object.keys(this.timeRanges).forEach(function(t) {
								var e = n.timeRanges[t];
								n.detectEvictedFragments(t, e)
							})
						}, i.prototype.onFragBuffered = function(t) {
							this.detectPartialFragments(t.frag)
						}, i.prototype.hasFragment = function(t) {
							var e = this.getFragmentKey(t);
							return void 0 !== this.fragments[e]
						}, i.prototype.removeFragment = function(t) {
							var e = this.getFragmentKey(t);
							delete this.fragments[e]
						}, i.prototype.removeAllFragments = function() {
							this.fragments = Object.create(null)
						}, i
					}(l);

				function W(t, e, n) {
					var i = t[e],
						r = t[n],
						o = r.startPTS;
					isNaN(o) ? r.start = e < n ? i.start + i.duration : Math.max(i.start - r.duration, 0) : e < n ? (i.duration = o - i.start, i.duration < 0 && N.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (r.duration = i.start - o, r.duration < 0 && N.b.warn("negative duration computed for frag " + r.sn + ",level " + r.level + ", there should be some duration drift between playlist and fragment!"))
				}

				function q(t, e, n, i, r, o) {
					var a = n;
					if (!isNaN(e.startPTS)) {
						var s = Math.abs(e.startPTS - n);
						isNaN(e.deltaPTS) ? e.deltaPTS = s : e.deltaPTS = Math.max(s, e.deltaPTS), a = Math.max(n, e.startPTS), n = Math.min(n, e.startPTS), i = Math.max(i, e.endPTS), r = Math.min(r, e.startDTS), o = Math.max(o, e.endDTS)
					}
					var l = n - e.start;
					e.start = e.startPTS = n, e.maxStartPTS = a, e.endPTS = i, e.startDTS = r, e.endDTS = o, e.duration = i - n;
					var u = e.sn;
					if (!t || u < t.startSN || u > t.endSN) return 0;
					var c, d = void 0,
						h = void 0;
					for (c = u - t.startSN, (d = t.fragments)[c] = e, h = c; 0 < h; h--) W(d, h, h - 1);
					for (h = c; h < d.length - 1; h++) W(d, h, h + 1);
					return t.PTSKnown = !0, l
				}

				function X(t, e) {
					var n = Math.max(t.startSN, e.startSN) - e.startSN,
						i = Math.min(t.endSN, e.endSN) - e.startSN,
						r = e.startSN - t.startSN,
						o = t.fragments,
						a = e.fragments,
						s = 0,
						l = void 0;
					if (e.initSegment && t.initSegment && (e.initSegment = t.initSegment), i < n) e.PTSKnown = !1;
					else {
						for (var u = n; u <= i; u++) {
							var c = o[r + u],
								d = a[u];
							d && c && (s = c.cc - d.cc, isNaN(c.startPTS) || (d.start = d.startPTS = c.startPTS, d.endPTS = c.endPTS, d.duration = c.duration, d.backtracked = c.backtracked, d.dropped = c.dropped, l = d))
						}
						if (s)
							for (N.b.log("discontinuity sliding from playlist, take drift into account"), u = 0; u < a.length; u++) a[u].cc += s;
						if (l) q(e, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS);
						else if (0 <= r && r < o.length) {
							var h = o[r].start;
							for (u = 0; u < a.length; u++) a[u].start += h
						}
						e.PTSKnown = t.PTSKnown
					}
				}
				var Q = {
					toString: function(t) {
						for (var e = "", n = t.length, i = 0; i < n; i++) e += "[" + t.start(i).toFixed(3) + "," + t.end(i).toFixed(3) + "]";
						return e
					}
				};

				function Z(n, t) {
					t.fragments.forEach(function(t) {
						if (t) {
							var e = t.start + n;
							t.start = t.startPTS = e, t.endPTS = e + t.duration
						}
					}), t.PTSKnown = !0
				}

				function J(t, e, n) {
					if (r = t, a = n, s = !1, (o = e) && o.details && a && (a.endCC > a.startCC || r && r.cc < a.startCC) && (s = !0), s) {
						var i = function(t, e) {
							var n = t.fragments,
								i = e.fragments;
							if (i.length && n.length) {
								var r = function(t, e) {
									for (var n = null, i = 0; i < t.length; i += 1) {
										var r = t[i];
										if (r && r.cc === e) {
											n = r;
											break
										}
									}
									return n
								}(n, i[0].cc);
								if (r && (!r || r.startPTS)) return r;
								N.b.log("No frag in previous level to align on")
							} else N.b.log("No fragments to align")
						}(e.details, n);
						i && (N.b.log("Adjusting PTS using last level due to CC increase within current level"), Z(i.start, n))
					}
					var r, o, a, s;
					if (!1 === n.PTSKnown && e && e.details && e.details.fragments && e.details.fragments.length) {
						var l = e.details.programDateTime,
							u = (n.programDateTime - l) / 1e3 + e.details.fragments[0].start;
						isNaN(u) || (N.b.log("adjusting PTS using programDateTime delta, sliding:" + u.toFixed(3)), Z(u, n))
					}
				}
				var tt = function(o) {
						function a(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, a);
							for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
							var r = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, o.call.apply(o, [this, t].concat(n)));
							return r._tickInterval = null, r._tickCallCount = 0, r
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(a, o), a.prototype.destroy = function() {
							this.clearInterval(), o.prototype.destroy.call(this)
						}, a.prototype.hasInterval = function() {
							return null !== this._tickInterval
						}, a.prototype.setInterval = function(e) {
							function t(t) {
								return e.apply(this, arguments)
							}
							return t.toString = function() {
								return e.toString()
							}, t
						}(function(t) {
							return !this._tickInterval && (this._tickInterval = setInterval(this.tick.bind(this, !1), t), !0)
						}), a.prototype.clearInterval = function(t) {
							function e() {
								return t.apply(this, arguments)
							}
							return e.toString = function() {
								return t.toString()
							}, e
						}(function() {
							return !!this._tickInterval && (clearInterval(this._tickInterval), !(this._tickInterval = null))
						}), a.prototype.tick = function() {
							this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), 1 < this._tickCallCount && setTimeout(this.tick.bind(this), 0), this._tickCallCount = 0)
						}, a.prototype.doTick = function() {
							throw new Error("TaskLoop is abstract and `doLoop` must be implemented")
						}, a
					}(l),
					et = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var nt = "STOPPED",
					it = "IDLE",
					rt = "KEY_LOADING",
					ot = "FRAG_LOADING",
					at = "FRAG_LOADING_WAITING_RETRY",
					st = "WAITING_LEVEL",
					lt = "PARSING",
					ut = "PARSED",
					ct = "BUFFER_FLUSHING",
					dt = "ENDED",
					ht = "ERROR",
					ft = function(i) {
						function r(t, e) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, r);
							var n = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, i.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.MANIFEST_LOADING, M.a.MANIFEST_PARSED, M.a.LEVEL_LOADED, M.a.KEY_LOADED, M.a.FRAG_LOADED, M.a.FRAG_LOAD_EMERGENCY_ABORTED, M.a.FRAG_PARSING_INIT_SEGMENT, M.a.FRAG_PARSING_DATA, M.a.FRAG_PARSED, M.a.ERROR, M.a.AUDIO_TRACK_SWITCHING, M.a.AUDIO_TRACK_SWITCHED, M.a.BUFFER_CREATED, M.a.BUFFER_APPENDED, M.a.BUFFER_FLUSHED));
							return n.fragmentTracker = e, n.config = t.config, n.audioCodecSwap = !1, n._state = nt, n
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(r, i), r.prototype.onHandlerDestroying = function() {
							this.stopLoad()
						}, r.prototype.onHandlerDestroyed = function() {
							this.state = nt, this.fragmentTracker = null
						}, r.prototype.startLoad = function(t) {
							if (this.levels) {
								var e = this.lastCurrentTime,
									n = this.hls;
								if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
									var i = n.startLevel; - 1 === i && (i = 0, this.bitrateTest = !0), this.level = n.nextLoadLevel = i, this.loadedmetadata = !1
								}
								0 < e && -1 === t && (N.b.log("override startPosition with lastCurrentTime @" + e.toFixed(3)), t = e), this.state = it, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = t, this.tick()
							} else this.forceStartLoad = !0, this.state = nt
						}, r.prototype.stopLoad = function() {
							var t = this.fragCurrent;
							t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.clearInterval(), this.state = nt, this.forceStartLoad = !1
						}, r.prototype.doTick = function() {
							switch (this.state) {
								case ct:
									this.fragLoadError = 0;
									break;
								case it:
									this._doTickIdle();
									break;
								case st:
									var t = this.levels[this.level];
									t && t.details && (this.state = it);
									break;
								case at:
									var e = performance.now(),
										n = this.retryDate;
									(!n || n <= e || this.media && this.media.seeking) && (N.b.log("mediaController: retryDate reached, switch back to IDLE state"), this.state = it)
							}
							this._checkBuffer(), this._checkFragmentChanged()
						}, r.prototype._doTickIdle = function() {
							var t = this.hls,
								e = t.config,
								n = this.media;
							if (void 0 !== this.levelLastLoaded && (n || !this.startFragRequested && e.startFragPrefetch)) {
								var i = void 0;
								i = this.loadedmetadata ? n.currentTime : this.nextLoadPosition;
								var r = t.nextLoadLevel,
									o = this.levels[r];
								if (o) {
									var a = o.bitrate,
										s = void 0;
									s = a ? Math.max(8 * e.maxBufferSize / a, e.maxBufferLength) : e.maxBufferLength, s = Math.min(s, e.maxMaxBufferLength);
									var l = B.bufferInfo(this.mediaBuffer ? this.mediaBuffer : n, i, e.maxBufferHole),
										u = l.len;
									if (!(s <= u)) {
										N.b.trace("buffer length of " + u.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."), this.level = t.nextLoadLevel = r;
										var c = o.details;
										if (void 0 === c || !0 === c.live && this.levelLastLoaded !== r) this.state = st;
										else {
											var d = this.fragPrevious;
											if (!c.live && d && !d.backtracked && d.sn === c.endSN && !l.nextStart)
												if (Math.min(n.duration, d.start + d.duration) - Math.max(l.end, d.start) <= Math.max(.2, d.duration)) {
													var h = {};
													return this.altAudio && (h.type = "video"), this.hls.trigger(M.a.BUFFER_EOS, h), void(this.state = dt)
												} this._fetchPayloadOrEos(i, l, c)
										}
									}
								}
							}
						}, r.prototype._fetchPayloadOrEos = function(t, e, n) {
							var i = this.fragPrevious,
								r = this.level,
								o = n.fragments,
								a = o.length;
							if (0 !== a) {
								var s = o[0].start,
									l = o[a - 1].start + o[a - 1].duration,
									u = e.end,
									c = void 0;
								if (n.initSegment && !n.initSegment.data) c = n.initSegment;
								else if (n.live) {
									var d = this.config.initialLiveManifestSize;
									if (a < d) return void N.b.warn("Can not start playback of a level, reason: not enough fragments " + a + " < " + d);
									if (null === (c = this._ensureFragmentAtLivePoint(n, u, s, l, i, o, a))) return
								} else u < s && (c = o[0]);
								c || (c = this._findFragment(s, i, a, o, u, l, n)), c && this._loadFragmentOrKey(c, r, n, t, u)
							}
						}, r.prototype._ensureFragmentAtLivePoint = function(t, e, n, i, r, o, a) {
							var s = this.hls.config,
								l = this.media,
								u = void 0,
								c = void 0 !== s.liveMaxLatencyDuration ? s.liveMaxLatencyDuration : s.liveMaxLatencyDurationCount * t.targetduration;
							if (e < Math.max(n - s.maxFragLookUpTolerance, i - c)) {
								var d = this.liveSyncPosition = this.computeLivePosition(n, t);
								N.b.log("buffer end: " + e.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + d.toFixed(3)), e = d, l && l.readyState && l.duration > d && (l.currentTime = d), this.nextLoadPosition = d
							}
							if (t.PTSKnown && i < e && l && l.readyState) return null;
							if (this.startFragRequested && !t.PTSKnown) {
								if (r)
									if (t.programDateTime) u = this._findFragmentByPDT(o, r.endPdt + 1);
									else {
										var h = r.sn + 1;
										if (h >= t.startSN && h <= t.endSN) {
											var f = o[h - t.startSN];
											r.cc === f.cc && (u = f, N.b.log("live playlist, switching playlist, load frag with next SN: " + u.sn))
										}
										u || (u = F.search(o, function(t) {
											return r.cc - t.cc
										})) && N.b.log("live playlist, switching playlist, load frag with same CC: " + u.sn)
									} u || (u = o[Math.min(a - 1, Math.round(a / 2))], N.b.log("live playlist, switching playlist, unknown, load middle frag : " + u.sn))
							}
							return u
						}, r.prototype._findFragmentByPDT = function(t, e) {
							if (!t || void 0 === e) return null;
							if (e < t[0].pdt) return null;
							if (e >= t[t.length - 1].endPdt) return null;
							for (var n = 0; n < t.length; ++n) {
								var i = t[n];
								if (e < i.endPdt) return i
							}
							return null
						}, r.prototype._findFragmentBySN = function(t, e, n, i) {
							var r = void 0,
								o = this.hls.config.maxFragLookUpTolerance,
								a = t ? e[t.sn - e[0].sn + 1] : void 0,
								s = function(t) {
									var e = Math.min(o, t.duration + (t.deltaPTS ? t.deltaPTS : 0));
									return t.start + t.duration - e <= n ? 1 : t.start - e > n && t.start ? -1 : 0
								};
							return n < i && (i - o < n && (o = 0), r = a && !s(a) ? a : F.search(e, s)), r
						}, r.prototype._findFragment = function(t, e, n, i, r, o, a) {
							var s = this.hls.config,
								l = void 0,
								u = void 0;
							if (u = r < o ? a.programDateTime ? this._findFragmentByPDT(i, 1e3 * r + (a.programDateTime ? Date.parse(a.programDateTime) : 0) - 1e3 * t) : this._findFragmentBySN(e, i, r, o) : i[n - 1]) {
								var c = (l = u).sn - a.startSN,
									d = e && l.level === e.level,
									h = i[c - 1],
									f = i[c + 1];
								if (e && l.sn === e.sn)
									if (d && !l.backtracked)
										if (l.sn < a.endSN) {
											var p = e.deltaPTS;
											p && p > s.maxBufferHole && e.dropped && c ? (l = h, N.b.warn("SN just loaded, with large PTS gap between audio and video, maybe frag is not starting with a keyframe ? load previous one to try to overcome this")) : (l = f, N.b.log("SN just loaded, load next one: " + l.sn))
										} else l = null;
								else l.backtracked && (f && f.backtracked ? (N.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + l.sn + ". Loading fragment " + f.sn), l = f) : (N.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"), l.dropped = 0, h ? (l = h).backtracked = !0 : c && (l = null)))
							}
							return l
						}, r.prototype._loadFragmentOrKey = function(t, e, n, i, r) {
							if (t.decryptdata && null != t.decryptdata.uri && null == t.decryptdata.key) N.b.log("Loading key for " + t.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + e), this.state = rt, this.hls.trigger(M.a.KEY_LOADING, {
								frag: t
							});
							else {
								N.b.log("Loading " + t.sn + " of [" + n.startSN + " ," + n.endSN + "],level " + e + ", currentTime:" + i.toFixed(3) + ",bufferEnd:" + r.toFixed(3));
								var o = this.fragmentTracker.getState(t);
								this.fragCurrent = t, this.startFragRequested = !0, isNaN(t.sn) || t.bitrateTest || (this.nextLoadPosition = t.start + t.duration), t.backtracked || o === H ? (t.autoLevel = this.hls.autoLevelEnabled, t.bitrateTest = this.bitrateTest, this.hls.trigger(M.a.FRAG_LOADING, {
									frag: t
								}), this.demuxer || (this.demuxer = new G(this.hls, "main")), this.state = ot) : o === Y && this._reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t)
							}
						}, r.prototype.getBufferedFrag = function(t) {
							return this.fragmentTracker.getBufferedFrag(t, T.LevelType.MAIN)
						}, r.prototype.followingBufferedFrag = function(t) {
							return t ? this.getBufferedFrag(t.endPTS + .5) : null
						}, r.prototype._checkFragmentChanged = function() {
							var t = void 0,
								e = void 0,
								n = this.media;
							if (n && n.readyState && !1 === n.seeking && ((e = n.currentTime) > n.playbackRate * this.lastCurrentTime && (this.lastCurrentTime = e), B.isBuffered(n, e) ? t = this.getBufferedFrag(e) : B.isBuffered(n, e + .1) && (t = this.getBufferedFrag(e + .1)), t)) {
								var i = t;
								if (i !== this.fragPlaying) {
									this.hls.trigger(M.a.FRAG_CHANGED, {
										frag: i
									});
									var r = i.level;
									this.fragPlaying && this.fragPlaying.level === r || this.hls.trigger(M.a.LEVEL_SWITCHED, {
										level: r
									}), this.fragPlaying = i
								}
							}
						}, r.prototype.immediateLevelSwitch = function() {
							if (N.b.log("immediateLevelSwitch"), !this.immediateSwitch) {
								this.immediateSwitch = !0;
								var t = this.media,
									e = void 0;
								t ? (e = t.paused, t.pause()) : e = !0, this.previouslyPaused = e
							}
							var n = this.fragCurrent;
							n && n.loader && n.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
						}, r.prototype.immediateLevelSwitchEnd = function() {
							var t = this.media;
							t && t.buffered.length && (this.immediateSwitch = !1, B.isBuffered(t, t.currentTime) && (t.currentTime -= 1e-4), this.previouslyPaused || t.play())
						}, r.prototype.nextLevelSwitch = function() {
							var t = this.media;
							if (t && t.readyState) {
								var e, n = void 0,
									i = void 0;
								if ((e = this.getBufferedFrag(t.currentTime)) && 1 < e.startPTS && this.flushMainBuffer(0, e.startPTS - 1), t.paused) n = 0;
								else {
									var r = this.hls.nextLoadLevel,
										o = this.levels[r],
										a = this.fragLastKbps;
									n = a && this.fragCurrent ? this.fragCurrent.duration * o.bitrate / (1e3 * a) + 1 : 0
								}
								if ((i = this.getBufferedFrag(t.currentTime + n)) && (i = this.followingBufferedFrag(i))) {
									var s = this.fragCurrent;
									s && s.loader && s.loader.abort(), this.fragCurrent = null, this.flushMainBuffer(i.maxStartPTS, Number.POSITIVE_INFINITY)
								}
							}
						}, r.prototype.flushMainBuffer = function(t, e) {
							this.state = ct;
							var n = {
								startOffset: t,
								endOffset: e
							};
							this.altAudio && (n.type = "video"), this.hls.trigger(M.a.BUFFER_FLUSHING, n)
						}, r.prototype.onMediaAttached = function(t) {
							var e = this.media = this.mediaBuffer = t.media;
							this.onvseeking = this.onMediaSeeking.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("seeked", this.onvseeked), e.addEventListener("ended", this.onvended);
							var n = this.config;
							this.levels && n.autoStartLoad && this.hls.startLoad(n.startPosition)
						}, r.prototype.onMediaDetaching = function() {
							var t = this.media;
							t && t.ended && (N.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0);
							var e = this.levels;
							e && e.forEach(function(t) {
								t.details && t.details.fragments.forEach(function(t) {
									t.backtracked = void 0
								})
							}), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("seeked", this.onvseeked), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.stopLoad()
						}, r.prototype.onMediaSeeking = function() {
							var t = this.media,
								e = t ? t.currentTime : void 0,
								n = this.config;
							isNaN(e) || N.b.log("media seeking to " + e.toFixed(3));
							var i = this.mediaBuffer ? this.mediaBuffer : t,
								r = B.bufferInfo(i, e, this.config.maxBufferHole);
							if (this.state === ot) {
								var o = this.fragCurrent;
								if (0 === r.len && o) {
									var a = n.maxFragLookUpTolerance,
										s = o.start - a,
										l = o.start + o.duration + a;
									e < s || l < e ? (o.loader && (N.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), o.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.state = it) : N.b.log("seeking outside of buffer but within currently loaded fragment range")
								}
							} else this.state === dt && (0 === r.len && (this.fragPrevious = 0), this.state = it);
							t && (this.lastCurrentTime = e), this.loadedmetadata || (this.nextLoadPosition = this.startPosition = e), this.tick()
						}, r.prototype.onMediaSeeked = function() {
							var t = this.media,
								e = t ? t.currentTime : void 0;
							isNaN(e) || N.b.log("media seeked to " + e.toFixed(3)), this.tick()
						}, r.prototype.onMediaEnded = function() {
							N.b.log("media ended"), this.startPosition = this.lastCurrentTime = 0
						}, r.prototype.onManifestLoading = function() {
							N.b.log("trigger BUFFER_RESET"), this.hls.trigger(M.a.BUFFER_RESET), this.fragmentTracker.removeAllFragments(), this.stalled = !1, this.startPosition = this.lastCurrentTime = 0
						}, r.prototype.onManifestParsed = function(t) {
							var e = !1,
								n = !1,
								i = void 0;
							t.levels.forEach(function(t) {
								(i = t.audioCodec) && (-1 !== i.indexOf("mp4a.40.2") && (e = !0), -1 !== i.indexOf("mp4a.40.5") && (n = !0))
							}), this.audioCodecSwitch = e && n, this.audioCodecSwitch && N.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1;
							var r = this.config;
							(r.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(r.startPosition)
						}, r.prototype.onLevelLoaded = function(t) {
							var e = t.details,
								n = t.level,
								i = this.levels[this.levelLastLoaded],
								r = this.levels[n],
								o = e.totalduration,
								a = 0;
							if (N.b.log("level " + n + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + o), e.live) {
								var s = r.details;
								s && 0 < e.fragments.length ? (X(s, e), a = e.fragments[0].start, this.liveSyncPosition = this.computeLivePosition(a, s), e.PTSKnown && !isNaN(a) ? N.b.log("live playlist sliding:" + a.toFixed(3)) : (N.b.log("live playlist - outdated PTS, unknown sliding"), J(this.fragPrevious, i, e))) : (N.b.log("live playlist - first load, unknown sliding"), e.PTSKnown = !1, J(this.fragPrevious, i, e))
							} else e.PTSKnown = !1;
							if (r.details = e, this.levelLastLoaded = n, this.hls.trigger(M.a.LEVEL_UPDATED, {
									details: e,
									level: n
								}), !1 === this.startFragRequested) {
								if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
									var l = e.startTimeOffset;
									isNaN(l) ? e.live ? (this.startPosition = this.computeLivePosition(a, e), N.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0 : (l < 0 && (N.b.log("negative start time offset " + l + ", count from end of last fragment"), l = a + o + l), N.b.log("start time offset found in playlist, adjust startPosition to " + l), this.startPosition = l), this.lastCurrentTime = this.startPosition
								}
								this.nextLoadPosition = this.startPosition
							}
							this.state === st && (this.state = it), this.tick()
						}, r.prototype.onKeyLoaded = function() {
							this.state === rt && (this.state = it, this.tick())
						}, r.prototype.onFragLoaded = function(t) {
							var e = this.fragCurrent,
								n = t.frag;
							if (this.state === ot && e && "main" === n.type && n.level === e.level && n.sn === e.sn) {
								var i = t.stats,
									r = this.levels[e.level],
									o = r.details;
								if (N.b.log("Loaded  " + e.sn + " of [" + o.startSN + " ," + o.endSN + "],level " + e.level), this.bitrateTest = !1, this.stats = i, !0 === n.bitrateTest && this.hls.nextLoadLevel) this.state = it, this.startFragRequested = !1, i.tparsed = i.tbuffered = performance.now(), this.hls.trigger(M.a.FRAG_BUFFERED, {
									stats: i,
									frag: e,
									id: "main"
								}), this.tick();
								else if ("initSegment" === n.sn) this.state = it, i.tparsed = i.tbuffered = performance.now(), o.initSegment.data = t.payload, this.hls.trigger(M.a.FRAG_BUFFERED, {
									stats: i,
									frag: e,
									id: "main"
								}), this.tick();
								else {
									this.state = lt;
									var a = o.totalduration,
										s = e.level,
										l = e.sn,
										u = this.config.defaultAudioCodec || r.audioCodec;
									this.audioCodecSwap && (N.b.log("swapping playlist audio codec"), void 0 === u && (u = this.lastAudioCodec), u && (u = -1 !== u.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")), this.pendingBuffering = !0, this.appended = !1, N.b.log("Parsing " + l + " of [" + o.startSN + " ," + o.endSN + "],level " + s + ", cc " + e.cc);
									var c = this.demuxer;
									c || (c = this.demuxer = new G(this.hls, "main"));
									var d = this.media,
										h = !(d && d.seeking) && (o.PTSKnown || !o.live),
										f = o.initSegment ? o.initSegment.data : [];
									c.push(t.payload, f, u, r.videoCodec, e, a, h, void 0)
								}
							}
							this.fragLoadError = 0
						}, r.prototype.onFragParsingInitSegment = function(t) {
							var e = this.fragCurrent,
								n = t.frag;
							if (e && "main" === t.id && n.sn === e.sn && n.level === e.level && this.state === lt) {
								var i = t.tracks,
									r = void 0,
									o = void 0;
								if (i.audio && this.altAudio && delete i.audio, o = i.audio) {
									var a = this.levels[this.level].audioCodec,
										s = navigator.userAgent.toLowerCase();
									a && this.audioCodecSwap && (N.b.log("swapping playlist audio codec"), a = -1 !== a.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), this.audioCodecSwitch && 1 !== o.metadata.channelCount && -1 === s.indexOf("firefox") && (a = "mp4a.40.5"), -1 !== s.indexOf("android") && "audio/mpeg" !== o.container && (a = "mp4a.40.2", N.b.log("Android: force audio codec to " + a)), o.levelCodec = a, o.id = t.id
								}
								for (r in (o = i.video) && (o.levelCodec = this.levels[this.level].videoCodec, o.id = t.id), this.hls.trigger(M.a.BUFFER_CODECS, i), i) {
									o = i[r], N.b.log("main track:" + r + ",container:" + o.container + ",codecs[level/parsed]=[" + o.levelCodec + "/" + o.codec + "]");
									var l = o.initSegment;
									l && (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(M.a.BUFFER_APPENDING, {
										type: r,
										data: l,
										parent: "main",
										content: "initSegment"
									}))
								}
								this.tick()
							}
						}, r.prototype.onFragParsingData = function(e) {
							var n = this,
								t = this.fragCurrent,
								i = e.frag;
							if (t && "main" === e.id && i.sn === t.sn && i.level === t.level && ("audio" !== e.type || !this.altAudio) && this.state === lt) {
								var r = this.levels[this.level],
									o = t;
								if (isNaN(e.endPTS) && (e.endPTS = e.startPTS + t.duration, e.endDTS = e.startDTS + t.duration), !0 === e.hasAudio && o.addElementaryStream(C.ElementaryStreamTypes.AUDIO), !0 === e.hasVideo && o.addElementaryStream(C.ElementaryStreamTypes.VIDEO), N.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)), "video" === e.type)
									if (o.dropped = e.dropped, o.dropped)
										if (o.backtracked) N.b.warn("Already backtracked on this fragment, appending with the gap");
										else {
											var a = r.details;
											if (!a || o.sn !== a.startSN) return N.b.warn("missing video frame(s), backtracking fragment"), this.fragmentTracker.removeFragment(o), o.backtracked = !0, this.nextLoadPosition = e.startPTS, this.state = it, this.fragPrevious = o, void this.tick();
											N.b.warn("missing video frame(s) on first frag, appending with gap")
										}
								else o.backtracked = !1;
								var s = q(r.details, o, e.startPTS, e.endPTS, e.startDTS, e.endDTS),
									l = this.hls;
								l.trigger(M.a.LEVEL_PTS_UPDATED, {
									details: r.details,
									level: this.level,
									drift: s,
									type: e.type,
									start: e.startPTS,
									end: e.endPTS
								}), [e.data1, e.data2].forEach(function(t) {
									t && t.length && n.state === lt && (n.appended = !0, n.pendingBuffering = !0, l.trigger(M.a.BUFFER_APPENDING, {
										type: e.type,
										data: t,
										parent: "main",
										content: "data"
									}))
								}), this.tick()
							}
						}, r.prototype.onFragParsed = function(t) {
							var e = this.fragCurrent,
								n = t.frag;
							e && "main" === t.id && n.sn === e.sn && n.level === e.level && this.state === lt && (this.stats.tparsed = performance.now(), this.state = ut, this._checkAppendedParsed())
						}, r.prototype.onAudioTrackSwitching = function(t) {
							var e = !!t.url,
								n = t.id;
							if (!e) {
								if (this.mediaBuffer !== this.media) {
									N.b.log("switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
									var i = this.fragCurrent;
									i.loader && (N.b.log("switching to main audio track, cancel main fragment load"), i.loader.abort()), this.fragCurrent = null, this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = it
								}
								var r = this.hls;
								r.trigger(M.a.BUFFER_FLUSHING, {
									startOffset: 0,
									endOffset: Number.POSITIVE_INFINITY,
									type: "audio"
								}), r.trigger(M.a.AUDIO_TRACK_SWITCHED, {
									id: n
								}), this.altAudio = !1
							}
						}, r.prototype.onAudioTrackSwitched = function(t) {
							var e = t.id,
								n = !!this.hls.audioTracks[e].url;
							if (n) {
								var i = this.videoBuffer;
								i && this.mediaBuffer !== i && (N.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
							}
							this.altAudio = n, this.tick()
						}, r.prototype.onBufferCreated = function(t) {
							var e = t.tracks,
								n = void 0,
								i = void 0,
								r = !1;
							for (var o in e) {
								var a = e[o];
								"main" === a.id ? (n = a, "video" === (i = o) && (this.videoBuffer = e[o].buffer)) : r = !0
							}
							r && n ? (N.b.log("alternate track found, use " + i + ".buffered to schedule main fragment loading"), this.mediaBuffer = n.buffer) : this.mediaBuffer = this.media
						}, r.prototype.onBufferAppended = function(t) {
							if ("main" === t.parent) {
								var e = this.state;
								e !== lt && e !== ut || (this.pendingBuffering = 0 < t.pending, this._checkAppendedParsed())
							}
						}, r.prototype._checkAppendedParsed = function() {
							if (!(this.state !== ut || this.appended && this.pendingBuffering)) {
								var t = this.fragCurrent;
								if (t) {
									var e = this.mediaBuffer ? this.mediaBuffer : this.media;
									N.b.log("main buffered : " + Q.toString(e.buffered)), this.fragPrevious = t;
									var n = this.stats;
									n.tbuffered = performance.now(), this.fragLastKbps = Math.round(8 * n.total / (n.tbuffered - n.tfirst)), this.hls.trigger(M.a.FRAG_BUFFERED, {
										stats: n,
										frag: t,
										id: "main"
									}), this.state = it
								}
								this.tick()
							}
						}, r.prototype.onError = function(t) {
							var e = t.frag || this.fragCurrent;
							if (!e || "main" === e.type) {
								var n = !!this.media && B.isBuffered(this.media, this.media.currentTime) && B.isBuffered(this.media, this.media.currentTime + .5);
								switch (t.details) {
									case v.a.FRAG_LOAD_ERROR:
									case v.a.FRAG_LOAD_TIMEOUT:
									case v.a.KEY_LOAD_ERROR:
									case v.a.KEY_LOAD_TIMEOUT:
										if (!t.fatal)
											if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
												var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
												N.b.warn("mediaController: frag loading failed, retry in " + i + " ms"), this.retryDate = performance.now() + i, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.fragLoadError++, this.state = at
											} else N.b.error("mediaController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = ht;
										break;
									case v.a.LEVEL_LOAD_ERROR:
									case v.a.LEVEL_LOAD_TIMEOUT:
										this.state !== ht && (t.fatal ? (this.state = ht, N.b.warn("streamController: " + t.details + ",switch to " + this.state + " state ...")) : t.levelRetry || this.state !== st || (this.state = it));
										break;
									case v.a.BUFFER_FULL_ERROR:
										"main" !== t.parent || this.state !== lt && this.state !== ut || (n ? (this._reduceMaxBufferLength(this.config.maxBufferLength), this.state = it) : (N.b.warn("buffer full error also media.currentTime is not buffered, flush everything"), this.fragCurrent = null, this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
								}
							}
						}, r.prototype._reduceMaxBufferLength = function(t) {
							var e = this.config;
							return e.maxMaxBufferLength >= t && (e.maxMaxBufferLength /= 2, N.b.warn("main:reduce max buffer length to " + e.maxMaxBufferLength + "s"), !0)
						}, r.prototype._checkBuffer = function() {
							var t = this.media,
								e = this.config;
							if (t && t.readyState) {
								var n = t.currentTime,
									i = (this.mediaBuffer ? this.mediaBuffer : t).buffered;
								if (!this.loadedmetadata && i.length) {
									this.loadedmetadata = !0;
									var r = t.seeking ? n : this.startPosition;
									n !== r && (N.b.log("target start position not buffered, seek to buffered.start(0) " + r + " from current time" + n + " "), t.currentTime = r)
								} else if (this.immediateSwitch) this.immediateLevelSwitchEnd();
								else {
									var o = B.bufferInfo(t, n, e.maxBufferHole),
										a = !(t.paused && 1 < t.readyState || t.ended || 0 === t.buffered.length);
									if (n !== this.lastCurrentTime) this.stallReported && (N.b.warn("playback not stuck anymore @" + n + ", after " + Math.round(performance.now() - this.stalled) + "ms"), this.stallReported = !1), this.stalled = void 0, this.nudgeRetry = 0;
									else if (a) {
										var s = performance.now(),
											l = this.hls;
										if (this.stalled) {
											var u = s - this.stalled,
												c = o.len,
												d = this.nudgeRetry || 0,
												h = this.fragmentTracker.getPartialFragment(n);
											if (null !== h)
												for (var f = 0, p = 0; p < t.buffered.length; p++) {
													var g = t.buffered.start(p);
													if (f <= n && n < g) return t.currentTime = Math.max(g, t.currentTime + .1), N.b.warn("skipping hole, adjusting currentTime from " + n + " to " + t.currentTime), this.stalled = void 0, void l.trigger(M.a.ERROR, {
														type: v.b.MEDIA_ERROR,
														details: v.a.BUFFER_SEEK_OVER_HOLE,
														fatal: !1,
														reason: "fragment loaded with buffer holes, seeking from " + n + " to " + t.currentTime,
														frag: h
													});
													f = t.buffered.end(p)
												}
											if (.5 < c && u > 1e3 * e.highBufferWatchdogPeriod)
												if (this.stallReported || (this.stallReported = !0, N.b.warn("playback stalling in high buffer @" + n), l.trigger(M.a.ERROR, {
														type: v.b.MEDIA_ERROR,
														details: v.a.BUFFER_STALLED_ERROR,
														fatal: !1,
														buffer: c
													})), this.stalled = void 0, this.nudgeRetry = ++d, d < e.nudgeMaxRetry) {
													var m = t.currentTime,
														y = m + d * e.nudgeOffset;
													N.b.log("adjust currentTime from " + m + " to " + y), t.currentTime = y, l.trigger(M.a.ERROR, {
														type: v.b.MEDIA_ERROR,
														details: v.a.BUFFER_NUDGE_ON_STALL,
														fatal: !1
													})
												} else N.b.error("still stuck in high buffer @" + n + " after " + e.nudgeMaxRetry + ", raise fatal error"), l.trigger(M.a.ERROR, {
													type: v.b.MEDIA_ERROR,
													details: v.a.BUFFER_STALLED_ERROR,
													fatal: !0
												})
										} else this.stalled = s, this.stallReported = !1
									}
								}
							}
						}, r.prototype.onFragLoadEmergencyAborted = function() {
							this.state = it, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tick()
						}, r.prototype.onBufferFlushed = function() {
							var t = this.mediaBuffer ? this.mediaBuffer : this.media;
							this.fragmentTracker.detectEvictedFragments(C.ElementaryStreamTypes.VIDEO, t.buffered), this.state = it, this.fragPrevious = null
						}, r.prototype.swapAudioCodec = function() {
							this.audioCodecSwap = !this.audioCodecSwap
						}, r.prototype.computeLivePosition = function(t, e) {
							var n = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * e.targetduration;
							return t + Math.max(0, e.totalduration - n)
						}, et(r, [{
							key: "state",
							set: function(t) {
								if (this.state !== t) {
									var e = this.state;
									this._state = t, N.b.log("main stream:" + e + "->" + t), this.hls.trigger(M.a.STREAM_STATE_TRANSITION, {
										previousState: e,
										nextState: t
									})
								}
							},
							get: function() {
								return this._state
							}
						}, {
							key: "currentLevel",
							get: function() {
								var t = this.media;
								if (t) {
									var e = this.getBufferedFrag(t.currentTime);
									if (e) return e.level
								}
								return -1
							}
						}, {
							key: "nextBufferedFrag",
							get: function() {
								var t = this.media;
								return t ? this.followingBufferedFrag(this.getBufferedFrag(t.currentTime)) : null
							}
						}, {
							key: "nextLevel",
							get: function() {
								var t = this.nextBufferedFrag;
								return t ? t.level : -1
							}
						}, {
							key: "liveSyncPosition",
							get: function() {
								return this._liveSyncPosition
							},
							set: function(t) {
								this._liveSyncPosition = t
							}
						}]), r
					}(tt),
					pt = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var gt = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MANIFEST_LOADED, M.a.LEVEL_LOADED, M.a.FRAG_LOADED, M.a.ERROR));
							return e.canload = !1, e.currentLevelIndex = null, e.manualLevelIndex = -1, e.timer = null, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.onHandlerDestroying = function() {
							this.cleanTimer(), this.manualLevelIndex = -1
						}, i.prototype.cleanTimer = function() {
							null !== this.timer && (clearTimeout(this.timer), this.timer = null)
						}, i.prototype.startLoad = function() {
							var t = this._levels;
							this.canload = !0, this.levelRetryCount = 0, t && t.forEach(function(t) {
								t.loadError = 0;
								var e = t.details;
								e && e.live && (t.details = void 0)
							}), null !== this.timer && this.loadLevel()
						}, i.prototype.stopLoad = function() {
							this.canload = !1
						}, i.prototype.onManifestLoaded = function(t) {
							var e = [],
								n = void 0,
								i = {},
								r = null,
								o = !1,
								a = !1,
								s = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
								l = [];
							if (t.levels.forEach(function(t) {
									t.loadError = 0, t.fragmentError = !1, o = o || !!t.videoCodec, a = a || !!t.audioCodec || !(!t.attrs || !t.attrs.AUDIO), !0 === s && t.audioCodec && -1 !== t.audioCodec.indexOf("mp4a.40.34") && (t.audioCodec = void 0), void 0 === (r = i[t.bitrate]) ? (t.url = [t.url], t.urlId = 0, i[t.bitrate] = t, e.push(t)) : r.url.push(t.url)
								}), !0 === o && !0 === a && (e = e.filter(function(t) {
									return !!t.videoCodec
								})), e = e.filter(function(t) {
									var e = t.audioCodec,
										n = t.videoCodec;
									return (!e || g(e)) && (!n || g(n))
								}), t.audioTracks && (l = t.audioTracks.filter(function(t) {
									return !t.audioCodec || g(t.audioCodec, "audio")
								})), 0 < e.length) {
								n = e[0].bitrate, e.sort(function(t, e) {
									return t.bitrate - e.bitrate
								}), this._levels = e;
								for (var u = 0; u < e.length; u++)
									if (e[u].bitrate === n) {
										this._firstLevel = u, N.b.log("manifest loaded," + e.length + " level(s) found, first bitrate:" + n);
										break
									} this.hls.trigger(M.a.MANIFEST_PARSED, {
									levels: e,
									audioTracks: l,
									firstLevel: this._firstLevel,
									stats: t.stats,
									audio: a,
									video: o,
									altAudio: 0 < l.length
								})
							} else this.hls.trigger(M.a.ERROR, {
								type: v.b.MEDIA_ERROR,
								details: v.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
								fatal: !0,
								url: this.hls.url,
								reason: "no level with compatible codecs found in manifest"
							})
						}, i.prototype.setLevelInternal = function(t) {
							var e = this._levels,
								n = this.hls;
							if (0 <= t && t < e.length) {
								if (this.cleanTimer(), this.currentLevelIndex !== t) {
									N.b.log("switching to level " + t);
									var i = e[this.currentLevelIndex = t];
									i.level = t, n.trigger(M.a.LEVEL_SWITCHING, i)
								}
								var r = e[t],
									o = r.details;
								if (!o || !0 === o.live) {
									var a = r.urlId;
									n.trigger(M.a.LEVEL_LOADING, {
										url: r.url[a],
										level: t,
										id: a
									})
								}
							} else n.trigger(M.a.ERROR, {
								type: v.b.OTHER_ERROR,
								details: v.a.LEVEL_SWITCH_ERROR,
								level: t,
								fatal: !1,
								reason: "invalid level idx"
							})
						}, i.prototype.onError = function(t) {
							if (!0 !== t.fatal) {
								var e = !1,
									n = !1,
									i = void 0;
								switch (t.details) {
									case v.a.FRAG_LOAD_ERROR:
									case v.a.FRAG_LOAD_TIMEOUT:
									case v.a.KEY_LOAD_ERROR:
									case v.a.KEY_LOAD_TIMEOUT:
										i = t.frag.level, n = !0;
										break;
									case v.a.LEVEL_LOAD_ERROR:
									case v.a.LEVEL_LOAD_TIMEOUT:
										i = t.context.level, e = !0;
										break;
									case v.a.REMUX_ALLOC_ERROR:
										i = t.level, e = !0
								}
								void 0 !== i && this.recoverLevel(t, i, e, n)
							} else t.type === v.b.NETWORK_ERROR && this.cleanTimer()
						}, i.prototype.recoverLevel = function(t, e, n, i) {
							var r = this,
								o = this.hls.config,
								a = t.details,
								s = this._levels[e],
								l = void 0,
								u = void 0,
								c = void 0;
							if (s.loadError++, s.fragmentError = i, !0 === n) {
								if (!(this.levelRetryCount + 1 <= o.levelLoadingMaxRetry)) return N.b.error("level controller, cannot recover from " + a + " error"), this.currentLevelIndex = null, this.cleanTimer(), void(t.fatal = !0);
								u = Math.min(Math.pow(2, this.levelRetryCount) * o.levelLoadingRetryDelay, o.levelLoadingMaxRetryTimeout), this.timer = setTimeout(function() {
									return r.loadLevel()
								}, u), t.levelRetry = !0, this.levelRetryCount++, N.b.warn("level controller, " + a + ", retry in " + u + " ms, current retry count is " + this.levelRetryCount)
							}!0 !== n && !0 !== i || (1 < (l = s.url.length) && s.loadError < l ? (N.b.warn("level controller, " + a + " for level " + e + ": switching to redundant stream id " + s.urlId), s.urlId = (s.urlId + 1) % l, s.details = void 0) : -1 === this.manualLevelIndex ? (c = 0 === e ? this._levels.length - 1 : e - 1, N.b.warn("level controller, " + a + ": switch to " + c), this.hls.nextAutoLevel = this.currentLevelIndex = c) : !0 === i && (N.b.warn("level controller, " + a + ": reload a fragment"), this.currentLevelIndex = null))
						}, i.prototype.onFragLoaded = function(t) {
							var e = t.frag;
							if (void 0 !== e && "main" === e.type) {
								var n = this._levels[e.level];
								void 0 !== n && (n.fragmentError = !1, n.loadError = 0, this.levelRetryCount = 0)
							}
						}, i.prototype.onLevelLoaded = function(t) {
							var e = this,
								n = t.level;
							if (n === this.currentLevelIndex) {
								var i = this._levels[n];
								!1 === i.fragmentError && (i.loadError = 0, this.levelRetryCount = 0);
								var r = t.details;
								if (r.live) {
									var o = 1e3 * (r.averagetargetduration ? r.averagetargetduration : r.targetduration),
										a = o,
										s = i.details;
									s && r.endSN === s.endSN && (a /= 2, N.b.log("same live playlist, reload twice faster")), a -= performance.now() - t.stats.trequest, a = Math.max(o / 2, Math.round(a)), N.b.log("live playlist, reload in " + Math.round(a) + " ms"), this.timer = setTimeout(function() {
										return e.loadLevel()
									}, a)
								} else this.cleanTimer()
							}
						}, i.prototype.loadLevel = function() {
							var t = void 0,
								e = void 0;
							null !== this.currentLevelIndex && !0 === this.canload && void 0 !== (t = this._levels[this.currentLevelIndex]) && 0 < t.url.length && (e = t.urlId, this.hls.trigger(M.a.LEVEL_LOADING, {
								url: t.url[e],
								level: this.currentLevelIndex,
								id: e
							}))
						}, pt(i, [{
							key: "levels",
							get: function() {
								return this._levels
							}
						}, {
							key: "level",
							get: function() {
								return this.currentLevelIndex
							},
							set: function(t) {
								var e = this._levels;
								e && (t = Math.min(t, e.length - 1), this.currentLevelIndex === t && void 0 !== e[t].details || this.setLevelInternal(t))
							}
						}, {
							key: "manualLevel",
							get: function() {
								return this.manualLevelIndex
							},
							set: function(t) {
								this.manualLevelIndex = t, void 0 === this._startLevel && (this._startLevel = t), -1 !== t && (this.level = t)
							}
						}, {
							key: "firstLevel",
							get: function() {
								return this._firstLevel
							},
							set: function(t) {
								this._firstLevel = t
							}
						}, {
							key: "startLevel",
							get: function() {
								if (void 0 === this._startLevel) {
									var t = this.hls.config.startLevel;
									return void 0 !== t ? t : this._firstLevel
								}
								return this._startLevel
							},
							set: function(t) {
								this._startLevel = t
							}
						}, {
							key: "nextLoadLevel",
							get: function() {
								return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
							},
							set: function(t) {
								this.level = t, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = t)
							}
						}]), i
					}(l),
					mt = n(4);

				function yt(t, e) {
					var n = null;
					try {
						n = new window.Event("addtrack")
					} catch (t) {
						(n = document.createEvent("Event")).initEvent("addtrack", !1, !1)
					}
					n.track = t, e.dispatchEvent(n)
				}

				function vt(t) {
					if (t && t.cues)
						for (; 0 < t.cues.length;) t.removeCue(t.cues[0])
				}
				var At = function(n) {
					function i(t) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i);
						var e = function(t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || "object" != typeof e && "function" != typeof e ? t : e
						}(this, n.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.FRAG_PARSING_METADATA));
						return e.id3Track = void 0, e.media = void 0, e
					}
					return function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}(i, n), i.prototype.destroy = function() {
						l.prototype.destroy.call(this)
					}, i.prototype.onMediaAttached = function(t) {
						this.media = t.media, this.media
					}, i.prototype.onMediaDetaching = function() {
						vt(this.id3Track), this.id3Track = void 0, this.media = void 0
					}, i.prototype.getID3Track = function(t) {
						for (var e = 0; e < t.length; e++) {
							var n = t[e];
							if ("metadata" === n.kind && "id3" === n.label) return yt(n, this.media), n
						}
						return this.media.addTextTrack("metadata", "id3")
					}, i.prototype.onFragParsingMetadata = function(t) {
						var e = t.frag,
							n = t.samples;
						this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
						for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, r = 0; r < n.length; r++) {
							var o = mt.a.getID3Frames(n[r].data);
							if (o) {
								var a = n[r].pts,
									s = r < n.length - 1 ? n[r + 1].pts : e.endPTS;
								a === s && (s += 1e-4);
								for (var l = 0; l < o.length; l++) {
									var u = o[l];
									if (!mt.a.isTimeStampFrame(u)) {
										var c = new i(a, s, "");
										c.value = u, this.id3Track.addCue(c)
									}
								}
							}
						}
					}, i
				}(l);
				var bt = function() {
					function e(t) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, e), this.alpha_ = t ? Math.exp(Math.log(.5) / t) : 0, this.estimate_ = 0, this.totalWeight_ = 0
					}
					return e.prototype.sample = function(t, e) {
						var n = Math.pow(this.alpha_, t);
						this.estimate_ = e * (1 - n) + n * this.estimate_, this.totalWeight_ += t
					}, e.prototype.getTotalWeight = function() {
						return this.totalWeight_
					}, e.prototype.getEstimate = function() {
						if (this.alpha_) {
							var t = 1 - Math.pow(this.alpha_, this.totalWeight_);
							return this.estimate_ / t
						}
						return this.estimate_
					}, e
				}();
				var _t = function() {
						function r(t, e, n, i) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, r), this.hls = t, this.defaultEstimate_ = i, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new bt(e), this.fast_ = new bt(n)
						}
						return r.prototype.sample = function(t, e) {
							var n = 8e3 * e / (t = Math.max(t, this.minDelayMs_)),
								i = t / 1e3;
							this.fast_.sample(i, n), this.slow_.sample(i, n)
						}, r.prototype.canEstimate = function() {
							var t = this.fast_;
							return t && t.getTotalWeight() >= this.minWeight_
						}, r.prototype.getEstimate = function() {
							return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
						}, r.prototype.destroy = function() {}, r
					}(),
					Et = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var Tt = function(n) {
					function i(t) {
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, i);
						var e = function(t, e) {
							if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
							return !e || "object" != typeof e && "function" != typeof e ? t : e
						}(this, n.call(this, t, M.a.FRAG_LOADING, M.a.FRAG_LOADED, M.a.FRAG_BUFFERED, M.a.ERROR));
						return e.lastLoadedFragLevel = 0, e._nextAutoLevel = -1, e.hls = t, e.timer = null, e._bwEstimator = null, e.onCheck = e._abandonRulesCheck.bind(e), e
					}
					return function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}(i, n), i.prototype.destroy = function() {
						this.clearTimer(), l.prototype.destroy.call(this)
					}, i.prototype.onFragLoading = function(t) {
						var e = t.frag;
						if ("main" === e.type) {
							if (this.timer || (this.timer = setInterval(this.onCheck, 100)), !this._bwEstimator) {
								var n = this.hls,
									i = t.frag.level,
									r = n.levels[i].details.live,
									o = n.config,
									a = void 0,
									s = void 0;
								r ? (a = o.abrEwmaFastLive, s = o.abrEwmaSlowLive) : (a = o.abrEwmaFastVoD, s = o.abrEwmaSlowVoD), this._bwEstimator = new _t(n, s, a, o.abrEwmaDefaultEstimate)
							}
							this.fragCurrent = e
						}
					}, i.prototype._abandonRulesCheck = function() {
						var t = this.hls,
							e = t.media,
							n = this.fragCurrent,
							i = n.loader,
							r = t.minAutoLevel;
						if (!i || i.stats && i.stats.aborted) return N.b.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
						var o = i.stats;
						if (e && o && (!e.paused && 0 !== e.playbackRate || !e.readyState) && n.autoLevel && n.level) {
							var a = performance.now() - o.trequest,
								s = Math.abs(e.playbackRate);
							if (a > 500 * n.duration / s) {
								var l = t.levels,
									u = Math.max(1, o.bw ? o.bw / 8 : 1e3 * o.loaded / a),
									c = l[n.level],
									d = c.realBitrate ? Math.max(c.realBitrate, c.bitrate) : c.bitrate,
									h = o.total ? o.total : Math.max(o.loaded, Math.round(n.duration * d / 8)),
									f = e.currentTime,
									p = (h - o.loaded) / u,
									g = (B.bufferInfo(e, f, t.config.maxBufferHole).end - f) / s;
								if (g < 2 * n.duration / s && g < p) {
									var m = void 0,
										y = void 0;
									for (y = n.level - 1; r < y; y--) {
										var v = l[y].realBitrate ? Math.max(l[y].realBitrate, l[y].bitrate) : l[y].bitrate;
										if ((m = n.duration * v / (6.4 * u)) < g) break
									}
									m < p && (N.b.warn("loading too slow, abort fragment loading and switch to level " + y + ":fragLoadedDelay[" + y + "]<fragLoadedDelay[" + (n.level - 1) + "];bufferStarvationDelay:" + m.toFixed(1) + "<" + p.toFixed(1) + ":" + g.toFixed(1)), t.nextLoadLevel = y, this._bwEstimator.sample(a, o.loaded), i.abort(), this.clearTimer(), t.trigger(M.a.FRAG_LOAD_EMERGENCY_ABORTED, {
										frag: n,
										stats: o
									}))
								}
							}
						}
					}, i.prototype.onFragLoaded = function(t) {
						var e = t.frag;
						if ("main" === e.type && !isNaN(e.sn)) {
							if (this.clearTimer(), this.lastLoadedFragLevel = e.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
								var n = this.hls.levels[e.level],
									i = (n.loaded ? n.loaded.bytes : 0) + t.stats.loaded,
									r = (n.loaded ? n.loaded.duration : 0) + t.frag.duration;
								n.loaded = {
									bytes: i,
									duration: r
								}, n.realBitrate = Math.round(8 * i / r)
							}
							if (t.frag.bitrateTest) {
								var o = t.stats;
								o.tparsed = o.tbuffered = o.tload, this.onFragBuffered(t)
							}
						}
					}, i.prototype.onFragBuffered = function(t) {
						var e = t.stats,
							n = t.frag;
						if (!(!0 === e.aborted || "main" !== n.type || isNaN(n.sn) || n.bitrateTest && e.tload !== e.tbuffered)) {
							var i = e.tparsed - e.trequest;
							N.b.log("latency/loading/parsing/append/kbps:" + Math.round(e.tfirst - e.trequest) + "/" + Math.round(e.tload - e.tfirst) + "/" + Math.round(e.tparsed - e.tload) + "/" + Math.round(e.tbuffered - e.tparsed) + "/" + Math.round(8 * e.loaded / (e.tbuffered - e.trequest))), this._bwEstimator.sample(i, e.loaded), e.bwEstimate = this._bwEstimator.getEstimate(), n.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
						}
					}, i.prototype.onError = function(t) {
						switch (t.details) {
							case v.a.FRAG_LOAD_ERROR:
							case v.a.FRAG_LOAD_TIMEOUT:
								this.clearTimer()
						}
					}, i.prototype.clearTimer = function() {
						clearInterval(this.timer), this.timer = null
					}, i.prototype._findBestLevel = function(t, e, n, i, r, o, a, s, l) {
						for (var u = r; i <= u; u--) {
							var c = l[u].details,
								d = c ? c.totalduration / c.fragments.length : e,
								h = !!c && c.live,
								f = void 0;
							f = u <= t ? a * n : s * n;
							var p = l[u].realBitrate ? Math.max(l[u].realBitrate, l[u].bitrate) : l[u].bitrate,
								g = p * d / f;
							if (N.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + u + "/" + Math.round(f) + "/" + p + "/" + d + "/" + o + "/" + g), p < f && (!g || h && !this.bitrateTestDelay || g < o)) return u
						}
						return -1
					}, Et(i, [{
						key: "nextAutoLevel",
						get: function() {
							var t = this._nextAutoLevel,
								e = this._bwEstimator;
							if (!(-1 === t || e && e.canEstimate())) return t;
							var n = this._nextABRAutoLevel;
							return -1 !== t && (n = Math.min(t, n)), n
						},
						set: function(t) {
							this._nextAutoLevel = t
						}
					}, {
						key: "_nextABRAutoLevel",
						get: function() {
							var t = this.hls,
								e = t.maxAutoLevel,
								n = t.levels,
								i = t.config,
								r = t.minAutoLevel,
								o = t.media,
								a = this.lastLoadedFragLevel,
								s = this.fragCurrent ? this.fragCurrent.duration : 0,
								l = o ? o.currentTime : 0,
								u = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
								c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
								d = (B.bufferInfo(o, l, i.maxBufferHole).end - l) / u,
								h = this._findBestLevel(a, s, c, r, e, d, i.abrBandWidthFactor, i.abrBandWidthUpFactor, n);
							if (0 <= h) return h;
							N.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
							var f = s ? Math.min(s, i.maxStarvationDelay) : i.maxStarvationDelay,
								p = i.abrBandWidthFactor,
								g = i.abrBandWidthUpFactor;
							if (0 === d) {
								var m = this.bitrateTestDelay;
								if (m) f = (s ? Math.min(s, i.maxLoadingDelay) : i.maxLoadingDelay) - m, N.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * f) + " ms"), p = g = 1
							}
							return h = this._findBestLevel(a, s, c, r, e, d + f, p, g, n), Math.max(h, 0)
						}
					}]), i
				}(l);
				var St = j(),
					wt = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MEDIA_ATTACHING, M.a.MEDIA_DETACHING, M.a.MANIFEST_PARSED, M.a.BUFFER_RESET, M.a.BUFFER_APPENDING, M.a.BUFFER_CODECS, M.a.BUFFER_EOS, M.a.BUFFER_FLUSHING, M.a.LEVEL_PTS_UPDATED, M.a.LEVEL_UPDATED));
							return e._msDuration = null, e._levelDuration = null, e._live = null, e._objectUrl = null, e.onsbue = e.onSBUpdateEnd.bind(e), e.onsbe = e.onSBUpdateError.bind(e), e.pendingTracks = {}, e.tracks = {}, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.destroy = function() {
							l.prototype.destroy.call(this)
						}, i.prototype.onLevelPtsUpdated = function(t) {
							var e = t.type,
								n = this.tracks.audio;
							if ("audio" === e && n && "audio/mpeg" === n.container) {
								var i = this.sourceBuffer.audio;
								if (.1 < Math.abs(i.timestampOffset - t.start)) {
									var r = i.updating;
									try {
										i.abort()
									} catch (t) {
										r = !0, N.b.warn("can not abort audio buffer: " + t)
									}
									r ? this.audioTimestampOffset = t.start : (N.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + t.start), i.timestampOffset = t.start)
								}
							}
						}, i.prototype.onManifestParsed = function(t) {
							var e = t.audio,
								n = t.video || t.levels.length && t.audio,
								i = 0;
							t.altAudio && (e || n) && (i = (e ? 1 : 0) + (n ? 1 : 0), N.b.log(i + " sourceBuffer(s) expected")), this.sourceBufferNb = i
						}, i.prototype.onMediaAttaching = function(t) {
							var e = this.media = t.media;
							if (e) {
								var n = this.mediaSource = new St;
								this.onmso = this.onMediaSourceOpen.bind(this), this.onmse = this.onMediaSourceEnded.bind(this), this.onmsc = this.onMediaSourceClose.bind(this), n.addEventListener("sourceopen", this.onmso), n.addEventListener("sourceended", this.onmse), n.addEventListener("sourceclose", this.onmsc), e.src = URL.createObjectURL(n), this._objectUrl = e.src
							}
						}, i.prototype.onMediaDetaching = function() {
							N.b.log("media source detaching");
							var t = this.mediaSource;
							if (t) {
								if ("open" === t.readyState) try {
									t.endOfStream()
								} catch (t) {
									N.b.warn("onMediaDetaching:" + t.message + " while calling endOfStream")
								}
								t.removeEventListener("sourceopen", this.onmso), t.removeEventListener("sourceended", this.onmse), t.removeEventListener("sourceclose", this.onmsc), this.media && (URL.revokeObjectURL(this._objectUrl), this.media.src === this._objectUrl ? (this.media.removeAttribute("src"), this.media.load()) : N.b.warn("media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.pendingTracks = {}, this.tracks = {}, this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
							}
							this.onmso = this.onmse = this.onmsc = null, this.hls.trigger(M.a.MEDIA_DETACHED)
						}, i.prototype.onMediaSourceOpen = function() {
							N.b.log("media source opened"), this.hls.trigger(M.a.MEDIA_ATTACHED, {
								media: this.media
							});
							var t = this.mediaSource;
							t && t.removeEventListener("sourceopen", this.onmso), this.checkPendingTracks()
						}, i.prototype.checkPendingTracks = function() {
							var t = this.pendingTracks,
								e = Object.keys(t).length;
							e && (this.sourceBufferNb <= e || 0 === this.sourceBufferNb) && (this.createSourceBuffers(t), this.pendingTracks = {}, this.doAppending())
						}, i.prototype.onMediaSourceClose = function() {
							N.b.log("media source closed")
						}, i.prototype.onMediaSourceEnded = function() {
							N.b.log("media source ended")
						}, i.prototype.onSBUpdateEnd = function() {
							if (this.audioTimestampOffset) {
								var t = this.sourceBuffer.audio;
								N.b.warn("change mpeg audio timestamp offset from " + t.timestampOffset + " to " + this.audioTimestampOffset), t.timestampOffset = this.audioTimestampOffset, delete this.audioTimestampOffset
							}
							this._needsFlush && this.doFlush(), this._needsEos && this.checkEos(), this.appending = !1;
							var n = this.parent,
								e = this.segments.reduce(function(t, e) {
									return e.parent === n ? t + 1 : t
								}, 0),
								i = {},
								r = this.sourceBuffer;
							for (var o in r) i[o] = r[o].buffered;
							this.hls.trigger(M.a.BUFFER_APPENDED, {
								parent: n,
								pending: e,
								timeRanges: i
							}), this._needsFlush || this.doAppending(), this.updateMediaElementDuration()
						}, i.prototype.onSBUpdateError = function(t) {
							N.b.error("sourceBuffer error:", t), this.hls.trigger(M.a.ERROR, {
								type: v.b.MEDIA_ERROR,
								details: v.a.BUFFER_APPENDING_ERROR,
								fatal: !1
							})
						}, i.prototype.onBufferReset = function() {
							var t = this.sourceBuffer;
							for (var e in t) {
								var n = t[e];
								try {
									this.mediaSource.removeSourceBuffer(n), n.removeEventListener("updateend", this.onsbue), n.removeEventListener("error", this.onsbe)
								} catch (t) {}
							}
							this.sourceBuffer = {}, this.flushRange = [], this.segments = [], this.appended = 0
						}, i.prototype.onBufferCodecs = function(t) {
							if (0 === Object.keys(this.sourceBuffer).length) {
								for (var e in t) this.pendingTracks[e] = t[e];
								var n = this.mediaSource;
								n && "open" === n.readyState && this.checkPendingTracks()
							}
						}, i.prototype.createSourceBuffers = function(t) {
							var e = this.sourceBuffer,
								n = this.mediaSource;
							for (var i in t)
								if (!e[i]) {
									var r = t[i],
										o = r.levelCodec || r.codec,
										a = r.container + ";codecs=" + o;
									N.b.log("creating sourceBuffer(" + a + ")");
									try {
										var s = e[i] = n.addSourceBuffer(a);
										s.addEventListener("updateend", this.onsbue), s.addEventListener("error", this.onsbe), this.tracks[i] = {
											codec: o,
											container: r.container
										}, r.buffer = s
									} catch (t) {
										N.b.error("error while trying to add sourceBuffer:" + t.message), this.hls.trigger(M.a.ERROR, {
											type: v.b.MEDIA_ERROR,
											details: v.a.BUFFER_ADD_CODEC_ERROR,
											fatal: !1,
											err: t,
											mimeType: a
										})
									}
								} this.hls.trigger(M.a.BUFFER_CREATED, {
								tracks: t
							})
						}, i.prototype.onBufferAppending = function(t) {
							this._needsFlush || (this.segments ? this.segments.push(t) : this.segments = [t], this.doAppending())
						}, i.prototype.onBufferAppendFail = function(t) {
							N.b.error("sourceBuffer error:", t.event), this.hls.trigger(M.a.ERROR, {
								type: v.b.MEDIA_ERROR,
								details: v.a.BUFFER_APPENDING_ERROR,
								fatal: !1
							})
						}, i.prototype.onBufferEos = function(t) {
							var e = this.sourceBuffer,
								n = t.type;
							for (var i in e) n && i !== n || e[i].ended || (e[i].ended = !0, N.b.log(i + " sourceBuffer now EOS"));
							this.checkEos()
						}, i.prototype.checkEos = function() {
							var t = this.sourceBuffer,
								e = this.mediaSource;
							if (e && "open" === e.readyState) {
								for (var n in t) {
									var i = t[n];
									if (!i.ended) return;
									if (i.updating) return void(this._needsEos = !0)
								}
								N.b.log("all media data available, signal endOfStream() to MediaSource and stop loading fragment");
								try {
									e.endOfStream()
								} catch (t) {
									N.b.warn("exception while calling mediaSource.endOfStream()")
								}
								this._needsEos = !1
							} else this._needsEos = !1
						}, i.prototype.onBufferFlushing = function(t) {
							this.flushRange.push({
								start: t.startOffset,
								end: t.endOffset,
								type: t.type
							}), this.flushBufferCounter = 0, this.doFlush()
						}, i.prototype.onLevelUpdated = function(t) {
							var e = t.details;
							0 < e.fragments.length && (this._levelDuration = e.totalduration + e.fragments[0].start, this._live = e.live, this.updateMediaElementDuration())
						}, i.prototype.updateMediaElementDuration = function() {
							var t, e = this.hls.config;
							if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
								for (var n in this.sourceBuffer)
									if (!0 === this.sourceBuffer[n].updating) return;
								t = this.media.duration, null === this._msDuration && (this._msDuration = this.mediaSource.duration), !0 === this._live && !0 === e.liveDurationInfinity ? (N.b.log("Media Source duration is set to Infinity"), this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > t || t === 1 / 0 || isNaN(t)) && (N.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)), this._msDuration = this.mediaSource.duration = this._levelDuration)
							}
						}, i.prototype.doFlush = function() {
							for (; this.flushRange.length;) {
								var t = this.flushRange[0];
								if (!this.flushBuffer(t.start, t.end, t.type)) return void(this._needsFlush = !0);
								this.flushRange.shift(), this.flushBufferCounter = 0
							}
							if (0 === this.flushRange.length) {
								this._needsFlush = !1;
								var e = 0,
									n = this.sourceBuffer;
								try {
									for (var i in n) e += n[i].buffered.length
								} catch (t) {
									N.b.error("error while accessing sourceBuffer.buffered")
								}
								this.appended = e, this.hls.trigger(M.a.BUFFER_FLUSHED)
							}
						}, i.prototype.doAppending = function() {
							var e = this.hls,
								t = this.sourceBuffer,
								n = this.segments;
							if (Object.keys(t).length) {
								if (this.media.error) return this.segments = [], void N.b.error("trying to append although a media error occured, flush segment and abort");
								if (this.appending) return;
								if (n && n.length) {
									var i = n.shift();
									try {
										var r = t[i.type];
										r ? r.updating ? n.unshift(i) : (r.ended = !1, this.parent = i.parent, r.appendBuffer(i.data), this.appendError = 0, this.appended++, this.appending = !0) : this.onSBUpdateEnd()
									} catch (t) {
										N.b.error("error while trying to append buffer:" + t.message), n.unshift(i);
										var o = {
											type: v.b.MEDIA_ERROR,
											parent: i.parent
										};
										22 !== t.code ? (this.appendError ? this.appendError++ : this.appendError = 1, o.details = v.a.BUFFER_APPEND_ERROR, this.appendError > e.config.appendErrorMaxRetry ? (N.b.log("fail " + e.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), n = [], o.fatal = !0) : o.fatal = !1) : (this.segments = [], o.details = v.a.BUFFER_FULL_ERROR, o.fatal = !1), e.trigger(M.a.ERROR, o)
									}
								}
							}
						}, i.prototype.flushBuffer = function(t, e, n) {
							var i = void 0,
								r = void 0,
								o = void 0,
								a = void 0,
								s = void 0,
								l = void 0,
								u = this.sourceBuffer;
							if (Object.keys(u).length) {
								if (N.b.log("flushBuffer,pos/start/end: " + this.media.currentTime.toFixed(3) + "/" + t + "/" + e), this.flushBufferCounter < this.appended) {
									for (var c in u)
										if (!n || c === n) {
											if ((i = u[c]).ended = !1, i.updating) return N.b.warn("cannot flush, sb updating in progress"), !1;
											try {
												for (r = 0; r < i.buffered.length; r++)
													if (o = i.buffered.start(r), a = i.buffered.end(r), -1 !== navigator.userAgent.toLowerCase().indexOf("firefox") && e === Number.POSITIVE_INFINITY ? (s = t, l = e) : (s = Math.max(o, t), l = Math.min(a, e)), .5 < Math.min(l, a) - s) return this.flushBufferCounter++, N.b.log("flush " + c + " [" + s + "," + l + "], of [" + o + "," + a + "], pos:" + this.media.currentTime), i.remove(s, l), !1
											} catch (t) {
												N.b.warn("exception while accessing sourcebuffer, it might have been removed from MediaSource")
											}
										}
								} else N.b.warn("abort flushing too many retries");
								N.b.log("buffer flushed")
							}
							return !0
						}, i
					}(l),
					Ct = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var Lt = function(e) {
					function r(t) {
						return function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, r),
							function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, e.call(this, t, M.a.FPS_DROP_LEVEL_CAPPING, M.a.MEDIA_ATTACHING, M.a.MANIFEST_PARSED))
					}
					return function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}(r, e), r.prototype.destroy = function() {
						this.hls.config.capLevelToPlayerSize && (this.media = this.restrictedLevels = null, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (this.timer = clearInterval(this.timer)))
					}, r.prototype.onFpsDropLevelCapping = function(t) {
						r.isLevelAllowed(t.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(t.droppedLevel)
					}, r.prototype.onMediaAttaching = function(t) {
						this.media = t.media instanceof HTMLVideoElement ? t.media : null
					}, r.prototype.onManifestParsed = function(t) {
						var e = this.hls;
						this.restrictedLevels = [], e.config.capLevelToPlayerSize && (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.levels = t.levels, e.firstLevel = this.getMaxLevel(t.firstLevel), clearInterval(this.timer), this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
					}, r.prototype.detectPlayerSize = function() {
						if (this.media) {
							var t = this.levels ? this.levels.length : 0;
							if (t) {
								var e = this.hls;
								e.autoLevelCapping = this.getMaxLevel(t - 1), e.autoLevelCapping > this.autoLevelCapping && e.streamController.nextLevelSwitch(), this.autoLevelCapping = e.autoLevelCapping
							}
						}
					}, r.prototype.getMaxLevel = function(n) {
						var i = this;
						if (!this.levels) return -1;
						var t = this.levels.filter(function(t, e) {
							return r.isLevelAllowed(e, i.restrictedLevels) && e <= n
						});
						return r.getMaxLevelByMediaSize(t, this.mediaWidth, this.mediaHeight)
					}, r.isLevelAllowed = function(t) {
						return -1 === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : []).indexOf(t)
					}, r.getMaxLevelByMediaSize = function(t, e, n) {
						if (!t || t && !t.length) return -1;
						for (var i, r, o = t.length - 1, a = 0; a < t.length; a += 1) {
							var s = t[a];
							if ((s.width >= e || s.height >= n) && (i = s, !(r = t[a + 1]) || i.width !== r.width || i.height !== r.height)) {
								o = a;
								break
							}
						}
						return o
					}, Ct(r, [{
						key: "mediaWidth",
						get: function() {
							var t = void 0,
								e = this.media;
							return e && (t = e.width || e.clientWidth || e.offsetWidth, t *= r.contentScaleFactor), t
						}
					}, {
						key: "mediaHeight",
						get: function() {
							var t = void 0,
								e = this.media;
							return e && (t = e.height || e.clientHeight || e.offsetHeight, t *= r.contentScaleFactor), t
						}
					}], [{
						key: "contentScaleFactor",
						get: function() {
							var t = 1;
							try {
								t = window.devicePixelRatio
							} catch (t) {}
							return t
						}
					}]), r
				}(l);
				var kt = function(e) {
					function n(t) {
						return function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, n),
							function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, e.call(this, t, M.a.MEDIA_ATTACHING))
					}
					return function(t, e) {
						if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
						t.prototype = Object.create(e && e.prototype, {
							constructor: {
								value: t,
								enumerable: !1,
								writable: !0,
								configurable: !0
							}
						}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
					}(n, e), n.prototype.destroy = function() {
						this.timer && clearInterval(this.timer), this.isVideoPlaybackQualityAvailable = !1
					}, n.prototype.onMediaAttaching = function(t) {
						var e = this.hls.config;
						e.capLevelOnFPSDrop && ("function" == typeof(this.video = t.media instanceof HTMLVideoElement ? t.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), clearInterval(this.timer), this.timer = setInterval(this.checkFPSInterval.bind(this), e.fpsDroppedMonitoringPeriod))
					}, n.prototype.checkFPS = function(t, e, n) {
						var i = performance.now();
						if (e) {
							if (this.lastTime) {
								var r = i - this.lastTime,
									o = n - this.lastDroppedFrames,
									a = e - this.lastDecodedFrames,
									s = 1e3 * o / r,
									l = this.hls;
								if (l.trigger(M.a.FPS_DROP, {
										currentDropped: o,
										currentDecoded: a,
										totalDroppedFrames: n
									}), 0 < s && o > l.config.fpsDroppedMonitoringThreshold * a) {
									var u = l.currentLevel;
									N.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + u), 0 < u && (-1 === l.autoLevelCapping || l.autoLevelCapping >= u) && (u -= 1, l.trigger(M.a.FPS_DROP_LEVEL_CAPPING, {
										level: u,
										droppedLevel: l.currentLevel
									}), l.autoLevelCapping = u, l.streamController.nextLevelSwitch())
								}
							}
							this.lastTime = i, this.lastDroppedFrames = n, this.lastDecodedFrames = e
						}
					}, n.prototype.checkFPSInterval = function() {
						var t = this.video;
						if (t)
							if (this.isVideoPlaybackQualityAvailable) {
								var e = t.getVideoPlaybackQuality();
								this.checkFPS(t, e.totalVideoFrames, e.droppedVideoFrames)
							} else this.checkFPS(t, t.webkitDecodedFrameCount, t.webkitDroppedFrameCount)
					}, n
				}(l);
				var xt = function() {
						function e(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, e), t && t.xhrSetup && (this.xhrSetup = t.xhrSetup)
						}
						return e.prototype.destroy = function() {
							this.abort(), this.loader = null
						}, e.prototype.abort = function() {
							var t = this.loader;
							t && 4 !== t.readyState && (this.stats.aborted = !0, t.abort()), window.clearTimeout(this.requestTimeout), this.requestTimeout = null, window.clearTimeout(this.retryTimeout), this.retryTimeout = null
						}, e.prototype.load = function(t, e, n) {
							this.context = t, this.config = e, this.callbacks = n, this.stats = {
								trequest: performance.now(),
								retry: 0
							}, this.retryDelay = e.retryDelay, this.loadInternal()
						}, e.prototype.loadInternal = function() {
							var e = void 0,
								n = this.context;
							e = this.loader = new XMLHttpRequest;
							var t = this.stats;
							t.tfirst = 0, t.loaded = 0;
							var i = this.xhrSetup;
							try {
								if (i) try {
									i(e, n.url)
								} catch (t) {
									e.open("GET", n.url, !0), i(e, n.url)
								}
								e.readyState || e.open("GET", n.url, !0)
							} catch (t) {
								return void this.callbacks.onError({
									code: e.status,
									text: t.message
								}, n, e)
							}
							n.rangeEnd && e.setRequestHeader("Range", "bytes=" + n.rangeStart + "-" + (n.rangeEnd - 1)), e.onreadystatechange = this.readystatechange.bind(this), e.onprogress = this.loadprogress.bind(this), e.responseType = n.responseType, this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout), e.send()
						}, e.prototype.readystatechange = function(t) {
							var e = t.currentTarget,
								n = e.readyState,
								i = this.stats,
								r = this.context,
								o = this.config;
							if (!i.aborted && 2 <= n)
								if (window.clearTimeout(this.requestTimeout), 0 === i.tfirst && (i.tfirst = Math.max(performance.now(), i.trequest)), 4 === n) {
									var a = e.status;
									if (200 <= a && a < 300) {
										i.tload = Math.max(i.tfirst, performance.now());
										var s = void 0,
											l = void 0;
										l = "arraybuffer" === r.responseType ? (s = e.response).byteLength : (s = e.responseText).length, i.loaded = i.total = l;
										var u = {
											url: e.responseURL,
											data: s
										};
										this.callbacks.onSuccess(u, i, r, e)
									} else i.retry >= o.maxRetry || 400 <= a && a < 499 ? (N.b.error(a + " while loading " + r.url), this.callbacks.onError({
										code: a,
										text: e.statusText
									}, r, e)) : (N.b.warn(a + " while loading " + r.url + ", retrying in " + this.retryDelay + "..."), this.destroy(), this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, o.maxRetryDelay), i.retry++)
								} else this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), o.timeout)
						}, e.prototype.loadtimeout = function() {
							N.b.warn("timeout while loading " + this.context.url), this.callbacks.onTimeout(this.stats, this.context, null)
						}, e.prototype.loadprogress = function(t) {
							var e = t.currentTarget,
								n = this.stats;
							n.loaded = t.loaded, t.lengthComputable && (n.total = t.total);
							var i = this.callbacks.onProgress;
							i && i(n, this.context, null, e)
						}, e
					}(),
					Rt = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var Ot = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MANIFEST_LOADING, M.a.MANIFEST_PARSED, M.a.AUDIO_TRACK_LOADED, M.a.ERROR));
							return e.ticks = 0, e.ontick = e.tick.bind(e), e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.destroy = function() {
							this.cleanTimer(), l.prototype.destroy.call(this)
						}, i.prototype.cleanTimer = function() {
							this.timer && (clearTimeout(this.timer), this.timer = null)
						}, i.prototype.tick = function() {
							this.ticks++, 1 === this.ticks && (this.doTick(), 1 < this.ticks && setTimeout(this.tick, 1), this.ticks = 0)
						}, i.prototype.doTick = function() {
							this.updateTrack(this.trackId)
						}, i.prototype.onError = function(t) {
							t.fatal && t.type === v.b.NETWORK_ERROR && this.cleanTimer()
						}, i.prototype.onManifestLoading = function() {
							this.tracks = [], this.trackId = -1
						}, i.prototype.onManifestParsed = function(t) {
							var e = this,
								n = t.audioTracks || [],
								i = !1;
							this.tracks = n, this.hls.trigger(M.a.AUDIO_TRACKS_UPDATED, {
								audioTracks: n
							});
							var r = 0;
							n.forEach(function(t) {
								if (t.default && !i) return e.audioTrack = r, void(i = !0);
								r++
							}), !1 === i && n.length && (N.b.log("no default audio track defined, use first audio track as default"), this.audioTrack = 0)
						}, i.prototype.onAudioTrackLoaded = function(t) {
							t.id < this.tracks.length && (N.b.log("audioTrack " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(this.ontick, 1e3 * t.details.targetduration)), !t.details.live && this.timer && this.cleanTimer())
						}, i.prototype.setAudioTrackInternal = function(t) {
							if (0 <= t && t < this.tracks.length) {
								this.cleanTimer(), this.trackId = t, N.b.log("switching to audioTrack " + t);
								var e = this.tracks[t],
									n = this.hls,
									i = e.type,
									r = e.url,
									o = {
										id: t,
										type: i,
										url: r
									};
								n.trigger(M.a.AUDIO_TRACK_SWITCHING, o);
								var a = e.details;
								!r || void 0 !== a && !0 !== a.live || (N.b.log("(re)loading playlist for audioTrack " + t), n.trigger(M.a.AUDIO_TRACK_LOADING, {
									url: r,
									id: t
								}))
							}
						}, i.prototype.updateTrack = function(t) {
							if (0 <= t && t < this.tracks.length) {
								this.cleanTimer(), this.trackId = t, N.b.log("updating audioTrack " + t);
								var e = this.tracks[t],
									n = e.url,
									i = e.details;
								!n || void 0 !== i && !0 !== i.live || (N.b.log("(re)loading playlist for audioTrack " + t), this.hls.trigger(M.a.AUDIO_TRACK_LOADING, {
									url: n,
									id: t
								}))
							}
						}, Rt(i, [{
							key: "audioTracks",
							get: function() {
								return this.tracks
							}
						}, {
							key: "audioTrack",
							get: function() {
								return this.trackId
							},
							set: function(t) {
								this.trackId === t && void 0 !== this.tracks[t].details || this.setAudioTrackInternal(t)
							}
						}]), i
					}(l),
					It = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var Dt = "STOPPED",
					Pt = "STARTING",
					Mt = "IDLE",
					Nt = "PAUSED",
					Ft = "KEY_LOADING",
					Bt = "FRAG_LOADING",
					Ut = "FRAG_LOADING_WAITING_RETRY",
					jt = "WAITING_TRACK",
					Kt = "PARSING",
					Gt = "PARSED",
					Ht = "BUFFER_FLUSHING",
					Yt = "ENDED",
					Vt = "ERROR",
					zt = "WAITING_INIT_PTS",
					$t = function(i) {
						function r(t, e) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, r);
							var n = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, i.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.AUDIO_TRACKS_UPDATED, M.a.AUDIO_TRACK_SWITCHING, M.a.AUDIO_TRACK_LOADED, M.a.KEY_LOADED, M.a.FRAG_LOADED, M.a.FRAG_PARSING_INIT_SEGMENT, M.a.FRAG_PARSING_DATA, M.a.FRAG_PARSED, M.a.ERROR, M.a.BUFFER_RESET, M.a.BUFFER_CREATED, M.a.BUFFER_APPENDED, M.a.BUFFER_FLUSHED, M.a.INIT_PTS_FOUND));
							return n.fragmentTracker = e, n.config = t.config, n.audioCodecSwap = !1, n._state = Dt, n.initPTS = [], n.waitingFragment = null, n.videoTrackCC = null, n
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(r, i), r.prototype.onHandlerDestroying = function() {
							this.stopLoad()
						}, r.prototype.onHandlerDestroyed = function() {
							this.state = Dt, this.fragmentTracker = null
						}, r.prototype.onInitPtsFound = function(t) {
							var e = t.id,
								n = t.frag.cc,
								i = t.initPTS;
							"main" === e && (this.initPTS[n] = i, this.videoTrackCC = n, N.b.log("InitPTS for cc: " + n + " found from video track: " + i), this.state === zt && this.tick())
						}, r.prototype.startLoad = function(t) {
							if (this.tracks) {
								var e = this.lastCurrentTime;
								this.stopLoad(), this.setInterval(100), (this.fragLoadError = 0) < e && -1 === t ? (N.b.log("audio:override startPosition with lastCurrentTime @" + e.toFixed(3)), this.state = Mt) : (this.lastCurrentTime = this.startPosition ? this.startPosition : t, this.state = Pt), this.nextLoadPosition = this.startPosition = this.lastCurrentTime, this.tick()
							} else this.startPosition = t, this.state = Dt
						}, r.prototype.stopLoad = function() {
							var t = this.fragCurrent;
							t && (t.loader && t.loader.abort(), this.fragmentTracker.removeFragment(t), this.fragCurrent = null), this.fragPrevious = null, this.demuxer && (this.demuxer.destroy(), this.demuxer = null), this.state = Dt
						}, r.prototype.doTick = function() {
							var t, e, n = void 0,
								i = void 0,
								r = void 0,
								o = this.hls,
								a = o.config;
							switch (this.state) {
								case Vt:
								case Nt:
								case Ht:
									break;
								case Pt:
									this.state = jt, this.loadedmetadata = !1;
									break;
								case Mt:
									var s = this.tracks;
									if (!s) break;
									if (!this.media && (this.startFragRequested || !a.startFragPrefetch)) break;
									if (this.loadedmetadata) n = this.media.currentTime;
									else if (void 0 === (n = this.nextLoadPosition)) break;
									var l = this.mediaBuffer ? this.mediaBuffer : this.media,
										u = this.videoBuffer ? this.videoBuffer : this.media,
										c = B.bufferInfo(l, n, a.maxBufferHole),
										d = B.bufferInfo(u, n, a.maxBufferHole),
										h = c.len,
										f = c.end,
										p = this.fragPrevious,
										g = Math.min(a.maxBufferLength, a.maxMaxBufferLength),
										m = Math.max(g, d.len),
										y = this.audioSwitch,
										v = this.trackId;
									if ((h < m || y) && v < s.length) {
										if (void 0 === (r = s[v].details)) {
											this.state = jt;
											break
										}
										if (!y && !r.live && p && p.sn === r.endSN && !c.nextStart && (!this.media.seeking || this.media.duration - f < p.duration / 2)) {
											this.hls.trigger(M.a.BUFFER_EOS, {
												type: "audio"
											}), this.state = Yt;
											break
										}
										var A = r.fragments,
											b = A.length,
											_ = A[0].start,
											E = A[b - 1].start + A[b - 1].duration,
											T = void 0;
										if (y)
											if (r.live && !r.PTSKnown) N.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"), f = 0;
											else if (f = n, r.PTSKnown && n < _) {
											if (!(c.end > _ || c.nextStart)) return;
											N.b.log("alt audio track ahead of main track, seek to start of alt audio track"), this.media.currentTime = _ + .05
										}
										if (r.initSegment && !r.initSegment.data) T = r.initSegment;
										else if (f <= _) {
											if (T = A[0], null !== this.videoTrackCC && T.cc !== this.videoTrackCC && (t = A, e = this.videoTrackCC, T = F.search(t, function(t) {
													return t.cc < e ? 1 : t.cc > e ? -1 : 0
												})), r.live && T.loadIdx && T.loadIdx === this.fragLoadIdx) {
												var S = c.nextStart ? c.nextStart : _;
												return N.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (S + .05)), void(this.media.currentTime = S + .05)
											}
										} else {
											var w = void 0,
												C = a.maxFragLookUpTolerance,
												L = p ? A[p.sn - A[0].sn + 1] : void 0,
												k = function(t) {
													var e = Math.min(C, t.duration);
													return t.start + t.duration - e <= f ? 1 : t.start - e > f && t.start ? -1 : 0
												};
											f < E ? (E - C < f && (C = 0), w = L && !k(L) ? L : F.search(A, k)) : w = A[b - 1], w && (_ = (T = w).start, p && T.level === p.level && T.sn === p.sn && (T.sn < r.endSN ? (T = A[T.sn + 1 - r.startSN], N.b.log("SN just loaded, load next one: " + T.sn)) : T = null))
										}
										T && (T.decryptdata && null != T.decryptdata.uri && null == T.decryptdata.key ? (N.b.log("Loading key for " + T.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + v), this.state = Ft, o.trigger(M.a.KEY_LOADING, {
											frag: T
										})) : (N.b.log("Loading " + T.sn + ", cc: " + T.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + v + ", currentTime:" + n + ",bufferEnd:" + f.toFixed(3)), this.fragmentTracker.getState(T) === H && (this.fragCurrent = T, this.startFragRequested = !0, isNaN(T.sn) || (this.nextLoadPosition = T.start + T.duration), o.trigger(M.a.FRAG_LOADING, {
											frag: T
										}), this.state = Bt)))
									}
									break;
								case jt:
									(i = this.tracks[this.trackId]) && i.details && (this.state = Mt);
									break;
								case Ut:
									var x = performance.now(),
										R = this.retryDate,
										O = (l = this.media) && l.seeking;
									(!R || R <= x || O) && (N.b.log("audioStreamController: retryDate reached, switch back to IDLE state"), this.state = Mt);
									break;
								case zt:
									var I = this.videoTrackCC;
									if (void 0 === this.initPTS[I]) break;
									var D = this.waitingFragment;
									if (D) {
										var P = D.frag.cc;
										I !== P ? (i = this.tracks[this.trackId]).details && i.details.live && (N.b.warn("Waiting fragment CC (" + P + ") does not match video track CC (" + I + ")"), this.waitingFragment = null, this.state = Mt) : (this.state = Bt, this.onFragLoaded(this.waitingFragment), this.waitingFragment = null)
									} else this.state = Mt
							}
						}, r.prototype.onMediaAttached = function(t) {
							var e = this.media = this.mediaBuffer = t.media;
							this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), e.addEventListener("seeking", this.onvseeking), e.addEventListener("ended", this.onvended);
							var n = this.config;
							this.tracks && n.autoStartLoad && this.startLoad(n.startPosition)
						}, r.prototype.onMediaDetaching = function() {
							var t = this.media;
							t && t.ended && (N.b.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), t && (t.removeEventListener("seeking", this.onvseeking), t.removeEventListener("ended", this.onvended), this.onvseeking = this.onvseeked = this.onvended = null), this.media = this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1, this.stopLoad()
						}, r.prototype.onMediaSeeking = function() {
							this.state === Yt && (this.state = Mt), this.media && (this.lastCurrentTime = this.media.currentTime), this.tick()
						}, r.prototype.onMediaEnded = function() {
							this.startPosition = this.lastCurrentTime = 0
						}, r.prototype.onAudioTracksUpdated = function(t) {
							N.b.log("audio tracks updated"), this.tracks = t.audioTracks
						}, r.prototype.onAudioTrackSwitching = function(t) {
							var e = !!t.url;
							this.trackId = t.id, this.fragCurrent = null, this.state = Nt, this.waitingFragment = null, e ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(), this.demuxer = null), e && (this.audioSwitch = !0, this.state = Mt), this.tick()
						}, r.prototype.onAudioTrackLoaded = function(t) {
							var e = t.details,
								n = t.id,
								i = this.tracks[n],
								r = e.totalduration,
								o = 0;
							if (N.b.log("track " + n + " loaded [" + e.startSN + "," + e.endSN + "],duration:" + r), e.live) {
								var a = i.details;
								a && 0 < e.fragments.length ? (X(a, e), o = e.fragments[0].start, e.PTSKnown ? N.b.log("live audio playlist sliding:" + o.toFixed(3)) : N.b.log("live audio playlist - outdated PTS, unknown sliding")) : (e.PTSKnown = !1, N.b.log("live audio playlist - first load, unknown sliding"))
							} else e.PTSKnown = !1;
							if (i.details = e, !this.startFragRequested) {
								if (-1 === this.startPosition) {
									var s = e.startTimeOffset;
									isNaN(s) ? this.startPosition = 0 : (N.b.log("start time offset found in playlist, adjust startPosition to " + s), this.startPosition = s)
								}
								this.nextLoadPosition = this.startPosition
							}
							this.state === jt && (this.state = Mt), this.tick()
						}, r.prototype.onKeyLoaded = function() {
							this.state === Ft && (this.state = Mt, this.tick())
						}, r.prototype.onFragLoaded = function(t) {
							var e = this.fragCurrent,
								n = t.frag;
							if (this.state === Bt && e && "audio" === n.type && n.level === e.level && n.sn === e.sn) {
								var i = this.tracks[this.trackId],
									r = i.details,
									o = r.totalduration,
									a = e.level,
									s = e.sn,
									l = e.cc,
									u = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2",
									c = this.stats = t.stats;
								if ("initSegment" === s) this.state = Mt, c.tparsed = c.tbuffered = performance.now(), r.initSegment.data = t.payload, this.hls.trigger(M.a.FRAG_BUFFERED, {
									stats: c,
									frag: e,
									id: "audio"
								}), this.tick();
								else {
									this.state = Kt, this.appended = !1, this.demuxer || (this.demuxer = new G(this.hls, "audio"));
									var d = this.initPTS[l],
										h = r.initSegment ? r.initSegment.data : [];
									if (r.initSegment || void 0 !== d) {
										this.pendingBuffering = !0, N.b.log("Demuxing " + s + " of [" + r.startSN + " ," + r.endSN + "],track " + a);
										this.demuxer.push(t.payload, h, u, null, e, o, !1, d)
									} else N.b.log("unknown video PTS for continuity counter " + l + ", waiting for video PTS before demuxing audio frag " + s + " of [" + r.startSN + " ," + r.endSN + "],track " + a), this.waitingFragment = t, this.state = zt
								}
							}
							this.fragLoadError = 0
						}, r.prototype.onFragParsingInitSegment = function(t) {
							var e = this.fragCurrent,
								n = t.frag;
							if (e && "audio" === t.id && n.sn === e.sn && n.level === e.level && this.state === Kt) {
								var i = t.tracks,
									r = void 0;
								if (i.video && delete i.video, r = i.audio) {
									r.levelCodec = r.codec, r.id = t.id, this.hls.trigger(M.a.BUFFER_CODECS, i), N.b.log("audio track:audio,container:" + r.container + ",codecs[level/parsed]=[" + r.levelCodec + "/" + r.codec + "]");
									var o = r.initSegment;
									if (o) {
										var a = {
											type: "audio",
											data: o,
											parent: "audio",
											content: "initSegment"
										};
										this.audioSwitch ? this.pendingData = [a] : (this.appended = !0, this.pendingBuffering = !0, this.hls.trigger(M.a.BUFFER_APPENDING, a))
									}
									this.tick()
								}
							}
						}, r.prototype.onFragParsingData = function(e) {
							var n = this,
								t = this.fragCurrent,
								i = e.frag;
							if (t && "audio" === e.id && "audio" === e.type && i.sn === t.sn && i.level === t.level && this.state === Kt) {
								var r = this.trackId,
									o = this.tracks[r],
									a = this.hls;
								isNaN(e.endPTS) && (e.endPTS = e.startPTS + t.duration, e.endDTS = e.startDTS + t.duration), t.addElementaryStream(C.ElementaryStreamTypes.AUDIO), N.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb), q(o.details, t, e.startPTS, e.endPTS);
								var s = this.audioSwitch,
									l = this.media,
									u = !1;
								if (s && l)
									if (l.readyState) {
										var c = l.currentTime;
										N.b.log("switching audio track : currentTime:" + c), c >= e.startPTS && (N.b.log("switching audio track : flushing all audio"), this.state = Ht, a.trigger(M.a.BUFFER_FLUSHING, {
											startOffset: 0,
											endOffset: Number.POSITIVE_INFINITY,
											type: "audio"
										}), u = !0, this.audioSwitch = !1, a.trigger(M.a.AUDIO_TRACK_SWITCHED, {
											id: r
										}))
									} else this.audioSwitch = !1, a.trigger(M.a.AUDIO_TRACK_SWITCHED, {
										id: r
									});
								var d = this.pendingData;
								if (!d) return console.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"), void a.trigger(M.a.ERROR, {
									type: v.b.MEDIA_ERROR,
									details: null,
									fatal: !0
								});
								this.audioSwitch || ([e.data1, e.data2].forEach(function(t) {
									t && t.length && d.push({
										type: e.type,
										data: t,
										parent: "audio",
										content: "data"
									})
								}), !u && d.length && (d.forEach(function(t) {
									n.state === Kt && (n.pendingBuffering = !0, n.hls.trigger(M.a.BUFFER_APPENDING, t))
								}), this.pendingData = [], this.appended = !0)), this.tick()
							}
						}, r.prototype.onFragParsed = function(t) {
							var e = this.fragCurrent,
								n = t.frag;
							e && "audio" === t.id && n.sn === e.sn && n.level === e.level && this.state === Kt && (this.stats.tparsed = performance.now(), this.state = Gt, this._checkAppendedParsed())
						}, r.prototype.onBufferReset = function() {
							this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
						}, r.prototype.onBufferCreated = function(t) {
							var e = t.tracks.audio;
							e && (this.mediaBuffer = e.buffer, this.loadedmetadata = !0), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
						}, r.prototype.onBufferAppended = function(t) {
							if ("audio" === t.parent) {
								var e = this.state;
								e !== Kt && e !== Gt || (this.pendingBuffering = 0 < t.pending, this._checkAppendedParsed())
							}
						}, r.prototype._checkAppendedParsed = function() {
							if (!(this.state !== Gt || this.appended && this.pendingBuffering)) {
								var t = this.fragCurrent,
									e = this.stats,
									n = this.hls;
								if (t) {
									this.fragPrevious = t, e.tbuffered = performance.now(), n.trigger(M.a.FRAG_BUFFERED, {
										stats: e,
										frag: t,
										id: "audio"
									});
									var i = this.mediaBuffer ? this.mediaBuffer : this.media;
									N.b.log("audio buffered : " + Q.toString(i.buffered)), this.audioSwitch && this.appended && (this.audioSwitch = !1, n.trigger(M.a.AUDIO_TRACK_SWITCHED, {
										id: this.trackId
									})), this.state = Mt
								}
								this.tick()
							}
						}, r.prototype.onError = function(t) {
							var e = t.frag;
							if (!e || "audio" === e.type) switch (t.details) {
								case v.a.FRAG_LOAD_ERROR:
								case v.a.FRAG_LOAD_TIMEOUT:
									if (!t.fatal) {
										var n = this.fragLoadError;
										n ? n++ : n = 1;
										var i = this.config;
										if (n <= i.fragLoadingMaxRetry) {
											this.fragLoadError = n;
											var r = Math.min(Math.pow(2, n - 1) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
											N.b.warn("audioStreamController: frag loading failed, retry in " + r + " ms"), this.retryDate = performance.now() + r, this.state = Ut
										} else N.b.error("audioStreamController: " + t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.state = Vt
									}
									break;
								case v.a.AUDIO_TRACK_LOAD_ERROR:
								case v.a.AUDIO_TRACK_LOAD_TIMEOUT:
								case v.a.KEY_LOAD_ERROR:
								case v.a.KEY_LOAD_TIMEOUT:
									this.state !== Vt && (this.state = t.fatal ? Vt : Mt, N.b.warn("audioStreamController: " + t.details + " while loading frag,switch to " + this.state + " state ..."));
									break;
								case v.a.BUFFER_FULL_ERROR:
									if ("audio" === t.parent && (this.state === Kt || this.state === Gt)) {
										var o = this.mediaBuffer,
											a = this.media.currentTime;
										if (o && B.isBuffered(o, a) && B.isBuffered(o, a + .5)) {
											var s = this.config;
											s.maxMaxBufferLength >= s.maxBufferLength && (s.maxMaxBufferLength /= 2, N.b.warn("audio:reduce max buffer length to " + s.maxMaxBufferLength + "s")), this.state = Mt
										} else N.b.warn("buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, this.state = Ht, this.hls.trigger(M.a.BUFFER_FLUSHING, {
											startOffset: 0,
											endOffset: Number.POSITIVE_INFINITY,
											type: "audio"
										})
									}
							}
						}, r.prototype.onBufferFlushed = function() {
							var e = this,
								t = this.pendingData;
							t && t.length ? (N.b.log("appending pending audio data on Buffer Flushed"), t.forEach(function(t) {
								e.hls.trigger(M.a.BUFFER_APPENDING, t)
							}), this.appended = !0, this.pendingData = [], this.state = Gt) : (this.state = Mt, this.fragPrevious = null, this.tick())
						}, It(r, [{
							key: "state",
							set: function(t) {
								if (this.state !== t) {
									var e = this.state;
									this._state = t, N.b.log("audio stream:" + e + "->" + t)
								}
							},
							get: function() {
								return this._state
							}
						}]), r
					}(tt),
					Wt = function() {
						if ("undefined" != typeof window && window.VTTCue) return window.VTTCue;
						var b = {
								"": !0,
								lr: !0,
								rl: !0
							},
							e = {
								start: !0,
								middle: !0,
								end: !0,
								left: !0,
								right: !0
							};

						function _(t) {
							return "string" == typeof t && (!!e[t.toLowerCase()] && t.toLowerCase())
						}

						function E(t) {
							for (var e = 1; e < arguments.length; e++) {
								var n = arguments[e];
								for (var i in n) t[i] = n[i]
							}
							return t
						}

						function t(t, e, n) {
							var i = this,
								r = function() {
									if ("undefined" != typeof navigator) return /MSIE\s8\.0/.test(navigator.userAgent)
								}(),
								o = {};
							r ? i = document.createElement("custom") : o.enumerable = !0, i.hasBeenReset = !1;
							var a = "",
								s = !1,
								l = t,
								u = e,
								c = n,
								d = null,
								h = "",
								f = !0,
								p = "auto",
								g = "start",
								m = 50,
								y = "middle",
								v = 50,
								A = "middle";
							if (Object.defineProperty(i, "id", E({}, o, {
									get: function() {
										return a
									},
									set: function(t) {
										a = "" + t
									}
								})), Object.defineProperty(i, "pauseOnExit", E({}, o, {
									get: function() {
										return s
									},
									set: function(t) {
										s = !!t
									}
								})), Object.defineProperty(i, "startTime", E({}, o, {
									get: function() {
										return l
									},
									set: function(t) {
										if ("number" != typeof t) throw new TypeError("Start time must be set to a number.");
										l = t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "endTime", E({}, o, {
									get: function() {
										return u
									},
									set: function(t) {
										if ("number" != typeof t) throw new TypeError("End time must be set to a number.");
										u = t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "text", E({}, o, {
									get: function() {
										return c
									},
									set: function(t) {
										c = "" + t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "region", E({}, o, {
									get: function() {
										return d
									},
									set: function(t) {
										d = t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "vertical", E({}, o, {
									get: function() {
										return h
									},
									set: function(t) {
										var e, n = "string" == typeof(e = t) && !!b[e.toLowerCase()] && e.toLowerCase();
										if (!1 === n) throw new SyntaxError("An invalid or illegal string was specified.");
										h = n, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "snapToLines", E({}, o, {
									get: function() {
										return f
									},
									set: function(t) {
										f = !!t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "line", E({}, o, {
									get: function() {
										return p
									},
									set: function(t) {
										if ("number" != typeof t && "auto" !== t) throw new SyntaxError("An invalid number or illegal string was specified.");
										p = t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "lineAlign", E({}, o, {
									get: function() {
										return g
									},
									set: function(t) {
										var e = _(t);
										if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
										g = e, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "position", E({}, o, {
									get: function() {
										return m
									},
									set: function(t) {
										if (t < 0 || 100 < t) throw new Error("Position must be between 0 and 100.");
										m = t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "positionAlign", E({}, o, {
									get: function() {
										return y
									},
									set: function(t) {
										var e = _(t);
										if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
										y = e, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "size", E({}, o, {
									get: function() {
										return v
									},
									set: function(t) {
										if (t < 0 || 100 < t) throw new Error("Size must be between 0 and 100.");
										v = t, this.hasBeenReset = !0
									}
								})), Object.defineProperty(i, "align", E({}, o, {
									get: function() {
										return A
									},
									set: function(t) {
										var e = _(t);
										if (!e) throw new SyntaxError("An invalid or illegal string was specified.");
										A = e, this.hasBeenReset = !0
									}
								})), i.displayState = void 0, r) return i
						}
						return t.prototype.getCueAsHTML = function() {
							return window.WebVTT.convertCueToDOMTree(window, this.text)
						}, t
					}(),
					qt = function() {
						return {
							decode: function(t) {
								if (!t) return "";
								if ("string" != typeof t) throw new Error("Error - expected string data.");
								return decodeURIComponent(encodeURIComponent(t))
							}
						}
					};

				function Xt() {
					this.window = window, this.state = "INITIAL", this.buffer = "", this.decoder = new qt, this.regionList = []
				}

				function Qt() {
					this.values = Object.create(null)
				}

				function Zt(t, e, n, i) {
					var r = i ? t.split(i) : [t];
					for (var o in r)
						if ("string" == typeof r[o]) {
							var a = r[o].split(n);
							if (2 === a.length) e(a[0], a[1])
						}
				}
				Qt.prototype = {
					set: function(t, e) {
						this.get(t) || "" === e || (this.values[t] = e)
					},
					get: function(t, e, n) {
						return n ? this.has(t) ? this.values[t] : e[n] : this.has(t) ? this.values[t] : e
					},
					has: function(t) {
						return t in this.values
					},
					alt: function(t, e, n) {
						for (var i = 0; i < n.length; ++i)
							if (e === n[i]) {
								this.set(t, e);
								break
							}
					},
					integer: function(t, e) {
						/^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
					},
					percent: function(t, e) {
						return !!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (e = parseFloat(e)) && e <= 100) && (this.set(t, e), !0)
					}
				};
				var Jt = new Wt(0, 0, 0),
					te = "middle" === Jt.align ? "middle" : "center";

				function ee(e, t, a) {
					var n = e;

					function i() {
						var t = function(t) {
							function e(t, e, n, i) {
								return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | i) / 1e3
							}
							var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
							return n ? n[3] ? e(n[1], n[2], n[3].replace(":", ""), n[4]) : 59 < n[1] ? e(n[1], n[2], 0, n[4]) : e(0, n[1], n[2], n[4]) : null
						}(e);
						if (null === t) throw new Error("Malformed timestamp: " + n);
						return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
					}

					function r() {
						e = e.replace(/^\s+/, "")
					}
					if (r(), t.startTime = i(), r(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
					e = e.substr(3), r(), t.endTime = i(), r(),
						function(t, e) {
							var o = new Qt;
							Zt(t, function(t, e) {
								switch (t) {
									case "region":
										for (var n = a.length - 1; 0 <= n; n--)
											if (a[n].id === e) {
												o.set(t, a[n].region);
												break
											} break;
									case "vertical":
										o.alt(t, e, ["rl", "lr"]);
										break;
									case "line":
										var i = e.split(","),
											r = i[0];
										o.integer(t, r), o.percent(t, r) && o.set("snapToLines", !1), o.alt(t, r, ["auto"]), 2 === i.length && o.alt("lineAlign", i[1], ["start", te, "end"]);
										break;
									case "position":
										i = e.split(","), o.percent(t, i[0]), 2 === i.length && o.alt("positionAlign", i[1], ["start", te, "end", "line-left", "line-right", "auto"]);
										break;
									case "size":
										o.percent(t, e);
										break;
									case "align":
										o.alt(t, e, ["start", te, "end", "left", "right"])
								}
							}, /:/, /\s/), e.region = o.get("region", null), e.vertical = o.get("vertical", "");
							var n = o.get("line", "auto");
							"auto" === n && -1 === Jt.line && (n = -1), e.line = n, e.lineAlign = o.get("lineAlign", "start"), e.snapToLines = o.get("snapToLines", !0), e.size = o.get("size", 100), e.align = o.get("align", te);
							var i = o.get("position", "auto");
							"auto" === i && 50 === Jt.position && (i = "start" === e.align || "left" === e.align ? 0 : "end" === e.align || "right" === e.align ? 100 : 50), e.position = i
						}(e, t)
				}

				function ne(t) {
					return t.replace(/<br(?: \/)?>/gi, "\n")
				}
				Xt.prototype = {
					parse: function(t) {
						var i = this;

						function e() {
							var t = i.buffer,
								e = 0;
							for (t = ne(t); e < t.length && "\r" !== t[e] && "\n" !== t[e];) ++e;
							var n = t.substr(0, e);
							return "\r" === t[e] && ++e, "\n" === t[e] && ++e, i.buffer = t.substr(e), n
						}
						t && (i.buffer += i.decoder.decode(t, {
							stream: !0
						}));
						try {
							var n = void 0;
							if ("INITIAL" === i.state) {
								if (!/\r\n|\n/.test(i.buffer)) return this;
								var r = (n = e()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
								if (!r || !r[0]) throw new Error("Malformed WebVTT signature.");
								i.state = "HEADER"
							}
							for (var o = !1; i.buffer;) {
								if (!/\r\n|\n/.test(i.buffer)) return this;
								switch (o ? o = !1 : n = e(), i.state) {
									case "HEADER":
										/:/.test(n) ? Zt(n, function(t, e) {
											switch (t) {
												case "Region":
													console.log("parse region", e)
											}
										}, /:/) : n || (i.state = "ID");
										continue;
									case "NOTE":
										n || (i.state = "ID");
										continue;
									case "ID":
										if (/^NOTE($|[ \t])/.test(n)) {
											i.state = "NOTE";
											break
										}
										if (!n) continue;
										if (i.cue = new Wt(0, 0, ""), i.state = "CUE", -1 === n.indexOf("--\x3e")) {
											i.cue.id = n;
											continue
										}
										case "CUE":
											try {
												ee(n, i.cue, i.regionList)
											} catch (t) {
												i.cue = null, i.state = "BADCUE";
												continue
											}
											i.state = "CUETEXT";
											continue;
										case "CUETEXT":
											var a = -1 !== n.indexOf("--\x3e");
											if (!n || a && (o = !0)) {
												i.oncue && i.oncue(i.cue), i.cue = null, i.state = "ID";
												continue
											}
											i.cue.text && (i.cue.text += "\n"), i.cue.text += n;
											continue;
										case "BADCUE":
											n || (i.state = "ID");
											continue
								}
							}
						} catch (t) {
							"CUETEXT" === i.state && i.cue && i.oncue && i.oncue(i.cue), i.cue = null, i.state = "INITIAL" === i.state ? "BADWEBVTT" : "BADCUE"
						}
						return this
					},
					flush: function() {
						try {
							if (this.buffer += this.decoder.decode(), (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n", this.parse()), "INITIAL" === this.state) throw new Error("Malformed WebVTT signature.")
						} catch (t) {
							throw t
						}
						return this.onflush && this.onflush(), this
					}
				};
				var ie = Xt;

				function re(t, e, n, i) {
					for (var r = void 0, o = void 0, a = void 0, s = void 0, l = void 0, u = window.VTTCue || window.TextTrackCue, c = 0; c < i.rows.length; c++)
						if (a = !0, s = 0, l = "", !(r = i.rows[c]).isEmpty()) {
							for (var d = 0; d < r.chars.length; d++) r.chars[d].uchar.match(/\s/) && a ? s++ : (l += r.chars[d].uchar, a = !1);
							(r.cueStartTime = e) === n && (n += 1e-4), o = new u(e, n, ne(l.trim())), 16 <= s ? s-- : s++, navigator.userAgent.match(/Firefox\//) ? o.line = c + 1 : o.line = 7 < c ? c - 2 : c + 1, o.align = "left", o.position = Math.max(0, Math.min(100, s / 32 * 100 + (navigator.userAgent.match(/Firefox\//) ? 50 : 0))), t.addCue(o)
						}
				}

				function oe(t, e) {
					if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
				}
				var ae = {
						42: 225,
						92: 233,
						94: 237,
						95: 243,
						96: 250,
						123: 231,
						124: 247,
						125: 209,
						126: 241,
						127: 9608,
						128: 174,
						129: 176,
						130: 189,
						131: 191,
						132: 8482,
						133: 162,
						134: 163,
						135: 9834,
						136: 224,
						137: 32,
						138: 232,
						139: 226,
						140: 234,
						141: 238,
						142: 244,
						143: 251,
						144: 193,
						145: 201,
						146: 211,
						147: 218,
						148: 220,
						149: 252,
						150: 8216,
						151: 161,
						152: 42,
						153: 8217,
						154: 9473,
						155: 169,
						156: 8480,
						157: 8226,
						158: 8220,
						159: 8221,
						160: 192,
						161: 194,
						162: 199,
						163: 200,
						164: 202,
						165: 203,
						166: 235,
						167: 206,
						168: 207,
						169: 239,
						170: 212,
						171: 217,
						172: 249,
						173: 219,
						174: 171,
						175: 187,
						176: 195,
						177: 227,
						178: 205,
						179: 204,
						180: 236,
						181: 210,
						182: 242,
						183: 213,
						184: 245,
						185: 123,
						186: 125,
						187: 92,
						188: 94,
						189: 95,
						190: 124,
						191: 8764,
						192: 196,
						193: 228,
						194: 214,
						195: 246,
						196: 223,
						197: 165,
						198: 164,
						199: 9475,
						200: 197,
						201: 229,
						202: 216,
						203: 248,
						204: 9487,
						205: 9491,
						206: 9495,
						207: 9499
					},
					se = function(t) {
						var e = t;
						return ae.hasOwnProperty(t) && (e = ae[t]), String.fromCharCode(e)
					},
					le = {
						17: 1,
						18: 3,
						21: 5,
						22: 7,
						23: 9,
						16: 11,
						19: 12,
						20: 14
					},
					ue = {
						17: 2,
						18: 4,
						21: 6,
						22: 8,
						23: 10,
						19: 13,
						20: 15
					},
					ce = {
						25: 1,
						26: 3,
						29: 5,
						30: 7,
						31: 9,
						24: 11,
						27: 12,
						28: 14
					},
					de = {
						25: 2,
						26: 4,
						29: 6,
						30: 8,
						31: 10,
						27: 13,
						28: 15
					},
					he = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"],
					fe = {
						verboseFilter: {
							DATA: 3,
							DEBUG: 3,
							INFO: 2,
							WARNING: 2,
							TEXT: 1,
							ERROR: 0
						},
						time: null,
						verboseLevel: 0,
						setTime: function(t) {
							this.time = t
						},
						log: function(t, e) {
							var n = this.verboseFilter[t];
							this.verboseLevel >= n && console.log(this.time + " [" + t + "] " + e)
						}
					},
					pe = function(t) {
						for (var e = [], n = 0; n < t.length; n++) e.push(t[n].toString(16));
						return e
					},
					ge = function() {
						function o(t, e, n, i, r) {
							oe(this, o), this.foreground = t || "white", this.underline = e || !1, this.italics = n || !1, this.background = i || "black", this.flash = r || !1
						}
						return o.prototype.reset = function() {
							this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
						}, o.prototype.setStyles = function(t) {
							for (var e = ["foreground", "underline", "italics", "background", "flash"], n = 0; n < e.length; n++) {
								var i = e[n];
								t.hasOwnProperty(i) && (this[i] = t[i])
							}
						}, o.prototype.isDefault = function() {
							return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
						}, o.prototype.equals = function(t) {
							return this.foreground === t.foreground && this.underline === t.underline && this.italics === t.italics && this.background === t.background && this.flash === t.flash
						}, o.prototype.copy = function(t) {
							this.foreground = t.foreground, this.underline = t.underline, this.italics = t.italics, this.background = t.background, this.flash = t.flash
						}, o.prototype.toString = function() {
							return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
						}, o
					}(),
					me = function() {
						function a(t, e, n, i, r, o) {
							oe(this, a), this.uchar = t || " ", this.penState = new ge(e, n, i, r, o)
						}
						return a.prototype.reset = function() {
							this.uchar = " ", this.penState.reset()
						}, a.prototype.setChar = function(t, e) {
							this.uchar = t, this.penState.copy(e)
						}, a.prototype.setPenState = function(t) {
							this.penState.copy(t)
						}, a.prototype.equals = function(t) {
							return this.uchar === t.uchar && this.penState.equals(t.penState)
						}, a.prototype.copy = function(t) {
							this.uchar = t.uchar, this.penState.copy(t.penState)
						}, a.prototype.isEmpty = function() {
							return " " === this.uchar && this.penState.isDefault()
						}, a
					}(),
					ye = function() {
						function e() {
							oe(this, e), this.chars = [];
							for (var t = 0; t < 100; t++) this.chars.push(new me);
							this.pos = 0, this.currPenState = new ge
						}
						return e.prototype.equals = function(t) {
							for (var e = !0, n = 0; n < 100; n++)
								if (!this.chars[n].equals(t.chars[n])) {
									e = !1;
									break
								} return e
						}, e.prototype.copy = function(t) {
							for (var e = 0; e < 100; e++) this.chars[e].copy(t.chars[e])
						}, e.prototype.isEmpty = function() {
							for (var t = !0, e = 0; e < 100; e++)
								if (!this.chars[e].isEmpty()) {
									t = !1;
									break
								} return t
						}, e.prototype.setCursor = function(t) {
							this.pos !== t && (this.pos = t), this.pos < 0 ? (fe.log("ERROR", "Negative cursor position " + this.pos), this.pos = 0) : 100 < this.pos && (fe.log("ERROR", "Too large cursor position " + this.pos), this.pos = 100)
						}, e.prototype.moveCursor = function(t) {
							var e = this.pos + t;
							if (1 < t)
								for (var n = this.pos + 1; n < e + 1; n++) this.chars[n].setPenState(this.currPenState);
							this.setCursor(e)
						}, e.prototype.backSpace = function() {
							this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
						}, e.prototype.insertChar = function(t) {
							144 <= t && this.backSpace();
							var e = se(t);
							100 <= this.pos ? fe.log("ERROR", "Cannot insert " + t.toString(16) + " (" + e + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(e, this.currPenState), this.moveCursor(1))
						}, e.prototype.clearFromPos = function(t) {
							var e = void 0;
							for (e = t; e < 100; e++) this.chars[e].reset()
						}, e.prototype.clear = function() {
							this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
						}, e.prototype.clearToEndOfRow = function() {
							this.clearFromPos(this.pos)
						}, e.prototype.getTextString = function() {
							for (var t = [], e = !0, n = 0; n < 100; n++) {
								var i = this.chars[n].uchar;
								" " !== i && (e = !1), t.push(i)
							}
							return e ? "" : t.join("")
						}, e.prototype.setPenStyles = function(t) {
							this.currPenState.setStyles(t), this.chars[this.pos].setPenState(this.currPenState)
						}, e
					}(),
					ve = function() {
						function e() {
							oe(this, e), this.rows = [];
							for (var t = 0; t < 15; t++) this.rows.push(new ye);
							this.currRow = 14, this.nrRollUpRows = null, this.reset()
						}
						return e.prototype.reset = function() {
							for (var t = 0; t < 15; t++) this.rows[t].clear();
							this.currRow = 14
						}, e.prototype.equals = function(t) {
							for (var e = !0, n = 0; n < 15; n++)
								if (!this.rows[n].equals(t.rows[n])) {
									e = !1;
									break
								} return e
						}, e.prototype.copy = function(t) {
							for (var e = 0; e < 15; e++) this.rows[e].copy(t.rows[e])
						}, e.prototype.isEmpty = function() {
							for (var t = !0, e = 0; e < 15; e++)
								if (!this.rows[e].isEmpty()) {
									t = !1;
									break
								} return t
						}, e.prototype.backSpace = function() {
							this.rows[this.currRow].backSpace()
						}, e.prototype.clearToEndOfRow = function() {
							this.rows[this.currRow].clearToEndOfRow()
						}, e.prototype.insertChar = function(t) {
							this.rows[this.currRow].insertChar(t)
						}, e.prototype.setPen = function(t) {
							this.rows[this.currRow].setPenStyles(t)
						}, e.prototype.moveCursor = function(t) {
							this.rows[this.currRow].moveCursor(t)
						}, e.prototype.setCursor = function(t) {
							fe.log("INFO", "setCursor: " + t), this.rows[this.currRow].setCursor(t)
						}, e.prototype.setPAC = function(t) {
							fe.log("INFO", "pacData = " + JSON.stringify(t));
							var e = t.row - 1;
							if (this.nrRollUpRows && e < this.nrRollUpRows - 1 && (e = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== e) {
								for (var n = 0; n < 15; n++) this.rows[n].clear();
								var i = this.currRow + 1 - this.nrRollUpRows,
									r = this.lastOutputScreen;
								if (r) {
									var o = r.rows[i].cueStartTime;
									if (o && o < fe.time)
										for (var a = 0; a < this.nrRollUpRows; a++) this.rows[e - this.nrRollUpRows + a + 1].copy(r.rows[i + a])
								}
							}
							this.currRow = e;
							var s = this.rows[this.currRow];
							if (null !== t.indent) {
								var l = t.indent,
									u = Math.max(l - 1, 0);
								s.setCursor(t.indent), t.color = s.chars[u].penState.foreground
							}
							var c = {
								foreground: t.color,
								underline: t.underline,
								italics: t.italics,
								background: "black",
								flash: !1
							};
							this.setPen(c)
						}, e.prototype.setBkgData = function(t) {
							fe.log("INFO", "bkgData = " + JSON.stringify(t)), this.backSpace(), this.setPen(t), this.insertChar(32)
						}, e.prototype.setRollUpRows = function(t) {
							this.nrRollUpRows = t
						}, e.prototype.rollUp = function() {
							if (null !== this.nrRollUpRows) {
								fe.log("TEXT", this.getDisplayText());
								var t = this.currRow + 1 - this.nrRollUpRows,
									e = this.rows.splice(t, 1)[0];
								e.clear(), this.rows.splice(this.currRow, 0, e), fe.log("INFO", "Rolling up")
							} else fe.log("DEBUG", "roll_up but nrRollUpRows not set yet")
						}, e.prototype.getDisplayText = function(t) {
							t = t || !1;
							for (var e = [], n = "", i = -1, r = 0; r < 15; r++) {
								var o = this.rows[r].getTextString();
								o && (i = r + 1, t ? e.push("Row " + i + ": '" + o + "'") : e.push(o.trim()))
							}
							return 0 < e.length && (n = t ? "[" + e.join(" | ") + "]" : e.join("\n")), n
						}, e.prototype.getTextAndFormat = function() {
							return this.rows
						}, e
					}(),
					Ae = function() {
						function n(t, e) {
							oe(this, n), this.chNr = t, this.outputFilter = e, this.mode = null, this.verbose = 0, this.displayedMemory = new ve, this.nonDisplayedMemory = new ve, this.lastOutputScreen = new ve, this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
						}
						return n.prototype.reset = function() {
							this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.lastCueEndTime = null
						}, n.prototype.getHandler = function() {
							return this.outputFilter
						}, n.prototype.setHandler = function(t) {
							this.outputFilter = t
						}, n.prototype.setPAC = function(t) {
							this.writeScreen.setPAC(t)
						}, n.prototype.setBkgData = function(t) {
							this.writeScreen.setBkgData(t)
						}, n.prototype.setMode = function(t) {
							t !== this.mode && (this.mode = t, fe.log("INFO", "MODE=" + t), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = t)
						}, n.prototype.insertChars = function(t) {
							for (var e = 0; e < t.length; e++) this.writeScreen.insertChar(t[e]);
							var n = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
							fe.log("INFO", n + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (fe.log("TEXT", "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
						}, n.prototype.ccRCL = function() {
							fe.log("INFO", "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
						}, n.prototype.ccBS = function() {
							fe.log("INFO", "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
						}, n.prototype.ccAOF = function() {}, n.prototype.ccAON = function() {}, n.prototype.ccDER = function() {
							fe.log("INFO", "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
						}, n.prototype.ccRU = function(t) {
							fe.log("INFO", "RU(" + t + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(t)
						}, n.prototype.ccFON = function() {
							fe.log("INFO", "FON - Flash On"), this.writeScreen.setPen({
								flash: !0
							})
						}, n.prototype.ccRDC = function() {
							fe.log("INFO", "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
						}, n.prototype.ccTR = function() {
							fe.log("INFO", "TR"), this.setMode("MODE_TEXT")
						}, n.prototype.ccRTD = function() {
							fe.log("INFO", "RTD"), this.setMode("MODE_TEXT")
						}, n.prototype.ccEDM = function() {
							fe.log("INFO", "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
						}, n.prototype.ccCR = function() {
							fe.log("CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
						}, n.prototype.ccENM = function() {
							fe.log("INFO", "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
						}, n.prototype.ccEOC = function() {
							if (fe.log("INFO", "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
								var t = this.displayedMemory;
								this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = t, this.writeScreen = this.nonDisplayedMemory, fe.log("TEXT", "DISP: " + this.displayedMemory.getDisplayText())
							}
							this.outputDataUpdate(!0)
						}, n.prototype.ccTO = function(t) {
							fe.log("INFO", "TO(" + t + ") - Tab Offset"), this.writeScreen.moveCursor(t)
						}, n.prototype.ccMIDROW = function(t) {
							var e = {
								flash: !1
							};
							if (e.underline = t % 2 == 1, e.italics = 46 <= t, e.italics) e.foreground = "white";
							else {
								var n = Math.floor(t / 2) - 16;
								e.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][n]
							}
							fe.log("INFO", "MIDROW: " + JSON.stringify(e)), this.writeScreen.setPen(e)
						}, n.prototype.outputDataUpdate = function() {
							var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0],
								e = fe.time;
							null !== e && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue && (this.outputFilter.newCue(this.cueStartTime, e, this.lastOutputScreen), !0 === t && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue()), this.cueStartTime = this.displayedMemory.isEmpty() ? null : e) : this.cueStartTime = e, this.lastOutputScreen.copy(this.displayedMemory))
						}, n.prototype.cueSplitAtTime = function(t) {
							this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, t, this.displayedMemory), this.cueStartTime = t))
						}, n
					}(),
					be = function() {
						function i(t, e, n) {
							oe(this, i), this.field = t || 1, this.outputs = [e, n], this.channels = [new Ae(1, e), new Ae(2, n)], this.currChNr = -1, this.lastCmdA = null, this.lastCmdB = null, this.bufferedData = [], this.startTime = null, this.lastTime = null, this.dataCounters = {
								padding: 0,
								char: 0,
								cmd: 0,
								other: 0
							}
						}
						return i.prototype.getHandler = function(t) {
							return this.channels[t].getHandler()
						}, i.prototype.setHandler = function(t, e) {
							this.channels[t].setHandler(e)
						}, i.prototype.addData = function(t, e) {
							var n = void 0,
								i = void 0,
								r = void 0,
								o = !1;
							this.lastTime = t, fe.setTime(t);
							for (var a = 0; a < e.length; a += 2)
								if (i = 127 & e[a], r = 127 & e[a + 1], 0 !== i || 0 !== r) {
									if (fe.log("DATA", "[" + pe([e[a], e[a + 1]]) + "] -> (" + pe([i, r]) + ")"), (n = this.parseCmd(i, r)) || (n = this.parseMidrow(i, r)), n || (n = this.parsePAC(i, r)), n || (n = this.parseBackgroundAttributes(i, r)), !n)
										if (o = this.parseChars(i, r))
											if (this.currChNr && 0 <= this.currChNr) this.channels[this.currChNr - 1].insertChars(o);
											else fe.log("WARNING", "No channel found yet. TEXT-MODE?");
									n ? this.dataCounters.cmd += 2 : o ? this.dataCounters.char += 2 : (this.dataCounters.other += 2, fe.log("WARNING", "Couldn't parse cleaned data " + pe([i, r]) + " orig: " + pe([e[a], e[a + 1]])))
								} else this.dataCounters.padding += 2
						}, i.prototype.parseCmd = function(t, e) {
							var n = null;
							if (!((20 === t || 28 === t) && 32 <= e && e <= 47) && !((23 === t || 31 === t) && 33 <= e && e <= 35)) return !1;
							if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, this.lastCmdB = null, fe.log("DEBUG", "Repeated command (" + pe([t, e]) + ") is dropped"), !0;
							n = 20 === t || 23 === t ? 1 : 2;
							var i = this.channels[n - 1];
							return 20 === t || 28 === t ? 32 === e ? i.ccRCL() : 33 === e ? i.ccBS() : 34 === e ? i.ccAOF() : 35 === e ? i.ccAON() : 36 === e ? i.ccDER() : 37 === e ? i.ccRU(2) : 38 === e ? i.ccRU(3) : 39 === e ? i.ccRU(4) : 40 === e ? i.ccFON() : 41 === e ? i.ccRDC() : 42 === e ? i.ccTR() : 43 === e ? i.ccRTD() : 44 === e ? i.ccEDM() : 45 === e ? i.ccCR() : 46 === e ? i.ccENM() : 47 === e && i.ccEOC() : i.ccTO(e - 32), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = n, !0
						}, i.prototype.parseMidrow = function(t, e) {
							var n = null;
							return (17 === t || 25 === t) && 32 <= e && e <= 47 && ((n = 17 === t ? 1 : 2) !== this.currChNr ? (fe.log("ERROR", "Mismatch channel in midrow parsing"), !1) : (this.channels[n - 1].ccMIDROW(e), fe.log("DEBUG", "MIDROW (" + pe([t, e]) + ")"), !0))
						}, i.prototype.parsePAC = function(t, e) {
							var n, i = null;
							if (!((17 <= t && t <= 23 || 25 <= t && t <= 31) && 64 <= e && e <= 127) && !((16 === t || 24 === t) && 64 <= e && e <= 95)) return !1;
							if (t === this.lastCmdA && e === this.lastCmdB) return this.lastCmdA = null, !(this.lastCmdB = null);
							n = t <= 23 ? 1 : 2, i = 64 <= e && e <= 95 ? 1 === n ? le[t] : ce[t] : 1 === n ? ue[t] : de[t];
							var r = this.interpretPAC(i, e);
							return this.channels[n - 1].setPAC(r), this.lastCmdA = t, this.lastCmdB = e, this.currChNr = n, !0
						}, i.prototype.interpretPAC = function(t, e) {
							var n = e,
								i = {
									color: null,
									italics: !1,
									indent: null,
									underline: !1,
									row: t
								};
							return n = 95 < e ? e - 96 : e - 64, i.underline = 1 == (1 & n), n <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(n / 2)] : n <= 15 ? (i.italics = !0, i.color = "white") : i.indent = 4 * Math.floor((n - 16) / 2), i
						}, i.prototype.parseChars = function(t, e) {
							var n = null,
								i = null,
								r = null;
							if (25 <= t ? (n = 2, r = t - 8) : (n = 1, r = t), 17 <= r && r <= 19) {
								var o = e;
								o = 17 === r ? e + 80 : 18 === r ? e + 112 : e + 144, fe.log("INFO", "Special char '" + se(o) + "' in channel " + n), i = [o]
							} else 32 <= t && t <= 127 && (i = 0 === e ? [t] : [t, e]);
							if (i) {
								var a = pe(i);
								fe.log("DEBUG", "Char codes =  " + a.join(",")), this.lastCmdA = null, this.lastCmdB = null
							}
							return i
						}, i.prototype.parseBackgroundAttributes = function(t, e) {
							var n, i = void 0,
								r = void 0;
							return ((16 === t || 24 === t) && 32 <= e && e <= 47 || (23 === t || 31 === t) && 45 <= e && e <= 47) && (i = {}, 16 === t || 24 === t ? (r = Math.floor((e - 32) / 2), i.background = he[r], e % 2 == 1 && (i.background = i.background + "_semi")) : 45 === e ? i.background = "transparent" : (i.foreground = "black", 47 === e && (i.underline = !0)), n = t < 24 ? 1 : 2, this.channels[n - 1].setBkgData(i), this.lastCmdA = null, !(this.lastCmdB = null))
						}, i.prototype.reset = function() {
							for (var t = 0; t < this.channels.length; t++) this.channels[t] && this.channels[t].reset();
							this.lastCmdA = null, this.lastCmdB = null
						}, i.prototype.cueSplitAtTime = function(t) {
							for (var e = 0; e < this.channels.length; e++) this.channels[e] && this.channels[e].cueSplitAtTime(t)
						}, i
					}();
				var _e = function() {
						function n(t, e) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, n), this.timelineController = t, this.track = e, this.startTime = null, this.endTime = null, this.screen = null
						}
						return n.prototype.dispatchCue = function() {
							null !== this.startTime && (this.timelineController.addCues("textTrack" + this.track, this.startTime, this.endTime, this.screen), this.startTime = null)
						}, n.prototype.newCue = function(t, e, n) {
							(null === this.startTime || this.startTime > t) && (this.startTime = t), this.endTime = e, this.screen = n, this.timelineController.createCaptionsTrack(this.track)
						}, n
					}(),
					Ee = function(t, e, n) {
						return t.substr(n || 0, e.length) === e
					},
					Te = function(t) {
						for (var e = 5381, n = t.length; n;) e = 33 * e ^ t.charCodeAt(--n);
						return (e >>> 0).toString()
					},
					Se = {
						parse: function(t, a, i, r, e, n) {
							var o = Object(mt.b)(new Uint8Array(t)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"),
								s = "00:00.000",
								l = 0,
								u = 0,
								c = 0,
								d = [],
								h = void 0,
								f = !0,
								p = new ie;
							p.oncue = function(t) {
								var e = i[r],
									n = i.ccOffset;
								e && e.new && (void 0 !== u ? n = i.ccOffset = e.start : function(t, e, n) {
									var i = t[e],
										r = t[i.prevCC];
									if (!r || !r.new && i.new) return t.ccOffset = t.presentationOffset = i.start, i.new = !1;
									for (; r && r.new;) t.ccOffset += i.start - r.start, i.new = !1, r = t[(i = r).prevCC];
									t.presentationOffset = n
								}(i, r, c)), c && (n = c + i.ccOffset - i.presentationOffset), t.startTime += n - u, t.endTime += n - u, t.id = Te(t.startTime.toString()) + Te(t.endTime.toString()) + Te(t.text), t.text = decodeURIComponent(encodeURIComponent(t.text)), 0 < t.endTime && d.push(t)
							}, p.onparsingerror = function(t) {
								h = t
							}, p.onflush = function() {
								h && n ? n(h) : e(d)
							}, o.forEach(function(e) {
								if (f) {
									if (Ee(e, "X-TIMESTAMP-MAP=")) {
										f = !1, e.substr(16).split(",").forEach(function(t) {
											Ee(t, "LOCAL:") ? s = t.substr(6) : Ee(t, "MPEGTS:") && (l = parseInt(t.substr(7)))
										});
										try {
											l -= a = a < 0 ? a + 8589934592 : a, t = s, n = parseInt(t.substr(-3)), i = parseInt(t.substr(-6, 2)), r = parseInt(t.substr(-9, 2)), o = 9 < t.length ? parseInt(t.substr(0, t.indexOf(":"))) : 0, u = (isNaN(n) || isNaN(i) || isNaN(r) || isNaN(o) ? -1 : (n += 1e3 * i, n += 6e4 * r, n += 36e5 * o)) / 1e3, c = l / 9e4, -1 === u && (h = new Error("Malformed X-TIMESTAMP-MAP: " + e))
										} catch (t) {
											h = new Error("Malformed X-TIMESTAMP-MAP: " + e)
										}
										return
									}
									"" === e && (f = !1)
								}
								var t, n, i, r, o;
								p.parse(e + "\n")
							}), p.flush()
						}
					};
				var we = function(r) {
						function o(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, o);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, r.call(this, t, M.a.MEDIA_ATTACHING, M.a.MEDIA_DETACHING, M.a.FRAG_PARSING_USERDATA, M.a.FRAG_DECRYPTED, M.a.MANIFEST_LOADING, M.a.MANIFEST_LOADED, M.a.FRAG_LOADED, M.a.LEVEL_SWITCHING, M.a.INIT_PTS_FOUND));
							if (e.hls = t, e.config = t.config, e.enabled = !0, e.Cues = t.config.cueHandler, e.textTracks = [], e.tracks = [], e.unparsedVttFrags = [], e.initPTS = void 0, e.cueRanges = [], e.config.enableCEA708Captions) {
								var n = new _e(e, 1),
									i = new _e(e, 2);
								e.cea608Parser = new be(0, n, i)
							}
							return e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(o, r), o.prototype.addCues = function(t, e, n, i) {
							for (var r, o, a, s, l = this.cueRanges, u = !1, c = l.length; c--;) {
								var d = l[c],
									h = (r = d[0], o = d[1], a = e, s = n, Math.min(o, s) - Math.max(r, a));
								if (0 <= h && (d[0] = Math.min(d[0], e), d[1] = Math.max(d[1], n), u = !0, .5 < h / (n - e))) return
							}
							u || l.push([e, n]), this.Cues.newCue(this[t], e, n, i)
						}, o.prototype.onInitPtsFound = function(t) {
							var e = this;
							void 0 === this.initPTS && (this.initPTS = t.initPTS), this.unparsedVttFrags.length && (this.unparsedVttFrags.forEach(function(t) {
								e.onFragLoaded(t)
							}), this.unparsedVttFrags = [])
						}, o.prototype.getExistingTrack = function(t) {
							var e = this.media;
							if (e)
								for (var n = 0; n < e.textTracks.length; n++) {
									var i = e.textTracks[n];
									if (!0 === i["textTrack" + t]) return i
								}
							return null
						}, o.prototype.createCaptionsTrack = function(t) {
							var e = "textTrack" + t;
							if (!this[e]) {
								var n = this.getExistingTrack(t);
								if (n) this[e] = n, vt(this[e]), yt(this[e], this.media);
								else {
									var i = this.createTextTrack("captions", this.config["captionsTextTrack" + t + "Label"], this.config["captionsTextTrack" + t + "LanguageCode"]);
									i && (i[e] = !0, this[e] = i)
								}
							}
						}, o.prototype.createTextTrack = function(t, e, n) {
							var i = this.media;
							if (i) return i.addTextTrack(t, e, n)
						}, o.prototype.destroy = function() {
							l.prototype.destroy.call(this)
						}, o.prototype.onMediaAttaching = function(t) {
							this.media = t.media, this._cleanTracks()
						}, o.prototype.onMediaDetaching = function() {
							vt(this.textTrack1), vt(this.textTrack2)
						}, o.prototype.onManifestLoading = function() {
							this.lastSn = -1, this.prevCC = -1, this.vttCCs = {
								ccOffset: 0,
								presentationOffset: 0
							}, this._cleanTracks()
						}, o.prototype._cleanTracks = function() {
							var t = this.media;
							if (t) {
								var e = t.textTracks;
								if (e)
									for (var n = 0; n < e.length; n++) vt(e[n])
							}
						}, o.prototype.onManifestLoaded = function(t) {
							var a = this;
							if (this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = void 0, this.cueRanges = [], this.config.enableWebVTT) {
								this.tracks = t.subtitles || [];
								var s = this.media ? this.media.textTracks : [];
								this.tracks.forEach(function(t, e) {
									var n, i, r = void 0;
									if (e < s.length) {
										var o = s[e];
										i = t, !(n = o) || n.label !== i.name || n.textTrack1 || n.textTrack2 || (r = o)
									}
									r || (r = a.createTextTrack("subtitles", t.name, t.lang)), t.default ? r.mode = a.hls.subtitleDisplay ? "showing" : "hidden" : r.mode = "disabled", a.textTracks.push(r)
								})
							}
						}, o.prototype.onLevelSwitching = function() {
							this.enabled = "NONE" !== this.hls.currentLevel.closedCaptions
						}, o.prototype.onFragLoaded = function(t) {
							var e = t.frag,
								n = t.payload;
							if ("main" === e.type) {
								var i = e.sn;
								if (i !== this.lastSn + 1) {
									var r = this.cea608Parser;
									r && r.reset()
								}
								this.lastSn = i
							} else if ("subtitle" === e.type)
								if (n.byteLength) {
									if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
									var o = e.decryptdata;
									null != o && null != o.key && "AES-128" === o.method || this._parseVTTs(e, n)
								} else this.hls.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: e
								})
						}, o.prototype._parseVTTs = function(e, t) {
							var n = this.vttCCs;
							n[e.cc] || (n[e.cc] = {
								start: e.start,
								prevCC: this.prevCC,
								new: !0
							}, this.prevCC = e.cc);
							var r = this.textTracks,
								o = this.hls;
							Se.parse(t, this.initPTS, n, e.cc, function(t) {
								var i = r[e.trackId];
								"disabled" !== i.mode ? (t.forEach(function(e) {
									if (!i.cues.getCueById(e.id)) try {
										i.addCue(e)
									} catch (t) {
										var n = new window.TextTrackCue(e.startTime, e.endTime, e.text);
										n.id = e.id, i.addCue(n)
									}
								}), o.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
									success: !0,
									frag: e
								})) : o.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: e
								})
							}, function(t) {
								N.b.log("Failed to parse VTT cue: " + t), o.trigger(M.a.SUBTITLE_FRAG_PROCESSED, {
									success: !1,
									frag: e
								})
							})
						}, o.prototype.onFragDecrypted = function(t) {
							var e = t.payload,
								n = t.frag;
							if ("subtitle" === n.type) {
								if (void 0 === this.initPTS) return void this.unparsedVttFrags.push(t);
								this._parseVTTs(n, e)
							}
						}, o.prototype.onFragParsingUserdata = function(t) {
							if (this.enabled && this.config.enableCEA708Captions)
								for (var e = 0; e < t.samples.length; e++) {
									var n = this.extractCea608Data(t.samples[e].bytes);
									this.cea608Parser.addData(t.samples[e].pts, n)
								}
						}, o.prototype.extractCea608Data = function(t) {
							for (var e = 31 & t[0], n = 2, i = void 0, r = void 0, o = void 0, a = [], s = 0; s < e; s++) i = t[n++], r = 127 & t[n++], o = 127 & t[n++], 0 === r && 0 === o || 0 != (4 & i) && 0 === (3 & i) && (a.push(r), a.push(o));
							return a
						}, o
					}(l),
					Ce = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();

				function Le(t) {
					for (var e = [], n = 0; n < t.length; n++) "subtitles" === t[n].kind && e.push(t[n]);
					return e
				}
				var ke = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MEDIA_ATTACHED, M.a.MEDIA_DETACHING, M.a.MANIFEST_LOADING, M.a.MANIFEST_LOADED, M.a.SUBTITLE_TRACK_LOADED));
							return e.tracks = [], e.trackId = -1, e.media = void 0, e.subtitleDisplay = !1, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype._onTextTracksChanged = function() {
							if (this.media) {
								for (var t = -1, e = Le(this.media.textTracks), n = 0; n < e.length; n++)
									if ("hidden" === e[n].mode) t = n;
									else if ("showing" === e[n].mode) {
									t = n;
									break
								}
								this.subtitleTrack = t
							}
						}, i.prototype.destroy = function() {
							l.prototype.destroy.call(this)
						}, i.prototype.onMediaAttached = function(t) {
							var e = this;
							this.media = t.media, this.media && (void 0 !== this.queuedDefaultTrack && (this.subtitleTrack = this.queuedDefaultTrack, delete this.queuedDefaultTrack), this.trackChangeListener = this._onTextTracksChanged.bind(this), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval(function() {
								e.trackChangeListener()
							}, 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
						}, i.prototype.onMediaDetaching = function() {
							this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener), this.media = void 0)
						}, i.prototype.onManifestLoading = function() {
							this.tracks = [], this.trackId = -1
						}, i.prototype.onManifestLoaded = function(t) {
							var e = this,
								n = t.subtitles || [];
							this.tracks = n, this.trackId = -1, this.hls.trigger(M.a.SUBTITLE_TRACKS_UPDATED, {
								subtitleTracks: n
							}), n.forEach(function(t) {
								t.default && (e.media ? e.subtitleTrack = t.id : e.queuedDefaultTrack = t.id)
							})
						}, i.prototype.onTick = function() {
							var t = this.trackId,
								e = this.tracks[t];
							if (e) {
								var n = e.details;
								void 0 !== n && !0 !== n.live || (N.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(M.a.SUBTITLE_TRACK_LOADING, {
									url: e.url,
									id: t
								}))
							}
						}, i.prototype.onSubtitleTrackLoaded = function(t) {
							var e = this;
							t.id < this.tracks.length && (N.b.log("subtitle track " + t.id + " loaded"), this.tracks[t.id].details = t.details, t.details.live && !this.timer && (this.timer = setInterval(function() {
								e.onTick()
							}, 1e3 * t.details.targetduration, this)), !t.details.live && this.timer && (clearInterval(this.timer), this.timer = null))
						}, i.prototype.setSubtitleTrackInternal = function(t) {
							if (!(t < -1 || t >= this.tracks.length)) {
								this.timer && (clearInterval(this.timer), this.timer = null);
								var e = Le(this.media.textTracks);
								if (-1 !== this.trackId && (e[this.trackId].mode = "disabled"), this.trackId = t, N.b.log("switching to subtitle track " + t), this.hls.trigger(M.a.SUBTITLE_TRACK_SWITCH, {
										id: t
									}), -1 !== t) {
									var n = this.tracks[t];
									t < e.length && (e[t].mode = this.subtitleDisplay ? "showing" : "hidden");
									var i = n.details;
									void 0 !== i && !0 !== i.live || (N.b.log("(re)loading playlist for subtitle track " + t), this.hls.trigger(M.a.SUBTITLE_TRACK_LOADING, {
										url: n.url,
										id: t
									}))
								}
							}
						}, Ce(i, [{
							key: "subtitleTracks",
							get: function() {
								return this.tracks
							}
						}, {
							key: "subtitleTrack",
							get: function() {
								return this.trackId
							},
							set: function(t) {
								this.trackId !== t && this.setSubtitleTrackInternal(t)
							}
						}]), i
					}(l),
					xe = n(5);
				var Re = "STOPPED",
					Oe = "IDLE",
					Ie = "KEY_LOADING",
					De = "FRAG_LOADING",
					Pe = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MEDIA_ATTACHED, M.a.ERROR, M.a.KEY_LOADED, M.a.FRAG_LOADED, M.a.SUBTITLE_TRACKS_UPDATED, M.a.SUBTITLE_TRACK_SWITCH, M.a.SUBTITLE_TRACK_LOADED, M.a.SUBTITLE_FRAG_PROCESSED));
							return e.config = t.config, e.vttFragSNsProcessed = {}, e.vttFragQueues = void 0, e.currentlyProcessing = null, e.state = Re, e.currentTrackId = -1, e.decrypter = new xe.a(t.observer, t.config), e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.onHandlerDestroyed = function() {
							this.state = Re
						}, i.prototype.clearVttFragQueues = function() {
							var e = this;
							this.vttFragQueues = {}, this.tracks.forEach(function(t) {
								e.vttFragQueues[t.id] = []
							})
						}, i.prototype.nextFrag = function() {
							if (null === this.currentlyProcessing && -1 < this.currentTrackId && this.vttFragQueues[this.currentTrackId].length) {
								var t = this.currentlyProcessing = this.vttFragQueues[this.currentTrackId].shift();
								this.fragCurrent = t, this.hls.trigger(M.a.FRAG_LOADING, {
									frag: t
								}), this.state = De
							}
						}, i.prototype.onSubtitleFragProcessed = function(t) {
							t.success && this.vttFragSNsProcessed[t.frag.trackId].push(t.frag.sn), this.currentlyProcessing = null, this.state = Oe, this.nextFrag()
						}, i.prototype.onMediaAttached = function() {
							this.state = Oe
						}, i.prototype.onError = function(t) {
							var e = t.frag;
							e && "subtitle" !== e.type || this.currentlyProcessing && (this.currentlyProcessing = null, this.nextFrag())
						}, i.prototype.doTick = function() {
							var i = this;
							switch (this.state) {
								case Oe:
									var t, e = this.tracks,
										r = this.currentTrackId,
										o = this.vttFragSNsProcessed[r],
										a = this.vttFragQueues[r],
										s = this.currentlyProcessing ? this.currentlyProcessing.sn : -1;
									if (!e) break;
									if (r < e.length && (t = e[r].details), void 0 === t) break;
									t.fragments.forEach(function(t) {
										var e, n;
										n = t, -1 < o.indexOf(n.sn) || t.sn === s || (e = t, a.some(function(t) {
											return t.sn === e.sn
										})) || (t.decryptdata && null != t.decryptdata.uri && null == t.decryptdata.key ? (N.b.log("Loading key for " + t.sn), i.state = Ie, i.hls.trigger(M.a.KEY_LOADING, {
											frag: t
										})) : (t.trackId = r, a.push(t), i.nextFrag()))
									})
							}
						}, i.prototype.onSubtitleTracksUpdated = function(t) {
							var e = this;
							N.b.log("subtitle tracks updated"), this.tracks = t.subtitleTracks, this.clearVttFragQueues(), this.vttFragSNsProcessed = {}, this.tracks.forEach(function(t) {
								e.vttFragSNsProcessed[t.id] = []
							})
						}, i.prototype.onSubtitleTrackSwitch = function(t) {
							(this.currentTrackId = t.id, -1 !== this.currentTrackId) && (void 0 !== this.tracks[this.currentTrackId].details && this.tick())
						}, i.prototype.onSubtitleTrackLoaded = function() {
							this.tick()
						}, i.prototype.onKeyLoaded = function() {
							this.state === Ie && (this.state = Oe, this.tick())
						}, i.prototype.onFragLoaded = function(t) {
							var e = this.fragCurrent,
								n = t.frag.decryptdata,
								i = t.frag,
								r = this.hls;
							if (this.state === De && e && "subtitle" === t.frag.type && e.sn === t.frag.sn && 0 < t.payload.byteLength && null != n && null != n.key && "AES-128" === n.method) {
								var o = void 0;
								try {
									o = performance.now()
								} catch (t) {
									o = Date.now()
								}
								this.decrypter.decrypt(t.payload, n.key.buffer, n.iv.buffer, function(t) {
									var e = void 0;
									try {
										e = performance.now()
									} catch (t) {
										e = Date.now()
									}
									r.trigger(M.a.FRAG_DECRYPTED, {
										frag: i,
										payload: t,
										stats: {
											tstart: o,
											tdecrypt: e
										}
									})
								})
							}
						}, i
					}(tt),
					Me = function() {
						function i(t, e) {
							for (var n = 0; n < e.length; n++) {
								var i = e[n];
								i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
							}
						}
						return function(t, e, n) {
							return e && i(t.prototype, e), n && i(t, n), t
						}
					}();
				var Ne = "com.widevine.alpha",
					Fe = "com.microsoft.playready",
					Be = function(n) {
						function i(t) {
							! function(t, e) {
								if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
							}(this, i);
							var e = function(t, e) {
								if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
								return !e || "object" != typeof e && "function" != typeof e ? t : e
							}(this, n.call(this, t, M.a.MEDIA_ATTACHED, M.a.MANIFEST_PARSED));
							return e._widevineLicenseUrl = t.config.widevineLicenseUrl, e._licenseXhrSetup = t.config.licenseXhrSetup, e._emeEnabled = t.config.emeEnabled, e._requestMediaKeySystemAccess = t.config.requestMediaKeySystemAccessFunc, e._mediaKeysList = [], e._media = null, e._hasSetMediaKeys = !1, e._isMediaEncrypted = !1, e._requestLicenseFailureCount = 0, e
						}
						return function(t, e) {
							if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
							t.prototype = Object.create(e && e.prototype, {
								constructor: {
									value: t,
									enumerable: !1,
									writable: !0,
									configurable: !0
								}
							}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
						}(i, n), i.prototype.getLicenseServerUrl = function(t) {
							var e = void 0;
							switch (t) {
								case Ne:
									e = this._widevineLicenseUrl;
									break;
								default:
									e = null
							}
							return e || (N.b.error('No license server URL configured for key-system "' + t + '"'), this.hls.trigger(M.a.ERROR, {
								type: v.b.KEY_SYSTEM_ERROR,
								details: v.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
								fatal: !0
							})), e
						}, i.prototype._attemptKeySystemAccess = function(e, t, n) {
							var i = this,
								r = function(t, e, n) {
									switch (t) {
										case Ne:
											return i = {
												videoCapabilities: []
											}, n.forEach(function(t) {
												i.videoCapabilities.push({
													contentType: 'video/mp4; codecs="' + t + '"'
												})
											}), [i];
										default:
											throw Error("Unknown key-system: " + t)
									}
									var i
								}(e, 0, n);
							r ? (N.b.log("Requesting encrypted media key-system access"), this.requestMediaKeySystemAccess(e, r).then(function(t) {
								i._onMediaKeySystemAccessObtained(e, t)
							}).catch(function(t) {
								N.b.error('Failed to obtain key-system "' + e + '" access:', t)
							})) : N.b.warn("Can not create config for key-system (maybe because platform is not supported):", e)
						}, i.prototype._onMediaKeySystemAccessObtained = function(e, t) {
							var n = this;
							N.b.log('Access for key-system "' + e + '" obtained');
							var i = {
								mediaKeys: null,
								mediaKeysSession: null,
								mediaKeysSessionInitialized: !1,
								mediaKeySystemAccess: t,
								mediaKeySystemDomain: e
							};
							this._mediaKeysList.push(i), t.createMediaKeys().then(function(t) {
								i.mediaKeys = t, N.b.log('Media-keys created for key-system "' + e + '"'), n._onMediaKeysCreated()
							}).catch(function(t) {
								N.b.error("Failed to create media-keys:", t)
							})
						}, i.prototype._onMediaKeysCreated = function() {
							var e = this;
							this._mediaKeysList.forEach(function(t) {
								t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
							})
						}, i.prototype._onNewMediaKeySession = function(e) {
							var n = this;
							N.b.log("New key-system session " + e.sessionId), e.addEventListener("message", function(t) {
								n._onKeySessionMessage(e, t.message)
							}, !1)
						}, i.prototype._onKeySessionMessage = function(e, t) {
							N.b.log("Got EME message event, creating license request"), this._requestLicense(t, function(t) {
								N.b.log("Received license data, updating key-session"), e.update(t)
							})
						}, i.prototype._onMediaEncrypted = function(t, e) {
							N.b.log('Media is encrypted using "' + t + '" init data type'), this._isMediaEncrypted = !0, this._mediaEncryptionInitDataType = t, this._mediaEncryptionInitData = e, this._attemptSetMediaKeys(), this._generateRequestWithPreferredKeySession()
						}, i.prototype._attemptSetMediaKeys = function() {
							if (!this._hasSetMediaKeys) {
								var t = this._mediaKeysList[0];
								if (!t || !t.mediaKeys) return N.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(M.a.ERROR, {
									type: v.b.KEY_SYSTEM_ERROR,
									details: v.a.KEY_SYSTEM_NO_KEYS,
									fatal: !0
								});
								N.b.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0
							}
						}, i.prototype._generateRequestWithPreferredKeySession = function() {
							var e = this,
								t = this._mediaKeysList[0];
							if (!t) return N.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(M.a.ERROR, {
								type: v.b.KEY_SYSTEM_ERROR,
								details: v.a.KEY_SYSTEM_NO_ACCESS,
								fatal: !0
							});
							if (t.mediaKeysSessionInitialized) N.b.warn("Key-Session already initialized but requested again");
							else {
								var n = t.mediaKeysSession;
								n || (N.b.error("Fatal: Media is encrypted but no key-session existing"), this.hls.trigger(M.a.ERROR, {
									type: v.b.KEY_SYSTEM_ERROR,
									details: v.a.KEY_SYSTEM_NO_SESSION,
									fatal: !0
								}));
								var i = this._mediaEncryptionInitDataType,
									r = this._mediaEncryptionInitData;
								N.b.log('Generating key-session request for "' + i + '" init data type'), t.mediaKeysSessionInitialized = !0, n.generateRequest(i, r).then(function() {
									N.b.debug("Key-session generation succeeded")
								}).catch(function(t) {
									N.b.error("Error generating key-session request:", t), e.hls.trigger(M.a.ERROR, {
										type: v.b.KEY_SYSTEM_ERROR,
										details: v.a.KEY_SYSTEM_NO_SESSION,
										fatal: !1
									})
								})
							}
						}, i.prototype._createLicenseXhr = function(e, t, n) {
							var i = new XMLHttpRequest,
								r = this._licenseXhrSetup;
							try {
								if (r) try {
									r(i, e)
								} catch (t) {
									i.open("POST", e, !0), r(i, e)
								}
								i.readyState || i.open("POST", e, !0)
							} catch (t) {
								return N.b.error("Error setting up key-system license XHR", t), void this.hls.trigger(M.a.ERROR, {
									type: v.b.KEY_SYSTEM_ERROR,
									details: v.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
									fatal: !0
								})
							}
							return i.responseType = "arraybuffer", i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, n), i
						}, i.prototype._onLicenseRequestReadyStageChange = function(t, e, n, i) {
							switch (t.readyState) {
								case 4:
									if (200 === t.status) this._requestLicenseFailureCount = 0, N.b.log("License request succeeded"), i(t.response);
									else {
										if (N.b.error("License Request XHR failed (" + e + "). Status: " + t.status + " (" + t.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount <= 3) {
											var r = 3 - this._requestLicenseFailureCount + 1;
											return N.b.warn("Retrying license request, " + r + " attempts left"), void this._requestLicense(n, i)
										}
										this.hls.trigger(M.a.ERROR, {
											type: v.b.KEY_SYSTEM_ERROR,
											details: v.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
											fatal: !0
										})
									}
							}
						}, i.prototype._generateLicenseRequestChallenge = function(t, e) {
							var n = void 0;
							return t.mediaKeySystemDomain === Fe ? N.b.error("PlayReady is not supported (yet)") : t.mediaKeySystemDomain === Ne ? n = e : N.b.error("Unsupported key-system:", t.mediaKeySystemDomain), n
						}, i.prototype._requestLicense = function(t, e) {
							N.b.log("Requesting content license for key-system");
							var n = this._mediaKeysList[0];
							if (!n) return N.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(M.a.ERROR, {
								type: v.b.KEY_SYSTEM_ERROR,
								details: v.a.KEY_SYSTEM_NO_ACCESS,
								fatal: !0
							});
							var i = this.getLicenseServerUrl(n.mediaKeySystemDomain),
								r = this._createLicenseXhr(i, t, e);
							N.b.log("Sending license request to URL: " + i), r.send(this._generateLicenseRequestChallenge(n, t))
						}, i.prototype.onMediaAttached = function(t) {
							var e = this;
							if (this._emeEnabled) {
								var n = t.media;
								(this._media = n).addEventListener("encrypted", function(t) {
									e._onMediaEncrypted(t.initDataType, t.initData)
								})
							}
						}, i.prototype.onManifestParsed = function(t) {
							if (this._emeEnabled) {
								var e = t.levels.map(function(t) {
										return t.audioCodec
									}),
									n = t.levels.map(function(t) {
										return t.videoCodec
									});
								this._attemptKeySystemAccess(Ne, e, n)
							}
						}, Me(i, [{
							key: "requestMediaKeySystemAccess",
							get: function() {
								if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
								return this._requestMediaKeySystemAccess
							}
						}]), i
					}(l),
					Ue = {
						autoStartLoad: !0,
						startPosition: -1,
						defaultAudioCodec: void 0,
						debug: !1,
						capLevelOnFPSDrop: !1,
						capLevelToPlayerSize: !1,
						initialLiveManifestSize: 1,
						maxBufferLength: 30,
						maxBufferSize: 6e7,
						maxBufferHole: .5,
						lowBufferWatchdogPeriod: .5,
						highBufferWatchdogPeriod: 3,
						nudgeOffset: .1,
						nudgeMaxRetry: 3,
						maxFragLookUpTolerance: .25,
						liveSyncDurationCount: 3,
						liveMaxLatencyDurationCount: 1 / 0,
						liveSyncDuration: void 0,
						liveMaxLatencyDuration: void 0,
						liveDurationInfinity: !1,
						maxMaxBufferLength: 600,
						enableWorker: !0,
						enableSoftwareAES: !0,
						manifestLoadingTimeOut: 1e4,
						manifestLoadingMaxRetry: 1,
						manifestLoadingRetryDelay: 1e3,
						manifestLoadingMaxRetryTimeout: 64e3,
						startLevel: void 0,
						levelLoadingTimeOut: 1e4,
						levelLoadingMaxRetry: 4,
						levelLoadingRetryDelay: 1e3,
						levelLoadingMaxRetryTimeout: 64e3,
						fragLoadingTimeOut: 2e4,
						fragLoadingMaxRetry: 6,
						fragLoadingRetryDelay: 1e3,
						fragLoadingMaxRetryTimeout: 64e3,
						startFragPrefetch: !1,
						fpsDroppedMonitoringPeriod: 5e3,
						fpsDroppedMonitoringThreshold: .2,
						appendErrorMaxRetry: 3,
						loader: xt,
						fLoader: void 0,
						pLoader: void 0,
						xhrSetup: void 0,
						licenseXhrSetup: void 0,
						abrController: Tt,
						bufferController: wt,
						capLevelController: Lt,
						fpsController: kt,
						stretchShortVideoTrack: !1,
						maxAudioFramesDrift: 1,
						forceKeyFrameOnDiscontinuity: !0,
						abrEwmaFastLive: 3,
						abrEwmaSlowLive: 9,
						abrEwmaFastVoD: 3,
						abrEwmaSlowVoD: 9,
						abrEwmaDefaultEstimate: 5e5,
						abrBandWidthFactor: .95,
						abrBandWidthUpFactor: .7,
						abrMaxWithRealBitrate: !1,
						maxStarvationDelay: 4,
						maxLoadingDelay: 4,
						minAutoBitrate: 0,
						emeEnabled: !1,
						widevineLicenseUrl: void 0,
						requestMediaKeySystemAccessFunc: window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null
					};
				Ue.subtitleStreamController = Pe, Ue.subtitleTrackController = ke, Ue.timelineController = we, Ue.cueHandler = i, Ue.enableCEA708Captions = !0, Ue.enableWebVTT = !0, Ue.captionsTextTrack1Label = "English", Ue.captionsTextTrack1LanguageCode = "en", Ue.captionsTextTrack2Label = "Spanish", Ue.captionsTextTrack2LanguageCode = "es", Ue.audioStreamController = $t, Ue.audioTrackController = Ot, Ue.emeController = Be;
				var je = function() {
					function i(t, e) {
						for (var n = 0; n < e.length; n++) {
							var i = e[n];
							i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
						}
					}
					return function(t, e, n) {
						return e && i(t.prototype, e), n && i(t, n), t
					}
				}();
				n(12);
				var Ke = function() {
					function _() {
						var e = this,
							t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
						! function(t, e) {
							if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
						}(this, _);
						var n = _.DefaultConfig;
						if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
						for (var i in n) i in t || (t[i] = n[i]);
						if (void 0 !== t.liveMaxLatencyDurationCount && t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
						if (void 0 !== t.liveMaxLatencyDuration && (t.liveMaxLatencyDuration <= t.liveSyncDuration || void 0 === t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
						Object(N.a)(t.debug), this.config = t, this._autoLevelCapping = -1;
						var r = this.observer = new D.a;
						r.trigger = function(t) {
							for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
							r.emit.apply(r, [t, t].concat(n))
						}, r.off = function(t) {
							for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
							r.removeListener.apply(r, [t].concat(n))
						}, this.on = r.on.bind(r), this.off = r.off.bind(r), this.trigger = r.trigger.bind(r);
						var o = this.abrController = new t.abrController(this),
							a = new t.bufferController(this),
							s = new t.capLevelController(this),
							l = new t.fpsController(this),
							u = new T(this),
							c = new S(this),
							d = new R(this),
							h = new At(this),
							f = this.levelController = new gt(this),
							p = new $(this),
							g = [f, this.streamController = new ft(this, p)],
							m = t.audioStreamController;
						m && g.push(new m(this, p)), this.networkControllers = g;
						var y = [u, c, d, o, a, s, l, h, p];
						if (m = t.audioTrackController) {
							var v = new m(this);
							this.audioTrackController = v, y.push(v)
						}
						if (m = t.subtitleTrackController) {
							var A = new m(this);
							this.subtitleTrackController = A, y.push(A)
						}
						if (m = t.emeController) {
							var b = new m(this);
							this.emeController = b, y.push(b)
						} [t.subtitleStreamController, t.timelineController].forEach(function(t) {
							t && y.push(new t(e))
						}), this.coreComponents = y
					}
					return _.isSupported = function() {
						return t = j(), e = window.SourceBuffer || window.WebKitSourceBuffer, n = t && "function" == typeof t.isTypeSupported && t.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'), i = !e || e.prototype && "function" == typeof e.prototype.appendBuffer && "function" == typeof e.prototype.remove, !!n && !!i;
						var t, e, n, i
					}, je(_, null, [{
						key: "version",
						get: function() {
							return "0.9.1"
						}
					}, {
						key: "Events",
						get: function() {
							return M.a
						}
					}, {
						key: "ErrorTypes",
						get: function() {
							return v.b
						}
					}, {
						key: "ErrorDetails",
						get: function() {
							return v.a
						}
					}, {
						key: "DefaultConfig",
						get: function() {
							return _.defaultConfig ? _.defaultConfig : Ue
						},
						set: function(t) {
							_.defaultConfig = t
						}
					}]), _.prototype.destroy = function() {
						N.b.log("destroy"), this.trigger(M.a.DESTROYING), this.detachMedia(), this.coreComponents.concat(this.networkControllers).forEach(function(t) {
							t.destroy()
						}), this.url = null, this.observer.removeAllListeners(), this._autoLevelCapping = -1
					}, _.prototype.attachMedia = function(t) {
						N.b.log("attachMedia"), this.media = t, this.trigger(M.a.MEDIA_ATTACHING, {
							media: t
						})
					}, _.prototype.detachMedia = function() {
						N.b.log("detachMedia"), this.trigger(M.a.MEDIA_DETACHING), this.media = null
					}, _.prototype.loadSource = function(t) {
						t = o.a.buildAbsoluteURL(window.location.href, t, {
							alwaysNormalize: !0
						}), N.b.log("loadSource:" + t), this.url = t, this.trigger(M.a.MANIFEST_LOADING, {
							url: t
						})
					}, _.prototype.startLoad = function() {
						var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : -1;
						N.b.log("startLoad(" + e + ")"), this.networkControllers.forEach(function(t) {
							t.startLoad(e)
						})
					}, _.prototype.stopLoad = function() {
						N.b.log("stopLoad"), this.networkControllers.forEach(function(t) {
							t.stopLoad()
						})
					}, _.prototype.swapAudioCodec = function() {
						N.b.log("swapAudioCodec"), this.streamController.swapAudioCodec()
					}, _.prototype.recoverMediaError = function() {
						N.b.log("recoverMediaError");
						var t = this.media;
						this.detachMedia(), this.attachMedia(t)
					}, je(_, [{
						key: "levels",
						get: function() {
							return this.levelController.levels
						}
					}, {
						key: "currentLevel",
						get: function() {
							return this.streamController.currentLevel
						},
						set: function(t) {
							N.b.log("set currentLevel:" + t), this.loadLevel = t, this.streamController.immediateLevelSwitch()
						}
					}, {
						key: "nextLevel",
						get: function() {
							return this.streamController.nextLevel
						},
						set: function(t) {
							N.b.log("set nextLevel:" + t), this.levelController.manualLevel = t, this.streamController.nextLevelSwitch()
						}
					}, {
						key: "loadLevel",
						get: function() {
							return this.levelController.level
						},
						set: function(t) {
							N.b.log("set loadLevel:" + t), this.levelController.manualLevel = t
						}
					}, {
						key: "nextLoadLevel",
						get: function() {
							return this.levelController.nextLoadLevel
						},
						set: function(t) {
							this.levelController.nextLoadLevel = t
						}
					}, {
						key: "firstLevel",
						get: function() {
							return Math.max(this.levelController.firstLevel, this.minAutoLevel)
						},
						set: function(t) {
							N.b.log("set firstLevel:" + t), this.levelController.firstLevel = t
						}
					}, {
						key: "startLevel",
						get: function() {
							return this.levelController.startLevel
						},
						set: function(t) {
							N.b.log("set startLevel:" + t); - 1 !== t && (t = Math.max(t, this.minAutoLevel)), this.levelController.startLevel = t
						}
					}, {
						key: "autoLevelCapping",
						get: function() {
							return this._autoLevelCapping
						},
						set: function(t) {
							N.b.log("set autoLevelCapping:" + t), this._autoLevelCapping = t
						}
					}, {
						key: "autoLevelEnabled",
						get: function() {
							return -1 === this.levelController.manualLevel
						}
					}, {
						key: "manualLevel",
						get: function() {
							return this.levelController.manualLevel
						}
					}, {
						key: "minAutoLevel",
						get: function() {
							for (var t = this.levels, e = this.config.minAutoBitrate, n = t ? t.length : 0, i = 0; i < n; i++) {
								if (e < (t[i].realBitrate ? Math.max(t[i].realBitrate, t[i].bitrate) : t[i].bitrate)) return i
							}
							return 0
						}
					}, {
						key: "maxAutoLevel",
						get: function() {
							var t = this.levels,
								e = this.autoLevelCapping;
							return -1 === e && t && t.length ? t.length - 1 : e
						}
					}, {
						key: "nextAutoLevel",
						get: function() {
							return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
						},
						set: function(t) {
							this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, t)
						}
					}, {
						key: "audioTracks",
						get: function() {
							var t = this.audioTrackController;
							return t ? t.audioTracks : []
						}
					}, {
						key: "audioTrack",
						get: function() {
							var t = this.audioTrackController;
							return t ? t.audioTrack : -1
						},
						set: function(t) {
							var e = this.audioTrackController;
							e && (e.audioTrack = t)
						}
					}, {
						key: "liveSyncPosition",
						get: function() {
							return this.streamController.liveSyncPosition
						}
					}, {
						key: "subtitleTracks",
						get: function() {
							var t = this.subtitleTrackController;
							return t ? t.subtitleTracks : []
						}
					}, {
						key: "subtitleTrack",
						get: function() {
							var t = this.subtitleTrackController;
							return t ? t.subtitleTrack : -1
						},
						set: function(t) {
							var e = this.subtitleTrackController;
							e && (e.subtitleTrack = t)
						}
					}, {
						key: "subtitleDisplay",
						get: function() {
							var t = this.subtitleTrackController;
							return !!t && t.subtitleDisplay
						},
						set: function(t) {
							var e = this.subtitleTrackController;
							e && (e.subtitleDisplay = t)
						}
					}]), _
				}();
				e.default = Ke
			}, function(t, e, u) {
				function l(n) {
					var i = {};

					function r(t) {
						if (i[t]) return i[t].exports;
						var e = i[t] = {
							i: t,
							l: !1,
							exports: {}
						};
						return n[t].call(e.exports, e, e.exports, r), e.l = !0, e.exports
					}
					r.m = n, r.c = i, r.i = function(t) {
						return t
					}, r.d = function(t, e, n) {
						r.o(t, e) || Object.defineProperty(t, e, {
							configurable: !1,
							enumerable: !0,
							get: n
						})
					}, r.r = function(t) {
						Object.defineProperty(t, "__esModule", {
							value: !0
						})
					}, r.n = function(t) {
						var e = t && t.__esModule ? function() {
							return t.default
						} : function() {
							return t
						};
						return r.d(e, "a", e), e
					}, r.o = function(t, e) {
						return Object.prototype.hasOwnProperty.call(t, e)
					}, r.p = "/", r.oe = function(t) {
						throw console.error(t), t
					};
					var t = r(r.s = ENTRY_MODULE);
					return t.default || t
				}
				var c = "[\\.|\\-|\\+|\\w|/|@]+",
					d = "\\((/\\*.*?\\*/)?s?.*?(" + c + ").*?\\)";

				function h(t) {
					return (t + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
				}

				function f(t, e, n) {
					var i = {};
					i[n] = [];
					var r = e.toString(),
						o = r.match(/^function\s?\(\w+,\s*\w+,\s*(\w+)\)/);
					if (!o) return i;
					for (var a, s = o[1], l = new RegExp("(\\\\n|\\W)" + h(s) + d, "g"); a = l.exec(r);) "dll-reference" !== a[3] && i[n].push(a[3]);
					for (l = new RegExp("\\(" + h(s) + '\\("(dll-reference\\s(' + c + '))"\\)\\)' + d, "g"); a = l.exec(r);) t[a[2]] || (i[n].push(a[1]), t[a[2]] = u(a[1]).m), i[a[2]] = i[a[2]] || [], i[a[2]].push(a[4]);
					return i
				}

				function p(n) {
					return Object.keys(n).reduce(function(t, e) {
						return t || 0 < n[e].length
					}, !1)
				}
				t.exports = function(t, e) {
					e = e || {};
					var n = {
							main: u.m
						},
						i = e.all ? {
							main: Object.keys(n)
						} : function(t, e) {
							for (var n = {
									main: [e]
								}, i = {
									main: []
								}, r = {
									main: {}
								}; p(n);)
								for (var o = Object.keys(n), a = 0; a < o.length; a++) {
									var s = o[a],
										l = n[s].pop();
									if (r[s] = r[s] || {}, !r[s][l] && t[s][l]) {
										r[s][l] = !0, i[s] = i[s] || [], i[s].push(l);
										for (var u = f(t, t[s][l], s), c = Object.keys(u), d = 0; d < c.length; d++) n[c[d]] = n[c[d]] || [], n[c[d]] = n[c[d]].concat(u[c[d]])
									}
								}
							return i
						}(n, t),
						r = "";
					Object.keys(i).filter(function(t) {
						return "main" !== t
					}).forEach(function(e) {
						for (var t = 0; i[e][t];) t++;
						i[e].push(t), n[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", r = r + "var " + e + " = (" + l.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + i[e].map(function(t) {
							return JSON.stringify(t) + ": " + n[e][t].toString()
						}).join(",") + "});\n"
					}), r = r + "(" + l.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + i.main.map(function(t) {
						return JSON.stringify(t) + ": " + n.main[t].toString()
					}).join(",") + "})(self);";
					var o = new window.Blob([r], {
						type: "text/javascript"
					});
					if (e.bare) return o;
					var a = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(o),
						s = new window.Worker(a);
					return s.objectURL = a, s
				}
			}, function(t, e, n) {
				"use strict";
				Object.defineProperty(e, "__esModule", {
					value: !0
				});
				var a = n(8),
					s = n(1),
					l = n(0),
					i = n(6),
					u = n.n(i);
				e.default = function(r) {
					var o = new u.a;
					o.trigger = function(t) {
						for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
						o.emit.apply(o, [t, t].concat(n))
					}, o.off = function(t) {
						for (var e = arguments.length, n = Array(1 < e ? e - 1 : 0), i = 1; i < e; i++) n[i - 1] = arguments[i];
						o.removeListener.apply(o, [t].concat(n))
					};
					var i = function(t, e) {
						r.postMessage({
							event: t,
							data: e
						})
					};
					r.addEventListener("message", function(t) {
						var e = t.data;
						switch (e.cmd) {
							case "init":
								var n = JSON.parse(e.config);
								r.demuxer = new a.a(o, e.typeSupported, n, e.vendor);
								try {
									Object(l.a)(!0 === n.debug)
								} catch (t) {
									console.warn("demuxerWorker: unable to enable logs")
								}
								i("init", null);
								break;
							case "demux":
								r.demuxer.push(e.data, e.decryptdata, e.initSegment, e.audioCodec, e.videoCodec, e.timeOffset, e.discontinuity, e.trackSwitch, e.contiguous, e.duration, e.accurateTimeOffset, e.defaultInitPTS)
						}
					}), o.on(s.a.FRAG_DECRYPTED, i), o.on(s.a.FRAG_PARSING_INIT_SEGMENT, i), o.on(s.a.FRAG_PARSED, i), o.on(s.a.ERROR, i), o.on(s.a.FRAG_PARSING_METADATA, i), o.on(s.a.FRAG_PARSING_USERDATA, i), o.on(s.a.INIT_PTS_FOUND, i), o.on(s.a.FRAG_PARSING_DATA, function(t, e) {
						var n = [],
							i = {
								event: t,
								data: e
							};
						e.data1 && (i.data1 = e.data1.buffer, n.push(e.data1.buffer), delete e.data1), e.data2 && (i.data2 = e.data2.buffer, n.push(e.data2.buffer), delete e.data2), r.postMessage(i, n)
					})
				}
			}, function(t, e) {
				String.prototype.endsWith || function() {
					"use strict";
					var t = function() {
							try {
								var t = {},
									e = Object.defineProperty,
									n = e(t, t, t) && e
							} catch (t) {}
							return n
						}(),
						u = {}.toString,
						e = function(t) {
							if (null == this) throw TypeError();
							var e = String(this);
							if (t && "[object RegExp]" == u.call(t)) throw TypeError();
							var n = e.length,
								i = String(t),
								r = i.length,
								o = n;
							if (1 < arguments.length) {
								var a = arguments[1];
								void 0 !== a && (o = a ? Number(a) : 0) != o && (o = 0)
							}
							var s = Math.min(Math.max(o, 0), n) - r;
							if (s < 0) return !1;
							for (var l = -1; ++l < r;)
								if (e.charCodeAt(s + l) != i.charCodeAt(l)) return !1;
							return !0
						};
					t ? t(String.prototype, "endsWith", {
						value: e,
						configurable: !0,
						writable: !0
					}) : String.prototype.endsWith = e
				}()
			}]).default
		}, t.exports = i()
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = i(n(0)),
			o = i(n(1)),
			a = i(n(3)),
			s = i(n(2)),
			l = i(n(10)),
			u = i(n(4));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(200);
		var c = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.el.src = t.src, e
			}
			return (0, s.default)(i, n), i.prototype.getPlaybackType = function() {
				return l.default.NO_OP
			}, (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "html_img"
				}
			}, {
				key: "tagName",
				get: function() {
					return "img"
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						"data-html-img": ""
					}
				}
			}, {
				key: "events",
				get: function() {
					return {
						load: "_onLoad",
						abort: "_onError",
						error: "_onError"
					}
				}
			}]), i.prototype.render = function() {
				return this.trigger(u.default.PLAYBACK_READY, this.name), this
			}, i.prototype._onLoad = function() {
				this.trigger(u.default.PLAYBACK_ENDED, this.name)
			}, i.prototype._onError = function(t) {
				var e = "error" === t.type ? "load error" : "loading aborted";
				this.trigger(u.default.PLAYBACK_ERROR, {
					message: e
				}, this.name)
			}, i
		}(l.default);
		(e.default = c).canPlay = function(t) {
			return /\.(png|jpg|jpeg|gif|bmp|tiff|pgm|pnm|webp)(|\?.*)$/i.test(t)
		}, t.exports = e.default
	}, function(t, e, n) {
		var i = n(201);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, "[data-html-img] {\n  max-width: 100%;\n  max-height: 100%; }\n", ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = o(n(0)),
			s = o(n(1)),
			i = o(n(3)),
			l = o(n(2)),
			u = n(5),
			r = o(n(10)),
			c = o(n(8)),
			d = o(n(4)),
			h = o(n(203));

		function o(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(204);
		var f = function(r) {
			function o() {
				(0, a.default)(this, o);
				for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
				var i = (0, s.default)(this, r.call.apply(r, [this].concat(e)));
				return i._noiseFrameNum = -1, i
			}
			return (0, l.default)(o, r), (0, i.default)(o, [{
				key: "name",
				get: function() {
					return "no_op"
				}
			}, {
				key: "template",
				get: function() {
					return (0, c.default)(h.default)
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						"data-no-op": ""
					}
				}
			}]), o.prototype.render = function() {
				var t = this.options.playbackNotSupportedMessage || this.i18n.t("playback_not_supported");
				this.$el.html(this.template({
					message: t
				})), this.trigger(d.default.PLAYBACK_READY, this.name);
				var e = !(!this.options.poster || !this.options.poster.showForNoOp);
				return !this.options.autoPlay && e || this._animate(), this
			}, o.prototype._noise = function() {
				if (this._noiseFrameNum = (this._noiseFrameNum + 1) % 5, !this._noiseFrameNum) {
					var e = this.context.createImageData(this.context.canvas.width, this.context.canvas.height),
						n = void 0;
					try {
						n = new Uint32Array(e.data.buffer)
					} catch (t) {
						n = new Uint32Array(this.context.canvas.width * this.context.canvas.height * 4);
						for (var i = e.data, r = 0; r < i.length; r++) n[r] = i[r]
					}
					for (var t = n.length, o = 6 * Math.random() + 4, a = 0, s = 0, l = 0; l < t;) {
						if (a < 0) a = o * Math.random(), s = 255 * Math.pow(Math.random(), .4) << 24;
						a -= 1, n[l++] = s
					}
					this.context.putImageData(e, 0, 0)
				}
			}, o.prototype._loop = function() {
				var t = this;
				this._stop || (this._noise(), this._animationHandle = (0, u.requestAnimationFrame)(function() {
					return t._loop()
				}))
			}, o.prototype.destroy = function() {
				this._animationHandle && ((0, u.cancelAnimationFrame)(this._animationHandle), this._stop = !0)
			}, o.prototype._animate = function() {
				this.canvas = this.$el.find("canvas[data-no-op-canvas]")[0], this.context = this.canvas.getContext("2d"), this._loop()
			}, o
		}(r.default);
		(e.default = f).canPlay = function(t) {
			return !0
		}, t.exports = e.default
	}, function(t, e) {
		t.exports = "<canvas data-no-op-canvas></canvas>\n<p data-no-op-msg><%=message%><p>\n"
	}, function(t, e, n) {
		var i = n(205);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, "[data-no-op] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\n[data-no-op] p[data-no-op-msg] {\n  position: absolute;\n  text-align: center;\n  font-size: 25px;\n  left: 0;\n  right: 0;\n  color: white;\n  padding: 10px;\n  /* center vertically */\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  max-height: 100%;\n  overflow: auto; }\n\n[data-no-op] canvas[data-no-op-canvas] {\n  background-color: #777;\n  height: 100%;\n  width: 100%; }\n", ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = d(n(0)),
			o = d(n(1)),
			a = d(n(3)),
			s = d(n(2)),
			i = d(n(42)),
			l = d(n(4)),
			u = d(n(8)),
			c = d(n(207));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(208);
		var h = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.template = (0, u.default)(c.default), e.showTimeout = null, e.listenTo(e.container, l.default.CONTAINER_STATE_BUFFERING, e.onBuffering), e.listenTo(e.container, l.default.CONTAINER_STATE_BUFFERFULL, e.onBufferFull), e.listenTo(e.container, l.default.CONTAINER_STOP, e.onStop), e.listenTo(e.container, l.default.CONTAINER_ENDED, e.onStop), e.listenTo(e.container, l.default.CONTAINER_ERROR, e.onStop), e.render(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "spinner"
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						"data-spinner": "",
						class: "spinner-three-bounce"
					}
				}
			}]), i.prototype.onBuffering = function() {
				this.show()
			}, i.prototype.onBufferFull = function() {
				this.hide()
			}, i.prototype.onStop = function() {
				this.hide()
			}, i.prototype.show = function() {
				var t = this;
				null === this.showTimeout && (this.showTimeout = setTimeout(function() {
					return t.$el.show()
				}, 300))
			}, i.prototype.hide = function() {
				null !== this.showTimeout && (clearTimeout(this.showTimeout), this.showTimeout = null), this.$el.hide()
			}, i.prototype.render = function() {
				return this.$el.html(this.template()), this.container.$el.append(this.$el), this.$el.hide(), this.container.buffering && this.onBuffering(), this
			}, i
		}(i.default);
		e.default = h, t.exports = e.default
	}, function(t, e) {
		t.exports = "<div data-bounce1></div><div data-bounce2></div><div data-bounce3></div>\n"
	}, function(t, e, n) {
		var i = n(209);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, ".spinner-three-bounce[data-spinner] {\n  position: absolute;\n  margin: 0 auto;\n  width: 70px;\n  text-align: center;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  margin-left: auto;\n  margin-right: auto;\n  /* center vertically */\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .spinner-three-bounce[data-spinner] > div {\n    width: 18px;\n    height: 18px;\n    background-color: #FFFFFF;\n    border-radius: 100%;\n    display: inline-block;\n    -webkit-animation: bouncedelay 1.4s infinite ease-in-out;\n            animation: bouncedelay 1.4s infinite ease-in-out;\n    /* Prevent first frame from flickering when animation starts */\n    -webkit-animation-fill-mode: both;\n            animation-fill-mode: both; }\n  .spinner-three-bounce[data-spinner] [data-bounce1] {\n    -webkit-animation-delay: -0.32s;\n            animation-delay: -0.32s; }\n  .spinner-three-bounce[data-spinner] [data-bounce2] {\n    -webkit-animation-delay: -0.16s;\n            animation-delay: -0.16s; }\n\n@-webkit-keyframes bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n\n@keyframes bouncedelay {\n  0%, 80%, 100% {\n    -webkit-transform: scale(0);\n            transform: scale(0); }\n  40% {\n    -webkit-transform: scale(1);\n            transform: scale(1); } }\n", ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(211),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = c(n(0)),
			o = c(n(1)),
			a = c(n(3)),
			s = c(n(2)),
			i = c(n(43)),
			l = c(n(4)),
			u = c(n(6));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var d = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.setInitialAttrs(), e.reportInterval = e.options.reportInterval || 5e3, e.state = "IDLE", e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "stats"
				}
			}]), i.prototype.bindEvents = function() {
				this.listenTo(this.container.playback, l.default.PLAYBACK_PLAY, this.onPlay), this.listenTo(this.container, l.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, l.default.CONTAINER_ENDED, this.onStop), this.listenTo(this.container, l.default.CONTAINER_DESTROYED, this.onStop), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERING, this.onBuffering), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, l.default.CONTAINER_STATS_ADD, this.onStatsAdd), this.listenTo(this.container, l.default.CONTAINER_BITRATE, this.onStatsAdd), this.listenTo(this.container.playback, l.default.PLAYBACK_STATS_ADD, this.onStatsAdd)
			}, i.prototype.setInitialAttrs = function() {
				this.firstPlay = !0, this.startupTime = 0, this.rebufferingTime = 0, this.watchingTime = 0, this.rebuffers = 0, this.externalMetrics = {}
			}, i.prototype.onPlay = function() {
				this.state = "PLAYING", this.watchingTimeInit = Date.now(), this.intervalId || (this.intervalId = setInterval(this.report.bind(this), this.reportInterval))
			}, i.prototype.onStop = function() {
				clearInterval(this.intervalId), this.report(), this.intervalId = void 0, this.state = "STOPPED"
			}, i.prototype.onBuffering = function() {
				this.firstPlay ? this.startupTimeInit = Date.now() : this.rebufferingTimeInit = Date.now(), this.state = "BUFFERING", this.rebuffers++
			}, i.prototype.onBufferFull = function() {
				this.firstPlay && this.startupTimeInit ? (this.firstPlay = !1, this.startupTime = Date.now() - this.startupTimeInit, this.watchingTimeInit = Date.now()) : this.rebufferingTimeInit && (this.rebufferingTime += this.getRebufferingTime()), this.rebufferingTimeInit = void 0, this.state = "PLAYING"
			}, i.prototype.getRebufferingTime = function() {
				return Date.now() - this.rebufferingTimeInit
			}, i.prototype.getWatchingTime = function() {
				return Date.now() - this.watchingTimeInit - this.rebufferingTime
			}, i.prototype.isRebuffering = function() {
				return !!this.rebufferingTimeInit
			}, i.prototype.onStatsAdd = function(t) {
				u.default.extend(this.externalMetrics, t)
			}, i.prototype.getStats = function() {
				var t = {
					startupTime: this.startupTime,
					rebuffers: this.rebuffers,
					rebufferingTime: this.isRebuffering() ? this.rebufferingTime + this.getRebufferingTime() : this.rebufferingTime,
					watchingTime: this.isRebuffering() ? this.getWatchingTime() - this.getRebufferingTime() : this.getWatchingTime()
				};
				return u.default.extend(t, this.externalMetrics), t
			}, i.prototype.report = function() {
				this.container.statsReport(this.getStats())
			}, i
		}(i.default);
		e.default = d, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = d(n(0)),
			o = d(n(1)),
			a = d(n(3)),
			s = d(n(2)),
			i = d(n(42)),
			l = d(n(4)),
			u = d(n(8)),
			c = d(n(213));

		function d(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(214);
		var h = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.configure(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "watermark"
				}
			}, {
				key: "template",
				get: function() {
					return (0, u.default)(c.default)
				}
			}]), i.prototype.bindEvents = function() {
				this.listenTo(this.container, l.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, l.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, l.default.CONTAINER_OPTIONS_CHANGE, this.configure)
			}, i.prototype.configure = function() {
				this.position = this.options.position || "bottom-right", this.options.watermark ? (this.imageUrl = this.options.watermark, this.imageLink = this.options.watermarkLink, this.render()) : this.$el.remove()
			}, i.prototype.onPlay = function() {
				this.hidden || this.$el.show()
			}, i.prototype.onStop = function() {
				this.$el.hide()
			}, i.prototype.render = function() {
				this.$el.hide();
				var t = {
					position: this.position,
					imageUrl: this.imageUrl,
					imageLink: this.imageLink
				};
				return this.$el.html(this.template(t)), this.container.$el.append(this.$el), this
			}, i
		}(i.default);
		e.default = h, t.exports = e.default
	}, function(t, e) {
		t.exports = "<div data-watermark data-watermark-<%=position %>>\n<% if(typeof imageLink !== 'undefined') { %>\n<a target=_blank href=\"<%= imageLink %>\">\n<% } %>\n<img src=\"<%= imageUrl %>\">\n<% if(typeof imageLink !== 'undefined') { %>\n</a>\n<% } %>\n</div>\n"
	}, function(t, e, n) {
		var i = n(215);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, "[data-watermark] {\n  position: absolute;\n  min-width: 70px;\n  max-width: 200px;\n  width: 12%;\n  text-align: center;\n  z-index: 10; }\n\n[data-watermark] a {\n  outline: none;\n  cursor: pointer; }\n\n[data-watermark] img {\n  max-width: 100%; }\n\n[data-watermark-bottom-left] {\n  bottom: 10px;\n  left: 10px; }\n\n[data-watermark-bottom-right] {\n  bottom: 10px;\n  right: 42px; }\n\n[data-watermark-top-left] {\n  top: 10px;\n  left: 10px; }\n\n[data-watermark-top-right] {\n  top: 10px;\n  right: 37px; }\n", ""])
	}, function(p, g, m) {
		"use strict";
		(function(r) {
			Object.defineProperty(g, "__esModule", {
				value: !0
			});
			var o = i(m(0)),
				a = i(m(1)),
				t = i(m(3)),
				e = i(m(2)),
				n = i(m(42)),
				s = i(m(4)),
				l = i(m(8)),
				u = i(m(10)),
				c = i(m(79)),
				d = i(m(217)),
				h = i(m(62));

			function i(t) {
				return t && t.__esModule ? t : {
					default: t
				}
			}
			m(218);
			var f = function(n) {
				function i(t) {
					(0, o.default)(this, i);
					var e = (0, a.default)(this, n.call(this, t));
					return e.hasStartedPlaying = !1, e.playRequested = !1, e.render(), r.nextTick(function() {
						return e.update()
					}), e
				}
				return (0, e.default)(i, n), (0, t.default)(i, [{
					key: "name",
					get: function() {
						return "poster"
					}
				}, {
					key: "template",
					get: function() {
						return (0, l.default)(d.default)
					}
				}, {
					key: "shouldRender",
					get: function() {
						var t = !(!this.options.poster || !this.options.poster.showForNoOp);
						return "html_img" !== this.container.playback.name && (this.container.playback.getPlaybackType() !== u.default.NO_OP || t)
					}
				}, {
					key: "attributes",
					get: function() {
						return {
							class: "player-poster",
							"data-poster": ""
						}
					}
				}, {
					key: "events",
					get: function() {
						return {
							click: "clicked"
						}
					}
				}, {
					key: "showOnVideoEnd",
					get: function() {
						return !this.options.poster || this.options.poster.showOnVideoEnd || void 0 === this.options.poster.showOnVideoEnd
					}
				}]), i.prototype.bindEvents = function() {
					this.listenTo(this.container, s.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, s.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, s.default.CONTAINER_STATE_BUFFERING, this.update), this.listenTo(this.container, s.default.CONTAINER_STATE_BUFFERFULL, this.update), this.listenTo(this.container, s.default.CONTAINER_OPTIONS_CHANGE, this.render), this.listenTo(this.container, s.default.CONTAINER_ERROR, this.onError), this.showOnVideoEnd && this.listenTo(this.container, s.default.CONTAINER_ENDED, this.onStop)
				}, i.prototype.onError = function(t) {
					this.hasFatalError = t.level === c.default.Levels.FATAL, this.hasFatalError && (this.hasStartedPlaying = !1, this.playRequested = !1, this.showPlayButton())
				}, i.prototype.onPlay = function() {
					this.hasStartedPlaying = !0, this.update()
				}, i.prototype.onStop = function() {
					this.hasStartedPlaying = !1, this.playRequested = !1, this.update()
				}, i.prototype.updatePlayButton = function(t) {
					!t || this.options.chromeless && !this.options.allowUserInteraction ? this.hidePlayButton() : this.showPlayButton()
				}, i.prototype.showPlayButton = function() {
					this.hasFatalError && !this.options.disableErrorScreen || (this.$playButton.show(), this.$el.addClass("clickable"))
				}, i.prototype.hidePlayButton = function() {
					this.$playButton.hide(), this.$el.removeClass("clickable")
				}, i.prototype.clicked = function() {
					return this.options.chromeless && !this.options.allowUserInteraction || (this.playRequested = !0, this.update(), this.container.play()), !1
				}, i.prototype.shouldHideOnPlay = function() {
					return !this.container.playback.isAudioOnly
				}, i.prototype.update = function() {
					if (this.shouldRender) {
						var t = !this.playRequested && !this.hasStartedPlaying && !this.container.buffering;
						this.updatePlayButton(t), this.updatePoster()
					}
				}, i.prototype.updatePoster = function() {
					this.hasStartedPlaying ? this.hidePoster() : this.showPoster()
				}, i.prototype.showPoster = function() {
					this.container.disableMediaControl(), this.$el.show()
				}, i.prototype.hidePoster = function() {
					this.container.enableMediaControl(), this.shouldHideOnPlay() && this.$el.hide()
				}, i.prototype.render = function() {
					if (this.shouldRender) {
						if (this.$el.html(this.template()), this.options.poster && void 0 === this.options.poster.custom) {
							var t = this.options.poster.url || this.options.poster;
							this.$el.css({
								"background-image": "url(" + t + ")"
							})
						} else this.options.poster && this.$el.css({
							background: this.options.poster.custom
						});
						this.container.$el.append(this.el), this.$playWrapper = this.$el.find(".play-wrapper"), this.$playWrapper.append(h.default), this.$playButton = this.$playWrapper.find("svg"), this.$playButton.addClass("poster-icon"), this.$playButton.attr("data-poster", "");
						var e = this.options.mediacontrol && this.options.mediacontrol.buttons;
						return e && this.$el.find("svg path").css("fill", e), this.options.mediacontrol && this.options.mediacontrol.buttons && (e = this.options.mediacontrol.buttons, this.$playButton.css("color", e)), this.update(), this
					}
				}, i
			}(n.default);
			g.default = f, p.exports = g.default
		}).call(g, m(61))
	}, function(t, e) {
		t.exports = '<div class="play-wrapper" data-poster></div>\n'
	}, function(t, e, n) {
		var i = n(219);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, ".player-poster[data-poster] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 998;\n  top: 0;\n  left: 0;\n  background-color: #000;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: 50% 50%; }\n  .player-poster[data-poster].clickable {\n    cursor: pointer; }\n  .player-poster[data-poster]:hover .play-wrapper[data-poster] {\n    opacity: 1; }\n  .player-poster[data-poster] .play-wrapper[data-poster] {\n    width: 100%;\n    height: 25%;\n    margin: 0 auto;\n    opacity: 0.75;\n    transition: opacity 0.1s ease; }\n    .player-poster[data-poster] .play-wrapper[data-poster] svg {\n      height: 100%; }\n      .player-poster[data-poster] .play-wrapper[data-poster] svg path {\n        fill: #fff; }\n", ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(221),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = u(n(0)),
			o = u(n(1)),
			a = u(n(3)),
			s = u(n(2)),
			i = u(n(43)),
			l = u(n(4));

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var c = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.container.options.gaAccount && (e.account = e.container.options.gaAccount, e.trackerName = e.container.options.gaTrackerName ? e.container.options.gaTrackerName + "." : "Clappr.", e.domainName = e.container.options.gaDomainName, e.currentHDState = void 0, e.embedScript()), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "google_analytics"
				}
			}]), i.prototype.embedScript = function() {
				var t = this;
				if (window._gat) this.addEventListeners();
				else {
					var e = document.createElement("script");
					e.setAttribute("type", "text/javascript"), e.setAttribute("async", "async"), e.setAttribute("src", "//www.google-analytics.com/ga.js"), e.onload = function() {
						return t.addEventListeners()
					}, document.body.appendChild(e)
				}
			}, i.prototype.addEventListeners = function() {
				var e = this;
				this.container && (this.listenTo(this.container, l.default.CONTAINER_READY, this.onReady), this.listenTo(this.container, l.default.CONTAINER_PLAY, this.onPlay), this.listenTo(this.container, l.default.CONTAINER_STOP, this.onStop), this.listenTo(this.container, l.default.CONTAINER_PAUSE, this.onPause), this.listenTo(this.container, l.default.CONTAINER_ENDED, this.onEnded), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERING, this.onBuffering), this.listenTo(this.container, l.default.CONTAINER_STATE_BUFFERFULL, this.onBufferFull), this.listenTo(this.container, l.default.CONTAINER_ERROR, this.onError), this.listenTo(this.container, l.default.CONTAINER_PLAYBACKSTATE, this.onPlaybackChanged), this.listenTo(this.container, l.default.CONTAINER_VOLUME, function(t) {
					return e.onVolumeChanged(t)
				}), this.listenTo(this.container, l.default.CONTAINER_SEEK, function(t) {
					return e.onSeek(t)
				}), this.listenTo(this.container, l.default.CONTAINER_FULL_SCREEN, this.onFullscreen), this.listenTo(this.container, l.default.CONTAINER_HIGHDEFINITIONUPDATE, this.onHD), this.listenTo(this.container, l.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.onDVR)), _gaq.push([this.trackerName + "_setAccount", this.account]), this.domainName && _gaq.push([this.trackerName + "_setDomainName", this.domainName])
			}, i.prototype.onReady = function() {
				this.push(["Video", "Playback", this.container.playback.name])
			}, i.prototype.onPlay = function() {
				this.push(["Video", "Play", this.container.playback.src])
			}, i.prototype.onStop = function() {
				this.push(["Video", "Stop", this.container.playback.src])
			}, i.prototype.onEnded = function() {
				this.push(["Video", "Ended", this.container.playback.src])
			}, i.prototype.onBuffering = function() {
				this.push(["Video", "Buffering", this.container.playback.src])
			}, i.prototype.onBufferFull = function() {
				this.push(["Video", "Bufferfull", this.container.playback.src])
			}, i.prototype.onError = function() {
				this.push(["Video", "Error", this.container.playback.src])
			}, i.prototype.onHD = function(t) {
				var e = t ? "ON" : "OFF";
				e !== this.currentHDState && (this.currentHDState = e, this.push(["Video", "HD - " + e, this.container.playback.src]))
			}, i.prototype.onPlaybackChanged = function(t) {
				null !== t.type && this.push(["Video", "Playback Type - " + t.type, this.container.playback.src])
			}, i.prototype.onDVR = function(t) {
				var e = t ? "ON" : "OFF";
				this.push(["Interaction", "DVR - " + e, this.container.playback.src])
			}, i.prototype.onPause = function() {
				this.push(["Video", "Pause", this.container.playback.src])
			}, i.prototype.onSeek = function() {
				this.push(["Video", "Seek", this.container.playback.src])
			}, i.prototype.onVolumeChanged = function() {
				this.push(["Interaction", "Volume", this.container.playback.src])
			}, i.prototype.onFullscreen = function() {
				this.push(["Interaction", "Fullscreen", this.container.playback.src])
			}, i.prototype.push = function(t) {
				var e = [this.trackerName + "_trackEvent"].concat(t);
				_gaq.push(e)
			}, i
		}(i.default);
		e.default = c, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = c(n(0)),
			r = c(n(1)),
			o = c(n(3)),
			a = c(n(2)),
			s = c(n(43)),
			l = c(n(4)),
			u = c(n(10));

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var d = function(e) {
			function n(t) {
				return (0, i.default)(this, n), (0, r.default)(this, e.call(this, t))
			}
			return (0, a.default)(n, e), (0, o.default)(n, [{
				key: "name",
				get: function() {
					return "click_to_pause"
				}
			}]), n.prototype.bindEvents = function() {
				this.listenTo(this.container, l.default.CONTAINER_CLICK, this.click), this.listenTo(this.container, l.default.CONTAINER_SETTINGSUPDATE, this.settingsUpdate)
			}, n.prototype.click = function() {
				(this.container.getPlaybackType() !== u.default.LIVE || this.container.isDvrEnabled()) && (this.container.isPlaying() ? this.container.pause() : this.container.play())
			}, n.prototype.settingsUpdate = function() {
				var t = this.container.getPlaybackType() !== u.default.LIVE || this.container.isDvrEnabled();
				if (t !== this.pointerEnabled) {
					var e = t ? "addClass" : "removeClass";
					this.container.$el[e]("pointer-enabled"), this.pointerEnabled = t
				}
			}, n
		}(s.default);
		e.default = d, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = h(n(0)),
			o = h(n(1)),
			a = h(n(3)),
			s = h(n(2)),
			i = h(n(34)),
			l = h(n(8)),
			u = h(n(10)),
			c = h(n(4)),
			d = h(n(224));

		function h(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(225);
		var f = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.settingsUpdate(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "template",
				get: function() {
					return (0, l.default)(d.default)
				}
			}, {
				key: "name",
				get: function() {
					return "dvr_controls"
				}
			}, {
				key: "events",
				get: function() {
					return {
						"click .live-button": "click"
					}
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						class: "dvr-controls",
						"data-dvr-controls": ""
					}
				}
			}]), i.prototype.bindEvents = function() {
				this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_RENDERED, this.settingsUpdate), this.listenTo(this.core, c.default.CORE_OPTIONS_CHANGE, this.render), this.core.getCurrentContainer() && (this.listenToOnce(this.core.getCurrentContainer(), c.default.CONTAINER_TIMEUPDATE, this.render), this.listenTo(this.core.getCurrentContainer(), c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.dvrChanged))
			}, i.prototype.containerChanged = function() {
				this.stopListening(), this.bindEvents()
			}, i.prototype.dvrChanged = function(t) {
				this.core.getPlaybackType() === u.default.LIVE && (this.settingsUpdate(), this.core.mediaControl.$el.addClass("live"), t ? (this.core.mediaControl.$el.addClass("dvr"), this.core.mediaControl.$el.find(".media-control-indicator[data-position], .media-control-indicator[data-duration]").hide()) : this.core.mediaControl.$el.removeClass("dvr"))
			}, i.prototype.click = function() {
				var t = this.core.mediaControl,
					e = t.container;
				e.isPlaying() || e.play(), t.$el.hasClass("dvr") && e.seek(e.getDuration())
			}, i.prototype.settingsUpdate = function() {
				var t = this;
				this.stopListening(), this.core.mediaControl.$el.removeClass("live"), this.shouldRender() && (this.render(), this.$el.click(function() {
					return t.click()
				})), this.bindEvents()
			}, i.prototype.shouldRender = function() {
				return (void 0 === this.core.options.useDvrControls || !!this.core.options.useDvrControls) && this.core.getPlaybackType() === u.default.LIVE
			}, i.prototype.render = function() {
				return this.$el.html(this.template({
					live: this.core.i18n.t("live"),
					backToLive: this.core.i18n.t("back_to_live")
				})), this.shouldRender() && (this.core.mediaControl.$el.addClass("live"), this.core.mediaControl.$(".media-control-left-panel[data-media-control]").append(this.$el)), this
			}, i
		}(i.default);
		e.default = f, t.exports = e.default
	}, function(t, e) {
		t.exports = '<div class="live-info"><%= live %></div>\n<button type="button" class="live-button" aria-label="<%= backToLive %>"><%= backToLive %></button>\n'
	}, function(t, e, n) {
		var i = n(226);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, '.dvr-controls[data-dvr-controls] {\n  display: inline-block;\n  float: left;\n  color: #fff;\n  line-height: 32px;\n  font-size: 10px;\n  font-weight: bold;\n  margin-left: 6px; }\n  .dvr-controls[data-dvr-controls] .live-info {\n    cursor: default;\n    font-family: "Roboto", "Open Sans", Arial, sans-serif;\n    text-transform: uppercase; }\n    .dvr-controls[data-dvr-controls] .live-info:before {\n      content: "";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #ff0101; }\n    .dvr-controls[data-dvr-controls] .live-info.disabled {\n      opacity: 0.3; }\n      .dvr-controls[data-dvr-controls] .live-info.disabled:before {\n        background-color: #fff; }\n  .dvr-controls[data-dvr-controls] .live-button {\n    cursor: pointer;\n    outline: none;\n    display: none;\n    border: 0;\n    color: #fff;\n    background-color: transparent;\n    height: 32px;\n    padding: 0;\n    opacity: 0.7;\n    font-family: "Roboto", "Open Sans", Arial, sans-serif;\n    text-transform: uppercase;\n    transition: all 0.1s ease; }\n    .dvr-controls[data-dvr-controls] .live-button:before {\n      content: "";\n      display: inline-block;\n      position: relative;\n      width: 7px;\n      height: 7px;\n      border-radius: 3.5px;\n      margin-right: 3.5px;\n      background-color: #fff; }\n    .dvr-controls[data-dvr-controls] .live-button:hover {\n      opacity: 1;\n      text-shadow: rgba(255, 255, 255, 0.75) 0 0 5px; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-info {\n  display: none; }\n\n.dvr .dvr-controls[data-dvr-controls] .live-button {\n  display: block; }\n\n.dvr.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #005aff; }\n\n.media-control.live[data-media-control] .media-control-layer[data-controls] .bar-container[data-seekbar] .bar-background[data-seekbar] .bar-fill-2[data-seekbar] {\n  background-color: #ff0101; }\n', ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(228),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(n(0)),
			a = r(n(1)),
			s = r(n(3)),
			l = r(n(2)),
			i = r(n(34)),
			u = r(n(8)),
			c = r(n(4)),
			d = r(n(229)),
			h = r(n(230));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(231);
		var f = function(i) {
			function r(t) {
				(0, o.default)(this, r);
				var e = (0, a.default)(this, i.call(this, t)),
					n = t.options.closedCaptionsConfig;
				return e._title = n && n.title ? n.title : null, e._ariaLabel = n && n.ariaLabel ? n.ariaLabel : "cc-button", e._labelCb = n && n.labelCallback && "function" == typeof n.labelCallback ? n.labelCallback : function(t) {
					return t.name
				}, e
			}
			return (0, l.default)(r, i), (0, s.default)(r, [{
				key: "name",
				get: function() {
					return "closed_captions"
				}
			}, {
				key: "template",
				get: function() {
					return (0, u.default)(h.default)
				}
			}, {
				key: "events",
				get: function() {
					return {
						"click [data-cc-button]": "toggleContextMenu",
						"click [data-cc-select]": "onTrackSelect"
					}
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						class: "cc-controls",
						"data-cc-controls": ""
					}
				}
			}]), r.prototype.bindEvents = function() {
				this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_RENDERED, this.render), this.listenTo(this.core.mediaControl, c.default.MEDIACONTROL_HIDE, this.hideContextMenu), this.container = this.core.getCurrentContainer(), this.container && (this.listenTo(this.container, c.default.CONTAINER_SUBTITLE_AVAILABLE, this.onSubtitleAvailable), this.listenTo(this.container, c.default.CONTAINER_SUBTITLE_CHANGED, this.onSubtitleChanged), this.listenTo(this.container, c.default.CONTAINER_STOP, this.onContainerStop))
			}, r.prototype.onContainerStop = function() {
				this.ccAvailable(!1)
			}, r.prototype.containerChanged = function() {
				this.ccAvailable(!1), this.stopListening(), this.bindEvents()
			}, r.prototype.onSubtitleAvailable = function() {
				this.renderCcButton(), this.ccAvailable(!0)
			}, r.prototype.onSubtitleChanged = function(t) {
				this.setCurrentContextMenuElement(t.id)
			}, r.prototype.onTrackSelect = function(t) {
				var e = parseInt(t.target.dataset.ccSelect, 10);
				return this.container.closedCaptionsTrackId = e, this.hideContextMenu(), t.stopPropagation(), !1
			}, r.prototype.ccAvailable = function(t) {
				var e = t ? "addClass" : "removeClass";
				this.$el[e]("available")
			}, r.prototype.toggleContextMenu = function() {
				this.$el.find("ul").toggle()
			}, r.prototype.hideContextMenu = function() {
				this.$el.find("ul").hide()
			}, r.prototype.contextMenuElement = function(t) {
				return this.$el.find("ul a" + (isNaN(t) ? "" : '[data-cc-select="' + t + '"]')).parent()
			}, r.prototype.setCurrentContextMenuElement = function(t) {
				if (this._trackId !== t) {
					this.contextMenuElement().removeClass("current"), this.contextMenuElement(t).addClass("current");
					var e = -1 < t ? "addClass" : "removeClass";
					this.$ccButton[e]("enabled"), this._trackId = t
				}
			}, r.prototype.renderCcButton = function() {
				for (var t = this.container ? this.container.closedCaptionsTracks : [], e = 0; e < t.length; e++) t[e].label = this._labelCb(t[e]);
				this.$el.html(this.template({
					ariaLabel: this._ariaLabel,
					disabledLabel: this.core.i18n.t("disabled"),
					title: this._title,
					tracks: t
				})), this.$ccButton = this.$el.find("button.cc-button[data-cc-button]"), this.$ccButton.append(d.default), this.$el.append(this.style)
			}, r.prototype.render = function() {
				this.renderCcButton();
				var t = this.core.mediaControl.$el.find("button[data-fullscreen]");
				return t[0] ? this.$el.insertAfter(t) : this.core.mediaControl.$el.find(".media-control-right-panel[data-media-control]").prepend(this.$el), this
			}, r
		}(i.default);
		e.default = f, t.exports = e.default
	}, function(t, e) {
		t.exports = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 49 41.8" style="enable-background:new 0 0 49 41.8;" xml:space="preserve"><path d="M47.1,0H3.2C1.6,0,0,1.2,0,2.8v31.5C0,35.9,1.6,37,3.2,37h11.9l3.2,1.9l4.7,2.7c0.9,0.5,2-0.1,2-1.1V37h22.1 c1.6,0,1.9-1.1,1.9-2.7V2.8C49,1.2,48.7,0,47.1,0z M7.2,18.6c0-4.8,3.5-9.3,9.9-9.3c4.8,0,7.1,2.7,7.1,2.7l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2c0,0-2.7,2.9-7.6,2.9 C10.8,27.9,7.2,23.5,7.2,18.6z M36.9,27.9c-6.4,0-9.9-4.4-9.9-9.3c0-4.8,3.5-9.3,9.9-9.3C41.7,9.3,44,12,44,12l-2.5,4 c0,0-1.7-1.7-4.2-1.7c-2.8,0-4.3,2.1-4.3,4.3c0,2.1,1.5,4.4,4.5,4.4c2.5,0,4.9-2.1,4.9-2.1l2.2,4.2C44.5,25,41.9,27.9,36.9,27.9z"></path></svg>'
	}, function(t, e) {
		t.exports = '<button type="button" class="cc-button media-control-button media-control-icon" data-cc-button aria-label="<%= ariaLabel %>"></button>\n<ul>\n  <% if (title) { %>\n  <li data-title><%= title %></li>\n  <% }; %>\n  <li><a href="#" data-cc-select="-1"><%= disabledLabel %></a></li>\n  <% for (var i = 0; i < tracks.length; i++) { %>\n    <li><a href="#" data-cc-select="<%= tracks[i].id %>"><%= tracks[i].label %></a></li>\n  <% }; %>\n</ul>\n'
	}, function(t, e, n) {
		var i = n(232);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, ".cc-controls[data-cc-controls] {\n  float: right;\n  position: relative;\n  display: none; }\n  .cc-controls[data-cc-controls].available {\n    display: block; }\n  .cc-controls[data-cc-controls] .cc-button {\n    padding: 6px !important; }\n    .cc-controls[data-cc-controls] .cc-button.enabled {\n      display: block;\n      opacity: 1.0; }\n      .cc-controls[data-cc-controls] .cc-button.enabled:hover {\n        opacity: 1.0;\n        text-shadow: none; }\n  .cc-controls[data-cc-controls] > ul {\n    list-style-type: none;\n    position: absolute;\n    bottom: 25px;\n    border: 1px solid black;\n    display: none;\n    background-color: #e6e6e6; }\n  .cc-controls[data-cc-controls] li {\n    font-size: 10px; }\n    .cc-controls[data-cc-controls] li[data-title] {\n      background-color: #c3c2c2;\n      padding: 5px; }\n    .cc-controls[data-cc-controls] li a {\n      color: #444;\n      padding: 2px 10px;\n      display: block;\n      text-decoration: none; }\n      .cc-controls[data-cc-controls] li a:hover {\n        background-color: #555;\n        color: white; }\n        .cc-controls[data-cc-controls] li a:hover a {\n          color: white;\n          text-decoration: none; }\n    .cc-controls[data-cc-controls] li.current a {\n      color: #f00; }\n", ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = h(n(0)),
			o = h(n(1)),
			a = h(n(3)),
			s = h(n(2)),
			i = h(n(35)),
			l = h(n(4)),
			u = h(n(6)),
			c = h(n(62)),
			d = h(n(84));

		function h(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var f = (0, u.default)('link[rel="shortcut icon"]'),
			p = function(n) {
				function i(t) {
					(0, r.default)(this, i);
					var e = (0, o.default)(this, n.call(this, t));
					return e._container = null, e.configure(), e
				}
				return (0, s.default)(i, n), (0, a.default)(i, [{
					key: "name",
					get: function() {
						return "favicon"
					}
				}, {
					key: "oldIcon",
					get: function() {
						return f
					}
				}]), i.prototype.configure = function() {
					this.core.options.changeFavicon ? this.enabled || (this.stopListening(this.core, l.default.CORE_OPTIONS_CHANGE), this.enable()) : this.enabled && (this.disable(), this.listenTo(this.core, l.default.CORE_OPTIONS_CHANGE, this.configure))
				}, i.prototype.bindEvents = function() {
					this.listenTo(this.core, l.default.CORE_OPTIONS_CHANGE, this.configure), this.listenTo(this.core.mediaControl, l.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged), this.core.mediaControl.container && this.containerChanged()
				}, i.prototype.containerChanged = function() {
					this._container && this.stopListening(this._container), this._container = this.core.mediaControl.container, this.listenTo(this._container, l.default.CONTAINER_PLAY, this.setPlayIcon), this.listenTo(this._container, l.default.CONTAINER_PAUSE, this.setPauseIcon), this.listenTo(this._container, l.default.CONTAINER_STOP, this.resetIcon), this.listenTo(this._container, l.default.CONTAINER_ENDED, this.resetIcon), this.listenTo(this._container, l.default.CONTAINER_ERROR, this.resetIcon), this.resetIcon()
				}, i.prototype.disable = function() {
					n.prototype.disable.call(this), this.resetIcon()
				}, i.prototype.destroy = function() {
					n.prototype.destroy.call(this), this.resetIcon()
				}, i.prototype.createIcon = function(t) {
					var e = (0, u.default)("<canvas/>");
					e[0].width = 16, e[0].height = 16;
					var n = e[0].getContext("2d");
					n.fillStyle = "#000";
					var i = (0, u.default)(t).find("path").attr("d"),
						r = new Path2D(i);
					n.fill(r);
					var o = (0, u.default)('<link rel="shortcut icon" type="image/png"/>');
					return o.attr("href", e[0].toDataURL("image/png")), o
				}, i.prototype.setPlayIcon = function() {
					this.playIcon || (this.playIcon = this.createIcon(c.default)), this.changeIcon(this.playIcon)
				}, i.prototype.setPauseIcon = function() {
					this.pauseIcon || (this.pauseIcon = this.createIcon(d.default)), this.changeIcon(this.pauseIcon)
				}, i.prototype.resetIcon = function() {
					(0, u.default)('link[rel="shortcut icon"]').remove(), (0, u.default)("head").append(this.oldIcon)
				}, i.prototype.changeIcon = function(t) {
					t && ((0, u.default)('link[rel="shortcut icon"]').remove(), (0, u.default)("head").append(t))
				}, i
			}(i.default);
		e.default = p, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(235),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = f(n(0)),
			o = f(n(1)),
			a = f(n(3)),
			s = f(n(2)),
			l = n(5),
			i = f(n(34)),
			u = f(n(8)),
			c = f(n(4)),
			d = f(n(10)),
			h = f(n(236));

		function f(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(237);
		var p = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e.hoveringOverSeekBar = !1, e.hoverPosition = null, e.duration = null, e.firstFragDateTime = null, e.actualLiveTime = !!e.mediaControl.options.actualLiveTime, e.actualLiveTime && (e.mediaControl.options.actualLiveServerTime ? e.actualLiveServerTimeDiff = (new Date).getTime() - new Date(e.mediaControl.options.actualLiveServerTime).getTime() : e.actualLiveServerTimeDiff = 0), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "seek_time"
				}
			}, {
				key: "template",
				get: function() {
					return (0, u.default)(h.default)
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						class: "seek-time",
						"data-seek-time": ""
					}
				}
			}, {
				key: "mediaControl",
				get: function() {
					return this.core.mediaControl
				}
			}, {
				key: "mediaControlContainer",
				get: function() {
					return this.mediaControl.container
				}
			}, {
				key: "isLiveStreamWithDvr",
				get: function() {
					return this.mediaControlContainer && this.mediaControlContainer.getPlaybackType() === d.default.LIVE && this.mediaControlContainer.isDvrEnabled()
				}
			}, {
				key: "durationShown",
				get: function() {
					return this.isLiveStreamWithDvr && !this.actualLiveTime
				}
			}, {
				key: "useActualLiveTime",
				get: function() {
					return this.actualLiveTime && this.isLiveStreamWithDvr
				}
			}]), i.prototype.bindEvents = function() {
				this.listenTo(this.mediaControl, c.default.MEDIACONTROL_RENDERED, this.render), this.listenTo(this.mediaControl, c.default.MEDIACONTROL_MOUSEMOVE_SEEKBAR, this.showTime), this.listenTo(this.mediaControl, c.default.MEDIACONTROL_MOUSELEAVE_SEEKBAR, this.hideTime), this.listenTo(this.mediaControl, c.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged), this.mediaControlContainer && (this.listenTo(this.mediaControlContainer, c.default.CONTAINER_PLAYBACKDVRSTATECHANGED, this.update), this.listenTo(this.mediaControlContainer, c.default.CONTAINER_TIMEUPDATE, this.updateDuration))
			}, i.prototype.onContainerChanged = function() {
				this.stopListening(), this.bindEvents()
			}, i.prototype.updateDuration = function(t) {
				this.duration = t.total, this.firstFragDateTime = t.firstFragDateTime, this.update()
			}, i.prototype.showTime = function(t) {
				this.hoveringOverSeekBar = !0, this.calculateHoverPosition(t), this.update()
			}, i.prototype.hideTime = function() {
				this.hoveringOverSeekBar = !1, this.update()
			}, i.prototype.calculateHoverPosition = function(t) {
				var e = t.pageX - this.mediaControl.$seekBarContainer.offset().left;
				this.hoverPosition = Math.min(1, Math.max(e / this.mediaControl.$seekBarContainer.width(), 0))
			}, i.prototype.getSeekTime = function() {
				var t = void 0,
					e = void 0,
					n = void 0,
					i = void 0;
				return this.useActualLiveTime ? (this.actualLiveServerTimeDiff ? (n = new Date((new Date).getTime() - this.actualLiveServerTimeDiff), e = ((i = new Date(n)) - n.setHours(0, 0, 0, 0)) / 1e3) : this.firstFragDateTime && (i = new Date(this.firstFragDateTime), (n = new Date(this.firstFragDateTime)).setHours(0, 0, 0, 0), e = (i.getTime() - n.getTime()) / 1e3 + this.duration), (t = e - this.duration + this.hoverPosition * this.duration) < 0 && (t += 86400)) : t = this.hoverPosition * this.duration, {
					seekTime: t,
					secondsSinceMidnight: e
				}
			}, i.prototype.update = function() {
				if (this.rendered)
					if (this.shouldBeVisible()) {
						var t = this.getSeekTime(),
							e = (0, l.formatTime)(t.seekTime, this.useActualLiveTime);
						if (e !== this.displayedSeekTime && (this.$seekTimeEl.text(e), this.displayedSeekTime = e), this.durationShown) {
							this.$durationEl.show();
							var n = (0, l.formatTime)(this.actualLiveTime ? t.secondsSinceMidnight : this.duration, this.actualLiveTime);
							n !== this.displayedDuration && (this.$durationEl.text(n), this.displayedDuration = n)
						} else this.$durationEl.hide();
						this.$el.show();
						var i = this.mediaControl.$seekBarContainer.width(),
							r = this.$el.width(),
							o = this.hoverPosition * i;
						o -= r / 2, o = Math.max(0, Math.min(o, i - r)), this.$el.css("left", o)
					} else this.$el.hide(), this.$el.css("left", "-100%")
			}, i.prototype.shouldBeVisible = function() {
				return this.mediaControlContainer && this.mediaControlContainer.settings.seekEnabled && this.hoveringOverSeekBar && null !== this.hoverPosition && null !== this.duration
			}, i.prototype.render = function() {
				this.rendered = !0, this.displayedDuration = null, this.displayedSeekTime = null, this.$el.html(this.template()), this.$el.hide(), this.mediaControl.$el.append(this.el), this.$seekTimeEl = this.$el.find("[data-seek-time]"), this.$durationEl = this.$el.find("[data-duration]"), this.$durationEl.hide(), this.update()
			}, i
		}(i.default);
		e.default = p, t.exports = e.default
	}, function(t, e) {
		t.exports = "<span data-seek-time></span>\n<span data-duration></span>\n"
	}, function(t, e, n) {
		var i = n(238);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, '.seek-time[data-seek-time] {\n  position: absolute;\n  white-space: nowrap;\n  height: 20px;\n  line-height: 20px;\n  font-size: 0;\n  left: -100%;\n  bottom: 55px;\n  background-color: rgba(2, 2, 2, 0.5);\n  z-index: 9999;\n  transition: opacity 0.1s ease; }\n  .seek-time[data-seek-time].hidden[data-seek-time] {\n    opacity: 0; }\n  .seek-time[data-seek-time] [data-seek-time] {\n    display: inline-block;\n    color: white;\n    font-size: 10px;\n    padding-left: 7px;\n    padding-right: 7px;\n    vertical-align: top; }\n  .seek-time[data-seek-time] [data-duration] {\n    display: inline-block;\n    color: rgba(255, 255, 255, 0.5);\n    font-size: 10px;\n    padding-right: 7px;\n    vertical-align: top; }\n    .seek-time[data-seek-time] [data-duration]:before {\n      content: "|";\n      margin-right: 7px; }\n', ""])
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = u(n(0)),
			r = u(n(3)),
			o = u(n(1)),
			a = u(n(2)),
			s = u(n(35)),
			l = u(n(4));

		function u(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var c = function(t) {
			function e() {
				return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
			}
			return (0, a.default)(e, t), e.prototype.bindEvents = function() {
				this.listenTo(this.core, l.default.CORE_CONTAINERS_CREATED, this.onContainersCreated)
			}, e.prototype.onContainersCreated = function() {
				var e = this.core.containers.filter(function(t) {
					return "no_op" !== t.playback.name
				})[0] || this.core.containers[0];
				e && this.core.containers.forEach(function(t) {
					t !== e && t.destroy()
				})
			}, (0, r.default)(e, [{
				key: "name",
				get: function() {
					return "sources"
				}
			}]), e
		}(s.default);
		e.default = c, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = c(n(0)),
			r = c(n(3)),
			o = c(n(1)),
			a = c(n(2)),
			s = c(n(4)),
			l = c(n(35)),
			u = n(5);

		function c(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var d = function(t) {
			function e() {
				return (0, i.default)(this, e), (0, o.default)(this, t.apply(this, arguments))
			}
			return (0, a.default)(e, t), e.prototype.bindEvents = function() {
				this.listenTo(this.core.mediaControl, s.default.MEDIACONTROL_CONTAINERCHANGED, this.containerChanged);
				var t = this.core.getCurrentContainer();
				t && (this.listenTo(t, s.default.CONTAINER_ENDED, this.ended), this.listenTo(t, s.default.CONTAINER_STOP, this.ended))
			}, e.prototype.containerChanged = function() {
				this.stopListening(), this.bindEvents()
			}, e.prototype.ended = function() {
				(void 0 === this.core.options.exitFullscreenOnEnd || this.core.options.exitFullscreenOnEnd) && u.Fullscreen.isFullscreen() && this.core.toggleFullscreen()
			}, (0, r.default)(e, [{
				key: "name",
				get: function() {
					return "end_video"
				}
			}]), e
		}(l.default);
		e.default = d, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = i(n(0)),
			o = i(n(1)),
			a = i(n(3)),
			s = i(n(2)),
			l = n(5),
			u = i(n(6));

		function i(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		var c = function(n) {
			function i(t) {
				(0, r.default)(this, i);
				var e = (0, o.default)(this, n.call(this, t));
				return e._initializeMessages(), e
			}
			return (0, s.default)(i, n), (0, a.default)(i, [{
				key: "name",
				get: function() {
					return "strings"
				}
			}]), i.prototype.t = function(t) {
				var e = this._language(),
					n = this._messages.en;
				return (e && this._messages[e] || n)[t] || n[t] || t
			}, i.prototype._language = function() {
				return this.core.options.language || (0, l.getBrowserLanguage)()
			}, i.prototype._initializeMessages = function() {
				this._messages = u.default.extend(!0, {
					en: {
						live: "live",
						back_to_live: "back to live",
						disabled: "Disabled",
						playback_not_supported: "Your browser does not support the playback of this video. Please try using a different browser.",
						default_error_title: "Could not play video.",
						default_error_message: "There was a problem trying to load the video."
					},
					pt: {
						live: "ao vivo",
						back_to_live: "voltar para o ao vivo",
						disabled: "Desativado",
						playback_not_supported: "Seu navegador não supporta a reprodução deste video. Por favor, tente usar um navegador diferente.",
						default_error_title: "Não foi possível reproduzir o vídeo.",
						default_error_message: "Ocorreu um problema ao tentar carregar o vídeo."
					},
					es: {
						live: "vivo",
						back_to_live: "volver en vivo",
						disabled: "Discapacitado",
						playback_not_supported: "Su navegador no soporta la reproducción de un video. Por favor, trate de usar un navegador diferente."
					},
					ru: {
						live: "прямой эфир",
						back_to_live: "к прямому эфиру",
						disabled: "Отключено",
						playback_not_supported: "Ваш браузер не поддерживает воспроизведение этого видео. Пожалуйста, попробуйте другой браузер."
					},
					fr: {
						live: "en direct",
						back_to_live: "retour au direct",
						disabled: "Désactivé",
						playback_not_supported: "Votre navigateur ne supporte pas la lecture de cette vidéo. Merci de tenter sur un autre navigateur.",
						default_error_title: "Impossible de lire la vidéo.",
						default_error_message: "Un problème est survenu lors du chargement de la vidéo."
					},
					tr: {
						live: "canlı",
						back_to_live: "canlı yayına dön",
						disabled: "Engelli",
						playback_not_supported: "Tarayıcınız bu videoyu oynatma desteğine sahip değil. Lütfen farklı bir tarayıcı ile deneyin."
					},
					et: {
						live: "Otseülekanne",
						back_to_live: "Tagasi otseülekande juurde",
						disabled: "Keelatud",
						playback_not_supported: "Teie brauser ei toeta selle video taasesitust. Proovige kasutada muud brauserit."
					}
				}, this.core.options.strings || {}), this._messages["pt-BR"] = this._messages.pt, this._messages["en-US"] = this._messages.en, this._messages["es-419"] = this._messages.es, this._messages["fr-FR"] = this._messages.fr, this._messages["tr-TR"] = this._messages.tr, this._messages["et-EE"] = this._messages.et
			}, i
		}(i(n(35)).default);
		e.default = c, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i, r = n(243),
			o = (i = r) && i.__esModule ? i : {
				default: i
			};
		e.default = o.default, t.exports = e.default
	}, function(t, e, n) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = r(n(0)),
			a = r(n(1)),
			s = r(n(3)),
			l = r(n(2)),
			u = r(n(4)),
			i = r(n(34)),
			c = r(n(8)),
			d = r(n(24)),
			h = r(n(244)),
			f = r(n(245));

		function r(t) {
			return t && t.__esModule ? t : {
				default: t
			}
		}
		n(246);
		var p = function(i) {
			function r(t) {
				var e;
				(0, o.default)(this, r);
				var n = (0, a.default)(this, i.call(this, t));
				return n.options.disableErrorScreen ? (e = n.disable(), (0, a.default)(n, e)) : n
			}
			return (0, l.default)(r, i), (0, s.default)(r, [{
				key: "name",
				get: function() {
					return "error_screen"
				}
			}, {
				key: "template",
				get: function() {
					return (0, c.default)(f.default)
				}
			}, {
				key: "container",
				get: function() {
					return this.core.getCurrentContainer()
				}
			}, {
				key: "attributes",
				get: function() {
					return {
						class: "player-error-screen",
						"data-error-screen": ""
					}
				}
			}]), r.prototype.bindEvents = function() {
				this.listenTo(this.core, u.default.ERROR, this.onError), this.listenTo(this.core.mediaControl, u.default.MEDIACONTROL_CONTAINERCHANGED, this.onContainerChanged)
			}, r.prototype.bindReload = function() {
				this.reloadButton = this.$el.find(".player-error-screen__reload"), this.reloadButton && this.reloadButton.on("click", this.reload.bind(this))
			}, r.prototype.reload = function() {
				var t = this;
				this.listenToOnce(this.core, u.default.CORE_READY, function() {
					return t.container.play()
				}), this.core.load(this.options.sources, this.options.mimeType), this.unbindReload()
			}, r.prototype.unbindReload = function() {
				this.reloadButton && this.reloadButton.off("click")
			}, r.prototype.onContainerChanged = function() {
				this.err = null, this.unbindReload(), this.hide()
			}, r.prototype.onError = function() {
				var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
				t.level === d.default.Levels.FATAL && (this.err = t, this.container.disableMediaControl(), this.container.stop(), this.show())
			}, r.prototype.show = function() {
				this.render(), this.$el.show()
			}, r.prototype.hide = function() {
				this.$el.hide()
			}, r.prototype.render = function() {
				if (this.err) return this.$el.html(this.template({
					title: this.err.UI.title,
					message: this.err.UI.message,
					code: this.err.code,
					icon: this.err.UI.icon || "",
					reloadIcon: h.default
				})), this.core.$el.append(this.el), this.bindReload(), this
			}, r
		}(i.default);
		e.default = p, t.exports = e.default
	}, function(t, e) {
		t.exports = '<svg fill="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>'
	}, function(t, e) {
		t.exports = '<div class="player-error-screen__content" data-error-screen>\n  <% if (icon) { %>\n  <div class="player-error-screen__icon" data-error-screen><%= icon %></div>\n  <% } %>\n  <div class="player-error-screen__title" data-error-screen><%= title %></div>\n  <div class="player-error-screen__message" data-error-screen><%= message %></div>\n  <div class="player-error-screen__code" data-error-screen>Error code: <%= code %></div>\n  <div class="player-error-screen__reload" data-error-screen><%= reloadIcon %></div>\n</div>\n'
	}, function(t, e, n) {
		var i = n(247);
		"string" == typeof i && (i = [
			[t.i, i, ""]
		]);
		var r = {
			singleton: !0,
			hmr: !0,
			transform: void 0,
			insertInto: void 0
		};
		n(9)(i, r);
		i.locals && (t.exports = i.locals)
	}, function(t, e, n) {
		(t.exports = n(7)(!1)).push([t.i, "div.player-error-screen {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  color: #CCCACA;\n  position: absolute;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 2000;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  div.player-error-screen__content[data-error-screen] {\n    font-size: 14px;\n    color: #CCCACA;\n    margin-top: 45px; }\n  div.player-error-screen__title[data-error-screen] {\n    font-weight: bold;\n    line-height: 30px;\n    font-size: 18px; }\n  div.player-error-screen__message[data-error-screen] {\n    width: 90%;\n    margin: 0 auto; }\n  div.player-error-screen__code[data-error-screen] {\n    font-size: 13px;\n    margin-top: 15px; }\n  div.player-error-screen__reload {\n    cursor: pointer;\n    width: 30px;\n    margin: 15px auto 0; }\n", ""])
	}])
});
var EXTM3U = "#EXTM3U",
	EXTINF = "#EXTINF:",
	REGEX_PARAMS = /\s*("([^"]+)"|([^=]+))=("([^"]+)"|(\S+))/g,
	REGEX_DURATION = /\s*(-?\d+)/g;

function parseParams(t) {
	for (var e, n, i, r = {}; null !== (e = REGEX_PARAMS.exec(t));) e.index === REGEX_PARAMS.lastIndex && REGEX_PARAMS.lastIndex++, n = e[2] ? e[2] : e[3], i = e[5] ? e[5] : e[6], r[n] = i;
	return r
}

function formatParams(t) {
	var e = "";
	for (var n in t) e += " " + n + '="' + t[n] + '"';
	return e
}

function parseM3U(t) {
	for (var e, n, i, r = {
			tracks: []
		}, o = t.split("\n"), a = {}, s = 0; s < o.length; s++) "" != (e = o[s].trim()) && (0 != e.indexOf(EXTINF) ? 0 != e.indexOf("#") && (a.file = e, r.tracks.push(a), a = {}) : (n = e.lastIndexOf(","), a.title = e.substr(n + 1).trim(), i = (e = e.substring(EXTINF.length, n).trim()).match(REGEX_DURATION), a.params = parseParams(e.substr(i[0].length))));
	return r
}

function format(t) {
	var e = EXTM3U;
	return t.header && (e += formatParams(t.header)), e += "\n", t.tracks.forEach(function(t) {
		e += EXTINF + t.length + formatParams(t.params) + "," + t.title + "\n" + t.file + "\n"
	}), e
}

function toSlug(t) {
	return st = t.toLowerCase(), st = st.replace(/[\u00C0-\u00C5]/gi, "a"), st = st.replace(/[\u00C8-\u00CB]/gi, "e"), st = st.replace(/[\u00CC-\u00CF]/gi, "i"), st = st.replace(/[\u00D2-\u00D6]/gi, "o"), st = st.replace(/[\u00D9-\u00DC]/gi, "u"), st = st.replace(/[\u00D1]/gi, "n"), st = st.replace(/[^a-z0-9 ]+/gi, ""), st = st.trim().replace(/ /g, "-"), st = st.replace(/[\-]{2}/g, ""), st.replace(/[^a-z\- ]*/gi, "")
}

function truncate(t, e) {
	return e > t.length ? t : (t = t.substring(0, e)) + "..."
}

function debounce(t, e) {
	var n;
	return function() {
		n && clearTimeout(n), setTimeout(function() {
			t(), n = null
		}, e || 100)
	}
}
$(function() {
	var t = "up",
		e = "down";
	$(window).scroll(function() {
		160 <= $(this).scrollTop() ? (e = "down") != t && ($(".header").addClass("fixed"), t = e) : (e = "up") != t && ($(".header").removeClass("fixed"), t = e)
	})
}), $(function() {
	$.get("https://raw.githubusercontent.com/Sidimadtv/all/main/sidi-2/Sidimadtv.m3u", function(t) {
		var i, r, a = "";
		$.each(parseM3U(t).tracks, function(t, e) {
			var n = e.file.replace(/\.[^\.]+$/, ".m3u8"),
				i = e.title,
				r = e.params["tvg-logo"],
				o = toSlug(e.params["group-title"]);
			a += '<div class="channels__item ' + o + '" data-remodal-target="modal" data-link="' + n + '">', a += '<div class="channels__item-image"><img width="200" height="200" src="' + r + '" alt="' + i + '"></div>', a += '<h3 class="channels__item-title">' + i + "</h3>", a += "</div>"
		}), $(".channels__list").html(a), $(".channels__list").parents(".channels").addClass("loaded");
		var n, o = $(".channels__list").isotope({
				itemSelector: ".channels__item",
				percentPosition: !0,
				layoutMode: "fitRows",
				filter: function() {
					var t = $(this),
						e = !i || t.text().match(i),
						n = !r || t.is(r);
					return e && n
				}
			}),
			e = $(".header__search-input").keyup(debounce(function(t) {
				i = new RegExp(e.val(), "gi"), o.isotope()
			}));
		o.imagesLoaded().progress(function(t, e) {
			e.isLoaded ? $(e.img).parent().addClass("loaded") : e.isLoaded || $(e.img).parent().addClass("not-loaded"), o.isotope("layout")
		}), $(".header__menu-list").on("click", ".header__menu-item", function(t) {
			t.preventDefault(), r = $(this).attr("data-filter"), $(document.body).removeAttr("class"), $(document.body).addClass(r.substring(1)), $(".header__menu-item").removeClass("active"), $(this).addClass("active"), o.isotope()
		}), $(".channels__list").on("click", ".channels__item", function(t) {
			var e = {
				source: $(this).attr("data-link"),
				poster: $(this).find("img").attr("src"),
				width: "100%",
				height: "auto",
				autoPlay: !0,
				parentId: "#modal-content",
				disableVideoTagContextMenu: !0,
				hlsjsConfig: {
					xhrSetup: function(t, e) {
						t.setRequestHeader("Referer", "https://canais.ink"), t.setRequestHeader("Origin", "https://canais.ink")
					}
				}
			};
			n = new Clappr.Player(e)
		}), $(document).on("closed", ".modal", function() {
			n.destroy()
		})
	})
});
