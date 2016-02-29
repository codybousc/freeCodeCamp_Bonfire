// Bonfires =====================================
//
// #1
//
// function reverseString(str) {
//   return str.split("").reverse().join('');
// }
//
// console.log(reverseString("hello"));
//
// #2
//
// function palindrome(str) {
//   revStr = str.replace(/\s/g, '').toLowerCase();
//   revStr = revStr.split("").reverse().join('');
//   revStrSansPunc = revStr.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//   finalString = revStrSansPunc.replace(/\s/g, '');
//   str = str.replace(/\s/g, '').toLowerCase();
//   str = str.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
//     if (finalString == str) {
//         return true;
//     }
//     else {
//         return false
//     }
// }
//
// console.log(palindrome("A man, a plan, a canal. Panama"));
//
// #3//Come Back to
//
// #5
// function findLongestWord(str) {
//    str = str.split(" ");
//    var i = 0;
//    var j = 1;
//    longestWordArr = str[i];
//      for(i; i < str.length; i++) {
//          firstWord = str[i];
//         console.log("firstWord = " + firstWord);
//         for (j; j < str.length; j++) {
//             secondWord = str[j];
//
// 		}//inner closing loop
//         console.log("secondWord = " + secondWord);
//     }//outer closing bracket
//             console.log("LONGEST WORD = " + longestWordArr);
//
// }
//
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
//
// #6
//
// function titleCase(str) {
//
//   var firstLetter = "";
//   var words = str.toLowerCase().split(" ");
//   console.log(words);
//
//   for (n = 0; n < words.length; n++)
//     {
//       firstLetter = words[n].charAt(0);
//       words[n] = words[n].replace(firstLetter, firstLetter.toUpperCase());
//     }
//   return words.join(" ");
// }
// console.log(titleCase("I'm a little tea pot"));
//
// #7
// function largestOfFour(arr) {
//     newArr = [];
//     for(var i = 0; i < arr.length; i ++) {
//     	sortedArr = arr[i].sort(function(a,b){return a - b});
//         newArr.push(sortedArr.pop());
//     }
//     return newArr;
// }
//
// console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
//
// #8
// function end(str, target) {
//   var targetLength = target.length
//   var subString = str.substr(- targetLength);
//     if (subString == target) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
//
// console.log(end("He has to give me a new name", "name"));
//
// #9
// function repeat(str, num) {
//     finalStr = ""
//     for (var i = 0; i < num; i++) {
//         finalStr = finalStr + str;
//     }
//     return finalStr;
// }
//
// console.log(repeat("abc", 3));
//
// #10
// function truncate(str, num) {
//     var sliceLength = (num - str.length) - 3;
// 	if (str.length > num) {
//     	str = str.slice(0, sliceLength).concat("...");
//     }
//     return str;
// }
//
// console.log(truncate("A-tisket a-tasket A green and yellow basket", 11));
//
// #11
// function chunk(arr, size) {
//    var finalArr = [];
//    var arrLength = arr.length;
//    var firstArr = arr.slice(0,size);
//        if (arrLength / size <= 2) {
//    			var remainingArr = arr.slice(-(arrLength - firstArr.length));
//    			finalArr.push(firstArr, remainingArr);
//        }
//        if (arrLength / size > 2) {
//            var secondArr = arr.slice(size, size * 2);
//            var thirdArr = arr.slice(size * 2, size * 3);
//            finalArr.push(firstArr, secondArr, thirdArr);
//        }
//    return finalArr;
// }
//
//
// console.log(chunk([0, 1, 2, 3, 4, 5], 2));
//
// #12
//
// function slasher(arr, howMany) {
//   if (howMany == 0) {
//       return arr;
//   }
//   else if (howMany > arr.length) {
//       return [];
//   }
//   else {
//   newArr = arr.slice(2);
//   return newArr;
//   }
// }
// slasher([1, 2, 3], 2);
//
// #13
// function mutation(arr) {
//     var firstWord = arr[0].toLowerCase();
//     var secondWord = arr[1].toLowerCase();
//     var hasDuplicates = (/([a-z])\1/i).test(secondWord);
//     var matches = 0;
//     for(var i = 0; i < arr[0].length; i++) {
//         for(var j = 0; j < arr[1].length; j++) {
//             var firstWordLets = firstWord[i];
//             var secondWordLets = secondWord[j];
//             if (firstWordLets == secondWordLets) {
//                 matches += 1;
//                 break
//             }
//
//         }//inner closing loop
//
//     }//outer closing loop
//   if (matches >= secondWord.length || hasDuplicates == true) {
//       return true;
//   }
//   else {
//       return false;
//   }
// }
//
// mutation(["hello", "hey"]);
//
// #14
// function bouncer(arr) {
//   return arr.filter(function (val) {
//     if (val) {
//       return true;
//     } else {
//       return false;
//     }
//   });
// }
//
// #15
// function destroyer(arr) {
//     var finalArr = [];
//     for (var i = 0; i < arr.length; i++) {
//         var choppingBlock = false;
//         var current = arr[i];
//         for(var j = 1;!choppingBlock && j < arguments.length; j++) {
//             if(current === arguments[j]) {
//                 choppingBlock = true;
//             }
//         }//inner closing loop
//         if(!choppingBlock) {
//             finalArr.push(current);
//     	}
// 	}//outer closing loop
//     return finalArr;
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
//
// #16
// function where(arr, num) {
//     var indexToPlaceNum;
//   for(var i = 0; i < arr.length; i++) {
//       var current = arr[i];
//       if(num > current) {
//           indexToPlaceNum = i + 1;
//       }
//       else if (num < arr[0]) {
//           indexToPlaceNum = 0;
//       }
//   }
//   return indexToPlaceNum;
// }
//
// console.log(where([10, 20, 30, 40, 50], 35));
//
// #17
// function sumAll(arr) {
//   arr.sort(function(a,b) {
//   return a - b;
// });
//    var newArr = [];
//    var lastElem = arr.pop();
//
//    for(var i = arr[0]; i <= lastElem; i++) {
//        newArr.push(i);
//    }
//        return newArr.reduce(function(a,b) {
//            return a + b;
//     });
// }
//
// console.log(sumAll([4, 1]));
//
// #18
// //refactored
//
// function diff(arr1, arr2) {
//     var finalArr = [];
//     var arr1Elem = arr1[i];
//
//     for(var item in arr1) {
//       if(arr2.indexOf(arr1[item]) == -1) {
//         finalArr.push(arr1[item]);
//       }
//     }
//
//     for(var elem in arr2) {
//       if(arr1.indexOf(arr2[elem]) == -1){
//         finalArr.push(arr2[elem]);
//       }
//     }
//
//     return finalArr;
//
// }
// arr1 = ["andesite", "grass", "dirt", "pink wool", "dead shrub"];
// arr2 = ["diorite", "andesite", "grass", "dirt", "dead shrub"]
//
// console.log(diff(arr1,arr2));
//
// #19
//
// function convert(num) {
//     finalStr = "";
//     while(num >= 50) {
//         finalStr += "L";
//         num -= 50;
//     }
//     while(num >= 10) {
//         finalStr += "X";
//         num -= 10;
//     }
//     while(num >= 5) {
//         finalStr += "V";
//         num -= 5;
//     }
//     while(num >= 1) {
//         finalStr += "I";
//         num -= 1;
//     }
//     finalStr = finalStr.split("");
//     var tester = new RegExp(["I","I","I"]);
//     if (tester.test(finalStr) == true) {
//         var cutIndex = finalStr.indexOf("I","I","I");
//         finalStr.splice(cutIndex - 1, 5);
//         finalStr = finalStr.concat("I", "X");
//     }
//
//     return finalStr.join("");
// }
// console.log(convert(12));
//
// #20
// //passes first test, but not following tests (where .last doesn't work since they don't have 'last' as keys. i.e. where([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 }) should return [{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }])
//
// function where(collection, source) {
//     var firstArg = arguments[0];
//     var secArg = arguments[1];
//     finalArr = [];
//   Object.keys(firstArg).forEach(function (key) {
//     var val = firstArg[key];
//       console.log("VAL + " + val);
//     	if (val.last == secArg.last) {
//             finalArr.push(val);
//         }
// });
//
//   return finalArr;
// }
//
// console.log(where([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//
// #21
//
// function myReplace(str, before, after) {
//     if (before[0] == before[0].toUpperCase()) {
//         after = after.charAt(0).toUpperCase() + after.slice(1);
//     }
//     var regPattern = new RegExp(before);
// 	var finalStr = str.replace(regPattern, after);
//     return finalStr;
// }
//
// console.log(myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped"));
//
// #22
//
// function translate(str) {
//     var vowels = /[aeiou]+/i
//     if (vowels.test(str[0])) {
//             return str.concat("way");
//         }
//     var doubleConsonate = false;
//     for(var i = 0; i < str.length; i++) {
//         if(!vowels.test(str[i]) && vowels.test(str[i + 1])) {
//             var subStr = str.substring(str[i], 1);
//             break
//         }
//         if(!vowels.test(str[i]) && !vowels.test(str[i + 1])) {
//             var subStr = str.substring(str[i], 2);
//             doubleConsonate = true;
//             break
//         }
//
//     }//loop closing bracket
//      str = str.concat(subStr + "ay");
//     var strArr = str.split("");
//     if (doubleConsonate) {
//         strArr.shift();
//         strArr.shift();
//     }
//     else {
//        strArr.shift();
//     }
//  	return strArr.join("");
// }
//
// console.log(translate("cconsonant"));
//
// #23
//
// function pair(str) {
//     var finalArr = [];
//     for(var i = 0; i < str.length; i++) {
//         if(str[i] == "A") {
//             finalArr.push(["A", "T"])
//         }
//         if(str[i] == "T") {
//             finalArr.push(["T", "A"]);
//         }
//         if(str[i] == "C") {
//             finalArr.push(["C", "G"]);
//         }
//         if(str[i] == "G") {
//             finalArr.push(["G", "C"]);
//         }
//     }
//  return finalArr;
// }
//
// console.log(pair("GCG"));
//
// #24
// Missing Letters
//
// function fearNotLetter(str) {
//   for(var i = 0; i < str.length; i++){
//       if(str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
//           var secondChar = str.charCodeAt(i + 1) -1;
//           return String.fromCharCode(secondChar);
//       }
//   }
// }
//
// console.log(fearNotLetter("abce"));
//
// #25
//
// function boo(bool) {
//   if (bool === true) {
//     return true;
//   }
//   else if (bool === false) {
//     return true;
//   }
//   else {
//     return false;
//   }
// }
//
// console.log(boo(false));
//
// #26
// //Massive Beast Begging to be refactored.
//
// function unite(arr1, arr2, arr3, arr4) {
//   var finalArr = [];
//   //checks first arr
//   for(var i = 0; i < arr1.length; i++) {
//       var regerToCheck = new RegExp(arr1[i]);
//       if(arr1[i] == arr1[0]){
//           finalArr.push(arr1[i]);
//       }
//       if(regerToCheck.test(finalArr) != true) {
//           finalArr.push(arr1[i]);
//       }
//   }//closing bracket
//   //checks second arr if present
//   for(var i = 0; i < arr2.length; i++) {
//       var regerToCheck = new RegExp(arr2[i]);
//       if(regerToCheck.test(finalArr) != true) {
//           finalArr.push(arr2[i]);
//       }
//   }//closing bracket
//   //checks third arr if present
//    if (arguments.length > 2) {
//    		for(var i = 0; i < arr3.length; i++) {
//       		var regerToCheck = new RegExp(arr3[i]);
//       		if(regerToCheck.test(finalArr) != true) {
//           		finalArr.push(arr3[i]);
//       		}
//   		}//closing bracket
//    }
//     //checks fourth arr if present
//     if (arguments.length > 3) {
//    		for(var i = 0; i < arr4.length; i++) {
//       		var regerToCheck = new RegExp(arr4[i]);
//       		if(regerToCheck.test(finalArr) != true) {
//           		finalArr.push(arr4[i]);
//       		}
//   		}//closing bracket
//    }
//   return finalArr;
//
// }
//
// #27
// a)
// function convert(str) {
//   var ampersand = /&/g;
//   var lesserThan = /</g;
//   var greaterThan = />/g;
//   var doubleQuote = /"/g;
//   var apostrophe = /'/g;
//   if (ampersand.test(str) == true) {
//       str = str.replace(ampersand, "&amp;");
//   }
//   if (lesserThan.test(str) == true) {
//       str = str.replace(lesserThan, "&lt;");
//   }
//   if (greaterThan.test(str) == true) {
//       str = str.replace(greaterThan, "&gt;");
//   }
//   if (doubleQuote.test(str) == true) {
//       str = str.replace(doubleQuote, "&quot;");
//   }
//   if (apostrophe.test(str) == true) {
//       str = str.replace(apostrophe, "&apos;");
//   }
//   return str;
// }
//
// convert("Dolce & Gabbana");
//
// b) //refactored
//
// function convert(str) {
//     var result = str.replace(/&/g, "&amp;").replace(/<>/g, "&lt;&gt;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/["]+/g, "&quot;").replace(/'/g, '&apos;');
//     return result;
// }
//
// #28
//
// function spinalCase(str) {
// 	return str.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase().replace(/_/g, " ").replace(/\s/g, "-");
// }
//
// console.log(spinalCase("The_Andy_Griffith_Show"));
//
// #29
//
// function sumFibs(num) {
//     var sumOfOdds = 0;
//     fibArr = [];
//     //establishes initial array
//     for(var i = 0; i < num; i++) {
//         if(i == 0 || i == 1){
//             fibArr.push(1);
//         }
//         else {
//             fibArr.push((fibArr[i -1]) + (fibArr[i - 2]));
//         }
//     }
//     //sums all odd elements in array less than or equal to provided num
//    	for(var j = 0; j < fibArr.length; j++) {
//         if(fibArr[j] <= num) {
//             if(fibArr[j] % 2 != 0) {
//                 sumOfOdds += fibArr[j];
//             }
//         }
//     }
//     return sumOfOdds;
//     }
//
//
//
// console.log(sumFibs(4));
//
// #30
//
// function sumPrimes(num) {
//     var sumOfAllPrimes = 0;
// 	for(var i = 3; i <= num; i++) {
//         var isPrime = true;
//         var allNums = i;
//         for(var j = 2; j < allNums; j++) {
//             if(allNums % j == 0) {
//                 isPrime = false;
//                 break
//             }
//         }//inner closing bracket
//         	if(isPrime == true) {
//                 sumOfAllPrimes += allNums;
//             }
//     }//outer closing bracket
//     return sumOfAllPrimes + 2;
// }
// console.log(sumPrimes(10));
//
// #31
// //it has to loop nearly 50k times to find the answer. obivously not the optimal answer.
//
// function smallestCommons(arr) {
//     var SCM,
//         largestParam = Math.max(arr[0], arr[1]),
//         largestParamIterator = largestParam,
//         numRangeArr = [],
//         matchCounter = 0,
//         scmFound = false;
//     //create array of range of numbers
//     for(var i = 1; i <= largestParam; i++) {
//         numRangeArr.push(i);
//     }
//     //while loop runs while SCM not found
//     while(scmFound == false) {
//         for(var i = 1; i < 50000; i++) {
//            largestParam += largestParamIterator;
//             for(var j = 0; j < numRangeArr.length; j++) {
//                  if(largestParam % numRangeArr[j] == 0) {
//                      scmFound = true
//                 }
//                 else {
//                     scmFound = false;
//                     break
//                 }
//             }//inner closing bracket
//             if (scmFound) {
//                 return largestParam;
//        		 }
//         }//outer closing bracket
//         scmFound = true;  //save me from endless loops while testing
//     }//while loop closing bracket
// }
//
// console.log(smallestCommons([1,13]));
//
// #32
//
// function find(arr, func) {
//     var evenlyDivisible = function(array) {
//         for(var i = 0; i < array.length; i++) {
//             if(array[i] % 2 == 0) {
//                 return array[i];
//             }
//         }
//     }
//      return result = evenlyDivisible(arr)
// }
//
// #33
//
// function drop(arr, func) {
//     var secondArg = arguments[1];
//     var arrLength = arr.length;
//     for(var i = 0; i < arrLength; i++) {
//         if(func(arr[0])) {
//             break
//         }
//         else {
//             arr.shift();
//         }
//     }
//     return arr;
// }
//
// console.log(drop([1, 2, 3], function(n) {return n > 3; })) ;
//
// #34
//
// function binaryAgent(str) {
//   binaryArr = str.split(' ');
//   finalStringArr = [];
//
//    for(i=0;i < binaryArr.length;i++){
//    finalStringArr.push(String.fromCharCode(parseInt(binaryArr[i], 2)));
//   }
//   return finalStringArr.join('');
// }
//
// binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
//
// #35
//
// function every(collection, pre) {
//   //iterates through all objects in array
// 	for(var i = 0; i < collection.length; i++) {
//   	var indivObject = collection[i];
//     //returns false if object does not have key
//     if(!indivObject.hasOwnProperty(pre)) {
//     	return false;
//      }
//     else {
//       //iterates through all objects with pre as keys
//       for(key in indivObject) {
//         //only checks correct keys
//         if(key == pre) {
//           //if value of key is falsey, return false. else, return true.
//           if(!indivObject[key]) {
//           	return false;
//           }
//         }
//       }
//     }
// 	}
//   return true;
// }
//
//
// console.log(every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex"));
//
//
// #36
//
// function add() {
//   //set initial var to be used in case of only one argument passed
//   var firstArg = arguments[0];
//   //iterate through all arguments passed and return undefined if not numbers
//   	for(var i = 0; i < arguments.length; i++) {
//     	if(typeof arguments[i] !== 'number') {
//            return undefined;
//       }
//     }
//     //add both number arguments if total argument length is two
//     if(arguments.length == 2) {
//     	return arguments[0] + arguments[1];
//     }
//     //if argument length is 1, return a function adding firstArg variable and second variable passed in
//     return function(b) {
//       //verify that second variable is a number
//     	if(typeof b != 'number') {
//       	return undefined;
//       }
//       else {
//         //add firstArg variable and second passed in number
//       	return firstArg + b;
//       }
//     };
// }
//
//
// add(2,3);

