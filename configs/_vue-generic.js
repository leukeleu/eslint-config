module.exports = {
  extends: [
    'plugin:vue/base',
    'plugin:vuejs-accessibility/recommended',
    require.resolve('./javascript'),
  ],
  plugins: ['vue', 'vuejs-accessibility'],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/no-empty-component-block': 'error',
    'vue/html-button-has-type': 'warn',
  },
}
