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

const eventoAFuturo = (pasarDeNivel) => {
    return new Promise((resolve, reject) => {
        pasarDeNivel ? resolve("Promesa Cumplida") : reject("Promesa Rechazada");        
    })
}
// pasarDeNivel === true
// pasarDeNivel === false
// console.log(eventoAFuturo(true));
// console.log(eventoAFuturo(false));

eventoAFuturo(true)
    .then((res) =>{
        console.log(res, " Usted paso al Nivel 2");
    })
    .catch((error) =>{
        console.error(error);
    })
    .finally(() => {
        console.log("Chau Mundo");
    })

eventoAFuturo(false)
    .then((res) =>{
        console.log(res);
    })
    .catch((error) =>{
        console.error(error);
    })
    .finally(() => {
        console.log("Chau Mundo");
    })