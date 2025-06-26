const tituloContainer = document.getElementById("titulo-container");
const input = document.getElementById("input-tarefa");
const listaTarefas = document.getElementById("lista-tarefas");
const botaoAdd = document.getElementById("btn-adicionar");
const semTarefas = document.getElementById("sem-tarefas");
const contadorTarefas = document.getElementById("contador-tarefas");
const slogan = document.getElementById("slogan");

//Recuperar valor da chave "usuario"
//Se tem chave, mostrar valor da chave
//Se não tem chave, pedir nome do usuário

if (!localStorage.getItem("usuario")) {
  const NomeUsuario = prompt("Digite seu nome");
  localStorage.setItem("usuario", NomeUsuario);
}

const NomeUsuario = localStorage.getItem("usuario");
slogan.innerText = `Organiza suas atividades, ${
  !NomeUsuario ? "Visitante" : NomeUsuario
}! Bem-Vindo!`;

function atualizarTotal() {
  const tamanhoUL = listaTarefas.children.length;
  contadorTarefas.innerText = `Total de tarefas: ${tamanhoUL - 1}`;
}

function excluirTarefa(e) {
  listaTarefas.removeChild(e.target.parentElement);
  const tamanhoUL = listaTarefas.children.length;
  if (tamanhoUL === 1) {
    semTarefas.style.display = "block";
  }
  atualizarTotal();
}
botaoAdd.addEventListener("click", (e) => {
  semTarefas.style.display = "none";
  e.preventDefault();
  const novaTarefa = document.createElement("li");
  novaTarefa.className = "tarefa";
  novaTarefa.innerHTML = `
        <input type=checkbox class="checkbox-tarefa">
        <span class="tarefa-texto">${input.value}</span>
        <button onclick=excluirTarefa(event) class="btn-excluir">Excluir</button>
    `;
  listaTarefas.appendChild(novaTarefa);
  input.value = "";
  input.focus();
  atualizarTotal();
});
console.dir(input);
