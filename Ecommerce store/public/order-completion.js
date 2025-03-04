// order-completion.js
document.addEventListener('DOMContentLoaded', function() {
    // Retrieve order details from localStorage
    const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));

    // Display order summary
    const orderSummaryDiv = document.getElementById('order-summary');
    if (orderDetails && orderDetails.items) {
        orderDetails.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price.toFixed(2)} (Quantity: ${item.quantity})</p>
            `;
            orderSummaryDiv.appendChild(itemElement);
        });

        // Calculate and display total price
        const totalPrice = orderDetails.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        const totalElement = document.createElement('p');
        totalElement.innerHTML = `<strong>Total: $${totalPrice.toFixed(2)}</strong>`;
        orderSummaryDiv.appendChild(totalElement);
    } else {
        orderSummaryDiv.innerHTML = '<p>No items in your order.</p>';
    }

    // Display shipping information
    const shippingInfoDiv = document.getElementById('shipping-info');
    if (orderDetails) {
        shippingInfoDiv.innerHTML = `
            <p>Address: ${orderDetails.address}</p>
            <p>City: ${orderDetails.city}</p>
            <p>ZIP Code: ${orderDetails.zip}</p>
        `;
    } else {
        shippingInfoDiv.innerHTML = '<p>No shipping information available.</p>';
    }
});

// Function to return to the home page
function goToHomePage() {
    window.location.href = 'index.html'; // Redirect to the home page
}