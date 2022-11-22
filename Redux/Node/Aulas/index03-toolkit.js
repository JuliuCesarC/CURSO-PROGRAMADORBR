const { createSlice, configureStore, combineReducers } = require('@reduxjs/toolkit')
// O Toolkit é a maneira mais atual de utilizar o redux, e existem algumas diferenças, a primeira é na instalação e obviamente na importação, pois agora se chama @reduxjs/toolkit.

const incrementAction = (value)=>{ return {type: 'counter/INCREMENT', payload: value || 1}};
// Outra diferença é na hora de criar a action, precisamos passar o nome do reducer(o que foi criado dentro do createSlice) antes do tipo, 'counter/INCREMENT'. 
const decrementAction = (value)=>{ return {type: 'counter/DECREMENT', payload: value || 1}};

const counterSlice = createSlice({
	// Agora temos uma maneira própria do redux para criar um reducer, e é utilizando o 'createSlice'.
	name: 'counter',
	initialState: {value: 0},
	reducers: {
		INCREMENT: (state, action) => {
			state.value += action.payload
		},
		DECREMENT: (state, action) => {
			state.value -= action.payload
		},
  }
})

// ---------- / ----------

const addItemAction = (item) => {
	return { type: "list/ADD_ITEM", payload: item };
};

const listSlice = createSlice({
	name: 'list',
	initialState: {value: ['Item padrão']},
	reducers: {
		ADD_ITEM: (state, action) => {
			state.value = [...state.value, action.payload]
		},		
  }
})

const allReducers = combineReducers({
	// O 'combineReducers' continua igual, porém como agora utilizamos o createSlice para criar o reducer, então precisamos adicionar o '.reducer' no final do nome do reducer.
	counterCombine: counterSlice.reducer,
	listCombine: listSlice.reducer
})

const store = configureStore({
	// Anteriormente 'createStore' agora 'configureStore' recebe um objeto como parâmetro e o reducer ou combineReducers vai no campo 'reducer'.

	// reducer: counterSlice.reducer
	reducer: allReducers
})

store.subscribe(()=>{console.log(store.getState());})
// Os métodos do 'createStore' continuam os mesmos para o 'configureStore'.

store.dispatch(incrementAction(1))
store.dispatch(addItemAction('Novo Item'))
store.dispatch(incrementAction())
store.dispatch(decrementAction(3))
store.dispatch(incrementAction(5))


