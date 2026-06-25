const http = require('http');

const servidor = http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    resposta.end('Olá acessando server node.js');
    setTimeout(() => {
        while (true) {
            console.log('usando de nvo');
        }

    }, 3000)
});


servidor.listen(3000, () => {
    console.log('server rodando em http://localhost:3000');
});