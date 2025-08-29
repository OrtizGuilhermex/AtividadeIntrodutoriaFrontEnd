const prompt = require("prompt-sync")();

function verificarPalindromo(palavra){
    return palavra.split('').reverse().join('');
}

const palavra = prompt("Digite uma palavra:");

if(verificarPalindromo(palavra)){
    console.log(palavra + " é um palindromo")
} else {
    console.log(palavra + " Não é um palindromo")
}