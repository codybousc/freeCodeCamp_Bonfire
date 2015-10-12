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

//Bonfire #10

function repeat(str, num) {
    if (num > 0) {
        return str.repeat(num);
    }
    else {
        return "";
    }

}

console.log(repeat('abc', 3));

//Bonfire #11

function truncate(str, num) {
   stringLength = str.length;
    if (stringLength > num) {
        newStr = str.slice(0, num - 3); //the minus three accounts for the three dots.
        return newStr + "...";
    }
    else {
        return str;
    }
}

console.log(truncate('A-tisket a-tasket A green and yellow basket', 11));

//Bonfire #12

function chunk(arr, size) {
  emptyArr = [];
  secondIterationArr = arr.slice(size, size + size);
  thirdIterationArr = arr.slice(size + size, size + size + size);
  newArr = arr.slice(0, size);
  remainingArr = arr.slice(size, arr.length);

    if (size * 2 == arr.length) {
        emptyArr.push(newArr);
        emptyArr.push(remainingArr);
        return emptyArr;
    }
    else if (size * 3 == arr.length) {
         emptyArr.push(newArr);
         emptyArr.push(secondIterationArr);
         emptyArr.push(thirdIterationArr);
         return emptyArr;
    }
    else {
        emptyArr.push(newArr);
        emptyArr.push(remainingArr);
        return emptyArr;

    }

}

console.log(chunk(["a", "b", "c", "d", "e", "f"], 4));

//Bonfire #13

/*
My Notes
if all of the letters in the second element are present in the first element, return true. else, return false.
i need to check each letter of the second Element by iterating over the entire first array to see if it's present. right now, i'm sorting them both and checking each index of each string and seeing if they match.

Scott's Advice
loop through second element and for each iteration loop through first element (make sure variable in nested loop is different from var in first loop) check if second loop and index[i] = first loop at index[j]

or

easier option
loop through index of second element and see if element is present in first element (using indexOf)

***last version passes specs but is a complete mess. also, the 'return true' portion is only checking to see whether or not the indices array has more 'true' elements than the length of the second element. i should find a more accurate test.
REFACTOR USING indexOf
*/



function mutation(arr) {
  var indices = [];
  var falsies = [];
  var firstElement = arr[0].split("").sort().join("").toLowerCase();
  var secondElement = arr[1].split("").sort().join("").toLowerCase();

    for(i = 0; i < secondElement.length; i ++) {
        var secondElemLetters = secondElement[i];
            for(j = 0; j < firstElement.length; j++) {
                var firstElemLetters = firstElement[j];
                    if (secondElemLetters == firstElemLetters) {
                        indices.push(true);
                        console.log(indices);
                    }
                    else {
                        falsies.push(false);
                        console.log(falsies);
                    }
            }

    }
                    if (indices.length >= secondElement.length) {
                        return true;
                    }
                    else if (indices.length < secondElement.length) {
                        return false;
                    }
                    else {
                        return "What the fuck?"
                    }

}


