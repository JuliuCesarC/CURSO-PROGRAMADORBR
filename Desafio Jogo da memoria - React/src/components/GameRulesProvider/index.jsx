import React from "react";
import { NameOfCards } from "../NameOfCards";

export const GameRulesContext = React.createContext({
	Cards: [],
	startTimer: false,
	gameOver: false,
	closeModal: false,
	setTimer: () => {
		alert("setTimer ainda não configurado.");
	},
	shuffleCards: () => {
		alert("shuffleCards ainda não configurado.");
	},
	
	flipCard: () => {
		alert("flipCard ainda não configurado.");
	},
});

export default function GameRulesProvider(props) {
	const [Cards, setCards] = React.useState(NameOfCards);
	const [gameOver, setGameOver] = React.useState(false);
	const [startTimer, setStartTimer] = React.useState(false)

	function setTimer(){
		setStartTimer(true)
		shuffleCards()
	}
	
	function shuffleCards() {
		let newCards = [...Cards];
		for (let i = 0; i < 30; i++) {
			let random = Math.floor(Math.random() * 15);
			let removedCard = newCards[i];
			newCards[i] = newCards[random];
			newCards[random] = removedCard;
		}
		setCards(newCards);
	}

	let blockEvent = false;
	let firstCard;
	let twoCards = 0;
	let lastPair = 0;
	function flipCard(eFlip, cardData) {
		if (cardData.flip || blockEvent || !startTimer) {return;}
		console.log('passou do cardData');
		if (twoCards < 1) {
			firstCard = { cardElement: eFlip.closest(".Card"), card: cardData };
			eFlip.closest(".Card").classList.add("flip");
			cardData.flip = true;
			twoCards++;
		} else {
			blockEvent = true;
			if (firstCard.cardElement == eFlip.closest(".Card")) {
				blockEvent = false;
				return;
			}
			eFlip.closest(".Card").classList.add("flip");
			cardData.flip = true;
			checkPair(eFlip.closest(".Card"), cardData);
		}
	}
	function checkPair(eCheck, cardData) {
		if (firstCard.card.name == cardData.name) {
			setTimeout(() => {
				twoCards = 0;
				blockEvent = false;
			}, 500);
			lastPair++;
			checkGameOver();
			return;
		}
		setTimeout(() => {
			firstCard.cardElement.classList.remove("flip");
			firstCard.card.flip = false
			eCheck.classList.remove("flip");
			cardData.flip = false
			twoCards = 0;
			blockEvent = false;
		}, 1000);
	}
	function checkGameOver() {
		if (lastPair == 15) {
			setTimeout(() => {
				setGameOver(true);
				setStartTimer(false);
			}, 500);
		}
	}
	function closeModal() {
		setGameOver(false);
	}

	return (
		<GameRulesContext.Provider
			value={{
				Cards: Cards,
				startTimer: startTimer,
				gameOver: gameOver,
				setTimer: setTimer,
				shuffleCards: shuffleCards,
				flipCard: flipCard,
				closeModal: closeModal,
			}}
		>
			{props.children}
		</GameRulesContext.Provider>
	);
}