//#37 Symmetric Difference
//===============================================================================
// function sym(args) {
//   var firstArr = arguments[0];
//   var secondArr = arguments[1];
//   var finalArr = [];
//
//   function onlyUnique(value, index, self) {
//     return self.indexOf(value) == index;
//   }
//   var secondArr = secondArr.filter(onlyUnique);
//   var finalArr = firstArr.filter(onlyUnique);
//   var pushElem = true;
//   for(var i = 0; i < finalArr.length; i++) {
// 		var finalArrElement = finalArr[i];
//     console.log("FINALARRELEMent", finalArrElement);
//     for(var j = 0; j < secondArr.length; j++) {
//     	var secondArrElement = secondArr[j];
//       console.log("SECONDARRELEMENT ", secondArrElement);
//       if(finalArrElement === secondArrElement) {
//       var pushElem = false;
//       	var index = finalArr.indexOf(finalArrElement);
//             console.log("CHOPPED  ", finalArr.splice(index, 1));
//             finalArr.splice(index, 1);
//             console.log("FINAL ARR POST CHOP = ", finalArr);
//       }
//
//     }
//   }
//     console.log("Final finalArr" , finalArr);
//
// }
//
// console.log(sym([1, 2, 3], [5, 2, 1, 4]));
//
//
//
// //SECOND VERSION
// //=================================================================================
//
// function sym(args) {
//
//   function onlyUnique(value, index, self) {
//     return self.indexOf(value) == index;
//   }
//
//   var finalArr = [];
//   var firstArr = arguments[0].filter(onlyUnique);
//   var secondArr = arguments[1].filter(onlyUnique);
//   console.log(secondArr, firstArr);
//   var pushElem = true;
//   for(var i = 0; i < firstArr.length; i++) {
// 		var firstArrElement = firstArr[i];
//     console.log("FIRSTARRELEM", firstArrElement);
//     for(var j = 0; j < secondArr.length; j++) {
//     	var secondArrElement = secondArr[j];
//       console.log("SECONDARRELEMENT ", secondArrElement);
//       if(firstArrElement === secondArrElement) {
//       	console.log("firstarr elem is equal to secondarrelem")
//       	var pushElem = false;
//         break;
//       }
//     }
//     console.log("pushElem = ", pushElem)
//     	if(pushElem) {
//       	finalArr.push(firstArr[i]);
//       }
//       pushElem = true;
//   }
//     console.log("Final finalArr" , finalArr);
//
// }


