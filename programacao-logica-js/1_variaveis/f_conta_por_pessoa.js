const prompt = require("prompt-sync")();


let nome = prompt("Digite seu nome: ");
let total = Number(prompt("Valor total da conta (R$): "));
let pessoas = Number(prompt("Número de clientes: "));
let valorPorPessoa = total / pessoas;

console.log(`${nome}, cada pessoa pagará: R$ ${valorPorPessoa.toFixed(2)}`);
