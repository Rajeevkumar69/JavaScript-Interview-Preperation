"use strict";
//  this keyword in js with Node.js in strict mode

console.log(this);

function printThisOne() {
  console.log(this);
}

printThisOne();

let objOne = {
  name: "A",

  fn: function printThisTwo() {
    console.log(this);
  },
};

objOne.fn();

let objTwo = {
  name: "B",
  fn: function printThisThree() {
    function printThisFour() {
      console.log(this);
    }
    printThisFour();
  },
};

objTwo.fn();
