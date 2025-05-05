// 1. Write a template literal for a multiline string.

console.log(`My
Name
Is
Rajeev
Kumar`);

//  2. Destructure an array `[a, b, c]` into three variables.

var array = ["Hi", "Iam", "Rajeev"];
var [a, b, c] = array;
console.log(a);
console.log(b);
console.log(c);

//  3. Destructure an object `{ name: 'John', age: 30 }` to extract `name` and `age` variables.

var object = {
  name: "John",
  age: 30,
};

var { name: n, age: g } = object;
console.log(n);
console.log(g);

//  4. Write a multiline string using template literals that includes variables.

var name = "Rajeev";
console.log(`My
name
is:
${name}
and Iam
a s/w
engineer`);

//  5. Destructure an array, keeping only the first and last elements.

var array2 = [12, 10, 23, 45];
var [first, ...r] = array2;
var last = r.pop();

console.log(first);
console.log(last);

//  6. Destructure an object with nested properties like `{ user: { name: 'Alice' } }` to get the `name` property.

var userObject = {
  user: {
    name: "Alice",
  },
};

var {
  user: { name },
} = userObject;

console.log(name);

//  7. Use a template literal to insert a function call.

function greet(name) {
  return `Hello, ${name}!`;
}

var userName = "Alice";
var message = `Greeting message: ${greet(userName)}`;

console.log(message);

//  8. Destructure an array in function parameters directly.

function printFirstAndLast([first, ...rest]) {
  var last = rest.pop();
  console.log(`First element: ${first}`);
  console.log(`Last element: ${last}`);
}

var array = [12, 10, 23, 45];
printFirstAndLast(array);

//  9. Destructure an object to rename a key from `oldKey` to `newKey`.

var object = {
  oldKey: 1254,
};

var { oldKey: newKey } = object;

console.log(`New Renamed Key: ${newKey} `);

//  10. Write a multiline template literal that includes an if-else condition.

if (true) {
  console.log(`Hey 
  My 
  Name
  Is Rajeev
  Kumar`);
} else {
  console.log(`Im
  45 Year
  Old`);
}

// 11. Destructure an array with a default value for the third element.

var array = [2, 1, 4, 5, 7];

var [a, b, c = "Default", d] = array;

console.log(c);

//  12. Destructure an object with default values for `name` and `age`.

var object = {
  name: "Chamcham Kumari",
  age: 23,
};

var { name, age } = object;
console.log(`Name is: ${name} and age is: ${age}`);

//  13. Write a multiline template literal that includes a loop over an array.

var array = [2, 1, 4, 5, 7, 8];

for (element of array) {
  console.log(`element is 
   ${element} `);
}

//  14. Destructure an array, ignoring the first element and storing the rest in an array called `rest`.

var array = [2, 1, 4, 5, 7, 8, 4];

var [, ...rest] = array;

console.log(rest);

// 15. Destructure an object to extract nested properties and rename them.

var object = {
  name: "Rajeev Kumar",
  age: 23,
  address: {
    dist: "Begusarai",
    state: "Bihar",
  },
};

var {
  name: n,
  age: a,
  address: { dist: d, state: s },
} = object;

console.log(`Name is ${n}, age is ${a}, address is ${s}`);

//  16. Write a multiline template literal that includes an array iteration using `.map()`.

var array = [2, 4, 5, 1, 2, 1];

var result = array.map((element) => {
  console.log(`Element is 
   ${element} `);
});

//  17. Destructure an array inside an object's property, extracting `id` from `{ user: { id: 1 } }`.

const obj = { user: { id: 1 } };

const {
  user: { id },
} = obj;

console.log(id);

//  18. Destructure an object with a default value for `name` and extract the `age` property.

var person = { age: 30 };

var { name = "Unknown", age } = person;

console.log(`Name is ${name} and age is ${age}`);

// 19. Write a multiline template literal that uses a ternary operator.

var person = {
  name: "Alice",
  age: 25,
  isStudent: true,
};

var description = `
  Name: ${person.name}
  Age: ${person.age}
  Status: ${person.isStudent ? "Student" : "Professional"}
`;

console.log(description);

// 20. Destructure an array and ignore all elements except the second, destructuring that into a variable.

var array = [2, 4, 5, 7, 8];

var [, secondElement] = array;

console.log(`Second element is ${secondElement}`);
