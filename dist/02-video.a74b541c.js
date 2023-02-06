// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"5rKFT":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "4a2b13bea74b541c";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"fFZ34":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _player = require("@vimeo/player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _function = require("lodash/function");
const iframe = document.querySelector("iframe");
const player = new (0, _playerDefault.default)(iframe);
// console.log(player)
//
// player.on('play', function () {
//   console.log('played the video!')
// })
//
// player.getVideoTitle().then(function (title) {
//   console.log('title', title)
// })
const KEY = "videoplayer-curent-time";
videoTimer();
const setPlayer = thottle(function(iframe1) {
    localStorage.setPlayer(KEY, `${iframe1.seconds}`);
}, 1000);
player.on("timeupdate", setPlayer);
function videoTimer() {
    const timeStorage = localStorage.getItem(KEY);
    if (timeStorage) pla.setCurrentTime(localStorage.getItem(KEY));
}

},{"@vimeo/player":"kmmUG","lodash/function":"38Y78","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kmmUG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
/*! @vimeo/player v2.18.0 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
/**
 * @module lib/functions
 */ /**
 * Check to see this is a node environment.
 * @type {Boolean}
 */ /* global global */ var isNode = typeof global !== "undefined" && ({}).toString.call(global) === "[object global]";
/**
 * Get the name of the method for a given getter or setter.
 *
 * @param {string} prop The name of the property.
 * @param {string} type Either “get” or “set”.
 * @return {string}
 */ function getMethodName(prop, type) {
    if (prop.indexOf(type.toLowerCase()) === 0) return prop;
    return "".concat(type.toLowerCase()).concat(prop.substr(0, 1).toUpperCase()).concat(prop.substr(1));
}
/**
 * Check to see if the object is a DOM Element.
 *
 * @param {*} element The object to check.
 * @return {boolean}
 */ function isDomElement(element) {
    return Boolean(element && element.nodeType === 1 && "nodeName" in element && element.ownerDocument && element.ownerDocument.defaultView);
}
/**
 * Check to see whether the value is a number.
 *
 * @see http://dl.dropboxusercontent.com/u/35146/js/tests/isNumber.html
 * @param {*} value The value to check.
 * @param {boolean} integer Check if the value is an integer.
 * @return {boolean}
 */ function isInteger(value) {
    // eslint-disable-next-line eqeqeq
    return !isNaN(parseFloat(value)) && isFinite(value) && Math.floor(value) == value;
}
/**
 * Check to see if the URL is a Vimeo url.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoUrl(url) {
    return /^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(url);
}
/**
 * Check to see if the URL is for a Vimeo embed.
 *
 * @param {string} url The url string.
 * @return {boolean}
 */ function isVimeoEmbed(url) {
    var expr = /^https:\/\/player\.vimeo\.com\/video\/\d+/;
    return expr.test(url);
}
/**
 * Get the Vimeo URL from an element.
 * The element must have either a data-vimeo-id or data-vimeo-url attribute.
 *
 * @param {object} oEmbedParameters The oEmbed parameters.
 * @return {string}
 */ function getVimeoUrl() {
    var oEmbedParameters1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var id = oEmbedParameters1.id;
    var url = oEmbedParameters1.url;
    var idOrUrl = id || url;
    if (!idOrUrl) throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");
    if (isInteger(idOrUrl)) return "https://vimeo.com/".concat(idOrUrl);
    if (isVimeoUrl(idOrUrl)) return idOrUrl.replace("http:", "https:");
    if (id) throw new TypeError("\u201C".concat(id, "\u201D is not a valid video id."));
    throw new TypeError("\u201C".concat(idOrUrl, "\u201D is not a vimeo.com url."));
}
var arrayIndexOfSupport = typeof Array.prototype.indexOf !== "undefined";
var postMessageSupport = typeof window !== "undefined" && typeof window.postMessage !== "undefined";
if (!isNode && (!arrayIndexOfSupport || !postMessageSupport)) throw new Error("Sorry, the Vimeo Player API is not available in this browser.");
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
/*!
 * weakmap-polyfill v2.0.4 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2021 polygonplanet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */ (function(self) {
    if (self.WeakMap) return;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var hasDefine = Object.defineProperty && function() {
        try {
            // Avoid IE8's broken Object.defineProperty
            return Object.defineProperty({}, "x", {
                value: 1
            }).x === 1;
        } catch (e) {}
    }();
    var defineProperty = function(object, name, value) {
        if (hasDefine) Object.defineProperty(object, name, {
            configurable: true,
            writable: true,
            value: value
        });
        else object[name] = value;
    };
    self.WeakMap = function() {
        // ECMA-262 23.3 WeakMap Objects
        function WeakMap() {
            if (this === void 0) throw new TypeError("Constructor WeakMap requires 'new'");
            defineProperty(this, "_id", genId("_WeakMap")); // ECMA-262 23.3.1.1 WeakMap([iterable])
            if (arguments.length > 0) // Currently, WeakMap `iterable` argument is not supported
            throw new TypeError("WeakMap iterable is not supported");
        } // ECMA-262 23.3.3.2 WeakMap.prototype.delete(key)
        defineProperty(WeakMap.prototype, "delete", function(key) {
            checkInstance(this, "delete");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                delete key[this._id];
                return true;
            }
            return false;
        }); // ECMA-262 23.3.3.3 WeakMap.prototype.get(key)
        defineProperty(WeakMap.prototype, "get", function(key) {
            checkInstance(this, "get");
            if (!isObject(key)) return void 0;
            var entry = key[this._id];
            if (entry && entry[0] === key) return entry[1];
            return void 0;
        }); // ECMA-262 23.3.3.4 WeakMap.prototype.has(key)
        defineProperty(WeakMap.prototype, "has", function(key) {
            checkInstance(this, "has");
            if (!isObject(key)) return false;
            var entry = key[this._id];
            if (entry && entry[0] === key) return true;
            return false;
        }); // ECMA-262 23.3.3.5 WeakMap.prototype.set(key, value)
        defineProperty(WeakMap.prototype, "set", function(key, value) {
            checkInstance(this, "set");
            if (!isObject(key)) throw new TypeError("Invalid value used as weak map key");
            var entry = key[this._id];
            if (entry && entry[0] === key) {
                entry[1] = value;
                return this;
            }
            defineProperty(key, this._id, [
                key,
                value
            ]);
            return this;
        });
        function checkInstance(x, methodName) {
            if (!isObject(x) || !hasOwnProperty.call(x, "_id")) throw new TypeError(methodName + " method called on incompatible receiver " + typeof x);
        }
        function genId(prefix) {
            return prefix + "_" + rand() + "." + rand();
        }
        function rand() {
            return Math.random().toString().substring(2);
        }
        defineProperty(WeakMap, "_polyfill", true);
        return WeakMap;
    }();
    function isObject(x) {
        return Object(x) === x;
    }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof commonjsGlobal !== "undefined" ? commonjsGlobal : commonjsGlobal);
var npo_src = createCommonjsModule(function(module) {
    /*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/ (function UMD(name, context, definition) {
        // special form of UMD for polyfilling across evironments
        context[name] = context[name] || definition();
        if (module.exports) module.exports = context[name];
    })("Promise", typeof commonjsGlobal != "undefined" ? commonjsGlobal : commonjsGlobal, function DEF() {
        var builtInProp, cycle, scheduling_queue, ToString = Object.prototype.toString, timer = typeof setImmediate != "undefined" ? function timer(fn) {
            return setImmediate(fn);
        } : setTimeout; // dammit, IE8.
        try {
            Object.defineProperty({}, "x", {});
            builtInProp = function builtInProp(obj, name, val, config) {
                return Object.defineProperty(obj, name, {
                    value: val,
                    writable: true,
                    configurable: config !== false
                });
            };
        } catch (err1) {
            builtInProp = function builtInProp(obj, name, val) {
                obj[name] = val;
                return obj;
            };
        } // Note: using a queue instead of array for efficiency
        scheduling_queue = function Queue() {
            var first, last, item;
            function Item(fn, self) {
                this.fn = fn;
                this.self = self;
                this.next = void 0;
            }
            return {
                add: function add(fn, self) {
                    item = new Item(fn, self);
                    if (last) last.next = item;
                    else first = item;
                    last = item;
                    item = void 0;
                },
                drain: function drain() {
                    var f = first;
                    first = last = cycle = void 0;
                    while(f){
                        f.fn.call(f.self);
                        f = f.next;
                    }
                }
            };
        }();
        function schedule(fn, self) {
            scheduling_queue.add(fn, self);
            if (!cycle) cycle = timer(scheduling_queue.drain);
        } // promise duck typing
        function isThenable(o) {
            var _then, o_type = typeof o;
            if (o != null && (o_type == "object" || o_type == "function")) _then = o.then;
            return typeof _then == "function" ? _then : false;
        }
        function notify() {
            for(var i = 0; i < this.chain.length; i++)notifyIsolated(this, this.state === 1 ? this.chain[i].success : this.chain[i].failure, this.chain[i]);
            this.chain.length = 0;
        } // NOTE: This is a separate function to isolate
        // the `try..catch` so that other code can be
        // optimized better
        function notifyIsolated(self, cb, chain) {
            var ret, _then;
            try {
                if (cb === false) chain.reject(self.msg);
                else {
                    if (cb === true) ret = self.msg;
                    else ret = cb.call(void 0, self.msg);
                    if (ret === chain.promise) chain.reject(TypeError("Promise-chain cycle"));
                    else if (_then = isThenable(ret)) _then.call(ret, chain.resolve, chain.reject);
                    else chain.resolve(ret);
                }
            } catch (err) {
                chain.reject(err);
            }
        }
        function resolve1(msg) {
            var _then, self = this; // already triggered?
            if (self.triggered) return;
            self.triggered = true; // unwrap
            if (self.def) self = self.def;
            try {
                if (_then = isThenable(msg)) schedule(function() {
                    var def_wrapper = new MakeDefWrapper(self);
                    try {
                        _then.call(msg, function $resolve$() {
                            resolve1.apply(def_wrapper, arguments);
                        }, function $reject$() {
                            reject1.apply(def_wrapper, arguments);
                        });
                    } catch (err) {
                        reject1.call(def_wrapper, err);
                    }
                });
                else {
                    self.msg = msg;
                    self.state = 1;
                    if (self.chain.length > 0) schedule(notify, self);
                }
            } catch (err) {
                reject1.call(new MakeDefWrapper(self), err);
            }
        }
        function reject1(msg) {
            var self = this; // already triggered?
            if (self.triggered) return;
            self.triggered = true; // unwrap
            if (self.def) self = self.def;
            self.msg = msg;
            self.state = 2;
            if (self.chain.length > 0) schedule(notify, self);
        }
        function iteratePromises(Constructor, arr, resolver, rejecter) {
            for(var idx1 = 0; idx1 < arr.length; idx1++)(function IIFE(idx) {
                Constructor.resolve(arr[idx]).then(function $resolver$(msg) {
                    resolver(idx, msg);
                }, rejecter);
            })(idx1);
        }
        function MakeDefWrapper(self) {
            this.def = self;
            this.triggered = false;
        }
        function MakeDef(self) {
            this.promise = self;
            this.state = 0;
            this.triggered = false;
            this.chain = [];
            this.msg = void 0;
        }
        function Promise(executor) {
            if (typeof executor != "function") throw TypeError("Not a function");
            if (this.__NPO__ !== 0) throw TypeError("Not a promise");
             // instance shadowing the inherited "brand"
            // to signal an already "initialized" promise
            this.__NPO__ = 1;
            var def = new MakeDef(this);
            this["then"] = function then(success, failure) {
                var o = {
                    success: typeof success == "function" ? success : true,
                    failure: typeof failure == "function" ? failure : false
                }; // Note: `then(..)` itself can be borrowed to be used against
                // a different promise constructor for making the chained promise,
                // by substituting a different `this` binding.
                o.promise = new this.constructor(function extractChain(resolve, reject) {
                    if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                    o.resolve = resolve;
                    o.reject = reject;
                });
                def.chain.push(o);
                if (def.state !== 0) schedule(notify, def);
                return o.promise;
            };
            this["catch"] = function $catch$(failure) {
                return this.then(void 0, failure);
            };
            try {
                executor.call(void 0, function publicResolve(msg) {
                    resolve1.call(def, msg);
                }, function publicReject(msg) {
                    reject1.call(def, msg);
                });
            } catch (err) {
                reject1.call(def, err);
            }
        }
        var PromisePrototype = builtInProp({}, "constructor", Promise, /*configurable=*/ false); // Note: Android 4 cannot use `Object.defineProperty(..)` here
        Promise.prototype = PromisePrototype; // built-in "brand" to signal an "uninitialized" promise
        builtInProp(PromisePrototype, "__NPO__", 0, /*configurable=*/ false);
        builtInProp(Promise, "resolve", function Promise$resolve(msg) {
            var Constructor = this; // spec mandated checks
            // note: best "isPromise" check that's practical for now
            if (msg && typeof msg == "object" && msg.__NPO__ === 1) return msg;
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                resolve(msg);
            });
        });
        builtInProp(Promise, "reject", function Promise$reject(msg) {
            return new this(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                reject(msg);
            });
        });
        builtInProp(Promise, "all", function Promise$all(arr) {
            var Constructor = this; // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            if (arr.length === 0) return Constructor.resolve([]);
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                var len = arr.length, msgs = Array(len), count = 0;
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    msgs[idx] = msg;
                    if (++count === len) resolve(msgs);
                }, reject);
            });
        });
        builtInProp(Promise, "race", function Promise$race(arr) {
            var Constructor = this; // spec mandated checks
            if (ToString.call(arr) != "[object Array]") return Constructor.reject(TypeError("Not an array"));
            return new Constructor(function executor(resolve, reject) {
                if (typeof resolve != "function" || typeof reject != "function") throw TypeError("Not a function");
                iteratePromises(Constructor, arr, function resolver(idx, msg) {
                    resolve(msg);
                }, reject);
            });
        });
        return Promise;
    });
});
/**
 * @module lib/callbacks
 */ var callbackMap = new WeakMap();
