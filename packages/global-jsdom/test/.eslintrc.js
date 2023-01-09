module.exports = {
  extends: '../../../.eslintrc.js',
  env: {
    mocha: true,
  },
  rules: {
    // disabled  because eslint doesn't parse chai correctly:
    // https://github.com/eslint/eslint/issues/2102
    //
    // another alternative is https://github.com/prodatakey/dirty-chai
    'no-unused-expressions': 0,
  },

  globals: {
    it: false,
    expect: false,
    describe: false,
    context: false,
  },
}
