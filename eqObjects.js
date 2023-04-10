
// const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  if (keys1.length === keys2.length) {
    for (let key of keys1) {
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //console.log(object1[key], object2[key]);
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        };
      }
      else if (object1[key] !== object2[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
};

module.exports = eqObjects;

// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject = { size: "medium", color: "red" };

// console.log(eqObjects(shirtObject, anotherShirtObject));

// console.log(assertEqual(eqObjects(shirtObject, anotherShirtObject), true)); // => true

// const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
// console.log(assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false)); // => false

//arrays assertion test;
// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject));
// console.log(assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true)); // => true

// const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// console.log(assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false)); // => false

