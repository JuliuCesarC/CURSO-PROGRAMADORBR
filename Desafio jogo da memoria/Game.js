let game = {
    travaDoJogo: false,
    primeiraCarta: null,
    segundaCarta: null,
    cartas: null,
    tecnologias:[
        'bootstrap',
        'css',
        'electron',
        'firebase',
        'html',
        'javascript',
        'jquery',
        'mongo',
        'node',
        'react'],

    setaCarta: function(idSelecionado){
            // Cria um filtro que retorna toda carta com o mesmo id que foi selecionado, como cada carta tem um id aleatorio, sómente a carta selecionado que retornara. O resultado é o objeto da carta selecionada.
        let card = this.cartas.filter(card => card.id === idSelecionado)[0];
            // O 'idSelecionado' é o id que a função 'viraCarta' enviou para aqui.
        if(card.flipped || this.travaDoJogo){
                //Retorna falso caso a carta selecionada ja esteja virada, impedindo de selecionador a mesma carta 2 vezes, ou de selecionar uma carta que ja tenha feito um par.
            return false;
        }

        if(!this.primeiraCarta){
                // Caso seja a primeira carta selecionada, a 'primeiraCarta' recebe o objeto com as informações da carta, e a opção 'flipped' vira 'true', para que a carta faça a animação de virar.
            this.primeiraCarta = card;
            this.primeiraCarta.flipped = true; //A função flipped tambem serve para que esta carta não possa ser selecionada novamente.
            return true;
        }else{
            this.segundaCarta = card;
            this.segundaCarta.flipped = true;
            this.travaDoJogo = true; //Para garantir que a animação de desvirar as cartas ocorra normalmente, a 'travaDoJogo' é ativada, dessa forma impedindo de selecionar qualquer carta durante a animação.
            return true;
        }

    },
    verificaMatch:function(){
        return this.primeiraCarta.icon === this.segundaCarta.icon //Compara o icone da primeira carta com o da segunda carta, caso verdadeiro retorna 'true' e assim o par esta formado. 
    },

    desviraCartas(){ //Esta função não ativa a animação de desvirar as cartas em si, porém ela atualiza a informação da carta.
        this.primeiraCarta.flipped = false; //Setando o 'flipped' para 'false', faz com que a carta possa ser selecionada novamente.
        this.segundaCarta.flipped = false;
        this.limpaCartas(); //A função 'limpaCartas' abaixo reseta as variaveis que recebem as informações das cartas, para que elas possam receber as informações das novas cartas selecionadas, e tambem para garantir que os 'IFs' de verificações funcionem corretamente.
    },
    limpaCartas: function(){
        this.primeiraCarta = null;
        this.segundaCarta = null;
        this.travaDoJogo = false;
    },

    verificaGameOver(){
            // O filtro abaixo retorna um array contendo todas as cartas NÃO viradas.
        return this.cartas.filter(cards=>!cards.flipped).length == 0; //Caso o array tenha o comprimento(length) de 0, ou seja todas as cartas formaram um par e estão viradas, então retorna 'true'. 
    },

       
    criandoCartasComTecs:function(){
        this.cartas = [];
        // Loop com cada elemento do array 'tecnologias'
        this.tecnologias.forEach((nomeTec)=>{
            this.cartas.push(this.criaPardeCartas(nomeTec))
        })
            // Até aqui recebemos um array com cada index dele sendo um outro array, porem precisamos de um array com apenas o conteudo que esta dentro desses arrays.
            // Para isso temos a função flatMap que vai retornar um novo array com o conteudo de dentro desses arrays.
        this.cartas = this.cartas.flatMap(par=>par);
        this.embaralha()
    },

    criaPardeCartas:function(nomeTec){
            // Retorna um array com 2 objetos com id diferentes e aleatorio.
        return [{
            id: this.criaID(nomeTec),
            icon: nomeTec,
            flipped: false
        },{
            id: this.criaID(nomeTec),
            icon: nomeTec,
            flipped: false
        }]
    },
    criaID:function(tec){
            // Cria o ID aleatorio para a função acima.
        return tec + parseInt(Math.random()*1000);
    },
    embaralha:function(){
        let indexAtual = this.cartas.length;
        let randomIndex = 0;
            // Tem a função de embaralhar as cartas. Gera um index aleatorio entre 0 a 20, que é o numero de cartas, e assim troca a carta de index atual com a aleatoria, dessa forma substituindo cada carta uma vez temos o baralho embaralhado.
        while(indexAtual != 0){
            randomIndex = Math.floor(Math.random()*indexAtual)
            indexAtual--;
    
            [this.cartas[randomIndex], this.cartas[indexAtual]] = [this.cartas[indexAtual], this.cartas[randomIndex]]
        }
    }
}
// Abaixo temos uma maneira de embaralhar um array, porem ele gera um novo array com base no array original. 
// function embaralha(array){
    //     return array.sort(()=> Math.random() - 0.5);
    // }