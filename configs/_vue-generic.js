module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:vuejs-accessibility/recommended',
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