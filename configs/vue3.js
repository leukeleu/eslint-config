import {
  eslintRecommended,
  leukeleuOverrides,
  prettierConfig,
  typeScriptConfig,
  vue3Config,
} from './base.js'

export default [
  eslintRecommended,
  leukeleuOverrides,
  ...typeScriptConfig,
  // Vue 3 specific configuration
  ...vue3Config,
  // Prettier is last to turn off conflicting rules.
  prettierConfig,
]
