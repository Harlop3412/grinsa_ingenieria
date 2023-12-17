
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














// function inicializarModal() {
//     // Función para mostrar la imagen en la ventana modal
//     const mostrarImagen = (modal, ventanaImg, img) => {
//         ventanaImg.src = img.src;
//         modal.classList.remove('hidden');
//         console.log('mostrarImagen remove hudden')
//     };

//     // Función para ocultar la imagen en la ventana modal
//     const ocultarImagen = (ventanaImg, modal) => {
//         ventanaImg.src = '';
//         modal.classList.add('hidden');
//         console.log('ocultarImagen add hidden')
//     };

//     // Función para configurar eventos de clic para galerías
//     const configurarGaleria = (modal, ventanaImg, botonAbrir, botonCerrar, imagenes) => {
//         botonAbrir.addEventListener('click', () => {
//             mostrarImagen(modal, ventanaImg, botonAbrir);
//         });

//         botonCerrar.addEventListener('click', () => {
//             ocultarImagen(ventanaImg, modal);
//         });

//         imagenes.forEach((imagen) => {
//             imagen.addEventListener('click', () => {
//                 mostrarImagen(modal, ventanaImg, imagen);
//             });
//         });
//         console.log('configurarGaleria')
//     };

//     // Configuración de la primera galería
//     const modal1 = document.getElementById('modalApp');
//     const ventanaImg1 = document.getElementById('ventanaImg');
//     const abrirModal1 = document.getElementById('btn1');
//     const cerrarModal1 = document.getElementById('removeImg');
//     const imagenesGaleria1 = [
//         document.getElementById('btn1'),
//         document.getElementById('btn2'),
//         document.getElementById('btn3'),
//         document.getElementById('btn4'),
//         document.getElementById('btn5'),
//         document.getElementById('btn6')
//     ];

//     configurarGaleria(modal1, ventanaImg1, abrirModal1, cerrarModal1, imagenesGaleria1);
//     console.log('modal galeria1: '+ imagenesGaleria1.innerHTML)

//     // Configuración de la segunda galería
//     // ...

//     // Configuración de la tercera galería
//     // ...
// }

// Llamada a la función para inicializar el comportamiento de la modal
// inicializarModal();
