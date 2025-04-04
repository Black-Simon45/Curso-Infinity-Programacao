const idade = parseInt(prompt("Digite sua idade: "));
const status = prompt(
  "Digite seu status de registro (registrado ou não registrado):"
)
  .toLowerCase()
  .trim();

const maiorIdade = idade >= 18 ? true : false;
console.log(maiorIdade ? "Você é maior de idade" : "Você é menor de idade.");

switch (status) {
  case "registrado":
    console.log("Bem vindo! Obrigado por registrar.");
    break;
  case "não registrado":
    console.log("Por favor, complete seu registro pra continuar.");
    break;
  default:
    console.log("Status desconhecido.");
    break;
}

if (maiorIdade && status === "registrado") {
  console.log("Acesso completo concedido.");
} else {
  console.log("Acesso limitado.");
}
