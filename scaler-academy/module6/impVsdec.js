//  Imperative Way
// The imperative style focuses on *how* to achieve the desired result. It involves a step-by-step approach to manipulate variables and control the flow of the program.

const a = 4;
const aSquare = a * a;

let isEven;

if (aSquare % 2 == 0) {
  isEven = true;
} else {
  isEven = false;
}
console.log(isEven);

//  Declarative Way
// The declarative style focuses on *what* the outcome should be, rather than *how* to achieve it. It uses expressions and high-level abstractions to describe the desired result.

let getIseven = (numParam) => ((numParam * numParam) % 2 == 0 ? true : false);

console.log(getIseven(3));

//  Key Differences
// - Imperative: Specifies step-by-step instructions and relies on control structures like `if-else` statements.
// - Declarative: Uses expressions and higher-order functions to describe the desired outcome concisely.
