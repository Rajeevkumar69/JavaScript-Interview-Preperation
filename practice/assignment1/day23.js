// Truthy-Falsy Questions

// Q1. Write a function that takes an array and returns a new array containing only the truthy values.

function getTruthy(param = []) {
  return param.filter(Boolean);
}

var value = [1, 2, 4, -2, 0, undefined, null, NaN, "", 23];

console.log(getTruthy(value));

// Q2. Create a function that takes a value and returns "Yes" if the value is truthy and "No" if the value is falsy.

function checkTruthyFalse(value) {
  return value ? "Yes" : "No";
}

console.log(checkTruthyFalse(10));

// Q3. Implement a function that checks if an object has a truthy property named "isActive".

function checkTruthyObj(objParam = {}) {
  return objParam.hasOwnProperty("isActive") && Boolean(objParam.isActive);
}

const exampleObject = {
  id: 1,
  name: "Laptop",
  price: 1000,
  isActive: NaN,
  details: {
    warranty: "2 years",
    brand: "XYZ",
  },
};

console.log(checkTruthyObj(exampleObject));

// Q4. Write a function that takes a string and returns true if the string is non-empty and contains only whitespace characters.

function checkString(strParam) {
  if (strParam !== "") {
    return true;
  } else {
    return false;
  }
}

console.log(checkString(" "));

// Q5. Create a function that takes an array of mixed values and returns the count of truthy values.

function countTruthy(arrParam = []) {
  var count = 0;

  for (let value of arrParam) {
    if (value) {
      count++;
    }
  }

  return count;
}

console.log(countTruthy(value));

// Q6. Implement a function that takes an object and returns true if all of its properties are truthy.

function checkObject(objParams = {}) {
  for (let key in objParams) {
    if (objParams.hasOwnProperty(key) && !objParams[key]) {
      return false;
    }
  }
  return true;
}

console.log(checkObject(exampleObject));

// Q7. Write a function that takes a boolean value and returns the opposite boolean value.

function getOpposite(value) {
  return !value;
}

console.log(getOpposite(true));

// Q8. Create a function that takes an array of numbers and returns a new array with all falsy values (0, NaN, null, undefined, false) removed.

function getArray(arrParam = []) {
  var newArray = [];

  for (let element of arrParam) {
    if (element) {
      newArray.push(element);
    }
  }

  return newArray;
}

console.log(getArray([-10, 20, NaN, undefined, 12, "", ``]));

// Q9. Implement a function that checks if a given variable is neither null nor undefined.

function checkVariable(data) {
  if (data != null && data != undefined) {
    return true;
  } else {
    return false;
  }
}

console.log(checkVariable(10));

// Q10. Write a function that takes two values and returns true if both values are truthy.

function checkVariables(data1, data2) {
  if (data1 && data2) {
    return true;
  } else {
    return false;
  }
}

console.log(checkVariables(10, undefined));
