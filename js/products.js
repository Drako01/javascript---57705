const products = [
    {id: 1, name: "Azucar", price: 1080},
    {id: 2, name: "Yerba", price: 1700},
    {id: 3, name: "Dulce de Leche", price: 2800},
    {id: 4, name: "Manteca", price: 980},
    {id: 5, name: "Azucar Impalpable", price: 1280},
    {id: 6, name: "Café", price: 4080},
]

let cart = loadCartFromLocalStorage();
const errorCarritoDiv = document.getElementById('error_carrito');
errorCarritoDiv.style.color = 'red';
function mandarMjeDeError(productId){
    errorCarritoDiv.innerHTML = `<p>Producto con ID: ${productId} no encontrado</p>`;    
}
function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        mandarMjeDeError(productId)
        return;
    }

    const cartItem = cart.find(item => item.id === productId);

    if (cartItem) {
        cartItem.quantity += quantity;
        cartItem.totalPrice = cartItem.quantity * product.price;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            totalPrice: quantity * product.price
        });
    }

    saveCartToLocalStorage();
    renderCart();
}

function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Limpiar la lista de productos
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id}, 1)" class="button_grey">Agregar al Carrito</button>
        `;
        productList.appendChild(productDiv);
    });
}

function renderCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.innerHTML = `
            <p>ID: ${item.id}, Nombre: ${item.name}, Cantidad: ${item.quantity}, Precio Total: $${item.totalPrice}</p>
        `;
        cartDiv.appendChild(cartItemDiv);
    });
}

function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : [];
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderCart();
    // addToCart(999, 1);
});

