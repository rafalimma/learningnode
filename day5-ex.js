// O Desafio: Crie um arquivo chamado exercicio5.js. Você deve criar uma rota GET chamada /calculadora/:numero1/:numero2.
//  O seu objetivo é capturar esses dois números da URL, somar os dois e retornar o resultado em formato JSON.

const express = require('express');
const app = express();

app.get('/calculadora/:numeroum/:numerodois/:format', (request, response) => {
    const {numeroum, numerodois, format} = request.params;
    let num1int = Number(numeroum);
    let num2int = Number(numerodois);
    res_soma = (num1int + num2int);
    if (format === 'html') {
        response.send(`<h3>Resultado da soma = > ${res_soma}</h3>`);
    } else {
        response.json({resultado: res_soma});
    }
});


app.listen(3000, console.log('servidor somas...'));