const mainBody = document.querySelector('#main');
const boton = document.createElement('button');
boton.textContent = 'Click';
boton.type = 'button';
mainBody.appendChild(boton);
boton.style.backgroundColor = 'yellow';
boton.style.padding = '1rem';
boton.style.width = '6rem';
boton.style.margin = '2rem';
boton.style.fontSize = '1.2rem';

// Asignar Evento

// boton.addEventListener('click', respuestaAlClick);

// function respuestaAlClick() {
//     boton.style.backgroundColor = 'blue';
//     boton.style.color = 'white';
// }

// boton.addEventListener('click', () => {
//     // boton.style.backgroundColor = 'blue';
//     // boton.style.color = 'white';
//     alert("Boton apretado.!!");
// })

// boton.onclick = () => {alert("Boton apretado por Opcion 2.!!")};
boton.onclick = () => {
    cuerpo.classList.add('black');
    alert("Boton apretado.!!");
};


//CODIGO JS
let input1  = document.getElementById("nombre");
let input2  = document.getElementById("edad");
// input1.onchange = () => {console.log(input1.value)};
// input2.onchange = () => {console.log(input2.value)};



//CODIGO JS
input1.addEventListener('input', () => {
    console.log(input1.value)
})

let inicioH1 = document.getElementById('inicioH1');
console.log(inicioH1.innerText)

inicioH1.addEventListener('mouseover', () => {
    inicioH1.style.color = 'blue';
})

inicioH1.addEventListener('mouseout', () => {
    inicioH1.style.color = 'black';
})



boton.addEventListener('mouseover', () => {
    boton.style.color = 'yellow';
    boton.style.backgroundColor = 'blue';
})

boton.addEventListener('mouseout', () => {
    boton.style.color = 'blue';
    boton.style.backgroundColor = 'yellow';
})