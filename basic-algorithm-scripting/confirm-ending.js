//returns true if the 'str' argument ends with the 'target' argument; otherwise return false

function confirmEnding(str, target) {

  var popOff = str.length - target.length;
  var strTarget = str.substring(popOff);
  
  if (strTarget === target) {
  	return true;
  } else {
  	return false;
  }
}
confirmEnding("Bastian", "n");
