//Validación de un formulario con Javascript
        //Fuente: https://desarrolloweb.com/articulos/1767.php
        document.addEventListener("DOMContentLoaded", function () {
            document.getElementById("formulario").addEventListener('submit', validarFormulario);
        });

        function validarFormulario(evento) {
            evento.preventDefault();
            var nombre = document.getElementById('nombre').value;
            if (nombre.length == 0) {
                alert('No has escrito nada en el nombre');
                return;
            }
            var apellido = document.getElementById('apellido').value;
            if (apellido.length == 0) {
                alert('No has escrito nada en apellido');
                return;
            }

            function validateEmail(email) {
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
                return regex.test(email)
                }

                function validateForm() {
                    const emailInput = document.getElementById('email');
                    const email = emailInput.value;
                    if (!validateEmail(email)) {
                    alert('Por favor ingrese un correo electrónico válido.');
                    } else {
                    alert('Correo electrónico enviado correctamente.');
                    }
                }
            var numero = document.getElementById('numero').value;
            if (numero.length ==0){
                alert('No has indicado bien tu contacto').value;
                return;
            }
            var fecha = document.getElementById('fecha').value;
            if (fecha.length ==0){
                alert('indica tu fecha').value;
                return;
            }
			var submit = window.confirm('Enviar');
            if (resultado === true){
                windows.alert('estas seguro');{
                }false
                    windows.alert('pareces indeciso');    
		
			}
            this.submit();}