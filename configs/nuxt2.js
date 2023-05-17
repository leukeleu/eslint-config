module.exports = {
  extends: ['plugin:nuxt/recommended', 'prettier', require.resolve('./vue2')],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
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
