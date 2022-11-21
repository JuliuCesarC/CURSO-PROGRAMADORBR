import React from "react";
import { useState } from "react";
import { GameRulesContext } from "../GameRulesProvider";

export default function GameInfo() {
	const cardContext = React.useContext(GameRulesContext);

	return (
		<div className="navGame">
			<h2>Jogo da Memória</h2>
			<Timer start={cardContext.startTimer} />
		</div>
	);
}

function Timer({ start }) {
	const [seconds, setSeconds] = React.useState(0);
	const [minutes, setMinutes] = React.useState(0);
	const count = React.useRef({Sec:0, Min:0})
	let interval;

	React.useEffect(() => {
		if (start && !interval) {
			interval = setInterval(() => {
				count.current.Sec++
				setSeconds(count.current.Sec);
				if (count.current.Sec == 60) {
					count.current.Sec = 0
					count.current.Min++
					setSeconds(count.current.Sec);
					setMinutes(count.current.Min);
					if (count.current.Min == 59) {
						count.current.Min = 0
						setMinutes(count.current.Min);
					}
				}
			}, 1000);
		} 
		if(!start) {
			clearInterval(interval);
			interval = 0;
			console.log('Limpou o interval', interval);
		}
	}, [start]);

	return (
		<h4>
			{`${minutes.toString().padStart(2, "0")}:${seconds
				.toString()
				.padStart(2, "0")}`}
		</h4>
	);
}