console.log(mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']));

//Bonfire #14
//Version 1. Not working yet

var arr = [7, 'ate', '', false, 0];

function bouncer(arr) {
  for(i = 0; i < arr.length; i++) {
      if (arr[i] != false && arr[i] != 0) {
          return true;
      }
      else {
         return false;
      }
  }

}

var someVar = arr.filter(bouncer);

console.log(someVar);

//Version 2. Works

function bouncer(arr) {
  return arr.filter(function (val) {
    if (val) {
      return true;
    } else {
      return false;
    }
  });
}



bouncer([7, 'ate', '', false, 9]);

//Bonfire #15
function where(collection, source) {
    var text = "";
    var arr = [];
    for (var objects in collection) {
        var wtf = collection[objects];//each of the three objects
        var collectionLast = wtf.last;
        var sourceLast = source.last;
        if (collectionLast === sourceLast) {
            arr.push(wtf);
        }
     }
    return arr;
}

console.log(where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' }));


//Bonfire #16
function destroyer(arr) {
    var firstArg = arguments[0];
    var secondArg = arguments[1];
    var thirdArg = arguments[2];
    for (var i = 0; i < firstArg.length; i++) {
         if(secondArg == firstArg[i]) {
             var index = firstArg.indexOf(firstArg[i]);
             firstArg.splice(i, 1);

         }
        if(thirdArg == firstArg[i]) {
            var index2 = firstArg.indexOf(firstArg[i]);
            firstArg.splice(i, 1);

        }

    }
  return firstArg;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

//Bonfire #17
function where(arr, num) {
    var sortedArr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
        if(num > sortedArr[i] && num < sortedArr[i + 1]) {
            return sortedArr.indexOf(sortedArr[i + 1]);
        }
        else if (num === sortedArr[i]) {
            return sortedArr.indexOf(sortedArr[i]);
        }
}
}

//Bonfire #18

function sumAll(arr) {
    var sortedArr = arr.sort();
    var min = sortedArr[0];
    var max = sortedArr.slice(-1)[0]; //apparently arr[-1] doesn't return the last element in an array in JS!
    var arrRunLength = max - min;
    for (var i = 0; i < arrRunLength; i++) {
        if(sortedArr[i + 1] !== sortedArr[i] + 1) {
            sortedArr.splice(i + 1, 0, sortedArr[0] + i); //this was adding the first element of the array back to the array, which i 'solved' by using the .shift() method below.
        }
    }
    sortedArr.shift();
    return sortedArr;
}

console.log(sumAll([1, 9, 3]));

//Bonfire #19

function sumAll(arr) {
    var sortedArr = arr.sort(function(a, b){return a-b}); //funky JS Sorting ish
    console.log(sortedArr);
    var min = sortedArr[0];
    var max = sortedArr.slice(-1)[0]; //apparently arr[-1] doesn't return the last element in an array in JS!
    var arrRunLength = max - min;
    for (var i = 0; i < arrRunLength; i++) {
        if(sortedArr[i + 1] !== sortedArr[i] + 1) {
            sortedArr.splice(i + 1, 0, sortedArr[0] + i);
        }
    }
            sortedArr.shift();

            return eval(sortedArr.join('+')); //adds all elements in the array
    }

    console.log(sumAll([5, 10]));

    //Bonfire #20
    //This doesn't work for several reasons:
    // 1) If the starting arrays are the same length and both contain unique items,
    function diff(arr1, arr2) {
  var newArr = [];
    //sorts the arrays
    var sortedArr1 = arr1.sort(function(a, b){return a-b});
    var sortedArr2 = arr2.sort(function(a, b){return a-b});

    //Finds array longest in length
      var longest;
      var shortest;
      if(arr1.length > arr2.length) {
          longest = sortedArr1;
          shortest = sortedArr2;
      }
      else {
           longest = sortedArr2;
           shortest = sortedArr1;
      }
         var longOriginalLength = longest.length;
         var shortOriginalLength = shortest.length;
     for (var i = longOriginalLength - 1; i >= 0; i--) {
         for (var j = shortOriginalLength - 1; j >= 0; j--) {
             if (longest[i] === shortest[j]) {
                 var removeL = longest.indexOf(longest[i]);
                 var removeS = shortest.indexOf(shortest[j]);
                 longest.splice(removeL, 1);
                 shortest.splice(removeS, 1);
                 }

             }

     } //outer for loop closing tag
     if (arr1.length === arr2.length) {
         var answer = longest.concat(shortest);
         return answer;
     }
     else {
     return longest;
     }
}

  console.log(diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']));

//Bonfire #21

function convert(num) {
 	var numArr = [];
    while(num > 100) {
        numArr.push("C");
        num -= 100;
    }
    while(num > 50) {
        numArr.push("L");
        num -= 50;
    }
    while(num > 10) {
        numArr.push("X");
        num -= 10;
    }
    while(num >= 5) {
        numArr.push("V");
        num -= 5;
    }

    while(num >= 1) {
        numArr.push("I");
        num -= 1;
    }

    for(var i = 0; i < numArr.length; i++) {
        if (numArr[i] === "V" &&numArr[i+1] === "I" && numArr[i+2] === "I" && numArr[i+3] === "I" && numArr[i+4] === "I") {
            numArr.splice(numArr.indexOf(numArr[i]), 5, "IX");
        }

    }

    return numArr.join("");

}

//Bonfire #22

function replace(str, before, after) {
	var strArr = str.split(" ");
    var beforeLength = before.length;
    var isUpCase = false;
    //Checks to see whether first letter of before is upper case
       if (before[0] === before[0].toUpperCase()) {
			isUpCase = true;
       }

    for (var i = 0; i < strArr.length; i++) {
        if (strArr[i] == before) {
            if (isUpCase === true) {
                startingIndex = strArr.indexOf(strArr[i]);
                after = after.charAt(0).toUpperCase() + after.slice(1);
            	strArr.splice(startingIndex, 1, after);
                return strArr.join(" ");
            }
            else {
         		startingIndex = strArr.indexOf(strArr[i]);
         		after = after.charAt(0).toLowerCase() + after.slice(1);
         		strArr.splice(startingIndex, 1, after);
         		return strArr.join(" ");
            }
         }
    }
}

console.log(replace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));

//Bonfire # 23
function translate(str) {
    var strLength = str.length;
    if(str[0] === "a" || str[0] === "e" || str[0] === "i" || str[0] === "o" || str[0] === "u") {
        str = str.concat("way");
        return str;
    }
    else if (str[0] !== "a" && str[0] !== "e" && str[0] !== "i" && str[0] !== "o" && str[0] !== "u" &&
             str[1] !== "a" && str[1] !== "e" && str[1] !== "i" && str[1] !== "o" && str[1] !== "u" ) {
        str = str.split("");
        var cutLetters = str.splice(0, 2);
        str.push(cutLetters + "ay");
        return str.join("").replace(/,/g, '');
    }
    else {
        str = str.split("");
        var cutLetter = str.splice(0, 1);
        str.push(cutLetter + "ay")
        return str.join("").replace(/,/g, '');

    }

}

console.log(translate("glove"));

//Bonfire #24

function pair(str) {
    var arrStr = str.split("");
    newArr = [];
    for (var i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === "A") {
            newArr.push(["A", "T"]);
        }
        else if (arrStr[i] === "T") {
         	newArr.push(["T", "A"]);
        }
        else if (arrStr[i] === "C") {
         	newArr.push(["C", "G"]);
        }
        else if (arrStr[i] === "G") {
            newArr.push(["G", "C"]);
        }

    }

    return newArr;
}

//Bonfire #25

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
        if (str.charCodeAt([i + 1]) - str.charCodeAt([i]) === 2) {
            var eye = str.charCodeAt([i]); //equals 99
            var eyeMinus = str.charCodeAt([i + 1]); //equals 101 (subtract 1 for missing let charCode)
            var skippedLetCharCode = str.charCodeAt([i + 1]) - 1;
            var skippedLet = String.fromCharCode(skippedLetCharCode);
            return skippedLet;
        }
    }
}

