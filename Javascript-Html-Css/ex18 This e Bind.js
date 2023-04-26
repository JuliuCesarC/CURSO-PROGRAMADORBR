
function falapessoa(){
    console.log(this.sound)
}

let velho = {
    sound: "que dor nas costas",
    speak: falapessoa
}

let adulto = {
    sound: "queria ser criança de novo",
    speak: falapessoa
}

// adulto.speak();
// velho.speak();

// ou

// let bindedFunction = falapessoa.bind(adulto);

// bindedFunction();