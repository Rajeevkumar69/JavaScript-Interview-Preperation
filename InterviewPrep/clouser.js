/*
A closure is the combination of a function bundled together (enclosed) with references to its 
surrounding state (the lexical environment). In other words, a closure gives a function access
to its outer scope. 
In JavaScript, closures are created every time a function is created, at function creation time.
*/

function greeting(name) {
  function welComeUser() {
    console.log(`Hello ${name}, Welcome to the team`);
  }

  return welComeUser;
}

let userName = greeting("Rajeev");
userName();

function counter(num1, num2) {
  function sum() {
    return num1 + num2;
  }

  function subtract() {
    return num1 - num2;
  }

  function multiply() {
    return num1 * num2;
  }

  function division() {
    return num1 / num2;
  }

  return {
    sum,
    subtract,
    multiply,
    division,
  };
}

let value = counter(10, 5);
console.log(value.sum());
console.log(value.subtract());
console.log(value.multiply());
console.log(value.division());

let value2 = counter(50, 23);
console.log(value.division());

// Practical Use Of Clouser
const message = document.getElementById("message");
const btn = document.getElementById("btn");

function makeTextColorChanger(color) {
  function changeColor() {
    message.style.color = color;
  }

  return changeColor;
}

let red = makeTextColorChanger("red");
let green = makeTextColorChanger("green");
let black = makeTextColorChanger("black");

// btn.addEventListener("click", red);
btn.addEventListener("click", green);
// btn.addEventListener("click", black);
