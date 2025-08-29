function calcularMedia(numeros) {
    const soma = numeros.reduce((acc, num) => acc + num, 0);
    return soma / numeros.length;
}

console.log(calcularMedia([1, 2, 3, 4, 5]));