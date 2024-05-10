// let a;
// a = 0;
// console.log(a)
// a = a + 1;
// console.log(a)
// a = a + 1;
// console.log(a)
// a = a + 1;
// console.log(a)
// for(let i = 0;  i < 10;  i = i + 1){
//     console.log(i + " usando i = i + 1")
// }

/*
1er vuelta:
i = 0
console.log(i) = 0

2da vuelta:
i = 1
console.log(i) = 1
****
9na vuelta:
i = 9
console.log(i) = 9
*/

/**
 * i = i + 1 es lo mismo que decir i++
 */

// for(let i = 1;  i <= 10;  i++){
//     console.log(i + " usando i++")
// };

//let ingreseSuNombre = prompt("Ingrese su Nombre");

// Usando break
// for (let i = 0; i < 15; i++) {
//     if (i == 5) {        
//         break;
//     }
//     console.log("El nombre ingresado es: " + ingreseSuNombre + " " + i);
// };

// Usando continue
// for (let i = 0; i < 10; i++) {
//     if (i == 5) {        
//         continue;
//     }
//     console.log("El nombre ingresado es: " + ingreseSuNombre + " " + i);
// };

//let nombre = "Alejandro";
// console.log(nombre.length);
// for(let i = 1; i <= nombre.length ; i++){
//     console.log("Su nombre es: " + nombre + " iteracion Nro: " + i);
// }

// Ciclo While
// let i = 0; // Es una Variable Global
// while(i < 5){
//     console.log("Imprimiendo desde el While " + i)
//     i++
// };

// Ciclo do While
// do {
//     console.log("Imprimiendo desde el do While " + i)
//     i++
// } while(i <= 7);


// let a = 1; // Formato numerico
// let b = "1"; // Formato String

// let suma = a + b; // Da como resultado 11
// console.log(suma); // La operacion + Concatena

// let sumaParceada = parseInt(a) + parseInt(b); // Da como resultado 2
// console.log(sumaParceada);  // La operacion + Suma

// let ingreseUnNumeroA = prompt("Ingrese el 1er Numero");
// let ingreseUnNumeroB = prompt("Ingrese el 2do Numero");
// let resultado = parseInt(ingreseUnNumeroA) + parseInt(ingreseUnNumeroB);
// let resultadoFloat = parseFloat(ingreseUnNumeroA) + parseFloat(ingreseUnNumeroB);
// console.log(resultado);
// console.log(resultadoFloat);

// Switch

/*
 * Muestra un mensaje de alerta que indique si el usuario es 
 * menor de edad o mayor de edad, dependiendo de su 
 * edad ingresada.
*/

/*let edadIngresada = prompt("Ingrese su Edad: ");

if(edadIngresada >= 18){ //Condicion correcta para Mayor de edad
    alert("Su edad es de: " + edadIngresada + " Años, entonces es Mayor de Edad");
} else if (edadIngresada > 0 && edadIngresada < 18){ //La edad tiene que ser mayor a 0 Y menor a 18
    alert("Su edad es de: " + edadIngresada + " Años, entonces es Menor de Edad");
} else if(edadIngresada <= 0){ // Para edad Menor o Igual a 0
    alert("La Edad ingresada debe ser Mayor a 0 !!")
} else {
    alert("La Edad ingresada es Incorrecta!!!")
}
*/
// Ahora lo vamos a resolver usando un Switch
let edadIngresada;

do {
    edadIngresada = prompt("Ingrese su Edad o escriba 'ESC' para salir: ");

    if (edadIngresada !== "ESC") {
        edadIngresada = parseInt(edadIngresada); // Convertimos a número entero
        switch (edadIngresada) {
            case 18:
                console.log("Su edad es de: " + edadIngresada + " años, entonces es Mayor de Edad");
                break;
            case 17:
                console.log("Su edad es de: " + edadIngresada + " años, entonces es Menor de Edad");
                break;
            case 0:
                console.log("La Edad ingresada debe ser Mayor a 0 !!");
                break;
            default:
                console.log("La Edad ingresada es Incorrecta!!!")
                break;
        }
    }
} while (edadIngresada !== "ESC");

// let numero = parseInt(prompt("Ingrese un numero"))

// switch(numero) {
//     case  1:
//         console.log("El numero es Uno")
//         break;
//     case  2:
//         console.log("El numero es Dos")
//         break;
//     default:
//         console.log("El numero no es ni Uno ni Dos, es: " + numero)
//         break;
// }