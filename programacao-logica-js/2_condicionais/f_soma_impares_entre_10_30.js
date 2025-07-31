const prompt = require("prompt-sync")();
let soma = 0;

for (let i = 11; i < 30; i += 2) {
    soma += i;
}

console.log(`Soma dos ímpares entre 10 e 30: ${soma}`);
