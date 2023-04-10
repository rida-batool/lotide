const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  let start = Math.floor((array.length - 1) / 2);
  let end = Math.floor((array.length) / 2) + 1;
  return array.slice(start, end);
};

module.exports = middle;


//console.log(middle([1, 2, 3, 4, 5, 6, 7]));
//console.log([1, 2, 3, 4, 5, 6, 7].slice(3, 4));
// console.log(middle([1]));  //[]
// console.log(middle([])); //[]
// console.log(middle([1, 2])); //[]
// console.log(middle([12, 14, 16, 18, 20, 22])); //[16,18]


