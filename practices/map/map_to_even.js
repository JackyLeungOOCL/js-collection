'use strict';
function map_to_even(collection) {
  return collection.map(element => element * 2);
}

// function times2(element) {
//   return element * 2;
// }

// function map(collection, fn) {
//   for (let index = 0; index < collection.length; index++) {
//     collection[index] = fn(collection[index]);
//   }
//   return collection;
// }

// function map_to_even(collection){
//   return map(collection, times2);
// }
module.exports = map_to_even;
