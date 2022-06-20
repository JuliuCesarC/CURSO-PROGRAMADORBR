document.addEventListener('DOMContentLoaded', () => {
    let quadrado = document.querySelectorAll('.tabuleiro');
    quadrado.forEach((quad) => {
        quad.addEventListener('click', tabuleiro);
    });
})

function tabuleiro(jogo){

    if(jogada(jogo.target.id)){
        setTimeout(()=>{
            alert(`O jogador ${jogador + 1} venceu.`)
        }, 30)
    }
    
    atualizaTabuleiro(jogo.target.id)
}
function atualizaTabuleiro(jogo){
    let at = document.getElementById(jogo.toString());
    at.innerHTML = `<div class='${game[jogo]}'></div>`
}


function reset(){
    for(let i=1; i<=9; i++){
        let limpa = document.getElementById(i.toString());
        limpa.innerHTML = ''
    }
    resetando();
}