//Reverse the provided string

function reverseString(str) {
  revStr = str.split("").reverse().join("");
  return revStr;
}

reverseString("hello");
