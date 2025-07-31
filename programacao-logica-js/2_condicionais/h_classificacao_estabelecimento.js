const prompt = require("prompt-sync")();
let nome = prompt("Digite seu nome: ");
let largura = Number(prompt("Digite a largura do terreno (m): "));
let profundidade = Number(prompt("Digite a profundidade (m): "));
let area = largura * profundidade;

let classificacao = "";

if (area < 50) classificacao = "Mercearia";
else if (area < 400) classificacao = "Mercadinho";
else if (area < 1000) classificacao = "Mercado";
else if (area < 2500) classificacao = "Supermercado";
else classificacao = "Hipermercado";

console.log(`${nome}, área: ${area} m². Classificação: ${classificacao}.`);
