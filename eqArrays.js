

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

module.exports = eqArrays;

//manual testing
// console.log(eqArrays([1, 2, 3], [1, 2, 3])); //true
// console.log(eqArrays(["1", "2", "3"], [1, 2, 3]));  //false
// console.log(eqArrays([1, undefined, 3], [1, null, 3])); //false






