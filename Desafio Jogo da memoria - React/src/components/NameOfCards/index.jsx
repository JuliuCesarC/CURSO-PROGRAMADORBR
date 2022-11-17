const nameAndID = [
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
function randomID() {
	return Math.random().toString(36).substring(2, 9);
}
export const NameOfCards = [nameAndID, nameAndID].flat();
