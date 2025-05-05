// For loop

var num = 10;

for (var i = 1; i <= num; i++) {
  console.log(i);
}

// While loop

var a = 1;

while (a <= 10) {
  console.log(a);
  a++;
}

// Do-While loop

var a = 1;

do {
  console.log(a);
  a++;
} while (a <= 10);

// For-in loop with object  -- it'll iterate over key only of the object

var obj = {
  name: "Rajeev Kumar",
  age: 23,
  contact: 8789411945,
};

for (var item in obj) {
  console.log(item);
}

var array = [1, 2, 3, 4, 5, 6, 4];

for (var item in array) {
  console.log(item);
}

// ****** The for-in loop iterate over key of an object/array but in other hand
//        for-of loop iterate over only the value of the array/string
//                       and every array is an object in js

//  for-of loop -- > it'll iterate over value of given data

for (var item of array) {
  console.log(item);
}

// Loop on String

var str = "I Love You ChamchamG";

for (var i in str) {
  console.log(str[i]);
}

for (var i of str) {
  console.log(i);
}

var greeting = {
  msg: "Love You",
  date: "12-12-2019",
  day: "Monday",
  code: 60589,
};

//  for-of loop iterate over only the array/string to  print value
for (var i in greeting) {
  console.log(i);
}

//  entries() method to access the index of an array
var array = ["Mango", "Apple", "Banana", "PineApple"];

for ([index, fruitName] of array.entries()) {
  console.log(index + " => " + fruitName);
}

var str = "Rajeev";
for (var character of str) {
  console.log(character);
}

// Convert array to object
var array = ["Banana", "Mango", "Lichi", "PineApple"];

var convertedObject = {};

for (var [index, value] of array.entries()) {
  convertedObject[index] = value;
}

console.log(convertedObject);
