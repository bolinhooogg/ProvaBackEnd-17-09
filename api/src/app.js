const express = require('express');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    mensagem: 'API de Produtos funcionando!',
    endpoints: '/produtos',
  });
});

app.use('/produtos', produtoRoutes);

app.use((req, res) => {
  res.status(404).json({ mensagem: 'Rota não encontrada.' });
});

app.use((erro, req, res, next) => {
  console.error(erro);
  res.status(500).json({ mensagem: 'Erro interno do servidor.' });
});

module.exports = app;
