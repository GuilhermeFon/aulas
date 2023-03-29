const prompt = require("prompt-sync")();

const nome = prompt("Insira seu nome: ");
const idade = Number(prompt("Insira sua idade: "));

const nascimento = Number(2023 - idade);

console.log(`Seu nome é ${nome} e você nasceu em ${nascimento}`);
