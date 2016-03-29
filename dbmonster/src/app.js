'use strict'

require('./config')
require('./db.css')
require('bootstrap/dist/css/bootstrap.css')

const Table = require('./table.html')
const getDatabases = require('./data.js')

const content = document.getElementById('app')
const table = new Table({dbs: getDatabases()})
console.log({dbs: getDatabases()})
table.update()
content.appendChild(table.get())

function redraw () {
  table.context = {dbs: getDatabases()}
  table.update()
  setTimeout(redraw, window.TIMEOUT)
}
redraw()
