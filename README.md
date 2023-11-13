## Install

`yarn add @zvs001/babel-config`


List of configurations:

#### core

Configuration is based on [metro-react-native-babel-preset](https://www.npmjs.com/package/metro-react-native-babel-preset)

#### react

Based on `core` config

Includes: 
 - @emotion plugin with auto-pragma

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

To make typescript to properly work with pragma-auto? add next update to `tsconfig.json`:

```json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "@emotion/react",
  }
}
```
