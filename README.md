# global-jsdom
[![npm version](http://img.shields.io/npm/v/global-jsdom.svg?style=flat-square)](https://www.npmjs.com/package/global-jsdom)
![Node.js CI](https://github.com/modosc/global-jsdom/workflows/Node.js%20CI/badge.svg?branch=master)

> Enables DOM in Node.js
`global-jsdom` will inject `document`, `window` and other DOM API into your Node.js environment. This allows you to run browser tests in Node.js. The specific attributes set on `global` come directly from the `jsdom` version you have installed.
## Install

Requires [node][] >= 16 and [jsdom][] >= 22 or above

```
npm install --save-dev --save-exact jsdom global-jsdom
```
[node]: https://github.com/nodejs/node
[jsdom]: https://github.com/tmpvar/jsdom

## Usage

Just invoke it to turn your Node.js environment into a DOM environment.

```js
// commonjs
require('global-jsdom/register')

// or es2015
import 'global-jsdom/register'

// you can now use the DOM
document.body.innerHTML = 'hello'

// you can also access the current jsdom instance through $jsdom
global.$jsdom.reconfigure({})
```

## Configuration
You may pass configuration parameters to `jsdom` like so:
```js
// commonjs
const globalJsdom = require('global-jsdom')

// or es2015
import globalJsdom from 'global-jsdom'

// then
globalJsdom(html, options)
```
Check the [jsdom.jsdom()][] documentation for valid values for the `options`
parameter.

### Default Options
The following set of default options are passed to `jsdom`
```js
{
  // if url isn't set then localStorage breaks with a cryptic error, see
  // https://github.com/jsdom/jsdom/issues/2304#issuecomment-408320484
  url: 'http://localhost:3000',
  // pretendToBeVisual is enabled so that react works, see
  // https://github.com/jsdom/jsdom#pretending-to-be-a-visual-browser
  pretendToBeVisual: true,
}
```
### Cleanup
To clean up the global namespace just invoke the returned function:
```js
// commonjs
const cleanup = require('global-jsdom')()

// es2015
import globalJsdom from 'global-jsdom'
const cleanup = globalJsdom()

// do things, then
cleanup()
```

## Tape

In [tape][], run it before your other tests.

```js
require('global-jsdom/register')

test('your tests', (t) => {
  /* and so on... */
})
```

## Mocha

__Simple:__ Use Mocha's `--require` option. Add this to the `test/mocha.opts` file (create it if it doesn't exist)

```
-r global-jsdom/register
```

__Advanced:__ For finer control, you can instead add it via [mocha]'s `before` and `after` hooks.

```js
before(function () {
  this.jsdom = require('global-jsdom')()
})

after(function () {
  this.jsdom()
})
```

[tape]: https://github.com/substack/tape
[mocha]: https://mochajs.org/
[jsdom.jsdom()]: https://github.com/tmpvar/jsdom/#for-the-hardcore-jsdomjsdom

## ES2015

If you're using a [recent version of
node](https://nodejs.org/api/esm.html#esm_conditional_exports) then `import` should
just work:


```js
import 'global-jsdom/register'
import React from 'react'
import jQuery from 'jquery'
// ...
```

## Typescript

The library includes automatic support providing the necessary type declarations for an integration without further configuration.

```ts
import globalJsdom from "global-jsdom";

describe("Typescript test example", () => {
  let cleanup: { (): void };

  before(() => {
      cleanup = globalJsdom();
  });

  after(() => {
    cleanup();
  });

})
```

## Thanks

original code forked from [jsdom-global](https://github.com/rstacruz/jsdom-global)
