const express = require('express');
const app = express();
const now = new Date();

app.get('/', (request, response) => {
    response.send('<h2>Seja bem vindo uelcome</h2>');
});

app.get('/sobre', (request, response) => {
    response.send("<p>Rafael Lima desenvolvedor node e python!</p>");
});

app.get('/api/status', (request, response) => {
    response.json({nome: "servidor exercício", status: "online", data: now})
});

app.listen(3000, () => {
    console.log('rodando servidor do exerciocio');
});

