const prompt = require("prompt-sync")();
let conta;
let saldoNegativo = 0;
let totalContas = 0;

do {
    conta = prompt("Digite o número da conta (0 para sair): ");
    if (conta !== "0") {
        let saldo = Number(prompt("Digite o saldo da conta: "));
        totalContas++;
        if (saldo < 0) saldoNegativo++;
        let status = saldo < 0 ? "Negativo" : "Positivo";
        console.log(`Conta ${conta} – Saldo: R$ ${saldo.toFixed(2)} (${status})`);
    }
} while (conta !== "0");

if (totalContas > 0) {
    let percentual = (saldoNegativo / totalContas) * 100;
    console.log(`Percentual com saldo negativo: ${percentual.toFixed(1)}%`);
}
