// let transaction = [1000, 2500, 320, -898, 236, -78];

// let totalAmount = transaction
//   .filter((element) => {
//     return element > 0;
//   })
//   .reduce((acc, value) => {
//     let updatedData = acc + value;
//     return updatedData;
//   }, 0);

// console.log(totalAmount);

// let publicData = [
//   {
//     age: 23,
//     gender: "M",
//   },
//   {
//     age: 22,
//     gender: "F",
//   },
//   {
//     age: 20,
//     gender: "F",
//   },
//   {
//     age: 18,
//     gender: "M",
//   },
//   {
//     age: 21,
//     gender: "F",
//   },
//   {
//     age: 23,
//     gender: "M",
//   },
//   {
//     age: 56,
//     gender: "M",
//   },
//   {
//     age: 23,
//     gender: "F",
//   },
// ];

// let malesAges = publicData
//   .filter((element) => {
//     return element.gender == "M";
//   })
//   .reduce((acc, value) => acc + value.age, 0);

// console.log(malesAges);

//  constructor

// function carData(_name, _company, _color) {
//   this.name = _name;
//   this.company = _company;
//   this.color = _color;

//   this.welcome = function () {
//     console.log(`Car name is: ${this.name}`);
//   };
// }

// let firstCar = new carData("A1", "BMW", "Red");
// firstCar.welcome();
// console.log(firstCar.color);

// class

// class person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   welcome() {
//     console.log(`Welcome ${this.name}`);
//   }
// }

// let person1 = new person("Rajeev", 24);
// let person2 = new person("Richa", 25);

// person1.welcome();

// console.log(person1);
// console.log(person2);

// const myFunction = () => {
//   let myValue = 2;
//   //   console.log(myValue);

//   const childFunction = () => {
//     console.log((myValue += 1));
//   };

//   return childFunction;
// };

let myfunction = () => {
  let value = 2;

  let childFunction = () => {
    console.log((value += 1));
  };

  return childFunction;
};

let result = myfunction();

result();
result();
result();

// const result = myFunction();
// // console.log(result);
// result();
// result();
// result();

// function throttle(func, delay) {
//   let lastCall = 0;
//   return function (...args) {
//     const now = new Date().getTime();
//     if (now - lastCall >= delay) {
//       func(...args);
//       lastCall = now;
//     }
//   };
// }

// const throttledScrollHandler = throttle(() => {
//   console.log("Loading more content...");
// }, 1000);

// // window.addEventListener("scroll", throttledScrollHandler);
// throttledScrollHandler();
