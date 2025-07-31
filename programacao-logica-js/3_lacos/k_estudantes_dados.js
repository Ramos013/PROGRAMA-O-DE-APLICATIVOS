const prompt = require("prompt-sync")();
let femMaior21 = 0;
let mascMaior18 = 0;
let idadeMascTotal = 0;
let idadeFemTotal = 0;
let qtdMasc = 0;
let qtdFem = 0;

for (let i = 1; i <= 200; i++) {
    let nome = prompt(`Nome do estudante ${i}: `);
    let idade = Number(prompt("Idade: "));
    let sexo = prompt("Sexo (M ou F): ").toUpperCase();

    if (sexo === "F") {
        qtdFem++;
        idadeFemTotal += idade;
        if (idade > 21) femMaior21++;
    } else if (sexo === "M") {
        qtdMasc++;
        idadeMascTotal += idade;
        if (idade > 18) mascMaior18++;
    }
}

let mediaMasc = idadeMascTotal / qtdMasc;
let mediaFem = idadeFemTotal / qtdFem;

console.log(`Feminino maior de 21: ${femMaior21}`);
console.log(`Masculino maior de 18: ${mascMaior18}`);
console.log(`Média idade masculino: ${mediaMasc.toFixed(2)}`);
console.log(`Média idade feminino: ${mediaFem.toFixed(2)}`);
