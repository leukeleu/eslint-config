/**
 * ESLint flat configurations for Leukeleu.
 *
 * These configs must be combined for a full ESLint configuration.
 *
 * The sibling config files next to this file contain these combinations.
 */

import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import pluginVue from 'eslint-plugin-vue'
import pluginVueA11y from 'eslint-plugin-vuejs-accessibility'
import tseslint from 'typescript-eslint'

// ESLint recommended rules
// (wraps eslint:recommended to give it a name)
export const eslintRecommended = {
  name: 'eslint:recommended',
  ...js.configs.recommended,
}

// Typescript configuration
export const typeScriptConfig = [
  ...[...tseslint.configs.recommended, ...tseslint.configs.stylistic].map(
    (config) => ({
      ...config,
      ignores: ['**/*.{js,cjs,mjs}'],
    }),
  ),
  {
    name: '@leukeleu/typescript',
    ignores: ['**/*.{js,cjs,mjs}'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      // Our custom TypeScript rules
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': 'error',
      // re-enable no-undef for TypeScript
      'no-undef': 'error',
    },
  },
]

// Our custom Vue rules
const vueRules = {
  'vue/no-empty-component-block': 'error',
  'vue/html-button-has-type': 'warn',
}

// Leukeleu Vue 3 overrides
export const leukeleuVue3Overrides = {
  name: '@leukeleu/vue3',
  files: ['*.vue', '**/*.vue'],
  rules: {
    ...vueRules,
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style:not([scoped])', 'style[scoped]'],
      },
    ],
    // Deprecated rule
    'vue/component-tags-order': 'off',
  },
}

// Vue 3 configuration
export const vue3Config = [
  // Enable vue/recommended rules
  ...pluginVue.configs['flat/recommended'],
  // Enable vuejs-accessibility/recommended rules
  ...pluginVueA11y.configs['flat/recommended'],
  leukeleuVue3Overrides,
]

// Nuxt 3 overrides
export const leukeleuNuxt3Overrides = [
  {
    name: '@leukeleu/nuxt3-sort-config',
    files: ['**/nuxt.config.?([cm])[jt]s?(x)'],
    rules: {
      'nuxt/nuxt-config-keys-order': 'error',
    },
  },
]

// Leukeleu global overrides
export const leukeleuOverrides = {
  name: '@leukeleu/overrides',
  languageOptions: {
    globals: {
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    'no-undefined': 'error',
    'no-console': 'error',
    'prefer-const': 'error',
    camelcase: [
      'warn',
      {
        properties: 'never',
        ignoreDestructuring: true,
      },
    ],
  },
}

// Prettier configuration
// (wraps eslint-config-prettier to give it a name)
export const prettierConfig = {
  name: 'prettier',
  ...eslintConfigPrettier,
}
