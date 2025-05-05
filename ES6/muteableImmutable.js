// If the orginal value can be change the object is called mutable else Immutable

let a = 10;
let b = a;

b = b + 1;

console.log(b); // mutable (Here it's changing the Orginal b variable data )
console.log(a);

let arr1 = ["Rajeev", "Chamcham"];
let arr2 = arr1;
// let arr2 = [...arr1];   //now it's immutable using spread operator

arr2.push("Harsh");

console.log(arr1);
console.log(arr2);

let obj1 = {
  name: "Rajeev",
  age: 24,
};

let obj2 = { ...obj1 };
obj2.address = "BIHAR";

console.log(obj1);
console.log(obj2);
