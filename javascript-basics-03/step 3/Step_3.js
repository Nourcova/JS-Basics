let red = document.querySelector(".red");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let text = document.getElementById("text");

const changeColor = (() => {
    red.onclick = (() => text.style.color = "red");
    green.onclick = (() => text.style.color = "green");
    blue.onclick = (() => text.style.color = "blue");

})

changeColor();