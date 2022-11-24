import { useDispatch } from "react-redux";

export function Working(React ,check, monthNumber, year, day, id){
	const dispatch = useDispatch();
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
export function ContentTx(React, cont){
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
export function Edit(React, id, openEditMenu){
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

function randomID() {
	return Math.random().toString(36).substring(2, 9);
}