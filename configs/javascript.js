import { eslintRecommended, leukeleuOverrides, prettierConfig } from './base.js'

export default [
  eslintRecommended,
  leukeleuOverrides,
  // Prettier is last to turn off conflicting rules.
  prettierConfig,
]
