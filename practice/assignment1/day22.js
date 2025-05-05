// Comparison Operator Questions

// Q1. Write a function that takes two numbers as arguments and returns true if the first number is greater than the second number and false otherwise.

function checkGreater(num1, num2) {
  if (num1 > num2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkGreater(3, 2));

// Q2. Create a function that accepts an array of numbers and returns a new array containing only the numbers that are greater than 10.

function sortArray(arrParam = []) {
  let newArray = [];
  for (let i of arrParam) {
    if (i >= 20) {
      newArray.push(i);
    }
  }
  return newArray;
}

console.log(sortArray([10, 30, 11, 20, 41, 9]));

// Q3. Implement a function that compares two strings and returns true if the first string is lexicographically greater than the second string.

function checkLex(str1, str2) {
  return str1 > str2;
}

console.log(checkLex("Rajeev", "ChamchamG"));

// Q4. Write a function that takes three numbers and returns the largest of the three using comparison operators.

function compare(arg1, arg2, arg3) {
  return arg1 > arg2 && arg3 ? arg1 : arg2 > arg1 && arg3 ? arg2 : arg3;
}

console.log(compare(0, 24, 9));

// Q5. Create a function that takes a string and returns true if the string contains more than 5 characters, false otherwise.

function checkLength(strParam = "") {
  if (strParam.length > 5) {
    return true;
  }
  return false;
}

console.log(checkLength("rajeev"));

// Q6. Implement a function that checks if a given year is a leap year (divisible by 4 and not divisible by 100 unless also divisible by 400).

function checkLeapYear(year) {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    return "Leap Year";
  } else {
    return "Not leap year";
  }
}

console.log(checkLeapYear(2020));

// Q7. Write a function that compares the lengths of two arrays and returns true if the first array is longer.

function checkArrayLength(arr1, arr2) {
  return arr1.length > arr2.length ? true : false;
}

console.log(checkArrayLength([1, 2, 3, 2, 4], [6, 5, 4, 1]));

// Q8. Create a function that takes an array of objects and returns a new array of objects where each object has a property "isAdult" which is true if the "age" property is greater than or equal to 18.

function checkAdult(arrObj) {
  return arrObj.map((person) => {
    if (person.age >= 18) {
      person.isAdult = true;
    } else {
      person.isAdult = false;
    }

    return person;
  });
}

var people = [
  {
    name: "A",
    age: 18,
  },
  {
    name: "B",
    age: 17,
  },
  {
    name: "C",
    age: 21,
  },
];

console.log(checkAdult(people));

// Q9. Implement a function that compares two dates and returns true if the first date is earlier than the second date.

function checkDate(date1, date2) {
  return date1 > date2 ? true : false;
}

console.log(checkDate("2023-10-05", "2024-10-05"));

// Q10. Write a function that takes a number and returns true if the number is even and greater than 50, false otherwise.

function checkEven(numParam) {
  return numParam % 2 == 0 && numParam > 50 ? true : false;
}

console.log(checkEven(52));
