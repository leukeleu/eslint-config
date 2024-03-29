# Leukeleu Eslint configuration

## Installing this package

If you already had Eslint installed in your project you can delete this first with `npm uninstall eslint`. There may also be other Eslint packages you want to remove.

Then install this package as a development dependency `npm i -D @leukeleu/eslint-config`.

## Adding the config

In the configs folder you can find all the Eslint config files to choose from.
Select the config you need and add it to your `.eslintrc.js`:

```js
module.exports = {
  extends: ['@leukeleu/eslint-config/configs/javascript'],
}
```

## Add script commands to package.json

To run Eslint on your code, add the following script to your package.json:

```js
"scripts": {
  "lint:js": "eslint . --ext .vue,.js,.ts --cache",
  "lintfix:js": "npm run lint:js -- --fix",
}
```

## Running the check

Now you can run the Eslint check using `npm run lint:js` or `npm run lintfix:js` to auto fix.

## Extending/ changing config

This is not recommended as the goal is have similar settings in all projects, but if for some reason you need to add or change the config it's possible. Just add to the rules or add other configs to the extends list.

```js
module.exports = {
  extends: ['@leukeleu/eslint-config/configs/javascript'],
  rules: {
    'for-direction': 'warning',
  },
}
```

## Contributing

To learn how to local test and publish this package, please refer to the instructions in the `CONTRIBUTORS.md` file.
