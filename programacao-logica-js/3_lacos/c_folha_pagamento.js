const prompt = require("prompt-sync")();
let total = 0;

for (let i = 1; i <= 20; i++) {
    let codigo = prompt(`Funcionário ${i} - Código: `);
    let salario = Number(prompt(`Funcionário ${i} - Salário: `));
    total += salario;
}

let media = total / 20;
console.log(`Total da folha: R$ ${total.toFixed(2)}\nMédia salarial: R$ ${media.toFixed(2)}`);
