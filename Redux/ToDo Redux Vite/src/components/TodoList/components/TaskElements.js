import React from "react";

// CREATE ELEMENTS TASKS ----------
export function Working(dispatch, check, monthNumber, year, day, id){
	let working = React.createElement("div", {
		className: `check ${check == "check" ? "checkPin" : ""}`,
		key: randomID(),
		onClick: (e) => {
			dispatch({
				type: "tasks/switch_check",
				payload: { month: monthNumber, year, day, ID: id },
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
	return working
}
export function ContentTx(cont){
	let contentTx = React.createElement(
		"div",
		{
			className: "content",
			key: randomID(),
		},
		cont
	);
	return contentTx
}
export function Edit(id, openEditMenu){
	let edit = React.createElement(
		"div",
		{ className: "edit", key: randomID() },
		React.createElement("img", {
			src: "img/editBtn.png",
			onClick: (e) =>
				openEditMenu(e.target.parentNode.parentNode, id),
		})
	);
	return edit
}
// CREATE ELEMENTS EDIT ----------
export function DeleteIcon(deleteTask, ID){
	let deleteIcon = React.createElement(
		"div",
		{ className: "delete", key: randomID() },
		React.createElement("img", {
			src: "img/delete.png",
			onClick: () => deleteTask(ID),
		})
	);
	return deleteIcon
}
export function EditInput(editTx){
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
	return editInput
}
export function EditBtn(updateTask, ID){
	let editBtn = React.createElement(
		"div",
		{ className: "edit", key: randomID() },
		React.createElement("img", {
			onClick: (e) => updateTask(e.target.parentNode.parentNode, ID),
			src: "img/editBtn.png",
		})
	);
	return editBtn
}

function randomID() {
	return Math.random().toString(36).substring(2, 9);
}