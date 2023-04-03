const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

console.log(assertEqual("Lighthouse","Labs"));
console.log(assertEqual(1, 1));
console.log(assertEqual("Lighthouse","Lighthouse"));
console.log(assertEqual(1, 700));
