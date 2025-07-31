const prompt = require("prompt-sync")();

let nome = prompt("Digite seu nome: ");
let anos = Number(prompt("Quantos anos você fuma? "));
let cigarrosPorDia = Number(prompt("Quantos cigarros por dia? "));
let precoCarteira = Number(prompt("Preço da carteira com 20 cigarros: "));

let totalCigarros = anos * 365 * cigarrosPorDia;
let precoPorCigarro = precoCarteira / 20;
let gastoTotal = totalCigarros * precoPorCigarro;

console.log(`${nome}, você já gastou R$ ${gastoTotal.toFixed(2)} com cigarros.`);

if (gastoTotal > 10000) {
    console.log("Você já gastou muito.");
}
