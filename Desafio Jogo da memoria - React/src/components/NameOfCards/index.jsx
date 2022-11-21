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
	let newName = JSON.parse(JSON.stringify(Name))
	// Utilizando esses 2 métodos do JSON podemos criar um cópia profunda e segura de um objeto, pois métodos como .map ou um laço de loop acabam por criar uma referencia ao valor do objeto do que uma cópia do valor em si. É preciso prestar atenção se os dados dentro do objeto são compatíveis com os métodos JSON, dados como funções, RegExp, undefined entre outros não são compatíveis.
	for(let i of newName){
		let ID = Math.random().toString(36).substring(2, 9);
		i.id = ID
		i.flip = false
	}
	return newName
}

export const NameOfCards = [configCards(), configCards()].flat();
