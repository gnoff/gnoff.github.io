
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/app'
    ]
  },
  devtool: 'eval',
  output: {
    path: 'build/',
    filename: 'app.js'
  },
  plugins: [
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader'}
    ]
  },
};
