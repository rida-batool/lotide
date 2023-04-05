//import eqarrays from other file
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

//import assertArraysEqual from other file
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed:  ${array1} !== ${array2}`);
  }
};

// without function using eqArrays (shouldn't use it)
const without = function(source, itemsToRemove) {
  let newSource = [];
  if (!eqArrays(source, itemsToRemove)) {
    for (let i = 0; i < source.length; i++) {
      if (source[i] !== itemsToRemove[i]) {
        newSource.push(source[i]);
      }
    }
    return newSource;
  }
  return newSource;
};

//Method 2 (Better Approach)
// export const without = function(source, itemsToRemove) {
//   return source.filter(element => !itemsToRemove.includes(element));
// };

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

let numbers = [1, 2, 3];
assertArraysEqual(without(numbers, [1, 2]), [3]); //Assertion passed

//Removing element not in array
assertArraysEqual(without(numbers, [1, "2", "3"]), [3]); //=> false/failed

//Empty array
assertArraysEqual(without(numbers, []), [1, 2, 3]); //passed


//assertArraysEqual(console.log(without(["1", "2", "3"], [1, 2, "3"])), ["1", "2", "3"]);