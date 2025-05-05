// setInterval Programming Questions

// Q1. Create a function that uses setInterval to log a message every second.

function greet(name) {
  console.log(`Hello ${name} Good Morning!`);
}

setInterval(() => {
  greet("Rajeev");
}, 1000);

// Q2. Write a function that uses setInterval to update the time on a digital clock displayed on a webpage.

function updateClock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  const currentTime = `${hours}:${minutes}:${seconds}`;
  console.clear();
  console.log(currentTime);
}

setInterval(updateClock, 1000);

// Q3. Implement a function that uses setInterval to animate an element by changing its position every frame.

function animateElement() {
  let element = { style: { left: "0px" } };
  let position = 0;

  const intervalId = setInterval(() => {
    position += 1;
    element.style.left = position + "px";

    console.log("Element position:", element.style.left);
  }, 16);
}

animateElement();

// Q4. Create a function that uses setInterval to simulate a countdown timer that updates the remaining time every second.

function countdown(seconds) {
  let remainingTime = seconds;

  const intervalId = setInterval(() => {
    if (remainingTime > 0) {
      console.log(remainingTime);
      remainingTime -= 1;
    } else {
      console.log(0);
      clearInterval(intervalId);
    }
  }, 1000);
}

countdown(5);

// Q5. Write a function that uses setInterval to fetch data from an API at regular intervals and log the response.

async function getData() {
  try {
    let response = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );

    let data = await response.json();
    setInterval(() => {
      console.log(`Data:- ${JSON.stringify(data, null, 2)}`);
    }, 1000);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

getData();

// Q6. Implement a function that uses setInterval to check the status of a long-running operation and log the progress.

function checkOperationStatus() {
  let progress = 0;
  const totalProgress = 100;

  const intervalId = setInterval(() => {
    progress += 10;
    console.log(`Progress: ${progress}%`);

    if (progress >= totalProgress) {
      console.log("Operation complete.");
      clearInterval(intervalId);
    }
  }, 1000);
}

checkOperationStatus();

// Q7. Create a function that uses setInterval to repeatedly execute a task until a condition is met, then clear the interval.

function executeTask() {
  let name = "Rajeev";
  let i = 0;

  let intervalId = setInterval(() => {
    console.log(name);

    i++;

    if (i >= 10) {
      console.log("Operation Complete");
      clearInterval(intervalId);
    }
  }, 1000);
}

executeTask();

// Q8. Write a function that uses setInterval to simulate a blinking text effect by toggling a boolean flag.

function blinkText() {
  let text = true;
  console.log(text);

  let intervalId = setInterval(() => {
    if (text) {
      text = false;
      console.log(text);
    } else {
      text = true;
      console.log(text);
    }
  }, 1000);
}

blinkText();

// Q9. Implement a function that uses setInterval to create a simple stopwatch that starts, stops, and resets.

function stopwatch() {
  let startTime = new Date().getTime();
  let running = false;
  let intervalId;

  function formatTime(ms) {
    let hours = Math.floor(ms / 3600000);
    let minutes = Math.floor((ms % 3600000) / 60000);
    let seconds = Math.floor((ms % 60000) / 1000);

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(seconds).padStart(2, "0")}`;
  }

  function startStopwatch() {
    if (!running) {
      startTime = new Date().getTime();
      intervalId = setInterval(updateStopwatch, 1000);
      running = true;
      console.log("Stopwatch started.");
    } else {
      clearInterval(intervalId);
      running = false;
      console.log("Stopwatch stopped.");
    }
  }

  function resetStopwatch() {
    clearInterval(intervalId);
    running = false;
    console.log("Stopwatch reset.");
  }

  function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    console.log(formatTime(elapsedTime));
  }

  startStopwatch();
  setTimeout(startStopwatch, 3000);
  setTimeout(resetStopwatch, 6000);
}

stopwatch();

// // Q10. Create a function that uses setInterval to continuously monitor the position of the mouse cursor and log the coordinates.

// function monitorMousePosition() {
//   function logMouseCoordinates(x, y) {
//     process.stdout.write(`Mouse coordinates: (${x}, ${y})\n`);
//   }

//   process.stdin.on("data", (data) => {
//     const { x, y } = JSON.parse(data.toString());

//     logMouseCoordinates(x, y);
//   });

//   return function stopMonitoring() {
//     process.stdin.removeAllListeners("data");
//     console.log("Monitoring stopped.");
//   };
// }

// let stopMonitoring = monitorMousePosition();

// setTimeout(() => {
//   stopMonitoring();
// }, 10000);
