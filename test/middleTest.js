const assert = require('chai').assert;
const middle = require('../middle');

describe('#middle', () => {
  it('return [4,5] of [2, 3, 4, 6, 7]', () => {
    assert.deepEqual(middle([2, 3, 4, 5, 6, 7]), [4, 5]);
  });
  it('return [4] of [1, 2, 3, 4, 6, 7]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
  });
  it('return [] of []', () => {
    assert.deepEqual(middle([]), []);
  });
  it('return [] of [1]', () => {
    assert.deepEqual(middle([1]), []);
  });
  it('return [] of [1, 2]', () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

// //import eqarrays from other file
// const eqArrays = require('../eqArrays');

// //import assertArraysEqual from other file
// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');
// //Test cases
// assertArraysEqual(middle([2, 3, 4, 6, 7]), [4]);
// assertArraysEqual(middle([2, 3, 4, 6]), [3, 4]);
// assertArraysEqual(middle([]), []);
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
