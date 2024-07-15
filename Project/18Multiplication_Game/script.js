const score = document.querySelector("#score");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");



let count = 0;

submit.addEventListener("click", () => {
    let val = input.value;
    val = val.trim();
    val = Number(val);

    let mult = Number(document.querySelector("#num1").textContent) * Number(document.querySelector("#num2").textContent);


    if(input.value === ''){
        alert("Please enter a number");
    }else if(val === mult){
        count++;
        score.textContent = count;
        num1.textContent = Math.floor(Math.random() * 20);
        num2.textContent = Math.floor(Math.random() * 20);
    }else{
        num1.textContent = Math.floor(Math.random() * 20);
        num2.textContent = Math.floor(Math.random() * 20);
    }
})