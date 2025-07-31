const prompt = require('prompt-sync')();

let notas = [];
for (let i = 0; i < 35; i++) {
    notas[i] = Number(prompt(`Digite a nota do aluno ${i + 1}: `));
}

console.log("Notas >= 7.0:");
for (let i = 0; i < 35; i++) {
    if (notas[i] >= 7.0) {
        console.log(`Aluno ${i + 1}: ${notas[i]}`);
    }
}