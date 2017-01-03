// Return sum of all odd Fibonacci numbers that are less than or equal to given num

function sumFibs(num) {
  
  var nums = [0,1];
  
  for (i=0; i<num; i++) {
    var nextFib = nums[i] + nums[i+1];
    
    if (nextFib <= num) {
      nums.push(nextFib);

    } else {
      break;
    }
  }
  
  var oddNums = [];
  for (i=0; i<nums.length;i++) {
    if (nums[i]%2 !== 0) {
      oddNums.push(nums[i]);
    }
  }
  
  num = oddNums.reduce(function(a,b) {return a + b;} ,0);

  return num;
}

sumFibs(4);

