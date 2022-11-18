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
	let newName = []
	for(let i = 0 ; i<= Name.length; i++){
		let ID = Math.random().toString(36).substring(2, 9);
		console.log(configCards(newName));
		// newName[i].id = ID
		// newName[i].flip = false
	}
	return newName
}
console.log(configCards());
setTimeout(() => {
	console.log(configCards());
	
}, 10000);
export const NameOfCards = [configCards(), configCards()].flat();
