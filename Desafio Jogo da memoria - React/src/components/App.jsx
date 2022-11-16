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
								e.target.parentNode.classList.length > 1
								?e.target.parentNode.classList.remove("flip")
								:e.target.parentNode.classList.add("flip")
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
