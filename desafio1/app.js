let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío'; // Cambia el contenido de la etiqueta h1 por 'Hora del Desafío'

function functionConsole() {
    alert('El botón fue clicado');
}

function functionPrompt() {
    let ciudad = prompt('Escribe el nombre de una ciudad de Brasil');
    alert(`Estuve en ${ciudad} y me acordé de ti`);
}

function functionAlert() {
    alert('Yo amo JS');
}

function functionSuma() {
    let num1 = parseInt(prompt('Escribe un número'));
    let num2 = parseInt(prompt('Escribe otro número'));
    let suma = num1 + num2;
    alert(`La suma de ${num1} + ${num2} es ${suma}`);
}