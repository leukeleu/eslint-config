module.exports = {
  extends: ['plugin:vue/vue3-recommended', require.resolve('./_vue-generic')],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
  },
}
