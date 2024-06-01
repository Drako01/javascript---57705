
# Ejercicios Integrados de JavaScript con Objetos, Clases y Arrays

## Objetos y Obtener Valores con Arrays

1. Crea un array de objetos llamado `personas`, donde cada objeto represente a una persona con las propiedades `nombre`, `edad` y `ciudad`. Imprime en la consola el nombre de la primera persona del array.

```js
const personas = [
  { nombre: 'Juan', edad: 30, ciudad: 'Madrid' },
  { nombre: 'Ana', edad: 25, ciudad: 'Barcelona' }
];
console.log(personas[0].nombre);
```

2. Agrega un nuevo objeto al array `personas` que represente a otra persona con las mismas propiedades. Luego, imprime en la consola la edad de la segunda persona del array.

```js
personas.push({ nombre: 'Luis', edad: 35, ciudad: 'Valencia' });
console.log(personas[1].edad);
```

3. Crea un array de objetos llamado `autos`, donde cada objeto represente un automóvil con las propiedades `marca`, `modelo` y `anio`. Imprime en la consola el modelo del segundo auto del array.

```js
const autos = [
  { marca: 'Toyota', modelo: 'Corolla', anio: 2020 },
  { marca: 'Honda', modelo: 'Civic', anio: 2019 }
];
console.log(autos[1].modelo);
```

4. Agrega un nuevo objeto al array `autos` que represente otro automóvil con las mismas propiedades. Luego, imprime en la consola el año del último auto del array.

```js
autos.push({ marca: 'Ford', modelo: 'Focus', anio: 2018 });
console.log(autos[autos.length - 1].anio);
```

## Objetos Constructores y Constructor y New con Arrays

5. Crea un constructor llamado `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Crea un array de productos utilizando este constructor y agrega al menos tres productos.

```js
function Producto(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}

const productos = [
  new Producto('Manzana', 1.2, 10),
  new Producto('Banana', 0.8, 20),
  new Producto('Naranja', 1.5, 15)
];
```

6. Crea un constructor llamado `Persona` con las propiedades `nombre`, `edad` y `ciudad`. Crea un array de personas utilizando este constructor y agrega al menos tres personas.

```js
function Persona(nombre, edad, ciudad) {
  this.nombre = nombre;
  this.edad = edad;
  this.ciudad = ciudad;
}

const personas2 = [
  new Persona('Maria', 28, 'Sevilla'),
  new Persona('Pedro', 34, 'Bilbao'),
  new Persona('Lucia', 22, 'Malaga')
];
```

7. Crea un constructor llamado `Libro` con las propiedades `titulo`, `autor` y `año`. Crea un array de libros utilizando este constructor y agrega al menos tres libros.

```js
function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
}

const libros = [
  new Libro('1984', 'George Orwell', 1949),
  new Libro('El Quijote', 'Miguel de Cervantes', 1605),
  new Libro('Cien Años de Soledad', 'Gabriel Garcia Marquez', 1967)
];
```

## Uso de THIS con Arrays

8. Crea un objeto llamado `rectangulo` con las propiedades `base` y `altura`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del rectángulo. Luego, crea un array de objetos `rectangulos` y calcula el área del primer rectángulo del array.

```js
const rectangulo = {
  base: 5,
  altura: 10,
  calcularArea: function() {
    return this.base * this.altura;
  }
};

const rectangulos = [rectangulo];
console.log(rectangulos[0].calcularArea());
```

9. Crea un objeto llamado `circulo` con la propiedad `radio`. Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del círculo. Luego, crea un array de objetos `circulos` y calcula el perímetro del segundo círculo del array.

```js
const circulo = {
  radio: 3,
  calcularPerimetro: function() {
    return 2 * Math.PI * this.radio;
  }
};

const circulos = [circulo, { radio: 4, calcularPerimetro: circulo.calcularPerimetro }];
console.log(circulos[1].calcularPerimetro());
```

10. Crea un objeto llamado `estudiante` con las propiedades `nombre`, `edad` y `curso`. Agrega un método llamado `presentarse` que imprima en la consola una presentación del estudiante. Luego, crea un array de objetos `estudiantes` y que cada estudiante se presente.

```js
const estudiante = {
  nombre: 'Carlos',
  edad: 21,
  curso: 'Matemáticas',
  presentarse: function() {
    console.log(`Hola, me llamo ${this.nombre}, tengo ${this.edad} años y estudio ${this.curso}.`);
  }
};

const estudiantes = [
  estudiante,
  { nombre: 'Sofia', edad: 23, curso: 'Física', presentarse: estudiante.presentarse },
  { nombre: 'Andrés', edad: 20, curso: 'Química', presentarse: estudiante.presentarse }
];

