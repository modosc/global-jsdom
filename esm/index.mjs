function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { JSDOM } from 'jsdom';
var defaultHtml = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>';
var KEYS = [];
export default function globalJsdom() {
  var html = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultHtml;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (global.navigator && global.navigator.userAgent && global.navigator.userAgent.includes('Node.js') && global.document && typeof global.document.destroy === 'function') {
    return global.document.destroy;
  }

  if (!options.url) {
    Object.assign(options, {
      url: 'http://localhost:3000'
    });
  }

  var jsdom = new JSDOM(html, options);
  var window = jsdom.window;
  var document = window.document;

  if (KEYS.length === 0) {
    KEYS.push.apply(KEYS, _toConsumableArray(Object.getOwnPropertyNames(window).filter(function (k) {
      return !k.startsWith('_');
    }).filter(function (k) {
      return !(k in global);
    })));
    KEYS.push('$jsdom');
  }

  KEYS.forEach(function (key) {
    return global[key] = window[key];
  });
  global.document = document;
  global.window = window;
  window.console = global.console;
  global.$jsdom = jsdom;

  var cleanup = function cleanup() {
    return KEYS.forEach(function (key) {
      return delete global[key];
    });
  };

  document.destroy = cleanup;
  return cleanup;
}
//# sourceMappingURL=index.mjs.map