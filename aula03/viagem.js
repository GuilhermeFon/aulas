const prompt = require("prompt-sync")();

const destino = prompt("Destino: ");

const dias = Number(prompt("Nº Dias: "));
const horas = Number(prompt("Nº Horas: "));

const calc = dias * 24 + horas;

console.log(`A viagem para ${destino} dura ${calc} horas`);
