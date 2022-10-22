function startTodo() {
	const months = [
		{ month: "janeiro" },
		{ month: "fevereiro" },
		{ month: "março" },
		{ month: "abril" },
		{ month: "maio" },
		{ month: "junho" },
		{ month: "julho" },
		{ month: "agosto" },
		{ month: "setembro" },
		{ month: "outubro" },
		{ month: "novembro" },
		{ month: "dezembro" },
	];

	if (!localStorage.getItem("ToDoList")) {
		localStorage.setItem("ToDoList", JSON.stringify(months));
	} else {
		months.forEach((e, i) => {
			months[i] = JSON.parse(localStorage.getItem("ToDoList"))[i];
		});
	}

	let Now = new Date();
	let month = Now.getMonth();
	let year = Now.getFullYear();
	showDays(month, year, months);
}
function addNewTaskLS(month, year, day, TX) {
	let fullLS = JSON.parse(localStorage.getItem("ToDoList"));
	let LSMonth = fullLS[month];
	let newTask = {
		year: year,
		day: day,
		tasks: [],
	};
	newTask.tasks.push({ id: randomID(), cont: TX, check: "working" });
	if (!LSMonth.listOfAllTasks) {
		LSMonth.listOfAllTasks = [];
	}
	LSMonth.listOfAllTasks.push(newTask);
	localStorage.setItem("ToDoList", JSON.stringify(fullLS));
	startTodo()
}
function updateTaskLS(month, ID, TX) {
	// console.log(TX);
	// let fullLS = JSON.parse(localStorage.getItem('ToDoList'))[month]
	// console.log(fullLS);
}
function randomID() {
	return Math.random().toString(36).substring(2, 9);
}
