// In JavaScript, a callback function is indeed a function that is passed into another function as an argument and can be executed at a later time. Since functions in JavaScript are first-class objects, they can be assigned to variables, passed as arguments, and returned from other functions.

//  Benifits of using callback function

// 1. Asynchronous Programming
// Callbacks are crucial for handling asynchronous operations, such as reading files, making HTTP requests, or querying a database. By using a callback, you can specify what should happen once the asynchronous operation completes without blocking the execution of other code.

// 2. Modularity and Reusability
// Callbacks allow you to write more modular and reusable code. Instead of hardcoding the behavior within a function, you can pass different callbacks to achieve different behaviors with the same function.

// 3. Flexibility
// Callbacks provide flexibility in handling different situations and customizing functionality. They allow functions to accept behavior as parameters, making your code more adaptable and easier to extend.

function printFname(fname, cb) {
  console.log(fname);
  cb("Kumar");
}

printFname("Rajeev", printLname);

function printLname(lname) {
  console.log(lname);
}

const isEven = (n) => {
  return n % 2 == 0;
};

let printResult = (num, evenFun) => {
  const isNumEven = evenFun(num);
  console.log(`The number ${num} is an even number ${isNumEven} `);
};

printResult(12, isEven);
