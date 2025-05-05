// 1. Write a function using `reduce()` to flatten a nested array of integers.

var nestedArray = [
  [1, 2, 5],
  [2, 5, 4],
];

var result = nestedArray.reduce((acc, value) => {
  return acc.concat(value);
}, []);

console.log(result);

// 2. Using `reduce()`, write a function to count the occurrences of each character in a string.

var str = "abcdcadbc";

var result = Array.from(str).reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});

console.log(result);

// 3. Implement a function that takes an array of objects and returns the total sum of a specific property for all objects using `reduce()`.

var arrObj = [
  { name: "A", score: 120 },
  { name: "B", score: 48 },
  { name: "C", score: 12.3 },
  { name: "D", score: 78.12 },
];

var result = arrObj.reduce((acc, value) => {
  var sum = acc + value.score;
  return sum;
}, 0);

console.log(result);

// 4. Write a function that uses `reduce()` to group an array of objects by a specified key.

var arrObj = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
  { category: "vegetable", name: "lettuce" },
];

function groupBy(arrObj, key) {
  return arrObj.reduce((acc, value) => {
    let groupKey = value[key];
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(value);
    return acc;
  }, {});
}

var result = groupBy(arrObj, "category");
console.log(result);

// 5. Using `reduce()`, create a function that merges an array of arrays into a single object, with keys from the first element and values from the second.

var result = nestedArray.reduce((acc, value) => {
  acc[value[0]] = value[1];
  return acc;
}, {});

console.log(result);

// 6. Implement a function using `reduce()` to find the maximum value in an array of numbers.

var array = [12, 5, 4, 7, 8];

var result = array.reduce((acc, value) => {
  return Math.max(acc, value);
}, -Infinity);

console.log(result);

// 7. Write a function that uses `reduce()` to concatenate all strings in an array, separated by a specified delimiter.

var strArray = ["abc", "gfh", "hjf", "dfre", "tyr"];
var delimiter = ", ";

var result = strArray.reduce((acc, value) => {
  return acc + (acc.length > 0 ? delimiter : "") + value;
}, "");

console.log(result);

// 8. Using `reduce()`, create a function to find the most frequent element in an array.

var array = [2, 1, 5, 4, 5, 1, 2, 0, 23, 2, 1, 2, 5, 4, 1, 2, 3, 6, 5, 4, 1, 2];

var frequencyMap = array.reduce((acc, value) => {
  acc[value] = (acc[value] || 0) + 1;
  return acc;
}, {});

var mostFrequent = Object.keys(frequencyMap).reduce((a, b) =>
  frequencyMap[a] > frequencyMap[b] ? a : b
);

console.log(mostFrequent);

// 9. Implement a function using `reduce()` that transforms an array of key-value pair arrays into a single object.

var array = [2, 1, 5, 4, 3];

var result = array.reduce((acc, value, index) => {
  acc[index] = value;
  return acc;
}, {});

console.log(result);

// 10. Write a function using `reduce()` to convert an array of objects into a single object, where keys are unique values from a specific property, and values are arrays of objects that had that property value.

var arrObj = [
  {
    name: "A",
    score: 56,
  },
  {
    name: "B",
    score: 89,
  },
];

