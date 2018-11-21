'use strict';

function choose_multiples_of_three(collection) {

  //implement here
  return collection.filter(element => element % 3 === 0);

  //implement here
  var result = new Array();

  collection.forEach(element => {
    if (element % 3 === 0) {
      result.push(element);
    }
  });
  return result;
}

module.exports = choose_multiples_of_three;
