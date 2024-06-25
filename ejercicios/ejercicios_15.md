# Ejercicios de Asincronía en JavaScript

## Ejercicios con `setTimeout` y `setInterval`

1. **Ejercicio 1:** Usa `setTimeout` para mostrar un mensaje en la consola después de 3 segundos.
2. **Ejercicio 2:** Usa `setInterval` para mostrar un mensaje en la consola cada 2 segundos.
3. **Ejercicio 3:** Crea una función que usa `setTimeout` para imprimir "Hola" después de 1 segundo y "Mundo" después de 2 segundos.
4. **Ejercicio 4:** Crea un cronómetro que use `setInterval` para incrementar un contador en la consola cada segundo.
5. **Ejercicio 5:** Usa `setTimeout` para ejecutar una función que detenga el cronómetro del ejercicio anterior después de 10 segundos.
6. **Ejercicio 6:** Crea una función que use `setInterval` para alternar el color de fondo de la página web entre dos colores cada 5 segundos.
7. **Ejercicio 7:** Implementa un temporizador de cuenta regresiva que use `setInterval` y se detenga cuando llegue a 0.
8. **Ejercicio 8:** Usa `setTimeout` para imprimir un mensaje en la consola después de un número aleatorio de segundos (entre 1 y 5 segundos).
9. **Ejercicio 9:** Crea un semáforo que cambie de color cada 2 segundos usando `setInterval`.
10. **Ejercicio 10:** Crea una función que use `setTimeout` para retrasar la ejecución de una función que multiplica dos números y muestra el resultado.

## Ejercicios con Promesas

11. **Ejercicio 11:** Crea una promesa que se resuelva después de 3 segundos y muestre un mensaje en la consola.
12. **Ejercicio 12:** Crea una promesa que se rechace después de 2 segundos y maneja el error en la consola.
13. **Ejercicio 13:** Encadena dos promesas donde la segunda promesa dependa del resultado de la primera.
14. **Ejercicio 14:** Usa `Promise.all` para ejecutar dos promesas en paralelo y manejar ambos resultados juntos.
15. **Ejercicio 15:** Usa `Promise.race` para ver cuál de dos promesas se resuelve o rechaza primero.
16. **Ejercicio 16:** Crea una función que devuelva una promesa que se resuelva o rechace según un valor booleano pasado como argumento.
17. **Ejercicio 17:** Convierte una función que usa `setTimeout` en una que devuelva una promesa.
18. **Ejercicio 18:** Usa promesas para manejar el flujo de una operación de lectura de archivos (simulada con `setTimeout`).
19. **Ejercicio 19:** Implementa una función que devuelva una promesa para simular una solicitud a un servidor con `fetch`.
20. **Ejercicio 20:** Encadena múltiples promesas para simular un flujo de trabajo que incluye varios pasos asincrónicos.

## Ejercicios con Call Stack y Event Loop

21. **Ejercicio 21:** Explica en comentarios cómo funciona el call stack con un ejemplo sencillo de funciones anidadas.
22. **Ejercicio 22:** Crea un ejemplo donde una función asincrónica (`setTimeout`) se coloca en la cola de mensajes y se ejecuta después de que el call stack esté vacío.
23. **Ejercicio 23:** Simula un error en una función y observa cómo se maneja en el call stack.
24. **Ejercicio 24:** Implementa una función recursiva simple y analiza su comportamiento en el call stack.
25. **Ejercicio 25:** Crea un ejemplo donde múltiples `setTimeout` se ejecutan en diferentes tiempos y explica el orden de ejecución.
26. **Ejercicio 26:** Explica cómo el event loop maneja una función pesada (como un bucle grande) junto con una función asincrónica.
27. **Ejercicio 27:** Usa `console.log` para demostrar el flujo de ejecución entre código síncrono y asincrónico.
28. **Ejercicio 28:** Crea un ejemplo con un bucle infinito y un `setTimeout` para ver cómo el event loop se ve afectado.
29. **Ejercicio 29:** Explica con comentarios un ejemplo que demuestre el funcionamiento del event loop con varias promesas y `setTimeout`.
30. **Ejercicio 30:** Usa `setImmediate` (en Node.js) para ver cómo se comporta en comparación con `setTimeout`.

## Ejercicios combinados

31. **Ejercicio 31:** Crea una función que use `setTimeout` para simular una solicitud a un servidor y devuelva una promesa.
32. **Ejercicio 32:** Implementa un temporizador que se pueda iniciar, detener y reiniciar usando promesas y `setInterval`.
33. **Ejercicio 33:** Crea un semáforo usando `setInterval` y promesas para manejar los cambios de estado.
34. **Ejercicio 34:** Implementa una función de cuenta regresiva que se resuelva cuando llegue a 0 usando promesas y `setInterval`.
35. **Ejercicio 35:** Usa `Promise.all` para esperar a que terminen varias operaciones asincrónicas simuladas con `setTimeout`.
36. **Ejercicio 36:** Crea una función que maneje errores en una cadena de promesas y demuéstralo con ejemplos.
37. **Ejercicio 37:** Implementa una función que simule una cola de trabajo asincrónica usando promesas y `setTimeout`.
38. **Ejercicio 38:** Usa `fetch` y promesas para obtener datos de una API pública y mostrarlos en la consola.
39. **Ejercicio 39:** Encadena múltiples `fetch` para obtener datos relacionados de diferentes endpoints y maneja los errores adecuadamente.
40. **Ejercicio 40:** Crea una interfaz simple que use `setTimeout`, `setInterval` y promesas para simular un flujo de trabajo asincrónico (por ejemplo, un sistema de notificaciones).


¡Claro! Aquí tienes el enunciado del ejercicio:

---

### Ejercicio Especial: Mostrar Productos en el HTML usando Promesas

#### Enunciado

1. **Array de Productos**:
    - Crea un array de objetos, donde cada objeto represente un producto con las propiedades `id`, `nombre` y `precio`.

2. **Función `mostrarProducto`**:
    - Crea una función `mostrarProducto` que reciba un producto y devuelva una promesa.
    - La promesa debe resolverse después de un retraso (por ejemplo, 1 segundo) usando `setTimeout`.
    - Cuando la promesa se resuelva, la función debe crear un elemento `div` que contenga el nombre y precio del producto, y añadirlo al `body` del HTML.

3. **Función `mostrarProductos`**:
    - Crea una función `mostrarProductos` que reciba el array de productos.
    - La función debe recorrer el array de productos y mostrar cada producto en el HTML utilizando la función `mostrarProducto`.
    - Asegúrate de que los productos se muestren uno a uno, es decir, que la función `mostrarProducto` del siguiente producto se llame solo después de que la promesa del producto anterior se haya resuelto.

4. **Mostrar los Productos**:
    - Llama a la función `mostrarProductos` pasando el array de productos y verifica que los productos se muestran en el HTML con el retraso especificado.

---
