let i=0;
$('#clicar').click(()=>{
    if(i==0){
        // O método 'hide' adiciona um 'display:none' no elemento selecionado, dessa forma escondendo o item. Dentro do 'hide' podemos adicionar uma animação pré definida, e também uma função anônina ou uma arrow function que sera executada após o termino da animação do 'hide'.
        $('#verde').hide('easing', function (){
            $('#vermelho').show(2000)        })
        i=1;
    }else{
        $('#vermelho').hide('easing', ()=>{
            $('#verde').show(2000)        })
        i=0;}
})

// ----------/ IMPORTANTE /----------
// Quando chamamos o JQuery com o '$' é criado uma instância dele que nos possibilita executar as funções, e a grande maioria dos métodos retornão essa instancia, ou seja, podemos executar outra função no final da execução da primeira. Isso se chama Encadeamento ou 'Chain'.
$('#clicar2').click(()=>{
    // Abaixo temos um exemplo de encadeamento ou 'chain', onde uma função é executada após a outra.
    $('#verde').hide(2000).show(2000)})

// ---------- / ----------

let box = $('#dim'); 
// Alguns métodos para saber as dimenções do elemento selecionado.
box.append('Largura: ', box.width(), '<br>', 
           'Largura + Padding: ', box.innerWidth(), '<br>',
           'Largura + Padding + Borda: ', parseInt(box.outerWidth()), '<br>',
           'Largura + Padding + Borda + Margem: ', parseInt(box.outerWidth(true))
)