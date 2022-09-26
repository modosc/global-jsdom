## [v8.6.0]
- (really) fix jsdom peerDep
- fix(perf): consolidate window key filtering https://github.com/modosc/global-jsdom/pull/256
- update semver for jsdom in peerDeps (fixes #245) https://github.com/modosc/global-jsdom/pull/259
- update actions/checkout@v3, actions/setup-node@v3, node-version: 16 https://github.com/modosc/global-jsdom/pull/258
- remove babel deps

## [v8.5.0]
- Relax jsdom peer dependency for jsdom 20
- Update deps

## [v8.4.0]
- Relax jsdom peer dependency for jsdom 19
- Update deps

## [v8.3.0]
- Relax jsdom peer dependency for jsdom 18
- Update deps

## [v8.2.0]
- Relax jsdom peer dependency for jsdom 17

## [v8.1.0]
- Fix jsdom peer dependency version specifier https://github.com/modosc/global-jsdom/pull/126
- Update deps

## [v8.0.0]
> Feb 10, 2021

- **BREAKING CHANGE** `babel` usage removed, Node v12 or greater is required
- **BREAKING CHANGE** `pretendToBeVisual` is enabled by default, see https://github.com/modosc/global-jsdom/issues/97
- **BREAKING CHANGE** ES2015 modules are now `.mjs` files, you may need to
  [enable a node flag](https://nodejs.org/api/esm.html#esm_conditional_exports)

## [v5.0.0]
> Jul 14, 2019

- Handle jsdom 15
[v5.0.0]: https://github.com/modosc/global-jsdom/compare/v4.3.0...v5.0.0


## [v4.3.0]
> Jul 14, 2019

- Update deps
[v4.3.0]: https://github.com/modosc/global-jsdom/compare/v4.2.0...v4.3.0

## [v4.2.0]
> Oct 19, 2017

- Just kidding, use `global.$jsdom` instead.
[v4.2.0]: https://github.com/modosc/global-jsdom/compare/v4.1.0...v4.2.0

## [v4.1.0]
> Oct 18, 2017

- Don't clobber `global.jsdom`, use `global._jsdom` instead
[v4.1.0]: https://github.com/modosc/global-jsdom/compare/v4.0.0...v4.1.0

## [v8.3.0]
- Relax jsdom peer dependency for jsdom 18
- Update deps## [v4.0.0]
> Oct 18, 2017

- Update peerDeps for jsdom 11
- Add es module export
- Drop browserify support
- Add access to global.jsdom instance
[v4.0.0]: https://github.com/modosc/global-jsdom/compare/v3.0.2...v4.0.0

## [v3.0.2]
> May  8, 2017

- [#17] - Fix issue with `Image`. ([@jtag05])
- [#16] - Mark jsdom as a peer dependency. ([@Cinematique])

[v3.0.2]: https://github.com/modosc/global-jsdom/compare/v3.0.0...v3.0.2

## [v3.0.0]
> May  8, 2017

- [#23] - jsdom-global now requires jsdom v10. ([@GinjiBan])

[v3.0.0]: https://github.com/modosc/global-jsdom/compare/v2.1.1...v3.0.0

## [v2.1.1]
> Dec 24, 2016

- [#11] - Fix issues with XMLHttpRequest.

[v2.1.1]: https://github.com/modosc/global-jsdom/compare/v2.1.0...v2.1.1

## [v2.1.0]
> Aug 22, 2016

- [#6], [#7] - Fix support for jsdom 9.4.0.

[v2.1.0]: https://github.com/modosc/global-jsdom/compare/v2.0.0...v2.1.0

## [v2.0.0]
> May 13, 2016

- [#3] - Allow overriding `html` and `options` being passed to jsdom. ([#5], [@kenjiru])
- Deprecate the undocumented (and never-used) feature of calling `jsdom(function)`.

[v2.0.0]: https://github.com/modosc/global-jsdom/compare/v1.7.0...v2.0.0

## [v1.7.0]
> Mar 21, 2016

- Implement `jsdom-global/register` for use in simpler cases.

[v1.7.0]: https://github.com/modosc/global-jsdom/compare/v1.6.2...v1.7.0

## [v1.6.2]
> Feb 22, 2016

- Fix typo in browser.js.

[v1.6.2]: https://github.com/modosc/global-jsdom/compare/v1.6.1...v1.6.2

## [v1.6.1]
> Jan 15, 2016

- Make `jsdomGlobal()` idempotent - that is, you may call it twice and expect
the same result without any side effects.

[v1.6.1]: https://github.com/modosc/global-jsdom/compare/v1.5.0...v1.6.1

## [v1.5.0]
> Jan 12, 2016

- Remove tape integration... we don't need it.

[v1.5.0]: https://github.com/modosc/global-jsdom/compare/v1.4.0...v1.5.0

## [v1.4.0]
> Jan 12, 2016

- `tape`: Shows navigator userAgent in tape output.

[v1.4.0]: https://github.com/modosc/global-jsdom/compare/v1.3.0...v1.4.0

## [v1.3.0]
> Jan 11, 2016

- Add browserify support.

[v1.3.0]: https://github.com/modosc/global-jsdom/compare/v1.2.0...v1.3.0

## [v1.2.0]
> Jan 11, 2016

- Fix compatibility with legacy Node.js versions.

[v1.2.0]: https://github.com/modosc/global-jsdom/compare/v1.1.0...v1.2.0

## [v1.1.0]
> Jan 11, 2016

- Add `cleanup()`.

[v1.1.0]: https://github.com/modosc/global-jsdom/compare/v1.0.0...v1.1.0

## [v1.0.0]
> Jan 11, 2016

- Initial release.

[v1.0.0]: https://github.com/modosc/global-jsdom/tree/v1.0.0
[#3]: https://github.com/modosc/global-jsdom/issues/3
[#5]: https://github.com/modosc/global-jsdom/issues/5
[#6]: https://github.com/modosc/global-jsdom/issues/6
[#7]: https://github.com/modosc/global-jsdom/issues/7
[#2]: https://github.com/modosc/global-jsdom/issues/2
[#11]: https://github.com/modosc/global-jsdom/issues/11
[#16]: https://github.com/modosc/global-jsdom/issues/16
[#17]: https://github.com/modosc/global-jsdom/issues/17
[#23]: https://github.com/modosc/global-jsdom/issues/23
[@Cinematique]: https://github.com/Cinematique
[@GinjiBan]: https://github.com/GinjiBan
[@jtag05]: https://github.com/jtag05
[@kenjiru]: https://github.com/kenjiru
[@ngryman]: https://github.com/ngryman
