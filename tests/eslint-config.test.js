import { describe, it, expect } from 'vitest'
import { ESLint } from 'eslint'

/**
 * Lint files
 * @param configFile {string} The ESLint config file
 * @param files {string[]} The files to lint
 * @returns {Promise<ESLint.LintResult[]>}
 */
async function lintFiles(configFile, files) {
  return new ESLint({
    overrideConfigFile: configFile,
    cwd: __dirname,
  }).lintFiles(files)
}

/**
 * Run an expectation and enhance the error message if it fails.
 * @param expectation {() => void} The expectation to run
 * @param onFailure {(error: Error) => Error} A function to enhance the error message
 */
function enhanceFailure(expectation, onFailure) {
  try {
    expectation()
  } catch (error) {
    throw onFailure(error)
  }
}

/**
 * Expect specific rule IDs to be violated
 * @param result {ESLint.LintResult} The ESLint result
 * @param severity {1 | 2} The severity of the rule violation (1 = warning, 2 = error)
 * @param rules {string[]} The expected error rule IDs
 */
function expectRuleViolations(result, severity, rules) {
  enhanceFailure(
    () => {
      const violations = result.messages.filter(
        ({ severity: s }) => s === severity,
      )
      expect(violations.length).toBe(rules.length)
      for (const [idx, message] of violations.entries()) {
        expect(message.ruleId || message.message).toBe(rules[idx])
      }
    },
    (error) => {
      if (result.messages.length) {
        error.message += '\nActual results:\n'
        error.message += result.messages
          .filter(({ severity: s }) => s === severity)
          .map(({ ruleId, message }) => `${ruleId}: ${message}`)
          .join('\n')
      }
      return error
    },
  )
}

/**
 * Expect specific rule IDs to be violated
 * @param result {ESLint.LintResult} The ESLint result
 * @param warnings {string[]} The expected error rule IDs
 */
function expectWarnings(result, warnings) {
  expectRuleViolations(result, 1, warnings)
}

/**
 * Expect specific rule IDs to be violated
 * @param result {ESLint.LintResult} The ESLint result
 * @param errors {string[]} The expected error rule IDs
 */
function expectErrors(result, errors) {
  expectRuleViolations(result, 2, errors)
}

/**
 * They all lint javascript files the same way
 */
for (const [key, config] of Object.entries({
  javascript: './configs/javascript/eslint.config.mjs',
  typescript: './configs/typescript/eslint.config.mjs',
  vue2: './configs/vue2/eslint.config.mjs',
  vue3: './configs/vue3/eslint.config.mjs',
})) {
  describe(`${key} config`, () => {
    it('lints javascript files', async () => {
      const [result] = await lintFiles(config, [
        './fixtures/javascript/example.js',
      ])
      expectWarnings(result, [
        'camelcase',
        "Unused eslint-disable directive (no problems were reported from 'no-undef').",
      ])
      expectErrors(result, [
        'no-unused-vars',
        'no-undefined',
        'no-console',
        'no-undef',
      ])
    })
  })
}

/**
 * Vue2 config lints Vue components
 */
describe('vue2 config', () => {
  it('lints vue files', async () => {
    const [result] = await lintFiles('./configs/vue2/eslint.config.mjs', [
      './fixtures/vue2/components/example.vue',
    ])
    expectWarnings(result, [
      'vue/no-v-html',
      'vue/attributes-order',
      'vue/html-button-has-type',
    ])
    expectErrors(result, [
      'vue/no-empty-component-block',
      'vue/block-order',
      'no-unused-vars',
      'no-undefined',
      'no-undef',
      'no-console',
      'vue/block-order',
      'vuejs-accessibility/click-events-have-key-events',
      'vuejs-accessibility/no-static-element-interactions',
      'vuejs-accessibility/no-autofocus',
      'vue/no-multiple-template-root',
    ])
  })
})

/**
 * TypeScript and Vue3 configs lint TypeScript files the same way
 */
for (const [key, config] of Object.entries({
  typescript: './configs/typescript/eslint.config.mjs',
  vue3: './configs/vue3/eslint.config.mjs',
})) {
  describe(`${key} config`, () => {
    it('lints typescript files', async () => {
      const [result] = await lintFiles(config, [
        './fixtures/typescript/example.ts',
      ])
      expectWarnings(result, [
        // 'camelcase' triggers twice,
        // once for declaration and once for usage
        'camelcase',
        'camelcase',
      ])
      expectErrors(result, [
        '@typescript-eslint/consistent-type-imports',
        '@typescript-eslint/no-inferrable-types',
        '@typescript-eslint/no-unused-vars',
        'no-undefined',
        'no-console',
        'no-undef',
      ])
    })
  })
}

/**
 * Vue3 config lints Vue components
 */
describe('vue3 config', () => {
  it('lints vue files', async () => {
    const [result] = await lintFiles('./configs/vue3/eslint.config.mjs', [
      './fixtures/vue3/components/example.vue',
    ])
    expectWarnings(result, [
      'vue/no-v-html',
      'vue/attributes-order',
      'vue/html-button-has-type',
      'vue/prop-name-casing',
      'camelcase',
    ])
    expectErrors(result, [
      'vue/multi-word-component-names',
      'vue/no-empty-component-block',
      'vue/block-order',
      'vue/block-order',
      'vuejs-accessibility/click-events-have-key-events',
      'vuejs-accessibility/no-static-element-interactions',
      'vuejs-accessibility/no-autofocus',
      'vue/block-order',
      '@typescript-eslint/no-inferrable-types',
      '@typescript-eslint/no-unused-vars',
      'no-undefined',
      'no-console',
      'no-undef',
    ])
  })
})
