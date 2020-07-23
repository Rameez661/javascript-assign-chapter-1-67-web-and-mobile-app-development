var input = prompt(
  "Welcome to abc Bakery. What do you want to order sir/madam?"
);
var array = ["cake", "apple pie", "cookie", "chips", "patties"];
for (i = 0; i <= array.length; i++) {
  if (input == array[i]) {
    document.write("cookies is available at index " + i + " in our bakery<br>");
  }
}
