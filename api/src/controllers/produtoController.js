const Produto = require('../models/Produto');

function idValido(id) {
  return Number.isInteger(id) && id > 0;
}

function validarProduto({ nome, preco, quantidade }) {
  if (typeof nome !== 'string' || nome.trim() === '') {
    return 'O campo nome é obrigatório e deve ser um texto não vazio.';
  }

  if (typeof preco !== 'number' || !Number.isFinite(preco) || preco < 0) {
    return 'O campo preço é obrigatório e deve ser um número maior ou igual a zero.';
  }

  if (!Number.isInteger(quantidade) || quantidade < 0) {
    return 'O campo quantidade é obrigatório e deve ser um número inteiro maior ou igual a zero.';
  }

  return null;
}

exports.criar = (req, res) => {
  const erro = validarProduto(req.body);

  if (erro) return res.status(400).json({ mensagem: erro });

  const produto = Produto.criar(req.body);
  return res.status(201).json(produto);
};

exports.listarTodos = (req, res) => {
  return res.status(200).json(Produto.listarTodos());
};

exports.buscarPorId = (req, res) => {
  const id = Number(req.params.id);

  if (!idValido(id)) {
    return res.status(400).json({ mensagem: 'O ID informado é inválido.' });
  }

  const produto = Produto.buscarPorId(id);

  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  return res.status(200).json(produto);
};

exports.atualizar = (req, res) => {
  const id = Number(req.params.id);

  if (!idValido(id)) {
    return res.status(400).json({ mensagem: 'O ID informado é inválido.' });
  }

  const erro = validarProduto(req.body);
  if (erro) return res.status(400).json({ mensagem: erro });

  const produto = Produto.atualizar(id, req.body);

  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  return res.status(200).json(produto);
};

exports.deletar = (req, res) => {
  const id = Number(req.params.id);

  if (!idValido(id)) {
    return res.status(400).json({ mensagem: 'O ID informado é inválido.' });
  }

  const produto = Produto.deletar(id);

  if (!produto) {
    return res.status(404).json({ mensagem: 'Produto não encontrado.' });
  }

  return res.status(200).json({
    mensagem: 'Produto removido com sucesso.',
    produto,
  });
};
