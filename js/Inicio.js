function ver(n) {
    document.getElementById("subseccion"+n).style.display="block"
     }
function ocultar(n) {
    document.getElementById("subseccion"+n).style.display="none"
    }

    //Carrusel de imagenes
window.onload = function () {
    // Variables
    const IMAGENES = [
        '/img/Fachada.jpg',
        '/img/Noti_1.jpg',
        '/img/Noti_2.jpg',
        '/img/Noti_3.jpg',
        '/img/Noti_4.jpg',
        '/img/Noti_5.jpg',
        '/img/Noti_6.jpg',
    ];
    const TIEMPO_INTERVALO_MILESIMAS_SEG = 900; // Tiempo de espera
    let posicionActual = 0;
    let $botonRetroceder = document.querySelector('#retroceder');
    let $botonAvanzar = document.querySelector('#avanzar');
    let $imagen = document.querySelector('#imagen');
    let $botonPlay = document.querySelector('#play');
    let $botonStop = document.querySelector('#stop');
    let intervalo;

    // Funciones

    /**
     * Funcion que cambia la foto en la siguiente posicion
     */
    function pasarFoto() {
        if (posicionActual >= IMAGENES.length - 1) {
            posicionActual = 0;
        } else {
            posicionActual++;
        }
        renderizarImagen();
    }
    /**
     * Funcion que cambia la foto en la anterior posicion
     */
    function retrocederFoto() {
        if (posicionActual <= 0) {
            posicionActual = IMAGENES.length - 1;
        } else {
            posicionActual--;
        }
        renderizarImagen();
    }
    /**
     * Funcion que actualiza la imagen  dependiendo de posicionActual
     */
    function renderizarImagen() {
        $imagen.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;
    }
    /**
     * Activa el autoplay de la imagen
     */
    function playIntervalo() {
        intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
        // Desactivamos los botones de control
        $botonAvanzar.setAttribute('disabled', true);
        $botonRetroceder.setAttribute('disabled', true);
        $botonPlay.setAttribute('disabled', true);
        $botonStop.removeAttribute('disabled');
    }
    /**
     * Para el autoplay de la imagen
     */
    function stopIntervalo() {
        clearInterval(intervalo);
        // Activamos los botones de control
        $botonAvanzar.removeAttribute('disabled');
        $botonRetroceder.removeAttribute('disabled');
        $botonPlay.removeAttribute('disabled');
        $botonStop.setAttribute('disabled', true);
    }
    // Eventos
    $botonAvanzar.addEventListener('click', pasarFoto);
    $botonRetroceder.addEventListener('click', retrocederFoto);
    $botonPlay.addEventListener('click', playIntervalo);
    $botonStop.addEventListener('click', stopIntervalo);
    // Iniciar
    renderizarImagen();
} 
function limita(elEvento, maximoCaracteres){
    var elemento = document.getElementById("texto");

    //obtener la tecla pulsada
    var evento = elEvento || window.event;
    var codigoCaracter = evento.charCode || evento.keyCode;
    //Permitir utilizar las teclas con flecha horizontal
    if (codigoCaracter == 37 || codigoCaracter == 39){
        return true;
    }
    else if(elemento.ariaValueMax.length >= maximoCaracteres){
        return false;
    }
    else{
        return true;
    }
}
function actualizaInfo(maximoCaracteres){
    var elemento = docuemnt.getElementById("texto");
    var info = documet.getElementById("info");

    if(elemento.value.length >= maximoCaracteres){
        info.innerHTML = "Maximo " +maximoCaracteres + " caracteres";
    }
    else {
        info.innerHTML = "Puedes escribir hasta " + (maximoCaracteres - elemento.value.length) + " caracteres adicionales";
    }
}

// Selecciona todas las celdas de fecha
const dateCells = document.querySelectorAll('td[data-datetime]');

// Loop a través de cada celda de fecha
dateCells.forEach((cell) => {

// Agrega un listener de clic a cada celda
cell.addEventListener('click', () => {

// Obtener la fecha y hora de la celda
const datetime = cell.dataset.datetime;

// Mostrar la fecha y hora en una ventana de alerta
alert(`Has seleccionado la fecha y hora: ${datetime}`);
});
});