const prompt = require("prompt-sync")();

const quantOvos = Number(prompt("Quantidade de ovos: "));

const caixa = quantOvos / 12;

const sobra = (caixa - Math.floor(caixa)) * 12;

console.log(`Nº de Caixas (dúzia): ${Math.floor(caixa)}`);
console.log(`Sobraram ${Math.floor(sobra)} unidades`);
