/**
 * The configuration for basic JS files without the use of a framework.
 * Just has the recommended eslint and prettier rules
 **/

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['eslint:recommended', 'prettier'],
  rules: {
    'no-undefined': 'error',
    'no-console': 'error',
  },
}
