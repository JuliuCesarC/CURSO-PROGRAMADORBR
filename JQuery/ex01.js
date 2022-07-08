// Como o JQuery é JS, então os seletores dele são os mesmos. Para chamar o JQ é utilizado o simbolo '$'. 
$('.titulo').mouseenter(elem=>{
        // O método '.css' possibilita mudar ou adicionar qualquer configuração css ao elemento.
    $(elem.target).css('color', `rgb(${AL()},${AL()},${AL()})`)
})
function AL(){
    return parseInt(Math.random()*255)
}

// $('.box').mouseenter(p=>{
//     $(p.target).hide(1000)
// })
    // Já o 'mouseout' dispara também nos elementos filhos.
// $('.box').mouseout(p=>{
//     $(p.target).show(1000)
// })
    // O 'mouseleave' dispara somente no elemento selecionado.
// $('.box').mouseleave(p=>{
//     $(p.target).show(1000)
// })

$('h2').click(item=>{
    $(item.target).css('text-transform', 'uppercase')
}) 

$('#botao').click(()=>{
    $('.box').fadeToggle(2000)
})
let i=0;
$('#botao').click(item=>{
    if(i==0){
            // O método '.animate' cria uma animação css comum, porém ele possui muitos parametros e para uma animação mais especifica o ideal é pesquisar dentro da biblioteca JQuery. 
        $('#botao').animate({width: 980}, 2000)
        i=1
    }else{
        $(item.target).animate({width: 150}, 2000)
        i=0
    }
})
$('#btstop').click(()=>{
        // O método 'stop' para a animação no momento que é ativada, e ao ativar a animação novamente, ela começa do ponto em que parou.
    $('#botao').stop()
})


