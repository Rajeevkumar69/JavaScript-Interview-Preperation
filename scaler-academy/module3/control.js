// loops are the statement that we can use to control a flow of the program and to do some repetative

var dear = "ChamchamG";

for (var i = 1; i <= 10; i++) {
  console.log(dear);
}

var numArray = [2, 3, 4, 5, 6, 7, 8, 9];
var sqareArray = [];

for (let i = 0; i < numArray.length; i++) {
  sqareArray.push(numArray[i] * numArray[i]);
}
console.log(sqareArray);
