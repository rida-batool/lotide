const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');


//test cases
console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, undefined, 3], [1, null, 3]), false));
console.log(assertEqual(eqArrays([1, "2", 3], [1, "2", 3]), true));
console.log(assertEqual(eqArrays([1, "2", 13], [1, "2", 3]), false));
