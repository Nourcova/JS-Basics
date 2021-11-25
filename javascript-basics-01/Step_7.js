const calNumbers = () => {
    let shoe = document.getElementById("shoe_size").value;
    let age = document.getElementById("year").value;
    let value = (shoe*2 + 5)*50 - age + 1766;
    console.log(value);
    if (isNaN(value)===false) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `The answer is ${value}`,
            showConfirmButton: false,
            timer: 3000,
        })
    }
    else{
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `You dind't enter valid numbers`,
            showConfirmButton: false,
            timer: 3000,
        })
    }
}
