// setTimeout Programming Questions

// Q1. Create a function that uses setTimeout to log a message after a specified delay.

function greet(nameParam) {
  console.log(`Good Morning ${nameParam}`);
}

setTimeout(() => {
  greet("Rajeev");
}, 1000);

// Q2. Write a function that uses setTimeout to execute a callback function after a given delay.

function executeAfterDelay(callback, delay) {
  setTimeout(callback, delay);
}

function add(a, b) {
  return a + b;
}

executeAfterDelay(() => {
  console.log(add(10, 20));
}, 1000);

// Q3. Implement a function that repeatedly calls a function with increasing delays using setTimeout.

function printName() {
  userName("Rajeev");
}

function userName(name) {
  console.log(name);
}

function callWithIncreasingDelays(func, initialDelay, increment, maxCalls) {
  let delay = initialDelay;

  for (let i = 0; i < maxCalls; i++) {
    setTimeout(func, delay);
    delay += increment;
  }
}

callWithIncreasingDelays(printName, 1000, 1000, 5);

// Q4. Create a function that uses setTimeout to simulate a countdown timer that logs the remaining time every second.

function countdown(seconds) {
  function timer(current) {
    if (current > 0) {
      console.log(current);
      setTimeout(() => timer(current - 1), 1000);
    }
  }

  timer(seconds);
}

countdown(5);

// Q5. Write a function that uses setTimeout to delay the execution of a series of asynchronous tasks.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function executeTasksWithDelay(tasks, delayMs) {
  for (const task of tasks) {
    await task();
    await delay(delayMs);
  }
}

function task1() {
  return new Promise((resolve) => {
    console.log("Task 1");
    resolve();
  });
}

function task2() {
  return new Promise((resolve) => {
    console.log("Task 2");
    resolve();
  });
}

function task3() {
  return new Promise((resolve) => {
    console.log("Task 3");
    resolve();
  });
}

var tasks = [task1, task2, task3];
executeTasksWithDelay(tasks, 1000);

// Q6. Implement a function that uses setTimeout to schedule multiple tasks to be executed at different times.

function scheduleTasks(tasks) {
  tasks.forEach(({ task, delay }) => {
    setTimeout(task, delay);
  });
}

function taskOne() {
  console.log("Task 1");
}

function taskTwo() {
  console.log("Task 2");
}

function taskThree() {
  console.log("Task 3");
}

var tasks = [
  { task: taskOne, delay: 1000 },
  { task: taskTwo, delay: 2000 },
  { task: taskThree, delay: 3000 },
];

scheduleTasks(tasks);

// Q9. Implement a function that uses setTimeout to create a delay before retrying a failed operation.

function retryOperation(operation, retries, delay) {
  function attempt() {
    operation()
      .then((result) => {
        console.log(`Operation succeeded: ${result}`);
      })
      .catch((error) => {
        if (retries > 0) {
          console.log(
            `Operation failed. Retrying... (${retries} retries left)`
          );
          setTimeout(attempt, delay);
          retries--;
        } else {
          console.error(`Operation failed after all retries: ${error}`);
        }
      });
  }

  attempt();
}

function performOperation() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    if (success) {
      resolve("Result data");
    } else {
      reject("Error: Operation failed");
    }
  });
}

retryOperation(performOperation, 5, 1000);

// Q10. Create a function that uses setTimeout to measure the time taken to execute a block of code.

function measureExecutionTime(codeBlock) {
  const startTime = Date.now();

  codeBlock();

  const endTime = Date.now();
  const elapsedTime = endTime - startTime;

  console.log(`Execution time: ${elapsedTime} milliseconds`);
}

function exampleCodeBlock() {
  let sum = 0;
  for (let i = 0; i < 100000000; i++) {
    sum += i;
  }
  console.log(`Sum: ${sum}`);
}

measureExecutionTime(exampleCodeBlock);
