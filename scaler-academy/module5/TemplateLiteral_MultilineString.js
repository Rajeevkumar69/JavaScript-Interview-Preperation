// node TemplateLiteral_MultilineString.js
// https://chatgpt.com/share/7b1ae9d5-fda9-4ebc-bc59-f1c5473fc464

//              ******TemplateLiteral_MultilineString********
//  By Using ` ` We Can Make Our String In Multiple Line

console.log("My Name Is Rajeev");
console.log(`My
Name
Is
Rajeev`);

let a = 24;

console.log("My age is ", a);
console.log("My age is " + a);
console.log(`My age is ${a}`);

//              *********Destructuring Arrays************

// The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects into distinct variables

let arr = ["Hi", "I", , "am", "Rajeev"];

console.log(arr[1]);
console.log(arr[3]);

let [w, x, y, z, p] = arr;
console.log(w);
console.log(y);
console.log(z);
console.log(p);

//              ********* Destructuring with Objects *****

let object = {
  name: "Rajeev",
  age: 24,
  company: "TTP",
  address: {
    country: "INDIA",
    State: "Bihar",
    city: "Begusarai",
    zip: 851101,
  },
};

let {
  name: n,
  age: e,
  company: o,
  address: { country: u, State: s, zip: i },
} = object;

console.log(n);
console.log(e);
console.log(o);
console.log(u);
console.log(s);
console.log(i);

// 1. Using template literals for multiline strings.
// 2. Basic string concatenation and interpolation.
// 3. Destructuring arrays to extract values into variables.
// 4. Destructuring objects to extract nested properties into variables.
