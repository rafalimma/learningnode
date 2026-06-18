
// importa modulos internos do node
const fs = require('fs');
const path = require('path');

const name = process.argv[2]; // argumentos passados ao rodar o script node
const filePath = path.join(__dirname, 'data', `${name}.txt`);

console.log('script teste');

console.log(`Olá`);
