/*
Shadowing in JavaScript occurs when a variable declared within a certain scope 
has the same name as a variable in an outer scope. The inner variable "shadows" 
the outer variable, meaning that within the inner scope, the inner variable takes 
precedence, and the outer variable is temporarily inaccessible. 
*/

var x = 10;

function myFun() {
  var x = 20;
  console.log(x);
}

myFun();
console.log(x);
