import "./card.css";

function Card(props) {
    return (
        <div className="Card" id={props.id}>
            <h3>
                <span id="numTask">{props.index + 1}</span>
                {props.name}
            </h3>
            <div>
                <div
                    onClick={e=>props.onCompleteTask(
                        e.target.parentNode.parentNode.id
                    )}
                >
                    {!props.check ? 'Check: F' : 'Check: T'}
                </div>
                <div
                    onClick={(e) => {
                        props.onRemoveTask(e.target.parentNode.parentNode.id);
                    }}
                >
                    Remove
                </div>
            </div>
        </div>
    );
}

export default Card;
