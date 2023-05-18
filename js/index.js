
/***SECCION PROYECTOS***/

/***modal galeria1 */
/*constante modal captura id-de contenedor general galeria html*/
const modalApp = document.getElementById('modalApp');

/*constante modal captura id img html */
const ventanaImg = document.getElementById('ventanaImg');

/*escucar eventos con fx arrow que si es verdad que se da clic en una img con la clase 'subgaleria__modal-card' ocurre la funcion 'ver__img'*/
modalApp.addEventListener('click', (m) => {
    m.stopPropagation();
    m.target.classList.contains('subgaleria__modal-card') ? ver_img(m) : '';
})

/*fx arrow muestra en consola el contenido de la img al dar clic en alguna img de la galeria*/
const ver_img = (m) => {
    console.log(m.target);
    ventanaImg.src = m.target.src;
}


/***modal galeria2 */
/*constante modal captura id-de contenedor general galeria html*/
const modalApp2 = document.getElementById('modalApp2');

/*constante modal captura id img html */
const ventanaImg2 = document.getElementById('ventanaImg2');

/*escucar eventos con fx arrow que si es verdad que se da clic en una img con la clase 'subgaleria__modal-card' ocurre la funcion 'ver__img'*/
modalApp2.addEventListener('click', (m) => {
    m.stopPropagation();
    m.target.classList.contains('subgaleria__modal-card') ? ver_img2(m) : '';
})

/*fx arrow muestra en consola el contenido de la img al dar clic en alguna img de la galeria*/
const ver_img2 = (m) => {
    console.log(m.target);
    ventanaImg2.src = m.target.src;
}


/***modal galeria3 */
/*constante modal captura id-de contenedor general galeria html*/
const modalApp3 = document.getElementById('modalApp3');

/*constante modal captura id img html */
const ventanaImg3 = document.getElementById('ventanaImg3');

/*escucar eventos con fx arrow que si es verdad que se da clic en una img con la clase 'subgaleria__modal-card' ocurre la funcion 'ver__img'*/
modalApp3.addEventListener('click', (m) => {
    m.stopPropagation();
    m.target.classList.contains('subgaleria__modal-card') ? ver_img3(m) : '';
})

/*fx arrow muestra en consola el contenido de la img al dar clic en alguna img de la galeria*/
const ver_img3 = (m) => {
    console.log(m.target);
    ventanaImg3.src = m.target.src;
}

