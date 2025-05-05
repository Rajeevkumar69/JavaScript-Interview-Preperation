const fs = require("fs");

console.log(`----------1st Line------------------`);

let data = fs.readFileSync("./file1.txt");

console.log(`${data}`);

console.log(`------------Last Line----------------`);
