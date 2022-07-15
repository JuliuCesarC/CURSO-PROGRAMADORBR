class criar {
    constructor(nome, n1, n2) {
        this.nome = nome;
        this.nota1 = n1;
        this.nota2 = n2;
        this.media = function () {
            return (this.nota1 + this.nota2) / 2;
        };
    }
}

let a = new criar("jão", 4, 5.5);
a = new criar("Catrina", 7, 8.5);

console.log(a)
console.log(a.media())