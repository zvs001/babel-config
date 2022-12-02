## Install

`yarn add @zvs001/babel-config`


List of configurations:

#### core

Configuration is based on [metro-react-native-babel-preset](https://www.npmjs.com/package/metro-react-native-babel-preset)

#### react

Based on `core` config

Configuration includes imports optimisations for:
- @mui
- @fortawesome


## Example

Update `.babelrc`:

```json
{
  "extends": "@zvs001/babel-config/react",
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
