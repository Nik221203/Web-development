let cart = [];
let cartCount = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice, quantity: 1 });
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
    alert(`${productName} has been added to your cart!`);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTable = document.getElementById('cart-items');
    let total = 0;

    cartItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>${item.quantity}</td>
            <td>$${(item.price * item.quantity).toFixed(2)}</td>
        `;
        cartTable.appendChild(row);
        total += item.price * item.quantity;
    });

    document.getElementById('total-price').innerText = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    alert("Checkout functionality is not implemented yet.");
}

// Load cart items when the cart page is opened
if (window.location.href.includes('cart.html')) {
    loadCart();
}
