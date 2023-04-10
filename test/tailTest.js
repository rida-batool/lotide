const tail = require('../tail');
const assertEqual = require('../assertEqual');

let output = tail(["Hello", "Lighthouse", "Labs", "house"]);
console.log(assertEqual(output.length, 3));
console.log(assertEqual(output[1], "Labs"));

//console.log(assertEqual(tail(["hello", "everyone"]), "everyone")); //failed

let output1 = tail([]);
console.log(assertEqual(output1.length, 0));