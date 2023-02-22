module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:vuejs-accessibility/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'vuejs-accessibility'],
}
