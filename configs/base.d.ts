declare module '@leukeleu/eslint-config/configs/base' {
  import { Linter } from 'eslint'

  const eslintRecommended: Linter.Config
  const typeScriptConfig: Linter.Config[]
  const leukeleuVue3Overrides: Linter.Config
  const vue3Config: Linter.Config[]
  const leukeleuNuxt3Overrides: Linter.Config[]
  const leukeleuOverrides: Linter.Config
  const prettierConfig: Linter.Config

  export {
    eslintRecommended,
    typeScriptConfig,
    leukeleuVue3Overrides,
    vue3Config,
    leukeleuNuxt3Overrides,
    leukeleuOverrides,
    prettierConfig,
  }
}
