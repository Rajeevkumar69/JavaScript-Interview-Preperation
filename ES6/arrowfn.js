let a = 20;
let b = 30;

// let result = () => a + b;

// console.log(result());

let userName = ["Rajeev", "Harsh", "Himanshu"];

let upperCase = userName.map((name) => {
  return name.toUpperCase();
});

console.log(upperCase);

// Simple Prmomise question
let promise = new Promise((resolve, reject) => {
  let name = "Rajev";

  if (name === "Rajeev") {
    resolve`Working`;
  } else {
    reject`Not working`;
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
