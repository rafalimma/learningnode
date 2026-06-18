// O Desafio: Crie um novo arquivo chamado exercicio1.js. 
// O seu objetivo é fazer o Node.js ler o conteúdo do arquivo boas_vindas.txt que criamos 
// no exemplo e mostrar esse texto no terminal usando o console.log.

const r = require('fs');
const msg = r.readFileSync('hello.txt', 'utf-8');
console.log('mensagem ->', msg);