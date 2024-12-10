# Leukeleu ESlint configuration

## Installing this package

If you already had ESlint installed in your project you can delete this first with `npm uninstall eslint`.
There may also be other ESlint packages (plugins and configs) you want to remove.

Then install this package as a development dependency `npm i -D @leukeleu/eslint-config`.

## Adding the config

In the configs folder you can find all the Eslint config files to choose from.
Select the config you need and add it to your `eslint.config.mjs`:

```js
import eslintConfigJavascript from '@leukeleu/eslint-config/configs/javascript'

export default [...eslintConfigJavascript]
```

## Add script commands to package.json

To run ESlint on your code, add the following script to your `package.json`:

```js
"scripts": {
  "lint:js": "eslint --cache '**/*.{js,mjs,ts,vue}'",
  "lintfix:js": "npm run lint:js -- --fix",
}
```

## Running the check

Now you can run the Eslint check using `npm run lint:js` or `npm run lintfix:js` to auto fix.

## Extending/ changing config

Even though the goal is to standardize the ESlint config across all projects, it is possible to extend or change the
config if needed:

```js
import eslintConfigJavascript from '@leukeleu/eslint-config/configs/javascript'

export default [
  ...eslintConfigJavascript,
  {
    rules: {
      'for-direction': 'warning',
    },
  },
]
```

## Contributing

To learn how to local test and publish this package, please refer to the instructions in the `CONTRIBUTORS.md` file.
