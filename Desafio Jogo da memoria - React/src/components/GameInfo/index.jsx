import React from "react";
import { useState } from "react";
import { GameRulesContext } from "../GameRulesProvider";
import "./GameInfo.css"

export default function GameInfo() {
	const cardContext = React.useContext(GameRulesContext);

	return (
		<div className="navGame">
			<h2>Jogo da Memória</h2>
			<Timer start={cardContext.startTimer} reset={cardContext.reset} />
		</div>
	);
}

function Timer({ start, reset }) {
	const [timer, setTimer] = React.useState(12000);

	React.useEffect(() => {
		if (start) {
			setTimeout(() => {
				setTimer(timer + 1000);
			}, 1000);
		}
	}, [start, timer]);

	React.useEffect(()=>{
		setTimer(0)
	},[reset])

	function format() {
		let sec = (timer / 1000) % 60;
		let min = Math.floor(timer / 60000);
		return `${min.toString().padStart(2, "0")}:${sec
			.toString()
			.padStart(2, "0")}`;
	}

	return <h3>{format()}</h3>;
}
