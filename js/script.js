// Funciones de orden superior
//Analicemos este codigo:
/**
 * Se declara una variable que, a través de un iterador, 
 * va acumulando la suma del contador:
 */

// function sumarRango(inicio, fin) {
//     let total = 0;
//     for (let i = inicio; i <= fin; i++) {
//         total += i;
//     }
//     return total;
// }
// console.log(sumarRango(1, 100));
// console.log(sumarRango(1, 60));
// console.log(sumarRango(0, 160));


// function mayorQue(numero) {
//     return (numeroAComparar) => numeroAComparar > numero; // Retorna una Funcion Anonima
// }

// // const algo = 0;
// const mayorQueDiez = mayorQue(10); // let mayorQueDiez = (numeroAComparar) => numeroAComparar > 10;
// // const mayorQueDiez = (numeroAComparar) => numeroAComparar > numero; 
// console.log( mayorQueDiez(12) ); // numeroAComparar = 12 // true
// console.log( mayorQueDiez(8) ); // numeroAComparar = 8 // false

// function asignarOperacion(operacion){
//     if(operacion == "sumar") {
//         return (a, b) => a + b;
//     } else if (operacion == "restar") {
//         return (a, b) => a - b;
//     }
// }

// const funcionSumar = asignarOperacion("sumar"); // const funcionSumar = (a, b) => a + b;
// const funcionRestar = asignarOperacion("restar"); // const funcionRestar = (a, b) => a - b;

// console.log(funcionSumar(4, 5)); // 9
// console.log(funcionRestar(8, 3)); // 5

// Recibir una Funcion por parametro

// function porCadaElemento(myArray, myFuncion){
//     for ( const elemento of myArray ) { // Por cada elemento de myArray, ejecuta la funcion
//         myFuncion(elemento); // Esto se le aplique a cada elemento de myArray
//     }
// }

// const numeros = [1, 2, 3, 4, 5, 6];
// porCadaElemento(numeros, console.log); // Cuando paso una funcion como parametro no lleva ()
// // Los parentesis los lleva cuando la defino, o cuando la invoco o la llamo.

// let total = 0;
// function acumuladora(numero) {
//     total += numero;
// }
// porCadaElemento(numeros, acumuladora);
// console.log("Total Acumulado: " + total);

// const numerosDuplicados = [];

// porCadaElemento(numeros, (elemento) => {
//     numerosDuplicados.push(elemento * 2);
// })

// console.log(numerosDuplicados.join(", "));


// For Each
// numerosDuplicados.forEach( (numero) => {
//     console.log(numero);
// })

// let nuevoArray = [];

// numerosDuplicados.forEach( (numeros) => {
//     nuevoArray.push(numeros - 1);
// })

// console.log(nuevoArray);

// Find
const cursos = [
    {nombre: "JavaScript", cantAlumnos: 120},
    {nombre: "JavaScript", cantAlumnos: 130},
    {nombre: "React", cantAlumnos: 90},
    {nombre: "PHP", cantAlumnos: 60}
]
console.log(cursos);

const resultadoFind = cursos.find( (elemento) => elemento.nombre === "JavaScript");
console.log(resultadoFind);
// Filter
const resultadoFilter = cursos.filter( (elemento) => elemento.nombre.includes("JavaScript"));
console.log(resultadoFilter);

// Some
const resultadoSome = cursos.some( (elemento) => elemento.nombre === "JavaScript");
const resultadoSomeFalse = cursos.some( (elemento) => elemento.nombre === "Javascript");
console.log(resultadoSome);
console.log(resultadoSomeFalse);

// Map
const resultadoMap = cursos.map((elemento) => elemento.nombre );
console.log(resultadoMap);

const actualizarCantidadDeAlumnos = cursos.map( (elemento) => {
    return {
        nombreNuevo: elemento.nombre,
        cantidadNueva: elemento.cantAlumnos + 20
    }
});

console.log(actualizarCantidadDeAlumnos);

// Reduce
const numeros = [1, 2, 3, 4, 5, 6];

const totalEnNumeros = numeros.reduce((acumulador, elemento) => acumulador + elemento, 10 );
console.log(totalEnNumeros);

// Sort
const numerosDesordenados = [102, 24, 43, 4, 15, 96];
console.log(numerosDesordenados);
numerosDesordenados.sort((a, b) => a - b ); // Forma Ascendente
console.log(numerosDesordenados);
numerosDesordenados.sort((a, b) => b - a ); // Forma Descendente
console.log(numerosDesordenados);

// Sort con Objetos
const cursosConSort = [
    {nombre: "JavaScript", cantAlumnos: 120},
    {nombre: "JavaScript", cantAlumnos: 130},
    {nombre: "React", cantAlumnos: 90},
    {nombre: "PHP", cantAlumnos: 60}
]

cursosConSort.sort((a, b) => {
    if(a.cantAlumnos > b.cantAlumnos) {
        return 1;
    } 
    if( a.cantAlumnos < b.cantAlumnos ) {
        return -1;
    }
    return 0;
})

console.log(cursosConSort);