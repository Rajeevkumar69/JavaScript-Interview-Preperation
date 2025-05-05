// 1. Write a `while` loop to print all even numbers between 1 and 50.

var i = 1;

while (i <= 50) {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
}

// 2. Write a `do-while` loop to calculate the factorial of a given number.
// (3! = 3 × 2 × 1 and is equal to 6)

var number = 5;
var result = 1;
var i = number;

do {
  result *= i;
  i--;
} while (i > 0);

// while (i > 0) {
//   result *= i;
//   i--;
// }

// for (var i = number; i > 0; i--) {
//   result *= i;
// }

console.log(`Factorial of ${number} is ${result}`);

// 3. Use a `for-of` loop to create a new array that contains the squares of each element in the given array `[1, 2, 3, 4, 5]`.

var array = [1, 2, 3, 4, 5];
var squareArray = [];

for (const iterator of array) {
  squareArray.push(iterator * iterator);
}
console.log(squareArray);

// 4. Write a `for-in` loop to iterate over the properties of an object and count the number of properties.

var object = {
  name: "Rajeev Kumar",
  age: 23,
  company: "Google",
};
var totalProperties = 0;

for (const key in object) {
  if (object.hasOwnProperty(key)) {
    totalProperties++;
  }
}
console.log(totalProperties);

// 5. Write a `while` loop to reverse a given string.

var string = "Rajeev Kumar";
var reverseString = "";
var index = string.length - 1;

while (index >= 0) {
  reverseString += string[index];
  index--;
}
console.log(reverseString);

// 6. Use a `do-while` loop to repeatedly prompt the user for input until they enter the word "exit".

// var input = "";

// do {
//   input = prompt("Enter the word exit");
// } while (input !== "exit");

// console.log("You Pressed exit!");

// 7. Write a `for-of` loop to iterate through a `Map` and log each key-value pair to the console.

// Creating a Map from the given object
var object = {
  name: "Rajeev",
  age: 23,
  company: "Google",
};

var map = new Map(Object.entries(object));
console.log(map);

// Iterating through the Map and logging each key-value pair
for (let [i, j] of map) {
  console.log(`${i}: ${j}`);
}

// 8. Write a `for-in` loop to iterate over an array of objects and log the value of a specific property for each object.

var arrayOfObject = [
  {
    name: "Rajeev",
    age: 23,
    company: "Google",
  },
  {
    name: "Chamcham",
    age: 22,
    company: "AIIMS",
  },
];

for (const key in arrayOfObject) {
  console.log(arrayOfObject[key]);
}

// 9. Write a `while` loop to find the greatest common divisor (GCD) of two given numbers.
var numOne = 85;
var numTwo = 70;

while (numTwo !== 0) {
  var temp = numTwo;
  numTwo = numOne % numTwo;
  numOne = temp;
}

console.log(`The GCD is ${numOne}`);

// 10. Use a `do-while` loop to simulate a simple menu-driven program that repeats until the user chooses to exit.
var userInput = "";

do {
  userInput = prompt("Please enter a command (type 'exit' to quit):");

  switch (userInput) {
    case "1":
      console.log("You selected option 1");
      break;
    case "2":
      console.log("You selected option 2");
      break;
    case "3":
      console.log("You selected option 3");
      break;
    case "exit":
      console.log("Exiting the program.");
      break;
    default:
      console.log("Invalid option, please try again.");
      break;
  }
} while (userInput !== "exit");

console.log("Program terminated.");
