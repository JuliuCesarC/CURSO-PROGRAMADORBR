let game = {

    travaDoJogo: false,
    primeiraCarta: null,
    segundaCarta: null,

    setaCarta: function(id){
            // Cria um filtro que retorna toda carta com o mesmo id que foi selecionado, como cada carta tem um id aleatorio, sómente a carta selecionado que retornara. O resultado é o objeto da carta selecionada.
        let card = this.cartas.filter(card => card.id === id)[0];

        if(card.flipped || this.travaDoJogo){
            return false;
        }

        if(!this.primeiraCarta){
            this.primeiraCarta = card;
            return true;
        }else{
            this.segundaCarta = card;
            this.travaDoJogo = true;
            return true;
        }

    },

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

        cartas: null,

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
            return tec + parseInt(Math.random()*1000);
        },
        embaralha:function(){
            let indexAtual = this.cartas.length;
            let randomIndex = 0;
        
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