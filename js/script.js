function saludar(){
    console.log("Hola Alumnos.!!");
}

// saludar();
// saludar();
// saludar();
// saludar();
// saludar();
// saludar();

function pedirNombre(){
    let ingresarNombre = prompt("Ingrese su Nombre");
    alert("Su nombre es: " + ingresarNombre)
}

// pedirNombre();

function usandoParametros(parametro1, parametro2, parametro3){
    console.log(parametro1 + parametro2 + parametro3);
}

// usandoParametros(3, 5 ,7);
// usandoParametros("Hola ", "a ", "Todos");
// usandoParametros(true, false, true);

//toogle
let resultado;
function sumar(p1, p2) {
    resultado = p1 + p2;
}

function mostrarResultado(resultado){
    console.log(resultado);
}

// sumar(2, 32);
// mostrarResultado(resultado)

// sumar(12, 342);
// mostrarResultado(resultado)

// sumar(24, 532);
// mostrarResultado(resultado)

function sumarConReturn(p1, p2){
    let resultadoConReturn = p1 + p2;
    return resultadoConReturn;
}
//console.log(sumarConReturn(2, 3));

function sumarConReturnSinVariable(p1, p2){
    return p1 + p2;
}

let res = sumarConReturnSinVariable(12, 6);
//console.log(res);

//Calculadora
function calculadora(numero1, numero2, operacion){
    switch (operacion) {
        case "+":
            return numero1 + numero2;
            break;
        case "-":
            return numero1 - numero2;
            break;
        case "*":
            return numero1 * numero2;
            break;
        case "/":
            if(numero2 != 0){
                return numero1 / numero2;
            } else {
                alert("No se puede dividir por cero.!")
            }
            break;
        default:
            return 0;
            break;
    }
}

// console.log(calculadora(10, 0, "/"));

//Funciones anonimas
const suma = function (a, b) { return a + b}
const resta = function (a, b) { return console.log(a - b)}
const algo = function () { return console.log("Algo")}

// console.log(suma(2, 5));
// algo();
// resta(80, 50);

// Funciones Flecha
const multiplicar = (a, b) => { 
    return console.log(a * b) 
} 

const restaFlecha = (a, b) => console.log(a - b); // Tiene un return implicito

multiplicar(4, 6);
restaFlecha(8, 6);

const iva = x => x * 0.21; // Tiene un return implicito

console.log("El iva es de: " + iva(100));

const dividir = (a, b) => {
                        if(b != 0){
                            return a / b } 
                            else { 
                                alert("No se puede dividir por cero.!")
                            }
                        };
                        
console.log(dividir(6, 0));