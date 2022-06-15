var focus = {
    tipo: "Hatch",
    marca: "ford",
    motor: 2.0,
    cor: 'prata'}
var hb20 = {
    tipo: "sedan",
    marca: "Hyundai",
    motor: 1.6,
    cor: 'branco'}
var celta = {
    tipo: "Hatch",
    marca: "Chevrolet",
    motor: 1,
    cor: 'prata'}

    // Com o metodo abaixo é retirado apenas a informação desejada. Porem é preciso colocar o nome correto da propriedade dentro do objeto. O resultado é uma variavel com o mesmo nome do item dentro do objeto alvo.
var {tipo, motor} = focus;
console.log('É um '+tipo+' com motor: '+motor.toFixed(1))
// __________________________________________________

    // Utilizando o spread operator criamos uma copia do objeto alvo, dessa forma é possivel alterar as informações da copia sem mecher no objeto original.
var { ...copia } = hb20;
copia.tipo = "Hatch"
console.log('- - - -')
console.log(hb20)
console.log(copia)
// __________________________________________________

    // Criando uma variavel com a informação 'marca' faz com que ela seja removida da copia, dessa forma o spread operator serve como um elemento 'rest', ficando com tudo o resto do objeto que não foi declarado antes dele. obs: o elemento rest precisa ficar no final.
var { marca, ...copia2 } = hb20;
copia2.tipo = "Hatch"
console.log('- - - -')
console.log(hb20)
// este metodo tambem não interfere no obj original
console.log(copia2)
console.log(marca)
// __________________________________________________

let carros = [focus, hb20];
console.log('- - - -')
console.log(carros)
    // Com array é um pouco diferente, o que importa é a posição do indice, ou seja, qualquer nome pode ser colocado no primeiro lugar, ele sempre recebe o item de indice '0', pois é o primeiro no array. 
var [carro1, carro2] = carros;
console.log(carro1)
// __________________________________________________

let carros2 = [focus, hb20, celta]
console.log('- - - -')
console.log(carros2)
    // Assim como no OBJ, com array tambem podemos retirar um item do array alvo, e colocar o resto em outra variavel com o spread operator. Desta forma temos 2 novos arrays, um com o primeiro item do array original e o outro com o resto.
var [primeirocarro, ...resto] = carros2;
console.log(primeirocarro)
console.log(resto)