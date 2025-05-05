// // Q11. Reverse an array without using the built-in .reverse() method.

// function reverseArray(arr = []) {
//   let reversedArray = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reversedArray.push(arr[i]);
//   }
//   return reversedArray;
// }

// // console.log(reverseArray([10, 12, 15]));

// // Q12. Flatten a nested array to a single-level array.

// let nestedArray = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function flattenArray(arr = []) {
//   return arr.flat();
// }

// // console.log(flattenArray(nestedArray));

// // Q13. Remove duplicate values from an array.

// function removeDuplicate(arr = []) {
//   return [...new Set(arr)];
// }

// console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 5, 5]));

async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await response.json();
  console.log(data);
}

fetchData();
