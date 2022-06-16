var counter;
let galax = '<img src="Images/milky-way-microsoft.png" class="galax" width="90%">'
let star = '<img src="Images/star-364.png" class="galax" width="90%">'
let gameOver = 0;
let res =[
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]]

function jogada(i){
    let divJ = document.querySelector('.num'+i)

    if(divJ.innerHTML == "" && gameOver==0){
        if(counter != 1){
            divJ.innerHTML = star;
            counter = 1;
        }else{
            divJ.innerHTML = galax;
            counter = 2;
        }
        if(verifica()){
            setTimeout(()=>{
                alert(`O jogador ${counter} venceu!`)
            }, 30);
        }
    }
}
function cria(n, dado){
    return {n, dado}
}
function te(n){
    return (document.querySelector('.num'+n)).innerHTML
}
function verifica(){
for(let x = 0; x < res.length; x++){
    let y = res[x]
    let pos1 = y[0]
    let pos2 = y[1]
    let pos3 = y[2]
if(te(pos1)==te(pos2) && te(pos1)==te(pos3) && te(pos1)!=''){
    gameOver = 1;
    return true;
}
}return false;
}