var table = prompt("Enter your table no. : ");
var length = prompt("Enter length of table : ");

for (i = 1; i <= length; i++) {
  document.write(table + "x" + i + "=" + table * i + "<br>");
}
