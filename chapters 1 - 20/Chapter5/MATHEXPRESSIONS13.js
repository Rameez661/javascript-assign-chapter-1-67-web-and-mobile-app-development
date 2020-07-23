var fav_snack = "chocolate chips";
var current_age = 15;
var estimated_age = 65;
var amount_per_day = 3;
var total_eat = (estimated_age - current_age) * 3;
document.write("<br>favourite snack: " + fav_snack);
document.write("<br>current age: " + current_age);
document.write("<br>estimated age: " + estimated_age);
document.write("<br>amount of snacks per day: " + amount_per_day);
document.write(
  "<br>you will need " +
    total_eat +
    " chocolate chip to last you until ripe of old age of 65"
);
