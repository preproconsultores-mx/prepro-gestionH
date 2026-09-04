(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$1 = Symbol.for("react.element"), n$1 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a) return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b, e) {
  this.props = a;
  this.context = b;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b) for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k2 = "" + b.key), b) J.call(b, d) && !L$1.hasOwnProperty(d) && (c[d] = b[d]);
  var g = arguments.length - 2;
  if (1 === g) c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++) f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b) {
  return { $$typeof: l$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function R$1(a, b, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2) a = null;
  var h = false;
  if (null === a) h = true;
  else switch (k2) {
    case "string":
    case "number":
      h = true;
      break;
    case "object":
      switch (a.$$typeof) {
        case l$1:
        case n$1:
          h = true;
      }
  }
  if (h) return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b, e, "", function(a2) {
    return a2;
  })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a)) for (var g = 0; g < a.length; g++) {
    k2 = a[g];
    var f2 = d + Q$1(k2, g);
    h += R$1(k2, b, e, f2, c);
  }
  else if (f2 = A$1(a), "function" === typeof f2) for (a = f2.call(a), g = 0; !(k2 = a.next()).done; ) k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b, e, f2, c);
  else if ("object" === k2) throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b, e) {
  if (null == a) return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    b.then(function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 1, a._result = b2;
    }, function(b2) {
      if (0 === a._status || -1 === a._status) a._status = 2, a._result = b2;
    });
    -1 === a._status && (a._status = 0, a._result = b);
  }
  if (1 === a._status) return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
