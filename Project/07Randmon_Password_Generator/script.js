function generatePassword(){
    // part 1

    const length = document.getElementById("length").value;
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;

    // part 2
    const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';

    // part 3
    let characterPool = '';
    if(includeUppercase){
        characterPool = upperCaseLetters
    }
    if(includeNumbers){
        characterPool = numbers;
    }
    if(includeSymbols){
        characterPool = symbols;
    }

    characterPool += lowerCaseLetters; // Always include lowercase letters

    // console.log(characterPool); // check or debug

    let password = '';
    for(let i = 0; i < length; ++i){
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    // console.log(password); //check or debug
    document.getElementById("password").value = password;

}

async function copyPassword(){
    const passwordField = document.getElementById("password");
    try{
        await navigator.clipboard.writeText(passwordField.value);
        alert('Password copied to clipboard');
    }catch(err){
        alert('Failed to copy: ', err.message);
    }

}


//👉garbage code
// passwordField.select();
// passwordField.setSelectionRange(0,99999); // for mobile devices
// document.execCommand('copy'); // execCommand is deprecated
// alert('Password copied to clipboard');