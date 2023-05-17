module.exports = {
  extends: [
    'plugin:vue/recommended',
    'prettier',
    require.resolve('./_vue-generic'),
  ],
  parser: 'vue-eslint-parser',
}