function X$1() {
  throw Error("act(...) is not supported in production builds of React.");
}
react_production_min.Children = { map: S$1, forEach: function(a, b, e) {
  S$1(a, function() {
    b.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b = 0;
  S$1(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a)) throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.act = X$1;
react_production_min.cloneElement = function(a, b, e) {
  if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k2 = b.ref, h = K$1.current);
    void 0 !== b.key && (c = "" + b.key);
    if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
    for (f2 in b) J.call(b, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b[f2] && void 0 !== g ? g[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2) d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++) g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b = M$1.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
};
react_production_min.startTransition = function(a) {
  var b = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b;
  }
};
react_production_min.unstable_act = X$1;
react_production_min.useCallback = function(a, b) {
  return U$1.current.useCallback(a, b);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b) {
  return U$1.current.useEffect(a, b);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b, e) {
  return U$1.current.useImperativeHandle(a, b, e);
};
react_production_min.useInsertionEffect = function(a, b) {
  return U$1.current.useInsertionEffect(a, b);
};
react_production_min.useLayoutEffect = function(a, b) {
  return U$1.current.useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return U$1.current.useMemo(a, b);
};
react_production_min.useReducer = function(a, b, e) {
  return U$1.current.useReducer(a, b, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b, e) {
  return U$1.current.useSyncExternalStore(a, b, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.3.1";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a) m$1.call(a, b) && !p$1.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps) for (b in a = c.defaultProps, a) void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b) {
    var c = a.length;
    a.push(b);
    a: for (; 0 < c; ) {
      var d = c - 1 >>> 1, e = a[d];
      if (0 < g(e, b)) a[d] = b, a[c] = e, c = d;
      else break a;
    }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length) return null;
    var b = a[0], c = a.pop();
    if (c !== b) {
      a[0] = c;
      a: for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
        var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
        if (0 > g(C2, c)) n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
        else if (n2 < e && 0 > g(x2, c)) a[d] = x2, a[n2] = c, d = n2;
        else break a;
      }
    }
    return b;
  }
  function g(a, b) {
    var c = a.sortIndex - b.sortIndex;
    return 0 !== c ? c : a.id - b.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b = h(t2); null !== b; ) {
      if (null === b.callback) k2(t2);
      else if (b.startTime <= a) k2(t2), b.sortIndex = b.expirationTime, f2(r2, b);
      else break;
      b = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2) if (null !== h(r2)) A2 = true, I2(J2);
    else {
      var b = h(t2);
      null !== b && K2(H2, b.startTime - a);
    }
  }
  function J2(a, b) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b);
          b = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b);
        } else k2(r2);
        v2 = h(r2);
      }
      if (null !== v2) var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b = true;
      try {
        b = O2(true, a);
      } finally {
        b ? S2() : (N2 = false, O2 = null);
      }
    } else N2 = false;
  }
  var S2;
  if ("function" === typeof F2) S2 = function() {
    F2(R2);
  };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else S2 = function() {
    D2(R2, 0);
  };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b = 3;
        break;
      default:
        b = y2;
    }
    var c = y2;
    y2 = b;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b = y2;
    return function() {
      var c = y2;
      y2 = b;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++) b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b) {
  ha(a, b);
  ha(a + "Capture", b);
}
function ha(a, b) {
  ea[a] = b;
  for (a = 0; a < b.length; a++) da.add(b[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a)) return true;
  if (ja.call(la, a)) return false;
  if (ka.test(a)) return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b, c, d) {
  if (null !== c && 0 === c.type) return false;
  switch (typeof b) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d) return false;
      if (null !== c) return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b, c, d) {
  if (null === b || "undefined" === typeof b || pa(a, b, c, d)) return true;
  if (d) return false;
  if (null !== c) switch (c.type) {
    case 3:
      return !b;
    case 4:
      return false === b;
    case 5:
      return isNaN(b);
    case 6:
      return isNaN(b) || 1 > b;
  }
  return false;
}
function v(a, b, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b = a[0];
  z[b] = new v(b, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b = a.replace(
    ra,
    sa
  );
  z[b] = new v(b, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b = a.replace(ra, sa);
  z[b] = new v(b, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b, c, d) {
  var e = z.hasOwnProperty(b) ? z[b] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b.length) || "o" !== b[0] && "O" !== b[0] || "n" !== b[1] && "N" !== b[1]) qa(b, c, e, d) && (c = null), d || null === e ? oa(b) && (null === c ? a.removeAttribute(b) : a.setAttribute(b, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b, c) : a.setAttribute(b, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a) return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La) try {
    throw Error();
  } catch (c) {
    var b = c.stack.trim().match(/\n( *(at )?)/);
    La = b && b[1] || "";
  }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b) {
  if (!a || Na) return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b) if (b = function() {
      throw Error();
    }, Object.defineProperty(b.prototype, "props", { set: function() {
      throw Error();
    } }), "object" === typeof Reflect && Reflect.construct) {
      try {
        Reflect.construct(b, []);
      } catch (l2) {
        var d = l2;
      }
      Reflect.construct(a, [], b);
    } else {
      try {
        b.call();
      } catch (l2) {
        d = l2;
      }
      a.call(b.prototype);
    }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; ) h--;
      for (; 1 <= g && 0 <= h; g--, h--) if (e[g] !== f2[h]) {
        if (1 !== g || 1 !== h) {
          do
            if (g--, h--, 0 > h || e[g] !== f2[h]) {
              var k2 = "\n" + e[g].replace(" at new ", " at ");
              a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
              return k2;
            }
          while (1 <= g && 0 <= h);
        }
        break;
      }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a) return null;
  if ("function" === typeof a) return a.displayName || a.name || null;
  if ("string" === typeof a) return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a) switch (a.$$typeof) {
    case Ca:
      return (a.displayName || "Context") + ".Consumer";
    case Ba:
      return (a._context.displayName || "Context") + ".Provider";
    case Da:
      var b = a.render;
      a = a.displayName;
      a || (a = b.displayName || b.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
      return a;
    case Ga:
      return b = a.displayName || null, null !== b ? b : Qa(a.type) || "Memo";
    case Ha:
      b = a._payload;
      a = a._init;
      try {
        return Qa(a(b));
      } catch (c) {
      }
  }
  return null;
}
function Ra(a) {
  var b = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b.displayName || "Context") + ".Consumer";
    case 10:
      return (b._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b.render, a = a.displayName || a.name || "", b.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b);
    case 8:
      return b === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b) return b.displayName || b.name || null;
      if ("string" === typeof b) return b;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b || "radio" === b);
}
function Ua(a) {
  var b = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b), d = "" + a[b];
  if (!a.hasOwnProperty(b) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a) return false;
  var b = a._valueTracker;
  if (!b) return true;
  var c = b.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a) return null;
  try {
    return a.activeElement || a.body;
  } catch (b) {
    return a.body;
  }
}
function Ya(a, b) {
  var c = b.checked;
  return A({}, b, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b) {
  var c = null == b.defaultValue ? "" : b.defaultValue, d = null != b.checked ? b.checked : b.defaultChecked;
  c = Sa(null != b.value ? b.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b.type || "radio" === b.type ? null != b.checked : null != b.value };
}
function ab(a, b) {
  b = b.checked;
  null != b && ta(a, "checked", b, false);
}
function bb(a, b) {
  ab(a, b);
  var c = Sa(b.value), d = b.type;
  if (null != c) if ("number" === d) {
    if (0 === c && "" === a.value || a.value != c) a.value = "" + c;
  } else a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b.hasOwnProperty("value") ? cb(a, b.type, c) : b.hasOwnProperty("defaultValue") && cb(a, b.type, Sa(b.defaultValue));
  null == b.checked && null != b.defaultChecked && (a.defaultChecked = !!b.defaultChecked);
}
function db(a, b, c) {
  if (b.hasOwnProperty("value") || b.hasOwnProperty("defaultValue")) {
    var d = b.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b.value && null !== b.value)) return;
    b = "" + a._wrapperState.initialValue;
    c || b === a.value || (a.value = b);
    a.defaultValue = b;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b, c) {
  if ("number" !== b || Xa(a.ownerDocument) !== a) null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b, c, d) {
  a = a.options;
  if (b) {
    b = {};
    for (var e = 0; e < c.length; e++) b["$" + c[e]] = true;
    for (c = 0; c < a.length; c++) e = b.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b || a[e].disabled || (b = a[e]);
    }
    null !== b && (b.selected = true);
  }
}
function gb(a, b) {
  if (null != b.dangerouslySetInnerHTML) throw Error(p(91));
  return A({}, b, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b) {
  var c = b.value;
  if (null == c) {
    c = b.children;
    b = b.defaultValue;
    if (null != c) {
      if (null != b) throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length) throw Error(p(93));
        c = c[0];
      }
      b = c;
    }
    null == b && (b = "");
    c = b;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b) {
  var c = Sa(b.value), d = Sa(b.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b = a.textContent;
  b === a._wrapperState.initialValue && "" !== b && null !== b && (a.value = b);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b, c, d, e);
    });
  } : a;
}(function(a, b) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a) a.innerHTML = b;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b.valueOf().toString() + "</svg>";
    for (b = mb.firstChild; a.firstChild; ) a.removeChild(a.firstChild);
    for (; b.firstChild; ) a.appendChild(b.firstChild);
  }
});
function ob(a, b) {
  if (b) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b;
      return;
    }
  }
  a.textContent = b;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b) {
    b = b + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b] = pb[a];
  });
});
function rb(a, b, c) {
  return null == b || "boolean" === typeof b || "" === b ? "" : c || "number" !== typeof b || 0 === b || pb.hasOwnProperty(a) && pb[a] ? ("" + b).trim() : b + "px";
}
function sb(a, b) {
  a = a.style;
  for (var c in b) if (b.hasOwnProperty(c)) {
    var d = 0 === c.indexOf("--"), e = rb(c, b[c], d);
    "float" === c && (c = "cssFloat");
    d ? a.setProperty(c, e) : a[c] = e;
  }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b) {
  if (b) {
    if (tb[a] && (null != b.children || null != b.dangerouslySetInnerHTML)) throw Error(p(137, a));
    if (null != b.dangerouslySetInnerHTML) {
      if (null != b.children) throw Error(p(60));
      if ("object" !== typeof b.dangerouslySetInnerHTML || !("__html" in b.dangerouslySetInnerHTML)) throw Error(p(61));
    }
    if (null != b.style && "object" !== typeof b.style) throw Error(p(62));
  }
}
function vb(a, b) {
  if (-1 === a.indexOf("-")) return "string" === typeof b.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb) throw Error(p(280));
    var b = a.stateNode;
    b && (b = Db(b), yb(a.stateNode, a.type, b));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b = Ab;
    Ab = zb = null;
    Bb(a);
    if (b) for (a = 0; a < b.length; a++) Bb(b[a]);
  }
}
function Gb(a, b) {
  return a(b);
}
function Hb() {
}
var Ib = false;
function Jb(a, b, c) {
  if (Ib) return a(b, c);
  Ib = true;
  try {
    return Gb(a, b, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab) Hb(), Fb();
  }
}
function Kb(a, b) {
  var c = a.stateNode;
  if (null === c) return null;
  var d = Db(c);
  if (null === d) return null;
  c = d[b];
  a: switch (b) {
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
      (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
      a = !d;
      break a;
    default:
      a = false;
  }
  if (a) return null;
  if (c && "function" !== typeof c) throw Error(p(231, b, typeof c));
  return c;
}
var Lb = false;
if (ia) try {
  var Mb = {};
  Object.defineProperty(Mb, "passive", { get: function() {
    Lb = true;
  } });
  window.addEventListener("test", Mb, Mb);
  window.removeEventListener("test", Mb, Mb);
} catch (a) {
  Lb = false;
}
function Nb(a, b, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b = a, c = a;
  if (a.alternate) for (; b.return; ) b = b.return;
  else {
    a = b;
    do
      b = a, 0 !== (b.flags & 4098) && (c = b.return), a = b.return;
    while (a);
  }
  return 3 === b.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b = a.memoizedState;
    null === b && (a = a.alternate, null !== a && (b = a.memoizedState));
    if (null !== b) return b.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a) throw Error(p(188));
}
function Yb(a) {
  var b = a.alternate;
  if (!b) {
    b = Vb(a);
    if (null === b) throw Error(p(188));
    return b !== a ? null : a;
  }
  for (var c = a, d = b; ; ) {
    var e = c.return;
    if (null === e) break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c) return Xb(e), a;
        if (f2 === d) return Xb(e), b;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return) c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g) throw Error(p(189));
      }
    }
    if (c.alternate !== d) throw Error(p(190));
  }
  if (3 !== c.tag) throw Error(p(188));
  return c.stateNode.current === c ? a : b;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag) return a;
  for (a = a.child; null !== a; ) {
    var b = $b(a);
    if (null !== b) return b;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot) try {
    lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
  } catch (b) {
  }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b) {
  var c = a.pendingLanes;
  if (0 === c) return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d) return 0;
  if (0 !== b && b !== d && 0 === (b & e) && (e = d & -d, f2 = b & -b, e >= f2 || 16 === e && 0 !== (f2 & 4194240))) return b;
  0 !== (d & 4) && (d |= c & 16);
  b = a.entangledLanes;
  if (0 !== b) for (a = a.entanglements, b &= d; 0 < b; ) c = 31 - oc(b), e = 1 << c, d |= a[c], b &= ~e;
  return d;
}
function vc(a, b) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d)) e[g] = vc(h, b);
    } else k2 <= b && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b = [], c = 0; 31 > c; c++) b.push(a);
  return b;
}
function Ac(a, b, c) {
  a.pendingLanes |= b;
  536870912 !== b && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b = 31 - oc(b);
  a[b] = c;
}
function Bc(a, b) {
  var c = a.pendingLanes & ~b;
  a.pendingLanes = b;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b;
  a.mutableReadLanes &= b;
  a.entangledLanes &= b;
  b = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b) {
  var c = a.entangledLanes |= b;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b | a[d] & b && (a[d] |= b);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b.pointerId);
  }
}
function Tc(a, b, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2) return a = { blockedOn: b, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b && (b = Cb(b), null !== b && Fc(b)), a;
  a.eventSystemFlags |= d;
  b = a.targetContainers;
  null !== e && -1 === b.indexOf(e) && b.push(e);
  return a;
}
function Uc(a, b, c, d, e) {
  switch (b) {
    case "focusin":
      return Lc = Tc(Lc, a, b, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b = Wc(a.target);
  if (null !== b) {
    var c = Vb(b);
    if (null !== c) {
      if (b = c.tag, 13 === b) {
        if (b = Wb(c), null !== b) {
          a.blockedOn = b;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn) return false;
  for (var b = a.targetContainers; 0 < b.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else return b = Cb(c), null !== b && Fc(b), a.blockedOn = c, false;
    b.shift();
  }
  return true;
}
function Zc(a, b, c) {
  Xc(a) && c.delete(b);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b) {
  a.blockedOn === b && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b(b2) {
    return ad(b2, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b);
  Pc.forEach(b);
  for (c = 0; c < Qc.length; c++) d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); ) Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b, c, d) {
  if (dd) {
    var e = Yc(a, b, c, d);
    if (null === e) hd(a, b, d, id, c), Sc(a, d);
    else if (Uc(e, a, b, c, d)) d.stopPropagation();
    else if (Sc(a, d), b & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b, c, d);
        null === f2 && hd(a, b, d, id, c);
        if (f2 === e) break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else hd(a, b, d, null, c);
  }
}
var id = null;
function Yc(a, b, c, d) {
  id = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a) if (b = Vb(a), null === b) a = null;
  else if (c = b.tag, 13 === c) {
    a = Wb(b);
    if (null !== a) return a;
    a = null;
  } else if (3 === c) {
    if (b.stateNode.current.memoizedState.isDehydrated) return 3 === b.tag ? b.stateNode.containerInfo : null;
    a = null;
  } else b !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md) return md;
  var a, b = ld, c = b.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b[a] === e[a]; a++) ;
  var g = c - a;
  for (d = 1; d <= g && b[c - d] === e[f2 - d]; d++) ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b && (a = 13)) : a = b;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b(b2, d, e, f2, g) {
    this._reactName = b2;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a) a.hasOwnProperty(c) && (b2 = a[c], this[c] = b2 ? b2(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a) return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
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
}, Nd = {
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
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b = this.nativeEvent;
  return b.getModifierState ? b.getModifierState(a) : (a = Od[a]) ? !!b[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b = Md[a.key] || a.key;
    if ("Unidentified" !== b) return b;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b.keyCode);
    case "keydown":
      return 229 !== b.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b) {
  switch (a) {
    case "compositionend":
      return he(b);
    case "keypress":
      if (32 !== b.which) return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b) {
  if (ie) return "compositionend" === a || !ae && ge(a, b) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b.ctrlKey || b.altKey || b.metaKey) || b.ctrlKey && b.altKey) {
        if (b.char && 1 < b.char.length) return b.char;
        if (b.which) return String.fromCharCode(b.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b.locale ? null : b.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b ? !!le[a.type] : "textarea" === b ? true : false;
}
function ne(a, b, c, d) {
  Eb(d);
  b = oe(b, "onChange");
  0 < b.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b = ue(a);
  if (Wa(b)) return a;
}
function ve(a, b) {
  if ("change" === a) return b;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b = [];
    ne(b, qe, a, xb(a));
    Jb(re, b);
  }
}
function Ce(a, b, c) {
  "focusin" === a ? (Ae(), pe = b, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a) return te(qe);
}
function Ee(a, b) {
  if ("click" === a) return te(b);
}
function Fe(a, b) {
  if ("input" === a || "change" === a) return te(b);
}
function Ge(a, b) {
  return a === b && (0 !== a || 1 / a === 1 / b) || a !== a && b !== b;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b) {
  if (He(a, b)) return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b || null === b) return false;
  var c = Object.keys(a), d = Object.keys(b);
  if (c.length !== d.length) return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b, e) || !He(a[e], b[e])) return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; ) a = a.firstChild;
  return a;
}
function Ke(a, b) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b && d >= b) return { node: c, offset: b - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b) {
  return a && b ? a === b ? true : a && 3 === a.nodeType ? false : b && 3 === b.nodeType ? Le(a, b.parentNode) : "contains" in a ? a.contains(b) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b) & 16) : false : false;
}
function Me() {
  for (var a = window, b = Xa(); b instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c) a = b.contentWindow;
    else break;
    b = Xa(a.document);
  }
  return b;
}
function Ne(a) {
  var b = a && a.nodeName && a.nodeName.toLowerCase();
  return b && ("input" === b && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b || "true" === a.contentEditable);
}
function Oe(a) {
  var b = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b = d.start, a = d.end, void 0 === a && (a = b), "selectionStart" in c) c.selectionStart = b, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b = c.ownerDocument || document) && b.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b = b.createRange(), b.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b), a.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), a.addRange(b)));
      }
    }
    b = [];
    for (a = c; a = a.parentNode; ) 1 === a.nodeType && b.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b.length; c++) a = b[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b = new td("onSelect", "select", null, b, c), a.push({ event: b, listeners: d }), b.target = Qe)));
}
function Ve(a, b) {
  var c = {};
  c[a.toLowerCase()] = b.toLowerCase();
  c["Webkit" + a] = "webkit" + b;
  c["Moz" + a] = "moz" + b;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a]) return Xe[a];
  if (!We[a]) return a;
  var b = We[a], c;
  for (c in b) if (b.hasOwnProperty(c) && c in Ye) return Xe[a] = b[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b) {
  df.set(a, b);
  fa(b, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b, void 0, a);
  a.currentTarget = null;
}
function se(a, b) {
  b = 0 !== (b & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b) for (var g = d.length - 1; 0 <= g; g--) {
        var h = d[g], k2 = h.instance, l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
      else for (g = 0; g < d.length; g++) {
        h = d[g];
        k2 = h.instance;
        l2 = h.currentTarget;
        h = h.listener;
        if (k2 !== f2 && e.isPropagationStopped()) break a;
        nf(e, h, l2);
        f2 = k2;
      }
    }
  }
  if (Qb) throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b) {
  var c = b[of];
  void 0 === c && (c = b[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b, a, 2, false), c.add(d));
}
function qf(a, b, c) {
  var d = 0;
  b && (d |= 4);
  pf(c, a, d, b);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b2) {
      "selectionchange" !== b2 && (mf.has(b2) || qf(b2, false, a), qf(b2, true, a));
    });
    var b = 9 === a.nodeType ? a : a.ownerDocument;
    null === b || b[rf] || (b[rf] = true, qf("selectionchange", false, b));
  }
}
function pf(a, b, c, d) {
  switch (jd(b)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b, c, a);
  e = void 0;
  !Lb || "touchstart" !== b && "touchmove" !== b && "wheel" !== b || (e = true);
  d ? void 0 !== e ? a.addEventListener(b, c, { capture: true, passive: e }) : a.addEventListener(b, c, true) : void 0 !== e ? a.addEventListener(b, c, { passive: e }) : a.addEventListener(b, c, false);
}
function hd(a, b, c, d, e) {
  var f2 = d;
  if (0 === (b & 1) && 0 === (b & 2) && null !== d) a: for (; ; ) {
    if (null === d) return;
    var g = d.tag;
    if (3 === g || 4 === g) {
      var h = d.stateNode.containerInfo;
      if (h === e || 8 === h.nodeType && h.parentNode === e) break;
      if (4 === g) for (g = d.return; null !== g; ) {
        var k2 = g.tag;
        if (3 === k2 || 4 === k2) {
          if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e) return;
        }
        g = g.return;
      }
      for (; null !== h; ) {
        g = Wc(h);
        if (null === g) return;
        k2 = g.tag;
        if (5 === k2 || 6 === k2) {
          d = f2 = g;
          continue a;
        }
        h = h.parentNode;
      }
    }
    d = d.return;
  }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c)) break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button) break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2) break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf])) break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag)) n2 = null;
          } else k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a) t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2) b: {
              t2 = k3;
              x2 = n2;
              w2 = 0;
              for (u2 = t2; u2; u2 = vf(u2)) w2++;
              u2 = 0;
              for (F2 = x2; F2; F2 = vf(F2)) u2++;
              for (; 0 < w2 - u2; ) t2 = vf(t2), w2--;
              for (; 0 < u2 - w2; ) x2 = vf(x2), u2--;
              for (; w2--; ) {
                if (t2 === x2 || null !== x2 && t2 === x2.alternate) break b;
                t2 = vf(t2);
                x2 = vf(x2);
              }
              t2 = null;
            }
            else t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type) var na = ve;
        else if (me(h2)) if (we) na = Fe;
        else {
          na = De;
          var xa = Ce;
        }
        else (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable) Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe) break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae) b: {
        switch (a) {
          case "compositionstart":
            var ba = "onCompositionStart";
            break b;
          case "compositionend":
            ba = "onCompositionEnd";
            break b;
          case "compositionupdate":
            ba = "onCompositionUpdate";
            break b;
        }
        ba = void 0;
      }
      else ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c)) d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b);
  });
}
function tf(a, b, c) {
  return { instance: a, listener: b, currentTarget: c };
}
function oe(a, b) {
  for (var c = b + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a) return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b, c, d, e) {
  for (var f2 = b._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d) break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b, c) {
  b = zf(b);
  if (zf(a) !== b && c) throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b) {
  return "textarea" === a || "noscript" === a || "string" === typeof b.children || "number" === typeof b.children || "object" === typeof b.dangerouslySetInnerHTML && null !== b.dangerouslySetInnerHTML && null != b.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b) {
  var c = b, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType) if (c = e.data, "/$" === c) {
      if (0 === d) {
        a.removeChild(e);
        bd(b);
        return;
      }
      d--;
    } else "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b = a.nodeType;
    if (1 === b || 3 === b) break;
    if (8 === b) {
      b = a.data;
      if ("$" === b || "$!" === b || "$?" === b) break;
      if ("/$" === b) return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b) return a;
        b--;
      } else "/$" === c && b++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b = a[Of];
  if (b) return b;
  for (var c = a.parentNode; c; ) {
    if (b = c[uf] || c[Of]) {
      c = b.alternate;
      if (null !== b.child || null !== c && null !== c.child) for (a = Mf(a); null !== a; ) {
        if (c = a[Of]) return c;
        a = Mf(a);
      }
      return b;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag) return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b) {
  var c = a.type.contextTypes;
  if (!c) return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b) return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c) e[f2] = b[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b, c) {
  if (H.current !== Vf) throw Error(p(168));
  G(H, b);
  G(Wf, c);
}
function bg(a, b, c) {
  var d = a.stateNode;
  b = b.childContextTypes;
  if ("function" !== typeof d.getChildContext) return c;
  d = d.getChildContext();
  for (var e in d) if (!(e in b)) throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b, c) {
  var d = a.stateNode;
  if (!d) throw Error(p(169));
  c ? (a = bg(a, b, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b;
}
function ug(a, b, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b) + e | c << e | d;
    sg = f2 + a;
  } else rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; ) mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; ) qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b;
  c.return = a;
  b = a.deletions;
  null === b ? (a.deletions = [c], a.flags |= 16) : b.push(c);
}
function Cg(a, b) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b = 1 !== b.nodeType || c.toLowerCase() !== b.nodeName.toLowerCase() ? null : b;
      return null !== b ? (a.stateNode = b, xg = a, yg = Lf(b.firstChild), true) : false;
    case 6:
      return b = "" === a.pendingProps || 3 !== b.nodeType ? null : b, null !== b ? (a.stateNode = b, xg = a, yg = null, true) : false;
    case 13:
      return b = 8 !== b.nodeType ? null : b, null !== b ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b = yg;
    if (b) {
      var c = b;
      if (!Cg(a, b)) {
        if (Dg(a)) throw Error(p(418));
        b = Lf(c.nextSibling);
        var d = xg;
        b && Cg(a, b) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a)) throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; ) a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg) return false;
  if (!I) return Fg(a), I = true, false;
  var b;
  (b = 3 !== a.tag) && !(b = 5 !== a.tag) && (b = a.type, b = "head" !== b && "body" !== b && !Ef(a.type, a.memoizedProps));
  if (b && (b = yg)) {
    if (Dg(a)) throw Hg(), Error(p(418));
    for (; b; ) Ag(a, b), b = Lf(b.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a) throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b--;
          } else "$" !== c && "$!" !== c && "$?" !== c || b++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; ) a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag) throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d) throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b && null !== b.ref && "function" === typeof b.ref && b.ref._stringRef === f2) return b.ref;
      b = function(a2) {
        var b2 = e.refs;
        null === a2 ? delete b2[f2] : b2[f2] = a2;
      };
      b._stringRef = f2;
      return b;
    }
    if ("string" !== typeof a) throw Error(p(284));
    if (!c._owner) throw Error(p(290, a));
  }
  return a;
}
function Mg(a, b) {
  a = Object.prototype.toString.call(b);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b).join(", ") + "}" : a));
}
function Ng(a) {
  var b = a._init;
  return b(a._payload);
}
function Og(a) {
  function b(b2, c2) {
    if (a) {
      var d2 = b2.deletions;
      null === d2 ? (b2.deletions = [c2], b2.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a) return null;
    for (; null !== d2; ) b(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b2) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b2; ) null !== b2.key ? a2.set(b2.key, b2) : a2.set(b2.index, b2), b2 = b2.sibling;
    return a2;
  }
  function e(a2, b2) {
    a2 = Pg(a2, b2);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b2, c2, d2) {
    b2.index = d2;
    if (!a) return b2.flags |= 1048576, c2;
    d2 = b2.alternate;
    if (null !== d2) return d2 = d2.index, d2 < c2 ? (b2.flags |= 2, c2) : d2;
    b2.flags |= 2;
    return c2;
  }
  function g(b2) {
    a && null === b2.alternate && (b2.flags |= 2);
    return b2;
  }
  function h(a2, b2, c2, d2) {
    if (null === b2 || 6 !== b2.tag) return b2 = Qg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function k2(a2, b2, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya) return m2(a2, b2, c2.props.children, d2, c2.key);
    if (null !== b2 && (b2.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && Ng(f3) === b2.type)) return d2 = e(b2, c2.props), d2.ref = Lg(a2, b2, c2), d2.return = a2, d2;
    d2 = Rg(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = Lg(a2, b2, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b2, c2, d2) {
    if (null === b2 || 4 !== b2.tag || b2.stateNode.containerInfo !== c2.containerInfo || b2.stateNode.implementation !== c2.implementation) return b2 = Sg(c2, a2.mode, d2), b2.return = a2, b2;
    b2 = e(b2, c2.children || []);
    b2.return = a2;
    return b2;
  }
  function m2(a2, b2, c2, d2, f3) {
    if (null === b2 || 7 !== b2.tag) return b2 = Tg(c2, a2.mode, d2, f3), b2.return = a2, b2;
    b2 = e(b2, c2);
    b2.return = a2;
    return b2;
  }
  function q2(a2, b2, c2) {
    if ("string" === typeof b2 && "" !== b2 || "number" === typeof b2) return b2 = Qg("" + b2, a2.mode, c2), b2.return = a2, b2;
    if ("object" === typeof b2 && null !== b2) {
      switch (b2.$$typeof) {
        case va:
          return c2 = Rg(b2.type, b2.key, b2.props, null, a2.mode, c2), c2.ref = Lg(a2, null, b2), c2.return = a2, c2;
        case wa:
          return b2 = Sg(b2, a2.mode, c2), b2.return = a2, b2;
        case Ha:
          var d2 = b2._init;
          return q2(a2, d2(b2._payload), c2);
      }
      if (eb(b2) || Ka(b2)) return b2 = Tg(b2, a2.mode, c2, null), b2.return = a2, b2;
      Mg(a2, b2);
    }
    return null;
  }
  function r2(a2, b2, c2, d2) {
    var e2 = null !== b2 ? b2.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2) return null !== e2 ? null : h(a2, b2, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b2, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b2, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b2,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2)) return null !== e2 ? null : m2(a2, b2, c2, d2, null);
      Mg(a2, c2);
    }
    return null;
  }
  function y2(a2, b2, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2) return a2 = a2.get(c2) || null, h(b2, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b2, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b2, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b2, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2)) return a2 = a2.get(c2) || null, m2(b2, a2, d2, e2, null);
      Mg(b2, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length) return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++) u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++) x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3) throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2) throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done) return c(
      e2,
      m3
    ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next()) n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next()) n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && Ng(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = Lg(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else b(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Tg(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = Rg(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = Lg(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3) if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                c(a2, d2.sibling);
                d2 = e(d2, f3.children || []);
                d2.return = a2;
                a2 = d2;
                break a;
              } else {
                c(a2, d2);
                break;
              }
              else b(a2, d2);
              d2 = d2.sibling;
            }
            d2 = Sg(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3)) return n2(a2, d2, f3, h2);
      if (Ka(f3)) return t2(a2, d2, f3, h2);
      Mg(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = Qg(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Ug = Og(true), Vg = Og(false), Wg = Uf(null), Xg = null, Yg = null, Zg = null;
function $g() {
  Zg = Yg = Xg = null;
}
function ah(a) {
  var b = Wg.current;
  E(Wg);
  a._currentValue = b;
}
function bh(a, b, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b) !== b ? (a.childLanes |= b, null !== d && (d.childLanes |= b)) : null !== d && (d.childLanes & b) !== b && (d.childLanes |= b);
    if (a === c) break;
    a = a.return;
  }
}
function ch(a, b) {
  Xg = a;
  Zg = Yg = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b) && (dh = true), a.firstContext = null);
}
function eh(a) {
  var b = a._currentValue;
  if (Zg !== a) if (a = { context: a, memoizedValue: b, next: null }, null === Yg) {
    if (null === Xg) throw Error(p(308));
    Yg = a;
    Xg.dependencies = { lanes: 0, firstContext: a };
  } else Yg = Yg.next = a;
  return b;
}
var fh = null;
function gh(a) {
  null === fh ? fh = [a] : fh.push(a);
}
function hh(a, b, c, d) {
  var e = b.interleaved;
  null === e ? (c.next = c, gh(b)) : (c.next = e.next, e.next = c);
  b.interleaved = c;
  return ih(a, d);
}
function ih(a, b) {
  a.lanes |= b;
  var c = a.alternate;
  null !== c && (c.lanes |= b);
  c = a;
  for (a = a.return; null !== a; ) a.childLanes |= b, c = a.alternate, null !== c && (c.childLanes |= b), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var jh = false;
function kh(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function lh(a, b) {
  a = a.updateQueue;
  b.updateQueue === a && (b.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function mh(a, b) {
  return { eventTime: a, lane: b, tag: 0, payload: null, callback: null, next: null };
}
function nh(a, b, c) {
  var d = a.updateQueue;
  if (null === d) return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b.next = b : (b.next = e.next, e.next = b);
    d.pending = b;
    return ih(a, c);
  }
  e = d.interleaved;
  null === e ? (b.next = b, gh(d)) : (b.next = e.next, e.next = b);
  d.interleaved = b;
  return ih(a, c);
}
function oh(a, b, c) {
  b = b.updateQueue;
  if (null !== b && (b = b.shared, 0 !== (c & 4194240))) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
function ph(a, b) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b : f2 = f2.next = b;
    } else e = f2 = b;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b : a.next = b;
  c.lastBaseUpdate = b;
}
function qh(a, b, c, d) {
  var e = a.updateQueue;
  jh = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2) break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              jh = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h) if (h = e.shared.pending, null === h) break;
      else r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b = e.shared.interleaved;
    if (null !== b) {
      e = b;
      do
        g |= e.lane, e = e.next;
      while (e !== b);
    } else null === f2 && (e.shared.lanes = 0);
    rh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function sh(a, b, c) {
  a = b.effects;
  b.effects = null;
  if (null !== a) for (b = 0; b < a.length; b++) {
    var d = a[b], e = d.callback;
    if (null !== e) {
      d.callback = null;
      d = c;
      if ("function" !== typeof e) throw Error(p(191, e));
      e.call(d);
    }
  }
}
var th = {}, uh = Uf(th), vh = Uf(th), wh = Uf(th);
function xh(a) {
  if (a === th) throw Error(p(174));
  return a;
}
function yh(a, b) {
  G(wh, b);
  G(vh, a);
  G(uh, th);
  a = b.nodeType;
  switch (a) {
    case 9:
    case 11:
      b = (b = b.documentElement) ? b.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b.parentNode : b, b = a.namespaceURI || null, a = a.tagName, b = lb(b, a);
  }
  E(uh);
  G(uh, b);
}
function zh() {
  E(uh);
  E(vh);
  E(wh);
}
function Ah(a) {
  xh(wh.current);
  var b = xh(uh.current);
  var c = lb(b, a.type);
  b !== c && (G(vh, a), G(uh, c));
}
function Bh(a) {
  vh.current === a && (E(uh), E(vh));
}
var L = Uf(0);
function Ch(a) {
  for (var b = a; null !== b; ) {
    if (13 === b.tag) {
      var c = b.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data)) return b;
    } else if (19 === b.tag && void 0 !== b.memoizedProps.revealOrder) {
      if (0 !== (b.flags & 128)) return b;
    } else if (null !== b.child) {
      b.child.return = b;
      b = b.child;
      continue;
    }
    if (b === a) break;
    for (; null === b.sibling; ) {
      if (null === b.return || b.return === a) return null;
      b = b.return;
    }
    b.sibling.return = b.return;
    b = b.sibling;
  }
  return null;
}
var Dh = [];
function Eh() {
  for (var a = 0; a < Dh.length; a++) Dh[a]._workInProgressVersionPrimary = null;
  Dh.length = 0;
}
var Fh = ua.ReactCurrentDispatcher, Gh = ua.ReactCurrentBatchConfig, Hh = 0, M = null, N = null, O = null, Ih = false, Jh = false, Kh = 0, Lh = 0;
function P() {
  throw Error(p(321));
}
function Mh(a, b) {
  if (null === b) return false;
  for (var c = 0; c < b.length && c < a.length; c++) if (!He(a[c], b[c])) return false;
  return true;
}
function Nh(a, b, c, d, e, f2) {
  Hh = f2;
  M = b;
  b.memoizedState = null;
  b.updateQueue = null;
  b.lanes = 0;
  Fh.current = null === a || null === a.memoizedState ? Oh : Ph;
  a = c(d, e);
  if (Jh) {
    f2 = 0;
    do {
      Jh = false;
      Kh = 0;
      if (25 <= f2) throw Error(p(301));
      f2 += 1;
      O = N = null;
      b.updateQueue = null;
      Fh.current = Qh;
      a = c(d, e);
    } while (Jh);
  }
  Fh.current = Rh;
  b = null !== N && null !== N.next;
  Hh = 0;
  O = N = M = null;
  Ih = false;
  if (b) throw Error(p(300));
  return a;
}
function Sh() {
  var a = 0 !== Kh;
  Kh = 0;
  return a;
}
function Th() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === O ? M.memoizedState = O = a : O = O.next = a;
  return O;
}
function Uh() {
  if (null === N) {
    var a = M.alternate;
    a = null !== a ? a.memoizedState : null;
  } else a = N.next;
  var b = null === O ? M.memoizedState : O.next;
  if (null !== b) O = b, N = a;
  else {
    if (null === a) throw Error(p(310));
    N = a;
    a = { memoizedState: N.memoizedState, baseState: N.baseState, baseQueue: N.baseQueue, queue: N.queue, next: null };
    null === O ? M.memoizedState = O = a : O = O.next = a;
  }
  return O;
}
function Vh(a, b) {
  return "function" === typeof b ? b(a) : b;
}
function Wh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = N, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Hh & m2) === m2) null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        M.lanes |= m2;
        rh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b.memoizedState) || (dh = true);
    b.memoizedState = d;
    b.baseState = g;
    b.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, M.lanes |= f2, rh |= f2, e = e.next;
    while (e !== a);
  } else null === e && (c.lanes = 0);
  return [b.memoizedState, c.dispatch];
}
function Xh(a) {
  var b = Uh(), c = b.queue;
  if (null === c) throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b.memoizedState) || (dh = true);
    b.memoizedState = f2;
    null === b.baseQueue && (b.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function Yh() {
}
function Zh(a, b) {
  var c = M, d = Uh(), e = b(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, dh = true);
  d = d.queue;
  $h(ai.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b || f2 || null !== O && O.memoizedState.tag & 1) {
    c.flags |= 2048;
    bi(9, ci.bind(null, c, d, e, b), void 0, null);
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(c, b, e);
  }
  return e;
}
function di(a, b, c) {
  a.flags |= 16384;
  a = { getSnapshot: b, value: c };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.stores = [a]) : (c = b.stores, null === c ? b.stores = [a] : c.push(a));
}
function ci(a, b, c, d) {
  b.value = c;
  b.getSnapshot = d;
  ei(b) && fi(a);
}
function ai(a, b, c) {
  return c(function() {
    ei(b) && fi(a);
  });
}
function ei(a) {
  var b = a.getSnapshot;
  a = a.value;
  try {
    var c = b();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function fi(a) {
  var b = ih(a, 1);
  null !== b && gi(b, a, 1, -1);
}
function hi(a) {
  var b = Th();
  "function" === typeof a && (a = a());
  b.memoizedState = b.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Vh, lastRenderedState: a };
  b.queue = a;
  a = a.dispatch = ii.bind(null, M, a);
  return [b.memoizedState, a];
}
function bi(a, b, c, d) {
  a = { tag: a, create: b, destroy: c, deps: d, next: null };
  b = M.updateQueue;
  null === b ? (b = { lastEffect: null, stores: null }, M.updateQueue = b, b.lastEffect = a.next = a) : (c = b.lastEffect, null === c ? b.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b.lastEffect = a));
  return a;
}
function ji() {
  return Uh().memoizedState;
}
function ki(a, b, c, d) {
  var e = Th();
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, void 0, void 0 === d ? null : d);
}
function li(a, b, c, d) {
  var e = Uh();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== N) {
    var g = N.memoizedState;
    f2 = g.destroy;
    if (null !== d && Mh(d, g.deps)) {
      e.memoizedState = bi(b, c, f2, d);
      return;
    }
  }
  M.flags |= a;
  e.memoizedState = bi(1 | b, c, f2, d);
}
function mi(a, b) {
  return ki(8390656, 8, a, b);
}
function $h(a, b) {
  return li(2048, 8, a, b);
}
function ni(a, b) {
  return li(4, 2, a, b);
}
function oi(a, b) {
  return li(4, 4, a, b);
}
function pi(a, b) {
  if ("function" === typeof b) return a = a(), b(a), function() {
    b(null);
  };
  if (null !== b && void 0 !== b) return a = a(), b.current = a, function() {
    b.current = null;
  };
}
function qi(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return li(4, 4, pi.bind(null, b, a), c);
}
function ri() {
}
function si(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  c.memoizedState = [a, b];
  return a;
}
function ti(a, b) {
  var c = Uh();
  b = void 0 === b ? null : b;
  var d = c.memoizedState;
  if (null !== d && null !== b && Mh(b, d[1])) return d[0];
  a = a();
  c.memoizedState = [a, b];
  return a;
}
function ui(a, b, c) {
  if (0 === (Hh & 21)) return a.baseState && (a.baseState = false, dh = true), a.memoizedState = c;
  He(c, b) || (c = yc(), M.lanes |= c, rh |= c, a.baseState = true);
  return b;
}
function vi(a, b) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Gh.transition;
  Gh.transition = {};
  try {
    a(false), b();
  } finally {
    C = c, Gh.transition = d;
  }
}
function wi() {
  return Uh().memoizedState;
}
function xi(a, b, c) {
  var d = yi(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, c);
  else if (c = hh(a, b, c, d), null !== c) {
    var e = R();
    gi(c, a, d, e);
    Bi(c, b, d);
  }
}
function ii(a, b, c) {
  var d = yi(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (zi(a)) Ai(b, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b.lastRenderedReducer, null !== f2)) try {
      var g = b.lastRenderedState, h = f2(g, c);
      e.hasEagerState = true;
      e.eagerState = h;
      if (He(h, g)) {
        var k2 = b.interleaved;
        null === k2 ? (e.next = e, gh(b)) : (e.next = k2.next, k2.next = e);
        b.interleaved = e;
        return;
      }
    } catch (l2) {
    } finally {
    }
    c = hh(a, b, e, d);
    null !== c && (e = R(), gi(c, a, d, e), Bi(c, b, d));
  }
}
function zi(a) {
  var b = a.alternate;
  return a === M || null !== b && b === M;
}
function Ai(a, b) {
  Jh = Ih = true;
  var c = a.pending;
  null === c ? b.next = b : (b.next = c.next, c.next = b);
  a.pending = b;
}
function Bi(a, b, c) {
  if (0 !== (c & 4194240)) {
    var d = b.lanes;
    d &= a.pendingLanes;
    c |= d;
    b.lanes = c;
    Cc(a, c);
  }
}
var Rh = { readContext: eh, useCallback: P, useContext: P, useEffect: P, useImperativeHandle: P, useInsertionEffect: P, useLayoutEffect: P, useMemo: P, useReducer: P, useRef: P, useState: P, useDebugValue: P, useDeferredValue: P, useTransition: P, useMutableSource: P, useSyncExternalStore: P, useId: P, unstable_isNewReconciler: false }, Oh = { readContext: eh, useCallback: function(a, b) {
  Th().memoizedState = [a, void 0 === b ? null : b];
  return a;
}, useContext: eh, useEffect: mi, useImperativeHandle: function(a, b, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ki(
    4194308,
    4,
    pi.bind(null, b, a),
    c
  );
}, useLayoutEffect: function(a, b) {
  return ki(4194308, 4, a, b);
}, useInsertionEffect: function(a, b) {
  return ki(4, 2, a, b);
}, useMemo: function(a, b) {
  var c = Th();
  b = void 0 === b ? null : b;
  a = a();
  c.memoizedState = [a, b];
  return a;
}, useReducer: function(a, b, c) {
  var d = Th();
  b = void 0 !== c ? c(b) : b;
  d.memoizedState = d.baseState = b;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b };
  d.queue = a;
  a = a.dispatch = xi.bind(null, M, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b = Th();
  a = { current: a };
  return b.memoizedState = a;
}, useState: hi, useDebugValue: ri, useDeferredValue: function(a) {
  return Th().memoizedState = a;
}, useTransition: function() {
  var a = hi(false), b = a[0];
  a = vi.bind(null, a[1]);
  Th().memoizedState = a;
  return [b, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b, c) {
  var d = M, e = Th();
  if (I) {
    if (void 0 === c) throw Error(p(407));
    c = c();
  } else {
    c = b();
    if (null === Q) throw Error(p(349));
    0 !== (Hh & 30) || di(d, b, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b };
  e.queue = f2;
  mi(ai.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  bi(9, ci.bind(null, d, f2, c, b), void 0, null);
  return c;
}, useId: function() {
  var a = Th(), b = Q.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b = ":" + b + "R" + c;
    c = Kh++;
    0 < c && (b += "H" + c.toString(32));
    b += ":";
  } else c = Lh++, b = ":" + b + "r" + c.toString(32) + ":";
  return a.memoizedState = b;
}, unstable_isNewReconciler: false }, Ph = {
  readContext: eh,
  useCallback: si,
  useContext: eh,
  useEffect: $h,
  useImperativeHandle: qi,
  useInsertionEffect: ni,
  useLayoutEffect: oi,
  useMemo: ti,
  useReducer: Wh,
  useRef: ji,
  useState: function() {
    return Wh(Vh);
  },
  useDebugValue: ri,
  useDeferredValue: function(a) {
    var b = Uh();
    return ui(b, N.memoizedState, a);
  },
  useTransition: function() {
    var a = Wh(Vh)[0], b = Uh().memoizedState;
    return [a, b];
  },
  useMutableSource: Yh,
  useSyncExternalStore: Zh,
  useId: wi,
  unstable_isNewReconciler: false
}, Qh = { readContext: eh, useCallback: si, useContext: eh, useEffect: $h, useImperativeHandle: qi, useInsertionEffect: ni, useLayoutEffect: oi, useMemo: ti, useReducer: Xh, useRef: ji, useState: function() {
  return Xh(Vh);
}, useDebugValue: ri, useDeferredValue: function(a) {
  var b = Uh();
  return null === N ? b.memoizedState = a : ui(b, N.memoizedState, a);
}, useTransition: function() {
  var a = Xh(Vh)[0], b = Uh().memoizedState;
  return [a, b];
}, useMutableSource: Yh, useSyncExternalStore: Zh, useId: wi, unstable_isNewReconciler: false };
function Ci(a, b) {
  if (a && a.defaultProps) {
    b = A({}, b);
    a = a.defaultProps;
    for (var c in a) void 0 === b[c] && (b[c] = a[c]);
    return b;
  }
  return b;
}
function Di(a, b, c, d) {
  b = a.memoizedState;
  c = c(d, b);
  c = null === c || void 0 === c ? b : A({}, b, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var Ei = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueReplaceState: function(a, b, c) {
  a = a._reactInternals;
  var d = R(), e = yi(a), f2 = mh(d, e);
  f2.tag = 1;
  f2.payload = b;
  void 0 !== c && null !== c && (f2.callback = c);
  b = nh(a, f2, e);
  null !== b && (gi(b, a, e, d), oh(b, a, e));
}, enqueueForceUpdate: function(a, b) {
  a = a._reactInternals;
  var c = R(), d = yi(a), e = mh(c, d);
  e.tag = 2;
  void 0 !== b && null !== b && (e.callback = b);
  b = nh(a, e, d);
  null !== b && (gi(b, a, d, c), oh(b, a, d));
} };
function Fi(a, b, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b.prototype && b.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function Gi(a, b, c) {
  var d = false, e = Vf;
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = eh(f2) : (e = Zf(b) ? Xf : H.current, d = b.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b = new b(c, f2);
  a.memoizedState = null !== b.state && void 0 !== b.state ? b.state : null;
  b.updater = Ei;
  a.stateNode = b;
  b._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b;
}
function Hi(a, b, c, d) {
  a = b.state;
  "function" === typeof b.componentWillReceiveProps && b.componentWillReceiveProps(c, d);
  "function" === typeof b.UNSAFE_componentWillReceiveProps && b.UNSAFE_componentWillReceiveProps(c, d);
  b.state !== a && Ei.enqueueReplaceState(b, b.state, null);
}
function Ii(a, b, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = {};
  kh(a);
  var f2 = b.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = eh(f2) : (f2 = Zf(b) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b.getDerivedStateFromProps;
  "function" === typeof f2 && (Di(a, b, f2, c), e.state = a.memoizedState);
  "function" === typeof b.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b !== e.state && Ei.enqueueReplaceState(e, e.state, null), qh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function Ji(a, b) {
  try {
    var c = "", d = b;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b, stack: e, digest: null };
}
function Ki(a, b, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b ? b : null };
}
function Li(a, b) {
  try {
    console.error(b.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Mi = "function" === typeof WeakMap ? WeakMap : Map;
function Ni(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b.value;
  c.callback = function() {
    Oi || (Oi = true, Pi = d);
    Li(a, b);
  };
  return c;
}
function Qi(a, b, c) {
  c = mh(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Li(a, b);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Li(a, b);
    "function" !== typeof d && (null === Ri ? Ri = /* @__PURE__ */ new Set([this]) : Ri.add(this));
    var c2 = b.stack;
    this.componentDidCatch(b.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Si(a, b, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Mi();
    var e = /* @__PURE__ */ new Set();
    d.set(b, e);
  } else e = d.get(b), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b, e));
  e.has(c) || (e.add(c), a = Ti.bind(null, a, b, c), b.then(a, a));
}
function Ui(a) {
  do {
    var b;
    if (b = 13 === a.tag) b = a.memoizedState, b = null !== b ? null !== b.dehydrated ? true : false : true;
    if (b) return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Vi(a, b, c, d, e) {
  if (0 === (a.mode & 1)) return a === b ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b = mh(-1, 1), b.tag = 2, nh(c, b, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Wi = ua.ReactCurrentOwner, dh = false;
function Xi(a, b, c, d) {
  b.child = null === a ? Vg(b, null, c, d) : Ug(b, a.child, c, d);
}
function Yi(a, b, c, d, e) {
  c = c.render;
  var f2 = b.ref;
  ch(b, e);
  d = Nh(a, b, c, d, f2, e);
  c = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && c && vg(b);
  b.flags |= 1;
  Xi(a, b, d, e);
  return b.child;
}
function $i(a, b, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !aj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps) return b.tag = 15, b.type = f2, bj(a, b, f2, d, e);
    a = Rg(c.type, null, d, b, b.mode, e);
    a.ref = b.ref;
    a.return = b;
    return b.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b.ref) return Zi(a, b, e);
  }
  b.flags |= 1;
  a = Pg(f2, d);
  a.ref = b.ref;
  a.return = b;
  return b.child = a;
}
function bj(a, b, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b.ref) if (dh = false, b.pendingProps = d = f2, 0 !== (a.lanes & e)) 0 !== (a.flags & 131072) && (dh = true);
    else return b.lanes = a.lanes, Zi(a, b, e);
  }
  return cj(a, b, c, d, e);
}
function dj(a, b, c) {
  var d = b.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode) if (0 === (b.mode & 1)) b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(ej, fj), fj |= c;
  else {
    if (0 === (c & 1073741824)) return a = null !== f2 ? f2.baseLanes | c : c, b.lanes = b.childLanes = 1073741824, b.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b.updateQueue = null, G(ej, fj), fj |= a, null;
    b.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
    d = null !== f2 ? f2.baseLanes : c;
    G(ej, fj);
    fj |= d;
  }
  else null !== f2 ? (d = f2.baseLanes | c, b.memoizedState = null) : d = c, G(ej, fj), fj |= d;
  Xi(a, b, e, c);
  return b.child;
}
function gj(a, b) {
  var c = b.ref;
  if (null === a && null !== c || null !== a && a.ref !== c) b.flags |= 512, b.flags |= 2097152;
}
function cj(a, b, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b, f2);
  ch(b, e);
  c = Nh(a, b, c, d, f2, e);
  d = Sh();
  if (null !== a && !dh) return b.updateQueue = a.updateQueue, b.flags &= -2053, a.lanes &= ~e, Zi(a, b, e);
  I && d && vg(b);
  b.flags |= 1;
  Xi(a, b, c, e);
  return b.child;
}
function hj(a, b, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b);
  } else f2 = false;
  ch(b, e);
  if (null === b.stateNode) ij(a, b), Gi(b, c, d), Ii(b, c, d, e), d = true;
  else if (null === a) {
    var g = b.stateNode, h = b.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = eh(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && Hi(b, g, d, l2);
    jh = false;
    var r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    k2 = b.memoizedState;
    h !== d || r2 !== k2 || Wf.current || jh ? ("function" === typeof m2 && (Di(b, c, m2, d), k2 = b.memoizedState), (h = jh || Fi(b, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), b.memoizedProps = d, b.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b.flags |= 4194308), d = false);
  } else {
    g = b.stateNode;
    lh(a, b);
    h = b.memoizedProps;
    l2 = b.type === b.elementType ? h : Ci(b.type, h);
    g.props = l2;
    q2 = b.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = eh(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && Hi(b, g, d, k2);
    jh = false;
    r2 = b.memoizedState;
    g.state = r2;
    qh(b, d, g, e);
    var n2 = b.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || jh ? ("function" === typeof y2 && (Di(b, c, y2, d), n2 = b.memoizedState), (l2 = jh || Fi(b, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), b.memoizedProps = d, b.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b.flags |= 1024), d = false);
  }
  return jj(a, b, c, d, f2, e);
}
function jj(a, b, c, d, e, f2) {
  gj(a, b);
  var g = 0 !== (b.flags & 128);
  if (!d && !g) return e && dg(b, c, false), Zi(a, b, f2);
  d = b.stateNode;
  Wi.current = b;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b.flags |= 1;
  null !== a && g ? (b.child = Ug(b, a.child, null, f2), b.child = Ug(b, null, h, f2)) : Xi(a, b, h, f2);
  b.memoizedState = d.state;
  e && dg(b, c, true);
  return b.child;
}
function kj(a) {
  var b = a.stateNode;
  b.pendingContext ? ag(a, b.pendingContext, b.pendingContext !== b.context) : b.context && ag(a, b.context, false);
  yh(a, b.containerInfo);
}
function lj(a, b, c, d, e) {
  Ig();
  Jg(e);
  b.flags |= 256;
  Xi(a, b, c, d);
  return b.child;
}
var mj = { dehydrated: null, treeContext: null, retryLane: 0 };
function nj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function oj(a, b, c) {
  var d = b.pendingProps, e = L.current, f2 = false, g = 0 !== (b.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h) f2 = true, b.flags &= -129;
  else if (null === a || null !== a.memoizedState) e |= 1;
  G(L, e & 1);
  if (null === a) {
    Eg(b);
    a = b.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a)) return 0 === (b.mode & 1) ? b.lanes = 1 : "$!" === a.data ? b.lanes = 8 : b.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b.mode, f2 = b.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = pj(g, d, 0, null), a = Tg(a, d, c, null), f2.return = b, a.return = b, f2.sibling = a, b.child = f2, b.child.memoizedState = nj(c), b.memoizedState = mj, a) : qj(b, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h)) return rj(a, b, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b.child !== e ? (d = b.child, d.childLanes = 0, d.pendingProps = k2, b.deletions = null) : (d = Pg(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = Pg(h, f2) : (f2 = Tg(f2, g, c, null), f2.flags |= 2);
    f2.return = b;
    d.return = b;
    d.sibling = f2;
    b.child = d;
    d = f2;
    f2 = b.child;
    g = a.child.memoizedState;
    g = null === g ? nj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b.memoizedState = mj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = Pg(f2, { mode: "visible", children: d.children });
  0 === (b.mode & 1) && (d.lanes = c);
  d.return = b;
  d.sibling = null;
  null !== a && (c = b.deletions, null === c ? (b.deletions = [a], b.flags |= 16) : c.push(a));
  b.child = d;
  b.memoizedState = null;
  return d;
}
function qj(a, b) {
  b = pj({ mode: "visible", children: b }, a.mode, 0, null);
  b.return = a;
  return a.child = b;
}
function sj(a, b, c, d) {
  null !== d && Jg(d);
  Ug(b, a.child, null, c);
  a = qj(b, b.pendingProps.children);
  a.flags |= 2;
  b.memoizedState = null;
  return a;
}
function rj(a, b, c, d, e, f2, g) {
  if (c) {
    if (b.flags & 256) return b.flags &= -257, d = Ki(Error(p(422))), sj(a, b, g, d);
    if (null !== b.memoizedState) return b.child = a.child, b.flags |= 128, null;
    f2 = d.fallback;
    e = b.mode;
    d = pj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Tg(f2, e, g, null);
    f2.flags |= 2;
    d.return = b;
    f2.return = b;
    d.sibling = f2;
    b.child = d;
    0 !== (b.mode & 1) && Ug(b, a.child, null, g);
    b.child.memoizedState = nj(g);
    b.memoizedState = mj;
    return f2;
  }
  if (0 === (b.mode & 1)) return sj(a, b, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d) var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Ki(f2, d, void 0);
    return sj(a, b, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (dh || h) {
    d = Q;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, ih(a, e), gi(d, a, e, -1));
    }
    tj();
    d = Ki(Error(p(421)));
    return sj(a, b, g, d);
  }
  if ("$?" === e.data) return b.flags |= 128, b.child = a.child, b = uj.bind(null, a), e._reactRetry = b, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b);
  b = qj(b, d.children);
  b.flags |= 4096;
  return b;
}
function vj(a, b, c) {
  a.lanes |= b;
  var d = a.alternate;
  null !== d && (d.lanes |= b);
  bh(a.return, b, c);
}
function wj(a, b, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function xj(a, b, c) {
  var d = b.pendingProps, e = d.revealOrder, f2 = d.tail;
  Xi(a, b, d.children, c);
  d = L.current;
  if (0 !== (d & 2)) d = d & 1 | 2, b.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128)) a: for (a = b.child; null !== a; ) {
      if (13 === a.tag) null !== a.memoizedState && vj(a, c, b);
      else if (19 === a.tag) vj(a, c, b);
      else if (null !== a.child) {
        a.child.return = a;
        a = a.child;
        continue;
      }
      if (a === b) break a;
      for (; null === a.sibling; ) {
        if (null === a.return || a.return === b) break a;
        a = a.return;
      }
      a.sibling.return = a.return;
      a = a.sibling;
    }
    d &= 1;
  }
  G(L, d);
  if (0 === (b.mode & 1)) b.memoizedState = null;
  else switch (e) {
    case "forwards":
      c = b.child;
      for (e = null; null !== c; ) a = c.alternate, null !== a && null === Ch(a) && (e = c), c = c.sibling;
      c = e;
      null === c ? (e = b.child, b.child = null) : (e = c.sibling, c.sibling = null);
      wj(b, false, e, c, f2);
      break;
    case "backwards":
      c = null;
      e = b.child;
      for (b.child = null; null !== e; ) {
        a = e.alternate;
        if (null !== a && null === Ch(a)) {
          b.child = e;
          break;
        }
        a = e.sibling;
        e.sibling = c;
        c = e;
        e = a;
      }
      wj(b, true, c, null, f2);
      break;
    case "together":
      wj(b, false, null, null, void 0);
      break;
    default:
      b.memoizedState = null;
  }
  return b.child;
}
function ij(a, b) {
  0 === (b.mode & 1) && null !== a && (a.alternate = null, b.alternate = null, b.flags |= 2);
}
function Zi(a, b, c) {
  null !== a && (b.dependencies = a.dependencies);
  rh |= b.lanes;
  if (0 === (c & b.childLanes)) return null;
  if (null !== a && b.child !== a.child) throw Error(p(153));
  if (null !== b.child) {
    a = b.child;
    c = Pg(a, a.pendingProps);
    b.child = c;
    for (c.return = b; null !== a.sibling; ) a = a.sibling, c = c.sibling = Pg(a, a.pendingProps), c.return = b;
    c.sibling = null;
  }
  return b.child;
}
function yj(a, b, c) {
  switch (b.tag) {
    case 3:
      kj(b);
      Ig();
      break;
    case 5:
      Ah(b);
      break;
    case 1:
      Zf(b.type) && cg(b);
      break;
    case 4:
      yh(b, b.stateNode.containerInfo);
      break;
    case 10:
      var d = b.type._context, e = b.memoizedProps.value;
      G(Wg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated) return G(L, L.current & 1), b.flags |= 128, null;
        if (0 !== (c & b.child.childLanes)) return oj(a, b, c);
        G(L, L.current & 1);
        a = Zi(a, b, c);
        return null !== a ? a.sibling : null;
      }
      G(L, L.current & 1);
      break;
    case 19:
      d = 0 !== (c & b.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d) return xj(a, b, c);
        b.flags |= 128;
      }
      e = b.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(L, L.current);
      if (d) break;
      else return null;
    case 22:
    case 23:
      return b.lanes = 0, dj(a, b, c);
  }
  return Zi(a, b, c);
}
var zj, Aj, Bj, Cj;
zj = function(a, b) {
  for (var c = b.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag) a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b) break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b) return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Aj = function() {
};
Bj = function(a, b, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b.stateNode;
    xh(uh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e) if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2]) if ("style" === l2) {
      var h = e[l2];
      for (g in h) h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
    } else "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h)) if ("style" === l2) if (h) {
        for (g in h) !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
        for (g in k2) k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
      } else c || (f2 || (f2 = []), f2.push(
        l2,
        c
      )), c = k2;
      else "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b.updateQueue = l2) b.flags |= 4;
  }
};
Cj = function(a, b, c, d) {
  c !== d && (b.flags |= 4);
};
function Dj(a, b) {
  if (!I) switch (a.tailMode) {
    case "hidden":
      b = a.tail;
      for (var c = null; null !== b; ) null !== b.alternate && (c = b), b = b.sibling;
      null === c ? a.tail = null : c.sibling = null;
      break;
    case "collapsed":
      c = a.tail;
      for (var d = null; null !== c; ) null !== c.alternate && (d = c), c = c.sibling;
      null === d ? b || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
  }
}
function S(a) {
  var b = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b) for (var e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else for (e = a.child; null !== e; ) c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b;
}
function Ej(a, b, c) {
  var d = b.pendingProps;
  wg(b);
  switch (b.tag) {
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
      return S(b), null;
    case 1:
      return Zf(b.type) && $f(), S(b), null;
    case 3:
      d = b.stateNode;
      zh();
      E(Wf);
      E(H);
      Eh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child) Gg(b) ? b.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b.flags & 256) || (b.flags |= 1024, null !== zg && (Fj(zg), zg = null));
      Aj(a, b);
      S(b);
      return null;
    case 5:
      Bh(b);
      var e = xh(wh.current);
      c = b.type;
      if (null !== a && null != b.stateNode) Bj(a, b, c, d, e), a.ref !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      else {
        if (!d) {
          if (null === b.stateNode) throw Error(p(166));
          S(b);
          return null;
        }
        a = xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.type;
          var f2 = b.memoizedProps;
          d[Of] = b;
          d[Pf] = f2;
          a = 0 !== (b.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++) D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2) if (f2.hasOwnProperty(g)) {
            var h = f2[g];
            "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
              d.textContent,
              h,
              a
            ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
          }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b.updateQueue = d;
          null !== d && (b.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b;
          a[Pf] = d;
          zj(a, b, false, false);
          b.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++) D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h) if (h.hasOwnProperty(f2)) {
              var k2 = h[f2];
              "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
            }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b.flags |= 4);
        }
        null !== b.ref && (b.flags |= 512, b.flags |= 2097152);
      }
      S(b);
      return null;
    case 6:
      if (a && null != b.stateNode) Cj(a, b, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b.stateNode) throw Error(p(166));
        c = xh(wh.current);
        xh(uh.current);
        if (Gg(b)) {
          d = b.stateNode;
          c = b.memoizedProps;
          d[Of] = b;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a) switch (a.tag) {
              case 3:
                Af(d.nodeValue, c, 0 !== (a.mode & 1));
                break;
              case 5:
                true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
            }
          }
          f2 && (b.flags |= 4);
        } else d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b, b.stateNode = d;
      }
      S(b);
      return null;
    case 13:
      E(L);
      d = b.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b.mode & 1) && 0 === (b.flags & 128)) Hg(), Ig(), b.flags |= 98560, f2 = false;
        else if (f2 = Gg(b), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2) throw Error(p(318));
            f2 = b.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2) throw Error(p(317));
            f2[Of] = b;
          } else Ig(), 0 === (b.flags & 128) && (b.memoizedState = null), b.flags |= 4;
          S(b);
          f2 = false;
        } else null !== zg && (Fj(zg), zg = null), f2 = true;
        if (!f2) return b.flags & 65536 ? b : null;
      }
      if (0 !== (b.flags & 128)) return b.lanes = c, b;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b.child.flags |= 8192, 0 !== (b.mode & 1) && (null === a || 0 !== (L.current & 1) ? 0 === T && (T = 3) : tj()));
      null !== b.updateQueue && (b.flags |= 4);
      S(b);
      return null;
    case 4:
      return zh(), Aj(a, b), null === a && sf(b.stateNode.containerInfo), S(b), null;
    case 10:
      return ah(b.type._context), S(b), null;
    case 17:
      return Zf(b.type) && $f(), S(b), null;
    case 19:
      E(L);
      f2 = b.memoizedState;
      if (null === f2) return S(b), null;
      d = 0 !== (b.flags & 128);
      g = f2.rendering;
      if (null === g) if (d) Dj(f2, false);
      else {
        if (0 !== T || null !== a && 0 !== (a.flags & 128)) for (a = b.child; null !== a; ) {
          g = Ch(a);
          if (null !== g) {
            b.flags |= 128;
            Dj(f2, false);
            d = g.updateQueue;
            null !== d && (b.updateQueue = d, b.flags |= 4);
            b.subtreeFlags = 0;
            d = c;
            for (c = b.child; null !== c; ) f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
            G(L, L.current & 1 | 2);
            return b.child;
          }
          a = a.sibling;
        }
        null !== f2.tail && B() > Gj && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
      }
      else {
        if (!d) if (a = Ch(g), null !== a) {
          if (b.flags |= 128, d = true, c = a.updateQueue, null !== c && (b.updateQueue = c, b.flags |= 4), Dj(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I) return S(b), null;
        } else 2 * B() - f2.renderingStartTime > Gj && 1073741824 !== c && (b.flags |= 128, d = true, Dj(f2, false), b.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b.child, b.child = g) : (c = f2.last, null !== c ? c.sibling = g : b.child = g, f2.last = g);
      }
      if (null !== f2.tail) return b = f2.tail, f2.rendering = b, f2.tail = b.sibling, f2.renderingStartTime = B(), b.sibling = null, c = L.current, G(L, d ? c & 1 | 2 : c & 1), b;
      S(b);
      return null;
    case 22:
    case 23:
      return Hj(), d = null !== b.memoizedState, null !== a && null !== a.memoizedState !== d && (b.flags |= 8192), d && 0 !== (b.mode & 1) ? 0 !== (fj & 1073741824) && (S(b), b.subtreeFlags & 6 && (b.flags |= 8192)) : S(b), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b.tag));
}
function Ij(a, b) {
  wg(b);
  switch (b.tag) {
    case 1:
      return Zf(b.type) && $f(), a = b.flags, a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 3:
      return zh(), E(Wf), E(H), Eh(), a = b.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b.flags = a & -65537 | 128, b) : null;
    case 5:
      return Bh(b), null;
    case 13:
      E(L);
      a = b.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b.alternate) throw Error(p(340));
        Ig();
      }
      a = b.flags;
      return a & 65536 ? (b.flags = a & -65537 | 128, b) : null;
    case 19:
      return E(L), null;
    case 4:
      return zh(), null;
    case 10:
      return ah(b.type._context), null;
    case 22:
    case 23:
      return Hj(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Jj = false, U = false, Kj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Lj(a, b) {
  var c = a.ref;
  if (null !== c) if ("function" === typeof c) try {
    c(null);
  } catch (d) {
    W(a, b, d);
  }
  else c.current = null;
}
function Mj(a, b, c) {
  try {
    c();
  } catch (d) {
    W(a, b, d);
  }
}
var Nj = false;
function Oj(a, b) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a) var c = { start: a.selectionStart, end: a.selectionEnd };
    else a: {
      c = (c = a.ownerDocument) && c.defaultView || window;
      var d = c.getSelection && c.getSelection();
      if (d && 0 !== d.rangeCount) {
        c = d.anchorNode;
        var e = d.anchorOffset, f2 = d.focusNode;
        d = d.focusOffset;
        try {
          c.nodeType, f2.nodeType;
        } catch (F2) {
          c = null;
          break a;
        }
        var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
        b: for (; ; ) {
          for (var y2; ; ) {
            q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
            q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
            3 === q2.nodeType && (g += q2.nodeValue.length);
            if (null === (y2 = q2.firstChild)) break;
            r2 = q2;
            q2 = y2;
          }
          for (; ; ) {
            if (q2 === a) break b;
            r2 === c && ++l2 === e && (h = g);
            r2 === f2 && ++m2 === d && (k2 = g);
            if (null !== (y2 = q2.nextSibling)) break;
            q2 = r2;
            r2 = q2.parentNode;
          }
          q2 = y2;
        }
        c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
      } else c = null;
    }
    c = c || { start: 0, end: 0 };
  } else c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b; null !== V; ) if (b = V, a = b.child, 0 !== (b.subtreeFlags & 1028) && null !== a) a.return = b, V = a;
  else for (; null !== V; ) {
    b = V;
    try {
      var n2 = b.alternate;
      if (0 !== (b.flags & 1024)) switch (b.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (null !== n2) {
            var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b.stateNode, w2 = x2.getSnapshotBeforeUpdate(b.elementType === b.type ? t2 : Ci(b.type, t2), J2);
            x2.__reactInternalSnapshotBeforeUpdate = w2;
          }
          break;
        case 3:
          var u2 = b.stateNode.containerInfo;
          1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(p(163));
      }
    } catch (F2) {
      W(b, b.return, F2);
    }
    a = b.sibling;
    if (null !== a) {
      a.return = b.return;
      V = a;
      break;
    }
    V = b.return;
  }
  n2 = Nj;
  Nj = false;
  return n2;
}
function Pj(a, b, c) {
  var d = b.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Mj(b, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Qj(a, b) {
  b = b.updateQueue;
  b = null !== b ? b.lastEffect : null;
  if (null !== b) {
    var c = b = b.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b);
  }
}
function Rj(a) {
  var b = a.ref;
  if (null !== b) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b ? b(a) : b.current = a;
  }
}
function Sj(a) {
  var b = a.alternate;
  null !== b && (a.alternate = null, Sj(b));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b = a.stateNode, null !== b && (delete b[Of], delete b[Pf], delete b[of], delete b[Qf], delete b[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Tj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Uj(a) {
  a: for (; ; ) {
    for (; null === a.sibling; ) {
      if (null === a.return || Tj(a.return)) return null;
      a = a.return;
    }
    a.sibling.return = a.return;
    for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
      if (a.flags & 2) continue a;
      if (null === a.child || 4 === a.tag) continue a;
      else a.child.return = a, a = a.child;
    }
    if (!(a.flags & 2)) return a.stateNode;
  }
}
function Vj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b) : c.insertBefore(a, b) : (8 === c.nodeType ? (b = c.parentNode, b.insertBefore(a, c)) : (b = c, b.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b.onclick || (b.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a)) for (Vj(a, b, c), a = a.sibling; null !== a; ) Vj(a, b, c), a = a.sibling;
}
function Wj(a, b, c) {
  var d = a.tag;
  if (5 === d || 6 === d) a = a.stateNode, b ? c.insertBefore(a, b) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a)) for (Wj(a, b, c), a = a.sibling; null !== a; ) Wj(a, b, c), a = a.sibling;
}
var X = null, Xj = false;
function Yj(a, b, c) {
  for (c = c.child; null !== c; ) Zj(a, b, c), c = c.sibling;
}
function Zj(a, b, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount) try {
    lc.onCommitFiberUnmount(kc, c);
  } catch (h) {
  }
  switch (c.tag) {
    case 5:
      U || Lj(c, b);
    case 6:
      var d = X, e = Xj;
      X = null;
      Yj(a, b, c);
      X = d;
      Xj = e;
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Xj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Xj;
      X = c.stateNode.containerInfo;
      Xj = true;
      Yj(a, b, c);
      X = d;
      Xj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Mj(c, b, g) : 0 !== (f2 & 4) && Mj(c, b, g));
          e = e.next;
        } while (e !== d);
      }
      Yj(a, b, c);
      break;
    case 1:
      if (!U && (Lj(c, b), d = c.stateNode, "function" === typeof d.componentWillUnmount)) try {
        d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
      } catch (h) {
        W(c, b, h);
      }
      Yj(a, b, c);
      break;
    case 21:
      Yj(a, b, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Yj(a, b, c), U = d) : Yj(a, b, c);
      break;
    default:
      Yj(a, b, c);
  }
}
function ak(a) {
  var b = a.updateQueue;
  if (null !== b) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Kj());
    b.forEach(function(b2) {
      var d = bk.bind(null, a, b2);
      c.has(b2) || (c.add(b2), b2.then(d, d));
    });
  }
}
function ck(a, b) {
  var c = b.deletions;
  if (null !== c) for (var d = 0; d < c.length; d++) {
    var e = c[d];
    try {
      var f2 = a, g = b, h = g;
      a: for (; null !== h; ) {
        switch (h.tag) {
          case 5:
            X = h.stateNode;
            Xj = false;
            break a;
          case 3:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
          case 4:
            X = h.stateNode.containerInfo;
            Xj = true;
            break a;
        }
        h = h.return;
      }
      if (null === X) throw Error(p(160));
      Zj(f2, g, e);
      X = null;
      Xj = false;
      var k2 = e.alternate;
      null !== k2 && (k2.return = null);
      e.return = null;
    } catch (l2) {
      W(e, b, l2);
    }
  }
  if (b.subtreeFlags & 12854) for (b = b.child; null !== b; ) dk(b, a), b = b.sibling;
}
function dk(a, b) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      ck(b, a);
      ek(a);
      if (d & 4) {
        try {
          Pj(3, a, a.return), Qj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Pj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      break;
    case 5:
      ck(b, a);
      ek(a);
      d & 512 && null !== c && Lj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2) try {
          "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
          vb(h, g);
          var l2 = vb(h, f2);
          for (g = 0; g < k2.length; g += 2) {
            var m2 = k2[g], q2 = k2[g + 1];
            "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
          }
          switch (h) {
            case "input":
              bb(e, f2);
              break;
            case "textarea":
              ib(e, f2);
              break;
            case "select":
              var r2 = e._wrapperState.wasMultiple;
              e._wrapperState.wasMultiple = !!f2.multiple;
              var y2 = f2.value;
              null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                e,
                !!f2.multiple,
                f2.defaultValue,
                true
              ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
          }
          e[Pf] = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 6:
      ck(b, a);
      ek(a);
      if (d & 4) {
        if (null === a.stateNode) throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      ck(b, a);
      ek(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated) try {
        bd(b.containerInfo);
      } catch (t2) {
        W(a, a.return, t2);
      }
      break;
    case 4:
      ck(b, a);
      ek(a);
      break;
    case 13:
      ck(b, a);
      ek(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (fk = B()));
      d & 4 && ak(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, ck(b, a), U = l2) : ck(b, a);
      ek(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1)) for (V = a, m2 = a.child; null !== m2; ) {
          for (q2 = V = m2; null !== V; ) {
            r2 = V;
            y2 = r2.child;
            switch (r2.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Pj(4, r2, r2.return);
                break;
              case 1:
                Lj(r2, r2.return);
                var n2 = r2.stateNode;
                if ("function" === typeof n2.componentWillUnmount) {
                  d = r2;
                  c = r2.return;
                  try {
                    b = d, n2.props = b.memoizedProps, n2.state = b.memoizedState, n2.componentWillUnmount();
                  } catch (t2) {
                    W(d, c, t2);
                  }
                }
                break;
              case 5:
                Lj(r2, r2.return);
                break;
              case 22:
                if (null !== r2.memoizedState) {
                  gk(q2);
                  continue;
                }
            }
            null !== y2 ? (y2.return = r2, V = y2) : gk(q2);
          }
          m2 = m2.sibling;
        }
        a: for (m2 = null, q2 = a; ; ) {
          if (5 === q2.tag) {
            if (null === m2) {
              m2 = q2;
              try {
                e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
              } catch (t2) {
                W(a, a.return, t2);
              }
            }
          } else if (6 === q2.tag) {
            if (null === m2) try {
              q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
            } catch (t2) {
              W(a, a.return, t2);
            }
          } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
            q2.child.return = q2;
            q2 = q2.child;
            continue;
          }
          if (q2 === a) break a;
          for (; null === q2.sibling; ) {
            if (null === q2.return || q2.return === a) break a;
            m2 === q2 && (m2 = null);
            q2 = q2.return;
          }
          m2 === q2 && (m2 = null);
          q2.sibling.return = q2.return;
          q2 = q2.sibling;
        }
      }
      break;
    case 19:
      ck(b, a);
      ek(a);
      d & 4 && ak(a);
      break;
    case 21:
      break;
    default:
      ck(
        b,
        a
      ), ek(a);
  }
}
function ek(a) {
  var b = a.flags;
  if (b & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Tj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Uj(a);
          Wj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Uj(a);
          Vj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b & 4096 && (a.flags &= -4097);
}
function hk(a, b, c) {
  V = a;
  ik(a);
}
function ik(a, b, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Jj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Jj;
        var l2 = U;
        Jj = g;
        if ((U = k2) && !l2) for (V = e; null !== V; ) g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? jk(e) : null !== k2 ? (k2.return = g, V = k2) : jk(e);
        for (; null !== f2; ) V = f2, ik(f2), f2 = f2.sibling;
        V = e;
        Jj = h;
        U = l2;
      }
      kk(a);
    } else 0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : kk(a);
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b = V;
    if (0 !== (b.flags & 8772)) {
      var c = b.alternate;
      try {
        if (0 !== (b.flags & 8772)) switch (b.tag) {
          case 0:
          case 11:
          case 15:
            U || Qj(5, b);
            break;
          case 1:
            var d = b.stateNode;
            if (b.flags & 4 && !U) if (null === c) d.componentDidMount();
            else {
              var e = b.elementType === b.type ? c.memoizedProps : Ci(b.type, c.memoizedProps);
              d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
            }
            var f2 = b.updateQueue;
            null !== f2 && sh(b, f2, d);
            break;
          case 3:
            var g = b.updateQueue;
            if (null !== g) {
              c = null;
              if (null !== b.child) switch (b.child.tag) {
                case 5:
                  c = b.child.stateNode;
                  break;
                case 1:
                  c = b.child.stateNode;
              }
              sh(b, g, c);
            }
            break;
          case 5:
            var h = b.stateNode;
            if (null === c && b.flags & 4) {
              c = h;
              var k2 = b.memoizedProps;
              switch (b.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  k2.autoFocus && c.focus();
                  break;
                case "img":
                  k2.src && (c.src = k2.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (null === b.memoizedState) {
              var l2 = b.alternate;
              if (null !== l2) {
                var m2 = l2.memoizedState;
                if (null !== m2) {
                  var q2 = m2.dehydrated;
                  null !== q2 && bd(q2);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(p(163));
        }
        U || b.flags & 512 && Rj(b);
      } catch (r2) {
        W(b, b.return, r2);
      }
    }
    if (b === a) {
      V = null;
      break;
    }
    c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function gk(a) {
  for (; null !== V; ) {
    var b = V;
    if (b === a) {
      V = null;
      break;
    }
    var c = b.sibling;
    if (null !== c) {
      c.return = b.return;
      V = c;
      break;
    }
    V = b.return;
  }
}
function jk(a) {
  for (; null !== V; ) {
    var b = V;
    try {
      switch (b.tag) {
        case 0:
        case 11:
        case 15:
          var c = b.return;
          try {
            Qj(4, b);
          } catch (k2) {
            W(b, c, k2);
          }
          break;
        case 1:
          var d = b.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b, e, k2);
            }
          }
          var f2 = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, f2, k2);
          }
          break;
        case 5:
          var g = b.return;
          try {
            Rj(b);
          } catch (k2) {
            W(b, g, k2);
          }
      }
    } catch (k2) {
      W(b, b.return, k2);
    }
    if (b === a) {
      V = null;
      break;
    }
    var h = b.sibling;
    if (null !== h) {
      h.return = b.return;
      V = h;
      break;
    }
    V = b.return;
  }
}
var lk = Math.ceil, mk = ua.ReactCurrentDispatcher, nk = ua.ReactCurrentOwner, ok = ua.ReactCurrentBatchConfig, K = 0, Q = null, Y = null, Z = 0, fj = 0, ej = Uf(0), T = 0, pk = null, rh = 0, qk = 0, rk = 0, sk = null, tk = null, fk = 0, Gj = Infinity, uk = null, Oi = false, Pi = null, Ri = null, vk = false, wk = null, xk = 0, yk = 0, zk = null, Ak = -1, Bk = 0;
function R() {
  return 0 !== (K & 6) ? B() : -1 !== Ak ? Ak : Ak = B();
}
function yi(a) {
  if (0 === (a.mode & 1)) return 1;
  if (0 !== (K & 2) && 0 !== Z) return Z & -Z;
  if (null !== Kg.transition) return 0 === Bk && (Bk = yc()), Bk;
  a = C;
  if (0 !== a) return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function gi(a, b, c, d) {
  if (50 < yk) throw yk = 0, zk = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== Q) a === Q && (0 === (K & 2) && (qk |= c), 4 === T && Ck(a, Z)), Dk(a, d), 1 === c && 0 === K && 0 === (b.mode & 1) && (Gj = B() + 500, fg && jg());
}
function Dk(a, b) {
  var c = a.callbackNode;
  wc(a, b);
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b = d & -d, a.callbackPriority !== b) {
    null != c && bc(c);
    if (1 === b) 0 === a.tag ? ig(Ek.bind(null, a)) : hg(Ek.bind(null, a)), Jf(function() {
      0 === (K & 6) && jg();
    }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Fk(c, Gk.bind(null, a));
    }
    a.callbackPriority = b;
    a.callbackNode = c;
  }
}
function Gk(a, b) {
  Ak = -1;
  Bk = 0;
  if (0 !== (K & 6)) throw Error(p(327));
  var c = a.callbackNode;
  if (Hk() && a.callbackNode !== c) return null;
  var d = uc(a, a === Q ? Z : 0);
  if (0 === d) return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b) b = Ik(a, d);
  else {
    b = d;
    var e = K;
    K |= 2;
    var f2 = Jk();
    if (Q !== a || Z !== b) uk = null, Gj = B() + 500, Kk(a, b);
    do
      try {
        Lk();
        break;
      } catch (h) {
        Mk(a, h);
      }
    while (1);
    $g();
    mk.current = f2;
    K = e;
    null !== Y ? b = 0 : (Q = null, Z = 0, b = T);
  }
  if (0 !== b) {
    2 === b && (e = xc(a), 0 !== e && (d = e, b = Nk(a, e)));
    if (1 === b) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
    if (6 === b) Ck(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Ok(e) && (b = Ik(a, d), 2 === b && (f2 = xc(a), 0 !== f2 && (d = f2, b = Nk(a, f2))), 1 === b)) throw c = pk, Kk(a, 0), Ck(a, d), Dk(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Pk(a, tk, uk);
          break;
        case 3:
          Ck(a, d);
          if ((d & 130023424) === d && (b = fk + 500 - B(), 10 < b)) {
            if (0 !== uc(a, 0)) break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              R();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), b);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 4:
          Ck(a, d);
          if ((d & 4194240) === d) break;
          b = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * lk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Pk.bind(null, a, tk, uk), d);
            break;
          }
          Pk(a, tk, uk);
          break;
        case 5:
          Pk(a, tk, uk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Dk(a, B());
  return a.callbackNode === c ? Gk.bind(null, a) : null;
}
function Nk(a, b) {
  var c = sk;
  a.current.memoizedState.isDehydrated && (Kk(a, b).flags |= 256);
  a = Ik(a, b);
  2 !== a && (b = tk, tk = c, null !== b && Fj(b));
  return a;
}
function Fj(a) {
  null === tk ? tk = a : tk.push.apply(tk, a);
}
function Ok(a) {
  for (var b = a; ; ) {
    if (b.flags & 16384) {
      var c = b.updateQueue;
      if (null !== c && (c = c.stores, null !== c)) for (var d = 0; d < c.length; d++) {
        var e = c[d], f2 = e.getSnapshot;
        e = e.value;
        try {
          if (!He(f2(), e)) return false;
        } catch (g) {
          return false;
        }
      }
    }
    c = b.child;
    if (b.subtreeFlags & 16384 && null !== c) c.return = b, b = c;
    else {
      if (b === a) break;
      for (; null === b.sibling; ) {
        if (null === b.return || b.return === a) return true;
        b = b.return;
      }
      b.sibling.return = b.return;
      b = b.sibling;
    }
  }
  return true;
}
function Ck(a, b) {
  b &= ~rk;
  b &= ~qk;
  a.suspendedLanes |= b;
  a.pingedLanes &= ~b;
  for (a = a.expirationTimes; 0 < b; ) {
    var c = 31 - oc(b), d = 1 << c;
    a[c] = -1;
    b &= ~d;
  }
}
function Ek(a) {
  if (0 !== (K & 6)) throw Error(p(327));
  Hk();
  var b = uc(a, 0);
  if (0 === (b & 1)) return Dk(a, B()), null;
  var c = Ik(a, b);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b = d, c = Nk(a, d));
  }
  if (1 === c) throw c = pk, Kk(a, 0), Ck(a, b), Dk(a, B()), c;
  if (6 === c) throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b;
  Pk(a, tk, uk);
  Dk(a, B());
  return null;
}
function Qk(a, b) {
  var c = K;
  K |= 1;
  try {
    return a(b);
  } finally {
    K = c, 0 === K && (Gj = B() + 500, fg && jg());
  }
}
function Rk(a) {
  null !== wk && 0 === wk.tag && 0 === (K & 6) && Hk();
  var b = K;
  K |= 1;
  var c = ok.transition, d = C;
  try {
    if (ok.transition = null, C = 1, a) return a();
  } finally {
    C = d, ok.transition = c, K = b, 0 === (K & 6) && jg();
  }
}
function Hj() {
  fj = ej.current;
  E(ej);
}
function Kk(a, b) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y) for (c = Y.return; null !== c; ) {
    var d = c;
    wg(d);
    switch (d.tag) {
      case 1:
        d = d.type.childContextTypes;
        null !== d && void 0 !== d && $f();
        break;
      case 3:
        zh();
        E(Wf);
        E(H);
        Eh();
        break;
      case 5:
        Bh(d);
        break;
      case 4:
        zh();
        break;
      case 13:
        E(L);
        break;
      case 19:
        E(L);
        break;
      case 10:
        ah(d.type._context);
        break;
      case 22:
      case 23:
        Hj();
    }
    c = c.return;
  }
  Q = a;
  Y = a = Pg(a.current, null);
  Z = fj = b;
  T = 0;
  pk = null;
  rk = qk = rh = 0;
  tk = sk = null;
  if (null !== fh) {
    for (b = 0; b < fh.length; b++) if (c = fh[b], d = c.interleaved, null !== d) {
      c.interleaved = null;
      var e = d.next, f2 = c.pending;
      if (null !== f2) {
        var g = f2.next;
        f2.next = e;
        d.next = g;
      }
      c.pending = d;
    }
    fh = null;
  }
  return a;
}
function Mk(a, b) {
  do {
    var c = Y;
    try {
      $g();
      Fh.current = Rh;
      if (Ih) {
        for (var d = M.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Ih = false;
      }
      Hh = 0;
      O = N = M = null;
      Jh = false;
      Kh = 0;
      nk.current = null;
      if (null === c || null === c.return) {
        T = 1;
        pk = b;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b;
        b = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Ui(g);
          if (null !== y2) {
            y2.flags &= -257;
            Vi(y2, g, h, f2, b);
            y2.mode & 1 && Si(f2, l2, b);
            b = y2;
            k2 = l2;
            var n2 = b.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b.updateQueue = t2;
            } else n2.add(k2);
            break a;
          } else {
            if (0 === (b & 1)) {
              Si(f2, l2, b);
              tj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Ui(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Vi(J2, g, h, f2, b);
            Jg(Ji(k2, h));
            break a;
          }
        }
        f2 = k2 = Ji(k2, h);
        4 !== T && (T = 2);
        null === sk ? sk = [f2] : sk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b &= -b;
              f2.lanes |= b;
              var x2 = Ni(f2, k2, b);
              ph(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Ri || !Ri.has(u2)))) {
                f2.flags |= 65536;
                b &= -b;
                f2.lanes |= b;
                var F2 = Qi(f2, h, b);
                ph(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Sk(c);
    } catch (na) {
      b = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Jk() {
  var a = mk.current;
  mk.current = Rh;
  return null === a ? Rh : a;
}
function tj() {
  if (0 === T || 3 === T || 2 === T) T = 4;
  null === Q || 0 === (rh & 268435455) && 0 === (qk & 268435455) || Ck(Q, Z);
}
function Ik(a, b) {
  var c = K;
  K |= 2;
  var d = Jk();
  if (Q !== a || Z !== b) uk = null, Kk(a, b);
  do
    try {
      Tk();
      break;
    } catch (e) {
      Mk(a, e);
    }
  while (1);
  $g();
  K = c;
  mk.current = d;
  if (null !== Y) throw Error(p(261));
  Q = null;
  Z = 0;
  return T;
}
function Tk() {
  for (; null !== Y; ) Uk(Y);
}
function Lk() {
  for (; null !== Y && !cc(); ) Uk(Y);
}
function Uk(a) {
  var b = Vk(a.alternate, a, fj);
  a.memoizedProps = a.pendingProps;
  null === b ? Sk(a) : Y = b;
  nk.current = null;
}
function Sk(a) {
  var b = a;
  do {
    var c = b.alternate;
    a = b.return;
    if (0 === (b.flags & 32768)) {
      if (c = Ej(c, b, fj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Ij(c, b);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a) a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b = b.sibling;
    if (null !== b) {
      Y = b;
      return;
    }
    Y = b = a;
  } while (null !== b);
  0 === T && (T = 5);
}
function Pk(a, b, c) {
  var d = C, e = ok.transition;
  try {
    ok.transition = null, C = 1, Wk(a, b, c, d);
  } finally {
    ok.transition = e, C = d;
  }
  return null;
}
function Wk(a, b, c, d) {
  do
    Hk();
  while (null !== wk);
  if (0 !== (K & 6)) throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c) return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current) throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === Q && (Y = Q = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || vk || (vk = true, Fk(hc, function() {
    Hk();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = ok.transition;
    ok.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    nk.current = null;
    Oj(a, c);
    dk(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    hk(c);
    dc();
    K = h;
    C = g;
    ok.transition = f2;
  } else a.current = c;
  vk && (vk = false, wk = a, xk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Ri = null);
  mc(c.stateNode);
  Dk(a, B());
  if (null !== b) for (d = a.onRecoverableError, c = 0; c < b.length; c++) e = b[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Oi) throw Oi = false, a = Pi, Pi = null, a;
  0 !== (xk & 1) && 0 !== a.tag && Hk();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === zk ? yk++ : (yk = 0, zk = a) : yk = 0;
  jg();
  return null;
}
function Hk() {
  if (null !== wk) {
    var a = Dc(xk), b = ok.transition, c = C;
    try {
      ok.transition = null;
      C = 16 > a ? 16 : a;
      if (null === wk) var d = false;
      else {
        a = wk;
        wk = null;
        xk = 0;
        if (0 !== (K & 6)) throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Pj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2) q2.return = m2, V = q2;
                  else for (; null !== V; ) {
                    m2 = V;
                    var r2 = m2.sibling, y2 = m2.return;
                    Sj(m2);
                    if (m2 === l2) {
                      V = null;
                      break;
                    }
                    if (null !== r2) {
                      r2.return = y2;
                      V = r2;
                      break;
                    }
                    V = y2;
                  }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g) g.return = f2, V = g;
          else b: for (; null !== V; ) {
            f2 = V;
            if (0 !== (f2.flags & 2048)) switch (f2.tag) {
              case 0:
              case 11:
              case 15:
                Pj(9, f2, f2.return);
            }
            var x2 = f2.sibling;
            if (null !== x2) {
              x2.return = f2.return;
              V = x2;
              break b;
            }
            V = f2.return;
          }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2) u2.return = g, V = u2;
          else b: for (g = w2; null !== V; ) {
            h = V;
            if (0 !== (h.flags & 2048)) try {
              switch (h.tag) {
                case 0:
                case 11:
                case 15:
                  Qj(9, h);
              }
            } catch (na) {
              W(h, h.return, na);
            }
            if (h === g) {
              V = null;
              break b;
            }
            var F2 = h.sibling;
            if (null !== F2) {
              F2.return = h.return;
              V = F2;
              break b;
            }
            V = h.return;
          }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot) try {
          lc.onPostCommitFiberRoot(kc, a);
        } catch (na) {
        }
        d = true;
      }
      return d;
    } finally {
      C = c, ok.transition = b;
    }
  }
  return false;
}
function Xk(a, b, c) {
  b = Ji(c, b);
  b = Ni(a, b, 1);
  a = nh(a, b, 1);
  b = R();
  null !== a && (Ac(a, 1, b), Dk(a, b));
}
function W(a, b, c) {
  if (3 === a.tag) Xk(a, a, c);
  else for (; null !== b; ) {
    if (3 === b.tag) {
      Xk(b, a, c);
      break;
    } else if (1 === b.tag) {
      var d = b.stateNode;
      if ("function" === typeof b.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Ri || !Ri.has(d))) {
        a = Ji(c, a);
        a = Qi(b, a, 1);
        b = nh(b, a, 1);
        a = R();
        null !== b && (Ac(b, 1, a), Dk(b, a));
        break;
      }
    }
    b = b.return;
  }
}
function Ti(a, b, c) {
  var d = a.pingCache;
  null !== d && d.delete(b);
  b = R();
  a.pingedLanes |= a.suspendedLanes & c;
  Q === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - fk ? Kk(a, 0) : rk |= c);
  Dk(a, b);
}
function Yk(a, b) {
  0 === b && (0 === (a.mode & 1) ? b = 1 : (b = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = R();
  a = ih(a, b);
  null !== a && (Ac(a, b, c), Dk(a, c));
}
function uj(a) {
  var b = a.memoizedState, c = 0;
  null !== b && (c = b.retryLane);
  Yk(a, c);
}
function bk(a, b) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b);
  Yk(a, c);
}
var Vk;
Vk = function(a, b, c) {
  if (null !== a) if (a.memoizedProps !== b.pendingProps || Wf.current) dh = true;
  else {
    if (0 === (a.lanes & c) && 0 === (b.flags & 128)) return dh = false, yj(a, b, c);
    dh = 0 !== (a.flags & 131072) ? true : false;
  }
  else dh = false, I && 0 !== (b.flags & 1048576) && ug(b, ng, b.index);
  b.lanes = 0;
  switch (b.tag) {
    case 2:
      var d = b.type;
      ij(a, b);
      a = b.pendingProps;
      var e = Yf(b, H.current);
      ch(b, c);
      e = Nh(null, b, d, a, e, c);
      var f2 = Sh();
      b.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b.tag = 1, b.memoizedState = null, b.updateQueue = null, Zf(d) ? (f2 = true, cg(b)) : f2 = false, b.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, kh(b), e.updater = Ei, b.stateNode = e, e._reactInternals = b, Ii(b, d, a, c), b = jj(null, b, d, true, f2, c)) : (b.tag = 0, I && f2 && vg(b), Xi(null, b, e, c), b = b.child);
      return b;
    case 16:
      d = b.elementType;
      a: {
        ij(a, b);
        a = b.pendingProps;
        e = d._init;
        d = e(d._payload);
        b.type = d;
        e = b.tag = Zk(d);
        a = Ci(d, a);
        switch (e) {
          case 0:
            b = cj(null, b, d, a, c);
            break a;
          case 1:
            b = hj(null, b, d, a, c);
            break a;
          case 11:
            b = Yi(null, b, d, a, c);
            break a;
          case 14:
            b = $i(null, b, d, Ci(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b;
    case 0:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), cj(a, b, d, e, c);
    case 1:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), hj(a, b, d, e, c);
    case 3:
      a: {
        kj(b);
        if (null === a) throw Error(p(387));
        d = b.pendingProps;
        f2 = b.memoizedState;
        e = f2.element;
        lh(a, b);
        qh(b, d, null, c);
        var g = b.memoizedState;
        d = g.element;
        if (f2.isDehydrated) if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b.updateQueue.baseState = f2, b.memoizedState = f2, b.flags & 256) {
          e = Ji(Error(p(423)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else if (d !== e) {
          e = Ji(Error(p(424)), b);
          b = lj(a, b, d, c, e);
          break a;
        } else for (yg = Lf(b.stateNode.containerInfo.firstChild), xg = b, I = true, zg = null, c = Vg(b, null, d, c), b.child = c; c; ) c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b = Zi(a, b, c);
            break a;
          }
          Xi(a, b, d, c);
        }
        b = b.child;
      }
      return b;
    case 5:
      return Ah(b), null === a && Eg(b), d = b.type, e = b.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b.flags |= 32), gj(a, b), Xi(a, b, g, c), b.child;
    case 6:
      return null === a && Eg(b), null;
    case 13:
      return oj(a, b, c);
    case 4:
      return yh(b, b.stateNode.containerInfo), d = b.pendingProps, null === a ? b.child = Ug(b, null, d, c) : Xi(a, b, d, c), b.child;
    case 11:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), Yi(a, b, d, e, c);
    case 7:
      return Xi(a, b, b.pendingProps, c), b.child;
    case 8:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 12:
      return Xi(a, b, b.pendingProps.children, c), b.child;
    case 10:
      a: {
        d = b.type._context;
        e = b.pendingProps;
        f2 = b.memoizedProps;
        g = e.value;
        G(Wg, d._currentValue);
        d._currentValue = g;
        if (null !== f2) if (He(f2.value, g)) {
          if (f2.children === e.children && !Wf.current) {
            b = Zi(a, b, c);
            break a;
          }
        } else for (f2 = b.child, null !== f2 && (f2.return = b); null !== f2; ) {
          var h = f2.dependencies;
          if (null !== h) {
            g = f2.child;
            for (var k2 = h.firstContext; null !== k2; ) {
              if (k2.context === d) {
                if (1 === f2.tag) {
                  k2 = mh(-1, c & -c);
                  k2.tag = 2;
                  var l2 = f2.updateQueue;
                  if (null !== l2) {
                    l2 = l2.shared;
                    var m2 = l2.pending;
                    null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                    l2.pending = k2;
                  }
                }
                f2.lanes |= c;
                k2 = f2.alternate;
                null !== k2 && (k2.lanes |= c);
                bh(
                  f2.return,
                  c,
                  b
                );
                h.lanes |= c;
                break;
              }
              k2 = k2.next;
            }
          } else if (10 === f2.tag) g = f2.type === b.type ? null : f2.child;
          else if (18 === f2.tag) {
            g = f2.return;
            if (null === g) throw Error(p(341));
            g.lanes |= c;
            h = g.alternate;
            null !== h && (h.lanes |= c);
            bh(g, c, b);
            g = f2.sibling;
          } else g = f2.child;
          if (null !== g) g.return = f2;
          else for (g = f2; null !== g; ) {
            if (g === b) {
              g = null;
              break;
            }
            f2 = g.sibling;
            if (null !== f2) {
              f2.return = g.return;
              g = f2;
              break;
            }
            g = g.return;
          }
          f2 = g;
        }
        Xi(a, b, e.children, c);
        b = b.child;
      }
      return b;
    case 9:
      return e = b.type, d = b.pendingProps.children, ch(b, c), e = eh(e), d = d(e), b.flags |= 1, Xi(a, b, d, c), b.child;
    case 14:
      return d = b.type, e = Ci(d, b.pendingProps), e = Ci(d.type, e), $i(a, b, d, e, c);
    case 15:
      return bj(a, b, b.type, b.pendingProps, c);
    case 17:
      return d = b.type, e = b.pendingProps, e = b.elementType === d ? e : Ci(d, e), ij(a, b), b.tag = 1, Zf(d) ? (a = true, cg(b)) : a = false, ch(b, c), Gi(b, d, e), Ii(b, d, e, c), jj(null, b, d, true, a, c);
    case 19:
      return xj(a, b, c);
    case 22:
      return dj(a, b, c);
  }
  throw Error(p(156, b.tag));
};
function Fk(a, b) {
  return ac(a, b);
}
function $k(a, b, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b, c, d) {
  return new $k(a, b, c, d);
}
function aj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function Zk(a) {
  if ("function" === typeof a) return aj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da) return 11;
    if (a === Ga) return 14;
  }
  return 2;
}
function Pg(a, b) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b = a.dependencies;
  c.dependencies = null === b ? null : { lanes: b.lanes, firstContext: b.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function Rg(a, b, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a) aj(a) && (g = 1);
  else if ("string" === typeof a) g = 5;
  else a: switch (a) {
    case ya:
      return Tg(c.children, e, f2, b);
    case za:
      g = 8;
      e |= 8;
      break;
    case Aa:
      return a = Bg(12, c, b, e | 2), a.elementType = Aa, a.lanes = f2, a;
    case Ea:
      return a = Bg(13, c, b, e), a.elementType = Ea, a.lanes = f2, a;
    case Fa:
      return a = Bg(19, c, b, e), a.elementType = Fa, a.lanes = f2, a;
    case Ia:
      return pj(c, e, f2, b);
    default:
      if ("object" === typeof a && null !== a) switch (a.$$typeof) {
        case Ba:
          g = 10;
          break a;
        case Ca:
          g = 9;
          break a;
        case Da:
          g = 11;
          break a;
        case Ga:
          g = 14;
          break a;
        case Ha:
          g = 16;
          d = null;
          break a;
      }
      throw Error(p(130, null == a ? a : typeof a, ""));
  }
  b = Bg(g, c, b, e);
  b.elementType = a;
  b.type = d;
  b.lanes = f2;
  return b;
}
function Tg(a, b, c, d) {
  a = Bg(7, a, d, b);
  a.lanes = c;
  return a;
}
function pj(a, b, c, d) {
  a = Bg(22, a, d, b);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function Qg(a, b, c) {
  a = Bg(6, a, null, b);
  a.lanes = c;
  return a;
}
function Sg(a, b, c) {
  b = Bg(4, null !== a.children ? a.children : [], a.key, b);
  b.lanes = c;
  b.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b;
}
function al(a, b, c, d, e) {
  this.tag = b;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function bl(a, b, c, d, e, f2, g, h, k2) {
  a = new al(a, b, c, h, k2);
  1 === b ? (b = 1, true === f2 && (b |= 8)) : b = 0;
  f2 = Bg(3, null, null, b);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  kh(f2);
  return a;
}
function cl(a, b, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b, implementation: c };
}
function dl(a) {
  if (!a) return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag) throw Error(p(170));
    var b = a;
    do {
      switch (b.tag) {
        case 3:
          b = b.stateNode.context;
          break a;
        case 1:
          if (Zf(b.type)) {
            b = b.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b = b.return;
    } while (null !== b);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c)) return bg(a, c, b);
  }
  return b;
}
function el(a, b, c, d, e, f2, g, h, k2) {
  a = bl(c, d, true, a, e, f2, g, h, k2);
  a.context = dl(null);
  c = a.current;
  d = R();
  e = yi(c);
  f2 = mh(d, e);
  f2.callback = void 0 !== b && null !== b ? b : null;
  nh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Dk(a, d);
  return a;
}
function fl(a, b, c, d) {
  var e = b.current, f2 = R(), g = yi(e);
  c = dl(c);
  null === b.context ? b.context = c : b.pendingContext = c;
  b = mh(f2, g);
  b.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b.callback = d);
  a = nh(e, b, g);
  null !== a && (gi(a, e, g, f2), oh(a, e, g));
  return g;
}
function gl(a) {
  a = a.current;
  if (!a.child) return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function hl(a, b) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b ? c : b;
  }
}
function il(a, b) {
  hl(a, b);
  (a = a.alternate) && hl(a, b);
}
function jl() {
  return null;
}
var kl = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ll(a) {
  this._internalRoot = a;
}
ml.prototype.render = ll.prototype.render = function(a) {
  var b = this._internalRoot;
  if (null === b) throw Error(p(409));
  fl(a, b, null, null);
};
ml.prototype.unmount = ll.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b = a.containerInfo;
    Rk(function() {
      fl(null, a, null, null);
    });
    b[uf] = null;
  }
};
function ml(a) {
  this._internalRoot = a;
}
ml.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b = Hc();
    a = { blockedOn: null, target: a, priority: b };
    for (var c = 0; c < Qc.length && 0 !== b && b < Qc[c].priority; c++) ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function nl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function pl() {
}
function ql(a, b, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = gl(g);
        f2.call(a2);
      };
    }
    var g = el(b, d, a, 0, null, false, false, "", pl);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Rk();
    return g;
  }
  for (; e = a.lastChild; ) a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = gl(k2);
      h.call(a2);
    };
  }
  var k2 = bl(a, 0, false, null, null, false, false, "", pl);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Rk(function() {
    fl(b, k2, c, d);
  });
  return k2;
}
function rl(a, b, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = gl(g);
        h.call(a2);
      };
    }
    fl(b, g, a, e);
  } else g = ql(c, b, a, e, d);
  return gl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b = a.stateNode;
      if (b.current.memoizedState.isDehydrated) {
        var c = tc(b.pendingLanes);
        0 !== c && (Cc(b, c | 1), Dk(b, B()), 0 === (K & 6) && (Gj = B() + 500, jg()));
      }
      break;
    case 13:
      Rk(function() {
        var b2 = ih(a, 1);
        if (null !== b2) {
          var c2 = R();
          gi(b2, a, 1, c2);
        }
      }), il(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b = ih(a, 134217728);
    if (null !== b) {
      var c = R();
      gi(b, a, 134217728, c);
    }
    il(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b = yi(a), c = ih(a, b);
    if (null !== c) {
      var d = R();
      gi(c, a, b, d);
    }
    il(a, b);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b) {
  var c = C;
  try {
    return C = a, b();
  } finally {
    C = c;
  }
};
yb = function(a, b, c) {
  switch (b) {
    case "input":
      bb(a, c);
      b = c.name;
      if ("radio" === c.type && null != b) {
        for (c = a; c.parentNode; ) c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b) + '][type="radio"]');
        for (b = 0; b < c.length; b++) {
          var d = c[b];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e) throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b = c.value, null != b && fb(a, !!c.multiple, b, false);
  }
};
Gb = Qk;
Hb = Rk;
var sl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Qk] }, tl = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" };
var ul = { bundleType: tl.bundleType, version: tl.version, rendererPackageName: tl.rendererPackageName, rendererConfig: tl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: tl.findFiberByHostInstance || jl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var vl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!vl.isDisabled && vl.supportsFiber) try {
    kc = vl.inject(ul), lc = vl;
  } catch (a) {
  }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sl;
