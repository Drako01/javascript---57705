const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    // Usando Sweet Alert
    // Swal.fire({
    //     title: "Me hicieron Click.!",
    //     text: "Y ahora que hacemos ??? ",
    //     // icon: "info",
    //     imageUrl: "/img/logo.png",
    //     imageHeight: 200,
    //     imageAlt: "CoderHouse",
    //     // icon: "success"
    //     // icon: "error"
    //     // icon: "warning"
    //     // icon: "question"
    //     footer: '<a href="https://coderhouse.com">Llevame a Coder</a>',

    // });

    // Swal.fire({
    //     title: "Quiere finalizar la Compra?",
    //     showDenyButton: true,
    //     showCancelButton: true,
    //     confirmButtonText: "Aceptar",
    //     denyButtonText: `No Aceptar`
    // }).then((result) => {
    //     /* Read more about isConfirmed, isDenied below */
    //     if (result.isConfirmed) {
    //         Swal.fire("Compra realizada!", "", "success");
    //     } else if (result.isDenied) {
    //         Swal.fire("La Compra no se realizo", "", "info");
    //     }
    // });

    // Swal.fire({
    //     position: "top-end",
    //     icon: "success",
    //     title: "Producto agregado al Carrito",
    //     showConfirmButton: false,
    //     timer: 20500,
    //     timerProgressBar: true,
    // });

    // Usando Toastify

    // Toastify({

    //     text: "${usuario.name} esta OnLine.!",

    //     duration: 3000 /// Milisegundos > Equivale a 3seg

    //     }).showToast();

    Toastify(
        {
            text: "El usuario esta OnLine.!",
            className: "info",
            // destination: "https://github.com/apvarun/toastify-js",
            // newWindow: true,
            onClick: function () {
                Toastify({
                    text: "El usuario esta OnLine.!",
                    position: "right",
                    gravity: "bottom",
                    duration: 3000, /// Milisegundos > Equivale a 3seg
                    offset: {
                        x: 150, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                        y: 150 // vertical axis - can be a number or a string indicating unity. eg: '2em'
                    },
                }).showToast()
            },
            gravity: "top",
            avatar: "/img/logo.png",
            position: "right",
            close: true,
            style: {
                background: "linear-gradient(to right, #12000b, #96c93d)",
            }
        }
    ).showToast();
})


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});