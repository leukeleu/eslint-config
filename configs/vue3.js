module.exports = {
  extends: [
    require.resolve('./_vue-generic'),
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    // Rule not in Vue generic because it has to overwrite prettier.
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
    // Rule not in Vue generic because it has to overwrite prettier.
    'vue/html-closing-bracket-spacing': 'error',
  },
}
