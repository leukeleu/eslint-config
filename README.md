# Leukeleu ESLint configuration

ESLint configuration for Leukeleu projects. To be used in tandem with Prettier.

## Installing this package

If you already had ESLint installed in your project you can delete this first with `npm uninstall eslint`.
There may also be other ESLint packages (plugins and configs) you want to remove.

Then install this package as a development dependency `npm i -D @leukeleu/eslint-config`.

## Adding the config

In the configs folder you can find all the ESLint config files to choose from.
Select the config you need and add it to your `eslint.config.mjs`.

### Javascript

```js
import eslintConfig from '@leukeleu/eslint-config/configs/javascript'

export default eslintConfig
```

### Typescript

```js
import eslintConfig from '@leukeleu/eslint-config/configs/typescript'

export default eslintConfig
```

### Vue 2

```js
import eslintConfig from '@leukeleu/eslint-config/configs/vue2'

export default eslintConfig
```

### Vue 3

```js
import eslintConfig from '@leukeleu/eslint-config/configs/vue3'

export default eslintConfig
```

### Nuxt 3

Nuxt has its own ESLint module that configures ESLint based on the Nuxt project configuration. This generates a config
file that knows about the Nuxt project structure, layers, auto-imports, etc.

Refer to the [Nuxt ESLint module documentation](https://eslint.nuxt.com/packages/module) for instructions on how to
add and configure this Nuxt module.

After adding the Nuxt module, you can augment the generated ESLint config with the Leukeleu config:

```js
import withNuxt from './.nuxt/eslint.config.mjs'

import eslintConfig from '@leukeleu/eslint-config/configs/nuxt3'

export default withNuxt(...eslintConfig)
```

## Add script commands to package.json

To run ESLint on your code, add the following script to your `package.json`:

```json
{
  "scripts": {
    "lint:js": "eslint --cache",
    "lintfix:js": "npm run lint:js -- --fix"
  }
}
```

## Running the check

Now you can run the ESLint check using `npm run lint:js` or `npm run lintfix:js` to auto fix.

## Extending config and ignoring files

Even though the goal is to standardize the ESLint config across all projects, it is possible to extend or change the
config if needed. This is especially useful if you want to ignore certain files or enable additional rules.

```js
import eslintConfig from '@leukeleu/eslint-config/configs/javascript'

export default [
  ...eslintConfig,
  {
    rules: {
      'for-direction': 'warn',
    },
  },
  {
    ignores: ['dist'],
  },
]
```

## Contributing

To learn how to local test and publish this package, please refer to the instructions in the `CONTRIBUTORS.md` file.
