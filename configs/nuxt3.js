module.exports = {
  extends: [require.resolve('./vue3')],
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
    {
      files: ['*.vue'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
}
