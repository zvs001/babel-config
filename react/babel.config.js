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
