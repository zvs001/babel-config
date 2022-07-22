## Install

`yarn add @zvs001/babel-config`


List of configurations:
- core
- react

## Example

Update `.babelrc`:

```json
{
  "extends": "@zvs001/babel-config/react/babel.json",
  "sourceRoot": ".",
  "plugins": [
    [
      "module-resolver",
      {
        "extensions": [".js", ".ts", ".tsx"],
        "alias": {
          "@reducers": "./src/reducers/"
        }
      }
    ]
  ]
}

```
