'use strict'

const path = require('path')
const fontName = 'fonts/[name].[hash:8].[ext]'

module.exports = {
  entry: './src/app',
  output: {
    path: './dist',
    filename: 'app.js'
  },
  module: {
    loaders: [
      {test: /\.html/, loader: 'et'},
      {test: /\.css$/, loader: 'style!css'},
      {test: /\.svg$/, loader: 'file', query: {name: fontName}},
      {test: /\.woff((\?|\#)[\?\#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, minetype: 'application/font-woff', name: fontName}},
      {test: /\.woff2((\?|\#)[\?\#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, minetype: 'application/font-woff2', name: fontName}},
      {test: /\.ttf((\?|\#)[\?\#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, minetype: 'application/octet-stream', name: fontName}},
      {test: /\.eot((\?|\#)[\?\#\w\d_-]+)?$/, loader: 'url', query: {limit: 100, name: fontName}}
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  devtool: 'inline-source-map'
}