/**
 * Store a callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @param {(function(this:Player, *): void|{resolve: function, reject: function})} callback
 *        The callback to call or an object with resolve and reject functions for a promise.
 * @return {void}
 */ function storeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!(name in playerCallbacks)) playerCallbacks[name] = [];
    playerCallbacks[name].push(callback);
    callbackMap.set(player.element, playerCallbacks);
}
/**
 * Get the callbacks for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @return {function[]}
 */ function getCallbacks(player, name) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    return playerCallbacks[name] || [];
}
/**
 * Remove a stored callback for a method or event for a player.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name
 * @param {function} [callback] The specific callback to remove.
 * @return {boolean} Was this the last callback?
 */ function removeCallback(player, name, callback) {
    var playerCallbacks = callbackMap.get(player.element) || {};
    if (!playerCallbacks[name]) return true;
     // If no callback is passed, remove all callbacks for the event
    if (!callback) {
        playerCallbacks[name] = [];
        callbackMap.set(player.element, playerCallbacks);
        return true;
    }
    var index = playerCallbacks[name].indexOf(callback);
    if (index !== -1) playerCallbacks[name].splice(index, 1);
    callbackMap.set(player.element, playerCallbacks);
    return playerCallbacks[name] && playerCallbacks[name].length === 0;
}
/**
 * Return the first stored callback for a player and event or method.
 *
 * @param {Player} player The player object.
 * @param {string} name The method or event name.
 * @return {function} The callback, or false if there were none
 */ function shiftCallbacks(player, name) {
    var playerCallbacks = getCallbacks(player, name);
    if (playerCallbacks.length < 1) return false;
    var callback = playerCallbacks.shift();
    removeCallback(player, name, callback);
    return callback;
}
/**
 * Move callbacks associated with an element to another element.
 *
 * @param {HTMLElement} oldElement The old element.
 * @param {HTMLElement} newElement The new element.
 * @return {void}
 */ function swapCallbacks(oldElement, newElement) {
    var playerCallbacks = callbackMap.get(oldElement);
    callbackMap.set(newElement, playerCallbacks);
    callbackMap.delete(oldElement);
}
/**
 * @module lib/postmessage
 */ /**
 * Parse a message received from postMessage.
 *
 * @param {*} data The data received from postMessage.
 * @return {object}
 */ function parseMessageData(data) {
    if (typeof data === "string") try {
        data = JSON.parse(data);
    } catch (error) {
        // If the message cannot be parsed, throw the error as a warning
        console.warn(error);
        return {};
    }
    return data;
}
/**
 * Post a message to the specified target.
 *
 * @param {Player} player The player object to use.
 * @param {string} method The API method to call.
 * @param {object} params The parameters to send to the player.
 * @return {void}
 */ function postMessage(player, method, params) {
    if (!player.element.contentWindow || !player.element.contentWindow.postMessage) return;
    var message = {
        method: method
    };
    if (params !== undefined) message.value = params;
     // IE 8 and 9 do not support passing messages, so stringify them
    var ieVersion = parseFloat(navigator.userAgent.toLowerCase().replace(/^.*msie (\d+).*$/, "$1"));
    if (ieVersion >= 8 && ieVersion < 10) message = JSON.stringify(message);
    player.element.contentWindow.postMessage(message, player.origin);
}
/**
 * Parse the data received from a message event.
 *
 * @param {Player} player The player that received the message.
 * @param {(Object|string)} data The message data. Strings will be parsed into JSON.
 * @return {void}
 */ function processData(player, data) {
    data = parseMessageData(data);
    var callbacks = [];
    var param;
    if (data.event) {
        if (data.event === "error") {
            var promises = getCallbacks(player, data.data.method);
            promises.forEach(function(promise) {
                var error = new Error(data.data.message);
                error.name = data.data.name;
                promise.reject(error);
                removeCallback(player, data.data.method, promise);
            });
        }
        callbacks = getCallbacks(player, "event:".concat(data.event));
        param = data.data;
    } else if (data.method) {
        var callback = shiftCallbacks(player, data.method);
        if (callback) {
            callbacks.push(callback);
            param = data.value;
        }
    }
    callbacks.forEach(function(callback) {
        try {
            if (typeof callback === "function") {
                callback.call(player, param);
                return;
            }
            callback.resolve(param);
        } catch (e) {}
    });
}
/**
 * @module lib/embed
 */ var oEmbedParameters = [
    "autopause",
    "autoplay",
    "background",
    "byline",
    "color",
    "controls",
    "dnt",
    "height",
    "id",
    "interactive_params",
    "keyboard",
    "loop",
    "maxheight",
    "maxwidth",
    "muted",
    "playsinline",
    "portrait",
    "responsive",
    "speed",
    "texttrack",
    "title",
    "transparent",
    "url",
    "width"
];
/**
 * Get the 'data-vimeo'-prefixed attributes from an element as an object.
 *
 * @param {HTMLElement} element The element.
 * @param {Object} [defaults={}] The default values to use.
 * @return {Object<string, string>}
 */ function getOEmbedParameters(element) {
    var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return oEmbedParameters.reduce(function(params, param) {
        var value = element.getAttribute("data-vimeo-".concat(param));
        if (value || value === "") params[param] = value === "" ? 1 : value;
        return params;
    }, defaults);
}
/**
 * Create an embed from oEmbed data inside an element.
 *
 * @param {object} data The oEmbed data.
 * @param {HTMLElement} element The element to put the iframe in.
 * @return {HTMLIFrameElement} The iframe embed.
 */ function createEmbed(_ref, element) {
    var html = _ref.html;
    if (!element) throw new TypeError("An element must be provided");
    if (element.getAttribute("data-vimeo-initialized") !== null) return element.querySelector("iframe");
    var div = document.createElement("div");
    div.innerHTML = html;
    element.appendChild(div.firstChild);
    element.setAttribute("data-vimeo-initialized", "true");
    return element.querySelector("iframe");
}
/**
 * Make an oEmbed call for the specified URL.
 *
 * @param {string} videoUrl The vimeo.com url for the video.
 * @param {Object} [params] Parameters to pass to oEmbed.
 * @param {HTMLElement} element The element.
 * @return {Promise}
 */ function getOEmbedData(videoUrl) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var element = arguments.length > 2 ? arguments[2] : undefined;
    return new Promise(function(resolve, reject) {
        if (!isVimeoUrl(videoUrl)) throw new TypeError("\u201C".concat(videoUrl, "\u201D is not a vimeo.com url."));
        var url = "https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(videoUrl));
        for(var param in params)if (params.hasOwnProperty(param)) url += "&".concat(param, "=").concat(encodeURIComponent(params[param]));
        var xhr = "XDomainRequest" in window ? new XDomainRequest() : new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onload = function() {
            if (xhr.status === 404) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D was not found.")));
                return;
            }
            if (xhr.status === 403) {
                reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                return;
            }
            try {
                var json = JSON.parse(xhr.responseText); // Check api response for 403 on oembed
                if (json.domain_status_code === 403) {
                    // We still want to create the embed to give users visual feedback
                    createEmbed(json, element);
                    reject(new Error("\u201C".concat(videoUrl, "\u201D is not embeddable.")));
                    return;
                }
                resolve(json);
            } catch (error) {
                reject(error);
            }
        };
        xhr.onerror = function() {
            var status = xhr.status ? " (".concat(xhr.status, ")") : "";
            reject(new Error("There was an error fetching the embed code from Vimeo".concat(status, ".")));
        };
        xhr.send();
    });
}
/**
 * Initialize all embeds within a specific element
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initializeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    var elements = [].slice.call(parent.querySelectorAll("[data-vimeo-id], [data-vimeo-url]"));
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error creating an embed: ".concat(error));
    };
    elements.forEach(function(element) {
        try {
            // Skip any that have data-vimeo-defer
            if (element.getAttribute("data-vimeo-defer") !== null) return;
            var params = getOEmbedParameters(element);
            var url = getVimeoUrl(params);
            getOEmbedData(url, params, element).then(function(data) {
                return createEmbed(data, element);
            }).catch(handleError);
        } catch (error) {
            handleError(error);
        }
    });
}
/**
 * Resize embeds when messaged by the player.
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function resizeEmbeds() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    // Prevent execution if users include the player.js script multiple times.
    if (window.VimeoPlayerResizeEmbeds_) return;
    window.VimeoPlayerResizeEmbeds_ = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
         // 'spacechange' is fired only on embeds with cards
        if (!event.data || event.data.event !== "spacechange") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            if (iframes[i].contentWindow !== event.source) continue;
             // Change padding-bottom of the enclosing div to accommodate
            // card carousel without distorting aspect ratio
            var space = iframes[i].parentElement;
            space.style.paddingBottom = "".concat(event.data.data[0].bottom, "px");
            break;
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Add chapters to existing metadata for Google SEO
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function initAppendVideoMetadata() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoSeoMetadataAppended) return;
    window.VimeoSeoMetadataAppended = true;
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            var iframe = iframes[i]; // Initiate appendVideoMetadata if iframe is a Vimeo embed
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) {
                var player = new Player(iframe);
                player.callMethod("appendVideoMetadata", window.location.href);
            }
        }
    };
    window.addEventListener("message", onMessage);
}
/**
 * Seek to time indicated by vimeo_t query parameter if present in URL
 *
 * @param {HTMLElement} [parent=document] The parent element.
 * @return {void}
 */ function checkUrlTimeParam() {
    var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
    //  Prevent execution if users include the player.js script multiple times.
    if (window.VimeoCheckedUrlTimeParam) return;
    window.VimeoCheckedUrlTimeParam = true;
    var handleError = function handleError(error) {
        if ("console" in window && console.error) console.error("There was an error getting video Id: ".concat(error));
    };
    var onMessage = function onMessage(event) {
        if (!isVimeoUrl(event.origin)) return;
        var data = parseMessageData(event.data);
        if (!data || data.event !== "ready") return;
        var iframes = parent.querySelectorAll("iframe");
        for(var i = 0; i < iframes.length; i++){
            var iframe = iframes[i];
            var isValidMessageSource = iframe.contentWindow === event.source;
            if (isVimeoEmbed(iframe.src) && isValidMessageSource) (function() {
                var player = new Player(iframe);
                player.getVideoId().then(function(videoId) {
                    var matches = new RegExp("[?&]vimeo_t_".concat(videoId, "=([^&#]*)")).exec(window.location.href);
                    if (matches && matches[1]) {
                        var sec = decodeURI(matches[1]);
                        player.setCurrentTime(sec);
                    }
                    return;
                }).catch(handleError);
            })();
        }
    };
    window.addEventListener("message", onMessage);
}
/* MIT License

Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
Terms */ function initializeScreenfull() {
    var fn = function() {
        var val;
        var fnMap = [
            [
                "requestFullscreen",
                "exitFullscreen",
                "fullscreenElement",
                "fullscreenEnabled",
                "fullscreenchange",
                "fullscreenerror"
            ],
            [
                "webkitRequestFullscreen",
                "webkitExitFullscreen",
                "webkitFullscreenElement",
                "webkitFullscreenEnabled",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "webkitRequestFullScreen",
                "webkitCancelFullScreen",
                "webkitCurrentFullScreenElement",
                "webkitCancelFullScreen",
                "webkitfullscreenchange",
                "webkitfullscreenerror"
            ],
            [
                "mozRequestFullScreen",
                "mozCancelFullScreen",
                "mozFullScreenElement",
                "mozFullScreenEnabled",
                "mozfullscreenchange",
                "mozfullscreenerror"
            ],
            [
                "msRequestFullscreen",
                "msExitFullscreen",
                "msFullscreenElement",
                "msFullscreenEnabled",
                "MSFullscreenChange",
                "MSFullscreenError"
            ]
        ];
        var i = 0;
        var l = fnMap.length;
        var ret = {};
        for(; i < l; i++){
            val = fnMap[i];
            if (val && val[1] in document) {
                for(i = 0; i < val.length; i++)ret[fnMap[0][i]] = val[i];
                return ret;
            }
        }
        return false;
    }();
    var eventNameMap = {
        fullscreenchange: fn.fullscreenchange,
        fullscreenerror: fn.fullscreenerror
    };
    var screenfull1 = {
        request: function request(element) {
            return new Promise(function(resolve, reject) {
                var onFullScreenEntered1 = function onFullScreenEntered() {
                    screenfull1.off("fullscreenchange", onFullScreenEntered);
                    resolve();
                };
                screenfull1.on("fullscreenchange", onFullScreenEntered1);
                element = element || document.documentElement;
                var returnPromise = element[fn.requestFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenEntered1).catch(reject);
            });
        },
        exit: function exit() {
            return new Promise(function(resolve, reject) {
                if (!screenfull1.isFullscreen) {
                    resolve();
                    return;
                }
                var onFullScreenExit1 = function onFullScreenExit() {
                    screenfull1.off("fullscreenchange", onFullScreenExit);
                    resolve();
                };
                screenfull1.on("fullscreenchange", onFullScreenExit1);
                var returnPromise = document[fn.exitFullscreen]();
                if (returnPromise instanceof Promise) returnPromise.then(onFullScreenExit1).catch(reject);
            });
        },
        on: function on(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.addEventListener(eventName, callback);
        },
        off: function off(event, callback) {
            var eventName = eventNameMap[event];
            if (eventName) document.removeEventListener(eventName, callback);
        }
    };
    Object.defineProperties(screenfull1, {
        isFullscreen: {
            get: function get() {
                return Boolean(document[fn.fullscreenElement]);
            }
        },
        element: {
            enumerable: true,
            get: function get() {
                return document[fn.fullscreenElement];
            }
        },
        isEnabled: {
            enumerable: true,
            get: function get() {
                // Coerce to boolean in case of old WebKit
                return Boolean(document[fn.fullscreenEnabled]);
            }
        }
    });
    return screenfull1;
}
var playerMap = new WeakMap();
var readyMap = new WeakMap();
var screenfull = {};
var Player = /*#__PURE__*/ function() {
    /**
   * Create a Player.
   *
   * @param {(HTMLIFrameElement|HTMLElement|string|jQuery)} element A reference to the Vimeo
   *        player iframe, and id, or a jQuery object.
   * @param {object} [options] oEmbed parameters to use when creating an embed in the element.
   * @return {Player}
   */ function Player1(element) {
        var _this = this;
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        _classCallCheck(this, Player1);
        /* global jQuery */ if (window.jQuery && element instanceof jQuery) {
            if (element.length > 1 && window.console && console.warn) console.warn("A jQuery object with multiple elements was passed, using the first element.");
            element = element[0];
        } // Find an element by ID
        if (typeof document !== "undefined" && typeof element === "string") element = document.getElementById(element);
         // Not an element!
        if (!isDomElement(element)) throw new TypeError("You must pass either a valid element or a valid id.");
         // Already initialized an embed in this div, so grab the iframe
        if (element.nodeName !== "IFRAME") {
            var iframe = element.querySelector("iframe");
            if (iframe) element = iframe;
        } // iframe url is not a Vimeo url
        if (element.nodeName === "IFRAME" && !isVimeoUrl(element.getAttribute("src") || "")) throw new Error("The player element passed isn\u2019t a Vimeo embed.");
         // If there is already a player object in the map, return that
        if (playerMap.has(element)) return playerMap.get(element);
        this._window = element.ownerDocument.defaultView;
        this.element = element;
        this.origin = "*";
        var readyPromise = new npo_src(function(resolve, reject) {
            _this._onMessage = function(event) {
                if (!isVimeoUrl(event.origin) || _this.element.contentWindow !== event.source) return;
                if (_this.origin === "*") _this.origin = event.origin;
                var data = parseMessageData(event.data);
                var isError = data && data.event === "error";
                var isReadyError = isError && data.data && data.data.method === "ready";
                if (isReadyError) {
                    var error = new Error(data.data.message);
                    error.name = data.data.name;
                    reject(error);
                    return;
                }
                var isReadyEvent = data && data.event === "ready";
                var isPingResponse = data && data.method === "ping";
                if (isReadyEvent || isPingResponse) {
                    _this.element.setAttribute("data-ready", "true");
                    resolve();
                    return;
                }
                processData(_this, data);
            };
            _this._window.addEventListener("message", _this._onMessage);
            if (_this.element.nodeName !== "IFRAME") {
                var params = getOEmbedParameters(element, options);
                var url = getVimeoUrl(params);
                getOEmbedData(url, params, element).then(function(data) {
                    var iframe = createEmbed(data, element); // Overwrite element with the new iframe,
                    // but store reference to the original element
                    _this.element = iframe;
                    _this._originalElement = element;
                    swapCallbacks(element, iframe);
                    playerMap.set(_this.element, _this);
                    return data;
                }).catch(reject);
            }
        }); // Store a copy of this Player in the map
        readyMap.set(this, readyPromise);
        playerMap.set(this.element, this); // Send a ping to the iframe so the ready promise will be resolved if
        // the player is already ready.
        if (this.element.nodeName === "IFRAME") postMessage(this, "ping");
        if (screenfull.isEnabled) {
            var exitFullscreen = function exitFullscreen() {
                return screenfull.exit();
            };
            this.fullscreenchangeHandler = function() {
                if (screenfull.isFullscreen) storeCallback(_this, "event:exitFullscreen", exitFullscreen);
                else removeCallback(_this, "event:exitFullscreen", exitFullscreen);
                 // eslint-disable-next-line
                _this.ready().then(function() {
                    postMessage(_this, "fullscreenchange", screenfull.isFullscreen);
                });
            };
            screenfull.on("fullscreenchange", this.fullscreenchangeHandler);
        }
        return this;
    }
    /**
   * Get a promise for a method.
   *
   * @param {string} name The API method to call.
   * @param {Object} [args={}] Arguments to send via postMessage.
   * @return {Promise}
   */ _createClass(Player1, [
        {
            key: "callMethod",
            value: function callMethod(name) {
                var _this2 = this;
                var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return new npo_src(function(resolve, reject) {
                    // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this2.ready().then(function() {
                        storeCallback(_this2, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this2, name, args);
                    }).catch(reject);
                });
            }
        },
        {
            key: "get",
            value: function get(name) {
                var _this3 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "get"); // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this3.ready().then(function() {
                        storeCallback(_this3, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this3, name);
                    }).catch(reject);
                });
            }
        },
        {
            key: "set",
            value: function set(name, value) {
                var _this4 = this;
                return new npo_src(function(resolve, reject) {
                    name = getMethodName(name, "set");
                    if (value === undefined || value === null) throw new TypeError("There must be a value to set.");
                     // We are storing the resolve/reject handlers to call later, so we
                    // can’t return here.
                    // eslint-disable-next-line promise/always-return
                    return _this4.ready().then(function() {
                        storeCallback(_this4, name, {
                            resolve: resolve,
                            reject: reject
                        });
                        postMessage(_this4, name, value);
                    }).catch(reject);
                });
            }
        },
        {
            key: "on",
            value: function on(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (!callback) throw new TypeError("You must pass a callback function.");
                if (typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var callbacks = getCallbacks(this, "event:".concat(eventName));
                if (callbacks.length === 0) this.callMethod("addEventListener", eventName).catch(function() {
                // will trigger the error callback if they are listening.
                });
                storeCallback(this, "event:".concat(eventName), callback);
            }
        },
        {
            key: "off",
            value: function off(eventName, callback) {
                if (!eventName) throw new TypeError("You must pass an event name.");
                if (callback && typeof callback !== "function") throw new TypeError("The callback must be a function.");
                var lastCallback = removeCallback(this, "event:".concat(eventName), callback); // If there are no callbacks left, remove the listener
                if (lastCallback) this.callMethod("removeEventListener", eventName).catch(function(e) {
                // will trigger the error callback if they are listening.
                });
            }
        },
        {
            key: "loadVideo",
            value: function loadVideo(options) {
                return this.callMethod("loadVideo", options);
            }
        },
        {
            key: "ready",
            value: function ready() {
                var readyPromise = readyMap.get(this) || new npo_src(function(resolve, reject) {
                    reject(new Error("Unknown player. Probably unloaded."));
                });
                return npo_src.resolve(readyPromise);
            }
        },
        {
            key: "addCuePoint",
            value: function addCuePoint(time) {
                var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.callMethod("addCuePoint", {
                    time: time,
                    data: data
                });
            }
        },
        {
            key: "removeCuePoint",
            value: function removeCuePoint(id) {
                return this.callMethod("removeCuePoint", id);
            }
        },
        {
            key: "enableTextTrack",
            value: function enableTextTrack(language, kind) {
                if (!language) throw new TypeError("You must pass a language.");
                return this.callMethod("enableTextTrack", {
                    language: language,
                    kind: kind
                });
            }
        },
        {
            key: "disableTextTrack",
            value: function disableTextTrack() {
                return this.callMethod("disableTextTrack");
            }
        },
        {
            key: "pause",
            value: function pause() {
                return this.callMethod("pause");
            }
        },
        {
            key: "play",
            value: function play() {
                return this.callMethod("play");
            }
        },
        {
            key: "requestFullscreen",
            value: function requestFullscreen() {
                if (screenfull.isEnabled) return screenfull.request(this.element);
                return this.callMethod("requestFullscreen");
            }
        },
        {
            key: "exitFullscreen",
            value: function exitFullscreen() {
                if (screenfull.isEnabled) return screenfull.exit();
                return this.callMethod("exitFullscreen");
            }
        },
        {
            key: "getFullscreen",
            value: function getFullscreen() {
                if (screenfull.isEnabled) return npo_src.resolve(screenfull.isFullscreen);
                return this.get("fullscreen");
            }
        },
        {
            key: "requestPictureInPicture",
            value: function requestPictureInPicture() {
                return this.callMethod("requestPictureInPicture");
            }
        },
        {
            key: "exitPictureInPicture",
            value: function exitPictureInPicture() {
                return this.callMethod("exitPictureInPicture");
            }
        },
        {
            key: "getPictureInPicture",
            value: function getPictureInPicture() {
                return this.get("pictureInPicture");
            }
        },
        {
            key: "unload",
            value: function unload() {
                return this.callMethod("unload");
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this5 = this;
                return new npo_src(function(resolve) {
                    readyMap.delete(_this5);
                    playerMap.delete(_this5.element);
                    if (_this5._originalElement) {
                        playerMap.delete(_this5._originalElement);
                        _this5._originalElement.removeAttribute("data-vimeo-initialized");
                    }
                    if (_this5.element && _this5.element.nodeName === "IFRAME" && _this5.element.parentNode) {
                        // If we've added an additional wrapper div, remove that from the DOM.
                        // If not, just remove the iframe element.
                        if (_this5.element.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== _this5.element.parentNode) _this5.element.parentNode.parentNode.removeChild(_this5.element.parentNode);
                        else _this5.element.parentNode.removeChild(_this5.element);
                    } // If the clip is private there is a case where the element stays the
                    // div element. Destroy should reset the div and remove the iframe child.
                    if (_this5.element && _this5.element.nodeName === "DIV" && _this5.element.parentNode) {
                        _this5.element.removeAttribute("data-vimeo-initialized");
                        var iframe = _this5.element.querySelector("iframe");
                        if (iframe && iframe.parentNode) {
                            // If we've added an additional wrapper div, remove that from the DOM.
                            // If not, just remove the iframe element.
                            if (iframe.parentNode.parentNode && _this5._originalElement && _this5._originalElement !== iframe.parentNode) iframe.parentNode.parentNode.removeChild(iframe.parentNode);
                            else iframe.parentNode.removeChild(iframe);
                        }
                    }
                    _this5._window.removeEventListener("message", _this5._onMessage);
                    if (screenfull.isEnabled) screenfull.off("fullscreenchange", _this5.fullscreenchangeHandler);
                    resolve();
                });
            }
        },
        {
            key: "getAutopause",
            value: function getAutopause() {
                return this.get("autopause");
            }
        },
        {
            key: "setAutopause",
            value: function setAutopause(autopause) {
                return this.set("autopause", autopause);
            }
        },
        {
            key: "getBuffered",
            value: function getBuffered() {
                return this.get("buffered");
            }
        },
        {
            key: "getCameraProps",
            value: function getCameraProps() {
                return this.get("cameraProps");
            }
        },
        {
            key: "setCameraProps",
            value: function setCameraProps(camera) {
                return this.set("cameraProps", camera);
            }
        },
        {
            key: "getChapters",
            value: function getChapters() {
                return this.get("chapters");
            }
        },
        {
            key: "getCurrentChapter",
            value: function getCurrentChapter() {
                return this.get("currentChapter");
            }
        },
        {
            key: "getColor",
            value: function getColor() {
                return this.get("color");
            }
        },
        {
            key: "setColor",
            value: function setColor(color) {
                return this.set("color", color);
            }
        },
        {
            key: "getCuePoints",
            value: function getCuePoints() {
                return this.get("cuePoints");
            }
        },
        {
            key: "getCurrentTime",
            value: function getCurrentTime() {
                return this.get("currentTime");
            }
        },
        {
            key: "setCurrentTime",
            value: function setCurrentTime(currentTime) {
                return this.set("currentTime", currentTime);
            }
        },
        {
            key: "getDuration",
            value: function getDuration() {
                return this.get("duration");
            }
        },
        {
            key: "getEnded",
            value: function getEnded() {
                return this.get("ended");
            }
        },
        {
            key: "getLoop",
            value: function getLoop() {
                return this.get("loop");
            }
        },
        {
            key: "setLoop",
            value: function setLoop(loop) {
                return this.set("loop", loop);
            }
        },
        {
            key: "setMuted",
            value: function setMuted(muted) {
                return this.set("muted", muted);
            }
        },
        {
            key: "getMuted",
            value: function getMuted() {
                return this.get("muted");
            }
        },
        {
            key: "getPaused",
            value: function getPaused() {
                return this.get("paused");
            }
        },
        {
            key: "getPlaybackRate",
            value: function getPlaybackRate() {
                return this.get("playbackRate");
            }
        },
        {
            key: "setPlaybackRate",
            value: function setPlaybackRate(playbackRate) {
                return this.set("playbackRate", playbackRate);
            }
        },
        {
            key: "getPlayed",
            value: function getPlayed() {
                return this.get("played");
            }
        },
        {
            key: "getQualities",
            value: function getQualities() {
                return this.get("qualities");
            }
        },
        {
            key: "getQuality",
            value: function getQuality() {
                return this.get("quality");
            }
        },
        {
            key: "setQuality",
            value: function setQuality(quality) {
                return this.set("quality", quality);
            }
        },
        {
            key: "getSeekable",
            value: function getSeekable() {
                return this.get("seekable");
            }
        },
        {
            key: "getSeeking",
            value: function getSeeking() {
                return this.get("seeking");
            }
        },
        {
            key: "getTextTracks",
            value: function getTextTracks() {
                return this.get("textTracks");
            }
        },
        {
            key: "getVideoEmbedCode",
            value: function getVideoEmbedCode() {
                return this.get("videoEmbedCode");
            }
        },
        {
            key: "getVideoId",
            value: function getVideoId() {
                return this.get("videoId");
            }
        },
        {
            key: "getVideoTitle",
            value: function getVideoTitle() {
                return this.get("videoTitle");
            }
        },
        {
            key: "getVideoWidth",
            value: function getVideoWidth() {
                return this.get("videoWidth");
            }
        },
        {
            key: "getVideoHeight",
            value: function getVideoHeight() {
                return this.get("videoHeight");
            }
        },
        {
            key: "getVideoUrl",
            value: function getVideoUrl() {
                return this.get("videoUrl");
            }
        },
        {
            key: "getVolume",
            value: function getVolume() {
                return this.get("volume");
            }
        },
        {
            key: "setVolume",
            value: function setVolume(volume) {
                return this.set("volume", volume);
            }
        }
    ]);
    return Player1;
}(); // Setup embed only if this is not a node environment
if (!isNode) {
    screenfull = initializeScreenfull();
    initializeEmbeds();
    resizeEmbeds();
    initAppendVideoMetadata();
    checkUrlTimeParam();
}
exports.default = Player;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"38Y78":[function(require,module,exports) {
module.exports = {
    "after": require("./after"),
    "ary": require("./ary"),
    "before": require("./before"),
    "bind": require("./bind"),
    "bindKey": require("./bindKey"),
    "curry": require("./curry"),
    "curryRight": require("./curryRight"),
    "debounce": require("./debounce"),
    "defer": require("./defer"),
    "delay": require("./delay"),
    "flip": require("./flip"),
    "memoize": require("./memoize"),
    "negate": require("./negate"),
    "once": require("./once"),
    "overArgs": require("./overArgs"),
    "partial": require("./partial"),
    "partialRight": require("./partialRight"),
    "rearg": require("./rearg"),
    "rest": require("./rest"),
    "spread": require("./spread"),
    "throttle": require("./throttle"),
    "unary": require("./unary"),
    "wrap": require("./wrap")
};

},{"./after":"3wXPr","./ary":"eX0eC","./before":"876o8","./bind":"5BbOI","./bindKey":"l1Idy","./curry":"2x299","./curryRight":"g10Pt","./debounce":"bv6vy","./defer":"awdF1","./delay":"5mXoh","./flip":"gisth","./memoize":"azHKC","./negate":"lLQDc","./once":"lExgj","./overArgs":"1tX4o","./partial":"cV1PV","./partialRight":"1xsRf","./rearg":"bePiz","./rest":"1IyWf","./spread":"kTeoJ","./throttle":"lAb0D","./unary":"dMn48","./wrap":"d2jW7"}],"3wXPr":[function(require,module,exports) {
var toInteger = require("./toInteger");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * The opposite of `_.before`; this method creates a function that invokes
 * `func` once it's called `n` or more times.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {number} n The number of calls before `func` is invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var saves = ['profile', 'settings'];
 *
 * var done = _.after(saves.length, function() {
 *   console.log('done saving!');
 * });
 *
 * _.forEach(saves, function(type) {
 *   asyncSave({ 'type': type, 'complete': done });
 * });
 * // => Logs 'done saving!' after the two async saves have completed.
 */ function after(n, func) {
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    n = toInteger(n);
    return function() {
        if (--n < 1) return func.apply(this, arguments);
    };
}
module.exports = after;

},{"./toInteger":"ds6ZT"}],"ds6ZT":[function(require,module,exports) {
var toFinite = require("./toFinite");
/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */ function toInteger(value) {
    var result = toFinite(value), remainder = result % 1;
    return result === result ? remainder ? result - remainder : result : 0;
}
module.exports = toInteger;

},{"./toFinite":"dkCNj"}],"dkCNj":[function(require,module,exports) {
var toNumber = require("./toNumber");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0, MAX_INTEGER = 1.7976931348623157e+308;
/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */ function toFinite(value) {
    if (!value) return value === 0 ? value : 0;
    value = toNumber(value);
    if (value === INFINITY || value === -INFINITY) {
        var sign = value < 0 ? -1 : 1;
        return sign * MAX_INTEGER;
    }
    return value === value ? value : 0;
}
module.exports = toFinite;

},{"./toNumber":"12NaH"}],"12NaH":[function(require,module,exports) {
var baseTrim = require("./_baseTrim"), isObject = require("./isObject"), isSymbol = require("./isSymbol");
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = baseTrim(value);
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = toNumber;

},{"./_baseTrim":"eUJZ3","./isObject":"cGhqJ","./isSymbol":"i3BHC"}],"eUJZ3":[function(require,module,exports) {
var trimmedEndIndex = require("./_trimmedEndIndex");
/** Used to match leading whitespace. */ var reTrimStart = /^\s+/;
/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */ function baseTrim(string) {
    return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
}
module.exports = baseTrim;

},{"./_trimmedEndIndex":"hHJmS"}],"hHJmS":[function(require,module,exports) {
/** Used to match a single whitespace character. */ var reWhitespace = /\s/;
/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */ function trimmedEndIndex(string) {
    var index = string.length;
    while(index-- && reWhitespace.test(string.charAt(index)));
    return index;
}
module.exports = trimmedEndIndex;

},{}],"cGhqJ":[function(require,module,exports) {
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */ function isObject(value) {
    var type = typeof value;
    return value != null && (type == "object" || type == "function");
}
module.exports = isObject;

},{}],"i3BHC":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
}
module.exports = isSymbol;

},{"./_baseGetTag":"lOnbo","./isObjectLike":"3BLi4"}],"lOnbo":[function(require,module,exports) {
var Symbol = require("./_Symbol"), getRawTag = require("./_getRawTag"), objectToString = require("./_objectToString");
/** `Object#toString` result references. */ var nullTag = "[object Null]", undefinedTag = "[object Undefined]";
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ function baseGetTag(value) {
    if (value == null) return value === undefined ? undefinedTag : nullTag;
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}
module.exports = baseGetTag;

},{"./_Symbol":"7lsL9","./_getRawTag":"995sO","./_objectToString":"bmE3g"}],"7lsL9":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Symbol = root.Symbol;
module.exports = Symbol;

},{"./_root":"dSYUs"}],"dSYUs":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
module.exports = root;

},{"./_freeGlobal":"kAk32"}],"kAk32":[function(require,module,exports) {
var global = arguments[3];
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
module.exports = freeGlobal;

},{}],"995sO":[function(require,module,exports) {
var Symbol = require("./_Symbol");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/** Built-in value references. */ var symToStringTag = Symbol ? Symbol.toStringTag : undefined;
/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */ function getRawTag(value) {
    var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
    try {
        value[symToStringTag] = undefined;
        var unmasked = true;
    } catch (e) {}
    var result = nativeObjectToString.call(value);
    if (unmasked) {
        if (isOwn) value[symToStringTag] = tag;
        else delete value[symToStringTag];
    }
    return result;
}
module.exports = getRawTag;

},{"./_Symbol":"7lsL9"}],"bmE3g":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var nativeObjectToString = objectProto.toString;
/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */ function objectToString(value) {
    return nativeObjectToString.call(value);
}
module.exports = objectToString;

},{}],"3BLi4":[function(require,module,exports) {
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return value != null && typeof value == "object";
}
module.exports = isObjectLike;

},{}],"eX0eC":[function(require,module,exports) {
var createWrap = require("./_createWrap");
/** Used to compose bitmasks for function metadata. */ var WRAP_ARY_FLAG = 128;
/**
 * Creates a function that invokes `func`, with up to `n` arguments,
 * ignoring any additional arguments.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @param {number} [n=func.length] The arity cap.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.ary(parseInt, 1));
 * // => [6, 8, 10]
 */ function ary(func, n, guard) {
    n = guard ? undefined : n;
    n = func && n == null ? func.length : n;
    return createWrap(func, WRAP_ARY_FLAG, undefined, undefined, undefined, undefined, n);
}
module.exports = ary;

},{"./_createWrap":"1nVn1"}],"1nVn1":[function(require,module,exports) {
var baseSetData = require("./_baseSetData"), createBind = require("./_createBind"), createCurry = require("./_createCurry"), createHybrid = require("./_createHybrid"), createPartial = require("./_createPartial"), getData = require("./_getData"), mergeData = require("./_mergeData"), setData = require("./_setData"), setWrapToString = require("./_setWrapToString"), toInteger = require("./toInteger");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * Creates a function that either curries or invokes `func` with optional
 * `this` binding and partially applied arguments.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags.
 *    1 - `_.bind`
 *    2 - `_.bindKey`
 *    4 - `_.curry` or `_.curryRight` of a bound function
 *    8 - `_.curry`
 *   16 - `_.curryRight`
 *   32 - `_.partial`
 *   64 - `_.partialRight`
 *  128 - `_.rearg`
 *  256 - `_.ary`
 *  512 - `_.flip`
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to be partially applied.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary, arity) {
    var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
    if (!isBindKey && typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var length = partials ? partials.length : 0;
    if (!length) {
        bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
        partials = holders = undefined;
    }
    ary = ary === undefined ? ary : nativeMax(toInteger(ary), 0);
    arity = arity === undefined ? arity : toInteger(arity);
    length -= holders ? holders.length : 0;
    if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
        var partialsRight = partials, holdersRight = holders;
        partials = holders = undefined;
    }
    var data = isBindKey ? undefined : getData(func);
    var newData = [
        func,
        bitmask,
        thisArg,
        partials,
        holders,
        partialsRight,
        holdersRight,
        argPos,
        ary,
        arity
    ];
    if (data) mergeData(newData, data);
    func = newData[0];
    bitmask = newData[1];
    thisArg = newData[2];
    partials = newData[3];
    holders = newData[4];
    arity = newData[9] = newData[9] === undefined ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
    if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
    if (!bitmask || bitmask == WRAP_BIND_FLAG) var result = createBind(func, bitmask, thisArg);
    else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) result = createCurry(func, bitmask, arity);
    else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) result = createPartial(func, bitmask, thisArg, partials);
    else result = createHybrid.apply(undefined, newData);
    var setter = data ? baseSetData : setData;
    return setWrapToString(setter(result, newData), func, bitmask);
}
module.exports = createWrap;

},{"./_baseSetData":"fVuYJ","./_createBind":"79dWo","./_createCurry":"cOgCX","./_createHybrid":"hSF9w","./_createPartial":"1i1ov","./_getData":"2DAAe","./_mergeData":"g1yu3","./_setData":"fSNJE","./_setWrapToString":"d5KSW","./toInteger":"ds6ZT"}],"fVuYJ":[function(require,module,exports) {
var identity = require("./identity"), metaMap = require("./_metaMap");
/**
 * The base implementation of `setData` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */ var baseSetData = !metaMap ? identity : function(func, data) {
    metaMap.set(func, data);
    return func;
};
module.exports = baseSetData;

},{"./identity":"dgTUN","./_metaMap":"aUcED"}],"dgTUN":[function(require,module,exports) {
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */ function identity(value) {
    return value;
}
module.exports = identity;

},{}],"aUcED":[function(require,module,exports) {
var WeakMap = require("./_WeakMap");
/** Used to store function metadata. */ var metaMap = WeakMap && new WeakMap;
module.exports = metaMap;

},{"./_WeakMap":"av50V"}],"av50V":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var WeakMap = getNative(root, "WeakMap");
module.exports = WeakMap;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"9PCIl":[function(require,module,exports) {
var baseIsNative = require("./_baseIsNative"), getValue = require("./_getValue");
/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */ function getNative(object, key) {
    var value = getValue(object, key);
    return baseIsNative(value) ? value : undefined;
}
module.exports = getNative;

},{"./_baseIsNative":"2U9Pn","./_getValue":"kKx5I"}],"2U9Pn":[function(require,module,exports) {
var isFunction = require("./isFunction"), isMasked = require("./_isMasked"), isObject = require("./isObject"), toSource = require("./_toSource");
/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */ var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
/** Used to detect host constructors (Safari). */ var reIsHostCtor = /^\[object .+?Constructor\]$/;
/** Used for built-in method references. */ var funcProto = Function.prototype, objectProto = Object.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Used to detect if a method is native. */ var reIsNative = RegExp("^" + funcToString.call(hasOwnProperty).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */ function baseIsNative(value) {
    if (!isObject(value) || isMasked(value)) return false;
    var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
    return pattern.test(toSource(value));
}
module.exports = baseIsNative;

},{"./isFunction":"cfti6","./_isMasked":"cMDzi","./isObject":"cGhqJ","./_toSource":"bYHc7"}],"cfti6":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObject = require("./isObject");
/** `Object#toString` result references. */ var asyncTag = "[object AsyncFunction]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", proxyTag = "[object Proxy]";
/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */ function isFunction(value) {
    if (!isObject(value)) return false;
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
module.exports = isFunction;

},{"./_baseGetTag":"lOnbo","./isObject":"cGhqJ"}],"cMDzi":[function(require,module,exports) {
var coreJsData = require("./_coreJsData");
/** Used to detect methods masquerading as native. */ var maskSrcKey = function() {
    var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
    return uid ? "Symbol(src)_1." + uid : "";
}();
/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */ function isMasked(func) {
    return !!maskSrcKey && maskSrcKey in func;
}
module.exports = isMasked;

},{"./_coreJsData":"6gJwQ"}],"6gJwQ":[function(require,module,exports) {
var root = require("./_root");
/** Used to detect overreaching core-js shims. */ var coreJsData = root["__core-js_shared__"];
module.exports = coreJsData;

},{"./_root":"dSYUs"}],"bYHc7":[function(require,module,exports) {
/** Used for built-in method references. */ var funcProto = Function.prototype;
/** Used to resolve the decompiled source of functions. */ var funcToString = funcProto.toString;
/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */ function toSource(func) {
    if (func != null) {
        try {
            return funcToString.call(func);
        } catch (e) {}
        try {
            return func + "";
        } catch (e1) {}
    }
    return "";
}
module.exports = toSource;

},{}],"kKx5I":[function(require,module,exports) {
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */ function getValue(object, key) {
    return object == null ? undefined : object[key];
}
module.exports = getValue;

},{}],"79dWo":[function(require,module,exports) {
var createCtor = require("./_createCtor"), root = require("./_root");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1;
/**
 * Creates a function that wraps `func` to invoke it with the optional `this`
 * binding of `thisArg`.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createBind(func, bitmask, thisArg) {
    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
    function wrapper() {
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return fn.apply(isBind ? thisArg : this, arguments);
    }
    return wrapper;
}
module.exports = createBind;

},{"./_createCtor":"5ihhn","./_root":"dSYUs"}],"5ihhn":[function(require,module,exports) {
var baseCreate = require("./_baseCreate"), isObject = require("./isObject");
/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */ function createCtor(Ctor) {
    return function() {
        // Use a `switch` statement to work with class constructors. See
        // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
        // for more details.
        var args = arguments;
        switch(args.length){
            case 0:
                return new Ctor;
            case 1:
                return new Ctor(args[0]);
            case 2:
                return new Ctor(args[0], args[1]);
            case 3:
                return new Ctor(args[0], args[1], args[2]);
            case 4:
                return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
                return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
                return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
        }
        var thisBinding = baseCreate(Ctor.prototype), result = Ctor.apply(thisBinding, args);
        // Mimic the constructor's `return` behavior.
        // See https://es5.github.io/#x13.2.2 for more details.
        return isObject(result) ? result : thisBinding;
    };
}
module.exports = createCtor;

},{"./_baseCreate":"ef1VZ","./isObject":"cGhqJ"}],"ef1VZ":[function(require,module,exports) {
var isObject = require("./isObject");
/** Built-in value references. */ var objectCreate = Object.create;
/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */ var baseCreate = function() {
    function object() {}
    return function(proto) {
        if (!isObject(proto)) return {};
        if (objectCreate) return objectCreate(proto);
        object.prototype = proto;
        var result = new object;
        object.prototype = undefined;
        return result;
    };
}();
module.exports = baseCreate;

},{"./isObject":"cGhqJ"}],"cOgCX":[function(require,module,exports) {
var apply = require("./_apply"), createCtor = require("./_createCtor"), createHybrid = require("./_createHybrid"), createRecurry = require("./_createRecurry"), getHolder = require("./_getHolder"), replaceHolders = require("./_replaceHolders"), root = require("./_root");
/**
 * Creates a function that wraps `func` to enable currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {number} arity The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createCurry(func, bitmask, arity) {
    var Ctor = createCtor(func);
    function wrapper() {
        var length = arguments.length, args = Array(length), index = length, placeholder = getHolder(wrapper);
        while(index--)args[index] = arguments[index];
        var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
        length -= holders.length;
        if (length < arity) return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, undefined, args, holders, undefined, undefined, arity - length);
        var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        return apply(fn, this, args);
    }
    return wrapper;
}
module.exports = createCurry;

},{"./_apply":"gUweg","./_createCtor":"5ihhn","./_createHybrid":"hSF9w","./_createRecurry":"9789e","./_getHolder":"2v0Bi","./_replaceHolders":"brLIY","./_root":"dSYUs"}],"gUweg":[function(require,module,exports) {
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */ function apply(func, thisArg, args) {
    switch(args.length){
        case 0:
            return func.call(thisArg);
        case 1:
            return func.call(thisArg, args[0]);
        case 2:
            return func.call(thisArg, args[0], args[1]);
        case 3:
            return func.call(thisArg, args[0], args[1], args[2]);
    }
    return func.apply(thisArg, args);
}
module.exports = apply;

},{}],"hSF9w":[function(require,module,exports) {
var composeArgs = require("./_composeArgs"), composeArgsRight = require("./_composeArgsRight"), countHolders = require("./_countHolders"), createCtor = require("./_createCtor"), createRecurry = require("./_createRecurry"), getHolder = require("./_getHolder"), reorder = require("./_reorder"), replaceHolders = require("./_replaceHolders"), root = require("./_root");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_ARY_FLAG = 128, WRAP_FLIP_FLAG = 512;
/**
 * Creates a function that wraps `func` to invoke it with optional `this`
 * binding of `thisArg`, partial application, and currying.
 *
 * @private
 * @param {Function|string} func The function or method name to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [partialsRight] The arguments to append to those provided
 *  to the new function.
 * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary, arity) {
    var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined : createCtor(func);
    function wrapper() {
        var length = arguments.length, args = Array(length), index = length;
        while(index--)args[index] = arguments[index];
        if (isCurried) var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
        if (partials) args = composeArgs(args, partials, holders, isCurried);
        if (partialsRight) args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
        length -= holdersCount;
        if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(func, bitmask, createHybrid, wrapper.placeholder, thisArg, args, newHolders, argPos, ary, arity - length);
        }
        var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
        length = args.length;
        if (argPos) args = reorder(args, argPos);
        else if (isFlip && length > 1) args.reverse();
        if (isAry && ary < length) args.length = ary;
        if (this && this !== root && this instanceof wrapper) fn = Ctor || createCtor(fn);
        return fn.apply(thisBinding, args);
    }
    return wrapper;
}
module.exports = createHybrid;

},{"./_composeArgs":"9Sdbk","./_composeArgsRight":"diHiW","./_countHolders":"cQl2T","./_createCtor":"5ihhn","./_createRecurry":"9789e","./_getHolder":"2v0Bi","./_reorder":"4CCWQ","./_replaceHolders":"brLIY","./_root":"dSYUs"}],"9Sdbk":[function(require,module,exports) {
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * Creates an array that is the composition of partially applied arguments,
 * placeholders, and provided arguments into a single array of arguments.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to prepend to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */ function composeArgs(args, partials, holders, isCurried) {
    var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(leftLength + rangeLength), isUncurried = !isCurried;
    while(++leftIndex < leftLength)result[leftIndex] = partials[leftIndex];
    while(++argsIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[holders[argsIndex]] = args[argsIndex];
    while(rangeLength--)result[leftIndex++] = args[argsIndex++];
    return result;
}
module.exports = composeArgs;

},{}],"diHiW":[function(require,module,exports) {
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * This function is like `composeArgs` except that the arguments composition
 * is tailored for `_.partialRight`.
 *
 * @private
 * @param {Array} args The provided arguments.
 * @param {Array} partials The arguments to append to those provided.
 * @param {Array} holders The `partials` placeholder indexes.
 * @params {boolean} [isCurried] Specify composing for a curried function.
 * @returns {Array} Returns the new array of composed arguments.
 */ function composeArgsRight(args, partials, holders, isCurried) {
    var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result = Array(rangeLength + rightLength), isUncurried = !isCurried;
    while(++argsIndex < rangeLength)result[argsIndex] = args[argsIndex];
    var offset = argsIndex;
    while(++rightIndex < rightLength)result[offset + rightIndex] = partials[rightIndex];
    while(++holdersIndex < holdersLength)if (isUncurried || argsIndex < argsLength) result[offset + holders[holdersIndex]] = args[argsIndex++];
    return result;
}
module.exports = composeArgsRight;

},{}],"cQl2T":[function(require,module,exports) {
/**
 * Gets the number of `placeholder` occurrences in `array`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} placeholder The placeholder to search for.
 * @returns {number} Returns the placeholder count.
 */ function countHolders(array, placeholder) {
    var length = array.length, result = 0;
    while(length--)if (array[length] === placeholder) ++result;
    return result;
}
module.exports = countHolders;

},{}],"9789e":[function(require,module,exports) {
var isLaziable = require("./_isLaziable"), setData = require("./_setData"), setWrapToString = require("./_setWrapToString");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64;
/**
 * Creates a function that wraps `func` to continue currying.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {Function} wrapFunc The function to create the `func` wrapper.
 * @param {*} placeholder The placeholder value.
 * @param {*} [thisArg] The `this` binding of `func`.
 * @param {Array} [partials] The arguments to prepend to those provided to
 *  the new function.
 * @param {Array} [holders] The `partials` placeholder indexes.
 * @param {Array} [argPos] The argument positions of the new function.
 * @param {number} [ary] The arity cap of `func`.
 * @param {number} [arity] The arity of `func`.
 * @returns {Function} Returns the new wrapped function.
 */ function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary, arity) {
    var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined, newHoldersRight = isCurry ? undefined : holders, newPartials = isCurry ? partials : undefined, newPartialsRight = isCurry ? undefined : partials;
    bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
    bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
    if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
    var newData = [
        func,
        bitmask,
        thisArg,
        newPartials,
        newHolders,
        newPartialsRight,
        newHoldersRight,
        argPos,
        ary,
        arity
    ];
    var result = wrapFunc.apply(undefined, newData);
    if (isLaziable(func)) setData(result, newData);
    result.placeholder = placeholder;
    return setWrapToString(result, func, bitmask);
}
module.exports = createRecurry;

},{"./_isLaziable":"g1x7m","./_setData":"fSNJE","./_setWrapToString":"d5KSW"}],"g1x7m":[function(require,module,exports) {
var LazyWrapper = require("./_LazyWrapper"), getData = require("./_getData"), getFuncName = require("./_getFuncName"), lodash = require("./wrapperLodash");
/**
 * Checks if `func` has a lazy counterpart.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
 *  else `false`.
 */ function isLaziable(func) {
    var funcName = getFuncName(func), other = lodash[funcName];
    if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) return false;
    if (func === other) return true;
    var data = getData(other);
    return !!data && func === data[0];
}
module.exports = isLaziable;

},{"./_LazyWrapper":"jPVpf","./_getData":"2DAAe","./_getFuncName":"8QrGg","./wrapperLodash":"9NCzx"}],"jPVpf":[function(require,module,exports) {
var baseCreate = require("./_baseCreate"), baseLodash = require("./_baseLodash");
/** Used as references for the maximum length and index of an array. */ var MAX_ARRAY_LENGTH = 4294967295;
/**
 * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
 *
 * @private
 * @constructor
 * @param {*} value The value to wrap.
 */ function LazyWrapper(value) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__dir__ = 1;
    this.__filtered__ = false;
    this.__iteratees__ = [];
    this.__takeCount__ = MAX_ARRAY_LENGTH;
    this.__views__ = [];
}
// Ensure `LazyWrapper` is an instance of `baseLodash`.
LazyWrapper.prototype = baseCreate(baseLodash.prototype);
LazyWrapper.prototype.constructor = LazyWrapper;
module.exports = LazyWrapper;

},{"./_baseCreate":"ef1VZ","./_baseLodash":"dVpqq"}],"dVpqq":[function(require,module,exports) {
/**
 * The function whose prototype chain sequence wrappers inherit from.
 *
 * @private
 */ function baseLodash() {
// No operation performed.
}
module.exports = baseLodash;

},{}],"2DAAe":[function(require,module,exports) {
var metaMap = require("./_metaMap"), noop = require("./noop");
/**
 * Gets metadata for `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {*} Returns the metadata for `func`.
 */ var getData = !metaMap ? noop : function(func) {
    return metaMap.get(func);
};
module.exports = getData;

},{"./_metaMap":"aUcED","./noop":"dSFAq"}],"dSFAq":[function(require,module,exports) {
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */ function noop() {
// No operation performed.
}
module.exports = noop;

},{}],"8QrGg":[function(require,module,exports) {
var realNames = require("./_realNames");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the name of `func`.
 *
 * @private
 * @param {Function} func The function to query.
 * @returns {string} Returns the function name.
 */ function getFuncName(func) {
    var result = func.name + "", array = realNames[result], length = hasOwnProperty.call(realNames, result) ? array.length : 0;
    while(length--){
        var data = array[length], otherFunc = data.func;
        if (otherFunc == null || otherFunc == func) return data.name;
    }
    return result;
}
module.exports = getFuncName;

},{"./_realNames":"3Mfyk"}],"3Mfyk":[function(require,module,exports) {
/** Used to lookup unminified function names. */ var realNames = {};
module.exports = realNames;

},{}],"9NCzx":[function(require,module,exports) {
var LazyWrapper = require("./_LazyWrapper"), LodashWrapper = require("./_LodashWrapper"), baseLodash = require("./_baseLodash"), isArray = require("./isArray"), isObjectLike = require("./isObjectLike"), wrapperClone = require("./_wrapperClone");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates a `lodash` object which wraps `value` to enable implicit method
 * chain sequences. Methods that operate on and return arrays, collections,
 * and functions can be chained together. Methods that retrieve a single value
 * or may return a primitive value will automatically end the chain sequence
 * and return the unwrapped value. Otherwise, the value must be unwrapped
 * with `_#value`.
 *
 * Explicit chain sequences, which must be unwrapped with `_#value`, may be
 * enabled using `_.chain`.
 *
 * The execution of chained methods is lazy, that is, it's deferred until
 * `_#value` is implicitly or explicitly called.
 *
 * Lazy evaluation allows several methods to support shortcut fusion.
 * Shortcut fusion is an optimization to merge iteratee calls; this avoids
 * the creation of intermediate arrays and can greatly reduce the number of
 * iteratee executions. Sections of a chain sequence qualify for shortcut
 * fusion if the section is applied to an array and iteratees accept only
 * one argument. The heuristic for whether a section qualifies for shortcut
 * fusion is subject to change.
 *
 * Chaining is supported in custom builds as long as the `_#value` method is
 * directly or indirectly included in the build.
 *
 * In addition to lodash methods, wrappers have `Array` and `String` methods.
 *
 * The wrapper `Array` methods are:
 * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
 *
 * The wrapper `String` methods are:
 * `replace` and `split`
 *
 * The wrapper methods that support shortcut fusion are:
 * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
 * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
 * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
 *
 * The chainable wrapper methods are:
 * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
 * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
 * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
 * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
 * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
 * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
 * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
 * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
 * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
 * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
 * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
 * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
 * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
 * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
 * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
 * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
 * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
 * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
 * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
 * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
 * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
 * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
 * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
 * `zipObject`, `zipObjectDeep`, and `zipWith`
 *
 * The wrapper methods that are **not** chainable by default are:
 * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
 * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
 * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
 * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
 * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
 * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
 * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
 * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
 * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
 * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
 * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
 * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
 * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
 * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
 * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
 * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
 * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
 * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
 * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
 * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
 * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
 * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
 * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
 * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
 * `upperFirst`, `value`, and `words`
 *
 * @name _
 * @constructor
 * @category Seq
 * @param {*} value The value to wrap in a `lodash` instance.
 * @returns {Object} Returns the new `lodash` wrapper instance.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var wrapped = _([1, 2, 3]);
 *
 * // Returns an unwrapped value.
 * wrapped.reduce(_.add);
 * // => 6
 *
 * // Returns a wrapped value.
 * var squares = wrapped.map(square);
 *
 * _.isArray(squares);
 * // => false
 *
 * _.isArray(squares.value());
 * // => true
 */ function lodash(value) {
    if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
        if (value instanceof LodashWrapper) return value;
        if (hasOwnProperty.call(value, "__wrapped__")) return wrapperClone(value);
    }
    return new LodashWrapper(value);
}
// Ensure wrappers are instances of `baseLodash`.
lodash.prototype = baseLodash.prototype;
lodash.prototype.constructor = lodash;
module.exports = lodash;

},{"./_LazyWrapper":"jPVpf","./_LodashWrapper":"32oxQ","./_baseLodash":"dVpqq","./isArray":"dZaTH","./isObjectLike":"3BLi4","./_wrapperClone":"357TO"}],"32oxQ":[function(require,module,exports) {
var baseCreate = require("./_baseCreate"), baseLodash = require("./_baseLodash");
/**
 * The base constructor for creating `lodash` wrapper objects.
 *
 * @private
 * @param {*} value The value to wrap.
 * @param {boolean} [chainAll] Enable explicit method chain sequences.
 */ function LodashWrapper(value, chainAll) {
    this.__wrapped__ = value;
    this.__actions__ = [];
    this.__chain__ = !!chainAll;
    this.__index__ = 0;
    this.__values__ = undefined;
}
LodashWrapper.prototype = baseCreate(baseLodash.prototype);
LodashWrapper.prototype.constructor = LodashWrapper;
module.exports = LodashWrapper;

},{"./_baseCreate":"ef1VZ","./_baseLodash":"dVpqq"}],"dZaTH":[function(require,module,exports) {
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */ var isArray = Array.isArray;
module.exports = isArray;

},{}],"357TO":[function(require,module,exports) {
var LazyWrapper = require("./_LazyWrapper"), LodashWrapper = require("./_LodashWrapper"), copyArray = require("./_copyArray");
/**
 * Creates a clone of `wrapper`.
 *
 * @private
 * @param {Object} wrapper The wrapper to clone.
 * @returns {Object} Returns the cloned wrapper.
 */ function wrapperClone(wrapper) {
    if (wrapper instanceof LazyWrapper) return wrapper.clone();
    var result = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
    result.__actions__ = copyArray(wrapper.__actions__);
    result.__index__ = wrapper.__index__;
    result.__values__ = wrapper.__values__;
    return result;
}
module.exports = wrapperClone;

},{"./_LazyWrapper":"jPVpf","./_LodashWrapper":"32oxQ","./_copyArray":"jJ8fu"}],"jJ8fu":[function(require,module,exports) {
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */ function copyArray(source, array) {
    var index = -1, length = source.length;
    array || (array = Array(length));
    while(++index < length)array[index] = source[index];
    return array;
}
module.exports = copyArray;

},{}],"fSNJE":[function(require,module,exports) {
var baseSetData = require("./_baseSetData"), shortOut = require("./_shortOut");
/**
 * Sets metadata for `func`.
 *
 * **Note:** If this function becomes hot, i.e. is invoked a lot in a short
 * period of time, it will trip its breaker and transition to an identity
 * function to avoid garbage collection pauses in V8. See
 * [V8 issue 2070](https://bugs.chromium.org/p/v8/issues/detail?id=2070)
 * for more details.
 *
 * @private
 * @param {Function} func The function to associate metadata with.
 * @param {*} data The metadata.
 * @returns {Function} Returns `func`.
 */ var setData = shortOut(baseSetData);
module.exports = setData;

},{"./_baseSetData":"fVuYJ","./_shortOut":"7ulLs"}],"7ulLs":[function(require,module,exports) {
/** Used to detect hot functions by number of calls within a span of milliseconds. */ var HOT_COUNT = 800, HOT_SPAN = 16;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeNow = Date.now;
/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */ function shortOut(func) {
    var count = 0, lastCalled = 0;
    return function() {
        var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
        lastCalled = stamp;
        if (remaining > 0) {
            if (++count >= HOT_COUNT) return arguments[0];
        } else count = 0;
        return func.apply(undefined, arguments);
    };
}
module.exports = shortOut;

},{}],"d5KSW":[function(require,module,exports) {
var getWrapDetails = require("./_getWrapDetails"), insertWrapDetails = require("./_insertWrapDetails"), setToString = require("./_setToString"), updateWrapDetails = require("./_updateWrapDetails");
/**
 * Sets the `toString` method of `wrapper` to mimic the source of `reference`
 * with wrapper details in a comment at the top of the source body.
 *
 * @private
 * @param {Function} wrapper The function to modify.
 * @param {Function} reference The reference function.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Function} Returns `wrapper`.
 */ function setWrapToString(wrapper, reference, bitmask) {
    var source = reference + "";
    return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
}
module.exports = setWrapToString;

},{"./_getWrapDetails":"7sncX","./_insertWrapDetails":"56G4F","./_setToString":"b5kjI","./_updateWrapDetails":"jyT8K"}],"7sncX":[function(require,module,exports) {
/** Used to match wrap detail comments. */ var reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
/**
 * Extracts wrapper details from the `source` body comment.
 *
 * @private
 * @param {string} source The source to inspect.
 * @returns {Array} Returns the wrapper details.
 */ function getWrapDetails(source) {
    var match = source.match(reWrapDetails);
    return match ? match[1].split(reSplitDetails) : [];
}
module.exports = getWrapDetails;

},{}],"56G4F":[function(require,module,exports) {
/** Used to match wrap detail comments. */ var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
/**
 * Inserts wrapper `details` in a comment at the top of the `source` body.
 *
 * @private
 * @param {string} source The source to modify.
 * @returns {Array} details The details to insert.
 * @returns {string} Returns the modified source.
 */ function insertWrapDetails(source, details) {
    var length = details.length;
    if (!length) return source;
    var lastIndex = length - 1;
    details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
    details = details.join(length > 2 ? ", " : " ");
    return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
}
module.exports = insertWrapDetails;

},{}],"b5kjI":[function(require,module,exports) {
var baseSetToString = require("./_baseSetToString"), shortOut = require("./_shortOut");
/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var setToString = shortOut(baseSetToString);
module.exports = setToString;

},{"./_baseSetToString":"lgihM","./_shortOut":"7ulLs"}],"lgihM":[function(require,module,exports) {
var constant = require("./constant"), defineProperty = require("./_defineProperty"), identity = require("./identity");
/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */ var baseSetToString = !defineProperty ? identity : function(func, string) {
    return defineProperty(func, "toString", {
        "configurable": true,
        "enumerable": false,
        "value": constant(string),
        "writable": true
    });
};
module.exports = baseSetToString;

},{"./constant":"1HI6K","./_defineProperty":"cZOnw","./identity":"dgTUN"}],"1HI6K":[function(require,module,exports) {
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */ function constant(value) {
    return function() {
        return value;
    };
}
module.exports = constant;

},{}],"cZOnw":[function(require,module,exports) {
var getNative = require("./_getNative");
var defineProperty = function() {
    try {
        var func = getNative(Object, "defineProperty");
        func({}, "", {});
        return func;
    } catch (e) {}
}();
module.exports = defineProperty;

},{"./_getNative":"9PCIl"}],"jyT8K":[function(require,module,exports) {
var arrayEach = require("./_arrayEach"), arrayIncludes = require("./_arrayIncludes");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
/** Used to associate wrap methods with their bit flags. */ var wrapFlags = [
    [
        "ary",
        WRAP_ARY_FLAG
    ],
    [
        "bind",
        WRAP_BIND_FLAG
    ],
    [
        "bindKey",
        WRAP_BIND_KEY_FLAG
    ],
    [
        "curry",
        WRAP_CURRY_FLAG
    ],
    [
        "curryRight",
        WRAP_CURRY_RIGHT_FLAG
    ],
    [
        "flip",
        WRAP_FLIP_FLAG
    ],
    [
        "partial",
        WRAP_PARTIAL_FLAG
    ],
    [
        "partialRight",
        WRAP_PARTIAL_RIGHT_FLAG
    ],
    [
        "rearg",
        WRAP_REARG_FLAG
    ]
];
/**
 * Updates wrapper `details` based on `bitmask` flags.
 *
 * @private
 * @returns {Array} details The details to modify.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @returns {Array} Returns `details`.
 */ function updateWrapDetails(details, bitmask) {
    arrayEach(wrapFlags, function(pair) {
        var value = "_." + pair[0];
        if (bitmask & pair[1] && !arrayIncludes(details, value)) details.push(value);
    });
    return details.sort();
}
module.exports = updateWrapDetails;

},{"./_arrayEach":"kMhnH","./_arrayIncludes":"kfd3F"}],"kMhnH":[function(require,module,exports) {
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */ function arrayEach(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (iteratee(array[index], index, array) === false) break;
    }
    return array;
}
module.exports = arrayEach;

},{}],"kfd3F":[function(require,module,exports) {
var baseIndexOf = require("./_baseIndexOf");
/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */ function arrayIncludes(array, value) {
    var length = array == null ? 0 : array.length;
    return !!length && baseIndexOf(array, value, 0) > -1;
}
module.exports = arrayIncludes;

},{"./_baseIndexOf":"8NgWU"}],"8NgWU":[function(require,module,exports) {
var baseFindIndex = require("./_baseFindIndex"), baseIsNaN = require("./_baseIsNaN"), strictIndexOf = require("./_strictIndexOf");
/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}
module.exports = baseIndexOf;

},{"./_baseFindIndex":"630D7","./_baseIsNaN":"47cqG","./_strictIndexOf":"8MeE0"}],"630D7":[function(require,module,exports) {
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function baseFindIndex(array, predicate, fromIndex, fromRight) {
    var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
    while(fromRight ? index-- : ++index < length){
        if (predicate(array[index], index, array)) return index;
    }
    return -1;
}
module.exports = baseFindIndex;

},{}],"47cqG":[function(require,module,exports) {
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */ function baseIsNaN(value) {
    return value !== value;
}
module.exports = baseIsNaN;

},{}],"8MeE0":[function(require,module,exports) {
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function strictIndexOf(array, value, fromIndex) {
    var index = fromIndex - 1, length = array.length;
    while(++index < length){
        if (array[index] === value) return index;
    }
    return -1;
}
module.exports = strictIndexOf;

},{}],"2v0Bi":[function(require,module,exports) {
/**
 * Gets the argument placeholder value for `func`.
 *
 * @private
 * @param {Function} func The function to inspect.
 * @returns {*} Returns the placeholder value.
 */ function getHolder(func) {
    var object = func;
    return object.placeholder;
}
module.exports = getHolder;

},{}],"4CCWQ":[function(require,module,exports) {
var copyArray = require("./_copyArray"), isIndex = require("./_isIndex");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMin = Math.min;
/**
 * Reorder `array` according to the specified indexes where the element at
 * the first index is assigned as the first element, the element at
 * the second index is assigned as the second element, and so on.
 *
 * @private
 * @param {Array} array The array to reorder.
 * @param {Array} indexes The arranged array indexes.
 * @returns {Array} Returns `array`.
 */ function reorder(array, indexes) {
    var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
    while(length--){
        var index = indexes[length];
        array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined;
    }
    return array;
}
module.exports = reorder;

},{"./_copyArray":"jJ8fu","./_isIndex":"aJpx0"}],"aJpx0":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/** Used to detect unsigned integer values. */ var reIsUint = /^(?:0|[1-9]\d*)$/;
/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */ function isIndex(value, length) {
    var type = typeof value;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}
