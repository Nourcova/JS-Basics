const clearFields = () => {
    let answer = confirm("Do you want to reset all the fields?")
    if (answer) {
        let values = document.getElementsByTagName("input")
        for (let i = 0; i < values.length; i++) {
            values[i].value = "";
        }
    }
}