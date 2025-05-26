class Produto {
  constructor(nome, preco, categoria) {
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
  }

  exibirDetalhes() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Preço: ${this.preco.toFixed(2)}`);
    console.log(`Categoria: ${this.categoria}`);
  }
}

const listaDeProdutos = [];

function adcionarProduto(nome, preco, categoria) {
  const novoProduto = new Produto(nome, preco, categoria);
  listaDeProdutos.push(novoProduto);
  console.log("Produto adcionado com sucesso!");
}

function listarProdutos() {
  console.log("Lista de Produtos: ");
  listaDeProdutos.forEach((produto, index) => {
    console.log(`Produto #${index + 1}`);
    produto.exibirDetalhes();
    console.log("-------");
  });
}

function buscarProdutos(nome) {
  const encontrado = listaDeProdutos.find(
    (produto) => produto.nome.toLowCase() === nome.toLowCase()
  );
  if (encontrado) {
    console.log("Produtos encontrado");
    encontrado.exibirDetalhes();
  } else {
    console.log("Produto não encontrado");
  }
}

function filtrarProdutos(categoria) {
  const filtrados = listaDeProdutos.filter(
    (produto) => produto.categoria.toLowCase() === categoria.toLowCase()
  );
  if (filtrados.length > 0) {
    console.log(`Produtos da categoria '${categoria}':`);
    filtrados.forEach((produto) => {
      produto.exibirDetalhes();
      console.log("-------");
    });
  } else {
    console.log(`Nenhum produto encontrado na categoria '${categoria}'.`);
  }
}

function resumoEstatistico() {
  const total = listaDeProdutos.reduce(
    (soma, produto) => soma + produto.preco,
    0
  );
  console.log(`Valor total dos produtos: ${total.toFixed(2)}`);
}

adcionarProduto("Sabão em Pó", 25.0, "Produto de Limpeza");
adcionarProduto("Escova de Dente", 12.0, "Higiene Pessoal");
adcionarProduto("Cremogema", 7.0, "Produto Alimenticio");
adcionarProduto("Sabonete Baby", 5.0, "Cuidado do Bebê");

console.log("\n----listar todos os Produtos----");
listarProdutos();

console.log("\n----buscar produto: 'Sabão em Pó'----");
buscarProdutos("Sabão em Pó");

console.log("\n----filtrar por categoria: 'Higiene Pessoal'----");
filtrarProdutos("Produto de Limpeza");

console.log("\n----resumo estatistico----");
resumoEstatistico();
