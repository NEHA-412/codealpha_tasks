// Load products and display them
function loadProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(products => {
            const productList = document.getElementById('product-list');
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product-item'); // Add a class for styling
                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Price: $${product.price.toFixed(2)}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
                productList.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error loading products:', error));
}

// Load the cart from localStorage
function loadCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

// Save the cart to localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Add product to cart
function addToCart(id) {
    const cart = loadCart();
    const product = cart.find(item => item.id === id);
    if (product) {
        product.quantity += 1; // Increase quantity if product already in cart
    } else {
        // Fetch product details from the server (optional)
        fetch(`/api/products/${id}`)
            .then(response => response.json())
            .then(productData => {
                cart.push({ id: productData.id, name: productData.name, price: productData.price, quantity: 1 });
                saveCart(cart);
                updateCartDisplay();
            })
            .catch(error => console.error('Error adding product to cart:', error));
    }
    saveCart(cart);
    updateCartDisplay();
}

// Update cart display in the header
function updateCartDisplay() {
    const cart = loadCart();
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.textContent = `Cart (${cartCount})`; // Update cart count in header
    }
}

// Initialize product loading on page load
document.addEventListener("DOMContentLoaded", () => {
    loadProducts(); // Load products when the page is loaded
    updateCartDisplay(); // Update the cart display in the header
});
// payment.js
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather payment information
    const cardNumber = document.getElementById('card-number').value;
    const expDate = document.getElementById('exp-date').value;
    const cvv = document.getElementById('cvv').value;
    const billingAddress = document.getElementById('billing-address').value;

    // Retrieve order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('cart')) || [];

    // Here you would typically send the payment information to your server for processing
    // For example, using fetch to send a POST request to your payment processing endpoint

    // Store order details in localStorage
    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));

    // Redirect to the order completion page
    window.location.href = 'order-completion.html';
});