//THIRD VERSION
//=================================================================================
function sym(args) {
	var argsArray = [];
    var finalArr = [];
    var firstArr;
    var secondArr;

   function onlyUnique(value, index, self) {
     return self.indexOf(value) == index;
  }
  //iterates through arguments and creates an array of arrays
  for(var i = 0; i < args.length; i++) {
    if(arguments[i]) {
    	var arrToPush = arguments[i].filter(onlyUnique);
  	  argsArray.push(arrToPush);
    }
  }
  //setting two arrs for now. will dynamically create this once it's working
  //potentially create diff rounds that create the first n second depending on the round
  var roundCounter = 1;
  while(roundCounter <= argsArray.length) {
  	var pushElem = true;
    if(arguments.length == 2) {
      if(roundCounter == 1) {
         firstArr = argsArray[0];
         secondArr = argsArray[1];
      }
      else if(roundCounter == 2) {
         firstArr = argsArray[1];
         secondArr = argsArray[0];
      }
      roundCounter++;
    }

    for(var i = 0; i < firstArr.length; i++ ) {
      var firstArrElem = firstArr[i];
      for(var j = 0; j < secondArr.length; j++) {
        var secondArrElem = secondArr[j];
        if(firstArrElem === secondArrElem) {
          console.log("firstarr elem is equal to secondarrelem", firstArrElem, secondArrElem);
           pushElem = false;
          break;
        }
      }
    	if(pushElem) {
      	console.log("PUSHING FIRST ARR ELEM ", firstArrElem);
      	finalArr.push(firstArrElem);
      }
      pushElem = true;
    }
  }//while loop closing
  console.log("FINAL ARR POST WHILE LOOP =", finalArr);
  return finalArr;
}

