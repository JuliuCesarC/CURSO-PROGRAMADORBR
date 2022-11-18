import React from "react";

export const InfoContext = React.createContext({
	timer: {},
	startTimer: () => {
		alert("startTimer ainda não configurado.");
	},
	stopTimer: () => {
		alert("stopTimer ainda não configurado.");
	},
});

export default function GameInfoProvider(props) {
	const [timer, setTimer] = React.useState({ Seconds: "00", Minutes: "00" });
	let timerInterval;

	function startTimer() {
		timerInterval = setInterval(count, 1000);
		console.log("setou o contador");
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
	function stopTimer() {
		clearInterval(timerInterval);
		timerInterval = null;
	}

	return (
		<InfoContext.Provider
			value={{
				timer: timer,
				startTimer: startTimer,
				stopTimer: stopTimer,
			}}
		>
			{props.children}
		</InfoContext.Provider>
	);
}
