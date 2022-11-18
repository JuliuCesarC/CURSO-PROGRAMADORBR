import React from "react";
import { GameRulesContext } from "../GameRulesProvider";
import DeckOfCards from "../DeckOfCards";
import Timer from "../Timer/Timer";
import "./HomePage.css";

export default function HomePage(props) {
	const cardContext = React.useContext(GameRulesContext);

	return (
		<div className="container">
			<div className="navGame">
				<h2>Jogo da Memória</h2>
				<Timer/>
				<button type="button" onClick={cardContext.shuffleCards}>
					Embaralhar cartas.
				</button>
			</div>
			{cardContext.gameOver && (
				<div className="gameOver">
					<div className="modal">
						<h3>Fim de jogo</h3>
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
