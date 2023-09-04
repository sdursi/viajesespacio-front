let currentImageIndex = 0
const images = document.querySelectorAll('.banner img')

function changeImage() {
  images[currentImageIndex].style.display = 'none'
  currentImageIndex = (currentImageIndex + 1) % images.length
  images[currentImageIndex].style.display = 'block'
}

// Cambia la imagen cada 3 segundos (puedes ajustar el tiempo)
setInterval(changeImage, 2000)
