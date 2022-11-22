const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// Por convenção é utilizado os reducers a as actions separados, uma pasta para todos os reducers, e outra só para as actions.
const {
	incrementAction,
	decrementAction,
} = require("./actions/CounterActions");
const { addItemAction } = require("./actions/ListActions");

const counterReducer = require('./reducers/CounterReducer')
const listReducer = require('./reducers/ListReducer')

const allReducers = combineReducer({
	counter: counterReducer,
	list: listReducer,
});

const store = createStore(allReducers);

console.log(store.getState());
store.subscribe(() => {
	console.log(store.getState().counter);
	// Caso for necessário imprimir somente os estados do contador(exemplo acima), então podemos adicionar o nome do reducer apos o 'getState', nesse caso o 'counter', pois esse foi o nome setado dentro do 'combineReducer'.
});

store.dispatch(addItemAction("Novo Item"));
store.dispatch(incrementAction(1));
store.dispatch(incrementAction());
store.dispatch(decrementAction(3));
store.dispatch(incrementAction(5));
