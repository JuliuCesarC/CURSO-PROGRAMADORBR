import React from "react";
import "./style.css";

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = { editMode: false, inputName: "", saveName: "" };
        this.enterEditMode = this.enterEditMode.bind(this);
        this.updateName = this.updateName.bind(this);
    }
    enterEditMode(name) {
        this.setState(() => {
            return { editMode: true };
        });
        this.setState(() => {
            return { inputName: name };
        });
    }
    updateName(id) {
        this.props.onEditCard(document.getElementById("inputEdit").value, id);
        this.setState(() => {
            return { editMode: false };
        });
    }
    render() {
        return (
            <div className="card" id={this.props.id}>
                <div className="cardImg">
                    {this.state.editMode && (
                        <input
                            type="text"
                            name="EditName"
                            id="inputEdit"
                            defaultValue={this.state.inputName}
                        />
                    )}
                    {!this.state.editMode && (
                        <strong className="Name">{this.props.name}</strong>
                    )}
                    <div>{this.props.time}</div>
                </div>
                <div className="cardImg">
                    {!this.state.editMode && (
                        <img
                            src={this.props.del}
                            onClick={(e) => {
                                this.enterEditMode(this.props.name);
                            }}
                            alt="Edit Card"
                        />
                    )}
                    {!this.state.editMode && (
                        <img
                            src={this.props.edit}
                            onClick={(e) => {
                                this.props.onDeletedCard(
                                    e.target.parentNode.parentNode.id
                                );
                            }}
                            alt="Delete Card"
                        />
                    )}
                    {this.state.editMode && (
                        <img
                            src="img/icone-check-web.png"
                            onClick={(e) => {
                                this.updateName(
                                    e.target.parentNode.parentNode.id
                                );
                            }}
                            alt="Save Card"
                        />
                    )}
                </div>
            </div>
        );
    }
}
export default Card;
