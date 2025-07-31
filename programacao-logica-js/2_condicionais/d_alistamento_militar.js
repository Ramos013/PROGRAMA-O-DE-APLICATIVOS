const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let sexo = prompt("Digite seu sexo (M ou F): ").toUpperCase();

if (sexo === "M" && idade >= 18) {
    console.log(`${nome}, o alistamento militar é obrigatório.`);
} else {
    console.log(`${nome}, o alistamento militar não é obrigatório.`);
}
