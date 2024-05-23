/***
 * Declarar una clase Jugador que permita registrar nombre, 
 * número de camiseta, edad, y si está lesionado. 
 * Luego instanciar al menos cinco (5) objetos usando esta clase, 
 * y asociarlos a un array.
 */

const jugadores = [];

class Jugador{
    constructor(nombre, numeroDeCamiseta, edad, lesionado){
        this.nombre = nombre;
        this.numeroDeCamiseta = parseInt(numeroDeCamiseta);
        this.edad = parseInt(edad);
        this.lesionado = lesionado || false;
    }

    estadoLesionado(){
        this.lesionado = true;
        console.log("El jugador " + this.nombre + " está Lesionado.!");
    }
}

function crearJugador(){
    const nombre = prompt("Ingrese el nombre del Jugador: ");
    const numeroDeCamiseta = parseInt(prompt("Ingrese Nro de camiseta:"));
    const edad = parseInt(prompt("Ingrese la edad: "));   
    
    return new Jugador(nombre, numeroDeCamiseta, edad);
}

for (let i = 0; i < 5; i++) {
    const nuevoJugador = crearJugador();
    jugadores.push(nuevoJugador);
}

// const jugador1 = new Jugador("Agustin", 10, 20);
// const jugador2 = new Jugador("Alejandro", 9, 48);
// const jugador3 = new Jugador("Sara", 7, 25, true);
// const jugador4 = new Jugador("Tomas", 6, 22);
// const jugador5 = new Jugador("Emiliano", 4, 26);

// jugadores.push(jugador1);
// jugadores.push(jugador2);
// jugadores.push(jugador3);
// jugadores.push(jugador4);
// jugadores.push(jugador5);

console.log(jugadores);

// jugador1.estadoLesionado();