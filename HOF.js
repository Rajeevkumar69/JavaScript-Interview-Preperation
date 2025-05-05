// Higher-Order Functions (HOFs) in JavaScript

// 1. map() - Transforms array elements
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// 2. filter() - Filters elements based on condition
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

// 3. reduce() - Reduces array to single value
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15

// 4. forEach() - Iterates over array
numbers.forEach((num) => console.log(num * 2));
// 2, 4, 6, 8, 10

// 5. find() - Finds first matching element
const firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2

// 6. findIndex() - Finds index of first matching element
const index = numbers.findIndex((num) => num > 3);
console.log(index); // 3

// 7. every() - Checks if all elements match condition
const allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // true

// 8. some() - Checks if at least one element matches condition
const hasNegative = numbers.some((num) => num < 0);
console.log(hasNegative); // false

// 9. sort() - Sorts an array
const fruits = ["banana", "apple", "cherry"];
fruits.sort();
console.log(fruits); // ['apple', 'banana', 'cherry']

// 10. reverse() - Reverses an array
numbers.reverse();
console.log(numbers); // [5, 4, 3, 2, 1]

// 11. flatMap() - Maps and flattens
const result = numbers.flatMap((num) => [num, num * 2]);
console.log(result); // [5, 10, 4, 8, 3, 6, 2, 4, 1, 2]

// 12. bind() - Binds function to a specific object
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};
const boundGetX = module.getX.bind(module);
console.log(boundGetX()); // 42

// 13. setTimeout() - Delays execution
setTimeout(() => console.log("Executed after 2 seconds"), 2000);

// 14. setInterval() - Repeats execution
const intervalId = setInterval(
  () => console.log("Repeats every 2 seconds"),
  2000
);

// To stop the interval
clearInterval(intervalId);
