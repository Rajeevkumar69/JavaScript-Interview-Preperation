let numbers = [10, 11, 12];

function addOne(number) {
  return number + 1;
}

function multiplyByTwo(number) {
  return number * 2;
}

function calculate(array, operation) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(operation(array[i]));
  }

  return result;
}

console.log(calculate(numbers, addOne));
console.log(calculate(numbers, multiplyByTwo));
