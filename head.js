const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

const head = function(data){
  return data[0];
}

//console.log(head(['donut','cupcake','makeup']));
//console.log(head(['26','908','45.8']));
console.log(assertEqual(head(['donut','cupcake','makeup']),'donut'));
console.log(assertEqual(head(['26','908','45.8']),'donut'));
console.log(assertEqual(head([]),'donut'));
