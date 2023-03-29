const prompt = require("prompt-sync")();

const entrada = Number(prompt("Hora de entrada do carro: "));
const saida = Number(prompt("Hora de saida do carro: "));

const tempoEstacionado = saida - entrada;

const valor = Math.ceil(tempoEstacionado) * 5;

console.log(`Cobrar ${Math.ceil(tempoEstacionado)} hora(s)`);
console.log(`Valor R$${valor}`);
