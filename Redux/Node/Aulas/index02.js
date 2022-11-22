const redux = require("redux");
const createStore = redux.createStore;

// O ação abaixo funciona normalmente, porém o valor do increment esta fixo, e foi definido dentro do Reducer. Para resolver este problema precisamos passar além do tipo de ação, o valor/carga: 'payload'.
const incrementAction = (value)=>{ return {type: 'INCREMENT', payload: value || 1}};
// A maneira mais fácil é tornar o 'incrementAction' em uma arrow function. Precisamos utilizar o operador logico || para corrigir o erro de que caso não seja passado o valor para a ação, ela ira retornar NaN quando executada no Reducer.
const decrementAction = (value)=>{ return {type: 'DECREMENT', payload: value || 1}};

function counterReducer(state = 0, action) {

	switch (action.type) {
		case "INCREMENT":
			return state + action.payload;
			// precisamos também alterar como o INCREMENT ira funcionar dentro do reducer.
		case "DECREMENT":
			return state - action.payload;
		default:
			return state;
	}
}

const store = createStore(counterReducer)

console.log(store.getState())
store.subscribe(()=>{console.log(store.getState());})

store.dispatch(incrementAction(1))
// A forma como passamos a ação para o dispatch também muda. Agora como temos uma ação em forma de função, então primeiro precisamos executar ela, passando ou não algum parâmetro.
store.dispatch(incrementAction())
store.dispatch(decrementAction(3))
store.dispatch(incrementAction(5))