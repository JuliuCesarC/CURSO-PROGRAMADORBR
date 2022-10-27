import "./Home.css";
import Days from "../../components/calendar/Days";
import Tasks from "../../components/TodoList/Tasks";
import {
	LocalS,
	addNewTaskLS,
	updateTaskLS,
	switchCheckLS,
	deleteTaskLS,
	showTasksLS,
} from "../../components/localStorage/LocalStorage";

function App() {
	return (
		<div className="container">
			<div id="Table">
				<header id="Header">
					<button className="btn-prev" id="Btn-Prev">
						&lt;
					</button>
					<h2 id="month">Outubro</h2>
					<button className="btn-next" id="Btn-Next">
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
					<Days ls={LocalS()} />
					<tfoot>
						<tr>
							<td colSpan={7} id="year">
								2022
							</td>
						</tr>
					</tfoot>
				</table>
			</div>
			<div id="toDoList">
				<Tasks />
			</div>
		</div>
	);
}

export default App;
