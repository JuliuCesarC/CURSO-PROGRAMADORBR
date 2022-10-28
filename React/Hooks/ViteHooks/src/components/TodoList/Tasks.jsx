import React, { useState,useEffect } from "react";
import "./Tasks.css";

function Tasks(props) {
	const [allTasksDay, setAllTasksDay] = useState([]);
	let content = [];

	let month = props.ls[0];
	let year = props.ls[1];
	let day = props.taskDay[0];
	let MONTHS = props.ls[2];

	if (MONTHS[month].listOfAllTasks) {
		showTasks();
	}

	function showTasks() {
		let listOfAll = MONTHS[month].listOfAllTasks.filter(
			(e) => e.year == year && e.day == day
		)[0];
		if (!listOfAll) {
			return
		}
		let Src = "img/working.png";
		let index = 0
		for (let tasks of listOfAll.tasks) {
			if (tasks.check == "check") {
				Src = "img/check.png";
			}
			let workingTd = React.createElement(
				"td",
				{
					className: "check",
				},
				React.createElement("img", {
					src: Src,
					onClick: props.Switch(month, year, day, tasks.id),
				})
			);
			let contentTd = React.createElement(
				"td",
				{
					className: "content",
				},
				tasks.cont
			);
			let editTd = React.createElement('td', {className: 'edit'}, React.createElement('img', {src: 'img/editBtn.png', onClick: openEditMenu(tasks.id)}))
			let tr = React.createElement("tr", {key: index}, [workingTd, contentTd, editTd]);
			content.push(tr);
			index++
		}
	}
	useEffect(()=>{
		setAllTasksDay(content)
	},[day])
	function openEditMenu(ID) {
		console.log('Menu', ID);
	}

	function addNewTask(e) {
		let inputTx = e.target.parentNode.children[0];
		props.add(month, year, day, inputTx.value);
		inputTx.value = "";
		inputTx.focus();
		showTasks()
			setAllTasksDay(content)
	}

	return (
		<>
			<header>
				<div id="divTop">
					<img src="./img/Caderno.png" alt="" />
					<h3 id="Day">
						{day}/{month + 1}
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
			<table id="tasks"><tbody>{allTasksDay}</tbody></table>
			<img src="img/empty.png" id="emptyImg" />
		</>
	);
}

export default Tasks;
