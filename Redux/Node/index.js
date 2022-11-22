const { configureStore, combineReducers } = require("@reduxjs/toolkit");

// Por convenção é utilizado os reducers a as actions separados, uma pasta para todos os reducers, e outra só para as actions.
const {
	incrementAction,
	decrementAction,
} = require("./actions/CounterActions");
const { addItemAction } = require("./actions/ListActions");

const counterSlice = require("./reducers/CounterSlice");
const listSlice = require("./reducers/ListSlice");

const allReducers = combineReducers({
	counter: counterSlice.reducer,
	list: listSlice.reducer,
});

const store = configureStore({
	reducer: allReducers,
});

store.subscribe(() => {
	// console.log(store.getState().counter);
	// Caso for necessário imprimir somente os estados do contador(exemplo acima), então podemos adicionar o nome do reducer apos o 'getState', nesse caso o 'counter', pois esse foi o nome setado dentro do 'combineReducer'.
	console.log(store.getState());
});

store.dispatch(incrementAction(1));
store.dispatch(addItemAction("Novo Item"));
store.dispatch(incrementAction());
store.dispatch(decrementAction(3));
store.dispatch(incrementAction(5));
