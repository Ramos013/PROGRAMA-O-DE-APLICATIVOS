const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let a = Number(prompt("Digite o primeiro valor: "));
let b = Number(prompt("Digite o segundo valor: "));
let soma = a + b;
console.log(`${nome}, o resultado da soma é: ${soma}`);
