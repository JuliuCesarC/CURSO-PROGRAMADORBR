    // O try tenta executar os comandos dentro do seu container, porem caso tenha algum problema/erro, o programa não deixa de executor os prossimos passos, dessa forma não travando o programa inteiro por um erro que as vezes não é importante.
try{
    console.log(nome)
}catch(erro){
        // O catch recebe o conteudo do erro caso aconteça algum, dessa forma podemos tratar esses dados do erro. 
    console.log("Houve um erro", erro)
}finally{
        // O finally executa o que estiver dentro dele independente do que acontecer nos 2 passos anteriores a ele.
console.log("Informação Importante")
}
console.log("- - - - -")
    // Porem muitas vezes temos algum erro critico que não pode ser ignorado ou tratado. Dessa forma podemos utilizar o 'throw', que joga um erro para o programa, que aborta a sequencia de execução.

let nome2 = "";

if(nome2 == ""){
    throw "[ERRO]O nome não pode estar vazio."
    // Desta forma nada após o throw é executado.
}
try{
    console.log(nome2)
}catch(erro){
    console.log("Houve um erro", erro)
}finally{
console.log("Informação mostrada...")
}
console.log("Informação apos o try...")
