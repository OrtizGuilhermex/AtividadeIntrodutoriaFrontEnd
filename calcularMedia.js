const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function calcularMedia(media){
    if(media > 7){
        console.log("Aprovado!")
    } else if(media > 6){
        console.log("Em exame!")
    } else{
        console.log("Reprovado!")
    }
}

rl.question("Digite a primeira Nota:", (nota1) => {
    rl.question("Digite a segunda Nota:", (nota2) => {
        rl.question("Digite a terceira Nota:", (nota3) => {

            const n1 = parseFloat(nota1);
            const n2 = parseFloat(nota2);
            const n3 = parseFloat(nota3);

            const media = (n1 + n2 + n3) / 3

            if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
                console.log("Digite um valor válido")
            } else {
                console.log("A media do aluno é:" + media)
                calcularMedia(media)
            }
            rl.close();
        })
    }) 
})
