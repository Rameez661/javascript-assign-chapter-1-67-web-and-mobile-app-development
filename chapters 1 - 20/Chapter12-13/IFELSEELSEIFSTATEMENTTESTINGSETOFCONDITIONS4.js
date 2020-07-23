var input = prompt("enter input a vowel letter");
if (
  input >= "a" &&
  input <= "e" &&
  input <= "i" &&
  input <= "o" &&
  input <= "u" &&
  input <= "A" &&
  input <= "E" &&
  input <= "I" &&
  input <= "O" &&
  input <= "U"
) {
  document.write("your input letter is vowel");
} else {
  document.write("you are enter an invalid letter please enter a vowel letter");
}
