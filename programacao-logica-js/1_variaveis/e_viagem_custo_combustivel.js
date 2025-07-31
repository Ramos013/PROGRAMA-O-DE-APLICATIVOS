const prompt = require("prompt-sync")();


let nome = prompt("Digite seu nome: ");
let distancia = Number(prompt("Distância da viagem (km): "));
let consumo = Number(prompt("Consumo médio do carro (km/l): "));
let precoGasolina = Number(prompt("Preço da gasolina (R$): "));

let litros = distancia / consumo;
let custo = litros * precoGasolina;

console.log(`${nome}, serão necessários ${litros.toFixed(2)} litros e o custo será R$ ${custo.toFixed(2)}`);
