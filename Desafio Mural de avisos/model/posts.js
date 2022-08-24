module.exports = {
    posts : [
        {
            id: "qualquer",
            title: "Teste do Mural",
            description: "Descrição HardCode",
        },
    ],
    getAll(){
        return this.posts
    },
    newPost(title, description){
        this.posts.push({ id:generateID(), title, description })
    },
}
function generateID(){
    // Maneira provisoria para gerar um ID.
    return Math.random().toString(36).substring(2, 9);
    // O math.random por padrão só gera numeros aleatorios, porém com o '.toString()' passando o parametro '36', o resultado é uma combinação de letras e numeros.
    // O 'substring' serve para selecionar uma parte especifica da string, passamos o parâmetro 2 para que seja selecionado a partir da terceira letra.
}