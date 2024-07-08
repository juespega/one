let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto'; // Cambia el contenido de la etiqueta h1 por 'Juego del número secreto'

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10'; // Cambia el contenido de la etiqueta p por 'Adivina el número secreto. Pista: es menor que 20'

function intentoDeUsuario() {
    let numero = prompt('Indica un número del 1 al 10');
    let numeroSecreto = 5;
    if (numero == numeroSecreto) {
        alert('¡Enhorabuena! Has acertado el número secreto');
    } else {
        alert('Lo siento, no has acertado el número secreto');
    }
}