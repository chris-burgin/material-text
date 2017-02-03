const webpack = require('webpack');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: './dist/js/main.js'
  },
  module : {
    loaders : [
      {
        loader: "babel-loader?cacheDirectory=true",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}
