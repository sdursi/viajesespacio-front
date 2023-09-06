let currentImageIndex = 0
const images = document.querySelectorAll('.banner .banner-img')

function changeImage() {
  images[currentImageIndex].classList.remove('active')
  currentImageIndex = (currentImageIndex + 1) % images.length
  images[currentImageIndex].classList.add('active')
}

setInterval(changeImage, 2000)
