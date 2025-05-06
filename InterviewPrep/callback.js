/*

HOF ->  A higher order function is that function which take another function as an argunment & return a function as result

*/

function add(num1, num2, callback) {
  let result = num1 + num2;
  callback(result);
}

function printResult(data) {
  console.log(data);
}

add(10, 2, printResult);

// Real world use case example
function fetchAPI(url, callback) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      return response.json();
    })
    .then((data) => {
      callback(null, data);
    })
    .catch((error) => {
      callback(error, null);
    });
}

function handleResponse(error, data) {
  if (error) {
    console.error("Error fetching data:", error);
  } else {
    console.log("Data fetched successfully:", data);
  }
}

const apiUrl = "https://rickandmortyapi.com/api/character";
fetchAPI(apiUrl, handleResponse);
