var total_marks = prompt("Enter your total marks:");
var marks_obtained = prompt("Enter your marks obtained:");
var percentage = (marks_obtained / total_marks) * 100;
document.write("<br>Total marks is: " + total_marks);
document.write("<br>marks obtained is: " + marks_obtained);
document.write("<br>Percentage is: " + percentage);
if (percentage >= 80) {
  document.write("<br>Your Grade is: A+<br>Remarks Excellent");
} else if (percentage >= 70) {
  document.write("<br>Your Grade is: A<br>Remarks good");
} else if (percentage >= 60) {
  document.write("<br>Your Grade is: B<br>Remarks You need to improve");
} else {
  document.write("<br>Your Grade is: Fail<br>Remarks You are fail");
}
