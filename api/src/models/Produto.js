let produtos = [];
let proximoId = 1;

class Produto {
  static listarTodos() {
    return produtos;
  }

  static buscarPorId(id) {
    return produtos.find((produto) => produto.id === id);
  }

  static criar(dados) {
    const novoProduto = {
      id: proximoId++,
      nome: dados.nome.trim(),
      preco: dados.preco,
      quantidade: dados.quantidade,
    };

    produtos.push(novoProduto);
    return novoProduto;
  }

  static atualizar(id, dados) {
    const produto = this.buscarPorId(id);

    if (!produto) return null;

    produto.nome = dados.nome.trim();
    produto.preco = dados.preco;
    produto.quantidade = dados.quantidade;

    return produto;
  }

  static deletar(id) {
    const indice = produtos.findIndex((produto) => produto.id === id);

    if (indice === -1) return null;

    return produtos.splice(indice, 1)[0];
  }
}

module.exports = Produto;
