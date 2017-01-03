//returns the sum of two numbers passed in through array in arguments and all numbers between them
//numbers in array are not necessarily in order

function sumAll(arr) {
  for (i = Math.min(arr[0],arr[1]) + 1; i < Math.max(arr[0],arr[1]); i++) {
    arr.push(i);
  }
  var sum = arr.reduce(function(a,b) {
    return a + b;
  }, 0);
  return sum;
}

sumAll([1, 4]);
