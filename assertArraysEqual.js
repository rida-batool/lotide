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

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    return `✅✅✅ Assertion Passed`;
  } else {
    return `🛑🛑🛑 Assertion Failed`;
  }
};

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));
console.log(assertArraysEqual([1, undefined, 3], [1, null, 3]));