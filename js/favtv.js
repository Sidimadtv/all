(() => {
	var e = {
			583: (e, t, r) => {
				"use strict";
				var n = r(294),
					i = r(418),
					a = r(840);
				/** @license React v17.0.2
				 * react-dom.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				function s(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				if (!n) throw Error(s(227));
				var o = new Set,
					l = {};

				function u(e, t) {
					c(e, t), c(e + "Capture", t)
				}

				function c(e, t) {
					for (l[e] = t, e = 0; e < t.length; e++) o.add(t[e])
				}
				var d = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement),
					f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
					h = Object.prototype.hasOwnProperty,
					p = {},
					g = {};

				function v(e, t, r, n, i, a, s) {
					this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = n, this.attributeNamespace = i, this.mustUseProperty = r, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = s
				}
				var m = {};
				"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
					m[e] = new v(e, 0, !1, e, null, !1, !1)
				})), [
					["acceptCharset", "accept-charset"],
					["className", "class"],
					["htmlFor", "for"],
					["httpEquiv", "http-equiv"]
				].forEach((function(e) {
					var t = e[0];
					m[t] = new v(t, 1, !1, e[1], null, !1, !1)
				})), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
					m[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
				})), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
					m[e] = new v(e, 2, !1, e, null, !1, !1)
				})), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
					m[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
				})), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
					m[e] = new v(e, 3, !0, e, null, !1, !1)
				})), ["capture", "download"].forEach((function(e) {
					m[e] = new v(e, 4, !1, e, null, !1, !1)
				})), ["cols", "rows", "size", "span"].forEach((function(e) {
					m[e] = new v(e, 6, !1, e, null, !1, !1)
				})), ["rowSpan", "start"].forEach((function(e) {
					m[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
				}));
				var y = /[\-:]([a-z])/g;

				function E(e) {
					return e[1].toUpperCase()
				}

				function b(e, t, r, n) {
					var i = m.hasOwnProperty(t) ? m[t] : null;
					(null !== i ? 0 === i.type : !n && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, r, n) {
						if (null == t || function(e, t, r, n) {
								if (null !== r && 0 === r.type) return !1;
								switch (typeof t) {
									case "function":
									case "symbol":
										return !0;
									case "boolean":
										return !n && (null !== r ? !r.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
									default:
										return !1
								}
							}(e, t, r, n)) return !0;
						if (n) return !1;
						if (null !== r) switch (r.type) {
							case 3:
								return !t;
							case 4:
								return !1 === t;
							case 5:
								return isNaN(t);
							case 6:
								return isNaN(t) || 1 > t
						}
						return !1
					}(t, r, i, n) && (r = null), n || null === i ? function(e) {
						return !!h.call(g, e) || !h.call(p, e) && (f.test(e) ? g[e] = !0 : (p[e] = !0, !1))
					}(t) && (null === r ? e.removeAttribute(t) : e.setAttribute(t, "" + r)) : i.mustUseProperty ? e[i.propertyName] = null === r ? 3 !== i.type && "" : r : (t = i.attributeName, n = i.attributeNamespace, null === r ? e.removeAttribute(t) : (r = 3 === (i = i.type) || 4 === i && !0 === r ? "" : "" + r, n ? e.setAttributeNS(n, t, r) : e.setAttribute(t, r))))
				}
				"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
					var t = e.replace(y, E);
					m[t] = new v(t, 1, !1, e, null, !1, !1)
				})), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
					var t = e.replace(y, E);
					m[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
				})), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
					var t = e.replace(y, E);
					m[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
				})), ["tabIndex", "crossOrigin"].forEach((function(e) {
					m[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
				})), m.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
					m[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
				}));
				var T = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
					S = 60103,
					k = 60106,
					w = 60107,
					L = 60108,
					A = 60114,
					D = 60109,
					C = 60110,
					_ = 60112,
					R = 60113,
					x = 60120,
					I = 60115,
					O = 60116,
					P = 60121,
					F = 60128,
					M = 60129,
					N = 60130,
					U = 60131;
				if ("function" == typeof Symbol && Symbol.for) {
					var B = Symbol.for;
					S = B("react.element"), k = B("react.portal"), w = B("react.fragment"), L = B("react.strict_mode"), A = B("react.profiler"), D = B("react.provider"), C = B("react.context"), _ = B("react.forward_ref"), R = B("react.suspense"), x = B("react.suspense_list"), I = B("react.memo"), O = B("react.lazy"), P = B("react.block"), B("react.scope"), F = B("react.opaque.id"), M = B("react.debug_trace_mode"), N = B("react.offscreen"), U = B("react.legacy_hidden")
				}
				var j, G = "function" == typeof Symbol && Symbol.iterator;

				function H(e) {
					return null === e || "object" != typeof e ? null : "function" == typeof(e = G && e[G] || e["@@iterator"]) ? e : null
				}

				function K(e) {
					if (void 0 === j) try {
						throw Error()
					} catch (e) {
						var t = e.stack.trim().match(/\n( *(at )?)/);
						j = t && t[1] || ""
					}
					return "\n" + j + e
				}
				var V = !1;

				function z(e, t) {
					if (!e || V) return "";
					V = !0;
					var r = Error.prepareStackTrace;
					Error.prepareStackTrace = void 0;
					try {
						if (t)
							if (t = function() {
									throw Error()
								}, Object.defineProperty(t.prototype, "props", {
									set: function() {
										throw Error()
									}
								}), "object" == typeof Reflect && Reflect.construct) {
								try {
									Reflect.construct(t, [])
								} catch (e) {
									var n = e
								}
								Reflect.construct(e, [], t)
							} else {
								try {
									t.call()
								} catch (e) {
									n = e
								}
								e.call(t.prototype)
							}
						else {
							try {
								throw Error()
							} catch (e) {
								n = e
							}
							e()
						}
					} catch (e) {
						if (e && n && "string" == typeof e.stack) {
							for (var i = e.stack.split("\n"), a = n.stack.split("\n"), s = i.length - 1, o = a.length - 1; 1 <= s && 0 <= o && i[s] !== a[o];) o--;
							for (; 1 <= s && 0 <= o; s--, o--)
								if (i[s] !== a[o]) {
									if (1 !== s || 1 !== o)
										do {
											if (s--, 0 > --o || i[s] !== a[o]) return "\n" + i[s].replace(" at new ", " at ")
										} while (1 <= s && 0 <= o);
									break
								}
						}
					} finally {
						V = !1, Error.prepareStackTrace = r
					}
					return (e = e ? e.displayName || e.name : "") ? K(e) : ""
				}

				function W(e) {
					switch (e.tag) {
						case 5:
							return K(e.type);
						case 16:
							return K("Lazy");
						case 13:
							return K("Suspense");
						case 19:
							return K("SuspenseList");
						case 0:
						case 2:
						case 15:
							return e = z(e.type, !1);
						case 11:
							return e = z(e.type.render, !1);
						case 22:
							return e = z(e.type._render, !1);
						case 1:
							return e = z(e.type, !0);
						default:
							return ""
					}
				}

				function q(e) {
					if (null == e) return null;
					if ("function" == typeof e) return e.displayName || e.name || null;
					if ("string" == typeof e) return e;
					switch (e) {
						case w:
							return "Fragment";
						case k:
							return "Portal";
						case A:
							return "Profiler";
						case L:
							return "StrictMode";
						case R:
							return "Suspense";
						case x:
							return "SuspenseList"
					}
					if ("object" == typeof e) switch (e.$$typeof) {
						case C:
							return (e.displayName || "Context") + ".Consumer";
						case D:
							return (e._context.displayName || "Context") + ".Provider";
						case _:
							var t = e.render;
							return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
						case I:
							return q(e.type);
						case P:
							return q(e._render);
						case O:
							t = e._payload, e = e._init;
							try {
								return q(e(t))
							} catch (e) {}
					}
					return null
				}

				function Y(e) {
					switch (typeof e) {
						case "boolean":
						case "number":
						case "object":
						case "string":
						case "undefined":
							return e;
						default:
							return ""
					}
				}

				function X(e) {
					var t = e.type;
					return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
				}

				function Q(e) {
					e._valueTracker || (e._valueTracker = function(e) {
						var t = X(e) ? "checked" : "value",
							r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
							n = "" + e[t];
						if (!e.hasOwnProperty(t) && void 0 !== r && "function" == typeof r.get && "function" == typeof r.set) {
							var i = r.get,
								a = r.set;
							return Object.defineProperty(e, t, {
								configurable: !0,
								get: function() {
									return i.call(this)
								},
								set: function(e) {
									n = "" + e, a.call(this, e)
								}
							}), Object.defineProperty(e, t, {
								enumerable: r.enumerable
							}), {
								getValue: function() {
									return n
								},
								setValue: function(e) {
									n = "" + e
								},
								stopTracking: function() {
									e._valueTracker = null, delete e[t]
								}
							}
						}
					}(e))
				}

				function $(e) {
					if (!e) return !1;
					var t = e._valueTracker;
					if (!t) return !0;
					var r = t.getValue(),
						n = "";
					return e && (n = X(e) ? e.checked ? "true" : "false" : e.value), (e = n) !== r && (t.setValue(e), !0)
				}

				function J(e) {
					if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
					try {
						return e.activeElement || e.body
					} catch (t) {
						return e.body
					}
				}

				function Z(e, t) {
					var r = t.checked;
					return i({}, t, {
						defaultChecked: void 0,
						defaultValue: void 0,
						value: void 0,
						checked: null != r ? r : e._wrapperState.initialChecked
					})
				}

				function ee(e, t) {
					var r = null == t.defaultValue ? "" : t.defaultValue,
						n = null != t.checked ? t.checked : t.defaultChecked;
					r = Y(null != t.value ? t.value : r), e._wrapperState = {
						initialChecked: n,
						initialValue: r,
						controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
					}
				}

				function te(e, t) {
					null != (t = t.checked) && b(e, "checked", t, !1)
				}

				function re(e, t) {
					te(e, t);
					var r = Y(t.value),
						n = t.type;
					if (null != r) "number" === n ? (0 === r && "" === e.value || e.value != r) && (e.value = "" + r) : e.value !== "" + r && (e.value = "" + r);
					else if ("submit" === n || "reset" === n) return void e.removeAttribute("value");
					t.hasOwnProperty("value") ? ie(e, t.type, r) : t.hasOwnProperty("defaultValue") && ie(e, t.type, Y(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
				}

				function ne(e, t, r) {
					if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
						var n = t.type;
						if (!("submit" !== n && "reset" !== n || void 0 !== t.value && null !== t.value)) return;
						t = "" + e._wrapperState.initialValue, r || t === e.value || (e.value = t), e.defaultValue = t
					}
					"" !== (r = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== r && (e.name = r)
				}

				function ie(e, t, r) {
					"number" === t && J(e.ownerDocument) === e || (null == r ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + r && (e.defaultValue = "" + r))
				}

				function ae(e, t) {
					return e = i({
						children: void 0
					}, t), (t = function(e) {
						var t = "";
						return n.Children.forEach(e, (function(e) {
							null != e && (t += e)
						})), t
					}(t.children)) && (e.children = t), e
				}

				function se(e, t, r, n) {
					if (e = e.options, t) {
						t = {};
						for (var i = 0; i < r.length; i++) t["$" + r[i]] = !0;
						for (r = 0; r < e.length; r++) i = t.hasOwnProperty("$" + e[r].value), e[r].selected !== i && (e[r].selected = i), i && n && (e[r].defaultSelected = !0)
					} else {
						for (r = "" + Y(r), t = null, i = 0; i < e.length; i++) {
							if (e[i].value === r) return e[i].selected = !0, void(n && (e[i].defaultSelected = !0));
							null !== t || e[i].disabled || (t = e[i])
						}
						null !== t && (t.selected = !0)
					}
				}

				function oe(e, t) {
					if (null != t.dangerouslySetInnerHTML) throw Error(s(91));
					return i({}, t, {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue
					})
				}

				function le(e, t) {
					var r = t.value;
					if (null == r) {
						if (r = t.children, t = t.defaultValue, null != r) {
							if (null != t) throw Error(s(92));
							if (Array.isArray(r)) {
								if (!(1 >= r.length)) throw Error(s(93));
								r = r[0]
							}
							t = r
						}
						null == t && (t = ""), r = t
					}
					e._wrapperState = {
						initialValue: Y(r)
					}
				}

				function ue(e, t) {
					var r = Y(t.value),
						n = Y(t.defaultValue);
					null != r && ((r = "" + r) !== e.value && (e.value = r), null == t.defaultValue && e.defaultValue !== r && (e.defaultValue = r)), null != n && (e.defaultValue = "" + n)
				}

				function ce(e) {
					var t = e.textContent;
					t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
				}
				var de = "http://www.w3.org/1999/xhtml",
					fe = "http://www.w3.org/2000/svg";

				function he(e) {
					switch (e) {
						case "svg":
							return "http://www.w3.org/2000/svg";
						case "math":
							return "http://www.w3.org/1998/Math/MathML";
						default:
							return "http://www.w3.org/1999/xhtml"
					}
				}

				function pe(e, t) {
					return null == e || "http://www.w3.org/1999/xhtml" === e ? he(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
				}
				var ge, ve, me = (ve = function(e, t) {
					if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
					else {
						for ((ge = ge || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ge.firstChild; e.firstChild;) e.removeChild(e.firstChild);
						for (; t.firstChild;) e.appendChild(t.firstChild)
					}
				}, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, r, n) {
					MSApp.execUnsafeLocalFunction((function() {
						return ve(e, t)
					}))
				} : ve);

				function ye(e, t) {
					if (t) {
						var r = e.firstChild;
						if (r && r === e.lastChild && 3 === r.nodeType) return void(r.nodeValue = t)
					}
					e.textContent = t
				}
				var Ee = {
						animationIterationCount: !0,
						borderImageOutset: !0,
						borderImageSlice: !0,
						borderImageWidth: !0,
						boxFlex: !0,
						boxFlexGroup: !0,
						boxOrdinalGroup: !0,
						columnCount: !0,
						columns: !0,
						flex: !0,
						flexGrow: !0,
						flexPositive: !0,
						flexShrink: !0,
						flexNegative: !0,
						flexOrder: !0,
						gridArea: !0,
						gridRow: !0,
						gridRowEnd: !0,
						gridRowSpan: !0,
						gridRowStart: !0,
						gridColumn: !0,
						gridColumnEnd: !0,
						gridColumnSpan: !0,
						gridColumnStart: !0,
						fontWeight: !0,
						lineClamp: !0,
						lineHeight: !0,
						opacity: !0,
						order: !0,
						orphans: !0,
						tabSize: !0,
						widows: !0,
						zIndex: !0,
						zoom: !0,
						fillOpacity: !0,
						floodOpacity: !0,
						stopOpacity: !0,
						strokeDasharray: !0,
						strokeDashoffset: !0,
						strokeMiterlimit: !0,
						strokeOpacity: !0,
						strokeWidth: !0
					},
					be = ["Webkit", "ms", "Moz", "O"];

				function Te(e, t, r) {
					return null == t || "boolean" == typeof t || "" === t ? "" : r || "number" != typeof t || 0 === t || Ee.hasOwnProperty(e) && Ee[e] ? ("" + t).trim() : t + "px"
				}

				function Se(e, t) {
					for (var r in e = e.style, t)
						if (t.hasOwnProperty(r)) {
							var n = 0 === r.indexOf("--"),
								i = Te(r, t[r], n);
							"float" === r && (r = "cssFloat"), n ? e.setProperty(r, i) : e[r] = i
						}
				}
				Object.keys(Ee).forEach((function(e) {
					be.forEach((function(t) {
						t = t + e.charAt(0).toUpperCase() + e.substring(1), Ee[t] = Ee[e]
					}))
				}));
				var ke = i({
					menuitem: !0
				}, {
					area: !0,
					base: !0,
					br: !0,
					col: !0,
					embed: !0,
					hr: !0,
					img: !0,
					input: !0,
					keygen: !0,
					link: !0,
					meta: !0,
					param: !0,
					source: !0,
					track: !0,
					wbr: !0
				});

				function we(e, t) {
					if (t) {
						if (ke[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(s(137, e));
						if (null != t.dangerouslySetInnerHTML) {
							if (null != t.children) throw Error(s(60));
							if ("object" != typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(s(61))
						}
						if (null != t.style && "object" != typeof t.style) throw Error(s(62))
					}
				}

				function Le(e, t) {
					if (-1 === e.indexOf("-")) return "string" == typeof t.is;
					switch (e) {
						case "annotation-xml":
						case "color-profile":
						case "font-face":
						case "font-face-src":
						case "font-face-uri":
						case "font-face-format":
						case "font-face-name":
						case "missing-glyph":
							return !1;
						default:
							return !0
					}
				}

				function Ae(e) {
					return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
				}
				var De = null,
					Ce = null,
					_e = null;

				function Re(e) {
					if (e = ni(e)) {
						if ("function" != typeof De) throw Error(s(280));
						var t = e.stateNode;
						t && (t = ai(t), De(e.stateNode, e.type, t))
					}
				}

				function xe(e) {
					Ce ? _e ? _e.push(e) : _e = [e] : Ce = e
				}

				function Ie() {
					if (Ce) {
						var e = Ce,
							t = _e;
						if (_e = Ce = null, Re(e), t)
							for (e = 0; e < t.length; e++) Re(t[e])
					}
				}

				function Oe(e, t) {
					return e(t)
				}

				function Pe(e, t, r, n, i) {
					return e(t, r, n, i)
				}

				function Fe() {}
				var Me = Oe,
					Ne = !1,
					Ue = !1;

				function Be() {
					null === Ce && null === _e || (Fe(), Ie())
				}

				function je(e, t) {
					var r = e.stateNode;
					if (null === r) return null;
					var n = ai(r);
					if (null === n) return null;
					r = n[t];
					e: switch (t) {
						case "onClick":
						case "onClickCapture":
						case "onDoubleClick":
						case "onDoubleClickCapture":
						case "onMouseDown":
						case "onMouseDownCapture":
						case "onMouseMove":
						case "onMouseMoveCapture":
						case "onMouseUp":
						case "onMouseUpCapture":
						case "onMouseEnter":
							(n = !n.disabled) || (n = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !n;
							break e;
						default:
							e = !1
					}
					if (e) return null;
					if (r && "function" != typeof r) throw Error(s(231, t, typeof r));
					return r
				}
				var Ge = !1;
				if (d) try {
					var He = {};
					Object.defineProperty(He, "passive", {
						get: function() {
							Ge = !0
						}
					}), window.addEventListener("test", He, He), window.removeEventListener("test", He, He)
				} catch (ve) {
					Ge = !1
				}

				function Ke(e, t, r, n, i, a, s, o, l) {
					var u = Array.prototype.slice.call(arguments, 3);
					try {
						t.apply(r, u)
					} catch (e) {
						this.onError(e)
					}
				}
				var Ve = !1,
					ze = null,
					We = !1,
					qe = null,
					Ye = {
						onError: function(e) {
							Ve = !0, ze = e
						}
					};

				function Xe(e, t, r, n, i, a, s, o, l) {
					Ve = !1, ze = null, Ke.apply(Ye, arguments)
				}

				function Qe(e) {
					var t = e,
						r = e;
					if (e.alternate)
						for (; t.return;) t = t.return;
					else {
						e = t;
						do {
							0 != (1026 & (t = e).flags) && (r = t.return), e = t.return
						} while (e)
					}
					return 3 === t.tag ? r : null
				}

				function $e(e) {
					if (13 === e.tag) {
						var t = e.memoizedState;
						if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
					}
					return null
				}

				function Je(e) {
					if (Qe(e) !== e) throw Error(s(188))
				}

				function Ze(e) {
					if (e = function(e) {
							var t = e.alternate;
							if (!t) {
								if (null === (t = Qe(e))) throw Error(s(188));
								return t !== e ? null : e
							}
							for (var r = e, n = t;;) {
								var i = r.return;
								if (null === i) break;
								var a = i.alternate;
								if (null === a) {
									if (null !== (n = i.return)) {
										r = n;
										continue
									}
									break
								}
								if (i.child === a.child) {
									for (a = i.child; a;) {
										if (a === r) return Je(i), e;
										if (a === n) return Je(i), t;
										a = a.sibling
									}
									throw Error(s(188))
								}
								if (r.return !== n.return) r = i, n = a;
								else {
									for (var o = !1, l = i.child; l;) {
										if (l === r) {
											o = !0, r = i, n = a;
											break
										}
										if (l === n) {
											o = !0, n = i, r = a;
											break
										}
										l = l.sibling
									}
									if (!o) {
										for (l = a.child; l;) {
											if (l === r) {
												o = !0, r = a, n = i;
												break
											}
											if (l === n) {
												o = !0, n = a, r = i;
												break
											}
											l = l.sibling
										}
										if (!o) throw Error(s(189))
									}
								}
								if (r.alternate !== n) throw Error(s(190))
							}
							if (3 !== r.tag) throw Error(s(188));
							return r.stateNode.current === r ? e : t
						}(e), !e) return null;
					for (var t = e;;) {
						if (5 === t.tag || 6 === t.tag) return t;
						if (t.child) t.child.return = t, t = t.child;
						else {
							if (t === e) break;
							for (; !t.sibling;) {
								if (!t.return || t.return === e) return null;
								t = t.return
							}
							t.sibling.return = t.return, t = t.sibling
						}
					}
					return null
				}

				function et(e, t) {
					for (var r = e.alternate; null !== t;) {
						if (t === e || t === r) return !0;
						t = t.return
					}
					return !1
				}
				var tt, rt, nt, it, at = !1,
					st = [],
					ot = null,
					lt = null,
					ut = null,
					ct = new Map,
					dt = new Map,
					ft = [],
					ht = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

				function pt(e, t, r, n, i) {
					return {
						blockedOn: e,
						domEventName: t,
						eventSystemFlags: 16 | r,
						nativeEvent: i,
						targetContainers: [n]
					}
				}

				function gt(e, t) {
					switch (e) {
						case "focusin":
						case "focusout":
							ot = null;
							break;
						case "dragenter":
						case "dragleave":
							lt = null;
							break;
						case "mouseover":
						case "mouseout":
							ut = null;
							break;
						case "pointerover":
						case "pointerout":
							ct.delete(t.pointerId);
							break;
						case "gotpointercapture":
						case "lostpointercapture":
							dt.delete(t.pointerId)
					}
				}

				function vt(e, t, r, n, i, a) {
					return null === e || e.nativeEvent !== a ? (e = pt(t, r, n, i, a), null !== t && (null !== (t = ni(t)) && rt(t)), e) : (e.eventSystemFlags |= n, t = e.targetContainers, null !== i && -1 === t.indexOf(i) && t.push(i), e)
				}

				function mt(e) {
					var t = ri(e.target);
					if (null !== t) {
						var r = Qe(t);
						if (null !== r)
							if (13 === (t = r.tag)) {
								if (null !== (t = $e(r))) return e.blockedOn = t, void it(e.lanePriority, (function() {
									a.unstable_runWithPriority(e.priority, (function() {
										nt(r)
									}))
								}))
							} else if (3 === t && r.stateNode.hydrate) return void(e.blockedOn = 3 === r.tag ? r.stateNode.containerInfo : null)
					}
					e.blockedOn = null
				}

				function yt(e) {
					if (null !== e.blockedOn) return !1;
					for (var t = e.targetContainers; 0 < t.length;) {
						var r = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
						if (null !== r) return null !== (t = ni(r)) && rt(t), e.blockedOn = r, !1;
						t.shift()
					}
					return !0
				}

				function Et(e, t, r) {
					yt(e) && r.delete(t)
				}

				function bt() {
					for (at = !1; 0 < st.length;) {
						var e = st[0];
						if (null !== e.blockedOn) {
							null !== (e = ni(e.blockedOn)) && tt(e);
							break
						}
						for (var t = e.targetContainers; 0 < t.length;) {
							var r = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
							if (null !== r) {
								e.blockedOn = r;
								break
							}
							t.shift()
						}
						null === e.blockedOn && st.shift()
					}
					null !== ot && yt(ot) && (ot = null), null !== lt && yt(lt) && (lt = null), null !== ut && yt(ut) && (ut = null), ct.forEach(Et), dt.forEach(Et)
				}

				function Tt(e, t) {
					e.blockedOn === t && (e.blockedOn = null, at || (at = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, bt)))
				}

				function St(e) {
					function t(t) {
						return Tt(t, e)
					}
					if (0 < st.length) {
						Tt(st[0], e);
						for (var r = 1; r < st.length; r++) {
							var n = st[r];
							n.blockedOn === e && (n.blockedOn = null)
						}
					}
					for (null !== ot && Tt(ot, e), null !== lt && Tt(lt, e), null !== ut && Tt(ut, e), ct.forEach(t), dt.forEach(t), r = 0; r < ft.length; r++)(n = ft[r]).blockedOn === e && (n.blockedOn = null);
					for (; 0 < ft.length && null === (r = ft[0]).blockedOn;) mt(r), null === r.blockedOn && ft.shift()
				}

				function kt(e, t) {
					var r = {};
					return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit" + e] = "webkit" + t, r["Moz" + e] = "moz" + t, r
				}
				var wt = {
						animationend: kt("Animation", "AnimationEnd"),
						animationiteration: kt("Animation", "AnimationIteration"),
						animationstart: kt("Animation", "AnimationStart"),
						transitionend: kt("Transition", "TransitionEnd")
					},
					Lt = {},
					At = {};

				function Dt(e) {
					if (Lt[e]) return Lt[e];
					if (!wt[e]) return e;
					var t, r = wt[e];
					for (t in r)
						if (r.hasOwnProperty(t) && t in At) return Lt[e] = r[t];
					return e
				}
				d && (At = document.createElement("div").style, "AnimationEvent" in window || (delete wt.animationend.animation, delete wt.animationiteration.animation, delete wt.animationstart.animation), "TransitionEvent" in window || delete wt.transitionend.transition);
				var Ct = Dt("animationend"),
					_t = Dt("animationiteration"),
					Rt = Dt("animationstart"),
					xt = Dt("transitionend"),
					It = new Map,
					Ot = new Map,
					Pt = ["abort", "abort", Ct, "animationEnd", _t, "animationIteration", Rt, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", xt, "transitionEnd", "waiting", "waiting"];

				function Ft(e, t) {
					for (var r = 0; r < e.length; r += 2) {
						var n = e[r],
							i = e[r + 1];
						i = "on" + (i[0].toUpperCase() + i.slice(1)), Ot.set(n, t), It.set(n, i), u(i, [n])
					}
				}(0, a.unstable_now)();
				var Mt = 8;

				function Nt(e) {
					if (0 != (1 & e)) return Mt = 15, 1;
					if (0 != (2 & e)) return Mt = 14, 2;
					if (0 != (4 & e)) return Mt = 13, 4;
					var t = 24 & e;
					return 0 !== t ? (Mt = 12, t) : 0 != (32 & e) ? (Mt = 11, 32) : 0 !== (t = 192 & e) ? (Mt = 10, t) : 0 != (256 & e) ? (Mt = 9, 256) : 0 !== (t = 3584 & e) ? (Mt = 8, t) : 0 != (4096 & e) ? (Mt = 7, 4096) : 0 !== (t = 4186112 & e) ? (Mt = 6, t) : 0 !== (t = 62914560 & e) ? (Mt = 5, t) : 67108864 & e ? (Mt = 4, 67108864) : 0 != (134217728 & e) ? (Mt = 3, 134217728) : 0 !== (t = 805306368 & e) ? (Mt = 2, t) : 0 != (1073741824 & e) ? (Mt = 1, 1073741824) : (Mt = 8, e)
				}

				function Ut(e, t) {
					var r = e.pendingLanes;
					if (0 === r) return Mt = 0;
					var n = 0,
						i = 0,
						a = e.expiredLanes,
						s = e.suspendedLanes,
						o = e.pingedLanes;
					if (0 !== a) n = a, i = Mt = 15;
					else if (0 !== (a = 134217727 & r)) {
						var l = a & ~s;
						0 !== l ? (n = Nt(l), i = Mt) : 0 !== (o &= a) && (n = Nt(o), i = Mt)
					} else 0 !== (a = r & ~s) ? (n = Nt(a), i = Mt) : 0 !== o && (n = Nt(o), i = Mt);
					if (0 === n) return 0;
					if (n = r & ((0 > (n = 31 - Vt(n)) ? 0 : 1 << n) << 1) - 1, 0 !== t && t !== n && 0 == (t & s)) {
						if (Nt(t), i <= Mt) return t;
						Mt = i
					}
					if (0 !== (t = e.entangledLanes))
						for (e = e.entanglements, t &= n; 0 < t;) i = 1 << (r = 31 - Vt(t)), n |= e[r], t &= ~i;
					return n
				}

				function Bt(e) {
					return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
				}

				function jt(e, t) {
					switch (e) {
						case 15:
							return 1;
						case 14:
							return 2;
						case 12:
							return 0 === (e = Gt(24 & ~t)) ? jt(10, t) : e;
						case 10:
							return 0 === (e = Gt(192 & ~t)) ? jt(8, t) : e;
						case 8:
							return 0 === (e = Gt(3584 & ~t)) && (0 === (e = Gt(4186112 & ~t)) && (e = 512)), e;
						case 2:
							return 0 === (t = Gt(805306368 & ~t)) && (t = 268435456), t
					}
					throw Error(s(358, e))
				}

				function Gt(e) {
					return e & -e
				}

				function Ht(e) {
					for (var t = [], r = 0; 31 > r; r++) t.push(e);
					return t
				}

				function Kt(e, t, r) {
					e.pendingLanes |= t;
					var n = t - 1;
					e.suspendedLanes &= n, e.pingedLanes &= n, (e = e.eventTimes)[t = 31 - Vt(t)] = r
				}
				var Vt = Math.clz32 ? Math.clz32 : function(e) {
						return 0 === e ? 32 : 31 - (zt(e) / Wt | 0) | 0
					},
					zt = Math.log,
					Wt = Math.LN2;
				var qt = a.unstable_UserBlockingPriority,
					Yt = a.unstable_runWithPriority,
					Xt = !0;

				function Qt(e, t, r, n) {
					Ne || Fe();
					var i = Jt,
						a = Ne;
					Ne = !0;
					try {
						Pe(i, e, t, r, n)
					} finally {
						(Ne = a) || Be()
					}
				}

				function $t(e, t, r, n) {
					Yt(qt, Jt.bind(null, e, t, r, n))
				}

				function Jt(e, t, r, n) {
					var i;
					if (Xt)
						if ((i = 0 == (4 & t)) && 0 < st.length && -1 < ht.indexOf(e)) e = pt(null, e, t, r, n), st.push(e);
						else {
							var a = Zt(e, t, r, n);
							if (null === a) i && gt(e, n);
							else {
								if (i) {
									if (-1 < ht.indexOf(e)) return e = pt(a, e, t, r, n), void st.push(e);
									if (function(e, t, r, n, i) {
											switch (t) {
												case "focusin":
													return ot = vt(ot, e, t, r, n, i), !0;
												case "dragenter":
													return lt = vt(lt, e, t, r, n, i), !0;
												case "mouseover":
													return ut = vt(ut, e, t, r, n, i), !0;
												case "pointerover":
													var a = i.pointerId;
													return ct.set(a, vt(ct.get(a) || null, e, t, r, n, i)), !0;
												case "gotpointercapture":
													return a = i.pointerId, dt.set(a, vt(dt.get(a) || null, e, t, r, n, i)), !0
											}
											return !1
										}(a, e, t, r, n)) return;
									gt(e, n)
								}
								Fn(e, t, n, null, r)
							}
						}
				}

				function Zt(e, t, r, n) {
					var i = Ae(n);
					if (null !== (i = ri(i))) {
						var a = Qe(i);
						if (null === a) i = null;
						else {
							var s = a.tag;
							if (13 === s) {
								if (null !== (i = $e(a))) return i;
								i = null
							} else if (3 === s) {
								if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
								i = null
							} else a !== i && (i = null)
						}
					}
					return Fn(e, t, n, i, r), null
				}
				var er = null,
					tr = null,
					rr = null;

				function nr() {
					if (rr) return rr;
					var e, t, r = tr,
						n = r.length,
						i = "value" in er ? er.value : er.textContent,
						a = i.length;
					for (e = 0; e < n && r[e] === i[e]; e++);
					var s = n - e;
					for (t = 1; t <= s && r[n - t] === i[a - t]; t++);
					return rr = i.slice(e, 1 < t ? 1 - t : void 0)
				}

				function ir(e) {
					var t = e.keyCode;
					return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
				}

				function ar() {
					return !0
				}

				function sr() {
					return !1
				}

				function or(e) {
					function t(t, r, n, i, a) {
						for (var s in this._reactName = t, this._targetInst = n, this.type = r, this.nativeEvent = i, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(s) && (t = e[s], this[s] = t ? t(i) : i[s]);
						return this.isDefaultPrevented = (null != i.defaultPrevented ? i.defaultPrevented : !1 === i.returnValue) ? ar : sr, this.isPropagationStopped = sr, this
					}
					return i(t.prototype, {
						preventDefault: function() {
							this.defaultPrevented = !0;
							var e = this.nativeEvent;
							e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ar)
						},
						stopPropagation: function() {
							var e = this.nativeEvent;
							e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ar)
						},
						persist: function() {},
						isPersistent: ar
					}), t
				}
				var lr, ur, cr, dr = {
						eventPhase: 0,
						bubbles: 0,
						cancelable: 0,
						timeStamp: function(e) {
							return e.timeStamp || Date.now()
						},
						defaultPrevented: 0,
						isTrusted: 0
					},
					fr = or(dr),
					hr = i({}, dr, {
						view: 0,
						detail: 0
					}),
					pr = or(hr),
					gr = i({}, hr, {
						screenX: 0,
						screenY: 0,
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						getModifierState: Dr,
						button: 0,
						buttons: 0,
						relatedTarget: function(e) {
							return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
						},
						movementX: function(e) {
							return "movementX" in e ? e.movementX : (e !== cr && (cr && "mousemove" === e.type ? (lr = e.screenX - cr.screenX, ur = e.screenY - cr.screenY) : ur = lr = 0, cr = e), lr)
						},
						movementY: function(e) {
							return "movementY" in e ? e.movementY : ur
						}
					}),
					vr = or(gr),
					mr = or(i({}, gr, {
						dataTransfer: 0
					})),
					yr = or(i({}, hr, {
						relatedTarget: 0
					})),
					Er = or(i({}, dr, {
						animationName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					br = i({}, dr, {
						clipboardData: function(e) {
							return "clipboardData" in e ? e.clipboardData : window.clipboardData
						}
					}),
					Tr = or(br),
					Sr = or(i({}, dr, {
						data: 0
					})),
					kr = {
						Esc: "Escape",
						Spacebar: " ",
						Left: "ArrowLeft",
						Up: "ArrowUp",
						Right: "ArrowRight",
						Down: "ArrowDown",
						Del: "Delete",
						Win: "OS",
						Menu: "ContextMenu",
						Apps: "ContextMenu",
						Scroll: "ScrollLock",
						MozPrintableKey: "Unidentified"
					},
					wr = {
						8: "Backspace",
						9: "Tab",
						12: "Clear",
						13: "Enter",
						16: "Shift",
						17: "Control",
						18: "Alt",
						19: "Pause",
						20: "CapsLock",
						27: "Escape",
						32: " ",
						33: "PageUp",
						34: "PageDown",
						35: "End",
						36: "Home",
						37: "ArrowLeft",
						38: "ArrowUp",
						39: "ArrowRight",
						40: "ArrowDown",
						45: "Insert",
						46: "Delete",
						112: "F1",
						113: "F2",
						114: "F3",
						115: "F4",
						116: "F5",
						117: "F6",
						118: "F7",
						119: "F8",
						120: "F9",
						121: "F10",
						122: "F11",
						123: "F12",
						144: "NumLock",
						145: "ScrollLock",
						224: "Meta"
					},
					Lr = {
						Alt: "altKey",
						Control: "ctrlKey",
						Meta: "metaKey",
						Shift: "shiftKey"
					};

				function Ar(e) {
					var t = this.nativeEvent;
					return t.getModifierState ? t.getModifierState(e) : !!(e = Lr[e]) && !!t[e]
				}

				function Dr() {
					return Ar
				}
				var Cr = i({}, hr, {
						key: function(e) {
							if (e.key) {
								var t = kr[e.key] || e.key;
								if ("Unidentified" !== t) return t
							}
							return "keypress" === e.type ? 13 === (e = ir(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? wr[e.keyCode] || "Unidentified" : ""
						},
						code: 0,
						location: 0,
						ctrlKey: 0,
						shiftKey: 0,
						altKey: 0,
						metaKey: 0,
						repeat: 0,
						locale: 0,
						getModifierState: Dr,
						charCode: function(e) {
							return "keypress" === e.type ? ir(e) : 0
						},
						keyCode: function(e) {
							return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						},
						which: function(e) {
							return "keypress" === e.type ? ir(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
						}
					}),
					_r = or(Cr),
					Rr = or(i({}, gr, {
						pointerId: 0,
						width: 0,
						height: 0,
						pressure: 0,
						tangentialPressure: 0,
						tiltX: 0,
						tiltY: 0,
						twist: 0,
						pointerType: 0,
						isPrimary: 0
					})),
					xr = or(i({}, hr, {
						touches: 0,
						targetTouches: 0,
						changedTouches: 0,
						altKey: 0,
						metaKey: 0,
						ctrlKey: 0,
						shiftKey: 0,
						getModifierState: Dr
					})),
					Ir = or(i({}, dr, {
						propertyName: 0,
						elapsedTime: 0,
						pseudoElement: 0
					})),
					Or = i({}, gr, {
						deltaX: function(e) {
							return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
						},
						deltaY: function(e) {
							return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
						},
						deltaZ: 0,
						deltaMode: 0
					}),
					Pr = or(Or),
					Fr = [9, 13, 27, 32],
					Mr = d && "CompositionEvent" in window,
					Nr = null;
				d && "documentMode" in document && (Nr = document.documentMode);
				var Ur = d && "TextEvent" in window && !Nr,
					Br = d && (!Mr || Nr && 8 < Nr && 11 >= Nr),
					jr = String.fromCharCode(32),
					Gr = !1;

				function Hr(e, t) {
					switch (e) {
						case "keyup":
							return -1 !== Fr.indexOf(t.keyCode);
						case "keydown":
							return 229 !== t.keyCode;
						case "keypress":
						case "mousedown":
						case "focusout":
							return !0;
						default:
							return !1
					}
				}

				function Kr(e) {
					return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
				}
				var Vr = !1;
				var zr = {
					color: !0,
					date: !0,
					datetime: !0,
					"datetime-local": !0,
					email: !0,
					month: !0,
					number: !0,
					password: !0,
					range: !0,
					search: !0,
					tel: !0,
					text: !0,
					time: !0,
					url: !0,
					week: !0
				};

				function Wr(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return "input" === t ? !!zr[e.type] : "textarea" === t
				}

				function qr(e, t, r, n) {
					xe(n), 0 < (t = Nn(t, "onChange")).length && (r = new fr("onChange", "change", null, r, n), e.push({
						event: r,
						listeners: t
					}))
				}
				var Yr = null,
					Xr = null;

				function Qr(e) {
					_n(e, 0)
				}

				function $r(e) {
					if ($(ii(e))) return e
				}

				function Jr(e, t) {
					if ("change" === e) return t
				}
				var Zr = !1;
				if (d) {
					var en;
					if (d) {
						var tn = "oninput" in document;
						if (!tn) {
							var rn = document.createElement("div");
							rn.setAttribute("oninput", "return;"), tn = "function" == typeof rn.oninput
						}
						en = tn
					} else en = !1;
					Zr = en && (!document.documentMode || 9 < document.documentMode)
				}

				function nn() {
					Yr && (Yr.detachEvent("onpropertychange", an), Xr = Yr = null)
				}

				function an(e) {
					if ("value" === e.propertyName && $r(Xr)) {
						var t = [];
						if (qr(t, Xr, e, Ae(e)), e = Qr, Ne) e(t);
						else {
							Ne = !0;
							try {
								Oe(e, t)
							} finally {
								Ne = !1, Be()
							}
						}
					}
				}

				function sn(e, t, r) {
					"focusin" === e ? (nn(), Xr = r, (Yr = t).attachEvent("onpropertychange", an)) : "focusout" === e && nn()
				}

				function on(e) {
					if ("selectionchange" === e || "keyup" === e || "keydown" === e) return $r(Xr)
				}

				function ln(e, t) {
					if ("click" === e) return $r(t)
				}

				function un(e, t) {
					if ("input" === e || "change" === e) return $r(t)
				}
				var cn = "function" == typeof Object.is ? Object.is : function(e, t) {
						return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
					},
					dn = Object.prototype.hasOwnProperty;

				function fn(e, t) {
					if (cn(e, t)) return !0;
					if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
					var r = Object.keys(e),
						n = Object.keys(t);
					if (r.length !== n.length) return !1;
					for (n = 0; n < r.length; n++)
						if (!dn.call(t, r[n]) || !cn(e[r[n]], t[r[n]])) return !1;
					return !0
				}

				function hn(e) {
					for (; e && e.firstChild;) e = e.firstChild;
					return e
				}

				function pn(e, t) {
					var r, n = hn(e);
					for (e = 0; n;) {
						if (3 === n.nodeType) {
							if (r = e + n.textContent.length, e <= t && r >= t) return {
								node: n,
								offset: t - e
							};
							e = r
						}
						e: {
							for (; n;) {
								if (n.nextSibling) {
									n = n.nextSibling;
									break e
								}
								n = n.parentNode
							}
							n = void 0
						}
						n = hn(n)
					}
				}

				function gn(e, t) {
					return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? gn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
				}

				function vn() {
					for (var e = window, t = J(); t instanceof e.HTMLIFrameElement;) {
						try {
							var r = "string" == typeof t.contentWindow.location.href
						} catch (e) {
							r = !1
						}
						if (!r) break;
						t = J((e = t.contentWindow).document)
					}
					return t
				}

				function mn(e) {
					var t = e && e.nodeName && e.nodeName.toLowerCase();
					return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
				}
				var yn = d && "documentMode" in document && 11 >= document.documentMode,
					En = null,
					bn = null,
					Tn = null,
					Sn = !1;

				function kn(e, t, r) {
					var n = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
					Sn || null == En || En !== J(n) || ("selectionStart" in (n = En) && mn(n) ? n = {
						start: n.selectionStart,
						end: n.selectionEnd
					} : n = {
						anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
						anchorOffset: n.anchorOffset,
						focusNode: n.focusNode,
						focusOffset: n.focusOffset
					}, Tn && fn(Tn, n) || (Tn = n, 0 < (n = Nn(bn, "onSelect")).length && (t = new fr("onSelect", "select", null, t, r), e.push({
						event: t,
						listeners: n
					}), t.target = En)))
				}
				Ft("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Ft("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Ft(Pt, 2);
				for (var wn = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Ln = 0; Ln < wn.length; Ln++) Ot.set(wn[Ln], 0);
				c("onMouseEnter", ["mouseout", "mouseover"]), c("onMouseLeave", ["mouseout", "mouseover"]), c("onPointerEnter", ["pointerout", "pointerover"]), c("onPointerLeave", ["pointerout", "pointerover"]), u("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), u("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), u("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), u("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), u("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
				var An = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
					Dn = new Set("cancel close invalid load scroll toggle".split(" ").concat(An));

				function Cn(e, t, r) {
					var n = e.type || "unknown-event";
					e.currentTarget = r,
						function(e, t, r, n, i, a, o, l, u) {
							if (Xe.apply(this, arguments), Ve) {
								if (!Ve) throw Error(s(198));
								var c = ze;
								Ve = !1, ze = null, We || (We = !0, qe = c)
							}
						}(n, t, void 0, e), e.currentTarget = null
				}

				function _n(e, t) {
					t = 0 != (4 & t);
					for (var r = 0; r < e.length; r++) {
						var n = e[r],
							i = n.event;
						n = n.listeners;
						e: {
							var a = void 0;
							if (t)
								for (var s = n.length - 1; 0 <= s; s--) {
									var o = n[s],
										l = o.instance,
										u = o.currentTarget;
									if (o = o.listener, l !== a && i.isPropagationStopped()) break e;
									Cn(i, o, u), a = l
								} else
									for (s = 0; s < n.length; s++) {
										if (l = (o = n[s]).instance, u = o.currentTarget, o = o.listener, l !== a && i.isPropagationStopped()) break e;
										Cn(i, o, u), a = l
									}
						}
					}
					if (We) throw e = qe, We = !1, qe = null, e
				}

				function Rn(e, t) {
					var r = si(t),
						n = e + "__bubble";
					r.has(n) || (Pn(t, e, 2, !1), r.add(n))
				}
				var xn = "_reactListening" + Math.random().toString(36).slice(2);

				function In(e) {
					e[xn] || (e[xn] = !0, o.forEach((function(t) {
						Dn.has(t) || On(t, !1, e, null), On(t, !0, e, null)
					})))
				}

				function On(e, t, r, n) {
					var i = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
						a = r;
					if ("selectionchange" === e && 9 !== r.nodeType && (a = r.ownerDocument), null !== n && !t && Dn.has(e)) {
						if ("scroll" !== e) return;
						i |= 2, a = n
					}
					var s = si(a),
						o = e + "__" + (t ? "capture" : "bubble");
					s.has(o) || (t && (i |= 4), Pn(a, e, i, t), s.add(o))
				}

				function Pn(e, t, r, n) {
					var i = Ot.get(t);
					switch (void 0 === i ? 2 : i) {
						case 0:
							i = Qt;
							break;
						case 1:
							i = $t;
							break;
						default:
							i = Jt
					}
					r = i.bind(null, t, r, e), i = void 0, !Ge || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (i = !0), n ? void 0 !== i ? e.addEventListener(t, r, {
						capture: !0,
						passive: i
					}) : e.addEventListener(t, r, !0) : void 0 !== i ? e.addEventListener(t, r, {
						passive: i
					}) : e.addEventListener(t, r, !1)
				}

				function Fn(e, t, r, n, i) {
					var a = n;
					if (0 == (1 & t) && 0 == (2 & t) && null !== n) e: for (;;) {
						if (null === n) return;
						var s = n.tag;
						if (3 === s || 4 === s) {
							var o = n.stateNode.containerInfo;
							if (o === i || 8 === o.nodeType && o.parentNode === i) break;
							if (4 === s)
								for (s = n.return; null !== s;) {
									var l = s.tag;
									if ((3 === l || 4 === l) && ((l = s.stateNode.containerInfo) === i || 8 === l.nodeType && l.parentNode === i)) return;
									s = s.return
								}
							for (; null !== o;) {
								if (null === (s = ri(o))) return;
								if (5 === (l = s.tag) || 6 === l) {
									n = a = s;
									continue e
								}
								o = o.parentNode
							}
						}
						n = n.return
					}! function(e, t, r) {
						if (Ue) return e(t, r);
						Ue = !0;
						try {
							Me(e, t, r)
						} finally {
							Ue = !1, Be()
						}
					}((function() {
						var n = a,
							i = Ae(r),
							s = [];
						e: {
							var o = It.get(e);
							if (void 0 !== o) {
								var l = fr,
									u = e;
								switch (e) {
									case "keypress":
										if (0 === ir(r)) break e;
									case "keydown":
									case "keyup":
										l = _r;
										break;
									case "focusin":
										u = "focus", l = yr;
										break;
									case "focusout":
										u = "blur", l = yr;
										break;
									case "beforeblur":
									case "afterblur":
										l = yr;
										break;
									case "click":
										if (2 === r.button) break e;
									case "auxclick":
									case "dblclick":
									case "mousedown":
									case "mousemove":
									case "mouseup":
									case "mouseout":
									case "mouseover":
									case "contextmenu":
										l = vr;
										break;
									case "drag":
									case "dragend":
									case "dragenter":
									case "dragexit":
									case "dragleave":
									case "dragover":
									case "dragstart":
									case "drop":
										l = mr;
										break;
									case "touchcancel":
									case "touchend":
									case "touchmove":
									case "touchstart":
										l = xr;
										break;
									case Ct:
									case _t:
									case Rt:
										l = Er;
										break;
									case xt:
										l = Ir;
										break;
									case "scroll":
										l = pr;
										break;
									case "wheel":
										l = Pr;
										break;
									case "copy":
									case "cut":
									case "paste":
										l = Tr;
										break;
									case "gotpointercapture":
									case "lostpointercapture":
									case "pointercancel":
									case "pointerdown":
									case "pointermove":
									case "pointerout":
									case "pointerover":
									case "pointerup":
										l = Rr
								}
								var c = 0 != (4 & t),
									d = !c && "scroll" === e,
									f = c ? null !== o ? o + "Capture" : null : o;
								c = [];
								for (var h, p = n; null !== p;) {
									var g = (h = p).stateNode;
									if (5 === h.tag && null !== g && (h = g, null !== f && (null != (g = je(p, f)) && c.push(Mn(p, g, h)))), d) break;
									p = p.return
								}
								0 < c.length && (o = new l(o, u, null, r, i), s.push({
									event: o,
									listeners: c
								}))
							}
						}
						if (0 == (7 & t)) {
							if (l = "mouseout" === e || "pointerout" === e, (!(o = "mouseover" === e || "pointerover" === e) || 0 != (16 & t) || !(u = r.relatedTarget || r.fromElement) || !ri(u) && !u[ei]) && (l || o) && (o = i.window === i ? i : (o = i.ownerDocument) ? o.defaultView || o.parentWindow : window, l ? (l = n, null !== (u = (u = r.relatedTarget || r.toElement) ? ri(u) : null) && (u !== (d = Qe(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = n), l !== u)) {
								if (c = vr, g = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Rr, g = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == l ? o : ii(l), h = null == u ? o : ii(u), (o = new c(g, p + "leave", l, r, i)).target = d, o.relatedTarget = h, g = null, ri(i) === n && ((c = new c(f, p + "enter", u, r, i)).target = h, c.relatedTarget = d, g = c), d = g, l && u) e: {
									for (f = u, p = 0, h = c = l; h; h = Un(h)) p++;
									for (h = 0, g = f; g; g = Un(g)) h++;
									for (; 0 < p - h;) c = Un(c),
									p--;
									for (; 0 < h - p;) f = Un(f),
									h--;
									for (; p--;) {
										if (c === f || null !== f && c === f.alternate) break e;
										c = Un(c), f = Un(f)
									}
									c = null
								}
								else c = null;
								null !== l && Bn(s, o, l, c, !1), null !== u && null !== d && Bn(s, d, u, c, !0)
							}
							if ("select" === (l = (o = n ? ii(n) : window).nodeName && o.nodeName.toLowerCase()) || "input" === l && "file" === o.type) var v = Jr;
							else if (Wr(o))
								if (Zr) v = un;
								else {
									v = on;
									var m = sn
								}
							else(l = o.nodeName) && "input" === l.toLowerCase() && ("checkbox" === o.type || "radio" === o.type) && (v = ln);
							switch (v && (v = v(e, n)) ? qr(s, v, r, i) : (m && m(e, o, n), "focusout" === e && (m = o._wrapperState) && m.controlled && "number" === o.type && ie(o, "number", o.value)), m = n ? ii(n) : window, e) {
								case "focusin":
									(Wr(m) || "true" === m.contentEditable) && (En = m, bn = n, Tn = null);
									break;
								case "focusout":
									Tn = bn = En = null;
									break;
								case "mousedown":
									Sn = !0;
									break;
								case "contextmenu":
								case "mouseup":
								case "dragend":
									Sn = !1, kn(s, r, i);
									break;
								case "selectionchange":
									if (yn) break;
								case "keydown":
								case "keyup":
									kn(s, r, i)
							}
							var y;
							if (Mr) e: {
								switch (e) {
									case "compositionstart":
										var E = "onCompositionStart";
										break e;
									case "compositionend":
										E = "onCompositionEnd";
										break e;
									case "compositionupdate":
										E = "onCompositionUpdate";
										break e
								}
								E = void 0
							}
							else Vr ? Hr(e, r) && (E = "onCompositionEnd") : "keydown" === e && 229 === r.keyCode && (E = "onCompositionStart");
							E && (Br && "ko" !== r.locale && (Vr || "onCompositionStart" !== E ? "onCompositionEnd" === E && Vr && (y = nr()) : (tr = "value" in (er = i) ? er.value : er.textContent, Vr = !0)), 0 < (m = Nn(n, E)).length && (E = new Sr(E, e, null, r, i), s.push({
								event: E,
								listeners: m
							}), y ? E.data = y : null !== (y = Kr(r)) && (E.data = y))), (y = Ur ? function(e, t) {
								switch (e) {
									case "compositionend":
										return Kr(t);
									case "keypress":
										return 32 !== t.which ? null : (Gr = !0, jr);
									case "textInput":
										return (e = t.data) === jr && Gr ? null : e;
									default:
										return null
								}
							}(e, r) : function(e, t) {
								if (Vr) return "compositionend" === e || !Mr && Hr(e, t) ? (e = nr(), rr = tr = er = null, Vr = !1, e) : null;
								switch (e) {
									case "paste":
									default:
										return null;
									case "keypress":
										if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
											if (t.char && 1 < t.char.length) return t.char;
											if (t.which) return String.fromCharCode(t.which)
										}
										return null;
									case "compositionend":
										return Br && "ko" !== t.locale ? null : t.data
								}
							}(e, r)) && (0 < (n = Nn(n, "onBeforeInput")).length && (i = new Sr("onBeforeInput", "beforeinput", null, r, i), s.push({
								event: i,
								listeners: n
							}), i.data = y))
						}
						_n(s, t)
					}))
				}

				function Mn(e, t, r) {
					return {
						instance: e,
						listener: t,
						currentTarget: r
					}
				}

				function Nn(e, t) {
					for (var r = t + "Capture", n = []; null !== e;) {
						var i = e,
							a = i.stateNode;
						5 === i.tag && null !== a && (i = a, null != (a = je(e, r)) && n.unshift(Mn(e, a, i)), null != (a = je(e, t)) && n.push(Mn(e, a, i))), e = e.return
					}
					return n
				}

				function Un(e) {
					if (null === e) return null;
					do {
						e = e.return
					} while (e && 5 !== e.tag);
					return e || null
				}

				function Bn(e, t, r, n, i) {
					for (var a = t._reactName, s = []; null !== r && r !== n;) {
						var o = r,
							l = o.alternate,
							u = o.stateNode;
						if (null !== l && l === n) break;
						5 === o.tag && null !== u && (o = u, i ? null != (l = je(r, a)) && s.unshift(Mn(r, l, o)) : i || null != (l = je(r, a)) && s.push(Mn(r, l, o))), r = r.return
					}
					0 !== s.length && e.push({
						event: t,
						listeners: s
					})
				}

				function jn() {}
				var Gn = null,
					Hn = null;

				function Kn(e, t) {
					switch (e) {
						case "button":
						case "input":
						case "select":
						case "textarea":
							return !!t.autoFocus
					}
					return !1
				}

				function Vn(e, t) {
					return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
				}
				var zn = "function" == typeof setTimeout ? setTimeout : void 0,
					Wn = "function" == typeof clearTimeout ? clearTimeout : void 0;

				function qn(e) {
					1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
				}

				function Yn(e) {
					for (; null != e; e = e.nextSibling) {
						var t = e.nodeType;
						if (1 === t || 3 === t) break
					}
					return e
				}

				function Xn(e) {
					e = e.previousSibling;
					for (var t = 0; e;) {
						if (8 === e.nodeType) {
							var r = e.data;
							if ("$" === r || "$!" === r || "$?" === r) {
								if (0 === t) return e;
								t--
							} else "/$" === r && t++
						}
						e = e.previousSibling
					}
					return null
				}
				var Qn = 0;
				var $n = Math.random().toString(36).slice(2),
					Jn = "__reactFiber$" + $n,
					Zn = "__reactProps$" + $n,
					ei = "__reactContainer$" + $n,
					ti = "__reactEvents$" + $n;

				function ri(e) {
					var t = e[Jn];
					if (t) return t;
					for (var r = e.parentNode; r;) {
						if (t = r[ei] || r[Jn]) {
							if (r = t.alternate, null !== t.child || null !== r && null !== r.child)
								for (e = Xn(e); null !== e;) {
									if (r = e[Jn]) return r;
									e = Xn(e)
								}
							return t
						}
						r = (e = r).parentNode
					}
					return null
				}

				function ni(e) {
					return !(e = e[Jn] || e[ei]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
				}

				function ii(e) {
					if (5 === e.tag || 6 === e.tag) return e.stateNode;
					throw Error(s(33))
				}

				function ai(e) {
					return e[Zn] || null
				}

				function si(e) {
					var t = e[ti];
					return void 0 === t && (t = e[ti] = new Set), t
				}
				var oi = [],
					li = -1;

				function ui(e) {
					return {
						current: e
					}
				}

				function ci(e) {
					0 > li || (e.current = oi[li], oi[li] = null, li--)
				}

				function di(e, t) {
					li++, oi[li] = e.current, e.current = t
				}
				var fi = {},
					hi = ui(fi),
					pi = ui(!1),
					gi = fi;

				function vi(e, t) {
					var r = e.type.contextTypes;
					if (!r) return fi;
					var n = e.stateNode;
					if (n && n.__reactInternalMemoizedUnmaskedChildContext === t) return n.__reactInternalMemoizedMaskedChildContext;
					var i, a = {};
					for (i in r) a[i] = t[i];
					return n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
				}

				function mi(e) {
					return null != (e = e.childContextTypes)
				}

				function yi() {
					ci(pi), ci(hi)
				}

				function Ei(e, t, r) {
					if (hi.current !== fi) throw Error(s(168));
					di(hi, t), di(pi, r)
				}

				function bi(e, t, r) {
					var n = e.stateNode;
					if (e = t.childContextTypes, "function" != typeof n.getChildContext) return r;
					for (var a in n = n.getChildContext())
						if (!(a in e)) throw Error(s(108, q(t) || "Unknown", a));
					return i({}, r, n)
				}

				function Ti(e) {
					return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || fi, gi = hi.current, di(hi, e), di(pi, pi.current), !0
				}

				function Si(e, t, r) {
					var n = e.stateNode;
					if (!n) throw Error(s(169));
					r ? (e = bi(e, t, gi), n.__reactInternalMemoizedMergedChildContext = e, ci(pi), ci(hi), di(hi, e)) : ci(pi), di(pi, r)
				}
				var ki = null,
					wi = null,
					Li = a.unstable_runWithPriority,
					Ai = a.unstable_scheduleCallback,
					Di = a.unstable_cancelCallback,
					Ci = a.unstable_shouldYield,
					_i = a.unstable_requestPaint,
					Ri = a.unstable_now,
					xi = a.unstable_getCurrentPriorityLevel,
					Ii = a.unstable_ImmediatePriority,
					Oi = a.unstable_UserBlockingPriority,
					Pi = a.unstable_NormalPriority,
					Fi = a.unstable_LowPriority,
					Mi = a.unstable_IdlePriority,
					Ni = {},
					Ui = void 0 !== _i ? _i : function() {},
					Bi = null,
					ji = null,
					Gi = !1,
					Hi = Ri(),
					Ki = 1e4 > Hi ? Ri : function() {
						return Ri() - Hi
					};

				function Vi() {
					switch (xi()) {
						case Ii:
							return 99;
						case Oi:
							return 98;
						case Pi:
							return 97;
						case Fi:
							return 96;
						case Mi:
							return 95;
						default:
							throw Error(s(332))
					}
				}

				function zi(e) {
					switch (e) {
						case 99:
							return Ii;
						case 98:
							return Oi;
						case 97:
							return Pi;
						case 96:
							return Fi;
						case 95:
							return Mi;
						default:
							throw Error(s(332))
					}
				}

				function Wi(e, t) {
					return e = zi(e), Li(e, t)
				}

				function qi(e, t, r) {
					return e = zi(e), Ai(e, t, r)
				}

				function Yi() {
					if (null !== ji) {
						var e = ji;
						ji = null, Di(e)
					}
					Xi()
				}

				function Xi() {
					if (!Gi && null !== Bi) {
						Gi = !0;
						var e = 0;
						try {
							var t = Bi;
							Wi(99, (function() {
								for (; e < t.length; e++) {
									var r = t[e];
									do {
										r = r(!0)
									} while (null !== r)
								}
							})), Bi = null
						} catch (t) {
							throw null !== Bi && (Bi = Bi.slice(e + 1)), Ai(Ii, Yi), t
						} finally {
							Gi = !1
						}
					}
				}
				var Qi = T.ReactCurrentBatchConfig;

				function $i(e, t) {
					if (e && e.defaultProps) {
						for (var r in t = i({}, t), e = e.defaultProps) void 0 === t[r] && (t[r] = e[r]);
						return t
					}
					return t
				}
				var Ji = ui(null),
					Zi = null,
					ea = null,
					ta = null;

				function ra() {
					ta = ea = Zi = null
				}

				function na(e) {
					var t = Ji.current;
					ci(Ji), e.type._context._currentValue = t
				}

				function ia(e, t) {
					for (; null !== e;) {
						var r = e.alternate;
						if ((e.childLanes & t) === t) {
							if (null === r || (r.childLanes & t) === t) break;
							r.childLanes |= t
						} else e.childLanes |= t, null !== r && (r.childLanes |= t);
						e = e.return
					}
				}

				function aa(e, t) {
					Zi = e, ta = ea = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 != (e.lanes & t) && (Ms = !0), e.firstContext = null)
				}

				function sa(e, t) {
					if (ta !== e && !1 !== t && 0 !== t)
						if ("number" == typeof t && 1073741823 !== t || (ta = e, t = 1073741823), t = {
								context: e,
								observedBits: t,
								next: null
							}, null === ea) {
							if (null === Zi) throw Error(s(308));
							ea = t, Zi.dependencies = {
								lanes: 0,
								firstContext: t,
								responders: null
							}
						} else ea = ea.next = t;
					return e._currentValue
				}
				var oa = !1;

				function la(e) {
					e.updateQueue = {
						baseState: e.memoizedState,
						firstBaseUpdate: null,
						lastBaseUpdate: null,
						shared: {
							pending: null
						},
						effects: null
					}
				}

				function ua(e, t) {
					e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
						baseState: e.baseState,
						firstBaseUpdate: e.firstBaseUpdate,
						lastBaseUpdate: e.lastBaseUpdate,
						shared: e.shared,
						effects: e.effects
					})
				}

				function ca(e, t) {
					return {
						eventTime: e,
						lane: t,
						tag: 0,
						payload: null,
						callback: null,
						next: null
					}
				}

				function da(e, t) {
					if (null !== (e = e.updateQueue)) {
						var r = (e = e.shared).pending;
						null === r ? t.next = t : (t.next = r.next, r.next = t), e.pending = t
					}
				}

				function fa(e, t) {
					var r = e.updateQueue,
						n = e.alternate;
					if (null !== n && r === (n = n.updateQueue)) {
						var i = null,
							a = null;
						if (null !== (r = r.firstBaseUpdate)) {
							do {
								var s = {
									eventTime: r.eventTime,
									lane: r.lane,
									tag: r.tag,
									payload: r.payload,
									callback: r.callback,
									next: null
								};
								null === a ? i = a = s : a = a.next = s, r = r.next
							} while (null !== r);
							null === a ? i = a = t : a = a.next = t
						} else i = a = t;
						return r = {
							baseState: n.baseState,
							firstBaseUpdate: i,
							lastBaseUpdate: a,
							shared: n.shared,
							effects: n.effects
						}, void(e.updateQueue = r)
					}
					null === (e = r.lastBaseUpdate) ? r.firstBaseUpdate = t : e.next = t, r.lastBaseUpdate = t
				}

				function ha(e, t, r, n) {
					var a = e.updateQueue;
					oa = !1;
					var s = a.firstBaseUpdate,
						o = a.lastBaseUpdate,
						l = a.shared.pending;
					if (null !== l) {
						a.shared.pending = null;
						var u = l,
							c = u.next;
						u.next = null, null === o ? s = c : o.next = c, o = u;
						var d = e.alternate;
						if (null !== d) {
							var f = (d = d.updateQueue).lastBaseUpdate;
							f !== o && (null === f ? d.firstBaseUpdate = c : f.next = c, d.lastBaseUpdate = u)
						}
					}
					if (null !== s) {
						for (f = a.baseState, o = 0, d = c = u = null;;) {
							l = s.lane;
							var h = s.eventTime;
							if ((n & l) === l) {
								null !== d && (d = d.next = {
									eventTime: h,
									lane: 0,
									tag: s.tag,
									payload: s.payload,
									callback: s.callback,
									next: null
								});
								e: {
									var p = e,
										g = s;
									switch (l = t, h = r, g.tag) {
										case 1:
											if ("function" == typeof(p = g.payload)) {
												f = p.call(h, f, l);
												break e
											}
											f = p;
											break e;
										case 3:
											p.flags = -4097 & p.flags | 64;
										case 0:
											if (null == (l = "function" == typeof(p = g.payload) ? p.call(h, f, l) : p)) break e;
											f = i({}, f, l);
											break e;
										case 2:
											oa = !0
									}
								}
								null !== s.callback && (e.flags |= 32, null === (l = a.effects) ? a.effects = [s] : l.push(s))
							} else h = {
								eventTime: h,
								lane: l,
								tag: s.tag,
								payload: s.payload,
								callback: s.callback,
								next: null
							}, null === d ? (c = d = h, u = f) : d = d.next = h, o |= l;
							if (null === (s = s.next)) {
								if (null === (l = a.shared.pending)) break;
								s = l.next, l.next = null, a.lastBaseUpdate = l, a.shared.pending = null
							}
						}
						null === d && (u = f), a.baseState = u, a.firstBaseUpdate = c, a.lastBaseUpdate = d, Go |= o, e.lanes = o, e.memoizedState = f
					}
				}

				function pa(e, t, r) {
					if (e = t.effects, t.effects = null, null !== e)
						for (t = 0; t < e.length; t++) {
							var n = e[t],
								i = n.callback;
							if (null !== i) {
								if (n.callback = null, n = r, "function" != typeof i) throw Error(s(191, i));
								i.call(n)
							}
						}
				}
				var ga = (new n.Component).refs;

				function va(e, t, r, n) {
					r = null == (r = r(n, t = e.memoizedState)) ? t : i({}, t, r), e.memoizedState = r, 0 === e.lanes && (e.updateQueue.baseState = r)
				}
				var ma = {
					isMounted: function(e) {
						return !!(e = e._reactInternals) && Qe(e) === e
					},
					enqueueSetState: function(e, t, r) {
						e = e._reactInternals;
						var n = fl(),
							i = hl(e),
							a = ca(n, i);
						a.payload = t, null != r && (a.callback = r), da(e, a), pl(e, i, n)
					},
					enqueueReplaceState: function(e, t, r) {
						e = e._reactInternals;
						var n = fl(),
							i = hl(e),
							a = ca(n, i);
						a.tag = 1, a.payload = t, null != r && (a.callback = r), da(e, a), pl(e, i, n)
					},
					enqueueForceUpdate: function(e, t) {
						e = e._reactInternals;
						var r = fl(),
							n = hl(e),
							i = ca(r, n);
						i.tag = 2, null != t && (i.callback = t), da(e, i), pl(e, n, r)
					}
				};

				function ya(e, t, r, n, i, a, s) {
					return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(n, a, s) : !t.prototype || !t.prototype.isPureReactComponent || (!fn(r, n) || !fn(i, a))
				}

				function Ea(e, t, r) {
					var n = !1,
						i = fi,
						a = t.contextType;
					return "object" == typeof a && null !== a ? a = sa(a) : (i = mi(t) ? gi : hi.current, a = (n = null != (n = t.contextTypes)) ? vi(e, i) : fi), t = new t(r, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ma, e.stateNode = t, t._reactInternals = e, n && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = a), t
				}

				function ba(e, t, r, n) {
					e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(r, n), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(r, n), t.state !== e && ma.enqueueReplaceState(t, t.state, null)
				}

				function Ta(e, t, r, n) {
					var i = e.stateNode;
					i.props = r, i.state = e.memoizedState, i.refs = ga, la(e);
					var a = t.contextType;
					"object" == typeof a && null !== a ? i.context = sa(a) : (a = mi(t) ? gi : hi.current, i.context = vi(e, a)), ha(e, r, i, n), i.state = e.memoizedState, "function" == typeof(a = t.getDerivedStateFromProps) && (va(e, t, a, r), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ma.enqueueReplaceState(i, i.state, null), ha(e, r, i, n), i.state = e.memoizedState), "function" == typeof i.componentDidMount && (e.flags |= 4)
				}
				var Sa = Array.isArray;

				function ka(e, t, r) {
					if (null !== (e = r.ref) && "function" != typeof e && "object" != typeof e) {
						if (r._owner) {
							if (r = r._owner) {
								if (1 !== r.tag) throw Error(s(309));
								var n = r.stateNode
							}
							if (!n) throw Error(s(147, e));
							var i = "" + e;
							return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : (t = function(e) {
								var t = n.refs;
								t === ga && (t = n.refs = {}), null === e ? delete t[i] : t[i] = e
							}, t._stringRef = i, t)
						}
						if ("string" != typeof e) throw Error(s(284));
						if (!r._owner) throw Error(s(290, e))
					}
					return e
				}

				function wa(e, t) {
					if ("textarea" !== e.type) throw Error(s(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
				}

				function La(e) {
					function t(t, r) {
						if (e) {
							var n = t.lastEffect;
							null !== n ? (n.nextEffect = r, t.lastEffect = r) : t.firstEffect = t.lastEffect = r, r.nextEffect = null, r.flags = 8
						}
					}

					function r(r, n) {
						if (!e) return null;
						for (; null !== n;) t(r, n), n = n.sibling;
						return null
					}

					function n(e, t) {
						for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
						return e
					}

					function i(e, t) {
						return (e = Wl(e, t)).index = 0, e.sibling = null, e
					}

					function a(t, r, n) {
						return t.index = n, e ? null !== (n = t.alternate) ? (n = n.index) < r ? (t.flags = 2, r) : n : (t.flags = 2, r) : r
					}

					function o(t) {
						return e && null === t.alternate && (t.flags = 2), t
					}

					function l(e, t, r, n) {
						return null === t || 6 !== t.tag ? ((t = Ql(r, e.mode, n)).return = e, t) : ((t = i(t, r)).return = e, t)
					}

					function u(e, t, r, n) {
						return null !== t && t.elementType === r.type ? ((n = i(t, r.props)).ref = ka(e, t, r), n.return = e, n) : ((n = ql(r.type, r.key, r.props, null, e.mode, n)).ref = ka(e, t, r), n.return = e, n)
					}

					function c(e, t, r, n) {
						return null === t || 4 !== t.tag || t.stateNode.containerInfo !== r.containerInfo || t.stateNode.implementation !== r.implementation ? ((t = $l(r, e.mode, n)).return = e, t) : ((t = i(t, r.children || [])).return = e, t)
					}

					function d(e, t, r, n, a) {
						return null === t || 7 !== t.tag ? ((t = Yl(r, e.mode, n, a)).return = e, t) : ((t = i(t, r)).return = e, t)
					}

					function f(e, t, r) {
						if ("string" == typeof t || "number" == typeof t) return (t = Ql("" + t, e.mode, r)).return = e, t;
						if ("object" == typeof t && null !== t) {
							switch (t.$$typeof) {
								case S:
									return (r = ql(t.type, t.key, t.props, null, e.mode, r)).ref = ka(e, null, t), r.return = e, r;
								case k:
									return (t = $l(t, e.mode, r)).return = e, t
							}
							if (Sa(t) || H(t)) return (t = Yl(t, e.mode, r, null)).return = e, t;
							wa(e, t)
						}
						return null
					}

					function h(e, t, r, n) {
						var i = null !== t ? t.key : null;
						if ("string" == typeof r || "number" == typeof r) return null !== i ? null : l(e, t, "" + r, n);
						if ("object" == typeof r && null !== r) {
							switch (r.$$typeof) {
								case S:
									return r.key === i ? r.type === w ? d(e, t, r.props.children, n, i) : u(e, t, r, n) : null;
								case k:
									return r.key === i ? c(e, t, r, n) : null
							}
							if (Sa(r) || H(r)) return null !== i ? null : d(e, t, r, n, null);
							wa(e, r)
						}
						return null
					}

					function p(e, t, r, n, i) {
						if ("string" == typeof n || "number" == typeof n) return l(t, e = e.get(r) || null, "" + n, i);
						if ("object" == typeof n && null !== n) {
							switch (n.$$typeof) {
								case S:
									return e = e.get(null === n.key ? r : n.key) || null, n.type === w ? d(t, e, n.props.children, i, n.key) : u(t, e, n, i);
								case k:
									return c(t, e = e.get(null === n.key ? r : n.key) || null, n, i)
							}
							if (Sa(n) || H(n)) return d(t, e = e.get(r) || null, n, i, null);
							wa(t, n)
						}
						return null
					}

					function g(i, s, o, l) {
						for (var u = null, c = null, d = s, g = s = 0, v = null; null !== d && g < o.length; g++) {
							d.index > g ? (v = d, d = null) : v = d.sibling;
							var m = h(i, d, o[g], l);
							if (null === m) {
								null === d && (d = v);
								break
							}
							e && d && null === m.alternate && t(i, d), s = a(m, s, g), null === c ? u = m : c.sibling = m, c = m, d = v
						}
						if (g === o.length) return r(i, d), u;
						if (null === d) {
							for (; g < o.length; g++) null !== (d = f(i, o[g], l)) && (s = a(d, s, g), null === c ? u = d : c.sibling = d, c = d);
							return u
						}
						for (d = n(i, d); g < o.length; g++) null !== (v = p(d, i, g, o[g], l)) && (e && null !== v.alternate && d.delete(null === v.key ? g : v.key), s = a(v, s, g), null === c ? u = v : c.sibling = v, c = v);
						return e && d.forEach((function(e) {
							return t(i, e)
						})), u
					}

					function v(i, o, l, u) {
						var c = H(l);
						if ("function" != typeof c) throw Error(s(150));
						if (null == (l = c.call(l))) throw Error(s(151));
						for (var d = c = null, g = o, v = o = 0, m = null, y = l.next(); null !== g && !y.done; v++, y = l.next()) {
							g.index > v ? (m = g, g = null) : m = g.sibling;
							var E = h(i, g, y.value, u);
							if (null === E) {
								null === g && (g = m);
								break
							}
							e && g && null === E.alternate && t(i, g), o = a(E, o, v), null === d ? c = E : d.sibling = E, d = E, g = m
						}
						if (y.done) return r(i, g), c;
						if (null === g) {
							for (; !y.done; v++, y = l.next()) null !== (y = f(i, y.value, u)) && (o = a(y, o, v), null === d ? c = y : d.sibling = y, d = y);
							return c
						}
						for (g = n(i, g); !y.done; v++, y = l.next()) null !== (y = p(g, i, v, y.value, u)) && (e && null !== y.alternate && g.delete(null === y.key ? v : y.key), o = a(y, o, v), null === d ? c = y : d.sibling = y, d = y);
						return e && g.forEach((function(e) {
							return t(i, e)
						})), c
					}
					return function(e, n, a, l) {
						var u = "object" == typeof a && null !== a && a.type === w && null === a.key;
						u && (a = a.props.children);
						var c = "object" == typeof a && null !== a;
						if (c) switch (a.$$typeof) {
							case S:
								e: {
									for (c = a.key, u = n; null !== u;) {
										if (u.key === c) {
											if (7 === u.tag) {
												if (a.type === w) {
													r(e, u.sibling), (n = i(u, a.props.children)).return = e, e = n;
													break e
												}
											} else if (u.elementType === a.type) {
												r(e, u.sibling), (n = i(u, a.props)).ref = ka(e, u, a), n.return = e, e = n;
												break e
											}
											r(e, u);
											break
										}
										t(e, u), u = u.sibling
									}
									a.type === w ? ((n = Yl(a.props.children, e.mode, l, a.key)).return = e, e = n) : ((l = ql(a.type, a.key, a.props, null, e.mode, l)).ref = ka(e, n, a), l.return = e, e = l)
								}
								return o(e);
							case k:
								e: {
									for (u = a.key; null !== n;) {
										if (n.key === u) {
											if (4 === n.tag && n.stateNode.containerInfo === a.containerInfo && n.stateNode.implementation === a.implementation) {
												r(e, n.sibling), (n = i(n, a.children || [])).return = e, e = n;
												break e
											}
											r(e, n);
											break
										}
										t(e, n), n = n.sibling
									}(n = $l(a, e.mode, l)).return = e,
									e = n
								}
								return o(e)
						}
						if ("string" == typeof a || "number" == typeof a) return a = "" + a, null !== n && 6 === n.tag ? (r(e, n.sibling), (n = i(n, a)).return = e, e = n) : (r(e, n), (n = Ql(a, e.mode, l)).return = e, e = n), o(e);
						if (Sa(a)) return g(e, n, a, l);
						if (H(a)) return v(e, n, a, l);
						if (c && wa(e, a), void 0 === a && !u) switch (e.tag) {
							case 1:
							case 22:
							case 0:
							case 11:
							case 15:
								throw Error(s(152, q(e.type) || "Component"))
						}
						return r(e, n)
					}
				}
				var Aa = La(!0),
					Da = La(!1),
					Ca = {},
					_a = ui(Ca),
					Ra = ui(Ca),
					xa = ui(Ca);

				function Ia(e) {
					if (e === Ca) throw Error(s(174));
					return e
				}

				function Oa(e, t) {
					switch (di(xa, t), di(Ra, e), di(_a, Ca), e = t.nodeType) {
						case 9:
						case 11:
							t = (t = t.documentElement) ? t.namespaceURI : pe(null, "");
							break;
						default:
							t = pe(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
					}
					ci(_a), di(_a, t)
				}

				function Pa() {
					ci(_a), ci(Ra), ci(xa)
				}

				function Fa(e) {
					Ia(xa.current);
					var t = Ia(_a.current),
						r = pe(t, e.type);
					t !== r && (di(Ra, e), di(_a, r))
				}

				function Ma(e) {
					Ra.current === e && (ci(_a), ci(Ra))
				}
				var Na = ui(0);

				function Ua(e) {
					for (var t = e; null !== t;) {
						if (13 === t.tag) {
							var r = t.memoizedState;
							if (null !== r && (null === (r = r.dehydrated) || "$?" === r.data || "$!" === r.data)) return t
						} else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
							if (0 != (64 & t.flags)) return t
						} else if (null !== t.child) {
							t.child.return = t, t = t.child;
							continue
						}
						if (t === e) break;
						for (; null === t.sibling;) {
							if (null === t.return || t.return === e) return null;
							t = t.return
						}
						t.sibling.return = t.return, t = t.sibling
					}
					return null
				}
				var Ba = null,
					ja = null,
					Ga = !1;

				function Ha(e, t) {
					var r = Vl(5, null, null, 0);
					r.elementType = "DELETED", r.type = "DELETED", r.stateNode = t, r.return = e, r.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = r, e.lastEffect = r) : e.firstEffect = e.lastEffect = r
				}

				function Ka(e, t) {
					switch (e.tag) {
						case 5:
							var r = e.type;
							return null !== (t = 1 !== t.nodeType || r.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
						case 6:
							return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
						default:
							return !1
					}
				}

				function Va(e) {
					if (Ga) {
						var t = ja;
						if (t) {
							var r = t;
							if (!Ka(e, t)) {
								if (!(t = Yn(r.nextSibling)) || !Ka(e, t)) return e.flags = -1025 & e.flags | 2, Ga = !1, void(Ba = e);
								Ha(Ba, r)
							}
							Ba = e, ja = Yn(t.firstChild)
						} else e.flags = -1025 & e.flags | 2, Ga = !1, Ba = e
					}
				}

				function za(e) {
					for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
					Ba = e
				}

				function Wa(e) {
					if (e !== Ba) return !1;
					if (!Ga) return za(e), Ga = !0, !1;
					var t = e.type;
					if (5 !== e.tag || "head" !== t && "body" !== t && !Vn(t, e.memoizedProps))
						for (t = ja; t;) Ha(e, t), t = Yn(t.nextSibling);
					if (za(e), 13 === e.tag) {
						if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(s(317));
						e: {
							for (e = e.nextSibling, t = 0; e;) {
								if (8 === e.nodeType) {
									var r = e.data;
									if ("/$" === r) {
										if (0 === t) {
											ja = Yn(e.nextSibling);
											break e
										}
										t--
									} else "$" !== r && "$!" !== r && "$?" !== r || t++
								}
								e = e.nextSibling
							}
							ja = null
						}
					} else ja = Ba ? Yn(e.stateNode.nextSibling) : null;
					return !0
				}

				function qa() {
					ja = Ba = null, Ga = !1
				}
				var Ya = [];

				function Xa() {
					for (var e = 0; e < Ya.length; e++) Ya[e]._workInProgressVersionPrimary = null;
					Ya.length = 0
				}
				var Qa = T.ReactCurrentDispatcher,
					$a = T.ReactCurrentBatchConfig,
					Ja = 0,
					Za = null,
					es = null,
					ts = null,
					rs = !1,
					ns = !1;

				function is() {
					throw Error(s(321))
				}

				function as(e, t) {
					if (null === t) return !1;
					for (var r = 0; r < t.length && r < e.length; r++)
						if (!cn(e[r], t[r])) return !1;
					return !0
				}

				function ss(e, t, r, n, i, a) {
					if (Ja = a, Za = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qa.current = null === e || null === e.memoizedState ? Is : Os, e = r(n, i), ns) {
						a = 0;
						do {
							if (ns = !1, !(25 > a)) throw Error(s(301));
							a += 1, ts = es = null, t.updateQueue = null, Qa.current = Ps, e = r(n, i)
						} while (ns)
					}
					if (Qa.current = xs, t = null !== es && null !== es.next, Ja = 0, ts = es = Za = null, rs = !1, t) throw Error(s(300));
					return e
				}

				function os() {
					var e = {
						memoizedState: null,
						baseState: null,
						baseQueue: null,
						queue: null,
						next: null
					};
					return null === ts ? Za.memoizedState = ts = e : ts = ts.next = e, ts
				}

				function ls() {
					if (null === es) {
						var e = Za.alternate;
						e = null !== e ? e.memoizedState : null
					} else e = es.next;
					var t = null === ts ? Za.memoizedState : ts.next;
					if (null !== t) ts = t, es = e;
					else {
						if (null === e) throw Error(s(310));
						e = {
							memoizedState: (es = e).memoizedState,
							baseState: es.baseState,
							baseQueue: es.baseQueue,
							queue: es.queue,
							next: null
						}, null === ts ? Za.memoizedState = ts = e : ts = ts.next = e
					}
					return ts
				}

				function us(e, t) {
					return "function" == typeof t ? t(e) : t
				}

				function cs(e) {
					var t = ls(),
						r = t.queue;
					if (null === r) throw Error(s(311));
					r.lastRenderedReducer = e;
					var n = es,
						i = n.baseQueue,
						a = r.pending;
					if (null !== a) {
						if (null !== i) {
							var o = i.next;
							i.next = a.next, a.next = o
						}
						n.baseQueue = i = a, r.pending = null
					}
					if (null !== i) {
						i = i.next, n = n.baseState;
						var l = o = a = null,
							u = i;
						do {
							var c = u.lane;
							if ((Ja & c) === c) null !== l && (l = l.next = {
								lane: 0,
								action: u.action,
								eagerReducer: u.eagerReducer,
								eagerState: u.eagerState,
								next: null
							}), n = u.eagerReducer === e ? u.eagerState : e(n, u.action);
							else {
								var d = {
									lane: c,
									action: u.action,
									eagerReducer: u.eagerReducer,
									eagerState: u.eagerState,
									next: null
								};
								null === l ? (o = l = d, a = n) : l = l.next = d, Za.lanes |= c, Go |= c
							}
							u = u.next
						} while (null !== u && u !== i);
						null === l ? a = n : l.next = o, cn(n, t.memoizedState) || (Ms = !0), t.memoizedState = n, t.baseState = a, t.baseQueue = l, r.lastRenderedState = n
					}
					return [t.memoizedState, r.dispatch]
				}

				function ds(e) {
					var t = ls(),
						r = t.queue;
					if (null === r) throw Error(s(311));
					r.lastRenderedReducer = e;
					var n = r.dispatch,
						i = r.pending,
						a = t.memoizedState;
					if (null !== i) {
						r.pending = null;
						var o = i = i.next;
						do {
							a = e(a, o.action), o = o.next
						} while (o !== i);
						cn(a, t.memoizedState) || (Ms = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), r.lastRenderedState = a
					}
					return [a, n]
				}

				function fs(e, t, r) {
					var n = t._getVersion;
					n = n(t._source);
					var i = t._workInProgressVersionPrimary;
					if (null !== i ? e = i === n : (e = e.mutableReadLanes, (e = (Ja & e) === e) && (t._workInProgressVersionPrimary = n, Ya.push(t))), e) return r(t._source);
					throw Ya.push(t), Error(s(350))
				}

				function hs(e, t, r, n) {
					var i = Oo;
					if (null === i) throw Error(s(349));
					var a = t._getVersion,
						o = a(t._source),
						l = Qa.current,
						u = l.useState((function() {
							return fs(i, t, r)
						})),
						c = u[1],
						d = u[0];
					u = ts;
					var f = e.memoizedState,
						h = f.refs,
						p = h.getSnapshot,
						g = f.source;
					f = f.subscribe;
					var v = Za;
					return e.memoizedState = {
						refs: h,
						source: t,
						subscribe: n
					}, l.useEffect((function() {
						h.getSnapshot = r, h.setSnapshot = c;
						var e = a(t._source);
						if (!cn(o, e)) {
							e = r(t._source), cn(d, e) || (c(e), e = hl(v), i.mutableReadLanes |= e & i.pendingLanes), e = i.mutableReadLanes, i.entangledLanes |= e;
							for (var n = i.entanglements, s = e; 0 < s;) {
								var l = 31 - Vt(s),
									u = 1 << l;
								n[l] |= e, s &= ~u
							}
						}
					}), [r, t, n]), l.useEffect((function() {
						return n(t._source, (function() {
							var e = h.getSnapshot,
								r = h.setSnapshot;
							try {
								r(e(t._source));
								var n = hl(v);
								i.mutableReadLanes |= n & i.pendingLanes
							} catch (e) {
								r((function() {
									throw e
								}))
							}
						}))
					}), [t, n]), cn(p, r) && cn(g, t) && cn(f, n) || ((e = {
						pending: null,
						dispatch: null,
						lastRenderedReducer: us,
						lastRenderedState: d
					}).dispatch = c = Rs.bind(null, Za, e), u.queue = e, u.baseQueue = null, d = fs(i, t, r), u.memoizedState = u.baseState = d), d
				}

				function ps(e, t, r) {
					return hs(ls(), e, t, r)
				}

				function gs(e) {
					var t = os();
					return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
						pending: null,
						dispatch: null,
						lastRenderedReducer: us,
						lastRenderedState: e
					}).dispatch = Rs.bind(null, Za, e), [t.memoizedState, e]
				}

				function vs(e, t, r, n) {
					return e = {
						tag: e,
						create: t,
						destroy: r,
						deps: n,
						next: null
					}, null === (t = Za.updateQueue) ? (t = {
						lastEffect: null
					}, Za.updateQueue = t, t.lastEffect = e.next = e) : null === (r = t.lastEffect) ? t.lastEffect = e.next = e : (n = r.next, r.next = e, e.next = n, t.lastEffect = e), e
				}

				function ms(e) {
					return e = {
						current: e
					}, os().memoizedState = e
				}

				function ys() {
					return ls().memoizedState
				}

				function Es(e, t, r, n) {
					var i = os();
					Za.flags |= e, i.memoizedState = vs(1 | t, r, void 0, void 0 === n ? null : n)
				}

				function bs(e, t, r, n) {
					var i = ls();
					n = void 0 === n ? null : n;
					var a = void 0;
					if (null !== es) {
						var s = es.memoizedState;
						if (a = s.destroy, null !== n && as(n, s.deps)) return void vs(t, r, a, n)
					}
					Za.flags |= e, i.memoizedState = vs(1 | t, r, a, n)
				}

				function Ts(e, t) {
					return Es(516, 4, e, t)
				}

				function Ss(e, t) {
					return bs(516, 4, e, t)
				}

				function ks(e, t) {
					return bs(4, 2, e, t)
				}

				function ws(e, t) {
					return "function" == typeof t ? (e = e(), t(e), function() {
						t(null)
					}) : null != t ? (e = e(), t.current = e, function() {
						t.current = null
					}) : void 0
				}

				function Ls(e, t, r) {
					return r = null != r ? r.concat([e]) : null, bs(4, 2, ws.bind(null, t, e), r)
				}

				function As() {}

				function Ds(e, t) {
					var r = ls();
					t = void 0 === t ? null : t;
					var n = r.memoizedState;
					return null !== n && null !== t && as(t, n[1]) ? n[0] : (r.memoizedState = [e, t], e)
				}

				function Cs(e, t) {
					var r = ls();
					t = void 0 === t ? null : t;
					var n = r.memoizedState;
					return null !== n && null !== t && as(t, n[1]) ? n[0] : (e = e(), r.memoizedState = [e, t], e)
				}

				function _s(e, t) {
					var r = Vi();
					Wi(98 > r ? 98 : r, (function() {
						e(!0)
					})), Wi(97 < r ? 97 : r, (function() {
						var r = $a.transition;
						$a.transition = 1;
						try {
							e(!1), t()
						} finally {
							$a.transition = r
						}
					}))
				}

				function Rs(e, t, r) {
					var n = fl(),
						i = hl(e),
						a = {
							lane: i,
							action: r,
							eagerReducer: null,
							eagerState: null,
							next: null
						},
						s = t.pending;
					if (null === s ? a.next = a : (a.next = s.next, s.next = a), t.pending = a, s = e.alternate, e === Za || null !== s && s === Za) ns = rs = !0;
					else {
						if (0 === e.lanes && (null === s || 0 === s.lanes) && null !== (s = t.lastRenderedReducer)) try {
							var o = t.lastRenderedState,
								l = s(o, r);
							if (a.eagerReducer = s, a.eagerState = l, cn(l, o)) return
						} catch (e) {}
						pl(e, i, n)
					}
				}
				var xs = {
						readContext: sa,
						useCallback: is,
						useContext: is,
						useEffect: is,
						useImperativeHandle: is,
						useLayoutEffect: is,
						useMemo: is,
						useReducer: is,
						useRef: is,
						useState: is,
						useDebugValue: is,
						useDeferredValue: is,
						useTransition: is,
						useMutableSource: is,
						useOpaqueIdentifier: is,
						unstable_isNewReconciler: !1
					},
					Is = {
						readContext: sa,
						useCallback: function(e, t) {
							return os().memoizedState = [e, void 0 === t ? null : t], e
						},
						useContext: sa,
						useEffect: Ts,
						useImperativeHandle: function(e, t, r) {
							return r = null != r ? r.concat([e]) : null, Es(4, 2, ws.bind(null, t, e), r)
						},
						useLayoutEffect: function(e, t) {
							return Es(4, 2, e, t)
						},
						useMemo: function(e, t) {
							var r = os();
							return t = void 0 === t ? null : t, e = e(), r.memoizedState = [e, t], e
						},
						useReducer: function(e, t, r) {
							var n = os();
							return t = void 0 !== r ? r(t) : t, n.memoizedState = n.baseState = t, e = (e = n.queue = {
								pending: null,
								dispatch: null,
								lastRenderedReducer: e,
								lastRenderedState: t
							}).dispatch = Rs.bind(null, Za, e), [n.memoizedState, e]
						},
						useRef: ms,
						useState: gs,
						useDebugValue: As,
						useDeferredValue: function(e) {
							var t = gs(e),
								r = t[0],
								n = t[1];
							return Ts((function() {
								var t = $a.transition;
								$a.transition = 1;
								try {
									n(e)
								} finally {
									$a.transition = t
								}
							}), [e]), r
						},
						useTransition: function() {
							var e = gs(!1),
								t = e[0];
							return ms(e = _s.bind(null, e[1])), [e, t]
						},
						useMutableSource: function(e, t, r) {
							var n = os();
							return n.memoizedState = {
								refs: {
									getSnapshot: t,
									setSnapshot: null
								},
								source: e,
								subscribe: r
							}, hs(n, e, t, r)
						},
						useOpaqueIdentifier: function() {
							if (Ga) {
								var e = !1,
									t = function(e) {
										return {
											$$typeof: F,
											toString: e,
											valueOf: e
										}
									}((function() {
										throw e || (e = !0, r("r:" + (Qn++).toString(36))), Error(s(355))
									})),
									r = gs(t)[1];
								return 0 == (2 & Za.mode) && (Za.flags |= 516, vs(5, (function() {
									r("r:" + (Qn++).toString(36))
								}), void 0, null)), t
							}
							return gs(t = "r:" + (Qn++).toString(36)), t
						},
						unstable_isNewReconciler: !1
					},
					Os = {
						readContext: sa,
						useCallback: Ds,
						useContext: sa,
						useEffect: Ss,
						useImperativeHandle: Ls,
						useLayoutEffect: ks,
						useMemo: Cs,
						useReducer: cs,
						useRef: ys,
						useState: function() {
							return cs(us)
						},
						useDebugValue: As,
						useDeferredValue: function(e) {
							var t = cs(us),
								r = t[0],
								n = t[1];
							return Ss((function() {
								var t = $a.transition;
								$a.transition = 1;
								try {
									n(e)
								} finally {
									$a.transition = t
								}
							}), [e]), r
						},
						useTransition: function() {
							var e = cs(us)[0];
							return [ys().current, e]
						},
						useMutableSource: ps,
						useOpaqueIdentifier: function() {
							return cs(us)[0]
						},
						unstable_isNewReconciler: !1
					},
					Ps = {
						readContext: sa,
						useCallback: Ds,
						useContext: sa,
						useEffect: Ss,
						useImperativeHandle: Ls,
						useLayoutEffect: ks,
						useMemo: Cs,
						useReducer: ds,
						useRef: ys,
						useState: function() {
							return ds(us)
						},
						useDebugValue: As,
						useDeferredValue: function(e) {
							var t = ds(us),
								r = t[0],
								n = t[1];
							return Ss((function() {
								var t = $a.transition;
								$a.transition = 1;
								try {
									n(e)
								} finally {
									$a.transition = t
								}
							}), [e]), r
						},
						useTransition: function() {
							var e = ds(us)[0];
							return [ys().current, e]
						},
						useMutableSource: ps,
						useOpaqueIdentifier: function() {
							return ds(us)[0]
						},
						unstable_isNewReconciler: !1
					},
					Fs = T.ReactCurrentOwner,
					Ms = !1;

				function Ns(e, t, r, n) {
					t.child = null === e ? Da(t, null, r, n) : Aa(t, e.child, r, n)
				}

				function Us(e, t, r, n, i) {
					r = r.render;
					var a = t.ref;
					return aa(t, i), n = ss(e, t, r, n, a, i), null === e || Ms ? (t.flags |= 1, Ns(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, io(e, t, i))
				}

				function Bs(e, t, r, n, i, a) {
					if (null === e) {
						var s = r.type;
						return "function" != typeof s || zl(s) || void 0 !== s.defaultProps || null !== r.compare || void 0 !== r.defaultProps ? ((e = ql(r.type, null, n, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, js(e, t, s, n, i, a))
					}
					return s = e.child, 0 == (i & a) && (i = s.memoizedProps, (r = null !== (r = r.compare) ? r : fn)(i, n) && e.ref === t.ref) ? io(e, t, a) : (t.flags |= 1, (e = Wl(s, n)).ref = t.ref, e.return = t, t.child = e)
				}

				function js(e, t, r, n, i, a) {
					if (null !== e && fn(e.memoizedProps, n) && e.ref === t.ref) {
						if (Ms = !1, 0 == (a & i)) return t.lanes = e.lanes, io(e, t, a);
						0 != (16384 & e.flags) && (Ms = !0)
					}
					return Ks(e, t, r, n, a)
				}

				function Gs(e, t, r) {
					var n = t.pendingProps,
						i = n.children,
						a = null !== e ? e.memoizedState : null;
					if ("hidden" === n.mode || "unstable-defer-without-hiding" === n.mode)
						if (0 == (4 & t.mode)) t.memoizedState = {
							baseLanes: 0
						}, Sl(t, r);
						else {
							if (0 == (1073741824 & r)) return e = null !== a ? a.baseLanes | r : r, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
								baseLanes: e
							}, Sl(t, e), null;
							t.memoizedState = {
								baseLanes: 0
							}, Sl(t, null !== a ? a.baseLanes : r)
						}
					else null !== a ? (n = a.baseLanes | r, t.memoizedState = null) : n = r, Sl(t, n);
					return Ns(e, t, i, r), t.child
				}

				function Hs(e, t) {
					var r = t.ref;
					(null === e && null !== r || null !== e && e.ref !== r) && (t.flags |= 128)
				}

				function Ks(e, t, r, n, i) {
					var a = mi(r) ? gi : hi.current;
					return a = vi(t, a), aa(t, i), r = ss(e, t, r, n, a, i), null === e || Ms ? (t.flags |= 1, Ns(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~i, io(e, t, i))
				}

				function Vs(e, t, r, n, i) {
					if (mi(r)) {
						var a = !0;
						Ti(t)
					} else a = !1;
					if (aa(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), Ea(t, r, n), Ta(t, r, n, i), n = !0;
					else if (null === e) {
						var s = t.stateNode,
							o = t.memoizedProps;
						s.props = o;
						var l = s.context,
							u = r.contextType;
						"object" == typeof u && null !== u ? u = sa(u) : u = vi(t, u = mi(r) ? gi : hi.current);
						var c = r.getDerivedStateFromProps,
							d = "function" == typeof c || "function" == typeof s.getSnapshotBeforeUpdate;
						d || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (o !== n || l !== u) && ba(t, s, n, u), oa = !1;
						var f = t.memoizedState;
						s.state = f, ha(t, n, s, i), l = t.memoizedState, o !== n || f !== l || pi.current || oa ? ("function" == typeof c && (va(t, r, c, n), l = t.memoizedState), (o = oa || ya(t, r, o, n, f, l, u)) ? (d || "function" != typeof s.UNSAFE_componentWillMount && "function" != typeof s.componentWillMount || ("function" == typeof s.componentWillMount && s.componentWillMount(), "function" == typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" == typeof s.componentDidMount && (t.flags |= 4)) : ("function" == typeof s.componentDidMount && (t.flags |= 4), t.memoizedProps = n, t.memoizedState = l), s.props = n, s.state = l, s.context = u, n = o) : ("function" == typeof s.componentDidMount && (t.flags |= 4), n = !1)
					} else {
						s = t.stateNode, ua(e, t), o = t.memoizedProps, u = t.type === t.elementType ? o : $i(t.type, o), s.props = u, d = t.pendingProps, f = s.context, "object" == typeof(l = r.contextType) && null !== l ? l = sa(l) : l = vi(t, l = mi(r) ? gi : hi.current);
						var h = r.getDerivedStateFromProps;
						(c = "function" == typeof h || "function" == typeof s.getSnapshotBeforeUpdate) || "function" != typeof s.UNSAFE_componentWillReceiveProps && "function" != typeof s.componentWillReceiveProps || (o !== d || f !== l) && ba(t, s, n, l), oa = !1, f = t.memoizedState, s.state = f, ha(t, n, s, i);
						var p = t.memoizedState;
						o !== d || f !== p || pi.current || oa ? ("function" == typeof h && (va(t, r, h, n), p = t.memoizedState), (u = oa || ya(t, r, u, n, f, p, l)) ? (c || "function" != typeof s.UNSAFE_componentWillUpdate && "function" != typeof s.componentWillUpdate || ("function" == typeof s.componentWillUpdate && s.componentWillUpdate(n, p, l), "function" == typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(n, p, l)), "function" == typeof s.componentDidUpdate && (t.flags |= 4), "function" == typeof s.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" != typeof s.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), t.memoizedProps = n, t.memoizedState = p), s.props = n, s.state = p, s.context = l, n = u) : ("function" != typeof s.componentDidUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" != typeof s.getSnapshotBeforeUpdate || o === e.memoizedProps && f === e.memoizedState || (t.flags |= 256), n = !1)
					}
					return zs(e, t, r, n, a, i)
				}

				function zs(e, t, r, n, i, a) {
					Hs(e, t);
					var s = 0 != (64 & t.flags);
					if (!n && !s) return i && Si(t, r, !1), io(e, t, a);
					n = t.stateNode, Fs.current = t;
					var o = s && "function" != typeof r.getDerivedStateFromError ? null : n.render();
					return t.flags |= 1, null !== e && s ? (t.child = Aa(t, e.child, null, a), t.child = Aa(t, null, o, a)) : Ns(e, t, o, a), t.memoizedState = n.state, i && Si(t, r, !0), t.child
				}

				function Ws(e) {
					var t = e.stateNode;
					t.pendingContext ? Ei(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ei(0, t.context, !1), Oa(e, t.containerInfo)
				}
				var qs, Ys, Xs, Qs = {
					dehydrated: null,
					retryLane: 0
				};

				function $s(e, t, r) {
					var n, i = t.pendingProps,
						a = Na.current,
						s = !1;
					return (n = 0 != (64 & t.flags)) || (n = (null === e || null !== e.memoizedState) && 0 != (2 & a)), n ? (s = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === i.fallback || !0 === i.unstable_avoidThisFallback || (a |= 1), di(Na, 1 & a), null === e ? (void 0 !== i.fallback && Va(t), e = i.children, a = i.fallback, s ? (e = Js(t, e, a, r), t.child.memoizedState = {
						baseLanes: r
					}, t.memoizedState = Qs, e) : "number" == typeof i.unstable_expectedLoadTime ? (e = Js(t, e, a, r), t.child.memoizedState = {
						baseLanes: r
					}, t.memoizedState = Qs, t.lanes = 33554432, e) : ((r = Xl({
						mode: "visible",
						children: e
					}, t.mode, r, null)).return = t, t.child = r)) : (e.memoizedState, s ? (i = eo(e, t, i.children, i.fallback, r), s = t.child, a = e.child.memoizedState, s.memoizedState = null === a ? {
						baseLanes: r
					} : {
						baseLanes: a.baseLanes | r
					}, s.childLanes = e.childLanes & ~r, t.memoizedState = Qs, i) : (r = Zs(e, t, i.children, r), t.memoizedState = null, r))
				}

				function Js(e, t, r, n) {
					var i = e.mode,
						a = e.child;
					return t = {
						mode: "hidden",
						children: t
					}, 0 == (2 & i) && null !== a ? (a.childLanes = 0, a.pendingProps = t) : a = Xl(t, i, 0, null), r = Yl(r, i, n, null), a.return = e, r.return = e, a.sibling = r, e.child = a, r
				}

				function Zs(e, t, r, n) {
					var i = e.child;
					return e = i.sibling, r = Wl(i, {
						mode: "visible",
						children: r
					}), 0 == (2 & t.mode) && (r.lanes = n), r.return = t, r.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = r
				}

				function eo(e, t, r, n, i) {
					var a = t.mode,
						s = e.child;
					e = s.sibling;
					var o = {
						mode: "hidden",
						children: r
					};
					return 0 == (2 & a) && t.child !== s ? ((r = t.child).childLanes = 0, r.pendingProps = o, null !== (s = r.lastEffect) ? (t.firstEffect = r.firstEffect, t.lastEffect = s, s.nextEffect = null) : t.firstEffect = t.lastEffect = null) : r = Wl(s, o), null !== e ? n = Wl(e, n) : (n = Yl(n, a, i, null)).flags |= 2, n.return = t, r.return = t, r.sibling = n, t.child = r, n
				}

				function to(e, t) {
					e.lanes |= t;
					var r = e.alternate;
					null !== r && (r.lanes |= t), ia(e.return, t)
				}

				function ro(e, t, r, n, i, a) {
					var s = e.memoizedState;
					null === s ? e.memoizedState = {
						isBackwards: t,
						rendering: null,
						renderingStartTime: 0,
						last: n,
						tail: r,
						tailMode: i,
						lastEffect: a
					} : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = n, s.tail = r, s.tailMode = i, s.lastEffect = a)
				}

				function no(e, t, r) {
					var n = t.pendingProps,
						i = n.revealOrder,
						a = n.tail;
					if (Ns(e, t, n.children, r), 0 != (2 & (n = Na.current))) n = 1 & n | 2, t.flags |= 64;
					else {
						if (null !== e && 0 != (64 & e.flags)) e: for (e = t.child; null !== e;) {
							if (13 === e.tag) null !== e.memoizedState && to(e, r);
							else if (19 === e.tag) to(e, r);
							else if (null !== e.child) {
								e.child.return = e, e = e.child;
								continue
							}
							if (e === t) break e;
							for (; null === e.sibling;) {
								if (null === e.return || e.return === t) break e;
								e = e.return
							}
							e.sibling.return = e.return, e = e.sibling
						}
						n &= 1
					}
					if (di(Na, n), 0 == (2 & t.mode)) t.memoizedState = null;
					else switch (i) {
						case "forwards":
							for (r = t.child, i = null; null !== r;) null !== (e = r.alternate) && null === Ua(e) && (i = r), r = r.sibling;
							null === (r = i) ? (i = t.child, t.child = null) : (i = r.sibling, r.sibling = null), ro(t, !1, i, r, a, t.lastEffect);
							break;
						case "backwards":
							for (r = null, i = t.child, t.child = null; null !== i;) {
								if (null !== (e = i.alternate) && null === Ua(e)) {
									t.child = i;
									break
								}
								e = i.sibling, i.sibling = r, r = i, i = e
							}
							ro(t, !0, r, null, a, t.lastEffect);
							break;
						case "together":
							ro(t, !1, null, null, void 0, t.lastEffect);
							break;
						default:
							t.memoizedState = null
					}
					return t.child
				}

				function io(e, t, r) {
					if (null !== e && (t.dependencies = e.dependencies), Go |= t.lanes, 0 != (r & t.childLanes)) {
						if (null !== e && t.child !== e.child) throw Error(s(153));
						if (null !== t.child) {
							for (r = Wl(e = t.child, e.pendingProps), t.child = r, r.return = t; null !== e.sibling;) e = e.sibling, (r = r.sibling = Wl(e, e.pendingProps)).return = t;
							r.sibling = null
						}
						return t.child
					}
					return null
				}

				function ao(e, t) {
					if (!Ga) switch (e.tailMode) {
						case "hidden":
							t = e.tail;
							for (var r = null; null !== t;) null !== t.alternate && (r = t), t = t.sibling;
							null === r ? e.tail = null : r.sibling = null;
							break;
						case "collapsed":
							r = e.tail;
							for (var n = null; null !== r;) null !== r.alternate && (n = r), r = r.sibling;
							null === n ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : n.sibling = null
					}
				}

				function so(e, t, r) {
					var n = t.pendingProps;
					switch (t.tag) {
						case 2:
						case 16:
						case 15:
						case 0:
						case 11:
						case 7:
						case 8:
						case 12:
						case 9:
						case 14:
							return null;
						case 1:
						case 17:
							return mi(t.type) && yi(), null;
						case 3:
							return Pa(), ci(pi), ci(hi), Xa(), (n = t.stateNode).pendingContext && (n.context = n.pendingContext, n.pendingContext = null), null !== e && null !== e.child || (Wa(t) ? t.flags |= 4 : n.hydrate || (t.flags |= 256)), null;
						case 5:
							Ma(t);
							var a = Ia(xa.current);
							if (r = t.type, null !== e && null != t.stateNode) Ys(e, t, r, n), e.ref !== t.ref && (t.flags |= 128);
							else {
								if (!n) {
									if (null === t.stateNode) throw Error(s(166));
									return null
								}
								if (e = Ia(_a.current), Wa(t)) {
									n = t.stateNode, r = t.type;
									var o = t.memoizedProps;
									switch (n[Jn] = t, n[Zn] = o, r) {
										case "dialog":
											Rn("cancel", n), Rn("close", n);
											break;
										case "iframe":
										case "object":
										case "embed":
											Rn("load", n);
											break;
										case "video":
										case "audio":
											for (e = 0; e < An.length; e++) Rn(An[e], n);
											break;
										case "source":
											Rn("error", n);
											break;
										case "img":
										case "image":
										case "link":
											Rn("error", n), Rn("load", n);
											break;
										case "details":
											Rn("toggle", n);
											break;
										case "input":
											ee(n, o), Rn("invalid", n);
											break;
										case "select":
											n._wrapperState = {
												wasMultiple: !!o.multiple
											}, Rn("invalid", n);
											break;
										case "textarea":
											le(n, o), Rn("invalid", n)
									}
									for (var u in we(r, o), e = null, o) o.hasOwnProperty(u) && (a = o[u], "children" === u ? "string" == typeof a ? n.textContent !== a && (e = ["children", a]) : "number" == typeof a && n.textContent !== "" + a && (e = ["children", "" + a]) : l.hasOwnProperty(u) && null != a && "onScroll" === u && Rn("scroll", n));
									switch (r) {
										case "input":
											Q(n), ne(n, o, !0);
											break;
										case "textarea":
											Q(n), ce(n);
											break;
										case "select":
										case "option":
											break;
										default:
											"function" == typeof o.onClick && (n.onclick = jn)
									}
									n = e, t.updateQueue = n, null !== n && (t.flags |= 4)
								} else {
									switch (u = 9 === a.nodeType ? a : a.ownerDocument, e === de && (e = he(r)), e === de ? "script" === r ? ((e = u.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" == typeof n.is ? e = u.createElement(r, {
											is: n.is
										}) : (e = u.createElement(r), "select" === r && (u = e, n.multiple ? u.multiple = !0 : n.size && (u.size = n.size))) : e = u.createElementNS(e, r), e[Jn] = t, e[Zn] = n, qs(e, t), t.stateNode = e, u = Le(r, n), r) {
										case "dialog":
											Rn("cancel", e), Rn("close", e), a = n;
											break;
										case "iframe":
										case "object":
										case "embed":
											Rn("load", e), a = n;
											break;
										case "video":
										case "audio":
											for (a = 0; a < An.length; a++) Rn(An[a], e);
											a = n;
											break;
										case "source":
											Rn("error", e), a = n;
											break;
										case "img":
										case "image":
										case "link":
											Rn("error", e), Rn("load", e), a = n;
											break;
										case "details":
											Rn("toggle", e), a = n;
											break;
										case "input":
											ee(e, n), a = Z(e, n), Rn("invalid", e);
											break;
										case "option":
											a = ae(e, n);
											break;
										case "select":
											e._wrapperState = {
												wasMultiple: !!n.multiple
											}, a = i({}, n, {
												value: void 0
											}), Rn("invalid", e);
											break;
										case "textarea":
											le(e, n), a = oe(e, n), Rn("invalid", e);
											break;
										default:
											a = n
									}
									we(r, a);
									var c = a;
									for (o in c)
										if (c.hasOwnProperty(o)) {
											var d = c[o];
											"style" === o ? Se(e, d) : "dangerouslySetInnerHTML" === o ? null != (d = d ? d.__html : void 0) && me(e, d) : "children" === o ? "string" == typeof d ? ("textarea" !== r || "" !== d) && ye(e, d) : "number" == typeof d && ye(e, "" + d) : "suppressContentEditableWarning" !== o && "suppressHydrationWarning" !== o && "autoFocus" !== o && (l.hasOwnProperty(o) ? null != d && "onScroll" === o && Rn("scroll", e) : null != d && b(e, o, d, u))
										} switch (r) {
										case "input":
											Q(e), ne(e, n, !1);
											break;
										case "textarea":
											Q(e), ce(e);
											break;
										case "option":
											null != n.value && e.setAttribute("value", "" + Y(n.value));
											break;
										case "select":
											e.multiple = !!n.multiple, null != (o = n.value) ? se(e, !!n.multiple, o, !1) : null != n.defaultValue && se(e, !!n.multiple, n.defaultValue, !0);
											break;
										default:
											"function" == typeof a.onClick && (e.onclick = jn)
									}
									Kn(r, n) && (t.flags |= 4)
								}
								null !== t.ref && (t.flags |= 128)
							}
							return null;
						case 6:
							if (e && null != t.stateNode) Xs(0, t, e.memoizedProps, n);
							else {
								if ("string" != typeof n && null === t.stateNode) throw Error(s(166));
								r = Ia(xa.current), Ia(_a.current), Wa(t) ? (n = t.stateNode, r = t.memoizedProps, n[Jn] = t, n.nodeValue !== r && (t.flags |= 4)) : ((n = (9 === r.nodeType ? r : r.ownerDocument).createTextNode(n))[Jn] = t, t.stateNode = n)
							}
							return null;
						case 13:
							return ci(Na), n = t.memoizedState, 0 != (64 & t.flags) ? (t.lanes = r, t) : (n = null !== n, r = !1, null === e ? void 0 !== t.memoizedProps.fallback && Wa(t) : r = null !== e.memoizedState, n && !r && 0 != (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 != (1 & Na.current) ? 0 === Uo && (Uo = 3) : (0 !== Uo && 3 !== Uo || (Uo = 4), null === Oo || 0 == (134217727 & Go) && 0 == (134217727 & Ho) || yl(Oo, Fo))), (n || r) && (t.flags |= 4), null);
						case 4:
							return Pa(), null === e && In(t.stateNode.containerInfo), null;
						case 10:
							return na(t), null;
						case 19:
							if (ci(Na), null === (n = t.memoizedState)) return null;
							if (o = 0 != (64 & t.flags), null === (u = n.rendering))
								if (o) ao(n, !1);
								else {
									if (0 !== Uo || null !== e && 0 != (64 & e.flags))
										for (e = t.child; null !== e;) {
											if (null !== (u = Ua(e))) {
												for (t.flags |= 64, ao(n, !1), null !== (o = u.updateQueue) && (t.updateQueue = o, t.flags |= 4), null === n.lastEffect && (t.firstEffect = null), t.lastEffect = n.lastEffect, n = r, r = t.child; null !== r;) e = n, (o = r).flags &= 2, o.nextEffect = null, o.firstEffect = null, o.lastEffect = null, null === (u = o.alternate) ? (o.childLanes = 0, o.lanes = e, o.child = null, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = null === e ? null : {
													lanes: e.lanes,
													firstContext: e.firstContext
												}), r = r.sibling;
												return di(Na, 1 & Na.current | 2), t.child
											}
											e = e.sibling
										}
									null !== n.tail && Ki() > Wo && (t.flags |= 64, o = !0, ao(n, !1), t.lanes = 33554432)
								}
							else {
								if (!o)
									if (null !== (e = Ua(u))) {
										if (t.flags |= 64, o = !0, null !== (r = e.updateQueue) && (t.updateQueue = r, t.flags |= 4), ao(n, !0), null === n.tail && "hidden" === n.tailMode && !u.alternate && !Ga) return null !== (t = t.lastEffect = n.lastEffect) && (t.nextEffect = null), null
									} else 2 * Ki() - n.renderingStartTime > Wo && 1073741824 !== r && (t.flags |= 64, o = !0, ao(n, !1), t.lanes = 33554432);
								n.isBackwards ? (u.sibling = t.child, t.child = u) : (null !== (r = n.last) ? r.sibling = u : t.child = u, n.last = u)
							}
							return null !== n.tail ? (r = n.tail, n.rendering = r, n.tail = r.sibling, n.lastEffect = t.lastEffect, n.renderingStartTime = Ki(), r.sibling = null, t = Na.current, di(Na, o ? 1 & t | 2 : 1 & t), r) : null;
						case 23:
						case 24:
							return kl(), null !== e && null !== e.memoizedState != (null !== t.memoizedState) && "unstable-defer-without-hiding" !== n.mode && (t.flags |= 4), null
					}
					throw Error(s(156, t.tag))
				}

				function oo(e) {
					switch (e.tag) {
						case 1:
							mi(e.type) && yi();
							var t = e.flags;
							return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
						case 3:
							if (Pa(), ci(pi), ci(hi), Xa(), 0 != (64 & (t = e.flags))) throw Error(s(285));
							return e.flags = -4097 & t | 64, e;
						case 5:
							return Ma(e), null;
						case 13:
							return ci(Na), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
						case 19:
							return ci(Na), null;
						case 4:
							return Pa(), null;
						case 10:
							return na(e), null;
						case 23:
						case 24:
							return kl(), null;
						default:
							return null
					}
				}

				function lo(e, t) {
					try {
						var r = "",
							n = t;
						do {
							r += W(n), n = n.return
						} while (n);
						var i = r
					} catch (e) {
						i = "\nError generating stack: " + e.message + "\n" + e.stack
					}
					return {
						value: e,
						source: t,
						stack: i
					}
				}

				function uo(e, t) {
					try {
						console.error(t.value)
					} catch (e) {
						setTimeout((function() {
							throw e
						}))
					}
				}
				qs = function(e, t) {
					for (var r = t.child; null !== r;) {
						if (5 === r.tag || 6 === r.tag) e.appendChild(r.stateNode);
						else if (4 !== r.tag && null !== r.child) {
							r.child.return = r, r = r.child;
							continue
						}
						if (r === t) break;
						for (; null === r.sibling;) {
							if (null === r.return || r.return === t) return;
							r = r.return
						}
						r.sibling.return = r.return, r = r.sibling
					}
				}, Ys = function(e, t, r, n) {
					var a = e.memoizedProps;
					if (a !== n) {
						e = t.stateNode, Ia(_a.current);
						var s, o = null;
						switch (r) {
							case "input":
								a = Z(e, a), n = Z(e, n), o = [];
								break;
							case "option":
								a = ae(e, a), n = ae(e, n), o = [];
								break;
							case "select":
								a = i({}, a, {
									value: void 0
								}), n = i({}, n, {
									value: void 0
								}), o = [];
								break;
							case "textarea":
								a = oe(e, a), n = oe(e, n), o = [];
								break;
							default:
								"function" != typeof a.onClick && "function" == typeof n.onClick && (e.onclick = jn)
						}
						for (d in we(r, n), r = null, a)
							if (!n.hasOwnProperty(d) && a.hasOwnProperty(d) && null != a[d])
								if ("style" === d) {
									var u = a[d];
									for (s in u) u.hasOwnProperty(s) && (r || (r = {}), r[s] = "")
								} else "dangerouslySetInnerHTML" !== d && "children" !== d && "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && "autoFocus" !== d && (l.hasOwnProperty(d) ? o || (o = []) : (o = o || []).push(d, null));
						for (d in n) {
							var c = n[d];
							if (u = null != a ? a[d] : void 0, n.hasOwnProperty(d) && c !== u && (null != c || null != u))
								if ("style" === d)
									if (u) {
										for (s in u) !u.hasOwnProperty(s) || c && c.hasOwnProperty(s) || (r || (r = {}), r[s] = "");
										for (s in c) c.hasOwnProperty(s) && u[s] !== c[s] && (r || (r = {}), r[s] = c[s])
									} else r || (o || (o = []), o.push(d, r)), r = c;
							else "dangerouslySetInnerHTML" === d ? (c = c ? c.__html : void 0, u = u ? u.__html : void 0, null != c && u !== c && (o = o || []).push(d, c)) : "children" === d ? "string" != typeof c && "number" != typeof c || (o = o || []).push(d, "" + c) : "suppressContentEditableWarning" !== d && "suppressHydrationWarning" !== d && (l.hasOwnProperty(d) ? (null != c && "onScroll" === d && Rn("scroll", e), o || u === c || (o = [])) : "object" == typeof c && null !== c && c.$$typeof === F ? c.toString() : (o = o || []).push(d, c))
						}
						r && (o = o || []).push("style", r);
						var d = o;
						(t.updateQueue = d) && (t.flags |= 4)
					}
				}, Xs = function(e, t, r, n) {
					r !== n && (t.flags |= 4)
				};
				var co = "function" == typeof WeakMap ? WeakMap : Map;

				function fo(e, t, r) {
					(r = ca(-1, r)).tag = 3, r.payload = {
						element: null
					};
					var n = t.value;
					return r.callback = function() {
						Qo || (Qo = !0, $o = n), uo(0, t)
					}, r
				}

				function ho(e, t, r) {
					(r = ca(-1, r)).tag = 3;
					var n = e.type.getDerivedStateFromError;
					if ("function" == typeof n) {
						var i = t.value;
						r.payload = function() {
							return uo(0, t), n(i)
						}
					}
					var a = e.stateNode;
					return null !== a && "function" == typeof a.componentDidCatch && (r.callback = function() {
						"function" != typeof n && (null === Jo ? Jo = new Set([this]) : Jo.add(this), uo(0, t));
						var e = t.stack;
						this.componentDidCatch(t.value, {
							componentStack: null !== e ? e : ""
						})
					}), r
				}
				var po = "function" == typeof WeakSet ? WeakSet : Set;

				function go(e) {
					var t = e.ref;
					if (null !== t)
						if ("function" == typeof t) try {
							t(null)
						} catch (t) {
							jl(e, t)
						} else t.current = null
				}

				function vo(e, t) {
					switch (t.tag) {
						case 0:
						case 11:
						case 15:
						case 22:
						case 5:
						case 6:
						case 4:
						case 17:
							return;
						case 1:
							if (256 & t.flags && null !== e) {
								var r = e.memoizedProps,
									n = e.memoizedState;
								t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? r : $i(t.type, r), n), e.__reactInternalSnapshotBeforeUpdate = t
							}
							return;
						case 3:
							return void(256 & t.flags && qn(t.stateNode.containerInfo))
					}
					throw Error(s(163))
				}

				function mo(e, t, r) {
					switch (r.tag) {
						case 0:
						case 11:
						case 15:
						case 22:
							if (null !== (t = null !== (t = r.updateQueue) ? t.lastEffect : null)) {
								e = t = t.next;
								do {
									if (3 == (3 & e.tag)) {
										var n = e.create;
										e.destroy = n()
									}
									e = e.next
								} while (e !== t)
							}
							if (null !== (t = null !== (t = r.updateQueue) ? t.lastEffect : null)) {
								e = t = t.next;
								do {
									var i = e;
									n = i.next, 0 != (4 & (i = i.tag)) && 0 != (1 & i) && (Nl(r, e), Ml(r, e)), e = n
								} while (e !== t)
							}
							return;
						case 1:
							return e = r.stateNode, 4 & r.flags && (null === t ? e.componentDidMount() : (n = r.elementType === r.type ? t.memoizedProps : $i(r.type, t.memoizedProps), e.componentDidUpdate(n, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = r.updateQueue) && pa(r, t, e));
						case 3:
							if (null !== (t = r.updateQueue)) {
								if (e = null, null !== r.child) switch (r.child.tag) {
									case 5:
									case 1:
										e = r.child.stateNode
								}
								pa(r, t, e)
							}
							return;
						case 5:
							return e = r.stateNode, void(null === t && 4 & r.flags && Kn(r.type, r.memoizedProps) && e.focus());
						case 6:
						case 4:
						case 12:
						case 19:
						case 17:
						case 20:
						case 21:
						case 23:
						case 24:
							return;
						case 13:
							return void(null === r.memoizedState && (r = r.alternate, null !== r && (r = r.memoizedState, null !== r && (r = r.dehydrated, null !== r && St(r)))))
					}
					throw Error(s(163))
				}

				function yo(e, t) {
					for (var r = e;;) {
						if (5 === r.tag) {
							var n = r.stateNode;
							if (t) "function" == typeof(n = n.style).setProperty ? n.setProperty("display", "none", "important") : n.display = "none";
							else {
								n = r.stateNode;
								var i = r.memoizedProps.style;
								i = null != i && i.hasOwnProperty("display") ? i.display : null, n.style.display = Te("display", i)
							}
						} else if (6 === r.tag) r.stateNode.nodeValue = t ? "" : r.memoizedProps;
						else if ((23 !== r.tag && 24 !== r.tag || null === r.memoizedState || r === e) && null !== r.child) {
							r.child.return = r, r = r.child;
							continue
						}
						if (r === e) break;
						for (; null === r.sibling;) {
							if (null === r.return || r.return === e) return;
							r = r.return
						}
						r.sibling.return = r.return, r = r.sibling
					}
				}

				function Eo(e, t) {
					if (wi && "function" == typeof wi.onCommitFiberUnmount) try {
						wi.onCommitFiberUnmount(ki, t)
					} catch (e) {}
					switch (t.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
						case 22:
							if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
								var r = e = e.next;
								do {
									var n = r,
										i = n.destroy;
									if (n = n.tag, void 0 !== i)
										if (0 != (4 & n)) Nl(t, r);
										else {
											n = t;
											try {
												i()
											} catch (e) {
												jl(n, e)
											}
										} r = r.next
								} while (r !== e)
							}
							break;
						case 1:
							if (go(t), "function" == typeof(e = t.stateNode).componentWillUnmount) try {
								e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
							} catch (e) {
								jl(t, e)
							}
							break;
						case 5:
							go(t);
							break;
						case 4:
							Lo(e, t)
					}
				}

				function bo(e) {
					e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
				}

				function To(e) {
					return 5 === e.tag || 3 === e.tag || 4 === e.tag
				}

				function So(e) {
					e: {
						for (var t = e.return; null !== t;) {
							if (To(t)) break e;
							t = t.return
						}
						throw Error(s(160))
					}
					var r = t;
					switch (t = r.stateNode, r.tag) {
						case 5:
							var n = !1;
							break;
						case 3:
						case 4:
							t = t.containerInfo, n = !0;
							break;
						default:
							throw Error(s(161))
					}
					16 & r.flags && (ye(t, ""), r.flags &= -17);e: t: for (r = e;;) {
						for (; null === r.sibling;) {
							if (null === r.return || To(r.return)) {
								r = null;
								break e
							}
							r = r.return
						}
						for (r.sibling.return = r.return, r = r.sibling; 5 !== r.tag && 6 !== r.tag && 18 !== r.tag;) {
							if (2 & r.flags) continue t;
							if (null === r.child || 4 === r.tag) continue t;
							r.child.return = r, r = r.child
						}
						if (!(2 & r.flags)) {
							r = r.stateNode;
							break e
						}
					}
					n ? ko(e, r, t) : wo(e, r, t)
				}

				function ko(e, t, r) {
					var n = e.tag,
						i = 5 === n || 6 === n;
					if (i) e = i ? e.stateNode : e.stateNode.instance, t ? 8 === r.nodeType ? r.parentNode.insertBefore(e, t) : r.insertBefore(e, t) : (8 === r.nodeType ? (t = r.parentNode).insertBefore(e, r) : (t = r).appendChild(e), null != (r = r._reactRootContainer) || null !== t.onclick || (t.onclick = jn));
					else if (4 !== n && null !== (e = e.child))
						for (ko(e, t, r), e = e.sibling; null !== e;) ko(e, t, r), e = e.sibling
				}

				function wo(e, t, r) {
					var n = e.tag,
						i = 5 === n || 6 === n;
					if (i) e = i ? e.stateNode : e.stateNode.instance, t ? r.insertBefore(e, t) : r.appendChild(e);
					else if (4 !== n && null !== (e = e.child))
						for (wo(e, t, r), e = e.sibling; null !== e;) wo(e, t, r), e = e.sibling
				}

				function Lo(e, t) {
					for (var r, n, i = t, a = !1;;) {
						if (!a) {
							a = i.return;
							e: for (;;) {
								if (null === a) throw Error(s(160));
								switch (r = a.stateNode, a.tag) {
									case 5:
										n = !1;
										break e;
									case 3:
									case 4:
										r = r.containerInfo, n = !0;
										break e
								}
								a = a.return
							}
							a = !0
						}
						if (5 === i.tag || 6 === i.tag) {
							e: for (var o = e, l = i, u = l;;)
								if (Eo(o, u), null !== u.child && 4 !== u.tag) u.child.return = u, u = u.child;
								else {
									if (u === l) break e;
									for (; null === u.sibling;) {
										if (null === u.return || u.return === l) break e;
										u = u.return
									}
									u.sibling.return = u.return, u = u.sibling
								}n ? (o = r, l = i.stateNode, 8 === o.nodeType ? o.parentNode.removeChild(l) : o.removeChild(l)) : r.removeChild(i.stateNode)
						}
						else if (4 === i.tag) {
							if (null !== i.child) {
								r = i.stateNode.containerInfo, n = !0, i.child.return = i, i = i.child;
								continue
							}
						} else if (Eo(e, i), null !== i.child) {
							i.child.return = i, i = i.child;
							continue
						}
						if (i === t) break;
						for (; null === i.sibling;) {
							if (null === i.return || i.return === t) return;
							4 === (i = i.return).tag && (a = !1)
						}
						i.sibling.return = i.return, i = i.sibling
					}
				}

				function Ao(e, t) {
					switch (t.tag) {
						case 0:
						case 11:
						case 14:
						case 15:
						case 22:
							var r = t.updateQueue;
							if (null !== (r = null !== r ? r.lastEffect : null)) {
								var n = r = r.next;
								do {
									3 == (3 & n.tag) && (e = n.destroy, n.destroy = void 0, void 0 !== e && e()), n = n.next
								} while (n !== r)
							}
							return;
						case 1:
						case 12:
						case 17:
							return;
						case 5:
							if (null != (r = t.stateNode)) {
								n = t.memoizedProps;
								var i = null !== e ? e.memoizedProps : n;
								e = t.type;
								var a = t.updateQueue;
								if (t.updateQueue = null, null !== a) {
									for (r[Zn] = n, "input" === e && "radio" === n.type && null != n.name && te(r, n), Le(e, i), t = Le(e, n), i = 0; i < a.length; i += 2) {
										var o = a[i],
											l = a[i + 1];
										"style" === o ? Se(r, l) : "dangerouslySetInnerHTML" === o ? me(r, l) : "children" === o ? ye(r, l) : b(r, o, l, t)
									}
									switch (e) {
										case "input":
											re(r, n);
											break;
										case "textarea":
											ue(r, n);
											break;
										case "select":
											e = r._wrapperState.wasMultiple, r._wrapperState.wasMultiple = !!n.multiple, null != (a = n.value) ? se(r, !!n.multiple, a, !1) : e !== !!n.multiple && (null != n.defaultValue ? se(r, !!n.multiple, n.defaultValue, !0) : se(r, !!n.multiple, n.multiple ? [] : "", !1))
									}
								}
							}
							return;
						case 6:
							if (null === t.stateNode) throw Error(s(162));
							return void(t.stateNode.nodeValue = t.memoizedProps);
						case 3:
							return void((r = t.stateNode).hydrate && (r.hydrate = !1, St(r.containerInfo)));
						case 13:
							return null !== t.memoizedState && (zo = Ki(), yo(t.child, !0)), void Do(t);
						case 19:
							return void Do(t);
						case 23:
						case 24:
							return void yo(t, null !== t.memoizedState)
					}
					throw Error(s(163))
				}

				function Do(e) {
					var t = e.updateQueue;
					if (null !== t) {
						e.updateQueue = null;
						var r = e.stateNode;
						null === r && (r = e.stateNode = new po), t.forEach((function(t) {
							var n = Hl.bind(null, e, t);
							r.has(t) || (r.add(t), t.then(n, n))
						}))
					}
				}

				function Co(e, t) {
					return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
				}
				var _o = Math.ceil,
					Ro = T.ReactCurrentDispatcher,
					xo = T.ReactCurrentOwner,
					Io = 0,
					Oo = null,
					Po = null,
					Fo = 0,
					Mo = 0,
					No = ui(0),
					Uo = 0,
					Bo = null,
					jo = 0,
					Go = 0,
					Ho = 0,
					Ko = 0,
					Vo = null,
					zo = 0,
					Wo = 1 / 0;

				function qo() {
					Wo = Ki() + 500
				}
				var Yo, Xo = null,
					Qo = !1,
					$o = null,
					Jo = null,
					Zo = !1,
					el = null,
					tl = 90,
					rl = [],
					nl = [],
					il = null,
					al = 0,
					sl = null,
					ol = -1,
					ll = 0,
					ul = 0,
					cl = null,
					dl = !1;

				function fl() {
					return 0 != (48 & Io) ? Ki() : -1 !== ol ? ol : ol = Ki()
				}

				function hl(e) {
					if (0 == (2 & (e = e.mode))) return 1;
					if (0 == (4 & e)) return 99 === Vi() ? 1 : 2;
					if (0 === ll && (ll = jo), 0 !== Qi.transition) {
						0 !== ul && (ul = null !== Vo ? Vo.pendingLanes : 0), e = ll;
						var t = 4186112 & ~ul;
						return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
					}
					return e = Vi(), 0 != (4 & Io) && 98 === e ? e = jt(12, ll) : e = jt(e = function(e) {
						switch (e) {
							case 99:
								return 15;
							case 98:
								return 10;
							case 97:
							case 96:
								return 8;
							case 95:
								return 2;
							default:
								return 0
						}
					}(e), ll), e
				}

				function pl(e, t, r) {
					if (50 < al) throw al = 0, sl = null, Error(s(185));
					if (null === (e = gl(e, t))) return null;
					Kt(e, t, r), e === Oo && (Ho |= t, 4 === Uo && yl(e, Fo));
					var n = Vi();
					1 === t ? 0 != (8 & Io) && 0 == (48 & Io) ? El(e) : (vl(e, r), 0 === Io && (qo(), Yi())) : (0 == (4 & Io) || 98 !== n && 99 !== n || (null === il ? il = new Set([e]) : il.add(e)), vl(e, r)), Vo = e
				}

				function gl(e, t) {
					e.lanes |= t;
					var r = e.alternate;
					for (null !== r && (r.lanes |= t), r = e, e = e.return; null !== e;) e.childLanes |= t, null !== (r = e.alternate) && (r.childLanes |= t), r = e, e = e.return;
					return 3 === r.tag ? r.stateNode : null
				}

				function vl(e, t) {
					for (var r = e.callbackNode, n = e.suspendedLanes, i = e.pingedLanes, a = e.expirationTimes, o = e.pendingLanes; 0 < o;) {
						var l = 31 - Vt(o),
							u = 1 << l,
							c = a[l];
						if (-1 === c) {
							if (0 == (u & n) || 0 != (u & i)) {
								c = t, Nt(u);
								var d = Mt;
								a[l] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1
							}
						} else c <= t && (e.expiredLanes |= u);
						o &= ~u
					}
					if (n = Ut(e, e === Oo ? Fo : 0), t = Mt, 0 === n) null !== r && (r !== Ni && Di(r), e.callbackNode = null, e.callbackPriority = 0);
					else {
						if (null !== r) {
							if (e.callbackPriority === t) return;
							r !== Ni && Di(r)
						}
						15 === t ? (r = El.bind(null, e), null === Bi ? (Bi = [r], ji = Ai(Ii, Xi)) : Bi.push(r), r = Ni) : 14 === t ? r = qi(99, El.bind(null, e)) : (r = function(e) {
							switch (e) {
								case 15:
								case 14:
									return 99;
								case 13:
								case 12:
								case 11:
								case 10:
									return 98;
								case 9:
								case 8:
								case 7:
								case 6:
								case 4:
								case 5:
									return 97;
								case 3:
								case 2:
								case 1:
									return 95;
								case 0:
									return 90;
								default:
									throw Error(s(358, e))
							}
						}(t), r = qi(r, ml.bind(null, e))), e.callbackPriority = t, e.callbackNode = r
					}
				}

				function ml(e) {
					if (ol = -1, ul = ll = 0, 0 != (48 & Io)) throw Error(s(327));
					var t = e.callbackNode;
					if (Fl() && e.callbackNode !== t) return null;
					var r = Ut(e, e === Oo ? Fo : 0);
					if (0 === r) return null;
					var n = r,
						i = Io;
					Io |= 16;
					var a = Al();
					for (Oo === e && Fo === n || (qo(), wl(e, n));;) try {
						_l();
						break
					} catch (t) {
						Ll(e, t)
					}
					if (ra(), Ro.current = a, Io = i, null !== Po ? n = 0 : (Oo = null, Fo = 0, n = Uo), 0 != (jo & Ho)) wl(e, 0);
					else if (0 !== n) {
						if (2 === n && (Io |= 64, e.hydrate && (e.hydrate = !1, qn(e.containerInfo)), 0 !== (r = Bt(e)) && (n = Dl(e, r))), 1 === n) throw t = Bo, wl(e, 0), yl(e, r), vl(e, Ki()), t;
						switch (e.finishedWork = e.current.alternate, e.finishedLanes = r, n) {
							case 0:
							case 1:
								throw Error(s(345));
							case 2:
							case 5:
								Il(e);
								break;
							case 3:
								if (yl(e, r), (62914560 & r) === r && 10 < (n = zo + 500 - Ki())) {
									if (0 !== Ut(e, 0)) break;
									if (((i = e.suspendedLanes) & r) !== r) {
										fl(), e.pingedLanes |= e.suspendedLanes & i;
										break
									}
									e.timeoutHandle = zn(Il.bind(null, e), n);
									break
								}
								Il(e);
								break;
							case 4:
								if (yl(e, r), (4186112 & r) === r) break;
								for (n = e.eventTimes, i = -1; 0 < r;) {
									var o = 31 - Vt(r);
									a = 1 << o, (o = n[o]) > i && (i = o), r &= ~a
								}
								if (r = i, 10 < (r = (120 > (r = Ki() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * _o(r / 1960)) - r)) {
									e.timeoutHandle = zn(Il.bind(null, e), r);
									break
								}
								Il(e);
								break;
							default:
								throw Error(s(329))
						}
					}
					return vl(e, Ki()), e.callbackNode === t ? ml.bind(null, e) : null
				}

				function yl(e, t) {
					for (t &= ~Ko, t &= ~Ho, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
						var r = 31 - Vt(t),
							n = 1 << r;
						e[r] = -1, t &= ~n
					}
				}

				function El(e) {
					if (0 != (48 & Io)) throw Error(s(327));
					if (Fl(), e === Oo && 0 != (e.expiredLanes & Fo)) {
						var t = Fo,
							r = Dl(e, t);
						0 != (jo & Ho) && (r = Dl(e, t = Ut(e, t)))
					} else r = Dl(e, t = Ut(e, 0));
					if (0 !== e.tag && 2 === r && (Io |= 64, e.hydrate && (e.hydrate = !1, qn(e.containerInfo)), 0 !== (t = Bt(e)) && (r = Dl(e, t))), 1 === r) throw r = Bo, wl(e, 0), yl(e, t), vl(e, Ki()), r;
					return e.finishedWork = e.current.alternate, e.finishedLanes = t, Il(e), vl(e, Ki()), null
				}

				function bl(e, t) {
					var r = Io;
					Io |= 1;
					try {
						return e(t)
					} finally {
						0 === (Io = r) && (qo(), Yi())
					}
				}

				function Tl(e, t) {
					var r = Io;
					Io &= -2, Io |= 8;
					try {
						return e(t)
					} finally {
						0 === (Io = r) && (qo(), Yi())
					}
				}

				function Sl(e, t) {
					di(No, Mo), Mo |= t, jo |= t
				}

				function kl() {
					Mo = No.current, ci(No)
				}

				function wl(e, t) {
					e.finishedWork = null, e.finishedLanes = 0;
					var r = e.timeoutHandle;
					if (-1 !== r && (e.timeoutHandle = -1, Wn(r)), null !== Po)
						for (r = Po.return; null !== r;) {
							var n = r;
							switch (n.tag) {
								case 1:
									null != (n = n.type.childContextTypes) && yi();
									break;
								case 3:
									Pa(), ci(pi), ci(hi), Xa();
									break;
								case 5:
									Ma(n);
									break;
								case 4:
									Pa();
									break;
								case 13:
								case 19:
									ci(Na);
									break;
								case 10:
									na(n);
									break;
								case 23:
								case 24:
									kl()
							}
							r = r.return
						}
					Oo = e, Po = Wl(e.current, null), Fo = Mo = jo = t, Uo = 0, Bo = null, Ko = Ho = Go = 0
				}

				function Ll(e, t) {
					for (;;) {
						var r = Po;
						try {
							if (ra(), Qa.current = xs, rs) {
								for (var n = Za.memoizedState; null !== n;) {
									var i = n.queue;
									null !== i && (i.pending = null), n = n.next
								}
								rs = !1
							}
							if (Ja = 0, ts = es = Za = null, ns = !1, xo.current = null, null === r || null === r.return) {
								Uo = 1, Bo = t, Po = null;
								break
							}
							e: {
								var a = e,
									s = r.return,
									o = r,
									l = t;
								if (t = Fo, o.flags |= 2048, o.firstEffect = o.lastEffect = null, null !== l && "object" == typeof l && "function" == typeof l.then) {
									var u = l;
									if (0 == (2 & o.mode)) {
										var c = o.alternate;
										c ? (o.updateQueue = c.updateQueue, o.memoizedState = c.memoizedState, o.lanes = c.lanes) : (o.updateQueue = null, o.memoizedState = null)
									}
									var d = 0 != (1 & Na.current),
										f = s;
									do {
										var h;
										if (h = 13 === f.tag) {
											var p = f.memoizedState;
											if (null !== p) h = null !== p.dehydrated;
											else {
												var g = f.memoizedProps;
												h = void 0 !== g.fallback && (!0 !== g.unstable_avoidThisFallback || !d)
											}
										}
										if (h) {
											var v = f.updateQueue;
											if (null === v) {
												var m = new Set;
												m.add(u), f.updateQueue = m
											} else v.add(u);
											if (0 == (2 & f.mode)) {
												if (f.flags |= 64, o.flags |= 16384, o.flags &= -2981, 1 === o.tag)
													if (null === o.alternate) o.tag = 17;
													else {
														var y = ca(-1, 1);
														y.tag = 2, da(o, y)
													} o.lanes |= 1;
												break e
											}
											l = void 0, o = t;
											var E = a.pingCache;
											if (null === E ? (E = a.pingCache = new co, l = new Set, E.set(u, l)) : void 0 === (l = E.get(u)) && (l = new Set, E.set(u, l)), !l.has(o)) {
												l.add(o);
												var b = Gl.bind(null, a, u, o);
												u.then(b, b)
											}
											f.flags |= 4096, f.lanes = t;
											break e
										}
										f = f.return
									} while (null !== f);
									l = Error((q(o.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
								}
								5 !== Uo && (Uo = 2),
								l = lo(l, o),
								f = s;do {
									switch (f.tag) {
										case 3:
											a = l, f.flags |= 4096, t &= -t, f.lanes |= t, fa(f, fo(0, a, t));
											break e;
										case 1:
											a = l;
											var T = f.type,
												S = f.stateNode;
											if (0 == (64 & f.flags) && ("function" == typeof T.getDerivedStateFromError || null !== S && "function" == typeof S.componentDidCatch && (null === Jo || !Jo.has(S)))) {
												f.flags |= 4096, t &= -t, f.lanes |= t, fa(f, ho(f, a, t));
												break e
											}
									}
									f = f.return
								} while (null !== f)
							}
							xl(r)
						} catch (e) {
							t = e, Po === r && null !== r && (Po = r = r.return);
							continue
						}
						break
					}
				}

				function Al() {
					var e = Ro.current;
					return Ro.current = xs, null === e ? xs : e
				}

				function Dl(e, t) {
					var r = Io;
					Io |= 16;
					var n = Al();
					for (Oo === e && Fo === t || wl(e, t);;) try {
						Cl();
						break
					} catch (t) {
						Ll(e, t)
					}
					if (ra(), Io = r, Ro.current = n, null !== Po) throw Error(s(261));
					return Oo = null, Fo = 0, Uo
				}

				function Cl() {
					for (; null !== Po;) Rl(Po)
				}

				function _l() {
					for (; null !== Po && !Ci();) Rl(Po)
				}

				function Rl(e) {
					var t = Yo(e.alternate, e, Mo);
					e.memoizedProps = e.pendingProps, null === t ? xl(e) : Po = t, xo.current = null
				}

				function xl(e) {
					var t = e;
					do {
						var r = t.alternate;
						if (e = t.return, 0 == (2048 & t.flags)) {
							if (null !== (r = so(r, t, Mo))) return void(Po = r);
							if (24 !== (r = t).tag && 23 !== r.tag || null === r.memoizedState || 0 != (1073741824 & Mo) || 0 == (4 & r.mode)) {
								for (var n = 0, i = r.child; null !== i;) n |= i.lanes | i.childLanes, i = i.sibling;
								r.childLanes = n
							}
							null !== e && 0 == (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
						} else {
							if (null !== (r = oo(t))) return r.flags &= 2047, void(Po = r);
							null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
						}
						if (null !== (t = t.sibling)) return void(Po = t);
						Po = t = e
					} while (null !== t);
					0 === Uo && (Uo = 5)
				}

				function Il(e) {
					var t = Vi();
					return Wi(99, Ol.bind(null, e, t)), null
				}

				function Ol(e, t) {
					do {
						Fl()
					} while (null !== el);
					if (0 != (48 & Io)) throw Error(s(327));
					var r = e.finishedWork;
					if (null === r) return null;
					if (e.finishedWork = null, e.finishedLanes = 0, r === e.current) throw Error(s(177));
					e.callbackNode = null;
					var n = r.lanes | r.childLanes,
						i = n,
						a = e.pendingLanes & ~i;
					e.pendingLanes = i, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= i, e.mutableReadLanes &= i, e.entangledLanes &= i, i = e.entanglements;
					for (var o = e.eventTimes, l = e.expirationTimes; 0 < a;) {
						var u = 31 - Vt(a),
							c = 1 << u;
						i[u] = 0, o[u] = -1, l[u] = -1, a &= ~c
					}
					if (null !== il && 0 == (24 & n) && il.has(e) && il.delete(e), e === Oo && (Po = Oo = null, Fo = 0), 1 < r.flags ? null !== r.lastEffect ? (r.lastEffect.nextEffect = r, n = r.firstEffect) : n = r : n = r.firstEffect, null !== n) {
						if (i = Io, Io |= 32, xo.current = null, Gn = Xt, mn(o = vn())) {
							if ("selectionStart" in o) l = {
								start: o.selectionStart,
								end: o.selectionEnd
							};
							else e: if (l = (l = o.ownerDocument) && l.defaultView || window, (c = l.getSelection && l.getSelection()) && 0 !== c.rangeCount) {
								l = c.anchorNode, a = c.anchorOffset, u = c.focusNode, c = c.focusOffset;
								try {
									l.nodeType, u.nodeType
								} catch (e) {
									l = null;
									break e
								}
								var d = 0,
									f = -1,
									h = -1,
									p = 0,
									g = 0,
									v = o,
									m = null;
								t: for (;;) {
									for (var y; v !== l || 0 !== a && 3 !== v.nodeType || (f = d + a), v !== u || 0 !== c && 3 !== v.nodeType || (h = d + c), 3 === v.nodeType && (d += v.nodeValue.length), null !== (y = v.firstChild);) m = v, v = y;
									for (;;) {
										if (v === o) break t;
										if (m === l && ++p === a && (f = d), m === u && ++g === c && (h = d), null !== (y = v.nextSibling)) break;
										m = (v = m).parentNode
									}
									v = y
								}
								l = -1 === f || -1 === h ? null : {
									start: f,
									end: h
								}
							} else l = null;
							l = l || {
								start: 0,
								end: 0
							}
						} else l = null;
						Hn = {
							focusedElem: o,
							selectionRange: l
						}, Xt = !1, cl = null, dl = !1, Xo = n;
						do {
							try {
								Pl()
							} catch (e) {
								if (null === Xo) throw Error(s(330));
								jl(Xo, e), Xo = Xo.nextEffect
							}
						} while (null !== Xo);
						cl = null, Xo = n;
						do {
							try {
								for (o = e; null !== Xo;) {
									var E = Xo.flags;
									if (16 & E && ye(Xo.stateNode, ""), 128 & E) {
										var b = Xo.alternate;
										if (null !== b) {
											var T = b.ref;
											null !== T && ("function" == typeof T ? T(null) : T.current = null)
										}
									}
									switch (1038 & E) {
										case 2:
											So(Xo), Xo.flags &= -3;
											break;
										case 6:
											So(Xo), Xo.flags &= -3, Ao(Xo.alternate, Xo);
											break;
										case 1024:
											Xo.flags &= -1025;
											break;
										case 1028:
											Xo.flags &= -1025, Ao(Xo.alternate, Xo);
											break;
										case 4:
											Ao(Xo.alternate, Xo);
											break;
										case 8:
											Lo(o, l = Xo);
											var S = l.alternate;
											bo(l), null !== S && bo(S)
									}
									Xo = Xo.nextEffect
								}
							} catch (e) {
								if (null === Xo) throw Error(s(330));
								jl(Xo, e), Xo = Xo.nextEffect
							}
						} while (null !== Xo);
						if (T = Hn, b = vn(), E = T.focusedElem, o = T.selectionRange, b !== E && E && E.ownerDocument && gn(E.ownerDocument.documentElement, E)) {
							null !== o && mn(E) && (b = o.start, void 0 === (T = o.end) && (T = b), "selectionStart" in E ? (E.selectionStart = b, E.selectionEnd = Math.min(T, E.value.length)) : (T = (b = E.ownerDocument || document) && b.defaultView || window).getSelection && (T = T.getSelection(), l = E.textContent.length, S = Math.min(o.start, l), o = void 0 === o.end ? S : Math.min(o.end, l), !T.extend && S > o && (l = o, o = S, S = l), l = pn(E, S), a = pn(E, o), l && a && (1 !== T.rangeCount || T.anchorNode !== l.node || T.anchorOffset !== l.offset || T.focusNode !== a.node || T.focusOffset !== a.offset) && ((b = b.createRange()).setStart(l.node, l.offset), T.removeAllRanges(), S > o ? (T.addRange(b), T.extend(a.node, a.offset)) : (b.setEnd(a.node, a.offset), T.addRange(b))))), b = [];
							for (T = E; T = T.parentNode;) 1 === T.nodeType && b.push({
								element: T,
								left: T.scrollLeft,
								top: T.scrollTop
							});
							for ("function" == typeof E.focus && E.focus(), E = 0; E < b.length; E++)(T = b[E]).element.scrollLeft = T.left, T.element.scrollTop = T.top
						}
						Xt = !!Gn, Hn = Gn = null, e.current = r, Xo = n;
						do {
							try {
								for (E = e; null !== Xo;) {
									var k = Xo.flags;
									if (36 & k && mo(E, Xo.alternate, Xo), 128 & k) {
										b = void 0;
										var w = Xo.ref;
										if (null !== w) {
											var L = Xo.stateNode;
											Xo.tag, b = L, "function" == typeof w ? w(b) : w.current = b
										}
									}
									Xo = Xo.nextEffect
								}
							} catch (e) {
								if (null === Xo) throw Error(s(330));
								jl(Xo, e), Xo = Xo.nextEffect
							}
						} while (null !== Xo);
						Xo = null, Ui(), Io = i
					} else e.current = r;
					if (Zo) Zo = !1, el = e, tl = t;
					else
						for (Xo = n; null !== Xo;) t = Xo.nextEffect, Xo.nextEffect = null, 8 & Xo.flags && ((k = Xo).sibling = null, k.stateNode = null), Xo = t;
					if (0 === (n = e.pendingLanes) && (Jo = null), 1 === n ? e === sl ? al++ : (al = 0, sl = e) : al = 0, r = r.stateNode, wi && "function" == typeof wi.onCommitFiberRoot) try {
						wi.onCommitFiberRoot(ki, r, void 0, 64 == (64 & r.current.flags))
					} catch (e) {}
					if (vl(e, Ki()), Qo) throw Qo = !1, e = $o, $o = null, e;
					return 0 != (8 & Io) || Yi(), null
				}

				function Pl() {
					for (; null !== Xo;) {
						var e = Xo.alternate;
						dl || null === cl || (0 != (8 & Xo.flags) ? et(Xo, cl) && (dl = !0) : 13 === Xo.tag && Co(e, Xo) && et(Xo, cl) && (dl = !0));
						var t = Xo.flags;
						0 != (256 & t) && vo(e, Xo), 0 == (512 & t) || Zo || (Zo = !0, qi(97, (function() {
							return Fl(), null
						}))), Xo = Xo.nextEffect
					}
				}

				function Fl() {
					if (90 !== tl) {
						var e = 97 < tl ? 97 : tl;
						return tl = 90, Wi(e, Ul)
					}
					return !1
				}

				function Ml(e, t) {
					rl.push(t, e), Zo || (Zo = !0, qi(97, (function() {
						return Fl(), null
					})))
				}

				function Nl(e, t) {
					nl.push(t, e), Zo || (Zo = !0, qi(97, (function() {
						return Fl(), null
					})))
				}

				function Ul() {
					if (null === el) return !1;
					var e = el;
					if (el = null, 0 != (48 & Io)) throw Error(s(331));
					var t = Io;
					Io |= 32;
					var r = nl;
					nl = [];
					for (var n = 0; n < r.length; n += 2) {
						var i = r[n],
							a = r[n + 1],
							o = i.destroy;
						if (i.destroy = void 0, "function" == typeof o) try {
							o()
						} catch (e) {
							if (null === a) throw Error(s(330));
							jl(a, e)
						}
					}
					for (r = rl, rl = [], n = 0; n < r.length; n += 2) {
						i = r[n], a = r[n + 1];
						try {
							var l = i.create;
							i.destroy = l()
						} catch (e) {
							if (null === a) throw Error(s(330));
							jl(a, e)
						}
					}
					for (l = e.current.firstEffect; null !== l;) e = l.nextEffect, l.nextEffect = null, 8 & l.flags && (l.sibling = null, l.stateNode = null), l = e;
					return Io = t, Yi(), !0
				}

				function Bl(e, t, r) {
					da(e, t = fo(0, t = lo(r, t), 1)), t = fl(), null !== (e = gl(e, 1)) && (Kt(e, 1, t), vl(e, t))
				}

				function jl(e, t) {
					if (3 === e.tag) Bl(e, e, t);
					else
						for (var r = e.return; null !== r;) {
							if (3 === r.tag) {
								Bl(r, e, t);
								break
							}
							if (1 === r.tag) {
								var n = r.stateNode;
								if ("function" == typeof r.type.getDerivedStateFromError || "function" == typeof n.componentDidCatch && (null === Jo || !Jo.has(n))) {
									var i = ho(r, e = lo(t, e), 1);
									if (da(r, i), i = fl(), null !== (r = gl(r, 1))) Kt(r, 1, i), vl(r, i);
									else if ("function" == typeof n.componentDidCatch && (null === Jo || !Jo.has(n))) try {
										n.componentDidCatch(t, e)
									} catch (e) {}
									break
								}
							}
							r = r.return
						}
				}

				function Gl(e, t, r) {
					var n = e.pingCache;
					null !== n && n.delete(t), t = fl(), e.pingedLanes |= e.suspendedLanes & r, Oo === e && (Fo & r) === r && (4 === Uo || 3 === Uo && (62914560 & Fo) === Fo && 500 > Ki() - zo ? wl(e, 0) : Ko |= r), vl(e, t)
				}

				function Hl(e, t) {
					var r = e.stateNode;
					null !== r && r.delete(t), 0 === (t = 0) && (0 == (2 & (t = e.mode)) ? t = 1 : 0 == (4 & t) ? t = 99 === Vi() ? 1 : 2 : (0 === ll && (ll = jo), 0 === (t = Gt(62914560 & ~ll)) && (t = 4194304))), r = fl(), null !== (e = gl(e, t)) && (Kt(e, t, r), vl(e, r))
				}

				function Kl(e, t, r, n) {
					this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = n, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
				}

				function Vl(e, t, r, n) {
					return new Kl(e, t, r, n)
				}

				function zl(e) {
					return !(!(e = e.prototype) || !e.isReactComponent)
				}

				function Wl(e, t) {
					var r = e.alternate;
					return null === r ? ((r = Vl(e.tag, t, e.key, e.mode)).elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = t, r.type = e.type, r.flags = 0, r.nextEffect = null, r.firstEffect = null, r.lastEffect = null), r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, t = e.dependencies, r.dependencies = null === t ? null : {
						lanes: t.lanes,
						firstContext: t.firstContext
					}, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r
				}

				function ql(e, t, r, n, i, a) {
					var o = 2;
					if (n = e, "function" == typeof e) zl(e) && (o = 1);
					else if ("string" == typeof e) o = 5;
					else e: switch (e) {
						case w:
							return Yl(r.children, i, a, t);
						case M:
							o = 8, i |= 16;
							break;
						case L:
							o = 8, i |= 1;
							break;
						case A:
							return (e = Vl(12, r, t, 8 | i)).elementType = A, e.type = A, e.lanes = a, e;
						case R:
							return (e = Vl(13, r, t, i)).type = R, e.elementType = R, e.lanes = a, e;
						case x:
							return (e = Vl(19, r, t, i)).elementType = x, e.lanes = a, e;
						case N:
							return Xl(r, i, a, t);
						case U:
							return (e = Vl(24, r, t, i)).elementType = U, e.lanes = a, e;
						default:
							if ("object" == typeof e && null !== e) switch (e.$$typeof) {
								case D:
									o = 10;
									break e;
								case C:
									o = 9;
									break e;
								case _:
									o = 11;
									break e;
								case I:
									o = 14;
									break e;
								case O:
									o = 16, n = null;
									break e;
								case P:
									o = 22;
									break e
							}
							throw Error(s(130, null == e ? e : typeof e, ""))
					}
					return (t = Vl(o, r, t, i)).elementType = e, t.type = n, t.lanes = a, t
				}

				function Yl(e, t, r, n) {
					return (e = Vl(7, e, n, t)).lanes = r, e
				}

				function Xl(e, t, r, n) {
					return (e = Vl(23, e, n, t)).elementType = N, e.lanes = r, e
				}

				function Ql(e, t, r) {
					return (e = Vl(6, e, null, t)).lanes = r, e
				}

				function $l(e, t, r) {
					return (t = Vl(4, null !== e.children ? e.children : [], e.key, t)).lanes = r, t.stateNode = {
						containerInfo: e.containerInfo,
						pendingChildren: null,
						implementation: e.implementation
					}, t
				}

				function Jl(e, t, r) {
					this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = r, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Ht(0), this.expirationTimes = Ht(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ht(0), this.mutableSourceEagerHydrationData = null
				}

				function Zl(e, t, r) {
					var n = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
					return {
						$$typeof: k,
						key: null == n ? null : "" + n,
						children: e,
						containerInfo: t,
						implementation: r
					}
				}

				function eu(e, t, r, n) {
					var i = t.current,
						a = fl(),
						o = hl(i);
					e: if (r) {
						t: {
							if (Qe(r = r._reactInternals) !== r || 1 !== r.tag) throw Error(s(170));
							var l = r;do {
								switch (l.tag) {
									case 3:
										l = l.stateNode.context;
										break t;
									case 1:
										if (mi(l.type)) {
											l = l.stateNode.__reactInternalMemoizedMergedChildContext;
											break t
										}
								}
								l = l.return
							} while (null !== l);
							throw Error(s(171))
						}
						if (1 === r.tag) {
							var u = r.type;
							if (mi(u)) {
								r = bi(r, u, l);
								break e
							}
						}
						r = l
					}
					else r = fi;
					return null === t.context ? t.context = r : t.pendingContext = r, (t = ca(a, o)).payload = {
						element: e
					}, null !== (n = void 0 === n ? null : n) && (t.callback = n), da(i, t), pl(i, o, a), o
				}

				function tu(e) {
					return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
				}

				function ru(e, t) {
					if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
						var r = e.retryLane;
						e.retryLane = 0 !== r && r < t ? r : t
					}
				}

				function nu(e, t) {
					ru(e, t), (e = e.alternate) && ru(e, t)
				}

				function iu(e, t, r) {
					var n = null != r && null != r.hydrationOptions && r.hydrationOptions.mutableSources || null;
					if (r = new Jl(e, t, null != r && !0 === r.hydrate), t = Vl(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), r.current = t, t.stateNode = r, la(t), e[ei] = r.current, In(8 === e.nodeType ? e.parentNode : e), n)
						for (e = 0; e < n.length; e++) {
							var i = (t = n[e])._getVersion;
							i = i(t._source), null == r.mutableSourceEagerHydrationData ? r.mutableSourceEagerHydrationData = [t, i] : r.mutableSourceEagerHydrationData.push(t, i)
						}
					this._internalRoot = r
				}

				function au(e) {
					return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
				}

				function su(e, t, r, n, i) {
					var a = r._reactRootContainer;
					if (a) {
						var s = a._internalRoot;
						if ("function" == typeof i) {
							var o = i;
							i = function() {
								var e = tu(s);
								o.call(e)
							}
						}
						eu(t, s, e, i)
					} else {
						if (a = r._reactRootContainer = function(e, t) {
								if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
									for (var r; r = e.lastChild;) e.removeChild(r);
								return new iu(e, 0, t ? {
									hydrate: !0
								} : void 0)
							}(r, n), s = a._internalRoot, "function" == typeof i) {
							var l = i;
							i = function() {
								var e = tu(s);
								l.call(e)
							}
						}
						Tl((function() {
							eu(t, s, e, i)
						}))
					}
					return tu(s)
				}

				function ou(e, t) {
					var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
					if (!au(t)) throw Error(s(200));
					return Zl(e, t, null, r)
				}
				Yo = function(e, t, r) {
					var n = t.lanes;
					if (null !== e)
						if (e.memoizedProps !== t.pendingProps || pi.current) Ms = !0;
						else {
							if (0 == (r & n)) {
								switch (Ms = !1, t.tag) {
									case 3:
										Ws(t), qa();
										break;
									case 5:
										Fa(t);
										break;
									case 1:
										mi(t.type) && Ti(t);
										break;
									case 4:
										Oa(t, t.stateNode.containerInfo);
										break;
									case 10:
										n = t.memoizedProps.value;
										var i = t.type._context;
										di(Ji, i._currentValue), i._currentValue = n;
										break;
									case 13:
										if (null !== t.memoizedState) return 0 != (r & t.child.childLanes) ? $s(e, t, r) : (di(Na, 1 & Na.current), null !== (t = io(e, t, r)) ? t.sibling : null);
										di(Na, 1 & Na.current);
										break;
									case 19:
										if (n = 0 != (r & t.childLanes), 0 != (64 & e.flags)) {
											if (n) return no(e, t, r);
											t.flags |= 64
										}
										if (null !== (i = t.memoizedState) && (i.rendering = null, i.tail = null, i.lastEffect = null), di(Na, Na.current), n) break;
										return null;
									case 23:
									case 24:
										return t.lanes = 0, Gs(e, t, r)
								}
								return io(e, t, r)
							}
							Ms = 0 != (16384 & e.flags)
						}
					else Ms = !1;
					switch (t.lanes = 0, t.tag) {
						case 2:
							if (n = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = vi(t, hi.current), aa(t, r), i = ss(null, t, n, e, i, r), t.flags |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
								if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, mi(n)) {
									var a = !0;
									Ti(t)
								} else a = !1;
								t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null, la(t);
								var o = n.getDerivedStateFromProps;
								"function" == typeof o && va(t, n, o, e), i.updater = ma, t.stateNode = i, i._reactInternals = t, Ta(t, n, e, r), t = zs(null, t, n, !0, a, r)
							} else t.tag = 0, Ns(null, t, i, r), t = t.child;
							return t;
						case 16:
							i = t.elementType;
							e: {
								switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, i = (a = i._init)(i._payload), t.type = i, a = t.tag = function(e) {
										if ("function" == typeof e) return zl(e) ? 1 : 0;
										if (null != e) {
											if ((e = e.$$typeof) === _) return 11;
											if (e === I) return 14
										}
										return 2
									}(i), e = $i(i, e), a) {
									case 0:
										t = Ks(null, t, i, e, r);
										break e;
									case 1:
										t = Vs(null, t, i, e, r);
										break e;
									case 11:
										t = Us(null, t, i, e, r);
										break e;
									case 14:
										t = Bs(null, t, i, $i(i.type, e), n, r);
										break e
								}
								throw Error(s(306, i, ""))
							}
							return t;
						case 0:
							return n = t.type, i = t.pendingProps, Ks(e, t, n, i = t.elementType === n ? i : $i(n, i), r);
						case 1:
							return n = t.type, i = t.pendingProps, Vs(e, t, n, i = t.elementType === n ? i : $i(n, i), r);
						case 3:
							if (Ws(t), n = t.updateQueue, null === e || null === n) throw Error(s(282));
							if (n = t.pendingProps, i = null !== (i = t.memoizedState) ? i.element : null, ua(e, t), ha(t, n, null, r), (n = t.memoizedState.element) === i) qa(), t = io(e, t, r);
							else {
								if ((a = (i = t.stateNode).hydrate) && (ja = Yn(t.stateNode.containerInfo.firstChild), Ba = t, a = Ga = !0), a) {
									if (null != (e = i.mutableSourceEagerHydrationData))
										for (i = 0; i < e.length; i += 2)(a = e[i])._workInProgressVersionPrimary = e[i + 1], Ya.push(a);
									for (r = Da(t, null, n, r), t.child = r; r;) r.flags = -3 & r.flags | 1024, r = r.sibling
								} else Ns(e, t, n, r), qa();
								t = t.child
							}
							return t;
						case 5:
							return Fa(t), null === e && Va(t), n = t.type, i = t.pendingProps, a = null !== e ? e.memoizedProps : null, o = i.children, Vn(n, i) ? o = null : null !== a && Vn(n, a) && (t.flags |= 16), Hs(e, t), Ns(e, t, o, r), t.child;
						case 6:
							return null === e && Va(t), null;
						case 13:
							return $s(e, t, r);
						case 4:
							return Oa(t, t.stateNode.containerInfo), n = t.pendingProps, null === e ? t.child = Aa(t, null, n, r) : Ns(e, t, n, r), t.child;
						case 11:
							return n = t.type, i = t.pendingProps, Us(e, t, n, i = t.elementType === n ? i : $i(n, i), r);
						case 7:
							return Ns(e, t, t.pendingProps, r), t.child;
						case 8:
						case 12:
							return Ns(e, t, t.pendingProps.children, r), t.child;
						case 10:
							e: {
								n = t.type._context,
								i = t.pendingProps,
								o = t.memoizedProps,
								a = i.value;
								var l = t.type._context;
								if (di(Ji, l._currentValue), l._currentValue = a, null !== o)
									if (l = o.value, 0 === (a = cn(l, a) ? 0 : 0 | ("function" == typeof n._calculateChangedBits ? n._calculateChangedBits(l, a) : 1073741823))) {
										if (o.children === i.children && !pi.current) {
											t = io(e, t, r);
											break e
										}
									} else
										for (null !== (l = t.child) && (l.return = t); null !== l;) {
											var u = l.dependencies;
											if (null !== u) {
												o = l.child;
												for (var c = u.firstContext; null !== c;) {
													if (c.context === n && 0 != (c.observedBits & a)) {
														1 === l.tag && ((c = ca(-1, r & -r)).tag = 2, da(l, c)), l.lanes |= r, null !== (c = l.alternate) && (c.lanes |= r), ia(l.return, r), u.lanes |= r;
														break
													}
													c = c.next
												}
											} else o = 10 === l.tag && l.type === t.type ? null : l.child;
											if (null !== o) o.return = l;
											else
												for (o = l; null !== o;) {
													if (o === t) {
														o = null;
														break
													}
													if (null !== (l = o.sibling)) {
														l.return = o.return, o = l;
														break
													}
													o = o.return
												}
											l = o
										}
								Ns(e, t, i.children, r),
								t = t.child
							}
							return t;
						case 9:
							return i = t.type, n = (a = t.pendingProps).children, aa(t, r), n = n(i = sa(i, a.unstable_observedBits)), t.flags |= 1, Ns(e, t, n, r), t.child;
						case 14:
							return a = $i(i = t.type, t.pendingProps), Bs(e, t, i, a = $i(i.type, a), n, r);
						case 15:
							return js(e, t, t.type, t.pendingProps, n, r);
						case 17:
							return n = t.type, i = t.pendingProps, i = t.elementType === n ? i : $i(n, i), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, mi(n) ? (e = !0, Ti(t)) : e = !1, aa(t, r), Ea(t, n, i), Ta(t, n, i, r), zs(null, t, n, !0, e, r);
						case 19:
							return no(e, t, r);
						case 23:
						case 24:
							return Gs(e, t, r)
					}
					throw Error(s(156, t.tag))
				}, iu.prototype.render = function(e) {
					eu(e, this._internalRoot, null, null)
				}, iu.prototype.unmount = function() {
					var e = this._internalRoot,
						t = e.containerInfo;
					eu(null, e, null, (function() {
						t[ei] = null
					}))
				}, tt = function(e) {
					13 === e.tag && (pl(e, 4, fl()), nu(e, 4))
				}, rt = function(e) {
					13 === e.tag && (pl(e, 67108864, fl()), nu(e, 67108864))
				}, nt = function(e) {
					if (13 === e.tag) {
						var t = fl(),
							r = hl(e);
						pl(e, r, t), nu(e, r)
					}
				}, it = function(e, t) {
					return t()
				}, De = function(e, t, r) {
					switch (t) {
						case "input":
							if (re(e, r), t = r.name, "radio" === r.type && null != t) {
								for (r = e; r.parentNode;) r = r.parentNode;
								for (r = r.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < r.length; t++) {
									var n = r[t];
									if (n !== e && n.form === e.form) {
										var i = ai(n);
										if (!i) throw Error(s(90));
										$(n), re(n, i)
									}
								}
							}
							break;
						case "textarea":
							ue(e, r);
							break;
						case "select":
							null != (t = r.value) && se(e, !!r.multiple, t, !1)
					}
				}, Oe = bl, Pe = function(e, t, r, n, i) {
					var a = Io;
					Io |= 4;
					try {
						return Wi(98, e.bind(null, t, r, n, i))
					} finally {
						0 === (Io = a) && (qo(), Yi())
					}
				}, Fe = function() {
					0 == (49 & Io) && (function() {
						if (null !== il) {
							var e = il;
							il = null, e.forEach((function(e) {
								e.expiredLanes |= 24 & e.pendingLanes, vl(e, Ki())
							}))
						}
						Yi()
					}(), Fl())
				}, Me = function(e, t) {
					var r = Io;
					Io |= 2;
					try {
						return e(t)
					} finally {
						0 === (Io = r) && (qo(), Yi())
					}
				};
				var lu = {
						Events: [ni, ii, ai, xe, Ie, Fl, {
							current: !1
						}]
					},
					uu = {
						findFiberByHostInstance: ri,
						bundleType: 0,
						version: "17.0.2",
						rendererPackageName: "react-dom"
					},
					cu = {
						bundleType: uu.bundleType,
						version: uu.version,
						rendererPackageName: uu.rendererPackageName,
						rendererConfig: uu.rendererConfig,
						overrideHookState: null,
						overrideHookStateDeletePath: null,
						overrideHookStateRenamePath: null,
						overrideProps: null,
						overridePropsDeletePath: null,
						overridePropsRenamePath: null,
						setSuspenseHandler: null,
						scheduleUpdate: null,
						currentDispatcherRef: T.ReactCurrentDispatcher,
						findHostInstanceByFiber: function(e) {
							return null === (e = Ze(e)) ? null : e.stateNode
						},
						findFiberByHostInstance: uu.findFiberByHostInstance || function() {
							return null
						},
						findHostInstancesForRefresh: null,
						scheduleRefresh: null,
						scheduleRoot: null,
						setRefreshHandler: null,
						getCurrentFiber: null
					};
				if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
					var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
					if (!du.isDisabled && du.supportsFiber) try {
						ki = du.inject(cu), wi = du
					} catch (ve) {}
				}
				t.render = function(e, t, r) {
					if (!au(t)) throw Error(s(200));
					return su(null, e, t, !1, r)
				}, t.unstable_batchedUpdates = bl
			},
			60: (e, t, r) => {
				"use strict";
				! function e() {
					if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
						__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
					} catch (e) {
						console.error(e)
					}
				}(), e.exports = r(583)
			},
			415: (e, t, r) => {
				"use strict";
				r.d(t, {
					Z: () => o
				});
				var n = r(81),
					i = r.n(n),
					a = r(645),
					s = r.n(a)()(i());
				

















   s.push([e.id, "*{box-sizing:border-box;scrollbar-width:thin}:root{--yellow: #f3ab65}body{width:99vw;height:100vh;margin:0;background-color:#031634;color:#fff;font-size:.9rem;letter-spacing:0.6px;font-family:Arial, Helvetica, sans-serif}#app-container{height:100%;width:100%}main{height:100%;width:100%;display:flex;justify-content:space-between;padding:10px}section{width:calc(100% - 250px);height:100%;text-align:center;display:flex;justify-content:center;align-items:center;overflow:hidden}aside{width:250px;height:100%;background-color:#031634;border:1px solid #f3ab65;font-family: 'Righteous', cursive;overflow:hidden;box-shadow:0 1px 10px #34383c0f, 0 2px 4px #34383c14}aside .list-tv{height:300px}button,input,select{padding:2px;outline:none;border:2px solid black}option,optgroup{background-color:#e60e23;color:#fff}button{background-color:var(--yellow);display:flex;align-items:center;justify-content:center;text-transform:uppercase;cursor:pointer;transition:opacity .25s}button:hover{opacity:0.8}ul{margin:0;padding:0;list-style:none}li{padding:10px 15px;transition:background-color .25s;text-transform:capitalize;border-bottom:1px solid #e60e23}li:hover{}pre{background-color:#ffffff;padding:10px}p{word-break:break-all}.active{color:var(--yellow);font-weight:600}.d-flex{display:flex}.d-none{display:none}.flex-column{flex-direction:column}.align-center{align-items:center}.justify-between{justify-content:space-between}.grid-2-1{display:grid;grid-template-columns:75% 22%;justify-content:space-between;gap:20px}.w-100{width:100%}.h-100{min-height:100%}.br7{border-radius:7px}.border-0{border:0}.mr-2{margin-right:20px}.mb-2{margin-bottom:20px}.ml-2{margin-left:20px}.ml-1{margin-left:10px}.mt-1{margin-top:10px}.mb-1{margin-bottom:10px}.mr-1{margin-right:10px}.py-1{padding:10px 0}.p-0{padding:0}.m-0{margin:0}.mb-0{margin-bottom:0}.mt-0{margin-top:0}.cp{cursor:pointer}.uppercase{text-transform:uppercase}.center{text-align:center}.truncate{width:75%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.text-left{text-align:left}.bg-blue{background-color:#3f51b5}.bg-yellow{background-color:var(--yellow)}.bg-light{background-color:#181818}.bg-gray{background-color:#ffffff1f}.bg-inherit{background-color:inherit;color:inherit;border:0}.white{color:#031634 !important}.yellow{color:var(--yellow)}.overflow{overflow:auto}.blur{backdrop-filter:blur(2px)}.dropdown{width:100%;position:relative;background-color:transparent;padding:0 15px}.dropdown button{font-size:.9rem;background-color:inherit;color:#fff;letter-spacing:2px}.dropdown ul{display:none;position:absolute;border:1px solid #e60e23;z-index:999999;border-radius:1px}.dropdown li{font-size:0.9rem;padding:7px 15px;background-color:#031634;border-bottom:1px solid #e60e23;cursor:pointer}.dropdown:hover ul,.dropdown button:hover ul{display:block}.modal{max-width:100%;max-height:100%;width:96%;height:auto;text-align:center;position:fixed;right:2%;bottom:25%;flex-direction:column;background-color:#031634;border-radius:7px;border:1px solid #e60e23}.modal>div{min-width:100%;max-width:100%;width:100%;box-shadow:0 1px 2px #031634, 0 2px 2px #031634}.modal header{width:100%;border-bottom:1px solid #e60e23}.video-container{height:100%;width:100%;max-height:100%;max-width:98%;padding:5px 0;display:flex;flex-direction:column;justify-content:space-between}.video-container *{padding:0;border:0;font-size:12px}iframe{width:100%;height:100%;box-shadow:0 1px 10px #34383c0f, 0 2px 4px #34383c14}video{width:100%;box-shadow:0 1px 10px #34383c0f, 0 2px 4px #34383c14}::-webkit-scrollbar{width:7px;height:7px}::-webkit-scrollbar-thumb{background:#f3ab65;border-radius:7px}::-webkit-scrollbar-thumb:hover{background:#e60e23}\n", ""]);

























				const o = s
			},
			645: e => {
				"use strict";
				e.exports = function(e) {
					var t = [];
					return t.toString = function() {
						return this.map((function(t) {
							var r = "",
								n = void 0 !== t[5];
							return t[4] && (r += "@supports (".concat(t[4], ") {")), t[2] && (r += "@media ".concat(t[2], " {")), n && (r += "@layer".concat(t[5].length > 0 ? " ".concat(t[5]) : "", " {")), r += e(t), n && (r += "}"), t[2] && (r += "}"), t[4] && (r += "}"), r
						})).join("")
					}, t.i = function(e, r, n, i, a) {
						"string" == typeof e && (e = [
							[null, e, void 0]
						]);
						var s = {};
						if (n)
							for (var o = 0; o < this.length; o++) {
								var l = this[o][0];
								null != l && (s[l] = !0)
							}
						for (var u = 0; u < e.length; u++) {
							var c = [].concat(e[u]);
							n && s[c[0]] || (void 0 !== a && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = a), r && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = r) : c[2] = r), i && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = i) : c[4] = "".concat(i)), t.push(c))
						}
					}, t
				}
			},
			81: e => {
				"use strict";
				e.exports = function(e) {
					return e[1]
				}
			},
			631: function(e) {
				var t;
				"undefined" != typeof window && (t = function() {
					return function(e) {
						var t = {};

						function r(n) {
							if (t[n]) return t[n].exports;
							var i = t[n] = {
								i: n,
								l: !1,
								exports: {}
							};
							return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
						}
						return r.m = e, r.c = t, r.d = function(e, t, n) {
							r.o(e, t) || Object.defineProperty(e, t, {
								enumerable: !0,
								get: n
							})
						}, r.r = function(e) {
							"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
								value: "Module"
							}), Object.defineProperty(e, "__esModule", {
								value: !0
							})
						}, r.t = function(e, t) {
							if (1 & t && (e = r(e)), 8 & t) return e;
							if (4 & t && "object" == typeof e && e && e.__esModule) return e;
							var n = Object.create(null);
							if (r.r(n), Object.defineProperty(n, "default", {
									enumerable: !0,
									value: e
								}), 2 & t && "string" != typeof e)
								for (var i in e) r.d(n, i, function(t) {
									return e[t]
								}.bind(null, i));
							return n
						}, r.n = function(e) {
							var t = e && e.__esModule ? function() {
								return e.default
							} : function() {
								return e
							};
							return r.d(t, "a", t), t
						}, r.o = function(e, t) {
							return Object.prototype.hasOwnProperty.call(e, t)
						}, r.p = "/dist/", r(r.s = "./src/hls.ts")
					}({
						"./node_modules/eventemitter3/index.js":
							/*!*********************************************!*\
							  !*** ./node_modules/eventemitter3/index.js ***!
							  \*********************************************/
							/*! no static exports found */
							function(e, t, r) {
								"use strict";
								var n = Object.prototype.hasOwnProperty,
									i = "~";

								function a() {}

								function s(e, t, r) {
									this.fn = e, this.context = t, this.once = r || !1
								}

								function o(e, t, r, n, a) {
									if ("function" != typeof r) throw new TypeError("The listener must be a function");
									var o = new s(r, n || e, a),
										l = i ? i + t : t;
									return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o, e._eventsCount++), e
								}

								function l(e, t) {
									0 == --e._eventsCount ? e._events = new a : delete e._events[t]
								}

								function u() {
									this._events = new a, this._eventsCount = 0
								}
								Object.create && (a.prototype = Object.create(null), (new a).__proto__ || (i = !1)), u.prototype.eventNames = function() {
									var e, t, r = [];
									if (0 === this._eventsCount) return r;
									for (t in e = this._events) n.call(e, t) && r.push(i ? t.slice(1) : t);
									return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
								}, u.prototype.listeners = function(e) {
									var t = i ? i + e : e,
										r = this._events[t];
									if (!r) return [];
									if (r.fn) return [r.fn];
									for (var n = 0, a = r.length, s = new Array(a); n < a; n++) s[n] = r[n].fn;
									return s
								}, u.prototype.listenerCount = function(e) {
									var t = i ? i + e : e,
										r = this._events[t];
									return r ? r.fn ? 1 : r.length : 0
								}, u.prototype.emit = function(e, t, r, n, a, s) {
									var o = i ? i + e : e;
									if (!this._events[o]) return !1;
									var l, u, c = this._events[o],
										d = arguments.length;
									if (c.fn) {
										switch (c.once && this.removeListener(e, c.fn, void 0, !0), d) {
											case 1:
												return c.fn.call(c.context), !0;
											case 2:
												return c.fn.call(c.context, t), !0;
											case 3:
												return c.fn.call(c.context, t, r), !0;
											case 4:
												return c.fn.call(c.context, t, r, n), !0;
											case 5:
												return c.fn.call(c.context, t, r, n, a), !0;
											case 6:
												return c.fn.call(c.context, t, r, n, a, s), !0
										}
										for (u = 1, l = new Array(d - 1); u < d; u++) l[u - 1] = arguments[u];
										c.fn.apply(c.context, l)
									} else {
										var f, h = c.length;
										for (u = 0; u < h; u++) switch (c[u].once && this.removeListener(e, c[u].fn, void 0, !0), d) {
											case 1:
												c[u].fn.call(c[u].context);
												break;
											case 2:
												c[u].fn.call(c[u].context, t);
												break;
											case 3:
												c[u].fn.call(c[u].context, t, r);
												break;
											case 4:
												c[u].fn.call(c[u].context, t, r, n);
												break;
											default:
												if (!l)
													for (f = 1, l = new Array(d - 1); f < d; f++) l[f - 1] = arguments[f];
												c[u].fn.apply(c[u].context, l)
										}
									}
									return !0
								}, u.prototype.on = function(e, t, r) {
									return o(this, e, t, r, !1)
								}, u.prototype.once = function(e, t, r) {
									return o(this, e, t, r, !0)
								}, u.prototype.removeListener = function(e, t, r, n) {
									var a = i ? i + e : e;
									if (!this._events[a]) return this;
									if (!t) return l(this, a), this;
									var s = this._events[a];
									if (s.fn) s.fn !== t || n && !s.once || r && s.context !== r || l(this, a);
									else {
										for (var o = 0, u = [], c = s.length; o < c; o++)(s[o].fn !== t || n && !s[o].once || r && s[o].context !== r) && u.push(s[o]);
										u.length ? this._events[a] = 1 === u.length ? u[0] : u : l(this, a)
									}
									return this
								}, u.prototype.removeAllListeners = function(e) {
									var t;
									return e ? (t = i ? i + e : e, this._events[t] && l(this, t)) : (this._events = new a, this._eventsCount = 0), this
								}, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = i, u.EventEmitter = u, e.exports = u
							},
						"./node_modules/url-toolkit/src/url-toolkit.js":
							/*!*****************************************************!*\
							  !*** ./node_modules/url-toolkit/src/url-toolkit.js ***!
							  \*****************************************************/
							/*! no static exports found */
							function(e, t, r) {
								var n, i, a, s, o;
								n = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#[^]*)?$/, i = /^([^\/?#]*)([^]*)$/, a = /(?:\/|^)\.(?=\/)/g, s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g, o = {
									buildAbsoluteURL: function(e, t, r) {
										if (r = r || {}, e = e.trim(), !(t = t.trim())) {
											if (!r.alwaysNormalize) return e;
											var n = o.parseURL(e);
											if (!n) throw new Error("Error trying to parse base URL.");
											return n.path = o.normalizePath(n.path), o.buildURLFromParts(n)
										}
										var a = o.parseURL(t);
										if (!a) throw new Error("Error trying to parse relative URL.");
										if (a.scheme) return r.alwaysNormalize ? (a.path = o.normalizePath(a.path), o.buildURLFromParts(a)) : t;
										var s = o.parseURL(e);
										if (!s) throw new Error("Error trying to parse base URL.");
										if (!s.netLoc && s.path && "/" !== s.path[0]) {
											var l = i.exec(s.path);
											s.netLoc = l[1], s.path = l[2]
										}
										s.netLoc && !s.path && (s.path = "/");
										var u = {
											scheme: s.scheme,
											netLoc: a.netLoc,
											path: null,
											params: a.params,
											query: a.query,
											fragment: a.fragment
										};
										if (!a.netLoc && (u.netLoc = s.netLoc, "/" !== a.path[0]))
											if (a.path) {
												var c = s.path,
													d = c.substring(0, c.lastIndexOf("/") + 1) + a.path;
												u.path = o.normalizePath(d)
											} else u.path = s.path, a.params || (u.params = s.params, a.query || (u.query = s.query));
										return null === u.path && (u.path = r.alwaysNormalize ? o.normalizePath(a.path) : a.path), o.buildURLFromParts(u)
									},
									parseURL: function(e) {
										var t = n.exec(e);
										return t ? {
											scheme: t[1] || "",
											netLoc: t[2] || "",
											path: t[3] || "",
											params: t[4] || "",
											query: t[5] || "",
											fragment: t[6] || ""
										} : null
									},
									normalizePath: function(e) {
										for (e = e.split("").reverse().join("").replace(a, ""); e.length !== (e = e.replace(s, "")).length;);
										return e.split("").reverse().join("")
									},
									buildURLFromParts: function(e) {
										return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
									}
								}, e.exports = o
							},
						"./node_modules/webworkify-webpack/index.js":
							/*!**************************************************!*\
							  !*** ./node_modules/webworkify-webpack/index.js ***!
							  \**************************************************/
							/*! no static exports found */
							function(e, t, r) {
								function n(e) {
									var t = {};

									function r(n) {
										if (t[n]) return t[n].exports;
										var i = t[n] = {
											i: n,
											l: !1,
											exports: {}
										};
										return e[n].call(i.exports, i, i.exports, r), i.l = !0, i.exports
									}
									r.m = e, r.c = t, r.i = function(e) {
										return e
									}, r.d = function(e, t, n) {
										r.o(e, t) || Object.defineProperty(e, t, {
											configurable: !1,
											enumerable: !0,
											get: n
										})
									}, r.r = function(e) {
										Object.defineProperty(e, "__esModule", {
											value: !0
										})
									}, r.n = function(e) {
										var t = e && e.__esModule ? function() {
											return e.default
										} : function() {
											return e
										};
										return r.d(t, "a", t), t
									}, r.o = function(e, t) {
										return Object.prototype.hasOwnProperty.call(e, t)
									}, r.p = "/", r.oe = function(e) {
										throw console.error(e), e
									};
									var n = r(r.s = ENTRY_MODULE);
									return n.default || n
								}
								var i = "[\\.|\\-|\\+|\\w|/|@]+",
									a = "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)";

								function s(e) {
									return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
								}

								function o(e, t, n) {
									var o = {};
									o[n] = [];
									var l = t.toString(),
										u = l.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
									if (!u) return o;
									for (var c, d = u[1], f = new RegExp("(\\\\n|\\W)" + s(d) + a, "g"); c = f.exec(l);) "dll-reference" !== c[3] && o[n].push(c[3]);
									for (f = new RegExp("\\(" + s(d) + '\\("(dll-reference\\s(' + i + '))"\\)\\)' + a, "g"); c = f.exec(l);) e[c[2]] || (o[n].push(c[1]), e[c[2]] = r(c[1]).m), o[c[2]] = o[c[2]] || [], o[c[2]].push(c[4]);
									for (var h, p = Object.keys(o), g = 0; g < p.length; g++)
										for (var v = 0; v < o[p[g]].length; v++) h = o[p[g]][v], isNaN(1 * h) || (o[p[g]][v] = 1 * o[p[g]][v]);
									return o
								}

								function l(e) {
									return Object.keys(e).reduce((function(t, r) {
										return t || e[r].length > 0
									}), !1)
								}
								e.exports = function(e, t) {
									t = t || {};
									var i = {
											main: r.m
										},
										a = t.all ? {
											main: Object.keys(i.main)
										} : function(e, t) {
											for (var r = {
													main: [t]
												}, n = {
													main: []
												}, i = {
													main: {}
												}; l(r);)
												for (var a = Object.keys(r), s = 0; s < a.length; s++) {
													var u = a[s],
														c = r[u].pop();
													if (i[u] = i[u] || {}, !i[u][c] && e[u][c]) {
														i[u][c] = !0, n[u] = n[u] || [], n[u].push(c);
														for (var d = o(e, e[u][c], u), f = Object.keys(d), h = 0; h < f.length; h++) r[f[h]] = r[f[h]] || [], r[f[h]] = r[f[h]].concat(d[f[h]])
													}
												}
											return n
										}(i, e),
										s = "";
									Object.keys(a).filter((function(e) {
										return "main" !== e
									})).forEach((function(e) {
										for (var t = 0; a[e][t];) t++;
										a[e].push(t), i[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })", s = s + "var " + e + " = (" + n.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + a[e].map((function(t) {
											return JSON.stringify(t) + ": " + i[e][t].toString()
										})).join(",") + "});\n"
									})), s = s + "new ((" + n.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + a.main.map((function(e) {
										return JSON.stringify(e) + ": " + i.main[e].toString()
									})).join(",") + "}))(self);";
									var u = new window.Blob([s], {
										type: "text/javascript"
									});
									if (t.bare) return u;
									var c = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(u),
										d = new window.Worker(c);
									return d.objectURL = c, d
								}
							},
						"./src/config.ts":
							/*!***********************!*\
							  !*** ./src/config.ts ***!
							  \***********************/
							/*! exports provided: hlsDefaultConfig, mergeConfig, enableStreamingMode */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "hlsDefaultConfig", (function() {
									return k
								})), r.d(t, "mergeConfig", (function() {
									return w
								})), r.d(t, "enableStreamingMode", (function() {
									return L
								}));
								var n = r( /*! ./controller/abr-controller */ "./src/controller/abr-controller.ts"),
									i = r( /*! ./controller/audio-stream-controller */ "./src/controller/audio-stream-controller.ts"),
									a = r( /*! ./controller/audio-track-controller */ "./src/controller/audio-track-controller.ts"),
									s = r( /*! ./controller/subtitle-stream-controller */ "./src/controller/subtitle-stream-controller.ts"),
									o = r( /*! ./controller/subtitle-track-controller */ "./src/controller/subtitle-track-controller.ts"),
									l = r( /*! ./controller/buffer-controller */ "./src/controller/buffer-controller.ts"),
									u = r( /*! ./controller/timeline-controller */ "./src/controller/timeline-controller.ts"),
									c = r( /*! ./controller/cap-level-controller */ "./src/controller/cap-level-controller.ts"),
									d = r( /*! ./controller/fps-controller */ "./src/controller/fps-controller.ts"),
									f = r( /*! ./controller/eme-controller */ "./src/controller/eme-controller.ts"),
									h = r( /*! ./controller/cmcd-controller */ "./src/controller/cmcd-controller.ts"),
									p = r( /*! ./utils/xhr-loader */ "./src/utils/xhr-loader.ts"),
									g = r( /*! ./utils/fetch-loader */ "./src/utils/fetch-loader.ts"),
									v = r( /*! ./utils/cues */ "./src/utils/cues.ts"),
									m = r( /*! ./utils/mediakeys-helper */ "./src/utils/mediakeys-helper.ts"),
									y = r( /*! ./utils/logger */ "./src/utils/logger.ts");

								function E() {
									return E = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, E.apply(this, arguments)
								}

								function b(e, t) {
									var r = Object.keys(e);
									if (Object.getOwnPropertySymbols) {
										var n = Object.getOwnPropertySymbols(e);
										t && (n = n.filter((function(t) {
											return Object.getOwnPropertyDescriptor(e, t).enumerable
										}))), r.push.apply(r, n)
									}
									return r
								}

								function T(e) {
									for (var t = 1; t < arguments.length; t++) {
										var r = null != arguments[t] ? arguments[t] : {};
										t % 2 ? b(Object(r), !0).forEach((function(t) {
											S(e, t, r[t])
										})) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : b(Object(r)).forEach((function(t) {
											Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
										}))
									}
									return e
								}

								function S(e, t, r) {
									return t in e ? Object.defineProperty(e, t, {
										value: r,
										enumerable: !0,
										configurable: !0,
										writable: !0
									}) : e[t] = r, e
								}
								var k = T(T({
									autoStartLoad: !0,
									startPosition: -1,
									defaultAudioCodec: void 0,
									debug: !1,
									capLevelOnFPSDrop: !1,
									capLevelToPlayerSize: !1,
									initialLiveManifestSize: 1,
									maxBufferLength: 30,
									backBufferLength: 1 / 0,
									maxBufferSize: 6e7,
									maxBufferHole: .1,
									highBufferWatchdogPeriod: 2,
									nudgeOffset: .1,
									nudgeMaxRetry: 3,
									maxFragLookUpTolerance: .25,
									liveSyncDurationCount: 3,
									liveMaxLatencyDurationCount: 1 / 0,
									liveSyncDuration: void 0,
									liveMaxLatencyDuration: void 0,
									maxLiveSyncPlaybackRate: 1,
									liveDurationInfinity: !1,
									liveBackBufferLength: null,
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
									loader: p.default,
									fLoader: void 0,
									pLoader: void 0,
									xhrSetup: void 0,
									licenseXhrSetup: void 0,
									licenseResponseCallback: void 0,
									abrController: n.default,
									bufferController: l.default,
									capLevelController: c.default,
									fpsController: d.default,
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
									drmSystemOptions: {},
									requestMediaKeySystemAccessFunc: m.requestMediaKeySystemAccess,
									testBandwidth: !0,
									progressive: !1,
									lowLatencyMode: !0,
									cmcd: void 0
								}, {
									cueHandler: v.default,
									enableCEA708Captions: !0,
									enableWebVTT: !0,
									enableIMSC1: !0,
									captionsTextTrack1Label: "English",
									captionsTextTrack1LanguageCode: "en",
									captionsTextTrack2Label: "Spanish",
									captionsTextTrack2LanguageCode: "es",
									captionsTextTrack3Label: "Unknown CC",
									captionsTextTrack3LanguageCode: "",
									captionsTextTrack4Label: "Unknown CC",
									captionsTextTrack4LanguageCode: "",
									renderTextTracksNatively: !0
								}), {}, {
									subtitleStreamController: s.SubtitleStreamController,
									subtitleTrackController: o.default,
									timelineController: u.TimelineController,
									audioStreamController: i.default,
									audioTrackController: a.default,
									emeController: f.default,
									cmcdController: h.default
								});

								function w(e, t) {
									if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration)) throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
									if (void 0 !== t.liveMaxLatencyDurationCount && (void 0 === t.liveSyncDurationCount || t.liveMaxLatencyDurationCount <= t.liveSyncDurationCount)) throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be greater than "liveSyncDurationCount"');
									if (void 0 !== t.liveMaxLatencyDuration && (void 0 === t.liveSyncDuration || t.liveMaxLatencyDuration <= t.liveSyncDuration)) throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be greater than "liveSyncDuration"');
									return E({}, e, t)
								}

								function L(e) {
									var t = e.loader;
									t !== g.default && t !== p.default ? (y.logger.log("[config]: Custom loader detected, cannot enable progressive streaming"), e.progressive = !1) : Object(g.fetchSupported)() && (e.loader = g.default, e.progressive = !0, e.enableSoftwareAES = !0, y.logger.log("[config]: Progressive streaming enabled, using FetchLoader"))
								}
							},
						"./src/controller/abr-controller.ts":
							/*!******************************************!*\
							  !*** ./src/controller/abr-controller.ts ***!
							  \******************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../utils/ewma-bandwidth-estimator */ "./src/utils/ewma-bandwidth-estimator.ts"),
									a = r( /*! ../events */ "./src/events.ts"),
									s = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									o = r( /*! ../errors */ "./src/errors.ts"),
									l = r( /*! ../types/loader */ "./src/types/loader.ts"),
									u = r( /*! ../utils/logger */ "./src/utils/logger.ts");

								function c(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var d = function() {
									function e(e) {
										this.hls = void 0, this.lastLoadedFragLevel = 0, this._nextAutoLevel = -1, this.timer = void 0, this.onCheck = this._abandonRulesCheck.bind(this), this.fragCurrent = null, this.partCurrent = null, this.bitrateTestDelay = 0, this.bwEstimator = void 0, this.hls = e;
										var t = e.config;
										this.bwEstimator = new i.default(t.abrEwmaSlowVoD, t.abrEwmaFastVoD, t.abrEwmaDefaultEstimate), this.registerListeners()
									}
									var t, r, d, f = e.prototype;
									return f.registerListeners = function() {
										var e = this.hls;
										e.on(a.Events.FRAG_LOADING, this.onFragLoading, this), e.on(a.Events.FRAG_LOADED, this.onFragLoaded, this), e.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this), e.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.on(a.Events.ERROR, this.onError, this)
									}, f.unregisterListeners = function() {
										var e = this.hls;
										e.off(a.Events.FRAG_LOADING, this.onFragLoading, this), e.off(a.Events.FRAG_LOADED, this.onFragLoaded, this), e.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this), e.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.off(a.Events.ERROR, this.onError, this)
									}, f.destroy = function() {
										this.unregisterListeners(), this.clearTimer(), this.hls = this.onCheck = null, this.fragCurrent = this.partCurrent = null
									}, f.onFragLoading = function(e, t) {
										var r, n = t.frag;
										n.type === l.PlaylistLevelType.MAIN && (this.timer || (this.fragCurrent = n, this.partCurrent = null != (r = t.part) ? r : null, this.timer = self.setInterval(this.onCheck, 100)))
									}, f.onLevelLoaded = function(e, t) {
										var r = this.hls.config;
										t.details.live ? this.bwEstimator.update(r.abrEwmaSlowLive, r.abrEwmaFastLive) : this.bwEstimator.update(r.abrEwmaSlowVoD, r.abrEwmaFastVoD)
									}, f._abandonRulesCheck = function() {
										var e = this.fragCurrent,
											t = this.partCurrent,
											r = this.hls,
											i = r.autoLevelEnabled,
											o = r.config,
											l = r.media;
										if (e && l) {
											var c = t ? t.stats : e.stats,
												d = t ? t.duration : e.duration;
											if (c.aborted) return u.logger.warn("frag loader destroy or aborted, disarm abandonRules"), this.clearTimer(), void(this._nextAutoLevel = -1);
											if (i && !l.paused && l.playbackRate && l.readyState) {
												var f = performance.now() - c.loading.start,
													h = Math.abs(l.playbackRate);
												if (!(f <= 500 * d / h)) {
													var p = r.levels,
														g = r.minAutoLevel,
														v = p[e.level],
														m = c.total || Math.max(c.loaded, Math.round(d * v.maxBitrate / 8)),
														y = Math.max(1, c.bwEstimate ? c.bwEstimate / 8 : 1e3 * c.loaded / f),
														E = (m - c.loaded) / y,
														b = l.currentTime,
														T = (s.BufferHelper.bufferInfo(l, b, o.maxBufferHole).end - b) / h;
													if (!(T >= 2 * d / h || E <= T)) {
														var S, k = Number.POSITIVE_INFINITY;
														for (S = e.level - 1; S > g && !((k = d * p[S].maxBitrate / (6.4 * y)) < T); S--);
														if (!(k >= E)) {
															var w = this.bwEstimator.getEstimate();
															u.logger.warn("Fragment " + e.sn + (t ? " part " + t.index : "") + " of level " + e.level + " is loading too slowly and will cause an underbuffer; aborting and switching to level " + S + "\n      Current BW estimate: " + (Object(n.isFiniteNumber)(w) ? (w / 1024).toFixed(3) : "Unknown") + " Kb/s\n      Estimated load time for current fragment: " + E.toFixed(3) + " s\n      Estimated load time for the next fragment: " + k.toFixed(3) + " s\n      Time to underbuffer: " + T.toFixed(3) + " s"), r.nextLoadLevel = S, this.bwEstimator.sample(f, c.loaded), this.clearTimer(), e.loader && (this.fragCurrent = this.partCurrent = null, e.loader.abort()), r.trigger(a.Events.FRAG_LOAD_EMERGENCY_ABORTED, {
																frag: e,
																part: t,
																stats: c
															})
														}
													}
												}
											}
										}
									}, f.onFragLoaded = function(e, t) {
										var r = t.frag,
											i = t.part;
										if (r.type === l.PlaylistLevelType.MAIN && Object(n.isFiniteNumber)(r.sn)) {
											var s = i ? i.stats : r.stats,
												o = i ? i.duration : r.duration;
											if (this.clearTimer(), this.lastLoadedFragLevel = r.level, this._nextAutoLevel = -1, this.hls.config.abrMaxWithRealBitrate) {
												var u = this.hls.levels[r.level],
													c = (u.loaded ? u.loaded.bytes : 0) + s.loaded,
													d = (u.loaded ? u.loaded.duration : 0) + o;
												u.loaded = {
													bytes: c,
													duration: d
												}, u.realBitrate = Math.round(8 * c / d)
											}
											if (r.bitrateTest) {
												var f = {
													stats: s,
													frag: r,
													part: i,
													id: r.type
												};
												this.onFragBuffered(a.Events.FRAG_BUFFERED, f), r.bitrateTest = !1
											}
										}
									}, f.onFragBuffered = function(e, t) {
										var r = t.frag,
											n = t.part,
											i = n ? n.stats : r.stats;
										if (!i.aborted && r.type === l.PlaylistLevelType.MAIN && "initSegment" !== r.sn) {
											var a = i.parsing.end - i.loading.start;
											this.bwEstimator.sample(a, i.loaded), i.bwEstimate = this.bwEstimator.getEstimate(), r.bitrateTest ? this.bitrateTestDelay = a / 1e3 : this.bitrateTestDelay = 0
										}
									}, f.onError = function(e, t) {
										switch (t.details) {
											case o.ErrorDetails.FRAG_LOAD_ERROR:
											case o.ErrorDetails.FRAG_LOAD_TIMEOUT:
												this.clearTimer()
										}
									}, f.clearTimer = function() {
										self.clearInterval(this.timer), this.timer = void 0
									}, f.getNextABRAutoLevel = function() {
										var e = this.fragCurrent,
											t = this.partCurrent,
											r = this.hls,
											n = r.maxAutoLevel,
											i = r.config,
											a = r.minAutoLevel,
											o = r.media,
											l = t ? t.duration : e ? e.duration : 0,
											c = o ? o.currentTime : 0,
											d = o && 0 !== o.playbackRate ? Math.abs(o.playbackRate) : 1,
											f = this.bwEstimator ? this.bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate,
											h = (s.BufferHelper.bufferInfo(o, c, i.maxBufferHole).end - c) / d,
											p = this.findBestLevel(f, a, n, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor);
										if (p >= 0) return p;
										u.logger.trace((h ? "rebuffering expected" : "buffer is empty") + ", finding optimal quality level");
										var g = l ? Math.min(l, i.maxStarvationDelay) : i.maxStarvationDelay,
											v = i.abrBandWidthFactor,
											m = i.abrBandWidthUpFactor;
										if (!h) {
											var y = this.bitrateTestDelay;
											y && (g = (l ? Math.min(l, i.maxLoadingDelay) : i.maxLoadingDelay) - y, u.logger.trace("bitrate test took " + Math.round(1e3 * y) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"), v = m = 1)
										}
										return p = this.findBestLevel(f, a, n, h + g, v, m), Math.max(p, 0)
									}, f.findBestLevel = function(e, t, r, n, i, a) {
										for (var s, o = this.fragCurrent, l = this.partCurrent, c = this.lastLoadedFragLevel, d = this.hls.levels, f = d[c], h = !(null == f || null === (s = f.details) || void 0 === s || !s.live), p = null == f ? void 0 : f.codecSet, g = l ? l.duration : o ? o.duration : 0, v = r; v >= t; v--) {
											var m = d[v];
											if (m && (!p || m.codecSet === p)) {
												var y = m.details,
													E = (l ? null == y ? void 0 : y.partTarget : null == y ? void 0 : y.averagetargetduration) || g,
													b = void 0;
												b = v <= c ? i * e : a * e;
												var T = d[v].maxBitrate,
													S = T * E / b;
												if (u.logger.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + v + "/" + Math.round(b) + "/" + T + "/" + E + "/" + n + "/" + S), b > T && (!S || h && !this.bitrateTestDelay || S < n)) return v
											}
										}
										return -1
									}, t = e, (r = [{
										key: "nextAutoLevel",
										get: function() {
											var e = this._nextAutoLevel,
												t = this.bwEstimator;
											if (!(-1 === e || t && t.canEstimate())) return e;
											var r = this.getNextABRAutoLevel();
											return -1 !== e && (r = Math.min(e, r)), r
										},
										set: function(e) {
											this._nextAutoLevel = e
										}
									}]) && c(t.prototype, r), d && c(t, d), e
								}();
								t.default = d
							},
						"./src/controller/audio-stream-controller.ts":
							/*!***************************************************!*\
							  !*** ./src/controller/audio-stream-controller.ts ***!
							  \***************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ./base-stream-controller */ "./src/controller/base-stream-controller.ts"),
									a = r( /*! ../events */ "./src/events.ts"),
									s = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									o = r( /*! ./fragment-tracker */ "./src/controller/fragment-tracker.ts"),
									l = r( /*! ../types/level */ "./src/types/level.ts"),
									u = r( /*! ../types/loader */ "./src/types/loader.ts"),
									c = r( /*! ../loader/fragment */ "./src/loader/fragment.ts"),
									d = r( /*! ../demux/chunk-cache */ "./src/demux/chunk-cache.ts"),
									f = r( /*! ../demux/transmuxer-interface */ "./src/demux/transmuxer-interface.ts"),
									h = r( /*! ../types/transmuxer */ "./src/types/transmuxer.ts"),
									p = r( /*! ./fragment-finders */ "./src/controller/fragment-finders.ts"),
									g = r( /*! ../utils/discontinuities */ "./src/utils/discontinuities.ts"),
									v = r( /*! ../errors */ "./src/errors.ts"),
									m = r( /*! ../utils/logger */ "./src/utils/logger.ts");

								function y() {
									return y = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, y.apply(this, arguments)
								}

								function E(e, t) {
									return E = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, E(e, t)
								}
								var b = function(e) {
									var t, r;

									function b(t, r) {
										var n;
										return (n = e.call(this, t, r, "[audio-stream-controller]") || this).videoBuffer = null, n.videoTrackCC = -1, n.waitingVideoCC = -1, n.audioSwitch = !1, n.trackId = -1, n.waitingData = null, n.mainDetails = null, n.bufferFlushed = !1, n._registerListeners(), n
									}
									r = e, (t = b).prototype = Object.create(r.prototype), t.prototype.constructor = t, E(t, r);
									var T = b.prototype;
									return T.onHandlerDestroying = function() {
										this._unregisterListeners(), this.mainDetails = null
									}, T._registerListeners = function() {
										var e = this.hls;
										e.on(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(a.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(a.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.on(a.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.on(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(a.Events.ERROR, this.onError, this), e.on(a.Events.BUFFER_RESET, this.onBufferReset, this), e.on(a.Events.BUFFER_CREATED, this.onBufferCreated, this), e.on(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
									}, T._unregisterListeners = function() {
										var e = this.hls;
										e.off(a.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(a.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(a.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(a.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.off(a.Events.AUDIO_TRACKS_UPDATED, this.onAudioTracksUpdated, this), e.off(a.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(a.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(a.Events.ERROR, this.onError, this), e.off(a.Events.BUFFER_RESET, this.onBufferReset, this), e.off(a.Events.BUFFER_CREATED, this.onBufferCreated, this), e.off(a.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(a.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(a.Events.FRAG_BUFFERED, this.onFragBuffered, this)
									}, T.onInitPtsFound = function(e, t) {
										var r = t.frag,
											n = t.id,
											a = t.initPTS;
										if ("main" === n) {
											var s = r.cc;
											this.initPTS[r.cc] = a, this.log("InitPTS for cc: " + s + " found from main: " + a), this.videoTrackCC = s, this.state === i.State.WAITING_INIT_PTS && this.tick()
										}
									}, T.startLoad = function(e) {
										if (!this.levels) return this.startPosition = e, void(this.state = i.State.STOPPED);
										var t = this.lastCurrentTime;
										this.stopLoad(), this.setInterval(100), this.fragLoadError = 0, t > 0 && -1 === e ? (this.log("Override startPosition with lastCurrentTime @" + t.toFixed(3)), this.state = i.State.IDLE) : (this.loadedmetadata = !1, this.state = i.State.WAITING_TRACK), this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
									}, T.doTick = function() {
										switch (this.state) {
											case i.State.IDLE:
												this.doTickIdle();
												break;
											case i.State.WAITING_TRACK:
												var t, r = this.levels,
													n = this.trackId,
													a = null == r || null === (t = r[n]) || void 0 === t ? void 0 : t.details;
												if (a) {
													if (this.waitForCdnTuneIn(a)) break;
													this.state = i.State.WAITING_INIT_PTS
												}
												break;
											case i.State.FRAG_LOADING_WAITING_RETRY:
												var o, l = performance.now(),
													u = this.retryDate;
												(!u || l >= u || null !== (o = this.media) && void 0 !== o && o.seeking) && (this.log("RetryDate reached, switch back to IDLE state"), this.state = i.State.IDLE);
												break;
											case i.State.WAITING_INIT_PTS:
												var c = this.waitingData;
												if (c) {
													var d = c.frag,
														f = c.part,
														h = c.cache,
														g = c.complete;
													if (void 0 !== this.initPTS[d.cc]) {
														this.waitingData = null, this.waitingVideoCC = -1, this.state = i.State.FRAG_LOADING;
														var v = {
															frag: d,
															part: f,
															payload: h.flush(),
															networkDetails: null
														};
														this._handleFragmentLoadProgress(v), g && e.prototype._handleFragmentLoadComplete.call(this, v)
													} else if (this.videoTrackCC !== this.waitingVideoCC) m.logger.log("Waiting fragment cc (" + d.cc + ") cancelled because video is at cc " + this.videoTrackCC), this.clearWaitingFragment();
													else {
														var y = this.getLoadPosition(),
															E = s.BufferHelper.bufferInfo(this.mediaBuffer, y, this.config.maxBufferHole);
														Object(p.fragmentWithinToleranceTest)(E.end, this.config.maxFragLookUpTolerance, d) < 0 && (m.logger.log("Waiting fragment cc (" + d.cc + ") @ " + d.start + " cancelled because another fragment at " + E.end + " is needed"), this.clearWaitingFragment())
													}
												} else this.state = i.State.IDLE
										}
										this.onTickEnd()
									}, T.clearWaitingFragment = function() {
										var e = this.waitingData;
										e && (this.fragmentTracker.removeFragment(e.frag), this.waitingData = null, this.waitingVideoCC = -1, this.state = i.State.IDLE)
									}, T.onTickEnd = function() {
										var e = this.media;
										if (e && e.readyState) {
											var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;
											!this.loadedmetadata && t.length && (this.loadedmetadata = !0), this.lastCurrentTime = e.currentTime
										}
									}, T.doTickIdle = function() {
										var e, t, r = this.hls,
											n = this.levels,
											s = this.media,
											o = this.trackId,
											l = r.config;
										if (n && n[o] && (s || !this.startFragRequested && l.startFragPrefetch)) {
											var d = n[o].details;
											if (!d || d.live && this.levelLastLoaded !== o || this.waitForCdnTuneIn(d)) this.state = i.State.WAITING_TRACK;
											else {
												this.bufferFlushed && (this.bufferFlushed = !1, this.afterBufferFlushed(this.mediaBuffer ? this.mediaBuffer : this.media, c.ElementaryStreamTypes.AUDIO, u.PlaylistLevelType.AUDIO));
												var f = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : this.media, u.PlaylistLevelType.AUDIO);
												if (null !== f) {
													var h = f.len,
														p = this.getMaxBufferLength(),
														g = this.audioSwitch;
													if (!(h >= p) || g) {
														if (!g && this._streamEnded(f, d)) return r.trigger(a.Events.BUFFER_EOS, {
															type: "audio"
														}), void(this.state = i.State.ENDED);
														var v = d.fragments[0].start,
															m = f.end;
														if (g) {
															var y = this.getLoadPosition();
															m = y, d.PTSKnown && y < v && (f.end > v || f.nextStart) && (this.log("Alt audio track ahead of main track, seek to start of alt audio track"), s.currentTime = v + .05)
														}
														var E = this.getNextFragment(m, d);
														E ? "identity" !== (null === (e = E.decryptdata) || void 0 === e ? void 0 : e.keyFormat) || null !== (t = E.decryptdata) && void 0 !== t && t.key ? this.loadFragment(E, d, m) : this.loadKey(E, d) : this.bufferFlushed = !0
													}
												}
											}
										}
									}, T.getMaxBufferLength = function() {
										var t = e.prototype.getMaxBufferLength.call(this),
											r = this.getFwdBufferInfo(this.videoBuffer ? this.videoBuffer : this.media, u.PlaylistLevelType.MAIN);
										return null === r ? t : Math.max(t, r.len)
									}, T.onMediaDetaching = function() {
										this.videoBuffer = null, e.prototype.onMediaDetaching.call(this)
									}, T.onAudioTracksUpdated = function(e, t) {
										var r = t.audioTracks;
										this.resetTransmuxer(), this.levels = r.map((function(e) {
											return new l.Level(e)
										}))
									}, T.onAudioTrackSwitching = function(e, t) {
										var r = !!t.url;
										this.trackId = t.id;
										var n = this.fragCurrent;
										null != n && n.loader && n.loader.abort(), this.fragCurrent = null, this.clearWaitingFragment(), r ? this.setInterval(100) : this.resetTransmuxer(), r ? (this.audioSwitch = !0, this.state = i.State.IDLE) : this.state = i.State.STOPPED, this.tick()
									}, T.onManifestLoading = function() {
										this.mainDetails = null, this.fragmentTracker.removeAllFragments(), this.startPosition = this.lastCurrentTime = 0, this.bufferFlushed = !1
									}, T.onLevelLoaded = function(e, t) {
										this.mainDetails = t.details
									}, T.onAudioTrackLoaded = function(e, t) {
										var r, n = this.levels,
											a = t.details,
											s = t.id;
										if (n) {
											this.log("Track " + s + " loaded [" + a.startSN + "," + a.endSN + "],duration:" + a.totalduration);
											var o = n[s],
												l = 0;
											if (a.live || null !== (r = o.details) && void 0 !== r && r.live) {
												var u = this.mainDetails;
												if (a.fragments[0] || (a.deltaUpdateFailed = !0), a.deltaUpdateFailed || !u) return;
												!o.details && a.hasProgramDateTime && u.hasProgramDateTime ? (Object(g.alignMediaPlaylistByPDT)(a, u), l = a.fragments[0].start) : l = this.alignPlaylists(a, o.details)
											}
											o.details = a, this.levelLastLoaded = s, this.startFragRequested || !this.mainDetails && a.live || this.setStartPosition(o.details, l), this.state !== i.State.WAITING_TRACK || this.waitForCdnTuneIn(a) || (this.state = i.State.IDLE), this.tick()
										} else this.warn("Audio tracks were reset while loading level " + s)
									}, T._handleFragmentLoadProgress = function(e) {
										var t, r = e.frag,
											n = e.part,
											a = e.payload,
											s = this.config,
											o = this.trackId,
											l = this.levels;
										if (l) {
											var c = l[o];
											console.assert(c, "Audio track is defined on fragment load progress");
											var p = c.details;
											console.assert(p, "Audio track details are defined on fragment load progress");
											var g = s.defaultAudioCodec || c.audioCodec || "mp4a.40.2",
												v = this.transmuxer;
											v || (v = this.transmuxer = new f.default(this.hls, u.PlaylistLevelType.AUDIO, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)));
											var y = this.initPTS[r.cc],
												E = null === (t = r.initSegment) || void 0 === t ? void 0 : t.data;
											if (void 0 !== y) {
												var b = n ? n.index : -1,
													T = -1 !== b,
													S = new h.ChunkMetadata(r.level, r.sn, r.stats.chunkCount, a.byteLength, b, T);
												v.push(a, E, g, "", r, n, p.totalduration, !1, S, y)
											} else m.logger.log("Unknown video PTS for cc " + r.cc + ", waiting for video PTS before demuxing audio frag " + r.sn + " of [" + p.startSN + " ," + p.endSN + "],track " + o), (this.waitingData = this.waitingData || {
												frag: r,
												part: n,
												cache: new d.default,
												complete: !1
											}).cache.push(new Uint8Array(a)), this.waitingVideoCC = this.videoTrackCC, this.state = i.State.WAITING_INIT_PTS
										} else this.warn("Audio tracks were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
									}, T._handleFragmentLoadComplete = function(t) {
										this.waitingData ? this.waitingData.complete = !0 : e.prototype._handleFragmentLoadComplete.call(this, t)
									}, T.onBufferReset = function() {
										this.mediaBuffer = this.videoBuffer = null, this.loadedmetadata = !1
									}, T.onBufferCreated = function(e, t) {
										var r = t.tracks.audio;
										r && (this.mediaBuffer = r.buffer), t.tracks.video && (this.videoBuffer = t.tracks.video.buffer)
									}, T.onFragBuffered = function(e, t) {
										var r = t.frag,
											n = t.part;
										r.type === u.PlaylistLevelType.AUDIO && (this.fragContextChanged(r) ? this.warn("Fragment " + r.sn + (n ? " p: " + n.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state + ", audioSwitch: " + this.audioSwitch) : ("initSegment" !== r.sn && (this.fragPrevious = r, this.audioSwitch && (this.audioSwitch = !1, this.hls.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
											id: this.trackId
										}))), this.fragBufferedComplete(r, n)))
									}, T.onError = function(t, r) {
										switch (r.details) {
											case v.ErrorDetails.FRAG_LOAD_ERROR:
											case v.ErrorDetails.FRAG_LOAD_TIMEOUT:
											case v.ErrorDetails.KEY_LOAD_ERROR:
											case v.ErrorDetails.KEY_LOAD_TIMEOUT:
												this.onFragmentOrKeyLoadError(u.PlaylistLevelType.AUDIO, r);
												break;
											case v.ErrorDetails.AUDIO_TRACK_LOAD_ERROR:
											case v.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT:
												this.state !== i.State.ERROR && this.state !== i.State.STOPPED && (this.state = r.fatal ? i.State.ERROR : i.State.IDLE, this.warn(r.details + " while loading frag, switching to " + this.state + " state"));
												break;
											case v.ErrorDetails.BUFFER_FULL_ERROR:
												if ("audio" === r.parent && (this.state === i.State.PARSING || this.state === i.State.PARSED)) {
													var n = !0,
														a = this.getFwdBufferInfo(this.mediaBuffer, u.PlaylistLevelType.AUDIO);
													a && a.len > .5 && (n = !this.reduceMaxBufferLength(a.len)), n && (this.warn("Buffer full error also media.currentTime is not buffered, flush audio buffer"), this.fragCurrent = null, e.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.resetLoadingState()
												}
										}
									}, T.onBufferFlushed = function(e, t) {
										t.type === c.ElementaryStreamTypes.AUDIO && (this.bufferFlushed = !0)
									}, T._handleTransmuxComplete = function(e) {
										var t, r = "audio",
											n = this.hls,
											s = e.remuxResult,
											o = e.chunkMeta,
											l = this.getCurrentContext(o);
										if (!l) return this.warn("The loading context changed while buffering fragment " + o.sn + " of level " + o.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(o.level);
										var u = l.frag,
											d = l.part,
											f = s.audio,
											h = s.text,
											p = s.id3,
											g = s.initSegment;
										if (!this.fragContextChanged(u)) {
											if (this.state = i.State.PARSING, this.audioSwitch && f && this.completeAudioSwitch(), null != g && g.tracks && (this._bufferInitSegment(g.tracks, u, o), n.trigger(a.Events.FRAG_PARSING_INIT_SEGMENT, {
													frag: u,
													id: r,
													tracks: g.tracks
												})), f) {
												var v = f.startPTS,
													m = f.endPTS,
													E = f.startDTS,
													b = f.endDTS;
												d && (d.elementaryStreams[c.ElementaryStreamTypes.AUDIO] = {
													startPTS: v,
													endPTS: m,
													startDTS: E,
													endDTS: b
												}), u.setElementaryStreamInfo(c.ElementaryStreamTypes.AUDIO, v, m, E, b), this.bufferFragmentData(f, u, d, o)
											}
											if (null != p && null !== (t = p.samples) && void 0 !== t && t.length) {
												var T = y({
													frag: u,
													id: r
												}, p);
												n.trigger(a.Events.FRAG_PARSING_METADATA, T)
											}
											if (h) {
												var S = y({
													frag: u,
													id: r
												}, h);
												n.trigger(a.Events.FRAG_PARSING_USERDATA, S)
											}
										}
									}, T._bufferInitSegment = function(e, t, r) {
										if (this.state === i.State.PARSING) {
											e.video && delete e.video;
											var n = e.audio;
											if (n) {
												n.levelCodec = n.codec, n.id = "audio", this.log("Init audio buffer, container:" + n.container + ", codecs[parsed]=[" + n.codec + "]"), this.hls.trigger(a.Events.BUFFER_CODECS, e);
												var s = n.initSegment;
												if (null != s && s.byteLength) {
													var o = {
														type: "audio",
														frag: t,
														part: null,
														chunkMeta: r,
														parent: t.type,
														data: s
													};
													this.hls.trigger(a.Events.BUFFER_APPENDING, o)
												}
												this.tick()
											}
										}
									}, T.loadFragment = function(t, r, a) {
										var s = this.fragmentTracker.getState(t);
										this.fragCurrent = t, (this.audioSwitch || s === o.FragmentState.NOT_LOADED || s === o.FragmentState.PARTIAL) && ("initSegment" === t.sn ? this._loadInitSegment(t) : r.live && !Object(n.isFiniteNumber)(this.initPTS[t.cc]) ? (this.log("Waiting for video PTS in continuity counter " + t.cc + " of live stream before loading audio fragment " + t.sn + " of level " + this.trackId), this.state = i.State.WAITING_INIT_PTS) : (this.startFragRequested = !0, e.prototype.loadFragment.call(this, t, r, a)))
									}, T.completeAudioSwitch = function() {
										var t = this.hls,
											r = this.media,
											n = this.trackId;
										r && (this.log("Switching audio track : flushing all audio"), e.prototype.flushMainBuffer.call(this, 0, Number.POSITIVE_INFINITY, "audio")), this.audioSwitch = !1, t.trigger(a.Events.AUDIO_TRACK_SWITCHED, {
											id: n
										})
									}, b
								}(i.default);
								t.default = b
							},
						"./src/controller/audio-track-controller.ts":
							/*!**************************************************!*\
							  !*** ./src/controller/audio-track-controller.ts ***!
							  \**************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../errors */ "./src/errors.ts"),
									a = r( /*! ./base-playlist-controller */ "./src/controller/base-playlist-controller.ts"),
									s = r( /*! ../types/loader */ "./src/types/loader.ts");

								function o(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function l(e, t) {
									return l = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, l(e, t)
								}
								var u = function(e) {
									var t, r;

									function a(t) {
										var r;
										return (r = e.call(this, t, "[audio-track-controller]") || this).tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.trackName = "", r.selectDefaultTrack = !0, r.registerListeners(), r
									}
									r = e, (t = a).prototype = Object.create(r.prototype), t.prototype.constructor = t, l(t, r);
									var u, c, d, f = a.prototype;
									return f.registerListeners = function() {
										var e = this.hls;
										e.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(n.Events.LEVEL_LOADING, this.onLevelLoading, this), e.on(n.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(n.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.on(n.Events.ERROR, this.onError, this)
									}, f.unregisterListeners = function() {
										var e = this.hls;
										e.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(n.Events.LEVEL_LOADING, this.onLevelLoading, this), e.off(n.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(n.Events.AUDIO_TRACK_LOADED, this.onAudioTrackLoaded, this), e.off(n.Events.ERROR, this.onError, this)
									}, f.destroy = function() {
										this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, e.prototype.destroy.call(this)
									}, f.onManifestLoading = function() {
										this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.trackName = "", this.selectDefaultTrack = !0
									}, f.onManifestParsed = function(e, t) {
										this.tracks = t.audioTracks || []
									}, f.onAudioTrackLoaded = function(e, t) {
										var r = t.id,
											n = t.details,
											i = this.tracksInGroup[r];
										if (i) {
											var a = i.details;
											i.details = t.details, this.log("audioTrack " + r + " loaded [" + n.startSN + "-" + n.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, t, a))
										} else this.warn("Invalid audio track id " + r)
									}, f.onLevelLoading = function(e, t) {
										this.switchLevel(t.level)
									}, f.onLevelSwitching = function(e, t) {
										this.switchLevel(t.level)
									}, f.switchLevel = function(e) {
										var t = this.hls.levels[e];
										if (null != t && t.audioGroupIds) {
											var r = t.audioGroupIds[t.urlId];
											if (this.groupId !== r) {
												this.groupId = r;
												var i = this.tracks.filter((function(e) {
													return !r || e.groupId === r
												}));
												this.selectDefaultTrack && !i.some((function(e) {
													return e.default
												})) && (this.selectDefaultTrack = !1), this.tracksInGroup = i;
												var a = {
													audioTracks: i
												};
												this.log("Updating audio tracks, " + i.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(n.Events.AUDIO_TRACKS_UPDATED, a), this.selectInitialTrack()
											}
										}
									}, f.onError = function(t, r) {
										e.prototype.onError.call(this, t, r), !r.fatal && r.context && r.context.type === s.PlaylistContextType.AUDIO_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
									}, f.setAudioTrack = function(e) {
										var t = this.tracksInGroup;
										if (e < 0 || e >= t.length) this.warn("Invalid id passed to audio-track controller");
										else {
											this.clearTimer();
											var r = t[this.trackId];
											this.log("Now switching to audio-track index " + e);
											var i = t[e],
												a = i.id,
												s = i.groupId,
												o = void 0 === s ? "" : s,
												l = i.name,
												u = i.type,
												c = i.url;
											if (this.trackId = e, this.trackName = l, this.selectDefaultTrack = !1, this.hls.trigger(n.Events.AUDIO_TRACK_SWITCHING, {
													id: a,
													groupId: o,
													name: l,
													type: u,
													url: c
												}), !i.details || i.details.live) {
												var d = this.switchParams(i.url, null == r ? void 0 : r.details);
												this.loadPlaylist(d)
											}
										}
									}, f.selectInitialTrack = function() {
										var e = this.tracksInGroup;
										console.assert(e.length, "Initial audio track should be selected when tracks are known");
										var t = this.trackName,
											r = this.findTrackId(t) || this.findTrackId(); - 1 !== r ? this.setAudioTrack(r) : (this.warn("No track found for running audio group-ID: " + this.groupId), this.hls.trigger(n.Events.ERROR, {
											type: i.ErrorTypes.MEDIA_ERROR,
											details: i.ErrorDetails.AUDIO_TRACK_LOAD_ERROR,
											fatal: !0
										}))
									}, f.findTrackId = function(e) {
										for (var t = this.tracksInGroup, r = 0; r < t.length; r++) {
											var n = t[r];
											if ((!this.selectDefaultTrack || n.default) && (!e || e === n.name)) return n.id
										}
										return -1
									}, f.loadPlaylist = function(e) {
										var t = this.tracksInGroup[this.trackId];
										if (this.shouldLoadTrack(t)) {
											var r = t.id,
												i = t.groupId,
												a = t.url;
											if (e) try {
												a = e.addDirectives(a)
											} catch (e) {
												this.warn("Could not construct new URL with HLS Delivery Directives: " + e)
											}
											this.log("loading audio-track playlist for id: " + r), this.clearTimer(), this.hls.trigger(n.Events.AUDIO_TRACK_LOADING, {
												url: a,
												id: r,
												groupId: i,
												deliveryDirectives: e || null
											})
										}
									}, u = a, (c = [{
										key: "audioTracks",
										get: function() {
											return this.tracksInGroup
										}
									}, {
										key: "audioTrack",
										get: function() {
											return this.trackId
										},
										set: function(e) {
											this.selectDefaultTrack = !1, this.setAudioTrack(e)
										}
									}]) && o(u.prototype, c), d && o(u, d), a
								}(a.default);
								t.default = u
							},
						"./src/controller/base-playlist-controller.ts":
							/*!****************************************************!*\
							  !*** ./src/controller/base-playlist-controller.ts ***!
							  \****************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return l
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../types/level */ "./src/types/level.ts"),
									a = r( /*! ./level-helper */ "./src/controller/level-helper.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = r( /*! ../errors */ "./src/errors.ts"),
									l = function() {
										function e(e, t) {
											this.hls = void 0, this.timer = -1, this.canLoad = !1, this.retryCount = 0, this.log = void 0, this.warn = void 0, this.log = s.logger.log.bind(s.logger, t + ":"), this.warn = s.logger.warn.bind(s.logger, t + ":"), this.hls = e
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.clearTimer(), this.hls = this.log = this.warn = null
										}, t.onError = function(e, t) {
											t.fatal && t.type === o.ErrorTypes.NETWORK_ERROR && this.clearTimer()
										}, t.clearTimer = function() {
											clearTimeout(this.timer), this.timer = -1
										}, t.startLoad = function() {
											this.canLoad = !0, this.retryCount = 0, this.loadPlaylist()
										}, t.stopLoad = function() {
											this.canLoad = !1, this.clearTimer()
										}, t.switchParams = function(e, t) {
											var r = null == t ? void 0 : t.renditionReports;
											if (r)
												for (var a = 0; a < r.length; a++) {
													var s = r[a],
														o = "" + s.URI;
													if (o === e.substr(-o.length)) {
														var l = parseInt(s["LAST-MSN"]),
															u = parseInt(s["LAST-PART"]);
														if (t && this.hls.config.lowLatencyMode) {
															var c = Math.min(t.age - t.partTarget, t.targetduration);
															void 0 !== u && c > t.partTarget && (u += 1)
														}
														if (Object(n.isFiniteNumber)(l)) return new i.HlsUrlParameters(l, Object(n.isFiniteNumber)(u) ? u : void 0, i.HlsSkip.No)
													}
												}
										}, t.loadPlaylist = function(e) {}, t.shouldLoadTrack = function(e) {
											return this.canLoad && e && !!e.url && (!e.details || e.details.live)
										}, t.playlistLoaded = function(e, t, r) {
											var n = this,
												i = t.details,
												s = t.stats,
												o = s.loading.end ? Math.max(0, self.performance.now() - s.loading.end) : 0;
											if (i.advancedDateTime = Date.now() - o, i.live || null != r && r.live) {
												if (i.reloaded(r), r && this.log("live playlist " + e + " " + (i.advanced ? "REFRESHED " + i.lastPartSn + "-" + i.lastPartIndex : "MISSED")), r && i.fragments.length > 0 && Object(a.mergeDetails)(r, i), !this.canLoad || !i.live) return;
												var l, u = void 0,
													c = void 0;
												if (i.canBlockReload && i.endSN && i.advanced) {
													var d = this.hls.config.lowLatencyMode,
														f = i.lastPartSn,
														h = i.endSN,
														p = i.lastPartIndex,
														g = f === h; - 1 !== p ? (u = g ? h + 1 : f, c = g ? d ? 0 : p : p + 1) : u = h + 1;
													var v = i.age,
														m = v + i.ageHeader,
														y = Math.min(m - i.partTarget, 1.5 * i.targetduration);
													if (y > 0) {
														if (r && y > r.tuneInGoal) this.warn("CDN Tune-in goal increased from: " + r.tuneInGoal + " to: " + y + " with playlist age: " + i.age), y = 0;
														else {
															var E = Math.floor(y / i.targetduration);
															u += E, void 0 !== c && (c += Math.round(y % i.targetduration / i.partTarget)), this.log("CDN Tune-in age: " + i.ageHeader + "s last advanced " + v.toFixed(2) + "s goal: " + y + " skip sn " + E + " to part " + c)
														}
														i.tuneInGoal = y
													}
													if (l = this.getDeliveryDirectives(i, t.deliveryDirectives, u, c), d || !g) return void this.loadPlaylist(l)
												} else l = this.getDeliveryDirectives(i, t.deliveryDirectives, u, c);
												var b = Object(a.computeReloadInterval)(i, s);
												void 0 !== u && i.canBlockReload && (b -= i.partTarget || 1), this.log("reload live playlist " + e + " in " + Math.round(b) + " ms"), this.timer = self.setTimeout((function() {
													return n.loadPlaylist(l)
												}), b)
											} else this.clearTimer()
										}, t.getDeliveryDirectives = function(e, t, r, n) {
											var a = Object(i.getSkipValue)(e, r);
											return null != t && t.skip && e.deltaUpdateFailed && (r = t.msn, n = t.part, a = i.HlsSkip.No), new i.HlsUrlParameters(r, n, a)
										}, t.retryLoadingOrFail = function(e) {
											var t, r = this,
												n = this.hls.config,
												i = this.retryCount < n.levelLoadingMaxRetry;
											if (i)
												if (this.retryCount++, e.details.indexOf("LoadTimeOut") > -1 && null !== (t = e.context) && void 0 !== t && t.deliveryDirectives) this.warn("retry playlist loading #" + this.retryCount + ' after "' + e.details + '"'), this.loadPlaylist();
												else {
													var a = Math.min(Math.pow(2, this.retryCount) * n.levelLoadingRetryDelay, n.levelLoadingMaxRetryTimeout);
													this.timer = self.setTimeout((function() {
														return r.loadPlaylist()
													}), a), this.warn("retry playlist loading #" + this.retryCount + " in " + a + ' ms after "' + e.details + '"')
												}
											else this.warn('cannot recover from error "' + e.details + '"'), this.clearTimer(), e.fatal = !0;
											return i
										}, e
									}()
							},
						"./src/controller/base-stream-controller.ts":
							/*!**************************************************!*\
							  !*** ./src/controller/base-stream-controller.ts ***!
							  \**************************************************/
							/*! exports provided: State, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "State", (function() {
									return T
								})), r.d(t, "default", (function() {
									return S
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../task-loop */ "./src/task-loop.ts"),
									a = r( /*! ./fragment-tracker */ "./src/controller/fragment-tracker.ts"),
									s = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									o = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									l = r( /*! ../events */ "./src/events.ts"),
									u = r( /*! ../errors */ "./src/errors.ts"),
									c = r( /*! ../types/transmuxer */ "./src/types/transmuxer.ts"),
									d = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									f = r( /*! ../utils/discontinuities */ "./src/utils/discontinuities.ts"),
									h = r( /*! ./fragment-finders */ "./src/controller/fragment-finders.ts"),
									p = r( /*! ./level-helper */ "./src/controller/level-helper.ts"),
									g = r( /*! ../loader/fragment-loader */ "./src/loader/fragment-loader.ts"),
									v = r( /*! ../crypt/decrypter */ "./src/crypt/decrypter.ts"),
									m = r( /*! ../utils/time-ranges */ "./src/utils/time-ranges.ts"),
									y = r( /*! ../types/loader */ "./src/types/loader.ts");

								function E(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function b(e, t) {
									return b = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, b(e, t)
								}
								var T = {
										STOPPED: "STOPPED",
										IDLE: "IDLE",
										KEY_LOADING: "KEY_LOADING",
										FRAG_LOADING: "FRAG_LOADING",
										FRAG_LOADING_WAITING_RETRY: "FRAG_LOADING_WAITING_RETRY",
										WAITING_TRACK: "WAITING_TRACK",
										PARSING: "PARSING",
										PARSED: "PARSED",
										BACKTRACKING: "BACKTRACKING",
										ENDED: "ENDED",
										ERROR: "ERROR",
										WAITING_INIT_PTS: "WAITING_INIT_PTS",
										WAITING_LEVEL: "WAITING_LEVEL"
									},
									S = function(e) {
										var t, r;

										function i(t, r, n) {
											var i;
											return (i = e.call(this) || this).hls = void 0, i.fragPrevious = null, i.fragCurrent = null, i.fragmentTracker = void 0, i.transmuxer = null, i._state = T.STOPPED, i.media = void 0, i.mediaBuffer = void 0, i.config = void 0, i.bitrateTest = !1, i.lastCurrentTime = 0, i.nextLoadPosition = 0, i.startPosition = 0, i.loadedmetadata = !1, i.fragLoadError = 0, i.retryDate = 0, i.levels = null, i.fragmentLoader = void 0, i.levelLastLoaded = null, i.startFragRequested = !1, i.decrypter = void 0, i.initPTS = [], i.onvseeking = null, i.onvended = null, i.logPrefix = "", i.log = void 0, i.warn = void 0, i.logPrefix = n, i.log = o.logger.log.bind(o.logger, n + ":"), i.warn = o.logger.warn.bind(o.logger, n + ":"), i.hls = t, i.fragmentLoader = new g.default(t.config), i.fragmentTracker = r, i.config = t.config, i.decrypter = new v.default(t, t.config), t.on(l.Events.KEY_LOADED, i.onKeyLoaded, function(e) {
												if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
												return e
											}(i)), i
										}
										r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, b(t, r);
										var S, k, w, L = i.prototype;
										return L.doTick = function() {
											this.onTickEnd()
										}, L.onTickEnd = function() {}, L.startLoad = function(e) {}, L.stopLoad = function() {
											this.fragmentLoader.abort();
											var e = this.fragCurrent;
											e && this.fragmentTracker.removeFragment(e), this.resetTransmuxer(), this.fragCurrent = null, this.fragPrevious = null, this.clearInterval(), this.clearNextTick(), this.state = T.STOPPED
										}, L._streamEnded = function(e, t) {
											var r = this.fragCurrent,
												n = this.fragmentTracker;
											if (!t.live && r && r.sn >= t.endSN && !e.nextStart) {
												var i = t.partList;
												if (null != i && i.length) {
													var o = i[i.length - 1];
													return s.BufferHelper.isBuffered(this.media, o.start + o.duration / 2)
												}
												var l = n.getState(r);
												return l === a.FragmentState.PARTIAL || l === a.FragmentState.OK
											}
											return !1
										}, L.onMediaAttached = function(e, t) {
											var r = this.media = this.mediaBuffer = t.media;
											this.onvseeking = this.onMediaSeeking.bind(this), this.onvended = this.onMediaEnded.bind(this), r.addEventListener("seeking", this.onvseeking), r.addEventListener("ended", this.onvended);
											var n = this.config;
											this.levels && n.autoStartLoad && this.state === T.STOPPED && this.startLoad(n.startPosition)
										}, L.onMediaDetaching = function() {
											var e = this.media;
											null != e && e.ended && (this.log("MSE detaching and video ended, reset startPosition"), this.startPosition = this.lastCurrentTime = 0), e && (e.removeEventListener("seeking", this.onvseeking), e.removeEventListener("ended", this.onvended), this.onvseeking = this.onvended = null), this.media = this.mediaBuffer = null, this.loadedmetadata = !1, this.fragmentTracker.removeAllFragments(), this.stopLoad()
										}, L.onMediaSeeking = function() {
											var e = this.config,
												t = this.fragCurrent,
												r = this.media,
												i = this.mediaBuffer,
												a = this.state,
												o = r ? r.currentTime : 0,
												l = s.BufferHelper.bufferInfo(i || r, o, e.maxBufferHole);
											if (this.log("media seeking to " + (Object(n.isFiniteNumber)(o) ? o.toFixed(3) : o) + ", state: " + a), a === T.ENDED) this.resetLoadingState();
											else if (t && !l.len) {
												var u = e.maxFragLookUpTolerance,
													c = t.start - u,
													d = o > t.start + t.duration + u;
												(o < c || d) && (d && t.loader && (this.log("seeking outside of buffer while fragment load in progress, cancel fragment load"), t.loader.abort()), this.resetLoadingState())
											}
											r && (this.lastCurrentTime = o), this.loadedmetadata || l.len || (this.nextLoadPosition = this.startPosition = o), this.tickImmediate()
										}, L.onMediaEnded = function() {
											this.startPosition = this.lastCurrentTime = 0
										}, L.onKeyLoaded = function(e, t) {
											if (this.state === T.KEY_LOADING && t.frag === this.fragCurrent && this.levels) {
												this.state = T.IDLE;
												var r = this.levels[t.frag.level].details;
												r && this.loadFragment(t.frag, r, t.frag.start)
											}
										}, L.onHandlerDestroying = function() {
											this.stopLoad(), e.prototype.onHandlerDestroying.call(this)
										}, L.onHandlerDestroyed = function() {
											this.state = T.STOPPED, this.hls.off(l.Events.KEY_LOADED, this.onKeyLoaded, this), this.fragmentLoader && this.fragmentLoader.destroy(), this.decrypter && this.decrypter.destroy(), this.hls = this.log = this.warn = this.decrypter = this.fragmentLoader = this.fragmentTracker = null, e.prototype.onHandlerDestroyed.call(this)
										}, L.loadKey = function(e, t) {
											this.log("Loading key for " + e.sn + " of [" + t.startSN + "-" + t.endSN + "], " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + e.level), this.state = T.KEY_LOADING, this.fragCurrent = e, this.hls.trigger(l.Events.KEY_LOADING, {
												frag: e
											})
										}, L.loadFragment = function(e, t, r) {
											this._loadFragForPlayback(e, t, r)
										}, L._loadFragForPlayback = function(e, t, r) {
											var n = this;
											this._doFragLoad(e, t, r, (function(t) {
												if (n.fragContextChanged(e)) return n.warn("Fragment " + e.sn + (t.part ? " p: " + t.part.index : "") + " of level " + e.level + " was dropped during download."), void n.fragmentTracker.removeFragment(e);
												e.stats.chunkCount++, n._handleFragmentLoadProgress(t)
											})).then((function(t) {
												if (t) {
													n.fragLoadError = 0;
													var r = n.state;
													if (!n.fragContextChanged(e)) return "payload" in t && (n.log("Loaded fragment " + e.sn + " of level " + e.level), n.hls.trigger(l.Events.FRAG_LOADED, t), n.state === T.BACKTRACKING) ? (n.fragmentTracker.backtrack(e, t), void n.resetFragmentLoading(e)) : void n._handleFragmentLoadComplete(t);
													(r === T.FRAG_LOADING || r === T.BACKTRACKING || !n.fragCurrent && r === T.PARSING) && (n.fragmentTracker.removeFragment(e), n.state = T.IDLE)
												}
											})).catch((function(t) {
												n.warn(t), n.resetFragmentLoading(e)
											}))
										}, L.flushMainBuffer = function(e, t, r) {
											if (void 0 === r && (r = null), e - t) {
												var n = {
													startOffset: e,
													endOffset: t,
													type: r
												};
												this.fragLoadError = 0, this.hls.trigger(l.Events.BUFFER_FLUSHING, n)
											}
										}, L._loadInitSegment = function(e) {
											var t = this;
											this._doFragLoad(e).then((function(r) {
												if (!r || t.fragContextChanged(e) || !t.levels) throw new Error("init load aborted");
												return r
											})).then((function(r) {
												var n = t.hls,
													i = r.payload,
													a = e.decryptdata;
												if (i && i.byteLength > 0 && a && a.key && a.iv && "AES-128" === a.method) {
													var s = self.performance.now();
													return t.decrypter.webCryptoDecrypt(new Uint8Array(i), a.key.buffer, a.iv.buffer).then((function(t) {
														var i = self.performance.now();
														return n.trigger(l.Events.FRAG_DECRYPTED, {
															frag: e,
															payload: t,
															stats: {
																tstart: s,
																tdecrypt: i
															}
														}), r.payload = t, r
													}))
												}
												return r
											})).then((function(r) {
												var n = t.fragCurrent,
													i = t.hls,
													a = t.levels;
												if (!a) throw new Error("init load aborted, missing levels");
												var s = a[e.level].details;
												console.assert(s, "Level details are defined when init segment is loaded");
												var o = e.stats;
												t.state = T.IDLE, t.fragLoadError = 0, e.data = new Uint8Array(r.payload), o.parsing.start = o.buffering.start = self.performance.now(), o.parsing.end = o.buffering.end = self.performance.now(), r.frag === n && i.trigger(l.Events.FRAG_BUFFERED, {
													stats: o,
													frag: n,
													part: null,
													id: e.type
												}), t.tick()
											})).catch((function(r) {
												t.warn(r), t.resetFragmentLoading(e)
											}))
										}, L.fragContextChanged = function(e) {
											var t = this.fragCurrent;
											return !e || !t || e.level !== t.level || e.sn !== t.sn || e.urlId !== t.urlId
										}, L.fragBufferedComplete = function(e, t) {
											var r = this.mediaBuffer ? this.mediaBuffer : this.media;
											this.log("Buffered " + e.type + " sn: " + e.sn + (t ? " part: " + t.index : "") + " of " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + " " + e.level + " " + m.default.toString(s.BufferHelper.getBuffered(r))), this.state = T.IDLE, this.tick()
										}, L._handleFragmentLoadComplete = function(e) {
											var t = this.transmuxer;
											if (t) {
												var r = e.frag,
													n = e.part,
													i = e.partsLoaded,
													a = !i || 0 === i.length || i.some((function(e) {
														return !e
													})),
													s = new c.ChunkMetadata(r.level, r.sn, r.stats.chunkCount + 1, 0, n ? n.index : -1, !a);
												t.flush(s)
											}
										}, L._handleFragmentLoadProgress = function(e) {}, L._doFragLoad = function(e, t, r, i) {
											var a = this;
											if (void 0 === r && (r = null), !this.levels) throw new Error("frag load aborted, missing levels");
											if (r = Math.max(e.start, r || 0), this.config.lowLatencyMode && t) {
												var s = t.partList;
												if (s && i) {
													r > e.end && t.fragmentHint && (e = t.fragmentHint);
													var o = this.getNextPart(s, e, r);
													if (o > -1) {
														var u = s[o];
														return this.log("Loading part sn: " + e.sn + " p: " + u.index + " cc: " + e.cc + " of playlist [" + t.startSN + "-" + t.endSN + "] parts [0-" + o + "-" + (s.length - 1) + "] " + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + e.level + ", target: " + parseFloat(r.toFixed(3))), this.nextLoadPosition = u.start + u.duration, this.state = T.FRAG_LOADING, this.hls.trigger(l.Events.FRAG_LOADING, {
															frag: e,
															part: s[o],
															targetBufferTime: r
														}), this.doFragPartsLoad(e, s, o, i).catch((function(e) {
															return a.handleFragLoadError(e)
														}))
													}
													if (!e.url || this.loadedEndOfParts(s, r)) return Promise.resolve(null)
												}
											}
											return this.log("Loading fragment " + e.sn + " cc: " + e.cc + " " + (t ? "of [" + t.startSN + "-" + t.endSN + "] " : "") + ("[stream-controller]" === this.logPrefix ? "level" : "track") + ": " + e.level + ", target: " + parseFloat(r.toFixed(3))), Object(n.isFiniteNumber)(e.sn) && !this.bitrateTest && (this.nextLoadPosition = e.start + e.duration), this.state = T.FRAG_LOADING, this.hls.trigger(l.Events.FRAG_LOADING, {
												frag: e,
												targetBufferTime: r
											}), this.fragmentLoader.load(e, i).catch((function(e) {
												return a.handleFragLoadError(e)
											}))
										}, L.doFragPartsLoad = function(e, t, r, n) {
											var i = this;
											return new Promise((function(a, s) {
												var o = [];
												! function r(u) {
													var c = t[u];
													i.fragmentLoader.loadPart(e, c, n).then((function(n) {
														o[c.index] = n;
														var s = n.part;
														i.hls.trigger(l.Events.FRAG_LOADED, n);
														var d = t[u + 1];
														if (!d || d.fragment !== e) return a({
															frag: e,
															part: s,
															partsLoaded: o
														});
														r(u + 1)
													})).catch(s)
												}(r)
											}))
										}, L.handleFragLoadError = function(e) {
											var t = e.data;
											return t && t.details === u.ErrorDetails.INTERNAL_ABORTED ? this.handleFragLoadAborted(t.frag, t.part) : this.hls.trigger(l.Events.ERROR, t), null
										}, L._handleTransmuxerFlush = function(e) {
											var t = this.getCurrentContext(e);
											if (t && this.state === T.PARSING) {
												var r = t.frag,
													n = t.part,
													i = t.level,
													a = self.performance.now();
												r.stats.parsing.end = a, n && (n.stats.parsing.end = a), this.updateLevelTiming(r, n, i, e.partial)
											} else this.fragCurrent || (this.state = T.IDLE)
										}, L.getCurrentContext = function(e) {
											var t = this.levels,
												r = e.level,
												n = e.sn,
												i = e.part;
											if (!t || !t[r]) return this.warn("Levels object was unset while buffering fragment " + n + " of level " + r + ". The current chunk will not be buffered."), null;
											var a = t[r],
												s = i > -1 ? Object(p.getPartWith)(a, n, i) : null,
												o = s ? s.fragment : Object(p.getFragmentWithSN)(a, n, this.fragCurrent);
											return o ? {
												frag: o,
												part: s,
												level: a
											} : null
										}, L.bufferFragmentData = function(e, t, r, n) {
											if (e && this.state === T.PARSING) {
												var i = e.data1,
													a = e.data2,
													s = i;
												if (i && a && (s = Object(d.appendUint8Array)(i, a)), s && s.length) {
													var o = {
														type: e.type,
														frag: t,
														part: r,
														chunkMeta: n,
														parent: t.type,
														data: s
													};
													this.hls.trigger(l.Events.BUFFER_APPENDING, o), e.dropped && e.independent && !r && this.flushBufferGap(t)
												}
											}
										}, L.flushBufferGap = function(e) {
											var t = this.media;
											if (t)
												if (s.BufferHelper.isBuffered(t, t.currentTime)) {
													var r = t.currentTime,
														n = s.BufferHelper.bufferInfo(t, r, 0),
														i = e.duration,
														a = Math.min(2 * this.config.maxFragLookUpTolerance, .25 * i),
														o = Math.max(Math.min(e.start - a, n.end - a), r + a);
													e.start - o > a && this.flushMainBuffer(o, e.start)
												} else this.flushMainBuffer(0, e.start)
										}, L.getFwdBufferInfo = function(e, t) {
											var r = this.config,
												i = this.getLoadPosition();
											if (!Object(n.isFiniteNumber)(i)) return null;
											var a = s.BufferHelper.bufferInfo(e, i, r.maxBufferHole);
											if (0 === a.len && void 0 !== a.nextStart) {
												var o = this.fragmentTracker.getBufferedFrag(i, t);
												if (o && a.nextStart < o.end) return s.BufferHelper.bufferInfo(e, i, Math.max(a.nextStart, r.maxBufferHole))
											}
											return a
										}, L.getMaxBufferLength = function(e) {
											var t, r = this.config;
											return t = e ? Math.max(8 * r.maxBufferSize / e, r.maxBufferLength) : r.maxBufferLength, Math.min(t, r.maxMaxBufferLength)
										}, L.reduceMaxBufferLength = function(e) {
											var t = this.config,
												r = e || t.maxBufferLength;
											return t.maxMaxBufferLength >= r && (t.maxMaxBufferLength /= 2, this.warn("Reduce max buffer length to " + t.maxMaxBufferLength + "s"), !0)
										}, L.getNextFragment = function(e, t) {
											var r, n, i = t.fragments,
												a = i.length;
											if (!a) return null;
											var s, o = this.config,
												l = i[0].start;
											if (t.live) {
												var u = o.initialLiveManifestSize;
												if (a < u) return this.warn("Not enough fragments to start playback (have: " + a + ", need: " + u + ")"), null;
												t.PTSKnown || this.startFragRequested || -1 !== this.startPosition || (s = this.getInitialLiveFragment(t, i), this.startPosition = s ? this.hls.liveSyncPosition || s.start : e)
											} else e <= l && (s = i[0]);
											if (!s) {
												var c = o.lowLatencyMode ? t.partEnd : t.fragmentEnd;
												s = this.getFragmentAtPosition(e, c, t)
											}
											return null === (r = s) || void 0 === r || !r.initSegment || null !== (n = s) && void 0 !== n && n.initSegment.data || this.bitrateTest || (s = s.initSegment), s
										}, L.getNextPart = function(e, t, r) {
											for (var n = -1, i = !1, a = !0, s = 0, o = e.length; s < o; s++) {
												var l = e[s];
												if (a = a && !l.independent, n > -1 && r < l.start) break;
												var u = l.loaded;
												!u && (i || l.independent || a) && l.fragment === t && (n = s), i = u
											}
											return n
										}, L.loadedEndOfParts = function(e, t) {
											var r = e[e.length - 1];
											return r && t > r.start && r.loaded
										}, L.getInitialLiveFragment = function(e, t) {
											var r = this.fragPrevious,
												n = null;
											if (r) {
												if (e.hasProgramDateTime && (this.log("Live playlist, switching playlist, load frag with same PDT: " + r.programDateTime), n = Object(h.findFragmentByPDT)(t, r.endProgramDateTime, this.config.maxFragLookUpTolerance)), !n) {
													var i = r.sn + 1;
													if (i >= e.startSN && i <= e.endSN) {
														var a = t[i - e.startSN];
														r.cc === a.cc && (n = a, this.log("Live playlist, switching playlist, load frag with next SN: " + n.sn))
													}
													n || (n = Object(h.findFragWithCC)(t, r.cc)) && this.log("Live playlist, switching playlist, load frag with same CC: " + n.sn)
												}
											} else {
												var s = this.hls.liveSyncPosition;
												null !== s && (n = this.getFragmentAtPosition(s, this.bitrateTest ? e.fragmentEnd : e.edge, e))
											}
											return n
										}, L.getFragmentAtPosition = function(e, t, r) {
											var n, i = this.config,
												s = this.fragPrevious,
												o = r.fragments,
												l = r.endSN,
												u = r.fragmentHint,
												c = i.maxFragLookUpTolerance,
												d = !!(i.lowLatencyMode && r.partList && u);
											if (d && u && !this.bitrateTest && (o = o.concat(u), l = u.sn), e < t) {
												var f = e > t - c ? 0 : c;
												n = Object(h.findFragmentByPTS)(s, o, e, f)
											} else n = o[o.length - 1];
											if (n) {
												var p = n.sn - r.startSN,
													g = s && n.level === s.level,
													v = o[p + 1];
												if (this.fragmentTracker.getState(n) === a.FragmentState.BACKTRACKED) {
													n = null;
													for (var m = p; o[m] && this.fragmentTracker.getState(o[m]) === a.FragmentState.BACKTRACKED;) n = s ? o[m--] : o[--m];
													n || (n = v)
												} else s && n.sn === s.sn && !d && g && (n.sn < l && this.fragmentTracker.getState(v) !== a.FragmentState.OK ? (this.log("SN " + n.sn + " just loaded, load next one: " + v.sn), n = v) : n = null)
											}
											return n
										}, L.synchronizeToLiveEdge = function(e) {
											var t = this.config,
												r = this.media;
											if (r) {
												var n = this.hls.liveSyncPosition,
													i = r.currentTime,
													a = e.fragments[0].start,
													s = e.edge,
													o = i >= a - t.maxFragLookUpTolerance && i <= s;
												if (null !== n && r.duration > n && (i < n || !o)) {
													var l = void 0 !== t.liveMaxLatencyDuration ? t.liveMaxLatencyDuration : t.liveMaxLatencyDurationCount * e.targetduration;
													(!o && r.readyState < 4 || i < s - l) && (this.loadedmetadata || (this.nextLoadPosition = n), r.readyState && (this.warn("Playback: " + i.toFixed(3) + " is located too far from the end of live sliding playlist: " + s + ", reset currentTime to : " + n.toFixed(3)), r.currentTime = n))
												}
											}
										}, L.alignPlaylists = function(e, t) {
											var r = this.levels,
												i = this.levelLastLoaded,
												a = this.fragPrevious,
												s = null !== i ? r[i] : null,
												o = e.fragments.length;
											if (!o) return this.warn("No fragments in live playlist"), 0;
											var l = e.fragments[0].start,
												u = !t,
												c = e.alignedSliding && Object(n.isFiniteNumber)(l);
											if (u || !c && !l) {
												Object(f.alignStream)(a, s, e);
												var d = e.fragments[0].start;
												return this.log("Live playlist sliding: " + d.toFixed(2) + " start-sn: " + (t ? t.startSN : "na") + "->" + e.startSN + " prev-sn: " + (a ? a.sn : "na") + " fragments: " + o), d
											}
											return l
										}, L.waitForCdnTuneIn = function(e) {
											return e.live && e.canBlockReload && e.tuneInGoal > Math.max(e.partHoldBack, 3 * e.partTarget)
										}, L.setStartPosition = function(e, t) {
											var r = this.startPosition;
											if (r < t && (r = -1), -1 === r || -1 === this.lastCurrentTime) {
												var i = e.startTimeOffset;
												Object(n.isFiniteNumber)(i) ? (r = t + i, i < 0 && (r += e.totalduration), r = Math.min(Math.max(t, r), t + e.totalduration), this.log("Start time offset " + i + " found in playlist, adjust startPosition to " + r), this.startPosition = r) : e.live ? r = this.hls.liveSyncPosition || t : this.startPosition = r = 0, this.lastCurrentTime = r
											}
											this.nextLoadPosition = r
										}, L.getLoadPosition = function() {
											var e = this.media,
												t = 0;
											return this.loadedmetadata && e ? t = e.currentTime : this.nextLoadPosition && (t = this.nextLoadPosition), t
										}, L.handleFragLoadAborted = function(e, t) {
											this.transmuxer && "initSegment" !== e.sn && e.stats.aborted && (this.warn("Fragment " + e.sn + (t ? " part" + t.index : "") + " of level " + e.level + " was aborted"), this.resetFragmentLoading(e))
										}, L.resetFragmentLoading = function(e) {
											this.fragCurrent && this.fragContextChanged(e) || (this.state = T.IDLE)
										}, L.onFragmentOrKeyLoadError = function(e, t) {
											if (!t.fatal) {
												var r = t.frag;
												if (r && r.type === e) {
													var n = this.fragCurrent;
													console.assert(n && r.sn === n.sn && r.level === n.level && r.urlId === n.urlId, "Frag load error must match current frag to retry");
													var i = this.config;
													if (this.fragLoadError + 1 <= i.fragLoadingMaxRetry) {
														if (this.resetLiveStartWhenNotLoaded(r.level)) return;
														var a = Math.min(Math.pow(2, this.fragLoadError) * i.fragLoadingRetryDelay, i.fragLoadingMaxRetryTimeout);
														this.warn("Fragment " + r.sn + " of " + e + " " + r.level + " failed to load, retrying in " + a + "ms"), this.retryDate = self.performance.now() + a, this.fragLoadError++, this.state = T.FRAG_LOADING_WAITING_RETRY
													} else t.levelRetry ? (e === y.PlaylistLevelType.AUDIO && (this.fragCurrent = null), this.fragLoadError = 0, this.state = T.IDLE) : (o.logger.error(t.details + " reaches max retry, redispatch as fatal ..."), t.fatal = !0, this.hls.stopLoad(), this.state = T.ERROR)
												}
											}
										}, L.afterBufferFlushed = function(e, t, r) {
											if (e) {
												var n = s.BufferHelper.getBuffered(e);
												this.fragmentTracker.detectEvictedFragments(t, n, r), this.state === T.ENDED && this.resetLoadingState()
											}
										}, L.resetLoadingState = function() {
											this.fragCurrent = null, this.fragPrevious = null, this.state = T.IDLE
										}, L.resetLiveStartWhenNotLoaded = function(e) {
											if (!this.loadedmetadata) {
												this.startFragRequested = !1;
												var t = this.levels ? this.levels[e].details : null;
												if (null != t && t.live) return this.startPosition = -1, this.setStartPosition(t, 0), this.resetLoadingState(), !0;
												this.nextLoadPosition = this.startPosition
											}
											return !1
										}, L.updateLevelTiming = function(e, t, r, n) {
											var i = this,
												a = r.details;
											console.assert(!!a, "level.details must be defined"), Object.keys(e.elementaryStreams).reduce((function(t, s) {
												var o = e.elementaryStreams[s];
												if (o) {
													var u = o.endPTS - o.startPTS;
													if (u <= 0) return i.warn("Could not parse fragment " + e.sn + " " + s + " duration reliably (" + u + ") resetting transmuxer to fallback to playlist timing"), i.resetTransmuxer(), t || !1;
													var c = n ? 0 : Object(p.updateFragPTSDTS)(a, e, o.startPTS, o.endPTS, o.startDTS, o.endDTS);
													return i.hls.trigger(l.Events.LEVEL_PTS_UPDATED, {
														details: a,
														level: r,
														drift: c,
														type: s,
														frag: e,
														start: o.startPTS,
														end: o.endPTS
													}), !0
												}
												return t
											}), !1) ? (this.state = T.PARSED, this.hls.trigger(l.Events.FRAG_PARSED, {
												frag: e,
												part: t
											})) : this.resetLoadingState()
										}, L.resetTransmuxer = function() {
											this.transmuxer && (this.transmuxer.destroy(), this.transmuxer = null)
										}, S = i, (k = [{
											key: "state",
											get: function() {
												return this._state
											},
											set: function(e) {
												var t = this._state;
												t !== e && (this._state = e, this.log(t + "->" + e))
											}
										}]) && E(S.prototype, k), w && E(S, w), i
									}(i.default)
							},
						"./src/controller/buffer-controller.ts":
							/*!*********************************************!*\
							  !*** ./src/controller/buffer-controller.ts ***!
							  \*********************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return h
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									s = r( /*! ../errors */ "./src/errors.ts"),
									o = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									l = r( /*! ../utils/mediasource-helper */ "./src/utils/mediasource-helper.ts"),
									u = r( /*! ../loader/fragment */ "./src/loader/fragment.ts"),
									c = r( /*! ./buffer-operation-queue */ "./src/controller/buffer-operation-queue.ts"),
									d = Object(l.getMediaSource)(),
									f = /([ha]vc.)(?:\.[^.,]+)+/,
									h = function() {
										function e(e) {
											var t = this;
											this.details = null, this._objectUrl = null, this.operationQueue = void 0, this.listeners = void 0, this.hls = void 0, this.bufferCodecEventsExpected = 0, this._bufferCodecEventsTotal = 0, this.media = null, this.mediaSource = null, this.appendError = 0, this.tracks = {}, this.pendingTracks = {}, this.sourceBuffer = void 0, this._onMediaSourceOpen = function() {
												var e = t.hls,
													r = t.media,
													n = t.mediaSource;
												a.logger.log("[buffer-controller]: Media source opened"), r && (t.updateMediaElementDuration(), e.trigger(i.Events.MEDIA_ATTACHED, {
													media: r
												})), n && n.removeEventListener("sourceopen", t._onMediaSourceOpen), t.checkPendingTracks()
											}, this._onMediaSourceClose = function() {
												a.logger.log("[buffer-controller]: Media source closed")
											}, this._onMediaSourceEnded = function() {
												a.logger.log("[buffer-controller]: Media source ended")
											}, this.hls = e, this._initSourceBuffer(), this.registerListeners()
										}
										var t = e.prototype;
										return t.hasSourceTypes = function() {
											return this.getSourceBufferTypes().length > 0 || Object.keys(this.pendingTracks).length > 0
										}, t.destroy = function() {
											this.unregisterListeners(), this.details = null
										}, t.registerListeners = function() {
											var e = this.hls;
											e.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(i.Events.BUFFER_RESET, this.onBufferReset, this), e.on(i.Events.BUFFER_APPENDING, this.onBufferAppending, this), e.on(i.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.on(i.Events.BUFFER_EOS, this.onBufferEos, this), e.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), e.on(i.Events.LEVEL_UPDATED, this.onLevelUpdated, this), e.on(i.Events.FRAG_PARSED, this.onFragParsed, this), e.on(i.Events.FRAG_CHANGED, this.onFragChanged, this)
										}, t.unregisterListeners = function() {
											var e = this.hls;
											e.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(i.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(i.Events.BUFFER_RESET, this.onBufferReset, this), e.off(i.Events.BUFFER_APPENDING, this.onBufferAppending, this), e.off(i.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.off(i.Events.BUFFER_EOS, this.onBufferEos, this), e.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), e.off(i.Events.LEVEL_UPDATED, this.onLevelUpdated, this), e.off(i.Events.FRAG_PARSED, this.onFragParsed, this), e.off(i.Events.FRAG_CHANGED, this.onFragChanged, this)
										}, t._initSourceBuffer = function() {
											this.sourceBuffer = {}, this.operationQueue = new c.default(this.sourceBuffer), this.listeners = {
												audio: [],
												video: [],
												audiovideo: []
											}
										}, t.onManifestParsed = function(e, t) {
											var r = 2;
											(t.audio && !t.video || !t.altAudio) && (r = 1), this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = r, this.details = null, a.logger.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
										}, t.onMediaAttaching = function(e, t) {
											var r = this.media = t.media;
											if (r && d) {
												var n = this.mediaSource = new d;
												n.addEventListener("sourceopen", this._onMediaSourceOpen), n.addEventListener("sourceended", this._onMediaSourceEnded), n.addEventListener("sourceclose", this._onMediaSourceClose), r.src = self.URL.createObjectURL(n), this._objectUrl = r.src
											}
										}, t.onMediaDetaching = function() {
											var e = this.media,
												t = this.mediaSource,
												r = this._objectUrl;
											if (t) {
												if (a.logger.log("[buffer-controller]: media source detaching"), "open" === t.readyState) try {
													t.endOfStream()
												} catch (e) {
													a.logger.warn("[buffer-controller]: onMediaDetaching: " + e.message + " while calling endOfStream")
												}
												this.onBufferReset(), t.removeEventListener("sourceopen", this._onMediaSourceOpen), t.removeEventListener("sourceended", this._onMediaSourceEnded), t.removeEventListener("sourceclose", this._onMediaSourceClose), e && (r && self.URL.revokeObjectURL(r), e.src === r ? (e.removeAttribute("src"), e.load()) : a.logger.warn("[buffer-controller]: media.src was changed by a third party - skip cleanup")), this.mediaSource = null, this.media = null, this._objectUrl = null, this.bufferCodecEventsExpected = this._bufferCodecEventsTotal, this.pendingTracks = {}, this.tracks = {}
											}
											this.hls.trigger(i.Events.MEDIA_DETACHED, void 0)
										}, t.onBufferReset = function() {
											var e = this;
											this.getSourceBufferTypes().forEach((function(t) {
												var r = e.sourceBuffer[t];
												try {
													r && (e.removeBufferListeners(t), e.mediaSource && e.mediaSource.removeSourceBuffer(r), e.sourceBuffer[t] = void 0)
												} catch (e) {
													a.logger.warn("[buffer-controller]: Failed to reset the " + t + " buffer", e)
												}
											})), this._initSourceBuffer()
										}, t.onBufferCodecs = function(e, t) {
											var r = this,
												n = this.getSourceBufferTypes().length;
											Object.keys(t).forEach((function(e) {
												if (n) {
													var i = r.tracks[e];
													if (i && "function" == typeof i.buffer.changeType) {
														var a = t[e],
															s = a.codec,
															o = a.levelCodec,
															l = a.container;
														if ((i.levelCodec || i.codec).replace(f, "$1") !== (o || s).replace(f, "$1")) {
															var u = l + ";codecs=" + (o || s);
															r.appendChangeType(e, u)
														}
													}
												} else r.pendingTracks[e] = t[e]
											})), n || (this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0), this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
										}, t.appendChangeType = function(e, t) {
											var r = this,
												n = this.operationQueue,
												i = {
													execute: function() {
														var i = r.sourceBuffer[e];
														i && (a.logger.log("[buffer-controller]: changing " + e + " sourceBuffer type to " + t), i.changeType(t)), n.shiftAndExecuteNext(e)
													},
													onStart: function() {},
													onComplete: function() {},
													onError: function(t) {
														a.logger.warn("[buffer-controller]: Failed to change " + e + " SourceBuffer type", t)
													}
												};
											n.append(i, e)
										}, t.onBufferAppending = function(e, t) {
											var r = this,
												n = this.hls,
												l = this.operationQueue,
												u = this.tracks,
												c = t.data,
												d = t.type,
												f = t.frag,
												h = t.part,
												p = t.chunkMeta,
												g = p.buffering[d],
												v = self.performance.now();
											g.start = v;
											var m = f.stats.buffering,
												y = h ? h.stats.buffering : null;
											0 === m.start && (m.start = v), y && 0 === y.start && (y.start = v);
											var E = u.audio,
												b = "audio" === d && 1 === p.id && "audio/mpeg" === (null == E ? void 0 : E.container),
												T = {
													execute: function() {
														if (g.executeStart = self.performance.now(), b) {
															var e = r.sourceBuffer[d];
															if (e) {
																var t = f.start - e.timestampOffset;
																Math.abs(t) >= .1 && (a.logger.log("[buffer-controller]: Updating audio SourceBuffer timestampOffset to " + f.start + " (delta: " + t + ") sn: " + f.sn + ")"), e.timestampOffset = f.start)
															}
														}
														r.appendExecutor(c, d)
													},
													onStart: function() {},
													onComplete: function() {
														var e = self.performance.now();
														g.executeEnd = g.end = e, 0 === m.first && (m.first = e), y && 0 === y.first && (y.first = e);
														var t = r.sourceBuffer,
															n = {};
														for (var a in t) n[a] = o.BufferHelper.getBuffered(t[a]);
														r.appendError = 0, r.hls.trigger(i.Events.BUFFER_APPENDED, {
															type: d,
															frag: f,
															part: h,
															chunkMeta: p,
															parent: f.type,
															timeRanges: n
														})
													},
													onError: function(e) {
														a.logger.error("[buffer-controller]: Error encountered while trying to append to the " + d + " SourceBuffer", e);
														var t = {
															type: s.ErrorTypes.MEDIA_ERROR,
															parent: f.type,
															details: s.ErrorDetails.BUFFER_APPEND_ERROR,
															err: e,
															fatal: !1
														};
														e.code === DOMException.QUOTA_EXCEEDED_ERR ? t.details = s.ErrorDetails.BUFFER_FULL_ERROR : (r.appendError++, t.details = s.ErrorDetails.BUFFER_APPEND_ERROR, r.appendError > n.config.appendErrorMaxRetry && (a.logger.error("[buffer-controller]: Failed " + n.config.appendErrorMaxRetry + " times to append segment in sourceBuffer"), t.fatal = !0)), n.trigger(i.Events.ERROR, t)
													}
												};
											l.append(T, d)
										}, t.onBufferFlushing = function(e, t) {
											var r = this,
												n = this.operationQueue,
												s = function(e) {
													return {
														execute: r.removeExecutor.bind(r, e, t.startOffset, t.endOffset),
														onStart: function() {},
														onComplete: function() {
															r.hls.trigger(i.Events.BUFFER_FLUSHED, {
																type: e
															})
														},
														onError: function(t) {
															a.logger.warn("[buffer-controller]: Failed to remove from " + e + " SourceBuffer", t)
														}
													}
												};
											t.type ? n.append(s(t.type), t.type) : this.getSourceBufferTypes().forEach((function(e) {
												n.append(s(e), e)
											}))
										}, t.onFragParsed = function(e, t) {
											var r = this,
												n = t.frag,
												s = t.part,
												o = [],
												l = s ? s.elementaryStreams : n.elementaryStreams;
											l[u.ElementaryStreamTypes.AUDIOVIDEO] ? o.push("audiovideo") : (l[u.ElementaryStreamTypes.AUDIO] && o.push("audio"), l[u.ElementaryStreamTypes.VIDEO] && o.push("video")), 0 === o.length && a.logger.warn("Fragments must have at least one ElementaryStreamType set. type: " + n.type + " level: " + n.level + " sn: " + n.sn), this.blockBuffers((function() {
												var e = self.performance.now();
												n.stats.buffering.end = e, s && (s.stats.buffering.end = e);
												var t = s ? s.stats : n.stats;
												r.hls.trigger(i.Events.FRAG_BUFFERED, {
													frag: n,
													part: s,
													stats: t,
													id: n.type
												})
											}), o)
										}, t.onFragChanged = function(e, t) {
											this.flushBackBuffer()
										}, t.onBufferEos = function(e, t) {
											var r = this;
											this.getSourceBufferTypes().reduce((function(e, n) {
												var i = r.sourceBuffer[n];
												return t.type && t.type !== n || i && !i.ended && (i.ended = !0, a.logger.log("[buffer-controller]: " + n + " sourceBuffer now EOS")), e && !(i && !i.ended)
											}), !0) && this.blockBuffers((function() {
												var e = r.mediaSource;
												e && "open" === e.readyState && e.endOfStream()
											}))
										}, t.onLevelUpdated = function(e, t) {
											var r = t.details;
											r.fragments.length && (this.details = r, this.getSourceBufferTypes().length ? this.blockBuffers(this.updateMediaElementDuration.bind(this)) : this.updateMediaElementDuration())
										}, t.flushBackBuffer = function() {
											var e = this.hls,
												t = this.details,
												r = this.media,
												a = this.sourceBuffer;
											if (r && null !== t) {
												var s = this.getSourceBufferTypes();
												if (s.length) {
													var l = t.live && null !== e.config.liveBackBufferLength ? e.config.liveBackBufferLength : e.config.backBufferLength;
													if (Object(n.isFiniteNumber)(l) && !(l < 0)) {
														var u = r.currentTime,
															c = t.levelTargetDuration,
															d = Math.max(l, c),
															f = Math.floor(u / c) * c - d;
														s.forEach((function(r) {
															var n = a[r];
															if (n) {
																var s = o.BufferHelper.getBuffered(n);
																s.length > 0 && f > s.start(0) && (e.trigger(i.Events.BACK_BUFFER_REACHED, {
																	bufferEnd: f
																}), t.live && e.trigger(i.Events.LIVE_BACK_BUFFER_REACHED, {
																	bufferEnd: f
																}), e.trigger(i.Events.BUFFER_FLUSHING, {
																	startOffset: 0,
																	endOffset: f,
																	type: r
																}))
															}
														}))
													}
												}
											}
										}, t.updateMediaElementDuration = function() {
											if (this.details && this.media && this.mediaSource && "open" === this.mediaSource.readyState) {
												var e = this.details,
													t = this.hls,
													r = this.media,
													i = this.mediaSource,
													s = e.fragments[0].start + e.totalduration,
													o = r.duration,
													l = Object(n.isFiniteNumber)(i.duration) ? i.duration : 0;
												e.live && t.config.liveDurationInfinity ? (a.logger.log("[buffer-controller]: Media Source duration is set to Infinity"), i.duration = 1 / 0, this.updateSeekableRange(e)) : (s > l && s > o || !Object(n.isFiniteNumber)(o)) && (a.logger.log("[buffer-controller]: Updating Media Source duration to " + s.toFixed(3)), i.duration = s)
											}
										}, t.updateSeekableRange = function(e) {
											var t = this.mediaSource,
												r = e.fragments;
											if (r.length && e.live && null != t && t.setLiveSeekableRange) {
												var n = Math.max(0, r[0].start),
													i = Math.max(n, n + e.totalduration);
												t.setLiveSeekableRange(n, i)
											}
										}, t.checkPendingTracks = function() {
											var e = this.bufferCodecEventsExpected,
												t = this.operationQueue,
												r = this.pendingTracks,
												n = Object.keys(r).length;
											if (n && !e || 2 === n) {
												this.createSourceBuffers(r), this.pendingTracks = {};
												var a = this.getSourceBufferTypes();
												if (0 === a.length) return void this.hls.trigger(i.Events.ERROR, {
													type: s.ErrorTypes.MEDIA_ERROR,
													details: s.ErrorDetails.BUFFER_INCOMPATIBLE_CODECS_ERROR,
													fatal: !0,
													reason: "could not create source buffer for media codec(s)"
												});
												a.forEach((function(e) {
													t.executeNext(e)
												}))
											}
										}, t.createSourceBuffers = function(e) {
											var t = this.sourceBuffer,
												r = this.mediaSource;
											if (!r) throw Error("createSourceBuffers called when mediaSource was null");
											var n = 0;
											for (var o in e)
												if (!t[o]) {
													var l = e[o];
													if (!l) throw Error("source buffer exists for track " + o + ", however track does not");
													var u = l.levelCodec || l.codec,
														c = l.container + ";codecs=" + u;
													a.logger.log("[buffer-controller]: creating sourceBuffer(" + c + ")");
													try {
														var d = t[o] = r.addSourceBuffer(c),
															f = o;
														this.addBufferListener(f, "updatestart", this._onSBUpdateStart), this.addBufferListener(f, "updateend", this._onSBUpdateEnd), this.addBufferListener(f, "error", this._onSBUpdateError), this.tracks[o] = {
															buffer: d,
															codec: u,
															container: l.container,
															levelCodec: l.levelCodec,
															id: l.id
														}, n++
													} catch (e) {
														a.logger.error("[buffer-controller]: error while trying to add sourceBuffer: " + e.message), this.hls.trigger(i.Events.ERROR, {
															type: s.ErrorTypes.MEDIA_ERROR,
															details: s.ErrorDetails.BUFFER_ADD_CODEC_ERROR,
															fatal: !1,
															error: e,
															mimeType: c
														})
													}
												} n && this.hls.trigger(i.Events.BUFFER_CREATED, {
												tracks: this.tracks
											})
										}, t._onSBUpdateStart = function(e) {
											this.operationQueue.current(e).onStart()
										}, t._onSBUpdateEnd = function(e) {
											var t = this.operationQueue;
											t.current(e).onComplete(), t.shiftAndExecuteNext(e)
										}, t._onSBUpdateError = function(e, t) {
											a.logger.error("[buffer-controller]: " + e + " SourceBuffer error", t), this.hls.trigger(i.Events.ERROR, {
												type: s.ErrorTypes.MEDIA_ERROR,
												details: s.ErrorDetails.BUFFER_APPENDING_ERROR,
												fatal: !1
											});
											var r = this.operationQueue.current(e);
											r && r.onError(t)
										}, t.removeExecutor = function(e, t, r) {
											var i = this.media,
												s = this.mediaSource,
												o = this.operationQueue,
												l = this.sourceBuffer[e];
											if (!i || !s || !l) return a.logger.warn("[buffer-controller]: Attempting to remove from the " + e + " SourceBuffer, but it does not exist"), void o.shiftAndExecuteNext(e);
											var u = Object(n.isFiniteNumber)(i.duration) ? i.duration : 1 / 0,
												c = Object(n.isFiniteNumber)(s.duration) ? s.duration : 1 / 0,
												d = Math.max(0, t),
												f = Math.min(r, u, c);
											f > d ? (a.logger.log("[buffer-controller]: Removing [" + d + "," + f + "] from the " + e + " SourceBuffer"), console.assert(!l.updating, e + " sourceBuffer must not be updating"), l.remove(d, f)) : o.shiftAndExecuteNext(e)
										}, t.appendExecutor = function(e, t) {
											var r = this.operationQueue,
												n = this.sourceBuffer[t];
											if (!n) return a.logger.warn("[buffer-controller]: Attempting to append to the " + t + " SourceBuffer, but it does not exist"), void r.shiftAndExecuteNext(t);
											n.ended = !1, console.assert(!n.updating, t + " sourceBuffer must not be updating"), n.appendBuffer(e)
										}, t.blockBuffers = function(e, t) {
											var r = this;
											if (void 0 === t && (t = this.getSourceBufferTypes()), !t.length) return a.logger.log("[buffer-controller]: Blocking operation requested, but no SourceBuffers exist"), void Promise.resolve(e);
											var n = this.operationQueue,
												i = t.map((function(e) {
													return n.appendBlocker(e)
												}));
											Promise.all(i).then((function() {
												e(), t.forEach((function(e) {
													var t = r.sourceBuffer[e];
													t && t.updating || n.shiftAndExecuteNext(e)
												}))
											}))
										}, t.getSourceBufferTypes = function() {
											return Object.keys(this.sourceBuffer)
										}, t.addBufferListener = function(e, t, r) {
											var n = this.sourceBuffer[e];
											if (n) {
												var i = r.bind(this, e);
												this.listeners[e].push({
													event: t,
													listener: i
												}), n.addEventListener(t, i)
											}
										}, t.removeBufferListeners = function(e) {
											var t = this.sourceBuffer[e];
											t && this.listeners[e].forEach((function(e) {
												t.removeEventListener(e.event, e.listener)
											}))
										}, e
									}()
							},
						"./src/controller/buffer-operation-queue.ts":
							/*!**************************************************!*\
							  !*** ./src/controller/buffer-operation-queue.ts ***!
							  \**************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return i
								}));
								var n = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									i = function() {
										function e(e) {
											this.buffers = void 0, this.queues = {
												video: [],
												audio: [],
												audiovideo: []
											}, this.buffers = e
										}
										var t = e.prototype;
										return t.append = function(e, t) {
											var r = this.queues[t];
											r.push(e), 1 === r.length && this.buffers[t] && this.executeNext(t)
										}, t.insertAbort = function(e, t) {
											this.queues[t].unshift(e), this.executeNext(t)
										}, t.appendBlocker = function(e) {
											var t, r = new Promise((function(e) {
													t = e
												})),
												n = {
													execute: t,
													onStart: function() {},
													onComplete: function() {},
													onError: function() {}
												};
											return this.append(n, e), r
										}, t.executeNext = function(e) {
											var t = this.buffers,
												r = this.queues,
												i = t[e],
												a = r[e];
											if (a.length) {
												var s = a[0];
												try {
													s.execute()
												} catch (t) {
													n.logger.warn("[buffer-operation-queue]: Unhandled exception executing the current operation"), s.onError(t), i && i.updating || (a.shift(), this.executeNext(e))
												}
											}
										}, t.shiftAndExecuteNext = function(e) {
											this.queues[e].shift(), this.executeNext(e)
										}, t.current = function(e) {
											return this.queues[e][0]
										}, e
									}()
							},
						"./src/controller/cap-level-controller.ts":
							/*!************************************************!*\
							  !*** ./src/controller/cap-level-controller.ts ***!
							  \************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../events */ "./src/events.ts");

								function i(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var a = function() {
									function e(e) {
										this.autoLevelCapping = void 0, this.firstLevel = void 0, this.media = void 0, this.restrictedLevels = void 0, this.timer = void 0, this.hls = void 0, this.streamController = void 0, this.clientRect = void 0, this.hls = e, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.firstLevel = -1, this.media = null, this.restrictedLevels = [], this.timer = void 0, this.clientRect = null, this.registerListeners()
									}
									var t, r, a, s = e.prototype;
									return s.setStreamController = function(e) {
										this.streamController = e
									}, s.destroy = function() {
										this.unregisterListener(), this.hls.config.capLevelToPlayerSize && this.stopCapping(), this.media = null, this.clientRect = null, this.hls = this.streamController = null
									}, s.registerListeners = function() {
										var e = this.hls;
										e.on(n.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(n.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
									}, s.unregisterListener = function() {
										var e = this.hls;
										e.off(n.Events.FPS_DROP_LEVEL_CAPPING, this.onFpsDropLevelCapping, this), e.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(n.Events.BUFFER_CODECS, this.onBufferCodecs, this), e.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this)
									}, s.onFpsDropLevelCapping = function(t, r) {
										e.isLevelAllowed(r.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(r.droppedLevel)
									}, s.onMediaAttaching = function(e, t) {
										this.media = t.media instanceof HTMLVideoElement ? t.media : null
									}, s.onManifestParsed = function(e, t) {
										var r = this.hls;
										this.restrictedLevels = [], this.firstLevel = t.firstLevel, r.config.capLevelToPlayerSize && t.video && this.startCapping()
									}, s.onBufferCodecs = function(e, t) {
										this.hls.config.capLevelToPlayerSize && t.video && this.startCapping()
									}, s.onMediaDetaching = function() {
										this.stopCapping()
									}, s.detectPlayerSize = function() {
										if (this.media && this.mediaHeight > 0 && this.mediaWidth > 0) {
											var e = this.hls.levels;
											if (e.length) {
												var t = this.hls;
												t.autoLevelCapping = this.getMaxLevel(e.length - 1), t.autoLevelCapping > this.autoLevelCapping && this.streamController && this.streamController.nextLevelSwitch(), this.autoLevelCapping = t.autoLevelCapping
											}
										}
									}, s.getMaxLevel = function(t) {
										var r = this,
											n = this.hls.levels;
										if (!n.length) return -1;
										var i = n.filter((function(n, i) {
											return e.isLevelAllowed(i, r.restrictedLevels) && i <= t
										}));
										return this.clientRect = null, e.getMaxLevelByMediaSize(i, this.mediaWidth, this.mediaHeight)
									}, s.startCapping = function() {
										this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY, this.hls.firstLevel = this.getMaxLevel(this.firstLevel), self.clearInterval(this.timer), this.timer = self.setInterval(this.detectPlayerSize.bind(this), 1e3), this.detectPlayerSize())
									}, s.stopCapping = function() {
										this.restrictedLevels = [], this.firstLevel = -1, this.autoLevelCapping = Number.POSITIVE_INFINITY, this.timer && (self.clearInterval(this.timer), this.timer = void 0)
									}, s.getDimensions = function() {
										if (this.clientRect) return this.clientRect;
										var e = this.media,
											t = {
												width: 0,
												height: 0
											};
										if (e) {
											var r = e.getBoundingClientRect();
											t.width = r.width, t.height = r.height, t.width || t.height || (t.width = r.right - r.left || e.width || 0, t.height = r.bottom - r.top || e.height || 0)
										}
										return this.clientRect = t, t
									}, e.isLevelAllowed = function(e, t) {
										return void 0 === t && (t = []), -1 === t.indexOf(e)
									}, e.getMaxLevelByMediaSize = function(e, t, r) {
										if (!e || !e.length) return -1;
										for (var n, i, a = e.length - 1, s = 0; s < e.length; s += 1) {
											var o = e[s];
											if ((o.width >= t || o.height >= r) && (n = o, !(i = e[s + 1]) || n.width !== i.width || n.height !== i.height)) {
												a = s;
												break
											}
										}
										return a
									}, t = e, a = [{
										key: "contentScaleFactor",
										get: function() {
											var e = 1;
											try {
												e = self.devicePixelRatio
											} catch (e) {}
											return e
										}
									}], (r = [{
										key: "mediaWidth",
										get: function() {
											return this.getDimensions().width * e.contentScaleFactor
										}
									}, {
										key: "mediaHeight",
										get: function() {
											return this.getDimensions().height * e.contentScaleFactor
										}
									}]) && i(t.prototype, r), a && i(t, a), e
								}();
								t.default = a
							},
						"./src/controller/cmcd-controller.ts":
							/*!*******************************************!*\
							  !*** ./src/controller/cmcd-controller.ts ***!
							  \*******************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return f
								}));
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../types/cmcd */ "./src/types/cmcd.ts"),
									a = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts");

								function o(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function l(e, t, r) {
									return t && o(e.prototype, t), r && o(e, r), e
								}

								function u(e, t) {
									var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
									if (r) return (r = r.call(e)).next.bind(r);
									if (Array.isArray(e) || (r = function(e, t) {
											if (e) {
												if ("string" == typeof e) return c(e, t);
												var r = Object.prototype.toString.call(e).slice(8, -1);
												return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? c(e, t) : void 0
											}
										}(e)) || t && e && "number" == typeof e.length) {
										r && (e = r);
										var n = 0;
										return function() {
											return n >= e.length ? {
												done: !0
											} : {
												done: !1,
												value: e[n++]
											}
										}
									}
									throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
								}

								function c(e, t) {
									(null == t || t > e.length) && (t = e.length);
									for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
									return n
								}

								function d() {
									return d = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, d.apply(this, arguments)
								}
								var f = function() {
									function e(t) {
										var r = this;
										this.hls = void 0, this.config = void 0, this.media = void 0, this.sid = void 0, this.cid = void 0, this.useHeaders = !1, this.initialized = !1, this.starved = !1, this.buffering = !0, this.audioBuffer = void 0, this.videoBuffer = void 0, this.onWaiting = function() {
											r.initialized && (r.starved = !0), r.buffering = !0
										}, this.onPlaying = function() {
											r.initialized || (r.initialized = !0), r.buffering = !1
										}, this.applyPlaylistData = function(e) {
											try {
												r.apply(e, {
													ot: i.CMCDObjectType.MANIFEST,
													su: !r.initialized
												})
											} catch (e) {
												s.logger.warn("Could not generate manifest CMCD data.", e)
											}
										}, this.applyFragmentData = function(e) {
											try {
												var t = e.frag,
													n = r.hls.levels[t.level],
													a = r.getObjectType(t),
													o = {
														d: 1e3 * t.duration,
														ot: a
													};
												a !== i.CMCDObjectType.VIDEO && a !== i.CMCDObjectType.AUDIO && a != i.CMCDObjectType.MUXED || (o.br = n.bitrate / 1e3, o.tb = r.getTopBandwidth(a) / 1e3, o.bl = r.getBufferLength(a)), r.apply(e, o)
											} catch (e) {
												s.logger.warn("Could not generate segment CMCD data.", e)
											}
										}, this.hls = t;
										var n = this.config = t.config,
											a = n.cmcd;
										null != a && (n.pLoader = this.createPlaylistLoader(), n.fLoader = this.createFragmentLoader(), this.sid = a.sessionId || e.uuid(), this.cid = a.contentId, this.useHeaders = !0 === a.useHeaders, this.registerListeners())
									}
									var t = e.prototype;
									return t.registerListeners = function() {
										var e = this.hls;
										e.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(n.Events.MEDIA_DETACHED, this.onMediaDetached, this), e.on(n.Events.BUFFER_CREATED, this.onBufferCreated, this)
									}, t.unregisterListeners = function() {
										var e = this.hls;
										e.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(n.Events.MEDIA_DETACHED, this.onMediaDetached, this), e.off(n.Events.BUFFER_CREATED, this.onBufferCreated, this), this.onMediaDetached()
									}, t.destroy = function() {
										this.unregisterListeners(), this.hls = this.config = this.audioBuffer = this.videoBuffer = null
									}, t.onMediaAttached = function(e, t) {
										this.media = t.media, this.media.addEventListener("waiting", this.onWaiting), this.media.addEventListener("playing", this.onPlaying)
									}, t.onMediaDetached = function() {
										this.media && (this.media.removeEventListener("waiting", this.onWaiting), this.media.removeEventListener("playing", this.onPlaying), this.media = null)
									}, t.onBufferCreated = function(e, t) {
										var r, n;
										this.audioBuffer = null === (r = t.tracks.audio) || void 0 === r ? void 0 : r.buffer, this.videoBuffer = null === (n = t.tracks.video) || void 0 === n ? void 0 : n.buffer
									}, t.createData = function() {
										var e;
										return {
											v: i.CMCDVersion,
											sf: i.CMCDStreamingFormat.HLS,
											sid: this.sid,
											cid: this.cid,
											pr: null === (e = this.media) || void 0 === e ? void 0 : e.playbackRate,
											mtp: this.hls.bandwidthEstimate / 1e3
										}
									}, t.apply = function(t, r) {
										void 0 === r && (r = {}), d(r, this.createData());
										var n = r.ot === i.CMCDObjectType.INIT || r.ot === i.CMCDObjectType.VIDEO || r.ot === i.CMCDObjectType.MUXED;
										if (this.starved && n && (r.bs = !0, r.su = !0, this.starved = !1), null == r.su && (r.su = this.buffering), this.useHeaders) {
											var a = e.toHeaders(r);
											if (!Object.keys(a).length) return;
											t.headers || (t.headers = {}), d(t.headers, a)
										} else {
											var s = e.toQuery(r);
											if (!s) return;
											t.url = e.appendQueryToUri(t.url, s)
										}
									}, t.getObjectType = function(e) {
										var t = e.type;
										return "subtitle" === t ? i.CMCDObjectType.TIMED_TEXT : "initSegment" === e.sn ? i.CMCDObjectType.INIT : "audio" === t ? i.CMCDObjectType.AUDIO : "main" === t ? this.hls.audioTracks.length ? i.CMCDObjectType.VIDEO : i.CMCDObjectType.MUXED : void 0
									}, t.getTopBandwidth = function(e) {
										var t, r = 0,
											n = this.hls;
										if (e === i.CMCDObjectType.AUDIO) t = n.audioTracks;
										else {
											var a = n.maxAutoLevel,
												s = a > -1 ? a + 1 : n.levels.length;
											t = n.levels.slice(0, s)
										}
										for (var o, l = u(t); !(o = l()).done;) {
											var c = o.value;
											c.bitrate > r && (r = c.bitrate)
										}
										return r > 0 ? r : NaN
									}, t.getBufferLength = function(e) {
										var t = this.hls.media,
											r = e === i.CMCDObjectType.AUDIO ? this.audioBuffer : this.videoBuffer;
										return r && t ? 1e3 * a.BufferHelper.bufferInfo(r, t.currentTime, this.config.maxBufferHole).len : NaN
									}, t.createPlaylistLoader = function() {
										var e = this.config.pLoader,
											t = this.applyPlaylistData,
											r = e || this.config.loader;
										return function() {
											function e(e) {
												this.loader = void 0, this.loader = new r(e)
											}
											var n = e.prototype;
											return n.destroy = function() {
												this.loader.destroy()
											}, n.abort = function() {
												this.loader.abort()
											}, n.load = function(e, r, n) {
												t(e), this.loader.load(e, r, n)
											}, l(e, [{
												key: "stats",
												get: function() {
													return this.loader.stats
												}
											}, {
												key: "context",
												get: function() {
													return this.loader.context
												}
											}]), e
										}()
									}, t.createFragmentLoader = function() {
										var e = this.config.fLoader,
											t = this.applyFragmentData,
											r = e || this.config.loader;
										return function() {
											function e(e) {
												this.loader = void 0, this.loader = new r(e)
											}
											var n = e.prototype;
											return n.destroy = function() {
												this.loader.destroy()
											}, n.abort = function() {
												this.loader.abort()
											}, n.load = function(e, r, n) {
												t(e), this.loader.load(e, r, n)
											}, l(e, [{
												key: "stats",
												get: function() {
													return this.loader.stats
												}
											}, {
												key: "context",
												get: function() {
													return this.loader.context
												}
											}]), e
										}()
									}, e.uuid = function() {
										var e = URL.createObjectURL(new Blob),
											t = e.toString();
										return URL.revokeObjectURL(e), t.substr(t.lastIndexOf("/") + 1)
									}, e.serialize = function(e) {
										for (var t, r = [], n = function(e) {
												return !Number.isNaN(e) && null != e && "" !== e && !1 !== e
											}, i = function(e) {
												return Math.round(e)
											}, a = function(e) {
												return 100 * i(e / 100)
											}, s = {
												br: i,
												d: i,
												bl: a,
												dl: a,
												mtp: a,
												nor: function(e) {
													return encodeURIComponent(e)
												},
												rtp: a,
												tb: i
											}, o = u(Object.keys(e || {}).sort()); !(t = o()).done;) {
											var l = t.value,
												c = e[l];
											if (n(c) && !("v" === l && 1 === c || "pr" == l && 1 === c)) {
												var d = s[l];
												d && (c = d(c));
												var f = typeof c,
													h = void 0;
												h = "ot" === l || "sf" === l || "st" === l ? l + "=" + c : "boolean" === f ? l : "number" === f ? l + "=" + c : l + "=" + JSON.stringify(c), r.push(h)
											}
										}
										return r.join(",")
									}, e.toHeaders = function(t) {
										for (var r = {}, n = ["Object", "Request", "Session", "Status"], i = [{}, {}, {}, {}], a = {
												br: 0,
												d: 0,
												ot: 0,
												tb: 0,
												bl: 1,
												dl: 1,
												mtp: 1,
												nor: 1,
												nrr: 1,
												su: 1,
												cid: 2,
												pr: 2,
												sf: 2,
												sid: 2,
												st: 2,
												v: 2,
												bs: 3,
												rtp: 3
											}, s = 0, o = Object.keys(t); s < o.length; s++) {
											var l = o[s];
											i[null != a[l] ? a[l] : 1][l] = t[l]
										}
										for (var u = 0; u < i.length; u++) {
											var c = e.serialize(i[u]);
											c && (r["CMCD-" + n[u]] = c)
										}
										return r
									}, e.toQuery = function(t) {
										return "CMCD=" + encodeURIComponent(e.serialize(t))
									}, e.appendQueryToUri = function(e, t) {
										if (!t) return e;
										var r = e.includes("?") ? "&" : "?";
										return "" + e + r + t
									}, e
								}()
							},
						"./src/controller/eme-controller.ts":
							/*!******************************************!*\
							  !*** ./src/controller/eme-controller.ts ***!
							  \******************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../errors */ "./src/errors.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									s = r( /*! ../utils/mediakeys-helper */ "./src/utils/mediakeys-helper.ts");

								function o(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var l = function() {
									function e(e) {
										this.hls = void 0, this._widevineLicenseUrl = void 0, this._licenseXhrSetup = void 0, this._licenseResponseCallback = void 0, this._emeEnabled = void 0, this._requestMediaKeySystemAccess = void 0, this._drmSystemOptions = void 0, this._config = void 0, this._mediaKeysList = [], this._media = null, this._hasSetMediaKeys = !1, this._requestLicenseFailureCount = 0, this.mediaKeysPromise = null, this._onMediaEncrypted = this.onMediaEncrypted.bind(this), this.hls = e, this._config = e.config, this._widevineLicenseUrl = this._config.widevineLicenseUrl, this._licenseXhrSetup = this._config.licenseXhrSetup, this._licenseResponseCallback = this._config.licenseResponseCallback, this._emeEnabled = this._config.emeEnabled, this._requestMediaKeySystemAccess = this._config.requestMediaKeySystemAccessFunc, this._drmSystemOptions = this._config.drmSystemOptions, this._registerListeners()
									}
									var t, r, l, u = e.prototype;
									return u.destroy = function() {
										this._unregisterListeners(), this.hls = this._onMediaEncrypted = null, this._requestMediaKeySystemAccess = null
									}, u._registerListeners = function() {
										this.hls.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(n.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this)
									}, u._unregisterListeners = function() {
										this.hls.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.off(n.Events.MEDIA_DETACHED, this.onMediaDetached, this), this.hls.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this)
									}, u.getLicenseServerUrl = function(e) {
										switch (e) {
											case s.KeySystems.WIDEVINE:
												if (!this._widevineLicenseUrl) break;
												return this._widevineLicenseUrl
										}
										throw new Error('no license server URL configured for key-system "' + e + '"')
									}, u._attemptKeySystemAccess = function(e, t, r) {
										var n = this,
											i = function(e, t, r, n) {
												if (e === s.KeySystems.WIDEVINE) return function(e, t, r) {
													var n = {
														audioCapabilities: [],
														videoCapabilities: []
													};
													return e.forEach((function(e) {
														n.audioCapabilities.push({
															contentType: 'audio/mp4; codecs="' + e + '"',
															robustness: r.audioRobustness || ""
														})
													})), t.forEach((function(e) {
														n.videoCapabilities.push({
															contentType: 'video/mp4; codecs="' + e + '"',
															robustness: r.videoRobustness || ""
														})
													})), [n]
												}(t, r, n);
												throw new Error("Unknown key-system: " + e)
											}(e, t, r, this._drmSystemOptions);
										a.logger.log("Requesting encrypted media key-system access");
										var o = this.requestMediaKeySystemAccess(e, i);
										this.mediaKeysPromise = o.then((function(t) {
											return n._onMediaKeySystemAccessObtained(e, t)
										})), o.catch((function(t) {
											a.logger.error('Failed to obtain key-system "' + e + '" access:', t)
										}))
									}, u._onMediaKeySystemAccessObtained = function(e, t) {
										var r = this;
										a.logger.log('Access for key-system "' + e + '" obtained');
										var n = {
											mediaKeysSessionInitialized: !1,
											mediaKeySystemAccess: t,
											mediaKeySystemDomain: e
										};
										this._mediaKeysList.push(n);
										var i = Promise.resolve().then((function() {
											return t.createMediaKeys()
										})).then((function(t) {
											return n.mediaKeys = t, a.logger.log('Media-keys created for key-system "' + e + '"'), r._onMediaKeysCreated(), t
										}));
										return i.catch((function(e) {
											a.logger.error("Failed to create media-keys:", e)
										})), i
									}, u._onMediaKeysCreated = function() {
										var e = this;
										this._mediaKeysList.forEach((function(t) {
											t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(), e._onNewMediaKeySession(t.mediaKeysSession))
										}))
									}, u._onNewMediaKeySession = function(e) {
										var t = this;
										a.logger.log("New key-system session " + e.sessionId), e.addEventListener("message", (function(r) {
											t._onKeySessionMessage(e, r.message)
										}), !1)
									}, u._onKeySessionMessage = function(e, t) {
										a.logger.log("Got EME message event, creating license request"), this._requestLicense(t, (function(t) {
											a.logger.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"), e.update(t)
										}))
									}, u.onMediaEncrypted = function(e) {
										var t = this;
										if (a.logger.log('Media is encrypted using "' + e.initDataType + '" init data type'), !this.mediaKeysPromise) return a.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"), void this.hls.trigger(n.Events.ERROR, {
											type: i.ErrorTypes.KEY_SYSTEM_ERROR,
											details: i.ErrorDetails.KEY_SYSTEM_NO_KEYS,
											fatal: !0
										});
										var r = function(r) {
											t._media && (t._attemptSetMediaKeys(r), t._generateRequestWithPreferredKeySession(e.initDataType, e.initData))
										};
										this.mediaKeysPromise.then(r).catch(r)
									}, u._attemptSetMediaKeys = function(e) {
										if (!this._media) throw new Error("Attempted to set mediaKeys without first attaching a media element");
										if (!this._hasSetMediaKeys) {
											var t = this._mediaKeysList[0];
											if (!t || !t.mediaKeys) return a.logger.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"), void this.hls.trigger(n.Events.ERROR, {
												type: i.ErrorTypes.KEY_SYSTEM_ERROR,
												details: i.ErrorDetails.KEY_SYSTEM_NO_KEYS,
												fatal: !0
											});
											a.logger.log("Setting keys for encrypted media"), this._media.setMediaKeys(t.mediaKeys), this._hasSetMediaKeys = !0
										}
									}, u._generateRequestWithPreferredKeySession = function(e, t) {
										var r = this,
											s = this._mediaKeysList[0];
										if (!s) return a.logger.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"), void this.hls.trigger(n.Events.ERROR, {
											type: i.ErrorTypes.KEY_SYSTEM_ERROR,
											details: i.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
											fatal: !0
										});
										if (s.mediaKeysSessionInitialized) a.logger.warn("Key-Session already initialized but requested again");
										else {
											var o = s.mediaKeysSession;
											if (!o) return a.logger.error("Fatal: Media is encrypted but no key-session existing"), void this.hls.trigger(n.Events.ERROR, {
												type: i.ErrorTypes.KEY_SYSTEM_ERROR,
												details: i.ErrorDetails.KEY_SYSTEM_NO_SESSION,
												fatal: !0
											});
											if (!t) return a.logger.warn("Fatal: initData required for generating a key session is null"), void this.hls.trigger(n.Events.ERROR, {
												type: i.ErrorTypes.KEY_SYSTEM_ERROR,
												details: i.ErrorDetails.KEY_SYSTEM_NO_INIT_DATA,
												fatal: !0
											});
											a.logger.log('Generating key-session request for "' + e + '" init data type'), s.mediaKeysSessionInitialized = !0, o.generateRequest(e, t).then((function() {
												a.logger.debug("Key-session generation succeeded")
											})).catch((function(e) {
												a.logger.error("Error generating key-session request:", e), r.hls.trigger(n.Events.ERROR, {
													type: i.ErrorTypes.KEY_SYSTEM_ERROR,
													details: i.ErrorDetails.KEY_SYSTEM_NO_SESSION,
													fatal: !1
												})
											}))
										}
									}, u._createLicenseXhr = function(e, t, r) {
										var n = new XMLHttpRequest;
										n.responseType = "arraybuffer", n.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, n, e, t, r);
										var i = this._licenseXhrSetup;
										if (i) try {
											i.call(this.hls, n, e), i = void 0
										} catch (e) {
											a.logger.error(e)
										}
										try {
											n.readyState || n.open("POST", e, !0), i && i.call(this.hls, n, e)
										} catch (e) {
											throw new Error("issue setting up KeySystem license XHR " + e)
										}
										return n
									}, u._onLicenseRequestReadyStageChange = function(e, t, r, s) {
										if (4 === e.readyState)
											if (200 === e.status) {
												this._requestLicenseFailureCount = 0, a.logger.log("License request succeeded");
												var o = e.response,
													l = this._licenseResponseCallback;
												if (l) try {
													o = l.call(this.hls, e, t)
												} catch (e) {
													a.logger.error(e)
												}
												s(o)
											} else {
												if (a.logger.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"), this._requestLicenseFailureCount++, this._requestLicenseFailureCount > 3) return void this.hls.trigger(n.Events.ERROR, {
													type: i.ErrorTypes.KEY_SYSTEM_ERROR,
													details: i.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
													fatal: !0
												});
												var u = 3 - this._requestLicenseFailureCount + 1;
												a.logger.warn("Retrying license request, " + u + " attempts left"), this._requestLicense(r, s)
											}
									}, u._generateLicenseRequestChallenge = function(e, t) {
										if (e.mediaKeySystemDomain === s.KeySystems.WIDEVINE) return t;
										throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
									}, u._requestLicense = function(e, t) {
										a.logger.log("Requesting content license for key-system");
										var r = this._mediaKeysList[0];
										if (!r) return a.logger.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"), void this.hls.trigger(n.Events.ERROR, {
											type: i.ErrorTypes.KEY_SYSTEM_ERROR,
											details: i.ErrorDetails.KEY_SYSTEM_NO_ACCESS,
											fatal: !0
										});
										try {
											var s = this.getLicenseServerUrl(r.mediaKeySystemDomain),
												o = this._createLicenseXhr(s, e, t);
											a.logger.log("Sending license request to URL: " + s);
											var l = this._generateLicenseRequestChallenge(r, e);
											o.send(l)
										} catch (e) {
											a.logger.error("Failure requesting DRM license: " + e), this.hls.trigger(n.Events.ERROR, {
												type: i.ErrorTypes.KEY_SYSTEM_ERROR,
												details: i.ErrorDetails.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
												fatal: !0
											})
										}
									}, u.onMediaAttached = function(e, t) {
										if (this._emeEnabled) {
											var r = t.media;
											this._media = r, r.addEventListener("encrypted", this._onMediaEncrypted)
										}
									}, u.onMediaDetached = function() {
										var e = this._media,
											t = this._mediaKeysList;
										e && (e.removeEventListener("encrypted", this._onMediaEncrypted), this._media = null, this._mediaKeysList = [], Promise.all(t.map((function(e) {
											if (e.mediaKeysSession) return e.mediaKeysSession.close().catch((function() {}))
										}))).then((function() {
											return e.setMediaKeys(null)
										})).catch((function() {})))
									}, u.onManifestParsed = function(e, t) {
										if (this._emeEnabled) {
											var r = t.levels.map((function(e) {
													return e.audioCodec
												})).filter((function(e) {
													return !!e
												})),
												n = t.levels.map((function(e) {
													return e.videoCodec
												})).filter((function(e) {
													return !!e
												}));
											this._attemptKeySystemAccess(s.KeySystems.WIDEVINE, r, n)
										}
									}, t = e, (r = [{
										key: "requestMediaKeySystemAccess",
										get: function() {
											if (!this._requestMediaKeySystemAccess) throw new Error("No requestMediaKeySystemAccess function configured");
											return this._requestMediaKeySystemAccess
										}
									}]) && o(t.prototype, r), l && o(t, l), e
								}();
								t.default = l
							},
						"./src/controller/fps-controller.ts":
							/*!******************************************!*\
							  !*** ./src/controller/fps-controller.ts ***!
							  \******************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									a = function() {
										function e(e) {
											this.hls = void 0, this.isVideoPlaybackQualityAvailable = !1, this.timer = void 0, this.media = null, this.lastTime = void 0, this.lastDroppedFrames = 0, this.lastDecodedFrames = 0, this.streamController = void 0, this.hls = e, this.registerListeners()
										}
										var t = e.prototype;
										return t.setStreamController = function(e) {
											this.streamController = e
										}, t.registerListeners = function() {
											this.hls.on(n.Events.MEDIA_ATTACHING, this.onMediaAttaching, this)
										}, t.unregisterListeners = function() {
											this.hls.off(n.Events.MEDIA_ATTACHING, this.onMediaAttaching)
										}, t.destroy = function() {
											this.timer && clearInterval(this.timer), this.unregisterListeners(), this.isVideoPlaybackQualityAvailable = !1, this.media = null
										}, t.onMediaAttaching = function(e, t) {
											var r = this.hls.config;
											if (r.capLevelOnFPSDrop) {
												var n = t.media instanceof self.HTMLVideoElement ? t.media : null;
												this.media = n, n && "function" == typeof n.getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0), self.clearInterval(this.timer), this.timer = self.setInterval(this.checkFPSInterval.bind(this), r.fpsDroppedMonitoringPeriod)
											}
										}, t.checkFPS = function(e, t, r) {
											var a = performance.now();
											if (t) {
												if (this.lastTime) {
													var s = a - this.lastTime,
														o = r - this.lastDroppedFrames,
														l = t - this.lastDecodedFrames,
														u = 1e3 * o / s,
														c = this.hls;
													if (c.trigger(n.Events.FPS_DROP, {
															currentDropped: o,
															currentDecoded: l,
															totalDroppedFrames: r
														}), u > 0 && o > c.config.fpsDroppedMonitoringThreshold * l) {
														var d = c.currentLevel;
														i.logger.warn("drop FPS ratio greater than max allowed value for currentLevel: " + d), d > 0 && (-1 === c.autoLevelCapping || c.autoLevelCapping >= d) && (d -= 1, c.trigger(n.Events.FPS_DROP_LEVEL_CAPPING, {
															level: d,
															droppedLevel: c.currentLevel
														}), c.autoLevelCapping = d, this.streamController.nextLevelSwitch())
													}
												}
												this.lastTime = a, this.lastDroppedFrames = r, this.lastDecodedFrames = t
											}
										}, t.checkFPSInterval = function() {
											var e = this.media;
											if (e)
												if (this.isVideoPlaybackQualityAvailable) {
													var t = e.getVideoPlaybackQuality();
													this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
												} else this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
										}, e
									}();
								t.default = a
							},
						"./src/controller/fragment-finders.ts":
							/*!********************************************!*\
							  !*** ./src/controller/fragment-finders.ts ***!
							  \********************************************/
							/*! exports provided: findFragmentByPDT, findFragmentByPTS, fragmentWithinToleranceTest, pdtWithinToleranceTest, findFragWithCC */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "findFragmentByPDT", (function() {
									return a
								})), r.d(t, "findFragmentByPTS", (function() {
									return s
								})), r.d(t, "fragmentWithinToleranceTest", (function() {
									return o
								})), r.d(t, "pdtWithinToleranceTest", (function() {
									return l
								})), r.d(t, "findFragWithCC", (function() {
									return u
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../utils/binary-search */ "./src/utils/binary-search.ts");

								function a(e, t, r) {
									if (null === t || !Array.isArray(e) || !e.length || !Object(n.isFiniteNumber)(t)) return null;
									if (t < (e[0].programDateTime || 0)) return null;
									if (t >= (e[e.length - 1].endProgramDateTime || 0)) return null;
									r = r || 0;
									for (var i = 0; i < e.length; ++i) {
										var a = e[i];
										if (l(t, r, a)) return a
									}
									return null
								}

								function s(e, t, r, n) {
									void 0 === r && (r = 0), void 0 === n && (n = 0);
									var a = null;
									if (e ? a = t[e.sn - t[0].sn + 1] || null : 0 === r && 0 === t[0].start && (a = t[0]), a && 0 === o(r, n, a)) return a;
									var s = i.default.search(t, o.bind(null, r, n));
									return s || a
								}

								function o(e, t, r) {
									void 0 === e && (e = 0), void 0 === t && (t = 0);
									var n = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
									return r.start + r.duration - n <= e ? 1 : r.start - n > e && r.start ? -1 : 0
								}

								function l(e, t, r) {
									var n = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
									return (r.endProgramDateTime || 0) - n > e
								}

								function u(e, t) {
									return i.default.search(e, (function(e) {
										return e.cc < t ? 1 : e.cc > t ? -1 : 0
									}))
								}
							},
						"./src/controller/fragment-tracker.ts":
							/*!********************************************!*\
							  !*** ./src/controller/fragment-tracker.ts ***!
							  \********************************************/
							/*! exports provided: FragmentState, FragmentTracker */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "FragmentState", (function() {
									return n
								})), r.d(t, "FragmentTracker", (function() {
									return s
								}));
								var n, i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../types/loader */ "./src/types/loader.ts");
								! function(e) {
									e.NOT_LOADED = "NOT_LOADED", e.BACKTRACKED = "BACKTRACKED", e.APPENDING = "APPENDING", e.PARTIAL = "PARTIAL", e.OK = "OK"
								}(n || (n = {}));
								var s = function() {
									function e(e) {
										this.activeFragment = null, this.activeParts = null, this.fragments = Object.create(null), this.timeRanges = Object.create(null), this.bufferPadding = .2, this.hls = void 0, this.hls = e, this._registerListeners()
									}
									var t = e.prototype;
									return t._registerListeners = function() {
										var e = this.hls;
										e.on(i.Events.BUFFER_APPENDED, this.onBufferAppended, this), e.on(i.Events.FRAG_BUFFERED, this.onFragBuffered, this), e.on(i.Events.FRAG_LOADED, this.onFragLoaded, this)
									}, t._unregisterListeners = function() {
										var e = this.hls;
										e.off(i.Events.BUFFER_APPENDED, this.onBufferAppended, this), e.off(i.Events.FRAG_BUFFERED, this.onFragBuffered, this), e.off(i.Events.FRAG_LOADED, this.onFragLoaded, this)
									}, t.destroy = function() {
										this._unregisterListeners(), this.fragments = this.timeRanges = null
									}, t.getAppendedFrag = function(e, t) {
										if (t === a.PlaylistLevelType.MAIN) {
											var r = this.activeFragment,
												n = this.activeParts;
											if (!r) return null;
											if (n)
												for (var i = n.length; i--;) {
													var s = n[i],
														o = s ? s.end : r.appendedPTS;
													if (s.start <= e && void 0 !== o && e <= o) return i > 9 && (this.activeParts = n.slice(i - 9)), s
												} else if (r.start <= e && void 0 !== r.appendedPTS && e <= r.appendedPTS) return r
										}
										return this.getBufferedFrag(e, t)
									}, t.getBufferedFrag = function(e, t) {
										for (var r = this.fragments, n = Object.keys(r), i = n.length; i--;) {
											var a = r[n[i]];
											if ((null == a ? void 0 : a.body.type) === t && a.buffered) {
												var s = a.body;
												if (s.start <= e && e <= s.end) return s
											}
										}
										return null
									}, t.detectEvictedFragments = function(e, t, r) {
										var n = this;
										Object.keys(this.fragments).forEach((function(i) {
											var a = n.fragments[i];
											if (a)
												if (a.buffered) {
													var s = a.range[e];
													s && s.time.some((function(e) {
														var r = !n.isTimeBuffered(e.startPTS, e.endPTS, t);
														return r && n.removeFragment(a.body), r
													}))
												} else a.body.type === r && n.removeFragment(a.body)
										}))
									}, t.detectPartialFragments = function(e) {
										var t = this,
											r = this.timeRanges,
											n = e.frag,
											i = e.part;
										if (r && "initSegment" !== n.sn) {
											var a = l(n),
												s = this.fragments[a];
											s && (Object.keys(r).forEach((function(e) {
												var a = n.elementaryStreams[e];
												if (a) {
													var o = r[e],
														l = null !== i || !0 === a.partial;
													s.range[e] = t.getBufferedTimes(n, i, l, o)
												}
											})), s.backtrack = s.loaded = null, Object.keys(s.range).length ? s.buffered = !0 : this.removeFragment(s.body))
										}
									}, t.fragBuffered = function(e) {
										var t = l(e),
											r = this.fragments[t];
										r && (r.backtrack = r.loaded = null, r.buffered = !0)
									}, t.getBufferedTimes = function(e, t, r, n) {
										for (var i = {
												time: [],
												partial: r
											}, a = t ? t.start : e.start, s = t ? t.end : e.end, o = e.minEndPTS || s, l = e.maxStartPTS || a, u = 0; u < n.length; u++) {
											var c = n.start(u) - this.bufferPadding,
												d = n.end(u) + this.bufferPadding;
											if (l >= c && o <= d) {
												i.time.push({
													startPTS: Math.max(a, n.start(u)),
													endPTS: Math.min(s, n.end(u))
												});
												break
											}
											if (a < d && s > c) i.partial = !0, i.time.push({
												startPTS: Math.max(a, n.start(u)),
												endPTS: Math.min(s, n.end(u))
											});
											else if (s <= c) break
										}
										return i
									}, t.getPartialFragment = function(e) {
										var t, r, n, i = null,
											a = 0,
											s = this.bufferPadding,
											l = this.fragments;
										return Object.keys(l).forEach((function(u) {
											var c = l[u];
											c && o(c) && (r = c.body.start - s, n = c.body.end + s, e >= r && e <= n && (t = Math.min(e - r, n - e), a <= t && (i = c.body, a = t)))
										})), i
									}, t.getState = function(e) {
										var t = l(e),
											r = this.fragments[t];
										return r ? r.buffered ? o(r) ? n.PARTIAL : n.OK : r.backtrack ? n.BACKTRACKED : n.APPENDING : n.NOT_LOADED
									}, t.backtrack = function(e, t) {
										var r = l(e),
											n = this.fragments[r];
										if (!n || n.backtrack) return null;
										var i = n.backtrack = t || n.loaded;
										return n.loaded = null, i
									}, t.getBacktrackData = function(e) {
										var t = l(e),
											r = this.fragments[t];
										if (r) {
											var n, i = r.backtrack;
											if (null != i && null !== (n = i.payload) && void 0 !== n && n.byteLength) return i;
											this.removeFragment(e)
										}
										return null
									}, t.isTimeBuffered = function(e, t, r) {
										for (var n, i, a = 0; a < r.length; a++) {
											if (n = r.start(a) - this.bufferPadding, i = r.end(a) + this.bufferPadding, e >= n && t <= i) return !0;
											if (t <= n) return !1
										}
										return !1
									}, t.onFragLoaded = function(e, t) {
										var r = t.frag,
											n = t.part;
										if ("initSegment" !== r.sn && !r.bitrateTest && !n) {
											var i = l(r);
											this.fragments[i] = {
												body: r,
												loaded: t,
												backtrack: null,
												buffered: !1,
												range: Object.create(null)
											}
										}
									}, t.onBufferAppended = function(e, t) {
										var r = this,
											n = t.frag,
											i = t.part,
											s = t.timeRanges;
										if (n.type === a.PlaylistLevelType.MAIN)
											if (this.activeFragment = n, i) {
												var o = this.activeParts;
												o || (this.activeParts = o = []), o.push(i)
											} else this.activeParts = null;
										this.timeRanges = s, Object.keys(s).forEach((function(e) {
											var t = s[e];
											if (r.detectEvictedFragments(e, t), !i)
												for (var a = 0; a < t.length; a++) n.appendedPTS = Math.max(t.end(a), n.appendedPTS || 0)
										}))
									}, t.onFragBuffered = function(e, t) {
										this.detectPartialFragments(t)
									}, t.hasFragment = function(e) {
										var t = l(e);
										return !!this.fragments[t]
									}, t.removeFragmentsInRange = function(e, t, r) {
										var n = this;
										Object.keys(this.fragments).forEach((function(i) {
											var a = n.fragments[i];
											if (a && a.buffered) {
												var s = a.body;
												s.type === r && s.start < t && s.end > e && n.removeFragment(s)
											}
										}))
									}, t.removeFragment = function(e) {
										var t = l(e);
										e.stats.loaded = 0, e.clearElementaryStreamInfo(), delete this.fragments[t]
									}, t.removeAllFragments = function() {
										this.fragments = Object.create(null), this.activeFragment = null, this.activeParts = null
									}, e
								}();

								function o(e) {
									var t, r;
									return e.buffered && ((null === (t = e.range.video) || void 0 === t ? void 0 : t.partial) || (null === (r = e.range.audio) || void 0 === r ? void 0 : r.partial))
								}

								function l(e) {
									return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
								}
							},
						"./src/controller/gap-controller.ts":
							/*!******************************************!*\
							  !*** ./src/controller/gap-controller.ts ***!
							  \******************************************/
							/*! exports provided: STALL_MINIMUM_DURATION_MS, MAX_START_GAP_JUMP, SKIP_BUFFER_HOLE_STEP_SECONDS, SKIP_BUFFER_RANGE_START, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "STALL_MINIMUM_DURATION_MS", (function() {
									return o
								})), r.d(t, "MAX_START_GAP_JUMP", (function() {
									return l
								})), r.d(t, "SKIP_BUFFER_HOLE_STEP_SECONDS", (function() {
									return u
								})), r.d(t, "SKIP_BUFFER_RANGE_START", (function() {
									return c
								})), r.d(t, "default", (function() {
									return d
								}));
								var n = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									i = r( /*! ../errors */ "./src/errors.ts"),
									a = r( /*! ../events */ "./src/events.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = 250,
									l = 2,
									u = .1,
									c = .05,
									d = function() {
										function e(e, t, r, n) {
											this.config = void 0, this.media = void 0, this.fragmentTracker = void 0, this.hls = void 0, this.nudgeRetry = 0, this.stallReported = !1, this.stalled = null, this.moved = !1, this.seeking = !1, this.config = e, this.media = t, this.fragmentTracker = r, this.hls = n
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.hls = this.fragmentTracker = this.media = null
										}, t.poll = function(e) {
											var t = this.config,
												r = this.media,
												i = this.stalled,
												a = r.currentTime,
												u = r.seeking,
												c = this.seeking && !u,
												d = !this.seeking && u;
											if (this.seeking = u, a === e) {
												if ((d || c) && (this.stalled = null), !r.paused && !r.ended && 0 !== r.playbackRate && n.BufferHelper.getBuffered(r).length) {
													var f = n.BufferHelper.bufferInfo(r, a, 0),
														h = f.len > 0,
														p = f.nextStart || 0;
													if (h || p) {
														if (u) {
															var g = f.len > l,
																v = !p || p - a > l && !this.fragmentTracker.getPartialFragment(a);
															if (g || v) return;
															this.moved = !1
														}
														if (!this.moved && null !== this.stalled) {
															var m, y = Math.max(p, f.start || 0) - a,
																E = this.hls.levels ? this.hls.levels[this.hls.currentLevel] : null,
																b = (null == E || null === (m = E.details) || void 0 === m ? void 0 : m.live) ? 2 * E.details.targetduration : l;
															if (y > 0 && y <= b) return void this._trySkipBufferHole(null)
														}
														var T = self.performance.now();
														if (null !== i) {
															var S = T - i;
															!u && S >= o && this._reportStall(f.len);
															var k = n.BufferHelper.bufferInfo(r, a, t.maxBufferHole);
															this._tryFixBufferStall(k, S)
														} else this.stalled = T
													}
												}
											} else if (this.moved = !0, null !== i) {
												if (this.stallReported) {
													var w = self.performance.now() - i;
													s.logger.warn("playback not stuck anymore @" + a + ", after " + Math.round(w) + "ms"), this.stallReported = !1
												}
												this.stalled = null, this.nudgeRetry = 0
											}
										}, t._tryFixBufferStall = function(e, t) {
											var r = this.config,
												n = this.fragmentTracker,
												i = this.media.currentTime,
												a = n.getPartialFragment(i);
											a && this._trySkipBufferHole(a) || e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (s.logger.warn("Trying to nudge playhead over buffer-hole"), this.stalled = null, this._tryNudgeBuffer())
										}, t._reportStall = function(e) {
											var t = this.hls,
												r = this.media;
											this.stallReported || (this.stallReported = !0, s.logger.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + e + ")"), t.trigger(a.Events.ERROR, {
												type: i.ErrorTypes.MEDIA_ERROR,
												details: i.ErrorDetails.BUFFER_STALLED_ERROR,
												fatal: !1,
												buffer: e
											}))
										}, t._trySkipBufferHole = function(e) {
											for (var t = this.config, r = this.hls, o = this.media, l = o.currentTime, d = 0, f = n.BufferHelper.getBuffered(o), h = 0; h < f.length; h++) {
												var p = f.start(h);
												if (l + t.maxBufferHole >= d && l < p) {
													var g = Math.max(p + c, o.currentTime + u);
													return s.logger.warn("skipping hole, adjusting currentTime from " + l + " to " + g), this.moved = !0, this.stalled = null, o.currentTime = g, e && r.trigger(a.Events.ERROR, {
														type: i.ErrorTypes.MEDIA_ERROR,
														details: i.ErrorDetails.BUFFER_SEEK_OVER_HOLE,
														fatal: !1,
														reason: "fragment loaded with buffer holes, seeking from " + l + " to " + g,
														frag: e
													}), g
												}
												d = f.end(h)
											}
											return 0
										}, t._tryNudgeBuffer = function() {
											var e = this.config,
												t = this.hls,
												r = this.media,
												n = r.currentTime,
												o = (this.nudgeRetry || 0) + 1;
											if (this.nudgeRetry = o, o < e.nudgeMaxRetry) {
												var l = n + o * e.nudgeOffset;
												s.logger.warn("Nudging 'currentTime' from " + n + " to " + l), r.currentTime = l, t.trigger(a.Events.ERROR, {
													type: i.ErrorTypes.MEDIA_ERROR,
													details: i.ErrorDetails.BUFFER_NUDGE_ON_STALL,
													fatal: !1
												})
											} else s.logger.error("Playhead still not moving while enough data buffered @" + n + " after " + e.nudgeMaxRetry + " nudges"), t.trigger(a.Events.ERROR, {
												type: i.ErrorTypes.MEDIA_ERROR,
												details: i.ErrorDetails.BUFFER_STALLED_ERROR,
												fatal: !0
											})
										}, e
									}()
							},
						"./src/controller/id3-track-controller.ts":
							/*!************************************************!*\
							  !*** ./src/controller/id3-track-controller.ts ***!
							  \************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../utils/texttrack-utils */ "./src/utils/texttrack-utils.ts"),
									a = r( /*! ../demux/id3 */ "./src/demux/id3.ts"),
									s = function() {
										function e(e) {
											this.hls = void 0, this.id3Track = null, this.media = null, this.hls = e, this._registerListeners()
										}
										var t = e.prototype;
										return t.destroy = function() {
											this._unregisterListeners()
										}, t._registerListeners = function() {
											var e = this.hls;
											e.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(n.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
										}, t._unregisterListeners = function() {
											var e = this.hls;
											e.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(n.Events.FRAG_PARSING_METADATA, this.onFragParsingMetadata, this), e.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
										}, t.onMediaAttached = function(e, t) {
											this.media = t.media
										}, t.onMediaDetaching = function() {
											this.id3Track && (Object(i.clearCurrentCues)(this.id3Track), this.id3Track = null, this.media = null)
										}, t.getID3Track = function(e) {
											if (this.media) {
												for (var t = 0; t < e.length; t++) {
													var r = e[t];
													if ("metadata" === r.kind && "id3" === r.label) return Object(i.sendAddTrackEvent)(r, this.media), r
												}
												return this.media.addTextTrack("metadata", "id3")
											}
										}, t.onFragParsingMetadata = function(e, t) {
											if (this.media) {
												var r = t.frag,
													n = t.samples;
												this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks), this.id3Track.mode = "hidden");
												for (var i = self.WebKitDataCue || self.VTTCue || self.TextTrackCue, s = 0; s < n.length; s++) {
													var o = a.getID3Frames(n[s].data);
													if (o) {
														var l = n[s].pts,
															u = s < n.length - 1 ? n[s + 1].pts : r.end;
														u - l <= 0 && (u = l + .25);
														for (var c = 0; c < o.length; c++) {
															var d = o[c];
															if (!a.isTimeStampFrame(d)) {
																var f = new i(l, u, "");
																f.value = d, this.id3Track.addCue(f)
															}
														}
													}
												}
											}
										}, t.onBufferFlushing = function(e, t) {
											var r = t.startOffset,
												n = t.endOffset,
												a = t.type;
											if (!a || "audio" === a) {
												var s = this.id3Track;
												s && Object(i.removeCuesInRange)(s, r, n)
											}
										}, e
									}();
								t.default = s
							},
						"./src/controller/latency-controller.ts":
							/*!**********************************************!*\
							  !*** ./src/controller/latency-controller.ts ***!
							  \**********************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return o
								}));
								var n = r( /*! ../errors */ "./src/errors.ts"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts");

								function s(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var o = function() {
									function e(e) {
										var t = this;
										this.hls = void 0, this.config = void 0, this.media = null, this.levelDetails = null, this.currentTime = 0, this.stallCount = 0, this._latency = null, this.timeupdateHandler = function() {
											return t.timeupdate()
										}, this.hls = e, this.config = e.config, this.registerListeners()
									}
									var t, r, o, l = e.prototype;
									return l.destroy = function() {
										this.unregisterListeners(), this.onMediaDetaching(), this.levelDetails = null, this.hls = this.timeupdateHandler = null
									}, l.registerListeners = function() {
										this.hls.on(i.Events.MEDIA_ATTACHED, this.onMediaAttached, this), this.hls.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), this.hls.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), this.hls.on(i.Events.LEVEL_UPDATED, this.onLevelUpdated, this), this.hls.on(i.Events.ERROR, this.onError, this)
									}, l.unregisterListeners = function() {
										this.hls.off(i.Events.MEDIA_ATTACHED, this.onMediaAttached), this.hls.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching), this.hls.off(i.Events.MANIFEST_LOADING, this.onManifestLoading), this.hls.off(i.Events.LEVEL_UPDATED, this.onLevelUpdated), this.hls.off(i.Events.ERROR, this.onError)
									}, l.onMediaAttached = function(e, t) {
										this.media = t.media, this.media.addEventListener("timeupdate", this.timeupdateHandler)
									}, l.onMediaDetaching = function() {
										this.media && (this.media.removeEventListener("timeupdate", this.timeupdateHandler), this.media = null)
									}, l.onManifestLoading = function() {
										this.levelDetails = null, this._latency = null, this.stallCount = 0
									}, l.onLevelUpdated = function(e, t) {
										var r = t.details;
										this.levelDetails = r, r.advanced && this.timeupdate(), !r.live && this.media && this.media.removeEventListener("timeupdate", this.timeupdateHandler)
									}, l.onError = function(e, t) {
										t.details === n.ErrorDetails.BUFFER_STALLED_ERROR && (this.stallCount++, a.logger.warn("[playback-rate-controller]: Stall detected, adjusting target latency"))
									}, l.timeupdate = function() {
										var e = this.media,
											t = this.levelDetails;
										if (e && t) {
											this.currentTime = e.currentTime;
											var r = this.computeLatency();
											if (null !== r) {
												this._latency = r;
												var n = this.config,
													i = n.lowLatencyMode,
													a = n.maxLiveSyncPlaybackRate;
												if (i && 1 !== a) {
													var s = this.targetLatency;
													if (null !== s) {
														var o = r - s,
															l = o < Math.min(this.maxLatency, s + t.targetduration);
														if (t.live && l && o > .05 && this.forwardBufferLength > 1) {
															var u = Math.min(2, Math.max(1, a)),
																c = Math.round(2 / (1 + Math.exp(-.75 * o - this.edgeStalled)) * 20) / 20;
															e.playbackRate = Math.min(u, Math.max(1, c))
														} else 1 !== e.playbackRate && 0 !== e.playbackRate && (e.playbackRate = 1)
													}
												}
											}
										}
									}, l.estimateLiveEdge = function() {
										var e = this.levelDetails;
										return null === e ? null : e.edge + e.age
									}, l.computeLatency = function() {
										var e = this.estimateLiveEdge();
										return null === e ? null : e - this.currentTime
									}, t = e, (r = [{
										key: "latency",
										get: function() {
											return this._latency || 0
										}
									}, {
										key: "maxLatency",
										get: function() {
											var e = this.config,
												t = this.levelDetails;
											return void 0 !== e.liveMaxLatencyDuration ? e.liveMaxLatencyDuration : t ? e.liveMaxLatencyDurationCount * t.targetduration : 0
										}
									}, {
										key: "targetLatency",
										get: function() {
											var e = this.levelDetails;
											if (null === e) return null;
											var t = e.holdBack,
												r = e.partHoldBack,
												n = e.targetduration,
												i = this.config,
												a = i.liveSyncDuration,
												s = i.liveSyncDurationCount,
												o = i.lowLatencyMode,
												l = this.hls.userConfig,
												u = o && r || t;
											(l.liveSyncDuration || l.liveSyncDurationCount || 0 === u) && (u = void 0 !== a ? a : s * n);
											var c = n;
											return u + Math.min(1 * this.stallCount, c)
										}
									}, {
										key: "liveSyncPosition",
										get: function() {
											var e = this.estimateLiveEdge(),
												t = this.targetLatency,
												r = this.levelDetails;
											if (null === e || null === t || null === r) return null;
											var n = r.edge,
												i = e - t - this.edgeStalled,
												a = n - r.totalduration,
												s = n - (this.config.lowLatencyMode && r.partTarget || r.targetduration);
											return Math.min(Math.max(a, i), s)
										}
									}, {
										key: "drift",
										get: function() {
											var e = this.levelDetails;
											return null === e ? 1 : e.drift
										}
									}, {
										key: "edgeStalled",
										get: function() {
											var e = this.levelDetails;
											if (null === e) return 0;
											var t = 3 * (this.config.lowLatencyMode && e.partTarget || e.targetduration);
											return Math.max(e.age - t, 0)
										}
									}, {
										key: "forwardBufferLength",
										get: function() {
											var e = this.media,
												t = this.levelDetails;
											if (!e || !t) return 0;
											var r = e.buffered.length;
											return r ? e.buffered.end(r - 1) : t.edge - this.currentTime
										}
									}]) && s(t.prototype, r), o && s(t, o), e
								}()
							},
						"./src/controller/level-controller.ts":
							/*!********************************************!*\
							  !*** ./src/controller/level-controller.ts ***!
							  \********************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return p
								}));
								var n = r( /*! ../types/level */ "./src/types/level.ts"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../errors */ "./src/errors.ts"),
									s = r( /*! ../utils/codecs */ "./src/utils/codecs.ts"),
									o = r( /*! ./level-helper */ "./src/controller/level-helper.ts"),
									l = r( /*! ./base-playlist-controller */ "./src/controller/base-playlist-controller.ts"),
									u = r( /*! ../types/loader */ "./src/types/loader.ts");

								function c() {
									return c = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, c.apply(this, arguments)
								}

								function d(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function f(e, t) {
									return f = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, f(e, t)
								}
								var h = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
									p = function(e) {
										var t, r;

										function l(t) {
											var r;
											return (r = e.call(this, t, "[level-controller]") || this)._levels = [], r._firstLevel = -1, r._startLevel = void 0, r.currentLevelIndex = -1, r.manualLevelIndex = -1, r.onParsedComplete = void 0, r._registerListeners(), r
										}
										r = e, (t = l).prototype = Object.create(r.prototype), t.prototype.constructor = t, f(t, r);
										var p, g, v, m = l.prototype;
										return m._registerListeners = function() {
											var e = this.hls;
											e.on(i.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(i.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.on(i.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(i.Events.FRAG_LOADED, this.onFragLoaded, this), e.on(i.Events.ERROR, this.onError, this)
										}, m._unregisterListeners = function() {
											var e = this.hls;
											e.off(i.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(i.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.off(i.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(i.Events.FRAG_LOADED, this.onFragLoaded, this), e.off(i.Events.ERROR, this.onError, this)
										}, m.destroy = function() {
											this._unregisterListeners(), this.manualLevelIndex = -1, this._levels.length = 0, e.prototype.destroy.call(this)
										}, m.startLoad = function() {
											this._levels.forEach((function(e) {
												e.loadError = 0
											})), e.prototype.startLoad.call(this)
										}, m.onManifestLoaded = function(e, t) {
											var r, l, u = [],
												c = [],
												d = [],
												f = {},
												p = !1,
												g = !1,
												v = !1;
											if (t.levels.forEach((function(e) {
													var t = e.attrs;
													p = p || !(!e.width || !e.height), g = g || !!e.videoCodec, v = v || !!e.audioCodec, h && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0);
													var r = e.bitrate + "-" + e.attrs.RESOLUTION + "-" + e.attrs.CODECS;
													(l = f[r]) ? l.url.push(e.url): (l = new n.Level(e), f[r] = l, u.push(l)), t && (t.AUDIO && Object(o.addGroupId)(l, "audio", t.AUDIO), t.SUBTITLES && Object(o.addGroupId)(l, "text", t.SUBTITLES))
												})), (p || g) && v && (u = u.filter((function(e) {
													var t = e.videoCodec,
														r = e.width,
														n = e.height;
													return !!t || !(!r || !n)
												}))), u = u.filter((function(e) {
													var t = e.audioCodec,
														r = e.videoCodec;
													return (!t || Object(s.isCodecSupportedInMp4)(t, "audio")) && (!r || Object(s.isCodecSupportedInMp4)(r, "video"))
												})), t.audioTracks && (c = t.audioTracks.filter((function(e) {
													return !e.audioCodec || Object(s.isCodecSupportedInMp4)(e.audioCodec, "audio")
												})), Object(o.assignTrackIdsByGroup)(c)), t.subtitles && (d = t.subtitles, Object(o.assignTrackIdsByGroup)(d)), u.length > 0) {
												r = u[0].bitrate, u.sort((function(e, t) {
													return e.bitrate - t.bitrate
												})), this._levels = u;
												for (var m = 0; m < u.length; m++)
													if (u[m].bitrate === r) {
														this._firstLevel = m, this.log("manifest loaded, " + u.length + " level(s) found, first bitrate: " + r);
														break
													} var y = v && !g,
													E = {
														levels: u,
														audioTracks: c,
														subtitleTracks: d,
														firstLevel: this._firstLevel,
														stats: t.stats,
														audio: v,
														video: g,
														altAudio: !y && c.some((function(e) {
															return !!e.url
														}))
													};
												this.hls.trigger(i.Events.MANIFEST_PARSED, E), (this.hls.config.autoStartLoad || this.hls.forceStartLoad) && this.hls.startLoad(this.hls.config.startPosition)
											} else this.hls.trigger(i.Events.ERROR, {
												type: a.ErrorTypes.MEDIA_ERROR,
												details: a.ErrorDetails.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
												fatal: !0,
												url: t.url,
												reason: "no level with compatible codecs found in manifest"
											})
										}, m.onError = function(t, r) {
											if (e.prototype.onError.call(this, t, r), !r.fatal) {
												var n = r.context,
													i = this._levels[this.currentLevelIndex];
												if (n && (n.type === u.PlaylistContextType.AUDIO_TRACK && i.audioGroupIds && n.groupId === i.audioGroupIds[i.urlId] || n.type === u.PlaylistContextType.SUBTITLE_TRACK && i.textGroupIds && n.groupId === i.textGroupIds[i.urlId])) this.redundantFailover(this.currentLevelIndex);
												else {
													var s, o = !1,
														l = !0;
													switch (r.details) {
														case a.ErrorDetails.FRAG_LOAD_ERROR:
														case a.ErrorDetails.FRAG_LOAD_TIMEOUT:
														case a.ErrorDetails.KEY_LOAD_ERROR:
														case a.ErrorDetails.KEY_LOAD_TIMEOUT:
															if (r.frag) {
																var c = this._levels[r.frag.level];
																c ? (c.fragmentError++, c.fragmentError > this.hls.config.fragLoadingMaxRetry && (s = r.frag.level)) : s = r.frag.level
															}
															break;
														case a.ErrorDetails.LEVEL_LOAD_ERROR:
														case a.ErrorDetails.LEVEL_LOAD_TIMEOUT:
															n && (n.deliveryDirectives && (l = !1), s = n.level), o = !0;
															break;
														case a.ErrorDetails.REMUX_ALLOC_ERROR:
															s = r.level, o = !0
													}
													void 0 !== s && this.recoverLevel(r, s, o, l)
												}
											}
										}, m.recoverLevel = function(e, t, r, n) {
											var i = e.details,
												a = this._levels[t];
											if (a.loadError++, r) {
												if (!this.retryLoadingOrFail(e)) return void(this.currentLevelIndex = -1);
												e.levelRetry = !0
											}
											if (n) {
												var s = a.url.length;
												if (s > 1 && a.loadError < s) e.levelRetry = !0, this.redundantFailover(t);
												else if (-1 === this.manualLevelIndex) {
													var o = 0 === t ? this._levels.length - 1 : t - 1;
													this.currentLevelIndex !== o && 0 === this._levels[o].loadError && (this.warn(i + ": switch to " + o), e.levelRetry = !0, this.hls.nextAutoLevel = o)
												}
											}
										}, m.redundantFailover = function(e) {
											var t = this._levels[e],
												r = t.url.length;
											if (r > 1) {
												var n = (t.urlId + 1) % r;
												this.warn("Switching to redundant URL-id " + n), this._levels.forEach((function(e) {
													e.urlId = n
												})), this.level = e
											}
										}, m.onFragLoaded = function(e, t) {
											var r = t.frag;
											if (void 0 !== r && r.type === u.PlaylistLevelType.MAIN) {
												var n = this._levels[r.level];
												void 0 !== n && (n.fragmentError = 0, n.loadError = 0)
											}
										}, m.onLevelLoaded = function(e, t) {
											var r, n, i = t.level,
												a = t.details,
												s = this._levels[i];
											if (!s) return this.warn("Invalid level index " + i), void(null !== (n = t.deliveryDirectives) && void 0 !== n && n.skip && (a.deltaUpdateFailed = !0));
											i === this.currentLevelIndex ? (0 === s.fragmentError && (s.loadError = 0, this.retryCount = 0), this.playlistLoaded(i, t, s.details)) : null !== (r = t.deliveryDirectives) && void 0 !== r && r.skip && (a.deltaUpdateFailed = !0)
										}, m.onAudioTrackSwitched = function(e, t) {
											var r = this.hls.levels[this.currentLevelIndex];
											if (r && r.audioGroupIds) {
												for (var n = -1, i = this.hls.audioTracks[t.id].groupId, a = 0; a < r.audioGroupIds.length; a++)
													if (r.audioGroupIds[a] === i) {
														n = a;
														break
													} n !== r.urlId && (r.urlId = n, this.startLoad())
											}
										}, m.loadPlaylist = function(e) {
											var t = this.currentLevelIndex,
												r = this._levels[t];
											if (this.canLoad && r && r.url.length > 0) {
												var n = r.urlId,
													a = r.url[n];
												if (e) try {
													a = e.addDirectives(a)
												} catch (e) {
													this.warn("Could not construct new URL with HLS Delivery Directives: " + e)
												}
												this.log("Attempt loading level index " + t + (e ? " at sn " + e.msn + " part " + e.part : "") + " with URL-id " + n + " " + a), this.clearTimer(), this.hls.trigger(i.Events.LEVEL_LOADING, {
													url: a,
													level: t,
													id: n,
													deliveryDirectives: e || null
												})
											}
										}, m.removeLevel = function(e, t) {
											var r = function(e, r) {
													return r !== t
												},
												n = this._levels.filter((function(n, i) {
													return i !== e || n.url.length > 1 && void 0 !== t && (n.url = n.url.filter(r), n.audioGroupIds && (n.audioGroupIds = n.audioGroupIds.filter(r)), n.textGroupIds && (n.textGroupIds = n.textGroupIds.filter(r)), n.urlId = 0, !0)
												})).map((function(e, t) {
													var r = e.details;
													return null != r && r.fragments && r.fragments.forEach((function(e) {
														e.level = t
													})), e
												}));
											this._levels = n, this.hls.trigger(i.Events.LEVELS_UPDATED, {
												levels: n
											})
										}, p = l, (g = [{
											key: "levels",
											get: function() {
												return 0 === this._levels.length ? null : this._levels
											}
										}, {
											key: "level",
											get: function() {
												return this.currentLevelIndex
											},
											set: function(e) {
												var t, r = this._levels;
												if (0 !== r.length && (this.currentLevelIndex !== e || null === (t = r[e]) || void 0 === t || !t.details)) {
													if (e < 0 || e >= r.length) {
														var n = e < 0;
														if (this.hls.trigger(i.Events.ERROR, {
																type: a.ErrorTypes.OTHER_ERROR,
																details: a.ErrorDetails.LEVEL_SWITCH_ERROR,
																level: e,
																fatal: n,
																reason: "invalid level idx"
															}), n) return;
														e = Math.min(e, r.length - 1)
													}
													this.clearTimer();
													var s = this.currentLevelIndex,
														o = r[s],
														l = r[e];
													this.log("switching to level " + e + " from " + s), this.currentLevelIndex = e;
													var u = c({}, l, {
														level: e,
														maxBitrate: l.maxBitrate,
														uri: l.uri,
														urlId: l.urlId
													});
													delete u._urlId, this.hls.trigger(i.Events.LEVEL_SWITCHING, u);
													var d = l.details;
													if (!d || d.live) {
														var f = this.switchParams(l.uri, null == o ? void 0 : o.details);
														this.loadPlaylist(f)
													}
												}
											}
										}, {
											key: "manualLevel",
											get: function() {
												return this.manualLevelIndex
											},
											set: function(e) {
												this.manualLevelIndex = e, void 0 === this._startLevel && (this._startLevel = e), -1 !== e && (this.level = e)
											}
										}, {
											key: "firstLevel",
											get: function() {
												return this._firstLevel
											},
											set: function(e) {
												this._firstLevel = e
											}
										}, {
											key: "startLevel",
											get: function() {
												if (void 0 === this._startLevel) {
													var e = this.hls.config.startLevel;
													return void 0 !== e ? e : this._firstLevel
												}
												return this._startLevel
											},
											set: function(e) {
												this._startLevel = e
											}
										}, {
											key: "nextLoadLevel",
											get: function() {
												return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
											},
											set: function(e) {
												this.level = e, -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
											}
										}]) && d(p.prototype, g), v && d(p, v), l
									}(l.default)
							},
						"./src/controller/level-helper.ts":
							/*!****************************************!*\
							  !*** ./src/controller/level-helper.ts ***!
							  \****************************************/
							/*! exports provided: addGroupId, assignTrackIdsByGroup, updatePTS, updateFragPTSDTS, mergeDetails, mapPartIntersection, mapFragmentIntersection, adjustSliding, addSliding, computeReloadInterval, getFragmentWithSN, getPartWith */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "addGroupId", (function() {
									return a
								})), r.d(t, "assignTrackIdsByGroup", (function() {
									return s
								})), r.d(t, "updatePTS", (function() {
									return o
								})), r.d(t, "updateFragPTSDTS", (function() {
									return u
								})), r.d(t, "mergeDetails", (function() {
									return c
								})), r.d(t, "mapPartIntersection", (function() {
									return d
								})), r.d(t, "mapFragmentIntersection", (function() {
									return f
								})), r.d(t, "adjustSliding", (function() {
									return h
								})), r.d(t, "addSliding", (function() {
									return p
								})), r.d(t, "computeReloadInterval", (function() {
									return g
								})), r.d(t, "getFragmentWithSN", (function() {
									return v
								})), r.d(t, "getPartWith", (function() {
									return m
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../utils/logger */ "./src/utils/logger.ts");

								function a(e, t, r) {
									switch (t) {
										case "audio":
											e.audioGroupIds || (e.audioGroupIds = []), e.audioGroupIds.push(r);
											break;
										case "text":
											e.textGroupIds || (e.textGroupIds = []), e.textGroupIds.push(r)
									}
								}

								function s(e) {
									var t = {};
									e.forEach((function(e) {
										var r = e.groupId || "";
										e.id = t[r] = t[r] || 0, t[r]++
									}))
								}

								function o(e, t, r) {
									l(e[t], e[r])
								}

								function l(e, t) {
									var r = t.startPTS;
									if (Object(n.isFiniteNumber)(r)) {
										var i, a = 0;
										t.sn > e.sn ? (a = r - e.start, i = e) : (a = e.start - r, i = t), i.duration !== a && (i.duration = a)
									} else t.sn > e.sn ? e.cc === t.cc && e.minEndPTS ? t.start = e.start + (e.minEndPTS - e.start) : t.start = e.start + e.duration : t.start = Math.max(e.start - t.duration, 0)
								}

								function u(e, t, r, a, s, o) {
									a - r <= 0 && (i.logger.warn("Fragment should have a positive duration", t), a = r + t.duration, o = s + t.duration);
									var u = r,
										c = a,
										d = t.startPTS,
										f = t.endPTS;
									if (Object(n.isFiniteNumber)(d)) {
										var h = Math.abs(d - r);
										Object(n.isFiniteNumber)(t.deltaPTS) ? t.deltaPTS = Math.max(h, t.deltaPTS) : t.deltaPTS = h, u = Math.max(r, d), r = Math.min(r, d), s = Math.min(s, t.startDTS), c = Math.min(a, f), a = Math.max(a, f), o = Math.max(o, t.endDTS)
									}
									t.duration = a - r;
									var p = r - t.start;
									t.appendedPTS = a, t.start = t.startPTS = r, t.maxStartPTS = u, t.startDTS = s, t.endPTS = a, t.minEndPTS = c, t.endDTS = o;
									var g, v = t.sn;
									if (!e || v < e.startSN || v > e.endSN) return 0;
									var m = v - e.startSN,
										y = e.fragments;
									for (y[m] = t, g = m; g > 0; g--) l(y[g], y[g - 1]);
									for (g = m; g < y.length - 1; g++) l(y[g], y[g + 1]);
									return e.fragmentHint && l(y[y.length - 1], e.fragmentHint), e.PTSKnown = e.alignedSliding = !0, p
								}

								function c(e, t) {
									for (var r = null, a = e.fragments, s = a.length - 1; s >= 0; s--) {
										var o = a[s].initSegment;
										if (o) {
											r = o;
											break
										}
									}
									e.fragmentHint && delete e.fragmentHint.endPTS;
									var l, c = 0;
									if (f(e, t, (function(e, i) {
											e.relurl && (c = e.cc - i.cc), Object(n.isFiniteNumber)(e.startPTS) && Object(n.isFiniteNumber)(e.endPTS) && (i.start = i.startPTS = e.startPTS, i.startDTS = e.startDTS, i.appendedPTS = e.appendedPTS, i.maxStartPTS = e.maxStartPTS, i.endPTS = e.endPTS, i.endDTS = e.endDTS, i.minEndPTS = e.minEndPTS, i.duration = e.endPTS - e.startPTS, i.duration && (l = i), t.PTSKnown = t.alignedSliding = !0), i.elementaryStreams = e.elementaryStreams, i.loader = e.loader, i.stats = e.stats, i.urlId = e.urlId, e.initSegment && (i.initSegment = e.initSegment, r = e.initSegment)
										})), r && (t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments).forEach((function(e) {
											var t;
											e.initSegment && e.initSegment.relurl !== (null === (t = r) || void 0 === t ? void 0 : t.relurl) || (e.initSegment = r)
										})), t.skippedSegments && (t.deltaUpdateFailed = t.fragments.some((function(e) {
											return !e
										})), t.deltaUpdateFailed)) {
										i.logger.warn("[level-helper] Previous playlist missing segments skipped in delta playlist");
										for (var p = t.skippedSegments; p--;) t.fragments.shift();
										t.startSN = t.fragments[0].sn, t.startCC = t.fragments[0].cc
									}
									var g = t.fragments;
									if (c) {
										i.logger.warn("discontinuity sliding from playlist, take drift into account");
										for (var v = 0; v < g.length; v++) g[v].cc += c
									}
									t.skippedSegments && (t.startCC = t.fragments[0].cc), d(e.partList, t.partList, (function(e, t) {
										t.elementaryStreams = e.elementaryStreams, t.stats = e.stats
									})), l ? u(t, l, l.startPTS, l.endPTS, l.startDTS, l.endDTS) : h(e, t), g.length && (t.totalduration = t.edge - g[0].start), t.driftStartTime = e.driftStartTime, t.driftStart = e.driftStart;
									var m = t.advancedDateTime;
									if (t.advanced && m) {
										var y = t.edge;
										t.driftStart || (t.driftStartTime = m, t.driftStart = y), t.driftEndTime = m, t.driftEnd = y
									} else t.driftEndTime = e.driftEndTime, t.driftEnd = e.driftEnd, t.advancedDateTime = e.advancedDateTime
								}

								function d(e, t, r) {
									if (e && t)
										for (var n = 0, i = 0, a = e.length; i <= a; i++) {
											var s = e[i],
												o = t[i + n];
											s && o && s.index === o.index && s.fragment.sn === o.fragment.sn ? r(s, o) : n--
										}
								}

								function f(e, t, r) {
									for (var n = t.skippedSegments, i = Math.max(e.startSN, t.startSN) - t.startSN, a = (e.fragmentHint ? 1 : 0) + (n ? t.endSN : Math.min(e.endSN, t.endSN)) - t.startSN, s = t.startSN - e.startSN, o = t.fragmentHint ? t.fragments.concat(t.fragmentHint) : t.fragments, l = e.fragmentHint ? e.fragments.concat(e.fragmentHint) : e.fragments, u = i; u <= a; u++) {
										var c = l[s + u],
											d = o[u];
										n && !d && u < n && (d = t.fragments[u] = c), c && d && r(c, d)
									}
								}

								function h(e, t) {
									var r = t.startSN + t.skippedSegments - e.startSN,
										n = e.fragments;
									r < 0 || r >= n.length || p(t, n[r].start)
								}

								function p(e, t) {
									if (t) {
										for (var r = e.fragments, n = e.skippedSegments; n < r.length; n++) r[n].start += t;
										e.fragmentHint && (e.fragmentHint.start += t)
									}
								}

								function g(e, t) {
									var r, n = 1e3 * e.levelTargetDuration,
										i = n / 2,
										a = e.age,
										s = a > 0 && a < 3 * n,
										o = t.loading.end - t.loading.start,
										l = e.availabilityDelay;
									if (!1 === e.updated)
										if (s) {
											var u = 333 * e.misses;
											r = Math.max(Math.min(i, 2 * o), u), e.availabilityDelay = (e.availabilityDelay || 0) + r
										} else r = i;
									else s ? (l = Math.min(l || n / 2, a), e.availabilityDelay = l, r = l + n - a) : r = n - o;
									return Math.round(r)
								}

								function v(e, t, r) {
									if (!e || !e.details) return null;
									var n = e.details,
										i = n.fragments[t - n.startSN];
									return i || ((i = n.fragmentHint) && i.sn === t ? i : t < n.startSN && r && r.sn === t ? r : null)
								}

								function m(e, t, r) {
									if (!e || !e.details) return null;
									var n = e.details.partList;
									if (n)
										for (var i = n.length; i--;) {
											var a = n[i];
											if (a.index === r && a.fragment.sn === t) return a
										}
									return null
								}
							},
						"./src/controller/stream-controller.ts":
							/*!*********************************************!*\
							  !*** ./src/controller/stream-controller.ts ***!
							  \*********************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return y
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ./base-stream-controller */ "./src/controller/base-stream-controller.ts"),
									a = r( /*! ../is-supported */ "./src/is-supported.ts"),
									s = r( /*! ../events */ "./src/events.ts"),
									o = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									l = r( /*! ./fragment-tracker */ "./src/controller/fragment-tracker.ts"),
									u = r( /*! ../types/loader */ "./src/types/loader.ts"),
									c = r( /*! ../loader/fragment */ "./src/loader/fragment.ts"),
									d = r( /*! ../demux/transmuxer-interface */ "./src/demux/transmuxer-interface.ts"),
									f = r( /*! ../types/transmuxer */ "./src/types/transmuxer.ts"),
									h = r( /*! ./gap-controller */ "./src/controller/gap-controller.ts"),
									p = r( /*! ../errors */ "./src/errors.ts"),
									g = r( /*! ../utils/logger */ "./src/utils/logger.ts");

								function v(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function m(e, t) {
									return m = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, m(e, t)
								}
								var y = function(e) {
									var t, r;

									function y(t, r) {
										var n;
										return (n = e.call(this, t, r, "[stream-controller]") || this).audioCodecSwap = !1, n.gapController = null, n.level = -1, n._forceStartLoad = !1, n.altAudio = !1, n.audioOnly = !1, n.fragPlaying = null, n.onvplaying = null, n.onvseeked = null, n.fragLastKbps = 0, n.stalled = !1, n.couldBacktrack = !1, n.audioCodecSwitch = !1, n.videoBuffer = null, n._registerListeners(), n
									}
									r = e, (t = y).prototype = Object.create(r.prototype), t.prototype.constructor = t, m(t, r);
									var E, b, T, S = y.prototype;
									return S._registerListeners = function() {
										var e = this.hls;
										e.on(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(s.Events.LEVEL_LOADING, this.onLevelLoading, this), e.on(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.on(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.on(s.Events.ERROR, this.onError, this), e.on(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.on(s.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.on(s.Events.BUFFER_CREATED, this.onBufferCreated, this), e.on(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), e.on(s.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), e.on(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
									}, S._unregisterListeners = function() {
										var e = this.hls;
										e.off(s.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(s.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(s.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(s.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(s.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.off(s.Events.FRAG_LOAD_EMERGENCY_ABORTED, this.onFragLoadEmergencyAborted, this), e.off(s.Events.ERROR, this.onError, this), e.off(s.Events.AUDIO_TRACK_SWITCHING, this.onAudioTrackSwitching, this), e.off(s.Events.AUDIO_TRACK_SWITCHED, this.onAudioTrackSwitched, this), e.off(s.Events.BUFFER_CREATED, this.onBufferCreated, this), e.off(s.Events.BUFFER_FLUSHED, this.onBufferFlushed, this), e.off(s.Events.LEVELS_UPDATED, this.onLevelsUpdated, this), e.off(s.Events.FRAG_BUFFERED, this.onFragBuffered, this)
									}, S.onHandlerDestroying = function() {
										this._unregisterListeners(), this.onMediaDetaching()
									}, S.startLoad = function(e) {
										if (this.levels) {
											var t = this.lastCurrentTime,
												r = this.hls;
											if (this.stopLoad(), this.setInterval(100), this.level = -1, this.fragLoadError = 0, !this.startFragRequested) {
												var n = r.startLevel; - 1 === n && (r.config.testBandwidth ? (n = 0, this.bitrateTest = !0) : n = r.nextAutoLevel), this.level = r.nextLoadLevel = n, this.loadedmetadata = !1
											}
											t > 0 && -1 === e && (this.log("Override startPosition with lastCurrentTime @" + t.toFixed(3)), e = t), this.state = i.State.IDLE, this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e, this.tick()
										} else this._forceStartLoad = !0, this.state = i.State.STOPPED
									}, S.stopLoad = function() {
										this._forceStartLoad = !1, e.prototype.stopLoad.call(this)
									}, S.doTick = function() {
										switch (this.state) {
											case i.State.IDLE:
												this.doTickIdle();
												break;
											case i.State.WAITING_LEVEL:
												var e, t = this.levels,
													r = this.level,
													n = null == t || null === (e = t[r]) || void 0 === e ? void 0 : e.details;
												if (n && (!n.live || this.levelLastLoaded === this.level)) {
													if (this.waitForCdnTuneIn(n)) break;
													this.state = i.State.IDLE;
													break
												}
												break;
											case i.State.FRAG_LOADING_WAITING_RETRY:
												var a, s = self.performance.now(),
													o = this.retryDate;
												(!o || s >= o || null !== (a = this.media) && void 0 !== a && a.seeking) && (this.log("retryDate reached, switch back to IDLE state"), this.state = i.State.IDLE)
										}
										this.onTickEnd()
									}, S.onTickEnd = function() {
										e.prototype.onTickEnd.call(this), this.checkBuffer(), this.checkFragmentChanged()
									}, S.doTickIdle = function() {
										var e, t, r = this.hls,
											n = this.levelLastLoaded,
											a = this.levels,
											o = this.media,
											d = r.config,
											f = r.nextLoadLevel;
										if (null !== n && (o || !this.startFragRequested && d.startFragPrefetch) && (!this.altAudio || !this.audioOnly) && a && a[f]) {
											var h = a[f];
											this.level = r.nextLoadLevel = f;
											var p = h.details;
											if (!p || this.state === i.State.WAITING_LEVEL || p.live && this.levelLastLoaded !== f) this.state = i.State.WAITING_LEVEL;
											else {
												var g = this.getFwdBufferInfo(this.mediaBuffer ? this.mediaBuffer : o, u.PlaylistLevelType.MAIN);
												if (null !== g && !(g.len >= this.getMaxBufferLength(h.maxBitrate))) {
													if (this._streamEnded(g, p)) {
														var v = {};
														return this.altAudio && (v.type = "video"), this.hls.trigger(s.Events.BUFFER_EOS, v), void(this.state = i.State.ENDED)
													}
													var m = g.end,
														y = this.getNextFragment(m, p);
													if (this.couldBacktrack && !this.fragPrevious && y && "initSegment" !== y.sn) {
														var E = y.sn - p.startSN;
														E > 1 && (y = p.fragments[E - 1], this.fragmentTracker.removeFragment(y))
													}
													if (y && this.fragmentTracker.getState(y) === l.FragmentState.OK && this.nextLoadPosition > m) {
														var b = this.audioOnly && !this.altAudio ? c.ElementaryStreamTypes.AUDIO : c.ElementaryStreamTypes.VIDEO;
														this.afterBufferFlushed(o, b, u.PlaylistLevelType.MAIN), y = this.getNextFragment(this.nextLoadPosition, p)
													}
													y && (!y.initSegment || y.initSegment.data || this.bitrateTest || (y = y.initSegment), "identity" !== (null === (e = y.decryptdata) || void 0 === e ? void 0 : e.keyFormat) || null !== (t = y.decryptdata) && void 0 !== t && t.key ? this.loadFragment(y, p, m) : this.loadKey(y, p))
												}
											}
										}
									}, S.loadFragment = function(t, r, n) {
										var i, a = this.fragmentTracker.getState(t);
										if (this.fragCurrent = t, a === l.FragmentState.BACKTRACKED) {
											var s = this.fragmentTracker.getBacktrackData(t);
											if (s) return this._handleFragmentLoadProgress(s), void this._handleFragmentLoadComplete(s);
											a = l.FragmentState.NOT_LOADED
										}
										a === l.FragmentState.NOT_LOADED || a === l.FragmentState.PARTIAL ? "initSegment" === t.sn ? this._loadInitSegment(t) : this.bitrateTest ? (t.bitrateTest = !0, this.log("Fragment " + t.sn + " of level " + t.level + " is being downloaded to test bitrate and will not be buffered"), this._loadBitrateTestFrag(t)) : (this.startFragRequested = !0, e.prototype.loadFragment.call(this, t, r, n)) : a === l.FragmentState.APPENDING ? this.reduceMaxBufferLength(t.duration) && this.fragmentTracker.removeFragment(t) : 0 === (null === (i = this.media) || void 0 === i ? void 0 : i.buffered.length) && this.fragmentTracker.removeAllFragments()
									}, S.getAppendedFrag = function(e) {
										var t = this.fragmentTracker.getAppendedFrag(e, u.PlaylistLevelType.MAIN);
										return t && "fragment" in t ? t.fragment : t
									}, S.getBufferedFrag = function(e) {
										return this.fragmentTracker.getBufferedFrag(e, u.PlaylistLevelType.MAIN)
									}, S.followingBufferedFrag = function(e) {
										return e ? this.getBufferedFrag(e.end + .5) : null
									}, S.immediateLevelSwitch = function() {
										this.abortCurrentFrag(), this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
									}, S.nextLevelSwitch = function() {
										var e = this.levels,
											t = this.media;
										if (null != t && t.readyState) {
											var r, n = this.getAppendedFrag(t.currentTime);
											if (n && n.start > 1 && this.flushMainBuffer(0, n.start - 1), !t.paused && e) {
												var i = e[this.hls.nextLoadLevel],
													a = this.fragLastKbps;
												r = a && this.fragCurrent ? this.fragCurrent.duration * i.maxBitrate / (1e3 * a) + 1 : 0
											} else r = 0;
											var s = this.getBufferedFrag(t.currentTime + r);
											if (s) {
												var o = this.followingBufferedFrag(s);
												if (o) {
													this.abortCurrentFrag();
													var l = o.maxStartPTS ? o.maxStartPTS : o.start,
														u = o.duration,
														c = Math.max(s.end, l + Math.min(Math.max(u - this.config.maxFragLookUpTolerance, .5 * u), .75 * u));
													this.flushMainBuffer(c, Number.POSITIVE_INFINITY)
												}
											}
										}
									}, S.abortCurrentFrag = function() {
										var e = this.fragCurrent;
										this.fragCurrent = null, null != e && e.loader && e.loader.abort(), this.state === i.State.KEY_LOADING && (this.state = i.State.IDLE), this.nextLoadPosition = this.getLoadPosition()
									}, S.flushMainBuffer = function(t, r) {
										e.prototype.flushMainBuffer.call(this, t, r, this.altAudio ? "video" : null)
									}, S.onMediaAttached = function(t, r) {
										e.prototype.onMediaAttached.call(this, t, r);
										var n = r.media;
										this.onvplaying = this.onMediaPlaying.bind(this), this.onvseeked = this.onMediaSeeked.bind(this), n.addEventListener("playing", this.onvplaying), n.addEventListener("seeked", this.onvseeked), this.gapController = new h.default(this.config, n, this.fragmentTracker, this.hls)
									}, S.onMediaDetaching = function() {
										var t = this.media;
										t && (t.removeEventListener("playing", this.onvplaying), t.removeEventListener("seeked", this.onvseeked), this.onvplaying = this.onvseeked = null, this.videoBuffer = null), this.fragPlaying = null, this.gapController && (this.gapController.destroy(), this.gapController = null), e.prototype.onMediaDetaching.call(this)
									}, S.onMediaPlaying = function() {
										this.tick()
									}, S.onMediaSeeked = function() {
										var e = this.media,
											t = e ? e.currentTime : null;
										Object(n.isFiniteNumber)(t) && this.log("Media seeked to " + t.toFixed(3)), this.tick()
									}, S.onManifestLoading = function() {
										this.log("Trigger BUFFER_RESET"), this.hls.trigger(s.Events.BUFFER_RESET, void 0), this.fragmentTracker.removeAllFragments(), this.couldBacktrack = this.stalled = !1, this.startPosition = this.lastCurrentTime = 0, this.fragPlaying = null
									}, S.onManifestParsed = function(e, t) {
										var r, n = !1,
											i = !1;
										t.levels.forEach((function(e) {
											(r = e.audioCodec) && (-1 !== r.indexOf("mp4a.40.2") && (n = !0), -1 !== r.indexOf("mp4a.40.5") && (i = !0))
										})), this.audioCodecSwitch = n && i && !Object(a.changeTypeSupported)(), this.audioCodecSwitch && this.log("Both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"), this.levels = t.levels, this.startFragRequested = !1
									}, S.onLevelLoading = function(e, t) {
										var r = this.levels;
										if (r && this.state === i.State.IDLE) {
											var n = r[t.level];
											(!n.details || n.details.live && this.levelLastLoaded !== t.level || this.waitForCdnTuneIn(n.details)) && (this.state = i.State.WAITING_LEVEL)
										}
									}, S.onLevelLoaded = function(e, t) {
										var r, n = this.levels,
											a = t.level,
											o = t.details,
											l = o.totalduration;
										if (n) {
											this.log("Level " + a + " loaded [" + o.startSN + "," + o.endSN + "], cc [" + o.startCC + ", " + o.endCC + "] duration:" + l);
											var u = this.fragCurrent;
											!u || this.state !== i.State.FRAG_LOADING && this.state !== i.State.FRAG_LOADING_WAITING_RETRY || u.level !== t.level && u.loader && (this.state = i.State.IDLE, u.loader.abort());
											var c = n[a],
												d = 0;
											if (o.live || null !== (r = c.details) && void 0 !== r && r.live) {
												if (o.fragments[0] || (o.deltaUpdateFailed = !0), o.deltaUpdateFailed) return;
												d = this.alignPlaylists(o, c.details)
											}
											if (c.details = o, this.levelLastLoaded = a, this.hls.trigger(s.Events.LEVEL_UPDATED, {
													details: o,
													level: a
												}), this.state === i.State.WAITING_LEVEL) {
												if (this.waitForCdnTuneIn(o)) return;
												this.state = i.State.IDLE
											}
											this.startFragRequested ? o.live && this.synchronizeToLiveEdge(o) : this.setStartPosition(o, d), this.tick()
										} else this.warn("Levels were reset while loading level " + a)
									}, S._handleFragmentLoadProgress = function(e) {
										var t, r = e.frag,
											n = e.part,
											i = e.payload,
											a = this.levels;
										if (a) {
											var s = a[r.level],
												o = s.details;
											if (o) {
												var l = s.videoCodec,
													c = o.PTSKnown || !o.live,
													h = null === (t = r.initSegment) || void 0 === t ? void 0 : t.data,
													p = this._getAudioCodec(s),
													g = this.transmuxer = this.transmuxer || new d.default(this.hls, u.PlaylistLevelType.MAIN, this._handleTransmuxComplete.bind(this), this._handleTransmuxerFlush.bind(this)),
													v = n ? n.index : -1,
													m = -1 !== v,
													y = new f.ChunkMetadata(r.level, r.sn, r.stats.chunkCount, i.byteLength, v, m),
													E = this.initPTS[r.cc];
												g.push(i, h, p, l, r, n, o.totalduration, c, y, E)
											} else this.warn("Dropping fragment " + r.sn + " of level " + r.level + " after level details were reset")
										} else this.warn("Levels were reset while fragment load was in progress. Fragment " + r.sn + " of level " + r.level + " will not be buffered")
									}, S.onAudioTrackSwitching = function(e, t) {
										var r = this.altAudio,
											n = !!t.url,
											i = t.id;
										if (!n) {
											if (this.mediaBuffer !== this.media) {
												this.log("Switching on main audio, use media.buffered to schedule main fragment loading"), this.mediaBuffer = this.media;
												var a = this.fragCurrent;
												null != a && a.loader && (this.log("Switching to main audio track, cancel main fragment load"), a.loader.abort()), this.resetTransmuxer(), this.resetLoadingState()
											} else this.audioOnly && this.resetTransmuxer();
											var o = this.hls;
											r && o.trigger(s.Events.BUFFER_FLUSHING, {
												startOffset: 0,
												endOffset: Number.POSITIVE_INFINITY,
												type: "audio"
											}), o.trigger(s.Events.AUDIO_TRACK_SWITCHED, {
												id: i
											})
										}
									}, S.onAudioTrackSwitched = function(e, t) {
										var r = t.id,
											n = !!this.hls.audioTracks[r].url;
										if (n) {
											var i = this.videoBuffer;
											i && this.mediaBuffer !== i && (this.log("Switching on alternate audio, use video.buffered to schedule main fragment loading"), this.mediaBuffer = i)
										}
										this.altAudio = n, this.tick()
									}, S.onBufferCreated = function(e, t) {
										var r, n, i = t.tracks,
											a = !1;
										for (var s in i) {
											var o = i[s];
											if ("main" === o.id) {
												if (n = s, r = o, "video" === s) {
													var l = i[s];
													l && (this.videoBuffer = l.buffer)
												}
											} else a = !0
										}
										a && r ? (this.log("Alternate track found, use " + n + ".buffered to schedule main fragment loading"), this.mediaBuffer = r.buffer) : this.mediaBuffer = this.media
									}, S.onFragBuffered = function(e, t) {
										var r = t.frag,
											n = t.part;
										if (!r || r.type === u.PlaylistLevelType.MAIN) {
											if (this.fragContextChanged(r)) return this.warn("Fragment " + r.sn + (n ? " p: " + n.index : "") + " of level " + r.level + " finished buffering, but was aborted. state: " + this.state), void(this.state === i.State.PARSED && (this.state = i.State.IDLE));
											var a = n ? n.stats : r.stats;
											this.fragLastKbps = Math.round(8 * a.total / (a.buffering.end - a.loading.first)), "initSegment" !== r.sn && (this.fragPrevious = r), this.fragBufferedComplete(r, n)
										}
									}, S.onError = function(e, t) {
										switch (t.details) {
											case p.ErrorDetails.FRAG_LOAD_ERROR:
											case p.ErrorDetails.FRAG_LOAD_TIMEOUT:
											case p.ErrorDetails.KEY_LOAD_ERROR:
											case p.ErrorDetails.KEY_LOAD_TIMEOUT:
												this.onFragmentOrKeyLoadError(u.PlaylistLevelType.MAIN, t);
												break;
											case p.ErrorDetails.LEVEL_LOAD_ERROR:
											case p.ErrorDetails.LEVEL_LOAD_TIMEOUT:
												this.state !== i.State.ERROR && (t.fatal ? (this.warn("" + t.details), this.state = i.State.ERROR) : t.levelRetry || this.state !== i.State.WAITING_LEVEL || (this.state = i.State.IDLE));
												break;
											case p.ErrorDetails.BUFFER_FULL_ERROR:
												if ("main" === t.parent && (this.state === i.State.PARSING || this.state === i.State.PARSED)) {
													var r = !0,
														n = this.getFwdBufferInfo(this.media, u.PlaylistLevelType.MAIN);
													n && n.len > .5 && (r = !this.reduceMaxBufferLength(n.len)), r && (this.warn("buffer full error also media.currentTime is not buffered, flush main"), this.immediateLevelSwitch()), this.resetLoadingState()
												}
										}
									}, S.checkBuffer = function() {
										var e = this.media,
											t = this.gapController;
										if (e && t && e.readyState) {
											var r = o.BufferHelper.getBuffered(e);
											!this.loadedmetadata && r.length ? (this.loadedmetadata = !0, this.seekToStartPos()) : t.poll(this.lastCurrentTime), this.lastCurrentTime = e.currentTime
										}
									}, S.onFragLoadEmergencyAborted = function() {
										this.state = i.State.IDLE, this.loadedmetadata || (this.startFragRequested = !1, this.nextLoadPosition = this.startPosition), this.tickImmediate()
									}, S.onBufferFlushed = function(e, t) {
										var r = t.type;
										if (r !== c.ElementaryStreamTypes.AUDIO || this.audioOnly && !this.altAudio) {
											var n = (r === c.ElementaryStreamTypes.VIDEO ? this.videoBuffer : this.mediaBuffer) || this.media;
											this.afterBufferFlushed(n, r, u.PlaylistLevelType.MAIN)
										}
									}, S.onLevelsUpdated = function(e, t) {
										this.levels = t.levels
									}, S.swapAudioCodec = function() {
										this.audioCodecSwap = !this.audioCodecSwap
									}, S.seekToStartPos = function() {
										var e = this.media,
											t = e.currentTime,
											r = this.startPosition;
										if (r >= 0 && t < r) {
											if (e.seeking) return void g.logger.log("could not seek to " + r + ", already seeking at " + t);
											var n = o.BufferHelper.getBuffered(e),
												i = (n.length ? n.start(0) : 0) - r;
											i > 0 && (i < this.config.maxBufferHole || i < this.config.maxFragLookUpTolerance) && (g.logger.log("adjusting start position by " + i + " to match buffer start"), r += i, this.startPosition = r), this.log("seek to target start position " + r + " from current time " + t), e.currentTime = r
										}
									}, S._getAudioCodec = function(e) {
										var t = this.config.defaultAudioCodec || e.audioCodec;
										return this.audioCodecSwap && t && (this.log("Swapping audio codec"), t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), t
									}, S._loadBitrateTestFrag = function(e) {
										var t = this;
										this._doFragLoad(e).then((function(r) {
											var n = t.hls;
											if (r && !n.nextLoadLevel && !t.fragContextChanged(e)) {
												t.fragLoadError = 0, t.state = i.State.IDLE, t.startFragRequested = !1, t.bitrateTest = !1;
												var a = e.stats;
												a.parsing.start = a.parsing.end = a.buffering.start = a.buffering.end = self.performance.now(), n.trigger(s.Events.FRAG_LOADED, r)
											}
										}))
									}, S._handleTransmuxComplete = function(e) {
										var t, r = "main",
											a = this.hls,
											o = e.remuxResult,
											l = e.chunkMeta,
											u = this.getCurrentContext(l);
										if (!u) return this.warn("The loading context changed while buffering fragment " + l.sn + " of level " + l.level + ". This chunk will not be buffered."), void this.resetLiveStartWhenNotLoaded(l.level);
										var d = u.frag,
											f = u.part,
											h = u.level,
											p = o.video,
											g = o.text,
											v = o.id3,
											m = o.initSegment,
											y = this.altAudio ? void 0 : o.audio;
										if (!this.fragContextChanged(d)) {
											if (this.state = i.State.PARSING, m) {
												m.tracks && (this._bufferInitSegment(h, m.tracks, d, l), a.trigger(s.Events.FRAG_PARSING_INIT_SEGMENT, {
													frag: d,
													id: r,
													tracks: m.tracks
												}));
												var E = m.initPTS,
													b = m.timescale;
												Object(n.isFiniteNumber)(E) && (this.initPTS[d.cc] = E, a.trigger(s.Events.INIT_PTS_FOUND, {
													frag: d,
													id: r,
													initPTS: E,
													timescale: b
												}))
											}
											if (p && !1 !== o.independent) {
												if (h.details) {
													var T = p.startPTS,
														S = p.endPTS,
														k = p.startDTS,
														w = p.endDTS;
													if (f) f.elementaryStreams[p.type] = {
														startPTS: T,
														endPTS: S,
														startDTS: k,
														endDTS: w
													};
													else if (p.firstKeyFrame && p.independent && (this.couldBacktrack = !0), p.dropped && p.independent) {
														if (this.getLoadPosition() + this.config.maxBufferHole < T) return void this.backtrack(d);
														d.setElementaryStreamInfo(p.type, d.start, S, d.start, w, !0)
													}
													d.setElementaryStreamInfo(p.type, T, S, k, w), this.bufferFragmentData(p, d, f, l)
												}
											} else if (!1 === o.independent) return void this.backtrack(d);
											if (y) {
												var L = y.startPTS,
													A = y.endPTS,
													D = y.startDTS,
													C = y.endDTS;
												f && (f.elementaryStreams[c.ElementaryStreamTypes.AUDIO] = {
													startPTS: L,
													endPTS: A,
													startDTS: D,
													endDTS: C
												}), d.setElementaryStreamInfo(c.ElementaryStreamTypes.AUDIO, L, A, D, C), this.bufferFragmentData(y, d, f, l)
											}
											if (null != v && null !== (t = v.samples) && void 0 !== t && t.length) {
												var _ = {
													frag: d,
													id: r,
													samples: v.samples
												};
												a.trigger(s.Events.FRAG_PARSING_METADATA, _)
											}
											if (g) {
												var R = {
													frag: d,
													id: r,
													samples: g.samples
												};
												a.trigger(s.Events.FRAG_PARSING_USERDATA, R)
											}
										}
									}, S._bufferInitSegment = function(e, t, r, n) {
										var a = this;
										if (this.state === i.State.PARSING) {
											this.audioOnly = !!t.audio && !t.video, this.altAudio && !this.audioOnly && delete t.audio;
											var o = t.audio,
												l = t.video,
												u = t.audiovideo;
											if (o) {
												var c = e.audioCodec,
													d = navigator.userAgent.toLowerCase();
												this.audioCodecSwitch && (c && (c = -1 !== c.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"), 1 !== o.metadata.channelCount && -1 === d.indexOf("firefox") && (c = "mp4a.40.5")), -1 !== d.indexOf("android") && "audio/mpeg" !== o.container && (c = "mp4a.40.2", this.log("Android: force audio codec to " + c)), e.audioCodec && e.audioCodec !== c && this.log('Swapping manifest audio codec "' + e.audioCodec + '" for "' + c + '"'), o.levelCodec = c, o.id = "main", this.log("Init audio buffer, container:" + o.container + ", codecs[selected/level/parsed]=[" + (c || "") + "/" + (e.audioCodec || "") + "/" + o.codec + "]")
											}
											l && (l.levelCodec = e.videoCodec, l.id = "main", this.log("Init video buffer, container:" + l.container + ", codecs[level/parsed]=[" + (e.videoCodec || "") + "/" + l.codec + "]")), u && this.log("Init audiovideo buffer, container:" + u.container + ", codecs[level/parsed]=[" + (e.attrs.CODECS || "") + "/" + u.codec + "]"), this.hls.trigger(s.Events.BUFFER_CODECS, t), Object.keys(t).forEach((function(e) {
												var i = t[e].initSegment;
												null != i && i.byteLength && a.hls.trigger(s.Events.BUFFER_APPENDING, {
													type: e,
													data: i,
													frag: r,
													part: null,
													chunkMeta: n,
													parent: r.type
												})
											})), this.tick()
										}
									}, S.backtrack = function(e) {
										this.couldBacktrack = !0, this.resetTransmuxer(), this.flushBufferGap(e);
										var t = this.fragmentTracker.backtrack(e);
										this.fragPrevious = null, this.nextLoadPosition = e.start, t ? this.resetFragmentLoading(e) : this.state = i.State.BACKTRACKING
									}, S.checkFragmentChanged = function() {
										var e = this.media,
											t = null;
										if (e && e.readyState > 1 && !1 === e.seeking) {
											var r = e.currentTime;
											if (o.BufferHelper.isBuffered(e, r) ? t = this.getAppendedFrag(r) : o.BufferHelper.isBuffered(e, r + .1) && (t = this.getAppendedFrag(r + .1)), t) {
												var n = this.fragPlaying,
													i = t.level;
												n && t.sn === n.sn && n.level === i && t.urlId === n.urlId || (this.hls.trigger(s.Events.FRAG_CHANGED, {
													frag: t
												}), n && n.level === i || this.hls.trigger(s.Events.LEVEL_SWITCHED, {
													level: i
												}), this.fragPlaying = t)
											}
										}
									}, E = y, (b = [{
										key: "nextLevel",
										get: function() {
											var e = this.nextBufferedFrag;
											return e ? e.level : -1
										}
									}, {
										key: "currentLevel",
										get: function() {
											var e = this.media;
											if (e) {
												var t = this.getAppendedFrag(e.currentTime);
												if (t) return t.level
											}
											return -1
										}
									}, {
										key: "nextBufferedFrag",
										get: function() {
											var e = this.media;
											if (e) {
												var t = this.getAppendedFrag(e.currentTime);
												return this.followingBufferedFrag(t)
											}
											return null
										}
									}, {
										key: "forceStartLoad",
										get: function() {
											return this._forceStartLoad
										}
									}]) && v(E.prototype, b), T && v(E, T), y
								}(i.default)
							},
						"./src/controller/subtitle-stream-controller.ts":
							/*!******************************************************!*\
							  !*** ./src/controller/subtitle-stream-controller.ts ***!
							  \******************************************************/
							/*! exports provided: SubtitleStreamController */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "SubtitleStreamController", (function() {
									return p
								}));
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../utils/buffer-helper */ "./src/utils/buffer-helper.ts"),
									a = r( /*! ./fragment-finders */ "./src/controller/fragment-finders.ts"),
									s = r( /*! ../utils/discontinuities */ "./src/utils/discontinuities.ts"),
									o = r( /*! ./level-helper */ "./src/controller/level-helper.ts"),
									l = r( /*! ./fragment-tracker */ "./src/controller/fragment-tracker.ts"),
									u = r( /*! ./base-stream-controller */ "./src/controller/base-stream-controller.ts"),
									c = r( /*! ../types/loader */ "./src/types/loader.ts"),
									d = r( /*! ../types/level */ "./src/types/level.ts");

								function f(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function h(e, t) {
									return h = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, h(e, t)
								}
								var p = function(e) {
									var t, r;

									function p(t, r) {
										var n;
										return (n = e.call(this, t, r, "[subtitle-stream-controller]") || this).levels = [], n.currentTrackId = -1, n.tracksBuffered = [], n.mainDetails = null, n._registerListeners(), n
									}
									r = e, (t = p).prototype = Object.create(r.prototype), t.prototype.constructor = t, h(t, r);
									var g, v, m, y = p.prototype;
									return y.onHandlerDestroying = function() {
										this._unregisterListeners(), this.mainDetails = null
									}, y._registerListeners = function() {
										var e = this.hls;
										e.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(n.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.on(n.Events.ERROR, this.onError, this), e.on(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(n.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.on(n.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(n.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.on(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
									}, y._unregisterListeners = function() {
										var e = this.hls;
										e.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(n.Events.LEVEL_LOADED, this.onLevelLoaded, this), e.off(n.Events.ERROR, this.onError, this), e.off(n.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(n.Events.SUBTITLE_TRACK_SWITCH, this.onSubtitleTrackSwitch, this), e.off(n.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(n.Events.SUBTITLE_FRAG_PROCESSED, this.onSubtitleFragProcessed, this), e.off(n.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
									}, y.startLoad = function() {
										this.stopLoad(), this.state = u.State.IDLE, this.setInterval(500), this.tick()
									}, y.onManifestLoading = function() {
										this.mainDetails = null, this.fragmentTracker.removeAllFragments()
									}, y.onLevelLoaded = function(e, t) {
										this.mainDetails = t.details
									}, y.onSubtitleFragProcessed = function(e, t) {
										var r = t.frag,
											n = t.success;
										if (this.fragPrevious = r, this.state = u.State.IDLE, n) {
											var i = this.tracksBuffered[this.currentTrackId];
											if (i) {
												for (var a, s = r.start, o = 0; o < i.length; o++)
													if (s >= i[o].start && s <= i[o].end) {
														a = i[o];
														break
													} var l = r.start + r.duration;
												a ? a.end = l : (a = {
													start: s,
													end: l
												}, i.push(a)), this.fragmentTracker.fragBuffered(r)
											}
										}
									}, y.onBufferFlushing = function(e, t) {
										var r = t.startOffset,
											n = t.endOffset;
										if (0 === r && n !== Number.POSITIVE_INFINITY) {
											var i = this.currentTrackId,
												a = this.levels;
											if (!a.length || !a[i] || !a[i].details) return;
											var s = n - a[i].details.targetduration;
											if (s <= 0) return;
											t.endOffsetSubtitles = Math.max(0, s), this.tracksBuffered.forEach((function(e) {
												for (var t = 0; t < e.length;)
													if (e[t].end <= s) e.shift();
													else {
														if (!(e[t].start < s)) break;
														e[t].start = s, t++
													}
											})), this.fragmentTracker.removeFragmentsInRange(r, s, c.PlaylistLevelType.SUBTITLE)
										}
									}, y.onError = function(e, t) {
										var r, n = t.frag;
										n && n.type === c.PlaylistLevelType.SUBTITLE && (null !== (r = this.fragCurrent) && void 0 !== r && r.loader && this.fragCurrent.loader.abort(), this.state = u.State.IDLE)
									}, y.onSubtitleTracksUpdated = function(e, t) {
										var r = this,
											n = t.subtitleTracks;
										this.tracksBuffered = [], this.levels = n.map((function(e) {
											return new d.Level(e)
										})), this.fragmentTracker.removeAllFragments(), this.fragPrevious = null, this.levels.forEach((function(e) {
											r.tracksBuffered[e.id] = []
										})), this.mediaBuffer = null
									}, y.onSubtitleTrackSwitch = function(e, t) {
										if (this.currentTrackId = t.id, this.levels.length && -1 !== this.currentTrackId) {
											var r = this.levels[this.currentTrackId];
											null != r && r.details ? this.mediaBuffer = this.mediaBufferTimeRanges : this.mediaBuffer = null, r && this.setInterval(500)
										} else this.clearInterval()
									}, y.onSubtitleTrackLoaded = function(e, t) {
										var r, n = t.details,
											i = t.id,
											l = this.currentTrackId,
											c = this.levels;
										if (c.length) {
											var d = c[l];
											if (!(i >= c.length || i !== l) && d) {
												if (this.mediaBuffer = this.mediaBufferTimeRanges, n.live || null !== (r = d.details) && void 0 !== r && r.live) {
													var f = this.mainDetails;
													if (n.deltaUpdateFailed || !f) return;
													var h = f.fragments[0];
													d.details ? 0 === this.alignPlaylists(n, d.details) && h && Object(o.addSliding)(n, h.start) : n.hasProgramDateTime && f.hasProgramDateTime ? Object(s.alignMediaPlaylistByPDT)(n, f) : h && Object(o.addSliding)(n, h.start)
												}
												d.details = n, this.levelLastLoaded = i, this.tick(), n.live && !this.fragCurrent && this.media && this.state === u.State.IDLE && (Object(a.findFragmentByPTS)(null, n.fragments, this.media.currentTime, 0) || (this.warn("Subtitle playlist not aligned with playback"), d.details = void 0))
											}
										}
									}, y._handleFragmentLoadComplete = function(e) {
										var t = e.frag,
											r = e.payload,
											i = t.decryptdata,
											a = this.hls;
										if (!this.fragContextChanged(t) && r && r.byteLength > 0 && i && i.key && i.iv && "AES-128" === i.method) {
											var s = performance.now();
											this.decrypter.webCryptoDecrypt(new Uint8Array(r), i.key.buffer, i.iv.buffer).then((function(e) {
												var r = performance.now();
												a.trigger(n.Events.FRAG_DECRYPTED, {
													frag: t,
													payload: e,
													stats: {
														tstart: s,
														tdecrypt: r
													}
												})
											}))
										}
									}, y.doTick = function() {
										if (this.media) {
											if (this.state === u.State.IDLE) {
												var e, t = this.currentTrackId,
													r = this.levels;
												if (!r.length || !r[t] || !r[t].details) return;
												var n = r[t].details,
													s = n.targetduration,
													o = this.config,
													c = this.media,
													d = i.BufferHelper.bufferedInfo(this.mediaBufferTimeRanges, c.currentTime - s, o.maxBufferHole),
													f = d.end;
												if (d.len > this.getMaxBufferLength() + s) return;
												console.assert(n, "Subtitle track details are defined on idle subtitle stream controller tick");
												var h, p = n.fragments,
													g = p.length,
													v = n.edge,
													m = this.fragPrevious;
												if (f < v) {
													var y = o.maxFragLookUpTolerance;
													!(h = Object(a.findFragmentByPTS)(m, p, f, y)) && m && m.start < p[0].start && (h = p[0])
												} else h = p[g - 1];
												null !== (e = h) && void 0 !== e && e.encrypted ? this.loadKey(h, n) : h && this.fragmentTracker.getState(h) === l.FragmentState.NOT_LOADED && this.loadFragment(h, n, f)
											}
										} else this.state = u.State.IDLE
									}, y.loadFragment = function(t, r, n) {
										this.fragCurrent = t, e.prototype.loadFragment.call(this, t, r, n)
									}, g = p, (v = [{
										key: "mediaBufferTimeRanges",
										get: function() {
											return this.tracksBuffered[this.currentTrackId] || []
										}
									}]) && f(g.prototype, v), m && f(g, m), p
								}(u.default)
							},
						"./src/controller/subtitle-track-controller.ts":
							/*!*****************************************************!*\
							  !*** ./src/controller/subtitle-track-controller.ts ***!
							  \*****************************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../utils/texttrack-utils */ "./src/utils/texttrack-utils.ts"),
									a = r( /*! ./base-playlist-controller */ "./src/controller/base-playlist-controller.ts"),
									s = r( /*! ../types/loader */ "./src/types/loader.ts");

								function o(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function l(e, t) {
									return l = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, l(e, t)
								}
								var u = function(e) {
									var t, r;

									function a(t) {
										var r;
										return (r = e.call(this, t, "[subtitle-track-controller]") || this).media = null, r.tracks = [], r.groupId = null, r.tracksInGroup = [], r.trackId = -1, r.selectDefaultTrack = !0, r.queuedDefaultTrack = -1, r.trackChangeListener = function() {
											return r.onTextTracksChanged()
										}, r.asyncPollTrackChange = function() {
											return r.pollTrackChange(0)
										}, r.useTextTrackPolling = !1, r.subtitlePollingInterval = -1, r.subtitleDisplay = !0, r.registerListeners(), r
									}
									r = e, (t = a).prototype = Object.create(r.prototype), t.prototype.constructor = t, l(t, r);
									var u, d, f, h = a.prototype;
									return h.destroy = function() {
										this.unregisterListeners(), this.tracks.length = 0, this.tracksInGroup.length = 0, this.trackChangeListener = this.asyncPollTrackChange = null, e.prototype.destroy.call(this)
									}, h.registerListeners = function() {
										var e = this.hls;
										e.on(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.on(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.on(n.Events.LEVEL_LOADING, this.onLevelLoading, this), e.on(n.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), e.on(n.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.on(n.Events.ERROR, this.onError, this)
									}, h.unregisterListeners = function() {
										var e = this.hls;
										e.off(n.Events.MEDIA_ATTACHED, this.onMediaAttached, this), e.off(n.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(n.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(n.Events.MANIFEST_PARSED, this.onManifestParsed, this), e.off(n.Events.LEVEL_LOADING, this.onLevelLoading, this), e.off(n.Events.LEVEL_SWITCHING, this.onLevelSwitching, this), e.off(n.Events.SUBTITLE_TRACK_LOADED, this.onSubtitleTrackLoaded, this), e.off(n.Events.ERROR, this.onError, this)
									}, h.onMediaAttached = function(e, t) {
										this.media = t.media, this.media && (this.queuedDefaultTrack > -1 && (this.subtitleTrack = this.queuedDefaultTrack, this.queuedDefaultTrack = -1), this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks), this.useTextTrackPolling ? this.pollTrackChange(500) : this.media.textTracks.addEventListener("change", this.asyncPollTrackChange))
									}, h.pollTrackChange = function(e) {
										self.clearInterval(this.subtitlePollingInterval), this.subtitlePollingInterval = self.setInterval(this.trackChangeListener, e)
									}, h.onMediaDetaching = function() {
										this.media && (self.clearInterval(this.subtitlePollingInterval), this.useTextTrackPolling || this.media.textTracks.removeEventListener("change", this.asyncPollTrackChange), this.trackId > -1 && (this.queuedDefaultTrack = this.trackId), c(this.media.textTracks).forEach((function(e) {
											Object(i.clearCurrentCues)(e)
										})), this.subtitleTrack = -1, this.media = null)
									}, h.onManifestLoading = function() {
										this.tracks = [], this.groupId = null, this.tracksInGroup = [], this.trackId = -1, this.selectDefaultTrack = !0
									}, h.onManifestParsed = function(e, t) {
										this.tracks = t.subtitleTracks
									}, h.onSubtitleTrackLoaded = function(e, t) {
										var r = t.id,
											n = t.details,
											i = this.trackId,
											a = this.tracksInGroup[i];
										if (a) {
											var s = a.details;
											a.details = t.details, this.log("subtitle track " + r + " loaded [" + n.startSN + "-" + n.endSN + "]"), r === this.trackId && (this.retryCount = 0, this.playlistLoaded(r, t, s))
										} else this.warn("Invalid subtitle track id " + r)
									}, h.onLevelLoading = function(e, t) {
										this.switchLevel(t.level)
									}, h.onLevelSwitching = function(e, t) {
										this.switchLevel(t.level)
									}, h.switchLevel = function(e) {
										var t = this.hls.levels[e];
										if (null != t && t.textGroupIds) {
											var r = t.textGroupIds[t.urlId];
											if (this.groupId !== r) {
												var i = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0,
													a = this.tracks.filter((function(e) {
														return !r || e.groupId === r
													}));
												this.tracksInGroup = a;
												var s = this.findTrackId(null == i ? void 0 : i.name) || this.findTrackId();
												this.groupId = r;
												var o = {
													subtitleTracks: a
												};
												this.log("Updating subtitle tracks, " + a.length + ' track(s) found in "' + r + '" group-id'), this.hls.trigger(n.Events.SUBTITLE_TRACKS_UPDATED, o), -1 !== s && this.setSubtitleTrack(s, i)
											}
										}
									}, h.findTrackId = function(e) {
										for (var t = this.tracksInGroup, r = 0; r < t.length; r++) {
											var n = t[r];
											if ((!this.selectDefaultTrack || n.default) && (!e || e === n.name)) return n.id
										}
										return -1
									}, h.onError = function(t, r) {
										e.prototype.onError.call(this, t, r), !r.fatal && r.context && r.context.type === s.PlaylistContextType.SUBTITLE_TRACK && r.context.id === this.trackId && r.context.groupId === this.groupId && this.retryLoadingOrFail(r)
									}, h.loadPlaylist = function(e) {
										var t = this.tracksInGroup[this.trackId];
										if (this.shouldLoadTrack(t)) {
											var r = t.id,
												i = t.groupId,
												a = t.url;
											if (e) try {
												a = e.addDirectives(a)
											} catch (e) {
												this.warn("Could not construct new URL with HLS Delivery Directives: " + e)
											}
											this.log("Loading subtitle playlist for id " + r), this.hls.trigger(n.Events.SUBTITLE_TRACK_LOADING, {
												url: a,
												id: r,
												groupId: i,
												deliveryDirectives: e || null
											})
										}
									}, h.toggleTrackModes = function(e) {
										var t = this,
											r = this.media,
											n = this.subtitleDisplay,
											i = this.trackId;
										if (r) {
											var a = c(r.textTracks),
												s = a.filter((function(e) {
													return e.groupId === t.groupId
												}));
											if (-1 === e)[].slice.call(a).forEach((function(e) {
												e.mode = "disabled"
											}));
											else {
												var o = s[i];
												o && (o.mode = "disabled")
											}
											var l = s[e];
											l && (l.mode = n ? "showing" : "hidden")
										}
									}, h.setSubtitleTrack = function(e, t) {
										var r, i = this.tracksInGroup;
										if (this.media) {
											if (this.trackId !== e && this.toggleTrackModes(e), !(this.trackId === e && (-1 === e || null !== (r = i[e]) && void 0 !== r && r.details) || e < -1 || e >= i.length)) {
												this.clearTimer();
												var a = i[e];
												if (this.log("Switching to subtitle track " + e), this.trackId = e, a) {
													var s = a.id,
														o = a.groupId,
														l = void 0 === o ? "" : o,
														u = a.name,
														c = a.type,
														d = a.url;
													this.hls.trigger(n.Events.SUBTITLE_TRACK_SWITCH, {
														id: s,
														groupId: l,
														name: u,
														type: c,
														url: d
													});
													var f = this.switchParams(a.url, null == t ? void 0 : t.details);
													this.loadPlaylist(f)
												} else this.hls.trigger(n.Events.SUBTITLE_TRACK_SWITCH, {
													id: e
												})
											}
										} else this.queuedDefaultTrack = e
									}, h.onTextTracksChanged = function() {
										if (this.useTextTrackPolling || self.clearInterval(this.subtitlePollingInterval), this.media && this.hls.config.renderTextTracksNatively) {
											for (var e = -1, t = c(this.media.textTracks), r = 0; r < t.length; r++)
												if ("hidden" === t[r].mode) e = r;
												else if ("showing" === t[r].mode) {
												e = r;
												break
											}
											this.subtitleTrack !== e && (this.subtitleTrack = e)
										}
									}, u = a, (d = [{
										key: "subtitleTracks",
										get: function() {
											return this.tracksInGroup
										}
									}, {
										key: "subtitleTrack",
										get: function() {
											return this.trackId
										},
										set: function(e) {
											this.selectDefaultTrack = !1;
											var t = this.tracksInGroup ? this.tracksInGroup[this.trackId] : void 0;
											this.setSubtitleTrack(e, t)
										}
									}]) && o(u.prototype, d), f && o(u, f), a
								}(a.default);

								function c(e) {
									for (var t = [], r = 0; r < e.length; r++) {
										var n = e[r];
										"subtitles" === n.kind && n.label && t.push(e[r])
									}
									return t
								}
								t.default = u
							},
						"./src/controller/timeline-controller.ts":
							/*!***********************************************!*\
							  !*** ./src/controller/timeline-controller.ts ***!
							  \***********************************************/
							/*! exports provided: TimelineController */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "TimelineController", (function() {
									return f
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../utils/cea-608-parser */ "./src/utils/cea-608-parser.ts"),
									s = r( /*! ../utils/output-filter */ "./src/utils/output-filter.ts"),
									o = r( /*! ../utils/webvtt-parser */ "./src/utils/webvtt-parser.ts"),
									l = r( /*! ../utils/texttrack-utils */ "./src/utils/texttrack-utils.ts"),
									u = r( /*! ../utils/imsc1-ttml-parser */ "./src/utils/imsc1-ttml-parser.ts"),
									c = r( /*! ../types/loader */ "./src/types/loader.ts"),
									d = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									f = function() {
										function e(e) {
											if (this.hls = void 0, this.media = null, this.config = void 0, this.enabled = !0, this.Cues = void 0, this.textTracks = [], this.tracks = [], this.initPTS = [], this.timescale = [], this.unparsedVttFrags = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.cea608Parser1 = void 0, this.cea608Parser2 = void 0, this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
													ccOffset: 0,
													presentationOffset: 0,
													0: {
														start: 0,
														prevCC: -1,
														new: !1
													}
												}, this.captionsProperties = void 0, this.hls = e, this.config = e.config, this.Cues = e.config.cueHandler, this.captionsProperties = {
													textTrack1: {
														label: this.config.captionsTextTrack1Label,
														languageCode: this.config.captionsTextTrack1LanguageCode
													},
													textTrack2: {
														label: this.config.captionsTextTrack2Label,
														languageCode: this.config.captionsTextTrack2LanguageCode
													},
													textTrack3: {
														label: this.config.captionsTextTrack3Label,
														languageCode: this.config.captionsTextTrack3LanguageCode
													},
													textTrack4: {
														label: this.config.captionsTextTrack4Label,
														languageCode: this.config.captionsTextTrack4LanguageCode
													}
												}, this.config.enableCEA708Captions) {
												var t = new s.default(this, "textTrack1"),
													r = new s.default(this, "textTrack2"),
													n = new s.default(this, "textTrack3"),
													o = new s.default(this, "textTrack4");
												this.cea608Parser1 = new a.default(1, t, r), this.cea608Parser2 = new a.default(3, n, o)
											}
											e.on(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.on(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(i.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.on(i.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.on(i.Events.FRAG_LOADING, this.onFragLoading, this), e.on(i.Events.FRAG_LOADED, this.onFragLoaded, this), e.on(i.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.on(i.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), e.on(i.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.on(i.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.on(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this)
										}
										var t = e.prototype;
										return t.destroy = function() {
											var e = this.hls;
											e.off(i.Events.MEDIA_ATTACHING, this.onMediaAttaching, this), e.off(i.Events.MEDIA_DETACHING, this.onMediaDetaching, this), e.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(i.Events.MANIFEST_LOADED, this.onManifestLoaded, this), e.off(i.Events.SUBTITLE_TRACKS_UPDATED, this.onSubtitleTracksUpdated, this), e.off(i.Events.FRAG_LOADING, this.onFragLoading, this), e.off(i.Events.FRAG_LOADED, this.onFragLoaded, this), e.off(i.Events.FRAG_PARSING_USERDATA, this.onFragParsingUserdata, this), e.off(i.Events.FRAG_DECRYPTED, this.onFragDecrypted, this), e.off(i.Events.INIT_PTS_FOUND, this.onInitPtsFound, this), e.off(i.Events.SUBTITLE_TRACKS_CLEARED, this.onSubtitleTracksCleared, this), e.off(i.Events.BUFFER_FLUSHING, this.onBufferFlushing, this), this.hls = this.config = this.cea608Parser1 = this.cea608Parser2 = null
										}, t.addCues = function(e, t, r, n, a) {
											for (var s, o, l, u, c = !1, d = a.length; d--;) {
												var f = a[d],
													h = (s = f[0], o = f[1], l = t, u = r, Math.min(o, u) - Math.max(s, l));
												if (h >= 0 && (f[0] = Math.min(f[0], t), f[1] = Math.max(f[1], r), c = !0, h / (r - t) > .5)) return
											}
											if (c || a.push([t, r]), this.config.renderTextTracksNatively) {
												var p = this.captionsTracks[e];
												this.Cues.newCue(p, t, r, n)
											} else {
												var g = this.Cues.newCue(null, t, r, n);
												this.hls.trigger(i.Events.CUES_PARSED, {
													type: "captions",
													cues: g,
													track: e
												})
											}
										}, t.onInitPtsFound = function(e, t) {
											var r = this,
												n = t.frag,
												a = t.id,
												s = t.initPTS,
												o = t.timescale,
												l = this.unparsedVttFrags;
											"main" === a && (this.initPTS[n.cc] = s, this.timescale[n.cc] = o), l.length && (this.unparsedVttFrags = [], l.forEach((function(e) {
												r.onFragLoaded(i.Events.FRAG_LOADED, e)
											})))
										}, t.getExistingTrack = function(e) {
											var t = this.media;
											if (t)
												for (var r = 0; r < t.textTracks.length; r++) {
													var n = t.textTracks[r];
													if (n[e]) return n
												}
											return null
										}, t.createCaptionsTrack = function(e) {
											this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
										}, t.createNativeTrack = function(e) {
											if (!this.captionsTracks[e]) {
												var t = this.captionsProperties,
													r = this.captionsTracks,
													n = this.media,
													i = t[e],
													a = i.label,
													s = i.languageCode,
													o = this.getExistingTrack(e);
												if (o) r[e] = o, Object(l.clearCurrentCues)(r[e]), Object(l.sendAddTrackEvent)(r[e], n);
												else {
													var u = this.createTextTrack("captions", a, s);
													u && (u[e] = !0, r[e] = u)
												}
											}
										}, t.createNonNativeTrack = function(e) {
											if (!this.nonNativeCaptionsTracks[e]) {
												var t = this.captionsProperties[e];
												if (t) {
													var r = {
														_id: e,
														label: t.label,
														kind: "captions",
														default: !!t.media && !!t.media.default,
														closedCaptions: t.media
													};
													this.nonNativeCaptionsTracks[e] = r, this.hls.trigger(i.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
														tracks: [r]
													})
												}
											}
										}, t.createTextTrack = function(e, t, r) {
											var n = this.media;
											if (n) return n.addTextTrack(e, t, r)
										}, t.onMediaAttaching = function(e, t) {
											this.media = t.media, this._cleanTracks()
										}, t.onMediaDetaching = function() {
											var e = this.captionsTracks;
											Object.keys(e).forEach((function(t) {
												Object(l.clearCurrentCues)(e[t]), delete e[t]
											})), this.nonNativeCaptionsTracks = {}
										}, t.onManifestLoading = function() {
											this.lastSn = -1, this.lastPartIndex = -1, this.prevCC = -1, this.vttCCs = {
												ccOffset: 0,
												presentationOffset: 0,
												0: {
													start: 0,
													prevCC: -1,
													new: !1
												}
											}, this._cleanTracks(), this.tracks = [], this.captionsTracks = {}, this.nonNativeCaptionsTracks = {}, this.textTracks = [], this.unparsedVttFrags = this.unparsedVttFrags || [], this.initPTS = [], this.timescale = [], this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(), this.cea608Parser2.reset())
										}, t._cleanTracks = function() {
											var e = this.media;
											if (e) {
												var t = e.textTracks;
												if (t)
													for (var r = 0; r < t.length; r++) Object(l.clearCurrentCues)(t[r])
											}
										}, t.onSubtitleTracksUpdated = function(e, t) {
											var r = this;
											this.textTracks = [];
											var n = t.subtitleTracks || [],
												a = n.some((function(e) {
													return e.textCodec === u.IMSC1_CODEC
												}));
											if (this.config.enableWebVTT || a && this.config.enableIMSC1) {
												var s = this.tracks && n && this.tracks.length === n.length;
												if (this.tracks = n || [], this.config.renderTextTracksNatively) {
													var o = this.media ? this.media.textTracks : [];
													this.tracks.forEach((function(e, t) {
														var n;
														if (t < o.length) {
															for (var i = null, a = 0; a < o.length; a++)
																if (h(o[a], e)) {
																	i = o[a];
																	break
																} i && (n = i)
														}
														n ? Object(l.clearCurrentCues)(n) : (n = r.createTextTrack("subtitles", e.name, e.lang)) && (n.mode = "disabled"), n && (n.groupId = e.groupId, r.textTracks.push(n))
													}))
												} else if (!s && this.tracks && this.tracks.length) {
													var c = this.tracks.map((function(e) {
														return {
															label: e.name,
															kind: e.type.toLowerCase(),
															default: e.default,
															subtitleTrack: e
														}
													}));
													this.hls.trigger(i.Events.NON_NATIVE_TEXT_TRACKS_FOUND, {
														tracks: c
													})
												}
											}
										}, t.onManifestLoaded = function(e, t) {
											var r = this;
											this.config.enableCEA708Captions && t.captions && t.captions.forEach((function(e) {
												var t = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
												if (t) {
													var n = "textTrack" + t[1],
														i = r.captionsProperties[n];
													i && (i.label = e.name, e.lang && (i.languageCode = e.lang), i.media = e)
												}
											}))
										}, t.onFragLoading = function(e, t) {
											var r = this.cea608Parser1,
												n = this.cea608Parser2,
												i = this.lastSn,
												a = this.lastPartIndex;
											if (this.enabled && r && n && t.frag.type === c.PlaylistLevelType.MAIN) {
												var s, o, l = t.frag.sn,
													u = null != (s = null == t || null === (o = t.part) || void 0 === o ? void 0 : o.index) ? s : -1;
												l === i + 1 || l === i && u === a + 1 || (r.reset(), n.reset()), this.lastSn = l, this.lastPartIndex = u
											}
										}, t.onFragLoaded = function(e, t) {
											var r = t.frag,
												a = t.payload,
												s = this.initPTS,
												o = this.unparsedVttFrags;
											if (r.type === c.PlaylistLevelType.SUBTITLE)
												if (a.byteLength) {
													if (!Object(n.isFiniteNumber)(s[r.cc])) return o.push(t), void(s.length && this.hls.trigger(i.Events.SUBTITLE_FRAG_PROCESSED, {
														success: !1,
														frag: r,
														error: new Error("Missing initial subtitle PTS")
													}));
													var l = r.decryptdata,
														d = "stats" in t;
													if (null == l || null == l.key || "AES-128" !== l.method || d) {
														var f = this.tracks[r.level],
															h = this.vttCCs;
														h[r.cc] || (h[r.cc] = {
															start: r.start,
															prevCC: this.prevCC,
															new: !0
														}, this.prevCC = r.cc), f && f.textCodec === u.IMSC1_CODEC ? this._parseIMSC1(r, a) : this._parseVTTs(r, a, h)
													}
												} else this.hls.trigger(i.Events.SUBTITLE_FRAG_PROCESSED, {
													success: !1,
													frag: r,
													error: new Error("Empty subtitle payload")
												})
										}, t._parseIMSC1 = function(e, t) {
											var r = this,
												n = this.hls;
											Object(u.parseIMSC1)(t, this.initPTS[e.cc], this.timescale[e.cc], (function(t) {
												r._appendCues(t, e.level), n.trigger(i.Events.SUBTITLE_FRAG_PROCESSED, {
													success: !0,
													frag: e
												})
											}), (function(t) {
												d.logger.log("Failed to parse IMSC1: " + t), n.trigger(i.Events.SUBTITLE_FRAG_PROCESSED, {
													success: !1,
													frag: e,
													error: t
												})
											}))
										}, t._parseVTTs = function(e, t, r) {
											var n = this,
												a = this.hls;
											Object(o.parseWebVTT)(t, this.initPTS[e.cc], this.timescale[e.cc], r, e.cc, e.start, (function(t) {
												n._appendCues(t, e.level), a.trigger(i.Events.SUBTITLE_FRAG_PROCESSED, {
													success: !0,
													frag: e
												})
											}), (function(r) {
												n._fallbackToIMSC1(e, t), d.logger.log("Failed to parse VTT cue: " + r), a.trigger(i.Events.SUBTITLE_FRAG_PROCESSED, {
													success: !1,
													frag: e,
													error: r
												})
											}))
										}, t._fallbackToIMSC1 = function(e, t) {
											var r = this,
												n = this.tracks[e.level];
											n.textCodec || Object(u.parseIMSC1)(t, this.initPTS[e.cc], this.timescale[e.cc], (function() {
												n.textCodec = u.IMSC1_CODEC, r._parseIMSC1(e, t)
											}), (function() {
												n.textCodec = "wvtt"
											}))
										}, t._appendCues = function(e, t) {
											var r = this.hls;
											if (this.config.renderTextTracksNatively) {
												var n = this.textTracks[t];
												if ("disabled" === n.mode) return;
												e.forEach((function(e) {
													return Object(l.addCueToTrack)(n, e)
												}))
											} else {
												var a = this.tracks[t].default ? "default" : "subtitles" + t;
												r.trigger(i.Events.CUES_PARSED, {
													type: "subtitles",
													cues: e,
													track: a
												})
											}
										}, t.onFragDecrypted = function(e, t) {
											var r = t.frag;
											if (r.type === c.PlaylistLevelType.SUBTITLE) {
												if (!Object(n.isFiniteNumber)(this.initPTS[r.cc])) return void this.unparsedVttFrags.push(t);
												this.onFragLoaded(i.Events.FRAG_LOADED, t)
											}
										}, t.onSubtitleTracksCleared = function() {
											this.tracks = [], this.captionsTracks = {}
										}, t.onFragParsingUserdata = function(e, t) {
											var r = this.cea608Parser1,
												n = this.cea608Parser2;
											if (this.enabled && r && n)
												for (var i = 0; i < t.samples.length; i++) {
													var a = t.samples[i].bytes;
													if (a) {
														var s = this.extractCea608Data(a);
														r.addData(t.samples[i].pts, s[0]), n.addData(t.samples[i].pts, s[1])
													}
												}
										}, t.onBufferFlushing = function(e, t) {
											var r = t.startOffset,
												n = t.endOffset,
												i = t.endOffsetSubtitles,
												a = t.type,
												s = this.media;
											if (s && !(s.currentTime < n)) {
												if (!a || "video" === a) {
													var o = this.captionsTracks;
													Object.keys(o).forEach((function(e) {
														return Object(l.removeCuesInRange)(o[e], r, n)
													}))
												}
												if (this.config.renderTextTracksNatively && 0 === r && void 0 !== i) {
													var u = this.textTracks;
													Object.keys(u).forEach((function(e) {
														return Object(l.removeCuesInRange)(u[e], r, i)
													}))
												}
											}
										}, t.extractCea608Data = function(e) {
											for (var t = 31 & e[0], r = 2, n = [
													[],
													[]
												], i = 0; i < t; i++) {
												var a = e[r++],
													s = 127 & e[r++],
													o = 127 & e[r++],
													l = 3 & a;
												0 === s && 0 === o || 0 != (4 & a) && (0 !== l && 1 !== l || (n[l].push(s), n[l].push(o)))
											}
											return n
										}, e
									}();

								function h(e, t) {
									return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
								}
							},
						"./src/crypt/aes-crypto.ts":
							/*!*********************************!*\
							  !*** ./src/crypt/aes-crypto.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return n
								}));
								var n = function() {
									function e(e, t) {
										this.subtle = void 0, this.aesIV = void 0, this.subtle = e, this.aesIV = t
									}
									return e.prototype.decrypt = function(e, t) {
										return this.subtle.decrypt({
											name: "AES-CBC",
											iv: this.aesIV
										}, t, e)
									}, e
								}()
							},
						"./src/crypt/aes-decryptor.ts":
							/*!************************************!*\
							  !*** ./src/crypt/aes-decryptor.ts ***!
							  \************************************/
							/*! exports provided: removePadding, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "removePadding", (function() {
									return i
								})), r.d(t, "default", (function() {
									return a
								}));
								var n = r( /*! ../utils/typed-array */ "./src/utils/typed-array.ts");

								function i(e) {
									var t = e.byteLength,
										r = t && new DataView(e.buffer).getUint8(t - 1);
									return r ? Object(n.sliceUint8)(e, 0, t - r) : e
								}
								var a = function() {
									function e() {
										this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54], this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)], this.sBox = new Uint32Array(256), this.invSBox = new Uint32Array(256), this.key = new Uint32Array(0), this.ksRows = 0, this.keySize = 0, this.keySchedule = void 0, this.invKeySchedule = void 0, this.initTable()
									}
									var t = e.prototype;
									return t.uint8ArrayToUint32Array_ = function(e) {
										for (var t = new DataView(e), r = new Uint32Array(4), n = 0; n < 4; n++) r[n] = t.getUint32(4 * n);
										return r
									}, t.initTable = function() {
										var e = this.sBox,
											t = this.invSBox,
											r = this.subMix,
											n = r[0],
											i = r[1],
											a = r[2],
											s = r[3],
											o = this.invSubMix,
											l = o[0],
											u = o[1],
											c = o[2],
											d = o[3],
											f = new Uint32Array(256),
											h = 0,
											p = 0,
											g = 0;
										for (g = 0; g < 256; g++) f[g] = g < 128 ? g << 1 : g << 1 ^ 283;
										for (g = 0; g < 256; g++) {
											var v = p ^ p << 1 ^ p << 2 ^ p << 3 ^ p << 4;
											v = v >>> 8 ^ 255 & v ^ 99, e[h] = v, t[v] = h;
											var m = f[h],
												y = f[m],
												E = f[y],
												b = 257 * f[v] ^ 16843008 * v;
											n[h] = b << 24 | b >>> 8, i[h] = b << 16 | b >>> 16, a[h] = b << 8 | b >>> 24, s[h] = b, b = 16843009 * E ^ 65537 * y ^ 257 * m ^ 16843008 * h, l[v] = b << 24 | b >>> 8, u[v] = b << 16 | b >>> 16, c[v] = b << 8 | b >>> 24, d[v] = b, h ? (h = m ^ f[f[f[E ^ m]]], p ^= f[f[p]]) : h = p = 1
										}
									}, t.expandKey = function(e) {
										for (var t = this.uint8ArrayToUint32Array_(e), r = !0, n = 0; n < t.length && r;) r = t[n] === this.key[n], n++;
										if (!r) {
											this.key = t;
											var i = this.keySize = t.length;
											if (4 !== i && 6 !== i && 8 !== i) throw new Error("Invalid aes key size=" + i);
											var a, s, o, l, u = this.ksRows = 4 * (i + 6 + 1),
												c = this.keySchedule = new Uint32Array(u),
												d = this.invKeySchedule = new Uint32Array(u),
												f = this.sBox,
												h = this.rcon,
												p = this.invSubMix,
												g = p[0],
												v = p[1],
												m = p[2],
												y = p[3];
											for (a = 0; a < u; a++) a < i ? o = c[a] = t[a] : (l = o, a % i == 0 ? (l = f[(l = l << 8 | l >>> 24) >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l], l ^= h[a / i | 0] << 24) : i > 6 && a % i == 4 && (l = f[l >>> 24] << 24 | f[l >>> 16 & 255] << 16 | f[l >>> 8 & 255] << 8 | f[255 & l]), c[a] = o = (c[a - i] ^ l) >>> 0);
											for (s = 0; s < u; s++) a = u - s, l = 3 & s ? c[a] : c[a - 4], d[s] = s < 4 || a <= 4 ? l : g[f[l >>> 24]] ^ v[f[l >>> 16 & 255]] ^ m[f[l >>> 8 & 255]] ^ y[f[255 & l]], d[s] = d[s] >>> 0
										}
									}, t.networkToHostOrderSwap = function(e) {
										return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
									}, t.decrypt = function(e, t, r) {
										for (var n, i, a, s, o, l, u, c, d, f, h, p, g, v, m = this.keySize + 6, y = this.invKeySchedule, E = this.invSBox, b = this.invSubMix, T = b[0], S = b[1], k = b[2], w = b[3], L = this.uint8ArrayToUint32Array_(r), A = L[0], D = L[1], C = L[2], _ = L[3], R = new Int32Array(e), x = new Int32Array(R.length), I = this.networkToHostOrderSwap; t < R.length;) {
											for (d = I(R[t]), f = I(R[t + 1]), h = I(R[t + 2]), p = I(R[t + 3]), o = d ^ y[0], l = p ^ y[1], u = h ^ y[2], c = f ^ y[3], g = 4, v = 1; v < m; v++) n = T[o >>> 24] ^ S[l >> 16 & 255] ^ k[u >> 8 & 255] ^ w[255 & c] ^ y[g], i = T[l >>> 24] ^ S[u >> 16 & 255] ^ k[c >> 8 & 255] ^ w[255 & o] ^ y[g + 1], a = T[u >>> 24] ^ S[c >> 16 & 255] ^ k[o >> 8 & 255] ^ w[255 & l] ^ y[g + 2], s = T[c >>> 24] ^ S[o >> 16 & 255] ^ k[l >> 8 & 255] ^ w[255 & u] ^ y[g + 3], o = n, l = i, u = a, c = s, g += 4;
											n = E[o >>> 24] << 24 ^ E[l >> 16 & 255] << 16 ^ E[u >> 8 & 255] << 8 ^ E[255 & c] ^ y[g], i = E[l >>> 24] << 24 ^ E[u >> 16 & 255] << 16 ^ E[c >> 8 & 255] << 8 ^ E[255 & o] ^ y[g + 1], a = E[u >>> 24] << 24 ^ E[c >> 16 & 255] << 16 ^ E[o >> 8 & 255] << 8 ^ E[255 & l] ^ y[g + 2], s = E[c >>> 24] << 24 ^ E[o >> 16 & 255] << 16 ^ E[l >> 8 & 255] << 8 ^ E[255 & u] ^ y[g + 3], x[t] = I(n ^ A), x[t + 1] = I(s ^ D), x[t + 2] = I(a ^ C), x[t + 3] = I(i ^ _), A = d, D = f, C = h, _ = p, t += 4
										}
										return x.buffer
									}, e
								}()
							},
						"./src/crypt/decrypter.ts":
							/*!********************************!*\
							  !*** ./src/crypt/decrypter.ts ***!
							  \********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return u
								}));
								var n = r( /*! ./aes-crypto */ "./src/crypt/aes-crypto.ts"),
									i = r( /*! ./fast-aes-key */ "./src/crypt/fast-aes-key.ts"),
									a = r( /*! ./aes-decryptor */ "./src/crypt/aes-decryptor.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									l = r( /*! ../utils/typed-array */ "./src/utils/typed-array.ts"),
									u = function() {
										function e(e, t, r) {
											var n = (void 0 === r ? {} : r).removePKCS7Padding,
												i = void 0 === n || n;
											if (this.logEnabled = !0, this.observer = void 0, this.config = void 0, this.removePKCS7Padding = void 0, this.subtle = null, this.softwareDecrypter = null, this.key = null, this.fastAesKey = null, this.remainderData = null, this.currentIV = null, this.currentResult = null, this.observer = e, this.config = t, this.removePKCS7Padding = i, i) try {
												var a = self.crypto;
												a && (this.subtle = a.subtle || a.webkitSubtle)
											} catch (e) {}
											null === this.subtle && (this.config.enableSoftwareAES = !0)
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.observer = null
										}, t.isSync = function() {
											return this.config.enableSoftwareAES
										}, t.flush = function() {
											var e = this.currentResult;
											if (e) {
												var t = new Uint8Array(e);
												return this.reset(), this.removePKCS7Padding ? Object(a.removePadding)(t) : t
											}
											this.reset()
										}, t.reset = function() {
											this.currentResult = null, this.currentIV = null, this.remainderData = null, this.softwareDecrypter && (this.softwareDecrypter = null)
										}, t.decrypt = function(e, t, r, n) {
											if (this.config.enableSoftwareAES) {
												this.softwareDecrypt(new Uint8Array(e), t, r);
												var i = this.flush();
												i && n(i.buffer)
											} else this.webCryptoDecrypt(new Uint8Array(e), t, r).then(n)
										}, t.softwareDecrypt = function(e, t, r) {
											var n = this.currentIV,
												i = this.currentResult,
												s = this.remainderData;
											this.logOnce("JS AES decrypt"), s && (e = Object(o.appendUint8Array)(s, e), this.remainderData = null);
											var u = this.getValidChunk(e);
											if (!u.length) return null;
											n && (r = n);
											var c = this.softwareDecrypter;
											c || (c = this.softwareDecrypter = new a.default), c.expandKey(t);
											var d = i;
											return this.currentResult = c.decrypt(u.buffer, 0, r), this.currentIV = Object(l.sliceUint8)(u, -16).buffer, d || null
										}, t.webCryptoDecrypt = function(e, t, r) {
											var a = this,
												s = this.subtle;
											return this.key === t && this.fastAesKey || (this.key = t, this.fastAesKey = new i.default(s, t)), this.fastAesKey.expandKey().then((function(t) {
												return s ? new n.default(s, r).decrypt(e.buffer, t) : Promise.reject(new Error("web crypto not initialized"))
											})).catch((function(n) {
												return a.onWebCryptoError(n, e, t, r)
											}))
										}, t.onWebCryptoError = function(e, t, r, n) {
											return s.logger.warn("[decrypter.ts]: WebCrypto Error, disable WebCrypto API:", e), this.config.enableSoftwareAES = !0, this.logEnabled = !0, this.softwareDecrypt(t, r, n)
										}, t.getValidChunk = function(e) {
											var t = e,
												r = e.length - e.length % 16;
											return r !== e.length && (t = Object(l.sliceUint8)(e, 0, r), this.remainderData = Object(l.sliceUint8)(e, r)), t
										}, t.logOnce = function(e) {
											this.logEnabled && (s.logger.log("[decrypter.ts]: " + e), this.logEnabled = !1)
										}, e
									}()
							},
						"./src/crypt/fast-aes-key.ts":
							/*!***********************************!*\
							  !*** ./src/crypt/fast-aes-key.ts ***!
							  \***********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return n
								}));
								var n = function() {
									function e(e, t) {
										this.subtle = void 0, this.key = void 0, this.subtle = e, this.key = t
									}
									return e.prototype.expandKey = function() {
										return this.subtle.importKey("raw", this.key, {
											name: "AES-CBC"
										}, !1, ["encrypt", "decrypt"])
									}, e
								}()
							},
						"./src/demux/aacdemuxer.ts":
							/*!*********************************!*\
							  !*** ./src/demux/aacdemuxer.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./base-audio-demuxer */ "./src/demux/base-audio-demuxer.ts"),
									i = r( /*! ./adts */ "./src/demux/adts.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									s = r( /*! ../demux/id3 */ "./src/demux/id3.ts");

								function o(e, t) {
									return o = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, o(e, t)
								}
								var l = function(e) {
									var t, r;

									function n(t, r) {
										var n;
										return (n = e.call(this) || this).observer = void 0, n.config = void 0, n.observer = t, n.config = r, n
									}
									r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, o(t, r);
									var l = n.prototype;
									return l.resetInitSegment = function(t, r, n) {
										e.prototype.resetInitSegment.call(this, t, r, n), this._audioTrack = {
											container: "audio/adts",
											type: "audio",
											id: 2,
											pid: -1,
											sequenceNumber: 0,
											isAAC: !0,
											samples: [],
											manifestCodec: t,
											duration: n,
											inputTimeScale: 9e4,
											dropped: 0
										}
									}, n.probe = function(e) {
										if (!e) return !1;
										for (var t = (s.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
											if (i.probe(e, t)) return a.logger.log("ADTS sync word found !"), !0;
										return !1
									}, l.canParse = function(e, t) {
										return i.canParse(e, t)
									}, l.appendFrame = function(e, t, r) {
										i.initTrackConfig(e, this.observer, t, r, e.manifestCodec);
										var n = i.appendFrame(e, t, r, this.initPTS, this.frameIndex);
										if (n && 0 === n.missing) return n
									}, n
								}(n.default);
								l.minProbeByteLength = 9, t.default = l
							},
						"./src/demux/adts.ts":
							/*!***************************!*\
							  !*** ./src/demux/adts.ts ***!
							  \***************************/
							/*! exports provided: getAudioConfig, isHeaderPattern, getHeaderLength, getFullFrameLength, canGetFrameLength, isHeader, canParse, probe, initTrackConfig, getFrameDuration, parseFrameHeader, appendFrame */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "getAudioConfig", (function() {
									return s
								})), r.d(t, "isHeaderPattern", (function() {
									return o
								})), r.d(t, "getHeaderLength", (function() {
									return l
								})), r.d(t, "getFullFrameLength", (function() {
									return u
								})), r.d(t, "canGetFrameLength", (function() {
									return c
								})), r.d(t, "isHeader", (function() {
									return d
								})), r.d(t, "canParse", (function() {
									return f
								})), r.d(t, "probe", (function() {
									return h
								})), r.d(t, "initTrackConfig", (function() {
									return p
								})), r.d(t, "getFrameDuration", (function() {
									return g
								})), r.d(t, "parseFrameHeader", (function() {
									return v
								})), r.d(t, "appendFrame", (function() {
									return m
								}));
								var n = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									i = r( /*! ../errors */ "./src/errors.ts"),
									a = r( /*! ../events */ "./src/events.ts");

								function s(e, t, r, s) {
									var o, l, u, c, d = navigator.userAgent.toLowerCase(),
										f = s,
										h = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
									o = 1 + ((192 & t[r + 2]) >>> 6);
									var p = (60 & t[r + 2]) >>> 2;
									if (!(p > h.length - 1)) return u = (1 & t[r + 2]) << 2, u |= (192 & t[r + 3]) >>> 6, n.logger.log("manifest codec:" + s + ", ADTS type:" + o + ", samplingIndex:" + p), /firefox/i.test(d) ? p >= 6 ? (o = 5, c = new Array(4), l = p - 3) : (o = 2, c = new Array(2), l = p) : -1 !== d.indexOf("android") ? (o = 2, c = new Array(2), l = p) : (o = 5, c = new Array(4), s && (-1 !== s.indexOf("mp4a.40.29") || -1 !== s.indexOf("mp4a.40.5")) || !s && p >= 6 ? l = p - 3 : ((s && -1 !== s.indexOf("mp4a.40.2") && (p >= 6 && 1 === u || /vivaldi/i.test(d)) || !s && 1 === u) && (o = 2, c = new Array(2)), l = p)), c[0] = o << 3, c[0] |= (14 & p) >> 1, c[1] |= (1 & p) << 7, c[1] |= u << 3, 5 === o && (c[1] |= (14 & l) >> 1, c[2] = (1 & l) << 7, c[2] |= 8, c[3] = 0), {
										config: c,
										samplerate: h[p],
										channelCount: u,
										codec: "mp4a.40." + o,
										manifestCodec: f
									};
									e.trigger(a.Events.ERROR, {
										type: i.ErrorTypes.MEDIA_ERROR,
										details: i.ErrorDetails.FRAG_PARSING_ERROR,
										fatal: !0,
										reason: "invalid ADTS sampling index:" + p
									})
								}

								function o(e, t) {
									return 255 === e[t] && 240 == (246 & e[t + 1])
								}

								function l(e, t) {
									return 1 & e[t + 1] ? 7 : 9
								}

								function u(e, t) {
									return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
								}

								function c(e, t) {
									return t + 5 < e.length
								}

								function d(e, t) {
									return t + 1 < e.length && o(e, t)
								}

								function f(e, t) {
									return c(e, t) && o(e, t) && u(e, t) <= e.length - t
								}

								function h(e, t) {
									if (d(e, t)) {
										var r = l(e, t);
										if (t + r >= e.length) return !1;
										var n = u(e, t);
										if (n <= r) return !1;
										var i = t + n;
										return i === e.length || d(e, i)
									}
									return !1
								}

								function p(e, t, r, i, a) {
									if (!e.samplerate) {
										var o = s(t, r, i, a);
										if (!o) return;
										e.config = o.config, e.samplerate = o.samplerate, e.channelCount = o.channelCount, e.codec = o.codec, e.manifestCodec = o.manifestCodec, n.logger.log("parsed codec:" + e.codec + ", rate:" + o.samplerate + ", channels:" + o.channelCount)
									}
								}

								function g(e) {
									return 9216e4 / e
								}

								function v(e, t, r, n, i) {
									var a = l(e, t),
										s = u(e, t);
									if ((s -= a) > 0) return {
										headerLength: a,
										frameLength: s,
										stamp: r + n * i
									}
								}

								function m(e, t, r, n, i) {
									var a = v(t, r, n, i, g(e.samplerate));
									if (a) {
										var s, o = a.frameLength,
											l = a.headerLength,
											u = a.stamp,
											c = l + o,
											d = Math.max(0, r + c - t.length);
										d ? (s = new Uint8Array(c - l)).set(t.subarray(r + l, t.length), 0) : s = t.subarray(r + l, r + c);
										var f = {
											unit: s,
											pts: u
										};
										return d || e.samples.push(f), {
											sample: f,
											length: c,
											missing: d
										}
									}
								}
							},
						"./src/demux/base-audio-demuxer.ts":
							/*!*****************************************!*\
							  !*** ./src/demux/base-audio-demuxer.ts ***!
							  \*****************************************/
							/*! exports provided: initPTSFn, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "initPTSFn", (function() {
									return u
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../demux/id3 */ "./src/demux/id3.ts"),
									a = r( /*! ./dummy-demuxed-track */ "./src/demux/dummy-demuxed-track.ts"),
									s = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									o = r( /*! ../utils/typed-array */ "./src/utils/typed-array.ts"),
									l = function() {
										function e() {
											this._audioTrack = void 0, this._id3Track = void 0, this.frameIndex = 0, this.cachedData = null, this.initPTS = null
										}
										var t = e.prototype;
										return t.resetInitSegment = function(e, t, r) {
											this._id3Track = {
												type: "id3",
												id: 3,
												pid: -1,
												inputTimeScale: 9e4,
												sequenceNumber: 0,
												samples: [],
												dropped: 0
											}
										}, t.resetTimeStamp = function() {}, t.resetContiguity = function() {}, t.canParse = function(e, t) {
											return !1
										}, t.appendFrame = function(e, t, r) {}, t.demux = function(e, t) {
											this.cachedData && (e = Object(s.appendUint8Array)(this.cachedData, e), this.cachedData = null);
											var r, n, l = i.getID3Data(e, 0),
												c = l ? l.length : 0,
												d = this._audioTrack,
												f = this._id3Track,
												h = l ? i.getTimeStamp(l) : void 0,
												p = e.length;
											for (0 !== this.frameIndex && null !== this.initPTS || (this.initPTS = u(h, t)), l && l.length > 0 && f.samples.push({
													pts: this.initPTS,
													dts: this.initPTS,
													data: l
												}), n = this.initPTS; c < p;) {
												if (this.canParse(e, c)) {
													var g = this.appendFrame(d, e, c);
													g ? (this.frameIndex++, n = g.sample.pts, r = c += g.length) : c = p
												} else i.canParse(e, c) ? (l = i.getID3Data(e, c), f.samples.push({
													pts: n,
													dts: n,
													data: l
												}), r = c += l.length) : c++;
												if (c === p && r !== p) {
													var v = Object(o.sliceUint8)(e, r);
													this.cachedData ? this.cachedData = Object(s.appendUint8Array)(this.cachedData, v) : this.cachedData = v
												}
											}
											return {
												audioTrack: d,
												avcTrack: Object(a.dummyTrack)(),
												id3Track: f,
												textTrack: Object(a.dummyTrack)()
											}
										}, t.demuxSampleAes = function(e, t, r) {
											return Promise.reject(new Error("[" + this + "] This demuxer does not support Sample-AES decryption"))
										}, t.flush = function(e) {
											var t = this.cachedData;
											return t && (this.cachedData = null, this.demux(t, 0)), this.frameIndex = 0, {
												audioTrack: this._audioTrack,
												avcTrack: Object(a.dummyTrack)(),
												id3Track: this._id3Track,
												textTrack: Object(a.dummyTrack)()
											}
										}, t.destroy = function() {}, e
									}(),
									u = function(e, t) {
										return Object(n.isFiniteNumber)(e) ? 90 * e : 9e4 * t
									};
								t.default = l
							},
						"./src/demux/chunk-cache.ts":
							/*!**********************************!*\
							  !*** ./src/demux/chunk-cache.ts ***!
							  \**********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return n
								}));
								var n = function() {
									function e() {
										this.chunks = [], this.dataLength = 0
									}
									var t = e.prototype;
									return t.push = function(e) {
										this.chunks.push(e), this.dataLength += e.length
									}, t.flush = function() {
										var e, t = this.chunks,
											r = this.dataLength;
										return t.length ? (e = 1 === t.length ? t[0] : function(e, t) {
											for (var r = new Uint8Array(t), n = 0, i = 0; i < e.length; i++) {
												var a = e[i];
												r.set(a, n), n += a.length
											}
											return r
										}(t, r), this.reset(), e) : new Uint8Array(0)
									}, t.reset = function() {
										this.chunks.length = 0, this.dataLength = 0
									}, e
								}()
							},
						"./src/demux/dummy-demuxed-track.ts":
							/*!******************************************!*\
							  !*** ./src/demux/dummy-demuxed-track.ts ***!
							  \******************************************/
							/*! exports provided: dummyTrack */
							function(e, t, r) {
								"use strict";

								function n() {
									return {
										type: "",
										id: -1,
										pid: -1,
										inputTimeScale: 9e4,
										sequenceNumber: -1,
										samples: [],
										dropped: 0
									}
								}
								r.r(t), r.d(t, "dummyTrack", (function() {
									return n
								}))
							},
						"./src/demux/exp-golomb.ts":
							/*!*********************************!*\
							  !*** ./src/demux/exp-golomb.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									i = function() {
										function e(e) {
											this.data = void 0, this.bytesAvailable = void 0, this.word = void 0, this.bitsAvailable = void 0, this.data = e, this.bytesAvailable = e.byteLength, this.word = 0, this.bitsAvailable = 0
										}
										var t = e.prototype;
										return t.loadWord = function() {
											var e = this.data,
												t = this.bytesAvailable,
												r = e.byteLength - t,
												n = new Uint8Array(4),
												i = Math.min(4, t);
											if (0 === i) throw new Error("no bytes available");
											n.set(e.subarray(r, r + i)), this.word = new DataView(n.buffer).getUint32(0), this.bitsAvailable = 8 * i, this.bytesAvailable -= i
										}, t.skipBits = function(e) {
											var t;
											this.bitsAvailable > e ? (this.word <<= e, this.bitsAvailable -= e) : (e -= this.bitsAvailable, e -= (t = e >> 3) >> 3, this.bytesAvailable -= t, this.loadWord(), this.word <<= e, this.bitsAvailable -= e)
										}, t.readBits = function(e) {
											var t = Math.min(this.bitsAvailable, e),
												r = this.word >>> 32 - t;
											return e > 32 && n.logger.error("Cannot read more than 32 bits at a time"), this.bitsAvailable -= t, this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(), (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
										}, t.skipLZ = function() {
											var e;
											for (e = 0; e < this.bitsAvailable; ++e)
												if (0 != (this.word & 2147483648 >>> e)) return this.word <<= e, this.bitsAvailable -= e, e;
											return this.loadWord(), e + this.skipLZ()
										}, t.skipUEG = function() {
											this.skipBits(1 + this.skipLZ())
										}, t.skipEG = function() {
											this.skipBits(1 + this.skipLZ())
										}, t.readUEG = function() {
											var e = this.skipLZ();
											return this.readBits(e + 1) - 1
										}, t.readEG = function() {
											var e = this.readUEG();
											return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
										}, t.readBoolean = function() {
											return 1 === this.readBits(1)
										}, t.readUByte = function() {
											return this.readBits(8)
										}, t.readUShort = function() {
											return this.readBits(16)
										}, t.readUInt = function() {
											return this.readBits(32)
										}, t.skipScalingList = function(e) {
											for (var t = 8, r = 8, n = 0; n < e; n++) 0 !== r && (r = (t + this.readEG() + 256) % 256), t = 0 === r ? t : r
										}, t.readSPS = function() {
											var e, t, r, n = 0,
												i = 0,
												a = 0,
												s = 0,
												o = this.readUByte.bind(this),
												l = this.readBits.bind(this),
												u = this.readUEG.bind(this),
												c = this.readBoolean.bind(this),
												d = this.skipBits.bind(this),
												f = this.skipEG.bind(this),
												h = this.skipUEG.bind(this),
												p = this.skipScalingList.bind(this);
											o();
											var g = o();
											if (l(5), d(3), o(), h(), 100 === g || 110 === g || 122 === g || 244 === g || 44 === g || 83 === g || 86 === g || 118 === g || 128 === g) {
												var v = u();
												if (3 === v && d(1), h(), h(), d(1), c())
													for (t = 3 !== v ? 8 : 12, r = 0; r < t; r++) c() && p(r < 6 ? 16 : 64)
											}
											h();
											var m = u();
											if (0 === m) u();
											else if (1 === m)
												for (d(1), f(), f(), e = u(), r = 0; r < e; r++) f();
											h(), d(1);
											var y = u(),
												E = u(),
												b = l(1);
											0 === b && d(1), d(1), c() && (n = u(), i = u(), a = u(), s = u());
											var T = [1, 1];
											if (c() && c()) switch (o()) {
												case 1:
													T = [1, 1];
													break;
												case 2:
													T = [12, 11];
													break;
												case 3:
													T = [10, 11];
													break;
												case 4:
													T = [16, 11];
													break;
												case 5:
													T = [40, 33];
													break;
												case 6:
													T = [24, 11];
													break;
												case 7:
													T = [20, 11];
													break;
												case 8:
													T = [32, 11];
													break;
												case 9:
													T = [80, 33];
													break;
												case 10:
													T = [18, 11];
													break;
												case 11:
													T = [15, 11];
													break;
												case 12:
													T = [64, 33];
													break;
												case 13:
													T = [160, 99];
													break;
												case 14:
													T = [4, 3];
													break;
												case 15:
													T = [3, 2];
													break;
												case 16:
													T = [2, 1];
													break;
												case 255:
													T = [o() << 8 | o(), o() << 8 | o()]
											}
											return {
												width: Math.ceil(16 * (y + 1) - 2 * n - 2 * i),
												height: (2 - b) * (E + 1) * 16 - (b ? 2 : 4) * (a + s),
												pixelRatio: T
											}
										}, t.readSliceType = function() {
											return this.readUByte(), this.readUEG(), this.readUEG()
										}, e
									}();
								t.default = i
							},
						"./src/demux/id3.ts":
							/*!**************************!*\
							  !*** ./src/demux/id3.ts ***!
							  \**************************/
							/*! exports provided: isHeader, isFooter, getID3Data, canParse, getTimeStamp, isTimeStampFrame, getID3Frames, decodeFrame, utf8ArrayToStr, testables */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "isHeader", (function() {
									return i
								})), r.d(t, "isFooter", (function() {
									return a
								})), r.d(t, "getID3Data", (function() {
									return s
								})), r.d(t, "canParse", (function() {
									return l
								})), r.d(t, "getTimeStamp", (function() {
									return u
								})), r.d(t, "isTimeStampFrame", (function() {
									return c
								})), r.d(t, "getID3Frames", (function() {
									return f
								})), r.d(t, "decodeFrame", (function() {
									return h
								})), r.d(t, "utf8ArrayToStr", (function() {
									return y
								})), r.d(t, "testables", (function() {
									return E
								}));
								var n, i = function(e, t) {
										return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
									},
									a = function(e, t) {
										return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
									},
									s = function(e, t) {
										for (var r = t, n = 0; i(e, t);) n += 10, n += o(e, t + 6), a(e, t + 10) && (n += 10), t += n;
										if (n > 0) return e.subarray(r, r + n)
									},
									o = function(e, t) {
										var r = 0;
										return r = (127 & e[t]) << 21, r |= (127 & e[t + 1]) << 14, r |= (127 & e[t + 2]) << 7, r |= 127 & e[t + 3]
									},
									l = function(e, t) {
										return i(e, t) && o(e, t + 6) + 10 <= e.length - t
									},
									u = function(e) {
										for (var t = f(e), r = 0; r < t.length; r++) {
											var n = t[r];
											if (c(n)) return m(n)
										}
									},
									c = function(e) {
										return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
									},
									d = function(e) {
										var t = String.fromCharCode(e[0], e[1], e[2], e[3]),
											r = o(e, 4);
										return {
											type: t,
											size: r,
											data: e.subarray(10, 10 + r)
										}
									},
									f = function(e) {
										for (var t = 0, r = []; i(e, t);) {
											for (var n = o(e, t + 6), s = (t += 10) + n; t + 8 < s;) {
												var l = d(e.subarray(t)),
													u = h(l);
												u && r.push(u), t += l.size + 10
											}
											a(e, t) && (t += 10)
										}
										return r
									},
									h = function(e) {
										return "PRIV" === e.type ? p(e) : "W" === e.type[0] ? v(e) : g(e)
									},
									p = function(e) {
										if (!(e.size < 2)) {
											var t = y(e.data, !0),
												r = new Uint8Array(e.data.subarray(t.length + 1));
											return {
												key: e.type,
												info: t,
												data: r.buffer
											}
										}
									},
									g = function(e) {
										if (!(e.size < 2)) {
											if ("TXXX" === e.type) {
												var t = 1,
													r = y(e.data.subarray(t), !0);
												t += r.length + 1;
												var n = y(e.data.subarray(t));
												return {
													key: e.type,
													info: r,
													data: n
												}
											}
											var i = y(e.data.subarray(1));
											return {
												key: e.type,
												data: i
											}
										}
									},
									v = function(e) {
										if ("WXXX" === e.type) {
											if (e.size < 2) return;
											var t = 1,
												r = y(e.data.subarray(t), !0);
											t += r.length + 1;
											var n = y(e.data.subarray(t));
											return {
												key: e.type,
												info: r,
												data: n
											}
										}
										var i = y(e.data);
										return {
											key: e.type,
											data: i
										}
									},
									m = function(e) {
										if (8 === e.data.byteLength) {
											var t = new Uint8Array(e.data),
												r = 1 & t[3],
												n = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
											return n /= 45, r && (n += 47721858.84), Math.round(n)
										}
									},
									y = function(e, t) {
										void 0 === t && (t = !1);
										var r = b();
										if (r) {
											var n = r.decode(e);
											if (t) {
												var i = n.indexOf("\0");
												return -1 !== i ? n.substring(0, i) : n
											}
											return n.replace(/\0/g, "")
										}
										for (var a, s, o, l = e.length, u = "", c = 0; c < l;) {
											if (0 === (a = e[c++]) && t) return u;
											if (0 !== a && 3 !== a) switch (a >> 4) {
												case 0:
												case 1:
												case 2:
												case 3:
												case 4:
												case 5:
												case 6:
												case 7:
													u += String.fromCharCode(a);
													break;
												case 12:
												case 13:
													s = e[c++], u += String.fromCharCode((31 & a) << 6 | 63 & s);
													break;
												case 14:
													s = e[c++], o = e[c++], u += String.fromCharCode((15 & a) << 12 | (63 & s) << 6 | (63 & o) << 0)
											}
										}
										return u
									},
									E = {
										decodeTextFrame: g
									};

								function b() {
									return n || void 0 === self.TextDecoder || (n = new self.TextDecoder("utf-8")), n
								}
							},
						"./src/demux/mp3demuxer.ts":
							/*!*********************************!*\
							  !*** ./src/demux/mp3demuxer.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./base-audio-demuxer */ "./src/demux/base-audio-demuxer.ts"),
									i = r( /*! ../demux/id3 */ "./src/demux/id3.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									s = r( /*! ./mpegaudio */ "./src/demux/mpegaudio.ts");

								function o(e, t) {
									return o = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, o(e, t)
								}
								var l = function(e) {
									var t, r;

									function n() {
										return e.apply(this, arguments) || this
									}
									r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, o(t, r);
									var l = n.prototype;
									return l.resetInitSegment = function(t, r, n) {
										e.prototype.resetInitSegment.call(this, t, r, n), this._audioTrack = {
											container: "audio/mpeg",
											type: "audio",
											id: 2,
											pid: -1,
											sequenceNumber: 0,
											isAAC: !1,
											samples: [],
											manifestCodec: t,
											duration: n,
											inputTimeScale: 9e4,
											dropped: 0
										}
									}, n.probe = function(e) {
										if (!e) return !1;
										for (var t = (i.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
											if (s.probe(e, t)) return a.logger.log("MPEG Audio sync word found !"), !0;
										return !1
									}, l.canParse = function(e, t) {
										return s.canParse(e, t)
									}, l.appendFrame = function(e, t, r) {
										if (null !== this.initPTS) return s.appendFrame(e, t, r, this.initPTS, this.frameIndex)
									}, n
								}(n.default);
								l.minProbeByteLength = 4, t.default = l
							},
						"./src/demux/mp4demuxer.ts":
							/*!*********************************!*\
							  !*** ./src/demux/mp4demuxer.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									i = r( /*! ./dummy-demuxed-track */ "./src/demux/dummy-demuxed-track.ts"),
									a = function() {
										function e(e, t) {
											this.remainderData = null, this.config = void 0, this.config = t
										}
										var t = e.prototype;
										return t.resetTimeStamp = function() {}, t.resetInitSegment = function() {}, t.resetContiguity = function() {}, e.probe = function(e) {
											return Object(n.findBox)({
												data: e,
												start: 0,
												end: Math.min(e.length, 16384)
											}, ["moof"]).length > 0
										}, t.demux = function(e) {
											var t = e,
												r = Object(i.dummyTrack)();
											if (this.config.progressive) {
												this.remainderData && (t = Object(n.appendUint8Array)(this.remainderData, e));
												var a = Object(n.segmentValidRange)(t);
												this.remainderData = a.remainder, r.samples = a.valid || new Uint8Array
											} else r.samples = t;
											return {
												audioTrack: Object(i.dummyTrack)(),
												avcTrack: r,
												id3Track: Object(i.dummyTrack)(),
												textTrack: Object(i.dummyTrack)()
											}
										}, t.flush = function() {
											var e = Object(i.dummyTrack)();
											return e.samples = this.remainderData || new Uint8Array, this.remainderData = null, {
												audioTrack: Object(i.dummyTrack)(),
												avcTrack: e,
												id3Track: Object(i.dummyTrack)(),
												textTrack: Object(i.dummyTrack)()
											}
										}, t.demuxSampleAes = function(e, t, r) {
											return Promise.reject(new Error("The MP4 demuxer does not support SAMPLE-AES decryption"))
										}, t.destroy = function() {}, e
									}();
								a.minProbeByteLength = 1024, t.default = a
							},
						"./src/demux/mpegaudio.ts":
							/*!********************************!*\
							  !*** ./src/demux/mpegaudio.ts ***!
							  \********************************/
							/*! exports provided: appendFrame, parseHeader, isHeaderPattern, isHeader, canParse, probe */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "appendFrame", (function() {
									return l
								})), r.d(t, "parseHeader", (function() {
									return u
								})), r.d(t, "isHeaderPattern", (function() {
									return c
								})), r.d(t, "isHeader", (function() {
									return d
								})), r.d(t, "canParse", (function() {
									return f
								})), r.d(t, "probe", (function() {
									return h
								}));
								var n = null,
									i = [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
									a = [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
									s = [
										[0, 72, 144, 12],
										[0, 0, 0, 0],
										[0, 72, 144, 12],
										[0, 144, 144, 12]
									],
									o = [0, 1, 1, 4];

								function l(e, t, r, n, i) {
									if (!(r + 24 > t.length)) {
										var a = u(t, r);
										if (a && r + a.frameLength <= t.length) {
											var s = n + i * (9e4 * a.samplesPerFrame / a.sampleRate),
												o = {
													unit: t.subarray(r, r + a.frameLength),
													pts: s,
													dts: s
												};
											return e.config = [], e.channelCount = a.channelCount, e.samplerate = a.sampleRate, e.samples.push(o), {
												sample: o,
												length: a.frameLength,
												missing: 0
											}
										}
									}
								}

								function u(e, t) {
									var r = e[t + 1] >> 3 & 3,
										l = e[t + 1] >> 1 & 3,
										u = e[t + 2] >> 4 & 15,
										c = e[t + 2] >> 2 & 3;
									if (1 !== r && 0 !== u && 15 !== u && 3 !== c) {
										var d = e[t + 2] >> 1 & 1,
											f = e[t + 3] >> 6,
											h = 1e3 * i[14 * (3 === r ? 3 - l : 3 === l ? 3 : 4) + u - 1],
											p = a[3 * (3 === r ? 0 : 2 === r ? 1 : 2) + c],
											g = 3 === f ? 1 : 2,
											v = s[r][l],
											m = o[l],
											y = 8 * v * m,
											E = Math.floor(v * h / p + d) * m;
										if (null === n) {
											var b = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
											n = b ? parseInt(b[1]) : 0
										}
										return !!n && n <= 87 && 2 === l && h >= 224e3 && 0 === f && (e[t + 3] = 128 | e[t + 3]), {
											sampleRate: p,
											channelCount: g,
											frameLength: E,
											samplesPerFrame: y
										}
									}
								}

								function c(e, t) {
									return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
								}

								function d(e, t) {
									return t + 1 < e.length && c(e, t)
								}

								function f(e, t) {
									return c(e, t) && 4 <= e.length - t
								}

								function h(e, t) {
									if (t + 1 < e.length && c(e, t)) {
										var r = u(e, t),
											n = 4;
										null != r && r.frameLength && (n = r.frameLength);
										var i = t + n;
										return i === e.length || d(e, i)
									}
									return !1
								}
							},
						"./src/demux/sample-aes.ts":
							/*!*********************************!*\
							  !*** ./src/demux/sample-aes.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../crypt/decrypter */ "./src/crypt/decrypter.ts"),
									i = r( /*! ./tsdemuxer */ "./src/demux/tsdemuxer.ts"),
									a = function() {
										function e(e, t, r) {
											this.keyData = void 0, this.decrypter = void 0, this.keyData = r, this.decrypter = new n.default(e, t, {
												removePKCS7Padding: !1
											})
										}
										var t = e.prototype;
										return t.decryptBuffer = function(e, t) {
											this.decrypter.decrypt(e, this.keyData.key.buffer, this.keyData.iv.buffer, t)
										}, t.decryptAacSample = function(e, t, r, n) {
											var i = e[t].unit,
												a = i.subarray(16, i.length - i.length % 16),
												s = a.buffer.slice(a.byteOffset, a.byteOffset + a.length),
												o = this;
											this.decryptBuffer(s, (function(a) {
												var s = new Uint8Array(a);
												i.set(s, 16), n || o.decryptAacSamples(e, t + 1, r)
											}))
										}, t.decryptAacSamples = function(e, t, r) {
											for (;; t++) {
												if (t >= e.length) return void r();
												if (!(e[t].unit.length < 32)) {
													var n = this.decrypter.isSync();
													if (this.decryptAacSample(e, t, r, n), !n) return
												}
											}
										}, t.getAvcEncryptedData = function(e) {
											for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), n = 0, i = 32; i < e.length - 16; i += 160, n += 16) r.set(e.subarray(i, i + 16), n);
											return r
										}, t.getAvcDecryptedUnit = function(e, t) {
											for (var r = new Uint8Array(t), n = 0, i = 32; i < e.length - 16; i += 160, n += 16) e.set(r.subarray(n, n + 16), i);
											return e
										}, t.decryptAvcSample = function(e, t, r, n, a, s) {
											var o = Object(i.discardEPB)(a.data),
												l = this.getAvcEncryptedData(o),
												u = this;
											this.decryptBuffer(l.buffer, (function(i) {
												a.data = u.getAvcDecryptedUnit(o, i), s || u.decryptAvcSamples(e, t, r + 1, n)
											}))
										}, t.decryptAvcSamples = function(e, t, r, n) {
											if (e instanceof Uint8Array) throw new Error("Cannot decrypt samples of type Uint8Array");
											for (;; t++, r = 0) {
												if (t >= e.length) return void n();
												for (var i = e[t].units; !(r >= i.length); r++) {
													var a = i[r];
													if (!(a.data.length <= 48 || 1 !== a.type && 5 !== a.type)) {
														var s = this.decrypter.isSync();
														if (this.decryptAvcSample(e, t, r, n, a, s), !s) return
													}
												}
											}
										}, e
									}();
								t.default = a
							},
						"./src/demux/transmuxer-interface.ts":
							/*!*******************************************!*\
							  !*** ./src/demux/transmuxer-interface.ts ***!
							  \*******************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return d
								}));
								var n = r( /*! webworkify-webpack */ "./node_modules/webworkify-webpack/index.js"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../demux/transmuxer */ "./src/demux/transmuxer.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = r( /*! ../errors */ "./src/errors.ts"),
									l = r( /*! ../utils/mediasource-helper */ "./src/utils/mediasource-helper.ts"),
									u = r( /*! eventemitter3 */ "./node_modules/eventemitter3/index.js"),
									c = Object(l.getMediaSource)() || {
										isTypeSupported: function() {
											return !1
										}
									},
									d = function() {
										function e(e, t, r, l) {
											var d = this;
											this.hls = void 0, this.id = void 0, this.observer = void 0, this.frag = null, this.part = null, this.worker = void 0, this.onwmsg = void 0, this.transmuxer = null, this.onTransmuxComplete = void 0, this.onFlush = void 0, this.hls = e, this.id = t, this.onTransmuxComplete = r, this.onFlush = l;
											var f = e.config,
												h = function(t, r) {
													(r = r || {}).frag = d.frag, r.id = d.id, e.trigger(t, r)
												};
											this.observer = new u.EventEmitter, this.observer.on(i.Events.FRAG_DECRYPTED, h), this.observer.on(i.Events.ERROR, h);
											var p = {
													mp4: c.isTypeSupported("video/mp4"),
													mpeg: c.isTypeSupported("audio/mpeg"),
													mp3: c.isTypeSupported('audio/mp4; codecs="mp3"')
												},
												g = navigator.vendor;
											if (f.enableWorker && "undefined" != typeof Worker) {
												var v;
												s.logger.log("demuxing in webworker");
												try {
													v = this.worker = n( /*! ../demux/transmuxer-worker.ts */ "./src/demux/transmuxer-worker.ts"), this.onwmsg = this.onWorkerMessage.bind(this), v.addEventListener("message", this.onwmsg), v.onerror = function(t) {
														e.trigger(i.Events.ERROR, {
															type: o.ErrorTypes.OTHER_ERROR,
															details: o.ErrorDetails.INTERNAL_EXCEPTION,
															fatal: !0,
															event: "demuxerWorker",
															error: new Error(t.message + "  (" + t.filename + ":" + t.lineno + ")")
														})
													}, v.postMessage({
														cmd: "init",
														typeSupported: p,
														vendor: g,
														id: t,
														config: JSON.stringify(f)
													})
												} catch (e) {
													s.logger.warn("Error in worker:", e), s.logger.error("Error while initializing DemuxerWorker, fallback to inline"), v && self.URL.revokeObjectURL(v.objectURL), this.transmuxer = new a.default(this.observer, p, f, g, t), this.worker = null
												}
											} else this.transmuxer = new a.default(this.observer, p, f, g, t)
										}
										var t = e.prototype;
										return t.destroy = function() {
											var e = this.worker;
											if (e) e.removeEventListener("message", this.onwmsg), e.terminate(), this.worker = null;
											else {
												var t = this.transmuxer;
												t && (t.destroy(), this.transmuxer = null)
											}
											var r = this.observer;
											r && r.removeAllListeners(), this.observer = null
										}, t.push = function(e, t, r, n, i, o, l, u, c, d) {
											var f, h, p = this;
											c.transmuxing.start = self.performance.now();
											var g = this.transmuxer,
												v = this.worker,
												m = o ? o.start : i.start,
												y = i.decryptdata,
												E = this.frag,
												b = !(E && i.cc === E.cc),
												T = !(E && c.level === E.level),
												S = E ? c.sn - E.sn : -1,
												k = this.part ? c.part - this.part.index : 1,
												w = !T && (1 === S || 0 === S && 1 === k),
												L = self.performance.now();
											(T || S || 0 === i.stats.parsing.start) && (i.stats.parsing.start = L), !o || !k && w || (o.stats.parsing.start = L);
											var A = !(E && (null === (f = i.initSegment) || void 0 === f ? void 0 : f.url) === (null === (h = E.initSegment) || void 0 === h ? void 0 : h.url)),
												D = new a.TransmuxState(b, w, u, T, m, A);
											if (!w || b || A) {
												s.logger.log("[transmuxer-interface, " + i.type + "]: Starting new transmux session for sn: " + c.sn + " p: " + c.part + " level: " + c.level + " id: " + c.id + "\n        discontinuity: " + b + "\n        trackSwitch: " + T + "\n        contiguous: " + w + "\n        accurateTimeOffset: " + u + "\n        timeOffset: " + m + "\n        initSegmentChange: " + A);
												var C = new a.TransmuxConfig(r, n, t, l, d);
												this.configureTransmuxer(C)
											}
											if (this.frag = i, this.part = o, v) v.postMessage({
												cmd: "demux",
												data: e,
												decryptdata: y,
												chunkMeta: c,
												state: D
											}, e instanceof ArrayBuffer ? [e] : []);
											else if (g) {
												var _ = g.push(e, y, c, D);
												Object(a.isPromise)(_) ? _.then((function(e) {
													p.handleTransmuxComplete(e)
												})) : this.handleTransmuxComplete(_)
											}
										}, t.flush = function(e) {
											var t = this;
											e.transmuxing.start = self.performance.now();
											var r = this.transmuxer,
												n = this.worker;
											if (n) n.postMessage({
												cmd: "flush",
												chunkMeta: e
											});
											else if (r) {
												var i = r.flush(e);
												Object(a.isPromise)(i) ? i.then((function(r) {
													t.handleFlushResult(r, e)
												})) : this.handleFlushResult(i, e)
											}
										}, t.handleFlushResult = function(e, t) {
											var r = this;
											e.forEach((function(e) {
												r.handleTransmuxComplete(e)
											})), this.onFlush(t)
										}, t.onWorkerMessage = function(e) {
											var t = e.data,
												r = this.hls;
											switch (t.event) {
												case "init":
													self.URL.revokeObjectURL(this.worker.objectURL);
													break;
												case "transmuxComplete":
													this.handleTransmuxComplete(t.data);
													break;
												case "flush":
													this.onFlush(t.data);
													break;
												default:
													t.data = t.data || {}, t.data.frag = this.frag, t.data.id = this.id, r.trigger(t.event, t.data)
											}
										}, t.configureTransmuxer = function(e) {
											var t = this.worker,
												r = this.transmuxer;
											t ? t.postMessage({
												cmd: "configure",
												config: e
											}) : r && r.configure(e)
										}, t.handleTransmuxComplete = function(e) {
											e.chunkMeta.transmuxing.end = self.performance.now(), this.onTransmuxComplete(e)
										}, e
									}()
							},
						"./src/demux/transmuxer-worker.ts":
							/*!****************************************!*\
							  !*** ./src/demux/transmuxer-worker.ts ***!
							  \****************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return o
								}));
								var n = r( /*! ../demux/transmuxer */ "./src/demux/transmuxer.ts"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									s = r( /*! eventemitter3 */ "./node_modules/eventemitter3/index.js");

								function o(e) {
									var t = new s.EventEmitter,
										r = function(t, r) {
											e.postMessage({
												event: t,
												data: r
											})
										};
									t.on(i.Events.FRAG_DECRYPTED, r), t.on(i.Events.ERROR, r), e.addEventListener("message", (function(i) {
										var s = i.data;
										switch (s.cmd) {
											case "init":
												var o = JSON.parse(s.config);
												e.transmuxer = new n.default(t, s.typeSupported, o, s.vendor, s.id), Object(a.enableLogs)(o.debug), r("init", null);
												break;
											case "configure":
												e.transmuxer.configure(s.config);
												break;
											case "demux":
												var u = e.transmuxer.push(s.data, s.decryptdata, s.chunkMeta, s.state);
												Object(n.isPromise)(u) ? u.then((function(t) {
													l(e, t)
												})) : l(e, u);
												break;
											case "flush":
												var d = s.chunkMeta,
													f = e.transmuxer.flush(d);
												Object(n.isPromise)(f) ? f.then((function(t) {
													c(e, t, d)
												})) : c(e, f, d)
										}
									}))
								}

								function l(e, t) {
									if ((r = t.remuxResult).audio || r.video || r.text || r.id3 || r.initSegment) {
										var r, n = [],
											i = t.remuxResult,
											a = i.audio,
											s = i.video;
										a && u(n, a), s && u(n, s), e.postMessage({
											event: "transmuxComplete",
											data: t
										}, n)
									}
								}

								function u(e, t) {
									t.data1 && e.push(t.data1.buffer), t.data2 && e.push(t.data2.buffer)
								}

								function c(e, t, r) {
									t.forEach((function(t) {
										l(e, t)
									})), e.postMessage({
										event: "flush",
										data: r
									})
								}
							},
						"./src/demux/transmuxer.ts":
							/*!*********************************!*\
							  !*** ./src/demux/transmuxer.ts ***!
							  \*********************************/
							/*! exports provided: default, isPromise, TransmuxConfig, TransmuxState */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return y
								})), r.d(t, "isPromise", (function() {
									return b
								})), r.d(t, "TransmuxConfig", (function() {
									return T
								})), r.d(t, "TransmuxState", (function() {
									return S
								}));
								var n, i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../errors */ "./src/errors.ts"),
									s = r( /*! ../crypt/decrypter */ "./src/crypt/decrypter.ts"),
									o = r( /*! ../demux/aacdemuxer */ "./src/demux/aacdemuxer.ts"),
									l = r( /*! ../demux/mp4demuxer */ "./src/demux/mp4demuxer.ts"),
									u = r( /*! ../demux/tsdemuxer */ "./src/demux/tsdemuxer.ts"),
									c = r( /*! ../demux/mp3demuxer */ "./src/demux/mp3demuxer.ts"),
									d = r( /*! ../remux/mp4-remuxer */ "./src/remux/mp4-remuxer.ts"),
									f = r( /*! ../remux/passthrough-remuxer */ "./src/remux/passthrough-remuxer.ts"),
									h = r( /*! ./chunk-cache */ "./src/demux/chunk-cache.ts"),
									p = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									g = r( /*! ../utils/logger */ "./src/utils/logger.ts");
								try {
									n = self.performance.now.bind(self.performance)
								} catch (e) {
									g.logger.debug("Unable to use Performance API on this environment"), n = self.Date.now
								}
								var v = [{
										demux: u.default,
										remux: d.default
									}, {
										demux: l.default,
										remux: f.default
									}, {
										demux: o.default,
										remux: d.default
									}, {
										demux: c.default,
										remux: d.default
									}],
									m = 1024;
								v.forEach((function(e) {
									var t = e.demux;
									m = Math.max(m, t.minProbeByteLength)
								}));
								var y = function() {
										function e(e, t, r, n, i) {
											this.observer = void 0, this.typeSupported = void 0, this.config = void 0, this.vendor = void 0, this.id = void 0, this.demuxer = void 0, this.remuxer = void 0, this.decrypter = void 0, this.probe = void 0, this.decryptionPromise = null, this.transmuxConfig = void 0, this.currentTransmuxState = void 0, this.cache = new h.default, this.observer = e, this.typeSupported = t, this.config = r, this.vendor = n, this.id = i
										}
										var t = e.prototype;
										return t.configure = function(e) {
											this.transmuxConfig = e, this.decrypter && this.decrypter.reset()
										}, t.push = function(e, t, r, i) {
											var a = this,
												s = r.transmuxing;
											s.executeStart = n();
											var o = new Uint8Array(e),
												l = this.cache,
												u = this.config,
												c = this.currentTransmuxState,
												d = this.transmuxConfig;
											i && (this.currentTransmuxState = i);
											var f = function(e, t) {
												var r = null;
												return e.byteLength > 0 && null != t && null != t.key && null !== t.iv && null != t.method && (r = t), r
											}(o, t);
											if (f && "AES-128" === f.method) {
												var h = this.getDecrypter();
												if (!u.enableSoftwareAES) return this.decryptionPromise = h.webCryptoDecrypt(o, f.key.buffer, f.iv.buffer).then((function(e) {
													var t = a.push(e, null, r);
													return a.decryptionPromise = null, t
												})), this.decryptionPromise;
												var g = h.softwareDecrypt(o, f.key.buffer, f.iv.buffer);
												if (!g) return s.executeEnd = n(), E(r);
												o = new Uint8Array(g)
											}
											var v = i || c,
												m = v.contiguous,
												y = v.discontinuity,
												b = v.trackSwitch,
												T = v.accurateTimeOffset,
												S = v.timeOffset,
												k = v.initSegmentChange,
												w = d.audioCodec,
												L = d.videoCodec,
												A = d.defaultInitPts,
												D = d.duration,
												C = d.initSegmentData;
											if ((y || b || k) && this.resetInitSegment(C, w, L, D), (y || k) && this.resetInitialTimestamp(A), m || this.resetContiguity(), this.needsProbing(o, y, b)) {
												if (l.dataLength) {
													var _ = l.flush();
													o = Object(p.appendUint8Array)(_, o)
												}
												this.configureTransmuxer(o, d)
											}
											var R = this.transmux(o, f, S, T, r),
												x = this.currentTransmuxState;
											return x.contiguous = !0, x.discontinuity = !1, x.trackSwitch = !1, s.executeEnd = n(), R
										}, t.flush = function(e) {
											var t = this,
												r = e.transmuxing;
											r.executeStart = n();
											var s = this.decrypter,
												o = this.cache,
												l = this.currentTransmuxState,
												u = this.decryptionPromise;
											if (u) return u.then((function() {
												return t.flush(e)
											}));
											var c = [],
												d = l.timeOffset;
											if (s) {
												var f = s.flush();
												f && c.push(this.push(f, null, e))
											}
											var h = o.dataLength;
											o.reset();
											var p = this.demuxer,
												g = this.remuxer;
											if (!p || !g) return h >= m && this.observer.emit(i.Events.ERROR, i.Events.ERROR, {
												type: a.ErrorTypes.MEDIA_ERROR,
												details: a.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: !0,
												reason: "no demux matching with content found"
											}), r.executeEnd = n(), [E(e)];
											var v = p.flush(d);
											return b(v) ? v.then((function(r) {
												return t.flushRemux(c, r, e), c
											})) : (this.flushRemux(c, v, e), c)
										}, t.flushRemux = function(e, t, r) {
											var i = t.audioTrack,
												a = t.avcTrack,
												s = t.id3Track,
												o = t.textTrack,
												l = this.currentTransmuxState,
												u = l.accurateTimeOffset,
												c = l.timeOffset;
											g.logger.log("[transmuxer.ts]: Flushed fragment " + r.sn + (r.part > -1 ? " p: " + r.part : "") + " of level " + r.level);
											var d = this.remuxer.remux(i, a, s, o, c, u, !0, this.id);
											e.push({
												remuxResult: d,
												chunkMeta: r
											}), r.transmuxing.executeEnd = n()
										}, t.resetInitialTimestamp = function(e) {
											var t = this.demuxer,
												r = this.remuxer;
											t && r && (t.resetTimeStamp(e), r.resetTimeStamp(e))
										}, t.resetContiguity = function() {
											var e = this.demuxer,
												t = this.remuxer;
											e && t && (e.resetContiguity(), t.resetNextTimestamp())
										}, t.resetInitSegment = function(e, t, r, n) {
											var i = this.demuxer,
												a = this.remuxer;
											i && a && (i.resetInitSegment(t, r, n), a.resetInitSegment(e, t, r))
										}, t.destroy = function() {
											this.demuxer && (this.demuxer.destroy(), this.demuxer = void 0), this.remuxer && (this.remuxer.destroy(), this.remuxer = void 0)
										}, t.transmux = function(e, t, r, n, i) {
											return t && "SAMPLE-AES" === t.method ? this.transmuxSampleAes(e, t, r, n, i) : this.transmuxUnencrypted(e, r, n, i)
										}, t.transmuxUnencrypted = function(e, t, r, n) {
											var i = this.demuxer.demux(e, t, !1, !this.config.progressive),
												a = i.audioTrack,
												s = i.avcTrack,
												o = i.id3Track,
												l = i.textTrack;
											return {
												remuxResult: this.remuxer.remux(a, s, o, l, t, r, !1, this.id),
												chunkMeta: n
											}
										}, t.transmuxSampleAes = function(e, t, r, n, i) {
											var a = this;
											return this.demuxer.demuxSampleAes(e, t, r).then((function(e) {
												return {
													remuxResult: a.remuxer.remux(e.audioTrack, e.avcTrack, e.id3Track, e.textTrack, r, n, !1, a.id),
													chunkMeta: i
												}
											}))
										}, t.configureTransmuxer = function(e, t) {
											for (var r, n = this.config, i = this.observer, a = this.typeSupported, s = this.vendor, o = t.audioCodec, u = t.defaultInitPts, c = t.duration, d = t.initSegmentData, h = t.videoCodec, p = 0, m = v.length; p < m; p++)
												if (v[p].demux.probe(e)) {
													r = v[p];
													break
												} r || (g.logger.warn("Failed to find demuxer by probing frag, treating as mp4 passthrough"), r = {
												demux: l.default,
												remux: f.default
											});
											var y = this.demuxer,
												E = this.remuxer,
												b = r.remux,
												T = r.demux;
											E && E instanceof b || (this.remuxer = new b(i, n, a, s)), y && y instanceof T || (this.demuxer = new T(i, n, a), this.probe = T.probe), this.resetInitSegment(d, o, h, c), this.resetInitialTimestamp(u)
										}, t.needsProbing = function(e, t, r) {
											return !this.demuxer || !this.remuxer || t || r
										}, t.getDecrypter = function() {
											var e = this.decrypter;
											return e || (e = this.decrypter = new s.default(this.observer, this.config)), e
										}, e
									}(),
									E = function(e) {
										return {
											remuxResult: {},
											chunkMeta: e
										}
									};

								function b(e) {
									return "then" in e && e.then instanceof Function
								}
								var T = function(e, t, r, n, i) {
										this.audioCodec = void 0, this.videoCodec = void 0, this.initSegmentData = void 0, this.duration = void 0, this.defaultInitPts = void 0, this.audioCodec = e, this.videoCodec = t, this.initSegmentData = r, this.duration = n, this.defaultInitPts = i
									},
									S = function(e, t, r, n, i, a) {
										this.discontinuity = void 0, this.contiguous = void 0, this.accurateTimeOffset = void 0, this.trackSwitch = void 0, this.timeOffset = void 0, this.initSegmentChange = void 0, this.discontinuity = e, this.contiguous = t, this.accurateTimeOffset = r, this.trackSwitch = n, this.timeOffset = i, this.initSegmentChange = a
									}
							},
						"./src/demux/tsdemuxer.ts":
							/*!********************************!*\
							  !*** ./src/demux/tsdemuxer.ts ***!
							  \********************************/
							/*! exports provided: discardEPB, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "discardEPB", (function() {
									return b
								}));
								var n = r( /*! ./adts */ "./src/demux/adts.ts"),
									i = r( /*! ./mpegaudio */ "./src/demux/mpegaudio.ts"),
									a = r( /*! ./exp-golomb */ "./src/demux/exp-golomb.ts"),
									s = r( /*! ./id3 */ "./src/demux/id3.ts"),
									o = r( /*! ./sample-aes */ "./src/demux/sample-aes.ts"),
									l = r( /*! ../events */ "./src/events.ts"),
									u = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									c = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									d = r( /*! ../errors */ "./src/errors.ts"),
									f = {
										video: 1,
										audio: 2,
										id3: 3,
										text: 4
									},
									h = function() {
										function e(e, t, r) {
											this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.sampleAes = null, this.pmtParsed = !1, this.audioCodec = void 0, this.videoCodec = void 0, this._duration = 0, this.aacLastPTS = null, this._initPTS = null, this._initDTS = null, this._pmtId = -1, this._avcTrack = void 0, this._audioTrack = void 0, this._id3Track = void 0, this._txtTrack = void 0, this.aacOverFlow = null, this.avcSample = null, this.remainderData = null, this.observer = e, this.config = t, this.typeSupported = r
										}
										e.probe = function(t) {
											var r = e.syncOffset(t);
											return !(r < 0 || (r && c.logger.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"), 0))
										}, e.syncOffset = function(e) {
											for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
												if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376]) return r;
												r++
											}
											return -1
										}, e.createTrack = function(e, t) {
											return {
												container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
												type: e,
												id: f[e],
												pid: -1,
												inputTimeScale: 9e4,
												sequenceNumber: 0,
												samples: [],
												dropped: 0,
												duration: "audio" === e ? t : void 0
											}
										};
										var t = e.prototype;
										return t.resetInitSegment = function(t, r, n) {
											this.pmtParsed = !1, this._pmtId = -1, this._avcTrack = e.createTrack("video", n), this._audioTrack = e.createTrack("audio", n), this._id3Track = e.createTrack("id3", n), this._txtTrack = e.createTrack("text", n), this._audioTrack.isAAC = !0, this.aacOverFlow = null, this.aacLastPTS = null, this.avcSample = null, this.audioCodec = t, this.videoCodec = r, this._duration = n
										}, t.resetTimeStamp = function() {}, t.resetContiguity = function() {
											var e = this._audioTrack,
												t = this._avcTrack,
												r = this._id3Track;
											e && (e.pesData = null), t && (t.pesData = null), r && (r.pesData = null), this.aacOverFlow = null, this.aacLastPTS = null
										}, t.demux = function(t, r, n, i) {
											var a;
											void 0 === n && (n = !1), void 0 === i && (i = !1), n || (this.sampleAes = null);
											var s = this._avcTrack,
												o = this._audioTrack,
												f = this._id3Track,
												h = s.pid,
												p = s.pesData,
												y = o.pid,
												E = f.pid,
												b = o.pesData,
												T = f.pesData,
												S = !1,
												k = this.pmtParsed,
												w = this._pmtId,
												L = t.length;
											if (this.remainderData && (L = (t = Object(u.appendUint8Array)(this.remainderData, t)).length, this.remainderData = null), L < 188 && !i) return this.remainderData = t, {
												audioTrack: o,
												avcTrack: s,
												id3Track: f,
												textTrack: this._txtTrack
											};
											var A = Math.max(0, e.syncOffset(t));
											(L -= (L + A) % 188) < t.byteLength && !i && (this.remainderData = new Uint8Array(t.buffer, L, t.buffer.byteLength - L));
											for (var D = 0, C = A; C < L; C += 188)
												if (71 === t[C]) {
													var _ = !!(64 & t[C + 1]),
														R = ((31 & t[C + 1]) << 8) + t[C + 2],
														x = void 0;
													if ((48 & t[C + 3]) >> 4 > 1) {
														if ((x = C + 5 + t[C + 4]) === C + 188) continue
													} else x = C + 4;
													switch (R) {
														case h:
															_ && (p && (a = m(p)) && this.parseAVCPES(a, !1), p = {
																data: [],
																size: 0
															}), p && (p.data.push(t.subarray(x, C + 188)), p.size += C + 188 - x);
															break;
														case y:
															_ && (b && (a = m(b)) && (o.isAAC ? this.parseAACPES(a) : this.parseMPEGPES(a)), b = {
																data: [],
																size: 0
															}), b && (b.data.push(t.subarray(x, C + 188)), b.size += C + 188 - x);
															break;
														case E:
															_ && (T && (a = m(T)) && this.parseID3PES(a), T = {
																data: [],
																size: 0
															}), T && (T.data.push(t.subarray(x, C + 188)), T.size += C + 188 - x);
															break;
														case 0:
															_ && (x += t[x] + 1), w = this._pmtId = g(t, x);
															break;
														case w:
															_ && (x += t[x] + 1);
															var I = v(t, x, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, n);
															(h = I.avc) > 0 && (s.pid = h), (y = I.audio) > 0 && (o.pid = y, o.isAAC = I.isAAC), (E = I.id3) > 0 && (f.pid = E), S && !k && (c.logger.log("reparse from beginning"), S = !1, C = A - 188), k = this.pmtParsed = !0;
															break;
														case 17:
														case 8191:
															break;
														default:
															S = !0
													}
												} else D++;
											D > 0 && this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
												type: d.ErrorTypes.MEDIA_ERROR,
												details: d.ErrorDetails.FRAG_PARSING_ERROR,
												fatal: !1,
												reason: "Found " + D + " TS packet/s that do not start with 0x47"
											}), s.pesData = p, o.pesData = b, f.pesData = T;
											var O = {
												audioTrack: o,
												avcTrack: s,
												id3Track: f,
												textTrack: this._txtTrack
											};
											return i && this.extractRemainingSamples(O), O
										}, t.flush = function() {
											var e, t = this.remainderData;
											return this.remainderData = null, e = t ? this.demux(t, -1, !1, !0) : {
												audioTrack: this._audioTrack,
												avcTrack: this._avcTrack,
												textTrack: this._txtTrack,
												id3Track: this._id3Track
											}, this.extractRemainingSamples(e), this.sampleAes ? this.decrypt(e, this.sampleAes) : e
										}, t.extractRemainingSamples = function(e) {
											var t, r = e.audioTrack,
												n = e.avcTrack,
												i = e.id3Track,
												a = n.pesData,
												s = r.pesData,
												o = i.pesData;
											a && (t = m(a)) ? (this.parseAVCPES(t, !0), n.pesData = null) : n.pesData = a, s && (t = m(s)) ? (r.isAAC ? this.parseAACPES(t) : this.parseMPEGPES(t), r.pesData = null) : (null != s && s.size && c.logger.log("last AAC PES packet truncated,might overlap between fragments"), r.pesData = s), o && (t = m(o)) ? (this.parseID3PES(t), i.pesData = null) : i.pesData = o
										}, t.demuxSampleAes = function(e, t, r) {
											var n = this.demux(e, r, !0, !this.config.progressive),
												i = this.sampleAes = new o.default(this.observer, this.config, t);
											return this.decrypt(n, i)
										}, t.decrypt = function(e, t) {
											return new Promise((function(r) {
												var n = e.audioTrack,
													i = e.avcTrack;
												n.samples && n.isAAC ? t.decryptAacSamples(n.samples, 0, (function() {
													i.samples ? t.decryptAvcSamples(i.samples, 0, 0, (function() {
														r(e)
													})) : r(e)
												})) : i.samples && t.decryptAvcSamples(i.samples, 0, 0, (function() {
													r(e)
												}))
											}))
										}, t.destroy = function() {
											this._initPTS = this._initDTS = null, this._duration = 0
										}, t.parseAVCPES = function(e, t) {
											var r, n = this,
												i = this._avcTrack,
												o = this.parseAVCNALu(e.data),
												l = this.avcSample,
												u = !1;
											e.data = null, l && o.length && !i.audFound && (y(l, i), l = this.avcSample = p(!1, e.pts, e.dts, "")), o.forEach((function(t) {
												switch (t.type) {
													case 1:
														r = !0, l || (l = n.avcSample = p(!0, e.pts, e.dts, "")), l.frame = !0;
														var o = t.data;
														if (u && o.length > 4) {
															var c = new a.default(o).readSliceType();
															2 !== c && 4 !== c && 7 !== c && 9 !== c || (l.key = !0)
														}
														break;
													case 5:
														r = !0, l || (l = n.avcSample = p(!0, e.pts, e.dts, "")), l.key = !0, l.frame = !0;
														break;
													case 6:
														r = !0;
														var d = new a.default(b(t.data));
														d.readUByte();
														for (var f = 0, h = 0, g = !1, v = 0; !g && d.bytesAvailable > 1;) {
															f = 0;
															do {
																f += v = d.readUByte()
															} while (255 === v);
															h = 0;
															do {
																h += v = d.readUByte()
															} while (255 === v);
															if (4 === f && 0 !== d.bytesAvailable) {
																if (g = !0, 181 === d.readUByte() && 49 === d.readUShort() && 1195456820 === d.readUInt() && 3 === d.readUByte()) {
																	for (var m = d.readUByte(), T = 31 & m, S = [m, d.readUByte()], k = 0; k < T; k++) S.push(d.readUByte()), S.push(d.readUByte()), S.push(d.readUByte());
																	E(n._txtTrack.samples, {
																		type: 3,
																		pts: e.pts,
																		bytes: S
																	})
																}
															} else if (5 === f && 0 !== d.bytesAvailable) {
																if (g = !0, h > 16) {
																	for (var w = [], L = 0; L < 16; L++) w.push(d.readUByte().toString(16)), 3 !== L && 5 !== L && 7 !== L && 9 !== L || w.push("-");
																	for (var A = h - 16, D = new Uint8Array(A), C = 0; C < A; C++) D[C] = d.readUByte();
																	E(n._txtTrack.samples, {
																		pts: e.pts,
																		payloadType: f,
																		uuid: w.join(""),
																		userData: Object(s.utf8ArrayToStr)(D),
																		userDataBytes: D
																	})
																}
															} else if (h < d.bytesAvailable)
																for (var _ = 0; _ < h; _++) d.readUByte()
														}
														break;
													case 7:
														if (r = !0, u = !0, !i.sps) {
															var R = new a.default(t.data).readSPS();
															i.width = R.width, i.height = R.height, i.pixelRatio = R.pixelRatio, i.sps = [t.data], i.duration = n._duration;
															for (var x = t.data.subarray(1, 4), I = "avc1.", O = 0; O < 3; O++) {
																var P = x[O].toString(16);
																P.length < 2 && (P = "0" + P), I += P
															}
															i.codec = I
														}
														break;
													case 8:
														r = !0, i.pps || (i.pps = [t.data]);
														break;
													case 9:
														r = !1, i.audFound = !0, l && y(l, i), l = n.avcSample = p(!1, e.pts, e.dts, "");
														break;
													case 12:
														r = !1;
														break;
													default:
														r = !1, l && (l.debug += "unknown NAL " + t.type + " ")
												}
												l && r && l.units.push(t)
											})), t && l && (y(l, i), this.avcSample = null)
										}, t.getLastNalUnit = function() {
											var e, t, r = this.avcSample;
											if (!r || 0 === r.units.length) {
												var n = this._avcTrack.samples;
												r = n[n.length - 1]
											}
											if (null !== (e = r) && void 0 !== e && e.units) {
												var i = r.units;
												t = i[i.length - 1]
											}
											return t
										}, t.parseAVCNALu = function(e) {
											var t, r, n = e.byteLength,
												i = this._avcTrack,
												a = i.naluState || 0,
												s = a,
												o = [],
												l = 0,
												u = -1,
												c = 0;
											for (-1 === a && (u = 0, c = 31 & e[0], a = 0, l = 1); l < n;)
												if (t = e[l++], a)
													if (1 !== a)
														if (t)
															if (1 === t) {
																if (u >= 0) {
																	var d = {
																		data: e.subarray(u, l - a - 1),
																		type: c
																	};
																	o.push(d)
																} else {
																	var f = this.getLastNalUnit();
																	if (f && (s && l <= 4 - s && f.state && (f.data = f.data.subarray(0, f.data.byteLength - s)), (r = l - a - 1) > 0)) {
																		var h = new Uint8Array(f.data.byteLength + r);
																		h.set(f.data, 0), h.set(e.subarray(0, r), f.data.byteLength), f.data = h, f.state = 0
																	}
																}
																l < n ? (u = l, c = 31 & e[l], a = 0) : a = -1
															} else a = 0;
											else a = 3;
											else a = t ? 0 : 2;
											else a = t ? 0 : 1;
											if (u >= 0 && a >= 0) {
												var p = {
													data: e.subarray(u, n),
													type: c,
													state: a
												};
												o.push(p)
											}
											if (0 === o.length) {
												var g = this.getLastNalUnit();
												if (g) {
													var v = new Uint8Array(g.data.byteLength + e.byteLength);
													v.set(g.data, 0), v.set(e, g.data.byteLength), g.data = v
												}
											}
											return i.naluState = a, o
										}, t.parseAACPES = function(e) {
											var t, r, i, a, s, o = 0,
												u = this._audioTrack,
												f = this.aacOverFlow,
												h = e.data;
											if (f) {
												this.aacOverFlow = null;
												var p = f.sample.unit.byteLength,
													g = Math.min(f.missing, p),
													v = p - g;
												f.sample.unit.set(h.subarray(0, g), v), u.samples.push(f.sample), o = f.missing
											}
											for (t = o, r = h.length; t < r - 1 && !n.isHeader(h, t); t++);
											if (t === o || (t < r - 1 ? (i = "AAC PES did not start with ADTS header,offset:" + t, a = !1) : (i = "no ADTS header found in AAC PES", a = !0), c.logger.warn("parsing error:" + i), this.observer.emit(l.Events.ERROR, l.Events.ERROR, {
													type: d.ErrorTypes.MEDIA_ERROR,
													details: d.ErrorDetails.FRAG_PARSING_ERROR,
													fatal: a,
													reason: i
												}), !a)) {
												if (n.initTrackConfig(u, this.observer, h, t, this.audioCodec), void 0 !== e.pts) s = e.pts;
												else {
													if (!f) return void c.logger.warn("[tsdemuxer]: AAC PES unknown PTS");
													var m = n.getFrameDuration(u.samplerate);
													s = f.sample.pts + m
												}
												for (var y = 0; t < r;) {
													if (n.isHeader(h, t)) {
														if (t + 5 < r) {
															var E = n.appendFrame(u, h, t, s, y);
															if (E) {
																if (!E.missing) {
																	t += E.length, y++;
																	continue
																}
																this.aacOverFlow = E
															}
														}
														break
													}
													t++
												}
											}
										}, t.parseMPEGPES = function(e) {
											var t = e.data,
												r = t.length,
												n = 0,
												a = 0,
												s = e.pts;
											if (void 0 !== s)
												for (; a < r;)
													if (i.isHeader(t, a)) {
														var o = i.appendFrame(this._audioTrack, t, a, s, n);
														if (!o) break;
														a += o.length, n++
													} else a++;
											else c.logger.warn("[tsdemuxer]: MPEG PES unknown PTS")
										}, t.parseID3PES = function(e) {
											void 0 !== e.pts ? this._id3Track.samples.push(e) : c.logger.warn("[tsdemuxer]: ID3 PES unknown PTS")
										}, e
									}();

								function p(e, t, r, n) {
									return {
										key: e,
										frame: !1,
										pts: t,
										dts: r,
										units: [],
										debug: n,
										length: 0
									}
								}

								function g(e, t) {
									return (31 & e[t + 10]) << 8 | e[t + 11]
								}

								function v(e, t, r, n) {
									var i = {
											audio: -1,
											avc: -1,
											id3: -1,
											isAAC: !0
										},
										a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4;
									for (t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) {
										var s = (31 & e[t + 1]) << 8 | e[t + 2];
										switch (e[t]) {
											case 207:
												if (!n) {
													c.logger.log("ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
													break
												}
												case 15:
													-1 === i.audio && (i.audio = s);
													break;
												case 21:
													-1 === i.id3 && (i.id3 = s);
													break;
												case 219:
													if (!n) {
														c.logger.log("H.264 with AES-128-CBC slice encryption found in unencrypted stream");
														break
													}
													case 27:
														-1 === i.avc && (i.avc = s);
														break;
													case 3:
													case 4:
														r ? -1 === i.audio && (i.audio = s, i.isAAC = !1) : c.logger.log("MPEG audio found, not supported in this browser");
														break;
													case 36:
														c.logger.warn("Unsupported HEVC stream type found")
										}
										t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
									}
									return i
								}

								function m(e) {
									var t, r, n, i, a, s = 0,
										o = e.data;
									if (!e || 0 === e.size) return null;
									for (; o[0].length < 19 && o.length > 1;) {
										var l = new Uint8Array(o[0].length + o[1].length);
										l.set(o[0]), l.set(o[1], o[0].length), o[0] = l, o.splice(1, 1)
									}
									if (1 === ((t = o[0])[0] << 16) + (t[1] << 8) + t[2]) {
										if ((r = (t[4] << 8) + t[5]) && r > e.size - 6) return null;
										var u = t[7];
										192 & u && (i = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2, 64 & u ? i - (a = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 54e5 && (c.logger.warn(Math.round((i - a) / 9e4) + "s delta between PTS and DTS, align them"), i = a) : a = i);
										var d = (n = t[8]) + 9;
										if (e.size <= d) return null;
										e.size -= d;
										for (var f = new Uint8Array(e.size), h = 0, p = o.length; h < p; h++) {
											var g = (t = o[h]).byteLength;
											if (d) {
												if (d > g) {
													d -= g;
													continue
												}
												t = t.subarray(d), g -= d, d = 0
											}
											f.set(t, s), s += g
										}
										return r && (r -= n + 3), {
											data: f,
											pts: i,
											dts: a,
											len: r
										}
									}
									return null
								}

								function y(e, t) {
									if (e.units.length && e.frame) {
										if (void 0 === e.pts) {
											var r = t.samples,
												n = r.length;
											if (!n) return void t.dropped++;
											var i = r[n - 1];
											e.pts = i.pts, e.dts = i.dts
										}
										t.samples.push(e)
									}
									e.debug.length && c.logger.log(e.pts + "/" + e.dts + ":" + e.debug)
								}

								function E(e, t) {
									var r = e.length;
									if (r > 0) {
										if (t.pts >= e[r - 1].pts) e.push(t);
										else
											for (var n = r - 1; n >= 0; n--)
												if (t.pts < e[n].pts) {
													e.splice(n, 0, t);
													break
												}
									} else e.push(t)
								}

								function b(e) {
									for (var t = e.byteLength, r = [], n = 1; n < t - 2;) 0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (r.push(n + 2), n += 2) : n++;
									if (0 === r.length) return e;
									var i = t - r.length,
										a = new Uint8Array(i),
										s = 0;
									for (n = 0; n < i; s++, n++) s === r[0] && (s++, r.shift()), a[n] = e[s];
									return a
								}
								h.minProbeByteLength = 188, t.default = h
							},
						"./src/errors.ts":
							/*!***********************!*\
							  !*** ./src/errors.ts ***!
							  \***********************/
							/*! exports provided: ErrorTypes, ErrorDetails */
							function(e, t, r) {
								"use strict";
								var n, i;
								r.r(t), r.d(t, "ErrorTypes", (function() {
										return n
									})), r.d(t, "ErrorDetails", (function() {
										return i
									})),
									function(e) {
										e.NETWORK_ERROR = "networkError", e.MEDIA_ERROR = "mediaError", e.KEY_SYSTEM_ERROR = "keySystemError", e.MUX_ERROR = "muxError", e.OTHER_ERROR = "otherError"
									}(n || (n = {})),
									function(e) {
										e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys", e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess", e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession", e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed", e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData", e.MANIFEST_LOAD_ERROR = "manifestLoadError", e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut", e.MANIFEST_PARSING_ERROR = "manifestParsingError", e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError", e.LEVEL_EMPTY_ERROR = "levelEmptyError", e.LEVEL_LOAD_ERROR = "levelLoadError", e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut", e.LEVEL_SWITCH_ERROR = "levelSwitchError", e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError", e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut", e.SUBTITLE_LOAD_ERROR = "subtitleTrackLoadError", e.SUBTITLE_TRACK_LOAD_TIMEOUT = "subtitleTrackLoadTimeOut", e.FRAG_LOAD_ERROR = "fragLoadError", e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut", e.FRAG_DECRYPT_ERROR = "fragDecryptError", e.FRAG_PARSING_ERROR = "fragParsingError", e.REMUX_ALLOC_ERROR = "remuxAllocError", e.KEY_LOAD_ERROR = "keyLoadError", e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut", e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError", e.BUFFER_INCOMPATIBLE_CODECS_ERROR = "bufferIncompatibleCodecsError", e.BUFFER_APPEND_ERROR = "bufferAppendError", e.BUFFER_APPENDING_ERROR = "bufferAppendingError", e.BUFFER_STALLED_ERROR = "bufferStalledError", e.BUFFER_FULL_ERROR = "bufferFullError", e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole", e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall", e.INTERNAL_EXCEPTION = "internalException", e.INTERNAL_ABORTED = "aborted", e.UNKNOWN = "unknown"
									}(i || (i = {}))
							},
						"./src/events.ts":
							/*!***********************!*\
							  !*** ./src/events.ts ***!
							  \***********************/
							/*! exports provided: Events */
							function(e, t, r) {
								"use strict";
								var n;
								r.r(t), r.d(t, "Events", (function() {
										return n
									})),
									function(e) {
										e.MEDIA_ATTACHING = "hlsMediaAttaching", e.MEDIA_ATTACHED = "hlsMediaAttached", e.MEDIA_DETACHING = "hlsMediaDetaching", e.MEDIA_DETACHED = "hlsMediaDetached", e.BUFFER_RESET = "hlsBufferReset", e.BUFFER_CODECS = "hlsBufferCodecs", e.BUFFER_CREATED = "hlsBufferCreated", e.BUFFER_APPENDING = "hlsBufferAppending", e.BUFFER_APPENDED = "hlsBufferAppended", e.BUFFER_EOS = "hlsBufferEos", e.BUFFER_FLUSHING = "hlsBufferFlushing", e.BUFFER_FLUSHED = "hlsBufferFlushed", e.MANIFEST_LOADING = "hlsManifestLoading", e.MANIFEST_LOADED = "hlsManifestLoaded", e.MANIFEST_PARSED = "hlsManifestParsed", e.LEVEL_SWITCHING = "hlsLevelSwitching", e.LEVEL_SWITCHED = "hlsLevelSwitched", e.LEVEL_LOADING = "hlsLevelLoading", e.LEVEL_LOADED = "hlsLevelLoaded", e.LEVEL_UPDATED = "hlsLevelUpdated", e.LEVEL_PTS_UPDATED = "hlsLevelPtsUpdated", e.LEVELS_UPDATED = "hlsLevelsUpdated", e.AUDIO_TRACKS_UPDATED = "hlsAudioTracksUpdated", e.AUDIO_TRACK_SWITCHING = "hlsAudioTrackSwitching", e.AUDIO_TRACK_SWITCHED = "hlsAudioTrackSwitched", e.AUDIO_TRACK_LOADING = "hlsAudioTrackLoading", e.AUDIO_TRACK_LOADED = "hlsAudioTrackLoaded", e.SUBTITLE_TRACKS_UPDATED = "hlsSubtitleTracksUpdated", e.SUBTITLE_TRACKS_CLEARED = "hlsSubtitleTracksCleared", e.SUBTITLE_TRACK_SWITCH = "hlsSubtitleTrackSwitch", e.SUBTITLE_TRACK_LOADING = "hlsSubtitleTrackLoading", e.SUBTITLE_TRACK_LOADED = "hlsSubtitleTrackLoaded", e.SUBTITLE_FRAG_PROCESSED = "hlsSubtitleFragProcessed", e.CUES_PARSED = "hlsCuesParsed", e.NON_NATIVE_TEXT_TRACKS_FOUND = "hlsNonNativeTextTracksFound", e.INIT_PTS_FOUND = "hlsInitPtsFound", e.FRAG_LOADING = "hlsFragLoading", e.FRAG_LOAD_EMERGENCY_ABORTED = "hlsFragLoadEmergencyAborted", e.FRAG_LOADED = "hlsFragLoaded", e.FRAG_DECRYPTED = "hlsFragDecrypted", e.FRAG_PARSING_INIT_SEGMENT = "hlsFragParsingInitSegment", e.FRAG_PARSING_USERDATA = "hlsFragParsingUserdata", e.FRAG_PARSING_METADATA = "hlsFragParsingMetadata", e.FRAG_PARSED = "hlsFragParsed", e.FRAG_BUFFERED = "hlsFragBuffered", e.FRAG_CHANGED = "hlsFragChanged", e.FPS_DROP = "hlsFpsDrop", e.FPS_DROP_LEVEL_CAPPING = "hlsFpsDropLevelCapping", e.ERROR = "hlsError", e.DESTROYING = "hlsDestroying", e.KEY_LOADING = "hlsKeyLoading", e.KEY_LOADED = "hlsKeyLoaded", e.LIVE_BACK_BUFFER_REACHED = "hlsLiveBackBufferReached", e.BACK_BUFFER_REACHED = "hlsBackBufferReached"
									}(n || (n = {}))
							},
						"./src/hls.ts":
							/*!********************!*\
							  !*** ./src/hls.ts ***!
							  \********************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return y
								}));
								var n = r( /*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js"),
									i = r( /*! ./loader/playlist-loader */ "./src/loader/playlist-loader.ts"),
									a = r( /*! ./loader/key-loader */ "./src/loader/key-loader.ts"),
									s = r( /*! ./controller/id3-track-controller */ "./src/controller/id3-track-controller.ts"),
									o = r( /*! ./controller/latency-controller */ "./src/controller/latency-controller.ts"),
									l = r( /*! ./controller/level-controller */ "./src/controller/level-controller.ts"),
									u = r( /*! ./controller/fragment-tracker */ "./src/controller/fragment-tracker.ts"),
									c = r( /*! ./controller/stream-controller */ "./src/controller/stream-controller.ts"),
									d = r( /*! ./is-supported */ "./src/is-supported.ts"),
									f = r( /*! ./utils/logger */ "./src/utils/logger.ts"),
									h = r( /*! ./config */ "./src/config.ts"),
									p = r( /*! eventemitter3 */ "./node_modules/eventemitter3/index.js"),
									g = r( /*! ./events */ "./src/events.ts"),
									v = r( /*! ./errors */ "./src/errors.ts");

								function m(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var y = function() {
									function e(t) {
										void 0 === t && (t = {}), this.config = void 0, this.userConfig = void 0, this.coreComponents = void 0, this.networkControllers = void 0, this._emitter = new p.EventEmitter, this._autoLevelCapping = void 0, this.abrController = void 0, this.bufferController = void 0, this.capLevelController = void 0, this.latencyController = void 0, this.levelController = void 0, this.streamController = void 0, this.audioTrackController = void 0, this.subtitleTrackController = void 0, this.emeController = void 0, this.cmcdController = void 0, this._media = null, this.url = null;
										var r = this.config = Object(h.mergeConfig)(e.DefaultConfig, t);
										this.userConfig = t, Object(f.enableLogs)(r.debug), this._autoLevelCapping = -1, r.progressive && Object(h.enableStreamingMode)(r);
										var n = r.abrController,
											d = r.bufferController,
											g = r.capLevelController,
											v = r.fpsController,
											m = this.abrController = new n(this),
											y = this.bufferController = new d(this),
											E = this.capLevelController = new g(this),
											b = new v(this),
											T = new i.default(this),
											S = new a.default(this),
											k = new s.default(this),
											w = this.levelController = new l.default(this),
											L = new u.FragmentTracker(this),
											A = this.streamController = new c.default(this, L);
										E.setStreamController(A), b.setStreamController(A);
										var D = [w, A];
										this.networkControllers = D;
										var C = [T, S, m, y, E, b, k, L];
										this.audioTrackController = this.createController(r.audioTrackController, null, D), this.createController(r.audioStreamController, L, D), this.subtitleTrackController = this.createController(r.subtitleTrackController, null, D), this.createController(r.subtitleStreamController, L, D), this.createController(r.timelineController, null, C), this.emeController = this.createController(r.emeController, null, C), this.cmcdController = this.createController(r.cmcdController, null, C), this.latencyController = this.createController(o.default, null, C), this.coreComponents = C
									}
									e.isSupported = function() {
										return Object(d.isSupported)()
									};
									var t, r, y, E = e.prototype;
									return E.createController = function(e, t, r) {
										if (e) {
											var n = t ? new e(this, t) : new e(this);
											return r && r.push(n), n
										}
										return null
									}, E.on = function(e, t, r) {
										void 0 === r && (r = this), this._emitter.on(e, t, r)
									}, E.once = function(e, t, r) {
										void 0 === r && (r = this), this._emitter.once(e, t, r)
									}, E.removeAllListeners = function(e) {
										this._emitter.removeAllListeners(e)
									}, E.off = function(e, t, r, n) {
										void 0 === r && (r = this), this._emitter.off(e, t, r, n)
									}, E.listeners = function(e) {
										return this._emitter.listeners(e)
									}, E.emit = function(e, t, r) {
										return this._emitter.emit(e, t, r)
									}, E.trigger = function(e, t) {
										if (this.config.debug) return this.emit(e, e, t);
										try {
											return this.emit(e, e, t)
										} catch (t) {
											f.logger.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t), this.trigger(g.Events.ERROR, {
												type: v.ErrorTypes.OTHER_ERROR,
												details: v.ErrorDetails.INTERNAL_EXCEPTION,
												fatal: !1,
												event: e,
												error: t
											})
										}
										return !1
									}, E.listenerCount = function(e) {
										return this._emitter.listenerCount(e)
									}, E.destroy = function() {
										f.logger.log("destroy"), this.trigger(g.Events.DESTROYING, void 0), this.detachMedia(), this.removeAllListeners(), this._autoLevelCapping = -1, this.url = null, this.networkControllers.forEach((function(e) {
											return e.destroy()
										})), this.networkControllers.length = 0, this.coreComponents.forEach((function(e) {
											return e.destroy()
										})), this.coreComponents.length = 0
									}, E.attachMedia = function(e) {
										f.logger.log("attachMedia"), this._media = e, this.trigger(g.Events.MEDIA_ATTACHING, {
											media: e
										})
									}, E.detachMedia = function() {
										f.logger.log("detachMedia"), this.trigger(g.Events.MEDIA_DETACHING, void 0), this._media = null
									}, E.loadSource = function(e) {
										this.stopLoad();
										var t = this.media,
											r = this.url,
											i = this.url = n.buildAbsoluteURL(self.location.href, e, {
												alwaysNormalize: !0
											});
										f.logger.log("loadSource:" + i), t && r && r !== i && this.bufferController.hasSourceTypes() && (this.detachMedia(), this.attachMedia(t)), this.trigger(g.Events.MANIFEST_LOADING, {
											url: e
										})
									}, E.startLoad = function(e) {
										void 0 === e && (e = -1), f.logger.log("startLoad(" + e + ")"), this.networkControllers.forEach((function(t) {
											t.startLoad(e)
										}))
									}, E.stopLoad = function() {
										f.logger.log("stopLoad"), this.networkControllers.forEach((function(e) {
											e.stopLoad()
										}))
									}, E.swapAudioCodec = function() {
										f.logger.log("swapAudioCodec"), this.streamController.swapAudioCodec()
									}, E.recoverMediaError = function() {
										f.logger.log("recoverMediaError");
										var e = this._media;
										this.detachMedia(), e && this.attachMedia(e)
									}, E.removeLevel = function(e, t) {
										void 0 === t && (t = 0), this.levelController.removeLevel(e, t)
									}, t = e, y = [{
										key: "version",
										get: function() {
											return "1.1.5"
										}
									}, {
										key: "Events",
										get: function() {
											return g.Events
										}
									}, {
										key: "ErrorTypes",
										get: function() {
											return v.ErrorTypes
										}
									}, {
										key: "ErrorDetails",
										get: function() {
											return v.ErrorDetails
										}
									}, {
										key: "DefaultConfig",
										get: function() {
											return e.defaultConfig ? e.defaultConfig : h.hlsDefaultConfig
										},
										set: function(t) {
											e.defaultConfig = t
										}
									}], (r = [{
										key: "levels",
										get: function() {
											var e = this.levelController.levels;
											return e || []
										}
									}, {
										key: "currentLevel",
										get: function() {
											return this.streamController.currentLevel
										},
										set: function(e) {
											f.logger.log("set currentLevel:" + e), this.loadLevel = e, this.abrController.clearTimer(), this.streamController.immediateLevelSwitch()
										}
									}, {
										key: "nextLevel",
										get: function() {
											return this.streamController.nextLevel
										},
										set: function(e) {
											f.logger.log("set nextLevel:" + e), this.levelController.manualLevel = e, this.streamController.nextLevelSwitch()
										}
									}, {
										key: "loadLevel",
										get: function() {
											return this.levelController.level
										},
										set: function(e) {
											f.logger.log("set loadLevel:" + e), this.levelController.manualLevel = e
										}
									}, {
										key: "nextLoadLevel",
										get: function() {
											return this.levelController.nextLoadLevel
										},
										set: function(e) {
											this.levelController.nextLoadLevel = e
										}
									}, {
										key: "firstLevel",
										get: function() {
											return Math.max(this.levelController.firstLevel, this.minAutoLevel)
										},
										set: function(e) {
											f.logger.log("set firstLevel:" + e), this.levelController.firstLevel = e
										}
									}, {
										key: "startLevel",
										get: function() {
											return this.levelController.startLevel
										},
										set: function(e) {
											f.logger.log("set startLevel:" + e), -1 !== e && (e = Math.max(e, this.minAutoLevel)), this.levelController.startLevel = e
										}
									}, {
										key: "capLevelToPlayerSize",
										get: function() {
											return this.config.capLevelToPlayerSize
										},
										set: function(e) {
											var t = !!e;
											t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(), this.autoLevelCapping = -1, this.streamController.nextLevelSwitch()), this.config.capLevelToPlayerSize = t)
										}
									}, {
										key: "autoLevelCapping",
										get: function() {
											return this._autoLevelCapping
										},
										set: function(e) {
											this._autoLevelCapping !== e && (f.logger.log("set autoLevelCapping:" + e), this._autoLevelCapping = e)
										}
									}, {
										key: "bandwidthEstimate",
										get: function() {
											var e = this.abrController.bwEstimator;
											return e ? e.getEstimate() : NaN
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
											var e = this.levels,
												t = this.config.minAutoBitrate;
											if (!e) return 0;
											for (var r = e.length, n = 0; n < r; n++)
												if (e[n].maxBitrate > t) return n;
											return 0
										}
									}, {
										key: "maxAutoLevel",
										get: function() {
											var e = this.levels,
												t = this.autoLevelCapping;
											return -1 === t && e && e.length ? e.length - 1 : t
										}
									}, {
										key: "nextAutoLevel",
										get: function() {
											return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
										},
										set: function(e) {
											this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
										}
									}, {
										key: "audioTracks",
										get: function() {
											var e = this.audioTrackController;
											return e ? e.audioTracks : []
										}
									}, {
										key: "audioTrack",
										get: function() {
											var e = this.audioTrackController;
											return e ? e.audioTrack : -1
										},
										set: function(e) {
											var t = this.audioTrackController;
											t && (t.audioTrack = e)
										}
									}, {
										key: "subtitleTracks",
										get: function() {
											var e = this.subtitleTrackController;
											return e ? e.subtitleTracks : []
										}
									}, {
										key: "subtitleTrack",
										get: function() {
											var e = this.subtitleTrackController;
											return e ? e.subtitleTrack : -1
										},
										set: function(e) {
											var t = this.subtitleTrackController;
											t && (t.subtitleTrack = e)
										}
									}, {
										key: "media",
										get: function() {
											return this._media
										}
									}, {
										key: "subtitleDisplay",
										get: function() {
											var e = this.subtitleTrackController;
											return !!e && e.subtitleDisplay
										},
										set: function(e) {
											var t = this.subtitleTrackController;
											t && (t.subtitleDisplay = e)
										}
									}, {
										key: "lowLatencyMode",
										get: function() {
											return this.config.lowLatencyMode
										},
										set: function(e) {
											this.config.lowLatencyMode = e
										}
									}, {
										key: "liveSyncPosition",
										get: function() {
											return this.latencyController.liveSyncPosition
										}
									}, {
										key: "latency",
										get: function() {
											return this.latencyController.latency
										}
									}, {
										key: "maxLatency",
										get: function() {
											return this.latencyController.maxLatency
										}
									}, {
										key: "targetLatency",
										get: function() {
											return this.latencyController.targetLatency
										}
									}, {
										key: "drift",
										get: function() {
											return this.latencyController.drift
										}
									}, {
										key: "forceStartLoad",
										get: function() {
											return this.streamController.forceStartLoad
										}
									}]) && m(t.prototype, r), y && m(t, y), e
								}();
								y.defaultConfig = void 0
							},
						"./src/is-supported.ts":
							/*!*****************************!*\
							  !*** ./src/is-supported.ts ***!
							  \*****************************/
							/*! exports provided: isSupported, changeTypeSupported */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "isSupported", (function() {
									return a
								})), r.d(t, "changeTypeSupported", (function() {
									return s
								}));
								var n = r( /*! ./utils/mediasource-helper */ "./src/utils/mediasource-helper.ts");

								function i() {
									return self.SourceBuffer || self.WebKitSourceBuffer
								}

								function a() {
									var e = Object(n.getMediaSource)();
									if (!e) return !1;
									var t = i(),
										r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'),
										a = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
									return !!r && !!a
								}

								function s() {
									var e, t = i();
									return "function" == typeof(null == t || null === (e = t.prototype) || void 0 === e ? void 0 : e.changeType)
								}
							},
						"./src/loader/fragment-loader.ts":
							/*!***************************************!*\
							  !*** ./src/loader/fragment-loader.ts ***!
							  \***************************************/
							/*! exports provided: default, LoadError */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return d
								})), r.d(t, "LoadError", (function() {
									return h
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../errors */ "./src/errors.ts");

								function a(e) {
									var t = "function" == typeof Map ? new Map : void 0;
									return a = function(e) {
										if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
										var r;
										if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
										if (void 0 !== t) {
											if (t.has(e)) return t.get(e);
											t.set(e, n)
										}

										function n() {
											return s(e, arguments, u(this).constructor)
										}
										return n.prototype = Object.create(e.prototype, {
											constructor: {
												value: n,
												enumerable: !1,
												writable: !0,
												configurable: !0
											}
										}), l(n, e)
									}, a(e)
								}

								function s(e, t, r) {
									return s = o() ? Reflect.construct : function(e, t, r) {
										var n = [null];
										n.push.apply(n, t);
										var i = new(Function.bind.apply(e, n));
										return r && l(i, r.prototype), i
									}, s.apply(null, arguments)
								}

								function o() {
									if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
									if (Reflect.construct.sham) return !1;
									if ("function" == typeof Proxy) return !0;
									try {
										return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
									} catch (e) {
										return !1
									}
								}

								function l(e, t) {
									return l = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, l(e, t)
								}

								function u(e) {
									return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
										return e.__proto__ || Object.getPrototypeOf(e)
									}, u(e)
								}
								var c = Math.pow(2, 17),
									d = function() {
										function e(e) {
											this.config = void 0, this.loader = null, this.partLoadTimeout = -1, this.config = e
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.loader && (this.loader.destroy(), this.loader = null)
										}, t.abort = function() {
											this.loader && this.loader.abort()
										}, t.load = function(e, t) {
											var r = this,
												n = e.url;
											if (!n) return Promise.reject(new h({
												type: i.ErrorTypes.NETWORK_ERROR,
												details: i.ErrorDetails.FRAG_LOAD_ERROR,
												fatal: !1,
												frag: e,
												networkDetails: null
											}, "Fragment does not have a " + (n ? "part list" : "url")));
											this.abort();
											var a = this.config,
												s = a.fLoader,
												o = a.loader;
											return new Promise((function(n, l) {
												r.loader && r.loader.destroy();
												var u = r.loader = e.loader = s ? new s(a) : new o(a),
													d = f(e),
													p = {
														timeout: a.fragLoadingTimeOut,
														maxRetry: 0,
														retryDelay: 0,
														maxRetryDelay: a.fragLoadingMaxRetryTimeout,
														highWaterMark: c
													};
												e.stats = u.stats, u.load(d, p, {
													onSuccess: function(t, i, a, s) {
														r.resetLoader(e, u), n({
															frag: e,
															part: null,
															payload: t.data,
															networkDetails: s
														})
													},
													onError: function(t, n, a) {
														r.resetLoader(e, u), l(new h({
															type: i.ErrorTypes.NETWORK_ERROR,
															details: i.ErrorDetails.FRAG_LOAD_ERROR,
															fatal: !1,
															frag: e,
															response: t,
															networkDetails: a
														}))
													},
													onAbort: function(t, n, a) {
														r.resetLoader(e, u), l(new h({
															type: i.ErrorTypes.NETWORK_ERROR,
															details: i.ErrorDetails.INTERNAL_ABORTED,
															fatal: !1,
															frag: e,
															networkDetails: a
														}))
													},
													onTimeout: function(t, n, a) {
														r.resetLoader(e, u), l(new h({
															type: i.ErrorTypes.NETWORK_ERROR,
															details: i.ErrorDetails.FRAG_LOAD_TIMEOUT,
															fatal: !1,
															frag: e,
															networkDetails: a
														}))
													},
													onProgress: function(r, n, i, a) {
														t && t({
															frag: e,
															part: null,
															payload: i,
															networkDetails: a
														})
													}
												})
											}))
										}, t.loadPart = function(e, t, r) {
											var n = this;
											this.abort();
											var a = this.config,
												s = a.fLoader,
												o = a.loader;
											return new Promise((function(l, u) {
												n.loader && n.loader.destroy();
												var d = n.loader = e.loader = s ? new s(a) : new o(a),
													p = f(e, t),
													g = {
														timeout: a.fragLoadingTimeOut,
														maxRetry: 0,
														retryDelay: 0,
														maxRetryDelay: a.fragLoadingMaxRetryTimeout,
														highWaterMark: c
													};
												t.stats = d.stats, d.load(p, g, {
													onSuccess: function(i, a, s, o) {
														n.resetLoader(e, d), n.updateStatsFromPart(e, t);
														var u = {
															frag: e,
															part: t,
															payload: i.data,
															networkDetails: o
														};
														r(u), l(u)
													},
													onError: function(r, a, s) {
														n.resetLoader(e, d), u(new h({
															type: i.ErrorTypes.NETWORK_ERROR,
															details: i.ErrorDetails.FRAG_LOAD_ERROR,
															fatal: !1,
															frag: e,
															part: t,
															response: r,
															networkDetails: s
														}))
													},
													onAbort: function(r, a, s) {
														e.stats.aborted = t.stats.aborted, n.resetLoader(e, d), u(new h({
															type: i.ErrorTypes.NETWORK_ERROR,
															details: i.ErrorDetails.INTERNAL_ABORTED,
															fatal: !1,
															frag: e,
															part: t,
															networkDetails: s
														}))
													},
													onTimeout: function(r, a, s) {
														n.resetLoader(e, d), u(new h({
															type: i.ErrorTypes.NETWORK_ERROR,
															details: i.ErrorDetails.FRAG_LOAD_TIMEOUT,
															fatal: !1,
															frag: e,
															part: t,
															networkDetails: s
														}))
													}
												})
											}))
										}, t.updateStatsFromPart = function(e, t) {
											var r = e.stats,
												n = t.stats,
												i = n.total;
											if (r.loaded += n.loaded, i) {
												var a = Math.round(e.duration / t.duration),
													s = Math.min(Math.round(r.loaded / i), a),
													o = (a - s) * Math.round(r.loaded / s);
												r.total = r.loaded + o
											} else r.total = Math.max(r.loaded, r.total);
											var l = r.loading,
												u = n.loading;
											l.start ? l.first += u.first - u.start : (l.start = u.start, l.first = u.first), l.end = u.end
										}, t.resetLoader = function(e, t) {
											e.loader = null, this.loader === t && (self.clearTimeout(this.partLoadTimeout), this.loader = null), t.destroy()
										}, e
									}();

								function f(e, t) {
									void 0 === t && (t = null);
									var r = t || e,
										i = {
											frag: e,
											part: t,
											responseType: "arraybuffer",
											url: r.url,
											headers: {},
											rangeStart: 0,
											rangeEnd: 0
										},
										a = r.byteRangeStartOffset,
										s = r.byteRangeEndOffset;
									return Object(n.isFiniteNumber)(a) && Object(n.isFiniteNumber)(s) && (i.rangeStart = a, i.rangeEnd = s), i
								}
								var h = function(e) {
									var t, r;

									function n(t) {
										for (var r, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) i[a - 1] = arguments[a];
										return (r = e.call.apply(e, [this].concat(i)) || this).data = void 0, r.data = t, r
									}
									return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, l(t, r), n
								}(a(Error))
							},
						"./src/loader/fragment.ts":
							/*!********************************!*\
							  !*** ./src/loader/fragment.ts ***!
							  \********************************/
							/*! exports provided: ElementaryStreamTypes, BaseSegment, Fragment, Part */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "ElementaryStreamTypes", (function() {
									return n
								})), r.d(t, "BaseSegment", (function() {
									return h
								})), r.d(t, "Fragment", (function() {
									return p
								})), r.d(t, "Part", (function() {
									return g
								}));
								var n, i = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									a = r( /*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = r( /*! ./level-key */ "./src/loader/level-key.ts"),
									l = r( /*! ./load-stats */ "./src/loader/load-stats.ts");

								function u(e, t) {
									e.prototype = Object.create(t.prototype), e.prototype.constructor = e, c(e, t)
								}

								function c(e, t) {
									return c = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, c(e, t)
								}

								function d(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}

								function f(e, t, r) {
									return t && d(e.prototype, t), r && d(e, r), e
								}! function(e) {
									e.AUDIO = "audio", e.VIDEO = "video", e.AUDIOVIDEO = "audiovideo"
								}(n || (n = {}));
								var h = function() {
										function e(e) {
											var t;
											this._byteRange = null, this._url = null, this.baseurl = void 0, this.relurl = void 0, this.elementaryStreams = ((t = {})[n.AUDIO] = null, t[n.VIDEO] = null, t[n.AUDIOVIDEO] = null, t), this.baseurl = e
										}
										return e.prototype.setByteRange = function(e, t) {
											var r = e.split("@", 2),
												n = [];
											1 === r.length ? n[0] = t ? t.byteRangeEndOffset : 0 : n[0] = parseInt(r[1]), n[1] = parseInt(r[0]) + n[0], this._byteRange = n
										}, f(e, [{
											key: "byteRange",
											get: function() {
												return this._byteRange ? this._byteRange : []
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
											key: "url",
											get: function() {
												return !this._url && this.baseurl && this.relurl && (this._url = Object(a.buildAbsoluteURL)(this.baseurl, this.relurl, {
													alwaysNormalize: !0
												})), this._url || ""
											},
											set: function(e) {
												this._url = e
											}
										}]), e
									}(),
									p = function(e) {
										function t(t, r) {
											var n;
											return (n = e.call(this, r) || this)._decryptdata = null, n.rawProgramDateTime = null, n.programDateTime = null, n.tagList = [], n.duration = 0, n.sn = 0, n.levelkey = void 0, n.type = void 0, n.loader = null, n.level = -1, n.cc = 0, n.startPTS = void 0, n.endPTS = void 0, n.appendedPTS = void 0, n.startDTS = void 0, n.endDTS = void 0, n.start = 0, n.deltaPTS = void 0, n.maxStartPTS = void 0, n.minEndPTS = void 0, n.stats = new l.LoadStats, n.urlId = 0, n.data = void 0, n.bitrateTest = !1, n.title = null, n.initSegment = null, n.type = t, n
										}
										u(t, e);
										var r = t.prototype;
										return r.createInitializationVector = function(e) {
											for (var t = new Uint8Array(16), r = 12; r < 16; r++) t[r] = e >> 8 * (15 - r) & 255;
											return t
										}, r.setDecryptDataFromLevelKey = function(e, t) {
											var r = e;
											return "AES-128" === (null == e ? void 0 : e.method) && e.uri && !e.iv && ((r = o.LevelKey.fromURI(e.uri)).method = e.method, r.iv = this.createInitializationVector(t), r.keyFormat = "identity"), r
										}, r.setElementaryStreamInfo = function(e, t, r, n, i, a) {
											void 0 === a && (a = !1);
											var s = this.elementaryStreams,
												o = s[e];
											o ? (o.startPTS = Math.min(o.startPTS, t), o.endPTS = Math.max(o.endPTS, r), o.startDTS = Math.min(o.startDTS, n), o.endDTS = Math.max(o.endDTS, i)) : s[e] = {
												startPTS: t,
												endPTS: r,
												startDTS: n,
												endDTS: i,
												partial: a
											}
										}, r.clearElementaryStreamInfo = function() {
											var e = this.elementaryStreams;
											e[n.AUDIO] = null, e[n.VIDEO] = null, e[n.AUDIOVIDEO] = null
										}, f(t, [{
											key: "decryptdata",
											get: function() {
												if (!this.levelkey && !this._decryptdata) return null;
												if (!this._decryptdata && this.levelkey) {
													var e = this.sn;
													"number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && s.logger.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'), e = 0), this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
												}
												return this._decryptdata
											}
										}, {
											key: "end",
											get: function() {
												return this.start + this.duration
											}
										}, {
											key: "endProgramDateTime",
											get: function() {
												if (null === this.programDateTime) return null;
												if (!Object(i.isFiniteNumber)(this.programDateTime)) return null;
												var e = Object(i.isFiniteNumber)(this.duration) ? this.duration : 0;
												return this.programDateTime + 1e3 * e
											}
										}, {
											key: "encrypted",
											get: function() {
												var e;
												return !(null === (e = this.decryptdata) || void 0 === e || !e.keyFormat || !this.decryptdata.uri)
											}
										}]), t
									}(h),
									g = function(e) {
										function t(t, r, n, i, a) {
											var s;
											(s = e.call(this, n) || this).fragOffset = 0, s.duration = 0, s.gap = !1, s.independent = !1, s.relurl = void 0, s.fragment = void 0, s.index = void 0, s.stats = new l.LoadStats, s.duration = t.decimalFloatingPoint("DURATION"), s.gap = t.bool("GAP"), s.independent = t.bool("INDEPENDENT"), s.relurl = t.enumeratedString("URI"), s.fragment = r, s.index = i;
											var o = t.enumeratedString("BYTERANGE");
											return o && s.setByteRange(o, a), a && (s.fragOffset = a.fragOffset + a.duration), s
										}
										return u(t, e), f(t, [{
											key: "start",
											get: function() {
												return this.fragment.start + this.fragOffset
											}
										}, {
											key: "end",
											get: function() {
												return this.start + this.duration
											}
										}, {
											key: "loaded",
											get: function() {
												var e = this.elementaryStreams;
												return !!(e.audio || e.video || e.audiovideo)
											}
										}]), t
									}(h)
							},
						"./src/loader/key-loader.ts":
							/*!**********************************!*\
							  !*** ./src/loader/key-loader.ts ***!
							  \**********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return s
								}));
								var n = r( /*! ../events */ "./src/events.ts"),
									i = r( /*! ../errors */ "./src/errors.ts"),
									a = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									s = function() {
										function e(e) {
											this.hls = void 0, this.loaders = {}, this.decryptkey = null, this.decrypturl = null, this.hls = e, this._registerListeners()
										}
										var t = e.prototype;
										return t._registerListeners = function() {
											this.hls.on(n.Events.KEY_LOADING, this.onKeyLoading, this)
										}, t._unregisterListeners = function() {
											this.hls.off(n.Events.KEY_LOADING, this.onKeyLoading)
										}, t.destroy = function() {
											for (var e in this._unregisterListeners(), this.loaders) {
												var t = this.loaders[e];
												t && t.destroy()
											}
											this.loaders = {}
										}, t.onKeyLoading = function(e, t) {
											var r = t.frag,
												i = r.type,
												s = this.loaders[i];
											if (r.decryptdata) {
												var o = r.decryptdata.uri;
												if (o !== this.decrypturl || null === this.decryptkey) {
													var l = this.hls.config;
													if (s && (a.logger.warn("abort previous key loader for type:" + i), s.abort()), !o) return void a.logger.warn("key uri is falsy");
													var u = l.loader,
														c = r.loader = this.loaders[i] = new u(l);
													this.decrypturl = o, this.decryptkey = null;
													var d = {
															url: o,
															frag: r,
															responseType: "arraybuffer"
														},
														f = {
															timeout: l.fragLoadingTimeOut,
															maxRetry: 0,
															retryDelay: l.fragLoadingRetryDelay,
															maxRetryDelay: l.fragLoadingMaxRetryTimeout,
															highWaterMark: 0
														},
														h = {
															onSuccess: this.loadsuccess.bind(this),
															onError: this.loaderror.bind(this),
															onTimeout: this.loadtimeout.bind(this)
														};
													c.load(d, f, h)
												} else this.decryptkey && (r.decryptdata.key = this.decryptkey, this.hls.trigger(n.Events.KEY_LOADED, {
													frag: r
												}))
											} else a.logger.warn("Missing decryption data on fragment in onKeyLoading")
										}, t.loadsuccess = function(e, t, r) {
											var i = r.frag;
											i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data), i.loader = null, delete this.loaders[i.type], this.hls.trigger(n.Events.KEY_LOADED, {
												frag: i
											})) : a.logger.error("after key load, decryptdata unset")
										}, t.loaderror = function(e, t) {
											var r = t.frag,
												a = r.loader;
											a && a.abort(), delete this.loaders[r.type], this.hls.trigger(n.Events.ERROR, {
												type: i.ErrorTypes.NETWORK_ERROR,
												details: i.ErrorDetails.KEY_LOAD_ERROR,
												fatal: !1,
												frag: r,
												response: e
											})
										}, t.loadtimeout = function(e, t) {
											var r = t.frag,
												a = r.loader;
											a && a.abort(), delete this.loaders[r.type], this.hls.trigger(n.Events.ERROR, {
												type: i.ErrorTypes.NETWORK_ERROR,
												details: i.ErrorDetails.KEY_LOAD_TIMEOUT,
												fatal: !1,
												frag: r
											})
										}, e
									}()
							},
						"./src/loader/level-details.ts":
							/*!*************************************!*\
							  !*** ./src/loader/level-details.ts ***!
							  \*************************************/
							/*! exports provided: LevelDetails */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "LevelDetails", (function() {
									return a
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts");

								function i(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var a = function() {
									function e(e) {
										this.PTSKnown = !1, this.alignedSliding = !1, this.averagetargetduration = void 0, this.endCC = 0, this.endSN = 0, this.fragments = void 0, this.fragmentHint = void 0, this.partList = null, this.live = !0, this.ageHeader = 0, this.advancedDateTime = void 0, this.updated = !0, this.advanced = !0, this.availabilityDelay = void 0, this.misses = 0, this.needSidxRanges = !1, this.startCC = 0, this.startSN = 0, this.startTimeOffset = null, this.targetduration = 0, this.totalduration = 0, this.type = null, this.url = void 0, this.m3u8 = "", this.version = null, this.canBlockReload = !1, this.canSkipUntil = 0, this.canSkipDateRanges = !1, this.skippedSegments = 0, this.recentlyRemovedDateranges = void 0, this.partHoldBack = 0, this.holdBack = 0, this.partTarget = 0, this.preloadHint = void 0, this.renditionReports = void 0, this.tuneInGoal = 0, this.deltaUpdateFailed = void 0, this.driftStartTime = 0, this.driftEndTime = 0, this.driftStart = 0, this.driftEnd = 0, this.fragments = [], this.url = e
									}
									var t, r, a;
									return e.prototype.reloaded = function(e) {
										if (!e) return this.advanced = !0, void(this.updated = !0);
										var t = this.lastPartSn - e.lastPartSn,
											r = this.lastPartIndex - e.lastPartIndex;
										this.updated = this.endSN !== e.endSN || !!r || !!t, this.advanced = this.endSN > e.endSN || t > 0 || 0 === t && r > 0, this.updated || this.advanced ? this.misses = Math.floor(.6 * e.misses) : this.misses = e.misses + 1, this.availabilityDelay = e.availabilityDelay
									}, t = e, (r = [{
										key: "hasProgramDateTime",
										get: function() {
											return !!this.fragments.length && Object(n.isFiniteNumber)(this.fragments[this.fragments.length - 1].programDateTime)
										}
									}, {
										key: "levelTargetDuration",
										get: function() {
											return this.averagetargetduration || this.targetduration || 10
										}
									}, {
										key: "drift",
										get: function() {
											var e = this.driftEndTime - this.driftStartTime;
											return e > 0 ? 1e3 * (this.driftEnd - this.driftStart) / e : 1
										}
									}, {
										key: "edge",
										get: function() {
											return this.partEnd || this.fragmentEnd
										}
									}, {
										key: "partEnd",
										get: function() {
											var e;
											return null !== (e = this.partList) && void 0 !== e && e.length ? this.partList[this.partList.length - 1].end : this.fragmentEnd
										}
									}, {
										key: "fragmentEnd",
										get: function() {
											var e;
											return null !== (e = this.fragments) && void 0 !== e && e.length ? this.fragments[this.fragments.length - 1].end : 0
										}
									}, {
										key: "age",
										get: function() {
											return this.advancedDateTime ? Math.max(Date.now() - this.advancedDateTime, 0) / 1e3 : 0
										}
									}, {
										key: "lastPartIndex",
										get: function() {
											var e;
											return null !== (e = this.partList) && void 0 !== e && e.length ? this.partList[this.partList.length - 1].index : -1
										}
									}, {
										key: "lastPartSn",
										get: function() {
											var e;
											return null !== (e = this.partList) && void 0 !== e && e.length ? this.partList[this.partList.length - 1].fragment.sn : this.endSN
										}
									}]) && i(t.prototype, r), a && i(t, a), e
								}()
							},
						"./src/loader/level-key.ts":
							/*!*********************************!*\
							  !*** ./src/loader/level-key.ts ***!
							  \*********************************/
							/*! exports provided: LevelKey */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "LevelKey", (function() {
									return a
								}));
								var n = r( /*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js");

								function i(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var a = function() {
									function e(e, t) {
										this._uri = null, this.method = null, this.keyFormat = null, this.keyFormatVersions = null, this.keyID = null, this.key = null, this.iv = null, this._uri = t ? Object(n.buildAbsoluteURL)(e, t, {
											alwaysNormalize: !0
										}) : e
									}
									var t, r, a;
									return e.fromURL = function(t, r) {
										return new e(t, r)
									}, e.fromURI = function(t) {
										return new e(t)
									}, t = e, (r = [{
										key: "uri",
										get: function() {
											return this._uri
										}
									}]) && i(t.prototype, r), a && i(t, a), e
								}()
							},
						"./src/loader/load-stats.ts":
							/*!**********************************!*\
							  !*** ./src/loader/load-stats.ts ***!
							  \**********************************/
							/*! exports provided: LoadStats */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "LoadStats", (function() {
									return n
								}));
								var n = function() {
									this.aborted = !1, this.loaded = 0, this.retry = 0, this.total = 0, this.chunkCount = 0, this.bwEstimate = 0, this.loading = {
										start: 0,
										first: 0,
										end: 0
									}, this.parsing = {
										start: 0,
										end: 0
									}, this.buffering = {
										start: 0,
										first: 0,
										end: 0
									}
								}
							},
						"./src/loader/m3u8-parser.ts":
							/*!***********************************!*\
							  !*** ./src/loader/m3u8-parser.ts ***!
							  \***********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return v
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! url-toolkit */ "./node_modules/url-toolkit/src/url-toolkit.js"),
									a = r( /*! ./fragment */ "./src/loader/fragment.ts"),
									s = r( /*! ./level-details */ "./src/loader/level-details.ts"),
									o = r( /*! ./level-key */ "./src/loader/level-key.ts"),
									l = r( /*! ../utils/attr-list */ "./src/utils/attr-list.ts"),
									u = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									c = r( /*! ../utils/codecs */ "./src/utils/codecs.ts"),
									d = /#EXT-X-STREAM-INF:([^\r\n]*)(?:[\r\n](?:#[^\r\n]*)?)*([^\r\n]+)|#EXT-X-SESSION-DATA:([^\r\n]*)[\r\n]+/g,
									f = /#EXT-X-MEDIA:(.*)/g,
									h = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /(?!#) *(\S[\S ]*)/.source, /#EXT-X-BYTERANGE:*(.+)/.source, /#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /#.*/.source].join("|"), "g"),
									p = new RegExp([/#(EXTM3U)/.source, /#EXT-X-(PLAYLIST-TYPE):(.+)/.source, /#EXT-X-(MEDIA-SEQUENCE): *(\d+)/.source, /#EXT-X-(SKIP):(.+)/.source, /#EXT-X-(TARGETDURATION): *(\d+)/.source, /#EXT-X-(KEY):(.+)/.source, /#EXT-X-(START):(.+)/.source, /#EXT-X-(ENDLIST)/.source, /#EXT-X-(DISCONTINUITY-SEQ)UENCE: *(\d+)/.source, /#EXT-X-(DIS)CONTINUITY/.source, /#EXT-X-(VERSION):(\d+)/.source, /#EXT-X-(MAP):(.+)/.source, /#EXT-X-(SERVER-CONTROL):(.+)/.source, /#EXT-X-(PART-INF):(.+)/.source, /#EXT-X-(GAP)/.source, /#EXT-X-(BITRATE):\s*(\d+)/.source, /#EXT-X-(PART):(.+)/.source, /#EXT-X-(PRELOAD-HINT):(.+)/.source, /#EXT-X-(RENDITION-REPORT):(.+)/.source, /(#)([^:]*):(.*)/.source, /(#)(.*)(?:.*)\r?\n?/.source].join("|")),
									g = /\.(mp4|m4s|m4v|m4a)$/i,
									v = function() {
										function e() {}
										return e.findGroup = function(e, t) {
											for (var r = 0; r < e.length; r++) {
												var n = e[r];
												if (n.id === t) return n
											}
										}, e.convertAVC1ToAVCOTI = function(e) {
											var t = e.split(".");
											if (t.length > 2) {
												var r = t.shift() + ".";
												return r += parseInt(t.shift()).toString(16), r += ("000" + parseInt(t.shift()).toString(16)).substr(-4)
											}
											return e
										}, e.resolve = function(e, t) {
											return i.buildAbsoluteURL(t, e, {
												alwaysNormalize: !0
											})
										}, e.parseMasterPlaylist = function(t, r) {
											var n, i = [],
												a = {},
												s = !1;
											for (d.lastIndex = 0; null != (n = d.exec(t));)
												if (n[1]) {
													var o = new l.AttrList(n[1]),
														u = {
															attrs: o,
															bitrate: o.decimalInteger("AVERAGE-BANDWIDTH") || o.decimalInteger("BANDWIDTH"),
															name: o.NAME,
															url: e.resolve(n[2], r)
														},
														c = o.decimalResolution("RESOLUTION");
													c && (u.width = c.width, u.height = c.height), m((o.CODECS || "").split(/[ ,]+/).filter((function(e) {
														return e
													})), u), u.videoCodec && -1 !== u.videoCodec.indexOf("avc1") && (u.videoCodec = e.convertAVC1ToAVCOTI(u.videoCodec)), i.push(u)
												} else if (n[3]) {
												var f = new l.AttrList(n[3]);
												f["DATA-ID"] && (s = !0, a[f["DATA-ID"]] = f)
											}
											return {
												levels: i,
												sessionData: s ? a : null
											}
										}, e.parseMasterPlaylistMedia = function(t, r, n, i) {
											var a;
											void 0 === i && (i = []);
											var s = [],
												o = 0;
											for (f.lastIndex = 0; null !== (a = f.exec(t));) {
												var u = new l.AttrList(a[1]);
												if (u.TYPE === n) {
													var c = {
														attrs: u,
														bitrate: 0,
														id: o++,
														groupId: u["GROUP-ID"],
														instreamId: u["INSTREAM-ID"],
														name: u.NAME || u.LANGUAGE || "",
														type: n,
														default: u.bool("DEFAULT"),
														autoselect: u.bool("AUTOSELECT"),
														forced: u.bool("FORCED"),
														lang: u.LANGUAGE,
														url: u.URI ? e.resolve(u.URI, r) : ""
													};
													if (i.length) {
														var d = e.findGroup(i, c.groupId) || i[0];
														y(c, d, "audioCodec"), y(c, d, "textCodec")
													}
													s.push(c)
												}
											}
											return s
										}, e.parseLevelPlaylist = function(e, t, r, c, d) {
											var f, v, m, y = new s.LevelDetails(t),
												b = y.fragments,
												T = null,
												S = 0,
												k = 0,
												w = 0,
												L = 0,
												A = null,
												D = new a.Fragment(c, t),
												C = -1,
												_ = !1;
											for (h.lastIndex = 0, y.m3u8 = e; null !== (f = h.exec(e));) {
												_ && (_ = !1, (D = new a.Fragment(c, t)).start = w, D.sn = S, D.cc = L, D.level = r, T && (D.initSegment = T, D.rawProgramDateTime = T.rawProgramDateTime));
												var R = f[1];
												if (R) {
													D.duration = parseFloat(R);
													var x = (" " + f[2]).slice(1);
													D.title = x || null, D.tagList.push(x ? ["INF", R, x] : ["INF", R])
												} else if (f[3]) Object(n.isFiniteNumber)(D.duration) && (D.start = w, m && (D.levelkey = m), D.sn = S, D.level = r, D.cc = L, D.urlId = d, b.push(D), D.relurl = (" " + f[3]).slice(1), E(D, A), A = D, w += D.duration, S++, k = 0, _ = !0);
												else if (f[4]) {
													var I = (" " + f[4]).slice(1);
													A ? D.setByteRange(I, A) : D.setByteRange(I)
												} else if (f[5]) D.rawProgramDateTime = (" " + f[5]).slice(1), D.tagList.push(["PROGRAM-DATE-TIME", D.rawProgramDateTime]), -1 === C && (C = b.length);
												else {
													if (!(f = f[0].match(p))) {
														u.logger.warn("No matches on slow regex match for level playlist!");
														continue
													}
													for (v = 1; v < f.length && void 0 === f[v]; v++);
													var O = (" " + f[v]).slice(1),
														P = (" " + f[v + 1]).slice(1),
														F = f[v + 2] ? (" " + f[v + 2]).slice(1) : "";
													switch (O) {
														case "PLAYLIST-TYPE":
															y.type = P.toUpperCase();
															break;
														case "MEDIA-SEQUENCE":
															S = y.startSN = parseInt(P);
															break;
														case "SKIP":
															var M = new l.AttrList(P),
																N = M.decimalInteger("SKIPPED-SEGMENTS");
															if (Object(n.isFiniteNumber)(N)) {
																y.skippedSegments = N;
																for (var U = N; U--;) b.unshift(null);
																S += N
															}
															var B = M.enumeratedString("RECENTLY-REMOVED-DATERANGES");
															B && (y.recentlyRemovedDateranges = B.split("\t"));
															break;
														case "TARGETDURATION":
															y.targetduration = parseFloat(P);
															break;
														case "VERSION":
															y.version = parseInt(P);
															break;
														case "EXTM3U":
															break;
														case "ENDLIST":
															y.live = !1;
															break;
														case "#":
															(P || F) && D.tagList.push(F ? [P, F] : [P]);
															break;
														case "DIS":
															L++;
														case "GAP":
															D.tagList.push([O]);
															break;
														case "BITRATE":
															D.tagList.push([O, P]);
															break;
														case "DISCONTINUITY-SEQ":
															L = parseInt(P);
															break;
														case "KEY":
															var j, G = new l.AttrList(P),
																H = G.enumeratedString("METHOD"),
																K = G.URI,
																V = G.hexadecimalInteger("IV"),
																z = G.enumeratedString("KEYFORMATVERSIONS"),
																W = G.enumeratedString("KEYID"),
																q = null != (j = G.enumeratedString("KEYFORMAT")) ? j : "identity";
															if (["com.apple.streamingkeydelivery", "com.microsoft.playready", "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed", "com.widevine"].indexOf(q) > -1) {
																u.logger.warn("Keyformat " + q + " is not supported from the manifest");
																continue
															}
															if ("identity" !== q) continue;
															H && (m = o.LevelKey.fromURL(t, K), K && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(H) >= 0 && (m.method = H, m.keyFormat = q, W && (m.keyID = W), z && (m.keyFormatVersions = z), m.iv = V));
															break;
														case "START":
															var Y = new l.AttrList(P).decimalFloatingPoint("TIME-OFFSET");
															Object(n.isFiniteNumber)(Y) && (y.startTimeOffset = Y);
															break;
														case "MAP":
															var X = new l.AttrList(P);
															D.relurl = X.URI, X.BYTERANGE && D.setByteRange(X.BYTERANGE), D.level = r, D.sn = "initSegment", m && (D.levelkey = m), D.initSegment = null, T = D, _ = !0;
															break;
														case "SERVER-CONTROL":
															var Q = new l.AttrList(P);
															y.canBlockReload = Q.bool("CAN-BLOCK-RELOAD"), y.canSkipUntil = Q.optionalFloat("CAN-SKIP-UNTIL", 0), y.canSkipDateRanges = y.canSkipUntil > 0 && Q.bool("CAN-SKIP-DATERANGES"), y.partHoldBack = Q.optionalFloat("PART-HOLD-BACK", 0), y.holdBack = Q.optionalFloat("HOLD-BACK", 0);
															break;
														case "PART-INF":
															var $ = new l.AttrList(P);
															y.partTarget = $.decimalFloatingPoint("PART-TARGET");
															break;
														case "PART":
															var J = y.partList;
															J || (J = y.partList = []);
															var Z = k > 0 ? J[J.length - 1] : void 0,
																ee = k++,
																te = new a.Part(new l.AttrList(P), D, t, ee, Z);
															J.push(te), D.duration += te.duration;
															break;
														case "PRELOAD-HINT":
															var re = new l.AttrList(P);
															y.preloadHint = re;
															break;
														case "RENDITION-REPORT":
															var ne = new l.AttrList(P);
															y.renditionReports = y.renditionReports || [], y.renditionReports.push(ne);
															break;
														default:
															u.logger.warn("line parsed but not handled: " + f)
													}
												}
											}
											A && !A.relurl ? (b.pop(), w -= A.duration, y.partList && (y.fragmentHint = A)) : y.partList && (E(D, A), D.cc = L, y.fragmentHint = D);
											var ie = b.length,
												ae = b[0],
												se = b[ie - 1];
											if ((w += y.skippedSegments * y.targetduration) > 0 && ie && se) {
												y.averagetargetduration = w / ie;
												var oe = se.sn;
												y.endSN = "initSegment" !== oe ? oe : 0, ae && (y.startCC = ae.cc, ae.initSegment || y.fragments.every((function(e) {
													return e.relurl && (t = e.relurl, g.test(null != (r = null === (n = i.parseURL(t)) || void 0 === n ? void 0 : n.path) ? r : ""));
													var t, r, n
												})) && (u.logger.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"), (D = new a.Fragment(c, t)).relurl = se.relurl, D.level = r, D.sn = "initSegment", ae.initSegment = D, y.needSidxRanges = !0))
											} else y.endSN = 0, y.startCC = 0;
											return y.fragmentHint && (w += y.fragmentHint.duration), y.totalduration = w, y.endCC = L, C > 0 && function(e, t) {
												for (var r = e[t], n = t; n--;) {
													var i = e[n];
													if (!i) return;
													i.programDateTime = r.programDateTime - 1e3 * i.duration, r = i
												}
											}(b, C), y
										}, e
									}();

								function m(e, t) {
									["video", "audio", "text"].forEach((function(r) {
										var n = e.filter((function(e) {
											return Object(c.isCodecType)(e, r)
										}));
										if (n.length) {
											var i = n.filter((function(e) {
												return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
											}));
											t[r + "Codec"] = i.length > 0 ? i[0] : n[0], e = e.filter((function(e) {
												return -1 === n.indexOf(e)
											}))
										}
									})), t.unknownCodecs = e
								}

								function y(e, t, r) {
									var n = t[r];
									n && (e[r] = n)
								}

								function E(e, t) {
									e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : null != t && t.programDateTime && (e.programDateTime = t.endProgramDateTime), Object(n.isFiniteNumber)(e.programDateTime) || (e.programDateTime = null, e.rawProgramDateTime = null)
								}
							},
						"./src/loader/playlist-loader.ts":
							/*!***************************************!*\
							  !*** ./src/loader/playlist-loader.ts ***!
							  \***************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../events */ "./src/events.ts"),
									a = r( /*! ../errors */ "./src/errors.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									l = r( /*! ./m3u8-parser */ "./src/loader/m3u8-parser.ts"),
									u = r( /*! ../types/loader */ "./src/types/loader.ts"),
									c = r( /*! ../utils/attr-list */ "./src/utils/attr-list.ts");

								function d(e, t) {
									var r = e.url;
									return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url), r
								}
								var f = function() {
									function e(e) {
										this.hls = void 0, this.loaders = Object.create(null), this.hls = e, this.registerListeners()
									}
									var t = e.prototype;
									return t.registerListeners = function() {
										var e = this.hls;
										e.on(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.on(i.Events.LEVEL_LOADING, this.onLevelLoading, this), e.on(i.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.on(i.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
									}, t.unregisterListeners = function() {
										var e = this.hls;
										e.off(i.Events.MANIFEST_LOADING, this.onManifestLoading, this), e.off(i.Events.LEVEL_LOADING, this.onLevelLoading, this), e.off(i.Events.AUDIO_TRACK_LOADING, this.onAudioTrackLoading, this), e.off(i.Events.SUBTITLE_TRACK_LOADING, this.onSubtitleTrackLoading, this)
									}, t.createInternalLoader = function(e) {
										var t = this.hls.config,
											r = t.pLoader,
											n = t.loader,
											i = new(r || n)(t);
										return e.loader = i, this.loaders[e.type] = i, i
									}, t.getInternalLoader = function(e) {
										return this.loaders[e.type]
									}, t.resetInternalLoader = function(e) {
										this.loaders[e] && delete this.loaders[e]
									}, t.destroyInternalLoaders = function() {
										for (var e in this.loaders) {
											var t = this.loaders[e];
											t && t.destroy(), this.resetInternalLoader(e)
										}
									}, t.destroy = function() {
										this.unregisterListeners(), this.destroyInternalLoaders()
									}, t.onManifestLoading = function(e, t) {
										var r = t.url;
										this.load({
											id: null,
											groupId: null,
											level: 0,
											responseType: "text",
											type: u.PlaylistContextType.MANIFEST,
											url: r,
											deliveryDirectives: null
										})
									}, t.onLevelLoading = function(e, t) {
										var r = t.id,
											n = t.level,
											i = t.url,
											a = t.deliveryDirectives;
										this.load({
											id: r,
											groupId: null,
											level: n,
											responseType: "text",
											type: u.PlaylistContextType.LEVEL,
											url: i,
											deliveryDirectives: a
										})
									}, t.onAudioTrackLoading = function(e, t) {
										var r = t.id,
											n = t.groupId,
											i = t.url,
											a = t.deliveryDirectives;
										this.load({
											id: r,
											groupId: n,
											level: null,
											responseType: "text",
											type: u.PlaylistContextType.AUDIO_TRACK,
											url: i,
											deliveryDirectives: a
										})
									}, t.onSubtitleTrackLoading = function(e, t) {
										var r = t.id,
											n = t.groupId,
											i = t.url,
											a = t.deliveryDirectives;
										this.load({
											id: r,
											groupId: n,
											level: null,
											responseType: "text",
											type: u.PlaylistContextType.SUBTITLE_TRACK,
											url: i,
											deliveryDirectives: a
										})
									}, t.load = function(e) {
										var t, r, n, i, a, o, l = this.hls.config,
											c = this.getInternalLoader(e);
										if (c) {
											var d = c.context;
											if (d && d.url === e.url) return void s.logger.trace("[playlist-loader]: playlist request ongoing");
											s.logger.log("[playlist-loader]: aborting previous loader for type: " + e.type), c.abort()
										}
										switch (e.type) {
											case u.PlaylistContextType.MANIFEST:
												r = l.manifestLoadingMaxRetry, n = l.manifestLoadingTimeOut, i = l.manifestLoadingRetryDelay, a = l.manifestLoadingMaxRetryTimeout;
												break;
											case u.PlaylistContextType.LEVEL:
											case u.PlaylistContextType.AUDIO_TRACK:
											case u.PlaylistContextType.SUBTITLE_TRACK:
												r = 0, n = l.levelLoadingTimeOut;
												break;
											default:
												r = l.levelLoadingMaxRetry, n = l.levelLoadingTimeOut, i = l.levelLoadingRetryDelay, a = l.levelLoadingMaxRetryTimeout
										}
										if (c = this.createInternalLoader(e), null !== (t = e.deliveryDirectives) && void 0 !== t && t.part && (e.type === u.PlaylistContextType.LEVEL && null !== e.level ? o = this.hls.levels[e.level].details : e.type === u.PlaylistContextType.AUDIO_TRACK && null !== e.id ? o = this.hls.audioTracks[e.id].details : e.type === u.PlaylistContextType.SUBTITLE_TRACK && null !== e.id && (o = this.hls.subtitleTracks[e.id].details), o)) {
											var f = o.partTarget,
												h = o.targetduration;
											f && h && (n = Math.min(1e3 * Math.max(3 * f, .8 * h), n))
										}
										var p = {
												timeout: n,
												maxRetry: r,
												retryDelay: i,
												maxRetryDelay: a,
												highWaterMark: 0
											},
											g = {
												onSuccess: this.loadsuccess.bind(this),
												onError: this.loaderror.bind(this),
												onTimeout: this.loadtimeout.bind(this)
											};
										c.load(e, p, g)
									}, t.loadsuccess = function(e, t, r, n) {
										if (void 0 === n && (n = null), r.isSidxRequest) return this.handleSidxRequest(e, r), void this.handlePlaylistLoaded(e, t, r, n);
										this.resetInternalLoader(r.type);
										var i = e.data;
										0 === i.indexOf("#EXTM3U") ? (t.parsing.start = performance.now(), i.indexOf("#EXTINF:") > 0 || i.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this.handleTrackOrLevelPlaylist(e, t, r, n) : this.handleMasterPlaylist(e, t, r, n)) : this.handleManifestParsingError(e, r, "no EXTM3U delimiter", n)
									}, t.loaderror = function(e, t, r) {
										void 0 === r && (r = null), this.handleNetworkError(t, r, !1, e)
									}, t.loadtimeout = function(e, t, r) {
										void 0 === r && (r = null), this.handleNetworkError(t, r, !0)
									}, t.handleMasterPlaylist = function(e, t, r, n) {
										var a = this.hls,
											o = e.data,
											u = d(e, r),
											f = l.default.parseMasterPlaylist(o, u),
											h = f.levels,
											p = f.sessionData;
										if (h.length) {
											var g = h.map((function(e) {
													return {
														id: e.attrs.AUDIO,
														audioCodec: e.audioCodec
													}
												})),
												v = h.map((function(e) {
													return {
														id: e.attrs.SUBTITLES,
														textCodec: e.textCodec
													}
												})),
												m = l.default.parseMasterPlaylistMedia(o, u, "AUDIO", g),
												y = l.default.parseMasterPlaylistMedia(o, u, "SUBTITLES", v),
												E = l.default.parseMasterPlaylistMedia(o, u, "CLOSED-CAPTIONS");
											m.length && (m.some((function(e) {
												return !e.url
											})) || !h[0].audioCodec || h[0].attrs.AUDIO || (s.logger.log("[playlist-loader]: audio codec signaled in quality level, but no embedded audio track signaled, create one"), m.unshift({
												type: "main",
												name: "main",
												default: !1,
												autoselect: !1,
												forced: !1,
												id: -1,
												attrs: new c.AttrList({}),
												bitrate: 0,
												url: ""
											}))), a.trigger(i.Events.MANIFEST_LOADED, {
												levels: h,
												audioTracks: m,
												subtitles: y,
												captions: E,
												url: u,
												stats: t,
												networkDetails: n,
												sessionData: p
											})
										} else this.handleManifestParsingError(e, r, "no level found in manifest", n)
									}, t.handleTrackOrLevelPlaylist = function(e, t, r, s) {
										var o = this.hls,
											f = r.id,
											h = r.level,
											p = r.type,
											g = d(e, r),
											v = Object(n.isFiniteNumber)(f) ? f : 0,
											m = Object(n.isFiniteNumber)(h) ? h : v,
											y = function(e) {
												switch (e.type) {
													case u.PlaylistContextType.AUDIO_TRACK:
														return u.PlaylistLevelType.AUDIO;
													case u.PlaylistContextType.SUBTITLE_TRACK:
														return u.PlaylistLevelType.SUBTITLE;
													default:
														return u.PlaylistLevelType.MAIN
												}
											}(r),
											E = l.default.parseLevelPlaylist(e.data, g, m, y, v);
										if (E.fragments.length) {
											if (p === u.PlaylistContextType.MANIFEST) {
												var b = {
													attrs: new c.AttrList({}),
													bitrate: 0,
													details: E,
													name: "",
													url: g
												};
												o.trigger(i.Events.MANIFEST_LOADED, {
													levels: [b],
													audioTracks: [],
													url: g,
													stats: t,
													networkDetails: s,
													sessionData: null
												})
											}
											if (t.parsing.end = performance.now(), E.needSidxRanges) {
												var T, S = null === (T = E.fragments[0].initSegment) || void 0 === T ? void 0 : T.url;
												this.load({
													url: S,
													isSidxRequest: !0,
													type: p,
													level: h,
													levelDetails: E,
													id: f,
													groupId: null,
													rangeStart: 0,
													rangeEnd: 2048,
													responseType: "arraybuffer",
													deliveryDirectives: null
												})
											} else r.levelDetails = E, this.handlePlaylistLoaded(e, t, r, s)
										} else o.trigger(i.Events.ERROR, {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: a.ErrorDetails.LEVEL_EMPTY_ERROR,
											fatal: !1,
											url: g,
											reason: "no fragments found in level",
											level: "number" == typeof r.level ? r.level : void 0
										})
									}, t.handleSidxRequest = function(e, t) {
										var r = Object(o.parseSegmentIndex)(new Uint8Array(e.data));
										if (r) {
											var n = r.references,
												i = t.levelDetails;
											n.forEach((function(e, t) {
												var n = e.info,
													a = i.fragments[t];
												0 === a.byteRange.length && a.setByteRange(String(1 + n.end - n.start) + "@" + String(n.start)), a.initSegment && a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
											}))
										}
									}, t.handleManifestParsingError = function(e, t, r, n) {
										this.hls.trigger(i.Events.ERROR, {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: a.ErrorDetails.MANIFEST_PARSING_ERROR,
											fatal: t.type === u.PlaylistContextType.MANIFEST,
											url: e.url,
											reason: r,
											response: e,
											context: t,
											networkDetails: n
										})
									}, t.handleNetworkError = function(e, t, r, n) {
										void 0 === r && (r = !1), s.logger.warn("[playlist-loader]: A network " + (r ? "timeout" : "error") + " occurred while loading " + e.type + " level: " + e.level + " id: " + e.id + ' group-id: "' + e.groupId + '"');
										var o = a.ErrorDetails.UNKNOWN,
											l = !1,
											c = this.getInternalLoader(e);
										switch (e.type) {
											case u.PlaylistContextType.MANIFEST:
												o = r ? a.ErrorDetails.MANIFEST_LOAD_TIMEOUT : a.ErrorDetails.MANIFEST_LOAD_ERROR, l = !0;
												break;
											case u.PlaylistContextType.LEVEL:
												o = r ? a.ErrorDetails.LEVEL_LOAD_TIMEOUT : a.ErrorDetails.LEVEL_LOAD_ERROR, l = !1;
												break;
											case u.PlaylistContextType.AUDIO_TRACK:
												o = r ? a.ErrorDetails.AUDIO_TRACK_LOAD_TIMEOUT : a.ErrorDetails.AUDIO_TRACK_LOAD_ERROR, l = !1;
												break;
											case u.PlaylistContextType.SUBTITLE_TRACK:
												o = r ? a.ErrorDetails.SUBTITLE_TRACK_LOAD_TIMEOUT : a.ErrorDetails.SUBTITLE_LOAD_ERROR, l = !1
										}
										c && this.resetInternalLoader(e.type);
										var d = {
											type: a.ErrorTypes.NETWORK_ERROR,
											details: o,
											fatal: l,
											url: e.url,
											loader: c,
											context: e,
											networkDetails: t
										};
										n && (d.response = n), this.hls.trigger(i.Events.ERROR, d)
									}, t.handlePlaylistLoaded = function(e, t, r, n) {
										var a = r.type,
											s = r.level,
											o = r.id,
											l = r.groupId,
											c = r.loader,
											d = r.levelDetails,
											f = r.deliveryDirectives;
										if (null != d && d.targetduration) {
											if (c) switch (d.live && (c.getCacheAge && (d.ageHeader = c.getCacheAge() || 0), c.getCacheAge && !isNaN(d.ageHeader) || (d.ageHeader = 0)), a) {
												case u.PlaylistContextType.MANIFEST:
												case u.PlaylistContextType.LEVEL:
													this.hls.trigger(i.Events.LEVEL_LOADED, {
														details: d,
														level: s || 0,
														id: o || 0,
														stats: t,
														networkDetails: n,
														deliveryDirectives: f
													});
													break;
												case u.PlaylistContextType.AUDIO_TRACK:
													this.hls.trigger(i.Events.AUDIO_TRACK_LOADED, {
														details: d,
														id: o || 0,
														groupId: l || "",
														stats: t,
														networkDetails: n,
														deliveryDirectives: f
													});
													break;
												case u.PlaylistContextType.SUBTITLE_TRACK:
													this.hls.trigger(i.Events.SUBTITLE_TRACK_LOADED, {
														details: d,
														id: o || 0,
														groupId: l || "",
														stats: t,
														networkDetails: n,
														deliveryDirectives: f
													})
											}
										} else this.handleManifestParsingError(e, r, "invalid target duration", n)
									}, e
								}();
								t.default = f
							},
						"./src/polyfills/number.ts":
							/*!*********************************!*\
							  !*** ./src/polyfills/number.ts ***!
							  \*********************************/
							/*! exports provided: isFiniteNumber, MAX_SAFE_INTEGER */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "isFiniteNumber", (function() {
									return n
								})), r.d(t, "MAX_SAFE_INTEGER", (function() {
									return i
								}));
								var n = Number.isFinite || function(e) {
										return "number" == typeof e && isFinite(e)
									},
									i = Number.MAX_SAFE_INTEGER || 9007199254740991
							},
						"./src/remux/aac-helper.ts":
							/*!*********************************!*\
							  !*** ./src/remux/aac-helper.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = function() {
									function e() {}
									return e.getSilentFrame = function(e, t) {
										if ("mp4a.40.2" === e) {
											if (1 === t) return new Uint8Array([0, 200, 0, 128, 35, 128]);
											if (2 === t) return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
											if (3 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
											if (4 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
											if (5 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
											if (6 === t) return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224])
										} else {
											if (1 === t) return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
											if (2 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
											if (3 === t) return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
										}
									}, e
								}();
								t.default = n
							},
						"./src/remux/mp4-generator.ts":
							/*!************************************!*\
							  !*** ./src/remux/mp4-generator.ts ***!
							  \************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = Math.pow(2, 32) - 1,
									i = function() {
										function e() {}
										return e.init = function() {
											var t;
											for (t in e.types = {
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
												}, e.types) e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
											var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]),
												n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
											e.HDLR_TYPES = {
												video: r,
												audio: n
											};
											var i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]),
												a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
											e.STTS = e.STSC = e.STCO = a, e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]), e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
											var s = new Uint8Array([105, 115, 111, 109]),
												o = new Uint8Array([97, 118, 99, 49]),
												l = new Uint8Array([0, 0, 0, 1]);
											e.FTYP = e.box(e.types.ftyp, s, l, s, o), e.DINF = e.box(e.types.dinf, e.box(e.types.dref, i))
										}, e.box = function(e) {
											for (var t = 8, r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
											for (var a = n.length, s = a; a--;) t += n[a].byteLength;
											var o = new Uint8Array(t);
											for (o[0] = t >> 24 & 255, o[1] = t >> 16 & 255, o[2] = t >> 8 & 255, o[3] = 255 & t, o.set(e, 4), a = 0, t = 8; a < s; a++) o.set(n[a], t), t += n[a].byteLength;
											return o
										}, e.hdlr = function(t) {
											return e.box(e.types.hdlr, e.HDLR_TYPES[t])
										}, e.mdat = function(t) {
											return e.box(e.types.mdat, t)
										}, e.mdhd = function(t, r) {
											r *= t;
											var i = Math.floor(r / (n + 1)),
												a = Math.floor(r % (n + 1));
											return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
										}, e.mdia = function(t) {
											return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
										}, e.mfhd = function(t) {
											return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
										}, e.minf = function(t) {
											return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
										}, e.moof = function(t, r, n) {
											return e.box(e.types.moof, e.mfhd(t), e.traf(n, r))
										}, e.moov = function(t) {
											for (var r = t.length, n = []; r--;) n[r] = e.trak(t[r]);
											return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(n).concat(e.mvex(t)))
										}, e.mvex = function(t) {
											for (var r = t.length, n = []; r--;) n[r] = e.trex(t[r]);
											return e.box.apply(null, [e.types.mvex].concat(n))
										}, e.mvhd = function(t, r) {
											r *= t;
											var i = Math.floor(r / (n + 1)),
												a = Math.floor(r % (n + 1)),
												s = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
											return e.box(e.types.mvhd, s)
										}, e.sdtp = function(t) {
											var r, n, i = t.samples || [],
												a = new Uint8Array(4 + i.length);
											for (r = 0; r < i.length; r++) n = i[r].flags, a[r + 4] = n.dependsOn << 4 | n.isDependedOn << 2 | n.hasRedundancy;
											return e.box(e.types.sdtp, a)
										}, e.stbl = function(t) {
											return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
										}, e.avc1 = function(t) {
											var r, n, i, a = [],
												s = [];
											for (r = 0; r < t.sps.length; r++) i = (n = t.sps[r]).byteLength, a.push(i >>> 8 & 255), a.push(255 & i), a = a.concat(Array.prototype.slice.call(n));
											for (r = 0; r < t.pps.length; r++) i = (n = t.pps[r]).byteLength, s.push(i >>> 8 & 255), s.push(255 & i), s = s.concat(Array.prototype.slice.call(n));
											var o = e.box(e.types.avcC, new Uint8Array([1, a[3], a[4], a[5], 255, 224 | t.sps.length].concat(a).concat([t.pps.length]).concat(s))),
												l = t.width,
												u = t.height,
												c = t.pixelRatio[0],
												d = t.pixelRatio[1];
											return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, u >> 8 & 255, 255 & u, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c, d >> 24, d >> 16 & 255, d >> 8 & 255, 255 & d])))
										}, e.esds = function(e) {
											var t = e.config.length;
											return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
										}, e.mp4a = function(t) {
											var r = t.samplerate;
											return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
										}, e.mp3 = function(t) {
											var r = t.samplerate;
											return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
										}, e.stsd = function(t) {
											return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
										}, e.tkhd = function(t) {
											var r = t.id,
												i = t.duration * t.timescale,
												a = t.width,
												s = t.height,
												o = Math.floor(i / (n + 1)),
												l = Math.floor(i % (n + 1));
											return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, l >> 24, l >> 16 & 255, l >> 8 & 255, 255 & l, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, s >> 8 & 255, 255 & s, 0, 0]))
										}, e.traf = function(t, r) {
											var i = e.sdtp(t),
												a = t.id,
												s = Math.floor(r / (n + 1)),
												o = Math.floor(r % (n + 1));
											return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
										}, e.trak = function(t) {
											return t.duration = t.duration || 4294967295, e.box(e.types.trak, e.tkhd(t), e.mdia(t))
										}, e.trex = function(t) {
											var r = t.id;
											return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
										}, e.trun = function(t, r) {
											var n, i, a, s, o, l, u = t.samples || [],
												c = u.length,
												d = 12 + 16 * c,
												f = new Uint8Array(d);
											for (r += 8 + d, f.set([0, 0, 15, 1, c >>> 24 & 255, c >>> 16 & 255, c >>> 8 & 255, 255 & c, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0), n = 0; n < c; n++) a = (i = u[n]).duration, s = i.size, o = i.flags, l = i.cts, f.set([a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * n);
											return e.box(e.types.trun, f)
										}, e.initSegment = function(t) {
											e.types || e.init();
											var r = e.moov(t),
												n = new Uint8Array(e.FTYP.byteLength + r.byteLength);
											return n.set(e.FTYP), n.set(r, e.FTYP.byteLength), n
										}, e
									}();
								i.types = void 0, i.HDLR_TYPES = void 0, i.STTS = void 0, i.STSC = void 0, i.STCO = void 0, i.STSZ = void 0, i.VMHD = void 0, i.SMHD = void 0, i.STSD = void 0, i.FTYP = void 0, i.DINF = void 0, t.default = i
							},
						"./src/remux/mp4-remuxer.ts":
							/*!**********************************!*\
							  !*** ./src/remux/mp4-remuxer.ts ***!
							  \**********************************/
							/*! exports provided: default, normalizePts */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return g
								})), r.d(t, "normalizePts", (function() {
									return v
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ./aac-helper */ "./src/remux/aac-helper.ts"),
									a = r( /*! ./mp4-generator */ "./src/remux/mp4-generator.ts"),
									s = r( /*! ../events */ "./src/events.ts"),
									o = r( /*! ../errors */ "./src/errors.ts"),
									l = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									u = r( /*! ../types/loader */ "./src/types/loader.ts"),
									c = r( /*! ../utils/timescale-conversion */ "./src/utils/timescale-conversion.ts");

								function d() {
									return d = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, d.apply(this, arguments)
								}
								var f = null,
									h = null,
									p = !1,
									g = function() {
										function e(e, t, r, n) {
											if (void 0 === n && (n = ""), this.observer = void 0, this.config = void 0, this.typeSupported = void 0, this.ISGenerated = !1, this._initPTS = void 0, this._initDTS = void 0, this.nextAvcDts = null, this.nextAudioPts = null, this.isAudioContiguous = !1, this.isVideoContiguous = !1, this.observer = e, this.config = t, this.typeSupported = r, this.ISGenerated = !1, null === f) {
												var i = (navigator.userAgent || "").match(/Chrome\/(\d+)/i);
												f = i ? parseInt(i[1]) : 0
											}
											if (null === h) {
												var a = navigator.userAgent.match(/Safari\/(\d+)/i);
												h = a ? parseInt(a[1]) : 0
											}
											p = !!f && f < 75 || !!h && h < 600
										}
										var t = e.prototype;
										return t.destroy = function() {}, t.resetTimeStamp = function(e) {
											l.logger.log("[mp4-remuxer]: initPTS & initDTS reset"), this._initPTS = this._initDTS = e
										}, t.resetNextTimestamp = function() {
											l.logger.log("[mp4-remuxer]: reset next timestamp"), this.isVideoContiguous = !1, this.isAudioContiguous = !1
										}, t.resetInitSegment = function() {
											l.logger.log("[mp4-remuxer]: ISGenerated flag reset"), this.ISGenerated = !1
										}, t.getVideoStartPts = function(e) {
											var t = !1,
												r = e.reduce((function(e, r) {
													var n = r.pts - e;
													return n < -4294967296 ? (t = !0, v(e, r.pts)) : n > 0 ? e : r.pts
												}), e[0].pts);
											return t && l.logger.debug("PTS rollover detected"), r
										}, t.remux = function(e, t, r, n, i, a, s, o) {
											var c, d, f, h, p, g, m = i,
												y = i,
												E = e.pid > -1,
												b = t.pid > -1,
												T = t.samples.length,
												S = e.samples.length > 0,
												k = T > 1;
											if ((!E || S) && (!b || k) || this.ISGenerated || s) {
												this.ISGenerated || (f = this.generateIS(e, t, i));
												var w = this.isVideoContiguous,
													L = -1;
												if (k && (L = function(e) {
														for (var t = 0; t < e.length; t++)
															if (e[t].key) return t;
														return -1
													}(t.samples), !w && this.config.forceKeyFrameOnDiscontinuity))
													if (g = !0, L > 0) {
														l.logger.warn("[mp4-remuxer]: Dropped " + L + " out of " + T + " video samples due to a missing keyframe");
														var A = this.getVideoStartPts(t.samples);
														t.samples = t.samples.slice(L), t.dropped += L, y += (t.samples[0].pts - A) / (t.timescale || 9e4)
													} else -1 === L && (l.logger.warn("[mp4-remuxer]: No keyframe found out of " + T + " video samples"), g = !1);
												if (this.ISGenerated) {
													if (S && k) {
														var D = this.getVideoStartPts(t.samples),
															C = (v(e.samples[0].pts, D) - D) / t.inputTimeScale;
														m += Math.max(0, C), y += Math.max(0, -C)
													}
													if (S) {
														if (e.samplerate || (l.logger.warn("[mp4-remuxer]: regenerate InitSegment as audio detected"), f = this.generateIS(e, t, i)), d = this.remuxAudio(e, m, this.isAudioContiguous, a, b || k || o === u.PlaylistLevelType.AUDIO ? y : void 0), k) {
															var _ = d ? d.endPTS - d.startPTS : 0;
															t.inputTimeScale || (l.logger.warn("[mp4-remuxer]: regenerate InitSegment as video detected"), f = this.generateIS(e, t, i)), c = this.remuxVideo(t, y, w, _)
														}
													} else k && (c = this.remuxVideo(t, y, w, 0));
													c && (c.firstKeyFrame = L, c.independent = -1 !== L)
												}
											}
											return this.ISGenerated && (r.samples.length && (p = this.remuxID3(r, i)), n.samples.length && (h = this.remuxText(n, i))), {
												audio: d,
												video: c,
												initSegment: f,
												independent: g,
												text: h,
												id3: p
											}
										}, t.generateIS = function(e, t, r) {
											var i, s, o, l = e.samples,
												u = t.samples,
												c = this.typeSupported,
												d = {},
												f = !Object(n.isFiniteNumber)(this._initPTS),
												h = "audio/mp4";
											if (f && (i = s = 1 / 0), e.config && l.length && (e.timescale = e.samplerate, e.isAAC || (c.mpeg ? (h = "audio/mpeg", e.codec = "") : c.mp3 && (e.codec = "mp3")), d.audio = {
													id: "audio",
													container: h,
													codec: e.codec,
													initSegment: !e.isAAC && c.mpeg ? new Uint8Array(0) : a.default.initSegment([e]),
													metadata: {
														channelCount: e.channelCount
													}
												}, f && (o = e.inputTimeScale, i = s = l[0].pts - Math.round(o * r))), t.sps && t.pps && u.length && (t.timescale = t.inputTimeScale, d.video = {
													id: "main",
													container: "video/mp4",
													codec: t.codec,
													initSegment: a.default.initSegment([t]),
													metadata: {
														width: t.width,
														height: t.height
													}
												}, f)) {
												o = t.inputTimeScale;
												var p = this.getVideoStartPts(u),
													g = Math.round(o * r);
												s = Math.min(s, v(u[0].dts, p) - g), i = Math.min(i, p - g)
											}
											if (Object.keys(d).length) return this.ISGenerated = !0, f && (this._initPTS = i, this._initDTS = s), {
												tracks: d,
												initPTS: i,
												timescale: o
											}
										}, t.remuxVideo = function(e, t, r, n) {
											var i, u, h, g = e.inputTimeScale,
												y = e.samples,
												E = [],
												b = y.length,
												T = this._initPTS,
												S = this.nextAvcDts,
												k = 8,
												w = Number.POSITIVE_INFINITY,
												L = Number.NEGATIVE_INFINITY,
												A = 0,
												D = !1;
											r && null !== S || (S = t * g - (y[0].pts - v(y[0].dts, y[0].pts)));
											for (var C = 0; C < b; C++) {
												var _ = y[C];
												_.pts = v(_.pts - T, S), _.dts = v(_.dts - T, S), _.dts > _.pts && (A = Math.max(Math.min(A, _.pts - _.dts), -18e3)), _.dts < y[C > 0 ? C - 1 : C].dts && (D = !0)
											}
											D && y.sort((function(e, t) {
												var r = e.dts - t.dts,
													n = e.pts - t.pts;
												return r || n
											})), u = y[0].dts, h = y[y.length - 1].dts;
											var R = Math.round((h - u) / (b - 1));
											if (A < 0) {
												if (A < -2 * R) {
													l.logger.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + Object(c.toMsFromMpegTsClock)(-R, !0) + " ms");
													for (var x = A, I = 0; I < b; I++) y[I].dts = x = Math.max(x, y[I].pts - R), y[I].pts = Math.max(x, y[I].pts)
												} else {
													l.logger.warn("PTS < DTS detected in video samples, shifting DTS by " + Object(c.toMsFromMpegTsClock)(A, !0) + " ms to overcome this issue");
													for (var O = 0; O < b; O++) y[O].dts = y[O].dts + A
												}
												u = y[0].dts
											}
											if (r) {
												var P = u - S,
													F = P > R;
												if (F || P < -1) {
													F ? l.logger.warn("AVC: " + Object(c.toMsFromMpegTsClock)(P, !0) + " ms (" + P + "dts) hole between fragments detected, filling it") : l.logger.warn("AVC: " + Object(c.toMsFromMpegTsClock)(-P, !0) + " ms (" + P + "dts) overlapping between fragments detected"), u = S;
													var M = y[0].pts - P;
													y[0].dts = u, y[0].pts = M, l.logger.log("Video: First PTS/DTS adjusted: " + Object(c.toMsFromMpegTsClock)(M, !0) + "/" + Object(c.toMsFromMpegTsClock)(u, !0) + ", delta: " + Object(c.toMsFromMpegTsClock)(P, !0) + " ms")
												}
											}
											p && (u = Math.max(0, u));
											for (var N = 0, U = 0, B = 0; B < b; B++) {
												for (var j = y[B], G = j.units, H = G.length, K = 0, V = 0; V < H; V++) K += G[V].data.length;
												U += K, N += H, j.length = K, j.dts = Math.max(j.dts, u), j.pts = Math.max(j.pts, j.dts, 0), w = Math.min(j.pts, w), L = Math.max(j.pts, L)
											}
											h = y[b - 1].dts;
											var z, W = U + 4 * N + 8;
											try {
												z = new Uint8Array(W)
											} catch (e) {
												return void this.observer.emit(s.Events.ERROR, s.Events.ERROR, {
													type: o.ErrorTypes.MUX_ERROR,
													details: o.ErrorDetails.REMUX_ALLOC_ERROR,
													fatal: !1,
													bytes: W,
													reason: "fail allocating video mdat " + W
												})
											}
											var q = new DataView(z.buffer);
											q.setUint32(0, W), z.set(a.default.types.mdat, 4);
											for (var Y = 0; Y < b; Y++) {
												for (var X = y[Y], Q = X.units, $ = 0, J = 0, Z = Q.length; J < Z; J++) {
													var ee = Q[J],
														te = ee.data,
														re = ee.data.byteLength;
													q.setUint32(k, re), k += 4, z.set(te, k), k += re, $ += 4 + re
												}
												if (Y < b - 1) i = y[Y + 1].dts - X.dts;
												else {
													var ne = this.config,
														ie = X.dts - y[Y > 0 ? Y - 1 : Y].dts;
													if (ne.stretchShortVideoTrack && null !== this.nextAudioPts) {
														var ae = Math.floor(ne.maxBufferHole * g),
															se = (n ? w + n * g : this.nextAudioPts) - X.pts;
														se > ae ? ((i = se - ie) < 0 && (i = ie), l.logger.log("[mp4-remuxer]: It is approximately " + se / 90 + " ms to the next segment; using duration " + i / 90 + " ms for the last video frame.")) : i = ie
													} else i = ie
												}
												var oe = Math.round(X.pts - X.dts);
												E.push(new m(X.key, i, $, oe))
											}
											if (E.length && f && f < 70) {
												var le = E[0].flags;
												le.dependsOn = 2, le.isNonSync = 0
											}
											console.assert(void 0 !== i, "mp4SampleDuration must be computed"), this.nextAvcDts = S = h + i, this.isVideoContiguous = !0;
											var ue = {
												data1: a.default.moof(e.sequenceNumber++, u, d({}, e, {
													samples: E
												})),
												data2: z,
												startPTS: w / g,
												endPTS: (L + i) / g,
												startDTS: u / g,
												endDTS: S / g,
												type: "video",
												hasAudio: !1,
												hasVideo: !0,
												nb: E.length,
												dropped: e.dropped
											};
											return e.samples = [], e.dropped = 0, console.assert(z.length, "MDAT length must not be zero"), ue
										}, t.remuxAudio = function(e, t, r, n, u) {
											var c = e.inputTimeScale,
												f = c / (e.samplerate ? e.samplerate : c),
												h = e.isAAC ? 1024 : 1152,
												p = h * f,
												g = this._initPTS,
												y = !e.isAAC && this.typeSupported.mpeg,
												E = [],
												b = e.samples,
												T = y ? 0 : 8,
												S = this.nextAudioPts || -1,
												k = t * c;
											if (this.isAudioContiguous = r = r || b.length && S > 0 && (n && Math.abs(k - S) < 9e3 || Math.abs(v(b[0].pts - g, k) - S) < 20 * p), b.forEach((function(e) {
													e.pts = v(e.pts - g, k)
												})), !r || S < 0) {
												if (b = b.filter((function(e) {
														return e.pts >= 0
													})), !b.length) return;
												S = 0 === u ? 0 : n ? Math.max(0, k) : b[0].pts
											}
											if (e.isAAC)
												for (var w = void 0 !== u, L = this.config.maxAudioFramesDrift, A = 0, D = S; A < b.length; A++) {
													var C = b[A],
														_ = C.pts,
														R = _ - D,
														x = Math.abs(1e3 * R / c);
													if (R <= -L * p && w) 0 === A && (l.logger.warn("Audio frame @ " + (_ / c).toFixed(3) + "s overlaps nextAudioPts by " + Math.round(1e3 * R / c) + " ms."), this.nextAudioPts = S = D = _);
													else if (R >= L * p && x < 1e4 && w) {
														var I = Math.round(R / p);
														(D = _ - I * p) < 0 && (I--, D += p), 0 === A && (this.nextAudioPts = S = D), l.logger.warn("[mp4-remuxer]: Injecting " + I + " audio frame @ " + (D / c).toFixed(3) + "s due to " + Math.round(1e3 * R / c) + " ms gap.");
														for (var O = 0; O < I; O++) {
															var P = Math.max(D, 0),
																F = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
															F || (l.logger.log("[mp4-remuxer]: Unable to get silent frame for given audio codec; duplicating last frame instead."), F = C.unit.subarray()), b.splice(A, 0, {
																unit: F,
																pts: P
															}), D += p, A++
														}
													}
													C.pts = D, D += p
												}
											for (var M, N = null, U = null, B = 0, j = b.length; j--;) B += b[j].unit.byteLength;
											for (var G = 0, H = b.length; G < H; G++) {
												var K = b[G],
													V = K.unit,
													z = K.pts;
												if (null !== U) E[G - 1].duration = Math.round((z - U) / f);
												else {
													if (r && e.isAAC && (z = S), N = z, !(B > 0)) return;
													B += T;
													try {
														M = new Uint8Array(B)
													} catch (e) {
														return void this.observer.emit(s.Events.ERROR, s.Events.ERROR, {
															type: o.ErrorTypes.MUX_ERROR,
															details: o.ErrorDetails.REMUX_ALLOC_ERROR,
															fatal: !1,
															bytes: B,
															reason: "fail allocating audio mdat " + B
														})
													}
													y || (new DataView(M.buffer).setUint32(0, B), M.set(a.default.types.mdat, 4))
												}
												M.set(V, T);
												var W = V.byteLength;
												T += W, E.push(new m(!0, h, W, 0)), U = z
											}
											var q = E.length;
											if (q) {
												var Y = E[E.length - 1];
												this.nextAudioPts = S = U + f * Y.duration;
												var X = y ? new Uint8Array(0) : a.default.moof(e.sequenceNumber++, N / f, d({}, e, {
													samples: E
												}));
												e.samples = [];
												var Q = N / c,
													$ = S / c,
													J = {
														data1: X,
														data2: M,
														startPTS: Q,
														endPTS: $,
														startDTS: Q,
														endDTS: $,
														type: "audio",
														hasAudio: !0,
														hasVideo: !1,
														nb: q
													};
												return this.isAudioContiguous = !0, console.assert(M.length, "MDAT length must not be zero"), J
											}
										}, t.remuxEmptyAudio = function(e, t, r, n) {
											var a = e.inputTimeScale,
												s = a / (e.samplerate ? e.samplerate : a),
												o = this.nextAudioPts,
												u = (null !== o ? o : n.startDTS * a) + this._initDTS,
												c = n.endDTS * a + this._initDTS,
												d = 1024 * s,
												f = Math.ceil((c - u) / d),
												h = i.default.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
											if (l.logger.warn("[mp4-remuxer]: remux empty Audio"), h) {
												for (var p = [], g = 0; g < f; g++) {
													var v = u + g * d;
													p.push({
														unit: h,
														pts: v,
														dts: v
													})
												}
												return e.samples = p, this.remuxAudio(e, t, r, !1)
											}
											l.logger.trace("[mp4-remuxer]: Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec")
										}, t.remuxID3 = function(e, t) {
											var r = e.samples.length;
											if (r) {
												for (var n = e.inputTimeScale, i = this._initPTS, a = this._initDTS, s = 0; s < r; s++) {
													var o = e.samples[s];
													o.pts = v(o.pts - i, t * n) / n, o.dts = v(o.dts - a, t * n) / n
												}
												var l = e.samples;
												return e.samples = [], {
													samples: l
												}
											}
										}, t.remuxText = function(e, t) {
											var r = e.samples.length;
											if (r) {
												for (var n = e.inputTimeScale, i = this._initPTS, a = 0; a < r; a++) {
													var s = e.samples[a];
													s.pts = v(s.pts - i, t * n) / n
												}
												e.samples.sort((function(e, t) {
													return e.pts - t.pts
												}));
												var o = e.samples;
												return e.samples = [], {
													samples: o
												}
											}
										}, e
									}();

								function v(e, t) {
									var r;
									if (null === t) return e;
									for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;) e += r;
									return e
								}
								var m = function(e, t, r, n) {
										this.size = void 0, this.duration = void 0, this.cts = void 0, this.flags = void 0, this.duration = t, this.size = r, this.cts = n, this.flags = new y(e)
									},
									y = function(e) {
										this.isLeading = 0, this.isDependedOn = 0, this.hasRedundancy = 0, this.degradPrio = 0, this.dependsOn = 1, this.isNonSync = 1, this.dependsOn = e ? 2 : 1, this.isNonSync = e ? 0 : 1
									}
							},
						"./src/remux/passthrough-remuxer.ts":
							/*!******************************************!*\
							  !*** ./src/remux/passthrough-remuxer.ts ***!
							  \******************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../utils/mp4-tools */ "./src/utils/mp4-tools.ts"),
									a = r( /*! ../loader/fragment */ "./src/loader/fragment.ts"),
									s = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									o = function() {
										function e() {
											this.emitInitSegment = !1, this.audioCodec = void 0, this.videoCodec = void 0, this.initData = void 0, this.initPTS = void 0, this.initTracks = void 0, this.lastEndDTS = null
										}
										var t = e.prototype;
										return t.destroy = function() {}, t.resetTimeStamp = function(e) {
											this.initPTS = e, this.lastEndDTS = null
										}, t.resetNextTimestamp = function() {
											this.lastEndDTS = null
										}, t.resetInitSegment = function(e, t, r) {
											this.audioCodec = t, this.videoCodec = r, this.generateInitSegment(e), this.emitInitSegment = !0
										}, t.generateInitSegment = function(e) {
											var t = this.audioCodec,
												r = this.videoCodec;
											if (!e || !e.byteLength) return this.initTracks = void 0, void(this.initData = void 0);
											var n = this.initData = Object(i.parseInitSegment)(e);
											t || (t = u(n.audio, a.ElementaryStreamTypes.AUDIO)), r || (r = u(n.video, a.ElementaryStreamTypes.VIDEO));
											var o = {};
											n.audio && n.video ? o.audiovideo = {
												container: "video/mp4",
												codec: t + "," + r,
												initSegment: e,
												id: "main"
											} : n.audio ? o.audio = {
												container: "audio/mp4",
												codec: t,
												initSegment: e,
												id: "audio"
											} : n.video ? o.video = {
												container: "video/mp4",
												codec: r,
												initSegment: e,
												id: "main"
											} : s.logger.warn("[passthrough-remuxer.ts]: initSegment does not contain moov or trak boxes."), this.initTracks = o
										}, t.remux = function(e, t, r, a, o) {
											var u = this.initPTS,
												c = this.lastEndDTS,
												d = {
													audio: void 0,
													video: void 0,
													text: a,
													id3: r,
													initSegment: void 0
												};
											Object(n.isFiniteNumber)(c) || (c = this.lastEndDTS = o || 0);
											var f = t.samples;
											if (!f || !f.length) return d;
											var h = {
													initPTS: void 0,
													timescale: 1
												},
												p = this.initData;
											if (p && p.length || (this.generateInitSegment(f), p = this.initData), !p || !p.length) return s.logger.warn("[passthrough-remuxer.ts]: Failed to generate initSegment."), d;
											this.emitInitSegment && (h.tracks = this.initTracks, this.emitInitSegment = !1), Object(n.isFiniteNumber)(u) || (this.initPTS = h.initPTS = u = l(p, f, c));
											var g = Object(i.getDuration)(f, p),
												v = c,
												m = g + v;
											Object(i.offsetStartDTS)(p, f, u), g > 0 ? this.lastEndDTS = m : (s.logger.warn("Duration parsed from mp4 should be greater than zero"), this.resetNextTimestamp());
											var y = !!p.audio,
												E = !!p.video,
												b = "";
											y && (b += "audio"), E && (b += "video");
											var T = {
												data1: f,
												startPTS: v,
												startDTS: v,
												endPTS: m,
												endDTS: m,
												type: b,
												hasAudio: y,
												hasVideo: E,
												nb: 1,
												dropped: 0
											};
											return d.audio = "audio" === T.type ? T : void 0, d.video = "audio" !== T.type ? T : void 0, d.text = a, d.id3 = r, d.initSegment = h, d
										}, e
									}(),
									l = function(e, t, r) {
										return Object(i.getStartDTS)(e, t) - r
									};

								function u(e, t) {
									var r = null == e ? void 0 : e.codec;
									return r && r.length > 4 ? r : "hvc1" === r ? "hvc1.1.c.L120.90" : "av01" === r ? "av01.0.04M.08" : "avc1" === r || t === a.ElementaryStreamTypes.VIDEO ? "avc1.42e01e" : "mp4a.40.5"
								}
								t.default = o
							},
						"./src/task-loop.ts":
							/*!**************************!*\
							  !*** ./src/task-loop.ts ***!
							  \**************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return n
								}));
								var n = function() {
									function e() {
										this._boundTick = void 0, this._tickTimer = null, this._tickInterval = null, this._tickCallCount = 0, this._boundTick = this.tick.bind(this)
									}
									var t = e.prototype;
									return t.destroy = function() {
										this.onHandlerDestroying(), this.onHandlerDestroyed()
									}, t.onHandlerDestroying = function() {
										this.clearNextTick(), this.clearInterval()
									}, t.onHandlerDestroyed = function() {}, t.hasInterval = function() {
										return !!this._tickInterval
									}, t.hasNextTick = function() {
										return !!this._tickTimer
									}, t.setInterval = function(e) {
										return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e), !0)
									}, t.clearInterval = function() {
										return !!this._tickInterval && (self.clearInterval(this._tickInterval), this._tickInterval = null, !0)
									}, t.clearNextTick = function() {
										return !!this._tickTimer && (self.clearTimeout(this._tickTimer), this._tickTimer = null, !0)
									}, t.tick = function() {
										this._tickCallCount++, 1 === this._tickCallCount && (this.doTick(), this._tickCallCount > 1 && this.tickImmediate(), this._tickCallCount = 0)
									}, t.tickImmediate = function() {
										this.clearNextTick(), this._tickTimer = self.setTimeout(this._boundTick, 0)
									}, t.doTick = function() {}, e
								}()
							},
						"./src/types/cmcd.ts":
							/*!***************************!*\
							  !*** ./src/types/cmcd.ts ***!
							  \***************************/
							/*! exports provided: CMCDVersion, CMCDObjectType, CMCDStreamingFormat, CMCDStreamType */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "CMCDVersion", (function() {
									return s
								})), r.d(t, "CMCDObjectType", (function() {
									return n
								})), r.d(t, "CMCDStreamingFormat", (function() {
									return i
								})), r.d(t, "CMCDStreamType", (function() {
									return a
								}));
								var n, i, a, s = 1;
								! function(e) {
									e.MANIFEST = "m", e.AUDIO = "a", e.VIDEO = "v", e.MUXED = "av", e.INIT = "i", e.CAPTION = "c", e.TIMED_TEXT = "tt", e.KEY = "k", e.OTHER = "o"
								}(n || (n = {})),
								function(e) {
									e.DASH = "d", e.HLS = "h", e.SMOOTH = "s", e.OTHER = "o"
								}(i || (i = {})),
								function(e) {
									e.VOD = "v", e.LIVE = "l"
								}(a || (a = {}))
							},
						"./src/types/level.ts":
							/*!****************************!*\
							  !*** ./src/types/level.ts ***!
							  \****************************/
							/*! exports provided: HlsSkip, getSkipValue, HlsUrlParameters, Level */
							function(e, t, r) {
								"use strict";

								function n(e, t) {
									for (var r = 0; r < t.length; r++) {
										var n = t[r];
										n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
									}
								}
								var i;

								function a(e, t) {
									var r = e.canSkipUntil,
										n = e.canSkipDateRanges,
										a = e.endSN;
									return r && (void 0 !== t ? t - a : 0) < r ? n ? i.v2 : i.Yes : i.No
								}
								r.r(t), r.d(t, "HlsSkip", (function() {
										return i
									})), r.d(t, "getSkipValue", (function() {
										return a
									})), r.d(t, "HlsUrlParameters", (function() {
										return s
									})), r.d(t, "Level", (function() {
										return o
									})),
									function(e) {
										e.No = "", e.Yes = "YES", e.v2 = "v2"
									}(i || (i = {}));
								var s = function() {
										function e(e, t, r) {
											this.msn = void 0, this.part = void 0, this.skip = void 0, this.msn = e, this.part = t, this.skip = r
										}
										return e.prototype.addDirectives = function(e) {
											var t = new self.URL(e);
											return void 0 !== this.msn && t.searchParams.set("_HLS_msn", this.msn.toString()), void 0 !== this.part && t.searchParams.set("_HLS_part", this.part.toString()), this.skip && t.searchParams.set("_HLS_skip", this.skip), t.toString()
										}, e
									}(),
									o = function() {
										function e(e) {
											this.attrs = void 0, this.audioCodec = void 0, this.bitrate = void 0, this.codecSet = void 0, this.height = void 0, this.id = void 0, this.name = void 0, this.videoCodec = void 0, this.width = void 0, this.unknownCodecs = void 0, this.audioGroupIds = void 0, this.details = void 0, this.fragmentError = 0, this.loadError = 0, this.loaded = void 0, this.realBitrate = 0, this.textGroupIds = void 0, this.url = void 0, this._urlId = 0, this.url = [e.url], this.attrs = e.attrs, this.bitrate = e.bitrate, e.details && (this.details = e.details), this.id = e.id || 0, this.name = e.name, this.width = e.width || 0, this.height = e.height || 0, this.audioCodec = e.audioCodec, this.videoCodec = e.videoCodec, this.unknownCodecs = e.unknownCodecs, this.codecSet = [e.videoCodec, e.audioCodec].filter((function(e) {
												return e
											})).join(",").replace(/\.[^.,]+/g, "")
										}
										var t, r, i;
										return t = e, (r = [{
											key: "maxBitrate",
											get: function() {
												return Math.max(this.realBitrate, this.bitrate)
											}
										}, {
											key: "uri",
											get: function() {
												return this.url[this._urlId] || ""
											}
										}, {
											key: "urlId",
											get: function() {
												return this._urlId
											},
											set: function(e) {
												var t = e % this.url.length;
												this._urlId !== t && (this.details = void 0, this._urlId = t)
											}
										}]) && n(t.prototype, r), i && n(t, i), e
									}()
							},
						"./src/types/loader.ts":
							/*!*****************************!*\
							  !*** ./src/types/loader.ts ***!
							  \*****************************/
							/*! exports provided: PlaylistContextType, PlaylistLevelType */
							function(e, t, r) {
								"use strict";
								var n, i;
								r.r(t), r.d(t, "PlaylistContextType", (function() {
										return n
									})), r.d(t, "PlaylistLevelType", (function() {
										return i
									})),
									function(e) {
										e.MANIFEST = "manifest", e.LEVEL = "level", e.AUDIO_TRACK = "audioTrack", e.SUBTITLE_TRACK = "subtitleTrack"
									}(n || (n = {})),
									function(e) {
										e.MAIN = "main", e.AUDIO = "audio", e.SUBTITLE = "subtitle"
									}(i || (i = {}))
							},
						"./src/types/transmuxer.ts":
							/*!*********************************!*\
							  !*** ./src/types/transmuxer.ts ***!
							  \*********************************/
							/*! exports provided: ChunkMetadata */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "ChunkMetadata", (function() {
									return n
								}));
								var n = function(e, t, r, n, i, a) {
									void 0 === n && (n = 0), void 0 === i && (i = -1), void 0 === a && (a = !1), this.level = void 0, this.sn = void 0, this.part = void 0, this.id = void 0, this.size = void 0, this.partial = void 0, this.transmuxing = {
										start: 0,
										executeStart: 0,
										executeEnd: 0,
										end: 0
									}, this.buffering = {
										audio: {
											start: 0,
											executeStart: 0,
											executeEnd: 0,
											end: 0
										},
										video: {
											start: 0,
											executeStart: 0,
											executeEnd: 0,
											end: 0
										},
										audiovideo: {
											start: 0,
											executeStart: 0,
											executeEnd: 0,
											end: 0
										}
									}, this.level = e, this.sn = t, this.id = r, this.size = n, this.part = i, this.partial = a
								}
							},
						"./src/utils/attr-list.ts":
							/*!********************************!*\
							  !*** ./src/utils/attr-list.ts ***!
							  \********************************/
							/*! exports provided: AttrList */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "AttrList", (function() {
									return a
								}));
								var n = /^(\d+)x(\d+)$/,
									i = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g,
									a = function() {
										function e(t) {
											for (var r in "string" == typeof t && (t = e.parseAttrList(t)), t) t.hasOwnProperty(r) && (this[r] = t[r])
										}
										var t = e.prototype;
										return t.decimalInteger = function(e) {
											var t = parseInt(this[e], 10);
											return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
										}, t.hexadecimalInteger = function(e) {
											if (this[e]) {
												var t = (this[e] || "0x").slice(2);
												t = (1 & t.length ? "0" : "") + t;
												for (var r = new Uint8Array(t.length / 2), n = 0; n < t.length / 2; n++) r[n] = parseInt(t.slice(2 * n, 2 * n + 2), 16);
												return r
											}
											return null
										}, t.hexadecimalIntegerAsNumber = function(e) {
											var t = parseInt(this[e], 16);
											return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
										}, t.decimalFloatingPoint = function(e) {
											return parseFloat(this[e])
										}, t.optionalFloat = function(e, t) {
											var r = this[e];
											return r ? parseFloat(r) : t
										}, t.enumeratedString = function(e) {
											return this[e]
										}, t.bool = function(e) {
											return "YES" === this[e]
										}, t.decimalResolution = function(e) {
											var t = n.exec(this[e]);
											if (null !== t) return {
												width: parseInt(t[1], 10),
												height: parseInt(t[2], 10)
											}
										}, e.parseAttrList = function(e) {
											var t, r = {};
											for (i.lastIndex = 0; null !== (t = i.exec(e));) {
												var n = t[2];
												0 === n.indexOf('"') && n.lastIndexOf('"') === n.length - 1 && (n = n.slice(1, -1)), r[t[1]] = n
											}
											return r
										}, e
									}()
							},
						"./src/utils/binary-search.ts":
							/*!************************************!*\
							  !*** ./src/utils/binary-search.ts ***!
							  \************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), t.default = {
									search: function(e, t) {
										for (var r = 0, n = e.length - 1, i = null, a = null; r <= n;) {
											var s = t(a = e[i = (r + n) / 2 | 0]);
											if (s > 0) r = i + 1;
											else {
												if (!(s < 0)) return a;
												n = i - 1
											}
										}
										return null
									}
								}
							},
						"./src/utils/buffer-helper.ts":
							/*!************************************!*\
							  !*** ./src/utils/buffer-helper.ts ***!
							  \************************************/
							/*! exports provided: BufferHelper */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "BufferHelper", (function() {
									return a
								}));
								var n = r( /*! ./logger */ "./src/utils/logger.ts"),
									i = {
										length: 0,
										start: function() {
											return 0
										},
										end: function() {
											return 0
										}
									},
									a = function() {
										function e() {}
										return e.isBuffered = function(t, r) {
											try {
												if (t)
													for (var n = e.getBuffered(t), i = 0; i < n.length; i++)
														if (r >= n.start(i) && r <= n.end(i)) return !0
											} catch (e) {}
											return !1
										}, e.bufferInfo = function(t, r, n) {
											try {
												if (t) {
													var i, a = e.getBuffered(t),
														s = [];
													for (i = 0; i < a.length; i++) s.push({
														start: a.start(i),
														end: a.end(i)
													});
													return this.bufferedInfo(s, r, n)
												}
											} catch (e) {}
											return {
												len: 0,
												start: r,
												end: r,
												nextStart: void 0
											}
										}, e.bufferedInfo = function(e, t, r) {
											t = Math.max(0, t), e.sort((function(e, t) {
												var r = e.start - t.start;
												return r || t.end - e.end
											}));
											var n = [];
											if (r)
												for (var i = 0; i < e.length; i++) {
													var a = n.length;
													if (a) {
														var s = n[a - 1].end;
														e[i].start - s < r ? e[i].end > s && (n[a - 1].end = e[i].end) : n.push(e[i])
													} else n.push(e[i])
												} else n = e;
											for (var o, l = 0, u = t, c = t, d = 0; d < n.length; d++) {
												var f = n[d].start,
													h = n[d].end;
												if (t + r >= f && t < h) u = f, l = (c = h) - t;
												else if (t + r < f) {
													o = f;
													break
												}
											}
											return {
												len: l,
												start: u || 0,
												end: c || 0,
												nextStart: o
											}
										}, e.getBuffered = function(e) {
											try {
												return e.buffered
											} catch (e) {
												return n.logger.log("failed to get media.buffered", e), i
											}
										}, e
									}()
							},
						"./src/utils/cea-608-parser.ts":
							/*!*************************************!*\
							  !*** ./src/utils/cea-608-parser.ts ***!
							  \*************************************/
							/*! exports provided: Row, CaptionScreen, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "Row", (function() {
									return y
								})), r.d(t, "CaptionScreen", (function() {
									return E
								}));
								var n, i = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									a = {
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
									s = function(e) {
										var t = e;
										return a.hasOwnProperty(e) && (t = a[e]), String.fromCharCode(t)
									},
									o = 15,
									l = 100,
									u = {
										17: 1,
										18: 3,
										21: 5,
										22: 7,
										23: 9,
										16: 11,
										19: 12,
										20: 14
									},
									c = {
										17: 2,
										18: 4,
										21: 6,
										22: 8,
										23: 10,
										19: 13,
										20: 15
									},
									d = {
										25: 1,
										26: 3,
										29: 5,
										30: 7,
										31: 9,
										24: 11,
										27: 12,
										28: 14
									},
									f = {
										25: 2,
										26: 4,
										29: 6,
										30: 8,
										31: 10,
										27: 13,
										28: 15
									},
									h = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
								! function(e) {
									e[e.ERROR = 0] = "ERROR", e[e.TEXT = 1] = "TEXT", e[e.WARNING = 2] = "WARNING", e[e.INFO = 2] = "INFO", e[e.DEBUG = 3] = "DEBUG", e[e.DATA = 3] = "DATA"
								}(n || (n = {}));
								var p = function() {
										function e() {
											this.time = null, this.verboseLevel = n.ERROR
										}
										return e.prototype.log = function(e, t) {
											this.verboseLevel >= e && i.logger.log(this.time + " [" + e + "] " + t)
										}, e
									}(),
									g = function(e) {
										for (var t = [], r = 0; r < e.length; r++) t.push(e[r].toString(16));
										return t
									},
									v = function() {
										function e(e, t, r, n, i) {
											this.foreground = void 0, this.underline = void 0, this.italics = void 0, this.background = void 0, this.flash = void 0, this.foreground = e || "white", this.underline = t || !1, this.italics = r || !1, this.background = n || "black", this.flash = i || !1
										}
										var t = e.prototype;
										return t.reset = function() {
											this.foreground = "white", this.underline = !1, this.italics = !1, this.background = "black", this.flash = !1
										}, t.setStyles = function(e) {
											for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
												var n = t[r];
												e.hasOwnProperty(n) && (this[n] = e[n])
											}
										}, t.isDefault = function() {
											return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
										}, t.equals = function(e) {
											return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
										}, t.copy = function(e) {
											this.foreground = e.foreground, this.underline = e.underline, this.italics = e.italics, this.background = e.background, this.flash = e.flash
										}, t.toString = function() {
											return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
										}, e
									}(),
									m = function() {
										function e(e, t, r, n, i, a) {
											this.uchar = void 0, this.penState = void 0, this.uchar = e || " ", this.penState = new v(t, r, n, i, a)
										}
										var t = e.prototype;
										return t.reset = function() {
											this.uchar = " ", this.penState.reset()
										}, t.setChar = function(e, t) {
											this.uchar = e, this.penState.copy(t)
										}, t.setPenState = function(e) {
											this.penState.copy(e)
										}, t.equals = function(e) {
											return this.uchar === e.uchar && this.penState.equals(e.penState)
										}, t.copy = function(e) {
											this.uchar = e.uchar, this.penState.copy(e.penState)
										}, t.isEmpty = function() {
											return " " === this.uchar && this.penState.isDefault()
										}, e
									}(),
									y = function() {
										function e(e) {
											this.chars = void 0, this.pos = void 0, this.currPenState = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chars = [];
											for (var t = 0; t < l; t++) this.chars.push(new m);
											this.logger = e, this.pos = 0, this.currPenState = new v
										}
										var t = e.prototype;
										return t.equals = function(e) {
											for (var t = !0, r = 0; r < l; r++)
												if (!this.chars[r].equals(e.chars[r])) {
													t = !1;
													break
												} return t
										}, t.copy = function(e) {
											for (var t = 0; t < l; t++) this.chars[t].copy(e.chars[t])
										}, t.isEmpty = function() {
											for (var e = !0, t = 0; t < l; t++)
												if (!this.chars[t].isEmpty()) {
													e = !1;
													break
												} return e
										}, t.setCursor = function(e) {
											this.pos !== e && (this.pos = e), this.pos < 0 ? (this.logger.log(n.DEBUG, "Negative cursor position " + this.pos), this.pos = 0) : this.pos > l && (this.logger.log(n.DEBUG, "Too large cursor position " + this.pos), this.pos = l)
										}, t.moveCursor = function(e) {
											var t = this.pos + e;
											if (e > 1)
												for (var r = this.pos + 1; r < t + 1; r++) this.chars[r].setPenState(this.currPenState);
											this.setCursor(t)
										}, t.backSpace = function() {
											this.moveCursor(-1), this.chars[this.pos].setChar(" ", this.currPenState)
										}, t.insertChar = function(e) {
											e >= 144 && this.backSpace();
											var t = s(e);
											this.pos >= l ? this.logger.log(n.ERROR, "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState), this.moveCursor(1))
										}, t.clearFromPos = function(e) {
											var t;
											for (t = e; t < l; t++) this.chars[t].reset()
										}, t.clear = function() {
											this.clearFromPos(0), this.pos = 0, this.currPenState.reset()
										}, t.clearToEndOfRow = function() {
											this.clearFromPos(this.pos)
										}, t.getTextString = function() {
											for (var e = [], t = !0, r = 0; r < l; r++) {
												var n = this.chars[r].uchar;
												" " !== n && (t = !1), e.push(n)
											}
											return t ? "" : e.join("")
										}, t.setPenStyles = function(e) {
											this.currPenState.setStyles(e), this.chars[this.pos].setPenState(this.currPenState)
										}, e
									}(),
									E = function() {
										function e(e) {
											this.rows = void 0, this.currRow = void 0, this.nrRollUpRows = void 0, this.lastOutputScreen = void 0, this.logger = void 0, this.rows = [];
											for (var t = 0; t < o; t++) this.rows.push(new y(e));
											this.logger = e, this.currRow = 14, this.nrRollUpRows = null, this.lastOutputScreen = null, this.reset()
										}
										var t = e.prototype;
										return t.reset = function() {
											for (var e = 0; e < o; e++) this.rows[e].clear();
											this.currRow = 14
										}, t.equals = function(e) {
											for (var t = !0, r = 0; r < o; r++)
												if (!this.rows[r].equals(e.rows[r])) {
													t = !1;
													break
												} return t
										}, t.copy = function(e) {
											for (var t = 0; t < o; t++) this.rows[t].copy(e.rows[t])
										}, t.isEmpty = function() {
											for (var e = !0, t = 0; t < o; t++)
												if (!this.rows[t].isEmpty()) {
													e = !1;
													break
												} return e
										}, t.backSpace = function() {
											this.rows[this.currRow].backSpace()
										}, t.clearToEndOfRow = function() {
											this.rows[this.currRow].clearToEndOfRow()
										}, t.insertChar = function(e) {
											this.rows[this.currRow].insertChar(e)
										}, t.setPen = function(e) {
											this.rows[this.currRow].setPenStyles(e)
										}, t.moveCursor = function(e) {
											this.rows[this.currRow].moveCursor(e)
										}, t.setCursor = function(e) {
											this.logger.log(n.INFO, "setCursor: " + e), this.rows[this.currRow].setCursor(e)
										}, t.setPAC = function(e) {
											this.logger.log(n.INFO, "pacData = " + JSON.stringify(e));
											var t = e.row - 1;
											if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1), this.nrRollUpRows && this.currRow !== t) {
												for (var r = 0; r < o; r++) this.rows[r].clear();
												var i = this.currRow + 1 - this.nrRollUpRows,
													a = this.lastOutputScreen;
												if (a) {
													var s = a.rows[i].cueStartTime,
														l = this.logger.time;
													if (s && null !== l && s < l)
														for (var u = 0; u < this.nrRollUpRows; u++) this.rows[t - this.nrRollUpRows + u + 1].copy(a.rows[i + u])
												}
											}
											this.currRow = t;
											var c = this.rows[this.currRow];
											if (null !== e.indent) {
												var d = e.indent,
													f = Math.max(d - 1, 0);
												c.setCursor(e.indent), e.color = c.chars[f].penState.foreground
											}
											var h = {
												foreground: e.color,
												underline: e.underline,
												italics: e.italics,
												background: "black",
												flash: !1
											};
											this.setPen(h)
										}, t.setBkgData = function(e) {
											this.logger.log(n.INFO, "bkgData = " + JSON.stringify(e)), this.backSpace(), this.setPen(e), this.insertChar(32)
										}, t.setRollUpRows = function(e) {
											this.nrRollUpRows = e
										}, t.rollUp = function() {
											if (null !== this.nrRollUpRows) {
												this.logger.log(n.TEXT, this.getDisplayText());
												var e = this.currRow + 1 - this.nrRollUpRows,
													t = this.rows.splice(e, 1)[0];
												t.clear(), this.rows.splice(this.currRow, 0, t), this.logger.log(n.INFO, "Rolling up")
											} else this.logger.log(n.DEBUG, "roll_up but nrRollUpRows not set yet")
										}, t.getDisplayText = function(e) {
											e = e || !1;
											for (var t = [], r = "", n = -1, i = 0; i < o; i++) {
												var a = this.rows[i].getTextString();
												a && (n = i + 1, e ? t.push("Row " + n + ": '" + a + "'") : t.push(a.trim()))
											}
											return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")), r
										}, t.getTextAndFormat = function() {
											return this.rows
										}, e
									}(),
									b = function() {
										function e(e, t, r) {
											this.chNr = void 0, this.outputFilter = void 0, this.mode = void 0, this.verbose = void 0, this.displayedMemory = void 0, this.nonDisplayedMemory = void 0, this.lastOutputScreen = void 0, this.currRollUpRow = void 0, this.writeScreen = void 0, this.cueStartTime = void 0, this.logger = void 0, this.chNr = e, this.outputFilter = t, this.mode = null, this.verbose = 0, this.displayedMemory = new E(r), this.nonDisplayedMemory = new E(r), this.lastOutputScreen = new E(r), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null, this.logger = r
										}
										var t = e.prototype;
										return t.reset = function() {
											this.mode = null, this.displayedMemory.reset(), this.nonDisplayedMemory.reset(), this.lastOutputScreen.reset(), this.outputFilter.reset(), this.currRollUpRow = this.displayedMemory.rows[14], this.writeScreen = this.displayedMemory, this.mode = null, this.cueStartTime = null
										}, t.getHandler = function() {
											return this.outputFilter
										}, t.setHandler = function(e) {
											this.outputFilter = e
										}, t.setPAC = function(e) {
											this.writeScreen.setPAC(e)
										}, t.setBkgData = function(e) {
											this.writeScreen.setBkgData(e)
										}, t.setMode = function(e) {
											e !== this.mode && (this.mode = e, this.logger.log(n.INFO, "MODE=" + e), "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory, this.writeScreen.reset()), "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null, this.nonDisplayedMemory.nrRollUpRows = null), this.mode = e)
										}, t.insertChars = function(e) {
											for (var t = 0; t < e.length; t++) this.writeScreen.insertChar(e[t]);
											var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
											this.logger.log(n.INFO, r + ": " + this.writeScreen.getDisplayText(!0)), "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(n.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)), this.outputDataUpdate())
										}, t.ccRCL = function() {
											this.logger.log(n.INFO, "RCL - Resume Caption Loading"), this.setMode("MODE_POP-ON")
										}, t.ccBS = function() {
											this.logger.log(n.INFO, "BS - BackSpace"), "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(), this.writeScreen === this.displayedMemory && this.outputDataUpdate())
										}, t.ccAOF = function() {}, t.ccAON = function() {}, t.ccDER = function() {
											this.logger.log(n.INFO, "DER- Delete to End of Row"), this.writeScreen.clearToEndOfRow(), this.outputDataUpdate()
										}, t.ccRU = function(e) {
											this.logger.log(n.INFO, "RU(" + e + ") - Roll Up"), this.writeScreen = this.displayedMemory, this.setMode("MODE_ROLL-UP"), this.writeScreen.setRollUpRows(e)
										}, t.ccFON = function() {
											this.logger.log(n.INFO, "FON - Flash On"), this.writeScreen.setPen({
												flash: !0
											})
										}, t.ccRDC = function() {
											this.logger.log(n.INFO, "RDC - Resume Direct Captioning"), this.setMode("MODE_PAINT-ON")
										}, t.ccTR = function() {
											this.logger.log(n.INFO, "TR"), this.setMode("MODE_TEXT")
										}, t.ccRTD = function() {
											this.logger.log(n.INFO, "RTD"), this.setMode("MODE_TEXT")
										}, t.ccEDM = function() {
											this.logger.log(n.INFO, "EDM - Erase Displayed Memory"), this.displayedMemory.reset(), this.outputDataUpdate(!0)
										}, t.ccCR = function() {
											this.logger.log(n.INFO, "CR - Carriage Return"), this.writeScreen.rollUp(), this.outputDataUpdate(!0)
										}, t.ccENM = function() {
											this.logger.log(n.INFO, "ENM - Erase Non-displayed Memory"), this.nonDisplayedMemory.reset()
										}, t.ccEOC = function() {
											if (this.logger.log(n.INFO, "EOC - End Of Caption"), "MODE_POP-ON" === this.mode) {
												var e = this.displayedMemory;
												this.displayedMemory = this.nonDisplayedMemory, this.nonDisplayedMemory = e, this.writeScreen = this.nonDisplayedMemory, this.logger.log(n.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
											}
											this.outputDataUpdate(!0)
										}, t.ccTO = function(e) {
											this.logger.log(n.INFO, "TO(" + e + ") - Tab Offset"), this.writeScreen.moveCursor(e)
										}, t.ccMIDROW = function(e) {
											var t = {
												flash: !1
											};
											if (t.underline = e % 2 == 1, t.italics = e >= 46, t.italics) t.foreground = "white";
											else {
												var r = Math.floor(e / 2) - 16;
												t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
											}
											this.logger.log(n.INFO, "MIDROW: " + JSON.stringify(t)), this.writeScreen.setPen(t)
										}, t.outputDataUpdate = function(e) {
											void 0 === e && (e = !1);
											var t = this.logger.time;
											null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen), e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(), this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t, this.lastOutputScreen.copy(this.displayedMemory))
										}, t.cueSplitAtTime = function(e) {
											this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory), this.cueStartTime = e))
										}, e
									}(),
									T = function() {
										function e(e, t, r) {
											this.channels = void 0, this.currentChannel = 0, this.cmdHistory = void 0, this.logger = void 0;
											var n = new p;
											this.channels = [null, new b(e, t, n), new b(e + 1, r, n)], this.cmdHistory = {
												a: null,
												b: null
											}, this.logger = n
										}
										var t = e.prototype;
										return t.getHandler = function(e) {
											return this.channels[e].getHandler()
										}, t.setHandler = function(e, t) {
											this.channels[e].setHandler(t)
										}, t.addData = function(e, t) {
											var r, i, a, s = !1;
											this.logger.time = e;
											for (var o = 0; o < t.length; o += 2)
												if (i = 127 & t[o], a = 127 & t[o + 1], 0 !== i || 0 !== a) {
													if (this.logger.log(n.DATA, "[" + g([t[o], t[o + 1]]) + "] -> (" + g([i, a]) + ")"), (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)), r || (r = this.parsePAC(i, a)), r || (r = this.parseBackgroundAttributes(i, a)), !r && (s = this.parseChars(i, a))) {
														var l = this.currentChannel;
														l && l > 0 ? this.channels[l].insertChars(s) : this.logger.log(n.WARNING, "No channel found yet. TEXT-MODE?")
													}
													r || s || this.logger.log(n.WARNING, "Couldn't parse cleaned data " + g([i, a]) + " orig: " + g([t[o], t[o + 1]]))
												}
										}, t.parseCmd = function(e, t) {
											var r = this.cmdHistory;
											if (!((20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 33 && t <= 35)) return !1;
											if (k(e, t, r)) return S(null, null, r), this.logger.log(n.DEBUG, "Repeated command (" + g([e, t]) + ") is dropped"), !0;
											var i = 20 === e || 21 === e || 23 === e ? 1 : 2,
												a = this.channels[i];
											return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? a.ccRCL() : 33 === t ? a.ccBS() : 34 === t ? a.ccAOF() : 35 === t ? a.ccAON() : 36 === t ? a.ccDER() : 37 === t ? a.ccRU(2) : 38 === t ? a.ccRU(3) : 39 === t ? a.ccRU(4) : 40 === t ? a.ccFON() : 41 === t ? a.ccRDC() : 42 === t ? a.ccTR() : 43 === t ? a.ccRTD() : 44 === t ? a.ccEDM() : 45 === t ? a.ccCR() : 46 === t ? a.ccENM() : 47 === t && a.ccEOC() : a.ccTO(t - 32), S(e, t, r), this.currentChannel = i, !0
										}, t.parseMidrow = function(e, t) {
											var r = 0;
											if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
												if ((r = 17 === e ? 1 : 2) !== this.currentChannel) return this.logger.log(n.ERROR, "Mismatch channel in midrow parsing"), !1;
												var i = this.channels[r];
												return !!i && (i.ccMIDROW(t), this.logger.log(n.DEBUG, "MIDROW (" + g([e, t]) + ")"), !0)
											}
											return !1
										}, t.parsePAC = function(e, t) {
											var r, n = this.cmdHistory;
											if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127 || (16 === e || 24 === e) && t >= 64 && t <= 95)) return !1;
											if (k(e, t, n)) return S(null, null, n), !0;
											var i = e <= 23 ? 1 : 2;
											r = t >= 64 && t <= 95 ? 1 === i ? u[e] : d[e] : 1 === i ? c[e] : f[e];
											var a = this.channels[i];
											return !!a && (a.setPAC(this.interpretPAC(r, t)), S(e, t, n), this.currentChannel = i, !0)
										}, t.interpretPAC = function(e, t) {
											var r, n = {
												color: null,
												italics: !1,
												indent: null,
												underline: !1,
												row: e
											};
											return r = t > 95 ? t - 96 : t - 64, n.underline = 1 == (1 & r), r <= 13 ? n.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (n.italics = !0, n.color = "white") : n.indent = 4 * Math.floor((r - 16) / 2), n
										}, t.parseChars = function(e, t) {
											var r, i, a = null,
												o = null;
											if (e >= 25 ? (r = 2, o = e - 8) : (r = 1, o = e), o >= 17 && o <= 19 ? (i = 17 === o ? t + 80 : 18 === o ? t + 112 : t + 144, this.logger.log(n.INFO, "Special char '" + s(i) + "' in channel " + r), a = [i]) : e >= 32 && e <= 127 && (a = 0 === t ? [e] : [e, t]), a) {
												var l = g(a);
												this.logger.log(n.DEBUG, "Char codes =  " + l.join(",")), S(e, t, this.cmdHistory)
											}
											return a
										}, t.parseBackgroundAttributes = function(e, t) {
											var r;
											if (!((16 === e || 24 === e) && t >= 32 && t <= 47 || (23 === e || 31 === e) && t >= 45 && t <= 47)) return !1;
											var n = {};
											16 === e || 24 === e ? (r = Math.floor((t - 32) / 2), n.background = h[r], t % 2 == 1 && (n.background = n.background + "_semi")) : 45 === t ? n.background = "transparent" : (n.foreground = "black", 47 === t && (n.underline = !0));
											var i = e <= 23 ? 1 : 2;
											return this.channels[i].setBkgData(n), S(e, t, this.cmdHistory), !0
										}, t.reset = function() {
											for (var e = 0; e < Object.keys(this.channels).length; e++) {
												var t = this.channels[e];
												t && t.reset()
											}
											this.cmdHistory = {
												a: null,
												b: null
											}
										}, t.cueSplitAtTime = function(e) {
											for (var t = 0; t < this.channels.length; t++) {
												var r = this.channels[t];
												r && r.cueSplitAtTime(e)
											}
										}, e
									}();

								function S(e, t, r) {
									r.a = e, r.b = t
								}

								function k(e, t, r) {
									return r.a === e && r.b === t
								}
								t.default = T
							},
						"./src/utils/codecs.ts":
							/*!*****************************!*\
							  !*** ./src/utils/codecs.ts ***!
							  \*****************************/
							/*! exports provided: isCodecType, isCodecSupportedInMp4 */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "isCodecType", (function() {
									return i
								})), r.d(t, "isCodecSupportedInMp4", (function() {
									return a
								}));
								var n = {
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
										av01: !0,
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
									},
									text: {
										stpp: !0,
										wvtt: !0
									}
								};

								function i(e, t) {
									var r = n[t];
									return !!r && !0 === r[e.slice(0, 4)]
								}

								function a(e, t) {
									return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
								}
							},
						"./src/utils/cues.ts":
							/*!***************************!*\
							  !*** ./src/utils/cues.ts ***!
							  \***************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ./vttparser */ "./src/utils/vttparser.ts"),
									i = r( /*! ./webvtt-parser */ "./src/utils/webvtt-parser.ts"),
									a = r( /*! ./texttrack-utils */ "./src/utils/texttrack-utils.ts"),
									s = /\s/,
									o = {
										newCue: function(e, t, r, o) {
											for (var l, u, c, d, f, h = [], p = self.VTTCue || self.TextTrackCue, g = 0; g < o.rows.length; g++)
												if (c = !0, d = 0, f = "", !(l = o.rows[g]).isEmpty()) {
													for (var v = 0; v < l.chars.length; v++) s.test(l.chars[v].uchar) && c ? d++ : (f += l.chars[v].uchar, c = !1);
													l.cueStartTime = t, t === r && (r += 1e-4), d >= 16 ? d-- : d++;
													var m = Object(n.fixLineBreaks)(f.trim()),
														y = Object(i.generateCueId)(t, r, m);
													e && e.cues && e.cues.getCueById(y) || ((u = new p(t, r, m)).id = y, u.line = g + 1, u.align = "left", u.position = 10 + Math.min(80, 10 * Math.floor(8 * d / 32)), h.push(u))
												} return e && h.length && (h.sort((function(e, t) {
												return "auto" === e.line || "auto" === t.line ? 0 : e.line > 8 && t.line > 8 ? t.line - e.line : e.line - t.line
											})), h.forEach((function(t) {
												return Object(a.addCueToTrack)(e, t)
											}))), h
										}
									};
								t.default = o
							},
						"./src/utils/discontinuities.ts":
							/*!**************************************!*\
							  !*** ./src/utils/discontinuities.ts ***!
							  \**************************************/
							/*! exports provided: findFirstFragWithCC, shouldAlignOnDiscontinuities, findDiscontinuousReferenceFrag, adjustSlidingStart, alignStream, alignPDT, alignFragmentByPDTDelta, alignMediaPlaylistByPDT */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "findFirstFragWithCC", (function() {
									return s
								})), r.d(t, "shouldAlignOnDiscontinuities", (function() {
									return o
								})), r.d(t, "findDiscontinuousReferenceFrag", (function() {
									return l
								})), r.d(t, "adjustSlidingStart", (function() {
									return c
								})), r.d(t, "alignStream", (function() {
									return d
								})), r.d(t, "alignPDT", (function() {
									return f
								})), r.d(t, "alignFragmentByPDTDelta", (function() {
									return h
								})), r.d(t, "alignMediaPlaylistByPDT", (function() {
									return p
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ./logger */ "./src/utils/logger.ts"),
									a = r( /*! ../controller/level-helper */ "./src/controller/level-helper.ts");

								function s(e, t) {
									for (var r = null, n = 0, i = e.length; n < i; n++) {
										var a = e[n];
										if (a && a.cc === t) {
											r = a;
											break
										}
									}
									return r
								}

								function o(e, t, r) {
									return !(!t.details || !(r.endCC > r.startCC || e && e.cc < r.startCC))
								}

								function l(e, t) {
									var r = e.fragments,
										n = t.fragments;
									if (n.length && r.length) {
										var a = s(r, n[0].cc);
										if (a && (!a || a.startPTS)) return a;
										i.logger.log("No frag in previous level to align on")
									} else i.logger.log("No fragments to align")
								}

								function u(e, t) {
									if (e) {
										var r = e.start + t;
										e.start = e.startPTS = r, e.endPTS = r + e.duration
									}
								}

								function c(e, t) {
									for (var r = t.fragments, n = 0, i = r.length; n < i; n++) u(r[n], e);
									t.fragmentHint && u(t.fragmentHint, e), t.alignedSliding = !0
								}

								function d(e, t, r) {
									t && (function(e, t, r) {
										if (o(e, r, t)) {
											var a = l(r.details, t);
											a && Object(n.isFiniteNumber)(a.start) && (i.logger.log("Adjusting PTS using last level due to CC increase within current level " + t.url), c(a.start, t))
										}
									}(e, r, t), !r.alignedSliding && t.details && f(r, t.details), r.alignedSliding || !t.details || r.skippedSegments || Object(a.adjustSliding)(t.details, r))
								}

								function f(e, t) {
									if (t.fragments.length && e.hasProgramDateTime && t.hasProgramDateTime) {
										var r = t.fragments[0].programDateTime,
											a = e.fragments[0].programDateTime,
											s = (a - r) / 1e3 + t.fragments[0].start;
										s && Object(n.isFiniteNumber)(s) && (i.logger.log("Adjusting PTS using programDateTime delta " + (a - r) + "ms, sliding:" + s.toFixed(3) + " " + e.url + " "), c(s, e))
									}
								}

								function h(e, t) {
									var r = e.programDateTime;
									if (r) {
										var n = (r - t) / 1e3;
										e.start = e.startPTS = n, e.endPTS = n + e.duration
									}
								}

								function p(e, t) {
									if (t.fragments.length && e.hasProgramDateTime && t.hasProgramDateTime) {
										var r = t.fragments[0].programDateTime - 1e3 * t.fragments[0].start;
										e.fragments.forEach((function(e) {
											h(e, r)
										})), e.fragmentHint && h(e.fragmentHint, r), e.alignedSliding = !0
									}
								}
							},
						"./src/utils/ewma-bandwidth-estimator.ts":
							/*!***********************************************!*\
							  !*** ./src/utils/ewma-bandwidth-estimator.ts ***!
							  \***********************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../utils/ewma */ "./src/utils/ewma.ts"),
									i = function() {
										function e(e, t, r) {
											this.defaultEstimate_ = void 0, this.minWeight_ = void 0, this.minDelayMs_ = void 0, this.slow_ = void 0, this.fast_ = void 0, this.defaultEstimate_ = r, this.minWeight_ = .001, this.minDelayMs_ = 50, this.slow_ = new n.default(e), this.fast_ = new n.default(t)
										}
										var t = e.prototype;
										return t.update = function(e, t) {
											var r = this.slow_,
												i = this.fast_;
											this.slow_.halfLife !== e && (this.slow_ = new n.default(e, r.getEstimate(), r.getTotalWeight())), this.fast_.halfLife !== t && (this.fast_ = new n.default(t, i.getEstimate(), i.getTotalWeight()))
										}, t.sample = function(e, t) {
											var r = (e = Math.max(e, this.minDelayMs_)) / 1e3,
												n = 8 * t / r;
											this.fast_.sample(r, n), this.slow_.sample(r, n)
										}, t.canEstimate = function() {
											var e = this.fast_;
											return e && e.getTotalWeight() >= this.minWeight_
										}, t.getEstimate = function() {
											return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
										}, t.destroy = function() {}, e
									}();
								t.default = i
							},
						"./src/utils/ewma.ts":
							/*!***************************!*\
							  !*** ./src/utils/ewma.ts ***!
							  \***************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = function() {
									function e(e, t, r) {
										void 0 === t && (t = 0), void 0 === r && (r = 0), this.halfLife = void 0, this.alpha_ = void 0, this.estimate_ = void 0, this.totalWeight_ = void 0, this.halfLife = e, this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0, this.estimate_ = t, this.totalWeight_ = r
									}
									var t = e.prototype;
									return t.sample = function(e, t) {
										var r = Math.pow(this.alpha_, e);
										this.estimate_ = t * (1 - r) + r * this.estimate_, this.totalWeight_ += e
									}, t.getTotalWeight = function() {
										return this.totalWeight_
									}, t.getEstimate = function() {
										if (this.alpha_) {
											var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
											if (e) return this.estimate_ / e
										}
										return this.estimate_
									}, e
								}();
								t.default = n
							},
						"./src/utils/fetch-loader.ts":
							/*!***********************************!*\
							  !*** ./src/utils/fetch-loader.ts ***!
							  \***********************************/
							/*! exports provided: fetchSupported, default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "fetchSupported", (function() {
									return f
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ../loader/load-stats */ "./src/loader/load-stats.ts"),
									a = r( /*! ../demux/chunk-cache */ "./src/demux/chunk-cache.ts");

								function s(e) {
									var t = "function" == typeof Map ? new Map : void 0;
									return s = function(e) {
										if (null === e || (r = e, -1 === Function.toString.call(r).indexOf("[native code]"))) return e;
										var r;
										if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
										if (void 0 !== t) {
											if (t.has(e)) return t.get(e);
											t.set(e, n)
										}

										function n() {
											return o(e, arguments, c(this).constructor)
										}
										return n.prototype = Object.create(e.prototype, {
											constructor: {
												value: n,
												enumerable: !1,
												writable: !0,
												configurable: !0
											}
										}), u(n, e)
									}, s(e)
								}

								function o(e, t, r) {
									return o = l() ? Reflect.construct : function(e, t, r) {
										var n = [null];
										n.push.apply(n, t);
										var i = new(Function.bind.apply(e, n));
										return r && u(i, r.prototype), i
									}, o.apply(null, arguments)
								}

								function l() {
									if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
									if (Reflect.construct.sham) return !1;
									if ("function" == typeof Proxy) return !0;
									try {
										return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
									} catch (e) {
										return !1
									}
								}

								function u(e, t) {
									return u = Object.setPrototypeOf || function(e, t) {
										return e.__proto__ = t, e
									}, u(e, t)
								}

								function c(e) {
									return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
										return e.__proto__ || Object.getPrototypeOf(e)
									}, c(e)
								}

								function d() {
									return d = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, d.apply(this, arguments)
								}

								function f() {
									if (self.fetch && self.AbortController && self.ReadableStream && self.Request) try {
										return new self.ReadableStream({}), !0
									} catch (e) {}
									return !1
								}
								var h = function() {
									function e(e) {
										this.fetchSetup = void 0, this.requestTimeout = void 0, this.request = void 0, this.response = void 0, this.controller = void 0, this.context = void 0, this.config = null, this.callbacks = null, this.stats = void 0, this.loader = null, this.fetchSetup = e.fetchSetup || p, this.controller = new self.AbortController, this.stats = new i.LoadStats
									}
									var t = e.prototype;
									return t.destroy = function() {
										this.loader = this.callbacks = null, this.abortInternal()
									}, t.abortInternal = function() {
										var e = this.response;
										e && e.ok || (this.stats.aborted = !0, this.controller.abort())
									}, t.abort = function() {
										var e;
										this.abortInternal(), null !== (e = this.callbacks) && void 0 !== e && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.response)
									}, t.load = function(e, t, r) {
										var i = this,
											a = this.stats;
										if (a.loading.start) throw new Error("Loader can only be used once.");
										a.loading.start = self.performance.now();
										var s = function(e, t) {
												var r = {
													method: "GET",
													mode: "cors",
													credentials: "same-origin",
													signal: t,
													headers: new self.Headers(d({}, e.headers))
												};
												return e.rangeEnd && r.headers.set("Range", "bytes=" + e.rangeStart + "-" + String(e.rangeEnd - 1)), r
											}(e, this.controller.signal),
											o = r.onProgress,
											l = "arraybuffer" === e.responseType,
											u = l ? "byteLength" : "length";
										this.context = e, this.config = t, this.callbacks = r, this.request = this.fetchSetup(e, s), self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout((function() {
											i.abortInternal(), r.onTimeout(a, e, i.response)
										}), t.timeout), self.fetch(this.request).then((function(r) {
											if (i.response = i.loader = r, !r.ok) {
												var s = r.status,
													u = r.statusText;
												throw new g(u || "fetch, bad network response", s, r)
											}
											return a.loading.first = Math.max(self.performance.now(), a.loading.start), a.total = parseInt(r.headers.get("Content-Length") || "0"), o && Object(n.isFiniteNumber)(t.highWaterMark) ? i.loadProgressively(r, a, e, t.highWaterMark, o) : l ? r.arrayBuffer() : r.text()
										})).then((function(s) {
											var l = i.response;
											self.clearTimeout(i.requestTimeout), a.loading.end = Math.max(self.performance.now(), a.loading.first), a.loaded = a.total = s[u];
											var c = {
												url: l.url,
												data: s
											};
											o && !Object(n.isFiniteNumber)(t.highWaterMark) && o(a, e, s, l), r.onSuccess(c, a, e, l)
										})).catch((function(t) {
											if (self.clearTimeout(i.requestTimeout), !a.aborted) {
												var n = t.code || 0;
												r.onError({
													code: n,
													text: t.message
												}, e, t.details)
											}
										}))
									}, t.getCacheAge = function() {
										var e = null;
										if (this.response) {
											var t = this.response.headers.get("age");
											e = t ? parseFloat(t) : null
										}
										return e
									}, t.loadProgressively = function(e, t, r, n, i) {
										void 0 === n && (n = 0);
										var s = new a.default,
											o = e.body.getReader();
										return function a() {
											return o.read().then((function(o) {
												if (o.done) return s.dataLength && i(t, r, s.flush(), e), Promise.resolve(new ArrayBuffer(0));
												var l = o.value,
													u = l.length;
												return t.loaded += u, u < n || s.dataLength ? (s.push(l), s.dataLength >= n && i(t, r, s.flush(), e)) : i(t, r, l, e), a()
											})).catch((function() {
												return Promise.reject()
											}))
										}()
									}, e
								}();

								function p(e, t) {
									return new self.Request(e.url, t)
								}
								var g = function(e) {
									var t, r;

									function n(t, r, n) {
										var i;
										return (i = e.call(this, t) || this).code = void 0, i.details = void 0, i.code = r, i.details = n, i
									}
									return r = e, (t = n).prototype = Object.create(r.prototype), t.prototype.constructor = t, u(t, r), n
								}(s(Error));
								t.default = h
							},
						"./src/utils/imsc1-ttml-parser.ts":
							/*!****************************************!*\
							  !*** ./src/utils/imsc1-ttml-parser.ts ***!
							  \****************************************/
							/*! exports provided: IMSC1_CODEC, parseIMSC1 */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "IMSC1_CODEC", (function() {
									return c
								})), r.d(t, "parseIMSC1", (function() {
									return p
								}));
								var n = r( /*! ./mp4-tools */ "./src/utils/mp4-tools.ts"),
									i = r( /*! ./vttparser */ "./src/utils/vttparser.ts"),
									a = r( /*! ./vttcue */ "./src/utils/vttcue.ts"),
									s = r( /*! ../demux/id3 */ "./src/demux/id3.ts"),
									o = r( /*! ./timescale-conversion */ "./src/utils/timescale-conversion.ts"),
									l = r( /*! ./webvtt-parser */ "./src/utils/webvtt-parser.ts");

								function u() {
									return u = Object.assign || function(e) {
										for (var t = 1; t < arguments.length; t++) {
											var r = arguments[t];
											for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
										}
										return e
									}, u.apply(this, arguments)
								}
								var c = "stpp.ttml.im1t",
									d = /^(\d{2,}):(\d{2}):(\d{2}):(\d{2})\.?(\d+)?$/,
									f = /^(\d*(?:\.\d*)?)(h|m|s|ms|f|t)$/,
									h = {
										left: "start",
										center: "center",
										right: "end",
										start: "start",
										end: "end"
									};

								function p(e, t, r, i, c) {
									var d = Object(n.findBox)(new Uint8Array(e), ["mdat"]);
									if (0 !== d.length) {
										var f = d[0],
											p = Object(s.utf8ArrayToStr)(new Uint8Array(e, f.start, f.end - f.start)),
											T = Object(o.toTimescaleFromScale)(t, 1, r);
										try {
											i(function(e, t) {
												var r = (new DOMParser).parseFromString(e, "text/xml").getElementsByTagName("tt")[0];
												if (!r) throw new Error("Invalid ttml");
												var n = {
														frameRate: 30,
														subFrameRate: 1,
														frameRateMultiplier: 0,
														tickRate: 0
													},
													i = Object.keys(n).reduce((function(e, t) {
														return e[t] = r.getAttribute("ttp:" + t) || n[t], e
													}), {}),
													s = "preserve" !== r.getAttribute("xml:space"),
													o = v(g(r, "styling", "style")),
													c = v(g(r, "layout", "region")),
													d = g(r, "body", "[begin]");
												return [].map.call(d, (function(e) {
													var r = m(e, s);
													if (!r || !e.hasAttribute("begin")) return null;
													var n = b(e.getAttribute("begin"), i),
														d = b(e.getAttribute("dur"), i),
														f = b(e.getAttribute("end"), i);
													if (null === n) throw E(e);
													if (null === f) {
														if (null === d) throw E(e);
														f = n + d
													}
													var p = new a.default(n - t, f - t, r);
													p.id = Object(l.generateCueId)(p.startTime, p.endTime, p.text);
													var g = c[e.getAttribute("region")],
														v = o[e.getAttribute("style")];
													p.position = 10, p.size = 80;
													var T = function(e, t) {
															var r = "http://www.w3.org/ns/ttml#styling";
															return ["displayAlign", "textAlign", "color", "backgroundColor", "fontSize", "fontFamily"].reduce((function(n, i) {
																var a = y(t, r, i) || y(e, r, i);
																return a && (n[i] = a), n
															}), {})
														}(g, v),
														S = T.textAlign;
													if (S) {
														var k = h[S];
														k && (p.lineAlign = k), p.align = S
													}
													return u(p, T), p
												})).filter((function(e) {
													return null !== e
												}))
											}(p, T))
										} catch (e) {
											c(e)
										}
									} else c(new Error("Could not parse IMSC1 mdat"))
								}

								function g(e, t, r) {
									var n = e.getElementsByTagName(t)[0];
									return n ? [].slice.call(n.querySelectorAll(r)) : []
								}

								function v(e) {
									return e.reduce((function(e, t) {
										var r = t.getAttribute("xml:id");
										return r && (e[r] = t), e
									}), {})
								}

								function m(e, t) {
									return [].slice.call(e.childNodes).reduce((function(e, r, n) {
										var i;
										return "br" === r.nodeName && n ? e + "\n" : null !== (i = r.childNodes) && void 0 !== i && i.length ? m(r, t) : t ? e + r.textContent.trim().replace(/\s+/g, " ") : e + r.textContent
									}), "")
								}

								function y(e, t, r) {
									return e.hasAttributeNS(t, r) ? e.getAttributeNS(t, r) : null
								}

								function E(e) {
									return new Error("Could not parse ttml timestamp " + e)
								}

								function b(e, t) {
									if (!e) return null;
									var r = Object(i.parseTimeStamp)(e);
									return null === r && (d.test(e) ? r = function(e, t) {
										var r = d.exec(e),
											n = (0 | r[4]) + (0 | r[5]) / t.subFrameRate;
										return 3600 * (0 | r[1]) + 60 * (0 | r[2]) + (0 | r[3]) + n / t.frameRate
									}(e, t) : f.test(e) && (r = function(e, t) {
										var r = f.exec(e),
											n = Number(r[1]);
										switch (r[2]) {
											case "h":
												return 3600 * n;
											case "m":
												return 60 * n;
											case "ms":
												return 1e3 * n;
											case "f":
												return n / t.frameRate;
											case "t":
												return n / t.tickRate
										}
										return n
									}(e, t))), r
								}
							},
						"./src/utils/logger.ts":
							/*!*****************************!*\
							  !*** ./src/utils/logger.ts ***!
							  \*****************************/
							/*! exports provided: enableLogs, logger */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "enableLogs", (function() {
									return o
								})), r.d(t, "logger", (function() {
									return l
								}));
								var n = function() {},
									i = {
										trace: n,
										debug: n,
										log: n,
										warn: n,
										info: n,
										error: n
									},
									a = i;

								function s(e) {
									var t = self.console[e];
									return t ? t.bind(self.console, "[" + e + "] >") : n
								}

								function o(e) {
									if (self.console && !0 === e || "object" == typeof e) {
										! function(e) {
											for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
											r.forEach((function(t) {
												a[t] = e[t] ? e[t].bind(e) : s(t)
											}))
										}(e, "debug", "log", "info", "warn", "error");
										try {
											a.log()
										} catch (e) {
											a = i
										}
									} else a = i
								}
								var l = i
							},
						"./src/utils/mediakeys-helper.ts":
							/*!***************************************!*\
							  !*** ./src/utils/mediakeys-helper.ts ***!
							  \***************************************/
							/*! exports provided: KeySystems, requestMediaKeySystemAccess */
							function(e, t, r) {
								"use strict";
								var n;
								r.r(t), r.d(t, "KeySystems", (function() {
										return n
									})), r.d(t, "requestMediaKeySystemAccess", (function() {
										return i
									})),
									function(e) {
										e.WIDEVINE = "com.widevine.alpha", e.PLAYREADY = "com.microsoft.playready"
									}(n || (n = {}));
								var i = "undefined" != typeof self && self.navigator && self.navigator.requestMediaKeySystemAccess ? self.navigator.requestMediaKeySystemAccess.bind(self.navigator) : null
							},
						"./src/utils/mediasource-helper.ts":
							/*!*****************************************!*\
							  !*** ./src/utils/mediasource-helper.ts ***!
							  \*****************************************/
							/*! exports provided: getMediaSource */
							function(e, t, r) {
								"use strict";

								function n() {
									return self.MediaSource || self.WebKitMediaSource
								}
								r.r(t), r.d(t, "getMediaSource", (function() {
									return n
								}))
							},
						"./src/utils/mp4-tools.ts":
							/*!********************************!*\
							  !*** ./src/utils/mp4-tools.ts ***!
							  \********************************/
							/*! exports provided: bin2str, readUint16, readUint32, writeUint32, findBox, parseSegmentIndex, parseInitSegment, getStartDTS, getDuration, computeRawDurationFromSamples, offsetStartDTS, segmentValidRange, appendUint8Array */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "bin2str", (function() {
									return o
								})), r.d(t, "readUint16", (function() {
									return l
								})), r.d(t, "readUint32", (function() {
									return u
								})), r.d(t, "writeUint32", (function() {
									return c
								})), r.d(t, "findBox", (function() {
									return d
								})), r.d(t, "parseSegmentIndex", (function() {
									return f
								})), r.d(t, "parseInitSegment", (function() {
									return h
								})), r.d(t, "getStartDTS", (function() {
									return p
								})), r.d(t, "getDuration", (function() {
									return g
								})), r.d(t, "computeRawDurationFromSamples", (function() {
									return v
								})), r.d(t, "offsetStartDTS", (function() {
									return m
								})), r.d(t, "segmentValidRange", (function() {
									return y
								})), r.d(t, "appendUint8Array", (function() {
									return E
								}));
								var n = r( /*! ./typed-array */ "./src/utils/typed-array.ts"),
									i = r( /*! ../loader/fragment */ "./src/loader/fragment.ts"),
									a = Math.pow(2, 32) - 1,
									s = [].push;

								function o(e) {
									return String.fromCharCode.apply(null, e)
								}

								function l(e, t) {
									"data" in e && (t += e.start, e = e.data);
									var r = e[t] << 8 | e[t + 1];
									return r < 0 ? 65536 + r : r
								}

								function u(e, t) {
									"data" in e && (t += e.start, e = e.data);
									var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
									return r < 0 ? 4294967296 + r : r
								}

								function c(e, t, r) {
									"data" in e && (t += e.start, e = e.data), e[t] = r >> 24, e[t + 1] = r >> 16 & 255, e[t + 2] = r >> 8 & 255, e[t + 3] = 255 & r
								}

								function d(e, t) {
									var r, n, i, a = [];
									if (!t.length) return a;
									"data" in e ? (r = e.data, n = e.start, i = e.end) : (n = 0, i = (r = e).byteLength);
									for (var l = n; l < i;) {
										var c = u(r, l),
											f = c > 1 ? l + c : i;
										if (o(r.subarray(l + 4, l + 8)) === t[0])
											if (1 === t.length) a.push({
												data: r,
												start: l + 8,
												end: f
											});
											else {
												var h = d({
													data: r,
													start: l + 8,
													end: f
												}, t.slice(1));
												h.length && s.apply(a, h)
											} l = f
									}
									return a
								}

								function f(e) {
									var t = d(e, ["moov"])[0],
										r = t ? t.end : null,
										n = d(e, ["sidx"]);
									if (!n || !n[0]) return null;
									var i = [],
										a = n[0],
										s = a.data[0],
										o = 0 === s ? 8 : 16,
										c = u(a, o);
									o += 4, o += 0 === s ? 8 : 16, o += 2;
									var f = a.end + 0,
										h = l(a, o);
									o += 2;
									for (var p = 0; p < h; p++) {
										var g = o,
											v = u(a, g);
										g += 4;
										var m = 2147483647 & v;
										if (1 == (2147483648 & v) >>> 31) return console.warn("SIDX has hierarchical references (not supported)"), null;
										var y = u(a, g);
										g += 4, i.push({
											referenceSize: m,
											subsegmentDuration: y,
											info: {
												duration: y / c,
												start: f,
												end: f + m - 1
											}
										}), f += m, o = g += 4
									}
									return {
										earliestPresentationTime: 0,
										timescale: c,
										version: s,
										referencesCount: h,
										references: i,
										moovEndOffset: r
									}
								}

								function h(e) {
									for (var t = [], r = d(e, ["moov", "trak"]), n = 0; n < r.length; n++) {
										var a = r[n],
											s = d(a, ["tkhd"])[0];
										if (s) {
											var l = s.data[s.start],
												c = 0 === l ? 12 : 20,
												f = u(s, c),
												h = d(a, ["mdia", "mdhd"])[0];
											if (h) {
												var p = u(h, c = 0 === (l = h.data[h.start]) ? 12 : 20),
													g = d(a, ["mdia", "hdlr"])[0];
												if (g) {
													var v = o(g.data.subarray(g.start + 8, g.start + 12)),
														m = {
															soun: i.ElementaryStreamTypes.AUDIO,
															vide: i.ElementaryStreamTypes.VIDEO
														} [v];
													if (m) {
														var y = d(a, ["mdia", "minf", "stbl", "stsd"])[0],
															E = void 0;
														y && (E = o(y.data.subarray(y.start + 12, y.start + 16))), t[f] = {
															timescale: p,
															type: m
														}, t[m] = {
															timescale: p,
															id: f,
															codec: E
														}
													}
												}
											}
										}
									}
									return d(e, ["moov", "mvex", "trex"]).forEach((function(e) {
										var r = u(e, 4),
											n = t[r];
										n && (n.default = {
											duration: u(e, 12),
											flags: u(e, 20)
										})
									})), t
								}

								function p(e, t) {
									return d(t, ["moof", "traf"]).reduce((function(t, r) {
										var n = d(r, ["tfdt"])[0],
											i = n.data[n.start],
											a = d(r, ["tfhd"]).reduce((function(t, r) {
												var a = u(r, 4),
													s = e[a];
												if (s) {
													var o = u(n, 4);
													1 === i && (o *= Math.pow(2, 32), o += u(n, 8));
													var l = o / (s.timescale || 9e4);
													if (isFinite(l) && (null === t || l < t)) return l
												}
												return t
											}), null);
										return null !== a && isFinite(a) && (null === t || a < t) ? a : t
									}), null) || 0
								}

								function g(e, t) {
									for (var r = 0, n = 0, a = 0, s = d(e, ["moof", "traf"]), o = 0; o < s.length; o++) {
										var l = s[o],
											c = d(l, ["tfhd"])[0],
											h = t[u(c, 4)];
										if (h) {
											var p = h.default,
												g = u(c, 0) | (null == p ? void 0 : p.flags),
												m = null == p ? void 0 : p.duration;
											8 & g && (m = u(c, 2 & g ? 12 : 8));
											for (var y = h.timescale || 9e4, E = d(l, ["trun"]), b = 0; b < E.length; b++) !(r = v(E[b])) && m && (r = m * u(E[b], 4)), h.type === i.ElementaryStreamTypes.VIDEO ? n += r / y : h.type === i.ElementaryStreamTypes.AUDIO && (a += r / y)
										}
									}
									if (0 === n && 0 === a) {
										var T = f(e);
										if (null != T && T.references) return T.references.reduce((function(e, t) {
											return e + t.info.duration || 0
										}), 0)
									}
									return n || a
								}

								function v(e) {
									var t = u(e, 0),
										r = 8;
									1 & t && (r += 4), 4 & t && (r += 4);
									for (var n = 0, i = u(e, 4), a = 0; a < i; a++) 256 & t && (n += u(e, r), r += 4), 512 & t && (r += 4), 1024 & t && (r += 4), 2048 & t && (r += 4);
									return n
								}

								function m(e, t, r) {
									d(t, ["moof", "traf"]).forEach((function(t) {
										d(t, ["tfhd"]).forEach((function(n) {
											var i = u(n, 4),
												s = e[i];
											if (s) {
												var o = s.timescale || 9e4;
												d(t, ["tfdt"]).forEach((function(e) {
													var t = e.data[e.start],
														n = u(e, 4);
													if (0 === t) c(e, 4, n - r * o);
													else {
														n *= Math.pow(2, 32), n += u(e, 8), n -= r * o, n = Math.max(n, 0);
														var i = Math.floor(n / (a + 1)),
															s = Math.floor(n % (a + 1));
														c(e, 4, i), c(e, 8, s)
													}
												}))
											}
										}))
									}))
								}

								function y(e) {
									var t = {
											valid: null,
											remainder: null
										},
										r = d(e, ["moof"]);
									if (!r) return t;
									if (r.length < 2) return t.remainder = e, t;
									var i = r[r.length - 1];
									return t.valid = Object(n.sliceUint8)(e, 0, i.start - 8), t.remainder = Object(n.sliceUint8)(e, i.start - 8), t
								}

								function E(e, t) {
									var r = new Uint8Array(e.length + t.length);
									return r.set(e), r.set(t, e.length), r
								}
							},
						"./src/utils/output-filter.ts":
							/*!************************************!*\
							  !*** ./src/utils/output-filter.ts ***!
							  \************************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "default", (function() {
									return n
								}));
								var n = function() {
									function e(e, t) {
										this.timelineController = void 0, this.cueRanges = [], this.trackName = void 0, this.startTime = null, this.endTime = null, this.screen = null, this.timelineController = e, this.trackName = t
									}
									var t = e.prototype;
									return t.dispatchCue = function() {
										null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges), this.startTime = null)
									}, t.newCue = function(e, t, r) {
										(null === this.startTime || this.startTime > e) && (this.startTime = e), this.endTime = t, this.screen = r, this.timelineController.createCaptionsTrack(this.trackName)
									}, t.reset = function() {
										this.cueRanges = [], this.startTime = null
									}, e
								}()
							},
						"./src/utils/texttrack-utils.ts":
							/*!**************************************!*\
							  !*** ./src/utils/texttrack-utils.ts ***!
							  \**************************************/
							/*! exports provided: sendAddTrackEvent, addCueToTrack, clearCurrentCues, removeCuesInRange, getCuesInRange */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "sendAddTrackEvent", (function() {
									return i
								})), r.d(t, "addCueToTrack", (function() {
									return a
								})), r.d(t, "clearCurrentCues", (function() {
									return s
								})), r.d(t, "removeCuesInRange", (function() {
									return o
								})), r.d(t, "getCuesInRange", (function() {
									return l
								}));
								var n = r( /*! ./logger */ "./src/utils/logger.ts");

								function i(e, t) {
									var r;
									try {
										r = new Event("addtrack")
									} catch (e) {
										(r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
									}
									r.track = e, t.dispatchEvent(r)
								}

								function a(e, t) {
									var r = e.mode;
									if ("disabled" === r && (e.mode = "hidden"), e.cues && !e.cues.getCueById(t.id)) try {
										if (e.addCue(t), !e.cues.getCueById(t.id)) throw new Error("addCue is failed for: " + t)
									} catch (r) {
										n.logger.debug("[texttrack-utils]: " + r);
										var i = new self.TextTrackCue(t.startTime, t.endTime, t.text);
										i.id = t.id, e.addCue(i)
									}
									"disabled" === r && (e.mode = r)
								}

								function s(e) {
									var t = e.mode;
									if ("disabled" === t && (e.mode = "hidden"), e.cues)
										for (var r = e.cues.length; r--;) e.removeCue(e.cues[r]);
									"disabled" === t && (e.mode = t)
								}

								function o(e, t, r) {
									var n = e.mode;
									if ("disabled" === n && (e.mode = "hidden"), e.cues && e.cues.length > 0)
										for (var i = l(e.cues, t, r), a = 0; a < i.length; a++) e.removeCue(i[a]);
									"disabled" === n && (e.mode = n)
								}

								function l(e, t, r) {
									var n = [],
										i = function(e, t) {
											if (t < e[0].startTime) return 0;
											var r = e.length - 1;
											if (t > e[r].endTime) return -1;
											for (var n = 0, i = r; n <= i;) {
												var a = Math.floor((i + n) / 2);
												if (t < e[a].startTime) i = a - 1;
												else {
													if (!(t > e[a].startTime && n < r)) return a;
													n = a + 1
												}
											}
											return e[n].startTime - t < t - e[i].startTime ? n : i
										}(e, t);
									if (i > -1)
										for (var a = i, s = e.length; a < s; a++) {
											var o = e[a];
											if (o.startTime >= t && o.endTime <= r) n.push(o);
											else if (o.startTime > r) return n
										}
									return n
								}
							},
						"./src/utils/time-ranges.ts":
							/*!**********************************!*\
							  !*** ./src/utils/time-ranges.ts ***!
							  \**********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), t.default = {
									toString: function(e) {
										for (var t = "", r = e.length, n = 0; n < r; n++) t += "[" + e.start(n).toFixed(3) + "," + e.end(n).toFixed(3) + "]";
										return t
									}
								}
							},
						"./src/utils/timescale-conversion.ts":
							/*!*******************************************!*\
							  !*** ./src/utils/timescale-conversion.ts ***!
							  \*******************************************/
							/*! exports provided: toTimescaleFromBase, toTimescaleFromScale, toMsFromMpegTsClock, toMpegTsClockFromTimescale */
							function(e, t, r) {
								"use strict";

								function n(e, t, r, n) {
									void 0 === r && (r = 1), void 0 === n && (n = !1);
									var i = e * t * r;
									return n ? Math.round(i) : i
								}

								function i(e, t, r, i) {
									return void 0 === r && (r = 1), void 0 === i && (i = !1), n(e, t, 1 / r, i)
								}

								function a(e, t) {
									return void 0 === t && (t = !1), n(e, 1e3, 1 / 9e4, t)
								}

								function s(e, t) {
									return void 0 === t && (t = 1), n(e, 9e4, 1 / t)
								}
								r.r(t), r.d(t, "toTimescaleFromBase", (function() {
									return n
								})), r.d(t, "toTimescaleFromScale", (function() {
									return i
								})), r.d(t, "toMsFromMpegTsClock", (function() {
									return a
								})), r.d(t, "toMpegTsClockFromTimescale", (function() {
									return s
								}))
							},
						"./src/utils/typed-array.ts":
							/*!**********************************!*\
							  !*** ./src/utils/typed-array.ts ***!
							  \**********************************/
							/*! exports provided: sliceUint8 */
							function(e, t, r) {
								"use strict";

								function n(e, t, r) {
									return Uint8Array.prototype.slice ? e.slice(t, r) : new Uint8Array(Array.prototype.slice.call(e, t, r))
								}
								r.r(t), r.d(t, "sliceUint8", (function() {
									return n
								}))
							},
						"./src/utils/vttcue.ts":
							/*!*****************************!*\
							  !*** ./src/utils/vttcue.ts ***!
							  \*****************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t), t.default = function() {
									if ("undefined" != typeof self && self.VTTCue) return self.VTTCue;
									var e = ["", "lr", "rl"],
										t = ["start", "middle", "end", "left", "right"];

									function r(e, t) {
										if ("string" != typeof t) return !1;
										if (!Array.isArray(e)) return !1;
										var r = t.toLowerCase();
										return !!~e.indexOf(r) && r
									}

									function n(e) {
										return r(t, e)
									}

									function i(e) {
										for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
										for (var i = 1; i < arguments.length; i++) {
											var a = arguments[i];
											for (var s in a) e[s] = a[s]
										}
										return e
									}

									function a(t, a, s) {
										var o = this,
											l = {
												enumerable: !0
											};
										o.hasBeenReset = !1;
										var u = "",
											c = !1,
											d = t,
											f = a,
											h = s,
											p = null,
											g = "",
											v = !0,
											m = "auto",
											y = "start",
											E = 50,
											b = "middle",
											T = 50,
											S = "middle";
										Object.defineProperty(o, "id", i({}, l, {
											get: function() {
												return u
											},
											set: function(e) {
												u = "" + e
											}
										})), Object.defineProperty(o, "pauseOnExit", i({}, l, {
											get: function() {
												return c
											},
											set: function(e) {
												c = !!e
											}
										})), Object.defineProperty(o, "startTime", i({}, l, {
											get: function() {
												return d
											},
											set: function(e) {
												if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
												d = e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "endTime", i({}, l, {
											get: function() {
												return f
											},
											set: function(e) {
												if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
												f = e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "text", i({}, l, {
											get: function() {
												return h
											},
											set: function(e) {
												h = "" + e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "region", i({}, l, {
											get: function() {
												return p
											},
											set: function(e) {
												p = e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "vertical", i({}, l, {
											get: function() {
												return g
											},
											set: function(t) {
												var n = function(t) {
													return r(e, t)
												}(t);
												if (!1 === n) throw new SyntaxError("An invalid or illegal string was specified.");
												g = n, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "snapToLines", i({}, l, {
											get: function() {
												return v
											},
											set: function(e) {
												v = !!e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "line", i({}, l, {
											get: function() {
												return m
											},
											set: function(e) {
												if ("number" != typeof e && "auto" !== e) throw new SyntaxError("An invalid number or illegal string was specified.");
												m = e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "lineAlign", i({}, l, {
											get: function() {
												return y
											},
											set: function(e) {
												var t = n(e);
												if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
												y = t, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "position", i({}, l, {
											get: function() {
												return E
											},
											set: function(e) {
												if (e < 0 || e > 100) throw new Error("Position must be between 0 and 100.");
												E = e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "positionAlign", i({}, l, {
											get: function() {
												return b
											},
											set: function(e) {
												var t = n(e);
												if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
												b = t, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "size", i({}, l, {
											get: function() {
												return T
											},
											set: function(e) {
												if (e < 0 || e > 100) throw new Error("Size must be between 0 and 100.");
												T = e, this.hasBeenReset = !0
											}
										})), Object.defineProperty(o, "align", i({}, l, {
											get: function() {
												return S
											},
											set: function(e) {
												var t = n(e);
												if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
												S = t, this.hasBeenReset = !0
											}
										})), o.displayState = void 0
									}
									return a.prototype.getCueAsHTML = function() {
										return self.WebVTT.convertCueToDOMTree(self, this.text)
									}, a
								}()
							},
						"./src/utils/vttparser.ts":
							/*!********************************!*\
							  !*** ./src/utils/vttparser.ts ***!
							  \********************************/
							/*! exports provided: parseTimeStamp, fixLineBreaks, VTTParser */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "parseTimeStamp", (function() {
									return a
								})), r.d(t, "fixLineBreaks", (function() {
									return d
								})), r.d(t, "VTTParser", (function() {
									return f
								}));
								var n = r( /*! ./vttcue */ "./src/utils/vttcue.ts"),
									i = function() {
										function e() {}
										return e.prototype.decode = function(e, t) {
											if (!e) return "";
											if ("string" != typeof e) throw new Error("Error - expected string data.");
											return decodeURIComponent(encodeURIComponent(e))
										}, e
									}();

								function a(e) {
									function t(e, t, r, n) {
										return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + parseFloat(n || 0)
									}
									var r = e.match(/^(?:(\d+):)?(\d{2}):(\d{2})(\.\d+)?/);
									return r ? parseFloat(r[2]) > 59 ? t(r[2], r[3], 0, r[4]) : t(r[1], r[2], r[3], r[4]) : null
								}
								var s = function() {
									function e() {
										this.values = Object.create(null)
									}
									var t = e.prototype;
									return t.set = function(e, t) {
										this.get(e) || "" === t || (this.values[e] = t)
									}, t.get = function(e, t, r) {
										return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
									}, t.has = function(e) {
										return e in this.values
									}, t.alt = function(e, t, r) {
										for (var n = 0; n < r.length; ++n)
											if (t === r[n]) {
												this.set(e, t);
												break
											}
									}, t.integer = function(e, t) {
										/^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
									}, t.percent = function(e, t) {
										if (/^([\d]{1,3})(\.[\d]*)?%$/.test(t)) {
											var r = parseFloat(t);
											if (r >= 0 && r <= 100) return this.set(e, r), !0
										}
										return !1
									}, e
								}();

								function o(e, t, r, n) {
									var i = n ? e.split(n) : [e];
									for (var a in i)
										if ("string" == typeof i[a]) {
											var s = i[a].split(r);
											2 === s.length && t(s[0], s[1])
										}
								}
								var l = new n.default(0, 0, ""),
									u = "middle" === l.align ? "middle" : "center";

								function c(e, t, r) {
									var n = e;

									function i() {
										var t = a(e);
										if (null === t) throw new Error("Malformed timestamp: " + n);
										return e = e.replace(/^[^\sa-zA-Z-]+/, ""), t
									}

									function c() {
										e = e.replace(/^\s+/, "")
									}
									if (c(), t.startTime = i(), c(), "--\x3e" !== e.substr(0, 3)) throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
									e = e.substr(3), c(), t.endTime = i(), c(),
										function(e, t) {
											var n = new s;
											o(e, (function(e, t) {
												var i;
												switch (e) {
													case "region":
														for (var a = r.length - 1; a >= 0; a--)
															if (r[a].id === t) {
																n.set(e, r[a].region);
																break
															} break;
													case "vertical":
														n.alt(e, t, ["rl", "lr"]);
														break;
													case "line":
														i = t.split(","), n.integer(e, i[0]), n.percent(e, i[0]) && n.set("snapToLines", !1), n.alt(e, i[0], ["auto"]), 2 === i.length && n.alt("lineAlign", i[1], ["start", u, "end"]);
														break;
													case "position":
														i = t.split(","), n.percent(e, i[0]), 2 === i.length && n.alt("positionAlign", i[1], ["start", u, "end", "line-left", "line-right", "auto"]);
														break;
													case "size":
														n.percent(e, t);
														break;
													case "align":
														n.alt(e, t, ["start", u, "end", "left", "right"])
												}
											}), /:/, /\s/), t.region = n.get("region", null), t.vertical = n.get("vertical", "");
											var i = n.get("line", "auto");
											"auto" === i && -1 === l.line && (i = -1), t.line = i, t.lineAlign = n.get("lineAlign", "start"), t.snapToLines = n.get("snapToLines", !0), t.size = n.get("size", 100), t.align = n.get("align", u);
											var a = n.get("position", "auto");
											"auto" === a && 50 === l.position && (a = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50), t.position = a
										}(e, t)
								}

								function d(e) {
									return e.replace(/<br(?: \/)?>/gi, "\n")
								}
								var f = function() {
									function e() {
										this.state = "INITIAL", this.buffer = "", this.decoder = new i, this.regionList = [], this.cue = null, this.oncue = void 0, this.onparsingerror = void 0, this.onflush = void 0
									}
									var t = e.prototype;
									return t.parse = function(e) {
										var t = this;

										function r() {
											var e = t.buffer,
												r = 0;
											for (e = d(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];) ++r;
											var n = e.substr(0, r);
											return "\r" === e[r] && ++r, "\n" === e[r] && ++r, t.buffer = e.substr(r), n
										}
										e && (t.buffer += t.decoder.decode(e, {
											stream: !0
										}));
										try {
											var i = "";
											if ("INITIAL" === t.state) {
												if (!/\r\n|\n/.test(t.buffer)) return this;
												var a = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
												if (!a || !a[0]) throw new Error("Malformed WebVTT signature.");
												t.state = "HEADER"
											}
											for (var s = !1; t.buffer;) {
												if (!/\r\n|\n/.test(t.buffer)) return this;
												switch (s ? s = !1 : i = r(), t.state) {
													case "HEADER":
														/:/.test(i) ? o(i, (function(e, t) {}), /:/) : i || (t.state = "ID");
														continue;
													case "NOTE":
														i || (t.state = "ID");
														continue;
													case "ID":
														if (/^NOTE($|[ \t])/.test(i)) {
															t.state = "NOTE";
															break
														}
														if (!i) continue;
														if (t.cue = new n.default(0, 0, ""), t.state = "CUE", -1 === i.indexOf("--\x3e")) {
															t.cue.id = i;
															continue
														}
														case "CUE":
															if (!t.cue) {
																t.state = "BADCUE";
																continue
															}
															try {
																c(i, t.cue, t.regionList)
															} catch (e) {
																t.cue = null, t.state = "BADCUE";
																continue
															}
															t.state = "CUETEXT";
															continue;
														case "CUETEXT":
															var l = -1 !== i.indexOf("--\x3e");
															if (!i || l && (s = !0)) {
																t.oncue && t.cue && t.oncue(t.cue), t.cue = null, t.state = "ID";
																continue
															}
															if (null === t.cue) continue;
															t.cue.text && (t.cue.text += "\n"), t.cue.text += i;
															continue;
														case "BADCUE":
															i || (t.state = "ID")
												}
											}
										} catch (e) {
											"CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue), t.cue = null, t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
										}
										return this
									}, t.flush = function() {
										var e = this;
										try {
											if ((e.cue || "HEADER" === e.state) && (e.buffer += "\n\n", e.parse()), "INITIAL" === e.state || "BADWEBVTT" === e.state) throw new Error("Malformed WebVTT signature.")
										} catch (t) {
											e.onparsingerror && e.onparsingerror(t)
										}
										return e.onflush && e.onflush(), this
									}, e
								}()
							},
						"./src/utils/webvtt-parser.ts":
							/*!************************************!*\
							  !*** ./src/utils/webvtt-parser.ts ***!
							  \************************************/
							/*! exports provided: generateCueId, parseWebVTT */
							function(e, t, r) {
								"use strict";
								r.r(t), r.d(t, "generateCueId", (function() {
									return d
								})), r.d(t, "parseWebVTT", (function() {
									return f
								}));
								var n = r( /*! ./src/polyfills/number */ "./src/polyfills/number.ts"),
									i = r( /*! ./vttparser */ "./src/utils/vttparser.ts"),
									a = r( /*! ../demux/id3 */ "./src/demux/id3.ts"),
									s = r( /*! ./timescale-conversion */ "./src/utils/timescale-conversion.ts"),
									o = r( /*! ../remux/mp4-remuxer */ "./src/remux/mp4-remuxer.ts"),
									l = /\r\n|\n\r|\n|\r/g,
									u = function(e, t, r) {
										return void 0 === r && (r = 0), e.substr(r, t.length) === t
									},
									c = function(e) {
										for (var t = 5381, r = e.length; r;) t = 33 * t ^ e.charCodeAt(--r);
										return (t >>> 0).toString()
									};

								function d(e, t, r) {
									return c(e.toString()) + c(t.toString()) + c(r)
								}

								function f(e, t, r, c, f, h, p, g) {
									var v, m = new i.VTTParser,
										y = Object(a.utf8ArrayToStr)(new Uint8Array(e)).trim().replace(l, "\n").split("\n"),
										E = [],
										b = Object(s.toMpegTsClockFromTimescale)(t, r),
										T = "00:00.000",
										S = 0,
										k = 0,
										w = !0,
										L = !1;
									m.oncue = function(e) {
										var t = c[f],
											r = c.ccOffset,
											n = (S - b) / 9e4;
										if (null != t && t.new && (void 0 !== k ? r = c.ccOffset = t.start : function(e, t, r) {
												var n = e[t],
													i = e[n.prevCC];
												if (!i || !i.new && n.new) return e.ccOffset = e.presentationOffset = n.start, void(n.new = !1);
												for (; null !== (a = i) && void 0 !== a && a.new;) {
													var a;
													e.ccOffset += n.start - i.start, n.new = !1, i = e[(n = i).prevCC]
												}
												e.presentationOffset = r
											}(c, f, n)), n && (r = n - c.presentationOffset), L) {
											var i = e.endTime - e.startTime,
												a = Object(o.normalizePts)(9e4 * (e.startTime + r - k), 9e4 * h) / 9e4;
											e.startTime = a, e.endTime = a + i
										}
										var s = e.text.trim();
										e.text = decodeURIComponent(encodeURIComponent(s)), e.id || (e.id = d(e.startTime, e.endTime, s)), e.endTime > 0 && E.push(e)
									}, m.onparsingerror = function(e) {
										v = e
									}, m.onflush = function() {
										v ? g(v) : p(E)
									}, y.forEach((function(e) {
										if (w) {
											if (u(e, "X-TIMESTAMP-MAP=")) {
												w = !1, L = !0, e.substr(16).split(",").forEach((function(e) {
													u(e, "LOCAL:") ? T = e.substr(6) : u(e, "MPEGTS:") && (S = parseInt(e.substr(7)))
												}));
												try {
													k = function(e) {
														var t = parseInt(e.substr(-3)),
															r = parseInt(e.substr(-6, 2)),
															i = parseInt(e.substr(-9, 2)),
															a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
														if (!(Object(n.isFiniteNumber)(t) && Object(n.isFiniteNumber)(r) && Object(n.isFiniteNumber)(i) && Object(n.isFiniteNumber)(a))) throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
														return t += 1e3 * r, (t += 6e4 * i) + 36e5 * a
													}(T) / 1e3
												} catch (e) {
													L = !1, v = e
												}
												return
											}
											"" === e && (w = !1)
										}
										m.parse(e + "\n")
									})), m.flush()
								}
							},
						"./src/utils/xhr-loader.ts":
							/*!*********************************!*\
							  !*** ./src/utils/xhr-loader.ts ***!
							  \*********************************/
							/*! exports provided: default */
							function(e, t, r) {
								"use strict";
								r.r(t);
								var n = r( /*! ../utils/logger */ "./src/utils/logger.ts"),
									i = r( /*! ../loader/load-stats */ "./src/loader/load-stats.ts"),
									a = /^age:\s*[\d.]+\s*$/m,
									s = function() {
										function e(e) {
											this.xhrSetup = void 0, this.requestTimeout = void 0, this.retryTimeout = void 0, this.retryDelay = void 0, this.config = null, this.callbacks = null, this.context = void 0, this.loader = null, this.stats = void 0, this.xhrSetup = e ? e.xhrSetup : null, this.stats = new i.LoadStats, this.retryDelay = 0
										}
										var t = e.prototype;
										return t.destroy = function() {
											this.callbacks = null, this.abortInternal(), this.loader = null, this.config = null
										}, t.abortInternal = function() {
											var e = this.loader;
											self.clearTimeout(this.requestTimeout), self.clearTimeout(this.retryTimeout), e && (e.onreadystatechange = null, e.onprogress = null, 4 !== e.readyState && (this.stats.aborted = !0, e.abort()))
										}, t.abort = function() {
											var e;
											this.abortInternal(), null !== (e = this.callbacks) && void 0 !== e && e.onAbort && this.callbacks.onAbort(this.stats, this.context, this.loader)
										}, t.load = function(e, t, r) {
											if (this.stats.loading.start) throw new Error("Loader can only be used once.");
											this.stats.loading.start = self.performance.now(), this.context = e, this.config = t, this.callbacks = r, this.retryDelay = t.retryDelay, this.loadInternal()
										}, t.loadInternal = function() {
											var e = this.config,
												t = this.context;
											if (e) {
												var r = this.loader = new self.XMLHttpRequest,
													n = this.stats;
												n.loading.first = 0, n.loaded = 0;
												var i = this.xhrSetup;
												try {
													if (i) try {
														i(r, t.url)
													} catch (e) {
														r.open("GET", t.url, !0), i(r, t.url)
													}
													r.readyState || r.open("GET", t.url, !0);
													var a = this.context.headers;
													if (a)
														for (var s in a) r.setRequestHeader(s, a[s])
												} catch (e) {
													return void this.callbacks.onError({
														code: r.status,
														text: e.message
													}, t, r)
												}
												t.rangeEnd && r.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)), r.onreadystatechange = this.readystatechange.bind(this), r.onprogress = this.loadprogress.bind(this), r.responseType = t.responseType, self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), e.timeout), r.send()
											}
										}, t.readystatechange = function() {
											var e = this.context,
												t = this.loader,
												r = this.stats;
											if (e && t) {
												var i = t.readyState,
													a = this.config;
												if (!r.aborted && i >= 2)
													if (self.clearTimeout(this.requestTimeout), 0 === r.loading.first && (r.loading.first = Math.max(self.performance.now(), r.loading.start)), 4 === i) {
														t.onreadystatechange = null, t.onprogress = null;
														var s = t.status;
														if (s >= 200 && s < 300) {
															var o, l;
															if (r.loading.end = Math.max(self.performance.now(), r.loading.first), l = "arraybuffer" === e.responseType ? (o = t.response).byteLength : (o = t.responseText).length, r.loaded = r.total = l, !this.callbacks) return;
															var u = this.callbacks.onProgress;
															if (u && u(r, e, o, t), !this.callbacks) return;
															var c = {
																url: t.responseURL,
																data: o
															};
															this.callbacks.onSuccess(c, r, e, t)
														} else r.retry >= a.maxRetry || s >= 400 && s < 499 ? (n.logger.error(s + " while loading " + e.url), this.callbacks.onError({
															code: s,
															text: t.statusText
														}, e, t)) : (n.logger.warn(s + " while loading " + e.url + ", retrying in " + this.retryDelay + "..."), this.abortInternal(), this.loader = null, self.clearTimeout(this.retryTimeout), this.retryTimeout = self.setTimeout(this.loadInternal.bind(this), this.retryDelay), this.retryDelay = Math.min(2 * this.retryDelay, a.maxRetryDelay), r.retry++)
													} else self.clearTimeout(this.requestTimeout), this.requestTimeout = self.setTimeout(this.loadtimeout.bind(this), a.timeout)
											}
										}, t.loadtimeout = function() {
											n.logger.warn("timeout while loading " + this.context.url);
											var e = this.callbacks;
											e && (this.abortInternal(), e.onTimeout(this.stats, this.context, this.loader))
										}, t.loadprogress = function(e) {
											var t = this.stats;
											t.loaded = e.loaded, e.lengthComputable && (t.total = e.total)
										}, t.getCacheAge = function() {
											var e = null;
											if (this.loader && a.test(this.loader.getAllResponseHeaders())) {
												var t = this.loader.getResponseHeader("age");
												e = t ? parseFloat(t) : null
											}
											return e
										}, e
									}();
								t.default = s
							}
					}).default
				}, e.exports = t())
			},
			418: e => {
				"use strict";
				/*
				object-assign
				(c) Sindre Sorhus
				@license MIT
				*/
				var t = Object.getOwnPropertySymbols,
					r = Object.prototype.hasOwnProperty,
					n = Object.prototype.propertyIsEnumerable;

				function i(e) {
					if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
					return Object(e)
				}
				e.exports = function() {
					try {
						if (!Object.assign) return !1;
						var e = new String("abc");
						if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
						for (var t = {}, r = 0; r < 10; r++) t["_" + String.fromCharCode(r)] = r;
						if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
								return t[e]
							})).join("")) return !1;
						var n = {};
						return "abcdefghijklmnopqrst".split("").forEach((function(e) {
							n[e] = e
						})), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
					} catch (e) {
						return !1
					}
				}() ? Object.assign : function(e, a) {
					for (var s, o, l = i(e), u = 1; u < arguments.length; u++) {
						for (var c in s = Object(arguments[u])) r.call(s, c) && (l[c] = s[c]);
						if (t) {
							o = t(s);
							for (var d = 0; d < o.length; d++) n.call(s, o[d]) && (l[o[d]] = s[o[d]])
						}
					}
					return l
				}
			},
			408: (e, t, r) => {
				"use strict";
				/** @license React v17.0.2
				 * react.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				var n = r(418),
					i = 60103,
					a = 60106;
				t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
				var s = 60109,
					o = 60110,
					l = 60112;
				t.Suspense = 60113;
				var u = 60115,
					c = 60116;
				if ("function" == typeof Symbol && Symbol.for) {
					var d = Symbol.for;
					i = d("react.element"), a = d("react.portal"), t.Fragment = d("react.fragment"), t.StrictMode = d("react.strict_mode"), t.Profiler = d("react.profiler"), s = d("react.provider"), o = d("react.context"), l = d("react.forward_ref"), t.Suspense = d("react.suspense"), u = d("react.memo"), c = d("react.lazy")
				}
				var f = "function" == typeof Symbol && Symbol.iterator;

				function h(e) {
					for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 1; r < arguments.length; r++) t += "&args[]=" + encodeURIComponent(arguments[r]);
					return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
				}
				var p = {
						isMounted: function() {
							return !1
						},
						enqueueForceUpdate: function() {},
						enqueueReplaceState: function() {},
						enqueueSetState: function() {}
					},
					g = {};

				function v(e, t, r) {
					this.props = e, this.context = t, this.refs = g, this.updater = r || p
				}

				function m() {}

				function y(e, t, r) {
					this.props = e, this.context = t, this.refs = g, this.updater = r || p
				}
				v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
					if ("object" != typeof e && "function" != typeof e && null != e) throw Error(h(85));
					this.updater.enqueueSetState(this, e, t, "setState")
				}, v.prototype.forceUpdate = function(e) {
					this.updater.enqueueForceUpdate(this, e, "forceUpdate")
				}, m.prototype = v.prototype;
				var E = y.prototype = new m;
				E.constructor = y, n(E, v.prototype), E.isPureReactComponent = !0;
				var b = {
						current: null
					},
					T = Object.prototype.hasOwnProperty,
					S = {
						key: !0,
						ref: !0,
						__self: !0,
						__source: !0
					};

				function k(e, t, r) {
					var n, a = {},
						s = null,
						o = null;
					if (null != t)
						for (n in void 0 !== t.ref && (o = t.ref), void 0 !== t.key && (s = "" + t.key), t) T.call(t, n) && !S.hasOwnProperty(n) && (a[n] = t[n]);
					var l = arguments.length - 2;
					if (1 === l) a.children = r;
					else if (1 < l) {
						for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
						a.children = u
					}
					if (e && e.defaultProps)
						for (n in l = e.defaultProps) void 0 === a[n] && (a[n] = l[n]);
					return {
						$$typeof: i,
						type: e,
						key: s,
						ref: o,
						props: a,
						_owner: b.current
					}
				}

				function w(e) {
					return "object" == typeof e && null !== e && e.$$typeof === i
				}
				var L = /\/+/g;

				function A(e, t) {
					return "object" == typeof e && null !== e && null != e.key ? function(e) {
						var t = {
							"=": "=0",
							":": "=2"
						};
						return "$" + e.replace(/[=:]/g, (function(e) {
							return t[e]
						}))
					}("" + e.key) : t.toString(36)
				}

				function D(e, t, r, n, s) {
					var o = typeof e;
					"undefined" !== o && "boolean" !== o || (e = null);
					var l = !1;
					if (null === e) l = !0;
					else switch (o) {
						case "string":
						case "number":
							l = !0;
							break;
						case "object":
							switch (e.$$typeof) {
								case i:
								case a:
									l = !0
							}
					}
					if (l) return s = s(l = e), e = "" === n ? "." + A(l, 0) : n, Array.isArray(s) ? (r = "", null != e && (r = e.replace(L, "$&/") + "/"), D(s, t, r, "", (function(e) {
						return e
					}))) : null != s && (w(s) && (s = function(e, t) {
						return {
							$$typeof: i,
							type: e.type,
							key: t,
							ref: e.ref,
							props: e.props,
							_owner: e._owner
						}
					}(s, r + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(L, "$&/") + "/") + e)), t.push(s)), 1;
					if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(e))
						for (var u = 0; u < e.length; u++) {
							var c = n + A(o = e[u], u);
							l += D(o, t, r, c, s)
						} else if (c = function(e) {
								return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
							}(e), "function" == typeof c)
							for (e = c.call(e), u = 0; !(o = e.next()).done;) l += D(o = o.value, t, r, c = n + A(o, u++), s);
						else if ("object" === o) throw t = "" + e, Error(h(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
					return l
				}

				function C(e, t, r) {
					if (null == e) return e;
					var n = [],
						i = 0;
					return D(e, n, "", "", (function(e) {
						return t.call(r, e, i++)
					})), n
				}

				function _(e) {
					if (-1 === e._status) {
						var t = e._result;
						t = t(), e._status = 0, e._result = t, t.then((function(t) {
							0 === e._status && (t = t.default, e._status = 1, e._result = t)
						}), (function(t) {
							0 === e._status && (e._status = 2, e._result = t)
						}))
					}
					if (1 === e._status) return e._result;
					throw e._result
				}
				var R = {
					current: null
				};

				function x() {
					var e = R.current;
					if (null === e) throw Error(h(321));
					return e
				}
				var I = {
					ReactCurrentDispatcher: R,
					ReactCurrentBatchConfig: {
						transition: 0
					},
					ReactCurrentOwner: b,
					IsSomeRendererActing: {
						current: !1
					},
					assign: n
				};
				t.Children = {
					map: C,
					forEach: function(e, t, r) {
						C(e, (function() {
							t.apply(this, arguments)
						}), r)
					},
					count: function(e) {
						var t = 0;
						return C(e, (function() {
							t++
						})), t
					},
					toArray: function(e) {
						return C(e, (function(e) {
							return e
						})) || []
					},
					only: function(e) {
						if (!w(e)) throw Error(h(143));
						return e
					}
				}, t.Component = v, t.PureComponent = y, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function(e, t, r) {
					if (null == e) throw Error(h(267, e));
					var a = n({}, e.props),
						s = e.key,
						o = e.ref,
						l = e._owner;
					if (null != t) {
						if (void 0 !== t.ref && (o = t.ref, l = b.current), void 0 !== t.key && (s = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
						for (c in t) T.call(t, c) && !S.hasOwnProperty(c) && (a[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c])
					}
					var c = arguments.length - 2;
					if (1 === c) a.children = r;
					else if (1 < c) {
						u = Array(c);
						for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
						a.children = u
					}
					return {
						$$typeof: i,
						type: e.type,
						key: s,
						ref: o,
						props: a,
						_owner: l
					}
				}, t.createContext = function(e, t) {
					return void 0 === t && (t = null), (e = {
						$$typeof: o,
						_calculateChangedBits: t,
						_currentValue: e,
						_currentValue2: e,
						_threadCount: 0,
						Provider: null,
						Consumer: null
					}).Provider = {
						$$typeof: s,
						_context: e
					}, e.Consumer = e
				}, t.createElement = k, t.createFactory = function(e) {
					var t = k.bind(null, e);
					return t.type = e, t
				}, t.createRef = function() {
					return {
						current: null
					}
				}, t.forwardRef = function(e) {
					return {
						$$typeof: l,
						render: e
					}
				}, t.isValidElement = w, t.lazy = function(e) {
					return {
						$$typeof: c,
						_payload: {
							_status: -1,
							_result: e
						},
						_init: _
					}
				}, t.memo = function(e, t) {
					return {
						$$typeof: u,
						type: e,
						compare: void 0 === t ? null : t
					}
				}, t.useCallback = function(e, t) {
					return x().useCallback(e, t)
				}, t.useContext = function(e, t) {
					return x().useContext(e, t)
				}, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
					return x().useEffect(e, t)
				}, t.useImperativeHandle = function(e, t, r) {
					return x().useImperativeHandle(e, t, r)
				}, t.useLayoutEffect = function(e, t) {
					return x().useLayoutEffect(e, t)
				}, t.useMemo = function(e, t) {
					return x().useMemo(e, t)
				}, t.useReducer = function(e, t, r) {
					return x().useReducer(e, t, r)
				}, t.useRef = function(e) {
					return x().useRef(e)
				}, t.useState = function(e) {
					return x().useState(e)
				}, t.version = "17.0.2"
			},
			294: (e, t, r) => {
				"use strict";
				e.exports = r(408)
			},
			53: (e, t) => {
				"use strict";
				/** @license React v0.20.2
				 * scheduler.production.min.js
				 *
				 * Copyright (c) Facebook, Inc. and its affiliates.
				 *
				 * This source code is licensed under the MIT license found in the
				 * LICENSE file in the root directory of this source tree.
				 */
				var r, n, i, a;
				if ("object" == typeof performance && "function" == typeof performance.now) {
					var s = performance;
					t.unstable_now = function() {
						return s.now()
					}
				} else {
					var o = Date,
						l = o.now();
					t.unstable_now = function() {
						return o.now() - l
					}
				}
				if ("undefined" == typeof window || "function" != typeof MessageChannel) {
					var u = null,
						c = null,
						d = function() {
							if (null !== u) try {
								var e = t.unstable_now();
								u(!0, e), u = null
							} catch (e) {
								throw setTimeout(d, 0), e
							}
						};
					r = function(e) {
						null !== u ? setTimeout(r, 0, e) : (u = e, setTimeout(d, 0))
					}, n = function(e, t) {
						c = setTimeout(e, t)
					}, i = function() {
						clearTimeout(c)
					}, t.unstable_shouldYield = function() {
						return !1
					}, a = t.unstable_forceFrameRate = function() {}
				} else {
					var f = window.setTimeout,
						h = window.clearTimeout;
					if ("undefined" != typeof console) {
						var p = window.cancelAnimationFrame;
						"function" != typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" != typeof p && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
					}
					var g = !1,
						v = null,
						m = -1,
						y = 5,
						E = 0;
					t.unstable_shouldYield = function() {
						return t.unstable_now() >= E
					}, a = function() {}, t.unstable_forceFrameRate = function(e) {
						0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : y = 0 < e ? Math.floor(1e3 / e) : 5
					};
					var b = new MessageChannel,
						T = b.port2;
					b.port1.onmessage = function() {
						if (null !== v) {
							var e = t.unstable_now();
							E = e + y;
							try {
								v(!0, e) ? T.postMessage(null) : (g = !1, v = null)
							} catch (e) {
								throw T.postMessage(null), e
							}
						} else g = !1
					}, r = function(e) {
						v = e, g || (g = !0, T.postMessage(null))
					}, n = function(e, r) {
						m = f((function() {
							e(t.unstable_now())
						}), r)
					}, i = function() {
						h(m), m = -1
					}
				}

				function S(e, t) {
					var r = e.length;
					e.push(t);
					e: for (;;) {
						var n = r - 1 >>> 1,
							i = e[n];
						if (!(void 0 !== i && 0 < L(i, t))) break e;
						e[n] = t, e[r] = i, r = n
					}
				}

				function k(e) {
					return void 0 === (e = e[0]) ? null : e
				}

				function w(e) {
					var t = e[0];
					if (void 0 !== t) {
						var r = e.pop();
						if (r !== t) {
							e[0] = r;
							e: for (var n = 0, i = e.length; n < i;) {
								var a = 2 * (n + 1) - 1,
									s = e[a],
									o = a + 1,
									l = e[o];
								if (void 0 !== s && 0 > L(s, r)) void 0 !== l && 0 > L(l, s) ? (e[n] = l, e[o] = r, n = o) : (e[n] = s, e[a] = r, n = a);
								else {
									if (!(void 0 !== l && 0 > L(l, r))) break e;
									e[n] = l, e[o] = r, n = o
								}
							}
						}
						return t
					}
					return null
				}

				function L(e, t) {
					var r = e.sortIndex - t.sortIndex;
					return 0 !== r ? r : e.id - t.id
				}
				var A = [],
					D = [],
					C = 1,
					_ = null,
					R = 3,
					x = !1,
					I = !1,
					O = !1;

				function P(e) {
					for (var t = k(D); null !== t;) {
						if (null === t.callback) w(D);
						else {
							if (!(t.startTime <= e)) break;
							w(D), t.sortIndex = t.expirationTime, S(A, t)
						}
						t = k(D)
					}
				}

				function F(e) {
					if (O = !1, P(e), !I)
						if (null !== k(A)) I = !0, r(M);
						else {
							var t = k(D);
							null !== t && n(F, t.startTime - e)
						}
				}

				function M(e, r) {
					I = !1, O && (O = !1, i()), x = !0;
					var a = R;
					try {
						for (P(r), _ = k(A); null !== _ && (!(_.expirationTime > r) || e && !t.unstable_shouldYield());) {
							var s = _.callback;
							if ("function" == typeof s) {
								_.callback = null, R = _.priorityLevel;
								var o = s(_.expirationTime <= r);
								r = t.unstable_now(), "function" == typeof o ? _.callback = o : _ === k(A) && w(A), P(r)
							} else w(A);
							_ = k(A)
						}
						if (null !== _) var l = !0;
						else {
							var u = k(D);
							null !== u && n(F, u.startTime - r), l = !1
						}
						return l
					} finally {
						_ = null, R = a, x = !1
					}
				}
				var N = a;
				t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
					e.callback = null
				}, t.unstable_continueExecution = function() {
					I || x || (I = !0, r(M))
				}, t.unstable_getCurrentPriorityLevel = function() {
					return R
				}, t.unstable_getFirstCallbackNode = function() {
					return k(A)
				}, t.unstable_next = function(e) {
					switch (R) {
						case 1:
						case 2:
						case 3:
							var t = 3;
							break;
						default:
							t = R
					}
					var r = R;
					R = t;
					try {
						return e()
					} finally {
						R = r
					}
				}, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = N, t.unstable_runWithPriority = function(e, t) {
					switch (e) {
						case 1:
						case 2:
						case 3:
						case 4:
						case 5:
							break;
						default:
							e = 3
					}
					var r = R;
					R = e;
					try {
						return t()
					} finally {
						R = r
					}
				}, t.unstable_scheduleCallback = function(e, a, s) {
					var o = t.unstable_now();
					switch ("object" == typeof s && null !== s ? s = "number" == typeof(s = s.delay) && 0 < s ? o + s : o : s = o, e) {
						case 1:
							var l = -1;
							break;
						case 2:
							l = 250;
							break;
						case 5:
							l = 1073741823;
							break;
						case 4:
							l = 1e4;
							break;
						default:
							l = 5e3
					}
					return e = {
						id: C++,
						callback: a,
						priorityLevel: e,
						startTime: s,
						expirationTime: l = s + l,
						sortIndex: -1
					}, s > o ? (e.sortIndex = s, S(D, e), null === k(A) && e === k(D) && (O ? i() : O = !0, n(F, s - o))) : (e.sortIndex = l, S(A, e), I || x || (I = !0, r(M))), e
				}, t.unstable_wrapCallback = function(e) {
					var t = R;
					return function() {
						var r = R;
						R = t;
						try {
							return e.apply(this, arguments)
						} finally {
							R = r
						}
					}
				}
			},
			840: (e, t, r) => {
				"use strict";
				e.exports = r(53)
			},
			379: e => {
				"use strict";
				var t = [];

				function r(e) {
					for (var r = -1, n = 0; n < t.length; n++)
						if (t[n].identifier === e) {
							r = n;
							break
						} return r
				}

				function n(e, n) {
					for (var a = {}, s = [], o = 0; o < e.length; o++) {
						var l = e[o],
							u = n.base ? l[0] + n.base : l[0],
							c = a[u] || 0,
							d = "".concat(u, " ").concat(c);
						a[u] = c + 1;
						var f = r(d),
							h = {
								css: l[1],
								media: l[2],
								sourceMap: l[3],
								supports: l[4],
								layer: l[5]
							};
						if (-1 !== f) t[f].references++, t[f].updater(h);
						else {
							var p = i(h, n);
							n.byIndex = o, t.splice(o, 0, {
								identifier: d,
								updater: p,
								references: 1
							})
						}
						s.push(d)
					}
					return s
				}

				function i(e, t) {
					var r = t.domAPI(t);
					r.update(e);
					return function(t) {
						if (t) {
							if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap && t.supports === e.supports && t.layer === e.layer) return;
							r.update(e = t)
						} else r.remove()
					}
				}
				e.exports = function(e, i) {
					var a = n(e = e || [], i = i || {});
					return function(e) {
						e = e || [];
						for (var s = 0; s < a.length; s++) {
							var o = r(a[s]);
							t[o].references--
						}
						for (var l = n(e, i), u = 0; u < a.length; u++) {
							var c = r(a[u]);
							0 === t[c].references && (t[c].updater(), t.splice(c, 1))
						}
						a = l
					}
				}
			},
			569: e => {
				"use strict";
				var t = {};
				e.exports = function(e, r) {
					var n = function(e) {
						if (void 0 === t[e]) {
							var r = document.querySelector(e);
							if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
								r = r.contentDocument.head
							} catch (e) {
								r = null
							}
							t[e] = r
						}
						return t[e]
					}(e);
					if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					n.appendChild(r)
				}
			},
			216: e => {
				"use strict";
				e.exports = function(e) {
					var t = document.createElement("style");
					return e.setAttributes(t, e.attributes), e.insert(t, e.options), t
				}
			},
			565: (e, t, r) => {
				"use strict";
				e.exports = function(e) {
					var t = r.nc;
					t && e.setAttribute("nonce", t)
				}
			},
			795: e => {
				"use strict";
				e.exports = function(e) {
					var t = e.insertStyleElement(e);
					return {
						update: function(r) {
							! function(e, t, r) {
								var n = "";
								r.supports && (n += "@supports (".concat(r.supports, ") {")), r.media && (n += "@media ".concat(r.media, " {"));
								var i = void 0 !== r.layer;
								i && (n += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), n += r.css, i && (n += "}"), r.media && (n += "}"), r.supports && (n += "}");
								var a = r.sourceMap;
								a && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a)))), " */")), t.styleTagTransform(n, e, t.options)
							}(t, e, r)
						},
						remove: function() {
							! function(e) {
								if (null === e.parentNode) return !1;
								e.parentNode.removeChild(e)
							}(t)
						}
					}
				}
			},
			589: e => {
				"use strict";
				e.exports = function(e, t) {
					if (t.styleSheet) t.styleSheet.cssText = e;
					else {
						for (; t.firstChild;) t.removeChild(t.firstChild);
						t.appendChild(document.createTextNode(e))
					}
				}
			}
		},
		t = {};

	function r(n) {
		var i = t[n];
		if (void 0 !== i) return i.exports;
		var a = t[n] = {
			id: n,
			exports: {}
		};
		return e[n].call(a.exports, a, a.exports, r), a.exports
	}
	r.n = e => {
		var t = e && e.__esModule ? () => e.default : () => e;
		return r.d(t, {
			a: t
		}), t
	}, r.d = (e, t) => {
		for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
			enumerable: !0,
			get: t[n]
		})
	}, r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
		"use strict";
		var e = r(294),
			t = r(60);

		function n(e) {
			for (var t, r = e.length, n = r ^ r, i = 0; r >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), n = 1540483477 * (65535 & n) + ((1540483477 * (n >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), r -= 4, ++i;
			switch (r) {
				case 3:
					n ^= (255 & e.charCodeAt(i + 2)) << 16;
				case 2:
					n ^= (255 & e.charCodeAt(i + 1)) << 8;
				case 1:
					n = 1540483477 * (65535 & (n ^= 255 & e.charCodeAt(i))) + ((1540483477 * (n >>> 16) & 65535) << 16)
			}
			return n = 1540483477 * (65535 & (n ^= n >>> 13)) + ((1540483477 * (n >>> 16) & 65535) << 16), ((n ^= n >>> 15) >>> 0).toString(36)
		}

		function i(e) {
			let t, {
				name: r = "",
				initialState: i,
				actions: a
			} = e;
			return {
				get key() {
					return t || (t = function(e, t, r) {
						return [r, n((r ? "" : Object.keys(t).reduce(((e, r) => e + t[r].toString()), "")) + JSON.stringify(e))].filter(Boolean)
					}(i, a, r))
				},
				initialState: i,
				actions: a
			}
		}
		const a = {
				devtools: !1,
				batchUpdates: !1,
				middlewares: new Set,
				mutator: (e, t) => Object.assign({}, e, t)
			},
			s = (e, t) => function() {
				return e.mutator.actionName = t, e.mutator(...arguments)
			},
			o = new WeakMap,
			l = function(e, t, r, n) {
				return void 0 === r && (r = () => ({})), void 0 === n && (n = null), Object.keys(e).reduce(((i, l) => (i[l] = function(e, t, r, n, i) {
					void 0 === n && (n = () => {}), void 0 === i && (i = {});
					const l = function l(u, c) {
						return void 0 === c && (c = `${r}.dispatch`), u({
							setState: a.devtools ? s(e, c) : e.mutator,
							getState: e.getState,
							get actions() {
								return o.has(t) || o.set(t, console.warn(`react-sweet-state 'actions' property has been deprecated and will be removed in the next mayor. Please check action '${c}' of Store '${e.key}' and use 'dispatch' instead`)), i
							},
							dispatch: l
						}, n())
					};
					return function() {
						return l(t(...arguments), r)
					}
				}(t, e[l], l, r, n || i), i)), {})
			},
			u = Object.prototype.hasOwnProperty,
			c = new WeakMap;

		function d(e, t) {
			if (e === t) return !0;
			if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
			if (Array.isArray(e) && Array.isArray(t)) {
				if (e.length !== t.length) return !1;
				for (let r = 0; r < e.length; r++)
					if (e[r] !== t[r]) return !1;
				return !0
			} {
				if ("" + e != "" + t) return !1;
				let r, n;
				if (c.has(e) ? r = c.get(e) : (r = Object.keys(e), c.set(e, r)), c.has(t) ? n = c.get(t) : (n = Object.keys(t), c.set(t, n)), r.length !== n.length) return !1;
				for (let n = 0; n < r.length; n++)
					if (!u.call(t, r[n]) || e[r[n]] !== t[r[n]]) return !1;
				return !0
			}
		}
		const f = e => t => r => {
				let n;
				const i = e.getState(),
					a = t(i, r, (e => {
						n = e
					}));
				return d(a, i) || e.setState(a), n
			},
			h = (e, t) => Array.from(t).concat(f).reduceRight(((t, r) => r(e)(t)), a.mutator),
			p = (e, t) => {
				const r = window.__REDUX_DEVTOOLS_EXTENSION__.connect(Object.assign({
					name: `Store ${e.key}`,
					serialize: !0
				}, t));
				return r.init(e.getState()), r.subscribe((t => {
					if ("DISPATCH" === t.type) switch (t.payload.type) {
						case "RESET":
							return e.resetState(), void r.init(e.getState());
						case "COMMIT":
							return void r.init(e.getState());
						case "ROLLBACK":
							return e.setState(JSON.parse(t.state)), void r.init(e.getState());
						case "JUMP_TO_STATE":
						case "JUMP_TO_ACTION":
							return void e.setState(JSON.parse(t.state))
					} else if ("ACTION" === t.type) {
						let r = JSON.parse(t.payload);
						e.setState(r.payload)
					}
				})), r
			},
			g = e => function() {
				const t = e(...arguments);
				if (a.devtools && window && window.__REDUX_DEVTOOLS_EXTENSION__) {
					const e = t.mutator;
					let r;
					const n = n => {
						const i = e(n);
						try {
							if (!r) {
								const e = "function" == typeof a.devtools ? a.devtools(t) : {};
								r = p(t, e)
							}
							r.send({
								type: t.mutator.actionName,
								payload: n
							}, t.getState(), {}, t.key)
						} catch (e) {}
						return i
					};
					t.mutator = n
				}
				return t
			};
		var v = r(840);
		const m = {
			scheduling: () => "undefined" != typeof window && "function" == typeof MessageChannel
		};
		let y = !1;

		function E(e) {
			return a.batchUpdates && m.scheduling() && !y ? (y = !0, (0, v.unstable_scheduleCallback)(v.unstable_ImmediatePriority, (function() {
				(0, t.unstable_batchedUpdates)(e), y = !1
			}))) : (0, t.unstable_batchedUpdates)(e)
		}
		const b = [];
		let T;
		const S = g((function(e, t) {
			let r = [],
				n = t;
			const i = {
				key: e,
				getState: () => n,
				setState(e) {
					n = e,
						function(e) {
							if (!a.batchUpdates || !m.scheduling()) return E((() => e()));
							b.includes(e) || b.push(e), T || (T = E((() => {
								let e;
								for (; e = b.shift();) e();
								T = null
							})))
						}(i.notify)
				},
				resetState() {
					i.setState(t)
				},
				notify(e) {
					void 0 === e && (e = i);
					for (let t = 0; t < r.length; t++) r[t](e.getState(), e)
				},
				subscribe: e => (r = r.concat(e), function() {
					r = r.filter((t => t !== e))
				}),
				listeners: () => r
			};
			return i.mutator = h(i, a.middlewares), i
		}));
		const k = new class {
				constructor(e) {
					var t = this;
					void 0 === e && (e = "__global__"), this.stores = new Map, this.initStore = (e, t) => {
						const {
							initialState: r,
							actions: n
						} = e, i = S(t, r), a = {
							storeState: i,
							actions: l(n, i)
						};
						return this.stores.set(t, a), a
					}, this.getStore = function(e, r) {
						void 0 === r && (r = t.defaultScope);
						const n = t.generateKey(e, r);
						return t.stores.get(n) || t.initStore(e, n)
					}, this.deleteStore = function(e, r) {
						void 0 === r && (r = t.defaultScope);
						const n = t.generateKey(e, r);
						t.stores.delete(n)
					}, this.generateKey = (e, t) => `${e.key.join("__")}@${t}`, this.defaultScope = e
				}
			},
			w = e.createContext({
				globalRegistry: k,
				getStore: k.getStore
			}, (() => 0));

		function L(e, t, r) {
			if (null === t || null === r || t.length !== r.length) return !1;
			if (e && 2 === t.length) return t[0] === r[0] && d(t[1], r[1]);
			for (let e = 0; e < t.length; e++)
				if (n = t[e], i = r[e], n !== i) return !1;
			var n, i;
			return !0
		}

		function A(e, t) {
			void 0 === t && (t = !1);
			let r, n = [],
				i = !1;
			return function() {
				if (i && L(t, arguments, n)) return r;
				const a = e.apply(this, arguments);
				return !t && d(a, r) || (r = a, i = !0, n = arguments), r
			}
		}

		function D(e) {
			const t = "function" == typeof e.resultFunc && Array.isArray(e.dependencies);
			return function() {
				for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				const n = t.pop(),
					i = Array.isArray(t[0]) ? t[0] : t,
					a = A((function() {
						return n.apply(null, arguments)
					})),
					s = A((function() {
						const e = [];
						for (let t = 0; t < i.length; t++) e.push(i[t].apply(null, arguments));
						return a.apply(null, e)
					}), !0);
				return s.resultFunc = n, s.dependencies = i, s
			}(t ? e.dependencies : [e => e, (e, t) => t], t ? e.resultFunc : e)
		}
		const C = new WeakMap;
		const _ = () => {},
			R = e => e,
			x = "undefined" != typeof window ? e.useLayoutEffect : e.useEffect;

		function I(t, r) {
			let {
				selector: n
			} = void 0 === r ? {} : r;
			return function(r) {
				const {
					getStore: i
				} = (0, e.useContext)(w), {
					storeState: a,
					actions: s
				} = i(t), o = void 0 !== r, l = n ? (0, e.useMemo)((() => function(e, t, r) {
					if (!r) {
						C.has(t) || C.set(t, new WeakMap);
						const r = C.get(t);
						return r.has(e) || r.set(e, D(e)), r.get(e)
					}
					return D(e)
				}(n, a, o)), [o, a]) : null === n ? _ : R, u = l(a.getState(), r);
				(0, e.useDebugValue)(u);
				const c = (0, e.useState)((() => u))[1],
					d = (0, e.useRef)(r);
				return d.current = r, x((() => {
					let e, t = {};
					const r = (r, n) => {
						if (!t) return;
						if (n !== a) return c({});
						if (l === _) return;
						const i = l(r, d.current);
						i !== e && (c((() => i)), e = i)
					};
					return t.unsubscribe = a.subscribe(r), r(a.getState(), a), () => {
						t.unsubscribe(), t = null
					}
				}), [a]), [u, s]
			}
		}
		const O = localStorage.getItem("favorites"),
			P = O ? JSON.parse(O) : [],
			












F = localStorage.getItem("playlist") || "https://raw.githubusercontent.com/Sidihassan/Sidimad/master/Chan.json",
			M = i({
				initialState: {
					defaultChannels: [],
					iframeChannels: localStorage.getItem("iframe-channels") ? JSON.parse(localStorage.getItem("iframe-channels")) : [],
					favorites: P,
					loading: !1,
					url: F
				},
				actions: {
					addNew: e => ({
						setState: t,
						getState: r
					}) => {
						const n = [...r().favorites];
						e.url.length > 15 && !r().favorites.some((t => t.url === e.url)) && (n.unshift(e), t({
							...r(),
							favorites: n
						}), localStorage.setItem("favorites", JSON.stringify(n)))
					},
					addToFavorites: e => ({
						setState: t,
						getState: r
					}) => {
						const n = [...r().favorites];
						r().favorites.some((t => t.url === e.url)) || (n.unshift(e), t({
							...r(),
							favorites: n
						}), localStorage.setItem("favorites", JSON.stringify(n)))
					},
					removeFromFavorites: e => ({
						setState: t,
						getState: r
					}) => {
						const n = r().favorites.filter((t => t.url !== e.url));
						t({
							...r(),
							favorites: n
						}), localStorage.setItem("favorites", JSON.stringify(n))
					},
					setDefaultChannels: e => ({
						setState: t,
						getState: r
					}) => {
						t({
							...r(),
							defaultChannels: e
						})
					},
					load: e => async ({
						setState: t,
						getState: r
					}) => {
						if (!0 === r().loading) return;
						t({
							...r(),
							loading: !0
						});
						const n = await fetch(e),
							i = await n.json();
						return t({
							...r(),
							loading: !1,
							defaultChannels: i,
							url: e
						}), localStorage.setItem("playlist", e), i
					},
					addNewIframeChannel: e => ({
						setState: t,
						getState: r
					}) => {
						const n = r().iframeChannels || [];
						(n.length < 1 || !n.some((t => t.url === e.url))) && (n.unshift(e), t({
							...r(),
							channels: n
						}), localStorage.setItem("iframe-channels", JSON.stringify(n)), window.location.reload())
					}
				},
				name: "useChannels"
			}),
			N = I(M),
			U = localStorage.getItem("quality") || -1,
			B = localStorage.getItem("current-channel"),
			j = i({
				initialState: {
					...B ? JSON.parse(B) : {
						name: "nagtv",
						type: "m3u8",
						url: "https://admdn2.cdn.mangomolo.com/nagtv/smil:nagtv.stream.smil/chunklist.m3u8"
					},
					qualityIndex: +U,
					qualityLevels: []
				},
				actions: {
					set: e => ({
						setState: t,
						getState: r
					}) => {
						t({
							...r(),
							...e
						}), localStorage.setItem("current-channel", JSON.stringify(e))
					},
					setQualityLevels: e => ({
						setState: t,
						getState: r
					}) => {
						t({
							...r(),
							qualityLevels: e
						})
					},
					setQualityIndex: e => ({
						setState: t,
						getState: r
					}) => {
						t({
							...r(),
							qualityIndex: e
						}), localStorage.setItem("quality", e)
					}
				},
				name: "useCurrentChannel"
			}),
			G = I(j);

		function H({
			width: t = "18",
			height: r = "18"
		}) {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: t,
				height: r,
				fill: "currentColor",
				viewBox: "0 0 448 512"
			}, e.createElement("path", {
				d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"
			}))
		}

		function K() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 640 512"
			}, e.createElement("path", {
				d: "M592 0H48A48 48 0 0 0 0 48v320a48 48 0 0 0 48 48h240v32H112a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H352v-32h240a48 48 0 0 0 48-48V48a48 48 0 0 0-48-48zm-16 352H64V64h512z"
			}))
		}

		function V() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 448 512"
			}, e.createElement("path", {
				d: "M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z"
			}))
		}

		function z() {
			const [t, r] = N(), {
				favorites: n
			} = t, [i, a] = G();
			return n.length ? e.createElement("ul", {
				className: "h-100 overflow list-tv"
			}, n.map(((n, s) => e.createElement("li", {
				key: s,
				className: "d-flex align-center justify-between cp"
			}, e.createElement("div", {
				className: "d-flex align-center truncate" + (i.url === n.url ? " active" : ""),
				onClick: () => {
					a.set({
						...n,
						qualityIndex: -1
					})
				}
			}, i.url === n.url ? e.createElement(H, null) : e.createElement(K, null), e.createElement("span", {
				className: "ml-2 truncate",
				title: n.name
			}, n.name)), e.createElement("div", {
				onClick: () => {
					(e => {
						t.favorites.find((t => t.url === e.url)) ? r.removeFromFavorites(e) : r.addToFavorites(e)
					})(n)
				},
				title: "Remove from favorites"
			}, e.createElement("span", null, e.createElement(V, null))))))) : e.createElement(e.Fragment, null)
		}
		var W = r(631);








































		function q() {
			const [t] = G(), r = t.qualityLevels, n = t.qualityIndex, i = n > -1 ? n : 0;
			return r.length && r[i] ? e.createElement("ul", {
				className: "d-flex align-center"
			
		}, e.createElement("li", {
				className: "p-0 mr-2 border-0"
			
			}, "", n > -1 ? r[i].name || r[i].height + "p" : "")) : e.createElement(e.Fragment, null)


}
		const Y = I(i({
			initialState: {
				show: !1,
				content: null,
				title: ""
			},
			actions: {
				toggle: () => ({
					setState: e,
					getState: t
				}) => {
					e({
						...t(),
						show: !t().show
					})
				},
				setContent: ({
					title: e,
					content: t
				}) => ({
					setState: r,
					getState: n
				}) => {
					r({
						...n(),
						show: !0,
						title: e,
						content: t
					})
				}
			},
			name: "useModal"
		}));
		let X = null;


		function Q() {
			const t = (0, e.useRef)(),
				[r, n] = G(),
				[i, a] = Y(),
				s = (e, t) => {
					n.setQualityLevels(t.levels)
				},
				o = (t, n) => {
					if (n.fatal) switch (n.type) {
						case W.ErrorTypes.NETWORK_ERROR:
							a.setContent({
								title: "NETWORK_ERROR",
								content: e.createElement("p", null, r.url)
							}), X.destroy();
							break;
						case W.ErrorTypes.MEDIA_ERROR:
							a.setContent({
								title: "MEDIA_ERROR",
								content: e.createElement("p", null, r.url)
							}), X.recoverMediaError();
							break;
						default:
							X.destroy()
					}
					localStorage.clear("current-channel")
				};
			return (0, e.useEffect)((() => {
				if (!t.current) return;
				const e = t.current;
				return X && X.destroy(), "m3u8" === r.type && (W.isSupported() && "m3u8" === r.type ? (X = new W, X.loadSource(r.url), X.attachMedia(e), X.currentLevel = parseInt(r.qualityIndex, 10), X.on(W.Events.MANIFEST_PARSED, s), X.on(W.Events.ERROR, o)) : (e.src = r.url, e.addEventListener("canplay", (async () => {
					await e.play()
				})))), () => {
					X && (X.off(W.Events.MANIFEST_PARSED, s), X.off(W.Events.ERROR, o))
				}
			}), [r.url, r.qualityIndex]), e.createElement(e.Fragment, null, "iframe" === r.type ? e.createElement("iframe", {
				className: "w-100",
				title: r.name,
				src: r.url,
				frameBorder: "0",
				allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
				allowFullScreen: !0
			}) : e.createElement("video", {
				className: "br7 mb-1",
				ref: t,
				src: r.url,
				controls: !0,
				autoPlay: !0
			}), e.createElement("div", {
				className: "w-100"
			}, e.createElement("div", {
				className: "text-left d-flex align-center mb-1 yellow"
			}, e.createElement(H, {
				width: "12",
				height: "12"
			}), e.createElement("span", {
				className: "ml-1 uppercase mr-2"
			}, r.name), e.createElement("p", {
				className: "m-0 text-left truncate white"
			}, "(", r.url, ")")), e.createElement(q, null)))
		}

		function $({
			color: t = "currentColor"
		}) {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: t,
				viewBox: "0 0 512 512"
			}, e.createElement("path", {
				d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
			}))
		}

		function J({
			children: t,
			channels: r
		}) {
			const [n, i] = N(), [a, s] = G();
			return e.createElement("ul", {
				className: "h-100 overflow list-tv"
			}, t, r.length > 0 && r.map(((t, r) => e.createElement("li", {
				key: r,
				className: "d-flex align-center justify-between cp"
			}, e.createElement("div", {
				className: "d-flex align-center truncate" + (a.url === t.url ? " active" : ""),
				onClick: () => {
					s.set({
						...t
					})
				}
			}, a.url === t.url ? e.createElement(H, null) : e.createElement(K, null), e.createElement("span", {
				className: "ml-2 truncate",
				title: t.name
			}, t.name)), e.createElement("div", {
				onClick: () => {
					(e => {
						n.favorites.find((t => t.url === e.url)) ? i.removeFromFavorites(e) : i.addToFavorites(e)
					})(t)
				},
				























title: "❤-Add to favorites"
			}, e.createElement("span", null, e.createElement($, {
				color: n.favorites.some((e => e.url == t.url)) ? "#e60e23" : "#f3ab65"
			})))))))
		}
		const Z = e.memo(J);

		function ee({
			color: t = "currentColor"
		}) {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: t,
				viewBox: "0 0 512 512"
			}, e.createElement("path", {
				d: "M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256z"
			}))
		}

		function te() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 352 512"
			}, e.createElement("path", {
				d: "M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"
			}))
		}

		function re() {
			const [t, r] = Y();
			return e.createElement("div", {
				className: "modal" + (t.show ? " d-flex" : " d-none")
			}, e.createElement("header", {
				className: "w-100 d-flex justify-between align-center"
			}, e.createElement("h3", {
				className: "m-0 uppercase d-flex align-center yellow"
			}, e.createElement(ee, null), e.createElement("span", {
				className: "ml-1"
			}, t.title)), e.createElement("button", {
				className: "p-0 bg-inherit yellow",
				onClick: () => {
					r.toggle()
				}
			}, e.createElement(te, null))), e.createElement("div", {
				className: "w-100 overflow"
			}, t.content))
		}

		function ne({
			channels: t
		}) {
			const [r, n] = G(), [i, a] = (0, e.useState)([]), [s, o] = (0, e.useState)("");
			(0, e.useEffect)((() => {
				a(t)
			}), [t]);
			return e.createElement("ul", {
				className: "h-100 overflow list-tv"
			}, e.createElement("li", {
				className: "p-0"
			}, e.createElement("input", {
				className: "w-100 bg-inherit",
				type: "text",
				name: "channel",
				placeholder: "🔎-SEARCH..",
				value: s,
				onChange: e => {
					try {
						const r = e.target.value.toLowerCase(),
							n = t.filter((e => e.name.toLowerCase().includes(r)));
						a(n), o(r)
					} catch (e) {
						a(t), o("")
					}
				}
			})), i.length > 0 && i.map(((t, i) => e.createElement("li", {
				key: i,
				className: "d-flex align-center justify-between cp"
			}, e.createElement("div", {
				className: "d-flex align-center truncate" + (r.url === t.url ? " active" : ""),
				onClick: () => {
					n.set({
						...t
					})
				}
			}, r.url === t.url ? e.createElement(H, null) : e.createElement(K, null), e.createElement("span", {
				className: "ml-2 truncate",
				title: t.name
			}, t.name))))))
		}
		const ie = e.memo(ne);

		function ae() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 512 512"
			}, "t", e.createElement("path", {
				d: "M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zM273 369.9l135.5-135.5c9.4-9.4 9.4-24.6 0-33.9l-17-17c-9.4-9.4-24.6-9.4-33.9 0L256 285.1 154.4 183.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L239 369.9c9.4 9.4 24.6 9.4 34 0z"
			}))
		}

		function se() {
			const [t, r] = G(), n = t.qualityLevels, i = t.qualityIndex, a = e => {
				r.setQualityIndex(e)
			};
			return n ? e.createElement("div", {
				className: "dropdown"
			}, e.createElement("button", null, e.createElement("span", {
				className: "mr-1"
			}, "Quality:", i > -1 && n[i] ? n[i].height + "p" : "auto"), e.createElement(ae, null)), e.createElement("ul", {
				label: "Quality"
			}, e.createElement("li", {
				className: -1 === i ? "yellow" : "",
				onClick: () => {
					a(-1)
				}
			}, "auto"), n.map(((t, r) => e.createElement("li", {
				className: i === r ? "yellow" : "",
				key: r,
				onClick: () => {
					a(r)
				}
			}, t.height, "p"))))) : e.createElement(e.Fragment, null)
		}

		function oe() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 448 512"
			}, e.createElement("path", {
				d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
			}))
		}

		


function le() {
			const [t, r] = G(), [n, i] = N(), [a, s] = (0, e.useState)({
				name: "",
				url: "",
				type: "m3u8"
			}), o = e => {
				s({
					...a,
					[e.target.name]: e.target.value
				})
			};























			return e.createElement(e.Fragment, null, e.createElement("form", {
				className: "w-100",
				onSubmit: e => {
					e.preventDefault(), r.set(a)
				}
			}, e.createElement("div", {
				className: "w-100 mb-1"
			}, e.createElement("label", null), e.createElement("input", {
				className: "w-100 br7",
				type: "url",
				name: "url",
				value: a.url,
				onChange: o,
				placeholder: "https://ott.tv5monde.com/Content/HLS/Live/channel(info)/index.m3u8",
				required: !0
			})), e.createElement("input", {
				className: "br7",
				type: "text",
				name: "name",
				value: a.name,
				onChange: o,
				placeholder: "Choose a name: TV5-Monde",
				required: !0
			}), e.createElement("select", {
				className: "bg-white br7 ml-1",
				name: "type",
				value: a.type,
				onChange: o
			}, e.createElement("option", {
				value: "m3u8"
			}, "m3u8"), e.createElement("option", {
				value: "mp4"
			}, "mp4"), e.createElement("option", {
				value: "webm"
			}, "webm"), e.createElement("option", {
				value: "iframe"
			}, "iframe")), e.createElement("div", {
				className: "w-100 d-flex justify-between mb-1 mt-1"
			}, e.createElement("button", {
				className: "w-100 shadow br7 mr-1",
				type: "submit",
				title: "▶-PLAY"
			}, e.createElement(H, null), e.createElement("span", {
				className: "ml-1"
			}, "▶-PLAY")), e.createElement("button", {
				className: "w-100 shadow br7 ml-1 bg-red",
				type: "CLEAR"
			}, "Reset"))), e.createElement("button", {
				className: "w-100 bg-blue mr-2 shadow br7",
				onClick: () => {
					"iframe" === a.type ? i.addNewIframeChannel(a) : i.addNew(a)
				},
				title: "❤-Add To Favorites"
			}, e.createElement(oe, null), e.createElement("span", {
				className: "ml-2"
			}, "❤-Add to Favorites")))
		}

		function ue() {
			const [t, r] = N(), [n, i] = Y();
			return e.createElement(e.Fragment, null, e.createElement("form", {
				className: "w-100",
				onSubmit: async e => {
					e.preventDefault();
					const t = e.target.elements[0].value;
					await r.load(t), i.toggle(), window.location.reload()
				}
			}, e.createElement("input", {
				className: "w-100 mb-1",
				type: "url",
				name: "url",
				placeholder: "https://iptv-org.github.io/iptv/channels.json",
				required: !0
			}), e.createElement("button", {
				className: "w-100",
				type: "submit"
			}, "load")), e.createElement("p", {
				className: "mb-0"
			}, "Playlist Should Be Similar To Text Below:"), e.createElement("pre", {
				className: "w-100 br7 overflow"
			}, '[\n  {\n    "url": "https://ott.tv5monde.com/Content/HLS/Live/channel(info)/index.m3u8",\n    "name": "TV5 MONDE",\n    "language\': "en"\n  }\n]'))
		}

		function ce() {
			 return e.createElement(e.Fragment, null, e.createElement("div", {
                className: "mb-1"
            
            }, e.createElement("h1", null, " "), e.createElement("a", {
                className: "yellow",
                rel: "noopener noreferrer",
                href: "../index.html"
            }, "🏠-Go Back To Homepage")))
        }
















		function de() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 640 512"
			}, e.createElement("path", {
				d: "M537.6 226.6c4.1-10.7 6.4-22.4 6.4-34.6 0-53-43-96-96-96-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32c-88.4 0-160 71.6-160 160 0 2.7.1 5.4.2 8.1C40.2 219.8 0 273.2 0 336c0 79.5 64.5 144 144 144h368c70.7 0 128-57.3 128-128 0-61.9-44-113.6-102.4-125.4zm-132.9 88.7L299.3 420.7c-6.2 6.2-16.4 6.2-22.6 0L171.3 315.3c-10.1-10.1-2.9-27.3 11.3-27.3H248V176c0-8.8 7.2-16 16-16h48c8.8 0 16 7.2 16 16v112h65.4c14.2 0 21.4 17.2 11.3 27.3z"
			}))
		}

		function fe() {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: "currentColor",
				viewBox: "0 0 512 512"
			}, e.createElement("path", {
				d: "M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"
			}))
		}

		function he({
			color: t = "currentColor"
		}) {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: t,
				viewBox: "0 0 512 512"
			}, e.createElement("path", {
				d: "M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
			}))
		}

		function pe() {
			const [t, r] = Y();
			return e.createElement("div", {
				className: "w-100 d-flex justify-between"
			}, e.createElement("div", {
				className: "dropdown"
			}, e.createElement("button", null, e.createElement(he, null), " Menu"), e.createElement("ul", {
				className: "max-content"
			}, e.createElement("li", {
				className: "d-flex align-center",
				title: "▶-Play Or Add New Channel",
				onClick: () => {
					r.setContent({
						title: "📺-Add a New Channel",
						content: e.createElement(le, null)
					})
				}
			
}, e.createElement(oe, null), e.createElement("span", {
				className: "ml-1"
			}, "📺-Add a New Channel")), e.createElement("li", {
				className: "d-flex align-center",
				title: "🌎-Load Json Url Playlist",
				onClick: () => {
					r.setContent({
						title: "🌎-Load Json Url Playlist",
						content: e.createElement(ue, null)
					})
				}
			}, e.createElement(de, null), e.createElement("span", {
				className: "ml-1"
			}, "🌎-Load Json Url Playlist")), e.createElement("li", {
				className: "d-flex align-center",
				title: "📺-S!D!M@D-TV",
				onClick: () => {
					r.setContent({
						title: "📺-S!D!M@D-TV",
						content: e.createElement(ce, null)
					})
				}





			}, e.createElement(fe, null), e.createElement("span", {
				className: "ml-1"
			}, "HOME")))), e.createElement("div", {
				className: "d-flex align-center"
			}, e.createElement("span", {
				className: "ml-2"
			}), e.createElement(se, null)))
		}

		function ge({
			color: t = "currentColor"
		}) {
			return e.createElement("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				width: "18",
				height: "18",
				fill: t,
				viewBox: "0 0 512 512"
			}, e.createElement("path", {
				d: "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
			}))
		}

		function ve() {
			const [t, r] = N(), [n, i] = (0, e.useState)(""), [a, s] = (0, e.useState)(t.defaultChannels), o = [{
				name: "Channels",
				icon: e.createElement(K, null)
			}, {
				name: "Youtube",
				icon: e.createElement(ge, null)
			}, {
				name: "Favorites",
				icon: e.createElement($, null)
			}], [l, u] = (0, e.useState)(0);
			(0, e.useEffect)((() => {
				r.load(t.url).then((e => {
					s(e)
				}))
			}), []);
			const c = (0, e.useCallback)((e => {
				u(e)
			}), []);
			return e.createElement("main", null, e.createElement("section", null, e.createElement("div", {
				className: "video-container"
			}, e.createElement(pe, null), e.createElement(Q, null))), e.createElement("aside", {
				className: "br7"
			}, e.createElement("ul", {
				className: "w-100 tabs d-flex justify-between"
			}, o.map(((t, r) => e.createElement("li", {
				key: r,
				className: "w-100 uppercase center bg-" + (l === r ? "yellow" : "gray"),
				title: t.name,
				onClick: () => {
					c(r)
				}
			}, t.icon)))), 0 === l && e.createElement(Z, {
				channels: a
			}, e.createElement("li", {
				className: "p-0"
			}, e.createElement("input", {
				className: "w-100 bg-inherit",
				type: "text",
				name: "channel",
				 placeholder: "🔎-SEARCH...",
				value: n,
				onChange: e => {
					try {
						const r = e.target.value.toLowerCase(),
							n = t.defaultChannels.filter((e => e.name.toLowerCase().includes(r)));
						s(n), i(r)
					} catch (e) {
						s([]), i("")
					}
				}
			}))), 1 === l && e.createElement(ie, {
				channels: t.iframeChannels
			}), 2 === l && e.createElement(z, {
				channels: t.favorites
			})), e.createElement(re, null))
		}
		var me = r(379),
			ye = r.n(me),
			Ee = r(795),
			be = r.n(Ee),
			Te = r(569),
			Se = r.n(Te),
			ke = r(565),
			we = r.n(ke),
			Le = r(216),
			Ae = r.n(Le),
			De = r(589),
			Ce = r.n(De),
			_e = r(415),
			Re = {};
		Re.styleTagTransform = Ce(), Re.setAttributes = we(), Re.insert = Se().bind(null, "head"), Re.domAPI = be(), Re.insertStyleElement = Ae();
		ye()(_e.Z, Re);
		_e.Z && _e.Z.locals && _e.Z.locals;
		try {
			(0, t.render)(e.createElement(ve, null), window.document.querySelector("#app-container"))
		} catch (e) {
			console.log(e)
		}
	})()
})();