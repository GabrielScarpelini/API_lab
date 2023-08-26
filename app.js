// Incluir as bibliotecas
// Gerenciar as requisições, rotas e URLS, entre outra funcionalidades

const express = require("express");

// Chamar a função express
const app = express();

// Criar o middleware para receber os dados no corpo da requisição
app.use(express.json());

// Testar conexão com banco de dados Serve apenas para testar a minha conexão com bacno de dados
//const db = require("./db/models");

// Incluir as CONTROLLERS
const users = require('./controllers/users');

// Criar as rotas
app.use('/', users);



// Iniciar o servidor na porta 8080, criar a função utilizando modelo Arrow function para 
// retornar a mensagem de sucesso
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
});