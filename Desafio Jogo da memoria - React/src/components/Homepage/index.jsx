import React from "react";
import { GameRulesContext, TIMER } from "../GameRules";
import DeckOfCards from "../DeckOfCards"
import "./HomePage.css"
import { useEffect } from "react";

export default function HomePage(props){
	const cardContext = React.useContext(GameRulesContext);
	const timer = React.useContext(TIMER)

	return(
		<div className="container">
			<div className="navGame">
				<h2>Jogo da Memória</h2>
				<h4>{timer.Minutes}:{timer.Seconds}</h4>
				<button type="button" onClick={cardContext.shuffleCards}>Embaralhar cartas.</button>
			</div>
			{cardContext.gameOver && 
				<div className="gameOver">
					<div className="modal">
						<h3>Fim de jogo</h3>
						<button className="closeModal" onClick={cardContext.closeModal}>✖</button>
						<button className="restart" onClick={cardContext.shuffleCards}>Restart</button>
					</div>
				</div>
			}
			<DeckOfCards />
		</div>
	)
}