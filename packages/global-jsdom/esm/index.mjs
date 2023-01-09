/*
 * enables jsdom globally.
 */
import JSDOM from 'jsdom'

const defaultHtml = '<!doctype html><html><head><meta charset="utf-8"></head><body></body></html>'

// define this here so that we only ever dynamically populate KEYS once.

const KEYS = []

export default function globalJsdom(html = defaultHtml, options = {}) {
  // Idempotency
  if (global.navigator
    && global.navigator.userAgent
    && global.navigator.userAgent.includes('Node.js')
    && global.document
    && typeof global.document.destroy === 'function') {
    return global.document.destroy
  }

  // set a default url if we don't get one - otherwise things explode when we copy localstorage keys
  if (!('url' in options)) { Object.assign(options, { url: 'http://localhost:3000' }) }

  // enable pretendToBeVisual by default since react needs
  // window.requestAnimationFrame, see https://github.com/jsdom/jsdom#pretending-to-be-a-visual-browser
  if (!('pretendToBeVisual' in options)) { Object.assign(options, { pretendToBeVisual: true }) }

  const jsdom = new JSDOM.JSDOM(html, options)
  const { window } = jsdom
  const { document } = window

  // generate our list of keys by enumerating document.window - this list may vary
  // based on the jsdom version. filter out internal methods as well as anything
  // that node already defines

  if (KEYS.length === 0) {
    KEYS.push(...Object.getOwnPropertyNames(window).filter((k) => !k.startsWith('_') && !(k in global)))
    // going to add our jsdom instance, see below
    KEYS.push('$jsdom')
  }
  // eslint-disable-next-line no-return-assign
  KEYS.forEach((key) => global[key] = window[key])

  // setup document / window / window.console
  global.document = document
  global.window = window
  window.console = global.console

  // add access to our jsdom instance
  global.$jsdom = jsdom

  const cleanup = () => KEYS.forEach((key) => delete global[key])

  document.destroy = cleanup

  return cleanup
}
