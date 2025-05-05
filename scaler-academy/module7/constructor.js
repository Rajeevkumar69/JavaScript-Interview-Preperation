// A constructor in JavaScript is a special method used to create and initialize objects created within a class.

// In JavaScript, a constructor is a method called automatically when an instance of a class is created. It is used to initialize the object's properties and to perform any setup required when the object is instantiated.

function createCar(_name, _company, _color) {
  this.name = _name;
  this.company = _company;
  this.color = _color;

  this.drive = function () {
    console.log(`Im driving ${this.name} car and which is ${this.color} color`);
  };
}

let car1 = new createCar("XUV", "Toyota", "White");
let car2 = new createCar("OKCU", "Mercedes", "Golden");

car1.drive();
car2.drive();

console.log(car1);
