const front = "cartaFrente"
const back = "cartaAtraz"

let tecnologias = [
    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react']

let x = criandoCartasComTecs(tecnologias);
let y = embaralha(x)
console.log(y)
function embaralha(array){
    return array.sort(()=> Math.random() - 0.5);
}

function criandoCartasComTecs(tecs){
    let cartas = [];
    for(let tec of tecs){
        cartas.push(criaPardeCartas(tec))
    }
    return (cartas.flatMap(par=>par));
}

function criaPardeCartas(tec){
    return [{
        id: criaID(tec),
        icon: tec,
        flipped: false
    },{
        id: criaID(tec),
        icon: tec,
        flipped: false
    }]
}

function criaID(tec){
    return tec + parseInt(Math.random()*1000);
}