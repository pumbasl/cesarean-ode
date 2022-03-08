module.exports = {
  presets: [
    ['@babel/preset-env', { modules: false }],
    ['@babel/preset-react', { "runtime": "automatic", "importSource": "@emotion/react" }]
  ],

  plugins: [
    'react-hot-loader/babel',
    '@emotion/babel-plugin'
  ]
};