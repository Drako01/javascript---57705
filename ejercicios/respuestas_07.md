# Soluciones Ejercicios 07

1. **Usa forEach para imprimir cada elemento de un array de números:**

```js
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(numero => console.log(numero));
```

2. **Utiliza find para encontrar el primer número mayor que 50 en un array de números:**

```js
const numeros = [10, 25, 60, 45, 80];
const mayorQueCincuenta = numeros.find(numero => numero > 50);
console.log(mayorQueCincuenta);
```

3. **Emplea filter para obtener todos los números pares de un array de números:**

```js
const numeros = [1, 2, 3, 4, 5, 6];
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);
```

4. **Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres:**

```js
const palabras = ['mariposa', 'hipopotomonstrosesquipedaliofobia', 'sol', 'computadora'];
const contienePalabraLarga = palabras.some(palabra => palabra.length > 10);
console.log(contienePalabraLarga);
```

5. **Usa map para duplicar cada elemento de un array de números:**

```js
const numeros = [1, 2, 3, 4];
const duplicados = numeros.map(numero => numero * 2);
console.log(duplicados);
```

6. **Emplea reduce para obtener la suma de todos los elementos de un array de números:**

```js
const numeros = [1, 2, 3, 4];
const suma = numeros.reduce((total, numero) => total + numero, 0);
console.log(suma);
```

7. **Utiliza sort para ordenar un array de palabras alfabéticamente:**

```js
const palabras = ['banana', 'manzana', 'pera', 'durazno'];
const ordenadas = palabras.sort();
console.log(ordenadas);
```

8. **Crea una clase Alumno con las propiedades "nombre", "edad" y "notas" (un array de números). Crea varios objetos Alumno y realiza operaciones con ellos (calcular promedio de notas, encontrar el alumno con la mejor nota, etc.) utilizando funciones de orden superior:**

```js
class Alumno {
  constructor(nombre, edad, notas) {
    this.nombre = nombre;
    this.edad = edad;
    this.notas = notas;
  }

  promedioNotas() {
    return this.notas.reduce((total, nota) => total + nota, 0) / this.notas.length;
  }
}

const alumnos = [
  new Alumno('Juan', 20, [8, 9, 7]),
  new Alumno('Ana', 22, [10, 9, 8]),
  new Alumno('Luis', 19, [6, 5, 7])
];

// Calcular promedio de notas del primer alumno
console.log(alumnos[0].promedioNotas());

// Encontrar el alumno con la mejor nota
const mejorNota = Math.max(...alumnos.flatMap(alumno => alumno.notas));
const alumnoConMejorNota = alumnos.find(alumno => alumno.notas.includes(mejorNota));
console.log(alumnoConMejorNota.nombre);
```

9. **Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit:**

```js
const celsius = [0, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);
```

10. **Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $50:**

```js
const productos = [
  { nombre: 'Producto 1', precio: 30 },
  { nombre: 'Producto 2', precio: 60 },
  { nombre: 'Producto 3', precio: 90 }
];
const caros = productos.filter(producto => producto.precio > 50);
console.log(caros);
```

11. **Usa forEach para imprimir la tabla de multiplicar de un número específico (por ejemplo, 5):**

```js
const numero = 5;
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(i => {
  console.log(`${numero} x ${i} = ${numero * i}`);
});
```

12. **Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30% en un array de productos:**

```js
const productos = [
  { nombre: 'Producto 1', descuento: 20 },
  { nombre: 'Producto 2', descuento: 35 },
  { nombre: 'Producto 3', descuento: 25 }
];
const conDescuento = productos.find(producto => producto.descuento > 30);
console.log(conDescuento);
```

13. **Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno:**

```js
const alumnos = [
  new Alumno('Juan', 20, [8, 9, 7]),
  new Alumno('Ana', 16, [10, 9, 8]),
  new Alumno('Luis', 19, [6, 5, 7])
];
const menorDeEdad = alumnos.some(alumno => alumno.edad < 18);
console.log(menorDeEdad);
```

14. **Usa reduce para obtener el producto de todos los elementos de un array de números:**

```js
const numeros = [1, 2, 3, 4];
const producto = numeros.reduce((total, numero) => total * numero, 1);
console.log(producto);
```

15. **Utiliza sort para ordenar un array de fechas en orden ascendente:**

```js
const fechas = [new Date(2023, 11, 25), new Date(2022, 11, 25), new Date(2024, 11, 25)];
const ordenadas = fechas.sort((a, b) => a - b);
console.log(ordenadas);
```

16. **Emplea map para obtener un array de objetos con las edades de los alumnos en años-luz (dividiendo la edad en años por 9.46 trillones, que es la cantidad de kilómetros que recorre la luz en un año):**

```js
const alumnos = [
  new Alumno('Juan', 20, [8, 9, 7]),
  new Alumno('Ana', 22, [10, 9, 8]),
  new Alumno('Luis', 19, [6, 5, 7])
];
const edadesEnAñosLuz = alumnos.map(alumno => ({
  nombre: alumno.nombre,
  edadEnAñosLuz: alumno.edad / 9.46e12
}));
console.log(edadesEnAñosLuz);
```

17. **Utiliza filter para obtener todos los números primos de un array de números:**

```js
const esPrimo = numero => {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
};

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primos = numeros.filter(esPrimo);
console.log(primos);
```

18. **Emplea reduce para obtener el promedio de las edades de un array de objetos Alumno:**

```js
const alumnos = [
  new Alumno('Juan', 20, [8, 9, 7]),
  new Alumno('Ana', 22, [10, 9, 8]),
  new Alumno('Luis', 19, [6, 5, 7])
];
const promedioEdades = alumnos.reduce((total, alumno) => total + alumno.edad, 0) / alumnos.length;
console.log(promedioEdades);
```

19. **Usa forEach para imprimir todos los días de la semana en inglés:**

```js
const dias = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
dias.forEach(dia => console.log(dia));
```

20. **Utiliza sort para ordenar un array de objetos producto por precio de forma ascendente:**

```js
const productos = [
  { nombre: 'Producto 1', precio: 30 },
  { nombre: 'Producto 2', precio: 60 },
  { nombre: 'Producto 3', precio: 90 }
];
const ordenadosPorPrecio = productos.sort((a, b) => a.precio - b.precio);
console.log(ordenadosPorPrecio);
```

21. **Expresar el siguiente script en una sola línea de código:**

```js
let total = 0
for (let i = 1; i <= 10; i++) {
    total += i
}
console.log(total)
```

**En una sola línea de código:**

```js
console.log(Array.from({ length: 10 }, (_, i) => i + 1).reduce((a, b) =>

 a + b, 0));
```

