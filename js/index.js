
/***SECCION PROYECTOS***/

/***modal galeria1 */
/*constante modal captura id-de contenedor general galeria html*/

function mostrarModal() {

    const modalApp = document.getElementById('modalApp');

    /*constante modal captura id img html */
    const ventanaImg = document.getElementById('ventanaImg');


    /*escucar eventos con fx arrow que si es verdad que se da clic en una img con la clase 'subgaleria__modal-card' ocurre la funcion 'ver__img'*/
    modalApp.addEventListener('click', (m) => {
        m.stopPropagation();
        m.target.classList.contains('subgaleria__modal-card') ? verImg(m) : '';
    })

    /*fx arrow muestra en consola el contenido de la img al dar clic en alguna img de la galeria*/
    const verImg = (m) => {
        console.log(m.target);
        ventanaImg.src = m.target.src;
    }

    /*funciones eventos click imgs de galeria1*/
    //el  elemento con este id hace de evento click
    //img1
    const ver1 = document.getElementById('btn1');
    ver1.addEventListener('click', () => {
        boton();
        console.log('ver1');
    })
    //img2
    const ver2 = document.getElementById('btn2');
    ver2.addEventListener('click', () => {
        boton();
        console.log('ver2');
    })
    //img3
    const ver3 = document.getElementById('btn3');
    ver3.addEventListener('click', () => {
        boton();
        console.log('ver3');
    })
    //img4
    const ver4 = document.getElementById('btn4');
    ver4.addEventListener('click', () => {
        boton();
        console.log('ver4');
    })
    //img5
    const ver5 = document.getElementById('btn5');
    ver5.addEventListener('click', () => {
        boton();
        console.log('ver5');
    })
    //img6
    const ver6 = document.getElementById('btn6');
    ver6.addEventListener('click', () => {
        boton();
        console.log('ver6');
    })

    // funcion que remueve clase hidden  elemento con este id se le aplica la funcion
    function boton() {
        let b = document.getElementById('removeImg');
        b.classList.remove('hidden');
        console.log('remove class hidden');
    }

    /*fx para remover la img reemplaza elemnto src por 'vacio'*/
    const closeImg = document.getElementById('removeImg');
    closeImg.addEventListener('click', () => {
        ventanaImg.src = ''.src;
        const borrarImg = document.getElementById('removeImg');
        borrarImg.classList.add('hidden')
        console.log('add-hidden');
    })

    /***modal galeria2 */
    /*constante modal captura id-de contenedor general galeria html*/
    const modalApp2 = document.getElementById('modalApp2');

    /*constante modal captura id img html */
    const ventanaImg2 = document.getElementById('ventanaImg2');

    /*escucar eventos con fx arrow que si es verdad que se da clic en una img con la clase 'subgaleria__modal-card' ocurre la funcion 'ver__img2'*/
    modalApp2.addEventListener('click', (m) => {
        m.stopPropagation();
        m.target.classList.contains('subgaleria__modal-card') ? ver_img2(m) : '';
    })

    /*fx arrow muestra en consola el contenido de la img al dar clic en alguna img de la galeria*/
    const ver_img2 = (m) => {
        console.log(m.target);
        ventanaImg2.src = m.target.src;
    }

    /*funciones eventos click imgs de galeria2*/
    //el  elemento con este id hace de evento click
    //img1
    const ver7 = document.getElementById('btn7');
    ver7.addEventListener('click', () => {
        boton2();
        console.log('ver-gal2-1');
    })
    //img2
    const ver8= document.getElementById('btn8');
    ver8.addEventListener('click', () => {
        boton2();
        console.log('ver-gal2-2');
    })
    //img3
    const ver9 = document.getElementById('btn9');
    ver9.addEventListener('click', () => {
        boton2();
        console.log('ver-gal2-3');
    })

    //ejemplo funcion que cambia estilos del css al  elemento con este id se le aplican estos cambios de estilos
    function boton2() {
        let b = document.getElementById('removeImg2');
        b.classList.remove('hidden');
        console.log('remove class hidden-gal2');
    }

    /*fx para remover la img reemplaza elemnto src por 'vacio'*/
    const closeImg2 = document.getElementById('removeImg2');
    closeImg2.addEventListener('click', () => {
        ventanaImg2.src = ''.src;
        const borrarImg = document.getElementById('removeImg2');
        borrarImg.classList.add('hidden')
        console.log('add-hidden-removeimg2-gal2');
    })

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

    /*funciones eventos click imgs de galeria1*/
    //el  elemento con este id hace de evento click
    //img1
    const ver10 = document.getElementById('btn10');
    ver10.addEventListener('click', () => {
        boton3();
        console.log('ver-gal3-1');
    })
    //img2
    const ver11= document.getElementById('btn11');
    ver11.addEventListener('click', () => {
        boton3();
        console.log('ver-gal3-2');
    })
    //img3
    const ver12 = document.getElementById('btn12');
    ver12.addEventListener('click', () => {
        boton3();
        console.log('ver-gal3-3');
    })
    //img4
    const ver13 = document.getElementById('btn13');
    ver13.addEventListener('click', () => {
        boton3();
        console.log('ver-gal3-4');
    })
    //ejemplo funcion que cambia estilos del css al  elemento con este id se le aplican estos cambios de estilos
    function boton3() {
        let b = document.getElementById('removeImg3');
        b.classList.remove('hidden');
        console.log('remove class hidden-gal3');
    }

    /*fx para remover la img reemplaza elemnto src por 'vacio'*/
    const closeImg3 = document.getElementById('removeImg3');
    closeImg3.addEventListener('click', () => {
        ventanaImg3.src = ''.src;
        const borrarImg = document.getElementById('removeImg3');
        borrarImg.classList.add('hidden')
        console.log('add-hidden-removeimg3-gal3');
    })
}

let = modalProyectos = mostrarModal();