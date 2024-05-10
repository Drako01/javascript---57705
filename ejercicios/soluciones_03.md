## Control de Flujo con if y if else y Operadores Lógicos

``` js
// Ejercicio 1
let edad = 20;
if (edad >= 18) {
    console.log("La persona es mayor de edad.");
} else {
    console.log("La persona no es mayor de edad.");
}

// Ejercicio 2
let numero = parseInt(prompt("Ingresa un número:"));
if (numero > 0 && numero % 2 === 0) {
    console.log("El número ingresado es positivo y par.");
} else {
    console.log("El número ingresado no es positivo y/o par.");
}

// Ejercicio 3
let numero1 = parseFloat(prompt("Ingresa el primer número:"));
let numero2 = parseFloat(prompt("Ingresa el segundo número:"));
if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
} else if (numero1 < numero2) {
    console.log("El primer número es menor que el segundo.");
} else {
    console.log("Los dos números son iguales.");
}

// Ejercicio 7
const TEMPERATURA_MAXIMA = 30;
let temperatura = parseFloat(prompt("Ingresa la temperatura actual:"));
if (temperatura > TEMPERATURA_MAXIMA) {
    console.log("La temperatura actual supera la máxima permitida.");
} else {
    console.log("La temperatura actual está dentro de los límites permitidos.");
}

// Ejercicio 8
let edadUsuario = parseInt(prompt("Ingresa tu edad:"));
if (edadUsuario >= 13 && edadUsuario <= 19) {
    console.log("Eres un adolescente.");
} else if (edadUsuario > 19) {
    console.log("Eres un adulto.");
} else {
    console.log("Eres un niño.");
}

// Ejercicio 12
let numero1 = 10;
let numero2 = 5;
if (numero1 > numero2) {
    console.log("El primer número es mayor que el segundo.");
} else if (numero1 < numero2) {
    console.log("El segundo número es mayor que el primero.");
} else {
    console.log("Los dos números son iguales.");
}

// Ejercicio 13
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));
if (num1 >= num2 && num1 >= num3) {
    console.log("El primer número es el más grande.");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("El segundo número es el más grande.");
} else {
    console.log("El tercer número es el más grande.");
}

```

## Ciclos e Iteraciones usando for, while y do while

``` js
// Ejercicio 4
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Ejercicio 5
let numero = parseInt(prompt("Ingresa un número:"));
let contador = 1;
while (contador <= numero) {
    console.log(contador);
    contador++;
}

// Ejercicio 6
let i = 10;
do {
    console.log(i);
    i--;
} while (i >= 1);

// Ejercicio 9
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// Ejercicio 10
let num = parseInt(prompt("Ingresa un número:"));
let j = num;
while (j >= 1) {
    console.log(j);
    j--;
}

// Ejercicio 11
let k = 5;
do {
    console.log(k);
    k += 5;
} while (k <= 50);

// Ejercicio 14
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Ejercicio 15
let numUsuario = parseInt(prompt("Ingresa un número:"));
let l = numUsuario;
while (l <= numUsuario * 2) {
    console.log(l);
    l++;
}

// Ejercicio 16
let m = 1;
do {
    if (m % 2 !== 0) {
        console.log(m);
    }
    m++;
} while (m <= 25);


```

## Control de Flujo con switch

``` js
// Ejercicio 17
let diaSemana = prompt("Ingresa un día de la semana:");
switch (diaSemana.toLowerCase()) {
    case "lunes":
    case "martes":
    case "miércoles":
    case "jueves":
    case "viernes":
        console.log("Es un día laboral.");
        break;
    case "sábado":
    case "domingo":
        console.log("Es un día de descanso.");
        break;
    default:
        console.log("Día inválido.");
        break;
}

// Ejercicio 18
let numeroDia = parseInt(prompt("Ingresa un número del 1 al 7:"));
switch (numeroDia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Lunes");
        break;
    case 3:
        console.log("Martes");
        break;
    case 4:
        console.log("Miércoles");
        break;
    case 5:
        console.log("Jueves");
        break;
    case 6:
        console.log("Viernes");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Número inválido.");
        break;
}

// Ejercicio 19
let nombreMes = prompt("Ingresa el nombre de un mes:");
switch (nombreMes.toLowerCase()) {
    case "enero":
    case "marzo":
    case "mayo":
    case "julio":
    case "agosto":
    case "octubre":
    case "diciembre":
        console.log("Este mes tiene 31 días.");
        break;
    case "abril":
    case "junio":
    case "septiembre":
    case "noviembre":
        console.log("Este mes tiene 30 días.");
        break;
    case "febrero":
        console.log("Este mes tiene 28 o 29 días.");
        break;
    default:
        console.log("Nombre de mes inválido.");
        break;
}

// Ejercicio 20
let numeroMes = parseInt(prompt("Ingresa un número del 1 al 12:"));
switch (numeroMes) {
    case 1:
        console.log("Enero");
        break;
    case 2:
        console.log("Febrero");
        break;
    case 3:
        console.log("Marzo");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Mayo");
        break;
    case 6:
        console.log("Junio");
        break;
    case 7:
        console


```