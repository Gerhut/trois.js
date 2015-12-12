var webpack = require('webpack')

module.exports = {
  entry: './src/index',
  output: {
    path: './dist',
    filename: 'trois.js',
    library: 'Trois',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel' }
    ]
  },
  babel: {
    presets: ["es2015"]
  },
  devtool: '#source-map'
}
