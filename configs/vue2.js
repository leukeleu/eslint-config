module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['vuejs-accessibility'],
}
