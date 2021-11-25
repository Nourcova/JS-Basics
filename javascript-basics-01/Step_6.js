const calNumbers = () => {
    let num1 = document.getElementById("first_number").value;
    let num2 = document.getElementById("second_number").value;
    let value = num1 % num2;

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
