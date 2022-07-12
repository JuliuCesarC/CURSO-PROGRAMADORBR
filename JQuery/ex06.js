let sel = $('#num3');

// O método 'siblings' retorna um array com todos os elementos irmãos do elemento selecionado, porém, o próprio não vai para o array.
console.log(sel.siblings())//Podemos também passar um filtro como parametro do siblings.
// O 'nextAll' seleciona os elementos que vem depois do elemento selecionado e que são irmãos.
console.log(sel.nextAll())
// O 'next' seleciona somente o primeiro elemento após o elemento selecionado.
console.log(sel.next())
// O 'prev' seleciona somente o primeiro elemento anterior ao elemento selecionado.
console.log(sel.prev())
// O 'prevAll' seleciona os elementos que vem antes do elemento selecionado e que são irmãos.
console.log(sel.prevAll())

// O exemplo abaixo utiliza o método 'nextUntil' para selecionar todos os elementos após o 'num6' até 'num9' e que são irmãos. Os 2 elementos seletores não vão para o array.
console.log($('#num6').nextUntil('#num9'))
// Temos também o 'prevUntil' que seleciona os elementos anteriores do elementos selecionado até o elemento parametro do 'prevUntil'.
console.log($('#num10').prevUntil('#num7'))

// O método 'first' seleciona o primeiro elemento, no caso abaixo são os filhos do elemento 'second'
console.log($('#second').children().first())
// O 'last' seleciona o ultimo.
console.log($('#second').children().last())
// O 'not' retira o elemento que poderia ser selecionado.
console.log($('#second').children().not("#num7"))

// Todos os métodos apresentados acima retornam um array. O método 'eq' seleciona um item dentro do array cujo indice é o numero do parametro do 'eq'. No exemplo abaixo, o indice 2 é relativo ao item 3. 
console.log($('#second').children().eq(2))