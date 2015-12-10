'use strict'

var sortKeys = require('sort-keys')

function sortResult (val, mode) {
  var mul = mode === 'desc' ? 1 : -1
  return val * mul
}

module.exports = function (objt, mode) {
  return sortKeys(objt, {
    compare: function (a, b) {
      if (objt[a] > objt[b]) return sortResult(-1, mode)
      if (objt[a] < objt[b]) return sortResult(1, mode)
      return sortResult(0, mode)
    }
  })
}
