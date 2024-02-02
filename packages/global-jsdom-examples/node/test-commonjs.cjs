/* eslint-disable-next-line import/no-unresolved */
require('global-jsdom/register')

const assert = require('assert')

it('works', () => {
  assert(global.$jsdom, 'no global.$jsdom')
})
