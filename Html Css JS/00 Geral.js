
const Name = [
	{ name: "bootstrap", },
	{ name: "css", },
	{ name: "electron", },
	{ name: "firebase", },
	{ name: "html", },
	{ name: "javascript", },
	{ name: "jquery", },
	{ name: "mongo", },
	{ name: "node", },
	{ name: "react", },
	{ name: "redux", },
	{ name: "swift", },
	{ name: "vite", },
	{ name: "vscode", },
	{ name: "vue", },
];
function configCards() {
	for(let i = 0; i < 15 ; i++){
		let ID = Math.random().toString(36).substring(2, 9);
		Name[i].id = ID
		Name[i].flip = false
	}
	return Name
}
const NameOfCards = [configCards(), configCards()].flat();

console.log(NameOfCards);