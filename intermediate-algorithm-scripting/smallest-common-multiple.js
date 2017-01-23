function smallestCommons(arr) {
  
  //sort array by integer size
  arr = arr.sort(function(a, b) {
    return a - b;
  });

  //stores all integers equal to and between the provided parameters in arr
  var btw = [];
  for (i = arr[0]; i <= arr[1]; i++) {
    btw.push(i);
  }

  var divisible = false;
  var i = 1;
  
  //defines divisble as having no remainders
  function isDivisible(num) {
    return i % num == 0;
  }

   //while all integers in btw array are not divisible by i, increment i and test again
  while (btw.every(isDivisible) == false) {
    i++;
  }

  return i;
}
