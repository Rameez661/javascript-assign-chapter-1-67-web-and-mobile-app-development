var price1 = 650;
var price2 = 100;
var quantity1 = prompt("enter order quantity of item 1: ");
var quantity2 = prompt("enter order quantity of item 2: ");
var shippingcharges = 100;
var total_cost = price1 * quantity1 + price2 * quantity2 + shippingcharges;
document.write("<br>price of item 2 is: " + price1);
document.write("<br>quantity of item 1 is: " + quantity1);
document.write("<br>price of item 2 is: " + price2);
document.write("<br>quantity of item 2 is: " + quantity2);
document.write("<br>shipping charges is: " + shippingcharges);
document.write("<br>total_cost of your order is: " + total_cost);
