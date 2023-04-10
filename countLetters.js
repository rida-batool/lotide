
//const assertEqual = require('./assertEqual');
const countLetters = function(sentence) {
  let results = {};

  for (let letter of sentence) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      }
      else {
        results[letter] = 1;
      }
    }
  }

  return results;
};

module.exports = countLetters;

// let actualResult = countLetters("my name aa");
// console.log(assertEqual(actualResult['m'], 2));
// console.log(assertEqual(actualResult[' '], undefined));

