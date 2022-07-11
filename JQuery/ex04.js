// O método 'text' ira pegar todo o texto do elemento selecionado. Por exemplo abaixo selecionamos o elemento 'ul', porém o mesmo não possui conteudo, apenas os elementos filhos 'li' que possuem, então o que sera mostrado é os textos desses 'li'.
console.log($('ul').text())
// Já o método 'html' ira pegar tudo dentro do elemento selecionado, ou seja, tanto os textos, comos as tags. No nosso HTML temos 2 tags 'ul', porem o método 'html' pega só o que esta dentro da primeira tag 'ul'.
console.log($('ul').html())
// Caso seja preciso pegar o conteudo de um tag imput, não pedemos utilizar os 2 métodos acima, pois a tag imput é um tag de auto fechamento, então ela não possui conteudo. Para isso temos algumas maneiras, uma delas é o método 'val', que pega o valor do elemento.
console.log($('#tx1').val())
// Temos também o método 'attr', que pega o valor do atributo do elemento selecionado, porém é preciso especificar qual atributo estamos buscando.
console.log($('#tx1').attr('name'))//O imput possui um atributo 'name'.

// Com o text só é possivel alterar textos. Substitui o texto anterior.
$('#primeira').text("Testando método 'text'")
// Com o html podemos enviar tags no formato de texto que o navegador ira interpretar essas tags e ira mostrar elas. Substitui as tags dentro do elemento selecionado.
$('#UL1').html('<li>Novo Item 1</li> <li>Novo Item 2</li>')
// Com o attr adicionamos um atributo 'name' com parametro 'item' em todos os elementos 'li'.
$('li').attr('name', 'item')
// Porém cada 'name' precisa de um nome diferente um do outro. Para isso, dentro do método 'attr' podemos adicionar uma função anonima ou uma arrow function.
$('li').attr('name', (numArray, oldValue)=>{return oldValue + numArray})
// Quando é adicionado uma função dentro do attr, o primeiro parâmetro dessa função será o indice do array contendo os itens selecionados pelo jquery, por exemplo, dentro do nosso HTML temos 7 'li', ou seja, a função sera executada 7 vezes com o 'numArray' sendo de 0 a 6. O segundo parâmetro sera o valor antigo dentro do atributo. O resultado é cada elemento tando um nome diferente, 'item0; item1; item2; ...'.

$('#tx2').attr('maxlength', 6).attr('type', 'password')
.attr('placeholder', 'Senha').css('text-align', 'right')