module.exports = isIndex;

},{}],"brLIY":[function(require,module,exports) {
/** Used as the internal argument placeholder. */ var PLACEHOLDER = "__lodash_placeholder__";
/**
 * Replaces all `placeholder` elements in `array` with an internal placeholder
 * and returns an array of their indexes.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {*} placeholder The placeholder to replace.
 * @returns {Array} Returns the new array of placeholder indexes.
 */ function replaceHolders(array, placeholder) {
    var index = -1, length = array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
            array[index] = PLACEHOLDER;
            result[resIndex++] = index;
        }
    }
    return result;
}
module.exports = replaceHolders;

},{}],"1i1ov":[function(require,module,exports) {
var apply = require("./_apply"), createCtor = require("./_createCtor"), root = require("./_root");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1;
/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */ function createPartial(func, bitmask, thisArg, partials) {
    var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
    function wrapper() {
        var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
        while(++leftIndex < leftLength)args[leftIndex] = partials[leftIndex];
        while(argsLength--)args[leftIndex++] = arguments[++argsIndex];
        return apply(fn, isBind ? thisArg : this, args);
    }
    return wrapper;
}
module.exports = createPartial;

},{"./_apply":"gUweg","./_createCtor":"5ihhn","./_root":"dSYUs"}],"g1yu3":[function(require,module,exports) {
var composeArgs = require("./_composeArgs"), composeArgsRight = require("./_composeArgsRight"), replaceHolders = require("./_replaceHolders");
/** Used as the internal argument placeholder. */ var PLACEHOLDER = "__lodash_placeholder__";
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMin = Math.min;
/**
 * Merges the function metadata of `source` into `data`.
 *
 * Merging metadata reduces the number of wrappers used to invoke a function.
 * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
 * may be applied regardless of execution order. Methods like `_.ary` and
 * `_.rearg` modify function arguments, making the order in which they are
 * executed important, preventing the merging of metadata. However, we make
 * an exception for a safe combined case where curried functions have `_.ary`
 * and or `_.rearg` applied.
 *
 * @private
 * @param {Array} data The destination metadata.
 * @param {Array} source The source metadata.
 * @returns {Array} Returns `data`.
 */ function mergeData(data, source) {
    var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
    var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
    // Exit early if metadata can't be merged.
    if (!(isCommon || isCombo)) return data;
    // Use source `thisArg` if available.
    if (srcBitmask & WRAP_BIND_FLAG) {
        data[2] = source[2];
        // Set when currying a bound function.
        newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
    }
    // Compose partial arguments.
    var value = source[3];
    if (value) {
        var partials = data[3];
        data[3] = partials ? composeArgs(partials, value, source[4]) : value;
        data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
    }
    // Compose partial right arguments.
    value = source[5];
    if (value) {
        partials = data[5];
        data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
        data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
    }
    // Use source `argPos` if available.
    value = source[7];
    if (value) data[7] = value;
    // Use source `ary` if it's smaller.
    if (srcBitmask & WRAP_ARY_FLAG) data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
    // Use source `arity` if one is not provided.
    if (data[9] == null) data[9] = source[9];
    // Use source `func` and merge bitmasks.
    data[0] = source[0];
    data[1] = newBitmask;
    return data;
}
module.exports = mergeData;

},{"./_composeArgs":"9Sdbk","./_composeArgsRight":"diHiW","./_replaceHolders":"brLIY"}],"876o8":[function(require,module,exports) {
var toInteger = require("./toInteger");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that invokes `func`, with the `this` binding and arguments
 * of the created function, while it's called less than `n` times. Subsequent
 * calls to the created function return the result of the last `func` invocation.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {number} n The number of calls at which `func` is no longer invoked.
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * jQuery(element).on('click', _.before(5, addContactToList));
 * // => Allows adding up to 4 contacts to the list.
 */ function before(n, func) {
    var result;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    n = toInteger(n);
    return function() {
        if (--n > 0) result = func.apply(this, arguments);
        if (n <= 1) func = undefined;
        return result;
    };
}
module.exports = before;

},{"./toInteger":"ds6ZT"}],"5BbOI":[function(require,module,exports) {
var baseRest = require("./_baseRest"), createWrap = require("./_createWrap"), getHolder = require("./_getHolder"), replaceHolders = require("./_replaceHolders");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_PARTIAL_FLAG = 32;
/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */ var bind = baseRest(function(func, thisArg, partials) {
    var bitmask = WRAP_BIND_FLAG;
    if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bind));
        bitmask |= WRAP_PARTIAL_FLAG;
    }
    return createWrap(func, bitmask, thisArg, partials, holders);
});
// Assign default placeholders.
bind.placeholder = {};
module.exports = bind;

},{"./_baseRest":"kd260","./_createWrap":"1nVn1","./_getHolder":"2v0Bi","./_replaceHolders":"brLIY"}],"kd260":[function(require,module,exports) {
var identity = require("./identity"), overRest = require("./_overRest"), setToString = require("./_setToString");
/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */ function baseRest(func, start) {
    return setToString(overRest(func, start, identity), func + "");
}
module.exports = baseRest;

},{"./identity":"dgTUN","./_overRest":"16F1z","./_setToString":"b5kjI"}],"16F1z":[function(require,module,exports) {
var apply = require("./_apply");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */ function overRest(func, start, transform) {
    start = nativeMax(start === undefined ? func.length - 1 : start, 0);
    return function() {
        var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array(length);
        while(++index < length)array[index] = args[start + index];
        index = -1;
        var otherArgs = Array(start + 1);
        while(++index < start)otherArgs[index] = args[index];
        otherArgs[start] = transform(array);
        return apply(func, this, otherArgs);
    };
}
module.exports = overRest;

},{"./_apply":"gUweg"}],"l1Idy":[function(require,module,exports) {
var baseRest = require("./_baseRest"), createWrap = require("./_createWrap"), getHolder = require("./_getHolder"), replaceHolders = require("./_replaceHolders");
/** Used to compose bitmasks for function metadata. */ var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_PARTIAL_FLAG = 32;
/**
 * Creates a function that invokes the method at `object[key]` with `partials`
 * prepended to the arguments it receives.
 *
 * This method differs from `_.bind` by allowing bound functions to reference
 * methods that may be redefined or don't yet exist. See
 * [Peter Michaux's article](http://peter.michaux.ca/articles/lazy-function-definition-pattern)
 * for more details.
 *
 * The `_.bindKey.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * @static
 * @memberOf _
 * @since 0.10.0
 * @category Function
 * @param {Object} object The object to invoke the method on.
 * @param {string} key The key of the method.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * var object = {
 *   'user': 'fred',
 *   'greet': function(greeting, punctuation) {
 *     return greeting + ' ' + this.user + punctuation;
 *   }
 * };
 *
 * var bound = _.bindKey(object, 'greet', 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * object.greet = function(greeting, punctuation) {
 *   return greeting + 'ya ' + this.user + punctuation;
 * };
 *
 * bound('!');
 * // => 'hiya fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bindKey(object, 'greet', _, '!');
 * bound('hi');
 * // => 'hiya fred!'
 */ var bindKey = baseRest(function(object, key, partials) {
    var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
    if (partials.length) {
        var holders = replaceHolders(partials, getHolder(bindKey));
        bitmask |= WRAP_PARTIAL_FLAG;
    }
    return createWrap(key, bitmask, object, partials, holders);
});
// Assign default placeholders.
bindKey.placeholder = {};
module.exports = bindKey;

},{"./_baseRest":"kd260","./_createWrap":"1nVn1","./_getHolder":"2v0Bi","./_replaceHolders":"brLIY"}],"2x299":[function(require,module,exports) {
var createWrap = require("./_createWrap");
/** Used to compose bitmasks for function metadata. */ var WRAP_CURRY_FLAG = 8;
/**
 * Creates a function that accepts arguments of `func` and either invokes
 * `func` returning its result, if at least `arity` number of arguments have
 * been provided, or returns a function that accepts the remaining `func`
 * arguments, and so on. The arity of `func` may be specified if `func.length`
 * is not sufficient.
 *
 * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 2.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curry(abc);
 *
 * curried(1)(2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2)(3);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(1)(_, 3)(2);
 * // => [1, 2, 3]
 */ function curry(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrap(func, WRAP_CURRY_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curry.placeholder;
    return result;
}
// Assign default placeholders.
curry.placeholder = {};
module.exports = curry;

},{"./_createWrap":"1nVn1"}],"g10Pt":[function(require,module,exports) {
var createWrap = require("./_createWrap");
/** Used to compose bitmasks for function metadata. */ var WRAP_CURRY_RIGHT_FLAG = 16;
/**
 * This method is like `_.curry` except that arguments are applied to `func`
 * in the manner of `_.partialRight` instead of `_.partial`.
 *
 * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for provided arguments.
 *
 * **Note:** This method doesn't set the "length" property of curried functions.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to curry.
 * @param {number} [arity=func.length] The arity of `func`.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Function} Returns the new curried function.
 * @example
 *
 * var abc = function(a, b, c) {
 *   return [a, b, c];
 * };
 *
 * var curried = _.curryRight(abc);
 *
 * curried(3)(2)(1);
 * // => [1, 2, 3]
 *
 * curried(2, 3)(1);
 * // => [1, 2, 3]
 *
 * curried(1, 2, 3);
 * // => [1, 2, 3]
 *
 * // Curried with placeholders.
 * curried(3)(1, _)(2);
 * // => [1, 2, 3]
 */ function curryRight(func, arity, guard) {
    arity = guard ? undefined : arity;
    var result = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined, undefined, undefined, undefined, undefined, arity);
    result.placeholder = curryRight.placeholder;
    return result;
}
// Assign default placeholders.
curryRight.placeholder = {};
module.exports = curryRight;

},{"./_createWrap":"1nVn1"}],"bv6vy":[function(require,module,exports) {
var isObject = require("./isObject"), now = require("./now"), toNumber = require("./toNumber");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
        return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                clearTimeout(timerId);
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
module.exports = debounce;

},{"./isObject":"cGhqJ","./now":"kOH6e","./toNumber":"12NaH"}],"kOH6e":[function(require,module,exports) {
var root = require("./_root");
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
module.exports = now;

},{"./_root":"dSYUs"}],"awdF1":[function(require,module,exports) {
var baseDelay = require("./_baseDelay"), baseRest = require("./_baseRest");
/**
 * Defers invoking the `func` until the current call stack has cleared. Any
 * additional arguments are provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to defer.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.defer(function(text) {
 *   console.log(text);
 * }, 'deferred');
 * // => Logs 'deferred' after one millisecond.
 */ var defer = baseRest(function(func, args) {
    return baseDelay(func, 1, args);
});
module.exports = defer;

},{"./_baseDelay":"arsFr","./_baseRest":"kd260"}],"arsFr":[function(require,module,exports) {
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * The base implementation of `_.delay` and `_.defer` which accepts `args`
 * to provide to `func`.
 *
 * @private
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {Array} args The arguments to provide to `func`.
 * @returns {number|Object} Returns the timer id or timeout object.
 */ function baseDelay(func, wait, args) {
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    return setTimeout(function() {
        func.apply(undefined, args);
    }, wait);
}
module.exports = baseDelay;

},{}],"5mXoh":[function(require,module,exports) {
var baseDelay = require("./_baseDelay"), baseRest = require("./_baseRest"), toNumber = require("./toNumber");
/**
 * Invokes `func` after `wait` milliseconds. Any additional arguments are
 * provided to `func` when it's invoked.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to delay.
 * @param {number} wait The number of milliseconds to delay invocation.
 * @param {...*} [args] The arguments to invoke `func` with.
 * @returns {number} Returns the timer id.
 * @example
 *
 * _.delay(function(text) {
 *   console.log(text);
 * }, 1000, 'later');
 * // => Logs 'later' after one second.
 */ var delay = baseRest(function(func, wait, args) {
    return baseDelay(func, toNumber(wait) || 0, args);
});
module.exports = delay;

},{"./_baseDelay":"arsFr","./_baseRest":"kd260","./toNumber":"12NaH"}],"gisth":[function(require,module,exports) {
var createWrap = require("./_createWrap");
/** Used to compose bitmasks for function metadata. */ var WRAP_FLIP_FLAG = 512;
/**
 * Creates a function that invokes `func` with arguments reversed.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to flip arguments for.
 * @returns {Function} Returns the new flipped function.
 * @example
 *
 * var flipped = _.flip(function() {
 *   return _.toArray(arguments);
 * });
 *
 * flipped('a', 'b', 'c', 'd');
 * // => ['d', 'c', 'b', 'a']
 */ function flip(func) {
    return createWrap(func, WRAP_FLIP_FLAG);
}
module.exports = flip;

},{"./_createWrap":"1nVn1"}],"azHKC":[function(require,module,exports) {
var MapCache = require("./_MapCache");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */ function memoize(func, resolver) {
    if (typeof func != "function" || resolver != null && typeof resolver != "function") throw new TypeError(FUNC_ERROR_TEXT);
    var memoized = function() {
        var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
        if (cache.has(key)) return cache.get(key);
        var result = func.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
    memoized.cache = new (memoize.Cache || MapCache);
    return memoized;
}
// Expose `MapCache`.
memoize.Cache = MapCache;
module.exports = memoize;

},{"./_MapCache":"664I1"}],"664I1":[function(require,module,exports) {
var mapCacheClear = require("./_mapCacheClear"), mapCacheDelete = require("./_mapCacheDelete"), mapCacheGet = require("./_mapCacheGet"), mapCacheHas = require("./_mapCacheHas"), mapCacheSet = require("./_mapCacheSet");
/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function MapCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype["delete"] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;
module.exports = MapCache;

},{"./_mapCacheClear":"7kHs4","./_mapCacheDelete":"4ny9y","./_mapCacheGet":"gVeFY","./_mapCacheHas":"idSOY","./_mapCacheSet":"lXUJT"}],"7kHs4":[function(require,module,exports) {
var Hash = require("./_Hash"), ListCache = require("./_ListCache"), Map = require("./_Map");
/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */ function mapCacheClear() {
    this.size = 0;
    this.__data__ = {
        "hash": new Hash,
        "map": new (Map || ListCache),
        "string": new Hash
    };
}
module.exports = mapCacheClear;

},{"./_Hash":"jFMT5","./_ListCache":"3UZeo","./_Map":"8YjF4"}],"jFMT5":[function(require,module,exports) {
var hashClear = require("./_hashClear"), hashDelete = require("./_hashDelete"), hashGet = require("./_hashGet"), hashHas = require("./_hashHas"), hashSet = require("./_hashSet");
/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Hash(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype["delete"] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;
module.exports = Hash;

},{"./_hashClear":"f2NRo","./_hashDelete":"cCdgz","./_hashGet":"eKqTO","./_hashHas":"ghnqP","./_hashSet":"6i99R"}],"f2NRo":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */ function hashClear() {
    this.__data__ = nativeCreate ? nativeCreate(null) : {};
    this.size = 0;
}
module.exports = hashClear;

},{"./_nativeCreate":"6i8Uf"}],"6i8Uf":[function(require,module,exports) {
var getNative = require("./_getNative");
/* Built-in method references that are verified to be native. */ var nativeCreate = getNative(Object, "create");
module.exports = nativeCreate;

},{"./_getNative":"9PCIl"}],"cCdgz":[function(require,module,exports) {
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function hashDelete(key) {
    var result = this.has(key) && delete this.__data__[key];
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = hashDelete;

},{}],"eKqTO":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function hashGet(key) {
    var data = this.__data__;
    if (nativeCreate) {
        var result = data[key];
        return result === HASH_UNDEFINED ? undefined : result;
    }
    return hasOwnProperty.call(data, key) ? data[key] : undefined;
}
module.exports = hashGet;

},{"./_nativeCreate":"6i8Uf"}],"ghnqP":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function hashHas(key) {
    var data = this.__data__;
    return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}
