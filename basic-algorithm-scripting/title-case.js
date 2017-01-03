//returns given string stylized in title case

function titleCase(str) {
  words = str.toLowerCase().split(" ");
  
  for (i = 0; i < words.length; i++) {
  	words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
  	}
  
  words = words.join(" ");
  return words;
}


titleCase("I'm a little tea pot");
