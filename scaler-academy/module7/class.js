// A class in JavaScript is a blueprint for creating objects with specific properties and methods, providing a structured way to define object behavior and manage inheritance.

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

var createPerson = new person("Rajeev Kumar", 23);
console.log(createPerson);

class personTwo {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email || "undefined@gmail.com";
  }

  getPersonData() {
    console.log(
      `Username is ${this.name}, age is ${this.age} and email is ${this.email}`
    );
  }
}

var createPerson = new personTwo("Chamcham Roy Gupta", 23);

createPerson.getPersonData();
