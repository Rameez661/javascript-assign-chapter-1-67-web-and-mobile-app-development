var First_number = prompt("Enter First Number:");
var Second_number = prompt("Enter Second Number:");
var Operator = prompt("Enter Operator");

if (Operator == "+") {
  var Result = +First_number + +Second_number;
  document.write("Addition Is : " + Result);
} else if (Operator == "-") {
  var Result = First_number - Second_number;
  document.write("Subtraction Is : " + Result);
} else if (Operator == "*") {
  var Result = First_number * Second_number;
  document.write("Multiplication Is : " + Result);
} else if (Operator == "/") {
  var Result = First_number / Second_number;
  document.write("Division Is : " + Result);
} else if (Operator == "%") {
  var Result = First_number % Second_number;
  document.write("Modulus of your answer Is : " + Result);
}
