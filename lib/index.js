'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = globalJsdom;

var _jsdom = require('jsdom');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /*
                                                                                                                                                                                                     * enables jsdom globally.
                                                                                                                                                                                                     */


var defaultHtml = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>';

// define this here so that we only ever dynamically populate KEYS once . this
// way
var KEYS = [];

function globalJsdom() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultHtml;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Idempotency
  if (global.navigator && global.navigator.userAgent && global.navigator.userAgent.includes('Node.js') && global.document && typeof global.document.destroy === 'function') {
    return global.document.destroy;
  }

  // set a default url if we don't get one - otherwise things explode when we copy localstorage keys
  if (!options.url) {
    Object.assign(options, { url: 'http://localhost:3000' });
  }

  var jsdom = new _jsdom.JSDOM(html, options);
  var window = jsdom.window;
  var document = window.document;

  // generate our list of keys by enumerating document.window - this list may vary
  // based on the jsdom version. filter out internal methods as well as anything
  // that node already defines

  if (KEYS.length === 0) {
    KEYS.push.apply(KEYS, _toConsumableArray(Object.getOwnPropertyNames(window).filter(function (k) {
      return !k.startsWith('_');
    }).filter(function (k) {
      return !(k in global);
    })));
    // going to add our jsdom instance, see below
    KEYS.push('$jsdom');
  }
  // eslint-disable-next-line no-return-assign
  KEYS.forEach(function (key) {
    return global[key] = window[key];
  });

  // setup document / window / window.console
  global.document = document;
  global.window = window;
  window.console = global.console;

  // add access to our jsdom instance
  global.$jsdom = jsdom;

  var cleanup = function cleanup() {
    return KEYS.forEach(function (key) {
      return delete global[key];
    });
  };

  document.destroy = cleanup;

  return cleanup;
}
module.exports = exports.default;
//# sourceMappingURL=index.js.map