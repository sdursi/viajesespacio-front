
document.getElementById('formulario').addEventListener('submit', function (event) {
    if (!document.getElementById('terminos').checked) {
        alert('Debes aceptar los Términos y Condiciones para enviar el formulario.');
        event.preventDefault(); // Evita el envío del formulario
    };
})
 

