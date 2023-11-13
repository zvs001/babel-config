const requireUtils = require('root-require-utils')

const packageJson = requireUtils.require('package.json')

const { dependencies = {}, devDependencies = {} } = packageJson || {}

const directImportModules = ['@mui/system', '@mui/material', '@mui/icons-material', '@mui/lab']
const directImportModulesFiltered = directImportModules.filter((module) => {
  return dependencies[module] || devDependencies[module]
})

const config = {
  extends: '../core/babel.json',
  presets: [
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
  ],
  plugins: [
    '@emotion',
    [
      'babel-plugin-direct-import',
      {
        modules: directImportModulesFiltered,
      },
    ],
    [
      'transform-imports',
      {
        '@fortawesome/free-solid-svg-icons': {
          transform: '@fortawesome/free-solid-svg-icons/${member}',
          skipDefaultConversion: true,
        },
        '@fortawesome/free-brands-svg-icons': {
          transform: '@fortawesome/free-brands-svg-icons/${member}',
          skipDefaultConversion: true,
        },
      },
    ],
  ],
}

module.exports = config
