var readlineSync = require('readline-sync');
var codigos = [];
var resp = 'S';

console.log('Bem vindo ao nosso programa de ajuda ao usuário, precisamos de exemplos de comandos CSS para facilitar a vida dos nossos proximos programadores.')

while(resp == 'S' || resp == 's'){
    codigos = readlineSync.question('Informe seu nome:Digite um comando css ');
    resp = readlineSync.question('Deseja Continuar(S/N)? ');
    
}

for(var i = 0; i < clientes.length; i++){
    console.log('Os codigos escritos foram: ' + codigos + '.')
}