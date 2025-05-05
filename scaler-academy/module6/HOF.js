// Higher-Order Function (HOF)

// A Higher-Order Function is a function that can take other functions as arguments or return functions as its result. This allows for more flexible and reusable code. Examples of HOFs in JavaScript include `map`, `forEach`, `filter`, and `reduce`.

//  `map` Method
// The `map` method is a built-in array method in JavaScript that creates a new array by applying a provided function to each element of the original array. It does not modify the original array. The `map` method is often used when you want to transform each element of an array in some way.

// array.map(callback(element[, index[, array]])[, thisArg])

var array = [2, 1, 4, 5, 4, 1];
var squaredArray = array.map((num) => num * num);
console.log(squaredArray);

// `forEach` Method

// The `forEach` method is another built-in array method in JavaScript that executes a provided function once for each array element. Unlike `map`, `forEach` does not return a new array; it returns `undefined`. It is typically used for performing side effects such as logging or updating external variables.

var fruits = ["apple", "banana", "mango"];

fruits.forEach(function (element, index, array) {
  console.log("Element:", element);
  console.log("Index:", index);
  console.log("Array:", array);
});

// ---------------------------------------
//  General Method -----------------------
var array = [2, 1, 4, 5, 4, 1];

var squaredArray = [];
for (element of array) {
  squaredArray.push(element * element);
}
console.log(squaredArray);

// ---------------------------------------
// ---------------------------------------

// HOF
//  map will loop through your every element and will perform specific operation

// map method will always return a new array with result

// ---------------------------------------
//  map with arrow function
squaredArray = array.map((num) => {
  return num * num;
});
console.log(squaredArray);

squaredArray = array.map(function (num) {
  return num * num;
});

console.log(squaredArray);

// -------------------------------------

var inr = [1200, 1236, 10000, 451, 210, 780];
var dollarValue = 78.9;

var inrToDollar = inr.map((rupees) => {
  // toFixed method will remove value after the point
  return (rupees / dollarValue).toFixed(0);
});

console.log(inrToDollar);

// ---------------------------------------

//  forEach doesn't return an new array that's only the difference b/w the map and foreach

var inrToDollar = inr.forEach((element) => {
  console.log(element * element);
});

// console.log(inrToDollar);
