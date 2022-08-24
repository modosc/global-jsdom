/* eslint-disable-next-line import/no-unresolved */
import 'global-jsdom/register'
import assert from 'assert'

it('works', () => {
  assert(global.$jsdom, 'no global.$jsdom')
})
