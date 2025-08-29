const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2015,
    getIdade() {
        const anoAtual = 2025
        return anoAtual - this.ano;
    },
    getDescricao() {
        return `${this.marca} ${this.modelo} (${this.ano})`;
    }
};

console.log(carro.marca);
carro.ano = 2025;
console.log(carro.getIdade());
console.log(carro.getDescricao());  