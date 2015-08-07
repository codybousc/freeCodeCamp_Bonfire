//Bonfires



// Bonfire #6 Find the Longest Word in a String

function findLongestWord(str) {
  strArray = str.split(" ");
  trackLengthArr = [];
  for(i = 0; i < strArray.length - 1; i++) {
    if (strArray[i].length > strArray[i+1].length) {
      trackLengthArr.unshift(strArray[i].length);
    }
    else {
      trackLengthArr.push(strArray[i].length);
    }

  }

    var largest = Math.max.apply(Math, trackLengthArr);
    return largest;
}

findLongestWord('namedhenry The quick brown fox namedhenry jumped over the lazy dog ');


// Bonfire #7 Upcase first letter of each word in a String

function titleCase(str) {

  var firstLetter = "";
  var words = str.toLowerCase().split(" ");

  for (n = 0; n < words.length; n++)
    {
      firstLetter = words[n].charAt(0);
      words[n] = words[n].replace(firstLetter, firstLetter.toUpperCase());
    }
  return words.join(" ");
}
titleCase("I'm a little tea pot");


//Bonfire #8 Return Largest Numbers in Arrays
