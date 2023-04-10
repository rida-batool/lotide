const assertEqual = require('../assertEqual');
const head = require('../head');

console.log(assertEqual(head(['donut', 'cupcake', 'makeup']), 'donut'));
console.log(assertEqual(head(['26', '908', '45.8']), '26'));
console.log(assertEqual(head([]), undefined));