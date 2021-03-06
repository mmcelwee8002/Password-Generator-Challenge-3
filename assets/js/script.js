// Start working code
// User input variables: 
var passwordLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;


// Start Password variable values: 
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion



space = [];
// Choices declared outside the if statement so they can be concatenated upon condition
var passwordChoices;
// converts letters to uppercase 
var toUpper = function (x) {
    return x.toUpperCase();
};
// creates a variable for uppercase conversion
letters2 = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Start function to generate password
function generatePassword() {
    alert ("Welcome to password Generator please click 'ok' to continue");

    // Asks for user input
    passwordLength = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    // First if statement for user validation 
    if (!passwordLength) {
        alert("This needs a value");
    } else if (passwordLength < 8 || passwordLength > 128) {
        // Validates user input
        // Start user input prompts
        passwordLength = parseInt(prompt("You must choose between 8 and 128"));
generatePassword()
    } else {
        // Continues once user input is validated
        confirmNumber = confirm("Will this contain numbers? Ok for 'Yes', Cancel for 'No' ");
        confirmCharacter = confirm("Will this contain special characters? Ok for 'Yes', Cancel for 'No' ");
        confirmUppercase = confirm("Will this contain Uppercase letters? Ok for 'Yes', Cancel for 'No' ");
        confirmLowercase = confirm("Will this contain Lowercase letters? Ok for 'Yes', Cancel for 'No' ");
    };

    // Else if for 4 no options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        passwordChoices = alert("Unable to create password... Please try again!");

    }
    // First if statement that uses user input prompts to determine passwordChoices
    // Else if for 4 ok/yes options
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        passwordChoices = character.concat(number, letters, letters2);
    }
    // Else if for 3 ok/yes options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        passwordChoices = character.concat(number, letters2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        passwordChoices = character.concat(number, letters);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        passwordChoices = character.concat(letters, letters2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        passwordChoices = number.concat(letters, letters2);
    }
    // Else if for 2 ok/yes options
    else if (confirmCharacter && confirmNumber) {
        passwordChoices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        passwordChoices = character.concat(letters);

    } else if (confirmCharacter && confirmUppercase) {
        passwordChoices = character.concat(letters2);
    }
    else if (confirmLowercase && confirmNumber) {
        passwordChoices = letters.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        passwordChoices = letters.concat(letters2);

    } else if (confirmNumber && confirmUppercase) {
        passwordChoices = number.concat(letters2);
    }
    // Else if for 1 ok/yes option
    else if (confirmCharacter) {
        passwordChoices = character;
    }
    else if (confirmNumber) {
        passwordChoices = number;
    }
    else if (confirmLowercase) {
        passwordChoices = letters;
    }
    // Created space variable to fill uppercase conversion
    else if (confirmUppercase) {
        passwordChoices = space.concat(letters2);
    };

    // password variable is an array placeholder for user generated amount of length
    var password = [];

    // Start random selection variables:
    // Random selection for all variables: 
    for (var i = 0; i < passwordLength; i++) {
        var pickChoices = passwordChoices[Math.floor(Math.random() * passwordChoices.length)];
        password.push(pickChoices);
    }
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;
}
// This puts the password value into the textbox
// Changed function input to use textcontent
function UserInput(ps) {
    document.getElementById("password").textContent = ps;
}

