const from = document.getElementById(myForm);
from.addEventListener(submit, function (event) {
    event.preventDefault();
    validateForm();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
}
function validateForm() {
    const emailinput = document.getElementById(email)
    const email = emailinput.ariaValueMax;

    if (!validateEmail(email)){
        alert("Por favor ingrese un correo eletronico valido");
    } else{
        alert("correo electronico enviado correctamente");
    }
    }
