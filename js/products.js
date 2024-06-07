// localStorage.setItem("string", "Hola gente de Coder desde Local.!!!");
// localStorage.setItem("booleano", true);
// localStorage.setItem("numeros", 1230);
// localStorage.setItem("array", [1,2,3,4]);

// let stringLocal = localStorage.getItem("string");
// console.log(stringLocal);

// console.log(localStorage.getItem("array"));
// console.log(localStorage.getItem("numeros"));

// sessionStorage.setItem("string", "Hola gente de Coder desde Session.!!!");
// sessionStorage.setItem("booleano", false);
// sessionStorage.setItem("numeros", 1231);
// sessionStorage.setItem("array", [1,2,3,5]);

// let stringSession = sessionStorage.getItem("string");
// console.log(stringSession);

// console.log(sessionStorage.getItem("array"));
// console.log(sessionStorage.getItem("numeros"));

//Con esto eliminamos elementos del Storage 
// localStorage.removeItem("array");
// localStorage.removeItem("numeros");
// Vaciamos el Storage
// localStorage.clear();

// for (let i = 0; i < localStorage.length; i++){
//     let clave = localStorage.key(i);
//     console.log("Clave: " + clave + " | Valor: " + localStorage.getItem(clave));
// }

/// JSON

// const producto = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 1080
// }
// const productoJSON = JSON.stringify(producto);
// const productoOBJECT = JSON.parse(productoJSON);

// console.log(producto); // Formato Objeto
// console.log(productoJSON); // Formato JSON
// console.log(productoOBJECT); // Formato OBJECT
// // localStorage.setItem("producto" , producto);
// localStorage.setItem("producto" , productoJSON);

// console.log(productoJSON.id);
// console.log(productoOBJECT.id);

// const productoRecuperadoDelLocal = JSON.parse(localStorage.getItem("producto"));
// console.log(productoRecuperadoDelLocal);

// const productos = [
//     {
//         id: 1,
//         nombre: "Azucar",
//         precio: 1080
//     },
//     {
//         id: 2,
//         nombre: "Yerba",
//         precio: 1500
//     },
//     {
//         id: 3,
//         nombre: "Dulce de Leche",
//         precio: 2800.55
//     },
// ]

// const guardarEnLocalSotrage = (key, value) => { localStorage.setItem(key, value)};

// for (const producto of productos) {
//     guardarEnLocalSotrage("Producto_" + producto.id, JSON.stringify(producto));
// }

// guardarEnLocalSotrage("productos", JSON.stringify(productos));
// console.log(localStorage.getItem("productos"));
// console.log(JSON.parse(localStorage.getItem("productos")));


//************************************************************************************* */

// Actividad en Clase - Crear Carrito completo
const products = [
    {id: 1, name: "Azucar", price: 1080},
    {id: 2, name: "Yerba", price: 1700},
    {id: 3, name: "Dulce de Leche", price: 2800},
    {id: 4, name: "Manteca", price: 980},
    {id: 5, name: "Azucar Impalpable", price: 1280},
    {id: 6, name: "Café", price: 4080},
]

let cart = loadCartFromLocalStorage();

function addToCart(productId, quantity) {
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error("Producto no encontrado");
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
});
