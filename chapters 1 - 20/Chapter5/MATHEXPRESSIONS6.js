var Fahrenheit = prompt("enter temperature in Fahrenheit: ");
var Celsius = prompt("enter temperature in Celsius: ");
var celsius = ((Fahrenheit - 32) * 5) / 9;
var fahrenheit = (Celsius * 9) / 5 + 32;
document.write("<br>" + fahrenheit + "'F is " + celsius + "'C");
document.write("<br>" + celsius + "'C is " + fahrenheit + "'F");
