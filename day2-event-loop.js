console.log("1 inicie o programa");

// // simulando uma tarefa que demora 2 segundos
setTimeout(() => {
    console.log('2 resposta da tarefa demorada');
}, 2000);

console.log("3 continue rodandod o resto do código ...")

const n = 5;
const outro_n = 10;

let soma = n + 10;
console.log('soma ->', soma);

///O Desafio: Crie um arquivo chamado exercicio2.js. Você deve criar um script que faça exatamente o seguinte nessa ordem cronológica:
// Mostre imediatamente no terminal a mensagem: "Buscando dados no servidor...".
// Após 3 segundos, mostre a mensagem: "Dados do usuário carregados com sucesso!".
//Logo em seguida (na linha abaixo da mensagem anterior, mas ainda dentro do tempo de 3 segundos), mostre uma lista de dados simulada, por exemplo: ["Nome: Carlos", "Idade: 28"].

console.log('buscando dados no servidor');
const dados = [];
dados.push('rafael', 'desenvolvedor');
dados.push('byanca', 'medica');
dados.push('fernando', 'engenheiro');
setTimeout( () => {
    console.log('Dados do usuário carregados com sucesso');
    console.log(dados);
}, 3000);




