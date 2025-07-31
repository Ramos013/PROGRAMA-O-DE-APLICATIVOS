const prompt = require('prompt-sync')();

let vetor = [];
for (let i = 0; i < 30; i++) {
    vetor[i] = Number(prompt(`Digite o valor ${i + 1}: `));
}

for (let i = 0; i < 30; i++) {
    if (i % 2 === 0) {
        vetor[i] *= 1.02; // Aumento de 2% nas posições pares
    } else {
        vetor[i] *= 1.05; // Aumento de 5% nas posições ímpares
    }
}

console.log("Vetor modificado:", vetor);