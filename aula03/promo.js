const prompt = require("prompt-sync")();

const product = prompt("Nome do seu produto: ");
const price = Number(prompt("Valor do seu produto: "));

const total = Math.floor(price) * 2;

console.log(`Promoção de ${product}`);
console.log(`Na compra de 2 unidades, o total é: ${total}`);
