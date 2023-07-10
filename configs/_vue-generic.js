module.exports = {
  extends: [
    'plugin:vuejs-accessibility/recommended',
    'prettier',
    require.resolve('./javascript'),
  ],
  plugins: ['vuejs-accessibility'],
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
