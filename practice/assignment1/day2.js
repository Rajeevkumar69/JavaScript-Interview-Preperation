// 1. Create an array with the numbers 1 to 5.

var array = [1, 2, 3, 4, 5];
console.log(array);

// 2. Add the number 6 to the end of an array.

var array = [1, 2, 3, 4, 5];
array.push(6);
console.log(array);

// 3. Remove the first element from an array.

var array = [1, 2, 3, 4, 5, 6];
delete array[0];
console.log(array);

// 4. Find the length of an array.

var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array.length);

// 5. Iterate over an array using a for-loop and log each element.
var array = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < array.length; i++) {
  console.log("\n\n\n + '---'", array[i]);
}

// 6. Access the third element in an array.
var array = [1, 2, 3, 4, 5, 6, 7];
console.log(array[2]);

// 7. Combine two arrays [1, 2, 3] and [4, 5, 6].
var array1 = [1, 2, 3];
var array2 = [4, 5, 6];
console.log(array1.concat(array2));

// 8. Check if the array [1, 2, 3] includes the number 2.

var array = [1, 2, 3, 4, 5, 6];
console.log(array.includes(2));

// 9. Create an object with properties name and age.

var obj = {
  name: "Harsh Babu",
  age: 17,
};

// 10. Access the age property of an object.

var obj = {
  name: "Harsh Babu",
  age: 17,
};

console.log(obj.age);
console.log(obj["age"]);

// 11. Add a new property city to an object.

var obj = {
  name: "Harsh Babu",
  age: 17,
};
obj.city = "Begusarai";
console.log(obj);

// 12. Delete the age property from an object.

var obj = {
  name: "Harsh Babu",
  age: 17,
  city: "Begusarai",
};

delete obj["age"];
console.log(obj);

// 13. Iterate over the keys of an object using a for-in loop.
var obj = {
  name: "Harsh Babu",
  age: 17,
  city: "Begusarai",
};
for (const key in obj) {
  console.log(key);
}

// 14. Check if an object has a property called name.

var obj = {
  name: "ChamchamG",
  age: 23,
  city: "Begusarai",
};

console.log(obj.hasOwnProperty("name"));
console.log(Object.keys(obj).includes("name"));
console.log("name" in obj);

// 15. Convert an object {a: 1, b: 2} into an array of its keys.

var obj = {
  a: 1,
  b: 2,
};

console.log(Array(obj));

// 16. Use a for-in loop to iterate over the properties of an object.

var obj = {
  fName: "Rajeev",
  lName: "Kumar",
  age: 23,
};

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key]);
  }
}

// 17. Use a for-of loop to iterate over the values of an array.

var array = ["1", 2, 3, 4, 5, 6, 7];

for (const item of array) {
  console.log(item);
}

// 18. Copy all properties from object b into object a.

var objA = {
  name: "Rajeev Kumar",
  age: 23,
};
var objB = {
  name: "ChamchamG",
  age: 24,
};

console.log((objA = objB));

// 19. Merge two objects {a: 1} and {b: 2} into one.

var objA = {
  a: 1,
};
var objB = {
  b: 2,
};
// Object.assign(target, source1, source2, ...)
Object.assign(objA, objB);
console.log(objA);

// 20. Sort an array of objects [{name: 'John', age: 30}, {name: 'Jane', age: 25}] by age.

var arrOfObj = [
  {
    name: "John",
    age: 100,
  },
  {
    name: "Jane",
    age: 60,
  },
];

arrOfObj.sort((a, b) => a.age - b.age);
console.log(arrOfObj);

// 21. Write a function that reverses an array without using the built-in reverse method.

function reverseArray(arr) {
  var left = 0;
  var right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];

    left++;
    right--;
  }

  return arr;
}

var myArray = [1, 2, 3, 4, 5];
console.log(reverseArray(myArray));

// 22. Create a nested array (2D array) and access the element at the second row and third column.

var nestedArray = [
  // column
  [1, 2, 3],
  [4, 5, 9],
  [5, 3, 7],
];

console.log(nestedArray[1][2]);

