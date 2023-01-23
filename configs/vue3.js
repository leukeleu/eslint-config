const path = require('path')

module.exports = {
  extends: [
    path.resolve(__dirname, 'javascript'),
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
}
