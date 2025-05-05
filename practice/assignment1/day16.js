// Write a function that merges two arrays and prints the result. Use the call method to apply the merging function to different sets of arrays.

var arr1 = [2, 5, 4, 1];
var arr2 = [3, 6, 4, 1];

function mergeArray(arrParam1, arrParam2) {
  var mergedArray = arrParam1.concat(arrParam2);
  console.log(mergedArray);
}

mergeArray.call(this, arr1, arr2);

// Create a function that calculates the area of a rectangle given its width and height. Use the call method to invoke this function with different rectangle objects.

var rectangle1 = {
  height: 10,
  width: 5,
};

var rectangle2 = {
  height: 5,
  width: 12,
};

function calculates(heightParam, widthParam) {
  console.log(`Area ${heightParam * widthParam}`);
}

calculates.call(this, rectangle1.height, rectangle2.width);

// Implement a function that prints the full name of a person object. Use the call method to invoke this function on an array of different person objects.

var person1 = {
  name: "Rajeev Kumar",
  age: 24,
};

var person2 = {
  name: "Harsh Kumar",
  age: 18,
};

function prints() {
  console.log(`Data ${this.name} ${this.age}`);
}

prints.call(person2);

// Write a function that updates the properties of an object. Use the call method to update different objects with new values.

function updateProperties(newProperties) {
  for (let key in newProperties) {
    if (newProperties.hasOwnProperty(key)) {
      this[key] = newProperties[key];
    }
  }
}

var person1 = {
  name: "Alice",
  age: 25,
  city: "New York",
};

var person2 = {
  name: "Bob",
  age: 30,
  city: "San Francisco",
};

var newProperties1 = {
  age: 26,
  city: "Los Angeles",
};

var newProperties2 = {
  name: "Robert",
  city: "Seattle",
};

updateProperties.call(person1, newProperties1);
console.log(person1);

updateProperties.call(person2, newProperties2);
console.log(person2);

// Create a constructor function for a Car object that has a method to print its details. Use the call method to create and print details of different Car objects.

class Car {
  constructor(_color, _brand) {
    this.color = _color;
    this.brand = _brand;
  }
}
getDetails = function () {
  console.log(`${this.color} ${this.brand} `);
};

getDetails.call(new Car("Red", "OKCU"));

// Apply Method

// Write a function that calculates the sum of an array of numbers. Use the apply method to pass different arrays to this function.

var arr1 = [1, 2, 5, 4, 8, 7];
var arr2 = [1, 2, 12, 4, 8, 7];

function sum(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
}

console.log(sum.apply(null, [arr1]));
console.log(sum.apply(null, [arr2]));

// Create a function that finds the maximum number in an array. Use the apply method to find the maximum in different arrays.

function maximum(arr) {
  return Math.max.apply(null, arr);
}

console.log(maximum(arr1));
console.log(maximum(arr2));

// Implement a function that concatenates an array of strings. Use the apply method to concatenate different arrays of strings.

var strArr1 = ["A", "B", "C"];
var strArr2 = ["D", "E", "T"];

function Concat() {
  return Array.prototype.concat.apply([], arguments);
}

console.log(Concat(strArr1, strArr2));

// Write a function that multiplies each element of an array by a given multiplier. Use the apply method to apply this function to different arrays and multipliers.

var arr = [2, 1, 5, 4];
var arr2 = [3, 1, 5, 4];

function multiplies(param) {
  var multiplier = [];
  for (let element of param) {
    multiplier.push(element * 2);
  }
  return multiplier;
}

console.log(multiplies.apply(null, [arr]));
console.log(multiplies.apply(null, [arr2]));

// Create a function that extracts a subset of elements from an array based on their indices. Use the apply method to extract subsets from different arrays.

function extractSubset(array, indices) {
  return indices.map((index) => array[index]);
}

var arr1 = [1, 2, 3, 4, 5, 6];
var arr2 = ["a", "b", "c", "d", "e", "f"];

var indices1 = [0, 2, 4];
var indices2 = [1, 3, 5];

console.log(extractSubset.apply(null, [arr1, indices1]));
console.log(extractSubset.apply(null, [arr2, indices2]));

// Bind Method

// Write a function that logs the current date and time. Use the bind method to create a new function that logs the date and time in a specific time zone.

function getDateTime(timeZone) {
  var date = new Date();
  var options = {
    timeZone: timeZone,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  var dateTimeFormat = new Intl.DateTimeFormat("en-US", options);
  var [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
    ,
    { value: hour },
    ,
    { value: minute },
    ,
    { value: second },
  ] = dateTimeFormat.formatToParts(date);

  console.log(
    `Date: ${day}/${month}/${year} Time: ${hour}:${minute}:${second} (${timeZone})`
  );
}

var myDateFunction1 = getDateTime.bind(null, "America/New_York");
var myDateFunction2 = getDateTime.bind(null, "Asia/Kolkata");

myDateFunction1();
myDateFunction2();

// Create a function that calculates the total price of items in a shopping cart. Use the bind method to bind different discount rates to this function.

var items = {
  soap: 20,
  oil: 100,
  shampoo: 5,
};

function calculateItems() {
  var total = 0;
  for (let key in this) {
    if (this.hasOwnProperty(key)) {
      total += this[key];
    }
  }
  return total;
}

var myItem = calculateItems.bind(items);
console.log(myItem());

// Implement a function that sends a greeting message. Use the bind method to create personalized greeting functions for different users.

var user1 = "Rajeev";
var user2 = "ChamchamG";

function greeting() {
  console.log(`Hey ${this} Good Morning!`);
}

var greetingMsg1 = greeting.bind(user1);
var greetingMsg2 = greeting.bind(user2);
greetingMsg1();
greetingMsg2();

// Write a function that filters an array of numbers based on a given condition. Use the bind method to create new functions with specific conditions for filtering.

var array = [2, 6, 4, 5, 3, 8];

function filters() {
  var filterArray = [];
  for (let element of this) {
    if (element % 2 == 0) {
      filterArray.push(element);
    }
  }
  return filterArray;
}

var f1 = filters.bind(array);
console.log(f1());

// Create a function that formats a date object into a readable string. Use the bind method to create new functions that format dates in different styles.

function formatDate(date, format) {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  switch (format) {
    case "long":
      return date.toLocaleDateString("en-US", options);
    case "short":
      return date.toLocaleDateString("en-US", { ...options, hour12: true });
    case "time":
      return date.toLocaleTimeString("en-US");
    default:
      return date.toString();
  }
}

var now = new Date();

var longFormat = formatDate.bind(null, now, "long");
var shortFormat = formatDate.bind(null, now, "short");
var timeFormat = formatDate.bind(null, now, "time");

console.log(longFormat());
console.log(shortFormat());
console.log(timeFormat());
