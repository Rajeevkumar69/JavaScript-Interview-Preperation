// 1. Write a JavaScript program to declare a variable called `greeting` and assign it the value `"Hello, World!"`. Then, log this variable to the console.

var greeting = "Hello, World!";

console.log(greeting);

// 2. Write a JavaScript program to declare three variables `a`, `b`, and `c` with values `10`, `20`, and `30` respectively. Calculate their sum and store it in a variable called `sum`, then log `sum` to the console.

var a = 20,
  b = 30,
  c = 10;

var calculate = a + b + c;
console.log(calculate);

// 3. Write a JavaScript program to declare a constant variable `PI` with the value `3.14159`. Attempt to reassign a new value to `PI` and log the result. What happens and why?

const PI = 0.314159;
PI = 123;
console.log(PI);
// Ans:- We can't reassign new value in const type variable

// 4. Write a JavaScript program that declares a variable `x` inside a block scope and assigns it the value `5`. Try to access `x` outside the block and log the result. What happens and why?

function main() {
  let x = 5;
}
x = 6;
console.log(main());

// 5. Write a JavaScript program to swap the values of two variables `a` and `b`. Initially, `a` should be `1` and `b` should be `2`. After swapping, `a` should be `2` and `b` should be `1`. Log the values before and after swapping.

var a = 1;
var b = 2;

var c = a;
a = b;
b = c;

console.log(a, b);
var a = 3;
var b = 10;

a = a + b;
b = a - b;
a = a - b;

console.log(a, b);

// 6. Write a JavaScript program to declare a variable `message` and assign it a value based on the current hour of the day. If the hour is less than 12, `message` should be `"Good morning!"`, otherwise it should be `"Good afternoon!"`. Log the `message` variable.

var message = 16.28;
if (message <= 12) {
  console.log("Good Morning!");
} else {
  console.log("Good Evening!");
}

// 7. Write a JavaScript program to declare an array of numbers `[1, 2, 3, 4, 5]` and calculate the average of these numbers. Store the average in a variable called `average` and log it to the console.

var arr = [1, 2, 3, 4, 5];
var sum = 0;
var avg;

for (let a = 0; a < arr.length; a++) {
  sum += arr[a];
}
avg = sum / arr.length;
console.log(avg);

// 8. Write a JavaScript program to declare a variable `isEven` and set its value based on whether a number `n` is even. For example, if `n` is `4`, `isEven` should be `true`. Log the value of `isEven`.

var number = 2;
var isEven = 2;

if (number % isEven == 0) {
  isEven = true;
  console.log(isEven);
} else {
  isEven = false;
  console.log(isEven);
}

// 9. Write a JavaScript program to declare a variable `user` as an object with properties `name` and `age`. Assign the values `"Alice"` and `25` to these properties, respectively. Then, log the `user` object to the console.

var user = {
  name: "Alice",
  age: 25,
};
console.log(user);

// 10. Write a JavaScript program to declare a variable `counter` and initialize it to `0`. Create a function `increment` that increases the value of `counter` by `1` each time it is called. Call the `increment` function three times and log the value of `counter` after each call.

var counter = 1;
function increment() {
  counter = counter + 1;
  return counter;
}

console.log(increment());