var groupByProperty = (array, property) => {
  return array.reduce((acc, obj) => {
    let key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
};

var result = groupByProperty(arrObj, "name");

console.log(result);

// *******************Chaining in JavaScript

// 1. Write a function that takes a string and uses method chaining to convert it to uppercase, remove any spaces, and return the reversed string.

var str = "abgdfsd src ";

var result = (strParam) => {
  strParam = strParam.toUpperCase().trim();
  strParam = strParam.split("").reverse().join("");
  return strParam;
};

console.log(result(str));

// 2. Create a function that takes an array of numbers, filters out the even numbers, maps them to their squares, and returns the sum using chaining.

var array = [25, 4, 1, 2, 5];
var sum = 0;

var result = array
  .filter((element) => {
    return element % 2 == 0;
  })
  .map((filterParam) => {
    filterParam = filterParam * filterParam;
    sum += filterParam;
    return sum;
  });

// type2
var result = array
  .filter((element) => element % 2 === 0)
  .map((element) => element * element)
  .reduce((acc, value) => acc + value, 0);

console.log(result);

console.log(sum);

// 3. Implement a function that takes an array of strings, filters out strings with less than 5 characters, converts them to uppercase, and joins them into a single string.

var strArray = ["Hello", "I", "am", "a", "software", "engineer"];

var result = strArray
  .filter((element) => {
    return element.length < 5;
  })
  .map((elementParam) => {
    return elementParam.toUpperCase();
  })
  .join(" ");

console.log(result);

// 4. Write a function that takes an array of objects, filters out objects with a specific property value, sorts the remaining objects by another property, and maps them to a new array of values.

var arrObj = [
  {
    name: "A",
    score: 126,
  },
  {
    name: "B",
    score: 89,
  },
  {
    name: "c",
    score: 95,
  },
];

var result = arrObj
  .filter((element) => {
    return element.score < 100;
  })
  .sort((a, b) => {
    return a.score - b.score;
  })
  .map((element) => {
    return element.name;
  });

console.log(result);

// 5. Using chaining, create a function that takes an array of numbers, filters out the negative numbers, maps them to their square roots, and then sorts them in ascending order.

var array = [7, -2, 1, -5, -2, 4, -9, 4, -5];

var result = array
  .filter((element) => {
    return element < 0;
  })
  .map((element) => {
    return element * element;
  })
  .sort((a, b) => {
    return a - b;
  });

console.log(result);

// 6. Implement a function that takes a nested array, flattens it, and sorts it in descending order using chaining.

var nestedArray = [
  [1, 2, 6, 5],
  [5, 4, 8, 1],
  [6, 2, 1, 4],
];

var result = nestedArray.flat().sort((a, b) => {
  return b - a;
});
console.log(result);

// 7. Write a function that takes a string, splits it into words, filters out words with less than 4 characters, converts the remaining words to lowercase, and joins them into a single string with hyphens.

var str = "cHamChAmG";

var result = str
  .split(" ")
  .filter((element) => {
    return element.length >= 4;
  })
  .map((word) => {
    return word.toLowerCase();
  })
  .join("-");

console.log(result);

// 8. Create a function that takes an array of objects, filters out objects without a specific key, maps them to their key values, and reduces the result to the product of all values.

var arrObj = [
  { score: 10, value: 5 },
  { score: 20, value: 3 },
  { value: 8 },
  { score: 15, value: 2 },
];

var result = arrObj
  .filter((element) => {
    return element.hasOwnProperty("score");
  })
  .map((element) => {
    return element.value;
  })
  .reduce((acc, value) => {
    return acc * value;
  }, 1);

console.log(result);

// 9. Implement a function that takes an array of integers, removes duplicates, sorts the remaining numbers, and returns the median value using chaining.

var arr = [2, 5, 1, 4, 2];

var result = arr
  .filter((element, index, array) => array.indexOf(element) === index)
  .sort((a, b) => a - b)
  .reduce((acc, curr, index, array) => {
    // Find median
    if (array.length % 2 === 0) {
      if (index === array.length / 2 - 1 || index === array.length / 2) {
        acc.push(curr);
      }
    } else {
      if (index === Math.floor(array.length / 2)) {
        acc.push(curr);
      }
    }
    return acc;
  }, []);

console.log(result);

// 10. Write a function that takes an array of dates, filters out invalid dates, maps them to formatted strings, and returns a single string of all dates separated by commas using chaining.

var dates = ["10-02-2045", "22-22-2012", "23-12-1021", "10-02-2012"];

var result = dates
  .filter((date) => {
    var [day, month, year] = date.split("-");

    return day <= 31 && month <= 12 && year >= 1000;
  })
  .map((date) => {
    var [day, month, year] = date.split("-");
    return `${day}-${month}-${year}`;
  })
  .join(", ");

console.log(result);
