//                                               ************Encapsulation

// 1. Implement a class BankAccount with private properties `accountNumber` and `balance`. Provide public methods to get the account number and balance, and to deposit and withdraw money.

class BankAccount {
  constructor(_accountNumber, _balance) {
    this.accountNumber = _accountNumber;
    this.balance = _balance;

    this.getAccountNumber = function () {
      return this.accountNumber;
    };
    this.getBalance = function () {
      return this.balance;
    };

    this.depositMoney = function (amount) {
      if (amount > 0) {
        this.balance += amount;
      } else {
        console.log(`Amount must be positive`);
      }
    };

    this.withdraw = function (amount) {
      if (amount > 0 && amount <= this.balance) {
        this.balance -= amount;
      } else {
        console.log("Invalid withdraw amount");
      }
    };
  }
}

var accountData = new BankAccount(138001100, 13000);
console.log(accountData);
accountData.depositMoney(1000);
console.log(accountData.getBalance());
accountData.withdraw(-100);
console.log(accountData.getBalance());

// 2. Create a class Student with private properties `name` and `grade`. Implement getter and setter methods for these properties.

class Student {
  constructor(_name, _grade) {
    this.name = _name;
    this.grade = _grade;

    this.getName = function () {
      return this.name;
    };

    this.setName = function (param) {
      this.name = param;
    };
    this.getGrade = function () {
      return this.grade;
    };

    this.setGrade = function (param) {
      this.grade = param;
    };
  }
}

var studentData = new Student();

studentData.setName("Rajeev Kumar");
studentData.setGrade("A+");
console.log(studentData);
console.log(studentData.getName());
console.log(studentData.getGrade());

// 3. Design a class Product with private properties `name` and `price`. Provide public methods to get the product details and to set a discount on the price.

class Product {
  constructor(_name, _price) {
    this.name = _name;
    this.price = _price;

    this.getDetails = function () {
      return `Product Details: ${this.name} ${this.price}`;
    };

    this.setDiscount = function (param) {
      if (param >= 0) {
        this.price -= param;
      }
    };
  }
}

var productData = new Product("Margo", 80);
console.log(productData.getDetails());

productData.setDiscount(10);
console.log(productData.getDetails());

// 4. Implement a class Library with private properties `books` (an array). Provide public methods to add a book, remove a book, and get the list of books.

class Library {
  constructor(_books = []) {
    this.books = _books;

    this.addBook = function (param) {
      this.books.push(param);
    };
    this.removeBook = function (param) {
      delete this.books[param];
    };

    this.getAllBooks = function () {
      return this.books;
    };
  }
}

var libraryData = new Library(["A", "B", "C", "D", "E"]);

console.log(`************`);
console.log(libraryData);

libraryData.addBook("F");

console.log(libraryData.getAllBooks());

libraryData.removeBook(2);

console.log(libraryData.getAllBooks());

// 5. Create a class User with private properties `username` and `password`. Implement methods to validate the password and to change the password securely.

class User {
  constructor(username, password) {
    let _username = username;
    let _password = password;

    this.getUsername = function () {
      return _username;
    };

    this.validatePassword = function (password) {
      return _password === password;
    };

    this.changePassword = function (oldPassword, newPassword) {
      if (this.validatePassword(oldPassword)) {
        _password = newPassword;
        return true;
      } else {
        return false;
      }
    };
  }
}

const user = new User("john_doe", "password123");

console.log(user.getUsername());

console.log(user.validatePassword("password123"));
console.log(user.validatePassword("wrong_password"));

console.log(user.changePassword("password123", "new_password123"));
console.log(user.validatePassword("new_password123"));

console.log(user.changePassword("wrong_password", "new_password456"));
false;
console.log(user.validatePassword("new_password456"));

// 6. Design a class Order with private properties `orderId` and `items` (an array). Provide public methods to add an item, remove an item, and get the order details.

class Order {
  constructor(_orderId, _item = []) {
    this.orderId = _orderId;
    this.item = _item;

    this.getDetails = function () {
      return `Order Details: ${this.orderId}  ${this.item}`;
    };

    this.addItem = function (param) {
      this.item.push(param);
    };

    this.removeItem = function (id) {
      delete this.item[id];
    };
  }
}

var orderData = new Order("A0121", ["A", "B", "B", "KJK"]);

console.log(orderData);

orderData.addItem("NBHGF");

console.log(orderData.getDetails());

// 7. Implement a class Customer with private properties `customerId` and `contactDetails`. Provide public methods to get and update the contact details.

class Customer {
  constructor(_customerId, _contact) {
    this.customerId = _customerId;
    this.contactDetails = _contact;

    this.getContactDetails = function () {
      return this.contactDetails;
    };

    this.updateContactDetails = function (param) {
      this.contactDetails = param;
    };
  }
}

var customerDetails = new Customer("A101", 23658);

console.log(customerDetails);

console.log(customerDetails.getContactDetails());
customerDetails.updateContactDetails(32584);
console.log(customerDetails);
console.log(customerDetails.getContactDetails());

// 8. Create a class Movie with private properties `title`, `director`, and `rating`. Implement methods to get and set the rating securely.

class Movie {
  constructor(_title, _director) {
    this.movieTitle = _title;
    this.director = _director;
  }
  setStarRating(starRating) {
    switch (starRating) {
      case 1:
        console.log("1 Star");
        break;
      case 2:
        console.log("2 Stars");
        break;
      case 3:
        console.log("3 Stars");
        break;
      case 4:
        console.log("4 Stars");
        break;
      case 5:
        console.log("5 Stars");
        break;
      default:
        console.log("Invalid rating");
        break;
    }
  }
}

var movieData = new Movie("3 Idiots", "Rajkumar Hirani");
console.log(movieData);

movieData.setStarRating(3);

// 9. Design a class ShoppingCart with private properties `items` (an array) and `totalPrice`. Provide public methods to add an item, remove an item, and get the total price.

class ShoppingCart {
  constructor(_items = [], _totalPrice) {
    this.items = _items;
    this.totalPrice = _totalPrice;

    this.getPrice = function () {
      return this.totalPrice;
    };
    this.addItem = function (item) {
      this.items.push(item);
    };

    this.removeItem = function (id) {
      delete this.items[id];
    };
  }
}

var shoppingData = new ShoppingCart(["A", "B", "N", "KJ"], 630);

console.log(shoppingData);

shoppingData.addItem("LKMNOP");

console.log(shoppingData);

shoppingData.removeItem(2);
console.log(shoppingData);
console.log(shoppingData.getPrice());

// 10. Implement a class Bank with private properties `name` and `branches` (an array). Provide public methods to add a branch, remove a branch, and get the list of branches.

class Bank {
  constructor(_name, _branches = []) {
    this.name = _name;
    this.branches = _branches;

    this.addBranch = function (item) {
      this.branches.push(item);
    };

    this.removeBranch = function (id) {
      delete this.branches[id];
    };

    this.getAllBranches = function () {
      return this.branches;
    };
  }
}

var bankData = new Bank("UCO BANK", ["KH", "RJ", "BG", "PTN"]);

console.log(bankData);

bankData.addBranch("DEL");

console.log(bankData.getAllBranches());

bankData.removeBranch(2);
console.log(bankData.getAllBranches());
