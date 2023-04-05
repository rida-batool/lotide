const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }
};

//Challenge
// countOnly will be given an array and an object. 
//It will return an object containing counts of everything that the input object listed.

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function(allItems, itemsToCount) {
  const results = {};


  for (const item of allItems) {
    //console.log(item);
    if (results[item]) {
      results[item] = results[item] + 1;
    } else if (itemsToCount[item]) {
      results[item] = 1;
    }

  }
  console.log(results);
  return results;
};

// const countOnly = function(allItems, itemsToCount) {

// const counts = {};
// for (let item in itemsToCount) {
//   let count = 0;
//   if (itemsToCount[item]) {
//     allItems.forEach((element) => {
//       if (element === item) {
//         count += 1;  //console.log('element is', element, 'count is: ', count);
//       }
//     });

//   }
//   if (count !== 0) {
//     counts[item] = count;
//   }
// };
// return counts;

// };



const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));