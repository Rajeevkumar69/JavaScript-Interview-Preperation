//                                                            forEach

// 21. Write a function `sumArray` that takes an array of numbers and returns the sum of all elements using `forEach`.

var array = [2, 1, 5, 4, 5, 4, 1];

function sumArray(arrParam) {
  var sum = 0;

  arrParam.forEach((element) => {
    sum += element;
  });
  return sum;
}
console.log(sumArray(array));

// 22. Create a function `formatNames` that takes an array of objects with `firstName` and `lastName` properties. The function should modify each object to have a `fullName` property with the combined first and last names.

var arrOfObject = [
  {
    fname: "Rajeev",
    lname: "kumar",
  },
  {
    fname: "Chamcham",
    lname: "Roy Gupta",
  },
];

function formatNames(arrObjParam) {
  arrObjParam.forEach((element) => {
    element.fullName = `${element.fname} ${element.lname}`;
  });
  return arrObjParam;
}
console.log(formatNames(arrOfObject));

// 23. Implement a function `countOccurrences` that takes an array of items and returns an object with the count of each item using `forEach`.

// var array = [2, 1, 5, 4, 5, 4, 1];

function countOccurrences(arrParam) {
  let count = {};

  arrParam.forEach((element) => {
    if (count[element]) {
      count[element]++;
    } else {
      count[element] = 1;
    }
  });
  return count;
}
console.log(countOccurrences(array));

// 24. Write a function `removeFalsyValues` that takes an array and removes all falsy values (false, null, 0, "", undefined, and NaN) using `forEach`.

var array = [1, 7, 5, NaN, null, 84, undefined, 0, "", false];

function removeFalsyValues(arrParam) {
  var newArray = [];
  arrParam.forEach((element) => {
    if (element) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(removeFalsyValues(array));

// 25. Create a function `mergeArrays` that takes two arrays and merges them into a single array using `forEach`.

var array = [1, 7, 5, NaN, null, 84, undefined, 0, "", false];
var array2 = [5, 9, 7, 14];

function mergeArrays(arr1Param, arr2Param) {
  var newArray = [];
  arr1Param.forEach((element) => {
    if (element) {
      newArray.push(element);
    }
  });
  arr2Param.forEach((element) => {
    if (element) {
      newArray.push(element);
    }
  });
  return newArray;
}
console.log(mergeArrays(array, array2));

// 26. Implement a function `findAverage` that takes an array of numbers and returns the average using `forEach`.

function findAverage(arrParam) {
  var average = 0;
  var sum = 0;
  arrParam.forEach((element) => {
    sum += element;
  });

  average = sum / arrParam.length;
  return average;
}

console.log(findAverage(array2));

// 27. Write a function `modifyObjects` that takes an array of objects and modifies each object's properties based on certain conditions using `forEach`.

function modifyObjects(arrObjParam) {
  console.log(`Modified Object Is: `);
  arrObjParam.forEach((element) => {
    element.fullName = ` ${element.fname} ${element.lname}`;
  });
  return arrObjParam;
}

console.log(modifyObjects(arrOfObject));

// 28. Create a function `removeEvenNumbers` that takes an array of numbers and removes all even numbers using `forEach`.

var arr3 = [1, 3, 5, 4, 8, 7, 13, 15, 14];

function removeEvenNumbers(arrParam) {
  var newArray = [];
  arrParam.forEach((element) => {
    if (element % 2 == 0) {
      newArray.push(element);
    }
  });
  return newArray;
}

console.log(removeEvenNumbers(arr3));

// 29. Implement a function `flattenArray` that takes an array of arrays and returns a single flattened array using `forEach`.

function flattenArray(arrObjParam) {
  let newArray = [];

  arrObjParam.forEach((subArray) => {
    if (Array.isArray(subArray)) {
      newArray.push(...subArray);
    } else {
      console.error("flattenArray: Element is not an array:", subArray);
    }
  });

  return newArray;
}

console.log(flattenArray(arrOfObject));

// 30. Write a function `updateObjectValues` that takes an object and updates its values based on a callback using `forEach`.

var obj = {
  name: { first: "John", last: "Smith" },
  age: 18,
  city: "New York",
};

var updatedObj = {
  ...obj,
  age: 20,
};

console.log(updatedObj.age);
