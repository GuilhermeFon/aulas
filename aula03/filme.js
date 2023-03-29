const prompt = require("prompt-sync")();

const filme = prompt("Informe o nome do filme: ");
const timeMin = Number(
  prompt("Informe o tempo de duração do filme em minutos: ")
);

const timeHr = timeMin / 60;
const minutes = (timeHr - Math.floor(timeHr)) * 60;

console.log(
  `o ${filme} tem ${Math.floor(timeHr)} hora e ${Math.floor(minutes)} minutos`
);
