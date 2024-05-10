/* Ejercicio 10 - Clase 02
    Utilizando operadores lógicos, verifica 
    si un número ingresado por el usuario es divisible tanto por 2 como por 3.
*/

// let numeroIngresado = parseInt(prompt("Ingrese un numero:"));

// if(numeroIngresado % 2 === 0 && numeroIngresado % 3 === 0){
//     console.log("El numero " + numeroIngresado + " es divisible por 2 y por 3 a la vez.!");
// } else {
//     console.log("El numero " + numeroIngresado + " NO es divisible por 2 y por 3 a la vez.!");
// }

/* Ejercicio 20 - Clase 02
 * Pide al usuario que ingrese tres números utilizando prompt, luego verifica si 
 * la suma de los dos primeros números es igual al tercer número e imprime un mensaje correspondiente.
 */

// let numero1 = parseInt(prompt("Ingrese el 1er numero:"));
// let numero2 = parseInt(prompt("Ingrese el 2do numero:"));
// let numero3 = parseInt(prompt("Ingrese el 3er numero:"));
// if(numero1 + numero2 === numero3){
//     console.log("La suma de los 2 primeros es igual al tercero.! Ambos suman: " + (numero1 + numero2));
// } else {
//     console.log("La suma de los 2 primeros NO es igual al tercero.! Ambos suman: " 
//     + (numero1 + numero2) + ", y Deberia sumar: " + numero3);
// }

/**
 * Ejercicios Adicionales

13. Pide al usuario que ingrese un número utilizando `prompt`, 
    luego verifica si es un número primo e imprime un mensaje correspondiente.
 */

// let numeroIngresado = parseInt(prompt("Ingrese un numero para verificar si es o no Primo:"));
// let esPrimo = true;

// for(let i = 2; i < numeroIngresado; i++){
//     if(numeroIngresado % i === 0){
//         esPrimo = false;
//         break;
//     }
// }

// if(esPrimo){
//     console.log("El numero " + numeroIngresado + " es Primo");
// } else {
//     console.log("El numero " + numeroIngresado + " NO es Primo");
// }


/** Ejemplo:
 * Ingreso 4
 * 
 * 2 < 4
 * 4 % 2 === 0?
 * esPrimo = false
 * 
 * ---------------
 * Ingreso 7
 * 
 * 2 < 7
 * 7 % 2 === 0
 * esPrimo = true 
 */

/** Ejercicio 16 - Clase 03
 * Utiliza un bucle `do while` para imprimir en la consola los números impares del 1 al 25.
 */

// let numeroParaVerificarQueSeaImpar = 1;
// do {
//     if (numeroParaVerificarQueSeaImpar % 2 !== 0) {  // Verifico que no sea Par
//         console.log(numeroParaVerificarQueSeaImpar); }
//         numeroParaVerificarQueSeaImpar++;
// } while (numeroParaVerificarQueSeaImpar <= 25);


/** Ejercicio 17 - Clase 03
 * Pide al usuario que ingrese un día de la semana utilizando `prompt`. Utiliza una declaración 
 * `switch` para imprimir en la consola si es un día laboral o un día de descanso.
 */

// let ingreseUnDia = prompt("Ingrese un dia de la semana: ")

// //console.log(ingreseUnDia.toLowerCase())
// switch(ingreseUnDia.toLowerCase()) { // Sin importar como se ingrese el String, lo convierte a minuscula
//     case "lunes":
//     case "martes":
//     case "miercoles":
//     case "jueves":
//     case "viernes":
//         console.log("Es un dia laboral")
//         break;
//     case "sabado":
//     case "domingo":
//         console.log("Es un dia de Descanso")
//         break;
//     default:
//         console.log("Dia invalido.!!")
//         break;
// }