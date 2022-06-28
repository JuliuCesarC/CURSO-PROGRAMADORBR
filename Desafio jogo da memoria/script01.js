const FRONT = "cartaFrente"
const BACK = "cartaAtraz"
const CARD = "carta"
const ICON = 'icon'

mostrarCartas(game.criandoCartasComTecs())

function mostrarCartas(cartas){
    let tabuleiro = document.getElementById('tabuleiro')

        // Loop com cada elemento do array 'cartas'
    game.cartas.forEach((ctObjeto)=>{
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
function viraCarta(){

    if(game.setaCarta(this.id)){
        this.classList.add('flip')
        game.verificaMatch();
    }

}

    



