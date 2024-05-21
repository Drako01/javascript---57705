// // Arrays
// const arrayVacio = [];

// // Tipo de datos dentro del Array

// const arrayNumerico = [1, 2, 3, 4, 5, 5.5]; // Tipo Numerico

// const arrayConLetras = ['a', 'b', 'c']; // Tipo caracter

// // const arrayConString = ["Hola", "mundo", "Como", "va?"]; // Tipo String

// const arrayBoolean = [true, false, true]; // Tipo Booleano

// // const arrayMixto = ['a', 23, "Hola", true]; // Tipo mixto

// const arrayObjetos = [
//     {nombre: "Producto1", cantidad: 5},
//     {nombre: "Producto2", cantidad: 8}
// ]; // Tipo Objetos

const arrayMixtoConObjetos = ['a', 23, "Hola", true, 
{nombre: "Producto3", cantidad: 8}]; // Tipo mixto Con Objetos

// console.log(arrayNumerico[0]);
// console.log(arrayObjetos[1]);

// for (let index = 0; index < 6; index++) {
//     //alert(arrayNumerico[index]);
// }

// for (let index = 0; index < 5; index++) {
//     //alert(arrayMixtoConObjetos[index]);
// }
//console.log(arrayNumerico.length);
//console.log(arrayMixtoConObjetos.length);

// for (let index = 0; index < arrayMixtoConObjetos.length; index++) {
//     console.log(arrayMixtoConObjetos[index]);
// }

// Agregar elementos a un Array
// arrayMixto.push("Al final"); // Agrega un elemento al Array al final
// console.log(arrayMixto);
// arrayMixto.unshift("Al principio"); // Agrega un elemento al Array al principio
// console.log(arrayMixto);
// arrayMixto.pop();
// console.log(arrayMixto);// Elimina el elemento al Array del final
// arrayMixto.shift();
// console.log(arrayMixto);// Elimina el elemento al Array del principio
// arrayMixto.splice(1, );
//console.log(arrayMixto);
// console.log(arrayConString);
// arrayConString.splice(2, 2);
// console.log(arrayConString);
// arrayConString.splice(1, 2);
// console.log(arrayConString);

// Uso de join
// const arrayConString = ["Hola", "mundo", "Como", "va?"];
// console.log( arrayConString.join(", "));
// console.log( arrayConString.join(" "));
// console.log( arrayConString.join("* "));
// console.log( arrayConString.join(" Una Frase "));

// Uso de concat
// const arrayConString = ["Hola", "mundo", "Como", "va?"];
// const arrayMixto = ['a', 23, "Hola", true];
// console.log(arrayConString.concat(arrayMixto));

// Uso de slice
// const nuevoArrayConString = arrayConString.slice(0, 2);
// console.log(nuevoArrayConString);
// console.log(nuevoArrayConString.indexOf("Hola"));
// console.log(nuevoArrayConString.indexOf("mundo"));
// console.log(nuevoArrayConString.indexOf("Mundo"));
// console.log(nuevoArrayConString.indexOf("Como"));
// // Uso de include
// console.log(nuevoArrayConString.includes("Hola"));
// console.log(nuevoArrayConString.includes("mundo"));
// console.log(nuevoArrayConString.includes("Mundo"));
// console.log(nuevoArrayConString.includes("Como"));

// Uso de reverse
// console.log(arrayConString);
// console.log(arrayConString.reverse());

// const arrayObjetos = [
//     {nombre: "Producto1", cantidad: 5},
//     {nombre: "Producto2", cantidad: 8}
// ];

// arrayObjetos.push({nombre: "Producto3", cantidad: 58});

// console.log(arrayObjetos);
// const productos = [
//     { id: 1, nombre: "Arroz" },
//     { id: 2, nombre: "Fideo" },
//     { id: 3, nombre: "Pan" }
// ];

// for (const index of productos) {
//     console.log("El ID es: " + index.id);
//     console.log("El Nombre del Producto es: " + index.nombre);
//     //console.log(index);
// }

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }

    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const carrito = [];

carrito.push(new Producto(1, "Arroz", 1000.5));
carrito.push(new Producto(2, "Azucar", 1200.5));
carrito.push(new Producto(3, "Leche", 850));
console.log(carrito);

for (const porCadaProducto of carrito ) {
    porCadaProducto.sumarIva();
}