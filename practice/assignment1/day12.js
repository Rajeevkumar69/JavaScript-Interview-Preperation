//                                           ### Questions on Classical Inheritance

// 1. Create a `Vehicle` class with properties for `make` and `model`. Extend this class with a `Car` class that adds properties for `numberOfDoors` and `fuelType`.

class vehical {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class car extends vehical {
  constructor(make, model, numberOfDoors, fuelType) {
    super(make, model);
    this.numberOfDoors = numberOfDoors;
    this.fuelType = fuelType;
  }
}

var createVehical = new vehical(2012, "OKCU1");
console.log(createVehical);

var createCar = new car(2023, "okcu21", 4, "Disel");
console.log(createCar);

// 2. Write a `Shape` class with a method to calculate the area. Extend this class with a `Circle` class that calculates the area based on its radius.

class shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class circle extends shape {
  constructor(width, height) {
    super(height, width);
  }

  getArea() {
    return `Area of circle: ${this.height * this.width}`;
  }
}

var createCircle = new circle(10, 20);
console.log(createCircle.getArea());

// 3. Implement a `Person` class with properties for `name` and `age`. Extend this class with an `Employee` class that adds properties for `employeeId` and `department`.

class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class employee extends person {
  constructor(name, age, empId, department) {
    super(name, age);
    this.empId = empId;
    this.department = department;
  }

  getData() {
    console.log(
      `Employee Data: name ${this.name} age ${this.age} emplid ${this.empId} department ${this.department} `
    );
  }
}

var createEmployee = new employee(
  "Rajeev Kumar",
  23,
  "GOOGL21",
  "S/W Engineer"
);

createEmployee.getData();

// 4. Create a `Device` class with properties for `brand` and `model`. Extend this class with a `Smartphone` class that adds properties for `operatingSystem` and `screenSize`.

class device {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}

class smartPhone extends device {
  constructor(brand, model, os, sz) {
    super(brand, model);
    this.operatingSys = os;
    this.screenSize = sz;
  }

  getData() {
    console.log(
      `SmartPhone Data :- brand ${this.brand} model ${this.model} operatingsystem ${this.operatingSys} screensize ${this.screenSize} `
    );
  }
}

var createSmartPhone = new smartPhone("Google", "Pixel8", "Android", 6.4);

createSmartPhone.getData();

// 5. Write a `User` class with properties for `username` and `password`. Extend this class with an `Admin` class that adds properties for `adminLevel` and a method to delete users.

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

class Admin extends User {
  constructor(username, password, adminLevel) {
    super(username, password);
    this.adminLevel = adminLevel;
  }

  deleteUser(user) {
    if (this.adminLevel === "Admin") {
      console.log(`User ${user.username} has been deleted.`);
    } else {
      console.log(
        `User ${user.username} cannot be deleted. Insufficient permissions.`
      );
    }
  }

  getAdminDetails() {
    return `Admin Username: ${this.username}, Admin Level: ${this.adminLevel}`;
  }
}

var regularUser = new User("rk1245", "125547");

var adminUser = new Admin("admin123", "adminPass", "Admin");

console.log(adminUser.getAdminDetails());
Level: Admin;

adminUser.deleteUser(regularUser);

// 6. Implement a `LibraryItem` class with properties for `title` and `author`. Extend this class with a `Book` class that adds properties for `isbn` and `numPages`.

class libraryItem {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

class book extends libraryItem {
  constructor(title, author, isbn, numPage) {
    super(title, author);
    this.isbn = isbn;
    this.numPage = numPage;
  }
  getData() {
    return `Book Details:- title: ${this.title} author: ${this.author} isbn: ${this.isbn} Pages: ${this.numPage}`;
  }
}

var createLibrary = new book("LIFE OF ORIGIN", "T.D. Singh", true, 3600);

console.log(createLibrary);
console.log(createLibrary.getData());

// 7. Create a `Musician` class with properties for `name` and `instrument`. Extend this class with a `BandMember` class that adds properties for `bandName` and `role`.

class musician {
  constructor(name, instrument) {
    this.name = name;
    this.instrument = instrument;
  }
}

class bendMember extends musician {
  constructor(name, instrument, bandName, role) {
    super(name, instrument);
    this.bandName = bandName;
    this.role = role;
  }
  getData() {
    return `Band Data:- name: ${this.name} instrument: ${this.instrument} role: ${this.role} bandname: ${this.bandName}`;
  }
}

var createBendMember = new bendMember("Rahman", "gittar", "01", "Member");

console.log(createBendMember);
console.log(createBendMember.getData());

// 8. Write a `Building` class with properties for `address` and `floors`. Extend this class with an `OfficeBuilding` class that adds properties for `numberOfOffices` and `companyName`.

class building {
  constructor(address, floors) {
    this.address = address;
    this.floors = floors;
  }
}

class officeBuilding extends building {
  constructor(address, floors, nuOfOffice, companyName) {
    super(address, floors);
    this.nuOfOffice = nuOfOffice;
    this.companyName = companyName;
  }

  getData() {
    return `Building Data:- Address: ${this.address} Floors: ${this.floors} Office: ${this.nuOfOffice} Company: ${this.companyName}`;
  }
}

var createBuilding = new officeBuilding("Delhi", 8, 6, "Google");
console.log(createBuilding);
console.log(createBuilding.getData());

// 9. Implement a `Product` class with properties for `name` and `price`. Extend this class with an `Electronic` class that adds properties for `warrantyPeriod` and `powerUsage`.

class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class electronic extends product {
  constructor(name, price, warenty, powerUsages) {
    super(name, price);
    this.warenty = warenty;
    this.powerUsages = powerUsages;
  }

  getData() {
    return `Electronic Data:- name: ${this.name} price: ${
      "R.S." + this.price
    } warrenty: ${this.warenty + "Year"} Power: ${this.powerUsages + "hours"}`;
  }
}

var createElec = new electronic("Bulb", 120, 1, 24);
console.log(createElec);
console.log(createElec.getData());

// 10. Create a `Transport` class with properties for `type` and `capacity`. Extend this class with a `Bus` class that adds properties for `routeNumber` and `driverName`.

class transport {
  constructor(type, capacity) {
    this.type = type;
    this.capacity = capacity;
  }
}

class Bus extends transport {
  constructor(type, capacity, routeNumber, driverName) {
    super(type, capacity);
    this.routeNumber = routeNumber;
    this.driverName = driverName;
  }
  getData() {
    return `Transport Details:- Type: ${this.type} Capacity: ${this.capacity} DriverName: ${this.driverName} RouteNo. ${this.routeNumber}`;
  }
}

var craeteBus = new Bus("Transport Van", 3600, "Amit", "NH-31");
console.log(craeteBus);
console.log(craeteBus.getData());
