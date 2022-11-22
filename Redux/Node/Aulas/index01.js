const redux = require("redux");
const createStore = redux.createStore;
// O método createStore é o responsável por criar o encapsulamento onde vai ficar o estado.

// Uma ação possui um 'tipo' e uma 'carga', o que basicamente é um objeto. Para uma ação simples como incrementar ou decrementar, não é preciso nem da carga, o tipo será suficiente.
const incrementAction = { type: "INCREMENT" };
const decrementAction = { type: "DECREMENT" };

// Uma ação por si só não faz nada, ela precisa do Reducer para executar a ação. E o reducer é uma função.
function counterReducer(state = 0, action) {
	// No próprio reducer declaramos o que o estado ira retornar caso não haja nenhuma ação.
	// O resultado que o Reducer ira entregar, depende do tipo de ação que foi chamada.

	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		default:
			return state;
	}
}
// Para criar o local onde sera armazenado o estado, utilizaremos o 'createStore'.
// Atualmente o Redux recomenta a utilização do Redux Toolkit, que é mais atual e previne alguns erros básicos. O 'createStore' abaixo esta como 'deprecated', porém ele ainda funciona.
const store = createStore(counterReducer);
// O 'createStore' recebe como parâmetro o Reducer.

console.log(store.getState());
store.subscribe(() => {
	console.log(store.getState());
});
// Toda vez que houver uma alteração no estado, o 'subscribe' ira executar a ação. Porém, ao executar o código nada acontece, pois nenhuma ação foi executada.

// Para levar a ação até o Reducer utilizamos um 'dispatch'.
store.dispatch(incrementAction);
store.dispatch(incrementAction);
store.dispatch(decrementAction);
store.dispatch(incrementAction);
