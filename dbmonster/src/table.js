'use strict'

var _dep = require('et-dependency');
var _dep_template = _dep.template;
var _dep_element = _dep.element;
var _dep_efor = _dep.efor;
var _dep_text = _dep.text;
var _dep_updateAttrs = _dep.updateAttrs;
var _dep_updateText = _dep.updateText;

var Template_0 = _dep_template(function(_template) {
  _dep_element(_template, 0, 1, 'TABLE', [
    ['class', 'table table-striped latest-data']
  ]);
  _dep_element(_template, 1, 2, 'TBODY');
  _dep_efor(_template, 2, 3, Template_3, function(it, _args) {
    return it.dbs;
  });
});

var Template_3 = _dep_template(function(_template) {
  _dep_element(_template, 3, 4, 'TR');
  _dep_element(_template, 4, 5, 'TD', [
      ['class', 'dbname']
  ]);
  _dep_text(_template, 5, 6);
  _dep_element(_template, 4, 7, 'TD', [
    ['class', 'query-count']
  ]);
  _dep_element(_template, 7, 8, 'SPAN');
  _dep_text(_template, 8, 9);
  _dep_efor(_template, 4, 10, Template_10, function(it, _args) {
    var db = _args[0];
    var _index = _args[1];
    return db.topFiveQueries;
  });
}, function (_cache, it, _args) {
  var db = _args[0];
  var _index = _args[1];

  var _patches = [];
  _patches[0] = db.name;
  _patches[1] = db.countClassName;
  _patches[2] = db.queries.length;

  return _patches;
}, function (_template, it, _args, _patches, _cache) {

  var _tmp = _patches[0]
  if (_cache(0, _tmp)) {
    _dep_updateText(_template, 6, _tmp);
  }

  var _tmp = _patches[1]
  if (_cache(1, _tmp)) {
    _dep_updateAttrs(_template, 8, [
      ['class', _tmp]
    ]);
  }

  var _tmp = _patches[2]
  if (_cache(2, _tmp)) {
    _dep_updateText(_template, 9, _tmp);
  }
});

var Template_10 = _dep_template(function(_template) {
  _dep_element(_template, 10, 11, 'TD');
  _dep_text(_template, 11, 12);
  _dep_element(_template, 11, 13, 'DIV', [
    ['class', 'popover left']
  ]);
  _dep_element(_template, 13, 14, 'DIV', [
    ['class', 'popover-content']
  ]);
  _dep_text(_template, 14, 15);
  _dep_element(_template, 13, 16, 'DIV', [
    ['class', 'arrow']
  ]);
}, function (_template, it, _args) {
  var db = _args[0];
  var _index = _args[1];
  var query = _args[2];
  var _index = _args[3];

  var _patches = [];
  _patches[0] = query.className;
  _patches[1] = query.elapsed;
  _patches[2] = query.query;
  return _patches;
}, function (_template, it, _args, _patches, _cache) {

  var _tmp = _patches[0]
  if (_cache(0, _patches[0])) {
    _dep_updateAttrs(_template, 11, [
      ['class', 'Query ' + _tmp]
    ]);
  }

  var _tmp = _patches[1]
  if (_cache(1, _patches[1])) {
    _dep_updateText(_template, 12, _tmp);
  }

  var _tmp = _patches[2]
  if (_cache(2, _patches[2])) {
    _dep_updateText(_template, 15, _tmp);
  }
});
module.exports = Template_0;
