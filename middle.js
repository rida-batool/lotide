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

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let start = Math.floor((array.length - 1) / 2); //(array.length/2) - 1;
  let end = Math.floor((array.length) / 2) + 1;
  return array.slice(start, end);

};

//Test cases
assertArraysEqual(middle([2, 3, 4, 6]), [3, 4]);
assertArraysEqual(middle([2, 3, 4, 6]), [3, 4]);
assertArraysEqual(middle([]), [1]);

// [1, 2, 3, 4, 5, 6, 7]
// [3, 4] //start,end
// [1, 2, 3, 4, 5, 6, 7, 8]
// [3, 5]; //start,end

//console.log(middle([1, 2, 3, 4, 5, 6, 7]));
//console.log([1, 2, 3, 4, 5, 6, 7].slice(3, 4));
// console.log(middle([1]));
// console.log(middle([]));
// console.log(middle([1, 2]));
// console.log(middle([12, 14, 16, 18, 20, 22]));

//earlier method
// const middle = function(array) {
//   let mid = [];
//   if (array.length > 2) {
//     if (array.length % 2 === 0) {
//       mid.push(array[array.length / 2 - 1], array[array.length / 2]);
//       return mid;

//     } else if (array.length % 2 !== 0) {
//       mid.push(array[Math.floor((array.length - 1) / 2)]);
//       return mid;
//     }
//   }
//   return mid;
// };
