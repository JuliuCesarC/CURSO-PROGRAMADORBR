import React from 'react'
import './style.css'

class Card extends React.Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='card' id={this.props.id}>
            <div>
                <strong className='Name'>{this.props.name}</strong>
                <div>{this.props.time}</div>            
            </div>

            <div className="cardName">
                <img src={this.props.del} alt="Edit Card" />
                <img src={this.props.edit} alt="Delete Card" />
            </div>
        </div>
        )
    }
}

export default Card