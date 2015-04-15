
var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/app'
    ]
  },
  devtool: 'eval',
  output: {
    path: 'build',
    filename: 'app.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, include: /node_modules/, loaders: ['jsx?harmony']},
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}
    ]
  },
  //Stubbed as empty so that Joi works
  node: {
     net : 'empty',
     tls : 'empty',
     dns : 'empty'
  }
};
