// Array.find() method
// The find() method returns the first element in the array that satisfies the provided testing function.
// If no elements satisfy the testing function, undefined is returned.
var array = [-1, 20, 12, -12, 45, 1];

var result = array.find((element) => {
  return element < 0;
});
console.log(result);

// Array.findIndex() method
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function.
// Otherwise, it returns -1, indicating that no element passed the test.

var result = array.findIndex((n) => {
  return n < 0;
});
console.log(result);

// Array.some() method
// The some() method tests whether at least one element in the array passes the test implemented by the provided function.
// It returns a Boolean value.
var result = array.some((element) => {
  return element > 0;
});
console.log(result);

// Array.sort() method
// The sort() method sorts the elements of an array in place and returns the sorted array.
// The default sort order is built upon converting the elements into strings and comparing their sequences of UTF-16 code unit values.
var result = array.sort();
console.log(result);

// Array.every() method
// The every() method tests whether all elements in the array pass the test implemented by the provided function.
// It returns a Boolean value.
var result = array.every((element) => {
  return element > 0;
});
console.log(result);

// Array.reduce() method
//reduce() is a method that processes an array and reduces it to a single value by applying a function to each element, carrying over the accumulated result to the next element.

var result = array.reduce((acc, value) => {
  let sum = acc + value;
  return sum;
}, 0);

console.log(result);

// ---------------------------------------------------------------->
// find() returns the first element less than 0.
// findIndex() returns the index of the first element less than 0.
// some() checks if there is at least one element greater than 0.
// sort() sorts the array elements as strings by default.
// every() checks if all elements are greater than 0.
