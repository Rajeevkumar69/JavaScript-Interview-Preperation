// In JavaScript Object are in a akey:value pair

let person = {
  fname: "Rajeev",
  lname: "Kumar",
  age: 23,
  gender: "Male",
  friends: ["Deepak", "Harsh"],
  adddress: {
    state: "BIHAR",
    Dist: "Begusarai",
    pincode: 851101,
    isIndian: true,
  },
};

console.log(person);
// dot notation
console.log(person.age);
// brackets notation
console.log(person["lname"]);

console.log(person.friends);
console.log(person.friends[0]);

console.log(person.adddress);
console.log(person.adddress.state);
console.log(person.adddress["pincode"]);
console.log(typeof person.adddress["pincode"]);

// Set a new key:value in an object
person.adddress.post = "Rajaura";
console.log(person.adddress);

delete person.adddress.isIndian;
console.log(person.adddress);
