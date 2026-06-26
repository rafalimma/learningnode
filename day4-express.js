const express = require('express');
const app = express();


app.get('/', (request, response) => {
    response.send('<h2> Página inicial da API </h2>');
});

app.get('/contato', (request, response) => {
    response.send('<h2> Página de contato da empresa </h2> <p>contato.empresa@gmail.coom</p>');
});

app.listen(3000, () => {
    console.log('Servidor express rodando na porta 3000....')
})