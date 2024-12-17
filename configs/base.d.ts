declare module '@leukeleu/eslint-config/configs/base' {
  import { Linter } from 'eslint'

  const eslintRecommended: Linter.Config
  const typeScriptConfig: Linter.Config[]
  const vue2Config: Linter.Config[]
  const leukeleuVue3Overrides: Linter.Config
  const vue3Config: Linter.Config[]
  const leukeleuNuxt3Overrides: Linter.Config[]
  const leukeleuOverrides: Linter.Config
  const prettierConfig: Linter.Config

  export {
    eslintRecommended,
    typeScriptConfig,
    vue2Config,
    leukeleuVue3Overrides,
    vue3Config,
    leukeleuNuxt3Overrides,
    leukeleuOverrides,
    prettierConfig,
  }
}
