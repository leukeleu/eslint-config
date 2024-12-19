import eslintConfigJavascript from './configs/javascript.js'

export default [
  ...eslintConfigJavascript,
  {
    ignores: ['tests/fixtures'],
  },
]
