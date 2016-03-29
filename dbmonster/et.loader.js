'use strict'

let loaderUtils = require('loader-utils')
let et = require('et-template')

module.exports = function (content) {
  if (this.cacheable) this.cacheable()

  let options = loaderUtils.parseQuery(this.query)
  return et.compile(content, options)
}
