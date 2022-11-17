import React from "react";
import { GameRulesContext } from "../GameRules";

export default function DeckOfCards(props) {
	const cardContext = React.useContext(GameRulesContext);

	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}

	return (
		<div className="deckOfCards">
			{cardContext.Cards.map((card) => {
				return (
					<div
						className={`Card ${card.flip ? "flip" : ""}`}
						key={randomID()}
						onClick={(e) => {
							cardContext.flipCard(e.target, card);
							props.startTimer()
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