console.log(sym([1, 1, 2, 3], [5, 2, 1, 4]));


//version 4
//=========================================================================
function sym(args) {
	var argsArray = [];
  var finalArr = [];
  var firstArr;
  var secondArr;
  var originalLength = arguments.length;

   function onlyUnique(value, index, self) {
     return self.indexOf(value) == index;
  }
  //iterates through arguments and creates an array of arrays
  for(var i = 0; i <= args.length; i++) {
    if(arguments[i]) {
    console.log(arguments[i]);
    	var arrToPush = arguments[i].filter(onlyUnique);
  	  argsArray.push(arrToPush);
    }
  }
  //setting two arrs for now. will dynamically create this once it's working
  //potentially create diff rounds that create the first n second depending on the round
  var roundCounter = 0;
  while(roundCounter < originalLength) {
  	roundCounter++;
		firstArr = argsArray[0];
    secondArr = argsArray[1];
    console.log("FIRST ARR FROM TOP = ", firstArr);
    console.log("SECOND ARR FROM TOP = ", secondArr);
     if(secondArr == undefined) {
    	console.log("YESSSSUUUUUUUUUUUUUUM gotta break ");
      break;
    }
    for(var i = 0; i < firstArr.length; i++ ) {
      var firstArrElem = firstArr[i];
      console.log("firstArrElem = ", firstArrElem);
      for(var j = 0; j < secondArr.length; j++) {
        var secondArrElem = secondArr[j];
        console.log("secondArrElem = ", secondArrElem);
        if(firstArrElem === secondArrElem) {
          console.log("firstarr elem is equal to secondarrelem", firstArrElem, secondArrElem);
          console.log("i equals ", i, "j equals ", j)
          var firstArrIndex = firstArr.indexOf(firstArrElem);
          var secondArrIndex = secondArr.indexOf(secondArrElem);
          firstArr.splice(firstArrIndex, 1);
          secondArr.splice(secondArrIndex, 1);
          i--;
          j--;
        }
      }
      console.log("FIRST ARR = ", firstArr);
      console.log("SECOND ARR = ", secondArr);
    }//ifs deleted after this bracket
  		var finalArr = firstArr.concat(secondArr);
      console.log("arrgsArray before shifting ==================================== ", argsArray);
      argsArray.shift();
      argsArray.shift();
      argsArray.unshift(finalArr);

  }
  return finalArr;
}

