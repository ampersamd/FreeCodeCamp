//repeats a given string a specified number of times; returns  result
//returns blank string if no string is given

function repeatStringNumTimes(str, num) {
  
  if (Number.isInteger(num) && num > 0) {
  	var repeatStr = str;
  	for (i = 0; i < num - 1; i++) {
  		repeatStr = repeatStr.concat(str);
  	}
  	return repeatStr;
  } else {
  	return "";
  }
  
}

repeatStringNumTimes("abc", 3);
