// 1. Declare a constant variable `PI` and assign it the value 3.14.

const PI = 3.14;
console.log(PI);

// 2. Create a variable `x` using `let` and assign it the value 10, then reassign it to 20.

let x = 10;
x = 20;
console.log(x);

// 3. Write an arrow function that takes two parameters and returns their sum.

let sum = (a, b) => {
  return a * b;
};
console.log(sum(10, 20.2));

// 4. Create a constant array and use `map` to return a new array with each element multiplied by 3.

const array = [2, 5, 4, 8, 1.2];
const result = array.map((item) => {
  return item * 3;
});
console.log(result);

// 5. Use `let` to declare a block-scoped variable inside an `if` statement and log its value inside and outside the block.

if (true) {
  let greet = "Hello ChamchamG";
  console.log(greet);
} else {
  console.log("Out of the block!");
}
// console.log(greet);

// 6. Write an arrow function that takes a string and returns its length.

let string = "Rajeev Kumar Repositree";

let getLength = (str) => {
  return str.length;
};
console.log(getLength(string));

// 7. Create a constant object and add a new property using dot notation.

let object = {
  fname: "Rajeev",
  age: 23,
  company: "Reposiree",
};

object.lname = "Kumar";
console.log(object);

// 8. Use `const` to declare a constant array and attempt to reassign it.

const arr = [1, 2, 5, 4, 8, 7];
// arr = [98, 45, 12, 10];
// console.log(arr);

// 9. Write an arrow function that returns the square of its argument.

let getSquare = (arrParam) => {
  let squareArr = [];
  for (element of arrParam) {
    squareArr.push(element * element);
  }
  return squareArr;
};

console.log(getSquare(arr));

// 10. Create an array of numbers and use `map` to return an array of their squares.

let mapSquare = arr.map((element) => {
  return element * element;
});

console.log(mapSquare);

// 11. Use `let` to declare a variable inside a loop and log its value at each iteration.

let myArray = [1, 5, 4, 6, 8];
for (let i = 0; i < myArray.length; i++) {
  let element = [];
  element.push(myArray[i]);

  console.log(element);
}

// 12. Write an arrow function that takes an array and returns the first element.

let getFirstElement = (arrParam) => {
  return arrParam[0];
};

console.log(getFirstElement(myArray));

// 13. Create a Map with three key-value pairs and log its size.

let myMap = new Map([
  ["name", "Rajeev"],
  ["age", 23],
  ["company", "Google"],
]);

console.log(`Map Size Is `, myMap.size);

// 14. Use `const` to declare a constant object and change one of its properties.

const myObject = new Object();
myObject.fname = "Rajeev";
myObject.lname = "Kumar";
myObject.wife = "ChamchamG";

console.log(`Object Is `, myObject);

myObject.lname = "Gupta";
console.log(`Object Is `, myObject);

//  15. Write an arrow function that takes two strings and returns them concatenated.

let str1 = "Rajeev";
let str2 = "ChamchamG";

let getConcat = (strParam1, strParam2) => {
  // return strParam1 + strParam2;
  return strParam1.concat(" ", strParam2);
};

console.log(`Concatinated String Is: `, getConcat(str1, str2));

// 16. Create an array of numbers and use `map` to convert each number to a string.

// let myArray = [1, 5, 4, 6, 8];

let getStr = myArray.map((element) => {
  return element.toString();
});

console.log(getStr);

// 17. Use `let` to declare a variable inside a function and log its value outside the function.

function scopeCheck() {
  let name = "Rajeev";
  return name;
}

console.log(scopeCheck());
// console.log(name);

// 18. Write an arrow function that takes an array and returns its length.

// let myArray = [1, 5, 4, 6, 8];

let getLenght = (arrayParam) => {
  return arrayParam.length;
};

console.log(getLenght(myArray));

// 19. Create a Map and use the `set` method to add a new key-value pair.

let map = new Map([]);

map.set("name", "Rajeev");
map.set("age", 23);
map.set("address", "Begusarai");

console.log(`Get Map Value: `, map);

//  20. Use `const` to declare a constant array and use `map` to double each element's value.

const arrayTwo = [2, 5, 4, 7, 8, 1, 0, 23];

let getDouble = arrayTwo.map((element) => {
  return element * 2;
});

console.log(getDouble);
