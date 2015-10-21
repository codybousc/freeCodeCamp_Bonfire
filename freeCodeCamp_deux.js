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
function repeat(str, num) {
    finalStr = ""
    for (var i = 0; i < num; i++) {
        finalStr = finalStr + str;
    }
    return finalStr;
}

console.log(repeat("abc", 3));

#10
function truncate(str, num) {
    var sliceLength = (num - str.length) - 3;
	if (str.length > num) {
    	str = str.slice(0, sliceLength).concat("...");
    }
    return str;
}

console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));

#11
function chunk(arr, size) {
   var finalArr = [];
   var arrLength = arr.length;
   var firstArr = arr.slice(0,size);
       if (arrLength / size <= 2) {
   			var remainingArr = arr.slice(-(arrLength - firstArr.length));
   			finalArr.push(firstArr, remainingArr);
       }
       if (arrLength / size > 2) {
           var secondArr = arr.slice(size, size * 2);
           var thirdArr = arr.slice(size * 2, size * 3);
           finalArr.push(firstArr, secondArr, thirdArr);
       }
   return finalArr;
}


console.log(chunk([0, 1, 2, 3, 4, 5], 2));

#12

function slasher(arr, howMany) {
  if (howMany == 0) {
      return arr;
  }
  else if (howMany > arr.length) {
      return [];
  }
  else {
  newArr = arr.slice(2);
  return newArr;
  }
}
slasher([1, 2, 3], 2);

#13
function mutation(arr) {
    var firstWord = arr[0].toLowerCase();
    var secondWord = arr[1].toLowerCase();
    var hasDuplicates = (/([a-z])\1/i).test(secondWord);
    var matches = 0;
    for(var i = 0; i < arr[0].length; i++) {
        for(var j = 0; j < arr[1].length; j++) {
            var firstWordLets = firstWord[i];
            var secondWordLets = secondWord[j];
            if (firstWordLets == secondWordLets) {
                matches += 1;
                break
            }

        }//inner closing loop

    }//outer closing loop
  if (matches >= secondWord.length || hasDuplicates == true) {
      return true;
  }
  else {
      return false;
  }
}

mutation(["hello", "hey"]);

#14
function bouncer(arr) {
  return arr.filter(function (val) {
    if (val) {
      return true;
    } else {
      return false;
    }
  });
}

#15
function destroyer(arr) {
    var finalArr = [];
    for (var i = 0; i < arr.length; i++) {
        var choppingBlock = false;
        var current = arr[i];
        for(var j = 1;!choppingBlock && j < arguments.length; j++) {
            if(current === arguments[j]) {
                choppingBlock = true;
            }
        }//inner closing loop
        if(!choppingBlock) {
            finalArr.push(current);
    	}
	}//outer closing loop
    return finalArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));

#16
function where(arr, num) {
    var indexToPlaceNum;
  for(var i = 0; i < arr.length; i++) {
      var current = arr[i];
      if(num > current) {
          indexToPlaceNum = i + 1;
      }
      else if (num < arr[0]) {
          indexToPlaceNum = 0;
      }
  }
  return indexToPlaceNum;
}

console.log(where([10, 20, 30, 40, 50], 35));

#17
function sumAll(arr) {
  arr.sort(function(a,b) {
  return a - b;
});
   var newArr = [];
   var lastElem = arr.pop();

   for(var i = arr[0]; i <= lastElem; i++) {
       newArr.push(i);
   }
       return newArr.reduce(function(a,b) {
           return a + b;
    });
}

console.log(sumAll([4, 1]));

#18
//refactored

function diff(arr1, arr2) {
    var finalArr = [];
    var arr1Elem = arr1[i];

    for(var item in arr1) {
      if(arr2.indexOf(arr1[item]) == -1) {
        finalArr.push(arr1[item]);
      }
    }

    for(var elem in arr2) {
      if(arr1.indexOf(arr2[elem]) == -1){
        finalArr.push(arr2[elem]);
      }
    }

    return finalArr;

}
arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"]

console.log(diff(arr1,arr2));

#19

function convert(num) {
    finalStr = "";
    while(num >= 50) {
        finalStr += "L";
        num -= 50;
    }
    while(num >= 10) {
        finalStr += "X";
        num -= 10;
    }
    while(num >= 5) {
        finalStr += "V";
        num -= 5;
    }
    while(num >= 1) {
        finalStr += "I";
        num -= 1;
    }
    finalStr = finalStr.split("");
    var tester = new RegExp(["I","I","I"]);
    if (tester.test(finalStr) == true) {
        var cutIndex = finalStr.indexOf("I","I","I");
        finalStr.splice(cutIndex - 1, 5);
        finalStr = finalStr.concat("I", "X");
    }

    return finalStr.join("");
}
console.log(convert(12));

#20
//passes first test, but not following tests (where .last doesn't work since they don't have 'last' as keys. i.e. where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }])

function where(collection, source) {
    var firstArg = arguments[0];
    var secArg = arguments[1];
    finalArr = [];
  Object.keys(firstArg).forEach(function (key) {
    var val = firstArg[key];
      console.log("VAL + " + val);
    	if (val.last == secArg.last) {
            finalArr.push(val);
        }
});

  return finalArr;
}

console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
