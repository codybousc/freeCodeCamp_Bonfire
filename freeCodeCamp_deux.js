Bonfires =====================================

#1

function reverseString(str) {
  return str.split("").reverse().join('');
}

console.log(reverseString("hello"));

#2

function palindrome(str) {
  revStr = str.replace(/\s/g, '').toLowerCase();
  revStr = revStr.split("").reverse().join('');
  revStrSansPunc = revStr.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
  finalString = revStrSansPunc.replace(/\s/g, '');
  str = str.replace(/\s/g, '').toLowerCase();
  str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    if (finalString == str) {
        return true;
    }
    else {
        return false
    }
}

console.log(palindrome("A man, a plan, a canal. Panama"));

#3//Come Back to

#5
function findLongestWord(str) {
   str = str.split(" ");
   var i = 0;
   var j = 1;
   longestWordArr = str[i];
     for(i; i < str.length; i++) {
         firstWord = str[i];
        console.log("firstWord = " + firstWord);
        for (j; j < str.length; j++) {
            secondWord = str[j];

		}//inner closing loop
        console.log("secondWord = " + secondWord);
    }//outer closing bracket
            console.log("LONGEST WORD = " + longestWordArr);

}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

#6

function titleCase(str) {

  var firstLetter = "";
  var words = str.toLowerCase().split(" ");
  console.log(words);

  for (n = 0; n < words.length; n++)
    {
      firstLetter = words[n].charAt(0);
      words[n] = words[n].replace(firstLetter, firstLetter.toUpperCase());
    }
  return words.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

#7
function largestOfFour(arr) {
    newArr = [];
    for(var i = 0; i < arr.length; i ++) {
    	sortedArr = arr[i].sort(function(a,b){return a - b});
        newArr.push(sortedArr.pop());
    }
    return newArr;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

#8
function end(str, target) {
  var targetLength = target.length
  var subString = str.substr(- targetLength);
    if (subString == target) {
        return true;
    }
    else {
        return false;
    }
}

console.log(end("He has to give me a new name", "name"));

#9
