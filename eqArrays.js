const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const eqArrays = function(a, b) {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
    return true;
  }
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])); //true
console.log(eqArrays(["1", "2", "3"], [1, 2, 3]));  //false
console.log(eqArrays([1, undefined, 3], [1, null, 3])); //false


//test cases
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, undefined, 3], [1, null, 3]), true));
console.log(assertEqual(eqArrays([1, "2", 3], [1, "2", 3]), true));
console.log(assertEqual(eqArrays([1, "2", 13], [1, "2", 3]), false));