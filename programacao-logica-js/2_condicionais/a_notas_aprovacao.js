const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let nota1 = Number(prompt("Digite a primeira nota: "));
let nota2 = Number(prompt("Digite a segunda nota: "));
let nota3 = Number(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log(`${nome}, você está aprovado com média ${media.toFixed(2)}.`);
} else {
    console.log(`${nome}, você foi reprovado com média ${media.toFixed(2)}.`);
}
