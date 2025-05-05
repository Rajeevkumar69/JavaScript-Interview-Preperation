// 1. Write a function that takes an array of arrays and flattens it into a single array using a for-of loop.

var nestedArray = [
  [1, 2, 3],
  [4, 5, 9],
  [5, 3, 7],
];

function flattens(arrayParam) {
  var flattensAray = [];
  for (var array of arrayParam) {
    flattensAray.push(array);
  }
  return flattensAray;
}

console.log(flattens(nestedArray));

// 2. Given an array of strings, write a function that returns a new array containing the lengths of each string using a for-of loop.

var stringArray = ["ChamchamG", "Rajeev", "Harsh"];

function getStringLength(strArrayParam) {
  var lengthOfArray = [];
  for (var data of strArrayParam) {
    lengthOfArray.push(data.length);
  }
  return lengthOfArray;
}

console.log(getStringLength(stringArray));

// 3. Implement a function that takes an object and logs each key-value pair using a for-of loop and `Object.entries()`.

var object = {
  name: "Rajeev Kumar",
  company: "Repositree.io",
  id: "rajeev.kumar@repositree.io",
  workingTime: 8,
};

function getKeyValue(objParam) {
  var entries = Object.entries(objParam);
  console.log(entries);

  for (var [key, value] of entries) {
    console.log(`${key}: ${value}`);
  }
}
getKeyValue(object);

// 4. Write a function that takes a Set and an array, then returns a new array containing only the elements that are present in both using a for-of loop.

var set = new Set(["1245+454", "^7877"]);
var array = ["Rajeev", "1245+454", 12454, null];

function getNewArray(setParam, arrayParam) {
  var newArray = [];

  for (var element of arrayParam) {
    if (setParam.has(element)) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(getNewArray(set, array));

// 5. Implement a function that takes a Map and returns an array of its keys and values concatenated as strings using a for-of loop.

var map = new Map();

map.set("name", "Rajeev");
map.set("age", 23);
map.set("company", "Repositree.io");

function getArray(mapParam) {
  var newMapArray = new Array(mapParam);
  var finalArray = [];
  for (var element of newMapArray) {
    finalArray.push(element);
  }
  return finalArray;
}

console.log(getArray(map));

// 6. Write a function that takes two arrays of numbers and returns a new array containing the sum of corresponding elements from each array.

var arrayOne = [1, 3, 5, 9, 7];
var arrayTwo = [1, 2, 5, 4, 7, 12];

function getSum(arrOneParam, arrTwoParam) {
  var resultArray = [];
  var maxLength = Math.max(arrOneParam.length, arrTwoParam.length);

  for (var i = 0; i < maxLength; i++) {
    var sum = 0;
    if (i < arrOneParam.length) {
      sum += arrOneParam[i];
    }
    if (i < arrTwoParam.length) {
      sum += arrTwoParam[i];
    }
    resultArray.push(sum);
  }

  return resultArray;

  // for (var element in arrTwoParam) {
  //   resultArray.push(arrOneParam[element] + arrTwoParam[element]);
  // }

  // return resultArray;
}

console.log(getSum(arrayOne, arrayTwo));

// 7. Create a function that takes an array and a callback function, and returns a new array with the results of calling the callback on each element.

var array = [2, 5, 4, 8, 7, 89];

function getCallBackArray(arrOneParam, callback) {
  var resultArray = [];

  for (var i of arrOneParam) {
    resultArray.push(i + 1);
    callback(resultArray);
  }
}
function printArray(result) {
  console.log(result);
}

getCallBackArray(array, printArray);

// 8. Implement a function that checks if a string is a palindrome. The function should ignore spaces, punctuation, and capitalization.

var string1 = "A man, a plan, a canal, Panama";
var string2 = "Hello, World!";

function checkPalindrome(strParam) {
  var normalizedStr = strParam.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  var reverseStr = normalizedStr.split("").reverse().join("");
  console.log(reverseStr);

  if (normalizedStr === reverseStr) {
    console.log("Yes, Palindrome");
  } else {
    console.log("No, Not Palindrome");
  }
}

checkPalindrome(string1);
checkPalindrome(string2);

// 9. Write a function that takes a number and returns its factorial using recursion.

var number = 7;

function getFactorial(numParam) {
  // Base case: if numParam is 0 or 1, return 1
  if (numParam <= 1) {
    return 1;
  }

  // Recursive case: numParam * factorial of (numParam - 1)
  return numParam * getFactorial(numParam - 1);

  // var result = 1;
  // for (var i = numParam; i > 0; i--) {
  //   result *= i;
  // }

  // return result;
}

console.log(getFactorial(number));

// 10. Create a function that returns the nth Fibonacci number using an iterative approach.

var number = 5;

function getFibonacci(numParam) {
  if (numParam <= 0) return 0;
  if (numParam === 1) return 1;

  var a = 0,
    b = 1,
    temp;

  for (var i = 2; i <= numParam; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

console.log(getFibonacci(number));

// 11. Write a function expression that takes an array of numbers and returns a new array with each number squared.

var array = [2, 5, 4, 8];

function getSquared(arrParam) {
  var result = [];
  for (var i = 0; i < arrParam.length; i++) {
    result.push(arrParam[i] * arrParam[i]);
  }

  return result;
}

console.log(getSquared(array));

// 12. Implement a function expression that takes a string and returns a new string with each word capitalized.

var string = "rajeev & ChachamG";

function getCaptilize(strParam) {
  var result = strParam.toUpperCase();

  console.log(result);
}
getCaptilize(string);

// 13. Create a function expression that takes an array and returns a new array with duplicate elements removed.

var duplicateArray = [2, 15, 4, 2, 1, 5, 4, 6, 3, 2, 14, 5];

function removeDuplicte(arrParam) {
  var result = [...new Set(arrParam)];
  return result;
}

console.log(removeDuplicte(duplicateArray));

// 14. Write a function expression that takes an object and returns an array of its values.

var object = {
  name: "Rajeev",
  age: 26,
  company: "Repositree",
};

function getArrayToObject(objParam) {
  var array = [];

  for (var i in objParam) {
    array.push(i);
  }
  return array;
}

console.log(getArrayToObject(object));

// 15. Implement a function expression that takes an array of numbers and returns the average of those numbers.

var array = [25, 12, 45, 10];

function getAverage(arrParam) {
  var result = 0;

  for (var i of arrParam) {
    result += i;
  }

  return result / arrParam.length;
}

console.log(getAverage(array));
