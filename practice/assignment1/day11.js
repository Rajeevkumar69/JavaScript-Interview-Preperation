//                                                             ### Questions on `class()`
// 1. Create a `Person` class with properties for `name`, `age`, and `gender`. Add methods to get and set each of these properties.

class Person {
  constructor(name, age, gender) {
    this._name = name;
    this._age = age;
    this._gender = gender;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get age() {
    return this._age;
  }

  set age(value) {
    if (typeof value === "number" && value >= 0) {
      this._age = value;
    } else {
      console.error("Invalid age value");
    }
  }

  get gender() {
    return this._gender;
  }

  set gender(value) {
    if (value === "M" || value === "F" || value === "Other") {
      this._gender = value;
    } else {
      console.error("Invalid gender value");
    }
  }

  getPersonData() {
    return `Name is ${this._name}, Age is ${this._age}, and Gender is ${this._gender}`;
  }
}

const createPerson = new Person("Rajeev Kumar", 23, "C");
console.log(createPerson.getPersonData());

createPerson.name = "Ankit Sharma";
createPerson.age = 25;
createPerson.gender = "C";

console.log(createPerson.getPersonData());

// 2. Implement a `Rectangle` class with properties for `width` and `height`. Add methods to calculate the area and perimeter of the rectangle.

class rectangle {
  constructor(_width, _height) {
    this.width = _width;
    this.height = _height;
  }

  area() {
    return `area of rectangle is ${this.height * this.width}`;
  }

