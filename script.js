const cartItems = [];
const itemPrices = {
    Pizza: 10000,  // Price for Pizza in Naira
    Burger: 2800, 
    Shawarma: 3300,
    chicken_chips: 5200 // Corrected price for Burger in Naira
    // Add more items and their prices here
};

// Function to add an item to the cart
function addToCart(item) {
    const existingItem = cartItems.find(cartItem => cartItem.name === item);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cartItems.push({ name: item, quantity: 1, price: itemPrices[item] });
    }
    displayCart();
}

// Function to remove an item from the cart
function removeItem(itemName) {
    const itemIndex = cartItems.findIndex(cartItem => cartItem.name === itemName);
    if (itemIndex !== -1) {
        if (cartItems[itemIndex].quantity > 1) {
            cartItems[itemIndex].quantity--;
        } else {
            cartItems.splice(itemIndex, 1);
        }
        displayCart();
    }
}

// Function to display the cart contents
function displayCart() {
    const cartList = document.getElementById('cart-items');
    const totalCostElement = document.getElementById('total-cost');
    cartList.innerHTML = '';
    let totalCost = 0;

    cartItems.forEach(cartItem => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            ${cartItem.quantity} x ${cartItem.name} - ₦${(cartItem.price * cartItem.quantity).toLocaleString()}
            <button onclick="removeItem('${cartItem.name}')">X</button>
        `;
        cartList.appendChild(listItem);
        totalCost += cartItem.price * cartItem.quantity;
    });

    totalCostElement.textContent = `Total: ₦${totalCost.toLocaleString()}`;
}

// Function to clear the cart and show a confirmation message
function checkout() {
    alert('Thank you for your order!');
    cartItems.length = 0; // Clear the cart
    displayCart(); // Update the cart display
}

// Functions to be triggered by user actions (for adding items to the cart)
function addPizza() {
    addToCart('Pizza');
}

function addBurger() {
    addToCart('Burger');
}

function addchicken_chips() {
    addToCart('chicken_chips');
}

// Initialize the cart on page load
displayCart();
