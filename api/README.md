# API REST de Produtos — Node.js + Express + MVC

Projeto de avaliação prática com CRUD completo, arquitetura MVC e banco de dados em memória.

## Como executar

É necessário ter o Node.js instalado.

```bash
npm install
npm start
```

O servidor ficará disponível em `http://localhost:3000`.

Durante o desenvolvimento, também é possível usar:

```bash
npm run dev
```

## Estrutura

```text
src/
├── config/
├── controllers/
│   └── produtoController.js
├── models/
│   └── Produto.js
├── routes/
│   └── produtoRoutes.js
└── app.js
server.js
```

## Endpoints

| Método | Endpoint | Função |
| --- | --- | --- |
| POST | `/produtos` | Criar produto |
| GET | `/produtos` | Listar produtos |
| GET | `/produtos/:id` | Buscar produto por ID |
| PUT | `/produtos/:id` | Atualizar produto |
| DELETE | `/produtos/:id` | Excluir produto |

## Corpo JSON para POST e PUT

```json
{
  "nome": "Teclado mecânico",
  "preco": 199.90,
  "quantidade": 10
}
```

O `nome` precisa ser um texto não vazio, o `preco` deve ser um número maior ou igual a zero e a `quantidade` deve ser um número inteiro maior ou igual a zero.

> Como o banco é um Array em memória, os dados são apagados sempre que o servidor é reiniciado.
