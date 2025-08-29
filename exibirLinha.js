function exibirLinha(){
    let numeros = "";
for (let i = 1; i <= 5; i++) {
    if (i !== 5) {
        numeros += i + "-";
    } else {
        numeros += i;
    }
}
console.log(numeros);
}

exibirLinha()