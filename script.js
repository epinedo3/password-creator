//Arrays for the characters needed in the password
var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var specialCharacters="~`!@#$%^&*()-_=+[]{}|;\"':<>,./?";

// "Generate Password" Button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Created a function called generatePassword

function generatePassword(){
  let password = "";
  var length = prompt("Enter the amount of characters you want in your Password.");
  if( isNaN(length) === true || length < 8 || length > 128){
    alert("wrong")
    generatePassword()
  }

  // alert & window.confirm
  var includeslowercase= confirm("Do you want lowercase letters in your password?");
  var includesuppercase= confirm("Do you want uppercase letters in your password?");
  var includesnumbers= confirm("Do you want numbers in your password?");
  var includesspecialcharacters= confirm("Do you want special characters in your password?");
  
  // pool for what if 
  var pool = "";
  if (includeslowercase === true){
    pool += lowerCase;
  }
  if (includesuppercase === true){
    pool += upperCase;
  }
  if (includesnumbers === true){
    pool += numbers;
  }
  if (includesspecialcharacters === true){
    pool += specialCharacters;
  }

  // math.random-for loop
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * pool.length);
    password += pool[index];
  }
  console.log(password);
  return password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

