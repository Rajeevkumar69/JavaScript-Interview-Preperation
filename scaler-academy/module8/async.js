const fs = require("fs");

fs.readFile("./file2.txt", cb2);

function cb2(err, data) {
  if (err) {
    console.log(`Error`);
  }
  console.log(`File 2 Data:  ${data}`);
}

// ------------

fs.readFile("./file1.txt", cb1);

function cb1(err, data) {
  if (err) {
    console.log(`Error`);
  }
  console.log(`File 1 Data:  ${data}`);
}
