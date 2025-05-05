// Questions on Promises in JavaScript

// Q1. Create a function `promiseAllSettled` that takes an array of promises and returns a promise that resolves when all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.

function promiseAllSettled(promises) {
  return new Promise((resolve) => {
    let results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completed += 1;
          if (completed === promises.length) {
            resolve(results);
          }
        });
    });
  });
}

async function promiseData() {
  let data = await promiseAllSettled([
    Promise.resolve("Success 1"),
    Promise.reject("Error 1"),
    Promise.resolve("Success 2"),
    Promise.reject("Error 2"),
  ]);
  console.log(data);
}

promiseData();

// Q2. Write a function `promiseRace` that mimics the behavior of `Promise.race`. It should take an array of promises and return a promise that resolves or rejects as soon as one of the promises in the array resolves or rejects.

function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}

const promise1 = new Promise((resolve, reject) =>
  setTimeout(resolve, 500, "one")
);
const promise2 = new Promise((resolve, reject) =>
  setTimeout(resolve, 100, "two")
);
const promise3 = new Promise((resolve, reject) =>
  setTimeout(reject, 300, "three")
);

promiseRace([promise1, promise2, promise3])
  .then((value) => console.log(`Resolved with value: ${value}`))
  .catch((error) => console.log(`Rejected with error: ${error}`));

// Q3. Implement a retry mechanism for a promise-returning function. Create a function `retryPromise` that takes a promise-returning function and a number of retries. It should retry the function until it either succeeds or the number of retries is exhausted.

function retryPromise(fn, retries) {
  return new Promise((resolve, reject) => {
    function attempt(n) {
      fn()
        .then(resolve)
        .catch((error) => {
          if (n === 0) {
            reject(error);
          } else {
            attempt(n - 1);
          }
        });
    }

    attempt(retries);
  });
}

function examplePromise() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      if (success) {
        resolve("Success!");
      } else {
        reject("Failure");
      }
    }, 1000);
  });
}

retryPromise(examplePromise, 3)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Q4. Create a function `promiseTimeout` that takes a promise and a timeout duration in milliseconds. If the promise does not resolve or reject within the specified timeout, the function should reject with a timeout error.

function promiseTimeout(promise, timeout) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new Error("Timeout"));
    }, timeout);

    promise
      .then((value) => {
        clearTimeout(timer);
        resolve(value);
      })
      .catch((error) => {
        clearTimeout(timer);
        reject(error);
      });
  });
}

const examplePromise = new Promise((resolve) =>
  setTimeout(() => resolve("Done"), 3000)
);
promiseTimeout(examplePromise, 2000).then(console.log).catch(console.error);

// Q5. Implement a function `promiseChain` that takes an array of promise-returning functions and executes them in sequence, passing the result of each function to the next function in the chain.

function promiseChain(functions) {
  return functions.reduce((prevPromise, currentFunction) => {
    return prevPromise.then(currentFunction);
  }, Promise.resolve());
}

function fn1() {
  Promise.resolve(result + " World");
}

function fn2() {
  Promise.resolve(result + "!");
}
promiseChain([() => Promise.resolve("Hello"), fn1, fn2]).then(console.log);

// Q6. Write a function `limitConcurrentPromises` that takes an array of promise-returning functions and a limit on the number of concurrent promises. The function should execute the promises while ensuring that no more than the specified number are running at the same time.

function limitConcurrentPromises(functions, limit) {
  let index = 0;
  let activePromises = 0;
  const results = [];

  return new Promise((resolve, reject) => {
    function next() {
      if (index >= functions.length && activePromises === 0) {
        return resolve(results);
      }

      while (activePromises < limit && index < functions.length) {
        activePromises++;
        const currentIndex = index++;
        functions[currentIndex]()
          .then((result) => {
            results[currentIndex] = result;
            activePromises--;
            next();
          })
          .catch(reject);
      }
    }

    next();
  });
}

const examplePromises = [
  () => new Promise((resolve) => setTimeout(() => resolve("First"), 3000)),
  () => new Promise((resolve) => setTimeout(() => resolve("Second"), 2000)),
  () => new Promise((resolve) => setTimeout(() => resolve("Third"), 1000)),
];
limitConcurrentPromises(examplePromises, 2).then(console.log);

// Q7. Create a function `promiseRetryWithBackoff` that retries a promise-returning function with exponential backoff. It should take a function, a maximum number of retries, and an initial delay, and it should double the delay with each retry.

function promiseRetryWithBackoff(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt(n, currentDelay) {
      fn()
        .then(resolve)
        .catch((error) => {
          if (n === 0) {
            reject(error);
          } else {
            setTimeout(() => attempt(n - 1, currentDelay * 2), currentDelay);
          }
        });
    }

    attempt(retries, delay);
  });
}

const exampleFn = () =>
  new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => (success ? resolve("Success") : reject("Failure")), 500);
  });
promiseRetryWithBackoff(exampleFn, 5, 1000)
  .then(console.log)
  .catch(console.error);

// Q8. Implement a `debouncePromise` function that debounces a promise-returning function. It should ensure that the function is only called once within a specified time period, and it should return a promise that resolves with the latest result.

function promiseRetryWithBackoff(fn, retries, delay) {
  return new Promise((resolve, reject) => {
    function attempt(n, currentDelay) {
      fn()
        .then(resolve)
        .catch((error) => {
          if (n === 0) {
            reject(error);
          } else {
            setTimeout(() => attempt(n - 1, currentDelay * 2), currentDelay);
          }
        });
    }

    attempt(retries, delay);
  });
}

function exampleFun() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
      success ? resolve("success") : reject("fail");
    }, 500);
  });
}

promiseRetryWithBackoff(exampleFun, 5, 1000)
  .then(console.log)
  .catch(console.error);

// Q9. Write a function `queuePromises` that takes an array of promise-returning functions and executes them one after another, ensuring that each function only starts after the previous one has resolved.

function queuePromises(functions) {
  return functions.reduce((promise, fn) => {
    return promise.then(fn);
  }, Promise.resolve());
}

const fn1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("First"), 1000));
const fn2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Second"), 1000));
const fn3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Third"), 1000));
queuePromises([fn1, fn2, fn3]).then(console.log);

// Q10. Create a function `promiseAllWithErrors` that takes an array of promises and returns a promise that resolves with an array of results. If any promise rejects, it should capture the error and include it in the array, allowing all promises to complete.

function promiseAllWithErrors(promises) {
  return Promise.all(
    promises.map((promise) => promise.catch((error) => ({ error })))
  );
}

const p1 = Promise.resolve("First");
const p2 = Promise.reject("Second error");
const p3 = Promise.resolve("Third");
promiseAllWithErrors([p1, p2, p3]).then(console.log);
