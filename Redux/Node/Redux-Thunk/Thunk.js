const { createStore, applyMiddleware } = require("redux");
const fetch = require("node-fetch");
// como estamos utilizando o node, precisamos do node-fetch para fazer uma requisição.

// ----- O THUNK resolve o problema de sincronismo. -----
// Quando precisamos trazer o valor para o payload de uma API, o reducer sera executado antes do retorno dessa API.
const thunk = require("redux-thunk").default;
// É preciso adicionar o 'default' no final da importação do redux thunk.

const initialState = [
	{
		id: 0,
		title: "Tarefa",
		completed: false,
	},
];

const addItem = (item) => {
	return { type: "ADD_ITEM", payload: item };
};

// Com o thunk podemos criar um action creator que retorna uma função, dentro dessa função é que utilizaremos a requisição assíncrona, e o 'dispatch' será apenas executado ao final da requisição.
const loadItemAndAdd = () => {
	return (dispatch) => {
		fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((res) => res.json())
			.then((json) => dispatch(addItem(json)));
	};
};

const listReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return [...state, action.payload];

		default:
			return state;
	}
};

const store = createStore(listReducer, applyMiddleware(thunk));
// O 'applyMiddleware' é um middleware do próprio redux e funciona como qualquer outro.

store.dispatch(loadItemAndAdd());
// Com o thunk podemos executar o action creator como uma action normal.

store.subscribe(() => {
	console.log(store.getState());
});
