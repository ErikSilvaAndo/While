const prompt = require("prompt-sync")();

const usuariocerto = "Erik legal";
const senhacerto = 123;

while (true) {
  let usuario = prompt("Digite o usuário: ");
  let senha = prompt("Digite sua senha: ");

  if (usuario == usuariocerto && senha == senhacerto) {
    console.log("Bem-vindo");
    break;
  } else {
    console.log("Dados errado");
    break;
  }
}
