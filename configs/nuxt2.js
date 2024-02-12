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

    // Nuxt rules
    'plugin:nuxt/recommended',

    // Prettier rules (turns off rules that conflict with Prettier)
    'prettier',
  ],
  // We don't need to include the vue-eslint-parser here because it's included in the nuxt/recommended config.

  // We need the babel eslint-parser on top of the Vue parser to use certain JS features (like dynamic imports).
  // This is covered by Typescript in the Nuxt3 config.
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
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
  },
  overrides: [
    {
      // These file names are part of the file based routing in Nuxt
      // and are not used directly by users.
      files: [
        '**/pages/**/*.{js,ts,vue}',
        '**/layouts/**/*.{js,ts,vue}',
        '**/app.{js,ts,vue}',
        '**/error.{js,ts,vue}',
      ],
      rules: { 'vue/multi-word-component-names': 'off' },
    },
  ],
}
