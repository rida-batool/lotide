const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const findKey = function(object, callback) {

  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

const ob1 = { "blue": 3, "green": 7, "elBulli": 10 };
console.log(assertEqual(findKey(ob1, x => x < 5), "blue"));
//console.log(findKey(ob1, x => x < 5));


// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri": { stars: 3 },
//   "noma": { stars: 2 },
//   "elBulli": { stars: 3 },
//   "Ora": { stars: 2 },
//   "Akelarre": { stars: 3 }
// }, x => x.stars === 2)); // => "noma"

// console.log(findKey({
//   "Blue Hill": 1,
//   "Akaleri": 3,
//   "noma": 2,
//   "elBulli": 5,
//   "Ora": 2,
//   "Akelarre": 3
// }, x => x === 5));

