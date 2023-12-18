
//funcion para resetear formularios, avisar que los datos se enviaron. Nota: parametro formId es el id del formulario 
function resetearFormulario(formId) {
    console.log('La función resetearFormulario(formId) se está llamando correctamente.');
    const form = document.getElementById(formId);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar la recarga de la página por defecto

        // Muestra la alerta con SweetAlert
        swal('Datos enviados correctamente', '', 'success')
            .then(() => {
                // Envía el formulario cuando se cierra la alerta
                form.submit();
                console.log('Evento submit función resetearFormulario(formId)');

                // Restablece el formulario después de enviarlo
                form.reset();
            });
    });
}
resetearFormulario("modalForm");
resetearFormulario('formulario');//form seccion contacto

//valida los campos
function validarCampos(formularioId, nombreId, correoId) {
    console.log('La función validarCampos(formularioId, nombreId, correoId) se está llamando correctamente.');
    let formulario = document.getElementById(formularioId);
    let nombreInput = document.getElementById(nombreId);
    let correoInput = document.getElementById(correoId);

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        let nombre = nombreInput.value;
        let correo = correoInput.value;
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (nombre === '') {
            alert('El nombre no puede estar vacío');
            return;
        } else if (correo === '') {
            alert('El correo no puede estar vacío');
            return;
        } else if (!regex.test(correo)) {
            alert('Ingresa un email válido');
            return;
        } else {
            console.log('nombre ingresado: ' + nombre);
            console.log('email ingresado: ' + correo);
        }
    });
}

validarCampos('formulario', 'nombre', 'correo');
validarCampos('modalForm', 'modalNombre', 'modalCorreo');

