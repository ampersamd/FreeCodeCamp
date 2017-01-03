//Sum all the prime numbers up to and including the provided number using sieve of eratosthenes 

function sumPrimes(num) {

  var ints = [];
  var sqRt = [];

  for (i = 2; i <= Math.sqrt(num); i++) {
    sqRt.push(i);
  }

  for (i = 2; i <= num; i++) {
    ints.push(i);
  }

  for (i = 0; i < sqRt.length; i++) {
    for (j = 0; j < ints.length; j++) {
      if (ints[j] % sqRt[i] === 0 & ints[j] != sqRt[i]) {
        ints.splice(j, 1);
        j--;
      }
    }
  }
  num = ints.reduce(function(a,b) {
    return a + b;
  }, 0);
  console.log(num);
  return num;
}

sumPrimes(977);
