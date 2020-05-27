var piedra = 1;
var papel = 2;
var tijera = 3;
var jugador;
var maquina;
var mensaje = prompt("¿Desea jugar piedra, papel o tijera?");

function juego(jugador, maquina) {
    if (jugador === piedra) {
        if (maquina === piedra) {
            console.log("Es empate");
        } else if (maquina === papel) {
            console.log("Perdiste");
        } else if (maquina === tijera) {
            console.log("Ganaste");
        }
    } else if (jugador === papel) {
        if (maquina === papel) {
            console.log("Es empate");
        } else if (maquina === piedra) {
            console.log("Ganaste");
        } else if (maquina === tijera) {
            console.log("Perdiste");
        }
    } else if (jugador === tijera) {
        if (maquina === piedra) {
            console.log("Perdiste");
        } else if (maquina === papel) {
            console.log("Ganaste");
        } else if (maquina === tijera) {
            console.log("Es empate");
        }
    } else {
        console.log("Lance piedra, papel o tijera");
    }
}