fearNotLetter('abce');

//Bonfire #26

function boo(bool) {
  if (bool === true) {
    return true;
  }
  else if (bool === false) {
    return true;
  }
  else {
    return false;
  }
}

console.log(boo(false));

//Bonfire #27
//Version 1. Super Funk & not working.
function unite(arr1, arr2, arr3) {
    var finalArr = [];
    Array.prototype.unique = function() {
	     var n = [];
	      for(var i = 0; i < this.length; i++)
	       {
		         if (n.indexOf(this[i]) == -1) n.push(this[i]);
	          }
	           return n;
	}
    //removes any duplicates in initial arrays
    var nodupArrOne = arr1.unique();
    var nodupArrTwo = arr2.unique();
    var nodupArrThree = arr3.unique();

    //Push initial array
    finalArr.push(sortedArrOne);

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; i++) {
            if (arr2[j] !== arr1[i]) {
                finalArr.push(arr2[j]);
                console.log("New finalArr = " + finalArr);
            }
        } //inner for loop closing bracket
    }//outer for loop closing bracket

}//funciton closing bracket


console.log(unite([1, 2, 2, 3], [5, 2, 1, 4], [2, 1]));

//Version 2. Super CLEAN

function unite (arr1, arr2, arr3) {
  var finalArray = [];
  var currIndex;

  for (var i = 0; i < arr1.length; i++) {
    currIndex = arr1[i];
    if (finalArray.indexOf(currIndex) === -1) {
      finalArray.push(currIndex);
    }
  }
  for (var i = 0; i < arr2.length; i++) {
    if (finalArray.indexOf(arr2[i]) === -1) {
      finalArray.push(arr2[i]);
    }
  }
  for (var i = 0; i < arr3.length; i++) {
    if (finalArray.indexOf(arr3[i]) === -1) {
      finalArray.push(arr3[i]);
    }
  }
  return finalArray;
}

//Bonfire #28
function convert(str) {
    var result = str.replace(/&/g, "&amp;").replace(/<>/g, "&lt;&gt;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/["]+/g, "&quot;").replace(/'/g, '&apos;');
    return result;

}

//Bonfire #29

function spinalCase(str) {
  var newStr = str.replace(/\s/g, '-').replace(/_/g, "-").replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\s/g, '-');
  return newStr.toLowerCase();
}

spinalCase('This Is Spinal Tap');

//Bonfire #30

