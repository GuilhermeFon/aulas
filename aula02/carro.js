const prompt = require("prompt-sync")();

const carro = Number(prompt("Insira o valor do carro: "));
const entrada = Number(carro / 2);
const saldo = Number(carro / 2 / 12);

console.log(
  `O valor de entrada sera de R$${entrada} e o saldo sera de R$${saldo} em 12x`
);
