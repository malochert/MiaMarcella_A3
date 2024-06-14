function openForm() {
    document.getElementById("methodform").style.display = "block";
    document.getElementById("formbg").style.display = "block";
    document.querySelector(".shoppingcart").className = "blurred";
}

function closeForm() {
    document.getElementById("methodform").style.display = "none";
    document.getElementById("formbg").style.display = "none";
    document.querySelector(".blurred").className = "shoppingcart";
}

function secondButton() {
    document.getElementById("first_button").style.display = "none";
    document.getElementById("second_button").style.display = "block";
    return true;
}

