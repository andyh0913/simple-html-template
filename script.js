let add_button = document.getElementById('add-button');
let number_div = document.getElementById('number-div');
add_button.onclick = () => {
    console.log("pressed");
    let num = parseInt(number_div.innerText)+1;
    number_div.innerText = num.toString()
}