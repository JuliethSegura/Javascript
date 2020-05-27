var piedra = 1;
var papel = 2;
var tijera = 3;
var jugador;
var maquina;
var mensaje = prompt("¿Desea jugar piedra, papel o tijera?");

function juego(jugador, maquina) {

    switch (jugador) {
        case piedra:
            if (maquina === piedra) {
                console.log("Empate");
            } else if (maquina === papel) {
                console.log("Perdiste");
            } else if (maquina === tijera) {
                console.log("Ganaste");
            }
            break;
        case papel:
            if (maquina === papel) {
                console.log("Empate");
            } else if (maquina === piedra) {
                console.log("Ganaste");
            } else if (maquina === tijera) {
                console.log("Perdiste");
            }
            break;
        case tijera:
            if (maquina === tijera) {
                console.log("Empate");
            } else if (maquina === papel) {
                console.log("Ganaste");
            } else if (maquina === piedra) {
                console.log("Perdiste");
            }
            break;

        default:
            console.log("Empieza de nuevo");
    }
    console.log("De nuevo");
}