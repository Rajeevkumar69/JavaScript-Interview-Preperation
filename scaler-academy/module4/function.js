// A JavaScript function is a block of code designed to perform a particular task.

// A JavaScript function is executed when "something" invokes it (calls it).

// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

function greet() {
  console.log("Hey CHamchamG Good Morning!");
}

greet();

function add(number1, number2) {
  console.log(number1 + number2);
}
add(7, 3);

function multiplication(number1, number2) {
  return number1 * number2;
}

console.log(multiplication(9, 4));

// Function as expression

var add = function (number1, number2) {
  return number1 * number2;
};

console.log(add(8, 5));

// Take a input from user & store all even number and return a object by index as key
var printEven = function (number) {
  var evenNumbers = [];
  var newObject = {};
  for (var i = 1; i <= number; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i);
    }
  }

  for (var [index, value] of evenNumbers.entries()) {
    newObject[index] = value;
  }
  return newObject;
};

console.log(printEven(5));
