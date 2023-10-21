document.getElementById('formulario').addEventListener('submit', function (event) {
    if (!document.getElementById('terminos').checked) {
        alert('Debes aceptar los Términos y Condiciones para enviar el formulario.');
        event.preventDefault(); // Evita el envío del formulario
    }
});

//*Validación de un formulario con Javascript*/
/*(function () {
    //Variables
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');
    var validarNombre = function (e) {
        if (formulario.nombre.value == 0) {
            alert("Completa el campo ");
        } }
    var formulario = document.getElementsByName('formulario')[0],
        elementos = formulario.elements,
        boton = document.getElementById('btn');
    var validarApellido = function (e) {
        if (formulario.apellido.value == 0) {
            alert("Completa el campo ");
        } }
    var validartelefono = function (e) {
        if (formulario.telefono.value == 0) {
            alert("Completa el campo ");
        } }
    var validarcorreo = function (e) {
        if (formulario.correo.value == 0) {
            alert("Completa el campo ");
        } };
    var validarCheckbox = function (e) {
        if (formulario.terminos.checked == false) {
            alert("Acepta los términos y condiciones");
        } };
    var validar = function (e) {
        validarNombre(e);
        validarApellido(e);
        validartelefono(e);
        validarcorreo(e);
        validarCheckbox(e);
    };
    formulario.addEventListener("submit", validar);
}())*/