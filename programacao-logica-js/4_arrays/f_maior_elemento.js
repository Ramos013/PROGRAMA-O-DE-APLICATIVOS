const prompt = require('prompt-sync')();

let vetor = [];
for (let i = 0; i < 30; i++) {
    vetor[i] = Number(prompt(`Digite o valor ${i + 1}: `));
}

let maior = vetor[0];
let indiceMaior = 0;
for (let i = 1; i < 30; i++) {
    if (vetor[i] > maior) {
        maior = vetor[i];
        indiceMaior = i;
    }
}

console.log(`O maior elemento é ${maior} e está na posição ${indiceMaior}`);