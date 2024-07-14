let listaGenerica = [];

let lenguajesDeProgramacion = ['Python', 'JavaScript','C++', 'C', 'Kotlin'];

console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java', 'Ruby', 'Golang');

console.log(lenguajesDeProgramacion);

function lenguajes(){
    console.log(lenguajesDeProgramacion);
}

lenguajes();

function lenguajesEnOrdenInverso() {
    console.log(lenguajesDeProgramacion.reverse());
}

lenguajesEnOrdenInverso();

function calcularPromedio(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma / lista.length;
}

let numeros = [1, 2, 3, 4, 5];
let promedio = calcularPromedio(numeros);
console.log(`El promedio es: ${promedio}`);


function mostrarMinMax(lista) {
    let min = Math.min(...lista);
    let max = Math.max(...lista);
    console.log(`El número más pequeño es: ${min}`);
    console.log(`El número más grande es: ${max}`);
}

mostrarMinMax(numeros);


function sumarElementos(lista) {
    let suma = 0;
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i];
    }
    return suma;
}

let numeros1 = [1, 2, 3, 4, 5];
let sumaTotal = sumarElementos(numeros1);
console.log(`La suma de los elementos es: ${sumaTotal}`);


function encontrarElemento(lista, elemento) {
    return lista.indexOf(elemento);
}

let posicion = encontrarElemento(lenguajesDeProgramacion, 'C++');
console.log(`La posición de 'C++' en la lista es: ${posicion}`);

posicion = encontrarElemento(lenguajesDeProgramacion, 'Java');
console.log(`La posición de 'Java' en la lista es: ${posicion}`);

posicion = encontrarElemento(lenguajesDeProgramacion, 'Ruby');
console.log(`La posición de 'Ruby' en la lista es: ${posicion}`);

posicion = encontrarElemento(lenguajesDeProgramacion, 'Golang');
console.log(`La posición de 'Golang' en la lista es: ${posicion}`);

posicion = encontrarElemento(lenguajesDeProgramacion, 'PHP');
console.log(`La posición de 'PHP' en la lista es: ${posicion}`);


function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        console.log("Las listas deben tener el mismo tamaño");
        return;
    }
    
    let resultado = [];
    for (let i = 0; i < lista1.length; i++) {
        resultado.push(lista1[i] + lista2[i]);
    }
    
    return resultado;
}

let lista1 = [1, 2, 3];
let lista2 = [4, 5, 6];
let sumaLista = sumarListas(lista1, lista2);
console.log(sumaLista);


function obtenerCuadrados(lista) {
    let cuadrados = [];
    for (let i = 0; i < lista.length; i++) {
        cuadrados.push(lista[i] * lista[i]);
    }
    return cuadrados;
}

let numeros2 = [1, 2, 3, 4, 5];
let cuadrados = obtenerCuadrados(numeros2);
console.log(cuadrados);