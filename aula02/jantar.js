const prompt = require("prompt-sync")();

const jantar = Number(prompt("Valor do jantar: "));
const garcom = Number(jantar * 0.10);
const total = jantar + garcom;

console.log(`a taxa de garçom foi: ${garcom.toFixed(2)}, o total ficou: ${total.toFixed(2)}`);
