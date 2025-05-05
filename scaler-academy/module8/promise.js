// Promise in JavaScript

// A Promise in JavaScript is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value.

// Example: 1
var myPromise = new Promise((resolve, reject) => {
  // Define two variables a and b
  let a = 3;
  let b = 3;

  // Check if the values of a and b are equal
  if (a === b) {
    // If equal, resolve the promise with the message "Value Matched"
    resolve("Value Matched");
  } else {
    // If not equal, reject the promise with the message "Value does not match"
    reject("Value does not match");
  }
});

// Log the promise object
console.log(myPromise);

// Handle the resolved state of the promise
myPromise.then((result) => {
  // Log the result if the promise is resolved
  console.log(result);
});

// Handle the rejected state of the promise
myPromise.catch((result) => {
  // Log the result if the promise is rejected
  console.log(result);
});

// Example: 2

var simplePromise = new Promise((resolve, reject) => {
  let x = 5;
  let y = 10;

  // Check if the values of x and y are equal
  if (x === y) {
    // If equal, resolve the promise with the message "Values are equal"
    resolve("Values are equal");
  } else {
    // If not equal, reject the promise with the message "Values are not equal"
    reject("Values are not equal");
  }
});

// Log the promise object
console.log(simplePromise);

// Handle the resolved state of the promise
simplePromise.then((result) => {
  // Log the result if the promise is resolved
  console.log(result);
});

// Handle the rejected state of the promise
simplePromise.catch((result) => {
  // Log the result if the promise is rejected
  console.log(result);
});

// Example: 3

// Function to simulate an asynchronous operation
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulate a network request with setTimeout
    setTimeout(() => {
      // Mock data and response
      const data = { id: 1, name: "John Doe", age: 30 };
      const success = true; // Simulate a successful response

      // Check if the request was successful
      if (success) {
        // If successful, resolve the promise with the mock data
        resolve(data);
      } else {
        // If not successful, reject the promise with an error message
        reject("Failed to fetch data");
      }
    }, 2000); // Simulate a 2-second network delay
  });
}

// Call the fetchData function and handle the promise

fetchData("https://api.example.com/user")
  .then((data) => {
    // Handle the resolved state and log the fetched data
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    // Handle the rejected state and log the error message
    console.error("Error:", error);
  });

// Chaining Promises

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = { id: userId, name: "Jane Doe" };
      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

function getUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const posts = [
        { postId: 1, content: "Post 1" },
        { postId: 2, content: "Post 2" },
      ];
      if (posts.length > 0) {
        resolve(posts);
      } else {
        reject("No posts found");
      }
    }, 1000);
  });
}

// Using Promise chaining to handle multiple asynchronous operations sequentially

getUserData(1)
  .then((user) => {
    console.log("User fetched:", user);
    return getUserPosts(user.id); // Return another promise to fetch user posts
  })
  .then((posts) => {
    console.log("User posts fetched:", posts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
