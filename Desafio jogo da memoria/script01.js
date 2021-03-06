const FRONT = "cartaFrente"
const BACK = "cartaAtraz"
const CARD = "carta"

comecaJogo()
function comecaJogo(){
    mostraCartas(game.criandoCartasComTecs());
}
function mostraCartas(){
    let tabuleiro = document.getElementById('tabuleiro')
    tabuleiro.innerHTML = '';

        // O método 'forEach' executa uma função para cada item do array 'cartas'. Como cada item do array é um objeto, o parametro da arrow function é o objeto contendo as informações de cada carta.
        game.cartas.forEach( (ctObjeto) => {
            let criaCarta = document.createElement('div')
            criaCarta.id = ctObjeto.id  //A div que esta sendo criada, recebe o id que esta dentro do objeto com as informações das cartas.
            criaCarta.classList.add(CARD)
                //O dataset abaixo não tem utilidade neste projeto.
            criaCarta.dataset.icon = ctObjeto.icon //O dataset ira criar um atributo dentro do elemento 'div' criado acima, com o nome desse atributo sendo 'data-icon' e com a informação dentro desse atributo sendo o 'ctObjeto.icon'.

            criaConteudoCartas(ctObjeto, criaCarta) //Envia para a função o objeto com as informações da carta, e a div que foi criada.

            criaCarta.addEventListener('click', viraCarta) //Adiciona um evento de clique, que ativa a função 'viraCarta', e o elemento 'div' selecionado é enviado para essa função.
            tabuleiro.appendChild(criaCarta) //Adiciona a div de cada carta ao tabuleiro. 
        })
}
function criaConteudoCartas(ctObjeto, elementoPai){
    criaFace(FRONT, ctObjeto, elementoPai);
    criaFace(BACK, ctObjeto, elementoPai);
}
function criaFace(FACE, ctObjeto, elementoPai){
    let elementoFace = document.createElement('div') //Cria uma nova div que ira dentro da div que foi criada na função 'mostraCartas'.
    elementoFace.classList.add(FACE) //Adiciona a classe da carta, se é a frente ou a parte de traz.
    if(FACE == FRONT){ //Caso seja a frente da carta, então adiciona a imagem.
        let elementoFilho = document.createElement('img')
        elementoFilho.src = "./images/"+ ctObjeto.icon +".png" //Adiciona a imagem da frente da carta.
        elementoFace.appendChild(elementoFilho) //Adiciona a imagem como filho da nova div criada.
    }else{
        elementoFace.innerHTML = "&lt/&gt"
    }
    elementoPai.appendChild(elementoFace) //Adiciona a nova div criada como filho da div da carta, primeiro a frente, e depois a parte de traz.
}
function viraCarta(){
        // A função viraCarta esta recebendo a div que contem as informações da carta, como o id, o data-icon...
    if(game.setaCarta(this.id)){ //O 'this.id' pega o id dessa div que a função recebeu, e envia para a função 'setaCarta', e caso ela retorne 'true' executa os comandos abaixo.
        this.classList.add('flip')
        if(game.segundaCarta){ //Somente executa os comandos abaixo caso seja a segunda carta selecionada, pois não adiante verificar o par com apenas uma carta selecionada.
            if(game.verificaMatch()){
                // Caso o par seja formado, a função 'verificaMatch' retorna true, que executa o comando:
                game.limpaCartas() //O comando 'limpaCartas' ira remover as informações das cartas selecionadas da 'primeiraCarta' e 'segundaCarta', desse forma impede as cartas que formaram um par de serem desviradas.
                if(game.verificaGameOver()){ //E por ultimo verifica se o par formado, foi o ultimo do jogo, dessa forma aparecendo a tela de final do jogo.
                    let gameOver = document.getElementById('gameOver')
                    gameOver.style.display = 'flex';
                }
            }else{
                setTimeout(() => { //O 'setTimeout' é para dar um delay na animação de desvirar as cartas, para dar tempo do jogador ver qual foi a segunda carta selecionada.
                    let primeiraCartaVista = document.getElementById(game.primeiraCarta.id)
                        // O 'game.primeiraCarta.id' ira retornar uma string com a informação do id da carta selecionada. Dessa forma o getElement ira buscar esta carta no html para poder trabalhar ela aqui dentro do 'script01'.
                    let segundaCartaVista = document.getElementById(game.segundaCarta.id)
                    
                    primeiraCartaVista.classList.remove('flip') //O 'classList' acessa a classe da carta selecionada, assim podendo removar o 'flip', que faz a animação de desvirar a carta.
                    segundaCartaVista.classList.remove('flip')
                    game.desviraCartas()
                    }, 1000);
            }
        }
    }
}
    // O botão de resetar que aparece no game over.
function restart(){
    game.limpaCartas(); //Por garantia ativa a função limpaCartas, para limpar qualquer informação do jogo anterior.
    comecaJogo() //Ativa a função que gera as novas cartas do baralho.
    let gameOver = document.getElementById('gameOver')
    gameOver.style.display = 'none'; //Remove a tela de Game Over.
}



