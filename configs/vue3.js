module.exports = {
  extends: [
    require.resolve('./_vue-generic'),
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: "module",
    lib: ["DOM", "ESNext"]
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
}
