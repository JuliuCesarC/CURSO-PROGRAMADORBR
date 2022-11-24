import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
	ContentTx,
	Edit,
	Working,
	EditBtn,
	EditInput,
	DeleteIcon,
} from "./components/TaskElements";
import "./Tasks.css";
import "./mediaTasks.css";
import HeaderTasks from "./components/HeaderTasks";

export default function Tasks() {
	const [editTasks, setEditTasks] = useState([]);
	const [allTasksDay, setAllTasksDay] = useState([]);
	const taskLS = useSelector((state) => {
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

	taskLS[monthNumber].listOfAllTasks
		? showTasks(taskLS[monthNumber].listOfAllTasks)
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
			let working = Working(
				dispatch,
				tasks.check,
				monthNumber,
				year,
				day,
				tasks.id
			);
			let contentTx = ContentTx(tasks.cont);
			let edit = Edit(tasks.id, openEditMenu);

			let line = React.createElement(
				"div",
				{ key: tasks.id, className: "line" },
				[working, contentTx, edit]
			);
			content.push(line);
		}
	}
	// --------------- // ---------------- //
	useEffect(() => {
		setAllTasksDay(content);
	}, [day, taskLS]);
	// --------------- // ---------------- //

	// --------------- // ---------------- //
	function openEditMenu(eEdit, ID) {
		let editTx = eEdit.children[1].innerHTML;

		let Delete = DeleteIcon(deleteTask, ID)
		let editInput = EditInput(editTx)
		let editBtn = EditBtn(updateTask, ID);
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
	// --------------- // ---------------- //
	function updateTask(eUpdate, ID) {
		let updateTx = eUpdate.children[1].children[0].value;
		////////{month, year, day, ID, TX:updateTx}
		dispatch({
			type: "tasks/update_task",
			payload: { month: monthNumber, year, day, ID, TX: updateTx },
		});
		dispatch({
			type: "LocalS/update_ls",
		});
	}
	// --------------- // ---------------- //
	function deleteTask(ID) {
		dispatch({
			type: "tasks/delete_task",
			payload: { month: monthNumber, year, day, ID },
		});
		dispatch({
			type: "LocalS/update_ls",
		});
	}
	// --------------- // ---------------- //


	return (
		<>
			<HeaderTasks
			allTasksDay={allTasksDay}
			monthNumber={monthNumber}
			year={year}
			day={day}
			/>
			<div id="tasksTable">{allTasksDay ? allTasksDay : editTasks}</div>
		</>
	);
}
