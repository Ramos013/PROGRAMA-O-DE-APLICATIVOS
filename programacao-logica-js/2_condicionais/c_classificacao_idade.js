const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));

if (idade <= 12) {
    console.log(`${nome}, você é uma criança.`);
} else if (idade <= 17) {
    console.log(`${nome}, você é um adolescente.`);
} else if (idade <= 64) {
    console.log(`${nome}, você é um adulto.`);
} else {
    console.log(`${nome}, você é um idoso.`);
}
