# global-jsdom

> Enables DOM in Node.js

global-jsdom will inject `document`, `window` and other DOM API into your Node.js environment. Useful for running, in Node.js, tests that are made for browsers.

## Install

Requires [jsdom][] v11 or above.

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
```

You may also pass parameters to jsdomGlobal() like so: `require('global-jsdom')(html, options)`.
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

## Browserify

If you use [Browserify] on your tests (eg: [smokestack], [tape-run], [budo], [hihat], [zuul], and so on), doing `require('global-jsdom')()` is a noop. In practice, this means you can use global-jsdom even if your tests are powered by browserify, and your test will now work in both the browser and Node.

[zuul]: https://www.npmjs.com/package/zuul
[tape-run]: https://www.npmjs.com/package/tape-run
[budo]: https://github.com/mattdesl/budo
[hihat]: https://www.npmjs.com/package/hihat
[smokestack]: https://www.npmjs.com/package/smokestack

* Writing your tests (`test.js`):

  ```js
  require('global-jsdom')()

  // ...do your tests here
  ```

* Running it with [smokestack]:

  ```sh
  browserify test.js | smokestack          # run in a browser
  node test.js                             # or the console
  browserify test.js --no-bundle-external  # also works (but why bother?)
  ```

* Running it with Babel ([babelify] or [babel-cli]):

  ```sh
  browserify test.js -t babelify | smokestack  # run in a browser (with babel)
  babel-node test.js                           # or the console
  ```

[Browserify]: http://browserify.org/
[babel-cli]: https://babeljs.io/docs/usage/cli/
[babelify]: https://github.com/babel/babelify

## Thanks

original code forked from [jsdom-global](https://github.com/rstacruz/jsdom-global)
