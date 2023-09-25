let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})





function animacion() {
    let textoAnimacion = [
        ["B", "r", "a", "u", "l", "i", "o"],
        ["a", " ", "D", "e", "v", "e", "l", "o", "p", "e", "r"]
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



