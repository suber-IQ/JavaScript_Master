
let cel = document.getElementById('cel');
let fah = document.getElementById('fah');
let kel = document.getElementById('kel');



cel.addEventListener("input", () => {
    let c =  parseFloat(cel.value);
    // Fahrenheit=Celsius× 9/5 + 32
    let f = (c * 9/5) + 32;
    // Kelvin=Celsius+273.15
    let k = c + 273.15;
    fah.value = f;
    kel.value = k;
})
fah.addEventListener("input", () => {
    let f =  parseFloat(fah.value);
    console.log(f);
    // Celsius=(Fahrenheit−32)× 5/9
    let c =  (f - 32)* 5/9;
// Kelvin=(Fahrenheit−32)× 5/9 + 273.15
    let k =((f - 32) * 5/9) + 273.15;
    cel.value = c.toFixed(2);
    kel.value = k.toFixed(2);

})
kel.addEventListener("input", () => {
    let k =  parseFloat(kel.value);
    // Fahrenheit=(Kelvin−273.15) * 9/5 + 32
    let f = ((k - 273.15) * 9/5) + 32;
    // ​Celsius=Kelvin−273.15
    let c = k - 273.15;

    fah.value = f.toFixed(2);
    cel.value = c.toFixed(2);
})
