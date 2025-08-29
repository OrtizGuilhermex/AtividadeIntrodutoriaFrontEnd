const conta = {
    saldo: 0,
    titular: "João",
    depositar(valor){
        this.saldo+=valor
    },
    sacar(valor){
        if (valor > this.saldo){
            console.log("Saldo Insuficiente")
        } else {
            this.saldo -= valor
        }
    },

    verSaldo(){
        return this.saldo
    }
}

conta.depositar(1000)
conta.sacar(500)
console.log(conta.verSaldo())