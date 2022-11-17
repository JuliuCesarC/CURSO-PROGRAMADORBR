import React from "react";
import { NameOfCards } from "../NameOfCards";

export const GameRulesContext = React.createContext({
	Cards: [],
	gameOver: false,
	closeModal: () => {
		alert("closeModal ainda não configurado.");
	},
	shuffleCards: () => {
		alert("shuffleCards ainda não configurado.");
	},
	flipCard: () => {
		alert("flipCard ainda não configurado.");
	},
});


export default function GameRules(props) {
	const [Cards, setCards] = React.useState(NameOfCards);
	const [gameOver, setGameOver] = React.useState(false)
	
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
		if (eFlip.closest(".Card").dataset.pair == "pair" || blockEvent) {
			return;
		}
		if (twoCards < 1) {
			firstCard = { cardElement: eFlip.closest(".Card"), id: cardData.id };
			eFlip.closest(".Card").classList.add("flip");
			twoCards++;
		} else {
			blockEvent = true;
			if (firstCard.cardElement == eFlip.closest(".Card")) {
				blockEvent = false;
				return;
			}
			eFlip.closest(".Card").classList.add("flip");
			checkPair(eFlip.closest(".Card"), cardData);
		}
	}
	function checkPair(eCheck, cardData) {
		if (firstCard.id == cardData.id) {
			firstCard.cardElement.dataset.pair = "pair";
			eCheck.dataset.pair = "pair";
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
			eCheck.classList.remove("flip");
			twoCards = 0;
			blockEvent = false;
		}, 1000);
	}
	function checkGameOver() {
		if (lastPair == 15) {
			setGameOver(true);
		}
	}
	function closeModal(){
		setGameOver(false);
	}

	return (
		<GameRulesContext.Provider
			value={{
				Cards: Cards,
				gameOver: gameOver,
				closeModal: closeModal,
				shuffleCards: shuffleCards,
				flipCard: flipCard,
			}}
		>
			{props.children}
		</GameRulesContext.Provider>
	);
}

