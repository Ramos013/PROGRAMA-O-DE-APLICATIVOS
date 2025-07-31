const prompt = require("prompt-sync")();
let nome = prompt("Digite seu nome: ");
let numeros = [];

for (let i = 1; i <= 5; i++) {
    let num = Number(prompt(`Digite o ${i}º número: `));
    numeros.push(num);
}

let maior = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log(`${nome}, o maior número é ${maior} e o menor é ${menor}.`);
