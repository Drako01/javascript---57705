let unNumero; //Definimos

unNumero = 10; //Inicializamos

unNumero = 12; //Reasignamos

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

let unaVariable = -1;
//unaVariable = 2;
//Valores Booleanos (Son true o false)
//console.log(unaVariable > 0) // La condicion es true o false

/*
    if (condicion) Si la condicion es true "Verdadera"
        { 
            <<<<< Ejecuto esto >>>>>
        }
        Sino ejecuto esto: (Que puede ser otra condicion o un else)
        else 
        {
            <<<<< Ejecuto esto >>>>>
        }

*/

const V = true;
const F = false;

//Tablas de Verdad
console.log("Tablas de Verdad del Operador && (Y)");
console.log(V && V);
console.log(V && F);
console.log(F && V);
console.log(F && F);

console.log("Tablas de Verdad del Operador || (O)");
console.log(V || V);
console.log(V || F);
console.log(F || V);
console.log(F || F);

console.log("Tablas de Verdad de la Negacion !");
console.log(!V + " La negacion de la Verdad");
console.log(!F + " la negacion de la Falsedad");

let ingreseSuNombre = prompt("Ingrese su Nombre:"); // Variable Global
let ingreseSuApellido = prompt("Ingrese su Apellido:");

const VACIO = ""; // Esta constante esta Vacia
/*
if(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) {
    let ingreseSuEdad = prompt("Ingrese su Edad:");
    if(ingreseSuEdad != VACIO){
        alert("Su nombre es: " + ingreseSuNombre + " " + ingreseSuApellido + " y tiene " + ingreseSuEdad + " Años de Edad")
    } else {
        alert("Su nombre es: " + ingreseSuNombre + " " + ingreseSuApellido)
    }
} else {
    alert("Falta ingresar Informacion")
}
console.log(ingreseSuNombre != VACIO && ingreseSuApellido != VACIO) //Si no ingreso alguno de los datos requeridos me sale false
*/
    
if(ingreseSuNombre != VACIO || ingreseSuApellido != VACIO) {
    let ingreseSuEdad = prompt("Ingrese su Edad:");
    if(ingreseSuEdad != VACIO){
        alert("Su nombre es: " + ingreseSuNombre + " " + ingreseSuApellido + " y tiene " + ingreseSuEdad + " Años de Edad")
    } else {
        alert("Su nombre es: " + ingreseSuNombre + " " + ingreseSuApellido)
    }
} else {
    alert("Falta ingresar Toda la Informacion")
}
console.log(ingreseSuNombre != VACIO || ingreseSuApellido != VACIO) //Si  ingreso almenos uno de los datos requeridos me sale true
//console.log(ingreseSuEdad); //Variable Local