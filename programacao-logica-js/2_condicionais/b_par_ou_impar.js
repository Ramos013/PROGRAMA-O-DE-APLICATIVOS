const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let numero = Number(prompt("Digite um número: "));

if (numero % 2 === 0) {
    console.log(`${nome}, o número é par.`);
} else {
    console.log(`${nome}, o número é ímpar.`);
}
