var input = prompt(
  "enter number or string and check whether given number is upper or lower case:"
);
if (input >= "A" && input <= "Z") {
  document.write("your input is a Upper Case");
} else if (input >= "a" && input <= "z") {
  document.write("your input is a Lower Lase");
} else if (input >= 0) {
  document.write("your input is a Number");
} else if (input < 0) {
  document.write("your input is a Number");
}
