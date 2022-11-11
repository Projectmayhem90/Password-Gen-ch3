// All possible characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "]", ";", ":", "'", '"', "\\", "|", ",", "<", ".", ">", "/", "?", "`", "~"];

// Generate Element 
var generateBtn = document.querySelector("#generate");

// Personal function 
function userInput() {
    var length = window.prompt("How many characters long should the password be? \nPlease choose a number between 12 and 200.");

    if (length < 12 || length > 200 || isNaN(length)) {
        window.alert("Mistake! Please choose a number between 12 and 200.")
    } else {
        var uppercaseChoice = window.confirm("Do you want to include uppercase characters? \nPress OK for Yes \nPress Cancel for No");
        var lowercaseChoice = window.confirm("Do you want to include lowercase characters? \nPress OK for Yes \nPress Cancel for No");
        var numbersChoice = window.confirm("Do you want to include numbers? \nPress OK for Yes \nPress Cancel for No");
        var specialChoice = window.confirm("Do you want to include special characters? \nPress OK for Yes \nPress Cancel for No");

        if (uppercaseChoice === false && lowercaseChoice === false && numbersChoice === false && specialChoice === false) {
            window.alert("Error! Please select at least one character type.")
        }
    }

    // Object for all personal selections 
    var userSelection = {
        length: length,
        uppercaseChoice: uppercaseChoice,
        lowercaseChoice: lowercaseChoice,
        numbersChoice: numbersChoice,
        specialChoice: specialChoice,
    }

    return userSelection;
}

// Personal user function 
function randomize(x) {
    var randomNumber = Math.floor(Math.random() * x.length);
    var randomResult = x[randomNumber];
    return randomResult;
}

// Create Password
function generatePassword() {

    var choice = userInput();
    var selectedCharacters = [];
    var criteriaCheck = [];
    var finalPassword = [];

    // All possible slections 
    if (choice.uppercaseChoice) {
        selectedCharacters = selectedCharacters.concat(uppercase);
        criteriaCheck.push(randomize(uppercase));
    }

    if (choice.lowercaseChoice) {
        selectedCharacters = selectedCharacters.concat(lowercase);
        criteriaCheck.push(randomize(lowercase));
    }

    if (choice.numbersChoice) {
        selectedCharacters = selectedCharacters.concat(numbers);
        criteriaCheck.push(randomize(numbers));
    }

    if (choice.specialChoice) {
        selectedCharacters = selectedCharacters.concat(special);
        criteriaCheck.push(randomize(special));
    }

    //Make Password
    for (var i = 0; i < choice.length; i++) {
        var randomCharacter = randomize(selectedCharacters);
        finalPassword.push(randomCharacter);
    }

    for (var i = 0; i < criteriaCheck.length; i++) {
        finalPassword[i] = criteriaCheck[i];
    }

    return finalPassword.join('');
}

// Written Password
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener action
generateBtn.addEventListener("click", writePassword);