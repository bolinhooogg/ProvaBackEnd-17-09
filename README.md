# 📑 Avaliação Prática: Desenvolvimento de API REST com Node.js

Bem-vindo à avaliação prática de Back-end! O objetivo deste teste é avaliar a sua capacidade de construir uma API REST estruturada, utilizando a arquitetura **MVC (Model-View-Controller)**, o ecossistema **Node.js** com **Express**, e um banco de dados simulado **em memória**.

---

## 🎯 Objetivo do Desafio
Você deve desenvolver uma API para o gerenciamento de um cadastro simples (Exemplo: **Produtos**, **Livros** ou **Usuários**). A API deve permitir criar, listar, buscar por ID, atualizar e deletar os registros.

---

## 🛠️ Requisitos Técnicos

Para a execução desta prova, você deve obrigatoriamente utilizar:
* **Runtime**: [Node.js](https://nodejs.org)
* **Framework Web**: [Express](https://expressjs.com)
* **Persistência**: Banco de dados em memória (utilize um `Array` JavaScript dentro do seu Model).
* **Arquitetura**: Padrão Estrutural MVC.

---

## 📂 Estrutura de Pastas Esperada

A sua aplicação deve respeitar a separação de responsabilidades do padrão MVC. Certifique-se de organizar o seu código de forma semelhante à estrutura abaixo:

```text
├── src/
│   ├── config/          # Configurações do app (se necessário)
│   ├── controllers/     # Lógica de controle e manipulação das requisições
│   ├── models/          # Entidade de dados e métodos de simulação do banco (Array)
│   ├── routes/          # Definição das rotas e endpoints da API
│   └── app.js           # Inicialização do Express e middlewares
├── package.json         # Dependências e scripts do projeto
└── server.js            # Ponto de entrada (Entrypoint) para rodar o servidor
```

---

## 🛣️ Rotas e Endpoints (CRUD)

A sua API deve expor os seguintes endpoints HTTP retornando respostas em formato **JSON**:

| Método | Endpoint | Descrição | Status Esperado |
| :--- | :--- | :--- | :--- |
| **POST** | `/produtos` | Cria um novo registro | `201 Created` |
| **GET** | `/produtos` | Lista todos os registros cadastrados | `200 OK` |
| **GET** | `/produtos/:id` | Retorna um registro específico baseado no ID | `200 OK` ou `404 Not Found` |
| **PUT** | `/produtos/:id` | Atualiza os dados de um registro existente | `200 OK` ou `404 Not Found` |
| **DELETE** | `/produtos/:id` | Remove um registro do banco em memória | `200 OK` ou `404 Not Found` |

---

## 📋 Instruções de Entrega

1. Faça um **Fork** deste repositório para a sua conta pessoal do GitHub/GitLab.
2. Clone o seu fork localmente:
   ```bash
   git clone <url-do-seu-repositorio>
   ```
3. Inicialize o projeto e instale as dependências necessárias (`express` e, opcionalmente, `nodemon` como dependência de desenvolvimento):
   ```bash
   npm init -y
   npm install express
   npm install --save-dev nodemon
   ```
4. Desenvolva a solução garantindo que cada commit represente uma etapa lógica do desenvolvimento (ex: "Feat: implementando rota POST", "Fix: correção no tratamento de erro do GET").
5. Após finalizar, faça o `push` para o seu repositório remoto e envie o link na plataforma de entrega indicada pelo professor.

---

## ⚠️ Regras e Validações Importantes

* **IDs Únicos**: Ao criar um novo registro, você deve gerar um ID único automaticamente (pode ser um contador incremental ou uso de UUID/`crypto.randomUUID()`).
* **Validação de Campos**: Não permita o cadastro de itens vazios ou com dados inválidos (retorne `400 Bad Request` se os dados do corpo da requisição forem insuficientes).
* **Tratamento de Erros**: Se um aluno tentar buscar, atualizar ou deletar um ID que não existe, a API deve retornar obrigatoriamente o código HTTP `404` com uma mensagem de erro clara.

---

## 📊 Critérios de Avaliação

O projeto será avaliado com base nos seguintes pilares:

* **Organização Arquitetural (MVC)**: Divisão correta entre rotas, controllers e as funções de manipulação de dados dentro do model.
* **Funcionamento do CRUD**: Validação do comportamento correto de todos os métodos HTTP requisitados.
* **Uso Correto dos Códigos HTTP**: Respostas adequadas para cada cenário (`200`, `201`, `400`, `404`, `500`).
* **Boas Práticas de Código**: Limpeza do código, nomenclatura de variáveis/funções em camelCase e estruturação de commits.

***

Boa prova! Se tiver dúvidas sobre o escopo, consulte o professor antes do início do desenvolvimento.
