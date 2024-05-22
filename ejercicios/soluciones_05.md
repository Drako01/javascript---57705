## Objetos y Obtener Valores

### Crear e imprimir el nombre del objeto persona:

```js
const persona = {
  nombre: "Juan",
  edad: 30,
  ciudad: "Madrid",
};
console.log(persona.nombre);
```

Agregar propiedad telefono al objeto persona e imprimirla:

```js
persona.telefono = "123456789";
console.log(persona.telefono);
```

Crear e imprimir el modelo del objeto coche:

```js
const coche = {
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
};
console.log(coche.modelo);
```

Agregar propiedad color al objeto coche e imprimirla:

```js
coche.color = "Rojo";
console.log(coche.color);
```

Objetos Constructores y Constructor y New
Crear un constructor Producto y un objeto nuevo:

```js
function Producto(nombre, precio, cantidad) {
  this.nombre = nombre;
  this.precio = precio;
  this.cantidad = cantidad;
}
const producto1 = new Producto("Laptop", 1000, 5);
```

Crear un constructor Persona y un objeto nuevo:

```js
function Persona(nombre, edad, ciudad) {
  this.nombre = nombre;
  this.edad = edad;
  this.ciudad = ciudad;
}
const persona1 = new Persona("Ana", 25, "Barcelona");
```

Crear un constructor Libro y un objeto nuevo:

```js
function Libro(titulo, autor, anio) {
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
}
const libro1 = new Libro("1984", "George Orwell", 1949);
```

Uso de THIS
Crear un objeto rectangulo con método calcularArea:

```js
const rectangulo = {
  base: 10,
  altura: 5,
  calcularArea: function () {
    return this.base * this.altura;
  },
};
console.log(rectangulo.calcularArea());
```

Crear un objeto circulo con método calcularPerimetro:

```js
const PI = 3.14;
const circulo = {
  radio: 7,
  calcularPerimetro: function () {
    return 2 * PI * this.radio;
  },
};
console.log(circulo.calcularPerimetro());
```

Crear un objeto estudiante con método presentarse:

```js
const estudiante = {
  nombre: "Carlos",
  edad: 20,
  curso: "Ingeniería",
  presentarse: function () {
    console.log(
      `Hola, me llamo ${this.nombre}, tengo ${this.edad} anios y estudio ${this.curso}.`
    );
  },
};
estudiante.presentarse();
```

Métodos y Operaciones con Objetos
Crear un objeto cuentaBancaria con método depositar:

```js
const cuentaBancaria = {
  saldo: 1000,
  titular: "Juan",
  depositar: function (monto) {
    this.saldo += monto;
  },
};
cuentaBancaria.depositar(500);
console.log(cuentaBancaria.saldo);
```

Agregar método retirar al objeto cuentaBancaria:

```js
cuentaBancaria.retirar = function (monto) {
  this.saldo -= monto;
};
cuentaBancaria.retirar(200);
console.log(cuentaBancaria.saldo);
```

Crear un objeto agenda con método agregarContacto:

```js
const agenda = {
  contactos: [],
  agregarContacto: function (contacto) {
    this.contactos.push(contacto);
  },
};
agenda.agregarContacto({ nombre: "María", telefono: "987654321" });
console.log(agenda.contactos);
```

Agregar método buscarContacto al objeto agenda:

```js
agenda.buscarContacto = function (nombre) {
  return this.contactos.find((contacto) => contacto.nombre === nombre);
};
console.log(agenda.buscarContacto("María"));
```

Operador IN y FOR...IN
Verificar si la propiedad manzana existe en el objeto frutas:

```js
const frutas = {
  manzana: 5,
  pera: 2,
  naranja: 3,
};
console.log("manzana" in frutas);
```

Iterar sobre las propiedades del objeto frutas:

```js
for (const fruta in frutas) {
  console.log(fruta);
}
```

Clases y Métodos
Crear una clase Rectangulo con método calcularArea:

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
const rectangulo1 = new Rectangulo(10, 5);
console.log(rectangulo1.calcularArea());
```

Crear una clase Circulo con método calcularPerimetro:

```js
const PI = 3.14;

class Circulo {
  constructor(radio) {
    this.radio = radio;
  }
  calcularPerimetro() {
    return 2 * PI * this.radio;
  }
}
const circulo1 = new Circulo(7);
console.log(circulo1.calcularPerimetro());
```

Crear una clase Empleado con método promocionar:

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
const empleado1 = new Empleado("Luis", 30, "Asistente");
empleado1.promocionar("Gerente");
console.log(empleado1.cargo);
```

Constructor y New
Crear una clase Producto y un objeto nuevo:

```js
class Producto {
  constructor(nombre, precio, cantidad) {
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;
  }
}
const producto2 = new Producto("Smartphone", 800, 10);
```

Crear una clase Estudiante y un objeto nuevo:

```js
class Estudiante {
  constructor(nombre, edad, curso) {
    this.nombre = nombre;
    this.edad = edad;
    this.curso = curso;
  }
}
const estudiante2 = new Estudiante("Laura", 22, "Matemáticas");
```

Crear una clase Libro y un objeto nuevo:

```js
class Libro {
  constructor(titulo, autor, anio) {
    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
  }
}
const libro2 = new Libro("El Quijote", "Miguel de Cervantes", 1605);
```

Métodos y Operaciones con Objetos
Agregar método buscarContacto a la clase Agenda:

```js
class Agenda {
  constructor() {
    this.contactos = [];
  }
  agregarContacto(contacto) {
    this.contactos.push(contacto);
  }
  buscarContacto(nombre) {
    return this.contactos.find((contacto) => contacto.nombre === nombre);
  }
}
const miAgenda = new Agenda();
miAgenda.agregarContacto({ nombre: "Ana", telefono: "123456789" });
console.log(miAgenda.buscarContacto("Ana"));
```

Crear una clase Vehiculo con método detalles:

```js
class Vehiculo {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
  }
  detalles() {
    console.log(
      `Marca: ${this.marca}, Modelo: ${this.modelo}, anio: ${this.anio}`
    );
  }
}
const vehiculo1 = new Vehiculo("Ford", "Mustang", 2021);
vehiculo1.detalles();
```

Agregar método acelerar a la clase Vehiculo:

```js
Vehiculo.prototype.acelerar = function () {
  console.log(`${this.marca} ${this.modelo} está acelerando.`);
};
vehiculo1.acelerar();
```

Crear una clase Rectangulo con método calcularPerimetro:

```js
class Rectangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }
  calcularPerimetro() {
    return 2 * (this.base + this.altura);
  }
}
const rectangulo2 = new Rectangulo(10, 5);
console.log(rectangulo2);
```
