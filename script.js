// Function to open the payment method popup form and apply blur effect over shopping cart
function openForm() {
    // Display the popup form
    document.getElementById("method-form").style.display = "block";
    // Activate the background overlay
    document.getElementById("formbg").style.display = "block";
    // Apply blur effect to the shopping cart by changing its class name
    document.querySelector(".shopping-cart").className = "blurred";
}

// Function to close the payment method form and remove blur effect from shopping cart
function closeForm() {
    // Hide the popup form
    document.getElementById("method-form").style.display = "none";
    // Hide the background overlay
    document.getElementById("formbg").style.display = "none";
    // Remove blur effect from shopping cart by restoring its original class name
    document.querySelector(".blurred").className = "shopping-cart";
}

// Function to switch from the first button (ADD TO CART) to the second button (ADDED TO CART) on click event
function secondButton() {
    // Hide the first button (ADD TO CART)
    document.getElementById("first_button").style.display = "none";
    // Show the second button (ADDED TO CART)
    document.getElementById("second_button").style.display = "block";
}

// Function to switch from the second button (ADDED TO CART) back to the first button (ADD TO CART) on click event
function firstButton() {
    // Show the first button (ADD TO CART)
    document.getElementById("first_button").style.display = "block";
    // Hide the second button (ADDED TO CART)
    document.getElementById("second_button").style.display = "none";
}

// Event listener to handle clicking on the cartButton element
document.getElementById('cartButton').addEventListener('click', function () {
    // Get the button text element
    var buttonText = this.querySelector('.centercartbtn');

    // Check if the button has been clicked before
    if (this.getAttribute('data-clicked') === 'true') {
        // Redirect to the shopping cart page if already clicked
        window.location.href = 'shoppingcart.html';
    } else {
        // Change button style and text to indicate it's clicked
        this.style.backgroundColor = 'black';
        buttonText.innerText = 'Proceed to Cart';
        buttonText.style.color = 'white';
        // Set the data-clicked attribute to true to mark button as clicked
        this.setAttribute('data-clicked', 'true');
    }
});

// Function to toggle search icon visibility based on input field value
function toggleIcon(self) {
    // Check if input field value is empty or contains only whitespace
    if (self.value.trim() === '') {
        // Show search icon if input is empty
        self.style.backgroundImage = 'url(assets/searchicon.png)';
    } else {
        // Hide search icon if input is not empty
        self.style.backgroundImage = 'none';
    }
}
