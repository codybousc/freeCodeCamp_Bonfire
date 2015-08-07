//Bonfires



//Find the Longest Word in a String

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
    console.log(largest);
}

findLongestWord('namedhenry The quick brown fox namedhenry jumped over the lazy dog ');
