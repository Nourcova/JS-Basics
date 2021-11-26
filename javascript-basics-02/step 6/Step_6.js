let images = document.querySelectorAll("img");

for (let i=1;i<=images.length;i++){
    document.getElementById(`image${i}`).addEventListener("mouseover", ()=>{
        document.getElementById(`image${i}`).src = `images/image${i}_2.jpg`;
    });
    document.getElementById(`image${i}`).addEventListener("mouseout", ()=>{
        document.getElementById(`image${i}`).src = `images/image${i}.jpg`;
    })
}