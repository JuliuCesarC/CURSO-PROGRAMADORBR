import './card.css'

function Card(){
    
    return(
        <div className="Card">
            <h3>
                <span id='numTask'>index.</span>
                Tarefa à ser executada.
            </h3>
            <div>Check: false</div>
        </div>
    )
}

export default Card