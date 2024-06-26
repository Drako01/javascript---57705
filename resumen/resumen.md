# Asincronía en JavaScript

JavaScript es un lenguaje de programación que, por defecto, ejecuta el código de manera secuencial (una línea tras otra). Sin embargo, algunas operaciones pueden llevar mucho tiempo en completarse (como las solicitudes a un servidor o la lectura de archivos grandes). La asincronía permite que estas operaciones no bloqueen la ejecución del resto del código.

### ¿Qué son `setTimeout` y `setInterval`?

- **`setTimeout`**: Sirve para ejecutar una función una vez después de un cierto período de tiempo.
  
  ```javascript
  setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos");
  }, 2000); // 2000 milisegundos = 2 segundos
  ```

- **`setInterval`**: Sirve para ejecutar una función repetidamente con un intervalo de tiempo fijo entre cada ejecución.
  
  ```javascript
  setInterval(() => {
    console.log("Esto se ejecuta cada 3 segundos");
  }, 3000); // 3000 milisegundos = 3 segundos
  ```

### Call Stack (Pila de llamadas)

El **call stack** es una estructura de datos donde se almacenan las funciones que se están ejecutando y las que están esperando para ser ejecutadas. Es una pila LIFO (Last In, First Out), lo que significa que la última función que entra es la primera que se ejecuta.

- Cuando llamas a una función, se añade al call stack.
- Cuando la función termina, se elimina del call stack.

Ejemplo:

```javascript
function primera() {
  console.log("Primera función");
  segunda();
}

function segunda() {
  console.log("Segunda función");
}

primera();
```

Aquí, el call stack primero tiene `primera`, luego `segunda`, y se van ejecutando en ese orden.

### Event Loop (Bucle de eventos)

El **event loop** es lo que permite que JavaScript realice operaciones asincrónicas sin bloquear el call stack. Su trabajo principal es monitorear el call stack y la cola de mensajes (message queue). 

Cuando el call stack está vacío (no hay funciones en ejecución), el event loop toma la primera tarea de la cola de mensajes y la añade al call stack, permitiendo su ejecución.

### Cola de mensajes (Message Queue)

La **message queue** (cola de mensajes) es una lista de tareas que esperan para ser ejecutadas. Estas tareas pueden ser eventos, callbacks de `setTimeout`, `setInterval`, y otras operaciones asincrónicas.

Proceso:

1. Se llama a una función asincrónica (por ejemplo, `setTimeout`).
2. La función se ejecuta y la callback se coloca en la message queue después del tiempo especificado.
3. El event loop verifica si el call stack está vacío.
4. Si el call stack está vacío, el event loop mueve la callback de la message queue al call stack y se ejecuta.

### Ejemplo completo

```javascript
console.log("Inicio");

setTimeout(() => {
  console.log("Esto viene del setTimeout");
}, 2000);

console.log("Fin");
```

1. `console.log("Inicio")` se ejecuta y se imprime.
2. `setTimeout` se llama, su callback se coloca en la message queue para ejecutarse después de 2 segundos.
3. `console.log("Fin")` se ejecuta y se imprime.
4. Después de 2 segundos, el event loop mueve la callback del `setTimeout` al call stack y se ejecuta `console.log("Esto viene del setTimeout")`.

### Resumen

- **Asincronía**: Permite realizar operaciones sin bloquear el flujo del programa.
- **`setTimeout` y `setInterval`**: Métodos para ejecutar código después de un retraso o en intervalos.
- **Call Stack**: Pila de funciones en ejecución.
- **Event Loop**: Bucle que maneja el call stack y la message queue para gestionar la asincronía.
- **Message Queue**: Cola donde se almacenan las tareas asincrónicas que esperan para ser ejecutadas.

----

# Promesas

### ¿Qué es una Promesa?

Una **promesa** es un objeto que representa la eventual finalización (o falla) de una operación asincrónica y su valor resultante.

En términos simples, una promesa es algo que puede:

1. **Pendiente (Pending)**: Está en espera de ser resuelta o rechazada.
2. **Resuelta (Fulfilled)**: La operación se completó con éxito y tiene un valor.
3. **Rechazada (Rejected)**: La operación falló y tiene una razón para el fallo.

### Crear una Promesa

Para crear una promesa, se usa el constructor `Promise`, que toma una función con dos parámetros: `resolve` y `reject`. `resolve` se llama cuando la operación es exitosa, y `reject` se llama cuando hay un error.

