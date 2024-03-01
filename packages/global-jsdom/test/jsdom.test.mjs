/* eslint-disable-next-line import/extensions */
import jsdom from '../esm/index.mjs'

describe('jsdom-global', () => {
  beforeEach(() => global.document && global.document.destroy && global.document.destroy())
  afterEach(() => global.document && global.document.destroy && global.document.destroy())

  const expectedKeys = ['document', 'alert', 'requestAnimationFrame', 'NodeList']

  describe('initialization and cleanup', () => {
    it('works', () => {
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
      const cleanup = jsdom()
      expectedKeys.forEach((k) => expect(global[k]).to.exist)
      cleanup()
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
    })
  })

  describe('initialization and cleanup with `scripts: dangerously`', () => {
    it('works', () => {
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
      const cleanup = jsdom(undefined, { runScripts: 'dangerously' })
      expectedKeys.forEach((k) => expect(global[k]).to.exist)
      cleanup()
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
    })
  })

  describe('dom', () => {
    it('works', () => {
      jsdom()
      const div = document.createElement('div')
      div.innerHTML = 'hello'
      document.body.appendChild(div)
      expect(document.querySelector('body').innerHTML).to.equal('<div>hello</div>')
    })
  })

  const apiMethods = ['serialize', 'nodeLocation', 'getInternalVMContext', 'reconfigure']

  describe('jsdom', () => {
    it('works', () => {
      expect(global.$jsdom).to.be.undefined
      jsdom()
      expect(global.$jsdom).to.exist
      apiMethods.forEach((m) => expect(global.$jsdom[m]).to.be.a('function'))
    })
  })

  describe('register', () => {
    it('works', async () => {
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
      /* eslint-disable-next-line import/extensions */
      await import('../esm/register.mjs')
      expectedKeys.forEach((k) => expect(global[k]).to.exist)
      global.document.destroy()
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
    })
  })
  describe('idempotency', () => {
    it('works', () => {
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
      jsdom()
      expectedKeys.forEach((k) => expect(global[k]).to.exist)
      jsdom()()
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
      jsdom()()
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
    })
  })
})
