module.exports = {
  extends: [require.resolve('./vue2'), 'plugin:nuxt/recommended', 'prettier'],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  overrides: [
    {
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
