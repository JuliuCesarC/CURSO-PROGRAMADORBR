document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");
    console.log(squares)

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })
})

function handleClick(event) {
    
    console.log(event)

    let square = event.target;
    console.log(square)
    let postion = square.id;

    if (handleMove(postion)) {

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
        }, 10);

    };
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function updateSquares() {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = `<div class='${symbol}'></div>`
        }
    })

}