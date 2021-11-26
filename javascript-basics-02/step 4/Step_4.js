const clearFields = () => {
    let values = document.getElementsByTagName("input")
    for (let i = 0; i < values.length; i++) {
        values[i].value = "";
    }
}