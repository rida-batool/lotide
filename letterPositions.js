
// const eqArrays = require('./eqArrays');
// const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter !== " ") {
      if (results[letter]) {
        results[letter].push(i);
      }
      else {
        results[letter] = [i];
      }
    }
  }

  return results;
};

module.exports = letterPositions;

//assert test cases
// let res = letterPositions("hello baby bo");
// console.log(res);
// assertArraysEqual(res["e"], [1]);
// assertArraysEqual(res["b"], [6, 8, 11]);
