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
    console.log("First Element: " + firstElement);
    console.log("Second Element: " + secondElement);
    var x = 0;

    for(i = 0; i < firstElement.length; i ++) {
         var secondElemLetters = secondElement[x];
         var firstElemLetters = firstElement[i];
        if (secondElemLetters == firstElemLetters) {
            indices.push(true);
            console.log(indices);
        }
        else {
            falsies.push(false);
        }
        x++;
        console.log("First Element Letters:" + firstElemLetters);
        console.log("Second Element Letters:" + secondElemLetters);

    }
    if (indices.length === secondElement.length) {
        return true;
    }
    else {
        return false;
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
