// this keyword in js with Node.js in  non-strict mode

console.log(this);

function printThisOne() {
  console.log(this);
}

printThisOne();

let objOne = {
  name: "A",

  fun: function printThisTwo() {
    console.log(this);
  },
};

objOne.fun();

let objTwo = {
  name: "B",

  fun: function printThisThree() {
    function printThisFour() {
      console.log(this);
    }
    printThisFour();
  },
};

objTwo.fun();
