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

const footer = document.getElementsByTagName('footer');
const parrafoFooter = document.createElement('p');
footer[0].appendChild(parrafoFooter)
parrafoFooter.innerHTML = 'CoderHouse | Comisión #57705'
