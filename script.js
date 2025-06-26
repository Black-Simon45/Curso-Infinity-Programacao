const formulario = document.getElementById("formulario");
const listaDados = document.getElementById("listaDados");
const btnLimpar = document.getElementById("limparLista");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const senha = document.getElementById("senha").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const nascimento = document.getElementById("nascimento").value;
  const email = document.getElementById("email").value.trim();

  if (!nome || !senha || !telefone || !nascimento || !email) {
    console.error("Todos os campos devem ser preenchidos!");
    alert("Preencha todos os campos corretamente.");
    return;
  }

  const div = document.createElement("div");
  div.innerHTML = `
        <strong>Nome:</strong> ${nome} <br>
        <strong>Telefone:</strong> ${telefone} <br>
        <strong>Nascimento:</strong> ${nascimento} <br>
        <strong>Email:</strong> ${email}
        <hr>
      `;
  listaDados.appendChild(div);

  formulario.reset();
});

btnLimpar.addEventListener("click", function () {
  listaDados.innerHTML = "";
});
