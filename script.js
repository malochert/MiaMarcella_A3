function minusPerson() {
    int(document.getElementById("pn1")) = peoplequantity;
    document.getElementById("pn1") = peoplequantity + 1;
}

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