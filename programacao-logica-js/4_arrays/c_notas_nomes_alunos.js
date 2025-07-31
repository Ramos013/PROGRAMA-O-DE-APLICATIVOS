const prompt = require('prompt-sync')();

let nomes = [];
let notas = [];
for (let i = 0; i < 35; i++) {
    nomes[i] = prompt(`Digite o nome do aluno ${i + 1}: `);
    notas[i] = Number(prompt(`Digite a nota do aluno ${i + 1}: `));
}

console.log("Notas >= 7.0 com nomes:");
for (let i = 0; i < 35; i++) {
    if (notas[i] >= 7.0) {
        console.log(`Aluno: ${nomes[i]}, Nota: ${notas[i]}`);
    }
}