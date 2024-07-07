
// 👉 Method 1
// function changeBackgroundColor() {
//     const colors = ["#ff5733", "#33ff57", "#3357ff", "#f1c40f", "#9b59b6"];
//     const randomColor = colors[Math.floor(Math.random() * colors.length)];
//     document.body.style.backgroundColor = randomColor;
// }


// 👉 Method 2

const button = document.querySelector('button');

button.addEventListener('click', changeBackgroundColor);

function changeBackgroundColor() {
    const colors = ["#ff5733", "#33ff57", "#3357ff", "#f1c40f", "#9b59b6"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}





