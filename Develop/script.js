// Global Variables
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

let specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "/", ";", ":"];
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function passwordSize() {
  let ask = prompt("How many characters do you want for your password?");
  if (ask < 8) {
    alert("Please make a password of at least 8 characters");
  } else if (ask > 128) {
    alert("Please make a password of less than 128 characters");
  }
}

function generatePassword() {
  passwordSize();
  // addUpperCaseLetters;
  // addLowerCaseLetters;
  // addSpecialChar;
  // addNumbers;
  // confirm("How many letters do you want?");
  console.log("apple");
  return addNumbers();
}

function addUpperCaseLetters() {
  let ask = confirm("Do you want to have uppercase letters?");
  if (ask) {
    let randomIndex = Math.floor(Math.random() * upperCaseAlpha.length);
    let randomAlpha = upperCaseAlpha[randomIndex];
    console.log(randomAlpha);
    return randomAlpha;
  }
}
function addLowerCaseLetters() {
  let ask = confirm("Do you want to have lowercase letters?");
  if (ask) {
    let randomIndex = Math.floor(Math.random() * lowerCaseAlpha.length);
    let randomAlpha = lowerCaseAlpha[randomIndex];
    console.log(randomAlpha);
    return randomAlpha;
  }
}
function addSpecialChar() {
  let ask = confirm("Do you want to have special characters?");
  if (ask) {
    let randomIndex = Math.floor(Math.random() * specialChar.length);
    let randomChar = specialChar[randomIndex];
    console.log(randomChar);
    return randomChar;
  }
}
function addNumbers() {
  let ask = confirm("Do you want to have numbers?");
  if (ask) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    let randomNum = numbers[randomIndex];
    console.log(randomNum);
    return randomNum;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
