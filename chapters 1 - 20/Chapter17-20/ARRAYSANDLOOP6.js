document.write("Counting: <br>");
for (i = 0; i <= 15; i++) {
  document.write(i + ",");
}
document.write("<br>Reverse Counting: <br>");
for (i = 15; i > 0; i--) {
  document.write(i + ",");
}
document.write("<br>Even: <br>");
for (i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + ",");
  }
}
document.write("<br>Odd: <br>");
for (i = 0; i <= 20; i++) {
  if (i % 2 != 0) {
    document.write(i + ",");
  }
}
document.write("<br>Series: <br>");
for (i = 1; i <= 20; i++) {
  if (i % 2 == 0) {
    document.write(i + "k,");
  }
}
