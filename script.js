const inputNota = document.getElementById("notaTitulo");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaNotas = document.getElementById("listaNotas");

function carregarNotas() {
  const notas = JSON.parse(localStorage.getItem("notas")) || [];
  listaNotas.innerHTML = "";

  notas.forEach((titulo) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = titulo;

    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.addEventListener("click", () => removerNota(titulo));

    li.appendChild(span);
    li.appendChild(btnRemover);
    listaNotas.appendChild(li);
  });
}

function adicionarNota() {
  const titulo = inputNota.value.trim();
  if (!titulo) return alert("Digite um título!");

  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  if (notas.includes(titulo)) return alert("Título já existe!");

  notas.push(titulo);
  localStorage.setItem("notas", JSON.stringify(notas));
  inputNota.value = "";
  carregarNotas();
}

function removerNota(titulo) {
  let notas = JSON.parse(localStorage.getItem("notas")) || [];
  notas = notas.filter((n) => n !== titulo);
  localStorage.setItem("notas", JSON.stringify(notas));
  carregarNotas();
}

btnAdicionar.addEventListener("click", adicionarNota);
window.addEventListener("load", carregarNotas);
