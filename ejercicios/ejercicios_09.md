# Ejercicios de Manipulación del DOM

## Selección de Elementos

1. **Seleccionar un Elemento por su ID**: Usa `document.getElementById` para seleccionar un elemento con el ID `titulo` y muestra su contenido en la consola.

2. **Seleccionar Elementos por su Clase**: Usa `document.getElementsByClassName` para seleccionar todos los elementos con la clase `item` y muestra su número en la consola.

3. **Seleccionar Elementos por su Etiqueta**: Usa `document.getElementsByTagName` para seleccionar todos los elementos `<p>` y muestra su número en la consola.

4. **Seleccionar el Primer Elemento que Coincida con un Selector**: Usa `document.querySelector` para seleccionar el primer elemento con la clase `item` y cambia su color de fondo a azul.

5. **Seleccionar Todos los Elementos que Coincidan con un Selector**: Usa `document.querySelectorAll` para seleccionar todos los elementos con la clase `item` y cambia su color de texto a rojo.

## Creación de Elementos

6. **Crear un Nuevo Elemento y Añadirlo al DOM**: Usa `document.createElement` para crear un nuevo `<div>` y añadirlo al cuerpo del documento.

7. **Crear un Nuevo Elemento con Texto**: Usa `document.createElement` y `innerText` para crear un nuevo `<p>` con texto y añadirlo al cuerpo del documento.

8. **Crear un Nuevo Elemento con Atributos**: Usa `document.createElement` y `setAttribute` para crear un nuevo `<img>` con un atributo `src` y añadirlo al cuerpo del documento.

9. **Crear y Añadir un Botón al DOM**: Crea un nuevo botón `<button>` con el texto "Click me" y añádelo al cuerpo del documento.

10. **Crear un Nuevo Elemento y Añadirlo a un Contenedor Existente**: Usa `document.createElement` y `appendChild` para crear un nuevo `<li>` y añadirlo a una lista `<ul>` existente con el ID `lista`.

## Aplicar Estilos

11. **Cambiar el Estilo de un Elemento**: Usa `getElementById` para seleccionar un elemento con el ID `titulo` y cambia su color de fondo a amarillo.

12. **Aplicar Varios Estilos a un Elemento**: Usa `querySelector` para seleccionar un elemento con la clase `item` y aplica varios estilos (color de texto, tamaño de fuente, y margen).

13. **Añadir una Clase a un Elemento**: Usa `classList.add` para añadir la clase `activo` a un elemento con el ID `titulo`.

14. **Eliminar una Clase de un Elemento**: Usa `classList.remove` para eliminar la clase `activo` de un elemento con la clase `item`.

15. **Alternar una Clase en un Elemento**: Usa `classList.toggle` para alternar la clase `activo` en un elemento con el ID `boton`.

## Crear y Manipular Listas

16. **Crear una Lista Desordenada y Añadirla al Cuerpo**: Usa `createElement` para crear una lista `<ul>` y añade varios elementos `<li>` con texto, luego añade la lista al cuerpo del documento.

17. **Crear una Lista Ordenada y Añadirla al Cuerpo**: Usa `createElement` para crear una lista `<ol>` y añade varios elementos `<li>` con texto, luego añade la lista al cuerpo del documento.

18. **Generar una Lista a partir de un Array**: Dado un array de nombres, usa un bucle para crear una lista `<ul>` y añade un `<li>` por cada nombre en el array, luego añade la lista al cuerpo del documento.

19. **Añadir un Elemento a una Lista Existente**: Usa `createElement` y `appendChild` para añadir un nuevo `<li>` a una lista `<ul>` existente con el ID `lista`.

20. **Eliminar el Último Elemento de una Lista**: Usa `removeChild` para eliminar el último `<li>` de una lista `<ul>` con el ID `lista`.

## Ejercicios Intermedios

21. **Crear una Lista de Tareas**: Crea un formulario con un campo de texto y un botón que permita añadir elementos a una lista de tareas. Cada tarea debe tener un botón para eliminarla.

22. **Crear una Galería de Imágenes**: Crea un array de URLs de imágenes y usa un bucle para crear una galería de imágenes en el DOM. Cada imagen debe estar dentro de un contenedor `<div>`.

23. **Crear una Tabla Dinámica**: Crea una tabla con una fila de encabezado y varias filas de datos generadas a partir de un array de objetos. Añade la tabla al cuerpo del documento.

24. **Formulario de Registro**: Crea un formulario de registro con campos de texto para nombre, email y contraseña. Al enviar el formulario, muestra un mensaje de bienvenida que incluya el nombre ingresado.

25. **Calculadora Simple**: Crea una calculadora simple con botones para los números y operaciones básicas (+, -, *, /). Muestra el resultado en un campo de texto al presionar el botón de igual (=).

## Ejercicios Avanzados

26. **Crear una Tabla de Multiplicar**: Genera una tabla de multiplicar (del 1 al 10) usando elementos `<table>`, `<tr>`, y `<td>` y añádela al cuerpo del documento.

27. **Generar una Lista de Elementos con Atributos Dinámicos**: Usa un array de objetos para crear una lista de productos. Cada producto debe tener atributos como `nombre`, `precio` y `cantidad`, y mostrarlos en una lista `<ul>`.

28. **Crear una Página de Perfil Dinámica**: Crea una página de perfil que muestre la información de un usuario. Usa objetos para almacenar la información del usuario y actualiza el DOM para mostrar esta información.

29. **Galería de Imágenes con Títulos**: Crea una galería de imágenes donde cada imagen tenga un título. Usa arrays para almacenar las URLs y los títulos, y genera el HTML dinámicamente.

30. **Formulario de Contacto Dinámico**: Crea un formulario de contacto con campos para nombre, email, asunto y mensaje. Al enviar el formulario, muestra un resumen de los datos ingresados en una nueva sección del DOM.



<p align="center"> 
    <img src="https://jobs.coderhouse.com/assets/logos_coderhouse.png" alt="CoderHouse"  height="100"/>
</p>

<p align="center"> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">Documentacion Oficial de JavaScript</a>
</p>