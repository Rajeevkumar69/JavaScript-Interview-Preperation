const fs = require("fs/promises");
const path = require("path");
// Async Programming Questions

// Documentation :- https://dmitripavlutin.com/javascript-fetch-async-await/

// Q1. Write a function that fetches data from a given API URL and logs the data to the console using async/await.

async function fetchData() {
  try {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    console.log(`Data is: ${JSON.stringify(data, null, 2)}`);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

fetchData();

// Q2. Create a function that performs a sequence of asynchronous tasks one after another and handles errors using try/catch blocks.
console.log(`Start`);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function performAsyncTasks() {
  try {
    console.log("Fetching data...");
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    console.log("Data fetched:", data);

    console.log("Logging data...");
    console.log(`Employee Data: ${JSON.stringify(data, null, 2)}`);

    console.log("Waiting for 1 second...");
    await delay(1000);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

performAsyncTasks();

// Q3. Implement a function that waits for multiple promises to resolve using Promise.all and async/await, then logs the combined results.

async function fetchDataFromApis() {
  const apiUrls = [
    "https://dummy.restapiexample.com/api/v1/employees",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
  ];

  try {
    const fetchPromises = apiUrls.map((url) => {
      fetch(url).then((response) => {
        response.json();
      });
    });

    const results = await Promise.all(fetchPromises);

    console.log("Combined Results:", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

fetchDataFromApis();

// Q4. Write a function that performs an asynchronous operation and times out if the operation takes longer than a specified duration using async/await.

async function checkTimesOut() {
  try {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = JSON.stringify(response, null, 2);
    setTimeout(() => {
      console.log(`Data ${data}`);
    }, 1000);
  } catch (error) {
    console.log(`Error`);
  }
}

checkTimesOut();

// Q5. Create an async function that reads the contents of a file, processes the data, and writes the result to another file.

async function processFile(inputFilePath, outputFilePath) {
  try {
    const fileContents = await fs.readFile(inputFilePath, "utf8");
    console.log(`File Contents: ${fileContents}`);

    const processedData = fileContents.toUpperCase();

    await fs.writeFile(outputFilePath, processedData);
    console.log(`Processed data written to ${outputFilePath}`);
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

const inputFilePath = path.join(__dirname, "input.txt");
const outputFilePath = path.join(__dirname, "output.txt");
processFile(inputFilePath, outputFilePath);

// Q6. Implement a function that makes multiple asynchronous API calls and processes the results as they are received using async/await.

async function apisCall() {
  const apiUrls = [
    "https://dummy.restapiexample.com/api/v1/employees",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
  ];

  try {
    const fetchPromises = apiUrls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    });

    const results = await Promise.all(fetchPromises);

    results.forEach((data, index) => {
      console.log(
        `Data from API ${index + 1}: ${JSON.stringify(data, null, 2)}`
      );
    });
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

apisCall();

// Q7. Write a function that simulates a delay using async/await and logs a message after the delay.

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchDataWithDelay() {
  try {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    console.log(`Data: ${JSON.stringify(data, null, 2)}`);

    await delay(2000);

    console.log("This message is logged after a delay of 2 seconds.");
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

fetchDataWithDelay();

// Q8. Create a function that performs an asynchronous operation and retries a specified number of times if it fails using async/await.

async function fetchDataWithRetries(url, retries) {
  let attempt = 0;

  while (attempt < retries) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log(`Data: ${JSON.stringify(data, null, 2)}`);

      return data;
    } catch (error) {
      attempt++;
      console.error(`Attempt ${attempt} failed: ${error.message}`);

      if (attempt === retries) {
        console.error(`All ${retries} attempts failed.`);
        throw error;
      }

      await delay(1000);
    }
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function q8() {
  const url = "https://dummy.restapiexample.com/api/v1/employees";
  const retries = 3;

  try {
    await fetchDataWithRetries(url, retries);
  } catch (error) {
    console.error(
      `Operation failed after ${retries} retries: ${error.message}`
    );
  }
}

q8();

// Q9. Implement a function that fetches data from multiple APIs in parallel and combines the results into a single response using async/await.

async function fetchDataFromMultipleApis() {
  const apiUrls = [
    "https://dummy.restapiexample.com/api/v1/employees",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
  ];

  try {
    const fetchPromises = apiUrls.map(async (url) => {
      const response = await fetch(url);
      return response.json();
    });

    const results = await Promise.all(fetchPromises);

    console.log("Combined Results:", JSON.stringify(results, null, 2));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchDataFromMultipleApis();

// Q10. Write a function that performs an asynchronous task and uses the await keyword to pause execution until the task is complete, then logs the result.

async function performTask() {
  try {
    const response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    const data = await response.json();
    console.log(`Data- ${await JSON.stringify(data, null, 2)}`);
    console.log(`Done!!!`);
  } catch (error) {
    console.log(`Error`);
  }
}
performTask();
