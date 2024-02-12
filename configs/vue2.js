module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // Standard JS rules
    'eslint:recommended',

    // Vue2 rules
    'plugin:vue/recommended',
    'plugin:vuejs-accessibility/recommended',

    // Prettier rules (turns off rules that conflict with Prettier)
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  rules: {
    // Our base custom rules
    'no-undefined': 'error',
    'no-console': 'error',

    // Our Vue custom rules
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
