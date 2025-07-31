const prompt = require("prompt-sync")();


let nome = prompt("Digite seu nome: ");
let idade = Number(prompt("Digite sua idade: "));
let email = prompt("Digite seu e-mail: ");

if (nome !== "" && idade >= 18 && email.includes("@")) {
    console.log("Cadastro realizado com sucesso!");
} else {
    console.log("Preencha os dados corretamente.");
}
