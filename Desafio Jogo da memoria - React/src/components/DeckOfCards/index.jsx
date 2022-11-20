import React from "react";
import { GameRulesContext } from "../GameRulesProvider";
import "./DeckOfCards.css"

export default function DeckOfCards(props) {
	const cardContext = React.useContext(GameRulesContext);


	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}

	return (
		<div className="deckOfCards">
			<div className="modalStartGame">
				<button onClick={cardContext.setTimer}>Start</button>
			</div>
			{cardContext.Cards.map((card) => {
				return (
					<div
						className={`Card ${card.flip ? "flip" : ""}`}
						key={randomID()}
						onClick={(e) => {
							cardContext.flipCard(e.target, card);
						}}
					>
						<div className="frontCard">
							<img src={`img/${card.name}.png`} alt="" />
						</div>
						<div className="backCard">
							<img src="img/progBR.png" alt="" />
						</div>
					</div>
				);
			})}
		</div>
	);
}
