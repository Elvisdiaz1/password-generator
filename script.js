// Global Variables
// Upper Case Alphabet Array
let upperCaseAlpha = ["A", "B","C", "D", "E", "F", "G", "H", "I", "J", "K", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W","X","Y","Z",];

// Lower Case Alphabet Array
let lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Special Character Array
let specialChar = ["!","@","#","$","%","^","&","*","?","/",";",":","-","_",];

// Number Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Empty Array Used for Concating Arrays
let newArray = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate password
function generatePassword() {
  return passwordSize();
}

// Function for choosing password size
function passwordSize() {
  // Clears newArray to reuse password generator and not have to refresh the page
  newArray = [];

  // Prompt for choosing the size of the password
  let ask = prompt("How many characters do you want for your password?");
  if (ask < 8) {
    alert("Please make a password of at least 8 characters");
  } else if (ask > 128) {
    alert("Please make a password of less than 128 characters");
  }

  // Verification that password is within the correct range
  if (ask > 8 && ask < 128) {
    // Subfunction to determine how password is made
    function passwordCreation() {
      let askUpper = confirm(
        "Do you want to have uppercase letters? Press Ok if yes."
      );
      let askLower = confirm(
        "Do you want to have lowercase letters? Press Ok if yes."
      );
      let askSpecial = confirm(
        "Do you want to have special characters? Press Ok if yes."
      );
      let askNum = confirm("Do you want to have numbers? Press Ok if yes.");

      // If Statements that determine single style passwords
      if (askUpper && !askLower && !askSpecial && !askNum) {
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * upperCaseAlpha.length);
          let randomAlpha = upperCaseAlpha[randomIndex];
          newArray.push(randomAlpha);
        }
        let result = newArray.join("");
        return result;
      } else if (askLower && !askSpecial && !askNum && !askUpper) {
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * lowerCaseAlpha.length);
          let randomAlpha = lowerCaseAlpha[randomIndex];
          newArray.push(randomAlpha);
        }
        let result = newArray.join("");
        return result;
      } else if (askSpecial && !askLower && !askUpper && !askNum) {
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * specialChar.length);
          let randomChar = specialChar[randomIndex];
          newArray.push(randomChar);
        }
        let result = newArray.join("");
        return result;
      } else if (askNum && !askLower && !askSpecial && !askUpper) {
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * numbers.length);
          let randomNum = numbers[randomIndex];
          newArray.push(randomNum);
        }
        let result = newArray.join("");
        return result;
      }
      // If Statements that determine which two types are used for random password
      else if (askUpper && askLower && !askSpecial && !askNum) {
        let concatArray = upperCaseAlpha.concat(lowerCaseAlpha);

        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askUpper && askSpecial && !askLower && !askNum) {
        let concatArray = upperCaseAlpha.concat(specialChar);

        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askUpper && askNum && !askSpecial && !askLower) {
        let concatArray = upperCaseAlpha.concat(numbers);

        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askLower && askNum && !askSpecial && !askUpper) {
        let concatArray = lowerCaseAlpha.concat(numbers);

        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askLower && askSpecial && !askNum && !askUpper) {
        let concatArray = lowerCaseAlpha.concat(specialChar);

        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askNum && askSpecial && !askLower && !askUpper) {
        let concatArray = numbers.concat(specialChar);

        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      }
      // If Statements that determine which three types are used for random password
      else if (askUpper && askLower && askNum && !askSpecial) {
        let concatArray = upperCaseAlpha.concat(lowerCaseAlpha, numbers);
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askUpper && askLower && askSpecial && !askNum) {
        let concatArray = upperCaseAlpha.concat(lowerCaseAlpha, specialChar);
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askUpper && askNum && askSpecial && !askLower) {
        let concatArray = upperCaseAlpha.concat(numbers, specialChar);
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      } else if (askLower && askNum && askSpecial && !askUpper) {
        let concatArray = lowerCaseAlpha.concat(numbers, specialChar);
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      }
      // Else statement allows all types to be used for random password
      else {
        let concatArray = lowerCaseAlpha.concat(
          numbers,
          specialChar,
          upperCaseAlpha
        );
        for (let index = 0; index < ask; index++) {
          let randomIndex = Math.floor(Math.random() * concatArray.length);
          let random = concatArray[randomIndex];
          newArray.push(random);
        }
        let result = newArray.join("");
        return result;
      }
    }
  } else {
    return "Please Try Again";
  }

  return passwordCreation();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