module.exports = hashHas;

},{"./_nativeCreate":"6i8Uf"}],"6i99R":[function(require,module,exports) {
var nativeCreate = require("./_nativeCreate");
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */ function hashSet(key, value) {
    var data = this.__data__;
    this.size += this.has(key) ? 0 : 1;
    data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
    return this;
}
module.exports = hashSet;

},{"./_nativeCreate":"6i8Uf"}],"3UZeo":[function(require,module,exports) {
var listCacheClear = require("./_listCacheClear"), listCacheDelete = require("./_listCacheDelete"), listCacheGet = require("./_listCacheGet"), listCacheHas = require("./_listCacheHas"), listCacheSet = require("./_listCacheSet");
/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function ListCache(entries) {
    var index = -1, length = entries == null ? 0 : entries.length;
    this.clear();
    while(++index < length){
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}
// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype["delete"] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;
module.exports = ListCache;

},{"./_listCacheClear":"7AKQv","./_listCacheDelete":"j2Z5O","./_listCacheGet":"6Zrrs","./_listCacheHas":"i1CBK","./_listCacheSet":"2Rcur"}],"7AKQv":[function(require,module,exports) {
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */ function listCacheClear() {
    this.__data__ = [];
    this.size = 0;
}
module.exports = listCacheClear;

},{}],"j2Z5O":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/** Used for built-in method references. */ var arrayProto = Array.prototype;
/** Built-in value references. */ var splice = arrayProto.splice;
/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function listCacheDelete(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) return false;
    var lastIndex = data.length - 1;
    if (index == lastIndex) data.pop();
    else splice.call(data, index, 1);
    --this.size;
    return true;
}
module.exports = listCacheDelete;

},{"./_assocIndexOf":"cRVsl"}],"cRVsl":[function(require,module,exports) {
var eq = require("./eq");
/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */ function assocIndexOf(array, key) {
    var length = array.length;
    while(length--){
        if (eq(array[length][0], key)) return length;
    }
    return -1;
}
module.exports = assocIndexOf;

},{"./eq":"aVz5f"}],"aVz5f":[function(require,module,exports) {
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */ function eq(value, other) {
    return value === other || value !== value && other !== other;
}
module.exports = eq;

},{}],"6Zrrs":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function listCacheGet(key) {
    var data = this.__data__, index = assocIndexOf(data, key);
    return index < 0 ? undefined : data[index][1];
}
module.exports = listCacheGet;

},{"./_assocIndexOf":"cRVsl"}],"i1CBK":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function listCacheHas(key) {
    return assocIndexOf(this.__data__, key) > -1;
}
module.exports = listCacheHas;

},{"./_assocIndexOf":"cRVsl"}],"2Rcur":[function(require,module,exports) {
var assocIndexOf = require("./_assocIndexOf");
/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */ function listCacheSet(key, value) {
    var data = this.__data__, index = assocIndexOf(data, key);
    if (index < 0) {
        ++this.size;
        data.push([
            key,
            value
        ]);
    } else data[index][1] = value;
    return this;
}
module.exports = listCacheSet;

},{"./_assocIndexOf":"cRVsl"}],"8YjF4":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Map = getNative(root, "Map");
module.exports = Map;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"4ny9y":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function mapCacheDelete(key) {
    var result = getMapData(this, key)["delete"](key);
    this.size -= result ? 1 : 0;
    return result;
}
module.exports = mapCacheDelete;

},{"./_getMapData":"aptgk"}],"aptgk":[function(require,module,exports) {
var isKeyable = require("./_isKeyable");
/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */ function getMapData(map, key) {
    var data = map.__data__;
    return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
module.exports = getMapData;

},{"./_isKeyable":"icylN"}],"icylN":[function(require,module,exports) {
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */ function isKeyable(value) {
    var type = typeof value;
    return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
module.exports = isKeyable;

},{}],"gVeFY":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function mapCacheGet(key) {
    return getMapData(this, key).get(key);
}
module.exports = mapCacheGet;

},{"./_getMapData":"aptgk"}],"idSOY":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function mapCacheHas(key) {
    return getMapData(this, key).has(key);
}
module.exports = mapCacheHas;

},{"./_getMapData":"aptgk"}],"lXUJT":[function(require,module,exports) {
var getMapData = require("./_getMapData");
/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */ function mapCacheSet(key, value) {
    var data = getMapData(this, key), size = data.size;
    data.set(key, value);
    this.size += data.size == size ? 0 : 1;
    return this;
}
module.exports = mapCacheSet;

},{"./_getMapData":"aptgk"}],"lLQDc":[function(require,module,exports) {
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that negates the result of the predicate `func`. The
 * `func` predicate is invoked with the `this` binding and arguments of the
 * created function.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} predicate The predicate to negate.
 * @returns {Function} Returns the new negated function.
 * @example
 *
 * function isEven(n) {
 *   return n % 2 == 0;
 * }
 *
 * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
 * // => [1, 3, 5]
 */ function negate(predicate) {
    if (typeof predicate != "function") throw new TypeError(FUNC_ERROR_TEXT);
    return function() {
        var args = arguments;
        switch(args.length){
            case 0:
                return !predicate.call(this);
            case 1:
                return !predicate.call(this, args[0]);
            case 2:
                return !predicate.call(this, args[0], args[1]);
            case 3:
                return !predicate.call(this, args[0], args[1], args[2]);
        }
        return !predicate.apply(this, args);
    };
}
module.exports = negate;

},{}],"lExgj":[function(require,module,exports) {
var before = require("./before");
/**
 * Creates a function that is restricted to invoking `func` once. Repeat calls
 * to the function return the value of the first invocation. The `func` is
 * invoked with the `this` binding and arguments of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new restricted function.
 * @example
 *
 * var initialize = _.once(createApplication);
 * initialize();
 * initialize();
 * // => `createApplication` is invoked once
 */ function once(func) {
    return before(2, func);
}
module.exports = once;

},{"./before":"876o8"}],"1tX4o":[function(require,module,exports) {
var apply = require("./_apply"), arrayMap = require("./_arrayMap"), baseFlatten = require("./_baseFlatten"), baseIteratee = require("./_baseIteratee"), baseRest = require("./_baseRest"), baseUnary = require("./_baseUnary"), castRest = require("./_castRest"), isArray = require("./isArray");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMin = Math.min;
/**
 * Creates a function that invokes `func` with its arguments transformed.
 *
 * @static
 * @since 4.0.0
 * @memberOf _
 * @category Function
 * @param {Function} func The function to wrap.
 * @param {...(Function|Function[])} [transforms=[_.identity]]
 *  The argument transforms.
 * @returns {Function} Returns the new function.
 * @example
 *
 * function doubled(n) {
 *   return n * 2;
 * }
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * var func = _.overArgs(function(x, y) {
 *   return [x, y];
 * }, [square, doubled]);
 *
 * func(9, 3);
 * // => [81, 6]
 *
 * func(10, 5);
 * // => [100, 10]
 */ var overArgs = castRest(function(func, transforms) {
    transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(baseIteratee)) : arrayMap(baseFlatten(transforms, 1), baseUnary(baseIteratee));
    var funcsLength = transforms.length;
    return baseRest(function(args) {
        var index = -1, length = nativeMin(args.length, funcsLength);
        while(++index < length)args[index] = transforms[index].call(this, args[index]);
        return apply(func, this, args);
    });
});
module.exports = overArgs;

},{"./_apply":"gUweg","./_arrayMap":"imI5Z","./_baseFlatten":"60rt9","./_baseIteratee":"2fsgg","./_baseRest":"kd260","./_baseUnary":"eJXq4","./_castRest":"hknU0","./isArray":"dZaTH"}],"imI5Z":[function(require,module,exports) {
/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */ function arrayMap(array, iteratee) {
    var index = -1, length = array == null ? 0 : array.length, result = Array(length);
    while(++index < length)result[index] = iteratee(array[index], index, array);
    return result;
}
module.exports = arrayMap;

},{}],"60rt9":[function(require,module,exports) {
var arrayPush = require("./_arrayPush"), isFlattenable = require("./_isFlattenable");
/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */ function baseFlatten(array, depth, predicate, isStrict, result) {
    var index = -1, length = array.length;
    predicate || (predicate = isFlattenable);
    result || (result = []);
    while(++index < length){
        var value = array[index];
        if (depth > 0 && predicate(value)) {
            if (depth > 1) // Recursively flatten arrays (susceptible to call stack limits).
            baseFlatten(value, depth - 1, predicate, isStrict, result);
            else arrayPush(result, value);
        } else if (!isStrict) result[result.length] = value;
    }
    return result;
}
module.exports = baseFlatten;

},{"./_arrayPush":"ivo5r","./_isFlattenable":"O762m"}],"ivo5r":[function(require,module,exports) {
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */ function arrayPush(array, values) {
    var index = -1, length = values.length, offset = array.length;
    while(++index < length)array[offset + index] = values[index];
    return array;
}
module.exports = arrayPush;

},{}],"O762m":[function(require,module,exports) {
var Symbol = require("./_Symbol"), isArguments = require("./isArguments"), isArray = require("./isArray");
/** Built-in value references. */ var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;
/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */ function isFlattenable(value) {
    return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
}
module.exports = isFlattenable;

},{"./_Symbol":"7lsL9","./isArguments":"8ReNj","./isArray":"dZaTH"}],"8ReNj":[function(require,module,exports) {
var baseIsArguments = require("./_baseIsArguments"), isObjectLike = require("./isObjectLike");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */ var isArguments = baseIsArguments(function() {
    return arguments;
}()) ? baseIsArguments : function(value) {
    return isObjectLike(value) && hasOwnProperty.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
};
module.exports = isArguments;

},{"./_baseIsArguments":"gx70P","./isObjectLike":"3BLi4"}],"gx70P":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]";
/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */ function baseIsArguments(value) {
    return isObjectLike(value) && baseGetTag(value) == argsTag;
}
module.exports = baseIsArguments;

},{"./_baseGetTag":"lOnbo","./isObjectLike":"3BLi4"}],"2fsgg":[function(require,module,exports) {
var baseMatches = require("./_baseMatches"), baseMatchesProperty = require("./_baseMatchesProperty"), identity = require("./identity"), isArray = require("./isArray"), property = require("./property");
/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */ function baseIteratee(value) {
    // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
    // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
    if (typeof value == "function") return value;
    if (value == null) return identity;
    if (typeof value == "object") return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
    return property(value);
}
module.exports = baseIteratee;

},{"./_baseMatches":"2mdwX","./_baseMatchesProperty":"48kxC","./identity":"dgTUN","./isArray":"dZaTH","./property":"8aSQI"}],"2mdwX":[function(require,module,exports) {
var baseIsMatch = require("./_baseIsMatch"), getMatchData = require("./_getMatchData"), matchesStrictComparable = require("./_matchesStrictComparable");
/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatches(source) {
    var matchData = getMatchData(source);
    if (matchData.length == 1 && matchData[0][2]) return matchesStrictComparable(matchData[0][0], matchData[0][1]);
    return function(object) {
        return object === source || baseIsMatch(object, source, matchData);
    };
}
module.exports = baseMatches;

},{"./_baseIsMatch":"joJZV","./_getMatchData":"48Qyi","./_matchesStrictComparable":"a9Bav"}],"joJZV":[function(require,module,exports) {
var Stack = require("./_Stack"), baseIsEqual = require("./_baseIsEqual");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */ function baseIsMatch(object, source, matchData, customizer) {
    var index = matchData.length, length = index, noCustomizer = !customizer;
    if (object == null) return !length;
    object = Object(object);
    while(index--){
        var data = matchData[index];
        if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) return false;
    }
    while(++index < length){
        data = matchData[index];
        var key = data[0], objValue = object[key], srcValue = data[1];
        if (noCustomizer && data[2]) {
            if (objValue === undefined && !(key in object)) return false;
        } else {
            var stack = new Stack;
            if (customizer) var result = customizer(objValue, srcValue, key, object, source, stack);
            if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) return false;
        }
    }
    return true;
}
module.exports = baseIsMatch;

},{"./_Stack":"atP87","./_baseIsEqual":"7i3qr"}],"atP87":[function(require,module,exports) {
var ListCache = require("./_ListCache"), stackClear = require("./_stackClear"), stackDelete = require("./_stackDelete"), stackGet = require("./_stackGet"), stackHas = require("./_stackHas"), stackSet = require("./_stackSet");
/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */ function Stack(entries) {
    var data = this.__data__ = new ListCache(entries);
    this.size = data.size;
}
// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype["delete"] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;
module.exports = Stack;

},{"./_ListCache":"3UZeo","./_stackClear":"6CpyN","./_stackDelete":"dGFb0","./_stackGet":"6zFUp","./_stackHas":"3VJUX","./_stackSet":"ZfrYM"}],"6CpyN":[function(require,module,exports) {
var ListCache = require("./_ListCache");
/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */ function stackClear() {
    this.__data__ = new ListCache;
    this.size = 0;
}
module.exports = stackClear;

},{"./_ListCache":"3UZeo"}],"dGFb0":[function(require,module,exports) {
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */ function stackDelete(key) {
    var data = this.__data__, result = data["delete"](key);
    this.size = data.size;
    return result;
}
module.exports = stackDelete;

},{}],"6zFUp":[function(require,module,exports) {
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */ function stackGet(key) {
    return this.__data__.get(key);
}
module.exports = stackGet;

},{}],"3VJUX":[function(require,module,exports) {
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function stackHas(key) {
    return this.__data__.has(key);
}
module.exports = stackHas;

},{}],"ZfrYM":[function(require,module,exports) {
var ListCache = require("./_ListCache"), Map = require("./_Map"), MapCache = require("./_MapCache");
/** Used as the size to enable large array optimizations. */ var LARGE_ARRAY_SIZE = 200;
/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */ function stackSet(key, value) {
    var data = this.__data__;
    if (data instanceof ListCache) {
        var pairs = data.__data__;
        if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([
                key,
                value
            ]);
            this.size = ++data.size;
            return this;
        }
        data = this.__data__ = new MapCache(pairs);
    }
    data.set(key, value);
    this.size = data.size;
    return this;
}
module.exports = stackSet;

},{"./_ListCache":"3UZeo","./_Map":"8YjF4","./_MapCache":"664I1"}],"7i3qr":[function(require,module,exports) {
var baseIsEqualDeep = require("./_baseIsEqualDeep"), isObjectLike = require("./isObjectLike");
/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */ function baseIsEqual(value, other, bitmask, customizer, stack) {
    if (value === other) return true;
    if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) return value !== value && other !== other;
    return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}
module.exports = baseIsEqual;

},{"./_baseIsEqualDeep":"6GoQ9","./isObjectLike":"3BLi4"}],"6GoQ9":[function(require,module,exports) {
var Stack = require("./_Stack"), equalArrays = require("./_equalArrays"), equalByTag = require("./_equalByTag"), equalObjects = require("./_equalObjects"), getTag = require("./_getTag"), isArray = require("./isArray"), isBuffer = require("./isBuffer"), isTypedArray = require("./isTypedArray");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", objectTag = "[object Object]";
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
    var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
    objTag = objTag == argsTag ? objectTag : objTag;
    othTag = othTag == argsTag ? objectTag : othTag;
    var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
    if (isSameTag && isBuffer(object)) {
        if (!isBuffer(other)) return false;
        objIsArr = true;
        objIsObj = false;
    }
    if (isSameTag && !objIsObj) {
        stack || (stack = new Stack);
        return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
    }
    if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
        var objIsWrapped = objIsObj && hasOwnProperty.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty.call(other, "__wrapped__");
        if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack);
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
        }
    }
    if (!isSameTag) return false;
    stack || (stack = new Stack);
    return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}