#38 Exact Change
function drawer(price, cash, cid) {
  var change = cash - price;

  console.log(change);

  while(change >= 100 && cid[8][1] > 100) {
  	change-= 100;
    cid[8][1]-= 100;
  }
  while(change >= 20 && cid[7][1] > 20) {
  	change-= 20;
    cid[7][1]-= 20;
  }
  while(change >= 10 && cid[6][1] > 10) {
  	change-= 10;
    cid[6][1]-= 10;
  }
  while(change >= 5 && cid[5][1] > 50) {
  	change-= 5;
    cid[5][1]-= 5;
  }
  while(change >= 1 && cid[4][1] > 1) {
  	change-= 1;
    cid[4][1]-= 1
  }
  while(change >= .25 && cid[3][1] > .25) {
  	change-= .25;
    cid[3][1]-= .25;
  }
  while(change >= .10 && cid[2][1] > .10) {
  	change-= .10;
    cid[2][1]-= .1;
  }
  while(change >= .05 && cid[1][1] > .05) {
  	change-= .05;
    cid[1][1]-= .05;
  }
  while(change >= .01 && cid[0][1] > .01) {
  	change-= .01;
    cid[0][1]-= .01;
  }

    for(var i = 0; i < cid.length; i++) {
    	if(cid[i][1] == 0 && change == 0) {
      	console.log("Closed");
      }
      else if(cid[i][1] < 0) {
      	console.log("Insufficient Funds");
        console.log(cid[i][0]);
      }
  }

  console.log(cid);
  console.log(change);
}



