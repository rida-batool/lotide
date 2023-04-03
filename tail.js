const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const tail = function(data) {
  let result = [];
  for (let i = 1; i < data.length; i++) {
    result.push(data[i]);
  }
  return result;
};

//console.log(tail([]));

let output = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(output.length,3));
console.log(assertEqual(output[1], "Labs"));

//console.log(assertEqual(tail(["hello","everyone"]),"everyone")); //failed

let output1 = tail([]);
console.log(assertEqual(output1.length, 0));