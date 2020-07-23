var input = prompt("Enter  remaining fuel in car in litres");
if (input > 0.25) {
  document.write("Message:  remaining fuel is OK");
} else if (input <= 0.25) {
  document.write("Message: Please refill the fuel in your car");
}
