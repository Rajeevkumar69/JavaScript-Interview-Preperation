// Spread operator with data

let arr1 = ["Rajeev", "Harsh"];
let arr2 = ["ChamchamG"];

arr2.push(...arr1);
console.log(arr1);
console.log(arr2);

// Spread operator with function
console.log(Math.min(10, 20, 45, 11, 1));
console.log(Math.max(10, 20, 45, 11, 1));

let arr = [10, 20, 54, 1];

let result = Math.min(...arr);
console.log(result);

//  Immutability with spread operator

let obj = [
  {
    name: "Rajeev",
    age: 24,
  },
  {
    name: "Harsh",
    age: 18,
  },
];

function addNewData(params) {
  return [...obj, { ...params }];
}

let newData = addNewData({ name: "Chamcham", age: 24 });

console.log(obj);

console.log(newData);
