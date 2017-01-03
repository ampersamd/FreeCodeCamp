//Returns missing letter in passed letter range
//If no letter missing, returns undefined

function isSequential(sequence) {
  for (i=0; i< sequence.length; i++) {
    if (sequence[i] == sequence[i+1] - 1 || sequence[i+1] === undefined) {
      //do nothing
    } else {
      return false;
    }
   }
  return true;
 }

function fearNotLetter(str) {
  //puts each character into array
  var strChars = [];
  for (i=0; i<str.length; i++) {
    strChars.push(str.charCodeAt(i));
  }
  
  //checks if string is in sequence
  if (isSequential(strChars) === true) {
    return undefined;
  } else {  
    //if isn't in sequence, add chracters
    for (i=0; i< strChars.length; i++) {
      if (strChars[i] != strChars[i+1] - 1 && strChars[i+1] !== undefined) {
        str = String.fromCharCode(strChars[i] + 1);
        
      }
    }
  }
  return str;
}

fearNotLetter("abce");
