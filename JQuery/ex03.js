// No documento html temos 2 elementos com a mesma classe. Mas se for necessario selecionar somente um deles:
// Utilizando o seletor abaixo, podemos pegar sómente o elemento 'item2' que esta dentro da 'lista1'.
$('#lista1 > ul > .item2').hide()
    // Mas como vemos o item2 esta dentro de 'ul' que esta na lista1. Para evitar ficar colocando todos os filhos de lista1, podemos usar o método 'find'.


let listaHide = $('#lista1')
listaHide.find('.item2').hide()
// Com o 'find' como nome sugere, ele ira procurar todos os elementos com a classe 'item2' dentro do elemento 'lista1', independente de quantas gerações ele esteja.
$('#lista1').find('.item2').hide();

// Temos o método 'children' que pega somentos os filhos diretos do elemento selecionado.
$('ul').children().css('list-style-type', 'circle')