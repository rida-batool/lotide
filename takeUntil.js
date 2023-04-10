const takeUntil = function(array, callback) {
  let results = [];
  for (let element of array) {
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
  return results;
};

module.exports = takeUntil;

//test cases
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// console.log('---');

// const data3 = [2, 44, 6, 78, 90, 3];
// const results3 = takeUntil(data3, x => x % 2 !== 0);
// console.log(results3);

