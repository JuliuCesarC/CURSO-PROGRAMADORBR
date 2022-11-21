import React from "react";
import { GameRulesContext } from "../GameRulesProvider";
import DeckOfCards from "../DeckOfCards";
import "./HomePage.css";

export default function HomePage(props) {
	const cardContext = React.useContext(GameRulesContext);

	return (
		<div className="container">
			{cardContext.modalGameOver && (
				<div className="gameOver">
					<div className="modal">
						<h2>Fim de jogo</h2>
						<button className="closeModal" onClick={cardContext.closeModal}>
							✖
						</button>
						<button
							className="restart"
							onClick={() => {
								cardContext.shuffleCards();
								cardContext.closeModal();
							}}
						>
							Restart
						</button>
					</div>
				</div>
			)}
			<DeckOfCards 
			/>
		</div>
	);
}
