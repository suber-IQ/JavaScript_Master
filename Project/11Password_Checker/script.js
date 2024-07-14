const inputfield = document.querySelector('#password');
const outputfield = document.querySelector('#output');


inputfield.addEventListener("input",function(){
    // console.log(inputfield.value);
    let password = inputfield.value;

    if(password.length < 8){
        outputfield.innerText = "Password is too short";
        outputfield.style.color= 'red';
        outputfield.style.padding = '5px';
    }else{

        outputfield.style.padding = '5px';
        // a-z && A-Z && 0 - 9 && special character
        // forword slash
        const symbols = '!@#$%^&*()_+[]{}|;:,.<>?';
        const result = symbols.split('').map(char => '\\' + char).join('');
        const specialCharRegex = new RegExp(`[${result}]`);

        if(password.search(/[a-z]/) == -1){
            outputfield.innerText = "Password is missing a lowercase letter";
            outputfield.style.color = 'red';
        }else if(password.search(/[A-Z]/) == -1){
            outputfield.innerText = "Password is missing a uppercase letter";
            outputfield.style.color = 'red';
        }else if(password.search(/[0-9]/) == -1){
            outputfield.innerText = "Password is missing a Numberic letter";
            outputfield.style.color = 'red';
        }else if(password.search(specialCharRegex) == -1){
            outputfield.innerText = "Password is missing a Special Character";
            outputfield.style.color = 'red';
        }
        else{
            outputfield.innerText = "Password is strong";
            outputfield.style.color = 'green';
        }
    }
})