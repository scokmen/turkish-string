var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    library: 'TurkishString',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'turkish-string.min.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  stats: {
    colors: true
  },
  mode: "production"
};