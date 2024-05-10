## Variables y Constantes

``` js
// Ejercicio 1
let nombre = "TuNombre";

// Ejercicio 2
const PI = 3.14;

```

## Booleanos

``` js
// Ejercicio 3
let esMayorDeEdad = true; // Dependiendo de la edad del usuario

```

## Prompt, Alert y Console.log

``` js
// Ejercicio 4
let edadUsuario = parseInt(prompt("Ingresa tu edad:"));

// Ejercicio 5
alert("¡Hola!");

// Ejercicio 6
console.log("La edad ingresada es: " + edadUsuario);
```

## Control de Flujo con if y if else

``` js
// Ejercicio 7
let numeroUsuario = parseFloat(prompt("Ingresa un número:"));
if (numeroUsuario > 0) {
    console.log("El número ingresado es positivo.");
} else if (numeroUsuario < 0) {
    console.log("El número ingresado es negativo.");
} else {
    console.log("El número ingresado es cero.");
}

// Ejercicio 8
if (numeroUsuario % 2 === 0) {
    console.log("El número ingresado es par.");
} else {
    console.log("El número ingresado es impar.");
}

// Ejercicio 9
if (numeroUsuario > 100) {
    console.log("El número ingresado es mayor que 100.");
} else if (numeroUsuario < 100) {
    console.log("El número ingresado es menor que 100.");
} else {
    console.log("El número ingresado es igual a 100.");
}
```

## Operadores Lógicos

``` js
// Ejercicio 10
if (numeroUsuario % 2 === 0 && numeroUsuario % 3 === 0) {
    console.log("El número ingresado es divisible por 2 y por 3.");
} else {
    console.log("El número ingresado no es divisible por 2 y por 3 simultáneamente.");
}

// Ejercicio 11
if (numeroUsuario > 0 && numeroUsuario < 100) {
    console.log("El número ingresado es mayor que 0 y menor que 100.");
} else {
    console.log("El número ingresado no cumple ambas condiciones.");
}

// Ejercicio 12
if (numeroUsuario > 10 || numeroUsuario < -10) {
    console.log("El número ingresado es mayor que 10 o menor que -10.");
} else {
    console.log("El número ingresado no cumple ninguna de las condiciones.");
}
```
## Ejercicios Adicionales

``` js
// Ejercicio 13
let numeroPrimo = parseInt(prompt("Ingresa un número para verificar si es primo:"));
let esPrimo = true;
for (let i = 2; i < numeroPrimo; i++) {
    if (numeroPrimo % i === 0) {
        esPrimo = false;
        break;
    }
}
if (esPrimo) {
    console.log("El número ingresado es primo.");
} else {
    console.log("El número ingresado no es primo.");
}

// Ejercicio 14
let hora = 14; // Por ejemplo, representa las 2 de la tarde
if (hora >= 6 && hora < 12) {
    console.log("Es mañana.");
} else if (hora >= 12 && hora < 20) {
    console.log("Es tarde.");
} else {
    console.log("Es noche.");
}

// Ejercicio 15
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
if (num1 % num2 === 0) {
    console.log("El primer número es divisible por el segundo.");
} else {
    console.log("El primer número no es divisible por el segundo.");
}

// Ejercicio 16
let nombreUsuario = "EjemploNombre";
if (nombreUsuario.length > 6) {
    console.log("El nombre tiene más de 6 caracteres.");
} else {
    console.log("El nombre tiene 6 caracteres o menos.");
}

// Ejercicio 17
let anioIngresado = parseInt(prompt("Ingresa un año para verificar si es bisiesto:"));
if ((anioIngresado % 4 === 0 && anioIngresado % 100 !== 0) || anioIngresado % 400 === 0) {
    console.log("El año ingresado es bisiesto.");
} else {
    console.log("El año ingresado no es bisiesto.");
}

// Ejercicio 18
let nombreIngresado = prompt("Ingresa tu nombre para verificar si comienza con 'A' o 'a':");
if (nombreIngresado.charAt(0).toLowerCase() === 'a') {
    console.log("El nombre ingresado comienza con 'A' o 'a'.");
} else {
    console.log("El nombre ingresado no comienza con 'A' o 'a'.");
}

// Ejercicio 19
let temperatura = 25; // Por ejemplo, representa una temperatura de 25 grados Celsius
if (temperatura < 10) {
    console.log("Hace frío.");
} else if (temperatura >= 10 && temperatura <= 25) {
    console.log("La temperatura es templada.");
} else {
    console.log("Hace calor.");
}

// Ejercicio 20
let numero1 = parseInt(prompt("Ingrese el 1er numero:"));
let numero2 = parseInt(prompt("Ingrese el 2do numero:"));
let numero3 = parseInt(prompt("Ingrese el 3er numero:"));
if(numero1 + numero2 === numero3){
    console.log("La suma de los 2 primeros es igual al tercero.! Ambos suman: " + (numero1 + numero2));
} else {
    console.log("La suma de los 2 primeros NO es igual al tercero.! Ambos suman: " 
    + (numero1 + numero2) + ", y Deberia sumar: " + numero3);
}
```