drawer(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])

#38 Version 2

function drawer(price, cash, cid) {
  var change = cash - price;
  var total = 0;
  var changeArray = [];
  var oneHundred = 0;
  var twenty = 0;
  var ten = 0;

	for(var i = 0; i < cid.length; i++) {
  	total+= cid[i][1];
  }
  //deals with floating point innaccuracies
  total =  Math.ceil(total * 100) / 100;

  if(total < change) {
  	return "Insufficient Funds";
  }
  else if(total == change) {
  	return "Closed";
  }
  while(total >= 0) {
  	if(change > 100) {
    	oneHundred++;
      total-= 100;
    }
    if(change > 20) {
    twenty++;
    total-= 20;
    }
  }
  console.log("Hundreds ", oneHundred);
  console.log("Twenties ", twenty);
  console.log("total = ", total);


}

drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);


//Version 3 Final Solution

var denominations = [
	{name: "ONE HUNDRED", value: 100},
  {name: "TWENTY", value: 20},
  {name: "TEN", value: 10},
  {name: "FIVE", value: 5},
  {name: "ONE", value: 1},
  {name: "QUARTER", value: 0.25},
  {name: "DIME", value: 0.10},
  {name: "NICKEL", value: 0.05},
  {name: "PENNY", value: 0.01}
]

