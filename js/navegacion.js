const cabecera = document.getElementById('header');
const navegacion = document.createElement('div'); // Cambiado de 'navbar' a 'div'
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cabecera.appendChild(navegacion);
navegacion.appendChild(nav);
nav.appendChild(ul);
navegacion.className = 'navbar';

const links = ["Index", "Products", "Contact"];
const liImagen = document.createElement('li');
const img = document.createElement('img');
const ORIGEN = document.createElement('a');
ORIGEN.href = '/';
ORIGEN.appendChild(img);
img.src = 'img/logo.png';
img.alt = 'CoderHouse';

liImagen.appendChild(ORIGEN);
ul.appendChild(liImagen);

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`;
    ul.appendChild(li);
}

cabecera.style.backgroundColor = '#c2c2c2';

const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
const TIME = new Date().getFullYear();
footer[0].appendChild(parrafoFooter);
parrafoFooter.innerHTML = 'CoderHouse - ' + TIME + ' | Comisión #57705';
