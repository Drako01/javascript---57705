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

miFormulario.addEventListener('submit', (e) => {
    e.preventDefault();
    divContact.appendChild(textContact);   
    textContact.innerHTML = `La Edad de ${nombreForm.value} es: ${edadForm.value} años.`;
})

// miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     //Cancelamos el comportamiento del evento
//     e.preventDefault();
//     //Obtenemos el elemento desde el cual se disparó el evento
//     let formulario = e.target
//     //Obtengo el valor del primero hijo <input type="text">
//     console.log(formulario.children[0].value); 
//     //Obtengo el valor del segundo hijo <input type="number"> 
//     console.log(formulario.children[1].value);  
// }
