const prompt = require("prompt-sync")();

let experiencia = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`Batalha ${i}: Você ganhou 10 pontos de experiência!`);
    experiencia += 10;
}

console.log(`Total de experiência: ${experiencia} pontos`);
