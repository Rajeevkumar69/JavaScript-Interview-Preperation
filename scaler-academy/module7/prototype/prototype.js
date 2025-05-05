// In JavaScript, a prototype is an object from which other objects inherit properties. Prototypes are a fundamental part of JavaScript's object-oriented capabilities, allowing for the sharing of properties and methods among instances of objects. Each object in JavaScript has a prototype, which serves as a template object that provides methods and properties. When you access a property or method on an object, JavaScript will first look for that property or method on the object itself. If it doesn't find it there, it will look up the prototype chain until it finds it or reaches the end of the chain.

// Detailed Definition:
// A prototype in JavaScript is an object associated with every function and object by default, where methods and properties can be shared across instances of objects. This means that JavaScript uses prototypal inheritance to allow an object to inherit properties and methods from another object.

//                                            ******************Example1:

function person(_name, _age) {
  this.name = _name;
  this.age = _age;
}

person.prototype.getData = function () {
  return `Data:- ${this.name} ${this.age}`;
};

var person1 = new person("Adam", 23);
var person2 = new person("Steve", 53);

console.log(person1.getData());
console.log(person2);

class Citizen {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

//                                      ******************Example2:
class American extends Citizen {
  constructor(name, age, address = {}) {
    super(name, age);
    this.address = address;
  }
}

American.prototype.getData = function () {
  return `Data: ${this.name}, Age: ${this.age}, Address: ${JSON.stringify(
    this.address
  )}`;
};

var american1 = new American("Ken", 24, {
  city: "New York",
  code: 1254,
  street: "01A",
});

console.log(american1);
console.log(american1.getData());

// Prototypes are a powerful feature in JavaScript that enable inheritance and sharing of properties and methods among objects. This allows for efficient memory usage and a clean way to define methods and properties that should be common to all instances of a given type.
