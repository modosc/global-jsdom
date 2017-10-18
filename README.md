# global-jsdom
[![npm version](http://img.shields.io/npm/v/global-jsdom.svg?style=flat-square)](https://www.npmjs.com/package/global-jsdom)

> Enables DOM in Node.js
`global-jsdom` will inject `document`, `window` and other DOM API into your Node.js environment. This allows you to run browser tests in Node.js. The specific attributes set on `global` come directly from the `jsdom` version you have installed.
## Install

Requires [jsdom][] v10 or above.

```
npm install --save-dev --save-exact jsdom global-jsdom
```

[jsdom]: https://github.com/tmpvar/jsdom

## Usage

Just invoke it to turn your Node.js environment into a DOM environment.

```js
require('global-jsdom')()

// you can now use the DOM
document.body.innerHTML = 'hello'

// you can also access the current jsdom instance
global._jsdom.reconfigure()
```

You may also pass parameters to globalJsdom() like so: `require('global-jsdom')(html, options)`.
Check the [jsdom.jsdom()][] documentation for valid values for the `options` parameter.

To clean up after itself, just invoke the function it returns.

```js
var cleanup = require('global-jsdom')()

// do things

cleanup()
```

## Tape

In [tape][], run it before your other tests.

```js
require('global-jsdom')()

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

If you prefer to use `import` rather than `require`, you might want to use `global-jsdom/register` instead. Place it on top of your other import calls.

```js
import 'global-jsdom/register'
import React from 'react'
import jQuery from 'jquery'
// ...
```

## Migration from `jsdom-global`
1. `browserify` support is dropped - I have no way to test this and `webpack` started giving higher priority to the `browser` field in `package.json` than `module`

## Thanks

original code forked from [jsdom-global](https://github.com/rstacruz/jsdom-global)
