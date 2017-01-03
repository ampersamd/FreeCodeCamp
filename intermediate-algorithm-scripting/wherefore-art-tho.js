/*
Returns an array of all objects from collection that have matching property and value pairs from source
Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array
*/

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  //init variables
  var sourceKeys = [];
  var containsSource = [];
  var containsMatch = [];

  //pushes elements containing source to containsSource array for further sorting
  function contains(element) {
    for (i = 0; i < sourceKeys.length; i++) {
      if (element.hasOwnProperty(sourceKeys[i]) !== false) {
        //continue processing;
      } else {
        return false;
      }
    }
    containsSource.push(element);
  }

  function containsM(element) {
    for (i = 0; i < sourceKeys.length; i++) {
      if (element[sourceKeys[i]] == source[sourceKeys[i]]) {
        //continue processing;
      } else {
        return false;
      }
    }
    containsMatch.push(element);
  }
  for (var key in source) {
    sourceKeys.push(key);
  }

  collection.forEach(contains);
  containsSource.forEach(containsM);

  for (i = 0; i < containsMatch.length; i++) {
    arr.push(containsMatch[i]);
  }
  return arr;
}


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
