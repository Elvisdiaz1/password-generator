// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  addUpperCaseLetters;
  addLowerCaseLetters;

  confirm("Do you want to have special characters?");
  confirm("How many letters do you want?");
  console.log("apple");
  return addLowerCaseLetters();
}

function addUpperCaseLetters() {
  let upperCaseAlpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let ask = confirm("Do you want to have uppercase letters?");
  if (ask) {
    let randomIndex = Math.floor(Math.random() * upperCaseAlpha.length);
    let randomAlpha = upperCaseAlpha[randomIndex];
    console.log(randomAlpha);
    return randomAlpha;
  }
}
function addLowerCaseLetters() {
  let lowerCaseAlpha = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let ask = confirm("Do you want to have lowercase letters?");
  if (ask) {
    let randomIndex = Math.floor(Math.random() * lowerCaseAlpha.length);
    let randomAlpha = lowerCaseAlpha[randomIndex];
    console.log(randomAlpha);
    return randomAlpha;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
