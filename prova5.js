let tarefas = [];

function mostrarTarefas() {
  if (tarefas.length === 0) {
    alert("A lista de tarefas está vazia.");
  } else {
    let lista = "📋 Lista de Tarefas:\n";
    for (let i = 0; i < tarefas.length; i++) {
      lista += `${i}: ${tarefas[i]}\n`;
    }
    alert(lista);
  }
}

while (true) {
  let opcao = prompt(
    "O que você deseja fazer?\n" +
      "1 - Adicionar tarefa\n" +
      "2 - Listar tarefas\n" +
      "3 - Remover tarefa\n" +
      "4 - Concluir tarefa\n" +
      "5 - Sair"
  );

  if (opcao === "1") {
    let tarefa = prompt("Digite o nome da tarefa:");
    tarefas.push(tarefa);
    alert(`✅ Tarefa "${tarefa}" adicionada.`);
  } else if (opcao === "2") {
    mostrarTarefas();
  } else if (opcao === "3") {
    mostrarTarefas();
    let indiceRemover = parseInt(
      prompt("Digite o índice da tarefa a remover:")
    );
    if (
      !isNaN(indiceRemover) &&
      indiceRemover >= 0 &&
      indiceRemover < tarefas.length
    ) {
      let removida = tarefas.splice(indiceRemover, 1);
      alert(`❌ Tarefa "${removida}" removida.`);
    } else {
      alert("⚠️ Índice inválido.");
    }
  } else if (opcao === "4") {
    mostrarTarefas();
    let indiceConcluir = parseInt(
      prompt("Digite o índice da tarefa a concluir:")
    );
    if (
      !isNaN(indiceConcluir) &&
      indiceConcluir >= 0 &&
      indiceConcluir < tarefas.length
    ) {
      tarefas[indiceConcluir] = "✅ " + tarefas[indiceConcluir];
      alert(`☑️ Tarefa marcada como concluída.`);
    } else {
      alert("⚠️ Índice inválido.");
    }
  } else if (opcao === "5") {
    alert("👋 Saindo do gerenciador de tarefas. Até logo!");
    break;
  } else {
    alert("❗ Opção inválida. Tente novamente.");
  }
}
