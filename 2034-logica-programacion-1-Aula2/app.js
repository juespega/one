/*
//Variables
let numeroSecreto = 2;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");
*/
// console.log(numeroUsuario);
/*
Este código realiza
la comparación
*/
/*
if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condición
    alert(`Acertaste, el número es: ${numeroUsuario}`);
} else {
    //La condición no se cumplió
    alert('Lo siento, no acertaste el número');
}
*/

// // Variables
// let numeroSecreto = 6;
// let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

// console.log(numeroUsuario);
// /* Este código
// realiza la comparación
// */
// if(numeroUsuario == numeroSecreto) {
//     // Acertamos, fue verdadera la condición
//     /* Interpolación, se intercambia el sentido de las comillas (invertidas)
//     para incluir variables, las cuales deben ir con ${}*/
//     alert(`Acertaste, el número es: ${numeroUsuario}`);
// }else{
//     // La condición no se cumplió
//     alert('Lo siento, no acertaste el número');
// }

let userOption = prompt('¿What weekday is today?');

if (userOption == 'saturday')  {
    alert('Have a nice weekend');
} else if (userOption == 'sunday') {
    alert('Have a nice weekend');
} else {
    alert('Have a nice week');
}

let userNumber = prompt('Please enter a number:');

if (userNumber > 0) {
    alert('The number is positive');
} else if (userNumber < 0) {
    alert('The number is negative');
} else {
    alert('The number is zero');
}


let userScore = prompt('Please enter your score:');

if (userScore >= 100){
    alert("Congratulations, you've won");
} else{
    alert("Try again to win");
}


let userBalance = prompt('Please enter your balance:');
alert(`Your account balance is $${userBalance}`);

let userName = prompt('Please enter your name:');
alert(`Welcome ${userName}`)