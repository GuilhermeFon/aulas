const prompt = require("prompt-sync")();

const nome = prompt("nome do jogador: ");
const num = prompt("Número da camisa: ");

console.log(`${nome}, você é o camisa ${num} do time`);
