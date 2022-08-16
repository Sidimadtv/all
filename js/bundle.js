(() => {
	var t = {
			645: (t, e, r) => {
				t.exports = r(244)
			},
			244: (t, e, r) => {
				const n = r(98),
					o = "https://api.countapi.xyz",
					i = /^[A-Za-z0-9_\-.]{3,64}$/,
					s = new RegExp(i),
					a = t.exports.validatePath = function(t, e) {
						if (void 0 === e) {
							if (void 0 === t) return Promise.reject("Missing key");
							e = t, t = void 0
						}

						function r(t) {
							return s.test(t) || ":HOST:" === t || ":PATHNAME:" === t
						}
						return new Promise((function(n, o) {
							if (r(e))
								if (r(t) || null == t) {
									var s = "";
									void 0 !== t && (s += t + "/"), n({
										path: s += e
									})
								} else o(`Namespace must match ${i} or be empty. Got '${t}'`);
							else o(`Key must match ${i}. Got '${t}'`)
						}))
					},
					c = t.exports.validateTuple = function(t, e, r) {
						if (void 0 === r) {
							if (void 0 === e) return Promise.reject("Missing key or value");
							r = e, e = void 0
						}
						return "number" != typeof r ? Promise.reject("Value is NaN") : a(t, e).then((function(t) {
							return Object.assign({}, {
								value: r
							}, t)
						}))
					};

				function u(t) {
					return [200, 400, 403, 404].includes(t.status) ? t.json().then((function(e) {
						return 400 == t.status ? Promise.reject(e.error) : Object.assign({}, {
							status: t.status,
							path: t.headers.get("X-Path")
						}, e)
					})) : Promise.reject("Response from server: " + t.status)
				}
				t.exports.get = function(t, e) {
					return a(t, e).then((function(t) {
						return n(`${o}/get/${t.path}`).then(u)
					}))
				}, t.exports.set = function(t, e, r) {
					return c(t, e, r).then((function(t) {
						return n(`${o}/set/${t.path}?value=${t.value}`).then(u)
					}))
				}, t.exports.update = function(t, e, r) {
					return c(t, e, r).then((function(t) {
						return n(`${o}/update/${t.path}?amount=${t.value}`).then(u)
					}))
				}, t.exports.hit = function(t, e) {
					return a(t, e).then((function(t) {
						return n(`${o}/hit/${t.path}`).then(u)
					}))
				}, t.exports.info = function(t, e) {
					return a(t, e).then((function(t) {
						return n(`${o}/info/${t.path}`).then(u)
					}))
				}, t.exports.create = function(t) {
					var e = function(t) {
						return Object.keys(t || {}).map((e => encodeURIComponent(e) + "=" + encodeURIComponent(t[e]))).join("&")
					}(t);
					return n(`${o}/create${e.length>0?"?"+e:""}`).then(u)
				}, t.exports.stats = function() {
					return n(`${o}/stats`).then(u)
				}, t.exports.visits = function(t) {
					return this.hit(":HOST:", t || ":PATHNAME:")
				}, t.exports.event = function(t) {
					return this.hit(":HOST:", t)
				}
			},
			98: function(t, e) {
				var r = "undefined" != typeof self ? self : this,
					n = function() {
						function t() {
							this.fetch = !1, this.DOMException = r.DOMException
						}
						return t.prototype = r, new t
					}();
				! function(t) {
					! function(e) {
						var r = "URLSearchParams" in t,
							n = "Symbol" in t && "iterator" in Symbol,
							o = "FileReader" in t && "Blob" in t && function() {
								try {
									return new Blob, !0
								} catch (t) {
									return !1
								}
							}(),
							i = "FormData" in t,
							s = "ArrayBuffer" in t;
						if (s) var a = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
							c = ArrayBuffer.isView || function(t) {
								return t && a.indexOf(Object.prototype.toString.call(t)) > -1
							};

						function u(t) {
							if ("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t)) throw new TypeError("Invalid character in header field name");
							return t.toLowerCase()
						}

						function f(t) {
							return "string" != typeof t && (t = String(t)), t
						}

						function p(t) {
							var e = {
								next: function() {
									var e = t.shift();
									return {
										done: void 0 === e,
										value: e
									}
								}
							};
							return n && (e[Symbol.iterator] = function() {
								return e
							}), e
						}

						function d(t) {
							this.map = {}, t instanceof d ? t.forEach((function(t, e) {
								this.append(e, t)
							}), this) : Array.isArray(t) ? t.forEach((function(t) {
								this.append(t[0], t[1])
							}), this) : t && Object.getOwnPropertyNames(t).forEach((function(e) {
								this.append(e, t[e])
							}), this)
						}

						function h(t) {
							if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
							t.bodyUsed = !0
						}

						function l(t) {
							return new Promise((function(e, r) {
								t.onload = function() {
									e(t.result)
								}, t.onerror = function() {
									r(t.error)
								}
							}))
						}

						function y(t) {
							var e = new FileReader,
								r = l(e);
							return e.readAsArrayBuffer(t), r
						}

						function m(t) {
							if (t.slice) return t.slice(0);
							var e = new Uint8Array(t.byteLength);
							return e.set(new Uint8Array(t)), e.buffer
						}

						function b() {
							return this.bodyUsed = !1, this._initBody = function(t) {
								var e;
								this._bodyInit = t, t ? "string" == typeof t ? this._bodyText = t : o && Blob.prototype.isPrototypeOf(t) ? this._bodyBlob = t : i && FormData.prototype.isPrototypeOf(t) ? this._bodyFormData = t : r && URLSearchParams.prototype.isPrototypeOf(t) ? this._bodyText = t.toString() : s && o && (e = t) && DataView.prototype.isPrototypeOf(e) ? (this._bodyArrayBuffer = m(t.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : s && (ArrayBuffer.prototype.isPrototypeOf(t) || c(t)) ? this._bodyArrayBuffer = m(t) : this._bodyText = t = Object.prototype.toString.call(t) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : r && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
							}, o && (this.blob = function() {
								var t = h(this);
								if (t) return t;
								if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
								if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
								if (this._bodyFormData) throw new Error("could not read FormData body as blob");
								return Promise.resolve(new Blob([this._bodyText]))
							}, this.arrayBuffer = function() {
								return this._bodyArrayBuffer ? h(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(y)
							}), this.text = function() {
								var t, e, r, n = h(this);
								if (n) return n;
								if (this._bodyBlob) return t = this._bodyBlob, r = l(e = new FileReader), e.readAsText(t), r;
								if (this._bodyArrayBuffer) return Promise.resolve(function(t) {
									for (var e = new Uint8Array(t), r = new Array(e.length), n = 0; n < e.length; n++) r[n] = String.fromCharCode(e[n]);
									return r.join("")
								}(this._bodyArrayBuffer));
								if (this._bodyFormData) throw new Error("could not read FormData body as text");
								return Promise.resolve(this._bodyText)
							}, i && (this.formData = function() {
								return this.text().then(g)
							}), this.json = function() {
								return this.text().then(JSON.parse)
							}, this
						}
						d.prototype.append = function(t, e) {
							t = u(t), e = f(e);
							var r = this.map[t];
							this.map[t] = r ? r + ", " + e : e
						}, d.prototype.delete = function(t) {
							delete this.map[u(t)]
						}, d.prototype.get = function(t) {
							return t = u(t), this.has(t) ? this.map[t] : null
						}, d.prototype.has = function(t) {
							return this.map.hasOwnProperty(u(t))
						}, d.prototype.set = function(t, e) {
							this.map[u(t)] = f(e)
						}, d.prototype.forEach = function(t, e) {
							for (var r in this.map) this.map.hasOwnProperty(r) && t.call(e, this.map[r], r, this)
						}, d.prototype.keys = function() {
							var t = [];
							return this.forEach((function(e, r) {
								t.push(r)
							})), p(t)
						}, d.prototype.values = function() {
							var t = [];
							return this.forEach((function(e) {
								t.push(e)
							})), p(t)
						}, d.prototype.entries = function() {
							var t = [];
							return this.forEach((function(e, r) {
								t.push([r, e])
							})), p(t)
						}, n && (d.prototype[Symbol.iterator] = d.prototype.entries);
						var A = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

						function v(t, e) {
							var r, n, o = (e = e || {}).body;
							if (t instanceof v) {
								if (t.bodyUsed) throw new TypeError("Already read");
								this.url = t.url, this.credentials = t.credentials, e.headers || (this.headers = new d(t.headers)), this.method = t.method, this.mode = t.mode, this.signal = t.signal, o || null == t._bodyInit || (o = t._bodyInit, t.bodyUsed = !0)
							} else this.url = String(t);
							if (this.credentials = e.credentials || this.credentials || "same-origin", !e.headers && this.headers || (this.headers = new d(e.headers)), this.method = (n = (r = e.method || this.method || "GET").toUpperCase(), A.indexOf(n) > -1 ? n : r), this.mode = e.mode || this.mode || null, this.signal = e.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && o) throw new TypeError("Body not allowed for GET or HEAD requests");
							this._initBody(o)
						}

						function g(t) {
							var e = new FormData;
							return t.trim().split("&").forEach((function(t) {
								if (t) {
									var r = t.split("="),
										n = r.shift().replace(/\+/g, " "),
										o = r.join("=").replace(/\+/g, " ");
									e.append(decodeURIComponent(n), decodeURIComponent(o))
								}
							})), e
						}

						function x(t, e) {
							e || (e = {}), this.type = "default", this.status = void 0 === e.status ? 200 : e.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in e ? e.statusText : "OK", this.headers = new d(e.headers), this.url = e.url || "", this._initBody(t)
						}
						v.prototype.clone = function() {
							return new v(this, {
								body: this._bodyInit
							})
						}, b.call(v.prototype), b.call(x.prototype), x.prototype.clone = function() {
							return new x(this._bodyInit, {
								status: this.status,
								statusText: this.statusText,
								headers: new d(this.headers),
								url: this.url
							})
						}, x.error = function() {
							var t = new x(null, {
								status: 0,
								statusText: ""
							});
							return t.type = "error", t
						};
						var w = [301, 302, 303, 307, 308];
						x.redirect = function(t, e) {
							if (-1 === w.indexOf(e)) throw new RangeError("Invalid status code");
							return new x(null, {
								status: e,
								headers: {
									location: t
								}
							})
						}, e.DOMException = t.DOMException;
						try {
							new e.DOMException
						} catch (t) {
							e.DOMException = function(t, e) {
								this.message = t, this.name = e;
								var r = Error(t);
								this.stack = r.stack
							}, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
						}

						function B(t, r) {
							return new Promise((function(n, i) {
								var s = new v(t, r);
								if (s.signal && s.signal.aborted) return i(new e.DOMException("Aborted", "AbortError"));
								var a = new XMLHttpRequest;

								function c() {
									a.abort()
								}
								a.onload = function() {
									var t, e, r = {
										status: a.status,
										statusText: a.statusText,
										headers: (t = a.getAllResponseHeaders() || "", e = new d, t.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach((function(t) {
											var r = t.split(":"),
												n = r.shift().trim();
											if (n) {
												var o = r.join(":").trim();
												e.append(n, o)
											}
										})), e)
									};
									r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL");
									var o = "response" in a ? a.response : a.responseText;
									n(new x(o, r))
								}, a.onerror = function() {
									i(new TypeError("Network request failed"))
								}, a.ontimeout = function() {
									i(new TypeError("Network request failed"))
								}, a.onabort = function() {
									i(new e.DOMException("Aborted", "AbortError"))
								}, a.open(s.method, s.url, !0), "include" === s.credentials ? a.withCredentials = !0 : "omit" === s.credentials && (a.withCredentials = !1), "responseType" in a && o && (a.responseType = "blob"), s.headers.forEach((function(t, e) {
									a.setRequestHeader(e, t)
								})), s.signal && (s.signal.addEventListener("abort", c), a.onreadystatechange = function() {
									4 === a.readyState && s.signal.removeEventListener("abort", c)
								}), a.send(void 0 === s._bodyInit ? null : s._bodyInit)
							}))
						}
						B.polyfill = !0, t.fetch || (t.fetch = B, t.Headers = d, t.Request = v, t.Response = x), e.Headers = d, e.Request = v, e.Response = x, e.fetch = B, Object.defineProperty(e, "__esModule", {
							value: !0
						})
					}({})
				}(n), n.fetch.ponyfill = !0, delete n.fetch.polyfill;
				var o = n;
				(e = o.fetch).default = o.fetch, e.fetch = o.fetch, e.Headers = o.Headers, e.Request = o.Request, e.Response = o.Response, t.exports = e
			},
			28: (t, e, r) => {
				"use strict";
				r.d(e, {
					Z: () => a
				});
				var n = r(537),
					o = r.n(n),
					i = r(879),
					s = r.n(i)()(o());
				s.push([t.id, "body {\r\n    background: #237ccf;\r\n    color: #fff;\r\n    font-size: 24px;\r\n    font-family: Verdana;\r\n  }\r\n  span {\r\n    display: inline-block;\r\n    padding: 10px 10px 6px;\r\n    border-radius: 6px;\r\n    background: #80b4e5;\r\n    margin: 5px 5px;\r\n    font-size: 5rem;\r\n  }\r\n  .counter {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    background: black;\r\n    margin: 1rem auto;\r\n  }\r\n  .message {\r\n    color: #ccc6e3;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n  ", "", {
					version: 3,
					sources: ["webpack://./src/styles.css"],
					names: [],
					mappings: "AAAA;IACI,mBAAmB;IACnB,WAAW;IACX,eAAe;IACf,oBAAoB;EACtB;EACA;IACE,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;IACf,eAAe;EACjB;EACA;IACE,aAAa;IACb,uBAAuB;IACvB,eAAe;IACf,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,cAAc;IACd,kBAAkB;IAClB,gBAAgB;EAClB",
					sourcesContent: ["body {\r\n    background: #237ccf;\r\n    color: #fff;\r\n    font-size: 24px;\r\n    font-family: Verdana;\r\n  }\r\n  span {\r\n    display: inline-block;\r\n    padding: 10px 10px 6px;\r\n    border-radius: 6px;\r\n    background: #80b4e5;\r\n    margin: 5px 5px;\r\n    font-size: 5rem;\r\n  }\r\n  .counter {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-wrap: wrap;\r\n    background: black;\r\n    margin: 1rem auto;\r\n  }\r\n  .message {\r\n    color: #ccc6e3;\r\n    text-align: center;\r\n    margin-top: 10px;\r\n  }\r\n  "],
					sourceRoot: ""
				}]);
				const a = s
			},
			879: t => {
				"use strict";
				t.exports = function(t) {
					var e = [];
					return e.toString = function() {
						return this.map((function(e) {
							var r = "",
								n = void 0 !== e[5];
							return e[4] && (r += "@supports (".concat(e[4], ") {")), e[2] && (r += "@media ".concat(e[2], " {")), n && (r += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), r += t(e), n && (r += "}"), e[2] && (r += "}"), e[4] && (r += "}"), r
						})).join("")
					}, e.i = function(t, r, n, o, i) {
						"string" == typeof t && (t = [
							[null, t, void 0]
						]);
						var s = {};
						if (n)
							for (var a = 0; a < this.length; a++) {
								var c = this[a][0];
								null != c && (s[c] = !0)
							}
						for (var u = 0; u < t.length; u++) {
							var f = [].concat(t[u]);
							n && s[f[0]] || (void 0 !== i && (void 0 === f[5] || (f[1] = "@layer".concat(f[5].length > 0 ? " ".concat(f[5]) : "", " {").concat(f[1], "}")), f[5] = i), r && (f[2] ? (f[1] = "@media ".concat(f[2], " {").concat(f[1], "}"), f[2] = r) : f[2] = r), o && (f[4] ? (f[1] = "@supports (".concat(f[4], ") {").concat(f[1], "}"), f[4] = o) : f[4] = "".concat(o)), e.push(f))
						}
					}, e
				}
			},
			537: t => {
				"use strict";
				t.exports = function(t) {
					var e = t[1],
						r = t[3];
					if (!r) return e;
					if ("function" == typeof btoa) {
						var n = btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
							o = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(n),
							i = "/*# ".concat(o, " */"),
							s = r.sources.map((function(t) {
								return "/*# sourceURL=".concat(r.sourceRoot || "").concat(t, " */")
							}));
						return [e].concat(s).concat([i]).join("\n")
					}
					return [e].join("\n")
				}
			},
			379: t => {
				"use strict";
				var e = [];

				function r(t) {
					for (var r = -1, n = 0; n < e.length; n++)
						if (e[n].identifier === t) {
							r = n;
							break
						} return r
				}

				function n(t, n) {
					for (var i = {}, s = [], a = 0; a < t.length; a++) {
						var c = t[a],
							u = n.base ? c[0] + n.base : c[0],
							f = i[u] || 0,
							p = "".concat(u, " ").concat(f);
						i[u] = f + 1;
						var d = r(p),
							h = {
								css: c[1],
								media: c[2],
								sourceMap: c[3]
							}; - 1 !== d ? (e[d].references++, e[d].updater(h)) : e.push({
							identifier: p,
							updater: o(h, n),
							references: 1
						}), s.push(p)
					}
					return s
				}

				function o(t, e) {
					var r = e.domAPI(e);
					return r.update(t),
						function(e) {
							if (e) {
								if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
								r.update(t = e)
							} else r.remove()
						}
				}
				t.exports = function(t, o) {
					var i = n(t = t || [], o = o || {});
					return function(t) {
						t = t || [];
						for (var s = 0; s < i.length; s++) {
							var a = r(i[s]);
							e[a].references--
						}
						for (var c = n(t, o), u = 0; u < i.length; u++) {
							var f = r(i[u]);
							0 === e[f].references && (e[f].updater(), e.splice(f, 1))
						}
						i = c
					}
				}
			},
			569: t => {
				"use strict";
				var e = {};
				t.exports = function(t, r) {
					var n = function(t) {
						if (void 0 === e[t]) {
							var r = document.querySelector(t);
							if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
								r = r.contentDocument.head
							} catch (t) {
								r = null
							}
							e[t] = r
						}
						return e[t]
					}(t);
					if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
					n.appendChild(r)
				}
			},
			216: t => {
				"use strict";
				t.exports = function(t) {
					var e = document.createElement("style");
					return t.setAttributes(e, t.attributes), t.insert(e), e
				}
			},
			565: (t, e, r) => {
				"use strict";
				t.exports = function(t) {
					var e = r.nc;
					e && t.setAttribute("nonce", e)
				}
			},
			795: t => {
				"use strict";
				t.exports = function(t) {
					var e = t.insertStyleElement(t);
					return {
						update: function(r) {
							! function(t, e, r) {
								var n = r.css,
									o = r.media,
									i = r.sourceMap;
								o ? t.setAttribute("media", o) : t.removeAttribute("media"), i && "undefined" != typeof btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleTagTransform(n, t)
							}(e, t, r)
						},
						remove: function() {
							! function(t) {
								if (null === t.parentNode) return !1;
								t.parentNode.removeChild(t)
							}(e)
						}
					}
				}
			},
			589: t => {
				"use strict";
				t.exports = function(t, e) {
					if (e.styleSheet) e.styleSheet.cssText = t;
					else {
						for (; e.firstChild;) e.removeChild(e.firstChild);
						e.appendChild(document.createTextNode(t))
					}
				}
			}
		},
		e = {};

	function r(n) {
		var o = e[n];
		if (void 0 !== o) return o.exports;
		var i = e[n] = {
			id: n,
			exports: {}
		};
		return t[n].call(i.exports, i, i.exports, r), i.exports
	}
	r.n = t => {
		var e = t && t.__esModule ? () => t.default : () => t;
		return r.d(e, {
			a: e
		}), e
	}, r.d = (t, e) => {
		for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {
			enumerable: !0,
			get: e[n]
		})
	}, r.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), (() => {
		"use strict";
		var t = r(379),
			e = r.n(t),
			n = r(795),
			o = r.n(n),
			i = r(569),
			s = r.n(i),
			a = r(565),
			c = r.n(a),
			u = r(216),
			f = r.n(u),
			p = r(589),
			d = r.n(p),
			h = r(28),
			l = {};
		l.styleTagTransform = d(), l.setAttributes = c(), l.insert = s().bind(null, "head"), l.domAPI = o(), l.insertStyleElement = f(), e()(h.Z, l), h.Z && h.Z.locals && h.Z.locals;
		const y = r(645),
			m = "localhost",
			b = "visitors",
			A = document.querySelectorAll("span"),
			v = t => {
				let e = t.toString().padStart(6, "0");
				A.forEach(((t, r) => {
					t.innerHTML = e[r]
				}))
			};
		localStorage.getItem("repeatVisitor") ? (console.log("existing viewer, displaying w/o incrementing"), (async () => {
			const t = await y.get(m, b);
			console.log(t), v(t.value)
		})()) : (console.log("key not created yet"), (async () => {
			const t = await y.hit(m, b);
			console.log(t), v(t.value)
		})(), localStorage.setItem("repeatVisitor", !0))
	})()
})();
//# sourceMappingURL=bundle.js.map