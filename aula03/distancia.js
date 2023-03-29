const prompt = require("prompt-sync")();

const distanciaP = Number(prompt("Distancia percorrida (m): "));

const calculoKm = distanciaP / 1000;
const calculoM = (calculoKm - Math.floor(calculoKm)) * 1000;

console.log(`Equivale a ${Math.floor(calculoKm)}Km e ${calculoM}m`);
