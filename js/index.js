const cuerpo = document.body;
const tituloH1 = document.getElementById('titulo');
// console.log(tituloH1);
// console.log(tituloH1.innerText);

const contenedores = document.getElementsByClassName('contenedor');
// console.log(contenedores);
// console.log(contenedores[0]);
// console.log(contenedores[1]);
// console.log(contenedores[2]);

// console.log(contenedores[0].innerText);
// console.log(contenedores[1].innerText);
// console.log(contenedores[2].innerText);
console.log(contenedores[2].innerHTML);

const secciones = document.getElementsByTagName('section');
// console.log(secciones);
// console.log(secciones[0]);
// console.log(secciones[1]);
// console.log(secciones[0].innerText);
// console.log(secciones[1].innerText);

// for ( const contenedor of contenedores) {
//     console.log(contenedor.innerHTML);
// }
console.log(tituloH1.innerText);
tituloH1.innerText = "Hola Coders..!!";
console.log(tituloH1.innerText);

contenedores[2].innerHTML = "<h5>Hola Mundo</h5><p>Hola a todos</p>";
console.log(contenedores[2].innerHTML);

contenedores[0].classList.add('clase_nueva');

const claseNueva = document.getElementsByClassName('clase_nueva');
claseNueva[0].style.color = 'blue';

claseNueva[0].id = 'ramiro';

cuerpo.style.backgroundColor = '#ddd';
// cuerpo.style.padding = '5rem';

const articuloDiv = document.createElement('article');
articuloDiv.id = 'articulo';
articuloDiv.classList.add('notas', 'texto');

cuerpo.appendChild(articuloDiv); // Siempre lo agrega al final.
articuloDiv.remove(); // Eliminamos el elemento

document.getElementById('nombre').value = "Marcos";
document.getElementById('edad').value = 30;

const cabecera = document.getElementById('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Products", "Contact"];

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}
cabecera.style.backgroundColor = '#c2c2c2';

const productos = [
        {
            id: 1,
            nombre: 'Azucar',
            precio: 1050.56
        },
        {
            id: 2,
            nombre: 'Yerba',
            precio: 950.56
        },
        {
            id: 3,
            nombre: 'Tomate',
            precio: 405.65
        },
        {
            id: 4,
            nombre: 'Levadura',
            precio: 200
        },
]

const divProducto = document.createElement('div');
cuerpo.appendChild(divProducto);

for ( const producto of productos) {
    let literal = `ID: ${producto.id} - Nombre: ${producto.nombre} | Precio: $${producto.precio}.-`;
    const textoH4 = document.createElement('h4');
    textoH4.innerHTML = literal;
    divProducto.appendChild(textoH4);
}


let parrafo = document.querySelector('#articulo__ p');
let divParrafo = document.querySelector('#articulo__');
let parrafoPorClase = document.querySelector('.parrafo__');
console.log(parrafo)
console.log(divParrafo)
console.log(parrafoPorClase)


let contenedoresConQuery = document.querySelectorAll('.contenedor');
console.log(contenedoresConQuery);
