const jsdom = require('../commonjs/index.cjs')

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
    it('works', () => {
      expectedKeys.forEach((k) => expect(global[k]).to.be.undefined)
      // eslint-disable-next-line global-require
      require('../commonjs/register.cjs')
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
