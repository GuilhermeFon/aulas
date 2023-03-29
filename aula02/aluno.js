const prompt = require("prompt-sync")();

const nota1 = Number(prompt("insira a nota do aluno 1: "));
const nota2 = Number(prompt("insira a nota do aluno 2: "));

const media = (nota1 + nota2) / 2;
console.log(media);
