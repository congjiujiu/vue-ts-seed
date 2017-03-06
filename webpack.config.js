var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve(__dirname, './src/main.ts'),
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  resolve: {
      extensions: ['', '.ts', '.vue', '.js']
  },
  module: {
      loaders: [
          { test: /\.vue$/, loader: 'vue' },
          { test: /\.ts$/, loader: 'vue-ts' }
      ],
  },
  vue: {
    // instruct vue-loader to load TypeScript
    loaders: { js: 'vue-ts-loader', },
    // make TS' generated code cooperate with vue-loader
    esModule: true
  },
};
