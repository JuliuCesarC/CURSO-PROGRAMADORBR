let res = document.getElementById("res")
function calcular(){
    let pessoas = Number(document.getElementById("npess").value)
    let nbebe = Number(document.getElementById("nbebe").value)
    let cria = Number(document.getElementById("ncria").value)
    let tempo = Number(document.getElementById("ntem").value)
    
    let carne;
    let cerveja;
    let bebida;
    if(tempo <= 5){
        carne = ((pessoas * 0.4) + (cria * 0.2))
        bebida = (((nbebe+1) * 1) + (cria * 0.5))
        cerveja = ((pessoas-nbebe) * 1.2)
        resultado(carne.toFixed(1), cerveja.toFixed(1), bebida.toFixed(1))
    }else if(tempo>5) {
        carne = ((pessoas * (0.4+(0.1*(tempo-5)))) + (cria * (0.2+0.05*(tempo-5))))
        bebida = (((nbebe+2) * (1+(0.1*(tempo-5)))) + (cria * (0.5+(0.05*(tempo-5)))))
        cerveja = ((pessoas-nbebe) * (1.2+(0.12*(tempo-5))))
        resultado(carne.toFixed(1), cerveja.toFixed(1), bebida.toFixed(1))
    }else{
        window.alert("[ERRO] dados incorretos.")
    }
    
}
function resultado(ca, cv, be){
    var result = [`Qnt de carne: ${ca} Kilos.`, `Qnt de cerveja: ${cv} Litros.`, `Qnt de refrigerante/água: ${be} Litros.`]
    if(res.childElementCount <= 1){
    for(let i=1; i<=3; i++){
        let p = document.createElement("p")
        p.id = `pres`+i
        res.appendChild(p)
        let teste = document.getElementById("pres"+i)
        teste.innerHTML = result[i-1]
    }
    }else{
    for(let i=1; i<=3; i++){
        let p = document.createElement("p")
        let rem = document.getElementById("pres"+i)
        res.removeChild(rem)
        p.id = `pres`+i
        res.appendChild(p)
        let teste = document.getElementById("pres"+i)
        teste.innerHTML = result[i-1]

    }}
}

// Carne - 400gr pessoa. > de 6hr =650gr
// cerveja - 1,2L por pessoa. > de 6hr =2L
// refrigerante/ agua - 1L por pessoa. > de 6hr =1,5L

// crianças valem por 0,5