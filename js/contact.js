let miFormulario = document.getElementById("formulario");
const nombreForm = document.getElementById('nombreForm');
const edadForm = document.getElementById('edadForm');
const mainContact = document.getElementById('mainContact');
const divContact = document.createElement('div');
const textContact = document.createElement('h4');

// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault(); // Evitar el evento Submit por defecto - Que es Actualizar la Pagina.
//     console.log("Formulario Enviado");    
// }
mainContact.appendChild(divContact);

// miFormulario.addEventListener('submit', (e) => {
//     e.preventDefault();
//     divContact.appendChild(textContact);
//     textContact.innerHTML = `La Edad de ${nombreForm.value} es de: ${edadForm.value} años.`;
// })

miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target
    divContact.appendChild(textContact);
    textContact.innerHTML = `La Edad de ${formulario.children[1].value} es 
                                de: ${formulario.children[3].value} años.`;
    
}
