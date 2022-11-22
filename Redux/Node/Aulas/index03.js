const redux = require("redux");
const createStore = redux.createStore;
// O Redux possui o método 'combineReducers' para combinar reducers. Dessa forma podemos gerenciar múltiplos estados.
const combineReducer = redux.combineReducers

const incrementAction = (value)=>{ return {type: 'INCREMENT', payload: value || 1}};
const decrementAction = (value)=>{ return {type: 'DECREMENT', payload: value || 1}};

function counterReducer(state = 0, action) {

	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
		case "DECREMENT":
			return state - action.payload;
		default:
			return state;
	}
}
// ---------- / ----------

const addItemAction = (item) => {
	return { type: "ADD_ITEM", payload: item };
};

// Adicionando um segundo reducer para gerenciar uma lista.
const listReducer = (state = ['Item padrão'], action) => {
	switch (action.type) {
		case "ADD_ITEM":
			return [...state, action.payload];

		default:
			return state;
	}
};

const allReducers = combineReducer({
	counter: counterReducer,
	list: listReducer
})

const store = createStore(allReducers)

console.log(store.getState())
store.subscribe(()=>{console.log(store.getState());})

store.dispatch(addItemAction('Novo Item'))
// Quando um dispatch é executado, todos os reducers são acionados, porém somente o reducer com o tipo de ação equivalente é que sera alterado, todos os outros retornaram o estado padrão.
store.dispatch(incrementAction(1))
store.dispatch(incrementAction())
store.dispatch(decrementAction(3))
store.dispatch(incrementAction(5))


