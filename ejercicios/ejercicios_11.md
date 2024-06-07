# Ejercicios Clase 11
### Ejercicios sobre el DOM

1. **Ejercicio 1**: Crea un botón en el HTML y, cuando se haga clic en él, muestra un mensaje en la consola.
2. **Ejercicio 2**: Añade un párrafo al HTML y cambia su contenido usando JavaScript cuando se haga clic en un botón.
3. **Ejercicio 3**: Crea una lista en HTML y añade elementos a ella dinámicamente con JavaScript.
4. **Ejercicio 4**: Cambia el color de fondo de una página web cuando se haga clic en un botón.
5. **Ejercicio 5**: Oculta y muestra un div cuando se haga clic en un botón.
6. **Ejercicio 6**: Crea un input de texto y un botón, y muestra el texto del input en un div cuando se haga clic en el botón.
7. **Ejercicio 7**: Cambia la imagen de una etiqueta `<img>` cuando se haga clic en un botón.
8. **Ejercicio 8**: Añade una clase CSS a un elemento HTML cuando se haga clic en un botón.
9. **Ejercicio 9**: Crea una tabla en HTML y añade filas dinámicamente con JavaScript.
10. **Ejercicio 10**: Crea una lista desplegable (select) y muestra el valor seleccionado en un párrafo.

### Ejercicios sobre Storage (Local y Sesión)

11. **Ejercicio 11**: Guarda un valor en el Local Storage cuando se haga clic en un botón.
12. **Ejercicio 12**: Recupera un valor del Local Storage y muéstralo en un div.
13. **Ejercicio 13**: Guarda un valor en el Session Storage cuando se haga clic en un botón.
14. **Ejercicio 14**: Recupera un valor del Session Storage y muéstralo en un div.
15. **Ejercicio 15**: Guarda un objeto en el Local Storage y recupéralo, mostrando sus propiedades en un div.
16. **Ejercicio 16**: Guarda un objeto en el Session Storage y recupéralo, mostrando sus propiedades en un div.
17. **Ejercicio 17**: Elimina un valor del Local Storage cuando se haga clic en un botón.
18. **Ejercicio 18**: Elimina un valor del Session Storage cuando se haga clic en un botón.
19. **Ejercicio 19**: Guarda un array en el Local Storage y recupéralo, mostrando sus elementos en una lista.
20. **Ejercicio 20**: Guarda un array en el Session Storage y recupéralo, mostrando sus elementos en una lista.

### Ejercicios sobre Arrays

21. **Ejercicio 21**: Crea un array de números y muéstralo en un div.
22. **Ejercicio 22**: Añade un número al final de un array y muéstralo en un div.
23. **Ejercicio 23**: Elimina el último número de un array y muéstralo en un div.
24. **Ejercicio 24**: Ordena un array de números y muéstralo en un div.
25. **Ejercicio 25**: Recorre un array de strings y muéstralos en una lista.
26. **Ejercicio 26**: Filtra los números pares de un array y muéstralos en un div.
27. **Ejercicio 27**: Suma los elementos de un array de números y muestra el resultado en un div.
28. **Ejercicio 28**: Multiplica los elementos de un array de números y muestra el resultado en un div.
29. **Ejercicio 29**: Usa `map` para crear un nuevo array duplicando los valores de un array original y muéstralo en un div.
30. **Ejercicio 30**: Usa `reduce` para calcular la media de un array de números y muestra el resultado en un div.

### Ejercicios sobre Objetos

31. **Ejercicio 31**: Crea un objeto con propiedades de un estudiante (nombre, edad, curso) y muéstralo en un div.
32. **Ejercicio 32**: Añade una propiedad a un objeto existente y muéstralo en un div.
33. **Ejercicio 33**: Elimina una propiedad de un objeto y muéstralo en un div.
34. **Ejercicio 34**: Recorre las propiedades de un objeto y muéstralas en una lista.
35. **Ejercicio 35**: Crea un array de objetos (estudiantes) y muéstralos en una tabla.
36. **Ejercicio 36**: Filtra los estudiantes mayores de 18 años de un array de objetos y muéstralos en una lista.
37. **Ejercicio 37**: Usa `map` para crear un nuevo array con los nombres de los estudiantes de un array de objetos y muéstralo en una lista.
38. **Ejercicio 38**: Convierte un objeto a JSON y guárdalo en el Local Storage.
39. **Ejercicio 39**: Recupera un objeto del Local Storage, conviértelo de JSON a un objeto y muéstralo en un div.
40. **Ejercicio 40**: Convierte un array de objetos a JSON, guárdalo en el Session Storage, y recupéralo mostrando sus elementos en una tabla.

### Ejemplo de HTML y JavaScript para un Ejercicio

Para el **Ejercicio 1** (Crea un botón en el HTML y, cuando se haga clic en él, muestra un mensaje en la consola), aquí tienes un ejemplo:

#### HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 1</title>
</head>
<body>
    <button id="myButton">Haz clic aquí</button>

    <script src="app.js"></script>
</body>
</html>
```

#### JavaScript (`app.js`)
```javascript
document.getElementById('myButton').addEventListener('click', function() {
    console.log('¡Botón clickeado!');
});
```

----


# Ejercicios Integradores:

### Ejercicio 1: Gestión de Lista de Tareas
Crea una aplicación de lista de tareas donde los usuarios puedan agregar, eliminar y marcar tareas como completadas. Las tareas deben almacenarse en el Local Storage y recuperarse al cargar la página.

### Ejercicio 2: Registro de Estudiantes
Desarrolla una aplicación para registrar estudiantes con nombre, edad y curso. Los datos deben almacenarse en el Local Storage y mostrarse en una tabla. Debe permitir editar y eliminar estudiantes.

### Ejercicio 3: Carrito de Compras
Implementa un carrito de compras que permita agregar productos con su cantidad. Los productos deben almacenarse en el Local Storage. Muestra el carrito actualizado en el DOM y permite eliminar productos.

### Ejercicio 4: Encuesta de Satisfacción
Crea una encuesta de satisfacción con varias preguntas de selección múltiple. Guarda las respuestas en el Session Storage y permite al usuario enviar las respuestas, mostrando un resumen de las mismas.

### Ejercicio 5: Sistema de Notas
Desarrolla una aplicación que permita a los usuarios ingresar notas de estudiantes (nombre del estudiante, materia y calificación). Las notas deben almacenarse en el Local Storage y mostrarse en una tabla, permitiendo la edición y eliminación de registros.