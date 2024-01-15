// Assignment Code
var generateBtn = document.querySelector("#generate");
var password = "";

const a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const c = ["!", "@", "#", "$", "%", "^", "&", "*"];
const d = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const items = a.concat(b, c, d);
console.log(items);
var lowercasePrompt = confirm("Include lowercase letters?");
var uppercasePrompt = confirm("Include uppercase letters?");
var symbolsPrompt = confirm("Include symbols?");
var numbersPrompt = confirm("Include numbers?");

var filteredItems = [];

if (lowercasePrompt) {
  filteredItems = filteredItems.concat(a);
}
if (uppercasePrompt) {
  filteredItems = filteredItems.concat(d);
}
if (symbolsPrompt) {
  filteredItems = filteredItems.concat(c);
}
if (numbersPrompt) {
  filteredItems = filteredItems.concat(b);
}

var userInputLength = prompt("Enter the length of password characters needed (number between 8-128):");
let number = parseInt(userInputLength);

while (number < 8 || number > 128 || isNaN(number)) {
  userInputLength = prompt("Invalid Length, please try again and enter a number between 8-128:");
  number = parseInt(userInputLength);
}


function generatePassword() {
  function getRandomElements(list, items) {
    return list.sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, items);
  }

function getRandom(list) {
    const res = [];
    for (let x = 1; x <= number; x++) {
      const random = Math.floor(Math.random() * list.length);
      res.push(list[random]);
    }

    return res;
  }
  
  return getRandomElements(filteredItems, number).join('');
}


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
