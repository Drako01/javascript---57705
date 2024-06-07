const galleryContainer = document.querySelector('.slide');
const prev = document.querySelector('.control.icon-prev');
const next = document.querySelector('.control.icon-next');

const imagenes = ['001', '002', '003'];
let currentIndex = 0;

// Función para generar los elementos de la galería
function createGallery() {
    imagenes.forEach((img, index) => {
        const li = document.createElement('li');
        const image = document.createElement('img');
        image.src = `img/${img}.webp`;
        image.alt = `img ${index + 1}`;
        li.appendChild(image);
        if (index === 0) {
            li.classList.add('active');
        }
        galleryContainer.appendChild(li);
    });
}

// Función para mostrar la imagen en el índice especificado
function showImage(index) {
    const galleryItems = document.querySelectorAll('.slide li');
    galleryItems.forEach((li, i) => {
        li.classList.toggle('active', i === index);
    });
}

// Función para mostrar la siguiente imagen
function showNextImage() {
    currentIndex = (currentIndex + 1) % imagenes.length;
    showImage(currentIndex);
}

// Función para mostrar la imagen anterior
function showPrevImage() {
    currentIndex = (currentIndex - 1 + imagenes.length) % imagenes.length;
    showImage(currentIndex);
}

// Añadir eventos a los botones
next.addEventListener('click', showNextImage);
prev.addEventListener('click', showPrevImage);

// Inicializar la galería
createGallery();
showImage(currentIndex);
