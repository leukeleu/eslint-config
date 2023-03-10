module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:vuejs-accessibility/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint', 'vuejs-accessibility'],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/html-self-closing': 'error',
    'vue/html-closing-bracket-spacing': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: '@/**',
            group: 'internal',
          },
          {
            pattern: '~/**',
            group: 'internal',
          },
        ],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
