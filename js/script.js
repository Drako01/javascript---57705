// const PI = Math.PI;
// console.log(PI);

// const E = Math.E;
// console.log(E);

// console.log(Math.max(12, 5, -89, 55, 787, 1, -56));
// console.log(Math.min(12, 5, -89, 55, 787, 1, -56));

// const PI = Math.PI; // 3.141592653589793
// const A = 5.8005;
// const B = -9.00265;
// const C = 9.5;

// // CEIL
// console.log( Math.ceil(PI)); // 4
// console.log( Math.ceil(A)); // 6
// console.log( Math.ceil(B)); // -9
// console.log( Math.ceil(C)); // 10

// // FLOOR
// console.log( Math.floor(PI)); // 3
// console.log( Math.floor(A)); // 5
// console.log( Math.floor(B)); // -10
// console.log( Math.floor(C)); // 9

// // ROUND
// console.log( Math.round(PI)); // 3
// console.log( Math.round(A)); // 6
// console.log( Math.round(B)); // -9
// console.log( Math.round(C)); // 10

// Random
// console.log(Math.random()); // Genera nros aleatorios entre 0 y 1

// console.log(Math.random() * 10); // Genera nros aleatorios entre 0 y 10

// console.log(Math.random() * 100); // Genera nros aleatorios entre 0 y 100

// console.log(Math.random() * 10 + 10 ); // Genera nros aleatorios entre 10 y 20

// const gen = () => {
//     return console.log(Math.round(Math.random() * 100));
// }

// gen();

// Square Root // Raiz Cuadrada
// console.log(Math.sqrt(9)); // 3
// console.log(Math.sqrt(4)); // 2
// console.log(Math.sqrt(81)); // 9
// console.log(Math.sqrt(Math.random() * 100)); // Aleatorio
// console.log(Math.sqrt(-81)); // NaN

// POW // Potencia
// console.log(Math.pow(9,2)) // 9 al Cuadrado = 81
// console.log(Math.pow(3,4)) // 3 a la Cuarta = 81
// console.log(Math.pow(36, 1/2)) // Raiz cuadra de 36 = 6

// console.log(parseInt(Math.pow(-27, 1/3))) // Raiz cubica de -27 = -3
// console.log(parseInt(Math.pow(-81, 1/2))) // NaN
// console.log(Math.cbrt(-27)); // Raiz Cubica

// function raizCubica(numero) {
//     if(numero < 0) {
//         return console.log(-Math.pow(Math.abs(numero), 1/3));
//     } else {
//         return console.log(Math.pow(numero, 1/3));
//     }
// }

// raizCubica(-27);
// raizCubica(-81);
// raizCubica(144);

// --------------------------------

// console.log( new Date() ); // Tue May 28 2024 20:12:39 GMT-0300 (hora estándar de Argentina)

// // Metodo Constructor
// console.log( new Date(2004, 3, 20) );
// console.log( new Date(2024, 11, 24, 23, 59, 59) ); // Tue Dec 24 2024 23:59:59 GMT-0300 (hora estándar de Argentina)

// console.log( new Date("December 24, 2024 23:59:59") ); // Tue Dec 24 2024 23:59:59 GMT-0300 (hora estándar de Argentina)

// const HOY = new Date();
// console.log(HOY.getFullYear()) // 2024
// console.log(HOY.getMonth()) // 4 = Mayo
// console.log(HOY.getDay()) // 2 = Martes

// console.log(HOY);
// console.log(HOY.toDateString()); // Tue May 28 2024
// console.log(HOY.toLocaleString()); // 28/5/2024, 20:32:26
// console.log(HOY.toLocaleDateString()); // 28/5/2024
// console.log(HOY.toTimeString()); // 20:32:26 GMT-0300 (hora estándar de Argentina)

// Diferencias entre fechas
// const HOY = new Date(2024, 4, 28);
// const NAVIDAD = new Date("December 25, 2024 00:00:00");
// // console.log(HOY);
// // console.log(NAVIDAD);

// const DIFERENCIA = NAVIDAD - HOY;
// // Diferencia en Milisegundos 
// console.log(DIFERENCIA); // 18230400000 Milisegundos

// // Diferencia en Dias

// const MILISEGUNDOS_DIA = 60 * 60 * 24 * 1000; // 86400000 Milisegundo de 1 dia
// console.log(MILISEGUNDOS_DIA);

// const DIFERENCIA_EN_DIAS = (NAVIDAD - HOY) / MILISEGUNDOS_DIA;
// console.log("Faltan " + DIFERENCIA_EN_DIAS + " para Navidad.!!");

// Calcular el tiempo de Ejecucion de un programa

const INICIO = new Date();
for(let i = 0; i < 10000; i++) {
    console.log("Un programa ejecutándose.!!");
}
const FINAL = new Date();

console.log("El proceso tardó: " + (FINAL - INICIO) + " de Milisegundos.!");
