module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['vuejs-accessibility'],
  rules: {
    'vue/html-self-closing': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/html-button-has-type': 'error',
  },
}
