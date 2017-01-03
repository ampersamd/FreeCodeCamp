//returns roman numeral converted from integer

var dec = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
var rom = ["I","IV","V","IX","X","XL","L","XC","C","CD","D","CM","M"];

function findHighestDecimal(x) {
  for(i=0; i< dec.length; i++) {
    var value = dec[i];
    var nextValue = dec[i+1];
    if (value <= x && nextValue > x) {
      var romNum = rom[i];
      return [value,romNum];
    } else if (1000 <= x) {
      return [1000, "M"];
    }
  }
}

function convertToRoman(x) {
  var nextNum;
  var nextRom;
  var romNumCom = "";
  var counter = [0];
  var remainder = x;
  console.log("Initial remainder: " + remainder);
  var counterSum;
  while (counterSum != x) {
    nextNum = findHighestDecimal(remainder)[0];
    nextRom = findHighestDecimal(remainder)[1];
    remainder = remainder - nextNum;
    counter.push(nextNum);
    counterSum = counter.reduce(function(a,b) {
      return a+b;
    });
    romNumCom += nextRom;

  }
  return romNumCom;
}
convertToRoman(36);
