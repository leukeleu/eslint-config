import {
  eslintRecommended,
  leukeleuOverrides,
  prettierConfig,
  vue2Config,
} from './base.js'

export default [
  eslintRecommended,
  leukeleuOverrides,
  // Vue 2 specific configuration
  ...vue2Config,
  // Prettier is last to turn off conflicting rules.
  prettierConfig,
]
