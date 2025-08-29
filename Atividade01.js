const readline = require('readline');


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function verificarNumero(numero) {
    if (numero > 0) {
        console.log("O número é positivo!");
    } else if (numero < 0) {
        console.log("O número é negativo!");
    } else {
        console.log("Você digitou zero!");
    }
    rl.close(); 
}

rl.question("Digite um número: ", (input) => {
    const numero = parseFloat(input); 
    if (isNaN(numero)) {
        console.log("Insira um valor válido!");
    } else {
        verificarNumero(numero); 
    }
});
