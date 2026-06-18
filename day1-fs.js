// entender como o node.js roda e interage diretamente com o sistema de arquivos do computador
// ler e escrever arquivos
// node.js roda no sistema operacional

const fs = require('fs');
fs.writeFileSync('hello.txt', 'Hello word do rafaaa');
console.log('arquivo criado');


