let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const edadForm = document.getElementById('edadForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');

mainContact.appendChild(divContact);

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    divContact.appendChild(textContact);
    textContact.innerHTML = `La Edad de ${formulario.children[1].value} es 
                                de: ${formulario.children[3].value} años.`;
    
}
