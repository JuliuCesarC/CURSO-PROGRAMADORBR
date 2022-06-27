const FRONT = "cartaFrente"
const BACK = "cartaAtraz"
const CARD = "carta"
const ICON = 'icon'

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



function inicia(){
    var cartas = criandoCartasComTecs(tecnologias);
    embaralha(cartas);

    mostrarCartas(cartas)
}
function mostrarCartas(cartas){
    let tabuleiro = document.getElementById('tabuleiro')

    cartas.forEach((ctObjeto)=>{
        let criaCarta = document.createElement('div')
        criaCarta.id = ctObjeto.id
        criaCarta.classList.add(CARD)
        criaCarta.dataset.icon = ctObjeto.icon

        criaConteudoCartas(ctObjeto, criaCarta)

        criaCarta.addEventListener('click', viraCarta)
        tabuleiro.appendChild(criaCarta)
      
    })
}

function criaConteudoCartas(ctObjeto, elementoPai){
    criaFace(FRONT, ctObjeto, elementoPai);
    criaFace(BACK, ctObjeto, elementoPai);
}
function criaFace(face, ctObjeto, elementoPai){
    let elementoFace = document.createElement('div')
    elementoFace.classList.add(face)
    if(face == FRONT){
        let elementoFilho = document.createElement('img')
        elementoFilho.classList.add(ICON)
        elementoFilho.src = "./images/"+ ctObjeto.icon +".png"
        elementoFace.appendChild(elementoFilho)
    }else{
        elementoFace.innerHTML = "&lt/&gt"
    }
    elementoPai.appendChild(elementoFace)
}

function embaralha(array){
    let indexAtual = array.length;
    let randomIndex = 0;

    while(indexAtual != 0){
        randomIndex = Math.floor(Math.random()*indexAtual)
        indexAtual--;

        [array[randomIndex], array[indexAtual]] = [array[indexAtual], array[randomIndex]]
    }
}
    // Abaixo temos uma maneira de embaralhar um array, porem ele gera um novo array com base no array original. 
// function embaralha(array){
//     return array.sort(()=> Math.random() - 0.5);
// }

function criandoCartasComTecs(tecs){
    let cartas = [];
    tecs.forEach((tec)=>{
        cartas.push(criaPardeCartas(tec))
    })
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

function viraCarta(){
    this.classList.add('flip')
}