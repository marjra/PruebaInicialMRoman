const imagenes = document.querySelectorAll('.img-galeria')
const imagenLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light')
const closeLight = document.querySelector('.close')


imagenes.forEach(imagen => {
    imagen.addEventListener('click',()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
});

contenedorLight.addEventListener('click',(e)=>{
    if(e.target !== imagenLight){
        contenedorLight.classList.toggle('show')
        imagenLight.classList.toggle('showImage')
        hamburguer.style.opacity = '1';
    }
})


const aparecerImagen = (imagen)=>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenLight.classList.toggle('showImage')
    hamburguer.style.opacity = '0';
}

//animación eslogan
function animacion() {
    let textoAnimacion = [
        ["P", "A", "N", "E", "S"," ", "P", "A", "R", "A", " " ,"S", "O", "Ñ", "A", "R"]

    ];

    let letraContador = -1;
    let posicionArray = 0;

    const contenedorAnimacion = document.querySelector(".contenedor__texto__animacion");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.innerHTML += textoAnimacion[posicionArray][letraContador];

        if (letraContador === textoAnimacion[posicionArray].length - 1) {
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval(() => {
                    contenedorAnimacion.innerHTML = "";
                    letraContador--;
                    textoAnimacion[posicionArray].pop();
                    textoAnimacion[posicionArray].forEach((elemento) => {
                        contenedorAnimacion.innerHTML += elemento;
                    });

                    if(letraContador < 0){
                        clearInterval(intervalo);
                        posicionArray++;
                        intervalo = setInterval(pintarTexto, 150);

                        if(posicionArray > textoAnimacion.length - 1){
                            clearInterval(intervalo);
                            posicionArray = 0;
                            animacion();
                        }
                    }
                }, 150);

            }, 1000);
        }
    }
    let intervalo = setInterval(pintarTexto, 150);
}
window.addEventListener("load", animacion);