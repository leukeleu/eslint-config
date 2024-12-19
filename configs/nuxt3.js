import {
  typeScriptConfig,
  leukeleuOverrides,
  leukeleuVue3Overrides,
  leukeleuNuxt3Overrides,
  prettierConfig,
} from './base.js'

// Only include the rules (none of the setup) from the TypeScript config
const tsConfig = typeScriptConfig.filter((config) =>
  [
    'typescript-eslint/recommended',
    'typescript-eslint/stylistic',
    '@leukeleu/typescript',
  ].includes(config.name),
)

export default [
  leukeleuOverrides,
  ...tsConfig,
  leukeleuVue3Overrides,
  ...leukeleuNuxt3Overrides,
  // Prettier turns off conflicting rules and needs to be last
  prettierConfig,
]
