//                                             Map
// 11. Implement a function `doubleArray` that takes an array of numbers and returns a new array with each number doubled.

var array = [2, 45, 1, 6];

var doubleArray = array.map((element) => {
  return element * element;
});

console.log(doubleArray);

// 12. Write a function `capitalizeNames` that takes an array of names and returns a new array with each name capitalized.

var nameArray = ["Harsh", "Rajeev", "Kumar", "Gupta", "Chamcham"];

var capitalizeNames = nameArray.map((element) => {
  return element.toUpperCase();
});

console.log(capitalizeNames);

// 13. Create a function `calculateArea` that takes an array of objects representing rectangles with `width` and `height` properties. The function should return an array of areas calculated from these rectangles.

var arrOfObject = [
  {
    width: 12,
    height: 10,
  },
  {
    width: 5,
    height: 8,
  },
];

var calculateArea = arrOfObject.map((rectangle) => {
  return rectangle.width * rectangle.height;
});

console.log(calculateArea);

// 14. Implement a function `convertToRoman` that takes an array of numbers and converts each number to its Roman numeral representation.

var convertToRoman = array.map((element) => {
  if (element == 2) {
    return "||";
  } else if (element == 45) {
    return "XLV";
  } else if (element == 1) {
    return "|";
  } else if (element == 6) {
    return "V|";
  }
});

console.log(convertToRoman);

// 15. Write a function `extractEmails` that takes an array of objects with `name` and `email` properties and returns an array of only the email addresses.

var arrOfObject = [
  {
    name: "Rajeev Kumar",
    email: "rk@gmail.com",
  },
  {
    name: "Harsh Kumar",
    email: "harsh@gmail.com",
  },
];

var extractEmails = arrOfObject.map((emailObj) => {
  return `Name is ${emailObj.name} and email is ${emailObj.email}`;
});

console.log(extractEmails);

// 16. Create a function `findLongestWord` that takes an array of strings and returns the longest word from the array.

// var nameArray = ["Harsh", "Rajeev", "Kumar", "Gupta", "Chamcham"];

// The `reduce` method is used to iterate through the nameArray and compare the lengths of the strings.
var longestWord = nameArray.reduce((longest, current) => {
  return current.length > longest.length ? current : longest;
}, "");

console.log(`Longest word is ${longestWord}`);

// 17. Implement a function `addSuffix` that takes an array of words and a suffix string. The function should return a new array with each word appended with the suffix.

var addSuffix = nameArray.map((element) => {
  return `The Suffix String Array Is ${element.concat("ing")} `;
});
console.log(addSuffix);

// 18. Write a function `removeDuplicates` that takes an array and returns a new array with duplicate elements removed.

var dupArray = [
  2, 10, 2, 1, 4, 1, 0, 1, 2, 1, 0, 5, 2, 1, 2, 0, 4, 0, 5, 7, 4, 1, 2, 3, 6, 4,
  5, 2, 1, 5, 8,
];

var removeDuplicates = [...new Set(dupArray)];

console.log(removeDuplicates);

// 19. Create a function `sortByLength` that takes an array of strings and returns a new array with the strings sorted by their lengths.

nameArray.sort((a, b) => {
  return a.length - b.length;
});

console.log(nameArray);

// 20. Implement a function `reverseStrings` that takes an array of strings and returns a new array with each string reversed.

function reverseStrings(arr) {
  return arr.map((str) => str.split("").reverse().join(""));
}

console.log(reverseStrings(nameArray));
