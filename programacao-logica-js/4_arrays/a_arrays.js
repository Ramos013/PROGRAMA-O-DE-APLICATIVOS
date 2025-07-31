const prompt = require('prompt-sync')();

let jogos = ["FIFA", "Zelda", "Mario", "Pokémon", "Tetris"];
jogos.push("GTA");
jogos[1] = "Minecraft";
jogos.pop();

console.log("Array final:", jogos);
console.log("Tamanho do array:", jogos.length);