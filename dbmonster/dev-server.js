'use strict'

let webpack = require('webpack')
let WebpackDevServer = require('webpack-dev-server')
let config = require('./webpack.config.js')

let compiler = webpack(config)
let server = new WebpackDevServer(compiler, {
  stats: {colors: true}
})
server.listen(8009)
