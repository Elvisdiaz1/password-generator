// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  confirm("Do you want to have uppercase letters?");
  confirm("Do you want to have lowercase letters?");
  confirm("Do you want to have special characters?");
  console.log("apple");
  return "apple";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
