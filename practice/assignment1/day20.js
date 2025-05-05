// Using clearInterval
// https://chatgpt.com/share/3746de1a-19bd-4b47-81fd-aed531ffae79

// Q1. Write a function that starts an interval using setInterval and stops it after a specified duration using clearInterval.

function printName() {
  var i = 0;
  var intervalId = setInterval(() => {
    console.log(`Rajeev`);

    i++;
    if (i >= 5) {
      clearInterval(intervalId);
    }
  }, 1000);
}

printName();

// Q2. Create a function that uses setInterval to log a message every second and stops logging after 10 seconds using clearInterval.

function greet(name) {
  console.log(`Hello ${name} Good Morning!`);
}

var intervalId = setInterval(() => {
  greet("Chamcham");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

// Q3. Implement a function that starts an animation using setInterval and stops the animation when a certain condition is met using clearInterval.

function animateElements(element) {
  let i = 0;
  var intervalId = setInterval(() => {
    console.log(`${element} Enimation Start`);

    i++;
    if (i >= 2) {
      clearInterval(intervalId);
    }
  }, 1000);
}

animateElements("Input");

// Q4. Write a function that starts a countdown timer using setInterval and clears the interval when the countdown reaches zero using clearInterval.

function timer() {
  let i = 20;

  var intervalId = setInterval(() => {
    console.log(`${i--}`);

    if (i == 0) {
      clearInterval(intervalId);
    }
  }, 1000);
}

timer();

// Q5. Create a function that uses setInterval to update the time on a clock and stops updating after a specified time using clearInterval.

function updateTime() {
  const intervalId = setInterval(() => {
    const time = new Date();

    const hours = String(time.getHours()).padStart(2, "0");
    const minutes = String(time.getMinutes()).padStart(2, "0");
    const seconds = String(time.getSeconds()).padStart(2, "0");

    const currentTime = `${hours}:${minutes}:${seconds}`;
    console.log(currentTime);

    if (currentTime === "09:13:10") {
      clearInterval(intervalId);
    }
  }, 1000);
}

updateTime();

// Q6. Implement a function that starts a repeated task using setInterval and stops it when a condition is met using clearInterval.

function executeTask(userDataArray = []) {
  let i = 0;

  function logUserData(userData, intervalId) {
    console.log(userData);
    i += 1;

    if (i === 2) {
      clearInterval(intervalId);
      i = 0;
    }
  }

  let currentIndex = 0;

  const intervalId = setInterval(() => {
    if (currentIndex < userDataArray.length) {
      logUserData(userDataArray[currentIndex], intervalId);
      currentIndex += 1;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);
}

const userOne = {
  name: "Rajeev",
  role: "Developer",
  company: "Google",
  id: "GOO3374-IND",
  address: {
    home: "Begusarai",
    dist: "Begusarai",
    pin: 851101,
  },
  contact: 878941945,
};

const userTwo = {
  name: "Amit",
  role: "Designer",
  company: "Facebook",
  id: "FB1234-USA",
  address: {
    home: "San Francisco",
    dist: "San Francisco",
    pin: 94101,
  },
  contact: 1234567890,
};

executeTask([userOne, userTwo]);

// Q7. Write a function that starts an interval to fetch data from an API and clears the interval after receiving the data using clearInterval.

async function getData() {
  var data = {};
  let i = 0;
  try {
    var fetchApi = await fetch(
      "https://dummy.restapiexample.com/api/v1/employees"
    );
    data = await fetchApi.json();
  } catch (error) {
    console.log(`error`);
  }

  var intervalId = setInterval(() => {
    console.log(`${JSON.stringify(data, null, 2)}`);
    i++;
    if (i === 2) {
      clearInterval(intervalId);
    }
  }, 1000);
}

getData();

// Q8. Create a function that uses setInterval to repeatedly execute a task and stops the interval when a condition is met using clearInterval.

function repeatTask() {
  let i = 0;
  var intervalId = setInterval(() => {
    console.log(`Rajeev`);

    i++;
    if (i === 2) {
      clearInterval(intervalId);
    }
  }, 1000);
}

repeatTask();

// Q9. Implement a function that uses setInterval to animate an element and clears the interval when the animation is complete using clearInterval.

function animation(element) {
  let i = 0;
  var intervalId = setInterval(() => {
    console.log(`${element} Enimation Start`);

    i++;
    if (i >= 2) {
      clearInterval(intervalId);
    }
  }, 1000);
}

animation("Input");

// Q10. Write a function that starts a setInterval to log progress and stops logging when the progress is complete using clearInterval.

function trackProgress() {
  let progress = 0;

  let intervalId = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 1;

    if (progress > 100) {
      progress = 100;
    }

    process.stdout.write(`Progress: ${progress}%\r`);

    if (progress === 100) {
      clearInterval(intervalId);
      console.log("\nProgress complete!");
    }
  }, 1000);
}

trackProgress();
