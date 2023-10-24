  // Función para obtener la imagen astronómica del día


// Función para obtener la imagen astronómica del día
function getAstronomyPictureOfTheDay() {
    // URL de la API de la NASA (APOD)
    const apiUrl = "https://api.nasa.gov/planetary/apod"&es/español;

    // Parámetros de la solicitud
    const apiKey = "DEMO_KEY"; // Reemplaza "DEMO_KEY" con tu clave de API de la NASA

    // Construir la URL completa
    const fullUrl = `${apiUrl}?api_key=${apiKey}`;

    // Realizar una solicitud GET a la API de la NASA
    fetch(fullUrl)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos de la API');
            }}
                )}
            


// Función para obtener la imagen astronómica del día
function getAstronomyPictureOfTheDay() {
    // URL de la API de la NASA (APOD)
    const apiUrl = "https://api.nasa.gov/planetary/apod";

    // Parámetros de la solicitud
    const apiKey = "DEMO_KEY"; // Reemplaza "DEMO_KEY" con tu clave de API de la NASA

    // Construir la URL completa
    const fullUrl = `${apiUrl}?api_key=${apiKey}`;

    // Realizar una solicitud GET a la API de la NASA
    fetch(fullUrl)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error('Error al obtener los datos de la API');
            }
        })
        .then(data => {
            // Manipula los datos de la API aquí
            const apodImage = document.getElementById("apodImage");
            const apodTitle = document.getElementById("apodTitle");
            const apodExplanation = document.getElementById("apodExplanation");

            apodImage.src = data.url;
            apodTitle.textContent = data.title;
            apodExplanation.textContent = data.explanation;
        })
        .catch(error => {
            console.error(error);
        });
}

// Llama a la función para obtener la imagen astronómica del día al cargar la página
getAstronomyPictureOfTheDay();