```javascript
let miPromesa = new Promise((resolve, reject) => {
  let exito = true; // Cambia esto a false para simular un error
  if (exito) {
    resolve("¡Operación exitosa!");
  } else {
    reject("Algo salió mal.");
  }
});
```

### Usar una Promesa

Las promesas tienen métodos `.then()` y `.catch()` para manejar los resultados.

- **`.then()`**: Se ejecuta cuando la promesa se resuelve con éxito.
- **`.catch()`**: Se ejecuta cuando la promesa es rechazada.

```javascript
miPromesa
  .then((resultado) => {
    console.log(resultado); // "¡Operación exitosa!"
  })
  .catch((error) => {
    console.log(error); // "Algo salió mal."
  });
```

### Encadenar Promesas

Puedes encadenar múltiples `.then()` para manejar una serie de operaciones asincrónicas.

```javascript
let promesaEncadenada = new Promise((resolve, reject) => {
  resolve("Paso 1 completado");
});

promesaEncadenada
  .then((resultado) => {
    console.log(resultado); // "Paso 1 completado"
    return "Paso 2 completado";
  })
  .then((resultado) => {
    console.log(resultado); // "Paso 2 completado"
    return "Paso 3 completado";
  })
  .then((resultado) => {
    console.log(resultado); // "Paso 3 completado"
  })
  .catch((error) => {
    console.log(error);
  });
```

### Promesas y Asincronía

Las promesas son especialmente útiles para manejar operaciones asincrónicas como solicitudes de red.

```javascript
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((data) => {
    console.log(data); // Datos del API
  })
  .catch((error) => {
    console.log("Error:", error);
  });
```

### Resumen

- **Promesa**: Un objeto que representa la eventual finalización de una operación asincrónica.
- **Estados de una promesa**: Pendiente, resuelta, rechazada.
- **Métodos**:
  - `.then()`: Para manejar el resultado exitoso.
  - `.catch()`: Para manejar errores.
- **Encadenamiento**: Permite manejar múltiples operaciones asincrónicas en secuencia.

Las promesas hacen que el código asincrónico sea más legible y manejable, evitando el "callback hell" y proporcionando una forma más limpia de manejar las operaciones asincrónicas.

### 1. **Call Stack (Pila de llamadas)**
Imagina una pila de platos. Cada vez que una función se llama, se coloca un "plato" (que representa la función) en la parte superior de la pila. Cuando una función termina, se quita el "plato" de la parte superior. El call stack funciona de manera similar:

- Se llama a la función A.
- La función A llama a la función B.
- La función B llama a la función C.
- Cuando C termina, se quita de la pila y se sigue con B.
- Cuando B termina, se quita de la pila y se sigue con A.
- Cuando A termina, se vacía la pila.

### 2. **Event Loop (Bucle de eventos)**
El event loop es como un vigilante que revisa constantemente el call stack y la queue (cola). Su tarea es asegurarse de que el call stack esté vacío y, cuando lo esté, tomar la siguiente tarea de la queue y ponerla en el call stack para que se ejecute.

### 3. **Queue (Cola)**
La queue es como una lista de tareas pendientes que esperan ser ejecutadas. Estas tareas se colocan en la queue cuando ocurren ciertos eventos, como una llamada a una API que toma tiempo en responder, o un temporizador (setTimeout).

### 4. **Asincronía**
La asincronía permite que el código siga ejecutándose sin tener que esperar a que ciertas operaciones terminen. Por ejemplo, cuando haces una llamada a una API, en lugar de esperar la respuesta (y detener todo mientras esperas), la operación se ejecuta en segundo plano y cuando termina, se coloca una tarea en la queue para que el event loop la procese cuando el call stack esté vacío.

### Ejemplo:
Imagina que estás en una cocina (el call stack), y estás cocinando (ejecutando funciones). Tienes una lista de tareas (queue) que necesitas hacer, como hervir agua o cortar verduras.

1. Empiezas a cocinar (call stack tiene las funciones).
2. Pones una olla de agua a hervir (una tarea asincrónica). Mientras hierve, sigues cocinando otras cosas.
3. La tarea de hervir agua va a la queue.
4. El event loop revisa si terminaste con las otras tareas (si el call stack está vacío).
5. Cuando terminas, el event loop toma la tarea de la queue (agua hervida) y la coloca en el call stack para que la proceses.

De esta manera, la asincronía permite que sigas trabajando (ejecutando código) sin detenerte a esperar por tareas que toman tiempo.


---

## [Autor: Alejandro Di Stefano](https://github.com/Drako01)