//     ***************filter()
// 1. Write a function that takes an array of numbers and returns a new array containing only the prime numbers.

var array = [2, 4, 7, 8, 1, 2, 4, 5, 6, 9, 7];

var evenNum = array.filter((element) => {
  return element % 2 == 0;
});

console.log(evenNum);

var isPrime = (number) => number % 2 != 0;

var getPrime = array.filter(isPrime);
console.log(getPrime);

// 2. Given an array of strings, filter out the strings that have a length less than 5 characters.

var strArray = ["ChamchamG", "Ansh", "Bob", "Hema", "Harsh"];

var getName = (name) => name.length < 5;

var getStr = strArray.filter(getName);

console.log(getStr);

// 3. Write a function that filters out all elements from an array of objects where the property `age` is greater than 30.

var object = [
  {
    name: "Sam",
    age: 29,
  },
  {
    name: "Bob",
    age: 32,
  },
];

var returnAge = (param) => {
  return param.age > 30;
};

var getAgeObj = object.filter(returnAge);

console.log(getAgeObj);

// 4. Given an array of arrays, filter out all sub-arrays that contain more than 3 elements.

var arrayOfArrays = [
  [1, 2, 3, 5],
  [4, 5, 6],
  [7, 8, 9],
  [7, 8, 9, 1],
];

var getElement = (element) => {
  return element.length > 3;
};

var getArray = arrayOfArrays.filter(getElement);
console.log(getArray);

// 5. Create a function that takes an array of dates and filters out all dates that are in the past.

var dates = ["10/05/2012", "05/12/2024", "06/10/2024"];

var past = (dateString) => {
  var inputDate = new Date(dateString);
  var today = new Date();

  inputDate.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  return inputDate >= today;
};

var getDateArray = dates.filter(past);
console.log(getDateArray);

//                 **************find()

// 1. Write a function that finds the first palindrome string in an array of strings.

var strArr = ["Smt", "Bob", "SMS", "Msg"];

var getpalindrome = strArr.find((str) => {
  str = str.replace(/[^a-zA-Z0-9]/, "").toLowerCase();

  var reversed = str.split("").reverse().join("");

  return str === reversed;
});

console.log(getpalindrome);

// 2. Given an array of objects, find the first object where the property `isActive` is `true`.

var client = [
  {
    name: "Alice",
    role: "Client",
    isActive: false,
  },
  {
    name: "Alt",
    role: "Client",
    isActive: true,
  },
];

var getTrueObj = client.find((object) => {
  return object.isActive === true;
});

console.log(getTrueObj);

// 3. Write a function to find the first negative number in a nested array.

var nestedArray = [
  [1, 2, 4],
  [-8, 2, 0],
];

var getNegative = nestedArray.flat().find((element) => {
  return element < 0;
});

console.log(getNegative);

// 4. Given an array of numbers, find the first number that is both even and greater than 50.

var numbers = [22, 21, 14, 54];

var getResult = numbers.find((element) => {
  return element % 2 == 0 && element > 50;
});

console.log(`Result is: ${getResult}`);

// 5. Create a function that finds the first date in an array of dates that falls on a weekend.

var dates = ["10/05/2024", "08/01/2024", "06/30/2024", "06/31/2024"];

function isWeekend(dateString) {
  let date = new Date(dateString);
  let day = date.getDay();
  return day === 0 || day === 6;
}

var getWeekendDate = dates.find((date) => {
  return isWeekend(date);
});

console.log(getWeekendDate);

//                 *******FindIndex()

// 1. Write a function to find the index of the first occurrence of a prime number in an array.

var array = [3, 5, 8, 4];

var getPrime = array.findIndex((element) => {
  return element % 2 == 0;
});

console.log(`Index is ${getPrime}`);

// 2. Given an array of strings, find the index of the first string that contains the letter 'a'.

var strArray = ["Mno", "Psb", "Alt"];

var getLetterIndex = strArray.findIndex((element) => {
  element = element.toLowerCase();
  return element.length === "a";
});

console.log(getLetterIndex);

// 3. Write a function to find the index of the first object in an array where the property `score` is greater than 90.

var arrObject = [
  {
    name: "Kohli",
    score: 100,
  },
  {
    name: "Rajeev",
    score: 50,
  },
];

