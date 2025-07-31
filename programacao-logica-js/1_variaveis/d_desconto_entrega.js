const prompt = require("prompt-sync")();


let preco = 120;
let desconto = preco * 0.15;
let precoComDesconto = preco - desconto;
let precoFinal = precoComDesconto + 10;

console.log(`Valor final com desconto e entrega: R$ ${precoFinal.toFixed(2)}`);
