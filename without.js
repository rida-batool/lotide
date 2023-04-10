
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  return source.filter(element => !itemsToRemove.includes(element));
};

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// let numbers = [1, 2, 3];
// assertArraysEqual(without(numbers, [1, 2]), [3]); //Assertion passed

// //Removing element not in array
// assertArraysEqual(without(numbers, ["2", "3"]), [1, 2, 3]); //=> false/failed

// //Empty array
// assertArraysEqual(without(numbers, []), [1, 2, 3]); //passed


//assertArraysEqual(console.log(without(["1", "2", "3"], [1, 2, "3"])), ["1", "2", "3"]);