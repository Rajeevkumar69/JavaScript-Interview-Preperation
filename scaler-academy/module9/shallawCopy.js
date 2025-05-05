// ... spread operator (...)

// let person = {
//   name: "Rajeev",
//   age: 24,
// };

// // let secondPerson = person;
// let secondPerson = { ...person };

// console.log(person);
// console.log(secondPerson);

// Q1. Write a function `shallowCopy(obj)` that performs a shallow copy of an object and explain its limitations.

// function shallowCopy(objParam) {
//   let shallowCopyObj = { ...objParam };
//   return shallowCopyObj;
// }

// let objArgument = {
//   name: "Rajeev",
//   age: 24,
// };

// console.log(shallowCopy(shallowCopyObjArgument));

// Q2. Given a nested object, use Object.assign() to create a shallow copy and demonstrate how modifying a nested property affects both the copy and the original.

let nestedObj = {
  personBasicData: {
    name: "Chamcham Kumari",
    age: 24,
  },

  personAdddress: {
    dist: "Begusarai",
    state: "BIHAR",
  },
};

let shallowCopy = Object.assign({}, nestedObj);

shallowCopy.personAdddress.dist = "Patna";

console.log("Original:", nestedObj.personAdddress);
console.log("Copy:", shallowCopy.personAdddress);

// Q3. Implement a function that demonstrates how the spread operator (`...`) creates a shallow copy and how it behaves with nested objects.

function demonstrateSpread() {
  let person = {
    name: "Rajeev",
    age: 24,

    address: {
      dist: "Begusarai",
    },
  };

  let secondPerson = { ...person.address };
  return secondPerson;
}

console.log(demonstrateSpread());

// Q4. Write a program that shows the difference between Object.assign() and structuredClone() for object copying.

let originalObj = {
  name: "Chamcham Kumari",
  age: 24,
  address: {
    dist: "Begusarai",
    state: "BIHAR",
  },
};

let shallowCopy = Object.assign({}, originalObj);

let deepCopy = structuredClone(originalObj);

shallowCopy.address.dist = "Patna";

deepCopy.address.state = "Jharkhand";

console.log("Original Object:", originalObj);
console.log("Shallow Copy:", shallowCopy);
console.log("Deep Copy:", deepCopy);
