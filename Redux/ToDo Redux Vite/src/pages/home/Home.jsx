import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import Days from "../../components/calendar/Days";
import Tasks from "../../components/TodoList/Tasks";
import {
	LocalS,
	calendar,
	selectedDay,
	tasks,
} from "../../components/localStorage/LocalStorage";
import "./Home.css";
import "./HomeMedia.css";

function App() {
	const allReducers = combineReducers({
		LocalS: LocalS.reducer,
		calendar: calendar.reducer,
		selectedDay: selectedDay.reducer,
		tasks: tasks.reducer,
	});
	const store = configureStore({
		reducer: allReducers,
	});
	return (
		<Provider store={store}>
			<div className="container">
				<Days />
				<div id="toDoList">
					<Tasks />
				</div>
				<div id="shadow"></div>
			</div>
		</Provider>
	);
}

export default App;
