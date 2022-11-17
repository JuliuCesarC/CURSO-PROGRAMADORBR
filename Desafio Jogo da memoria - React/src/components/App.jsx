import React from "react";
import "./App.css";

const nameOfCards = [
	{ name: "bootstrap", id: randomID() },
	{ name: "css", id: randomID() },
	{ name: "electron", id: randomID() },
	{ name: "firebase", id: randomID() },
	{ name: "html", id: randomID() },
	{ name: "javascript", id: randomID() },
	{ name: "jquery", id: randomID() },
	{ name: "mongo", id: randomID() },
	{ name: "node", id: randomID() },
	{ name: "react", id: randomID() },
	{ name: "redux", id: randomID() },
	{ name: "swift", id: randomID() },
	{ name: "vite", id: randomID() },
	{ name: "vscode", id: randomID() },
	{ name: "vue", id: randomID() },
];
let deckOfCards;
if (nameOfCards.length == 15) {
	nameOfCards.push([...nameOfCards]);
	deckOfCards = nameOfCards.flat();
	for (let i = 0; i < 30; i++) {
		let random = Math.floor(Math.random() * 15);
		let removedCard = deckOfCards[i];
		deckOfCards[i] = deckOfCards[random];
		deckOfCards[random] = removedCard;
	}
}
function randomID() {
	return Math.random().toString(36).substring(2, 9);
}

export default function App() {

	let blockEvent = false
	let firstCard;
	let twoCards = 0
	function flipCard(eFlip, cardData){
		if(eFlip.closest('.Card').dataset.pair == 'pair'){
			return;
		}
		if(twoCards < 1){
			firstCard = {cardElement: eFlip.closest('.Card'), id:cardData.id}
			eFlip.closest('.Card').classList.add("flip")
			twoCards++
		}else{
			blockEvent = true
			if(firstCard.cardElement == eFlip.closest('.Card')){
				blockEvent = false
				return;
			}
			eFlip.closest('.Card').classList.add("flip")
			checkPair(eFlip.closest('.Card'), cardData)
		}
	}
	function checkPair(eCheck, cardData){
		if(firstCard.id == cardData.id){
			firstCard.cardElement.dataset.pair = 'pair';
			console.log(eCheck.dataset);
			eCheck.dataset.pair = 'pair'
			setTimeout(() => {
				twoCards = 0
				blockEvent = false
			}, 500);
			return;
		}
		setTimeout(() => {
			firstCard.cardElement.classList.remove('flip')
			eCheck.classList.remove('flip')
				twoCards = 0
				blockEvent = false
		}, 1500);
	}
	function gameFinish(){

	}

	return (
		<div className="container">
			<h1>Hello World!</h1>
			<div className="deckOfCards">
				{deckOfCards.map((card) => {
					return (
						<div
							className="Card"
							key={randomID()}
							onClick={(e) => {
								blockEvent?null:flipCard(e.target, card)
							}}
						>
							<div className="frontCard">
								<img src={`img/${card.name}.png`} alt="" />
							</div>
							<div className="backCard">
								<img src="img/progBR.png" alt="" />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
