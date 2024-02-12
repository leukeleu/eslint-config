module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // Standard JS rules
    'eslint:recommended',

    // Vue3 rules
    'plugin:vue/vue3-recommended',
    'plugin:vuejs-accessibility/recommended',

    // Typescript rules
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/stylistic',

    // Nuxt rules
    'plugin:nuxt/recommended',

    // Prettier rules (turns off rules that conflict with Prettier)
    'prettier',
  ],

  // We don't need to include the vue-eslint-parser here because it's included in the nuxt/recommended settings

  // TS parser settings
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    // Needed so TS doesn't complain about usage of browser APIs and newer JS features
    lib: ['DOM', 'ESNext'],
  },
  rules: {
    'no-undefined': 'error',
    'no-console': 'error',
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
    // Nuxt uses auto imports. This will result in 'no-undef' errors when the code is valid.
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
