let password = document.getElementById("password");
let confirmation = document.getElementById("confirmation");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    if (password.value !== confirmation.value) {
        confirmation.style.borderColor = "solid 2px red";
    }
})
