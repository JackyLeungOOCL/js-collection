'use strict';

// function grouping_count(collection) {

//   let count = {};

//   //implement here
//   collection.forEach(element => {
//     if (count[element] != null) {
//       count[element] += 1;
//     } else {
//       count[element] = 1;
//     }
//   });
//   return count;
// }

function grouping_count(collection) {
  let count = {};
  collection.filter(element => {
    if (count[element] != null) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  });

  return count;
}

module.exports = grouping_count;
