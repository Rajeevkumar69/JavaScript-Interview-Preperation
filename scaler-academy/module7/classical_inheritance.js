// Classical inheritance in JavaScript is a way for one class (child) to inherit properties and methods from another class (parent), allowing the child class to reuse and extend the parent's functionality. This is done using the `extends` keyword. The `super` function is used within the child class to call the constructor and methods of the parent class.

class User {
  constructor(userName, email, name) {
    this.name = name || "Name not available";
    this.userName = userName || "Username not found";
    this.email = email || "email not found";
  }
}

var createUser = new User("rajeev1234", "rk@gmail.com");
console.log(createUser);

class teacher extends User {
  constructor(userName, email, name, designation, qualification) {
    super(userName, email, name);
    this.designation = designation;
    this.qualification = qualification;
  }
}

var createTeacher = new teacher(
  "Prassana Garu",
  "prassana@svc.com",
  "prassanasvc02",
  "HOD",
  "P.hd"
);
console.log(createTeacher);

class student extends User {
  constructor(userName, email, name, className, dob) {
    super(userName, email, name);
    this.dob = dob;
    this.className = className;
  }
}

var createStudent = new student(
  "Likhita",
  "likki@gmail.com",
  "likhita023",
  "1sem",
  "01-01-2000"
);
console.log(createStudent);
