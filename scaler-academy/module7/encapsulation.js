// Encapsulation
// Encapsulation is a fundamental concept in object-oriented programming that involves bundling the data (variables) and the methods (functions) that operate on the data into a single unit or class. It restricts direct access to some of the object's components, which can prevent the accidental modification of data. Instead, data should be accessed through publicly exposed methods (getters and setters).

function Person(name, age) {
  var _name = name;
  this.age = age;

  this.getName = function () {
    return _name;
  };

  this.setName = function (name) {
    _name = name;
  };
}

var person1 = new Person("Adam", 26);
console.log(person1.getName());

person1.setName("Eve");
console.log(person1.getName());

// example 2

function BankAccount(accountNumber, balance) {
  var _accountNumber = accountNumber;
  var _balance = balance;

  this.getAccountNumber = function () {
    return _accountNumber;
  };

  this.getBalance = function () {
    return _balance;
  };

  this.deposit = function (amount) {
    if (amount > 0) {
      _balance += amount;
    }
  };

  this.withdraw = function (amount) {
    if (amount > 0 && amount <= _balance) {
      _balance -= amount;
    }
  };
}

var account1 = new BankAccount("123456", 1000);
console.log(account1.getAccountNumber());
console.log(account1.getBalance());

account1.deposit(500);
console.log(account1.getBalance());

account1.withdraw(300);
console.log(account1.getBalance());
