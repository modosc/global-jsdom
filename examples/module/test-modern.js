import 'global-jsdom/register'
import assert from 'assert'

assert(global.$jsdom, 'no global.$jsdom')