estudiantes.forEach(est => est.presentarse());
```

## Métodos y Operaciones con Objetos y Arrays

11. Crea un objeto llamado `cuentaBancaria` con las propiedades `saldo` y `titular`. Agrega un método llamado `depositar` que reciba un monto y lo sume al saldo. Luego, crea un array de cuentas bancarias y realiza un depósito en la primera cuenta del array.

```js
const cuentaBancaria = {
  saldo: 1000,
  titular: 'Juan',
  depositar: function(monto) {
    this.saldo += monto;
  }
};

const cuentasBancarias = [cuentaBancaria];
cuentasBancarias[0].depositar(500);
console.log(cuentasBancarias[0].saldo);
```

12. Agrega un método llamado `retirar` al objeto `cuentaBancaria` que reciba un monto y lo reste al saldo. Luego, crea un array de cuentas bancarias y realiza un retiro en la segunda cuenta del array.

```js
cuentaBancaria.retirar = function(monto) {
  this.saldo -= monto;
};

cuentasBancarias.push({ saldo: 2000, titular: 'Ana', depositar: cuentaBancaria.depositar, retirar: cuentaBancaria.retirar });
cuentasBancarias[1].retirar(300);
console.log(cuentasBancarias[1].saldo);
```

13. Crea un objeto llamado `agenda` que contenga un array de contactos. Agrega un método llamado `agregarContacto` que reciba un objeto de contacto y lo añada al array. Luego, crea un array de agendas y agrega un nuevo contacto en la primera agenda del array.

```js
const agenda = {
  contactos: [],
  agregarContacto: function(contacto) {
    this.contactos.push(contacto);
  }
};

const agendas = [agenda];
agendas[0].agregarContacto({ nombre: 'Luis', telefono: '123456789' });
console.log(agendas[0].contactos);
```

14. Agrega un método llamado `buscarContacto` al objeto `agenda` que reciba el nombre de un contacto y devuelva el objeto correspondiente. Luego, crea un array de agendas y busca un contacto en la segunda agenda del array.

```js
agenda.buscarContacto = function(nombre) {
  return this.contactos.find(contacto => contacto.nombre === nombre);
};

agendas.push({ contactos: [{ nombre: 'Maria', telefono: '987654321' }], agregarContacto: agenda.agregarContacto, buscarContacto: agenda.buscarContacto });
console.log(agendas[1].buscarContacto('Maria'));
```

## Operador IN y FOR...IN con Arrays

15. Crea un objeto llamado `frutas` con las propiedades `manzana`, `pera` y `naranja`. Utiliza el operador `in` para verificar si la propiedad `manzana` existe en el objeto. Luego, crea un array con los nombres de las frutas y verifica si "manzana" está en el array.

```js
const frutas = {
  manzana: 10,
  pera: 5,
  naranja: 8
};

console.log('manzana' in frutas);

const nombresFrutas = ['manzana', 'pera', 'naranja'];
console.log(nombresFrutas.includes('manzana'));
```

16. Utiliza un bucle `for...in` para iterar sobre las propiedades del objeto `frutas` e imprime en la consola el nombre de cada fruta. Luego, crea un array con los nombres de las frutas y recorre el array con un bucle `for...in`.

```

js
for (let fruta in frutas) {
  console.log(fruta);
}

for (let indice in nombresFrutas) {
  console.log(nombresFrutas[indice]);
}
```

## Clases y Métodos con Arrays

17. Crea una clase llamada `Rectangulo` con las propiedades `base` y `altura`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del rectángulo. Luego, crea un array de rectángulos y calcula el área del primer rectángulo del array.

```js
class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return this.base * this.altura;
  }
}

const rectangulos2 = [new Rectangulo(5, 10), new Rectangulo(6, 12)];
console.log(rectangulos2[0].calcularArea());
```

18. Crea una clase llamada `Circulo` con la propiedad `radio`. Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del círculo. Luego, crea un array de círculos y calcula el perímetro del segundo círculo del array.

```js
class Circulo {
  constructor(radio) {
    this.radio = radio;
  }

  calcularPerimetro() {
    return 2 * Math.PI * this.radio;
  }
}

const circulos2 = [new Circulo(3), new Circulo(4)];
console.log(circulos2[1].calcularPerimetro());
```

19. Crea una clase llamada `Empleado` con las propiedades `nombre`, `edad` y `cargo`. Agrega un método llamado `promocionar` que actualice el cargo del empleado. Luego, crea un array de empleados y promociona al primer empleado del array.

```js
class Empleado {
  constructor(nombre, edad, cargo) {
    this.nombre = nombre;
    this.edad = edad;
    this.cargo = cargo;
  }

