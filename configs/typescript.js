import {
  typeScriptConfig,
  prettierConfig,
  eslintRecommended,
  leukeleuOverrides,
} from './base.js'

export default [
  eslintRecommended,
  ...typeScriptConfig,
  leukeleuOverrides,
  // Prettier turns off conflicting rules and needs to be last
  prettierConfig,
]