var getScoreIndex = arrObject.findIndex((element) => {
  return element.score > 80;
});

console.log(`Index of player for score object is: ${getScoreIndex}`);

// 4. Given an array of numbers, find the index of the first number that is both negative and even.

var numArr = [11, 12, -20];

var getNegAndEvenIndex = numArr.findIndex((element) => {
  return element % 2 == 0 && element < 0;
});

console.log(`Negative & Even Index Is: ${getNegAndEvenIndex}`);

// 5. Create a function that finds the index of the first date in an array of dates that is in the future.

var dateArray = ["05/03/2024", "10/05/2024"];

var getFuturedateIndex = dateArray.findIndex((date) => {
  var inputDate = new Date();

  inputDate.setHours(0, 0, 0, 0);

  return date < inputDate;
});

console.log(getFuturedateIndex);

//                      *********************Some()

// 1. Write a function to check if there is at least one even number in an array.

var array = [1, 5, 4, 38];

var getEven = array.some((element) => {
  return element % 2 == 0;
});

console.log(getEven);

// 2. Given an array of strings, check if any string contains the substring 'hello'.

var strArray = ["Print", "Hello", "World"];

var getSubstring = strArray.some((element) => {
  return element.toLowerCase().includes("hello");
});

console.log(getSubstring);

// 3. Write a function to check if any object in an array of objects has a property `status` equal to 'completed'.

var arrObj = [
  {
    name: "peter",
    status: "Completed",
  },
  {
    name: "Mark",
    status: "InCompleted",
  },
];

var getStatus = arrObj.some((element) => {
  return element.status.toLowerCase() === "completed";
});

console.log(getStatus);

// 4. Given an array of numbers, check if there is any number that is a perfect square.

var arr = [2, 5, 4, 5, 8, 7, 4, 1];

var getCheckSquare = arr.some((element) => {
  return Number.isInteger(Math.sqrt(element));
});

console.log(getCheckSquare);

// 5. Create a function to check if there is at least one date in an array of dates that falls on a holiday (you can define a list of holidays).

var calendar = ["10-05-2024", "12-20-2024", "02-10-2024"];
var holidays = ["01-01-2024", "02-10-2024", "12-25-2024"];

function isHoliday(date) {
  return holidays.includes(date);
}

var getHoliday = calendar.some(isHoliday);

console.log(getHoliday);

//            **********Sort()

// 1. Write a function to sort an array of numbers in descending order.

var arr = [5, 48, 7, 4, 5, 1, 22, 1, 0.3, 6, 4, 0, 2, 1, 5];

var result = arr.sort();
console.log(result);

// 2. Given an array of strings, sort them alphabetically but case-insensitively.

var result = strArr.sort((a, b) => {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});

console.log(result);

// 3. Write a function to sort an array of objects based on the property `name` in ascending order.

var result = arrObj.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

console.log(result);

// 4. Given an array of dates, sort them in chronological order.

var result = calendar.sort((a, b) => {
  return new Date(a) - new Date(b);
});

console.log(result);

// 5. Create a function to sort an array of strings by their length in descending order.

var result = strArr.sort((a, b) => {
  return b.length - a.length;
});

console.log(result);

//           **********Every()

// 1. Write a function to check if all numbers in an array are prime.

var result = arr.every((element) => {
  return element % 2 == 0;
});

console.log(result);

// 2. Given an array of strings, check if all strings have a length greater than 3 characters.

var result = strArr.every((elment) => {
  return elment.length > 3;
});
console.log(result);

// 3. Write a function to check if every object in an array has a property `isActive` set to `true`.

var arrObj = [
  {
    name: "Smith",
    isActive: true,
  },
  {
    name: "Sam",
    isActive: true,
  },
];

var result = arrObj.every((element) => {
  return element.isActive == true;
});

console.log(result);

// 4. Given an array of numbers, check if every number is positive.

var result = arr.every((element) => {
  return element > 0;
});
console.log(result);

// 5. Create a function to check if all dates in an array of dates are within the current year.

function allDatesWithinCurrentYear(dates) {
  var currentYear = new Date().getFullYear();

  return dates.every((element) => {
    var dateObj = new Date(element);
    return dateObj.getFullYear() === currentYear;
  });
}

var result = allDatesWithinCurrentYear(calendar);

console.log(result);
