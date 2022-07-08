let i=0;
$('#clicar').click(()=>{
    if(i==0){
        // Abaixo utilizando um callback que executa uma função após o termino da animação do hide.
        $('#verde').hide('easing', function (){
            $('#vermelho').show(2000)
        })
        i=1;
    }else{
        $('#vermelho').hide('easing', function (){
            $('#verde').show(2000)
        })
        i=0;
    }
})

$('#clicar2').click(()=>{
    // Abaixo utilizamos um encadeamento ou 'chain' para executar uma função após a outra.
    $('#verde').hide(2000).show(2000)
})