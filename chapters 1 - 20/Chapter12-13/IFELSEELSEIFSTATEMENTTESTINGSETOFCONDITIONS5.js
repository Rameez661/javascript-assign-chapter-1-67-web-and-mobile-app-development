var passwerd1 = "abcd";
var passwerd2 = prompt("enter user password");

if (passwerd1 == passwerd2) {
  document.write(
    "“Correct! The password you entered matches the original password”"
  );
} else if (passwerd2 == "") {
  document.write("“Please enter your password”");
} else if (passwerd1 != passwerd2) {
  document.write("Incorrect password");
}
