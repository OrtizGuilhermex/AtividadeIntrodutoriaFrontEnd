const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,   
    output: process.stdout
})

function calcularFatorial(num){
    let resultado = 1
    for(let i = 1; i <= num; i++ ){
        resultado *= i;
    }
    return resultado
}

rl.question("Digite um Número: ", (input) =>{
    const numero = parseInt(input)

    if (isNaN(numero) || numero < 0){
        console.log("Digite um valor valido e positivo!")
    } else {
        const resultado = calcularFatorial(numero)
        console.log("O fatorial de " +numero+ " é: " + resultado)
    }
    rl.close();
})