
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
  plugins: [],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
//      { test: /\.js$/, include: /node_modules/, loaders: ['jsx?harmony']},
      { test: /\.js$/, include: /node_modules\/react-everscroll/, loader: 'babel-loader'},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
    ]
  }
};