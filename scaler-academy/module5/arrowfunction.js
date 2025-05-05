let testOne = function () {
  console.log("Hello World!");
};

let testTwo = function (a) {
  console.log(a + 12);
};

let arrowFunction = () => {
  console.log("Hello Arrow Function!");
};

let arrowFunctioTwo = (a) => {
  console.log(a * 8);
};

let arrowFunctioThree = (a, b, c) => {
  return a * b + c;
};

testOne();
testTwo(2);
arrowFunction();
arrowFunctioTwo(2);
console.log(arrowFunctioThree(2, 2, 5));

let arrowFunctionFour = () =>
  console.log("Hello from One Liner Arrow Function");

let arrowFunctionFive = (a, b) => a * b;

arrowFunctionFour();
console.log(arrowFunctionFive(2, 3));

let greet = (name) => "Hello " + name;

console.log(greet("ChamchamG"));
