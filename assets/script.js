// Variables for each character type
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["~", "!", "@", "$", "%", "&", "*", "#"]
var choiceArray = []

// Links to generate id element in HTML
var generateBtn = document.querySelector("#generate");

// Adds event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  choiceArray = [];
  passwordLength = parseInt(prompt("How long would you like your password to be? Please input a number between 8 and 128."));

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number between 8 and 128.");
    return generatePassword();
  }

  var lowercaseConfirm = confirm("Would you like your password to include lowercase letters? Please click 'Okay' for yes, or 'Cancel' for no.");
  var uppercaseConfirm = confirm("Would you like your password to include uppercase letters? Please click 'Okay' for yes, or 'Cancel' for no.");
  var numericConfirm = confirm("Would you like your password to include numbers? Please click 'Okay' for yes, or 'Cancel' for no.");
  var specialConfirm = confirm("Would you like your password to include special characters? Please click 'Okay' for yes, or 'Cancel' for no.");

  if (lowercaseConfirm || uppercaseConfirm || numericConfirm || specialConfirm) {

    var choiceArray = [];

    if (lowercaseConfirm) {
      choiceArray = choiceArray.concat(lowercase);
    } if (uppercaseConfirm) {
      choiceArray = choiceArray.concat(uppercase);
    } if (numericConfirm) {
      choiceArray = choiceArray.concat(numeric);
    } if (specialConfirm) {
      choiceArray = choiceArray.concat(special);
    }
    var generatedPassword = [];
    for (let i = 0; i < passwordLength; i++) {
      var randomIndex = choiceArray[Math.floor(Math.random() * choiceArray.length)];

      generatedPassword.push(randomIndex);
    }
    return generatedPassword.join("");
  }
    else {
      alert("In order to generate your password, please select at least one charcter type.");
      return generatePassword();
    }
}

// Adds the generated password into the password id element text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}