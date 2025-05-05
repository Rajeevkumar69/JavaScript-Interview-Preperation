// INTRODUCTION TO ES6

var a = 35;

var a = 49;
console.log(a);

if (a === 49) {
  var b = 45;
  console.log(a);
}

console.log(b);

// Variable with declared with var keyword aren't blocked scoped they are function scoped

function test() {
  var c = 20;
  console.log(c);
}

// console.log(c);

//  let KEYWORD

let ch = 10;

//  So we can't redeclare that variable which has been already declared with let keyword only we can reassign that variable

// let ch = 20;

ch = 164;

console.log(ch);

if (true) {
  let hr = "Harsh";
  console.log(hr);
}

// So the let keyword is a blocked scoped variable

// console.log(hr);

//      const KEYWORD

const rj = "Rajeev";

// So in const keyword we can't reassign & we can't redeclared that value

// const rj = 124;

// rj = "Rajeev Gupta";

console.log(rj);
