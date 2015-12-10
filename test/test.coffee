sortValues = require '..'
should     = require 'should'
fixtures   = require './fixtures'

describe 'sort-values ::', ->

  it 'desc', ->
    valuesSorted = sortValues fixtures, 'desc'
    console.log valuesSorted
    keysValuesSorted = Object.keys valuesSorted
    keysValuesSorted[0].should.be.equal 'es'
    keysValuesSorted[1].should.be.equal 'en'

  it 'asc', ->
    valuesSorted = sortValues fixtures, 'asc'
    console.log valuesSorted
    keysValuesSorted = Object.keys valuesSorted
    keysValuesSorted[keysValuesSorted.length - 1].should.be.equal 'es'
    keysValuesSorted[keysValuesSorted.length - 2].should.be.equal 'en'

  it 'asc by default', ->
    valuesSorted = sortValues fixtures
    console.log valuesSorted
    keysValuesSorted = Object.keys valuesSorted
    keysValuesSorted[keysValuesSorted.length - 1].should.be.equal 'es'
    keysValuesSorted[keysValuesSorted.length - 2].should.be.equal 'en'
