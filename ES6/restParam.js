//  The rest parameter syntax allows
// a function to accept an infinite number of argunments as an array

function sum(...params) {
  let total = 0;

  params.map((element) => {
    total = total += element;
  });
  console.log(total);
}

sum(10, 20);
sum(10, 20, 1);
sum(10, 20, 25, 10);
