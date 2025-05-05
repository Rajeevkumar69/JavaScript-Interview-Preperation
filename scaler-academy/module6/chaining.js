// Chaining in JavaScript is a technique used to call multiple methods on the same object, one after another, in a single statement. It allows for cleaner, more readable code by reducing the need for temporary variables and making the sequence of operations easier to follow.

// Example:

// Imagine you have a string and you want to perform multiple operations on it, such as converting it to lowercase, replacing certain characters, and then trimming any extra spaces. You can chain these operations together like this:

var text = "  Hello, World!  ";

var result = text.toLowerCase().replace("hello", "hi").trim();

console.log(result); // Output: "hi, world!"

// Class Question
var transaction = [1000, 3400, 4000, -390, -4500];

var result = transaction
  .filter((element) => {
    return element > 0;
  })
  .reduce((acc, value) => {
    var sum = acc + value;
    return sum;
  }, 0);

console.log(result);

var data = [
  {
    name: "A",
    age: 12,
    gender: "M",
  },
  {
    name: "B",
    age: 15,
    gender: "F",
  },
  {
    name: "C",
    age: 18,
    gender: "M",
  },
  {
    name: "D",
    age: 22,
    gender: "F",
  },
  {
    name: "E",
    age: 12,
    gender: "M",
  },
  {
    name: "F",
    age: 42,
    gender: "M",
  },
  {
    name: "G",
    age: 11,
    gender: "F",
  },
  {
    name: "H",
    age: 13,
    gender: "M",
  },
  {
    name: "I",
    age: 10,
    gender: "M",
  },
];

var result = data
  .filter((element) => {
    return element.gender == "M";
  })
  .map((param) => {
    return param.age;
  });

console.log(result);
