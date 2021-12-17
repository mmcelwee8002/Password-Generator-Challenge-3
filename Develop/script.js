// Assignment code here

// Start function to generate password

var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var passwordLength 

// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var passwordOptions;

// Get references to the #generate element
var generateButton = document.querySelector("#generate");
generateButton.addEventListener("click", function () {
document.getElementById("generate")

});


// Write password to the #password input
function writePassword() {
  // var passwordLength;
  // Asks for user input
  passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // alert("This needs a value:  Number between 8- 128");

  if (!passwordLength) {
    alert("This needs a numeric value, try again");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("You must choose between 8 and 128"));

  } else {
    // Continues once user input is validated


    confirmNumber = confirm("Will this contain numbers?");
    confirmCharacter = confirm("Will this contain special characters?");
    confirmUppercase = confirm("Will this contain Uppercase letters? ");
    confirmLowercase = confirm("Will this contain Lowercase letters?");


  };

  //If the User doesn't choose any of the options

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    passwordLength = alert("Sorry, can't generate password! Try again...");

  }


  //  }
 // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    // else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

    //   choices = character.concat(number, alpha, alpha2);
    //   console.log(choices)
    // }
  // else for 3 positive

  

  //else for 2 positive
  
  // for 1 positive
  

}   


  

  
// console.log (passwordLength)






  
//   var password = generatePassword();
  

//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;





// Add event listener to generate button
generateButton.addEventListener("click", writePassword);

