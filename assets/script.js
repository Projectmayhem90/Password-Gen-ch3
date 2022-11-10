var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

var upperCaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];

var lowerCaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',];

function getPassword() {
    var length = parseInt(
        prompt ("How many charecters would you like in your password?"), 
        12
    );

if (numbers.isnan(length)) {
    alert('Number amount incorrect');
    return null;
}

if (length < 12) {
    alert('can not be below 12 charecters');
    return null;
}

if (length > 500) {
    alert('Must be below 500 Charecters');
    return null;
}

var haaNumericCharacters = confirm('')
