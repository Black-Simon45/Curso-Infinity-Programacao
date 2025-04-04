let listaDeCompras = [];

function mostrarLista() {
  let mensagem = " Lista de Compras:\n";
  for (let i = 0; i < listaDeCompras.length; i++) {
    mensagem += `${i}: ${listaDeCompras[i]}\n`;
  }
  alert(mensagem);
}

while (true) {
  let acao = prompt(
    "O que você deseja fazer?\n" +
      "1 - Adicionar item\n" +
      "2 - Remover item\n" +
      "3 - Exibir lista\n" +
      "4 - Atualizar item\n" +
      "5 - Sair"
  );

  if (acao === "1") {
    let item = prompt("Digite o nome do item a ser adicionado:");
    listaDeCompras.push(item);
    alert(` "${item}" foi adicionado à lista.`);
  } else if (acao === "2") {
    mostrarLista();
    let indice = parseInt(
      prompt("Digite o índice do item que deseja remover:")
    );

    if (indice >= 0 && indice < listaDeCompras.length) {
      let removido = listaDeCompras.splice(indice, 1);
      alert(` "${removido}" foi removido da lista.`);
    } else {
      alert(" Índice inválido.");
    }
  } else if (acao === "3") {
    if (listaDeCompras.length === 0) {
      alert("A lista está vazia.");
    } else {
      mostrarLista();
    }
  } else if (acao === "4") {
    mostrarLista();
    let indice = parseInt(
      prompt("Digite o índice do item que deseja atualizar:")
    );

    if (indice >= 0 && indice < listaDeCompras.length) {
      let novoItem = prompt("Digite o novo valor para esse item:");
      listaDeCompras[indice] = novoItem;
      alert(` Item atualizado para "${novoItem}".`);
    } else {
      alert(" Índice inválido.");
    }
  } else if (acao === "5") {
    alert(" Programa finalizado. Até logo!");
    break;
  } else {
    alert("Opção inválida. Tente novamente.");
  }
}
