let game = ['','','','','','','','','',''] 
let gameOver = false;
let jogador = 0;
let simbolo = ['x', 'o']
let res =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]]

function jogada(position){
    if(gameOver){return;}

    if(game[position] == ''){
        game[position] = simbolo[jogador]
        gameOver = verificaVencedor();
        
        if(gameOver == false){
            jogador = (jogador == 0)?1:0;
        }
    }return gameOver;
}

function verificaVencedor(){
for(let x = 0; x < res.length; x++){
    let y = res[x]
    let pos1 = y[0]
    let pos2 = y[1]
    let pos3 = y[2]
if(game[pos1]==game[pos2] && 
    game[pos1]==game[pos3] && 
    game[pos1]!=''){
    return true;}
}return false;
}

function resetando(){
    game = ['','','','','','','','','',''] 
    gameOver = false;
    jogador = 0
}