  promocionar(nuevoCargo) {
    this.cargo = nuevoCargo;
  }
}

const empleados = [
  new Empleado('Carlos', 30, 'Desarrollador'),
  new Empleado('Ana', 25, 'Diseñadora')
];

empleados[0].promocionar('Gerente de Desarrollo');
console.log(empleados[0].cargo);
```

## Constructor y New con Arrays

20. Crea una clase llamada `Producto` con las propiedades `nombre`, `precio` y `cantidad`. Crea un objeto nuevo utilizando el operador `new` y la clase `Producto` y agrégalo a un array de productos.

```js
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}

const productos2 = [new Producto('Leche', 1.5, 10)];
console.log(productos2);
```

21. Crea una clase llamada `Estudiante` con las propiedades `nombre`, `edad` y `curso`. Crea un objeto nuevo utilizando el operador `new` y la clase `Estudiante` y agrégalo a un array de estudiantes.

```js
class Estudiante {
  constructor(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }
}

const estudiantes2 = [new Estudiante('Marcos', 21, 'Ingeniería')];
console.log(estudiantes2);
```

22. Crea una clase llamada `Libro` con las propiedades `titulo`, `autor` y `año`. Crea un objeto nuevo utilizando el operador `new` y la clase `Libro` y agrégalo a un array de libros.

```js
class Libro {
  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }
}

const libros2 = [new Libro('El Principito', 'Antoine de Saint-Exupéry', 1943)];
console.log(libros2);
```

## Objetos y Obtener Valores con Arrays

23. Crea un array de objetos llamado `productos`, donde cada objeto represente un producto con las propiedades `nombre`, `precio` y `cantidad`. Imprime en la consola el nombre del primer producto del array.

```js
const productos3 = [
  { nombre: 'Pan', precio: 1, cantidad: 50 },
  { nombre: 'Leche', precio: 1.5, cantidad: 30 }
];
console.log(productos3[0].nombre);
```

24. Agrega un nuevo objeto al array `productos` que represente otro producto con las mismas propiedades. Luego, imprime en la consola el precio del segundo producto del array.

```js
productos3.push({ nombre: 'Huevos', precio: 2, cantidad: 20 });
console.log(productos3[1].precio);
```

25. Crea un array de objetos llamado `empleados`, donde cada objeto represente a un empleado con las propiedades `nombre`, `edad` y `cargo`. Imprime en la consola el cargo del tercer empleado del array.

```js
const empleados2 = [
  { nombre: 'Luis', edad: 40, cargo: 'Gerente' },
  { nombre: 'Ana', edad: 30, cargo: 'Contadora' },
  { nombre: 'Juan', edad: 25, cargo: 'Secretario' }
];
console.log(empleados2[2].cargo);
```

26. Agrega un nuevo objeto al array `empleados` que represente otro empleado con las mismas propiedades. Luego, imprime en la consola la edad del último empleado del array.

```js
empleados2.push({ nombre: 'Sofia', edad: 35, cargo: 'Analista' });
console.log(empleados2[empleados2.length - 1].edad);
```

## Objetos Constructores y Constructor y New con Arrays

27. Crea un constructor llamado `CuentaBancaria` con las propiedades `saldo` y `titular`. Crea un array de cuentas bancarias utilizando este constructor y agrega al menos tres cuentas.

```js
function CuentaBancaria(saldo, titular) {
  this.saldo = saldo;
  this.titular = titular;
}

const cuentasBancarias2 = [
  new CuentaBancaria(1000, 'Carlos'),
  new CuentaBancaria(2000, 'Ana'),
  new CuentaBancaria(1500, 'Luis')
];
```

28. Crea un constructor llamado `Vehiculo` con las propiedades `marca`, `modelo` y `año`. Crea un array de vehículos utilizando este constructor y agrega al menos tres vehículos.

```js
function Vehiculo(marca, modelo, año) {
  this.marca = marca;
  this.modelo = modelo;
  this.año = año;
}

const vehiculos = [
  new Vehiculo('Toyota', 'Corolla', 2020),
  new Vehiculo('Honda', 'Civic', 2019),
  new Vehiculo('Ford', 'Focus', 2018)
];
```

29. Crea un constructor llamado `Pelicula` con las propiedades `titulo`, `director` y `anio`. Crea un array de películas utilizando este constructor y agrega al menos tres películas.

```js
function Pelicula(titulo, director, anio) {
  this.titulo = titulo;
  this.director = director;
  this.anio = anio;
}

