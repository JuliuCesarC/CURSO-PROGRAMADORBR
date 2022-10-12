let now = new Date()
let year = now.getFullYear()
let month = now.getMonth()
let primeiroDiaSemana = new Date(year, month, 1).getDay() - 1;


let indexDay = new Date(year, month, -5);



let tabela = document.getElementById('tabela')

for (let index = 0; index < 5; index++) {
    let tr = document.createElement('tr')
    for (let index = 0; index < 5; index++) {
        let td = document.createElement('td')
        td.innerText = 'Teste'
        tr.appendChild(td)
    }

    tabela.appendChild(tr)

}