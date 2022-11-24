import { useDispatch } from "react-redux";

export default function HeaderTasks({allTasksDay, monthNumber, year, day}){
	const dispatch = useDispatch()

	function addNewTask(eAdd) {
		if (allTasksDay.length > 14 || eAdd.value.trim() == "") {
			return;
		}
		dispatch({
			type: "tasks/add_new_task",
			payload: { month: monthNumber, year, day, TX: eAdd.value },
		});
		eAdd.value = "";
		eAdd.focus();
		dispatch({
			type: "LocalS/update_ls",
		});
	}

	function showCalendar() {
		let Table = document.getElementById("Table");
		let Shadow = document.getElementById("shadow");
		Table.classList.add("show");
		Shadow.classList.add("show");
		Shadow.addEventListener("click", (e) => {
			Table.classList.remove("show");
			Shadow.classList.remove("show");
		});
	}
	return(
		<header>
				<div id="divTop">
					<div id="menuBtn">
						<img
							src="img/menuBtn.png"
							alt="Botão Menu"
							onClick={showCalendar}
						/>
					</div>
					<h3 id="Day">
						{day}/{monthNumber + 1}/{year}
					</h3>
					<h1>ToDo List</h1>
				</div>
				<div id="divInput">
					<input
						type="text"
						id="addTask"
						placeholder="Nova tarefa..."
						maxLength={79}
						autoComplete="off"
						onKeyUp={(e) => {
							let key = e.key;
							if (key == "Enter") {
								addNewTask(e.target);
							}
						}}
					/>
					<button
						id="AddBtn"
						onClick={(e) => addNewTask(e.target.parentNode.children[0])}
					>
						Add <img src="img/add.png" />
					</button>
				</div>
			</header>
	)
}