const http = require('http');

const server = http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});

    response.end('<h2> Bem vindo a Página Node...</h2>');

});

server.listen(3000, () => {
    console.log('server escutando ')
})