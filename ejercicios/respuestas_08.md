# Arrays y Métodos de Array

## 1. Crear un Array de Números
```js
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
```

## 2. Agregar Elemento al Final del Array
```js
numeros.push(6);
console.log(numeros);
```

## 3. Eliminar el Último Elemento del Array
```js
numeros.pop();
console.log(numeros);
```

## 4. Agregar Elemento al Inicio del Array
```js
numeros.unshift(0);
console.log(numeros);
```

## 5. Eliminar el Primer Elemento del Array
```js
numeros.shift();
console.log(numeros);
```

# Funciones de Orden Superior

## 6. Doblar Números
```js
const doblados = numeros.map(numero => numero * 2);
console.log(doblados);
```

## 7. Filtrar Números Pares
```js
const pares = numeros.filter(numero => numero % 2 === 0);
console.log(pares);
```

## 8. Encontrar el Primer Número Mayor que 3
```js
const mayorQueTres = numeros.find(numero => numero > 3);
console.log(mayorQueTres);
```

## 9. Verificar si Algún Número es Mayor que 4
```js
const mayorQueCuatro = numeros.some(numero => numero > 4);
console.log(mayorQueCuatro);
```

## 10. Multiplicar Todos los Números
```js
const multiplicacion = numeros.reduce((total, numero) => total * numero, 1);
console.log(multiplicacion);
```

# Retornar Funciones y Recibir Funciones por Parámetro

## 11. Función que Retorna otra Función
```js
const sumar = x => y => x + y;
const sumar5 = sumar(5);
console.log(sumar5(3));
```

## 12. Función que Recibe otra Función como Parámetro
```js
const ejecutarFuncion = (funcion, valor) => funcion(valor);
console.log(ejecutarFuncion(Math.sqrt, 25));
```

# Métodos de Búsqueda y Transformación

## 13. Buscar Índice de un Número
```js
console.log(numeros.indexOf(3));
```

## 14. Verificar la Inclusión de un Número
```js
console.log(numeros.includes(4));
```

## 15. Ordenar Números en Orden Ascendente
```js
console.log(numeros.sort((a, b) => a - b));
```

# El Objeto Math

## 16. Generar un Número Aleatorio entre 0 y 100
```js
console.log(Math.floor(Math.random() * 101));
```

## 17. Redondear un Número al Entero más Cercano
```js
console.log(Math.round(4.7));
```

## 18. Encontrar el Máximo de un Conjunto de Números
```js
console.log(Math.max(1, 2, 3, 4, 5));
```

## 19. Encontrar el Mínimo de un Conjunto de Números
```js
console.log(Math.min(1, 2, 3, 4, 5));
```

## 20. Calcular la Raíz Cuadrada de un Número
```js
console.log(Math.sqrt(16));
```

# La Clase Date

## 21. Fecha y Hora Actual
```js
const fechaActual = new Date();
console.log(fechaActual);
```

## 22. Obtener el Año Actual
```js
console.log(fechaActual.getFullYear());
```

## 23. Obtener el Mes Actual
```js
console.log(fechaActual.getMonth());
```

## 24. Obtener el Día del Mes Actual
```js
console.log(fechaActual.getDate());
```

## 25. Obtener el Día de la Semana Actual
```js
console.log(fechaActual.getDay());
```

# Ejercicios Integradores

## 26. Ordenar una Lista de Fechas
```js
const fechas = [new Date('2024-12-31'), new Date('2023-12-31'), new Date('2022-12-31')];
console.log(fechas.sort((a, b) => a - b));
```

## 27. Filtrar Números Mayores que un Valor
```js
const filtrarMayoresQue = (array, valor) => array.filter(numero => numero > valor);
console.log(filtrarMayoresQue(numeros, 3));
```

## 28. Calcular el Promedio de un Array de Números
```js
const calcularPromedio = numeros => {
  const suma = numeros.reduce((total, numero) => total + numero, 0);
  return suma / numeros.length;
};

console.log(calcularPromedio([1, 2, 3, 4, 5]));
```

## 29. Agregar Días a una Fecha
```js
const sumarDias = (fecha, dias) => {
  const nuevaFecha = new Date(fecha);
  nuevaFecha.setDate(nuevaFecha.getDate() + dias);
  return nuevaFecha;
};

console.log(sumarDias(new Date('2022-01-01'), 10));
```

## 30. Encontrar Números Duplicados en un Array
```js
const encontrarDuplicados = array => array.filter((numero, index) => array.indexOf(numero) !== index);

console.log(encontrarDuplicados([1, 2, 3, 4, 2, 5, 6, 5]));
```

## 31. Transformar Fechas a Formato Legible
```js
const formatoLegible = fechas => fechas.map(fecha => fecha.toLocaleDateString());

console.log(formatoLegible([new Date('2024-12-31'), new Date('2023-12-31'), new Date('2022-12-31')]));
```

## 32. Calcular la Edad a partir de la Fecha de Nacimiento
```js
const calcularEdad = fechaNacimiento => {
  const hoy = new Date();
  const cumpleanos = new Date(fechaNacimiento);
  let edad = hoy.getFullYear() - cumpleanos.getFullYear();
  const mes = hoy.getMonth() - cumpleanos.getMonth();
  if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }
  return edad;
};

console.log(calcularEdad('1990-01-01'));
```

## 33. Sumar los Elementos de un Array de Arrays
```js
const sumarArrays = arrays => arrays.reduce((total, array) => total + array.reduce((sum, num) => sum + num, 0), 0);

console.log(sumarArrays([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
```

## 34. Encontrar el Mayor y el Menor Número en un Array
```js
const mayorMenor = array => {
  const mayor = Math.max(...array);
  const menor = Math.min(...array);
  return { mayor, menor };
};

console.log(mayorMenor([5, 2, 9, 1, 7]));
```

## 35. Contar la Cantidad de Números Pares en un Array
```js
const contarPares = array => array.filter(numero => numero % 2 === 0).length;

console.log(contarPares([1, 2, 3, 4, 5, 6]));
```

## 36. Calcular la Desviación Estándar de un Array de Números
```js
const calcularDesviacionEstandar = array => {
  const media = array.reduce((sum, num) => sum + num, 0) / array.length;
  const varianza = array.reduce((sum, num) => sum + Math.pow(num - media, 2), 0) / array.length;
  return Math.sqrt(varianza);
};

console.log(calcularDesviacionEstandar([1, 2, 3, 4, 5]));
```

## 37. Ordenar Nombres Alfabéticamente
```js
const ordenarNombres = nombres => nombres.sort();

console.log(ordenarNombres(['Juan', 'Ana', 'Pedro', 'María']));
```

## 38. Agrupar Números por Paridad
```js
const agruparPorParidad = numeros => numeros.reduce((obj, num) => {
  obj[num % 2 === 0 ? 'pares' : 'impares'].push(num);
  return obj;
}, { pares: [], impares: [] });

console.log(agruparPorParidad([1, 2, 3, 4, 5, 6]));
```

## 39. Eliminar Elementos Duplicados en un Array
```js
const eliminarDuplicados = array => [...new Set(array)];

console.log(eliminarDuplicados([1, 2, 2, 3, 3, 4, 5, 5]));
```

## 40. Encontrar la Fecha Más Reciente
```js
const fechaMasReciente = fechas => new Date(Math.max(...fechas));

console.log(fechaMasReciente([new Date('2024-12-31'), new Date('2023-12-31'), new Date('2022-12-31')]));
```
