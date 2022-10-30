import React, { useState, useEffect } from "react";
import "./Tasks.css";

function Tasks(props) {
	const [allTasksDay, setAllTasksDay] = useState();
	const [editTasks, setEditTasks] = useState();
	const [showMonth, setShowMonth] = useState(props.ls()[0] + 1);
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

	function showTasks(LOfAT) {
		let listOfAll = LOfAT.filter((e) => e.year == year && e.day == day)[0];
		if (!listOfAll) {
			return;
		}

		for (let tasks of listOfAll.tasks) {
			let Src = "img/working.png";
			if (tasks.check == "check") {
				Src = "img/check.png";
			}
			let workingTd = React.createElement(
				"td",
				{
					className: "check",
					key: randomID(),
				},
				React.createElement("img", {
					src: Src,
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
							e.target.src = "img/check.png";
						} else {
							e.target.src = "img/working.png";
						}
					},
				})
			);
			let contentTd = React.createElement(
				"td",
				{
					className: "content",
					key: randomID(),
				},
				tasks.cont
			);
			let editTd = React.createElement(
				"td",
				{ className: "edit", key: randomID() },
				React.createElement("img", {
					src: "img/editBtn.png",
					onClick: (e) => openEditMenu(e, tasks.id),
				})
			);
			let tr = React.createElement("tr", { key: tasks.id }, [
				workingTd,
				contentTd,
				editTd,
			]);
			content.push(tr);
		}
	}
	useEffect(() => {
		setAllTasksDay(content);
		setShowMonth(props.ls()[0] + 1);
	}, [day]);

	function openEditMenu(e, ID) {
		let editFullTr = e.target.parentNode.parentNode;
		let tdContent = editFullTr.children[1];
		let editTx = editFullTr.children[1].innerHTML;
		// tdContent.innerHTML = "";

		let Delete = React.createElement(
			"td",
			{ className: "check", key: randomID() },
			React.createElement("img", {
				src: "img/delete.png",
				onClick: (e) => deleteTask(e, ID),
			})
		);
		let editInput = React.createElement(
			"td",
			{ className: "content", key: randomID() },
			React.createElement("input", {
				type: "text",
				className: "editInput",
				defaultValue: editTx,
			})
		);
		let editBtn = React.createElement(
			"td",
			{ className: "edit", key: randomID() },
			React.createElement("img", {
				onClick: (e) => updateTask(e, ID),
				src: "img/editBtn.png",
			})
		);

		let editTr = React.createElement("tr", { key: ID }, [
			Delete,
			editInput,
			editBtn,
		]);

		let indexTr = content.findIndex((e) => e.key == ID);
		content[indexTr] = editTr;
		setAllTasksDay(undefined);
		setEditTasks(content);
	}
	function updateTask(eEdit, ID) {
		let updateFullTr = eEdit.target.parentNode.parentNode;
		let updateTx = updateFullTr.children[1].children[0].value;

		props.update(month, year, day, ID, updateTx);
		content = [];
		showTasks(props.ls()[2][month].listOfAllTasks);
		setAllTasksDay(content);
		setEditTasks(undefined);
	}
	function deleteTask(eDelete, ID) {
		props.delete(month, year, day, ID);
		content = [];
		showTasks(props.ls()[2][month].listOfAllTasks);
		setAllTasksDay(content);
		setEditTasks(undefined);
	}

	function addNewTask(e) {
		let inputTx = e.target.parentNode.children[0];
		props.add(month, year, day, inputTx.value);
		inputTx.value = "";
		inputTx.focus();
		content = [];
		showTasks(props.ls()[2][month].listOfAllTasks);
		setAllTasksDay(content);
		props.tAdd(allTasksDay);
	}

	function randomID() {
		return Math.random().toString(36).substring(2, 9);
	}

	return (
		<>
			<header>
				<div id="divTop">
					<img src="./img/Caderno.png" alt="" />
					<h3 id="Day">
						{day}/{showMonth}
					</h3>
					<h2>ToDo List</h2>
				</div>
				<div id="divInput">
					<div id="Form">
						<input
							type="text"
							id="addTask"
							placeholder="Adicionar nova tarefa..."
						/>
						<button onClick={addNewTask}>
							Add <img src="" />
						</button>
					</div>
				</div>
			</header>
			<table id="tasks">
				<tbody>{allTasksDay ? allTasksDay : editTasks}</tbody>
			</table>
			<img src="img/empty.png" id="emptyImg" />
		</>
	);
}

export default Tasks;
