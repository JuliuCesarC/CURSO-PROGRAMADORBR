import React from "react";
import { useState } from "react";
import { GameRulesContext } from "../GameRulesProvider";

export default function GameInfo() {
	const cardContext = React.useContext(GameRulesContext)
	const [startTimer, setStartTimer] = React.useState(cardContext.startTimer)

	React.useEffect(()=>{
		setStartTimer(cardContext.startTimer)
		console.log('entrou no useEffect', cardContext.startTimer);
	}, [cardContext.startTimer])

	return (
		<div className="navGame">
			<h2>Jogo da Memória</h2>
			{startTimer ? <Timer />: '00:00'}
		</div>
	);
}

function Timer() {
	const [seconds, setSeconds] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);

	React.useEffect(() => {
		setTimeout(() => {
			setSeconds(seconds + 1);
			if (seconds == 59) {
				setSeconds(0);
				setMinutes(minutes + 1);
				if (minutes == 59) {
					setMinutes(0);
				}
			}
		}, 1000);
	}, [seconds]);

	return (
		<h4>
			{`${minutes.toString().padStart(2, "0")}:${seconds
				.toString()
				.padStart(2, "0")}`}
		</h4>
	);
}
