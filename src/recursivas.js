//sumar rangos
function rango(number) {
    if (number == 1) {
        return 1;
    }
    return number + rango(number - 1);
}

console.log("rango=>", rango(3));

//potencia 
function potencia(number, exponente) {
    if (exponente == 0) {
        return 1;
    }
    else if (exponente == 1) {
        return number;
    }
    return number * potencia(number, exponente - 1);
}

//stack potencia
// 2 * potencia(2) = 2 * 4 =8
// 2 * potencia(1) = 2 * 2 =4
// 2 * potencia(0) = 2 * 1 =2

const imprimirElementos = (arr) => {
    if (arr.length > 0) {
        console.log(arr.shift())
        return imprimirElementos(arr);
    }
}
imprimirElementos([1,2,3]);