import React, { useState, useEffect } from "react";
import "./Tasks.css";
import "./mediaTasks.css";

function Tasks(props) {
	const [allTasksDay, setAllTasksDay] = useState([]);
	const [editTasks, setEditTasks] = useState([]);
	const [showMonthYear, setShowMonthYear] = useState([
		props.ls()[0] + 1,
		props.ls()[1],
	]);
	let content = [];

	let month = props.ls()[0];
	let year = props.ls()[1];
	let day = props.taskDay[0];
	let MONTHS = props.ls()[2];

	if (MONTHS[month].listOfAllTasks) {
		showTasks(MONTHS[month].listOfAllTasks);
	} else {
		showTasks([]);
	}
	// ----- // ------ //
	function showTasks(LOfAT) {
		let listOfAll = LOfAT.filter((e) => e.year == year && e.day == day)[0];
		if (!listOfAll) {
			return;
		}

		for (let tasks of listOfAll.tasks) {
			let workingClass = "";
			if (tasks.check == "check") {
				workingClass = "checkPin";
			}
			let working = React.createElement("div", {
				className: `check ${workingClass}`,
				key: randomID(),
				onClick: (e) => {
					props.Switch(month, year, day, tasks.id);
					if (
						props
							.ls()[2]
							[month].listOfAllTasks.filter(
								(e) => e.year == year && e.day == day
							)[0]
							.tasks.filter((e) => e.id == tasks.id)[0].check == "check"
					) {
						e.target.classList.add("checkPin");
					} else {
						e.target.classList.remove("checkPin");
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
					onClick: (e) => openEditMenu(e, tasks.id),
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
		setShowMonthYear([props.ls()[0] + 1, props.ls()[1]]);
	}, [day]);
	// ----- // ------ //
	function openEditMenu(e, ID) {
		let editFullTr = e.target.parentNode.parentNode;
		let editTx = editFullTr.children[1].innerHTML;

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
				onClick: (e) => updateTask(e, ID),
				src: "img/editBtn.png",
			})
		);
		let editLine = React.createElement("div", { key: ID, className: 'line' }, [
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
	function updateTask(eEdit, ID) {
		let updateFullTr = eEdit.target.parentNode.parentNode;
		let updateTx = updateFullTr.children[1].children[0].value;

		props.update(month, year, day, ID, updateTx);
		content = [];
		showTasks(props.ls()[2][month].listOfAllTasks);
		setAllTasksDay(content);
		setEditTasks(undefined);
	}
	// ----- // ------ //
	function deleteTask(ID) {
		props.delete(month, year, day, ID);
		content = [];
		showTasks(props.ls()[2][month].listOfAllTasks);
		setAllTasksDay(content);
		setEditTasks(undefined);
		props.tAdd(undefined);
	}
	// ----- // ------ //
	function addNewTask(e) {
		let inputTx = e.target.parentNode.children[0];
		if (allTasksDay.length > 14 || inputTx.value.trim() == "") {
			return;
		}
		props.add(month, year, day, inputTx.value);
		inputTx.value = "";
		inputTx.focus();
		content = [];
		showTasks(props.ls()[2][month].listOfAllTasks);
		setAllTasksDay(content);
		props.tAdd(allTasksDay);
	}
	// ----- // ------ //
	function showMenu(){
		let Table = document.getElementById('Table')
		let Shadow = document.getElementById('shadow')
		Table.classList.add('show')
		Shadow.classList.add('show')
		Shadow.addEventListener('click', e=>{
			Table.classList.remove('show')
			Shadow.classList.remove('show')
		})
	}
	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}

	return (
		<>
			<header>
				<div id="divTop">
					<div id="menuBtn">
						<img src="img/menuBtn.png" alt="Botão Menu" onClick={showMenu}/>
					</div>
					<h3 id="Day">
						{day}/{showMonthYear[0]}/{showMonthYear[1]}
					</h3>
					<h1>ToDo List</h1>
				</div>
				<div id="divInput">
					<input
						type="text"
						id="addTask"
						placeholder="Nova tarefa..."
						maxLength={79}
						autoComplete='off'
					/>
					<button id="AddBtn" onClick={addNewTask}>
						Add <img src="img/add.png" />
					</button>
				</div>
			</header>
			<div id="tasksTable">{allTasksDay ? allTasksDay : editTasks}</div>
		</>
	);
}

export default Tasks;
