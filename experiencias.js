let currentImageIndex = 0
const images = document.querySelectorAll('.banner .banner-img')

function changeImage() {
  images[currentImageIndex].classList.remove('active')
  currentImageIndex = (currentImageIndex + 1) % images.length
  images[currentImageIndex].classList.add('active')
}

setInterval(changeImage, 2000)

document.addEventListener('DOMContentLoaded', () => {
  const getPokemonImageButton = document.getElementById('getPokemonImage')
  const pokemonImage = document.getElementById('pokemonImage')

  getPokemonImageButton.addEventListener('click', () => {
    // Generar un número aleatorio de Pokémon (del 1 al 151)
    const randomPokemonId = Math.floor(Math.random() * 151) + 1

    // URL de la API de PokeAPI para obtener información de un Pokémon
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}/`

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const imageUrl = data.sprites.front_default

        if (imageUrl) {
          // Mostrar la imagen del Pokémon
          pokemonImage.src = imageUrl
        } else {
          alert('No se encontró una imagen para este Pokémon.')
        }
      })
      .catch((error) => {
        console.error('Error al obtener los datos de la API: ' + error)
      })
  })
})
