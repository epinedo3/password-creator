//Arrays for the characters needed in the password
var uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";
var special="~`!@#$%^&*()-_=+[]{}|;\"':<>,./?";

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Created a function called generatePassword
function generatePassword(){
  var length = prompt("Enter the amount of characters you want in your Password.");
  console.log(isNaN(length))
  if( isNaN(length) === true || length < 8 || length > 128){
    alert("wrong")
    generatePassword()
  }

  
  // return length;

  // NaN
  // alert & window.confirmed
  // pool for what if & "or"= 'this or that'
  var pool = "";
  if (includeslowercase === true){
    pool += lowercase;
  }
  if (includesuppercase === true){
    pool += uppercase;
  }
  if (includesnumbers === true){
    pool += numbers;
  }
  if (includesspecialcharacters === true){
    pool += special;
  }

  // math.random-for loop
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * pool.length);
    password += pool[index];
  }
  return password;
}

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

