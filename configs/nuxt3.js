module.exports = {
  extends: [require.resolve('./vue3')],
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
