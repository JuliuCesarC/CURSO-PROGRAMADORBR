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
	for(let i of Name){
		let ID = Math.random().toString(36).substring(2, 9);
		i.id = ID
		i.flip = false
	}
	return Name
}
export const NameOfCards = [configCards(), configCards()].flat();
