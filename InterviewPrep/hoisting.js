/*Hoisting in JavaScript is a behavior where variable and function declarations
 are moved to the top of their scope before code execution. This allows us to use
 variables and functions before they are declared in the code.
 However, it's important to note that only declarations are hoisted, not initializations or assignments.
*/

console.log(myVar); //undefined
var myVar = 10;
console.log(myVar);

// console.log(myLet); //ReferenceError
let myLet = 20;
console.log(myLet);

// console.log(myConst); //ReferenceError
const myConst = 30;
console.log(myConst);

myFunction(); // Output: "Hello, world!"

function myFunction() {
  console.log("Hello, world!");
}

/*

Function expressions, however, are not hoisted in the same way. 
If you try to call a function expression & arrow function before it is assigned, you will get a TypeError.
*/

// myFunction2(); //TypeError
var myFunction2 = function () {
  console.log(`Learning JavaScript`);
};

// greeting(); //TypeError
var greeting = () => {
  console.log(`Hello buddy`);
};
