'use strict';

function choose_even(collection) {
  //implement here
  // return collection.filter(element => element % 2 === 0);

  // original code
  var result = new Array();
  collection.forEach(element => {
    if (element % 2 === 0) {
      result.push(element);
    }
  });
  return result;
}

module.exports = choose_even;
