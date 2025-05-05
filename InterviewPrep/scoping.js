(function () {
  console.log(`Anoymous function`);
  console.log(`Immedetely Invoked function`);
})();

function sum(num1, num2) {
  let name = "Function scope";
  console.log(`name is function scope`);
  return num1 + num2;
}

console.log(sum(10, 20));
