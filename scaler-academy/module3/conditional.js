var myScore = 88;

if (myScore > 90) {
  console.log("Great");
} else {
  console.log("Oops");
}

// 90 to 100 -  A
// 70 to 89 -B
// 60 to 79 - C
//  below 50 - F

// From User Input

// var studentScore = prompt("Enter Your Score: \n");
// println(studentScore);

var studentScore = 89;

if (studentScore >= 90 && studentScore <= 100) {
  console.log("Grade A");
} else if (studentScore >= 70 && studentScore <= 89) {
  console.log("Grade B");
} else if (studentScore >= 60 && studentScore <= 69) {
  console.log("Grade C");
} else {
  console.log("F");
}
