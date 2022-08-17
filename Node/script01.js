let args = process.argv.slice(2)
// O 'process.argv' recebe os argumentos que estão no comando para executar o script. Os 2 primeiros argumentos são referentes ao Node e ao nome do arquivo, por isso utilizamos o 'slice(2)', para remover esses 2 argumemtos.
let calc = require('./Pacote Matematico/OperacoesBasicas')
// O 'require' serve para importar um módulo externo.

let a = Number(args[1]);
let b = Number(args[2]);
let c = '';

if(args[0] == 's'){
    c = calc.soma(a, b);
}else if(args[0] == 'm'){
    c = calc.multiplicacao(a, b);
}else{
    console.log('[ERRO] Opção invalida.')
}

console.log(c)