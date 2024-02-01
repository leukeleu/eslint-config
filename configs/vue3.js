module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // Standard JS rules
    'eslint:recommended',
    'prettier',
    // Vue3 rules
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',
    // Typescript rules
    'plugin:@typescript-eslint/recommended',
  ],
  parser: 'vue-eslint-parser',

  // TS parser settings
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Needed so TS doesn't complain about usage of browser APIs and newer JS features
    lib: ['DOM', 'ESNext'],
  },
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
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
}
