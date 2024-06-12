// let temperatura = 28;

// if(temperatura > 24) {
//     console.log("Hace calor")
// } else {
//     console.log("Esta templado")
// }

// Operadores Ternarios
// condicion ? caso1 : caso2

// temperatura > 24 ? console.log("Hace calor") : console.log("Esta templado") 

// const usuario = {
//     nombre: "Benicio",
//     edad: 20
// }

// const permiso;

// if( usuario.edad >= 18) {
//     permiso = true
// } else {
//     permiso = false
// }

// if(permiso) {
//     console.log("Puede consumir Alcohol")
// } else {
//     console.log("NO Puede consumir Alcohol")
// }

// const permiso = (usuario.edad >= 18) ? true : false; // Declaro e inicializo la variable
// permiso ? console.log("Puede consumir Alcohol") : console.log("NO Puede consumir Alcohol");


// const carrito = [];

// if(carrito.length === 0){
//     console.log("Carrito Vacio")
// };
// Operador Logico && o AND

// carrito.length === 0 && console.log("Carrito Vacio");

// // if (!product) {        
// //     return console.error("Producto no encontrado");
// // }

// !product && console.error("Producto no encontrado");

// Operador Logico || o OR

// console.log( 0 || "Falsy")  // Falsy
// console.log( -1 || "Falsy")  // 40
// console.log( null || "Falsy")  // Falsy
// console.log( undefined || "Falsy")  // Falsy
// console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
// console.log( "" || "Falsy")  // Falsy
// console.log( NaN || "Ingreso un Numero equivocado")  // Falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy")  // Falsy

// // Operador Logico ?? o Nullish
// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const usuario1 = {
//         nombre: "Benicio",
//         edad: 20
//     }

// const usuario2 = null;
// // console.log(usuario1);
// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// const carrito = localStorage.getItem('cart') || []; 
// const carrito1 = localStorage.getItem('cart') ?? []; // Si de antemando espero una respuesta null o undefined
// console.log(carrito);
// console.log(carrito1);


//Acceso condicional a un objeto

// const usuario1 = {
//     nombre: "Benicio",
//     edad: 20,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En Curso"
//     }
// }
// const usuario2 = null;

// console.log(usuario1?.nombre || "El usuario no existe");
// console.log(usuario2?.nombre || "El usuario no existe");

// console.log(usuario1?.cursos?.desarrolloWeb || "La Propiedad no existe");
// console.log(usuario2?.cursos?.desarrolloWeb || "La Propiedad no existe");
// console.log(usuario1?.cursos?.react || "La Propiedad no existe");
// console.log(usuario1?.cursos?.desarrolloWeb === "Aprobado" || false);

// Desestructuración
// const usuario1 = {
//     id: 1,
//     nombre: "Benicio",
//     edad: 20,
//     cursos: {
//         desarrolloWeb: "Aprobado",
//         javascript: "En Curso"
//     }
// }


// const producto1 = {
//     id: 1,
//     nombre: "Azucar",
//     precio : 1080
// }
// let nombre = usuario1.nombre;
// let edad = usuario1.edad;
// console.log(nombre);
// console.log(edad);
// let { prop1, prop2 } = objeto
// Alias
// const {id: id_usuario, edad: edad_usuario , nombre: nombre_usuario ,  cursos: {desarrolloWeb, javascript} } = usuario1;
// const {id: id_producto, nombre: nombre_producto, precio} = producto1;
// console.log(nombre_usuario);
// console.log(nombre_producto);
// console.log(edad_usuario);
// console.log(desarrolloWeb);
// console.log(javascript);


// Desestructuración en parámetros
const usuario1 = {
    id: 1,
    nombre: "Benicio",
    edad: 20,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En Curso"
    }
}
const usuario2 = {
    id: 2,
    nombre: "Ignacio",
    edad: 33,
    cursos: {
        desarrolloWeb: "Aprobado",
        javascript: "En Curso"
    }
}

// Recibe por parametro un Objeto a desestructurar
// const desectructurarObjetos = (objeto) => {
//     const { id, nombre, edad } = objeto
//     console.log(id, nombre, edad);
// }

// desectructurarObjetos(usuario1);
// desectructurarObjetos(usuario2);

// const desestructurarAtributos = ({ id, nombre, edad }) => {
//     console.log(id, nombre, edad);
// }

// desestructurarAtributos(usuario1);
// desestructurarAtributos(usuario2);

//Desestructuración de arrays

const nombresDePersonas = ["Alejandro", "Benicio", "Rodrigo", "Damian", "Johan", "Valentin"];
// console.log(nombresDePersonas[0]);
// console.log(nombresDePersonas[1]);
// console.log(nombresDePersonas[2]);
// console.log(nombresDePersonas[3]);
// console.log(nombresDePersonas[4]);
// console.log(nombresDePersonas[5]);

// const [a, b, c, d, e, f] = nombresDePersonas;
// console.log(a, b, c, d, e, f)
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

const [ ,,,, a, b] = nombresDePersonas;
console.log(a);
console.log(b);