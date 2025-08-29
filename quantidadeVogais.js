function contarVogais(str) {
    let contador = 0;
    for (let i = 0; i < str.length; i++) {
        if ('aeiouAEIOU'.includes(str[i])) {
            contador++;
        }
    }
    return contador;
}

let texto = "Exemplo de uma string qualquer";
console.log(contarVogais(texto));