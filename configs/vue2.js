module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:vue/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
}