module.exports = baseIsEqualDeep;

},{"./_Stack":"atP87","./_equalArrays":"dQBwf","./_equalByTag":"iqa6H","./_equalObjects":"klCEf","./_getTag":"cRPhM","./isArray":"dZaTH","./isBuffer":"cn85h","./isTypedArray":"6SVKk"}],"dQBwf":[function(require,module,exports) {
var SetCache = require("./_SetCache"), arraySome = require("./_arraySome"), cacheHas = require("./_cacheHas");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */ function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
    if (arrLength != othLength && !(isPartial && othLength > arrLength)) return false;
    // Check that cyclic values are equal.
    var arrStacked = stack.get(array);
    var othStacked = stack.get(other);
    if (arrStacked && othStacked) return arrStacked == other && othStacked == array;
    var index = -1, result = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache : undefined;
    stack.set(array, other);
    stack.set(other, array);
    // Ignore non-index properties.
    while(++index < arrLength){
        var arrValue = array[index], othValue1 = other[index];
        if (customizer) var compared = isPartial ? customizer(othValue1, arrValue, index, other, array, stack) : customizer(arrValue, othValue1, index, array, other, stack);
        if (compared !== undefined) {
            if (compared) continue;
            result = false;
            break;
        }
        // Recursively compare arrays (susceptible to call stack limits).
        if (seen) {
            if (!arraySome(other, function(othValue, othIndex) {
                if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) return seen.push(othIndex);
            })) {
                result = false;
                break;
            }
        } else if (!(arrValue === othValue1 || equalFunc(arrValue, othValue1, bitmask, customizer, stack))) {
            result = false;
            break;
        }
    }
    stack["delete"](array);
    stack["delete"](other);
    return result;
}
module.exports = equalArrays;

},{"./_SetCache":"1SXrY","./_arraySome":"aLDHW","./_cacheHas":"70cVb"}],"1SXrY":[function(require,module,exports) {
var MapCache = require("./_MapCache"), setCacheAdd = require("./_setCacheAdd"), setCacheHas = require("./_setCacheHas");
/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */ function SetCache(values) {
    var index = -1, length = values == null ? 0 : values.length;
    this.__data__ = new MapCache;
    while(++index < length)this.add(values[index]);
}
// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;
module.exports = SetCache;

},{"./_MapCache":"664I1","./_setCacheAdd":"cZViu","./_setCacheHas":"4zNID"}],"cZViu":[function(require,module,exports) {
/** Used to stand-in for `undefined` hash values. */ var HASH_UNDEFINED = "__lodash_hash_undefined__";
/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */ function setCacheAdd(value) {
    this.__data__.set(value, HASH_UNDEFINED);
    return this;
}
module.exports = setCacheAdd;

},{}],"4zNID":[function(require,module,exports) {
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */ function setCacheHas(value) {
    return this.__data__.has(value);
}
module.exports = setCacheHas;

},{}],"aLDHW":[function(require,module,exports) {
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */ function arraySome(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length;
    while(++index < length){
        if (predicate(array[index], index, array)) return true;
    }
    return false;
}
module.exports = arraySome;

},{}],"70cVb":[function(require,module,exports) {
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */ function cacheHas(cache, key) {
    return cache.has(key);
}
module.exports = cacheHas;

},{}],"iqa6H":[function(require,module,exports) {
var Symbol = require("./_Symbol"), Uint8Array = require("./_Uint8Array"), eq = require("./eq"), equalArrays = require("./_equalArrays"), mapToArray = require("./_mapToArray"), setToArray = require("./_setToArray");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/** `Object#toString` result references. */ var boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", mapTag = "[object Map]", numberTag = "[object Number]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]";
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
    switch(tag){
        case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) return false;
            object = object.buffer;
            other = other.buffer;
        case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) return false;
            return true;
        case boolTag:
        case dateTag:
        case numberTag:
            // Coerce booleans to `1` or `0` and dates to milliseconds.
            // Invalid dates are coerced to `NaN`.
            return eq(+object, +other);
        case errorTag:
            return object.name == other.name && object.message == other.message;
        case regexpTag:
        case stringTag:
            // Coerce regexes to strings and treat strings, primitives and objects,
            // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
            // for more details.
            return object == other + "";
        case mapTag:
            var convert = mapToArray;
        case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) return false;
            // Assume cyclic values are equal.
            var stacked = stack.get(object);
            if (stacked) return stacked == other;
            bitmask |= COMPARE_UNORDERED_FLAG;
            // Recursively compare objects (susceptible to call stack limits).
            stack.set(object, other);
            var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result;
        case symbolTag:
            if (symbolValueOf) return symbolValueOf.call(object) == symbolValueOf.call(other);
    }
    return false;
}
module.exports = equalByTag;

},{"./_Symbol":"7lsL9","./_Uint8Array":"6xFrA","./eq":"aVz5f","./_equalArrays":"dQBwf","./_mapToArray":"kAwkU","./_setToArray":"2qJif"}],"6xFrA":[function(require,module,exports) {
var root = require("./_root");
/** Built-in value references. */ var Uint8Array = root.Uint8Array;
module.exports = Uint8Array;

},{"./_root":"dSYUs"}],"kAwkU":[function(require,module,exports) {
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */ function mapToArray(map) {
    var index = -1, result = Array(map.size);
    map.forEach(function(value, key) {
        result[++index] = [
            key,
            value
        ];
    });
    return result;
}
module.exports = mapToArray;

},{}],"2qJif":[function(require,module,exports) {
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */ function setToArray(set) {
    var index = -1, result = Array(set.size);
    set.forEach(function(value) {
        result[++index] = value;
    });
    return result;
}
module.exports = setToArray;

},{}],"klCEf":[function(require,module,exports) {
var getAllKeys = require("./_getAllKeys");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1;
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */ function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
    var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
    if (objLength != othLength && !isPartial) return false;
    var index = objLength;
    while(index--){
        var key = objProps[index];
        if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) return false;
    }
    // Check that cyclic values are equal.
    var objStacked = stack.get(object);
    var othStacked = stack.get(other);
    if (objStacked && othStacked) return objStacked == other && othStacked == object;
    var result = true;
    stack.set(object, other);
    stack.set(other, object);
    var skipCtor = isPartial;
    while(++index < objLength){
        key = objProps[index];
        var objValue = object[key], othValue = other[key];
        if (customizer) var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
        // Recursively compare objects (susceptible to call stack limits).
        if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result = false;
            break;
        }
        skipCtor || (skipCtor = key == "constructor");
    }
    if (result && !skipCtor) {
        var objCtor = object.constructor, othCtor = other.constructor;
        // Non `Object` object instances with different constructors are not equal.
        if (objCtor != othCtor && "constructor" in object && "constructor" in other && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) result = false;
    }
    stack["delete"](object);
    stack["delete"](other);
    return result;
}
module.exports = equalObjects;

},{"./_getAllKeys":"d2kML"}],"d2kML":[function(require,module,exports) {
var baseGetAllKeys = require("./_baseGetAllKeys"), getSymbols = require("./_getSymbols"), keys = require("./keys");
/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */ function getAllKeys(object) {
    return baseGetAllKeys(object, keys, getSymbols);
}
module.exports = getAllKeys;

},{"./_baseGetAllKeys":"aeckf","./_getSymbols":"5p5Yd","./keys":"6fHVw"}],"aeckf":[function(require,module,exports) {
var arrayPush = require("./_arrayPush"), isArray = require("./isArray");
/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */ function baseGetAllKeys(object, keysFunc, symbolsFunc) {
    var result = keysFunc(object);
    return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}
module.exports = baseGetAllKeys;

},{"./_arrayPush":"ivo5r","./isArray":"dZaTH"}],"5p5Yd":[function(require,module,exports) {
var arrayFilter = require("./_arrayFilter"), stubArray = require("./stubArray");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Built-in value references. */ var propertyIsEnumerable = objectProto.propertyIsEnumerable;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeGetSymbols = Object.getOwnPropertySymbols;
/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */ var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
    if (object == null) return [];
    object = Object(object);
    return arrayFilter(nativeGetSymbols(object), function(symbol) {
        return propertyIsEnumerable.call(object, symbol);
    });
};
module.exports = getSymbols;

},{"./_arrayFilter":"hmIQ7","./stubArray":"6TgRy"}],"hmIQ7":[function(require,module,exports) {
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */ function arrayFilter(array, predicate) {
    var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
    while(++index < length){
        var value = array[index];
        if (predicate(value, index, array)) result[resIndex++] = value;
    }
    return result;
}
module.exports = arrayFilter;

},{}],"6TgRy":[function(require,module,exports) {
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */ function stubArray() {
    return [];
}
module.exports = stubArray;

},{}],"6fHVw":[function(require,module,exports) {
var arrayLikeKeys = require("./_arrayLikeKeys"), baseKeys = require("./_baseKeys"), isArrayLike = require("./isArrayLike");
/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */ function keys(object) {
    return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}
module.exports = keys;

},{"./_arrayLikeKeys":"dquIQ","./_baseKeys":"c0eiI","./isArrayLike":"gMCbp"}],"dquIQ":[function(require,module,exports) {
var baseTimes = require("./_baseTimes"), isArguments = require("./isArguments"), isArray = require("./isArray"), isBuffer = require("./isBuffer"), isIndex = require("./_isIndex"), isTypedArray = require("./isTypedArray");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */ function arrayLikeKeys(value, inherited) {
    var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result = skipIndexes ? baseTimes(value.length, String) : [], length = result.length;
    for(var key in value)if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && // Safari 9 has enumerable `arguments.length` in strict mode.
    (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || // Skip index properties.
    isIndex(key, length)))) result.push(key);
    return result;
}
module.exports = arrayLikeKeys;

},{"./_baseTimes":"odqYd","./isArguments":"8ReNj","./isArray":"dZaTH","./isBuffer":"cn85h","./_isIndex":"aJpx0","./isTypedArray":"6SVKk"}],"odqYd":[function(require,module,exports) {
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */ function baseTimes(n, iteratee) {
    var index = -1, result = Array(n);
    while(++index < n)result[index] = iteratee(index);
    return result;
}
module.exports = baseTimes;

},{}],"cn85h":[function(require,module,exports) {
var root = require("./_root"), stubFalse = require("./stubFalse");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Built-in value references. */ var Buffer = moduleExports ? root.Buffer : undefined;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;
/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */ var isBuffer = nativeIsBuffer || stubFalse;
module.exports = isBuffer;

},{"./_root":"dSYUs","./stubFalse":"dx4uy"}],"dx4uy":[function(require,module,exports) {
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */ function stubFalse() {
    return false;
}
module.exports = stubFalse;

},{}],"6SVKk":[function(require,module,exports) {
var baseIsTypedArray = require("./_baseIsTypedArray"), baseUnary = require("./_baseUnary"), nodeUtil = require("./_nodeUtil");
/* Node.js helper references. */ var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */ var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
module.exports = isTypedArray;

},{"./_baseIsTypedArray":"lGSsl","./_baseUnary":"eJXq4","./_nodeUtil":"5edNe"}],"lGSsl":[function(require,module,exports) {
var baseGetTag = require("./_baseGetTag"), isLength = require("./isLength"), isObjectLike = require("./isObjectLike");
/** `Object#toString` result references. */ var argsTag = "[object Arguments]", arrayTag = "[object Array]", boolTag = "[object Boolean]", dateTag = "[object Date]", errorTag = "[object Error]", funcTag = "[object Function]", mapTag = "[object Map]", numberTag = "[object Number]", objectTag = "[object Object]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", weakMapTag = "[object WeakMap]";
var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
/** Used to identify `toStringTag` values of typed arrays. */ var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */ function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}
module.exports = baseIsTypedArray;

},{"./_baseGetTag":"lOnbo","./isLength":"hrTBx","./isObjectLike":"3BLi4"}],"hrTBx":[function(require,module,exports) {
/** Used as references for various `Number` constants. */ var MAX_SAFE_INTEGER = 9007199254740991;
/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */ function isLength(value) {
    return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}
module.exports = isLength;

},{}],"eJXq4":[function(require,module,exports) {
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */ function baseUnary(func) {
    return function(value) {
        return func(value);
    };
}
module.exports = baseUnary;

},{}],"5edNe":[function(require,module,exports) {
var freeGlobal = require("./_freeGlobal");
/** Detect free variable `exports`. */ var freeExports = exports && !exports.nodeType && exports;
/** Detect free variable `module`. */ var freeModule = freeExports && true && module && !module.nodeType && module;
/** Detect the popular CommonJS extension `module.exports`. */ var moduleExports = freeModule && freeModule.exports === freeExports;
/** Detect free variable `process` from Node.js. */ var freeProcess = moduleExports && freeGlobal.process;
/** Used to access faster Node.js helpers. */ var nodeUtil = function() {
    try {
        // Use `util.types` for Node.js 10+.
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) return types;
        // Legacy `process.binding('util')` for Node.js < 10.
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
    } catch (e) {}
}();
module.exports = nodeUtil;

},{"./_freeGlobal":"kAk32"}],"c0eiI":[function(require,module,exports) {
var isPrototype = require("./_isPrototype"), nativeKeys = require("./_nativeKeys");
/** Used for built-in method references. */ var objectProto = Object.prototype;
/** Used to check objects for own properties. */ var hasOwnProperty = objectProto.hasOwnProperty;
/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */ function baseKeys(object) {
    if (!isPrototype(object)) return nativeKeys(object);
    var result = [];
    for(var key in Object(object))if (hasOwnProperty.call(object, key) && key != "constructor") result.push(key);
    return result;
}
module.exports = baseKeys;

},{"./_isPrototype":"iG4eR","./_nativeKeys":"k97u2"}],"iG4eR":[function(require,module,exports) {
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */ function isPrototype(value) {
    var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
    return value === proto;
}
module.exports = isPrototype;

},{}],"k97u2":[function(require,module,exports) {
var overArg = require("./_overArg");
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeKeys = overArg(Object.keys, Object);
module.exports = nativeKeys;

},{"./_overArg":"dpUvl"}],"dpUvl":[function(require,module,exports) {
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */ function overArg(func, transform) {
    return function(arg) {
        return func(transform(arg));
    };
}
module.exports = overArg;

},{}],"gMCbp":[function(require,module,exports) {
var isFunction = require("./isFunction"), isLength = require("./isLength");
/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */ function isArrayLike(value) {
    return value != null && isLength(value.length) && !isFunction(value);
}
module.exports = isArrayLike;

},{"./isFunction":"cfti6","./isLength":"hrTBx"}],"cRPhM":[function(require,module,exports) {
var DataView = require("./_DataView"), Map = require("./_Map"), Promise = require("./_Promise"), Set = require("./_Set"), WeakMap = require("./_WeakMap"), baseGetTag = require("./_baseGetTag"), toSource = require("./_toSource");
/** `Object#toString` result references. */ var mapTag = "[object Map]", objectTag = "[object Object]", promiseTag = "[object Promise]", setTag = "[object Set]", weakMapTag = "[object WeakMap]";
var dataViewTag = "[object DataView]";
/** Used to detect maps, sets, and weakmaps. */ var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */ var getTag = baseGetTag;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set) != setTag || WeakMap && getTag(new WeakMap) != weakMapTag) getTag = function(value) {
    var result = baseGetTag(value), Ctor = result == objectTag ? value.constructor : undefined, ctorString = Ctor ? toSource(Ctor) : "";
    if (ctorString) switch(ctorString){
        case dataViewCtorString:
            return dataViewTag;
        case mapCtorString:
            return mapTag;
        case promiseCtorString:
            return promiseTag;
        case setCtorString:
            return setTag;
        case weakMapCtorString:
            return weakMapTag;
    }
    return result;
};
module.exports = getTag;

},{"./_DataView":"ejRu5","./_Map":"8YjF4","./_Promise":"jbvCt","./_Set":"4xGLf","./_WeakMap":"av50V","./_baseGetTag":"lOnbo","./_toSource":"bYHc7"}],"ejRu5":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var DataView = getNative(root, "DataView");
module.exports = DataView;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"jbvCt":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Promise = getNative(root, "Promise");
module.exports = Promise;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"4xGLf":[function(require,module,exports) {
var getNative = require("./_getNative"), root = require("./_root");
/* Built-in method references that are verified to be native. */ var Set = getNative(root, "Set");
module.exports = Set;

},{"./_getNative":"9PCIl","./_root":"dSYUs"}],"48Qyi":[function(require,module,exports) {
var isStrictComparable = require("./_isStrictComparable"), keys = require("./keys");
/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */ function getMatchData(object) {
    var result = keys(object), length = result.length;
    while(length--){
        var key = result[length], value = object[key];
        result[length] = [
            key,
            value,
            isStrictComparable(value)
        ];
    }
    return result;
}
module.exports = getMatchData;

},{"./_isStrictComparable":"lpdGS","./keys":"6fHVw"}],"lpdGS":[function(require,module,exports) {
var isObject = require("./isObject");
/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */ function isStrictComparable(value) {
    return value === value && !isObject(value);
}
module.exports = isStrictComparable;

},{"./isObject":"cGhqJ"}],"a9Bav":[function(require,module,exports) {
/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function matchesStrictComparable(key, srcValue) {
    return function(object) {
        if (object == null) return false;
        return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
    };
}
module.exports = matchesStrictComparable;

},{}],"48kxC":[function(require,module,exports) {
var baseIsEqual = require("./_baseIsEqual"), get = require("./get"), hasIn = require("./hasIn"), isKey = require("./_isKey"), isStrictComparable = require("./_isStrictComparable"), matchesStrictComparable = require("./_matchesStrictComparable"), toKey = require("./_toKey");
/** Used to compose bitmasks for value comparisons. */ var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */ function baseMatchesProperty(path, srcValue) {
    if (isKey(path) && isStrictComparable(srcValue)) return matchesStrictComparable(toKey(path), srcValue);
    return function(object) {
        var objValue = get(object, path);
        return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
    };
}
module.exports = baseMatchesProperty;

},{"./_baseIsEqual":"7i3qr","./get":"8UELX","./hasIn":"57qii","./_isKey":"4wPWG","./_isStrictComparable":"lpdGS","./_matchesStrictComparable":"a9Bav","./_toKey":"bEgue"}],"8UELX":[function(require,module,exports) {
var baseGet = require("./_baseGet");
/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */ function get(object, path, defaultValue) {
    var result = object == null ? undefined : baseGet(object, path);
    return result === undefined ? defaultValue : result;
}
module.exports = get;

},{"./_baseGet":"kMRe3"}],"kMRe3":[function(require,module,exports) {
var castPath = require("./_castPath"), toKey = require("./_toKey");
/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */ function baseGet(object, path) {
    path = castPath(path, object);
    var index = 0, length = path.length;
    while(object != null && index < length)object = object[toKey(path[index++])];
    return index && index == length ? object : undefined;
}
module.exports = baseGet;

},{"./_castPath":"apxk5","./_toKey":"bEgue"}],"apxk5":[function(require,module,exports) {
var isArray = require("./isArray"), isKey = require("./_isKey"), stringToPath = require("./_stringToPath"), toString = require("./toString");
/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */ function castPath(value, object) {
    if (isArray(value)) return value;
    return isKey(value, object) ? [
        value
    ] : stringToPath(toString(value));
}
module.exports = castPath;

},{"./isArray":"dZaTH","./_isKey":"4wPWG","./_stringToPath":"1m1j5","./toString":"joIdQ"}],"4wPWG":[function(require,module,exports) {
var isArray = require("./isArray"), isSymbol = require("./isSymbol");
/** Used to match property names within property paths. */ var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/;
/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */ function isKey(value, object) {
    if (isArray(value)) return false;
    var type = typeof value;
    if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) return true;
    return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
module.exports = isKey;

},{"./isArray":"dZaTH","./isSymbol":"i3BHC"}],"1m1j5":[function(require,module,exports) {
var memoizeCapped = require("./_memoizeCapped");
/** Used to match property names within property paths. */ var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
/** Used to match backslashes in property paths. */ var reEscapeChar = /\\(\\)?/g;
/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */ var stringToPath = memoizeCapped(function(string) {
    var result = [];
    if (string.charCodeAt(0) === 46 /* . */ ) result.push("");
    string.replace(rePropName, function(match, number, quote, subString) {
        result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
    });
    return result;
});
module.exports = stringToPath;

},{"./_memoizeCapped":"j3xlQ"}],"j3xlQ":[function(require,module,exports) {
var memoize = require("./memoize");
/** Used as the maximum memoize cache size. */ var MAX_MEMOIZE_SIZE = 500;
/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */ function memoizeCapped(func) {
    var result = memoize(func, function(key) {
        if (cache.size === MAX_MEMOIZE_SIZE) cache.clear();
        return key;
    });
    var cache = result.cache;
    return result;
}
module.exports = memoizeCapped;

},{"./memoize":"azHKC"}],"joIdQ":[function(require,module,exports) {
var baseToString = require("./_baseToString");
/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */ function toString(value) {
    return value == null ? "" : baseToString(value);
}
module.exports = toString;

},{"./_baseToString":"goDP8"}],"goDP8":[function(require,module,exports) {
var Symbol = require("./_Symbol"), arrayMap = require("./_arrayMap"), isArray = require("./isArray"), isSymbol = require("./isSymbol");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/** Used to convert symbols to primitives and strings. */ var symbolProto = Symbol ? Symbol.prototype : undefined, symbolToString = symbolProto ? symbolProto.toString : undefined;
/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */ function baseToString(value) {
    // Exit early for strings to avoid a performance hit in some environments.
    if (typeof value == "string") return value;
    if (isArray(value)) // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + "";
    if (isSymbol(value)) return symbolToString ? symbolToString.call(value) : "";
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
module.exports = baseToString;

},{"./_Symbol":"7lsL9","./_arrayMap":"imI5Z","./isArray":"dZaTH","./isSymbol":"i3BHC"}],"bEgue":[function(require,module,exports) {
var isSymbol = require("./isSymbol");
/** Used as references for various `Number` constants. */ var INFINITY = 1 / 0;
/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */ function toKey(value) {
    if (typeof value == "string" || isSymbol(value)) return value;
    var result = value + "";
    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
module.exports = toKey;

},{"./isSymbol":"i3BHC"}],"57qii":[function(require,module,exports) {
var baseHasIn = require("./_baseHasIn"), hasPath = require("./_hasPath");
/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */ function hasIn(object, path) {
    return object != null && hasPath(object, path, baseHasIn);
}
module.exports = hasIn;

},{"./_baseHasIn":"in8KZ","./_hasPath":"4QNMG"}],"in8KZ":[function(require,module,exports) {
/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */ function baseHasIn(object, key) {
    return object != null && key in Object(object);
}
module.exports = baseHasIn;

},{}],"4QNMG":[function(require,module,exports) {
var castPath = require("./_castPath"), isArguments = require("./isArguments"), isArray = require("./isArray"), isIndex = require("./_isIndex"), isLength = require("./isLength"), toKey = require("./_toKey");
/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */ function hasPath(object, path, hasFunc) {
    path = castPath(path, object);
    var index = -1, length = path.length, result = false;
    while(++index < length){
        var key = toKey(path[index]);
        if (!(result = object != null && hasFunc(object, key))) break;
        object = object[key];
    }
    if (result || ++index != length) return result;
    length = object == null ? 0 : object.length;
    return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}
module.exports = hasPath;

},{"./_castPath":"apxk5","./isArguments":"8ReNj","./isArray":"dZaTH","./_isIndex":"aJpx0","./isLength":"hrTBx","./_toKey":"bEgue"}],"8aSQI":[function(require,module,exports) {
var baseProperty = require("./_baseProperty"), basePropertyDeep = require("./_basePropertyDeep"), isKey = require("./_isKey"), toKey = require("./_toKey");
/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */ function property(path) {
    return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}
module.exports = property;

},{"./_baseProperty":"4HOmE","./_basePropertyDeep":"c9dhz","./_isKey":"4wPWG","./_toKey":"bEgue"}],"4HOmE":[function(require,module,exports) {
/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function baseProperty(key) {
    return function(object) {
        return object == null ? undefined : object[key];
    };
}
module.exports = baseProperty;

},{}],"c9dhz":[function(require,module,exports) {
var baseGet = require("./_baseGet");
/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */ function basePropertyDeep(path) {
    return function(object) {
        return baseGet(object, path);
    };
}
module.exports = basePropertyDeep;

},{"./_baseGet":"kMRe3"}],"hknU0":[function(require,module,exports) {
var baseRest = require("./_baseRest");
/**
 * A `baseRest` alias which can be replaced with `identity` by module
 * replacement plugins.
 *
 * @private
 * @type {Function}
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */ var castRest = baseRest;
module.exports = castRest;

},{"./_baseRest":"kd260"}],"cV1PV":[function(require,module,exports) {
var baseRest = require("./_baseRest"), createWrap = require("./_createWrap"), getHolder = require("./_getHolder"), replaceHolders = require("./_replaceHolders");
/** Used to compose bitmasks for function metadata. */ var WRAP_PARTIAL_FLAG = 32;
/**
 * Creates a function that invokes `func` with `partials` prepended to the
 * arguments it receives. This method is like `_.bind` except it does **not**
 * alter the `this` binding.
 *
 * The `_.partial.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 0.2.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var sayHelloTo = _.partial(greet, 'hello');
 * sayHelloTo('fred');
 * // => 'hello fred'
 *
 * // Partially applied with placeholders.
 * var greetFred = _.partial(greet, _, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 */ var partial = baseRest(function(func, partials) {
    var holders = replaceHolders(partials, getHolder(partial));
    return createWrap(func, WRAP_PARTIAL_FLAG, undefined, partials, holders);
});
// Assign default placeholders.
partial.placeholder = {};
module.exports = partial;

},{"./_baseRest":"kd260","./_createWrap":"1nVn1","./_getHolder":"2v0Bi","./_replaceHolders":"brLIY"}],"1xsRf":[function(require,module,exports) {
var baseRest = require("./_baseRest"), createWrap = require("./_createWrap"), getHolder = require("./_getHolder"), replaceHolders = require("./_replaceHolders");
/** Used to compose bitmasks for function metadata. */ var WRAP_PARTIAL_RIGHT_FLAG = 64;
/**
 * This method is like `_.partial` except that partially applied arguments
 * are appended to the arguments it receives.
 *
 * The `_.partialRight.placeholder` value, which defaults to `_` in monolithic
 * builds, may be used as a placeholder for partially applied arguments.
 *
 * **Note:** This method doesn't set the "length" property of partially
 * applied functions.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Function
 * @param {Function} func The function to partially apply arguments to.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new partially applied function.
 * @example
 *
 * function greet(greeting, name) {
 *   return greeting + ' ' + name;
 * }
 *
 * var greetFred = _.partialRight(greet, 'fred');
 * greetFred('hi');
 * // => 'hi fred'
 *
 * // Partially applied with placeholders.
 * var sayHelloTo = _.partialRight(greet, 'hello', _);
 * sayHelloTo('fred');
 * // => 'hello fred'
 */ var partialRight = baseRest(function(func, partials) {
    var holders = replaceHolders(partials, getHolder(partialRight));
    return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined, partials, holders);
});
// Assign default placeholders.
partialRight.placeholder = {};
module.exports = partialRight;

},{"./_baseRest":"kd260","./_createWrap":"1nVn1","./_getHolder":"2v0Bi","./_replaceHolders":"brLIY"}],"bePiz":[function(require,module,exports) {
var createWrap = require("./_createWrap"), flatRest = require("./_flatRest");
/** Used to compose bitmasks for function metadata. */ var WRAP_REARG_FLAG = 256;
/**
 * Creates a function that invokes `func` with arguments arranged according
 * to the specified `indexes` where the argument value at the first index is
 * provided as the first argument, the argument value at the second index is
 * provided as the second argument, and so on.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Function
 * @param {Function} func The function to rearrange arguments for.
 * @param {...(number|number[])} indexes The arranged argument indexes.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var rearged = _.rearg(function(a, b, c) {
 *   return [a, b, c];
 * }, [2, 0, 1]);
 *
 * rearged('b', 'c', 'a')
 * // => ['a', 'b', 'c']
 */ var rearg = flatRest(function(func, indexes) {
    return createWrap(func, WRAP_REARG_FLAG, undefined, undefined, undefined, indexes);
});
module.exports = rearg;

},{"./_createWrap":"1nVn1","./_flatRest":"bmlRd"}],"bmlRd":[function(require,module,exports) {
var flatten = require("./flatten"), overRest = require("./_overRest"), setToString = require("./_setToString");
/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */ function flatRest(func) {
    return setToString(overRest(func, undefined, flatten), func + "");
}
module.exports = flatRest;

},{"./flatten":"71l7m","./_overRest":"16F1z","./_setToString":"b5kjI"}],"71l7m":[function(require,module,exports) {
var baseFlatten = require("./_baseFlatten");
/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */ function flatten(array) {
    var length = array == null ? 0 : array.length;
    return length ? baseFlatten(array, 1) : [];
}
module.exports = flatten;

},{"./_baseFlatten":"60rt9"}],"1IyWf":[function(require,module,exports) {
var baseRest = require("./_baseRest"), toInteger = require("./toInteger");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a function that invokes `func` with the `this` binding of the
 * created function and arguments from `start` and beyond provided as
 * an array.
 *
 * **Note:** This method is based on the
 * [rest parameter](https://mdn.io/rest_parameters).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.rest(function(what, names) {
 *   return what + ' ' + _.initial(names).join(', ') +
 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
 * });
 *
 * say('hello', 'fred', 'barney', 'pebbles');
 * // => 'hello fred, barney, & pebbles'
 */ function rest(func, start) {
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    start = start === undefined ? start : toInteger(start);
    return baseRest(func, start);
}
module.exports = rest;

},{"./_baseRest":"kd260","./toInteger":"ds6ZT"}],"kTeoJ":[function(require,module,exports) {
var apply = require("./_apply"), arrayPush = require("./_arrayPush"), baseRest = require("./_baseRest"), castSlice = require("./_castSlice"), toInteger = require("./toInteger");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max;
/**
 * Creates a function that invokes `func` with the `this` binding of the
 * create function and an array of arguments much like
 * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
 *
 * **Note:** This method is based on the
 * [spread operator](https://mdn.io/spread_operator).
 *
 * @static
 * @memberOf _
 * @since 3.2.0
 * @category Function
 * @param {Function} func The function to spread arguments over.
 * @param {number} [start=0] The start position of the spread.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var say = _.spread(function(who, what) {
 *   return who + ' says ' + what;
 * });
 *
 * say(['fred', 'hello']);
 * // => 'fred says hello'
 *
 * var numbers = Promise.all([
 *   Promise.resolve(40),
 *   Promise.resolve(36)
 * ]);
 *
 * numbers.then(_.spread(function(x, y) {
 *   return x + y;
 * }));
 * // => a Promise of 76
 */ function spread(func, start) {
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    start = start == null ? 0 : nativeMax(toInteger(start), 0);
    return baseRest(function(args) {
        var array = args[start], otherArgs = castSlice(args, 0, start);
        if (array) arrayPush(otherArgs, array);
        return apply(func, this, otherArgs);
    });
}
module.exports = spread;

},{"./_apply":"gUweg","./_arrayPush":"ivo5r","./_baseRest":"kd260","./_castSlice":"eHx77","./toInteger":"ds6ZT"}],"eHx77":[function(require,module,exports) {
var baseSlice = require("./_baseSlice");
/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */ function castSlice(array, start, end) {
    var length = array.length;
    end = end === undefined ? length : end;
    return !start && end >= length ? array : baseSlice(array, start, end);
}
module.exports = castSlice;

},{"./_baseSlice":"cqqI2"}],"cqqI2":[function(require,module,exports) {
/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */ function baseSlice(array, start, end) {
    var index = -1, length = array.length;
    if (start < 0) start = -start > length ? 0 : length + start;
    end = end > length ? length : end;
    if (end < 0) end += length;
    length = start > end ? 0 : end - start >>> 0;
    start >>>= 0;
    var result = Array(length);
    while(++index < length)result[index] = array[index + start];
    return result;
}
module.exports = baseSlice;

},{}],"lAb0D":[function(require,module,exports) {
var debounce = require("./debounce"), isObject = require("./isObject");
/** Error message constants. */ var FUNC_ERROR_TEXT = "Expected a function";
/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */ function throttle(func, wait, options) {
    var leading = true, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    if (isObject(options)) {
        leading = "leading" in options ? !!options.leading : leading;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    return debounce(func, wait, {
        "leading": leading,
        "maxWait": wait,
        "trailing": trailing
    });
}
module.exports = throttle;

},{"./debounce":"bv6vy","./isObject":"cGhqJ"}],"dMn48":[function(require,module,exports) {
var ary = require("./ary");
/**
 * Creates a function that accepts up to one argument, ignoring any
 * additional arguments.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Function
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 * @example
 *
 * _.map(['6', '8', '10'], _.unary(parseInt));
 * // => [6, 8, 10]
 */ function unary(func) {
    return ary(func, 1);
}
module.exports = unary;

},{"./ary":"eX0eC"}],"d2jW7":[function(require,module,exports) {
var castFunction = require("./_castFunction"), partial = require("./partial");
/**
 * Creates a function that provides `value` to `wrapper` as its first
 * argument. Any additional arguments provided to the function are appended
 * to those provided to the `wrapper`. The wrapper is invoked with the `this`
 * binding of the created function.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {*} value The value to wrap.
 * @param {Function} [wrapper=identity] The wrapper function.
 * @returns {Function} Returns the new function.
 * @example
 *
 * var p = _.wrap(_.escape, function(func, text) {
 *   return '<p>' + func(text) + '</p>';
 * });
 *
 * p('fred, barney, & pebbles');
 * // => '<p>fred, barney, &amp; pebbles</p>'
 */ function wrap(value, wrapper) {
    return partial(castFunction(wrapper), value);
}
module.exports = wrap;

},{"./_castFunction":"9qOGA","./partial":"cV1PV"}],"9qOGA":[function(require,module,exports) {
var identity = require("./identity");
/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */ function castFunction(value) {
    return typeof value == "function" ? value : identity;
}
module.exports = castFunction;

},{"./identity":"dgTUN"}]},["5rKFT","fFZ34"], "fFZ34", "parcelRequired7c6")

//# sourceMappingURL=02-video.a74b541c.js.map
