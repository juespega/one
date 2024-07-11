function imc (peso, altura) {
  return peso / altura ** 2
}

function factorial(num){
    if (num === 0) {
        return 1
    }
    return num * factorial(num - 1)
}

function trm (usd) {
    return usd * 3980
}

function area_perimetro_rectangular(alto, ancho){
    return {
        area: alto * ancho,
        perimetro: 2 * (alto + ancho)
    }
}

function area_perimetro_circular(radio){
    return {
        area: Math.PI * radio ** 2,
        perimetro: 2 * Math.PI * radio
    }
}

function tabla_de_multiplicar(number){
    let tabla = []
    for (let i = 1; i <= 10; i++){
        tabla.push(number * i)
    }
    return tabla
}


console.log(imc(85, 1.82));
console.log(factorial(5));
console.log(trm(100));
console.log(area_perimetro_rectangular(2, 3));
console.log(area_perimetro_circular(5));
console.log(tabla_de_multiplicar(5));
