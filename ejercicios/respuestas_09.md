# Ejercicios de Manipulación del DOM

## Selección de Elementos

1. **Seleccionar un Elemento por su ID**:

   ```js
   const titulo = document.getElementById("titulo");
   console.log(titulo.textContent);
   ```

2. **Seleccionar Elementos por su Clase**:

   ```js
   const elementos = document.getElementsByClassName("item");
   console.log(elementos.length);
   ```

3. **Seleccionar Elementos por su Etiqueta**:

   ```js
   const parrafos = document.getElementsByTagName("p");
   console.log(parrafos.length);
   ```

4. **Seleccionar el Primer Elemento que Coincida con un Selector**:

   ```js
   const primerItem = document.querySelector(".item");
   primerItem.style.backgroundColor = "blue";
   ```

5. **Seleccionar Todos los Elementos que Coincidan con un Selector**:
   ```js
   const items = document.querySelectorAll(".item");
   items.forEach((item) => {
     item.style.color = "red";
   });
   ```

## Creación de Elementos

6. **Crear un Nuevo Elemento y Añadirlo al DOM**:

   ```js
   const nuevoDiv = document.createElement("div");
   document.body.appendChild(nuevoDiv);
   ```

7. **Crear un Nuevo Elemento con Texto**:

   ```js
   const nuevoParrafo = document.createElement("p");
   nuevoParrafo.innerText = "Nuevo párrafo";
   document.body.appendChild(nuevoParrafo);
   ```

8. **Crear un Nuevo Elemento con Atributos**:

   ```js
   const nuevaImagen = document.createElement("img");
   nuevaImagen.setAttribute("src", "imagen.jpg");
   document.body.appendChild(nuevaImagen);
   ```

9. **Crear y Añadir un Botón al DOM**:

   ```js
   const nuevoBoton = document.createElement("button");
   nuevoBoton.textContent = "Click me";
   document.body.appendChild(nuevoBoton);
   ```

10. **Crear un Nuevo Elemento y Añadirlo a un Contenedor Existente**:
    ```js
    const nuevoLi = document.createElement("li");
    const lista = document.getElementById("lista");
    lista.appendChild(nuevoLi);
    ```

## Aplicar Estilos

11. **Cambiar el Estilo de un Elemento**:

    ```js
    const titulo = document.getElementById("titulo");
    titulo.style.backgroundColor = "yellow";
    ```

12. **Aplicar Varios Estilos a un Elemento**:

    ```js
    const item = document.querySelector(".item");
    item.style.color = "blue";
    item.style.fontSize = "20px";
    item.style.margin = "10px";
    ```

13. **Añadir una Clase a un Elemento**:

    ```js
    const titulo = document.getElementById("titulo");
    titulo.classList.add("activo");
    ```

14. **Eliminar una Clase de un Elemento**:

    ```js
    const item = document.querySelector(".item");
    item.classList.remove("activo");
    ```

15. **Alternar una Clase en un Elemento**:
    ```js
    const boton = document.getElementById("boton");
    boton.classList.toggle("activo");
    ```

## Crear y Manipular Listas

16. **Crear una Lista Desordenada y Añadirla al Cuerpo**:

    ```js
    const listaDesordenada = document.createElement("ul");
    for (let i = 1; i <= 3; i++) {
      const nuevoLi = document.createElement("li");
      nuevoLi.textContent = `Elemento ${i}`;
      listaDesordenada.appendChild(nuevoLi);
    }
    document.body.appendChild(listaDesordenada);
    ```

17. **Crear una Lista Ordenada y Añadirla al Cuerpo**:

    ```js
    const listaOrdenada = document.createElement("ol");
    for (let i = 1; i <= 3; i++) {
      const nuevoLi = document.createElement("li");
      nuevoLi.textContent = `Elemento ${i}`;
      listaOrdenada.appendChild(nuevoLi);
    }
    document.body.appendChild(listaOrdenada);
    ```

18. **Generar una Lista a partir de un Array**:

    ```js
    const nombres = ["Juan", "María", "Carlos"];
    const lista = document.createElement("ul");
    nombres.forEach((nombre) => {
      const li = document.createElement("li");
      li.textContent = nombre;
      lista.appendChild(li);
    });
    document.body.appendChild(lista);
    ```

19. **Añadir un Elemento a una Lista Existente**:

    ```js
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent = "Nuevo elemento";
    const lista = document.getElementById("lista");
    lista.appendChild(nuevoLi);
    ```

20. **Eliminar el Último Elemento de una Lista**:
    ```js
    const lista = document.getElementById("lista");
    const ultimoElemento = lista.lastElementChild;
    lista.removeChild(ultimoElemento);
    ```

## Ejercicios Intermedios

21. **Crear una Lista de Tareas**:

    ```js
    const formulario = document.querySelector("form");
    const input = document.querySelector("input");
    const lista = document.querySelector("ul");

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      const tarea = document.createElement("li");
      tarea.textContent = input.value;
      lista.appendChild(tarea);
      input.value = "";
    });
    ```

