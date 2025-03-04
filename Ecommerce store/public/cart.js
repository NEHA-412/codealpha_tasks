// Load the cart from localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save the cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Update cart display
function updateCartPage() {
    const cart = loadCart();
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    cartItemsContainer.innerHTML = ''; // Clear current cart items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        let total = 0;

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>Price: $${item.price.toFixed(2)}</p>
                <p>Quantity: ${item.quantity}</p>
                <button onclick="removeFromCart(${item.id})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
            total += item.price * item.quantity;
        });

        cartTotal.textContent = total.toFixed(2);
    }
}

// Remove an item from the cart
function removeFromCart(id) {
    let cart = loadCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
    updateCartPage();
}

// Initialize cart page on load
document.addEventListener("DOMContentLoaded", updateCartPage);