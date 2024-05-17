// Objetos en JS
// let nombre = "Marcos";
// let edad = 18;
// let colorDeOjos = "Azules";
// let altura = 1.78;
// let estadoCivil = "Soltero";
// console.log(nombre);
// console.log(edad);



//Vamos a armar un Objeto
// const marcos = {
//     // key: "value"
//     nombre: "Marcos",
//     edad: 18, 
//     colorDeOjos: "Azules", 
//     altura: 1.78,
//     estadoCivil: "Soltero"
// };

// console.log("Marcos: ", marcos);

// console.log(marcos.nombre);
// console.log(marcos["edad"]);
// console.log(marcos.colorDeOjos);
// console.log(marcos.altura);
// console.log(marcos.estadoCivil);

// console.log(marcos["nombre"]);
// console.log(marcos.edad);
// console.log(marcos["colorDeOjos"]);
// console.log(marcos["altura"]);
// console.log(marcos["estadoCivil"]);

// marcos.estadoCivil = "Casado";
// console.log("Marcos: ", marcos);
// marcos["nombre"] = "Marcos Mellebovsky"
// console.log("Marcos: ", marcos);
// marcos.edad = 19;
// console.log("Marcos: ", marcos);

//Constructores
// function Persona(nombre, edad, colorDeOjos, altura, estadoCivil) {
//     this.nombre = nombre;
//     this.edad = edad;
//     this.colorDeOjos = colorDeOjos;
//     this.altura = altura;
//     this.estadoCivil = estadoCivil;
// }

// // Vamos a hacer una Instancia del Objeto Persona
// // ¿Como lo hacemos? Usando new
// const ernesto = new Persona("Ernesto", 36, "Marrones", 1.73, "Es Complicado");
// console.log("Ernesto: ", ernesto);
// const victoria = new Persona("Victoria", 32, "Marrones", 1.63, "Noviazgo")
// console.log("Victoria: ", victoria);

// Construccion Literal de un Objeto
// function PersonaLiteral(literal) {
//     this.nombre = literal.nombre;
//     this.edad = literal.edad;
//     this.colorDeOjos = literal.colorDeOjos;
//     this.altura = literal.altura;
//     this.estadoCivil = literal.estadoCivil;
// }
// const marcos = new PersonaLiteral({
//     nombre: "Marcos",
//     edad: 18, 
//     colorDeOjos: "Azules", 
//     altura: 1.78,
//     estadoCivil: "Soltero"
// })
// console.log("Marcos: ", marcos);

// Diferencia entre Funcion y Metodo
// Funcion que retorna algo
// function hola() {
//     return console.log("Hola");
// }


// Metodo Constructor (Solo el Metodo Constructor empieza con Mayuscula)
// function PersonaLiteral(literal) {
//     this.nombre = literal.nombre;
//     this.edad = literal.edad;
//     this.colorDeOjos = literal.colorDeOjos;
//     this.altura = literal.altura;
//     this.estadoCivil = literal.estadoCivil;
// }

// Objeto String
// let nombre = new String("Hola");
// console.log(nombre)

// let nombreBasico = "Hola Mundo";
// console.log(nombreBasico)
// console.log(nombreBasico.length) // length es un metodo del Objeto String

// console.log(nombreBasico.toLowerCase())
// console.log(nombreBasico.toUpperCase())

// function Persona(nombre, edad, colorDeOjos, altura, estadoCivil) {
//     // Atributos
//     this.nombre = nombre;
//     this.edad = edad;
//     this.colorDeOjos = colorDeOjos;
//     this.altura = altura;
//     this.estadoCivil = estadoCivil;
//     // Metodo del Objeto
//     this.saludar = function () {
//         console.log("Hola mi Nombre es: " + this.nombre)
//     }
// }

// const victoria = new Persona("Victoria", 32, "Marrones", 1.63, "Noviazgo")
// console.log("Victoria: ", victoria);
// victoria.saludar();

// // Operador IN y FOR...IN
// console.log(victoria.nombre)
// // Usando IN (Me indica si existe la Clave en el Objeto)
// console.log("nombre" in victoria);
// console.log("apellido" in victoria);

// // Usar el Iterador For In (Con esto recorremos un Objeto y podemos acceder a todos sus Atributos)
// for (const dato in victoria) {
//     console.log(victoria[dato])
// }

// Clases
// class Vehiculo {

//     // Metodo Constructor
//     constructor(tipo, marca, condicion, color) {
//         this.tipo = tipo.toUpperCase();
//         this.marca = marca;
//         this.condicion = condicion;
//         this.color = color;
//     }

//     // Creamos metodos
//     enciende() {
//         console.log("El vehiculo " + this.tipo + " Esta encendido")
//     }
// }

// // Para construir un Veiculo, hago una instancia de la Clase

// const auto = new Vehiculo("Auto", "Nissan", "Usado", "Fucsia");
// console.log(auto);
// auto.enciende();
// const lancha = new Vehiculo("Lancha", "Philips", "Nueva", "Blanca");
// console.log(lancha);
// lancha.enciende();

class Producto {
    constructor(nombre, descripcion, categoria, precio, stock, ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = parseFloat(precio);
        this.stock = parseInt(stock);        
    }

    agregamosIva() {
        this.precio = this.precio * 1.21;
    }

    vender() {
        console.log("El Producto " + this.nombre + " fue Vendido.")
    }
}

const producto1 = new Producto("Azucar", "Azucar Blanca", "Almacen", 1000.50, 50);
console.log(producto1)
producto1.agregamosIva();
producto1.vender();
