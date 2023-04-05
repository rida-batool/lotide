const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

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

  // console.log(results);
  return results;
};

let actualResult = countLetters("my name aa");

console.log(assertEqual(actualResult['m'], 2));
console.log(assertEqual(actualResult[' '], undefined));

