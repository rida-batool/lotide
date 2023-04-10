
// const assertEqual = require('./assertEqual');

const findKeyByValue = function(myObject, value) {
  let keys = Object.keys(myObject);

  const myValue = keys.filter(key => myObject[key] === value);
  if (myValue && myValue.length > 0) {
    return myValue[0];
  }
  return undefined;
};
module.exports = findKeyByValue;


//assert cases
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// console.log(findKeyByValue(bestTVShowsByGenre, " my "));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
// console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));