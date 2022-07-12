// Ao tentar adicionar um item ao elemento selecionado, criamos um problema, pois o método 'html' substituira todos os itens já existentes pelo elemento a ser adicionado.
// $('#UL1').html('<li>Testando</li>')

let ul = $('#UL1');
// Para isso temos o método 'append' que adicionara o novo elemento no final.
ul.append('<li>Testando Append</li>')
// O método 'prepend' adiciona o novo elemento no inicio.
ul.prepend('<li>Testando Prepend</li>')

// Muito parecido com os 2 métodos acima, temos o 'after' e o 'before', que adicionaram o novo item depois e antes do elemento selecionado.
ul.after('<p>Teste After</p>')//O after adiciona o item logo em seguida do elemento selecionado, isso quer dizer que se houver outros after, este daqui sera empurrado para baixo.
ul.before('<p>Teste Before</p>')//O mesmo serve para o before, este item aqui se empurrado para cima.

let nome = 'Jão'
let sobrenome = ' da Silva'
// Todos os métodos acima podem receber mais de 1 argumento.
ul.after(nome, sobrenome, '<br>', 'Nota: 6')

// ---------- / ----------

// O método 'addClass' adiciona uma classe ao elemento selecionado.
$('h1').addClass('chColor')
// O método 'toggleClass' alterna a classe, se o elemento já possuir a classe, então sera removida, caso não tenha a classe, então sera adicionada.
$('h1').toggleClass('chColor')