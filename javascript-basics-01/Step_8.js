const ageCheck = () => {
    let age = document.getElementById("age").value;
    if (isNaN(age) === false) {
        if (age >= 18) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: `Your age is ${age}`,
                showConfirmButton: false,
                timer: 3000,

            })
        }
        else{
            Swal.fire({
                position: 'top-end',
                icon: 'warning',
                title: `Your age is ${age}`,
                showConfirmButton: false,
                timer: 3000,

            })
        }
    }
    else {
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: `You dind't enter valid numbers`,
            showConfirmButton: false,
            timer: 3000,
        })
    }
}
