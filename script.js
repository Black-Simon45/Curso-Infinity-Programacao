const form = document.getElementById("formCadastro");
const campos = ["nome", "usuario", "senha", "email", "nascimento"];

function limparErros() {
  campos.forEach((campo) => {
    document.getElementById("erro" + capitalizar(campo)).textContent = "";
  });
  document.getElementById("mensagemSucesso").textContent = "";
}

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function validarCampos(dados) {
  if (!dados.nome) throw { campo: "nome", mensagem: "O nome é obrigatório." };
  if (!dados.usuario)
    throw { campo: "usuario", mensagem: "O usuário é obrigatório." };
  if (!dados.senha)
    throw { campo: "senha", mensagem: "A senha é obrigatória." };
  if (!dados.email.includes("@"))
    throw { campo: "email", mensagem: "E-mail inválido." };
  if (!dados.nascimento)
    throw {
      campo: "nascimento",
      mensagem: "A data de nascimento é obrigatória.",
    };

  const idade = calcularIdade(new Date(dados.nascimento));
  if (idade < 18)
    throw {
      campo: "nascimento",
      mensagem: "É necessário ter 18 anos ou mais.",
    };
}

function calcularIdade(dataNasc) {
  const hoje = new Date();
  let idade = hoje.getFullYear() - dataNasc.getFullYear();
  const m = hoje.getMonth() - dataNasc.getMonth();
  if (m < 0 || (m === 0 && hoje.getDate() < dataNasc.getDate())) {
    idade--;
  }
  return idade;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  limparErros();

  const dados = {
    nome: document.getElementById("nome").value.trim(),
    usuario: document.getElementById("usuario").value.trim(),
    senha: document.getElementById("senha").value.trim(),
    email: document.getElementById("email").value.trim(),
    nascimento: document.getElementById("nascimento").value,
  };

  try {
    validarCampos(dados);
    document.getElementById("mensagemSucesso").textContent =
      "Cadastro realizado com sucesso!";
    form.reset();
  } catch (erro) {
    if (erro.campo && erro.mensagem) {
      const idErro = "erro" + capitalizar(erro.campo);
      document.getElementById(idErro).textContent = erro.mensagem;
    } else {
      console.error("Erro inesperado:", erro);
    }
  }
});