reactDom_production_min.createPortal = function(a, b) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!nl(b)) throw Error(p(200));
  return cl(a, b, null, c);
};
reactDom_production_min.createRoot = function(a, b) {
  if (!nl(a)) throw Error(p(299));
  var c = false, d = "", e = kl;
  null !== b && void 0 !== b && (true === b.unstable_strictMode && (c = true), void 0 !== b.identifierPrefix && (d = b.identifierPrefix), void 0 !== b.onRecoverableError && (e = b.onRecoverableError));
  b = bl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ll(b);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a) return null;
  if (1 === a.nodeType) return a;
  var b = a._reactInternals;
  if (void 0 === b) {
    if ("function" === typeof a.render) throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Rk(a);
};
reactDom_production_min.hydrate = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b, c) {
  if (!nl(a)) throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = kl;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b = el(b, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b.current;
  sf(a);
  if (d) for (a = 0; a < d.length; a++) c = d[a], e = c._getVersion, e = e(c._source), null == b.mutableSourceEagerHydrationData ? b.mutableSourceEagerHydrationData = [c, e] : b.mutableSourceEagerHydrationData.push(
    c,
    e
  );
  return new ml(b);
};
reactDom_production_min.render = function(a, b, c) {
  if (!ol(b)) throw Error(p(200));
  return rl(null, a, b, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!ol(a)) throw Error(p(40));
  return a._reactRootContainer ? (Rk(function() {
    rl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Qk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b, c, d) {
  if (!ol(c)) throw Error(p(200));
  if (null == a || void 0 === a._reactInternals) throw Error(p(38));
  return rl(a, b, c, false, d);
};
reactDom_production_min.version = "18.3.1-next-f1338f8080-20240426";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
var createRoot;
var m = reactDomExports;
{
  createRoot = m.createRoot;
  m.hydrateRoot;
}
const formatMoney = (n2) => new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN" }).format(n2 || 0);
const formatDate = (d) => {
  if (!d) return "—";
  const dt = typeof d === "string" ? /* @__PURE__ */ new Date(d + "T12:00:00") : d;
  return dt.toLocaleDateString("es-MX", { day: "2-digit", month: "short", year: "numeric" });
};
const calcNextDate = (current, forma) => {
  if (!current) return todayISO();
  const d = /* @__PURE__ */ new Date(current + "T12:00:00");
  if (forma === "MENSUAL") d.setMonth(d.getMonth() + 1);
  else if (forma === "TRIMESTRAL") d.setMonth(d.getMonth() + 3);
  else if (forma === "SEMESTRAL") d.setMonth(d.getMonth() + 6);
  else if (forma === "CONTADO") d.setFullYear(d.getFullYear() + 1);
  return d.toISOString().split("T")[0];
};
const normalize = (s) => String(s).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9 ]/g, " ").trim();
const findCol = (row, fragments) => {
  const keys = Object.keys(row);
  for (const frag of fragments) {
    const nf2 = normalize(frag);
    const key = keys.find((k2) => normalize(k2).includes(nf2));
    if (key !== void 0 && row[key] !== void 0 && row[key] !== "") return row[key];
  }
  for (const frag of fragments) {
    const nf2 = normalize(frag);
    const key = keys.find((k2) => normalize(k2).split(" ").some((w2) => w2.startsWith(nf2)));
    if (key !== void 0 && row[key] !== void 0 && row[key] !== "") return row[key];
  }
  return void 0;
};
function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn("Storage lleno, ignorando:", e);
  }
}
const parseMonto = (val) => {
  if (val === void 0 || val === null || val === "") return 0;
  if (typeof val === "number") return val;
  let s = String(val).replace(/[^0-9.,]/g, "");
  if (s.includes(",") && s.includes(".")) {
    if (s.lastIndexOf(",") > s.lastIndexOf(".")) {
      s = s.replace(/\./g, "").replace(",", ".");
    } else {
      s = s.replace(/,/g, "");
    }
  } else if (s.includes(",")) {
    const parts = s.split(",");
    if (parts[1] && parts[1].length <= 2) s = s.replace(",", ".");
    else s = s.replace(/,/g, "");
  }
  return Number(s) || 0;
};
const getEffectiveMonto = (p2) => {
  if (!p2) return 0;
  if (p2.formaPago !== "CONTADO" && p2.montoSubsecuente && p2.fechaInicioVigencia && p2.fechaPago > p2.fechaInicioVigencia) {
    return Number(p2.montoSubsecuente);
  }
  return Number(p2.monto || 0);
};
const daysUntil = (dateStr) => {
  if (!dateStr) return null;
  const today = /* @__PURE__ */ new Date();
  today.setHours(0, 0, 0, 0);
  const target = /* @__PURE__ */ new Date(dateStr + "T00:00:00");
  return Math.round((target - today) / 864e5);
};
const isExpiredEffective = (p2) => {
  if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
  const validGracia = p2.periodoGracia && p2.periodoGracia >= p2.fechaPago ? p2.periodoGracia : null;
  const expiryDate = validGracia || p2.fechaPago;
  const d = daysUntil(expiryDate);
  return d !== null && d < 0;
};
const isUpcomingReminder = (p2) => {
  if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
  if (isExpiredEffective(p2)) return false;
  const d = daysUntil(p2.fechaPago);
  return d !== null && d <= 4;
};
const getRenewalDate = (p2) => {
  if (p2.fechaInicioVigencia) {
    const d = /* @__PURE__ */ new Date(p2.fechaInicioVigencia + "T00:00:00");
    d.setFullYear(d.getFullYear() + 1);
    return d.toISOString().split("T")[0];
  }
  return p2.fechaPago;
};
const isUpcomingRenewal = (p2) => {
  if (p2.estatus !== "LIQUIDADO") return false;
  const d = daysUntil(getRenewalDate(p2));
  return d !== null && d <= 15;
};
const todayISO = () => {
  const d = /* @__PURE__ */ new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};
