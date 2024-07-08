let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío 2';

function holamundo() {
  console.log('Hola Mundo');
}

function nombre(name) {
    console.log(`¡Hola, ${name}!`);
}

function numberx2(number) {
    return console.log(number * 2);
}

function threeNumbers(num1, num2, num3) {
    return console.log((num1 + num2 + num3) / 3);
}

function maynumber(num1, num2) {
    if (num1 > num2) {
        return console.log(num1);
    } else {
        return console.log(num2);
    }
}

function numberxnumber(num){
    return console.log(num * num);
}

holamundo();
nombre('Julián');
numberx2(5);
threeNumbers(1, 2, 3);
maynumber(5, 10);
numberxnumber(5);