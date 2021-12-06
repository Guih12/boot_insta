const searchInstagram = require('./SearchInstagram');
const prompt = require('prompt-sync')();

async function show(){
  const user = prompt('Qual usuário deseja pesquisar?: ');
  response = await searchInstagram.connect(user);
  console.log(response);
}

show();