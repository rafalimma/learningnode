// No Express, definimos um parâmetro usando : antes do nome (ex: /:id). 
// O Express captura o que o usuário digitou naquele lugar e nos entrega dentro de um objeto chamado req.params.

const express = require('express');
const app = express()

app.get('/ling/:tecnologia', (request, response) => {
    const lang = request.params.tecnologia;
    response.send(`<h2>Linguagem escolhida: ${lang}</h2>`);
});

app.listen(3000, () => console.log('servidor de parametros rodando'));