const peliculas = [
  new Pelicula('El Padrino', 'Francis Ford Coppola', 1972),
  new Pelicula('El Señor de los Anillos', 'Peter Jackson', 2001),
  new Pelicula('Inception', 'Christopher Nolan', 2010)
];
```

## Uso de THIS con Arrays

30. Crea un objeto llamado `triangulo` con las propiedades `lado1`, `lado2` y `lado3`. Agrega un método llamado `calcularPerimetro` que calcule y devuelva el perímetro del triángulo. Luego, crea un array de objetos `triangulos` y calcula el perímetro del primer triángulo del array.

```js
const triangulo = {
  lado1: 3,
  lado2: 4,
  lado3: 5,
  calcularPerimetro: function() {
    return this.lado1 + this.lado2 + this.lado3;
  }
};

const triangulos = [triangulo];
console.log(triangulos[0].calcularPerimetro());
```

31. Crea un objeto llamado `alumno` con las propiedades `nombre`, `nota1` y `nota2`. Agrega un método llamado `calcularPromedio` que calcule y devuelva el promedio de las notas del alumno. Luego, crea un array de objetos `alumnos` y calcula el promedio del segundo alumno del array.

```js
const alumno = {
  nombre: 'Pedro',
  nota1: 8,
  nota2: 7,
  calcularPromedio: function() {
    return (this.nota1 + this.nota2) / 2;
  }
};

const alumnos = [
  alumno,
  { nombre: 'Maria', nota1: 9, nota2: 6, calcularPromedio: alumno.calcularPromedio }
];
console.log(alumnos[1].calcularPromedio());
```

32. Crea un objeto llamado `mascota` con las propiedades `nombre`, `edad` y `tipo`. Agrega un método

 llamado `esMayorEdad` que verifique si la edad de la mascota es mayor o igual a 5 años y devuelva true o false. Luego, crea un array de objetos `mascotas` y verifica si la primera mascota del array es mayor de edad.

```js
const mascota = {
  nombre: 'Fido',
  edad: 6,
  tipo: 'Perro',
  esMayorEdad: function() {
    return this.edad >= 5;
  }
};

const mascotas = [mascota];
console.log(mascotas[0].esMayorEdad());
```

## Métodos y Operaciones con Objetos y Arrays

33. Crea un objeto llamado `playlist` que contenga un array de canciones. Agrega un método llamado `agregarCancion` que reciba una canción y la añada al array de canciones. Luego, crea un array de playlists y agrega una nueva canción a la primera playlist del array.

```js
const playlist = {
  canciones: ['Canción 1', 'Canción 2'],
  agregarCancion: function(cancion) {
    this.canciones.push(cancion);
  }
};

const playlists = [playlist];
playlists[0].agregarCancion('Canción 3');
console.log(playlists[0].canciones);
```

34. Agrega un método llamado `eliminarCancion` al objeto `playlist` que reciba el título de una canción y la elimine del array de canciones. Luego, crea un array de playlists y elimina una canción del array de la segunda playlist.

```js
playlist.eliminarCancion = function(titulo) {
  const indice = this.canciones.indexOf(titulo);
  if (indice !== -1) {
    this.canciones.splice(indice, 1);
  }
};

const playlists2 = [
  { canciones: ['Canción A', 'Canción B'], agregarCancion: playlist.agregarCancion, eliminarCancion: playlist.eliminarCancion },
  { canciones: ['Canción X', 'Canción Y'], agregarCancion: playlist.agregarCancion, eliminarCancion: playlist.eliminarCancion }
];

playlists2[1].eliminarCancion('Canción X');
console.log(playlists2[1].canciones);
```

35. Crea un objeto llamado `compra` que contenga un array de productos. Agrega un método llamado `calcularTotal` que sume los precios de todos los productos del array. Luego, crea un array de compras y calcula el total de la primera compra del array.

```js
const compra = {
  productos: [
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 15 }
  ],
  calcularTotal: function() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
};

const compras = [compra];
console.log(compras[0].calcularTotal());
```

## Operador IN y FOR...IN con Arrays

36. Crea un objeto llamado `colores` con las propiedades `rojo`, `verde` y `azul`. Utiliza el operador `in` para verificar si la propiedad `rojo` existe en el objeto. Luego, crea un array con los nombres de los colores y verifica si "rojo" está en el array.

```js
const colores = { rojo: true, verde: true, azul: true };
console.log('rojo' in colores);

