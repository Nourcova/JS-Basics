
let images = document.querySelectorAll("img");
console.log(images)
for (let i = 1; i <= images.length; i++) {
    document.getElementById(`image${i}`).onmouseover = (() => document.getElementById(`image${i}`).src = `images/image${i}_2.jpg`)
}
