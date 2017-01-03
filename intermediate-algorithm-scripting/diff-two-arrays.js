//returns an array containing only the unique items from the two arrays passed in as arguments
//item must be contained in one array, but not both to be returned in solution

function diffArray(a, b) {
  var uniqueA = [];
  var uniqueB = [];
  for (i=0; i<a.length; i++) {
    if(b.indexOf(a[i]) == -1) {
      uniqueA.push(a[i]);
    }
  }
  for (i=0; i<b.length; i++) {
    if(a.indexOf(b[i]) == -1) {
      uniqueB.push(b[i]);
    }
  }
  
  var newArr = uniqueA.concat(uniqueB);
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
