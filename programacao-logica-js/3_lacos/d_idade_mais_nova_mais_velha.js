const prompt = require("prompt-sync")();
let nome = prompt("Digite seu nome: ");
let quantidade = Number(prompt("Quantas pessoas deseja cadastrar? "));

let maisVelhoNome = "";
let maisVelhoIdade = 0;
let maisNovoNome = "";
let maisNovoIdade = Infinity;

for (let i = 1; i <= quantidade; i++) {
    let nomePessoa = prompt(`Nome da pessoa ${i}: `);
    let idadePessoa = Number(prompt(`Idade de ${nomePessoa}: `));

    if (idadePessoa > maisVelhoIdade) {
        maisVelhoIdade = idadePessoa;
        maisVelhoNome = nomePessoa;
    }

    if (idadePessoa < maisNovoIdade) {
        maisNovoIdade = idadePessoa;
        maisNovoNome = nomePessoa;
    }
}

console.log(`Pessoa mais velha: ${maisVelhoNome}, ${maisVelhoIdade} anos`);
console.log(`Pessoa mais nova: ${maisNovoNome}, ${maisNovoIdade} anos`);