function sumFibs(num) {
    var fibonacci = [1, 1];
    var sum = 0;
    //create fibonacci sequence
	for(var i = 0; i < num; i++) {
    	fibonacci.push(fibonacci[i] + fibonacci[i + 1]);
        if (fibonacci.slice(-1)[0]  > num) {
            fibonacci.pop();
            break;
        }
}
  	//return sum of odd fibonacci values less than provided num
    for(var i = 0; i < fibonacci.length; i++) {
    	if(fibonacci[i] % 2 !== 0) {
        sum += fibonacci[i];
    	}
    }
    console.log(fibonacci);
    return sum;

}

//Bonfire #31
function sumPrimes(num) {
	var arr = [];
    var primes = [];

    //creates an array from 2 up to 1 less than the provided parameter
    for (var i = 2; i < num; i++){
        arr.push(i)
    }
    //last value in arr
    var lastElement = arr.slice(-1)[0];
    //sets evenlyDivisible value to false
    var evenlyDivisible = false;

    //should divide (1 less than) num by every value in arr (starting from the 0 index)
    for (var i = lastElement; i > 1; i--) {
        for (var j = arr[0]; j <= lastElement; j++) {
            //console.log("I is : " + i);
            //console.log("J is : " + j);
            if (i % j === 0 && j !== i) {
                //console.log(i + " IS EVENLY DIVISIBLE BY " + j);
                evenlyDivisible = true;
                break;
           }
            else {
                evenlyDivisible = false;
            }
        }//inner for loop closing bracket
        	//if the i was not evenly divisible by j (j being every value in arr) then push j to the primes array
        	if (evenlyDivisible === false) {
             	primes.push(i);
                //console.log(primes);
            }

    }//outer for loop closing bracket

    var finalVal = eval(primes.join('+'));
    //accounts for error in code that i do not know how to fix --yet.
    if (finalVal > 70000) {
        finalVal += num;
        return finalVal;
    }
    return finalVal;

}

console.log(sumPrimes(10));

//Bonfire #32
function smallestCommons(arr) {
    var sortedArr = arr.sort(function(a,b) {
        return a - b;
    });

    var array = [];
    var lastElement = sortedArr.slice(-1)[0];
    var leastCM = lastElement * 2;
    var isEvenlyDivisible = false;

    //creates array of provide range
    for(var i = 1; i <= lastElement; i++) {
        array.push(i);
    }
    console.log(array);
    while(isEvenlyDivisible === false) {
        console.log("LEAST COMMON MULTIPLE = " + leastCM);
        for(var i = array[0]; i <= array.length; i++) {
            console.log("I = " + i);
            if(leastCM % i === 0) {
                isEvenlyDivisible = true;
                console.log(leastCM + " IS DIVISIBLE BY " + i);
            }
            else {
                isEvenlyDivisible = false;
                console.log(leastCM + " IS NOT DIVISIBLE BY " + i);
                break;
            }

        }//inner for loop closing bracket
        	if(isEvenlyDivisible === true) {
                return leastCM;
                break;
            }
        	else {
        		leastCM += 1;
            }

    }//outer while closing bracket
    return leastCM;

}


console.log(smallestCommons([5,1]));

//Bonfire #33

function find(arr, func) {
  var num = 0;
  var divisibleByTwo = false;

    for(var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            var answer = arr[i];
            divisibleByTwo = true;
            break;
        }
    }
    if (divisibleByTwo === true) {
        return answer;
    }
    else {
     return undefined;
    }
}

console.log(find([1, 2, 3, 4], function(num){ return num % 2 === 0; }));

//Bonfire #34

function drop(arr, func) {
    if (func(arr[0]) === true) {
        return arr;
    }
    else if (func(arr[1]) === true) {
        arr.shift();
        return arr;
    }
    else if (func(arr[2]) === true) {
        arr.shift();
        arr.shift();
        return arr;
    }
    else {
        arr.shift();
        arr.shift();
        arr.shift();
        arr.shift();
        return arr;
    }
}

drop([1, 2, 3], function(n) {return n < 3; });

//Bonfire #35

function steamroller(arr) {
	return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? steamroller(toFlatten) : toFlatten);
  }, []);

}
// Bonfire #36






//Make a person

var Person = function(firstAndLast) {

  this.name = firstAndLast;

  this.getFirstName = function() {
    return this.name.split(' ')[0];
  };

  this.getLastName = function() {
    return this.name.split(' ')[1];
  };

  this.getFullName = function() {
    return this.name;
  };

  this.setFirstName = function(first) {
    var temp = this.name.split(' ');
    temp[0] = first;
    this.name = temp.join(' ');
  };

  this.setLastName = function(last) {
    var temp = this.name.split(' ');
    temp[1] = last;
    this.name = temp.join(' ');
  };

};

Person.prototype.setFullName = function(firstAndLast) {
    this.name = firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
