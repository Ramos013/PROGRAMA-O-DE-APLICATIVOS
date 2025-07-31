const prompt = require("prompt-sync")();
let numeros = [];
let numero;

do {
    numero = Number(prompt("Digite um número (0 para sair): "));
    if (numero !== 0) numeros.push(numero);
} while (numero !== 0);

if (numeros.length > 0) {
    let maior = Math.max(...numeros);
    let menor = Math.min(...numeros);
    let soma = numeros.reduce((a, b) => a + b, 0);
    let media = soma / numeros.length;

    console.log(`Maior: ${maior}, Menor: ${menor}, Média: ${media.toFixed(2)}`);
} else {
    console.log("Nenhum número foi inserido.");
}
