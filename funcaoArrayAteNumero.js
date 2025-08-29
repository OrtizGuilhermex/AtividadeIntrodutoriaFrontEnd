function criarArray(numero) {
    return Array.from({ length: numero }, (v, i) => i + 1);
}

let numero = 5;
console.log(criarArray(numero));