const generateId = () => Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
const cleanRecordatorioNota = (notas) => {
  if (!notas) return "";
  return notas.split("\n").filter((line) => !line.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").includes("ya mande recordatorio")).join("\n").trim();
};
function useEscapeKey(onClose) {
  reactExports.useEffect(() => {
    if (!onClose) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
}
const DEFAULT_TEMPLATES = {
  whatsapp: `Estimado(a) asegurado(a) *{nombre}* 👋

Le contactamos de parte de *PRE & PRO CONSULTORES* para recordarle que su póliza *{poliza}* {estado_vencimiento}.

📋 *Detalles de pago:*
• Unidad: {bien}
• Monto a pagar: *{monto}*

Le pedimos de favor realizar su pago antes de la fecha límite para mantener su cobertura vigente 🛡️

Si ya realizó su pago, le pedimos de favor nos envíe su comprobante de pago para su respectiva aplicación 📄

¡Gracias por su confianza! 😊
*PRE & PRO CONSULTORES*`,
  email_asunto: "Recordatorio de Pago – Póliza {poliza} | PRE & PRO CONSULTORES",
  email_cuerpo: `Estimado(a) asegurado(a) {nombre},

Por medio del presente correo le recordamos amablemente que su póliza de seguro {poliza} {estado_vencimiento}.

DETALLES DE SU PÓLIZA:
━━━━━━━━━━━━━━━━━━━━━━━
• Póliza N°: {poliza}
• Unidad: {bien}
• Monto a pagar: {monto}

Para mantener la vigencia de su cobertura, le solicitamos realizar el pago antes de la fecha indicada.

Si ya realizó su pago, le pedimos nos envíe su comprobante para su respectiva aplicación.

Si tiene alguna duda, no dude en contactarnos.

Atentamente,
PRE & PRO CONSULTORES`
};
function useToast() {
  const [toasts, setToasts] = reactExports.useState([]);
  const toast2 = reactExports.useCallback((msg, type = "info") => {
    const id2 = generateId();
    setToasts((t2) => [...t2, { id: id2, msg, type }]);
    setTimeout(() => setToasts((t2) => t2.filter((x2) => x2.id !== id2)), 3500);
  }, []);
  return { toasts, toast: toast2 };
}
const Icons = {
  Dashboard: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "3", width: "7", height: "7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "14", y: "14", width: "7", height: "7" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "3", y: "14", width: "7", height: "7" })
  ] }),
  Policies: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "14 2 14 8 20 8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "13", x2: "8", y2: "13" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "16", y1: "17", x2: "8", y2: "17" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "10 9 9 9 8 9" })
  ] }),
  Templates: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" }) }),
  Import: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "7 10 12 15 17 10" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "15", x2: "12", y2: "3" })
  ] }),
  Plus: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round", width: "16", height: "16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "12", y1: "5", x2: "12", y2: "19" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" })
  ] }),
  Search: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "search-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "11", cy: "11", r: "8" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "21", y1: "21", x2: "16.65", y2: "16.65" })
  ] }),
  Sort: ({ dir }) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `sort-icon ${dir ? "active" : ""}`, children: dir === "asc" ? "↑" : dir === "desc" ? "↓" : "↕" }),
  Close: () => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "×" }),
  Shield: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "20", height: "20", strokeLinecap: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" }) }),
  Heart: () => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "20", height: "20", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" }) }),
  Briefcase: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "20", height: "20", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "7", width: "20", height: "14", rx: "2", ry: "2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" })
  ] }),
  Home: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", width: "20", height: "20", strokeLinecap: "round", strokeLinejoin: "round", className: "nav-icon", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: "9 22 9 12 15 12 15 22" })
  ] })
};
function ToastContainer({ toasts }) {
  const icons = { success: "✅", error: "❌", info: "ℹ️", warning: "⚠️" };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "toast-container", children: toasts.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `toast toast-${t2.type}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "toast-icon", children: icons[t2.type] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "toast-msg", children: t2.msg })
  ] }, t2.id)) });
}
function StatusBadge({ policy }) {
  const rawEstatus = policy.estatus;
  const estatus = rawEstatus === "PENDIENTE" && isExpiredEffective(policy) ? "VENCIDO" : rawEstatus;
  const map = {
    PAGADO: "pagado",
    PENDIENTE: "pendiente",
    VENCIDO: "vencido",
    CANCELADO: "cancelado",
    LIQUIDADO: "liquidado"
  };
  const cls = map[estatus] || "pendiente";
  let tooltip = "";
  if (estatus === "LIQUIDADO") {
    const renewal = getRenewalDate(policy);
    if (renewal) {
      tooltip = `Vigencia hasta: ${formatDate(renewal)}`;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `badge badge-${cls}`, title: tooltip, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "badge-dot" }),
    estatus
  ] });
}
function AgentBadge({ policy, agente }) {
  const ag2 = agente || (policy == null ? void 0 : policy.agente) || (policy == null ? void 0 : policy.aseguradora) || "SIN CLAVE";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `agent-badge agent-${ag2 == null ? void 0 : ag2.toLowerCase()}`, children: [
    ag2 === "DANIEL" ? "👤" : "👥",
    " ",
    ag2
  ] });
}
function RamoBadge({ policy }) {
  if (policy == null ? void 0 : policy._isCaro) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(139, 92, 246, 0.2)", color: "#a78bfa", fontWeight: "bold" }, children: "AUTOS QUALITAS CARO" });
  if (policy == null ? void 0 : policy._isGmm) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(16, 185, 129, 0.2)", color: "#34d399", fontWeight: "bold" }, children: "GMM" });
  if (policy == null ? void 0 : policy._isAutos) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(245, 158, 11, 0.2)", color: "#fbbf24", fontWeight: "bold" }, children: "AUTOS" });
  if (policy == null ? void 0 : policy._isVida) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(236, 72, 153, 0.2)", color: "#f472b6", fontWeight: "bold" }, children: "VIDA" });
  if (policy == null ? void 0 : policy._isDanos) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(14, 165, 233, 0.2)", color: "#38bdf8", fontWeight: "bold" }, children: "DAÑOS" });
  if (policy == null ? void 0 : policy._isHogar) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(168, 85, 247, 0.2)", color: "#c084fc", fontWeight: "bold" }, children: "HOGAR" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "rgba(23, 113, 197, 0.2)", color: "#60a5fa", fontWeight: "bold" }, children: "AUTOS QUALITAS DANI" });
}
function PolicySummaryModal({ policy: p2, onClose, onOpenPolicyNum, allActivePolicies = [] }) {
  var _a;
  useEscapeKey(onClose);
  if (!p2) return null;
  const bienLabel = p2._isVida ? "Producto" : p2._isGmm ? "Plan" : p2._isHogar ? "Inmueble" : p2._isDanos ? "Bien Asegurado" : "Unidad / Vehículo";
  const ramoLabel = p2._isCaro ? "Autos Qualitas Caro" : p2._isGmm ? "GMM" : p2._isAutos ? "Autos (Otras)" : p2._isVida ? "Vida" : p2._isDanos ? "Daños" : p2._isHogar ? "Hogar" : "Autos Qualitas Dani";
  const renewedNum = p2.polizaRenovadaNum || allActivePolicies && ((_a = allActivePolicies.find((act) => act.polizaAnteriorNum && String(act.polizaAnteriorNum).trim() === String(p2.poliza).trim())) == null ? void 0 : _a.poliza);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: onClose, style: { zIndex: 999999 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 440, padding: 0, maxHeight: "85vh", display: "flex", flexDirection: "column" }, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", style: { background: "var(--bg-secondary)", padding: "16px 20px", borderBottom: "1px solid var(--border)", flexShrink: 0 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 20 }, children: "📄" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { margin: 0, fontSize: 16, color: "var(--text-primary)" }, children: [
            "Resumen Póliza #",
            p2.poliza
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "#38bdf8", fontWeight: 600 }, children: ramoLabel })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", style: { padding: 20, display: "flex", flexDirection: "column", gap: 10, fontSize: 13, overflowY: "auto", flex: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Asegurado:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)", textAlign: "right" }, children: p2.nombre })
      ] }),
      p2.perteneceA && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Esta póliza pertenece a:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "#38bdf8", textAlign: "right" }, children: [
          "👤 ",
          p2.perteneceA
        ] })
      ] }),
      p2.bien && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "var(--text-muted)" }, children: [
          bienLabel,
          ":"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)", textAlign: "right", maxWidth: 220, wordBreak: "break-word" }, children: p2.bien })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Agente:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: p2.agente || "N/A" })
      ] }),
      (p2._isGmm || p2._isAutos || p2._isVida || p2._isDanos || p2._isHogar) && p2.aseguradora && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Aseguradora:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: p2.aseguradora })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Forma de Pago:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forma-badge", children: p2.formaPago })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Próxima Fecha Pago:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#fbbf24" }, children: formatDate(p2.fechaPago) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Monto:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#34d399", fontSize: 15 }, children: formatMoney(getEffectiveMonto(p2)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Estatus:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { policy: p2 })
      ] }),
      p2.fechaInicioVigencia && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Inicio Vigencia:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(p2.fechaInicioVigencia) })
      ] }),
      p2.periodoGracia && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: 6 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Gracia activa hasta:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { color: "#818cf8", fontWeight: 600 }, children: [
          "📌 ",
          formatDate(p2.periodoGracia)
        ] })
      ] }),
      p2.notas && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 6, padding: 10, borderRadius: 8, background: "var(--bg-secondary)", border: "1px dashed var(--border)", fontSize: 12, color: "var(--text-secondary)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: "📝 Notas Internas:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 4 }, children: p2.notas })
      ] }),
      p2.polizaAnteriorNum && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: { marginTop: 6, padding: "8px 12px", borderRadius: 8, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.25)", fontSize: 12, display: "flex", alignItems: "center", gap: 8, cursor: onOpenPolicyNum ? "pointer" : "default" },
          onClick: () => onOpenPolicyNum && onOpenPolicyNum(p2.polizaAnteriorNum),
          title: onOpenPolicyNum ? "Ver detalles de la póliza anterior" : "",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 15 }, children: "🔗" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Póliza Anterior:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "#818cf8", textDecoration: onOpenPolicyNum ? "underline" : "none" }, children: [
              p2.polizaAnteriorNum,
              " ↗"
            ] })
          ]
        }
      ),
      renewedNum && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          style: { marginTop: 6, padding: "8px 12px", borderRadius: 8, background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", fontSize: 12, display: "flex", alignItems: "center", gap: 8, cursor: onOpenPolicyNum ? "pointer" : "default" },
          onClick: () => onOpenPolicyNum && onOpenPolicyNum(renewedNum),
          title: onOpenPolicyNum ? "Ver detalles de la póliza renovada actual" : "",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 15 }, children: "🔗" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Póliza Renovada Actual:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { style: { color: "#34d399", textDecoration: onOpenPolicyNum ? "underline" : "none" }, children: [
              renewedNum,
              " ↗"
            ] })
          ]
        }
      ),
      p2._archived && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 6, padding: "8px 12px", borderRadius: 8, background: "rgba(234,179,8,0.08)", border: "1px solid rgba(234,179,8,0.2)", fontSize: 12, display: "flex", alignItems: "center", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 15 }, children: "📦" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)" }, children: "Archivada el:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "#eab308" }, children: formatDate(p2.fechaArchivado) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-footer", style: { background: "var(--bg-secondary)", padding: "12px 20px", display: "flex", justifyContent: "flex-end", flexShrink: 0 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: onClose, children: "Entendido" }) })
  ] }) });
}
function RenewConfirmModal({ policy, onConfirm, onClose }) {
  useEscapeKey(onClose);
  if (!policy) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: onClose, style: { zIndex: 999999 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 430 }, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { style: { display: "flex", alignItems: "center", gap: 8 }, children: "🔄 Renovar Póliza" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, children: "✕" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { textAlign: "center", padding: "10px 0 16px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 42, marginBottom: 12 }, children: "📋➡️📋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }, children: [
        "Vas a renovar la póliza ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: policy.poliza }),
        " de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: policy.nombre }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.25)", borderRadius: 8, padding: "12px 16px", marginTop: 14, textAlign: "left", fontSize: 13 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { margin: "0 0 6px", fontWeight: 600, color: "#818cf8" }, children: "¿Qué pasará?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { style: { margin: 0, paddingLeft: 18, color: "var(--text-secondary)", lineHeight: 1.8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
            "La póliza actual se moverá a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "📦 Histórico" }),
            " con estatus ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "RENOVADA" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Se abrirá el editor con los datos del cliente pre-llenados." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "Solo deberás ingresar el nuevo número de póliza, monto y fecha." })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: onClose, children: "Cancelar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: () => {
        onConfirm(policy);
        onClose();
      }, children: "🔄 Confirmar Renovación" })
    ] })
  ] }) });
}
function ArchivedPoliciesPage({ policies, allActivePolicies = [], onOpenPolicyNum }) {
  const [summaryPolicy, setSummaryPolicy] = reactExports.useState(null);
  if (!policies || policies.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { padding: 60, textAlign: "center" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 48, marginBottom: 16 }, children: "📦" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { color: "var(--text-primary)", marginBottom: 8 }, children: "Sin pólizas archivadas" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { color: "var(--text-muted)", fontSize: 14 }, children: "Aquí aparecerán las pólizas renovadas del año anterior para consulta histórica." })
    ] });
  }
  const handleRowDoubleClick = (p2) => {
    if (onOpenPolicyNum) {
      onOpenPolicyNum(p2.poliza);
    } else {
      setSummaryPolicy(p2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
        "📦 Pólizas Renovadas / Históricas (",
        policies.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "policies-table", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Asegurado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Póliza" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Ramo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Agente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Forma Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Fecha (última)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Monto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Archivada" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Póliza Nueva" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [...policies].sort((a, b) => (b.fechaArchivado || "").localeCompare(a.fechaArchivado || "")).map((p2) => {
          var _a;
          const renewedNum = p2.polizaRenovadaNum || allActivePolicies && ((_a = allActivePolicies.find((act) => act.polizaAnteriorNum && String(act.polizaAnteriorNum).trim() === String(p2.poliza).trim())) == null ? void 0 : _a.poliza);
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { style: { cursor: "pointer" }, onDoubleClick: () => handleRowDoubleClick(p2), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: p2.nombre }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontFamily: "monospace", fontSize: 12, color: "var(--accent-blue-light)" }, children: p2.poliza }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RamoBadge, { policy: p2 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentBadge, { policy: p2, agente: p2.agente || p2.aseguradora }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forma-badge", children: p2.formaPago }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 12 }, children: formatDate(p2.fechaPago) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600, color: "var(--text-secondary)" }, children: formatMoney(p2.monto) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 12, color: "var(--text-muted)" }, children: formatDate(p2.fechaArchivado) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: renewedNum ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "btn btn-ghost btn-sm",
                style: { fontSize: 12, padding: "2px 8px", color: "#34d399", background: "rgba(52,211,153,0.1)", border: "1px solid rgba(52,211,153,0.3)", borderRadius: 6, fontWeight: 600, cursor: "pointer" },
                title: "Ver detalles de la póliza renovada actual",
                onClick: (e) => {
                  e.stopPropagation();
                  if (onOpenPolicyNum) {
                    onOpenPolicyNum(renewedNum);
                  } else {
                    const newP = allActivePolicies.find((act) => String(act.poliza).trim() === String(renewedNum).trim());
                    if (newP) setSummaryPolicy(newP);
                  }
                },
                children: [
                  "🔗 ",
                  renewedNum,
                  " ↗"
                ]
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "var(--text-muted)", fontSize: 11 }, children: "—" }) })
          ] }, p2.id);
        }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "12px 24px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)" }, children: "💡 Doble clic en cualquier fila para ver el resumen de la póliza archivada (o clic en 🔗 número para ver la póliza nueva)." })
    ] }),
    summaryPolicy && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicySummaryModal,
      {
        policy: summaryPolicy,
        allActivePolicies,
        onOpenPolicyNum,
        onClose: () => setSummaryPolicy(null)
      }
    )
  ] });
}
function DateCell({ dateStr, estatus, periodoGracia, renewalDateStr }) {
  const activeGracia = periodoGracia && periodoGracia >= dateStr ? periodoGracia : null;
  const days = daysUntil(dateStr);
  const daysGracia = activeGracia ? daysUntil(activeGracia) : null;
  if (!dateStr) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted", children: "—" });
  if (estatus === "LIQUIDADO") {
    const renewalDate = renewalDateStr ? formatDate(renewalDateStr) : null;
    const daysToRenewal = renewalDateStr ? daysUntil(renewalDateStr) : null;
    const renewalSoon = daysToRenewal !== null && daysToRenewal <= 15;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 1 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "date-normal", style: { color: "var(--text-primary)" }, children: formatDate(dateStr) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 10, color: "var(--accent-blue-light)" }, children: "Último pago" }),
      renewalDate && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 10, color: renewalSoon ? "#f472b6" : "var(--text-muted)", fontWeight: renewalSoon ? 700 : 400, marginTop: 1 }, children: [
        "🔄 Renueva: ",
        renewalDate,
        renewalSoon && daysToRenewal >= 0 ? ` (${daysToRenewal}d)` : renewalSoon ? " ⚠ vencida" : ""
      ] })
    ] });
  }
  if (estatus === "PAGADO" || estatus === "CANCELADO") {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "date-normal", children: formatDate(dateStr) });
  }
  if (days === null) return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatDate(dateStr) });
  const graciaChip = activeGracia ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "urgency-chip", style: { background: "rgba(99,102,241,0.15)", color: "#818cf8", marginLeft: 4, whiteSpace: "nowrap" }, children: [
    "📌 Gracia: ",
    formatDate(activeGracia)
  ] }) : null;
  if (activeGracia && days < 0 && daysGracia !== null && daysGracia >= 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "date-soon", title: `Período de gracia hasta ${formatDate(activeGracia)}`, children: [
      formatDate(dateStr),
      graciaChip
    ] });
  }
  if (days < 0 && (!activeGracia || daysGracia < 0)) return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "date-urgent", title: `Vencido hace ${Math.abs(days)} día(s)`, children: [
    formatDate(dateStr),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "urgency-chip", children: [
      "⚠ ",
      Math.abs(days),
      "d venc."
    ] })
  ] });
  if (days <= 4) return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "date-urgent", title: `Vence en ${days} día(s)`, children: [
    formatDate(dateStr),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "urgency-chip", children: [
      "🔴 ",
      days,
      "d"
    ] }),
    graciaChip
  ] });
  if (days <= 10) return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "date-soon", title: `Vence en ${days} días`, children: [
    formatDate(dateStr),
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "urgency-chip", style: { background: "rgba(245,158,11,0.15)", color: "#fcd34d" }, children: [
      "🟡 ",
      days,
      "d"
    ] }),
    graciaChip
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "date-normal", children: [
    formatDate(dateStr),
    graciaChip
  ] });
}
function fillTemplate(tpl, policy, isWA = false) {
  if (!tpl) return "";
  const isVencido = policy.estatus === "VENCIDO" || isExpiredEffective(policy);
  const fDate = formatDate(policy.fechaPago);
  const dateFormatted = isWA ? `*${fDate}*` : fDate;
  const estadoVencimientoText = isVencido ? `venció el ${dateFormatted}` : `está próxima a vencer el ${dateFormatted}`;
  let processedTpl = tpl.replace("vence el próximo *{fechaPago}*", `está próxima a vencer el *${fDate}*`).replace("vence el próximo {fechaPago}", `está próxima a vencer el ${fDate}`).replace("está próxima a vencer el *{fechaPago}*", `está próxima a vencer el *${fDate}*`).replace("está próxima a vencer el {fechaPago}", `está próxima a vencer el ${fDate}`).replace("tiene programado su próximo vencimiento el día {fechaPago}", `está próxima a vencer el ${fDate}`);
  return processedTpl.replace(/{estado_vencimiento}/g, estadoVencimientoText).replace(/{nombre}/g, policy.nombre || "").replace(/{poliza}/g, policy.poliza || "").replace(/{bien}/g, policy.bien || "").replace(/{monto}/g, formatMoney(getEffectiveMonto(policy))).replace(/{formaPago}/g, policy.formaPago || "").replace(/{agente}/g, policy.agente || "").replace(/{fechaPago}/g, formatDate(policy.fechaPago)).replace(/{correo}/g, policy.correo || "").replace(/{telefono}/g, policy.telefono || "");
}
function FieldGroup({ label, id: id2, required, error, children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", htmlFor: id2, children: [
      label,
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required", children: "*" })
    ] }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--accent-red)" }, children: error })
  ] });
}
function PolicyModal({ policy, onSave, onClose, toast: toast2, agentOptions, isGmm = false, isAutos = false, isVida = false, isDanos = false, isHogar = false }) {
  useEscapeKey(onClose);
  const gmmAseguradoras = ["AXA", "MAPFRE", "GNP", "CHUBB", "SURA", "PLAN SEGUROS", "ZURICH", "QUALITAS", "AIG", "BANORTE", "OTRO"];
  const autosAseguradoras = ["ZURICH", "AXA", "HDI", "GNP", "QUALITAS", "AIG", "MAPFRE", "BANORTE", "ANA", "SEGUROS ARGO", "CHUBB", "OTRO"];
  const defaultOpts = isGmm || isAutos || isVida || isDanos || isHogar ? ["DANIEL", "OTRO"] : ["DANIEL", "MARTIN"];
  const optsList = agentOptions || defaultOpts;
  const isEdit = !!(policy == null ? void 0 : policy.id);
  const [form, setForm] = reactExports.useState(() => {
    const listAseg = isGmm ? gmmAseguradoras : autosAseguradoras;
    if (policy) {
      const isKnown = optsList.includes(policy.agente);
      const isKnownAseg = listAseg.includes(policy.aseguradora);
      return {
        ...policy,
        agente: isKnown ? policy.agente : "OTRO",
        agenteCustom: isKnown ? "" : policy.agente || "",
        aseguradora: isKnownAseg ? policy.aseguradora : policy.aseguradora ? "OTRO" : listAseg[0],
        aseguradoraCustom: isKnownAseg ? "" : policy.aseguradora || "",
        perteneceA: policy.perteneceA || ""
      };
    }
    return {
      nombre: "",
      poliza: "",
      bien: "",
      formaPago: "MENSUAL",
      agente: optsList[0],
      fechaPago: todayISO(),
      monto: "",
      estatus: "PENDIENTE",
      correo: "",
      telefono: "",
      notas: "",
      periodoGracia: "",
      fechaInicioVigencia: "",
      aseguradora: listAseg[0],
      aseguradoraCustom: "",
      agenteCustom: "",
      perteneceA: ""
    };
  });
  const [errors, setErrors] = reactExports.useState({});
  const set = (k2, v2) => setForm((f2) => ({ ...f2, [k2]: v2 }));
  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.poliza.trim()) e.poliza = "Requerido";
    if (!form.fechaPago) e.fechaPago = "Requerido";
    if (!form.monto || isNaN(Number(form.monto))) e.monto = "Monto inválido";
    if (form.formaPago !== "CONTADO") {
      if (!form.montoSubsecuente || isNaN(Number(form.montoSubsecuente))) e.montoSubsecuente = "Requerido";
    }
    if (form.correo && !/\S+@\S+\.\S+/.test(form.correo)) e.correo = "Correo inválido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };
  const handleSave = () => {
    if (!validate()) {
      toast2("Por favor corrige los errores", "error");
      return;
    }
    const saved = {
      ...form,
      id: form.id || generateId(),
      monto: Number(form.monto),
      ...form.formaPago !== "CONTADO" && form.montoSubsecuente ? { montoSubsecuente: Number(form.montoSubsecuente) } : {},
      ...(isAutos || isGmm || isVida || isDanos || isHogar) && form.agente === "OTRO" && form.agenteCustom ? { agente: form.agenteCustom } : {},
      ...(isAutos || isGmm || isVida || isDanos || isHogar) && form.aseguradora === "OTRO" && form.aseguradoraCustom ? { aseguradora: form.aseguradoraCustom } : {}
    };
    onSave(saved);
    toast2(isEdit ? "Póliza actualizada ✅" : "Póliza registrada ✅", "success");
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal modal-wide", onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: isEdit ? "✏️ Editar Póliza" : "➕ Nueva Póliza" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-grid", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Nombre del Asegurado", id: "nombre", required: true, error: errors.nombre, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "nombre",
          className: `input ${errors.nombre ? "input-error" : ""}`,
          value: form.nombre,
          onChange: (e) => set("nombre", e.target.value),
          placeholder: "Nombre completo"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Número de Póliza", id: "poliza", required: true, error: errors.poliza, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "poliza",
          className: "input",
          value: form.poliza,
          onChange: (e) => set("poliza", e.target.value),
          placeholder: "POL-2024-000"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: isVida ? "Producto" : isGmm ? "Plan" : isHogar ? "Ubicación / Inmueble" : isDanos ? "Bien Asegurado" : "Vehículo / Bien Asegurado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "input",
            value: form.bien,
            onChange: (e) => set("bien", e.target.value),
            placeholder: isVida ? "Ej: Orvi 99, Segubeca, Vida Individual..." : isGmm ? "Ej: Salud Global Esencial..." : isHogar ? "Ej: Casa Habitación Residencial..." : isDanos ? "Ej: Edificio Industrial, Maquinaria..." : "Ej: Toyota Corolla 2022 – ABC-123-X"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", htmlFor: "perteneceA", children: "Esta póliza le pertenece a..." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "perteneceA",
            className: "input",
            value: form.perteneceA || "",
            onChange: (e) => set("perteneceA", e.target.value),
            placeholder: "Nombre de la persona o titular a quien pertenece..."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Forma de Pago", id: "formaPago", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "formaPago",
          className: "select",
          value: form.formaPago,
          onChange: (e) => set("formaPago", e.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONTADO", children: "CONTADO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MENSUAL", children: "MENSUAL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRIMESTRAL", children: "TRIMESTRAL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SEMESTRAL", children: "SEMESTRAL" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { label: "Clave de Agente", id: "agente", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            id: "agente",
            className: "select",
            value: form.agente,
            onChange: (e) => set("agente", e.target.value),
            children: Array.from(/* @__PURE__ */ new Set([...optsList, ...form.agente && !optsList.includes(form.agente) && form.agente !== "OTRO" ? [form.agente] : []])).map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
          }
        ),
        (isAutos || isGmm || isVida || isDanos || isHogar) && form.agente === "OTRO" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "input",
            style: { marginTop: 8 },
            value: form.agenteCustom || "",
            onChange: (e) => set("agenteCustom", e.target.value),
            placeholder: "Escribe el nombre del agente..."
          }
        )
      ] }),
      (isAutos || isGmm || isVida || isDanos || isHogar) && /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { label: "Aseguradora", id: "aseguradora", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "select",
          {
            id: "aseguradora",
            className: "select",
            value: form.aseguradora || (isGmm ? gmmAseguradoras[0] : autosAseguradoras[0]),
            onChange: (e) => set("aseguradora", e.target.value),
            children: (isGmm ? gmmAseguradoras : autosAseguradoras).map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
          }
        ),
        form.aseguradora === "OTRO" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            className: "input",
            style: { marginTop: 8 },
            value: form.aseguradoraCustom || "",
            onChange: (e) => set("aseguradoraCustom", e.target.value),
            placeholder: "Escribe el nombre de la aseguradora..."
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Inicio de Vigencia", id: "fechaInicioVigencia", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "fechaInicioVigencia",
          type: "date",
          className: "input",
          value: form.fechaInicioVigencia || "",
          onChange: (e) => set("fechaInicioVigencia", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Próxima Fecha de Pago", id: "fechaPago", required: true, error: errors.fechaPago, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "fechaPago",
          type: "date",
          className: "input",
          value: form.fechaPago,
          onChange: (e) => set("fechaPago", e.target.value)
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { label: "Periodo de Gracia (solo primer recibo)", id: "periodoGracia", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "periodoGracia",
            type: "date",
            className: "input",
            value: form.periodoGracia || "",
            onChange: (e) => set("periodoGracia", e.target.value),
            title: "Fecha hasta la cual la póliza sigue activa aunque ya pasó la fecha de pago"
          }
        ),
        form.periodoGracia && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 11, color: "#818cf8", marginTop: 2 }, children: [
          "📌 No vencerá hasta el ",
          formatDate(form.periodoGracia)
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Monto 1er Recibo ($)", id: "monto", required: true, error: errors.monto, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "monto",
          type: "number",
          className: "input",
          value: form.monto,
          onChange: (e) => set("monto", e.target.value),
          placeholder: "0.00",
          min: "0",
          step: "0.01"
        }
      ) }),
      form.formaPago !== "CONTADO" && /* @__PURE__ */ jsxRuntimeExports.jsxs(FieldGroup, { label: "Monto Subsecuente ($) (2º recibo en adelante)", id: "montoSubsecuente", required: true, error: errors.montoSubsecuente, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "montoSubsecuente",
            type: "number",
            className: `input ${errors.montoSubsecuente ? "input-error" : ""}`,
            value: form.montoSubsecuente || "",
            onChange: (e) => set("montoSubsecuente", e.target.value),
            placeholder: "Ej: 1880.82",
            min: "0",
            step: "0.01"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: "📌 El sistema cobrará esta cantidad automáticamente a partir del 2º pago." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Estatus", id: "estatus", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "select",
        {
          id: "estatus",
          className: "select",
          value: form.estatus,
          onChange: (e) => set("estatus", e.target.value),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAGADO", children: "PAGADO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VENCIDO", children: "VENCIDO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELADO", children: "CANCELADO" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIQUIDADO", children: "LIQUIDADO" })
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Correo Electrónico", id: "correo", error: errors.correo, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          id: "correo",
          type: "email",
          className: "input",
          value: form.correo,
          onChange: (e) => set("correo", e.target.value),
          placeholder: "ejemplo@correo.com"
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Teléfono / WhatsApp 1 (con lada)", id: "telefono", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "select",
            style: { width: 90 },
            value: form.lada || "+52",
            onChange: (e) => set("lada", e.target.value),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+52", children: "🇲🇽 +52" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+1", children: "🇺🇸 +1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+34", children: "🇪🇸 +34" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "telefono",
            type: "tel",
            className: "input",
            value: form.telefono,
            onChange: (e) => set("telefono", e.target.value.replace(/\D/g, "")),
            placeholder: "10 dígitos",
            maxLength: 10
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FieldGroup, { label: "Teléfono / WhatsApp 2 (Opcional)", id: "telefono2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 8 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "select",
          {
            className: "select",
            style: { width: 90 },
            value: form.lada2 || "+52",
            onChange: (e) => set("lada2", e.target.value),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+52", children: "🇲🇽 +52" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+1", children: "🇺🇸 +1" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "+34", children: "🇪🇸 +34" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "input",
          {
            id: "telefono2",
            type: "tel",
            className: "input",
            value: form.telefono2 || "",
            onChange: (e) => set("telefono2", e.target.value.replace(/\D/g, "")),
            placeholder: "2do número (opcional)",
            maxLength: 10
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", style: { margin: 0 }, children: "Notas Internas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              className: "btn btn-ghost btn-sm",
              style: { fontSize: 11, padding: "2px 8px", color: "var(--accent-blue)", background: "rgba(23,113,197,0.1)", border: "1px solid rgba(23,113,197,0.2)", borderRadius: 6 },
              onClick: () => {
                const texto = "Ya mande recordatorio";
                set("notas", form.notas ? form.notas.includes(texto) ? form.notas : form.notas + "\n" + texto : texto);
              },
              children: "📌 + Ya mande recordatorio"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "textarea",
          {
            className: "input",
            rows: 3,
            value: form.notas,
            onChange: (e) => set("notas", e.target.value),
            placeholder: "Observaciones, acuerdos, historial..."
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: onClose, children: "Cancelar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: handleSave, children: isEdit ? "💾 Guardar Cambios" : "➕ Registrar Póliza" })
    ] })
  ] }) });
}
function MarkPaidModal({ policy, onConfirm, onClose, toast: toast2 }) {
  useEscapeKey(onClose);
  const nextDate = policy.formaPago !== "CONTADO" ? calcNextDate(policy.fechaPago, policy.formaPago) : null;
  const [comprobante, setComprobante] = reactExports.useState(null);
  const [nextMonto, setNextMonto] = reactExports.useState(policy.montoSubsecuente || policy.monto || "");
  let isLastPayment = false;
  if (policy.formaPago !== "CONTADO" && policy.fechaInicioVigencia && nextDate) {
    const startD = /* @__PURE__ */ new Date(policy.fechaInicioVigencia + "T00:00:00");
    const endOfCoverage = new Date(startD);
    endOfCoverage.setFullYear(endOfCoverage.getFullYear() + 1);
    const nextD = /* @__PURE__ */ new Date(nextDate + "T00:00:00");
    if (nextD >= endOfCoverage) {
      isLastPayment = true;
    }
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "✅ Registrar Pago" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "Asegurado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-value", children: policy.nombre })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "Póliza" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-value", children: policy.poliza })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "Monto Pagado" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-value", style: { color: "var(--accent-green)" }, children: formatMoney(policy.monto) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "Forma de Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-value", children: policy.formaPago })
        ] })
      ] }),
      policy.formaPago === "CONTADO" || isLastPayment ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
        background: "rgba(139,92,246,0.1)",
        border: "1px solid rgba(139,92,246,0.3)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        marginTop: 12
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 14, color: "#c4b5fd" }, children: [
        "🎉 ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: policy.formaPago === "CONTADO" ? "Póliza de CONTADO" : "Último pago del ciclo" }),
        " — Al confirmar, la póliza quedará marcada como ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "LIQUIDADA" }),
        " hasta su fecha de renovación anual."
      ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
        background: "rgba(16,185,129,0.08)",
        border: "1px solid rgba(16,185,129,0.25)",
        borderRadius: "var(--radius-md)",
        padding: 16,
        marginTop: 12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 13, color: "var(--text-secondary)", marginBottom: 8 }, children: [
          "🔄 ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Re-agendamiento automático" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 14, color: "#6ee7b7" }, children: "La próxima fecha de pago se calculará automáticamente:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 18, fontWeight: 800, color: "var(--accent-green)", marginTop: 8 }, children: [
          "📅 ",
          formatDate(nextDate)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 12, color: "var(--text-muted)", marginTop: 4 }, children: [
          "El estatus regresará a ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "PENDIENTE" }),
          " para el siguiente ciclo."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 12, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.1)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", style: { fontSize: 12, marginBottom: 4, color: "var(--text-primary)" }, children: "Monto del Siguiente Recibo ($)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "number", className: "input", value: nextMonto, onChange: (e) => setNextMonto(e.target.value), placeholder: "0.00", step: "0.01" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 4, display: "block" }, children: "💡 Ajusta este monto si los recibos subsecuentes cambian respecto al 1er pago." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: onClose, children: "Cancelar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-success", onClick: () => {
        onConfirm(policy, nextDate, comprobante, isLastPayment, nextMonto);
        toast2("Pago registrado y fecha actualizada ✅", "success");
        onClose();
      }, children: "✅ Confirmar Pago" })
    ] })
  ] }) });
}
function CustomCalendarPickerModal({ policies, caroPolicies, onClose, onSelectDate }) {
  useEscapeKey(onClose);
  const [currentDate, setCurrentDate] = reactExports.useState(/* @__PURE__ */ new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
  ];
  const formatYYYYMMDD = (y2, m2, d) => {
    const mm = String(m2 + 1).padStart(2, "0");
    const dd2 = String(d).padStart(2, "0");
    return `${y2}-${mm}-${dd2}`;
  };
  const allPolicies = reactExports.useMemo(() => [...policies, ...caroPolicies], [policies, caroPolicies]);
  const dateIndicators = reactExports.useMemo(() => {
    const map = {};
    allPolicies.forEach((p2) => {
      if (p2.estatus === "CANCELADO") return;
      const isPaid = p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO";
      const isExpired = isExpiredEffective(p2);
      const targetDate = isPaid ? p2.fechaUltimoPago || p2.fechaPago : p2.fechaPago;
      if (targetDate) {
        if (!map[targetDate]) map[targetDate] = { pending: 0, expired: 0, paid: 0 };
        if (isPaid) {
          map[targetDate].paid += 1;
        } else if (isExpired) {
          map[targetDate].expired += 1;
        } else {
          map[targetDate].pending += 1;
        }
      }
    });
    return map;
  }, [allPolicies]);
  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysGrid = [];
  const prevMonthDays = new Date(year, month, 0).getDate();
  for (let i = firstDayIndex - 1; i >= 0; i--) {
    daysGrid.push({ day: prevMonthDays - i, currentMonth: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    daysGrid.push({ day: d, currentMonth: true });
  }
  const remaining = 42 - daysGrid.length;
  const nextPadding = remaining < 7 ? remaining : remaining - 7;
  for (let i = 1; i <= nextPadding; i++) {
    daysGrid.push({ day: i, currentMonth: false });
  }
  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));
  const goToday = () => setCurrentDate(/* @__PURE__ */ new Date());
  const todayStr = todayISO();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: (e) => e.target === e.currentTarget && onClose(), style: { zIndex: 1200 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 440, width: "100%", padding: "20px 24px", borderRadius: "var(--radius-lg)" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { margin: 0, fontSize: 17, fontWeight: 700 }, children: [
        "📅 ",
        monthNames[month],
        " ",
        year
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 6, alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: goToday, style: { fontSize: 12, padding: "3px 8px" }, children: "Hoy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline btn-sm", onClick: prevMonth, style: { padding: "3px 8px", fontSize: 13 }, children: "◀" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline btn-sm", onClick: nextMonth, style: { padding: "3px 8px", fontSize: 13 }, children: "▶" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, style: { marginLeft: 4 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 14, justifyContent: "center", marginBottom: 16, fontSize: 12, background: "rgba(255,255,255,0.03)", padding: "8px 12px", borderRadius: 8, border: "1px solid var(--border)" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#f59e0b", display: "inline-block" } }),
        "Por pagar"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#ef4444", display: "inline-block" } }),
        "Vencido"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { display: "flex", alignItems: "center", gap: 5 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: "#10b981", display: "inline-block" } }),
        "Pagado"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", fontWeight: 600, fontSize: 12, color: "var(--text-muted)", marginBottom: 8 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Dom" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lun" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mar" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mié" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Jue" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Vie" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sáb" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "grid", gridTemplateColumns: "repeat(7, 1fr)", gap: 4 }, children: daysGrid.map((item, idx) => {
      if (!item.currentMonth) {
        return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "10px 0", textAlign: "center", fontSize: 12, color: "var(--text-muted)", opacity: 0.3, userSelect: "none" }, children: item.day }, idx);
      }
      const dateStr = formatYYYYMMDD(year, month, item.day);
      const isToday = dateStr === todayStr;
      const indicators = dateIndicators[dateStr] || { pending: 0, expired: 0, paid: 0 };
      const hasDots = indicators.pending > 0 || indicators.expired > 0 || indicators.paid > 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          onClick: () => {
            onSelectDate(dateStr);
            onClose();
          },
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px 0",
            borderRadius: 8,
            border: isToday ? "2px solid var(--accent-blue)" : "1px solid var(--border)",
            background: isToday ? "rgba(23, 113, 197, 0.12)" : hasDots ? "rgba(255,255,255,0.03)" : "transparent",
            cursor: "pointer",
            transition: "all 0.15s ease",
            outline: "none",
            minHeight: 46
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 13, fontWeight: isToday ? 700 : 500, color: isToday ? "var(--accent-blue)" : "var(--text-main)" }, children: item.day }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", gap: 3, marginTop: 4, height: 6, alignItems: "center" }, children: [
              indicators.expired > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  title: `${indicators.expired} póliza(s) vencida(s)`,
                  style: { width: 6, height: 6, borderRadius: "50%", background: "#ef4444", display: "inline-block" }
                }
              ),
              indicators.pending > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  title: `${indicators.pending} póliza(s) por pagar`,
                  style: { width: 6, height: 6, borderRadius: "50%", background: "#f59e0b", display: "inline-block" }
                }
              ),
              indicators.paid > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  title: `${indicators.paid} póliza(s) pagada(s)`,
                  style: { width: 6, height: 6, borderRadius: "50%", background: "#10b981", display: "inline-block" }
                }
              )
            ] })
          ]
        },
        idx
      );
    }) })
  ] }) });
}
function DailyPaymentsModal({ dateStr, policies, caroPolicies, onClose, onEdit, onDelete, onMarkPaid, onWhatsApp, onEmail }) {
  useEscapeKey(onClose);
  const isPolicyForDate = reactExports.useCallback((p2) => {
    if (p2.estatus === "CANCELADO") return false;
    const isPaid = p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO";
    if (isPaid) {
      return p2.fechaUltimoPago === dateStr || p2.fechaPago === dateStr;
    }
    return p2.fechaPago === dateStr;
  }, [dateStr]);
  const duePolicies = reactExports.useMemo(() => policies.filter(isPolicyForDate), [policies, isPolicyForDate]);
  const annotatedCaro = reactExports.useMemo(() => caroPolicies.map((p2) => ({ ...p2, _isCaro: true })), [caroPolicies]);
  const dueCaroPolicies = reactExports.useMemo(() => annotatedCaro.filter(isPolicyForDate), [annotatedCaro, isPolicyForDate]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal modal-wide", style: { maxWidth: 900 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        "📅 Pagos programados para el ",
        formatDate(dateStr)
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", style: { maxHeight: "70vh", overflowY: "auto", paddingBottom: 24 }, children: duePolicies.length === 0 && dueCaroPolicies.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 40, textAlign: "center", color: "var(--text-muted)" }, children: "No hay pagos programados para esta fecha." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 24 }, children: [
      duePolicies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: 14, color: "var(--text-secondary)", marginBottom: 12 }, children: "Pólizas Generales" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PoliciesTable, { policies: duePolicies, compact: true, onEdit, onDelete, onMarkPaid, onWhatsApp, onEmail })
      ] }),
      dueCaroPolicies.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: 14, color: "#8b5cf6", marginBottom: 12 }, children: "Pólizas Clave Caro" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PoliciesTable, { policies: dueCaroPolicies, compact: true, onEdit, onDelete, onMarkPaid, onWhatsApp, onEmail })
      ] })
    ] }) })
  ] }) });
}
function ContactModal({ policy, type, templates, onClose }) {
  useEscapeKey(onClose);
  const lada = policy.lada || "+52";
  const initialPhone = (policy.telefono || "").replace(/\D/g, "");
  const [editablePhone, setEditablePhone] = reactExports.useState(initialPhone);
  const waNumber = lada.replace("+", "") + editablePhone;
  const msgText = fillTemplate(templates.whatsapp, policy, true);
  const emailAsunto = fillTemplate(templates.email_asunto, policy, false);
  const emailCuerpo = fillTemplate(templates.email_cuerpo, policy, false);
  const openWA = () => {
    const url = `https://wa.me/${waNumber}?text=${encodeURIComponent(msgText)}`;
    window.open(url, "_blank");
  };
  const openEmail = () => {
    const url = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${encodeURIComponent(policy.correo || "")}&cc=${encodeURIComponent("dagarso79@hotmail.com")}&su=${encodeURIComponent(emailAsunto)}&body=${encodeURIComponent(emailCuerpo)}`;
    window.open(url, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: (e) => e.target === e.currentTarget && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal modal-wide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: type === "whatsapp" ? "💬 Enviar WhatsApp" : "📧 Enviar Correo" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-grid", style: { marginBottom: 16 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "Destinatario" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-value", style: { fontSize: 13 }, children: policy.nombre })
        ] }),
        type === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", style: { padding: "8px 12px" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "WhatsApp (Selecciona el número a enviar)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  id: "opt_tel1",
                  name: "wa_select",
                  checked: editablePhone === (policy.telefono || "").replace(/\D/g, ""),
                  onChange: () => setEditablePhone((policy.telefono || "").replace(/\D/g, ""))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "opt_tel1", style: { fontSize: 12, cursor: "pointer", fontWeight: 500 }, children: [
                "Tel 1: ",
                policy.lada || "+52",
                " ",
                policy.telefono || "—"
              ] })
            ] }),
            policy.telefono2 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "radio",
                  id: "opt_tel2",
                  name: "wa_select",
                  checked: editablePhone === (policy.telefono2 || "").replace(/\D/g, ""),
                  onChange: () => setEditablePhone((policy.telefono2 || "").replace(/\D/g, ""))
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { htmlFor: "opt_tel2", style: { fontSize: 12, cursor: "pointer", fontWeight: 500 }, children: [
                "Tel 2: ",
                policy.lada2 || "+52",
                " ",
                policy.telefono2
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "text",
                className: "input",
                style: { padding: "4px 8px", width: "100%", marginTop: 4 },
                value: editablePhone,
                onChange: (e) => setEditablePhone(e.target.value.replace(/[^0-9]/g, "")),
                placeholder: "Número personalizado"
              }
            )
          ] })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "info-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-label", children: "Correo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "info-card-value", style: { fontSize: 13, wordBreak: "break-all" }, children: policy.correo || "—" })
        ] })
      ] }),
      type === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "form-label", style: { marginBottom: 8 }, children: "Vista previa del mensaje:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview", children: msgText }),
        !editablePhone && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 12, color: "var(--accent-red)", marginTop: 8 }, children: "⚠️ Introduce un número de teléfono válido." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "form-label", style: { marginBottom: 6 }, children: "Asunto:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview", style: { padding: "10px 14px", fontSize: 14, fontWeight: 600 }, children: emailAsunto })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "form-label", style: { marginBottom: 8 }, children: "Cuerpo del correo:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview", children: emailCuerpo }),
        !policy.correo && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 12, color: "var(--accent-red)", marginTop: 8 }, children: "⚠️ Esta póliza no tiene correo electrónico registrado." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: onClose, children: "Cerrar" }),
      type === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-success", onClick: openWA, disabled: !editablePhone, children: "💬 Abrir en WhatsApp" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary", onClick: openEmail, disabled: !policy.correo, children: "📧 Abrir en Correo" })
    ] })
  ] }) });
}
function PoliciesTable({ policies, onEdit, onDelete, onMarkPaid, onWhatsApp, onEmail, onRenew, onOpenPolicyNum, compact = true, showSectionTag = false }) {
  const [sort, setSort] = reactExports.useState({ key: "fechaPago", dir: "asc" });
  const [summaryPolicy, setSummaryPolicy] = reactExports.useState(null);
  const toggleSort = (key) => {
    setSort((s) => ({ key, dir: s.key === key && s.dir === "asc" ? "desc" : "asc" }));
  };
  const sorted = reactExports.useMemo(() => {
    return [...policies].sort((a, b) => {
      let av = a[sort.key], bv = b[sort.key];
      if (sort.key === "ramo") {
        const getRamoStr = (p2) => (p2 == null ? void 0 : p2._isCaro) ? "AUTOS QUALITAS CARO" : (p2 == null ? void 0 : p2._isGmm) ? "GMM" : (p2 == null ? void 0 : p2._isAutos) ? "AUTOS" : (p2 == null ? void 0 : p2._isVida) ? "VIDA" : (p2 == null ? void 0 : p2._isDanos) ? "DAÑOS" : (p2 == null ? void 0 : p2._isHogar) ? "HOGAR" : "AUTOS QUALITAS DANI";
        av = getRamoStr(a);
        bv = getRamoStr(b);
      }
      if (sort.key === "monto") {
        av = Number(av);
        bv = Number(bv);
      }
      if (typeof av === "string") av = av.toLowerCase();
      if (typeof bv === "string") bv = bv.toLowerCase();
      if (av < bv) return sort.dir === "asc" ? -1 : 1;
      if (av > bv) return sort.dir === "asc" ? 1 : -1;
      return 0;
    });
  }, [policies, sort]);
  const Th2 = ({ k: k2, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { className: "sortable", onClick: () => toggleSort(k2), children: [
    label,
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Sort, { dir: sort.key === k2 ? sort.dir : null })
  ] });
  const isUrgent = (p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isUpcomingReminder(p2) || isExpiredEffective(p2);
  };
  if (sorted.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty-state", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-state-icon", children: "📋" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Sin resultados" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No hay pólizas que coincidan con los filtros aplicados." })
    ] });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "table-wrapper", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "nombre", label: "Asegurado" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "poliza", label: "Póliza" }),
        !compact && /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "bien", label: "Unidad" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "agente", label: "Agente" }),
        showSectionTag && /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "ramo", label: "Ramo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "formaPago", label: "Forma Pago" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "fechaPago", label: "Fecha Límite" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "monto", label: "Monto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Th2, { k: "estatus", label: "Estatus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Acciones" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: sorted.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: isUrgent(p2) ? "urgent-row" : "", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 13 }, children: p2.nombre }),
          p2.perteneceA && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "#38bdf8", marginTop: 2 }, children: [
            "👤 Pertenece a: ",
            p2.perteneceA
          ] }),
          p2.notas && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginTop: 2 }, children: [
            "📝 ",
            p2.notas.slice(0, 40),
            p2.notas.length > 40 ? "…" : ""
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "code",
          {
            onDoubleClick: () => setSummaryPolicy(p2),
            title: "Haz doble clic para ver el resumen completo",
            style: { fontSize: 12, color: "var(--text-secondary)", background: "rgba(255,255,255,0.08)", padding: "4px 8px", borderRadius: 4, cursor: "pointer", userSelect: "text" },
            children: [
              "📋 ",
              p2.poliza
            ]
          }
        ) }),
        !compact && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { maxWidth: 200 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate", style: { fontSize: 12, color: "var(--text-secondary)" }, title: p2.bien, children: p2.bien || "—" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentBadge, { policy: p2, agente: p2.agente || p2.aseguradora }) }),
        showSectionTag && /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(RamoBadge, { policy: p2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "forma-badge", children: p2.formaPago }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(DateCell, { dateStr: p2.fechaPago, estatus: p2.estatus, periodoGracia: p2.periodoGracia, renewalDateStr: p2.estatus === "LIQUIDADO" ? getRenewalDate(p2) : null }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600 }, children: formatMoney(getEffectiveMonto(p2)) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(StatusBadge, { policy: p2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "action-btns", children: [
          p2.estatus !== "LIQUIDADO" && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "action-btn action-btn-status",
              title: "Confirmar pago / subir comprobante",
              onClick: () => onMarkPaid(p2),
              children: "✅"
            }
          ),
          p2.estatus === "LIQUIDADO" && onRenew && isUpcomingRenewal(p2) && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              title: "Renovar póliza para el siguiente año",
              onClick: () => onRenew(p2),
              style: { background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.4)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 15, color: "#818cf8", fontWeight: 700 },
              children: "🔄"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "action-btn action-btn-whatsapp",
              title: "Enviar WhatsApp",
              onClick: () => onWhatsApp(p2),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "action-btn action-btn-email",
              title: "Enviar correo",
              onClick: () => onEmail(p2),
              children: "✉️"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "action-btn action-btn-edit",
              title: "Editar",
              onClick: () => onEdit(p2),
              children: "✏️"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "action-btn action-btn-delete",
              title: "Eliminar",
              onClick: () => onDelete(p2),
              children: "🗑️"
            }
          )
        ] }) })
      ] }, p2.id)) })
    ] }),
    summaryPolicy && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicySummaryModal,
      {
        policy: summaryPolicy,
        onOpenPolicyNum,
        allActivePolicies: policies,
        onClose: () => setSummaryPolicy(null)
      }
    )
  ] });
}
function DashboardPage({ policies, onMarkPaid, onWhatsApp, onEmail, onEdit, onDelete, onRenew }) {
  const [filterEstatus, setFilterEstatus] = reactExports.useState("TODOS");
  const [search, setSearch] = reactExports.useState("");
  const globalSearchResults = reactExports.useMemo(() => {
    if (!search.trim()) return [];
    const q2 = search.toLowerCase().trim();
    return policies.filter(
      (p2) => (p2.nombre || "").toLowerCase().includes(q2) || (p2.poliza || "").toLowerCase().includes(q2) || (p2.bien || "").toLowerCase().includes(q2) || (p2.perteneceA || "").toLowerCase().includes(q2) || (p2.agente || "").toLowerCase().includes(q2) || (p2.aseguradora || "").toLowerCase().includes(q2)
    );
  }, [policies, search]);
  const stats = reactExports.useMemo(() => {
    const total = policies.length;
    const pagados = policies.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO").length;
    const pendientes = policies.filter((p2) => p2.estatus === "PENDIENTE" && !isExpiredEffective(p2)).length;
    const vencidos = policies.filter((p2) => p2.estatus === "VENCIDO" || isExpiredEffective(p2)).length;
    const cancelados = policies.filter((p2) => p2.estatus === "CANCELADO").length;
    const montoTotal = policies.filter((p2) => p2.estatus !== "CANCELADO").reduce((s, p2) => s + Number(p2.monto || 0), 0);
    const urgentes = policies.filter((p2) => isUpcomingReminder(p2)).length;
    const renovaciones2 = policies.filter((p2) => isUpcomingRenewal(p2)).length;
    return { total, pagados, pendientes, vencidos, cancelados, montoTotal, urgentes, renovaciones: renovaciones2 };
  }, [policies]);
  const filteredByStat = reactExports.useMemo(() => {
    if (filterEstatus === "TODOS") return policies;
    if (filterEstatus === "RENOVACIONES") return policies.filter((p2) => isUpcomingRenewal(p2));
    if (filterEstatus === "VENCIDO") return policies.filter((p2) => p2.estatus === "VENCIDO" || isExpiredEffective(p2));
    if (filterEstatus === "PENDIENTE") return policies.filter((p2) => p2.estatus === "PENDIENTE" && !isExpiredEffective(p2));
    if (filterEstatus === "PAGADO") return policies.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO");
    return policies.filter((p2) => p2.estatus === filterEstatus);
  }, [policies, filterEstatus]);
  const vencidas = reactExports.useMemo(() => policies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isExpiredEffective(p2);
  }), [policies]);
  const proximas = reactExports.useMemo(() => policies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isUpcomingReminder(p2);
  }), [policies]);
  const renovaciones = reactExports.useMemo(() => policies.filter((p2) => isUpcomingRenewal(p2)), [policies]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginBottom: 20, padding: "14px 18px", background: "var(--bg-card)", border: "1px solid var(--border)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "text",
          className: "input input-search",
          style: { width: "100%", height: 44, fontSize: 14, borderRadius: "var(--radius-md)", background: "var(--bg-input)", paddingRight: search ? 36 : 12 },
          placeholder: "Buscador Global: cliente, número de póliza, aseguradora, vehículo...",
          value: search,
          onChange: (e) => setSearch(e.target.value)
        }
      ),
      search && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => setSearch(""),
          style: { position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", fontSize: 15, color: "var(--text-muted)" },
          title: "Limpiar búsqueda",
          children: "✕"
        }
      )
    ] }) }),
    search.trim() ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", style: { color: "var(--accent-blue)" }, children: [
          "🔍 Resultados de Búsqueda Global (",
          globalSearchResults.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => setSearch(""), children: "↩ Limpiar Búsqueda" })
      ] }),
      globalSearchResults.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: globalSearchResults,
          compact: true,
          showSectionTag: true,
          onEdit,
          onDelete,
          onMarkPaid,
          onWhatsApp,
          onEmail,
          onRenew
        }
      ) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 45, textAlign: "center", color: "var(--text-muted)", fontSize: 14 }, children: [
        "No se encontraron pólizas en ningún ramo que coincidan con ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          '"',
          search,
          '"'
        ] }),
        "."
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", children: [
        { label: "Total Pólizas", value: stats.total, icon: "🛡️", cls: "stat-blue", filter: "TODOS" },
        { label: "Pendientes", value: stats.pendientes, icon: "⏳", cls: "stat-yellow", filter: "PENDIENTE" },
        { label: "Vencidos", value: stats.vencidos, icon: "🔴", cls: "stat-red", filter: "VENCIDO" },
        { label: "Renovaciones", value: stats.renovaciones, icon: "🔄", cls: "stat-purple", filter: "RENOVACIONES" },
        { label: "Pagados (ciclo)", value: stats.pagados, icon: "✅", cls: "stat-green", filter: "PAGADO" },
        { label: "Cancelados", value: stats.cancelados, icon: "❌", cls: "stat-gray", filter: "CANCELADO" },
        { label: "Cobranza Total", value: formatMoney(stats.montoTotal), icon: "💰", cls: "stat-orange", filter: "TODOS" }
      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: `stat-card ${s.cls}`,
          style: {
            cursor: "pointer",
            opacity: filterEstatus === s.filter || filterEstatus === "TODOS" ? 1 : 0.5,
            border: filterEstatus === s.filter && s.filter !== "TODOS" ? "2px solid currentColor" : "1px solid transparent",
            transition: "all 0.2s ease"
          },
          onClick: () => setFilterEstatus(filterEstatus === s.filter ? "TODOS" : s.filter),
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-icon", children: s.icon }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-value", children: s.value }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-label", children: s.label })
          ]
        },
        s.label
      )) }),
      filterEstatus !== "TODOS" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
            "📋 Pólizas Concentradas — Estatus: ",
            filterEstatus,
            " (",
            filteredByStat.length,
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => setFilterEstatus("TODOS"), children: "↩ Ver Vista General" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PoliciesTable,
          {
            policies: filteredByStat,
            compact: true,
            showSectionTag: true,
            onEdit,
            onDelete,
            onMarkPaid,
            onWhatsApp,
            onEmail,
            onRenew
          }
        )
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        vencidas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { border: "1px solid rgba(239, 68, 68, 0.3)", marginTop: 20 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { borderBottom: "1px solid rgba(239, 68, 68, 0.2)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", style: { color: "var(--accent-red)" }, children: [
              "🛑 Pólizas Vencidas — ",
              vencidas.length,
              " póliza(s) con pago atrasado"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: "Contacta de inmediato a estos asegurados" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PoliciesTable,
            {
              policies: vencidas,
              compact: true,
              showSectionTag: true,
              onEdit,
              onDelete,
              onMarkPaid,
              onWhatsApp,
              onEmail
            }
          )
        ] }),
        proximas.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "rgba(245, 158, 11, 0.05)", borderBottom: "1px solid rgba(245, 158, 11, 0.2)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", style: { color: "var(--accent-yellow)" }, children: "⚠️ Próximas a vencer (en 4 días o menos)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
              proximas.length,
              " póliza(s)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PoliciesTable,
            {
              policies: proximas,
              compact: true,
              showSectionTag: true,
              onEdit,
              onDelete,
              onMarkPaid,
              onWhatsApp,
              onEmail
            }
          )
        ] }),
        renovaciones.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "rgba(139, 92, 246, 0.05)", borderBottom: "1px solid rgba(139, 92, 246, 0.2)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", style: { color: "#8b5cf6" }, children: "🔄 Próximas a Renovar" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
              renovaciones.length,
              " póliza(s) (ya liquidadas, vence su ciclo anual en <= 15 días)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            PoliciesTable,
            {
              policies: renovaciones,
              compact: true,
              showSectionTag: true,
              onEdit,
              onDelete,
              onMarkPaid,
              onWhatsApp,
              onEmail,
              onRenew
            }
          )
        ] })
      ] })
    ] })
  ] });
}
function PoliciesPage({ policies, onEdit, onDelete, onMarkPaid, onWhatsApp, onEmail, onRenew, onNew, onUpdatePolicy, defaultEstatus = "TODOS" }) {
  const [selectedImg, setSelectedImg] = reactExports.useState(null);
  const [search, setSearch] = reactExports.useState("");
  const [filterAgente, setFilterAgente] = reactExports.useState("TODOS");
  const [filterEstatus, setFilterEstatus] = reactExports.useState(defaultEstatus);
  const [filterForma, setFilterForma] = reactExports.useState("TODOS");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  reactExports.useEffect(() => {
    setFilterEstatus(defaultEstatus);
  }, [defaultEstatus]);
  const stats = reactExports.useMemo(() => {
    const list = policies || [];
    const total = list.length;
    const pagados = list.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO").length;
    const pendientes = list.filter((p2) => p2.estatus === "PENDIENTE").length;
    const vencidos = list.filter((p2) => isExpiredEffective(p2)).length;
    const urgentes = list.filter((p2) => isUpcomingReminder(p2)).length;
    const renovaciones = list.filter((p2) => isUpcomingRenewal(p2)).length;
    const comprobantes = list.filter((p2) => p2.comprobante).length;
    return { total, pagados, pendientes, vencidos, urgentes, renovaciones, comprobantes };
  }, [policies]);
  const agentOpts = reactExports.useMemo(() => {
    const list = policies || [];
    return Array.from(new Set(list.map((p2) => p2.agente).filter(Boolean)));
  }, [policies]);
  const filtered = reactExports.useMemo(() => {
    const list = policies || [];
    return list.filter((p2) => {
      if (!p2) return false;
      const q2 = search.toLowerCase().trim();
      const matchName = (p2.nombre || "").toLowerCase().includes(q2);
      const matchPoliza = (p2.poliza || "").toLowerCase().includes(q2);
      const matchBien = (p2.bien || "").toLowerCase().includes(q2);
      if (q2 && !matchName && !matchPoliza && !matchBien) return false;
      if (filterAgente !== "TODOS" && p2.agente !== filterAgente && p2.aseguradora !== filterAgente) return false;
      if (filterEstatus !== "TODOS") {
        if (filterEstatus === "RENOVACIONES") {
          if (!isUpcomingRenewal(p2)) return false;
        } else if (filterEstatus === "URGENTES") {
          if (!isUpcomingReminder(p2)) return false;
        } else if (filterEstatus === "VENCIDO") {
          if (!isExpiredEffective(p2)) return false;
        } else if (filterEstatus === "COMPROBANTES") {
          if (!p2.comprobante) return false;
        } else if (filterEstatus === "PAGADO") {
          if (p2.estatus !== "PAGADO" && p2.estatus !== "LIQUIDADO") return false;
        } else {
          if (p2.estatus !== filterEstatus) return false;
        }
      }
      if (filterForma !== "TODOS" && p2.formaPago !== filterForma) return false;
      if (dateFrom && p2.fechaPago < dateFrom) return false;
      if (dateTo && p2.fechaPago > dateTo) return false;
      return true;
    });
  }, [policies, search, filterAgente, filterEstatus, filterForma, dateFrom, dateTo]);
  const clearFilters = () => {
    setSearch("");
    setFilterAgente("TODOS");
    setFilterEstatus("TODOS");
    setFilterForma("TODOS");
    setDateFrom("");
    setDateTo("");
  };
  const activeFilters = filterAgente !== "TODOS" || filterEstatus !== "TODOS" || filterForma !== "TODOS" || dateFrom || dateTo || search;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", style: { marginBottom: 20 }, children: [
      { label: "Total Autos Qualitas", value: stats.total, icon: "📋", cls: "stat-blue", filter: "TODOS" },
      { label: "Pendientes", value: stats.pendientes, icon: "⏳", cls: "stat-yellow", filter: "PENDIENTE" },
      { label: "Próx. a Vencer (4d)", value: stats.urgentes, icon: "🔴", cls: "stat-orange", filter: "URGENTES" },
      { label: "Vencidos", value: stats.vencidos, icon: "🛑", cls: "stat-red", filter: "VENCIDO" },
      { label: "Renovaciones", value: stats.renovaciones, icon: "🔄", cls: "stat-purple", filter: "RENOVACIONES" },
      { label: "Pagados", value: stats.pagados, icon: "✅", cls: "stat-green", filter: "PAGADO" },
      { label: "Comprobantes", value: stats.comprobantes, icon: "🧾", cls: "stat-orange", filter: "COMPROBANTES" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `stat-card ${s.cls}`,
        style: {
          cursor: "pointer",
          opacity: filterEstatus === s.filter || filterEstatus === "TODOS" ? 1 : 0.5,
          border: filterEstatus === s.filter ? "2px solid currentColor" : "1px solid transparent",
          transition: "all 0.2s ease"
        },
        onClick: () => setFilterEstatus(s.filter),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-value", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-label", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginBottom: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { flexDirection: "column", alignItems: "flex-start", gap: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between w-full items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          "📋 Pólizas Qualitas D&M (",
          filtered.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "✕ Limpiar Filtros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-primary btn-sm", onClick: onNew, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Plus, {}),
            " Nueva Póliza"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input input-search",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Buscar nombre, póliza, bien..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Agente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 130 },
              value: filterAgente,
              onChange: (e) => setFilterAgente(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                agentOpts.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Estatus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterEstatus,
              onChange: (e) => setFilterEstatus(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "URGENTES", children: "PRÓX. A VENCER (4D)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VENCIDO", children: "VENCIDO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAGADO", children: "PAGADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELADO", children: "CANCELADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIQUIDADO", children: "LIQUIDADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RENOVACIONES", children: "RENOVACIONES (Próximas)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPROBANTES", children: "COMPROBANTES" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Forma de Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterForma,
              onChange: (e) => setFilterForma(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONTADO", children: "CONTADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MENSUAL", children: "MENSUAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRIMESTRAL", children: "TRIMESTRAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SEMESTRAL", children: "SEMESTRAL" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha desde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha hasta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value)
            }
          )
        ] })
      ] })
    ] }) }),
    filterEstatus !== "COMPROBANTES" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          filterEstatus === "TODOS" ? "Todas las Pólizas Autos Qualitas" : `Pólizas (${filterEstatus})`,
          " ",
          "(",
          filtered.length,
          ")"
        ] }),
        activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "↩ Mostrar Todas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: filtered,
          compact: true,
          onEdit,
          onDelete,
          onMarkPaid,
          onWhatsApp,
          onEmail,
          onRenew
        }
      ),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "12px 24px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          filtered.length,
          " registro(s) encontrado(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Total filtrado: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--accent-green)" }, children: formatMoney(filtered.reduce((s, p2) => s + Number(p2.monto || 0), 0)) })
        ] })
      ] })
    ] }),
    filterEstatus === "COMPROBANTES" && (() => {
      const withComprobantes = (policies || []).filter((p2) => p2.comprobante);
      if (withComprobantes.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginTop: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 40, textAlign: "center", color: "var(--text-muted)" }, children: "🧾 Aún no hay comprobantes guardados en Qualitas D&M." }) });
      const grouped = {};
      withComprobantes.forEach((p2) => {
        const dStr = p2.fechaUltimoPago || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const date = /* @__PURE__ */ new Date(dStr + "T12:00:00");
        const monthYear = date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
        const capitalized = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
        if (!grouped[capitalized]) grouped[capitalized] = [];
        grouped[capitalized].push(p2);
      });
      return Object.entries(grouped).map(([monthName, groupPolicies]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
            "📁 ",
            monthName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
            groupPolicies.length,
            " comprobante(s)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }, children: groupPolicies.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 12, background: "var(--bg-card)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 14, marginBottom: 4 }, children: p2.nombre }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                title: "Eliminar comprobante",
                onClick: () => {
                  if (confirm("¿Eliminar este comprobante?")) onEdit({ ...p2, comprobante: null });
                },
                style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 13, color: "#ef4444", flexShrink: 0 },
                children: "🗑️"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Póliza:" }),
            " ",
            p2.poliza
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha límite:" }),
            " ",
            formatDate(p2.fechaPagoAnterior || p2.fechaPago)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--accent-green)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha pagado:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                defaultValue: p2.fechaUltimoPago || todayISO(),
                onBlur: (e) => {
                  const val = e.target.value;
                  if (val && val !== p2.fechaUltimoPago) {
                    onUpdatePolicy({ ...p2, fechaUltimoPago: val });
                    if (toast) toast("Fecha de pago actualizada ✅", "success");
                  }
                },
                style: { fontSize: 11, padding: "2px 6px", border: "1px solid var(--accent-green)", borderRadius: 4, background: "var(--bg-input)", color: "var(--accent-green)", fontWeight: "bold" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: { width: "100%", height: 200, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", cursor: "pointer" },
              onClick: () => setSelectedImg(p2.comprobante),
              children: p2.comprobante.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src: p2.comprobante, width: "100%", height: "100%", type: "application/pdf", style: { pointerEvents: "none" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p2.comprobante, alt: "Comprobante", style: { width: "100%", height: "100%", objectFit: "contain" } })
            }
          )
        ] }, p2.id)) })
      ] }, monthName));
    })(),
    selectedImg && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageModal, { src: selectedImg, onClose: () => setSelectedImg(null) })
  ] });
}
function UrgentPage({ policies, onEdit, onDelete, onMarkPaid, onWhatsApp, onEmail }) {
  const urgent = reactExports.useMemo(() => policies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    const d = daysUntil(p2.fechaPago);
    return d !== null && d <= 4;
  }).sort((a, b) => (a.fechaPago || "") < (b.fechaPago || "") ? -1 : 1), [policies]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-fade-enter", children: urgent.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty-state", style: { paddingTop: 100 }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-state-icon", children: "🎉" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "¡Sin urgencias!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "No hay pólizas con vencimiento en los próximos 4 días. ¡Todo al día!" })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "alert-banner", style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "alert-icon", children: "🚨" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "alert-content", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { children: [
          urgent.length,
          " póliza(s) requieren atención inmediata"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Estas pólizas vencen dentro de 4 días o ya están vencidas. Envía recordatorios ahora." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginLeft: "auto", display: "flex", gap: 8 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-warning btn-sm", onClick: () => urgent.forEach((p2) => p2.telefono && window.open(`https://wa.me/${(p2.lada || "+52").replace("+", "")}${p2.telefono}?text=${encodeURIComponent(fillTemplate("Hola {nombre}, le recordamos que su póliza {poliza} vence el {fechaPago} por {monto}. Favor de realizar su pago. Gracias.", p2))}`, "_blank")), children: "💬 WA Masivo" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", children: "⚡ Recordatorios Urgentes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
          urgent.length,
          " registros"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: urgent,
          compact: false,
          onEdit,
          onDelete,
          onMarkPaid,
          onWhatsApp,
          onEmail
        }
      )
    ] })
  ] }) });
}
function CaroPoliciesPage({ policies, onSave, onDelete, onMarkPaid, onWhatsApp, onEmail, onRenew, toast: toast2 }) {
  const [modalNew, setModalNew] = reactExports.useState(false);
  const [modalEdit, setModalEdit] = reactExports.useState(null);
  const [modalPaid, setModalPaid] = reactExports.useState(null);
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [selectedImg, setSelectedImg] = reactExports.useState(null);
  useEscapeKey(deleteConfirm ? () => setDeleteConfirm(null) : null);
  const [search, setSearch] = reactExports.useState("");
  const [filterAgente, setFilterAgente] = reactExports.useState("TODOS");
  const [filterEstatus, setFilterEstatus] = reactExports.useState("TODOS");
  const [filterForma, setFilterForma] = reactExports.useState("TODOS");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const stats = reactExports.useMemo(() => {
    const list = policies || [];
    const total = list.length;
    const pagados = list.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO").length;
    const pendientes = list.filter((p2) => p2.estatus === "PENDIENTE").length;
    const vencidos = list.filter((p2) => isExpiredEffective(p2)).length;
    const urgentes = list.filter((p2) => isUpcomingReminder(p2)).length;
    const renovaciones = list.filter((p2) => isUpcomingRenewal(p2)).length;
    const comprobantes = list.filter((p2) => p2.comprobante).length;
    return { total, pagados, pendientes, vencidos, urgentes, renovaciones, comprobantes };
  }, [policies]);
  const agentOpts = reactExports.useMemo(() => {
    const list = policies || [];
    return Array.from(new Set(list.map((p2) => p2.agente).filter(Boolean)));
  }, [policies]);
  const filtered = reactExports.useMemo(() => {
    const list = policies || [];
    return list.filter((p2) => {
      if (!p2) return false;
      const q2 = search.toLowerCase().trim();
      const matchName = (p2.nombre || "").toLowerCase().includes(q2);
      const matchPoliza = (p2.poliza || "").toLowerCase().includes(q2);
      const matchBien = (p2.bien || "").toLowerCase().includes(q2);
      if (q2 && !matchName && !matchPoliza && !matchBien) return false;
      if (filterAgente !== "TODOS" && p2.agente !== filterAgente && p2.aseguradora !== filterAgente) return false;
      if (filterEstatus !== "TODOS") {
        if (filterEstatus === "RENOVACIONES") {
          if (!isUpcomingRenewal(p2)) return false;
        } else if (filterEstatus === "URGENTES") {
          if (!isUpcomingReminder(p2)) return false;
        } else if (filterEstatus === "VENCIDO") {
          if (!isExpiredEffective(p2)) return false;
        } else if (filterEstatus === "COMPROBANTES") {
          if (!p2.comprobante) return false;
        } else if (filterEstatus === "PAGADO") {
          if (p2.estatus !== "PAGADO" && p2.estatus !== "LIQUIDADO") return false;
        } else {
          if (p2.estatus !== filterEstatus) return false;
        }
      }
      if (filterForma !== "TODOS" && p2.formaPago !== filterForma) return false;
      if (dateFrom && p2.fechaPago < dateFrom) return false;
      if (dateTo && p2.fechaPago > dateTo) return false;
      return true;
    });
  }, [policies, search, filterAgente, filterEstatus, filterForma, dateFrom, dateTo]);
  const clearFilters = () => {
    setSearch("");
    setFilterAgente("TODOS");
    setFilterEstatus("TODOS");
    setFilterForma("TODOS");
    setDateFrom("");
    setDateTo("");
  };
  const activeFilters = filterAgente !== "TODOS" || filterEstatus !== "TODOS" || filterForma !== "TODOS" || dateFrom || dateTo || search;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", style: { marginBottom: 20 }, children: [
      { label: "Total Pólizas", value: stats.total, icon: "🛡️", cls: "stat-blue", filter: "TODOS" },
      { label: "Pendientes", value: stats.pendientes, icon: "⏳", cls: "stat-yellow", filter: "PENDIENTE" },
      { label: "Próx. a Vencer (4d)", value: stats.urgentes, icon: "🔴", cls: "stat-orange", filter: "URGENTES" },
      { label: "Vencidos", value: stats.vencidos, icon: "🛑", cls: "stat-red", filter: "VENCIDO" },
      { label: "Renovaciones", value: stats.renovaciones, icon: "🔄", cls: "stat-purple", filter: "RENOVACIONES" },
      { label: "Pagados", value: stats.pagados, icon: "✅", cls: "stat-green", filter: "PAGADO" },
      { label: "Comprobantes", value: stats.comprobantes, icon: "🧾", cls: "stat-orange", filter: "COMPROBANTES" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `stat-card ${s.cls}`,
        style: {
          cursor: "pointer",
          opacity: filterEstatus === s.filter || filterEstatus === "TODOS" ? 1 : 0.5,
          border: filterEstatus === s.filter ? "2px solid currentColor" : "1px solid transparent",
          transition: "all 0.2s ease"
        },
        onClick: () => setFilterEstatus(s.filter),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-value", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-label", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginBottom: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { flexDirection: "column", alignItems: "flex-start", gap: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between w-full items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          "🛡️ Pólizas Clave Caro (",
          filtered.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "✕ Limpiar Filtros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-primary btn-sm", onClick: () => setModalNew(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Plus, {}),
            " Nueva Póliza (Caro)"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input input-search",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Buscar nombre, póliza, bien..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Agente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 130 },
              value: filterAgente,
              onChange: (e) => setFilterAgente(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                agentOpts.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Estatus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterEstatus,
              onChange: (e) => setFilterEstatus(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "URGENTES", children: "PRÓX. A VENCER (4D)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VENCIDO", children: "VENCIDO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAGADO", children: "PAGADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELADO", children: "CANCELADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIQUIDADO", children: "LIQUIDADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RENOVACIONES", children: "RENOVACIONES (Próximas)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPROBANTES", children: "COMPROBANTES" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Forma de Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterForma,
              onChange: (e) => setFilterForma(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONTADO", children: "CONTADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MENSUAL", children: "MENSUAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRIMESTRAL", children: "TRIMESTRAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SEMESTRAL", children: "SEMESTRAL" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha desde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha hasta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value)
            }
          )
        ] })
      ] })
    ] }) }),
    filterEstatus !== "COMPROBANTES" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          filterEstatus === "TODOS" ? "Todas las Pólizas de Caro" : `Pólizas (${filterEstatus})`,
          " ",
          "(",
          filtered.length,
          ")"
        ] }),
        activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "↩ Mostrar Todas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: filtered,
          onEdit: setModalEdit,
          onDelete: setDeleteConfirm,
          onMarkPaid: setModalPaid,
          onWhatsApp,
          onEmail,
          onRenew
        }
      ),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "12px 24px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          filtered.length,
          " registro(s) encontrado(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Total filtrado: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--accent-green)" }, children: formatMoney(filtered.reduce((s, p2) => s + Number(p2.monto || 0), 0)) })
        ] })
      ] })
    ] }),
    filterEstatus === "COMPROBANTES" && (() => {
      const withComprobantes = policies.filter((p2) => p2.comprobante);
      if (withComprobantes.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginTop: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 40, textAlign: "center", color: "var(--text-muted)" }, children: "🧾 Aún no hay comprobantes guardados en Clave Caro." }) });
      const grouped = {};
      withComprobantes.forEach((p2) => {
        const dStr = p2.fechaUltimoPago || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const date = /* @__PURE__ */ new Date(dStr + "T12:00:00");
        const monthYear = date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
        const capitalized = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
        if (!grouped[capitalized]) grouped[capitalized] = [];
        grouped[capitalized].push(p2);
      });
      return Object.entries(grouped).map(([monthName, groupPolicies]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
            "📁 ",
            monthName
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
            groupPolicies.length,
            " comprobante(s)"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }, children: groupPolicies.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 12, background: "var(--bg-card)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 14, marginBottom: 4 }, children: p2.nombre }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                title: "Eliminar comprobante",
                onClick: () => {
                  if (confirm("¿Eliminar este comprobante?")) onSave({ ...p2, comprobante: null });
                },
                style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 13, color: "#ef4444", flexShrink: 0 },
                children: "🗑️"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Póliza:" }),
            " ",
            p2.poliza
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha límite:" }),
            " ",
            formatDate(p2.fechaPagoAnterior || p2.fechaPago)
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--accent-green)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha pagado:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "date",
                defaultValue: p2.fechaUltimoPago || todayISO(),
                onBlur: (e) => {
                  const val = e.target.value;
                  if (val && val !== p2.fechaUltimoPago) {
                    onSave({ ...p2, fechaUltimoPago: val });
                    if (toast2) toast2("Fecha de pago actualizada ✅", "success");
                  }
                },
                style: { fontSize: 11, padding: "2px 6px", border: "1px solid var(--accent-green)", borderRadius: 4, background: "var(--bg-input)", color: "var(--accent-green)", fontWeight: "bold" }
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: { width: "100%", height: 200, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", cursor: "pointer" },
              onClick: () => setSelectedImg(p2.comprobante),
              children: p2.comprobante.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src: p2.comprobante, width: "100%", height: "100%", type: "application/pdf", style: { pointerEvents: "none" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p2.comprobante, alt: "Comprobante", style: { width: "100%", height: "100%", objectFit: "contain" } })
            }
          )
        ] }, p2.id)) })
      ] }, monthName));
    })(),
    modalNew && /* @__PURE__ */ jsxRuntimeExports.jsx(PolicyModal, { agentOptions: ["DANIEL", "JULIO"], onSave, onClose: () => setModalNew(false), toast: toast2 }),
    modalEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(PolicyModal, { agentOptions: ["DANIEL", "JULIO"], policy: modalEdit, onSave, onClose: () => setModalEdit(null), toast: toast2 }),
    modalPaid && /* @__PURE__ */ jsxRuntimeExports.jsx(MarkPaidModal, { policy: modalPaid, onConfirm: (p2, n2, c, isLast) => {
      onMarkPaid(p2, n2, c, isLast);
      setModalPaid(null);
    }, onClose: () => setModalPaid(null), toast: toast2 }),
    deleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal", style: { maxWidth: 400 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", style: { textAlign: "center", padding: "30px 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 40, marginBottom: 16 }, children: "⚠️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { marginBottom: 10 }, children: "¿Eliminar Póliza?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", marginBottom: 24 }, children: [
        "Se borrará permanentemente la póliza de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteConfirm.nombre }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: () => setDeleteConfirm(null), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-danger", onClick: () => {
          onDelete(deleteConfirm.id);
          setDeleteConfirm(null);
        }, children: "Sí, eliminar" })
      ] })
    ] }) }) }),
    selectedImg && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageModal, { src: selectedImg, onClose: () => setSelectedImg(null) })
  ] });
}
function GmmPoliciesPage({ policies, onSave, onDelete, onMarkPaid, onWhatsApp, onEmail, onRenew, toast: toast2 }) {
  const [modalNew, setModalNew] = reactExports.useState(false);
  const [modalEdit, setModalEdit] = reactExports.useState(null);
  const [modalPaid, setModalPaid] = reactExports.useState(null);
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [selectedImg, setSelectedImg] = reactExports.useState(null);
  useEscapeKey(deleteConfirm ? () => setDeleteConfirm(null) : null);
  const [search, setSearch] = reactExports.useState("");
  const [filterAgente, setFilterAgente] = reactExports.useState("TODOS");
  const [filterEstatus, setFilterEstatus] = reactExports.useState("TODOS");
  const [filterForma, setFilterForma] = reactExports.useState("TODOS");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const stats = reactExports.useMemo(() => {
    const list = policies || [];
    const total = list.length;
    const pagados = list.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO").length;
    const pendientes = list.filter((p2) => p2.estatus === "PENDIENTE").length;
    const vencidos = list.filter((p2) => isExpiredEffective(p2)).length;
    const urgentes = list.filter((p2) => isUpcomingReminder(p2)).length;
    const renovaciones = list.filter((p2) => isUpcomingRenewal(p2)).length;
    const comprobantes = list.filter((p2) => p2.comprobante).length;
    return { total, pagados, pendientes, vencidos, urgentes, renovaciones, comprobantes };
  }, [policies]);
  const agentOpts = reactExports.useMemo(() => {
    const list = policies || [];
    return Array.from(new Set(list.flatMap((p2) => [p2.agente, p2.aseguradora]).filter(Boolean)));
  }, [policies]);
  const filtered = reactExports.useMemo(() => {
    const list = policies || [];
    return list.filter((p2) => {
      if (!p2) return false;
      const q2 = search.toLowerCase().trim();
      const matchName = (p2.nombre || "").toLowerCase().includes(q2);
      const matchPoliza = (p2.poliza || "").toLowerCase().includes(q2);
      const matchBien = (p2.bien || "").toLowerCase().includes(q2);
      if (q2 && !matchName && !matchPoliza && !matchBien) return false;
      if (filterAgente !== "TODOS" && p2.agente !== filterAgente && p2.aseguradora !== filterAgente) return false;
      if (filterEstatus !== "TODOS") {
        if (filterEstatus === "RENOVACIONES") {
          if (!isUpcomingRenewal(p2)) return false;
        } else if (filterEstatus === "URGENTES") {
          if (!isUpcomingReminder(p2)) return false;
        } else if (filterEstatus === "VENCIDO") {
          if (!isExpiredEffective(p2)) return false;
        } else if (filterEstatus === "COMPROBANTES") {
          if (!p2.comprobante) return false;
        } else if (filterEstatus === "PAGADO") {
          if (p2.estatus !== "PAGADO" && p2.estatus !== "LIQUIDADO") return false;
        } else {
          if (p2.estatus !== filterEstatus) return false;
        }
      }
      if (filterForma !== "TODOS" && p2.formaPago !== filterForma) return false;
      if (dateFrom && p2.fechaPago < dateFrom) return false;
      if (dateTo && p2.fechaPago > dateTo) return false;
      return true;
    });
  }, [policies, search, filterAgente, filterEstatus, filterForma, dateFrom, dateTo]);
  const clearFilters = () => {
    setSearch("");
    setFilterAgente("TODOS");
    setFilterEstatus("TODOS");
    setFilterForma("TODOS");
    setDateFrom("");
    setDateTo("");
  };
  const activeFilters = filterAgente !== "TODOS" || filterEstatus !== "TODOS" || filterForma !== "TODOS" || dateFrom || dateTo || search;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", style: { marginBottom: 20 }, children: [
      { label: "Total Pólizas GMM", value: stats.total, icon: "🏥", cls: "stat-blue", filter: "TODOS" },
      { label: "Pendientes", value: stats.pendientes, icon: "⏳", cls: "stat-yellow", filter: "PENDIENTE" },
      { label: "Próx. a Vencer (4d)", value: stats.urgentes, icon: "🔴", cls: "stat-orange", filter: "URGENTES" },
      { label: "Vencidos", value: stats.vencidos, icon: "🛑", cls: "stat-red", filter: "VENCIDO" },
      { label: "Renovaciones", value: stats.renovaciones, icon: "🔄", cls: "stat-purple", filter: "RENOVACIONES" },
      { label: "Pagados", value: stats.pagados, icon: "✅", cls: "stat-green", filter: "PAGADO" },
      { label: "Comprobantes", value: stats.comprobantes, icon: "🧾", cls: "stat-orange", filter: "COMPROBANTES" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `stat-card ${s.cls}`,
        style: {
          cursor: "pointer",
          opacity: filterEstatus === s.filter || filterEstatus === "TODOS" ? 1 : 0.5,
          border: filterEstatus === s.filter ? "2px solid currentColor" : "1px solid transparent",
          transition: "all 0.2s ease"
        },
        onClick: () => setFilterEstatus(s.filter),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-value", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-label", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginBottom: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { flexDirection: "column", alignItems: "flex-start", gap: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between w-full items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          "🏥 Pólizas Gastos Médicos Mayores (GMM) (",
          filtered.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "✕ Limpiar Filtros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-primary btn-sm", onClick: () => setModalNew(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Plus, {}),
            " Nueva Póliza GMM"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input input-search",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Buscar asegurado, póliza, plan..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Agente / Aseg." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 130 },
              value: filterAgente,
              onChange: (e) => setFilterAgente(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                agentOpts.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Estatus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterEstatus,
              onChange: (e) => setFilterEstatus(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "URGENTES", children: "PRÓX. A VENCER (4D)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VENCIDO", children: "VENCIDO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAGADO", children: "PAGADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELADO", children: "CANCELADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIQUIDADO", children: "LIQUIDADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RENOVACIONES", children: "RENOVACIONES (Próximas)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPROBANTES", children: "COMPROBANTES" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Forma de Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterForma,
              onChange: (e) => setFilterForma(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONTADO", children: "CONTADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MENSUAL", children: "MENSUAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRIMESTRAL", children: "TRIMESTRAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SEMESTRAL", children: "SEMESTRAL" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha desde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha hasta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value)
            }
          )
        ] })
      ] })
    ] }) }),
    filterEstatus !== "COMPROBANTES" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          filterEstatus === "TODOS" ? "Todas las Pólizas de GMM" : `Pólizas GMM (${filterEstatus})`,
          " ",
          "(",
          filtered.length,
          ")"
        ] }),
        activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "↩ Mostrar Todas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: filtered,
          onEdit: setModalEdit,
          onDelete: setDeleteConfirm,
          onMarkPaid: setModalPaid,
          onWhatsApp,
          onEmail,
          onRenew
        }
      ),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "12px 24px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          filtered.length,
          " registro(s) encontrado(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Total filtrado: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--accent-green)" }, children: formatMoney(filtered.reduce((s, p2) => s + Number(p2.monto || 0), 0)) })
        ] })
      ] })
    ] }),
    filterEstatus === "COMPROBANTES" && (() => {
      const withComprobantes = policies.filter((p2) => p2.comprobante);
      if (withComprobantes.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginTop: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 40, textAlign: "center", color: "var(--text-muted)" }, children: "🧾 Aún no hay comprobantes guardados en GMM." }) });
      const grouped = {};
      withComprobantes.forEach((p2) => {
        const dStr = p2.fechaUltimoPago || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const date = /* @__PURE__ */ new Date(dStr + "T12:00:00");
        const monthYear = date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
        const capitalized = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
        if (!grouped[capitalized]) grouped[capitalized] = [];
        grouped[capitalized].push(p2);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 24 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: 16, marginBottom: 16 }, children: "🧾 Comprobantes GMM por Mes" }),
        Object.entries(grouped).map(([monthName, groupPolicies]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginBottom: 20 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "var(--bg-secondary)", padding: "12px 20px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
              "📁 ",
              monthName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
              groupPolicies.length,
              " comprobante(s)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }, children: groupPolicies.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 12, background: "var(--bg-card)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 14, marginBottom: 4 }, children: p2.nombre }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  title: "Eliminar comprobante",
                  onClick: () => {
                    if (confirm("¿Eliminar este comprobante?")) onSave({ ...p2, comprobante: null });
                  },
                  style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 13, color: "#ef4444", flexShrink: 0 },
                  children: "🗑️"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Póliza:" }),
              " ",
              p2.poliza
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha límite:" }),
              " ",
              formatDate(p2.fechaPagoAnterior || p2.fechaPago)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--accent-green)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha pagado:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  defaultValue: p2.fechaUltimoPago || todayISO(),
                  onBlur: (e) => {
                    const val = e.target.value;
                    if (val && val !== p2.fechaUltimoPago) {
                      onSave({ ...p2, fechaUltimoPago: val });
                      if (toast2) toast2("Fecha de pago actualizada ✅", "success");
                    }
                  },
                  style: { fontSize: 11, padding: "2px 6px", border: "1px solid var(--accent-green)", borderRadius: 4, background: "var(--bg-input)", color: "var(--accent-green)", fontWeight: "bold" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: { width: "100%", height: 200, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", cursor: "pointer" },
                onClick: () => setSelectedImg(p2.comprobante),
                children: p2.comprobante.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src: p2.comprobante, width: "100%", height: "100%", type: "application/pdf", style: { pointerEvents: "none" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p2.comprobante, alt: `Comprobante GMM`, style: { width: "100%", height: "100%", objectFit: "contain" } })
              }
            )
          ] }, p2.id)) })
        ] }, monthName))
      ] });
    })(),
    modalNew && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        isGmm: true,
        onSave: (p2) => {
          onSave(p2);
          setModalNew(false);
        },
        onClose: () => setModalNew(false),
        toast: toast2,
        agentOptions: ["DANIEL", "OTRO"]
      }
    ),
    modalEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        isGmm: true,
        policy: modalEdit,
        onSave: (p2) => {
          onSave(p2);
          setModalEdit(null);
        },
        onClose: () => setModalEdit(null),
        toast: toast2,
        agentOptions: ["DANIEL", "OTRO"]
      }
    ),
    modalPaid && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MarkPaidModal,
      {
        policy: modalPaid,
        onConfirm: (p2, nextDate, comp, isLast) => {
          onMarkPaid(p2, nextDate, comp, isLast);
          setModalPaid(null);
        },
        onClose: () => setModalPaid(null)
      }
    ),
    deleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 420 }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🗑️ Confirmar Eliminación" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: () => setDeleteConfirm(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "¿Eliminar la póliza de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteConfirm.nombre }),
        " (Póliza GMM: ",
        deleteConfirm.poliza,
        ")?"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: () => setDeleteConfirm(null), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-danger", onClick: () => {
          onDelete(deleteConfirm.id);
          setDeleteConfirm(null);
        }, children: "Eliminar" })
      ] })
    ] }) }),
    selectedImg && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageModal, { src: selectedImg, onClose: () => setSelectedImg(null) })
  ] });
}
function AutosOtrasPoliciesPage({ policies, onSave, onDelete, onMarkPaid, onWhatsApp, onEmail, onRenew, toast: toast2 }) {
  const [modalNew, setModalNew] = reactExports.useState(false);
  const [modalEdit, setModalEdit] = reactExports.useState(null);
  const [modalPaid, setModalPaid] = reactExports.useState(null);
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [selectedImg, setSelectedImg] = reactExports.useState(null);
  useEscapeKey(deleteConfirm ? () => setDeleteConfirm(null) : null);
  const [search, setSearch] = reactExports.useState("");
  const [filterAgente, setFilterAgente] = reactExports.useState("TODOS");
  const [filterEstatus, setFilterEstatus] = reactExports.useState("TODOS");
  const [filterForma, setFilterForma] = reactExports.useState("TODOS");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const stats = reactExports.useMemo(() => {
    const list = policies || [];
    const total = list.length;
    const pagados = list.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO").length;
    const pendientes = list.filter((p2) => p2.estatus === "PENDIENTE").length;
    const vencidos = list.filter((p2) => isExpiredEffective(p2)).length;
    const urgentes = list.filter((p2) => isUpcomingReminder(p2)).length;
    const renovaciones = list.filter((p2) => isUpcomingRenewal(p2)).length;
    const comprobantes = list.filter((p2) => p2.comprobante).length;
    return { total, pagados, pendientes, vencidos, urgentes, renovaciones, comprobantes };
  }, [policies]);
  const agentOpts = reactExports.useMemo(() => {
    const list = policies || [];
    return Array.from(new Set(list.flatMap((p2) => [p2.agente, p2.aseguradora]).filter(Boolean)));
  }, [policies]);
  const filtered = reactExports.useMemo(() => {
    const list = policies || [];
    return list.filter((p2) => {
      if (!p2) return false;
      const q2 = search.toLowerCase().trim();
      const matchName = (p2.nombre || "").toLowerCase().includes(q2);
      const matchPoliza = (p2.poliza || "").toLowerCase().includes(q2);
      const matchBien = (p2.bien || "").toLowerCase().includes(q2);
      if (q2 && !matchName && !matchPoliza && !matchBien) return false;
      if (filterAgente !== "TODOS" && p2.agente !== filterAgente && p2.aseguradora !== filterAgente) return false;
      if (filterEstatus !== "TODOS") {
        if (filterEstatus === "RENOVACIONES") {
          if (!isUpcomingRenewal(p2)) return false;
        } else if (filterEstatus === "URGENTES") {
          if (!isUpcomingReminder(p2)) return false;
        } else if (filterEstatus === "VENCIDO") {
          if (!isExpiredEffective(p2)) return false;
        } else if (filterEstatus === "COMPROBANTES") {
          if (!p2.comprobante) return false;
        } else if (filterEstatus === "PAGADO") {
          if (p2.estatus !== "PAGADO" && p2.estatus !== "LIQUIDADO") return false;
        } else {
          if (p2.estatus !== filterEstatus) return false;
        }
      }
      if (filterForma !== "TODOS" && p2.formaPago !== filterForma) return false;
      if (dateFrom && p2.fechaPago < dateFrom) return false;
      if (dateTo && p2.fechaPago > dateTo) return false;
      return true;
    });
  }, [policies, search, filterAgente, filterEstatus, filterForma, dateFrom, dateTo]);
  const clearFilters = () => {
    setSearch("");
    setFilterAgente("TODOS");
    setFilterEstatus("TODOS");
    setFilterForma("TODOS");
    setDateFrom("");
    setDateTo("");
  };
  const activeFilters = filterAgente !== "TODOS" || filterEstatus !== "TODOS" || filterForma !== "TODOS" || dateFrom || dateTo || search;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", style: { marginBottom: 20 }, children: [
      { label: "Total Pólizas Autos", value: stats.total, icon: "🚗", cls: "stat-blue", filter: "TODOS" },
      { label: "Pendientes", value: stats.pendientes, icon: "⏳", cls: "stat-yellow", filter: "PENDIENTE" },
      { label: "Próx. a Vencer (4d)", value: stats.urgentes, icon: "🔴", cls: "stat-orange", filter: "URGENTES" },
      { label: "Vencidos", value: stats.vencidos, icon: "🛑", cls: "stat-red", filter: "VENCIDO" },
      { label: "Renovaciones", value: stats.renovaciones, icon: "🔄", cls: "stat-purple", filter: "RENOVACIONES" },
      { label: "Pagados", value: stats.pagados, icon: "✅", cls: "stat-green", filter: "PAGADO" },
      { label: "Comprobantes", value: stats.comprobantes, icon: "🧾", cls: "stat-orange", filter: "COMPROBANTES" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `stat-card ${s.cls}`,
        style: {
          cursor: "pointer",
          opacity: filterEstatus === s.filter || filterEstatus === "TODOS" ? 1 : 0.5,
          border: filterEstatus === s.filter ? "2px solid currentColor" : "1px solid transparent",
          transition: "all 0.2s ease"
        },
        onClick: () => setFilterEstatus(s.filter),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-value", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-label", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginBottom: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { flexDirection: "column", alignItems: "flex-start", gap: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between w-full items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          "🚗 Autos (Otras Aseguradoras) (",
          filtered.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "✕ Limpiar Filtros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-primary btn-sm", onClick: () => setModalNew(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Plus, {}),
            " Nueva Póliza Auto"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input input-search",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Buscar asegurado, póliza, vehículo..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Agente / Aseg." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 130 },
              value: filterAgente,
              onChange: (e) => setFilterAgente(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                agentOpts.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Estatus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterEstatus,
              onChange: (e) => setFilterEstatus(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "URGENTES", children: "PRÓX. A VENCER (4D)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VENCIDO", children: "VENCIDO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAGADO", children: "PAGADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELADO", children: "CANCELADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIQUIDADO", children: "LIQUIDADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RENOVACIONES", children: "RENOVACIONES (Próximas)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPROBANTES", children: "COMPROBANTES" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Forma de Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterForma,
              onChange: (e) => setFilterForma(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONTADO", children: "CONTADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MENSUAL", children: "MENSUAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRIMESTRAL", children: "TRIMESTRAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SEMESTRAL", children: "SEMESTRAL" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha desde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha hasta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value)
            }
          )
        ] })
      ] })
    ] }) }),
    filterEstatus !== "COMPROBANTES" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          filterEstatus === "TODOS" ? "Todas las Pólizas de Autos" : `Pólizas Autos (${filterEstatus})`,
          " ",
          "(",
          filtered.length,
          ")"
        ] }),
        activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "↩ Mostrar Todas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: filtered,
          onEdit: setModalEdit,
          onDelete: setDeleteConfirm,
          onMarkPaid: setModalPaid,
          onWhatsApp,
          onEmail,
          onRenew
        }
      ),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "12px 24px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          filtered.length,
          " registro(s) encontrado(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Total filtrado: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--accent-green)" }, children: formatMoney(filtered.reduce((s, p2) => s + Number(p2.monto || 0), 0)) })
        ] })
      ] })
    ] }),
    filterEstatus === "COMPROBANTES" && (() => {
      const withComprobantes = policies.filter((p2) => p2.comprobante);
      if (withComprobantes.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginTop: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 40, textAlign: "center", color: "var(--text-muted)" }, children: "🧾 Aún no hay comprobantes guardados en Autos." }) });
      const grouped = {};
      withComprobantes.forEach((p2) => {
        const dStr = p2.fechaUltimoPago || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
        const date = /* @__PURE__ */ new Date(dStr + "T12:00:00");
        const monthYear = date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
        const capitalized = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
        if (!grouped[capitalized]) grouped[capitalized] = [];
        grouped[capitalized].push(p2);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 24 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { fontSize: 16, marginBottom: 16 }, children: "🧾 Comprobantes Autos por Mes" }),
        Object.entries(grouped).map(([monthName, groupPolicies]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginBottom: 20 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "var(--bg-secondary)", padding: "12px 20px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
              "📁 ",
              monthName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
              groupPolicies.length,
              " comprobante(s)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }, children: groupPolicies.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 12, background: "var(--bg-card)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 14, marginBottom: 4 }, children: p2.nombre }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  title: "Eliminar comprobante",
                  onClick: () => {
                    if (confirm("¿Eliminar este comprobante?")) onSave({ ...p2, comprobante: null });
                  },
                  style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 13, color: "#ef4444", flexShrink: 0 },
                  children: "🗑️"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Póliza:" }),
              " ",
              p2.poliza
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha límite:" }),
              " ",
              formatDate(p2.fechaPagoAnterior || p2.fechaPago)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--accent-green)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha pagado:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  defaultValue: p2.fechaUltimoPago || todayISO(),
                  onBlur: (e) => {
                    const val = e.target.value;
                    if (val && val !== p2.fechaUltimoPago) {
                      onSave({ ...p2, fechaUltimoPago: val });
                      if (toast2) toast2("Fecha de pago actualizada ✅", "success");
                    }
                  },
                  style: { fontSize: 11, padding: "2px 6px", border: "1px solid var(--accent-green)", borderRadius: 4, background: "var(--bg-input)", color: "var(--accent-green)", fontWeight: "bold" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: { width: "100%", height: 200, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", cursor: "pointer" },
                onClick: () => setSelectedImg(p2.comprobante),
                children: p2.comprobante.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src: p2.comprobante, width: "100%", height: "100%", type: "application/pdf", style: { pointerEvents: "none" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p2.comprobante, alt: `Comprobante Auto`, style: { width: "100%", height: "100%", objectFit: "contain" } })
              }
            )
          ] }, p2.id)) })
        ] }, monthName))
      ] });
    })(),
    modalNew && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        isAutos: true,
        onSave: (p2) => {
          onSave(p2);
          setModalNew(false);
        },
        onClose: () => setModalNew(false),
        toast: toast2,
        agentOptions: ["DANIEL", "OTRO"]
      }
    ),
    modalEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        isAutos: true,
        policy: modalEdit,
        onSave: (p2) => {
          onSave(p2);
          setModalEdit(null);
        },
        onClose: () => setModalEdit(null),
        toast: toast2,
        agentOptions: ["DANIEL", "OTRO"]
      }
    ),
    modalPaid && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MarkPaidModal,
      {
        policy: modalPaid,
        onConfirm: (p2, nextDate, comp, isLast) => {
          onMarkPaid(p2, nextDate, comp, isLast);
          setModalPaid(null);
        },
        onClose: () => setModalPaid(null)
      }
    ),
    deleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 420 }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🗑️ Confirmar Eliminación" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: () => setDeleteConfirm(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "¿Eliminar la póliza de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteConfirm.nombre }),
        " (Póliza Auto: ",
        deleteConfirm.poliza,
        ")?"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: () => setDeleteConfirm(null), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-danger", onClick: () => {
          onDelete(deleteConfirm.id);
          setDeleteConfirm(null);
        }, children: "Eliminar" })
      ] })
    ] }) }),
    selectedImg && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageModal, { src: selectedImg, onClose: () => setSelectedImg(null) })
  ] });
}
function SectionPoliciesPage({
  title,
  icon = "📋",
  policies,
  onSave,
  onDelete,
  onMarkPaid,
  onWhatsApp,
  onEmail,
  onRenew,
  toast: toast2,
  isVida = false,
  isDanos = false,
  isHogar = false,
  isGmm = false,
  isAutos = false
}) {
  const [modalNew, setModalNew] = reactExports.useState(false);
  const [modalEdit, setModalEdit] = reactExports.useState(null);
  const [modalPaid, setModalPaid] = reactExports.useState(null);
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [selectedImg, setSelectedImg] = reactExports.useState(null);
  useEscapeKey(deleteConfirm ? () => setDeleteConfirm(null) : null);
  const [search, setSearch] = reactExports.useState("");
  const [filterAgente, setFilterAgente] = reactExports.useState("TODOS");
  const [filterEstatus, setFilterEstatus] = reactExports.useState("TODOS");
  const [filterForma, setFilterForma] = reactExports.useState("TODOS");
  const [dateFrom, setDateFrom] = reactExports.useState("");
  const [dateTo, setDateTo] = reactExports.useState("");
  const stats = reactExports.useMemo(() => {
    const list = policies || [];
    const total = list.length;
    const pagados = list.filter((p2) => p2.estatus === "PAGADO" || p2.estatus === "LIQUIDADO").length;
    const pendientes = list.filter((p2) => p2.estatus === "PENDIENTE").length;
    const vencidos = list.filter((p2) => isExpiredEffective(p2)).length;
    const urgentes = list.filter((p2) => isUpcomingReminder(p2)).length;
    const renovaciones = list.filter((p2) => isUpcomingRenewal(p2)).length;
    const comprobantes = list.filter((p2) => p2.comprobante).length;
    return { total, pagados, pendientes, vencidos, urgentes, renovaciones, comprobantes };
  }, [policies]);
  const agentOpts = reactExports.useMemo(() => {
    const list = policies || [];
    return Array.from(new Set(list.flatMap((p2) => [p2.agente, p2.aseguradora]).filter(Boolean)));
  }, [policies]);
  const filtered = reactExports.useMemo(() => {
    const list = policies || [];
    return list.filter((p2) => {
      if (!p2) return false;
      const q2 = search.toLowerCase().trim();
      const matchName = (p2.nombre || "").toLowerCase().includes(q2);
      const matchPoliza = (p2.poliza || "").toLowerCase().includes(q2);
      const matchBien = (p2.bien || "").toLowerCase().includes(q2);
      if (q2 && !matchName && !matchPoliza && !matchBien) return false;
      if (filterAgente !== "TODOS" && p2.agente !== filterAgente && p2.aseguradora !== filterAgente) return false;
      if (filterEstatus !== "TODOS") {
        if (filterEstatus === "RENOVACIONES") {
          if (!isUpcomingRenewal(p2)) return false;
        } else if (filterEstatus === "URGENTES") {
          if (!isUpcomingReminder(p2)) return false;
        } else if (filterEstatus === "VENCIDO") {
          if (!isExpiredEffective(p2)) return false;
        } else if (filterEstatus === "COMPROBANTES") {
          if (!p2.comprobante) return false;
        } else if (filterEstatus === "PAGADO") {
          if (p2.estatus !== "PAGADO" && p2.estatus !== "LIQUIDADO") return false;
        } else {
          if (p2.estatus !== filterEstatus) return false;
        }
      }
      if (filterForma !== "TODOS" && p2.formaPago !== filterForma) return false;
      if (dateFrom && p2.fechaPago < dateFrom) return false;
      if (dateTo && p2.fechaPago > dateTo) return false;
      return true;
    });
  }, [policies, search, filterAgente, filterEstatus, filterForma, dateFrom, dateTo]);
  const clearFilters = () => {
    setSearch("");
    setFilterAgente("TODOS");
    setFilterEstatus("TODOS");
    setFilterForma("TODOS");
    setDateFrom("");
    setDateTo("");
  };
  const activeFilters = filterAgente !== "TODOS" || filterEstatus !== "TODOS" || filterForma !== "TODOS" || dateFrom || dateTo || search;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stats-grid", style: { marginBottom: 20 }, children: [
      { label: `Total ${title}`, value: stats.total, icon, cls: "stat-blue", filter: "TODOS" },
      { label: "Pendientes", value: stats.pendientes, icon: "⏳", cls: "stat-yellow", filter: "PENDIENTE" },
      { label: "Próx. a Vencer (4d)", value: stats.urgentes, icon: "🔴", cls: "stat-orange", filter: "URGENTES" },
      { label: "Vencidos", value: stats.vencidos, icon: "🛑", cls: "stat-red", filter: "VENCIDO" },
      { label: "Renovaciones", value: stats.renovaciones, icon: "🔄", cls: "stat-purple", filter: "RENOVACIONES" },
      { label: "Pagados", value: stats.pagados, icon: "✅", cls: "stat-green", filter: "PAGADO" },
      { label: "Comprobantes", value: stats.comprobantes, icon: "🧾", cls: "stat-orange", filter: "COMPROBANTES" }
    ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: `stat-card ${s.cls}`,
        style: {
          cursor: "pointer",
          opacity: filterEstatus === s.filter || filterEstatus === "TODOS" ? 1 : 0.5,
          border: filterEstatus === s.filter ? "2px solid currentColor" : "1px solid transparent",
          transition: "all 0.2s ease"
        },
        onClick: () => setFilterEstatus(s.filter),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-icon", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-value", children: s.value }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "stat-card-label", children: s.label })
        ]
      },
      s.label
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginBottom: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { flexDirection: "column", alignItems: "flex-start", gap: 14 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between w-full items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          icon,
          " Pólizas de ",
          title,
          " (",
          filtered.length,
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "✕ Limpiar Filtros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-primary btn-sm", onClick: () => setModalNew(true), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Plus, {}),
            " Nueva Póliza (",
            title,
            ")"
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filters-bar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              className: "input input-search",
              value: search,
              onChange: (e) => setSearch(e.target.value),
              placeholder: "Buscar nombre, póliza..."
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Agente / Aseguradora" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 130 },
              value: filterAgente,
              onChange: (e) => setFilterAgente(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                agentOpts.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: opt, children: opt }, opt))
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Estatus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterEstatus,
              onChange: (e) => setFilterEstatus(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "URGENTES", children: "PRÓX. A VENCER (4D)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "VENCIDO", children: "VENCIDO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PAGADO", children: "PAGADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CANCELADO", children: "CANCELADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "LIQUIDADO", children: "LIQUIDADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "RENOVACIONES", children: "RENOVACIONES (Próximas)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "COMPROBANTES", children: "COMPROBANTES" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Forma de Pago" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "select",
            {
              className: "select",
              style: { minWidth: 140 },
              value: filterForma,
              onChange: (e) => setFilterForma(e.target.value),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todas" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CONTADO", children: "CONTADO" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MENSUAL", children: "MENSUAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TRIMESTRAL", children: "TRIMESTRAL" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "SEMESTRAL", children: "SEMESTRAL" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha desde" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateFrom,
              onChange: (e) => setDateFrom(e.target.value)
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "filter-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "filter-label", children: "Fecha hasta" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              className: "input",
              style: { width: 140 },
              value: dateTo,
              onChange: (e) => setDateTo(e.target.value)
            }
          )
        ] })
      ] })
    ] }) }),
    filterEstatus !== "COMPROBANTES" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          filterEstatus === "TODOS" ? `Todas las Pólizas de ${title}` : `Pólizas (${filterEstatus})`,
          " ",
          "(",
          filtered.length,
          ")"
        ] }),
        activeFilters && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: clearFilters, children: "↩ Mostrar Todas" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        PoliciesTable,
        {
          policies: filtered,
          onEdit: setModalEdit,
          onDelete: setDeleteConfirm,
          onMarkPaid: setModalPaid,
          onWhatsApp,
          onEmail,
          onRenew
        }
      ),
      filtered.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "12px 24px", borderTop: "1px solid var(--border)", fontSize: 12, color: "var(--text-muted)", display: "flex", justifyContent: "space-between" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          filtered.length,
          " registro(s) encontrado(s)"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "Total filtrado: ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--accent-green)" }, children: formatMoney(filtered.reduce((s, p2) => s + Number(p2.monto || 0), 0)) })
        ] })
      ] })
    ] }),
    filterEstatus === "COMPROBANTES" && (() => {
      const withComprobantes = (policies || []).filter((p2) => p2.comprobante);
      if (withComprobantes.length === 0) return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card", style: { marginTop: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 40, textAlign: "center", color: "var(--text-muted)" }, children: [
        "🧾 Aún no hay comprobantes guardados en ",
        title,
        "."
      ] }) });
      const grouped = {};
      withComprobantes.forEach((p2) => {
        const dStr = p2.fechaUltimoPago || todayISO();
        const date = /* @__PURE__ */ new Date(dStr + "T12:00:00");
        const monthYear = date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
        const capitalized = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
        if (!grouped[capitalized]) grouped[capitalized] = [];
        grouped[capitalized].push(p2);
      });
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginTop: 24 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { style: { fontSize: 16, marginBottom: 16 }, children: [
          "🧾 Comprobantes ",
          title,
          " por Mes"
        ] }),
        Object.entries(grouped).map(([monthName, groupPolicies]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginBottom: 20 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "var(--bg-secondary)", padding: "12px 20px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
              "📁 ",
              monthName
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
              groupPolicies.length,
              " comprobante(s)"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }, children: groupPolicies.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 12, background: "var(--bg-card)" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 14, marginBottom: 4 }, children: p2.nombre }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  title: "Eliminar comprobante",
                  onClick: () => {
                    if (confirm("¿Eliminar este comprobante?")) onSave({ ...p2, comprobante: null });
                  },
                  style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 13, color: "#ef4444", flexShrink: 0 },
                  children: "🗑️"
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Póliza:" }),
              " ",
              p2.poliza
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha límite:" }),
              " ",
              formatDate(p2.fechaPagoAnterior || p2.fechaPago)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--accent-green)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }, children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha pagado:" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "date",
                  defaultValue: p2.fechaUltimoPago || todayISO(),
                  onBlur: (e) => {
                    const val = e.target.value;
                    if (val && val !== p2.fechaUltimoPago) {
                      onSave({ ...p2, fechaUltimoPago: val });
                      if (toast2) toast2("Fecha de pago actualizada ✅", "success");
                    }
                  },
                  style: { fontSize: 11, padding: "2px 6px", border: "1px solid var(--accent-green)", borderRadius: 4, background: "var(--bg-input)", color: "var(--accent-green)", fontWeight: "bold" }
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                style: { width: "100%", height: 200, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", cursor: "pointer" },
                onClick: () => setSelectedImg(p2.comprobante),
                children: p2.comprobante.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src: p2.comprobante, width: "100%", height: "100%", type: "application/pdf", style: { pointerEvents: "none" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p2.comprobante, alt: `Comprobante`, style: { width: "100%", height: "100%", objectFit: "contain" } })
              }
            )
          ] }, p2.id)) })
        ] }, monthName))
      ] });
    })(),
    modalNew && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        policy: null,
        isVida,
        isDanos,
        isHogar,
        isGmm,
        isAutos,
        onSave: (p2) => {
          onSave(p2);
          setModalNew(false);
        },
        onClose: () => setModalNew(false),
        toast: toast2
      }
    ),
    modalEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        policy: modalEdit,
        isVida,
        isDanos,
        isHogar,
        isGmm,
        isAutos,
        onSave: (p2) => {
          onSave(p2);
          setModalEdit(null);
        },
        onClose: () => setModalEdit(null),
        toast: toast2
      }
    ),
    modalPaid && /* @__PURE__ */ jsxRuntimeExports.jsx(MarkPaidModal, { policy: modalPaid, onConfirm: (p2, nextDate, comp, isLast) => {
      onMarkPaid(p2, nextDate, comp, isLast);
      setModalPaid(null);
    }, onClose: () => setModalPaid(null), toast: toast2 }),
    deleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal", style: { maxWidth: 400 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", style: { textAlign: "center", padding: "30px 20px" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 40, marginBottom: 16 }, children: "⚠️" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { style: { marginBottom: 10 }, children: "¿Eliminar Póliza?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { color: "var(--text-secondary)", marginBottom: 24 }, children: [
        "Se borrará permanentemente la póliza de ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: deleteConfirm.nombre }),
        "."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", style: { justifyContent: "center" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: () => setDeleteConfirm(null), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-danger", onClick: () => {
          onDelete(deleteConfirm.id);
          setDeleteConfirm(null);
        }, children: "Sí, eliminar" })
      ] })
    ] }) }) }),
    selectedImg && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageModal, { src: selectedImg, onClose: () => setSelectedImg(null) })
  ] });
}
function TemplatesPage({ templates, onSave, toast: toast2 }) {
  const [waText, setWaText] = reactExports.useState(templates.whatsapp);
  const [emailAsunto, setEmailAsunto] = reactExports.useState(templates.email_asunto);
  const [emailCuerpo, setEmailCuerpo] = reactExports.useState(templates.email_cuerpo);
  const [activeTab, setActiveTab] = reactExports.useState("whatsapp");
  const [saved, setSaved] = reactExports.useState(false);
  const VARS = ["{nombre}", "{poliza}", "{bien}", "{monto}", "{formaPago}", "{agente}", "{fechaPago}", "{correo}", "{telefono}", "{estado_vencimiento}"];
  const insertVar = (v2, setter) => {
    setter((t2) => t2 + v2);
  };
  const handleSave = () => {
    onSave({ whatsapp: waText, email_asunto: emailAsunto, email_cuerpo: emailCuerpo });
    setSaved(true);
    toast2("Plantillas guardadas ✅", "success");
    setTimeout(() => setSaved(false), 2e3);
  };
  const handleReset = () => {
    setWaText(DEFAULT_TEMPLATES.whatsapp);
    setEmailAsunto(DEFAULT_TEMPLATES.email_asunto);
    setEmailCuerpo(DEFAULT_TEMPLATES.email_cuerpo);
    toast2("Plantillas restauradas al valor predeterminado", "info");
  };
  const previewPolicy = {
    nombre: "María Fernández",
    poliza: "POL-2024-001",
    bien: "Toyota Corolla 2022",
    monto: 1850,
    formaPago: "MENSUAL",
    agente: "DANIEL",
    fechaPago: todayISO(),
    correo: "maria@gmail.com",
    telefono: "5512345678"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "page-fade-enter", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", style: { flexWrap: "wrap" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "1 1 400px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginBottom: 16 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", children: "✏️ Editor de Plantillas" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: handleReset, children: "↩ Restaurar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: handleSave, children: saved ? "✅ Guardado" : "💾 Guardar" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "16px 20px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "tabs", style: { marginBottom: 16 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `tab-btn ${activeTab === "whatsapp" ? "active" : ""}`,
              onClick: () => setActiveTab("whatsapp"),
              children: "💬 WhatsApp"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: `tab-btn ${activeTab === "email" ? "active" : ""}`,
              onClick: () => setActiveTab("email"),
              children: "📧 Correo"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 10 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "form-label", style: { marginBottom: 6 }, children: "Variables disponibles (click para insertar):" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "var-list", children: VARS.map((v2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "var-chip",
              onClick: () => activeTab === "whatsapp" ? insertVar(v2, setWaText) : insertVar(v2, setEmailCuerpo),
              children: v2
            },
            v2
          )) })
        ] }),
        activeTab === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Mensaje WhatsApp" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "textarea",
            {
              className: "input",
              rows: 12,
              value: waText,
              onChange: (e) => setWaText(e.target.value),
              style: { fontFamily: "monospace", fontSize: 12 }
            }
          )
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", style: { marginBottom: 12 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Asunto del correo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                className: "input",
                value: emailAsunto,
                onChange: (e) => setEmailAsunto(e.target.value)
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Cuerpo del correo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "textarea",
              {
                className: "input",
                rows: 14,
                value: emailCuerpo,
                onChange: (e) => setEmailCuerpo(e.target.value),
                style: { fontFamily: "monospace", fontSize: 12 }
              }
            )
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "1 1 300px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", children: "👁️ Vista Previa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: "Con datos de ejemplo" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "16px 20px" }, children: activeTab === "whatsapp" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview", style: {
        background: "#0b2027",
        border: "1px solid #25d36640",
        borderRadius: "var(--radius-md)",
        color: "#e8f5e9",
        lineHeight: 1.8
      }, children: fillTemplate(waText, previewPolicy, true) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 12 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "form-label", style: { marginBottom: 6 }, children: "Asunto:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview", style: { padding: "8px 12px", fontSize: 13, fontWeight: 600 }, children: fillTemplate(emailAsunto, previewPolicy, false) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "template-preview", style: { lineHeight: 1.8 }, children: fillTemplate(emailCuerpo, previewPolicy, false) })
      ] }) })
    ] }) })
  ] }) });
}
function ImportExportPage({
  policies,
  caroPolicies,
  gmmPolicies,
  autosPolicies,
  vidaPolicies,
  danosPolicies,
  hogarPolicies,
  onImport,
  toast: toast2
}) {
  const fileRef = reactExports.useRef();
  const [importing, setImporting] = reactExports.useState(false);
  const [preview, setPreview] = reactExports.useState(null);
  const [dragOver, setDragOver] = reactExports.useState(false);
  const [fileInfo, setFileInfo] = reactExports.useState(null);
  const [targetCategory, setTargetCategory] = reactExports.useState("policies");
  const getTargetPolicies = () => {
    switch (targetCategory) {
      case "caroPolicies":
        return caroPolicies;
      case "gmmPolicies":
        return gmmPolicies;
      case "autosPolicies":
        return autosPolicies;
      case "vidaPolicies":
        return vidaPolicies;
      case "danosPolicies":
        return danosPolicies;
      case "hogarPolicies":
        return hogarPolicies;
      default:
        return policies;
    }
  };
  const handleExport = () => {
    if (!window.XLSX) {
      toast2("Librería XLSX no cargada", "error");
      return;
    }
    const XLSX = window.XLSX;
    const target = getTargetPolicies() || [];
    if (target.length === 0) {
      toast2("No hay pólizas para exportar en esta categoría", "error");
      return;
    }
    const rows = target.map((p2) => ({
      "Nombre": p2.nombre,
      "Póliza": p2.poliza,
      "Vehículo": p2.bien,
      "Forma de pago": p2.formaPago,
      "Clave": p2.agente,
      "Fecha de pago": p2.fechaPago,
      "Monto": p2.monto,
      "Estatus": p2.estatus,
      "Correo": p2.correo,
      "Teléfono": p2.telefono,
      "Notas": p2.notas || ""
    }));
    const ws = XLSX.utils.json_to_sheet(rows);
    const wb2 = XLSX.utils.book_new();
    ws["!cols"] = [{ wch: 30 }, { wch: 15 }, { wch: 35 }, { wch: 12 }, { wch: 10 }, { wch: 14 }, { wch: 12 }, { wch: 12 }, { wch: 30 }, { wch: 14 }, { wch: 40 }];
    XLSX.utils.book_append_sheet(wb2, ws, "Pólizas");
    const fecha = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    XLSX.writeFile(wb2, `SeguroControl_${fecha}.xlsx`);
    toast2("Archivo Excel exportado ✅", "success");
  };
  const parseDate = (val) => {
    if (!val && val !== 0) return todayISO();
    if (val instanceof Date) {
      return val.toISOString().split("T")[0];
    }
    if (typeof val === "number") {
      const d = new Date(Math.round((val - 25569) * 86400 * 1e3));
      if (!isNaN(d.getTime())) return d.toISOString().split("T")[0];
      return todayISO();
    }
    const s = String(val).trim();
    if (/^\d{4}-\d{2}-\d{2}/.test(s)) return s.slice(0, 10);
    let m2 = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{4})$/);
    if (m2) return `${m2[3]}-${m2[2].padStart(2, "0")}-${m2[1].padStart(2, "0")}`;
    m2 = s.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2})$/);
    if (m2) return `20${m2[3]}-${m2[1].padStart(2, "0")}-${m2[2].padStart(2, "0")}`;
    const dp = new Date(s);
    if (!isNaN(dp.getTime())) return dp.toISOString().split("T")[0];
    return todayISO();
  };
  const parseFormaPago = (val) => {
    if (!val) return "MENSUAL";
    const v2 = normalize(val);
    if (v2.includes("cont")) return "CONTADO";
    if (v2.includes("trim")) return "TRIMESTRAL";
    if (v2.includes("sem")) return "SEMESTRAL";
    if (v2.includes("men") || v2.includes("month")) return "MENSUAL";
    const up = String(val).toUpperCase().trim();
    if (["CONTADO", "MENSUAL", "TRIMESTRAL", "SEMESTRAL"].includes(up)) return up;
    return "MENSUAL";
  };
  const parseEstatus = (val) => {
    if (!val) return "PENDIENTE";
    const v2 = normalize(val);
    if (v2.includes("pagad") || v2 === "pago" || v2 === "pagado") return "PAGADO";
    if (v2.includes("venc")) return "VENCIDO";
    if (v2.includes("canc")) return "CANCELADO";
    if (v2.includes("liquid")) return "LIQUIDADO";
    if (v2.includes("pend")) return "PENDIENTE";
    const up = String(val).toUpperCase().trim();
    if (["PAGADO", "VENCIDO", "PENDIENTE", "CANCELADO", "LIQUIDADO"].includes(up)) return up;
    return "PENDIENTE";
  };
  const parseAgente = (val) => {
    if (!val) return "DANIEL";
    const v2 = normalize(val);
    if (v2.includes("mart") || v2.includes("mtn")) return "MARTIN";
    if (v2.includes("dani") || v2.includes("dan")) return "DANIEL";
    return String(val).toUpperCase().trim();
  };
  const processFile = (file) => {
    if (!file) return;
    setFileInfo({ name: file.name, size: (file.size / 1024).toFixed(1) + " KB" });
    setImporting(true);
    setPreview(null);
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const XLSX = window.XLSX;
        const wb2 = XLSX.read(evt.target.result, { type: "array", cellDates: true });
        const ws = wb2.Sheets[wb2.SheetNames[0]];
        const rawRows = XLSX.utils.sheet_to_json(ws, { defval: "" });
        if (rawRows.length === 0) {
          toast2("El archivo está vacío", "error");
          setImporting(false);
          return;
        }
        console.log("📊 Columnas detectadas:", Object.keys(rawRows[0]));
        console.log("📊 Primer registro raw:", rawRows[0]);
        const mapped = rawRows.map((r2) => {
          const nombre = findCol(r2, ["nombre", "asegurado", "cliente", "titular", "contratante", "name"]);
          const poliza = findCol(r2, ["poliza", "policy", "numero", "no poliza", "num"]);
          const bien = findCol(r2, ["vehiculo", "bien", "auto", "carro", "objeto", "descripcion", "inmueble", "unidad"]);
          const rawForma = findCol(r2, ["forma", "forma de pago", "periodicidad", "periodo", "frecuencia", "tipo pago"]);
          const rawAgent = findCol(r2, ["clave", "agente", "asesor", "vendedor", "ejecutivo", "clave agente", "agent"]);
          const rawFecha = findCol(r2, ["fecha", "fecha de pago", "vencimiento", "vigencia", "limite", "proximo", "pago"]);
          const rawMonto = findCol(r2, ["monto", "prima", "importe", "total", "precio", "costo", "valor", "amount"]);
          const rawEstat = findCol(r2, ["estatus", "status", "estado", "situacion"]);
          const correo = findCol(r2, ["correo", "email", "mail", "e-mail", "electronico"]);
          const telefono = findCol(r2, ["telefono", "celular", "movil", "whatsapp", "tel", "contacto", "phone", "cel"]);
          const notas = findCol(r2, ["nota", "notas", "observacion", "comentario", "remarks", "obs"]);
          return {
            id: generateId(),
            nombre: String(nombre || "").trim(),
            poliza: String(poliza || "").trim(),
            bien: String(bien || "").trim(),
            formaPago: parseFormaPago(rawForma),
            agente: parseAgente(rawAgent),
            fechaPago: parseDate(rawFecha),
            monto: parseMonto(rawMonto),
            estatus: parseEstatus(rawEstat),
            correo: String(correo || "").trim(),
            telefono: String(telefono || "").replace(/\D/g, "").slice(-10),
            notas: String(notas || "").trim()
          };
        }).filter((r2) => r2.nombre && r2.nombre.length > 1);
        if (mapped.length === 0) {
          toast2('No se encontraron registros. Verifica que tu Excel tenga una columna con "Nombre" o "Asegurado".', "error");
          console.log("⚠️ Claves disponibles:", Object.keys(rawRows[0]));
        } else {
          setPreview(mapped);
          toast2(`✅ ${mapped.length} pólizas detectadas desde "${file.name}"`, "success");
          console.log("✅ Primer registro mapeado:", mapped[0]);
        }
      } catch (err) {
        toast2("Error al leer el archivo: " + err.message, "error");
        console.error("Error importación:", err);
      }
      setImporting(false);
    };
    reader.readAsArrayBuffer(file);
  };
  const confirmImport = (mode) => {
    if (!preview) return;
    onImport(preview, mode, targetCategory);
    setPreview(null);
    toast2(`${preview.length} pólizas importadas en ${targetCategory} ✅`, "success");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", style: { flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "1 1 300px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", children: "📤 Exportar a Excel" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 24 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--text-secondary)", marginBottom: 20 }, children: "Descarga tus pólizas en formato .xlsx para respaldo o edición masiva." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 16 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }, children: "Categoría a Exportar:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "form-input", value: targetCategory, onChange: (e) => setTargetCategory(e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "policies", children: "Autos Qualitas (Daniel/Martín)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "caroPolicies", children: "Autos Qualitas (Caro)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "gmmPolicies", children: "Gastos Médicos Mayores (GMM)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "autosPolicies", children: "Autos (Otras Aseguradoras)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "vidaPolicies", children: "Vida" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "danosPolicies", children: "Daños" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hogarPolicies", children: "Hogar" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-success w-full", onClick: handleExport, children: "Descargar Excel" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { flex: "2 1 380px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", children: "📥 Importar Pólizas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: "Excel .xlsx / .xls / .csv" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 24 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { marginBottom: 20 }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { style: { display: "block", fontSize: 13, fontWeight: 600, color: "var(--text-secondary)", marginBottom: 6 }, children: "Categoría de Destino:" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "form-input", value: targetCategory, onChange: (e) => setTargetCategory(e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "policies", children: "Autos Qualitas (Daniel/Martín)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "caroPolicies", children: "Autos Qualitas (Caro)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "gmmPolicies", children: "Gastos Médicos Mayores (GMM)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "autosPolicies", children: "Autos (Otras Aseguradoras)" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "vidaPolicies", children: "Vida" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "danosPolicies", children: "Daños" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "hogarPolicies", children: "Hogar" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                border: `2px dashed ${dragOver ? "var(--accent-blue)" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: "40px 24px",
                textAlign: "center",
                cursor: importing ? "wait" : "pointer",
                transition: "all 0.2s ease",
                background: dragOver ? "rgba(59,130,246,0.08)" : "rgba(255,255,255,0.02)"
              },
              onClick: () => {
                var _a;
                return !importing && ((_a = fileRef.current) == null ? void 0 : _a.click());
              },
              onDragOver: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(true);
              },
              onDragEnter: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(true);
              },
              onDragLeave: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(false);
              },
              onDrop: (e) => {
                e.preventDefault();
                e.stopPropagation();
                setDragOver(false);
                if (e.dataTransfer.files[0]) processFile(e.dataTransfer.files[0]);
              },
              children: importing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "loading-spinner", style: { width: 40, height: 40, borderWidth: 3 } }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 14, fontWeight: 600 }, children: "Leyendo archivo…" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 12, color: "var(--text-muted)" }, children: "Detectando columnas y datos" })
              ] }) : dragOver ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 56 }, children: "📂" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 16, fontWeight: 700, color: "var(--accent-blue-light)" }, children: "¡Suelta el archivo aquí!" })
              ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }, children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 50, opacity: 0.45 }, children: "📊" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 15, fontWeight: 700 }, children: "Arrastra tu archivo Excel aquí" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontSize: 13, color: "var(--text-muted)" }, children: "o haz clic para buscarlo" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap", justifyContent: "center" }, children: [".xlsx", ".xls", ".csv"].map((f2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: {
                  padding: "3px 10px",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid var(--border)",
                  borderRadius: 6,
                  fontSize: 12,
                  color: "var(--text-secondary)"
                }, children: f2 }, f2)) })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              ref: fileRef,
              type: "file",
              accept: ".xlsx,.xls,.csv,.ods",
              style: { display: "none" },
              onChange: (e) => {
                processFile(e.target.files[0]);
                e.target.value = "";
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "btn btn-primary w-full",
              style: { marginTop: 14 },
              onClick: () => {
                var _a;
                return (_a = fileRef.current) == null ? void 0 : _a.click();
              },
              disabled: importing,
              children: "📂 Seleccionar Archivo desde mi PC"
            }
          ),
          fileInfo && !importing && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
            marginTop: 12,
            padding: "10px 14px",
            background: "rgba(59,130,246,0.08)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "var(--radius-md)",
            fontSize: 12,
            color: "var(--text-secondary)"
          }, children: [
            "📄 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-primary)" }, children: fileInfo.name }),
            " — ",
            fileInfo.size
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { marginTop: 14, padding: "10px 14px", background: "rgba(255,255,255,0.03)", borderRadius: "var(--radius-md)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 12, color: "var(--text-muted)", lineHeight: 1.8 }, children: [
            "💡 ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { style: { color: "var(--text-secondary)" }, children: "Detección automática" }),
            ' — el sistema reconoce cualquier nombre: "Nombre", "Asegurado", "Cliente", "Póliza", "No. Póliza", "Prima", "Monto", "Fecha", "Vencimiento", "Celular", "Tel"…'
          ] }) })
        ] })
      ] }) })
    ] }),
    preview && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          "👁️ Vista Previa — ",
          preview.length,
          " registros encontrados"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline btn-sm", onClick: () => setPreview(null), children: "✕ Cancelar" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-warning btn-sm", onClick: () => confirmImport("reemplazar"), children: "🔄 Reemplazar Todo" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => confirmImport("agregar"), children: "➕ Agregar a Existentes" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: "0 0 16px" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          PoliciesTable,
          {
            policies: preview.slice(0, 10),
            compact: false,
            onEdit: () => {
            },
            onDelete: () => {
            },
            onMarkPaid: () => {
            },
            onWhatsApp: () => {
            },
            onEmail: () => {
            }
          }
        ),
        preview.length > 10 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 12, color: "var(--text-muted)", padding: "8px 24px" }, children: [
          "… y ",
          preview.length - 10,
          " registro(s) más"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginTop: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", children: "📖 Guía de Columnas para Importación" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: 20 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Columna en Excel" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Valores aceptados" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Obligatorio" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: [
          ["Nombre del Asegurado", "Texto libre", "✅ Sí"],
          ["Póliza", "Texto libre (ej: POL-2024-001)", "✅ Sí"],
          ["Vehículo / Bien Asegurado", "Texto libre", "No"],
          ["Forma de Pago", "CONTADO, MENSUAL, TRIMESTRAL, SEMESTRAL", "No"],
          ["Clave de Agente", "DANIEL, MARTIN", "No"],
          ["Fecha de Pago", "YYYY-MM-DD (ej: 2026-07-31)", "No"],
          ["Monto ($)", "Número (ej: 1850)", "No"],
          ["Estatus", "PENDIENTE, PAGADO, VENCIDO, CANCELADO", "No"],
          ["Correo Electrónico", "email@dominio.com", "No"],
          ["Teléfono / WhatsApp", "10 dígitos sin lada", "No"]
        ].map(([col, vals, req]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { style: { fontSize: 12, color: "var(--accent-blue-light)" }, children: col }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 12, color: "var(--text-secondary)" }, children: vals }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 12 }, children: req })
        ] }, col)) })
      ] }) }) })
    ] })
  ] });
}
function ImageModal({ src, onClose }) {
  reactExports.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: (e) => e.target === e.currentTarget && onClose(), style: { zIndex: 2e3, padding: 40 }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { position: "relative", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: onClose, style: { position: "absolute", top: -10, right: -10, background: "var(--bg-card)", borderRadius: "50%", padding: 4, zIndex: 2010 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) }),
    src.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src, width: "100%", height: "100%", type: "application/pdf", style: { borderRadius: 8 } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: 8 } })
  ] }) });
}
function ComprobantesPage({ policies, onUpdatePolicy }) {
  const [selectedImg, setSelectedImg] = reactExports.useState(null);
  const withComprobantes = policies.filter((p2) => p2.comprobante);
  if (withComprobantes.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "empty-state", style: { paddingTop: 100 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "empty-state-icon", style: { fontSize: 48, marginBottom: 16 }, children: "🧾" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Sin comprobantes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Aún no se han adjuntado comprobantes de pago a ninguna póliza." })
    ] });
  }
  const grouped = {};
  withComprobantes.forEach((p2) => {
    const dStr = p2.fechaUltimoPago || (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const date = /* @__PURE__ */ new Date(dStr + "T12:00:00");
    const monthYear = date.toLocaleDateString("es-MX", { month: "long", year: "numeric" });
    const capitalized = monthYear.charAt(0).toUpperCase() + monthYear.slice(1);
    if (!grouped[capitalized]) grouped[capitalized] = [];
    grouped[capitalized].push(p2);
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    Object.entries(grouped).map(([monthName, groupPolicies]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { marginBottom: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
          "📁 ",
          monthName
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 12, color: "var(--text-muted)" }, children: [
          groupPolicies.length,
          " comprobante(s)"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { padding: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "20px" }, children: groupPolicies.map((p2) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { border: "1px solid var(--border)", borderRadius: "var(--radius-md)", padding: 12, background: "var(--bg-card)" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 14, marginBottom: 4 }, children: p2.nombre }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              title: "Eliminar comprobante",
              onClick: () => {
                if (confirm("¿Eliminar este comprobante?")) onUpdatePolicy({ ...p2, comprobante: null });
              },
              style: { background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)", borderRadius: 6, padding: "4px 8px", cursor: "pointer", fontSize: 13, color: "#ef4444", flexShrink: 0 },
              children: "🗑️"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 12, color: "var(--text-secondary)", marginBottom: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Póliza:" }),
          " ",
          p2.poliza
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)", marginBottom: 4 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha límite:" }),
          " ",
          formatDate(p2.fechaPagoAnterior || p2.fechaPago)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--accent-green)", marginBottom: 12, display: "flex", alignItems: "center", gap: 6 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Fecha pagado:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "input",
            {
              type: "date",
              defaultValue: p2.fechaUltimoPago || todayISO(),
              onBlur: (e) => {
                const val = e.target.value;
                if (val && val !== p2.fechaUltimoPago) {
                  onUpdatePolicy({ ...p2, fechaUltimoPago: val });
                }
              },
              style: { fontSize: 11, padding: "2px 6px", border: "1px solid var(--accent-green)", borderRadius: 4, background: "var(--bg-input)", color: "var(--accent-green)", fontWeight: "bold" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: { width: "100%", height: 200, borderRadius: "var(--radius-sm)", overflow: "hidden", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg-secondary)", cursor: "pointer" },
            onClick: () => setSelectedImg(p2.comprobante),
            children: p2.comprobante.startsWith("data:application/pdf") ? /* @__PURE__ */ jsxRuntimeExports.jsx("embed", { src: p2.comprobante, width: "100%", height: "100%", type: "application/pdf", style: { pointerEvents: "none" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p2.comprobante, alt: `Comprobante`, style: { width: "100%", height: "100%", objectFit: "contain" } })
          }
        )
      ] }, p2.id)) })
    ] }, monthName)),
    selectedImg && /* @__PURE__ */ jsxRuntimeExports.jsx(ImageModal, { src: selectedImg, onClose: () => setSelectedImg(null) })
  ] });
}
function CotizacionesPage({ cotizaciones, onSave, onUpdateEstatus }) {
  const [showForm, setShowForm] = reactExports.useState(false);
  const [filterEstatus, setFilterEstatus] = reactExports.useState("TODOS");
  const [filterAgente, setFilterAgente] = reactExports.useState("TODOS");
  const [search, setSearch] = reactExports.useState("");
  const [form, setForm] = reactExports.useState({
    fecha: todayISO(),
    unidad: "",
    agente: "MARTÍN",
    cp: "",
    estatus: "PENDIENTE",
    obs: ""
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.unidad || !form.cp) {
      alert("Unidad y CP son obligatorios");
      return;
    }
    onSave({ ...form, id: generateId() });
    setForm({ ...form, unidad: "", cp: "", obs: "", fecha: todayISO() });
    setShowForm(false);
  };
  const filtered = cotizaciones.filter((c) => {
    if (filterEstatus !== "TODOS" && c.estatus !== filterEstatus) return false;
    if (filterAgente !== "TODOS" && c.agente !== filterAgente) return false;
    if (search && !c.unidad.toLowerCase().includes(search.toLowerCase()) && !c.obs.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex", style: { justifyContent: "space-between", marginBottom: 20, gap: 10, flexWrap: "wrap" }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "search-wrapper", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Search, {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { className: "input input-search", placeholder: "Buscar unidad u obs...", value: search, onChange: (e) => setSearch(e.target.value) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "select", value: filterEstatus, onChange: (e) => setFilterEstatus(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos los estatus" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EMITIDA", children: "EMITIDA" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NO CONCRETADA", children: "NO CONCRETADA" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "select", value: filterAgente, onChange: (e) => setFilterAgente(e.target.value), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "TODOS", children: "Todos los agentes" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MARTÍN", children: "MARTÍN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DANIEL", children: "DANIEL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CARO", children: "CARO" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "btn btn-primary", onClick: () => setShowForm(true), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Plus, {}),
        " Nueva Cotización"
      ] })
    ] }),
    showForm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: () => setShowForm(false), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 500 }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "modal-title", children: "Registrar Cotización" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost", onClick: () => setShowForm(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: handleSubmit, className: "form-grid", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
            "Fecha ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "date", className: "input", value: form.fecha, onChange: (e) => setForm({ ...form, fecha: e.target.value }), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
            "Agente ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "select", value: form.agente, onChange: (e) => setForm({ ...form, agente: e.target.value }), required: true, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "MARTÍN", children: "MARTÍN" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "DANIEL", children: "DANIEL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CARO", children: "CARO" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
            "Datos de la Unidad ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "input", placeholder: "Ej. VW Jetta 2023", value: form.unidad, onChange: (e) => setForm({ ...form, unidad: e.target.value }), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "form-label", children: [
            "Código Postal ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "required", children: "*" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", className: "input", placeholder: "Ej. 11000", value: form.cp, onChange: (e) => setForm({ ...form, cp: e.target.value }), required: true })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Estatus inicial" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "select", value: form.estatus, onChange: (e) => setForm({ ...form, estatus: e.target.value }), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "PENDIENTE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EMITIDA", children: "EMITIDA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NO CONCRETADA", children: "NO CONCRETADA" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "form-group full-width", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "form-label", children: "Observaciones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input", rows: "3", placeholder: "Comentarios adicionales...", value: form.obs, onChange: (e) => setForm({ ...form, obs: e.target.value }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "form-group full-width", style: { marginTop: 10 }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "btn btn-primary", style: { width: "100%", justifyContent: "center" }, children: "Guardar Cotización" }) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
        "Listado de Cotizaciones (",
        filtered.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Fecha" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Agente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Unidad" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "C.P." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Observaciones" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Estatus" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: filtered.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", style: { textAlign: "center", padding: 30, color: "var(--text-muted)" }, children: "No se encontraron cotizaciones" }) }) : filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 12, color: "var(--text-muted)" }, children: formatDate(c.fecha) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentBadge, { agente: c.agente }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontWeight: 600, fontSize: 13 }, children: c.unidad }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 13 }, children: c.cp }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontSize: 12, maxWidth: 200, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, title: c.obs, children: c.obs || "—" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "select", style: { fontSize: 11, padding: "4px 8px" }, value: c.estatus, onChange: (e) => onUpdateEstatus(c.id, e.target.value), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "⏳ PENDIENTE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EMITIDA", children: "✅ EMITIDA" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "NO CONCRETADA", children: "❌ NO CONCRETADA" })
          ] }) })
        ] }, c.id)) })
      ] }) })
    ] })
  ] });
}
function SiniestrosPage({ siniestros, onImport, onUpdateEstatus }) {
  const [dragOverM, setDragOverM] = reactExports.useState(false);
  const [dragOverD, setDragOverD] = reactExports.useState(false);
  const [importing, setImporting] = reactExports.useState(null);
  const [msgModal, setMsgModal] = reactExports.useState(null);
  const fileRefM = reactExports.useRef();
  const fileRefD = reactExports.useRef();
  const handleFileDrop = (e, agente) => {
    e.preventDefault();
    if (agente === "MARTIN") setDragOverM(false);
    else setDragOverD(false);
    const file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    if (!file) return;
    setImporting(agente);
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const XLSX = window.XLSX;
        const wb2 = XLSX.read(evt.target.result, { type: "array" });
        const sheetName = wb2.SheetNames.find((s) => normalize(s).includes("siniestro")) || wb2.SheetNames[0];
        const ws = wb2.Sheets[sheetName];
        const rawRows = XLSX.utils.sheet_to_json(ws, { defval: "" });
        if (rawRows.length === 0) {
          alert("El archivo está vacío o no se encontraron datos.");
          setImporting(null);
          return;
        }
        const mapped = rawRows.map((r2) => {
          const poliza = findCol(r2, ["poliza", "policy", "numero", "no poliza"]);
          const asegurado = findCol(r2, ["nomaseg", "asegurado", "cliente", "nombre"]);
          const vehiculo = findCol(r2, ["vehiculo", "auto", "unidad", "bien", "descripcion"]);
          const tipo = findCol(r2, ["tiposin", "tipo", "siniestro"]);
          const cvestro = findCol(r2, ["cvestro", "no siniestro", "numero de siniestro", "siniestro", "reporte", "folio"]);
          const causa = findCol(r2, ["causa", "motivo", "descripcion"]);
          const costo = parseMonto(findCol(r2, ["sintotal", "costo", "total", "monto"]));
          const rvadm = parseMonto(findCol(r2, ["rvadm", "reserva adm"]));
          const rvart = parseMonto(findCol(r2, ["rvart", "reserva art"]));
          const rvarc = parseMonto(findCol(r2, ["rvarc", "reserva arc"]));
          const rvagm = parseMonto(findCol(r2, ["rvagm", "reserva agm"]));
          const rvaot = parseMonto(findCol(r2, ["rvaot", "reserva aot"]));
          const reservas = rvadm + rvart + rvarc + rvagm + rvaot;
          return {
            poliza: String(poliza || "").trim(),
            asegurado,
            vehiculo,
            tipo,
            causa,
            costo,
            reservas,
            agente,
            cvestro: String(cvestro || "").trim()
          };
        }).filter((r2) => r2.poliza && r2.poliza.length > 2);
        const grouped = {};
        mapped.forEach((s) => {
          if (!grouped[s.poliza]) {
            grouped[s.poliza] = s;
          } else {
            if (s.costo > grouped[s.poliza].costo) {
              grouped[s.poliza] = s;
            }
          }
        });
        const finalSiniestros = Object.values(grouped);
        if (finalSiniestros.length > 0) {
          onImport(finalSiniestros);
        } else {
          alert("No se detectaron pólizas/siniestros en el archivo.");
        }
      } catch (err) {
        console.error(err);
        alert("Error al leer el archivo Excel.");
      }
      setImporting(null);
    };
    reader.readAsArrayBuffer(file);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "page-fade-enter", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", style: { marginBottom: 20 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "rgba(20,184,166,0.05)", borderBottom: "1px solid rgba(20,184,166,0.2)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", style: { color: "#0f766e" }, children: "👥 Importar Reporte - MARTÍN" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: "Formato Vigente (POLIZAS / SINIESTROS)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 24 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                border: `2px dashed ${dragOverM ? "#0f766e" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: "30px 16px",
                textAlign: "center",
                cursor: "pointer",
                background: dragOverM ? "rgba(20,184,166,0.05)" : "rgba(255,255,255,0.02)"
              },
              onClick: () => {
                var _a;
                return importing !== "MARTIN" && ((_a = fileRefM.current) == null ? void 0 : _a.click());
              },
              onDragOver: (e) => {
                e.preventDefault();
                setDragOverM(true);
              },
              onDragLeave: () => setDragOverM(false),
              onDrop: (e) => handleFileDrop(e, "MARTIN"),
              children: importing === "MARTIN" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Procesando..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 32 }, children: "📂" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 600, marginTop: 8 }, children: "Sube el Excel de Martín aquí" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRefM, type: "file", style: { display: "none" }, accept: ".xlsx,.xls,.csv", onChange: (e) => {
            handleFileDrop(e, "MARTIN");
            e.target.value = "";
          } })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", style: { flex: 1 }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-header", style: { background: "rgba(99,102,241,0.05)", borderBottom: "1px solid rgba(99,102,241,0.2)" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "card-title", style: { color: "#3730a3" }, children: "👤 Importar Reporte - DANIEL" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 11, color: "var(--text-muted)" }, children: "Prima Devengada y Siniestralidad" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { padding: 24 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              style: {
                border: `2px dashed ${dragOverD ? "#3730a3" : "var(--border)"}`,
                borderRadius: "var(--radius-lg)",
                padding: "30px 16px",
                textAlign: "center",
                cursor: "pointer",
                background: dragOverD ? "rgba(99,102,241,0.05)" : "rgba(255,255,255,0.02)"
              },
              onClick: () => {
                var _a;
                return importing !== "DANIEL" && ((_a = fileRefD.current) == null ? void 0 : _a.click());
              },
              onDragOver: (e) => {
                e.preventDefault();
                setDragOverD(true);
              },
              onDragLeave: () => setDragOverD(false),
              onDrop: (e) => handleFileDrop(e, "DANIEL"),
              children: importing === "DANIEL" ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Procesando..." }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontSize: 32 }, children: "📈" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { fontWeight: 600, marginTop: 8 }, children: "Sube el Excel de Daniel aquí" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { ref: fileRefD, type: "file", style: { display: "none" }, accept: ".xlsx,.xls,.csv", onChange: (e) => {
            handleFileDrop(e, "DANIEL");
            e.target.value = "";
          } })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "card-header", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "card-title", children: [
        "🛡️ Seguimiento de Siniestros y Reservas (",
        siniestros.length,
        ")"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Agente" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Asegurado / Póliza" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Siniestro / Causa" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Costo Total" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Reservas" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Seguimiento" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: siniestros.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: "6", style: { textAlign: "center", padding: 40, color: "var(--text-muted)" }, children: "No hay siniestros importados" }) }) : siniestros.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(AgentBadge, { agente: s.agente }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontWeight: 600, fontSize: 13 }, children: s.asegurado || "—" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: [
              s.poliza,
              " • ",
              s.vehiculo || "—"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 13 }, children: s.tipo || "No especificado" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: 11, color: "var(--text-muted)" }, children: s.causa || "—" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontWeight: 600, color: "var(--accent-red)" }, children: formatMoney(s.costo) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { style: { fontWeight: 600, color: "var(--accent-yellow)" }, children: formatMoney(s.reservas) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", style: { alignItems: "center" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "select", style: { fontSize: 11, padding: "4px 8px" }, value: s.estatus, onChange: (e) => onUpdateEstatus(s.id, e.target.value), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "PENDIENTE", children: "🔴 PENDIENTE" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "EN PROCESO", children: "🟡 EN PROCESO" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "CERRADO", children: "🟢 CERRADO" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost btn-sm", onClick: () => setMsgModal(s), title: "Generar Solicitud", style: { padding: "4px 8px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Templates, {}) })
          ] }) })
        ] }, s.id)) })
      ] }) })
    ] }),
    msgModal && /* @__PURE__ */ jsxRuntimeExports.jsx(SiniestroMessageModal, { siniestro: msgModal, onClose: () => setMsgModal(null) })
  ] });
}
function SiniestroMessageModal({ siniestro, onClose }) {
  useEscapeKey(onClose);
  const [copied, setCopied] = reactExports.useState(null);
  const t1 = `Estimado ejecutivo, por medio de la presente solicito su apoyo con el estatus y/o generación de pase a corralón para la unidad del asegurado ${siniestro.asegurado || "[Nombre del Asegurado]"}, correspondiente a la Póliza ${siniestro.poliza || "[Número de Póliza]"}, Vehículo ${siniestro.vehiculo || "[Descripción del Vehículo / Serie]"}, con reporte de siniestro ${siniestro.cvestro || "[CVESTRO]"}. Quedo atento a sus comentarios. Saludos cordiales.`;
  const t2 = `Estimado ejecutivo, solicitamos su apoyo para verificar si es posible realizar una propuesta de pago de daños para un tercero afectado en el siniestro de la póliza ${siniestro.poliza || "[Número de Póliza]"} del asegurado ${siniestro.asegurado || "[Nombre del Asegurado]"}, buscando posteriormente que dicho tercero se asegure con nosotros. Agradezco de antemano su atención.`;
  const copy = (txt, id2) => {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(txt);
    } else {
      let textArea = document.createElement("textarea");
      textArea.value = txt;
      textArea.style.position = "fixed";
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand("copy");
      } catch (err) {
        console.error("Fallback: Oops, unable to copy", err);
      }
      document.body.removeChild(textArea);
    }
    setCopied(id2);
    setTimeout(() => setCopied(null), 2e3);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 650, width: "90%" }, onClick: (e) => e.stopPropagation(), children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "modal-title", children: "Generar Solicitud - Siniestros" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-ghost", onClick: onClose, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-body", style: { padding: 24, display: "flex", flexDirection: "column", gap: 24 }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", style: { justifyContent: "space-between", marginBottom: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600, color: "var(--accent-blue)" }, children: "1. Estatus / Pase a Corralón" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => copy(t1, 1), children: copied === 1 ? "✅ Copiado" : "📄 Copiar" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input", rows: 5, readOnly: true, value: t1, style: { fontSize: 13, lineHeight: 1.5, background: "rgba(255,255,255,0.02)", resize: "none" } })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", style: { justifyContent: "space-between", marginBottom: 8, alignItems: "center" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { fontWeight: 600, color: "var(--accent-blue)" }, children: "2. Pago a Terceros" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-primary btn-sm", onClick: () => copy(t2, 2), children: copied === 2 ? "✅ Copiado" : "📄 Copiar" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { className: "input", rows: 4, readOnly: true, value: t2, style: { fontSize: 13, lineHeight: 1.5, background: "rgba(255,255,255,0.02)", resize: "none" } })
      ] })
    ] })
  ] }) });
}
function App() {
  const [page, setPage] = reactExports.useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = reactExports.useState(false);
  const [defaultEstatus, setDefaultEstatus] = reactExports.useState("TODOS");
  const [policies, setPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_policies");
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      const hasDemo = parsed.some((p2) => p2.poliza === "POL-2024-001" || p2.poliza === "POL-2024-002");
      if (hasDemo) {
        localStorage.removeItem("sc_policies");
        return [];
      }
      return parsed;
    } catch {
      return [];
    }
  });
  const [siniestros, setSiniestros] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_siniestros");
      if (!stored) return [];
      const parsed = JSON.parse(stored);
      const filtered = parsed.filter((s) => s.poliza !== "POL-123" || s.asegurado !== "Ejemplo Asegurado");
      if (filtered.length !== parsed.length) {
        safeStorageSet("sc_siniestros", JSON.stringify(filtered));
      }
      return filtered;
    } catch {
      return [];
    }
  });
  const [cotizaciones, setCotizaciones] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_cotizaciones");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [templates, setTemplates] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_templates");
      return stored ? JSON.parse(stored) : DEFAULT_TEMPLATES;
    } catch {
      return DEFAULT_TEMPLATES;
    }
  });
  const [modalNew, setModalNew] = reactExports.useState(false);
  const [modalEdit, setModalEdit] = reactExports.useState(null);
  const [modalPaid, setModalPaid] = reactExports.useState(null);
  const [modalContact, setModalContact] = reactExports.useState(null);
  const [deleteConfirm, setDeleteConfirm] = reactExports.useState(null);
  const [dailyModalDate, setDailyModalDate] = reactExports.useState(null);
  const [showCalendarPicker, setShowCalendarPicker] = reactExports.useState(false);
  useEscapeKey(deleteConfirm ? () => setDeleteConfirm(null) : null);
  const { toasts, toast: toast2 } = useToast();
  const [caroPolicies, setCaroPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_caro_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [gmmPolicies, setGmmPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_gmm_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [autosPolicies, setAutosPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_autos_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [vidaPolicies, setVidaPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_vida_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [danosPolicies, setDanosPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_danos_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [hogarPolicies, setHogarPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_hogar_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [archivedPolicies, setArchivedPolicies] = reactExports.useState(() => {
    try {
      const stored = localStorage.getItem("sc_archived_policies");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });
  const [dbConnected, setDbConnected] = reactExports.useState(false);
  const FIREBASE_REST_URL = "https://pre-pro-consultores-gestion-default-rtdb.firebaseio.com/app_data";
  (function cleanOldComprobantes() {
    const keys = [
      "sc_policies",
      "sc_caro_policies",
      "sc_gmm_policies",
      "sc_autos_policies",
      "sc_vida_policies",
      "sc_danos_policies",
      "sc_hogar_policies",
      "sc_archived_policies"
    ];
    keys.forEach((key) => {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) return;
        const list = JSON.parse(raw);
        if (!Array.isArray(list)) return;
        const cleaned = list.map((p2) => {
          if (!p2.comprobante) return p2;
          const { comprobante, ...rest } = p2;
          return rest;
        });
        localStorage.setItem(key, JSON.stringify(cleaned));
      } catch (e) {
      }
    });
  })();
  const parseList = (node) => {
    if (!node) return [];
    if (Array.isArray(node)) return node.filter(Boolean);
    if (typeof node === "object") return Object.values(node).filter(Boolean);
    return [];
  };
  const applyCloudData = reactExports.useCallback((data) => {
    if (!data) return;
    if (data.error || !data.policies && !data.caroPolicies && !data.gmmPolicies) {
      console.warn("Payload inválido de la nube, ignorando:", data);
      return;
    }
    setDbConnected(true);
    const pList = parseList(data.policies);
    setPolicies(pList);
    safeStorageSet("sc_policies", JSON.stringify(pList));
    const cList = parseList(data.caroPolicies);
    setCaroPolicies(cList);
    safeStorageSet("sc_caro_policies", JSON.stringify(cList));
    const gList = parseList(data.gmmPolicies);
    setGmmPolicies(gList);
    safeStorageSet("sc_gmm_policies", JSON.stringify(gList));
    const aList = parseList(data.autosPolicies);
    setAutosPolicies(aList);
    safeStorageSet("sc_autos_policies", JSON.stringify(aList));
    const vList = parseList(data.vidaPolicies);
    setVidaPolicies(vList);
    safeStorageSet("sc_vida_policies", JSON.stringify(vList));
    const dList = parseList(data.danosPolicies);
    setDanosPolicies(dList);
    safeStorageSet("sc_danos_policies", JSON.stringify(dList));
    const hList = parseList(data.hogarPolicies);
    setHogarPolicies(hList);
    safeStorageSet("sc_hogar_policies", JSON.stringify(hList));
    const sList = parseList(data.siniestros);
    setSiniestros(sList);
    safeStorageSet("sc_siniestros", JSON.stringify(sList));
    const cotList = parseList(data.cotizaciones);
    setCotizaciones(cotList);
    safeStorageSet("sc_cotizaciones", JSON.stringify(cotList));
    if (data.archivedPolicies) {
      const archList = parseList(data.archivedPolicies);
      setArchivedPolicies(archList);
      safeStorageSet("sc_archived_policies", JSON.stringify(archList));
    }
    if (data.templates) {
      setTemplates(data.templates);
      safeStorageSet("sc_templates", JSON.stringify(data.templates));
    }
  }, []);
  const syncCategoryToCloud = reactExports.useCallback((category, list) => {
    const cleanList = list || [];
    if (window.db) {
      try {
        window.db.ref(`app_data/${category}`).set(cleanList);
      } catch (e) {
      }
    }
    fetch(`${FIREBASE_REST_URL}/${category}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(cleanList)
    }).catch((err) => console.error("Cloud REST PUT error:", err));
  }, []);
  reactExports.useEffect(() => {
    fetch(`${FIREBASE_REST_URL}.json`).then((res) => res.json()).then((data) => {
      if (data) applyCloudData(data);
    }).catch((err) => console.error("Cloud REST GET error:", err));
    if (!window.db) return;
    const connectedRef = window.db.ref(".info/connected");
    const onConnected = (snap) => {
      if (snap.val() === true) setDbConnected(true);
    };
    connectedRef.on("value", onConnected);
    const dbRef = window.db.ref("app_data");
    const handleValue = (snapshot) => {
      const data = snapshot.val();
      if (data) applyCloudData(data);
    };
    dbRef.on("value", handleValue);
    return () => {
      connectedRef.off("value", onConnected);
      dbRef.off("value", handleValue);
    };
  }, [applyCloudData]);
  const syncNowFromCloud = reactExports.useCallback(() => {
    fetch(`${FIREBASE_REST_URL}.json`).then((res) => res.json()).then((data) => {
      if (data) {
        applyCloudData(data);
        toast2("¡Sincronizado con la Nube con éxito! ☁️✅", "success");
      } else {
        toast2("Nube vacía o sin respuesta", "warning");
      }
    }).catch((err) => {
      toast2("Error al descargar de la nube: " + err.message, "error");
    });
  }, [applyCloudData, toast2]);
  const uploadLocalToCloud = reactExports.useCallback(() => {
    const localPols = JSON.parse(localStorage.getItem("sc_policies") || "[]");
    const localCaro = JSON.parse(localStorage.getItem("sc_caro_policies") || "[]");
    const localGmm = JSON.parse(localStorage.getItem("sc_gmm_policies") || "[]");
    const localAutos = JSON.parse(localStorage.getItem("sc_autos_policies") || "[]");
    const localVida = JSON.parse(localStorage.getItem("sc_vida_policies") || "[]");
    const localDanos = JSON.parse(localStorage.getItem("sc_danos_policies") || "[]");
    const localHogar = JSON.parse(localStorage.getItem("sc_hogar_policies") || "[]");
    const localSini = JSON.parse(localStorage.getItem("sc_siniestros") || "[]");
    const localCoti = JSON.parse(localStorage.getItem("sc_cotizaciones") || "[]");
    const localTpls = JSON.parse(localStorage.getItem("sc_templates") || "null") || DEFAULT_TEMPLATES;
    const localArch = JSON.parse(localStorage.getItem("sc_archived_policies") || "[]");
    const payload = {
      policies: localPols,
      caroPolicies: localCaro,
      gmmPolicies: localGmm,
      autosPolicies: localAutos,
      vidaPolicies: localVida,
      danosPolicies: localDanos,
      hogarPolicies: localHogar,
      siniestros: localSini,
      cotizaciones: localCoti,
      archivedPolicies: localArch,
      templates: localTpls
    };
    if (window.db) {
      try {
        window.db.ref("app_data").set(payload);
      } catch (e) {
      }
    }
    fetch(`${FIREBASE_REST_URL}.json`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    }).then(() => {
      toast2("¡Datos subidos a la Nube con éxito! ☁️✅", "success");
    }).catch((err) => {
      toast2("Error al subir a la nube: " + err.message, "error");
    });
  }, [toast2]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_policies", JSON.stringify(policies));
  }, [policies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_caro_policies", JSON.stringify(caroPolicies));
  }, [caroPolicies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_gmm_policies", JSON.stringify(gmmPolicies));
  }, [gmmPolicies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_autos_policies", JSON.stringify(autosPolicies));
  }, [autosPolicies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_vida_policies", JSON.stringify(vidaPolicies));
  }, [vidaPolicies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_danos_policies", JSON.stringify(danosPolicies));
  }, [danosPolicies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_hogar_policies", JSON.stringify(hogarPolicies));
  }, [hogarPolicies]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_siniestros", JSON.stringify(siniestros));
  }, [siniestros]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_cotizaciones", JSON.stringify(cotizaciones));
  }, [cotizaciones]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_templates", JSON.stringify(templates));
  }, [templates]);
  reactExports.useEffect(() => {
    safeStorageSet("sc_archived_policies", JSON.stringify(archivedPolicies));
  }, [archivedPolicies]);
  reactExports.useMemo(() => policies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isUpcomingReminder(p2) || isExpiredEffective(p2);
  }).length, [policies]);
  const caroUrgentCount = reactExports.useMemo(() => caroPolicies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isUpcomingReminder(p2) || isExpiredEffective(p2);
  }).length, [caroPolicies]);
  const gmmUrgentCount = reactExports.useMemo(() => gmmPolicies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isUpcomingReminder(p2) || isExpiredEffective(p2);
  }).length, [gmmPolicies]);
  const autosUrgentCount = reactExports.useMemo(() => autosPolicies.filter((p2) => {
    if (p2.estatus === "PAGADO" || p2.estatus === "CANCELADO" || p2.estatus === "LIQUIDADO") return false;
    return isUpcomingReminder(p2) || isExpiredEffective(p2);
  }).length, [autosPolicies]);
  const linkArchivedPolicy = reactExports.useCallback((polizaAnteriorNum, newPolizaNum) => {
    if (!polizaAnteriorNum || !newPolizaNum) return;
    setArchivedPolicies((prev) => {
      let changed = false;
      const next = prev.map((arch) => {
        if (String(arch.poliza).trim() === String(polizaAnteriorNum).trim() && arch.polizaRenovadaNum !== newPolizaNum) {
          changed = true;
          return { ...arch, polizaRenovadaNum: newPolizaNum };
        }
        return arch;
      });
      if (changed) {
        safeStorageSet("sc_archived_policies", JSON.stringify(next));
        setTimeout(() => syncCategoryToCloud("archivedPolicies", next), 0);
      }
      return changed ? next : prev;
    });
  }, [syncCategoryToCloud]);
  const savePolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("policies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const purgePolicyFromAllCategories = reactExports.useCallback((id2) => {
    setPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("policies", next), 0);
      return next;
    });
    setCaroPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_caro_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("caroPolicies", next), 0);
      return next;
    });
    setGmmPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_gmm_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("gmmPolicies", next), 0);
      return next;
    });
    setAutosPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_autos_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("autosPolicies", next), 0);
      return next;
    });
    setVidaPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_vida_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("vidaPolicies", next), 0);
      return next;
    });
    setDanosPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_danos_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("danosPolicies", next), 0);
      return next;
    });
    setHogarPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_hogar_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("hogarPolicies", next), 0);
      return next;
    });
    setDeleteConfirm(null);
  }, [syncCategoryToCloud]);
  const deletePolicy = reactExports.useCallback((id2) => {
    purgePolicyFromAllCategories(id2);
    toast2("Póliza eliminada", "warning");
  }, [purgePolicyFromAllCategories, toast2]);
  const markPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("policies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const importToCategory = reactExports.useCallback((data, mode, categoryKey) => {
    let setter, storageKey;
    switch (categoryKey) {
      case "caroPolicies":
        setter = setCaroPolicies;
        storageKey = "sc_caro_policies";
        break;
      case "gmmPolicies":
        setter = setGmmPolicies;
        storageKey = "sc_gmm_policies";
        break;
      case "autosPolicies":
        setter = setAutosPolicies;
        storageKey = "sc_autos_policies";
        break;
      case "vidaPolicies":
        setter = setVidaPolicies;
        storageKey = "sc_vida_policies";
        break;
      case "danosPolicies":
        setter = setDanosPolicies;
        storageKey = "sc_danos_policies";
        break;
      case "hogarPolicies":
        setter = setHogarPolicies;
        storageKey = "sc_hogar_policies";
        break;
      default:
        setter = setPolicies;
        storageKey = "sc_policies";
        categoryKey = "policies";
        break;
    }
    setter((prev) => {
      const next = mode === "reemplazar" ? data : [...prev, ...data];
      safeStorageSet(storageKey, JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud(categoryKey, next), 0);
      return next;
    });
  }, []);
  const importSiniestros = reactExports.useCallback((incomingData) => {
    setSiniestros((prev) => {
      const next = [...prev];
      let added = 0;
      let updated = 0;
      incomingData.forEach((inc) => {
        const existingIdx = next.findIndex((s) => s.poliza === inc.poliza);
        if (existingIdx >= 0) {
          const existing = next[existingIdx];
          next[existingIdx] = {
            ...inc,
            id: existing.id,
            estatus: existing.estatus || "PENDIENTE"
          };
          updated++;
        } else {
          next.push({
            ...inc,
            id: generateId(),
            estatus: "PENDIENTE"
          });
          added++;
        }
      });
      safeStorageSet("sc_siniestros", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("siniestros", next), 0);
      toast2(`Importación completada: ${added} nuevos, ${updated} actualizados.`, "success");
      return next;
    });
  }, [toast2]);
  const saveCaroPolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setCaroPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_caro_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("caroPolicies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const deleteCaroPolicy = reactExports.useCallback((id2) => {
    purgePolicyFromAllCategories(id2);
    toast2("Póliza eliminada", "warning");
  }, [purgePolicyFromAllCategories, toast2]);
  const markCaroPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setCaroPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_caro_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("caroPolicies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const saveGmmPolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setGmmPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_gmm_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("gmmPolicies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const deleteGmmPolicy = reactExports.useCallback((id2) => {
    purgePolicyFromAllCategories(id2);
    toast2("Póliza GMM eliminada", "warning");
  }, [purgePolicyFromAllCategories, toast2]);
  const markGmmPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setGmmPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_gmm_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("gmmPolicies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const saveAutosPolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setAutosPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_autos_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("autosPolicies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const deleteAutosPolicy = reactExports.useCallback((id2) => {
    purgePolicyFromAllCategories(id2);
    toast2("Póliza de Autos eliminada", "warning");
  }, [purgePolicyFromAllCategories, toast2]);
  const markAutosPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setAutosPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_autos_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("autosPolicies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const saveVidaPolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setVidaPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_vida_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("vidaPolicies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const deleteVidaPolicy = reactExports.useCallback((id2) => {
    purgePolicyFromAllCategories(id2);
    toast2("Póliza de Vida eliminada", "warning");
  }, [purgePolicyFromAllCategories, toast2]);
  const markVidaPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setVidaPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_vida_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("vidaPolicies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const saveDanosPolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setDanosPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_danos_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("danosPolicies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const deleteDanosPolicy = reactExports.useCallback((id2) => {
    purgePolicyFromAllCategories(id2);
    toast2("Póliza de Daños eliminada", "warning");
  }, [purgePolicyFromAllCategories, toast2]);
  const markDanosPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setDanosPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_danos_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("danosPolicies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const saveHogarPolicy = reactExports.useCallback((p2) => {
    const policyToSave = { ...p2, id: p2.id || generateId() };
    setHogarPolicies((prev) => {
      const exists = prev.find((x2) => x2.id === policyToSave.id);
      const next = exists ? prev.map((x2) => x2.id === policyToSave.id ? policyToSave : x2) : [...prev, policyToSave];
      safeStorageSet("sc_hogar_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("hogarPolicies", next), 0);
      return next;
    });
    if (policyToSave.polizaAnteriorNum) {
      linkArchivedPolicy(policyToSave.polizaAnteriorNum, policyToSave.poliza);
    }
  }, [linkArchivedPolicy]);
  const deleteHogarPolicy = reactExports.useCallback((id2) => {
    setHogarPolicies((prev) => {
      const next = prev.filter((p2) => p2.id !== id2);
      safeStorageSet("sc_hogar_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("hogarPolicies", next), 0);
      return next;
    });
    toast2("Póliza de Hogar eliminada", "warning");
    setDeleteConfirm(null);
  }, [toast2]);
  const markHogarPaid = reactExports.useCallback((policy, nextDate, comprobante, isLastPayment = false, nextMonto) => {
    setHogarPolicies((prev) => {
      const next = prev.map((p2) => {
        if (p2.id !== policy.id) return p2;
        const basePolicy = {
          ...p2,
          comprobante: comprobante || p2.comprobante,
          fechaPagoAnterior: p2.fechaPago,
          fechaUltimoPago: todayISO(),
          periodoGracia: "",
          notas: cleanRecordatorioNota(p2.notas),
          ...nextMonto !== void 0 && nextMonto !== "" ? { montoSubsecuente: Number(nextMonto) } : {}
        };
        if (policy.formaPago === "CONTADO" || isLastPayment) {
          return { ...basePolicy, estatus: "LIQUIDADO", fechaPago: p2.fechaPago };
        }
        return { ...basePolicy, estatus: "PENDIENTE", fechaPago: nextDate || p2.fechaPago };
      });
      safeStorageSet("sc_hogar_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("hogarPolicies", next), 0);
      return next;
    });
    toast2("Pago confirmado", "success");
  }, [toast2]);
  const updateSiniestroEstatus = reactExports.useCallback((id2, estatus) => {
    setSiniestros((prev) => {
      const next = prev.map((s) => s.id === id2 ? { ...s, estatus } : s);
      safeStorageSet("sc_siniestros", JSON.stringify(next));
      if (window.db) window.db.ref("app_data/siniestros").set(next);
      return next;
    });
  }, []);
  const saveCotizacion = reactExports.useCallback((coti) => {
    setCotizaciones((prev) => {
      const next = [coti, ...prev];
      safeStorageSet("sc_cotizaciones", JSON.stringify(next));
      if (window.db) window.db.ref("app_data/cotizaciones").set(next);
      return next;
    });
    toast2("Cotización registrada", "success");
  }, [toast2]);
  const updateCotizacionEstatus = reactExports.useCallback((id2, estatus) => {
    setCotizaciones((prev) => {
      const next = prev.map((c) => c.id === id2 ? { ...c, estatus } : c);
      safeStorageSet("sc_cotizaciones", JSON.stringify(next));
      if (window.db) window.db.ref("app_data/cotizaciones").set(next);
      return next;
    });
  }, []);
  const vidaUrgentCount = reactExports.useMemo(() => vidaPolicies.filter((p2) => isUpcomingReminder(p2) || isExpiredEffective(p2)).length, [vidaPolicies]);
  const danosUrgentCount = reactExports.useMemo(() => danosPolicies.filter((p2) => isUpcomingReminder(p2) || isExpiredEffective(p2)).length, [danosPolicies]);
  const hogarUrgentCount = reactExports.useMemo(() => hogarPolicies.filter((p2) => isUpcomingReminder(p2) || isExpiredEffective(p2)).length, [hogarPolicies]);
  const [summaryModalPolicy, setSummaryModalPolicy] = reactExports.useState(null);
  const openSummaryByPolizaNum = reactExports.useCallback((polizaNum) => {
    if (!polizaNum) return;
    const clean = String(polizaNum).trim();
    const foundActive = allPolicies.find((p2) => String(p2.poliza).trim() === clean);
    if (foundActive) {
      setSummaryModalPolicy(foundActive);
      return;
    }
    const foundArchived = archivedPolicies.find((p2) => String(p2.poliza).trim() === clean);
    if (foundArchived) {
      setSummaryModalPolicy(foundArchived);
      return;
    }
  }, [allPolicies, archivedPolicies]);
  const [renewConfirm, setRenewConfirm] = reactExports.useState(null);
  const doRenewPolicy = reactExports.useCallback((oldPolicy) => {
    const today = todayISO();
    const archived = {
      ...oldPolicy,
      _archived: true,
      estatus: "RENOVADA",
      fechaArchivado: today,
      polizaRenovadaNum: ""
      // se llenará cuando se guarde la nueva
    };
    setArchivedPolicies((prev) => {
      const next = [...prev, archived];
      safeStorageSet("sc_archived_policies", JSON.stringify(next));
      setTimeout(() => syncCategoryToCloud("archivedPolicies", next), 0);
      return next;
    });
    purgePolicyFromAllCategories(oldPolicy.id);
    toast2(`Póliza ${oldPolicy.poliza} archivada como RENOVADA 📦`, "success");
    const prefilled = {
      nombre: oldPolicy.nombre,
      correo: oldPolicy.correo || "",
      telefono: oldPolicy.telefono || "",
      telefono2: oldPolicy.telefono2 || "",
      lada: oldPolicy.lada || "mx",
      lada2: oldPolicy.lada2 || "mx",
      agente: oldPolicy.agente || "",
      agenteCustom: "",
      aseguradora: oldPolicy.aseguradora || "",
      bien: oldPolicy.bien || "",
      formaPago: oldPolicy.formaPago || "CONTADO",
      perteneceA: oldPolicy.perteneceA || "",
      polizaAnteriorNum: oldPolicy.poliza,
      // Campos en blanco para que llene
      poliza: "",
      monto: "",
      montoSubsecuente: "",
      fechaPago: "",
      fechaInicioVigencia: today,
      periodoGracia: "",
      estatus: "PENDIENTE",
      notas: "",
      comprobante: null,
      // Flags de ramo
      _isCaro: oldPolicy._isCaro,
      _isGmm: oldPolicy._isGmm,
      _isAutos: oldPolicy._isAutos,
      _isVida: oldPolicy._isVida,
      _isDanos: oldPolicy._isDanos,
      _isHogar: oldPolicy._isHogar
    };
    setModalEdit(prefilled);
  }, [purgePolicyFromAllCategories, syncCategoryToCloud, toast2]);
  const onRenew = reactExports.useCallback((policy) => setRenewConfirm(policy), []);
  const navItems = [
    { id: "dashboard", label: "Panel de Control", Icon: Icons.Dashboard },
    { id: "policies", label: "Autos Qualitas", Icon: Icons.Policies },
    { id: "caro_policies", label: "Autos Qualitas Caro", Icon: Icons.Policies, badge: caroUrgentCount > 0 ? caroUrgentCount : null },
    { id: "gmm_policies", label: "GMM", Icon: Icons.Shield, badge: gmmUrgentCount > 0 ? gmmUrgentCount : null },
    { id: "autos_policies", label: "Autos (Otras Aseg.)", Icon: Icons.Policies, badge: autosUrgentCount > 0 ? autosUrgentCount : null },
    { id: "vida_policies", label: "Vida", Icon: Icons.Heart, badge: vidaUrgentCount > 0 ? vidaUrgentCount : null },
    { id: "danos_policies", label: "Daños", Icon: Icons.Briefcase, badge: danosUrgentCount > 0 ? danosUrgentCount : null },
    { id: "hogar_policies", label: "Hogar", Icon: Icons.Home, badge: hogarUrgentCount > 0 ? hogarUrgentCount : null },
    { id: "archive", label: "📦 Histórico", Icon: Icons.Import },
    { id: "templates", label: "Plantillas", Icon: Icons.Templates },
    { id: "import", label: "Importar / Exportar", Icon: Icons.Import }
  ];
  const pageTitles = {
    dashboard: "Panel de Control",
    policies: "Pólizas Autos Qualitas",
    caro_policies: "Pólizas Autos Qualitas Caro",
    gmm_policies: "Pólizas Gastos Médicos Mayores (GMM)",
    autos_policies: "Autos (Otras Aseguradoras)",
    vida_policies: "Pólizas de Vida",
    danos_policies: "Pólizas de Daños",
    hogar_policies: "Pólizas de Hogar",
    archive: "📦 Histórico de Pólizas Renovadas",
    templates: "Plantillas de Mensajes",
    import: "Importar / Exportar"
  };
  const allPolicies = reactExports.useMemo(() => [
    ...policies,
    ...caroPolicies.map((p2) => ({ ...p2, _isCaro: true })),
    ...gmmPolicies.map((p2) => ({ ...p2, _isGmm: true })),
    ...autosPolicies.map((p2) => ({ ...p2, _isAutos: true })),
    ...vidaPolicies.map((p2) => ({ ...p2, _isVida: true })),
    ...danosPolicies.map((p2) => ({ ...p2, _isDanos: true })),
    ...hogarPolicies.map((p2) => ({ ...p2, _isHogar: true }))
  ], [policies, caroPolicies, gmmPolicies, autosPolicies, vidaPolicies, danosPolicies, hogarPolicies]);
  const allProps = {
    policies: allPolicies,
    onEdit: (p2) => setModalEdit(p2),
    onDelete: (p2) => setDeleteConfirm(p2),
    onMarkPaid: (p2) => setModalPaid(p2),
    onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
    onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
    onRenew,
    onOpenPolicyNum: openSummaryByPolizaNum,
    onUpdatePolicy: (p2) => {
      if (p2._isCaro) saveCaroPolicy(p2);
      else if (p2._isGmm) saveGmmPolicy(p2);
      else if (p2._isAutos) saveAutosPolicy(p2);
      else if (p2._isVida) saveVidaPolicy(p2);
      else if (p2._isDanos) saveDanosPolicy(p2);
      else if (p2._isHogar) saveHogarPolicy(p2);
      else savePolicy(p2);
    }
  };
  const commonProps = {
    policies,
    onEdit: (p2) => setModalEdit(p2),
    onDelete: (p2) => setDeleteConfirm(p2),
    onMarkPaid: (p2) => setModalPaid(p2),
    onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
    onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
    onRenew,
    onOpenPolicyNum: openSummaryByPolizaNum,
    onUpdatePolicy: savePolicy
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "app-layout", children: [
    sidebarOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sidebar-overlay", onClick: () => setSidebarOpen(false) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: `sidebar ${sidebarOpen ? "open" : ""}`, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sidebar-logo", style: { padding: "20px 18px", position: "relative" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "mobile-sidebar-close",
            onClick: () => setSidebarOpen(false),
            title: "Cerrar menú",
            style: { position: "absolute", right: 12, top: 12 },
            children: "✕"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", flexDirection: "column", alignItems: "stretch", margin: "0 auto", textAlign: "center", width: "100%" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "row", alignItems: "baseline", justifyContent: "center", fontSize: "28px", fontWeight: "800", lineHeight: 1, fontFamily: "Times New Roman, serif", letterSpacing: "-0.5px" }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1771c5" }, children: "PRE" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#111111", margin: "0 2px" }, children: "&" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#1ba54b" }, children: "PRO" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: "100%", height: "2px", background: "#ea7d23", margin: "4px 0" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { fontSize: "11px", color: "#a3a3a3", letterSpacing: "4px", textTransform: "uppercase", fontFamily: "Times New Roman, serif", textAlign: "center" }, children: "C O N S U L T O R E S" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { display: "block", marginTop: "14px", fontSize: "11px", color: "var(--text-muted)", textAlign: "center" }, children: "Sistema de Cobranza Interna" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "sidebar-nav", children: navItems.map(({ id: id2, label, Icon, badge }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          className: `nav-item ${page === id2 ? "active" : ""}`,
          onClick: () => {
            setPage(id2);
            setSidebarOpen(false);
          },
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {}),
            label,
            badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nav-badge", children: badge })
          ]
        },
        id2
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sidebar-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { display: "flex", alignItems: "center", gap: 6, fontSize: 11 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { width: 8, height: 8, borderRadius: "50%", background: dbConnected ? "#10b981" : "#f59e0b", display: "inline-block" } }),
          dbConnected ? "🟢 Sincronizado en Nube" : "🟡 Conectando Nube..."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { marginTop: 4, fontSize: 11 }, children: [
          allPolicies.length,
          " pólizas registradas"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4, marginTop: 8 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: syncNowFromCloud,
              className: "btn btn-primary btn-sm",
              style: { fontSize: 10, padding: "4px 6px", width: "100%", textTransform: "none" },
              title: "Descargar las pólizas más recientes guardadas en la Nube",
              children: "🔄 Sincronizar Nube Ahora"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              onClick: uploadLocalToCloud,
              className: "btn btn-ghost btn-sm",
              style: { fontSize: 10, padding: "3px 6px", width: "100%", textTransform: "none", border: "1px solid var(--border)" },
              title: "Subir las pólizas guardadas localmente en esta computadora a Firebase",
              children: "☁️ Subir Datos a Nube"
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "main-content", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "topbar", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", alignItems: "center", gap: 10 }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "mobile-menu-toggle",
              onClick: () => setSidebarOpen(!sidebarOpen),
              title: "Abrir Menú de Navegación",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", width: "22", height: "22", stroke: "#0f172a", strokeWidth: "2.5", fill: "none", strokeLinecap: "round", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "6", x2: "21", y2: "6" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "12", x2: "21", y2: "12" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "3", y1: "18", x2: "21", y2: "18" })
              ] })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "topbar-title", children: pageTitles[page] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "topbar-actions", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            style: { position: "relative", display: "flex", alignItems: "center", cursor: "pointer", background: "var(--bg-card)", border: "1px solid var(--border)", padding: "6px 14px", borderRadius: 20, gap: 6 },
            title: "Haz clic para ver el calendario de cobros",
            onClick: () => setShowCalendarPicker(true),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { style: { fontSize: 13, color: "var(--text-muted)" }, children: [
              "📅 ",
              (/* @__PURE__ */ new Date()).toLocaleDateString("es-MX", { weekday: "long", day: "2-digit", month: "long", year: "numeric" })
            ] })
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "page-content", children: [
        page === "dashboard" && /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPage, { ...allProps, onNew: () => setModalNew(true), onStatClick: (estatus) => {
          setDefaultEstatus(estatus);
          setPage("policies");
        } }),
        page === "policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(PoliciesPage, { ...commonProps, defaultEstatus, onNew: () => setModalNew(true) }),
        page === "urgent" && /* @__PURE__ */ jsxRuntimeExports.jsx(UrgentPage, { ...allProps }),
        page === "archive" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ArchivedPoliciesPage,
          {
            policies: archivedPolicies.map((p2) => ({ ...p2 })),
            allActivePolicies: allPolicies,
            onOpenPolicyNum: openSummaryByPolizaNum
          }
        ),
        page === "caro_policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          CaroPoliciesPage,
          {
            policies: caroPolicies.map((p2) => ({ ...p2, _isCaro: true })),
            onSave: saveCaroPolicy,
            onDelete: deleteCaroPolicy,
            onMarkPaid: markCaroPaid,
            onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
            onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
            onRenew,
            toast: toast2
          }
        ),
        page === "gmm_policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          GmmPoliciesPage,
          {
            policies: gmmPolicies.map((p2) => ({ ...p2, _isGmm: true })),
            onSave: saveGmmPolicy,
            onDelete: deleteGmmPolicy,
            onMarkPaid: markGmmPaid,
            onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
            onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
            onRenew,
            toast: toast2
          }
        ),
        page === "autos_policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          AutosOtrasPoliciesPage,
          {
            policies: autosPolicies.map((p2) => ({ ...p2, _isAutos: true })),
            onSave: saveAutosPolicy,
            onDelete: deleteAutosPolicy,
            onMarkPaid: markAutosPaid,
            onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
            onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
            onRenew,
            toast: toast2
          }
        ),
        page === "vida_policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionPoliciesPage,
          {
            title: "Vida",
            icon: "💚",
            policies: vidaPolicies.map((p2) => ({ ...p2, _isVida: true })),
            onSave: saveVidaPolicy,
            onDelete: deleteVidaPolicy,
            onMarkPaid: markVidaPaid,
            onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
            onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
            onRenew,
            toast: toast2,
            isVida: true
          }
        ),
        page === "danos_policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionPoliciesPage,
          {
            title: "Daños",
            icon: "🏢",
            policies: danosPolicies.map((p2) => ({ ...p2, _isDanos: true })),
            onSave: saveDanosPolicy,
            onDelete: deleteDanosPolicy,
            onMarkPaid: markDanosPaid,
            onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
            onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
            onRenew,
            toast: toast2,
            isDanos: true
          }
        ),
        page === "hogar_policies" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          SectionPoliciesPage,
          {
            title: "Hogar",
            icon: "🏠",
            policies: hogarPolicies.map((p2) => ({ ...p2, _isHogar: true })),
            onSave: saveHogarPolicy,
            onDelete: deleteHogarPolicy,
            onMarkPaid: markHogarPaid,
            onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
            onEmail: (p2) => setModalContact({ policy: p2, type: "email" }),
            onRenew,
            toast: toast2,
            isHogar: true
          }
        ),
        page === "siniestros" && /* @__PURE__ */ jsxRuntimeExports.jsx(SiniestrosPage, { siniestros, onImport: importSiniestros, onUpdateEstatus: updateSiniestroEstatus }),
        page === "cotizaciones" && /* @__PURE__ */ jsxRuntimeExports.jsx(CotizacionesPage, { cotizaciones, onSave: saveCotizacion, onUpdateEstatus: updateCotizacionEstatus }),
        page === "templates" && /* @__PURE__ */ jsxRuntimeExports.jsx(TemplatesPage, { templates, onSave: setTemplates, toast: toast2 }),
        page === "comprobantes" && /* @__PURE__ */ jsxRuntimeExports.jsx(ComprobantesPage, { policies: allPolicies, onUpdatePolicy: allProps.onUpdatePolicy }),
        page === "import" && /* @__PURE__ */ jsxRuntimeExports.jsx(
          ImportExportPage,
          {
            policies,
            caroPolicies,
            gmmPolicies,
            autosPolicies,
            vidaPolicies,
            danosPolicies,
            hogarPolicies,
            onImport: importToCategory,
            toast: toast2
          }
        )
      ] })
    ] }),
    modalNew && /* @__PURE__ */ jsxRuntimeExports.jsx(PolicyModal, { policy: null, onSave: savePolicy, onClose: () => setModalNew(false), toast: toast2 }),
    modalEdit && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicyModal,
      {
        policy: modalEdit,
        isGmm: !!modalEdit._isGmm,
        isAutos: !!modalEdit._isAutos,
        onSave: modalEdit._isCaro ? saveCaroPolicy : modalEdit._isGmm ? saveGmmPolicy : modalEdit._isAutos ? saveAutosPolicy : savePolicy,
        onClose: () => setModalEdit(null),
        toast: toast2
      }
    ),
    modalPaid && /* @__PURE__ */ jsxRuntimeExports.jsx(
      MarkPaidModal,
      {
        policy: modalPaid,
        onConfirm: modalPaid._isCaro ? markCaroPaid : modalPaid._isGmm ? markGmmPaid : modalPaid._isAutos ? markAutosPaid : markPaid,
        onClose: () => setModalPaid(null),
        toast: toast2
      }
    ),
    modalContact && /* @__PURE__ */ jsxRuntimeExports.jsx(
      ContactModal,
      {
        policy: modalContact.policy,
        type: modalContact.type,
        templates,
        onClose: () => setModalContact(null)
      }
    ),
    showCalendarPicker && /* @__PURE__ */ jsxRuntimeExports.jsx(
      CustomCalendarPickerModal,
      {
        policies: page === "caro_policies" ? [] : page === "gmm_policies" ? [] : policies,
        caroPolicies: page === "caro_policies" ? caroPolicies : page === "gmm_policies" ? gmmPolicies : [],
        onClose: () => setShowCalendarPicker(false),
        onSelectDate: (dateStr) => setDailyModalDate(dateStr)
      }
    ),
    dailyModalDate && /* @__PURE__ */ jsxRuntimeExports.jsx(
      DailyPaymentsModal,
      {
        dateStr: dailyModalDate,
        policies: page === "caro_policies" ? [] : page === "gmm_policies" ? [] : policies,
        caroPolicies: page === "caro_policies" ? caroPolicies : page === "gmm_policies" ? gmmPolicies : [],
        onClose: () => setDailyModalDate(null),
        onEdit: (p2) => setModalEdit(p2),
        onDelete: (p2) => setDeleteConfirm(p2),
        onMarkPaid: (p2) => setModalPaid(p2),
        onWhatsApp: (p2) => setModalContact({ policy: p2, type: "whatsapp" }),
        onEmail: (p2) => setModalContact({ policy: p2, type: "email" })
      }
    ),
    deleteConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-overlay", onClick: () => setDeleteConfirm(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal", style: { maxWidth: 420 }, onClick: (e) => e.stopPropagation(), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-header", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "🗑️ Confirmar Eliminación" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "modal-close", onClick: () => setDeleteConfirm(null), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icons.Close, {}) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "modal-body", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { style: { fontSize: 14, color: "var(--text-secondary)", lineHeight: 1.7 }, children: [
        "¿Estás seguro de que deseas eliminar esta póliza? Esta acción ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "no se puede deshacer" }),
        "."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "modal-footer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-outline", onClick: () => setDeleteConfirm(null), children: "Cancelar" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "btn btn-danger", onClick: () => {
          if (deleteConfirm._isCaro) deleteCaroPolicy(deleteConfirm.id);
          else if (deleteConfirm._isGmm) deleteGmmPolicy(deleteConfirm.id);
          else if (deleteConfirm._isAutos) deleteAutosPolicy(deleteConfirm.id);
          else if (deleteConfirm._isVida) deleteVidaPolicy(deleteConfirm.id);
          else if (deleteConfirm._isDanos) deleteDanosPolicy(deleteConfirm.id);
          else if (deleteConfirm._isHogar) deleteHogarPolicy(deleteConfirm.id);
          else deletePolicy(deleteConfirm.id);
          setDeleteConfirm(null);
        }, children: "🗑️ Eliminar" })
      ] })
    ] }) }),
    renewConfirm && /* @__PURE__ */ jsxRuntimeExports.jsx(
      RenewConfirmModal,
      {
        policy: renewConfirm,
        onConfirm: doRenewPolicy,
        onClose: () => setRenewConfirm(null)
      }
    ),
    summaryModalPolicy && /* @__PURE__ */ jsxRuntimeExports.jsx(
      PolicySummaryModal,
      {
        policy: summaryModalPolicy,
        allActivePolicies: allPolicies,
        onOpenPolicyNum: openSummaryByPolizaNum,
        onClose: () => setSummaryModalPolicy(null)
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ToastContainer, { toasts })
  ] });
}
createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
