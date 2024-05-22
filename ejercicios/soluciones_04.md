// Variables Locales y Globales

// 1. Declara una variable global llamada `mensaje` y asígnale un mensaje.

```js
let mensaje = "Hola, este es un mensaje global.";
```

// 2. Crea una función llamada `saludar` que imprima en la consola el valor de la variable `mensaje`.

```js
function saludar() {
  console.log(mensaje);
}
```

// 3. Llama a la función `saludar` para que imprima el mensaje.

```js
saludar(); // Salida: Hola, este es un mensaje global.
```

// Funciones

// 4. Crea una función llamada `sumar` que tome dos números como parámetros y devuelva la suma de ellos.

```js
function sumar(a, b) {
  return a + b;
}
```

// 5. Llama a la función `sumar` con dos números como argumentos e imprime el resultado en la consola.

```js
console.log(sumar(5, 7)); // Salida: 12
```

// Funciones con Parámetros

// 6. Crea una función llamada `multiplicar` que tome tres números como parámetros y devuelva el resultado de multiplicarlos.

```js
function multiplicar(a, b, c) {
  return a * b * c;
}
```

// 7. Llama a la función `multiplicar` con tres números como argumentos e imprime el resultado en la consola.

```js
console.log(multiplicar(2, 3, 4)); // Salida: 24
```

// Funciones Anónimas

// 8. Declara una variable llamada `cuadrado` y asígnale una función anónima que tome un número como parámetro y devuelva el cuadrado de ese número.

```js
let cuadrado = function (num) {
  return num * num;
};
```

// 9. Utiliza la función anónima almacenada en la variable `cuadrado` para calcular el cuadrado de un número e imprime el resultado en la consola.

```js
console.log(cuadrado(5)); // Salida: 25
```

// Funciones Flecha

// 10. Declara una variable llamada `esPar` y asígnale una función flecha que tome un número como parámetro y devuelva `true` si es par y `false` si es impar.

```js
let esPar = (num) => num % 2 === 0;
```

// 11. Utiliza la función flecha almacenada en la variable `esPar` para determinar si un número ingresado por el usuario es par o impar e imprime el resultado en la consola.

```js
console.log(esPar(10)); // Salida: true
console.log(esPar(7)); // Salida: false
```

// Variables Locales y Globales

// 12. Dentro de una función, declara una variable local llamada `contador` y asígnale un valor.

```js
function contar() {
  let contador = 10;
  console.log(contador); // Salida: 10
}
```

// 13. Intenta acceder a la variable `contador` desde fuera de la función y observa el resultado.

```js
contar();
console.log(typeof contador); // Salida: undefined (contador no está definido fuera de la función)
```

// Funciones

// 14. Crea una función llamada `saludarNombre` que tome un nombre como parámetro y devuelva un mensaje de saludo con ese nombre.

```js
function saludarNombre(nombre) {
  return `Hola, ${nombre}!`;
}
```

// 15. Llama a la función `saludarNombre` con tu nombre como argumento e imprime el mensaje en la consola.

```js
console.log(saludarNombre("Juan")); // Salida: Hola, Juan!
```

// Funciones con Parámetros

// 16. Crea una función llamada `calcularAreaRectangulo` que tome dos parámetros (base y altura) y devuelva el área del rectángulo.

```js
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}
```

// 17. Llama a la función `calcularAreaRectangulo` con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.

```js
console.log(calcularAreaRectangulo(5, 8)); // Salida: 40
```

// Funciones Anónimas

// 18. Crea una función anónima que tome dos números como parámetros y devuelva el mayor de los dos.

```js
let mayor = function (a, b) {
  return a > b ? a : b;
};
```

// 19. Utiliza la función anónima creada para determinar el número más grande de dos números ingresados por el usuario e imprime el resultado en la consola.

```js
console.log(mayor(10, 20)); // Salida: 20
```

// Funciones Flecha

// 20. Declara una variable llamada `doble` y asígnale una función flecha que tome un número como parámetro y devuelva el doble de ese número.

```js
let doble = (num) => num * 2;
```

// 21. Llama a la función flecha almacenada en la variable `doble` para calcular el doble de un número e imprime el resultado en la consola.

```js
console.log(doble(6)); // Salida: 12
```

// Ejercicios Básicos de JavaScript para Cálculos Geométricos

// Cálculo del Área de un Triángulo

// 22. Crea una función llamada `areaTriangulo` que tome la base y la altura de un triángulo como parámetros y devuelva el área del triángulo.

```js
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
```

// 23. Llama a la función `areaTriangulo` con valores de base y altura proporcionados por el usuario e imprime el resultado en la consola.

```js
console.log(areaTriangulo(4, 5)); // Salida: 10
```

// Cálculo del Perímetro de un Cuadrado

// 24. Crea una función llamada `perimetroCuadrado` que tome el lado de un cuadrado como parámetro y devuelva el perímetro del cuadrado.

```js
function perimetroCuadrado(lado) {
  return lado * 4;
}
```

// 25. Llama a la función `perimetroCuadrado` con el valor del lado proporcionado por el usuario e imprime el resultado en la consola.

```js
console.log(perimetroCuadrado(6)); // Salida: 24
```

// Cálculo del Área de un Círculo

// 26. Crea una función llamada `areaCirculo` que tome el radio de un círculo como parámetro y devuelva el área del círculo.

```js
function areaCirculo(radio) {
  return Math.PI * Math.pow(radio, 2);
}
```

// 27. Llama a la función `areaCirculo` con el valor del radio proporcionado por el usuario e imprime el resultado en la consola.

```js
console.log(areaCirculo(3)); // Salida: 28.274333882308138
```

// Cálculo del Perímetro de un Rectángulo

// 28. Crea una función llamada `perimetroRectangulo` que tome la longitud y la anchura de un rectángulo como parámetros y devuelva el perímetro del rectángulo.

```js
function perimetroRectangulo(longitud, anchura) {
  return 2 * (longitud + anchura);
}
```

// 29. Llama a la función `perimetroRectangulo` con valores de longitud y anchura proporcionados por el usuario e imprime el resultado en la consola.

```js
console.log(perimetroRectangulo(5, 7)); // Salida: 24
```

// Cálculo del Área de un Trapecio

// 30. Crea una función llamada `areaTrapecio` que tome las bases y la altura de un trapecio como parámetros y devuelva el área del trapecio.

```js
function areaTrapecio(base1, base2, altura) {
  return ((base1 + base2) * altura) / 2;
}
```

// 31. Llama a la función `areaTrapecio` con valores de las bases y la altura proporcionados por el usuario e imprime el resultado en la consola.

```js
console.log(areaTrapecio(3, 5, 4)); // Salida: 16
```
