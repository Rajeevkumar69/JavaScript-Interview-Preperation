// Callback Function

// 1. Write a function that takes a callback and an array of numbers. The function should apply the callback to each element of the array and return the modified array.

function getModifiedArray(cb, array) {
  let modifiedArray = [];
  for (let element of array) {
    modifiedArray.push(cb(element));
  }
  return modifiedArray;
}

function callBackForArray(element) {
  return element * element;
}

var array = [2, 5, 4, 1];
console.log(getModifiedArray(callBackForArray, array));

// 2. Implement a function `filterArray` that takes an array and a callback as arguments. The callback should return true or false based on a condition. `filterArray` should return a new array with only the elements for which the callback returns true.

function filterArray(cb, arrayParam) {
  let modifiedArray = [];
  for (element of arrayParam) {
    if (cb(element)) {
      modifiedArray.push(element);
    }
  }
  return modifiedArray;
}

function callBackForFilterArray(element) {
  return element % 2 === 0;
}
console.log(filterArray(callBackForFilterArray, array));

// 3. Create a function `calculate` that takes two numbers and a callback as arguments. The callback should perform a mathematical operation on the numbers and return the result.

function calculate(numParam1, numParam2, cb) {
  return cb(numParam1, numParam2);
}

function sum(num1, num2) {
  return num1 + num2;
}
function sub(num1, num2) {
  return num1 - num2;
}
function mul(num1, num2) {
  return num1 * num2;
}
function division(num1, num2) {
  return num1 % num2;
}
console.log(calculate(2, 5, sum));
console.log(calculate(15, 10, sub));
console.log(calculate(2, 50, mul));
console.log(calculate(10, 50, division));

// 4. Write a function `getUserData` that takes a username and a callback. The callback should fetch user data based on the username and return it.

function getUserData(usernameParam, cb) {
  // Assume fetching user data here
  let userData = {
    username: usernameParam,
    email: `${usernameParam}@example.com`,
    role: "user",
  };
  return cb(userData);
}

function callBackForUserData(userData) {
  return userData;
}

console.log(getUserData("Chamcham G", callBackForUserData));

// 5. Implement a function `delay` that takes a callback and a delay time in milliseconds. The callback should be executed after the delay.

function delay(nameParam, callback) {
  setTimeout(() => {
    callback(`Hey! ${nameParam}, Happy Learning`);
  }, 1000);
}

function callBackForDelay(message) {
  console.log(message);
}

delay("ChamchamG", callBackForDelay);

// Higher Order Functions (HOF)

// 6. Write a function `compose` that takes multiple functions as arguments and returns a new function that applies each function from right to left.

function compose(...funcs) {
  return function (initialValue) {
    return funcs.reduceRight((value, func) => func(value), initialValue);
  };
}

var add = (x) => x + 1;
var multiply = (x) => x * 2;
var square = (x) => x * x;

var composedFunction = compose(add, multiply, square);

console.log(composedFunction(2));

// 7. Create a function `memoize` that takes a function as an argument and returns a memoized version of that function, caching its results.

var memoize = (fn) => {
  var cache = new Map();
  return (...args) => {
    var key = JSON.stringify(args);
    return cache.has(key)
      ? cache.get(key)
      : (cache.set(key, fn(...args)), cache.get(key));
  };
};

var slowFunction = (num) => {
  console.log("Computing...");
  return num * num;
};

var memoizedFunction = memoize(slowFunction);

console.log(memoizedFunction(5));
console.log(memoizedFunction(5));
console.log(memoizedFunction(6));
console.log(memoizedFunction(6));

// 8. Implement a function `curry` that takes a function and returns a curried version of it, allowing partial application of arguments.

// 9. Write a function `debounce` that takes a function and a delay time. The returned function should only execute the original function after the delay has passed without further calls.

function debounce(fn, delayTime) {
  let timer;
  return function (...args) {
    var context = this;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, args);
    }, delayTime);
  };
}

var logMessage = (message) => {
  console.log(message);
};

var debouncedLog = debounce(logMessage, 1000);

debouncedLog("Hello");
debouncedLog("Hello again");
setTimeout(() => debouncedLog("Hello after 500ms"), 500);
setTimeout(() => debouncedLog("Hello after 1500ms"), 1500);

// 10. Create a function `once` that takes a function and returns a new function that can only be called once.

function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}

function greet(name) {
  return `Hello, ${name}!`;
}

const greetOnce = once(greet);

console.log(greetOnce("Alice"));
console.log(greetOnce("Bob"));
console.log(greetOnce("Charlie"));
