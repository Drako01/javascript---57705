// console.log("Funcion sinconica 1")
// setTimeout( // Funcion
//     ()=>{console.log("Funcion asinconica 1")} // Funcion de Call Back
// , 0) // Tiempo en Milisegundos
// // Cola se llama Queue
// console.log("Funcion sinconica 2")


// setInterval(()=>{
//     console.log("Funcion sinconica 1")
// }, 1000)

// console.log("Iniciar");

// const fin = setTimeout(()=>{
//     console.log("Final");
// }, 2000);

// clearTimeout(fin);

// const eventoAFuturo = (pasarDeNivel) => {
//     return new Promise((resolve, reject) => {
//         pasarDeNivel ? resolve("Promesa Cumplida") : reject("Promesa Rechazada");        
//     })
// }
// // pasarDeNivel === true
// // pasarDeNivel === false
// // console.log(eventoAFuturo(true));
// // console.log(eventoAFuturo(false));

// eventoAFuturo(true)
//     .then((res) =>{
//         console.log(res, " Usted paso al Nivel 2");
//     })
//     .catch((error) =>{
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Chau Mundo");
//     })

// eventoAFuturo(false)
//     .then((res) =>{
//         console.log(res);
//     })
//     .catch((error) =>{
//         console.error(error);
//     })
//     .finally(() => {
//         console.log("Chau Mundo");
//     })


// Ajax y Fetch

/**
 * ¿Qué es una URL?

Uniform Resource Locators:
*************************
Junto con el Hipertexto y HTTP, las URL son uno de los conceptos claves de la Web. Es el mecanismo usado por 
los navegadores para obtener cualquier recurso publicado en la web.

URL significa Uniform Resource Locator (Localizador de Recursos Uniforme). Una URL no es más que una dirección 
que es dada a un recurso único en la Web. En teoria, cada URL válida apunta a un único recurso. Dichos recursos 
pueden ser páginas HTML, documentos CSS, imagenes, etc. En la practica, hay algunas excepciones, siendo la más 
común una URL apuntando a un recurso que ya no existe o que ha sido movido. Como el recurso representado por la 
URL y la URL en si son manejadas por el servidor Web, depende del dueño del servidor web manejar ese recurso y 
su URL asociada adecuadamente.    
 */


// Ruta Absoluta
// const lista = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts/")
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//                             <h3>${element.id}</h3>
//                             <h4>${element.title}</h4>
//                             <p>${element.body}</p>
//                             `
//             lista.appendChild(li);            
//         });
//     })

// fetch("https://jsonplaceholder.typicode.com/posts/", 
//     {
//         method: 'POST',
//         body: JSON.stringify(
//             {
//                 title: "Nuevo Objeto",
//                 body: "Posteo de Prueba",
//                 userId: 1
//             }
//         ),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// fetch("https://jsonplaceholder.typicode.com/posts/1", 
//     {
//         method: 'PUT',
//         body: JSON.stringify(
//             {
//                 title: "Nuevo Objeto",
//                 body: "Posteo de Prueba",
//                 userId: 1
//             }
//         ),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data));
    

// fetch("https://jsonplaceholder.typicode.com/posts/1", 
//     {
//         method: 'DELETE',       
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data));

// Rutas relativas

const cardsProd = document.getElementById('cards');

const peticionA = async () => {
    const respuesta = await fetch('/productos.json');
    const datos = await respuesta.json();
    const data = await datos
    for( item of data ) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.imagen} alt=${item.nombre} />
                <div class="card-body">
                    <h5 class="card-title">${item.nombre}</h5>
                    <p class="card-text">Descripcion: ${item.descripcion}</p>
                    <p class="card-text">Precio: $${item.precio}.-</p>
                    <p class="card-text">Stock: ${item.stock}</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    }
}

// peticionA();

// Ruta Absoluta
const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung');
    const datos = await respuesta.json();
    const data = await datos.results
    for( item of data ) {
        const card = document.createElement('div');
        card.innerHTML = `
            <div class="card" style="width: 18rem; height: 32rem;">
                <img class="card-img-top" src=${item.thumbnail} alt=${item.title} />
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">Proveedor: ${item.official_store_name}</p>
                    <p class="card-text">Precio: $${item.price}.-</p>
                    <a href="#" class="btn btn-success">Comprar</a>
                </div>
            </div>
        `
        cardsProd.appendChild(card);
    }
}

peticionML();