// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables for each character type
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "!", "@", "$", "%", "&", "*", "#"]

// Prompts to select criteria for password generator
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be? Please input a number between 8 and 128.");
  if (isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }
}

var lowercaseConfirm = prompt("Would you like to include lowercase letters in your password? Please type 'Y' for yes, or 'N' for no.");
var uppercaseConfirm = prompt("Would you like to include uppercase letters in your password? Please type 'Y' for yes, or 'N' for no.");
var numericConfirm = prompt("Would you like to include numbers in your password? Please type 'Y' for yes, or 'N' for no.");
var specialConfirm = prompt("Would you like to include special characters in your password? Please type 'Y' for yes, or 'N' for no.");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
