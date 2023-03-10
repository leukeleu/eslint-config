module.exports = {
  extends: [
    require.resolve('./javascript'),
    'plugin:import/recommended',
    'plugin:vuejs-accessibility/recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  plugins: ['vuejs-accessibility'],
  rules: {
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
