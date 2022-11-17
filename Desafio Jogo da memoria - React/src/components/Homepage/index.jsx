import React from "react";
import { GameRulesContext } from "../GameRules";
import DeckOfCards from "../DeckOfCards";
import "./HomePage.css";

export default function HomePage(props) {
	const [timer, setTimer] = React.useState({Seconds: '00', Minutes: '00'})
	const cardContext = React.useContext(GameRulesContext);
	let timerInterval;

	function startTimer() {
		timerInterval = setInterval(count, 1000);
	}
	function count() {
		let newTimer = { Seconds: timer.Seconds, Minutes: timer.Minutes };
		newTimer.Seconds++;
		newTimer.Seconds < 10 ? (newTimer.Seconds = "0" + newTimer.Seconds) : null;
		if (newTimer.Seconds == 60) {
			newTimer.Seconds = "00";
			newTimer.Minutes++;
			newTimer.Minutes < 10
				? (newTimer.Minutes = "0" + newTimer.Minutes)
				: null;
		}
		console.log("Dentro do contador o newTimer:", newTimer);
		setTimer(newTimer);
	}
React.useEffect(()=>{
		clearInterval(timerInterval);
		timerInterval = null;
},[])
	

	return (
		<div className="container">
			<div className="navGame">
				<h2>Jogo da Memória</h2>
				<h4>
					{`${timer.Minutes}:${timer.Seconds}`}
				</h4>
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
			<DeckOfCards startTimer={startTimer}/>
		</div>
	);
}
