console.log("Hola mundo 7 desde el Script1");


// Declaraciones de Variables Usando ES5

var palabra = "Hola"

console.log(palabra) // Imprimo la Variable var palabra

palabra = "como estan"

console.log(palabra) // Imprimo la Variable var palabra reasignada

var palabra // Declaro

palabra = "Mundo" // Asigno

console.log(palabra) // Imprimo otra Variable var palabra


// Declaraciones de Variables Usando ES6

let palabra0 = "Nueva Palabra"
console.log(palabra0) 
palabra0 = "como estan"
console.log(palabra0) 
let palabra1 = "Nueva Palabra3"
console.log(palabra1) 
palabra1 = "todo bien"
console.log(palabra1) 

// Declaracion de Constantes

const CODER = "CoderHouse"
console.log(CODER)

//CODER = "Hola" // LAS CONSTANTES NO SE PUEDEN REASIGNAR

// Malas Practicas
let nombre1 = "Alejandro"
let nombre2 = "Daniel"

let año = 2024

// Buenas Practicas (usando la notacion camelCase)
let primerNombre = "Alejandro";
let segundoNombre = "Daniel";

let nombreCompletoDeLaPersona = "Alejandro Daniel Di Stefano";

const MAYUSCULAS = "En Mayuscula"; // Declaro un String

let anio = 2024; // Declaro un Number

// Formas de delcarar Number
let numero1 = 200; // Entero

let numero2 = 20.5; // Flotante

const NUMERO = 200;

// Operaciones basicas

let a = 10;
let b = 2;

const RESULTADO1 = a + b;
const RESULTADO2 = a - b;
const RESULTADO3 = a * b;
const RESULTADO4 = a / b;
const BLANCO = " ";

console.log(RESULTADO1);
console.log(RESULTADO2);
console.log(RESULTADO3);
console.log(RESULTADO4);


// Para concatenar dos o mas Strings usamos el Operador de +
const NOMBRE_COMPLETO = primerNombre + " " + segundoNombre; // Concatenacion de Strings
console.log(NOMBRE_COMPLETO)

const NOMBRE_COMPLETO1 = primerNombre + BLANCO + segundoNombre; // Concatenacion de Strings
console.log(NOMBRE_COMPLETO1)

