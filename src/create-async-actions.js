'use strict';
var axn = require('axn');

module.exports = function createActions(specs) {
  var obj = {};
  if (Array.isArray(specs)) {
    specs.forEach(function (name) {
      obj[name] = axn.async();
    });
  } else {
    Object.keys(specs).forEach(function (name) {
      obj[name] = axn.async(specs[name]);
    });
  }
  return obj;
};
