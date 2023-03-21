module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:vuejs-accessibility/recommended',
  ],
  plugins: ['vuejs-accessibility'],
  rules: {
    'vue/no-empty-component-block': 'error',
    'vue/html-button-has-type': 'warn',
  },
}