const nombresColores = ['rojo', 'verde', 'azul'];
console.log(nombresColores.includes('rojo'));
```

37. Utiliza un bucle `for...in` para iterar sobre las propiedades del objeto `colores` e imprime en la consola el nombre de cada color. Luego, crea un array con los nombres de los colores y recorre el array con un bucle `for...in`.

```js
for (let color in colores) {
  console.log(color);
}

for (let indice in nombresColores) {
  console.log(nombresColores[indice]);
}
```

## Clases y Métodos con Arrays

38. Crea una clase llamada `Cuadrado` con la propiedad `lado`. Agrega un método llamado `calcularArea` que calcule y devuelva el área del cuadrado. Luego, crea un array de cuadrados y calcula el área del primer cuadrado del array.

```js
class Cuadrado {
  constructor(lado) {
    this.lado = lado;
  }

  calcularArea() {
    return this.lado * this.lado;
  }
}

const cuadrados = [new Cuadrado(4), new Cuadrado(5)];
console.log(cuadrados[0].calcularArea());
```

39. Crea una clase llamada `Cancion` con las propiedades `titulo` y `artista`. Agrega un método llamado `reproducir` que imprima en la consola un mensaje indicando que la canción está reproduciéndose. Luego, crea un array de canciones y reproduce la primera canción del array.

```js
class Cancion {
  constructor(titulo, artista) {
    this.titulo = titulo;
    this.artista = artista;
  }

  reproducir() {
    console.log(`Reproduciendo: ${this.titulo} por ${this.artista}`);
  }
}

const canciones = [new Cancion('Shape of You', 'Ed Sheeran'), new Cancion('Blinding Lights', 'The Weeknd')];
canciones[0].reproducir();
```

40. Crea una clase llamada `Compra` que contenga un array de productos. Agrega un método llamado `calcularTotal` que sume los precios de todos los productos del array. Luego, crea un array de compras y calcula el total de la primera compra del array.

```js
class Compra {
  constructor(productos) {
    this.productos = productos;
  }

  calcularTotal() {
    return this.productos.reduce((total, producto) => total + producto.precio, 0);
  }
}

const compras2 = [
  new Compra([
    { nombre: 'Producto 1', precio: 10 },
    { nombre: 'Producto 2', precio: 20 }
  ])
];
console.log(compras2[0].calcularTotal());
```

## Ejercicio Integrado de JavaScript con Objetos, Clases y Arrays

41. Crea una clase llamada `TiendaOnline` que contenga arrays de productos y clientes. Los productos deben tener propiedades como `nombre`, `precio` y `cantidad`, mientras que los clientes deben tener propiedades como `nombre`, `email` y `direccion`. Agrega métodos a la clase `TiendaOnline` para agregar un producto nuevo, agregar un cliente nuevo, realizar una venta (que disminuya la cantidad disponible del producto) y enviar un correo electrónico de confirmación al cliente después de una venta. Luego, crea una instancia de `TiendaOnline`, agrega algunos productos y clientes, realiza una venta y envía un correo electrónico de confirmación al cliente.

```js
class TiendaOnline {
  constructor() {
    this.productos = [];
    this.clientes = [];
  }

  agregarProducto(producto) {
    this.productos.push(producto);
  }

  agregarCliente(cliente) {
    this.clientes.push(cliente);
  }

  realizarVenta(nombreProducto, cantidad, emailCliente) {
    const producto = this.productos.find(p => p.nombre === nombreProducto);
    const cliente = this.clientes.find(c => c.email === emailCliente);

    if (producto && cliente && producto.cantidad >= cantidad) {
      producto.cantidad -= cantidad;
      this.enviarCorreoConfirmacion(cliente.email, producto.nombre, cantidad);
    } else {
      console.log('Venta no realizada. Verifique el producto, la cantidad o el cliente.');
    }
  }

  enviarCorreoConfirmacion(email, nombreProducto, cantidad) {
    console.log(`Correo enviado a ${email}: Gracias por tu compra de ${cantidad} ${nombreProducto}(s).`);
  }
}

const tienda = new TiendaOnline();

tienda.agregarProducto({ nombre: 'Laptop', precio: 1000, cantidad: 10 });
tienda.agregarProducto({ nombre: 'Mouse', precio: 20, cantidad: 50 });

tienda.agregarCliente({ nombre: 'Juan', email: 'juan@example.com', direccion: 'Calle Falsa 123' });
tienda.agregarCliente({ nombre: 'Maria', email: 'maria@example.com', direccion: 'Avenida Siempreviva 456' });

tienda.realizarVenta('Laptop', 1, 'juan@example.com');
```

