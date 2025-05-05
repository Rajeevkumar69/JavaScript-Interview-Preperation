//   The call() method calls a function with a given this value and arguments provided individually.

var person1 = {
  fName: "Rajeev",
  lName: "Kumar",
  age: 24,

  getDetails: function () {
    console.log(
      `Hi I am ${this.fName} ${this.lName} and I am ${this.age} years old.`
    );
  },
};

var person2 = {
  fName: "Harsh",
  lName: "Kumar",
  age: 18,
};

// call method
person1.getDetails.call(person2);

//   The apply() method calls a function with a given this value, and arguments provided as an array (or an array-like object).

var person3 = {
  fName: "Chamcham",
  lName: "Roy Gupta",
  age: 24,
};

let getDetails = function (city, state) {
  console.log(
    `I am ${this.fName} ${this.lName} and age ${this.age} from ${city} ${state}`
  );
};

var person4 = {
  fName: "Muskan",
  lName: "Roy",
  age: 20,
};

// call method with arguments provided individually
getDetails.call(person3, "Begusarai", "BIHAR");

// apply method with arguments provided as an array
getDetails.apply(person4, ["Begusarai", "BIHAR"]);

//   The bind() method creates a new function that, when called, has its this keyword set to the provided value,

let myFunction = getDetails.bind(person3, "Begusarai", "BIHAR");

// bind method creates a new function
console.log(myFunction);

myFunction();

// call() Method: Invokes the function with a specified this value and arguments provided individually.
// apply() Method: Similar to call, but arguments are provided as an array.
// bind() Method: Creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments.