//  23. Write a function that flattens a nested array.

var nestedArray = [
  [1, 2, 3],
  [4, 5, 9],
  [5, 3, 7],
];

function flattens(array) {
  var flattensArray = [];
  for (var i = 0; i < array.length; i++) {
    flattensArray.push(array[i]);
  }
  return flattensArray;
}

console.log(flattens(nestedArray));

// 24. Remove duplicate elements from an array.

var dArray = [1, 2, 3, 2, 5, 4, 5, 3, 4];

var orgArray = [...new Set(dArray)];
console.log(orgArray);

// 25. Create an array of objects and find the object with the highest value of a specific property.
var arrOfObj = [
  {
    name: "Rajeev Kumar",
    age: 23,
    company: "Repositree",
  },
  {
    name: "Chamcham Roy",
    age: 22,
    company: "AIIMS",
  },
  {
    name: "Harsh Kumar",
    age: 18,
    company: "JLS",
  },
];

function highestObject(h, arr) {
  for (var i = 1; i < arr.length; i++) {
    h = arr[i];
  }

  for (var i = 0; i < arr.length; i++) {
    return arr[i];
  }

  return arr[i];
}

var higest = [];
console.log(highestObject(higest, arrOfObj));

// 26. Write a function that takes an array and returns an object with the count of each unique element.

function makeObject(arr) {
  // Remove duplicates using Set and convert to an array
  var uniqueArray = [...new Set(arr)];

  // Convert the unique array to an object
  var finalObject = Object.assign({}, uniqueArray);

  return finalObject;
}

var array = [
  1, 2, 3, 5, 4, 1, 2, 3, 5, 5, 8, 7, 4, 5, 8, 7, 1, 2, 5, 4, 7, 9, 5, 3, 10,
  12, 12, 14, 15, 16, 14, 15,
];

console.log(makeObject(array));

// 27. Use a for-loop to iterate over an array and create a new array with each element squared.

var array = [1, 2, 5, 4, 5, 4, 9, 12, 14];
var newArray = [];

for (var i = 0; i < array.length; i++) {
  newArray.push(array[i] * array[i]);
}
console.log(newArray);

// 28. Write a function that merges two sorted arrays into one sorted array.

function getSortedArray(array_one, array_two) {
  var jointArray = array_one.concat(array_two);
  jointArray.sort();
  return jointArray;
}

var arrayOne = [1, 2, 1, 4, 3, 1, 5, 4, 7, 4, 9, 7, 5];
var arrayTwo = [
  3, 1, 2, 1, 2, 4, 5, 4, 7, 8, 1, 2, 5, 4, 1, 2, 5, 1, 0, 3, 2, 1, 0,
];

console.log(getSortedArray(arrayOne, arrayTwo));

// 29. Create a function that deep clones an object.

function getClonedObject(objectParam) {
  var clonedObject = Object.assign({}, objectParam);
  // var finalObject = Object.assign({}, uniqueArray);

  return clonedObject;
}

var object = {
  name: "Rajeev",
  company: "Repositree",
  City: "Noida",
  id: "REP-R3252",
};

console.log(getClonedObject(object));

// 30. Write a function that finds the intersection of two arrays.
// It means all the elements which is common in set A and set B should occur in a single array

function getIntersectionArray(arrayA, arrayB) {
  // Convert arrayB to a Set for faster lookups
  var setB = new Set(arrayB);
  // console.log(setB);
  // Initialize an empty array to store the intersection
  var finalArray = [];

  // Iterate over value of arrayA and check if each element is in setB
  for (var element of arrayA) {
    if (setB.has(element)) {
      // Add the element to the finalArray if it exists in both arrays
      finalArray.push(element);
      // Remove the element from setB to avoid duplicates
      setB.delete(element);
    }
  }

  return finalArray;
}

var arrayOne = [1, 2, 5, 4, 1, 2, 5, 4];
var arrayTwo = [2, 3, 6, 5, 8, 1, 2, 4, 7];

console.log(getIntersectionArray(arrayOne, arrayTwo));
