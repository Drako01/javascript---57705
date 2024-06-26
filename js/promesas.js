// console.log("Funcion sinconica 1")
// setTimeout( // Funcion
//     ()=>{console.log("Funcion asinconica 1")} // Funcion de Call Back
// , 0) // Tiempo en Milisegundos
// // Cola se llama Queue
// console.log("Funcion sinconica 2")


// setInterval(()=>{
//     console.log("Funcion sinconica 1")
// }, 1000)

// console.log("Iniciar");

// const fin = setTimeout(()=>{
//     console.log("Final");
// }, 2000);

// clearTimeout(fin);

const eventoAFuturo = (pasarDeNivel) => {
    return new Promise((resolve, reject) => {
        pasarDeNivel ? resolve("Promesa Cumplida") : reject("Promesa Rechazada");        
    })
}
// pasarDeNivel === true
// pasarDeNivel === false
// console.log(eventoAFuturo(true));
// console.log(eventoAFuturo(false));

eventoAFuturo(true)
    .then((res) =>{
        console.log(res, " Usted paso al Nivel 2");
    })
    .catch((error) =>{
        console.error(error);
    })
    .finally(() => {
        console.log("Chau Mundo");
    })

eventoAFuturo(false)
    .then((res) =>{
        console.log(res);
    })
    .catch((error) =>{
        console.error(error);
    })
    .finally(() => {
        console.log("Chau Mundo");
    })


const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
        const datos = await respuesta.json();
        const data = await datos.results
        for( item of data) {
            const card = document.createElement('div')
            card.innerHTML = `
                <div class="card" style="width: 18rem; height: 32rem;">
                    <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Proveedor: ${item.official_store_name}</p>
                        <p class="card-text">Precio: $${item.price}.-</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>     
                </div>  
            `
    
            cards.appendChild(card)
        }

}

peticionML(); // Se ejecuta en Segundo Plano