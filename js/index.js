
/***SECCION PROYECTOS***/

/*constante modal captura id-de contenedor general galeria html*/
const modalApp = document.getElementById('modalApp');
/*constante modal captura id contenedor img y boton html*/
const modalBtn = document.getElementById('modalBtn');
/*constante modal captura id img html (nota: boton sin id)*/
const ventanaImg = document.getElementById('ventanaImg');
/*constante captura id del boton cerrar modal inidividual*/
const cerrar = document.getElementById('cerrar');

/*escucar eventos con fx arrow que si es verdad que se da clic en una img con la clase 'subgaleria__modal-card' ocurre la funcion 'ver__img'*/
modalApp.addEventListener('click', (m) => {
    m.stopPropagation();
    m.target.classList.contains('subgaleria__modal-card') ? ver_img(m) : '';
    cerrar.classList.contains('hidden') ? cerrar__img() : '';

})

/*fx arrow muestra en console.log el contenido de la img al dar clic en alguna img de la galeria*/
const ver_img = (m) => {
    console.log(m.target);
    ventanaImg.src = m.target.src;
    modalBtn.classList.toggle('hidden');
}

/*fx para boton cerrar de imagenes individuales de modal*/
// const cerrar__img =() => {
//     cerrar.remove('#modalBtn');
// }







/*prueba moda2*/
// stopPropagation(); evita que se propaguen otros eventos sobre el objeto mi 

document.querySelectorAll('.container__modal img').forEach(mod => {
    mod.addEventListener('click', function (mi) {
        mi.stopPropagation();
        this.parentNode.classList.add('active');
    })
})

document.querySelectorAll('.container__modal img').forEach(mod => {
    mod.addEventListener('click', function (mi) {
        this.classList.remove('active');
        console.log('click');
    })
})



