//import eqarrays from other file
const eqArrays = require('../eqArrays');

//import assertArraysEqual from other file
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
//Test cases
assertArraysEqual(middle([2, 3, 4, 6, 7]), [4]);
assertArraysEqual(middle([2, 3, 4, 6]), [3, 4]);
assertArraysEqual(middle([]), []);
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
