// 1. Implement a Shape class with a method `calculateArea()` and create subclasses for Circle, Rectangle, and Triangle. Override the `calculateArea()` method in each subclass to calculate the area specific to the shape.

class Shape {
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  calculateArea() {
    return `Area of circle: ${3.14 * (this.radius * this.radius)}`;
  }
}

class Rectangle extends Shape {
  constructor(width, length) {
    super();
    this.width = width;
    this.length = length;
  }

  calculateArea() {
    return `Area of rectangle: ${this.width * this.length}`;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  calculateArea() {
    return `Area of triangle: ${(this.base * this.height) / 2}`;
  }
}

var createShape = [
  new Shape(),
  new Triangle(3, 4),
  new Rectangle(10, 5),
  new Circle(7),
];

createShape.forEach((shape) => {
  console.log(shape.calculateArea());
});

// 2. Create an Employee class with a method `calculateSalary()`. Create subclasses FullTimeEmployee, PartTimeEmployee, and ContractEmployee. Override the `calculateSalary()` method in each subclass to calculate salary based on different criteria for each type of employee.

class Employee {
  calculateSalary() {
    return 0;
  }
}

class FullTimeEmployee extends Employee {
  calculateSalary() {
    console.log(`Full Time Employee Salary is RS. 1,50,000`);
  }
}

class PartTimeEmployee extends Employee {
  calculateSalary() {
    console.log(`Part Time Employee Salary is RS. 75,000`);
  }
}

class ContractEmployee extends Employee {
  calculateSalary() {
    console.log(`Contract Employee Salary is RS. 35,000`);
  }
}

var emp = [
  new Employee(),
  new FullTimeEmployee(),
  new PartTimeEmployee(),
  new ContractEmployee(),
];

emp.forEach((data) => {
  data.calculateSalary();
});

// 3. Design a Transport class with a method `move()`. Implement subclasses Car, Bike, and Airplane. Override the `move()` method to print different messages based on the type of transport.

class Transport {
  move() {
    return `India To Nepal`;
  }
}

class Car extends Transport {
  move() {
    return `Car Offroading under India`;
  }
}

class Bike extends Transport {
  move() {
    return `India Tour`;
  }
}

class Airplane extends Transport {
  move() {
    return `Air India`;
  }
}

var tourism = [new Transport(), new Car(), new Bike(), new Airplane()];

const array = tourism.map((data) => data.move());

console.log(array);

// 4. Write a function `makeNoise(animal)` that takes an object of class Animal and calls its `makeSound()` method. Create subclasses Dog, Cat, and Cow with overridden `makeSound()` methods.

class Animal {
  makeSound() {
    console.log(`Animal makes different sounds`);
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(`Dog barks`);
  }
}

class Cat extends Animal {
  makeSound() {
    console.log(`Cat meows`);
  }
}

class Cow extends Animal {
  makeSound() {
    console.log(`Cow moos`);
  }
}

function makeNoise(animal) {
  animal.makeSound();
}

var animals = [new Animal(), new Dog(), new Cat(), new Cow()];

animals.forEach((element) => {
  makeNoise(element);
});

// 5. Create a base class Instrument with a method `play()`. Implement subclasses Guitar, Piano, and Drums. Override the `play()` method to print different messages for each instrument.

class Instrument {
  play() {
    console.log(`Instrument`);
  }
}

class Guitar extends Instrument {
  play() {
    console.log(`Play Guitar`);
  }
}

class Piano extends Instrument {
  play() {
    console.log(`Play Piano`);
  }
}

class Drums extends Instrument {
  play() {
    console.log(`Play Drums`);
  }
}

var instruments = [new Instrument(), new Guitar(), new Piano(), new Drums()];

instruments.forEach((element) => {
  element.play();
});

// 6. Implement a base class Notification with a method `send()`. Create subclasses EmailNotification, SMSNotification, and PushNotification. Override the `send()` method in each subclass to simulate sending different types of notifications.

class Notification {
  send() {
    console.log(`***`);
  }
}

class EmailNotification extends Notification {
  send() {
    console.log(`Email 1`);
  }
}

class SMSNotification extends Notification {
  send() {
    console.log(`SMS 2`);
  }
}

class PushNotification extends Notification {
  send() {
    console.log(`Push Notification`);
  }
}

var notifications = [
  new Notification(),
  new EmailNotification(),
  new SMSNotification(),
  new PushNotification(),
];

notifications.forEach((element) => {
  element.send();
});

// 7. Develop a base class Employee with a method `work()`. Create subclasses Developer, Tester, and Manager. Override the `work()` method to show different tasks performed by each type of employee.

class Employee {
  work() {
    console.log(`Employee`);
  }
}

class Developer extends Employee {
  work() {
    console.log(`Write Code Only`);
  }
}

class Tester extends Employee {
  work() {
    console.log(`Test e2e features`);
  }
}

class Manager extends Employee {
  work() {
    console.log(`Manage all the Team & Work`);
  }
}

var employees = [new Employee(), new Developer(), new Tester(), new Manager()];

employees.forEach((element) => {
  element.work();
});

// 8. Create a class Vehicle with a method `startEngine()`. Implement subclasses Car, Truck, and Motorcycle. Override the `startEngine()` method to print different engine starting messages for each vehicle type.

class Vehicle {
  startEngine() {
    console.log(`Start Engine`);
  }
}

class Car extends Vehicle {
  startEngine() {
    console.log(`Car`);
  }
}

class Truck extends Vehicle {
  startEngine() {
    console.log(`Truck`);
  }
}

class Motorcycle extends Vehicle {
  startEngine() {
    console.log(`Motorcycle`);
  }
}

var vehicles = [new Vehicle(), new Car(), new Truck(), new Motorcycle()];

vehicles.forEach((element) => {
  element.startEngine();
});

// 9. Design a base class Media with a method `play()`. Create subclasses Movie, Song, and Podcast. Override the `play()` method to simulate playing different types of media.

class Media {
  play() {
    console.log(`Play Media`);
  }
}

class Movie extends Media {
  play() {
    console.log(`Play Movie`);
  }
}

class Song extends Media {
  play() {
    console.log(`Play Song`);
  }
}

class Podcast extends Media {
  play() {
    console.log(`Play Podcast`);
  }
}

var medias = [new Media(), new Movie(), new Song(), new Podcast()];

medias.forEach((element) => {
  element.play();
});

// 10. Write a function `processPayment(payment)` that takes an object of class Payment and calls its `process()` method. Implement subclasses CreditCardPayment, PayPalPayment, and BitcoinPayment with overridden `process()` methods.

class Payment {
  process() {
    console.log(`Process`);
  }
}

class CreditCardPayment extends Payment {
  process() {
    console.log(`Credit Card Payment`);
  }
}

class PayPalPayment extends Payment {
  process() {
    console.log(`PayPal Payment`);
  }
}

class BitcoinPayment extends Payment {
  process() {
    console.log(`Bitcoin Payment`);
  }
}

function processPayment(payment) {
  payment.process();
}

var payments = [
  new Payment(),
  new CreditCardPayment(),
  new PayPalPayment(),
  new BitcoinPayment(),
];

payments.forEach((element) => {
  processPayment(element);
});
