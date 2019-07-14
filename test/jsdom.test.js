import jsdom from '../src'

describe('jsdom-global', () => {
  beforeEach(() => global.document && global.document.destroy && global.document.destroy())
  afterEach(() => global.document && global.document.destroy && global.document.destroy())

  describe('initialization and cleanup', () => {
    it('works', () => {
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
      const cleanup = jsdom()
      expect(global.document).to.exist
      expect(global.alert).to.exist
      cleanup()
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
    })
  })

  describe('dom', () => {
    it('works', () => {
      jsdom()
      const div = document.createElement('div')
      div.innerHTML = 'hello'
      /* eslint-disable-next-line unicorn/prefer-node-append */
      document.body.appendChild(div)
      expect(document.querySelector('body').innerHTML).to.equal('<div>hello</div>')
    })
  })

  describe('jsdom', () => {
    it('works', () => {
      expect(global.$jsdom).to.be.undefined
      jsdom()
      expect(global.$jsdom).to.exist
      const apiMethods = ['serialize', 'nodeLocation', 'runVMScript', 'reconfigure']
      apiMethods.forEach(m => expect(global.$jsdom[m]).to.be.a('function'))
    })
  })

  describe('register', () => {
    it('works', () => {
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
      // eslint-disable-next-line global-require
      require('../src/register')
      expect(global.document).to.exist
      expect(global.alert).to.exist
      global.document.destroy()
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
    })
  })
  describe('idempotency', () => {
    it('works', () => {
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
      jsdom()
      expect(global.document).to.exist
      expect(global.alert).to.exist
      jsdom()()
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
      jsdom()()
      expect(global.document).to.be.undefined
      expect(global.alert).to.be.undefined
    })
  })
})
