
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//assert test cases
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// console.log(results1);

// const results2 = map(words, word => word.length);
// console.log(results2);

// const results3 = map(words, word => word.toUpperCase());
// console.log(results3);

// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); //passed
// assertArraysEqual(results2, [6, 7, 2, 5, 3]); //passed
// assertArraysEqual(results3, ['GROUND', 'CONTROL', 'TO', 'MAJOR', 'TOM']); //passed
