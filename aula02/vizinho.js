const prompt = require("prompt-sync")();

const numero = Number(prompt("insira um numero: "));

const vizinho1 = numero - 1;
const vizinho2 = numero + 1;

console.log(
  `o numero anterior é ${vizinho1} e o numero posterior é ${vizinho2}`
);
