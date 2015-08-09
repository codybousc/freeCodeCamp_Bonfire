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


//Bonfire #8 Return Largest Numbers in Nested Array

randomArr = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];

function largestOfFour(arr) {
newArr = [];
for(i = 0; i <= 3; i++) {
    sortedArr = arr[i].sort(function(a,b){
        return a - b;
    });
    newArr.push(arr[i].pop());

}
  return newArr;
}

console.log(largestOfFour(randomArr));

//Bonfire #9 Confirm the Ending

function end(str, target) {
  strLength = str.length;
  lastLet = str.substr(strLength - 1, strLength)
  newStr= str.split(" ");
  lastWord = newStr[newStr.length - 1];
  if (lastLet === target) {
    return true;

  }
   else if (lastWord === target) {
     return true;
        }
    else {
    return false;
    }
  }



console.log(end('Bastian', 'n'));