function drawer(price, cash, cid) {
  var change = cash - price;
	var regObj = {};
	var registerTotal = cid
  	.map(function(t) {return t[1];})
    .reduce(function(a, b) {return a + b; });

 	var regObject = cid
  	.map(function(t) {regObj[t[0]] = t[1]; });
    regObj["total"] =  Math.ceil(registerTotal * 100) / 100;

  if(regObj.total < change) {
  	return "Insufficient Funds";
  }
  else if(regObj.total == change) {
  	return "Closed";
  }

  var changeArr = denominations.reduce(function(prev, curr) {
  	var value = 0;


  	while(regObj[curr.name] > 0 && change >= curr.value) {
       	change -= curr.value;
        regObj[curr.name] -= curr.value;
        value += curr.value;

        change = Math.round(change * 100) / 100;
        }

        if(value > 0) {
        		console.log("YESS", curr.name, value);
            prev.push([ curr.name, value ]);
        }
        return prev;


  }, []);

    if(changeArr.length < 1 || change > 0) {
    return "Insufficient Funds";
  }

  return changeArr;

}

console.log(drawer(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]));

//#39

function inventory(arr1, arr2) {
	var finalArr = arr1.concat(arr2);
  for(var i = 0; i < finalArr.length; i++) {
  	var firstElem = finalArr[i];
    for(var j = 1; j < finalArr.length; j++) {
    	var secondElem = finalArr[j];
      if(firstElem[1] == secondElem[1] && firstElem[0] != secondElem[0]) {
      	var choppingBlock = finalArr.indexOf(firstElem);
        secondElem[0] += firstElem[0];
        if (choppingBlock > -1) {
            finalArr.splice(choppingBlock, 1);
        }
        break;
      }
    }
  }
      	finalArr = finalArr.sort(function(current, next) {
      		return current[1] > next[1] ? 1: -1;
        })
        return finalArr;

     }


console.log(inventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]));

//#40
var permArr = [], usedChars = [], finalArr = [];
function permAlone(str) {
	  var i, ch, chars = str.split("");
  	for (i = 0; i < chars.length; i++) {
    ch = chars.splice(i, 1);
    usedChars.push(ch);
    if (chars.length == 0) permArr[permArr.length] = usedChars.join("");
    permAlone(chars.join(""));
    chars.splice(i, 0, ch);
    usedChars.pop();
  }
 permArr = permArr.filter(function() {
 	var pattern = (/([a-z])\1/i);
  var result = pattern.test(permArr);
    if(!result) {
      finalArr.push(permArr);
    }
 })
 return finalArr.length;
}

console.log(permAlone('abfdefa'));

//#41 Ceasers Cipher
function rot13(str) {
	var charCDArr = [];
  for(var i = 0; i < str.length; i++) {
    if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
    	if(str.charCodeAt(i) < 78) {
        charCDArr.push(String.fromCharCode(str.charCodeAt(i) + 13))
      }
      else {
      	charCDArr.push(String.fromCharCode(str.charCodeAt(i) - 13));
      }
    }
  }
  return charCDArr;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZCAZ!!!"));
