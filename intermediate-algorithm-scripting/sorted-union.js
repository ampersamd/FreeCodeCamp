//Takes two or more arrays and returns one array of unique items in order of the original arrays

function uniteUnique(arr) {
  var uniVar = [];
  for (i=0; i< arguments.length; i++) {
    for(j=0; j<arguments[i].length; j++) {
      if (uniVar.indexOf(arguments[i][j]) == -1) {
        uniVar.push(arguments[i][j]);
      }
    }
  }
  return uniVar;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
