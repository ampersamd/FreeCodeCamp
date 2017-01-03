//returns given string truncated to a specified length if string is longer than specified length
//adds elipses to returned string, which counts toward string length unless max string length is <= 3



function truncateString(str, num) {
  
  if (num >= 3) {
  	//truncate normally
  	if (str.length > num) {
  		var truncateLenMax = num - 3;
  		var truncatedStrMax = str.substring(0,truncateLenMax) + "...";
  		return truncatedStrMax;  		
  	} else {
  		return str;
  	}
  	

  } else {
  	//truncate not including ellipses length
  	var truncateLenMin = num;
  	var truncatedStrMin = str.substring(0, truncateLenMin) + "...";
  	return truncatedStrMin;
  }
  
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
