'use strict';

var map_to_four_multiples_add_one = function(collection) {
  return collection.map(element => element * 4 + 1);
}
 

// function times4Add1(element) {
//   return element * 4 + 1;
// }

// function map(collection, fn) {
//   for (let index = 0; index < collection.length; index++) {
//     collection[index] = fn(collection[index]);
//   }
//   return collection;
// }

// var map_to_four_multiples_add_one = function(collection){
//   return map(collection, times4Add1);
// };

module.exports = map_to_four_multiples_add_one;
