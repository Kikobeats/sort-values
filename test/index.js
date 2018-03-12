const should = require('should');

const fixtures = require('./fixtures');
const sortValues = require('..');

describe('sort-values ::', function() {
  it('desc', function() {
    var keysValuesSorted, valuesSorted;
    valuesSorted = sortValues(fixtures, 'desc');
    console.log(valuesSorted);
    keysValuesSorted = Object.keys(valuesSorted);
    keysValuesSorted[0].should.be.equal('es');
    return keysValuesSorted[1].should.be.equal('en');
  });

  it('asc', function() {
    var keysValuesSorted, valuesSorted;
    valuesSorted = sortValues(fixtures, 'asc');
    console.log(valuesSorted);
    keysValuesSorted = Object.keys(valuesSorted);
    keysValuesSorted[keysValuesSorted.length - 1].should.be.equal('es');
    return keysValuesSorted[keysValuesSorted.length - 2].should.be.equal('en');
  });

  return it('asc by default', function() {
    var keysValuesSorted, valuesSorted;
    valuesSorted = sortValues(fixtures);
    console.log(valuesSorted);
    keysValuesSorted = Object.keys(valuesSorted);
    keysValuesSorted[keysValuesSorted.length - 1].should.be.equal('es');
    return keysValuesSorted[keysValuesSorted.length - 2].should.be.equal('en');
  });
});
