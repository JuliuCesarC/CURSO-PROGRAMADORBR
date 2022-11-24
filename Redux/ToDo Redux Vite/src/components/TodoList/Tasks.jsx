import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Tasks.css";
import "./mediaTasks.css";

function Tasks(props) {
	const [allTasksDay, setAllTasksDay] = useState([]);
	const [editTasks, setEditTasks] = useState([]);
	const taskLS = useSelector((state) => {
		return state.LocalS.value;
	});
	const checkLS = useSelector((state) => {
		return state.tasks.value;
	});
	const selectedDay = useSelector((state) => {
		return state.selectedDay.value;
	});
	const dispatch = useDispatch();
	let content = [];

	let monthNumber = selectedDay.month;
	let year = selectedDay.year;
	let day = selectedDay.day;
	let MONTHS = taskLS[2];

	let alternateCheck = checkLS[monthNumber].listOfAllTasks
		? checkLS[monthNumber].listOfAllTasks.filter(
				(e) => e.year == year && e.day == day
		  )[0].tasks
		: null;

	MONTHS[monthNumber].listOfAllTasks
		? showTasks(MONTHS[monthNumber].listOfAllTasks)
		: showTasks([]);
	// ----- // ------ //
	function showTasks(listOfAllTasks) {
		let listOfAll = listOfAllTasks.filter(
			(e) => e.year == year && e.day == day
		)[0];
		if (!listOfAll) {
			return;
		}

		for (let tasks of listOfAll.tasks) {
			let working = React.createElement("div", {
				className: `check ${tasks.check == "check" ? "checkPin" : ""}`,
				key: randomID(),
				onClick: (e) => {
					dispatch({
						type: "tasks/switch_check",
						payload: { month: monthNumber, year, day, ID: tasks.id },
					});
					if (
						e.target.classList.length > 1
					) {
						e.target.classList.remove("checkPin");
					} else {
						e.target.classList.add("checkPin");
					}
				},
			});
			let contentTx = React.createElement(
				"div",
				{
					className: "content",
					key: randomID(),
				},
				tasks.cont
			);
			let edit = React.createElement(
				"div",
				{ className: "edit", key: randomID() },
				React.createElement("img", {
					src: "img/editBtn.png",
					onClick: (e) =>
						openEditMenu(e.target.parentNode.parentNode, tasks.id),
				})
			);
			let line = React.createElement(
				"div",
				{ key: tasks.id, className: "line" },
				[working, contentTx, edit]
			);
			content.push(line);
		}
	}
	// ----- // ------ //
	useEffect(() => {
		setAllTasksDay(content);
	}, [day, taskLS]);
	// ----- // ------ //
	function openEditMenu(eEdit, ID) {
		let editTx = eEdit.children[1].innerHTML;

		let Delete = React.createElement(
			"div",
			{ className: "delete", key: randomID() },
			React.createElement("img", {
				src: "img/delete.png",
				onClick: () => deleteTask(ID),
			})
		);
		let editInput = React.createElement(
			"div",
			{ className: "content", key: randomID() },
			React.createElement("input", {
				type: "text",
				className: "editInput",
				defaultValue: editTx,
				maxLength: 79,
			})
		);
		let editBtn = React.createElement(
			"div",
			{ className: "edit", key: randomID() },
			React.createElement("img", {
				onClick: (e) => updateTask(e.target.parentNode.parentNode, ID),
				src: "img/editBtn.png",
			})
		);
		let editLine = React.createElement("div", { key: ID, className: "line" }, [
			Delete,
			editInput,
			editBtn,
		]);

		let indexTr = content.findIndex((e) => e.key == ID);
		content[indexTr] = editLine;
		setAllTasksDay(undefined);
		setEditTasks(content);
	}
	// ----- // ------ //
	function updateTask(eUpdate, ID) {
		let updateTx = eUpdate.children[1].children[0].value;
		////////{month, year, day, ID, TX:updateTx}
		props.update(monthNumber, year, day, ID, updateTx);
		content = [];
		showTasks(taskLS[2][monthNumber].listOfAllTasks);
		setAllTasksDay(content);
		setEditTasks(undefined);
	}
	// ----- // ------ //
	function deleteTask(ID) {
		props.delete(monthNumber, year, day, ID);
		content = [];
		showTasks(taskLS[2][monthNumber].listOfAllTasks);
		setAllTasksDay(content);
		setEditTasks(undefined);
		props.tAdd(undefined);
	}
	// ----- // ------ //
	function addNewTask(eAdd) {
		if (allTasksDay.length > 14 || eAdd.value.trim() == "") {
			return;
		}
		dispatch({
			type: "addNewTask/add_new_task",
			payload: { month: monthNumber, year, day, TX: eAdd.value },
		});
		eAdd.value = "";
		eAdd.focus();
		dispatch({
			type: "LocalS/update_ls",
		});
	}
	// ----- // ------ //
	function showMenu() {
		let Table = document.getElementById("Table");
		let Shadow = document.getElementById("shadow");
		Table.classList.add("show");
		Shadow.classList.add("show");
		Shadow.addEventListener("click", (e) => {
			Table.classList.remove("show");
			Shadow.classList.remove("show");
		});
	}
	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}

	return (
		<>
			<header>
				<div id="divTop">
					<div id="menuBtn">
						<img src="img/menuBtn.png" alt="Botão Menu" onClick={showMenu} />
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
			<div id="tasksTable">{allTasksDay ? allTasksDay : editTasks}</div>
		</>
	);
}

export default Tasks;
