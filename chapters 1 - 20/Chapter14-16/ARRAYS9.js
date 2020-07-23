var array = ["red", "yellow", "green", "blue"];
document.write(array + "<br>");

document.write(array[0] + "<br>");
document.write(array[1] + "<br>");
document.write(array[2] + "<br>");
document.write(array[3] + "<br>");
var userinp = prompt("enter color you want to add in the beginning");
array.unshift(userinp);
document.write(array + "<br>");
var userinp = prompt("enter color you want to delete in the end");
array.pop(userinp);
document.write(array + "<br>");
var userinp = prompt("enter color you want to add in the beginning");
var userinp1 = prompt("enter color you want to add in the beginning");
array.unshift(userinp);
array.unshift(userinp1);
document.write(array + "<br>");
array.shift();
document.write(array + "<br>");
array.unshift();
document.write(array + "<br>");

var index = prompt("enter index number you want to add color");
var color = prompt("enter color you want to add in your index number");
// array.insert(index, color);
array.splice(index, 0, color);
document.write(array + "<br>");

var index = prompt("enter index number you want to add color");
var howmany = prompt("enter how many color you want to delete");
array.splice(index, howmany);
document.write(array + "<br>");
