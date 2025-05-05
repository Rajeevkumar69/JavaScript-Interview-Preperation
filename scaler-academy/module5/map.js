// https://chatgpt.com/share/0da55a9c-1e2a-4f36-a60e-87b217d5c265
// JvaScript has 2 types of map()
//  1. Functional Map()
//  2. Array map()

// ****Array map() Method****

// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let array = [1, 2, 5.4, 3];

let result = array.map((number) => number * 2);

console.log(result); // Output: [2, 4, 10.8, 6]
console.log(array); // Output: [1, 2, 5.4, 3] (original array is unchanged)

// *****Object and Map in JavaScript*******
// Objects in JavaScript can have keys that are strings or symbols, while Maps can have keys of any type.

let obj = {
  name: "Rajeev",
  10: "This is number key",
  true: "true from object",
};

console.log(obj);

// ***********Map Example************

// A Map holds key-value pairs where keys can be of any data type. It provides various methods that aren't available on plain objects, like set, get, delete, has, and properties like size.

let data = new Map([
  ["name", "ChamchamG"],
  [10, "This is number key in map"],
  [true, "boolean key in map"],
]);

console.log(data);

// Adding new entries to the Map
data.set("city", "Noida");
data.set("Country", "INDIA");
data.set(() => {}, "This is arrow function type in Map");

console.log(data.get(10)); // Output: "This is number key in map"
console.log(data.get(true)); // Output: "true from map"
console.log(data.keys()); // Output: MapIterator {"name", 10, true, ...}
console.log(data.values()); // Output: MapIterator {"ChamchamG", "This is number key in map", "true from map", ...}
console.log(data.size); // Output: 6
data.delete(true); // Removes the key true from the Map
console.log(data.has(true)); // Output: false
console.log(data.has("country")); // Output: false (case-sensitive key lookup)
console.log(typeof data); // Output: "object"

// Iterating over Map entries
data.forEach((value, key) => {
  console.log(key, value);
});

for (let item of data) {
  console.log(item[0]); // Output: key
  console.log(item[1]); // Output: value
}

for (let [key, value] of data) {
  console.log(key); // Output: key
  console.log(value); // Output: value
}

console.log(data);

// Array map(): Iterates over an array and returns a new array with the results of the provided function. The original array remains unchanged.
// Object: Key-value pairs where keys are strings or symbols.
// Map: Key-value pairs where keys can be of any type, offering better performance and more features like size, key iteration, and value iteration.
