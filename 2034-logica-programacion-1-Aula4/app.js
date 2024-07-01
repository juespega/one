/* //Variables
let numeroSecreto = Math.floor(Math.random()*10)+1; //Calcular un número entre 1 y 10 aleatorio
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
} */

// 1
console.log('Hola Mundo');
// 2
let nombre = 'Julian';
console.log(`Hola ${nombre}`);
// 3
alert(`Hola ${nombre}`);
// 4
let lenguaje = prompt('Cuál es el lenguaje de programación que más te gusta?')
console.log(lenguaje);
// 5
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`El resultado de la suma de ${valor1} + ${valor2} es: ${resultado}`);
// 6
valor1 = 5;
valor2 = 10;
resultado = valor1 - valor2;
console.log(`La diferencia entre ${valor1} - ${valor2} es: ${resultado}`);
// 7
let edad = parseInt(prompt('Cuál es tu edad?'));
if (edad >= 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');
}
// 8
let numero = parseInt(prompt('Ingresa un número'));
if (numero > 0) {
    console.log('El número es positivo');
} else if (numero < 0) {
    console.log('El número es negativo');
} else {
    console.log('El número es cero');
}
// 9
let num = 1;
while (num <= 10) {
    console.log(num);
    num++;
}
// 10
let nota = parseInt(prompt('Ingresa tu nota'));
if (nota >= 7) {
    console.log('Aprobado');
} else {
    console.log('Reprobado');
}
// 11
console.log(Math.random());
// 12
console.log(Math.floor(Math.random()*10)+1);
// 13
console.log(Math.floor(Math.random()*1000)+1);