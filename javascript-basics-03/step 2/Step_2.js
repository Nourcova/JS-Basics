let show = document.getElementById("show");
let hide = document.getElementById("hide");
let texte = document.getElementById("texte");

const showHide = (() => {
    hide.onclick = (() => texte.style.display = "none")
    show.onclick = (() => texte.style.display = "block");
})

showHide();
