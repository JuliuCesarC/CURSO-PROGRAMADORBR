import { configureStore, combineReducers } from "@reduxjs/toolkit";
import "./App.css";
import Counter from "./components/Counter";
import Header from "./components/Header";
import { counterSlice } from "./reducers/counterSlice";
import { listSlice } from "./reducers/listSlice";
import { Provider } from "react-redux";
import List from "./components/List";

function App() {
	const allReducers = combineReducers({
		contador: counterSlice.reducer,
		lista: listSlice.reducer
	})
	
	const store = configureStore({
		reducer: allReducers,
	});

	return (
		<div className="App">
			<Provider store={store}>
				<Header />
				<Counter />
				<List />
			</Provider>
		</div>
	);
}

export default App;
