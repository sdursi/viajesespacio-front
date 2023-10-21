/*fin de contacto*/

document
  .getElementById('formulario')
  .addEventListener('submit', function (event) {
    if (!document.getElementById('terminos').checked) {
      alert(
        'Debes aceptar los Términos y Condiciones para enviar el formulario.',
      )
      event.preventDefault() // Evita el envío del formulario
    }
  })
/*fin de contacto*/
/* JavaScript para el carrusel */
let currentImageIndex = 0
const images = document.querySelectorAll('.banner .banner-img')

function changeImage() {
  images[currentImageIndex].classList.remove('active') // Oculta la imagen actual
  currentImageIndex = (currentImageIndex + 1) % images.length // Calcula el índice de la siguiente imagen
  images[currentImageIndex].classList.add('active') // Muestra la siguiente imagen
}

// Establece un intervalo para cambiar las imágenes cada 3 segundos (3000 milisegundos)
setInterval(changeImage, 3000)
