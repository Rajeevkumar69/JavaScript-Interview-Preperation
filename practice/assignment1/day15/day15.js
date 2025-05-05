function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.drive = function () {
  console.log(`Driving a generic vehicle of type: ${this.type}`);
};

function Car() {
  Vehicle.call(this, "car");
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.drive = function () {
  console.log("Driving a car");
};

function Bike() {
  Vehicle.call(this, "bike");
}

Bike.prototype = Object.create(Vehicle.prototype);
Bike.prototype.constructor = Bike;

Bike.prototype.drive = function () {
  console.log("Riding a bike");
};

function Truck() {
  Vehicle.call(this, "truck");
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;

Truck.prototype.drive = function () {
  console.log("Driving a truck");
};

const myCar = new Car();
const myBike = new Bike();
const myTruck = new Truck();

myCar.drive();
myBike.drive();
myTruck.drive();

//  Implement a prototype for a Person with properties `name` and `age`, and a method `greet()`. Create instances of Person and modify the prototype to include a new method `sayGoodbye()`.

function Person(_name, _age) {
  this.name = _name;
  this.age = _age;
}

Person.prototype.greet = function () {
  console.log(`Hello ${this.name}, ${this.age} Welcome!`);
};

var person1 = new Person("Alice", 30);
var person2 = new Person("Bob", 25);

person1.greet();
person2.greet();

Person.prototype.sayGoodbye = function () {
  console.log(`${this.name}, ${this.age} Goodbye!`);
};

person1.sayGoodbye();
person2.sayGoodbye();

// Design a prototype for an Animal with a method `speak()`. Create specific animal objects (dog, cat) that inherit from the Animal prototype and override the `speak()` method.

function Animal(type) {
  this.type = type;
}

Animal.prototype.speak = function () {
  console.log(`Animal Type ${this.type}`);
};

function dog() {
  Animal.call(this, "Dog");
}

dog.prototype = Object.create(Animal.prototype);
dog.prototype.constructor = dog;

dog.prototype.speak = function () {
  console.log("Dog Barks");
};

function cat() {
  Animal.call(this, "cat");
}

cat.prototype = Object.create(Animal.prototype);
cat.prototype.constructor = cat;

cat.prototype.speak = function () {
  console.log("Cat Mews");
};

var dogData = new dog();
var catdata = new cat();

dogData.speak();
catdata.speak();

// Create a prototype for a Shape with a method `calculateArea()`. Implement specific shapes (circle, rectangle, square) that inherit from the Shape prototype and provide their own `calculateArea()` methods.

function Shape(_height, _width) {
  this.height = _height;
  this.width = _width;
}

Shape.prototype.calculateArea = function () {
  console.log(`Total area is ${this.height * this.width}`);
};

function Circle(radius) {
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.calculateArea = function () {
  const area = Math.PI * Math.pow(this.radius, 2);
  console.log(`Circle area is ${area.toFixed(2)}`);
};

function Rectangle(_height, _width) {
  Shape.call(this, _height, _width);
}

Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

Rectangle.prototype.calculateArea = function () {
  const area = this.height * this.width;
  console.log(`Rectangle area is ${area}`);
};

function Square(side) {
  Shape.call(this, side, side);
}

Square.prototype = Object.create(Shape.prototype);
Square.prototype.constructor = Square;

Square.prototype.calculateArea = function () {
  const area = this.height * this.width;
  console.log(`Square area is ${area}`);
};

const myCircle = new Circle(10);
const myRectangle = new Rectangle(10, 20);
const mySquare = new Square(10);

myCircle.calculateArea();
myRectangle.calculateArea();
mySquare.calculateArea();

// Develop a prototype for a Gadget with properties `name` and `brand`, and a method `turnOn()`. Create specific gadgets (phone) that inherit from the Gadget prototype and override the `turnOn()` method.

function Gadget(_name, _brand) {
  this.gadgetName = _name;
  this.gadgetBrand = _brand;
}

Gadget.prototype.turnOn = function () {
  console.log(`Gadget Data ${this.gadgetName}, ${this.gadgetBrand} `);
};

function Phone() {
  Gadget.call(this, "Phone");
}

Phone.prototype = Object.create(Gadget.prototype);
Phone.prototype.constructor = Phone;

Phone.prototype.turnOn = function () {
  console.log(`Phone On`);
};

var myPhone = new Phone();
myPhone.turnOn();

// Implement a prototype for a Tool with a method `use()`. Create specific tools (hammer) that inherit from the Tool prototype and provide their own `use()` methods.

function Tool(type) {
  this.type = type;
}

Tool.prototype.use = function () {
  console.log(`Tools are ${this.type}`);
};

function Hammer() {
  Tool.call(this, "hammer");
}

Hammer.prototype = Object.create(Tool.prototype);
Hammer.prototype.constructor = Hammer;

Hammer.prototype.use = function () {
  console.log(`Use Hammer`);
};

var myHammer = new Hammer();
myHammer.use();

// Create a prototype for a Book with properties `title` and `author`, and a method `describe()`. Create instances of Book and extend the prototype to include a method `borrow()`.

function Book(_title, _author) {
  this.title = _title;
  this.author = _author;
}

Book.prototype.describe = function () {
  console.log(`Book Title: ${this.title}, Book Author: ${this.author}`);
};

var book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book("To Kill a Mockingbird", "Harper Lee");

book1.describe();
book2.describe();

Book.prototype.borrow = function () {
  console.log(`The book "${this.title}" by ${this.author} has been borrowed.`);
};

book1.borrow();
book2.borrow();

// Design a prototype for a Game with a method `start()`. Implement specific games (chess, poker, soccer) that inherit from the Game prototype and override the `start()` method.

function Game(name) {
  this.name = name;
}

Game.prototype.start = function () {
  console.log(`Starting the game: ${this.name}`);
};

function Chess() {
  Game.call(this, "Chess");
}

Chess.prototype = Object.create(Game.prototype);
Chess.prototype.constructor = Chess;

Chess.prototype.start = function () {
  console.log("Starting a game of Chess. Set up the board and pieces.");
};

function Poker() {
  Game.call(this, "Poker");
}

Poker.prototype = Object.create(Game.prototype);
Poker.prototype.constructor = Poker;

Poker.prototype.start = function () {
  console.log("Starting a game of Poker. Shuffle and deal the cards.");
};

function Soccer() {
  Game.call(this, "Soccer");
}

Soccer.prototype = Object.create(Game.prototype);
Soccer.prototype.constructor = Soccer;

Soccer.prototype.start = function () {
  console.log("Starting a game of Soccer. Kick off the ball.");
};

const myChessGame = new Chess();
const myPokerGame = new Poker();
const mySoccerGame = new Soccer();

myChessGame.start();
myPokerGame.start();
mySoccerGame.start();

// Develop a prototype for an Appliance with properties `name` and `power`, and a method `operate()`. Create specific appliances (washer, dryer, microwave) that inherit from the Appliance prototype and provide their own `operate()` methods.

function Appliance(name, power) {
  this.name = name;
  this.power = power;
}

Appliance.prototype.operate = function () {
  console.log(`Operating the ${this.name} with power ${this.power}W`);
};

function Washer(power) {
  Appliance.call(this, "Washer", power);
}

Washer.prototype = Object.create(Appliance.prototype);
Washer.prototype.constructor = Washer;

Washer.prototype.operate = function () {
  console.log(
    `Starting the washer with power ${this.power}W. Adding detergent and water.`
  );
};

function Dryer(power) {
  Appliance.call(this, "Dryer", power);
}

Dryer.prototype = Object.create(Appliance.prototype);
Dryer.prototype.constructor = Dryer;

Dryer.prototype.operate = function () {
  console.log(
    `Starting the dryer with power ${this.power}W. Tumbling clothes and applying heat.`
  );
};

function Microwave(power) {
  Appliance.call(this, "Microwave", power);
}

Microwave.prototype = Object.create(Appliance.prototype);
Microwave.prototype.constructor = Microwave;

Microwave.prototype.operate = function () {
  console.log(
    `Starting the microwave with power ${this.power}W. Heating food quickly and evenly.`
  );
};

const myWasher = new Washer(500);
const myDryer = new Dryer(1000);
const myMicrowave = new Microwave(700);

myWasher.operate();
myDryer.operate();
myMicrowave.operate();

// Implement a prototype for a Vehicle with properties `type` and `speed`, and a method `accelerate()`. Create instances of Vehicle and modify the prototype to include a new method `brake()`.

function Vehicle(type, speed) {
  this.type = type;
  this.speed = speed;
}

Vehicle.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.type} is accelerating. New speed is ${this.speed} km/h.`);
};

var car = new Vehicle("Car", 50);
var bike = new Vehicle("Bike", 20);
var truck = new Vehicle("Truck", 40);

car.accelerate();
bike.accelerate();
truck.accelerate();

Vehicle.prototype.brake = function () {
  this.speed -= 10;
  console.log(`${this.type} is braking. New speed is ${this.speed} km/h.`);
};

car.brake();
bike.brake();
truck.brake();
