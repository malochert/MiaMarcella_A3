function openForm() {
    document.getElementById("method-form").style.display = "block";
    document.getElementById("formbg").style.display = "block";
    document.querySelector(".shopping-cart").className = "blurred";
}

function closeForm() {
    document.getElementById("method-form").style.display = "none";
    document.getElementById("formbg").style.display = "none";
    document.querySelector(".blurred").className = "shopping-cart";
}

function secondButton() {
    document.getElementById("first_button").style.display = "none";
    document.getElementById("second_button").style.display = "block";
}

function firstButton() {
    document.getElementById("first_button").style.display = "block";
    document.getElementById("second_button").style.display = "none";
}

document.getElementById('cartButton').addEventListener('click', function() {
    var buttonText = this.querySelector('.centercartbtn');

    if (this.getAttribute('data-clicked') === 'true') {
      window.location.href = 'shoppingcart.html';
    } else {
      this.style.backgroundColor = 'black';  
      buttonText.innerText = 'Proceed to Cart';
      buttonText.style.color = 'white';
      this.setAttribute('data-clicked', 'true');
    }
  });

function toggleIcon(self) {
    if (self.value.trim() === '') {
        self.style.backgroundImage = 'url(assets/searchicon.png)';
    } else {
        self.style.backgroundImage = 'none';
    }
}