22. **Crear una Galería de Imágenes**:

    ```js
    const imagenes = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"];
    const contenedor = document.getElementById("galeria");

    imagenes.forEach((url) => {
      const imagen = document.createElement("img");
      imagen.src = url;
      contenedor.appendChild(imagen);
    });
    ```

23. **Crear una Tabla Dinámica**:

    ```js
    const datos = [
      { nombre: "Juan", edad: 30 },
      { nombre: "María", edad: 25 },
      { nombre: "Carlos", edad: 35 },
    ];
    const tabla = document.createElement("table");
    const encabezado = document.createElement("tr");
    for (const key in datos[0]) {
      const th = document.createElement("th");
      th.textContent = key;
      encabezado.appendChild(th);
    }
    tabla.appendChild(encabezado);
    datos.forEach((dato) => {
      const fila = document.createElement("tr");
      for (const key in dato) {
        const celda = document.createElement("td");
        celda.textContent = dato[key];
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    });
    document.body.appendChild(tabla);
    ```

24. **Formulario de Registro**:

    ```js
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      const nombre = document.querySelector("#nombre").value;
      const email = document.querySelector("#email").value;
      const password = document.querySelector("#password").value;
      const mensaje = document.createElement("p");
      mensaje.textContent = `Bienvenido, ${nombre}!`;
      document.body.appendChild(mensaje);
    });
    ```

25. **Calculadora Simple**:

    ```js
    const botonIgual = document.getElementById("igual");
    const resultado = document.getElementById("resultado");

    botonIgual.addEventListener("click", function () {
      resultado.value = eval(resultado.value);
    });
    ```

## Ejercicios Avanzados

26. **Crear una Tabla de Multiplicar**:

    ```js
    const tabla = document.createElement("table");
    for (let i = 1; i <= 10; i++) {
      const fila = document.createElement("tr");
      for (let j = 1; j <= 10; j++) {
        const celda = document.createElement("td");
        celda.textContent = i * j;
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
    document.body.appendChild(tabla);
    ```

27. **Generar una Lista de Elementos con Atributos Dinámicos**:

    ```js
    const productos = [
      { nombre: "Producto 1", precio: 10, cantidad: 5 },
      { nombre: "Producto 2", precio: 20, cantidad: 3 },
      { nombre: "Producto 3", precio: 15, cantidad: 8 },
    ];
    const lista = document.createElement("ul");
    productos.forEach((producto) => {
      const li = document.createElement("li");
      li.textContent = `${producto.nombre} - Precio: ${producto.precio} - Cantidad: ${producto.cantidad}`;
      lista.appendChild(li);
    });
    document.body.appendChild(lista);
    ```

28. **Crear una Página de Perfil Dinámica**:

    ```js
    const usuario = {
      nombre: "Juan",
      apellido: "Pérez",
      edad: 30,
      correo: "juan@example.com",
    };
    const perfil = document.createElement("div");
    perfil.innerHTML = `
        <h2>Perfil de Usuario</h2>
        <p>Nombre: ${usuario.nombre}</p>
        <p>Apellido: ${usuario.apellido}</p>
        <p>Edad: ${usuario.edad}</p>
        <p>Correo: ${usuario.correo}</p>
    `;
    document.body.appendChild(perfil);
    ```

29. **Galería de Imágenes con Títulos**:

    ```js
    const imagenes = [
      { url: "imagen1.jpg", titulo: "Imagen 1" },
      { url: "imagen2.jpg", titulo: "Imagen 2" },
      { url: "imagen3.jpg", titulo: "Imagen 3" },
    ];
    const galeria = document.createElement("div");
    imagenes.forEach((imagen) => {
      const contenedor = document.createElement("div");
      const img = document.createElement("img");
      const titulo = document.createElement("h3");
      img.src = imagen.url;
      titulo.textContent = imagen.titulo;
      contenedor.appendChild(img);
      contenedor.appendChild(titulo);
      galeria.appendChild(contenedor);
    });
    document.body.appendChild(galeria);
    ```

30. **Formulario de Contacto Dinámico**:
    ```js
    const formulario = document.querySelector("form");
    formulario.addEventListener("submit", function (event) {
      event.preventDefault();
      const nombre = document.querySelector("#nombre").value;
      const email = document.querySelector("#email").value;
      const asunto = document.querySelector("#asunto").value;
      const mensaje = document.querySelector("#mensaje").value;
      const resumen = document.createElement("div");
      resumen.innerHTML = `
            <h2>Resumen del Formulario</h2>
            <p>Nombre: ${nombre}</p>
            <p>Email: ${email}</p>
            <p>Asunto: ${asunto}</p>
            <p>Mensaje: ${mensaje}</p>
        `;
      document.body.appendChild(resumen);
    });
    ```
