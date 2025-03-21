let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));

let resultado = numero1;

resultado += numero2;
console.log(`Soma: ${resultado}`);

resultado = numero1;
resultado -= numero2;
console.log(`Subtração: ${resultado}`);

resultado = numero1;
resultado *= numero2;
console.log(`Multiplicação: ${resultado}`);

resultado = numero1;
if (numero2 !== 0) {
  resultado /= numero2;
  console.log(`Divisão: ${resultado}`);
} else {
  console.log("Divisão por zero não é permitida.");
}

resultado = numero1;
if (numero2 !== 0) {
  resultado %= numero2;
  console.log(`Resto da divisão: ${resultado}`);
} else {
  console.log("Não é possível calcular o resto da divisão por zero.");
}
