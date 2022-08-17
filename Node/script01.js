let args = process.argv.slice(2)
let calc = require('./calculadora01')

let a = Number(args[1]);
let b = Number(args[2]);
let c = '';

if(args[0] == 's'){
    c = calc.soma(a, b);
}else if(args[0] == 'm'){
    c = calc.multi(a, b);
}else{
    console.log('[ERRO] Opção invalida.')
}

console.log(c)