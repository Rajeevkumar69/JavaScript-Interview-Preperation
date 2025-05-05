// setTimeout
// The setTimeout function is used to execute a piece of code (a function) after a specified amount of time has passed (in milliseconds).

console.log(`Before`);

function greetUser(userName) {
  console.log(`Hey ${userName} Welcome!`);
}

setTimeout(() => {
  greetUser("Rajeev");
}, 5000); // The greetUser function will be executed after  (5 seconds).

console.log(`After`);

// setInterval
// The setInterval function is used to repeatedly execute a piece of code (a function) at specified intervals (in milliseconds).

function displayMyName(myName) {
  console.log(`My name is: ${myName}`);
}

let intervalId = setInterval(() => {
  displayMyName("Rajeev");
}, 1000); // The displayMyName function will be executed every  (1 second) infinite.

setTimeout(() => {
  clearInterval(intervalId);
}, 5000); // The clearInterval function is used to stop the setInterval after  (5 seconds).

// setTimeout:- setTimeout is a function that allows you to execute a piece of code (a function) after a specified amount of time (in milliseconds). It runs the code only once.

// Example: In the code above, setTimeout is used to execute the greetUser function after 5 seconds (5000 milliseconds).

// setInterval:- setInterval is a function that allows you to repeatedly execute a piece of code (a function) at specified intervals (in milliseconds). It keeps running the code until it is stopped with clearInterval.
// Example: In the code above, setInterval is used to execute the displayMyName function every second (1000 milliseconds).

// clearInterval:- clearInterval is a function used to stop the execution of a function that was started by setInterval.

// Example: In the code above, clearInterval is used to stop the repeated execution of the displayMyName function after 5 seconds (5000 milliseconds).
