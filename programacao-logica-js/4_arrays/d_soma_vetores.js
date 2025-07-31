const prompt = require('prompt-sync')();

let vetor1 = [];
let vetor2 = [];
let vetor3 = [];

for (let i = 0; i < 15; i++) {
    vetor1[i] = Number(prompt(`Digite o valor ${i + 1} do vetor 1: `));
    vetor2[i] = Number(prompt(`Digite o valor ${i + 1} do vetor 2: `));
    vetor3[i] = vetor1[i] + vetor2[i];
}

console.log("Vetor resultante (soma):", vetor3);