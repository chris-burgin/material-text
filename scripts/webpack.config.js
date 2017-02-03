const webpack = require('webpack');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: './dist/main.js'
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
