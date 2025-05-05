//  map is a HOF that returns a new array it
// doesn't change the original array

// map
let array = ["Harsh", "Rajeev", "Sunita"];

let newArray = array.map((name) => {
  return name.toUpperCase();
});

console.log(newArray);
console.log(array);

//  filter
let arrObject = [
  {
    name: "Rajeev",
    age: 24,
    employeed: true,
  },
  {
    name: "Sunita",
    age: 40,
    employeed: true,
  },
  {
    name: " Harsh",
    age: 18,
    employeed: false,
  },
];

let arrObjResult = arrObject.filter((element) => {
  return element.employeed === true;
});
console.log(arrObjResult);
console.log(arrObject);

// //  foreach
let forEachResult = array.forEach((element) => {
  console.log(element.toUpperCase());
});

//  method chaining
//  Now filterout all the positive data & convert that to dollar
let amounts = [100, 200, 120, -120, -45, -65];

let dollar = 78.5;

let dollarResult = amounts
  .filter((amount) => {
    return amount > 0;
  })
  .map((amount) => {
    return (amount = amount / dollar).toFixed(1);
  });

console.log(dollarResult);

// reduce

let data = [100, 200, 145];

let dataResult = data.reduce((preValue, currValue) => {
  return preValue + currValue;
}, 0);

console.log(dataResult);
