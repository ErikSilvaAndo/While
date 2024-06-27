const prompt = require("prompt-sync")();

let maior = Number(prompt("Digite um número: "));
let menor = maior;

let i = 1;
while (i < 10) {
  let numero = Number(prompt("Digite um número: "));
  if (numero > maior) {
    maior = numero;
  }

  if (numero < menor) {
    menor = numero;
  }

  i++;
}
console.log("O menor número é", menor);
console.log("O maior número é", maior);
