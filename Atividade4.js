const prompt = require("prompt-sync")();

const constante = 10;

while (true) {
  let numero = Number(prompt("Digite um numero "));
  if (numero == constante) {
    console.log("parabéns, você acertou o número");
    break;
  } else if (constante > numero) {
    console.log("menor");
  } else constante < numero;
  {
    console.log("maior");
  }
}
