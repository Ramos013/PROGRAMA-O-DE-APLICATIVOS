const prompt = require("prompt-sync")();


let nome = prompt("Digite seu nome: ");
let numero = Number(prompt("Digite um número: "));

if (numero % 3 === 0) {
    console.log(`${nome}, o número é múltiplo de três`);
} else {
    console.log(`${nome}, o número não é múltiplo de três`);
}
