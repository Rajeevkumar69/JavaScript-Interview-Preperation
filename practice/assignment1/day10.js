// ************************* `constructor functions`  *************************

// 1. Write a constructor function `Person` that takes a `name` parameter and assigns it to a property called `name`.

function Person(_name) {
  this.name = _name;
}

var personName = new Person("Rajeev");

console.log(personName);

// 2. Create a constructor function `Car` that has properties `make` and `model`. Add a method `getCarInfo` that returns a string combining the `make` and `model`.

function car(_make, _model) {
  (this.mfg = _make), (this.model = _model);

  this.getcarInfo = function () {
    return `Car Make Date Is ${this.mfg} and Model Is ${this.model}`;
  };
  return this.getcarInfo();
}

var carInfo = new car("2024", "A12");

console.log(carInfo.getcarInfo());

// 3. Write a constructor function `Book` that accepts `title`, `author`, and `pages` as parameters and initializes them as properties of the object.

function book(_title, _author, _pages) {
  (this.bookTitle = _title),
    (this.bookAuthor = _author),
    (this.totalPages = _pages);
}

var createBook = new book("A Laziness", "Billiam", 250);

console.log(createBook);

// 4. Create a constructor function `Dog` that has properties `breed` and `age`. Instantiate a new `Dog` object using the `new` keyword and log its properties to the console.

function dog(_breed, _age) {
  (this.dogBreed = _breed), (this.dogAge = _age);
}

var dogInfo = new dog("Breeaddata", 7);

console.log(dogInfo);

// 5. Write a constructor function `User` that accepts `username` and `email` as parameters. If `email` is not provided, default it to `'unknown@example.com'`.

function user(_username, _email) {
  this.username = _username;
  this.email = _email || "unknown@example.com";
}

var createUser = new user("Rajeev Kumar");

console.log(createUser);

// 6. Implement a constructor function `Laptop` that has properties `brand`, `model`, and `price`. Create two instances of `Laptop` with different values and log them to the console.

function laptop(_brand, _model, _price) {
  (this.laptopBrand = _brand), (this.laptopModel = _model);
  this.laptopPrice = _price;
}

var createLaptopOne = new laptop("HP", "RADEON 3", 43000);
var createLaptopTwo = new laptop("Dell", "Intel 2", 32000);

console.log(createLaptopOne);
console.log(createLaptopTwo);

// 7. Write a constructor function `Employee` that accepts `name` and `position` as parameters. Add a method `getDetails` that returns a string with the employee's name and position.

function employee(_name, _position) {
  (this.employeeName = _name), (this.employeePosition = _position);

  this.getDetails = function () {
    return `Name: ${this.employeeName}, Position: ${this.employeePosition}`;
  };
}

var createEmployeeData = new employee("Rajeev Kumar", "S/W Engineer");

console.log(createEmployeeData.getDetails());

// 8. Create a constructor function `Phone` with properties `brand` and `model`. Add a method `getFullName` on the prototype that returns the full name of the phone.

function phone(_brand, _model) {
  (this.PhoneBrand = _brand), (this.PhoneModel = _model);

  this.getFullName = function () {
    return `Phone Name is ${this.PhoneBrand} , Phone Model is ${this.PhoneModel}`;
  };
}

var createPhoneData = new phone("Realme", "Narzo 60");
console.log(createPhoneData.getFullName());

// 9. Implement a constructor function `Light` that has a boolean property `isOn`. Add a method `toggle` that switches the `isOn` state from `true` to `false` or vice versa.

function light(_isOn) {
  this.LightStatus = _isOn;

  this.toogle = function () {
    this.LightStatus = !this.LightStatus;
    return this.LightStatus;
  };
}

var lightData = new light(true);
console.log(lightData.toogle());

// 10. Write a constructor function `Rectangle` that accepts `width` and `height` as parameters. Add a method `getArea` that returns the area of the rectangle.

function rectangle(_width, _height) {
  this.width = _width;
  this.height = _height;

  this.getArea = function () {
    return this.height * this.height;
  };
}

var createRectangleData = new rectangle(10, 20);
console.log(createRectangleData.getArea());