  perimeter() {
    // Perimeter=2×(length+width)
    return `preimeter of rectangle is ${2 * this.height + this.width}`;
  }
}

var createRectangle = new rectangle(20, 10);

console.log(createRectangle.area());
console.log(createRectangle.perimeter());

createRectangle.height = 60;
createRectangle.width = 10;

console.log(createRectangle.area());

// 3. Write a `BankAccount` class that has properties for `accountNumber`, `accountHolderName`, and `balance`. Implement methods to deposit and withdraw money, ensuring that the balance cannot go negative.

class BankAccount {
  constructor(accountNumber, accountHolderName, balance) {
    this.accountNumber = accountNumber;
    this.accountHolderName = accountHolderName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited: ${amount}. New balance: ${this.balance}`;
    } else {
      return `Deposit amount must be positive`;
    }
  }

  withdraw(amount) {
    if (amount > 0 && this.balance >= amount) {
      this.balance -= amount;
      return `Withdrawn: ${amount}. New balance: ${this.balance}`;
    } else if (amount > this.balance) {
      return `Insufficient balance`;
    } else {
      return `Withdrawal amount must be positive`;
    }
  }
}

var acDetails = new BankAccount("13800110069080", "Rajeev Kumar", 300000);

console.log(acDetails.deposit(50000));
console.log(acDetails.withdraw(100000));
console.log(acDetails.withdraw(300000));
console.log(acDetails.withdraw(-500));

// 4. Create a `Car` class with properties for `make`, `model`, and `year`. Add a method to display the car's details in a formatted string.

class car {
  constructor(_make, _model, _year) {
    this.company = _make;
    this.model = _model;
    this.mfg = _year;
  }

  details() {
    return `car company name: ${this.company} model: ${this.model} mfgDate: ${this.mfg} `;
  }
}

var createCar = new car("Mercedeez", "OKCU", 2024);

console.log(createCar.details());

// 5. Design a `Book` class with properties for `title`, `author`, `isbn`, and `numPages`. Add methods to lend and return the book, keeping track of whether the book is currently lent out.

class book {
  constructor(_title, _author, _isbn, _numPages) {
    this.bookTitle = _title;
    this.bookAuthor = _author;
    this.isbn = _isbn;
    this.totalPages = _numPages;
  }

  set title(value) {
    this.bookTitle = value;
  }

  set author(value) {
    this.bookAuthor = value;
  }

  set isbnData(value) {
    this.isbn = value;
  }

  set pages(value) {
    this.totalPages = value;
  }

  getBookData() {
    return `Book title: ${this.bookTitle} author: ${this.bookAuthor} isbn: ${this.isbn} totalPages: ${this.totalPages} `;
  }
}

var createBook = new book();
createBook.title = "Laziness";
createBook.author = "Billiam H.";
createBook.isbnData = false;
createBook.pages = 265;

console.log(createBook.getBookData());
console.log(createBook);

// 6. Implement a `Student` class with properties for `name`, `studentId`, and `grades` (an array). Add methods to add a grade and calculate the student's average grade.

class student {
  constructor(_name = [], _studentId = [], _grades = []) {
    this.studentsName = _name;
    this.studentsId = _studentId;
    this.studentsGrades = _grades;
  }

  set grades(data) {
    this.studentsGrades = data;
  }

  getAverageData() {
    var sum = 0;
    var average = 0;
    for (var data of this.studentsGrades) {
      sum += data;
    }
    return `Average is:  ${(average = sum / this.studentsGrades.length)}`;
  }
}

var createStudentRecord = new student(
  ["A", "B", "C", "D"],
  ["A1", "A2", "A3", "A4"],
  [10, 20, 41, 12]
);

console.log(createStudentRecord.getAverageData());
console.log(createStudentRecord);

// 7. Write a `Clock` class that displays the current time. Add methods to start and stop the clock, updating the displayed time every second.

class Clock {
  constructor() {
    this.currentTime = new Date();
    this.timer = null;
  }

  displayTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  start() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        console.log(this.displayTime());
      }, 1000);
    }
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
}

const createClock = new Clock();

createClock.start();

setTimeout(() => {
  createClock.stop();
}, 10000);

// 8. Create a `Movie` class with properties for `title`, `director`, `genre`, and `rating`. Add a method to rate the movie and ensure the rating is between 0 and 5.

class Movie {
  constructor(title, director, genre, rating = 0) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.rating = rating;
  }

  set movieRating(value) {
    if (value >= 0 && value <= 5) {
      this.rating = value;
    } else {
      console.error("Rating must be between 0 and 5");
    }
  }

  getMovieRating() {
    let rate;
    switch (this.rating) {
      case 0:
        rate = "*";
        break;
      case 1:
        rate = "**";
        break;
      case 2:
        rate = "***";
        break;
      case 3:
        rate = "****";
        break;
      case 4:
        rate = "*****";
        break;
      case 5:
        rate = "******";
        break;
      default:
        rate = "Invalid Rating";
        break;
    }
    return rate;
  }

  getMovieDetails() {
    return `Title: ${this.title}, Director: ${this.director}, Genre: ${
      this.genre
    }, Rating: ${this.getMovieRating()}`;
  }
}

const myMovie = new Movie(
  "Inception",
  "Christopher Nolan",
  "Science Fiction",
  3
);

console.log(myMovie.getMovieDetails());

// 9. Design a `Playlist` class with properties for `name` and `songs` (an array). Add methods to add and remove songs, and to display the playlist details.

class Playlist {
  constructor(name, songs = []) {
    this.name = name;
    this.songs = songs;
  }

  addSong(song) {
    this.songs.push(song);
  }

  removeSong(song) {
    const index = this.songs.indexOf(song);
    if (index > -1) {
      this.songs.splice(index, 1);
    } else {
      console.error(`Song "${song}" not found in the playlist`);
    }
  }

  getDetails() {
    return `Playlist: ${this.name}\nSongs: ${this.songs.join(", ")}`;
  }
}

var createPlaylist = new Playlist("Playlist 1", [
  "Hamnava",
  "Kedarnath",
  "Chhichhore",
]);

console.log(createPlaylist.getDetails());

createPlaylist.addSong("Heeriye");
console.log(createPlaylist.getDetails());

createPlaylist.removeSong("Kedarnath");
console.log(createPlaylist.getDetails());

createPlaylist.removeSong("Nonexistent Song");
