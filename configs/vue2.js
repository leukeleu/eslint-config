module.exports = {
  extends: [
    require.resolve('./_vue-generic'),
    'plugin:vue/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  rules: {
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
