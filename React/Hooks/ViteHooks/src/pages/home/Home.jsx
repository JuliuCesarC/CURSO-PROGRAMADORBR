import { useState } from "react";
import "./Home.css";
import Days from "../../components/calendar/Days";
import Tasks from "../../components/TodoList/Tasks";
import {
	LocalS,
	prevNextMonth,
	selectedDay,
	addNewTaskLS,
	updateTaskLS,
	switchCheckLS,
	deleteTaskLS,
} from "../../components/localStorage/LocalStorage";

function App() {
	const [LS, setLS] = useState(LocalS());
	const [Month, setMonth] = useState(LS[2][LS[0]].month);
	const [Year, setYear] = useState(LS[1]);
	const [taskDay, setTaskDay] = useState([LS[3], Year, LS[0]]);

	function PrevNext(e) {
		prevNextMonth(e);
		setLS(LocalS());
		setMonth(LS[2][LocalS()[0]].month);
		setYear(LocalS()[1]);
	}

	function updateDay(e) {
		selectedDay(LS[0], Year, e);
		setTaskDay([LocalS()[3], Year, LS[0]]);
	}

	return (
		<div className="container">
			<div id="Table">
				<header id="Header">
					<button className="btn-prev" id="Btn-Prev" onClick={PrevNext}>
						&lt;
					</button>
					<h2 id="month">{Month}</h2>
					<button className="btn-next" id="Btn-Next" onClick={PrevNext}>
						&gt;
					</button>
				</header>
				<table>
					<thead>
						<tr id="daysOfWeek">
							<td>D</td>
							<td>S</td>
							<td>T</td>
							<td>Q</td>
							<td>Q</td>
							<td>S</td>
							<td>S</td>
						</tr>
					</thead>
					<Days ls={LS} selectedDay={updateDay} />
					<tfoot>
						<tr>
							<td colSpan={7} id="year">
								{Year}
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div id="toDoList">
				<header>
					<img src="./img/Caderno.png" alt="" />
					<h3 id="Day">
						{taskDay[0]}/{taskDay[2]+1}
					</h3>
					<h2>ToDo List</h2>
				</header>
				<Tasks ls={LS} taskDay={taskDay} add={addNewTaskLS} />
			</div>
		</div>
	);
}

export default App;
