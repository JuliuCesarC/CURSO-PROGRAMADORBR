import { useState } from "react";
import "./Home.css";
import "./mediaHome.css";
import Days from "../../components/calendar/Days";
import Tasks from "../../components/TodoList/Tasks";
import {
	LocalS,
	calendar,
	selectedDay,
	addNewTask,
	updateTask,
	switchCheck,
	deleteTask,
} from "../../components/localStorage/LocalStorage";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

function App() {
	// const [LS, setLS] = useState(LocalS());
	// const [Month, setMonth] = useState(LS[2][LS[0]].month);
	// const [Year, setYear] = useState(LS[1]);
	// const [taskDay, setTaskDay] = useState([LS[3], Year, LS[0]]);
	// Seleciona o dia que ira aparecer no Tasks.
	// const [updateTaskClass, setUpdateTaskClass] = useState([]);
	// Quando adiciona a primeira tarefa do dia, atualiza o indicador de tarefas daquele dia em questão.

	// function updateDay(month, eDay) {
	// 	selectedDay(month, Year, eDay);
	// 	setLS(LocalS());
	// 	setTaskDay([LocalS()[3], Year, month]);
	// }
	// function updateAdd(e) {
	// 	setUpdateTaskClass(e);
	// }

	const allReducers = combineReducers({
		LocalS: LocalS.reducer,
		calendar: calendar.reducer,
		selectedDay: selectedDay.reducer,
		addNewTask: addNewTask.reducer,
		updateTask: updateTask.reducer,
		switchCheck: switchCheck.reducer,
		deleteTask: deleteTask.reducer,
	});
	const store = configureStore({
		reducer: allReducers,
	});
	return (
		<Provider store={store}>
			<div className="container">
				<Days
					// Ls={LocalS}
					// selectedDay={updateDay}
					// upClass={updateTaskClass}
					// Month={Month}
					// Year={Year}
				/>
				<div id="toDoList">
					{/* <Tasks
						ls={LocalS}
						taskDay={taskDay}
						add={addNewTaskLS}
						Switch={switchCheckLS}
						tAdd={updateAdd}
						update={updateTaskLS}
						delete={deleteTaskLS}
					/> */}
				</div>
				<div id="shadow"></div>
			</div>
		</Provider>
	);
}

export default App;
